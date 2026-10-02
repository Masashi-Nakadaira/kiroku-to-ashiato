import json,os,html
R=os.path.abspath(os.path.join(os.path.dirname(__file__),'../..'));O=os.path.join(R,'docs/model-v3')
a=json.load(open(os.path.join(O,'anchor_contract.json')));l=json.load(open(os.path.join(O,'expanded-layout-contract.json')))
W,H=1080,1040;sc=980/18;X=lambda x:50+(x+9.45)*sc;Y=lambda y:130+(7-y)*sc
S=['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1040" role="img" aria-labelledby="title desc"><title id="title">教会のある小さな町の見取り図</title><desc id="desc">南からの大通りは建物に遮られず教会の正面口と前庭へつながる。井戸広場は東にずらし、木工房は教会の東、染場は北西の水路沿い、パン焼き小屋と水車は南西に配置。教会の東横戸と木工房の西窓が実際の通りを挟んで向かい合う。</desc><defs><clipPath id="town"><rect x="50" y="130" width="980" height="816.7" rx="10"/></clipPath><pattern id="roof" width="14" height="14" patternUnits="userSpaceOnUse"><path d="M0 13H14M7 0V13" stroke="#fff" stroke-opacity=".16"/></pattern></defs><rect width="1080" height="1040" rx="24" fill="#f4efdf"/><text x="52" y="59" font-family="serif" font-size="29" fill="#30403a">教会のある町</text><text x="53" y="88" font-family="sans-serif" font-size="16" fill="#697461">現在の配置　・　北が上　・　正面の道と仕事場を結ぶ脇道</text><rect x="50" y="130" width="980" height="816.7" rx="10" fill="#a6b58c" stroke="#64795f" stroke-width="3"/><g clip-path="url(#town)">']
def path(pts,w,c):S.append('<path d="'+' '.join(('M' if i==0 else 'L')+f'{X(x):.1f} {Y(y):.1f}' for i,(x,y) in enumerate(pts))+f'" fill="none" stroke="{c}" stroke-width="{w*sc:.1f}" stroke-linejoin="round" stroke-linecap="round"/>')
def poly(pts,c,stroke='none',sw=1):S.append('<polygon points="'+' '.join(f'{X(x):.1f},{Y(y):.1f}' for x,y in pts)+f'" fill="{c}" stroke="{stroke}" stroke-width="{sw}"/>')
def rect(cx,cy,w,d,c,stroke='#685f4a',sw=3):S.append(f'<rect x="{X(cx-w/2):.1f}" y="{Y(cy+d/2):.1f}" width="{w*sc:.1f}" height="{d*sc:.1f}" rx="2" fill="{c}" stroke="{stroke}" stroke-width="{sw}"/>')
def text(x,y,t,size=17):S.append(f'<text x="{X(x):.1f}" y="{Y(y):.1f}" text-anchor="middle" font-family="serif" font-size="{size}" fill="#304139">{html.escape(t)}</text>')
rect(-8.5,-.5,1.14,15.4,'#7faeb5','#59858e',3)
for i in range(20):path([(-8.82,-7.7+i*.78),(-8.28,-7.58+i*.78)],.022,'#bad2cc')
for pts,w in l['roads']:path(pts,w+.10,'#b2a78b');path(pts,w,'#c9bc9e')
poly(l['forecourt'],'#e3d3ad','#c5b58f',1);poly(l['square'],'#d8c49b','#b9a783',1);poly(l['craft_yard'],'#cbc3a3','#b0a88a',1)
# Buildings use actual occupied footprints.
for key,color in [('church','#dcd7b9'),('workshop','#8eac9e'),('dyer','#86a79e'),('bakery','#bf8e68'),('mill','#c0a17b')]:
 cx,cy,w,d=l['buildings'][key];rect(cx,cy,w,d,color);rect(cx,cy,w,d,'url(#roof)','none',0)
# Clear visible true opening positions.
path([(-3.26,.65),(-2.34,.65)],.14,'#e3d3ad');path([(-1.15,2.13),(-1.15,3.14)],.14,'#c9bc9e');path([(.95,2.26),(.95,3.14)],.12,'#527f91');path([(1.95,.60),(3.1,.60)],.14,'#c9bc9e')
path([(-7.0,1.9),(-6.3,1.9)],.10,'#cbc3a3');path([(-5.8,-1.975),(-4.8,-1.975)],.08,'#c9bc9e')
# Church room boundary shows side storage and internal passage.
path([(-2.2,1.82),(-2.2,2.15)],.04,'#8b8268');path([(-2.2,3.0),(-2.2,4.1)],.04,'#8b8268')
rect(-3.06,3.48,1.48,.69,'#b5a079','#867859',1);text(-3.06,3.47,'祭壇',13)
text(-2.85,2.0,'教会',19);text(-2.8,.08,'正面口',14);text(-.65,2.56,'横戸',13);text(1.7,2.56,'西窓',13);text(2.73,1.70,'木工房',18);text(-6.55,3.1,'染物小屋',17);text(-5.3,-2.85,'パン焼き小屋',15);text(-6.58,-5.6,'水車小屋',16)
text(-2.2,-1.34,'教会前庭',18);text(1.60,-1.90,'広場',18);text(6.65,-2.55,'東の道',15);text(-2.75,-6.0,'南の大通り',16);text(-6.25,-.62,'仕事場の道',14)
# Retained bellcote roof location and fixed storage room label.
rect(-2.6,3.88,1,.48,'#698e84','#4f7669',1);text(-2.6,4.43,'鐘楼',14);text(-1.65,3.54,'収納',12)
rect(-8.5,1.35,1.88,.9,'#a7865b','#71583e',2)
for yy in [1.04,1.22,1.40,1.58,1.76]:path([(-9.40,yy),(-7.62,yy)],.015,'#d6bd8d')
# Dyer work yard props, returned garments and shallow flower tray.
rect(-6.95,1.0,.74,.50,'#b6976c','#816742',1);rect(-5.24,.47,.68,.56,'#9d9c86','#716d57',1)
for cx,cy in [(-5.62,.80),(-7.28,-.10)]:S.append(f'<circle cx="{X(cx):.1f}" cy="{Y(cy):.1f}" r="{.3*sc:.1f}" fill="#618e9e" stroke="#806848" stroke-width="3"/>')
# Well is deliberately off the main church door axis.
S.append(f'<circle cx="{X(.45):.1f}" cy="{Y(-3.8):.1f}" r="{.78*sc:.1f}" fill="#b5aa87" stroke="#736e56" stroke-width="5"/><circle cx="{X(.45):.1f}" cy="{Y(-3.8):.1f}" r="{.5*sc:.1f}" fill="#668e96"/>');text(.45,-4.93,'井戸',16)
for xx,yy in [(6.15,1.65),(6.85,4.65),(2.8,5.75),(5.45,-5.95)]:S.append(f'<circle cx="{X(xx):.1f}" cy="{Y(yy):.1f}" r="30" fill="#69804d" stroke="#4f6c43" stroke-width="2"/>')
for a0,b0 in [((4.8,-.3),(7.75,-.3)),((7.75,-.3),(7.75,5.25)),((7.75,5.25),(4.8,5.25)),((4.8,-5.35),(7.8,-5.35))]:path([a0,b0],.035,'#8a7955')
for pid,name,c in [('mira','ミラ','#a75438'),('theo','テオ','#4c6c4a'),('sera','セラ','#836282'),('orn','オルン','#2f5f5c')]:
 x,y,z=l['cast'][pid];S.append(f'<circle cx="{X(x):.1f}" cy="{Y(y):.1f}" r="7" fill="{c}" stroke="#f7efd8" stroke-width="2"/>');text(x+.35,y-.33,name,13)
S.append('</g><path d="M987 77V38M976 49L987 31L998 49" fill="none" stroke="#546b5c" stroke-width="2"/><text x="987" y="104" text-anchor="middle" font-family="serif" font-size="16" fill="#4b6354">北</text><text x="52" y="986" font-family="sans-serif" font-size="15" fill="#68745f">人物は現在の聞き取り場所です。事件当時の所在を示すものではありません。</text><text x="52" y="1015" font-family="sans-serif" font-size="14" fill="#76806c">淡色：教会前庭　　黄土色：広場　　灰褐色：通り　　緑：庭と草地</text></svg>')
open(os.path.join(R,'assets/village.svg'),'w').write(''.join(S))
pins={k:[round(X(a['blender'][k][0])/W*100,3),round(Y(a['blender'][k][1])/H*100,3)] for k in ['church','workshop','dye-yard','bakery','bell-tower','square','church-storage']}
a['mapPinPositions']=pins;a['mapProjection']={'viewBox':[0,0,W,H],'scale':sc,'x': '50 + (world_x + 9.45) * scale','y':'130 + (7 - world_y) * scale'}
json.dump(a,open(os.path.join(O,'anchor_contract.json'),'w'),ensure_ascii=False,indent=2)
print(json.dumps(pins,ensure_ascii=False))
