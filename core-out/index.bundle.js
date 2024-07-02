"use strict";(()=>{var e,t,s,i,r,o,n,a,l,h,d,c,p,u,g,f,y,v,m,b,_,w,$,x,k,A,E,S,C,T,M,F,D,L,W,P,N,O,R,z,H,U,B,I,V,j,Y,q,G,K,X,Z,J,Q,ee,et,es,ei,er,eo,en,ea,el,eh,ed,ec,ep,eu,eg,ef,ey,ev,em,eb,e_,ew,e$,ex,ek,eA,eE,eS,eC,eT,eM,eF,eD,eL,eW,eP,eN,eO,eR,ez,eH,eU,eB,eI,eV,ej,eY,eq,eG,eK,eX,eZ,eJ,eQ,e0,e1,e2,e5,e3,e6,e7,e4,e8,e9,te,tt,ts,ti,tr,to,tn,ta,tl,th,td,tc,tp,tu,tg,tf,ty,tv,tm,tb,t_,tw,t$,tx,tk=Object.defineProperty,tA=Object.getOwnPropertyDescriptor,tE=(e,t,s,i)=>{for(var r,o=i>1?void 0:i?tA(t,s):t,n=e.length-1;n>=0;n--)(r=e[n])&&(o=(i?r(t,s,o):r(o))||o);return i&&o&&tk(t,s,o),o},tS=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)},tC=(e,t,s)=>(tS(e,t,"read from private field"),s?s.call(e):t.get(e)),tT=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},tM=(e,t,s,i)=>(tS(e,t,"write to private field"),i?i.call(e,s):t.set(e,s),s),tF=(e,t,s,i)=>({set _(value){tM(e,t,value,s)},get _(){return tC(e,t,i)}}),tD=(e,t,s)=>(tS(e,t,"access private method"),s),tL=globalThis,tW=tL.ShadowRoot&&(void 0===tL.ShadyCSS||tL.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,tP=Symbol(),tN=new WeakMap,tO=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==tP)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(tW&&void 0===e){let s=void 0!==t&&1===t.length;s&&(e=tN.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&tN.set(t,e))}return e}toString(){return this.cssText}},tR=e=>new tO("string"==typeof e?e:e+"",void 0,tP),tz=(e,t)=>{if(tW)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let s of t){let t=document.createElement("style"),i=tL.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=s.cssText,e.appendChild(t)}},tH=tW?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let s of e.cssRules)t+=s.cssText;return tR(t)})(e):e,{is:tU,defineProperty:tB,getOwnPropertyDescriptor:tI,getOwnPropertyNames:tV,getOwnPropertySymbols:tj,getPrototypeOf:tY}=Object,tq=globalThis,tG=tq.trustedTypes,tK=tG?tG.emptyScript:"",tX=tq.reactiveElementPolyfillSupport,tZ=(e,t)=>e,tJ={toAttribute(e,t){switch(t){case Boolean:e=e?tK:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=null!==e;break;case Number:s=null===e?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch(e){s=null}}return s}},tQ=(e,t)=>!tU(e,t),t0={attribute:!0,type:String,converter:tJ,reflect:!1,hasChanged:tQ};Symbol.metadata??=Symbol("metadata"),tq.litPropertyMetadata??=new WeakMap;var t1=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=t0){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(e,s,t);void 0!==i&&tB(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){let{get:i,set:r}=tI(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return i?.call(this)},set(t){let o=i?.call(this);r.call(this,t),this.requestUpdate(e,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??t0}static _$Ei(){if(this.hasOwnProperty(tZ("elementProperties")))return;let e=tY(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(tZ("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(tZ("properties"))){let e=this.properties;for(let t of[...tV(e),...tj(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,s]of t)this.elementProperties.set(e,s)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let s=this._$Eu(e,t);void 0!==s&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let s of new Set(e.flat(1/0).reverse()))t.unshift(tH(s));else void 0!==e&&t.push(tH(e));return t}static _$Eu(e,t){let s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return tz(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EC(e,t){let s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(void 0!==i&&!0===s.reflect){let r=(void 0!==s.converter?.toAttribute?s.converter:tJ).toAttribute(t,s.type);this._$Em=e,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(e,t){let s=this.constructor,i=s._$Eh.get(e);if(void 0!==i&&this._$Em!==i){let e=s.getPropertyOptions(i),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:tJ;this._$Em=i,this[i]=r.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,s){if(void 0!==e){if(!((s??=this.constructor.getPropertyOptions(e)).hasChanged??tQ)(this[e],t))return;this.P(e,t,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,s){this._$AL.has(e)||this._$AL.set(e,t),!0===s.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,s]of e)!0!==s.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],s)}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(e){}firstUpdated(e){}};t1.elementStyles=[],t1.shadowRootOptions={mode:"open"},t1[tZ("elementProperties")]=new Map,t1[tZ("finalized")]=new Map,tX?.({ReactiveElement:t1}),(tq.reactiveElementVersions??=[]).push("2.0.4");var t2=globalThis,t5=t2.trustedTypes,t3=t5?t5.createPolicy("lit-html",{createHTML:e=>e}):void 0,t6="$lit$",t7=`lit$${Math.random().toFixed(9).slice(2)}$`,t4="?"+t7,t8=`<${t4}>`,t9=document,se=()=>t9.createComment(""),st=e=>null===e||"object"!=typeof e&&"function"!=typeof e,ss=Array.isArray,si=e=>ss(e)||"function"==typeof e?.[Symbol.iterator],sr="[ 	\n\f\r]",so=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,sn=/-->/g,sa=/>/g,sl=RegExp(`>|${sr}(?:([^\\s"'>=/]+)(${sr}*=${sr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),sh=/'/g,sd=/"/g,sc=/^(?:script|style|textarea|title)$/i,sp=e=>(t,...s)=>({_$litType$:e,strings:t,values:s}),su=sp(1),sg=sp(2),sf=Symbol.for("lit-noChange"),sy=Symbol.for("lit-nothing"),sv=new WeakMap,sm=t9.createTreeWalker(t9,129);function sb(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==t3?t3.createHTML(t):t}var s_=(e,t)=>{let s=e.length-1,i=[],r,o=2===t?"<svg>":"",n=so;for(let t=0;t<s;t++){let s=e[t],a,l,h=-1,d=0;for(;d<s.length&&(n.lastIndex=d,null!==(l=n.exec(s)));)d=n.lastIndex,n===so?"!--"===l[1]?n=sn:void 0!==l[1]?n=sa:void 0!==l[2]?(sc.test(l[2])&&(r=RegExp("</"+l[2],"g")),n=sl):void 0!==l[3]&&(n=sl):n===sl?">"===l[0]?(n=r??so,h=-1):void 0===l[1]?h=-2:(h=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?sl:'"'===l[3]?sd:sh):n===sd||n===sh?n=sl:n===sn||n===sa?n=so:(n=sl,r=void 0);let c=n===sl&&e[t+1].startsWith("/>")?" ":"";o+=n===so?s+t8:h>=0?(i.push(a),s.slice(0,h)+t6+s.slice(h)+t7+c):s+t7+(-2===h?t:c)}return[sb(e,o+(e[s]||"<?>")+(2===t?"</svg>":"")),i]},sw=class e{constructor({strings:t,_$litType$:s},i){let r;this.parts=[];let o=0,n=0,a=t.length-1,l=this.parts,[h,d]=s_(t,s);if(this.el=e.createElement(h,i),sm.currentNode=this.el.content,2===s){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=sm.nextNode())&&l.length<a;){if(1===r.nodeType){if(r.hasAttributes())for(let e of r.getAttributeNames())if(e.endsWith(t6)){let t=d[n++],s=r.getAttribute(e).split(t7),i=/([.?@])?(.*)/.exec(t);l.push({type:1,index:o,name:i[2],strings:s,ctor:"."===i[1]?sE:"?"===i[1]?sS:"@"===i[1]?sC:sA}),r.removeAttribute(e)}else e.startsWith(t7)&&(l.push({type:6,index:o}),r.removeAttribute(e));if(sc.test(r.tagName)){let e=r.textContent.split(t7),t=e.length-1;if(t>0){r.textContent=t5?t5.emptyScript:"";for(let s=0;s<t;s++)r.append(e[s],se()),sm.nextNode(),l.push({type:2,index:++o});r.append(e[t],se())}}}else if(8===r.nodeType){if(r.data===t4)l.push({type:2,index:o});else{let e=-1;for(;-1!==(e=r.data.indexOf(t7,e+1));)l.push({type:7,index:o}),e+=t7.length-1}}o++}}static createElement(e,t){let s=t9.createElement("template");return s.innerHTML=e,s}};function s$(e,t,s=e,i){if(t===sf)return t;let r=void 0!==i?s._$Co?.[i]:s._$Cl,o=st(t)?void 0:t._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(e))._$AT(e,s,i),void 0!==i?(s._$Co??=[])[i]=r:s._$Cl=r),void 0!==r&&(t=s$(e,r._$AS(e,t.values),r,i)),t}var sx=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:s}=this._$AD,i=(e?.creationScope??t9).importNode(t,!0);sm.currentNode=i;let r=sm.nextNode(),o=0,n=0,a=s[0];for(;void 0!==a;){if(o===a.index){let t;2===a.type?t=new sk(r,r.nextSibling,this,e):1===a.type?t=new a.ctor(r,a.name,a.strings,this,e):6===a.type&&(t=new sT(r,this,e)),this._$AV.push(t),a=s[++n]}o!==a?.index&&(r=sm.nextNode(),o++)}return sm.currentNode=t9,i}p(e){let t=0;for(let s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}},sk=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=sy,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){st(e=s$(this,e,t))?e===sy||null==e||""===e?(this._$AH!==sy&&this._$AR(),this._$AH=sy):e!==this._$AH&&e!==sf&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):si(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==sy&&st(this._$AH)?this._$AA.nextSibling.data=e:this.T(t9.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:s}=e,i="number"==typeof s?this._$AC(e):(void 0===s.el&&(s.el=sw.createElement(sb(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(t);else{let e=new sx(i,this),s=e.u(this.options);e.p(t),this.T(s),this._$AH=e}}_$AC(e){let t=sv.get(e.strings);return void 0===t&&sv.set(e.strings,t=new sw(e)),t}k(t){ss(this._$AH)||(this._$AH=[],this._$AR());let s=this._$AH,i,r=0;for(let o of t)r===s.length?s.push(i=new e(this.S(se()),this.S(se()),this,this.options)):i=s[r],i._$AI(o),r++;r<s.length&&(this._$AR(i&&i._$AB.nextSibling,r),s.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}},sA=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,r){this.type=1,this._$AH=sy,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=sy}_$AI(e,t=this,s,i){let r=this.strings,o=!1;if(void 0===r)(o=!st(e=s$(this,e,t,0))||e!==this._$AH&&e!==sf)&&(this._$AH=e);else{let i,n;let a=e;for(e=r[0],i=0;i<r.length-1;i++)(n=s$(this,a[s+i],t,i))===sf&&(n=this._$AH[i]),o||=!st(n)||n!==this._$AH[i],n===sy?e=sy:e!==sy&&(e+=(n??"")+r[i+1]),this._$AH[i]=n}o&&!i&&this.j(e)}j(e){e===sy?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},sE=class extends sA{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===sy?void 0:e}},sS=class extends sA{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==sy)}},sC=class extends sA{constructor(e,t,s,i,r){super(e,t,s,i,r),this.type=5}_$AI(e,t=this){if((e=s$(this,e,t,0)??sy)===sf)return;let s=this._$AH,i=e===sy&&s!==sy||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==sy&&(s===sy||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},sT=class{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){s$(this,e)}},sM=t2.litHtmlPolyfillSupport;sM?.(sw,sk),(t2.litHtmlVersions??=[]).push("3.1.3");var sF=globalThis,sD=sF.ShadowRoot&&(void 0===sF.ShadyCSS||sF.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,sL=Symbol(),sW=new WeakMap,sP=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==sL)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(sD&&void 0===e){let s=void 0!==t&&1===t.length;s&&(e=sW.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&sW.set(t,e))}return e}toString(){return this.cssText}},sN=e=>new sP("string"==typeof e?e:e+"",void 0,sL),sO=(e,...t)=>new sP(1===e.length?e[0]:t.reduce((t,s,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[i+1],e[0]),e,sL),sR=(e,t)=>{if(sD)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let s of t){let t=document.createElement("style"),i=sF.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=s.cssText,e.appendChild(t)}},sz=sD?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let s of e.cssRules)t+=s.cssText;return sN(t)})(e):e,{is:sH,defineProperty:sU,getOwnPropertyDescriptor:sB,getOwnPropertyNames:sI,getOwnPropertySymbols:sV,getPrototypeOf:sj}=Object,sY=globalThis,sq=sY.trustedTypes,sG=sq?sq.emptyScript:"",sK=sY.reactiveElementPolyfillSupport,sX=(e,t)=>e,sZ={toAttribute(e,t){switch(t){case Boolean:e=e?sG:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=null!==e;break;case Number:s=null===e?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch(e){s=null}}return s}},sJ=(e,t)=>!sH(e,t),sQ={attribute:!0,type:String,converter:sZ,reflect:!1,hasChanged:sJ};Symbol.metadata??=Symbol("metadata"),sY.litPropertyMetadata??=new WeakMap;var s0=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=sQ){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(e,s,t);void 0!==i&&sU(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){let{get:i,set:r}=sB(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return i?.call(this)},set(t){let o=i?.call(this);r.call(this,t),this.requestUpdate(e,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??sQ}static _$Ei(){if(this.hasOwnProperty(sX("elementProperties")))return;let e=sj(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(sX("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(sX("properties"))){let e=this.properties;for(let t of[...sI(e),...sV(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,s]of t)this.elementProperties.set(e,s)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let s=this._$Eu(e,t);void 0!==s&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let s of new Set(e.flat(1/0).reverse()))t.unshift(sz(s));else void 0!==e&&t.push(sz(e));return t}static _$Eu(e,t){let s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return sR(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EC(e,t){let s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(void 0!==i&&!0===s.reflect){let r=(void 0!==s.converter?.toAttribute?s.converter:sZ).toAttribute(t,s.type);this._$Em=e,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(e,t){let s=this.constructor,i=s._$Eh.get(e);if(void 0!==i&&this._$Em!==i){let e=s.getPropertyOptions(i),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:sZ;this._$Em=i,this[i]=r.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,s){if(void 0!==e){if(!((s??=this.constructor.getPropertyOptions(e)).hasChanged??sJ)(this[e],t))return;this.P(e,t,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,s){this._$AL.has(e)||this._$AL.set(e,t),!0===s.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,s]of e)!0!==s.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],s)}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(e){}firstUpdated(e){}};s0.elementStyles=[],s0.shadowRootOptions={mode:"open"},s0[sX("elementProperties")]=new Map,s0[sX("finalized")]=new Map,sK?.({ReactiveElement:s0}),(sY.reactiveElementVersions??=[]).push("2.0.4");var s1=globalThis,s2=s1.trustedTypes,s5=s2?s2.createPolicy("lit-html",{createHTML:e=>e}):void 0,s3="$lit$",s6=`lit$${Math.random().toFixed(9).slice(2)}$`,s7="?"+s6,s4=`<${s7}>`,s8=document,s9=()=>s8.createComment(""),ie=e=>null===e||"object"!=typeof e&&"function"!=typeof e,it=Array.isArray,is=e=>it(e)||"function"==typeof e?.[Symbol.iterator],ii="[ 	\n\f\r]",ir=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,io=/-->/g,ia=/>/g,il=RegExp(`>|${ii}(?:([^\\s"'>=/]+)(${ii}*=${ii}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ih=/'/g,id=/"/g,ic=/^(?:script|style|textarea|title)$/i,ip=e=>(t,...s)=>({_$litType$:e,strings:t,values:s}),iu=ip(1);ip(2);var ig=Symbol.for("lit-noChange"),iy=Symbol.for("lit-nothing"),iv=new WeakMap,im=s8.createTreeWalker(s8,129);function ib(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s5?s5.createHTML(t):t}var i_=(e,t)=>{let s=e.length-1,i=[],r,o=2===t?"<svg>":"",n=ir;for(let t=0;t<s;t++){let s=e[t],a,l,h=-1,d=0;for(;d<s.length&&(n.lastIndex=d,null!==(l=n.exec(s)));)d=n.lastIndex,n===ir?"!--"===l[1]?n=io:void 0!==l[1]?n=ia:void 0!==l[2]?(ic.test(l[2])&&(r=RegExp("</"+l[2],"g")),n=il):void 0!==l[3]&&(n=il):n===il?">"===l[0]?(n=r??ir,h=-1):void 0===l[1]?h=-2:(h=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?il:'"'===l[3]?id:ih):n===id||n===ih?n=il:n===io||n===ia?n=ir:(n=il,r=void 0);let c=n===il&&e[t+1].startsWith("/>")?" ":"";o+=n===ir?s+s4:h>=0?(i.push(a),s.slice(0,h)+s3+s.slice(h)+s6+c):s+s6+(-2===h?t:c)}return[ib(e,o+(e[s]||"<?>")+(2===t?"</svg>":"")),i]},iw=class e{constructor({strings:t,_$litType$:s},i){let r;this.parts=[];let o=0,n=0,a=t.length-1,l=this.parts,[h,d]=i_(t,s);if(this.el=e.createElement(h,i),im.currentNode=this.el.content,2===s){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=im.nextNode())&&l.length<a;){if(1===r.nodeType){if(r.hasAttributes())for(let e of r.getAttributeNames())if(e.endsWith(s3)){let t=d[n++],s=r.getAttribute(e).split(s6),i=/([.?@])?(.*)/.exec(t);l.push({type:1,index:o,name:i[2],strings:s,ctor:"."===i[1]?iE:"?"===i[1]?iS:"@"===i[1]?iC:iA}),r.removeAttribute(e)}else e.startsWith(s6)&&(l.push({type:6,index:o}),r.removeAttribute(e));if(ic.test(r.tagName)){let e=r.textContent.split(s6),t=e.length-1;if(t>0){r.textContent=s2?s2.emptyScript:"";for(let s=0;s<t;s++)r.append(e[s],s9()),im.nextNode(),l.push({type:2,index:++o});r.append(e[t],s9())}}}else if(8===r.nodeType){if(r.data===s7)l.push({type:2,index:o});else{let e=-1;for(;-1!==(e=r.data.indexOf(s6,e+1));)l.push({type:7,index:o}),e+=s6.length-1}}o++}}static createElement(e,t){let s=s8.createElement("template");return s.innerHTML=e,s}};function i$(e,t,s=e,i){if(t===ig)return t;let r=void 0!==i?s._$Co?.[i]:s._$Cl,o=ie(t)?void 0:t._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(e))._$AT(e,s,i),void 0!==i?(s._$Co??=[])[i]=r:s._$Cl=r),void 0!==r&&(t=i$(e,r._$AS(e,t.values),r,i)),t}var ix=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:s}=this._$AD,i=(e?.creationScope??s8).importNode(t,!0);im.currentNode=i;let r=im.nextNode(),o=0,n=0,a=s[0];for(;void 0!==a;){if(o===a.index){let t;2===a.type?t=new ik(r,r.nextSibling,this,e):1===a.type?t=new a.ctor(r,a.name,a.strings,this,e):6===a.type&&(t=new iT(r,this,e)),this._$AV.push(t),a=s[++n]}o!==a?.index&&(r=im.nextNode(),o++)}return im.currentNode=s8,i}p(e){let t=0;for(let s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}},ik=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=iy,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){ie(e=i$(this,e,t))?e===iy||null==e||""===e?(this._$AH!==iy&&this._$AR(),this._$AH=iy):e!==this._$AH&&e!==ig&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):is(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==iy&&ie(this._$AH)?this._$AA.nextSibling.data=e:this.T(s8.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:s}=e,i="number"==typeof s?this._$AC(e):(void 0===s.el&&(s.el=iw.createElement(ib(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(t);else{let e=new ix(i,this),s=e.u(this.options);e.p(t),this.T(s),this._$AH=e}}_$AC(e){let t=iv.get(e.strings);return void 0===t&&iv.set(e.strings,t=new iw(e)),t}k(t){it(this._$AH)||(this._$AH=[],this._$AR());let s=this._$AH,i,r=0;for(let o of t)r===s.length?s.push(i=new e(this.S(s9()),this.S(s9()),this,this.options)):i=s[r],i._$AI(o),r++;r<s.length&&(this._$AR(i&&i._$AB.nextSibling,r),s.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}},iA=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,r){this.type=1,this._$AH=iy,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=iy}_$AI(e,t=this,s,i){let r=this.strings,o=!1;if(void 0===r)(o=!ie(e=i$(this,e,t,0))||e!==this._$AH&&e!==ig)&&(this._$AH=e);else{let i,n;let a=e;for(e=r[0],i=0;i<r.length-1;i++)(n=i$(this,a[s+i],t,i))===ig&&(n=this._$AH[i]),o||=!ie(n)||n!==this._$AH[i],n===iy?e=iy:e!==iy&&(e+=(n??"")+r[i+1]),this._$AH[i]=n}o&&!i&&this.j(e)}j(e){e===iy?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},iE=class extends iA{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===iy?void 0:e}},iS=class extends iA{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==iy)}},iC=class extends iA{constructor(e,t,s,i,r){super(e,t,s,i,r),this.type=5}_$AI(e,t=this){if((e=i$(this,e,t,0)??iy)===ig)return;let s=this._$AH,i=e===iy&&s!==iy||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==iy&&(s===iy||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},iT=class{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){i$(this,e)}},iM=s1.litHtmlPolyfillSupport;iM?.(iw,ik),(s1.litHtmlVersions??=[]).push("3.1.3");var iF=(e,t,s)=>{let i=s?.renderBefore??t,r=i._$litPart$;if(void 0===r){let e=s?.renderBefore??null;i._$litPart$=r=new ik(t.insertBefore(s9(),e),e,void 0,s??{})}return r._$AI(e),r},iD=class extends s0{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=iF(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ig}};iD._$litElement$=!0,iD.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:iD});var iL=globalThis.litElementPolyfillSupport;iL?.({LitElement:iD}),(globalThis.litElementVersions??=[]).push("4.0.5");var iW=e=>(t,s)=>{void 0!==s?s.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},iP={attribute:!0,type:String,converter:tJ,reflect:!1,hasChanged:tQ},iN=(e=iP,t,s)=>{let{kind:i,metadata:r}=s,o=globalThis.litPropertyMetadata.get(r);if(void 0===o&&globalThis.litPropertyMetadata.set(r,o=new Map),o.set(s.name,e),"accessor"===i){let{name:i}=s;return{set(s){let r=t.get.call(this);t.set.call(this,s),this.requestUpdate(i,r,e)},init(t){return void 0!==t&&this.P(i,void 0,e),t}}}if("setter"===i){let{name:i}=s;return function(s){let r=this[i];t.call(this,s),this.requestUpdate(i,r,e)}}throw Error("Unsupported decorator location: "+i)};function iO(e){return(t,s)=>"object"==typeof s?iN(e,t,s):((e,t,s)=>{let i=t.hasOwnProperty(s);return t.constructor.createProperty(s,i?{...e,wrapped:!0}:e),i?Object.getOwnPropertyDescriptor(t,s):void 0})(e,t,s)}function iR(e){return iO({...e,state:!0,attribute:!1})}var iz=(e,t,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,s),s);function iH(e,t){return(s,i,r)=>{let o=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}="object"==typeof i?s:r??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return iz(s,i,{get(){let s=e.call(this);return void 0===s&&(null!==(s=o(this))||this.hasUpdated)&&t.call(this,s),s}})}return iz(s,i,{get(){return o(this)}})}}function iU(e){return(t,s)=>iz(t,s,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(e)??null}})}function iB(e,t,s){return e?t(e):s?.(e)}var iI={ATTRIBUTE:1,CHILD:2,ELEMENT:6},iV=e=>(...t)=>({_$litDirective$:e,values:t}),ij=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},iY=iV(class extends ij{constructor(e){if(super(e),e.type!==iI.ATTRIBUTE||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){for(let s in this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[s]&&!this.nt?.has(s)&&this.st.add(s);return this.render(t)}let s=e.element.classList;for(let e of this.st)e in t||(s.remove(e),this.st.delete(e));for(let e in t){let i=!!t[e];i===this.st.has(e)||this.nt?.has(e)||(i?(s.add(e),this.st.add(e)):(s.remove(e),this.st.delete(e)))}return sf}}),iq=class{constructor(e){this.#e=!iG(),this.#t=[],this.#s=new Map,this.#i=new Map,this.host=e,this.host.addController(this)}#e;#t;#s;#i;hostConnected(){this.host.shadowRoot&&0===this.#t.length&&(this.#t=[...this.host.shadowRoot.adoptedStyleSheets||[]])}inject(e,t){let s=Array.isArray(t)?t.map(e=>e.toString()).join(""):t.toString();this.#e?this.#r(e,s):this.#o(e,s)}clearAll(){this.#e?(this.#i.forEach(e=>e.remove()),this.host.shadowRoot?.querySelectorAll("style").forEach(e=>e.innerHTML=""),this.#i.clear()):this.host.shadowRoot&&(this.host.shadowRoot.adoptedStyleSheets=[],this.#s.clear(),this.#t=[])}#r(e,t){let s=this.#i.get(e);s||(s=document.createElement("style"),this.#i.set(e,s)),s.textContent=t,this.host.shadowRoot?.appendChild(s)}#o(e,t){if(!this.host.shadowRoot)return;let s=this.#s.get(e);s||(s=new CSSStyleSheet,this.#s.set(e,s)),s.replaceSync(t),this.host.shadowRoot.adoptedStyleSheets=[...this.#t,...Array.from(this.#s.values())]}};function iG(){try{return new CSSStyleSheet,!0}catch{return!1}}var iK="-gdsvsuffix",iX=new Map,iZ=e=>{if(globalThis.GDS_DISABLE_VERSIONED_ELEMENTS)return iX.set(e,e),iW(e);let t=e+iK;return(iX.set(e,t),customElements.get(t))?e=>!1:iW(t)},iJ=new WeakMap,iQ=e=>e.map(e=>{for(let[t,s]of iX.entries())e=e.replace(RegExp(`${t}(?![-a-z])`,"mg"),s);return e}),i0=function(e){return(t,...s)=>{if(globalThis.GDS_DISABLE_VERSIONED_ELEMENTS)return e(t,...s);let[i,...r]=function(e,...t){let s=iJ.get(e);return s||((s=iQ(e)).raw=iQ(e.raw),iJ.set(e,s)),[s,...t]}(t,...s);return e(i,...r)}}(iu);!function(e){!function(t){var s="object"==typeof global?global:"object"==typeof self?self:"object"==typeof this?this:Function("return this;")(),i=r(e);function r(e,t){return function(s,i){"function"!=typeof e[s]&&Object.defineProperty(e,s,{configurable:!0,writable:!0,value:i}),t&&t(s,i)}}void 0===s.Reflect?s.Reflect=e:i=r(s.Reflect,i),t(i)}(function(e){var t=Object.prototype.hasOwnProperty,s="function"==typeof Symbol,i=s&&void 0!==Symbol.toPrimitive?Symbol.toPrimitive:"@@toPrimitive",r=s&&void 0!==Symbol.iterator?Symbol.iterator:"@@iterator",o="function"==typeof Object.create,n=({__proto__:[]})instanceof Array,a=!o&&!n,l={create:o?function(){return T(Object.create(null))}:n?function(){return T({__proto__:null})}:function(){return T({})},has:a?function(e,s){return t.call(e,s)}:function(e,t){return t in e},get:a?function(e,s){return t.call(e,s)?e[s]:void 0}:function(e,t){return e[t]}},h=Object.getPrototypeOf(Function),d="object"==typeof process&&process.env&&"true"===process.env.REFLECT_METADATA_USE_MAP_POLYFILL,c=d||"function"!=typeof Map||"function"!=typeof Map.prototype.entries?function(){var e={},t=[],s=function(){function e(e,t,s){this._index=0,this._keys=e,this._values=t,this._selector=s}return e.prototype["@@iterator"]=function(){return this},e.prototype[r]=function(){return this},e.prototype.next=function(){var e=this._index;if(e>=0&&e<this._keys.length){var s=this._selector(this._keys[e],this._values[e]);return e+1>=this._keys.length?(this._index=-1,this._keys=t,this._values=t):this._index++,{value:s,done:!1}}return{value:void 0,done:!0}},e.prototype.throw=function(e){throw this._index>=0&&(this._index=-1,this._keys=t,this._values=t),e},e.prototype.return=function(e){return this._index>=0&&(this._index=-1,this._keys=t,this._values=t),{value:e,done:!0}},e}();return function(){function t(){this._keys=[],this._values=[],this._cacheKey=e,this._cacheIndex=-2}return Object.defineProperty(t.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),t.prototype.has=function(e){return this._find(e,!1)>=0},t.prototype.get=function(e){var t=this._find(e,!1);return t>=0?this._values[t]:void 0},t.prototype.set=function(e,t){var s=this._find(e,!0);return this._values[s]=t,this},t.prototype.delete=function(t){var s=this._find(t,!1);if(s>=0){for(var i=this._keys.length,r=s+1;r<i;r++)this._keys[r-1]=this._keys[r],this._values[r-1]=this._values[r];return this._keys.length--,this._values.length--,t===this._cacheKey&&(this._cacheKey=e,this._cacheIndex=-2),!0}return!1},t.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=e,this._cacheIndex=-2},t.prototype.keys=function(){return new s(this._keys,this._values,i)},t.prototype.values=function(){return new s(this._keys,this._values,o)},t.prototype.entries=function(){return new s(this._keys,this._values,n)},t.prototype["@@iterator"]=function(){return this.entries()},t.prototype[r]=function(){return this.entries()},t.prototype._find=function(e,t){return this._cacheKey!==e&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=e)),this._cacheIndex<0&&t&&(this._cacheIndex=this._keys.length,this._keys.push(e),this._values.push(void 0)),this._cacheIndex},t}();function i(e,t){return e}function o(e,t){return t}function n(e,t){return[e,t]}}():Map,p=d||"function"!=typeof Set||"function"!=typeof Set.prototype.entries?function(){function e(){this._map=new c}return Object.defineProperty(e.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),e.prototype.has=function(e){return this._map.has(e)},e.prototype.add=function(e){return this._map.set(e,e),this},e.prototype.delete=function(e){return this._map.delete(e)},e.prototype.clear=function(){this._map.clear()},e.prototype.keys=function(){return this._map.keys()},e.prototype.values=function(){return this._map.values()},e.prototype.entries=function(){return this._map.entries()},e.prototype["@@iterator"]=function(){return this.keys()},e.prototype[r]=function(){return this.keys()},e}():Set,u=new(d||"function"!=typeof WeakMap?function(){var e=l.create(),s=i();return function(){function e(){this._key=i()}return e.prototype.has=function(e){var t=r(e,!1);return void 0!==t&&l.has(t,this._key)},e.prototype.get=function(e){var t=r(e,!1);return void 0!==t?l.get(t,this._key):void 0},e.prototype.set=function(e,t){return r(e,!0)[this._key]=t,this},e.prototype.delete=function(e){var t=r(e,!1);return void 0!==t&&delete t[this._key]},e.prototype.clear=function(){this._key=i()},e}();function i(){var t;do t="@@WeakMap@@"+function(){var e="function"==typeof Uint8Array?"undefined"!=typeof crypto?crypto.getRandomValues(new Uint8Array(16)):"undefined"!=typeof msCrypto?msCrypto.getRandomValues(new Uint8Array(16)):o(new Uint8Array(16),16):o(Array(16),16);e[6]=79&e[6]|64,e[8]=191&e[8]|128;for(var t="",s=0;s<16;++s){var i=e[s];(4===s||6===s||8===s)&&(t+="-"),i<16&&(t+="0"),t+=i.toString(16).toLowerCase()}return t}();while(l.has(e,t));return e[t]=!0,t}function r(e,i){if(!t.call(e,s)){if(!i)return;Object.defineProperty(e,s,{value:l.create()})}return e[s]}function o(e,t){for(var s=0;s<t;++s)e[s]=255*Math.random()|0;return e}}():WeakMap);function g(e,t,s){var i=u.get(e);if(_(i)){if(!s)return;i=new c,u.set(e,i)}var r=i.get(t);if(_(r)){if(!s)return;r=new c,i.set(t,r)}return r}function f(e,t,s){var i=g(t,s,!1);return!_(i)&&!!i.has(e)}function y(e,t,s){var i=g(t,s,!1);if(!_(i))return i.get(e)}function v(e,t,s,i){g(s,i,!0).set(e,t)}function m(e,t){var s=[],i=g(e,t,!1);if(_(i))return s;for(var o=function(e){var t=S(e,r);if(!A(t))throw TypeError();var s=t.call(e);if(!$(s))throw TypeError();return s}(i.keys()),n=0;;){var a=function(e){var t=e.next();return!t.done&&t}(o);if(!a)return s.length=n,s;var l=a.value;try{s[n]=l}catch(e){try{!function(e){var t=e.return;t&&t.call(e)}(o)}finally{throw e}}n++}}function b(e){if(null===e)return 1;switch(typeof e){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return null===e?1:6;default:return 6}}function _(e){return void 0===e}function w(e){return null===e}function $(e){return"object"==typeof e?null!==e:"function"==typeof e}function x(e){var t=function(e,t){switch(b(e)){case 0:case 1:case 2:case 3:case 4:case 5:return e}var s=3===t?"string":5===t?"number":"default",r=S(e,i);if(void 0!==r){var o=r.call(e,s);if($(o))throw TypeError();return o}return function(e,t){if("string"===t){var s=e.toString;if(A(s)){var i=s.call(e);if(!$(i))return i}var r=e.valueOf;if(A(r)){var i=r.call(e);if(!$(i))return i}}else{var r=e.valueOf;if(A(r)){var i=r.call(e);if(!$(i))return i}var o=e.toString;if(A(o)){var i=o.call(e);if(!$(i))return i}}throw TypeError()}(e,"default"===s?"number":s)}(e,3);return"symbol"==typeof t?t:""+t}function k(e){return Array.isArray?Array.isArray(e):e instanceof Object?e instanceof Array:"[object Array]"===Object.prototype.toString.call(e)}function A(e){return"function"==typeof e}function E(e){return"function"==typeof e}function S(e,t){var s=e[t];if(null!=s){if(!A(s))throw TypeError();return s}}function C(e){var t=Object.getPrototypeOf(e);if("function"!=typeof e||e===h||t!==h)return t;var s=e.prototype,i=s&&Object.getPrototypeOf(s);if(null==i||i===Object.prototype)return t;var r=i.constructor;return"function"!=typeof r||r===e?t:r}function T(e){return e.__=void 0,delete e.__,e}e("decorate",function(e,t,s,i){if(_(s)){if(!k(e)||!E(t))throw TypeError();return function(e,t){for(var s=e.length-1;s>=0;--s){var i=(0,e[s])(t);if(!_(i)&&!w(i)){if(!E(i))throw TypeError();t=i}}return t}(e,t)}if(!k(e)||!$(t)||!$(i)&&!_(i)&&!w(i))throw TypeError();return w(i)&&(i=void 0),function(e,t,s,i){for(var r=e.length-1;r>=0;--r){var o=(0,e[r])(t,s,i);if(!_(o)&&!w(o)){if(!$(o))throw TypeError();i=o}}return i}(e,t,s=x(s),i)}),e("metadata",function(e,t){return function(s,i){if(!$(s)||!_(i)&&!function(e){switch(b(e)){case 3:case 4:return!0;default:return!1}}(i))throw TypeError();v(e,t,s,i)}}),e("defineMetadata",function(e,t,s,i){if(!$(s))throw TypeError();return _(i)||(i=x(i)),v(e,t,s,i)}),e("hasMetadata",function(e,t,s){if(!$(t))throw TypeError();return _(s)||(s=x(s)),function e(t,s,i){if(f(t,s,i))return!0;var r=C(s);return!w(r)&&e(t,r,i)}(e,t,s)}),e("hasOwnMetadata",function(e,t,s){if(!$(t))throw TypeError();return _(s)||(s=x(s)),f(e,t,s)}),e("getMetadata",function(e,t,s){if(!$(t))throw TypeError();return _(s)||(s=x(s)),function e(t,s,i){if(f(t,s,i))return y(t,s,i);var r=C(s);if(!w(r))return e(t,r,i)}(e,t,s)}),e("getOwnMetadata",function(e,t,s){if(!$(t))throw TypeError();return _(s)||(s=x(s)),y(e,t,s)}),e("getMetadataKeys",function(e,t){if(!$(e))throw TypeError();return _(t)||(t=x(t)),function e(t,s){var i=m(t,s),r=C(t);if(null===r)return i;var o=e(r,s);if(o.length<=0)return i;if(i.length<=0)return o;for(var n=new p,a=[],l=0;l<i.length;l++){var h=i[l],d=n.has(h);d||(n.add(h),a.push(h))}for(var c=0;c<o.length;c++){var h=o[c],d=n.has(h);d||(n.add(h),a.push(h))}return a}(e,t)}),e("getOwnMetadataKeys",function(e,t){if(!$(e))throw TypeError();return _(t)||(t=x(t)),m(e,t)}),e("deleteMetadata",function(e,t,s){if(!$(t))throw TypeError();_(s)||(s=x(s));var i=g(t,s,!1);if(_(i)||!i.delete(e))return!1;if(i.size>0)return!0;var r=u.get(t);return r.delete(s),r.size>0||(u.delete(t),!0)})})}(t||(t={}));var i1=class extends iD{constructor(){super(),this.gdsElementName="",this._isUsingTransitionalStyles=!1,this._dynamicStylesController=new iq(this)}connectedCallback(){var e;super.connectedCallback(),this.gdsElementName=(e=this.tagName.toLowerCase(),[...iX.entries()].find(([,t])=>t===e)?.[0]||this.gdsElementName),this.setAttribute("gds-element",this.gdsElementName)}};tE([iR()],i1.prototype,"_isUsingTransitionalStyles",2);var i2=class e{static get instance(){return globalThis.__gdsTransitionalStyles?.[iK]||(globalThis.__gdsTransitionalStyles={...globalThis.__gdsTransitionalStyles,[iK]:new e}),globalThis.__gdsTransitionalStyles[iK]}#n=new Map;#a=new Map;#e=!iG();apply(e,t){if(!e.shadowRoot)return;let s=this.#n.get(t);s&&(this.#a.set(t,e),this.applyToElement(t,s))}applyToElement(e,t){let s=this.#a.get(e);s&&s.shadowRoot&&(s._dynamicStylesController.clearAll(),s._dynamicStylesController.inject("t-styles",sN(t)),s._isUsingTransitionalStyles=!0)}register(e,t){let s=t;this.#e&&(s=`@layer reset {
        *:not(style, [gds-element]) {
          all: revert;
        }
      }
      ${t}`),this.#n.set(e,s),this.applyToElement(e,s)}},i5=sO`
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
`;function i3(e,t){let s={waitUntilFirstUpdate:!1,...t};return(t,i,r)=>{let{update:o}=t,n=Array.isArray(e)?e:[e];t.update=function(e){n.forEach(t=>{if(e.has(t)){let i=e.get(t),o=this[t];i!==o&&(!s.waitUntilFirstUpdate||this.hasUpdated)&&r.value?.call(this,i,o)}}),o.call(this,e)}}}var i6=e=>{class t extends e{constructor(){super(...arguments),this.onblur=e=>{this.setAttribute("tabindex","-1"),this.dispatchEvent(new FocusEvent("gds-blur",{bubbles:!0,composed:!0,relatedTarget:e.relatedTarget}))},this.onfocus=e=>{this.dispatchEvent(new FocusEvent("gds-focus",{bubbles:!0,composed:!0,relatedTarget:e.relatedTarget}))}}focus(e){this.setAttribute("tabindex","0"),super.focus(e)}}return t},i7=class extends i6(i1){constructor(){super(),tT(this,i),tT(this,s,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",tD(this,i,r)),this.addEventListener("keydown",e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),tD(this,i,r).call(this,e))})}get hidden(){return tC(this,s)}set hidden(e){this.isPlaceholder||(tM(this,s,"true"===e||!0===e),this.setAttribute("aria-hidden",e.toString()))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.isPlaceholder&&(tM(this,s,!0),this.setAttribute("aria-hidden","true")),this.updateComplete.then(()=>i2.instance.apply(this,"gds-option"))}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?(tM(this,s,!0),this.setAttribute("aria-hidden","true")):(tM(this,s,!1),this.setAttribute("aria-hidden","false"))}render(){let e=this.parentElement?.multiple,t=iu` <span
      class="checkbox ${iY({checked:this.selected})}"
    ></span>`;return e||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),iu`<div>${iB(e,()=>t)} <slot></slot></div>`}};s=new WeakMap,i=new WeakSet,r=function(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}}))},i7.styles=i5,tE([iO()],i7.prototype,"value",2),tE([iO({attribute:"aria-hidden",reflect:!0})],i7.prototype,"hidden",1),tE([iO({attribute:"aria-selected",reflect:!0})],i7.prototype,"selected",2),tE([iO({type:Boolean,reflect:!0})],i7.prototype,"isPlaceholder",2),tE([i3("isplaceholder")],i7.prototype,"_handlePlaceholderStatusChange",1),i7=tE([iZ("gds-option")],i7);var i4=sO`
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
`,i8=class extends i1{connectedCallback(){super.connectedCallback(),this.setAttribute("inert","true"),this.updateComplete.then(()=>i2.instance.apply(this,"gds-menu-heading"))}render(){return iu`<slot></slot>`}};i8.styles=i4,i8=tE([iZ("gds-menu-heading")],i8);var i9=class extends i6(i1){constructor(){super(...arguments),tT(this,o,()=>{this.dispatchEvent(new CustomEvent("gds-menu-item-click",{bubbles:!0,composed:!0}))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem"),this.addEventListener("keydown",e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),this.click())}),this.addEventListener("click",tC(this,o)),i2.instance.apply(this,"gds-option")}render(){return i0`<div><slot></slot></div>`}};o=new WeakMap,i9.styles=[i5],i9=tE([iZ("gds-menu-item")],i9);var re=Symbol.for(""),rt=e=>{if(e?.r===re)return e?._$litStatic$},rs=(e,...t)=>({_$litStatic$:t.reduce((t,s,i)=>t+(e=>{if(void 0!==e._$litStatic$)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(s)+e[i+1],e[0]),r:re}),ri=new Map,rr=e=>(t,...s)=>{let i,r;let o=s.length,n=[],a=[],l,h=0,d=!1;for(;h<o;){for(l=t[h];h<o&&void 0!==(i=rt(r=s[h]));)l+=i+t[++h],d=!0;h!==o&&a.push(r),n.push(l),h++}if(h===o&&n.push(t[o]),d){let e=n.join("$$lit$$");void 0===(t=ri.get(e))&&(n.raw=n,ri.set(e,t=n)),s=a}return e(t,...s)},ro=rr(su);rr(sg);var rn=e=>e??sy;function ra(e){e.updateComplete.then(()=>{let t=e.shadowRoot?.querySelectorAll("slot[gds-allow]");if(!t)return;for(let t of Array.from(e.childNodes))t.nodeType===Node.TEXT_NODE&&t.textContent?.trim()===""&&t.parentNode?.removeChild(t);let s=e=>{let t=[...e.getAttribute("gds-allow")?.split(" ")||[],"slot"];for(let s of Array.from(e.assignedNodes()))t.includes(s.nodeName.toLowerCase())||s.parentNode?.removeChild(s)};t.forEach(e=>{s(e),e.addEventListener("slotchange",()=>s(e))})})}var rl=iV(class extends ij{constructor(e){if(super(e),e.type!==iI.ELEMENT)throw Error("The `forwardAttributes` directive must be used in element bindings")}render(e){return sy}update(e,[t]){let s=e.element;Array.from((e.options?.host).attributes).forEach(e=>{t(e)&&s.setAttribute(e.name.replace("gds-",""),e.value)})}}),rh=`:host {
  --gds-ripple-motion-name: ripple;
  --gds-ripple-motion: var(--gds-ripple-motion-name)
    var(--gds-sys-motion-duration) var(--gds-sys-motion-timing-function)
    var(--gds-sys-motion-delay) var(--gds-sys-motion-iteration-count)
    var(--gds-sys-motion-direction) var(--gds-sys-motion-fill-mode)
    var(--gds-sys-motion-play-state);
  border-radius: var(--gds-space-max);
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
  border-radius: var(--gds-space-max);
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
}`,rd=`/**
 * Do not edit directly
 * Generated on Tue, 02 Jul 2024 13:39:56 GMT
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
`,rc=`/**
 * Do not edit directly
 * Generated on Tue, 02 Jul 2024 13:39:56 GMT
 */

:host {
  --gds-space-max: 999px;
  --gds-space-8xl: 120px;
  --gds-space-7xl: 112px;
  --gds-space-6xl: 96px;
  --gds-space-5xl: 80px;
  --gds-space-4xl: 64px;
  --gds-space-3xl: 48px;
  --gds-space-2xl: 40px;
  --gds-space-xl: 32px;
  --gds-space-l: 24px;
  --gds-space-m: 16px;
  --gds-space-s: 12px;
  --gds-space-xs: 8px;
  --gds-space-2xs: 4px;
  --gds-space-3xs: 2px;
  --gds-space-4xs: 1px;
  --gds-space-0: 0px;
}
`,rp=`/**
 * Do not edit directly
 * Generated on Tue, 02 Jul 2024 13:39:56 GMT
 */

:host {
  --gds-text-weight-bold: 700;
  --gds-text-weight-medium: 500;
  --gds-text-weight-book: 450;
  --gds-text-weight-regular: 400;
  --gds-text-weight-light: 300;
  --gds-text-size-label-overline: 14px;
  --gds-text-size-label-input-medium: 14px;
  --gds-text-size-label-input-large: 16px;
  --gds-text-size-label-information-medium: 14px;
  --gds-text-size-label-information-large: 16px;
  --gds-text-size-label-small: 12px;
  --gds-text-size-label-medium: 14px;
  --gds-text-size-label-large: 16px;
  --gds-text-size-body-small: 12px;
  --gds-text-size-body-medium: 14px;
  --gds-text-size-body-large: 16px;
  --gds-text-size-title-small: 14px;
  --gds-text-size-title-medium: 16px;
  --gds-text-size-title-large: 22px;
  --gds-text-size-headline-small: 24px;
  --gds-text-size-headline-medium: 28px;
  --gds-text-size-headline-large: 32px;
  --gds-text-size-display-small: 40px;
  --gds-text-size-display-medium: 64px;
  --gds-text-size-display-large: 82px;
  --gds-text-line-height-label-overline: 18px;
  --gds-text-line-height-label-input-medium: 20px;
  --gds-text-line-height-label-input-large: 20px;
  --gds-text-line-height-label-information-medium: 20px;
  --gds-text-line-height-label-information-large: 20px;
  --gds-text-line-height-label-small: 16px;
  --gds-text-line-height-label-medium: 20px;
  --gds-text-line-height-label-large: 20px;
  --gds-text-line-height-body-small: 16px;
  --gds-text-line-height-body-medium: 20px;
  --gds-text-line-height-body-large: 20px;
  --gds-text-line-height-title-small: 20px;
  --gds-text-line-height-title-medium: 24px;
  --gds-text-line-height-title-large: 28px;
  --gds-text-line-height-headline-small: 30px;
  --gds-text-line-height-headline-medium: 36px;
  --gds-text-line-height-headline-large: 40px;
  --gds-text-line-height-display-small: 52px;
  --gds-text-line-height-display-medium: 80px;
  --gds-text-line-height-display-large: 98px;
}
`,ru=`/**
 * Do not edit directly
 * Generated on Tue, 02 Jul 2024 13:39:56 GMT
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
`,rg=[sN(`/**
 * Do not edit directly
 * Generated on Tue, 02 Jul 2024 13:39:56 GMT
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
`),sN(rd),sN(rc),sN(rp),sN(ru)],rf=class extends iD{constructor(){super(...arguments),this.onmousedown=e=>{let t=e.target.getBoundingClientRect(),s=this._rippleEl;s&&(s.classList.remove("gds-ripple-effect"),this.style.setProperty("--gds-ripple-top",`${e.clientY-t.top}px`),this.style.setProperty("--gds-ripple-left",`${e.clientX-t.left}px`),setTimeout(()=>{s.classList.add("gds-ripple-effect")},20))}}render(){return iu`<div></div>`}};rf.styles=[rg,sN(rh)],tE([iH("div")],rf.prototype,"_rippleEl",2),rf=tE([iZ("gds-ripple")],rf);var ry=`@layer tokens, a11y, core, ranks, sizes, variants, disabled;

@layer tokens {
  :host {
    --_gap: var(--gds-space-m);

    --_transition: var(--gds-sys-transition);

    --_padding-inline: var(--gds-space-l);
    --_padding-block: var(--gds-space-m);

    --_border-radius: var(--gds-space-max);
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
    --_padding-inline: var(--gds-space-l);
    --_padding-block: var(--gds-space-s);
    --_size: 2rem;
    font-size: 0.875rem;
  }

  :host([size='medium']) .button {
    --_padding-inline: var(--gds-space-l);
    --_padding-block: var(--gds-space-m);
    --_size: 2.5rem;
  }

  :host([size='large']) .button {
    --_padding-inline: var(--gds-space-xl);
    --_padding-block: var(--gds-space-m);
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
`,rv=new WeakMap,rm=class extends i1{constructor(){super(),this.invalid=!1,this.name="",this._handleFormReset=()=>{this.value=void 0};try{this.#l=this.attachInternals()}catch(e){this.#l={form:this.closest("form"),setFormValue:e=>{this.value=e},setValidity:(e,t)=>{this.invalid=e.customError},validationMessage:"",validity:{badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},willValidate:!0,checkValidity:()=>!0,reportValidity:()=>!0}}}#l;static{this.formAssociated=!0}get form(){return this.#l.form}get validity(){return this.#l.validity}get validationMessage(){return this.#l.validationMessage}get willValidate(){return this.#l.willValidate}checkValidity(){return this.#l.checkValidity()}reportValidity(){return this.#l.reportValidity()}connectedCallback(){super.connectedCallback(),this.#l.form?.addEventListener("reset",this._handleFormReset)}disconnectedCallback(){super.disconnectedCallback(),this.#l.form?.removeEventListener("reset",this._handleFormReset)}__handleValidityChange(){this.#l.setValidity({badInput:!1,customError:this.invalid,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!this.invalid},this.validationMessage||"Error message")}__handleValueChange(){this.#l.setFormValue(this.value)}};tE([iO({type:Boolean,reflect:!0,attribute:"aria-invalid",converter:{fromAttribute:Boolean,toAttribute:e=>e?.toString()}})],rm.prototype,"invalid",2),tE([iO()],rm.prototype,"value",2),tE([iO({reflect:!0})],rm.prototype,"name",2),tE([i3("invalid")],rm.prototype,"__handleValidityChange",1),tE([i3("value")],rm.prototype,"__handleValueChange",1);var rb=(e,...t)=>{let s=rv.get(e);return s||((s=e.map(e=>e.replace(/\n[\s]+</gm,"<"))).raw=e.raw,rv.set(e,s)),i0(s,...t)},r_=class extends rm{constructor(){super(),tT(this,a),tT(this,h),this.disabled=!1,this.rank="primary",this.variant="neutral",this.size="medium",this.label="",this.href="",tT(this,n,!1),tT(this,c,()=>{let e=this._mainSlot?.assignedNodes()??[];tM(this,n,1===e.length&&e.some(e=>e.nodeName.toLowerCase().startsWith("gds-icon"))),this.requestUpdate()}),tT(this,p,e=>{this.dispatchEvent(new CustomEvent("gds-click",{bubbles:!0,composed:!0,detail:e})),this.form&&!tC(this,a,l)&&("submit"===this.type?this.form.requestSubmit():"reset"===this.type&&this.form.reset())}),ra(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),i2.instance.apply(this,"gds-button")}render(){let e={button:!0,circle:tC(this,n),icon:tC(this,n),small:"small"===this.size,large:"large"===this.size,positive:"positive"===this.variant,negative:"negative"===this.variant,primary:"primary"===this.rank,secondary:"secondary"===this.rank,tertiary:"tertiary"===this.rank},t=tC(this,a,l)?rs`a`:rs`button`;return ro`
      <${t}
        class=${iY(e)}
        type="${rn(tC(this,a,l)?void 0:this.type)}"
        ?disabled="${this.disabled}"
        aria-label=${this.label||iy}
        href=${rn(tC(this,a,l)?this.href:void 0)}
        target=${rn(tC(this,a,l)?this.target:void 0)}
        rel=${rn(tC(this,a,l)?this.rel||tC(this,h,d):void 0)}
        download=${rn(tC(this,a,l)?this.download:void 0)}
        part="_button"
        @click="${tC(this,p)}"
        ${rl(e=>e.name.startsWith("gds-aria")||"gds-role"===e.name)}
      >
        <slot name="lead"></slot>
        <slot @slotchange=${tC(this,c)}></slot>
        <slot name="trail"></slot>
        ${iB(!this._isUsingTransitionalStyles,()=>rb`<gds-ripple></gds-ripple>`)}
      </${t}>
    `}};n=new WeakMap,a=new WeakSet,l=function(){return this.href.length>0},h=new WeakSet,d=function(){return"_blank"===this.target?"noreferrer noopener":void 0},c=new WeakMap,p=new WeakMap,r_.styles=[rg,sN(ry)],r_.shadowRootOptions={mode:"open",delegatesFocus:!0},tE([iO({type:Boolean,reflect:!0})],r_.prototype,"disabled",2),tE([iO({reflect:!0})],r_.prototype,"type",2),tE([iO({reflect:!0})],r_.prototype,"rank",2),tE([iO({reflect:!0})],r_.prototype,"variant",2),tE([iO({reflect:!0})],r_.prototype,"size",2),tE([iO()],r_.prototype,"label",2),tE([iO()],r_.prototype,"href",2),tE([iO()],r_.prototype,"target",2),tE([iO()],r_.prototype,"rel",2),tE([iO()],r_.prototype,"download",2),tE([iH("slot:not([name])")],r_.prototype,"_mainSlot",2),r_=tE([iZ("gds-button")],r_);var rw=`@layer tokens, a11y, core, variants, sizes, sets, disabled;

@layer tokens {
  :host {
    --_gap: 4px;

    --_padding-inline: var(--gds-sys-space-padding-l);
    --_padding-block: var(--gds-sys-space-padding-m);

    --_color-bg: transparent;
    --_color-text: var(--gds-sys-color-primary-text);
    --_color-border: transparent;

    --_color-outline-alpha: 60%;
    --_color-outline: var(--gds-sys-color-stroke-stroke);

    --_font-size: 1rem;
    --_font-weight: 400;
    --_line-height: 1.25;

    display: inline-block;
    isolation: isolate;
    max-width: 100%;
    height: 100%;
  }
}

@layer core {
  .button {
    align-items: center;

    background-color: var(--_color-bg);

    border-color: var(--_color-border);
    border-style: none;
    border-bottom-style: solid;
    border-bottom-width: 2px;

    box-sizing: border-box;
    color: var(--_color-text);
    color-scheme: dark light;
    cursor: pointer;

    display: inline-flex;
    gap: var(--_gap);
    height: 100%;

    inline-size: 100%;
    justify-content: space-between;
    justify-items: center;
    outline-color: transparent;
    outline-offset: 2px;
    outline-style: solid;
    outline-width: 2px;
    padding-block: var(--_padding-block);
    padding-inline: var(--_padding-inline);
    position: relative;
    font-family: inherit;
    font-size: var(--_font-size);
    font-weight: var(--_font-weight);
    line-height: var(--_line-height);

    &:focus-visible {
      outline-color: color-mix(
        in srgb,
        var(--_color-outline),
        transparent var(--_color-outline-alpha)
      );
      border-radius: 2px;
      overflow: visible;
    }

    &:hover,
    &.selected:hover,
    &:active {
      --_color-bg: var(--gds-sys-color-base200);
      --_color-border: var(--gds-sys-color-base600);
    }

    &.selected {
      --_color-bg: var(--gds-sys-color-base100);
      --_color-border: var(--gds-sys-color-base700);
    }

    slot:not([name]) {
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .compact {
    display: flex;
    flex-direction: column;
    --_padding-inline: var(--gds-sys-space-padding-l);
    --_padding-block: var(--gds-sys-space-padding-s);
    --_gap: 1px;
    font-size: 0.875rem;
    height: 56px;
    justify-content: center;

    & > slot[name] {
      order: 0;
    }
    & > slot:not([name]) {
      order: 1;
    }
  }

  a {
    text-decoration: none;
  }
}

@layer disabled {
  :disabled {
    --_color-bg: var(--gds-sys-color-container-container-disabled);
    border-color: var(--_color-bg);
    color: var(--gds-sys-color-content-content-disabled);
    pointer-events: none;
  }
}
`,r$=class extends i1{constructor(){super(),tT(this,u),tT(this,f),this.disabled=!1,this.label="",this.href="",this.compact=!1,this.selected=!1,ra(this)}render(){let e={button:!0,selected:this.selected,compact:this.compact},t=tC(this,u,g)?rs`a`:rs`button`;return ro`
      <${t}
        class="${iY(e)}"
        ?disabled="${this.disabled}"
        aria-label="${this.label}"
        href=${rn(tC(this,u,g)?this.href:void 0)}
        target=${rn(tC(this,u,g)?this.target:void 0)}
        rel=${rn(tC(this,u,g)?this.rel||tC(this,f,y):void 0)}
        download=${rn(tC(this,u,g)?this.download:void 0)}
      >
        <slot name="lead"></slot>
        <slot></slot>
        <slot name="trail"></slot>
      </${t}>
    `}};u=new WeakSet,g=function(){return this.href.length>0},f=new WeakSet,y=function(){return"_blank"===this.target?"noreferrer noopener":void 0},r$.styles=[rg,sN(rw)],r$.shadowRootOptions={mode:"open",delegatesFocus:!0},tE([iO({type:Boolean,reflect:!0})],r$.prototype,"disabled",2),tE([iO()],r$.prototype,"label",2),tE([iO()],r$.prototype,"href",2),tE([iO()],r$.prototype,"target",2),tE([iO()],r$.prototype,"rel",2),tE([iO()],r$.prototype,"download",2),tE([iO({type:Boolean,reflect:!0})],r$.prototype,"compact",2),tE([iO({type:Boolean,reflect:!0})],r$.prototype,"selected",2),r$=tE([iZ("gds-menu-button")],r$);var rx=(e,...t)=>({strTag:!0,strings:e,values:t}),rk=e=>"string"!=typeof e&&"strTag"in e,rA=(e,t,s)=>{let i=e[0];for(let r=1;r<e.length;r++)i+=t[s?s[r-1]:r-1]+e[r];return i},rE="lit-localize-status",rS=class{constructor(e){this.__litLocalizeEventHandler=e=>{"ready"===e.detail.status&&this.host.requestUpdate()},this.host=e}hostConnected(){window.addEventListener(rE,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(rE,this.__litLocalizeEventHandler)}},rC=e=>e.addController(new rS(e)),rT=class{constructor(){this.settled=!1,this.promise=new Promise((e,t)=>{this._resolve=e,this._reject=t})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}},rM=[];for(let e=0;e<256;e++)rM[e]=(e>>4&15).toString(16)+(15&e).toString(16);new rT().resolve();var rF=e=>rk(e)?rA(e.strings,e.values):e,rD=sO`
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
`,{I:rL}={P:t6,A:t7,C:t4,M:1,L:s_,R:sx,D:si,V:s$,I:sk,H:sA,N:sS,U:sC,B:sE,F:sT},rW=e=>null===e||"object"!=typeof e&&"function"!=typeof e,rP=e=>void 0===e.strings,rN=()=>document.createComment(""),rO=(e,t,s)=>{let i=e._$AA.parentNode,r=void 0===t?e._$AB:t._$AA;if(void 0===s)s=new rL(i.insertBefore(rN(),r),i.insertBefore(rN(),r),e,e.options);else{let t=s._$AB.nextSibling,o=s._$AM,n=o!==e;if(n){let t;s._$AQ?.(e),s._$AM=e,void 0!==s._$AP&&(t=e._$AU)!==o._$AU&&s._$AP(t)}if(t!==r||n){let e=s._$AA;for(;e!==t;){let t=e.nextSibling;i.insertBefore(e,r),e=t}}}return s},rR=(e,t,s=e)=>(e._$AI(t,s),e),rz={},rH=(e,t=rz)=>e._$AH=t,rU=e=>e._$AH,rB=e=>{e._$AP?.(!1,!0);let t=e._$AA,s=e._$AB.nextSibling;for(;t!==s;){let e=t.nextSibling;t.remove(),t=e}},rI=(e,t)=>{let s=e._$AN;if(void 0===s)return!1;for(let e of s)e._$AO?.(t,!1),rI(e,t);return!0},rV=e=>{let t,s;do{if(void 0===(t=e._$AM))break;(s=t._$AN).delete(e),e=t}while(0===s?.size)},rj=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(void 0===s)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),rG(t)}};function rY(e){void 0!==this._$AN?(rV(this),this._$AM=e,rj(this)):this._$AM=e}function rq(e,t=!1,s=0){let i=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size){if(t){if(Array.isArray(i))for(let e=s;e<i.length;e++)rI(i[e],!1),rV(i[e]);else null!=i&&(rI(i,!1),rV(i))}else rI(this,e)}}var rG=e=>{e.type==iI.CHILD&&(e._$AP??=rq,e._$AQ??=rY)},rK=class extends ij{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,s){super._$AT(e,t,s),rj(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(rI(this,e),rV(this))}setValue(e){if(rP(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},rX=()=>new rZ,rZ=class{},rJ=new WeakMap,rQ=iV(class extends rK{render(e){return sy}update(e,[t]){let s=t!==this.Y;return s&&void 0!==this.Y&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.Y=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),sy}rt(e){if("function"==typeof this.Y){let t=this.ht??globalThis,s=rJ.get(t);void 0===s&&(s=new WeakMap,rJ.set(t,s)),void 0!==s.get(this.Y)&&this.Y.call(this.ht,void 0),s.set(this.Y,e),void 0!==e&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){return"function"==typeof this.Y?rJ.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),r0=class{constructor(e){this.#h=e=>{let t=e.target;if(!this.host.navigableItems.includes(t))return;let s=!1;if("ArrowDown"===e.key){let e=this.host.navigableItems.indexOf(t)+1,i=this.host.navigableItems[e];i?.focus(),s=!0}else if("ArrowUp"===e.key){let e=this.host.navigableItems.indexOf(t)-1,i=this.host.navigableItems[e];i?.focus(),s=!0}else if("Home"===e.key)this.host.navigableItems[0]?.focus(),s=!0;else if("End"===e.key)this.host.navigableItems[this.host.navigableItems.length-1]?.focus(),s=!0;else{let t=e.key.toLowerCase();if(1!==t.length)return;if(t>="a"&&t<="z"||t>="0"&&t<="9"){let e=this.host.navigableItems.find(e=>{let s=e.textContent?.trim().toLowerCase();return s?.startsWith(t)});e?.focus(),s=!0}}s&&(e.preventDefault(),e.stopPropagation())},(this.host=e).addController(this)}hostConnected(){this.host.addEventListener("keydown",this.#h)}hostDisconnected(){this.host.removeEventListener("keydown",this.#h)}#h};function r1(e){let t=e;for(;t.assignedElements().length>0&&"SLOT"===t.assignedElements()[0].nodeName;)t=t.assignedElements()[0];return t}var r2=class extends i1{constructor(){super(),tT(this,v,rX()),new r0(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),i2.instance.apply(this,"gds-listbox")}get navigableItems(){return tC(this,v).value&&r1(tC(this,v).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&"gds-menu-item"===e.gdsElementName)||[]}focus(){this.navigableItems[0]?.focus()}render(){return i0`<slot ${rQ(tC(this,v))}></slot>`}};v=new WeakMap,r2=tE([iZ("gds-menu")],r2);var r5=Math.min,r3=Math.max,r6=Math.round,r7=Math.floor,r4=e=>({x:e,y:e}),r8={left:"right",right:"left",bottom:"top",top:"bottom"},r9={start:"end",end:"start"};function oe(e,t){return"function"==typeof e?e(t):e}function ot(e){return e.split("-")[0]}function os(e){return e.split("-")[1]}function oi(e){return"y"===e?"height":"width"}function or(e){return["top","bottom"].includes(ot(e))?"y":"x"}function oo(e){return"x"===or(e)?"y":"x"}function on(e){return e.replace(/start|end/g,e=>r9[e])}function oa(e){return e.replace(/left|right|bottom|top/g,e=>r8[e])}function ol(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function oh(e,t,s){let i,{reference:r,floating:o}=e,n=or(t),a=oo(t),l=oi(a),h=ot(t),d="y"===n,c=r.x+r.width/2-o.width/2,p=r.y+r.height/2-o.height/2,u=r[l]/2-o[l]/2;switch(h){case"top":i={x:c,y:r.y-o.height};break;case"bottom":i={x:c,y:r.y+r.height};break;case"right":i={x:r.x+r.width,y:p};break;case"left":i={x:r.x-o.width,y:p};break;default:i={x:r.x,y:r.y}}switch(os(t)){case"start":i[a]-=u*(s&&d?-1:1);break;case"end":i[a]+=u*(s&&d?-1:1)}return i}var od=async(e,t,s)=>{let{placement:i="bottom",strategy:r="absolute",middleware:o=[],platform:n}=s,a=o.filter(Boolean),l=await (null==n.isRTL?void 0:n.isRTL(t)),h=await n.getElementRects({reference:e,floating:t,strategy:r}),{x:d,y:c}=oh(h,i,l),p=i,u={},g=0;for(let s=0;s<a.length;s++){let{name:o,fn:f}=a[s],{x:y,y:v,data:m,reset:b}=await f({x:d,y:c,initialPlacement:i,placement:p,strategy:r,middlewareData:u,rects:h,platform:n,elements:{reference:e,floating:t}});d=null!=y?y:d,c=null!=v?v:c,u={...u,[o]:{...u[o],...m}},b&&g<=50&&(g++,"object"==typeof b&&(b.placement&&(p=b.placement),b.rects&&(h=!0===b.rects?await n.getElementRects({reference:e,floating:t,strategy:r}):b.rects),{x:d,y:c}=oh(h,p,l)),s=-1)}return{x:d,y:c,placement:p,strategy:r,middlewareData:u}};async function oc(e,t){var s;void 0===t&&(t={});let{x:i,y:r,platform:o,rects:n,elements:a,strategy:l}=e,{boundary:h="clippingAncestors",rootBoundary:d="viewport",elementContext:c="floating",altBoundary:p=!1,padding:u=0}=oe(t,e),g="number"!=typeof u?{top:0,right:0,bottom:0,left:0,...u}:{top:u,right:u,bottom:u,left:u},f=a[p?"floating"===c?"reference":"floating":c],y=ol(await o.getClippingRect({element:null==(s=await (null==o.isElement?void 0:o.isElement(f)))||s?f:f.contextElement||await (null==o.getDocumentElement?void 0:o.getDocumentElement(a.floating)),boundary:h,rootBoundary:d,strategy:l})),v="floating"===c?{...n.floating,x:i,y:r}:n.reference,m=await (null==o.getOffsetParent?void 0:o.getOffsetParent(a.floating)),b=await (null==o.isElement?void 0:o.isElement(m))&&await (null==o.getScale?void 0:o.getScale(m))||{x:1,y:1},_=ol(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:v,offsetParent:m,strategy:l}):v);return{top:(y.top-_.top+g.top)/b.y,bottom:(_.bottom-y.bottom+g.bottom)/b.y,left:(y.left-_.left+g.left)/b.x,right:(_.right-y.right+g.right)/b.x}}async function op(e,t){let{placement:s,platform:i,elements:r}=e,o=await (null==i.isRTL?void 0:i.isRTL(r.floating)),n=ot(s),a=os(s),l="y"===or(s),h=["left","top"].includes(n)?-1:1,d=o&&l?-1:1,c=oe(t,e),{mainAxis:p,crossAxis:u,alignmentAxis:g}="number"==typeof c?{mainAxis:c,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...c};return a&&"number"==typeof g&&(u="end"===a?-1*g:g),l?{x:u*d,y:p*h}:{x:p*h,y:u*d}}function ou(e){return oy(e)?(e.nodeName||"").toLowerCase():"#document"}function og(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function of(e){var t;return null==(t=(oy(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function oy(e){return e instanceof Node||e instanceof og(e).Node}function ov(e){return e instanceof Element||e instanceof og(e).Element}function om(e){return e instanceof HTMLElement||e instanceof og(e).HTMLElement}function ob(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof og(e).ShadowRoot)}function o_(e){let{overflow:t,overflowX:s,overflowY:i,display:r}=oA(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+s)&&!["inline","contents"].includes(r)}function ow(e){let t=ox(),s=oA(e);return"none"!==s.transform||"none"!==s.perspective||!!s.containerType&&"normal"!==s.containerType||!t&&!!s.backdropFilter&&"none"!==s.backdropFilter||!t&&!!s.filter&&"none"!==s.filter||["transform","perspective","filter"].some(e=>(s.willChange||"").includes(e))||["paint","layout","strict","content"].some(e=>(s.contain||"").includes(e))}function o$(e){let t=oS(e);for(;om(t)&&!ok(t);){if(ow(t))return t;t=oS(t)}return null}function ox(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function ok(e){return["html","body","#document"].includes(ou(e))}function oA(e){return og(e).getComputedStyle(e)}function oE(e){return ov(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function oS(e){if("html"===ou(e))return e;let t=e.assignedSlot||e.parentNode||ob(e)&&e.host||of(e);return ob(t)?t.host:t}function oC(e,t,s){var i;void 0===t&&(t=[]),void 0===s&&(s=!0);let r=function e(t){let s=oS(t);return ok(s)?t.ownerDocument?t.ownerDocument.body:t.body:om(s)&&o_(s)?s:e(s)}(e),o=r===(null==(i=e.ownerDocument)?void 0:i.body),n=og(r);return o?t.concat(n,n.visualViewport||[],o_(r)?r:[],n.frameElement&&s?oC(n.frameElement):[]):t.concat(r,oC(r,[],s))}function oT(e){let t=oA(e),s=parseFloat(t.width)||0,i=parseFloat(t.height)||0,r=om(e),o=r?e.offsetWidth:s,n=r?e.offsetHeight:i,a=r6(s)!==o||r6(i)!==n;return a&&(s=o,i=n),{width:s,height:i,$:a}}function oM(e){return ov(e)?e:e.contextElement}function oF(e){let t=oM(e);if(!om(t))return r4(1);let s=t.getBoundingClientRect(),{width:i,height:r,$:o}=oT(t),n=(o?r6(s.width):s.width)/i,a=(o?r6(s.height):s.height)/r;return n&&Number.isFinite(n)||(n=1),a&&Number.isFinite(a)||(a=1),{x:n,y:a}}var oD=r4(0);function oL(e){let t=og(e);return ox()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:oD}function oW(e,t,s,i){var r;void 0===t&&(t=!1),void 0===s&&(s=!1);let o=e.getBoundingClientRect(),n=oM(e),a=r4(1);t&&(i?ov(i)&&(a=oF(i)):a=oF(e));let l=(void 0===(r=s)&&(r=!1),i&&(!r||i===og(n))&&r)?oL(n):r4(0),h=(o.left+l.x)/a.x,d=(o.top+l.y)/a.y,c=o.width/a.x,p=o.height/a.y;if(n){let e=og(n),t=i&&ov(i)?og(i):i,s=e.frameElement;for(;s&&i&&t!==e;){let e=oF(s),t=s.getBoundingClientRect(),i=oA(s),r=t.left+(s.clientLeft+parseFloat(i.paddingLeft))*e.x,o=t.top+(s.clientTop+parseFloat(i.paddingTop))*e.y;h*=e.x,d*=e.y,c*=e.x,p*=e.y,h+=r,d+=o,s=og(s).frameElement}}return ol({width:c,height:p,x:h,y:d})}var oP=[":popover-open",":modal"];function oN(e){let t=!1,s=0,i=0;if(oP.forEach(s=>{!function(s){try{t=t||e.matches(s)}catch(e){}}(s)}),t){let t=o$(e);if(t){let e=t.getBoundingClientRect();s=e.x,i=e.y}}return[t,s,i]}function oO(e){return oW(of(e)).left+oE(e).scrollLeft}function oR(e,t,s){let i;if("viewport"===t)i=function(e,t){let s=og(e),i=of(e),r=s.visualViewport,o=i.clientWidth,n=i.clientHeight,a=0,l=0;if(r){o=r.width,n=r.height;let e=ox();(!e||e&&"fixed"===t)&&(a=r.offsetLeft,l=r.offsetTop)}return{width:o,height:n,x:a,y:l}}(e,s);else if("document"===t)i=function(e){let t=of(e),s=oE(e),i=e.ownerDocument.body,r=r3(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),o=r3(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight),n=-s.scrollLeft+oO(e),a=-s.scrollTop;return"rtl"===oA(i).direction&&(n+=r3(t.clientWidth,i.clientWidth)-r),{width:r,height:o,x:n,y:a}}(of(e));else if(ov(t))i=function(e,t){let s=oW(e,!0,"fixed"===t),i=s.top+e.clientTop,r=s.left+e.clientLeft,o=om(e)?oF(e):r4(1),n=e.clientWidth*o.x;return{width:n,height:e.clientHeight*o.y,x:r*o.x,y:i*o.y}}(t,s);else{let s=oL(e);i={...t,x:t.x-s.x,y:t.y-s.y}}return ol(i)}function oz(e,t){return om(e)&&"fixed"!==oA(e).position?t?t(e):e.offsetParent:null}function oH(e,t){let s=og(e);if(!om(e))return s;let i=oz(e,t);for(;i&&["table","td","th"].includes(ou(i))&&"static"===oA(i).position;)i=oz(i,t);return i&&("html"===ou(i)||"body"===ou(i)&&"static"===oA(i).position&&!ow(i))?s:i||o$(e)||s}var oU=async function(e){let t=this.getOffsetParent||oH,s=this.getDimensions;return{reference:function(e,t,s,i){let r=om(t),o=of(t),n="fixed"===s,a=oW(e,!0,n,t),l={scrollLeft:0,scrollTop:0},h=r4(0);if(r||!r&&!n){if(("body"!==ou(t)||o_(o))&&(l=oE(t)),r){let e=oW(t,!0,n,t);h.x=e.x+t.clientLeft,h.y=e.y+t.clientTop}else o&&(h.x=oO(o))}let d=a.left+l.scrollLeft-h.x,c=a.top+l.scrollTop-h.y,[p,u,g]=oN(i);return p&&(d+=u,c+=g,r&&(d+=t.clientLeft,c+=t.clientTop)),{x:d,y:c,width:a.width,height:a.height}}(e.reference,await t(e.floating),e.strategy,e.floating),floating:{x:0,y:0,...await s(e.floating)}}},oB={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:s,offsetParent:i,strategy:r}=e,o=of(i),[n]=t?oN(t.floating):[!1];if(i===o||n)return s;let a={scrollLeft:0,scrollTop:0},l=r4(1),h=r4(0),d=om(i);if((d||!d&&"fixed"!==r)&&(("body"!==ou(i)||o_(o))&&(a=oE(i)),om(i))){let e=oW(i);l=oF(i),h.x=e.x+i.clientLeft,h.y=e.y+i.clientTop}return{width:s.width*l.x,height:s.height*l.y,x:s.x*l.x-a.scrollLeft*l.x+h.x,y:s.y*l.y-a.scrollTop*l.y+h.y}},getDocumentElement:of,getClippingRect:function(e){let{element:t,boundary:s,rootBoundary:i,strategy:r}=e,o=[..."clippingAncestors"===s?function(e,t){let s=t.get(e);if(s)return s;let i=oC(e,[],!1).filter(e=>ov(e)&&"body"!==ou(e)),r=null,o="fixed"===oA(e).position,n=o?oS(e):e;for(;ov(n)&&!ok(n);){let t=oA(n),s=ow(n);s||"fixed"!==t.position||(r=null),(o?!s&&!r:!s&&"static"===t.position&&!!r&&["absolute","fixed"].includes(r.position)||o_(n)&&!s&&function e(t,s){let i=oS(t);return!(i===s||!ov(i)||ok(i))&&("fixed"===oA(i).position||e(i,s))}(e,n))?i=i.filter(e=>e!==n):r=t,n=oS(n)}return t.set(e,i),i}(t,this._c):[].concat(s),i],n=o[0],a=o.reduce((e,s)=>{let i=oR(t,s,r);return e.top=r3(i.top,e.top),e.right=r5(i.right,e.right),e.bottom=r5(i.bottom,e.bottom),e.left=r3(i.left,e.left),e},oR(t,n,r));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},getOffsetParent:oH,getElementRects:oU,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){let{width:t,height:s}=oT(e);return{width:t,height:s}},getScale:oF,isElement:ov,isRTL:function(e){return"rtl"===oA(e).direction}},oI=(e,t,s)=>{let i=new Map,r={platform:oB,...s},o={...r.platform,_c:i};return od(e,t,{...r,platform:o})},oV=class extends ij{constructor(e){if(super(e),this.it=sy,e.type!==iI.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===sy||null==e)return this._t=void 0,this.it=e;if(e===sf)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};oV.directiveName="unsafeHTML",oV.resultType=1;var oj=iV(oV),oY=sO`
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
`,oq=class extends i1{constructor(){super(...arguments),this.width=24,this.height=24,this.solid=!1,this.label=""}static{this.styles=[oY]}render(){let e=`<svg
      width="${this.width}"
      height="${this.height}"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ${this.label?`aria-label="${this.label}"`:`aria-label="${this.constructor._name}"`}
      role="graphics-symbol"
    >
      ${this.solid?this.constructor._solidSVG:this.constructor._regularSVG}
    </svg>`;return iu`${oj(e)}`}};tE([iO({type:Number})],oq.prototype,"width",2),tE([iO({type:Number})],oq.prototype,"height",2),tE([iO({type:Boolean})],oq.prototype,"solid",2),tE([iO({type:String})],oq.prototype,"label",2);var oG=class extends oq{};oG._regularSVG='<path d="M7.75 7.75L16.25 16.25M16.25 7.75L7.75 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',oG._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7.11612 7.11612C7.60427 6.62796 8.39573 6.62796 8.88388 7.11612L12 10.2322L15.1161 7.11612C15.6043 6.62796 16.3957 6.62796 16.8839 7.11612C17.372 7.60427 17.372 8.39573 16.8839 8.88388L13.7678 12L16.8839 15.1161C17.372 15.6043 17.372 16.3957 16.8839 16.8839C16.3957 17.372 15.6043 17.372 15.1161 16.8839L12 13.7678L8.88388 16.8839C8.39573 17.372 7.60427 17.372 7.11612 16.8839C6.62796 16.3957 6.62796 15.6043 7.11612 15.1161L10.2322 12L7.11612 8.88388C6.62796 8.39573 6.62796 7.60427 7.11612 7.11612Z" fill="currentColor"/>',oG._name="cross small",oG=tE([iZ("gds-icon-cross-small")],oG);var oK=sO`
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
`,oX=class extends i1{constructor(){super(...arguments),tT(this,m),tT(this,A),tT(this,S),tT(this,T),tT(this,F),this.open=!1,this.popupRole="dialog",this.label=void 0,this.placement="bottom-start",this.disableMobileStyles=!1,this.calcMinWidth=e=>`${e.offsetWidth}px`,this.calcMaxWidth=e=>"auto",this.calcMinHeight=e=>"auto",this.calcMaxHeight=e=>"500px",this._trigger=void 0,this._anchor=void 0,this._isVirtKbVisible=!1,tT(this,_,void 0),tT(this,w,!1),tT(this,$,()=>{this.open=!1,tC(this,x).call(this,"cancel")}),tT(this,x,e=>{this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:this.open,reason:e},bubbles:!1,composed:!1}))}),tT(this,k,e=>{e.stopPropagation(),e.preventDefault(),this.open=!1,tC(this,x).call(this,"close"),setTimeout(()=>this._trigger?.focus(),250)}),tT(this,L,e=>{("ArrowDown"===e.key||"ArrowUp"===e.key)&&(e.preventDefault(),this.open=!0,tC(this,x).call(this,"show")),"Escape"===e.key&&this.open&&tC(this,$).call(this)}),tT(this,W,e=>{e.preventDefault(),this.open=!this.open,tC(this,x).call(this,this.open?"show":"close")}),tT(this,P,()=>{let e=this._elDefaultSlot?.assignedElements()[0];this.updateComplete.then(()=>{e?.focus()})}),tT(this,N,e=>{let t=this._elDialog;if((e.clientX>0||e.clientY>0)&&t&&this.open){let s=t.getBoundingClientRect();s.top<=e.clientY&&e.clientY<=s.top+s.height&&s.left<=e.clientX&&e.clientX<=s.left+s.width||(e.stopPropagation(),this.open=!1,tC(this,x).call(this,"close"))}})}_handleTriggerRefChanged(){this.triggerRef?.then(e=>{e&&(this._trigger=e)})}_handleAnchorRefChanged(){this.anchorRef?.then(e=>{e&&(this._anchor=e)})}_handleTriggerChanged(){tD(this,A,E).call(this),tD(this,T,M).call(this)}_handleAnchorChanged(){tD(this,F,D).call(this)}connectedCallback(){super.connectedCallback(),i2.instance.apply(this,"gds-popover"),tD(this,A,E).call(this),this._handleOpenChange(),this.addEventListener("keydown",e=>{"Escape"===e.key&&this.open&&(tC(this,$).call(this),e.stopPropagation(),e.preventDefault())}),this.addEventListener("focusin",e=>{let t=e.target;"INPUT"===t.tagName||"TEXTAREA"===t.tagName?this._isVirtKbVisible=!0:this._isVirtKbVisible=!1}),this.addEventListener("blurin",e=>{this._isVirtKbVisible=!1})}disconnectedCallback(){super.disconnectedCallback(),tD(this,S,C).call(this)}render(){return iu`<slot
        name="trigger"
        @slotchange=${tD(this,m,b)}
      ></slot>
      <div ?hidden="${!this.open}">
        <dialog
          class="${iY({"v-kb-visible":this._isVirtKbVisible,"use-modal-in-mobile":!this.disableMobileStyles})}"
          aria-hidden="${String(!this.open)}"
          @close=${()=>this.open&&tC(this,$).call(this)}
        >
          <header>
            <h2>${this.label}</h2>
            <gds-button
              @click=${tC(this,k)}
              class="close"
              label="${rF("Close")}"
              size="small"
              rank="tertiary"
            >
              <gds-icon-cross-small></icon-cross-small>
            </gds-button>
          </header>
          <slot></slot>
        </dialog>
      </div>`}_handleOpenChange(){this.updateComplete.then(()=>{this._trigger?.setAttribute("aria-expanded",String(this.open)),this.open?(this._elDialog?.showModal(),tC(this,P).call(this),setTimeout(()=>tC(this,P).call(this),250),setTimeout(()=>this._elDialog?.addEventListener("click",tC(this,N)),0)):(this._elDialog?.close(),this._elDialog?.removeEventListener("click",tC(this,N)))})}_handleMobileLayout(e){var t;tM(this,w,e),e&&!this.disableMobileStyles?(null==(t=tC(this,_))||t.call(this),this._elDialog?.style.removeProperty("left"),this._elDialog?.style.removeProperty("top"),this._elDialog?.style.removeProperty("minWidth"),this.updateComplete.then(()=>{this.open&&this._elDialog?.showModal()})):this.updateComplete.then(()=>{tD(this,F,D).call(this)})}};m=new WeakSet,b=function(){this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]&&(this._trigger=this._elTriggerSlot.assignedElements()[0],this._anchor=this._elTriggerSlot.assignedElements()[0])},_=new WeakMap,w=new WeakMap,$=new WeakMap,x=new WeakMap,k=new WeakMap,A=new WeakSet,E=function(){this._trigger?.addEventListener("keydown",tC(this,L)),this._trigger?.addEventListener("click",tC(this,W))},S=new WeakSet,C=function(){var e;this._trigger?.removeEventListener("keydown",tC(this,L)),this._trigger?.removeEventListener("click",tC(this,W)),null==(e=tC(this,_))||e.call(this)},T=new WeakSet,M=function(){if(this._trigger){this._trigger?.setAttribute("aria-expanded",String(this.open)),this._trigger.nodeName.startsWith("GDS-")||["A","BUTTON","INPUT","TEXTAREA"].includes(this._trigger.nodeName)||(this._trigger.setAttribute("tabindex","0"),this._trigger.setAttribute("role","button"));let e=this._trigger.nodeName.startsWith("GDS-")?"gds-aria-haspopup":"aria-haspopup";null===this._trigger.getAttribute(e)&&this._trigger.setAttribute(e,this.popupRole)}},F=new WeakSet,D=function(){if(!this._anchor||!this._elDialog)return;let e=this._anchor,t=this._elDialog;!e||!t||tC(this,w)&&!this.disableMobileStyles||(tC(this,_)&&tC(this,_).call(this),tM(this,_,function(e,t,s,i){let r;void 0===i&&(i={});let{ancestorScroll:o=!0,ancestorResize:n=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:l="function"==typeof IntersectionObserver,animationFrame:h=!1}=i,d=oM(e),c=o||n?[...d?oC(d):[],...oC(t)]:[];c.forEach(e=>{o&&e.addEventListener("scroll",s,{passive:!0}),n&&e.addEventListener("resize",s)});let p=d&&l?function(e,t){let s,i=null,r=of(e);function o(){var e;clearTimeout(s),null==(e=i)||e.disconnect(),i=null}return function n(a,l){void 0===a&&(a=!1),void 0===l&&(l=1),o();let{left:h,top:d,width:c,height:p}=e.getBoundingClientRect();if(a||t(),!c||!p)return;let u=r7(d),g=r7(r.clientWidth-(h+c)),f={rootMargin:-u+"px "+-g+"px "+-r7(r.clientHeight-(d+p))+"px "+-r7(h)+"px",threshold:r3(0,r5(1,l))||1},y=!0;function v(e){let t=e[0].intersectionRatio;if(t!==l){if(!y)return n();t?n(!1,t):s=setTimeout(()=>{n(!1,1e-7)},100)}y=!1}try{i=new IntersectionObserver(v,{...f,root:r.ownerDocument})}catch(e){i=new IntersectionObserver(v,f)}i.observe(e)}(!0),o}(d,s):null,u=-1,g=null;a&&(g=new ResizeObserver(e=>{let[i]=e;i&&i.target===d&&g&&(g.unobserve(t),cancelAnimationFrame(u),u=requestAnimationFrame(()=>{var e;null==(e=g)||e.observe(t)})),s()}),d&&!h&&g.observe(d),g.observe(t));let f=h?oW(e):null;return h&&function t(){let i=oW(e);f&&(i.x!==f.x||i.y!==f.y||i.width!==f.width||i.height!==f.height)&&s(),f=i,r=requestAnimationFrame(t)}(),s(),()=>{var e;c.forEach(e=>{o&&e.removeEventListener("scroll",s),n&&e.removeEventListener("resize",s)}),null==p||p(),null==(e=g)||e.disconnect(),g=null,h&&cancelAnimationFrame(r)}}(e,t,()=>{var s;oI(e,t,{placement:this.placement,middleware:[{name:"offset",options:8,async fn(e){var t,s;let{x:i,y:r,placement:o,middlewareData:n}=e,a=await op(e,8);return o===(null==(t=n.offset)?void 0:t.placement)&&null!=(s=n.arrow)&&s.alignmentOffset?{}:{x:i+a.x,y:r+a.y,data:{...a,placement:o}}}},(void 0===s&&(s={}),{name:"flip",options:s,async fn(e){var t,i,r,o,n;let{placement:a,middlewareData:l,rects:h,initialPlacement:d,platform:c,elements:p}=e,{mainAxis:u=!0,crossAxis:g=!0,fallbackPlacements:f,fallbackStrategy:y="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:m=!0,...b}=oe(s,e);if(null!=(t=l.arrow)&&t.alignmentOffset)return{};let _=ot(a),w=ot(d)===d,$=await (null==c.isRTL?void 0:c.isRTL(p.floating)),x=f||(w||!m?[oa(d)]:function(e){let t=oa(e);return[on(e),t,on(t)]}(d));f||"none"===v||x.push(...function(e,t,s,i){let r=os(e),o=function(e,t,s){let i=["left","right"],r=["right","left"];switch(e){case"top":case"bottom":if(s)return t?r:i;return t?i:r;case"left":case"right":return t?["top","bottom"]:["bottom","top"];default:return[]}}(ot(e),"start"===s,i);return r&&(o=o.map(e=>e+"-"+r),t&&(o=o.concat(o.map(on)))),o}(d,m,v,$));let k=[d,...x],A=await oc(e,b),E=[],S=(null==(i=l.flip)?void 0:i.overflows)||[];if(u&&E.push(A[_]),g){let e=function(e,t,s){void 0===s&&(s=!1);let i=os(e),r=oo(e),o=oi(r),n="x"===r?i===(s?"end":"start")?"right":"left":"start"===i?"bottom":"top";return t.reference[o]>t.floating[o]&&(n=oa(n)),[n,oa(n)]}(a,h,$);E.push(A[e[0]],A[e[1]])}if(S=[...S,{placement:a,overflows:E}],!E.every(e=>e<=0)){let e=((null==(r=l.flip)?void 0:r.index)||0)+1,t=k[e];if(t)return{data:{index:e,overflows:S},reset:{placement:t}};let s=null==(o=S.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:o.placement;if(!s)switch(y){case"bestFit":{let e=null==(n=S.map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:n[0];e&&(s=e);break}case"initialPlacement":s=d}if(a!==s)return{reset:{placement:s}}}return{}}})],strategy:"fixed"}).then(({x:s,y:i})=>Object.assign(t.style,{left:`${s}px`,top:`${i}px`,minWidth:this.calcMinWidth(e),maxWidth:this.calcMaxWidth(e),minHeight:this.calcMinHeight(e),maxHeight:this.calcMaxHeight(e)}))})))},L=new WeakMap,W=new WeakMap,P=new WeakMap,N=new WeakMap,oX.styles=sN(oK),tE([iO({type:Boolean,reflect:!0})],oX.prototype,"open",2),tE([iO({attribute:"popup-role"})],oX.prototype,"popupRole",2),tE([iO({attribute:!1})],oX.prototype,"triggerRef",2),tE([iO({attribute:!1})],oX.prototype,"anchorRef",2),tE([iO()],oX.prototype,"label",2),tE([iO()],oX.prototype,"placement",2),tE([iO()],oX.prototype,"disableMobileStyles",2),tE([iO({attribute:!1})],oX.prototype,"calcMinWidth",2),tE([iO({attribute:!1})],oX.prototype,"calcMaxWidth",2),tE([iO({attribute:!1})],oX.prototype,"calcMinHeight",2),tE([iO({attribute:!1})],oX.prototype,"calcMaxHeight",2),tE([iR()],oX.prototype,"_trigger",2),tE([iR()],oX.prototype,"_anchor",2),tE([iR()],oX.prototype,"_isVirtKbVisible",2),tE([iH("slot:not([name])")],oX.prototype,"_elDefaultSlot",2),tE([iH('slot[name="trigger"]')],oX.prototype,"_elTriggerSlot",2),tE([iH("dialog")],oX.prototype,"_elDialog",2),tE([i3("triggerRef")],oX.prototype,"_handleTriggerRefChanged",1),tE([i3("anchorRef")],oX.prototype,"_handleAnchorRefChanged",1),tE([i3("_trigger")],oX.prototype,"_handleTriggerChanged",1),tE([i3("_anchor")],oX.prototype,"_handleAnchorChanged",1),tE([i3("open")],oX.prototype,"_handleOpenChange",1),tE([(e,t,s)=>{let i=window.matchMedia("(max-width: 576px)"),r=e.connectedCallback,o=e.disconnectedCallback;e.connectedCallback=function(){r?.call(this);let e=e=>{s.value?.call(this,e.matches)};i.addEventListener("change",e),this.disconnectedCallback=function(){o?.call(this),i.removeEventListener("change",e)},s.value?.call(this,i.matches)}}],oX.prototype,"_handleMobileLayout",1),oX=tE([iZ("gds-popover")],oX);var oZ=class extends i1{constructor(){super(),tT(this,O),this.open=!1,this.buttonLabel=rF("Open context menu"),this.showLabel=!1,this.label="",this.placement="bottom-start",ra(this)}connectedCallback(){super.connectedCallback(),i2.instance.apply(this,"gds-context-menu"),this.addEventListener("keydown",e=>{this.open&&"Tab"==e.key&&(e.preventDefault(),this.open=!1,this.elTriggerBtn.then(e=>e.focus()))})}render(){return i0`<button
        id="trigger"
        class="icon border-0 small ${iY({highlighted:this.open})}"
        aria-label=${this.buttonLabel??this.label}
        aria-haspopup="menu"
        aria-controls="menu"
        aria-expanded=${this.open}
      >
        <slot name="trigger">
          ${this.showLabel?this.buttonLabel??this.label:iy}
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
          @gds-menu-item-click=${tD(this,O,R)}
        >
          <slot allow="gds-menu-item gds-menu-heading"></slot>
        </gds-menu>
      </gds-popover>`}};O=new WeakSet,R=function(){this.open=!1},oZ.styles=[rD],oZ.shadowRootOptions={mode:"open",delegatesFocus:!0},tE([iO({type:Boolean,reflect:!0})],oZ.prototype,"open",2),tE([iO({attribute:"button-label"})],oZ.prototype,"buttonLabel",2),tE([iO({attribute:"show-label",type:Boolean})],oZ.prototype,"showLabel",2),tE([iO()],oZ.prototype,"label",2),tE([iO()],oZ.prototype,"placement",2),tE([iU("#trigger")],oZ.prototype,"elTriggerBtn",2),oZ=tE([iZ("gds-context-menu")],oZ);var oJ=class{constructor(e){this.Y=e}disconnect(){this.Y=void 0}reconnect(e){this.Y=e}deref(){return this.Y}},oQ=class{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??=new Promise(e=>this.q=e)}resume(){this.q?.(),this.Z=this.q=void 0}},o0=e=>!rW(e)&&"function"==typeof e.then,o1=iV(class extends rK{constructor(){super(...arguments),this._$Cwt=1073741823,this._$Cbt=[],this._$CK=new oJ(this),this._$CX=new oQ}render(...e){return e.find(e=>!o0(e))??sf}update(e,t){let s=this._$Cbt,i=s.length;this._$Cbt=t;let r=this._$CK,o=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){let n=t[e];if(!o0(n))return this._$Cwt=e,n;e<i&&n===s[e]||(this._$Cwt=1073741823,i=0,Promise.resolve(n).then(async e=>{for(;o.get();)await o.get();let t=r.deref();if(void 0!==t){let s=t._$Cbt.indexOf(n);s>-1&&s<t._$Cwt&&(t._$Cwt=s,t.setValue(e))}}))}return sf}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}),o2=(e,t,s)=>{let i=new Map;for(let r=t;r<=s;r++)i.set(e[r],r);return i},o5=iV(class extends ij{constructor(e){if(super(e),e.type!==iI.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,s){let i;void 0===s?s=t:void 0!==t&&(i=t);let r=[],o=[],n=0;for(let t of e)r[n]=i?i(t,n):n,o[n]=s(t,n),n++;return{values:o,keys:r}}render(e,t,s){return this.dt(e,t,s).values}update(e,[t,s,i]){let r=rU(e),{values:o,keys:n}=this.dt(t,s,i);if(!Array.isArray(r))return this.ut=n,o;let a=this.ut??=[],l=[],h,d,c=0,p=r.length-1,u=0,g=o.length-1;for(;c<=p&&u<=g;)if(null===r[c])c++;else if(null===r[p])p--;else if(a[c]===n[u])l[u]=rR(r[c],o[u]),c++,u++;else if(a[p]===n[g])l[g]=rR(r[p],o[g]),p--,g--;else if(a[c]===n[g])l[g]=rR(r[c],o[g]),rO(e,l[g+1],r[c]),c++,g--;else if(a[p]===n[u])l[u]=rR(r[p],o[u]),rO(e,r[c],r[p]),p--,u++;else if(void 0===h&&(h=o2(n,u,g),d=o2(a,c,p)),h.has(a[c])){if(h.has(a[p])){let t=d.get(n[u]),s=void 0!==t?r[t]:null;if(null===s){let t=rO(e,r[c]);rR(t,o[u]),l[u]=t}else l[u]=rR(s,o[u]),rO(e,r[c],s),r[t]=null;u++}else rB(r[p]),p--}else rB(r[c]),c++;for(;u<=g;){let t=rO(e,l[g+1]);rR(t,o[u]),l[u++]=t}for(;c<=p;){let e=r[c++];null!==e&&rB(e)}return this.ut=n,rH(e,l),sf}});function o3(e){return(o3="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o6(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function o7(e,t){if(t.length<e)throw TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function o4(e){o7(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===o3(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):(("string"==typeof e||"[object String]"===t)&&"undefined"!=typeof console&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(Error().stack)),new Date(NaN))}function o8(e,t){o7(2,arguments);var s=o4(e),i=o6(t);return isNaN(i)?new Date(NaN):(i&&s.setDate(s.getDate()+i),s)}function o9(e,t){o7(2,arguments);var s=o4(e),i=o6(t);if(isNaN(i))return new Date(NaN);if(!i)return s;var r=s.getDate(),o=new Date(s.getTime());return(o.setMonth(s.getMonth()+i+1,0),r>=o.getDate())?o:(s.setFullYear(o.getFullYear(),o.getMonth(),r),s)}var ne={};function nt(e,t){o7(1,arguments);var s,i,r,o,n,a,l,h,d=o6(null!==(s=null!==(i=null!==(r=null!==(o=null==t?void 0:t.weekStartsOn)&&void 0!==o?o:null==t?void 0:null===(n=t.locale)||void 0===n?void 0:null===(a=n.options)||void 0===a?void 0:a.weekStartsOn)&&void 0!==r?r:ne.weekStartsOn)&&void 0!==i?i:null===(l=ne.locale)||void 0===l?void 0:null===(h=l.options)||void 0===h?void 0:h.weekStartsOn)&&void 0!==s?s:0);if(!(d>=0&&d<=6))throw RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=o4(e),p=c.getDay();return c.setDate(c.getDate()-((p<d?7:0)+p-d)),c.setHours(0,0,0,0),c}function ns(e){o7(1,arguments);var t=o4(e);return t.setHours(0,0,0,0),t}function ni(e,t){o7(2,arguments);var s=ns(e),i=ns(t);return s.getTime()===i.getTime()}var nr={fromAttribute:e=>new Date(e),toAttribute:e=>e.toISOString()},no=sO`
  @layer base, reset, transitional-styles;
  @layer base {
    td.disabled {
      color: #555;
      cursor: default;
    }
    td.today {
      background-color: #eee;
    }
  }
`,nn=class extends i1{constructor(){super(...arguments),tT(this,z),tT(this,U),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.focusedDate=new Date,this.disabledWeekends=!1,this.showWeekNumbers=!1}get focusedMonth(){return this.focusedDate.getMonth()}set focusedMonth(e){let t=function(e){o7(1,arguments);var t=o4(e),s=t.getMonth();return t.setFullYear(t.getFullYear(),s+1,0),t.setHours(0,0,0,0),t}(new Date(this.focusedYear,e,1)),s=new Date(this.focusedDate);s.setDate(Math.min(this.focusedDate.getDate(),t.getDate())),s.setMonth(e),s.setHours(12,0,0,0),this.focusedDate=s}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(e){this.focusedDate=new Date(this.focusedDate.setFullYear(e))}getDateCell(e){return this.shadowRoot?.querySelector(`#dateCell-${e}`)}connectedCallback(){super.connectedCallback(),i2.instance.apply(this,"gds-calendar"),this.addEventListener("keydown",tD(this,U,B))}focus(){super.focus(),this._elFocusedCell?.focus()}render(){let e=new Date;return iu`<table role="grid" aria-label="${rn(this.label)}">
      <thead role="rowgroup">
        <tr role="row">
          ${iB(this.showWeekNumbers,()=>iu`<th></th>`)}
          <th>${rF("Mon")}</th>
          <th>${rF("Tue")}</th>
          <th>${rF("Wed")}</th>
          <th>${rF("Thu")}</th>
          <th>${rF("Fri")}</th>
          <th>${rF("Sat")}</th>
          <th>${rF("Sun")}</th>
        </tr>
      </thead>
      <tbody role="rowgroup">
        ${function(e,t){let s=function(e,t){o7(1,arguments);var s=e||{},i=o4(s.start),r=o4(s.end),o=r.getTime();if(!(i.getTime()<=o))throw RangeError("Invalid interval");var n=nt(i,t),a=nt(r,t);n.setHours(15),a.setHours(15),o=a.getTime();for(var l=[],h=n;h.getTime()<=o;)h.setHours(0),l.push(o4(h)),(h=function(e,t){return o7(2,arguments),o8(e,7*o6(1))}(h,1)).setHours(15);return l}({start:function(e){o7(1,arguments);var t=o4(e);return t.setDate(1),t.setHours(0,0,0,0),t}(e),end:function(e){o7(1,arguments);var t=o4(e),s=t.getMonth();return t.setFullYear(t.getFullYear(),s+1,0),t.setHours(23,59,59,999),t}(e)},{weekStartsOn:1});return iu`${t(s.map(e=>({days:function(e,t){o7(1,arguments);var s,i=e||{},r=o4(i.start),o=o4(i.end).getTime();if(!(r.getTime()<=o))throw RangeError("Invalid interval");var n=[];r.setHours(0,0,0,0);var a=Number(null!==(s=null==t?void 0:t.step)&&void 0!==s?s:1);if(a<1||isNaN(a))throw RangeError("`options.step` must be a number greater than 1");for(;r.getTime()<=o;)n.push(o4(r)),r.setDate(r.getDate()+a),r.setHours(0,0,0,0);return n}({start:e,end:o8(e,6)})})))}`}(this.focusedDate,t=>iu`
            ${t.map(t=>iu`
                <tr role="row">
                  ${iB(this.showWeekNumbers,()=>iu`<td class="week-number" scope="row">
                        ${(function(e,t){o7(1,arguments);var s=o4(e);return Math.round((nt(s,t).getTime()-(function(e,t){o7(1,arguments);var s,i,r,o,n,a,l,h,d=o6(null!==(s=null!==(i=null!==(r=null!==(o=null==t?void 0:t.firstWeekContainsDate)&&void 0!==o?o:null==t?void 0:null===(n=t.locale)||void 0===n?void 0:null===(a=n.options)||void 0===a?void 0:a.firstWeekContainsDate)&&void 0!==r?r:ne.firstWeekContainsDate)&&void 0!==i?i:null===(l=ne.locale)||void 0===l?void 0:null===(h=l.options)||void 0===h?void 0:h.firstWeekContainsDate)&&void 0!==s?s:1),c=function(e,t){o7(1,arguments);var s,i,r,o,n,a,l,h,d=o4(e),c=d.getFullYear(),p=o6(null!==(s=null!==(i=null!==(r=null!==(o=null==t?void 0:t.firstWeekContainsDate)&&void 0!==o?o:null==t?void 0:null===(n=t.locale)||void 0===n?void 0:null===(a=n.options)||void 0===a?void 0:a.firstWeekContainsDate)&&void 0!==r?r:ne.firstWeekContainsDate)&&void 0!==i?i:null===(l=ne.locale)||void 0===l?void 0:null===(h=l.options)||void 0===h?void 0:h.firstWeekContainsDate)&&void 0!==s?s:1);if(!(p>=1&&p<=7))throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var u=new Date(0);u.setFullYear(c+1,0,p),u.setHours(0,0,0,0);var g=nt(u,t),f=new Date(0);f.setFullYear(c,0,p),f.setHours(0,0,0,0);var y=nt(f,t);return d.getTime()>=g.getTime()?c+1:d.getTime()>=y.getTime()?c:c-1}(e,t),p=new Date(0);return p.setFullYear(c,0,d),p.setHours(0,0,0,0),nt(p,t)})(s,t).getTime())/6048e5)+1})(t.days[0])}
                      </td>`)}
                  ${t.days.map(t=>{let s=this.customizedDates&&this.customizedDates.find(e=>ni(e.date,t)),i={color:"currentColor",disabled:!!(this.disabledDates&&this.disabledDates.some(e=>ni(e,t))),...s},r=!function(e,t){o7(2,arguments);var s=o4(e),i=o4(t);return s.getFullYear()===i.getFullYear()&&s.getMonth()===i.getMonth()}(this.focusedDate,t)||t<this.min||t>this.max,o=0===t.getDay()||6===t.getDay(),n=i.disabled||r||this.disabledWeekends&&o;return iu`
                      <td
                        role="${rn(n?void 0:"gridcell")}"
                        class="${iY({"custom-date":!!s,disabled:!!n,today:ni(e,t)})}"
                        ?disabled=${n}
                        tabindex="${ni(this.focusedDate,t)?0:-1}"
                        aria-selected="${this.value&&ni(this.value,t)?"true":"false"}"
                        aria-label="${t.toDateString()}"
                        @click=${()=>n?null:tD(this,z,H).call(this,t)}
                        id="dateCell-${t.getDate()}"
                      >
                        <span
                          class="number"
                          style="--_color: ${i?i?.color:""}"
                          >${t.getDate()}</span
                        >

                        ${iB(i.indicator,()=>iu`<span
                              class="indicator-${i?.indicator}"
                              style="--_color: ${i?.color}"
                            ></span>`)}
                      </td>
                    `})}
                </tr>
              `)}
          `)}
      </tbody>
    </table>`}_valueChanged(){this.value&&(this.focusedDate=this.value)}};z=new WeakSet,H=function(e){this.value=e,this.dispatchEvent(new CustomEvent("change",{detail:e,bubbles:!1,composed:!1}))},U=new WeakSet,B=function(e){let t=!1,s=new Date(this.focusedDate);"ArrowLeft"===e.key?(s=o8(this.focusedDate,-1),t=!0):"ArrowRight"===e.key?(s=o8(this.focusedDate,1),t=!0):"ArrowUp"===e.key?(s=o8(this.focusedDate,-7),t=!0):"ArrowDown"===e.key?(s=o8(this.focusedDate,7),t=!0):"Enter"===e.key||" "===e.key?(this._elFocusedCell?.hasAttribute("disabled")||tD(this,z,H).call(this,this.focusedDate),t=!0):"Home"===e.key?(s=new Date(this.focusedYear,this.focusedMonth,1),t=!0):"End"===e.key?(s=new Date(this.focusedYear,this.focusedMonth+1,0),t=!0):"PageUp"===e.key?(s=function(e,t){return o7(2,arguments),o9(e,-o6(1))}(this.focusedDate,1),t=!0):"PageDown"===e.key&&(s=o9(this.focusedDate,1),t=!0),s.getFullYear()>=this.min.getFullYear()&&s.getFullYear()<=this.max.getFullYear()&&(this.focusedDate=s),t&&(e.preventDefault(),e.stopPropagation(),this.updateComplete.then(()=>{this._elFocusedCell?.focus(),this.dispatchEvent(new CustomEvent("gds-date-focused",{detail:this.focusedDate,bubbles:!1,composed:!1}))}))},nn.styles=[no],nn.shadowRootOptions={mode:"open",delegatesFocus:!0},tE([iO()],nn.prototype,"value",2),tE([iO({type:Date})],nn.prototype,"min",2),tE([iO({type:Date})],nn.prototype,"max",2),tE([iO()],nn.prototype,"focusedDate",2),tE([iO({type:Boolean,attribute:"disabled-weekends"})],nn.prototype,"disabledWeekends",2),tE([iO({type:Array,attribute:"disabled-dates"})],nn.prototype,"disabledDates",2),tE([iO({type:Number})],nn.prototype,"focusedMonth",1),tE([iO({type:Number})],nn.prototype,"focusedYear",1),tE([iO({type:Boolean})],nn.prototype,"showWeekNumbers",2),tE([iO({attribute:!1})],nn.prototype,"customizedDates",2),tE([iO()],nn.prototype,"label",2),tE([iH('td[tabindex="0"]')],nn.prototype,"_elFocusedCell",2),tE([i3("value")],nn.prototype,"_valueChanged",1),nn=tE([iZ("gds-calendar")],nn);var na=sO`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
    }
  }
`,nl=class extends i1{constructor(){super(),this.multiple=!1,this.compareWith=(e,t)=>e===t,tT(this,I,rX()),tT(this,V,e=>{let t=e.target;this.multiple?t.selected=!t.selected:(t.selected=!0,Array.from(this.options).forEach(e=>{e!==t&&(e.selected=!1)})),this.ariaActiveDescendantElement=t,this.dispatchEvent(new CustomEvent("change",{bubbles:!1,composed:!1}))}),new r0(this)}get navigableItems(){return this.visibleOptionElements}get options(){return tC(this,I).value&&r1(tC(this,I).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&"gds-option"===e.gdsElementName)||[]}get visibleOptionElements(){return this.options.filter(e=>!e.hidden)}get visibleSelectedOptionElements(){return this.options.filter(e=>e.selected&&!e.hidden)}get selection(){return this.options.filter(e=>e.selected)}set selection(e){this.options.forEach(t=>{t.selected=e.some(e=>this.compareWith(e,t.value))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),i2.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",tC(this,V))}focus(){(this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])?.focus()}render(){return i0`<slot ${rQ(tC(this,I))}></slot>`}_rerenderOptions(){this.options.forEach(e=>{e.requestUpdate()})}};I=new WeakMap,V=new WeakMap,nl.styles=na,tE([iO({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:e=>e.toString()}})],nl.prototype,"multiple",2),tE([iO()],nl.prototype,"compareWith",2),tE([i3("multiple")],nl.prototype,"_rerenderOptions",1),nl=tE([iZ("gds-listbox")],nl);var nh=sO`
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
`,nd=class extends rm{constructor(){super(),tT(this,X),tT(this,J),tT(this,ee),this.label="",this.open=!1,this.searchable=!1,this.multiple=!1,this.compareWith=(e,t)=>e===t,this.searchFilter=(e,t)=>t.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.disableMobileStyles=!1,tT(this,j,void 0),tT(this,Y,e=>{let t=this._elSearchInput,s=Array.from(tC(this,j));s.forEach(e=>e.hidden=!1),t.value&&s.filter(e=>!this.searchFilter(t.value,e)).forEach(e=>e.hidden=!0)}),tT(this,q,e=>{this._elListbox?.then(t=>{if("ArrowDown"===e.key||"Tab"===e.key){e.preventDefault(),t.focus();return}})}),tT(this,G,e=>{if("Tab"===e.key&&this.searchable){e.preventDefault(),this._elSearchInput?.focus();return}}),tT(this,K,e=>{let t=this._elTriggerBtn;t&&(t.ariaActiveDescendantElement=e.target)}),tT(this,es,e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&(this.open=!1)}),tT(this,ei,e=>{"Tab"!==e.key||this.searchable||(e.preventDefault(),this.open=!1,this._elTriggerBtn?.focus())}),ra(this),rC(this),tM(this,j,this.getElementsByTagName(function(e){return iX.get(e)??e}("gds-option")))}get type(){return"gds-dropdown"}get options(){return Array.from(tC(this,j)).filter(e=>!e.hasAttribute("isplaceholder"))}get placeholder(){return Array.from(tC(this,j)).find(e=>e.hasAttribute("isplaceholder"))}get displayValue(){return(Array.isArray(this.value)?this.value.length>2?rF(rx`${this.value.length} selected`):this.value.reduce((e,t)=>e+this.options.find(e=>e.value===t)?.innerHTML+", ","").slice(0,-2):this.options.find(e=>e.selected)?.innerHTML)||this.placeholder?.innerHTML||""}connectedCallback(){super.connectedCallback(),i2.instance.apply(this,"gds-dropdown"),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleValueChange()})}render(){return i0`
      ${iB(this.label&&!this.hideLabel,()=>i0`<label for="trigger">${this.label}</label>`)}

      <span class="form-info"><slot name="sub-label"></slot></span>

      <gds-popover
        .label=${this.label}
        .open=${this.open}
        .calcMaxWidth=${e=>this.syncPopoverWidth?`${e.offsetWidth}px`:"auto"}
        .calcMaxHeight=${e=>`${this.maxHeight}px`}
        .disableMobileStyles=${this.disableMobileStyles}
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
          class=${iY({small:"small"===this.size})}
        >
          <slot name="trigger">
            <span>${oj(this.displayValue)}</span>
          </slot>
        </button>
        ${iB(this.searchable,()=>i0`<input
              id="searchinput"
              type="text"
              aria-label="${rF("Filter available options")}"
              placeholder="${rF("Search")}"
              @keydown=${tC(this,q)}
              @keyup=${tC(this,Y)}
            />`)}

        <gds-listbox
          id="listbox"
          .multiple="${rn(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${tD(this,X,Z)}"
          @gds-focus="${tC(this,K)}"
          @keydown=${tC(this,G)}
        >
          <slot gds-allow="gds-option gds-menu-heading"></slot>
        </gds-listbox>
      </gds-popover>

      <span class="form-info"><slot name="message"></slot></span>
    `}_handleLightDOMChange(){if(this.requestUpdate(),this.multiple){this._handleValueChange();return}void 0===this.value?this.placeholder?this.value=this.placeholder.value:this.value=this.options[0]?.value:this.placeholder||void 0!==this.options.find(e=>this.compareWith(e.value,this.value))||(this.options[0]&&(this.options[0].selected=!0),this.value=this.options[0]?.value)}_handleValueChange(){this._elListbox.then(e=>{e&&(Array.isArray(this.value)?e.selection=this.value:e.selection=[this.value])})}_onOpenChange(){let e=this.open;Array.from(tC(this,j)).forEach(t=>t.hidden=!e),e?tD(this,J,Q).call(this):(tD(this,ee,et).call(this),this._elSearchInput&&(this._elSearchInput.value="")),this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:e},bubbles:!0,composed:!0}))}};j=new WeakMap,Y=new WeakMap,q=new WeakMap,G=new WeakMap,K=new WeakMap,X=new WeakSet,Z=function(){this._elListbox.then(e=>{this.multiple?this.value=e.selection.map(e=>e.value):(this.value=e.selection[0]?.value,this.open=!1,setTimeout(()=>this._elTriggerBtn?.focus(),0)),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))})},J=new WeakSet,Q=function(){this.addEventListener("blur",tC(this,es)),this.addEventListener("gds-blur",tC(this,es)),this.addEventListener("keydown",tC(this,ei))},ee=new WeakSet,et=function(){this.removeEventListener("blur",tC(this,es)),this.removeEventListener("gds-blur",tC(this,es)),this.removeEventListener("keydown",tC(this,ei))},es=new WeakMap,ei=new WeakMap,nd.styles=nh,nd.shadowRootOptions={mode:"open",delegatesFocus:!0},tE([iO()],nd.prototype,"label",2),tE([iO({type:Boolean,reflect:!0})],nd.prototype,"open",2),tE([iO({type:Boolean,reflect:!0})],nd.prototype,"searchable",2),tE([iO({type:Boolean,reflect:!0})],nd.prototype,"multiple",2),tE([iO()],nd.prototype,"compareWith",2),tE([iO()],nd.prototype,"searchFilter",2),tE([iO({type:Boolean,attribute:"sync-popover-width"})],nd.prototype,"syncPopoverWidth",2),tE([iO({type:Number,attribute:"max-height"})],nd.prototype,"maxHeight",2),tE([iO()],nd.prototype,"size",2),tE([iO({type:Boolean,attribute:"hide-label"})],nd.prototype,"hideLabel",2),tE([iO()],nd.prototype,"disableMobileStyles",2),tE([iH("#trigger")],nd.prototype,"_elTriggerBtn",2),tE([iU("#listbox")],nd.prototype,"_elListbox",2),tE([iH("#searchinput")],nd.prototype,"_elSearchInput",2),tE([function(e={attributes:!0,childList:!0,subtree:!1,characterData:!0}){return(t,s,i)=>{let r;let o=t.connectedCallback,n=t.disconnectedCallback;t.connectedCallback=function(){o?.call(this),(r=new MutationObserver((e,t)=>{i.value?.call(this)})).observe(this,e)},t.disconnectedCallback=function(){n?.call(this),r.disconnect()}}}({attributes:!0,childList:!0,subtree:!0,characterData:!0})],nd.prototype,"_handleLightDOMChange",1),tE([i3("value")],nd.prototype,"_handleValueChange",1),tE([i3("open")],nd.prototype,"_onOpenChange",1),nd=tE([iZ("gds-dropdown")],nd);var nc=class extends iD{constructor(){super(...arguments),tT(this,ep),tT(this,eg),tT(this,ey),tT(this,em),tT(this,e_),this.value=0,this.length=2,this.min=0,this.max=Number.MAX_SAFE_INTEGER,this.displayValue=tD(this,ey,ev).call(this,this.value,this.length),tT(this,er,""),tT(this,eo,()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=2===this.length?this.min:new Date().getFullYear()-1),this.value=tD(this,em,eb).call(this,e+1),tD(this,eg,ef).call(this)}),tT(this,en,()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=2===this.length?this.max:new Date().getFullYear()+1),this.value=tD(this,em,eb).call(this,e-1),tD(this,eg,ef).call(this)}),tT(this,ea,e=>{e.stopPropagation(),e.preventDefault(),this.focus()}),tT(this,el,()=>{tD(this,e_,ew).call(this)}),tT(this,eh,()=>{""!==tC(this,er)&&(tD(this,e_,ew).call(this),this.value=tD(this,em,eb).call(this,parseInt(this.value.toString())),tD(this,eg,ef).call(this))}),tT(this,ed,e=>{e.stopPropagation(),e.preventDefault(),e.deltaY>0?tC(this,en).call(this):tC(this,eo).call(this)}),tT(this,ec,e=>{let t=!1;if("ArrowUp"===e.key)tC(this,eo).call(this),t=!0;else if("ArrowDown"===e.key)tC(this,en).call(this),t=!0;else{let s=parseInt(e.key);isNaN(s)||(tC(this,er).length<this.length&&(tM(this,er,tC(this,er)+s.toString()),this.value=parseInt(tC(this,er))),tC(this,er).length===this.length&&(this.value=tD(this,em,eb).call(this,this.value),tD(this,e_,ew).call(this),tD(this,ep,eu).call(this),tD(this,eg,ef).call(this)),t=!0)}t&&(e.preventDefault(),e.stopPropagation())})}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.setAttribute("role","spinbutton"),this.setAttribute("tabindex","0"),this.addEventListener("wheel",tC(this,ed)),this.addEventListener("keydown",tC(this,ec)),this.addEventListener("blur",tC(this,eh)),this.addEventListener("focus",tC(this,el)),this.addEventListener("click",tC(this,ea)),this.addEventListener("mousedown",tC(this,ea))}focus(e){super.focus(e),tC(this,el).call(this)}render(){return i0`${this.displayValue}`}_refreshDisplayValue(){this.displayValue=tD(this,ey,ev).call(this,this.value,this.length),this.setAttribute("aria-valuetext",this.value.toString())}};er=new WeakMap,eo=new WeakMap,en=new WeakMap,ea=new WeakMap,el=new WeakMap,eh=new WeakMap,ed=new WeakMap,ec=new WeakMap,ep=new WeakSet,eu=function(){let e=this.nextElementSibling;for(;e;){if(e instanceof nc){e.focus();break}e=e.nextElementSibling}},eg=new WeakSet,ef=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value.toString()}}))},ey=new WeakSet,ev=function(e,t){return String(e).padStart(t,"0")},em=new WeakSet,eb=function(e){return Math.max(this.min,Math.min(this.max,e))},e_=new WeakSet,ew=function(){tM(this,er,"")},nc.formAssociated=!0,tE([iO({type:Number})],nc.prototype,"value",2),tE([iO({type:Number})],nc.prototype,"length",2),tE([iO({type:Number,attribute:"aria-valuemin"})],nc.prototype,"min",2),tE([iO({type:Number,attribute:"aria-valuemax"})],nc.prototype,"max",2),tE([iR()],nc.prototype,"displayValue",2),tE([i3("value")],nc.prototype,"_refreshDisplayValue",1),nc=tE([iZ("gds-date-part-spinner")],nc);var np=class extends oq{};np._regularSVG='<path d="M3.75 9.75H20.25M7.75 4.75V2.75M16.25 4.75V2.75M3.75 4.75H20.25V20.25H3.75V4.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',np._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 2C8.16421 2 8.5 2.33579 8.5 2.75V4H15.5V2.75C15.5 2.33579 15.8358 2 16.25 2C16.6642 2 17 2.33579 17 2.75V4H20.25C20.6642 4 21 4.33579 21 4.75V20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25V4.75C3 4.33579 3.33579 4 3.75 4H7V2.75C7 2.33579 7.33579 2 7.75 2ZM4.5 10.5V19.5H19.5V10.5H4.5Z" fill="currentColor"/>',np._name="calendar",np=tE([iZ("gds-icon-calendar")],np);var nu=class extends oq{};nu._regularSVG='<path d="M15 20L7 12L15 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',nu._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5303 3.46967C15.8232 3.76256 15.8232 4.23744 15.5303 4.53033L8.06066 12L15.5303 19.4697C15.8232 19.7626 15.8232 20.2374 15.5303 20.5303C15.2374 20.8232 14.7626 20.8232 14.4697 20.5303L6.46967 12.5303C6.32902 12.3897 6.25 12.1989 6.25 12C6.25 11.8011 6.32902 11.6103 6.46967 11.4697L14.4697 3.46967C14.7626 3.17678 15.2374 3.17678 15.5303 3.46967Z" fill="currentColor"/>',nu._name="chevron left",nu=tE([iZ("gds-icon-chevron-left")],nu);var ng=class extends oq{};ng._regularSVG='<path d="M9 4L17 12L9 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',ng._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M8.46967 3.46967C8.76256 3.17678 9.23744 3.17678 9.53033 3.46967L17.5303 11.4697C17.671 11.6103 17.75 11.8011 17.75 12C17.75 12.1989 17.671 12.3897 17.5303 12.5303L9.53033 20.5303C9.23744 20.8232 8.76256 20.8232 8.46967 20.5303C8.17678 20.2374 8.17678 19.7626 8.46967 19.4697L15.9393 12L8.46967 4.53033C8.17678 4.23744 8.17678 3.76256 8.46967 3.46967Z" fill="currentColor"/>',ng._name="chevron right",ng=tE([iZ("gds-icon-chevron-right")],ng);var nf=sO`
  @layer base, reset, transitional-styles;
  @layer base {
    label {
      display: block;
    }
  }
`,ny=class extends rm{constructor(){super(...arguments),tT(this,ex),tT(this,eA),tT(this,eS),tT(this,eT),tT(this,eF),tT(this,eL),tT(this,eP),tT(this,eX),tT(this,e0),tT(this,e2),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.open=!1,this.label="",this.showWeekNumbers=!1,this.size="medium",this.hideLabel=!1,this.disabledWeekends=!1,this._focusedMonth=new Date().getMonth(),this._focusedYear=new Date().getFullYear(),this._dateFormatLayout=tD(this,eX,eZ).call(this,"y-m-d"),tT(this,e$,void 0),tT(this,eO,e=>{this._elTrigger.then(t=>{e.relatedTarget?.parentElement!==e.target&&document.getSelection()?.removeAllRanges()})}),tT(this,eR,e=>{this._elTrigger.then(e=>{document.getSelection()?.removeAllRanges();let t=new Range;t.setStart(e.firstChild,0),t.setEnd(e.lastChild,4),document.getSelection()?.addRange(t)})}),tT(this,ez,e=>{this._elField.then(t=>{e.currentTarget===t&&(e.preventDefault(),e.clipboardData?.setData("text/plain",this.displayValue))})}),tT(this,eH,e=>{this._elField.then(t=>{if(e.currentTarget!==t)return;e.preventDefault();let s=e.clipboardData?.getData("text/plain");if(!s)return;let i=new Date("-"),r="Invalid Date",o=s.split(this._dateFormatLayout.delimiter);if(3===o.length){let e=this._dateFormatLayout.layout,t=parseInt(o[e.findIndex(e=>"y"===e.token)]),s=parseInt(o[e.findIndex(e=>"m"===e.token)])-1,r=parseInt(o[e.findIndex(e=>"d"===e.token)]);isNaN(t)||isNaN(s)||isNaN(r)||(i=new Date(`${t}-${s+1}-${r}`))}(i.toString()!==r||(i=new Date(s)).toString()!==r)&&(this.value=i,tD(this,eL,eW).call(this))})}),tT(this,eU,e=>{this._elSpinners[0]?.focus()}),tT(this,eB,e=>{e.stopPropagation(),this.value=e.detail,this.open=!1,tD(this,eL,eW).call(this)}),tT(this,eI,e=>{e.stopPropagation(),this._focusedMonth=e.target?.value}),tT(this,eV,e=>{e.stopPropagation(),this._focusedYear=e.target?.value}),tT(this,ej,e=>{this._focusedMonth++,this._focusedMonth>11&&(this._focusedMonth=0,this._focusedYear++)}),tT(this,eY,e=>{this._focusedMonth--,this._focusedMonth<0&&(this._focusedMonth=11,this._focusedYear--)}),tT(this,eq,async()=>{this._focusedMonth=(await this._elCalendar).focusedMonth,this._focusedYear=(await this._elCalendar).focusedYear,this.value=(await this._elCalendar).focusedDate,this.requestUpdate(),tD(this,eP,eN).call(this)}),tT(this,eG,async e=>{if(e.target===e.currentTarget){if(this.open=e.detail.open,"close"===e.detail.reason){let e=(await this._elCalendar).value;ni(e||new Date(0),tC(this,e$)||new Date(0))||(this.value=e,tD(this,eL,eW).call(this)),this.value&&(this._focusedMonth=this.value.getMonth(),this._focusedYear=this.value.getFullYear())}"cancel"===e.detail.reason&&(this.value=tC(this,e$))}}),tT(this,eK,e=>{let t=Array.from(this._elSpinners).findIndex(t=>t===e.target);if("ArrowRight"===e.key){let e=this._elSpinners[t+1];e&&e.focus()}if("ArrowLeft"===e.key){let e=this._elSpinners[t-1];e&&e.focus()}}),tT(this,eJ,(e,t)=>{tC(this,eQ)[t]=e;let s=new Date;s.setFullYear(parseInt(tC(this,eQ).year)),s.setMonth(parseInt(tC(this,eQ).month)-1),s.setDate(parseInt(tC(this,eQ).day)),"Invalid Date"!==s.toString()&&(this.value=s,tD(this,eL,eW).call(this))}),tT(this,eQ,{year:"yyyy",month:"mm",day:"dd"})}get type(){return"gds-datepicker"}get dateformat(){return this._dateFormatLayout.layout.map(e=>e.token).join(this._dateFormatLayout.delimiter)}set dateformat(e){this._dateFormatLayout=tD(this,eX,eZ).call(this,e)}async getFocusedDate(){return this.open?this._elCalendar.then(e=>e.focusedDate):void 0}get displayValue(){return this._elInput.innerText.replace(/\s+/g,"")}async test_getDateCell(e){return this._elCalendar.then(t=>t.getDateCell(e))}connectedCallback(){super.connectedCallback(),i2.instance.apply(this,"gds-datepicker")}render(){return i0`${iB(this.label&&!this.hideLabel,()=>i0`<label for="spinner-0" id="label">${this.label}</label>`)}

      <div class="form-info"><slot name="sub-label"></slot></div>

      <div
        class=${iY({field:!0,small:"small"===this.size})}
        id="field"
        @click=${tC(this,eU)}
        @copy=${tC(this,ez)}
        @paste=${tC(this,eH)}
      >
        <div
          class=${iY({input:!0,"is-placeholder":!this.value})}
          @focusout=${tC(this,eO)}
        >
          ${function*(e,t){let s="function"==typeof t;if(void 0!==e){let i=-1;for(let r of e)i>-1&&(yield s?t(i):t),i++,yield r}}(function*(e,t){if(void 0!==e){let s=0;for(let i of e)yield t(i,s++)}}(this._dateFormatLayout.layout,(e,t)=>i0`<gds-date-part-spinner
                  id="spinner-${t}"
                  .length=${"y"===e.token?4:2}
                  .value=${tC(this,eQ)[e.name]}
                  aria-valuemin=${tD(this,eT,eM).call(this,e.name)}
                  aria-valuemax=${tD(this,eF,eD).call(this,e.name)}
                  aria-label=${tD(this,eS,eC).call(this,e.name)}
                  aria-describedby="label"
                  @keydown=${tC(this,eK)}
                  @change=${t=>tC(this,eJ).call(this,t.detail.value,e.name)}
                  @focus=${tC(this,eR)}
                  @touchend=${e=>{this.open=!0,e.preventDefault()}}
                ></gds-date-part-spinner>`),i0`<span>${this._dateFormatLayout.delimiter}</span>`)}
        </div>
        <button
          id="calendar-button"
          aria-label="${rF("Open calendar modal")}"
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
        @gds-ui-state=${tC(this,eG)}
        label=${this.label}
        id="calendar-popover"
        .placement=${"bottom-end"}
        .calcMinWidth=${()=>this.showWeekNumbers?"350px":"305px"}
        .useModalInMobileView=${!0}
        @focusin=${async e=>{e.target?.id!=="calendar-popover"||this._elCalendar.then(e=>e.focus())}}
      >
        <div class="header">
          <button
            @click=${tC(this,eY)}
            aria-label=${rF("Previous month")}
          >
            <gds-icon-chevron-left></gds-icon-chevron-left>
          </button>
          <gds-dropdown
            .value=${this._focusedMonth.toString()}
            @change=${tC(this,eI)}
            .maxHeight=${300}
            label="${rF("Month")}"
            style="width:120px"
            size="small"
            hide-label
          >
            <gds-option value="0">${rF("January")}</gds-option>
            <gds-option value="1">${rF("February")}</gds-option>
            <gds-option value="2">${rF("March")}</gds-option>
            <gds-option value="3">${rF("April")}</gds-option>
            <gds-option value="4">${rF("May")}</gds-option>
            <gds-option value="5">${rF("June")}</gds-option>
            <gds-option value="6">${rF("July")}</gds-option>
            <gds-option value="7">${rF("August")}</gds-option>
            <gds-option value="8">${rF("September")}</gds-option>
            <gds-option value="9">${rF("October")}</gds-option>
            <gds-option value="10">${rF("November")}</gds-option>
            <gds-option value="11">${rF("December")}</gds-option>
          </gds-dropdown>
          <gds-dropdown
            .value=${this._focusedYear.toString()}
            @change=${tC(this,eV)}
            .maxHeight=${300}
            label="${rF("Year")}"
            size="small"
            hide-label
          >
            ${o5(tC(this,e0,e1),e=>e,e=>i0`<gds-option value=${e}>${e}</gds-option>`)}
          </gds-dropdown>
          <button
            @click=${tC(this,ej)}
            aria-label=${rF("Next month")}
          >
            <gds-icon-chevron-right></gds-icon-chevron-right>
          </button>
        </div>

        <gds-calendar
          id="calendar"
          @change=${tC(this,eB)}
          @gds-date-focused=${tC(this,eq)}
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
            @click=${e=>{e.stopPropagation(),this.value=void 0,this.open=!1,tD(this,eL,eW).call(this)}}
          >
            ${rF("Clear")}
          </gds-button>
          ${o1(tD(this,ex,ek).call(this),iy)}
          <gds-button
            rank="tertiary"
            size="small"
            @click=${e=>{e.stopPropagation(),tD(this,eA,eE).call(this,new Date)}}
          >
            ${rF("Today")}
          </gds-button>
        </div>
      </gds-popover> `}_handleValueChange(){if(!this.value){tM(this,eQ,{year:"yyyy",month:"mm",day:"dd"});return}let e=this.value;this._focusedMonth=e.getMonth(),this._focusedYear=e.getFullYear();let t=e.getFullYear().toString(),s=(e.getMonth()+1).toString().padStart(2,"0"),i=e.getDate().toString().padStart(2,"0");tM(this,eQ,{year:t,month:s,day:i})}_handleOpenChange(){this.open&&(tM(this,e$,this.value),this._elCalendar.then(e=>e.focus()))}};e$=new WeakMap,ex=new WeakSet,ek=async function(){let e;let t=await this.getFocusedDate(),s="";return t&&t>this.max?(s=rF("Last available date"),e=e=>{e.stopPropagation(),tD(this,eA,eE).call(this,this.max)}):t&&t<this.min&&(s=rF("First available date"),e=e=>{e.stopPropagation(),tD(this,eA,eE).call(this,this.min)}),i0`${iB(s.length>0,()=>i0`<gds-button rank="tertiary" size="small" @click=${e}>
          ${s}
        </gds-button>`,()=>iy)}`},eA=new WeakSet,eE=function(e){let t=new Date(e);this._elCalendar.then(e=>e.focusedDate=t).then(tC(this,eq))},eS=new WeakSet,eC=function(e){return({year:rF("Year"),month:rF("Month"),day:rF("Day")})[e]},eT=new WeakSet,eM=function(e){return({year:1900,month:1,day:1})[e]},eF=new WeakSet,eD=function(e){return({year:9999,month:12,day:31})[e]},eL=new WeakSet,eW=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value}}))},eP=new WeakSet,eN=function(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value}}))},eO=new WeakMap,eR=new WeakMap,ez=new WeakMap,eH=new WeakMap,eU=new WeakMap,eB=new WeakMap,eI=new WeakMap,eV=new WeakMap,ej=new WeakMap,eY=new WeakMap,eq=new WeakMap,eG=new WeakMap,eK=new WeakMap,eX=new WeakSet,eZ=function(e){let t=e.replace(/[a-z0-9]/gi,"")[0],s=e.split(t),i=s.findIndex(e=>"y"===e),r=s.findIndex(e=>"m"===e),o=s.findIndex(e=>"d"===e);if(-1===i||-1===r||-1===o)throw Error("Invalid date format for <gds-datepicker>");return{delimiter:t,layout:[i,r,o].sort((e,t)=>e-t).map(e=>s[e]).map(e=>({token:e,name:"y"===e?"year":"m"===e?"month":"day"}))}},eJ=new WeakMap,eQ=new WeakMap,e0=new WeakSet,e1=function(){let e=this.min.getFullYear(),t=this.max.getFullYear(),s=tC(this,e2,e5),i=this.value?.getFullYear();return{*[Symbol.iterator](){s&&(yield i);for(let s=e;s<=t;s++)yield s}}},e2=new WeakSet,e5=function(){return!!this.value&&(this.value.getFullYear()<this.min.getFullYear()||this.value.getFullYear()>this.max.getFullYear())},ny.styles=[nf],ny.shadowRootOptions={mode:"open",delegatesFocus:!0},tE([iO({converter:nr})],ny.prototype,"value",2),tE([iO({converter:nr})],ny.prototype,"min",2),tE([iO({converter:nr})],ny.prototype,"max",2),tE([iO({type:Boolean})],ny.prototype,"open",2),tE([iO()],ny.prototype,"label",2),tE([iO({type:Boolean,attribute:"show-week-numbers"})],ny.prototype,"showWeekNumbers",2),tE([iO()],ny.prototype,"size",2),tE([iO({type:Boolean,attribute:"hide-label"})],ny.prototype,"hideLabel",2),tE([iO()],ny.prototype,"dateformat",1),tE([iO({type:Boolean,attribute:"disabled-weekends"})],ny.prototype,"disabledWeekends",2),tE([iO({converter:{fromAttribute:e=>e.split(",").map(e=>new Date(e.trim())),toAttribute:e=>JSON.stringify(e.map(e=>e.toISOString()))},attribute:"disabled-dates"})],ny.prototype,"disabledDates",2),tE([iU("#calendar-button")],ny.prototype,"test_calendarButton",2),tE([iR()],ny.prototype,"_focusedMonth",2),tE([iR()],ny.prototype,"_focusedYear",2),tE([iR()],ny.prototype,"_dateFormatLayout",2),tE([iU("#calendar")],ny.prototype,"_elCalendar",2),tE([iU("#calendar-button")],ny.prototype,"_elTrigger",2),tE([iU("#field")],ny.prototype,"_elField",2),tE([(t,s)=>iz(t,s,{get(){return(this.renderRoot??(e??=document.createDocumentFragment())).querySelectorAll("[role=spinbutton]")}})],ny.prototype,"_elSpinners",2),tE([iH(".input")],ny.prototype,"_elInput",2),tE([i3("value")],ny.prototype,"_handleValueChange",1),tE([i3("open")],ny.prototype,"_handleOpenChange",1),ny=tE([iZ("gds-datepicker")],ny);var nv={0:"0px","2xs":"320px",xs:"425px",s:"768px",m:"1024px",l:"1280px",xl:"1440px","2xl":"2560px","3xl":"3840px","4xl":"4320px","5xl":"6016px","6xl":"7680px"},nm=/^([<|>]=?)?([0-9a-z]+)/,nb=["{","}",";",","],n_=[" ","/n"];function nw(e){return(t,s)=>{let i=e?.selector??String(":host"),r=e?.property??String(s),o=e?.valueTemplate??(e=>`var(--gds-space-${e})`),n=e?.styleTemplate;iO({attribute:e?.attribute})(t,s),i3(s)(t,s,{value:function(e,t){let a=function(e){let t;let s=[],i="bp",r=!1;for(let o of e){if(!nb.includes(o)){if("val"===i&&t)"}"!==o&&t.values.push(o);else{if(t&&r){t.breakpoint+=`,${o}`,r=!1;continue}t?(i="val",t.values.push(t.breakpoint),t.values.push(o),t.breakpoint="-"):(t={breakpoint:o,values:[]},s.push(t))}continue}if(","===o){r=!0;continue}if("{"===o){i="val";continue}if("}"===o||";"===o){i="bp",t=void 0;continue}}return s.map(e=>(0===e.values.length&&(e.values.push(e.breakpoint),e.breakpoint="-"),e))}(function(e){let t=[],s="";for(let i=0;i<e.length;i++){let r=e[i];if(n_.includes(r)||(s+=r),nb.includes(r)){t.push(s.slice(0,-1)),t.push(r),s="";continue}if(n_.includes(r)||i===e.length-1){t.push(s),s="";continue}}return t.filter(e=>""!==e)}(t)),l=function(e,t,s,i=e=>e,r=(e,t)=>`${e}: ${t.join(" ")};`){let o="";for(let n of s){let s=("-"===n.breakpoint?[{condition:">=",value:"0"}]:n.breakpoint.split(",").map(e=>{let t=e.trim().match(nm);if(!t)throw Error(`Invalid breakpoint specifier: ${e}`);return{condition:t[1],value:t[2]}})).map(e=>`(${e.condition?.includes("<")?"max-width":"min-width"}: ${nv[e.value]??e.value})`).join(" and ");o+=`@media ${s} {${e}{${r(t,n.values.map(i))}}}`}return o}(i,r,a,o,n);this[`__${String(s)}_ast`]=a,this._dynamicStylesController.inject(`sep_${String(s)}`,sN(l))}})}}var n$=sO`
  :host {
    --_c: 12;
    --_grid-col: repeat(var(--_c), 1fr);
    display: grid;
    width: 100%;
    grid-template-columns: var(--_grid-col);
    grid-column-gap: var(--_gap-column, 0px);
    grid-row-gap: var(--_gap-row, 0px);
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
`,nx=class extends i1{render(){return i0`<slot></slot>`}};nx.styles=[rg,n$],tE([nw({property:"--_c",valueTemplate:e=>e})],nx.prototype,"columns",2),tE([nw({styleTemplate:(e,t)=>{let s=t[0],i=t[1]||s;return`--_gap-column: ${s}; --_gap-row: ${i};`}})],nx.prototype,"gap",2),tE([nw()],nx.prototype,"padding",2),tE([nw({attribute:"auto-columns",property:"--_col-width",valueTemplate:e=>`${e}px`})],nx.prototype,"autoColumns",2),nx=tE([iZ("gds-grid")],nx);var nk=sO`
  :host {
    box-sizing: border-box;
  }
`,nA=class extends i1{render(){return i0`<slot></slot>`}};nA.styles=[rg,nk],tE([nw({valueTemplate:e=>e})],nA.prototype,"display",2),tE([nw({valueTemplate:e=>{let[t,s]=e.split("/");return s?`color-mix(in srgb, var(--gds-sys-color-${t}) ${100*parseFloat(s)}%, transparent 0%)`:`var(--gds-sys-color-${t})`}})],nA.prototype,"color",2),tE([nw({valueTemplate:e=>{let[t,s]=e.split("/");return s?`color-mix(in srgb, var(--gds-sys-color-${t}) ${100*parseFloat(s)}%, transparent 0%)`:`var(--gds-sys-color-${t})`}})],nA.prototype,"background",2),tE([nw({valueTemplate:e=>e})],nA.prototype,"opacity",2),tE([nw()],nA.prototype,"padding",2),tE([nw()],nA.prototype,"margin",2),tE([nw({valueTemplate:e=>e})],nA.prototype,"position",2),tE([nw({valueTemplate:e=>e})],nA.prototype,"inset",2),tE([nw({valueTemplate:e=>e})],nA.prototype,"overflow",2),tE([nw({property:"grid-column",valueTemplate:e=>`${e}`})],nA.prototype,"column",2),tE([nw({property:"grid-row",valueTemplate:e=>`${e}`})],nA.prototype,"row",2),tE([nw({valueTemplate:e=>e})],nA.prototype,"height",2),tE([nw({valueTemplate:e=>e})],nA.prototype,"width",2),tE([nw({property:"z-index",valueTemplate:e=>e})],nA.prototype,"stack",2),nA=tE([iZ("gds-container")],nA);var nE=sO`
  :host {
    --gds-shadow-xs: 0px 0px 1px 0px rgba(0, 0, 0, 0.1),
      0px 0px 1px 0px rgba(0, 0, 0, 0.1);
    --gds-shadow-s: 0px 1px 3px 0px rgba(0, 0, 0, 0.1),
      0px 1px 2px 0px rgba(0, 0, 0, 0.06);
    --gds-shadow-m: 0px 4px 8px -2px rgba(0, 0, 0, 0.1),
      0px 2px 4px -2px rgba(0, 0, 0, 0.06);
    --gds-shadow-l: 0px 12px 16px -4px rgba(0, 0, 0, 0.08),
      0px 4px 6px -2px rgba(0, 0, 0, 0.03);
    --gds-shadow-xl: 0px 20px 24px -4px rgba(0, 0, 0, 0.08),
      0px 8px 8px -4px rgba(0, 0, 0, 0.03);
    display: block;
  }
`,nS=class extends nA{render(){return i0`<slot></slot>`}};nS.styles=[rg,nE],tE([nw({property:"box-shadow",valueTemplate:e=>`var(--gds-shadow-${e})`})],nS.prototype,"shadow",2),tE([nw({valueTemplate:e=>{let[t,s]=e.split("/");return`var(--gds-space-${t}) solid ${s?`var(--gds-sys-color-${s})`:"currentColor"}`},styleTemplate:(e,t)=>{let s=t[0],i=t.length>1?t[1]:s,r=t.length>2?t[2]:s,o=t.length>3?t[3]:s;return`border-top: ${s}; border-right: ${i}; border-bottom: ${r}; border-left: ${o};`}})],nS.prototype,"border",2),tE([nw({property:"border-radius",valueTemplate:e=>`var(--gds-space-${e})`})],nS.prototype,"radius",2),tE([nw({property:"backdrop-filter",valueTemplate:e=>`blur(${e})`})],nS.prototype,"filter",2),tE([nw({property:"mask-image",valueTemplate:e=>`linear-gradient(to ${e}, currentColor 40%, transparent)`})],nS.prototype,"mask",2),nS=tE([iZ("gds-card")],nS);var nC=sO`
  :host {
    gap: var(--_gap-column) var(--_gap-row);
    box-sizing: border-box;
  }
`,nT=class extends nA{connectedCallback(){super.connectedCallback(),this.display="flex"}render(){return i0`<slot></slot>`}};nT.styles=[rg,nC],tE([nw({styleTemplate:(e,t)=>{let s=t[0],i=t[1]||s;return`--_gap-column: ${s}; --_gap-row: ${i};`}})],nT.prototype,"gap",2),tE([nw({property:"align-items",valueTemplate:e=>e})],nT.prototype,"align",2),tE([nw({property:"justify-content",valueTemplate:e=>e})],nT.prototype,"justify",2),tE([nw({property:"flex-direction",valueTemplate:e=>e})],nT.prototype,"direction",2),nT=tE([iZ("gds-flex")],nT);var nM=sO`
  :host {
    display: contents;
  }

  figure {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 0;
    width: 100%;
    height: auto;
    overflow: hidden;
  }

  img {
    display: flex;
    width: 100%;
    height: 100%;
  }
`,nF=class extends i1{render(){return i0`<figure><img src="${this.src}" alt="${this.alt}" /></figure>`}};nF.styles=[rg,nM],tE([nw({property:"aspect-ratio",selector:"figure",valueTemplate:e=>e})],nF.prototype,"ratio",2),tE([nw({property:"object-position",selector:"img",valueTemplate:e=>e})],nF.prototype,"position",2),tE([nw({property:"inset",selector:"figure",valueTemplate:e=>e})],nF.prototype,"inset",2),tE([nw({property:"width",valueTemplate:e=>e})],nF.prototype,"width",2),tE([nw({property:"height",valueTemplate:e=>e})],nF.prototype,"height",2),tE([nw({property:"opacity",selector:"figure",valueTemplate:e=>e})],nF.prototype,"opacity",2),tE([nw({property:"object-fit",selector:"img",valueTemplate:e=>e})],nF.prototype,"fit",2),tE([iO()],nF.prototype,"src",2),tE([iO()],nF.prototype,"alt",2),tE([nw({property:"border-radius",selector:"figure",valueTemplate:e=>`var(--gds-space-${e})`})],nF.prototype,"radius",2),nF=tE([iZ("gds-img")],nF);var nD=sO`
  :host {
    display: contents;
  }

  figure {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 0;
    width: 100%;
    height: auto;
    overflow: hidden;
  }

  video {
    display: flex;
    width: 100%;
    height: 100%;
  }
`,nL=class extends i1{applyVideoSettings(){this.videoElement&&(this.videoElement.src=this.src||"",this.videoElement.poster=this.poster||"",this.videoElement.muted=this.muted||!1,this.videoElement.autoplay=this.autoplay||!1,this.videoElement.loop=this.loop||!1,this.videoElement.playsInline=this.playsinline||!1)}render(){return i0`<figure><video></video></figure>`}firstUpdated(){this.applyVideoSettings()}};nL.styles=[rg,nD],tE([nw({property:"aspect-ratio",selector:"figure",valueTemplate:e=>e})],nL.prototype,"ratio",2),tE([nw({property:"object-position",selector:"video",valueTemplate:e=>e})],nL.prototype,"position",2),tE([nw({property:"inset",selector:"figure",valueTemplate:e=>e})],nL.prototype,"inset",2),tE([nw({property:"width",valueTemplate:e=>e})],nL.prototype,"width",2),tE([nw({property:"height",valueTemplate:e=>e})],nL.prototype,"height",2),tE([nw({property:"opacity",selector:"figure",valueTemplate:e=>e})],nL.prototype,"opacity",2),tE([nw({property:"object-fit",selector:"video",valueTemplate:e=>e})],nL.prototype,"fit",2),tE([nw({property:"pointer-events",selector:"video",valueTemplate:e=>e})],nL.prototype,"events",2),tE([nw({property:"border-radius",selector:"figure",valueTemplate:e=>`var(--gds-sys-radii-${e})`})],nL.prototype,"radius",2),tE([iO()],nL.prototype,"src",2),tE([iO()],nL.prototype,"poster",2),tE([iO({type:Boolean})],nL.prototype,"muted",2),tE([iO({type:Boolean})],nL.prototype,"playsinline",2),tE([iO({type:Boolean})],nL.prototype,"autoplay",2),tE([iO({type:Boolean})],nL.prototype,"loop",2),tE([iH("video")],nL.prototype,"videoElement",2),nL=tE([iZ("gds-video")],nL);var nW=sO`
  :host {
    display: block;
  }

  * {
    margin: unset;
    font-weight: normal;
    font-size: inherit;
    line-height: inherit;
    text-wrap: inherit;
  }

  :host([lines]) {
    * {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      -webkit-line-clamp: var(--_lines);
    }
  }
`,nP=class extends i1{constructor(){super(...arguments),this.tag="p"}createTag(){let e=document.createElement(this.tag);return e.appendChild(document.createElement("slot")),e}render(){return i0`${this.createTag()}`}};nP.styles=[rg,nW],tE([iO({type:String})],nP.prototype,"tag",2),tE([nw({valueTemplate:e=>`${e}`,styleTemplate:(e,t)=>{let s=t[0];return`font-size: var(--gds-text-size-${s}); line-height: var(--gds-text-line-height-${s});`}})],nP.prototype,"size",2),tE([nw()],nP.prototype,"margin",2),tE([nw({property:"text-wrap",valueTemplate:e=>e})],nP.prototype,"wrap",2),tE([nw({property:"text-transform",valueTemplate:e=>e})],nP.prototype,"transform",2),tE([nw({property:"max-width",valueTemplate:e=>`${e}ch`})],nP.prototype,"length",2),tE([nw({property:"min-width",valueTemplate:e=>`${e}ch`})],nP.prototype,"min",2),tE([nw({property:"text-align",valueTemplate:e=>e})],nP.prototype,"align",2),tE([nw({property:"--_lines",valueTemplate:e=>e})],nP.prototype,"lines",2),tE([nw({property:"color",valueTemplate:e=>{let[t,s]=e.split("/");return s?`color-mix(in srgb, var(--gds-sys-color-${t}) ${100*parseFloat(s)}%, transparent 0%)`:`var(--gds-sys-color-${t})`}})],nP.prototype,"color",2),nP=tE([iZ("gds-text")],nP);var nN=sO`
  :host {
    display: contents;
  }

  hr {
    border-radius: 200px;
    background: currentColor;
    font-size: 0;
    border: 0;
    height: 1px;
    width: 100%;
    margin-top: calc((var(--_size) / 2) - (1px / 2));
    margin-bottom: calc((var(--_size) / 2) - (1px / 2));
  }
`,nO=class extends i1{render(){return i0`<hr />`}};nO.styles=[rg,nN],tE([nw({property:"color",valueTemplate:e=>{let[t,s]=e.split("/");return s?`color-mix(in srgb, var(--gds-sys-color-${t}) ${100*parseFloat(s)}%, transparent 0%)`:`var(--gds-sys-color-${t})`}})],nO.prototype,"color",2),tE([nw({property:"--_size",selector:"hr",valueTemplate:e=>`var(--gds-space-${e})`})],nO.prototype,"size",2),tE([nw({property:"opacity",selector:"hr",valueTemplate:e=>e})],nO.prototype,"opacity",2),nO=tE([iZ("gds-divider")],nO);var nR=class extends i1{render(){return i0`<div></div>`}};nR.styles=[rg],tE([nw({property:"height",selector:"div",valueTemplate:e=>`var(--gds-space-${e})`})],nR.prototype,"size",2),nR=tE([iZ("gds-spacer")],nR);var nz=class extends i1{connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}render(){return i0`<slot></slot>`}};nz=tE([iZ("gds-list-item")],nz);var nH=class extends i1{constructor(){super(...arguments),this.label=""}connectedCallback(){super.connectedCallback(),ra(this),i2.instance.apply(this,"gds-grouped-list")}render(){return i0`${iB(this.label,()=>i0`<div class="gds-list-heading" aria-hidden="true" id="label">
            ${this.label}
          </div>`)}
      <div role="list" aria-labelledby="label">
        <slot gds-allow="gds-list-item"></slot>
      </div>`}};function nU(){return(e,t,s)=>{let i=e.connectedCallback,r=e.disconnectedCallback;e.connectedCallback=function(){i?.call(this),this.__resizeObservers=this.__resizeObservers||{},this.__resizeObserver_tids=this.__resizeObserver_tids||{},this.__resizeObservers[t]=new ResizeObserver(()=>{this.__resizeObserver_tids[t]&&clearTimeout(this.__resizeObserver_tids[t]),this.__resizeObserver_tids[t]=setTimeout(()=>{s.value?.call(this)},20)}),this.__resizeObservers[t].observe(this)},e.disconnectedCallback=function(){r?.call(this),this.__resizeObservers[t].disconnect()}}}tE([iO()],nH.prototype,"label",2),nH=tE([iZ("gds-grouped-list")],nH);var nB=`:host {
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
`,nI=class extends i1{constructor(){super(...arguments),this.selected=!1}connectedCallback(){super.connectedCallback(),i2.instance.apply(this,"gds-segmented"),this.setAttribute("role","listitem")}render(){return i0`<button aria-current=${String(this.selected)}>
      <slot></slot>
    </button>`}};nI.styles=[...rg,sN(nB)],tE([iO({type:Boolean,reflect:!0})],nI.prototype,"selected",2),tE([iO()],nI.prototype,"value",2),nI=tE([iZ("gds-segment")],nI);var nV=`:host {
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
`,nj={small:36,medium:44},nY=e=>e?0:4,nq=class extends i1{constructor(){super(...arguments),tT(this,th),this.segMinWidth=100,this.size="medium",tT(this,e3,void 0),this._showPrevButton=!1,this._showNextButton=!1,tT(this,e6,0),tT(this,e7,0),tT(this,e4,0),tT(this,e8,0),tT(this,e9,0),tT(this,te,0),tT(this,tt,0),tT(this,ts,!1),tT(this,ti,e=>{tM(this,te,e.clientX),tM(this,tt,tC(this,e8)),tM(this,ts,!0)}),tT(this,tr,e=>{if(!tC(this,ts))return;e.preventDefault();let t=e.clientX-tC(this,te);if(!(5>Math.abs(t)))try{this._elSegments.hasPointerCapture(e.pointerId)||this._elSegments.setPointerCapture(e.pointerId),tM(this,e8,tC(this,tt)+t),tC(this,tl).call(this)}catch{}}),tT(this,to,e=>{if(tC(this,ts)){tM(this,ts,!1);try{this._elSegments.releasePointerCapture(e.pointerId),tC(this,tn).call(this)}catch{}}}),tT(this,tn,()=>{tM(this,e6,Math.round(-tC(this,e8)/tC(this,e7))),tC(this,ta).call(this)}),tT(this,ta,(e=!1)=>{let t=()=>{let e=this.segments.length,t=this._elTrack.offsetWidth;if(t/e>this.segMinWidth)return{count:e,segmentWidth:(t-nY(this._isUsingTransitionalStyles)*(e-1))/e};let s=Math.floor((this.offsetWidth-2*nj[this.size])/this.segMinWidth),i=(t-nY(this._isUsingTransitionalStyles)*(s-1))/s;return{count:s,segmentWidth:i}},{count:s}=t();e&&(tC(this,e9)>=tC(this,e6)+s&&tM(this,e6,tC(this,e9)-s+1),tC(this,e9)<tC(this,e6)&&tM(this,e6,tC(this,e9)));let i=this.segments.length-s,r=tC(this,e6)>=i,o=0>=tC(this,e6);r&&tM(this,e6,i),o&&tM(this,e6,0),tC(this,tu).call(this,s),this.updateComplete.then(()=>{let{segmentWidth:e,count:s}=t();this.segments.forEach(t=>{t.style.width=e+"px"}),tM(this,e8,-tC(this,e6)*e-nY(this._isUsingTransitionalStyles)*tC(this,e6)),tC(this,tl).call(this),tM(this,e7,e),tM(this,e4,e),tC(this,tg).call(this)})}),tT(this,tl,()=>{window.requestAnimationFrame(()=>{this._elSegments.style.transform=`translateX(${tC(this,e8)}px)`})}),tT(this,tc,()=>{tF(this,e6)._--,tC(this,ta).call(this)}),tT(this,tp,()=>{tF(this,e6)._++,tC(this,ta).call(this)}),tT(this,tu,e=>{this._showPrevButton=tC(this,e6)>0,this._showNextButton=tC(this,e6)<this.segments.length-e}),tT(this,tg,()=>{let e=this.segments.find(e=>e.selected);if(e){let t=this.segments.indexOf(e),s=t*tC(this,e4)+nY(this._isUsingTransitionalStyles)*t;this._elIndicator.style.transform=`translateX(${s}px)`,this._elIndicator.style.width=`${tC(this,e4)}px`}else this._elIndicator.style.transform="translateX(-100%)",this._elIndicator.style.width="0px"}),tT(this,tf,e=>{let t=this.segments.find(t=>t===e.target||t.contains(e.target));t&&(this.segments.forEach(e=>e.selected=!1),t.selected=!0,tM(this,e3,t.value),tC(this,tg).call(this),this.dispatchEvent(new CustomEvent("change",{detail:{segment:t},bubbles:!0,composed:!0})))}),tT(this,ty,()=>{tC(this,e3)&&this.updateComplete.then(()=>{let e=this.segments.find(e=>e.value===tC(this,e3));e&&(this.segments.forEach(e=>e.selected=!1),e.selected=!0,tM(this,e9,this.segments.indexOf(e)),tC(this,ta).call(this,!0))})})}get value(){return tC(this,e3)}set value(e){tM(this,e3,e),tC(this,ty).call(this)}get segments(){return this._elSlot?this._elSlot.assignedElements():[]}connectedCallback(){super.connectedCallback(),i2.instance.apply(this,"gds-segmented-control"),this.addEventListener("focusin",e=>{e.target instanceof nI&&(tM(this,e9,this.segments.indexOf(e.target)),tC(this,ta).call(this,!0))})}render(){return i0`${iB(this._showPrevButton,()=>i0`<button
            id="btn-prev"
            @click=${tC(this,tc)}
            aria-label=${rF("Scroll right")}
          >
            <gds-icon-chevron-left />
          </button>`)}
      <div
        id="track"
        @scroll=${()=>{this._elTrack.scrollLeft=0}}
      >
        <div
          id="segments"
          @pointerdown=${tC(this,ti)}
          @pointermove=${tC(this,tr)}
          @touchmove=${tC(this,tr)}
          @pointerup=${tC(this,to)}
          @pointercancel=${tC(this,to)}
          role="list"
        >
          <slot
            gds-allow="gds-segment"
            @click=${tC(this,tf)}
            @slotchange=${tD(this,th,td)}
            role="none"
          ></slot>
          <div id="indicator" role="none"></div>
        </div>
      </div>
      ${iB(this._showNextButton,()=>i0`<button
            id="btn-next"
            @click=${tC(this,tp)}
            aria-label=${rF("Scroll right")}
          >
            <gds-icon-chevron-right />
          </button>`)}`}_recalculateMinWidth(){this.updateComplete.then(()=>tC(this,ta).call(this))}};e3=new WeakMap,e6=new WeakMap,e7=new WeakMap,e4=new WeakMap,e8=new WeakMap,e9=new WeakMap,te=new WeakMap,tt=new WeakMap,ts=new WeakMap,ti=new WeakMap,tr=new WeakMap,to=new WeakMap,tn=new WeakMap,ta=new WeakMap,tl=new WeakMap,th=new WeakSet,td=function(){let e=this.segments.find(e=>e.selected)?.value;e&&tM(this,e3,e),tC(this,ta).call(this)},tc=new WeakMap,tp=new WeakMap,tu=new WeakMap,tg=new WeakMap,tf=new WeakMap,ty=new WeakMap,nq.styles=[rg,sN(nV)],tE([iO({type:Number,attribute:"seg-min-width"})],nq.prototype,"segMinWidth",2),tE([iO()],nq.prototype,"size",2),tE([iO()],nq.prototype,"value",1),tE([iH("slot")],nq.prototype,"_elSlot",2),tE([iH("#indicator")],nq.prototype,"_elIndicator",2),tE([iH("#track")],nq.prototype,"_elTrack",2),tE([iH("#segments")],nq.prototype,"_elSegments",2),tE([iR()],nq.prototype,"_showPrevButton",2),tE([iR()],nq.prototype,"_showNextButton",2),tE([nU(),i3("segMinWidth")],nq.prototype,"_recalculateMinWidth",1),nq=tE([iZ("gds-segmented-control")],nq);var nG=class extends i1{constructor(){super(...arguments),this.colorScheme="light"}connectedCallback(){super.connectedCallback(),i2.instance.apply(this,"gds-theme")}render(){return i0`<slot></slot>`}};nG.styles=sO`
    :host {
      display: contents;
    }
  `,tE([iO({reflect:!0,attribute:"color-scheme"})],nG.prototype,"colorScheme",2),nG=tE([iZ("gds-theme")],nG);var nK=class extends oq{};nK._regularSVG='<path d="M2.75 15.0938L9 20.25L21.25 3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',nK._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M21.7426 2.99454C22.2979 3.40464 22.4157 4.18729 22.0056 4.74263L10.0056 20.9926C9.80433 21.2652 9.50107 21.4443 9.16524 21.4891C8.82942 21.5339 8.4898 21.4404 8.22417 21.2301L2.22417 16.4801C1.6829 16.0516 1.59149 15.2655 2.01999 14.7242C2.4485 14.1829 3.23466 14.0915 3.77593 14.52L8.76241 18.4677L19.9945 3.25753C20.4046 2.70218 21.1873 2.58444 21.7426 2.99454Z" fill="currentColor"/>',nK._name="checkmark",nK=tE([iZ("gds-icon-checkmark")],nK);var nX=sO`
  @layer base, reset, transitional-styles;
  @layer base {
    .btn-p {
      padding: 0 0.75rem;
    }
    .icon {
      width: 1rem;
    }
  }
`,nZ=class extends i1{constructor(){super(...arguments),this.selected=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),i2.instance.apply(this,"gds-filter-chip"),this._button.then(e=>{i2.instance.apply(e,"gds-button")})}render(){let e={"btn-p":!this.selected};return i0`<gds-button
      class="btn"
      size="small"
      .rank=${this.selected?"primary":"secondary"}
      variant=${this._isUsingTransitionalStyles?"ghost":"default"}
      gds-role="option"
      gds-aria-selected=${this.selected}
    >
      <span class=${iY(e)}><slot></slot></span>
      <gds-icon-checkmark
        slot="trail"
        style="display: ${this.selected?"contents":"none"}"
        width="16"
        height="16"
        class="icon"
      ></gds-icon-checkmark>
    </gds-button>`}};nZ.styles=[nX],tE([iO({reflect:!0,type:Boolean})],nZ.prototype,"selected",2),tE([iO()],nZ.prototype,"value",2),tE([iU(function(e){return iX.get(e)??e}("gds-button"))],nZ.prototype,"_button",2),nZ=tE([iZ("gds-filter-chip")],nZ);var nJ=sO`
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
`,nQ=class extends rm{constructor(){super(...arguments),tT(this,t_),tT(this,t$),this.multiple=!1,this.label="",this.rowCollapse=!1,this._collapsed=!1,tT(this,tv,e=>{let t=this.chips.find(t=>t===e.target||t.contains(e.target));t&&(this.multiple&&Array.isArray(this.value)?t.selected?this.value=this.value.filter(e=>e!==t.value):this.value=[...this.value,t.value]:this.value=t.value,this.dispatchEvent(new CustomEvent("change",{detail:{clickedChip:t,value:this.value},bubbles:!0,composed:!0})))}),tT(this,tm,3),tT(this,tb,0)}get chips(){return this._elSlot?this._elSlot.assignedElements():[]}render(){let e={collapse:this._collapsed};return i0`<div
      class="chips ${iY(e)}"
      role="listbox"
      aria-label=${this.label}
      aria-multiselectable=${this.multiple}
    >
      <slot
        gds-allow="gds-filter-chip"
        @click=${tC(this,tv)}
        @slotchange=${tD(this,t$,tx)}
        role="none"
      ></slot>
    </div>`}_handleResize(){if(!this.rowCollapse)return;let e=tD(this,t_,tw).call(this),t=this.offsetHeight,s=this.offsetWidth;t>=e*tC(this,tm)&&(this._collapsed=!0,tM(this,tb,s)),s>tC(this,tb)&&(this._collapsed=!1)}_updateSelectedFromValue(){this.value&&(this.multiple&&!Array.isArray(this.value)&&(this.value=[this.value]),!this.multiple&&Array.isArray(this.value)&&(this.value=this.value[0]),this.updateComplete.then(()=>{this.chips.forEach(e=>{e.selected=this.multiple?this.value.includes(e.value):this.value===e.value})}))}};tv=new WeakMap,tm=new WeakMap,tb=new WeakMap,t_=new WeakSet,tw=function(){return this.chips[0]?.offsetHeight||0},t$=new WeakSet,tx=function(){let e=this.chips.find(e=>e.selected)?.value;e&&(this.value=e)},nQ.styles=[nJ],tE([iO({converter:{fromAttribute:e=>e.split(","),toAttribute:e=>Array.isArray(e)?e.join(","):e}})],nQ.prototype,"value",2),tE([iO({type:Boolean})],nQ.prototype,"multiple",2),tE([iO()],nQ.prototype,"label",2),tE([iO({type:Boolean,attribute:"row-collapse"})],nQ.prototype,"rowCollapse",2),tE([iR()],nQ.prototype,"_collapsed",2),tE([iH("slot")],nQ.prototype,"_elSlot",2),tE([nU()],nQ.prototype,"_handleResize",1),tE([i3("value")],nQ.prototype,"_updateSelectedFromValue",1),nQ=tE([iZ("gds-filter-chips")],nQ)})();/*! Bundled license information:

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