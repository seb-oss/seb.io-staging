(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[564,550,102,826],{6652:function(e,t,n){Promise.resolve().then(n.bind(n,7658))},7658:function(e,t,n){"use strict";n.r(t),n.d(t,{Mdx:function(){return p}});var r=n(7437),s=n(2265),o=n(494),c=n(8729),i=n(4887),a=n(9499);let l=(e,t={})=>{let n={React:s,ReactDOM:i,_jsx_runtime:a.i,...t};return Function(...Object.keys(n),e)(...Object.values(n)).default},u=(e,t={})=>s.useMemo(()=>l(e,t),[e,t]);var d=n(9519);n(8042),n(2954);var m=n(7907),f=n(3311),h=n(1774);n(6890),n(9538);let g={Figma:function(e){let{caption:t,node:n,height:s}=e,o=(0,m.usePathname)(),c=f.DD.find(e=>e.url_path===o),i=null==c?void 0:c.figma_svgs.find(e=>e.node===n);return(0,r.jsx)(d.Z,{caption:t,height:s,content:null==i?void 0:i.svg})},FigmaProto:function(e){let{file:t,caption:n,node:o,scale:c,height:i}=e,[a,l]=(0,s.useState)(!0);return(0,r.jsxs)("figure",{className:a?"loading":"",children:[(0,r.jsx)("iframe",{src:"https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/".concat(t,"/Embed?type=design&scaling=min-zoom&node-id=").concat(o,"&mode=design&hide-ui=1"),onLoad:()=>{l(!1)},height:i}),(0,r.jsx)("figcaption",{children:n})]})},Image:function(e){let{alt:t,dark:n,caption:o,...c}=e,{theme:i}=(0,h.F)(),[a,l]=(0,s.useState)(!1);return((0,s.useEffect)(()=>{l(!0)},[]),a)?(0,r.jsxs)("figure",{children:[(0,r.jsxs)("picture",{children:["dark"===i&&(0,r.jsx)("source",{srcSet:n,media:"(prefers-color-scheme: dark)"}),(0,r.jsx)("img",{alt:t,...c})]}),o&&(0,r.jsx)("figcaption",{dangerouslySetInnerHTML:{__html:o}})]}):null},Playground:function(e){let t=(0,s.useRef)(null),n=(0,s.useRef)(null);return(0,s.useEffect)(()=>{n.current&&t.current&&(n.current.project=t.current)},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("playground-project",{id:"story-project",ref:t,"project-src":"/stories/".concat(e.component,"/project.json")}),(0,r.jsx)("playground-preview",{ref:n})]})},Row:function(e){let{children:t}=e;return(0,r.jsx)("div",{className:"row",children:t})},Col:function(e){let{children:t}=e;return(0,r.jsx)("div",{className:"col",children:t})},Do:function(e){let{children:t}=e;return(0,r.jsxs)("div",{className:"card do",children:[t,(0,r.jsxs)("span",{children:[(0,r.jsx)("svg",{viewBox:"0 0 24 24",children:(0,r.jsx)("polyline",{points:"20 6 9 17 4 12"})}),"DO"]})]})},Dont:function(e){let{children:t}=e;return(0,r.jsxs)("div",{className:"card dont",children:[t,(0,r.jsxs)("span",{children:[(0,r.jsxs)("svg",{viewBox:"0 0 24 24",children:[(0,r.jsx)("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),(0,r.jsx)("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),"DON'T"]})]})},Refs:function(){return(0,r.jsx)("div",{children:"Refs"})},SE:function(e){let{children:t}=e;return(0,r.jsx)("span",{lang:"se",children:t})},Pattern:d.Z,Spacer:c.Z,Grid:o.default};function p(e){let{code:t,globals:n}=e,s=u(t,n);return(0,r.jsx)(s,{components:g})}},9519:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7437),s=n(2265);function o(e){let{children:t,caption:n,height:o,content:c}=e,i=o?{"--gds-pattern-max-height":"".concat(o,"px")}:{},a=(0,s.useRef)(null);return(0,s.useEffect)(()=>{o&&a.current&&a.current.classList.add("custom")},[o]),(0,r.jsxs)("div",{children:[c?(0,r.jsx)("figure",{ref:a,className:"preview","data-caption":n,style:i,dangerouslySetInnerHTML:{__html:c}}):(0,r.jsx)("figure",{ref:a,className:"preview","data-caption":n,style:i,children:t}),n&&(0,r.jsx)("span",{dangerouslySetInnerHTML:{__html:n}})]})}n(1132)},8729:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7437);function s(e){let{size:t,decorated:n}=e,s="gds-spacer";return t&&(s+=" gds-spacer-".concat(t)),n&&(s+=" gds-spacer-decorator"),(0,r.jsx)("div",{className:s,children:n&&(0,r.jsx)("hr",{})})}n(7724)},5562:function(){},1774:function(e,t,n){"use strict";n.d(t,{F:function(){return l},f:function(){return u}});var r=n(2265);let s=["light","dark"],o="(prefers-color-scheme: dark)",c="undefined"==typeof window,i=(0,r.createContext)(void 0),a={setTheme:e=>{},themes:[]},l=()=>{var e;return null!==(e=(0,r.useContext)(i))&&void 0!==e?e:a},u=e=>(0,r.useContext)(i)?r.createElement(r.Fragment,null,e.children):r.createElement(m,e),d=["light","dark"],m=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:c=!0,storageKey:a="theme",themes:l=d,defaultTheme:u=n?"system":"light",attribute:m="data-theme",value:v,children:x,nonce:y})=>{let[j,w]=(0,r.useState)(()=>h(a,u)),[b,S]=(0,r.useState)(()=>h(a)),$=v?Object.values(v):l,E=(0,r.useCallback)(e=>{let r=e;if(!r)return;"system"===e&&n&&(r=p());let o=v?v[r]:r,i=t?g():null,a=document.documentElement;if("class"===m?(a.classList.remove(...$),o&&a.classList.add(o)):o?a.setAttribute(m,o):a.removeAttribute(m),c){let e=s.includes(u)?u:null,t=s.includes(r)?r:e;a.style.colorScheme=t}null==i||i()},[]),T=(0,r.useCallback)(e=>{w(e);try{localStorage.setItem(a,e)}catch(e){}},[e]),k=(0,r.useCallback)(t=>{S(p(t)),"system"===j&&n&&!e&&E("system")},[j,e]);(0,r.useEffect)(()=>{let e=window.matchMedia(o);return e.addListener(k),k(e),()=>e.removeListener(k)},[k]),(0,r.useEffect)(()=>{let e=e=>{e.key===a&&T(e.newValue||u)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[T]),(0,r.useEffect)(()=>{E(null!=e?e:j)},[e,j]);let _=(0,r.useMemo)(()=>({theme:j,setTheme:T,forcedTheme:e,resolvedTheme:"system"===j?b:j,themes:n?[...l,"system"]:l,systemTheme:n?b:void 0}),[j,T,e,b,n,l]);return r.createElement(i.Provider,{value:_},r.createElement(f,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:c,storageKey:a,themes:l,defaultTheme:u,attribute:m,value:v,children:x,attrs:$,nonce:y}),x)},f=(0,r.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:c,enableColorScheme:i,defaultTheme:a,value:l,attrs:u,nonce:d})=>{let m="system"===a,f="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${u.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,h=i?s.includes(a)&&a?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${a}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",g=(e,t=!1,r=!0)=>{let o=l?l[e]:e,c=t?e+"|| ''":`'${o}'`,a="";return i&&r&&!t&&s.includes(e)&&(a+=`d.style.colorScheme = '${e}';`),"class"===n?a+=t||o?`c.add(${c})`:"null":o&&(a+=`d[s](n,${c})`),a},p=e?`!function(){${f}${g(e)}}()`:c?`!function(){try{${f}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${m})){var t='${o}',m=window.matchMedia(t);if(m.media!==t||m.matches){${g("dark")}}else{${g("light")}}}else if(e){${l?`var x=${JSON.stringify(l)};`:""}${g(l?"x[e]":"e",!0)}}${m?"":"else{"+g(a,!1,!1)+"}"}${h}}catch(e){}}()`:`!function(){try{${f}var e=localStorage.getItem('${t}');if(e){${l?`var x=${JSON.stringify(l)};`:""}${g(l?"x[e]":"e",!0)}}else{${g(a,!1,!1)};}${h}}catch(t){}}();`;return r.createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:p}})},()=>!0),h=(e,t)=>{let n;if(!c){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},g=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},p=e=>(e||(e=window.matchMedia(o)),e.matches?"dark":"light")},7907:function(e,t,n){"use strict";var r=n(5313);n.o(r,"notFound")&&n.d(t,{notFound:function(){return r.notFound}}),n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}}),n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}})},8042:function(){},2954:function(){},6890:function(){},9538:function(){},1132:function(){},7724:function(){},9499:function(e,t,n){let r=n(7437);e.exports.i=r}},function(e){e.O(0,[40,971,69,744],function(){return e(e.s=6652)}),_N_E=e.O()}]);