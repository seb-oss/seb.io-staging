"use strict";(()=>{var e,t,s,i,r,o,n,a,l,d,h,c,p,u,g,f,y,v,m,b,_,$,w,x,A,k,E,S,C,z,M,F,T,D,W,N,L,P,O,R,H,U,B,I,V,j,Y,G,q,K,X,Z,J,Q,ee,et,es,ei,er,eo,en,ea,el,ed,eh,ec,ep,eu,eg,ef,ey,ev,em,eb,e_,e$,ew,ex,eA,ek,eE,eS,eC,ez,eM,eF,eT,eD,eW,eN,eL,eP,eO,eR,eH,eU,eB,eI,eV,ej,eY,eG,eq,eK,eX,eZ,eJ,eQ,e0,e1,e2,e5,e3,e4,e6,e8,e9,e7,te,tt,ts,ti,tr,to,tn,ta,tl,td,th,tc,tp,tu=Object.defineProperty,tg=Object.getOwnPropertyDescriptor,tf=(e,t,s,i)=>{for(var r,o=i>1?void 0:i?tg(t,s):t,n=e.length-1;n>=0;n--)(r=e[n])&&(o=(i?r(t,s,o):r(o))||o);return i&&o&&tu(t,s,o),o},ty=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)},tv=(e,t,s)=>(ty(e,t,"read from private field"),s?s.call(e):t.get(e)),tm=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},tb=(e,t,s,i)=>(ty(e,t,"write to private field"),i?i.call(e,s):t.set(e,s),s),t_=(e,t,s,i)=>({set _(value){tb(e,t,value,s)},get _(){return tv(e,t,i)}}),t$=(e,t,s)=>(ty(e,t,"access private method"),s),tw=globalThis,tx=tw.ShadowRoot&&(void 0===tw.ShadyCSS||tw.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,tA=Symbol(),tk=new WeakMap,tE=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==tA)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(tx&&void 0===e){let s=void 0!==t&&1===t.length;s&&(e=tk.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&tk.set(t,e))}return e}toString(){return this.cssText}},tS=e=>new tE("string"==typeof e?e:e+"",void 0,tA),tC=(e,t)=>{if(tx)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let s of t){let t=document.createElement("style"),i=tw.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=s.cssText,e.appendChild(t)}},tz=tx?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let s of e.cssRules)t+=s.cssText;return tS(t)})(e):e,{is:tM,defineProperty:tF,getOwnPropertyDescriptor:tT,getOwnPropertyNames:tD,getOwnPropertySymbols:tW,getPrototypeOf:tN}=Object,tL=globalThis,tP=tL.trustedTypes,tO=tP?tP.emptyScript:"",tR=tL.reactiveElementPolyfillSupport,tH=(e,t)=>e,tU={toAttribute(e,t){switch(t){case Boolean:e=e?tO:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=null!==e;break;case Number:s=null===e?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch(e){s=null}}return s}},tB=(e,t)=>!tM(e,t),tI={attribute:!0,type:String,converter:tU,reflect:!1,hasChanged:tB};Symbol.metadata??=Symbol("metadata"),tL.litPropertyMetadata??=new WeakMap;var tV=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=tI){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(e,s,t);void 0!==i&&tF(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){let{get:i,set:r}=tT(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return i?.call(this)},set(t){let o=i?.call(this);r.call(this,t),this.requestUpdate(e,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??tI}static _$Ei(){if(this.hasOwnProperty(tH("elementProperties")))return;let e=tN(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(tH("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(tH("properties"))){let e=this.properties;for(let t of[...tD(e),...tW(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,s]of t)this.elementProperties.set(e,s)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let s=this._$Eu(e,t);void 0!==s&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let s of new Set(e.flat(1/0).reverse()))t.unshift(tz(s));else void 0!==e&&t.push(tz(e));return t}static _$Eu(e,t){let s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return tC(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EC(e,t){let s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(void 0!==i&&!0===s.reflect){let r=(void 0!==s.converter?.toAttribute?s.converter:tU).toAttribute(t,s.type);this._$Em=e,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(e,t){let s=this.constructor,i=s._$Eh.get(e);if(void 0!==i&&this._$Em!==i){let e=s.getPropertyOptions(i),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:tU;this._$Em=i,this[i]=r.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,s){if(void 0!==e){if(!((s??=this.constructor.getPropertyOptions(e)).hasChanged??tB)(this[e],t))return;this.P(e,t,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,s){this._$AL.has(e)||this._$AL.set(e,t),!0===s.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,s]of e)!0!==s.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],s)}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(e){}firstUpdated(e){}};tV.elementStyles=[],tV.shadowRootOptions={mode:"open"},tV[tH("elementProperties")]=new Map,tV[tH("finalized")]=new Map,tR?.({ReactiveElement:tV}),(tL.reactiveElementVersions??=[]).push("2.0.4");var tj=globalThis,tY=tj.trustedTypes,tG=tY?tY.createPolicy("lit-html",{createHTML:e=>e}):void 0,tq="$lit$",tK=`lit$${Math.random().toFixed(9).slice(2)}$`,tX="?"+tK,tZ=`<${tX}>`,tJ=document,tQ=()=>tJ.createComment(""),t0=e=>null===e||"object"!=typeof e&&"function"!=typeof e,t1=Array.isArray,t2=e=>t1(e)||"function"==typeof e?.[Symbol.iterator],t5="[ 	\n\f\r]",t3=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,t4=/-->/g,t6=/>/g,t8=RegExp(`>|${t5}(?:([^\\s"'>=/]+)(${t5}*=${t5}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),t9=/'/g,t7=/"/g,se=/^(?:script|style|textarea|title)$/i,st=e=>(t,...s)=>({_$litType$:e,strings:t,values:s});st(1),st(2);var ss=Symbol.for("lit-noChange"),si=Symbol.for("lit-nothing"),sr=new WeakMap,so=tJ.createTreeWalker(tJ,129);function sn(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==tG?tG.createHTML(t):t}var sa=(e,t)=>{let s=e.length-1,i=[],r,o=2===t?"<svg>":"",n=t3;for(let t=0;t<s;t++){let s=e[t],a,l,d=-1,h=0;for(;h<s.length&&(n.lastIndex=h,null!==(l=n.exec(s)));)h=n.lastIndex,n===t3?"!--"===l[1]?n=t4:void 0!==l[1]?n=t6:void 0!==l[2]?(se.test(l[2])&&(r=RegExp("</"+l[2],"g")),n=t8):void 0!==l[3]&&(n=t8):n===t8?">"===l[0]?(n=r??t3,d=-1):void 0===l[1]?d=-2:(d=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?t8:'"'===l[3]?t7:t9):n===t7||n===t9?n=t8:n===t4||n===t6?n=t3:(n=t8,r=void 0);let c=n===t8&&e[t+1].startsWith("/>")?" ":"";o+=n===t3?s+tZ:d>=0?(i.push(a),s.slice(0,d)+tq+s.slice(d)+tK+c):s+tK+(-2===d?t:c)}return[sn(e,o+(e[s]||"<?>")+(2===t?"</svg>":"")),i]},sl=class e{constructor({strings:t,_$litType$:s},i){let r;this.parts=[];let o=0,n=0,a=t.length-1,l=this.parts,[d,h]=sa(t,s);if(this.el=e.createElement(d,i),so.currentNode=this.el.content,2===s){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=so.nextNode())&&l.length<a;){if(1===r.nodeType){if(r.hasAttributes())for(let e of r.getAttributeNames())if(e.endsWith(tq)){let t=h[n++],s=r.getAttribute(e).split(tK),i=/([.?@])?(.*)/.exec(t);l.push({type:1,index:o,name:i[2],strings:s,ctor:"."===i[1]?su:"?"===i[1]?sg:"@"===i[1]?sf:sp}),r.removeAttribute(e)}else e.startsWith(tK)&&(l.push({type:6,index:o}),r.removeAttribute(e));if(se.test(r.tagName)){let e=r.textContent.split(tK),t=e.length-1;if(t>0){r.textContent=tY?tY.emptyScript:"";for(let s=0;s<t;s++)r.append(e[s],tQ()),so.nextNode(),l.push({type:2,index:++o});r.append(e[t],tQ())}}}else if(8===r.nodeType){if(r.data===tX)l.push({type:2,index:o});else{let e=-1;for(;-1!==(e=r.data.indexOf(tK,e+1));)l.push({type:7,index:o}),e+=tK.length-1}}o++}}static createElement(e,t){let s=tJ.createElement("template");return s.innerHTML=e,s}};function sd(e,t,s=e,i){if(t===ss)return t;let r=void 0!==i?s._$Co?.[i]:s._$Cl,o=t0(t)?void 0:t._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(e))._$AT(e,s,i),void 0!==i?(s._$Co??=[])[i]=r:s._$Cl=r),void 0!==r&&(t=sd(e,r._$AS(e,t.values),r,i)),t}var sh=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:s}=this._$AD,i=(e?.creationScope??tJ).importNode(t,!0);so.currentNode=i;let r=so.nextNode(),o=0,n=0,a=s[0];for(;void 0!==a;){if(o===a.index){let t;2===a.type?t=new sc(r,r.nextSibling,this,e):1===a.type?t=new a.ctor(r,a.name,a.strings,this,e):6===a.type&&(t=new sy(r,this,e)),this._$AV.push(t),a=s[++n]}o!==a?.index&&(r=so.nextNode(),o++)}return so.currentNode=tJ,i}p(e){let t=0;for(let s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}},sc=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=si,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){t0(e=sd(this,e,t))?e===si||null==e||""===e?(this._$AH!==si&&this._$AR(),this._$AH=si):e!==this._$AH&&e!==ss&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):t2(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==si&&t0(this._$AH)?this._$AA.nextSibling.data=e:this.T(tJ.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:s}=e,i="number"==typeof s?this._$AC(e):(void 0===s.el&&(s.el=sl.createElement(sn(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(t);else{let e=new sh(i,this),s=e.u(this.options);e.p(t),this.T(s),this._$AH=e}}_$AC(e){let t=sr.get(e.strings);return void 0===t&&sr.set(e.strings,t=new sl(e)),t}k(t){t1(this._$AH)||(this._$AH=[],this._$AR());let s=this._$AH,i,r=0;for(let o of t)r===s.length?s.push(i=new e(this.S(tQ()),this.S(tQ()),this,this.options)):i=s[r],i._$AI(o),r++;r<s.length&&(this._$AR(i&&i._$AB.nextSibling,r),s.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}},sp=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,r){this.type=1,this._$AH=si,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=si}_$AI(e,t=this,s,i){let r=this.strings,o=!1;if(void 0===r)(o=!t0(e=sd(this,e,t,0))||e!==this._$AH&&e!==ss)&&(this._$AH=e);else{let i,n;let a=e;for(e=r[0],i=0;i<r.length-1;i++)(n=sd(this,a[s+i],t,i))===ss&&(n=this._$AH[i]),o||=!t0(n)||n!==this._$AH[i],n===si?e=si:e!==si&&(e+=(n??"")+r[i+1]),this._$AH[i]=n}o&&!i&&this.j(e)}j(e){e===si?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},su=class extends sp{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===si?void 0:e}},sg=class extends sp{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==si)}},sf=class extends sp{constructor(e,t,s,i,r){super(e,t,s,i,r),this.type=5}_$AI(e,t=this){if((e=sd(this,e,t,0)??si)===ss)return;let s=this._$AH,i=e===si&&s!==si||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==si&&(s===si||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},sy=class{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){sd(this,e)}},sv=tj.litHtmlPolyfillSupport;sv?.(sl,sc),(tj.litHtmlVersions??=[]).push("3.1.3");var sm=globalThis,sb=sm.ShadowRoot&&(void 0===sm.ShadyCSS||sm.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s_=Symbol(),s$=new WeakMap,sw=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==s_)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(sb&&void 0===e){let s=void 0!==t&&1===t.length;s&&(e=s$.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&s$.set(t,e))}return e}toString(){return this.cssText}},sx=e=>new sw("string"==typeof e?e:e+"",void 0,s_),sA=(e,...t)=>new sw(1===e.length?e[0]:t.reduce((t,s,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[i+1],e[0]),e,s_),sk=(e,t)=>{if(sb)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let s of t){let t=document.createElement("style"),i=sm.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=s.cssText,e.appendChild(t)}},sE=sb?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let s of e.cssRules)t+=s.cssText;return sx(t)})(e):e,{is:sS,defineProperty:sC,getOwnPropertyDescriptor:sz,getOwnPropertyNames:sM,getOwnPropertySymbols:sF,getPrototypeOf:sT}=Object,sD=globalThis,sW=sD.trustedTypes,sN=sW?sW.emptyScript:"",sL=sD.reactiveElementPolyfillSupport,sP=(e,t)=>e,sO={toAttribute(e,t){switch(t){case Boolean:e=e?sN:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=null!==e;break;case Number:s=null===e?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch(e){s=null}}return s}},sR=(e,t)=>!sS(e,t),sH={attribute:!0,type:String,converter:sO,reflect:!1,hasChanged:sR};Symbol.metadata??=Symbol("metadata"),sD.litPropertyMetadata??=new WeakMap;var sU=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=sH){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(e,s,t);void 0!==i&&sC(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){let{get:i,set:r}=sz(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return i?.call(this)},set(t){let o=i?.call(this);r.call(this,t),this.requestUpdate(e,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??sH}static _$Ei(){if(this.hasOwnProperty(sP("elementProperties")))return;let e=sT(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(sP("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(sP("properties"))){let e=this.properties;for(let t of[...sM(e),...sF(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,s]of t)this.elementProperties.set(e,s)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let s=this._$Eu(e,t);void 0!==s&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let s of new Set(e.flat(1/0).reverse()))t.unshift(sE(s));else void 0!==e&&t.push(sE(e));return t}static _$Eu(e,t){let s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return sk(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EC(e,t){let s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(void 0!==i&&!0===s.reflect){let r=(void 0!==s.converter?.toAttribute?s.converter:sO).toAttribute(t,s.type);this._$Em=e,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(e,t){let s=this.constructor,i=s._$Eh.get(e);if(void 0!==i&&this._$Em!==i){let e=s.getPropertyOptions(i),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:sO;this._$Em=i,this[i]=r.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,s){if(void 0!==e){if(!((s??=this.constructor.getPropertyOptions(e)).hasChanged??sR)(this[e],t))return;this.P(e,t,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,s){this._$AL.has(e)||this._$AL.set(e,t),!0===s.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,s]of e)!0!==s.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],s)}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(e){}firstUpdated(e){}};sU.elementStyles=[],sU.shadowRootOptions={mode:"open"},sU[sP("elementProperties")]=new Map,sU[sP("finalized")]=new Map,sL?.({ReactiveElement:sU}),(sD.reactiveElementVersions??=[]).push("2.0.4");var sB=globalThis,sI=sB.trustedTypes,sV=sI?sI.createPolicy("lit-html",{createHTML:e=>e}):void 0,sj="$lit$",sY=`lit$${Math.random().toFixed(9).slice(2)}$`,sG="?"+sY,sq=`<${sG}>`,sK=document,sX=()=>sK.createComment(""),sZ=e=>null===e||"object"!=typeof e&&"function"!=typeof e,sJ=Array.isArray,sQ=e=>sJ(e)||"function"==typeof e?.[Symbol.iterator],s0="[ 	\n\f\r]",s1=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,s2=/-->/g,s5=/>/g,s3=RegExp(`>|${s0}(?:([^\\s"'>=/]+)(${s0}*=${s0}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),s4=/'/g,s6=/"/g,s8=/^(?:script|style|textarea|title)$/i,s9=e=>(t,...s)=>({_$litType$:e,strings:t,values:s}),s7=s9(1);s9(2);var ie=Symbol.for("lit-noChange"),it=Symbol.for("lit-nothing"),is=new WeakMap,ii=sK.createTreeWalker(sK,129);function ir(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==sV?sV.createHTML(t):t}var io=(e,t)=>{let s=e.length-1,i=[],r,o=2===t?"<svg>":"",n=s1;for(let t=0;t<s;t++){let s=e[t],a,l,d=-1,h=0;for(;h<s.length&&(n.lastIndex=h,null!==(l=n.exec(s)));)h=n.lastIndex,n===s1?"!--"===l[1]?n=s2:void 0!==l[1]?n=s5:void 0!==l[2]?(s8.test(l[2])&&(r=RegExp("</"+l[2],"g")),n=s3):void 0!==l[3]&&(n=s3):n===s3?">"===l[0]?(n=r??s1,d=-1):void 0===l[1]?d=-2:(d=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?s3:'"'===l[3]?s6:s4):n===s6||n===s4?n=s3:n===s2||n===s5?n=s1:(n=s3,r=void 0);let c=n===s3&&e[t+1].startsWith("/>")?" ":"";o+=n===s1?s+sq:d>=0?(i.push(a),s.slice(0,d)+sj+s.slice(d)+sY+c):s+sY+(-2===d?t:c)}return[ir(e,o+(e[s]||"<?>")+(2===t?"</svg>":"")),i]},ia=class e{constructor({strings:t,_$litType$:s},i){let r;this.parts=[];let o=0,n=0,a=t.length-1,l=this.parts,[d,h]=io(t,s);if(this.el=e.createElement(d,i),ii.currentNode=this.el.content,2===s){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=ii.nextNode())&&l.length<a;){if(1===r.nodeType){if(r.hasAttributes())for(let e of r.getAttributeNames())if(e.endsWith(sj)){let t=h[n++],s=r.getAttribute(e).split(sY),i=/([.?@])?(.*)/.exec(t);l.push({type:1,index:o,name:i[2],strings:s,ctor:"."===i[1]?ip:"?"===i[1]?iu:"@"===i[1]?ig:ic}),r.removeAttribute(e)}else e.startsWith(sY)&&(l.push({type:6,index:o}),r.removeAttribute(e));if(s8.test(r.tagName)){let e=r.textContent.split(sY),t=e.length-1;if(t>0){r.textContent=sI?sI.emptyScript:"";for(let s=0;s<t;s++)r.append(e[s],sX()),ii.nextNode(),l.push({type:2,index:++o});r.append(e[t],sX())}}}else if(8===r.nodeType){if(r.data===sG)l.push({type:2,index:o});else{let e=-1;for(;-1!==(e=r.data.indexOf(sY,e+1));)l.push({type:7,index:o}),e+=sY.length-1}}o++}}static createElement(e,t){let s=sK.createElement("template");return s.innerHTML=e,s}};function il(e,t,s=e,i){if(t===ie)return t;let r=void 0!==i?s._$Co?.[i]:s._$Cl,o=sZ(t)?void 0:t._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(e))._$AT(e,s,i),void 0!==i?(s._$Co??=[])[i]=r:s._$Cl=r),void 0!==r&&(t=il(e,r._$AS(e,t.values),r,i)),t}var id=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:s}=this._$AD,i=(e?.creationScope??sK).importNode(t,!0);ii.currentNode=i;let r=ii.nextNode(),o=0,n=0,a=s[0];for(;void 0!==a;){if(o===a.index){let t;2===a.type?t=new ih(r,r.nextSibling,this,e):1===a.type?t=new a.ctor(r,a.name,a.strings,this,e):6===a.type&&(t=new iy(r,this,e)),this._$AV.push(t),a=s[++n]}o!==a?.index&&(r=ii.nextNode(),o++)}return ii.currentNode=sK,i}p(e){let t=0;for(let s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}},ih=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=it,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){sZ(e=il(this,e,t))?e===it||null==e||""===e?(this._$AH!==it&&this._$AR(),this._$AH=it):e!==this._$AH&&e!==ie&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):sQ(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==it&&sZ(this._$AH)?this._$AA.nextSibling.data=e:this.T(sK.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:s}=e,i="number"==typeof s?this._$AC(e):(void 0===s.el&&(s.el=ia.createElement(ir(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(t);else{let e=new id(i,this),s=e.u(this.options);e.p(t),this.T(s),this._$AH=e}}_$AC(e){let t=is.get(e.strings);return void 0===t&&is.set(e.strings,t=new ia(e)),t}k(t){sJ(this._$AH)||(this._$AH=[],this._$AR());let s=this._$AH,i,r=0;for(let o of t)r===s.length?s.push(i=new e(this.S(sX()),this.S(sX()),this,this.options)):i=s[r],i._$AI(o),r++;r<s.length&&(this._$AR(i&&i._$AB.nextSibling,r),s.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}},ic=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,r){this.type=1,this._$AH=it,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=it}_$AI(e,t=this,s,i){let r=this.strings,o=!1;if(void 0===r)(o=!sZ(e=il(this,e,t,0))||e!==this._$AH&&e!==ie)&&(this._$AH=e);else{let i,n;let a=e;for(e=r[0],i=0;i<r.length-1;i++)(n=il(this,a[s+i],t,i))===ie&&(n=this._$AH[i]),o||=!sZ(n)||n!==this._$AH[i],n===it?e=it:e!==it&&(e+=(n??"")+r[i+1]),this._$AH[i]=n}o&&!i&&this.j(e)}j(e){e===it?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},ip=class extends ic{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===it?void 0:e}},iu=class extends ic{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==it)}},ig=class extends ic{constructor(e,t,s,i,r){super(e,t,s,i,r),this.type=5}_$AI(e,t=this){if((e=il(this,e,t,0)??it)===ie)return;let s=this._$AH,i=e===it&&s!==it||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==it&&(s===it||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},iy=class{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){il(this,e)}},iv=sB.litHtmlPolyfillSupport;iv?.(ia,ih),(sB.litHtmlVersions??=[]).push("3.1.3");var im=(e,t,s)=>{let i=s?.renderBefore??t,r=i._$litPart$;if(void 0===r){let e=s?.renderBefore??null;i._$litPart$=r=new ih(t.insertBefore(sX(),e),e,void 0,s??{})}return r._$AI(e),r},ib=class extends sU{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=im(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ie}};ib._$litElement$=!0,ib.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ib});var i_=globalThis.litElementPolyfillSupport;i_?.({LitElement:ib}),(globalThis.litElementVersions??=[]).push("4.0.5");var i$=e=>(t,s)=>{void 0!==s?s.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},iw={attribute:!0,type:String,converter:tU,reflect:!1,hasChanged:tB},ix=(e=iw,t,s)=>{let{kind:i,metadata:r}=s,o=globalThis.litPropertyMetadata.get(r);if(void 0===o&&globalThis.litPropertyMetadata.set(r,o=new Map),o.set(s.name,e),"accessor"===i){let{name:i}=s;return{set(s){let r=t.get.call(this);t.set.call(this,s),this.requestUpdate(i,r,e)},init(t){return void 0!==t&&this.P(i,void 0,e),t}}}if("setter"===i){let{name:i}=s;return function(s){let r=this[i];t.call(this,s),this.requestUpdate(i,r,e)}}throw Error("Unsupported decorator location: "+i)};function iA(e){return(t,s)=>"object"==typeof s?ix(e,t,s):((e,t,s)=>{let i=t.hasOwnProperty(s);return t.constructor.createProperty(s,i?{...e,wrapped:!0}:e),i?Object.getOwnPropertyDescriptor(t,s):void 0})(e,t,s)}function ik(e){return iA({...e,state:!0,attribute:!1})}var iE=(e,t,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,s),s);function iS(e,t){return(s,i,r)=>{let o=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}="object"==typeof i?s:r??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return iE(s,i,{get(){let s=e.call(this);return void 0===s&&(null!==(s=o(this))||this.hasUpdated)&&t.call(this,s),s}})}return iE(s,i,{get(){return o(this)}})}}function iC(e){return(t,s)=>iE(t,s,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(e)??null}})}function iz(e,t,s){return e?t(e):s?.(e)}var iM={ATTRIBUTE:1,CHILD:2,ELEMENT:6},iF=e=>(...t)=>({_$litDirective$:e,values:t}),iT=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},iD=iF(class extends iT{constructor(e){if(super(e),e.type!==iM.ATTRIBUTE||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){for(let s in this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[s]&&!this.nt?.has(s)&&this.st.add(s);return this.render(t)}let s=e.element.classList;for(let e of this.st)e in t||(s.remove(e),this.st.delete(e));for(let e in t){let i=!!t[e];i===this.st.has(e)||this.nt?.has(e)||(i?(s.add(e),this.st.add(e)):(s.remove(e),this.st.delete(e)))}return ss}}),iW=class{constructor(e){this.#e=!iN(),this.#t=[],this.#s=new Map,this.#i=new Map,this.host=e,this.host.addController(this)}#e;#t;#s;#i;hostConnected(){this.host.shadowRoot&&0===this.#t.length&&(this.#t=[...this.host.shadowRoot.adoptedStyleSheets||[]])}inject(e,t){let s=Array.isArray(t)?t.map(e=>e.toString()).join(""):t.toString();this.#e?this.#r(e,s):this.#o(e,s)}clearAll(){this.#e?(this.#i.forEach(e=>e.remove()),this.host.shadowRoot?.querySelectorAll("style").forEach(e=>e.innerHTML=""),this.#i.clear()):this.host.shadowRoot&&(this.host.shadowRoot.adoptedStyleSheets=[],this.#s.clear(),this.#t=[])}#r(e,t){let s=this.#i.get(e);s||(s=document.createElement("style"),this.#i.set(e,s)),s.textContent=t,this.host.shadowRoot?.appendChild(s)}#o(e,t){if(!this.host.shadowRoot)return;let s=this.#s.get(e);s||(s=new CSSStyleSheet,this.#s.set(e,s)),s.replaceSync(t),this.host.shadowRoot.adoptedStyleSheets=[...this.#t,...Array.from(this.#s.values())]}};function iN(){try{return new CSSStyleSheet,!0}catch{return!1}}var iL="-gdsvsuffix",iP=new Map,iO=e=>{if(globalThis.GDS_DISABLE_VERSIONED_ELEMENTS)return iP.set(e,e),i$(e);let t=e+iL;return(iP.set(e,t),customElements.get(t))?e=>!1:i$(t)},iR=new WeakMap,iH=e=>e.map(e=>{for(let[t,s]of iP.entries())e=e.replace(RegExp(`${t}(?![-a-z])`,"mg"),s);return e}),iU=function(e){return(t,...s)=>{if(globalThis.GDS_DISABLE_VERSIONED_ELEMENTS)return e(t,...s);let[i,...r]=function(e,...t){let s=iR.get(e);return s||((s=iH(e)).raw=iH(e.raw),iR.set(e,s)),[s,...t]}(t,...s);return e(i,...r)}}(s7);!function(e){!function(t){var s="object"==typeof global?global:"object"==typeof self?self:"object"==typeof this?this:Function("return this;")(),i=r(e);function r(e,t){return function(s,i){"function"!=typeof e[s]&&Object.defineProperty(e,s,{configurable:!0,writable:!0,value:i}),t&&t(s,i)}}void 0===s.Reflect?s.Reflect=e:i=r(s.Reflect,i),t(i)}(function(e){var t=Object.prototype.hasOwnProperty,s="function"==typeof Symbol,i=s&&void 0!==Symbol.toPrimitive?Symbol.toPrimitive:"@@toPrimitive",r=s&&void 0!==Symbol.iterator?Symbol.iterator:"@@iterator",o="function"==typeof Object.create,n=({__proto__:[]})instanceof Array,a=!o&&!n,l={create:o?function(){return z(Object.create(null))}:n?function(){return z({__proto__:null})}:function(){return z({})},has:a?function(e,s){return t.call(e,s)}:function(e,t){return t in e},get:a?function(e,s){return t.call(e,s)?e[s]:void 0}:function(e,t){return e[t]}},d=Object.getPrototypeOf(Function),h="object"==typeof process&&process.env&&"true"===process.env.REFLECT_METADATA_USE_MAP_POLYFILL,c=h||"function"!=typeof Map||"function"!=typeof Map.prototype.entries?function(){var e={},t=[],s=function(){function e(e,t,s){this._index=0,this._keys=e,this._values=t,this._selector=s}return e.prototype["@@iterator"]=function(){return this},e.prototype[r]=function(){return this},e.prototype.next=function(){var e=this._index;if(e>=0&&e<this._keys.length){var s=this._selector(this._keys[e],this._values[e]);return e+1>=this._keys.length?(this._index=-1,this._keys=t,this._values=t):this._index++,{value:s,done:!1}}return{value:void 0,done:!0}},e.prototype.throw=function(e){throw this._index>=0&&(this._index=-1,this._keys=t,this._values=t),e},e.prototype.return=function(e){return this._index>=0&&(this._index=-1,this._keys=t,this._values=t),{value:e,done:!0}},e}();return function(){function t(){this._keys=[],this._values=[],this._cacheKey=e,this._cacheIndex=-2}return Object.defineProperty(t.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),t.prototype.has=function(e){return this._find(e,!1)>=0},t.prototype.get=function(e){var t=this._find(e,!1);return t>=0?this._values[t]:void 0},t.prototype.set=function(e,t){var s=this._find(e,!0);return this._values[s]=t,this},t.prototype.delete=function(t){var s=this._find(t,!1);if(s>=0){for(var i=this._keys.length,r=s+1;r<i;r++)this._keys[r-1]=this._keys[r],this._values[r-1]=this._values[r];return this._keys.length--,this._values.length--,t===this._cacheKey&&(this._cacheKey=e,this._cacheIndex=-2),!0}return!1},t.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=e,this._cacheIndex=-2},t.prototype.keys=function(){return new s(this._keys,this._values,i)},t.prototype.values=function(){return new s(this._keys,this._values,o)},t.prototype.entries=function(){return new s(this._keys,this._values,n)},t.prototype["@@iterator"]=function(){return this.entries()},t.prototype[r]=function(){return this.entries()},t.prototype._find=function(e,t){return this._cacheKey!==e&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=e)),this._cacheIndex<0&&t&&(this._cacheIndex=this._keys.length,this._keys.push(e),this._values.push(void 0)),this._cacheIndex},t}();function i(e,t){return e}function o(e,t){return t}function n(e,t){return[e,t]}}():Map,p=h||"function"!=typeof Set||"function"!=typeof Set.prototype.entries?function(){function e(){this._map=new c}return Object.defineProperty(e.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),e.prototype.has=function(e){return this._map.has(e)},e.prototype.add=function(e){return this._map.set(e,e),this},e.prototype.delete=function(e){return this._map.delete(e)},e.prototype.clear=function(){this._map.clear()},e.prototype.keys=function(){return this._map.keys()},e.prototype.values=function(){return this._map.values()},e.prototype.entries=function(){return this._map.entries()},e.prototype["@@iterator"]=function(){return this.keys()},e.prototype[r]=function(){return this.keys()},e}():Set,u=new(h||"function"!=typeof WeakMap?function(){var e=l.create(),s=i();return function(){function e(){this._key=i()}return e.prototype.has=function(e){var t=r(e,!1);return void 0!==t&&l.has(t,this._key)},e.prototype.get=function(e){var t=r(e,!1);return void 0!==t?l.get(t,this._key):void 0},e.prototype.set=function(e,t){return r(e,!0)[this._key]=t,this},e.prototype.delete=function(e){var t=r(e,!1);return void 0!==t&&delete t[this._key]},e.prototype.clear=function(){this._key=i()},e}();function i(){var t;do t="@@WeakMap@@"+function(){var e="function"==typeof Uint8Array?"undefined"!=typeof crypto?crypto.getRandomValues(new Uint8Array(16)):"undefined"!=typeof msCrypto?msCrypto.getRandomValues(new Uint8Array(16)):o(new Uint8Array(16),16):o(Array(16),16);e[6]=79&e[6]|64,e[8]=191&e[8]|128;for(var t="",s=0;s<16;++s){var i=e[s];(4===s||6===s||8===s)&&(t+="-"),i<16&&(t+="0"),t+=i.toString(16).toLowerCase()}return t}();while(l.has(e,t));return e[t]=!0,t}function r(e,i){if(!t.call(e,s)){if(!i)return;Object.defineProperty(e,s,{value:l.create()})}return e[s]}function o(e,t){for(var s=0;s<t;++s)e[s]=255*Math.random()|0;return e}}():WeakMap);function g(e,t,s){var i=u.get(e);if(_(i)){if(!s)return;i=new c,u.set(e,i)}var r=i.get(t);if(_(r)){if(!s)return;r=new c,i.set(t,r)}return r}function f(e,t,s){var i=g(t,s,!1);return!_(i)&&!!i.has(e)}function y(e,t,s){var i=g(t,s,!1);if(!_(i))return i.get(e)}function v(e,t,s,i){g(s,i,!0).set(e,t)}function m(e,t){var s=[],i=g(e,t,!1);if(_(i))return s;for(var o=function(e){var t=S(e,r);if(!k(t))throw TypeError();var s=t.call(e);if(!w(s))throw TypeError();return s}(i.keys()),n=0;;){var a=function(e){var t=e.next();return!t.done&&t}(o);if(!a)return s.length=n,s;var l=a.value;try{s[n]=l}catch(e){try{!function(e){var t=e.return;t&&t.call(e)}(o)}finally{throw e}}n++}}function b(e){if(null===e)return 1;switch(typeof e){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return null===e?1:6;default:return 6}}function _(e){return void 0===e}function $(e){return null===e}function w(e){return"object"==typeof e?null!==e:"function"==typeof e}function x(e){var t=function(e,t){switch(b(e)){case 0:case 1:case 2:case 3:case 4:case 5:return e}var s=3===t?"string":5===t?"number":"default",r=S(e,i);if(void 0!==r){var o=r.call(e,s);if(w(o))throw TypeError();return o}return function(e,t){if("string"===t){var s=e.toString;if(k(s)){var i=s.call(e);if(!w(i))return i}var r=e.valueOf;if(k(r)){var i=r.call(e);if(!w(i))return i}}else{var r=e.valueOf;if(k(r)){var i=r.call(e);if(!w(i))return i}var o=e.toString;if(k(o)){var i=o.call(e);if(!w(i))return i}}throw TypeError()}(e,"default"===s?"number":s)}(e,3);return"symbol"==typeof t?t:""+t}function A(e){return Array.isArray?Array.isArray(e):e instanceof Object?e instanceof Array:"[object Array]"===Object.prototype.toString.call(e)}function k(e){return"function"==typeof e}function E(e){return"function"==typeof e}function S(e,t){var s=e[t];if(null!=s){if(!k(s))throw TypeError();return s}}function C(e){var t=Object.getPrototypeOf(e);if("function"!=typeof e||e===d||t!==d)return t;var s=e.prototype,i=s&&Object.getPrototypeOf(s);if(null==i||i===Object.prototype)return t;var r=i.constructor;return"function"!=typeof r||r===e?t:r}function z(e){return e.__=void 0,delete e.__,e}e("decorate",function(e,t,s,i){if(_(s)){if(!A(e)||!E(t))throw TypeError();return function(e,t){for(var s=e.length-1;s>=0;--s){var i=(0,e[s])(t);if(!_(i)&&!$(i)){if(!E(i))throw TypeError();t=i}}return t}(e,t)}if(!A(e)||!w(t)||!w(i)&&!_(i)&&!$(i))throw TypeError();return $(i)&&(i=void 0),function(e,t,s,i){for(var r=e.length-1;r>=0;--r){var o=(0,e[r])(t,s,i);if(!_(o)&&!$(o)){if(!w(o))throw TypeError();i=o}}return i}(e,t,s=x(s),i)}),e("metadata",function(e,t){return function(s,i){if(!w(s)||!_(i)&&!function(e){switch(b(e)){case 3:case 4:return!0;default:return!1}}(i))throw TypeError();v(e,t,s,i)}}),e("defineMetadata",function(e,t,s,i){if(!w(s))throw TypeError();return _(i)||(i=x(i)),v(e,t,s,i)}),e("hasMetadata",function(e,t,s){if(!w(t))throw TypeError();return _(s)||(s=x(s)),function e(t,s,i){if(f(t,s,i))return!0;var r=C(s);return!$(r)&&e(t,r,i)}(e,t,s)}),e("hasOwnMetadata",function(e,t,s){if(!w(t))throw TypeError();return _(s)||(s=x(s)),f(e,t,s)}),e("getMetadata",function(e,t,s){if(!w(t))throw TypeError();return _(s)||(s=x(s)),function e(t,s,i){if(f(t,s,i))return y(t,s,i);var r=C(s);if(!$(r))return e(t,r,i)}(e,t,s)}),e("getOwnMetadata",function(e,t,s){if(!w(t))throw TypeError();return _(s)||(s=x(s)),y(e,t,s)}),e("getMetadataKeys",function(e,t){if(!w(e))throw TypeError();return _(t)||(t=x(t)),function e(t,s){var i=m(t,s),r=C(t);if(null===r)return i;var o=e(r,s);if(o.length<=0)return i;if(i.length<=0)return o;for(var n=new p,a=[],l=0;l<i.length;l++){var d=i[l],h=n.has(d);h||(n.add(d),a.push(d))}for(var c=0;c<o.length;c++){var d=o[c],h=n.has(d);h||(n.add(d),a.push(d))}return a}(e,t)}),e("getOwnMetadataKeys",function(e,t){if(!w(e))throw TypeError();return _(t)||(t=x(t)),m(e,t)}),e("deleteMetadata",function(e,t,s){if(!w(t))throw TypeError();_(s)||(s=x(s));var i=g(t,s,!1);if(_(i)||!i.delete(e))return!1;if(i.size>0)return!0;var r=u.get(t);return r.delete(s),r.size>0||(u.delete(t),!0)})})}(s||(s={}));var iB=class extends ib{constructor(){super(),this.gdsElementName="",this._isUsingTransitionalStyles=!1,this._dynamicStylesController=new iW(this)}connectedCallback(){var e;super.connectedCallback(),this.gdsElementName=(e=this.tagName.toLowerCase(),[...iP.entries()].find(([,t])=>t===e)?.[0]||this.gdsElementName),this.setAttribute("gds-element",this.gdsElementName)}};tf([ik()],iB.prototype,"_isUsingTransitionalStyles",2);var iI=class e{static get instance(){return globalThis.__gdsTransitionalStyles?.[iL]||(globalThis.__gdsTransitionalStyles={...globalThis.__gdsTransitionalStyles,[iL]:new e}),globalThis.__gdsTransitionalStyles[iL]}#n=new Map;#a=new Map;#e=!iN();apply(e,t){if(!e.shadowRoot)return;let s=this.#n.get(t);s&&(this.#a.set(t,e),this.applyToElement(t,s))}applyToElement(e,t){let s=this.#a.get(e);s&&s.shadowRoot&&(s._dynamicStylesController.clearAll(),s._dynamicStylesController.inject("t-styles",sx(t)),s._isUsingTransitionalStyles=!0)}register(e,t){let s=t;this.#e&&(s=`@layer reset {
        *:not(style, [gds-element]) {
          all: revert;
        }
      }
      ${t}`),this.#n.set(e,s),this.applyToElement(e,s)}},iV=sA`
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
`;function ij(e,t){let s={waitUntilFirstUpdate:!1,...t};return(t,i,r)=>{let{update:o}=t,n=Array.isArray(e)?e:[e];t.update=function(e){n.forEach(t=>{if(e.has(t)){let i=e.get(t),o=this[t];i!==o&&(!s.waitUntilFirstUpdate||this.hasUpdated)&&r.value?.call(this,i,o)}}),o.call(this,e)}}}var iY=e=>{class t extends e{constructor(){super(...arguments),this.onblur=e=>{this.setAttribute("tabindex","-1"),this.dispatchEvent(new FocusEvent("gds-blur",{bubbles:!0,composed:!0,relatedTarget:e.relatedTarget}))},this.onfocus=e=>{this.dispatchEvent(new FocusEvent("gds-focus",{bubbles:!0,composed:!0,relatedTarget:e.relatedTarget}))}}focus(e){this.setAttribute("tabindex","0"),super.focus(e)}}return t},iG=class extends iY(iB){constructor(){super(),tm(this,r),tm(this,i,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",t$(this,r,o)),this.addEventListener("keydown",e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),t$(this,r,o).call(this,e))})}get hidden(){return tv(this,i)}set hidden(e){this.isPlaceholder||(tb(this,i,"true"===e||!0===e),this.setAttribute("aria-hidden",e.toString()))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.isPlaceholder&&(tb(this,i,!0),this.setAttribute("aria-hidden","true")),this.updateComplete.then(()=>iI.instance.apply(this,"gds-option"))}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?(tb(this,i,!0),this.setAttribute("aria-hidden","true")):(tb(this,i,!1),this.setAttribute("aria-hidden","false"))}render(){let e=this.parentElement?.multiple,t=s7` <span
      class="checkbox ${iD({checked:this.selected})}"
    ></span>`;return e||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),s7`<div>${iz(e,()=>t)} <slot></slot></div>`}};i=new WeakMap,r=new WeakSet,o=function(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}}))},iG.styles=iV,tf([iA()],iG.prototype,"value",2),tf([iA({attribute:"aria-hidden",reflect:!0})],iG.prototype,"hidden",1),tf([iA({attribute:"aria-selected",reflect:!0})],iG.prototype,"selected",2),tf([iA({type:Boolean,reflect:!0})],iG.prototype,"isPlaceholder",2),tf([ij("isplaceholder")],iG.prototype,"_handlePlaceholderStatusChange",1),iG=tf([iO("gds-option")],iG);var iq=sA`
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
`,iK=class extends iB{connectedCallback(){super.connectedCallback(),this.setAttribute("inert","true"),this.updateComplete.then(()=>iI.instance.apply(this,"gds-menu-heading"))}render(){return s7`<slot></slot>`}};iK.styles=iq,iK=tf([iO("gds-menu-heading")],iK);var iX=class extends iY(iB){constructor(){super(...arguments),tm(this,n,()=>{this.dispatchEvent(new CustomEvent("gds-menu-item-click",{bubbles:!0,composed:!0}))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem"),this.addEventListener("keydown",e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),this.click())}),this.addEventListener("click",tv(this,n)),iI.instance.apply(this,"gds-option")}render(){return iU`<div><slot></slot></div>`}};function iZ(e){e.updateComplete.then(()=>{let t=e.shadowRoot?.querySelectorAll("slot[gds-allow]");if(!t)return;for(let t of Array.from(e.childNodes))t.nodeType===Node.TEXT_NODE&&t.textContent?.trim()===""&&t.parentNode?.removeChild(t);let s=e=>{let t=[...e.getAttribute("gds-allow")?.split(" ")||[],"slot"];for(let s of Array.from(e.assignedNodes()))t.includes(s.nodeName.toLowerCase())||s.parentNode?.removeChild(s)};t.forEach(e=>{s(e),e.addEventListener("slotchange",()=>s(e))})})}n=new WeakMap,iX.styles=[iV],iX=tf([iO("gds-menu-item")],iX);var iJ=iF(class extends iT{constructor(e){if(super(e),e.type!==iM.ELEMENT)throw Error("The `forwardAttributes` directive must be used in element bindings")}render(e){return si}update(e,[t]){let s=e.element;Array.from((e.options?.host).attributes).forEach(e=>{t(e)&&s.setAttribute(e.name.replace("gds-",""),e.value)})}}),iQ=`:host {
  --gds-ripple-motion-name: ripple;
  --gds-ripple-motion: var(--gds-ripple-motion-name)
    var(--gds-sys-motion-duration) var(--gds-sys-motion-timing-function)
    var(--gds-sys-motion-delay) var(--gds-sys-motion-iteration-count)
    var(--gds-sys-motion-direction) var(--gds-sys-motion-fill-mode)
    var(--gds-sys-motion-play-state);
  border-radius: var(--gds-sys-radii-full);
  contain: strict;
  display: flex;
  height: 100%;
  inset: 0;
  overflow: hidden;
  position: absolute;
  width: 100%;
}

div {
  background-color: currentColor;
  border-radius: var(--gds-sys-radii-full);
  display: flex;
  height: 20px;
  left: var(--gds-ripple-left, 50%);
  margin-left: -10px;
  margin-top: -10px;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: var(--gds-ripple-top, 50%);
  width: 20px;
  will-change: transform;
}

div.gds-ripple-effect {
  animation: var(--gds-ripple-motion);
}

@keyframes ripple {
  from {
    opacity: 0.5;
    transform: scale(0);
  }
  to {
    opacity: 0;
    transform: scale(calc(3 * var(--mt-ripple-spread, 4)));
  }
}
@media (prefers-reduced-motion: reduce) {
  :host {
    --gds-ripple-motion-name: none !important;
  }
}`,i0=`/**
 * Do not edit directly
 * Generated on Tue, 28 May 2024 13:31:58 GMT
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
`,i1=`/**
 * Do not edit directly
 * Generated on Tue, 28 May 2024 13:31:58 GMT
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
  --gds-ref-size-full: 9999px;
  --gds-ref-size-3-5: 14px;
  --gds-ref-size-2-5: 10px;
  --gds-ref-size-1-5: 6px;
  --gds-ref-size-0-5: 2px;
  --gds-ref-size-100: 400px;
  --gds-ref-size-99: 396px;
  --gds-ref-size-98: 392px;
  --gds-ref-size-97: 388px;
  --gds-ref-size-96: 384px;
  --gds-ref-size-95: 380px;
  --gds-ref-size-94: 376px;
  --gds-ref-size-93: 372px;
  --gds-ref-size-92: 368px;
  --gds-ref-size-91: 364px;
  --gds-ref-size-90: 360px;
  --gds-ref-size-89: 356px;
  --gds-ref-size-88: 352px;
  --gds-ref-size-87: 348px;
  --gds-ref-size-86: 344px;
  --gds-ref-size-85: 340px;
  --gds-ref-size-84: 336px;
  --gds-ref-size-83: 332px;
  --gds-ref-size-82: 328px;
  --gds-ref-size-81: 324px;
  --gds-ref-size-80: 320px;
  --gds-ref-size-79: 316px;
  --gds-ref-size-78: 312px;
  --gds-ref-size-77: 308px;
  --gds-ref-size-76: 304px;
  --gds-ref-size-75: 300px;
  --gds-ref-size-74: 296px;
  --gds-ref-size-73: 292px;
  --gds-ref-size-72: 288px;
  --gds-ref-size-71: 284px;
  --gds-ref-size-70: 280px;
  --gds-ref-size-69: 276px;
  --gds-ref-size-68: 272px;
  --gds-ref-size-67: 268px;
  --gds-ref-size-66: 264px;
  --gds-ref-size-65: 260px;
  --gds-ref-size-64: 256px;
  --gds-ref-size-63: 252px;
  --gds-ref-size-62: 248px;
  --gds-ref-size-61: 244px;
  --gds-ref-size-60: 240px;
  --gds-ref-size-59: 236px;
  --gds-ref-size-58: 232px;
  --gds-ref-size-57: 228px;
  --gds-ref-size-56: 224px;
  --gds-ref-size-55: 220px;
  --gds-ref-size-54: 216px;
  --gds-ref-size-53: 212px;
  --gds-ref-size-52: 208px;
  --gds-ref-size-51: 204px;
  --gds-ref-size-50: 200px;
  --gds-ref-size-49: 196px;
  --gds-ref-size-48: 192px;
  --gds-ref-size-47: 188px;
  --gds-ref-size-46: 184px;
  --gds-ref-size-45: 180px;
  --gds-ref-size-44: 176px;
  --gds-ref-size-43: 172px;
  --gds-ref-size-42: 168px;
  --gds-ref-size-41: 164px;
  --gds-ref-size-40: 160px;
  --gds-ref-size-39: 156px;
  --gds-ref-size-38: 152px;
  --gds-ref-size-37: 148px;
  --gds-ref-size-36: 144px;
  --gds-ref-size-35: 140px;
  --gds-ref-size-34: 136px;
  --gds-ref-size-33: 132px;
  --gds-ref-size-32: 128px;
  --gds-ref-size-31: 124px;
  --gds-ref-size-30: 120px;
  --gds-ref-size-29: 116px;
  --gds-ref-size-28: 112px;
  --gds-ref-size-27: 108px;
  --gds-ref-size-26: 104px;
  --gds-ref-size-25: 100px;
  --gds-ref-size-24: 96px;
  --gds-ref-size-23: 92px;
  --gds-ref-size-22: 88px;
  --gds-ref-size-21: 84px;
  --gds-ref-size-20: 80px;
  --gds-ref-size-19: 76px;
  --gds-ref-size-18: 72px;
  --gds-ref-size-17: 68px;
  --gds-ref-size-16: 64px;
  --gds-ref-size-15: 60px;
  --gds-ref-size-14: 56px;
  --gds-ref-size-13: 52px;
  --gds-ref-size-12: 48px;
  --gds-ref-size-11: 44px;
  --gds-ref-size-10: 40px;
  --gds-ref-size-9: 36px;
  --gds-ref-size-8: 32px;
  --gds-ref-size-7: 28px;
  --gds-ref-size-6: 24px;
  --gds-ref-size-5: 20px;
  --gds-ref-size-4: 16px;
  --gds-ref-size-3: 12px;
  --gds-ref-size-2: 8px;
  --gds-ref-size-1: 4px;
  --gds-ref-size-0: 0px;
  --gds-sys-space-6xl: var(--gds-ref-size-14);
  --gds-sys-space-5xl: var(--gds-ref-size-12);
  --gds-sys-space-4xl: var(--gds-ref-size-10);
  --gds-sys-space-3xl: var(--gds-ref-size-8);
  --gds-sys-space-2xl: var(--gds-ref-size-6);
  --gds-sys-space-xl: var(--gds-ref-size-5);
  --gds-sys-space-spacer-6xl: var(--gds-ref-size-14);
  --gds-sys-space-spacer-5xl: var(--gds-ref-size-12);
  --gds-sys-space-spacer-4xl: var(--gds-ref-size-10);
  --gds-sys-space-spacer-3xl: var(--gds-ref-size-8);
  --gds-sys-space-spacer-2xl: var(--gds-ref-size-6);
  --gds-sys-space-spacer-xl: var(--gds-ref-size-5);
  --gds-sys-space-spacer-l: var(--gds-ref-size-4);
  --gds-sys-space-spacer-m: var(--gds-ref-size-2);
  --gds-sys-space-spacer-s: var(--gds-ref-size-1-5);
  --gds-sys-space-spacer-xs: var(--gds-ref-size-1);
  --gds-sys-space-spacer-2xs: var(--gds-ref-size-0-5);
  --gds-sys-space-spacer-0: var(--gds-ref-size-0);
  --gds-sys-space-padding-6xl: var(--gds-ref-size-14);
  --gds-sys-space-padding-5xl: var(--gds-ref-size-12);
  --gds-sys-space-padding-4xl: var(--gds-ref-size-10);
  --gds-sys-space-padding-3xl: var(--gds-ref-size-8);
  --gds-sys-space-padding-2xl: var(--gds-ref-size-6);
  --gds-sys-space-padding-xl: var(--gds-ref-size-5);
  --gds-sys-space-padding-l: var(--gds-ref-size-4);
  --gds-sys-space-padding-m: var(--gds-ref-size-2);
  --gds-sys-space-padding-s: var(--gds-ref-size-1-5);
  --gds-sys-space-padding-xs: var(--gds-ref-size-1);
  --gds-sys-space-padding-2xs: var(--gds-ref-size-0-5);
  --gds-sys-space-padding-0: var(--gds-ref-size-0);
  --gds-sys-space-margins-6xl: var(--gds-ref-size-14);
  --gds-sys-space-margins-5xl: var(--gds-ref-size-12);
  --gds-sys-space-margins-4xl: var(--gds-ref-size-10);
  --gds-sys-space-margins-3xl: var(--gds-ref-size-8);
  --gds-sys-space-margins-2xl: var(--gds-ref-size-6);
  --gds-sys-space-margins-xl: var(--gds-ref-size-5);
  --gds-sys-space-margins-l: var(--gds-ref-size-4);
  --gds-sys-space-margins-m: var(--gds-ref-size-2);
  --gds-sys-space-margins-s: var(--gds-ref-size-1-5);
  --gds-sys-space-margins-xs: var(--gds-ref-size-1);
  --gds-sys-space-margins-2xs: var(--gds-ref-size-0-5);
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
`,i2=`/**
 * Do not edit directly
 * Generated on Tue, 28 May 2024 13:31:58 GMT
 */

:host {
  --gds-sys-motion-play-state: running;
  --gds-sys-motion-fill-mode: none;
  --gds-sys-motion-direction: normal;
  --gds-sys-motion-iteration-count: 1;
  --gds-sys-motion-delay: 0s;
  --gds-sys-motion-timing-function: ease;
  --gds-sys-motion-duration: 1.2s;
  --gds-sys-motion-easing: cubic-bezier(0.46, 0.03, 0.52, 0.96);
}
`,i5=[sx(`/**
 * Do not edit directly
 * Generated on Tue, 28 May 2024 13:31:58 GMT
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
`),sx(i0),sx(i1),sx(i2)],i3=class extends ib{constructor(){super(...arguments),this.onmousedown=e=>{let t=e.target.getBoundingClientRect(),s=this._rippleEl;s&&(s.classList.remove("gds-ripple-effect"),this.style.setProperty("--gds-ripple-top",`${e.clientY-t.top}px`),this.style.setProperty("--gds-ripple-left",`${e.clientX-t.left}px`),setTimeout(()=>{s.classList.add("gds-ripple-effect")},20))}}render(){return s7`<div></div>`}};i3.styles=[i5,sx(iQ)],tf([iS("div")],i3.prototype,"_rippleEl",2),i3=tf([iO("gds-ripple")],i3);var i4=`@layer tokens, a11y, core, ranks, sizes, variants, disabled;

@layer tokens {
  :host {
    --_gap: var(--gds-sys-space-spacer-m);

    --_transition: var(--gds-sys-transition);

    --_padding-inline: var(--gds-sys-space-padding-l);
    --_padding-block: var(--gds-sys-space-padding-m);

    --_border-radius: var(--gds-sys-radii-full);
    --_border-width: 1px;
    --_border-style: solid;

    --_color-bg: var(--gds-sys-color-content-content);
    --_color-text: var(--gds-sys-color-content-content-inverse);
    --_color-border: var(--gds-sys-color-stroke-stroke);

    --_color-outline-alpha: 60%;
    --_color-outline: var(--_color-border);

    /* These state layer variables can be variant to the correct state layer token in
    * the rank and variant specific styles. It will be blended with \`--_color-bg\`
    * for the \`background-color\` rule. */
    --_state-layer-hover: var(--gds-sys-color-state-layers-state-black);
    --_state-layer-active: var(--gds-sys-color-state-layers-state-black-shade);

    --gds-sys-transition-properties: color;

    contain: layout;
    display: inline-block;
    isolation: isolate;
    max-width: 100%;
  }
}

@layer a11y {
  @media (prefers-color-scheme: dark) {
    /* TODO */
  }
  @media (prefers-reduced-motion: reduce) {
    :host {
      --_transition: none;
    }
  }
}

@layer core {
  button {
    --gds-sys-transition-properties: color !important;

    align-items: center;
    background-color: var(--_color-bg);
    block-size: 100%;
    border-color: var(--_color-border);
    border-radius: var(--_border-radius);
    border-style: var(--_border-style);
    border-width: var(--_border-width);
    box-sizing: border-box;
    color: var(--_color-text);
    color-scheme: dark light;
    cursor: pointer;
    display: inline-flex;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 400;
    gap: var(--_gap);
    height: var(--_size);
    inline-size: 100%;
    justify-content: space-between;
    justify-items: center;
    line-height: 1.25;
    outline-color: transparent;
    outline-offset: 2px;
    outline-style: solid;
    outline-width: 2px;
    padding-block: var(--_padding-block);
    padding-inline: var(--_padding-inline);
    position: relative;
    transition: var(--_transition);
    transition-property: color, border-color;

    &:focus {
      outline-color: color-mix(
        in srgb,
        var(--_color-outline),
        transparent var(--_color-outline-alpha)
      );

      &:not(:focus-visible) {
        outline-color: transparent;
      }
    }

    &:hover {
      background-color: color-mix(
        in srgb,
        var(--_color-bg),
        var(--_state-layer-hover)
      );
      border-color: color-mix(
        in srgb,
        var(--_color-border),
        var(--_state-layer-hover)
      );
    }

    &:active {
      background-color: color-mix(
        in srgb,
        var(--_color-bg),
        var(--_state-layer-active)
      );
      border-color: color-mix(
        in srgb,
        var(--_color-border),
        var(--_state-layer-active)
      );
    }
  }

  button slot:not([name]) {
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  button.icon slot {
    display: contents;
  }
}

@layer ranks {
  :host([rank*='secondary']) button {
    --_color-bg: var(--gds-sys-color-content-content-inverse);
    --_color-text: var(--gds-sys-color-content-content);
    --_color-border: var(--gds-sys-color-stroke-stroke);

    &:active {
      --_state-layer-active: var(--gds-sys-color-state-layers-state-black-dim1);
    }
  }

  :host([rank*='tertiary']) button {
    --_color-bg: transparent;
    --_color-text: var(--gds-sys-color-content-content);
    --_color-border: transparent;

    &:hover {
      --_color-border: var(--gds-sys-color-stroke-stroke);
    }

    &:active {
      --_state-layer-active: var(--gds-sys-color-state-layers-state-black-dim1);
      --_color-border: var(--gds-sys-color-stroke-stroke);
    }
  }

  button.circle {
    display: flex;
    align-items: center;
    height: var(--_size);
    width: var(--_size);
    aspect-ratio: 1/1;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
}

@layer sizes {
  :host([size='small']) button {
    --_padding-inline: var(--gds-sys-space-padding-l);
    --_padding-block: var(--gds-sys-space-padding-s);
    --_size: 2rem;
    font-size: 0.875rem;
  }

  :host([size='medium']) button {
    --_padding-inline: var(--gds-sys-space-padding-l);
    --_padding-block: var(--gds-sys-space-padding-m);
    --_size: 2.5rem;
  }

  :host([size='large']) button {
    --_padding-inline: var(--gds-sys-space-padding-xl);
    --_padding-block: var(--gds-sys-space-padding-m);
    --_size: 3rem;
  }
}

@layer variants {
  :host([rank='primary'][variant='positive']) button {
    --_bg: var(--gds-sys-color-container-container-positive);
    --_color-bg: var(--_bg);
    --_color-border: var(--_bg);

    &:hover {
      --_state-layer-hover: var(--gds-sys-color-state-layers-state-black-dim1);
    }

    &:active {
      --_state-layer-active: var(--gds-sys-color-state-layers-state-black-dim2);
    }

    &:focus {
      --_color-outline: var(--_bg);
    }
  }

  :host([rank='secondary'][variant='positive']) button {
    --_color-bg: var(--gds-sys-color-content-content-inverse);
    --_color-text: var(--gds-sys-color-content-content-positive);
    --_color-border: var(--gds-sys-color-stroke-stroke-positive);

    &:hover {
      --_state-layer-hover: var(--gds-sys-color-state-layers-state-positive);
    }

    &:active {
      --_state-layer-active: var(
        --gds-sys-color-state-layers-state-positive-dim
      );
    }
  }

  :host([rank='tertiary'][variant='positive']) button {
    --_color-bg: transparent;
    --_color-text: var(--gds-sys-color-content-content-positive);
    --_color-border: transparent;

    &:hover {
      --_state-layer-hover: var(--gds-sys-color-state-layers-state-positive);
      --_color-border: var(--gds-sys-color-stroke-stroke-positive);
    }

    &:active {
      --_state-layer-active: var(
        --gds-sys-color-state-layers-state-positive-dim
      );
      --_color-border: var(--gds-sys-color-stroke-stroke-positive);
    }
  }

  :host([rank='primary'][variant='negative']) button {
    --_bg: var(--gds-sys-color-container-container-negative);
    --_color-bg: var(--_bg);
    --_color-text: var(--gds-sys-color-status-negative-on-negative);
    --_color-border: var(--_bg);

    &:hover {
      --_state-layer-hover: var(--gds-sys-color-state-layers-state-black-dim1);
    }

    &:active {
      --_state-layer-active: var(--gds-sys-color-state-layers-state-black-dim2);
    }

    &:focus {
      --_color-outline: var(--_bg);
    }
  }

  :host([rank='secondary'][variant='negative']) button {
    --_color-bg: var(--gds-sys-color-content-content-inverse);
    --_color-text: var(--gds-sys-color-content-content-negative);
    --_color-border: var(--gds-sys-color-stroke-stroke-negative);

    &:hover {
      --_state-layer-hover: var(--gds-sys-color-state-layers-state-negative);
    }

    &:active {
      --_state-layer-active: var(
        --gds-sys-color-state-layers-state-negative-dim
      );
    }
  }

  :host([rank='tertiary'][variant='negative']) button {
    --_color-bg: transparent;
    --_color-text: var(--gds-sys-color-content-content-negative);
    --_color-border: transparent;

    &:hover {
      --_state-layer-hover: var(--gds-sys-color-state-layers-state-negative);
      --_color-border: var(--gds-sys-color-stroke-stroke-negative);
    }

    &:active {
      --_state-layer-active: var(
        --gds-sys-color-state-layers-state-negative-dim
      );
      --_color-border: var(--gds-sys-color-stroke-stroke-negative);
    }
  }
}

@layer disabled {
  button:disabled {
    --_color-bg: var(--gds-sys-color-container-container-disabled);
    border-color: var(--_color-bg);
    color: var(--gds-sys-color-content-content-disabled);
    pointer-events: none;
  }
}
`,i6=new WeakMap,i8=class extends iB{constructor(){super(),this.invalid=!1,this.name="",this._handleFormReset=()=>{this.value=void 0};try{this.#l=this.attachInternals()}catch(e){this.#l={form:this.closest("form"),setFormValue:e=>{this.value=e},setValidity:(e,t)=>{this.invalid=e.customError},validationMessage:"",validity:{badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},willValidate:!0,checkValidity:()=>!0,reportValidity:()=>!0}}}#l;static{this.formAssociated=!0}get form(){return this.#l.form}get validity(){return this.#l.validity}get validationMessage(){return this.#l.validationMessage}get willValidate(){return this.#l.willValidate}checkValidity(){return this.#l.checkValidity()}reportValidity(){return this.#l.reportValidity()}connectedCallback(){super.connectedCallback(),this.#l.form?.addEventListener("reset",this._handleFormReset)}disconnectedCallback(){super.disconnectedCallback(),this.#l.form?.removeEventListener("reset",this._handleFormReset)}__handleValidityChange(){this.#l.setValidity({badInput:!1,customError:this.invalid,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!this.invalid},this.validationMessage||"Error message")}__handleValueChange(){this.#l.setFormValue(this.value)}};tf([iA({type:Boolean,reflect:!0,attribute:"aria-invalid",converter:{fromAttribute:Boolean,toAttribute:e=>e?.toString()}})],i8.prototype,"invalid",2),tf([iA()],i8.prototype,"value",2),tf([iA({reflect:!0})],i8.prototype,"name",2),tf([ij("invalid")],i8.prototype,"__handleValidityChange",1),tf([ij("value")],i8.prototype,"__handleValueChange",1);var i9=(e,...t)=>{let s=i6.get(e);return s||((s=e.map(e=>e.replace(/\n[\s]+</gm,"<"))).raw=e.raw,i6.set(e,s)),iU(s,...t)},i7=class extends i8{constructor(){super(),this.disabled=!1,this.rank="primary",this.variant="neutral",this.size="medium",this.label="",tm(this,a,!1),tm(this,l,()=>{let e=this._mainSlot?.assignedNodes()??[];tb(this,a,1===e.length&&e.some(e=>e.nodeName.toLowerCase().startsWith("gds-icon"))),this.requestUpdate()}),tm(this,d,e=>{this.dispatchEvent(new CustomEvent("gds-click",{bubbles:!0,composed:!0,detail:e})),this.form&&("submit"===this.type?this.form.requestSubmit():"reset"===this.type&&this.form.reset())}),iZ(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),iI.instance.apply(this,"gds-button")}render(){let e={circle:tv(this,a),icon:tv(this,a),small:"small"===this.size,large:"large"===this.size,positive:"positive"===this.variant,negative:"negative"===this.variant,primary:"primary"===this.rank,secondary:"secondary"===this.rank,tertiary:"tertiary"===this.rank};return i9`
      <button
        class=${iD(e)}
        ?type="${this.type}"
        ?disabled="${this.disabled}"
        @click="${tv(this,d)}"
        aria-label=${this.label||it}
        part="_button"
        ${iJ(e=>e.name.startsWith("gds-aria")||"gds-role"===e.name)}
      >
        <slot name="lead"></slot>
        <slot @slotchange=${tv(this,l)}></slot>
        <slot name="trail"></slot>
        ${iz(!this._isUsingTransitionalStyles,()=>i9`<gds-ripple></gds-ripple>`)}
      </button>
    `}};a=new WeakMap,l=new WeakMap,d=new WeakMap,i7.styles=[i5,sx(i4)],i7.shadowRootOptions={mode:"open",delegatesFocus:!0},tf([iA({type:Boolean,reflect:!0})],i7.prototype,"disabled",2),tf([iA({reflect:!0})],i7.prototype,"type",2),tf([iA({reflect:!0})],i7.prototype,"rank",2),tf([iA({reflect:!0})],i7.prototype,"variant",2),tf([iA({reflect:!0})],i7.prototype,"size",2),tf([iA()],i7.prototype,"label",2),tf([iS("slot:not([name])")],i7.prototype,"_mainSlot",2),i7=tf([iO("gds-button")],i7);var re=(e,...t)=>({strTag:!0,strings:e,values:t}),rt=e=>"string"!=typeof e&&"strTag"in e,rs=(e,t,s)=>{let i=e[0];for(let r=1;r<e.length;r++)i+=t[s?s[r-1]:r-1]+e[r];return i},ri="lit-localize-status",rr=class{constructor(e){this.__litLocalizeEventHandler=e=>{"ready"===e.detail.status&&this.host.requestUpdate()},this.host=e}hostConnected(){window.addEventListener(ri,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(ri,this.__litLocalizeEventHandler)}},ro=e=>e.addController(new rr(e)),rn=class{constructor(){this.settled=!1,this.promise=new Promise((e,t)=>{this._resolve=e,this._reject=t})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}},ra=[];for(let e=0;e<256;e++)ra[e]=(e>>4&15).toString(16)+(15&e).toString(16);new rn().resolve();var rl=e=>rt(e)?rs(e.strings,e.values):e,rd=globalThis,rh=rd.trustedTypes,rc=rh?rh.createPolicy("lit-html",{createHTML:e=>e}):void 0,rp="$lit$",ru=`lit$${(Math.random()+"").slice(9)}$`,rg="?"+ru,rf=`<${rg}>`,ry=document,rv=()=>ry.createComment(""),rm=e=>null===e||"object"!=typeof e&&"function"!=typeof e,rb=Array.isArray,r_=e=>rb(e)||"function"==typeof e?.[Symbol.iterator],r$="[ 	\n\f\r]",rw=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,rx=/-->/g,rA=/>/g,rk=RegExp(`>|${r$}(?:([^\\s"'>=/]+)(${r$}*=${r$}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),rE=/'/g,rS=/"/g,rC=/^(?:script|style|textarea|title)$/i,rz=e=>(t,...s)=>({_$litType$:e,strings:t,values:s}),rM=rz(1);rz(2);var rF=Symbol.for("lit-noChange"),rT=Symbol.for("lit-nothing"),rD=new WeakMap,rW=ry.createTreeWalker(ry,129);function rN(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==rc?rc.createHTML(t):t}var rL=(e,t)=>{let s=e.length-1,i=[],r,o=2===t?"<svg>":"",n=rw;for(let t=0;t<s;t++){let s=e[t],a,l,d=-1,h=0;for(;h<s.length&&(n.lastIndex=h,null!==(l=n.exec(s)));)h=n.lastIndex,n===rw?"!--"===l[1]?n=rx:void 0!==l[1]?n=rA:void 0!==l[2]?(rC.test(l[2])&&(r=RegExp("</"+l[2],"g")),n=rk):void 0!==l[3]&&(n=rk):n===rk?">"===l[0]?(n=r??rw,d=-1):void 0===l[1]?d=-2:(d=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?rk:'"'===l[3]?rS:rE):n===rS||n===rE?n=rk:n===rx||n===rA?n=rw:(n=rk,r=void 0);let c=n===rk&&e[t+1].startsWith("/>")?" ":"";o+=n===rw?s+rf:d>=0?(i.push(a),s.slice(0,d)+rp+s.slice(d)+ru+c):s+ru+(-2===d?t:c)}return[rN(e,o+(e[s]||"<?>")+(2===t?"</svg>":"")),i]},rP=class e{constructor({strings:t,_$litType$:s},i){let r;this.parts=[];let o=0,n=0,a=t.length-1,l=this.parts,[d,h]=rL(t,s);if(this.el=e.createElement(d,i),rW.currentNode=this.el.content,2===s){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=rW.nextNode())&&l.length<a;){if(1===r.nodeType){if(r.hasAttributes())for(let e of r.getAttributeNames())if(e.endsWith(rp)){let t=h[n++],s=r.getAttribute(e).split(ru),i=/([.?@])?(.*)/.exec(t);l.push({type:1,index:o,name:i[2],strings:s,ctor:"."===i[1]?rB:"?"===i[1]?rI:"@"===i[1]?rV:rU}),r.removeAttribute(e)}else e.startsWith(ru)&&(l.push({type:6,index:o}),r.removeAttribute(e));if(rC.test(r.tagName)){let e=r.textContent.split(ru),t=e.length-1;if(t>0){r.textContent=rh?rh.emptyScript:"";for(let s=0;s<t;s++)r.append(e[s],rv()),rW.nextNode(),l.push({type:2,index:++o});r.append(e[t],rv())}}}else if(8===r.nodeType){if(r.data===rg)l.push({type:2,index:o});else{let e=-1;for(;-1!==(e=r.data.indexOf(ru,e+1));)l.push({type:7,index:o}),e+=ru.length-1}}o++}}static createElement(e,t){let s=ry.createElement("template");return s.innerHTML=e,s}};function rO(e,t,s=e,i){if(t===rF)return t;let r=void 0!==i?s._$Co?.[i]:s._$Cl,o=rm(t)?void 0:t._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(e))._$AT(e,s,i),void 0!==i?(s._$Co??=[])[i]=r:s._$Cl=r),void 0!==r&&(t=rO(e,r._$AS(e,t.values),r,i)),t}var rR=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:s}=this._$AD,i=(e?.creationScope??ry).importNode(t,!0);rW.currentNode=i;let r=rW.nextNode(),o=0,n=0,a=s[0];for(;void 0!==a;){if(o===a.index){let t;2===a.type?t=new rH(r,r.nextSibling,this,e):1===a.type?t=new a.ctor(r,a.name,a.strings,this,e):6===a.type&&(t=new rj(r,this,e)),this._$AV.push(t),a=s[++n]}o!==a?.index&&(r=rW.nextNode(),o++)}return rW.currentNode=ry,i}p(e){let t=0;for(let s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}},rH=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=rT,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){rm(e=rO(this,e,t))?e===rT||null==e||""===e?(this._$AH!==rT&&this._$AR(),this._$AH=rT):e!==this._$AH&&e!==rF&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):r_(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==rT&&rm(this._$AH)?this._$AA.nextSibling.data=e:this.$(ry.createTextNode(e)),this._$AH=e}g(e){let{values:t,_$litType$:s}=e,i="number"==typeof s?this._$AC(e):(void 0===s.el&&(s.el=rP.createElement(rN(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(t);else{let e=new rR(i,this),s=e.u(this.options);e.p(t),this.$(s),this._$AH=e}}_$AC(e){let t=rD.get(e.strings);return void 0===t&&rD.set(e.strings,t=new rP(e)),t}T(t){rb(this._$AH)||(this._$AH=[],this._$AR());let s=this._$AH,i,r=0;for(let o of t)r===s.length?s.push(i=new e(this.k(rv()),this.k(rv()),this,this.options)):i=s[r],i._$AI(o),r++;r<s.length&&(this._$AR(i&&i._$AB.nextSibling,r),s.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}},rU=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,r){this.type=1,this._$AH=rT,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=rT}_$AI(e,t=this,s,i){let r=this.strings,o=!1;if(void 0===r)(o=!rm(e=rO(this,e,t,0))||e!==this._$AH&&e!==rF)&&(this._$AH=e);else{let i,n;let a=e;for(e=r[0],i=0;i<r.length-1;i++)(n=rO(this,a[s+i],t,i))===rF&&(n=this._$AH[i]),o||=!rm(n)||n!==this._$AH[i],n===rT?e=rT:e!==rT&&(e+=(n??"")+r[i+1]),this._$AH[i]=n}o&&!i&&this.O(e)}O(e){e===rT?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},rB=class extends rU{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===rT?void 0:e}},rI=class extends rU{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==rT)}},rV=class extends rU{constructor(e,t,s,i,r){super(e,t,s,i,r),this.type=5}_$AI(e,t=this){if((e=rO(this,e,t,0)??rT)===rF)return;let s=this._$AH,i=e===rT&&s!==rT||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==rT&&(s===rT||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},rj=class{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){rO(this,e)}},rY=rd.litHtmlPolyfillSupport;rY?.(rP,rH),(rd.litHtmlVersions??=[]).push("3.1.0");var rG=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},rq=(e=class extends rG{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.it){for(let s in this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[s]&&!this.st?.has(s)&&this.it.add(s);return this.render(t)}let s=e.element.classList;for(let e of this.it)e in t||(s.remove(e),this.it.delete(e));for(let e in t){let i=!!t[e];i===this.it.has(e)||this.st?.has(e)||(i?(s.add(e),this.it.add(e)):(s.remove(e),this.it.delete(e)))}return rF}},(...t)=>({_$litDirective$:e,values:t})),rK=sA`
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
`,{I:rX}={P:tq,A:tK,C:tX,M:1,L:sa,R:sh,D:t2,V:sd,I:sc,H:sp,N:sg,U:sf,B:su,F:sy},rZ=e=>null===e||"object"!=typeof e&&"function"!=typeof e,rJ=e=>void 0===e.strings,rQ=()=>document.createComment(""),r0=(e,t,s)=>{let i=e._$AA.parentNode,r=void 0===t?e._$AB:t._$AA;if(void 0===s)s=new rX(i.insertBefore(rQ(),r),i.insertBefore(rQ(),r),e,e.options);else{let t=s._$AB.nextSibling,o=s._$AM,n=o!==e;if(n){let t;s._$AQ?.(e),s._$AM=e,void 0!==s._$AP&&(t=e._$AU)!==o._$AU&&s._$AP(t)}if(t!==r||n){let e=s._$AA;for(;e!==t;){let t=e.nextSibling;i.insertBefore(e,r),e=t}}}return s},r1=(e,t,s=e)=>(e._$AI(t,s),e),r2={},r5=(e,t=r2)=>e._$AH=t,r3=e=>e._$AH,r4=e=>{e._$AP?.(!1,!0);let t=e._$AA,s=e._$AB.nextSibling;for(;t!==s;){let e=t.nextSibling;t.remove(),t=e}},r6=(e,t)=>{let s=e._$AN;if(void 0===s)return!1;for(let e of s)e._$AO?.(t,!1),r6(e,t);return!0},r8=e=>{let t,s;do{if(void 0===(t=e._$AM))break;(s=t._$AN).delete(e),e=t}while(0===s?.size)},r9=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(void 0===s)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),ot(t)}};function r7(e){void 0!==this._$AN?(r8(this),this._$AM=e,r9(this)):this._$AM=e}function oe(e,t=!1,s=0){let i=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size){if(t){if(Array.isArray(i))for(let e=s;e<i.length;e++)r6(i[e],!1),r8(i[e]);else null!=i&&(r6(i,!1),r8(i))}else r6(this,e)}}var ot=e=>{e.type==iM.CHILD&&(e._$AP??=oe,e._$AQ??=r7)},os=class extends iT{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,s){super._$AT(e,t,s),r9(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(r6(this,e),r8(this))}setValue(e){if(rJ(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},oi=()=>new or,or=class{},oo=new WeakMap,on=iF(class extends os{render(e){return si}update(e,[t]){let s=t!==this.Y;return s&&void 0!==this.Y&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.Y=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),si}rt(e){if("function"==typeof this.Y){let t=this.ht??globalThis,s=oo.get(t);void 0===s&&(s=new WeakMap,oo.set(t,s)),void 0!==s.get(this.Y)&&this.Y.call(this.ht,void 0),s.set(this.Y,e),void 0!==e&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){return"function"==typeof this.Y?oo.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),oa=class{constructor(e){this.#d=e=>{let t=e.target;if(!this.host.navigableItems.includes(t))return;let s=!1;if("ArrowDown"===e.key){let e=this.host.navigableItems.indexOf(t)+1,i=this.host.navigableItems[e];i?.focus(),s=!0}else if("ArrowUp"===e.key){let e=this.host.navigableItems.indexOf(t)-1,i=this.host.navigableItems[e];i?.focus(),s=!0}else if("Home"===e.key)this.host.navigableItems[0]?.focus(),s=!0;else if("End"===e.key)this.host.navigableItems[this.host.navigableItems.length-1]?.focus(),s=!0;else{let t=e.key.toLowerCase();if(1!==t.length)return;if(t>="a"&&t<="z"||t>="0"&&t<="9"){let e=this.host.navigableItems.find(e=>{let s=e.textContent?.trim().toLowerCase();return s?.startsWith(t)});e?.focus(),s=!0}}s&&(e.preventDefault(),e.stopPropagation())},(this.host=e).addController(this)}hostConnected(){this.host.addEventListener("keydown",this.#d)}hostDisconnected(){this.host.removeEventListener("keydown",this.#d)}#d};function ol(e){let t=e;for(;t.assignedElements().length>0&&"SLOT"===t.assignedElements()[0].nodeName;)t=t.assignedElements()[0];return t}var od=class extends iB{constructor(){super(),tm(this,h,oi()),new oa(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),iI.instance.apply(this,"gds-listbox")}get navigableItems(){return tv(this,h).value&&ol(tv(this,h).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&"gds-menu-item"===e.gdsElementName)||[]}focus(){this.navigableItems[0]?.focus()}render(){return iU`<slot ${on(tv(this,h))}></slot>`}};h=new WeakMap,od=tf([iO("gds-menu")],od);var oh=Math.min,oc=Math.max,op=Math.round,ou=Math.floor,og=e=>({x:e,y:e}),of={left:"right",right:"left",bottom:"top",top:"bottom"},oy={start:"end",end:"start"};function ov(e,t){return"function"==typeof e?e(t):e}function om(e){return e.split("-")[0]}function ob(e){return e.split("-")[1]}function o_(e){return"y"===e?"height":"width"}function o$(e){return["top","bottom"].includes(om(e))?"y":"x"}function ow(e){return"x"===o$(e)?"y":"x"}function ox(e){return e.replace(/start|end/g,e=>oy[e])}function oA(e){return e.replace(/left|right|bottom|top/g,e=>of[e])}function ok(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function oE(e,t,s){let i,{reference:r,floating:o}=e,n=o$(t),a=ow(t),l=o_(a),d=om(t),h="y"===n,c=r.x+r.width/2-o.width/2,p=r.y+r.height/2-o.height/2,u=r[l]/2-o[l]/2;switch(d){case"top":i={x:c,y:r.y-o.height};break;case"bottom":i={x:c,y:r.y+r.height};break;case"right":i={x:r.x+r.width,y:p};break;case"left":i={x:r.x-o.width,y:p};break;default:i={x:r.x,y:r.y}}switch(ob(t)){case"start":i[a]-=u*(s&&h?-1:1);break;case"end":i[a]+=u*(s&&h?-1:1)}return i}var oS=async(e,t,s)=>{let{placement:i="bottom",strategy:r="absolute",middleware:o=[],platform:n}=s,a=o.filter(Boolean),l=await (null==n.isRTL?void 0:n.isRTL(t)),d=await n.getElementRects({reference:e,floating:t,strategy:r}),{x:h,y:c}=oE(d,i,l),p=i,u={},g=0;for(let s=0;s<a.length;s++){let{name:o,fn:f}=a[s],{x:y,y:v,data:m,reset:b}=await f({x:h,y:c,initialPlacement:i,placement:p,strategy:r,middlewareData:u,rects:d,platform:n,elements:{reference:e,floating:t}});h=null!=y?y:h,c=null!=v?v:c,u={...u,[o]:{...u[o],...m}},b&&g<=50&&(g++,"object"==typeof b&&(b.placement&&(p=b.placement),b.rects&&(d=!0===b.rects?await n.getElementRects({reference:e,floating:t,strategy:r}):b.rects),{x:h,y:c}=oE(d,p,l)),s=-1)}return{x:h,y:c,placement:p,strategy:r,middlewareData:u}};async function oC(e,t){var s;void 0===t&&(t={});let{x:i,y:r,platform:o,rects:n,elements:a,strategy:l}=e,{boundary:d="clippingAncestors",rootBoundary:h="viewport",elementContext:c="floating",altBoundary:p=!1,padding:u=0}=ov(t,e),g="number"!=typeof u?{top:0,right:0,bottom:0,left:0,...u}:{top:u,right:u,bottom:u,left:u},f=a[p?"floating"===c?"reference":"floating":c],y=ok(await o.getClippingRect({element:null==(s=await (null==o.isElement?void 0:o.isElement(f)))||s?f:f.contextElement||await (null==o.getDocumentElement?void 0:o.getDocumentElement(a.floating)),boundary:d,rootBoundary:h,strategy:l})),v="floating"===c?{...n.floating,x:i,y:r}:n.reference,m=await (null==o.getOffsetParent?void 0:o.getOffsetParent(a.floating)),b=await (null==o.isElement?void 0:o.isElement(m))&&await (null==o.getScale?void 0:o.getScale(m))||{x:1,y:1},_=ok(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:v,offsetParent:m,strategy:l}):v);return{top:(y.top-_.top+g.top)/b.y,bottom:(_.bottom-y.bottom+g.bottom)/b.y,left:(y.left-_.left+g.left)/b.x,right:(_.right-y.right+g.right)/b.x}}async function oz(e,t){let{placement:s,platform:i,elements:r}=e,o=await (null==i.isRTL?void 0:i.isRTL(r.floating)),n=om(s),a=ob(s),l="y"===o$(s),d=["left","top"].includes(n)?-1:1,h=o&&l?-1:1,c=ov(t,e),{mainAxis:p,crossAxis:u,alignmentAxis:g}="number"==typeof c?{mainAxis:c,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...c};return a&&"number"==typeof g&&(u="end"===a?-1*g:g),l?{x:u*h,y:p*d}:{x:p*d,y:u*h}}function oM(e){return oD(e)?(e.nodeName||"").toLowerCase():"#document"}function oF(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function oT(e){var t;return null==(t=(oD(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function oD(e){return e instanceof Node||e instanceof oF(e).Node}function oW(e){return e instanceof Element||e instanceof oF(e).Element}function oN(e){return e instanceof HTMLElement||e instanceof oF(e).HTMLElement}function oL(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof oF(e).ShadowRoot)}function oP(e){let{overflow:t,overflowX:s,overflowY:i,display:r}=oB(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+s)&&!["inline","contents"].includes(r)}function oO(e){let t=oH(),s=oB(e);return"none"!==s.transform||"none"!==s.perspective||!!s.containerType&&"normal"!==s.containerType||!t&&!!s.backdropFilter&&"none"!==s.backdropFilter||!t&&!!s.filter&&"none"!==s.filter||["transform","perspective","filter"].some(e=>(s.willChange||"").includes(e))||["paint","layout","strict","content"].some(e=>(s.contain||"").includes(e))}function oR(e){let t=oV(e);for(;oN(t)&&!oU(t);){if(oO(t))return t;t=oV(t)}return null}function oH(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function oU(e){return["html","body","#document"].includes(oM(e))}function oB(e){return oF(e).getComputedStyle(e)}function oI(e){return oW(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function oV(e){if("html"===oM(e))return e;let t=e.assignedSlot||e.parentNode||oL(e)&&e.host||oT(e);return oL(t)?t.host:t}function oj(e,t,s){var i;void 0===t&&(t=[]),void 0===s&&(s=!0);let r=function e(t){let s=oV(t);return oU(s)?t.ownerDocument?t.ownerDocument.body:t.body:oN(s)&&oP(s)?s:e(s)}(e),o=r===(null==(i=e.ownerDocument)?void 0:i.body),n=oF(r);return o?t.concat(n,n.visualViewport||[],oP(r)?r:[],n.frameElement&&s?oj(n.frameElement):[]):t.concat(r,oj(r,[],s))}function oY(e){let t=oB(e),s=parseFloat(t.width)||0,i=parseFloat(t.height)||0,r=oN(e),o=r?e.offsetWidth:s,n=r?e.offsetHeight:i,a=op(s)!==o||op(i)!==n;return a&&(s=o,i=n),{width:s,height:i,$:a}}function oG(e){return oW(e)?e:e.contextElement}function oq(e){let t=oG(e);if(!oN(t))return og(1);let s=t.getBoundingClientRect(),{width:i,height:r,$:o}=oY(t),n=(o?op(s.width):s.width)/i,a=(o?op(s.height):s.height)/r;return n&&Number.isFinite(n)||(n=1),a&&Number.isFinite(a)||(a=1),{x:n,y:a}}var oK=og(0);function oX(e){let t=oF(e);return oH()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:oK}function oZ(e,t,s,i){var r;void 0===t&&(t=!1),void 0===s&&(s=!1);let o=e.getBoundingClientRect(),n=oG(e),a=og(1);t&&(i?oW(i)&&(a=oq(i)):a=oq(e));let l=(void 0===(r=s)&&(r=!1),i&&(!r||i===oF(n))&&r)?oX(n):og(0),d=(o.left+l.x)/a.x,h=(o.top+l.y)/a.y,c=o.width/a.x,p=o.height/a.y;if(n){let e=oF(n),t=i&&oW(i)?oF(i):i,s=e.frameElement;for(;s&&i&&t!==e;){let e=oq(s),t=s.getBoundingClientRect(),i=oB(s),r=t.left+(s.clientLeft+parseFloat(i.paddingLeft))*e.x,o=t.top+(s.clientTop+parseFloat(i.paddingTop))*e.y;d*=e.x,h*=e.y,c*=e.x,p*=e.y,d+=r,h+=o,s=oF(s).frameElement}}return ok({width:c,height:p,x:d,y:h})}var oJ=[":popover-open",":modal"];function oQ(e){let t=!1,s=0,i=0;if(oJ.forEach(s=>{!function(s){try{t=t||e.matches(s)}catch(e){}}(s)}),t){let t=oR(e);if(t){let e=t.getBoundingClientRect();s=e.x,i=e.y}}return[t,s,i]}function o0(e){return oZ(oT(e)).left+oI(e).scrollLeft}function o1(e,t,s){let i;if("viewport"===t)i=function(e,t){let s=oF(e),i=oT(e),r=s.visualViewport,o=i.clientWidth,n=i.clientHeight,a=0,l=0;if(r){o=r.width,n=r.height;let e=oH();(!e||e&&"fixed"===t)&&(a=r.offsetLeft,l=r.offsetTop)}return{width:o,height:n,x:a,y:l}}(e,s);else if("document"===t)i=function(e){let t=oT(e),s=oI(e),i=e.ownerDocument.body,r=oc(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),o=oc(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight),n=-s.scrollLeft+o0(e),a=-s.scrollTop;return"rtl"===oB(i).direction&&(n+=oc(t.clientWidth,i.clientWidth)-r),{width:r,height:o,x:n,y:a}}(oT(e));else if(oW(t))i=function(e,t){let s=oZ(e,!0,"fixed"===t),i=s.top+e.clientTop,r=s.left+e.clientLeft,o=oN(e)?oq(e):og(1),n=e.clientWidth*o.x;return{width:n,height:e.clientHeight*o.y,x:r*o.x,y:i*o.y}}(t,s);else{let s=oX(e);i={...t,x:t.x-s.x,y:t.y-s.y}}return ok(i)}function o2(e,t){return oN(e)&&"fixed"!==oB(e).position?t?t(e):e.offsetParent:null}function o5(e,t){let s=oF(e);if(!oN(e))return s;let i=o2(e,t);for(;i&&["table","td","th"].includes(oM(i))&&"static"===oB(i).position;)i=o2(i,t);return i&&("html"===oM(i)||"body"===oM(i)&&"static"===oB(i).position&&!oO(i))?s:i||oR(e)||s}var o3=async function(e){let t=this.getOffsetParent||o5,s=this.getDimensions;return{reference:function(e,t,s,i){let r=oN(t),o=oT(t),n="fixed"===s,a=oZ(e,!0,n,t),l={scrollLeft:0,scrollTop:0},d=og(0);if(r||!r&&!n){if(("body"!==oM(t)||oP(o))&&(l=oI(t)),r){let e=oZ(t,!0,n,t);d.x=e.x+t.clientLeft,d.y=e.y+t.clientTop}else o&&(d.x=o0(o))}let h=a.left+l.scrollLeft-d.x,c=a.top+l.scrollTop-d.y,[p,u,g]=oQ(i);return p&&(h+=u,c+=g,r&&(h+=t.clientLeft,c+=t.clientTop)),{x:h,y:c,width:a.width,height:a.height}}(e.reference,await t(e.floating),e.strategy,e.floating),floating:{x:0,y:0,...await s(e.floating)}}},o4={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:s,offsetParent:i,strategy:r}=e,o=oT(i),[n]=t?oQ(t.floating):[!1];if(i===o||n)return s;let a={scrollLeft:0,scrollTop:0},l=og(1),d=og(0),h=oN(i);if((h||!h&&"fixed"!==r)&&(("body"!==oM(i)||oP(o))&&(a=oI(i)),oN(i))){let e=oZ(i);l=oq(i),d.x=e.x+i.clientLeft,d.y=e.y+i.clientTop}return{width:s.width*l.x,height:s.height*l.y,x:s.x*l.x-a.scrollLeft*l.x+d.x,y:s.y*l.y-a.scrollTop*l.y+d.y}},getDocumentElement:oT,getClippingRect:function(e){let{element:t,boundary:s,rootBoundary:i,strategy:r}=e,o=[..."clippingAncestors"===s?function(e,t){let s=t.get(e);if(s)return s;let i=oj(e,[],!1).filter(e=>oW(e)&&"body"!==oM(e)),r=null,o="fixed"===oB(e).position,n=o?oV(e):e;for(;oW(n)&&!oU(n);){let t=oB(n),s=oO(n);s||"fixed"!==t.position||(r=null),(o?!s&&!r:!s&&"static"===t.position&&!!r&&["absolute","fixed"].includes(r.position)||oP(n)&&!s&&function e(t,s){let i=oV(t);return!(i===s||!oW(i)||oU(i))&&("fixed"===oB(i).position||e(i,s))}(e,n))?i=i.filter(e=>e!==n):r=t,n=oV(n)}return t.set(e,i),i}(t,this._c):[].concat(s),i],n=o[0],a=o.reduce((e,s)=>{let i=o1(t,s,r);return e.top=oc(i.top,e.top),e.right=oh(i.right,e.right),e.bottom=oh(i.bottom,e.bottom),e.left=oc(i.left,e.left),e},o1(t,n,r));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},getOffsetParent:o5,getElementRects:o3,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){let{width:t,height:s}=oY(e);return{width:t,height:s}},getScale:oq,isElement:oW,isRTL:function(e){return"rtl"===oB(e).direction}},o6=(e,t,s)=>{let i=new Map,r={platform:o4,...s},o={...r.platform,_c:i};return oS(e,t,{...r,platform:o})},o8=sA`
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
`,o9=class extends iB{constructor(){super(...arguments),tm(this,y),tm(this,m),tm(this,_),this.open=!1,this.triggerRef=Promise.resolve(void 0),this.label=void 0,this.placement="bottom-start",this.calcMinWidth=e=>`${e.offsetWidth}px`,this.calcMaxWidth=e=>"auto",this.calcMinHeight=e=>"auto",this.calcMaxHeight=e=>"500px",this._trigger=void 0,this._isVirtKbVisible=!1,tm(this,c,oi()),tm(this,p,void 0),tm(this,u,!1),tm(this,g,e=>{this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:this.open,reason:e},bubbles:!1,composed:!1}))}),tm(this,f,e=>{e.stopPropagation(),e.preventDefault(),this.open=!1,tv(this,g).call(this,"close"),setTimeout(()=>this._trigger?.focus(),250)}),tm(this,w,e=>{"ArrowDown"===e.key&&(e.preventDefault(),this.open=!0,tv(this,g).call(this,"show")),"Escape"===e.key&&(this.open=!1,tv(this,g).call(this,"cancel"))}),tm(this,x,()=>{let e=this.shadowRoot?.querySelector("slot")?.assignedElements()[0];this.updateComplete.then(()=>{e?.focus()})}),tm(this,A,e=>{let t=tv(this,c).value;if((e.clientX>0||e.clientY>0)&&t&&this.open){let s=t.getBoundingClientRect();s.top<=e.clientY&&e.clientY<=s.top+s.height&&s.left<=e.clientX&&e.clientX<=s.left+s.width||(e.stopPropagation(),this.open=!1,tv(this,g).call(this,"close"))}})}_handleTriggerRefChanged(){this.triggerRef.then(e=>{e&&(this._trigger=e)})}_handleTriggerChanged(){t$(this,y,v).call(this),t$(this,_,$).call(this)}connectedCallback(){super.connectedCallback(),iI.instance.apply(this,"gds-popover"),t$(this,y,v).call(this),this._handleOpenChange(),this.addEventListener("keydown",e=>{"Escape"===e.key&&(this.open=!1,tv(this,g).call(this,"cancel"),e.stopPropagation(),e.preventDefault())}),this.addEventListener("focusin",e=>{let t=e.target;"INPUT"===t.tagName||"TEXTAREA"===t.tagName?this._isVirtKbVisible=!0:this._isVirtKbVisible=!1}),this.addEventListener("blurin",e=>{this._isVirtKbVisible=!1})}disconnectedCallback(){super.disconnectedCallback(),t$(this,m,b).call(this)}render(){return s7`<dialog
      class="${iD({"v-kb-visible":this._isVirtKbVisible})}"
      ${on(tv(this,c))}
    >
      <header>
        <h2>${this.label}</h2>
        <button
          class="close"
          @click=${tv(this,f)}
          aria-label="${rl("Close")}"
        >
          <i></i>
        </button>
      </header>
      <slot></slot>
    </dialog>`}_handleOpenChange(){this.setAttribute("aria-hidden",String(!this.open)),this.hidden=!this.open,this.updateComplete.then(()=>{this.open?(tv(this,c).value?.showModal(),tv(this,x).call(this),setTimeout(()=>tv(this,c).value?.addEventListener("click",tv(this,A)),0)):(tv(this,c).value?.close(),tv(this,c).value?.removeEventListener("click",tv(this,A)))})}_handleMobileLayout(e){var t;tb(this,u,e),e?(null==(t=tv(this,p))||t.call(this),tv(this,c).value?.style.removeProperty("left"),tv(this,c).value?.style.removeProperty("top"),tv(this,c).value?.style.removeProperty("minWidth"),this.updateComplete.then(()=>{this.open&&tv(this,c).value?.showModal()})):this.updateComplete.then(()=>{t$(this,_,$).call(this)})}};c=new WeakMap,p=new WeakMap,u=new WeakMap,g=new WeakMap,f=new WeakMap,y=new WeakSet,v=function(){this._trigger?.addEventListener("keydown",tv(this,w))},m=new WeakSet,b=function(){var e;this._trigger?.removeEventListener("keydown",tv(this,w)),null==(e=tv(this,p))||e.call(this)},_=new WeakSet,$=function(){let e=this._trigger,t=tv(this,c).value;!e||!t||tv(this,u)||(tv(this,p)&&tv(this,p).call(this),tb(this,p,function(e,t,s,i){let r;void 0===i&&(i={});let{ancestorScroll:o=!0,ancestorResize:n=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:l="function"==typeof IntersectionObserver,animationFrame:d=!1}=i,h=oG(e),c=o||n?[...h?oj(h):[],...oj(t)]:[];c.forEach(e=>{o&&e.addEventListener("scroll",s,{passive:!0}),n&&e.addEventListener("resize",s)});let p=h&&l?function(e,t){let s,i=null,r=oT(e);function o(){var e;clearTimeout(s),null==(e=i)||e.disconnect(),i=null}return function n(a,l){void 0===a&&(a=!1),void 0===l&&(l=1),o();let{left:d,top:h,width:c,height:p}=e.getBoundingClientRect();if(a||t(),!c||!p)return;let u=ou(h),g=ou(r.clientWidth-(d+c)),f={rootMargin:-u+"px "+-g+"px "+-ou(r.clientHeight-(h+p))+"px "+-ou(d)+"px",threshold:oc(0,oh(1,l))||1},y=!0;function v(e){let t=e[0].intersectionRatio;if(t!==l){if(!y)return n();t?n(!1,t):s=setTimeout(()=>{n(!1,1e-7)},100)}y=!1}try{i=new IntersectionObserver(v,{...f,root:r.ownerDocument})}catch(e){i=new IntersectionObserver(v,f)}i.observe(e)}(!0),o}(h,s):null,u=-1,g=null;a&&(g=new ResizeObserver(e=>{let[i]=e;i&&i.target===h&&g&&(g.unobserve(t),cancelAnimationFrame(u),u=requestAnimationFrame(()=>{var e;null==(e=g)||e.observe(t)})),s()}),h&&!d&&g.observe(h),g.observe(t));let f=d?oZ(e):null;return d&&function t(){let i=oZ(e);f&&(i.x!==f.x||i.y!==f.y||i.width!==f.width||i.height!==f.height)&&s(),f=i,r=requestAnimationFrame(t)}(),s(),()=>{var e;c.forEach(e=>{o&&e.removeEventListener("scroll",s),n&&e.removeEventListener("resize",s)}),null==p||p(),null==(e=g)||e.disconnect(),g=null,d&&cancelAnimationFrame(r)}}(e,t,()=>{var s;o6(e,t,{placement:this.placement,middleware:[{name:"offset",options:8,async fn(e){var t,s;let{x:i,y:r,placement:o,middlewareData:n}=e,a=await oz(e,8);return o===(null==(t=n.offset)?void 0:t.placement)&&null!=(s=n.arrow)&&s.alignmentOffset?{}:{x:i+a.x,y:r+a.y,data:{...a,placement:o}}}},(void 0===s&&(s={}),{name:"flip",options:s,async fn(e){var t,i,r,o,n;let{placement:a,middlewareData:l,rects:d,initialPlacement:h,platform:c,elements:p}=e,{mainAxis:u=!0,crossAxis:g=!0,fallbackPlacements:f,fallbackStrategy:y="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:m=!0,...b}=ov(s,e);if(null!=(t=l.arrow)&&t.alignmentOffset)return{};let _=om(a),$=om(h)===h,w=await (null==c.isRTL?void 0:c.isRTL(p.floating)),x=f||($||!m?[oA(h)]:function(e){let t=oA(e);return[ox(e),t,ox(t)]}(h));f||"none"===v||x.push(...function(e,t,s,i){let r=ob(e),o=function(e,t,s){let i=["left","right"],r=["right","left"];switch(e){case"top":case"bottom":if(s)return t?r:i;return t?i:r;case"left":case"right":return t?["top","bottom"]:["bottom","top"];default:return[]}}(om(e),"start"===s,i);return r&&(o=o.map(e=>e+"-"+r),t&&(o=o.concat(o.map(ox)))),o}(h,m,v,w));let A=[h,...x],k=await oC(e,b),E=[],S=(null==(i=l.flip)?void 0:i.overflows)||[];if(u&&E.push(k[_]),g){let e=function(e,t,s){void 0===s&&(s=!1);let i=ob(e),r=ow(e),o=o_(r),n="x"===r?i===(s?"end":"start")?"right":"left":"start"===i?"bottom":"top";return t.reference[o]>t.floating[o]&&(n=oA(n)),[n,oA(n)]}(a,d,w);E.push(k[e[0]],k[e[1]])}if(S=[...S,{placement:a,overflows:E}],!E.every(e=>e<=0)){let e=((null==(r=l.flip)?void 0:r.index)||0)+1,t=A[e];if(t)return{data:{index:e,overflows:S},reset:{placement:t}};let s=null==(o=S.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:o.placement;if(!s)switch(y){case"bestFit":{let e=null==(n=S.map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:n[0];e&&(s=e);break}case"initialPlacement":s=h}if(a!==s)return{reset:{placement:s}}}return{}}})],strategy:"fixed"}).then(({x:s,y:i})=>Object.assign(t.style,{left:`${s}px`,top:`${i}px`,minWidth:this.calcMinWidth(e),maxWidth:this.calcMaxWidth(e),minHeight:this.calcMinHeight(e),maxHeight:this.calcMaxHeight(e)}))})))},w=new WeakMap,x=new WeakMap,A=new WeakMap,o9.styles=sx(o8),tf([iA({type:Boolean,reflect:!0})],o9.prototype,"open",2),tf([iA()],o9.prototype,"triggerRef",2),tf([iA()],o9.prototype,"label",2),tf([iA()],o9.prototype,"placement",2),tf([iA()],o9.prototype,"calcMinWidth",2),tf([iA()],o9.prototype,"calcMaxWidth",2),tf([iA()],o9.prototype,"calcMinHeight",2),tf([iA()],o9.prototype,"calcMaxHeight",2),tf([ik()],o9.prototype,"_trigger",2),tf([ik()],o9.prototype,"_isVirtKbVisible",2),tf([ij("triggerRef")],o9.prototype,"_handleTriggerRefChanged",1),tf([ij("_trigger")],o9.prototype,"_handleTriggerChanged",1),tf([ij("open")],o9.prototype,"_handleOpenChange",1),tf([(e,t,s)=>{let i=window.matchMedia("(max-width: 576px)"),r=e.connectedCallback,o=e.disconnectedCallback;e.connectedCallback=function(){r?.call(this);let e=e=>{s.value?.call(this,e.matches)};i.addEventListener("change",e),this.disconnectedCallback=function(){o?.call(this),i.removeEventListener("change",e)},s.value?.call(this,i.matches)}}],o9.prototype,"_handleMobileLayout",1),o9=tf([iO("gds-popover")],o9);var o7=class extends iB{constructor(){super(),tm(this,k),this.open=!1,this.buttonLabel=rl("Open context menu"),this.showLabel=!1,this.label="",this.placement="bottom-start",iZ(this)}connectedCallback(){super.connectedCallback(),iI.instance.apply(this,"gds-context-menu"),this.addEventListener("keydown",e=>{this.open&&"Tab"==e.key&&(e.preventDefault(),this.open=!1,this.elTriggerBtn.then(e=>e.focus()))})}render(){return iU`<button
        id="trigger"
        class="icon border-0 small ${rq({highlighted:this.open})}"
        aria-label=${this.buttonLabel??this.label}
        aria-haspopup="menu"
        aria-controls="menu"
        aria-expanded=${this.open}
        @click=${()=>this.open=!this.open}
      >
        <slot name="trigger">
          ${this.showLabel?this.buttonLabel??this.label:it}
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
          @gds-menu-item-click=${t$(this,k,E)}
        >
          <slot allow="gds-menu-item gds-menu-heading"></slot>
        </gds-menu>
      </gds-popover>`}};k=new WeakSet,E=function(){this.open=!1},o7.styles=[rK],o7.shadowRootOptions={mode:"open",delegatesFocus:!0},tf([iA({type:Boolean,reflect:!0})],o7.prototype,"open",2),tf([iA({attribute:"button-label"})],o7.prototype,"buttonLabel",2),tf([iA({attribute:"show-label",type:Boolean})],o7.prototype,"showLabel",2),tf([iA()],o7.prototype,"label",2),tf([iA()],o7.prototype,"placement",2),tf([iC("#trigger")],o7.prototype,"elTriggerBtn",2),o7=tf([iO("gds-context-menu")],o7);var ne=class{constructor(e){this.Y=e}disconnect(){this.Y=void 0}reconnect(e){this.Y=e}deref(){return this.Y}},nt=class{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??=new Promise(e=>this.q=e)}resume(){this.q?.(),this.Z=this.q=void 0}},ns=e=>!rZ(e)&&"function"==typeof e.then,ni=iF(class extends os{constructor(){super(...arguments),this._$Cwt=1073741823,this._$Cbt=[],this._$CK=new ne(this),this._$CX=new nt}render(...e){return e.find(e=>!ns(e))??ss}update(e,t){let s=this._$Cbt,i=s.length;this._$Cbt=t;let r=this._$CK,o=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){let n=t[e];if(!ns(n))return this._$Cwt=e,n;e<i&&n===s[e]||(this._$Cwt=1073741823,i=0,Promise.resolve(n).then(async e=>{for(;o.get();)await o.get();let t=r.deref();if(void 0!==t){let s=t._$Cbt.indexOf(n);s>-1&&s<t._$Cwt&&(t._$Cwt=s,t.setValue(e))}}))}return ss}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}),nr=(e,t,s)=>{let i=new Map;for(let r=t;r<=s;r++)i.set(e[r],r);return i},no=iF(class extends iT{constructor(e){if(super(e),e.type!==iM.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,s){let i;void 0===s?s=t:void 0!==t&&(i=t);let r=[],o=[],n=0;for(let t of e)r[n]=i?i(t,n):n,o[n]=s(t,n),n++;return{values:o,keys:r}}render(e,t,s){return this.dt(e,t,s).values}update(e,[t,s,i]){let r=r3(e),{values:o,keys:n}=this.dt(t,s,i);if(!Array.isArray(r))return this.ut=n,o;let a=this.ut??=[],l=[],d,h,c=0,p=r.length-1,u=0,g=o.length-1;for(;c<=p&&u<=g;)if(null===r[c])c++;else if(null===r[p])p--;else if(a[c]===n[u])l[u]=r1(r[c],o[u]),c++,u++;else if(a[p]===n[g])l[g]=r1(r[p],o[g]),p--,g--;else if(a[c]===n[g])l[g]=r1(r[c],o[g]),r0(e,l[g+1],r[c]),c++,g--;else if(a[p]===n[u])l[u]=r1(r[p],o[u]),r0(e,r[c],r[p]),p--,u++;else if(void 0===d&&(d=nr(n,u,g),h=nr(a,c,p)),d.has(a[c])){if(d.has(a[p])){let t=h.get(n[u]),s=void 0!==t?r[t]:null;if(null===s){let t=r0(e,r[c]);r1(t,o[u]),l[u]=t}else l[u]=r1(s,o[u]),r0(e,r[c],s),r[t]=null;u++}else r4(r[p]),p--}else r4(r[c]),c++;for(;u<=g;){let t=r0(e,l[g+1]);r1(t,o[u]),l[u++]=t}for(;c<=p;){let e=r[c++];null!==e&&r4(e)}return this.ut=n,r5(e,l),ss}}),nn={fromAttribute:e=>new Date(e),toAttribute:e=>e.toISOString()};function na(e){return(na="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function nl(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function nd(e,t){if(t.length<e)throw TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function nh(e){nd(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===na(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):(("string"==typeof e||"[object String]"===t)&&"undefined"!=typeof console&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(Error().stack)),new Date(NaN))}function nc(e,t){nd(2,arguments);var s=nh(e),i=nl(t);return isNaN(i)?new Date(NaN):(i&&s.setDate(s.getDate()+i),s)}function np(e,t){nd(2,arguments);var s=nh(e),i=nl(t);if(isNaN(i))return new Date(NaN);if(!i)return s;var r=s.getDate(),o=new Date(s.getTime());return(o.setMonth(s.getMonth()+i+1,0),r>=o.getDate())?o:(s.setFullYear(o.getFullYear(),o.getMonth(),r),s)}var nu={};function ng(e,t){nd(1,arguments);var s,i,r,o,n,a,l,d,h=nl(null!==(s=null!==(i=null!==(r=null!==(o=null==t?void 0:t.weekStartsOn)&&void 0!==o?o:null==t?void 0:null===(n=t.locale)||void 0===n?void 0:null===(a=n.options)||void 0===a?void 0:a.weekStartsOn)&&void 0!==r?r:nu.weekStartsOn)&&void 0!==i?i:null===(l=nu.locale)||void 0===l?void 0:null===(d=l.options)||void 0===d?void 0:d.weekStartsOn)&&void 0!==s?s:0);if(!(h>=0&&h<=6))throw RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=nh(e),p=c.getDay();return c.setDate(c.getDate()-((p<h?7:0)+p-h)),c.setHours(0,0,0,0),c}function nf(e){nd(1,arguments);var t=nh(e);return t.setHours(0,0,0,0),t}function ny(e,t){nd(2,arguments);var s=nf(e),i=nf(t);return s.getTime()===i.getTime()}var nv=sA`
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
`,nm=class extends iB{constructor(){super(...arguments),tm(this,S),tm(this,z),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.focusedDate=new Date,this.disabledWeekends=!1,this.showWeekNumbers=!1}get focusedMonth(){return this.focusedDate.getMonth()}set focusedMonth(e){let t=new Date(this.focusedDate);t.setMonth(e),t.setHours(0,0,0,0),this.focusedDate=t}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(e){this.focusedDate=new Date(this.focusedDate.setFullYear(e))}getDateCell(e){return this.shadowRoot?.querySelector(`#dateCell-${e}`)}connectedCallback(){super.connectedCallback(),iI.instance.apply(this,"gds-calendar"),this.addEventListener("keydown",t$(this,z,M))}focus(){super.focus(),this._elFocusedCell?.focus()}render(){let e=new Date;return s7`<table>
      <thead>
        <tr>
          ${iz(this.showWeekNumbers,()=>s7`<th></th>`)}
          <th>${rl("Mon")}</th>
          <th>${rl("Tue")}</th>
          <th>${rl("Wed")}</th>
          <th>${rl("Thu")}</th>
          <th>${rl("Fri")}</th>
          <th>${rl("Sat")}</th>
          <th>${rl("Sun")}</th>
        </tr>
      </thead>
      <tbody>
        ${function(e,t){let s=function(e,t){nd(1,arguments);var s=e||{},i=nh(s.start),r=nh(s.end),o=r.getTime();if(!(i.getTime()<=o))throw RangeError("Invalid interval");var n=ng(i,t),a=ng(r,t);n.setHours(15),a.setHours(15),o=a.getTime();for(var l=[],d=n;d.getTime()<=o;)d.setHours(0),l.push(nh(d)),(d=function(e,t){return nd(2,arguments),nc(e,7*nl(1))}(d,1)).setHours(15);return l}({start:function(e){nd(1,arguments);var t=nh(e);return t.setDate(1),t.setHours(0,0,0,0),t}(e),end:function(e){nd(1,arguments);var t=nh(e),s=t.getMonth();return t.setFullYear(t.getFullYear(),s+1,0),t.setHours(23,59,59,999),t}(e)},{weekStartsOn:1});return rM`${t(s.map(e=>({days:function(e,t){nd(1,arguments);var s,i=e||{},r=nh(i.start),o=nh(i.end).getTime();if(!(r.getTime()<=o))throw RangeError("Invalid interval");var n=[];r.setHours(0,0,0,0);var a=Number(null!==(s=null==t?void 0:t.step)&&void 0!==s?s:1);if(a<1||isNaN(a))throw RangeError("`options.step` must be a number greater than 1");for(;r.getTime()<=o;)n.push(nh(r)),r.setDate(r.getDate()+a),r.setHours(0,0,0,0);return n}({start:e,end:nc(e,6)})})))}`}(this.focusedDate,t=>s7`
            ${t.map(t=>s7`
                <tr>
                  ${iz(this.showWeekNumbers,()=>s7`<td class="week-number">
                        ${(function(e,t){nd(1,arguments);var s=nh(e);return Math.round((ng(s,t).getTime()-(function(e,t){nd(1,arguments);var s,i,r,o,n,a,l,d,h=nl(null!==(s=null!==(i=null!==(r=null!==(o=null==t?void 0:t.firstWeekContainsDate)&&void 0!==o?o:null==t?void 0:null===(n=t.locale)||void 0===n?void 0:null===(a=n.options)||void 0===a?void 0:a.firstWeekContainsDate)&&void 0!==r?r:nu.firstWeekContainsDate)&&void 0!==i?i:null===(l=nu.locale)||void 0===l?void 0:null===(d=l.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==s?s:1),c=function(e,t){nd(1,arguments);var s,i,r,o,n,a,l,d,h=nh(e),c=h.getFullYear(),p=nl(null!==(s=null!==(i=null!==(r=null!==(o=null==t?void 0:t.firstWeekContainsDate)&&void 0!==o?o:null==t?void 0:null===(n=t.locale)||void 0===n?void 0:null===(a=n.options)||void 0===a?void 0:a.firstWeekContainsDate)&&void 0!==r?r:nu.firstWeekContainsDate)&&void 0!==i?i:null===(l=nu.locale)||void 0===l?void 0:null===(d=l.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==s?s:1);if(!(p>=1&&p<=7))throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var u=new Date(0);u.setFullYear(c+1,0,p),u.setHours(0,0,0,0);var g=ng(u,t),f=new Date(0);f.setFullYear(c,0,p),f.setHours(0,0,0,0);var y=ng(f,t);return h.getTime()>=g.getTime()?c+1:h.getTime()>=y.getTime()?c:c-1}(e,t),p=new Date(0);return p.setFullYear(c,0,h),p.setHours(0,0,0,0),ng(p,t)})(s,t).getTime())/6048e5)+1})(t.days[0])}
                      </td>`)}
                  ${t.days.map(t=>{let s={color:"currentColor",disabled:!!(this.disabledDates&&this.disabledDates.some(e=>ny(e,t))),...this.customizedDates&&this.customizedDates.find(e=>ny(e.date,t))},i=!function(e,t){nd(2,arguments);var s=nh(e),i=nh(t);return s.getFullYear()===i.getFullYear()&&s.getMonth()===i.getMonth()}(this.focusedDate,t)||t<this.min||t>this.max,r=0===t.getDay()||6===t.getDay(),o=s.disabled||i||this.disabledWeekends&&r;return s7`
                      <td
                        class="${iD({"custom-date":!!s,disabled:!!o,today:ny(e,t)})}"
                        ?disabled=${o}
                        tabindex="${ny(this.focusedDate,t)?0:-1}"
                        aria-selected="${this.value&&ny(this.value,t)}"
                        aria-label="${t.toDateString()}"
                        @click=${()=>o?null:t$(this,S,C).call(this,t)}
                        id="dateCell-${t.getDate()}"
                      >
                        <span
                          style="color: ${s?s?.color:""}"
                          >${t.getDate()}</span
                        >

                        ${iz(s.indicator,()=>s7`<span
                              class="indicator_${s?.indicator}"
                              style="background-color: ${s?.color}"
                            ></span>`)}
                      </td>
                    `})}
                </tr>
              `)}
          `)}
      </tbody>
    </table>`}_valueChanged(){this.value&&(this.focusedDate=this.value)}};S=new WeakSet,C=function(e){this.value=e,this.dispatchEvent(new CustomEvent("change",{detail:e,bubbles:!1,composed:!1}))},z=new WeakSet,M=function(e){let t=!1,s=new Date(this.focusedDate);"ArrowLeft"===e.key?(s=nc(this.focusedDate,-1),t=!0):"ArrowRight"===e.key?(s=nc(this.focusedDate,1),t=!0):"ArrowUp"===e.key?(s=nc(this.focusedDate,-7),t=!0):"ArrowDown"===e.key?(s=nc(this.focusedDate,7),t=!0):"Enter"===e.key||" "===e.key?(this._elFocusedCell?.hasAttribute("disabled")||t$(this,S,C).call(this,this.focusedDate),t=!0):"Home"===e.key?(s=new Date(this.focusedYear,this.focusedMonth,1),t=!0):"End"===e.key?(s=new Date(this.focusedYear,this.focusedMonth+1,0),t=!0):"PageUp"===e.key?(s=function(e,t){return nd(2,arguments),np(e,-nl(1))}(this.focusedDate,1),t=!0):"PageDown"===e.key&&(s=np(this.focusedDate,1),t=!0),s.getFullYear()>=this.min.getFullYear()&&s.getFullYear()<=this.max.getFullYear()&&(this.focusedDate=s),t&&(e.preventDefault(),e.stopPropagation(),this.updateComplete.then(()=>{this._elFocusedCell?.focus(),this.dispatchEvent(new CustomEvent("gds-date-focused",{detail:this.focusedDate,bubbles:!1,composed:!1}))}))},nm.styles=[nv],nm.shadowRootOptions={mode:"open",delegatesFocus:!0},tf([iA()],nm.prototype,"value",2),tf([iA({type:Date})],nm.prototype,"min",2),tf([iA({type:Date})],nm.prototype,"max",2),tf([iA()],nm.prototype,"focusedDate",2),tf([iA({type:Boolean,attribute:"disabled-weekends"})],nm.prototype,"disabledWeekends",2),tf([iA({type:Array,attribute:"disabled-dates"})],nm.prototype,"disabledDates",2),tf([iA({type:Number})],nm.prototype,"focusedMonth",1),tf([iA({type:Number})],nm.prototype,"focusedYear",1),tf([iA({type:Boolean})],nm.prototype,"showWeekNumbers",2),tf([iA({attribute:!1})],nm.prototype,"customizedDates",2),tf([iS('td[tabindex="0"]')],nm.prototype,"_elFocusedCell",2),tf([ij("value")],nm.prototype,"_valueChanged",1),nm=tf([iO("gds-calendar")],nm);var nb=class extends iT{constructor(e){if(super(e),this.it=si,e.type!==iM.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===si||null==e)return this._t=void 0,this.it=e;if(e===ss)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};nb.directiveName="unsafeHTML",nb.resultType=1;var n_=iF(nb),n$=e=>e??si,nw=sA`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
    }
  }
`,nx=class extends iB{constructor(){super(),this.multiple=!1,this.compareWith=(e,t)=>e===t,tm(this,F,oi()),tm(this,T,e=>{let t=e.target;this.multiple?t.selected=!t.selected:(t.selected=!0,Array.from(this.options).forEach(e=>{e!==t&&(e.selected=!1)})),this.ariaActiveDescendantElement=t,this.dispatchEvent(new CustomEvent("change",{bubbles:!1,composed:!1}))}),new oa(this)}get navigableItems(){return this.visibleOptionElements}get options(){return tv(this,F).value&&ol(tv(this,F).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&"gds-option"===e.gdsElementName)||[]}get visibleOptionElements(){return this.options.filter(e=>!e.hidden)}get visibleSelectedOptionElements(){return this.options.filter(e=>e.selected&&!e.hidden)}get selection(){return this.options.filter(e=>e.selected)}set selection(e){this.options.forEach(t=>{t.selected=e.some(e=>this.compareWith(e,t.value))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),iI.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",tv(this,T))}focus(){(this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])?.focus()}render(){return iU`<slot ${on(tv(this,F))}></slot>`}_rerenderOptions(){this.options.forEach(e=>{e.requestUpdate()})}};F=new WeakMap,T=new WeakMap,nx.styles=nw,tf([iA({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:e=>e.toString()}})],nx.prototype,"multiple",2),tf([iA()],nx.prototype,"compareWith",2),tf([ij("multiple")],nx.prototype,"_rerenderOptions",1),nx=tf([iO("gds-listbox")],nx);var nA=sA`
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
`,nk=class extends i8{constructor(){super(),tm(this,O),tm(this,H),tm(this,B),this.label="",this.open=!1,this.searchable=!1,this.multiple=!1,this.compareWith=(e,t)=>e===t,this.searchFilter=(e,t)=>t.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,tm(this,D,void 0),tm(this,W,e=>{let t=this._elSearchInput,s=Array.from(tv(this,D));s.forEach(e=>e.hidden=!1),t.value&&s.filter(e=>!this.searchFilter(t.value,e)).forEach(e=>e.hidden=!0)}),tm(this,N,e=>{this._elListbox?.then(t=>{if("ArrowDown"===e.key||"Tab"===e.key){e.preventDefault(),t.focus();return}})}),tm(this,L,e=>{if("Tab"===e.key&&this.searchable){e.preventDefault(),this._elSearchInput?.focus();return}}),tm(this,P,e=>{let t=this._elTriggerBtn;t&&(t.ariaActiveDescendantElement=e.target)}),tm(this,V,e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&(this.open=!1)}),tm(this,j,e=>{"Tab"!==e.key||this.searchable||(e.preventDefault(),this.open=!1,this._elTriggerBtn?.focus())}),iZ(this),ro(this),tb(this,D,this.getElementsByTagName(function(e){return iP.get(e)??e}("gds-option")))}get type(){return"gds-dropdown"}get options(){return Array.from(tv(this,D)).filter(e=>!e.hasAttribute("isplaceholder"))}get placeholder(){return Array.from(tv(this,D)).find(e=>e.hasAttribute("isplaceholder"))}get displayValue(){return(Array.isArray(this.value)?this.value.length>2?rl(re`${this.value.length} selected`):this.value.reduce((e,t)=>e+this.options.find(e=>e.value===t)?.innerHTML+", ","").slice(0,-2):this.options.find(e=>e.selected)?.innerHTML)||this.placeholder?.innerHTML||""}connectedCallback(){super.connectedCallback(),iI.instance.apply(this,"gds-dropdown"),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleValueChange()})}render(){return iU`
      ${iz(this.label&&!this.hideLabel,()=>iU`<label for="trigger">${this.label}</label>`)}

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
        class=${iD({small:"small"===this.size})}
      >
        <slot name="trigger">
          <span>${n_(this.displayValue)}</span>
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
        ${iz(this.searchable,()=>iU`<input
              id="searchinput"
              type="text"
              aria-label="${rl("Filter available options")}"
              placeholder="${rl("Search")}"
              @keydown=${tv(this,N)}
              @keyup=${tv(this,W)}
            />`)}

        <gds-listbox
          id="listbox"
          .multiple="${n$(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${t$(this,O,R)}"
          @gds-focus="${tv(this,P)}"
          @keydown=${tv(this,L)}
        >
          <slot gds-allow="gds-option gds-menu-heading"></slot>
        </gds-listbox>
      </gds-popover>
    `}_handleLightDOMChange(){if(this.requestUpdate(),this.multiple){this._handleValueChange();return}void 0===this.value?this.placeholder?this.value=this.placeholder.value:this.value=this.options[0]?.value:this.placeholder||void 0!==this.options.find(e=>this.compareWith(e.value,this.value))||(this.options[0]&&(this.options[0].selected=!0),this.value=this.options[0]?.value)}_handleValueChange(){this._elListbox.then(e=>{e&&(Array.isArray(this.value)?e.selection=this.value:e.selection=[this.value])})}_onOpenChange(){let e=this.open;Array.from(tv(this,D)).forEach(t=>t.hidden=!e),e?t$(this,H,U).call(this):(t$(this,B,I).call(this),this._elSearchInput&&(this._elSearchInput.value="")),this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:e},bubbles:!0,composed:!0}))}};D=new WeakMap,W=new WeakMap,N=new WeakMap,L=new WeakMap,P=new WeakMap,O=new WeakSet,R=function(){this._elListbox.then(e=>{this.multiple?this.value=e.selection.map(e=>e.value):(this.value=e.selection[0]?.value,this.open=!1,setTimeout(()=>this._elTriggerBtn?.focus(),0)),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))})},H=new WeakSet,U=function(){this.addEventListener("blur",tv(this,V)),this.addEventListener("gds-blur",tv(this,V)),this.addEventListener("keydown",tv(this,j))},B=new WeakSet,I=function(){this.removeEventListener("blur",tv(this,V)),this.removeEventListener("gds-blur",tv(this,V)),this.removeEventListener("keydown",tv(this,j))},V=new WeakMap,j=new WeakMap,nk.styles=nA,nk.shadowRootOptions={mode:"open",delegatesFocus:!0},tf([iA()],nk.prototype,"label",2),tf([iA({type:Boolean,reflect:!0})],nk.prototype,"open",2),tf([iA({type:Boolean,reflect:!0})],nk.prototype,"searchable",2),tf([iA({type:Boolean,reflect:!0})],nk.prototype,"multiple",2),tf([iA()],nk.prototype,"compareWith",2),tf([iA()],nk.prototype,"searchFilter",2),tf([iA({type:Boolean,attribute:"sync-popover-width"})],nk.prototype,"syncPopoverWidth",2),tf([iA({type:Number,attribute:"max-height"})],nk.prototype,"maxHeight",2),tf([iA()],nk.prototype,"size",2),tf([iA({type:Boolean,attribute:"hide-label"})],nk.prototype,"hideLabel",2),tf([iS("#trigger")],nk.prototype,"_elTriggerBtn",2),tf([iC("#trigger")],nk.prototype,"_elTriggerBtnAsync",2),tf([iC("#listbox")],nk.prototype,"_elListbox",2),tf([iS("#searchinput")],nk.prototype,"_elSearchInput",2),tf([function(e={attributes:!0,childList:!0,subtree:!1,characterData:!0}){return(t,s,i)=>{let r;let o=t.connectedCallback,n=t.disconnectedCallback;t.connectedCallback=function(){o?.call(this),(r=new MutationObserver((e,t)=>{i.value?.call(this)})).observe(this,e)},t.disconnectedCallback=function(){n?.call(this),r.disconnect()}}}({attributes:!0,childList:!0,subtree:!0,characterData:!0})],nk.prototype,"_handleLightDOMChange",1),tf([ij("value")],nk.prototype,"_handleValueChange",1),tf([ij("open")],nk.prototype,"_onOpenChange",1),nk=tf([iO("gds-dropdown")],nk);var nE=class extends ib{constructor(){super(...arguments),tm(this,ee),tm(this,es),tm(this,er),tm(this,en),tm(this,el),this.value=0,this.length=2,this.min=0,this.max=Number.MAX_SAFE_INTEGER,this.displayValue=t$(this,er,eo).call(this,this.value,this.length),tm(this,Y,""),tm(this,G,()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=2===this.length?this.min:new Date().getFullYear()-1),this.value=t$(this,en,ea).call(this,e+1),t$(this,es,ei).call(this)}),tm(this,q,()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=2===this.length?this.max:new Date().getFullYear()+1),this.value=t$(this,en,ea).call(this,e-1),t$(this,es,ei).call(this)}),tm(this,K,e=>{e.stopPropagation(),e.preventDefault(),this.focus()}),tm(this,X,()=>{t$(this,el,ed).call(this)}),tm(this,Z,()=>{""!==tv(this,Y)&&(t$(this,el,ed).call(this),this.value=t$(this,en,ea).call(this,parseInt(this.value.toString())),t$(this,es,ei).call(this))}),tm(this,J,e=>{e.stopPropagation(),e.preventDefault(),e.deltaY>0?tv(this,q).call(this):tv(this,G).call(this)}),tm(this,Q,e=>{let t=!1;if("ArrowUp"===e.key)tv(this,G).call(this),t=!0;else if("ArrowDown"===e.key)tv(this,q).call(this),t=!0;else{let s=parseInt(e.key);isNaN(s)||(tv(this,Y).length<this.length&&(tb(this,Y,tv(this,Y)+s.toString()),this.value=parseInt(tv(this,Y))),tv(this,Y).length===this.length&&(this.value=t$(this,en,ea).call(this,this.value),t$(this,el,ed).call(this),t$(this,ee,et).call(this),t$(this,es,ei).call(this)),t=!0)}t&&(e.preventDefault(),e.stopPropagation())})}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.setAttribute("role","spinbutton"),this.setAttribute("tabindex","0"),this.addEventListener("wheel",tv(this,J)),this.addEventListener("keydown",tv(this,Q)),this.addEventListener("blur",tv(this,Z)),this.addEventListener("focus",tv(this,X)),this.addEventListener("click",tv(this,K)),this.addEventListener("mousedown",tv(this,K))}focus(e){super.focus(e),tv(this,X).call(this)}render(){return iU`${this.displayValue}`}_refreshDisplayValue(){this.displayValue=t$(this,er,eo).call(this,this.value,this.length),this.setAttribute("aria-valuetext",this.value.toString())}};Y=new WeakMap,G=new WeakMap,q=new WeakMap,K=new WeakMap,X=new WeakMap,Z=new WeakMap,J=new WeakMap,Q=new WeakMap,ee=new WeakSet,et=function(){let e=this.nextElementSibling;for(;e;){if(e instanceof nE){e.focus();break}e=e.nextElementSibling}},es=new WeakSet,ei=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value.toString()}}))},er=new WeakSet,eo=function(e,t){return String(e).padStart(t,"0")},en=new WeakSet,ea=function(e){return Math.max(this.min,Math.min(this.max,e))},el=new WeakSet,ed=function(){tb(this,Y,"")},nE.formAssociated=!0,tf([iA({type:Number})],nE.prototype,"value",2),tf([iA({type:Number})],nE.prototype,"length",2),tf([iA({type:Number,attribute:"aria-valuemin"})],nE.prototype,"min",2),tf([iA({type:Number,attribute:"aria-valuemax"})],nE.prototype,"max",2),tf([ik()],nE.prototype,"displayValue",2),tf([ij("value")],nE.prototype,"_refreshDisplayValue",1),nE=tf([iO("gds-date-part-spinner")],nE);var nS=sA`
  @layer base, reset, transitional-styles;
  @layer base {
    label {
      display: block;
    }
  }
`,nC=class extends i8{constructor(){super(...arguments),tm(this,ec),tm(this,eu),tm(this,ef),tm(this,ev),tm(this,eb),tm(this,e$),tm(this,ex),tm(this,eO),tm(this,eB),tm(this,eV),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.open=!1,this.label="",this.showWeekNumbers=!1,this.size="medium",this.hideLabel=!1,this.disabledWeekends=!1,this._focusedMonth=new Date().getMonth(),this._focusedYear=new Date().getFullYear(),this._dateFormatLayout=t$(this,eO,eR).call(this,"y-m-d"),tm(this,eh,void 0),tm(this,ek,e=>{this._elTrigger.then(t=>{e.relatedTarget?.parentElement!==e.target&&document.getSelection()?.removeAllRanges()})}),tm(this,eE,e=>{this._elTrigger.then(e=>{document.getSelection()?.removeAllRanges();let t=new Range;t.setStart(e.firstChild,0),t.setEnd(e.lastChild,4),document.getSelection()?.addRange(t)})}),tm(this,eS,e=>{this._elTrigger.then(t=>{e.currentTarget===t&&(e.preventDefault(),e.clipboardData?.setData("text/plain",this.displayValue))})}),tm(this,eC,e=>{this._elTrigger.then(t=>{if(e.currentTarget!==t)return;e.preventDefault();let s=e.clipboardData?.getData("text/plain");if(!s)return;let i=new Date(s);"Invalid Date"!==i.toString()&&(this.value=i,t$(this,e$,ew).call(this))})}),tm(this,ez,e=>{this._elSpinners[0]?.focus()}),tm(this,eM,e=>{e.stopPropagation(),this.value=e.detail,this.open=!1,t$(this,e$,ew).call(this)}),tm(this,eF,e=>{e.stopPropagation(),this._focusedMonth=e.target?.value}),tm(this,eT,e=>{e.stopPropagation(),this._focusedYear=e.target?.value}),tm(this,eD,e=>{this._focusedMonth++,this._focusedMonth>11&&(this._focusedMonth=0,this._focusedYear++)}),tm(this,eW,e=>{this._focusedMonth--,this._focusedMonth<0&&(this._focusedMonth=11,this._focusedYear--)}),tm(this,eN,async()=>{this._focusedMonth=(await this._elCalendar).focusedMonth,this._focusedYear=(await this._elCalendar).focusedYear,this.value=(await this._elCalendar).focusedDate,this.requestUpdate(),t$(this,ex,eA).call(this)}),tm(this,eL,async e=>{e.target===e.currentTarget&&(this.open=e.detail.open,"close"===e.detail.reason&&(this.value=(await this._elCalendar).value,this.value&&(this._focusedMonth=this.value.getMonth(),this._focusedYear=this.value.getFullYear()),t$(this,e$,ew).call(this)),"cancel"===e.detail.reason&&(this.value=tv(this,eh)))}),tm(this,eP,e=>{let t=Array.from(this._elSpinners).findIndex(t=>t===e.target);if("ArrowRight"===e.key){let e=this._elSpinners[t+1];e&&e.focus()}if("ArrowLeft"===e.key){let e=this._elSpinners[t-1];e&&e.focus()}}),tm(this,eH,(e,t)=>{tv(this,eU)[t]=e;let s=new Date;s.setFullYear(parseInt(tv(this,eU).year)),s.setMonth(parseInt(tv(this,eU).month)-1),s.setDate(parseInt(tv(this,eU).day)),"Invalid Date"!==s.toString()&&(this.value=s,t$(this,e$,ew).call(this))}),tm(this,eU,{year:"yyyy",month:"mm",day:"dd"})}get type(){return"gds-datepicker"}get dateformat(){return this._dateFormatLayout.layout.map(e=>e.token).join(this._dateFormatLayout.delimiter)}set dateformat(e){this._dateFormatLayout=t$(this,eO,eR).call(this,e)}async getFocusedDate(){return this.open?this._elCalendar.then(e=>e.focusedDate):void 0}get displayValue(){return this._elInput.innerText.replace(/\s+/g,"")}async test_getDateCell(e){return this._elCalendar.then(t=>t.getDateCell(e))}connectedCallback(){super.connectedCallback(),iI.instance.apply(this,"gds-datepicker")}render(){return iU`${iz(this.label&&!this.hideLabel,()=>iU`<label for="spinner-0" id="label">${this.label}</label>`)}

      <div class="form-info"><slot name="sub-label"></slot></div>

      <div
        class=${iD({field:!0,small:"small"===this.size})}
        id="trigger"
        @click=${tv(this,ez)}
        @copy=${tv(this,eS)}
        @paste=${tv(this,eC)}
      >
        <div
          class=${iD({input:!0,"is-placeholder":!this.value})}
          @focusout=${tv(this,ek)}
        >
          ${function*(e,t){let s="function"==typeof t;if(void 0!==e){let i=-1;for(let r of e)i>-1&&(yield s?t(i):t),i++,yield r}}(function*(e,t){if(void 0!==e){let s=0;for(let i of e)yield t(i,s++)}}(this._dateFormatLayout.layout,(e,t)=>iU`<gds-date-part-spinner
                  id="spinner-${t}"
                  .length=${"y"===e.token?4:2}
                  .value=${tv(this,eU)[e.name]}
                  aria-valuemin=${t$(this,ev,em).call(this,e.name)}
                  aria-valuemax=${t$(this,eb,e_).call(this,e.name)}
                  aria-label=${t$(this,ef,ey).call(this,e.name)}
                  aria-describedby="label"
                  @keydown=${tv(this,eP)}
                  @change=${t=>tv(this,eH).call(this,t.detail.value,e.name)}
                  @focus=${tv(this,eE)}
                  @touchend=${e=>{this.open=!0,e.preventDefault()}}
                ></gds-date-part-spinner>`),iU`<span>${this._dateFormatLayout.delimiter}</span>`)}
        </div>
        <button
          id="calendar-button"
          aria-label="${rl("Open calendar modal")}"
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
        @gds-ui-state=${tv(this,eL)}
        label=${this.label}
        id="calendar-popover"
        .placement=${"bottom-end"}
        .calcMinWidth=${()=>this.showWeekNumbers?"350px":"305px"}
        @focusin=${async e=>{e.target?.id!=="calendar-popover"||this._elCalendar.then(e=>e.focus())}}
      >
        <div class="header">
          <button
            @click=${tv(this,eW)}
            aria-label=${rl("Previous month")}
          >
            <i class="icon prev"></i>
          </button>
          <gds-dropdown
            .value=${this._focusedMonth.toString()}
            @change=${tv(this,eF)}
            .maxHeight=${300}
            label="${rl("Month")}"
            style="width:120px"
            size="small"
            hide-label
          >
            <gds-option value="0">${rl("January")}</gds-option>
            <gds-option value="1">${rl("February")}</gds-option>
            <gds-option value="2">${rl("March")}</gds-option>
            <gds-option value="3">${rl("April")}</gds-option>
            <gds-option value="4">${rl("May")}</gds-option>
            <gds-option value="5">${rl("June")}</gds-option>
            <gds-option value="6">${rl("July")}</gds-option>
            <gds-option value="7">${rl("August")}</gds-option>
            <gds-option value="8">${rl("September")}</gds-option>
            <gds-option value="9">${rl("October")}</gds-option>
            <gds-option value="10">${rl("November")}</gds-option>
            <gds-option value="11">${rl("December")}</gds-option>
          </gds-dropdown>
          <gds-dropdown
            .value=${this._focusedYear.toString()}
            @change=${tv(this,eT)}
            .maxHeight=${300}
            label="${rl("Year")}"
            size="small"
            hide-label
          >
            ${no(tv(this,eB,eI),e=>e,e=>iU`<gds-option value=${e}>${e}</gds-option>`)}
          </gds-dropdown>
          <button
            @click=${tv(this,eD)}
            aria-label=${rl("Next month")}
          >
            <i class="icon next"></i>
          </button>
        </div>

        <gds-calendar
          id="calendar"
          @change=${tv(this,eM)}
          @gds-date-focused=${tv(this,eN)}
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
            @click=${()=>{this.value=void 0,t$(this,e$,ew).call(this)}}
          >
            ${rl("Clear")}
          </button>
          ${ni(t$(this,ec,ep).call(this),it)}
          <button
            class="tertiary today"
            @click=${()=>{this.value=new Date,t$(this,e$,ew).call(this)}}
          >
            ${rl("Today")}
          </button>
        </div>
      </gds-popover> `}_handleValueChange(){if(!this.value){tb(this,eU,{year:"yyyy",month:"mm",day:"dd"});return}let e=this.value;this._focusedMonth=e.getMonth(),this._focusedYear=e.getFullYear();let t=e.getFullYear().toString(),s=(e.getMonth()+1).toString().padStart(2,"0"),i=e.getDate().toString().padStart(2,"0");tb(this,eU,{year:t,month:s,day:i})}_handleOpenChange(){this.open&&(tb(this,eh,this.value),this._elCalendar.then(e=>e.focus()))}};eh=new WeakMap,ec=new WeakSet,ep=async function(){let e;let t=await this.getFocusedDate(),s="";return t&&t>this.max?(s=rl("Last available date"),e=()=>t$(this,eu,eg).call(this,this.max)):t&&t<this.min&&(s=rl("First available date"),e=()=>t$(this,eu,eg).call(this,this.min)),iU`${iz(s.length>0,()=>iU`<button class="tertiary back-to-range" @click=${e}>
          ${s}
        </button>`,()=>it)}`},eu=new WeakSet,eg=function(e){let t=new Date(e);this._elCalendar.then(e=>e.focusedDate=t).then(tv(this,eN))},ef=new WeakSet,ey=function(e){return({year:rl("Year"),month:rl("Month"),day:rl("Day")})[e]},ev=new WeakSet,em=function(e){return({year:1900,month:1,day:1})[e]},eb=new WeakSet,e_=function(e){return({year:9999,month:12,day:31})[e]},e$=new WeakSet,ew=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value}}))},ex=new WeakSet,eA=function(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value}}))},ek=new WeakMap,eE=new WeakMap,eS=new WeakMap,eC=new WeakMap,ez=new WeakMap,eM=new WeakMap,eF=new WeakMap,eT=new WeakMap,eD=new WeakMap,eW=new WeakMap,eN=new WeakMap,eL=new WeakMap,eP=new WeakMap,eO=new WeakSet,eR=function(e){let t=e.replace(/[a-z0-9]/gi,"")[0],s=e.split(t),i=s.findIndex(e=>"y"===e),r=s.findIndex(e=>"m"===e),o=s.findIndex(e=>"d"===e);if(-1===i||-1===r||-1===o)throw Error("Invalid date format for <gds-datepicker>");return{delimiter:t,layout:[i,r,o].sort((e,t)=>e-t).map(e=>s[e]).map(e=>({token:e,name:"y"===e?"year":"m"===e?"month":"day"}))}},eH=new WeakMap,eU=new WeakMap,eB=new WeakSet,eI=function(){let e=this.min.getFullYear(),t=this.max.getFullYear(),s=tv(this,eV,ej),i=this.value?.getFullYear();return{*[Symbol.iterator](){s&&(yield i);for(let s=e;s<=t;s++)yield s}}},eV=new WeakSet,ej=function(){return!!this.value&&(this.value.getFullYear()<this.min.getFullYear()||this.value.getFullYear()>this.max.getFullYear())},nC.styles=[nS],nC.shadowRootOptions={mode:"open",delegatesFocus:!0},tf([iA({converter:nn})],nC.prototype,"value",2),tf([iA({converter:nn})],nC.prototype,"min",2),tf([iA({converter:nn})],nC.prototype,"max",2),tf([iA({type:Boolean})],nC.prototype,"open",2),tf([iA()],nC.prototype,"label",2),tf([iA({type:Boolean,attribute:"show-week-numbers"})],nC.prototype,"showWeekNumbers",2),tf([iA()],nC.prototype,"size",2),tf([iA({type:Boolean,attribute:"hide-label"})],nC.prototype,"hideLabel",2),tf([iA()],nC.prototype,"dateformat",1),tf([iA({type:Boolean,attribute:"disabled-weekends"})],nC.prototype,"disabledWeekends",2),tf([iA({converter:{fromAttribute:e=>e.split(",").map(e=>new Date(e.trim())),toAttribute:e=>JSON.stringify(e.map(e=>e.toISOString()))},attribute:"disabled-dates"})],nC.prototype,"disabledDates",2),tf([iC("#calendar-button")],nC.prototype,"test_calendarButton",2),tf([ik()],nC.prototype,"_focusedMonth",2),tf([ik()],nC.prototype,"_focusedYear",2),tf([ik()],nC.prototype,"_dateFormatLayout",2),tf([iC("#calendar")],nC.prototype,"_elCalendar",2),tf([iC("#trigger")],nC.prototype,"_elTrigger",2),tf([(e,s)=>iE(e,s,{get(){return(this.renderRoot??(t??=document.createDocumentFragment())).querySelectorAll("[role=spinbutton]")}})],nC.prototype,"_elSpinners",2),tf([iS(".input")],nC.prototype,"_elInput",2),tf([ij("value")],nC.prototype,"_handleValueChange",1),tf([ij("open")],nC.prototype,"_handleOpenChange",1),nC=tf([iO("gds-datepicker")],nC);var nz=sA`
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
      --_gap-column: var(--_gap-mobile);
      --_gap-row: var(--_row-gap-mobile);
      --_grid-padding: var(--_padding-mobile);
      --_col-width: var(--_col-width-mobile);
    }
  }
`,nM=/(?<l>l:([a-z0-9]+))?\s*(?<m>m:([a-z0-9]+))?\s*(?<s>s:([a-z0-9]+))?/,nF=class extends iB{constructor(){super(...arguments),tm(this,eY,{varsColumn:sA``,varsGap:sA``,varsRowGap:sA``,varsPadding:sA``,varsAutoColumns:sA``})}connectedCallback(){super.connectedCallback(),this._updateColumnVariables(),this._updateGapVariables(),this._updateRowGapVariables(),this._updatePaddingVariables(),this._updateAutoColumnsVariables()}_updateCSSVariables(e,t){let s,i,r,o;e in this&&(s=this[e]);let n=s?.match(nM)||null,{l:a,m:l,s:d}=n?.groups||{},h=(e,t,s)=>({desktop:e?`var(--gds-sys-grid-gap-${e.split(":")[1]})`:void 0,tablet:t?`var(--gds-sys-grid-gap-${t.split(":")[1]})`:void 0,mobile:s?`var(--gds-sys-grid-gap-${s.split(":")[1]})`:void 0});"columns"===e&&(this.columns&&!isNaN(Number(this.columns))?i=r=o=Number(this.columns):(i=a?a.split(":")[1]:void 0,r=l?l.split(":")[1]:void 0,o=d?d.split(":")[1]:void 0)),"gap"===e&&(this.gap&&!this.gap.includes(" ")?i=r=o=`var(--gds-sys-grid-gap-${this.gap})`:{desktop:i,tablet:r,mobile:o}=h(a,l,d)),"rowGap"===e&&(this.rowGap&&!this.rowGap.includes(" ")?i=r=o=`var(--gds-sys-grid-gap-${this.rowGap})`:{desktop:i,tablet:r,mobile:o}=h(a,l,d)),"padding"===e&&(this.padding&&!this.padding.includes(" ")?i=r=o=`var(--gds-sys-grid-gap-${this.padding})`:{desktop:i,tablet:r,mobile:o}=h(a,l,d)),"autoColumns"===e&&(this.autoColumns&&!this.autoColumns.includes(" ")?i=r=o=`${this.autoColumns}px`:(i=a?`${a.split(":")[1]}px`:void 0,r=l?`${l.split(":")[1]}px`:void 0,o=d?`${d.split(":")[1]}px`:void 0));let c=[{name:`${t}-desktop`,value:i},{name:`${t}-tablet`,value:r},{name:`${t}-mobile`,value:o}].filter(({value:e})=>void 0!==e).map(({name:e,value:t})=>`--_${e}: ${t};`).join(" ");tb(this,eY,{...tv(this,eY),[t]:sA`
        ${sx(c)}
      `}),this._dynamicStylesController.inject("grid-vars",sA`
        :host {
          ${sx(Object.values(tv(this,eY)).join(""))}
        }
      `)}_updateColumnVariables(){this._updateCSSVariables("columns","columns")}_updateGapVariables(){this._updateCSSVariables("gap","gap")}_updateRowGapVariables(){this._updateCSSVariables("rowGap","row-gap")}_updatePaddingVariables(){this._updateCSSVariables("padding","padding")}_updateAutoColumnsVariables(){this._updateCSSVariables("autoColumns","col-width")}render(){return iU`<slot></slot>`}};eY=new WeakMap,nF.styles=[i5,nz],nF.shadowRootOptions={mode:"open",delegatesFocus:!0},tf([iA({attribute:"columns",type:String})],nF.prototype,"columns",2),tf([iA({attribute:"gap",type:String})],nF.prototype,"gap",2),tf([iA({attribute:"row-gap",type:String})],nF.prototype,"rowGap",2),tf([iA({attribute:"padding",type:String})],nF.prototype,"padding",2),tf([iA({attribute:"auto-columns",type:String})],nF.prototype,"autoColumns",2),tf([ij("columns")],nF.prototype,"_updateColumnVariables",1),tf([ij("gap")],nF.prototype,"_updateGapVariables",1),tf([ij("row-gap")],nF.prototype,"_updateRowGapVariables",1),tf([ij("padding")],nF.prototype,"_updatePaddingVariables",1),tf([ij("autoColumns")],nF.prototype,"_updateAutoColumnsVariables",1),nF=tf([iO("gds-grid")],nF);var nT=class extends iB{connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}render(){return iU`<slot></slot>`}};nT=tf([iO("gds-list-item")],nT);var nD=class extends iB{constructor(){super(...arguments),this.label=""}connectedCallback(){super.connectedCallback(),iZ(this),iI.instance.apply(this,"gds-grouped-list")}render(){return iU`${iz(this.label,()=>iU`<div class="gds-list-heading" aria-hidden="true" id="label">
            ${this.label}
          </div>`)}
      <div role="list" aria-labelledby="label">
        <slot gds-allow="gds-list-item"></slot>
      </div>`}};tf([iA()],nD.prototype,"label",2),nD=tf([iO("gds-grouped-list")],nD);var nW=sA`
  @layer icon;

  @layer icon {
    :host {
      display: contents;
    }

    :host(:not([width], [height])) {
      & > svg {
        height: 1lh;
        width: auto;
      }
    }
  }
`,nN=class extends ib{constructor(){super(...arguments),this.width=24,this.height=24,this.solid=!1,this.label=""}static{this.styles=[nW]}render(){let e=`<svg
      width="${this.width}"
      height="${this.height}"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ${this.label?`aria-label="${this.label}"`:`aria-label="${this.constructor._name}"`}
      role="graphics-symbol"
    >
      ${this.solid?this.constructor._solidSVG:this.constructor._regularSVG}
    </svg>`;return s7`${n_(e)}`}};function nL(){return(e,t,s)=>{let i=e.connectedCallback,r=e.disconnectedCallback;e.connectedCallback=function(){i?.call(this),this.__resizeObservers=this.__resizeObservers||{},this.__resizeObserver_tids=this.__resizeObserver_tids||{},this.__resizeObservers[t]=new ResizeObserver(()=>{this.__resizeObserver_tids[t]&&clearTimeout(this.__resizeObserver_tids[t]),this.__resizeObserver_tids[t]=setTimeout(()=>{s.value?.call(this)},20)}),this.__resizeObservers[t].observe(this)},e.disconnectedCallback=function(){r?.call(this),this.__resizeObservers[t].disconnect()}}}tf([iA({type:Number})],nN.prototype,"width",2),tf([iA({type:Number})],nN.prototype,"height",2),tf([iA({type:Boolean})],nN.prototype,"solid",2),tf([iA({type:String})],nN.prototype,"label",2);var nP=`:host {
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
`,nO=class extends iB{constructor(){super(...arguments),this.selected=!1}connectedCallback(){super.connectedCallback(),iI.instance.apply(this,"gds-segmented"),this.setAttribute("role","listitem")}render(){return iU`<button aria-current=${String(this.selected)}>
      <slot></slot>
    </button>`}};nO.styles=[...i5,sx(nP)],tf([iA({type:Boolean,reflect:!0})],nO.prototype,"selected",2),tf([iA()],nO.prototype,"value",2),nO=tf([iO("gds-segment")],nO);var nR=`:host {
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
`,nH={small:36,medium:44},nU=e=>e?0:4,nB=class extends iB{constructor(){super(...arguments),tm(this,e9),this.segMinWidth=100,this.size="medium",tm(this,eG,void 0),this._showPrevButton=!1,this._showNextButton=!1,tm(this,eq,0),tm(this,eK,0),tm(this,eX,0),tm(this,eZ,0),tm(this,eJ,0),tm(this,eQ,0),tm(this,e0,0),tm(this,e1,!1),tm(this,e2,e=>{tb(this,eQ,e.clientX),tb(this,e0,tv(this,eZ)),tb(this,e1,!0)}),tm(this,e5,e=>{if(!tv(this,e1))return;e.preventDefault();let t=e.clientX-tv(this,eQ);if(!(5>Math.abs(t)))try{this._elSegments.hasPointerCapture(e.pointerId)||this._elSegments.setPointerCapture(e.pointerId),tb(this,eZ,tv(this,e0)+t),tv(this,e8).call(this)}catch{}}),tm(this,e3,e=>{if(tv(this,e1)){tb(this,e1,!1);try{this._elSegments.releasePointerCapture(e.pointerId),tv(this,e4).call(this)}catch{}}}),tm(this,e4,()=>{tb(this,eq,Math.round(-tv(this,eZ)/tv(this,eK))),tv(this,e6).call(this)}),tm(this,e6,(e=!1)=>{let t=()=>{let e=this.segments.length,t=this._elTrack.offsetWidth;if(t/e>this.segMinWidth)return{count:e,segmentWidth:(t-nU(this._isUsingTransitionalStyles)*(e-1))/e};let s=Math.floor((this.offsetWidth-2*nH[this.size])/this.segMinWidth),i=(t-nU(this._isUsingTransitionalStyles)*(s-1))/s;return{count:s,segmentWidth:i}},{count:s}=t();e&&(tv(this,eJ)>=tv(this,eq)+s&&tb(this,eq,tv(this,eJ)-s+1),tv(this,eJ)<tv(this,eq)&&tb(this,eq,tv(this,eJ)));let i=this.segments.length-s,r=tv(this,eq)>=i,o=0>=tv(this,eq);r&&tb(this,eq,i),o&&tb(this,eq,0),tv(this,ts).call(this,s),this.updateComplete.then(()=>{let{segmentWidth:e,count:s}=t();this.segments.forEach(t=>{t.style.width=e+"px"}),tb(this,eZ,-tv(this,eq)*e-nU(this._isUsingTransitionalStyles)*tv(this,eq)),tv(this,e8).call(this),tb(this,eK,e),tb(this,eX,e),tv(this,ti).call(this)})}),tm(this,e8,()=>{window.requestAnimationFrame(()=>{this._elSegments.style.transform=`translateX(${tv(this,eZ)}px)`})}),tm(this,te,()=>{t_(this,eq)._--,tv(this,e6).call(this)}),tm(this,tt,()=>{t_(this,eq)._++,tv(this,e6).call(this)}),tm(this,ts,e=>{this._showPrevButton=tv(this,eq)>0,this._showNextButton=tv(this,eq)<this.segments.length-e}),tm(this,ti,()=>{let e=this.segments.find(e=>e.selected);if(e){let t=this.segments.indexOf(e),s=t*tv(this,eX)+nU(this._isUsingTransitionalStyles)*t;this._elIndicator.style.transform=`translateX(${s}px)`,this._elIndicator.style.width=`${tv(this,eX)}px`}else this._elIndicator.style.transform="translateX(-100%)",this._elIndicator.style.width="0px"}),tm(this,tr,e=>{let t=this.segments.find(t=>t===e.target||t.contains(e.target));t&&(this.segments.forEach(e=>e.selected=!1),t.selected=!0,tb(this,eG,t.value),tv(this,ti).call(this),this.dispatchEvent(new CustomEvent("change",{detail:{segment:t},bubbles:!0,composed:!0})))}),tm(this,to,()=>{tv(this,eG)&&this.updateComplete.then(()=>{let e=this.segments.find(e=>e.value===tv(this,eG));e&&(this.segments.forEach(e=>e.selected=!1),e.selected=!0,tb(this,eJ,this.segments.indexOf(e)),tv(this,e6).call(this,!0))})})}get value(){return tv(this,eG)}set value(e){tb(this,eG,e),tv(this,to).call(this)}get segments(){return this._elSlot?this._elSlot.assignedElements():[]}connectedCallback(){super.connectedCallback(),iI.instance.apply(this,"gds-segmented-control"),this.addEventListener("focusin",e=>{e.target instanceof nO&&(tb(this,eJ,this.segments.indexOf(e.target)),tv(this,e6).call(this,!0))})}render(){return iU`${iz(this._showPrevButton,()=>iU`<button
            id="btn-prev"
            @click=${tv(this,te)}
            aria-label=${rl("Scroll right")}
          >
            <gds-icon-chevron-left />
          </button>`)}
      <div
        id="track"
        @scroll=${()=>{this._elTrack.scrollLeft=0}}
      >
        <div
          id="segments"
          @pointerdown=${tv(this,e2)}
          @pointermove=${tv(this,e5)}
          @touchmove=${tv(this,e5)}
          @pointerup=${tv(this,e3)}
          @pointercancel=${tv(this,e3)}
          role="list"
        >
          <slot
            gds-allow="gds-segment"
            @click=${tv(this,tr)}
            @slotchange=${t$(this,e9,e7)}
            role="none"
          ></slot>
          <div id="indicator" role="none"></div>
        </div>
      </div>
      ${iz(this._showNextButton,()=>iU`<button
            id="btn-next"
            @click=${tv(this,tt)}
            aria-label=${rl("Scroll right")}
          >
            <gds-icon-chevron-right />
          </button>`)}`}_recalculateMinWidth(){this.updateComplete.then(()=>tv(this,e6).call(this))}};eG=new WeakMap,eq=new WeakMap,eK=new WeakMap,eX=new WeakMap,eZ=new WeakMap,eJ=new WeakMap,eQ=new WeakMap,e0=new WeakMap,e1=new WeakMap,e2=new WeakMap,e5=new WeakMap,e3=new WeakMap,e4=new WeakMap,e6=new WeakMap,e8=new WeakMap,e9=new WeakSet,e7=function(){let e=this.segments.find(e=>e.selected)?.value;e&&tb(this,eG,e),tv(this,e6).call(this)},te=new WeakMap,tt=new WeakMap,ts=new WeakMap,ti=new WeakMap,tr=new WeakMap,to=new WeakMap,nB.styles=[i5,sx(nR)],tf([iA({type:Number,attribute:"seg-min-width"})],nB.prototype,"segMinWidth",2),tf([iA()],nB.prototype,"size",2),tf([iA()],nB.prototype,"value",1),tf([iS("slot")],nB.prototype,"_elSlot",2),tf([iS("#indicator")],nB.prototype,"_elIndicator",2),tf([iS("#track")],nB.prototype,"_elTrack",2),tf([iS("#segments")],nB.prototype,"_elSegments",2),tf([ik()],nB.prototype,"_showPrevButton",2),tf([ik()],nB.prototype,"_showNextButton",2),tf([nL(),ij("segMinWidth")],nB.prototype,"_recalculateMinWidth",1),nB=tf([iO("gds-segmented-control")],nB);var nI=class extends iB{constructor(){super(...arguments),this.colorScheme="light"}connectedCallback(){super.connectedCallback(),iI.instance.apply(this,"gds-theme")}render(){return iU` <slot></slot> `}};tf([iA({reflect:!0,attribute:"color-scheme"})],nI.prototype,"colorScheme",2),nI=tf([iO("gds-theme")],nI);var nV=class extends nN{};nV._regularSVG='<path d="M2.75 15.0938L9 20.25L21.25 3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',nV._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M21.7426 2.99454C22.2979 3.40464 22.4157 4.18729 22.0056 4.74263L10.0056 20.9926C9.80433 21.2652 9.50107 21.4443 9.16524 21.4891C8.82942 21.5339 8.4898 21.4404 8.22417 21.2301L2.22417 16.4801C1.6829 16.0516 1.59149 15.2655 2.01999 14.7242C2.4485 14.1829 3.23466 14.0915 3.77593 14.52L8.76241 18.4677L19.9945 3.25753C20.4046 2.70218 21.1873 2.58444 21.7426 2.99454Z" fill="currentColor"/>',nV._name="checkmark",nV=tf([iO("gds-icon-checkmark")],nV);var nj=sA`
  @layer base, reset, transitional-styles;
  @layer base {
    .btn-p {
      padding: 0 0.75rem;
    }
    .icon {
      width: 1rem;
    }
  }
`,nY=class extends iB{constructor(){super(...arguments),this.selected=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),iI.instance.apply(this,"gds-filter-chip"),this._button.then(e=>{iI.instance.apply(e,"gds-button")})}render(){let e={"btn-p":!this.selected};return iU`<gds-button
      class="btn"
      size="small"
      .rank=${this.selected?"primary":"secondary"}
      variant=${this._isUsingTransitionalStyles?"ghost":"default"}
      gds-role="option"
      gds-aria-selected=${this.selected}
    >
      <span class=${iD(e)}><slot></slot></span>
      <gds-icon-checkmark
        slot="trail"
        style="display: ${this.selected?"contents":"none"}"
        width="16"
        height="16"
        class="icon"
      ></gds-icon-checkmark>
    </gds-button>`}};nY.styles=[nj],tf([iA({reflect:!0,type:Boolean})],nY.prototype,"selected",2),tf([iA()],nY.prototype,"value",2),tf([iC(function(e){return iP.get(e)??e}("gds-button"))],nY.prototype,"_button",2),nY=tf([iO("gds-filter-chip")],nY);var nG=sA`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: inline-block;
      max-width: 100%;
    }

    .chips {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .collapse {
      overflow: auto;
      scroll-snap-type: both mandatory;
      overscroll-behavior-x: contain;
      flex-wrap: nowrap;
      padding-bottom: 0.5rem;
      scrollbar-color: rgba(0, 0, 0, 0.5) transparent;
      scrollbar-width: thin;
    }

    ::slotted(*) {
      scroll-snap-align: start;
      scroll-snap-stop: always;
    }
  }
`,nq=class extends i8{constructor(){super(...arguments),tm(this,td),tm(this,tc),this.multiple=!1,this.label="",this.rowCollapse=!1,this._collapsed=!1,tm(this,tn,e=>{let t=this.chips.find(t=>t===e.target||t.contains(e.target));t&&(this.multiple&&Array.isArray(this.value)?t.selected?this.value=this.value.filter(e=>e!==t.value):this.value=[...this.value,t.value]:this.value=t.value,this.dispatchEvent(new CustomEvent("change",{detail:{clickedChip:t,value:this.value},bubbles:!0,composed:!0})))}),tm(this,ta,3),tm(this,tl,0)}get chips(){return this._elSlot?this._elSlot.assignedElements():[]}render(){let e={collapse:this._collapsed};return iU`<div
      class="chips ${iD(e)}"
      role="listbox"
      aria-label=${this.label}
      aria-multiselectable=${this.multiple}
    >
      <slot
        gds-allow="gds-filter-chip"
        @click=${tv(this,tn)}
        @slotchange=${t$(this,tc,tp)}
        role="none"
      ></slot>
    </div>`}_handleResize(){if(!this.rowCollapse)return;let e=t$(this,td,th).call(this),t=this.offsetHeight,s=this.offsetWidth;t>=e*tv(this,ta)&&(this._collapsed=!0,tb(this,tl,s)),s>tv(this,tl)&&(this._collapsed=!1)}_updateSelectedFromValue(){this.value&&(this.multiple&&!Array.isArray(this.value)&&(this.value=[this.value]),!this.multiple&&Array.isArray(this.value)&&(this.value=this.value[0]),this.updateComplete.then(()=>{this.chips.forEach(e=>{e.selected=this.multiple?this.value.includes(e.value):this.value===e.value})}))}};tn=new WeakMap,ta=new WeakMap,tl=new WeakMap,td=new WeakSet,th=function(){return this.chips[0]?.offsetHeight||0},tc=new WeakSet,tp=function(){let e=this.chips.find(e=>e.selected)?.value;e&&(this.value=e)},nq.styles=[nG],tf([iA({converter:{fromAttribute:e=>e.split(","),toAttribute:e=>Array.isArray(e)?e.join(","):e}})],nq.prototype,"value",2),tf([iA({type:Boolean})],nq.prototype,"multiple",2),tf([iA()],nq.prototype,"label",2),tf([iA({type:Boolean,attribute:"row-collapse"})],nq.prototype,"rowCollapse",2),tf([ik()],nq.prototype,"_collapsed",2),tf([iS("slot")],nq.prototype,"_elSlot",2),tf([nL()],nq.prototype,"_handleResize",1),tf([ij("value")],nq.prototype,"_updateSelectedFromValue",1),nq=tf([iO("gds-filter-chips")],nq)})();/*! Bundled license information:

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

@lit/reactive-element/decorators/event-options.js:
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

lit-html/directives/when.js:
  (**
   * @license
   * Copyright 2021 Google LLC
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

lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/