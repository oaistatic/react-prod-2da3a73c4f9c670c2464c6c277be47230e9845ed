import{d as M,c as N,r as I,j as e,L as i,M as h}from"./izh0i1dfnf8ev7x1.js";import{a1 as k,a2 as S,a3 as D,a4 as z,o as E,a5 as O,a6 as g,a7 as d,a8 as B,a9 as G}from"./fc2hzad6rtrm7s5f.js";import{au as L,cc as u,S as l,e_ as f,dw as A,d as _}from"./hggowi1ggrzb09yc.js";import{u as H}from"./in3ze5ugryldzaj2.js";function J({onNewThread:t,className:c,location:m}){const w=M(),C=N(),[n,v]=I.useState(!1),{clientThreadId:j,currentModelId:b}=H(),{data:p}=L(),y=k(p?.models,b)??S(p),x=D(j),s=x?z(x):void 0,r=s?E(s):void 0,o=C.formatMessage({id:"Al9vf7",defaultMessage:"New chat"});return s===void 0||r===void 0||O(s)?e.jsx(u,{label:o,open:n?!1:void 0,className:c,children:e.jsx(i,{to:"/",onClick:a=>{t?(a.preventDefault(),t()):l.logEvent("chatgpt_web_thread_tap_new_thread")},tabIndex:0,children:e.jsx(g,{className:f.sidebarIcon,icon:e.jsx(d,{}),tabIndex:-1,label:o,style:{viewTransitionName:m==="sidebar"?"var(--vt_new_chat_sidebar)":"var(--vt_new_chat_thread)"}})})}):e.jsx(u,{label:o,open:n?!1:void 0,className:c,children:e.jsx(A,{side:"bottom",open:n,sideOffset:4,onOpenChange:v,contentAlign:"start",triggerButton:e.jsx(g,{className:f.sidebarIcon,icon:e.jsx(d,{}),onClick:()=>{v(!0)},label:o,style:{viewTransitionName:m==="sidebar"?"var(--vt_new_chat_sidebar)":"var(--vt_new_chat_thread)"}}),size:"auto",children:e.jsxs("div",{className:"flex max-h-[50dvh] flex-col gap-2 overflow-x-auto px-2",children:[e.jsxs(i,{to:"/",className:"flex items-center gap-2 rounded-md p-2 hover:bg-token-main-surface-secondary",onClick:a=>{r!==null?(a.preventDefault(),B(w,r)):t?(a.preventDefault(),t()):l.logEvent("chatgpt_web_thread_tap_new_thread")},tabIndex:0,children:[e.jsx(G,{className:"icon-md w-5 text-token-text-secondary"}),e.jsx("div",{className:_("grow overflow-hidden whitespace-normal text-pretty"),dir:"auto",children:e.jsx(h,{id:"hDZn23",defaultMessage:"New Chat ({gpt_display_name})",values:{gpt_display_name:s.gizmo.display.name}})})]}),e.jsxs(i,{to:"/",className:"flex items-center gap-2 rounded-md p-2 hover:bg-token-main-surface-secondary",onClick:a=>{t?(a.preventDefault(),t()):l.logEvent("chatgpt_web_thread_tap_new_thread")},children:[e.jsx(d,{className:"icon-md w-5 text-token-text-secondary"}),e.jsx("div",{className:_("grow overflow-hidden whitespace-normal text-pretty"),dir:"auto",children:e.jsx(h,{id:"vpqOJy",defaultMessage:"New Chat ({model_title})",values:{model_title:y.title}})})]})]})})})}export{J as C};
//# sourceMappingURL=modzmagtrlhmunl0.js.map
