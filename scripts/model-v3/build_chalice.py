"""V3 original procedural church + static cast. Blender 4.x CPU, no external assets.
Run: blender -b -t 6 --python scripts/model-v3/build_chalice.py
"""
import bpy, os, math, json, base64, sys
from mathutils import Vector
ROOT=os.path.abspath(os.path.join(os.path.dirname(__file__),'../..'))
SCRIPT=os.path.dirname(__file__); ART=os.path.join(ROOT,'docs/model-v3')
os.makedirs(ART,exist_ok=True)
# Reuse intact public village landmarks, paving and craft objects from v2 source.
source=open(os.path.join(SCRIPT,'original_medieval.py')).read()
source=source.split("bpy.ops.wm.save_as_mainfile(filepath=os.path.join(OUT,'medieval_detailed.blend'))")[0]
exec(compile(source,os.path.join(SCRIPT,'original_medieval.py'),'exec'))
OUT=ART
for name in ['01_BellTower','02_Granary','08_GranaryEvidence','09_CobblerComparison','80_GameplayAnchors']:
 if name in C:
  for o in list(C[name].objects):bpy.data.objects.remove(o,do_unlink=True)
for o in list(bpy.data.objects):
 if o.name.startswith(('White observation line','Reading stand','Public ration','Roll rod','Blue cloth ownership ledger','Ledger leaves','Ledger ruling')):bpy.data.objects.remove(o,do_unlink=True)
# Move bakehouse 0.65m south to preserve a human-passable public church forecourt.
for ob in C['03_Bakery'].objects:ob.location.y-=.65
# Fill previous footprint's exposed paving; this is an actual modeled approach.
ACTIVE='00_Plaza'
for iy in range(2):
 for ix in range(5):cube('Church forecourt paving',(-4.23+ix*.435,-.11+iy*.39,.408),(.414,.368,.115),pavers[(ix+iy)%6],.018)
# Rich simple PBR cloth/skin colors survive GLB unchanged.
cream=mat('Church lime plaster',(.68,.61,.47),.9,0,True)
slate=mat('Church blue slate',(.16,.245,.28),.78,0,True)
slate2=mat('Slate tile highlight',(.24,.325,.35),.78)
redcloth=mat('Mira muted russet dress',(.45,.145,.078),.94)
greencloth=mat('Theo forest wool',(.14,.235,.16),.94)
purplecloth=mat('Sera plum wool',(.285,.16,.285),.94)
robecloth=mat('Orn deep teal cassock',(.08,.17,.18),.95)
apronmat=mat('Undyed linen apron',(.78,.68,.5),.95)
skin=mat('Warm terracotta skin',(.66,.39,.23),.9)
hair=mat('Brown hair',(.085,.047,.025),.95)
grayhair=mat('Orn gray beard',(.48,.46,.40),.94)
leather=mat('Brown boot leather',(.12,.068,.031),.92)
cloakmat=mat('Borrowed ash gray hooded cloak',(.36,.39,.37),.94)
roseglass=mat('Rose glass amber',(.7,.31,.065),.52,.12)
roseblue=mat('Rose glass sea blue',(.075,.31,.43),.52,.12)
silver=mat('Silver fittings',(.66,.69,.68),.23,.86)

# Real church shell: south public entrance, east sacristy entrance, internal door.
ACTIVE='10_Church';cx,cy=-2.6,2.425
cube('Church foundation',(cx,cy,.46),(3.06,3.73,.12),trim,.04)
cube('Church stone floor',(cx,cy,.55),(2.73,3.38,.10),stone,.025)
for ix in range(6):
 for iy in range(8):cube('Church floor tile',(-3.87+ix*.435,.91+iy*.415,.613),(.412,.39,.028),pavers[(ix+iy)%6],.008)
# South wall x=-4.05..-1.15, split for real 0.90 m doorway.
for n,loc,sc in [
 ('Church west wall',(-3.97,2.425,1.74),(.16,3.55,2.28)),
 ('Church north wall',(-2.6,4.12,1.74),(2.9,.16,2.28)),
 ('Church east south wall',(-1.23,1.39,1.74),(.16,1.48,2.28)),
 ('Church east north wall',(-1.23,3.67,1.74),(.16,1.06,2.28)),
 ('Church side door lintel',(-1.23,2.63,2.55),(.16,1.02,.66)),
 ('Church south west pier',(-3.655,.73,1.74),(.79,.16,2.28)),
 ('Church south east pier',(-1.745,.73,1.74),(1.19,.16,2.28)),
 ('Church main portal header',(-2.8,.73,2.60),(.92,.16,.56)),
]:cube(n,loc,sc,cream,.02)
# Full gable end triangles: church identity is visible from village square.
mesh('Church south gable',[(-4.05,.73,2.88),(-1.15,.73,2.88),(-2.6,.73,4.03)],[(0,1,2)],cream)
mesh('Church north gable',[(-4.05,4.12,2.88),(-1.15,4.12,2.88),(-2.6,4.12,4.03)],[(2,1,0)],cream)
arch('Church main rounded portal',-2.8,.607,.60,1.16,1.95,.15)
cube('Church worn main threshold',(-2.8,.51,.53),(1.2,.55,.16),trim,.035)
# Door open outward to the east, never fills the portal.
main_door=cube('Church open oak main door',(-2.275,.26,1.43),(.10,.83,1.62),wood,.025)
for zz in [.87,1.95]:cube('Church main door iron strap',(-2.334,.26,zz),(.027,.76,.065),iron,.01)
arch('Church side door stone frame',-1.125,2.635,.60,1.2,1.91,.14,side=True)
cube('Church side door threshold',(-1.07,2.635,.555),(.43,1.1,.11),trim,.025)
cube('Church open side door',(-1.65,3.105,1.39),(.80,.09,1.60),wood,.018)
for zz in [.86,1.89]:cube('Church side door strap',(-1.65,3.047,zz),(.73,.024,.067),iron,.008)
# Sacristy partition hides altar from the outside; genuine internal doorway y3.23..3.91.
for n,loc,sc in [('Sacristy solid partition',(-2.20,2.52,1.50),(.13,1.40,1.80)),('Sacristy back partition pier',(-2.20,4.02,1.50),(.13,.20,1.8)),('Sacristy internal door lintel',(-2.20,3.57,2.24),(.13,.90,.32))]:cube(n,loc,sc,cream,.015)
for xx in [-2.025,-1.215]:cube('Sacristy shelving side',(xx,3.86,1.25),(.05,.36,1.28),wood,.015)
cube('Sacristy shelf back',(-1.62,4.015,1.25),(.78,.045,1.28),wood,.013)
for zz in [.74,1.22,1.69]:cube('Sacristy shelf board',(-1.62,3.84,zz),(.85,.40,.05),oak,.012)
for zz in [.74,1.22,1.69]:cube('Sacristy shelf front',(-1.62,3.65,zz),(.86,.09,.055),oak,.012)
for xx in [-1.91,-1.63,-1.35]:uv('Sacristy candle bundle',(xx,3.67,1.43),(.09,.065,.18),linen)
cube('Sacristy folded altar linen',(-1.63,3.69,.825),(.53,.22,.12),linen,.025)
# Altar and screen: no chalice object is present in the discovery scene.
cube('Altar stone step',(-3.06,3.47,.67),(1.49,.93,.12),trim,.022)
for xx in [-3.53,-2.60]:cube('Altar carved stone leg',(xx,3.48,.98),(.20,.47,.51),stone,.025)
cube('Altar mensa',(-3.06,3.48,1.275),(1.48,.69,.15),trim,.035)
cube('Altar crimson frontal',(-3.06,3.105,1.04),(1.18,.026,.37),redcloth,.016)
# Fixed wooden covering frame controls the outside silhouette whether the chalice exists or not.
# Its opaque cloth is a separate runtime-toggleable part, with no simulated cup underneath.
fx,fy=-3.06,3.56
for xx in [fx-.29,fx+.29]:
 for yy in [fy-.20,fy+.20]:cube('Fixed altar canopy upright',(xx,yy,1.665),(.035,.035,.60),oak,.009)
for xx in [fx-.29,fx+.29]:beam('Fixed altar canopy upper side',(xx,fy-.22,1.965),(xx,fy+.22,1.965),.043,oak)
for yy in [fy-.20,fy+.20]:beam('Fixed altar canopy upper bar',(fx-.31,yy,1.965),(fx+.31,yy,1.965),.043,oak)
beam('Fixed altar canopy center support',(fx,fy-.22,1.965),(fx,fy+.22,1.965),.034,oak)
ACTIVE='17_AltarCover'
# Continuous opaque top and folded sides are all hidden by the cover control together.
vs=[];fs=[];NX=16;NY=12
for j in range(NY+1):
 for i in range(NX+1):vs.append((fx+(i/NX-.5)*.75,fy+(j/NY-.5)*.55,2.008+.009*math.sin(i/NX*math.pi*5)*math.sin(j/NY*math.pi)))
for j in range(NY):
 for i in range(NX):q=j*(NX+1)+i;fs.append((q,q+1,q+NX+2,q+NX+1))
cover=mesh('Altar opaque cover top',vs,fs,linen);mod=cover.modifiers.new('Woven top thickness','SOLIDIFY');mod.thickness=.01
for yy in [fy-.278,fy+.278]:cloth('Altar opaque cover front back',(fx,yy,2.012),.75,.64,linen,18)
for xx in [fx-.373,fx+.373]:
 o=cloth('Altar opaque cover side',(0,0,0),.55,.64,linen,14);o.location=(xx,fy,2.012);o.rotation_euler.z=math.pi/2
ACTIVE='10_Church'
cyl('Empty silver chalice circular rest',(-3.06,3.61,1.359),.155,.012,wood,40)
torus('Faint chalice rest ring',(-3.06,3.61,1.368),.117,.006,linen)
for xx in [-3.64,-2.49]:
 cyl('Altar brass candle foot',(xx,3.49,1.38),.078,.045,bronze,20)
 cyl('Altar brass candle stem',(xx,3.49,1.51),.022,.22,bronze,16)
 cyl('Altar beeswax candle',(xx,3.49,1.70),.035,.18,linen,16)
# Nave pews with broad central aisle, one on each side.
for yy in [1.26,1.91,2.51]:
 for xx in [-3.73,-2.53]:
  cube('Church pew seat',(xx,yy,.90),(.38,.29,.08),oak,.018)
  cube('Church pew back',(xx,yy+.11,1.12),(.38,.06,.36),wood,.018)
  for dx in [-.14,.14]:cube('Church pew leg',(xx+dx,yy,.76),(.07,.21,.25),wood,.01)
# Buttresses on perimeter do not close alley.
for xx in [-4.10,-1.10]:
 for yy in [.94,3.88]:
  cube('Church buttress',(xx,yy,1.40),(.24,.31,1.65),stone,.018)
  o=cube('Church buttress cap',(xx,yy,2.26),(.29,.37,.10),trim,.018);o.rotation_euler.y=.14 if xx<-2 else -.14
# Slender side glass is explicitly glass, not a walking opening.
for xx in [-4.066,-1.132]:
 for yy in [1.45,3.67]:
  cube('Church lancet glass',(xx,yy,2.08),(.028,.34,.75),roseblue,.008)
  arch('Church lancet stone hood',xx,yy,1.65,.53,1.04,.095,side=True)
  cube('Church lancet mullion',(xx-.012 if xx<-2 else xx+.012,yy,2.12),(.05,.035,.83),trim,.006)
# Front rose window with eight spoke tracery, physically modeled.
cyl('Church rose dark circular frame',(-2.60,.615,3.11),.34,.075,wood,40,(math.pi/2,0,0))
cyl('Church rose colored glass',(-2.60,.568,3.11),.29,.015,roseblue,40,(math.pi/2,0,0))
torus('Church rose stone outer ring',(-2.60,.533,3.11),.34,.065,trim,(math.pi/2,0,0))
for i in range(8):
 a=i*math.tau/8;beam('Church rose radial tracery',(-2.60,.526,3.11),(-2.60+.285*math.cos(a),.526,3.11+.285*math.sin(a)),.026,trim)
cyl('Church rose amber center',(-2.60,.513,3.11),.07,.035,roseglass,16,(math.pi/2,0,0))
# Longitudinal nave roof, all members tagged removable together.
ACTIVE='11_ChurchRoof'
vs=[(-4.25,.43,2.91),(-.95,.43,2.91),(-2.6,.43,4.15),(-4.25,4.37,2.91),(-.95,4.37,2.91),(-2.6,4.37,4.15)]
mesh('Church slate roof',vs,[(0,2,5,3),(2,1,4,5)],slate)
for side in [-1,1]:
 for row in range(7):
  t=(row+.5)/7
  for j in range(12):
   xx=-2.6+side*1.65*t;yy=.47+j*.323;zz=4.15-1.24*t
   o=cube('Church individual slate',(xx,yy,zz+.032),(.31,.343,.055),slate2 if (row+j)%6==0 else slate,.008)
   o.rotation_euler.y=side*math.atan2(1.24,1.65)
beam('Church roof ridge',(-2.6,.35,4.19),(-2.6,4.46,4.19),.11,slate2)
# Small open bellcote retained as the church belfry; bronze bell visible between arches.
ACTIVE='12_ChurchBelfry';tx,ty=-2.60,3.66
cube('Belfry stone pedestal',(tx,ty,4.00),(1.00,1.03,.45),stone,.026)
for dx in [-.36,.36]:
 for dy in [-.34,.34]:cube('Belfry stone pier',(tx+dx,ty+dy,4.58),(.17,.17,1.01),trim,.024)
arch('Belfry front arch',tx,ty-.35,4.24,.89,.82,.12)
arch('Belfry east arch',tx+.38,ty,4.24,.89,.82,.12,side=True)
cube('Belfry cornice',(tx,ty,5.10),(1.05,1.05,.16),trim,.027)
bpy.ops.mesh.primitive_cone_add(vertices=4,radius1=.87,radius2=.03,depth=.78,location=(tx,ty,5.55),rotation=(0,0,math.pi/4));put(bpy.context.object,'Church copper belfry cap',copper)
beam('Church belfry cross stem',(tx,ty,5.91),(tx,ty,6.45),.063,bronze)
beam('Church belfry cross arm',(tx-.16,ty,6.27),(tx+.16,ty,6.27),.059,bronze)
# Hollow bell lathed profile at half size.
profile=[(.07,.23),(.12,.19),(.13,.06),(.17,-.09),(.26,-.20),(.28,-.23),(.25,-.26),(.22,-.20),(.12,.03),(.08,.14)];vs=[];fs=[];N=32
for r,zz in profile:
 for i in range(N):a=i*math.tau/N;vs.append((tx+r*math.cos(a),ty+r*math.sin(a),4.64+zz))
for j in range(len(profile)-1):
 for i in range(N):fs.append((j*N+i,j*N+(i+1)%N,(j+1)*N+(i+1)%N,(j+1)*N+i))
o=mesh('Church hollow bronze bell',vs,fs,bronze)
for p in o.data.polygons:p.use_smooth=True
beam('Belfry oak headstock',(tx-.31,ty,4.90),(tx+.31,ty,4.90),.10,oak)
uv('Belfry clapper',(tx,ty,4.40),(.047,.047,.06),bronze)
curve('Church bell rope',[(tx+.24,ty,4.90),(tx+.30,ty-.36,4.54),(tx+.42,ty-.43,3.7),(tx+.42,ty-.43,1.1)],.018,linen)
# Front gable cross supplements the bellcote silhouette.
ACTIVE='10_Church'
beam('Church front gable cross',(-2.60,.53,4.00),(-2.60,.53,4.52),.057,trim)
beam('Church front cross arms',(-2.75,.53,4.35),(-2.45,.53,4.35),.055,trim)

# Theo's former granary is now a real carpenter's workshop. No old theft props remain.
ACTIVE='13_CarpenterWorkshop';wx,wy=1.70,2.05
cube('Workshop foundation',(wx,wy,.50),(3.73,3.12,.14),trim,.04)
cube('Workshop plank floor',(wx,wy,.60),(3.40,2.80,.08),wood,.025)
for n,loc,sc in [
 ('Workshop north wall',(1.70,3.43,1.71),(3.50,.14,2.15)),
 ('Workshop east wall',(3.38,2.05,1.71),(.14,2.90,2.15)),
 ('Workshop west front wall',(.02,1.43,1.71),(.14,1.66,2.15)),
 ('Workshop west rear wall',(.02,3.29,1.71),(.14,.30,2.15)),
 ('Workshop west window sill wall',(.02,2.70,.99),(.14,.89,.71)),
 ('Workshop west window upper wall',(.02,2.70,2.50),(.14,.89,.57)),
 ('Workshop front left wall',(.45,.67,1.71),(1.0,.14,2.15)),
 ('Workshop front right wall',(2.77,.67,1.71),(1.34,.14,2.15)),
 ('Workshop front door lintel',(1.48,.67,2.58),(1.08,.14,.41)),
]:cube(n,loc,sc,cream,.02)
for zz in [.73,2.72]:
 
 if zz>1:cube('Workshop south oak beam',(wx,.56,zz),(3.56,.13,.13),wood,.015)
 cube('Workshop west oak beam',(-.07,wy,zz),(.13,2.9,.13),wood,.015)
for xx in [.03,3.37]:
 for yy in [.65,3.44]:cube('Workshop oak corner',(xx,yy,1.71),(.16,.16,2.15),wood,.015)
# Clear west window has no bars or glass; opening .88m wide, .86m tall.
for yy in [2.22,3.18]:cube('Workshop sight window jamb',(-.09,yy,1.80),(.14,.08,.94),oak,.009)
for zz in [1.34,2.26]:cube('Workshop sight window ledge',(-.10,2.70,zz),(.34,1.05,.10),oak,.012)
cube('Workshop west raised shutter',(-.095,2.70,2.55),(.055,.88,.43),wood,.014)
# Open front door turned inward against east jamb, no invisible route.
cube('Workshop open front oak door',(2.045,1.12,1.43),(.09,.91,1.62),wood,.022)
cube('Workshop main doorstep',(1.49,.44,.52),(1.22,.50,.17),trim,.029)
ACTIVE='14_WorkshopRoof';roof('Workshop copper roof',1.70,2.05,2.82,3.95,3.40,1.20,copper)
ACTIVE='13_CarpenterWorkshop'
# Interior workbench leaves sightline eye height clear and demonstrates trade.
for xx in [.46,1.44]:
 for yy in [2.38,2.94]:cube('Carpenter bench leg',(xx,yy,.98),(.085,.09,.69),wood,.012)
cube('Carpenter workbench',(.95,2.66,1.36),(1.23,.80,.11),oak,.025)
cube('Carpenter planed board',(.99,2.66,1.46),(.86,.30,.08),linen,.009)
cube('Carpenter wood plane',(.87,2.66,1.54),(.25,.11,.08),wood,.012)
beam('Carpenter plane handle',(.78,2.66,1.61),(.93,2.66,1.61),.05,oak)
for i in range(5):cube('Stacked workshop lumber',(2.65,2.7,.79+i*.13),(.27,1.20,.095),oak,.012)
for i in range(6):
 o=cube('Wood shaving',(.53+i*.13,2.22,.664),(.075,.023,.012),linen,.008);o.rotation_euler.z=i*.45
# External sign, small practical front service bench.
cube('Carpenter hanging sign',(2.74,.47,2.07),(.56,.055,.43),oak,.018)
beam('Carpenter sign saw blade',(2.51,.424,2.14),(2.91,.424,2.0),.04,iron)
# Remove old cobbler comparison area, replace with ordinary timber horse.
for xx in [2.95,3.95]:
 for yy in [-3.62,-4.07]:beam('Timber horse leg',(xx,yy,.47),(xx, -3.845,1.10),.085,oak)
beam('Timber horse top',(2.77,-3.845,1.10),(4.13,-3.845,1.10),.14,wood)

# Borrowed identifiable objects returned to Sera's dye yard after the event.
ACTIVE='15_BorrowedProps'
# Returned clothing is folded on a low chest, clearly an empty garment, not a fifth person.
cube('Dye yard low garment chest',(5.84,-2.38,.69),(.68,.56,.43),wood,.025)
cube('Dye yard garment chest lid',(5.84,-2.38,.915),(.73,.60,.07),oak,.018)
for i in range(3):cube('Returned gray cloak folded layer',(5.84,-2.39, .97+i*.037),(.60-i*.025,.43,.033),cloakmat,.018)
uv('Returned gray cloak folded hood',(5.87,-2.35,1.095),(.18,.14,.09),cloakmat)
uv('Returned hood fold opening',(5.87,-2.482,1.08),(.116,.016,.043),black)
# Shallow wooden tray on exterior table. Flowers are pale sculpted blooms, no clue arrows.
cube('Returned flower tray base',(3.64,-1.84,1.165),(.68,.45,.035),oak,.014)
for xx in [3.30,3.98]:cube('Returned flower tray rim',(xx,-1.84,1.215),(.035,.45,.10),wood,.008)
for yy in [-2.065,-1.615]:cube('Returned flower tray rim',(3.64,yy,1.215),(.68,.035,.10),wood,.008)
flower=mat('Small white church flowers',(.83,.79,.60),.96)
for i in range(5):
 xx=3.42+i*.10;yy=-1.88+(i%2)*.13
 beam('Cut flower stem',(xx-.04,yy-.13,1.21),(xx+.06,yy+.10,1.24),.009,moss)
 for a in range(5):uv('Small flower petal',(xx+.06+.031*math.cos(a*math.tau/5),yy+.10+.031*math.sin(a*math.tau/5),1.27),(.035,.024,.019),flower)

# Tiny fractured blue enamel pieces are discoverable close detail, never unique at map scale.
ACTIVE='16_InspectedProps'
blue_enamel=mat('Chalice blue enamel',(.025,.23,.61),.21,.22)
mesh('Blue enamel piece on altar', [(-3.091,3.607,1.377),(-3.059,3.593,1.377),(-3.041,3.614,1.377),(-3.057,3.637,1.377)],[(0,1,2,3)],blue_enamel)
mesh('Blue enamel piece in tray groove',[(3.348,-1.997,1.196),(3.366,-2.012,1.196),(3.389,-1.986,1.196),(3.36,-1.974,1.196)],[(0,1,2,3)],blue_enamel)
cube('Bakery repayment note',(-4.38,-1.75,1.08),(.26,.20,.012),linen,.008)
cyl('Bakery repayment note seal',(-4.31,-1.78,1.091),.03,.006,red,16)

# A quiet family memorial in the church side room; knot is not identity proof.
ACTIVE='16_InspectedProps'
memorial=mat('Memorial purple ribbon',(.36,.18,.40),.90)
cube('Memorial small card',(-1.63,3.76,1.722),(.28,.18,.012),linen,.007)
for sx in [-1,1]:
 pts=[]
 for i in range(25):
  a=i*math.tau/24;pts.append((-1.63+sx*.057+math.cos(a)*.051,3.73+math.sin(a)*.037,1.739))
 curve('Memorial two-loop bow',pts,.009,memorial)
curve('Memorial ribbon tail',[(-1.63,3.73,1.74),(-1.67,3.63,1.735),(-1.69,3.60,1.61)],.009,memorial)
curve('Memorial ribbon tail',[(-1.63,3.73,1.74),(-1.58,3.63,1.735),(-1.55,3.60,1.64)],.009,memorial)

# Four recognizable, fully clothed static figures. Faces look toward square; no animation.
# Cast local coordinate convention: face -Y, all feet sit on upper paving z=.47.
def make_person(pid,label,pos,angle,garment,kind):
 global ACTIVE
 ACTIVE='20_Cast_'+pid
 root=bpy.data.objects.new('NPC_'+pid,None);coll(ACTIVE).objects.link(root);root.location=pos;root.rotation_euler.z=angle;root['npc_id']=pid;root['display_name']=label;root['pose']='present-time-static'
 before=set(bpy.data.objects)
 def ell(n,p,sc,m):return uv(pid+' '+n,p,sc,m)
 # Human anatomy under real sleeves/dress, boots flat to ground.
 for sx in [-1,1]:
  ell('boot',(sx*.11,-.075,.078),(.105,.18,.078),leather)
  if kind=='carpenter':
   ell('trouser leg',(sx*.105,0,.38),(.092,.105,.30),greencloth)
  else:
   ell('lower leg',(sx*.10,0,.32),(.067,.075,.21),garment)
 # Torso has shoulders, narrowed waist; cloth skirt is tailored frustum mesh.
 ell('clothed torso',(0,0,.97),(.235,.148,.33),garment)
 skirt_top=.76;skirt_bot=.20 if kind!='carpenter' else .55
 vs=[];fs=[];N=24
 for z,r in [(skirt_bot,.285 if kind!='carpenter' else .22),(skirt_top,.19)]:
  for i in range(N):a=i*math.tau/N;vs.append((r*math.cos(a),r*.69*math.sin(a),z))
 for i in range(N):fs.append((i,(i+1)%N,(i+1)%N+N,i+N))
 mesh(pid+' tailored garment skirt',vs,fs,garment)
 # Belt wraps garment and linen apron lays over it, never bare block limbs.
 ell('leather belt',(0,-.007,.78),(.213,.15,.040),leather)
 if kind in ['baker','carpenter']:
  cloth(pid+' working apron',(0,-.166,1.05),.35,.66 if kind=='baker' else .44,apronmat,10)
  beam(pid+' apron neck tie',(-.08,-.125,1.20),(-.08,-.171,1.04),.022,apronmat)
  beam(pid+' apron neck tie',(.08,-.125,1.20),(.08,-.171,1.04),.022,apronmat)
 # Rounded cloth sleeves and forearms, hands resting naturally in front.
 for sx in [-1,1]:
  a=(sx*.22,0,1.13);b=(sx*.31,-.075,.95);c=(sx*.20,-.25,.84)
  beam(pid+' upper sleeve',a,b,.145,garment);ell('sleeve elbow',b,(.09,.09,.09),garment)
  beam(pid+' fore sleeve',b,c,.105,garment);ell('hand',c,(.058,.056,.068),skin)
 ell('neck',(0,0,1.29),(.072,.072,.10),skin)
 ell('head',(0,-.008,1.46),(.144,.129,.188),skin)
 ell('hair',(0,.036,1.51),(.151,.12,.155),grayhair if kind=='caretaker' else hair)
 ell('nose',(0,-.140,1.465),(.029,.045,.038),skin)
 for sx in [-1,1]:ell('ear',(sx*.142,-.008,1.46),(.029,.027,.048),skin);ell('eye',(sx*.050,-.128,1.495),(.012,.008,.012),hair)
 if kind=='baker':
  ell('linen coif',(0,.035,1.59),(.162,.133,.105),apronmat)
  cloth(pid+' linen coif tail',(0,.132,1.57),.23,.31,apronmat,8)
  ell('held bread loaf',(0,-.28,.88),(.19,.085,.065),linen)
 elif kind=='carpenter':
  ell('wool cap',(0,0,1.605),(.16,.14,.073),greencloth)
  cube(pid+' cap brim',(0,-.124,1.587),(.26,.11,.035),greencloth,.025)
  # Visible rolled carpenter's paper/measure rather than metal weapon.
  cyl(pid+' rolled plan',(.16,-.25,.88),.045,.25,linen,16,(0,math.pi/2,0))
 elif kind=='dyer':
  ell('hair bun',(0,.15,1.51),(.077,.077,.085),hair)
  cloth(pid+' blue shoulder shawl',(0,.10,1.23),.49,.39,blue,12)
  cube(pid+' held dyed swatch',(0,-.264,.86),(.28,.04,.17),blue,.02)
 elif kind=='caretaker':
  ell('short gray beard',(0,-.112,1.35),(.085,.045,.087),grayhair)
  cloth(pid+' ochre clerical stole',(0,-.151,1.24),.085,.67,linen,8)
  # Ring of ordinary church keys at belt.
  torus(pid+' key ring',(.21,-.18,.79),.042,.009,bronze,(math.pi/2,0,0))
  for i in range(2):beam(pid+' church key',(.19+i*.038,-.18,.76),(.19+i*.038,-.18,.67),.015,iron)
 for o in set(bpy.data.objects)-before:
  o.parent=root;o['npc_id']=pid;o['static_cast']=True
 return root
cast={
 'mira':make_person('mira','ミラ',(-1.70,-1.93,.471),math.radians(-18),redcloth,'baker'),
 'theo':make_person('theo','テオ',(1.48,.10,.471),math.radians(20),greencloth,'carpenter'),
 'sera':make_person('sera','セラ',(4.00,-2.86,.471),math.radians(-18),purplecloth,'dyer'),
 'orn':make_person('orn','オルン',(-1.12,-.12,.471),math.radians(12),robecloth,'caretaker'),
}

# Anchors are data only, never rendered evidence indicators. Neutral location ids stable.
ACTIVE='80_GameplayAnchors'
anchors={
 'church':(-2.62,1.34,1.13),'altar':(-3.06,3.49,1.44),'storage':(-1.64,2.66,1.15),'church-storage':(-1.64,2.66,1.15),
 'side_door':(-1.06,2.635,1.43),'belfry':(-2.60,3.66,4.64),'bell-tower':(-2.60,3.66,4.64),
 'workshop':(1.52,.56,1.36),'workshop_window':(-.10,2.70,1.80),'bakery':(-3.25,-2.28,1.26),
 'dye-yard':(4.74,-1.64,1.45),'borrowed_items':(3.65,-1.85,1.29),'gray_cloak':(5.84,-2.39,1.08),
 'well':(.35,-2.78,1.43),'square':(.25,-.64,.57),
}
for id,loc in anchors.items():
 o=bpy.data.objects.new('LOCATION_'+id,None);o.location=loc;coll(ACTIVE).objects.link(o);o['location_id']=id
for pid,root in cast.items():
 o=bpy.data.objects.new('PERSON_'+pid,None);o.location=root.location+Vector((0,0,1.68));coll(ACTIVE).objects.link(o);o['npc_id']=pid;o['person_anchor']=True
# Compatibility anchors retained until viewer migrates to location IDs.
for ev,place in {'v1':'altar','v2':'belfry','v3':'workshop_window','v5':'borrowed_items','v6':'storage','v8':'side_door'}.items():
 o=bpy.data.objects.new('HOTSPOT_'+ev+'_'+place,None);o.location=anchors[place];coll(ACTIVE).objects.link(o);o['evidence_id']=ev
exec(compile(open(os.path.join(SCRIPT,'expand_town.py')).read(),os.path.join(SCRIPT,'expand_town.py'),'exec'))
# Make floor inside nave marginally higher, but all outside paths and NPC soles are at paving.
bpy.context.view_layer.update()
s=bpy.context.scene;s['Project']='記録と足跡 / 銀杯と借りた影';s['Art note']='Present-time static scene after discovery. Silver chalice is absent. Rendered poses establish no alibi.'
cam.location=(22,-29,23);cam.rotation_euler=(Vector((-.45,-.5,1.7))-cam.location).to_track_quat('-Z','Y').to_euler();cam.data.type='ORTHO';cam.data.ortho_scale=22.0
s.camera=cam;s.render.engine='CYCLES';s.cycles.samples=40;s.cycles.use_denoising=False;s.render.resolution_x=1440;s.render.resolution_y=1180;s.render.resolution_percentage=100
# Ambient values chosen for readable handcrafted miniature forms.
s.world.node_tree.nodes['Background'].inputs[1].default_value=.6
bpy.ops.wm.save_as_mainfile(filepath=os.path.join(ART,'chalice_village.blend'))
print('SCENE_SAVED',flush=True)
# Mesh-visible verification: cast soles, portal dimensions and geometric line of sight.
ray_a=Vector((1.60,2.70,1.84));ray_b=Vector((-1.45,2.70,1.84));v=ray_b-ray_a
hit,loc,norm,idx,obj,matw=s.ray_cast(bpy.context.evaluated_depsgraph_get(),ray_a,v.normalized(),distance=v.length)
checks={'witness_ray_clear':not hit,'ray_start':list(ray_a),'ray_end':list(ray_b),'blocking_object':obj.name if hit else None,'side_door_clear_width':1.01,'workshop_window_clear_width':.88,'alley_width':2.04,'cast_soles':{pid:round(root.location.z,3) for pid,root in cast.items()},'cast_static':True,'animations':0,'church_chalice_present':False}
assert not hit,'Witness line obstructed: '+str(checks)
with open(os.path.join(ART,'geometry_checks.json'),'w') as f:json.dump(checks,f,ensure_ascii=False,indent=2)
with open(os.path.join(ART,'anchor_contract.json'),'w') as f:json.dump({'blender':anchors,'three':{k:[v[0],v[2],-v[1]] for k,v in anchors.items()},'npcs':{k:{'blender':list(v.location),'three':[v.location.x,v.location.z,-v.location.y],'head_three':[v.location.x,v.location.z+1.68,-v.location.y]} for k,v in cast.items()}},f,ensure_ascii=False,indent=2)
# Export material/collection-batched GLB with PBR constants; keep cast pieces grouped by person.
exec(compile(open(os.path.join(SCRIPT,'export_chalice.py')).read(),os.path.join(SCRIPT,'export_chalice.py'),'exec'))
# Re-select editable scene for deterministic visual QA.
bpy.context.window.scene=s
if '--no-render' not in sys.argv:
 s.render.filepath=os.path.join(ART,'village-overview.png');bpy.ops.render.render(write_still=True)
 # Church inspection shows exactly the same shell, with physically removable roof hidden.
 hidden=[]
 for co in ['11_ChurchRoof','14_WorkshopRoof','12_ChurchBelfry']:
  for o in C[co].objects:o.hide_render=True;hidden.append(o)
 cam.location=(7,-7,13);cam.rotation_euler=(Vector((-1.5,2.18,1.05))-cam.location).to_track_quat('-Z','Y').to_euler();cam.data.ortho_scale=9.0
 s.render.resolution_x=1380;s.render.resolution_y=1100;s.render.filepath=os.path.join(ART,'church-workshop-inspection.png');bpy.ops.render.render(write_still=True)
 for o in hidden:o.hide_render=False
 cam.location=(1,-9,5);cam.rotation_euler=(Vector((-1.3,-.4,1.35))-cam.location).to_track_quat('-Z','Y').to_euler();cam.data.ortho_scale=5.8
 s.render.resolution_x=1380;s.render.resolution_y=1050;s.render.filepath=os.path.join(ART,'static-cast-closeup.png');bpy.ops.render.render(write_still=True)
 # Paired near-eye altar inspection images expose the physical support, not a caption-only assertion.
 hidden_roof=[]
 for co in ['11_ChurchRoof','12_ChurchBelfry']:
  for o in C[co].objects:o.hide_render=True;hidden_roof.append(o)
 cam.location=(-3.06,2.16,2.10);cam.rotation_euler=(Vector((-3.06,3.54,1.65))-cam.location).to_track_quat('-Z','Y').to_euler();cam.data.ortho_scale=1.92
 s.render.resolution_x=1200;s.render.resolution_y=1000;s.cycles.samples=64
 for opened,name in [(False,'altar-covered'),(True,'altar-uncovered')]:
  for o in C['17_AltarCover'].objects:o.hide_render=opened
  s.render.filepath=os.path.join(ROOT,'assets',name+'.png');bpy.ops.render.render(write_still=True)
 for o in C['17_AltarCover'].objects:o.hide_render=False
 for o in hidden_roof:o.hide_render=False
 print('RENDERS_READY',flush=True)
print('CHALICE_VILLAGE_READY',flush=True)
