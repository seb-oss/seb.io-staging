(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[162],{1097:function(e,t,n){Promise.resolve().then(n.bind(n,5452))},5452:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var s=n(7437),l=n(2265),i=n(4033),a=n(8475),c=n.n(a),r=n(290);n(2550);var o=n(1396),d=n.n(o);function h(e){let{component:t}=e,n=(0,i.usePathname)();return(0,s.jsx)("div",{className:"taber",children:[{path:"",label:"Overview"},{path:"/design",label:"Design"},{path:"/ux-text",label:"UX text"},{path:"/code",label:"Code"},{path:"/accessibility",label:"Accessibility"}].map(e=>{let{path:l,label:i}=e;return(0,s.jsx)(d(),{href:t+l,className:n===t+l?"active":"",children:i},l)})})}var u=n(9162);n(7038);var x=e=>{let{home:t,separator:n,activeClass:a}=e,c=(0,i.usePathname)(),r=c.split("/").filter(e=>e);return(0,s.jsx)("div",{className:"trail",children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)(d(),{href:"/",children:t})}),r.length>0&&n,r.map((e,t)=>{let i="/".concat(r.slice(0,t+1).join("/")),o=c===i?" ".concat(a):e[0].toUpperCase()+e.slice(1,e.length);return(0,s.jsxs)(l.Fragment,{children:[(0,s.jsx)("li",{className:o,children:(0,s.jsx)(d(),{href:i,children:e})}),r.length!==t+1&&n]},t)})]})})};function p(e){let{children:t}=e;return(0,s.jsx)("section",{className:"layout component",children:t})}n(1163);var m=n(3311),j=n(8022),v=n(4493);function f(e){var t;let{children:n,params:a}=e,{slug:o}=a,d=(0,i.usePathname)(),[f,g]=(0,l.useState)(!1),C=e=>m.DD.find(t=>t.url_path==="/component/".concat(o).concat(e)),N=C(""),b=C("/accessibility"),_=C("/code"),y=C("/design"),w=C("/ux-text");N||(0,i.notFound)();let{title:E,url_path:L,tags:S,status:k,global_id:Z,last_edited:H,summary:M,figma_hero_svg:T,preview:D}=N,I=(0,s.jsx)(u.Z,{headings:null==N?void 0:N.headings,component:E});for(let{path:e,component:t}of[{path:"/accessibility",component:b},{path:"/code",component:_},{path:"/design",component:y},{path:"/ux-text",component:w}])if(d.includes(e)){I=(0,s.jsx)(u.Z,{headings:null==t?void 0:t.headings,component:E});break}let O=S?S.split(", "):[],B=Math.max(0,O.length-3);return(0,s.jsxs)(p,{children:[(0,s.jsx)(x,{home:"Home",separator:(0,s.jsx)("span",{children:" / "}),activeClass:"active"}),(0,s.jsxs)("header",{children:[(0,s.jsxs)("div",{className:"content",children:[(0,s.jsxs)("div",{className:"intro",children:[(0,s.jsx)("h1",{children:E}),(0,s.jsx)("p",{children:M})]}),(0,s.jsxs)("div",{className:"details",children:[(0,s.jsx)("div",{title:"Status",children:(0,s.jsx)("div",{className:"status",children:k})}),(0,s.jsx)("div",{title:"Tags",children:(0,s.jsxs)("menu",{children:[O.slice(0,3).map((e,t)=>(0,s.jsx)("div",{children:e},e)),B>0&&(0,s.jsx)("div",{className:"more",children:(0,s.jsx)("svg",{viewBox:"0 0 18 4",children:(0,s.jsx)("path",{d:"M11 2C11 3.10417 10.1042 4 9 4C7.89583 4 7 3.10417 7 2C7 0.895833 7.89583 0 9 0C10.1042 0 11 0.895833 11 2ZM16 0C14.8958 0 14 0.895833 14 2C14 3.10417 14.8958 4 16 4C17.1042 4 18 3.10417 18 2C18 0.895833 17.1042 0 16 0ZM2 0C0.895833 0 0 0.895833 0 2C0 3.10417 0.895833 4 2 4C3.10417 4 4 3.10417 4 2C4 0.895833 3.10417 0 2 0Z"})})})]})})]})]}),(0,s.jsx)(r.Z,{children:f&&(null!==(t=null==D?void 0:D.trim())&&void 0!==t?t:"")!==""?(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:"".concat(D)}}):(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:T.svg}})})]}),(0,s.jsx)(h,{component:L}),(0,s.jsxs)("article",{children:[(0,s.jsx)("div",{className:"content",children:n}),I]}),(0,s.jsxs)("footer",{children:["Last updated: ",(0,s.jsx)("br",{}),(0,s.jsx)("time",{dateTime:H,title:"Last updated",children:(0,j.Z)((0,v.Z)(H),"d LLL, yyyy '/' HH:mm")})]}),(0,s.jsx)(c(),{id:"show-banner",children:"globalThis.GDS_DISABLE_VERSIONED_ELEMENTS = true"}),(0,s.jsx)(c(),{src:"/core-out.js",onLoad:()=>g(!0)})]},Z)}},290:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var s=n(7437);function l(e){let{children:t,caption:n,height:l}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("figure",{className:"preview","data-caption":n,style:l?{maxBlockSize:"".concat(l,"px"),minBlockSize:"".concat(l,"px"),aspectRatio:"initial",width:"auto",height:"auto",padding:"48px"}:{},children:t}),n&&(0,s.jsx)("span",{dangerouslySetInnerHTML:{__html:n}})]})}n(2265),n(3819)},9162:function(e,t,n){"use strict";var s=n(7437),l=n(2265),i=n(1396),a=n.n(i);n(785),t.Z=e=>{let{headings:t,component:n}=e,[i,c]=(0,l.useState)("");(0,l.useRef)(null),(0,l.useEffect)(()=>{let e=()=>{let e=window.scrollY;for(let n=t.length-1;n>=0;n--){let s=t[n],l=document.getElementById(s.slug);if(l&&l.offsetTop<=e+161){c(s.slug);break}}};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[t]);let r=e=>{c(e)};return(0,s.jsxs)("aside",{className:"toc",children:[(0,s.jsx)("span",{children:"On this page"}),(0,s.jsxs)("nav",{"data-name":t.length>0?"On this page":"",children:[(0,s.jsx)(a(),{href:"#top","data-id":"top","data-level":"1",onClick:()=>r("top"),passHref:!0,children:n},"#top"),t.map(e=>(0,s.jsx)(a(),{href:"#".concat(e.slug),className:"toc-link ".concat(i===e.slug?"active":""),"data-id":e.slug,"data-level":e.level,onClick:()=>r(e.slug),passHref:!0,children:e.text},"#".concat(e.slug)))]})]})}},3819:function(){},2550:function(){},785:function(){},7038:function(){},1163:function(){}},function(e){e.O(0,[250,658,904,311,971,938,744],function(){return e(e.s=1097)}),_N_E=e.O()}]);