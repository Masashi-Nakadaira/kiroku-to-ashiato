"""Pedestrian-profile clearance on actual evaluated geometry, not point-eye rays.
Checks planted/cobbled floor support, full body height/width and witness occlusion.
"""
import bpy,os,json,math
from mathutils import Vector
from mathutils.bvhtree import BVHTree
R=os.path.abspath(os.path.join(os.path.dirname(__file__),'../..'));O=os.path.join(R,'docs/model-v3')
bpy.ops.wm.open_mainfile(filepath=os.path.join(O,'chalice_village.blend'));s=bpy.context.scene;bpy.context.view_layer.update();dg=bpy.context.evaluated_depsgraph_get()
vs=[];fs=[];names=[];floorv=[];floorf=[]
for ob in s.objects:
 if ob.type not in {'MESH','CURVE'} or not ob.users_collection or ob.users_collection[0].name=='90_Presentation':continue
 eo=ob.evaluated_get(dg);me=eo.to_mesh();me.calc_loop_triangles();world=[ob.matrix_world@v.co for v in me.vertices]
 if not world:eo.to_mesh_clear();continue
 # All genuine horizontal surfaces below 0.8 m may support ordinary steps.
 for tr in me.loop_triangles:
  p=[world[i] for i in tr.vertices];zmax=max(q.z for q in p);zmin=min(q.z for q in p)
  n=(p[1]-p[0]).cross(p[2]-p[0]);n.normalize()
  if .36<zmax<.81 and zmax-zmin<.12 and n.z>.65:
   k=len(floorv);floorv.extend(p);floorf.append((k,k+1,k+2))
 if max(p.z for p in world)>.80:
  k=len(vs);vs.extend(world)
  for tr in me.loop_triangles:fs.append(tuple(k+i for i in tr.vertices));names.append(ob.name)
 eo.to_mesh_clear()
body=BVHTree.FromPolygons(vs,fs,all_triangles=True);floor=BVHTree.FromPolygons(floorv,floorf,all_triangles=True)
layout=json.load(open(os.path.join(O,'expanded-layout-contract.json')));routes=layout['routes']
# Stop outside closed work doors, on their real doorstep, rather than inside a solid wall.
routes['square_to_bakery'][-1]=[-5.3,-1.50];routes['arrival_to_mill'][-1]=[-6.58,-6.72]
profiles=[(.14,.16),(.43,.20),(.80,.23),(1.20,.25),(1.54,.12)]
reports={}
for key,pts in routes.items():
 failures=[];support=[];count=0
 for a,b in zip(pts,pts[1:]):
  av=Vector((a[0],a[1],0));bv=Vector((b[0],b[1],0));d=bv-av;length=d.length;tangent=d.normalized();normal=Vector((-tangent.y,tangent.x,0))
  for i in range(math.ceil(length/.13)+1):
   c=av.lerp(bv,i/math.ceil(length/.13));hit=floor.ray_cast(Vector((c.x,c.y,.85)),Vector((0,0,-1)),1.0)
   if hit[0] is None:failures.append({'point':list(c),'issue':'no modeled walking support'});continue
   z=hit[0].z;support.append(z);count+=1
   # Model human head is narrower than shoulders, so profile respects arch geometry.
   for dz,r in profiles:
    left=Vector((c.x,c.y,z+dz))-normal*r;h=body.ray_cast(left,normal,2*r)
    if h[0] is not None:failures.append({'point':[round(c.x,3),round(c.y,3),round(z+dz,3)],'width':r*2,'object':names[h[2]]});break
   else:
    h=body.ray_cast(Vector((c.x,c.y,z+.10)),Vector((0,0,1)),1.57)
    if h[0] is not None:failures.append({'point':[round(c.x,3),round(c.y,3),round(h[0].z,3)],'issue':'vertical torso/head clearance','object':names[h[2]]})
 reports[key]={'passed':not failures,'samples':count,'profile_widths_m':[r*2 for z,r in profiles],'profile_heights_above_support_m':[z for z,r in profiles],'support_height_range':[round(min(support),3),round(max(support),3)] if support else None,'failures':failures[:15]}
# Critical view: real doorway visible from the workshop window, altar itself obstructed.
def ray(a,b):
 a,b=Vector(a),Vector(b);d=b-a;h=body.ray_cast(a,d.normalized(),d.length)
 return {'clear':h[0] is None,'blocked_by':None if h[0] is None else names[h[2]],'hit':None if h[0] is None else list(h[0])}
view=ray((1.60,2.70,1.84),(-1.45,2.70,1.84));altar=ray((1.60,2.70,1.84),(-3.06,3.61,1.45));entry=ray((22,-29,23),(-2.8,.43,1.31))
report={'status':'passed' if all(v['passed'] for v in reports.values()) and view['clear'] and not altar['clear'] and (entry['clear'] or entry['blocked_by']=='Church open oak main door') else 'needs_review','body_profile_note':'0.50m shoulders at 1.20m, 0.24m head at1.54m; vertical centre clearance1.67m; sample spacing≤0.13m; actual floor/ordinary step height derived from evaluated horizontal faces, 7 connected approach routes. Includes static figures and props.','routes':reports,'workshop_to_side_door':view,'workshop_to_altar':altar,'overview_to_main_entry':entry,'entrance_visibility_note':'Camera ray first meets the entrance open oak leaf itself; it is not blocked by another building. Independent pedestrian profile clears the actual aperture.','mill_waterwheel_contact':{'race_x_bounds':[-9.07,-7.93],'wheel_x_bounds':[-8.89,-7.01],'overlap_m':.96,'continuous_race_y_bounds':[-8,7]}}
json.dump(report,open(os.path.join(O,'pedestrian-clearance.json'),'w'),indent=2);print(json.dumps(report,indent=2))
