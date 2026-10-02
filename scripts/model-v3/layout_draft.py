from PIL import Image,ImageDraw,ImageFont
import json,os
R=os.path.abspath(os.path.join(os.path.dirname(__file__),'../..'));O=os.path.join(R,'docs/model-v3')
W,H=1300,1160;im=Image.new('RGB',(W,H),'#f5f0e1');d=ImageDraw.Draw(im)
font=lambda n:ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf',n)
sc=62;ox=670;oy=560
p=lambda x,y:(round(ox+x*sc),round(oy-y*sc))
def box(b,c,outline='#716957',w=2):x0,y0,x1,y1=b;d.rectangle([p(x0,y1),p(x1,y0)],fill=c,outline=outline,width=w)
def path(points,width,color):d.line([p(*q) for q in points],fill=color,width=int(width*sc),joint='curve')
def label(x,y,t,n=19,c='#30423c'):
 q=p(x,y);bb=d.textbbox((0,0),t,font=font(n));d.text((q[0]-(bb[2]-bb[0])/2,q[1]-n/2),t,font=font(n),fill=c)
box((-9.45,-8,8.55,7),'#a6b28b','#4e675b',3)
# Rivers visibly enter and exit the model border.
box((-9.07,-8,-7.93,7),'#80abb1','#5e8c94',2)
# Grass/garden is distinct from gravel streets, the market square and church forecourt.
roads=[([(-2.8,-8),(-2.8,-.7)],2.4),([(-1.7,-2.9),(8.55,-2.9)],2.0),([(-7.4,-.9),(-2.8,-.9)],1.5),([(-.1,-1),(-.1,4.8)],1.5),([(-.1,4.8),(-4.71,4.8),(-4.71,-.9)],.8),([(-2.8,-5.8),(-4.2,-7.1),(-6.58,-7.1),(-6.58,-6.40)],1.25),([(-4.2,-7.1),(-4.0,-4.35),(-3.4,-2.0)],1.2),([(2.48,-1.3),(2.48,.60)],1.6),([(-5.3,-.9),(-5.3,-1.975)],1.2)]
for pts,w in roads:path(pts,w,'#c7b89a')
box((-4.0,-2.2,.5,.65),'#e4d3ac','#c7b58b',2)
poly=[p(*v) for v in [(-1.7,-4.8),(3.8,-4.8),(4.2,-1.2),(2.1,-.5),(-1.6,-.9)]];d.polygon(poly,fill='#d9c5a0')
# Five relevant buildings only.
for b,c,t,x,y in [((-4.05,.65,-1.15,4.2),'#dddbbf','CHURCH',-2.60,2.2),((.95,.60,4.45,3.50),'#a6b8a3','WORKSHOP',2.70,2.1),((-7.525,1.9,-5.175,4.10),'#91aca1','DYER',-6.35,3.2),((-6.425,-3.825,-4.175,-1.975),'#c99570','BAKERY',-5.3,-2.9),((-7.63,-6.375,-5.53,-4.825),'#bca07a','MILL',-6.58,-5.6)]:box(b,c,'#645c4b',4);label(x,y,t,18)
# Open southern church door; side door opposite workshop west window.
path([(-3.26,.65),(-2.34,.65)],.12,'#e4d3ac');path([(-2.8,.10),(-2.8,.90)],.08,'#486552')
path([(-1.15,2.13),(-1.15,3.14)],.10,'#e4d3ac');path([(.95,2.26),(.95,3.14)],.11,'#5b8a9c')
path([(-1.45,2.70),(1.60,2.70)],.03,'#697b6d')
label(-2.8,.12,'MAIN DOOR',14);label(-.12,2.98,'SIDE DOOR / WINDOW',11);label(2.10,3.22,'WEST WINDOW',13);label(-.02,3.90,'2.04 m',16);label(-2.35,-1.10,'OPEN FORECOURT',18)
label(1.55,-2.20,'MEETING SQUARE',19);label(-.65,-5.25,'MAIN ARRIVAL',16)
# Well clear of portal axis.
a,b=p(.45,-3.8);d.ellipse((a-34,b-34,a+34,b+34),fill='#76989e',outline='#736a54',width=8);label(.45,-4.58,'WELL',16)
# Bridge connects stream to the craft yard at village edge.
box((-9.45,.90,-7.55,1.80),'#a88559','#6a523d',2)
label(-6.7,.3,'CRAFT YARD',16);label(6.25,-2.1,'EAST ROAD',16)
label(-6.5,-7.62,'MILL ACCESS',15)
d.text((50,35),'EXPANDED TOWN · TOP-DOWN GEOMETRY DRAFT',font=font(27),fill='#273d34')
d.text((50,78),'18 × 15 m base | church and workshop sightline retained | no building on the south portal axis',font=font(17),fill='#5f6c5c')
d.text((50,1090),'Warm pale: forecourt     Ochre: meeting square     Gravel: connecting streets     Green: planted edges',font=font(17),fill='#4a5e4e')
d.text((1110,120),'N ↑',font=font(27),fill='#273d34')
im.save(os.path.join(O,'expanded-layout-draft.png'))
json.dump({'base':[-9.45,-8,8.55,7],'church':[-2.6,2.425],'workshop':[2.7,2.05],'dyehouse':[-6.35,3.0],'bakery':[-5.3,-2.9],'mill':[-6.58,-5.6],'well':[.45,-3.8],'race_x':-8.5,'roads':roads},open(os.path.join(O,'expanded-layout-plan.json'),'w'),indent=2)
