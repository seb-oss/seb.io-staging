(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[564,102,826,550],{7561:function(){},6435:function(e,t,n){"use strict";n.d(t,{F:function(){return a},f:function(){return u}});var r=n(2265);let s=["light","dark"],o="(prefers-color-scheme: dark)",i="undefined"==typeof window,c=(0,r.createContext)(void 0),l={setTheme:e=>{},themes:[]},a=()=>{var e;return null!==(e=(0,r.useContext)(c))&&void 0!==e?e:l},u=e=>(0,r.useContext)(c)?r.createElement(r.Fragment,null,e.children):r.createElement(m,e),d=["light","dark"],m=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:i=!0,storageKey:l="theme",themes:a=d,defaultTheme:u=n?"system":"light",attribute:m="data-theme",value:y,children:v,nonce:x})=>{let[j,w]=(0,r.useState)(()=>h(l,u)),[S,_]=(0,r.useState)(()=>h(l)),b=y?Object.values(y):a,$=(0,r.useCallback)(e=>{let r=e;if(!r)return;"system"===e&&n&&(r=g());let o=y?y[r]:r,c=t?p():null,l=document.documentElement;if("class"===m?(l.classList.remove(...b),o&&l.classList.add(o)):o?l.setAttribute(m,o):l.removeAttribute(m),i){let e=s.includes(u)?u:null,t=s.includes(r)?r:e;l.style.colorScheme=t}null==c||c()},[]),E=(0,r.useCallback)(e=>{w(e);try{localStorage.setItem(l,e)}catch(e){}},[e]),k=(0,r.useCallback)(t=>{_(g(t)),"system"===j&&n&&!e&&$("system")},[j,e]);(0,r.useEffect)(()=>{let e=window.matchMedia(o);return e.addListener(k),k(e),()=>e.removeListener(k)},[k]),(0,r.useEffect)(()=>{let e=e=>{e.key===l&&E(e.newValue||u)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[E]),(0,r.useEffect)(()=>{$(null!=e?e:j)},[e,j]);let T=(0,r.useMemo)(()=>({theme:j,setTheme:E,forcedTheme:e,resolvedTheme:"system"===j?S:j,themes:n?[...a,"system"]:a,systemTheme:n?S:void 0}),[j,E,e,S,n,a]);return r.createElement(c.Provider,{value:T},r.createElement(f,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:i,storageKey:l,themes:a,defaultTheme:u,attribute:m,value:y,children:v,attrs:b,nonce:x}),v)},f=(0,r.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:i,enableColorScheme:c,defaultTheme:l,value:a,attrs:u,nonce:d})=>{let m="system"===l,f="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${u.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,h=c?s.includes(l)&&l?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${l}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",p=(e,t=!1,r=!0)=>{let o=a?a[e]:e,i=t?e+"|| ''":`'${o}'`,l="";return c&&r&&!t&&s.includes(e)&&(l+=`d.style.colorScheme = '${e}';`),"class"===n?l+=t||o?`c.add(${i})`:"null":o&&(l+=`d[s](n,${i})`),l},g=e?`!function(){${f}${p(e)}}()`:i?`!function(){try{${f}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${m})){var t='${o}',m=window.matchMedia(t);if(m.media!==t||m.matches){${p("dark")}}else{${p("light")}}}else if(e){${a?`var x=${JSON.stringify(a)};`:""}${p(a?"x[e]":"e",!0)}}${m?"":"else{"+p(l,!1,!1)+"}"}${h}}catch(e){}}()`:`!function(){try{${f}var e=localStorage.getItem('${t}');if(e){${a?`var x=${JSON.stringify(a)};`:""}${p(a?"x[e]":"e",!0)}}else{${p(l,!1,!1)};}${h}}catch(t){}}();`;return r.createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:g}})},()=>!0),h=(e,t)=>{let n;if(!i){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},p=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},g=e=>(e||(e=window.matchMedia(o)),e.matches?"dark":"light")},8826:function(e,t,n){Promise.resolve().then(n.bind(n,1740))},1740:function(e,t,n){"use strict";n.r(t),n.d(t,{Mdx:function(){return h}});var r=n(7437),s=n(2265),o=n(4887),i=n(4472);let c=(e,t={})=>{let n={React:s,ReactDOM:o,_jsx_runtime:i.i,...t};return Function(...Object.keys(n),e)(...Object.values(n)).default},l=(e,t={})=>s.useMemo(()=>c(e,t),[e,t]);n(6958),n(2981);var a=n(4033),u=n(3311),d=n(290),m=n(6435);n(6502),n(177);let f={FigmaSVG:function(e){let{caption:t,node:n,height:s}=e,o=(0,a.usePathname)(),i=u.DD.find(e=>e.url_path===o),c=null==i?void 0:i.figma_svgs.find(e=>e.node===n);return(0,r.jsx)(d.Z,{caption:t,height:s,children:(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:null==c?void 0:c.svg}})})},FigmaProto:function(e){let{file:t,caption:n,node:o,scale:i,height:c}=e,[l,a]=(0,s.useState)(!0);return(0,r.jsxs)("figure",{className:l?"loading":"",children:[(0,r.jsx)("iframe",{src:"https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/".concat(t,"/Embed?type=design&scaling=min-zoom&node-id=").concat(o,"&mode=design&hide-ui=1"),onLoad:()=>{a(!1)},height:c}),(0,r.jsx)("figcaption",{children:n})]})},Image:function(e){let{alt:t,dark:n,caption:o,...i}=e,{theme:c}=(0,m.F)(),[l,a]=(0,s.useState)(!1);return((0,s.useEffect)(()=>{a(!0)},[]),l)?(0,r.jsxs)("figure",{children:[(0,r.jsxs)("picture",{children:["dark"===c&&(0,r.jsx)("source",{srcSet:n,media:"(prefers-color-scheme: dark)"}),(0,r.jsx)("img",{alt:t,...i})]}),o&&(0,r.jsx)("figcaption",{dangerouslySetInnerHTML:{__html:o}})]}):null},Playground:function(e){let t=(0,s.useRef)(null),n=(0,s.useRef)(null);return(0,s.useEffect)(()=>{n.current&&t.current&&(n.current.project=t.current)},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("playground-project",{id:"story-project",ref:t,"project-src":"/stories/".concat(e.component,"/project.json")}),(0,r.jsx)("playground-preview",{ref:n})]})},Row:function(e){let{children:t}=e;return(0,r.jsx)("div",{className:"row",children:t})},Col:function(e){let{children:t}=e;return(0,r.jsx)("div",{className:"col",children:t})},Do:function(e){let{children:t}=e;return(0,r.jsxs)("div",{className:"card do",children:[t,(0,r.jsxs)("span",{children:[(0,r.jsx)("svg",{viewBox:"0 0 24 24",children:(0,r.jsx)("polyline",{points:"20 6 9 17 4 12"})}),"DO"]})]})},Dont:function(e){let{children:t}=e;return(0,r.jsxs)("div",{className:"card dont",children:[t,(0,r.jsxs)("span",{children:[(0,r.jsxs)("svg",{viewBox:"0 0 24 24",children:[(0,r.jsx)("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),(0,r.jsx)("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),"DON'T"]})]})},Refs:function(){return(0,r.jsx)("div",{children:"Refs"})},SE:function(e){let{children:t}=e;return(0,r.jsx)("span",{lang:"se",children:t})}};function h(e){let{code:t,globals:n}=e,s=l(t,n);return(0,r.jsx)("div",{children:(0,r.jsx)(s,{components:f})})}},290:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7437);function s(e){let{children:t,caption:n,height:s}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("figure",{className:"preview","data-caption":n,style:s?{maxBlockSize:"".concat(s,"px"),minBlockSize:"".concat(s,"px"),aspectRatio:"initial",width:"auto",height:"auto",padding:"48px"}:{},children:t}),n&&(0,r.jsx)("span",{dangerouslySetInnerHTML:{__html:n}})]})}n(2265),n(3819)},6958:function(){},2981:function(){},6502:function(){},177:function(){},3819:function(){},622:function(e,t,n){"use strict";var r=n(2265),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var r,o={},a=null,u=null;for(r in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,r)&&!l.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:s,type:e,key:a,ref:u,props:o,_owner:c.current}}t.Fragment=o,t.jsx=a,t.jsxs=a},7437:function(e,t,n){"use strict";e.exports=n(622)},4033:function(e,t,n){e.exports=n(5313)},4472:function(e,t,n){let r=n(7437);e.exports.i=r}},function(e){e.O(0,[311,971,938,744],function(){return e(e.s=8826)}),_N_E=e.O()}]);