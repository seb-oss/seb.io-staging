(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[826,102,564,550],{4413:function(e,t,n){Promise.resolve().then(n.bind(n,6598))},6598:function(e,t,n){"use strict";n.r(t),n.d(t,{Mdx:function(){return v}});var c=n(7573),o=n(7600),r=n(763),s=n(7653),a=n(3458),i=n(9972);let l=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={React:s,ReactDOM:a,_jsx_runtime:i.i,...t};return Function(...Object.keys(n),e)(...Object.values(n)).default},u=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return s.useMemo(()=>l(e,t),[e,t])};var d=n(9814);n(3389),n(2065);var m=n(4603),h=n(3906),f=n(8355);n(9589),n(6647);let g={Figma:function(e){let{caption:t,node:n,height:o}=e,r=(0,m.usePathname)(),s=h.DD.find(e=>e.url_path===r),a=null==s?void 0:s.figma_svgs.find(e=>e.node===n);return(0,c.jsx)(d.Z,{caption:t,height:o,content:null==a?void 0:a.svg})},FigmaProto:function(e){let{file:t,caption:n,node:o,scale:r,height:a}=e,[i,l]=(0,s.useState)(!0);return(0,c.jsxs)("figure",{className:i?"loading":"",children:[(0,c.jsx)("iframe",{src:"https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/".concat(t,"/Embed?type=design&scaling=min-zoom&node-id=").concat(o,"&mode=design&hide-ui=1"),onLoad:()=>{l(!1)},height:a}),(0,c.jsx)("figcaption",{children:n})]})},Image:function(e){let{alt:t,dark:n,caption:o,...r}=e,{theme:a}=(0,f.F)(),[i,l]=(0,s.useState)(!1);return((0,s.useEffect)(()=>{l(!0)},[]),i)?(0,c.jsxs)("figure",{children:[(0,c.jsxs)("picture",{children:["dark"===a&&(0,c.jsx)("source",{srcSet:n,media:"(prefers-color-scheme: dark)"}),(0,c.jsx)("img",{alt:t,...r})]}),o&&(0,c.jsx)("figcaption",{dangerouslySetInnerHTML:{__html:o}})]}):null},Row:function(e){let{children:t}=e;return(0,c.jsx)("div",{className:"row",children:t})},Col:function(e){let{children:t}=e;return(0,c.jsx)("div",{className:"col",children:t})},Do:function(e){let{children:t}=e;return(0,c.jsxs)("div",{className:"card do",children:[t,(0,c.jsxs)("span",{children:[(0,c.jsx)("svg",{viewBox:"0 0 24 24",children:(0,c.jsx)("polyline",{points:"20 6 9 17 4 12"})}),"DO"]})]})},Dont:function(e){let{children:t}=e;return(0,c.jsxs)("div",{className:"card dont",children:[t,(0,c.jsxs)("span",{children:[(0,c.jsxs)("svg",{viewBox:"0 0 24 24",children:[(0,c.jsx)("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),(0,c.jsx)("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),"DON'T"]})]})},SE:function(e){let{children:t}=e;return(0,c.jsx)("span",{lang:"se",children:t})},Pattern:d.Z,Spacer:r.Z,Grid:o.default,Story:function(e){let{component:t,id:n,height:o}=e,[r,a]=(0,s.useState)(!0),i=(0,s.useRef)(null);return(0,s.useEffect)(()=>{let e=e=>{"number"==typeof e.data&&i.current&&(i.current.style.height="".concat(e.data,"px"))};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},[]),(0,c.jsx)("iframe",{ref:i,src:"https://storybook.seb.io/latest/core/iframe.html?viewMode=story&id=components-".concat(t,"--").concat(n),onLoad:()=>{a(!1)},height:o,className:"story"})}};function v(e){let{code:t,globals:n}=e,o=u(t,n);return(0,c.jsx)(o,{components:g})}},9814:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var c=n(7573),o=n(7653);function r(e){let{children:t,caption:n,height:r,content:s}=e,a=r?{"--gds-pattern-max-height":"".concat(r,"px")}:{},i=(0,o.useRef)(null);return(0,o.useEffect)(()=>{r&&i.current&&i.current.classList.add("custom")},[r]),(0,c.jsxs)("div",{children:[s?(0,c.jsx)("figure",{ref:i,className:"preview","data-caption":n,style:a,dangerouslySetInnerHTML:{__html:s}}):(0,c.jsx)("figure",{ref:i,className:"preview","data-caption":n,style:a,children:t}),n&&(0,c.jsx)("span",{dangerouslySetInnerHTML:{__html:n}})]})}n(6777)},763:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var c=n(7573);function o(e){let{size:t,decorated:n}=e,o="gds-spacer";return t&&(o+=" gds-spacer-".concat(t)),n&&(o+=" gds-spacer-decorator"),(0,c.jsx)("div",{className:o,children:n&&(0,c.jsx)("hr",{})})}n(6844)},1521:function(){},8355:function(e,t,n){"use strict";n.d(t,{F:function(){return l},f:function(){return u}});var c=n(7653);let o=["light","dark"],r="(prefers-color-scheme: dark)",s="undefined"==typeof window,a=(0,c.createContext)(void 0),i={setTheme:e=>{},themes:[]},l=()=>{var e;return null!==(e=(0,c.useContext)(a))&&void 0!==e?e:i},u=e=>(0,c.useContext)(a)?c.createElement(c.Fragment,null,e.children):c.createElement(m,e),d=["light","dark"],m=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:s=!0,enableColorScheme:i=!0,storageKey:l="theme",themes:u=d,defaultTheme:m=s?"system":"light",attribute:p="data-theme",value:x,children:y,nonce:w}=e,[j,b]=(0,c.useState)(()=>f(l,m)),[S,E]=(0,c.useState)(()=>f(l)),k=x?Object.values(x):u,T=(0,c.useCallback)(e=>{let t=e;if(!t)return;"system"===e&&s&&(t=v());let c=x?x[t]:t,r=n?g():null,a=document.documentElement;if("class"===p?(a.classList.remove(...k),c&&a.classList.add(c)):c?a.setAttribute(p,c):a.removeAttribute(p),i){let e=o.includes(m)?m:null,n=o.includes(t)?t:e;a.style.colorScheme=n}null==r||r()},[]),_=(0,c.useCallback)(e=>{b(e);try{localStorage.setItem(l,e)}catch(e){}},[t]),C=(0,c.useCallback)(e=>{E(v(e)),"system"===j&&s&&!t&&T("system")},[j,t]);(0,c.useEffect)(()=>{let e=window.matchMedia(r);return e.addListener(C),C(e),()=>e.removeListener(C)},[C]),(0,c.useEffect)(()=>{let e=e=>{e.key===l&&_(e.newValue||m)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[_]),(0,c.useEffect)(()=>{T(null!=t?t:j)},[t,j]);let L=(0,c.useMemo)(()=>({theme:j,setTheme:_,forcedTheme:t,resolvedTheme:"system"===j?S:j,themes:s?[...u,"system"]:u,systemTheme:s?S:void 0}),[j,_,t,S,s,u]);return c.createElement(a.Provider,{value:L},c.createElement(h,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:s,enableColorScheme:i,storageKey:l,themes:u,defaultTheme:m,attribute:p,value:x,children:y,attrs:k,nonce:w}),y)},h=(0,c.memo)(e=>{let{forcedTheme:t,storageKey:n,attribute:s,enableSystem:a,enableColorScheme:i,defaultTheme:l,value:u,attrs:d,nonce:m}=e,h="system"===l,f="class"===s?"var d=document.documentElement,c=d.classList;c.remove(".concat(d.map(e=>"'".concat(e,"'")).join(","),");"):"var d=document.documentElement,n='".concat(s,"',s='setAttribute';"),g=i?o.includes(l)&&l?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(l,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",v=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],c=u?u[e]:e,r=t?e+"|| ''":"'".concat(c,"'"),a="";return i&&n&&!t&&o.includes(e)&&(a+="d.style.colorScheme = '".concat(e,"';")),"class"===s?a+=t||c?"c.add(".concat(r,")"):"null":c&&(a+="d[s](n,".concat(r,")")),a},p=t?"!function(){".concat(f).concat(v(t),"}()"):a?"!function(){try{".concat(f,"var e=localStorage.getItem('").concat(n,"');if('system'===e||(!e&&").concat(h,")){var t='").concat(r,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(v("dark"),"}else{").concat(v("light"),"}}else if(e){").concat(u?"var x=".concat(JSON.stringify(u),";"):"").concat(v(u?"x[e]":"e",!0),"}").concat(h?"":"else{"+v(l,!1,!1)+"}").concat(g,"}catch(e){}}()"):"!function(){try{".concat(f,"var e=localStorage.getItem('").concat(n,"');if(e){").concat(u?"var x=".concat(JSON.stringify(u),";"):"").concat(v(u?"x[e]":"e",!0),"}else{").concat(v(l,!1,!1),";}").concat(g,"}catch(t){}}();");return c.createElement("script",{nonce:m,dangerouslySetInnerHTML:{__html:p}})},()=>!0),f=(e,t)=>{let n;if(!s){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},g=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},v=e=>(e||(e=window.matchMedia(r)),e.matches?"dark":"light")},4603:function(e,t,n){"use strict";var c=n(2988);n.o(c,"notFound")&&n.d(t,{notFound:function(){return c.notFound}}),n.o(c,"usePathname")&&n.d(t,{usePathname:function(){return c.usePathname}}),n.o(c,"useRouter")&&n.d(t,{useRouter:function(){return c.useRouter}})},3389:function(){},2065:function(){},9589:function(){},6647:function(){},6777:function(){},6844:function(){},9972:function(e,t,n){"use strict";let c=n(7573);e.exports.i=c}},function(e){e.O(0,[231,293,997,744],function(){return e(e.s=4413)}),_N_E=e.O()}]);