(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[985],{7561:function(){},6435:function(e,t,n){"use strict";n.d(t,{F:function(){return c},f:function(){return u}});var r=n(2265);let o=["light","dark"],l="(prefers-color-scheme: dark)",i="undefined"==typeof window,a=(0,r.createContext)(void 0),s={setTheme:e=>{},themes:[]},c=()=>{var e;return null!==(e=(0,r.useContext)(a))&&void 0!==e?e:s},u=e=>(0,r.useContext)(a)?r.createElement(r.Fragment,null,e.children):r.createElement(f,e),d=["light","dark"],f=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:i=!0,storageKey:s="theme",themes:c=d,defaultTheme:u=n?"system":"light",attribute:f="data-theme",value:g,children:v,nonce:b})=>{let[_,x]=(0,r.useState)(()=>h(s,u)),[j,E]=(0,r.useState)(()=>h(s)),S=g?Object.values(g):c,w=(0,r.useCallback)(e=>{let r=e;if(!r)return;"system"===e&&n&&(r=y());let l=g?g[r]:r,a=t?p():null,s=document.documentElement;if("class"===f?(s.classList.remove(...S),l&&s.classList.add(l)):l?s.setAttribute(f,l):s.removeAttribute(f),i){let e=o.includes(u)?u:null,t=o.includes(r)?r:e;s.style.colorScheme=t}null==a||a()},[]),C=(0,r.useCallback)(e=>{x(e);try{localStorage.setItem(s,e)}catch(e){}},[e]),O=(0,r.useCallback)(t=>{E(y(t)),"system"===_&&n&&!e&&w("system")},[_,e]);(0,r.useEffect)(()=>{let e=window.matchMedia(l);return e.addListener(O),O(e),()=>e.removeListener(O)},[O]),(0,r.useEffect)(()=>{let e=e=>{e.key===s&&C(e.newValue||u)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[C]),(0,r.useEffect)(()=>{w(null!=e?e:_)},[e,_]);let k=(0,r.useMemo)(()=>({theme:_,setTheme:C,forcedTheme:e,resolvedTheme:"system"===_?j:_,themes:n?[...c,"system"]:c,systemTheme:n?j:void 0}),[_,C,e,j,n,c]);return r.createElement(a.Provider,{value:k},r.createElement(m,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:i,storageKey:s,themes:c,defaultTheme:u,attribute:f,value:g,children:v,attrs:S,nonce:b}),v)},m=(0,r.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:i,enableColorScheme:a,defaultTheme:s,value:c,attrs:u,nonce:d})=>{let f="system"===s,m="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${u.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,h=a?o.includes(s)&&s?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",p=(e,t=!1,r=!0)=>{let l=c?c[e]:e,i=t?e+"|| ''":`'${l}'`,s="";return a&&r&&!t&&o.includes(e)&&(s+=`d.style.colorScheme = '${e}';`),"class"===n?s+=t||l?`c.add(${i})`:"null":l&&(s+=`d[s](n,${i})`),s},y=e?`!function(){${m}${p(e)}}()`:i?`!function(){try{${m}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${f})){var t='${l}',m=window.matchMedia(t);if(m.media!==t||m.matches){${p("dark")}}else{${p("light")}}}else if(e){${c?`var x=${JSON.stringify(c)};`:""}${p(c?"x[e]":"e",!0)}}${f?"":"else{"+p(s,!1,!1)+"}"}${h}}catch(e){}}()`:`!function(){try{${m}var e=localStorage.getItem('${t}');if(e){${c?`var x=${JSON.stringify(c)};`:""}${p(c?"x[e]":"e",!0)}}else{${p(s,!1,!1)};}${h}}catch(t){}}();`;return r.createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:y}})},()=>!0),h=(e,t)=>{let n;if(!i){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},p=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},y=e=>(e||(e=window.matchMedia(l)),e.matches?"dark":"light")},3320:function(e,t,n){Promise.resolve().then(n.bind(n,1740)),Promise.resolve().then(n.t.bind(n,5935,23))},1740:function(e,t,n){"use strict";n.r(t),n.d(t,{Mdx:function(){return h}});var r=n(7437),o=n(2265),l=n(4887),i=n(4472);let a=(e,t={})=>{let n={React:o,ReactDOM:l,_jsx_runtime:i.i,...t};return Function(...Object.keys(n),e)(...Object.values(n)).default},s=(e,t={})=>o.useMemo(()=>a(e,t),[e,t]);var c=n(290);n(6958),n(2981);var u=n(4033),d=n(3311),f=n(6435);n(6502),n(177);let m={FigmaSVG:function(e){let{caption:t,node:n,height:o}=e,l=(0,u.usePathname)(),i=d.DD.find(e=>e.url_path===l),a=null==i?void 0:i.figma_svgs.find(e=>e.node===n);return(0,r.jsx)(c.Z,{caption:t,height:o,children:(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:null==a?void 0:a.svg}})})},FigmaProto:function(e){let{file:t,caption:n,node:l,scale:i,height:a}=e,[s,c]=(0,o.useState)(!0);return(0,r.jsxs)("figure",{className:s?"loading":"",children:[(0,r.jsx)("iframe",{src:"https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/".concat(t,"/Embed?type=design&scaling=min-zoom&node-id=").concat(l,"&mode=design&hide-ui=1"),onLoad:()=>{c(!1)},height:a}),(0,r.jsx)("figcaption",{children:n})]})},Image:function(e){let{alt:t,dark:n,caption:l,...i}=e,{theme:a}=(0,f.F)(),[s,c]=(0,o.useState)(!1);return((0,o.useEffect)(()=>{c(!0)},[]),s)?(0,r.jsxs)("figure",{children:[(0,r.jsxs)("picture",{children:["dark"===a&&(0,r.jsx)("source",{srcSet:n,media:"(prefers-color-scheme: dark)"}),(0,r.jsx)("img",{alt:t,...i})]}),l&&(0,r.jsx)("figcaption",{dangerouslySetInnerHTML:{__html:l}})]}):null},Playground:function(e){let t=(0,o.useRef)(null),n=(0,o.useRef)(null);return(0,o.useEffect)(()=>{n.current&&t.current&&(n.current.project=t.current)},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("playground-project",{id:"story-project",ref:t,"project-src":"/stories/".concat(e.component,"/project.json")}),(0,r.jsx)("playground-preview",{ref:n})]})},Row:function(e){let{children:t}=e;return(0,r.jsx)("div",{className:"row",children:t})},Col:function(e){let{children:t}=e;return(0,r.jsx)("div",{className:"col",children:t})},Do:function(e){let{children:t}=e;return(0,r.jsxs)("div",{className:"card do",children:[t,(0,r.jsxs)("span",{children:[(0,r.jsx)("svg",{viewBox:"0 0 24 24",children:(0,r.jsx)("polyline",{points:"20 6 9 17 4 12"})}),"DO"]})]})},Dont:function(e){let{children:t}=e;return(0,r.jsxs)("div",{className:"card dont",children:[t,(0,r.jsxs)("span",{children:[(0,r.jsxs)("svg",{viewBox:"0 0 24 24",children:[(0,r.jsx)("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),(0,r.jsx)("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),"DON'T"]})]})},Refs:function(){return(0,r.jsx)("div",{children:"Refs"})},SE:function(e){let{children:t}=e;return(0,r.jsx)("span",{lang:"se",children:t})},Pattern:c.Z};function h(e){let{code:t,globals:n}=e,o=s(t,n);return(0,r.jsx)("div",{children:(0,r.jsx)(o,{components:m})})}},290:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7437);function o(e){let{children:t,caption:n,height:o}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("figure",{className:"preview","data-caption":n,style:o?{maxBlockSize:"".concat(o,"px"),minBlockSize:"".concat(o,"px"),aspectRatio:"initial",width:"auto",height:"auto",padding:"48px"}:{},children:t}),n&&(0,r.jsx)("span",{dangerouslySetInnerHTML:{__html:n}})]})}n(2265),n(3819)},3313:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},isEqualNode:function(){return l},default:function(){return i}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function o(e){let{type:t,props:n}=e,o=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let l=r[e]||e.toLowerCase();"script"===t&&("async"===l||"defer"===l||"noModule"===l)?o[l]=!!n[e]:o.setAttribute(l,n[e])}let{children:l,dangerouslySetInnerHTML:i}=n;return i?o.innerHTML=i.__html||"":l&&(o.textContent="string"==typeof l?l:Array.isArray(l)?l.join(""):""),o}function l(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function i(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,o="";if(r){let{children:e}=r.props;o="string"==typeof e?e:Array.isArray(e)?e.join(""):""}o!==document.title&&(document.title=o),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),i=Number(r.content),a=[];for(let t=0,n=r.previousElementSibling;t<i;t++,n=(null==n?void 0:n.previousElementSibling)||null){var s;(null==n?void 0:null==(s=n.tagName)?void 0:s.toLowerCase())===e&&a.push(n)}let c=t.map(o).filter(e=>{for(let t=0,n=a.length;t<n;t++)if(l(a[t],e))return a.splice(t,1),!1;return!0});a.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),c.forEach(e=>n.insertBefore(e,r)),r.content=(i-a.length+c.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2185:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{requestIdleCallback:function(){return n},cancelIdleCallback:function(){return r}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5935:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{handleClientScriptLoad:function(){return p},initScriptLoader:function(){return y},default:function(){return v}});let r=n(6451),o=n(3364),l=r._(n(4887)),i=o._(n(2265)),a=n(3634),s=n(3313),c=n(2185),u=new Map,d=new Set,f=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],m=e=>{if(l.default.preinit){e.forEach(e=>{l.default.preinit(e,{as:"style"})});return}{let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},h=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:o=null,dangerouslySetInnerHTML:l,children:i="",strategy:a="afterInteractive",onError:c,stylesheets:h}=e,p=n||t;if(p&&d.has(p))return;if(u.has(t)){d.add(p),u.get(t).then(r,c);return}let y=()=>{o&&o(),d.add(p)},g=document.createElement("script"),v=new Promise((e,t)=>{g.addEventListener("load",function(t){e(),r&&r.call(this,t),y()}),g.addEventListener("error",function(e){t(e)})}).catch(function(e){c&&c(e)});for(let[n,r]of(l?(g.innerHTML=l.__html||"",y()):i?(g.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):"",y()):t&&(g.src=t,u.set(t,v)),Object.entries(e))){if(void 0===r||f.includes(n))continue;let e=s.DOMAttributeNames[n]||n.toLowerCase();g.setAttribute(e,r)}"worker"===a&&g.setAttribute("type","text/partytown"),g.setAttribute("data-nscript",a),h&&m(h),document.body.appendChild(g)};function p(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>h(e))}):h(e)}function y(e){e.forEach(p),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");d.add(t)})}function g(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:o=null,strategy:s="afterInteractive",onError:u,stylesheets:f,...m}=e,{updateScripts:p,scripts:y,getIsSsr:g,appDir:v,nonce:b}=(0,i.useContext)(a.HeadManagerContext),_=(0,i.useRef)(!1);(0,i.useEffect)(()=>{let e=t||n;_.current||(o&&e&&d.has(e)&&o(),_.current=!0)},[o,t,n]);let x=(0,i.useRef)(!1);if((0,i.useEffect)(()=>{!x.current&&("afterInteractive"===s?h(e):"lazyOnload"===s&&("complete"===document.readyState?(0,c.requestIdleCallback)(()=>h(e)):window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>h(e))})),x.current=!0)},[e,s]),("beforeInteractive"===s||"worker"===s)&&(p?(y[s]=(y[s]||[]).concat([{id:t,src:n,onLoad:r,onReady:o,onError:u,...m}]),p(y)):g&&g()?d.add(t||n):g&&!g()&&h(e)),v){if(f&&f.forEach(e=>{l.default.preinit(e,{as:"style"})}),"beforeInteractive"===s)return n?(l.default.preload(n,m.integrity?{as:"script",integrity:m.integrity}:{as:"script"}),i.default.createElement("script",{nonce:b,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n])+")"}})):(m.dangerouslySetInnerHTML&&(m.children=m.dangerouslySetInnerHTML.__html,delete m.dangerouslySetInnerHTML),i.default.createElement("script",{nonce:b,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...m}])+")"}}));"afterInteractive"===s&&n&&l.default.preload(n,m.integrity?{as:"script",integrity:m.integrity}:{as:"script"})}return null}Object.defineProperty(g,"__nextScript",{value:!0});let v=g;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6958:function(){},2981:function(){},6502:function(){},177:function(){},3819:function(){},622:function(e,t,n){"use strict";var r=n(2265),o=Symbol.for("react.element"),l=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,l={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,r)&&!s.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===l[r]&&(l[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:u,props:l,_owner:a.current}}t.Fragment=l,t.jsx=c,t.jsxs=c},7437:function(e,t,n){"use strict";e.exports=n(622)},4033:function(e,t,n){e.exports=n(5313)},4472:function(e,t,n){let r=n(7437);e.exports.i=r}},function(e){e.O(0,[311,971,938,744],function(){return e(e.s=3320)}),_N_E=e.O()}]);