"""Expanded town arrangement following reviewed Conques-inspired street hierarchy.
Executed after asset construction; source remains original procedural geometry.
"""
from mathutils import Matrix
# Physical building transforms, excluding shared anchors which are reset below.
def transform_objects(objects,old,new,angle=0):
 m=Matrix.Translation(Vector((new[0],new[1],0)))@Matrix.Rotation(angle,4,'Z')@Matrix.Translation(Vector((-old[0],-old[1],0)))
 for ob in objects:ob.matrix_world=m@ob.matrix_world
 return m
bakM=transform_objects(list(C['03_Bakery'].objects),(-3.25,-1.20),(-5.3,-2.9),math.pi)
dye_delta=Vector((-11.08,2.85,0))
for co in ['04_Dyehouse','15_BorrowedProps']:
 for ob in C[co].objects:ob.location+=dye_delta
for ob in C['16_InspectedProps'].objects:
 if ob.name.startswith('Blue enamel piece in tray'):ob.location+=dye_delta
 if ob.name.startswith('Bakery repayment'):ob.matrix_world=bakM@ob.matrix_world
for co in ['13_CarpenterWorkshop','14_WorkshopRoof']:
 for ob in list(C[co].objects):
  if ob.name.startswith('Timber horse'):bpy.data.objects.remove(ob,do_unlink=True)
  else:ob.location.x+=1.0
# Complete mill installation follows its race; bridge remains up at the dyer's approach.
for ob in C['05_Watermill'].objects:
 ob.location.x-=3.38
 ob.location.y+=(-.16 if ob.name.startswith(('Footbridge','Bridge ')) else -2.2)
for ob in C['06_WellAndReadingStand'].objects:ob.location+=Vector((.10,-1.02,0))
# Physical doorway headroom and an honest internal sacristy door clear of the altar.
for n in ['Sacristy solid partition','Sacristy back partition pier','Sacristy internal door lintel']:
 if n in bpy.data.objects:bpy.data.objects.remove(bpy.data.objects[n],do_unlink=True)
ACTIVE='10_Church'
cube('Sacristy south partition pier',(-2.20,1.985,1.74),(.13,.33,2.28),cream,.015)
cube('Sacristy north partition',(-2.20,3.56,1.74),(.13,1.12,2.28),cream,.015)
cube('Sacristy connecting door header',(-2.20,2.575,2.65),(.13,.85,.46),cream,.015)
o=bpy.data.objects['Church side door lintel'];bpy.data.objects.remove(o,do_unlink=True)
cube('Church side door raised lintel',(-1.23,2.635,2.65),(.16,1.02,.46),cream,.02)
# Remove east rear pew to connect the real sacristy doorway to the central aisle.
for o in list(C['10_Church'].objects):
 if o.name.startswith('Church pew') and o.location.y>2.30 and o.location.x>-3:
  bpy.data.objects.remove(o,do_unlink=True)
# Present-day figures: none occupies the church arrival axis or a doorway.
cast_positions={'mira':(-4.45,-1.10,.471),'theo':(2.48,-.15,.471),'sera':(-5.80,-.35,.471),'orn':(-1.48,-.24,.471)}
for pid,pos in cast_positions.items():cast[pid].location=pos
# Source scene previously generated as a compact paved exhibit. Replace its landscape.
for ob in list(C['00_Plaza'].objects):bpy.data.objects.remove(ob,do_unlink=True)
ACTIVE='00_Plaza'
grass=mat('Town grassy verges',(.24,.295,.17),.99,0,True)
soil=mat('Packed earth lane edges',(.37,.32,.23),.98,0,True)
roadmats=[mat('Street cobble %02d'%i,(.385+i*.012,.365+i*.010,.302+i*.009),.94,0,True) for i in range(6)]
courtmats=[mat('Church forecourt flag %02d'%i,(.55+i*.012,.49+i*.010,.36+i*.007),.91,0,True) for i in range(5)]
squaremats=[mat('Meeting square sett %02d'%i,(.47+i*.012,.405+i*.010,.285+i*.008),.93,0,True) for i in range(5)]
base=(-9.45,-8,8.55,7)
cube('Expanded town stone foundation',(-.45,-.5,-.15),(18,15,.80),basalt,.20)
cube('Expanded town upper stone lip',(-.45,-.5,.18),(17.91,14.91,.16),trim,.055)
cube('Town planted and earthen ground',(-.45,-.5,.30),(17.72,14.72,.16),grass,.06)
# A continuous watercourse, entering and leaving opposite diorama edges.
cube('Continuous mill race water',(-8.50,-.5,.396),(1.14,15,.027),water,.018)
for xx in [-9.21,-7.79]:cube('Continuous race retaining bank',(xx,-.5,.52),(.28,15,.32),stone,.04)
for j in range(36):cube('Race water ripple',(-8.5+random.uniform(-.25,.25),-7.74+j*.414,.417),(random.uniform(.28,.69),.012,.005),wh,.003)
# Route profiles are explicit. The west service lane is secondary, not the public entrance.
roads=[([(-2.8,-8.02),(-2.8,-.7)],2.4),([(-1.7,-2.9),(2.8,-2.7),(5.3,-2.9),(8.57,-2.9)],2.0),([(-7.4,-.9),(-5.1,-.9),(-2.8,-1.1)],1.5),([(-.1,-1.0),(-.1,4.8)],1.50),([(-.1,4.8),(-4.74,4.8),(-4.74,-.9)],.80),([(-2.8,-5.8),(-4.2,-7.1),(-6.58,-7.1),(-6.58,-6.40)],1.25),([(-4.2,-7.1),(-4.0,-4.35),(-3.4,-2.0)],1.2),([(2.48,-1.3),(2.48,.60)],1.6),([(-5.3,-.9),(-5.3,-1.975)],1.20),([(-6.65,-.9),(-6.65,1.78)],1.10),([(-9.46,1.35),(-7.60,1.35),(-6.65,1.35)],.85)]
forecourt=[(-4.0,-2.2),(.50,-2.2),(.50,.65),(-4.0,.65)]
square=[(-1.7,-4.8),(3.8,-4.8),(4.2,-1.2),(2.1,-.5),(-1.6,-.9)]
craftyard=[(-7.57,-.12),(-4.86,-.12),(-4.86,1.88),(-7.57,1.88)]
def point_in_poly(x,y,poly):
 hit=False;j=len(poly)-1
 for i in range(len(poly)):
  a,b=poly[i],poly[j]
  if (a[1]>y)!=(b[1]>y) and x<(b[0]-a[0])*(y-a[1])/(b[1]-a[1])+a[0]:hit=not hit
  j=i
 return hit
def segdist(x,y,a,b):
 dx,dy=b[0]-a[0],b[1]-a[1];t=max(0,min(1,((x-a[0])*dx+(y-a[1])*dy)/(dx*dx+dy*dy)))
 return math.hypot(x-a[0]-t*dx,y-a[1]-t*dy)
def roadkind(x,y):
 if point_in_poly(x,y,forecourt):return 2
 if point_in_poly(x,y,square):return 3
 if point_in_poly(x,y,craftyard):return 1
 if any(segdist(x,y,a,b)<w/2 for pts,w in roads for a,b in zip(pts,pts[1:])):return 1
 return 0
footprints=[(-2.6,2.425,3.06,3.73),(2.7,2.05,3.73,3.12),(-6.55,3,2.60,2.45),(-5.3,-2.9,2.5,2.1),(-6.58,-5.6,2.35,1.8)]
# Earth beds continuous under all cobbles; real geometry distinguishes the three public spaces.
for n,poly,ma in [('Church forecourt bed',forecourt,soil),('Meeting square bed',square,soil),('Craft yard bed',craftyard,soil)]:mesh(n,[(x,y,.394) for x,y in poly],[tuple(range(len(poly)))],ma)
for idx,(pts,w) in enumerate(roads):
 for a,b in zip(pts,pts[1:]):
  v=Vector((b[0]-a[0],b[1]-a[1],0));o=cube('Connected street bed',((a[0]+b[0])/2,(a[1]+b[1])/2,.392),(w,v.length+.08,.045),soil,.08);o.rotation_euler.z=-math.atan2(v.x,v.y)
for iy in range(42):
 yy=-7.87+iy*.355
 for ix in range(47):
  xx=-9.30+ix*.385+(iy%2)*.17;k=roadkind(xx,yy)
  if not k or xx>8.4 or -9.12<xx<-7.88:continue
  if any(abs(xx-cx)<w/2 and abs(yy-cy)<d/2 for cx,cy,w,d in footprints):continue
  # Well is an actual open structure; don't pave its shaft.
  if math.hypot(xx-.45,yy+3.8)<.64:continue
  mats=courtmats if k==2 else squaremats if k==3 else roadmats
  o=cube('Forecourt paving' if k==2 else 'Square paving' if k==3 else 'Street cobble',(xx,yy,.408+random.uniform(-.006,.005)),(.363,.328,.115),random.choice(mats),.021);o.rotation_euler.z=random.uniform(-.026,.026)
# Narrow stone bands articulate thresholds rather than surrounding every building with leftover space.
for x0,x1,yy in [(-4.0,.5,-2.20),(-4.0,.5,.40),(-1.5,3.6,-4.78)]:
 for i in range(int((x1-x0)/.40)):
  xx=x0+(i+.5)*.4
  if -3.7<xx<-1.8 and yy<0:continue
  cube('Civic paving border',(xx,yy,.421),(.38,.105,.102),trim,.018)
# Gate-free street entrances continue beyond the plinth edges; coping avoids every road.
for xx in [-9.36,8.46]:
 for yy in [-7.6+i*.42 for i in range(35)]:
  if roadkind(xx,yy) or xx<-9:continue
  cube('Outer low stone edging',(xx,yy,.45),(.12,.395,.12),stone,.022)
for yy in [-7.91,6.91]:
 for xx in [-9.0+i*.42 for i in range(42)]:
  if roadkind(xx,yy) or xx<-7.6:continue
  cube('Outer low stone edging',(xx,yy,.45),(.40,.12,.12),stone,.022)
# Low planted borders and modest orchard make landscape legible, without adding irrelevant buildings.
leaf=mat('Town orchard foliage',(.19,.29,.13),.96,0,True)
leaf2=mat('Town light orchard foliage',(.30,.36,.17),.95)
for tx,ty in [(6.15,1.65),(6.85,4.65),(2.8,5.75),(5.45,-5.95)]:
 cyl('Small orchard trunk',(tx,ty,1.16),.075,1.40,wood,12)
 for j,(dx,dy,dz,r) in enumerate([(-.28,0,.10,.48),(.26,.08,.20,.49),(.0,-.24,.35,.43),(0,.05,.62,.46)]):
  uv('Small orchard canopy',(tx+dx,ty+dy,1.67+dz),(r,r*.82,r*.78),leaf if j%2 else leaf2)
for a,b in [((4.8,-.3),(7.75,-.3)),((7.75,-.3),(7.75,5.25)),((7.75,5.25),(4.8,5.25)),((4.8,-5.35),(7.8,-5.35))]:
 v=Vector((b[0]-a[0],b[1]-a[1],0));steps=max(1,int(v.length/.8))
 for i in range(steps+1):
  t=i/steps;xx=a[0]+v.x*t;yy=a[1]+v.y*t;cube('Low garden fence post',(xx,yy,.72),(.07,.07,.58),wood,.012)
 for zz in [.64,.90]:beam('Low garden fence rail',(a[0],a[1],zz),(b[0],b[1],zz),.045,oak)
for i in range(70):
 xx=random.uniform(-7.3,8);yy=random.uniform(-7.6,6.65)
 if roadkind(xx,yy) or any(abs(xx-cx)<w/2+.25 and abs(yy-cy)<d/2+.25 for cx,cy,w,d in footprints):continue
 if any(math.hypot(xx-px,yy-py)<.65 for px,py,_ in cast_positions.values()):continue
 uv('Low verge tuft',(xx,yy,.424),(.07,.08,.05),moss)
# Direct entry paving from the craft yard ends at dyer's actual south-facing doorstep.
# Drying rack originally covered the doorway; split it toward the yard's eastern side.
for ob in list(C['04_Dyehouse'].objects):
 if ob.name.startswith(('Dye rack','Blue cloth hanging','Cloth peg')):ob.location.x+=.72
# Leave the dyer entrance spur clear; the second vat sits on the riverside work edge.
for ob in C['04_Dyehouse'].objects:
 if ob.name.startswith(('Dye vat','Vat hoop','Dye stirring stick')) and math.hypot(ob.location.x+6.38,ob.location.y-.35)<.27:ob.location+=Vector((-.90,-.45,0))
# Explicit neutral anchor and present cast contract.
anchors.update({'church':(-2.8,.43,1.31),'church-entry':(-2.8,.43,1.31),'workshop':(2.52,.56,1.36),'workshop_window':(.90,2.70,1.80),'bakery':(-5.3,-1.82,1.26),'dye-yard':(-6.22,.68,1.24),'borrowed_items':(-7.43,1.00,1.29),'gray_cloak':(-5.24,.46,1.08),'well':(.45,-3.8,1.43),'square':(.65,-2.65,.57)})
for ob in C['80_GameplayAnchors'].objects:
 if ob.get('location_id') in anchors:ob.location=anchors[ob['location_id']]
 if ob.get('person_anchor'):ob.location=cast[ob['npc_id']].location+Vector((0,0,1.68))
 ev=ob.get('evidence_id')
 if ev:
  place={'v1':'altar','v2':'belfry','v3':'workshop_window','v5':'borrowed_items','v6':'storage','v8':'side_door'}[ev];ob.location=anchors[place]
o=bpy.data.objects.new('LOCATION_church-entry',None);o.location=anchors['church-entry'];o['location_id']='church-entry';coll('80_GameplayAnchors').objects.link(o)
# Route validation definitions use the actual floor at thresholds, not a single eye ray.
route_checks={
 'plaza_to_main_church':[(-2.8,-4.4),(-2.8,-.6),(-2.8,.64),(-3.12,1.06),(-3.12,2.56)],
 'square_to_side_door':[(-.1,-1),(-.1,2.635),(-1.61,2.635)],
 'side_door_to_nave':[(-1.61,2.635),(-2.58,2.575),(-3.12,2.575)],
 'square_to_workshop':[(2.48,-1.3),(1.77,-.65),(1.77,.13),(2.48,.50),(2.48,.86)],
 'square_to_bakery':[(-2.8,-1.1),(-3.2,-.35),(-5.3,-.35),(-5.3,-1.50)],
 'square_to_dyer':[(-2.8,-1.1),(-3.2,-.35),(-5.0,-.35),(-5.125,-.725),(-5.7,-1.15),(-6.65,-1.15),(-6.65,1.67)],
 'arrival_to_mill':[(-2.8,-5.8),(-4.2,-7.1),(-6.58,-7.1),(-6.58,-6.72)],
}
scene_layout={'base_bounds':base,'race_x':-8.5,'forecourt':forecourt,'square':square,'craft_yard':craftyard,'roads':roads,'routes':route_checks,'buildings':{'church':[-2.6,2.425,2.9,3.55],'workshop':[2.7,2.05,3.5,2.9],'bakery':[-5.3,-2.9,2.25,1.85],'dyer':[-6.55,3.0,2.35,2.2],'mill':[-6.58,-5.6,2.1,1.55]},'cast':cast_positions}
with open(os.path.join(ART,'expanded-layout-contract.json'),'w') as f:json.dump(scene_layout,f,indent=2)
