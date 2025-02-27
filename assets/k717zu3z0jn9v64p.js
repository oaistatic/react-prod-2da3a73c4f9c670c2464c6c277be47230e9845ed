import{c as q,j as c,ax as D,av as b,r as l}from"./izh0i1dfnf8ev7x1.js";import{d as A,cp as te,bk as ne,a3 as z,a4 as F,P,a as N,cA as se,q as oe,o as ae}from"./hggowi1ggrzb09yc.js";import{dy as v,dz as R,iy as ie,gt as re,hq as U,iz as le}from"./fc2hzad6rtrm7s5f.js";import{F as ce,s as ue}from"./eto0fc8nib9bl0nl.js";import{g as de}from"./n1qo72mbjnnjk2je.js";import{u as me}from"./bqaw7aag2c6iw58l.js";import"./ek903rju0zels0pm.js";import"./lb1py1igp6jzrtce.js";import"./8nxoaz0vb9p890un.js";import"./mesuhiy66f679pn3.js";import"./e1s5r4gk07bkoir1.js";import"./l2i0py62vkyv61za.js";import"./eobmiu9ep1nh2j45.js";import"./dxpde14qu5zfq5m7.js";import"./dzs9jsp7hkzpbuhr.js";import"./pcacsxfe3uxv1gro.js";import"./iemgi2z64e5uqrv4.js";import"./gueirrzkglxzsmw1.js";import"./c9avu4yfkjav9bdb.js";import"./nlrayamhrsyhya9q.js";import"./h1u1n503o4rqjlms.js";const L=24,W=16,w=12,fe=5e3,he=({isExpanded:e=!1,isExpandDisabled:o=!1,isComplete:t=!1,activeHeadline:i,finishedText:n,onToggleExpanded:d})=>{const a=q(),h=a.formatMessage({id:"/4+t6i",defaultMessage:"Reasoned"});n||=h;const r=t?n:!e&&i?i:a.formatMessage({id:"Guu3mD",defaultMessage:"Reasoning"});return c.jsxs("button",{disabled:o,onClick:d,className:"relative inline w-full text-start",children:[c.jsx(D,{mode:"popLayout",children:c.jsx(b.span,{className:A("align-middle",t?"text-token-text-primary":"loading-shimmer"),initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,overflow:"hidden",whiteSpace:"nowrap"},transition:{duration:.3},children:r},r)}),!o&&c.jsx(te,{className:A("icon-sm inline align-middle text-token-text-secondary transition-transform",e&&"rotate-90")})]})},pe="_markdown_1frq2_10",ge="_fade_1frq2_1",Ce={markdown:pe,fade:ge},xe=({children:e,onMeasure:o})=>{const[{height:t},i]=re();return ne(()=>{t&&o?.(t)},[t]),c.jsx("div",{className:"flex",ref:i,children:e})};var B=(e=>(e.STATIC="static",e.ENTER="enter",e.STAGE="stage",e))(B||{});const ke=({showStreamPreviewWhenCollapsed:e=!1,isAnimationComplete:o=!1,isExpanded:t=!1,isLast:i=!1,index:n,content:d,onClick:a,onMeasure:h,onAnimationComplete:r})=>{const x=i||t;let p="static",C="static";i&&!o?(p="enter",C="stage"):C="static";const k=l.useRef(null);k.current=()=>{r?.(n,"enter")},l.useEffect(()=>{if(p!=="enter")return;const u=setTimeout(()=>{v.count(R.COT_SUMMARIZER,"cot_chunk_timeout"),k.current?.()},fe);return()=>clearTimeout(u)},[p]);const f=p==="static";return c.jsx(b.div,{role:e&&!t?"button":void 0,variants:{static:{opacity:1,scale:1,position:"static",translateY:0},enter:{position:"static",translateY:0,scale:1,opacity:1},stage:{position:"absolute",translateY:-L,scale:.95,opacity:0}},initial:C,animate:p,exit:e&&!t?{opacity:0,pointerEvents:"none",position:"absolute",translateY:L,filter:"blur(8px)"}:void 0,style:{zIndex:n},transition:o||p==="static"?{duration:0}:{type:"spring",bounce:.05},className:A("top-0 origin-left text-token-text-secondary",!x&&"pointer-events-none"),onAnimationComplete:u=>u!=="enter"&&r(n,u),onClick:a,children:c.jsx(xe,{onMeasure:u=>{h(n,u*(C==="stage"?1/.95:1))},children:c.jsx(ie,{onComplete:k.current,isDisabled:f,defaultDelayPerSegmentMs:20,children:c.jsx(ce,{className:A(Ce.markdown,"text-token-text-secondary"),enableNewEntryAnimation:!0,enableWordByWordEntry:!0,children:d})})})})},Te=l.memo(ke);var M=(e=>(e.HEADLINE="headline",e.COT="CoT",e))(M||{});const _=e=>({key:e,type:"CoT",content:"",isComplete:!0}),ye=(e,o=!1)=>{const t=[],i=e.split(/( {2}\n)|(\n\n)/).filter(a=>a!=null&&a.trim());if(!o&&i.length<2)return t;let n=_(t.length),d=!1;for(let a=0;a<i.length;a++){const r=i[a].trim();if(r.toLowerCase()==="none"){v.count(R.COT_SUMMARIZER,"num_none_chunks");continue}const x=r.match(/^\*\*(.*)\*\*$/);if(x)n.content.trim()&&(n.isComplete=!0,t.push(n),n=_(t.length)),t.push({key:t.length,type:"headline",content:x[1]??"",isComplete:!0}),n=_(t.length);else if(r){if(r.startsWith("```"))if(!d)n.isComplete=!0,t.push(n),n=_(t.length),d=!0;else{n.content+=n.content?`
${r}`:r,n.isComplete=!0,t.push(n),n=_(t.length),d=!1;continue}n.content.trim()&&!r.startsWith("\\[")&&!r.startsWith("\\(")&&!d&&(n.isComplete=!0,t.push(n),n=_(t.length)),n.content+=n.content?`
${r}`:r,n.isComplete=!1}}return n.content.trim()&&(n.isComplete=o,t.push(n)),t},_e=(e,o)=>{const t=!o,i=l.useMemo(()=>ye(e,t),[e,t]);return l.useEffect(()=>{t&&v.hist(R.COT_SUMMARIZER,"num_cot_chunks",void 0,i.length)},[t]),{chunks:i,isComplete:t}},Z=({type:e,isComplete:o})=>e===M.HEADLINE&&o,Ee={duration:.3,ease:"easeInOut"},Me=({isStreaming:e=!1,showStreamPreviewWhenCollapsed:o=!1,expandByDefault:t=!1,finishedText:i,summaryText:n,onAnimationComplete:d})=>{const{chunks:a,isComplete:h}=_e(n,e),[r,x]=l.useState(()=>new Map),p=a.findLast(({type:s})=>s===M.COT)?.key??null,[C,k]=l.useState(()=>e?null:p),f=h&&C===p,[u,H]=l.useState(()=>{const s=z.getItem(F.ExpandSummarizedCoT);return e?s!=null?!!s:t:!1}),I=l.useCallback((s,m)=>{H(s),e&&z.setItem(F.ExpandSummarizedCoT,s),v.count(R.COT_SUMMARIZER,s?"expand":"collapse",[{key:"is_streaming",value:String(e)},{key:"source",value:m}]),P.logEventWithStatsig(s?N.chatgptCoTExpanded:N.chatgptCoTCollapsed,s?"chatgpt_cot_expanded":"chatgpt_cot_collapsed",{is_streaming:String(e),source:m})},[e]),T=l.useMemo(()=>{const s=[];for(let m=0;m<a.length;m++){const g=a[m];g.type===M.COT&&g.content&&g.isComplete&&s.push(m)}return s.find((m,g)=>C==null||m>C||g===s.length-1)??-1},[a,C]),G=l.useCallback((s,m)=>{x(g=>{const Y=new Map(g);return Y.set(s,m),Y})},[]),K=l.useCallback(()=>{I(!0,"chunk")},[I]),j=Array.from(r.values()),E=a.slice(0,T+1),$=(se(E,Z)??a.find(Z))?.content;let y=E.filter(s=>s.type===M.COT);o&&!u&&(y=y.slice(-1));const S=l.useRef(null);me(T);const O=()=>{if(S.current!=null){const s=performance.now()-S.current;v.hist(R.COT_SUMMARIZER,"cot_chunk_display_time",void 0,s)}};l.useEffect(()=>{if(f)return O();T!==-1&&(O(),S.current=performance.now())},[T]),l.useEffect(()=>{f||T<0||P.logEventWithStatsig(u?N.chatgptStreamedCoTChunkViewed:N.chatgptStreamedCoTChunkIgnored,u?"chatgpt_streamed_cot_chunk_viewed":"chatgpt_streamed_cot_chunk_ignored")},[T,f,u,e]);const V=l.useCallback((s,m)=>{m===B.ENTER&&(k(g=>g!=null?Math.max(g,s):s),h&&s===p&&d?.())},[h,p,d]);l.useEffect(()=>{if(h&&!f){H(!1),k(p),d?.();return}!h||!f||(!y.length||!u&&!o)&&d?.()},[h,f,y]);const X=E.length>0&&(!f&&o||u),J=ue(j)+(j.length-1)*W+2*w,Q=f?"auto":u?J:o?(oe(j)??0)+2*w:0,ee=E.length===0||!h&&o&&E.length<2;return c.jsxs(b.div,{className:"my-1 flex flex-col",children:[c.jsx(he,{activeHeadline:$,finishedText:i,onToggleExpanded:()=>I(!u,"header"),isExpanded:u,isExpandDisabled:ee,isComplete:f}),c.jsx(D,{children:X&&c.jsxs(b.div,{className:"relative z-0 whitespace-pre-wrap pl-4 md:pl-7",initial:f?{opacity:0,height:0,overflowY:"hidden"}:!1,animate:{opacity:1,height:Q},exit:{height:0,opacity:0,pointerEvents:"none",overflowY:"hidden",translateY:-L},transition:Ee,children:[c.jsx("div",{className:"absolute bottom-4 left-0 top-4 w-1 rounded-full bg-token-border-light"}),c.jsx("div",{className:"relative flex h-full flex-col",style:{gap:W,margin:`${w}px 0`},children:c.jsx(D,{children:y.map(({content:s,key:m},g)=>c.jsx(Te,{index:m,content:s,isLast:y.length-1===g,onClick:K,onAnimationComplete:V,onMeasure:G,isAnimationComplete:f,isExpanded:u,showStreamPreviewWhenCollapsed:o},m))})})]})})]})},Ge=({messages:e,isStreaming:o})=>{const t=q(),i=e.map(({message:a})=>ae(a)).join(`

`);l.useEffect(()=>{if(o)for(const{message:a}of e)U.addDelayedRenderingMessage(a.id)},[o,e]);const n=()=>{for(const{message:a}of e)U.removeDelayedRenderingMessage(a.id)},d=le();return c.jsx(Me,{showStreamPreviewWhenCollapsed:d?.showPreviewWhenCollapsed,expandByDefault:d?.expandByDefault,finishedText:de(t,e),summaryText:i,isStreaming:o,onAnimationComplete:n})};export{Me as CoT,Ge as CoTMessage};
//# sourceMappingURL=k717zu3z0jn9v64p.js.map
