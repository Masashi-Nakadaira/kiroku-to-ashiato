(function(root){
'use strict';
const D=typeof module!=='undefined'&&module.exports?require('./data.js'):root.MysteryData;
const SAVE_KEY='record-and-body.mystery.v1';
const text=(x,n=5000)=>typeof x==='string'?x.slice(0,n):'';
const pick=(v,list)=>list.includes(v)?v:'';
function newCase(id){return {seen:[],location:'',selectedEvidence:'',tab:'inspect',answers:{},flags:[],deductions:{},openingSeen:false,notes:'',hints:0,attempts:0,solved:false};}
function newState(){return {version:D.version,screen:'title',current:'village',tutorialSeen:false,sound:false,revisionNotice:false,cases:Object.fromEntries(D.caseIds.map(id=>[id,newCase(id)]))};}
function available(c,p,e){return (e.requiresFlags||[]).every(f=>p.flags.includes(f))&& (e.requires||[]).every(id=>p.seen.includes(id))&&(!e.anyRequires?.length||e.anyRequires.some(id=>p.seen.includes(id)));}
function checkConclusion(s,id){const c=D.cases[id],p=s.cases[id];return {ok:!!c.clauses?.length&&c.clauses.every(q=>p.answers[q.id]===q.answer)&&(c.requiredFlags||[]).every(f=>p.flags.includes(f))&&(c.requiredEvidence||[]).every(e=>p.seen.includes(e))};}
function normalizeSave(input){const s=newState();if(!input||typeof input!=='object')return s;
 if([1,2].includes(input.version)&&input.version!==D.version){s.sound=input.sound===true;s.tutorialSeen=input.tutorialSeen===true;s.revisionNotice=true;for(const id of D.caseIds)s.cases[id].notes=text(input.cases?.[id]?.notes);return s;}
 if(input.version!==D.version)return s;
 s.current=pick(input.current,D.caseIds)||D.caseIds[0];s.screen=pick(input.screen,['title','desk','opening','ending','epilogue'])||'title';s.tutorialSeen=input.tutorialSeen===true;s.sound=input.sound===true;s.revisionNotice=input.revisionNotice===true;
 for(const id of D.caseIds){const c=D.cases[id],p=s.cases[id],q=input.cases?.[id];if(!q||typeof q!=='object')continue;
 const desired=Array.isArray(q.seen)?q.seen:[];
 // Restore only earned flags; never trust a saved flags array or claimed completion.
 for(const d of c.deductions||[]){const raw=q.deductions?.[d.id];p.deductions[d.id]={answers:{},attempts:Number.isInteger(raw?.attempts)?Math.max(0,Math.min(9999,raw.attempts)):0,solved:false};for(const cl of d.clauses)p.deductions[d.id].answers[cl.id]=pick(raw?.answers?.[cl.id],cl.options.map(o=>o.id));}
 let changed=true;while(changed){changed=false;for(const e of c.evidence)if(desired.includes(e.id)&&!p.seen.includes(e.id)&&available(c,p,e)){p.seen.push(e.id);changed=true;}
 for(const d of c.deductions||[])if(!p.deductions[d.id].solved&&q.deductions?.[d.id]?.solved===true&&deductionCorrect(c,p,d)){p.deductions[d.id].solved=true;if(!p.flags.includes(d.unlocksFlag))p.flags.push(d.unlocksFlag);changed=true;}}
 p.seen=[...new Set(desired.filter(id=>p.seen.includes(id)))];p.openingSeen=q.openingSeen===true;
 p.location=pick(q.location,(c.locations||[]).map(l=>l.id));p.selectedEvidence=pick(q.selectedEvidence,p.seen);p.tab=pick(q.tab,['inspect','build','report'])||'inspect';p.notes=text(q.notes);p.hints=Number.isInteger(q.hints)?Math.max(0,Math.min(5,q.hints)):0;p.attempts=Number.isInteger(q.attempts)?Math.max(0,Math.min(9999,q.attempts)):0;
 for(const clause of c.clauses||[])p.answers[clause.id]=pick(q.answers?.[clause.id],clause.options.map(o=>o.id));
 p.solved=q.solved===true&&checkConclusion(s,id).ok;
 }
 if(s.screen==='opening'&&!D.cases[s.current].opening?.length)s.screen='desk';
 if(s.screen==='ending'&&!s.cases[s.current].solved)s.screen='desk';if(s.screen==='epilogue'&&!D.caseIds.every(id=>s.cases[id].solved))s.screen='title';return s;
}
function deductionCorrect(c,p,d){return available(c,p,d)&&d.clauses.every(q=>p.deductions[d.id]?.answers[q.id]===q.answer);}
function apply(s,a){const id=a.caseId||s.current,c=D.cases[id],p=s.cases[id];if(!c||!p)return s;
 switch(a.type){
 case 'open':s.current=id;s.screen=c.opening?.length&&!p.openingSeen?'opening':'desk';break;
 case 'opening':if(c.opening?.length)s.screen='opening';break;
 case 'skip-opening':p.openingSeen=true;s.screen='desk';break;
 case 'home':s.screen='title';break;
 case 'tab':if(['inspect','build','report'].includes(a.tab))p.tab=a.tab;break;
 case 'location':if(c.locations?.some(l=>l.id===a.id&&available(c,p,l))){p.location=a.id;p.tab='inspect';}break;
 case 'discover':{const e=c.evidence.find(e=>e.id===a.id),l=c.locations?.find(l=>l.id===p.location);if(e&&l?.evidenceIds.includes(e.id)&&available(c,p,l)&&available(c,p,e)){if(!p.seen.includes(e.id))p.seen.push(e.id);p.selectedEvidence=e.id;}break;}
 case 'evidence':if(p.seen.includes(a.id))p.selectedEvidence=a.id;break;
 case 'answer':{if(p.solved)break;const q=c.clauses?.find(q=>q.id===a.id);if(q)p.answers[q.id]=pick(a.value,q.options.map(o=>o.id));break;}
 case 'deduction-answer':{const d=c.deductions?.find(d=>d.id===a.id);if(!d||!available(c,p,d)||p.solved)break;const q=d.clauses.find(q=>q.id===a.clause);if(!q)break;const r=p.deductions[d.id]||(p.deductions[d.id]={answers:{},attempts:0,solved:false});if(!r.solved)r.answers[q.id]=pick(a.value,q.options.map(o=>o.id));break;}
 case 'deduce':{const d=c.deductions?.find(d=>d.id===a.id);if(!d||!available(c,p,d)||p.solved)break;const r=p.deductions[d.id]||(p.deductions[d.id]={answers:{},attempts:0,solved:false});if(r.solved)break;r.attempts++;if(deductionCorrect(c,p,d)){r.solved=true;if(!p.flags.includes(d.unlocksFlag))p.flags.push(d.unlocksFlag);}break;}
 case 'notes':p.notes=text(a.value);break;
 case 'hint':p.hints=Math.min(5,p.hints+1);break;
 case 'submit':if(p.solved){s.screen='ending';break;}p.attempts++;if(checkConclusion(s,id).ok){p.solved=true;s.screen='ending';}break;
 case 'reset':s.cases[id]=newCase(id);s.screen='desk';break;
 case 'ending':if(p.solved){s.current=id;s.screen='ending';}break;
 case 'epilogue':if(D.caseIds.every(id=>s.cases[id].solved))s.screen='epilogue';break;
 case 'tutorial':s.tutorialSeen=true;break;
 case 'sound':s.sound=!s.sound;break;
 }return s;
}
const api={SAVE_KEY,newState,newCase,normalizeSave,available,deductionCorrect,checkConclusion,apply,serialize:JSON.stringify};
if(typeof module!=='undefined'&&module.exports)module.exports=api;root.MysteryEngine=api;
})(typeof globalThis!=='undefined'?globalThis:this);
