(function(root){
'use strict';
const D=typeof module!=='undefined'&&module.exports?require('./data.js'):root.MysteryData;
const SAVE_KEY='record-and-body.mystery.v1';
const text=(x,n=5000)=>typeof x==='string'?x.slice(0,n):'';
const pick=(v,list)=>list.includes(v)?v:'';
function newCase(id){return {seen:[],location:'',selectedObject:'',selectedEvidence:'',tab:'inspect',answers:{},flags:[],deductions:{},actions:[],objectStates:{...(D.cases[id]?.initialObjectStates||{})},history:[],compare:{left:'',right:''},presentation:{person:'',topic:'',evidenceA:'',evidenceB:''},resolved:[],lastResult:null,openingSeen:false,notes:'',hints:0,attempts:0,solved:false};}
function newState(){return {version:D.version,screen:'title',current:'village',tutorialSeen:false,sound:false,revisionNotice:false,cases:Object.fromEntries(D.caseIds.map(id=>[id,newCase(id)]))};}
function available(c,p,e){return !!e&&Object.entries(e.requiresState||{}).every(([k,v])=>p.objectStates?.[k]===v)&&(e.requiresFlags||[]).every(f=>p.flags.includes(f))&&(e.requires||[]).every(id=>p.seen.includes(id))&&(!e.anyRequires?.length||e.anyRequires.some(id=>p.seen.includes(id)))&&(e.requiresActions||[]).every(id=>(p.actions||[]).includes(id))&&!(e.excludeActions||[]).some(id=>(p.actions||[]).includes(id));}
function checkConclusion(s,id){const c=D.cases[id],p=s.cases[id];if(c.interactionVersion===4)return {ok:!!c.incidents?.length&&c.incidents.every(i=>p.resolved.includes(i.id))};return {ok:!!c.clauses?.length&&c.clauses.every(q=>p.answers[q.id]===q.answer)&&(c.requiredFlags||[]).every(f=>p.flags.includes(f))&&(c.requiredEvidence||[]).every(e=>p.seen.includes(e))};}
function normalizeSave(input){const s=newState();if(!input||typeof input!=='object')return s;
 if(input.version===4&&D.version===5){const migrated=normalizeSave({...input,version:5,cases:{...input.cases,future:{...newCase('future'),notes:text(input.cases?.future?.notes)}}});migrated.revisionNotice=true;return migrated;}
 if([1,2,3].includes(input.version)&&input.version!==D.version){s.sound=input.sound===true;s.tutorialSeen=input.tutorialSeen===true;s.revisionNotice=true;for(const id of D.caseIds)s.cases[id].notes=text(input.cases?.[id]?.notes);return s;}
 if(input.version!==D.version)return s;
 s.current=pick(input.current,D.caseIds)||D.caseIds[0];s.screen=pick(input.screen,['title','desk','opening','ending','epilogue'])||'title';s.tutorialSeen=input.tutorialSeen===true;s.sound=input.sound===true;s.revisionNotice=input.revisionNotice===true;
 for(const id of D.caseIds){const c=D.cases[id],p=s.cases[id],q=input.cases?.[id];if(!q||typeof q!=='object')continue;
 if(c.interactionVersion===4){restoreInteractive(c,p,q);continue;}
 const desired=Array.isArray(q.seen)?q.seen:[];
 // Restore only earned flags; never trust a saved flags array or claimed completion.
 for(const d of c.deductions||[]){const raw=q.deductions?.[d.id];p.deductions[d.id]={answers:{},attempts:Number.isInteger(raw?.attempts)?Math.max(0,Math.min(9999,raw.attempts)):0,solved:false};for(const cl of d.clauses)p.deductions[d.id].answers[cl.id]=pick(raw?.answers?.[cl.id],cl.options.map(o=>o.id));}
 let changed=true;while(changed){changed=false;for(const e of c.evidence)if(desired.includes(e.id)&&!p.seen.includes(e.id)&&available(c,p,e)){p.seen.push(e.id);changed=true;}
 for(const d of c.deductions||[])if(!p.deductions[d.id].solved&&q.deductions?.[d.id]?.solved===true&&deductionCorrect(c,p,d)){p.deductions[d.id].solved=true;if(!p.flags.includes(d.unlocksFlag))p.flags.push(d.unlocksFlag);changed=true;}}
 p.seen=[...new Set(desired.filter(id=>p.seen.includes(id)))];p.openingSeen=q.openingSeen===true;
 p.location=pick(q.location,(c.locations||[]).map(l=>l.id));p.selectedEvidence=pick(q.selectedEvidence,p.seen);p.tab=pick(q.tab,['inspect','build','report','reconstruct'])||'inspect';p.notes=text(q.notes);p.hints=Number.isInteger(q.hints)?Math.max(0,Math.min(5,q.hints)):0;p.attempts=Number.isInteger(q.attempts)?Math.max(0,Math.min(9999,q.attempts)):0;
 for(const clause of c.clauses||[])p.answers[clause.id]=pick(q.answers?.[clause.id],clause.options.map(o=>o.id));
 p.solved=q.solved===true&&checkConclusion(s,id).ok;
 }
 if(s.screen==='opening'&&!D.cases[s.current].opening?.length)s.screen='desk';
 if(s.screen==='ending'&&!s.cases[s.current].solved&&!s.cases[s.current].resolved?.length)s.screen='desk';if(s.screen==='epilogue'&&!D.caseIds.every(id=>s.cases[id].solved))s.screen='title';return s;
}

// Player-made actions, comparisons and presentations are the sole sources of v4 facts.
function addFacts(c,p,source){
 const gained=[];
 for(const id of source.evidence||[])if(c.evidence.some(e=>e.id===id)&&!p.seen.includes(id)){p.seen.push(id);gained.push(id);}
 if((source.evidence||[]).length)p.selectedEvidence=source.evidence[source.evidence.length-1];
 for(const flag of source.setsFlags||[])if(!p.flags.includes(flag))p.flags.push(flag);
 for(const id of source.resolves||[])if(c.incidents.some(i=>i.id===id)&&!p.resolved.includes(id))p.resolved.push(id);
 p.solved=!!c.incidents?.length&&c.incidents.every(i=>p.resolved.includes(i.id));
 return gained;
}
function remember(p,event,repeated=false){const key=JSON.stringify(event);if(repeated?JSON.stringify(p.history[p.history.length-1])!==key:!p.history.some(e=>JSON.stringify(e)===key))p.history.push(event);}
function outcome(c,p,source,fallback){const ids=source.evidence||[],visual=(source.visuals||[]).filter(v=>available(c,p,v)).at(-1)||source;p.lastResult={title:source.title||fallback,body:source.result||[],evidence:ids,image:visual.image||'',imageAlt:visual.imageAlt||'',outcome:source.resolves?.length?'resolved':'observation'};}
function performAction(c,p,item,record=true){
 if(c.interactionVersion!==4||!available(c,p,item))return false;
 if(!p.actions.includes(item.id))p.actions.push(item.id);
 Object.assign(p.objectStates,item.setsState||{});addFacts(c,p,item);outcome(c,p,item,'調べたこと');
 if(record)remember(p,{type:'interact',id:item.id},!!item.setsState);return true;
}
function performComparison(c,p,left,right,record=true){
 if(c.interactionVersion!==4)return false;
 if(!left||!right||left===right||![left,right].every(id=>p.seen.includes(id))){p.lastResult={title:'二つの資料を選ぶ',body:['手元にある、異なる二つの資料を選んでください。'],evidence:[]};return false;}
 const rule=(c.comparisons||[]).find(r=>available(c,p,r)&&r.pair.length===2&&r.pair.includes(left)&&r.pair.includes(right));
 if(!rule){p.lastResult={title:'並べて確かめた',body:['二つの記録を並べた。'],evidence:[]};return false;}
 addFacts(c,p,rule);outcome(c,p,rule,'照合したこと');if(record)remember(p,{type:'compare',left,right},true);return true;
}
function performPresentation(c,p,selection,record=true){
 if(c.interactionVersion!==4)return false;
 const person=c.suspects.find(x=>x.id===selection.person),topic=(c.topics||[]).find(x=>x.id===selection.topic&&available(c,p,x));
 if(!person||!topic){p.lastResult={title:'相手と質問を選ぶ',body:['誰に、何を確かめたいかを選んでください。資料はまだなくても話せます。'],evidence:[]};return false;}
 const selected=[...new Set([selection.evidenceA,selection.evidenceB].filter(id=>id&&p.seen.includes(id)))];
 const rules=(c.responses||[]).filter(r=>r.person===person.id&&(r.topic===topic.id||r.topic==='*')&&available(c,p,r)&&(r.selectedAll||[]).every(id=>selected.includes(id))&&(!r.selectedAnyOf?.length||r.selectedAnyOf.some(group=>group.every(id=>selected.includes(id))))&&(!r.withoutEvidence||selected.length===0));
 const rule=rules.sort((a,b)=>(b.priority||0)-(a.priority||0))[0];
 p.attempts++;
 if(rule){addFacts(c,p,rule);outcome(c,p,rule,person.name+'に確かめた');if(record)remember(p,{type:'present',person:person.id,topic:topic.id,evidenceA:selected[0]||'',evidenceB:selected[1]||''},true);return true;}
 const fallback=c.fallbackResponses?.[person.id]?.[topic.id]||c.fallbackResponses?.[person.id]?.default||'「どの出来事について、何を確かめたいのか、もう少し具体的に聞かせてほしい」';
 p.lastResult={title:person.name+'の返答',body:[fallback],evidence:[]};return false;
}
function restoreInteractive(c,p,q){
 // Reconstruct progression from legal player choices, never saved flags or a claimed solved status.
 for(const event of Array.isArray(q.history)?q.history.slice(0,20000):[]){
  if(!event||typeof event!=='object')continue;
  if(event.type==='interact'){const item=c.actions.find(x=>x.id===event.id);if(item){const o=c.objects.find(x=>x.id===item.object),l=c.locations.find(x=>x.id===o?.location);if(o&&l&&available(c,p,o)&&available(c,p,l))performAction(c,p,item);}}
  else if(event.type==='compare')performComparison(c,p,event.left,event.right);
  else if(event.type==='present')performPresentation(c,p,event);
  else if(event.type==='reconstruct')performReconstruction(c,p,event.answers,true,event.formId||'sequence');
 }
 p.location=pick(q.location,c.locations.filter(l=>available(c,p,l)).map(l=>l.id));
 p.selectedObject=pick(q.selectedObject,c.objects.filter(o=>o.location===p.location&&available(c,p,o)).map(o=>o.id));
 p.selectedEvidence=pick(q.selectedEvidence,p.seen);p.tab=pick(q.tab,['inspect','build','report','reconstruct'])||'inspect';
 p.openingSeen=q.openingSeen===true;p.notes=text(q.notes);p.hints=Number.isInteger(q.hints)?Math.max(0,Math.min(5,q.hints)):0;
 p.attempts=Number.isInteger(q.attempts)?Math.max(p.attempts,Math.min(9999,q.attempts)):p.attempts;
 for(const field of ['left','right'])p.compare[field]=pick(q.compare?.[field],p.seen);
 const choices={person:c.suspects.map(x=>x.id),topic:(c.topics||[]).filter(x=>available(c,p,x)).map(x=>x.id),evidenceA:p.seen,evidenceB:p.seen};
 for(const field of Object.keys(choices))p.presentation[field]=pick(q.presentation?.[field],choices[field]);
 for(const qn of [c.transferReconstruction,c.reconstruction].filter(Boolean).flatMap(r=>r.clauses||[]))p.answers[qn.id]=pick(q.answers?.[qn.id],qn.options.map(o=>o.id));
 p.lastResult=null;
}
function reconstructionDefinition(c,formId='sequence'){return formId==='transfer'?c.transferReconstruction:c.reconstruction;}
function reconstructionReady(c,p,formId='sequence'){const r=reconstructionDefinition(c,formId);return !!r&&available(c,p,r);}
function reconstructionCorrect(c,p,formId='sequence'){const r=reconstructionDefinition(c,formId);return reconstructionReady(c,p,formId)&&(r.clauses||[]).every(q=>available(c,p,q)&&p.answers[q.id]===q.answer);}
function performReconstruction(c,p,answers,record=true,formId='sequence'){
 const r=reconstructionDefinition(c,formId);if(!r)return false;
 for(const q of r.clauses||[])p.answers[q.id]=pick(answers?.[q.id],q.options.map(o=>o.id));
 if(!reconstructionCorrect(c,p,formId))return false;
 addFacts(c,p,r);outcome(c,p,r,'説明を記録した');
 if(record)remember(p,{type:'reconstruct',formId,answers:{...p.answers}},true);return true;
}
function endingParagraphs(c,p){if(c.interactionVersion!==4)return c.ending?.paragraphs||[];return (c.endingSegments||[]).filter(e=>available(c,p,e)&&(!e.resolved||p.resolved.includes(e.resolved))).map(e=>e.text);}

function deductionCorrect(c,p,d){return available(c,p,d)&&d.clauses.every(q=>p.deductions[d.id]?.answers[q.id]===q.answer);}
function apply(s,a){const id=a.caseId||s.current,c=D.cases[id],p=s.cases[id];if(!c||!p)return s;
 switch(a.type){
 case 'open':s.current=id;s.screen=c.opening?.length&&!p.openingSeen?'opening':'desk';break;
 case 'opening':if(c.opening?.length)s.screen='opening';break;
 case 'skip-opening':p.openingSeen=true;s.screen='desk';break;
 case 'home':s.screen='title';break;
 case 'tab':if(['inspect','build','report','reconstruct'].includes(a.tab))p.tab=a.tab;break;
 case 'location':if(c.locations?.some(l=>l.id===a.id&&available(c,p,l))){p.location=a.id;p.selectedObject='';p.lastResult=null;p.tab='inspect';}break;
 case 'object':{const o=c.objects?.find(o=>o.id===a.id&&o.location===p.location);if(o&&available(c,p,o)){p.selectedObject=o.id;p.lastResult=null;}break;}
 case 'interact':{const item=c.actions?.find(x=>x.id===a.id),o=c.objects?.find(o=>o.id===p.selectedObject);if(item&&o&&item.object===o.id&&o.location===p.location&&available(c,p,o))performAction(c,p,item);break;}
 case 'compare-select':if(['left','right'].includes(a.field))p.compare[a.field]=pick(a.value,p.seen);break;
 case 'compare':performComparison(c,p,p.compare.left,p.compare.right);break;
 case 'presentation-select':{const choices={person:(c.suspects||[]).map(x=>x.id),topic:(c.topics||[]).filter(x=>available(c,p,x)).map(x=>x.id),evidenceA:p.seen,evidenceB:p.seen};if(choices[a.field])p.presentation[a.field]=pick(a.value,choices[a.field]);break;}
 case 'present':performPresentation(c,p,p.presentation);break;
 case 'discover':{if(c.interactionVersion===4)break;const e=c.evidence.find(e=>e.id===a.id),l=c.locations?.find(l=>l.id===p.location);if(e&&l?.evidenceIds.includes(e.id)&&available(c,p,l)&&available(c,p,e)){if(!p.seen.includes(e.id))p.seen.push(e.id);p.selectedEvidence=e.id;}break;}
 case 'evidence':if(p.seen.includes(a.id))p.selectedEvidence=a.id;break;
 case 'answer':{if(p.solved)break;const form=[['transfer',c.transferReconstruction],['sequence',c.reconstruction]].find(([id,r])=>r?.clauses.some(q=>q.id===a.id));const q=(form?.[1]?.clauses||c.clauses||[]).find(q=>q.id===a.id);if(q&&(!form||(reconstructionReady(c,p,form[0])&&!p.resolved.includes(form[0]))))p.answers[q.id]=pick(a.value,q.options.map(o=>o.id));break;}
 case 'deduction-answer':{const d=c.deductions?.find(d=>d.id===a.id);if(!d||!available(c,p,d)||p.solved)break;const q=d.clauses.find(q=>q.id===a.clause);if(!q)break;const r=p.deductions[d.id]||(p.deductions[d.id]={answers:{},attempts:0,solved:false});if(!r.solved)r.answers[q.id]=pick(a.value,q.options.map(o=>o.id));break;}
 case 'deduce':{const d=c.deductions?.find(d=>d.id===a.id);if(!d||!available(c,p,d)||p.solved)break;const r=p.deductions[d.id]||(p.deductions[d.id]={answers:{},attempts:0,solved:false});if(r.solved)break;r.attempts++;if(deductionCorrect(c,p,d)){r.solved=true;if(!p.flags.includes(d.unlocksFlag))p.flags.push(d.unlocksFlag);}break;}
 case 'notes':p.notes=text(a.value);break;
 case 'hint':p.hints=Math.min(5,p.hints+1);break;
 case 'submit':if(c.reconstruction){p.attempts++;if(performReconstruction(c,p,p.answers,true,a.formId||'sequence'))s.screen='ending';break;}if(p.solved){s.screen='ending';break;}p.attempts++;if(checkConclusion(s,id).ok){p.solved=true;s.screen='ending';}break;
 case 'reset':s.cases[id]=newCase(id);s.screen='desk';break;
 case 'ending':if(p.solved||p.resolved?.length){s.current=id;s.screen='ending';}break;
 case 'epilogue':if(D.caseIds.every(id=>s.cases[id].solved))s.screen='epilogue';break;
 case 'tutorial':s.tutorialSeen=true;break;
 case 'sound':s.sound=!s.sound;break;
 }return s;
}
const api={endingParagraphs,reconstructionReady,reconstructionCorrect,SAVE_KEY,newState,newCase,normalizeSave,available,deductionCorrect,checkConclusion,apply,serialize:JSON.stringify};
if(typeof module!=='undefined'&&module.exports)module.exports=api;root.MysteryEngine=api;
})(typeof globalThis!=='undefined'?globalThis:this);
