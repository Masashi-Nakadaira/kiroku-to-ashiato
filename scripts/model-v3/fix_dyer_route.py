import bpy,os,json,math,base64
from mathutils import Vector
ROOT=os.path.abspath(os.path.join(os.path.dirname(__file__),'../..'));ART=os.path.join(ROOT,'docs/model-v3');SCRIPT=os.path.dirname(__file__)
bpy.ops.wm.open_mainfile(filepath=os.path.join(ART,'chalice_village.blend'));moved=[]
for ob in bpy.data.collections['04_Dyehouse'].objects:
 if ob.name.startswith(('Dye vat','Vat hoop','Dye stirring stick')) and math.hypot(ob.location.x+6.38,ob.location.y-.35)<.27:ob.location+=Vector((-.90,-.45,0));moved.append(ob.name)
assert len(moved)==5,moved
bpy.context.view_layer.update();bpy.ops.wm.save_as_mainfile(filepath=os.path.join(ART,'chalice_village.blend'))
l=json.load(open(os.path.join(ART,'expanded-layout-contract.json')))
l['routes']['square_to_workshop']=[(2.48,-1.3),(1.77,-.65),(1.77,.13),(2.48,.50),(2.48,.86)]
l['routes']['square_to_bakery']=[(-2.8,-1.1),(-3.2,-.35),(-5.3,-.35),(-5.3,-1.50)]
l['routes']['square_to_dyer']=[(-2.8,-1.1),(-3.2,-.35),(-5.0,-.35),(-5.125,-.725),(-5.7,-1.15),(-6.65,-1.15),(-6.65,1.67)]
l['routes']['arrival_to_mill'][-1]=[-6.58,-6.72]
json.dump(l,open(os.path.join(ART,'expanded-layout-contract.json'),'w'),indent=2)
anchors=json.load(open(os.path.join(ART,'anchor_contract.json')))['blender']
exec(compile(open(os.path.join(SCRIPT,'export_chalice.py')).read(),os.path.join(SCRIPT,'export_chalice.py'),'exec'))
print('DYER_ROUTE_FIXED',moved)
