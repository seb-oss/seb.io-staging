"use strict";(()=>{var e,t,s,i,r,o,n,a,l,d,h,c,p,u,g,f,y,v,m,b,_,$,w,x,A,k,C,E,S,M,z,F,D,T,L,W,N,P,O,R,H,U,V,I,B,j,Y,G,q,K,Z,X,J,Q,ee,et,es,ei,er,eo,en,ea,el,ed,eh,ec,ep,eu,eg,ef,ey,ev,em,eb,e_,e$,ew,ex,eA,ek,eC,eE,eS,eM,ez,eF,eD,eT,eL,eW,eN,eP,eO,eR,eH,eU,eV,eI,eB,ej,eY,eG,eq,eK,eZ,eX,eJ,eQ,e0,e1,e2,e5,e3,e6,e4,e7,e8,e9,te,tt,ts,ti,tr,to,tn,ta,tl,td,th,tc,tp,tu,tg,tf,ty,tv,tm,tb,t_,t$=Object.defineProperty,tw=Object.getOwnPropertyDescriptor,tx=(e,t,s,i)=>{for(var r,o=i>1?void 0:i?tw(t,s):t,n=e.length-1;n>=0;n--)(r=e[n])&&(o=(i?r(t,s,o):r(o))||o);return i&&o&&t$(t,s,o),o},tA=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)},tk=(e,t,s)=>(tA(e,t,"read from private field"),s?s.call(e):t.get(e)),tC=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},tE=(e,t,s,i)=>(tA(e,t,"write to private field"),i?i.call(e,s):t.set(e,s),s),tS=(e,t,s,i)=>({set _(value){tE(e,t,value,s)},get _(){return tk(e,t,i)}}),tM=(e,t,s)=>(tA(e,t,"access private method"),s),tz=globalThis,tF=tz.ShadowRoot&&(void 0===tz.ShadyCSS||tz.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,tD=Symbol(),tT=new WeakMap,tL=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==tD)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(tF&&void 0===e){let s=void 0!==t&&1===t.length;s&&(e=tT.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&tT.set(t,e))}return e}toString(){return this.cssText}},tW=e=>new tL("string"==typeof e?e:e+"",void 0,tD),tN=(e,t)=>{if(tF)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let s of t){let t=document.createElement("style"),i=tz.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=s.cssText,e.appendChild(t)}},tP=tF?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let s of e.cssRules)t+=s.cssText;return tW(t)})(e):e,{is:tO,defineProperty:tR,getOwnPropertyDescriptor:tH,getOwnPropertyNames:tU,getOwnPropertySymbols:tV,getPrototypeOf:tI}=Object,tB=globalThis,tj=tB.trustedTypes,tY=tj?tj.emptyScript:"",tG=tB.reactiveElementPolyfillSupport,tq=(e,t)=>e,tK={toAttribute(e,t){switch(t){case Boolean:e=e?tY:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=null!==e;break;case Number:s=null===e?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch(e){s=null}}return s}},tZ=(e,t)=>!tO(e,t),tX={attribute:!0,type:String,converter:tK,reflect:!1,hasChanged:tZ};Symbol.metadata??=Symbol("metadata"),tB.litPropertyMetadata??=new WeakMap;var tJ=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=tX){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(e,s,t);void 0!==i&&tR(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){let{get:i,set:r}=tH(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return i?.call(this)},set(t){let o=i?.call(this);r.call(this,t),this.requestUpdate(e,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??tX}static _$Ei(){if(this.hasOwnProperty(tq("elementProperties")))return;let e=tI(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(tq("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(tq("properties"))){let e=this.properties;for(let t of[...tU(e),...tV(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,s]of t)this.elementProperties.set(e,s)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let s=this._$Eu(e,t);void 0!==s&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let s of new Set(e.flat(1/0).reverse()))t.unshift(tP(s));else void 0!==e&&t.push(tP(e));return t}static _$Eu(e,t){let s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return tN(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EC(e,t){let s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(void 0!==i&&!0===s.reflect){let r=(void 0!==s.converter?.toAttribute?s.converter:tK).toAttribute(t,s.type);this._$Em=e,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(e,t){let s=this.constructor,i=s._$Eh.get(e);if(void 0!==i&&this._$Em!==i){let e=s.getPropertyOptions(i),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:tK;this._$Em=i,this[i]=r.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,s){if(void 0!==e){if(!((s??=this.constructor.getPropertyOptions(e)).hasChanged??tZ)(this[e],t))return;this.P(e,t,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,s){this._$AL.has(e)||this._$AL.set(e,t),!0===s.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,s]of e)!0!==s.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],s)}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(e){}firstUpdated(e){}};tJ.elementStyles=[],tJ.shadowRootOptions={mode:"open"},tJ[tq("elementProperties")]=new Map,tJ[tq("finalized")]=new Map,tG?.({ReactiveElement:tJ}),(tB.reactiveElementVersions??=[]).push("2.0.4");var tQ=globalThis,t0=tQ.trustedTypes,t1=t0?t0.createPolicy("lit-html",{createHTML:e=>e}):void 0,t2="$lit$",t5=`lit$${Math.random().toFixed(9).slice(2)}$`,t3="?"+t5,t6=`<${t3}>`,t4=document,t7=()=>t4.createComment(""),t8=e=>null===e||"object"!=typeof e&&"function"!=typeof e,t9=Array.isArray,se=e=>t9(e)||"function"==typeof e?.[Symbol.iterator],st="[ 	\n\f\r]",ss=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,si=/-->/g,sr=/>/g,so=RegExp(`>|${st}(?:([^\\s"'>=/]+)(${st}*=${st}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),sn=/'/g,sa=/"/g,sl=/^(?:script|style|textarea|title)$/i,sd=e=>(t,...s)=>({_$litType$:e,strings:t,values:s}),sh=sd(1),sc=sd(2),sp=Symbol.for("lit-noChange"),su=Symbol.for("lit-nothing"),sg=new WeakMap,sf=t4.createTreeWalker(t4,129);function sy(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==t1?t1.createHTML(t):t}var sv=(e,t)=>{let s=e.length-1,i=[],r,o=2===t?"<svg>":"",n=ss;for(let t=0;t<s;t++){let s=e[t],a,l,d=-1,h=0;for(;h<s.length&&(n.lastIndex=h,null!==(l=n.exec(s)));)h=n.lastIndex,n===ss?"!--"===l[1]?n=si:void 0!==l[1]?n=sr:void 0!==l[2]?(sl.test(l[2])&&(r=RegExp("</"+l[2],"g")),n=so):void 0!==l[3]&&(n=so):n===so?">"===l[0]?(n=r??ss,d=-1):void 0===l[1]?d=-2:(d=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?so:'"'===l[3]?sa:sn):n===sa||n===sn?n=so:n===si||n===sr?n=ss:(n=so,r=void 0);let c=n===so&&e[t+1].startsWith("/>")?" ":"";o+=n===ss?s+t6:d>=0?(i.push(a),s.slice(0,d)+t2+s.slice(d)+t5+c):s+t5+(-2===d?t:c)}return[sy(e,o+(e[s]||"<?>")+(2===t?"</svg>":"")),i]},sm=class e{constructor({strings:t,_$litType$:s},i){let r;this.parts=[];let o=0,n=0,a=t.length-1,l=this.parts,[d,h]=sv(t,s);if(this.el=e.createElement(d,i),sf.currentNode=this.el.content,2===s){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=sf.nextNode())&&l.length<a;){if(1===r.nodeType){if(r.hasAttributes())for(let e of r.getAttributeNames())if(e.endsWith(t2)){let t=h[n++],s=r.getAttribute(e).split(t5),i=/([.?@])?(.*)/.exec(t);l.push({type:1,index:o,name:i[2],strings:s,ctor:"."===i[1]?sx:"?"===i[1]?sA:"@"===i[1]?sk:sw}),r.removeAttribute(e)}else e.startsWith(t5)&&(l.push({type:6,index:o}),r.removeAttribute(e));if(sl.test(r.tagName)){let e=r.textContent.split(t5),t=e.length-1;if(t>0){r.textContent=t0?t0.emptyScript:"";for(let s=0;s<t;s++)r.append(e[s],t7()),sf.nextNode(),l.push({type:2,index:++o});r.append(e[t],t7())}}}else if(8===r.nodeType){if(r.data===t3)l.push({type:2,index:o});else{let e=-1;for(;-1!==(e=r.data.indexOf(t5,e+1));)l.push({type:7,index:o}),e+=t5.length-1}}o++}}static createElement(e,t){let s=t4.createElement("template");return s.innerHTML=e,s}};function sb(e,t,s=e,i){if(t===sp)return t;let r=void 0!==i?s._$Co?.[i]:s._$Cl,o=t8(t)?void 0:t._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(e))._$AT(e,s,i),void 0!==i?(s._$Co??=[])[i]=r:s._$Cl=r),void 0!==r&&(t=sb(e,r._$AS(e,t.values),r,i)),t}var s_=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:s}=this._$AD,i=(e?.creationScope??t4).importNode(t,!0);sf.currentNode=i;let r=sf.nextNode(),o=0,n=0,a=s[0];for(;void 0!==a;){if(o===a.index){let t;2===a.type?t=new s$(r,r.nextSibling,this,e):1===a.type?t=new a.ctor(r,a.name,a.strings,this,e):6===a.type&&(t=new sC(r,this,e)),this._$AV.push(t),a=s[++n]}o!==a?.index&&(r=sf.nextNode(),o++)}return sf.currentNode=t4,i}p(e){let t=0;for(let s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}},s$=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=su,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){t8(e=sb(this,e,t))?e===su||null==e||""===e?(this._$AH!==su&&this._$AR(),this._$AH=su):e!==this._$AH&&e!==sp&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):se(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==su&&t8(this._$AH)?this._$AA.nextSibling.data=e:this.T(t4.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:s}=e,i="number"==typeof s?this._$AC(e):(void 0===s.el&&(s.el=sm.createElement(sy(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(t);else{let e=new s_(i,this),s=e.u(this.options);e.p(t),this.T(s),this._$AH=e}}_$AC(e){let t=sg.get(e.strings);return void 0===t&&sg.set(e.strings,t=new sm(e)),t}k(t){t9(this._$AH)||(this._$AH=[],this._$AR());let s=this._$AH,i,r=0;for(let o of t)r===s.length?s.push(i=new e(this.S(t7()),this.S(t7()),this,this.options)):i=s[r],i._$AI(o),r++;r<s.length&&(this._$AR(i&&i._$AB.nextSibling,r),s.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}},sw=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,r){this.type=1,this._$AH=su,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=su}_$AI(e,t=this,s,i){let r=this.strings,o=!1;if(void 0===r)(o=!t8(e=sb(this,e,t,0))||e!==this._$AH&&e!==sp)&&(this._$AH=e);else{let i,n;let a=e;for(e=r[0],i=0;i<r.length-1;i++)(n=sb(this,a[s+i],t,i))===sp&&(n=this._$AH[i]),o||=!t8(n)||n!==this._$AH[i],n===su?e=su:e!==su&&(e+=(n??"")+r[i+1]),this._$AH[i]=n}o&&!i&&this.j(e)}j(e){e===su?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},sx=class extends sw{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===su?void 0:e}},sA=class extends sw{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==su)}},sk=class extends sw{constructor(e,t,s,i,r){super(e,t,s,i,r),this.type=5}_$AI(e,t=this){if((e=sb(this,e,t,0)??su)===sp)return;let s=this._$AH,i=e===su&&s!==su||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==su&&(s===su||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},sC=class{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){sb(this,e)}},sE=tQ.litHtmlPolyfillSupport;sE?.(sm,s$),(tQ.litHtmlVersions??=[]).push("3.1.3");var sS=globalThis,sM=sS.ShadowRoot&&(void 0===sS.ShadyCSS||sS.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,sz=Symbol(),sF=new WeakMap,sD=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==sz)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(sM&&void 0===e){let s=void 0!==t&&1===t.length;s&&(e=sF.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&sF.set(t,e))}return e}toString(){return this.cssText}},sT=e=>new sD("string"==typeof e?e:e+"",void 0,sz),sL=(e,...t)=>new sD(1===e.length?e[0]:t.reduce((t,s,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[i+1],e[0]),e,sz),sW=(e,t)=>{if(sM)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let s of t){let t=document.createElement("style"),i=sS.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=s.cssText,e.appendChild(t)}},sN=sM?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let s of e.cssRules)t+=s.cssText;return sT(t)})(e):e,{is:sP,defineProperty:sO,getOwnPropertyDescriptor:sR,getOwnPropertyNames:sH,getOwnPropertySymbols:sU,getPrototypeOf:sV}=Object,sI=globalThis,sB=sI.trustedTypes,sj=sB?sB.emptyScript:"",sY=sI.reactiveElementPolyfillSupport,sG=(e,t)=>e,sq={toAttribute(e,t){switch(t){case Boolean:e=e?sj:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=null!==e;break;case Number:s=null===e?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch(e){s=null}}return s}},sK=(e,t)=>!sP(e,t),sZ={attribute:!0,type:String,converter:sq,reflect:!1,hasChanged:sK};Symbol.metadata??=Symbol("metadata"),sI.litPropertyMetadata??=new WeakMap;var sX=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=sZ){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(e,s,t);void 0!==i&&sO(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){let{get:i,set:r}=sR(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return i?.call(this)},set(t){let o=i?.call(this);r.call(this,t),this.requestUpdate(e,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??sZ}static _$Ei(){if(this.hasOwnProperty(sG("elementProperties")))return;let e=sV(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(sG("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(sG("properties"))){let e=this.properties;for(let t of[...sH(e),...sU(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,s]of t)this.elementProperties.set(e,s)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let s=this._$Eu(e,t);void 0!==s&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let s of new Set(e.flat(1/0).reverse()))t.unshift(sN(s));else void 0!==e&&t.push(sN(e));return t}static _$Eu(e,t){let s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return sW(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EC(e,t){let s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(void 0!==i&&!0===s.reflect){let r=(void 0!==s.converter?.toAttribute?s.converter:sq).toAttribute(t,s.type);this._$Em=e,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(e,t){let s=this.constructor,i=s._$Eh.get(e);if(void 0!==i&&this._$Em!==i){let e=s.getPropertyOptions(i),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:sq;this._$Em=i,this[i]=r.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,s){if(void 0!==e){if(!((s??=this.constructor.getPropertyOptions(e)).hasChanged??sK)(this[e],t))return;this.P(e,t,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,s){this._$AL.has(e)||this._$AL.set(e,t),!0===s.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,s]of e)!0!==s.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],s)}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(e){}firstUpdated(e){}};sX.elementStyles=[],sX.shadowRootOptions={mode:"open"},sX[sG("elementProperties")]=new Map,sX[sG("finalized")]=new Map,sY?.({ReactiveElement:sX}),(sI.reactiveElementVersions??=[]).push("2.0.4");var sJ=globalThis,sQ=sJ.trustedTypes,s0=sQ?sQ.createPolicy("lit-html",{createHTML:e=>e}):void 0,s1="$lit$",s2=`lit$${Math.random().toFixed(9).slice(2)}$`,s5="?"+s2,s3=`<${s5}>`,s6=document,s4=()=>s6.createComment(""),s7=e=>null===e||"object"!=typeof e&&"function"!=typeof e,s8=Array.isArray,s9=e=>s8(e)||"function"==typeof e?.[Symbol.iterator],ie="[ 	\n\f\r]",it=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,is=/-->/g,ii=/>/g,ir=RegExp(`>|${ie}(?:([^\\s"'>=/]+)(${ie}*=${ie}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),io=/'/g,ia=/"/g,il=/^(?:script|style|textarea|title)$/i,id=e=>(t,...s)=>({_$litType$:e,strings:t,values:s}),ih=id(1);id(2);var ic=Symbol.for("lit-noChange"),ip=Symbol.for("lit-nothing"),iu=new WeakMap,ig=s6.createTreeWalker(s6,129);function iy(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s0?s0.createHTML(t):t}var iv=(e,t)=>{let s=e.length-1,i=[],r,o=2===t?"<svg>":"",n=it;for(let t=0;t<s;t++){let s=e[t],a,l,d=-1,h=0;for(;h<s.length&&(n.lastIndex=h,null!==(l=n.exec(s)));)h=n.lastIndex,n===it?"!--"===l[1]?n=is:void 0!==l[1]?n=ii:void 0!==l[2]?(il.test(l[2])&&(r=RegExp("</"+l[2],"g")),n=ir):void 0!==l[3]&&(n=ir):n===ir?">"===l[0]?(n=r??it,d=-1):void 0===l[1]?d=-2:(d=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?ir:'"'===l[3]?ia:io):n===ia||n===io?n=ir:n===is||n===ii?n=it:(n=ir,r=void 0);let c=n===ir&&e[t+1].startsWith("/>")?" ":"";o+=n===it?s+s3:d>=0?(i.push(a),s.slice(0,d)+s1+s.slice(d)+s2+c):s+s2+(-2===d?t:c)}return[iy(e,o+(e[s]||"<?>")+(2===t?"</svg>":"")),i]},im=class e{constructor({strings:t,_$litType$:s},i){let r;this.parts=[];let o=0,n=0,a=t.length-1,l=this.parts,[d,h]=iv(t,s);if(this.el=e.createElement(d,i),ig.currentNode=this.el.content,2===s){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=ig.nextNode())&&l.length<a;){if(1===r.nodeType){if(r.hasAttributes())for(let e of r.getAttributeNames())if(e.endsWith(s1)){let t=h[n++],s=r.getAttribute(e).split(s2),i=/([.?@])?(.*)/.exec(t);l.push({type:1,index:o,name:i[2],strings:s,ctor:"."===i[1]?ix:"?"===i[1]?iA:"@"===i[1]?ik:iw}),r.removeAttribute(e)}else e.startsWith(s2)&&(l.push({type:6,index:o}),r.removeAttribute(e));if(il.test(r.tagName)){let e=r.textContent.split(s2),t=e.length-1;if(t>0){r.textContent=sQ?sQ.emptyScript:"";for(let s=0;s<t;s++)r.append(e[s],s4()),ig.nextNode(),l.push({type:2,index:++o});r.append(e[t],s4())}}}else if(8===r.nodeType){if(r.data===s5)l.push({type:2,index:o});else{let e=-1;for(;-1!==(e=r.data.indexOf(s2,e+1));)l.push({type:7,index:o}),e+=s2.length-1}}o++}}static createElement(e,t){let s=s6.createElement("template");return s.innerHTML=e,s}};function ib(e,t,s=e,i){if(t===ic)return t;let r=void 0!==i?s._$Co?.[i]:s._$Cl,o=s7(t)?void 0:t._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(e))._$AT(e,s,i),void 0!==i?(s._$Co??=[])[i]=r:s._$Cl=r),void 0!==r&&(t=ib(e,r._$AS(e,t.values),r,i)),t}var i_=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:s}=this._$AD,i=(e?.creationScope??s6).importNode(t,!0);ig.currentNode=i;let r=ig.nextNode(),o=0,n=0,a=s[0];for(;void 0!==a;){if(o===a.index){let t;2===a.type?t=new i$(r,r.nextSibling,this,e):1===a.type?t=new a.ctor(r,a.name,a.strings,this,e):6===a.type&&(t=new iC(r,this,e)),this._$AV.push(t),a=s[++n]}o!==a?.index&&(r=ig.nextNode(),o++)}return ig.currentNode=s6,i}p(e){let t=0;for(let s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}},i$=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=ip,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){s7(e=ib(this,e,t))?e===ip||null==e||""===e?(this._$AH!==ip&&this._$AR(),this._$AH=ip):e!==this._$AH&&e!==ic&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):s9(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==ip&&s7(this._$AH)?this._$AA.nextSibling.data=e:this.T(s6.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:s}=e,i="number"==typeof s?this._$AC(e):(void 0===s.el&&(s.el=im.createElement(iy(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(t);else{let e=new i_(i,this),s=e.u(this.options);e.p(t),this.T(s),this._$AH=e}}_$AC(e){let t=iu.get(e.strings);return void 0===t&&iu.set(e.strings,t=new im(e)),t}k(t){s8(this._$AH)||(this._$AH=[],this._$AR());let s=this._$AH,i,r=0;for(let o of t)r===s.length?s.push(i=new e(this.S(s4()),this.S(s4()),this,this.options)):i=s[r],i._$AI(o),r++;r<s.length&&(this._$AR(i&&i._$AB.nextSibling,r),s.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}},iw=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,r){this.type=1,this._$AH=ip,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=ip}_$AI(e,t=this,s,i){let r=this.strings,o=!1;if(void 0===r)(o=!s7(e=ib(this,e,t,0))||e!==this._$AH&&e!==ic)&&(this._$AH=e);else{let i,n;let a=e;for(e=r[0],i=0;i<r.length-1;i++)(n=ib(this,a[s+i],t,i))===ic&&(n=this._$AH[i]),o||=!s7(n)||n!==this._$AH[i],n===ip?e=ip:e!==ip&&(e+=(n??"")+r[i+1]),this._$AH[i]=n}o&&!i&&this.j(e)}j(e){e===ip?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},ix=class extends iw{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ip?void 0:e}},iA=class extends iw{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==ip)}},ik=class extends iw{constructor(e,t,s,i,r){super(e,t,s,i,r),this.type=5}_$AI(e,t=this){if((e=ib(this,e,t,0)??ip)===ic)return;let s=this._$AH,i=e===ip&&s!==ip||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==ip&&(s===ip||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},iC=class{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){ib(this,e)}},iE=sJ.litHtmlPolyfillSupport;iE?.(im,i$),(sJ.litHtmlVersions??=[]).push("3.1.3");var iS=(e,t,s)=>{let i=s?.renderBefore??t,r=i._$litPart$;if(void 0===r){let e=s?.renderBefore??null;i._$litPart$=r=new i$(t.insertBefore(s4(),e),e,void 0,s??{})}return r._$AI(e),r},iM=class extends sX{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=iS(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ic}};iM._$litElement$=!0,iM.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:iM});var iz=globalThis.litElementPolyfillSupport;iz?.({LitElement:iM}),(globalThis.litElementVersions??=[]).push("4.0.5");var iF=e=>(t,s)=>{void 0!==s?s.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},iD={attribute:!0,type:String,converter:tK,reflect:!1,hasChanged:tZ},iT=(e=iD,t,s)=>{let{kind:i,metadata:r}=s,o=globalThis.litPropertyMetadata.get(r);if(void 0===o&&globalThis.litPropertyMetadata.set(r,o=new Map),o.set(s.name,e),"accessor"===i){let{name:i}=s;return{set(s){let r=t.get.call(this);t.set.call(this,s),this.requestUpdate(i,r,e)},init(t){return void 0!==t&&this.P(i,void 0,e),t}}}if("setter"===i){let{name:i}=s;return function(s){let r=this[i];t.call(this,s),this.requestUpdate(i,r,e)}}throw Error("Unsupported decorator location: "+i)};function iL(e){return(t,s)=>"object"==typeof s?iT(e,t,s):((e,t,s)=>{let i=t.hasOwnProperty(s);return t.constructor.createProperty(s,i?{...e,wrapped:!0}:e),i?Object.getOwnPropertyDescriptor(t,s):void 0})(e,t,s)}function iW(e){return iL({...e,state:!0,attribute:!1})}var iN=(e,t,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,s),s);function iP(e,t){return(s,i,r)=>{let o=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}="object"==typeof i?s:r??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return iN(s,i,{get(){let s=e.call(this);return void 0===s&&(null!==(s=o(this))||this.hasUpdated)&&t.call(this,s),s}})}return iN(s,i,{get(){return o(this)}})}}function iO(e){return(t,s)=>iN(t,s,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(e)??null}})}function iR(e,t,s){return e?t(e):s?.(e)}var iH={ATTRIBUTE:1,CHILD:2,ELEMENT:6},iU=e=>(...t)=>({_$litDirective$:e,values:t}),iV=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},iI=iU(class extends iV{constructor(e){if(super(e),e.type!==iH.ATTRIBUTE||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){for(let s in this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[s]&&!this.nt?.has(s)&&this.st.add(s);return this.render(t)}let s=e.element.classList;for(let e of this.st)e in t||(s.remove(e),this.st.delete(e));for(let e in t){let i=!!t[e];i===this.st.has(e)||this.nt?.has(e)||(i?(s.add(e),this.st.add(e)):(s.remove(e),this.st.delete(e)))}return sp}}),iB=class{constructor(e){this.#e=!ij(),this.#t=[],this.#s=new Map,this.#i=new Map,this.host=e,this.host.addController(this)}#e;#t;#s;#i;hostConnected(){this.host.shadowRoot&&0===this.#t.length&&(this.#t=[...this.host.shadowRoot.adoptedStyleSheets||[]])}inject(e,t){let s=Array.isArray(t)?t.map(e=>e.toString()).join(""):t.toString();this.#e?this.#r(e,s):this.#o(e,s)}clearAll(){this.#e?(this.#i.forEach(e=>e.remove()),this.host.shadowRoot?.querySelectorAll("style").forEach(e=>e.innerHTML=""),this.#i.clear()):this.host.shadowRoot&&(this.host.shadowRoot.adoptedStyleSheets=[],this.#s.clear(),this.#t=[])}#r(e,t){let s=this.#i.get(e);s||(s=document.createElement("style"),this.#i.set(e,s)),s.textContent=t,this.host.shadowRoot?.appendChild(s)}#o(e,t){if(!this.host.shadowRoot)return;let s=this.#s.get(e);s||(s=new CSSStyleSheet,this.#s.set(e,s)),s.replaceSync(t),this.host.shadowRoot.adoptedStyleSheets=[...this.#t,...Array.from(this.#s.values())]}};function ij(){try{return new CSSStyleSheet,!0}catch{return!1}}var iY="-gdsvsuffix",iG=new Map,iq=e=>{if(globalThis.GDS_DISABLE_VERSIONED_ELEMENTS)return iG.set(e,e),iF(e);let t=e+iY;return(iG.set(e,t),customElements.get(t))?e=>!1:iF(t)},iK=new WeakMap,iZ=e=>e.map(e=>{for(let[t,s]of iG.entries())e=e.replace(RegExp(`${t}(?![-a-z])`,"mg"),s);return e}),iX=function(e){return(t,...s)=>{if(globalThis.GDS_DISABLE_VERSIONED_ELEMENTS)return e(t,...s);let[i,...r]=function(e,...t){let s=iK.get(e);return s||((s=iZ(e)).raw=iZ(e.raw),iK.set(e,s)),[s,...t]}(t,...s);return e(i,...r)}}(ih);!function(e){!function(t){var s="object"==typeof global?global:"object"==typeof self?self:"object"==typeof this?this:Function("return this;")(),i=r(e);function r(e,t){return function(s,i){"function"!=typeof e[s]&&Object.defineProperty(e,s,{configurable:!0,writable:!0,value:i}),t&&t(s,i)}}void 0===s.Reflect?s.Reflect=e:i=r(s.Reflect,i),t(i)}(function(e){var t=Object.prototype.hasOwnProperty,s="function"==typeof Symbol,i=s&&void 0!==Symbol.toPrimitive?Symbol.toPrimitive:"@@toPrimitive",r=s&&void 0!==Symbol.iterator?Symbol.iterator:"@@iterator",o="function"==typeof Object.create,n=({__proto__:[]})instanceof Array,a=!o&&!n,l={create:o?function(){return M(Object.create(null))}:n?function(){return M({__proto__:null})}:function(){return M({})},has:a?function(e,s){return t.call(e,s)}:function(e,t){return t in e},get:a?function(e,s){return t.call(e,s)?e[s]:void 0}:function(e,t){return e[t]}},d=Object.getPrototypeOf(Function),h="object"==typeof process&&process.env&&"true"===process.env.REFLECT_METADATA_USE_MAP_POLYFILL,c=h||"function"!=typeof Map||"function"!=typeof Map.prototype.entries?function(){var e={},t=[],s=function(){function e(e,t,s){this._index=0,this._keys=e,this._values=t,this._selector=s}return e.prototype["@@iterator"]=function(){return this},e.prototype[r]=function(){return this},e.prototype.next=function(){var e=this._index;if(e>=0&&e<this._keys.length){var s=this._selector(this._keys[e],this._values[e]);return e+1>=this._keys.length?(this._index=-1,this._keys=t,this._values=t):this._index++,{value:s,done:!1}}return{value:void 0,done:!0}},e.prototype.throw=function(e){throw this._index>=0&&(this._index=-1,this._keys=t,this._values=t),e},e.prototype.return=function(e){return this._index>=0&&(this._index=-1,this._keys=t,this._values=t),{value:e,done:!0}},e}();return function(){function t(){this._keys=[],this._values=[],this._cacheKey=e,this._cacheIndex=-2}return Object.defineProperty(t.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),t.prototype.has=function(e){return this._find(e,!1)>=0},t.prototype.get=function(e){var t=this._find(e,!1);return t>=0?this._values[t]:void 0},t.prototype.set=function(e,t){var s=this._find(e,!0);return this._values[s]=t,this},t.prototype.delete=function(t){var s=this._find(t,!1);if(s>=0){for(var i=this._keys.length,r=s+1;r<i;r++)this._keys[r-1]=this._keys[r],this._values[r-1]=this._values[r];return this._keys.length--,this._values.length--,t===this._cacheKey&&(this._cacheKey=e,this._cacheIndex=-2),!0}return!1},t.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=e,this._cacheIndex=-2},t.prototype.keys=function(){return new s(this._keys,this._values,i)},t.prototype.values=function(){return new s(this._keys,this._values,o)},t.prototype.entries=function(){return new s(this._keys,this._values,n)},t.prototype["@@iterator"]=function(){return this.entries()},t.prototype[r]=function(){return this.entries()},t.prototype._find=function(e,t){return this._cacheKey!==e&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=e)),this._cacheIndex<0&&t&&(this._cacheIndex=this._keys.length,this._keys.push(e),this._values.push(void 0)),this._cacheIndex},t}();function i(e,t){return e}function o(e,t){return t}function n(e,t){return[e,t]}}():Map,p=h||"function"!=typeof Set||"function"!=typeof Set.prototype.entries?function(){function e(){this._map=new c}return Object.defineProperty(e.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),e.prototype.has=function(e){return this._map.has(e)},e.prototype.add=function(e){return this._map.set(e,e),this},e.prototype.delete=function(e){return this._map.delete(e)},e.prototype.clear=function(){this._map.clear()},e.prototype.keys=function(){return this._map.keys()},e.prototype.values=function(){return this._map.values()},e.prototype.entries=function(){return this._map.entries()},e.prototype["@@iterator"]=function(){return this.keys()},e.prototype[r]=function(){return this.keys()},e}():Set,u=new(h||"function"!=typeof WeakMap?function(){var e=l.create(),s=i();return function(){function e(){this._key=i()}return e.prototype.has=function(e){var t=r(e,!1);return void 0!==t&&l.has(t,this._key)},e.prototype.get=function(e){var t=r(e,!1);return void 0!==t?l.get(t,this._key):void 0},e.prototype.set=function(e,t){return r(e,!0)[this._key]=t,this},e.prototype.delete=function(e){var t=r(e,!1);return void 0!==t&&delete t[this._key]},e.prototype.clear=function(){this._key=i()},e}();function i(){var t;do t="@@WeakMap@@"+function(){var e="function"==typeof Uint8Array?"undefined"!=typeof crypto?crypto.getRandomValues(new Uint8Array(16)):"undefined"!=typeof msCrypto?msCrypto.getRandomValues(new Uint8Array(16)):o(new Uint8Array(16),16):o(Array(16),16);e[6]=79&e[6]|64,e[8]=191&e[8]|128;for(var t="",s=0;s<16;++s){var i=e[s];(4===s||6===s||8===s)&&(t+="-"),i<16&&(t+="0"),t+=i.toString(16).toLowerCase()}return t}();while(l.has(e,t));return e[t]=!0,t}function r(e,i){if(!t.call(e,s)){if(!i)return;Object.defineProperty(e,s,{value:l.create()})}return e[s]}function o(e,t){for(var s=0;s<t;++s)e[s]=255*Math.random()|0;return e}}():WeakMap);function g(e,t,s){var i=u.get(e);if(_(i)){if(!s)return;i=new c,u.set(e,i)}var r=i.get(t);if(_(r)){if(!s)return;r=new c,i.set(t,r)}return r}function f(e,t,s){var i=g(t,s,!1);return!_(i)&&!!i.has(e)}function y(e,t,s){var i=g(t,s,!1);if(!_(i))return i.get(e)}function v(e,t,s,i){g(s,i,!0).set(e,t)}function m(e,t){var s=[],i=g(e,t,!1);if(_(i))return s;for(var o=function(e){var t=E(e,r);if(!k(t))throw TypeError();var s=t.call(e);if(!w(s))throw TypeError();return s}(i.keys()),n=0;;){var a=function(e){var t=e.next();return!t.done&&t}(o);if(!a)return s.length=n,s;var l=a.value;try{s[n]=l}catch(e){try{!function(e){var t=e.return;t&&t.call(e)}(o)}finally{throw e}}n++}}function b(e){if(null===e)return 1;switch(typeof e){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return null===e?1:6;default:return 6}}function _(e){return void 0===e}function $(e){return null===e}function w(e){return"object"==typeof e?null!==e:"function"==typeof e}function x(e){var t=function(e,t){switch(b(e)){case 0:case 1:case 2:case 3:case 4:case 5:return e}var s=3===t?"string":5===t?"number":"default",r=E(e,i);if(void 0!==r){var o=r.call(e,s);if(w(o))throw TypeError();return o}return function(e,t){if("string"===t){var s=e.toString;if(k(s)){var i=s.call(e);if(!w(i))return i}var r=e.valueOf;if(k(r)){var i=r.call(e);if(!w(i))return i}}else{var r=e.valueOf;if(k(r)){var i=r.call(e);if(!w(i))return i}var o=e.toString;if(k(o)){var i=o.call(e);if(!w(i))return i}}throw TypeError()}(e,"default"===s?"number":s)}(e,3);return"symbol"==typeof t?t:""+t}function A(e){return Array.isArray?Array.isArray(e):e instanceof Object?e instanceof Array:"[object Array]"===Object.prototype.toString.call(e)}function k(e){return"function"==typeof e}function C(e){return"function"==typeof e}function E(e,t){var s=e[t];if(null!=s){if(!k(s))throw TypeError();return s}}function S(e){var t=Object.getPrototypeOf(e);if("function"!=typeof e||e===d||t!==d)return t;var s=e.prototype,i=s&&Object.getPrototypeOf(s);if(null==i||i===Object.prototype)return t;var r=i.constructor;return"function"!=typeof r||r===e?t:r}function M(e){return e.__=void 0,delete e.__,e}e("decorate",function(e,t,s,i){if(_(s)){if(!A(e)||!C(t))throw TypeError();return function(e,t){for(var s=e.length-1;s>=0;--s){var i=(0,e[s])(t);if(!_(i)&&!$(i)){if(!C(i))throw TypeError();t=i}}return t}(e,t)}if(!A(e)||!w(t)||!w(i)&&!_(i)&&!$(i))throw TypeError();return $(i)&&(i=void 0),function(e,t,s,i){for(var r=e.length-1;r>=0;--r){var o=(0,e[r])(t,s,i);if(!_(o)&&!$(o)){if(!w(o))throw TypeError();i=o}}return i}(e,t,s=x(s),i)}),e("metadata",function(e,t){return function(s,i){if(!w(s)||!_(i)&&!function(e){switch(b(e)){case 3:case 4:return!0;default:return!1}}(i))throw TypeError();v(e,t,s,i)}}),e("defineMetadata",function(e,t,s,i){if(!w(s))throw TypeError();return _(i)||(i=x(i)),v(e,t,s,i)}),e("hasMetadata",function(e,t,s){if(!w(t))throw TypeError();return _(s)||(s=x(s)),function e(t,s,i){if(f(t,s,i))return!0;var r=S(s);return!$(r)&&e(t,r,i)}(e,t,s)}),e("hasOwnMetadata",function(e,t,s){if(!w(t))throw TypeError();return _(s)||(s=x(s)),f(e,t,s)}),e("getMetadata",function(e,t,s){if(!w(t))throw TypeError();return _(s)||(s=x(s)),function e(t,s,i){if(f(t,s,i))return y(t,s,i);var r=S(s);if(!$(r))return e(t,r,i)}(e,t,s)}),e("getOwnMetadata",function(e,t,s){if(!w(t))throw TypeError();return _(s)||(s=x(s)),y(e,t,s)}),e("getMetadataKeys",function(e,t){if(!w(e))throw TypeError();return _(t)||(t=x(t)),function e(t,s){var i=m(t,s),r=S(t);if(null===r)return i;var o=e(r,s);if(o.length<=0)return i;if(i.length<=0)return o;for(var n=new p,a=[],l=0;l<i.length;l++){var d=i[l],h=n.has(d);h||(n.add(d),a.push(d))}for(var c=0;c<o.length;c++){var d=o[c],h=n.has(d);h||(n.add(d),a.push(d))}return a}(e,t)}),e("getOwnMetadataKeys",function(e,t){if(!w(e))throw TypeError();return _(t)||(t=x(t)),m(e,t)}),e("deleteMetadata",function(e,t,s){if(!w(t))throw TypeError();_(s)||(s=x(s));var i=g(t,s,!1);if(_(i)||!i.delete(e))return!1;if(i.size>0)return!0;var r=u.get(t);return r.delete(s),r.size>0||(u.delete(t),!0)})})}(s||(s={}));var iJ=class extends iM{constructor(){super(),this.gdsElementName="",this._isUsingTransitionalStyles=!1,this._dynamicStylesController=new iB(this)}connectedCallback(){var e;super.connectedCallback(),this.gdsElementName=(e=this.tagName.toLowerCase(),[...iG.entries()].find(([,t])=>t===e)?.[0]||this.gdsElementName),this.setAttribute("gds-element",this.gdsElementName)}};tx([iW()],iJ.prototype,"_isUsingTransitionalStyles",2);var iQ=class e{static get instance(){return globalThis.__gdsTransitionalStyles?.[iY]||(globalThis.__gdsTransitionalStyles={...globalThis.__gdsTransitionalStyles,[iY]:new e}),globalThis.__gdsTransitionalStyles[iY]}#n=new Map;#a=new Map;#e=!ij();apply(e,t){if(!e.shadowRoot)return;let s=this.#n.get(t);s&&(this.#a.set(t,e),this.applyToElement(t,s))}applyToElement(e,t){let s=this.#a.get(e);s&&s.shadowRoot&&(s._dynamicStylesController.clearAll(),s._dynamicStylesController.inject("t-styles",sT(t)),s._isUsingTransitionalStyles=!0)}register(e,t){let s=t;this.#e&&(s=`@layer reset {
        *:not(style, [gds-element]) {
          all: revert;
        }
      }
      ${t}`),this.#n.set(e,s),this.applyToElement(e,s)}},i0=sL`
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
`;function i1(e,t){let s={waitUntilFirstUpdate:!1,...t};return(t,i,r)=>{let{update:o}=t,n=Array.isArray(e)?e:[e];t.update=function(e){n.forEach(t=>{if(e.has(t)){let i=e.get(t),o=this[t];i!==o&&(!s.waitUntilFirstUpdate||this.hasUpdated)&&r.value?.call(this,i,o)}}),o.call(this,e)}}}var i2=e=>{class t extends e{constructor(){super(...arguments),this.onblur=e=>{this.setAttribute("tabindex","-1"),this.dispatchEvent(new FocusEvent("gds-blur",{bubbles:!0,composed:!0,relatedTarget:e.relatedTarget}))},this.onfocus=e=>{this.dispatchEvent(new FocusEvent("gds-focus",{bubbles:!0,composed:!0,relatedTarget:e.relatedTarget}))}}focus(e){this.setAttribute("tabindex","0"),super.focus(e)}}return t},i5=class extends i2(iJ){constructor(){super(),tC(this,r),tC(this,i,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",tM(this,r,o)),this.addEventListener("keydown",e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),tM(this,r,o).call(this,e))})}get hidden(){return tk(this,i)}set hidden(e){this.isPlaceholder||(tE(this,i,"true"===e||!0===e),this.setAttribute("aria-hidden",e.toString()))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.isPlaceholder&&(tE(this,i,!0),this.setAttribute("aria-hidden","true")),this.updateComplete.then(()=>iQ.instance.apply(this,"gds-option"))}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?(tE(this,i,!0),this.setAttribute("aria-hidden","true")):(tE(this,i,!1),this.setAttribute("aria-hidden","false"))}render(){let e=this.parentElement?.multiple,t=ih` <span
      class="checkbox ${iI({checked:this.selected})}"
    ></span>`;return e||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),ih`<div>${iR(e,()=>t)} <slot></slot></div>`}};i=new WeakMap,r=new WeakSet,o=function(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}}))},i5.styles=i0,tx([iL()],i5.prototype,"value",2),tx([iL({attribute:"aria-hidden",reflect:!0})],i5.prototype,"hidden",1),tx([iL({attribute:"aria-selected",reflect:!0})],i5.prototype,"selected",2),tx([iL({type:Boolean,reflect:!0})],i5.prototype,"isPlaceholder",2),tx([i1("isplaceholder")],i5.prototype,"_handlePlaceholderStatusChange",1),i5=tx([iq("gds-option")],i5);var i3=sL`
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
`,i6=class extends iJ{connectedCallback(){super.connectedCallback(),this.setAttribute("inert","true"),this.updateComplete.then(()=>iQ.instance.apply(this,"gds-menu-heading"))}render(){return ih`<slot></slot>`}};i6.styles=i3,i6=tx([iq("gds-menu-heading")],i6);var i4=class extends i2(iJ){constructor(){super(...arguments),tC(this,n,()=>{this.dispatchEvent(new CustomEvent("gds-menu-item-click",{bubbles:!0,composed:!0}))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem"),this.addEventListener("keydown",e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),this.click())}),this.addEventListener("click",tk(this,n)),iQ.instance.apply(this,"gds-option")}render(){return iX`<div><slot></slot></div>`}};n=new WeakMap,i4.styles=[i0],i4=tx([iq("gds-menu-item")],i4);var i7=Symbol.for(""),i8=e=>{if(e?.r===i7)return e?._$litStatic$},i9=(e,...t)=>({_$litStatic$:t.reduce((t,s,i)=>t+(e=>{if(void 0!==e._$litStatic$)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(s)+e[i+1],e[0]),r:i7}),re=new Map,rt=e=>(t,...s)=>{let i,r;let o=s.length,n=[],a=[],l,d=0,h=!1;for(;d<o;){for(l=t[d];d<o&&void 0!==(i=i8(r=s[d]));)l+=i+t[++d],h=!0;d!==o&&a.push(r),n.push(l),d++}if(d===o&&n.push(t[o]),h){let e=n.join("$$lit$$");void 0===(t=re.get(e))&&(n.raw=n,re.set(e,t=n)),s=a}return e(t,...s)},rs=rt(sh);rt(sc);var ri=e=>e??su;function rr(e){e.updateComplete.then(()=>{let t=e.shadowRoot?.querySelectorAll("slot[gds-allow]");if(!t)return;for(let t of Array.from(e.childNodes))t.nodeType===Node.TEXT_NODE&&t.textContent?.trim()===""&&t.parentNode?.removeChild(t);let s=e=>{let t=[...e.getAttribute("gds-allow")?.split(" ")||[],"slot"];for(let s of Array.from(e.assignedNodes()))t.includes(s.nodeName.toLowerCase())||s.parentNode?.removeChild(s)};t.forEach(e=>{s(e),e.addEventListener("slotchange",()=>s(e))})})}var ro=iU(class extends iV{constructor(e){if(super(e),e.type!==iH.ELEMENT)throw Error("The `forwardAttributes` directive must be used in element bindings")}render(e){return su}update(e,[t]){let s=e.element;Array.from((e.options?.host).attributes).forEach(e=>{t(e)&&s.setAttribute(e.name.replace("gds-",""),e.value)})}}),rn=`:host {
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
}`,ra=`/**
 * Do not edit directly
 * Generated on Thu, 30 May 2024 13:58:38 GMT
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
`,rl=`/**
 * Do not edit directly
 * Generated on Thu, 30 May 2024 13:58:38 GMT
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
`,rd=`/**
 * Do not edit directly
 * Generated on Thu, 30 May 2024 13:58:38 GMT
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
`,rh=[sT(`/**
 * Do not edit directly
 * Generated on Thu, 30 May 2024 13:58:38 GMT
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
`),sT(ra),sT(rl),sT(rd)],rc=class extends iM{constructor(){super(...arguments),this.onmousedown=e=>{let t=e.target.getBoundingClientRect(),s=this._rippleEl;s&&(s.classList.remove("gds-ripple-effect"),this.style.setProperty("--gds-ripple-top",`${e.clientY-t.top}px`),this.style.setProperty("--gds-ripple-left",`${e.clientX-t.left}px`),setTimeout(()=>{s.classList.add("gds-ripple-effect")},20))}}render(){return ih`<div></div>`}};rc.styles=[rh,sT(rn)],tx([iP("div")],rc.prototype,"_rippleEl",2),rc=tx([iq("gds-ripple")],rc);var rp=`@layer tokens, a11y, core, ranks, sizes, variants, disabled;

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
  .button {
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
    text-decoration: none;
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

  .button slot:not([name]) {
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .button.icon slot {
    display: contents;
  }
}

@layer ranks {
  :host([rank*='secondary']) .button {
    --_color-bg: var(--gds-sys-color-content-content-inverse);
    --_color-text: var(--gds-sys-color-content-content);
    --_color-border: var(--gds-sys-color-stroke-stroke);

    &:active {
      --_state-layer-active: var(--gds-sys-color-state-layers-state-black-dim1);
    }
  }

  :host([rank*='tertiary']) .button {
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

  .button.circle {
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
  :host([size='small']) .button {
    --_padding-inline: var(--gds-sys-space-padding-l);
    --_padding-block: var(--gds-sys-space-padding-s);
    --_size: 2rem;
    font-size: 0.875rem;
  }

  :host([size='medium']) .button {
    --_padding-inline: var(--gds-sys-space-padding-l);
    --_padding-block: var(--gds-sys-space-padding-m);
    --_size: 2.5rem;
  }

  :host([size='large']) .button {
    --_padding-inline: var(--gds-sys-space-padding-xl);
    --_padding-block: var(--gds-sys-space-padding-m);
    --_size: 3rem;
  }
}

@layer variants {
  :host([rank='primary'][variant='positive']) .button {
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

  :host([rank='secondary'][variant='positive']) .button {
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

  :host([rank='tertiary'][variant='positive']) .button {
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

  :host([rank='primary'][variant='negative']) .button {
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

  :host([rank='secondary'][variant='negative']) .button {
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

  :host([rank='tertiary'][variant='negative']) .button {
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
  .button:disabled {
    --_color-bg: var(--gds-sys-color-container-container-disabled);
    border-color: var(--_color-bg);
    color: var(--gds-sys-color-content-content-disabled);
    pointer-events: none;
  }
}
`,ru=new WeakMap,rg=class extends iJ{constructor(){super(),this.invalid=!1,this.name="",this._handleFormReset=()=>{this.value=void 0};try{this.#l=this.attachInternals()}catch(e){this.#l={form:this.closest("form"),setFormValue:e=>{this.value=e},setValidity:(e,t)=>{this.invalid=e.customError},validationMessage:"",validity:{badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},willValidate:!0,checkValidity:()=>!0,reportValidity:()=>!0}}}#l;static{this.formAssociated=!0}get form(){return this.#l.form}get validity(){return this.#l.validity}get validationMessage(){return this.#l.validationMessage}get willValidate(){return this.#l.willValidate}checkValidity(){return this.#l.checkValidity()}reportValidity(){return this.#l.reportValidity()}connectedCallback(){super.connectedCallback(),this.#l.form?.addEventListener("reset",this._handleFormReset)}disconnectedCallback(){super.disconnectedCallback(),this.#l.form?.removeEventListener("reset",this._handleFormReset)}__handleValidityChange(){this.#l.setValidity({badInput:!1,customError:this.invalid,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!this.invalid},this.validationMessage||"Error message")}__handleValueChange(){this.#l.setFormValue(this.value)}};tx([iL({type:Boolean,reflect:!0,attribute:"aria-invalid",converter:{fromAttribute:Boolean,toAttribute:e=>e?.toString()}})],rg.prototype,"invalid",2),tx([iL()],rg.prototype,"value",2),tx([iL({reflect:!0})],rg.prototype,"name",2),tx([i1("invalid")],rg.prototype,"__handleValidityChange",1),tx([i1("value")],rg.prototype,"__handleValueChange",1);var rf=(e,...t)=>{let s=ru.get(e);return s||((s=e.map(e=>e.replace(/\n[\s]+</gm,"<"))).raw=e.raw,ru.set(e,s)),iX(s,...t)},ry=class extends rg{constructor(){super(),tC(this,l),tC(this,h),this.disabled=!1,this.rank="primary",this.variant="neutral",this.size="medium",this.label="",this.href="",tC(this,a,!1),tC(this,p,()=>{let e=this._mainSlot?.assignedNodes()??[];tE(this,a,1===e.length&&e.some(e=>e.nodeName.toLowerCase().startsWith("gds-icon"))),this.requestUpdate()}),tC(this,u,e=>{this.dispatchEvent(new CustomEvent("gds-click",{bubbles:!0,composed:!0,detail:e})),this.form&&!tk(this,l,d)&&("submit"===this.type?this.form.requestSubmit():"reset"===this.type&&this.form.reset())}),rr(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),iQ.instance.apply(this,"gds-button")}render(){let e={button:!0,circle:tk(this,a),icon:tk(this,a),small:"small"===this.size,large:"large"===this.size,positive:"positive"===this.variant,negative:"negative"===this.variant,primary:"primary"===this.rank,secondary:"secondary"===this.rank,tertiary:"tertiary"===this.rank},t=tk(this,l,d)?i9`a`:i9`button`;return rs`
      <${t}
        class=${iI(e)}
        type="${ri(tk(this,l,d)?void 0:this.type)}"
        ?disabled="${this.disabled}"
        aria-label=${this.label||ip}
        href=${ri(tk(this,l,d)?this.href:void 0)}
        target=${ri(tk(this,l,d)?this.target:void 0)}
        rel=${ri(tk(this,l,d)?this.rel||tk(this,h,c):void 0)}
        download=${ri(tk(this,l,d)?this.download:void 0)}
        part="_button"
        @click="${tk(this,u)}"
        ${ro(e=>e.name.startsWith("gds-aria")||"gds-role"===e.name)}
      >
        <slot name="lead"></slot>
        <slot @slotchange=${tk(this,p)}></slot>
        <slot name="trail"></slot>
        ${iR(!this._isUsingTransitionalStyles,()=>rf`<gds-ripple></gds-ripple>`)}
      </${t}>
    `}};a=new WeakMap,l=new WeakSet,d=function(){return this.href.length>0},h=new WeakSet,c=function(){return"_blank"===this.target?"noreferrer noopener":void 0},p=new WeakMap,u=new WeakMap,ry.styles=[rh,sT(rp)],ry.shadowRootOptions={mode:"open",delegatesFocus:!0},tx([iL({type:Boolean,reflect:!0})],ry.prototype,"disabled",2),tx([iL({reflect:!0})],ry.prototype,"type",2),tx([iL({reflect:!0})],ry.prototype,"rank",2),tx([iL({reflect:!0})],ry.prototype,"variant",2),tx([iL({reflect:!0})],ry.prototype,"size",2),tx([iL()],ry.prototype,"label",2),tx([iL()],ry.prototype,"href",2),tx([iL()],ry.prototype,"target",2),tx([iL()],ry.prototype,"rel",2),tx([iL()],ry.prototype,"download",2),tx([iP("slot:not([name])")],ry.prototype,"_mainSlot",2),ry=tx([iq("gds-button")],ry);var rv=(e,...t)=>({strTag:!0,strings:e,values:t}),rm=e=>"string"!=typeof e&&"strTag"in e,rb=(e,t,s)=>{let i=e[0];for(let r=1;r<e.length;r++)i+=t[s?s[r-1]:r-1]+e[r];return i},r_="lit-localize-status",r$=class{constructor(e){this.__litLocalizeEventHandler=e=>{"ready"===e.detail.status&&this.host.requestUpdate()},this.host=e}hostConnected(){window.addEventListener(r_,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(r_,this.__litLocalizeEventHandler)}},rw=e=>e.addController(new r$(e)),rx=class{constructor(){this.settled=!1,this.promise=new Promise((e,t)=>{this._resolve=e,this._reject=t})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}},rA=[];for(let e=0;e<256;e++)rA[e]=(e>>4&15).toString(16)+(15&e).toString(16);new rx().resolve();var rk=e=>rm(e)?rb(e.strings,e.values):e,rC=globalThis,rE=rC.trustedTypes,rS=rE?rE.createPolicy("lit-html",{createHTML:e=>e}):void 0,rM="$lit$",rz=`lit$${(Math.random()+"").slice(9)}$`,rF="?"+rz,rD=`<${rF}>`,rT=document,rL=()=>rT.createComment(""),rW=e=>null===e||"object"!=typeof e&&"function"!=typeof e,rN=Array.isArray,rP=e=>rN(e)||"function"==typeof e?.[Symbol.iterator],rO="[ 	\n\f\r]",rR=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,rH=/-->/g,rU=/>/g,rV=RegExp(`>|${rO}(?:([^\\s"'>=/]+)(${rO}*=${rO}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),rI=/'/g,rB=/"/g,rj=/^(?:script|style|textarea|title)$/i,rY=e=>(t,...s)=>({_$litType$:e,strings:t,values:s}),rG=rY(1);rY(2);var rq=Symbol.for("lit-noChange"),rK=Symbol.for("lit-nothing"),rZ=new WeakMap,rX=rT.createTreeWalker(rT,129);function rJ(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==rS?rS.createHTML(t):t}var rQ=(e,t)=>{let s=e.length-1,i=[],r,o=2===t?"<svg>":"",n=rR;for(let t=0;t<s;t++){let s=e[t],a,l,d=-1,h=0;for(;h<s.length&&(n.lastIndex=h,null!==(l=n.exec(s)));)h=n.lastIndex,n===rR?"!--"===l[1]?n=rH:void 0!==l[1]?n=rU:void 0!==l[2]?(rj.test(l[2])&&(r=RegExp("</"+l[2],"g")),n=rV):void 0!==l[3]&&(n=rV):n===rV?">"===l[0]?(n=r??rR,d=-1):void 0===l[1]?d=-2:(d=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?rV:'"'===l[3]?rB:rI):n===rB||n===rI?n=rV:n===rH||n===rU?n=rR:(n=rV,r=void 0);let c=n===rV&&e[t+1].startsWith("/>")?" ":"";o+=n===rR?s+rD:d>=0?(i.push(a),s.slice(0,d)+rM+s.slice(d)+rz+c):s+rz+(-2===d?t:c)}return[rJ(e,o+(e[s]||"<?>")+(2===t?"</svg>":"")),i]},r0=class e{constructor({strings:t,_$litType$:s},i){let r;this.parts=[];let o=0,n=0,a=t.length-1,l=this.parts,[d,h]=rQ(t,s);if(this.el=e.createElement(d,i),rX.currentNode=this.el.content,2===s){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=rX.nextNode())&&l.length<a;){if(1===r.nodeType){if(r.hasAttributes())for(let e of r.getAttributeNames())if(e.endsWith(rM)){let t=h[n++],s=r.getAttribute(e).split(rz),i=/([.?@])?(.*)/.exec(t);l.push({type:1,index:o,name:i[2],strings:s,ctor:"."===i[1]?r6:"?"===i[1]?r4:"@"===i[1]?r7:r3}),r.removeAttribute(e)}else e.startsWith(rz)&&(l.push({type:6,index:o}),r.removeAttribute(e));if(rj.test(r.tagName)){let e=r.textContent.split(rz),t=e.length-1;if(t>0){r.textContent=rE?rE.emptyScript:"";for(let s=0;s<t;s++)r.append(e[s],rL()),rX.nextNode(),l.push({type:2,index:++o});r.append(e[t],rL())}}}else if(8===r.nodeType){if(r.data===rF)l.push({type:2,index:o});else{let e=-1;for(;-1!==(e=r.data.indexOf(rz,e+1));)l.push({type:7,index:o}),e+=rz.length-1}}o++}}static createElement(e,t){let s=rT.createElement("template");return s.innerHTML=e,s}};function r1(e,t,s=e,i){if(t===rq)return t;let r=void 0!==i?s._$Co?.[i]:s._$Cl,o=rW(t)?void 0:t._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(e))._$AT(e,s,i),void 0!==i?(s._$Co??=[])[i]=r:s._$Cl=r),void 0!==r&&(t=r1(e,r._$AS(e,t.values),r,i)),t}var r2=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:s}=this._$AD,i=(e?.creationScope??rT).importNode(t,!0);rX.currentNode=i;let r=rX.nextNode(),o=0,n=0,a=s[0];for(;void 0!==a;){if(o===a.index){let t;2===a.type?t=new r5(r,r.nextSibling,this,e):1===a.type?t=new a.ctor(r,a.name,a.strings,this,e):6===a.type&&(t=new r8(r,this,e)),this._$AV.push(t),a=s[++n]}o!==a?.index&&(r=rX.nextNode(),o++)}return rX.currentNode=rT,i}p(e){let t=0;for(let s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}},r5=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=rK,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){rW(e=r1(this,e,t))?e===rK||null==e||""===e?(this._$AH!==rK&&this._$AR(),this._$AH=rK):e!==this._$AH&&e!==rq&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):rP(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==rK&&rW(this._$AH)?this._$AA.nextSibling.data=e:this.$(rT.createTextNode(e)),this._$AH=e}g(e){let{values:t,_$litType$:s}=e,i="number"==typeof s?this._$AC(e):(void 0===s.el&&(s.el=r0.createElement(rJ(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(t);else{let e=new r2(i,this),s=e.u(this.options);e.p(t),this.$(s),this._$AH=e}}_$AC(e){let t=rZ.get(e.strings);return void 0===t&&rZ.set(e.strings,t=new r0(e)),t}T(t){rN(this._$AH)||(this._$AH=[],this._$AR());let s=this._$AH,i,r=0;for(let o of t)r===s.length?s.push(i=new e(this.k(rL()),this.k(rL()),this,this.options)):i=s[r],i._$AI(o),r++;r<s.length&&(this._$AR(i&&i._$AB.nextSibling,r),s.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}},r3=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,r){this.type=1,this._$AH=rK,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=rK}_$AI(e,t=this,s,i){let r=this.strings,o=!1;if(void 0===r)(o=!rW(e=r1(this,e,t,0))||e!==this._$AH&&e!==rq)&&(this._$AH=e);else{let i,n;let a=e;for(e=r[0],i=0;i<r.length-1;i++)(n=r1(this,a[s+i],t,i))===rq&&(n=this._$AH[i]),o||=!rW(n)||n!==this._$AH[i],n===rK?e=rK:e!==rK&&(e+=(n??"")+r[i+1]),this._$AH[i]=n}o&&!i&&this.O(e)}O(e){e===rK?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},r6=class extends r3{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===rK?void 0:e}},r4=class extends r3{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==rK)}},r7=class extends r3{constructor(e,t,s,i,r){super(e,t,s,i,r),this.type=5}_$AI(e,t=this){if((e=r1(this,e,t,0)??rK)===rq)return;let s=this._$AH,i=e===rK&&s!==rK||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==rK&&(s===rK||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},r8=class{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){r1(this,e)}},r9=rC.litHtmlPolyfillSupport;r9?.(r0,r5),(rC.litHtmlVersions??=[]).push("3.1.0");var oe=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},ot=(e=class extends oe{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.it){for(let s in this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[s]&&!this.st?.has(s)&&this.it.add(s);return this.render(t)}let s=e.element.classList;for(let e of this.it)e in t||(s.remove(e),this.it.delete(e));for(let e in t){let i=!!t[e];i===this.it.has(e)||this.st?.has(e)||(i?(s.add(e),this.it.add(e)):(s.remove(e),this.it.delete(e)))}return rq}},(...t)=>({_$litDirective$:e,values:t})),os=sL`
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
`,{I:oi}={P:t2,A:t5,C:t3,M:1,L:sv,R:s_,D:se,V:sb,I:s$,H:sw,N:sA,U:sk,B:sx,F:sC},or=e=>null===e||"object"!=typeof e&&"function"!=typeof e,oo=e=>void 0===e.strings,on=()=>document.createComment(""),oa=(e,t,s)=>{let i=e._$AA.parentNode,r=void 0===t?e._$AB:t._$AA;if(void 0===s)s=new oi(i.insertBefore(on(),r),i.insertBefore(on(),r),e,e.options);else{let t=s._$AB.nextSibling,o=s._$AM,n=o!==e;if(n){let t;s._$AQ?.(e),s._$AM=e,void 0!==s._$AP&&(t=e._$AU)!==o._$AU&&s._$AP(t)}if(t!==r||n){let e=s._$AA;for(;e!==t;){let t=e.nextSibling;i.insertBefore(e,r),e=t}}}return s},ol=(e,t,s=e)=>(e._$AI(t,s),e),od={},oh=(e,t=od)=>e._$AH=t,oc=e=>e._$AH,op=e=>{e._$AP?.(!1,!0);let t=e._$AA,s=e._$AB.nextSibling;for(;t!==s;){let e=t.nextSibling;t.remove(),t=e}},ou=(e,t)=>{let s=e._$AN;if(void 0===s)return!1;for(let e of s)e._$AO?.(t,!1),ou(e,t);return!0},og=e=>{let t,s;do{if(void 0===(t=e._$AM))break;(s=t._$AN).delete(e),e=t}while(0===s?.size)},of=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(void 0===s)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),om(t)}};function oy(e){void 0!==this._$AN?(og(this),this._$AM=e,of(this)):this._$AM=e}function ov(e,t=!1,s=0){let i=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size){if(t){if(Array.isArray(i))for(let e=s;e<i.length;e++)ou(i[e],!1),og(i[e]);else null!=i&&(ou(i,!1),og(i))}else ou(this,e)}}var om=e=>{e.type==iH.CHILD&&(e._$AP??=ov,e._$AQ??=oy)},ob=class extends iV{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,s){super._$AT(e,t,s),of(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(ou(this,e),og(this))}setValue(e){if(oo(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},o_=()=>new o$,o$=class{},ow=new WeakMap,ox=iU(class extends ob{render(e){return su}update(e,[t]){let s=t!==this.Y;return s&&void 0!==this.Y&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.Y=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),su}rt(e){if("function"==typeof this.Y){let t=this.ht??globalThis,s=ow.get(t);void 0===s&&(s=new WeakMap,ow.set(t,s)),void 0!==s.get(this.Y)&&this.Y.call(this.ht,void 0),s.set(this.Y,e),void 0!==e&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){return"function"==typeof this.Y?ow.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),oA=class{constructor(e){this.#d=e=>{let t=e.target;if(!this.host.navigableItems.includes(t))return;let s=!1;if("ArrowDown"===e.key){let e=this.host.navigableItems.indexOf(t)+1,i=this.host.navigableItems[e];i?.focus(),s=!0}else if("ArrowUp"===e.key){let e=this.host.navigableItems.indexOf(t)-1,i=this.host.navigableItems[e];i?.focus(),s=!0}else if("Home"===e.key)this.host.navigableItems[0]?.focus(),s=!0;else if("End"===e.key)this.host.navigableItems[this.host.navigableItems.length-1]?.focus(),s=!0;else{let t=e.key.toLowerCase();if(1!==t.length)return;if(t>="a"&&t<="z"||t>="0"&&t<="9"){let e=this.host.navigableItems.find(e=>{let s=e.textContent?.trim().toLowerCase();return s?.startsWith(t)});e?.focus(),s=!0}}s&&(e.preventDefault(),e.stopPropagation())},(this.host=e).addController(this)}hostConnected(){this.host.addEventListener("keydown",this.#d)}hostDisconnected(){this.host.removeEventListener("keydown",this.#d)}#d};function ok(e){let t=e;for(;t.assignedElements().length>0&&"SLOT"===t.assignedElements()[0].nodeName;)t=t.assignedElements()[0];return t}var oC=class extends iJ{constructor(){super(),tC(this,g,o_()),new oA(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),iQ.instance.apply(this,"gds-listbox")}get navigableItems(){return tk(this,g).value&&ok(tk(this,g).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&"gds-menu-item"===e.gdsElementName)||[]}focus(){this.navigableItems[0]?.focus()}render(){return iX`<slot ${ox(tk(this,g))}></slot>`}};g=new WeakMap,oC=tx([iq("gds-menu")],oC);var oE=Math.min,oS=Math.max,oM=Math.round,oz=Math.floor,oF=e=>({x:e,y:e}),oD={left:"right",right:"left",bottom:"top",top:"bottom"},oT={start:"end",end:"start"};function oL(e,t){return"function"==typeof e?e(t):e}function oW(e){return e.split("-")[0]}function oN(e){return e.split("-")[1]}function oP(e){return"y"===e?"height":"width"}function oO(e){return["top","bottom"].includes(oW(e))?"y":"x"}function oR(e){return"x"===oO(e)?"y":"x"}function oH(e){return e.replace(/start|end/g,e=>oT[e])}function oU(e){return e.replace(/left|right|bottom|top/g,e=>oD[e])}function oV(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function oI(e,t,s){let i,{reference:r,floating:o}=e,n=oO(t),a=oR(t),l=oP(a),d=oW(t),h="y"===n,c=r.x+r.width/2-o.width/2,p=r.y+r.height/2-o.height/2,u=r[l]/2-o[l]/2;switch(d){case"top":i={x:c,y:r.y-o.height};break;case"bottom":i={x:c,y:r.y+r.height};break;case"right":i={x:r.x+r.width,y:p};break;case"left":i={x:r.x-o.width,y:p};break;default:i={x:r.x,y:r.y}}switch(oN(t)){case"start":i[a]-=u*(s&&h?-1:1);break;case"end":i[a]+=u*(s&&h?-1:1)}return i}var oB=async(e,t,s)=>{let{placement:i="bottom",strategy:r="absolute",middleware:o=[],platform:n}=s,a=o.filter(Boolean),l=await (null==n.isRTL?void 0:n.isRTL(t)),d=await n.getElementRects({reference:e,floating:t,strategy:r}),{x:h,y:c}=oI(d,i,l),p=i,u={},g=0;for(let s=0;s<a.length;s++){let{name:o,fn:f}=a[s],{x:y,y:v,data:m,reset:b}=await f({x:h,y:c,initialPlacement:i,placement:p,strategy:r,middlewareData:u,rects:d,platform:n,elements:{reference:e,floating:t}});h=null!=y?y:h,c=null!=v?v:c,u={...u,[o]:{...u[o],...m}},b&&g<=50&&(g++,"object"==typeof b&&(b.placement&&(p=b.placement),b.rects&&(d=!0===b.rects?await n.getElementRects({reference:e,floating:t,strategy:r}):b.rects),{x:h,y:c}=oI(d,p,l)),s=-1)}return{x:h,y:c,placement:p,strategy:r,middlewareData:u}};async function oj(e,t){var s;void 0===t&&(t={});let{x:i,y:r,platform:o,rects:n,elements:a,strategy:l}=e,{boundary:d="clippingAncestors",rootBoundary:h="viewport",elementContext:c="floating",altBoundary:p=!1,padding:u=0}=oL(t,e),g="number"!=typeof u?{top:0,right:0,bottom:0,left:0,...u}:{top:u,right:u,bottom:u,left:u},f=a[p?"floating"===c?"reference":"floating":c],y=oV(await o.getClippingRect({element:null==(s=await (null==o.isElement?void 0:o.isElement(f)))||s?f:f.contextElement||await (null==o.getDocumentElement?void 0:o.getDocumentElement(a.floating)),boundary:d,rootBoundary:h,strategy:l})),v="floating"===c?{...n.floating,x:i,y:r}:n.reference,m=await (null==o.getOffsetParent?void 0:o.getOffsetParent(a.floating)),b=await (null==o.isElement?void 0:o.isElement(m))&&await (null==o.getScale?void 0:o.getScale(m))||{x:1,y:1},_=oV(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:v,offsetParent:m,strategy:l}):v);return{top:(y.top-_.top+g.top)/b.y,bottom:(_.bottom-y.bottom+g.bottom)/b.y,left:(y.left-_.left+g.left)/b.x,right:(_.right-y.right+g.right)/b.x}}async function oY(e,t){let{placement:s,platform:i,elements:r}=e,o=await (null==i.isRTL?void 0:i.isRTL(r.floating)),n=oW(s),a=oN(s),l="y"===oO(s),d=["left","top"].includes(n)?-1:1,h=o&&l?-1:1,c=oL(t,e),{mainAxis:p,crossAxis:u,alignmentAxis:g}="number"==typeof c?{mainAxis:c,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...c};return a&&"number"==typeof g&&(u="end"===a?-1*g:g),l?{x:u*h,y:p*d}:{x:p*d,y:u*h}}function oG(e){return oZ(e)?(e.nodeName||"").toLowerCase():"#document"}function oq(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function oK(e){var t;return null==(t=(oZ(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function oZ(e){return e instanceof Node||e instanceof oq(e).Node}function oX(e){return e instanceof Element||e instanceof oq(e).Element}function oJ(e){return e instanceof HTMLElement||e instanceof oq(e).HTMLElement}function oQ(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof oq(e).ShadowRoot)}function o0(e){let{overflow:t,overflowX:s,overflowY:i,display:r}=o6(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+s)&&!["inline","contents"].includes(r)}function o1(e){let t=o5(),s=o6(e);return"none"!==s.transform||"none"!==s.perspective||!!s.containerType&&"normal"!==s.containerType||!t&&!!s.backdropFilter&&"none"!==s.backdropFilter||!t&&!!s.filter&&"none"!==s.filter||["transform","perspective","filter"].some(e=>(s.willChange||"").includes(e))||["paint","layout","strict","content"].some(e=>(s.contain||"").includes(e))}function o2(e){let t=o7(e);for(;oJ(t)&&!o3(t);){if(o1(t))return t;t=o7(t)}return null}function o5(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function o3(e){return["html","body","#document"].includes(oG(e))}function o6(e){return oq(e).getComputedStyle(e)}function o4(e){return oX(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function o7(e){if("html"===oG(e))return e;let t=e.assignedSlot||e.parentNode||oQ(e)&&e.host||oK(e);return oQ(t)?t.host:t}function o8(e,t,s){var i;void 0===t&&(t=[]),void 0===s&&(s=!0);let r=function e(t){let s=o7(t);return o3(s)?t.ownerDocument?t.ownerDocument.body:t.body:oJ(s)&&o0(s)?s:e(s)}(e),o=r===(null==(i=e.ownerDocument)?void 0:i.body),n=oq(r);return o?t.concat(n,n.visualViewport||[],o0(r)?r:[],n.frameElement&&s?o8(n.frameElement):[]):t.concat(r,o8(r,[],s))}function o9(e){let t=o6(e),s=parseFloat(t.width)||0,i=parseFloat(t.height)||0,r=oJ(e),o=r?e.offsetWidth:s,n=r?e.offsetHeight:i,a=oM(s)!==o||oM(i)!==n;return a&&(s=o,i=n),{width:s,height:i,$:a}}function ne(e){return oX(e)?e:e.contextElement}function nt(e){let t=ne(e);if(!oJ(t))return oF(1);let s=t.getBoundingClientRect(),{width:i,height:r,$:o}=o9(t),n=(o?oM(s.width):s.width)/i,a=(o?oM(s.height):s.height)/r;return n&&Number.isFinite(n)||(n=1),a&&Number.isFinite(a)||(a=1),{x:n,y:a}}var ns=oF(0);function ni(e){let t=oq(e);return o5()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:ns}function nr(e,t,s,i){var r;void 0===t&&(t=!1),void 0===s&&(s=!1);let o=e.getBoundingClientRect(),n=ne(e),a=oF(1);t&&(i?oX(i)&&(a=nt(i)):a=nt(e));let l=(void 0===(r=s)&&(r=!1),i&&(!r||i===oq(n))&&r)?ni(n):oF(0),d=(o.left+l.x)/a.x,h=(o.top+l.y)/a.y,c=o.width/a.x,p=o.height/a.y;if(n){let e=oq(n),t=i&&oX(i)?oq(i):i,s=e.frameElement;for(;s&&i&&t!==e;){let e=nt(s),t=s.getBoundingClientRect(),i=o6(s),r=t.left+(s.clientLeft+parseFloat(i.paddingLeft))*e.x,o=t.top+(s.clientTop+parseFloat(i.paddingTop))*e.y;d*=e.x,h*=e.y,c*=e.x,p*=e.y,d+=r,h+=o,s=oq(s).frameElement}}return oV({width:c,height:p,x:d,y:h})}var no=[":popover-open",":modal"];function nn(e){let t=!1,s=0,i=0;if(no.forEach(s=>{!function(s){try{t=t||e.matches(s)}catch(e){}}(s)}),t){let t=o2(e);if(t){let e=t.getBoundingClientRect();s=e.x,i=e.y}}return[t,s,i]}function na(e){return nr(oK(e)).left+o4(e).scrollLeft}function nl(e,t,s){let i;if("viewport"===t)i=function(e,t){let s=oq(e),i=oK(e),r=s.visualViewport,o=i.clientWidth,n=i.clientHeight,a=0,l=0;if(r){o=r.width,n=r.height;let e=o5();(!e||e&&"fixed"===t)&&(a=r.offsetLeft,l=r.offsetTop)}return{width:o,height:n,x:a,y:l}}(e,s);else if("document"===t)i=function(e){let t=oK(e),s=o4(e),i=e.ownerDocument.body,r=oS(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),o=oS(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight),n=-s.scrollLeft+na(e),a=-s.scrollTop;return"rtl"===o6(i).direction&&(n+=oS(t.clientWidth,i.clientWidth)-r),{width:r,height:o,x:n,y:a}}(oK(e));else if(oX(t))i=function(e,t){let s=nr(e,!0,"fixed"===t),i=s.top+e.clientTop,r=s.left+e.clientLeft,o=oJ(e)?nt(e):oF(1),n=e.clientWidth*o.x;return{width:n,height:e.clientHeight*o.y,x:r*o.x,y:i*o.y}}(t,s);else{let s=ni(e);i={...t,x:t.x-s.x,y:t.y-s.y}}return oV(i)}function nd(e,t){return oJ(e)&&"fixed"!==o6(e).position?t?t(e):e.offsetParent:null}function nh(e,t){let s=oq(e);if(!oJ(e))return s;let i=nd(e,t);for(;i&&["table","td","th"].includes(oG(i))&&"static"===o6(i).position;)i=nd(i,t);return i&&("html"===oG(i)||"body"===oG(i)&&"static"===o6(i).position&&!o1(i))?s:i||o2(e)||s}var nc=async function(e){let t=this.getOffsetParent||nh,s=this.getDimensions;return{reference:function(e,t,s,i){let r=oJ(t),o=oK(t),n="fixed"===s,a=nr(e,!0,n,t),l={scrollLeft:0,scrollTop:0},d=oF(0);if(r||!r&&!n){if(("body"!==oG(t)||o0(o))&&(l=o4(t)),r){let e=nr(t,!0,n,t);d.x=e.x+t.clientLeft,d.y=e.y+t.clientTop}else o&&(d.x=na(o))}let h=a.left+l.scrollLeft-d.x,c=a.top+l.scrollTop-d.y,[p,u,g]=nn(i);return p&&(h+=u,c+=g,r&&(h+=t.clientLeft,c+=t.clientTop)),{x:h,y:c,width:a.width,height:a.height}}(e.reference,await t(e.floating),e.strategy,e.floating),floating:{x:0,y:0,...await s(e.floating)}}},np={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:s,offsetParent:i,strategy:r}=e,o=oK(i),[n]=t?nn(t.floating):[!1];if(i===o||n)return s;let a={scrollLeft:0,scrollTop:0},l=oF(1),d=oF(0),h=oJ(i);if((h||!h&&"fixed"!==r)&&(("body"!==oG(i)||o0(o))&&(a=o4(i)),oJ(i))){let e=nr(i);l=nt(i),d.x=e.x+i.clientLeft,d.y=e.y+i.clientTop}return{width:s.width*l.x,height:s.height*l.y,x:s.x*l.x-a.scrollLeft*l.x+d.x,y:s.y*l.y-a.scrollTop*l.y+d.y}},getDocumentElement:oK,getClippingRect:function(e){let{element:t,boundary:s,rootBoundary:i,strategy:r}=e,o=[..."clippingAncestors"===s?function(e,t){let s=t.get(e);if(s)return s;let i=o8(e,[],!1).filter(e=>oX(e)&&"body"!==oG(e)),r=null,o="fixed"===o6(e).position,n=o?o7(e):e;for(;oX(n)&&!o3(n);){let t=o6(n),s=o1(n);s||"fixed"!==t.position||(r=null),(o?!s&&!r:!s&&"static"===t.position&&!!r&&["absolute","fixed"].includes(r.position)||o0(n)&&!s&&function e(t,s){let i=o7(t);return!(i===s||!oX(i)||o3(i))&&("fixed"===o6(i).position||e(i,s))}(e,n))?i=i.filter(e=>e!==n):r=t,n=o7(n)}return t.set(e,i),i}(t,this._c):[].concat(s),i],n=o[0],a=o.reduce((e,s)=>{let i=nl(t,s,r);return e.top=oS(i.top,e.top),e.right=oE(i.right,e.right),e.bottom=oE(i.bottom,e.bottom),e.left=oS(i.left,e.left),e},nl(t,n,r));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},getOffsetParent:nh,getElementRects:nc,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){let{width:t,height:s}=o9(e);return{width:t,height:s}},getScale:nt,isElement:oX,isRTL:function(e){return"rtl"===o6(e).direction}},nu=(e,t,s)=>{let i=new Map,r={platform:np,...s},o={...r.platform,_c:i};return oB(e,t,{...r,platform:o})},ng=class extends iV{constructor(e){if(super(e),this.it=su,e.type!==iH.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===su||null==e)return this._t=void 0,this.it=e;if(e===sp)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};ng.directiveName="unsafeHTML",ng.resultType=1;var nf=iU(ng),ny=sL`
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
`,nv=class extends iJ{constructor(){super(...arguments),this.width=24,this.height=24,this.solid=!1,this.label=""}static{this.styles=[ny]}render(){let e=`<svg
      width="${this.width}"
      height="${this.height}"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ${this.label?`aria-label="${this.label}"`:`aria-label="${this.constructor._name}"`}
      role="graphics-symbol"
    >
      ${this.solid?this.constructor._solidSVG:this.constructor._regularSVG}
    </svg>`;return ih`${nf(e)}`}};tx([iL({type:Number})],nv.prototype,"width",2),tx([iL({type:Number})],nv.prototype,"height",2),tx([iL({type:Boolean})],nv.prototype,"solid",2),tx([iL({type:String})],nv.prototype,"label",2);var nm=class extends nv{};nm._regularSVG='<path d="M7.75 7.75L16.25 16.25M16.25 7.75L7.75 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',nm._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7.11612 7.11612C7.60427 6.62796 8.39573 6.62796 8.88388 7.11612L12 10.2322L15.1161 7.11612C15.6043 6.62796 16.3957 6.62796 16.8839 7.11612C17.372 7.60427 17.372 8.39573 16.8839 8.88388L13.7678 12L16.8839 15.1161C17.372 15.6043 17.372 16.3957 16.8839 16.8839C16.3957 17.372 15.6043 17.372 15.1161 16.8839L12 13.7678L8.88388 16.8839C8.39573 17.372 7.60427 17.372 7.11612 16.8839C6.62796 16.3957 6.62796 15.6043 7.11612 15.1161L10.2322 12L7.11612 8.88388C6.62796 8.39573 6.62796 7.60427 7.11612 7.11612Z" fill="currentColor"/>',nm._name="cross small",nm=tx([iq("gds-icon-cross-small")],nm);var nb=sL`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: contents;
    }

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
`,n_=class extends iJ{constructor(){super(...arguments),tC(this,f),tC(this,$),tC(this,x),tC(this,k),tC(this,E),this.open=!1,this.popupRole="dialog",this.label=void 0,this.placement="bottom-start",this.useModalInMobileView=!1,this.calcMinWidth=e=>`${e.offsetWidth}px`,this.calcMaxWidth=e=>"auto",this.calcMinHeight=e=>"auto",this.calcMaxHeight=e=>"500px",this._trigger=void 0,this._anchor=void 0,this._isVirtKbVisible=!1,tC(this,v,void 0),tC(this,m,!1),tC(this,b,e=>{this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:this.open,reason:e},bubbles:!1,composed:!1}))}),tC(this,_,e=>{e.stopPropagation(),e.preventDefault(),this.open=!1,tk(this,b).call(this,"close"),setTimeout(()=>this._trigger?.focus(),250)}),tC(this,M,e=>{("ArrowDown"===e.key||"ArrowUp"===e.key)&&(e.preventDefault(),this.open=!0,tk(this,b).call(this,"show")),"Escape"===e.key&&(this.open=!1,tk(this,b).call(this,"cancel"))}),tC(this,z,e=>{e.preventDefault(),this.open=!this.open,tk(this,b).call(this,this.open?"show":"close")}),tC(this,F,()=>{let e=this._elDefaultSlot?.assignedElements()[0];this.updateComplete.then(()=>{e?.focus()})}),tC(this,D,e=>{let t=this._elDialog;if((e.clientX>0||e.clientY>0)&&t&&this.open){let s=t.getBoundingClientRect();s.top<=e.clientY&&e.clientY<=s.top+s.height&&s.left<=e.clientX&&e.clientX<=s.left+s.width||(e.stopPropagation(),this.open=!1,tk(this,b).call(this,"close"))}})}_handleTriggerRefChanged(){this.triggerRef?.then(e=>{e&&(this._trigger=e)})}_handleAnchorRefChanged(){this.anchorRef?.then(e=>{e&&(this._anchor=e)})}_handleTriggerChanged(){tM(this,$,w).call(this),tM(this,k,C).call(this)}_handleAnchorChanged(){tM(this,E,S).call(this)}connectedCallback(){super.connectedCallback(),iQ.instance.apply(this,"gds-popover"),tM(this,$,w).call(this),this._handleOpenChange(),this.addEventListener("keydown",e=>{"Escape"===e.key&&(this.open=!1,tk(this,b).call(this,"cancel"),e.stopPropagation(),e.preventDefault())}),this.addEventListener("focusin",e=>{let t=e.target;"INPUT"===t.tagName||"TEXTAREA"===t.tagName?this._isVirtKbVisible=!0:this._isVirtKbVisible=!1}),this.addEventListener("blurin",e=>{this._isVirtKbVisible=!1})}disconnectedCallback(){super.disconnectedCallback(),tM(this,x,A).call(this)}render(){return ih`<slot
        name="trigger"
        @slotchange=${tM(this,f,y)}
      ></slot>
      <div ?hidden="${!this.open}">
        <dialog
          class="${iI({"v-kb-visible":this._isVirtKbVisible,"use-modal-in-mobile":this.useModalInMobileView})}"
          aria-hidden="${String(!this.open)}"
          @close=${()=>this.open=!1}
        >
          <header>
            <h2>${this.label}</h2>
            <gds-button
              @click=${tk(this,_)}
              class="close"
              label="${rk("Close")}"
              size="small"
              rank="tertiary"
            >
              <gds-icon-cross-small></icon-cross-small>
            </gds-button>
          </header>
          <slot></slot>
        </dialog>
      </div>`}_handleOpenChange(){this.updateComplete.then(()=>{this._trigger?.setAttribute("aria-expanded",String(this.open)),this.open?(this._elDialog?.showModal(),tk(this,F).call(this),setTimeout(()=>this._elDialog?.addEventListener("click",tk(this,D)),0)):(this._elDialog?.close(),this._elDialog?.removeEventListener("click",tk(this,D)))})}_handleMobileLayout(e){var t;tE(this,m,e),e&&this.useModalInMobileView?(null==(t=tk(this,v))||t.call(this),this._elDialog?.style.removeProperty("left"),this._elDialog?.style.removeProperty("top"),this._elDialog?.style.removeProperty("minWidth"),this.updateComplete.then(()=>{this.open&&this._elDialog?.showModal()})):this.updateComplete.then(()=>{tM(this,E,S).call(this)})}};f=new WeakSet,y=function(){this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]&&(this._trigger=this._elTriggerSlot.assignedElements()[0],this._anchor=this._elTriggerSlot.assignedElements()[0])},v=new WeakMap,m=new WeakMap,b=new WeakMap,_=new WeakMap,$=new WeakSet,w=function(){this._trigger?.addEventListener("keydown",tk(this,M)),this._trigger?.addEventListener("click",tk(this,z))},x=new WeakSet,A=function(){var e;this._trigger?.removeEventListener("keydown",tk(this,M)),this._trigger?.removeEventListener("click",tk(this,z)),null==(e=tk(this,v))||e.call(this)},k=new WeakSet,C=function(){if(this._trigger){this._trigger?.setAttribute("aria-expanded",String(this.open)),this._trigger.nodeName.startsWith("GDS-")||["A","BUTTON","INPUT","TEXTAREA"].includes(this._trigger.nodeName)||(this._trigger.setAttribute("tabindex","0"),this._trigger.setAttribute("role","button"));let e=this._trigger.nodeName.startsWith("GDS-")?"gds-aria-haspopup":"aria-haspopup";null===this._trigger.getAttribute(e)&&this._trigger.setAttribute(e,this.popupRole)}},E=new WeakSet,S=function(){if(!this._anchor||!this._elDialog)return;let e=this._anchor,t=this._elDialog;!e||!t||tk(this,m)&&this.useModalInMobileView||(tk(this,v)&&tk(this,v).call(this),tE(this,v,function(e,t,s,i){let r;void 0===i&&(i={});let{ancestorScroll:o=!0,ancestorResize:n=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:l="function"==typeof IntersectionObserver,animationFrame:d=!1}=i,h=ne(e),c=o||n?[...h?o8(h):[],...o8(t)]:[];c.forEach(e=>{o&&e.addEventListener("scroll",s,{passive:!0}),n&&e.addEventListener("resize",s)});let p=h&&l?function(e,t){let s,i=null,r=oK(e);function o(){var e;clearTimeout(s),null==(e=i)||e.disconnect(),i=null}return function n(a,l){void 0===a&&(a=!1),void 0===l&&(l=1),o();let{left:d,top:h,width:c,height:p}=e.getBoundingClientRect();if(a||t(),!c||!p)return;let u=oz(h),g=oz(r.clientWidth-(d+c)),f={rootMargin:-u+"px "+-g+"px "+-oz(r.clientHeight-(h+p))+"px "+-oz(d)+"px",threshold:oS(0,oE(1,l))||1},y=!0;function v(e){let t=e[0].intersectionRatio;if(t!==l){if(!y)return n();t?n(!1,t):s=setTimeout(()=>{n(!1,1e-7)},100)}y=!1}try{i=new IntersectionObserver(v,{...f,root:r.ownerDocument})}catch(e){i=new IntersectionObserver(v,f)}i.observe(e)}(!0),o}(h,s):null,u=-1,g=null;a&&(g=new ResizeObserver(e=>{let[i]=e;i&&i.target===h&&g&&(g.unobserve(t),cancelAnimationFrame(u),u=requestAnimationFrame(()=>{var e;null==(e=g)||e.observe(t)})),s()}),h&&!d&&g.observe(h),g.observe(t));let f=d?nr(e):null;return d&&function t(){let i=nr(e);f&&(i.x!==f.x||i.y!==f.y||i.width!==f.width||i.height!==f.height)&&s(),f=i,r=requestAnimationFrame(t)}(),s(),()=>{var e;c.forEach(e=>{o&&e.removeEventListener("scroll",s),n&&e.removeEventListener("resize",s)}),null==p||p(),null==(e=g)||e.disconnect(),g=null,d&&cancelAnimationFrame(r)}}(e,t,()=>{var s;nu(e,t,{placement:this.placement,middleware:[{name:"offset",options:8,async fn(e){var t,s;let{x:i,y:r,placement:o,middlewareData:n}=e,a=await oY(e,8);return o===(null==(t=n.offset)?void 0:t.placement)&&null!=(s=n.arrow)&&s.alignmentOffset?{}:{x:i+a.x,y:r+a.y,data:{...a,placement:o}}}},(void 0===s&&(s={}),{name:"flip",options:s,async fn(e){var t,i,r,o,n;let{placement:a,middlewareData:l,rects:d,initialPlacement:h,platform:c,elements:p}=e,{mainAxis:u=!0,crossAxis:g=!0,fallbackPlacements:f,fallbackStrategy:y="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:m=!0,...b}=oL(s,e);if(null!=(t=l.arrow)&&t.alignmentOffset)return{};let _=oW(a),$=oW(h)===h,w=await (null==c.isRTL?void 0:c.isRTL(p.floating)),x=f||($||!m?[oU(h)]:function(e){let t=oU(e);return[oH(e),t,oH(t)]}(h));f||"none"===v||x.push(...function(e,t,s,i){let r=oN(e),o=function(e,t,s){let i=["left","right"],r=["right","left"];switch(e){case"top":case"bottom":if(s)return t?r:i;return t?i:r;case"left":case"right":return t?["top","bottom"]:["bottom","top"];default:return[]}}(oW(e),"start"===s,i);return r&&(o=o.map(e=>e+"-"+r),t&&(o=o.concat(o.map(oH)))),o}(h,m,v,w));let A=[h,...x],k=await oj(e,b),C=[],E=(null==(i=l.flip)?void 0:i.overflows)||[];if(u&&C.push(k[_]),g){let e=function(e,t,s){void 0===s&&(s=!1);let i=oN(e),r=oR(e),o=oP(r),n="x"===r?i===(s?"end":"start")?"right":"left":"start"===i?"bottom":"top";return t.reference[o]>t.floating[o]&&(n=oU(n)),[n,oU(n)]}(a,d,w);C.push(k[e[0]],k[e[1]])}if(E=[...E,{placement:a,overflows:C}],!C.every(e=>e<=0)){let e=((null==(r=l.flip)?void 0:r.index)||0)+1,t=A[e];if(t)return{data:{index:e,overflows:E},reset:{placement:t}};let s=null==(o=E.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:o.placement;if(!s)switch(y){case"bestFit":{let e=null==(n=E.map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:n[0];e&&(s=e);break}case"initialPlacement":s=h}if(a!==s)return{reset:{placement:s}}}return{}}})],strategy:"fixed"}).then(({x:s,y:i})=>Object.assign(t.style,{left:`${s}px`,top:`${i}px`,minWidth:this.calcMinWidth(e),maxWidth:this.calcMaxWidth(e),minHeight:this.calcMinHeight(e),maxHeight:this.calcMaxHeight(e)}))})))},M=new WeakMap,z=new WeakMap,F=new WeakMap,D=new WeakMap,n_.styles=sT(nb),tx([iL({type:Boolean,reflect:!0})],n_.prototype,"open",2),tx([iL({attribute:"popup-role"})],n_.prototype,"popupRole",2),tx([iL({attribute:!1})],n_.prototype,"triggerRef",2),tx([iL({attribute:!1})],n_.prototype,"anchorRef",2),tx([iL()],n_.prototype,"label",2),tx([iL()],n_.prototype,"placement",2),tx([iL()],n_.prototype,"useModalInMobileView",2),tx([iL({attribute:!1})],n_.prototype,"calcMinWidth",2),tx([iL({attribute:!1})],n_.prototype,"calcMaxWidth",2),tx([iL({attribute:!1})],n_.prototype,"calcMinHeight",2),tx([iL({attribute:!1})],n_.prototype,"calcMaxHeight",2),tx([iW()],n_.prototype,"_trigger",2),tx([iW()],n_.prototype,"_anchor",2),tx([iW()],n_.prototype,"_isVirtKbVisible",2),tx([iP("slot:not([name])")],n_.prototype,"_elDefaultSlot",2),tx([iP('slot[name="trigger"]')],n_.prototype,"_elTriggerSlot",2),tx([iP("dialog")],n_.prototype,"_elDialog",2),tx([i1("triggerRef")],n_.prototype,"_handleTriggerRefChanged",1),tx([i1("anchorRef")],n_.prototype,"_handleAnchorRefChanged",1),tx([i1("_trigger")],n_.prototype,"_handleTriggerChanged",1),tx([i1("_anchor")],n_.prototype,"_handleAnchorChanged",1),tx([i1("open")],n_.prototype,"_handleOpenChange",1),tx([(e,t,s)=>{let i=window.matchMedia("(max-width: 576px)"),r=e.connectedCallback,o=e.disconnectedCallback;e.connectedCallback=function(){r?.call(this);let e=e=>{s.value?.call(this,e.matches)};i.addEventListener("change",e),this.disconnectedCallback=function(){o?.call(this),i.removeEventListener("change",e)},s.value?.call(this,i.matches)}}],n_.prototype,"_handleMobileLayout",1),n_=tx([iq("gds-popover")],n_);var n$=class extends iJ{constructor(){super(),tC(this,T),this.open=!1,this.buttonLabel=rk("Open context menu"),this.showLabel=!1,this.label="",this.placement="bottom-start",rr(this)}connectedCallback(){super.connectedCallback(),iQ.instance.apply(this,"gds-context-menu"),this.addEventListener("keydown",e=>{this.open&&"Tab"==e.key&&(e.preventDefault(),this.open=!1,this.elTriggerBtn.then(e=>e.focus()))})}render(){return iX`<button
        id="trigger"
        class="icon border-0 small ${ot({highlighted:this.open})}"
        aria-label=${this.buttonLabel??this.label}
        aria-haspopup="menu"
        aria-controls="menu"
        aria-expanded=${this.open}
      >
        <slot name="trigger">
          ${this.showLabel?this.buttonLabel??this.label:ip}
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
        .anchorRef=${this.elTriggerBtn}
        .label=${this.label}
        .placement=${this.placement}
        @gds-ui-state=${e=>this.open=e.detail.open}
      >
        <gds-menu
          aria-label=${this.label??this.buttonLabel}
          @gds-menu-item-click=${tM(this,T,L)}
        >
          <slot allow="gds-menu-item gds-menu-heading"></slot>
        </gds-menu>
      </gds-popover>`}};T=new WeakSet,L=function(){this.open=!1},n$.styles=[os],n$.shadowRootOptions={mode:"open",delegatesFocus:!0},tx([iL({type:Boolean,reflect:!0})],n$.prototype,"open",2),tx([iL({attribute:"button-label"})],n$.prototype,"buttonLabel",2),tx([iL({attribute:"show-label",type:Boolean})],n$.prototype,"showLabel",2),tx([iL()],n$.prototype,"label",2),tx([iL()],n$.prototype,"placement",2),tx([iO("#trigger")],n$.prototype,"elTriggerBtn",2),n$=tx([iq("gds-context-menu")],n$);var nw=class{constructor(e){this.Y=e}disconnect(){this.Y=void 0}reconnect(e){this.Y=e}deref(){return this.Y}},nx=class{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??=new Promise(e=>this.q=e)}resume(){this.q?.(),this.Z=this.q=void 0}},nA=e=>!or(e)&&"function"==typeof e.then,nk=iU(class extends ob{constructor(){super(...arguments),this._$Cwt=1073741823,this._$Cbt=[],this._$CK=new nw(this),this._$CX=new nx}render(...e){return e.find(e=>!nA(e))??sp}update(e,t){let s=this._$Cbt,i=s.length;this._$Cbt=t;let r=this._$CK,o=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){let n=t[e];if(!nA(n))return this._$Cwt=e,n;e<i&&n===s[e]||(this._$Cwt=1073741823,i=0,Promise.resolve(n).then(async e=>{for(;o.get();)await o.get();let t=r.deref();if(void 0!==t){let s=t._$Cbt.indexOf(n);s>-1&&s<t._$Cwt&&(t._$Cwt=s,t.setValue(e))}}))}return sp}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}),nC=(e,t,s)=>{let i=new Map;for(let r=t;r<=s;r++)i.set(e[r],r);return i},nE=iU(class extends iV{constructor(e){if(super(e),e.type!==iH.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,s){let i;void 0===s?s=t:void 0!==t&&(i=t);let r=[],o=[],n=0;for(let t of e)r[n]=i?i(t,n):n,o[n]=s(t,n),n++;return{values:o,keys:r}}render(e,t,s){return this.dt(e,t,s).values}update(e,[t,s,i]){let r=oc(e),{values:o,keys:n}=this.dt(t,s,i);if(!Array.isArray(r))return this.ut=n,o;let a=this.ut??=[],l=[],d,h,c=0,p=r.length-1,u=0,g=o.length-1;for(;c<=p&&u<=g;)if(null===r[c])c++;else if(null===r[p])p--;else if(a[c]===n[u])l[u]=ol(r[c],o[u]),c++,u++;else if(a[p]===n[g])l[g]=ol(r[p],o[g]),p--,g--;else if(a[c]===n[g])l[g]=ol(r[c],o[g]),oa(e,l[g+1],r[c]),c++,g--;else if(a[p]===n[u])l[u]=ol(r[p],o[u]),oa(e,r[c],r[p]),p--,u++;else if(void 0===d&&(d=nC(n,u,g),h=nC(a,c,p)),d.has(a[c])){if(d.has(a[p])){let t=h.get(n[u]),s=void 0!==t?r[t]:null;if(null===s){let t=oa(e,r[c]);ol(t,o[u]),l[u]=t}else l[u]=ol(s,o[u]),oa(e,r[c],s),r[t]=null;u++}else op(r[p]),p--}else op(r[c]),c++;for(;u<=g;){let t=oa(e,l[g+1]);ol(t,o[u]),l[u++]=t}for(;c<=p;){let e=r[c++];null!==e&&op(e)}return this.ut=n,oh(e,l),sp}}),nS={fromAttribute:e=>new Date(e),toAttribute:e=>e.toISOString()};function nM(e){return(nM="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function nz(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function nF(e,t){if(t.length<e)throw TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function nD(e){nF(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===nM(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):(("string"==typeof e||"[object String]"===t)&&"undefined"!=typeof console&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(Error().stack)),new Date(NaN))}function nT(e,t){nF(2,arguments);var s=nD(e),i=nz(t);return isNaN(i)?new Date(NaN):(i&&s.setDate(s.getDate()+i),s)}function nL(e,t){nF(2,arguments);var s=nD(e),i=nz(t);if(isNaN(i))return new Date(NaN);if(!i)return s;var r=s.getDate(),o=new Date(s.getTime());return(o.setMonth(s.getMonth()+i+1,0),r>=o.getDate())?o:(s.setFullYear(o.getFullYear(),o.getMonth(),r),s)}var nW={};function nN(e,t){nF(1,arguments);var s,i,r,o,n,a,l,d,h=nz(null!==(s=null!==(i=null!==(r=null!==(o=null==t?void 0:t.weekStartsOn)&&void 0!==o?o:null==t?void 0:null===(n=t.locale)||void 0===n?void 0:null===(a=n.options)||void 0===a?void 0:a.weekStartsOn)&&void 0!==r?r:nW.weekStartsOn)&&void 0!==i?i:null===(l=nW.locale)||void 0===l?void 0:null===(d=l.options)||void 0===d?void 0:d.weekStartsOn)&&void 0!==s?s:0);if(!(h>=0&&h<=6))throw RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=nD(e),p=c.getDay();return c.setDate(c.getDate()-((p<h?7:0)+p-h)),c.setHours(0,0,0,0),c}function nP(e){nF(1,arguments);var t=nD(e);return t.setHours(0,0,0,0),t}function nO(e,t){nF(2,arguments);var s=nP(e),i=nP(t);return s.getTime()===i.getTime()}var nR=sL`
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
`,nH=class extends iJ{constructor(){super(...arguments),tC(this,W),tC(this,P),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.focusedDate=new Date,this.disabledWeekends=!1,this.showWeekNumbers=!1}get focusedMonth(){return this.focusedDate.getMonth()}set focusedMonth(e){let t=new Date(this.focusedDate);t.setMonth(e),t.setHours(0,0,0,0),this.focusedDate=t}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(e){this.focusedDate=new Date(this.focusedDate.setFullYear(e))}getDateCell(e){return this.shadowRoot?.querySelector(`#dateCell-${e}`)}connectedCallback(){super.connectedCallback(),iQ.instance.apply(this,"gds-calendar"),this.addEventListener("keydown",tM(this,P,O))}focus(){super.focus(),this._elFocusedCell?.focus()}render(){let e=new Date;return ih`<table>
      <thead>
        <tr>
          ${iR(this.showWeekNumbers,()=>ih`<th></th>`)}
          <th>${rk("Mon")}</th>
          <th>${rk("Tue")}</th>
          <th>${rk("Wed")}</th>
          <th>${rk("Thu")}</th>
          <th>${rk("Fri")}</th>
          <th>${rk("Sat")}</th>
          <th>${rk("Sun")}</th>
        </tr>
      </thead>
      <tbody>
        ${function(e,t){let s=function(e,t){nF(1,arguments);var s=e||{},i=nD(s.start),r=nD(s.end),o=r.getTime();if(!(i.getTime()<=o))throw RangeError("Invalid interval");var n=nN(i,t),a=nN(r,t);n.setHours(15),a.setHours(15),o=a.getTime();for(var l=[],d=n;d.getTime()<=o;)d.setHours(0),l.push(nD(d)),(d=function(e,t){return nF(2,arguments),nT(e,7*nz(1))}(d,1)).setHours(15);return l}({start:function(e){nF(1,arguments);var t=nD(e);return t.setDate(1),t.setHours(0,0,0,0),t}(e),end:function(e){nF(1,arguments);var t=nD(e),s=t.getMonth();return t.setFullYear(t.getFullYear(),s+1,0),t.setHours(23,59,59,999),t}(e)},{weekStartsOn:1});return rG`${t(s.map(e=>({days:function(e,t){nF(1,arguments);var s,i=e||{},r=nD(i.start),o=nD(i.end).getTime();if(!(r.getTime()<=o))throw RangeError("Invalid interval");var n=[];r.setHours(0,0,0,0);var a=Number(null!==(s=null==t?void 0:t.step)&&void 0!==s?s:1);if(a<1||isNaN(a))throw RangeError("`options.step` must be a number greater than 1");for(;r.getTime()<=o;)n.push(nD(r)),r.setDate(r.getDate()+a),r.setHours(0,0,0,0);return n}({start:e,end:nT(e,6)})})))}`}(this.focusedDate,t=>ih`
            ${t.map(t=>ih`
                <tr>
                  ${iR(this.showWeekNumbers,()=>ih`<td class="week-number">
                        ${(function(e,t){nF(1,arguments);var s=nD(e);return Math.round((nN(s,t).getTime()-(function(e,t){nF(1,arguments);var s,i,r,o,n,a,l,d,h=nz(null!==(s=null!==(i=null!==(r=null!==(o=null==t?void 0:t.firstWeekContainsDate)&&void 0!==o?o:null==t?void 0:null===(n=t.locale)||void 0===n?void 0:null===(a=n.options)||void 0===a?void 0:a.firstWeekContainsDate)&&void 0!==r?r:nW.firstWeekContainsDate)&&void 0!==i?i:null===(l=nW.locale)||void 0===l?void 0:null===(d=l.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==s?s:1),c=function(e,t){nF(1,arguments);var s,i,r,o,n,a,l,d,h=nD(e),c=h.getFullYear(),p=nz(null!==(s=null!==(i=null!==(r=null!==(o=null==t?void 0:t.firstWeekContainsDate)&&void 0!==o?o:null==t?void 0:null===(n=t.locale)||void 0===n?void 0:null===(a=n.options)||void 0===a?void 0:a.firstWeekContainsDate)&&void 0!==r?r:nW.firstWeekContainsDate)&&void 0!==i?i:null===(l=nW.locale)||void 0===l?void 0:null===(d=l.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==s?s:1);if(!(p>=1&&p<=7))throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var u=new Date(0);u.setFullYear(c+1,0,p),u.setHours(0,0,0,0);var g=nN(u,t),f=new Date(0);f.setFullYear(c,0,p),f.setHours(0,0,0,0);var y=nN(f,t);return h.getTime()>=g.getTime()?c+1:h.getTime()>=y.getTime()?c:c-1}(e,t),p=new Date(0);return p.setFullYear(c,0,h),p.setHours(0,0,0,0),nN(p,t)})(s,t).getTime())/6048e5)+1})(t.days[0])}
                      </td>`)}
                  ${t.days.map(t=>{let s={color:"currentColor",disabled:!!(this.disabledDates&&this.disabledDates.some(e=>nO(e,t))),...this.customizedDates&&this.customizedDates.find(e=>nO(e.date,t))},i=!function(e,t){nF(2,arguments);var s=nD(e),i=nD(t);return s.getFullYear()===i.getFullYear()&&s.getMonth()===i.getMonth()}(this.focusedDate,t)||t<this.min||t>this.max,r=0===t.getDay()||6===t.getDay(),o=s.disabled||i||this.disabledWeekends&&r;return ih`
                      <td
                        class="${iI({"custom-date":!!s,disabled:!!o,today:nO(e,t)})}"
                        ?disabled=${o}
                        tabindex="${nO(this.focusedDate,t)?0:-1}"
                        aria-selected="${this.value&&nO(this.value,t)}"
                        aria-label="${t.toDateString()}"
                        @click=${()=>o?null:tM(this,W,N).call(this,t)}
                        id="dateCell-${t.getDate()}"
                      >
                        <span
                          style="color: ${s?s?.color:""}"
                          >${t.getDate()}</span
                        >

                        ${iR(s.indicator,()=>ih`<span
                              class="indicator_${s?.indicator}"
                              style="background-color: ${s?.color}"
                            ></span>`)}
                      </td>
                    `})}
                </tr>
              `)}
          `)}
      </tbody>
    </table>`}_valueChanged(){this.value&&(this.focusedDate=this.value)}};W=new WeakSet,N=function(e){this.value=e,this.dispatchEvent(new CustomEvent("change",{detail:e,bubbles:!1,composed:!1}))},P=new WeakSet,O=function(e){let t=!1,s=new Date(this.focusedDate);"ArrowLeft"===e.key?(s=nT(this.focusedDate,-1),t=!0):"ArrowRight"===e.key?(s=nT(this.focusedDate,1),t=!0):"ArrowUp"===e.key?(s=nT(this.focusedDate,-7),t=!0):"ArrowDown"===e.key?(s=nT(this.focusedDate,7),t=!0):"Enter"===e.key||" "===e.key?(this._elFocusedCell?.hasAttribute("disabled")||tM(this,W,N).call(this,this.focusedDate),t=!0):"Home"===e.key?(s=new Date(this.focusedYear,this.focusedMonth,1),t=!0):"End"===e.key?(s=new Date(this.focusedYear,this.focusedMonth+1,0),t=!0):"PageUp"===e.key?(s=function(e,t){return nF(2,arguments),nL(e,-nz(1))}(this.focusedDate,1),t=!0):"PageDown"===e.key&&(s=nL(this.focusedDate,1),t=!0),s.getFullYear()>=this.min.getFullYear()&&s.getFullYear()<=this.max.getFullYear()&&(this.focusedDate=s),t&&(e.preventDefault(),e.stopPropagation(),this.updateComplete.then(()=>{this._elFocusedCell?.focus(),this.dispatchEvent(new CustomEvent("gds-date-focused",{detail:this.focusedDate,bubbles:!1,composed:!1}))}))},nH.styles=[nR],nH.shadowRootOptions={mode:"open",delegatesFocus:!0},tx([iL()],nH.prototype,"value",2),tx([iL({type:Date})],nH.prototype,"min",2),tx([iL({type:Date})],nH.prototype,"max",2),tx([iL()],nH.prototype,"focusedDate",2),tx([iL({type:Boolean,attribute:"disabled-weekends"})],nH.prototype,"disabledWeekends",2),tx([iL({type:Array,attribute:"disabled-dates"})],nH.prototype,"disabledDates",2),tx([iL({type:Number})],nH.prototype,"focusedMonth",1),tx([iL({type:Number})],nH.prototype,"focusedYear",1),tx([iL({type:Boolean})],nH.prototype,"showWeekNumbers",2),tx([iL({attribute:!1})],nH.prototype,"customizedDates",2),tx([iP('td[tabindex="0"]')],nH.prototype,"_elFocusedCell",2),tx([i1("value")],nH.prototype,"_valueChanged",1),nH=tx([iq("gds-calendar")],nH);var nU=sL`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
    }
  }
`,nV=class extends iJ{constructor(){super(),this.multiple=!1,this.compareWith=(e,t)=>e===t,tC(this,R,o_()),tC(this,H,e=>{let t=e.target;this.multiple?t.selected=!t.selected:(t.selected=!0,Array.from(this.options).forEach(e=>{e!==t&&(e.selected=!1)})),this.ariaActiveDescendantElement=t,this.dispatchEvent(new CustomEvent("change",{bubbles:!1,composed:!1}))}),new oA(this)}get navigableItems(){return this.visibleOptionElements}get options(){return tk(this,R).value&&ok(tk(this,R).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&"gds-option"===e.gdsElementName)||[]}get visibleOptionElements(){return this.options.filter(e=>!e.hidden)}get visibleSelectedOptionElements(){return this.options.filter(e=>e.selected&&!e.hidden)}get selection(){return this.options.filter(e=>e.selected)}set selection(e){this.options.forEach(t=>{t.selected=e.some(e=>this.compareWith(e,t.value))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),iQ.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",tk(this,H))}focus(){(this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])?.focus()}render(){return iX`<slot ${ox(tk(this,R))}></slot>`}_rerenderOptions(){this.options.forEach(e=>{e.requestUpdate()})}};R=new WeakMap,H=new WeakMap,nV.styles=nU,tx([iL({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:e=>e.toString()}})],nV.prototype,"multiple",2),tx([iL()],nV.prototype,"compareWith",2),tx([i1("multiple")],nV.prototype,"_rerenderOptions",1),nV=tx([iq("gds-listbox")],nV);var nI=sL`
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
`,nB=class extends rg{constructor(){super(),tC(this,Y),tC(this,q),tC(this,Z),this.label="",this.open=!1,this.searchable=!1,this.multiple=!1,this.compareWith=(e,t)=>e===t,this.searchFilter=(e,t)=>t.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,tC(this,U,void 0),tC(this,V,e=>{let t=this._elSearchInput,s=Array.from(tk(this,U));s.forEach(e=>e.hidden=!1),t.value&&s.filter(e=>!this.searchFilter(t.value,e)).forEach(e=>e.hidden=!0)}),tC(this,I,e=>{this._elListbox?.then(t=>{if("ArrowDown"===e.key||"Tab"===e.key){e.preventDefault(),t.focus();return}})}),tC(this,B,e=>{if("Tab"===e.key&&this.searchable){e.preventDefault(),this._elSearchInput?.focus();return}}),tC(this,j,e=>{let t=this._elTriggerBtn;t&&(t.ariaActiveDescendantElement=e.target)}),tC(this,J,e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&(this.open=!1)}),tC(this,Q,e=>{"Tab"!==e.key||this.searchable||(e.preventDefault(),this.open=!1,this._elTriggerBtn?.focus())}),rr(this),rw(this),tE(this,U,this.getElementsByTagName(function(e){return iG.get(e)??e}("gds-option")))}get type(){return"gds-dropdown"}get options(){return Array.from(tk(this,U)).filter(e=>!e.hasAttribute("isplaceholder"))}get placeholder(){return Array.from(tk(this,U)).find(e=>e.hasAttribute("isplaceholder"))}get displayValue(){return(Array.isArray(this.value)?this.value.length>2?rk(rv`${this.value.length} selected`):this.value.reduce((e,t)=>e+this.options.find(e=>e.value===t)?.innerHTML+", ","").slice(0,-2):this.options.find(e=>e.selected)?.innerHTML)||this.placeholder?.innerHTML||""}connectedCallback(){super.connectedCallback(),iQ.instance.apply(this,"gds-dropdown"),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleValueChange()})}render(){return iX`
      ${iR(this.label&&!this.hideLabel,()=>iX`<label for="trigger">${this.label}</label>`)}

      <span class="form-info"><slot name="sub-label"></slot></span>

      <gds-popover
        .label=${this.label}
        .open=${this.open}
        .calcMaxWidth=${e=>this.syncPopoverWidth?`${e.offsetWidth}px`:"auto"}
        .calcMaxHeight=${e=>`${this.maxHeight}px`}
        .useModalInMobileView=${!0}
        @gds-ui-state=${e=>this.open=e.detail.open}
      >
        <button
          id="trigger"
          slot="trigger"
          aria-haspopup="listbox"
          role="combobox"
          aria-owns="listbox"
          aria-controls="listbox"
          aria-expanded="${this.open}"
          aria-label="${this.label}"
          class=${iI({small:"small"===this.size})}
        >
          <slot name="trigger">
            <span>${nf(this.displayValue)}</span>
          </slot>
        </button>
        ${iR(this.searchable,()=>iX`<input
              id="searchinput"
              type="text"
              aria-label="${rk("Filter available options")}"
              placeholder="${rk("Search")}"
              @keydown=${tk(this,I)}
              @keyup=${tk(this,V)}
            />`)}

        <gds-listbox
          id="listbox"
          .multiple="${ri(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${tM(this,Y,G)}"
          @gds-focus="${tk(this,j)}"
          @keydown=${tk(this,B)}
        >
          <slot gds-allow="gds-option gds-menu-heading"></slot>
        </gds-listbox>
      </gds-popover>

      <span class="form-info"><slot name="message"></slot></span>
    `}_handleLightDOMChange(){if(this.requestUpdate(),this.multiple){this._handleValueChange();return}void 0===this.value?this.placeholder?this.value=this.placeholder.value:this.value=this.options[0]?.value:this.placeholder||void 0!==this.options.find(e=>this.compareWith(e.value,this.value))||(this.options[0]&&(this.options[0].selected=!0),this.value=this.options[0]?.value)}_handleValueChange(){this._elListbox.then(e=>{e&&(Array.isArray(this.value)?e.selection=this.value:e.selection=[this.value])})}_onOpenChange(){let e=this.open;Array.from(tk(this,U)).forEach(t=>t.hidden=!e),e?tM(this,q,K).call(this):(tM(this,Z,X).call(this),this._elSearchInput&&(this._elSearchInput.value="")),this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:e},bubbles:!0,composed:!0}))}};U=new WeakMap,V=new WeakMap,I=new WeakMap,B=new WeakMap,j=new WeakMap,Y=new WeakSet,G=function(){this._elListbox.then(e=>{this.multiple?this.value=e.selection.map(e=>e.value):(this.value=e.selection[0]?.value,this.open=!1,setTimeout(()=>this._elTriggerBtn?.focus(),0)),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))})},q=new WeakSet,K=function(){this.addEventListener("blur",tk(this,J)),this.addEventListener("gds-blur",tk(this,J)),this.addEventListener("keydown",tk(this,Q))},Z=new WeakSet,X=function(){this.removeEventListener("blur",tk(this,J)),this.removeEventListener("gds-blur",tk(this,J)),this.removeEventListener("keydown",tk(this,Q))},J=new WeakMap,Q=new WeakMap,nB.styles=nI,nB.shadowRootOptions={mode:"open",delegatesFocus:!0},tx([iL()],nB.prototype,"label",2),tx([iL({type:Boolean,reflect:!0})],nB.prototype,"open",2),tx([iL({type:Boolean,reflect:!0})],nB.prototype,"searchable",2),tx([iL({type:Boolean,reflect:!0})],nB.prototype,"multiple",2),tx([iL()],nB.prototype,"compareWith",2),tx([iL()],nB.prototype,"searchFilter",2),tx([iL({type:Boolean,attribute:"sync-popover-width"})],nB.prototype,"syncPopoverWidth",2),tx([iL({type:Number,attribute:"max-height"})],nB.prototype,"maxHeight",2),tx([iL()],nB.prototype,"size",2),tx([iL({type:Boolean,attribute:"hide-label"})],nB.prototype,"hideLabel",2),tx([iP("#trigger")],nB.prototype,"_elTriggerBtn",2),tx([iO("#listbox")],nB.prototype,"_elListbox",2),tx([iP("#searchinput")],nB.prototype,"_elSearchInput",2),tx([function(e={attributes:!0,childList:!0,subtree:!1,characterData:!0}){return(t,s,i)=>{let r;let o=t.connectedCallback,n=t.disconnectedCallback;t.connectedCallback=function(){o?.call(this),(r=new MutationObserver((e,t)=>{i.value?.call(this)})).observe(this,e)},t.disconnectedCallback=function(){n?.call(this),r.disconnect()}}}({attributes:!0,childList:!0,subtree:!0,characterData:!0})],nB.prototype,"_handleLightDOMChange",1),tx([i1("value")],nB.prototype,"_handleValueChange",1),tx([i1("open")],nB.prototype,"_onOpenChange",1),nB=tx([iq("gds-dropdown")],nB);var nj=class extends iM{constructor(){super(...arguments),tC(this,el),tC(this,eh),tC(this,ep),tC(this,eg),tC(this,ey),this.value=0,this.length=2,this.min=0,this.max=Number.MAX_SAFE_INTEGER,this.displayValue=tM(this,ep,eu).call(this,this.value,this.length),tC(this,ee,""),tC(this,et,()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=2===this.length?this.min:new Date().getFullYear()-1),this.value=tM(this,eg,ef).call(this,e+1),tM(this,eh,ec).call(this)}),tC(this,es,()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=2===this.length?this.max:new Date().getFullYear()+1),this.value=tM(this,eg,ef).call(this,e-1),tM(this,eh,ec).call(this)}),tC(this,ei,e=>{e.stopPropagation(),e.preventDefault(),this.focus()}),tC(this,er,()=>{tM(this,ey,ev).call(this)}),tC(this,eo,()=>{""!==tk(this,ee)&&(tM(this,ey,ev).call(this),this.value=tM(this,eg,ef).call(this,parseInt(this.value.toString())),tM(this,eh,ec).call(this))}),tC(this,en,e=>{e.stopPropagation(),e.preventDefault(),e.deltaY>0?tk(this,es).call(this):tk(this,et).call(this)}),tC(this,ea,e=>{let t=!1;if("ArrowUp"===e.key)tk(this,et).call(this),t=!0;else if("ArrowDown"===e.key)tk(this,es).call(this),t=!0;else{let s=parseInt(e.key);isNaN(s)||(tk(this,ee).length<this.length&&(tE(this,ee,tk(this,ee)+s.toString()),this.value=parseInt(tk(this,ee))),tk(this,ee).length===this.length&&(this.value=tM(this,eg,ef).call(this,this.value),tM(this,ey,ev).call(this),tM(this,el,ed).call(this),tM(this,eh,ec).call(this)),t=!0)}t&&(e.preventDefault(),e.stopPropagation())})}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.setAttribute("role","spinbutton"),this.setAttribute("tabindex","0"),this.addEventListener("wheel",tk(this,en)),this.addEventListener("keydown",tk(this,ea)),this.addEventListener("blur",tk(this,eo)),this.addEventListener("focus",tk(this,er)),this.addEventListener("click",tk(this,ei)),this.addEventListener("mousedown",tk(this,ei))}focus(e){super.focus(e),tk(this,er).call(this)}render(){return iX`${this.displayValue}`}_refreshDisplayValue(){this.displayValue=tM(this,ep,eu).call(this,this.value,this.length),this.setAttribute("aria-valuetext",this.value.toString())}};ee=new WeakMap,et=new WeakMap,es=new WeakMap,ei=new WeakMap,er=new WeakMap,eo=new WeakMap,en=new WeakMap,ea=new WeakMap,el=new WeakSet,ed=function(){let e=this.nextElementSibling;for(;e;){if(e instanceof nj){e.focus();break}e=e.nextElementSibling}},eh=new WeakSet,ec=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value.toString()}}))},ep=new WeakSet,eu=function(e,t){return String(e).padStart(t,"0")},eg=new WeakSet,ef=function(e){return Math.max(this.min,Math.min(this.max,e))},ey=new WeakSet,ev=function(){tE(this,ee,"")},nj.formAssociated=!0,tx([iL({type:Number})],nj.prototype,"value",2),tx([iL({type:Number})],nj.prototype,"length",2),tx([iL({type:Number,attribute:"aria-valuemin"})],nj.prototype,"min",2),tx([iL({type:Number,attribute:"aria-valuemax"})],nj.prototype,"max",2),tx([iW()],nj.prototype,"displayValue",2),tx([i1("value")],nj.prototype,"_refreshDisplayValue",1),nj=tx([iq("gds-date-part-spinner")],nj);var nY=class extends nv{};nY._regularSVG='<path d="M3.75 9.75H20.25M7.75 4.75V2.75M16.25 4.75V2.75M3.75 4.75H20.25V20.25H3.75V4.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',nY._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 2C8.16421 2 8.5 2.33579 8.5 2.75V4H15.5V2.75C15.5 2.33579 15.8358 2 16.25 2C16.6642 2 17 2.33579 17 2.75V4H20.25C20.6642 4 21 4.33579 21 4.75V20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25V4.75C3 4.33579 3.33579 4 3.75 4H7V2.75C7 2.33579 7.33579 2 7.75 2ZM4.5 10.5V19.5H19.5V10.5H4.5Z" fill="currentColor"/>',nY._name="calendar",nY=tx([iq("gds-icon-calendar")],nY);var nG=class extends nv{};nG._regularSVG='<path d="M15 20L7 12L15 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',nG._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5303 3.46967C15.8232 3.76256 15.8232 4.23744 15.5303 4.53033L8.06066 12L15.5303 19.4697C15.8232 19.7626 15.8232 20.2374 15.5303 20.5303C15.2374 20.8232 14.7626 20.8232 14.4697 20.5303L6.46967 12.5303C6.32902 12.3897 6.25 12.1989 6.25 12C6.25 11.8011 6.32902 11.6103 6.46967 11.4697L14.4697 3.46967C14.7626 3.17678 15.2374 3.17678 15.5303 3.46967Z" fill="currentColor"/>',nG._name="chevron left",nG=tx([iq("gds-icon-chevron-left")],nG);var nq=class extends nv{};nq._regularSVG='<path d="M9 4L17 12L9 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',nq._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M8.46967 3.46967C8.76256 3.17678 9.23744 3.17678 9.53033 3.46967L17.5303 11.4697C17.671 11.6103 17.75 11.8011 17.75 12C17.75 12.1989 17.671 12.3897 17.5303 12.5303L9.53033 20.5303C9.23744 20.8232 8.76256 20.8232 8.46967 20.5303C8.17678 20.2374 8.17678 19.7626 8.46967 19.4697L15.9393 12L8.46967 4.53033C8.17678 4.23744 8.17678 3.76256 8.46967 3.46967Z" fill="currentColor"/>',nq._name="chevron right",nq=tx([iq("gds-icon-chevron-right")],nq);var nK=sL`
  @layer base, reset, transitional-styles;
  @layer base {
    label {
      display: block;
    }
  }
`,nZ=class extends rg{constructor(){super(...arguments),tC(this,eb),tC(this,e$),tC(this,ex),tC(this,ek),tC(this,eE),tC(this,eM),tC(this,eF),tC(this,eY),tC(this,eZ),tC(this,eJ),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.open=!1,this.label="",this.showWeekNumbers=!1,this.size="medium",this.hideLabel=!1,this.disabledWeekends=!1,this._focusedMonth=new Date().getMonth(),this._focusedYear=new Date().getFullYear(),this._dateFormatLayout=tM(this,eY,eG).call(this,"y-m-d"),tC(this,em,void 0),tC(this,eT,e=>{this._elTrigger.then(t=>{e.relatedTarget?.parentElement!==e.target&&document.getSelection()?.removeAllRanges()})}),tC(this,eL,e=>{this._elTrigger.then(e=>{document.getSelection()?.removeAllRanges();let t=new Range;t.setStart(e.firstChild,0),t.setEnd(e.lastChild,4),document.getSelection()?.addRange(t)})}),tC(this,eW,e=>{this._elTrigger.then(t=>{e.currentTarget===t&&(e.preventDefault(),e.clipboardData?.setData("text/plain",this.displayValue))})}),tC(this,eN,e=>{this._elTrigger.then(t=>{if(e.currentTarget!==t)return;e.preventDefault();let s=e.clipboardData?.getData("text/plain");if(!s)return;let i=new Date(s);"Invalid Date"!==i.toString()&&(this.value=i,tM(this,eM,ez).call(this))})}),tC(this,eP,e=>{this._elSpinners[0]?.focus()}),tC(this,eO,e=>{e.stopPropagation(),this.value=e.detail,this.open=!1,tM(this,eM,ez).call(this)}),tC(this,eR,e=>{e.stopPropagation(),this._focusedMonth=e.target?.value}),tC(this,eH,e=>{e.stopPropagation(),this._focusedYear=e.target?.value}),tC(this,eU,e=>{this._focusedMonth++,this._focusedMonth>11&&(this._focusedMonth=0,this._focusedYear++)}),tC(this,eV,e=>{this._focusedMonth--,this._focusedMonth<0&&(this._focusedMonth=11,this._focusedYear--)}),tC(this,eI,async()=>{this._focusedMonth=(await this._elCalendar).focusedMonth,this._focusedYear=(await this._elCalendar).focusedYear,this.value=(await this._elCalendar).focusedDate,this.requestUpdate(),tM(this,eF,eD).call(this)}),tC(this,eB,async e=>{if(e.target===e.currentTarget){if(this.open=e.detail.open,"close"===e.detail.reason){let e=(await this._elCalendar).value;nO(e||new Date(0),tk(this,em)||new Date(0))||(this.value=e,tM(this,eM,ez).call(this)),this.value&&(this._focusedMonth=this.value.getMonth(),this._focusedYear=this.value.getFullYear())}"cancel"===e.detail.reason&&(this.value=tk(this,em))}}),tC(this,ej,e=>{let t=Array.from(this._elSpinners).findIndex(t=>t===e.target);if("ArrowRight"===e.key){let e=this._elSpinners[t+1];e&&e.focus()}if("ArrowLeft"===e.key){let e=this._elSpinners[t-1];e&&e.focus()}}),tC(this,eq,(e,t)=>{tk(this,eK)[t]=e;let s=new Date;s.setFullYear(parseInt(tk(this,eK).year)),s.setMonth(parseInt(tk(this,eK).month)-1),s.setDate(parseInt(tk(this,eK).day)),"Invalid Date"!==s.toString()&&(this.value=s,tM(this,eM,ez).call(this))}),tC(this,eK,{year:"yyyy",month:"mm",day:"dd"})}get type(){return"gds-datepicker"}get dateformat(){return this._dateFormatLayout.layout.map(e=>e.token).join(this._dateFormatLayout.delimiter)}set dateformat(e){this._dateFormatLayout=tM(this,eY,eG).call(this,e)}async getFocusedDate(){return this.open?this._elCalendar.then(e=>e.focusedDate):void 0}get displayValue(){return this._elInput.innerText.replace(/\s+/g,"")}async test_getDateCell(e){return this._elCalendar.then(t=>t.getDateCell(e))}connectedCallback(){super.connectedCallback(),iQ.instance.apply(this,"gds-datepicker")}render(){return iX`${iR(this.label&&!this.hideLabel,()=>iX`<label for="spinner-0" id="label">${this.label}</label>`)}

      <div class="form-info"><slot name="sub-label"></slot></div>

      <div
        class=${iI({field:!0,small:"small"===this.size})}
        id="field"
        @click=${tk(this,eP)}
        @copy=${tk(this,eW)}
        @paste=${tk(this,eN)}
      >
        <div
          class=${iI({input:!0,"is-placeholder":!this.value})}
          @focusout=${tk(this,eT)}
        >
          ${function*(e,t){let s="function"==typeof t;if(void 0!==e){let i=-1;for(let r of e)i>-1&&(yield s?t(i):t),i++,yield r}}(function*(e,t){if(void 0!==e){let s=0;for(let i of e)yield t(i,s++)}}(this._dateFormatLayout.layout,(e,t)=>iX`<gds-date-part-spinner
                  id="spinner-${t}"
                  .length=${"y"===e.token?4:2}
                  .value=${tk(this,eK)[e.name]}
                  aria-valuemin=${tM(this,ek,eC).call(this,e.name)}
                  aria-valuemax=${tM(this,eE,eS).call(this,e.name)}
                  aria-label=${tM(this,ex,eA).call(this,e.name)}
                  aria-describedby="label"
                  @keydown=${tk(this,ej)}
                  @change=${t=>tk(this,eq).call(this,t.detail.value,e.name)}
                  @focus=${tk(this,eL)}
                  @touchend=${e=>{this.open=!0,e.preventDefault()}}
                ></gds-date-part-spinner>`),iX`<span>${this._dateFormatLayout.delimiter}</span>`)}
        </div>
        <button
          id="calendar-button"
          aria-label="${rk("Open calendar modal")}"
          aria-haspopup="menu"
          aria-expanded=${this.open}
          aria-controls="calendar-popover"
          aria-describedby="label"
        >
          <gds-icon-calendar></gds-icon-calendar>
        </button>
      </div>

      <div class="form-info"><slot name="message"></slot></div>

      <gds-popover
        .triggerRef=${this._elTrigger}
        .anchorRef=${this._elField}
        .open=${this.open}
        @gds-ui-state=${tk(this,eB)}
        label=${this.label}
        id="calendar-popover"
        .placement=${"bottom-end"}
        .calcMinWidth=${()=>this.showWeekNumbers?"350px":"305px"}
        .useModalInMobileView=${!0}
        @focusin=${async e=>{e.target?.id!=="calendar-popover"||this._elCalendar.then(e=>e.focus())}}
      >
        <div class="header">
          <button
            @click=${tk(this,eV)}
            aria-label=${rk("Previous month")}
          >
            <gds-icon-chevron-left></gds-icon-chevron-left>
          </button>
          <gds-dropdown
            .value=${this._focusedMonth.toString()}
            @change=${tk(this,eR)}
            .maxHeight=${300}
            label="${rk("Month")}"
            style="width:120px"
            size="small"
            hide-label
          >
            <gds-option value="0">${rk("January")}</gds-option>
            <gds-option value="1">${rk("February")}</gds-option>
            <gds-option value="2">${rk("March")}</gds-option>
            <gds-option value="3">${rk("April")}</gds-option>
            <gds-option value="4">${rk("May")}</gds-option>
            <gds-option value="5">${rk("June")}</gds-option>
            <gds-option value="6">${rk("July")}</gds-option>
            <gds-option value="7">${rk("August")}</gds-option>
            <gds-option value="8">${rk("September")}</gds-option>
            <gds-option value="9">${rk("October")}</gds-option>
            <gds-option value="10">${rk("November")}</gds-option>
            <gds-option value="11">${rk("December")}</gds-option>
          </gds-dropdown>
          <gds-dropdown
            .value=${this._focusedYear.toString()}
            @change=${tk(this,eH)}
            .maxHeight=${300}
            label="${rk("Year")}"
            size="small"
            hide-label
          >
            ${nE(tk(this,eZ,eX),e=>e,e=>iX`<gds-option value=${e}>${e}</gds-option>`)}
          </gds-dropdown>
          <button
            @click=${tk(this,eU)}
            aria-label=${rk("Next month")}
          >
            <gds-icon-chevron-right></gds-icon-chevron-right>
          </button>
        </div>

        <gds-calendar
          id="calendar"
          @change=${tk(this,eO)}
          @gds-date-focused=${tk(this,eI)}
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
          <gds-button
            rank="tertiary"
            size="small"
            @click=${()=>{this.value=void 0,tM(this,eM,ez).call(this)}}
          >
            ${rk("Clear")}
          </gds-button>
          ${nk(tM(this,eb,e_).call(this),ip)}
          <gds-button
            rank="tertiary"
            size="small"
            @click=${()=>{this.value=new Date,tM(this,eM,ez).call(this)}}
          >
            ${rk("Today")}
          </gds-button>
        </div>
      </gds-popover> `}_handleValueChange(){if(!this.value){tE(this,eK,{year:"yyyy",month:"mm",day:"dd"});return}let e=this.value;this._focusedMonth=e.getMonth(),this._focusedYear=e.getFullYear();let t=e.getFullYear().toString(),s=(e.getMonth()+1).toString().padStart(2,"0"),i=e.getDate().toString().padStart(2,"0");tE(this,eK,{year:t,month:s,day:i})}_handleOpenChange(){this.open&&(tE(this,em,this.value),this._elCalendar.then(e=>e.focus()))}};em=new WeakMap,eb=new WeakSet,e_=async function(){let e;let t=await this.getFocusedDate(),s="";return t&&t>this.max?(s=rk("Last available date"),e=()=>tM(this,e$,ew).call(this,this.max)):t&&t<this.min&&(s=rk("First available date"),e=()=>tM(this,e$,ew).call(this,this.min)),iX`${iR(s.length>0,()=>iX`<gds-button rank="tertiary" size="small" @click=${e}>
          ${s}
        </gds-button>`,()=>ip)}`},e$=new WeakSet,ew=function(e){let t=new Date(e);this._elCalendar.then(e=>e.focusedDate=t).then(tk(this,eI))},ex=new WeakSet,eA=function(e){return({year:rk("Year"),month:rk("Month"),day:rk("Day")})[e]},ek=new WeakSet,eC=function(e){return({year:1900,month:1,day:1})[e]},eE=new WeakSet,eS=function(e){return({year:9999,month:12,day:31})[e]},eM=new WeakSet,ez=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value}}))},eF=new WeakSet,eD=function(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value}}))},eT=new WeakMap,eL=new WeakMap,eW=new WeakMap,eN=new WeakMap,eP=new WeakMap,eO=new WeakMap,eR=new WeakMap,eH=new WeakMap,eU=new WeakMap,eV=new WeakMap,eI=new WeakMap,eB=new WeakMap,ej=new WeakMap,eY=new WeakSet,eG=function(e){let t=e.replace(/[a-z0-9]/gi,"")[0],s=e.split(t),i=s.findIndex(e=>"y"===e),r=s.findIndex(e=>"m"===e),o=s.findIndex(e=>"d"===e);if(-1===i||-1===r||-1===o)throw Error("Invalid date format for <gds-datepicker>");return{delimiter:t,layout:[i,r,o].sort((e,t)=>e-t).map(e=>s[e]).map(e=>({token:e,name:"y"===e?"year":"m"===e?"month":"day"}))}},eq=new WeakMap,eK=new WeakMap,eZ=new WeakSet,eX=function(){let e=this.min.getFullYear(),t=this.max.getFullYear(),s=tk(this,eJ,eQ),i=this.value?.getFullYear();return{*[Symbol.iterator](){s&&(yield i);for(let s=e;s<=t;s++)yield s}}},eJ=new WeakSet,eQ=function(){return!!this.value&&(this.value.getFullYear()<this.min.getFullYear()||this.value.getFullYear()>this.max.getFullYear())},nZ.styles=[nK],nZ.shadowRootOptions={mode:"open",delegatesFocus:!0},tx([iL({converter:nS})],nZ.prototype,"value",2),tx([iL({converter:nS})],nZ.prototype,"min",2),tx([iL({converter:nS})],nZ.prototype,"max",2),tx([iL({type:Boolean})],nZ.prototype,"open",2),tx([iL()],nZ.prototype,"label",2),tx([iL({type:Boolean,attribute:"show-week-numbers"})],nZ.prototype,"showWeekNumbers",2),tx([iL()],nZ.prototype,"size",2),tx([iL({type:Boolean,attribute:"hide-label"})],nZ.prototype,"hideLabel",2),tx([iL()],nZ.prototype,"dateformat",1),tx([iL({type:Boolean,attribute:"disabled-weekends"})],nZ.prototype,"disabledWeekends",2),tx([iL({converter:{fromAttribute:e=>e.split(",").map(e=>new Date(e.trim())),toAttribute:e=>JSON.stringify(e.map(e=>e.toISOString()))},attribute:"disabled-dates"})],nZ.prototype,"disabledDates",2),tx([iO("#calendar-button")],nZ.prototype,"test_calendarButton",2),tx([iW()],nZ.prototype,"_focusedMonth",2),tx([iW()],nZ.prototype,"_focusedYear",2),tx([iW()],nZ.prototype,"_dateFormatLayout",2),tx([iO("#calendar")],nZ.prototype,"_elCalendar",2),tx([iO("#calendar-button")],nZ.prototype,"_elTrigger",2),tx([iO("#field")],nZ.prototype,"_elField",2),tx([(e,s)=>iN(e,s,{get(){return(this.renderRoot??(t??=document.createDocumentFragment())).querySelectorAll("[role=spinbutton]")}})],nZ.prototype,"_elSpinners",2),tx([iP(".input")],nZ.prototype,"_elInput",2),tx([i1("value")],nZ.prototype,"_handleValueChange",1),tx([i1("open")],nZ.prototype,"_handleOpenChange",1),nZ=tx([iq("gds-datepicker")],nZ);var nX=sL`
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
`,nJ=/(?<l>l:([a-z0-9]+))?\s*(?<m>m:([a-z0-9]+))?\s*(?<s>s:([a-z0-9]+))?/,nQ=class extends iJ{constructor(){super(...arguments),tC(this,e0,{varsColumn:sL``,varsGap:sL``,varsRowGap:sL``,varsPadding:sL``,varsAutoColumns:sL``})}connectedCallback(){super.connectedCallback(),this._updateColumnVariables(),this._updateGapVariables(),this._updateRowGapVariables(),this._updatePaddingVariables(),this._updateAutoColumnsVariables()}_updateCSSVariables(e,t){let s,i,r,o;e in this&&(s=this[e]);let n=s?.match(nJ)||null,{l:a,m:l,s:d}=n?.groups||{},h=(e,t,s)=>({desktop:e?`var(--gds-sys-grid-gap-${e.split(":")[1]})`:void 0,tablet:t?`var(--gds-sys-grid-gap-${t.split(":")[1]})`:void 0,mobile:s?`var(--gds-sys-grid-gap-${s.split(":")[1]})`:void 0});"columns"===e&&(this.columns&&!isNaN(Number(this.columns))?i=r=o=Number(this.columns):(i=a?a.split(":")[1]:void 0,r=l?l.split(":")[1]:void 0,o=d?d.split(":")[1]:void 0)),"gap"===e&&(this.gap&&!this.gap.includes(" ")?i=r=o=`var(--gds-sys-grid-gap-${this.gap})`:{desktop:i,tablet:r,mobile:o}=h(a,l,d)),"rowGap"===e&&(this.rowGap&&!this.rowGap.includes(" ")?i=r=o=`var(--gds-sys-grid-gap-${this.rowGap})`:{desktop:i,tablet:r,mobile:o}=h(a,l,d)),"padding"===e&&(this.padding&&!this.padding.includes(" ")?i=r=o=`var(--gds-sys-grid-gap-${this.padding})`:{desktop:i,tablet:r,mobile:o}=h(a,l,d)),"autoColumns"===e&&(this.autoColumns&&!this.autoColumns.includes(" ")?i=r=o=`${this.autoColumns}px`:(i=a?`${a.split(":")[1]}px`:void 0,r=l?`${l.split(":")[1]}px`:void 0,o=d?`${d.split(":")[1]}px`:void 0));let c=[{name:`${t}-desktop`,value:i},{name:`${t}-tablet`,value:r},{name:`${t}-mobile`,value:o}].filter(({value:e})=>void 0!==e).map(({name:e,value:t})=>`--_${e}: ${t};`).join(" ");tE(this,e0,{...tk(this,e0),[t]:sL`
        ${sT(c)}
      `}),this._dynamicStylesController.inject("grid-vars",sL`
        :host {
          ${sT(Object.values(tk(this,e0)).join(""))}
        }
      `)}_updateColumnVariables(){this._updateCSSVariables("columns","columns")}_updateGapVariables(){this._updateCSSVariables("gap","gap")}_updateRowGapVariables(){this._updateCSSVariables("rowGap","row-gap")}_updatePaddingVariables(){this._updateCSSVariables("padding","padding")}_updateAutoColumnsVariables(){this._updateCSSVariables("autoColumns","col-width")}render(){return iX`<slot></slot>`}};e0=new WeakMap,nQ.styles=[rh,nX],nQ.shadowRootOptions={mode:"open",delegatesFocus:!0},tx([iL({attribute:"columns",type:String})],nQ.prototype,"columns",2),tx([iL({attribute:"gap",type:String})],nQ.prototype,"gap",2),tx([iL({attribute:"row-gap",type:String})],nQ.prototype,"rowGap",2),tx([iL({attribute:"padding",type:String})],nQ.prototype,"padding",2),tx([iL({attribute:"auto-columns",type:String})],nQ.prototype,"autoColumns",2),tx([i1("columns")],nQ.prototype,"_updateColumnVariables",1),tx([i1("gap")],nQ.prototype,"_updateGapVariables",1),tx([i1("row-gap")],nQ.prototype,"_updateRowGapVariables",1),tx([i1("padding")],nQ.prototype,"_updatePaddingVariables",1),tx([i1("autoColumns")],nQ.prototype,"_updateAutoColumnsVariables",1),nQ=tx([iq("gds-grid")],nQ);var n0=class extends iJ{connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}render(){return iX`<slot></slot>`}};n0=tx([iq("gds-list-item")],n0);var n1=class extends iJ{constructor(){super(...arguments),this.label=""}connectedCallback(){super.connectedCallback(),rr(this),iQ.instance.apply(this,"gds-grouped-list")}render(){return iX`${iR(this.label,()=>iX`<div class="gds-list-heading" aria-hidden="true" id="label">
            ${this.label}
          </div>`)}
      <div role="list" aria-labelledby="label">
        <slot gds-allow="gds-list-item"></slot>
      </div>`}};function n2(){return(e,t,s)=>{let i=e.connectedCallback,r=e.disconnectedCallback;e.connectedCallback=function(){i?.call(this),this.__resizeObservers=this.__resizeObservers||{},this.__resizeObserver_tids=this.__resizeObserver_tids||{},this.__resizeObservers[t]=new ResizeObserver(()=>{this.__resizeObserver_tids[t]&&clearTimeout(this.__resizeObserver_tids[t]),this.__resizeObserver_tids[t]=setTimeout(()=>{s.value?.call(this)},20)}),this.__resizeObservers[t].observe(this)},e.disconnectedCallback=function(){r?.call(this),this.__resizeObservers[t].disconnect()}}}tx([iL()],n1.prototype,"label",2),n1=tx([iq("gds-grouped-list")],n1);var n5=`:host {
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
`,n3=class extends iJ{constructor(){super(...arguments),this.selected=!1}connectedCallback(){super.connectedCallback(),iQ.instance.apply(this,"gds-segmented"),this.setAttribute("role","listitem")}render(){return iX`<button aria-current=${String(this.selected)}>
      <slot></slot>
    </button>`}};n3.styles=[...rh,sT(n5)],tx([iL({type:Boolean,reflect:!0})],n3.prototype,"selected",2),tx([iL()],n3.prototype,"value",2),n3=tx([iq("gds-segment")],n3);var n6=`:host {
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
`,n4={small:36,medium:44},n7=e=>e?0:4,n8=class extends iJ{constructor(){super(...arguments),tC(this,tn),this.segMinWidth=100,this.size="medium",tC(this,e1,void 0),this._showPrevButton=!1,this._showNextButton=!1,tC(this,e2,0),tC(this,e5,0),tC(this,e3,0),tC(this,e6,0),tC(this,e4,0),tC(this,e7,0),tC(this,e8,0),tC(this,e9,!1),tC(this,te,e=>{tE(this,e7,e.clientX),tE(this,e8,tk(this,e6)),tE(this,e9,!0)}),tC(this,tt,e=>{if(!tk(this,e9))return;e.preventDefault();let t=e.clientX-tk(this,e7);if(!(5>Math.abs(t)))try{this._elSegments.hasPointerCapture(e.pointerId)||this._elSegments.setPointerCapture(e.pointerId),tE(this,e6,tk(this,e8)+t),tk(this,to).call(this)}catch{}}),tC(this,ts,e=>{if(tk(this,e9)){tE(this,e9,!1);try{this._elSegments.releasePointerCapture(e.pointerId),tk(this,ti).call(this)}catch{}}}),tC(this,ti,()=>{tE(this,e2,Math.round(-tk(this,e6)/tk(this,e5))),tk(this,tr).call(this)}),tC(this,tr,(e=!1)=>{let t=()=>{let e=this.segments.length,t=this._elTrack.offsetWidth;if(t/e>this.segMinWidth)return{count:e,segmentWidth:(t-n7(this._isUsingTransitionalStyles)*(e-1))/e};let s=Math.floor((this.offsetWidth-2*n4[this.size])/this.segMinWidth),i=(t-n7(this._isUsingTransitionalStyles)*(s-1))/s;return{count:s,segmentWidth:i}},{count:s}=t();e&&(tk(this,e4)>=tk(this,e2)+s&&tE(this,e2,tk(this,e4)-s+1),tk(this,e4)<tk(this,e2)&&tE(this,e2,tk(this,e4)));let i=this.segments.length-s,r=tk(this,e2)>=i,o=0>=tk(this,e2);r&&tE(this,e2,i),o&&tE(this,e2,0),tk(this,th).call(this,s),this.updateComplete.then(()=>{let{segmentWidth:e,count:s}=t();this.segments.forEach(t=>{t.style.width=e+"px"}),tE(this,e6,-tk(this,e2)*e-n7(this._isUsingTransitionalStyles)*tk(this,e2)),tk(this,to).call(this),tE(this,e5,e),tE(this,e3,e),tk(this,tc).call(this)})}),tC(this,to,()=>{window.requestAnimationFrame(()=>{this._elSegments.style.transform=`translateX(${tk(this,e6)}px)`})}),tC(this,tl,()=>{tS(this,e2)._--,tk(this,tr).call(this)}),tC(this,td,()=>{tS(this,e2)._++,tk(this,tr).call(this)}),tC(this,th,e=>{this._showPrevButton=tk(this,e2)>0,this._showNextButton=tk(this,e2)<this.segments.length-e}),tC(this,tc,()=>{let e=this.segments.find(e=>e.selected);if(e){let t=this.segments.indexOf(e),s=t*tk(this,e3)+n7(this._isUsingTransitionalStyles)*t;this._elIndicator.style.transform=`translateX(${s}px)`,this._elIndicator.style.width=`${tk(this,e3)}px`}else this._elIndicator.style.transform="translateX(-100%)",this._elIndicator.style.width="0px"}),tC(this,tp,e=>{let t=this.segments.find(t=>t===e.target||t.contains(e.target));t&&(this.segments.forEach(e=>e.selected=!1),t.selected=!0,tE(this,e1,t.value),tk(this,tc).call(this),this.dispatchEvent(new CustomEvent("change",{detail:{segment:t},bubbles:!0,composed:!0})))}),tC(this,tu,()=>{tk(this,e1)&&this.updateComplete.then(()=>{let e=this.segments.find(e=>e.value===tk(this,e1));e&&(this.segments.forEach(e=>e.selected=!1),e.selected=!0,tE(this,e4,this.segments.indexOf(e)),tk(this,tr).call(this,!0))})})}get value(){return tk(this,e1)}set value(e){tE(this,e1,e),tk(this,tu).call(this)}get segments(){return this._elSlot?this._elSlot.assignedElements():[]}connectedCallback(){super.connectedCallback(),iQ.instance.apply(this,"gds-segmented-control"),this.addEventListener("focusin",e=>{e.target instanceof n3&&(tE(this,e4,this.segments.indexOf(e.target)),tk(this,tr).call(this,!0))})}render(){return iX`${iR(this._showPrevButton,()=>iX`<button
            id="btn-prev"
            @click=${tk(this,tl)}
            aria-label=${rk("Scroll right")}
          >
            <gds-icon-chevron-left />
          </button>`)}
      <div
        id="track"
        @scroll=${()=>{this._elTrack.scrollLeft=0}}
      >
        <div
          id="segments"
          @pointerdown=${tk(this,te)}
          @pointermove=${tk(this,tt)}
          @touchmove=${tk(this,tt)}
          @pointerup=${tk(this,ts)}
          @pointercancel=${tk(this,ts)}
          role="list"
        >
          <slot
            gds-allow="gds-segment"
            @click=${tk(this,tp)}
            @slotchange=${tM(this,tn,ta)}
            role="none"
          ></slot>
          <div id="indicator" role="none"></div>
        </div>
      </div>
      ${iR(this._showNextButton,()=>iX`<button
            id="btn-next"
            @click=${tk(this,td)}
            aria-label=${rk("Scroll right")}
          >
            <gds-icon-chevron-right />
          </button>`)}`}_recalculateMinWidth(){this.updateComplete.then(()=>tk(this,tr).call(this))}};e1=new WeakMap,e2=new WeakMap,e5=new WeakMap,e3=new WeakMap,e6=new WeakMap,e4=new WeakMap,e7=new WeakMap,e8=new WeakMap,e9=new WeakMap,te=new WeakMap,tt=new WeakMap,ts=new WeakMap,ti=new WeakMap,tr=new WeakMap,to=new WeakMap,tn=new WeakSet,ta=function(){let e=this.segments.find(e=>e.selected)?.value;e&&tE(this,e1,e),tk(this,tr).call(this)},tl=new WeakMap,td=new WeakMap,th=new WeakMap,tc=new WeakMap,tp=new WeakMap,tu=new WeakMap,n8.styles=[rh,sT(n6)],tx([iL({type:Number,attribute:"seg-min-width"})],n8.prototype,"segMinWidth",2),tx([iL()],n8.prototype,"size",2),tx([iL()],n8.prototype,"value",1),tx([iP("slot")],n8.prototype,"_elSlot",2),tx([iP("#indicator")],n8.prototype,"_elIndicator",2),tx([iP("#track")],n8.prototype,"_elTrack",2),tx([iP("#segments")],n8.prototype,"_elSegments",2),tx([iW()],n8.prototype,"_showPrevButton",2),tx([iW()],n8.prototype,"_showNextButton",2),tx([n2(),i1("segMinWidth")],n8.prototype,"_recalculateMinWidth",1),n8=tx([iq("gds-segmented-control")],n8);var n9=class extends iJ{constructor(){super(...arguments),this.colorScheme="light"}connectedCallback(){super.connectedCallback(),iQ.instance.apply(this,"gds-theme")}render(){return iX` <slot></slot> `}};tx([iL({reflect:!0,attribute:"color-scheme"})],n9.prototype,"colorScheme",2),n9=tx([iq("gds-theme")],n9);var ae=class extends nv{};ae._regularSVG='<path d="M2.75 15.0938L9 20.25L21.25 3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',ae._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M21.7426 2.99454C22.2979 3.40464 22.4157 4.18729 22.0056 4.74263L10.0056 20.9926C9.80433 21.2652 9.50107 21.4443 9.16524 21.4891C8.82942 21.5339 8.4898 21.4404 8.22417 21.2301L2.22417 16.4801C1.6829 16.0516 1.59149 15.2655 2.01999 14.7242C2.4485 14.1829 3.23466 14.0915 3.77593 14.52L8.76241 18.4677L19.9945 3.25753C20.4046 2.70218 21.1873 2.58444 21.7426 2.99454Z" fill="currentColor"/>',ae._name="checkmark",ae=tx([iq("gds-icon-checkmark")],ae);var at=sL`
  @layer base, reset, transitional-styles;
  @layer base {
    .btn-p {
      padding: 0 0.75rem;
    }
    .icon {
      width: 1rem;
    }
  }
`,as=class extends iJ{constructor(){super(...arguments),this.selected=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),iQ.instance.apply(this,"gds-filter-chip"),this._button.then(e=>{iQ.instance.apply(e,"gds-button")})}render(){let e={"btn-p":!this.selected};return iX`<gds-button
      class="btn"
      size="small"
      .rank=${this.selected?"primary":"secondary"}
      variant=${this._isUsingTransitionalStyles?"ghost":"default"}
      gds-role="option"
      gds-aria-selected=${this.selected}
    >
      <span class=${iI(e)}><slot></slot></span>
      <gds-icon-checkmark
        slot="trail"
        style="display: ${this.selected?"contents":"none"}"
        width="16"
        height="16"
        class="icon"
      ></gds-icon-checkmark>
    </gds-button>`}};as.styles=[at],tx([iL({reflect:!0,type:Boolean})],as.prototype,"selected",2),tx([iL()],as.prototype,"value",2),tx([iO(function(e){return iG.get(e)??e}("gds-button"))],as.prototype,"_button",2),as=tx([iq("gds-filter-chip")],as);var ai=sL`
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
`,ar=class extends rg{constructor(){super(...arguments),tC(this,tv),tC(this,tb),this.multiple=!1,this.label="",this.rowCollapse=!1,this._collapsed=!1,tC(this,tg,e=>{let t=this.chips.find(t=>t===e.target||t.contains(e.target));t&&(this.multiple&&Array.isArray(this.value)?t.selected?this.value=this.value.filter(e=>e!==t.value):this.value=[...this.value,t.value]:this.value=t.value,this.dispatchEvent(new CustomEvent("change",{detail:{clickedChip:t,value:this.value},bubbles:!0,composed:!0})))}),tC(this,tf,3),tC(this,ty,0)}get chips(){return this._elSlot?this._elSlot.assignedElements():[]}render(){let e={collapse:this._collapsed};return iX`<div
      class="chips ${iI(e)}"
      role="listbox"
      aria-label=${this.label}
      aria-multiselectable=${this.multiple}
    >
      <slot
        gds-allow="gds-filter-chip"
        @click=${tk(this,tg)}
        @slotchange=${tM(this,tb,t_)}
        role="none"
      ></slot>
    </div>`}_handleResize(){if(!this.rowCollapse)return;let e=tM(this,tv,tm).call(this),t=this.offsetHeight,s=this.offsetWidth;t>=e*tk(this,tf)&&(this._collapsed=!0,tE(this,ty,s)),s>tk(this,ty)&&(this._collapsed=!1)}_updateSelectedFromValue(){this.value&&(this.multiple&&!Array.isArray(this.value)&&(this.value=[this.value]),!this.multiple&&Array.isArray(this.value)&&(this.value=this.value[0]),this.updateComplete.then(()=>{this.chips.forEach(e=>{e.selected=this.multiple?this.value.includes(e.value):this.value===e.value})}))}};tg=new WeakMap,tf=new WeakMap,ty=new WeakMap,tv=new WeakSet,tm=function(){return this.chips[0]?.offsetHeight||0},tb=new WeakSet,t_=function(){let e=this.chips.find(e=>e.selected)?.value;e&&(this.value=e)},ar.styles=[ai],tx([iL({converter:{fromAttribute:e=>e.split(","),toAttribute:e=>Array.isArray(e)?e.join(","):e}})],ar.prototype,"value",2),tx([iL({type:Boolean})],ar.prototype,"multiple",2),tx([iL()],ar.prototype,"label",2),tx([iL({type:Boolean,attribute:"row-collapse"})],ar.prototype,"rowCollapse",2),tx([iW()],ar.prototype,"_collapsed",2),tx([iP("slot")],ar.prototype,"_elSlot",2),tx([n2()],ar.prototype,"_handleResize",1),tx([i1("value")],ar.prototype,"_updateSelectedFromValue",1),ar=tx([iq("gds-filter-chips")],ar)})();/*! Bundled license information:

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

lit-html/static.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/if-defined.js:
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

lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
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