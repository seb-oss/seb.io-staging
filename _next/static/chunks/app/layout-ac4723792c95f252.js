(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3185],{6737:function(e,n,t){Promise.resolve().then(t.bind(t,8369))},8369:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return A}});var i=t(7573),l=t(7653),s=t(7522),r=t(4779),a=t(7817),o=t(8098),c=t(9704);function d(e){let{isOpen:n,toggleCmd:t}=e,s=l.useRef(null),[a,o]=l.useState(""),[d,m]=l.useState(["home"]),p=d[d.length-1],x="home"===p;l.useEffect(()=>{let e=e=>{"k"===e.key&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),t())};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[]);let f=l.useCallback(()=>{m(e=>{let n=[...e];return n.splice(-1,1),n})},[]);function g(){s.current&&(s.current.style.transform="scale(0.96)",setTimeout(()=>{s.current&&(s.current.style.transform="")},100),o(""))}l.useCallback(e=>{x||a.length||"Backspace"!==e.key||(e.preventDefault(),f())},[a.length,x,f]);let b=["backdrop",n?"open":null].filter(Boolean);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:b.join(" ")}),(0,i.jsxs)(c.mY.Dialog,{ref:s,open:n,onOpenChange:t,className:"dark",label:"Global Command Menu",loop:!0,onKeyDown:e=>{"Enter"===e.key&&g(),x||a.length||"Backspace"!==e.key||(e.preventDefault(),f(),g())},children:[(0,i.jsx)("div",{children:d.map(e=>(0,i.jsx)(r.cC,{"cmdk-vercel-badge":"",children:e},e))}),(0,i.jsx)(c.mY.Input,{autoFocus:!0,placeholder:"What do you need?",onValueChange:e=>{o(e)}}),(0,i.jsxs)(c.mY.List,{children:[(0,i.jsx)(c.mY.Empty,{children:"No results found."}),"home"===p&&(0,i.jsx)(u,{searchComponents:()=>m([...d,"components"])}),"components"===p&&(0,i.jsx)(h,{})]})]})]})}function u(e){let{searchComponents:n}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.mY.Group,{heading:"Components",children:(0,i.jsx)(m,{shortcut:"S P",onSelect:()=>{n()},children:"Search Components..."})}),(0,i.jsxs)(c.mY.Group,{heading:"Styling",children:[(0,i.jsx)(m,{shortcut:"⇧ D",children:"Colors"}),(0,i.jsx)(m,{children:"Size"}),(0,i.jsx)(m,{children:"Typography"})]}),(0,i.jsx)(c.mY.Group,{heading:"Foundation",children:(0,i.jsx)(m,{shortcut:"⇧ A",children:"Accesibility"})}),(0,i.jsxs)(c.mY.Group,{heading:"UX writing",children:[(0,i.jsx)(m,{shortcut:"⇧ G",children:"General"}),(0,i.jsx)(m,{shortcut:"⇧ E",children:"English"}),(0,i.jsx)(m,{shortcut:"⇧ S",children:"Swedish"})]}),(0,i.jsxs)(c.mY.Group,{heading:"About",children:[(0,i.jsx)(m,{shortcut:"⇧ C",children:"Changelog"}),(0,i.jsx)(m,{shortcut:"⇧ L",children:"Status"})]})]})}function h(){let e=a.DD.filter(e=>"index.mdx"===e._raw.sourceFileName&&(e.private&&o.r,!0)).sort((e,n)=>e.title.localeCompare(n.title));return(0,i.jsx)(i.Fragment,{children:e.map((e,n)=>(0,i.jsx)(m,{onSelect:()=>{console.log("Selected:",e.title)},children:e.title},n))})}function m(e){let{children:n,shortcut:t,onSelect:l=()=>{console.log("Selected:",n)}}=e;return(0,i.jsxs)(c.mY.Item,{onSelect:l,children:[n,t&&(0,i.jsx)("div",{"cmdk-vercel-shortcuts":"",children:t.split(" ").map(e=>(0,i.jsx)("kbd",{children:e},e))})]})}t(5889);var p=t(6846);let x=(0,l.createContext)({theme:"light",setTheme:()=>{console.warn("setTheme function is not implemented")},isOpen:!1,isNavOpen:!1,toggleNav:()=>{console.warn("toggleNav function is not implemented")},toggleCmd:()=>{console.warn("toggleCmd function is not implemented")},toggleTheme:()=>{console.warn("toggleTheme function is not implemented")}});function f(e){let{children:n}=e,[t,s]=(0,l.useState)("light"),[r,a]=(0,l.useState)(!1),[o,c]=(0,l.useState)(!1),u=()=>{c(e=>{let n=!e;return localStorage.setItem("navOpen",n?"true":"false"),n})},h=()=>{a(e=>!e)};return(0,l.useEffect)(()=>{c("true"===localStorage.getItem("navOpen"));let e=e=>{let n=e.target,t=Array.from(document.querySelectorAll("input, textarea"));"m"===e.key&&!1===t.includes(n)&&(e.stopPropagation(),u())};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}},[]),(0,i.jsxs)(x.Provider,{value:{theme:t,setTheme:s,isOpen:r,isNavOpen:o,toggleNav:u,toggleCmd:h,toggleTheme:()=>{s(e=>{let n="light"===e?"dark":"light";return localStorage.setItem("theme",n),document.documentElement.setAttribute("gds-theme",n),n})}},children:[n,(0,i.jsx)(p.x7,{richColors:!0,theme:"light",position:"bottom-center",expand:!1,closeButton:!0,duration:4428}),(0,i.jsx)(d,{isOpen:r,toggleCmd:h})]})}var g=t(1695),b=t(7242),k=t(1967);t(7618);let j=[{title:"Components",path:"/components",icon:(0,i.jsx)(b.H1,{}),subLinks:a.DD.filter(e=>"index.mdx"===e._raw.sourceFileName).filter(e=>!(e.private&&!o.r)).sort((e,n)=>e.title.localeCompare(n.title)).map(e=>({title:e.title,path:e.url_path,badge:e.status||void 0,private:!!e.private}))},{title:"Foundation",path:"/foundation",icon:(0,i.jsx)(b.cD,{}),subLinks:[]},{title:"UX Writing",path:"/ux-writing",icon:(0,i.jsx)(b.un,{}),subLinks:[]},{title:"About",path:"/about",icon:(0,i.jsx)(b.Qz,{}),subLinks:[]}];function w(){let e=(0,g.usePathname)(),[n,t]=(0,l.useState)(!1),{toggleNav:s}=(0,l.useContext)(x),a=j.find(n=>{let t=e.split("/");return!!((t.includes("component")||t.includes("components"))&&n.path.includes("component"))||e===n.path});return(0,i.jsx)(r.pT,{height:"calc(100vh - 72px)","align-items":"flex-start","flex-direction":"column",margin:"0 s; m{0 0 0 s}","z-index":"99",padding:"none",position:"fixed; m{sticky}",inset:"60px 0 0 0","max-height":"calc(100vh - 60px)",overflow:"hidden","min-width":"270px",children:(0,i.jsxs)(r.GdsFlex,{"flex-direction":"column","max-height":"100%",children:[(0,i.jsx)(r.GdsContainer,{padding:"xs","min-width":"250px",border:"0 0 4xs 0","border-color":"primary",style:{boxShadow:n?"0px 0px 8px 4px #00000015, 0px 3px 2px 0px #00000005":"none",transition:"box-shadow .25s ease-out"},children:(0,i.jsx)(r.GdsFlex,{"align-items":"flex-start","flex-direction":"column",gap:"4xs",children:j.map((n,t)=>(0,i.jsx)(r.GdsFlex,{"flex-direction":"column","min-width":"100%",children:(0,i.jsx)(k.default,{href:n.path,className:"sidebar-link ".concat(n.path===e?"active":""),variant:"secondary",onClick:()=>{window.innerWidth<1024&&s()},children:(0,i.jsxs)(r.GdsFlex,{"align-content":"center",gap:"s",padding:"xs s",children:[n.icon&&n.icon,n.title]})})},t))})}),(0,i.jsx)(r.GdsContainer,{padding:"xs",overflow:"scroll",onScroll:e=>{if(0===e.target.scrollTop)t(!1);else{if(n)return;t(!0)}},children:(0,i.jsx)(r.GdsFlex,{"flex-direction":"column",gap:"4xs",children:a&&a.subLinks.map((n,t)=>(0,i.jsx)(k.default,{href:n.path,className:"sidebar-link sidebar-link--sub ".concat(n.path===e?"active":""),variant:"hidden",onClick:()=>{window.innerWidth<1024&&s()},children:(0,i.jsxs)(r.GdsFlex,{"justify-content":"space-between",padding:"xs s",gap:"xs",width:"100%",children:[(0,i.jsxs)(r.GdsFlex,{"align-items":"center",gap:"s",children:[(0,i.jsx)(r.GdsFlex,{"align-items":"center",width:"19px",children:n.private&&(0,i.jsx)(b.i$,{width:12,height:12})}),n.title]}),(0,i.jsx)(r.GdsFlex,{"align-items":"center",gap:"xs",children:n.badge&&(0,i.jsx)(r.cC,{variant:"notice",size:"small",children:n.badge})})]},t)},t))})})]})})}function y(e){let{children:n}=e,{toggleNav:t,isNavOpen:s}=(0,l.useContext)(x);return(0,i.jsxs)(r.GdsFlex,{"align-items":"flex-start","flex-direction":"xs{column} s{column} m{row}",children:[s&&(0,i.jsx)(w,{}),(0,i.jsx)(r.GdsFlex,{padding:"s; s{l} m{0 l}","flex-direction":"column",width:"100%; m{960px} l{calc(80ch + var(--gds-space-l) + 240px)}",margin:"0 auto",gap:"2xl; s{8xl}",children:n})]})}t(1661);var v={current_lang:"en",autoclear_cookies:!0,page_scripts:!0,cookie_name:"GDS Cookie Consent",remove_cookie_tables:!0,onFirstAction:function(e,n){window.CookieConsentApi.allowedCategory("analytics")},onAccept:function(e){window.CookieConsentApi.allowedCategory("analytics")},onChange:function(e,n){},languages:{en:{consent_modal:{title:"We use cookies!",description:'Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. <button type="button" data-cc="c-settings" class="cc-link">Let me choose</button>',primary_btn:{text:"Accept all",role:"accept_all"},secondary_btn:{text:"Reject all",role:"accept_necessary"}},settings_modal:{title:"Cookie Settings",save_settings_btn:"Save settings",accept_all_btn:"Accept all",reject_all_btn:"Reject all",close_btn_label:"Close",cookie_table_headers:[{col1:"Name"},{col2:"Domain"},{col3:"Expiration"},{col4:"Description"}],blocks:[{title:"Cookie usage \uD83D\uDCE2",description:"Our website utilizes analytics solely for testing purposes and to track page views. These analytics cookies are crucial for ensuring the smooth functioning of our site. Please be assured that the data collected is not used for marketing or any other purposes beyond website optimization."},{title:"Basic cookies",description:"Tracking page views and other essential functions",toggle:{value:"necessary",enabled:!0,readonly:!0}}]}}}};t(3601);var C=()=>((0,l.useEffect)(()=>{document.getElementById("cc--main")||(window.CookieConsentApi=window.initCookieConsent(),window.CookieConsentApi.run(v))},[]),null),G=()=>{(0,l.useEffect)(()=>{let e=()=>{let e;try{e=window.initCookieConsent()}catch(e){console.error(e)}e&&e.run({})};if("seb.io"===location.hostname&&document.cookie.split("; ").find(e=>e.startsWith("GDS Cookie Consent"))){let n=document.createElement("script");n.src="https://content.seb.se/dsc/da/launch/public/30e54a9d6c99/f9d07ef22744/launch-89d260357525.min.js",n.type="application/javascript",document.head.appendChild(n);let t=setTimeout(()=>{e()},1e3);return()=>{clearTimeout(t)}}},[])},S=t(7523),P=t.n(S);P().variable;var E=P();function I(e){let{children:n}=e,[t,i]=(0,l.useState)(!1);return((0,l.useEffect)(()=>{if("adoptedStyleSheets"in document){let e=new CSSStyleSheet;e.replaceSync("\n        :root { \n            --gds-font-family: ".concat(E.style.fontFamily,";\n        }\n        ")),document.adoptedStyleSheets=[...document.adoptedStyleSheets,e],i(!0)}},[]),t)?n:null}function _(){let e="#000",n='\n    <svg xmlns="http://www.w3.org/2000/svg" fill="'.concat(e,'" width="80" height="60" viewBox="0 0 80 60">\n      <rect width="80" height="60" fill="').concat("#fff",'" rx="8"/>\n      <path fill="').concat(e,'" d="m26.87 24.123-2.95 2.197c-1.387-1.2-3.187-1.43-4.178-1.43-.997 0-2.046.288-2.205 1.004-.159.694.492 1.236 1.605 1.54 1.272.34 2.422.643 4.207 1.15 2.646.758 4.46 1.9 4.46 4.553 0 3.665-3.252 5.56-7.604 5.56s-7.316-2.264-8.205-3.32l3.116-2.327c2.19 1.908 3.708 2.176 4.98 2.176 1.46 0 2.827-.311 3-1.135.145-.665-.404-1.193-1.648-1.482-1.402-.326-2.595-.586-3.918-.933-3.593-.939-4.605-3.028-4.605-4.906 0-2.581 2.4-5.234 6.803-5.234 4.503 0 7.142 2.579 7.142 2.587Zm18.788-2.328H32.516v16.417h13.38v-3.788h-8.768v-2.646h6.036v-3.621h-6.036V25.54h8.523v-3.745h.007ZM29.118 42h1.02V18h-1.02v24Zm18.506 0h1.02V18h-1.02v24Zm3.398-3.788h10.554c2.82 0 5.11-1.699 5.11-4.424 0-2.125-1.387-3.535-3.339-4.157a.837.837 0 0 0-.188-.021c.065-.008.13-.015.188-.037 1.12-.44 2.35-1.619 2.35-3.621 0-2.545-2.249-4.164-5.025-4.164h-9.657l.007 16.424Zm4.633-13.005h3.687c.846 0 1.533.673 1.533 1.439s-.687 1.446-1.533 1.446h-3.687v-2.885Zm4.504 9.362h-4.51v-2.993h4.51c.795 0 1.446.643 1.446 1.496 0 .846-.644 1.497-1.446 1.497Z"/>\n    </svg>\n  '),t="data:image/svg+xml,".concat(encodeURIComponent(n));return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("link",{rel:"icon",type:"image/svg+xml",href:t})})}function F(){let e=new Date().getFullYear(),n="".concat("\xa9","  ").concat(e," Green Design System");return(0,i.jsx)(r.GdsFlex,{"flex-direction":"column",padding:"l 0;",gap:"2xl; s{5xl}",border:"4xs/primary 0 0 0",children:(0,i.jsxs)(r.GdsFlex,{"justify-content":"space-between","align-items":"center",children:[n,(0,i.jsx)(r.c2,{"data-cc":"c-settings",rank:"tertiary",children:"Cookie preferences"})]})})}var D=t(8146);function T(){let{theme:e,toggleTheme:n}=(0,l.useContext)(x);return l.useEffect(()=>{let e=e=>{"\\"===e.key&&e.target instanceof HTMLElement&&"INPUT"!==e.target.tagName&&"TEXTAREA"!==e.target.tagName&&n()};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}},[n]),(0,i.jsx)(r.c2,{onClick:()=>{n()},"aria-label":"Toggle ".concat("dark"===e?"Light":"Dark"," Theme"),rank:"tertiary",size:"small",children:"dark"===e?(0,i.jsx)(()=>(0,i.jsx)(b.O3,{}),{}):(0,i.jsx)(()=>(0,i.jsx)(b.C9,{}),{})})}let L=(0,l.forwardRef)((e,n)=>{let{...t}=e,{toggleNav:s,isNavOpen:a,toggleCmd:o}=(0,l.useContext)(x),[c,d]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{d(-1!==window.navigator.userAgent.indexOf("Windows"))},[]),(0,i.jsx)(r.GdsContainer,{level:"1",position:"sticky",inset:"0","z-index":"1100",background:"primary",children:(0,i.jsxs)(r.GdsFlex,{"justify-content":"space-between","min-width":"100%","align-items":"center",height:"60px","padding-inline":"s",children:[!0===a?(0,i.jsxs)(r.c2,{onClick:s,rank:"tertiary",size:"small",children:[(0,i.jsx)(b.ah,{slot:"lead"}),"Menu"]}):(0,i.jsxs)(r.c2,{onClick:s,rank:"tertiary",size:"small",children:[(0,i.jsx)(b.T,{slot:"lead"}),"Menu"]}),(0,i.jsx)(r.GdsContainer,{position:"absolute",margin:"0 auto",inset:"auto 0","max-width":"max-content",children:(0,i.jsx)(D.default,{href:"/",children:(0,i.jsx)(b.GP,{})})}),(0,i.jsxs)(r.GdsFlex,{height:"100%",padding:"0; s{0 l}","align-items":"center",gap:"2xs",children:[(0,i.jsx)(r.GdsContainer,{display:"none; s{block}",children:(0,i.jsxs)(r.c2,{onClick:o,rank:"tertiary",size:"small",children:[(0,i.jsx)(b.Fl,{slot:"lead"}),c?"/":"⌘K"]})}),(0,i.jsx)(r.c2,{href:"https://github.com/sebgroup/green",target:"_blank",rank:"tertiary",size:"small",children:(0,i.jsx)(b.oB,{})}),(0,i.jsx)(T,{})]})]})})});function A(e){let{children:n}=e;return G(),(0,l.useEffect)(()=>{let e=localStorage.getItem("theme");e&&document.documentElement.setAttribute("gds-theme",e)},[]),(0,i.jsx)("html",{lang:"en",suppressHydrationWarning:!0,children:(0,i.jsxs)("body",{children:[(0,i.jsxs)(f,{children:[(0,i.jsx)(_,{}),(0,i.jsx)(I,{children:(0,i.jsxs)(r.GdsFlex,{"flex-direction":"column",children:[(0,i.jsx)(L,{}),(0,i.jsxs)(y,{children:[n,(0,i.jsx)(C,{}),(0,i.jsx)(F,{})]})]})})]}),(0,i.jsx)(s.default,{id:"data-layer",children:'window["dataLayer"] = {\n            "pageName":"seb.io",\n            "pagetype":"StandardPage",\n            "language":"en",\n            "environment":"prod",\n            "project":"green",\n            "website":"seb.io",\n          };'})]})})}L.displayName="Header",t(1900)},1967:function(e,n,t){"use strict";var i=t(7573),l=t(7653),s=t(8146),r=t(4779);let a=l.forwardRef((e,n)=>{let{onClick:t,href:l,children:s,menu:a,...o}=e;return a?(0,i.jsx)(r.we,{href:l,onClick:t,ref:n,...o,children:s}):(0,i.jsx)(r.id,{href:l,onClick:t,ref:n,...o,children:s})});n.default=e=>{let{href:n,...t}=e;return(0,i.jsx)(s.default,{href:n,passHref:!0,legacyBehavior:!0,children:(0,i.jsx)(a,{...t})})}},8098:function(e,n,t){"use strict";t.d(n,{r:function(){return i}}),t(7573);let i=!1},7242:function(e,n,t){"use strict";t.d(n,{BD:function(){return k},C9:function(){return y},DL:function(){return w},Dg:function(){return m},FE:function(){return o},Fl:function(){return h},GP:function(){return u},H1:function(){return S},K1:function(){return x},O3:function(){return v},Qz:function(){return G},T:function(){return c},VG:function(){return r},ah:function(){return j},bB:function(){return a},bl:function(){return g},cD:function(){return P},i$:function(){return l},iU:function(){return p},oB:function(){return d},p$:function(){return s},un:function(){return C},zE:function(){return f},zc:function(){return b}});var i=t(4070);let l=(0,i.default)(()=>Promise.all([t.e(40),t.e(3964)]).then(t.bind(t,3964)).then(e=>e.IconEyeSlash),{loadableGenerated:{webpack:()=>[3964]},ssr:!1}),s=(0,i.default)(()=>Promise.all([t.e(40),t.e(7421)]).then(t.bind(t,7421)).then(e=>e.IconCainLink),{loadableGenerated:{webpack:()=>[7421]},ssr:!1}),r=(0,i.default)(()=>Promise.all([t.e(40),t.e(7007)]).then(t.bind(t,7007)).then(e=>e.IconChevronRight),{loadableGenerated:{webpack:()=>[7007]},ssr:!1}),a=(0,i.default)(()=>Promise.all([t.e(40),t.e(6791)]).then(t.bind(t,6791)).then(e=>e.IconChevronBottom),{loadableGenerated:{webpack:()=>[6791]},ssr:!1}),o=(0,i.default)(()=>Promise.all([t.e(40),t.e(856)]).then(t.bind(t,856)).then(e=>e.IconChevronTop),{loadableGenerated:{webpack:()=>[856]},ssr:!1}),c=(0,i.default)(()=>Promise.all([t.e(40),t.e(5528)]).then(t.bind(t,5528)).then(e=>e.IconBarsThree),{loadableGenerated:{webpack:()=>[5528]},ssr:!1}),d=(0,i.default)(()=>Promise.all([t.e(40),t.e(2810)]).then(t.bind(t,2810)).then(e=>e.IconBrandGithub),{loadableGenerated:{webpack:()=>[2810]},ssr:!1}),u=(0,i.default)(()=>Promise.all([t.e(40),t.e(1524)]).then(t.bind(t,1524)).then(e=>e.IconBrandSeb),{loadableGenerated:{webpack:()=>[1524]},ssr:!1}),h=(0,i.default)(()=>Promise.all([t.e(40),t.e(9121)]).then(t.bind(t,9121)).then(e=>e.IconMagnifyingGlass),{loadableGenerated:{webpack:()=>[9121]},ssr:!1}),m=(0,i.default)(()=>Promise.all([t.e(40),t.e(3732)]).then(t.bind(t,3732)).then(e=>e.IconPin),{loadableGenerated:{webpack:()=>[3732]},ssr:!1}),p=(0,i.default)(()=>Promise.all([t.e(40),t.e(6628)]).then(t.bind(t,6628)).then(e=>e.IconPlusSmall),{loadableGenerated:{webpack:()=>[6628]},ssr:!1}),x=(0,i.default)(()=>Promise.all([t.e(40),t.e(8084)]).then(t.bind(t,8084)).then(e=>e.IconPlusLarge),{loadableGenerated:{webpack:()=>[8084]},ssr:!1}),f=(0,i.default)(()=>Promise.all([t.e(40),t.e(6437)]).then(t.bind(t,6437)).then(e=>e.IconMinusLarge),{loadableGenerated:{webpack:()=>[6437]},ssr:!1}),g=(0,i.default)(()=>Promise.all([t.e(40),t.e(1646)]).then(t.bind(t,1646)).then(e=>e.IconCreditCard),{loadableGenerated:{webpack:()=>[1646]},ssr:!1}),b=(0,i.default)(()=>Promise.all([t.e(40),t.e(1114)]).then(t.bind(t,1114)).then(e=>e.IconRocket),{loadableGenerated:{webpack:()=>[1114]},ssr:!1}),k=(0,i.default)(()=>Promise.all([t.e(40),t.e(4410)]).then(t.bind(t,4410)).then(e=>e.IconArrowDown),{loadableGenerated:{webpack:()=>[4410]},ssr:!1}),j=(0,i.default)(()=>Promise.all([t.e(40),t.e(7589)]).then(t.bind(t,7589)).then(e=>e.IconCrossLarge),{loadableGenerated:{webpack:()=>[7589]},ssr:!1}),w=(0,i.default)(()=>Promise.all([t.e(40),t.e(2180)]).then(t.bind(t,2180)).then(e=>e.IconCheckmark),{loadableGenerated:{webpack:()=>[2180]},ssr:!1}),y=(0,i.default)(()=>Promise.all([t.e(40),t.e(739)]).then(t.bind(t,739)).then(e=>e.IconMoon),{loadableGenerated:{webpack:()=>[739]},ssr:!1}),v=(0,i.default)(()=>Promise.all([t.e(40),t.e(9845)]).then(t.bind(t,9845)).then(e=>e.IconSun),{loadableGenerated:{webpack:()=>[9845]},ssr:!1}),C=(0,i.default)(()=>Promise.all([t.e(40),t.e(6772)]).then(t.bind(t,6772)).then(e=>e.IconTextEdit),{loadableGenerated:{webpack:()=>[6772]},ssr:!1}),G=(0,i.default)(()=>Promise.all([t.e(40),t.e(3762)]).then(t.bind(t,3762)).then(e=>e.IconSquareInfo),{loadableGenerated:{webpack:()=>[3762]},ssr:!1}),S=(0,i.default)(()=>Promise.all([t.e(40),t.e(290)]).then(t.bind(t,290)).then(e=>e.IconSquareGridCircle),{loadableGenerated:{webpack:()=>[290]},ssr:!1}),P=(0,i.default)(()=>Promise.all([t.e(40),t.e(3815)]).then(t.bind(t,3815)).then(e=>e.IconBrandGreen),{loadableGenerated:{webpack:()=>[3815]},ssr:!1})},5889:function(){},7618:function(){},1900:function(){},3601:function(){}},function(e){e.O(0,[3053,3384,9055,6861,1293,1528,1744],function(){return e(e.s=6737)}),_N_E=e.O()}]);