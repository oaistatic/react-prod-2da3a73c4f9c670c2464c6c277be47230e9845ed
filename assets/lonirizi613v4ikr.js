import{r as h,j as e,c as O,M as x,v as re,L as Ie}from"./izh0i1dfnf8ev7x1.js";import{gD as Fe,f6 as A,bL as c,iZ as Pe,i_ as U,i$ as Te,j0 as ae,j1 as Me,j2 as L,j3 as ie,j4 as le,iH as E,j5 as De,iG as ce,j6 as Ee,eT as _e,j7 as Oe,iF as Ae,iD as Ue,iE as Le,j8 as te,eU as Be,j9 as G,ja as Re,jb as z,ce as Ge,jc as ze,jd as He,je as Z,jf as Xe,m as Ze,jg as $e,ek as Ke,ej as Qe,jh as Ve,ji as Ye,jj as de,jk as qe,jl as We,jm as Je,fa as ue,dm as et,an as tt,ap as st,jn as nt,d as ot,jo as se,jp as rt,jq as at}from"./fc2hzad6rtrm7s5f.js";import{g as it,D as H,P as lt}from"./ntdjjw6s1dl31tgb.js";import{G as ct}from"./paq1bye12yp7s2hg.js";import{d as S,cj as me,br as B,au as dt,gK as ut,E as $,bj as _,bh as xe,bx as X,ak as mt,P as K,a as Q,bB as xt,e4 as fe,cS as ft,bY as ht,ca as pt,cs as gt,V as jt,fC as vt}from"./hggowi1ggrzb09yc.js";import{S as yt}from"./nlrayamhrsyhya9q.js";import{F as bt}from"./fpc3fdcd67mn2gbu.js";import{f as St}from"./m89x2zftpo6hrypr.js";import{G as Ct}from"./ddzilicy6qtleo90.js";import"./lb1py1igp6jzrtce.js";import"./8nxoaz0vb9p890un.js";import"./c0dr65ykcqmn5jn4.js";import"./jr1b41w4nuv00isi.js";import"./j7xrr4x8o3ssozmz.js";import"./in3ze5ugryldzaj2.js";import"./ab6tyx2xygyb56l3.js";import"./h28ootcilxet47c8.js";import"./bluopupp3hty4d7q.js";import"./ca7lq2gyndiywe6g.js";import"./c9avu4yfkjav9bdb.js";const Nt=[null,"#F14D42","#E36E30","#B98618","#DB9F1E","#3DCB40","#30A633","#27C0A6","#16B7DB","#6490F0","#0088FF","#1D53BF","#512AEB","#875BE1","#EE4D83","#E659C2"];function kt({color:t,active:s,onClick:n}){const o=O();return e.jsx("button",{onClick:()=>n(t),className:"flex h-10 w-10 items-center justify-center rounded-full bg-token-text-primary can-hover:hover:scale-110 can-hover:active:scale-100","aria-label":t??o.formatMessage(c.defaultColor),style:{backgroundColor:t??void 0},children:s&&e.jsx(Pe,{className:"h-6 w-6 text-token-main-surface-primary"})})}function wt({currentTheme:t,onSelect:s}){return e.jsx("div",{className:"m-4 grid grid-cols-4 gap-4",children:Nt.map(n=>e.jsx(kt,{active:n===t,color:n,onClick:o=>{s(o)}},n))})}const It=({currentTheme:t,isPopoverOpen:s,disabled:n,...o},a)=>e.jsxs("button",{ref:a,disabled:n,...o,className:S("group relative flex h-[60px] w-[60px] items-center justify-center",n&&"pointer-events-none"),children:[e.jsx("div",{className:S("absolute flex h-full w-full items-center justify-center rounded-full",t&&"opacity-10",!t&&"bg-token-main-surface-secondary"),style:{backgroundColor:t??void 0}}),e.jsx("div",{className:"relative flex h-full w-full items-center justify-center",children:e.jsx(Fe,{className:S("icon-lg duration-200 ease-out can-hover:group-hover:scale-110",n&&"text-token-text-tertiary"),style:{color:t}})}),e.jsx("div",{className:S("absolute bottom-0 right-0 flex h-6 w-6 scale-0 items-center justify-center rounded-full border border-token-border-light bg-token-main-surface-primary text-token-text-secondary opacity-0 drop-shadow-sm duration-200 ease-out group-hover:scale-100 group-hover:opacity-100",s&&"scale-100"),children:e.jsx(A,{className:"h-[18px] w-[18px] rounded-full text-token-text-secondary"})})]}),he=h.forwardRef(It);function V({file:t,fileName:s,fileId:n,gizmoId:o}){const a=U(s)&&n!=null,r=Te(t&&ae(t)?t:null,s,n,o,void 0);return a?e.jsx("div",{className:"flex h-full w-full items-center justify-center bg-[#129FBF] bg-cover bg-center text-white",style:{backgroundImage:`url(${r})`},children:!r&&e.jsx(Me,{className:"icon-lg"})}):null}function Ft({gizmoId:t,gizmoName:s,pendingFiles:n,files:o,modelCapacityUsed:a,interpreterOnlyFileIds:r,onAddFiles:d,removePendingFile:i,pendingFileUpsertMutationsRef:l}){return n.length===0&&o.length===0?e.jsx("div",{className:"h-full pb-6",children:e.jsx(Dt,{gizmoName:s,onAddFiles:d})}):e.jsx("div",{className:"pb-6",children:e.jsx(Pt,{gizmoId:t,modelCapacityUsed:a,files:o,pendingFiles:n,interpreterOnlyFileIds:r,removePendingFile:i,pendingFileUpsertMutationsRef:l})})}function Pt({gizmoId:t,modelCapacityUsed:s,files:n,pendingFiles:o,interpreterOnlyFileIds:a,removePendingFile:r,pendingFileUpsertMutationsRef:d}){const i=L();return n.length===0&&o.length===0?null:e.jsxs("div",{className:"overflow-hidden rounded-lg border border-token-border-light",children:[s&&s>1?e.jsxs("div",{className:"border-b border-token-border-light bg-gray-50 px-4 py-3 text-xs text-token-text-secondary dark:bg-gray-750",children:[e.jsx("div",{className:"font-medium",children:e.jsx(x,{...c.tooManyFilesTitle})}),e.jsx("div",{children:e.jsx(x,{...c.tooManyFilesDescription})})]}):null,n.map(l=>e.jsx(Mt,{gizmoId:t,gizmoFile:l,interpreterOnly:a.includes(l.file_id),onDelete:async()=>{const p=new Promise(f=>{d.current.push({id:t,mutationId:re(),update:j=>{const m=j.files.filter(v=>v.file_id!==l.file_id);return{...j,files:m}},onSuccess:f})});return ie(t)({gizmoId:t,upsertProjectMutation:i,pendingFileUpsertMutationsRef:d}),p}},l.file_id)),o.map(l=>e.jsx(Tt,{interpreterOnly:a.includes(l.tempId),pendingFile:l,onDelete:async()=>r(l.tempId)},l.tempId))]})}function pe(){return e.jsx("div",{className:"truncate",children:e.jsx(x,{...c.interpreterOnlyLabel})})}function Tt({pendingFile:t,onDelete:s,interpreterOnly:n}){const o=t.file.name,r=(ae(t.file)&&t.file?.type.startsWith("image/")||U(o))&&e.jsx(V,{file:t.file,fileName:o,fileId:t.fileId??void 0,gizmoId:t.gizmoId??void 0});return e.jsx(ge,{interpreterOnly:n,onDelete:s,children:e.jsx(le,{icon:r,fileName:t.file.name,loadingPercentage:t.status===E.Uploading?t.progress:void 0,customFileDescription:n?e.jsx(pe,{}):void 0})})}function Mt({gizmoFile:t,gizmoId:s,interpreterOnly:n,onDelete:o}){const a=t.name,d=U(a)&&t.file_id!=null&&e.jsx(V,{fileName:a,fileId:t.file_id,gizmoId:s});return e.jsx(ge,{interpreterOnly:n,onDelete:o,children:e.jsx(le,{icon:d,fileName:t.name,customFileDescription:n?e.jsx(pe,{}):void 0})})}function ge({children:t,onDelete:s,interpreterOnly:n}){const[o,a]=h.useState(!1);return e.jsxs("div",{className:S("group flex w-full justify-between border-b border-token-border-light p-3 text-sm last:border-b-0",n&&"grayscale"),children:[e.jsx("div",{className:"w-10/12 can-hover:w-full can-hover:group-hover:w-11/12",children:t}),e.jsx("div",{className:S("flex shrink-0 grow-0 bg-token-main-surface-primary pl-1 can-hover:group-hover:flex",!o&&"can-hover:hidden"),children:o?e.jsx("div",{className:"flex h-full w-6 items-center justify-center",children:e.jsx(me,{})}):e.jsx("button",{onClick:async()=>{s&&(a(!0),await s(),a(!1))},children:e.jsx(De,{className:"text-token-secondary rounded-full hover:bg-token-main-surface-secondary dark:hover:bg-token-main-surface-tertiary"})})})]})}function Dt({gizmoName:t,onAddFiles:s}){return e.jsx("div",{className:"flex h-full cursor-pointer items-center justify-center rounded-lg border border-token-border-light px-4 py-3 pb-6 active:bg-token-main-surface-tertiary",onClick:s,children:e.jsxs("div",{className:"flex flex-col items-center gap-2 py-4 text-sm text-token-text-secondary",children:[e.jsx(ce,{}),e.jsx("div",{className:"text-center",children:e.jsx("div",{className:"max-w-100 text-token-text-secondary",children:e.jsx(x,{...c.emptyFileInstructions,values:{gizmoNameText:e.jsx("span",{className:"font-bold",children:e.jsx(x,{...c.emptyFileGizmoName,values:{gizmoName:t}})},"gizmoNameText")}})})})]})})}const je=B.div`text-sm text-red-500`,Et=B.textarea`w-full overflow-y-auto overflow-x-clip rounded-lg border px-3 py-2 focus:ring-2 focus:ring-token-text-primary border-token-border-medium bg-token-main-surface-primary`,D=20;function ve({onClose:t,gizmo:s}){const n=O(),[o,a]=h.useState(s?.gizmo?.instructions||""),r=L(),d=$(),i=[];o?.length>G&&i.push(n.formatMessage(c.instructionsTooLong,{length:G}));const l=m=>{a(m.target.value)},p=()=>{t()},u=async()=>{try{await r.mutateAsync({update:{instructions:o??""},id:s.gizmo.id}),t()}catch(m){const v=fe(m);d.danger(v??"Error",{duration:2})}},f=e.jsx(_.Button,{title:n.formatMessage(c.save),color:"primary",onClick:u,loading:r.isPending,disabled:i.length>0}),j=e.jsx(_.Button,{title:n.formatMessage(c.cancel),color:"secondary",onClick:p,disabled:r.isPending});return e.jsx(xe,{className:"min-h-[50dvh] max-w-[820px]",isOpen:!0,showCloseButton:!r.isPending,hideSeparator:!0,noPadding:!0,size:"custom",type:"success",title:e.jsx("div",{className:"h-8",children:n.formatMessage(c.editCustomInstructionsTitle)}),onClose:()=>{r.isPending||t()},children:e.jsxs("div",{className:"flex h-full flex-col px-6 pb-7 pt-0",children:[e.jsx("div",{className:"text-sm font-medium",children:n.formatMessage(c.editCustomInstructionsSubtitle)}),e.jsx("div",{className:"text-sm text-token-text-secondary",children:n.formatMessage(c.editCustomInstructionsDescription)}),e.jsx(Et,{autoFocus:!0,placeholder:n.formatMessage(c.projectInstructionsPlaceholder),className:"mb-1 mt-4 min-h-24 w-full flex-grow resize-none rounded-md bg-token-main-surface-primary",onChange:l,value:o,disabled:r.isPending}),i.map(m=>e.jsx(je,{className:"mt-1",children:m},m)),e.jsx(_.Actions,{primaryButton:f,secondaryButton:j})]})})}function _t({gizmoId:t,gizmoName:s,gizmoEditorData:n,openFileDialog:o,pendingFiles:a,setVersion:r,pendingFileUpsertMutationsRef:d,currentModelConfig:i}){const l=n?.files?.reduce((g,N)=>g+(N.file_size_tokens??0),0)??0,p=n?.contextStuffingBudget;let u;p&&(u=l/p,l>0&&u<.01&&(u=.01));const f=n?.files??[],j=Array.from(a.current.values()).filter(g=>f.every(N=>N.file_id!==g.fileId)),m=j.filter(g=>i!=null&&z(i,g.file.type,g.file.name)===X.CodeInterpreter),v=f.filter(g=>i!=null&&g.type!=null&&z(i,g.type,g.name)===X.CodeInterpreter),y=[...m.map(g=>g.tempId),...v.map(g=>g.file_id)];return e.jsx(Ft,{gizmoId:t,gizmoName:s,pendingFiles:j,pendingFileUpsertMutationsRef:d,files:f,modelCapacityUsed:u,interpreterOnlyFileIds:y,onAddFiles:o,removePendingFile:g=>{a.current.delete(g),r(N=>N+1)}})}const Ot=h.forwardRef(function({gizmo:s,showInstructions:n=!0},o){const a=O(),[r,d]=h.useState(!1),i=L(),l=Ee(s),p=_e(l),{data:u}=dt(),f=u?.models.get(ut)??(u&&St(u.models.values(),w=>w.tags.includes(mt.GPT_4o))),j=$(),[m,v]=h.useState(0),y=h.useRef(new Map),g=h.useRef([]),N=Oe(f,void 0),ye=w=>{w.some(({errors:I})=>I.length!==1||I[0]?.code!==te.TooManyFiles)?j.danger(a.formatMessage(c.unknownError),{duration:2}):j.danger(a.formatMessage(c.dragTooManyFilesError,{MAX_FILES_PER_PROJECT:D}),{duration:2})},be=async w=>{K.logEvent(Q.uploadFile,{client:"web",eventSource:"mouse",intent:"gizmo"});const I=l.id;w.length>0&&await Promise.all(w.map(F=>{const R=Ge(F);y.current.set(R,{tempId:R,gizmoId:I,file:F,status:E.Uploading,progress:1,fileId:null,cdnUrl:null}),ze(R,F,a,j,{kind:xt.Gizmo,gizmoId:I},{onFileUploaded:async(b,k,T,P)=>{const C=y.current.get(b);C?.fileId&&C?.fileId&&(g.current.push({id:s.gizmo.id,mutationId:re(),update:M=>{if(!C.fileId)return M;const we=[...M.files??[],{file_id:C.fileId,name:C.file.name,size:C.file.size,type:P?.mimeType??He(C.file),last_modified:C.file.lastModified,file_size_tokens:P?.fileTokenSize}];return{...M,files:we}},onSuccess:()=>{y.current.delete(b),v(M=>M+1)}}),ie(s.gizmo.id)({gizmoId:s.gizmo.id,upsertProjectMutation:i,pendingFileUpsertMutationsRef:g}))},onFileCreated:(b,k,T)=>{y.current.set(b,{tempId:b,gizmoId:I,file:F,status:E.Uploading,progress:1,...y.current.get(b),fileId:k,cdnUrl:T}),v(P=>P+1)},onFileUploadProgress:(b,k)=>{const T=y.current.get(b);T?.status===E.Uploading&&y.current.set(b,{...T,progress:k>95?95:k}),v(P=>P+1)},onError:b=>{y.current.delete(b),v(k=>k+1)}},{usesRetrievalIndex:f!=null&&z(f,F.type,F.name)===X.Retrieval})}))},q=Ae(N),W=it(q),J=y.current.size+l.files.length,{open:ee,getInputProps:Se,getRootProps:Ce,isDragAccept:Ne,isDragReject:ke}=Ue({noClick:!0,noDragEventsBubbling:!0,onDropAccepted:be,onDropRejected:ye,multiple:!0,maxSize:Le,maxFiles:D-J,validator:()=>J>=D?{code:te.TooManyFiles,message:"Too many files"}:null,...q});return h.useImperativeHandle(o,()=>({openFileDialog:ee})),e.jsxs("div",{...Ce({className:"h-full px-6"}),children:[e.jsx("input",{...Se()}),n&&e.jsxs(bt,{children:[e.jsx("button",{className:"w-full",onClick:()=>d(!0),children:e.jsx("div",{className:"w-full rounded-lg border border-token-border-light text-left text-sm",children:l?.instructions?.length?e.jsx("div",{className:"mx-4 my-3 line-clamp-4",children:l.instructions}):e.jsxs("div",{className:"flex h-full w-full items-center px-4 py-3 text-token-text-secondary",children:[e.jsx("div",{className:"flex-1",children:e.jsx(x,{...c.addCustomInstructions})}),e.jsx(A,{className:"icon-sm"})]})})}),p.includes(Be.GizmoInstructionsTooLong)?e.jsx(je,{className:"mt-1",children:e.jsx(x,{...c.instructionsTooLong,values:{length:G}})}):null]}),r&&e.jsx(ve,{gizmo:s,onClose:()=>{d(!1)}}),e.jsx(_t,{gizmoId:s.gizmo.id,gizmoName:s.gizmo.display.name,gizmoEditorData:l,openFileDialog:ee,pendingFiles:y,pendingFileUpsertMutationsRef:g,setVersion:v,currentModelConfig:f}),Ne&&e.jsxs(H,{children:[e.jsx(Re,{}),e.jsx("h3",{children:e.jsx(x,{...c.dragInstructions})}),e.jsx("h4",{className:"w-2/3 text-center",children:W.length>0?W.join(", "):e.jsx(x,{...c.dragAllAccepted})})]}),ke&&e.jsxs(H,{children:[e.jsx(yt,{className:"icon-2xl"}),e.jsx("h3",{children:e.jsx(x,{...c.dragTooManyFiles})}),e.jsx("h4",{className:"w-2/3 text-center",children:e.jsx(x,{...c.dragTooManyFilesDescription,values:{MAX_FILES_PER_PROJECT:D}})})]})]})});function At({gizmo:t,onClose:s}){const n=h.useRef(null),o=h.useCallback(()=>{n.current?.openFileDialog()},[n]);return e.jsx(e.Fragment,{children:e.jsx(xe,{className:"min-h-72 max-w-[820px]",isOpen:!0,showCloseButton:!0,hideSeparator:!0,noPadding:!0,size:"custom",type:"success",onClose:()=>{s()},children:e.jsxs("div",{className:"flex h-full flex-col",children:[e.jsx(_.TitleBar,{$hasSeparator:!1,children:e.jsxs("div",{className:"flex w-full items-center gap-2",children:[e.jsx("div",{className:"flex-1",children:e.jsx(ft,{className:"text-lg font-semibold leading-6 text-token-text-primary",children:e.jsx(x,{...c.projectFilesModalTitle})})}),e.jsx(ht,{color:"secondary",onClick:o,children:e.jsx(x,{...c.addFilesButtonLabel})}),e.jsx(pt,{asChild:!0,className:"sm:mt-0",children:e.jsx(gt,{onClick:s})})]})}),e.jsx("div",{className:"h-[50dvh] flex-grow overflow-y-auto pt-0",children:e.jsx(Ot,{ref:n,gizmo:t,showInstructions:!1})})]})})})}function Ut({gizmo:t}){return e.jsx("div",{className:"mt-6 grid grid-cols-1 items-start gap-5 xs:grid-cols-2",children:t?e.jsxs(e.Fragment,{children:[e.jsx(Lt,{gizmo:t}),e.jsx(Rt,{gizmo:t})]}):e.jsxs(e.Fragment,{children:[e.jsx(ne,{}),e.jsx(ne,{})]})})}function Y({header:t,context:s,contextClassName:n="",icon:o,modal:a,onClick:r,disabled:d=!1,isModalOpen:i=!1}){return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:r,className:S("group/snorlax-control-tile relative h-full rounded-2xl border border-token-border-xlight bg-token-main-surface-primary shadow-xxs hover:bg-token-main-surface-secondary active:bg-token-main-surface-tertiary active:drop-shadow-none",d&&"pointer-events-none"),children:e.jsxs("div",{className:"relative mx-5 my-4 flex items-center justify-between gap-3 overflow-hidden",children:[e.jsxs("div",{className:"w-full grow text-left",children:[e.jsx("div",{className:"text-sm font-medium",children:t}),e.jsx("div",{className:S("text-xs text-token-text-secondary",n),children:s})]}),o]})}),i&&a]})}function ne(){return e.jsx(Y,{disabled:!0,header:e.jsx("div",{className:"my-2 h-2 w-48 rounded-full bg-token-main-surface-secondary"}),context:e.jsx("div",{className:"my-2 h-2 w-32 rounded-full bg-token-main-surface-secondary"})})}function Lt({gizmo:t}){const{files:s}=t,n=!s.length,o=Z(t),[a,r]=h.useState(!1),d=a&&e.jsx(At,{gizmo:t,onClose:()=>{r(!1)}}),i=()=>r(!0);let l,p,u;if(n)l=e.jsx(x,{...c.addFilesButtonLabel}),p=e.jsx(x,{...c.filesControlDescription}),u=e.jsxs("div",{className:"relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full",children:[e.jsx("div",{className:"absolute h-full w-full rounded-full bg-token-main-surface-secondary opacity-5",style:{backgroundColor:o??void 0}}),e.jsx(ce,{className:"icon-md h-5 w-5",style:{color:o}})]});else{const j=s.slice(0,3);l=e.jsx(x,{...c.projectFilesModalTitle}),p=e.jsx(x,{...c.filesCount,values:{count:s.length}}),u=e.jsx("div",{className:"relative flex h-10 w-20 shrink-0 items-center justify-center rounded-full",children:j.toReversed().map((m,v)=>e.jsx(Bt,{file:m,index:v,gizmoId:t.gizmo.id},m.id))})}return e.jsx(Y,{isModalOpen:a,modal:d,onClick:i,header:l,context:p,icon:u})}function Bt({file:t,index:s,gizmoId:n}){const o=t.name,r=U(o)&&t.file_id!=null&&e.jsx(V,{fileName:o,fileId:t.file_id,gizmoId:n});return e.jsx("div",{className:"absolute right-0 top-0 h-10 w-10 overflow-hidden rounded-xl border-2 border-token-main-surface-primary group-hover/snorlax-control-tile:border-token-main-surface-secondary",style:{transform:`translateX(${s*-20}px)`},children:r||e.jsx(Xe,{className:"h-9 w-9 flex-shrink-0",filename:t.name,contextConnectorInfo:void 0})})}function Rt({gizmo:t}){const{instructions:s}=t.gizmo,n=!s.length,o=Z(t),[a,r]=h.useState(!1),d=a&&e.jsx(ve,{gizmo:t,onClose:()=>{r(!1)}}),i=()=>r(!0);let l,p,u,f;return n?(l=e.jsx(x,{...c.customInstructionsTitle}),p=e.jsx(x,{...c.customInstructionsDescription}),u=e.jsxs("div",{className:"relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full",children:[e.jsx("div",{className:"absolute h-full w-full rounded-full bg-token-main-surface-secondary opacity-5",style:{backgroundColor:o??void 0}}),e.jsx(A,{className:"icon-md h-5 w-5",style:{color:o}})]})):(l=e.jsx(x,{...c.editCustomInstructionsTitle}),f="overflow-hidden text-ellipsis whitespace-nowrap",p=s),e.jsx(Y,{isModalOpen:a,modal:d,onClick:i,header:l,context:p,icon:u,contextClassName:f})}const Gt=B.h3`p4 overflow-hidden text-ellipsis break-all py-3 px-4 text-xs font-semibold text-token-text-secondary`,zt=B.div`h-24 w-full rounded-3xl bg-token-main-surface-secondary`,Ht=()=>e.jsx("div",{className:"ml-1 mt-3 h-10",children:e.jsx("div",{className:"my-[15px] h-[10px] w-48 rounded-full bg-token-main-surface-secondary"})}),oe=new Map;function Xt(t){const s=oe.get(t);if(s)return s;const n=ot(Zt,2e3,{trailing:!0});return oe.set(t,n),n}async function Zt({gizmoId:t,upsertProjectMutation:s,toaster:n}){const o=at,a=se(o.getState(),"theme",t);try{a!==void 0&&await s.mutateAsync({id:t,update:{theme:a??void 0}}),se(o.getState(),"theme",t)===a&&rt(t,"theme")}catch(r){const d=fe(r);n.warning(d??"Error",{duration:2})}}function $t({gizmoId:t,theme:s,upsertProjectMutation:n,toaster:o}){nt(t,"theme",s),Xt(t)({gizmoId:t,upsertProjectMutation:n,toaster:o})}function Kt({gizmo:t}){const s=Z(t),n=L(),[o,a]=h.useState(!1),r=$(),d=i=>{i!==s&&(K.logEvent(Q.projectsThemeChange,{theme:i??"default"}),$t({gizmoId:t.gizmo.id,theme:i,upsertProjectMutation:n,toaster:r}))};return e.jsx(et,{open:o,sideOffset:4,alignOffset:7,side:"bottom",alignAgainstAnchor:"start",size:"none",modal:!0,onOpenChange:i=>a(i),triggerButton:e.jsx(he,{currentTheme:s,isPopoverOpen:o}),children:e.jsx(wt,{currentTheme:s,onSelect:d})})}function Qt({gizmo:t}){return e.jsxs("div",{className:"mb-6 flex w-full flex-col px-4",children:[t?e.jsx(Kt,{gizmo:t}):e.jsx(he,{disabled:!0,currentTheme:null,isPopoverOpen:!1}),t?e.jsxs("button",{className:"group ml-1 mt-3 self-start text-balance text-left text-4xl font-semibold hover:text-token-text-secondary",onClick:()=>{de.setShowProjectSettingsModal(!0)},children:[t.gizmo.display.name,e.jsx(A,{className:"icon-lg ml-2.5 inline-block text-token-text-secondary opacity-0 can-hover:group-hover:opacity-100 motion-safe:transition-opacity motion-safe:duration-100"})]}):e.jsx(Ht,{})]})}function Vt({children:t}){return e.jsx("div",{className:"group relative flex flex-col gap-1 p-4",children:e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(ue,{className:"icon-md text-token-sidebar-icon"}),t]})})}function Yt({conversation:t,gizmo:s}){const n=jt(t.id,i=>i?.title)??t.title,[o,a]=h.useState(!1);h.useEffect(()=>vt(Ct,{editTitleInMainScreen:({serverThreadId:i})=>{i===t.id&&a(!0)}}),[t.id]);const{snippet:r}=t,d=e.jsxs(Vt,{children:[e.jsxs("div",{className:"flex-grow overflow-hidden can-hover:group-hover:mr-5",children:[o?e.jsx(st,{conversation:t,onClose:()=>{a(!1)}}):e.jsx("div",{className:"text-sm font-medium",children:n}),r&&e.jsx("div",{className:"truncate text-sm text-token-text-secondary",children:r})]}),!o&&e.jsx(qt,{conversation:t})]});return o?d:e.jsx(Ie,{to:tt(t.id,s),draggable:!1,children:d})}function qt({conversation:t}){const[s,n]=h.useState(!1);return e.jsx("div",{className:S("absolute bottom-0 top-0 items-center gap-1.5 pr-4 ltr:right-0 rtl:left-0",s?"flex":"hidden can-hover:group-hover:flex"),onClick:o=>{o.preventDefault()},children:e.jsx(ct,{conversation:t,conversationTitle:t.title,onOpenChange:o=>{n(o),o&&K.logEvent(Q.conversationHistoryItemOpenMenu,{conversationId:t.id})},inMainScreen:!0})})}function Wt({gizmo:t}){We(t.gizmo.id);const{items:s,hasNextPage:n,fetchNextPage:o,isLoading:a,isFetching:r,isFetchingNextPage:d}=Je(t.gizmo.id),i=h.useRef(null),l=h.useCallback(u=>{a||u==null||(i.current?.disconnect(),i.current=new IntersectionObserver(f=>{f[0].isIntersecting&&n&&!r&&o()}),i.current.observe(u))},[a,n,o,r]);h.useEffect(()=>()=>{i.current?.disconnect()},[]);const p=s.length;return e.jsxs("div",{className:"mb-14 mt-6",children:[p||a?e.jsx(es,{gizmo:t,items:s??[],hasNextPage:n,infiniteScrollTriggerElementRef:l}):e.jsx(Jt,{}),d&&e.jsx("div",{className:"m-4 mb-5 flex justify-center",children:e.jsx(me,{})})]})}function Jt(){return e.jsxs("div",{className:"mt-20 flex flex-col items-center font-medium",children:[e.jsx(ue,{className:"icon-lg mb-2 text-token-icon-secondary"}),e.jsx("div",{className:"text-sm text-token-text-secondary",children:e.jsx(x,{...c.emptyChatsInProjectTitle})})]})}function es({gizmo:t,items:s,hasNextPage:n,infiniteScrollTriggerElementRef:o}){const a=s.length;return e.jsxs(e.Fragment,{children:[e.jsx(Gt,{children:e.jsx(x,{...c.chatsInProjectTitle})}),e.jsx("ol",{children:s.map((r,d)=>{const i=n&&d===s.length-3?o:void 0;return e.jsx("li",{ref:i,className:S("first:rounded-t-lg last:rounded-b-lg hover:bg-token-main-surface-secondary",d!==a-1&&"border-b border-token-border-xlight"),children:e.jsx(Yt,{conversation:r,gizmo:t})},r.id)})})]})}function Ss({clientThreadId:t,gizmoId:s,currentModelId:n,onRequestCompletion:o}){const a=O(),{data:r}=Ze(s),d=$e(m=>m.showProjectSettingsModal),[i,l]=h.useState(!1),p=Ke(),u=Qe(),f=u!=null&&u.kind==="conversation"&&(u.gizmoId==null||u.gizmoId!==s),j=h.useRef(0);return e.jsx("div",{onDragOver:m=>{m.preventDefault(),f&&l(!0)},onDrop:m=>{m.preventDefault(),f&&(j.current=0,l(!1),p({newGizmoId:s,conversation:u.conversation,previousGizmoId:u.gizmoId??null}))},onDragEnter:m=>{m.preventDefault(),f&&(j.current+=1)},onDragLeave:m=>{m.preventDefault(),f&&(j.current-=1,j.current===0&&l(!1))},children:e.jsxs(Ve,{isStaticSharedThread:!1,verticalPadding:"none",horizontalPadding:"standard",clientThreadId:t,fullHeight:!0,children:[e.jsx(Qt,{gizmo:r}),r?e.jsx(lt,{clientThreadId:t,isNewThread:!0,currentModelId:n,onRequestCompletion:o,hideHeader:!0,showPromptStarters:!1}):e.jsx(zt,{}),e.jsx(Ut,{gizmo:r}),r&&e.jsx(Wt,{gizmo:r}),d&&e.jsx(Ye,{submitButtonTitle:a.formatMessage(c.projectSettingsSubmitButton),gizmo:r,onClose:()=>{de.setShowProjectSettingsModal(!1)}},s),i&&e.jsxs(H,{children:[e.jsx(qe,{className:"h-12 w-12",style:{color:"#3C46FF"}}),e.jsx("h3",{className:"text-center",children:e.jsx(x,{...c.addConversationToNamedSnorlax,values:{projectName:r?.gizmo.display.name??"project"}})}),e.jsx("h4",{className:"text-center",children:e.jsx(x,{...c.moveConversation})})]})]})})}export{Ss as SnorlaxSplashScreen};
//# sourceMappingURL=lonirizi613v4ikr.js.map
