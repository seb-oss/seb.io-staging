(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[162],{1097:function(e,s,t){Promise.resolve().then(t.bind(t,7528))},7528:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return v}});var n=t(7437),l=t(4033),a=t(290);t(9472);var i=t(2265),c=t(1396),r=t.n(c);function d(e){let{component:s}=e,t=(0,l.usePathname)();return(0,n.jsx)("div",{className:"taber",children:[{path:"",label:"Overview"},{path:"/design",label:"Design"},{path:"/ux-text",label:"UX text"},{path:"/code",label:"Code"},{path:"/accessibility",label:"Accessibility"}].map(e=>{let{path:l,label:a}=e;return(0,n.jsx)(r(),{href:s+l,className:t===s+l?"active":"",children:a},l)})})}var o=t(9162);t(7038);var u=e=>{let{home:s,separator:t,activeClass:a}=e,c=(0,l.usePathname)(),d=c.split("/").filter(e=>e);return(0,n.jsx)("div",{className:"trail",children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)(r(),{href:"/",children:s})}),d.length>0&&t,d.map((e,s)=>{let l="/".concat(d.slice(0,s+1).join("/")),o=c===l?" ".concat(a):e[0].toUpperCase()+e.slice(1,e.length);return(0,n.jsxs)(i.Fragment,{children:[(0,n.jsx)("li",{className:o,children:(0,n.jsx)(r(),{href:l,children:e})}),d.length!==s+1&&t]},s)})]})})};function h(e){let{children:s}=e;return(0,n.jsx)("section",{className:"layout component",children:s})}t(1163);var x=t(3311),p=t(8022),m=t(4493);function v(e){var s;let{children:t,params:i}=e,{slug:c}=i,r=(0,l.usePathname)(),v=e=>x.DD.find(s=>s.url_path==="/component/".concat(c).concat(e)),f=v(""),j=v("/accessibility"),g=v("/code"),y=v("/design"),C=v("/ux-text");f||(0,l.notFound)();let{title:N,url_path:b,tags:_,status:w,global_id:k,last_edited:L,summary:H,figma_hero_svg:E,preview:Z}=f,M=(0,n.jsx)(o.Z,{headings:null==f?void 0:f.headings,component:N});for(let{path:e,component:s}of[{path:"/accessibility",component:j},{path:"/code",component:g},{path:"/design",component:y},{path:"/ux-text",component:C}])if(r.includes(e)){M=(0,n.jsx)(o.Z,{headings:null==s?void 0:s.headings,component:N});break}let T=_?_.split(", "):[],I=Math.max(0,T.length-3);return(0,n.jsxs)(h,{children:[(0,n.jsx)(u,{home:"Home",separator:(0,n.jsx)("span",{children:" / "}),activeClass:"active"}),(0,n.jsxs)("header",{children:[(0,n.jsxs)("div",{className:"content",children:[(0,n.jsxs)("div",{className:"intro",children:[(0,n.jsx)("h1",{children:N}),(0,n.jsx)("p",{children:H})]}),(0,n.jsxs)("div",{className:"details",children:[(0,n.jsx)("div",{title:"Status",children:(0,n.jsx)("div",{className:"status",children:w})}),(0,n.jsx)("div",{title:"Tags",children:(0,n.jsxs)("menu",{children:[T.slice(0,3).map((e,s)=>(0,n.jsx)("div",{children:e},e)),I>0&&(0,n.jsx)("div",{className:"more",children:(0,n.jsx)("svg",{viewBox:"0 0 18 4",children:(0,n.jsx)("path",{d:"M11 2C11 3.10417 10.1042 4 9 4C7.89583 4 7 3.10417 7 2C7 0.895833 7.89583 0 9 0C10.1042 0 11 0.895833 11 2ZM16 0C14.8958 0 14 0.895833 14 2C14 3.10417 14.8958 4 16 4C17.1042 4 18 3.10417 18 2C18 0.895833 17.1042 0 16 0ZM2 0C0.895833 0 0 0.895833 0 2C0 3.10417 0.895833 4 2 4C3.10417 4 4 3.10417 4 2C4 0.895833 3.10417 0 2 0Z"})})})]})})]})]}),(0,n.jsx)(a.Z,{children:(null!==(s=null==Z?void 0:Z.trim())&&void 0!==s?s:"")?(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:"".concat(Z)}}):(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:E.svg}})})]}),(0,n.jsx)(d,{component:b}),(0,n.jsxs)("article",{children:[(0,n.jsx)("div",{className:"content",children:t}),M]}),(0,n.jsxs)("footer",{children:["Last updated: ",(0,n.jsx)("br",{}),(0,n.jsx)("time",{dateTime:L,title:"Last updated",children:(0,p.Z)((0,m.Z)(L),"d LLL, yyyy '/' HH:mm")})]})]},k)}},290:function(e,s,t){"use strict";t.d(s,{Z:function(){return a}});var n=t(7437),l=t(2265);function a(e){let{children:s,caption:t,height:a,content:i}=e,c=a?{"--gds-pattern-max-height":"".concat(a,"px")}:{},r=(0,l.useRef)(null);return(0,l.useEffect)(()=>{a&&r.current&&r.current.classList.add("custom")},[a]),(0,n.jsxs)(n.Fragment,{children:[i?(0,n.jsx)("figure",{ref:r,className:"preview","data-caption":t,style:c,dangerouslySetInnerHTML:{__html:i}}):(0,n.jsx)("figure",{ref:r,className:"preview","data-caption":t,style:c,children:s}),t&&(0,n.jsx)("span",{dangerouslySetInnerHTML:{__html:t}})]})}t(9027)},9162:function(e,s,t){"use strict";var n=t(7437),l=t(2265),a=t(1396),i=t.n(a);t(5e3);let c=()=>(0,n.jsx)("div",{className:"disclosure","aria-label":"Expand",tabIndex:0,children:(0,n.jsx)("svg",{viewBox:"0 0 24 24",children:(0,n.jsx)("polyline",{points:"6 9 12 15 18 9"})})});s.Z=e=>{let{headings:s,component:t}=e,[a,r]=(0,l.useState)("");(0,l.useRef)(null),(0,l.useEffect)(()=>{let e=()=>{let e=window.scrollY;for(let t=s.length-1;t>=0;t--){let n=s[t],l=document.getElementById(n.slug);if(l&&l.offsetTop<=e+161){r(n.slug);break}}};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[s]);let d=e=>{r(e)},o=s.reduce((e,t)=>{if(t.level>2){let s=e[e.length-1];if(Array.isArray(s))s.push(t);else throw Error("Level 3 and 4 headings should be after a level 2 heading.")}else if(2===t.level){let n=s.indexOf(t)+1;s[n]&&s[n].level>2?e.push([t]):e.push(t)}else e.push(t);return e},[]);return(0,n.jsxs)("aside",{className:"toc",children:[(0,n.jsx)("span",{children:"On this page"}),(0,n.jsxs)("nav",{"data-name":s.length>0?"On this page":"",children:[(0,n.jsx)(i(),{href:"#top","data-id":"top","data-level":"1",onClick:()=>d("top"),passHref:!0,children:t},"#top"),o.map((e,s)=>Array.isArray(e)?(0,n.jsxs)("details",{open:e.some(e=>e.slug===a),children:[(0,n.jsxs)("summary",{children:[(0,n.jsx)(i(),{href:"#".concat(e[0].slug),className:"toc-link ".concat(a===e[0].slug?"active":""),"data-id":e[0].slug,"data-level":e[0].level,onClick:()=>d(e[0].slug),passHref:!0,children:e[0].text},"#".concat(e[0].slug)),(0,n.jsx)(c,{})]}),e.slice(1).map(e=>(0,n.jsx)(i(),{href:"#".concat(e.slug),className:"toc-link ".concat(a===e.slug?"active":""),"data-id":e.slug,"data-level":e.level,onClick:()=>d(e.slug),passHref:!0,children:e.text},"#".concat(e.slug)))]},s):(0,n.jsx)(i(),{href:"#".concat(e.slug),className:"toc-link ".concat(a===e.slug?"active":""),"data-id":e.slug,"data-level":e.level,onClick:()=>d(e.slug),passHref:!0,children:e.text},"#".concat(e.slug)))]})]})}},9027:function(){},9472:function(){},5e3:function(){},7038:function(){},1163:function(){}},function(e){e.O(0,[250,474,311,971,938,744],function(){return e(e.s=1097)}),_N_E=e.O()}]);