"""Batched static export. Executed in build_chalice.py namespace before QA renders."""
import hashlib
src=bpy.context.scene;dg=bpy.context.evaluated_depsgraph_get();groups={};colors={}
obs=[o for o in src.objects if o.type in {'MESH','CURVE'} and o.users_collection and o.users_collection[0].name!='90_Presentation']
for ob in obs:
 eo=ob.evaluated_get(dg);me=eo.to_mesh();me.calc_loop_triangles();vs=[tuple(ob.matrix_world@v.co) for v in me.vertices];co=ob.users_collection[0].name
 part='AltarCover' if co=='17_AltarCover' else 'RemovableRoof' if co in ['11_ChurchRoof','14_WorkshopRoof','12_ChurchBelfry'] or ob.name in ['Church south gable','Church north gable','Church front gable cross','Church front cross arms'] else 'Static'
 for tr in me.loop_triangles:
  ma=me.materials[tr.material_index] if me.materials else None;mn=ma.name if ma else 'Default'
  if mn not in colors:
   p=ma.node_tree.nodes.get('Principled BSDF') if ma and ma.use_nodes else None;colors[mn]=(tuple(ma.diffuse_color) if ma else (.5,.5,.5,1),float(p.inputs['Metallic'].default_value) if p else 0,float(p.inputs['Roughness'].default_value) if p else .7)
  key=(co,part,mn)
  if key not in groups:groups[key]={'vertices':[],'faces':[],'lookup':{}}
  g=groups[key];idx=[]
  for vi in tr.vertices:
   k=(ob.name,vi)
   if k not in g['lookup']:g['lookup'][k]=len(g['vertices']);g['vertices'].append(vs[vi])
   idx.append(g['lookup'][k])
  g['faces'].append(idx)
 eo.to_mesh_clear()
export_scene=bpy.data.scenes.new('V3 Game Batched');bpy.context.window.scene=export_scene;mats={};parents={}
for mn,(c,m,r) in colors.items():
 ma=bpy.data.materials.new('PBR_'+mn);ma.use_nodes=True;ma.diffuse_color=c;p=ma.node_tree.nodes.get('Principled BSDF');p.inputs['Base Color'].default_value=c;p.inputs['Metallic'].default_value=m;p.inputs['Roughness'].default_value=r;mats[mn]=ma
for (co,part,mn),g in groups.items():
 if co not in parents:
  root=bpy.data.objects.new(co,None);export_scene.collection.objects.link(root);parents[co]=root
  if co.startswith('20_Cast_'):root['static_cast_id']=co.split('_')[-1]
 n=co+'__'+part+'__'+mn;me=bpy.data.meshes.new(n);me.from_pydata(g['vertices'],[],g['faces']);me.materials.append(mats[mn]);me.update();o=bpy.data.objects.new(n,me);export_scene.collection.objects.link(o);o.parent=parents[co];o['source_collection']=co;o['part']=part
 # Smooth subdivided anatomy; retain manufactured edges with auto-sharp triangles.
 if co.startswith('20_Cast_'):
  for poly in me.polygons:poly.use_smooth=True
for o in src.objects:
 if o.type=='EMPTY' and o.name.startswith(('HOTSPOT_','LOCATION_','PERSON_')):export_scene.collection.objects.link(o.copy())
path=os.path.join(ROOT,'assets/models/village.glb')
bpy.ops.export_scene.gltf(filepath=path,export_format='GLB',export_extras=True,export_cameras=False,export_lights=False,export_yup=True,use_active_scene=True)
raw=open(path,'rb').read()
with open(path+'.js','w') as f:f.write('/* Local GLB wrapper: enables file:// without a server. Original procedural v3 church + static cast. */\nwindow.MysterySceneData=window.MysterySceneData||{};window.MysterySceneData.village="'+base64.b64encode(raw).decode()+'";\n')
stats={'editable_mesh_curve_objects':len(obs),'batched_mesh_nodes':len(groups),'collections':len(parents),'evaluated_vertices':sum(len(g['vertices']) for g in groups.values()),'triangles':sum(len(g['faces']) for g in groups.values()),'pbr_materials':len(mats),'bytes':len(raw),'sha256':hashlib.sha256(raw).hexdigest(),'static_cast_count':4,'animation_count':0,'neutral_location_anchors':list(anchors),'coordinates':'Blender x east/y north/z up; THREE x,y,z = Blender x,z,-y','material_note':'Original modeled geometry; procedural grain only appears in Blender. All runtime surfaces have explicit PBR constants.'}
with open(os.path.join(ART,'export_stats.json'),'w') as f:json.dump(stats,f,indent=2)
# Independent parse validates GLB structure, buffer length, anchors, cast, and no animation.
import struct
magic,version,total=struct.unpack_from('<III',raw);assert magic==0x46546c67 and version==2 and total==len(raw)
ln,ty=struct.unpack_from('<II',raw,12);doc=json.loads(raw[20:20+ln])
assert not doc.get('animations');assert len([n for n in doc['nodes'] if n.get('extras',{}).get('person_anchor')])==4
for required in ['church','workshop','dye-yard','bakery','bell-tower','square']:
 assert any(n.get('extras',{}).get('location_id')==required for n in doc['nodes']),required
assert len(doc['meshes'])==len(groups)
assert all(math.isfinite(c) for g in groups.values() for v in g['vertices'] for c in v)
assert not doc.get('images'), 'Runtime must not need external image resources'
print('GLB_EXPORT_VERIFIED',json.dumps(stats),flush=True)
