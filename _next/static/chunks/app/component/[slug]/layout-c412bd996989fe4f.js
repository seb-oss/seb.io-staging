(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8162],{5556:function(e,n,t){var r={"./":[2453,2453],"./badge":[2801,2840],"./badge.tsx":[2801,2840],"./breadcrumb":[2449,2449],"./breadcrumb.tsx":[2449,2449],"./button":[9408,9408],"./button.tsx":[9408,9408],"./calendar":[7056,7056],"./calendar.tsx":[7056,7056],"./card":[8139,8139],"./card.tsx":[8139,8139],"./coachmark":[1180,1180],"./coachmark.tsx":[1180,1180],"./container":[5497,5497],"./container.tsx":[5497,5497],"./context-menu":[5608,5608],"./context-menu.tsx":[5608,5608],"./datepicker":[224,224],"./datepicker.tsx":[224,224],"./dialog":[7459,7459],"./dialog.tsx":[7459,7459],"./divider":[4353,4353],"./divider.tsx":[4353,4353],"./dropdown":[1246,1246],"./dropdown.tsx":[1246,1246],"./fab":[1515,1515],"./fab.tsx":[1515,1515],"./filter-chips":[5600,5600],"./filter-chips.tsx":[5600,5600],"./flex":[5250,5250],"./flex.tsx":[5250,5250],"./grid":[4113,4113],"./grid.tsx":[4113,4113],"./icon":[7534,7534],"./icon.tsx":[7534,7534],"./image":[5052,5052],"./image.tsx":[5052,5052],"./index":[2453,2453],"./index.tsx":[2453,2453],"./input":[9753,9753],"./input.tsx":[9753,9753],"./link":[7429,7429],"./link.tsx":[7429,7429],"./mask":[7770,7770],"./mask.tsx":[7770,7770],"./menu-button":[9822,9822],"./menu-button.tsx":[9822,9822],"./popover":[2175,2175],"./popover.tsx":[2175,2175],"./rich-text":[523,523],"./rich-text.tsx":[523,523],"./segmented-control":[1378,1378],"./segmented-control.tsx":[1378,1378],"./spacer":[1230,1230],"./spacer.tsx":[1230,1230],"./text":[5245,5245],"./text.tsx":[5245,5245],"./textarea":[130,130],"./textarea.tsx":[130,130],"./validation":[924,924],"./validation.tsx":[924,924],"./video":[7739,7739],"./video.tsx":[7739,7739]};function l(e){if(!t.o(r,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=r[e],l=n[0];return t.e(n[1]).then(function(){return t(l)})}l.keys=function(){return Object.keys(r)},l.id=5556,e.exports=l},9256:function(e,n,t){Promise.resolve().then(t.bind(t,5053))},5053:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return p}});var r=t(7573),l=t(5259),i=t(4070),a=t(1695),s=t(7817),o=t(4779);t(7653);var c=e=>{let n,{home:t,separator:i,activeClass:c,slug:d}=e,u=(0,a.usePathname)().split("/").filter(e=>e).pop(),h=(n="/".concat(u),s.DD.find(e=>e.url_path==="/component/".concat(d).concat(n))),x=s.DD.find(e=>e.url_path==="/component/".concat(d));return(0,r.jsx)(o.GdsText,{"font-size":"detail-xs",children:(0,r.jsxs)(o.GdsFlex,{gap:"s","align-items":"center",children:[(0,r.jsx)(l.Link,{href:"/",children:t}),i,(0,r.jsx)(l.Link,{href:"/components",children:"Component"}),d&&(0,r.jsxs)(r.Fragment,{children:[i,(0,r.jsx)(l.Link,{href:"/component/"+d,children:null==x?void 0:x.title})]}),h&&(0,r.jsxs)(r.Fragment,{children:[i,(0,r.jsx)(l.Link,{href:"/",children:null==h?void 0:h.title})]})]})})},d=t(2832),u=t(9351);function h(e){let{component:n,links:t}=e,i=(0,a.usePathname)(),s=(0,l.T)();return(0,r.jsxs)(o.pT,{padding:"0",overflow:"hidden",position:"sticky",inset:"60px 0 0 0","z-index":"999",margin:"0",height:"60px",display:"none; m{flex}","border-radius":"xs",border:"0",children:[(0,r.jsx)(o.GdsFlex,{children:t.map(e=>{let{path:t,label:l,isPrivate:a}=e;return!a&&(0,r.jsx)(o.we,{onClick:()=>{s.push(n+t)},selected:i===n+t,children:l},t)})}),(0,r.jsx)(o.GdsContainer,{display:"block; m{none}",border:"0 0 4xs/primary 0",children:(0,r.jsx)(u.UQ,{children:(0,r.jsx)(u.Qd,{label:"Navigation",labelElementLevel:3,children:(0,r.jsx)(o.GdsFlex,{"flex-direction":"column",gap:"m",padding:"0 0 xl 0",children:t.map(e=>{let{path:t,label:i,isPrivate:a}=e;return!a&&(0,r.jsx)(l.Link,{href:n+t,children:i},t)})})})})})]})}var x=t(7138),f=t(7458);function p(e){let n,{children:u,params:p}=e,{slug:m}=p,b=(0,a.usePathname)(),g=e=>s.DD.find(n=>n.url_path==="/component/".concat(m).concat(e)),v=g(""),j=g("/accessibility"),k=g("/code"),w=g("/design"),G=g("/ux-text");v||(0,a.notFound)();let{title:y,url_path:P,tags:C,status:T,last_edited:F,summary:E}=v,I=(0,r.jsx)(d.Z,{headings:null==v?void 0:v.headings,component:y});for(let{path:e,component:n}of[{path:"/accessibility",component:j},{path:"/code",component:k},{path:"/design",component:w},{path:"/ux-text",component:G}])if(b.includes(e)){I=(0,r.jsx)(d.Z,{headings:null==n?void 0:n.headings,component:y});break}let L=C?C.split(", "):[],O=[{path:"",label:"Overview",isPrivate:!1},{path:"/design",label:"Design",isPrivate:(null==w?void 0:w.private)||!1},{path:"/ux-text",label:"UX text",isPrivate:(null==G?void 0:G.private)||!1},{path:"/code",label:"Code",isPrivate:(null==k?void 0:k.private)||!1},{path:"/accessibility",label:"Accessibility",isPrivate:(null==j?void 0:j.private)||!1}],D=(n=P.replace("/component/",""),(0,i.default)(()=>t(5556)("./".concat(n)).catch(()=>{let e=()=>(0,r.jsx)("div",{children:"Example not created"});return e.displayName="ExampleComponent",e}),{ssr:!1}));return(0,r.jsx)(o.GdsFlex,{"flex-direction":"column",width:"100%","justify-content":"center",margin:"0 auto",children:(0,r.jsxs)(o.GdsFlex,{gap:"l",children:[(0,r.jsxs)(o.GdsFlex,{width:"100%; l{80ch}","flex-direction":"column",gap:"2xl",children:[(0,r.jsx)(c,{home:"Home",separator:(0,r.jsx)(o.GdsText,{"font-size":"body-s",children:" / "}),slug:m}),(0,r.jsxs)(o.GdsFlex,{"flex-direction":"column",flex:"1",width:"100%",gap:"xl",children:[(0,r.jsx)(o.GdsFlex,{"justify-content":"space-between","align-items":"flex-start",gap:"xl",children:(0,r.jsxs)(o.GdsFlex,{"flex-direction":"column",gap:"xs",children:[(0,r.jsx)(o.GdsText,{tag:"h1",children:y}),(0,r.jsx)(o.GdsText,{tag:"p","text-wrap":"balance",className:"fade-in delay-200",children:E}),T&&(0,r.jsx)(o.cC,{variant:"notice",size:"small",children:T}),(0,r.jsx)(o.GdsFlex,{gap:"s",children:L.map(e=>(0,r.jsx)(l.Link,{href:"/tag/"+e,children:e},e))})]})}),(0,r.jsx)(o.pT,{children:(0,r.jsx)(o.GdsFlex,{gap:"xl","align-items":"center","justify-content":"center",height:"360px",children:(0,r.jsx)(D,{})})})]}),(0,r.jsx)(h,{component:P,links:O}),(0,r.jsx)(o.GdsFlex,{"flex-direction":"column",gap:"xl",children:u}),(0,r.jsxs)("footer",{children:["Last updated: ",(0,r.jsx)("br",{}),(0,r.jsx)("time",{dateTime:F,title:"Last updated",children:(0,x.Z)((0,f.Z)(F),"d LLL, yyyy '/' HH:mm")})]})]}),(0,r.jsx)(o.GdsFlex,{display:"none; l{flex}",width:"232px",children:I})]})})}},9351:function(e,n,t){"use strict";t.d(n,{Qd:function(){return c},UQ:function(){return s}});var r=t(7573),l=t(7653),i=t(4779),a=t(7242);function s(e){let{children:n}=e;return(0,r.jsx)("div",{className:"gds-accordion",children:n})}let o=e=>{let{isOpen:n}=e;return n?(0,r.jsx)(a.zE,{}):(0,r.jsx)(a.K1,{})};function c(e){let{labelElementLevel:n,label:t,id:a,subLabel:s,uuid:c=crypto.randomUUID(),onClick:d,onOpen:u,onClose:h,children:x}=e,[f,p]=(0,l.useState)(!1),m=e=>{d&&d(e),p(n=>(n?h&&h(e):u&&u(e),!n))};return a||(a="gds-accordion-item-button--".concat(c)),(0,r.jsxs)("div",{className:"gds-accordion-item",children:[(0,r.jsxs)(i.GdsFlex,{role:"heading","align-items":"center","justify-content":"space-between","aria-level":n,border:"4xs/primary 0 0 0",width:"100%",padding:"xs 0",children:[(0,r.jsx)(i.GdsContainer,{"user-select":"none",cursor:"pointer",onClick:e=>{m(e)},flex:"1",children:(0,r.jsx)(i.GdsText,{"font-size":"body-l",children:t})}),(0,r.jsx)(i.c2,{id:a,"aria-expanded":f,"aria-controls":"gds-accordion-item-region--".concat(c),onClick:e=>{m(e)},rank:"tertiary",children:(0,r.jsx)(o,{isOpen:f})})]}),(0,r.jsx)(i.GdsText,{role:"region",id:"gds-accordion-item-region--".concat(c),"aria-labelledby":a,hidden:!f,children:x})]})}},2832:function(e,n,t){"use strict";var r=t(7573),l=t(7653),i=t(8146),a=t(4779),s=t(7242);n.Z=e=>{let{headings:n,component:t}=e,[o,c]=(0,l.useState)(""),[d,u]=(0,l.useState)({});(0,l.useRef)(null),(0,l.useEffect)(()=>{let e=()=>{let e=window.scrollY;for(let t=n.length-1;t>=0;t--){let r=n[t],l=document.getElementById(r.slug);if(l&&l.offsetTop<=e+161){c(r.slug);break}}};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[n]);let h=e=>{c(e)},x=e=>{u(n=>({...n,[e]:!n[e]}))},f=n.reduce((e,t)=>{if(t.level>2){let n=e[e.length-1];if(Array.isArray(n))n.push(t);else throw Error("Level 3 and 4 headings should be after a level 2 heading.")}else if(2===t.level){let r=n.indexOf(t)+1;n[r]&&n[r].level>2?e.push([t]):e.push(t)}else e.push(t);return e},[]);return(0,r.jsx)(a.GdsFlex,{"flex-direction":"column",position:"sticky",inset:"60px 0 0 0",overflow:"hidden auto","max-height":"calc(100vh - 72px)",width:"100%",children:(0,r.jsxs)(a.pT,{padding:"m","max-height":"max-content",children:[(0,r.jsx)(a.GdsText,{tag:"span","font-size":"heading-xs",margin:"0 0 s",children:"On this page"}),(0,r.jsxs)(a.GdsFlex,{"flex-direction":"column",gap:"xs",children:[(0,r.jsx)(i.default,{href:"#top","data-id":"top","data-level":"1",onClick:()=>h("top"),passHref:!0,children:(0,r.jsx)(a.GdsText,{"font-size":"body-s",children:t})},"#top"),f.map((e,n)=>Array.isArray(e)?(0,r.jsxs)(a.GdsFlex,{"flex-direction":"column",children:[(0,r.jsxs)(a.GdsFlex,{"justify-content":"space-between","align-items":"center",children:[(0,r.jsx)(i.default,{href:"#".concat(e[0].slug),className:"toc-link ".concat(o===e[0].slug?"active":""),"data-id":e[0].slug,"data-level":e[0].level,onClick:()=>h(e[0].slug),passHref:!0,children:(0,r.jsx)(a.GdsText,{"font-size":"body-s","text-wrap":"balance","text-decoration":o===e[0].slug?"underline":"none",children:e[0].text})},"#".concat(e[0].slug)),(0,r.jsx)(a.GdsContainer,{transform:d[e[0].slug]?"scaleY(-1)":"none",children:(0,r.jsx)(a.c2,{size:"small",rank:"tertiary",onClick:()=>x(e[0].slug),children:(0,r.jsx)(s.FE,{})})})]}),d[e[0].slug]&&(0,r.jsx)(a.GdsFlex,{"flex-direction":"column",margin:"0 0 0 2xs",children:e.slice(1).map(e=>(0,r.jsx)(i.default,{href:"#".concat(e.slug),className:"toc-link ".concat(o===e.slug?"active":""),"data-id":e.slug,"data-level":e.level,onClick:()=>h(e.slug),passHref:!0,children:(0,r.jsx)(a.GdsFlex,{border:"0 0 0 ".concat(o===e.slug?"4xs/secondary":"4xs/primary"),padding:"xs m",children:(0,r.jsx)(a.GdsText,{"font-size":"body-s","text-decoration":o===e.slug?"underline":"none",children:e.text})})},"#".concat(e.slug)))})]},n):(0,r.jsx)(a.GdsFlex,{children:(0,r.jsx)(i.default,{href:"#".concat(e.slug),className:"toc-link ".concat(o===e.slug?"active":""),"data-id":e.slug,"data-level":e.level,onClick:()=>h(e.slug),passHref:!0,children:(0,r.jsx)(a.GdsText,{"text-decoration":o===e.slug?"underline":"none","font-size":"body-s",children:e.text})})},"#".concat(e.slug)))]})]})})}},7242:function(e,n,t){"use strict";t.d(n,{BD:function(){return v},C9:function(){return w},DL:function(){return k},Dg:function(){return x},FE:function(){return o},Fl:function(){return h},GP:function(){return u},H1:function(){return C},K1:function(){return p},O3:function(){return G},Qz:function(){return P},T:function(){return c},VG:function(){return a},ah:function(){return j},bB:function(){return s},bl:function(){return b},cD:function(){return T},i$:function(){return l},iU:function(){return f},oB:function(){return d},p$:function(){return i},un:function(){return y},zE:function(){return m},zc:function(){return g}});var r=t(4070);let l=(0,r.default)(()=>Promise.all([t.e(40),t.e(3964)]).then(t.bind(t,3964)).then(e=>e.IconEyeSlash),{loadableGenerated:{webpack:()=>[3964]},ssr:!1}),i=(0,r.default)(()=>Promise.all([t.e(40),t.e(7421)]).then(t.bind(t,7421)).then(e=>e.IconCainLink),{loadableGenerated:{webpack:()=>[7421]},ssr:!1}),a=(0,r.default)(()=>Promise.all([t.e(40),t.e(7007)]).then(t.bind(t,7007)).then(e=>e.IconChevronRight),{loadableGenerated:{webpack:()=>[7007]},ssr:!1}),s=(0,r.default)(()=>Promise.all([t.e(40),t.e(6791)]).then(t.bind(t,6791)).then(e=>e.IconChevronBottom),{loadableGenerated:{webpack:()=>[6791]},ssr:!1}),o=(0,r.default)(()=>Promise.all([t.e(40),t.e(856)]).then(t.bind(t,856)).then(e=>e.IconChevronTop),{loadableGenerated:{webpack:()=>[856]},ssr:!1}),c=(0,r.default)(()=>Promise.all([t.e(40),t.e(5528)]).then(t.bind(t,5528)).then(e=>e.IconBarsThree),{loadableGenerated:{webpack:()=>[5528]},ssr:!1}),d=(0,r.default)(()=>Promise.all([t.e(40),t.e(2810)]).then(t.bind(t,2810)).then(e=>e.IconBrandGithub),{loadableGenerated:{webpack:()=>[2810]},ssr:!1}),u=(0,r.default)(()=>Promise.all([t.e(40),t.e(1524)]).then(t.bind(t,1524)).then(e=>e.IconBrandSeb),{loadableGenerated:{webpack:()=>[1524]},ssr:!1}),h=(0,r.default)(()=>Promise.all([t.e(40),t.e(9121)]).then(t.bind(t,9121)).then(e=>e.IconMagnifyingGlass),{loadableGenerated:{webpack:()=>[9121]},ssr:!1}),x=(0,r.default)(()=>Promise.all([t.e(40),t.e(3732)]).then(t.bind(t,3732)).then(e=>e.IconPin),{loadableGenerated:{webpack:()=>[3732]},ssr:!1}),f=(0,r.default)(()=>Promise.all([t.e(40),t.e(6628)]).then(t.bind(t,6628)).then(e=>e.IconPlusSmall),{loadableGenerated:{webpack:()=>[6628]},ssr:!1}),p=(0,r.default)(()=>Promise.all([t.e(40),t.e(8084)]).then(t.bind(t,8084)).then(e=>e.IconPlusLarge),{loadableGenerated:{webpack:()=>[8084]},ssr:!1}),m=(0,r.default)(()=>Promise.all([t.e(40),t.e(6437)]).then(t.bind(t,6437)).then(e=>e.IconMinusLarge),{loadableGenerated:{webpack:()=>[6437]},ssr:!1}),b=(0,r.default)(()=>Promise.all([t.e(40),t.e(1646)]).then(t.bind(t,1646)).then(e=>e.IconCreditCard),{loadableGenerated:{webpack:()=>[1646]},ssr:!1}),g=(0,r.default)(()=>Promise.all([t.e(40),t.e(1114)]).then(t.bind(t,1114)).then(e=>e.IconRocket),{loadableGenerated:{webpack:()=>[1114]},ssr:!1}),v=(0,r.default)(()=>Promise.all([t.e(40),t.e(4410)]).then(t.bind(t,4410)).then(e=>e.IconArrowDown),{loadableGenerated:{webpack:()=>[4410]},ssr:!1}),j=(0,r.default)(()=>Promise.all([t.e(40),t.e(7589)]).then(t.bind(t,7589)).then(e=>e.IconCrossLarge),{loadableGenerated:{webpack:()=>[7589]},ssr:!1}),k=(0,r.default)(()=>Promise.all([t.e(40),t.e(2180)]).then(t.bind(t,2180)).then(e=>e.IconCheckmark),{loadableGenerated:{webpack:()=>[2180]},ssr:!1}),w=(0,r.default)(()=>Promise.all([t.e(40),t.e(739)]).then(t.bind(t,739)).then(e=>e.IconMoon),{loadableGenerated:{webpack:()=>[739]},ssr:!1}),G=(0,r.default)(()=>Promise.all([t.e(40),t.e(9845)]).then(t.bind(t,9845)).then(e=>e.IconSun),{loadableGenerated:{webpack:()=>[9845]},ssr:!1}),y=(0,r.default)(()=>Promise.all([t.e(40),t.e(6772)]).then(t.bind(t,6772)).then(e=>e.IconTextEdit),{loadableGenerated:{webpack:()=>[6772]},ssr:!1}),P=(0,r.default)(()=>Promise.all([t.e(40),t.e(3762)]).then(t.bind(t,3762)).then(e=>e.IconSquareInfo),{loadableGenerated:{webpack:()=>[3762]},ssr:!1}),C=(0,r.default)(()=>Promise.all([t.e(40),t.e(290)]).then(t.bind(t,290)).then(e=>e.IconSquareGridCircle),{loadableGenerated:{webpack:()=>[290]},ssr:!1}),T=(0,r.default)(()=>Promise.all([t.e(40),t.e(3815)]).then(t.bind(t,3815)).then(e=>e.IconBrandGreen),{loadableGenerated:{webpack:()=>[3815]},ssr:!1})},5259:function(e,n,t){"use strict";t.d(n,{Link:function(){return m},T:function(){return f},X:function(){return u}});var r=t(7573),l=t(8146),i=t(1695),a=t(7653);function s(){return window.location.hash}function o(){return""}function c(e){return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)}let d=(0,a.createContext)(()=>()=>{});function u(e){let{children:n}=e,[t,l]=(0,a.useState)(null);return(0,a.useEffect)(()=>{t&&(t(),l(null))},[t]),!function(){let e=(0,i.usePathname)(),n=(0,a.useRef)(e),[t,r]=(0,a.useState)(null);(0,a.useEffect)(()=>{if(!("startViewTransition"in document))return()=>{};let e=()=>{let e;let n=new Promise(n=>{e=n});r([new Promise(e=>{document.startViewTransition(()=>(e(),n))}),e])};return window.addEventListener("popstate",e),()=>{window.removeEventListener("popstate",e)}},[]),t&&n.current!==e&&(0,a.use)(t[0]);let l=(0,a.useRef)(t);(0,a.useEffect)(()=>{l.current=t},[t]);let d=(0,a.useSyncExternalStore)(c,s,o);(0,a.useEffect)(()=>{n.current=e,l.current&&(l.current[1](),l.current=null)},[d,e])}(),(0,r.jsx)(d.Provider,{value:l,children:n})}function h(){return(h=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function x(e,n){if(null==e)return{};var t,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}function f(){let e=(0,i.useRouter)(),n=(0,a.use)(d),t=(0,a.useCallback)(function(e){let{onTransitionReady:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!("startViewTransition"in document))return e();{let r=document.startViewTransition(()=>new Promise(t=>{(0,a.startTransition)(()=>{e(),n(()=>t)})}));t&&r.ready.then(t)}},[]),r=(0,a.useCallback)(function(n){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};var{onTransitionReady:l}=r,i=x(r,["onTransitionReady"]);t(()=>e.push(n,i),{onTransitionReady:l})},[t,e]),l=(0,a.useCallback)(function(n){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};var{onTransitionReady:l}=r,i=x(r,["onTransitionReady"]);t(()=>e.replace(n,i),{onTransitionReady:l})},[t,e]);return(0,a.useMemo)(()=>h({},e,{push:r,replace:l}),[r,l,e])}function p(){return(p=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function m(e){let n=f(),{href:t,as:i,replace:s,scroll:o}=e,c=(0,a.useCallback)(r=>{e.onClick&&e.onClick(r),"startViewTransition"in document&&!function(e){let{nodeName:n}=e.currentTarget;return!!("A"===n.toUpperCase()&&function(e){let n=e.currentTarget.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e))}(r)&&(r.preventDefault(),(s?n.replace:n.push)(i||t,{scroll:null==o||o}))},[e.onClick,t,i,s,o]);return(0,r.jsx)(l.default,p({},e,{onClick:c}))}},1695:function(e,n,t){"use strict";var r=t(1219);t.o(r,"notFound")&&t.d(n,{notFound:function(){return r.notFound}}),t.o(r,"usePathname")&&t.d(n,{usePathname:function(){return r.usePathname}}),t.o(r,"useRouter")&&t.d(n,{useRouter:function(){return r.useRouter}})}},function(e){e.O(0,[3384,303,6861,1293,1528,1744],function(){return e(e.s=9256)}),_N_E=e.O()}]);