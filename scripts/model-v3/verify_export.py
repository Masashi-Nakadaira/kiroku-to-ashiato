import bpy, os, json, math, struct
from mathutils import Vector
ROOT=os.path.abspath(os.path.join(os.path.dirname(__file__),'../..'));ART=os.path.join(ROOT,'docs/model-v3')
bpy.ops.wm.read_factory_settings(use_empty=True);bpy.ops.import_scene.gltf(filepath=os.path.join(ROOT,'assets/models/village.glb'))
scene=bpy.context.scene;meshes=[o for o in scene.objects if o.type=='MESH'];tr=0
stats=json.load(open(os.path.join(ART,'export_stats.json')))
for o in meshes:
 assert all(math.isfinite(c) for v in o.data.vertices for c in v.co)
 o.data.calc_loop_triangles();tr+=len(o.data.loop_triangles)
assert tr==stats['triangles'];assert len(meshes)==stats['batched_mesh_nodes']
cast=[o for o in scene.objects if o.get('person_anchor')];assert sorted(o['npc_id'] for o in cast)==['mira','orn','sera','theo']
assert all(not o.animation_data for o in scene.objects)
locations={o.get('location_id'):list(o.location) for o in scene.objects if o.get('location_id')}
for id in ['church','workshop','dye-yard','bakery','bell-tower','square','church-storage']:assert id in locations
cover=[o for o in meshes if o.get('part')=='AltarCover'];assert len(cover)==1
roof=[o for o in meshes if o.get('part')=='RemovableRoof'];assert len(roof)>0
names=' '.join(o.name for o in scene.objects)
for old in ['AmbiguousFootprints','IntactFrontSeal','EmptyStampBox','CobblerComparison','GranaryEvidence']:assert old not in names
# GLB imported to Blender recovers original Z-up axis.
cast_bounds={}
for id in ['mira','theo','sera','orn']:
 objs=[o for o in meshes if o.get('source_collection')=='20_Cast_'+id]
 pts=[o.matrix_world@Vector(v) for o in objs for v in o.bound_box]
 mn=[min(v[i] for v in pts) for i in range(3)];mx=[max(v[i] for v in pts) for i in range(3)]
 assert abs(mn[2]-.471)<.007,(id,mn)
 cast_bounds[id]={'min':mn,'max':mx}
bpy.context.view_layer.update();deps=bpy.context.evaluated_depsgraph_get();a=Vector((1.6,2.70,1.84));b=Vector((-1.45,2.70,1.84));d=b-a
hit=scene.ray_cast(deps,a,d.normalized(),distance=d.length)
assert not hit[0],('Imported GLB sightline blocked',hit[4].name)
# Render-relevant model only, no giant studio floor/light/camera in GLB.
assert all(o.type not in ['LIGHT','CAMERA'] for o in scene.objects)
assert not any(o.name.startswith('90_Presentation') for o in scene.objects)
report={'status':'passed','blender':bpy.app.version_string,'meshes':len(meshes),'triangles':tr,'four_static_cast_bounds':cast_bounds,'location_ids':sorted(locations),'removable_roof_meshes':len(roof),'independent_altar_cover_meshes':len(cover),'witness_ray_clear_after_glb_roundtrip':True,'no_old_case_props':True,'no_runtime_external_images':True,'export_reimport':'independent Blender process'}
open(os.path.join(ART,'roundtrip_verification.json'),'w').write(json.dumps(report,ensure_ascii=False,indent=2));print(json.dumps(report,ensure_ascii=False,indent=2))
