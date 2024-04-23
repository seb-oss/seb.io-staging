"use strict";(()=>{let e;var t,s,i,r,o,n,l,a,d,h,c,u,p,g,f,y,v,m,b,_,$,w,A,x,k,E,C,S,M,F,T,D,N,W,z,L,H,R,O,P,V,B,I,U,j,Y,G,q,K,Z,X,J,Q,ee,et,es,ei,er,eo,en,el,ea,ed,eh,ec,eu,ep,eg,ef,ey,ev,em,eb,e_,e$,ew,eA,ex,ek,eE,eC,eS,eM,eF,eT,eD,eN,eW,ez,eL,eH,eR,eO,eP,eV,eB,eI,eU,ej,eY,eG,eq,eK,eZ,eX,eJ,eQ,e0,e1,e2,e5,e3,e4,e8,e9,e6,e7,te,tt,ts,ti,tr,to,tn,tl,ta,td,th,tc=Object.defineProperty,tu=Object.getOwnPropertyDescriptor,tp=(e,t,s,i)=>{for(var r,o=i>1?void 0:i?tu(t,s):t,n=e.length-1;n>=0;n--)(r=e[n])&&(o=(i?r(t,s,o):r(o))||o);return i&&o&&tc(t,s,o),o},tg=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)},tf=(e,t,s)=>(tg(e,t,"read from private field"),s?s.call(e):t.get(e)),ty=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},tv=(e,t,s,i)=>(tg(e,t,"write to private field"),i?i.call(e,s):t.set(e,s),s),tm=(e,t,s,i)=>({set _(value){tv(e,t,value,s)},get _(){return tf(e,t,i)}}),tb=(e,t,s)=>(tg(e,t,"access private method"),s),t_=e=>t=>"function"==typeof t?(customElements.define(e,t),t):((e,t)=>{let{kind:s,elements:i}=t;return{kind:s,elements:i,finisher(t){customElements.define(e,t)}}})(e,t),t$=(e,t)=>"method"!==t.kind||!t.descriptor||"value"in t.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(s){s.createProperty(t.key,e)}}:{...t,finisher(s){s.createProperty(t.key,e)}},tw=(e,t,s)=>{t.constructor.createProperty(s,e)};function tA(e){return(t,s)=>void 0!==s?tw(e,t,s):t$(e,t)}function tx(e){return tA({...e,state:!0})}var tk=({finisher:e,descriptor:t})=>(s,i)=>{var r;if(void 0===i){let i=null!==(r=s.originalKey)&&void 0!==r?r:s.key,o=null!=t?{kind:"method",placement:"prototype",key:i,descriptor:t(s.key)}:{...s,key:i};return null!=e&&(o.finisher=function(t){e(t,i)}),o}{let r=s.constructor;void 0!==t&&Object.defineProperty(s,i,t(i)),null==e||e(r,i)}};function tE(e,t){return tk({descriptor:s=>{let i={get(){var t,s;return null!==(s=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==s?s:null},enumerable:!0,configurable:!0};if(t){let t="symbol"==typeof s?Symbol():"__"+s;i.get=function(){var s,i;return void 0===this[t]&&(this[t]=null!==(i=null===(s=this.renderRoot)||void 0===s?void 0:s.querySelector(e))&&void 0!==i?i:null),this[t]}}return i}})}function tC(e){return tk({descriptor:t=>({async get(){var t;return await this.updateComplete,null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e)},enumerable:!0,configurable:!0})})}null!=(null===(i=window.HTMLSlotElement)||void 0===i?void 0:i.prototype.assignedElements)||((e,t)=>e.assignedNodes(t).filter(e=>e.nodeType===Node.ELEMENT_NODE));var tS=window,tM=tS.trustedTypes,tF=tM?tM.createPolicy("lit-html",{createHTML:e=>e}):void 0,tT="$lit$",tD=`lit$${(Math.random()+"").slice(9)}$`,tN="?"+tD,tW=`<${tN}>`,tz=document,tL=()=>tz.createComment(""),tH=e=>null===e||"object"!=typeof e&&"function"!=typeof e,tR=Array.isArray,tO=e=>tR(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]),tP="[ 	\n\f\r]",tV=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,tB=/-->/g,tI=/>/g,tU=RegExp(`>|${tP}(?:([^\\s"'>=/]+)(${tP}*=${tP}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),tj=/'/g,tY=/"/g,tG=/^(?:script|style|textarea|title)$/i,tq=e=>(t,...s)=>({_$litType$:e,strings:t,values:s});tq(1),tq(2);var tK=Symbol.for("lit-noChange"),tZ=Symbol.for("lit-nothing"),tX=new WeakMap,tJ=tz.createTreeWalker(tz,129,null,!1);function tQ(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==tF?tF.createHTML(t):t}var t0=(e,t)=>{let s=e.length-1,i=[],r,o=2===t?"<svg>":"",n=tV;for(let t=0;t<s;t++){let s=e[t],l,a,d=-1,h=0;for(;h<s.length&&(n.lastIndex=h,null!==(a=n.exec(s)));)h=n.lastIndex,n===tV?"!--"===a[1]?n=tB:void 0!==a[1]?n=tI:void 0!==a[2]?(tG.test(a[2])&&(r=RegExp("</"+a[2],"g")),n=tU):void 0!==a[3]&&(n=tU):n===tU?">"===a[0]?(n=null!=r?r:tV,d=-1):void 0===a[1]?d=-2:(d=n.lastIndex-a[2].length,l=a[1],n=void 0===a[3]?tU:'"'===a[3]?tY:tj):n===tY||n===tj?n=tU:n===tB||n===tI?n=tV:(n=tU,r=void 0);let c=n===tU&&e[t+1].startsWith("/>")?" ":"";o+=n===tV?s+tW:d>=0?(i.push(l),s.slice(0,d)+tT+s.slice(d)+tD+c):s+tD+(-2===d?(i.push(void 0),t):c)}return[tQ(e,o+(e[s]||"<?>")+(2===t?"</svg>":"")),i]},t1=class e{constructor({strings:t,_$litType$:s},i){let r;this.parts=[];let o=0,n=0,l=t.length-1,a=this.parts,[d,h]=t0(t,s);if(this.el=e.createElement(d,i),tJ.currentNode=this.el.content,2===s){let e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(r=tJ.nextNode())&&a.length<l;){if(1===r.nodeType){if(r.hasAttributes()){let e=[];for(let t of r.getAttributeNames())if(t.endsWith(tT)||t.startsWith(tD)){let s=h[n++];if(e.push(t),void 0!==s){let e=r.getAttribute(s.toLowerCase()+tT).split(tD),t=/([.?@])?(.*)/.exec(s);a.push({type:1,index:o,name:t[2],strings:e,ctor:"."===t[1]?t8:"?"===t[1]?t6:"@"===t[1]?t7:t4})}else a.push({type:6,index:o})}for(let t of e)r.removeAttribute(t)}if(tG.test(r.tagName)){let e=r.textContent.split(tD),t=e.length-1;if(t>0){r.textContent=tM?tM.emptyScript:"";for(let s=0;s<t;s++)r.append(e[s],tL()),tJ.nextNode(),a.push({type:2,index:++o});r.append(e[t],tL())}}}else if(8===r.nodeType){if(r.data===tN)a.push({type:2,index:o});else{let e=-1;for(;-1!==(e=r.data.indexOf(tD,e+1));)a.push({type:7,index:o}),e+=tD.length-1}}o++}}static createElement(e,t){let s=tz.createElement("template");return s.innerHTML=e,s}};function t2(e,t,s=e,i){var r,o,n;if(t===tK)return t;let l=void 0!==i?null===(r=s._$Co)||void 0===r?void 0:r[i]:s._$Cl,a=tH(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==a&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===a?l=void 0:(l=new a(e))._$AT(e,s,i),void 0!==i?(null!==(n=s._$Co)&&void 0!==n?n:s._$Co=[])[i]=l:s._$Cl=l),void 0!==l&&(t=t2(e,l._$AS(e,t.values),l,i)),t}var t5=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;let{el:{content:s},parts:i}=this._$AD,r=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:tz).importNode(s,!0);tJ.currentNode=r;let o=tJ.nextNode(),n=0,l=0,a=i[0];for(;void 0!==a;){if(n===a.index){let t;2===a.type?t=new t3(o,o.nextSibling,this,e):1===a.type?t=new a.ctor(o,a.name,a.strings,this,e):6===a.type&&(t=new se(o,this,e)),this._$AV.push(t),a=i[++l]}n!==(null==a?void 0:a.index)&&(o=tJ.nextNode(),n++)}return tJ.currentNode=tz,r}v(e){let t=0;for(let s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}},t3=class e{constructor(e,t,s,i){var r;this.type=2,this._$AH=tZ,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cp=null===(r=null==i?void 0:i.isConnected)||void 0===r||r}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){tH(e=t2(this,e,t))?e===tZ||null==e||""===e?(this._$AH!==tZ&&this._$AR(),this._$AH=tZ):e!==this._$AH&&e!==tK&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):tO(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==tZ&&tH(this._$AH)?this._$AA.nextSibling.data=e:this.$(tz.createTextNode(e)),this._$AH=e}g(e){var t;let{values:s,_$litType$:i}=e,r="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=t1.createElement(tQ(i.h,i.h[0]),this.options)),i);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===r)this._$AH.v(s);else{let e=new t5(r,this),t=e.u(this.options);e.v(s),this.$(t),this._$AH=e}}_$AC(e){let t=tX.get(e.strings);return void 0===t&&tX.set(e.strings,t=new t1(e)),t}T(t){tR(this._$AH)||(this._$AH=[],this._$AR());let s=this._$AH,i,r=0;for(let o of t)r===s.length?s.push(i=new e(this.k(tL()),this.k(tL()),this,this.options)):i=s[r],i._$AI(o),r++;r<s.length&&(this._$AR(i&&i._$AB.nextSibling,r),s.length=r)}_$AR(e=this._$AA.nextSibling,t){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}},t4=class{constructor(e,t,s,i,r){this.type=1,this._$AH=tZ,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=tZ}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,s,i){let r=this.strings,o=!1;if(void 0===r)(o=!tH(e=t2(this,e,t,0))||e!==this._$AH&&e!==tK)&&(this._$AH=e);else{let i,n;let l=e;for(e=r[0],i=0;i<r.length-1;i++)(n=t2(this,l[s+i],t,i))===tK&&(n=this._$AH[i]),o||(o=!tH(n)||n!==this._$AH[i]),n===tZ?e=tZ:e!==tZ&&(e+=(null!=n?n:"")+r[i+1]),this._$AH[i]=n}o&&!i&&this.j(e)}j(e){e===tZ?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}},t8=class extends t4{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===tZ?void 0:e}},t9=tM?tM.emptyScript:"",t6=class extends t4{constructor(){super(...arguments),this.type=4}j(e){e&&e!==tZ?this.element.setAttribute(this.name,t9):this.element.removeAttribute(this.name)}},t7=class extends t4{constructor(e,t,s,i,r){super(e,t,s,i,r),this.type=5}_$AI(e,t=this){var s;if((e=null!==(s=t2(this,e,t,0))&&void 0!==s?s:tZ)===tK)return;let i=this._$AH,r=e===tZ&&i!==tZ||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==tZ&&(i===tZ||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==s?s:this.element,e):this._$AH.handleEvent(e)}},se=class{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){t2(this,e)}},st=tS.litHtmlPolyfillSupport;null==st||st(t1,t3),(null!==(r=tS.litHtmlVersions)&&void 0!==r?r:tS.litHtmlVersions=[]).push("2.8.0");var ss={ATTRIBUTE:1,CHILD:2},si=e=>(...t)=>({_$litDirective$:e,values:t}),sr=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},so=class extends sr{constructor(e){if(super(e),this.et=tZ,e.type!==ss.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===tZ||null==e)return this.ft=void 0,this.et=e;if(e===tK)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;let t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}};so.directiveName="unsafeHTML",so.resultType=1;var sn=si(so);function sl(e,t,s){return e?t():null==s?void 0:s()}var sa=e=>null!=e?e:tZ,sd=si(class extends sr{constructor(e){var t;if(super(e),e.type!==ss.ATTRIBUTE||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var s,i;if(void 0===this.it){for(let i in this.it=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)!t[i]||(null===(s=this.nt)||void 0===s?void 0:s.has(i))||this.it.add(i);return this.render(t)}let r=e.element.classList;for(let e in this.it.forEach(e=>{e in t||(r.remove(e),this.it.delete(e))}),t){let s=!!t[e];s===this.it.has(e)||(null===(i=this.nt)||void 0===i?void 0:i.has(e))||(s?(r.add(e),this.it.add(e)):(r.remove(e),this.it.delete(e)))}return tK}}),sh=(e,...t)=>({strTag:!0,strings:e,values:t}),sc=e=>"string"!=typeof e&&"strTag"in e,su=(e,t,s)=>{let i=e[0];for(let r=1;r<e.length;r++)i+=t[s?s[r-1]:r-1]+e[r];return i},sp="lit-localize-status",sg=class{constructor(e){this.__litLocalizeEventHandler=e=>{"ready"===e.detail.status&&this.host.requestUpdate()},this.host=e}hostConnected(){window.addEventListener(sp,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(sp,this.__litLocalizeEventHandler)}},sf=e=>e.addController(new sg(e)),sy=class{constructor(){this.settled=!1,this.promise=new Promise((e,t)=>{this._resolve=e,this._reject=t})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}},sv=[];for(let e=0;e<256;e++)sv[e]=(e>>4&15).toString(16)+(15&e).toString(16);new sy().resolve();var sm=e=>sc(e)?su(e.strings,e.values):e;function sb(e){e.updateComplete.then(()=>{let t=e.shadowRoot?.querySelectorAll("slot[gds-allow]");if(!t)return;for(let t of Array.from(e.childNodes))t.nodeType===Node.TEXT_NODE&&t.textContent?.trim()===""&&t.parentNode?.removeChild(t);let s=e=>{let t=e.getAttribute("gds-allow")?.split(" ")||[];for(let s of Array.from(e.assignedNodes()))t.includes(s.nodeName.toLowerCase())||s.parentNode?.removeChild(s)};t.forEach(e=>{s(e),e.addEventListener("slotchange",()=>s(e))})})}function s_(e,t){let s={waitUntilFirstUpdate:!1,...t};return(t,i,r)=>{let{update:o}=t,n=Array.isArray(e)?e:[e];t.update=function(e){n.forEach(t=>{if(e.has(t)){let i=e.get(t),o=this[t];i!==o&&(!s.waitUntilFirstUpdate||this.hasUpdated)&&r.value?.call(this,i,o)}}),o.call(this,e)}}}!function(e){!function(t){var s="object"==typeof global?global:"object"==typeof self?self:"object"==typeof this?this:Function("return this;")(),i=r(e);function r(e,t){return function(s,i){"function"!=typeof e[s]&&Object.defineProperty(e,s,{configurable:!0,writable:!0,value:i}),t&&t(s,i)}}void 0===s.Reflect?s.Reflect=e:i=r(s.Reflect,i),t(i)}(function(e){var t=Object.prototype.hasOwnProperty,s="function"==typeof Symbol,i=s&&void 0!==Symbol.toPrimitive?Symbol.toPrimitive:"@@toPrimitive",r=s&&void 0!==Symbol.iterator?Symbol.iterator:"@@iterator",o="function"==typeof Object.create,n=({__proto__:[]})instanceof Array,l=!o&&!n,a={create:o?function(){return M(Object.create(null))}:n?function(){return M({__proto__:null})}:function(){return M({})},has:l?function(e,s){return t.call(e,s)}:function(e,t){return t in e},get:l?function(e,s){return t.call(e,s)?e[s]:void 0}:function(e,t){return e[t]}},d=Object.getPrototypeOf(Function),h="object"==typeof process&&process.env&&"true"===process.env.REFLECT_METADATA_USE_MAP_POLYFILL,c=h||"function"!=typeof Map||"function"!=typeof Map.prototype.entries?function(){var e={},t=[],s=function(){function e(e,t,s){this._index=0,this._keys=e,this._values=t,this._selector=s}return e.prototype["@@iterator"]=function(){return this},e.prototype[r]=function(){return this},e.prototype.next=function(){var e=this._index;if(e>=0&&e<this._keys.length){var s=this._selector(this._keys[e],this._values[e]);return e+1>=this._keys.length?(this._index=-1,this._keys=t,this._values=t):this._index++,{value:s,done:!1}}return{value:void 0,done:!0}},e.prototype.throw=function(e){throw this._index>=0&&(this._index=-1,this._keys=t,this._values=t),e},e.prototype.return=function(e){return this._index>=0&&(this._index=-1,this._keys=t,this._values=t),{value:e,done:!0}},e}();return function(){function t(){this._keys=[],this._values=[],this._cacheKey=e,this._cacheIndex=-2}return Object.defineProperty(t.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),t.prototype.has=function(e){return this._find(e,!1)>=0},t.prototype.get=function(e){var t=this._find(e,!1);return t>=0?this._values[t]:void 0},t.prototype.set=function(e,t){var s=this._find(e,!0);return this._values[s]=t,this},t.prototype.delete=function(t){var s=this._find(t,!1);if(s>=0){for(var i=this._keys.length,r=s+1;r<i;r++)this._keys[r-1]=this._keys[r],this._values[r-1]=this._values[r];return this._keys.length--,this._values.length--,t===this._cacheKey&&(this._cacheKey=e,this._cacheIndex=-2),!0}return!1},t.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=e,this._cacheIndex=-2},t.prototype.keys=function(){return new s(this._keys,this._values,i)},t.prototype.values=function(){return new s(this._keys,this._values,o)},t.prototype.entries=function(){return new s(this._keys,this._values,n)},t.prototype["@@iterator"]=function(){return this.entries()},t.prototype[r]=function(){return this.entries()},t.prototype._find=function(e,t){return this._cacheKey!==e&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=e)),this._cacheIndex<0&&t&&(this._cacheIndex=this._keys.length,this._keys.push(e),this._values.push(void 0)),this._cacheIndex},t}();function i(e,t){return e}function o(e,t){return t}function n(e,t){return[e,t]}}():Map,u=h||"function"!=typeof Set||"function"!=typeof Set.prototype.entries?function(){function e(){this._map=new c}return Object.defineProperty(e.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),e.prototype.has=function(e){return this._map.has(e)},e.prototype.add=function(e){return this._map.set(e,e),this},e.prototype.delete=function(e){return this._map.delete(e)},e.prototype.clear=function(){this._map.clear()},e.prototype.keys=function(){return this._map.keys()},e.prototype.values=function(){return this._map.values()},e.prototype.entries=function(){return this._map.entries()},e.prototype["@@iterator"]=function(){return this.keys()},e.prototype[r]=function(){return this.keys()},e}():Set,p=new(h||"function"!=typeof WeakMap?function(){var e=a.create(),s=i();return function(){function e(){this._key=i()}return e.prototype.has=function(e){var t=r(e,!1);return void 0!==t&&a.has(t,this._key)},e.prototype.get=function(e){var t=r(e,!1);return void 0!==t?a.get(t,this._key):void 0},e.prototype.set=function(e,t){return r(e,!0)[this._key]=t,this},e.prototype.delete=function(e){var t=r(e,!1);return void 0!==t&&delete t[this._key]},e.prototype.clear=function(){this._key=i()},e}();function i(){var t;do t="@@WeakMap@@"+function(){var e="function"==typeof Uint8Array?"undefined"!=typeof crypto?crypto.getRandomValues(new Uint8Array(16)):"undefined"!=typeof msCrypto?msCrypto.getRandomValues(new Uint8Array(16)):o(new Uint8Array(16),16):o(Array(16),16);e[6]=79&e[6]|64,e[8]=191&e[8]|128;for(var t="",s=0;s<16;++s){var i=e[s];(4===s||6===s||8===s)&&(t+="-"),i<16&&(t+="0"),t+=i.toString(16).toLowerCase()}return t}();while(a.has(e,t));return e[t]=!0,t}function r(e,i){if(!t.call(e,s)){if(!i)return;Object.defineProperty(e,s,{value:a.create()})}return e[s]}function o(e,t){for(var s=0;s<t;++s)e[s]=255*Math.random()|0;return e}}():WeakMap);function g(e,t,s){var i=p.get(e);if(_(i)){if(!s)return;i=new c,p.set(e,i)}var r=i.get(t);if(_(r)){if(!s)return;r=new c,i.set(t,r)}return r}function f(e,t,s){var i=g(t,s,!1);return!_(i)&&!!i.has(e)}function y(e,t,s){var i=g(t,s,!1);if(!_(i))return i.get(e)}function v(e,t,s,i){g(s,i,!0).set(e,t)}function m(e,t){var s=[],i=g(e,t,!1);if(_(i))return s;for(var o=function(e){var t=C(e,r);if(!k(t))throw TypeError();var s=t.call(e);if(!w(s))throw TypeError();return s}(i.keys()),n=0;;){var l=function(e){var t=e.next();return!t.done&&t}(o);if(!l)return s.length=n,s;var a=l.value;try{s[n]=a}catch(e){try{!function(e){var t=e.return;t&&t.call(e)}(o)}finally{throw e}}n++}}function b(e){if(null===e)return 1;switch(typeof e){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return null===e?1:6;default:return 6}}function _(e){return void 0===e}function $(e){return null===e}function w(e){return"object"==typeof e?null!==e:"function"==typeof e}function A(e){var t=function(e,t){switch(b(e)){case 0:case 1:case 2:case 3:case 4:case 5:return e}var s="string",r=C(e,i);if(void 0!==r){var o=r.call(e,s);if(w(o))throw TypeError();return o}return function(e,t){if("string"===t){var s=e.toString;if(k(s)){var i=s.call(e);if(!w(i))return i}var r=e.valueOf;if(k(r)){var i=r.call(e);if(!w(i))return i}}else{var r=e.valueOf;if(k(r)){var i=r.call(e);if(!w(i))return i}var o=e.toString;if(k(o)){var i=o.call(e);if(!w(i))return i}}throw TypeError()}(e,s)}(e,0);return"symbol"==typeof t?t:""+t}function x(e){return Array.isArray?Array.isArray(e):e instanceof Object?e instanceof Array:"[object Array]"===Object.prototype.toString.call(e)}function k(e){return"function"==typeof e}function E(e){return"function"==typeof e}function C(e,t){var s=e[t];if(null!=s){if(!k(s))throw TypeError();return s}}function S(e){var t=Object.getPrototypeOf(e);if("function"!=typeof e||e===d||t!==d)return t;var s=e.prototype,i=s&&Object.getPrototypeOf(s);if(null==i||i===Object.prototype)return t;var r=i.constructor;return"function"!=typeof r||r===e?t:r}function M(e){return e.__=void 0,delete e.__,e}e("decorate",function(e,t,s,i){if(_(s)){if(!x(e)||!E(t))throw TypeError();return function(e,t){for(var s=e.length-1;s>=0;--s){var i=(0,e[s])(t);if(!_(i)&&!$(i)){if(!E(i))throw TypeError();t=i}}return t}(e,t)}if(!x(e)||!w(t)||!w(i)&&!_(i)&&!$(i))throw TypeError();return $(i)&&(i=void 0),function(e,t,s,i){for(var r=e.length-1;r>=0;--r){var o=(0,e[r])(t,s,i);if(!_(o)&&!$(o)){if(!w(o))throw TypeError();i=o}}return i}(e,t,s=A(s),i)}),e("metadata",function(e,t){return function(s,i){if(!w(s)||!_(i)&&!function(e){switch(b(e)){case 3:case 4:return!0;default:return!1}}(i))throw TypeError();v(e,t,s,i)}}),e("defineMetadata",function(e,t,s,i){if(!w(s))throw TypeError();return _(i)||(i=A(i)),v(e,t,s,i)}),e("hasMetadata",function(e,t,s){if(!w(t))throw TypeError();return _(s)||(s=A(s)),function e(t,s,i){if(f(t,s,i))return!0;var r=S(s);return!$(r)&&e(t,r,i)}(e,t,s)}),e("hasOwnMetadata",function(e,t,s){if(!w(t))throw TypeError();return _(s)||(s=A(s)),f(e,t,s)}),e("getMetadata",function(e,t,s){if(!w(t))throw TypeError();return _(s)||(s=A(s)),function e(t,s,i){if(f(t,s,i))return y(t,s,i);var r=S(s);if(!$(r))return e(t,r,i)}(e,t,s)}),e("getOwnMetadata",function(e,t,s){if(!w(t))throw TypeError();return _(s)||(s=A(s)),y(e,t,s)}),e("getMetadataKeys",function(e,t){if(!w(e))throw TypeError();return _(t)||(t=A(t)),function e(t,s){var i=m(t,s),r=S(t);if(null===r)return i;var o=e(r,s);if(o.length<=0)return i;if(i.length<=0)return o;for(var n=new u,l=[],a=0;a<i.length;a++){var d=i[a],h=n.has(d);h||(n.add(d),l.push(d))}for(var c=0;c<o.length;c++){var d=o[c],h=n.has(d);h||(n.add(d),l.push(d))}return l}(e,t)}),e("getOwnMetadataKeys",function(e,t){if(!w(e))throw TypeError();return _(t)||(t=A(t)),m(e,t)}),e("deleteMetadata",function(e,t,s){if(!w(t))throw TypeError();_(s)||(s=A(s));var i=g(t,s,!1);if(_(i)||!i.delete(e))return!1;if(i.size>0)return!0;var r=p.get(t);return r.delete(s),r.size>0||(p.delete(t),!0)})})}(o||(o={}));var s$=window,sw=s$.ShadowRoot&&(void 0===s$.ShadyCSS||s$.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,sA=Symbol(),sx=new WeakMap,sk=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==sA)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(sw&&void 0===e){let s=void 0!==t&&1===t.length;s&&(e=sx.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&sx.set(t,e))}return e}toString(){return this.cssText}},sE=e=>new sk("string"==typeof e?e:e+"",void 0,sA),sC=(e,...t)=>new sk(1===e.length?e[0]:t.reduce((t,s,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[i+1],e[0]),e,sA),sS=(e,t)=>{sw?e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(t=>{let s=document.createElement("style"),i=s$.litNonce;void 0!==i&&s.setAttribute("nonce",i),s.textContent=t.cssText,e.appendChild(s)})},sM=sw?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let s of e.cssRules)t+=s.cssText;return sE(t)})(e):e,sF=window,sT=sF.trustedTypes,sD=sT?sT.emptyScript:"",sN=sF.reactiveElementPolyfillSupport,sW={toAttribute(e,t){switch(t){case Boolean:e=e?sD:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=null!==e;break;case Number:s=null===e?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch(e){s=null}}return s}},sz=(e,t)=>t!==e&&(t==t||e==e),sL={attribute:!0,type:String,converter:sW,reflect:!1,hasChanged:sz},sH="finalized",sR=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((t,s)=>{let i=this._$Ep(s,t);void 0!==i&&(this._$Ev.set(i,s),e.push(i))}),e}static createProperty(e,t=sL){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){let s="symbol"==typeof e?Symbol():"__"+e,i=this.getPropertyDescriptor(e,s,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){return{get(){return this[t]},set(i){let r=this[e];this[t]=i,this.requestUpdate(e,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||sL}static finalize(){if(this.hasOwnProperty(sH))return!1;this[sH]=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let e=this.properties;for(let t of[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)])this.createProperty(t,e[t])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let s of new Set(e.flat(1/0).reverse()))t.unshift(sM(s));else void 0!==e&&t.push(sM(e));return t}static _$Ep(e,t){let s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach(e=>e(this))}addController(e){var t,s;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(s=e.hostConnected)||void 0===s||s.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;let t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return sS(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach(e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)})}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach(e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EO(e,t,s=sL){var i;let r=this.constructor._$Ep(e,s);if(void 0!==r&&!0===s.reflect){let o=(void 0!==(null===(i=s.converter)||void 0===i?void 0:i.toAttribute)?s.converter:sW).toAttribute(t,s.type);this._$El=e,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(e,t){var s;let i=this.constructor,r=i._$Ev.get(e);if(void 0!==r&&this._$El!==r){let e=i.getPropertyOptions(r),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(s=e.converter)||void 0===s?void 0:s.fromAttribute)?e.converter:sW;this._$El=r,this[r]=o.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,s){let i=!0;void 0!==e&&(((s=s||this.constructor.getPropertyOptions(e)).hasChanged||sz)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===s.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((e,t)=>this[t]=e),this._$Ei=void 0);let t=!1,s=this._$AL;try{(t=this.shouldUpdate(s))?(this.willUpdate(s),null===(e=this._$ES)||void 0===e||e.forEach(e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)}),this.update(s)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(s)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach(e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach((e,t)=>this._$EO(t,this[t],e)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};sR[sH]=!0,sR.elementProperties=new Map,sR.elementStyles=[],sR.shadowRootOptions={mode:"open"},null==sN||sN({ReactiveElement:sR}),(null!==(n=sF.reactiveElementVersions)&&void 0!==n?n:sF.reactiveElementVersions=[]).push("1.6.3");var sO=window,sP=sO.trustedTypes,sV=sP?sP.createPolicy("lit-html",{createHTML:e=>e}):void 0,sB="$lit$",sI=`lit$${(Math.random()+"").slice(9)}$`,sU="?"+sI,sj=`<${sU}>`,sY=document,sG=()=>sY.createComment(""),sq=e=>null===e||"object"!=typeof e&&"function"!=typeof e,sK=Array.isArray,sZ=e=>sK(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]),sX="[ 	\n\f\r]",sJ=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,sQ=/-->/g,s0=/>/g,s1=RegExp(`>|${sX}(?:([^\\s"'>=/]+)(${sX}*=${sX}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),s2=/'/g,s5=/"/g,s3=/^(?:script|style|textarea|title)$/i,s4=e=>(t,...s)=>({_$litType$:e,strings:t,values:s}),s8=s4(1);s4(2);var s9=Symbol.for("lit-noChange"),s6=Symbol.for("lit-nothing"),s7=new WeakMap,ie=sY.createTreeWalker(sY,129,null,!1);function it(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==sV?sV.createHTML(t):t}var is=(e,t)=>{let s=e.length-1,i=[],r,o=2===t?"<svg>":"",n=sJ;for(let t=0;t<s;t++){let s=e[t],l,a,d=-1,h=0;for(;h<s.length&&(n.lastIndex=h,null!==(a=n.exec(s)));)h=n.lastIndex,n===sJ?"!--"===a[1]?n=sQ:void 0!==a[1]?n=s0:void 0!==a[2]?(s3.test(a[2])&&(r=RegExp("</"+a[2],"g")),n=s1):void 0!==a[3]&&(n=s1):n===s1?">"===a[0]?(n=null!=r?r:sJ,d=-1):void 0===a[1]?d=-2:(d=n.lastIndex-a[2].length,l=a[1],n=void 0===a[3]?s1:'"'===a[3]?s5:s2):n===s5||n===s2?n=s1:n===sQ||n===s0?n=sJ:(n=s1,r=void 0);let c=n===s1&&e[t+1].startsWith("/>")?" ":"";o+=n===sJ?s+sj:d>=0?(i.push(l),s.slice(0,d)+sB+s.slice(d)+sI+c):s+sI+(-2===d?(i.push(void 0),t):c)}return[it(e,o+(e[s]||"<?>")+(2===t?"</svg>":"")),i]},ii=class e{constructor({strings:t,_$litType$:s},i){let r;this.parts=[];let o=0,n=0,l=t.length-1,a=this.parts,[d,h]=is(t,s);if(this.el=e.createElement(d,i),ie.currentNode=this.el.content,2===s){let e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(r=ie.nextNode())&&a.length<l;){if(1===r.nodeType){if(r.hasAttributes()){let e=[];for(let t of r.getAttributeNames())if(t.endsWith(sB)||t.startsWith(sI)){let s=h[n++];if(e.push(t),void 0!==s){let e=r.getAttribute(s.toLowerCase()+sB).split(sI),t=/([.?@])?(.*)/.exec(s);a.push({type:1,index:o,name:t[2],strings:e,ctor:"."===t[1]?id:"?"===t[1]?ic:"@"===t[1]?iu:ia})}else a.push({type:6,index:o})}for(let t of e)r.removeAttribute(t)}if(s3.test(r.tagName)){let e=r.textContent.split(sI),t=e.length-1;if(t>0){r.textContent=sP?sP.emptyScript:"";for(let s=0;s<t;s++)r.append(e[s],sG()),ie.nextNode(),a.push({type:2,index:++o});r.append(e[t],sG())}}}else if(8===r.nodeType){if(r.data===sU)a.push({type:2,index:o});else{let e=-1;for(;-1!==(e=r.data.indexOf(sI,e+1));)a.push({type:7,index:o}),e+=sI.length-1}}o++}}static createElement(e,t){let s=sY.createElement("template");return s.innerHTML=e,s}};function ir(e,t,s=e,i){var r,o,n;if(t===s9)return t;let l=void 0!==i?null===(r=s._$Co)||void 0===r?void 0:r[i]:s._$Cl,a=sq(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==a&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===a?l=void 0:(l=new a(e))._$AT(e,s,i),void 0!==i?(null!==(n=s._$Co)&&void 0!==n?n:s._$Co=[])[i]=l:s._$Cl=l),void 0!==l&&(t=ir(e,l._$AS(e,t.values),l,i)),t}var io=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;let{el:{content:s},parts:i}=this._$AD,r=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:sY).importNode(s,!0);ie.currentNode=r;let o=ie.nextNode(),n=0,l=0,a=i[0];for(;void 0!==a;){if(n===a.index){let t;2===a.type?t=new il(o,o.nextSibling,this,e):1===a.type?t=new a.ctor(o,a.name,a.strings,this,e):6===a.type&&(t=new ip(o,this,e)),this._$AV.push(t),a=i[++l]}n!==(null==a?void 0:a.index)&&(o=ie.nextNode(),n++)}return ie.currentNode=sY,r}v(e){let t=0;for(let s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}},il=class e{constructor(e,t,s,i){var r;this.type=2,this._$AH=s6,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cp=null===(r=null==i?void 0:i.isConnected)||void 0===r||r}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){sq(e=ir(this,e,t))?e===s6||null==e||""===e?(this._$AH!==s6&&this._$AR(),this._$AH=s6):e!==this._$AH&&e!==s9&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):sZ(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==s6&&sq(this._$AH)?this._$AA.nextSibling.data=e:this.$(sY.createTextNode(e)),this._$AH=e}g(e){var t;let{values:s,_$litType$:i}=e,r="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=ii.createElement(it(i.h,i.h[0]),this.options)),i);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===r)this._$AH.v(s);else{let e=new io(r,this),t=e.u(this.options);e.v(s),this.$(t),this._$AH=e}}_$AC(e){let t=s7.get(e.strings);return void 0===t&&s7.set(e.strings,t=new ii(e)),t}T(t){sK(this._$AH)||(this._$AH=[],this._$AR());let s=this._$AH,i,r=0;for(let o of t)r===s.length?s.push(i=new e(this.k(sG()),this.k(sG()),this,this.options)):i=s[r],i._$AI(o),r++;r<s.length&&(this._$AR(i&&i._$AB.nextSibling,r),s.length=r)}_$AR(e=this._$AA.nextSibling,t){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}},ia=class{constructor(e,t,s,i,r){this.type=1,this._$AH=s6,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=s6}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,s,i){let r=this.strings,o=!1;if(void 0===r)(o=!sq(e=ir(this,e,t,0))||e!==this._$AH&&e!==s9)&&(this._$AH=e);else{let i,n;let l=e;for(e=r[0],i=0;i<r.length-1;i++)(n=ir(this,l[s+i],t,i))===s9&&(n=this._$AH[i]),o||(o=!sq(n)||n!==this._$AH[i]),n===s6?e=s6:e!==s6&&(e+=(null!=n?n:"")+r[i+1]),this._$AH[i]=n}o&&!i&&this.j(e)}j(e){e===s6?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}},id=class extends ia{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===s6?void 0:e}},ih=sP?sP.emptyScript:"",ic=class extends ia{constructor(){super(...arguments),this.type=4}j(e){e&&e!==s6?this.element.setAttribute(this.name,ih):this.element.removeAttribute(this.name)}},iu=class extends ia{constructor(e,t,s,i,r){super(e,t,s,i,r),this.type=5}_$AI(e,t=this){var s;if((e=null!==(s=ir(this,e,t,0))&&void 0!==s?s:s6)===s9)return;let i=this._$AH,r=e===s6&&i!==s6||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==s6&&(i===s6||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==s?s:this.element,e):this._$AH.handleEvent(e)}},ip=class{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){ir(this,e)}},ig=sO.litHtmlPolyfillSupport;null==ig||ig(ii,il),(null!==(l=sO.litHtmlVersions)&&void 0!==l?l:sO.litHtmlVersions=[]).push("2.8.0");var iy=(e,t,s)=>{var i,r;let o=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:t,n=o._$litPart$;if(void 0===n){let e=null!==(r=null==s?void 0:s.renderBefore)&&void 0!==r?r:null;o._$litPart$=n=new il(t.insertBefore(sG(),e),e,void 0,null!=s?s:{})}return n._$AI(e),n},iv=class extends sR{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;let s=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=s.firstChild),s}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=iy(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return s9}};iv.finalized=!0,iv._$litElement$=!0,null===(a=globalThis.litElementHydrateSupport)||void 0===a||a.call(globalThis,{LitElement:iv});var im=globalThis.litElementPolyfillSupport;null==im||im({LitElement:iv}),(null!==(d=globalThis.litElementVersions)&&void 0!==d?d:globalThis.litElementVersions=[]).push("3.3.3");var ib="-gdsvsuffix",i_=new Map,i$=e=>{if(globalThis.GDS_DISABLE_VERSIONED_ELEMENTS)return i_.set(e,e),t_(e);let t=e+ib;return(i_.set(e,t),customElements.get(t))?e=>!1:t_(t)},iw=new WeakMap,iA=e=>e.map(e=>{for(let[t,s]of i_.entries())e=e.replace(RegExp(`${t}(?![-a-z])`,"mg"),s);return e}),ix=function(e){return(t,...s)=>{if(globalThis.GDS_DISABLE_VERSIONED_ELEMENTS)return e(t,...s);let[i,...r]=function(e,...t){let s=iw.get(e);return s||((s=iA(e)).raw=iA(e.raw),iw.set(e,s)),[s,...t]}(t,...s);return e(i,...r)}}(s8),{I:ik}={O:tT,P:tD,A:tN,C:1,M:t0,L:t5,R:tO,D:t2,I:t3,V:t4,H:t6,N:t7,U:t8,F:se},iE=e=>null===e||"object"!=typeof e&&"function"!=typeof e,iC=e=>void 0===e.strings,iS=()=>document.createComment(""),iM=(e,t,s)=>{var i;let r=e._$AA.parentNode,o=void 0===t?e._$AB:t._$AA;if(void 0===s)s=new ik(r.insertBefore(iS(),o),r.insertBefore(iS(),o),e,e.options);else{let t=s._$AB.nextSibling,n=s._$AM,l=n!==e;if(l){let t;null===(i=s._$AQ)||void 0===i||i.call(s,e),s._$AM=e,void 0!==s._$AP&&(t=e._$AU)!==n._$AU&&s._$AP(t)}if(t!==o||l){let e=s._$AA;for(;e!==t;){let t=e.nextSibling;r.insertBefore(e,o),e=t}}}return s},iF=(e,t,s=e)=>(e._$AI(t,s),e),iT={},iD=(e,t=iT)=>e._$AH=t,iN=e=>e._$AH,iW=e=>{var t;null===(t=e._$AP)||void 0===t||t.call(e,!1,!0);let s=e._$AA,i=e._$AB.nextSibling;for(;s!==i;){let e=s.nextSibling;s.remove(),s=e}},iz=(e,t)=>{var s;let i=e._$AN;if(void 0===i)return!1;for(let e of i)null===(s=e._$AO)||void 0===s||s.call(e,t,!1),iz(e,t);return!0},iL=e=>{let t,s;do{if(void 0===(t=e._$AM))break;(s=t._$AN).delete(e),e=t}while(0===(null==s?void 0:s.size))},iH=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(void 0===s)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),iP(t)}};function iR(e){void 0!==this._$AN?(iL(this),this._$AM=e,iH(this)):this._$AM=e}function iO(e,t=!1,s=0){let i=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size){if(t){if(Array.isArray(i))for(let e=s;e<i.length;e++)iz(i[e],!1),iL(i[e]);else null!=i&&(iz(i,!1),iL(i))}else iz(this,e)}}var iP=e=>{var t,s;e.type==ss.CHILD&&(null!==(t=e._$AP)&&void 0!==t||(e._$AP=iO),null!==(s=e._$AQ)&&void 0!==s||(e._$AQ=iR))},iV=class extends sr{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,s){super._$AT(e,t,s),iH(this),this.isConnected=e._$AU}_$AO(e,t=!0){var s,i;e!==this.isConnected&&(this.isConnected=e,e?null===(s=this.reconnected)||void 0===s||s.call(this):null===(i=this.disconnected)||void 0===i||i.call(this)),t&&(iz(this,e),iL(this))}setValue(e){if(iC(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},iB=()=>new iI,iI=class{},iU=new WeakMap,ij=si(class extends iV{render(e){return tZ}update(e,[t]){var s;let i=t!==this.G;return i&&void 0!==this.G&&this.ot(void 0),(i||this.rt!==this.lt)&&(this.G=t,this.dt=null===(s=e.options)||void 0===s?void 0:s.host,this.ot(this.lt=e.element)),tZ}ot(e){var t;if("function"==typeof this.G){let s=null!==(t=this.dt)&&void 0!==t?t:globalThis,i=iU.get(s);void 0===i&&(i=new WeakMap,iU.set(s,i)),void 0!==i.get(this.G)&&this.G.call(this.dt,void 0),i.set(this.G,e),void 0!==e&&this.G.call(this.dt,e)}else this.G.value=e}get rt(){var e,t,s;return"function"==typeof this.G?null===(t=iU.get(null!==(e=this.dt)&&void 0!==e?e:globalThis))||void 0===t?void 0:t.get(this.G):null===(s=this.G)||void 0===s?void 0:s.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}}),iY=class e{constructor(){this.sheets=new Map,this.elements=new Map,this.sheetsLegacy=new Map,this.useLegacyStylesheets=!function(){try{return new CSSStyleSheet,!0}catch{return!1}}(),this.chlorophyllTokens=new CSSStyleSheet}static get instance(){return globalThis.__gdsTransitionalStyles?.[ib]||(globalThis.__gdsTransitionalStyles={...globalThis.__gdsTransitionalStyles,[ib]:new e}),globalThis.__gdsTransitionalStyles[ib]}apply(e,t){if(!e.shadowRoot)return;if(this.useLegacyStylesheets){this.elements.set(t,e),this.applyToElementLegacy(t);return}let s=this.sheets.get(t);s&&(this.elements.set(t,e),this.applyToElement(t,s))}applyToElement(e,t){let s=this.elements.get(e);s&&s.shadowRoot&&(s.shadowRoot.adoptedStyleSheets=[this.chlorophyllTokens,t],s._isUsingTransitionalStyles=!0)}applyToElementLegacy(e){let t=this.sheetsLegacy.get(e),s=this.elements.get(e);s&&(s._tStyles=s8`<style>
      @layer reset {
        *:not(style, [gds-element]) {
          all: revert;
        }
      }
      ${sn(t)}
    </style>`,s._isUsingTransitionalStyles=!0)}register(e,t){if(this.useLegacyStylesheets){this.sheetsLegacy.set(e,t),this.applyToElementLegacy(e);return}let s=new CSSStyleSheet;s.replaceSync(t),this.sheets.set(e,s),this.applyToElement(e,s)}},iG=class extends iv{constructor(){super(...arguments),this.gdsElementName="",this._isUsingTransitionalStyles=!1}connectedCallback(){var e;super.connectedCallback(),this.gdsElementName=(e=this.tagName.toLowerCase(),[...i_.entries()].find(([,t])=>t===e)?.[0]||this.gdsElementName),this.setAttribute("gds-element",this.gdsElementName)}},iq=sC`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
    }
  }
`,iK=class{constructor(e){this.#e=e=>{let t=e.target;if(!this.host.navigableItems.includes(t))return;let s=!1;if("ArrowDown"===e.key){let e=this.host.navigableItems.indexOf(t)+1,i=this.host.navigableItems[e];i?.focus(),s=!0}else if("ArrowUp"===e.key){let e=this.host.navigableItems.indexOf(t)-1,i=this.host.navigableItems[e];i?.focus(),s=!0}else if("Home"===e.key)this.host.navigableItems[0]?.focus(),s=!0;else if("End"===e.key)this.host.navigableItems[this.host.navigableItems.length-1]?.focus(),s=!0;else{let t=e.key.toLowerCase();if(1!==t.length)return;if(t>="a"&&t<="z"||t>="0"&&t<="9"){let e=this.host.navigableItems.find(e=>{let s=e.textContent?.trim().toLowerCase();return s?.startsWith(t)});e?.focus(),s=!0}}s&&(e.preventDefault(),e.stopPropagation())},(this.host=e).addController(this)}hostConnected(){this.host.addEventListener("keydown",this.#e)}hostDisconnected(){this.host.removeEventListener("keydown",this.#e)}#e};function iZ(e){let t=e;for(;t.assignedElements().length>0&&"SLOT"===t.assignedElements()[0].nodeName;)t=t.assignedElements()[0];return t}var iX=class extends iG{constructor(){super(),this.multiple=!1,this.compareWith=(e,t)=>e===t,ty(this,h,iB()),ty(this,c,e=>{let t=e.target;this.multiple?t.selected=!t.selected:(t.selected=!0,Array.from(this.options).forEach(e=>{e!==t&&(e.selected=!1)})),this.ariaActiveDescendantElement=t,this.dispatchEvent(new CustomEvent("change",{bubbles:!1,composed:!1}))}),new iK(this)}get navigableItems(){return this.visibleOptionElements}get options(){return tf(this,h).value&&iZ(tf(this,h).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&"gds-option"===e.gdsElementName)||[]}get visibleOptionElements(){return this.options.filter(e=>!e.hidden)}get visibleSelectedOptionElements(){return this.options.filter(e=>e.selected&&!e.hidden)}get selection(){return this.options.filter(e=>e.selected)}set selection(e){this.options.forEach(t=>{t.selected=e.some(e=>this.compareWith(e,t.value))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),iY.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",tf(this,c))}focus(){(this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])?.focus()}render(){return ix`${this._tStyles}<slot ${ij(tf(this,h))}></slot>`}_rerenderOptions(){this.options.forEach(e=>{e.requestUpdate()})}};h=new WeakMap,c=new WeakMap,iX.styles=iq,tp([tA({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:e=>e.toString()}})],iX.prototype,"multiple",2),tp([tA()],iX.prototype,"compareWith",2),tp([tx()],iX.prototype,"_tStyles",2),tp([s_("multiple")],iX.prototype,"_rerenderOptions",1),iX=tp([i$("gds-listbox")],iX);var iJ=sC`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: block;
      padding: 1rem 1.5rem;
      cursor: pointer;
    }

    :host(:not(:last-child)) {
      border-bottom: 1px solid #e0e0e0;
    }

    :host(:hover) {
      background-color: #ededed;
    }

    :host(:focus-visible) {
      outline: auto;
      outline-offset: -6px;
      outline-color: #666;
    }
  }
`,iQ=e=>{class t extends e{constructor(){super(...arguments),this.onblur=e=>{this.setAttribute("tabindex","-1"),this.dispatchEvent(new FocusEvent("gds-blur",{bubbles:!0,composed:!0,relatedTarget:e.relatedTarget}))},this.onfocus=e=>{this.dispatchEvent(new FocusEvent("gds-focus",{bubbles:!0,composed:!0,relatedTarget:e.relatedTarget}))}}focus(e){this.setAttribute("tabindex","0"),super.focus(e)}}return t},i0=class extends iQ(iG){constructor(){super(),ty(this,p),ty(this,u,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",tb(this,p,g)),this.addEventListener("keydown",e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),tb(this,p,g).call(this,e))})}get hidden(){return tf(this,u)}set hidden(e){this.isPlaceholder||(tv(this,u,"true"===e||!0===e),this.setAttribute("aria-hidden",e.toString()))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.isPlaceholder&&(tv(this,u,!0),this.setAttribute("aria-hidden","true")),this.updateComplete.then(()=>iY.instance.apply(this,"gds-option"))}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?(tv(this,u,!0),this.setAttribute("aria-hidden","true")):(tv(this,u,!1),this.setAttribute("aria-hidden","false"))}render(){let e=this.parentElement?.multiple,t=s8` <span
      class="checkbox ${sd({checked:this.selected})}"
    ></span>`;return e||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),s8`${this._tStyles}
      <div>${sl(e,()=>t)} <slot></slot></div>`}};u=new WeakMap,p=new WeakSet,g=function(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}}))},i0.styles=iJ,tp([tA()],i0.prototype,"value",2),tp([tA({attribute:"aria-hidden",reflect:!0})],i0.prototype,"hidden",1),tp([tA({attribute:"aria-selected",reflect:!0})],i0.prototype,"selected",2),tp([tA({type:Boolean,reflect:!0})],i0.prototype,"isPlaceholder",2),tp([tx()],i0.prototype,"_tStyles",2),tp([s_("isplaceholder")],i0.prototype,"_handlePlaceholderStatusChange",1),i0=tp([i$("gds-option")],i0);var i1=Math.min,i2=Math.max,i5=Math.round,i3=Math.floor,i4=e=>({x:e,y:e}),i8={left:"right",right:"left",bottom:"top",top:"bottom"},i9={start:"end",end:"start"};function i6(e,t){return"function"==typeof e?e(t):e}function i7(e){return e.split("-")[0]}function re(e){return e.split("-")[1]}function rt(e){return"y"===e?"height":"width"}function rs(e){return["top","bottom"].includes(i7(e))?"y":"x"}function ri(e){return"x"===rs(e)?"y":"x"}function rr(e){return e.replace(/start|end/g,e=>i9[e])}function ro(e){return e.replace(/left|right|bottom|top/g,e=>i8[e])}function rn(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function rl(e,t,s){let i,{reference:r,floating:o}=e,n=rs(t),l=ri(t),a=rt(l),d=i7(t),h="y"===n,c=r.x+r.width/2-o.width/2,u=r.y+r.height/2-o.height/2,p=r[a]/2-o[a]/2;switch(d){case"top":i={x:c,y:r.y-o.height};break;case"bottom":i={x:c,y:r.y+r.height};break;case"right":i={x:r.x+r.width,y:u};break;case"left":i={x:r.x-o.width,y:u};break;default:i={x:r.x,y:r.y}}switch(re(t)){case"start":i[l]-=p*(s&&h?-1:1);break;case"end":i[l]+=p*(s&&h?-1:1)}return i}var ra=async(e,t,s)=>{let{placement:i="bottom",strategy:r="absolute",middleware:o=[],platform:n}=s,l=o.filter(Boolean),a=await (null==n.isRTL?void 0:n.isRTL(t)),d=await n.getElementRects({reference:e,floating:t,strategy:r}),{x:h,y:c}=rl(d,i,a),u=i,p={},g=0;for(let s=0;s<l.length;s++){let{name:o,fn:f}=l[s],{x:y,y:v,data:m,reset:b}=await f({x:h,y:c,initialPlacement:i,placement:u,strategy:r,middlewareData:p,rects:d,platform:n,elements:{reference:e,floating:t}});h=null!=y?y:h,c=null!=v?v:c,p={...p,[o]:{...p[o],...m}},b&&g<=50&&(g++,"object"==typeof b&&(b.placement&&(u=b.placement),b.rects&&(d=!0===b.rects?await n.getElementRects({reference:e,floating:t,strategy:r}):b.rects),{x:h,y:c}=rl(d,u,a)),s=-1)}return{x:h,y:c,placement:u,strategy:r,middlewareData:p}};async function rd(e,t){var s;void 0===t&&(t={});let{x:i,y:r,platform:o,rects:n,elements:l,strategy:a}=e,{boundary:d="clippingAncestors",rootBoundary:h="viewport",elementContext:c="floating",altBoundary:u=!1,padding:p=0}=i6(t,e),g="number"!=typeof p?{top:0,right:0,bottom:0,left:0,...p}:{top:p,right:p,bottom:p,left:p},f=l[u?"floating"===c?"reference":"floating":c],y=rn(await o.getClippingRect({element:null==(s=await (null==o.isElement?void 0:o.isElement(f)))||s?f:f.contextElement||await (null==o.getDocumentElement?void 0:o.getDocumentElement(l.floating)),boundary:d,rootBoundary:h,strategy:a})),v="floating"===c?{...n.floating,x:i,y:r}:n.reference,m=await (null==o.getOffsetParent?void 0:o.getOffsetParent(l.floating)),b=await (null==o.isElement?void 0:o.isElement(m))&&await (null==o.getScale?void 0:o.getScale(m))||{x:1,y:1},_=rn(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:v,offsetParent:m,strategy:a}):v);return{top:(y.top-_.top+g.top)/b.y,bottom:(_.bottom-y.bottom+g.bottom)/b.y,left:(y.left-_.left+g.left)/b.x,right:(_.right-y.right+g.right)/b.x}}async function rh(e,t){let{placement:s,platform:i,elements:r}=e,o=await (null==i.isRTL?void 0:i.isRTL(r.floating)),n=i7(s),l=re(s),a="y"===rs(s),d=["left","top"].includes(n)?-1:1,h=o&&a?-1:1,c=i6(t,e),{mainAxis:u,crossAxis:p,alignmentAxis:g}="number"==typeof c?{mainAxis:c,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...c};return l&&"number"==typeof g&&(p="end"===l?-1*g:g),a?{x:p*h,y:u*d}:{x:u*d,y:p*h}}function rc(e){return rg(e)?(e.nodeName||"").toLowerCase():"#document"}function ru(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function rp(e){var t;return null==(t=(rg(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function rg(e){return e instanceof Node||e instanceof ru(e).Node}function rf(e){return e instanceof Element||e instanceof ru(e).Element}function ry(e){return e instanceof HTMLElement||e instanceof ru(e).HTMLElement}function rv(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof ru(e).ShadowRoot)}function rm(e){let{overflow:t,overflowX:s,overflowY:i,display:r}=rA(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+s)&&!["inline","contents"].includes(r)}function rb(e){let t=r$(),s=rA(e);return"none"!==s.transform||"none"!==s.perspective||!!s.containerType&&"normal"!==s.containerType||!t&&!!s.backdropFilter&&"none"!==s.backdropFilter||!t&&!!s.filter&&"none"!==s.filter||["transform","perspective","filter"].some(e=>(s.willChange||"").includes(e))||["paint","layout","strict","content"].some(e=>(s.contain||"").includes(e))}function r_(e){let t=rk(e);for(;ry(t)&&!rw(t);){if(rb(t))return t;t=rk(t)}return null}function r$(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function rw(e){return["html","body","#document"].includes(rc(e))}function rA(e){return ru(e).getComputedStyle(e)}function rx(e){return rf(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function rk(e){if("html"===rc(e))return e;let t=e.assignedSlot||e.parentNode||rv(e)&&e.host||rp(e);return rv(t)?t.host:t}function rE(e,t,s){var i;void 0===t&&(t=[]),void 0===s&&(s=!0);let r=function e(t){let s=rk(t);return rw(s)?t.ownerDocument?t.ownerDocument.body:t.body:ry(s)&&rm(s)?s:e(s)}(e),o=r===(null==(i=e.ownerDocument)?void 0:i.body),n=ru(r);return o?t.concat(n,n.visualViewport||[],rm(r)?r:[],n.frameElement&&s?rE(n.frameElement):[]):t.concat(r,rE(r,[],s))}function rC(e){let t=rA(e),s=parseFloat(t.width)||0,i=parseFloat(t.height)||0,r=ry(e),o=r?e.offsetWidth:s,n=r?e.offsetHeight:i,l=i5(s)!==o||i5(i)!==n;return l&&(s=o,i=n),{width:s,height:i,$:l}}function rS(e){return rf(e)?e:e.contextElement}function rM(e){let t=rS(e);if(!ry(t))return i4(1);let s=t.getBoundingClientRect(),{width:i,height:r,$:o}=rC(t),n=(o?i5(s.width):s.width)/i,l=(o?i5(s.height):s.height)/r;return n&&Number.isFinite(n)||(n=1),l&&Number.isFinite(l)||(l=1),{x:n,y:l}}var rF=i4(0);function rT(e){let t=ru(e);return r$()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:rF}function rD(e,t,s,i){var r;void 0===t&&(t=!1),void 0===s&&(s=!1);let o=e.getBoundingClientRect(),n=rS(e),l=i4(1);t&&(i?rf(i)&&(l=rM(i)):l=rM(e));let a=(void 0===(r=s)&&(r=!1),i&&(!r||i===ru(n))&&r)?rT(n):i4(0),d=(o.left+a.x)/l.x,h=(o.top+a.y)/l.y,c=o.width/l.x,u=o.height/l.y;if(n){let e=ru(n),t=i&&rf(i)?ru(i):i,s=e.frameElement;for(;s&&i&&t!==e;){let e=rM(s),t=s.getBoundingClientRect(),i=rA(s),r=t.left+(s.clientLeft+parseFloat(i.paddingLeft))*e.x,o=t.top+(s.clientTop+parseFloat(i.paddingTop))*e.y;d*=e.x,h*=e.y,c*=e.x,u*=e.y,d+=r,h+=o,s=ru(s).frameElement}}return rn({width:c,height:u,x:d,y:h})}var rN=[":popover-open",":modal"];function rW(e){let t=!1,s=0,i=0;if(rN.forEach(s=>{!function(s){try{t=t||e.matches(s)}catch(e){}}(s)}),t){let t=r_(e);if(t){let e=t.getBoundingClientRect();s=e.x,i=e.y}}return[t,s,i]}function rz(e){return rD(rp(e)).left+rx(e).scrollLeft}function rL(e,t,s){let i;if("viewport"===t)i=function(e,t){let s=ru(e),i=rp(e),r=s.visualViewport,o=i.clientWidth,n=i.clientHeight,l=0,a=0;if(r){o=r.width,n=r.height;let e=r$();(!e||e&&"fixed"===t)&&(l=r.offsetLeft,a=r.offsetTop)}return{width:o,height:n,x:l,y:a}}(e,s);else if("document"===t)i=function(e){let t=rp(e),s=rx(e),i=e.ownerDocument.body,r=i2(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),o=i2(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight),n=-s.scrollLeft+rz(e),l=-s.scrollTop;return"rtl"===rA(i).direction&&(n+=i2(t.clientWidth,i.clientWidth)-r),{width:r,height:o,x:n,y:l}}(rp(e));else if(rf(t))i=function(e,t){let s=rD(e,!0,"fixed"===t),i=s.top+e.clientTop,r=s.left+e.clientLeft,o=ry(e)?rM(e):i4(1),n=e.clientWidth*o.x;return{width:n,height:e.clientHeight*o.y,x:r*o.x,y:i*o.y}}(t,s);else{let s=rT(e);i={...t,x:t.x-s.x,y:t.y-s.y}}return rn(i)}function rH(e,t){return ry(e)&&"fixed"!==rA(e).position?t?t(e):e.offsetParent:null}function rR(e,t){let s=ru(e);if(!ry(e))return s;let i=rH(e,t);for(;i&&["table","td","th"].includes(rc(i))&&"static"===rA(i).position;)i=rH(i,t);return i&&("html"===rc(i)||"body"===rc(i)&&"static"===rA(i).position&&!rb(i))?s:i||r_(e)||s}var rO=async function(e){let t=this.getOffsetParent||rR,s=this.getDimensions;return{reference:function(e,t,s,i){let r=ry(t),o=rp(t),n="fixed"===s,l=rD(e,!0,n,t),a={scrollLeft:0,scrollTop:0},d=i4(0);if(r||!r&&!n){if(("body"!==rc(t)||rm(o))&&(a=rx(t)),r){let e=rD(t,!0,n,t);d.x=e.x+t.clientLeft,d.y=e.y+t.clientTop}else o&&(d.x=rz(o))}let h=l.left+a.scrollLeft-d.x,c=l.top+a.scrollTop-d.y,[u,p,g]=rW(i);return u&&(h+=p,c+=g,r&&(h+=t.clientLeft,c+=t.clientTop)),{x:h,y:c,width:l.width,height:l.height}}(e.reference,await t(e.floating),e.strategy,e.floating),floating:{x:0,y:0,...await s(e.floating)}}},rP={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:s,offsetParent:i,strategy:r}=e,o=rp(i),[n]=t?rW(t.floating):[!1];if(i===o||n)return s;let l={scrollLeft:0,scrollTop:0},a=i4(1),d=i4(0),h=ry(i);if((h||!h&&"fixed"!==r)&&(("body"!==rc(i)||rm(o))&&(l=rx(i)),ry(i))){let e=rD(i);a=rM(i),d.x=e.x+i.clientLeft,d.y=e.y+i.clientTop}return{width:s.width*a.x,height:s.height*a.y,x:s.x*a.x-l.scrollLeft*a.x+d.x,y:s.y*a.y-l.scrollTop*a.y+d.y}},getDocumentElement:rp,getClippingRect:function(e){let{element:t,boundary:s,rootBoundary:i,strategy:r}=e,o=[..."clippingAncestors"===s?function(e,t){let s=t.get(e);if(s)return s;let i=rE(e,[],!1).filter(e=>rf(e)&&"body"!==rc(e)),r=null,o="fixed"===rA(e).position,n=o?rk(e):e;for(;rf(n)&&!rw(n);){let t=rA(n),s=rb(n);s||"fixed"!==t.position||(r=null),(o?!s&&!r:!s&&"static"===t.position&&!!r&&["absolute","fixed"].includes(r.position)||rm(n)&&!s&&function e(t,s){let i=rk(t);return!(i===s||!rf(i)||rw(i))&&("fixed"===rA(i).position||e(i,s))}(e,n))?i=i.filter(e=>e!==n):r=t,n=rk(n)}return t.set(e,i),i}(t,this._c):[].concat(s),i],n=o[0],l=o.reduce((e,s)=>{let i=rL(t,s,r);return e.top=i2(i.top,e.top),e.right=i1(i.right,e.right),e.bottom=i1(i.bottom,e.bottom),e.left=i2(i.left,e.left),e},rL(t,n,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},getOffsetParent:rR,getElementRects:rO,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){let{width:t,height:s}=rC(e);return{width:t,height:s}},getScale:rM,isElement:rf,isRTL:function(e){return"rtl"===rA(e).direction}},rV=(e,t,s)=>{let i=new Map,r={platform:rP,...s},o={...r.platform,_c:i};return ra(e,t,{...r,platform:o})},rB=sC`
  @layer base, reset, transitional-styles;
  @layer base {
    :host([open]) dialog {
      opacity: 1;
      box-sizing: border-box;
      transform: translate3d(0, 0, 0);
      visibility: visible;
    }

    dialog {
      inset: auto;
      position: fixed;
      overflow: hidden;
      padding: 0px;
      box-sizing: border-box;
      right: 0;
      margin: 0;
      box-shadow:
        0 0 0 1px rgba(0, 0, 0, 0.2),
        0 1rem 28px rgba(0, 0, 0, 0.15);
      border-width: 0;
      border-radius: 0.5rem;
    }

    header {
      display: none;
    }

    dialog::backdrop {
      background-color: transparent;
      display: block;
      position: fixed;
    }
  }
`,rI=class extends iG{constructor(){super(...arguments),ty(this,_),ty(this,w),ty(this,x),this.open=!1,this.triggerRef=Promise.resolve(void 0),this.label=void 0,this.placement="bottom-start",this.calcMinWidth=e=>`${e.offsetWidth}px`,this.calcMaxWidth=e=>"auto",this.calcMinHeight=e=>"auto",this.calcMaxHeight=e=>"500px",this._trigger=void 0,this._isVirtKbVisible=!1,ty(this,f,iB()),ty(this,y,void 0),ty(this,v,!1),ty(this,m,e=>{this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:this.open,reason:e},bubbles:!1,composed:!1}))}),ty(this,b,e=>{e.stopPropagation(),e.preventDefault(),this.open=!1,tf(this,m).call(this,"close"),setTimeout(()=>this._trigger?.focus(),250)}),ty(this,E,e=>{"ArrowDown"===e.key&&(e.preventDefault(),this.open=!0,tf(this,m).call(this,"show")),"Escape"===e.key&&(this.open=!1,tf(this,m).call(this,"cancel"))}),ty(this,C,()=>{let e=this.shadowRoot?.querySelector("slot")?.assignedElements()[0];this.updateComplete.then(()=>{e?.focus()})}),ty(this,S,e=>{let t=tf(this,f).value;if((e.clientX>0||e.clientY>0)&&t&&this.open){let s=t.getBoundingClientRect();s.top<=e.clientY&&e.clientY<=s.top+s.height&&s.left<=e.clientX&&e.clientX<=s.left+s.width||(e.stopPropagation(),this.open=!1,tf(this,m).call(this,"close"))}})}_handleTriggerRefChanged(){this.triggerRef.then(e=>{e&&(this._trigger=e)})}_handleTriggerChanged(){tb(this,_,$).call(this),tb(this,x,k).call(this)}connectedCallback(){super.connectedCallback(),iY.instance.apply(this,"gds-popover"),tb(this,_,$).call(this),this._handleOpenChange(),this.addEventListener("keydown",e=>{"Escape"===e.key&&(this.open=!1,tf(this,m).call(this,"cancel"),e.stopPropagation(),e.preventDefault())}),this.addEventListener("focusin",e=>{let t=e.target;"INPUT"===t.tagName||"TEXTAREA"===t.tagName?this._isVirtKbVisible=!0:this._isVirtKbVisible=!1}),this.addEventListener("blurin",e=>{this._isVirtKbVisible=!1})}disconnectedCallback(){super.disconnectedCallback(),tb(this,w,A).call(this)}render(){return s8`${this._tStyles}
      <dialog
        class="${sd({"v-kb-visible":this._isVirtKbVisible})}"
        ${ij(tf(this,f))}
      >
        <header>
          <h2>${this.label}</h2>
          <button
            class="close"
            @click=${tf(this,b)}
            aria-label="${sm("Close")}"
          >
            <i></i>
          </button>
        </header>
        <slot></slot>
      </dialog>`}_handleOpenChange(){this.setAttribute("aria-hidden",String(!this.open)),this.hidden=!this.open,this.updateComplete.then(()=>{this.open?(tf(this,f).value?.showModal(),tf(this,C).call(this),setTimeout(()=>tf(this,f).value?.addEventListener("click",tf(this,S)),0)):(tf(this,f).value?.close(),tf(this,f).value?.removeEventListener("click",tf(this,S)))})}_handleMobileLayout(e){var t;tv(this,v,e),e?(null==(t=tf(this,y))||t.call(this),tf(this,f).value?.style.removeProperty("left"),tf(this,f).value?.style.removeProperty("top"),tf(this,f).value?.style.removeProperty("minWidth"),this.updateComplete.then(()=>{this.open&&tf(this,f).value?.showModal()})):this.updateComplete.then(()=>{tb(this,x,k).call(this)})}};f=new WeakMap,y=new WeakMap,v=new WeakMap,m=new WeakMap,b=new WeakMap,_=new WeakSet,$=function(){this._trigger?.addEventListener("keydown",tf(this,E))},w=new WeakSet,A=function(){var e;this._trigger?.removeEventListener("keydown",tf(this,E)),null==(e=tf(this,y))||e.call(this)},x=new WeakSet,k=function(){let e=this._trigger,t=tf(this,f).value;!e||!t||tf(this,v)||(tf(this,y)&&tf(this,y).call(this),tv(this,y,function(e,t,s,i){let r;void 0===i&&(i={});let{ancestorScroll:o=!0,ancestorResize:n=!0,elementResize:l="function"==typeof ResizeObserver,layoutShift:a="function"==typeof IntersectionObserver,animationFrame:d=!1}=i,h=rS(e),c=o||n?[...h?rE(h):[],...rE(t)]:[];c.forEach(e=>{o&&e.addEventListener("scroll",s,{passive:!0}),n&&e.addEventListener("resize",s)});let u=h&&a?function(e,t){let s,i=null,r=rp(e);function o(){var e;clearTimeout(s),null==(e=i)||e.disconnect(),i=null}return function n(l,a){void 0===l&&(l=!1),void 0===a&&(a=1),o();let{left:d,top:h,width:c,height:u}=e.getBoundingClientRect();if(l||t(),!c||!u)return;let p=i3(h),g=i3(r.clientWidth-(d+c)),f={rootMargin:-p+"px "+-g+"px "+-i3(r.clientHeight-(h+u))+"px "+-i3(d)+"px",threshold:i2(0,i1(1,a))||1},y=!0;function v(e){let t=e[0].intersectionRatio;if(t!==a){if(!y)return n();t?n(!1,t):s=setTimeout(()=>{n(!1,1e-7)},100)}y=!1}try{i=new IntersectionObserver(v,{...f,root:r.ownerDocument})}catch(e){i=new IntersectionObserver(v,f)}i.observe(e)}(!0),o}(h,s):null,p=-1,g=null;l&&(g=new ResizeObserver(e=>{let[i]=e;i&&i.target===h&&g&&(g.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var e;null==(e=g)||e.observe(t)})),s()}),h&&!d&&g.observe(h),g.observe(t));let f=d?rD(e):null;return d&&function t(){let i=rD(e);f&&(i.x!==f.x||i.y!==f.y||i.width!==f.width||i.height!==f.height)&&s(),f=i,r=requestAnimationFrame(t)}(),s(),()=>{var e;c.forEach(e=>{o&&e.removeEventListener("scroll",s),n&&e.removeEventListener("resize",s)}),null==u||u(),null==(e=g)||e.disconnect(),g=null,d&&cancelAnimationFrame(r)}}(e,t,()=>{var s;rV(e,t,{placement:this.placement,middleware:[{name:"offset",options:8,async fn(e){var t,s;let{x:i,y:r,placement:o,middlewareData:n}=e,l=await rh(e,8);return o===(null==(t=n.offset)?void 0:t.placement)&&null!=(s=n.arrow)&&s.alignmentOffset?{}:{x:i+l.x,y:r+l.y,data:{...l,placement:o}}}},(void 0===s&&(s={}),{name:"flip",options:s,async fn(e){var t,i,r,o,n;let{placement:l,middlewareData:a,rects:d,initialPlacement:h,platform:c,elements:u}=e,{mainAxis:p=!0,crossAxis:g=!0,fallbackPlacements:f,fallbackStrategy:y="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:m=!0,...b}=i6(s,e);if(null!=(t=a.arrow)&&t.alignmentOffset)return{};let _=i7(l),$=i7(h)===h,w=await (null==c.isRTL?void 0:c.isRTL(u.floating)),A=f||($||!m?[ro(h)]:function(e){let t=ro(e);return[rr(e),t,rr(t)]}(h));f||"none"===v||A.push(...function(e,t,s,i){let r=re(e),o=function(e,t,s){let i=["left","right"],r=["right","left"];switch(e){case"top":case"bottom":if(s)return t?r:i;return t?i:r;case"left":case"right":return t?["top","bottom"]:["bottom","top"];default:return[]}}(i7(e),"start"===s,i);return r&&(o=o.map(e=>e+"-"+r),t&&(o=o.concat(o.map(rr)))),o}(h,m,v,w));let x=[h,...A],k=await rd(e,b),E=[],C=(null==(i=a.flip)?void 0:i.overflows)||[];if(p&&E.push(k[_]),g){let e=function(e,t,s){void 0===s&&(s=!1);let i=re(e),r=ri(e),o=rt(r),n="x"===r?i===(s?"end":"start")?"right":"left":"start"===i?"bottom":"top";return t.reference[o]>t.floating[o]&&(n=ro(n)),[n,ro(n)]}(l,d,w);E.push(k[e[0]],k[e[1]])}if(C=[...C,{placement:l,overflows:E}],!E.every(e=>e<=0)){let e=((null==(r=a.flip)?void 0:r.index)||0)+1,t=x[e];if(t)return{data:{index:e,overflows:C},reset:{placement:t}};let s=null==(o=C.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:o.placement;if(!s)switch(y){case"bestFit":{let e=null==(n=C.map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:n[0];e&&(s=e);break}case"initialPlacement":s=h}if(l!==s)return{reset:{placement:s}}}return{}}})],strategy:"fixed"}).then(({x:s,y:i})=>Object.assign(t.style,{left:`${s}px`,top:`${i}px`,minWidth:this.calcMinWidth(e),maxWidth:this.calcMaxWidth(e),minHeight:this.calcMinHeight(e),maxHeight:this.calcMaxHeight(e)}))})))},E=new WeakMap,C=new WeakMap,S=new WeakMap,rI.styles=sE(rB),tp([tA({type:Boolean,reflect:!0})],rI.prototype,"open",2),tp([tA()],rI.prototype,"triggerRef",2),tp([tA()],rI.prototype,"label",2),tp([tA()],rI.prototype,"placement",2),tp([tA()],rI.prototype,"calcMinWidth",2),tp([tA()],rI.prototype,"calcMaxWidth",2),tp([tA()],rI.prototype,"calcMinHeight",2),tp([tA()],rI.prototype,"calcMaxHeight",2),tp([tx()],rI.prototype,"_trigger",2),tp([tx()],rI.prototype,"_isVirtKbVisible",2),tp([s_("triggerRef")],rI.prototype,"_handleTriggerRefChanged",1),tp([s_("_trigger")],rI.prototype,"_handleTriggerChanged",1),tp([tx()],rI.prototype,"_tStyles",2),tp([s_("open")],rI.prototype,"_handleOpenChange",1),tp([(t="(max-width: 576px)",(e,s,i)=>{let r=window.matchMedia(t),o=e.connectedCallback,n=e.disconnectedCallback;e.connectedCallback=function(){o?.call(this);let e=e=>{i.value?.call(this,e.matches)};r.addEventListener("change",e),this.disconnectedCallback=function(){n?.call(this),r.removeEventListener("change",e)},i.value?.call(this,r.matches)}})],rI.prototype,"_handleMobileLayout",1),rI=tp([i$("gds-popover")],rI);var rU=class extends iG{constructor(){super(),this.invalid=!1,this.name="",this._handleFormReset=()=>{this.value=void 0};try{this.#t=this.attachInternals()}catch(e){this.#t={form:this.closest("form"),setFormValue:e=>{this.value=e},setValidity:(e,t)=>{this.invalid=e.customError},validationMessage:"",validity:{badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},willValidate:!0,checkValidity:()=>!0,reportValidity:()=>!0}}}#t;static{this.formAssociated=!0}get form(){return this.#t.form}get validity(){return this.#t.validity}get validationMessage(){return this.#t.validationMessage}get willValidate(){return this.#t.willValidate}checkValidity(){return this.#t.checkValidity()}reportValidity(){return this.#t.reportValidity()}connectedCallback(){super.connectedCallback(),this.#t.form?.addEventListener("reset",this._handleFormReset)}disconnectedCallback(){super.disconnectedCallback(),this.#t.form?.removeEventListener("reset",this._handleFormReset)}__handleValidityChange(){this.#t.setValidity({badInput:!1,customError:this.invalid,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!this.invalid},this.validationMessage||"Error message")}__handleValueChange(){this.#t.setFormValue(this.value)}};tp([tA({type:Boolean,reflect:!0,attribute:"aria-invalid",converter:{fromAttribute:Boolean,toAttribute:e=>e?.toString()}})],rU.prototype,"invalid",2),tp([tA()],rU.prototype,"value",2),tp([tA({reflect:!0})],rU.prototype,"name",2),tp([s_("invalid")],rU.prototype,"__handleValidityChange",1),tp([s_("value")],rU.prototype,"__handleValueChange",1);var rj=sC`
  @layer base, reset, transitional-styles;

  @layer base {
    button {
      appearance: none;
      display: block;
      background-color: black;
      border-radius: 2rem;
      border: none;
      color: white;
      padding: 0.7rem 2rem;
      margin: 0.5rem 0;
      box-sizing: border-box;
    }
  }
`,rY=class extends rU{constructor(){super(),ty(this,W),ty(this,L),ty(this,R),this.label="",this.open=!1,this.searchable=!1,this.multiple=!1,this.compareWith=(e,t)=>e===t,this.searchFilter=(e,t)=>t.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,ty(this,M,void 0),ty(this,F,e=>{let t=this._elSearchInput,s=Array.from(tf(this,M));s.forEach(e=>e.hidden=!1),t.value&&s.filter(e=>!this.searchFilter(t.value,e)).forEach(e=>e.hidden=!0)}),ty(this,T,e=>{this._elListbox?.then(t=>{if("ArrowDown"===e.key||"Tab"===e.key){e.preventDefault(),t.focus();return}})}),ty(this,D,e=>{if("Tab"===e.key&&this.searchable){e.preventDefault(),this._elSearchInput?.focus();return}}),ty(this,N,e=>{let t=this._elTriggerBtn;t&&(t.ariaActiveDescendantElement=e.target)}),ty(this,P,e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&(this.open=!1)}),ty(this,V,e=>{"Tab"!==e.key||this.searchable||(e.preventDefault(),this.open=!1,this._elTriggerBtn?.focus())}),sb(this),sf(this),tv(this,M,this.getElementsByTagName(function(e){return i_.get(e)??e}("gds-option")))}get type(){return"gds-dropdown"}get options(){return Array.from(tf(this,M)).filter(e=>!e.hasAttribute("isplaceholder"))}get placeholder(){return Array.from(tf(this,M)).find(e=>e.hasAttribute("isplaceholder"))}get displayValue(){return(Array.isArray(this.value)?this.value.length>2?sm(sh`${this.value.length} selected`):this.value.reduce((e,t)=>e+this.options.find(e=>e.value===t)?.innerHTML+", ","").slice(0,-2):this.options.find(e=>e.selected)?.innerHTML)||this.placeholder?.innerHTML||""}connectedCallback(){super.connectedCallback(),iY.instance.apply(this,"gds-dropdown"),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleValueChange()})}render(){return ix`
      ${this._tStyles}
      ${sl(this.label&&!this.hideLabel,()=>ix`<label for="trigger">${this.label}</label>`)}

      <span class="form-info"><slot name="sub-label"></slot></span>

      <button
        id="trigger"
        @click="${()=>this.open=!this.open}"
        aria-haspopup="listbox"
        role="combobox"
        aria-owns="listbox"
        aria-controls="listbox"
        aria-expanded="${this.open}"
        aria-label="${this.label}"
        class=${sd({small:"small"===this.size})}
      >
        <slot name="trigger">
          <span>${sn(this.displayValue)}</span>
        </slot>
      </button>

      <span class="form-info"><slot name="message"></slot></span>

      <gds-popover
        .label=${this.label}
        .open=${this.open}
        .triggerRef=${this._elTriggerBtnAsync}
        .calcMaxWidth=${e=>this.syncPopoverWidth?`${e.offsetWidth}px`:"auto"}
        .calcMaxHeight=${e=>`${this.maxHeight}px`}
        @gds-ui-state=${e=>this.open=e.detail.open}
      >
        ${sl(this.searchable,()=>ix`<input
              id="searchinput"
              type="text"
              aria-label="${sm("Filter available options")}"
              placeholder="${sm("Search")}"
              @keydown=${tf(this,T)}
              @keyup=${tf(this,F)}
            />`)}

        <gds-listbox
          id="listbox"
          .multiple="${sa(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${tb(this,W,z)}"
          @gds-focus="${tf(this,N)}"
          @keydown=${tf(this,D)}
        >
          <slot gds-allow="gds-option gds-menu-heading"></slot>
        </gds-listbox>
      </gds-popover>
    `}_handleLightDOMChange(){if(this.requestUpdate(),this.multiple){this._handleValueChange();return}void 0===this.value?this.placeholder?this.value=this.placeholder.value:this.value=this.options[0]?.value:this.placeholder||void 0!==this.options.find(e=>this.compareWith(e.value,this.value))||(this.options[0]&&(this.options[0].selected=!0),this.value=this.options[0]?.value)}_handleValueChange(){this._elListbox.then(e=>{e&&(Array.isArray(this.value)?e.selection=this.value:e.selection=[this.value])})}_onOpenChange(){let e=this.open;Array.from(tf(this,M)).forEach(t=>t.hidden=!e),e?tb(this,L,H).call(this):(tb(this,R,O).call(this),this._elSearchInput&&(this._elSearchInput.value="")),this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:e},bubbles:!0,composed:!0}))}};M=new WeakMap,F=new WeakMap,T=new WeakMap,D=new WeakMap,N=new WeakMap,W=new WeakSet,z=function(){this._elListbox.then(e=>{this.multiple?this.value=e.selection.map(e=>e.value):(this.value=e.selection[0]?.value,this.open=!1,setTimeout(()=>this._elTriggerBtn?.focus(),0)),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))})},L=new WeakSet,H=function(){this.addEventListener("blur",tf(this,P)),this.addEventListener("gds-blur",tf(this,P)),this.addEventListener("keydown",tf(this,V))},R=new WeakSet,O=function(){this.removeEventListener("blur",tf(this,P)),this.removeEventListener("gds-blur",tf(this,P)),this.removeEventListener("keydown",tf(this,V))},P=new WeakMap,V=new WeakMap,rY.styles=rj,rY.shadowRootOptions={mode:"open",delegatesFocus:!0},tp([tA()],rY.prototype,"label",2),tp([tA({type:Boolean,reflect:!0})],rY.prototype,"open",2),tp([tA({type:Boolean,reflect:!0})],rY.prototype,"searchable",2),tp([tA({type:Boolean,reflect:!0})],rY.prototype,"multiple",2),tp([tA()],rY.prototype,"compareWith",2),tp([tA()],rY.prototype,"searchFilter",2),tp([tA({type:Boolean,attribute:"sync-popover-width"})],rY.prototype,"syncPopoverWidth",2),tp([tA({type:Number,attribute:"max-height"})],rY.prototype,"maxHeight",2),tp([tA()],rY.prototype,"size",2),tp([tA({type:Boolean,attribute:"hide-label"})],rY.prototype,"hideLabel",2),tp([tx()],rY.prototype,"_tStyles",2),tp([tE("#trigger")],rY.prototype,"_elTriggerBtn",2),tp([tC("#trigger")],rY.prototype,"_elTriggerBtnAsync",2),tp([tC("#listbox")],rY.prototype,"_elListbox",2),tp([tE("#searchinput")],rY.prototype,"_elSearchInput",2),tp([function(e={attributes:!0,childList:!0,subtree:!1,characterData:!0}){return(t,s,i)=>{let r;let o=t.connectedCallback,n=t.disconnectedCallback;t.connectedCallback=function(){o?.call(this),(r=new MutationObserver((e,t)=>{i.value?.call(this)})).observe(this,e)},t.disconnectedCallback=function(){n?.call(this),r.disconnect()}}}({attributes:!0,childList:!0,subtree:!0,characterData:!0})],rY.prototype,"_handleLightDOMChange",1),tp([s_("value")],rY.prototype,"_handleValueChange",1),tp([s_("open")],rY.prototype,"_onOpenChange",1),rY=tp([i$("gds-dropdown")],rY);var rG=sC`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      padding: 0.5 1rem;
      cursor: pointer;
    }

    :host(:hover) {
      background-color: grey;
    }
  }
`,rq=class extends iG{connectedCallback(){super.connectedCallback(),this.setAttribute("inert","true"),this.updateComplete.then(()=>iY.instance.apply(this,"gds-menu-heading"))}render(){return s8`<slot></slot>`}};rq.styles=rG,rq=tp([i$("gds-menu-heading")],rq);var rK=globalThis,rZ=rK.trustedTypes,rX=rZ?rZ.createPolicy("lit-html",{createHTML:e=>e}):void 0,rJ="$lit$",rQ=`lit$${(Math.random()+"").slice(9)}$`,r0="?"+rQ,r1=`<${r0}>`,r2=document,r5=()=>r2.createComment(""),r3=e=>null===e||"object"!=typeof e&&"function"!=typeof e,r4=Array.isArray,r8=e=>r4(e)||"function"==typeof e?.[Symbol.iterator],r9="[ 	\n\f\r]",r6=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,r7=/-->/g,oe=/>/g,ot=RegExp(`>|${r9}(?:([^\\s"'>=/]+)(${r9}*=${r9}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),os=/'/g,oi=/"/g,or=/^(?:script|style|textarea|title)$/i,oo=e=>(t,...s)=>({_$litType$:e,strings:t,values:s}),on=oo(1);oo(2);var ol=Symbol.for("lit-noChange"),oa=Symbol.for("lit-nothing"),od=new WeakMap,oh=r2.createTreeWalker(r2,129);function oc(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==rX?rX.createHTML(t):t}var ou=(e,t)=>{let s=e.length-1,i=[],r,o=2===t?"<svg>":"",n=r6;for(let t=0;t<s;t++){let s=e[t],l,a,d=-1,h=0;for(;h<s.length&&(n.lastIndex=h,null!==(a=n.exec(s)));)h=n.lastIndex,n===r6?"!--"===a[1]?n=r7:void 0!==a[1]?n=oe:void 0!==a[2]?(or.test(a[2])&&(r=RegExp("</"+a[2],"g")),n=ot):void 0!==a[3]&&(n=ot):n===ot?">"===a[0]?(n=r??r6,d=-1):void 0===a[1]?d=-2:(d=n.lastIndex-a[2].length,l=a[1],n=void 0===a[3]?ot:'"'===a[3]?oi:os):n===oi||n===os?n=ot:n===r7||n===oe?n=r6:(n=ot,r=void 0);let c=n===ot&&e[t+1].startsWith("/>")?" ":"";o+=n===r6?s+r1:d>=0?(i.push(l),s.slice(0,d)+rJ+s.slice(d)+rQ+c):s+rQ+(-2===d?t:c)}return[oc(e,o+(e[s]||"<?>")+(2===t?"</svg>":"")),i]},op=class e{constructor({strings:t,_$litType$:s},i){let r;this.parts=[];let o=0,n=0,l=t.length-1,a=this.parts,[d,h]=ou(t,s);if(this.el=e.createElement(d,i),oh.currentNode=this.el.content,2===s){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=oh.nextNode())&&a.length<l;){if(1===r.nodeType){if(r.hasAttributes())for(let e of r.getAttributeNames())if(e.endsWith(rJ)){let t=h[n++],s=r.getAttribute(e).split(rQ),i=/([.?@])?(.*)/.exec(t);a.push({type:1,index:o,name:i[2],strings:s,ctor:"."===i[1]?om:"?"===i[1]?ob:"@"===i[1]?o_:ov}),r.removeAttribute(e)}else e.startsWith(rQ)&&(a.push({type:6,index:o}),r.removeAttribute(e));if(or.test(r.tagName)){let e=r.textContent.split(rQ),t=e.length-1;if(t>0){r.textContent=rZ?rZ.emptyScript:"";for(let s=0;s<t;s++)r.append(e[s],r5()),oh.nextNode(),a.push({type:2,index:++o});r.append(e[t],r5())}}}else if(8===r.nodeType){if(r.data===r0)a.push({type:2,index:o});else{let e=-1;for(;-1!==(e=r.data.indexOf(rQ,e+1));)a.push({type:7,index:o}),e+=rQ.length-1}}o++}}static createElement(e,t){let s=r2.createElement("template");return s.innerHTML=e,s}};function og(e,t,s=e,i){if(t===ol)return t;let r=void 0!==i?s._$Co?.[i]:s._$Cl,o=r3(t)?void 0:t._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(e))._$AT(e,s,i),void 0!==i?(s._$Co??=[])[i]=r:s._$Cl=r),void 0!==r&&(t=og(e,r._$AS(e,t.values),r,i)),t}var of=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:s}=this._$AD,i=(e?.creationScope??r2).importNode(t,!0);oh.currentNode=i;let r=oh.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let t;2===l.type?t=new oy(r,r.nextSibling,this,e):1===l.type?t=new l.ctor(r,l.name,l.strings,this,e):6===l.type&&(t=new o$(r,this,e)),this._$AV.push(t),l=s[++n]}o!==l?.index&&(r=oh.nextNode(),o++)}return oh.currentNode=r2,i}p(e){let t=0;for(let s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}},oy=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=oa,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){r3(e=og(this,e,t))?e===oa||null==e||""===e?(this._$AH!==oa&&this._$AR(),this._$AH=oa):e!==this._$AH&&e!==ol&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):r8(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==oa&&r3(this._$AH)?this._$AA.nextSibling.data=e:this.$(r2.createTextNode(e)),this._$AH=e}g(e){let{values:t,_$litType$:s}=e,i="number"==typeof s?this._$AC(e):(void 0===s.el&&(s.el=op.createElement(oc(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(t);else{let e=new of(i,this),s=e.u(this.options);e.p(t),this.$(s),this._$AH=e}}_$AC(e){let t=od.get(e.strings);return void 0===t&&od.set(e.strings,t=new op(e)),t}T(t){r4(this._$AH)||(this._$AH=[],this._$AR());let s=this._$AH,i,r=0;for(let o of t)r===s.length?s.push(i=new e(this.k(r5()),this.k(r5()),this,this.options)):i=s[r],i._$AI(o),r++;r<s.length&&(this._$AR(i&&i._$AB.nextSibling,r),s.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}},ov=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,r){this.type=1,this._$AH=oa,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=oa}_$AI(e,t=this,s,i){let r=this.strings,o=!1;if(void 0===r)(o=!r3(e=og(this,e,t,0))||e!==this._$AH&&e!==ol)&&(this._$AH=e);else{let i,n;let l=e;for(e=r[0],i=0;i<r.length-1;i++)(n=og(this,l[s+i],t,i))===ol&&(n=this._$AH[i]),o||=!r3(n)||n!==this._$AH[i],n===oa?e=oa:e!==oa&&(e+=(n??"")+r[i+1]),this._$AH[i]=n}o&&!i&&this.O(e)}O(e){e===oa?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},om=class extends ov{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===oa?void 0:e}},ob=class extends ov{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==oa)}},o_=class extends ov{constructor(e,t,s,i,r){super(e,t,s,i,r),this.type=5}_$AI(e,t=this){if((e=og(this,e,t,0)??oa)===ol)return;let s=this._$AH,i=e===oa&&s!==oa||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==oa&&(s===oa||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},o$=class{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){og(this,e)}},ow=rK.litHtmlPolyfillSupport;ow?.(op,oy),(rK.litHtmlVersions??=[]).push("3.1.0");var oA={ATTRIBUTE:1},ox=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},ok=(e=class extends ox{constructor(e){if(super(e),e.type!==oA.ATTRIBUTE||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.it){for(let s in this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[s]&&!this.st?.has(s)&&this.it.add(s);return this.render(t)}let s=e.element.classList;for(let e of this.it)e in t||(s.remove(e),this.it.delete(e));for(let e in t){let i=!!t[e];i===this.it.has(e)||this.st?.has(e)||(i?(s.add(e),this.it.add(e)):(s.remove(e),this.it.delete(e)))}return ol}},(...t)=>({_$litDirective$:e,values:t})),oE=sC`
  @layer base, reset, transitional-styles;
  @layer base {
    button {
      display: flex;
      border-width: 0;
      background-color: #ededed;
      border-radius: calc(1px * infinity);
      padding: 0.4rem 0.8rem;
      font-family: inherit;
      cursor: pointer;
      align-items: center;
      gap: 0.5rem;
    }

    button:hover {
      background-color: #dcdcdc;
    }
  }
`,oC=class extends iG{constructor(){super(),ty(this,B,iB()),new iK(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),iY.instance.apply(this,"gds-listbox")}get navigableItems(){return tf(this,B).value&&iZ(tf(this,B).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&"gds-menu-item"===e.gdsElementName)||[]}focus(){this.navigableItems[0]?.focus()}render(){return ix`${this._tStyles}<slot ${ij(tf(this,B))}></slot>`}};B=new WeakMap,tp([tx()],oC.prototype,"_tStyles",2),oC=tp([i$("gds-menu")],oC);var oS=class extends iG{constructor(){super(),ty(this,I),this.open=!1,this.buttonLabel=sm("Open context menu"),this.showLabel=!1,this.label="",this.placement="bottom-start",sb(this)}connectedCallback(){super.connectedCallback(),iY.instance.apply(this,"gds-context-menu"),this.addEventListener("keydown",e=>{this.open&&"Tab"==e.key&&(e.preventDefault(),this.open=!1,this.elTriggerBtn.then(e=>e.focus()))})}render(){return ix`${this._tStyles}
      <button
        id="trigger"
        class="icon border-0 small ${ok({highlighted:this.open})}"
        aria-label=${this.buttonLabel??this.label}
        aria-haspopup="menu"
        aria-controls="menu"
        aria-expanded=${this.open}
        @click=${()=>this.open=!this.open}
      >
        <slot name="trigger">
          ${this.showLabel?this.buttonLabel??this.label:s6}
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M14 12C14 13.1042 13.1042 14 12 14C10.8958 14 10 13.1042 10 12C10 10.8958 10.8958 10 12 10C13.1042 10 14 10.8958 14 12ZM19 10C17.8958 10 17 10.8958 17 12C17 13.1042 17.8958 14 19 14C20.1042 14 21 13.1042 21 12C21 10.8958 20.1042 10 19 10ZM5 10C3.89583 10 3 10.8958 3 12C3 13.1042 3.89583 14 5 14C6.10417 14 7 13.1042 7 12C7 10.8958 6.10417 10 5 10Z"
              fill="#353531"
            />
          </svg>
        </slot>
      </button>
      <gds-popover
        id="menu"
        .open=${this.open}
        .triggerRef=${this.elTriggerBtn}
        .label=${this.label}
        .placement=${this.placement}
        @gds-ui-state=${e=>this.open=e.detail.open}
      >
        <gds-menu
          aria-label=${this.label??this.buttonLabel}
          @gds-menu-item-click=${tb(this,I,U)}
        >
          <slot allow="gds-menu-item gds-menu-heading"></slot>
        </gds-menu>
      </gds-popover>`}};I=new WeakSet,U=function(){this.open=!1},oS.styles=[oE],oS.shadowRootOptions={mode:"open",delegatesFocus:!0},tp([tA({type:Boolean,reflect:!0})],oS.prototype,"open",2),tp([tA({attribute:"button-label"})],oS.prototype,"buttonLabel",2),tp([tA({attribute:"show-label"})],oS.prototype,"showLabel",2),tp([tA()],oS.prototype,"label",2),tp([tA()],oS.prototype,"placement",2),tp([tx()],oS.prototype,"_tStyles",2),tp([tC("#trigger")],oS.prototype,"elTriggerBtn",2),oS=tp([i$("gds-context-menu")],oS);var oM=class extends iQ(iG){constructor(){super(...arguments),ty(this,j,()=>{this.dispatchEvent(new CustomEvent("gds-menu-item-click",{bubbles:!0,composed:!0}))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem"),this.addEventListener("keydown",e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),this.click())}),this.addEventListener("click",tf(this,j)),iY.instance.apply(this,"gds-option")}render(){return ix`${this._tStyles}
      <div><slot></slot></div>`}};j=new WeakMap,oM.styles=[iJ],tp([tx()],oM.prototype,"_tStyles",2),oM=tp([i$("gds-menu-item")],oM);var oF=class{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}},oT=class{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){var e;null!==(e=this.Y)&&void 0!==e||(this.Y=new Promise(e=>this.Z=e))}resume(){var e;null===(e=this.Z)||void 0===e||e.call(this),this.Y=this.Z=void 0}},oD=e=>!iE(e)&&"function"==typeof e.then,oN=si(class extends iV{constructor(){super(...arguments),this._$C_t=1073741823,this._$Cwt=[],this._$Cq=new oF(this),this._$CK=new oT}render(...e){var t;return null!==(t=e.find(e=>!oD(e)))&&void 0!==t?t:tK}update(e,t){let s=this._$Cwt,i=s.length;this._$Cwt=t;let r=this._$Cq,o=this._$CK;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$C_t);e++){let n=t[e];if(!oD(n))return this._$C_t=e,n;e<i&&n===s[e]||(this._$C_t=1073741823,i=0,Promise.resolve(n).then(async e=>{for(;o.get();)await o.get();let t=r.deref();if(void 0!==t){let s=t._$Cwt.indexOf(n);s>-1&&s<t._$C_t&&(t._$C_t=s,t.setValue(e))}}))}return tK}disconnected(){this._$Cq.disconnect(),this._$CK.pause()}reconnected(){this._$Cq.reconnect(this),this._$CK.resume()}}),oW=(e,t,s)=>{let i=new Map;for(let r=t;r<=s;r++)i.set(e[r],r);return i},oz=si(class extends sr{constructor(e){if(super(e),e.type!==ss.CHILD)throw Error("repeat() can only be used in text expressions")}ct(e,t,s){let i;void 0===s?s=t:void 0!==t&&(i=t);let r=[],o=[],n=0;for(let t of e)r[n]=i?i(t,n):n,o[n]=s(t,n),n++;return{values:o,keys:r}}render(e,t,s){return this.ct(e,t,s).values}update(e,[t,s,i]){var r;let o=iN(e),{values:n,keys:l}=this.ct(t,s,i);if(!Array.isArray(o))return this.ut=l,n;let a=null!==(r=this.ut)&&void 0!==r?r:this.ut=[],d=[],h,c,u=0,p=o.length-1,g=0,f=n.length-1;for(;u<=p&&g<=f;)if(null===o[u])u++;else if(null===o[p])p--;else if(a[u]===l[g])d[g]=iF(o[u],n[g]),u++,g++;else if(a[p]===l[f])d[f]=iF(o[p],n[f]),p--,f--;else if(a[u]===l[f])d[f]=iF(o[u],n[f]),iM(e,d[f+1],o[u]),u++,f--;else if(a[p]===l[g])d[g]=iF(o[p],n[g]),iM(e,o[u],o[p]),p--,g++;else if(void 0===h&&(h=oW(l,g,f),c=oW(a,u,p)),h.has(a[u])){if(h.has(a[p])){let t=c.get(l[g]),s=void 0!==t?o[t]:null;if(null===s){let t=iM(e,o[u]);iF(t,n[g]),d[g]=t}else d[g]=iF(s,n[g]),iM(e,o[u],s),o[t]=null;g++}else iW(o[p]),p--}else iW(o[u]),u++;for(;g<=f;){let t=iM(e,d[f+1]);iF(t,n[g]),d[g++]=t}for(;u<=p;){let e=o[u++];null!==e&&iW(e)}return this.ut=l,iD(e,d),tK}});function oL(e){return(oL="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function oH(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function oR(e,t){if(t.length<e)throw TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function oO(e){oR(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===oL(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):(("string"==typeof e||"[object String]"===t)&&"undefined"!=typeof console&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(Error().stack)),new Date(NaN))}function oP(e,t){oR(2,arguments);var s=oO(e),i=oH(t);return isNaN(i)?new Date(NaN):(i&&s.setDate(s.getDate()+i),s)}function oV(e,t){oR(2,arguments);var s=oO(e),i=oH(t);if(isNaN(i))return new Date(NaN);if(!i)return s;var r=s.getDate(),o=new Date(s.getTime());return(o.setMonth(s.getMonth()+i+1,0),r>=o.getDate())?o:(s.setFullYear(o.getFullYear(),o.getMonth(),r),s)}var oB={};function oI(e,t){oR(1,arguments);var s,i,r,o,n,l,a,d,h=oH(null!==(s=null!==(i=null!==(r=null!==(o=null==t?void 0:t.weekStartsOn)&&void 0!==o?o:null==t?void 0:null===(n=t.locale)||void 0===n?void 0:null===(l=n.options)||void 0===l?void 0:l.weekStartsOn)&&void 0!==r?r:oB.weekStartsOn)&&void 0!==i?i:null===(a=oB.locale)||void 0===a?void 0:null===(d=a.options)||void 0===d?void 0:d.weekStartsOn)&&void 0!==s?s:0);if(!(h>=0&&h<=6))throw RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=oO(e),u=c.getDay();return c.setDate(c.getDate()-((u<h?7:0)+u-h)),c.setHours(0,0,0,0),c}function oU(e){oR(1,arguments);var t=oO(e);return t.setHours(0,0,0,0),t}function oj(e,t){oR(2,arguments);var s=oU(e),i=oU(t);return s.getTime()===i.getTime()}var oY=sC`
  @layer base, reset, transitional-styles;
  @layer base {
    td.disabled {
      color: #999;
      cursor: default;
    }
    td.today {
      background-color: #eee;
    }
  }
`,oG=class extends iG{constructor(){super(...arguments),ty(this,Y),ty(this,q),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.focusedDate=new Date,this.disabledWeekends=!1,this.showWeekNumbers=!1}get focusedMonth(){return this.focusedDate.getMonth()}set focusedMonth(e){let t=new Date(this.focusedDate);t.setMonth(e),t.setHours(0,0,0,0),this.focusedDate=t}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(e){this.focusedDate=new Date(this.focusedDate.setFullYear(e))}getDateCell(e){return this.shadowRoot?.querySelector(`#dateCell-${e}`)}connectedCallback(){super.connectedCallback(),iY.instance.apply(this,"gds-calendar"),this.addEventListener("keydown",tb(this,q,K))}focus(){super.focus(),this._elFocusedCell?.focus()}render(){let e=new Date;return s8`${this._tStyles}
      <table>
        <thead>
          <tr>
            ${sl(this.showWeekNumbers,()=>s8`<th></th>`)}
            <th>${sm("Mon")}</th>
            <th>${sm("Tue")}</th>
            <th>${sm("Wed")}</th>
            <th>${sm("Thu")}</th>
            <th>${sm("Fri")}</th>
            <th>${sm("Sat")}</th>
            <th>${sm("Sun")}</th>
          </tr>
        </thead>
        <tbody>
          ${function(e,t){let s=function(e,t){oR(1,arguments);var s=e||{},i=oO(s.start),r=oO(s.end),o=r.getTime();if(!(i.getTime()<=o))throw RangeError("Invalid interval");var n=oI(i,t),l=oI(r,t);n.setHours(15),l.setHours(15),o=l.getTime();for(var a=[],d=n;d.getTime()<=o;)d.setHours(0),a.push(oO(d)),(d=function(e,t){return oR(2,arguments),oP(e,7*oH(t))}(d,1)).setHours(15);return a}({start:function(e){oR(1,arguments);var t=oO(e);return t.setDate(1),t.setHours(0,0,0,0),t}(e),end:function(e){oR(1,arguments);var t=oO(e),s=t.getMonth();return t.setFullYear(t.getFullYear(),s+1,0),t.setHours(23,59,59,999),t}(e)},{weekStartsOn:1});return on`${t(s.map(e=>({days:function(e,t){oR(1,arguments);var s,i=e||{},r=oO(i.start),o=oO(i.end).getTime();if(!(r.getTime()<=o))throw RangeError("Invalid interval");var n=[];r.setHours(0,0,0,0);var l=Number(null!==(s=null==t?void 0:t.step)&&void 0!==s?s:1);if(l<1||isNaN(l))throw RangeError("`options.step` must be a number greater than 1");for(;r.getTime()<=o;)n.push(oO(r)),r.setDate(r.getDate()+l),r.setHours(0,0,0,0);return n}({start:e,end:oP(e,6)})})))}`}(this.focusedDate,t=>s8`
              ${t.map(t=>s8`
                  <tr>
                    ${sl(this.showWeekNumbers,()=>s8`<td class="week-number">
                          ${(function(e,t){oR(1,arguments);var s=oO(e);return Math.round((oI(s,t).getTime()-(function(e,t){oR(1,arguments);var s,i,r,o,n,l,a,d,h=oH(null!==(s=null!==(i=null!==(r=null!==(o=null==t?void 0:t.firstWeekContainsDate)&&void 0!==o?o:null==t?void 0:null===(n=t.locale)||void 0===n?void 0:null===(l=n.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==r?r:oB.firstWeekContainsDate)&&void 0!==i?i:null===(a=oB.locale)||void 0===a?void 0:null===(d=a.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==s?s:1),c=function(e,t){oR(1,arguments);var s,i,r,o,n,l,a,d,h=oO(e),c=h.getFullYear(),u=oH(null!==(s=null!==(i=null!==(r=null!==(o=null==t?void 0:t.firstWeekContainsDate)&&void 0!==o?o:null==t?void 0:null===(n=t.locale)||void 0===n?void 0:null===(l=n.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==r?r:oB.firstWeekContainsDate)&&void 0!==i?i:null===(a=oB.locale)||void 0===a?void 0:null===(d=a.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==s?s:1);if(!(u>=1&&u<=7))throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var p=new Date(0);p.setFullYear(c+1,0,u),p.setHours(0,0,0,0);var g=oI(p,t),f=new Date(0);f.setFullYear(c,0,u),f.setHours(0,0,0,0);var y=oI(f,t);return h.getTime()>=g.getTime()?c+1:h.getTime()>=y.getTime()?c:c-1}(e,t),u=new Date(0);return u.setFullYear(c,0,h),u.setHours(0,0,0,0),oI(u,t)})(s,t).getTime())/6048e5)+1})(t.days[0])}
                        </td>`)}
                    ${t.days.map(t=>{let s=!function(e,t){oR(2,arguments);var s=oO(e),i=oO(t);return s.getFullYear()===i.getFullYear()&&s.getMonth()===i.getMonth()}(this.focusedDate,t)||t<this.min||t>this.max,i=0===t.getDay()||6===t.getDay(),r=s||this.disabledWeekends&&i||this.disabledDates&&this.disabledDates.some(e=>oj(e,t));return s8`
                        <td
                          class="${sd({disabled:!!r,today:oj(e,t)})}"
                          ?disabled=${r}
                          tabindex="${oj(this.focusedDate,t)?0:-1}"
                          aria-selected="${this.value&&oj(this.value,t)}"
                          aria-label="${t.toDateString()}"
                          @click=${()=>r?null:tb(this,Y,G).call(this,t)}
                          id="dateCell-${t.getDate()}"
                        >
                          ${t.getDate()}
                        </td>
                      `})}
                  </tr>
                `)}
            `)}
        </tbody>
      </table>`}_valueChanged(){this.value&&(this.focusedDate=this.value)}};Y=new WeakSet,G=function(e){this.value=e,this.dispatchEvent(new CustomEvent("change",{detail:e,bubbles:!1,composed:!1}))},q=new WeakSet,K=function(e){let t=!1,s=new Date(this.focusedDate);"ArrowLeft"===e.key?(s=oP(this.focusedDate,-1),t=!0):"ArrowRight"===e.key?(s=oP(this.focusedDate,1),t=!0):"ArrowUp"===e.key?(s=oP(this.focusedDate,-7),t=!0):"ArrowDown"===e.key?(s=oP(this.focusedDate,7),t=!0):"Enter"===e.key||" "===e.key?(this._elFocusedCell?.hasAttribute("disabled")||tb(this,Y,G).call(this,this.focusedDate),t=!0):"Home"===e.key?(s=new Date(this.focusedYear,this.focusedMonth,1),t=!0):"End"===e.key?(s=new Date(this.focusedYear,this.focusedMonth+1,0),t=!0):"PageUp"===e.key?(s=function(e,t){return oR(2,arguments),oV(e,-oH(t))}(this.focusedDate,1),t=!0):"PageDown"===e.key&&(s=oV(this.focusedDate,1),t=!0),s.getFullYear()>=this.min.getFullYear()&&s.getFullYear()<=this.max.getFullYear()&&(this.focusedDate=s),t&&(e.preventDefault(),e.stopPropagation(),this.updateComplete.then(()=>{this._elFocusedCell?.focus(),this.dispatchEvent(new CustomEvent("gds-date-focused",{detail:this.focusedDate,bubbles:!1,composed:!1}))}))},oG.styles=[oY],oG.shadowRootOptions={mode:"open",delegatesFocus:!0},tp([tA()],oG.prototype,"value",2),tp([tA({type:Date})],oG.prototype,"min",2),tp([tA({type:Date})],oG.prototype,"max",2),tp([tA()],oG.prototype,"focusedDate",2),tp([tA({type:Boolean,attribute:"disabled-weekends"})],oG.prototype,"disabledWeekends",2),tp([tA({type:Array,attribute:"disabled-dates"})],oG.prototype,"disabledDates",2),tp([tA({type:Number})],oG.prototype,"focusedMonth",1),tp([tA({type:Number})],oG.prototype,"focusedYear",1),tp([tA({type:Boolean})],oG.prototype,"showWeekNumbers",2),tp([tE('td[tabindex="0"]')],oG.prototype,"_elFocusedCell",2),tp([tx()],oG.prototype,"_tStyles",2),tp([s_("value")],oG.prototype,"_valueChanged",1),oG=tp([i$("gds-calendar")],oG);var oq=class extends iv{constructor(){super(...arguments),ty(this,er),ty(this,en),ty(this,ea),ty(this,eh),ty(this,eu),this.value=0,this.length=2,this.min=0,this.max=Number.MAX_SAFE_INTEGER,this.displayValue=tb(this,ea,ed).call(this,this.value,this.length),ty(this,Z,""),ty(this,X,()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=2===this.length?this.min:new Date().getFullYear()-1),this.value=tb(this,eh,ec).call(this,e+1),tb(this,en,el).call(this)}),ty(this,J,()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=2===this.length?this.max:new Date().getFullYear()+1),this.value=tb(this,eh,ec).call(this,e-1),tb(this,en,el).call(this)}),ty(this,Q,e=>{e.stopPropagation(),e.preventDefault(),this.focus()}),ty(this,ee,()=>{tb(this,eu,ep).call(this)}),ty(this,et,()=>{""!==tf(this,Z)&&(tb(this,eu,ep).call(this),this.value=tb(this,eh,ec).call(this,parseInt(this.value.toString())),tb(this,en,el).call(this))}),ty(this,es,e=>{e.stopPropagation(),e.preventDefault(),e.deltaY>0?tf(this,J).call(this):tf(this,X).call(this)}),ty(this,ei,e=>{let t=!1;if("ArrowUp"===e.key)tf(this,X).call(this),t=!0;else if("ArrowDown"===e.key)tf(this,J).call(this),t=!0;else{let s=parseInt(e.key);isNaN(s)||(tf(this,Z).length<this.length&&(tv(this,Z,tf(this,Z)+s.toString()),this.value=parseInt(tf(this,Z))),tf(this,Z).length===this.length&&(this.value=tb(this,eh,ec).call(this,this.value),tb(this,eu,ep).call(this),tb(this,er,eo).call(this),tb(this,en,el).call(this)),t=!0)}t&&(e.preventDefault(),e.stopPropagation())})}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.setAttribute("role","spinbutton"),this.setAttribute("tabindex","0"),this.addEventListener("wheel",tf(this,es)),this.addEventListener("keydown",tf(this,ei)),this.addEventListener("blur",tf(this,et)),this.addEventListener("focus",tf(this,ee)),this.addEventListener("click",tf(this,Q)),this.addEventListener("mousedown",tf(this,Q))}focus(e){super.focus(e),tf(this,ee).call(this)}render(){return ix`${this.displayValue}`}_refreshDisplayValue(){this.displayValue=tb(this,ea,ed).call(this,this.value,this.length),this.setAttribute("aria-valuetext",this.value.toString())}};Z=new WeakMap,X=new WeakMap,J=new WeakMap,Q=new WeakMap,ee=new WeakMap,et=new WeakMap,es=new WeakMap,ei=new WeakMap,er=new WeakSet,eo=function(){let e=this.nextElementSibling;for(;e;){if(e instanceof oq){e.focus();break}e=e.nextElementSibling}},en=new WeakSet,el=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value.toString()}}))},ea=new WeakSet,ed=function(e,t){return String(e).padStart(t,"0")},eh=new WeakSet,ec=function(e){return Math.max(this.min,Math.min(this.max,e))},eu=new WeakSet,ep=function(){tv(this,Z,"")},oq.formAssociated=!0,tp([tA({type:Number})],oq.prototype,"value",2),tp([tA({type:Number})],oq.prototype,"length",2),tp([tA({type:Number,attribute:"aria-valuemin"})],oq.prototype,"min",2),tp([tA({type:Number,attribute:"aria-valuemax"})],oq.prototype,"max",2),tp([tx()],oq.prototype,"displayValue",2),tp([s_("value")],oq.prototype,"_refreshDisplayValue",1),oq=tp([i$("gds-date-part-spinner")],oq);var oK=sC`
  @layer base, reset, transitional-styles;
  @layer base {
    label {
      display: block;
    }
  }
`,oZ={fromAttribute:e=>new Date(e),toAttribute:e=>e.toISOString()},oX=class extends rU{constructor(){super(...arguments),ty(this,ef),ty(this,ev),ty(this,eb),ty(this,e$),ty(this,eA),ty(this,ek),ty(this,eC),ty(this,eB),ty(this,eY),ty(this,eq),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.open=!1,this.label="",this.showWeekNumbers=!1,this.size="medium",this.hideLabel=!1,this.disabledWeekends=!1,this._focusedMonth=new Date().getMonth(),this._focusedYear=new Date().getFullYear(),this._dateFormatLayout=tb(this,eB,eI).call(this,"y-m-d"),ty(this,eg,void 0),ty(this,eM,e=>{this._elTrigger.then(t=>{e.relatedTarget?.parentElement!==e.target&&document.getSelection()?.removeAllRanges()})}),ty(this,eF,e=>{this._elTrigger.then(e=>{document.getSelection()?.removeAllRanges();let t=new Range;t.setStart(e.firstChild,0),t.setEnd(e.lastChild,4),document.getSelection()?.addRange(t)})}),ty(this,eT,e=>{this._elTrigger.then(t=>{e.currentTarget===t&&(e.preventDefault(),e.clipboardData?.setData("text/plain",this.displayValue))})}),ty(this,eD,e=>{this._elTrigger.then(t=>{if(e.currentTarget!==t)return;e.preventDefault();let s=e.clipboardData?.getData("text/plain");if(!s)return;let i=new Date(s);"Invalid Date"!==i.toString()&&(this.value=i,tb(this,ek,eE).call(this))})}),ty(this,eN,e=>{this._elSpinners[0].focus()}),ty(this,eW,e=>{e.stopPropagation(),this.value=e.detail,this.open=!1,tb(this,ek,eE).call(this)}),ty(this,ez,e=>{e.stopPropagation(),this._focusedMonth=e.target?.value}),ty(this,eL,e=>{e.stopPropagation(),this._focusedYear=e.target?.value}),ty(this,eH,e=>{this._focusedMonth++,this._focusedMonth>11&&(this._focusedMonth=0,this._focusedYear++)}),ty(this,eR,e=>{this._focusedMonth--,this._focusedMonth<0&&(this._focusedMonth=11,this._focusedYear--)}),ty(this,eO,async()=>{this._focusedMonth=(await this._elCalendar).focusedMonth,this._focusedYear=(await this._elCalendar).focusedYear,this.value=(await this._elCalendar).focusedDate,this.requestUpdate(),tb(this,eC,eS).call(this)}),ty(this,eP,async e=>{e.target===e.currentTarget&&(this.open=e.detail.open,"close"===e.detail.reason&&(this.value=(await this._elCalendar).value,this.value&&(this._focusedMonth=this.value.getMonth(),this._focusedYear=this.value.getFullYear()),tb(this,ek,eE).call(this)),"cancel"===e.detail.reason&&(this.value=tf(this,eg)))}),ty(this,eV,e=>{let t=Array.from(this._elSpinners).findIndex(t=>t===e.target);if("ArrowRight"===e.key){let e=this._elSpinners[t+1];e&&e.focus()}if("ArrowLeft"===e.key){let e=this._elSpinners[t-1];e&&e.focus()}}),ty(this,eU,(e,t)=>{tf(this,ej)[t]=e;let s=new Date;s.setFullYear(parseInt(tf(this,ej).year)),s.setMonth(parseInt(tf(this,ej).month)-1),s.setDate(parseInt(tf(this,ej).day)),"Invalid Date"!==s.toString()&&(this.value=s,tb(this,ek,eE).call(this))}),ty(this,ej,{year:"yyyy",month:"mm",day:"dd"})}get type(){return"gds-datepicker"}get dateformat(){return this._dateFormatLayout.layout.map(e=>e.token).join(this._dateFormatLayout.delimiter)}set dateformat(e){this._dateFormatLayout=tb(this,eB,eI).call(this,e)}async getFocusedDate(){return this.open?this._elCalendar.then(e=>e.focusedDate):void 0}get displayValue(){return this._elInput.innerText.replace(/\s+/g,"")}async test_getDateCell(e){return this._elCalendar.then(t=>t.getDateCell(e))}connectedCallback(){super.connectedCallback(),iY.instance.apply(this,"gds-datepicker")}render(){return ix`${this._tStyles}
      ${sl(this.label&&!this.hideLabel,()=>ix`<label for="spinner-0" id="label">${this.label}</label>`)}

      <div class="form-info"><slot name="sub-label"></slot></div>

      <div
        class=${sd({field:!0,small:"small"===this.size})}
        id="trigger"
        @click=${tf(this,eN)}
        @copy=${tf(this,eT)}
        @paste=${tf(this,eD)}
      >
        <div
          class=${sd({input:!0,"is-placeholder":!this.value})}
          @focusout=${tf(this,eM)}
        >
          ${function*(e,t){let s="function"==typeof t;if(void 0!==e){let i=-1;for(let r of e)i>-1&&(yield s?t(i):t),i++,yield r}}(function*(e,t){if(void 0!==e){let s=0;for(let i of e)yield t(i,s++)}}(this._dateFormatLayout.layout,(e,t)=>ix`<gds-date-part-spinner
                  id="spinner-${t}"
                  .length=${"y"===e.token?4:2}
                  .value=${tf(this,ej)[e.name]}
                  aria-valuemin=${tb(this,e$,ew).call(this,e.name)}
                  aria-valuemax=${tb(this,eA,ex).call(this,e.name)}
                  aria-label=${tb(this,eb,e_).call(this,e.name)}
                  aria-describedby="label"
                  @keydown=${tf(this,eV)}
                  @change=${t=>tf(this,eU).call(this,t.detail.value,e.name)}
                  @focus=${tf(this,eF)}
                  @touchend=${e=>{this.open=!0,e.preventDefault()}}
                ></gds-date-part-spinner>`),ix`<span>${this._dateFormatLayout.delimiter}</span>`)}
        </div>
        <button
          id="calendar-button"
          aria-label="${sm("Open calendar modal")}"
          aria-haspopup="menu"
          aria-expanded=${this.open}
          aria-controls="calendar-popover"
          aria-describedby="label"
          @click=${()=>this.open=!this.open}
        >
          <svg viewBox="0 0 24 24" inert>
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        </button>
      </div>

      <div class="form-info"><slot name="message"></slot></div>

      <gds-popover
        .triggerRef=${this._elTrigger}
        .open=${this.open}
        @gds-ui-state=${tf(this,eP)}
        label=${this.label}
        id="calendar-popover"
        .placement=${"bottom-end"}
        .calcMinWidth=${()=>this.showWeekNumbers?"350px":"305px"}
        @focusin=${async e=>{e.target?.id!=="calendar-popover"||this._elCalendar.then(e=>e.focus())}}
      >
        <div class="header">
          <button
            @click=${tf(this,eR)}
            aria-label=${sm("Previous month")}
          >
            <i class="icon prev"></i>
          </button>
          <gds-dropdown
            .value=${this._focusedMonth.toString()}
            @change=${tf(this,ez)}
            .maxHeight=${300}
            label="${sm("Month")}"
            style="width:120px"
            size="small"
            hide-label
          >
            <gds-option value="0">${sm("January")}</gds-option>
            <gds-option value="1">${sm("February")}</gds-option>
            <gds-option value="2">${sm("March")}</gds-option>
            <gds-option value="3">${sm("April")}</gds-option>
            <gds-option value="4">${sm("May")}</gds-option>
            <gds-option value="5">${sm("June")}</gds-option>
            <gds-option value="6">${sm("July")}</gds-option>
            <gds-option value="7">${sm("August")}</gds-option>
            <gds-option value="8">${sm("September")}</gds-option>
            <gds-option value="9">${sm("October")}</gds-option>
            <gds-option value="10">${sm("November")}</gds-option>
            <gds-option value="11">${sm("December")}</gds-option>
          </gds-dropdown>
          <gds-dropdown
            .value=${this._focusedYear.toString()}
            @change=${tf(this,eL)}
            .maxHeight=${300}
            label="${sm("Year")}"
            size="small"
            hide-label
          >
            ${oz(tf(this,eY,eG),e=>e,e=>ix`<gds-option value=${e}>${e}</gds-option>`)}
          </gds-dropdown>
          <button
            @click=${tf(this,eH)}
            aria-label=${sm("Next month")}
          >
            <i class="icon next"></i>
          </button>
        </div>

        <gds-calendar
          id="calendar"
          @change=${tf(this,eW)}
          @gds-date-focused=${tf(this,eO)}
          .focusedMonth=${this._focusedMonth}
          .focusedYear=${this._focusedYear}
          .value=${this.value}
          .min=${this.min}
          .max=${this.max}
          .showWeekNumbers=${this.showWeekNumbers}
          .disabledWeekends=${this.disabledWeekends}
          .disabledDates=${this.disabledDates}
        ></gds-calendar>

        <div class="footer">
          <button
            class="tertiary clear"
            @click=${()=>{this.value=void 0,tb(this,ek,eE).call(this)}}
          >
            ${sm("Clear")}
          </button>
          ${oN(tb(this,ef,ey).call(this),s6)}
          <button
            class="tertiary today"
            @click=${()=>{this.value=new Date,tb(this,ek,eE).call(this)}}
          >
            ${sm("Today")}
          </button>
        </div>
      </gds-popover> `}_handleValueChange(){if(!this.value){tv(this,ej,{year:"yyyy",month:"mm",day:"dd"});return}let e=this.value;this._focusedMonth=e.getMonth(),this._focusedYear=e.getFullYear();let t=e.getFullYear().toString(),s=(e.getMonth()+1).toString().padStart(2,"0"),i=e.getDate().toString().padStart(2,"0");tv(this,ej,{year:t,month:s,day:i})}_handleOpenChange(){this.open&&(tv(this,eg,this.value),this._elCalendar.then(e=>e.focus()))}};eg=new WeakMap,ef=new WeakSet,ey=async function(){let e;let t=await this.getFocusedDate(),s="";return t&&t>this.max?(s=sm("Last available date"),e=()=>tb(this,ev,em).call(this,this.max)):t&&t<this.min&&(s=sm("First available date"),e=()=>tb(this,ev,em).call(this,this.min)),ix`${sl(s.length>0,()=>ix`<button class="tertiary back-to-range" @click=${e}>
          ${s}
        </button>`,()=>s6)}`},ev=new WeakSet,em=function(e){let t=new Date(e);this._elCalendar.then(e=>e.focusedDate=t).then(tf(this,eO))},eb=new WeakSet,e_=function(e){return({year:sm("Year"),month:sm("Month"),day:sm("Day")})[e]},e$=new WeakSet,ew=function(e){return({year:1900,month:1,day:1})[e]},eA=new WeakSet,ex=function(e){return({year:9999,month:12,day:31})[e]},ek=new WeakSet,eE=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value}}))},eC=new WeakSet,eS=function(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value}}))},eM=new WeakMap,eF=new WeakMap,eT=new WeakMap,eD=new WeakMap,eN=new WeakMap,eW=new WeakMap,ez=new WeakMap,eL=new WeakMap,eH=new WeakMap,eR=new WeakMap,eO=new WeakMap,eP=new WeakMap,eV=new WeakMap,eB=new WeakSet,eI=function(e){let t=e.replace(/[a-z0-9]/gi,"")[0],s=e.split(t),i=s.findIndex(e=>"y"===e),r=s.findIndex(e=>"m"===e),o=s.findIndex(e=>"d"===e);if(-1===i||-1===r||-1===o)throw Error("Invalid date format for <gds-datepicker>");return{delimiter:t,layout:[i,r,o].sort((e,t)=>e-t).map(e=>s[e]).map(e=>({token:e,name:"y"===e?"year":"m"===e?"month":"day"}))}},eU=new WeakMap,ej=new WeakMap,eY=new WeakSet,eG=function(){let e=this.min.getFullYear(),t=this.max.getFullYear(),s=tf(this,eq,eK),i=this.value?.getFullYear();return{*[Symbol.iterator](){s&&(yield i);for(let s=e;s<=t;s++)yield s}}},eq=new WeakSet,eK=function(){return!!this.value&&(this.value.getFullYear()<this.min.getFullYear()||this.value.getFullYear()>this.max.getFullYear())},oX.styles=[oK],oX.shadowRootOptions={mode:"open",delegatesFocus:!0},tp([tA({converter:oZ})],oX.prototype,"value",2),tp([tA({converter:oZ})],oX.prototype,"min",2),tp([tA({converter:oZ})],oX.prototype,"max",2),tp([tA({type:Boolean})],oX.prototype,"open",2),tp([tA()],oX.prototype,"label",2),tp([tA({type:Boolean,attribute:"show-week-numbers"})],oX.prototype,"showWeekNumbers",2),tp([tA()],oX.prototype,"size",2),tp([tA({type:Boolean,attribute:"hide-label"})],oX.prototype,"hideLabel",2),tp([tA()],oX.prototype,"dateformat",1),tp([tA({type:Boolean,attribute:"disabled-weekends"})],oX.prototype,"disabledWeekends",2),tp([tA({converter:{fromAttribute:e=>e.split(",").map(e=>new Date(e.trim())),toAttribute:e=>JSON.stringify(e.map(e=>e.toISOString()))},attribute:"disabled-dates"})],oX.prototype,"disabledDates",2),tp([tC("#calendar-button")],oX.prototype,"test_calendarButton",2),tp([tx()],oX.prototype,"_focusedMonth",2),tp([tx()],oX.prototype,"_focusedYear",2),tp([tx()],oX.prototype,"_dateFormatLayout",2),tp([tC("#calendar")],oX.prototype,"_elCalendar",2),tp([tC("#trigger")],oX.prototype,"_elTrigger",2),tp([(s=function(e){return i_.get(e)??e}("gds-date-part-spinner"),tk({descriptor:e=>({get(){var e,t;return null!==(t=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelectorAll(s))&&void 0!==t?t:[]},enumerable:!0,configurable:!0})}))],oX.prototype,"_elSpinners",2),tp([tE(".input")],oX.prototype,"_elInput",2),tp([tx()],oX.prototype,"_tStyles",2),tp([s_("value")],oX.prototype,"_handleValueChange",1),tp([s_("open")],oX.prototype,"_handleOpenChange",1),oX=tp([i$("gds-datepicker")],oX);var oJ=`/**
 * Do not edit directly
 * Generated on Tue, 23 Apr 2024 14:05:12 GMT
 */

:host {
  color-scheme: light;
  --gds-sys-color-blue: #41b0ee;
  --gds-sys-color-dark-blue-1: #41b0ee;
  --gds-sys-color-dark-blue-2: #007ac7;
  --gds-sys-color-green: #60cd18;
  --gds-sys-color-dark-green-1: #45b400;
  --gds-sys-color-dark-green-2: #308800;
  --gds-sys-color-yellow: #ffc500;
  --gds-sys-color-dark-yellow-1: #ffb400;
  --gds-sys-color-dark-yellow-2: #f8a000;
  --gds-sys-color-primary-text: #333333;
  --gds-sys-color-secondary-text: #ababab;
  --gds-sys-color-white-text: #ffffff;
  --gds-sys-color-link-text: #0062bc;
  --gds-sys-color-error-text: #9f000a;
  --gds-sys-color-disabled-text: #adadad;
  --gds-sys-color-red: #f03529;
  --gds-sys-color-dark-red-1: #d81a1a;
  --gds-sys-color-dark-red-2: #bb000c;
  --gds-sys-color-purple: #673ab6;
  --gds-sys-color-dark-purple-1: #4f2C99;
  --gds-sys-color-dark-purple-2: #3f2587;
  --gds-sys-color-base-white: #ffffff;
  --gds-sys-color-base100: #f8f8f8;
  --gds-sys-color-base200: #e9e9e9;
  --gds-sys-color-base300: #dedede;
  --gds-sys-color-base400: #cecece;
  --gds-sys-color-base500: #adadad;
  --gds-sys-color-base600: #868686;
  --gds-sys-color-base700: #494949;
  --gds-sys-color-base800: #333333;
  --gds-sys-color-base900: #1a1a1a;
  --gds-sys-color-accent-accent-green: #006D31;
  --gds-sys-color-accent-on-accent-green: #FFFFFF;
  --gds-sys-color-accent-accent-orange: #FFBA30;
  --gds-sys-color-accent-on-accent-orange: #353531;
  --gds-sys-color-background-background: #FFFFFF;
  --gds-sys-color-background-background-dim: #F3F3F2;
  --gds-sys-color-container-container: #F3F3F2;
  --gds-sys-color-container-container-dim1: #E7E7E4;
  --gds-sys-color-container-container-dim2: #DADAD7;
  --gds-sys-color-container-container-bright: #FFFFFF;
  --gds-sys-color-container-container-shade1: #353531;
  --gds-sys-color-container-container-shade2: #1B1B18;
  --gds-sys-color-container-container-shade3: #353531;
  --gds-sys-color-container-container-disabled: #F9F9F9;
  --gds-sys-color-container-container-positive: #006D31;
  --gds-sys-color-container-container-negative: #BA1D00;
  --gds-sys-color-container-container-negative-bright: #FFEDE9;
  --gds-sys-color-content-content: #353531;
  --gds-sys-color-content-content-inverse: #FFFFFF;
  --gds-sys-color-content-content-secondary: #6A6A62;
  --gds-sys-color-content-content-positive: #006D31;
  --gds-sys-color-content-content-positive-bright: #EAFFE8;
  --gds-sys-color-content-content-negative: #BA1D00;
  --gds-sys-color-content-content-negative-bright: #FFF8F6;
  --gds-sys-color-content-content-custom-blue-bright: #F8F9FF;
  --gds-sys-color-content-content-disabled: #9D9D95;
  --gds-sys-color-custom-custom-blue: #005FAC;
  --gds-sys-color-custom-on-custom-blue: #D4E3FF;
  --gds-sys-color-custom-custom-blue-bright: #D4E3FF;
  --gds-sys-color-custom-on-custom-blue-bright: #00315D;
  --gds-sys-color-custom-custom-green: #003916;
  --gds-sys-color-custom-on-custom-green: #EAFFE8;
  --gds-sys-color-custom-custom-green-bright: #EAFFE8;
  --gds-sys-color-custom-on-custom-green-bright: #003916;
  --gds-sys-color-custom-custom-grey: #353531;
  --gds-sys-color-custom-on-custom-grey: #E7E7E4;
  --gds-sys-color-custom-custom-grey-bright: #E7E7E4;
  --gds-sys-color-custom-on-custom-grey-bright: #353531;
  --gds-sys-color-primary-primary: #353531;
  --gds-sys-color-state-layers-state-black: #000000 10%;
  --gds-sys-color-state-layers-state-black-dim1: #000000 20%;
  --gds-sys-color-state-layers-state-black-dim2: #000000 40%;
  --gds-sys-color-state-layers-state-black-shade: #000000 60%;
  --gds-sys-color-state-layers-state-positive: #006d31 10%;
  --gds-sys-color-state-layers-state-positive-dim: #006d31 20%;
  --gds-sys-color-state-layers-state-negative: #ba1d00 10%;
  --gds-sys-color-state-layers-state-negative-dim: #ba1d00 20%;
  --gds-sys-color-state-layers-state-custom-blue: #005fac 20%;
  --gds-sys-color-status-information-information: #353531;
  --gds-sys-color-status-information-on-information: #FFFFFF;
  --gds-sys-color-status-information-information-bright: #F3F3F2;
  --gds-sys-color-status-information-on-information-bright: #353531;
  --gds-sys-color-status-negative-negative: #BA1D00;
  --gds-sys-color-status-negative-on-negative: #FFFFFF;
  --gds-sys-color-status-negative-negative-bright: #FFEDE9;
  --gds-sys-color-status-negative-on-negative-bright: #BA1D00;
  --gds-sys-color-status-warning-warning: #9D6E00;
  --gds-sys-color-status-warning-on-warning: #FFFFFF;
  --gds-sys-color-status-warning-warning-bright: #FFEED9;
  --gds-sys-color-status-warning-on-warning-bright: #7D5700;
  --gds-sys-color-status-positive-positive: #006D31;
  --gds-sys-color-status-positive-on-positive: #FFFFFF;
  --gds-sys-color-status-positive-positive-bright: #EAFFE8;
  --gds-sys-color-status-positive-on-positive-bright: #006D31;
  --gds-sys-color-status-notice-notice: #005FAC;
  --gds-sys-color-status-notice-on-notice: #FFFFFF;
  --gds-sys-color-status-notice-notice-bright: #EBF1FF;
  --gds-sys-color-status-notice-on-notice-bright: #005FAC;
  --gds-sys-color-stroke-stroke: #353531;
  --gds-sys-color-stroke-stroke-variant1: #85857A;
  --gds-sys-color-stroke-stroke-variant2: #CECECA;
  --gds-sys-color-stroke-stroke-disabled: #9D9D95;
  --gds-sys-color-stroke-stroke-notice: #005FAC;
  --gds-sys-color-stroke-stroke-positive: #006D31;
  --gds-sys-color-stroke-stroke-warning: #7D5700;
  --gds-sys-color-stroke-stroke-negative: #BA1D00;
  --gds-sys-color-stroke-stroke-custom-blue: #005FAC;
  --gds-sys-color-stroke-stroke-custom-blue-bright: #6FAEFF;
  --gds-sys-color-stroke-stroke-inversed: #FFFFFF;
}
`,oQ=`/**
 * Do not edit directly
 * Generated on Tue, 23 Apr 2024 14:05:12 GMT
 */

:host {
  --gds-sys-typography-weight-bold: 700;
  --gds-sys-typography-weight-medium: 500;
  --gds-sys-typography-weight-book: 450;
  --gds-sys-typography-weight-regular: 400;
  --gds-sys-typography-weight-light: 300;
  --gds-sys-typography-size-label-overline: 14px;
  --gds-sys-typography-size-label-input-medium: 14px;
  --gds-sys-typography-size-label-input-large: 16px;
  --gds-sys-typography-size-label-information-medium: 14px;
  --gds-sys-typography-size-label-information-large: 16px;
  --gds-sys-typography-size-label-small: 12px;
  --gds-sys-typography-size-label-medium: 14px;
  --gds-sys-typography-size-label-large: 16px;
  --gds-sys-typography-size-body-small: 12px;
  --gds-sys-typography-size-body-medium: 14px;
  --gds-sys-typography-size-body-large: 16px;
  --gds-sys-typography-size-title-small: 14px;
  --gds-sys-typography-size-title-medium: 16px;
  --gds-sys-typography-size-title-large: 22px;
  --gds-sys-typography-size-headline-small: 24px;
  --gds-sys-typography-size-headline-medium: 28px;
  --gds-sys-typography-size-headline-large: 32px;
  --gds-sys-typography-size-display-small: 40px;
  --gds-sys-typography-size-display-medium: 64px;
  --gds-sys-typography-size-display-large: 82px;
  --gds-sys-typography-line-height-label-overline: 18px;
  --gds-sys-typography-line-height-label-input-medium: 20px;
  --gds-sys-typography-line-height-label-input-large: 20px;
  --gds-sys-typography-line-height-label-information-medium: 20px;
  --gds-sys-typography-line-height-label-information-large: 20px;
  --gds-sys-typography-line-height-label-small: 16px;
  --gds-sys-typography-line-height-label-medium: 20px;
  --gds-sys-typography-line-height-label-large: 20px;
  --gds-sys-typography-line-height-body-small: 16px;
  --gds-sys-typography-line-height-body-medium: 20px;
  --gds-sys-typography-line-height-body-large: 20px;
  --gds-sys-typography-line-height-title-small: 20px;
  --gds-sys-typography-line-height-title-medium: 24px;
  --gds-sys-typography-line-height-title-large: 28px;
  --gds-sys-typography-line-height-headline-small: 30px;
  --gds-sys-typography-line-height-headline-medium: 36px;
  --gds-sys-typography-line-height-headline-large: 40px;
  --gds-sys-typography-line-height-display-small: 52px;
  --gds-sys-typography-line-height-display-medium: 80px;
  --gds-sys-typography-line-height-display-large: 98px;
  --gds-sys-state-hover-state-layer-opacity: 0.10;
  --gds-sys-grid-width-desktop-lg: 2560px;
  --gds-sys-grid-width-desktop-md: 1440px;
  --gds-sys-grid-width-desktop-sm: 1024px;
  --gds-sys-grid-width-tablet: 768px;
  --gds-sys-grid-width-mobile: 425px;
  --gds-sys-grid-columns-24: 24;
  --gds-sys-grid-columns-12: 12;
  --gds-sys-grid-columns-8: 8;
  --gds-sys-grid-columns-6: 6;
  --gds-sys-grid-columns-4: 4;
  --gds-sys-grid-columns-2: 2;
  --gds-ref-size-15: 9999px;
  --gds-ref-size-14: 128px;
  --gds-ref-size-13: 112px;
  --gds-ref-size-12: 96px;
  --gds-ref-size-11: 80px;
  --gds-ref-size-10: 64px;
  --gds-ref-size-9: 48px;
  --gds-ref-size-8: 40px;
  --gds-ref-size-7: 32px;
  --gds-ref-size-6: 24px;
  --gds-ref-size-5: 16px;
  --gds-ref-size-4: 12px;
  --gds-ref-size-3: 8px;
  --gds-ref-size-2: 4px;
  --gds-ref-size-1: 2px;
  --gds-ref-size-0: 0px;
  --gds-sys-space-spacer-120: var(--gds-ref-size-14);
  --gds-sys-space-spacer-112: var(--gds-ref-size-13);
  --gds-sys-space-spacer-96: var(--gds-ref-size-12);
  --gds-sys-space-spacer-80: var(--gds-ref-size-11);
  --gds-sys-space-spacer-64: var(--gds-ref-size-10);
  --gds-sys-space-spacer-48: var(--gds-ref-size-9);
  --gds-sys-space-spacer-40: var(--gds-ref-size-8);
  --gds-sys-space-spacer-32: var(--gds-ref-size-7);
  --gds-sys-space-spacer-24: var(--gds-ref-size-6);
  --gds-sys-space-spacer-16: var(--gds-ref-size-5);
  --gds-sys-space-spacer-12: var(--gds-ref-size-4);
  --gds-sys-space-spacer-8: var(--gds-ref-size-3);
  --gds-sys-space-spacer-4: var(--gds-ref-size-2);
  --gds-sys-space-spacer-2: var(--gds-ref-size-1);
  --gds-sys-space-spacer-0: var(--gds-ref-size-0);
  --gds-sys-space-padding-120: var(--gds-ref-size-14);
  --gds-sys-space-padding-112: var(--gds-ref-size-13);
  --gds-sys-space-padding-96: var(--gds-ref-size-12);
  --gds-sys-space-padding-80: var(--gds-ref-size-11);
  --gds-sys-space-padding-64: var(--gds-ref-size-10);
  --gds-sys-space-padding-48: var(--gds-ref-size-9);
  --gds-sys-space-padding-40: var(--gds-ref-size-8);
  --gds-sys-space-padding-32: var(--gds-ref-size-7);
  --gds-sys-space-padding-24: var(--gds-ref-size-6);
  --gds-sys-space-padding-16: var(--gds-ref-size-5);
  --gds-sys-space-padding-12: var(--gds-ref-size-4);
  --gds-sys-space-padding-8: var(--gds-ref-size-3);
  --gds-sys-space-padding-4: var(--gds-ref-size-2);
  --gds-sys-space-padding-2: var(--gds-ref-size-1);
  --gds-sys-space-padding-0: var(--gds-ref-size-0);
  --gds-sys-space-margins-120: var(--gds-ref-size-14);
  --gds-sys-space-margins-112: var(--gds-ref-size-13);
  --gds-sys-space-margins-96: var(--gds-ref-size-12);
  --gds-sys-space-margins-80: var(--gds-ref-size-11);
  --gds-sys-space-margins-64: var(--gds-ref-size-10);
  --gds-sys-space-margins-48: var(--gds-ref-size-9);
  --gds-sys-space-margins-40: var(--gds-ref-size-8);
  --gds-sys-space-margins-32: var(--gds-ref-size-7);
  --gds-sys-space-margins-24: var(--gds-ref-size-6);
  --gds-sys-space-margins-16: var(--gds-ref-size-5);
  --gds-sys-space-margins-12: var(--gds-ref-size-4);
  --gds-sys-space-margins-8: var(--gds-ref-size-3);
  --gds-sys-space-margins-4: var(--gds-ref-size-2);
  --gds-sys-space-margins-2: var(--gds-ref-size-1);
  --gds-sys-space-margins-0: var(--gds-ref-size-0);
  --gds-sys-radii-full: var(--gds-ref-size-15);
  --gds-sys-radii-4xl: var(--gds-ref-size-12);
  --gds-sys-radii-3xl: var(--gds-ref-size-9);
  --gds-sys-radii-2xl: var(--gds-ref-size-7);
  --gds-sys-radii-xl: var(--gds-ref-size-6);
  --gds-sys-radii-l: var(--gds-ref-size-5);
  --gds-sys-radii-m: var(--gds-ref-size-4);
  --gds-sys-radii-s: var(--gds-ref-size-3);
  --gds-sys-radii-xs: var(--gds-ref-size-2);
  --gds-sys-radii-none: var(--gds-ref-size-0);
  --gds-sys-grid-padding-3xl: var(--gds-ref-size-12);
  --gds-sys-grid-padding-2xl: var(--gds-ref-size-9);
  --gds-sys-grid-padding-xl: var(--gds-ref-size-7);
  --gds-sys-grid-padding-l: var(--gds-ref-size-6);
  --gds-sys-grid-padding-m: var(--gds-ref-size-5);
  --gds-sys-grid-padding-s: var(--gds-ref-size-3);
  --gds-sys-grid-padding-xs: var(--gds-ref-size-2);
  --gds-sys-grid-padding-none: var(--gds-ref-size-0);
  --gds-sys-grid-gap-3xl: var(--gds-ref-size-12);
  --gds-sys-grid-gap-2xl: var(--gds-ref-size-9);
  --gds-sys-grid-gap-xl: var(--gds-ref-size-7);
  --gds-sys-grid-gap-l: var(--gds-ref-size-6);
  --gds-sys-grid-gap-m: var(--gds-ref-size-5);
  --gds-sys-grid-gap-s: var(--gds-ref-size-3);
  --gds-sys-grid-gap-xs: var(--gds-ref-size-2);
  --gds-sys-grid-gap-none: var(--gds-ref-size-0);
  --gds-sys-grid-breakpoint-desktop-lg: var(--gds-sys-grid-columns-12);
  --gds-sys-grid-breakpoint-desktop-md: var(--gds-sys-grid-columns-12);
  --gds-sys-grid-breakpoint-desktop-sm: var(--gds-sys-grid-columns-12);
  --gds-sys-grid-breakpoint-tablet: var(--gds-sys-grid-columns-12);
  --gds-sys-grid-breakpoint-mobile: var(--gds-sys-grid-columns-4);
}
`,o0=[sE(`/**
 * Do not edit directly
 * Generated on Tue, 23 Apr 2024 14:05:12 GMT
 */

:host {
  --gds-ref-color-neutral000: #ffffff;
  --gds-ref-color-neutral050: #f8f8f8;
  --gds-ref-color-neutral100: #e9e9e9;
  --gds-ref-color-neutral150: #eeeeee;
  --gds-ref-color-neutral200: #dedede;
  --gds-ref-color-neutral250: #cecece;
  --gds-ref-color-neutral300: #ababab;
  --gds-ref-color-neutral350: #adadad;
  --gds-ref-color-neutral400: #868686;
  --gds-ref-color-neutral450: #757575;
  --gds-ref-color-neutral500: #494949;
  --gds-ref-color-neutral525: #464646;
  --gds-ref-color-neutral550: #333333;
  --gds-ref-color-neutral600: #2c2c2c;
  --gds-ref-color-neutral650: #272727;
  --gds-ref-color-neutral700: #222222;
  --gds-ref-color-neutral750: #1a1a1a;
  --gds-ref-color-neutral800: #121212;
  --gds-ref-color-blue100: #58b8ee;
  --gds-ref-color-blue200: #41b0ee;
  --gds-ref-color-blue300: #00adff;
  --gds-ref-color-blue400: #2c9cd9;
  --gds-ref-color-blue500: #0092e1;
  --gds-ref-color-blue600: #007ac7;
  --gds-ref-color-blue700: #0062bc;
  --gds-ref-color-green100: #75b44a;
  --gds-ref-color-green200: #60cd18;
  --gds-ref-color-green300: #45b400;
  --gds-ref-color-green400: #308800;
  --gds-ref-color-red100: #f7706d;
  --gds-ref-color-red200: #ff594f;
  --gds-ref-color-red300: #f03529;
  --gds-ref-color-red400: #d81a1a;
  --gds-ref-color-red500: #c82a29;
  --gds-ref-color-red600: #bb000c;
  --gds-ref-color-red700: #9f000a;
  --gds-ref-color-red800: #9e2120;
  --gds-ref-color-purple100: #ad91dc;
  --gds-ref-color-purple200: #7e52cc;
  --gds-ref-color-purple300: #673ab6;
  --gds-ref-color-purple400: #4f2C99;
  --gds-ref-color-purple500: #4a328f;
  --gds-ref-color-purple600: #3f2587;
  --gds-ref-color-yellow100: #ffe182;
  --gds-ref-color-yellow200: #ffc500;
  --gds-ref-color-yellow300: #ffb400;
  --gds-ref-color-yellow400: #f8a000;
  --gds-ref-color-yellow500: #f0be47;
  --gds-ref-color-yellow600: #ebab39;
  --gds-ref-color-blue-5: #001127;
  --gds-ref-color-blue-10: #001C39;
  --gds-ref-color-blue-15: #00264B;
  --gds-ref-color-blue-20: #00315D;
  --gds-ref-color-blue-25: #003C70;
  --gds-ref-color-blue-30: #004883;
  --gds-ref-color-blue-35: #005397;
  --gds-ref-color-blue-40: #005FAC;
  --gds-ref-color-blue-45: #006CC1;
  --gds-ref-color-blue-50: #0078D7;
  --gds-ref-color-blue-55: #0085EC;
  --gds-ref-color-blue-60: #1992FF;
  --gds-ref-color-blue-65: #4EA0FF;
  --gds-ref-color-blue-70: #6FAEFF;
  --gds-ref-color-blue-75: #8ABBFF;
  --gds-ref-color-blue-80: #A4C9FF;
  --gds-ref-color-blue-85: #BCD6FF;
  --gds-ref-color-blue-90: #D4E3FF;
  --gds-ref-color-blue-95: #EBF1FF;
  --gds-ref-color-blue-98: #F8F9FF;
  --gds-ref-color-green-5: #001505;
  --gds-ref-color-green-10: #00210E;
  --gds-ref-color-green-15: #002D10;
  --gds-ref-color-green-20: #003916;
  --gds-ref-color-green-25: #00461D;
  --gds-ref-color-green-30: #005323;
  --gds-ref-color-green-35: #00602A;
  --gds-ref-color-green-40: #006D31;
  --gds-ref-color-green-45: #007B38;
  --gds-ref-color-green-50: #138942;
  --gds-ref-color-green-55: #29964D;
  --gds-ref-color-green-60: #39A459;
  --gds-ref-color-green-65: #48B265;
  --gds-ref-color-green-70: #57C071;
  --gds-ref-color-green-75: #65CE7E;
  --gds-ref-color-green-80: #73DC8A;
  --gds-ref-color-green-85: #81EA97;
  --gds-ref-color-green-90: #8FF9A4;
  --gds-ref-color-green-95: #C5FFCA;
  --gds-ref-color-green-98: #EAFFE8;
  --gds-ref-color-black: #000000;
  --gds-ref-color-white: #FFFFFF;
  --gds-ref-color-grey-5: #0D0D0C;
  --gds-ref-color-grey-10: #1B1B18;
  --gds-ref-color-grey-15: #282825;
  --gds-ref-color-grey-20: #353531;
  --gds-ref-color-grey-25: #42423D;
  --gds-ref-color-grey-30: #505049;
  --gds-ref-color-grey-35: #5D5D56;
  --gds-ref-color-grey-40: #6A6A62;
  --gds-ref-color-grey-45: #77776E;
  --gds-ref-color-grey-50: #85857A;
  --gds-ref-color-grey-55: #919188;
  --gds-ref-color-grey-60: #9D9D95;
  --gds-ref-color-grey-65: #A9A9A2;
  --gds-ref-color-grey-70: #B6B6AF;
  --gds-ref-color-grey-75: #C2C2BD;
  --gds-ref-color-grey-80: #CECECA;
  --gds-ref-color-grey-85: #DADAD7;
  --gds-ref-color-grey-90: #E7E7E4;
  --gds-ref-color-grey-95: #F3F3F2;
  --gds-ref-color-grey-98: #F9F9F9;
  --gds-ref-color-orange-5: #1A0F00;
  --gds-ref-color-orange-10: #271900;
  --gds-ref-color-orange-15: #352200;
  --gds-ref-color-orange-20: #422C00;
  --gds-ref-color-orange-25: #503700;
  --gds-ref-color-orange-30: #503700;
  --gds-ref-color-orange-35: #6E4C00;
  --gds-ref-color-orange-40: #7D5700;
  --gds-ref-color-orange-45: #8D6300;
  --gds-ref-color-orange-50: #9D6E00;
  --gds-ref-color-orange-55: #AE7A00;
  --gds-ref-color-orange-60: #BE8600;
  --gds-ref-color-orange-65: #CF9300;
  --gds-ref-color-orange-70: #E19F00;
  --gds-ref-color-orange-75: #F2AC00;
  --gds-ref-color-orange-80: #FFBA30;
  --gds-ref-color-orange-85: #FFCC77;
  --gds-ref-color-orange-90: #FFDEAB;
  --gds-ref-color-orange-95: #FFEED9;
  --gds-ref-color-orange-98: #FFF8F3;
  --gds-ref-color-red-5: #2B0200;
  --gds-ref-color-red-10: #3E0400;
  --gds-ref-color-red-15: #510700;
  --gds-ref-color-red-20: #650B00;
  --gds-ref-color-red-25: #790F00;
  --gds-ref-color-red-30: #8E1400;
  --gds-ref-color-red-35: #A31800;
  --gds-ref-color-red-40: #BA1D00;
  --gds-ref-color-red-45: #D02200;
  --gds-ref-color-red-50: #E23010;
  --gds-ref-color-red-55: #F53E1D;
  --gds-ref-color-red-60: #FF5636;
  --gds-ref-color-red-65: #FF7257;
  --gds-ref-color-red-70: #FF8A73;
  --gds-ref-color-red-75: #FFA08D;
  --gds-ref-color-red-80: #FFB4A5;
  --gds-ref-color-red-85: #FFC8BC;
  --gds-ref-color-red-90: #FFDAD3;
  --gds-ref-color-red-95: #FFEDE9;
  --gds-ref-color-red-98: #FFF8F6;
}
`),sE(oJ),sE(oQ)],o1=sC`
  @layer grid, grid.desktop, grid.tablet, grid.mobile, grid.span, grid.space, grid.align, grid.debug;

  @layer grid {
    :host {
      --_c: var(--gds-sys-grid-columns-12);
      --_grid-col: repeat(var(--_c), 1fr);
      --_grid-col-start: 1;
      --_grid-col-end: -1;
      --_gap-column: 0;
      --_gap-row: 0;
      display: grid;
      width: 100%;
      grid-template-columns: var(--_grid-col);
      grid-column-gap: var(--_gap-column);
      grid-row-gap: var(--_gap-row);
      padding: var(--_grid-padding);
      text-wrap: balance;
    }

    :host([auto-columns]) {
      --_col-count: var(--_c, 0);
      --_gap-count: calc(var(--_col-count) - 1);
      --_total-gap-width: calc(var(--_gap-count) * var(--_gap-column, 0px));
      --_col-width-max: calc(
        (100% - var(--_total-gap-width)) / var(--_col-count)
      );
      grid-template-columns: repeat(
        auto-fill,
        minmax(max(var(--_col-width), var(--_col-width-max)), 1fr)
      );
    }
  }

  /* Responsive */

  :host([columns]) {
    --_c: var(--_columns-desktop);
  }

  :host {
    --_gap-column: var(--_gap-desktop);
    --_gap-row: var(--_row-gap-desktop);
    --_grid-padding: var(--_padding-desktop);
    --_col-width: var(--_col-width-desktop);
  }

  @media only screen and (max-width: 768px) {
    :host([columns]) {
      --_c: var(--_columns-tablet);
    }

    :host {
      --_gap-column: var(--_gap-tablet);
      --_gap-row: var(--_row-gap-tablet);
      --_grid-padding: var(--_padding-tablet);
      --_col-width: var(--_col-width-tablet);
    }
  }

  @media only screen and (max-width: 425px) {
    :host([columns]) {
      --_c: var(--_columns-mobile);
    }

    :host {
      --_c: var(--_columns-mobile);
      --_gap-column: var(--_gap-mobile);
      --_gap-row: var(--_row-gap-mobile);
      --_grid-padding: var(--_padding-mobile);
      --_col-width: var(--_col-width-mobile);
    }
  }
`,o2=/(?<l>l:([a-z0-9]+))?\s*(?<m>m:([a-z0-9]+))?\s*(?<s>s:([a-z0-9]+))?/,o5=class extends iv{constructor(){super(...arguments),this._gridVariables={varsColumn:sC``,varsGap:sC``,varsRowGap:sC``,varsPadding:sC``,varsAutoColumns:sC``}}connectedCallback(){super.connectedCallback(),this._updateColumnVariables(),this._updateGapVariables(),this._updateRowGapVariables(),this._updatePaddingVariables(),this._updateAutoColumnsVariables()}_updateColumnVariables(){let e,t,s;let i=this.columns?.match(o2);if(this.columns&&!isNaN(Number(this.columns)))e=t=s=Number(this.columns);else{let{l:r,m:o,s:n}=i?.groups||{};e=r?Number(r.split(":")[1]):void 0,t=o?Number(o.split(":")[1]):void 0,s=n?Number(n.split(":")[1]):void 0}let r=[{name:"_columns-desktop",value:e},{name:"_columns-tablet",value:t},{name:"_columns-mobile",value:s}].filter(({value:e})=>void 0!==e).map(({name:e,value:t})=>`--${e}: ${t};`).join(" ");this._gridVariables={...this._gridVariables,varsColumn:sC`
        ${sE(r)}
      `},this.requestUpdate("_gridVariables")}_updateGapVariables(){let e,t,s;let i=this.gap?.match(o2);if(this.gap&&!this.gap.includes(" "))e=t=s=`var(--gds-sys-grid-gap-${this.gap})`;else{let{l:r,m:o,s:n}=i?.groups||{};e=r?`var(--gds-sys-grid-gap-${r.split(":")[1]})`:void 0,t=o?`var(--gds-sys-grid-gap-${o.split(":")[1]})`:void 0,s=n?`var(--gds-sys-grid-gap-${n.split(":")[1]})`:void 0}let r=[{name:"_gap-desktop",value:e},{name:"_gap-tablet",value:t},{name:"_gap-mobile",value:s}].filter(({value:e})=>void 0!==e).map(({name:e,value:t})=>`--${e}: ${t};`).join(" ");this._gridVariables={...this._gridVariables,varsGap:sC`
        ${sE(r)}
      `},this.requestUpdate("_gridVariables")}_updateRowGapVariables(){let e,t,s;let i=this.rowGap?.match(o2);if(this.rowGap&&!this.rowGap.includes(" "))e=t=s=`var(--gds-sys-grid-gap-${this.rowGap})`;else{let{l:r,m:o,s:n}=i?.groups||{};e=r?`var(--gds-sys-grid-gap-${r.split(":")[1]})`:void 0,t=o?`var(--gds-sys-grid-gap-${o.split(":")[1]})`:void 0,s=n?`var(--gds-sys-grid-gap-${n.split(":")[1]})`:void 0}let r=[{name:"_row-gap-desktop",value:e},{name:"_row-gap-tablet",value:t},{name:"_row-gap-mobile",value:s}].filter(({value:e})=>void 0!==e).map(({name:e,value:t})=>`--${e}: ${t};`).join(" ");this._gridVariables={...this._gridVariables,varsRowGap:sC`
        ${sE(r)}
      `},this.requestUpdate("_gridVariables")}_updatePaddingVariables(){let e,t,s;let i=this.padding?.match(o2);if(this.padding&&!this.padding.includes(" "))e=t=s=`var(--gds-sys-grid-gap-${this.gap})`;else{let{l:r,m:o,s:n}=i?.groups||{};e=r?`var(--gds-sys-grid-gap-${r.split(":")[1]})`:void 0,t=o?`var(--gds-sys-grid-gap-${o.split(":")[1]})`:void 0,s=n?`var(--gds-sys-grid-gap-${n.split(":")[1]})`:void 0}let r=[{name:"_padding-desktop",value:e},{name:"_padding-tablet",value:t},{name:"_padding-mobile",value:s}].filter(({value:e})=>void 0!==e).map(({name:e,value:t})=>`--${e}: ${t};`).join(" ");this._gridVariables={...this._gridVariables,varsPadding:sC`
        ${sE(r)}
      `},this.requestUpdate("_gridVariables")}_updateAutoColumnsVariables(){let e,t,s;let i=this.autoColumns?.match(o2);if(this.autoColumns&&!this.autoColumns.includes(" "))e=t=s=`${this.autoColumns}px`;else{let{l:r,m:o,s:n}=i?.groups||{};e=r?`${r.split(":")[1]}px`:void 0,t=o?`${o.split(":")[1]}px`:void 0,s=n?`${n.split(":")[1]}px`:void 0}let r=[{name:"_col-width-mobile",value:s},{name:"_col-width-tablet",value:t},{name:"_col-width-desktop",value:e}].filter(({value:e})=>void 0!==e).map(({name:e,value:t})=>`--${e}: ${t};`).join(" ");this._gridVariables={...this._gridVariables,varsAutoColumns:sC`
        ${sE(r)}
      `},this.requestUpdate("_gridVariables")}_updateGridCss(){let e=new CSSStyleSheet;if(e.replaceSync(`:host {${Object.values(this._gridVariables).join("")}} `),this.shadowRoot){let t=(Array.isArray(o5.styles)?o5.styles:[o5.styles]).flatMap(e=>{if(Array.isArray(e))return e.map(e=>{let t=new CSSStyleSheet;return t.replaceSync(e.cssText),t});{let t=new CSSStyleSheet;return t.replaceSync(e.cssText),[t]}});this.shadowRoot.adoptedStyleSheets=[e,...t]}}render(){return ix` <slot></slot> `}};o5.styles=[o0,o1],o5.shadowRootOptions={mode:"open",delegatesFocus:!0},tp([tA({attribute:"columns",type:String})],o5.prototype,"columns",2),tp([tA({attribute:"gap",type:String})],o5.prototype,"gap",2),tp([tA({attribute:"row-gap",type:String})],o5.prototype,"rowGap",2),tp([tA({attribute:"padding",type:String})],o5.prototype,"padding",2),tp([tA({attribute:"auto-columns",type:String})],o5.prototype,"autoColumns",2),tp([tx()],o5.prototype,"_gridVariables",2),tp([s_("columns")],o5.prototype,"_updateColumnVariables",1),tp([s_("gap")],o5.prototype,"_updateGapVariables",1),tp([s_("row-gap")],o5.prototype,"_updateRowGapVariables",1),tp([s_("padding")],o5.prototype,"_updatePaddingVariables",1),tp([s_("autoColumns")],o5.prototype,"_updateAutoColumnsVariables",1),tp([s_("_gridVariables")],o5.prototype,"_updateGridCss",1),o5=tp([i$("gds-grid")],o5);var o3=class extends iG{connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}render(){return ix`<slot></slot>`}};o3=tp([i$("gds-list-item")],o3);var o4=class extends iG{constructor(){super(...arguments),this.label=""}connectedCallback(){super.connectedCallback(),sb(this),iY.instance.apply(this,"gds-grouped-list")}render(){return ix`${this._tStyles}${sl(this.label,()=>ix`<div class="gds-list-heading" aria-hidden="true" id="label">
            ${this.label}
          </div>`)}
      <div role="list" aria-labelledby="label">
        <slot gds-allow="gds-list-item"></slot>
      </div>`}};tp([tx()],o4.prototype,"_tStyles",2),tp([tA()],o4.prototype,"label",2),o4=tp([i$("gds-grouped-list")],o4);var o8=`:host {
  display: flex;
  transition: 0.2s;
  z-index: 1;
}

button {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background: transparent;
  border-radius: calc(infinity * 1px);
  border-width: 0;
  color: var(--gds-sys-color-content-content);
  cursor: pointer;
  flex-grow: 1;
  flex-shrink: 0;
  font-family: inherit;
  font-size: inherit;
  overflow: hidden;
  padding: 0 1rem;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}

@media (pointer: fine) {
  button:hover {
    background-color: color-mix(
      in srgb,
      var(--gds-sys-color-state-layers-state-black-dim1),
      transparent
    );
  }
}

button:focus-visible {
  outline: 2px solid #000;
  outline-offset: -2px;
}
`,o9=class extends iG{constructor(){super(...arguments),this.selected=!1}connectedCallback(){super.connectedCallback(),iY.instance.apply(this,"gds-segmented"),this.setAttribute("role","listitem")}render(){return ix`<button aria-current=${String(this.selected)}>
      <slot></slot>
    </button>`}};o9.styles=[...o0,sE(o8)],tp([tA({type:Boolean,reflect:!0})],o9.prototype,"selected",2),tp([tA()],o9.prototype,"value",2),o9=tp([i$("gds-segment")],o9);var o6=`:host {
  background-color: var(--gds-sys-color-container-container-dim1);
  border: 0.25rem solid var(--gds-sys-color-container-container-dim1);
  border-radius: calc(infinity * 1px);
  box-sizing: border-box;
  contain: layout;
  display: inline-flex;
  gap: 0.25rem;
  height: 3rem;
  max-width: 100%;
  overflow: hidden;
}

:host([size='small']) {
  height: 2.5rem;
}

#track {
  box-sizing: border-box;
  display: flex;
  flex-grow: 0;
  flex-shrink: 1;
  overflow: hidden;
  position: relative;
  width: 100%;
}

#segments {
  box-sizing: border-box;
  display: inline-flex;
  gap: 0.25rem;
  position: relative;
  transition: 0.2s;
  z-index: 1;
}

#btn-prev,
#btn-next {
  align-items: center;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  aspect-ratio: 1;
  background-color: var(--gds-sys-color-container-container-dim1);
  border-radius: calc(infinity * 1px);
  border-width: 0;
  color: var(--gds-sys-color-content-content);
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  height: 100%;
  justify-content: center;
  width: 2.5rem;

  @media (pointer: fine) {
    &:hover {
      background-color: color-mix(
        in srgb,
        var(--gds-sys-color-state-layers-state-black-dim1),
        var(--gds-sys-color-container-container-dim1)
      );
    }
  }
}

:host([size='small']) #btn-prev,
:host([size='small']) #btn-next {
  width: 2rem;
}

::slotted(*) {
  flex-grow: 1;
  flex-shrink: 0;
  z-index: 1;
}

#indicator {
  background-color: var(--gds-sys-color-container-container-bright);
  border-radius: calc(infinity * 1px);
  height: 100%;
  left: 0;
  position: absolute;
  transition:
    transform 0.2s,
    width 0.2s;
  z-index: 0;
}
`,o7={small:36,medium:44},ne=e=>e?0:4,nt=class extends iG{constructor(){super(...arguments),ty(this,ti),this.segMinWidth=100,this.size="medium",ty(this,eZ,void 0),this._showPrevButton=!1,this._showNextButton=!1,ty(this,eX,void 0),ty(this,eJ,new ResizeObserver(()=>{tf(this,eX)&&clearTimeout(tf(this,eX)),tv(this,eX,setTimeout(()=>{tf(this,tt).call(this)},20))})),ty(this,eQ,0),ty(this,e0,0),ty(this,e1,0),ty(this,e2,0),ty(this,e5,0),ty(this,e3,0),ty(this,e4,0),ty(this,e8,!1),ty(this,e9,e=>{tv(this,e3,e.clientX),tv(this,e4,tf(this,e2)),tv(this,e8,!0)}),ty(this,e6,e=>{if(!tf(this,e8))return;e.preventDefault();let t=e.clientX-tf(this,e3);if(!(5>Math.abs(t)))try{this._elSegments.hasPointerCapture(e.pointerId)||this._elSegments.setPointerCapture(e.pointerId),tv(this,e2,tf(this,e4)+t),tf(this,ts).call(this)}catch{}}),ty(this,e7,e=>{if(tf(this,e8)){tv(this,e8,!1);try{this._elSegments.releasePointerCapture(e.pointerId),tf(this,te).call(this)}catch{}}}),ty(this,te,()=>{tv(this,eQ,Math.round(-tf(this,e2)/tf(this,e0))),tf(this,tt).call(this)}),ty(this,tt,(e=!1)=>{let t=()=>{let e=this.segments.length,t=this._elTrack.offsetWidth;if(t/e>this.segMinWidth)return{count:e,segmentWidth:(t-ne(this._isUsingTransitionalStyles)*(e-1))/e};let s=Math.floor((this.offsetWidth-2*o7[this.size])/this.segMinWidth),i=(t-ne(this._isUsingTransitionalStyles)*(s-1))/s;return{count:s,segmentWidth:i}},{count:s}=t();e&&(tf(this,e5)>=tf(this,eQ)+s&&tv(this,eQ,tf(this,e5)-s+1),tf(this,e5)<tf(this,eQ)&&tv(this,eQ,tf(this,e5)));let i=this.segments.length-s,r=tf(this,eQ)>=i,o=0>=tf(this,eQ);r&&tv(this,eQ,i),o&&tv(this,eQ,0),tf(this,tl).call(this,s),this.updateComplete.then(()=>{let{segmentWidth:e,count:s}=t();this.segments.forEach(t=>{t.style.width=e+"px"}),tv(this,e2,-tf(this,eQ)*e-ne(this._isUsingTransitionalStyles)*tf(this,eQ)),tf(this,ts).call(this),tv(this,e0,e),tv(this,e1,e),tf(this,ta).call(this)})}),ty(this,ts,()=>{window.requestAnimationFrame(()=>{this._elSegments.style.transform=`translateX(${tf(this,e2)}px)`})}),ty(this,to,()=>{tm(this,eQ)._--,tf(this,tt).call(this)}),ty(this,tn,()=>{tm(this,eQ)._++,tf(this,tt).call(this)}),ty(this,tl,e=>{this._showPrevButton=tf(this,eQ)>0,this._showNextButton=tf(this,eQ)<this.segments.length-e}),ty(this,ta,()=>{let e=this.segments.find(e=>e.selected);if(e){let t=this.segments.indexOf(e),s=t*tf(this,e1)+ne(this._isUsingTransitionalStyles)*t;this._elIndicator.style.transform=`translateX(${s}px)`,this._elIndicator.style.width=`${tf(this,e1)}px`}else this._elIndicator.style.transform="translateX(-100%)",this._elIndicator.style.width="0px"}),ty(this,td,e=>{let t=this.segments.find(t=>t===e.target||t.contains(e.target));t&&(this.segments.forEach(e=>e.selected=!1),t.selected=!0,tv(this,eZ,t.value),tf(this,ta).call(this),this.dispatchEvent(new CustomEvent("change",{detail:{segment:t},bubbles:!0,composed:!0})))}),ty(this,th,()=>{tf(this,eZ)&&this.updateComplete.then(()=>{let e=this.segments.find(e=>e.value===tf(this,eZ));e&&(this.segments.forEach(e=>e.selected=!1),e.selected=!0,tv(this,e5,this.segments.indexOf(e)),tf(this,tt).call(this,!0))})})}get value(){return tf(this,eZ)}set value(e){tv(this,eZ,e),tf(this,th).call(this)}get segments(){return this._elSlot?this._elSlot.assignedElements():[]}connectedCallback(){super.connectedCallback(),iY.instance.apply(this,"gds-segmented-control"),tf(this,eJ).observe(this),this.addEventListener("focusin",e=>{e.target instanceof o9&&(tv(this,e5,this.segments.indexOf(e.target)),tf(this,tt).call(this,!0))})}disconnectedCallback(){super.disconnectedCallback(),tf(this,eJ).unobserve(this)}render(){return ix`${this._tStyles}
      ${sl(this._showPrevButton,()=>ix`<button
            id="btn-prev"
            @click=${tf(this,to)}
            aria-label=${sm("Scroll right")}
          >
            <gds-icon name="chevron-left"></gds-icon>
          </button>`)}
      <div
        id="track"
        @scroll=${()=>{this._elTrack.scrollLeft=0}}
      >
        <div
          id="segments"
          @pointerdown=${tf(this,e9)}
          @pointermove=${tf(this,e6)}
          @touchmove=${tf(this,e6)}
          @pointerup=${tf(this,e7)}
          @pointercancel=${tf(this,e7)}
          role="list"
        >
          <slot
            gds-allow="gds-segment"
            @click=${tf(this,td)}
            @slotchange=${tb(this,ti,tr)}
            role="none"
          ></slot>
          <div id="indicator" role="none"></div>
        </div>
      </div>
      ${sl(this._showNextButton,()=>ix`<button
            id="btn-next"
            @click=${tf(this,tn)}
            aria-label=${sm("Scroll right")}
          >
            <gds-icon name="chevron-right"></gds-icon>
          </button>`)}`}_recalculateMinWidth(){this.updateComplete.then(()=>tf(this,tt).call(this))}};eZ=new WeakMap,eX=new WeakMap,eJ=new WeakMap,eQ=new WeakMap,e0=new WeakMap,e1=new WeakMap,e2=new WeakMap,e5=new WeakMap,e3=new WeakMap,e4=new WeakMap,e8=new WeakMap,e9=new WeakMap,e6=new WeakMap,e7=new WeakMap,te=new WeakMap,tt=new WeakMap,ts=new WeakMap,ti=new WeakSet,tr=function(){let e=this.segments.find(e=>e.selected)?.value;e&&tv(this,eZ,e),tf(this,tt).call(this)},to=new WeakMap,tn=new WeakMap,tl=new WeakMap,ta=new WeakMap,td=new WeakMap,th=new WeakMap,nt.styles=[o0,sE(o6)],tp([tA({type:Number,attribute:"seg-min-width"})],nt.prototype,"segMinWidth",2),tp([tA()],nt.prototype,"size",2),tp([tA()],nt.prototype,"value",1),tp([tx()],nt.prototype,"_tStyles",2),tp([tE("slot")],nt.prototype,"_elSlot",2),tp([tE("#indicator")],nt.prototype,"_elIndicator",2),tp([tE("#track")],nt.prototype,"_elTrack",2),tp([tE("#segments")],nt.prototype,"_elSegments",2),tp([tx()],nt.prototype,"_showPrevButton",2),tp([tx()],nt.prototype,"_showNextButton",2),tp([s_("segMinWidth")],nt.prototype,"_recalculateMinWidth",1),nt=tp([i$("gds-segmented-control")],nt);var ns=`svg:not([display=none]) {
  contain: layout style;
  display: flex;
  height: 1lh;
  isolation: isolate;
  overflow: hidden;
  width: auto;
}

symbol {
  fill: none;
  height: 24px;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2px;
  width: 24px;
}`,ni=class extends iv{constructor(){super(...arguments),this.open=!1,this.name=""}static get styles(){return sE(ns)}render(){let{name:e}=this;return ix`
      <svg display="none">
        <symbol id="plus">
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </symbol>
        <symbol id="x">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </symbol>
        <symbol id="chevron-right">
          <polyline points="9 18 15 12 9 6" />
        </symbol>
        <symbol id="chevron-left">
          <polyline points="15 18 9 12 15 6" />
        </symbol>
        <symbol id="chevron-down">
          <polyline points="6 9 12 15 18 9" />
        </symbol>
        <symbol id="arrow">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </symbol>
        <symbol id="bell">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </symbol>
        <symbol id="calendar">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </symbol>
        <symbol id="lock">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </symbol>
        <symbol id="eye">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </symbol>
        <symbol id="hash">
          <line x1="4" y1="9" x2="20" y2="9" />
          <line x1="4" y1="15" x2="20" y2="15" />
          <line x1="10" y1="3" x2="8" y2="21" />
          <line x1="16" y1="3" x2="14" y2="21" />
        </symbol>
        <symbol id="mail">
          <path
            d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
          />
          <polyline points="22,6 12,13 2,6" />
        </symbol>
        <symbol id="send">
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </symbol>
        <symbol id="info">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </symbol>
        <symbol id="tel">
          <path
            d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
          />
        </symbol>
        <symbol id="search">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </symbol>
        <symbol id="user">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </symbol>
        <symbol id="arrow-up">
          <line x1="12" y1="19" x2="12" y2="5" />
          <polyline points="5 12 12 5 19 12" />
        </symbol>
        <symbol id="arrow-down">
          <line x1="12" y1="5" x2="12" y2="19" />
          <polyline points="19 12 12 19 5 12" />
        </symbol>
        <symbol id="warning">
          <path
            d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
          />
          <line x1="12" y1="9" x2="12" y2="13" />
          <path x1="12" y1="17" x2="12.01" y2="17" />
        </symbol>
      </svg>
      <svg viewBox="0 0 24 24">
        <use href="#${e}"></use>
      </svg>
    `}};ni.properties={open:{type:String,reflect:!0},name:{type:String}},ni=tp([i$("gds-icon")],ni);var nr=class extends iG{constructor(){super(...arguments),this.colorScheme="light"}connectedCallback(){super.connectedCallback(),iY.instance.apply(this,"gds-theme")}render(){return ix`
      <slot></slot>
    `}};tp([tA({reflect:!0,attribute:"color-scheme"})],nr.prototype,"colorScheme",2),nr=tp([i$("gds-theme")],nr)})();/*! Bundled license information:

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/when.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/localize/internal/str-tag.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/localize/internal/default-msg.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/localize/internal/locale-status-event.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/localize/internal/types.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/localize/internal/localized-controller.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/localize/internal/localized-decorator.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/localize/internal/deferred.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/localize/internal/fnv1a64.js:
  (**
   * @license
   * Copyright 2014 Travis Webb
   * SPDX-License-Identifier: MIT
   *)

@lit/localize/internal/id-generation.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/localize/internal/runtime-msg.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/localize/init/runtime.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/localize/init/transform.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/localize/lit-localize.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

reflect-metadata/Reflect.js:
  (*! *****************************************************************************
  Copyright (C) Microsoft. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0
  
  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.
  
  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** *)

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/async-directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/ref.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/join.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/private-async-helpers.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/until.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/map.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/repeat.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/