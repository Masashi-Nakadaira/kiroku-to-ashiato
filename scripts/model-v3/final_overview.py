import bpy,os
from mathutils import Vector
R=os.path.abspath(os.path.join(os.path.dirname(__file__),'../..'));O=os.path.join(R,'docs/model-v3')
bpy.ops.wm.open_mainfile(filepath=os.path.join(O,'chalice_village.blend'));s=bpy.context.scene;cam=s.camera
s.render.engine='CYCLES';s.cycles.samples=40;s.cycles.use_denoising=False;s.render.resolution_x=1440;s.render.resolution_y=1220;s.render.resolution_percentage=100
cam.location=(22,-29,23);cam.rotation_euler=(Vector((-.45,-.5,1.7))-cam.location).to_track_quat('-Z','Y').to_euler();cam.data.type='ORTHO';cam.data.ortho_scale=22.5
s.render.filepath=os.path.join(O,'village-overview.png');bpy.ops.render.render(write_still=True);print('FINAL_OVERVIEW_READY')
