(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[985],{6435:function(e,t,n){"use strict";n.d(t,{F:function(){return c},f:function(){return u}});var r=n(2265);let o=["light","dark"],s="(prefers-color-scheme: dark)",l="undefined"==typeof window,i=(0,r.createContext)(void 0),a={setTheme:e=>{},themes:[]},c=()=>{var e;return null!==(e=(0,r.useContext)(i))&&void 0!==e?e:a},u=e=>(0,r.useContext)(i)?r.createElement(r.Fragment,null,e.children):r.createElement(m,e),d=["light","dark"],m=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:l=!0,storageKey:a="theme",themes:c=d,defaultTheme:u=n?"system":"light",attribute:m="data-theme",value:y,children:v,nonce:x})=>{let[j,b]=(0,r.useState)(()=>h(a,u)),[w,_]=(0,r.useState)(()=>h(a)),S=y?Object.values(y):c,k=(0,r.useCallback)(e=>{let r=e;if(!r)return;"system"===e&&n&&(r=g());let s=y?y[r]:r,i=t?p():null,a=document.documentElement;if("class"===m?(a.classList.remove(...S),s&&a.classList.add(s)):s?a.setAttribute(m,s):a.removeAttribute(m),l){let e=o.includes(u)?u:null,t=o.includes(r)?r:e;a.style.colorScheme=t}null==i||i()},[]),$=(0,r.useCallback)(e=>{b(e);try{localStorage.setItem(a,e)}catch(e){}},[e]),E=(0,r.useCallback)(t=>{_(g(t)),"system"===j&&n&&!e&&k("system")},[j,e]);(0,r.useEffect)(()=>{let e=window.matchMedia(s);return e.addListener(E),E(e),()=>e.removeListener(E)},[E]),(0,r.useEffect)(()=>{let e=e=>{e.key===a&&$(e.newValue||u)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[$]),(0,r.useEffect)(()=>{k(null!=e?e:j)},[e,j]);let C=(0,r.useMemo)(()=>({theme:j,setTheme:$,forcedTheme:e,resolvedTheme:"system"===j?w:j,themes:n?[...c,"system"]:c,systemTheme:n?w:void 0}),[j,$,e,w,n,c]);return r.createElement(i.Provider,{value:C},r.createElement(f,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:l,storageKey:a,themes:c,defaultTheme:u,attribute:m,value:y,children:v,attrs:S,nonce:x}),v)},f=(0,r.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:l,enableColorScheme:i,defaultTheme:a,value:c,attrs:u,nonce:d})=>{let m="system"===a,f="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${u.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,h=i?o.includes(a)&&a?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${a}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",p=(e,t=!1,r=!0)=>{let s=c?c[e]:e,l=t?e+"|| ''":`'${s}'`,a="";return i&&r&&!t&&o.includes(e)&&(a+=`d.style.colorScheme = '${e}';`),"class"===n?a+=t||s?`c.add(${l})`:"null":s&&(a+=`d[s](n,${l})`),a},g=e?`!function(){${f}${p(e)}}()`:l?`!function(){try{${f}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${m})){var t='${s}',m=window.matchMedia(t);if(m.media!==t||m.matches){${p("dark")}}else{${p("light")}}}else if(e){${c?`var x=${JSON.stringify(c)};`:""}${p(c?"x[e]":"e",!0)}}${m?"":"else{"+p(a,!1,!1)+"}"}${h}}catch(e){}}()`:`!function(){try{${f}var e=localStorage.getItem('${t}');if(e){${c?`var x=${JSON.stringify(c)};`:""}${p(c?"x[e]":"e",!0)}}else{${p(a,!1,!1)};}${h}}catch(t){}}();`;return r.createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:g}})},()=>!0),h=(e,t)=>{let n;if(!l){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},p=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},g=e=>(e||(e=window.matchMedia(s)),e.matches?"dark":"light")},3320:function(e,t,n){Promise.resolve().then(n.bind(n,1740)),Promise.resolve().then(n.t.bind(n,5935,23))},1740:function(e,t,n){"use strict";n.r(t),n.d(t,{Mdx:function(){return h}});var r=n(7437),o=n(2265),s=n(4887),l=n(4472);let i=(e,t={})=>{let n={React:o,ReactDOM:s,_jsx_runtime:l.i,...t};return Function(...Object.keys(n),e)(...Object.values(n)).default},a=(e,t={})=>o.useMemo(()=>i(e,t),[e,t]);var c=n(290);n(6958),n(2981);var u=n(4033),d=n(3311),m=n(6435);n(6502),n(177);let f={FigmaSVG:function(e){let{caption:t,node:n,height:o}=e,s=(0,u.usePathname)(),l=d.DD.find(e=>e.url_path===s),i=null==l?void 0:l.figma_svgs.find(e=>e.node===n);return(0,r.jsx)(c.Z,{caption:t,height:o,children:(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:null==i?void 0:i.svg}})})},FigmaProto:function(e){let{file:t,caption:n,node:s,scale:l,height:i}=e,[a,c]=(0,o.useState)(!0);return(0,r.jsxs)("figure",{className:a?"loading":"",children:[(0,r.jsx)("iframe",{src:"https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/".concat(t,"/Embed?type=design&scaling=min-zoom&node-id=").concat(s,"&mode=design&hide-ui=1"),onLoad:()=>{c(!1)},height:i}),(0,r.jsx)("figcaption",{children:n})]})},Image:function(e){let{alt:t,dark:n,caption:s,...l}=e,{theme:i}=(0,m.F)(),[a,c]=(0,o.useState)(!1);return((0,o.useEffect)(()=>{c(!0)},[]),a)?(0,r.jsxs)("figure",{children:[(0,r.jsxs)("picture",{children:["dark"===i&&(0,r.jsx)("source",{srcSet:n,media:"(prefers-color-scheme: dark)"}),(0,r.jsx)("img",{alt:t,...l})]}),s&&(0,r.jsx)("figcaption",{dangerouslySetInnerHTML:{__html:s}})]}):null},Playground:function(e){let t=(0,o.useRef)(null),n=(0,o.useRef)(null);return(0,o.useEffect)(()=>{n.current&&t.current&&(n.current.project=t.current)},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("playground-project",{id:"story-project",ref:t,"project-src":"/stories/".concat(e.component,"/project.json")}),(0,r.jsx)("playground-preview",{ref:n})]})},Row:function(e){let{children:t}=e;return(0,r.jsx)("div",{className:"row",children:t})},Col:function(e){let{children:t}=e;return(0,r.jsx)("div",{className:"col",children:t})},Do:function(e){let{children:t}=e;return(0,r.jsxs)("div",{className:"card do",children:[t,(0,r.jsxs)("span",{children:[(0,r.jsx)("svg",{viewBox:"0 0 24 24",children:(0,r.jsx)("polyline",{points:"20 6 9 17 4 12"})}),"DO"]})]})},Dont:function(e){let{children:t}=e;return(0,r.jsxs)("div",{className:"card dont",children:[t,(0,r.jsxs)("span",{children:[(0,r.jsxs)("svg",{viewBox:"0 0 24 24",children:[(0,r.jsx)("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),(0,r.jsx)("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),"DON'T"]})]})},Refs:function(){return(0,r.jsx)("div",{children:"Refs"})},SE:function(e){let{children:t}=e;return(0,r.jsx)("span",{lang:"se",children:t})},Pattern:c.Z};function h(e){let{code:t,globals:n}=e,o=a(t,n);return(0,r.jsx)(o,{components:f})}},290:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7437);function o(e){let{children:t,caption:n,height:o}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("figure",{className:"preview","data-caption":n,style:o?{maxBlockSize:"".concat(o,"px"),minBlockSize:"".concat(o,"px"),aspectRatio:"initial",width:"auto",height:"auto",padding:"48px"}:{},children:t}),n&&(0,r.jsx)("span",{dangerouslySetInnerHTML:{__html:n}})]})}n(2265),n(3819)},2185:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{requestIdleCallback:function(){return n},cancelIdleCallback:function(){return r}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6958:function(){},2981:function(){},6502:function(){},177:function(){},3819:function(){},622:function(e,t,n){"use strict";var r=n(2265),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,s={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)l.call(t,r)&&!a.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:u,props:s,_owner:i.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},7437:function(e,t,n){"use strict";e.exports=n(622)},4472:function(e,t,n){let r=n(7437);e.exports.i=r}},function(e){e.O(0,[658,311,971,938,744],function(){return e(e.s=3320)}),_N_E=e.O()}]);