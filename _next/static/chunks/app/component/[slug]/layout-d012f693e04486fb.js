(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[162],{1097:function(e,n,t){Promise.resolve().then(t.bind(t,6173))},6173:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return b}});var s=t(7437),l=t(4033);function a(e){let{label:n="Label",title:t}=e;return(0,s.jsxs)("div",{className:"gds-badge",children:[(0,s.jsx)("div",{className:"gds-badge-title",children:t}),(0,s.jsx)("span",{className:"gds-badge-label",children:n})]})}t(1271);var i=t(1433),c=t(290);t(9472);var r=t(2265),d=t(1396),o=t.n(d);function u(e){let{component:n}=e,t=(0,l.usePathname)();return(0,s.jsx)("div",{className:"taber",children:[{path:"",label:"Overview"},{path:"/design",label:"Design"},{path:"/ux-text",label:"UX text"},{path:"/code",label:"Code"},{path:"/accessibility",label:"Accessibility"}].map(e=>{let{path:l,label:a}=e;return(0,s.jsx)(o(),{href:n+l,className:t===n+l?"active":"",children:a},l)})})}function h(){return(0,s.jsx)("div",{className:"gds-tag gds-tags-more",children:(0,s.jsxs)("svg",{viewBox:"0 0 24 24",children:[(0,s.jsx)("circle",{cx:"12",cy:"12",r:"1"}),(0,s.jsx)("circle",{cx:"19",cy:"12",r:"1"}),(0,s.jsx)("circle",{cx:"5",cy:"12",r:"1"})]})})}t(4590);var x=e=>{let{tags:n,title:t,max:l=3}=e,a=Math.max(0,n.length-l);return(0,s.jsxs)("menu",{className:"gds-tags",children:[(0,s.jsx)("div",{className:"tags-title",children:t}),(0,s.jsxs)("ul",{children:[n.slice(0,l).map((e,n)=>(0,s.jsx)("div",{className:"gds-tag",children:e},e)),a>0&&(0,s.jsx)(h,{})]})]})},g=t(9162);t(7038);var f=e=>{let{home:n,separator:t,activeClass:a}=e,i=(0,l.usePathname)(),c=i.split("/").filter(e=>e);return(0,s.jsx)("div",{className:"trail",children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)(o(),{href:"/",children:n})}),c.length>0&&t,c.map((e,n)=>{let l="/".concat(c.slice(0,n+1).join("/")),d=i===l?" ".concat(a):e[0].toUpperCase()+e.slice(1,e.length);return(0,s.jsxs)(r.Fragment,{children:[(0,s.jsx)("li",{className:d,children:(0,s.jsx)(o(),{href:l,children:e})}),c.length!==n+1&&t]},n)})]})})},m=t(9323),p=t(3311),j=t(8022),v=t(4493);function b(e){var n;let{children:t,params:r}=e,{slug:d}=r,o=(0,l.usePathname)(),h=e=>p.DD.find(n=>n.url_path==="/component/".concat(d).concat(e)),b=h(""),y=h("/accessibility"),w=h("/code"),k=h("/design"),N=h("/ux-text");b||(0,l.notFound)();let{title:L,url_path:E,tags:_,status:H,global_id:S,last_edited:C,summary:T,figma_hero_svg:A,preview:I}=b,Z=(0,s.jsx)(g.Z,{headings:null==b?void 0:b.headings,component:L});for(let{path:e,component:n}of[{path:"/accessibility",component:y},{path:"/code",component:w},{path:"/design",component:k},{path:"/ux-text",component:N}])if(o.includes(e)){Z=(0,s.jsx)(g.Z,{headings:null==n?void 0:n.headings,component:L});break}let B=_?_.split(", "):[];return(0,s.jsx)(m.default,{layout:"component",children:(0,s.jsxs)(i.default,{columns:1,paddingBlock:"medium",paddingInline:"medium",children:[(0,s.jsx)(f,{home:"Home",separator:(0,s.jsx)("span",{children:" / "}),activeClass:"active"}),(0,s.jsxs)(i.default,{columns:6,tablet:2,mobile:1,gapBlock:"medium",children:[(0,s.jsx)("gds-cell",{span:"4",className:"content",children:(0,s.jsxs)(i.default,{columns:1,gapBlock:"small",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{children:L}),(0,s.jsx)("p",{children:T})]}),(0,s.jsxs)(i.default,{columns:2,children:[(0,s.jsx)(a,{title:"Status",label:H}),(0,s.jsx)(x,{title:"Tags",tags:B,max:1})]})]})}),(0,s.jsx)("gds-cell",{span:"2",children:(0,s.jsx)(c.Z,{children:(null!==(n=null==I?void 0:I.trim())&&void 0!==n?n:"")?(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:"".concat(I)}}):(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:A.svg}})})})]}),(0,s.jsx)(u,{component:E}),(0,s.jsxs)("article",{children:[(0,s.jsx)("div",{className:"content",children:t}),Z]}),(0,s.jsxs)("footer",{children:["Last updated: ",(0,s.jsx)("br",{}),(0,s.jsx)("time",{dateTime:C,title:"Last updated",children:(0,j.Z)((0,v.Z)(C),"d LLL, yyyy '/' HH:mm")})]})]})},S)}},1433:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return a}});var s=t(7437),l=t(2265);function a(e){let{children:n,gapBlock:t,gapInline:a,paddingBlock:i,paddingInline:c,mobile:r,tablet:d,columns:o=12,fluid:u,justify:h,align:x}=e;if(o<1||o>24)throw Error("The columns prop must be between 1 and 24.");let g=function(){let[e,n]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{let e=e=>{"Alt"===e.key&&n(!0)},t=e=>{"Alt"===e.key&&n(!1)};return window.addEventListener("keydown",e),window.addEventListener("keyup",t),()=>{window.removeEventListener("keydown",e),window.removeEventListener("keyup",t)}},[]),e}();return(0,s.jsx)("gds-grid",{...g?{debug:!0}:{},"gap-block":t,"gap-inline":a,"padding-block":i,"padding-inline":c,columns:o.toString(),...void 0!==r?{mobile:r.toString()}:{},...void 0!==d?{tablet:d.toString()}:{},fluid:u,justify:h,align:x,children:n})}t(5575),t(6976),t(2893),t(5834),t(8835)},290:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var s=t(7437),l=t(2265);function a(e){let{children:n,caption:t,height:a,content:i}=e,c=a?{"--gds-pattern-max-height":"".concat(a,"px")}:{},r=(0,l.useRef)(null);return(0,l.useEffect)(()=>{a&&r.current&&r.current.classList.add("custom")},[a]),(0,s.jsxs)(s.Fragment,{children:[i?(0,s.jsx)("figure",{ref:r,className:"preview","data-caption":t,style:c,dangerouslySetInnerHTML:{__html:i}}):(0,s.jsx)("figure",{ref:r,className:"preview","data-caption":t,style:c,children:n}),t&&(0,s.jsx)("span",{dangerouslySetInnerHTML:{__html:t}})]})}t(9027)},9162:function(e,n,t){"use strict";var s=t(7437),l=t(2265),a=t(1396),i=t.n(a);t(5e3);let c=()=>(0,s.jsx)("div",{className:"disclosure","aria-label":"Expand",tabIndex:0,children:(0,s.jsx)("svg",{viewBox:"0 0 24 24",children:(0,s.jsx)("polyline",{points:"6 9 12 15 18 9"})})});n.Z=e=>{let{headings:n,component:t}=e,[a,r]=(0,l.useState)("");(0,l.useRef)(null),(0,l.useEffect)(()=>{let e=()=>{let e=window.scrollY;for(let t=n.length-1;t>=0;t--){let s=n[t],l=document.getElementById(s.slug);if(l&&l.offsetTop<=e+161){r(s.slug);break}}};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[n]);let d=e=>{r(e)},o=n.reduce((e,t)=>{if(t.level>2){let n=e[e.length-1];if(Array.isArray(n))n.push(t);else throw Error("Level 3 and 4 headings should be after a level 2 heading.")}else if(2===t.level){let s=n.indexOf(t)+1;n[s]&&n[s].level>2?e.push([t]):e.push(t)}else e.push(t);return e},[]);return(0,s.jsxs)("aside",{className:"toc",children:[(0,s.jsx)("span",{children:"On this page"}),(0,s.jsxs)("nav",{"data-name":n.length>0?"On this page":"",children:[(0,s.jsx)(i(),{href:"#top","data-id":"top","data-level":"1",onClick:()=>d("top"),passHref:!0,children:t},"#top"),o.map((e,n)=>Array.isArray(e)?(0,s.jsxs)("details",{open:e.some(e=>e.slug===a),children:[(0,s.jsxs)("summary",{children:[(0,s.jsx)(i(),{href:"#".concat(e[0].slug),className:"toc-link ".concat(a===e[0].slug?"active":""),"data-id":e[0].slug,"data-level":e[0].level,onClick:()=>d(e[0].slug),passHref:!0,children:e[0].text},"#".concat(e[0].slug)),(0,s.jsx)(c,{})]}),e.slice(1).map(e=>(0,s.jsx)(i(),{href:"#".concat(e.slug),className:"toc-link ".concat(a===e.slug?"active":""),"data-id":e.slug,"data-level":e.level,onClick:()=>d(e.slug),passHref:!0,children:e.text},"#".concat(e.slug)))]},n):(0,s.jsx)(i(),{href:"#".concat(e.slug),className:"toc-link ".concat(a===e.slug?"active":""),"data-id":e.slug,"data-level":e.level,onClick:()=>d(e.slug),passHref:!0,children:e.text},"#".concat(e.slug)))]})]})}},9323:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var s=t(7437);function l(e){let{children:n,layout:t}=e;return(0,s.jsx)("section",{className:"layout-content ".concat("page-"+t),children:n})}t(5679)},1271:function(){},8835:function(){},2893:function(){},5575:function(){},6976:function(){},5834:function(){},9027:function(){},9472:function(){},4590:function(){},5e3:function(){},7038:function(){},5679:function(){}},function(e){e.O(0,[250,474,311,971,938,744],function(){return e(e.s=1097)}),_N_E=e.O()}]);