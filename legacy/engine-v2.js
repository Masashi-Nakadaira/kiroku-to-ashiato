(function(root){
'use strict';
const D=typeof module!=='undefined'&&module.exports?require('./data-v2.js'):root.MysteryData;
const SAVE_KEY='record-and-body.future.legacy-v2';
const CASE_EDIT_ACTIONS=new Set(['swap','move','window','body','classify','trace','report','proof']);
const sameSet=(a,b)=>Array.isArray(a)&&a.length===b.length&&new Set(a).size===a.length&&b.every(x=>a.includes(x));
const sameOrder=(a,b)=>Array.isArray(a)&&a.length===b.length&&a.every((x,i)=>x===b[i]);
const string=(x,max=5000)=>typeof x==='string'?x.slice(0,max):'';
function newCase(id){const c=D.cases[id];return {seen:[],tab:'inspect',selectedEvidence:c.evidence[0].id,order:[...c.initialOrder],window:{last:'',missing:''},body:{},classification:{},trace:[],report:{culprit:'',mechanism:'',opportunity:[],trace:[]},notes:'',hints:0,attempts:0,solved:false,boardChecked:false};}
function newState(){return {version:D.version,screen:'title',current:'village',tutorialSeen:false,sound:false,revisionNotice:false,cases:Object.fromEntries(D.caseIds.map(id=>[id,newCase(id)]))};}
function validPick(v,list){return list.includes(v)?v:'';}
function picks(v,list){return Array.isArray(v)?[...new Set(v.filter(x=>list.includes(x)))]:[];}
function normalizeSave(input){
 const s=newState();if(!input||typeof input!=='object')return s;
 // Version 1 described different events and routes. Preserve notes, never old solutions.
 if(input.version===1){s.tutorialSeen=input.tutorialSeen===true;s.sound=input.sound===true;s.revisionNotice=true;for(const id of D.caseIds)s.cases[id].notes=string(input.cases?.[id]?.notes,5000);return s;}
 if(input.version!==D.version)return s;
 s.revisionNotice=input.revisionNotice===true;
 s.current=validPick(input.current,D.caseIds)||'village';s.screen=['title','desk','ending','epilogue'].includes(input.screen)?input.screen:'title';s.tutorialSeen=input.tutorialSeen===true;s.sound=input.sound===true;
 for(const id of D.caseIds){const c=D.cases[id],q=input.cases&&input.cases[id],p=s.cases[id];if(!q||typeof q!=='object')continue;const evid=c.evidence.map(e=>e.id),people=c.suspects.map(x=>x.id),events=c.events.map(x=>x.id);
 p.seen=picks(q.seen,evid);p.tab=validPick(q.tab,['inspect','build','report'])||'inspect';p.selectedEvidence=validPick(q.selectedEvidence,evid)||evid[0];p.order=sameSet(q.order,events)?[...q.order]:[...c.initialOrder];p.notes=string(q.notes,5000);p.hints=Number.isInteger(q.hints)?Math.max(0,Math.min(5,q.hints)):0;p.attempts=Number.isInteger(q.attempts)?Math.max(0,Math.min(9999,q.attempts)):0;
 p.window={last:validPick(q.window?.last,events),missing:validPick(q.window?.missing,events)};
 p.trace=picks(q.trace,people);for(const x of people)p.body[x]=validPick(q.body?.[x],['bound','unknown']);
 if(c.classification)for(const x of Object.keys(c.classification))p.classification[x]=validPick(q.classification?.[x],c.categories.map(y=>y.id));
 p.report={culprit:validPick(q.report?.culprit,people),mechanism:validPick(q.report?.mechanism,c.mechanisms.map(x=>x.id)),opportunity:picks(q.report?.opportunity,evid),trace:picks(q.report?.trace,evid)};
 p.boardChecked=q.boardChecked===true&&checkBoard(s,id).ok;p.solved=q.solved===true&&checkConclusion(s,id).ok;
 }
 if(s.screen==='ending'&&!s.cases[s.current].solved)s.screen='desk';if(s.screen==='epilogue'&&!D.caseIds.every(id=>s.cases[id].solved))s.screen='title';return s;
}
function checkBoard(s,id){const c=D.cases[id],p=s.cases[id],groups=[];
 groups.push({name:id==='village'?'出来事の順序':'手動操作の順序',ok:sameOrder(p.order,c.order)});
 if(id==='village'){groups.push({name:'最後の確認と欠落の範囲',ok:p.window.last===c.window[0]&&p.window.missing===c.window[1]});groups.push({name:'範囲内の身体の所在',ok:Object.entries(c.bodyAnswers).every(([k,v])=>p.body[k]===v)});}else groups.push({name:'真正記録が観測したもの',ok:Object.entries(c.classification).every(([k,v])=>p.classification[k]===v)});
 groups.push({name:'痕跡と両立する候補',ok:sameSet(p.trace,c.traceMatches)});
 return {ok:groups.every(g=>g.ok),groups,unfilled:groups.filter(g=>!g.ok).map(g=>g.name)};
}
function checkConclusion(s,id){const c=D.cases[id],p=s.cases[id],board=checkBoard(s,id);return {ok:board.ok&&p.report.culprit===c.culprit&&p.report.mechanism===c.mechanism&&sameSet(p.report.opportunity,c.proofs.opportunity)&&sameSet(p.report.trace,c.proofs.trace),board};}
function swap(p,a,b){const i=p.order.indexOf(a),j=p.order.indexOf(b);if(i<0||j<0)return false;[p.order[i],p.order[j]]=[p.order[j],p.order[i]];p.boardChecked=false;return true;}
function toggle(list,id){const i=list.indexOf(id);if(i>=0)list.splice(i,1);else list.push(id);}
function apply(s,a){const id=a.caseId||s.current,c=D.cases[id],p=s.cases[id];if(!c||!p)return s;
 // Completed inference is a fixed record. A confirmed case reset starts a new attempt.
 if(p.solved&&CASE_EDIT_ACTIONS.has(a.type))return s;
 switch(a.type){
 case 'open':s.current=id;s.screen='desk';break;
 case 'home':s.screen='title';break;
 case 'tab':if(['inspect','build','report'].includes(a.tab))p.tab=a.tab;break;
 case 'evidence':if(c.evidence.some(e=>e.id===a.id)){p.selectedEvidence=a.id;if(!p.seen.includes(a.id))p.seen.push(a.id);}break;
 case 'swap':swap(p,a.a,a.b);break;
 case 'move':{const i=p.order.indexOf(a.id),j=i+a.direction;if(i>=0&&j>=0&&j<p.order.length)swap(p,a.id,p.order[j]);break;}
 case 'window':if(['last','missing'].includes(a.field)&&(a.id===''||c.events.some(e=>e.id===a.id))){p.window[a.field]=a.id;p.boardChecked=false;}break;
 case 'body':if(c.suspects.some(x=>x.id===a.id)&&['','bound','unknown'].includes(a.value)){p.body[a.id]=a.value;p.boardChecked=false;}break;
 case 'classify':if(c.classification&&Object.hasOwn(c.classification,a.id)&&(a.value===''||c.categories.some(x=>x.id===a.value))){p.classification[a.id]=a.value;p.boardChecked=false;}break;
 case 'trace':if(c.suspects.some(x=>x.id===a.id)){toggle(p.trace,a.id);p.boardChecked=false;}break;
 case 'report':if(a.field==='culprit')p.report.culprit=validPick(a.value,c.suspects.map(x=>x.id));if(a.field==='mechanism')p.report.mechanism=validPick(a.value,c.mechanisms.map(x=>x.id));break;
 case 'proof':if(['opportunity','trace'].includes(a.field)&&c.evidence.some(e=>e.id===a.id))toggle(p.report[a.field],a.id);break;
 case 'notes':p.notes=string(a.value,5000);break;
 case 'hint':p.hints=Math.min(5,p.hints+1);break;
 case 'checkBoard':p.boardChecked=checkBoard(s,id).ok;break;
 case 'submit':if(p.solved){s.screen='ending';break;}p.attempts++;if(checkConclusion(s,id).ok){p.solved=true;s.screen='ending';}break;
 case 'reset':s.cases[id]=newCase(id);if(id===s.current)s.screen='desk';break;
 case 'ending':if(p.solved)s.screen='ending';break;
 case 'epilogue':if(D.caseIds.every(x=>s.cases[x].solved))s.screen='epilogue';break;
 case 'sound':s.sound=!s.sound;break;
 case 'tutorial':s.tutorialSeen=true;break;
 }return s;
}
function serialize(s){return JSON.stringify(s);}
const api={SAVE_KEY,newState,newCase,normalizeSave,checkBoard,checkConclusion,sameSet,sameOrder,apply,serialize};
if(typeof module!=='undefined'&&module.exports)module.exports=api;root.MysteryEngine=api;
})(typeof globalThis!=='undefined'?globalThis:this);
