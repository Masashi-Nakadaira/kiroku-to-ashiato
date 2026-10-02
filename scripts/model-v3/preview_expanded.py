import bpy,os,math,json,sys
from mathutils import Vector
R=os.path.abspath(os.path.join(os.path.dirname(__file__),'../..'));O=os.path.join(R,'docs/model-v3')
bpy.ops.wm.open_mainfile(filepath=os.path.join(O,'chalice_village.blend'));s=bpy.context.scene;cam=s.camera
s.render.engine='CYCLES';s.cycles.samples=8;s.cycles.use_denoising=False;s.render.resolution_x=1100;s.render.resolution_y=950;s.render.resolution_percentage=100
cam.location=(22,-29,23);cam.rotation_euler=(Vector((-.45,-.5,1.7))-cam.location).to_track_quat('-Z','Y').to_euler();cam.data.type='ORTHO';cam.data.ortho_scale=22.5
s.render.filepath=os.path.join(O,'expanded-overview-draft.png');bpy.ops.render.render(write_still=True)
cam.location=(-.45,-.5,30);cam.rotation_euler=(0,0,0);cam.rotation_euler=(Vector((-.45,-.5,0))-cam.location).to_track_quat('-Z','Y').to_euler();cam.data.ortho_scale=20
s.render.resolution_x=1200;s.render.resolution_y=1100;s.render.filepath=os.path.join(O,'expanded-topdown-draft.png');bpy.ops.render.render(write_still=True)
cam.data.type='PERSP';cam.data.lens=42;cam.location=(1.60,2.70,1.84);cam.rotation_euler=(Vector((-1.70,2.70,1.74))-cam.location).to_track_quat('-Z','Y').to_euler()
s.render.resolution_x=1000;s.render.resolution_y=850;s.render.filepath=os.path.join(O,'expanded-witness-view.png');bpy.ops.render.render(write_still=True)
print('FAST_PREVIEWS_READY')
