(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7561:function(){},7994:function(e,t,n){Promise.resolve().then(n.t.bind(n,46,23)),Promise.resolve().then(n.bind(n,6441)),Promise.resolve().then(n.bind(n,1433)),Promise.resolve().then(n.bind(n,3991)),Promise.resolve().then(n.bind(n,8393)),Promise.resolve().then(n.bind(n,9323))},5645:function(e,t,n){"use strict";var r=n(7437),i=n(2265),s=n(1396),o=n.n(s);n(9753);let c=(0,i.forwardRef)((e,t)=>{let{children:n,href:i,className:s="",target:c,variant:a="default",...l}=e,u="gds-card ".concat(s," ").concat("cta"===a?"gds-card-cta":"");return(0,r.jsx)(o(),{href:i,ref:t,className:u,target:c,...l,children:n})});c.displayName="Card",t.Z=c},6441:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(7437),i=n(5645),s=n(290);function o(e){var t,n,o;return(0,r.jsxs)(i.Z,{href:e.url_path,children:[(null!==(n=null===(t=e.preview)||void 0===t?void 0:t.trim())&&void 0!==n?n:"")?(0,r.jsx)(s.Z,{height:"240",content:null!==(o=e.preview)&&void 0!==o?o:""}):(0,r.jsx)(s.Z,{height:"240",content:e.figma_hero_svg.svg}),(0,r.jsx)("div",{className:"gds-card-title",children:e.title}),(0,r.jsx)("p",{className:"gds-card-excerpt",children:e.summary})]})}n(8159);var c=n(1433),a=n(3311);function l(e){let{title:t}=e,n=a.DD.filter(e=>"index.mdx"===e._raw.sourceFileName).sort((e,t)=>e.title.localeCompare(t.title));return(0,r.jsxs)("section",{className:"component-list",children:[t&&(0,r.jsx)("h2",{children:t}),(0,r.jsx)(c.default,{columns:3,mobile:2,tablet:1,gapInline:"medium",gapBlock:"medium",children:n.map((e,t)=>(0,r.jsx)(o,{...e},t))})]})}n(5969)},1433:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(7437),i=n(2265);function s(e){let{children:t,gapBlock:n,gapInline:s,paddingBlock:o,paddingInline:c,mobile:a,tablet:l,columns:u=12,fluid:d,justify:f,align:h}=e;if(u<1||u>24)throw Error("The columns prop must be between 1 and 24.");let m=function(){let[e,t]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{let e=e=>{"Alt"===e.key&&t(!0)},n=e=>{"Alt"===e.key&&t(!1)};return window.addEventListener("keydown",e),window.addEventListener("keyup",n),()=>{window.removeEventListener("keydown",e),window.removeEventListener("keyup",n)}},[]),e}();return(0,r.jsx)("gds-grid",{...m?{debug:!0}:{},"gap-block":n,"gap-inline":s,"padding-block":o,"padding-inline":c,columns:u.toString(),...void 0!==a?{mobile:a.toString()}:{},...void 0!==l?{tablet:l.toString()}:{},fluid:d,justify:f,align:h,children:t})}n(5575),n(6976),n(2893)},3991:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(7437);function i(e){let{heading:t,preamble:n}=e;return(0,r.jsxs)("div",{className:"hero",children:[(0,r.jsx)("h1",{children:t}),(0,r.jsx)("p",{className:"gds-fs-headline-large color-secondary",children:n})]})}n(2758)},290:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7437),i=n(2265);function s(e){let{children:t,caption:n,height:s,content:o}=e,c=s?{"--gds-pattern-max-height":"".concat(s,"px")}:{},a=(0,i.useRef)(null);return(0,i.useEffect)(()=>{s&&a.current&&a.current.classList.add("custom")},[s]),(0,r.jsxs)(r.Fragment,{children:[o?(0,r.jsx)("figure",{ref:a,className:"preview","data-caption":n,style:c,dangerouslySetInnerHTML:{__html:o}}):(0,r.jsx)("figure",{ref:a,className:"preview","data-caption":n,style:c,children:t}),n&&(0,r.jsx)("span",{dangerouslySetInnerHTML:{__html:n}})]})}n(9027)},8393:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n(7437),i=n(5645),s=n(1433);function o(){return(0,r.jsx)("div",{className:"gds-card-trail",children:(0,r.jsxs)("svg",{viewBox:"0 0 24 24",children:[(0,r.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),(0,r.jsx)("polyline",{points:"12 5 19 12 12 19"})]})})}n(4382);let c=[{href:"https://github.com/sebgroup/green",target:"_blank",caption:"Github",text:"Start contributing now!"},{href:"https://brand.seb.se/point/en/seb/",target:"_blank",caption:"Media Bank & Brand Guidelines",text:"SEB Brand Hub"}];function a(e){let{title:t}=e;return(0,r.jsxs)("section",{className:"resources-list",children:[t&&(0,r.jsx)("h2",{children:t}),(0,r.jsx)(s.default,{columns:3,gapInline:"medium",gapBlock:"medium",children:c.map((e,t)=>(0,r.jsxs)(i.Z,{href:e.href,target:e.target,variant:"cta",children:[(0,r.jsx)("div",{className:"gds-card-title","data-caption":e.caption,children:e.text}),(0,r.jsx)(o,{})]},t))})]})}},9323:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(7437);function i(e){let{children:t,layout:n}=e;return(0,r.jsx)("section",{className:"layout-content ".concat("page-"+n),children:t})}n(5679)},46:function(){},9753:function(){},8159:function(){},5969:function(){},2893:function(){},5575:function(){},6976:function(){},2758:function(){},9027:function(){},4382:function(){},5679:function(){},622:function(e,t,n){"use strict";var r=n(2265),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,s={},l=null,u=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)o.call(t,r)&&!a.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:i,type:e,key:l,ref:u,props:s,_owner:c.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},7437:function(e,t,n){"use strict";e.exports=n(622)},1396:function(e,t,n){e.exports=n(5250)}},function(e){e.O(0,[250,311,971,938,744],function(){return e(e.s=7994)}),_N_E=e.O()}]);