"use strict";(()=>{var e,t,s,i,r,o,n,a,l,d,h,c,p,u,g,f,y,v,m,b,_,w,$,x,k,A,C,E,S,M,z,F,D,T,L,W,P,N,O,R,H,U,V,B,I,j,Y,G,q,K,X,Z,J,Q,ee,et,es,ei,er,eo,en,ea,el,ed,eh,ec,ep,eu,eg,ef,ey,ev,em,eb,e_,ew,e$,ex,ek,eA,eC,eE,eS,eM,ez,eF,eD,eT,eL,eW,eP,eN,eO,eR,eH,eU,eV,eB,eI,ej,eY,eG,eq,eK,eX,eZ,eJ,eQ,e0,e1,e2,e5,e3,e6,e4,e7,e8,e9,te,tt,ts,ti,tr,to,tn,ta,tl,td,th,tc,tp,tu,tg,tf,ty,tv,tm,tb,t_=Object.defineProperty,tw=Object.getOwnPropertyDescriptor,t$=(e,t,s,i)=>{for(var r,o=i>1?void 0:i?tw(t,s):t,n=e.length-1;n>=0;n--)(r=e[n])&&(o=(i?r(t,s,o):r(o))||o);return i&&o&&t_(t,s,o),o},tx=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)},tk=(e,t,s)=>(tx(e,t,"read from private field"),s?s.call(e):t.get(e)),tA=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},tC=(e,t,s,i)=>(tx(e,t,"write to private field"),i?i.call(e,s):t.set(e,s),s),tE=(e,t,s,i)=>({set _(value){tC(e,t,value,s)},get _(){return tk(e,t,i)}}),tS=(e,t,s)=>(tx(e,t,"access private method"),s),tM=globalThis,tz=tM.ShadowRoot&&(void 0===tM.ShadyCSS||tM.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,tF=Symbol(),tD=new WeakMap,tT=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==tF)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(tz&&void 0===e){let s=void 0!==t&&1===t.length;s&&(e=tD.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&tD.set(t,e))}return e}toString(){return this.cssText}},tL=e=>new tT("string"==typeof e?e:e+"",void 0,tF),tW=(e,t)=>{if(tz)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let s of t){let t=document.createElement("style"),i=tM.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=s.cssText,e.appendChild(t)}},tP=tz?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let s of e.cssRules)t+=s.cssText;return tL(t)})(e):e,{is:tN,defineProperty:tO,getOwnPropertyDescriptor:tR,getOwnPropertyNames:tH,getOwnPropertySymbols:tU,getPrototypeOf:tV}=Object,tB=globalThis,tI=tB.trustedTypes,tj=tI?tI.emptyScript:"",tY=tB.reactiveElementPolyfillSupport,tG=(e,t)=>e,tq={toAttribute(e,t){switch(t){case Boolean:e=e?tj:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=null!==e;break;case Number:s=null===e?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch(e){s=null}}return s}},tK=(e,t)=>!tN(e,t),tX={attribute:!0,type:String,converter:tq,reflect:!1,hasChanged:tK};Symbol.metadata??=Symbol("metadata"),tB.litPropertyMetadata??=new WeakMap;var tZ=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=tX){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(e,s,t);void 0!==i&&tO(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){let{get:i,set:r}=tR(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return i?.call(this)},set(t){let o=i?.call(this);r.call(this,t),this.requestUpdate(e,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??tX}static _$Ei(){if(this.hasOwnProperty(tG("elementProperties")))return;let e=tV(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(tG("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(tG("properties"))){let e=this.properties;for(let t of[...tH(e),...tU(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,s]of t)this.elementProperties.set(e,s)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let s=this._$Eu(e,t);void 0!==s&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let s of new Set(e.flat(1/0).reverse()))t.unshift(tP(s));else void 0!==e&&t.push(tP(e));return t}static _$Eu(e,t){let s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return tW(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EC(e,t){let s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(void 0!==i&&!0===s.reflect){let r=(void 0!==s.converter?.toAttribute?s.converter:tq).toAttribute(t,s.type);this._$Em=e,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(e,t){let s=this.constructor,i=s._$Eh.get(e);if(void 0!==i&&this._$Em!==i){let e=s.getPropertyOptions(i),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:tq;this._$Em=i,this[i]=r.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,s){if(void 0!==e){if(!((s??=this.constructor.getPropertyOptions(e)).hasChanged??tK)(this[e],t))return;this.P(e,t,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,s){this._$AL.has(e)||this._$AL.set(e,t),!0===s.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,s]of e)!0!==s.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],s)}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(e){}firstUpdated(e){}};tZ.elementStyles=[],tZ.shadowRootOptions={mode:"open"},tZ[tG("elementProperties")]=new Map,tZ[tG("finalized")]=new Map,tY?.({ReactiveElement:tZ}),(tB.reactiveElementVersions??=[]).push("2.0.4");var tJ=globalThis,tQ=tJ.trustedTypes,t0=tQ?tQ.createPolicy("lit-html",{createHTML:e=>e}):void 0,t1="$lit$",t2=`lit$${Math.random().toFixed(9).slice(2)}$`,t5="?"+t2,t3=`<${t5}>`,t6=document,t4=()=>t6.createComment(""),t7=e=>null===e||"object"!=typeof e&&"function"!=typeof e,t8=Array.isArray,t9=e=>t8(e)||"function"==typeof e?.[Symbol.iterator],se="[ 	\n\f\r]",st=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ss=/-->/g,si=/>/g,sr=RegExp(`>|${se}(?:([^\\s"'>=/]+)(${se}*=${se}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),so=/'/g,sn=/"/g,sa=/^(?:script|style|textarea|title)$/i,sl=e=>(t,...s)=>({_$litType$:e,strings:t,values:s}),sd=sl(1),sh=sl(2),sc=Symbol.for("lit-noChange"),sp=Symbol.for("lit-nothing"),su=new WeakMap,sg=t6.createTreeWalker(t6,129);function sf(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==t0?t0.createHTML(t):t}var sy=(e,t)=>{let s=e.length-1,i=[],r,o=2===t?"<svg>":"",n=st;for(let t=0;t<s;t++){let s=e[t],a,l,d=-1,h=0;for(;h<s.length&&(n.lastIndex=h,null!==(l=n.exec(s)));)h=n.lastIndex,n===st?"!--"===l[1]?n=ss:void 0!==l[1]?n=si:void 0!==l[2]?(sa.test(l[2])&&(r=RegExp("</"+l[2],"g")),n=sr):void 0!==l[3]&&(n=sr):n===sr?">"===l[0]?(n=r??st,d=-1):void 0===l[1]?d=-2:(d=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?sr:'"'===l[3]?sn:so):n===sn||n===so?n=sr:n===ss||n===si?n=st:(n=sr,r=void 0);let c=n===sr&&e[t+1].startsWith("/>")?" ":"";o+=n===st?s+t3:d>=0?(i.push(a),s.slice(0,d)+t1+s.slice(d)+t2+c):s+t2+(-2===d?t:c)}return[sf(e,o+(e[s]||"<?>")+(2===t?"</svg>":"")),i]},sv=class e{constructor({strings:t,_$litType$:s},i){let r;this.parts=[];let o=0,n=0,a=t.length-1,l=this.parts,[d,h]=sy(t,s);if(this.el=e.createElement(d,i),sg.currentNode=this.el.content,2===s){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=sg.nextNode())&&l.length<a;){if(1===r.nodeType){if(r.hasAttributes())for(let e of r.getAttributeNames())if(e.endsWith(t1)){let t=h[n++],s=r.getAttribute(e).split(t2),i=/([.?@])?(.*)/.exec(t);l.push({type:1,index:o,name:i[2],strings:s,ctor:"."===i[1]?s$:"?"===i[1]?sx:"@"===i[1]?sk:sw}),r.removeAttribute(e)}else e.startsWith(t2)&&(l.push({type:6,index:o}),r.removeAttribute(e));if(sa.test(r.tagName)){let e=r.textContent.split(t2),t=e.length-1;if(t>0){r.textContent=tQ?tQ.emptyScript:"";for(let s=0;s<t;s++)r.append(e[s],t4()),sg.nextNode(),l.push({type:2,index:++o});r.append(e[t],t4())}}}else if(8===r.nodeType){if(r.data===t5)l.push({type:2,index:o});else{let e=-1;for(;-1!==(e=r.data.indexOf(t2,e+1));)l.push({type:7,index:o}),e+=t2.length-1}}o++}}static createElement(e,t){let s=t6.createElement("template");return s.innerHTML=e,s}};function sm(e,t,s=e,i){if(t===sc)return t;let r=void 0!==i?s._$Co?.[i]:s._$Cl,o=t7(t)?void 0:t._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(e))._$AT(e,s,i),void 0!==i?(s._$Co??=[])[i]=r:s._$Cl=r),void 0!==r&&(t=sm(e,r._$AS(e,t.values),r,i)),t}var sb=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:s}=this._$AD,i=(e?.creationScope??t6).importNode(t,!0);sg.currentNode=i;let r=sg.nextNode(),o=0,n=0,a=s[0];for(;void 0!==a;){if(o===a.index){let t;2===a.type?t=new s_(r,r.nextSibling,this,e):1===a.type?t=new a.ctor(r,a.name,a.strings,this,e):6===a.type&&(t=new sA(r,this,e)),this._$AV.push(t),a=s[++n]}o!==a?.index&&(r=sg.nextNode(),o++)}return sg.currentNode=t6,i}p(e){let t=0;for(let s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}},s_=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=sp,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){t7(e=sm(this,e,t))?e===sp||null==e||""===e?(this._$AH!==sp&&this._$AR(),this._$AH=sp):e!==this._$AH&&e!==sc&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):t9(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==sp&&t7(this._$AH)?this._$AA.nextSibling.data=e:this.T(t6.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:s}=e,i="number"==typeof s?this._$AC(e):(void 0===s.el&&(s.el=sv.createElement(sf(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(t);else{let e=new sb(i,this),s=e.u(this.options);e.p(t),this.T(s),this._$AH=e}}_$AC(e){let t=su.get(e.strings);return void 0===t&&su.set(e.strings,t=new sv(e)),t}k(t){t8(this._$AH)||(this._$AH=[],this._$AR());let s=this._$AH,i,r=0;for(let o of t)r===s.length?s.push(i=new e(this.S(t4()),this.S(t4()),this,this.options)):i=s[r],i._$AI(o),r++;r<s.length&&(this._$AR(i&&i._$AB.nextSibling,r),s.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}},sw=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,r){this.type=1,this._$AH=sp,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=sp}_$AI(e,t=this,s,i){let r=this.strings,o=!1;if(void 0===r)(o=!t7(e=sm(this,e,t,0))||e!==this._$AH&&e!==sc)&&(this._$AH=e);else{let i,n;let a=e;for(e=r[0],i=0;i<r.length-1;i++)(n=sm(this,a[s+i],t,i))===sc&&(n=this._$AH[i]),o||=!t7(n)||n!==this._$AH[i],n===sp?e=sp:e!==sp&&(e+=(n??"")+r[i+1]),this._$AH[i]=n}o&&!i&&this.j(e)}j(e){e===sp?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},s$=class extends sw{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===sp?void 0:e}},sx=class extends sw{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==sp)}},sk=class extends sw{constructor(e,t,s,i,r){super(e,t,s,i,r),this.type=5}_$AI(e,t=this){if((e=sm(this,e,t,0)??sp)===sc)return;let s=this._$AH,i=e===sp&&s!==sp||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==sp&&(s===sp||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},sA=class{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){sm(this,e)}},sC=tJ.litHtmlPolyfillSupport;sC?.(sv,s_),(tJ.litHtmlVersions??=[]).push("3.1.3");var sE=globalThis,sS=sE.ShadowRoot&&(void 0===sE.ShadyCSS||sE.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,sM=Symbol(),sz=new WeakMap,sF=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==sM)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(sS&&void 0===e){let s=void 0!==t&&1===t.length;s&&(e=sz.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&sz.set(t,e))}return e}toString(){return this.cssText}},sD=e=>new sF("string"==typeof e?e:e+"",void 0,sM),sT=(e,...t)=>new sF(1===e.length?e[0]:t.reduce((t,s,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[i+1],e[0]),e,sM),sL=(e,t)=>{if(sS)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let s of t){let t=document.createElement("style"),i=sE.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=s.cssText,e.appendChild(t)}},sW=sS?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let s of e.cssRules)t+=s.cssText;return sD(t)})(e):e,{is:sP,defineProperty:sN,getOwnPropertyDescriptor:sO,getOwnPropertyNames:sR,getOwnPropertySymbols:sH,getPrototypeOf:sU}=Object,sV=globalThis,sB=sV.trustedTypes,sI=sB?sB.emptyScript:"",sj=sV.reactiveElementPolyfillSupport,sY=(e,t)=>e,sG={toAttribute(e,t){switch(t){case Boolean:e=e?sI:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=null!==e;break;case Number:s=null===e?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch(e){s=null}}return s}},sq=(e,t)=>!sP(e,t),sK={attribute:!0,type:String,converter:sG,reflect:!1,hasChanged:sq};Symbol.metadata??=Symbol("metadata"),sV.litPropertyMetadata??=new WeakMap;var sX=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=sK){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(e,s,t);void 0!==i&&sN(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){let{get:i,set:r}=sO(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return i?.call(this)},set(t){let o=i?.call(this);r.call(this,t),this.requestUpdate(e,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??sK}static _$Ei(){if(this.hasOwnProperty(sY("elementProperties")))return;let e=sU(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(sY("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(sY("properties"))){let e=this.properties;for(let t of[...sR(e),...sH(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,s]of t)this.elementProperties.set(e,s)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let s=this._$Eu(e,t);void 0!==s&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let s of new Set(e.flat(1/0).reverse()))t.unshift(sW(s));else void 0!==e&&t.push(sW(e));return t}static _$Eu(e,t){let s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return sL(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EC(e,t){let s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(void 0!==i&&!0===s.reflect){let r=(void 0!==s.converter?.toAttribute?s.converter:sG).toAttribute(t,s.type);this._$Em=e,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(e,t){let s=this.constructor,i=s._$Eh.get(e);if(void 0!==i&&this._$Em!==i){let e=s.getPropertyOptions(i),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:sG;this._$Em=i,this[i]=r.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,s){if(void 0!==e){if(!((s??=this.constructor.getPropertyOptions(e)).hasChanged??sq)(this[e],t))return;this.P(e,t,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,s){this._$AL.has(e)||this._$AL.set(e,t),!0===s.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,s]of e)!0!==s.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],s)}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(e){}firstUpdated(e){}};sX.elementStyles=[],sX.shadowRootOptions={mode:"open"},sX[sY("elementProperties")]=new Map,sX[sY("finalized")]=new Map,sj?.({ReactiveElement:sX}),(sV.reactiveElementVersions??=[]).push("2.0.4");var sZ=globalThis,sJ=sZ.trustedTypes,sQ=sJ?sJ.createPolicy("lit-html",{createHTML:e=>e}):void 0,s0="$lit$",s1=`lit$${Math.random().toFixed(9).slice(2)}$`,s2="?"+s1,s5=`<${s2}>`,s3=document,s6=()=>s3.createComment(""),s4=e=>null===e||"object"!=typeof e&&"function"!=typeof e,s7=Array.isArray,s8=e=>s7(e)||"function"==typeof e?.[Symbol.iterator],s9="[ 	\n\f\r]",ie=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,it=/-->/g,is=/>/g,ii=RegExp(`>|${s9}(?:([^\\s"'>=/]+)(${s9}*=${s9}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ir=/'/g,io=/"/g,ia=/^(?:script|style|textarea|title)$/i,il=e=>(t,...s)=>({_$litType$:e,strings:t,values:s}),id=il(1);il(2);var ih=Symbol.for("lit-noChange"),ic=Symbol.for("lit-nothing"),ip=new WeakMap,iu=s3.createTreeWalker(s3,129);function ig(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==sQ?sQ.createHTML(t):t}var iy=(e,t)=>{let s=e.length-1,i=[],r,o=2===t?"<svg>":"",n=ie;for(let t=0;t<s;t++){let s=e[t],a,l,d=-1,h=0;for(;h<s.length&&(n.lastIndex=h,null!==(l=n.exec(s)));)h=n.lastIndex,n===ie?"!--"===l[1]?n=it:void 0!==l[1]?n=is:void 0!==l[2]?(ia.test(l[2])&&(r=RegExp("</"+l[2],"g")),n=ii):void 0!==l[3]&&(n=ii):n===ii?">"===l[0]?(n=r??ie,d=-1):void 0===l[1]?d=-2:(d=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?ii:'"'===l[3]?io:ir):n===io||n===ir?n=ii:n===it||n===is?n=ie:(n=ii,r=void 0);let c=n===ii&&e[t+1].startsWith("/>")?" ":"";o+=n===ie?s+s5:d>=0?(i.push(a),s.slice(0,d)+s0+s.slice(d)+s1+c):s+s1+(-2===d?t:c)}return[ig(e,o+(e[s]||"<?>")+(2===t?"</svg>":"")),i]},iv=class e{constructor({strings:t,_$litType$:s},i){let r;this.parts=[];let o=0,n=0,a=t.length-1,l=this.parts,[d,h]=iy(t,s);if(this.el=e.createElement(d,i),iu.currentNode=this.el.content,2===s){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=iu.nextNode())&&l.length<a;){if(1===r.nodeType){if(r.hasAttributes())for(let e of r.getAttributeNames())if(e.endsWith(s0)){let t=h[n++],s=r.getAttribute(e).split(s1),i=/([.?@])?(.*)/.exec(t);l.push({type:1,index:o,name:i[2],strings:s,ctor:"."===i[1]?i$:"?"===i[1]?ix:"@"===i[1]?ik:iw}),r.removeAttribute(e)}else e.startsWith(s1)&&(l.push({type:6,index:o}),r.removeAttribute(e));if(ia.test(r.tagName)){let e=r.textContent.split(s1),t=e.length-1;if(t>0){r.textContent=sJ?sJ.emptyScript:"";for(let s=0;s<t;s++)r.append(e[s],s6()),iu.nextNode(),l.push({type:2,index:++o});r.append(e[t],s6())}}}else if(8===r.nodeType){if(r.data===s2)l.push({type:2,index:o});else{let e=-1;for(;-1!==(e=r.data.indexOf(s1,e+1));)l.push({type:7,index:o}),e+=s1.length-1}}o++}}static createElement(e,t){let s=s3.createElement("template");return s.innerHTML=e,s}};function im(e,t,s=e,i){if(t===ih)return t;let r=void 0!==i?s._$Co?.[i]:s._$Cl,o=s4(t)?void 0:t._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(e))._$AT(e,s,i),void 0!==i?(s._$Co??=[])[i]=r:s._$Cl=r),void 0!==r&&(t=im(e,r._$AS(e,t.values),r,i)),t}var ib=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:s}=this._$AD,i=(e?.creationScope??s3).importNode(t,!0);iu.currentNode=i;let r=iu.nextNode(),o=0,n=0,a=s[0];for(;void 0!==a;){if(o===a.index){let t;2===a.type?t=new i_(r,r.nextSibling,this,e):1===a.type?t=new a.ctor(r,a.name,a.strings,this,e):6===a.type&&(t=new iA(r,this,e)),this._$AV.push(t),a=s[++n]}o!==a?.index&&(r=iu.nextNode(),o++)}return iu.currentNode=s3,i}p(e){let t=0;for(let s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}},i_=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=ic,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){s4(e=im(this,e,t))?e===ic||null==e||""===e?(this._$AH!==ic&&this._$AR(),this._$AH=ic):e!==this._$AH&&e!==ih&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):s8(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==ic&&s4(this._$AH)?this._$AA.nextSibling.data=e:this.T(s3.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:s}=e,i="number"==typeof s?this._$AC(e):(void 0===s.el&&(s.el=iv.createElement(ig(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(t);else{let e=new ib(i,this),s=e.u(this.options);e.p(t),this.T(s),this._$AH=e}}_$AC(e){let t=ip.get(e.strings);return void 0===t&&ip.set(e.strings,t=new iv(e)),t}k(t){s7(this._$AH)||(this._$AH=[],this._$AR());let s=this._$AH,i,r=0;for(let o of t)r===s.length?s.push(i=new e(this.S(s6()),this.S(s6()),this,this.options)):i=s[r],i._$AI(o),r++;r<s.length&&(this._$AR(i&&i._$AB.nextSibling,r),s.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}},iw=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,r){this.type=1,this._$AH=ic,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=ic}_$AI(e,t=this,s,i){let r=this.strings,o=!1;if(void 0===r)(o=!s4(e=im(this,e,t,0))||e!==this._$AH&&e!==ih)&&(this._$AH=e);else{let i,n;let a=e;for(e=r[0],i=0;i<r.length-1;i++)(n=im(this,a[s+i],t,i))===ih&&(n=this._$AH[i]),o||=!s4(n)||n!==this._$AH[i],n===ic?e=ic:e!==ic&&(e+=(n??"")+r[i+1]),this._$AH[i]=n}o&&!i&&this.j(e)}j(e){e===ic?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},i$=class extends iw{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ic?void 0:e}},ix=class extends iw{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==ic)}},ik=class extends iw{constructor(e,t,s,i,r){super(e,t,s,i,r),this.type=5}_$AI(e,t=this){if((e=im(this,e,t,0)??ic)===ih)return;let s=this._$AH,i=e===ic&&s!==ic||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==ic&&(s===ic||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},iA=class{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){im(this,e)}},iC=sZ.litHtmlPolyfillSupport;iC?.(iv,i_),(sZ.litHtmlVersions??=[]).push("3.1.3");var iE=(e,t,s)=>{let i=s?.renderBefore??t,r=i._$litPart$;if(void 0===r){let e=s?.renderBefore??null;i._$litPart$=r=new i_(t.insertBefore(s6(),e),e,void 0,s??{})}return r._$AI(e),r},iS=class extends sX{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=iE(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ih}};iS._$litElement$=!0,iS.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:iS});var iM=globalThis.litElementPolyfillSupport;iM?.({LitElement:iS}),(globalThis.litElementVersions??=[]).push("4.0.5");var iz=e=>(t,s)=>{void 0!==s?s.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},iF={attribute:!0,type:String,converter:tq,reflect:!1,hasChanged:tK},iD=(e=iF,t,s)=>{let{kind:i,metadata:r}=s,o=globalThis.litPropertyMetadata.get(r);if(void 0===o&&globalThis.litPropertyMetadata.set(r,o=new Map),o.set(s.name,e),"accessor"===i){let{name:i}=s;return{set(s){let r=t.get.call(this);t.set.call(this,s),this.requestUpdate(i,r,e)},init(t){return void 0!==t&&this.P(i,void 0,e),t}}}if("setter"===i){let{name:i}=s;return function(s){let r=this[i];t.call(this,s),this.requestUpdate(i,r,e)}}throw Error("Unsupported decorator location: "+i)};function iT(e){return(t,s)=>"object"==typeof s?iD(e,t,s):((e,t,s)=>{let i=t.hasOwnProperty(s);return t.constructor.createProperty(s,i?{...e,wrapped:!0}:e),i?Object.getOwnPropertyDescriptor(t,s):void 0})(e,t,s)}function iL(e){return iT({...e,state:!0,attribute:!1})}var iW=(e,t,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,s),s);function iP(e,t){return(s,i,r)=>{let o=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}="object"==typeof i?s:r??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return iW(s,i,{get(){let s=e.call(this);return void 0===s&&(null!==(s=o(this))||this.hasUpdated)&&t.call(this,s),s}})}return iW(s,i,{get(){return o(this)}})}}function iN(e){return(t,s)=>iW(t,s,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(e)??null}})}function iO(e,t,s){return e?t(e):s?.(e)}var iR={ATTRIBUTE:1,CHILD:2,ELEMENT:6},iH=e=>(...t)=>({_$litDirective$:e,values:t}),iU=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},iV=iH(class extends iU{constructor(e){if(super(e),e.type!==iR.ATTRIBUTE||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){for(let s in this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[s]&&!this.nt?.has(s)&&this.st.add(s);return this.render(t)}let s=e.element.classList;for(let e of this.st)e in t||(s.remove(e),this.st.delete(e));for(let e in t){let i=!!t[e];i===this.st.has(e)||this.nt?.has(e)||(i?(s.add(e),this.st.add(e)):(s.remove(e),this.st.delete(e)))}return sc}}),iB=class{constructor(e){this.#e=!iI(),this.#t=[],this.#s=new Map,this.#i=new Map,this.host=e,this.host.addController(this)}#e;#t;#s;#i;hostConnected(){this.host.shadowRoot&&0===this.#t.length&&(this.#t=[...this.host.shadowRoot.adoptedStyleSheets||[]])}inject(e,t){let s=Array.isArray(t)?t.map(e=>e.toString()).join(""):t.toString();this.#e?this.#r(e,s):this.#o(e,s)}clearAll(){this.#e?(this.#i.forEach(e=>e.remove()),this.host.shadowRoot?.querySelectorAll("style").forEach(e=>e.innerHTML=""),this.#i.clear()):this.host.shadowRoot&&(this.host.shadowRoot.adoptedStyleSheets=[],this.#s.clear(),this.#t=[])}#r(e,t){let s=this.#i.get(e);s||(s=document.createElement("style"),this.#i.set(e,s)),s.textContent=t,this.host.shadowRoot?.appendChild(s)}#o(e,t){if(!this.host.shadowRoot)return;let s=this.#s.get(e);s||(s=new CSSStyleSheet,this.#s.set(e,s)),s.replaceSync(t),this.host.shadowRoot.adoptedStyleSheets=[...this.#t,...Array.from(this.#s.values())]}};function iI(){try{return new CSSStyleSheet,!0}catch{return!1}}var ij="-gdsvsuffix",iY=new Map,iG=e=>{if(globalThis.GDS_DISABLE_VERSIONED_ELEMENTS)return iY.set(e,e),iz(e);let t=e+ij;return(iY.set(e,t),customElements.get(t))?e=>!1:iz(t)},iq=new WeakMap,iK=e=>e.map(e=>{for(let[t,s]of iY.entries())e=e.replace(RegExp(`${t}(?![-a-z])`,"mg"),s);return e}),iX=function(e){return(t,...s)=>{if(globalThis.GDS_DISABLE_VERSIONED_ELEMENTS)return e(t,...s);let[i,...r]=function(e,...t){let s=iq.get(e);return s||((s=iK(e)).raw=iK(e.raw),iq.set(e,s)),[s,...t]}(t,...s);return e(i,...r)}}(id);!function(e){!function(t){var s="object"==typeof global?global:"object"==typeof self?self:"object"==typeof this?this:Function("return this;")(),i=r(e);function r(e,t){return function(s,i){"function"!=typeof e[s]&&Object.defineProperty(e,s,{configurable:!0,writable:!0,value:i}),t&&t(s,i)}}void 0===s.Reflect?s.Reflect=e:i=r(s.Reflect,i),t(i)}(function(e){var t=Object.prototype.hasOwnProperty,s="function"==typeof Symbol,i=s&&void 0!==Symbol.toPrimitive?Symbol.toPrimitive:"@@toPrimitive",r=s&&void 0!==Symbol.iterator?Symbol.iterator:"@@iterator",o="function"==typeof Object.create,n=({__proto__:[]})instanceof Array,a=!o&&!n,l={create:o?function(){return M(Object.create(null))}:n?function(){return M({__proto__:null})}:function(){return M({})},has:a?function(e,s){return t.call(e,s)}:function(e,t){return t in e},get:a?function(e,s){return t.call(e,s)?e[s]:void 0}:function(e,t){return e[t]}},d=Object.getPrototypeOf(Function),h="object"==typeof process&&process.env&&"true"===process.env.REFLECT_METADATA_USE_MAP_POLYFILL,c=h||"function"!=typeof Map||"function"!=typeof Map.prototype.entries?function(){var e={},t=[],s=function(){function e(e,t,s){this._index=0,this._keys=e,this._values=t,this._selector=s}return e.prototype["@@iterator"]=function(){return this},e.prototype[r]=function(){return this},e.prototype.next=function(){var e=this._index;if(e>=0&&e<this._keys.length){var s=this._selector(this._keys[e],this._values[e]);return e+1>=this._keys.length?(this._index=-1,this._keys=t,this._values=t):this._index++,{value:s,done:!1}}return{value:void 0,done:!0}},e.prototype.throw=function(e){throw this._index>=0&&(this._index=-1,this._keys=t,this._values=t),e},e.prototype.return=function(e){return this._index>=0&&(this._index=-1,this._keys=t,this._values=t),{value:e,done:!0}},e}();return function(){function t(){this._keys=[],this._values=[],this._cacheKey=e,this._cacheIndex=-2}return Object.defineProperty(t.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),t.prototype.has=function(e){return this._find(e,!1)>=0},t.prototype.get=function(e){var t=this._find(e,!1);return t>=0?this._values[t]:void 0},t.prototype.set=function(e,t){var s=this._find(e,!0);return this._values[s]=t,this},t.prototype.delete=function(t){var s=this._find(t,!1);if(s>=0){for(var i=this._keys.length,r=s+1;r<i;r++)this._keys[r-1]=this._keys[r],this._values[r-1]=this._values[r];return this._keys.length--,this._values.length--,t===this._cacheKey&&(this._cacheKey=e,this._cacheIndex=-2),!0}return!1},t.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=e,this._cacheIndex=-2},t.prototype.keys=function(){return new s(this._keys,this._values,i)},t.prototype.values=function(){return new s(this._keys,this._values,o)},t.prototype.entries=function(){return new s(this._keys,this._values,n)},t.prototype["@@iterator"]=function(){return this.entries()},t.prototype[r]=function(){return this.entries()},t.prototype._find=function(e,t){return this._cacheKey!==e&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=e)),this._cacheIndex<0&&t&&(this._cacheIndex=this._keys.length,this._keys.push(e),this._values.push(void 0)),this._cacheIndex},t}();function i(e,t){return e}function o(e,t){return t}function n(e,t){return[e,t]}}():Map,p=h||"function"!=typeof Set||"function"!=typeof Set.prototype.entries?function(){function e(){this._map=new c}return Object.defineProperty(e.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),e.prototype.has=function(e){return this._map.has(e)},e.prototype.add=function(e){return this._map.set(e,e),this},e.prototype.delete=function(e){return this._map.delete(e)},e.prototype.clear=function(){this._map.clear()},e.prototype.keys=function(){return this._map.keys()},e.prototype.values=function(){return this._map.values()},e.prototype.entries=function(){return this._map.entries()},e.prototype["@@iterator"]=function(){return this.keys()},e.prototype[r]=function(){return this.keys()},e}():Set,u=new(h||"function"!=typeof WeakMap?function(){var e=l.create(),s=i();return function(){function e(){this._key=i()}return e.prototype.has=function(e){var t=r(e,!1);return void 0!==t&&l.has(t,this._key)},e.prototype.get=function(e){var t=r(e,!1);return void 0!==t?l.get(t,this._key):void 0},e.prototype.set=function(e,t){return r(e,!0)[this._key]=t,this},e.prototype.delete=function(e){var t=r(e,!1);return void 0!==t&&delete t[this._key]},e.prototype.clear=function(){this._key=i()},e}();function i(){var t;do t="@@WeakMap@@"+function(){var e="function"==typeof Uint8Array?"undefined"!=typeof crypto?crypto.getRandomValues(new Uint8Array(16)):"undefined"!=typeof msCrypto?msCrypto.getRandomValues(new Uint8Array(16)):o(new Uint8Array(16),16):o(Array(16),16);e[6]=79&e[6]|64,e[8]=191&e[8]|128;for(var t="",s=0;s<16;++s){var i=e[s];(4===s||6===s||8===s)&&(t+="-"),i<16&&(t+="0"),t+=i.toString(16).toLowerCase()}return t}();while(l.has(e,t));return e[t]=!0,t}function r(e,i){if(!t.call(e,s)){if(!i)return;Object.defineProperty(e,s,{value:l.create()})}return e[s]}function o(e,t){for(var s=0;s<t;++s)e[s]=255*Math.random()|0;return e}}():WeakMap);function g(e,t,s){var i=u.get(e);if(_(i)){if(!s)return;i=new c,u.set(e,i)}var r=i.get(t);if(_(r)){if(!s)return;r=new c,i.set(t,r)}return r}function f(e,t,s){var i=g(t,s,!1);return!_(i)&&!!i.has(e)}function y(e,t,s){var i=g(t,s,!1);if(!_(i))return i.get(e)}function v(e,t,s,i){g(s,i,!0).set(e,t)}function m(e,t){var s=[],i=g(e,t,!1);if(_(i))return s;for(var o=function(e){var t=E(e,r);if(!A(t))throw TypeError();var s=t.call(e);if(!$(s))throw TypeError();return s}(i.keys()),n=0;;){var a=function(e){var t=e.next();return!t.done&&t}(o);if(!a)return s.length=n,s;var l=a.value;try{s[n]=l}catch(e){try{!function(e){var t=e.return;t&&t.call(e)}(o)}finally{throw e}}n++}}function b(e){if(null===e)return 1;switch(typeof e){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return null===e?1:6;default:return 6}}function _(e){return void 0===e}function w(e){return null===e}function $(e){return"object"==typeof e?null!==e:"function"==typeof e}function x(e){var t=function(e,t){switch(b(e)){case 0:case 1:case 2:case 3:case 4:case 5:return e}var s=3===t?"string":5===t?"number":"default",r=E(e,i);if(void 0!==r){var o=r.call(e,s);if($(o))throw TypeError();return o}return function(e,t){if("string"===t){var s=e.toString;if(A(s)){var i=s.call(e);if(!$(i))return i}var r=e.valueOf;if(A(r)){var i=r.call(e);if(!$(i))return i}}else{var r=e.valueOf;if(A(r)){var i=r.call(e);if(!$(i))return i}var o=e.toString;if(A(o)){var i=o.call(e);if(!$(i))return i}}throw TypeError()}(e,"default"===s?"number":s)}(e,3);return"symbol"==typeof t?t:""+t}function k(e){return Array.isArray?Array.isArray(e):e instanceof Object?e instanceof Array:"[object Array]"===Object.prototype.toString.call(e)}function A(e){return"function"==typeof e}function C(e){return"function"==typeof e}function E(e,t){var s=e[t];if(null!=s){if(!A(s))throw TypeError();return s}}function S(e){var t=Object.getPrototypeOf(e);if("function"!=typeof e||e===d||t!==d)return t;var s=e.prototype,i=s&&Object.getPrototypeOf(s);if(null==i||i===Object.prototype)return t;var r=i.constructor;return"function"!=typeof r||r===e?t:r}function M(e){return e.__=void 0,delete e.__,e}e("decorate",function(e,t,s,i){if(_(s)){if(!k(e)||!C(t))throw TypeError();return function(e,t){for(var s=e.length-1;s>=0;--s){var i=(0,e[s])(t);if(!_(i)&&!w(i)){if(!C(i))throw TypeError();t=i}}return t}(e,t)}if(!k(e)||!$(t)||!$(i)&&!_(i)&&!w(i))throw TypeError();return w(i)&&(i=void 0),function(e,t,s,i){for(var r=e.length-1;r>=0;--r){var o=(0,e[r])(t,s,i);if(!_(o)&&!w(o)){if(!$(o))throw TypeError();i=o}}return i}(e,t,s=x(s),i)}),e("metadata",function(e,t){return function(s,i){if(!$(s)||!_(i)&&!function(e){switch(b(e)){case 3:case 4:return!0;default:return!1}}(i))throw TypeError();v(e,t,s,i)}}),e("defineMetadata",function(e,t,s,i){if(!$(s))throw TypeError();return _(i)||(i=x(i)),v(e,t,s,i)}),e("hasMetadata",function(e,t,s){if(!$(t))throw TypeError();return _(s)||(s=x(s)),function e(t,s,i){if(f(t,s,i))return!0;var r=S(s);return!w(r)&&e(t,r,i)}(e,t,s)}),e("hasOwnMetadata",function(e,t,s){if(!$(t))throw TypeError();return _(s)||(s=x(s)),f(e,t,s)}),e("getMetadata",function(e,t,s){if(!$(t))throw TypeError();return _(s)||(s=x(s)),function e(t,s,i){if(f(t,s,i))return y(t,s,i);var r=S(s);if(!w(r))return e(t,r,i)}(e,t,s)}),e("getOwnMetadata",function(e,t,s){if(!$(t))throw TypeError();return _(s)||(s=x(s)),y(e,t,s)}),e("getMetadataKeys",function(e,t){if(!$(e))throw TypeError();return _(t)||(t=x(t)),function e(t,s){var i=m(t,s),r=S(t);if(null===r)return i;var o=e(r,s);if(o.length<=0)return i;if(i.length<=0)return o;for(var n=new p,a=[],l=0;l<i.length;l++){var d=i[l],h=n.has(d);h||(n.add(d),a.push(d))}for(var c=0;c<o.length;c++){var d=o[c],h=n.has(d);h||(n.add(d),a.push(d))}return a}(e,t)}),e("getOwnMetadataKeys",function(e,t){if(!$(e))throw TypeError();return _(t)||(t=x(t)),m(e,t)}),e("deleteMetadata",function(e,t,s){if(!$(t))throw TypeError();_(s)||(s=x(s));var i=g(t,s,!1);if(_(i)||!i.delete(e))return!1;if(i.size>0)return!0;var r=u.get(t);return r.delete(s),r.size>0||(u.delete(t),!0)})})}(t||(t={}));var iZ=class extends iS{constructor(){super(),this.gdsElementName="",this._isUsingTransitionalStyles=!1,this._dynamicStylesController=new iB(this)}connectedCallback(){var e;super.connectedCallback(),this.gdsElementName=(e=this.tagName.toLowerCase(),[...iY.entries()].find(([,t])=>t===e)?.[0]||this.gdsElementName),this.setAttribute("gds-element",this.gdsElementName)}};t$([iL()],iZ.prototype,"_isUsingTransitionalStyles",2);var iJ=class e{static get instance(){return globalThis.__gdsTransitionalStyles?.[ij]||(globalThis.__gdsTransitionalStyles={...globalThis.__gdsTransitionalStyles,[ij]:new e}),globalThis.__gdsTransitionalStyles[ij]}#n=new Map;#a=new Map;#e=!iI();apply(e,t){if(!e.shadowRoot)return;let s=this.#n.get(t);s&&(this.#a.set(t,e),this.applyToElement(t,s))}applyToElement(e,t){let s=this.#a.get(e);s&&s.shadowRoot&&(s._dynamicStylesController.clearAll(),s._dynamicStylesController.inject("t-styles",sD(t)),s._isUsingTransitionalStyles=!0)}register(e,t){let s=t;this.#e&&(s=`@layer reset {
        *:not(style, [gds-element]) {
          all: revert;
        }
      }
      ${t}`),this.#n.set(e,s),this.applyToElement(e,s)}},iQ=sT`
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
`;function i0(e,t){let s={waitUntilFirstUpdate:!1,...t};return(t,i,r)=>{let{update:o}=t,n=Array.isArray(e)?e:[e];t.update=function(e){n.forEach(t=>{if(e.has(t)){let i=e.get(t),o=this[t];i!==o&&(!s.waitUntilFirstUpdate||this.hasUpdated)&&r.value?.call(this,i,o)}}),o.call(this,e)}}}var i1=e=>{class t extends e{constructor(){super(...arguments),this.onblur=e=>{this.setAttribute("tabindex","-1"),this.dispatchEvent(new FocusEvent("gds-blur",{bubbles:!0,composed:!0,relatedTarget:e.relatedTarget}))},this.onfocus=e=>{this.dispatchEvent(new FocusEvent("gds-focus",{bubbles:!0,composed:!0,relatedTarget:e.relatedTarget}))}}focus(e){this.setAttribute("tabindex","0"),super.focus(e)}}return t},i2=class extends i1(iZ){constructor(){super(),tA(this,i),tA(this,s,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",tS(this,i,r)),this.addEventListener("keydown",e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),tS(this,i,r).call(this,e))})}get hidden(){return tk(this,s)}set hidden(e){this.isPlaceholder||(tC(this,s,"true"===e||!0===e),this.setAttribute("aria-hidden",e.toString()))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.isPlaceholder&&(tC(this,s,!0),this.setAttribute("aria-hidden","true")),this.updateComplete.then(()=>iJ.instance.apply(this,"gds-option"))}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?(tC(this,s,!0),this.setAttribute("aria-hidden","true")):(tC(this,s,!1),this.setAttribute("aria-hidden","false"))}render(){let e=this.parentElement?.multiple,t=id` <span
      class="checkbox ${iV({checked:this.selected})}"
    ></span>`;return e||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),id`<div>${iO(e,()=>t)} <slot></slot></div>`}};s=new WeakMap,i=new WeakSet,r=function(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}}))},i2.styles=iQ,t$([iT()],i2.prototype,"value",2),t$([iT({attribute:"aria-hidden",reflect:!0})],i2.prototype,"hidden",1),t$([iT({attribute:"aria-selected",reflect:!0})],i2.prototype,"selected",2),t$([iT({type:Boolean,reflect:!0})],i2.prototype,"isPlaceholder",2),t$([i0("isplaceholder")],i2.prototype,"_handlePlaceholderStatusChange",1),i2=t$([iG("gds-option")],i2);var i5=sT`
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
`,i3=class extends iZ{connectedCallback(){super.connectedCallback(),this.setAttribute("inert","true"),this.updateComplete.then(()=>iJ.instance.apply(this,"gds-menu-heading"))}render(){return id`<slot></slot>`}};i3.styles=i5,i3=t$([iG("gds-menu-heading")],i3);var i6=class extends i1(iZ){constructor(){super(...arguments),tA(this,o,()=>{this.dispatchEvent(new CustomEvent("gds-menu-item-click",{bubbles:!0,composed:!0}))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem"),this.addEventListener("keydown",e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),this.click())}),this.addEventListener("click",tk(this,o)),iJ.instance.apply(this,"gds-option")}render(){return iX`<div><slot></slot></div>`}};o=new WeakMap,i6.styles=[iQ],i6=t$([iG("gds-menu-item")],i6);var i4=Symbol.for(""),i7=e=>{if(e?.r===i4)return e?._$litStatic$},i8=(e,...t)=>({_$litStatic$:t.reduce((t,s,i)=>t+(e=>{if(void 0!==e._$litStatic$)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(s)+e[i+1],e[0]),r:i4}),i9=new Map,re=e=>(t,...s)=>{let i,r;let o=s.length,n=[],a=[],l,d=0,h=!1;for(;d<o;){for(l=t[d];d<o&&void 0!==(i=i7(r=s[d]));)l+=i+t[++d],h=!0;d!==o&&a.push(r),n.push(l),d++}if(d===o&&n.push(t[o]),h){let e=n.join("$$lit$$");void 0===(t=i9.get(e))&&(n.raw=n,i9.set(e,t=n)),s=a}return e(t,...s)},rt=re(sd);re(sh);var rs=e=>e??sp;function ri(e){e.updateComplete.then(()=>{let t=e.shadowRoot?.querySelectorAll("slot[gds-allow]");if(!t)return;for(let t of Array.from(e.childNodes))t.nodeType===Node.TEXT_NODE&&t.textContent?.trim()===""&&t.parentNode?.removeChild(t);let s=e=>{let t=[...e.getAttribute("gds-allow")?.split(" ")||[],"slot"];for(let s of Array.from(e.assignedNodes()))t.includes(s.nodeName.toLowerCase())||s.parentNode?.removeChild(s)};t.forEach(e=>{s(e),e.addEventListener("slotchange",()=>s(e))})})}var rr=iH(class extends iU{constructor(e){if(super(e),e.type!==iR.ELEMENT)throw Error("The `forwardAttributes` directive must be used in element bindings")}render(e){return sp}update(e,[t]){let s=e.element;Array.from((e.options?.host).attributes).forEach(e=>{t(e)&&s.setAttribute(e.name.replace("gds-",""),e.value)})}}),ro=`:host {
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
}`,rn=`/**
 * Do not edit directly
 * Generated on Mon, 17 Jun 2024 15:10:12 GMT
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
`,ra=`/**
 * Do not edit directly
 * Generated on Mon, 17 Jun 2024 15:10:12 GMT
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
`,rl=`/**
 * Do not edit directly
 * Generated on Mon, 17 Jun 2024 15:10:12 GMT
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
`,rd=[sD(`/**
 * Do not edit directly
 * Generated on Mon, 17 Jun 2024 15:10:12 GMT
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
`),sD(rn),sD(ra),sD(rl)],rh=class extends iS{constructor(){super(...arguments),this.onmousedown=e=>{let t=e.target.getBoundingClientRect(),s=this._rippleEl;s&&(s.classList.remove("gds-ripple-effect"),this.style.setProperty("--gds-ripple-top",`${e.clientY-t.top}px`),this.style.setProperty("--gds-ripple-left",`${e.clientX-t.left}px`),setTimeout(()=>{s.classList.add("gds-ripple-effect")},20))}}render(){return id`<div></div>`}};rh.styles=[rd,sD(ro)],t$([iP("div")],rh.prototype,"_rippleEl",2),rh=t$([iG("gds-ripple")],rh);var rc=`@layer tokens, a11y, core, ranks, sizes, variants, disabled;

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
`,rp=new WeakMap,ru=class extends iZ{constructor(){super(),this.invalid=!1,this.name="",this._handleFormReset=()=>{this.value=void 0};try{this.#l=this.attachInternals()}catch(e){this.#l={form:this.closest("form"),setFormValue:e=>{this.value=e},setValidity:(e,t)=>{this.invalid=e.customError},validationMessage:"",validity:{badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},willValidate:!0,checkValidity:()=>!0,reportValidity:()=>!0}}}#l;static{this.formAssociated=!0}get form(){return this.#l.form}get validity(){return this.#l.validity}get validationMessage(){return this.#l.validationMessage}get willValidate(){return this.#l.willValidate}checkValidity(){return this.#l.checkValidity()}reportValidity(){return this.#l.reportValidity()}connectedCallback(){super.connectedCallback(),this.#l.form?.addEventListener("reset",this._handleFormReset)}disconnectedCallback(){super.disconnectedCallback(),this.#l.form?.removeEventListener("reset",this._handleFormReset)}__handleValidityChange(){this.#l.setValidity({badInput:!1,customError:this.invalid,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!this.invalid},this.validationMessage||"Error message")}__handleValueChange(){this.#l.setFormValue(this.value)}};t$([iT({type:Boolean,reflect:!0,attribute:"aria-invalid",converter:{fromAttribute:Boolean,toAttribute:e=>e?.toString()}})],ru.prototype,"invalid",2),t$([iT()],ru.prototype,"value",2),t$([iT({reflect:!0})],ru.prototype,"name",2),t$([i0("invalid")],ru.prototype,"__handleValidityChange",1),t$([i0("value")],ru.prototype,"__handleValueChange",1);var rg=(e,...t)=>{let s=rp.get(e);return s||((s=e.map(e=>e.replace(/\n[\s]+</gm,"<"))).raw=e.raw,rp.set(e,s)),iX(s,...t)},rf=class extends ru{constructor(){super(),tA(this,a),tA(this,d),this.disabled=!1,this.rank="primary",this.variant="neutral",this.size="medium",this.label="",this.href="",tA(this,n,!1),tA(this,c,()=>{let e=this._mainSlot?.assignedNodes()??[];tC(this,n,1===e.length&&e.some(e=>e.nodeName.toLowerCase().startsWith("gds-icon"))),this.requestUpdate()}),tA(this,p,e=>{this.dispatchEvent(new CustomEvent("gds-click",{bubbles:!0,composed:!0,detail:e})),this.form&&!tk(this,a,l)&&("submit"===this.type?this.form.requestSubmit():"reset"===this.type&&this.form.reset())}),ri(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),iJ.instance.apply(this,"gds-button")}render(){let e={button:!0,circle:tk(this,n),icon:tk(this,n),small:"small"===this.size,large:"large"===this.size,positive:"positive"===this.variant,negative:"negative"===this.variant,primary:"primary"===this.rank,secondary:"secondary"===this.rank,tertiary:"tertiary"===this.rank},t=tk(this,a,l)?i8`a`:i8`button`;return rt`
      <${t}
        class=${iV(e)}
        type="${rs(tk(this,a,l)?void 0:this.type)}"
        ?disabled="${this.disabled}"
        aria-label=${this.label||ic}
        href=${rs(tk(this,a,l)?this.href:void 0)}
        target=${rs(tk(this,a,l)?this.target:void 0)}
        rel=${rs(tk(this,a,l)?this.rel||tk(this,d,h):void 0)}
        download=${rs(tk(this,a,l)?this.download:void 0)}
        part="_button"
        @click="${tk(this,p)}"
        ${rr(e=>e.name.startsWith("gds-aria")||"gds-role"===e.name)}
      >
        <slot name="lead"></slot>
        <slot @slotchange=${tk(this,c)}></slot>
        <slot name="trail"></slot>
        ${iO(!this._isUsingTransitionalStyles,()=>rg`<gds-ripple></gds-ripple>`)}
      </${t}>
    `}};n=new WeakMap,a=new WeakSet,l=function(){return this.href.length>0},d=new WeakSet,h=function(){return"_blank"===this.target?"noreferrer noopener":void 0},c=new WeakMap,p=new WeakMap,rf.styles=[rd,sD(rc)],rf.shadowRootOptions={mode:"open",delegatesFocus:!0},t$([iT({type:Boolean,reflect:!0})],rf.prototype,"disabled",2),t$([iT({reflect:!0})],rf.prototype,"type",2),t$([iT({reflect:!0})],rf.prototype,"rank",2),t$([iT({reflect:!0})],rf.prototype,"variant",2),t$([iT({reflect:!0})],rf.prototype,"size",2),t$([iT()],rf.prototype,"label",2),t$([iT()],rf.prototype,"href",2),t$([iT()],rf.prototype,"target",2),t$([iT()],rf.prototype,"rel",2),t$([iT()],rf.prototype,"download",2),t$([iP("slot:not([name])")],rf.prototype,"_mainSlot",2),rf=t$([iG("gds-button")],rf);var ry=(e,...t)=>({strTag:!0,strings:e,values:t}),rv=e=>"string"!=typeof e&&"strTag"in e,rm=(e,t,s)=>{let i=e[0];for(let r=1;r<e.length;r++)i+=t[s?s[r-1]:r-1]+e[r];return i},rb="lit-localize-status",r_=class{constructor(e){this.__litLocalizeEventHandler=e=>{"ready"===e.detail.status&&this.host.requestUpdate()},this.host=e}hostConnected(){window.addEventListener(rb,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(rb,this.__litLocalizeEventHandler)}},rw=e=>e.addController(new r_(e)),r$=class{constructor(){this.settled=!1,this.promise=new Promise((e,t)=>{this._resolve=e,this._reject=t})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}},rx=[];for(let e=0;e<256;e++)rx[e]=(e>>4&15).toString(16)+(15&e).toString(16);new r$().resolve();var rk=e=>rv(e)?rm(e.strings,e.values):e,rA=sT`
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
`,{I:rC}={P:t1,A:t2,C:t5,M:1,L:sy,R:sb,D:t9,V:sm,I:s_,H:sw,N:sx,U:sk,B:s$,F:sA},rE=e=>null===e||"object"!=typeof e&&"function"!=typeof e,rS=e=>void 0===e.strings,rM=()=>document.createComment(""),rz=(e,t,s)=>{let i=e._$AA.parentNode,r=void 0===t?e._$AB:t._$AA;if(void 0===s)s=new rC(i.insertBefore(rM(),r),i.insertBefore(rM(),r),e,e.options);else{let t=s._$AB.nextSibling,o=s._$AM,n=o!==e;if(n){let t;s._$AQ?.(e),s._$AM=e,void 0!==s._$AP&&(t=e._$AU)!==o._$AU&&s._$AP(t)}if(t!==r||n){let e=s._$AA;for(;e!==t;){let t=e.nextSibling;i.insertBefore(e,r),e=t}}}return s},rF=(e,t,s=e)=>(e._$AI(t,s),e),rD={},rT=(e,t=rD)=>e._$AH=t,rL=e=>e._$AH,rW=e=>{e._$AP?.(!1,!0);let t=e._$AA,s=e._$AB.nextSibling;for(;t!==s;){let e=t.nextSibling;t.remove(),t=e}},rP=(e,t)=>{let s=e._$AN;if(void 0===s)return!1;for(let e of s)e._$AO?.(t,!1),rP(e,t);return!0},rN=e=>{let t,s;do{if(void 0===(t=e._$AM))break;(s=t._$AN).delete(e),e=t}while(0===s?.size)},rO=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(void 0===s)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),rU(t)}};function rR(e){void 0!==this._$AN?(rN(this),this._$AM=e,rO(this)):this._$AM=e}function rH(e,t=!1,s=0){let i=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size){if(t){if(Array.isArray(i))for(let e=s;e<i.length;e++)rP(i[e],!1),rN(i[e]);else null!=i&&(rP(i,!1),rN(i))}else rP(this,e)}}var rU=e=>{e.type==iR.CHILD&&(e._$AP??=rH,e._$AQ??=rR)},rV=class extends iU{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,s){super._$AT(e,t,s),rO(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(rP(this,e),rN(this))}setValue(e){if(rS(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},rB=()=>new rI,rI=class{},rj=new WeakMap,rY=iH(class extends rV{render(e){return sp}update(e,[t]){let s=t!==this.Y;return s&&void 0!==this.Y&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.Y=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),sp}rt(e){if("function"==typeof this.Y){let t=this.ht??globalThis,s=rj.get(t);void 0===s&&(s=new WeakMap,rj.set(t,s)),void 0!==s.get(this.Y)&&this.Y.call(this.ht,void 0),s.set(this.Y,e),void 0!==e&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){return"function"==typeof this.Y?rj.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),rG=class{constructor(e){this.#d=e=>{let t=e.target;if(!this.host.navigableItems.includes(t))return;let s=!1;if("ArrowDown"===e.key){let e=this.host.navigableItems.indexOf(t)+1,i=this.host.navigableItems[e];i?.focus(),s=!0}else if("ArrowUp"===e.key){let e=this.host.navigableItems.indexOf(t)-1,i=this.host.navigableItems[e];i?.focus(),s=!0}else if("Home"===e.key)this.host.navigableItems[0]?.focus(),s=!0;else if("End"===e.key)this.host.navigableItems[this.host.navigableItems.length-1]?.focus(),s=!0;else{let t=e.key.toLowerCase();if(1!==t.length)return;if(t>="a"&&t<="z"||t>="0"&&t<="9"){let e=this.host.navigableItems.find(e=>{let s=e.textContent?.trim().toLowerCase();return s?.startsWith(t)});e?.focus(),s=!0}}s&&(e.preventDefault(),e.stopPropagation())},(this.host=e).addController(this)}hostConnected(){this.host.addEventListener("keydown",this.#d)}hostDisconnected(){this.host.removeEventListener("keydown",this.#d)}#d};function rq(e){let t=e;for(;t.assignedElements().length>0&&"SLOT"===t.assignedElements()[0].nodeName;)t=t.assignedElements()[0];return t}var rK=class extends iZ{constructor(){super(),tA(this,u,rB()),new rG(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),iJ.instance.apply(this,"gds-listbox")}get navigableItems(){return tk(this,u).value&&rq(tk(this,u).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&"gds-menu-item"===e.gdsElementName)||[]}focus(){this.navigableItems[0]?.focus()}render(){return iX`<slot ${rY(tk(this,u))}></slot>`}};u=new WeakMap,rK=t$([iG("gds-menu")],rK);var rX=Math.min,rZ=Math.max,rJ=Math.round,rQ=Math.floor,r0=e=>({x:e,y:e}),r1={left:"right",right:"left",bottom:"top",top:"bottom"},r2={start:"end",end:"start"};function r5(e,t){return"function"==typeof e?e(t):e}function r3(e){return e.split("-")[0]}function r6(e){return e.split("-")[1]}function r4(e){return"y"===e?"height":"width"}function r7(e){return["top","bottom"].includes(r3(e))?"y":"x"}function r8(e){return"x"===r7(e)?"y":"x"}function r9(e){return e.replace(/start|end/g,e=>r2[e])}function oe(e){return e.replace(/left|right|bottom|top/g,e=>r1[e])}function ot(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function os(e,t,s){let i,{reference:r,floating:o}=e,n=r7(t),a=r8(t),l=r4(a),d=r3(t),h="y"===n,c=r.x+r.width/2-o.width/2,p=r.y+r.height/2-o.height/2,u=r[l]/2-o[l]/2;switch(d){case"top":i={x:c,y:r.y-o.height};break;case"bottom":i={x:c,y:r.y+r.height};break;case"right":i={x:r.x+r.width,y:p};break;case"left":i={x:r.x-o.width,y:p};break;default:i={x:r.x,y:r.y}}switch(r6(t)){case"start":i[a]-=u*(s&&h?-1:1);break;case"end":i[a]+=u*(s&&h?-1:1)}return i}var oi=async(e,t,s)=>{let{placement:i="bottom",strategy:r="absolute",middleware:o=[],platform:n}=s,a=o.filter(Boolean),l=await (null==n.isRTL?void 0:n.isRTL(t)),d=await n.getElementRects({reference:e,floating:t,strategy:r}),{x:h,y:c}=os(d,i,l),p=i,u={},g=0;for(let s=0;s<a.length;s++){let{name:o,fn:f}=a[s],{x:y,y:v,data:m,reset:b}=await f({x:h,y:c,initialPlacement:i,placement:p,strategy:r,middlewareData:u,rects:d,platform:n,elements:{reference:e,floating:t}});h=null!=y?y:h,c=null!=v?v:c,u={...u,[o]:{...u[o],...m}},b&&g<=50&&(g++,"object"==typeof b&&(b.placement&&(p=b.placement),b.rects&&(d=!0===b.rects?await n.getElementRects({reference:e,floating:t,strategy:r}):b.rects),{x:h,y:c}=os(d,p,l)),s=-1)}return{x:h,y:c,placement:p,strategy:r,middlewareData:u}};async function or(e,t){var s;void 0===t&&(t={});let{x:i,y:r,platform:o,rects:n,elements:a,strategy:l}=e,{boundary:d="clippingAncestors",rootBoundary:h="viewport",elementContext:c="floating",altBoundary:p=!1,padding:u=0}=r5(t,e),g="number"!=typeof u?{top:0,right:0,bottom:0,left:0,...u}:{top:u,right:u,bottom:u,left:u},f=a[p?"floating"===c?"reference":"floating":c],y=ot(await o.getClippingRect({element:null==(s=await (null==o.isElement?void 0:o.isElement(f)))||s?f:f.contextElement||await (null==o.getDocumentElement?void 0:o.getDocumentElement(a.floating)),boundary:d,rootBoundary:h,strategy:l})),v="floating"===c?{...n.floating,x:i,y:r}:n.reference,m=await (null==o.getOffsetParent?void 0:o.getOffsetParent(a.floating)),b=await (null==o.isElement?void 0:o.isElement(m))&&await (null==o.getScale?void 0:o.getScale(m))||{x:1,y:1},_=ot(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:v,offsetParent:m,strategy:l}):v);return{top:(y.top-_.top+g.top)/b.y,bottom:(_.bottom-y.bottom+g.bottom)/b.y,left:(y.left-_.left+g.left)/b.x,right:(_.right-y.right+g.right)/b.x}}async function oo(e,t){let{placement:s,platform:i,elements:r}=e,o=await (null==i.isRTL?void 0:i.isRTL(r.floating)),n=r3(s),a=r6(s),l="y"===r7(s),d=["left","top"].includes(n)?-1:1,h=o&&l?-1:1,c=r5(t,e),{mainAxis:p,crossAxis:u,alignmentAxis:g}="number"==typeof c?{mainAxis:c,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...c};return a&&"number"==typeof g&&(u="end"===a?-1*g:g),l?{x:u*h,y:p*d}:{x:p*d,y:u*h}}function on(e){return od(e)?(e.nodeName||"").toLowerCase():"#document"}function oa(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function ol(e){var t;return null==(t=(od(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function od(e){return e instanceof Node||e instanceof oa(e).Node}function oh(e){return e instanceof Element||e instanceof oa(e).Element}function oc(e){return e instanceof HTMLElement||e instanceof oa(e).HTMLElement}function op(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof oa(e).ShadowRoot)}function ou(e){let{overflow:t,overflowX:s,overflowY:i,display:r}=om(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+s)&&!["inline","contents"].includes(r)}function og(e){let t=oy(),s=om(e);return"none"!==s.transform||"none"!==s.perspective||!!s.containerType&&"normal"!==s.containerType||!t&&!!s.backdropFilter&&"none"!==s.backdropFilter||!t&&!!s.filter&&"none"!==s.filter||["transform","perspective","filter"].some(e=>(s.willChange||"").includes(e))||["paint","layout","strict","content"].some(e=>(s.contain||"").includes(e))}function of(e){let t=o_(e);for(;oc(t)&&!ov(t);){if(og(t))return t;t=o_(t)}return null}function oy(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function ov(e){return["html","body","#document"].includes(on(e))}function om(e){return oa(e).getComputedStyle(e)}function ob(e){return oh(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function o_(e){if("html"===on(e))return e;let t=e.assignedSlot||e.parentNode||op(e)&&e.host||ol(e);return op(t)?t.host:t}function ow(e,t,s){var i;void 0===t&&(t=[]),void 0===s&&(s=!0);let r=function e(t){let s=o_(t);return ov(s)?t.ownerDocument?t.ownerDocument.body:t.body:oc(s)&&ou(s)?s:e(s)}(e),o=r===(null==(i=e.ownerDocument)?void 0:i.body),n=oa(r);return o?t.concat(n,n.visualViewport||[],ou(r)?r:[],n.frameElement&&s?ow(n.frameElement):[]):t.concat(r,ow(r,[],s))}function o$(e){let t=om(e),s=parseFloat(t.width)||0,i=parseFloat(t.height)||0,r=oc(e),o=r?e.offsetWidth:s,n=r?e.offsetHeight:i,a=rJ(s)!==o||rJ(i)!==n;return a&&(s=o,i=n),{width:s,height:i,$:a}}function ox(e){return oh(e)?e:e.contextElement}function ok(e){let t=ox(e);if(!oc(t))return r0(1);let s=t.getBoundingClientRect(),{width:i,height:r,$:o}=o$(t),n=(o?rJ(s.width):s.width)/i,a=(o?rJ(s.height):s.height)/r;return n&&Number.isFinite(n)||(n=1),a&&Number.isFinite(a)||(a=1),{x:n,y:a}}var oA=r0(0);function oC(e){let t=oa(e);return oy()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:oA}function oE(e,t,s,i){var r;void 0===t&&(t=!1),void 0===s&&(s=!1);let o=e.getBoundingClientRect(),n=ox(e),a=r0(1);t&&(i?oh(i)&&(a=ok(i)):a=ok(e));let l=(void 0===(r=s)&&(r=!1),i&&(!r||i===oa(n))&&r)?oC(n):r0(0),d=(o.left+l.x)/a.x,h=(o.top+l.y)/a.y,c=o.width/a.x,p=o.height/a.y;if(n){let e=oa(n),t=i&&oh(i)?oa(i):i,s=e.frameElement;for(;s&&i&&t!==e;){let e=ok(s),t=s.getBoundingClientRect(),i=om(s),r=t.left+(s.clientLeft+parseFloat(i.paddingLeft))*e.x,o=t.top+(s.clientTop+parseFloat(i.paddingTop))*e.y;d*=e.x,h*=e.y,c*=e.x,p*=e.y,d+=r,h+=o,s=oa(s).frameElement}}return ot({width:c,height:p,x:d,y:h})}var oS=[":popover-open",":modal"];function oM(e){let t=!1,s=0,i=0;if(oS.forEach(s=>{!function(s){try{t=t||e.matches(s)}catch(e){}}(s)}),t){let t=of(e);if(t){let e=t.getBoundingClientRect();s=e.x,i=e.y}}return[t,s,i]}function oz(e){return oE(ol(e)).left+ob(e).scrollLeft}function oF(e,t,s){let i;if("viewport"===t)i=function(e,t){let s=oa(e),i=ol(e),r=s.visualViewport,o=i.clientWidth,n=i.clientHeight,a=0,l=0;if(r){o=r.width,n=r.height;let e=oy();(!e||e&&"fixed"===t)&&(a=r.offsetLeft,l=r.offsetTop)}return{width:o,height:n,x:a,y:l}}(e,s);else if("document"===t)i=function(e){let t=ol(e),s=ob(e),i=e.ownerDocument.body,r=rZ(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),o=rZ(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight),n=-s.scrollLeft+oz(e),a=-s.scrollTop;return"rtl"===om(i).direction&&(n+=rZ(t.clientWidth,i.clientWidth)-r),{width:r,height:o,x:n,y:a}}(ol(e));else if(oh(t))i=function(e,t){let s=oE(e,!0,"fixed"===t),i=s.top+e.clientTop,r=s.left+e.clientLeft,o=oc(e)?ok(e):r0(1),n=e.clientWidth*o.x;return{width:n,height:e.clientHeight*o.y,x:r*o.x,y:i*o.y}}(t,s);else{let s=oC(e);i={...t,x:t.x-s.x,y:t.y-s.y}}return ot(i)}function oD(e,t){return oc(e)&&"fixed"!==om(e).position?t?t(e):e.offsetParent:null}function oT(e,t){let s=oa(e);if(!oc(e))return s;let i=oD(e,t);for(;i&&["table","td","th"].includes(on(i))&&"static"===om(i).position;)i=oD(i,t);return i&&("html"===on(i)||"body"===on(i)&&"static"===om(i).position&&!og(i))?s:i||of(e)||s}var oL=async function(e){let t=this.getOffsetParent||oT,s=this.getDimensions;return{reference:function(e,t,s,i){let r=oc(t),o=ol(t),n="fixed"===s,a=oE(e,!0,n,t),l={scrollLeft:0,scrollTop:0},d=r0(0);if(r||!r&&!n){if(("body"!==on(t)||ou(o))&&(l=ob(t)),r){let e=oE(t,!0,n,t);d.x=e.x+t.clientLeft,d.y=e.y+t.clientTop}else o&&(d.x=oz(o))}let h=a.left+l.scrollLeft-d.x,c=a.top+l.scrollTop-d.y,[p,u,g]=oM(i);return p&&(h+=u,c+=g,r&&(h+=t.clientLeft,c+=t.clientTop)),{x:h,y:c,width:a.width,height:a.height}}(e.reference,await t(e.floating),e.strategy,e.floating),floating:{x:0,y:0,...await s(e.floating)}}},oW={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:s,offsetParent:i,strategy:r}=e,o=ol(i),[n]=t?oM(t.floating):[!1];if(i===o||n)return s;let a={scrollLeft:0,scrollTop:0},l=r0(1),d=r0(0),h=oc(i);if((h||!h&&"fixed"!==r)&&(("body"!==on(i)||ou(o))&&(a=ob(i)),oc(i))){let e=oE(i);l=ok(i),d.x=e.x+i.clientLeft,d.y=e.y+i.clientTop}return{width:s.width*l.x,height:s.height*l.y,x:s.x*l.x-a.scrollLeft*l.x+d.x,y:s.y*l.y-a.scrollTop*l.y+d.y}},getDocumentElement:ol,getClippingRect:function(e){let{element:t,boundary:s,rootBoundary:i,strategy:r}=e,o=[..."clippingAncestors"===s?function(e,t){let s=t.get(e);if(s)return s;let i=ow(e,[],!1).filter(e=>oh(e)&&"body"!==on(e)),r=null,o="fixed"===om(e).position,n=o?o_(e):e;for(;oh(n)&&!ov(n);){let t=om(n),s=og(n);s||"fixed"!==t.position||(r=null),(o?!s&&!r:!s&&"static"===t.position&&!!r&&["absolute","fixed"].includes(r.position)||ou(n)&&!s&&function e(t,s){let i=o_(t);return!(i===s||!oh(i)||ov(i))&&("fixed"===om(i).position||e(i,s))}(e,n))?i=i.filter(e=>e!==n):r=t,n=o_(n)}return t.set(e,i),i}(t,this._c):[].concat(s),i],n=o[0],a=o.reduce((e,s)=>{let i=oF(t,s,r);return e.top=rZ(i.top,e.top),e.right=rX(i.right,e.right),e.bottom=rX(i.bottom,e.bottom),e.left=rZ(i.left,e.left),e},oF(t,n,r));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},getOffsetParent:oT,getElementRects:oL,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){let{width:t,height:s}=o$(e);return{width:t,height:s}},getScale:ok,isElement:oh,isRTL:function(e){return"rtl"===om(e).direction}},oP=(e,t,s)=>{let i=new Map,r={platform:oW,...s},o={...r.platform,_c:i};return oi(e,t,{...r,platform:o})},oN=class extends iU{constructor(e){if(super(e),this.it=sp,e.type!==iR.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===sp||null==e)return this._t=void 0,this.it=e;if(e===sc)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};oN.directiveName="unsafeHTML",oN.resultType=1;var oO=iH(oN),oR=sT`
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
`,oH=class extends iZ{constructor(){super(...arguments),this.width=24,this.height=24,this.solid=!1,this.label=""}static{this.styles=[oR]}render(){let e=`<svg
      width="${this.width}"
      height="${this.height}"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ${this.label?`aria-label="${this.label}"`:`aria-label="${this.constructor._name}"`}
      role="graphics-symbol"
    >
      ${this.solid?this.constructor._solidSVG:this.constructor._regularSVG}
    </svg>`;return id`${oO(e)}`}};t$([iT({type:Number})],oH.prototype,"width",2),t$([iT({type:Number})],oH.prototype,"height",2),t$([iT({type:Boolean})],oH.prototype,"solid",2),t$([iT({type:String})],oH.prototype,"label",2);var oU=class extends oH{};oU._regularSVG='<path d="M7.75 7.75L16.25 16.25M16.25 7.75L7.75 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',oU._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7.11612 7.11612C7.60427 6.62796 8.39573 6.62796 8.88388 7.11612L12 10.2322L15.1161 7.11612C15.6043 6.62796 16.3957 6.62796 16.8839 7.11612C17.372 7.60427 17.372 8.39573 16.8839 8.88388L13.7678 12L16.8839 15.1161C17.372 15.6043 17.372 16.3957 16.8839 16.8839C16.3957 17.372 15.6043 17.372 15.1161 16.8839L12 13.7678L8.88388 16.8839C8.39573 17.372 7.60427 17.372 7.11612 16.8839C6.62796 16.3957 6.62796 15.6043 7.11612 15.1161L10.2322 12L7.11612 8.88388C6.62796 8.39573 6.62796 7.60427 7.11612 7.11612Z" fill="currentColor"/>',oU._name="cross small",oU=t$([iG("gds-icon-cross-small")],oU);var oV=sT`
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
`,oB=class extends iZ{constructor(){super(...arguments),tA(this,g),tA(this,_),tA(this,$),tA(this,k),tA(this,C),this.open=!1,this.popupRole="dialog",this.label=void 0,this.placement="bottom-start",this.useModalInMobileView=!1,this.calcMinWidth=e=>`${e.offsetWidth}px`,this.calcMaxWidth=e=>"auto",this.calcMinHeight=e=>"auto",this.calcMaxHeight=e=>"500px",this._trigger=void 0,this._anchor=void 0,this._isVirtKbVisible=!1,tA(this,y,void 0),tA(this,v,!1),tA(this,m,e=>{this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:this.open,reason:e},bubbles:!1,composed:!1}))}),tA(this,b,e=>{e.stopPropagation(),e.preventDefault(),this.open=!1,tk(this,m).call(this,"close"),setTimeout(()=>this._trigger?.focus(),250)}),tA(this,S,e=>{("ArrowDown"===e.key||"ArrowUp"===e.key)&&(e.preventDefault(),this.open=!0,tk(this,m).call(this,"show")),"Escape"===e.key&&(this.open=!1,tk(this,m).call(this,"cancel"))}),tA(this,M,e=>{e.preventDefault(),this.open=!this.open,tk(this,m).call(this,this.open?"show":"close")}),tA(this,z,()=>{let e=this._elDefaultSlot?.assignedElements()[0];this.updateComplete.then(()=>{e?.focus()})}),tA(this,F,e=>{let t=this._elDialog;if((e.clientX>0||e.clientY>0)&&t&&this.open){let s=t.getBoundingClientRect();s.top<=e.clientY&&e.clientY<=s.top+s.height&&s.left<=e.clientX&&e.clientX<=s.left+s.width||(e.stopPropagation(),this.open=!1,tk(this,m).call(this,"close"))}})}_handleTriggerRefChanged(){this.triggerRef?.then(e=>{e&&(this._trigger=e)})}_handleAnchorRefChanged(){this.anchorRef?.then(e=>{e&&(this._anchor=e)})}_handleTriggerChanged(){tS(this,_,w).call(this),tS(this,k,A).call(this)}_handleAnchorChanged(){tS(this,C,E).call(this)}connectedCallback(){super.connectedCallback(),iJ.instance.apply(this,"gds-popover"),tS(this,_,w).call(this),this._handleOpenChange(),this.addEventListener("keydown",e=>{"Escape"===e.key&&(this.open=!1,tk(this,m).call(this,"cancel"),e.stopPropagation(),e.preventDefault())}),this.addEventListener("focusin",e=>{let t=e.target;"INPUT"===t.tagName||"TEXTAREA"===t.tagName?this._isVirtKbVisible=!0:this._isVirtKbVisible=!1}),this.addEventListener("blurin",e=>{this._isVirtKbVisible=!1})}disconnectedCallback(){super.disconnectedCallback(),tS(this,$,x).call(this)}render(){return id`<slot
        name="trigger"
        @slotchange=${tS(this,g,f)}
      ></slot>
      <div ?hidden="${!this.open}">
        <dialog
          class="${iV({"v-kb-visible":this._isVirtKbVisible,"use-modal-in-mobile":this.useModalInMobileView})}"
          aria-hidden="${String(!this.open)}"
          @close=${()=>this.open=!1}
        >
          <header>
            <h2>${this.label}</h2>
            <gds-button
              @click=${tk(this,b)}
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
      </div>`}_handleOpenChange(){this.updateComplete.then(()=>{this._trigger?.setAttribute("aria-expanded",String(this.open)),this.open?(this._elDialog?.showModal(),tk(this,z).call(this),setTimeout(()=>tk(this,z).call(this),250),setTimeout(()=>this._elDialog?.addEventListener("click",tk(this,F)),0)):(this._elDialog?.close(),this._elDialog?.removeEventListener("click",tk(this,F)))})}_handleMobileLayout(e){var t;tC(this,v,e),e&&this.useModalInMobileView?(null==(t=tk(this,y))||t.call(this),this._elDialog?.style.removeProperty("left"),this._elDialog?.style.removeProperty("top"),this._elDialog?.style.removeProperty("minWidth"),this.updateComplete.then(()=>{this.open&&this._elDialog?.showModal()})):this.updateComplete.then(()=>{tS(this,C,E).call(this)})}};g=new WeakSet,f=function(){this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]&&(this._trigger=this._elTriggerSlot.assignedElements()[0],this._anchor=this._elTriggerSlot.assignedElements()[0])},y=new WeakMap,v=new WeakMap,m=new WeakMap,b=new WeakMap,_=new WeakSet,w=function(){this._trigger?.addEventListener("keydown",tk(this,S)),this._trigger?.addEventListener("click",tk(this,M))},$=new WeakSet,x=function(){var e;this._trigger?.removeEventListener("keydown",tk(this,S)),this._trigger?.removeEventListener("click",tk(this,M)),null==(e=tk(this,y))||e.call(this)},k=new WeakSet,A=function(){if(this._trigger){this._trigger?.setAttribute("aria-expanded",String(this.open)),this._trigger.nodeName.startsWith("GDS-")||["A","BUTTON","INPUT","TEXTAREA"].includes(this._trigger.nodeName)||(this._trigger.setAttribute("tabindex","0"),this._trigger.setAttribute("role","button"));let e=this._trigger.nodeName.startsWith("GDS-")?"gds-aria-haspopup":"aria-haspopup";null===this._trigger.getAttribute(e)&&this._trigger.setAttribute(e,this.popupRole)}},C=new WeakSet,E=function(){if(!this._anchor||!this._elDialog)return;let e=this._anchor,t=this._elDialog;!e||!t||tk(this,v)&&this.useModalInMobileView||(tk(this,y)&&tk(this,y).call(this),tC(this,y,function(e,t,s,i){let r;void 0===i&&(i={});let{ancestorScroll:o=!0,ancestorResize:n=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:l="function"==typeof IntersectionObserver,animationFrame:d=!1}=i,h=ox(e),c=o||n?[...h?ow(h):[],...ow(t)]:[];c.forEach(e=>{o&&e.addEventListener("scroll",s,{passive:!0}),n&&e.addEventListener("resize",s)});let p=h&&l?function(e,t){let s,i=null,r=ol(e);function o(){var e;clearTimeout(s),null==(e=i)||e.disconnect(),i=null}return function n(a,l){void 0===a&&(a=!1),void 0===l&&(l=1),o();let{left:d,top:h,width:c,height:p}=e.getBoundingClientRect();if(a||t(),!c||!p)return;let u=rQ(h),g=rQ(r.clientWidth-(d+c)),f={rootMargin:-u+"px "+-g+"px "+-rQ(r.clientHeight-(h+p))+"px "+-rQ(d)+"px",threshold:rZ(0,rX(1,l))||1},y=!0;function v(e){let t=e[0].intersectionRatio;if(t!==l){if(!y)return n();t?n(!1,t):s=setTimeout(()=>{n(!1,1e-7)},100)}y=!1}try{i=new IntersectionObserver(v,{...f,root:r.ownerDocument})}catch(e){i=new IntersectionObserver(v,f)}i.observe(e)}(!0),o}(h,s):null,u=-1,g=null;a&&(g=new ResizeObserver(e=>{let[i]=e;i&&i.target===h&&g&&(g.unobserve(t),cancelAnimationFrame(u),u=requestAnimationFrame(()=>{var e;null==(e=g)||e.observe(t)})),s()}),h&&!d&&g.observe(h),g.observe(t));let f=d?oE(e):null;return d&&function t(){let i=oE(e);f&&(i.x!==f.x||i.y!==f.y||i.width!==f.width||i.height!==f.height)&&s(),f=i,r=requestAnimationFrame(t)}(),s(),()=>{var e;c.forEach(e=>{o&&e.removeEventListener("scroll",s),n&&e.removeEventListener("resize",s)}),null==p||p(),null==(e=g)||e.disconnect(),g=null,d&&cancelAnimationFrame(r)}}(e,t,()=>{var s;oP(e,t,{placement:this.placement,middleware:[{name:"offset",options:8,async fn(e){var t,s;let{x:i,y:r,placement:o,middlewareData:n}=e,a=await oo(e,8);return o===(null==(t=n.offset)?void 0:t.placement)&&null!=(s=n.arrow)&&s.alignmentOffset?{}:{x:i+a.x,y:r+a.y,data:{...a,placement:o}}}},(void 0===s&&(s={}),{name:"flip",options:s,async fn(e){var t,i,r,o,n;let{placement:a,middlewareData:l,rects:d,initialPlacement:h,platform:c,elements:p}=e,{mainAxis:u=!0,crossAxis:g=!0,fallbackPlacements:f,fallbackStrategy:y="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:m=!0,...b}=r5(s,e);if(null!=(t=l.arrow)&&t.alignmentOffset)return{};let _=r3(a),w=r3(h)===h,$=await (null==c.isRTL?void 0:c.isRTL(p.floating)),x=f||(w||!m?[oe(h)]:function(e){let t=oe(e);return[r9(e),t,r9(t)]}(h));f||"none"===v||x.push(...function(e,t,s,i){let r=r6(e),o=function(e,t,s){let i=["left","right"],r=["right","left"];switch(e){case"top":case"bottom":if(s)return t?r:i;return t?i:r;case"left":case"right":return t?["top","bottom"]:["bottom","top"];default:return[]}}(r3(e),"start"===s,i);return r&&(o=o.map(e=>e+"-"+r),t&&(o=o.concat(o.map(r9)))),o}(h,m,v,$));let k=[h,...x],A=await or(e,b),C=[],E=(null==(i=l.flip)?void 0:i.overflows)||[];if(u&&C.push(A[_]),g){let e=function(e,t,s){void 0===s&&(s=!1);let i=r6(e),r=r8(e),o=r4(r),n="x"===r?i===(s?"end":"start")?"right":"left":"start"===i?"bottom":"top";return t.reference[o]>t.floating[o]&&(n=oe(n)),[n,oe(n)]}(a,d,$);C.push(A[e[0]],A[e[1]])}if(E=[...E,{placement:a,overflows:C}],!C.every(e=>e<=0)){let e=((null==(r=l.flip)?void 0:r.index)||0)+1,t=k[e];if(t)return{data:{index:e,overflows:E},reset:{placement:t}};let s=null==(o=E.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:o.placement;if(!s)switch(y){case"bestFit":{let e=null==(n=E.map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:n[0];e&&(s=e);break}case"initialPlacement":s=h}if(a!==s)return{reset:{placement:s}}}return{}}})],strategy:"fixed"}).then(({x:s,y:i})=>Object.assign(t.style,{left:`${s}px`,top:`${i}px`,minWidth:this.calcMinWidth(e),maxWidth:this.calcMaxWidth(e),minHeight:this.calcMinHeight(e),maxHeight:this.calcMaxHeight(e)}))})))},S=new WeakMap,M=new WeakMap,z=new WeakMap,F=new WeakMap,oB.styles=sD(oV),t$([iT({type:Boolean,reflect:!0})],oB.prototype,"open",2),t$([iT({attribute:"popup-role"})],oB.prototype,"popupRole",2),t$([iT({attribute:!1})],oB.prototype,"triggerRef",2),t$([iT({attribute:!1})],oB.prototype,"anchorRef",2),t$([iT()],oB.prototype,"label",2),t$([iT()],oB.prototype,"placement",2),t$([iT()],oB.prototype,"useModalInMobileView",2),t$([iT({attribute:!1})],oB.prototype,"calcMinWidth",2),t$([iT({attribute:!1})],oB.prototype,"calcMaxWidth",2),t$([iT({attribute:!1})],oB.prototype,"calcMinHeight",2),t$([iT({attribute:!1})],oB.prototype,"calcMaxHeight",2),t$([iL()],oB.prototype,"_trigger",2),t$([iL()],oB.prototype,"_anchor",2),t$([iL()],oB.prototype,"_isVirtKbVisible",2),t$([iP("slot:not([name])")],oB.prototype,"_elDefaultSlot",2),t$([iP('slot[name="trigger"]')],oB.prototype,"_elTriggerSlot",2),t$([iP("dialog")],oB.prototype,"_elDialog",2),t$([i0("triggerRef")],oB.prototype,"_handleTriggerRefChanged",1),t$([i0("anchorRef")],oB.prototype,"_handleAnchorRefChanged",1),t$([i0("_trigger")],oB.prototype,"_handleTriggerChanged",1),t$([i0("_anchor")],oB.prototype,"_handleAnchorChanged",1),t$([i0("open")],oB.prototype,"_handleOpenChange",1),t$([(e,t,s)=>{let i=window.matchMedia("(max-width: 576px)"),r=e.connectedCallback,o=e.disconnectedCallback;e.connectedCallback=function(){r?.call(this);let e=e=>{s.value?.call(this,e.matches)};i.addEventListener("change",e),this.disconnectedCallback=function(){o?.call(this),i.removeEventListener("change",e)},s.value?.call(this,i.matches)}}],oB.prototype,"_handleMobileLayout",1),oB=t$([iG("gds-popover")],oB);var oI=class extends iZ{constructor(){super(),tA(this,D),this.open=!1,this.buttonLabel=rk("Open context menu"),this.showLabel=!1,this.label="",this.placement="bottom-start",ri(this)}connectedCallback(){super.connectedCallback(),iJ.instance.apply(this,"gds-context-menu"),this.addEventListener("keydown",e=>{this.open&&"Tab"==e.key&&(e.preventDefault(),this.open=!1,this.elTriggerBtn.then(e=>e.focus()))})}render(){return iX`<button
        id="trigger"
        class="icon border-0 small ${iV({highlighted:this.open})}"
        aria-label=${this.buttonLabel??this.label}
        aria-haspopup="menu"
        aria-controls="menu"
        aria-expanded=${this.open}
      >
        <slot name="trigger">
          ${this.showLabel?this.buttonLabel??this.label:ic}
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
          @gds-menu-item-click=${tS(this,D,T)}
        >
          <slot allow="gds-menu-item gds-menu-heading"></slot>
        </gds-menu>
      </gds-popover>`}};D=new WeakSet,T=function(){this.open=!1},oI.styles=[rA],oI.shadowRootOptions={mode:"open",delegatesFocus:!0},t$([iT({type:Boolean,reflect:!0})],oI.prototype,"open",2),t$([iT({attribute:"button-label"})],oI.prototype,"buttonLabel",2),t$([iT({attribute:"show-label",type:Boolean})],oI.prototype,"showLabel",2),t$([iT()],oI.prototype,"label",2),t$([iT()],oI.prototype,"placement",2),t$([iN("#trigger")],oI.prototype,"elTriggerBtn",2),oI=t$([iG("gds-context-menu")],oI);var oj=class{constructor(e){this.Y=e}disconnect(){this.Y=void 0}reconnect(e){this.Y=e}deref(){return this.Y}},oY=class{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??=new Promise(e=>this.q=e)}resume(){this.q?.(),this.Z=this.q=void 0}},oG=e=>!rE(e)&&"function"==typeof e.then,oq=iH(class extends rV{constructor(){super(...arguments),this._$Cwt=1073741823,this._$Cbt=[],this._$CK=new oj(this),this._$CX=new oY}render(...e){return e.find(e=>!oG(e))??sc}update(e,t){let s=this._$Cbt,i=s.length;this._$Cbt=t;let r=this._$CK,o=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){let n=t[e];if(!oG(n))return this._$Cwt=e,n;e<i&&n===s[e]||(this._$Cwt=1073741823,i=0,Promise.resolve(n).then(async e=>{for(;o.get();)await o.get();let t=r.deref();if(void 0!==t){let s=t._$Cbt.indexOf(n);s>-1&&s<t._$Cwt&&(t._$Cwt=s,t.setValue(e))}}))}return sc}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}),oK=(e,t,s)=>{let i=new Map;for(let r=t;r<=s;r++)i.set(e[r],r);return i},oX=iH(class extends iU{constructor(e){if(super(e),e.type!==iR.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,s){let i;void 0===s?s=t:void 0!==t&&(i=t);let r=[],o=[],n=0;for(let t of e)r[n]=i?i(t,n):n,o[n]=s(t,n),n++;return{values:o,keys:r}}render(e,t,s){return this.dt(e,t,s).values}update(e,[t,s,i]){let r=rL(e),{values:o,keys:n}=this.dt(t,s,i);if(!Array.isArray(r))return this.ut=n,o;let a=this.ut??=[],l=[],d,h,c=0,p=r.length-1,u=0,g=o.length-1;for(;c<=p&&u<=g;)if(null===r[c])c++;else if(null===r[p])p--;else if(a[c]===n[u])l[u]=rF(r[c],o[u]),c++,u++;else if(a[p]===n[g])l[g]=rF(r[p],o[g]),p--,g--;else if(a[c]===n[g])l[g]=rF(r[c],o[g]),rz(e,l[g+1],r[c]),c++,g--;else if(a[p]===n[u])l[u]=rF(r[p],o[u]),rz(e,r[c],r[p]),p--,u++;else if(void 0===d&&(d=oK(n,u,g),h=oK(a,c,p)),d.has(a[c])){if(d.has(a[p])){let t=h.get(n[u]),s=void 0!==t?r[t]:null;if(null===s){let t=rz(e,r[c]);rF(t,o[u]),l[u]=t}else l[u]=rF(s,o[u]),rz(e,r[c],s),r[t]=null;u++}else rW(r[p]),p--}else rW(r[c]),c++;for(;u<=g;){let t=rz(e,l[g+1]);rF(t,o[u]),l[u++]=t}for(;c<=p;){let e=r[c++];null!==e&&rW(e)}return this.ut=n,rT(e,l),sc}});function oZ(e){return(oZ="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function oJ(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function oQ(e,t){if(t.length<e)throw TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function o0(e){oQ(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===oZ(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):(("string"==typeof e||"[object String]"===t)&&"undefined"!=typeof console&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(Error().stack)),new Date(NaN))}function o1(e,t){oQ(2,arguments);var s=o0(e),i=oJ(t);return isNaN(i)?new Date(NaN):(i&&s.setDate(s.getDate()+i),s)}function o2(e,t){oQ(2,arguments);var s=o0(e),i=oJ(t);if(isNaN(i))return new Date(NaN);if(!i)return s;var r=s.getDate(),o=new Date(s.getTime());return(o.setMonth(s.getMonth()+i+1,0),r>=o.getDate())?o:(s.setFullYear(o.getFullYear(),o.getMonth(),r),s)}var o5={};function o3(e,t){oQ(1,arguments);var s,i,r,o,n,a,l,d,h=oJ(null!==(s=null!==(i=null!==(r=null!==(o=null==t?void 0:t.weekStartsOn)&&void 0!==o?o:null==t?void 0:null===(n=t.locale)||void 0===n?void 0:null===(a=n.options)||void 0===a?void 0:a.weekStartsOn)&&void 0!==r?r:o5.weekStartsOn)&&void 0!==i?i:null===(l=o5.locale)||void 0===l?void 0:null===(d=l.options)||void 0===d?void 0:d.weekStartsOn)&&void 0!==s?s:0);if(!(h>=0&&h<=6))throw RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=o0(e),p=c.getDay();return c.setDate(c.getDate()-((p<h?7:0)+p-h)),c.setHours(0,0,0,0),c}function o6(e){oQ(1,arguments);var t=o0(e);return t.setHours(0,0,0,0),t}function o4(e,t){oQ(2,arguments);var s=o6(e),i=o6(t);return s.getTime()===i.getTime()}var o7={fromAttribute:e=>new Date(e),toAttribute:e=>e.toISOString()},o8=sT`
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
`,o9=class extends iZ{constructor(){super(...arguments),tA(this,L),tA(this,P),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.focusedDate=new Date,this.disabledWeekends=!1,this.showWeekNumbers=!1}get focusedMonth(){return this.focusedDate.getMonth()}set focusedMonth(e){let t=function(e){oQ(1,arguments);var t=o0(e),s=t.getMonth();return t.setFullYear(t.getFullYear(),s+1,0),t.setHours(0,0,0,0),t}(new Date(this.focusedYear,e,1)),s=new Date(this.focusedDate);s.setDate(Math.min(this.focusedDate.getDate(),t.getDate())),s.setMonth(e),s.setHours(12,0,0,0),this.focusedDate=s}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(e){this.focusedDate=new Date(this.focusedDate.setFullYear(e))}getDateCell(e){return this.shadowRoot?.querySelector(`#dateCell-${e}`)}connectedCallback(){super.connectedCallback(),iJ.instance.apply(this,"gds-calendar"),this.addEventListener("keydown",tS(this,P,N))}focus(){super.focus(),this._elFocusedCell?.focus()}render(){let e=new Date;return id`<table>
      <thead>
        <tr>
          ${iO(this.showWeekNumbers,()=>id`<th></th>`)}
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
        ${function(e,t){let s=function(e,t){oQ(1,arguments);var s=e||{},i=o0(s.start),r=o0(s.end),o=r.getTime();if(!(i.getTime()<=o))throw RangeError("Invalid interval");var n=o3(i,t),a=o3(r,t);n.setHours(15),a.setHours(15),o=a.getTime();for(var l=[],d=n;d.getTime()<=o;)d.setHours(0),l.push(o0(d)),(d=function(e,t){return oQ(2,arguments),o1(e,7*oJ(1))}(d,1)).setHours(15);return l}({start:function(e){oQ(1,arguments);var t=o0(e);return t.setDate(1),t.setHours(0,0,0,0),t}(e),end:function(e){oQ(1,arguments);var t=o0(e),s=t.getMonth();return t.setFullYear(t.getFullYear(),s+1,0),t.setHours(23,59,59,999),t}(e)},{weekStartsOn:1});return id`${t(s.map(e=>({days:function(e,t){oQ(1,arguments);var s,i=e||{},r=o0(i.start),o=o0(i.end).getTime();if(!(r.getTime()<=o))throw RangeError("Invalid interval");var n=[];r.setHours(0,0,0,0);var a=Number(null!==(s=null==t?void 0:t.step)&&void 0!==s?s:1);if(a<1||isNaN(a))throw RangeError("`options.step` must be a number greater than 1");for(;r.getTime()<=o;)n.push(o0(r)),r.setDate(r.getDate()+a),r.setHours(0,0,0,0);return n}({start:e,end:o1(e,6)})})))}`}(this.focusedDate,t=>id`
            ${t.map(t=>id`
                <tr>
                  ${iO(this.showWeekNumbers,()=>id`<td class="week-number">
                        ${(function(e,t){oQ(1,arguments);var s=o0(e);return Math.round((o3(s,t).getTime()-(function(e,t){oQ(1,arguments);var s,i,r,o,n,a,l,d,h=oJ(null!==(s=null!==(i=null!==(r=null!==(o=null==t?void 0:t.firstWeekContainsDate)&&void 0!==o?o:null==t?void 0:null===(n=t.locale)||void 0===n?void 0:null===(a=n.options)||void 0===a?void 0:a.firstWeekContainsDate)&&void 0!==r?r:o5.firstWeekContainsDate)&&void 0!==i?i:null===(l=o5.locale)||void 0===l?void 0:null===(d=l.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==s?s:1),c=function(e,t){oQ(1,arguments);var s,i,r,o,n,a,l,d,h=o0(e),c=h.getFullYear(),p=oJ(null!==(s=null!==(i=null!==(r=null!==(o=null==t?void 0:t.firstWeekContainsDate)&&void 0!==o?o:null==t?void 0:null===(n=t.locale)||void 0===n?void 0:null===(a=n.options)||void 0===a?void 0:a.firstWeekContainsDate)&&void 0!==r?r:o5.firstWeekContainsDate)&&void 0!==i?i:null===(l=o5.locale)||void 0===l?void 0:null===(d=l.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==s?s:1);if(!(p>=1&&p<=7))throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var u=new Date(0);u.setFullYear(c+1,0,p),u.setHours(0,0,0,0);var g=o3(u,t),f=new Date(0);f.setFullYear(c,0,p),f.setHours(0,0,0,0);var y=o3(f,t);return h.getTime()>=g.getTime()?c+1:h.getTime()>=y.getTime()?c:c-1}(e,t),p=new Date(0);return p.setFullYear(c,0,h),p.setHours(0,0,0,0),o3(p,t)})(s,t).getTime())/6048e5)+1})(t.days[0])}
                      </td>`)}
                  ${t.days.map(t=>{let s={color:"currentColor",disabled:!!(this.disabledDates&&this.disabledDates.some(e=>o4(e,t))),...this.customizedDates&&this.customizedDates.find(e=>o4(e.date,t))},i=!function(e,t){oQ(2,arguments);var s=o0(e),i=o0(t);return s.getFullYear()===i.getFullYear()&&s.getMonth()===i.getMonth()}(this.focusedDate,t)||t<this.min||t>this.max,r=0===t.getDay()||6===t.getDay(),o=s.disabled||i||this.disabledWeekends&&r;return id`
                      <td
                        class="${iV({"custom-date":!!s,disabled:!!o,today:o4(e,t)})}"
                        ?disabled=${o}
                        tabindex="${o4(this.focusedDate,t)?0:-1}"
                        aria-selected="${this.value&&o4(this.value,t)}"
                        aria-label="${t.toDateString()}"
                        @click=${()=>o?null:tS(this,L,W).call(this,t)}
                        id="dateCell-${t.getDate()}"
                      >
                        <span
                          style="color: ${s?s?.color:""}"
                          >${t.getDate()}</span
                        >

                        ${iO(s.indicator,()=>id`<span
                              class="indicator_${s?.indicator}"
                              style="background-color: ${s?.color}"
                            ></span>`)}
                      </td>
                    `})}
                </tr>
              `)}
          `)}
      </tbody>
    </table>`}_valueChanged(){this.value&&(this.focusedDate=this.value)}};L=new WeakSet,W=function(e){this.value=e,this.dispatchEvent(new CustomEvent("change",{detail:e,bubbles:!1,composed:!1}))},P=new WeakSet,N=function(e){let t=!1,s=new Date(this.focusedDate);"ArrowLeft"===e.key?(s=o1(this.focusedDate,-1),t=!0):"ArrowRight"===e.key?(s=o1(this.focusedDate,1),t=!0):"ArrowUp"===e.key?(s=o1(this.focusedDate,-7),t=!0):"ArrowDown"===e.key?(s=o1(this.focusedDate,7),t=!0):"Enter"===e.key||" "===e.key?(this._elFocusedCell?.hasAttribute("disabled")||tS(this,L,W).call(this,this.focusedDate),t=!0):"Home"===e.key?(s=new Date(this.focusedYear,this.focusedMonth,1),t=!0):"End"===e.key?(s=new Date(this.focusedYear,this.focusedMonth+1,0),t=!0):"PageUp"===e.key?(s=function(e,t){return oQ(2,arguments),o2(e,-oJ(1))}(this.focusedDate,1),t=!0):"PageDown"===e.key&&(s=o2(this.focusedDate,1),t=!0),s.getFullYear()>=this.min.getFullYear()&&s.getFullYear()<=this.max.getFullYear()&&(this.focusedDate=s),t&&(e.preventDefault(),e.stopPropagation(),this.updateComplete.then(()=>{this._elFocusedCell?.focus(),this.dispatchEvent(new CustomEvent("gds-date-focused",{detail:this.focusedDate,bubbles:!1,composed:!1}))}))},o9.styles=[o8],o9.shadowRootOptions={mode:"open",delegatesFocus:!0},t$([iT()],o9.prototype,"value",2),t$([iT({type:Date})],o9.prototype,"min",2),t$([iT({type:Date})],o9.prototype,"max",2),t$([iT()],o9.prototype,"focusedDate",2),t$([iT({type:Boolean,attribute:"disabled-weekends"})],o9.prototype,"disabledWeekends",2),t$([iT({type:Array,attribute:"disabled-dates"})],o9.prototype,"disabledDates",2),t$([iT({type:Number})],o9.prototype,"focusedMonth",1),t$([iT({type:Number})],o9.prototype,"focusedYear",1),t$([iT({type:Boolean})],o9.prototype,"showWeekNumbers",2),t$([iT({attribute:!1})],o9.prototype,"customizedDates",2),t$([iP('td[tabindex="0"]')],o9.prototype,"_elFocusedCell",2),t$([i0("value")],o9.prototype,"_valueChanged",1),o9=t$([iG("gds-calendar")],o9);var ne=sT`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
    }
  }
`,nt=class extends iZ{constructor(){super(),this.multiple=!1,this.compareWith=(e,t)=>e===t,tA(this,O,rB()),tA(this,R,e=>{let t=e.target;this.multiple?t.selected=!t.selected:(t.selected=!0,Array.from(this.options).forEach(e=>{e!==t&&(e.selected=!1)})),this.ariaActiveDescendantElement=t,this.dispatchEvent(new CustomEvent("change",{bubbles:!1,composed:!1}))}),new rG(this)}get navigableItems(){return this.visibleOptionElements}get options(){return tk(this,O).value&&rq(tk(this,O).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&"gds-option"===e.gdsElementName)||[]}get visibleOptionElements(){return this.options.filter(e=>!e.hidden)}get visibleSelectedOptionElements(){return this.options.filter(e=>e.selected&&!e.hidden)}get selection(){return this.options.filter(e=>e.selected)}set selection(e){this.options.forEach(t=>{t.selected=e.some(e=>this.compareWith(e,t.value))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),iJ.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",tk(this,R))}focus(){(this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])?.focus()}render(){return iX`<slot ${rY(tk(this,O))}></slot>`}_rerenderOptions(){this.options.forEach(e=>{e.requestUpdate()})}};O=new WeakMap,R=new WeakMap,nt.styles=ne,t$([iT({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:e=>e.toString()}})],nt.prototype,"multiple",2),t$([iT()],nt.prototype,"compareWith",2),t$([i0("multiple")],nt.prototype,"_rerenderOptions",1),nt=t$([iG("gds-listbox")],nt);var ns=sT`
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
`,ni=class extends ru{constructor(){super(),tA(this,j),tA(this,G),tA(this,K),this.label="",this.open=!1,this.searchable=!1,this.multiple=!1,this.compareWith=(e,t)=>e===t,this.searchFilter=(e,t)=>t.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,tA(this,H,void 0),tA(this,U,e=>{let t=this._elSearchInput,s=Array.from(tk(this,H));s.forEach(e=>e.hidden=!1),t.value&&s.filter(e=>!this.searchFilter(t.value,e)).forEach(e=>e.hidden=!0)}),tA(this,V,e=>{this._elListbox?.then(t=>{if("ArrowDown"===e.key||"Tab"===e.key){e.preventDefault(),t.focus();return}})}),tA(this,B,e=>{if("Tab"===e.key&&this.searchable){e.preventDefault(),this._elSearchInput?.focus();return}}),tA(this,I,e=>{let t=this._elTriggerBtn;t&&(t.ariaActiveDescendantElement=e.target)}),tA(this,Z,e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&(this.open=!1)}),tA(this,J,e=>{"Tab"!==e.key||this.searchable||(e.preventDefault(),this.open=!1,this._elTriggerBtn?.focus())}),ri(this),rw(this),tC(this,H,this.getElementsByTagName(function(e){return iY.get(e)??e}("gds-option")))}get type(){return"gds-dropdown"}get options(){return Array.from(tk(this,H)).filter(e=>!e.hasAttribute("isplaceholder"))}get placeholder(){return Array.from(tk(this,H)).find(e=>e.hasAttribute("isplaceholder"))}get displayValue(){return(Array.isArray(this.value)?this.value.length>2?rk(ry`${this.value.length} selected`):this.value.reduce((e,t)=>e+this.options.find(e=>e.value===t)?.innerHTML+", ","").slice(0,-2):this.options.find(e=>e.selected)?.innerHTML)||this.placeholder?.innerHTML||""}connectedCallback(){super.connectedCallback(),iJ.instance.apply(this,"gds-dropdown"),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleValueChange()})}render(){return iX`
      ${iO(this.label&&!this.hideLabel,()=>iX`<label for="trigger">${this.label}</label>`)}

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
          class=${iV({small:"small"===this.size})}
        >
          <slot name="trigger">
            <span>${oO(this.displayValue)}</span>
          </slot>
        </button>
        ${iO(this.searchable,()=>iX`<input
              id="searchinput"
              type="text"
              aria-label="${rk("Filter available options")}"
              placeholder="${rk("Search")}"
              @keydown=${tk(this,V)}
              @keyup=${tk(this,U)}
            />`)}

        <gds-listbox
          id="listbox"
          .multiple="${rs(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${tS(this,j,Y)}"
          @gds-focus="${tk(this,I)}"
          @keydown=${tk(this,B)}
        >
          <slot gds-allow="gds-option gds-menu-heading"></slot>
        </gds-listbox>
      </gds-popover>

      <span class="form-info"><slot name="message"></slot></span>
    `}_handleLightDOMChange(){if(this.requestUpdate(),this.multiple){this._handleValueChange();return}void 0===this.value?this.placeholder?this.value=this.placeholder.value:this.value=this.options[0]?.value:this.placeholder||void 0!==this.options.find(e=>this.compareWith(e.value,this.value))||(this.options[0]&&(this.options[0].selected=!0),this.value=this.options[0]?.value)}_handleValueChange(){this._elListbox.then(e=>{e&&(Array.isArray(this.value)?e.selection=this.value:e.selection=[this.value])})}_onOpenChange(){let e=this.open;Array.from(tk(this,H)).forEach(t=>t.hidden=!e),e?tS(this,G,q).call(this):(tS(this,K,X).call(this),this._elSearchInput&&(this._elSearchInput.value="")),this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:e},bubbles:!0,composed:!0}))}};H=new WeakMap,U=new WeakMap,V=new WeakMap,B=new WeakMap,I=new WeakMap,j=new WeakSet,Y=function(){this._elListbox.then(e=>{this.multiple?this.value=e.selection.map(e=>e.value):(this.value=e.selection[0]?.value,this.open=!1,setTimeout(()=>this._elTriggerBtn?.focus(),0)),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))})},G=new WeakSet,q=function(){this.addEventListener("blur",tk(this,Z)),this.addEventListener("gds-blur",tk(this,Z)),this.addEventListener("keydown",tk(this,J))},K=new WeakSet,X=function(){this.removeEventListener("blur",tk(this,Z)),this.removeEventListener("gds-blur",tk(this,Z)),this.removeEventListener("keydown",tk(this,J))},Z=new WeakMap,J=new WeakMap,ni.styles=ns,ni.shadowRootOptions={mode:"open",delegatesFocus:!0},t$([iT()],ni.prototype,"label",2),t$([iT({type:Boolean,reflect:!0})],ni.prototype,"open",2),t$([iT({type:Boolean,reflect:!0})],ni.prototype,"searchable",2),t$([iT({type:Boolean,reflect:!0})],ni.prototype,"multiple",2),t$([iT()],ni.prototype,"compareWith",2),t$([iT()],ni.prototype,"searchFilter",2),t$([iT({type:Boolean,attribute:"sync-popover-width"})],ni.prototype,"syncPopoverWidth",2),t$([iT({type:Number,attribute:"max-height"})],ni.prototype,"maxHeight",2),t$([iT()],ni.prototype,"size",2),t$([iT({type:Boolean,attribute:"hide-label"})],ni.prototype,"hideLabel",2),t$([iP("#trigger")],ni.prototype,"_elTriggerBtn",2),t$([iN("#listbox")],ni.prototype,"_elListbox",2),t$([iP("#searchinput")],ni.prototype,"_elSearchInput",2),t$([function(e={attributes:!0,childList:!0,subtree:!1,characterData:!0}){return(t,s,i)=>{let r;let o=t.connectedCallback,n=t.disconnectedCallback;t.connectedCallback=function(){o?.call(this),(r=new MutationObserver((e,t)=>{i.value?.call(this)})).observe(this,e)},t.disconnectedCallback=function(){n?.call(this),r.disconnect()}}}({attributes:!0,childList:!0,subtree:!0,characterData:!0})],ni.prototype,"_handleLightDOMChange",1),t$([i0("value")],ni.prototype,"_handleValueChange",1),t$([i0("open")],ni.prototype,"_onOpenChange",1),ni=t$([iG("gds-dropdown")],ni);var nr=class extends iS{constructor(){super(...arguments),tA(this,ea),tA(this,ed),tA(this,ec),tA(this,eu),tA(this,ef),this.value=0,this.length=2,this.min=0,this.max=Number.MAX_SAFE_INTEGER,this.displayValue=tS(this,ec,ep).call(this,this.value,this.length),tA(this,Q,""),tA(this,ee,()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=2===this.length?this.min:new Date().getFullYear()-1),this.value=tS(this,eu,eg).call(this,e+1),tS(this,ed,eh).call(this)}),tA(this,et,()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=2===this.length?this.max:new Date().getFullYear()+1),this.value=tS(this,eu,eg).call(this,e-1),tS(this,ed,eh).call(this)}),tA(this,es,e=>{e.stopPropagation(),e.preventDefault(),this.focus()}),tA(this,ei,()=>{tS(this,ef,ey).call(this)}),tA(this,er,()=>{""!==tk(this,Q)&&(tS(this,ef,ey).call(this),this.value=tS(this,eu,eg).call(this,parseInt(this.value.toString())),tS(this,ed,eh).call(this))}),tA(this,eo,e=>{e.stopPropagation(),e.preventDefault(),e.deltaY>0?tk(this,et).call(this):tk(this,ee).call(this)}),tA(this,en,e=>{let t=!1;if("ArrowUp"===e.key)tk(this,ee).call(this),t=!0;else if("ArrowDown"===e.key)tk(this,et).call(this),t=!0;else{let s=parseInt(e.key);isNaN(s)||(tk(this,Q).length<this.length&&(tC(this,Q,tk(this,Q)+s.toString()),this.value=parseInt(tk(this,Q))),tk(this,Q).length===this.length&&(this.value=tS(this,eu,eg).call(this,this.value),tS(this,ef,ey).call(this),tS(this,ea,el).call(this),tS(this,ed,eh).call(this)),t=!0)}t&&(e.preventDefault(),e.stopPropagation())})}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.setAttribute("role","spinbutton"),this.setAttribute("tabindex","0"),this.addEventListener("wheel",tk(this,eo)),this.addEventListener("keydown",tk(this,en)),this.addEventListener("blur",tk(this,er)),this.addEventListener("focus",tk(this,ei)),this.addEventListener("click",tk(this,es)),this.addEventListener("mousedown",tk(this,es))}focus(e){super.focus(e),tk(this,ei).call(this)}render(){return iX`${this.displayValue}`}_refreshDisplayValue(){this.displayValue=tS(this,ec,ep).call(this,this.value,this.length),this.setAttribute("aria-valuetext",this.value.toString())}};Q=new WeakMap,ee=new WeakMap,et=new WeakMap,es=new WeakMap,ei=new WeakMap,er=new WeakMap,eo=new WeakMap,en=new WeakMap,ea=new WeakSet,el=function(){let e=this.nextElementSibling;for(;e;){if(e instanceof nr){e.focus();break}e=e.nextElementSibling}},ed=new WeakSet,eh=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value.toString()}}))},ec=new WeakSet,ep=function(e,t){return String(e).padStart(t,"0")},eu=new WeakSet,eg=function(e){return Math.max(this.min,Math.min(this.max,e))},ef=new WeakSet,ey=function(){tC(this,Q,"")},nr.formAssociated=!0,t$([iT({type:Number})],nr.prototype,"value",2),t$([iT({type:Number})],nr.prototype,"length",2),t$([iT({type:Number,attribute:"aria-valuemin"})],nr.prototype,"min",2),t$([iT({type:Number,attribute:"aria-valuemax"})],nr.prototype,"max",2),t$([iL()],nr.prototype,"displayValue",2),t$([i0("value")],nr.prototype,"_refreshDisplayValue",1),nr=t$([iG("gds-date-part-spinner")],nr);var no=class extends oH{};no._regularSVG='<path d="M3.75 9.75H20.25M7.75 4.75V2.75M16.25 4.75V2.75M3.75 4.75H20.25V20.25H3.75V4.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',no._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 2C8.16421 2 8.5 2.33579 8.5 2.75V4H15.5V2.75C15.5 2.33579 15.8358 2 16.25 2C16.6642 2 17 2.33579 17 2.75V4H20.25C20.6642 4 21 4.33579 21 4.75V20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25V4.75C3 4.33579 3.33579 4 3.75 4H7V2.75C7 2.33579 7.33579 2 7.75 2ZM4.5 10.5V19.5H19.5V10.5H4.5Z" fill="currentColor"/>',no._name="calendar",no=t$([iG("gds-icon-calendar")],no);var nn=class extends oH{};nn._regularSVG='<path d="M15 20L7 12L15 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',nn._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5303 3.46967C15.8232 3.76256 15.8232 4.23744 15.5303 4.53033L8.06066 12L15.5303 19.4697C15.8232 19.7626 15.8232 20.2374 15.5303 20.5303C15.2374 20.8232 14.7626 20.8232 14.4697 20.5303L6.46967 12.5303C6.32902 12.3897 6.25 12.1989 6.25 12C6.25 11.8011 6.32902 11.6103 6.46967 11.4697L14.4697 3.46967C14.7626 3.17678 15.2374 3.17678 15.5303 3.46967Z" fill="currentColor"/>',nn._name="chevron left",nn=t$([iG("gds-icon-chevron-left")],nn);var na=class extends oH{};na._regularSVG='<path d="M9 4L17 12L9 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',na._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M8.46967 3.46967C8.76256 3.17678 9.23744 3.17678 9.53033 3.46967L17.5303 11.4697C17.671 11.6103 17.75 11.8011 17.75 12C17.75 12.1989 17.671 12.3897 17.5303 12.5303L9.53033 20.5303C9.23744 20.8232 8.76256 20.8232 8.46967 20.5303C8.17678 20.2374 8.17678 19.7626 8.46967 19.4697L15.9393 12L8.46967 4.53033C8.17678 4.23744 8.17678 3.76256 8.46967 3.46967Z" fill="currentColor"/>',na._name="chevron right",na=t$([iG("gds-icon-chevron-right")],na);var nl=sT`
  @layer base, reset, transitional-styles;
  @layer base {
    label {
      display: block;
    }
  }
`,nd=class extends ru{constructor(){super(...arguments),tA(this,em),tA(this,e_),tA(this,e$),tA(this,ek),tA(this,eC),tA(this,eS),tA(this,ez),tA(this,ej),tA(this,eK),tA(this,eZ),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.open=!1,this.label="",this.showWeekNumbers=!1,this.size="medium",this.hideLabel=!1,this.disabledWeekends=!1,this._focusedMonth=new Date().getMonth(),this._focusedYear=new Date().getFullYear(),this._dateFormatLayout=tS(this,ej,eY).call(this,"y-m-d"),tA(this,ev,void 0),tA(this,eD,e=>{this._elTrigger.then(t=>{e.relatedTarget?.parentElement!==e.target&&document.getSelection()?.removeAllRanges()})}),tA(this,eT,e=>{this._elTrigger.then(e=>{document.getSelection()?.removeAllRanges();let t=new Range;t.setStart(e.firstChild,0),t.setEnd(e.lastChild,4),document.getSelection()?.addRange(t)})}),tA(this,eL,e=>{this._elTrigger.then(t=>{e.currentTarget===t&&(e.preventDefault(),e.clipboardData?.setData("text/plain",this.displayValue))})}),tA(this,eW,e=>{this._elTrigger.then(t=>{if(e.currentTarget!==t)return;e.preventDefault();let s=e.clipboardData?.getData("text/plain");if(!s)return;let i=new Date(s);"Invalid Date"!==i.toString()&&(this.value=i,tS(this,eS,eM).call(this))})}),tA(this,eP,e=>{this._elSpinners[0]?.focus()}),tA(this,eN,e=>{e.stopPropagation(),this.value=e.detail,this.open=!1,tS(this,eS,eM).call(this)}),tA(this,eO,e=>{e.stopPropagation(),this._focusedMonth=e.target?.value}),tA(this,eR,e=>{e.stopPropagation(),this._focusedYear=e.target?.value}),tA(this,eH,e=>{this._focusedMonth++,this._focusedMonth>11&&(this._focusedMonth=0,this._focusedYear++)}),tA(this,eU,e=>{this._focusedMonth--,this._focusedMonth<0&&(this._focusedMonth=11,this._focusedYear--)}),tA(this,eV,async()=>{this._focusedMonth=(await this._elCalendar).focusedMonth,this._focusedYear=(await this._elCalendar).focusedYear,this.value=(await this._elCalendar).focusedDate,this.requestUpdate(),tS(this,ez,eF).call(this)}),tA(this,eB,async e=>{if(e.target===e.currentTarget){if(this.open=e.detail.open,"close"===e.detail.reason){let e=(await this._elCalendar).value;o4(e||new Date(0),tk(this,ev)||new Date(0))||(this.value=e,tS(this,eS,eM).call(this)),this.value&&(this._focusedMonth=this.value.getMonth(),this._focusedYear=this.value.getFullYear())}"cancel"===e.detail.reason&&(this.value=tk(this,ev))}}),tA(this,eI,e=>{let t=Array.from(this._elSpinners).findIndex(t=>t===e.target);if("ArrowRight"===e.key){let e=this._elSpinners[t+1];e&&e.focus()}if("ArrowLeft"===e.key){let e=this._elSpinners[t-1];e&&e.focus()}}),tA(this,eG,(e,t)=>{tk(this,eq)[t]=e;let s=new Date;s.setFullYear(parseInt(tk(this,eq).year)),s.setMonth(parseInt(tk(this,eq).month)-1),s.setDate(parseInt(tk(this,eq).day)),"Invalid Date"!==s.toString()&&(this.value=s,tS(this,eS,eM).call(this))}),tA(this,eq,{year:"yyyy",month:"mm",day:"dd"})}get type(){return"gds-datepicker"}get dateformat(){return this._dateFormatLayout.layout.map(e=>e.token).join(this._dateFormatLayout.delimiter)}set dateformat(e){this._dateFormatLayout=tS(this,ej,eY).call(this,e)}async getFocusedDate(){return this.open?this._elCalendar.then(e=>e.focusedDate):void 0}get displayValue(){return this._elInput.innerText.replace(/\s+/g,"")}async test_getDateCell(e){return this._elCalendar.then(t=>t.getDateCell(e))}connectedCallback(){super.connectedCallback(),iJ.instance.apply(this,"gds-datepicker")}render(){return iX`${iO(this.label&&!this.hideLabel,()=>iX`<label for="spinner-0" id="label">${this.label}</label>`)}

      <div class="form-info"><slot name="sub-label"></slot></div>

      <div
        class=${iV({field:!0,small:"small"===this.size})}
        id="field"
        @click=${tk(this,eP)}
        @copy=${tk(this,eL)}
        @paste=${tk(this,eW)}
      >
        <div
          class=${iV({input:!0,"is-placeholder":!this.value})}
          @focusout=${tk(this,eD)}
        >
          ${function*(e,t){let s="function"==typeof t;if(void 0!==e){let i=-1;for(let r of e)i>-1&&(yield s?t(i):t),i++,yield r}}(function*(e,t){if(void 0!==e){let s=0;for(let i of e)yield t(i,s++)}}(this._dateFormatLayout.layout,(e,t)=>iX`<gds-date-part-spinner
                  id="spinner-${t}"
                  .length=${"y"===e.token?4:2}
                  .value=${tk(this,eq)[e.name]}
                  aria-valuemin=${tS(this,ek,eA).call(this,e.name)}
                  aria-valuemax=${tS(this,eC,eE).call(this,e.name)}
                  aria-label=${tS(this,e$,ex).call(this,e.name)}
                  aria-describedby="label"
                  @keydown=${tk(this,eI)}
                  @change=${t=>tk(this,eG).call(this,t.detail.value,e.name)}
                  @focus=${tk(this,eT)}
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
            @click=${tk(this,eU)}
            aria-label=${rk("Previous month")}
          >
            <gds-icon-chevron-left></gds-icon-chevron-left>
          </button>
          <gds-dropdown
            .value=${this._focusedMonth.toString()}
            @change=${tk(this,eO)}
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
            @change=${tk(this,eR)}
            .maxHeight=${300}
            label="${rk("Year")}"
            size="small"
            hide-label
          >
            ${oX(tk(this,eK,eX),e=>e,e=>iX`<gds-option value=${e}>${e}</gds-option>`)}
          </gds-dropdown>
          <button
            @click=${tk(this,eH)}
            aria-label=${rk("Next month")}
          >
            <gds-icon-chevron-right></gds-icon-chevron-right>
          </button>
        </div>

        <gds-calendar
          id="calendar"
          @change=${tk(this,eN)}
          @gds-date-focused=${tk(this,eV)}
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
            @click=${()=>{this.value=void 0,tS(this,eS,eM).call(this)}}
          >
            ${rk("Clear")}
          </gds-button>
          ${oq(tS(this,em,eb).call(this),ic)}
          <gds-button
            rank="tertiary"
            size="small"
            @click=${()=>{this.value=new Date,tS(this,eS,eM).call(this)}}
          >
            ${rk("Today")}
          </gds-button>
        </div>
      </gds-popover> `}_handleValueChange(){if(!this.value){tC(this,eq,{year:"yyyy",month:"mm",day:"dd"});return}let e=this.value;this._focusedMonth=e.getMonth(),this._focusedYear=e.getFullYear();let t=e.getFullYear().toString(),s=(e.getMonth()+1).toString().padStart(2,"0"),i=e.getDate().toString().padStart(2,"0");tC(this,eq,{year:t,month:s,day:i})}_handleOpenChange(){this.open&&(tC(this,ev,this.value),this._elCalendar.then(e=>e.focus()))}};ev=new WeakMap,em=new WeakSet,eb=async function(){let e;let t=await this.getFocusedDate(),s="";return t&&t>this.max?(s=rk("Last available date"),e=()=>tS(this,e_,ew).call(this,this.max)):t&&t<this.min&&(s=rk("First available date"),e=()=>tS(this,e_,ew).call(this,this.min)),iX`${iO(s.length>0,()=>iX`<gds-button rank="tertiary" size="small" @click=${e}>
          ${s}
        </gds-button>`,()=>ic)}`},e_=new WeakSet,ew=function(e){let t=new Date(e);this._elCalendar.then(e=>e.focusedDate=t).then(tk(this,eV))},e$=new WeakSet,ex=function(e){return({year:rk("Year"),month:rk("Month"),day:rk("Day")})[e]},ek=new WeakSet,eA=function(e){return({year:1900,month:1,day:1})[e]},eC=new WeakSet,eE=function(e){return({year:9999,month:12,day:31})[e]},eS=new WeakSet,eM=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value}}))},ez=new WeakSet,eF=function(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value}}))},eD=new WeakMap,eT=new WeakMap,eL=new WeakMap,eW=new WeakMap,eP=new WeakMap,eN=new WeakMap,eO=new WeakMap,eR=new WeakMap,eH=new WeakMap,eU=new WeakMap,eV=new WeakMap,eB=new WeakMap,eI=new WeakMap,ej=new WeakSet,eY=function(e){let t=e.replace(/[a-z0-9]/gi,"")[0],s=e.split(t),i=s.findIndex(e=>"y"===e),r=s.findIndex(e=>"m"===e),o=s.findIndex(e=>"d"===e);if(-1===i||-1===r||-1===o)throw Error("Invalid date format for <gds-datepicker>");return{delimiter:t,layout:[i,r,o].sort((e,t)=>e-t).map(e=>s[e]).map(e=>({token:e,name:"y"===e?"year":"m"===e?"month":"day"}))}},eG=new WeakMap,eq=new WeakMap,eK=new WeakSet,eX=function(){let e=this.min.getFullYear(),t=this.max.getFullYear(),s=tk(this,eZ,eJ),i=this.value?.getFullYear();return{*[Symbol.iterator](){s&&(yield i);for(let s=e;s<=t;s++)yield s}}},eZ=new WeakSet,eJ=function(){return!!this.value&&(this.value.getFullYear()<this.min.getFullYear()||this.value.getFullYear()>this.max.getFullYear())},nd.styles=[nl],nd.shadowRootOptions={mode:"open",delegatesFocus:!0},t$([iT({converter:o7})],nd.prototype,"value",2),t$([iT({converter:o7})],nd.prototype,"min",2),t$([iT({converter:o7})],nd.prototype,"max",2),t$([iT({type:Boolean})],nd.prototype,"open",2),t$([iT()],nd.prototype,"label",2),t$([iT({type:Boolean,attribute:"show-week-numbers"})],nd.prototype,"showWeekNumbers",2),t$([iT()],nd.prototype,"size",2),t$([iT({type:Boolean,attribute:"hide-label"})],nd.prototype,"hideLabel",2),t$([iT()],nd.prototype,"dateformat",1),t$([iT({type:Boolean,attribute:"disabled-weekends"})],nd.prototype,"disabledWeekends",2),t$([iT({converter:{fromAttribute:e=>e.split(",").map(e=>new Date(e.trim())),toAttribute:e=>JSON.stringify(e.map(e=>e.toISOString()))},attribute:"disabled-dates"})],nd.prototype,"disabledDates",2),t$([iN("#calendar-button")],nd.prototype,"test_calendarButton",2),t$([iL()],nd.prototype,"_focusedMonth",2),t$([iL()],nd.prototype,"_focusedYear",2),t$([iL()],nd.prototype,"_dateFormatLayout",2),t$([iN("#calendar")],nd.prototype,"_elCalendar",2),t$([iN("#calendar-button")],nd.prototype,"_elTrigger",2),t$([iN("#field")],nd.prototype,"_elField",2),t$([(t,s)=>iW(t,s,{get(){return(this.renderRoot??(e??=document.createDocumentFragment())).querySelectorAll("[role=spinbutton]")}})],nd.prototype,"_elSpinners",2),t$([iP(".input")],nd.prototype,"_elInput",2),t$([i0("value")],nd.prototype,"_handleValueChange",1),t$([i0("open")],nd.prototype,"_handleOpenChange",1),nd=t$([iG("gds-datepicker")],nd);var nh=sT`
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
`,nc=/(?<l>l:([a-z0-9]+))?\s*(?<m>m:([a-z0-9]+))?\s*(?<s>s:([a-z0-9]+))?/,np=class extends iZ{constructor(){super(...arguments),tA(this,eQ,{varsColumn:sT``,varsGap:sT``,varsRowGap:sT``,varsPadding:sT``,varsAutoColumns:sT``})}connectedCallback(){super.connectedCallback(),this._updateColumnVariables(),this._updateGapVariables(),this._updateRowGapVariables(),this._updatePaddingVariables(),this._updateAutoColumnsVariables()}_updateCSSVariables(e,t){let s,i,r,o;e in this&&(s=this[e]);let n=s?.match(nc)||null,{l:a,m:l,s:d}=n?.groups||{},h=(e,t,s)=>({desktop:e?`var(--gds-sys-grid-gap-${e.split(":")[1]})`:void 0,tablet:t?`var(--gds-sys-grid-gap-${t.split(":")[1]})`:void 0,mobile:s?`var(--gds-sys-grid-gap-${s.split(":")[1]})`:void 0});"columns"===e&&(this.columns&&!isNaN(Number(this.columns))?i=r=o=Number(this.columns):(i=a?a.split(":")[1]:void 0,r=l?l.split(":")[1]:void 0,o=d?d.split(":")[1]:void 0)),"gap"===e&&(this.gap&&!this.gap.includes(" ")?i=r=o=`var(--gds-sys-grid-gap-${this.gap})`:{desktop:i,tablet:r,mobile:o}=h(a,l,d)),"rowGap"===e&&(this.rowGap&&!this.rowGap.includes(" ")?i=r=o=`var(--gds-sys-grid-gap-${this.rowGap})`:{desktop:i,tablet:r,mobile:o}=h(a,l,d)),"padding"===e&&(this.padding&&!this.padding.includes(" ")?i=r=o=`var(--gds-sys-grid-gap-${this.padding})`:{desktop:i,tablet:r,mobile:o}=h(a,l,d)),"autoColumns"===e&&(this.autoColumns&&!this.autoColumns.includes(" ")?i=r=o=`${this.autoColumns}px`:(i=a?`${a.split(":")[1]}px`:void 0,r=l?`${l.split(":")[1]}px`:void 0,o=d?`${d.split(":")[1]}px`:void 0));let c=[{name:`${t}-desktop`,value:i},{name:`${t}-tablet`,value:r},{name:`${t}-mobile`,value:o}].filter(({value:e})=>void 0!==e).map(({name:e,value:t})=>`--_${e}: ${t};`).join(" ");tC(this,eQ,{...tk(this,eQ),[t]:sT`
        ${sD(c)}
      `}),this._dynamicStylesController.inject("grid-vars",sT`
        :host {
          ${sD(Object.values(tk(this,eQ)).join(""))}
        }
      `)}_updateColumnVariables(){this._updateCSSVariables("columns","columns")}_updateGapVariables(){this._updateCSSVariables("gap","gap")}_updateRowGapVariables(){this._updateCSSVariables("rowGap","row-gap")}_updatePaddingVariables(){this._updateCSSVariables("padding","padding")}_updateAutoColumnsVariables(){this._updateCSSVariables("autoColumns","col-width")}render(){return iX`<slot></slot>`}};eQ=new WeakMap,np.styles=[rd,nh],np.shadowRootOptions={mode:"open",delegatesFocus:!0},t$([iT({attribute:"columns",type:String})],np.prototype,"columns",2),t$([iT({attribute:"gap",type:String})],np.prototype,"gap",2),t$([iT({attribute:"row-gap",type:String})],np.prototype,"rowGap",2),t$([iT({attribute:"padding",type:String})],np.prototype,"padding",2),t$([iT({attribute:"auto-columns",type:String})],np.prototype,"autoColumns",2),t$([i0("columns")],np.prototype,"_updateColumnVariables",1),t$([i0("gap")],np.prototype,"_updateGapVariables",1),t$([i0("row-gap")],np.prototype,"_updateRowGapVariables",1),t$([i0("padding")],np.prototype,"_updatePaddingVariables",1),t$([i0("autoColumns")],np.prototype,"_updateAutoColumnsVariables",1),np=t$([iG("gds-grid")],np);var nu=class extends iZ{connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}render(){return iX`<slot></slot>`}};nu=t$([iG("gds-list-item")],nu);var ng=class extends iZ{constructor(){super(...arguments),this.label=""}connectedCallback(){super.connectedCallback(),ri(this),iJ.instance.apply(this,"gds-grouped-list")}render(){return iX`${iO(this.label,()=>iX`<div class="gds-list-heading" aria-hidden="true" id="label">
            ${this.label}
          </div>`)}
      <div role="list" aria-labelledby="label">
        <slot gds-allow="gds-list-item"></slot>
      </div>`}};function nf(){return(e,t,s)=>{let i=e.connectedCallback,r=e.disconnectedCallback;e.connectedCallback=function(){i?.call(this),this.__resizeObservers=this.__resizeObservers||{},this.__resizeObserver_tids=this.__resizeObserver_tids||{},this.__resizeObservers[t]=new ResizeObserver(()=>{this.__resizeObserver_tids[t]&&clearTimeout(this.__resizeObserver_tids[t]),this.__resizeObserver_tids[t]=setTimeout(()=>{s.value?.call(this)},20)}),this.__resizeObservers[t].observe(this)},e.disconnectedCallback=function(){r?.call(this),this.__resizeObservers[t].disconnect()}}}t$([iT()],ng.prototype,"label",2),ng=t$([iG("gds-grouped-list")],ng);var ny=`:host {
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
`,nv=class extends iZ{constructor(){super(...arguments),this.selected=!1}connectedCallback(){super.connectedCallback(),iJ.instance.apply(this,"gds-segmented"),this.setAttribute("role","listitem")}render(){return iX`<button aria-current=${String(this.selected)}>
      <slot></slot>
    </button>`}};nv.styles=[...rd,sD(ny)],t$([iT({type:Boolean,reflect:!0})],nv.prototype,"selected",2),t$([iT()],nv.prototype,"value",2),nv=t$([iG("gds-segment")],nv);var nm=`:host {
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
`,nb={small:36,medium:44},n_=e=>e?0:4,nw=class extends iZ{constructor(){super(...arguments),tA(this,to),this.segMinWidth=100,this.size="medium",tA(this,e0,void 0),this._showPrevButton=!1,this._showNextButton=!1,tA(this,e1,0),tA(this,e2,0),tA(this,e5,0),tA(this,e3,0),tA(this,e6,0),tA(this,e4,0),tA(this,e7,0),tA(this,e8,!1),tA(this,e9,e=>{tC(this,e4,e.clientX),tC(this,e7,tk(this,e3)),tC(this,e8,!0)}),tA(this,te,e=>{if(!tk(this,e8))return;e.preventDefault();let t=e.clientX-tk(this,e4);if(!(5>Math.abs(t)))try{this._elSegments.hasPointerCapture(e.pointerId)||this._elSegments.setPointerCapture(e.pointerId),tC(this,e3,tk(this,e7)+t),tk(this,tr).call(this)}catch{}}),tA(this,tt,e=>{if(tk(this,e8)){tC(this,e8,!1);try{this._elSegments.releasePointerCapture(e.pointerId),tk(this,ts).call(this)}catch{}}}),tA(this,ts,()=>{tC(this,e1,Math.round(-tk(this,e3)/tk(this,e2))),tk(this,ti).call(this)}),tA(this,ti,(e=!1)=>{let t=()=>{let e=this.segments.length,t=this._elTrack.offsetWidth;if(t/e>this.segMinWidth)return{count:e,segmentWidth:(t-n_(this._isUsingTransitionalStyles)*(e-1))/e};let s=Math.floor((this.offsetWidth-2*nb[this.size])/this.segMinWidth),i=(t-n_(this._isUsingTransitionalStyles)*(s-1))/s;return{count:s,segmentWidth:i}},{count:s}=t();e&&(tk(this,e6)>=tk(this,e1)+s&&tC(this,e1,tk(this,e6)-s+1),tk(this,e6)<tk(this,e1)&&tC(this,e1,tk(this,e6)));let i=this.segments.length-s,r=tk(this,e1)>=i,o=0>=tk(this,e1);r&&tC(this,e1,i),o&&tC(this,e1,0),tk(this,td).call(this,s),this.updateComplete.then(()=>{let{segmentWidth:e,count:s}=t();this.segments.forEach(t=>{t.style.width=e+"px"}),tC(this,e3,-tk(this,e1)*e-n_(this._isUsingTransitionalStyles)*tk(this,e1)),tk(this,tr).call(this),tC(this,e2,e),tC(this,e5,e),tk(this,th).call(this)})}),tA(this,tr,()=>{window.requestAnimationFrame(()=>{this._elSegments.style.transform=`translateX(${tk(this,e3)}px)`})}),tA(this,ta,()=>{tE(this,e1)._--,tk(this,ti).call(this)}),tA(this,tl,()=>{tE(this,e1)._++,tk(this,ti).call(this)}),tA(this,td,e=>{this._showPrevButton=tk(this,e1)>0,this._showNextButton=tk(this,e1)<this.segments.length-e}),tA(this,th,()=>{let e=this.segments.find(e=>e.selected);if(e){let t=this.segments.indexOf(e),s=t*tk(this,e5)+n_(this._isUsingTransitionalStyles)*t;this._elIndicator.style.transform=`translateX(${s}px)`,this._elIndicator.style.width=`${tk(this,e5)}px`}else this._elIndicator.style.transform="translateX(-100%)",this._elIndicator.style.width="0px"}),tA(this,tc,e=>{let t=this.segments.find(t=>t===e.target||t.contains(e.target));t&&(this.segments.forEach(e=>e.selected=!1),t.selected=!0,tC(this,e0,t.value),tk(this,th).call(this),this.dispatchEvent(new CustomEvent("change",{detail:{segment:t},bubbles:!0,composed:!0})))}),tA(this,tp,()=>{tk(this,e0)&&this.updateComplete.then(()=>{let e=this.segments.find(e=>e.value===tk(this,e0));e&&(this.segments.forEach(e=>e.selected=!1),e.selected=!0,tC(this,e6,this.segments.indexOf(e)),tk(this,ti).call(this,!0))})})}get value(){return tk(this,e0)}set value(e){tC(this,e0,e),tk(this,tp).call(this)}get segments(){return this._elSlot?this._elSlot.assignedElements():[]}connectedCallback(){super.connectedCallback(),iJ.instance.apply(this,"gds-segmented-control"),this.addEventListener("focusin",e=>{e.target instanceof nv&&(tC(this,e6,this.segments.indexOf(e.target)),tk(this,ti).call(this,!0))})}render(){return iX`${iO(this._showPrevButton,()=>iX`<button
            id="btn-prev"
            @click=${tk(this,ta)}
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
          @pointerdown=${tk(this,e9)}
          @pointermove=${tk(this,te)}
          @touchmove=${tk(this,te)}
          @pointerup=${tk(this,tt)}
          @pointercancel=${tk(this,tt)}
          role="list"
        >
          <slot
            gds-allow="gds-segment"
            @click=${tk(this,tc)}
            @slotchange=${tS(this,to,tn)}
            role="none"
          ></slot>
          <div id="indicator" role="none"></div>
        </div>
      </div>
      ${iO(this._showNextButton,()=>iX`<button
            id="btn-next"
            @click=${tk(this,tl)}
            aria-label=${rk("Scroll right")}
          >
            <gds-icon-chevron-right />
          </button>`)}`}_recalculateMinWidth(){this.updateComplete.then(()=>tk(this,ti).call(this))}};e0=new WeakMap,e1=new WeakMap,e2=new WeakMap,e5=new WeakMap,e3=new WeakMap,e6=new WeakMap,e4=new WeakMap,e7=new WeakMap,e8=new WeakMap,e9=new WeakMap,te=new WeakMap,tt=new WeakMap,ts=new WeakMap,ti=new WeakMap,tr=new WeakMap,to=new WeakSet,tn=function(){let e=this.segments.find(e=>e.selected)?.value;e&&tC(this,e0,e),tk(this,ti).call(this)},ta=new WeakMap,tl=new WeakMap,td=new WeakMap,th=new WeakMap,tc=new WeakMap,tp=new WeakMap,nw.styles=[rd,sD(nm)],t$([iT({type:Number,attribute:"seg-min-width"})],nw.prototype,"segMinWidth",2),t$([iT()],nw.prototype,"size",2),t$([iT()],nw.prototype,"value",1),t$([iP("slot")],nw.prototype,"_elSlot",2),t$([iP("#indicator")],nw.prototype,"_elIndicator",2),t$([iP("#track")],nw.prototype,"_elTrack",2),t$([iP("#segments")],nw.prototype,"_elSegments",2),t$([iL()],nw.prototype,"_showPrevButton",2),t$([iL()],nw.prototype,"_showNextButton",2),t$([nf(),i0("segMinWidth")],nw.prototype,"_recalculateMinWidth",1),nw=t$([iG("gds-segmented-control")],nw);var n$=class extends iZ{constructor(){super(...arguments),this.colorScheme="light"}connectedCallback(){super.connectedCallback(),iJ.instance.apply(this,"gds-theme")}render(){return iX` <slot></slot> `}};t$([iT({reflect:!0,attribute:"color-scheme"})],n$.prototype,"colorScheme",2),n$=t$([iG("gds-theme")],n$);var nx=class extends oH{};nx._regularSVG='<path d="M2.75 15.0938L9 20.25L21.25 3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',nx._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M21.7426 2.99454C22.2979 3.40464 22.4157 4.18729 22.0056 4.74263L10.0056 20.9926C9.80433 21.2652 9.50107 21.4443 9.16524 21.4891C8.82942 21.5339 8.4898 21.4404 8.22417 21.2301L2.22417 16.4801C1.6829 16.0516 1.59149 15.2655 2.01999 14.7242C2.4485 14.1829 3.23466 14.0915 3.77593 14.52L8.76241 18.4677L19.9945 3.25753C20.4046 2.70218 21.1873 2.58444 21.7426 2.99454Z" fill="currentColor"/>',nx._name="checkmark",nx=t$([iG("gds-icon-checkmark")],nx);var nk=sT`
  @layer base, reset, transitional-styles;
  @layer base {
    .btn-p {
      padding: 0 0.75rem;
    }
    .icon {
      width: 1rem;
    }
  }
`,nA=class extends iZ{constructor(){super(...arguments),this.selected=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),iJ.instance.apply(this,"gds-filter-chip"),this._button.then(e=>{iJ.instance.apply(e,"gds-button")})}render(){let e={"btn-p":!this.selected};return iX`<gds-button
      class="btn"
      size="small"
      .rank=${this.selected?"primary":"secondary"}
      variant=${this._isUsingTransitionalStyles?"ghost":"default"}
      gds-role="option"
      gds-aria-selected=${this.selected}
    >
      <span class=${iV(e)}><slot></slot></span>
      <gds-icon-checkmark
        slot="trail"
        style="display: ${this.selected?"contents":"none"}"
        width="16"
        height="16"
        class="icon"
      ></gds-icon-checkmark>
    </gds-button>`}};nA.styles=[nk],t$([iT({reflect:!0,type:Boolean})],nA.prototype,"selected",2),t$([iT()],nA.prototype,"value",2),t$([iN(function(e){return iY.get(e)??e}("gds-button"))],nA.prototype,"_button",2),nA=t$([iG("gds-filter-chip")],nA);var nC=sT`
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
`,nE=class extends ru{constructor(){super(...arguments),tA(this,ty),tA(this,tm),this.multiple=!1,this.label="",this.rowCollapse=!1,this._collapsed=!1,tA(this,tu,e=>{let t=this.chips.find(t=>t===e.target||t.contains(e.target));t&&(this.multiple&&Array.isArray(this.value)?t.selected?this.value=this.value.filter(e=>e!==t.value):this.value=[...this.value,t.value]:this.value=t.value,this.dispatchEvent(new CustomEvent("change",{detail:{clickedChip:t,value:this.value},bubbles:!0,composed:!0})))}),tA(this,tg,3),tA(this,tf,0)}get chips(){return this._elSlot?this._elSlot.assignedElements():[]}render(){let e={collapse:this._collapsed};return iX`<div
      class="chips ${iV(e)}"
      role="listbox"
      aria-label=${this.label}
      aria-multiselectable=${this.multiple}
    >
      <slot
        gds-allow="gds-filter-chip"
        @click=${tk(this,tu)}
        @slotchange=${tS(this,tm,tb)}
        role="none"
      ></slot>
    </div>`}_handleResize(){if(!this.rowCollapse)return;let e=tS(this,ty,tv).call(this),t=this.offsetHeight,s=this.offsetWidth;t>=e*tk(this,tg)&&(this._collapsed=!0,tC(this,tf,s)),s>tk(this,tf)&&(this._collapsed=!1)}_updateSelectedFromValue(){this.value&&(this.multiple&&!Array.isArray(this.value)&&(this.value=[this.value]),!this.multiple&&Array.isArray(this.value)&&(this.value=this.value[0]),this.updateComplete.then(()=>{this.chips.forEach(e=>{e.selected=this.multiple?this.value.includes(e.value):this.value===e.value})}))}};tu=new WeakMap,tg=new WeakMap,tf=new WeakMap,ty=new WeakSet,tv=function(){return this.chips[0]?.offsetHeight||0},tm=new WeakSet,tb=function(){let e=this.chips.find(e=>e.selected)?.value;e&&(this.value=e)},nE.styles=[nC],t$([iT({converter:{fromAttribute:e=>e.split(","),toAttribute:e=>Array.isArray(e)?e.join(","):e}})],nE.prototype,"value",2),t$([iT({type:Boolean})],nE.prototype,"multiple",2),t$([iT()],nE.prototype,"label",2),t$([iT({type:Boolean,attribute:"row-collapse"})],nE.prototype,"rowCollapse",2),t$([iL()],nE.prototype,"_collapsed",2),t$([iP("slot")],nE.prototype,"_elSlot",2),t$([nf()],nE.prototype,"_handleResize",1),t$([i0("value")],nE.prototype,"_updateSelectedFromValue",1),nE=t$([iG("gds-filter-chips")],nE)})();/*! Bundled license information:

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