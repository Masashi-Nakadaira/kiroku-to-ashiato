"""Original procedural art for 記録と足跡 / 白線を越えた影. Blender 4.3.2 CPU.
Reconstructed from the verified generator following a workspace replacement.
"""
import bpy,math,os,sys,random,json
from mathutils import Vector
random.seed(42);OUT=os.path.dirname(os.path.abspath(__file__))
STAGE=sys.argv[sys.argv.index('--stage')+1] if '--stage' in sys.argv else 'final';D=STAGE!='blockout'
bpy.ops.object.select_all(action='SELECT');bpy.ops.object.delete(use_global=False)
C={};ACTIVE='00_Plaza'
def coll(n):
 if n not in C:C[n]=bpy.data.collections.new(n);bpy.context.scene.collection.children.link(C[n])
 return C[n]
def put(o,n,m=None):
 o.name=n
 for c in list(o.users_collection):c.objects.unlink(o)
 coll(ACTIVE).objects.link(o)
 if m:o.data.materials.append(m)
 return o
def mat(n,c,r=.7,metal=0,noise=False):
 m=bpy.data.materials.new(n);m.diffuse_color=(*c,1);m.use_nodes=True;p=m.node_tree.nodes.get('Principled BSDF');p.inputs['Base Color'].default_value=(*c,1);p.inputs['Roughness'].default_value=r;p.inputs['Metallic'].default_value=metal
 if D and noise:
  nt=m.node_tree;no=nt.nodes.new('ShaderNodeTexNoise');no.inputs['Scale'].default_value=5.3;no.inputs['Detail'].default_value=3;bu=nt.nodes.new('ShaderNodeBump');bu.inputs['Strength'].default_value=.13;bu.inputs['Distance'].default_value=.065;nt.links.new(no.outputs['Fac'],bu.inputs['Height']);nt.links.new(bu.outputs['Normal'],p.inputs['Normal']);ra=nt.nodes.new('ShaderNodeValToRGB');ra.color_ramp.elements[0].color=(*(v*.65 for v in c),1);ra.color_ramp.elements[1].color=(*(min(1,v*1.25) for v in c),1);nt.links.new(no.outputs['Fac'],ra.inputs['Fac']);nt.links.new(ra.outputs['Color'],p.inputs['Base Color'])
 return m
stone=mat('Limestone warm ivory',(.52,.43,.31),noise=True);trim=mat('Cut stone pale edges',(.74,.64,.46),noise=True);basalt=mat('Foundation basalt',(.12,.155,.165),noise=True);mortar=mat('Warm mortar',(.235,.226,.19),noise=True)
wood=mat('Weathered oak',(.215,.11,.052),noise=True);oak=mat('Cut oak',(.34,.19,.085),noise=True);copper=mat('Patinated copper',(.105,.28,.24),.46,.55,True);bronze=mat('Bell bronze',(.56,.295,.095),.28,.72,True);red=mat('Wax and signal cloth',(.46,.066,.038),.54);blue=mat('Blue dyed cloth',(.035,.21,.32),.95,0,True);linen=mat('Parchment linen',(.81,.7,.49),.85,0,True);iron=mat('Forged iron',(.058,.073,.075),.38,.68);water=mat('Mill race water',(.042,.185,.20),.22,.25);black=mat('Dark recess',(.018,.024,.023),1);white=mat('Lime observation mark',(.94,.88,.68),.92);terra=mat('Fired terracotta',(.34,.12,.06),.84,0,True);moss=mat('Damp moss',(.13,.185,.086),1)
def mesh(n,vs,fs,ma):
 me=bpy.data.meshes.new(n);me.from_pydata(vs,[],fs);me.update();o=bpy.data.objects.new(n,me);coll(ACTIVE).objects.link(o)
 if ma:me.materials.append(ma)
 return o
def cube(n,loc,sc,ma=stone,b=.03):
 x,y,z=[v/2 for v in sc];vs=[(-x,-y,-z),(-x,-y,z),(-x,y,-z),(-x,y,z),(x,-y,-z),(x,-y,z),(x,y,-z),(x,y,z)];o=mesh(n,vs,[(2,6,4,0),(4,5,1,0),(1,3,2,0),(6,7,5,4),(3,7,6,2),(5,7,3,1)],ma);o.location=loc
 if D and b:mod=o.modifiers.new('Soft worn edges','BEVEL');mod.width=b;mod.segments=2;o.modifiers.new('Weighted normals','WEIGHTED_NORMAL')
 return o
def cyl(n,loc,r,d,ma=stone,N=24,rot=None):
 vs=[(r*math.cos(i*math.tau/N),r*math.sin(i*math.tau/N),z) for z in [-d/2,d/2] for i in range(N)];fs=[tuple(range(N-1,-1,-1)),tuple(range(N,2*N))]+[(i,(i+1)%N,(i+1)%N+N,i+N) for i in range(N)];o=mesh(n,vs,fs,ma);o.location=loc
 if rot:o.rotation_euler=rot
 if D:mo=o.modifiers.new('Soft rim','BEVEL');mo.width=.014;mo.segments=2;o.modifiers.new('Weighted normals','WEIGHTED_NORMAL')
 return o
def uv(n,loc,sc,ma):
 bpy.ops.mesh.primitive_uv_sphere_add(segments=20,ring_count=10,location=loc);o=put(bpy.context.object,n,ma);o.scale=sc
 for p in o.data.polygons:p.use_smooth=True
 return o
def beam(n,a,b,w,ma=wood):
 v=Vector(b)-Vector(a);o=cube(n,(Vector(a)+Vector(b))/2,(w,w,v.length),ma,.014);o.rotation_euler=v.to_track_quat('Z','Y').to_euler();return o
def curve(n,pts,r,ma):
 cu=bpy.data.curves.new(n,'CURVE');cu.dimensions='3D';cu.bevel_depth=r;cu.bevel_resolution=2;s=cu.splines.new('POLY');s.points.add(len(pts)-1)
 for p,c in zip(s.points,pts):p.co=(*c,1)
 o=bpy.data.objects.new(n,cu);coll(ACTIVE).objects.link(o);cu.materials.append(ma);return o
def torus(n,loc,R,r,ma,rot=(0,0,0)):
 bpy.ops.mesh.primitive_torus_add(major_radius=R,minor_radius=r,major_segments=40,minor_segments=8,location=loc,rotation=rot);return put(bpy.context.object,n,ma)
def roof(n,x,y,z,w,d,h,ma=terra):
 vs=[(x-w/2,y-d/2,z),(x+w/2,y-d/2,z),(x+w/2,y,z+h),(x-w/2,y,z+h),(x-w/2,y+d/2,z),(x+w/2,y+d/2,z)];o=mesh(n,vs,[(0,1,2,3),(3,2,5,4),(0,4,5,1),(0,3,4),(1,5,2)],ma)
 if D:
  s=o.modifiers.new('Roof edge thickness','SOLIDIFY');s.thickness=.075
  for side in [-1,1]:
   for row in range(6):
    t=(row+.45)/6
    for i in range(int(w/.34)):
     ob=cube(n+'_tile',(x-w/2+.17+i*.34+(row%2)*.05,y+side*d/2*t,z+h*(1-t)+.045),(.325,math.sqrt((d/12)**2+(h/6)**2)+.06,.055),ma,.022);ob.rotation_euler.x=side*math.atan2(-h,d/2)
  beam(n+'_ridge',(x-w/2-.02,y,z+h+.055),(x+w/2+.02,y,z+h+.055),.13,ma)
 return o
def building(n,x,y,w,d,h,ma=stone,rm=terra):
 cube(n+'_plinth',(x,y,.43),(w+.25,d+.25,.26),trim,.055);cube(n+'_body',(x,y,.54+h/2),(w,d,h),ma,.055);roof(n+'_roof',x,y,.54+h,w+.55,d+.5,h*.43,rm)
def arch(n,x,y,z,w,h,t,ma=trim,side=False):
 r=w/2;sp=z+h-r;vs=[];fs=[]
 for i in range(14):
  a=math.pi*i/13
  for rr in [r,r-t]:
   co=(x+rr*math.cos(a),y,sp+rr*math.sin(a));vs.append((x,y+rr*math.cos(a),co[2]) if side else co)
 for i in range(13):fs.append((2*i,2*i+1,2*i+3,2*i+2))
 ob=mesh(n,vs,fs,ma);s=ob.modifiers.new('Stone depth','SOLIDIFY');s.thickness=.18
 for v in [-1,1]:
  cube(n+' pier',(x,y+v*(r-t/2),z+(h-r)/2) if side else (x+v*(r-t/2),y,z+(h-r)/2),(.22,t,h-r) if side else (t,.22,h-r),ma)
def cloth(n,origin,w,l,ma,N=18):
 x,y,z=origin;vs=[(x+(i/N-.5)*w,y+.065*math.sin(i/N*math.pi*7)*(.25+.75*j/12),z-l*j/12-.045*math.cos(i/N*math.tau)*j/12) for j in range(13) for i in range(N+1)];fs=[]
 for j in range(12):
  for i in range(N):a=j*(N+1)+i;fs.append((a,a+1,a+N+2,a+N+1))
 ob=mesh(n,vs,fs,ma);s=ob.modifiers.new('Woven thickness','SOLIDIFY');s.thickness=.008
 for p in ob.data.polygons:p.use_smooth=True
 return ob
# Saved massing layout --------------------------------------------------------
cube('Floating exhibit plinth',(0,0,-.15),(13,10.6,.8),basalt,.18);cube('Upper stone lip',(0,0,.18),(12.9,10.5,.16),trim,.055);cube('Paved plaza',(0,0,.3),(12.55,10.15,.16),mortar,.045)
cube('Mill race water',(-5.12,-.55,.395),(1.14,8.75,.025),water,.025)
for x in [-5.83,-4.4]:cube('Race retaining stone',(x,-.55,.52),(.28,9,.32),stone,.04)
ACTIVE='01_BellTower';x,y=-2.35,2.05
cube('Tower footing',(x,y,.68),(2.8,2.65,.68),trim,.06);cube('Tower shaft',(x,y,2.6),(2.25,2.1,3.4),stone,.035);cube('Belfry lower cornice',(x,y,4.35),(2.55,2.4,.25),trim,.045)
for ax in [-.9,.9]:
 for ay in [-.825,.825]:cube('Belfry pier',(x+ax,y+ay,5.08),(.43,.43,1.5),trim,.045)
cube('Belfry entablature',(x,y,5.88),(2.6,2.4,.26),trim,.045)
bpy.ops.mesh.primitive_cone_add(vertices=4,radius1=2.13,radius2=.15,depth=1.55,location=(x,y,6.75),rotation=(0,0,math.pi/4));put(bpy.context.object,'Copper pyramidal spire',copper);cyl('Spire finial',(x,y,7.67),.045,.7,bronze,16);uv('Finial ball',(x,y,7.55),(.13,.13,.13),bronze)
if not D:
 bpy.ops.mesh.primitive_cone_add(vertices=24,radius1=.52,radius2=.29,depth=.68,location=(x,y,5.12));put(bpy.context.object,'Bell blockout',bronze)
ACTIVE='02_Granary';gx,gy=1.7,2.05
building('Community granary',gx,gy,3.5,2.9,2.7,stone,copper);cube('Sealed front door',(gx-.53,gy-1.47,1.45),(1.03,.12,2.05),wood,.035);cube('Red wax seal backing',(gx-.53,gy-1.60,1.36),(.43,.065,.13),linen,.01);cyl('Intact red wax seal',(gx-.53,gy-1.65,1.36),.115,.045,red,32,(math.pi/2,0,0))
cube('Barred observation aperture',(gx+.87,gy-1.51,1.9),(.66,.055,.38),black,.02)
for off in [-.22,-.11,0,.11,.22]:cyl('Peephole bar',(gx+.87+off,gy-1.56,1.9),.023,.38,iron,8)
cube('Rear shutter dark opening',(gx+1.77,gy+.25,1.35),(.075,1.1,1.9),black,.025);cube('Rear shutter lifted panel',(gx+1.85,gy+.25,2.66),(.13,1.05,.8),wood,.018)
ACTIVE='03_Bakery';bx,by=-3.25,-.55
building('Bakehouse',bx,by,2.25,1.85,1.75);cube('Bakehouse chimney',(bx-.58,by+.3,3.05),(.43,.5,1.2),trim,.03);cube('Chimney cap',(bx-.58,by+.3,3.68),(.6,.62,.15),basalt,.04)
ACTIVE='04_Dyehouse';building('Dyehouse',4.53,.15,2.35,2.2,1.95,stone,copper)
for xx in [3.8,5.85]:cube('Dye rack post',(xx,-1.51,1.4),(.09,.1,2.2),wood,.01)
beam('Dye rack crossrail',(3.75,-1.51,2.5),(5.91,-1.51,2.5),.12)
if not D:cube('Blue cloth blockout',(4.85,-1.51,1.76),(1.45,.06,1.4),blue,.01)
ACTIVE='05_Watermill';building('Mill hut',-3.2,-3.4,2.1,1.55,1.3)
wx,wy,wz=-4.57,-3.9,1.18
for yy in [wy-.25,wy+.25]:torus('Waterwheel rim',(wx,yy,wz),.94,.085,wood,(math.pi/2,0,0))
for i in range(10):
 a=i*math.tau/10;beam('Wheel spoke',(wx,wy-.26,wz),(wx+.88*math.cos(a),wy-.26,wz+.88*math.sin(a)),.09,oak)
 if D:o=cube('Wheel paddle',(wx+.99*math.cos(a),wy,wz+.99*math.sin(a)),(.34,.72,.09),wood,.018);o.rotation_euler.y=-a
cyl('Wheel hub',(wx,wy,wz),.16,.95,iron,20,(math.pi/2,0,0))
ACTIVE='06_WellAndReadingStand';x,y=.35,-2.78
for i in range(12):
 a=i*math.tau/12;o=cube('Well curb',(x+.69*math.cos(a),y+.69*math.sin(a),.78),(.365,.28,.8),stone,.045);o.rotation_euler.z=a+math.pi/2
cyl('Well dark water',(x,y,.55),.58,.035,black)
ACTIVE='07_StoryLandmarks';cube('White observation line',(-.15,-.52,.478 if D else .403),(2.5,.09,.025),white,.009)
# Presentation rig shared by saved blockout and detailed scene
ACTIVE='90_Presentation';world=bpy.data.worlds.new('Quiet charcoal studio');bpy.context.scene.world=world;world.use_nodes=True;world.node_tree.nodes['Background'].inputs[0].default_value=(.095,.13,.15,1);world.node_tree.nodes['Background'].inputs[1].default_value=.4
cube('Studio floor',(0,0,-.68),(200,200,.1),mat('Studio charcoal',(.036,.054,.062),.9),0)
def light(n,loc,p,c,size):
 bpy.ops.object.light_add(type='AREA',location=loc);o=put(bpy.context.object,n);o.data.energy=p;o.data.color=c;o.data.shape='DISK';o.data.size=size;o.rotation_euler=(Vector((0,0,2))-o.location).to_track_quat('-Z','Y').to_euler()
light('Warm softbox',(-7,-8,16),1750,(1,.81,.61),8);light('Cool skylight',(4,6,13),2100,(.6,.79,1),7);light('Copper rim',(8,1,8),1050,(1,.59,.3),5)
bpy.ops.object.camera_add(location=(17,-23,18));cam=put(bpy.context.object,'Camera overview');cam.rotation_euler=(Vector((0,0,2.1))-cam.location).to_track_quat('-Z','Y').to_euler();cam.data.type='ORTHO';cam.data.ortho_scale=18.6
s=bpy.context.scene;s.camera=cam;s.render.engine='CYCLES';s.cycles.device='CPU';s.cycles.use_denoising=False;s.cycles.samples=48 if D else 24;s.cycles.max_bounces=6;s.render.resolution_x=1500 if D else 1100;s.render.resolution_y=1220 if D else 900;s.render.resolution_percentage=100;s.render.image_settings.file_format='PNG';s.view_settings.view_transform='AgX'
s['Project']='記録と足跡 / 白線を越えた影';s['Source']='record-and-body-cloud/data.js village; docs/SOLUTION.md; assets/village.svg';s['Art note']='Illustrative post-discovery architecture. No numeric clock times, culprit marker or recovered stamp. Lighting is not a calibrated solar puzzle.'
if not D:
 bpy.ops.wm.save_as_mainfile(filepath=os.path.join(OUT,'medieval_blockout.blend'));s.render.filepath=os.path.join(OUT,'medieval_blockout.png');bpy.ops.render.render(write_still=True);print('BLOCKOUT_READY',flush=True);sys.exit(0)
# Plaza craft detail ----------------------------------------------------------
ACTIVE='00_Plaza';pavers=[mat('Paver %02d'%i,(.40+i*.018,.365+i*.015,.288+i*.012),.88,0,True) for i in range(6)]
for j in range(24):
 yy=-4.86+j*.414
 for i in range(26):
  xx=-6.13+i*.476+(j%2)*.215
  if xx>6.13 or (-5.71<xx<-4.51 and -4.86<yy<3.9):continue
  if any(abs(xx-cx)<w/2-.02 and abs(yy-cy)<d/2-.02 for cx,cy,w,d in [(-2.35,2.05,2.8,2.65),(1.7,2.05,3.75,3.15),(-3.25,-.55,2.5,2.1),(4.53,.15,2.6,2.45),(-3.2,-3.4,2.35,1.8)]):continue
  o=cube('Plaza sett',(xx,yy,.408+random.uniform(-.008,.007)),(.448+random.uniform(-.015,.01),.387+random.uniform(-.009,.01),.115),random.choice(pavers),.023);o.rotation_euler.z=random.uniform(-.022,.022)
for yy in [-5.13,5.13]:cube('Perimeter coping',(0,yy,.47),(12.8,.17,.14),trim,.025)
for xx in [-6.3,6.3]:cube('Perimeter coping',(xx,0,.47),(.17,10.3,.14),trim,.025)
wh=mat('Water glints',(.14,.32,.31),.22,.22)
for j in range(21):cube('Race ripple',(-5.12+random.uniform(-.25,.25),-4.75+j*.407,.419),(random.uniform(.25,.65),.012,.005),wh,.003)
for i in range(19):
 xx=-5.9+i*.645;cube('Back boundary base',(xx,4.63,.67),(.62,.38,.39),stone,.045)
 if i%2==0:cube('Boundary coping',(xx,4.63,.91),(.66,.43,.13),trim,.025)
# Bell, arched tower and masonry
ACTIVE='01_BellTower';x,y=-2.35,2.05
for row in range(11):
 zz=1.05+row*.294
 for k in range(4):
  cube('Tower front ashlar',(x-1.11+k*.568+(row%2)*.04+.26,y-1.066,zz),(.52,.057,.263),pavers[(row+k)%6],.019);cube('Tower east ashlar',(x+1.142,y-1.02+k*.516+.24,zz),(.057,.48,.263),pavers[(row+k+2)%6],.019)
for zz in [1.13,1.68,2.23,2.78,3.33,3.88]:
 for xx in [x-1.035,x+1.035]:
  for yy in [y-1.016,y+1.016]:cube('Tower quoin',(xx,yy,zz),(.3,.29,.30),trim,.025)
cube('Tower slit recess',(x,y-1.108,2.98),(.39,.033,.94),black,.035);arch('Tower slit arch',x,y-1.15,2.49,.58,1.16,.12)
for off in [-.1,0,.1]:cube('Slit louver',(x+off,y-1.14,2.91),(.022,.025,.69),wood,.006)
arch('Belfry southern arch',x,y-.94,4.5,2.18,1.30,.18);arch('Belfry eastern arch',x+1.0,y,4.5,2.18,1.30,.18,side=True)
profile=[(.10,.48),(.19,.42),(.23,.25),(.25,.10),(.30,-.05),(.36,-.18),(.48,-.30),(.55,-.34),(.56,-.40),(.48,-.43),(.44,-.32),(.33,-.22),(.25,-.06),(.20,.12),(.17,.25),(.10,.32)];N=56;vs=[];fs=[]
for r,zz in profile:
 for i in range(N):a=i*math.tau/N;vs.append((x+r*math.cos(a),y+r*math.sin(a),5.25+zz))
for j in range(len(profile)-1):
 for i in range(N):fs.append((j*N+i,j*N+(i+1)%N,(j+1)*N+(i+1)%N,(j+1)*N+i))
o=mesh('Open bronze bell shell',vs,fs,bronze)
for p in o.data.polygons:p.use_smooth=True
for zz,rr in [(4.93,.49),(5.02,.395),(5.58,.19)]:torus('Bell casting ring',(x,y,zz),rr,.025,bronze)
beam('Clapper stem',(x,y,5.5),(x,y,4.82),.045,iron);uv('Clapper',(x,y,4.80),(.105,.105,.135),bronze);beam('Bell headstock',(x-.75,y,5.61),(x+.75,y,5.61),.18);cyl('Hanging axle',(x,y,5.61),.063,2.1,iron,20,(0,math.pi/2,0))
for f in range(4):
 a=math.pi/4+f*math.pi/2;p1=Vector((x+2.13*math.cos(a),y+2.13*math.sin(a),5.975));p2=Vector((x+2.13*math.cos(a+math.pi/2),y+2.13*math.sin(a+math.pi/2),5.975));top=Vector((x,y,7.525))
 for t in [.2,.4,.6,.8]:beam('Copper standing seam',p1.lerp(p2,t),top,.024,copper)
 beam('Copper folded hip',p1,top,.065,bronze)
curve('Bell rope',[(x-.5,y,5.6),(x-.76,y-.5,5.2),(x-.76,y-1.22,4.6),(x-.76,y-1.22,1.23)],.022,linen)
for z in [1.4,1.57,1.78]:uv('Bell rope knot',(x-.76,y-1.22,z),(.047,.042,.059),linen)
cube('Tower door',(x,y-1.15,1.22),(.66,.07,1.2),wood,.018);arch('Tower door frame',x,y-1.21,.61,.92,1.58,.13)
for i in range(5):cube('Tower door plank',(x-.27+i*.135,y-1.2,1.16),(.119,.018,1.04),oak,.009)
# Timber architecture, oven and shutters
for co,prefix,cx,cy,w,d,h in [('03_Bakery','Bakery',-3.25,-.55,2.25,1.85,1.75),('04_Dyehouse','Dyehouse',4.53,.15,2.35,2.2,1.95),('05_Watermill','Mill',-3.2,-3.4,2.1,1.55,1.3)]:
 ACTIVE=co;z0=.54;zt=z0+h
 for xx in [cx-w/2+.07,cx+w/2-.07]:
  for yy in [cy-d/2-.015,cy+d/2+.015]:cube(prefix+' corner post',(xx,yy,(z0+zt)/2),(.13,.13,h),wood,.02)
 for zz in [z0+.13,zt-.12]:cube(prefix+' front beam',(cx,cy-d/2-.06,zz),(w,.14,.14),wood,.016);cube(prefix+' side beam',(cx+w/2+.025,cy,zz),(.13,d,.14),wood,.016)
 beam(prefix+' brace',(cx+w/2+.06,cy-d*.37,z0+.22),(cx+w/2+.06,cy+d*.36,zt-.18),.095);cube(prefix+' doorstep',(cx,cy-d/2-.27,.52),(.88,.47,.16),trim,.04)
 if prefix!='Bakery':
  cube(prefix+' door',(cx-.1,cy-d/2-.025,1.09),(.65,.07,1.05),wood,.018)
  for i in range(4):cube(prefix+' plank join',(cx-.36+i*.174,cy-d/2-.07,1.09),(.014,.018,1.02),oak,.002)
  for zz in [.83,1.34]:cube(prefix+' door strap',(cx-.1,cy-d/2-.09,zz),(.59,.025,.047),iron,.008)
 else:
  cube('Oven recess',(cx,cy-d/2-.075,1.28),(1.04,.08,.97),black,.04);arch('Oven stone arch',cx,cy-d/2-.16,.76,1.35,1.19,.21);cube('Closed oven cover',(cx,cy-d/2-.185,1.09),(.78,.075,.52),iron,.04);beam('Oven cover handle',(cx-.16,cy-d/2-.25,1.09),(cx+.16,cy-d/2-.25,1.09),.046,bronze);beam('Oven stirring tool',(cx+.82,cy-d/2-.30,.54),(cx+.74,cy-d/2-.18,1.77),.05,oak);cube('Bread shelf',(cx-1.15,cy-.7,.91),(.36,.75,.1),oak,.025)
  for i in range(3):uv('Bread loaf',(cx-1.15,cy-.95+i*.22,1.03),(.13,.085,.09),linen)
 cube(prefix+' side window',(cx+w/2+.063,cy,1.25),(.025,.50,.59),black,.009)
 for yy in [cy-.24,cy+.24]:cube(prefix+' window jamb',(cx+w/2+.083,yy,1.25),(.05,.055,.65),oak,.01)
 for zz in [.94,1.56]:cube(prefix+' window sill',(cx+w/2+.09,cy,zz),(.12,.64,.075),oak,.01)
 for yy in [cy-.12,cy,cy+.12]:cube(prefix+' window slat',(cx+w/2+.088,yy,1.25),(.055,.06,.56),wood,.009)
# Genuine sealed granary envelope, with only source-described openings
ACTIVE='02_Granary'
for n in ['Community granary_body','Rear shutter dark opening','Barred observation aperture']:bpy.data.objects.remove(bpy.data.objects[n],do_unlink=True)
for n,loc,sc in [
('Granary north wall',(gx,gy+1.37,1.89),(3.5,.18,2.7)),('Granary west wall',(gx-1.67,gy,1.89),(.18,2.9,2.7)),('Granary east front pier',(gx+1.67,gy-.9,1.89),(.18,1,2.7)),('Granary east rear pier',(gx+1.67,gy+1.105,1.89),(.18,.69,2.7)),('Granary east shutter lintel',(gx+1.67,gy+.25,2.83),(.18,1.16,.82)),('Granary front left pier',(gx-1.44,gy-1.42,1.89),(.62,.18,2.7)),('Granary front center pier',(gx+.15,gy-1.42,1.89),(.27,.18,2.7)),('Granary front right pier',(gx+1.48,gy-1.42,1.89),(.55,.18,2.7)),('Granary front header',(gx,gy-1.42,2.98),(3.5,.18,.52)),('Granary observation lower',(gx+.85,gy-1.42,1.15),(.99,.18,1.23)),('Granary observation upper',(gx+.85,gy-1.42,2.41),(.99,.18,.65))]:cube(n,loc,sc,stone,.025)
for n,xx,zz,ww,hh in [('Granary door lintel',gx-.53,2.61,1.13,.30),('Granary left door jamb',gx-1.085,1.56,.12,2.04),('Granary right door jamb',gx+.003,1.56,.09,2.04),('Granary observation jamb',gx+.32,1.89,.09,2.70)]:cube(n,(xx,gy-1.42,zz),(ww,.19,hh),trim,.014)
wet=mat('Wiped damp stone floor',(.34,.315,.257),.27,0,True);cube('Granary wiped stone floor',(gx,gy,.58),(3.2,2.63,.12),wet,.025)
for xx in [gx-1.73,gx+1.73]:
 for yy in [gy-1.43,gy+1.43]:
  for row in range(7):cube('Granary quoin',(xx,yy,.76+row*.365),(.27,.28,.31),trim,.019)
for zz in [1,1.35,1.72,2.1,2.47,2.83]:
 for k in range(6):
  xx=gx-1.55+k*.53
  if abs(xx-(gx-.53))<.64 and zz<2.55:continue
  if abs(xx-(gx+.87))<.45 and 1.7<zz<2.13:continue
  cube('Granary face masonry',(xx,gy-1.448,zz),(.5,.045,.32),pavers[k%6],.022)
for i in range(6):cube('Sealed door plank',(gx-.97+i*.177,gy-1.547,1.45),(.158,.022,1.97),oak,.009)
for zz in [.78,2.12]:
 cube('Granary door strap',(gx-.53,gy-1.585,zz),(.91,.025,.1),iron,.013)
 for xx in [gx-.86,gx-.2]:cyl('Door strap stud',(xx,gy-1.61,zz),.035,.018,bronze,12,(math.pi/2,0,0))
curve('Unbroken sealing cord',[(gx-.85,gy-1.62,1.5),(gx-.53,gy-1.625,1.36),(gx-.2,gy-1.62,1.5)],.009,linen)
for yy in [gy-.365,gy+.865]:cube('Rear shutter guide',(gx+1.89,yy,1.91),(.16,.1,2.65),oak,.015)
for zz in [2.36,2.52,2.69,2.85,3.02]:cube('Raised shutter slat',(gx+1.93,gy+.25,zz),(.08,1.06,.14),oak,.012)
cube('Rear shutter threshold',(gx+1.78,gy+.25,.56),(.44,1.18,.17),trim,.025);beam('Rear shutter handgrip',(gx+2.01,gy+.06,2.40),(gx+2.01,gy+.45,2.40),.055,iron);cube('Signal cloth rod',(gx+.91,gy-1.62,2.40),(.57,.04,.035),wood,.008);cloth('Red discovery cloth',(gx+.91,gy-1.64,2.38),.37,.59,red,10)
ACTIVE='08_GranaryEvidence';cx,cy=gx-.78,gy+.2
cube('Seal box base',(cx,cy,.75),(.72,.55,.17),wood,.025)
for xx in [cx-.34,cx+.34]:cube('Open seal box side',(xx,cy,.87),(.065,.55,.27),oak,.012)
for yy in [cy-.25,cy+.25]:cube('Open seal box side',(cx,yy,.87),(.69,.065,.27),oak,.012)
cube('Empty seal box lining',(cx,cy,.842),(.59,.40,.018),linen,.01);o=cube('Seal box raised lid',(cx,cy+.27,1.16),(.72,.065,.51),wood,.018);o.rotation_euler.x=math.radians(-18)
for xx in [cx-.23,cx+.23]:cube('Seal box lid strap',(xx,cy+.22,1.16),(.058,.028,.43),bronze,.009)
mud=mat('Damp ambiguous trace',(.15,.135,.105),.6)
def foot(n,fx,fy,a,left):
 ps=[(-.045,-.12),(.052,-.12),(.068,-.035),(.052,.1),(.03,.15),(-.035,.14),(-.068,.065),(-.06,-.035)];co=math.cos(a);si=math.sin(a);mesh(n,[(fx+x*co-y*si,fy+x*si+y*co,.648) for x,y in ps],[tuple(range(8))],mud)
 if left:
  for i in range(4):x=-.034+i*.018;y=-.096+i*.013;cyl(n+' diagonal heel nail',(fx+x*co-y*si,fy+x*si+y*co,.6505),.008,.001,linen,10)
for i in range(7):foot('Incoming single-person trace',gx+1.36-i*.275,gy+.24+(.085 if i%2 else -.07),math.pi/2,i%2==0)
for i in range(6):foot('Returning single-person trace',gx-.22+i*.275,gy+.56+(.075 if i%2 else -.065),-math.pi/2,i%2==0)
for fx,fy in [(gx-1.3,gy-.65),(gx-1.3,gy-.07),(gx-1.3,gy+.6)]:uv('Closed grain sack',(fx,fy,.91),(.24,.2,.3),linen);curve('Sack neck tie',[(fx-.08,fy,1.16),(fx,fy,1.21),(fx+.07,fy,1.16)],.025,wood)
for n,loc,ev in [('HOTSPOT_v1_last_seen',(gx-.53,gy-1.6,1.36),'v1'),('HOTSPOT_v2_bell',(-2.35,2.05,5.1),'v2'),('HOTSPOT_v3_white_line',(-.15,-.52,.5),'v3'),('HOTSPOT_v5_ledger',(4,-1.9,1.2),'v5'),('HOTSPOT_v6_heel',(gx+.7,gy+.25,.66),'v6'),('HOTSPOT_v8_shutter',(gx+1.9,gy+.25,1.4),'v8')]:o=bpy.data.objects.new(n,None);o.location=loc;coll('80_GameplayAnchors').objects.link(o);o['evidence_id']=ev
# Workshop utility props and blue ownership ledger
ACTIVE='04_Dyehouse';cloth('Blue cloth hanging in folds',(4.85,-1.52,2.49),1.5,1.42,blue)
for xx in [4.3,5.35]:cube('Cloth peg',(xx,-1.49,2.49),(.055,.1,.12),oak,.011)
for cx,cy in [(5.46,-2.05),(4.7,-2.5)]:
 cyl('Dye vat',(cx,cy,.77),.31,.58,wood,24)
 for zz in [.53,.99]:torus('Vat hoop',(cx,cy,zz),.314,.022,iron)
 cyl('Dye vat liquid',(cx,cy,1.066),.27,.012,blue);beam('Dye stirring stick',(cx-.13,cy,1.05),(cx+.1,cy+.1,1.57),.035,oak)
for xx in [3.3,3.95]:
 for yy in [-1.6,-2.1]:cube('Ledger table leg',(xx,yy,.76),(.07,.07,.57),wood,.01)
cube('Ledger tabletop',(3.63,-1.85,1.09),(.86,.69,.09),oak,.022);cube('Blue cloth ownership ledger',(3.62,-1.85,1.164),(.59,.42,.055),wood,.012)
for off in [-.14,.14]:o=cube('Ledger leaves',(3.62+off,-1.85,1.20),(.27,.37,.022),linen,.008);o.rotation_euler.y=off*.23
for row in range(4):cube('Ledger ruling',(3.78,-1.99+row*.065,1.217),(.2,.006,.002),wood,0)
for i in range(3):cyl('Finished cloth roll',(3.3+i*.22,-1.85,.67),.075,.44,blue,16,(math.pi/2,0,0))
ACTIVE='05_Watermill'
for xx in [-5.77,-4.48]:cube('Sluice upright',(xx,-2.2,1.09),(.12,.17,1.32),wood,.018)
beam('Sluice crossbeam',(-5.89,-2.2,1.69),(-4.36,-2.2,1.69),.15)
for zz in [.65,.84,1.03]:cube('Watergate plank',(-5.12,-2.2,zz),(1.12,.09,.17),oak,.016)
curve('Held sluice rope',[(-5.12,-2.2,1.15),(-5.12,-2.2,1.72),(-4.49,-2.2,1.73),(-4.24,-2.5,.65)],.021,linen)
for i in range(6):cube('Footbridge board',(-5.11,1.08+i*.17,.61),(1.63,.15,.105),oak,.015)
for xx in [-5.84,-4.42]:
 for yy in [1.06,1.91]:cube('Bridge post',(xx,yy,.94),(.07,.07,.64),wood,.011)
 beam('Bridge rail',(xx,1,1.21),(xx,1.97,1.21),.065)
ACTIVE='06_WellAndReadingStand';x,y=.35,-2.78
for i in range(12):a=(i+.5)*math.tau/12;o=cube('Well coping',(x+.7*math.cos(a),y+.7*math.sin(a),1.22),(.37,.31,.16),trim,.038);o.rotation_euler.z=a+math.pi/2
for xx in [x-.9,x+.9]:cube('Windlass upright',(xx,y,1.34),(.12,.14,1.56),wood,.02)
beam('Windlass spindle',(x-1.04,y,1.84),(x+1.09,y,1.84),.11,oak);curve('Well bucket rope',[(x,y,1.85),(x,y,1.35),(x,y,.70)],.018,linen);cyl('Well bucket',(x,y,.82),.17,.25,wood,16);beam('Windlass crank',(x+1.12,y,1.84),(x+1.12,y,1.53),.052,iron);beam('Windlass grip',(x+1.12,y,1.53),(x+1.34,y,1.53),.065,oak)
px,py=-.84,-1.27
for xx in [px-.3,px+.3]:beam('Reading stand leg',(xx,py-.23,.47),(xx,py+.1,1.36),.075)
o=cube('Reading stand board',(px,py,1.39),(.95,.62,.08),oak,.024);o.rotation_euler.x=math.radians(13);o=cube('Public ration roll',(px,py-.01,1.449),(.73,.39,.018),linen,.012);o.rotation_euler.x=math.radians(13)
for xx in [px-.39,px+.39]:cyl('Roll rod',(xx,py,1.45),.042,.43,wood,16,(math.pi/2,0,0))
ACTIVE='09_CobblerComparison';cx,cy=3.5,-3.95
for xx in [cx-.6,cx+.6]:
 for yy in [cy-.27,cy+.27]:cube('Cobbler bench leg',(xx,yy,.69),(.075,.08,.51),wood,.012)
cube('Cobbler comparison bench',(cx,cy,.98),(1.48,.79,.12),oak,.025)
for idx in range(4):
 xx=cx-.49+idx*.326;cube('Left heel sample %d'%idx,(xx,cy,1.073),(.235,.34,.065),wood,.022)
 coords=[(-.07,-.075),(.07,-.075),(-.07,.075),(.07,.075)] if idx==0 else [(0,-.1),(0,0),(0,.1),(-.065,0),(.065,0)] if idx==1 else [(-.07,-.075),(-.023,-.025),(.023,.025),(.07,.075)]
 for ax,ay in coords:cyl('Heel repair nail',(xx+ax,cy+ay,1.114),.012,.01,iron,10)
ACTIVE='00_Plaza'
for i in range(10):cube('Damp moss seam',(-4.435,-4.3+i*.70,.704),(.11,.25+random.random()*.15,.012),moss,.012)
ACTIVE='90_Presentation';bpy.ops.object.light_add(type='SUN',location=(-6,7,12));sun=put(bpy.context.object,'Directional light');sun.rotation_euler=(Vector((0,0,0))-sun.location).to_track_quat('-Z','Y').to_euler();sun.data.energy=1.1;sun.data.angle=math.radians(8);sun.data.color=(1,.89,.7)
bpy.ops.wm.save_as_mainfile(filepath=os.path.join(OUT,'medieval_detailed.blend'));print('DETAILED_BLEND_READY',flush=True)
s.render.filepath=os.path.join(OUT,'medieval_final.png');bpy.ops.render.render(write_still=True);print('FINAL_IMAGE_READY',flush=True)
if '--main-only' in sys.argv:sys.exit(0)
# Explicit removable-roof inspection view; never save this as the intact main scene
for o in bpy.data.objects:
 if o.name.startswith('Community granary_roof') or o.name=='Granary north wall':o.hide_render=True
cam.location=(9.3,8.6,9.4);cam.rotation_euler=(Vector((1.7,2.05,1))-cam.location).to_track_quat('-Z','Y').to_euler();cam.data.ortho_scale=5.65;s.render.resolution_x=1400;s.render.resolution_y=1050;s.cycles.samples=48;s.render.filepath=os.path.join(OUT,'medieval_granary_inspection.png');bpy.ops.render.render(write_still=True);print('INSPECTION_READY',flush=True)
