(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[540],{7561:function(){},553:function(e,t,n){Promise.resolve().then(n.bind(n,6441)),Promise.resolve().then(n.bind(n,1433)),Promise.resolve().then(n.bind(n,9323))},5645:function(e,t,n){"use strict";var r=n(7437),s=n(2265),c=n(1396),i=n.n(c);n(9753);let o=(0,s.forwardRef)((e,t)=>{let{children:n,href:s,className:c="",target:o,variant:a="default",...l}=e,u="gds-card ".concat(c," ").concat("cta"===a?"gds-card-cta":"");return(0,r.jsx)(i(),{href:s,ref:t,className:u,target:o,...l,children:n})});o.displayName="Card",t.Z=o},6441:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(7437),s=n(5645),c=n(290);function i(e){var t,n,i;return(0,r.jsxs)(s.Z,{href:e.url_path,children:[(null!==(n=null===(t=e.preview)||void 0===t?void 0:t.trim())&&void 0!==n?n:"")?(0,r.jsx)(c.Z,{height:"240",content:null!==(i=e.preview)&&void 0!==i?i:""}):(0,r.jsx)(c.Z,{height:"240",content:e.figma_hero_svg.svg}),(0,r.jsx)("div",{className:"gds-card-title",children:e.title}),(0,r.jsx)("p",{className:"gds-card-excerpt",children:e.summary})]})}n(8159);var o=n(1433),a=n(3311);function l(e){let{title:t}=e,n=a.DD.filter(e=>"index.mdx"===e._raw.sourceFileName).sort((e,t)=>e.title.localeCompare(t.title));return(0,r.jsxs)("section",{className:"component-list",children:[t&&(0,r.jsx)("h2",{children:t}),(0,r.jsx)(o.default,{columns:3,mobile:2,tablet:1,gapInline:"medium",gapBlock:"medium",children:n.map((e,t)=>(0,r.jsx)(i,{...e},t))})]})}n(5969)},290:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(7437),s=n(2265);function c(e){let{children:t,caption:n,height:c,content:i}=e,o=c?{"--gds-pattern-max-height":"".concat(c,"px")}:{},a=(0,s.useRef)(null);return(0,s.useEffect)(()=>{c&&a.current&&a.current.classList.add("custom")},[c]),(0,r.jsxs)("div",{children:[i?(0,r.jsx)("figure",{ref:a,className:"preview","data-caption":n,style:o,dangerouslySetInnerHTML:{__html:i}}):(0,r.jsx)("figure",{ref:a,className:"preview","data-caption":n,style:o,children:t}),n&&(0,r.jsx)("span",{dangerouslySetInnerHTML:{__html:n}})]})}n(9027)},9323:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(7437);function s(e){let{children:t,layout:n}=e;return(0,r.jsx)("section",{className:"layout-content ".concat("page-"+n),children:t})}n(5679)},9753:function(){},8159:function(){},5969:function(){},9027:function(){},5679:function(){},622:function(e,t,n){"use strict";var r=n(2265),s=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,c={},l=null,u=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,r)&&!a.hasOwnProperty(r)&&(c[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===c[r]&&(c[r]=t[r]);return{$$typeof:s,type:e,key:l,ref:u,props:c,_owner:o.current}}t.Fragment=c,t.jsx=l,t.jsxs=l},7437:function(e,t,n){"use strict";e.exports=n(622)},1396:function(e,t,n){e.exports=n(5250)}},function(e){e.O(0,[250,746,971,938,744],function(){return e(e.s=553)}),_N_E=e.O()}]);