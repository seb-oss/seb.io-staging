"use strict";(()=>{var t,e,s,i,r,o,n,a,l,h,d,c,p,u,g,f,y,v,m,b,_,w,$,x,k,A,E,S,C,T,M,F,D,W,L,N,P,O,R,z,H,U,B,I,V,j,Y,q,G,K,X,Z,J,Q,tt,te,ts,ti,tr,to,tn,ta,tl,th,td,tc,tp,tu,tg,tf,ty,tv,tm,tb,t_,tw,t$,tx,tk,tA,tE,tS,tC,tT,tM,tF,tD,tW,tL,tN,tP,tO,tR,tz,tH,tU,tB,tI,tV,tj,tY,tq,tG,tK,tX,tZ,tJ,tQ,t0,t1,t2,t5,t3,t6,t7,t4,t8,t9,et,ee,es,ei,er,eo,en,ea,el,eh,ed,ec,ep,eu,eg,ef,ey,ev,em,eb,e_,ew,e$,ex,ek,eA=Object.defineProperty,eE=Object.getOwnPropertyDescriptor,eS=(t,e,s,i)=>{for(var r,o=i>1?void 0:i?eE(e,s):e,n=t.length-1;n>=0;n--)(r=t[n])&&(o=(i?r(e,s,o):r(o))||o);return i&&o&&eA(e,s,o),o},eC=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)},eT=(t,e,s)=>(eC(t,e,"read from private field"),s?s.call(t):e.get(t)),eM=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},eF=(t,e,s,i)=>(eC(t,e,"write to private field"),i?i.call(t,s):e.set(t,s),s),eD=(t,e,s,i)=>({set _(value){eF(t,e,value,s)},get _(){return eT(t,e,i)}}),eW=(t,e,s)=>(eC(t,e,"access private method"),s),eL=globalThis,eN=eL.ShadowRoot&&(void 0===eL.ShadyCSS||eL.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,eP=Symbol(),eO=new WeakMap,eR=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==eP)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(eN&&void 0===t){let s=void 0!==e&&1===e.length;s&&(t=eO.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&eO.set(e,t))}return t}toString(){return this.cssText}},ez=t=>new eR("string"==typeof t?t:t+"",void 0,eP),eH=(t,e)=>{if(eN)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let s of e){let e=document.createElement("style"),i=eL.litNonce;void 0!==i&&e.setAttribute("nonce",i),e.textContent=s.cssText,t.appendChild(e)}},eU=eN?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return ez(e)})(t):t,{is:eB,defineProperty:eI,getOwnPropertyDescriptor:eV,getOwnPropertyNames:ej,getOwnPropertySymbols:eY,getPrototypeOf:eq}=Object,eG=globalThis,eK=eG.trustedTypes,eX=eK?eK.emptyScript:"",eZ=eG.reactiveElementPolyfillSupport,eJ=(t,e)=>t,eQ={toAttribute(t,e){switch(e){case Boolean:t=t?eX:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},e0=(t,e)=>!eB(t,e),e1={attribute:!0,type:String,converter:eQ,reflect:!1,hasChanged:e0};Symbol.metadata??=Symbol("metadata"),eG.litPropertyMetadata??=new WeakMap;var e2=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=e1){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&eI(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){let{get:i,set:r}=eV(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return i?.call(this)},set(e){let o=i?.call(this);r.call(this,e),this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??e1}static _$Ei(){if(this.hasOwnProperty(eJ("elementProperties")))return;let t=eq(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(eJ("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(eJ("properties"))){let t=this.properties;for(let e of[...ej(t),...eY(t)])this.createProperty(e,t[e])}let t=this[Symbol.metadata];if(null!==t){let e=litPropertyMetadata.get(t);if(void 0!==e)for(let[t,s]of e)this.elementProperties.set(t,s)}for(let[t,e]of(this._$Eh=new Map,this.elementProperties)){let s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t))for(let s of new Set(t.flat(1/0).reverse()))e.unshift(eU(s));else void 0!==t&&e.push(eU(t));return e}static _$Eu(t,e){let s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map;for(let e of this.constructor.elementProperties.keys())this.hasOwnProperty(e)&&(t.set(e,this[e]),delete this[e]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return eH(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){let s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){let r=(void 0!==s.converter?.toAttribute?s.converter:eQ).toAttribute(e,s.type);this._$Em=t,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){let s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){let t=s.getPropertyOptions(i),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:eQ;this._$Em=i,this[i]=r.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,s){if(void 0!==t){if(!((s??=this.constructor.getPropertyOptions(t)).hasChanged??e0)(this[t],e))return;this.P(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}let t=this.constructor.elementProperties;if(t.size>0)for(let[e,s]of t)!0!==s.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],s)}let t=!1,e=this._$AL;try{(t=this.shouldUpdate(e))?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(t=>this._$EC(t,this[t])),this._$EU()}updated(t){}firstUpdated(t){}};e2.elementStyles=[],e2.shadowRootOptions={mode:"open"},e2[eJ("elementProperties")]=new Map,e2[eJ("finalized")]=new Map,eZ?.({ReactiveElement:e2}),(eG.reactiveElementVersions??=[]).push("2.0.4");var e5=globalThis,e3=e5.trustedTypes,e6=e3?e3.createPolicy("lit-html",{createHTML:t=>t}):void 0,e7="$lit$",e4=`lit$${Math.random().toFixed(9).slice(2)}$`,e8="?"+e4,e9=`<${e8}>`,st=document,se=()=>st.createComment(""),ss=t=>null===t||"object"!=typeof t&&"function"!=typeof t,si=Array.isArray,sr=t=>si(t)||"function"==typeof t?.[Symbol.iterator],so="[ 	\n\f\r]",sn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,sa=/-->/g,sl=/>/g,sh=RegExp(`>|${so}(?:([^\\s"'>=/]+)(${so}*=${so}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),sd=/'/g,sc=/"/g,sp=/^(?:script|style|textarea|title)$/i,su=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),sg=su(1),sf=su(2),sy=Symbol.for("lit-noChange"),sv=Symbol.for("lit-nothing"),sm=new WeakMap,sb=st.createTreeWalker(st,129);function s_(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e6?e6.createHTML(e):e}var sw=(t,e)=>{let s=t.length-1,i=[],r,o=2===e?"<svg>":"",n=sn;for(let e=0;e<s;e++){let s=t[e],a,l,h=-1,d=0;for(;d<s.length&&(n.lastIndex=d,null!==(l=n.exec(s)));)d=n.lastIndex,n===sn?"!--"===l[1]?n=sa:void 0!==l[1]?n=sl:void 0!==l[2]?(sp.test(l[2])&&(r=RegExp("</"+l[2],"g")),n=sh):void 0!==l[3]&&(n=sh):n===sh?">"===l[0]?(n=r??sn,h=-1):void 0===l[1]?h=-2:(h=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?sh:'"'===l[3]?sc:sd):n===sc||n===sd?n=sh:n===sa||n===sl?n=sn:(n=sh,r=void 0);let c=n===sh&&t[e+1].startsWith("/>")?" ":"";o+=n===sn?s+e9:h>=0?(i.push(a),s.slice(0,h)+e7+s.slice(h)+e4+c):s+e4+(-2===h?e:c)}return[s_(t,o+(t[s]||"<?>")+(2===e?"</svg>":"")),i]},s$=class t{constructor({strings:e,_$litType$:s},i){let r;this.parts=[];let o=0,n=0,a=e.length-1,l=this.parts,[h,d]=sw(e,s);if(this.el=t.createElement(h,i),sb.currentNode=this.el.content,2===s){let t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=sb.nextNode())&&l.length<a;){if(1===r.nodeType){if(r.hasAttributes())for(let t of r.getAttributeNames())if(t.endsWith(e7)){let e=d[n++],s=r.getAttribute(t).split(e4),i=/([.?@])?(.*)/.exec(e);l.push({type:1,index:o,name:i[2],strings:s,ctor:"."===i[1]?sS:"?"===i[1]?sC:"@"===i[1]?sT:sE}),r.removeAttribute(t)}else t.startsWith(e4)&&(l.push({type:6,index:o}),r.removeAttribute(t));if(sp.test(r.tagName)){let t=r.textContent.split(e4),e=t.length-1;if(e>0){r.textContent=e3?e3.emptyScript:"";for(let s=0;s<e;s++)r.append(t[s],se()),sb.nextNode(),l.push({type:2,index:++o});r.append(t[e],se())}}}else if(8===r.nodeType){if(r.data===e8)l.push({type:2,index:o});else{let t=-1;for(;-1!==(t=r.data.indexOf(e4,t+1));)l.push({type:7,index:o}),t+=e4.length-1}}o++}}static createElement(t,e){let s=st.createElement("template");return s.innerHTML=t,s}};function sx(t,e,s=t,i){if(e===sy)return e;let r=void 0!==i?s._$Co?.[i]:s._$Cl,o=ss(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(t))._$AT(t,s,i),void 0!==i?(s._$Co??=[])[i]=r:s._$Cl=r),void 0!==r&&(e=sx(t,r._$AS(t,e.values),r,i)),e}var sk=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??st).importNode(e,!0);sb.currentNode=i;let r=sb.nextNode(),o=0,n=0,a=s[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new sA(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new sM(r,this,t)),this._$AV.push(e),a=s[++n]}o!==a?.index&&(r=sb.nextNode(),o++)}return sb.currentNode=st,i}p(t){let e=0;for(let s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},sA=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=sv,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){ss(t=sx(this,t,e))?t===sv||null==t||""===t?(this._$AH!==sv&&this._$AR(),this._$AH=sv):t!==this._$AH&&t!==sy&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):sr(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==sv&&ss(this._$AH)?this._$AA.nextSibling.data=t:this.T(st.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=s$.createElement(s_(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{let t=new sk(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=sm.get(t.strings);return void 0===e&&sm.set(t.strings,e=new s$(t)),e}k(e){si(this._$AH)||(this._$AH=[],this._$AR());let s=this._$AH,i,r=0;for(let o of e)r===s.length?s.push(i=new t(this.S(se()),this.S(se()),this,this.options)):i=s[r],i._$AI(o),r++;r<s.length&&(this._$AR(i&&i._$AB.nextSibling,r),s.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){let e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}},sE=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=sv,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=sv}_$AI(t,e=this,s,i){let r=this.strings,o=!1;if(void 0===r)(o=!ss(t=sx(this,t,e,0))||t!==this._$AH&&t!==sy)&&(this._$AH=t);else{let i,n;let a=t;for(t=r[0],i=0;i<r.length-1;i++)(n=sx(this,a[s+i],e,i))===sy&&(n=this._$AH[i]),o||=!ss(n)||n!==this._$AH[i],n===sv?t=sv:t!==sv&&(t+=(n??"")+r[i+1]),this._$AH[i]=n}o&&!i&&this.j(t)}j(t){t===sv?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},sS=class extends sE{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===sv?void 0:t}},sC=class extends sE{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==sv)}},sT=class extends sE{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=sx(this,t,e,0)??sv)===sy)return;let s=this._$AH,i=t===sv&&s!==sv||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==sv&&(s===sv||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},sM=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){sx(this,t)}},sF=e5.litHtmlPolyfillSupport;sF?.(s$,sA),(e5.litHtmlVersions??=[]).push("3.1.3");var sD=globalThis,sW=sD.ShadowRoot&&(void 0===sD.ShadyCSS||sD.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,sL=Symbol(),sN=new WeakMap,sP=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==sL)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(sW&&void 0===t){let s=void 0!==e&&1===e.length;s&&(t=sN.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&sN.set(e,t))}return t}toString(){return this.cssText}},sO=t=>new sP("string"==typeof t?t:t+"",void 0,sL),sR=(t,...e)=>new sP(1===t.length?t[0]:e.reduce((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]),t,sL),sz=(t,e)=>{if(sW)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let s of e){let e=document.createElement("style"),i=sD.litNonce;void 0!==i&&e.setAttribute("nonce",i),e.textContent=s.cssText,t.appendChild(e)}},sH=sW?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return sO(e)})(t):t,{is:sU,defineProperty:sB,getOwnPropertyDescriptor:sI,getOwnPropertyNames:sV,getOwnPropertySymbols:sj,getPrototypeOf:sY}=Object,sq=globalThis,sG=sq.trustedTypes,sK=sG?sG.emptyScript:"",sX=sq.reactiveElementPolyfillSupport,sZ=(t,e)=>t,sJ={toAttribute(t,e){switch(e){case Boolean:t=t?sK:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},sQ=(t,e)=>!sU(t,e),s0={attribute:!0,type:String,converter:sJ,reflect:!1,hasChanged:sQ};Symbol.metadata??=Symbol("metadata"),sq.litPropertyMetadata??=new WeakMap;var s1=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=s0){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&sB(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){let{get:i,set:r}=sI(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return i?.call(this)},set(e){let o=i?.call(this);r.call(this,e),this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??s0}static _$Ei(){if(this.hasOwnProperty(sZ("elementProperties")))return;let t=sY(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(sZ("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(sZ("properties"))){let t=this.properties;for(let e of[...sV(t),...sj(t)])this.createProperty(e,t[e])}let t=this[Symbol.metadata];if(null!==t){let e=litPropertyMetadata.get(t);if(void 0!==e)for(let[t,s]of e)this.elementProperties.set(t,s)}for(let[t,e]of(this._$Eh=new Map,this.elementProperties)){let s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t))for(let s of new Set(t.flat(1/0).reverse()))e.unshift(sH(s));else void 0!==t&&e.push(sH(t));return e}static _$Eu(t,e){let s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map;for(let e of this.constructor.elementProperties.keys())this.hasOwnProperty(e)&&(t.set(e,this[e]),delete this[e]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return sz(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){let s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){let r=(void 0!==s.converter?.toAttribute?s.converter:sJ).toAttribute(e,s.type);this._$Em=t,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){let s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){let t=s.getPropertyOptions(i),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:sJ;this._$Em=i,this[i]=r.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,s){if(void 0!==t){if(!((s??=this.constructor.getPropertyOptions(t)).hasChanged??sQ)(this[t],e))return;this.P(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}let t=this.constructor.elementProperties;if(t.size>0)for(let[e,s]of t)!0!==s.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],s)}let t=!1,e=this._$AL;try{(t=this.shouldUpdate(e))?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(t=>this._$EC(t,this[t])),this._$EU()}updated(t){}firstUpdated(t){}};s1.elementStyles=[],s1.shadowRootOptions={mode:"open"},s1[sZ("elementProperties")]=new Map,s1[sZ("finalized")]=new Map,sX?.({ReactiveElement:s1}),(sq.reactiveElementVersions??=[]).push("2.0.4");var s2=globalThis,s5=s2.trustedTypes,s3=s5?s5.createPolicy("lit-html",{createHTML:t=>t}):void 0,s6="$lit$",s7=`lit$${Math.random().toFixed(9).slice(2)}$`,s4="?"+s7,s8=`<${s4}>`,s9=document,it=()=>s9.createComment(""),ie=t=>null===t||"object"!=typeof t&&"function"!=typeof t,is=Array.isArray,ii=t=>is(t)||"function"==typeof t?.[Symbol.iterator],ir="[ 	\n\f\r]",io=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ia=/-->/g,il=/>/g,ih=RegExp(`>|${ir}(?:([^\\s"'>=/]+)(${ir}*=${ir}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),id=/'/g,ic=/"/g,ip=/^(?:script|style|textarea|title)$/i,iu=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),ig=iu(1);iu(2);var iy=Symbol.for("lit-noChange"),iv=Symbol.for("lit-nothing"),im=new WeakMap,ib=s9.createTreeWalker(s9,129);function i_(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s3?s3.createHTML(e):e}var iw=(t,e)=>{let s=t.length-1,i=[],r,o=2===e?"<svg>":"",n=io;for(let e=0;e<s;e++){let s=t[e],a,l,h=-1,d=0;for(;d<s.length&&(n.lastIndex=d,null!==(l=n.exec(s)));)d=n.lastIndex,n===io?"!--"===l[1]?n=ia:void 0!==l[1]?n=il:void 0!==l[2]?(ip.test(l[2])&&(r=RegExp("</"+l[2],"g")),n=ih):void 0!==l[3]&&(n=ih):n===ih?">"===l[0]?(n=r??io,h=-1):void 0===l[1]?h=-2:(h=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?ih:'"'===l[3]?ic:id):n===ic||n===id?n=ih:n===ia||n===il?n=io:(n=ih,r=void 0);let c=n===ih&&t[e+1].startsWith("/>")?" ":"";o+=n===io?s+s8:h>=0?(i.push(a),s.slice(0,h)+s6+s.slice(h)+s7+c):s+s7+(-2===h?e:c)}return[i_(t,o+(t[s]||"<?>")+(2===e?"</svg>":"")),i]},i$=class t{constructor({strings:e,_$litType$:s},i){let r;this.parts=[];let o=0,n=0,a=e.length-1,l=this.parts,[h,d]=iw(e,s);if(this.el=t.createElement(h,i),ib.currentNode=this.el.content,2===s){let t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=ib.nextNode())&&l.length<a;){if(1===r.nodeType){if(r.hasAttributes())for(let t of r.getAttributeNames())if(t.endsWith(s6)){let e=d[n++],s=r.getAttribute(t).split(s7),i=/([.?@])?(.*)/.exec(e);l.push({type:1,index:o,name:i[2],strings:s,ctor:"."===i[1]?iS:"?"===i[1]?iC:"@"===i[1]?iT:iE}),r.removeAttribute(t)}else t.startsWith(s7)&&(l.push({type:6,index:o}),r.removeAttribute(t));if(ip.test(r.tagName)){let t=r.textContent.split(s7),e=t.length-1;if(e>0){r.textContent=s5?s5.emptyScript:"";for(let s=0;s<e;s++)r.append(t[s],it()),ib.nextNode(),l.push({type:2,index:++o});r.append(t[e],it())}}}else if(8===r.nodeType){if(r.data===s4)l.push({type:2,index:o});else{let t=-1;for(;-1!==(t=r.data.indexOf(s7,t+1));)l.push({type:7,index:o}),t+=s7.length-1}}o++}}static createElement(t,e){let s=s9.createElement("template");return s.innerHTML=t,s}};function ix(t,e,s=t,i){if(e===iy)return e;let r=void 0!==i?s._$Co?.[i]:s._$Cl,o=ie(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(t))._$AT(t,s,i),void 0!==i?(s._$Co??=[])[i]=r:s._$Cl=r),void 0!==r&&(e=ix(t,r._$AS(t,e.values),r,i)),e}var ik=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??s9).importNode(e,!0);ib.currentNode=i;let r=ib.nextNode(),o=0,n=0,a=s[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new iA(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new iM(r,this,t)),this._$AV.push(e),a=s[++n]}o!==a?.index&&(r=ib.nextNode(),o++)}return ib.currentNode=s9,i}p(t){let e=0;for(let s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},iA=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=iv,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){ie(t=ix(this,t,e))?t===iv||null==t||""===t?(this._$AH!==iv&&this._$AR(),this._$AH=iv):t!==this._$AH&&t!==iy&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):ii(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==iv&&ie(this._$AH)?this._$AA.nextSibling.data=t:this.T(s9.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=i$.createElement(i_(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{let t=new ik(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=im.get(t.strings);return void 0===e&&im.set(t.strings,e=new i$(t)),e}k(e){is(this._$AH)||(this._$AH=[],this._$AR());let s=this._$AH,i,r=0;for(let o of e)r===s.length?s.push(i=new t(this.S(it()),this.S(it()),this,this.options)):i=s[r],i._$AI(o),r++;r<s.length&&(this._$AR(i&&i._$AB.nextSibling,r),s.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){let e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}},iE=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=iv,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=iv}_$AI(t,e=this,s,i){let r=this.strings,o=!1;if(void 0===r)(o=!ie(t=ix(this,t,e,0))||t!==this._$AH&&t!==iy)&&(this._$AH=t);else{let i,n;let a=t;for(t=r[0],i=0;i<r.length-1;i++)(n=ix(this,a[s+i],e,i))===iy&&(n=this._$AH[i]),o||=!ie(n)||n!==this._$AH[i],n===iv?t=iv:t!==iv&&(t+=(n??"")+r[i+1]),this._$AH[i]=n}o&&!i&&this.j(t)}j(t){t===iv?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},iS=class extends iE{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===iv?void 0:t}},iC=class extends iE{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==iv)}},iT=class extends iE{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=ix(this,t,e,0)??iv)===iy)return;let s=this._$AH,i=t===iv&&s!==iv||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==iv&&(s===iv||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},iM=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){ix(this,t)}},iF=s2.litHtmlPolyfillSupport;iF?.(i$,iA),(s2.litHtmlVersions??=[]).push("3.1.3");var iD=(t,e,s)=>{let i=s?.renderBefore??e,r=i._$litPart$;if(void 0===r){let t=s?.renderBefore??null;i._$litPart$=r=new iA(e.insertBefore(it(),t),t,void 0,s??{})}return r._$AI(t),r},iW=class extends s1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=iD(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return iy}};iW._$litElement$=!0,iW.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:iW});var iL=globalThis.litElementPolyfillSupport;iL?.({LitElement:iW}),(globalThis.litElementVersions??=[]).push("4.0.5");var iN=t=>(e,s)=>{void 0!==s?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},iP={attribute:!0,type:String,converter:eQ,reflect:!1,hasChanged:e0},iO=(t=iP,e,s)=>{let{kind:i,metadata:r}=s,o=globalThis.litPropertyMetadata.get(r);if(void 0===o&&globalThis.litPropertyMetadata.set(r,o=new Map),o.set(s.name,t),"accessor"===i){let{name:i}=s;return{set(s){let r=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,r,t)},init(e){return void 0!==e&&this.P(i,void 0,t),e}}}if("setter"===i){let{name:i}=s;return function(s){let r=this[i];e.call(this,s),this.requestUpdate(i,r,t)}}throw Error("Unsupported decorator location: "+i)};function iR(t){return(e,s)=>"object"==typeof s?iO(t,e,s):((t,e,s)=>{let i=e.hasOwnProperty(s);return e.constructor.createProperty(s,i?{...t,wrapped:!0}:t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}function iz(t){return iR({...t,state:!0,attribute:!1})}var iH=(t,e,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,s),s);function iU(t,e){return(s,i,r)=>{let o=e=>e.renderRoot?.querySelector(t)??null;if(e){let{get:t,set:e}="object"==typeof i?s:r??(()=>{let t=Symbol();return{get(){return this[t]},set(e){this[t]=e}}})();return iH(s,i,{get(){let s=t.call(this);return void 0===s&&(null!==(s=o(this))||this.hasUpdated)&&e.call(this,s),s}})}return iH(s,i,{get(){return o(this)}})}}function iB(t){return(e,s)=>iH(e,s,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(t)??null}})}function iI(t,e,s){return t?e(t):s?.(t)}var iV={ATTRIBUTE:1,CHILD:2,ELEMENT:6},ij=t=>(...e)=>({_$litDirective$:t,values:e}),iY=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}},iq=ij(class extends iY{constructor(t){if(super(t),t.type!==iV.ATTRIBUTE||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){for(let s in this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t))),e)e[s]&&!this.nt?.has(s)&&this.st.add(s);return this.render(e)}let s=t.element.classList;for(let t of this.st)t in e||(s.remove(t),this.st.delete(t));for(let t in e){let i=!!e[t];i===this.st.has(t)||this.nt?.has(t)||(i?(s.add(t),this.st.add(t)):(s.remove(t),this.st.delete(t)))}return sy}}),iG=class{constructor(t){this.#t=!iK(),this.#e=[],this.#s=new Map,this.#i=new Map,this.host=t,this.host.addController(this)}#t;#e;#s;#i;hostConnected(){this.host.shadowRoot&&0===this.#e.length&&(this.#e=[...this.host.shadowRoot.adoptedStyleSheets||[]])}inject(t,e){let s=Array.isArray(e)?e.map(t=>t.toString()).join(""):e.toString();this.#t?this.#r(t,s):this.#o(t,s)}clearAll(){this.#t?(this.#i.forEach(t=>t.remove()),this.host.shadowRoot?.querySelectorAll("style").forEach(t=>t.innerHTML=""),this.#i.clear()):this.host.shadowRoot&&(this.host.shadowRoot.adoptedStyleSheets=[],this.#s.clear(),this.#e=[])}#r(t,e){let s=this.#i.get(t);s||(s=document.createElement("style"),this.#i.set(t,s)),s.textContent=e,this.host.shadowRoot?.appendChild(s)}#o(t,e){if(!this.host.shadowRoot)return;let s=this.#s.get(t);s||(s=new CSSStyleSheet,this.#s.set(t,s)),s.replaceSync(e),this.host.shadowRoot.adoptedStyleSheets=[...this.#e,...Array.from(this.#s.values())]}};function iK(){try{return new CSSStyleSheet,!0}catch{return!1}}var iX="-gdsvsuffix",iZ=new Map,iJ=t=>{if(globalThis.GDS_DISABLE_VERSIONED_ELEMENTS)return iZ.set(t,t),iN(t);let e=t+iX;return(iZ.set(t,e),customElements.get(e))?t=>!1:iN(e)},iQ=new WeakMap,i0=t=>t.map(t=>{for(let[e,s]of iZ.entries())t=t.replace(RegExp(`${e}(?![-a-z])`,"mg"),s);return t}),i1=function(t){return(e,...s)=>{if(globalThis.GDS_DISABLE_VERSIONED_ELEMENTS)return t(e,...s);let[i,...r]=function(t,...e){let s=iQ.get(t);return s||((s=i0(t)).raw=i0(t.raw),iQ.set(t,s)),[s,...e]}(e,...s);return t(i,...r)}}(ig);!function(t){!function(e){var s="object"==typeof global?global:"object"==typeof self?self:"object"==typeof this?this:Function("return this;")(),i=r(t);function r(t,e){return function(s,i){"function"!=typeof t[s]&&Object.defineProperty(t,s,{configurable:!0,writable:!0,value:i}),e&&e(s,i)}}void 0===s.Reflect?s.Reflect=t:i=r(s.Reflect,i),e(i)}(function(t){var e=Object.prototype.hasOwnProperty,s="function"==typeof Symbol,i=s&&void 0!==Symbol.toPrimitive?Symbol.toPrimitive:"@@toPrimitive",r=s&&void 0!==Symbol.iterator?Symbol.iterator:"@@iterator",o="function"==typeof Object.create,n=({__proto__:[]})instanceof Array,a=!o&&!n,l={create:o?function(){return T(Object.create(null))}:n?function(){return T({__proto__:null})}:function(){return T({})},has:a?function(t,s){return e.call(t,s)}:function(t,e){return e in t},get:a?function(t,s){return e.call(t,s)?t[s]:void 0}:function(t,e){return t[e]}},h=Object.getPrototypeOf(Function),d="object"==typeof process&&process.env&&"true"===process.env.REFLECT_METADATA_USE_MAP_POLYFILL,c=d||"function"!=typeof Map||"function"!=typeof Map.prototype.entries?function(){var t={},e=[],s=function(){function t(t,e,s){this._index=0,this._keys=t,this._values=e,this._selector=s}return t.prototype["@@iterator"]=function(){return this},t.prototype[r]=function(){return this},t.prototype.next=function(){var t=this._index;if(t>=0&&t<this._keys.length){var s=this._selector(this._keys[t],this._values[t]);return t+1>=this._keys.length?(this._index=-1,this._keys=e,this._values=e):this._index++,{value:s,done:!1}}return{value:void 0,done:!0}},t.prototype.throw=function(t){throw this._index>=0&&(this._index=-1,this._keys=e,this._values=e),t},t.prototype.return=function(t){return this._index>=0&&(this._index=-1,this._keys=e,this._values=e),{value:t,done:!0}},t}();return function(){function e(){this._keys=[],this._values=[],this._cacheKey=t,this._cacheIndex=-2}return Object.defineProperty(e.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),e.prototype.has=function(t){return this._find(t,!1)>=0},e.prototype.get=function(t){var e=this._find(t,!1);return e>=0?this._values[e]:void 0},e.prototype.set=function(t,e){var s=this._find(t,!0);return this._values[s]=e,this},e.prototype.delete=function(e){var s=this._find(e,!1);if(s>=0){for(var i=this._keys.length,r=s+1;r<i;r++)this._keys[r-1]=this._keys[r],this._values[r-1]=this._values[r];return this._keys.length--,this._values.length--,e===this._cacheKey&&(this._cacheKey=t,this._cacheIndex=-2),!0}return!1},e.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=t,this._cacheIndex=-2},e.prototype.keys=function(){return new s(this._keys,this._values,i)},e.prototype.values=function(){return new s(this._keys,this._values,o)},e.prototype.entries=function(){return new s(this._keys,this._values,n)},e.prototype["@@iterator"]=function(){return this.entries()},e.prototype[r]=function(){return this.entries()},e.prototype._find=function(t,e){return this._cacheKey!==t&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=t)),this._cacheIndex<0&&e&&(this._cacheIndex=this._keys.length,this._keys.push(t),this._values.push(void 0)),this._cacheIndex},e}();function i(t,e){return t}function o(t,e){return e}function n(t,e){return[t,e]}}():Map,p=d||"function"!=typeof Set||"function"!=typeof Set.prototype.entries?function(){function t(){this._map=new c}return Object.defineProperty(t.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),t.prototype.has=function(t){return this._map.has(t)},t.prototype.add=function(t){return this._map.set(t,t),this},t.prototype.delete=function(t){return this._map.delete(t)},t.prototype.clear=function(){this._map.clear()},t.prototype.keys=function(){return this._map.keys()},t.prototype.values=function(){return this._map.values()},t.prototype.entries=function(){return this._map.entries()},t.prototype["@@iterator"]=function(){return this.keys()},t.prototype[r]=function(){return this.keys()},t}():Set,u=new(d||"function"!=typeof WeakMap?function(){var t=l.create(),s=i();return function(){function t(){this._key=i()}return t.prototype.has=function(t){var e=r(t,!1);return void 0!==e&&l.has(e,this._key)},t.prototype.get=function(t){var e=r(t,!1);return void 0!==e?l.get(e,this._key):void 0},t.prototype.set=function(t,e){return r(t,!0)[this._key]=e,this},t.prototype.delete=function(t){var e=r(t,!1);return void 0!==e&&delete e[this._key]},t.prototype.clear=function(){this._key=i()},t}();function i(){var e;do e="@@WeakMap@@"+function(){var t="function"==typeof Uint8Array?"undefined"!=typeof crypto?crypto.getRandomValues(new Uint8Array(16)):"undefined"!=typeof msCrypto?msCrypto.getRandomValues(new Uint8Array(16)):o(new Uint8Array(16),16):o(Array(16),16);t[6]=79&t[6]|64,t[8]=191&t[8]|128;for(var e="",s=0;s<16;++s){var i=t[s];(4===s||6===s||8===s)&&(e+="-"),i<16&&(e+="0"),e+=i.toString(16).toLowerCase()}return e}();while(l.has(t,e));return t[e]=!0,e}function r(t,i){if(!e.call(t,s)){if(!i)return;Object.defineProperty(t,s,{value:l.create()})}return t[s]}function o(t,e){for(var s=0;s<e;++s)t[s]=255*Math.random()|0;return t}}():WeakMap);function g(t,e,s){var i=u.get(t);if(_(i)){if(!s)return;i=new c,u.set(t,i)}var r=i.get(e);if(_(r)){if(!s)return;r=new c,i.set(e,r)}return r}function f(t,e,s){var i=g(e,s,!1);return!_(i)&&!!i.has(t)}function y(t,e,s){var i=g(e,s,!1);if(!_(i))return i.get(t)}function v(t,e,s,i){g(s,i,!0).set(t,e)}function m(t,e){var s=[],i=g(t,e,!1);if(_(i))return s;for(var o=function(t){var e=S(t,r);if(!A(e))throw TypeError();var s=e.call(t);if(!$(s))throw TypeError();return s}(i.keys()),n=0;;){var a=function(t){var e=t.next();return!e.done&&e}(o);if(!a)return s.length=n,s;var l=a.value;try{s[n]=l}catch(t){try{!function(t){var e=t.return;e&&e.call(t)}(o)}finally{throw t}}n++}}function b(t){if(null===t)return 1;switch(typeof t){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return null===t?1:6;default:return 6}}function _(t){return void 0===t}function w(t){return null===t}function $(t){return"object"==typeof t?null!==t:"function"==typeof t}function x(t){var e=function(t,e){switch(b(t)){case 0:case 1:case 2:case 3:case 4:case 5:return t}var s=3===e?"string":5===e?"number":"default",r=S(t,i);if(void 0!==r){var o=r.call(t,s);if($(o))throw TypeError();return o}return function(t,e){if("string"===e){var s=t.toString;if(A(s)){var i=s.call(t);if(!$(i))return i}var r=t.valueOf;if(A(r)){var i=r.call(t);if(!$(i))return i}}else{var r=t.valueOf;if(A(r)){var i=r.call(t);if(!$(i))return i}var o=t.toString;if(A(o)){var i=o.call(t);if(!$(i))return i}}throw TypeError()}(t,"default"===s?"number":s)}(t,3);return"symbol"==typeof e?e:""+e}function k(t){return Array.isArray?Array.isArray(t):t instanceof Object?t instanceof Array:"[object Array]"===Object.prototype.toString.call(t)}function A(t){return"function"==typeof t}function E(t){return"function"==typeof t}function S(t,e){var s=t[e];if(null!=s){if(!A(s))throw TypeError();return s}}function C(t){var e=Object.getPrototypeOf(t);if("function"!=typeof t||t===h||e!==h)return e;var s=t.prototype,i=s&&Object.getPrototypeOf(s);if(null==i||i===Object.prototype)return e;var r=i.constructor;return"function"!=typeof r||r===t?e:r}function T(t){return t.__=void 0,delete t.__,t}t("decorate",function(t,e,s,i){if(_(s)){if(!k(t)||!E(e))throw TypeError();return function(t,e){for(var s=t.length-1;s>=0;--s){var i=(0,t[s])(e);if(!_(i)&&!w(i)){if(!E(i))throw TypeError();e=i}}return e}(t,e)}if(!k(t)||!$(e)||!$(i)&&!_(i)&&!w(i))throw TypeError();return w(i)&&(i=void 0),function(t,e,s,i){for(var r=t.length-1;r>=0;--r){var o=(0,t[r])(e,s,i);if(!_(o)&&!w(o)){if(!$(o))throw TypeError();i=o}}return i}(t,e,s=x(s),i)}),t("metadata",function(t,e){return function(s,i){if(!$(s)||!_(i)&&!function(t){switch(b(t)){case 3:case 4:return!0;default:return!1}}(i))throw TypeError();v(t,e,s,i)}}),t("defineMetadata",function(t,e,s,i){if(!$(s))throw TypeError();return _(i)||(i=x(i)),v(t,e,s,i)}),t("hasMetadata",function(t,e,s){if(!$(e))throw TypeError();return _(s)||(s=x(s)),function t(e,s,i){if(f(e,s,i))return!0;var r=C(s);return!w(r)&&t(e,r,i)}(t,e,s)}),t("hasOwnMetadata",function(t,e,s){if(!$(e))throw TypeError();return _(s)||(s=x(s)),f(t,e,s)}),t("getMetadata",function(t,e,s){if(!$(e))throw TypeError();return _(s)||(s=x(s)),function t(e,s,i){if(f(e,s,i))return y(e,s,i);var r=C(s);if(!w(r))return t(e,r,i)}(t,e,s)}),t("getOwnMetadata",function(t,e,s){if(!$(e))throw TypeError();return _(s)||(s=x(s)),y(t,e,s)}),t("getMetadataKeys",function(t,e){if(!$(t))throw TypeError();return _(e)||(e=x(e)),function t(e,s){var i=m(e,s),r=C(e);if(null===r)return i;var o=t(r,s);if(o.length<=0)return i;if(i.length<=0)return o;for(var n=new p,a=[],l=0;l<i.length;l++){var h=i[l],d=n.has(h);d||(n.add(h),a.push(h))}for(var c=0;c<o.length;c++){var h=o[c],d=n.has(h);d||(n.add(h),a.push(h))}return a}(t,e)}),t("getOwnMetadataKeys",function(t,e){if(!$(t))throw TypeError();return _(e)||(e=x(e)),m(t,e)}),t("deleteMetadata",function(t,e,s){if(!$(e))throw TypeError();_(s)||(s=x(s));var i=g(e,s,!1);if(_(i)||!i.delete(t))return!1;if(i.size>0)return!0;var r=u.get(e);return r.delete(s),r.size>0||(u.delete(e),!0)})})}(e||(e={}));var i2=class extends iW{constructor(){super(),this.gdsElementName="",this._isUsingTransitionalStyles=!1,this._dynamicStylesController=new iG(this)}connectedCallback(){var t;super.connectedCallback(),this.gdsElementName=(t=this.tagName.toLowerCase(),[...iZ.entries()].find(([,e])=>e===t)?.[0]||this.gdsElementName),this.setAttribute("gds-element",this.gdsElementName)}};eS([iz()],i2.prototype,"_isUsingTransitionalStyles",2);var i5=class t{static get instance(){return globalThis.__gdsTransitionalStyles?.[iX]||(globalThis.__gdsTransitionalStyles={...globalThis.__gdsTransitionalStyles,[iX]:new t}),globalThis.__gdsTransitionalStyles[iX]}#n=new Map;#a=new Map;#t=!iK();apply(t,e){if(!t.shadowRoot)return;let s=this.#n.get(e);s&&(this.#a.set(e,t),this.applyToElement(e,s))}applyToElement(t,e){let s=this.#a.get(t);s&&s.shadowRoot&&(s._dynamicStylesController.clearAll(),s._dynamicStylesController.inject("t-styles",sO(e)),s._isUsingTransitionalStyles=!0)}register(t,e){let s=e;this.#t&&(s=`@layer reset {
        *:not(style, [gds-element]) {
          all: revert;
        }
      }
      ${e}`),this.#n.set(t,s),this.applyToElement(t,s)}},i3=sR`
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
`;function i6(t,e){let s={waitUntilFirstUpdate:!1,...e};return(e,i,r)=>{let{update:o}=e,n=Array.isArray(t)?t:[t];e.update=function(t){n.forEach(e=>{if(t.has(e)){let i=t.get(e),o=this[e];i!==o&&(!s.waitUntilFirstUpdate||this.hasUpdated)&&r.value?.call(this,i,o)}}),o.call(this,t)}}}var i7=t=>{class e extends t{constructor(){super(...arguments),this.onblur=t=>{this.setAttribute("tabindex","-1"),this.dispatchEvent(new FocusEvent("gds-blur",{bubbles:!0,composed:!0,relatedTarget:t.relatedTarget}))},this.onfocus=t=>{this.dispatchEvent(new FocusEvent("gds-focus",{bubbles:!0,composed:!0,relatedTarget:t.relatedTarget}))}}focus(t){this.setAttribute("tabindex","0"),super.focus(t)}}return e},i4=class extends i7(i2){constructor(){super(),eM(this,i),eM(this,s,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",eW(this,i,r)),this.addEventListener("keydown",t=>{("Enter"===t.key||" "===t.key)&&(t.preventDefault(),eW(this,i,r).call(this,t))})}get hidden(){return eT(this,s)}set hidden(t){this.isPlaceholder||(eF(this,s,"true"===t||!0===t),this.setAttribute("aria-hidden",t.toString()))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.isPlaceholder&&(eF(this,s,!0),this.setAttribute("aria-hidden","true")),this.updateComplete.then(()=>i5.instance.apply(this,"gds-option"))}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?(eF(this,s,!0),this.setAttribute("aria-hidden","true")):(eF(this,s,!1),this.setAttribute("aria-hidden","false"))}render(){let t=this.parentElement?.multiple,e=ig` <span
      class="checkbox ${iq({checked:this.selected})}"
    ></span>`;return t||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),ig`<div>${iI(t,()=>e)} <slot></slot></div>`}};s=new WeakMap,i=new WeakSet,r=function(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}}))},i4.styles=i3,eS([iR()],i4.prototype,"value",2),eS([iR({attribute:"aria-hidden",reflect:!0})],i4.prototype,"hidden",1),eS([iR({attribute:"aria-selected",reflect:!0})],i4.prototype,"selected",2),eS([iR({type:Boolean,reflect:!0})],i4.prototype,"isPlaceholder",2),eS([i6("isplaceholder")],i4.prototype,"_handlePlaceholderStatusChange",1),i4=eS([iJ("gds-option")],i4);var i8=sR`
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
`,i9=class extends i2{connectedCallback(){super.connectedCallback(),this.setAttribute("inert","true"),this.updateComplete.then(()=>i5.instance.apply(this,"gds-menu-heading"))}render(){return ig`<slot></slot>`}};i9.styles=i8,i9=eS([iJ("gds-menu-heading")],i9);var rt=class extends i7(i2){constructor(){super(...arguments),eM(this,o,()=>{this.dispatchEvent(new CustomEvent("gds-menu-item-click",{bubbles:!0,composed:!0}))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem"),this.addEventListener("keydown",t=>{("Enter"===t.key||" "===t.key)&&(t.preventDefault(),this.click())}),this.addEventListener("click",eT(this,o)),i5.instance.apply(this,"gds-option")}render(){return i1`<div><slot></slot></div>`}};o=new WeakMap,rt.styles=[i3],rt=eS([iJ("gds-menu-item")],rt);var re=Symbol.for(""),rs=t=>{if(t?.r===re)return t?._$litStatic$},ri=(t,...e)=>({_$litStatic$:e.reduce((e,s,i)=>e+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(s)+t[i+1],t[0]),r:re}),rr=new Map,ro=t=>(e,...s)=>{let i,r;let o=s.length,n=[],a=[],l,h=0,d=!1;for(;h<o;){for(l=e[h];h<o&&void 0!==(i=rs(r=s[h]));)l+=i+e[++h],d=!0;h!==o&&a.push(r),n.push(l),h++}if(h===o&&n.push(e[o]),d){let t=n.join("$$lit$$");void 0===(e=rr.get(t))&&(n.raw=n,rr.set(t,e=n)),s=a}return t(e,...s)},rn=ro(sg);ro(sf);var ra=t=>t??sv;function rl(t){t.updateComplete.then(()=>{let e=t.shadowRoot?.querySelectorAll("slot[gds-allow]");if(!e)return;for(let e of Array.from(t.childNodes))e.nodeType===Node.TEXT_NODE&&e.textContent?.trim()===""&&e.parentNode?.removeChild(e);let s=t=>{let e=[...t.getAttribute("gds-allow")?.split(" ")||[],"slot"];for(let s of Array.from(t.assignedNodes()))e.includes(s.nodeName.toLowerCase())||s.parentNode?.removeChild(s)};e.forEach(t=>{s(t),t.addEventListener("slotchange",()=>s(t))})})}var rh=ij(class extends iY{constructor(t){if(super(t),t.type!==iV.ELEMENT)throw Error("The `forwardAttributes` directive must be used in element bindings")}render(t){return sv}update(t,[e]){let s=t.element;Array.from((t.options?.host).attributes).forEach(t=>{e(t)&&s.setAttribute(t.name.replace("gds-",""),t.value)})}}),rd=`:host {
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
}`,rc=`/**
 * Do not edit directly
 * Generated on Fri, 12 Jul 2024 09:06:53 GMT
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
`,rp=`/**
 * Do not edit directly
 * Generated on Fri, 12 Jul 2024 09:06:53 GMT
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
`,ru=`/**
 * Do not edit directly
 * Generated on Fri, 12 Jul 2024 09:06:53 GMT
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
`,rg=`/**
 * Do not edit directly
 * Generated on Fri, 12 Jul 2024 09:06:53 GMT
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
`,rf=[sO(`/**
 * Do not edit directly
 * Generated on Fri, 12 Jul 2024 09:06:53 GMT
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
`),sO(rc),sO(rp),sO(ru),sO(rg)],ry=class extends iW{constructor(){super(...arguments),this.onmousedown=t=>{let e=t.target.getBoundingClientRect(),s=this._rippleEl;s&&(s.classList.remove("gds-ripple-effect"),this.style.setProperty("--gds-ripple-top",`${t.clientY-e.top}px`),this.style.setProperty("--gds-ripple-left",`${t.clientX-e.left}px`),setTimeout(()=>{s.classList.add("gds-ripple-effect")},20))}}render(){return ig`<div></div>`}};ry.styles=[rf,sO(rd)],eS([iU("div")],ry.prototype,"_rippleEl",2),ry=eS([iJ("gds-ripple")],ry);var rv=`@layer tokens, a11y, core, ranks, sizes, variants, disabled;

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
`,rm=new WeakMap,rb=class extends i2{constructor(){super(),this.invalid=!1,this.name="",this._handleFormReset=()=>{this.value=void 0};try{this.#l=this.attachInternals()}catch(t){this.#l={form:this.closest("form"),setFormValue:t=>{this.value=t},setValidity:(t,e)=>{this.invalid=t.customError},validationMessage:"",validity:{badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},willValidate:!0,checkValidity:()=>!0,reportValidity:()=>!0}}}#l;static{this.formAssociated=!0}get form(){return this.#l.form}get validity(){return this.#l.validity}get validationMessage(){return this.#l.validationMessage}get willValidate(){return this.#l.willValidate}checkValidity(){return this.#l.checkValidity()}reportValidity(){return this.#l.reportValidity()}connectedCallback(){super.connectedCallback(),this.#l.form?.addEventListener("reset",this._handleFormReset)}disconnectedCallback(){super.disconnectedCallback(),this.#l.form?.removeEventListener("reset",this._handleFormReset)}__handleValidityChange(){this.#l.setValidity({badInput:!1,customError:this.invalid,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!this.invalid},this.validationMessage||"Error message")}__handleValueChange(){this.#l.setFormValue(this.value)}};eS([iR({type:Boolean,reflect:!0,attribute:"aria-invalid",converter:{fromAttribute:Boolean,toAttribute:t=>t?.toString()}})],rb.prototype,"invalid",2),eS([iR()],rb.prototype,"value",2),eS([iR({reflect:!0})],rb.prototype,"name",2),eS([i6("invalid")],rb.prototype,"__handleValidityChange",1),eS([i6("value")],rb.prototype,"__handleValueChange",1);var r_=(t,...e)=>{let s=rm.get(t);return s||((s=t.map(t=>t.replace(/\n[\s]+</gm,"<"))).raw=t.raw,rm.set(t,s)),i1(s,...e)},rw=class extends rb{constructor(){super(),eM(this,a),eM(this,h),this.disabled=!1,this.rank="primary",this.variant="neutral",this.size="medium",this.label="",this.href="",eM(this,n,!1),eM(this,c,()=>{let t=this._mainSlot?.assignedNodes()??[];eF(this,n,1===t.length&&t.some(t=>t.nodeName.toLowerCase().startsWith("gds-icon"))),this.requestUpdate()}),eM(this,p,t=>{this.dispatchEvent(new CustomEvent("gds-click",{bubbles:!0,composed:!0,detail:t})),this.form&&!eT(this,a,l)&&("submit"===this.type?this.form.requestSubmit():"reset"===this.type&&this.form.reset())}),rl(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),i5.instance.apply(this,"gds-button")}render(){let t={button:!0,circle:eT(this,n),icon:eT(this,n),small:"small"===this.size,large:"large"===this.size,positive:"positive"===this.variant,negative:"negative"===this.variant,primary:"primary"===this.rank,secondary:"secondary"===this.rank,tertiary:"tertiary"===this.rank},e=eT(this,a,l)?ri`a`:ri`button`;return rn`
      <${e}
        class=${iq(t)}
        type="${ra(eT(this,a,l)?void 0:this.type)}"
        ?disabled="${this.disabled}"
        aria-label=${this.label||iv}
        href=${ra(eT(this,a,l)?this.href:void 0)}
        target=${ra(eT(this,a,l)?this.target:void 0)}
        rel=${ra(eT(this,a,l)?this.rel||eT(this,h,d):void 0)}
        download=${ra(eT(this,a,l)?this.download:void 0)}
        part="_button"
        @click="${eT(this,p)}"
        ${rh(t=>t.name.startsWith("gds-aria")||"gds-role"===t.name)}
      >
        <slot name="lead"></slot>
        <slot @slotchange=${eT(this,c)}></slot>
        <slot name="trail"></slot>
        ${iI(!this._isUsingTransitionalStyles,()=>r_`<gds-ripple></gds-ripple>`)}
      </${e}>
    `}};n=new WeakMap,a=new WeakSet,l=function(){return this.href.length>0},h=new WeakSet,d=function(){return"_blank"===this.target?"noreferrer noopener":void 0},c=new WeakMap,p=new WeakMap,rw.styles=[rf,sO(rv)],rw.shadowRootOptions={mode:"open",delegatesFocus:!0},eS([iR({type:Boolean,reflect:!0})],rw.prototype,"disabled",2),eS([iR({reflect:!0})],rw.prototype,"type",2),eS([iR({reflect:!0})],rw.prototype,"rank",2),eS([iR({reflect:!0})],rw.prototype,"variant",2),eS([iR({reflect:!0})],rw.prototype,"size",2),eS([iR()],rw.prototype,"label",2),eS([iR()],rw.prototype,"href",2),eS([iR()],rw.prototype,"target",2),eS([iR()],rw.prototype,"rel",2),eS([iR()],rw.prototype,"download",2),eS([iU("slot:not([name])")],rw.prototype,"_mainSlot",2),rw=eS([iJ("gds-button")],rw);var r$=`@layer tokens, a11y, core, variants, sizes, sets, disabled;

@layer tokens {
  :host {
    --_gap: 4px;

    --_padding-inline: var(--gds-space-m);
    --_padding-block: var(--gds-space-xs);

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
    --_padding-inline: var(--gds-space-s);
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
`,rx=class extends i2{constructor(){super(),eM(this,u),eM(this,f),this.disabled=!1,this.label="",this.href="",this.compact=!1,this.selected=!1,rl(this)}render(){let t={button:!0,selected:this.selected,compact:this.compact},e=eT(this,u,g)?ri`a`:ri`button`;return rn`
      <${e}
        class="${iq(t)}"
        ?disabled="${this.disabled}"
        aria-label="${this.label}"
        href=${ra(eT(this,u,g)?this.href:void 0)}
        target=${ra(eT(this,u,g)?this.target:void 0)}
        rel=${ra(eT(this,u,g)?this.rel||eT(this,f,y):void 0)}
        download=${ra(eT(this,u,g)?this.download:void 0)}
      >
        <slot name="lead"></slot>
        <slot></slot>
        <slot name="trail"></slot>
      </${e}>
    `}};u=new WeakSet,g=function(){return this.href.length>0},f=new WeakSet,y=function(){return"_blank"===this.target?"noreferrer noopener":void 0},rx.styles=[rf,sO(r$)],rx.shadowRootOptions={mode:"open",delegatesFocus:!0},eS([iR({type:Boolean,reflect:!0})],rx.prototype,"disabled",2),eS([iR()],rx.prototype,"label",2),eS([iR()],rx.prototype,"href",2),eS([iR()],rx.prototype,"target",2),eS([iR()],rx.prototype,"rel",2),eS([iR()],rx.prototype,"download",2),eS([iR({type:Boolean,reflect:!0})],rx.prototype,"compact",2),eS([iR({type:Boolean,reflect:!0})],rx.prototype,"selected",2),rx=eS([iJ("gds-menu-button")],rx);var rk=(t,...e)=>({strTag:!0,strings:t,values:e}),rA=t=>"string"!=typeof t&&"strTag"in t,rE=(t,e,s)=>{let i=t[0];for(let r=1;r<t.length;r++)i+=e[s?s[r-1]:r-1]+t[r];return i},rS="lit-localize-status",rC=class{constructor(t){this.__litLocalizeEventHandler=t=>{"ready"===t.detail.status&&this.host.requestUpdate()},this.host=t}hostConnected(){window.addEventListener(rS,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(rS,this.__litLocalizeEventHandler)}},rT=t=>t.addController(new rC(t)),rM=class{constructor(){this.settled=!1,this.promise=new Promise((t,e)=>{this._resolve=t,this._reject=e})}resolve(t){this.settled=!0,this._resolve(t)}reject(t){this.settled=!0,this._reject(t)}},rF=[];for(let t=0;t<256;t++)rF[t]=(t>>4&15).toString(16)+(15&t).toString(16);new rM().resolve();var rD=t=>rA(t)?rE(t.strings,t.values):t,rW=sR`
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
`,{I:rL}={P:e7,A:e4,C:e8,M:1,L:sw,R:sk,D:sr,V:sx,I:sA,H:sE,N:sC,U:sT,B:sS,F:sM},rN=t=>null===t||"object"!=typeof t&&"function"!=typeof t,rP=t=>void 0===t.strings,rO=()=>document.createComment(""),rR=(t,e,s)=>{let i=t._$AA.parentNode,r=void 0===e?t._$AB:e._$AA;if(void 0===s)s=new rL(i.insertBefore(rO(),r),i.insertBefore(rO(),r),t,t.options);else{let e=s._$AB.nextSibling,o=s._$AM,n=o!==t;if(n){let e;s._$AQ?.(t),s._$AM=t,void 0!==s._$AP&&(e=t._$AU)!==o._$AU&&s._$AP(e)}if(e!==r||n){let t=s._$AA;for(;t!==e;){let e=t.nextSibling;i.insertBefore(t,r),t=e}}}return s},rz=(t,e,s=t)=>(t._$AI(e,s),t),rH={},rU=(t,e=rH)=>t._$AH=e,rB=t=>t._$AH,rI=t=>{t._$AP?.(!1,!0);let e=t._$AA,s=t._$AB.nextSibling;for(;e!==s;){let t=e.nextSibling;e.remove(),e=t}},rV=(t,e)=>{let s=t._$AN;if(void 0===s)return!1;for(let t of s)t._$AO?.(e,!1),rV(t,e);return!0},rj=t=>{let e,s;do{if(void 0===(e=t._$AM))break;(s=e._$AN).delete(t),t=e}while(0===s?.size)},rY=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(void 0===s)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),rK(e)}};function rq(t){void 0!==this._$AN?(rj(this),this._$AM=t,rY(this)):this._$AM=t}function rG(t,e=!1,s=0){let i=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size){if(e){if(Array.isArray(i))for(let t=s;t<i.length;t++)rV(i[t],!1),rj(i[t]);else null!=i&&(rV(i,!1),rj(i))}else rV(this,t)}}var rK=t=>{t.type==iV.CHILD&&(t._$AP??=rG,t._$AQ??=rq)},rX=class extends iY{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),rY(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(rV(this,t),rj(this))}setValue(t){if(rP(this._$Ct))this._$Ct._$AI(t,this);else{let e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}},rZ=()=>new rJ,rJ=class{},rQ=new WeakMap,r0=ij(class extends rX{render(t){return sv}update(t,[e]){let s=e!==this.Y;return s&&void 0!==this.Y&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.Y=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),sv}rt(t){if("function"==typeof this.Y){let e=this.ht??globalThis,s=rQ.get(e);void 0===s&&(s=new WeakMap,rQ.set(e,s)),void 0!==s.get(this.Y)&&this.Y.call(this.ht,void 0),s.set(this.Y,t),void 0!==t&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){return"function"==typeof this.Y?rQ.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),r1=class{constructor(t){this.#h=t=>{let e=t.target;if(!this.host.navigableItems.includes(e))return;let s=!1;if("ArrowDown"===t.key){let t=this.host.navigableItems.indexOf(e)+1,i=this.host.navigableItems[t];i?.focus(),s=!0}else if("ArrowUp"===t.key){let t=this.host.navigableItems.indexOf(e)-1,i=this.host.navigableItems[t];i?.focus(),s=!0}else if("Home"===t.key)this.host.navigableItems[0]?.focus(),s=!0;else if("End"===t.key)this.host.navigableItems[this.host.navigableItems.length-1]?.focus(),s=!0;else{let e=t.key.toLowerCase();if(1!==e.length)return;if(e>="a"&&e<="z"||e>="0"&&e<="9"){let t=this.host.navigableItems.find(t=>{let s=t.textContent?.trim().toLowerCase();return s?.startsWith(e)});t?.focus(),s=!0}}s&&(t.preventDefault(),t.stopPropagation())},(this.host=t).addController(this)}hostConnected(){this.host.addEventListener("keydown",this.#h)}hostDisconnected(){this.host.removeEventListener("keydown",this.#h)}#h};function r2(t){let e=t;for(;e.assignedElements().length>0&&"SLOT"===e.assignedElements()[0].nodeName;)e=e.assignedElements()[0];return e}var r5=class extends i2{constructor(){super(),eM(this,v,rZ()),new r1(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),i5.instance.apply(this,"gds-listbox")}get navigableItems(){return eT(this,v).value&&r2(eT(this,v).value).assignedElements().filter(t=>!t.hasAttribute("isplaceholder")&&"gds-menu-item"===t.gdsElementName)||[]}focus(){this.navigableItems[0]?.focus()}render(){return i1`<slot ${r0(eT(this,v))}></slot>`}};v=new WeakMap,r5=eS([iJ("gds-menu")],r5);var r3=Math.min,r6=Math.max,r7=Math.round,r4=Math.floor,r8=t=>({x:t,y:t}),r9={left:"right",right:"left",bottom:"top",top:"bottom"},ot={start:"end",end:"start"};function oe(t,e){return"function"==typeof t?t(e):t}function os(t){return t.split("-")[0]}function oi(t){return t.split("-")[1]}function or(t){return"y"===t?"height":"width"}function oo(t){return["top","bottom"].includes(os(t))?"y":"x"}function on(t){return"x"===oo(t)?"y":"x"}function oa(t){return t.replace(/start|end/g,t=>ot[t])}function ol(t){return t.replace(/left|right|bottom|top/g,t=>r9[t])}function oh(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function od(t,e,s){let i,{reference:r,floating:o}=t,n=oo(e),a=on(e),l=or(a),h=os(e),d="y"===n,c=r.x+r.width/2-o.width/2,p=r.y+r.height/2-o.height/2,u=r[l]/2-o[l]/2;switch(h){case"top":i={x:c,y:r.y-o.height};break;case"bottom":i={x:c,y:r.y+r.height};break;case"right":i={x:r.x+r.width,y:p};break;case"left":i={x:r.x-o.width,y:p};break;default:i={x:r.x,y:r.y}}switch(oi(e)){case"start":i[a]-=u*(s&&d?-1:1);break;case"end":i[a]+=u*(s&&d?-1:1)}return i}var oc=async(t,e,s)=>{let{placement:i="bottom",strategy:r="absolute",middleware:o=[],platform:n}=s,a=o.filter(Boolean),l=await (null==n.isRTL?void 0:n.isRTL(e)),h=await n.getElementRects({reference:t,floating:e,strategy:r}),{x:d,y:c}=od(h,i,l),p=i,u={},g=0;for(let s=0;s<a.length;s++){let{name:o,fn:f}=a[s],{x:y,y:v,data:m,reset:b}=await f({x:d,y:c,initialPlacement:i,placement:p,strategy:r,middlewareData:u,rects:h,platform:n,elements:{reference:t,floating:e}});d=null!=y?y:d,c=null!=v?v:c,u={...u,[o]:{...u[o],...m}},b&&g<=50&&(g++,"object"==typeof b&&(b.placement&&(p=b.placement),b.rects&&(h=!0===b.rects?await n.getElementRects({reference:t,floating:e,strategy:r}):b.rects),{x:d,y:c}=od(h,p,l)),s=-1)}return{x:d,y:c,placement:p,strategy:r,middlewareData:u}};async function op(t,e){var s;void 0===e&&(e={});let{x:i,y:r,platform:o,rects:n,elements:a,strategy:l}=t,{boundary:h="clippingAncestors",rootBoundary:d="viewport",elementContext:c="floating",altBoundary:p=!1,padding:u=0}=oe(e,t),g="number"!=typeof u?{top:0,right:0,bottom:0,left:0,...u}:{top:u,right:u,bottom:u,left:u},f=a[p?"floating"===c?"reference":"floating":c],y=oh(await o.getClippingRect({element:null==(s=await (null==o.isElement?void 0:o.isElement(f)))||s?f:f.contextElement||await (null==o.getDocumentElement?void 0:o.getDocumentElement(a.floating)),boundary:h,rootBoundary:d,strategy:l})),v="floating"===c?{...n.floating,x:i,y:r}:n.reference,m=await (null==o.getOffsetParent?void 0:o.getOffsetParent(a.floating)),b=await (null==o.isElement?void 0:o.isElement(m))&&await (null==o.getScale?void 0:o.getScale(m))||{x:1,y:1},_=oh(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:v,offsetParent:m,strategy:l}):v);return{top:(y.top-_.top+g.top)/b.y,bottom:(_.bottom-y.bottom+g.bottom)/b.y,left:(y.left-_.left+g.left)/b.x,right:(_.right-y.right+g.right)/b.x}}async function ou(t,e){let{placement:s,platform:i,elements:r}=t,o=await (null==i.isRTL?void 0:i.isRTL(r.floating)),n=os(s),a=oi(s),l="y"===oo(s),h=["left","top"].includes(n)?-1:1,d=o&&l?-1:1,c=oe(e,t),{mainAxis:p,crossAxis:u,alignmentAxis:g}="number"==typeof c?{mainAxis:c,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...c};return a&&"number"==typeof g&&(u="end"===a?-1*g:g),l?{x:u*d,y:p*h}:{x:p*h,y:u*d}}function og(t){return ov(t)?(t.nodeName||"").toLowerCase():"#document"}function of(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function oy(t){var e;return null==(e=(ov(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function ov(t){return t instanceof Node||t instanceof of(t).Node}function om(t){return t instanceof Element||t instanceof of(t).Element}function ob(t){return t instanceof HTMLElement||t instanceof of(t).HTMLElement}function o_(t){return"undefined"!=typeof ShadowRoot&&(t instanceof ShadowRoot||t instanceof of(t).ShadowRoot)}function ow(t){let{overflow:e,overflowX:s,overflowY:i,display:r}=oE(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+s)&&!["inline","contents"].includes(r)}function o$(t){let e=ok(),s=oE(t);return"none"!==s.transform||"none"!==s.perspective||!!s.containerType&&"normal"!==s.containerType||!e&&!!s.backdropFilter&&"none"!==s.backdropFilter||!e&&!!s.filter&&"none"!==s.filter||["transform","perspective","filter"].some(t=>(s.willChange||"").includes(t))||["paint","layout","strict","content"].some(t=>(s.contain||"").includes(t))}function ox(t){let e=oC(t);for(;ob(e)&&!oA(e);){if(o$(e))return e;e=oC(e)}return null}function ok(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function oA(t){return["html","body","#document"].includes(og(t))}function oE(t){return of(t).getComputedStyle(t)}function oS(t){return om(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function oC(t){if("html"===og(t))return t;let e=t.assignedSlot||t.parentNode||o_(t)&&t.host||oy(t);return o_(e)?e.host:e}function oT(t,e,s){var i;void 0===e&&(e=[]),void 0===s&&(s=!0);let r=function t(e){let s=oC(e);return oA(s)?e.ownerDocument?e.ownerDocument.body:e.body:ob(s)&&ow(s)?s:t(s)}(t),o=r===(null==(i=t.ownerDocument)?void 0:i.body),n=of(r);return o?e.concat(n,n.visualViewport||[],ow(r)?r:[],n.frameElement&&s?oT(n.frameElement):[]):e.concat(r,oT(r,[],s))}function oM(t){let e=oE(t),s=parseFloat(e.width)||0,i=parseFloat(e.height)||0,r=ob(t),o=r?t.offsetWidth:s,n=r?t.offsetHeight:i,a=r7(s)!==o||r7(i)!==n;return a&&(s=o,i=n),{width:s,height:i,$:a}}function oF(t){return om(t)?t:t.contextElement}function oD(t){let e=oF(t);if(!ob(e))return r8(1);let s=e.getBoundingClientRect(),{width:i,height:r,$:o}=oM(e),n=(o?r7(s.width):s.width)/i,a=(o?r7(s.height):s.height)/r;return n&&Number.isFinite(n)||(n=1),a&&Number.isFinite(a)||(a=1),{x:n,y:a}}var oW=r8(0);function oL(t){let e=of(t);return ok()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:oW}function oN(t,e,s,i){var r;void 0===e&&(e=!1),void 0===s&&(s=!1);let o=t.getBoundingClientRect(),n=oF(t),a=r8(1);e&&(i?om(i)&&(a=oD(i)):a=oD(t));let l=(void 0===(r=s)&&(r=!1),i&&(!r||i===of(n))&&r)?oL(n):r8(0),h=(o.left+l.x)/a.x,d=(o.top+l.y)/a.y,c=o.width/a.x,p=o.height/a.y;if(n){let t=of(n),e=i&&om(i)?of(i):i,s=t.frameElement;for(;s&&i&&e!==t;){let t=oD(s),e=s.getBoundingClientRect(),i=oE(s),r=e.left+(s.clientLeft+parseFloat(i.paddingLeft))*t.x,o=e.top+(s.clientTop+parseFloat(i.paddingTop))*t.y;h*=t.x,d*=t.y,c*=t.x,p*=t.y,h+=r,d+=o,s=of(s).frameElement}}return oh({width:c,height:p,x:h,y:d})}var oP=[":popover-open",":modal"];function oO(t){let e=!1,s=0,i=0;if(oP.forEach(s=>{!function(s){try{e=e||t.matches(s)}catch(t){}}(s)}),e){let e=ox(t);if(e){let t=e.getBoundingClientRect();s=t.x,i=t.y}}return[e,s,i]}function oR(t){return oN(oy(t)).left+oS(t).scrollLeft}function oz(t,e,s){let i;if("viewport"===e)i=function(t,e){let s=of(t),i=oy(t),r=s.visualViewport,o=i.clientWidth,n=i.clientHeight,a=0,l=0;if(r){o=r.width,n=r.height;let t=ok();(!t||t&&"fixed"===e)&&(a=r.offsetLeft,l=r.offsetTop)}return{width:o,height:n,x:a,y:l}}(t,s);else if("document"===e)i=function(t){let e=oy(t),s=oS(t),i=t.ownerDocument.body,r=r6(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),o=r6(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight),n=-s.scrollLeft+oR(t),a=-s.scrollTop;return"rtl"===oE(i).direction&&(n+=r6(e.clientWidth,i.clientWidth)-r),{width:r,height:o,x:n,y:a}}(oy(t));else if(om(e))i=function(t,e){let s=oN(t,!0,"fixed"===e),i=s.top+t.clientTop,r=s.left+t.clientLeft,o=ob(t)?oD(t):r8(1),n=t.clientWidth*o.x;return{width:n,height:t.clientHeight*o.y,x:r*o.x,y:i*o.y}}(e,s);else{let s=oL(t);i={...e,x:e.x-s.x,y:e.y-s.y}}return oh(i)}function oH(t,e){return ob(t)&&"fixed"!==oE(t).position?e?e(t):t.offsetParent:null}function oU(t,e){let s=of(t);if(!ob(t))return s;let i=oH(t,e);for(;i&&["table","td","th"].includes(og(i))&&"static"===oE(i).position;)i=oH(i,e);return i&&("html"===og(i)||"body"===og(i)&&"static"===oE(i).position&&!o$(i))?s:i||ox(t)||s}var oB=async function(t){let e=this.getOffsetParent||oU,s=this.getDimensions;return{reference:function(t,e,s,i){let r=ob(e),o=oy(e),n="fixed"===s,a=oN(t,!0,n,e),l={scrollLeft:0,scrollTop:0},h=r8(0);if(r||!r&&!n){if(("body"!==og(e)||ow(o))&&(l=oS(e)),r){let t=oN(e,!0,n,e);h.x=t.x+e.clientLeft,h.y=t.y+e.clientTop}else o&&(h.x=oR(o))}let d=a.left+l.scrollLeft-h.x,c=a.top+l.scrollTop-h.y,[p,u,g]=oO(i);return p&&(d+=u,c+=g,r&&(d+=e.clientLeft,c+=e.clientTop)),{x:d,y:c,width:a.width,height:a.height}}(t.reference,await e(t.floating),t.strategy,t.floating),floating:{x:0,y:0,...await s(t.floating)}}},oI={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{elements:e,rect:s,offsetParent:i,strategy:r}=t,o=oy(i),[n]=e?oO(e.floating):[!1];if(i===o||n)return s;let a={scrollLeft:0,scrollTop:0},l=r8(1),h=r8(0),d=ob(i);if((d||!d&&"fixed"!==r)&&(("body"!==og(i)||ow(o))&&(a=oS(i)),ob(i))){let t=oN(i);l=oD(i),h.x=t.x+i.clientLeft,h.y=t.y+i.clientTop}return{width:s.width*l.x,height:s.height*l.y,x:s.x*l.x-a.scrollLeft*l.x+h.x,y:s.y*l.y-a.scrollTop*l.y+h.y}},getDocumentElement:oy,getClippingRect:function(t){let{element:e,boundary:s,rootBoundary:i,strategy:r}=t,o=[..."clippingAncestors"===s?function(t,e){let s=e.get(t);if(s)return s;let i=oT(t,[],!1).filter(t=>om(t)&&"body"!==og(t)),r=null,o="fixed"===oE(t).position,n=o?oC(t):t;for(;om(n)&&!oA(n);){let e=oE(n),s=o$(n);s||"fixed"!==e.position||(r=null),(o?!s&&!r:!s&&"static"===e.position&&!!r&&["absolute","fixed"].includes(r.position)||ow(n)&&!s&&function t(e,s){let i=oC(e);return!(i===s||!om(i)||oA(i))&&("fixed"===oE(i).position||t(i,s))}(t,n))?i=i.filter(t=>t!==n):r=e,n=oC(n)}return e.set(t,i),i}(e,this._c):[].concat(s),i],n=o[0],a=o.reduce((t,s)=>{let i=oz(e,s,r);return t.top=r6(i.top,t.top),t.right=r3(i.right,t.right),t.bottom=r3(i.bottom,t.bottom),t.left=r6(i.left,t.left),t},oz(e,n,r));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},getOffsetParent:oU,getElementRects:oB,getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){let{width:e,height:s}=oM(t);return{width:e,height:s}},getScale:oD,isElement:om,isRTL:function(t){return"rtl"===oE(t).direction}},oV=(t,e,s)=>{let i=new Map,r={platform:oI,...s},o={...r.platform,_c:i};return oc(t,e,{...r,platform:o})},oj=class extends iY{constructor(t){if(super(t),this.it=sv,t.type!==iV.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===sv||null==t)return this._t=void 0,this.it=t;if(t===sy)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;let e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};oj.directiveName="unsafeHTML",oj.resultType=1;var oY=ij(oj),oq=sR`
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
`,oG=class extends i2{constructor(){super(...arguments),this.width=24,this.height=24,this.solid=!1,this.box=!1,this.label=""}static{this.styles=[oq]}render(){let t="seb"===this.constructor._name,e=t?"55":this.width,s=t?"24":this.height,i=t?"0 0 55 24":this.box||"0 0 24 24",r=`<svg
      width="${e}"
      height="${s}"
      viewBox="${i}"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ${this.label?`aria-label="${this.label}"`:`aria-label="${this.constructor._name}"`}
      role="graphics-symbol"
    >
      ${this.solid?this.constructor._solidSVG:this.constructor._regularSVG}
    </svg>`;return ig`${oY(r)}`}};eS([iR({type:Number})],oG.prototype,"width",2),eS([iR({type:Number})],oG.prototype,"height",2),eS([iR({type:Boolean})],oG.prototype,"solid",2),eS([iR({type:String})],oG.prototype,"box",2),eS([iR({type:String})],oG.prototype,"label",2);var oK=class extends oG{};oK._regularSVG='<path d="M7.75 7.75L16.25 16.25M16.25 7.75L7.75 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',oK._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7.11612 7.11612C7.60427 6.62796 8.39573 6.62796 8.88388 7.11612L12 10.2322L15.1161 7.11612C15.6043 6.62796 16.3957 6.62796 16.8839 7.11612C17.372 7.60427 17.372 8.39573 16.8839 8.88388L13.7678 12L16.8839 15.1161C17.372 15.6043 17.372 16.3957 16.8839 16.8839C16.3957 17.372 15.6043 17.372 15.1161 16.8839L12 13.7678L8.88388 16.8839C8.39573 17.372 7.60427 17.372 7.11612 16.8839C6.62796 16.3957 6.62796 15.6043 7.11612 15.1161L10.2322 12L7.11612 8.88388C6.62796 8.39573 6.62796 7.60427 7.11612 7.11612Z" fill="currentColor"/>',oK._name="cross small",oK=eS([iJ("gds-icon-cross-small")],oK);var oX=sR`
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

    dialog:not(.has-backdrop)::backdrop {
      background-color: transparent;
      display: block;
      position: fixed;
    }
  }
`,oZ=class extends i2{constructor(){super(...arguments),eM(this,m),eM(this,E),eM(this,C),eM(this,M),eM(this,D),this.open=!1,this.popupRole="dialog",this.label=void 0,this.placement="bottom-start",this.disableMobileStyles=!1,this.calcMinWidth=t=>`${t.offsetWidth}px`,this.calcMaxWidth=t=>"auto",this.calcMinHeight=t=>"auto",this.calcMaxHeight=t=>"500px",this.nonmodal=!1,this.floatingUIMiddleware=[function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){var s,i;let{x:r,y:o,placement:n,middlewareData:a}=e,l=await ou(e,t);return n===(null==(s=a.offset)?void 0:s.placement)&&null!=(i=a.arrow)&&i.alignmentOffset?{}:{x:r+l.x,y:o+l.y,data:{...l,placement:n}}}}}(8),function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var s,i,r,o,n;let{placement:a,middlewareData:l,rects:h,initialPlacement:d,platform:c,elements:p}=e,{mainAxis:u=!0,crossAxis:g=!0,fallbackPlacements:f,fallbackStrategy:y="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:m=!0,...b}=oe(t,e);if(null!=(s=l.arrow)&&s.alignmentOffset)return{};let _=os(a),w=os(d)===d,$=await (null==c.isRTL?void 0:c.isRTL(p.floating)),x=f||(w||!m?[ol(d)]:function(t){let e=ol(t);return[oa(t),e,oa(e)]}(d));f||"none"===v||x.push(...function(t,e,s,i){let r=oi(t),o=function(t,e,s){let i=["left","right"],r=["right","left"];switch(t){case"top":case"bottom":if(s)return e?r:i;return e?i:r;case"left":case"right":return e?["top","bottom"]:["bottom","top"];default:return[]}}(os(t),"start"===s,i);return r&&(o=o.map(t=>t+"-"+r),e&&(o=o.concat(o.map(oa)))),o}(d,m,v,$));let k=[d,...x],A=await op(e,b),E=[],S=(null==(i=l.flip)?void 0:i.overflows)||[];if(u&&E.push(A[_]),g){let t=function(t,e,s){void 0===s&&(s=!1);let i=oi(t),r=on(t),o=or(r),n="x"===r?i===(s?"end":"start")?"right":"left":"start"===i?"bottom":"top";return e.reference[o]>e.floating[o]&&(n=ol(n)),[n,ol(n)]}(a,h,$);E.push(A[t[0]],A[t[1]])}if(S=[...S,{placement:a,overflows:E}],!E.every(t=>t<=0)){let t=((null==(r=l.flip)?void 0:r.index)||0)+1,e=k[t];if(e)return{data:{index:t,overflows:S},reset:{placement:e}};let s=null==(o=S.filter(t=>t.overflows[0]<=0).sort((t,e)=>t.overflows[1]-e.overflows[1])[0])?void 0:o.placement;if(!s)switch(y){case"bestFit":{let t=null==(n=S.map(t=>[t.placement,t.overflows.filter(t=>t>0).reduce((t,e)=>t+e,0)]).sort((t,e)=>t[1]-e[1])[0])?void 0:n[0];t&&(s=t);break}case"initialPlacement":s=d}if(a!==s)return{reset:{placement:s}}}return{}}}}()],this._trigger=void 0,this._anchor=void 0,this._isVirtKbVisible=!1,eM(this,_,void 0),eM(this,w,!1),eM(this,$,void 0),eM(this,x,()=>{this.open=!1,eT(this,k).call(this,"cancel")}),eM(this,k,t=>{this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:this.open,reason:t},bubbles:!1,composed:!1}))}),eM(this,A,t=>{t.stopPropagation(),t.preventDefault(),this.open=!1,eT(this,k).call(this,"close"),setTimeout(()=>this._trigger?.focus(),250)}),eM(this,L,t=>{("ArrowDown"===t.key||"ArrowUp"===t.key)&&(t.preventDefault(),this.open=!0,eT(this,k).call(this,"show")),"Escape"===t.key&&this.open&&eT(this,x).call(this)}),eM(this,N,t=>{t.preventDefault(),this.open=!this.open,eT(this,k).call(this,this.open?"show":"close")}),eM(this,P,()=>{let t=this._elDefaultSlot?.assignedElements()[0];this.updateComplete.then(()=>{t?.focus()})}),eM(this,O,t=>{let e=this._elDialog;if((t.clientX>0||t.clientY>0)&&e&&this.open){let s=e.getBoundingClientRect();s.top<=t.clientY&&t.clientY<=s.top+s.height&&s.left<=t.clientX&&t.clientX<=s.left+s.width||(this.open=!1,eT(this,k).call(this,"close"))}})}_handleTriggerRefChanged(){this.triggerRef?.then(t=>{t&&(this._trigger=t)})}_handleAnchorRefChanged(){this.anchorRef?.then(t=>{t&&(this._anchor=t)})}_handleTriggerChanged(){eW(this,E,S).call(this),eW(this,M,F).call(this)}_handleAnchorChanged(){eW(this,D,W).call(this)}connectedCallback(){super.connectedCallback(),i5.instance.apply(this,"gds-popover"),eW(this,E,S).call(this),this._handleOpenChange(),this.addEventListener("keydown",t=>{"Escape"===t.key&&this.open&&(eT(this,x).call(this),t.stopPropagation(),t.preventDefault())}),this.addEventListener("focusin",t=>{let e=t.target;"INPUT"===e.tagName||"TEXTAREA"===e.tagName?this._isVirtKbVisible=!0:this._isVirtKbVisible=!1}),this.addEventListener("blurin",t=>{this._isVirtKbVisible=!1})}disconnectedCallback(){super.disconnectedCallback(),eW(this,C,T).call(this)}render(){return ig`<slot
        name="trigger"
        @slotchange=${eW(this,m,b)}
      ></slot>
      <div ?hidden="${!this.open}">
        <dialog
          class="${iq({"v-kb-visible":this._isVirtKbVisible,"use-modal-in-mobile":!this.disableMobileStyles,"has-backdrop":!!(this.backdrop&&"true"===this.backdrop)})}"
          aria-hidden="${String(!this.open)}"
          @close=${()=>this.open&&eT(this,x).call(this)}
        >
          <header>
            <h2>${this.label}</h2>
            <gds-button
              @click=${eT(this,A)}
              class="close"
              label="${rD("Close")}"
              size="small"
              rank="tertiary"
            >
              <gds-icon-cross-small></icon-cross-small>
            </gds-button>
          </header>
          <slot></slot>
        </dialog>
      </div>`}_handleOpenChange(){this.updateComplete.then(()=>{this._trigger?.setAttribute("aria-expanded",String(this.open)),this.open?(this.nonmodal?this._elDialog?.setAttribute("open","true"):this._elDialog?.showModal(),eT(this,P).call(this),requestAnimationFrame(()=>{eT(this,$)&&(eT(this,$).show=!0)}),setTimeout(()=>eT(this,P).call(this),250),setTimeout(()=>document.addEventListener("click",eT(this,O)),0)):(this._elDialog?.close(),document.removeEventListener("click",eT(this,O)),eT(this,$)&&(eT(this,$).show=!1))})}_handleBackdropChange(){let t=this.parentElement?.getRootNode();this.backdrop&&t&&eF(this,$,t.querySelector(this.backdrop))}_handleMobileLayout(t){var e;eF(this,w,t),t&&!this.disableMobileStyles?(null==(e=eT(this,_))||e.call(this),this._elDialog?.style.removeProperty("left"),this._elDialog?.style.removeProperty("top"),this._elDialog?.style.removeProperty("minWidth"),this.updateComplete.then(()=>{this.open&&this._elDialog?.showModal()})):this.updateComplete.then(()=>{eW(this,D,W).call(this)})}};m=new WeakSet,b=function(){this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]&&(this._trigger=this._elTriggerSlot.assignedElements()[0],this._anchor=this._elTriggerSlot.assignedElements()[0])},_=new WeakMap,w=new WeakMap,$=new WeakMap,x=new WeakMap,k=new WeakMap,A=new WeakMap,E=new WeakSet,S=function(){this._trigger?.addEventListener("keydown",eT(this,L)),this._trigger?.addEventListener("click",eT(this,N))},C=new WeakSet,T=function(){var t;this._trigger?.removeEventListener("keydown",eT(this,L)),this._trigger?.removeEventListener("click",eT(this,N)),null==(t=eT(this,_))||t.call(this)},M=new WeakSet,F=function(){if(this._trigger){this._trigger?.setAttribute("aria-expanded",String(this.open)),this._trigger.nodeName.startsWith("GDS-")||["A","BUTTON","INPUT","TEXTAREA"].includes(this._trigger.nodeName)||(this._trigger.setAttribute("tabindex","0"),this._trigger.setAttribute("role","button"));let t=this._trigger.nodeName.startsWith("GDS-")?"gds-aria-haspopup":"aria-haspopup";null===this._trigger.getAttribute(t)&&this._trigger.setAttribute(t,this.popupRole)}},D=new WeakSet,W=function(){if(!this._anchor||!this._elDialog)return;let t=this._anchor,e=this._elDialog;!t||!e||eT(this,w)&&!this.disableMobileStyles||(eT(this,_)&&eT(this,_).call(this),eF(this,_,function(t,e,s,i){let r;void 0===i&&(i={});let{ancestorScroll:o=!0,ancestorResize:n=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:l="function"==typeof IntersectionObserver,animationFrame:h=!1}=i,d=oF(t),c=o||n?[...d?oT(d):[],...oT(e)]:[];c.forEach(t=>{o&&t.addEventListener("scroll",s,{passive:!0}),n&&t.addEventListener("resize",s)});let p=d&&l?function(t,e){let s,i=null,r=oy(t);function o(){var t;clearTimeout(s),null==(t=i)||t.disconnect(),i=null}return function n(a,l){void 0===a&&(a=!1),void 0===l&&(l=1),o();let{left:h,top:d,width:c,height:p}=t.getBoundingClientRect();if(a||e(),!c||!p)return;let u=r4(d),g=r4(r.clientWidth-(h+c)),f={rootMargin:-u+"px "+-g+"px "+-r4(r.clientHeight-(d+p))+"px "+-r4(h)+"px",threshold:r6(0,r3(1,l))||1},y=!0;function v(t){let e=t[0].intersectionRatio;if(e!==l){if(!y)return n();e?n(!1,e):s=setTimeout(()=>{n(!1,1e-7)},100)}y=!1}try{i=new IntersectionObserver(v,{...f,root:r.ownerDocument})}catch(t){i=new IntersectionObserver(v,f)}i.observe(t)}(!0),o}(d,s):null,u=-1,g=null;a&&(g=new ResizeObserver(t=>{let[i]=t;i&&i.target===d&&g&&(g.unobserve(e),cancelAnimationFrame(u),u=requestAnimationFrame(()=>{var t;null==(t=g)||t.observe(e)})),s()}),d&&!h&&g.observe(d),g.observe(e));let f=h?oN(t):null;return h&&function e(){let i=oN(t);f&&(i.x!==f.x||i.y!==f.y||i.width!==f.width||i.height!==f.height)&&s(),f=i,r=requestAnimationFrame(e)}(),s(),()=>{var t;c.forEach(t=>{o&&t.removeEventListener("scroll",s),n&&t.removeEventListener("resize",s)}),null==p||p(),null==(t=g)||t.disconnect(),g=null,h&&cancelAnimationFrame(r)}}(t,e,()=>{Object.assign(e.style,{minWidth:this.calcMinWidth(t),maxWidth:this.calcMaxWidth(t),minHeight:this.calcMinHeight(t),maxHeight:this.calcMaxHeight(t)}),oV(t,e,{placement:this.placement,middleware:this.floatingUIMiddleware,strategy:"fixed"}).then(({x:t,y:s})=>Object.assign(e.style,{left:`${t}px`,top:`${s}px`}))})))},L=new WeakMap,N=new WeakMap,P=new WeakMap,O=new WeakMap,oZ.styles=sO(oX),eS([iR({type:Boolean,reflect:!0})],oZ.prototype,"open",2),eS([iR({attribute:"popup-role"})],oZ.prototype,"popupRole",2),eS([iR({attribute:!1})],oZ.prototype,"triggerRef",2),eS([iR({attribute:!1})],oZ.prototype,"anchorRef",2),eS([iR()],oZ.prototype,"label",2),eS([iR()],oZ.prototype,"placement",2),eS([iR()],oZ.prototype,"disableMobileStyles",2),eS([iR({attribute:!1})],oZ.prototype,"calcMinWidth",2),eS([iR({attribute:!1})],oZ.prototype,"calcMaxWidth",2),eS([iR({attribute:!1})],oZ.prototype,"calcMinHeight",2),eS([iR({attribute:!1})],oZ.prototype,"calcMaxHeight",2),eS([iR({type:Boolean})],oZ.prototype,"nonmodal",2),eS([iR()],oZ.prototype,"backdrop",2),eS([iR({attribute:!1})],oZ.prototype,"floatingUIMiddleware",2),eS([iz()],oZ.prototype,"_trigger",2),eS([iz()],oZ.prototype,"_anchor",2),eS([iz()],oZ.prototype,"_isVirtKbVisible",2),eS([iU("slot:not([name])")],oZ.prototype,"_elDefaultSlot",2),eS([iU('slot[name="trigger"]')],oZ.prototype,"_elTriggerSlot",2),eS([iU("dialog")],oZ.prototype,"_elDialog",2),eS([i6("triggerRef")],oZ.prototype,"_handleTriggerRefChanged",1),eS([i6("anchorRef")],oZ.prototype,"_handleAnchorRefChanged",1),eS([i6("_trigger")],oZ.prototype,"_handleTriggerChanged",1),eS([i6("_anchor")],oZ.prototype,"_handleAnchorChanged",1),eS([i6("open")],oZ.prototype,"_handleOpenChange",1),eS([i6("backdrop")],oZ.prototype,"_handleBackdropChange",1),eS([(t,e,s)=>{let i=window.matchMedia("(max-width: 576px)"),r=t.connectedCallback,o=t.disconnectedCallback;t.connectedCallback=function(){r?.call(this);let t=t=>{s.value?.call(this,t.matches)};i.addEventListener("change",t),this.disconnectedCallback=function(){o?.call(this),i.removeEventListener("change",t)},s.value?.call(this,i.matches)}}],oZ.prototype,"_handleMobileLayout",1),oZ=eS([iJ("gds-popover")],oZ);var oJ=class extends i2{constructor(){super(...arguments),this.show=!1}render(){return i1``}};oJ.styles=sR`
    :host {
      display: none;
      position: fixed;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.25);
      width: 100%;
      height: 100%;
    }

    :host([show]) {
      display: block;
    }
  `,eS([iR({type:Boolean,reflect:!0})],oJ.prototype,"show",2),oJ=eS([iJ("gds-backdrop")],oJ);var oQ=class extends i2{constructor(){super(),eM(this,R),this.open=!1,this.buttonLabel=rD("Open context menu"),this.showLabel=!1,this.label="",this.placement="bottom-start",rl(this)}connectedCallback(){super.connectedCallback(),i5.instance.apply(this,"gds-context-menu"),this.addEventListener("keydown",t=>{this.open&&"Tab"==t.key&&(t.preventDefault(),this.open=!1,this.elTriggerBtn.then(t=>t.focus()))})}render(){return i1`<button
        id="trigger"
        class="icon border-0 small ${iq({highlighted:this.open})}"
        aria-label=${this.buttonLabel??this.label}
        aria-haspopup="menu"
        aria-controls="menu"
        aria-expanded=${this.open}
      >
        <slot name="trigger">
          ${this.showLabel?this.buttonLabel??this.label:iv}
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
        @gds-ui-state=${t=>this.open=t.detail.open}
      >
        <gds-menu
          aria-label=${this.label??this.buttonLabel}
          @gds-menu-item-click=${eW(this,R,z)}
        >
          <slot allow="gds-menu-item gds-menu-heading"></slot>
        </gds-menu>
      </gds-popover>`}};R=new WeakSet,z=function(){this.open=!1},oQ.styles=[rW],oQ.shadowRootOptions={mode:"open",delegatesFocus:!0},eS([iR({type:Boolean,reflect:!0})],oQ.prototype,"open",2),eS([iR({attribute:"button-label"})],oQ.prototype,"buttonLabel",2),eS([iR({attribute:"show-label",type:Boolean})],oQ.prototype,"showLabel",2),eS([iR()],oQ.prototype,"label",2),eS([iR()],oQ.prototype,"placement",2),eS([iB("#trigger")],oQ.prototype,"elTriggerBtn",2),oQ=eS([iJ("gds-context-menu")],oQ);var o0=class{constructor(t){this.Y=t}disconnect(){this.Y=void 0}reconnect(t){this.Y=t}deref(){return this.Y}},o1=class{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??=new Promise(t=>this.q=t)}resume(){this.q?.(),this.Z=this.q=void 0}},o2=t=>!rN(t)&&"function"==typeof t.then,o5=ij(class extends rX{constructor(){super(...arguments),this._$Cwt=1073741823,this._$Cbt=[],this._$CK=new o0(this),this._$CX=new o1}render(...t){return t.find(t=>!o2(t))??sy}update(t,e){let s=this._$Cbt,i=s.length;this._$Cbt=e;let r=this._$CK,o=this._$CX;this.isConnected||this.disconnected();for(let t=0;t<e.length&&!(t>this._$Cwt);t++){let n=e[t];if(!o2(n))return this._$Cwt=t,n;t<i&&n===s[t]||(this._$Cwt=1073741823,i=0,Promise.resolve(n).then(async t=>{for(;o.get();)await o.get();let e=r.deref();if(void 0!==e){let s=e._$Cbt.indexOf(n);s>-1&&s<e._$Cwt&&(e._$Cwt=s,e.setValue(t))}}))}return sy}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}),o3=(t,e,s)=>{let i=new Map;for(let r=e;r<=s;r++)i.set(t[r],r);return i},o6=ij(class extends iY{constructor(t){if(super(t),t.type!==iV.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,s){let i;void 0===s?s=e:void 0!==e&&(i=e);let r=[],o=[],n=0;for(let e of t)r[n]=i?i(e,n):n,o[n]=s(e,n),n++;return{values:o,keys:r}}render(t,e,s){return this.dt(t,e,s).values}update(t,[e,s,i]){let r=rB(t),{values:o,keys:n}=this.dt(e,s,i);if(!Array.isArray(r))return this.ut=n,o;let a=this.ut??=[],l=[],h,d,c=0,p=r.length-1,u=0,g=o.length-1;for(;c<=p&&u<=g;)if(null===r[c])c++;else if(null===r[p])p--;else if(a[c]===n[u])l[u]=rz(r[c],o[u]),c++,u++;else if(a[p]===n[g])l[g]=rz(r[p],o[g]),p--,g--;else if(a[c]===n[g])l[g]=rz(r[c],o[g]),rR(t,l[g+1],r[c]),c++,g--;else if(a[p]===n[u])l[u]=rz(r[p],o[u]),rR(t,r[c],r[p]),p--,u++;else if(void 0===h&&(h=o3(n,u,g),d=o3(a,c,p)),h.has(a[c])){if(h.has(a[p])){let e=d.get(n[u]),s=void 0!==e?r[e]:null;if(null===s){let e=rR(t,r[c]);rz(e,o[u]),l[u]=e}else l[u]=rz(s,o[u]),rR(t,r[c],s),r[e]=null;u++}else rI(r[p]),p--}else rI(r[c]),c++;for(;u<=g;){let e=rR(t,l[g+1]);rz(e,o[u]),l[u++]=e}for(;c<=p;){let t=r[c++];null!==t&&rI(t)}return this.ut=n,rU(t,l),sy}});function o7(t){return(o7="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o4(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function o8(t,e){if(e.length<t)throw TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function o9(t){o8(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===o7(t)&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):(("string"==typeof t||"[object String]"===e)&&"undefined"!=typeof console&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(Error().stack)),new Date(NaN))}function nt(t,e){o8(2,arguments);var s=o9(t),i=o4(e);return isNaN(i)?new Date(NaN):(i&&s.setDate(s.getDate()+i),s)}function ne(t,e){o8(2,arguments);var s=o9(t),i=o4(e);if(isNaN(i))return new Date(NaN);if(!i)return s;var r=s.getDate(),o=new Date(s.getTime());return(o.setMonth(s.getMonth()+i+1,0),r>=o.getDate())?o:(s.setFullYear(o.getFullYear(),o.getMonth(),r),s)}var ns={};function ni(t,e){o8(1,arguments);var s,i,r,o,n,a,l,h,d=o4(null!==(s=null!==(i=null!==(r=null!==(o=null==e?void 0:e.weekStartsOn)&&void 0!==o?o:null==e?void 0:null===(n=e.locale)||void 0===n?void 0:null===(a=n.options)||void 0===a?void 0:a.weekStartsOn)&&void 0!==r?r:ns.weekStartsOn)&&void 0!==i?i:null===(l=ns.locale)||void 0===l?void 0:null===(h=l.options)||void 0===h?void 0:h.weekStartsOn)&&void 0!==s?s:0);if(!(d>=0&&d<=6))throw RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=o9(t),p=c.getDay();return c.setDate(c.getDate()-((p<d?7:0)+p-d)),c.setHours(0,0,0,0),c}function nr(t){o8(1,arguments);var e=o9(t);return e.setHours(0,0,0,0),e}function no(t,e){o8(2,arguments);var s=nr(t),i=nr(e);return s.getTime()===i.getTime()}var nn={fromAttribute:t=>new Date(t),toAttribute:t=>t.toISOString()},na=sR`
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
`,nl=class extends i2{constructor(){super(...arguments),eM(this,H),eM(this,B),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.focusedDate=new Date,this.disabledWeekends=!1,this.showWeekNumbers=!1}get focusedMonth(){return this.focusedDate.getMonth()}set focusedMonth(t){let e=function(t){o8(1,arguments);var e=o9(t),s=e.getMonth();return e.setFullYear(e.getFullYear(),s+1,0),e.setHours(0,0,0,0),e}(new Date(this.focusedYear,t,1)),s=new Date(this.focusedDate);s.setDate(Math.min(this.focusedDate.getDate(),e.getDate())),s.setMonth(t),s.setHours(12,0,0,0),this.focusedDate=s}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(t){this.focusedDate=new Date(this.focusedDate.setFullYear(t))}getDateCell(t){return this.shadowRoot?.querySelector(`#dateCell-${t}`)}connectedCallback(){super.connectedCallback(),i5.instance.apply(this,"gds-calendar"),this.addEventListener("keydown",eW(this,B,I))}focus(){super.focus(),this._elFocusedCell?.focus()}render(){let t=new Date;return ig`<table role="grid" aria-label="${ra(this.label)}">
      <thead role="rowgroup">
        <tr role="row">
          ${iI(this.showWeekNumbers,()=>ig`<th></th>`)}
          <th>${rD("Mon")}</th>
          <th>${rD("Tue")}</th>
          <th>${rD("Wed")}</th>
          <th>${rD("Thu")}</th>
          <th>${rD("Fri")}</th>
          <th>${rD("Sat")}</th>
          <th>${rD("Sun")}</th>
        </tr>
      </thead>
      <tbody role="rowgroup">
        ${function(t,e){let s=function(t,e){o8(1,arguments);var s=t||{},i=o9(s.start),r=o9(s.end),o=r.getTime();if(!(i.getTime()<=o))throw RangeError("Invalid interval");var n=ni(i,e),a=ni(r,e);n.setHours(15),a.setHours(15),o=a.getTime();for(var l=[],h=n;h.getTime()<=o;)h.setHours(0),l.push(o9(h)),(h=function(t,e){return o8(2,arguments),nt(t,7*o4(1))}(h,1)).setHours(15);return l}({start:function(t){o8(1,arguments);var e=o9(t);return e.setDate(1),e.setHours(0,0,0,0),e}(t),end:function(t){o8(1,arguments);var e=o9(t),s=e.getMonth();return e.setFullYear(e.getFullYear(),s+1,0),e.setHours(23,59,59,999),e}(t)},{weekStartsOn:1});return ig`${e(s.map(t=>({days:function(t,e){o8(1,arguments);var s,i=t||{},r=o9(i.start),o=o9(i.end).getTime();if(!(r.getTime()<=o))throw RangeError("Invalid interval");var n=[];r.setHours(0,0,0,0);var a=Number(null!==(s=null==e?void 0:e.step)&&void 0!==s?s:1);if(a<1||isNaN(a))throw RangeError("`options.step` must be a number greater than 1");for(;r.getTime()<=o;)n.push(o9(r)),r.setDate(r.getDate()+a),r.setHours(0,0,0,0);return n}({start:t,end:nt(t,6)})})))}`}(this.focusedDate,e=>ig`
            ${e.map(e=>ig`
                <tr role="row">
                  ${iI(this.showWeekNumbers,()=>ig`<td class="week-number" scope="row">
                        ${(function(t,e){o8(1,arguments);var s=o9(t);return Math.round((ni(s,e).getTime()-(function(t,e){o8(1,arguments);var s,i,r,o,n,a,l,h,d=o4(null!==(s=null!==(i=null!==(r=null!==(o=null==e?void 0:e.firstWeekContainsDate)&&void 0!==o?o:null==e?void 0:null===(n=e.locale)||void 0===n?void 0:null===(a=n.options)||void 0===a?void 0:a.firstWeekContainsDate)&&void 0!==r?r:ns.firstWeekContainsDate)&&void 0!==i?i:null===(l=ns.locale)||void 0===l?void 0:null===(h=l.options)||void 0===h?void 0:h.firstWeekContainsDate)&&void 0!==s?s:1),c=function(t,e){o8(1,arguments);var s,i,r,o,n,a,l,h,d=o9(t),c=d.getFullYear(),p=o4(null!==(s=null!==(i=null!==(r=null!==(o=null==e?void 0:e.firstWeekContainsDate)&&void 0!==o?o:null==e?void 0:null===(n=e.locale)||void 0===n?void 0:null===(a=n.options)||void 0===a?void 0:a.firstWeekContainsDate)&&void 0!==r?r:ns.firstWeekContainsDate)&&void 0!==i?i:null===(l=ns.locale)||void 0===l?void 0:null===(h=l.options)||void 0===h?void 0:h.firstWeekContainsDate)&&void 0!==s?s:1);if(!(p>=1&&p<=7))throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var u=new Date(0);u.setFullYear(c+1,0,p),u.setHours(0,0,0,0);var g=ni(u,e),f=new Date(0);f.setFullYear(c,0,p),f.setHours(0,0,0,0);var y=ni(f,e);return d.getTime()>=g.getTime()?c+1:d.getTime()>=y.getTime()?c:c-1}(t,e),p=new Date(0);return p.setFullYear(c,0,d),p.setHours(0,0,0,0),ni(p,e)})(s,e).getTime())/6048e5)+1})(e.days[0])}
                      </td>`)}
                  ${e.days.map(e=>{let s=this.customizedDates&&this.customizedDates.find(t=>no(t.date,e)),i={color:"currentColor",disabled:!!(this.disabledDates&&this.disabledDates.some(t=>no(t,e))),...s},r=!function(t,e){o8(2,arguments);var s=o9(t),i=o9(e);return s.getFullYear()===i.getFullYear()&&s.getMonth()===i.getMonth()}(this.focusedDate,e)||e<this.min||e>this.max,o=0===e.getDay()||6===e.getDay(),n=i.disabled||r||this.disabledWeekends&&o;return ig`
                      <td
                        role="${ra(n?void 0:"gridcell")}"
                        class="${iq({"custom-date":!!s,disabled:!!n,today:no(t,e)})}"
                        ?disabled=${n}
                        tabindex="${no(this.focusedDate,e)?0:-1}"
                        aria-selected="${this.value&&no(this.value,e)?"true":"false"}"
                        aria-label="${e.toDateString()}"
                        @click=${()=>n?null:eW(this,H,U).call(this,e)}
                        id="dateCell-${e.getDate()}"
                      >
                        <span
                          class="number"
                          style="--_color: ${i?i?.color:""}"
                          >${e.getDate()}</span
                        >

                        ${iI(i.indicator,()=>ig`<span
                              class="indicator-${i?.indicator}"
                              style="--_color: ${i?.color}"
                            ></span>`)}
                      </td>
                    `})}
                </tr>
              `)}
          `)}
      </tbody>
    </table>`}_valueChanged(){this.value&&(this.focusedDate=this.value)}};H=new WeakSet,U=function(t){this.value=t,this.dispatchEvent(new CustomEvent("change",{detail:t,bubbles:!1,composed:!1}))},B=new WeakSet,I=function(t){let e=!1,s=new Date(this.focusedDate);"ArrowLeft"===t.key?(s=nt(this.focusedDate,-1),e=!0):"ArrowRight"===t.key?(s=nt(this.focusedDate,1),e=!0):"ArrowUp"===t.key?(s=nt(this.focusedDate,-7),e=!0):"ArrowDown"===t.key?(s=nt(this.focusedDate,7),e=!0):"Enter"===t.key||" "===t.key?(this._elFocusedCell?.hasAttribute("disabled")||eW(this,H,U).call(this,this.focusedDate),e=!0):"Home"===t.key?(s=new Date(this.focusedYear,this.focusedMonth,1),e=!0):"End"===t.key?(s=new Date(this.focusedYear,this.focusedMonth+1,0),e=!0):"PageUp"===t.key?(s=function(t,e){return o8(2,arguments),ne(t,-o4(1))}(this.focusedDate,1),e=!0):"PageDown"===t.key&&(s=ne(this.focusedDate,1),e=!0),s.getFullYear()>=this.min.getFullYear()&&s.getFullYear()<=this.max.getFullYear()&&(this.focusedDate=s),e&&(t.preventDefault(),t.stopPropagation(),this.updateComplete.then(()=>{this._elFocusedCell?.focus(),this.dispatchEvent(new CustomEvent("gds-date-focused",{detail:this.focusedDate,bubbles:!1,composed:!1}))}))},nl.styles=[na],nl.shadowRootOptions={mode:"open",delegatesFocus:!0},eS([iR()],nl.prototype,"value",2),eS([iR({type:Date})],nl.prototype,"min",2),eS([iR({type:Date})],nl.prototype,"max",2),eS([iR()],nl.prototype,"focusedDate",2),eS([iR({type:Boolean,attribute:"disabled-weekends"})],nl.prototype,"disabledWeekends",2),eS([iR({type:Array,attribute:"disabled-dates"})],nl.prototype,"disabledDates",2),eS([iR({type:Number})],nl.prototype,"focusedMonth",1),eS([iR({type:Number})],nl.prototype,"focusedYear",1),eS([iR({type:Boolean})],nl.prototype,"showWeekNumbers",2),eS([iR({attribute:!1})],nl.prototype,"customizedDates",2),eS([iR()],nl.prototype,"label",2),eS([iU('td[tabindex="0"]')],nl.prototype,"_elFocusedCell",2),eS([i6("value")],nl.prototype,"_valueChanged",1),nl=eS([iJ("gds-calendar")],nl);var nh=sR`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
    }
  }
`,nd=class extends i2{constructor(){super(),this.multiple=!1,this.compareWith=(t,e)=>t===e,eM(this,V,rZ()),eM(this,j,t=>{let e=t.target;this.multiple?e.selected=!e.selected:(e.selected=!0,Array.from(this.options).forEach(t=>{t!==e&&(t.selected=!1)})),this.ariaActiveDescendantElement=e,this.dispatchEvent(new CustomEvent("change",{bubbles:!1,composed:!1}))}),new r1(this)}get navigableItems(){return this.visibleOptionElements}get options(){return eT(this,V).value&&r2(eT(this,V).value).assignedElements().filter(t=>!t.hasAttribute("isplaceholder")&&"gds-option"===t.gdsElementName)||[]}get visibleOptionElements(){return this.options.filter(t=>!t.hidden)}get visibleSelectedOptionElements(){return this.options.filter(t=>t.selected&&!t.hidden)}get selection(){return this.options.filter(t=>t.selected)}set selection(t){this.options.forEach(e=>{e.selected=t.some(t=>this.compareWith(t,e.value))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),i5.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",eT(this,j))}focus(){(this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])?.focus()}render(){return i1`<slot ${r0(eT(this,V))}></slot>`}_rerenderOptions(){this.options.forEach(t=>{t.requestUpdate()})}};V=new WeakMap,j=new WeakMap,nd.styles=nh,eS([iR({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:t=>t.toString()}})],nd.prototype,"multiple",2),eS([iR()],nd.prototype,"compareWith",2),eS([i6("multiple")],nd.prototype,"_rerenderOptions",1),nd=eS([iJ("gds-listbox")],nd);var nc=sR`
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
`,np=class extends rb{constructor(){super(),eM(this,Z),eM(this,Q),eM(this,te),this.label="",this.open=!1,this.searchable=!1,this.multiple=!1,this.compareWith=(t,e)=>t===e,this.searchFilter=(t,e)=>e.innerHTML.toLowerCase().includes(t.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.disableMobileStyles=!1,eM(this,Y,void 0),eM(this,q,t=>{let e=this._elSearchInput,s=Array.from(eT(this,Y));s.forEach(t=>t.hidden=!1),e.value&&s.filter(t=>!this.searchFilter(e.value,t)).forEach(t=>t.hidden=!0)}),eM(this,G,t=>{this._elListbox?.then(e=>{if("ArrowDown"===t.key||"Tab"===t.key){t.preventDefault(),e.focus();return}})}),eM(this,K,t=>{if("Tab"===t.key&&this.searchable){t.preventDefault(),this._elSearchInput?.focus();return}}),eM(this,X,t=>{let e=this._elTriggerBtn;e&&(e.ariaActiveDescendantElement=t.target)}),eM(this,ti,t=>{t instanceof FocusEvent&&t.relatedTarget&&!this.contains(t.relatedTarget)&&(this.open=!1)}),eM(this,tr,t=>{"Tab"!==t.key||this.searchable||(t.preventDefault(),this.open=!1,this._elTriggerBtn?.focus())}),rl(this),rT(this),eF(this,Y,this.getElementsByTagName(function(t){return iZ.get(t)??t}("gds-option")))}get type(){return"gds-dropdown"}get options(){return Array.from(eT(this,Y)).filter(t=>!t.hasAttribute("isplaceholder"))}get placeholder(){return Array.from(eT(this,Y)).find(t=>t.hasAttribute("isplaceholder"))}get displayValue(){return(Array.isArray(this.value)?this.value.length>2?rD(rk`${this.value.length} selected`):this.value.reduce((t,e)=>t+this.options.find(t=>t.value===e)?.innerHTML+", ","").slice(0,-2):this.options.find(t=>t.selected)?.innerHTML)||this.placeholder?.innerHTML||""}connectedCallback(){super.connectedCallback(),i5.instance.apply(this,"gds-dropdown"),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleValueChange()})}render(){return i1`
      ${iI(this.label&&!this.hideLabel,()=>i1`<label for="trigger">${this.label}</label>`)}

      <span class="form-info"><slot name="sub-label"></slot></span>

      <gds-popover
        .label=${this.label}
        .open=${this.open}
        .calcMaxWidth=${t=>this.syncPopoverWidth?`${t.offsetWidth}px`:"auto"}
        .calcMaxHeight=${t=>`${this.maxHeight}px`}
        .disableMobileStyles=${this.disableMobileStyles}
        @gds-ui-state=${t=>this.open=t.detail.open}
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
          class=${iq({small:"small"===this.size})}
        >
          <slot name="trigger">
            <span>${oY(this.displayValue)}</span>
          </slot>
        </button>
        ${iI(this.searchable,()=>i1`<input
              id="searchinput"
              type="text"
              aria-label="${rD("Filter available options")}"
              placeholder="${rD("Search")}"
              @keydown=${eT(this,G)}
              @keyup=${eT(this,q)}
            />`)}

        <gds-listbox
          id="listbox"
          .multiple="${ra(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${eW(this,Z,J)}"
          @gds-focus="${eT(this,X)}"
          @keydown=${eT(this,K)}
        >
          <slot gds-allow="gds-option gds-menu-heading"></slot>
        </gds-listbox>
      </gds-popover>

      <span class="form-info"><slot name="message"></slot></span>
    `}_handleLightDOMChange(){if(this.requestUpdate(),this.multiple){this._handleValueChange();return}void 0===this.value?this.placeholder?this.value=this.placeholder.value:this.value=this.options[0]?.value:this.placeholder||void 0!==this.options.find(t=>this.compareWith(t.value,this.value))||(this.options[0]&&(this.options[0].selected=!0),this.value=this.options[0]?.value)}_handleValueChange(){this._elListbox.then(t=>{t&&(Array.isArray(this.value)?t.selection=this.value:t.selection=[this.value])})}_onOpenChange(){let t=this.open;Array.from(eT(this,Y)).forEach(e=>e.hidden=!t),t?eW(this,Q,tt).call(this):(eW(this,te,ts).call(this),this._elSearchInput&&(this._elSearchInput.value="")),this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:t},bubbles:!0,composed:!0}))}};Y=new WeakMap,q=new WeakMap,G=new WeakMap,K=new WeakMap,X=new WeakMap,Z=new WeakSet,J=function(){this._elListbox.then(t=>{this.multiple?this.value=t.selection.map(t=>t.value):(this.value=t.selection[0]?.value,this.open=!1,setTimeout(()=>this._elTriggerBtn?.focus(),0)),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))})},Q=new WeakSet,tt=function(){this.addEventListener("blur",eT(this,ti)),this.addEventListener("gds-blur",eT(this,ti)),this.addEventListener("keydown",eT(this,tr))},te=new WeakSet,ts=function(){this.removeEventListener("blur",eT(this,ti)),this.removeEventListener("gds-blur",eT(this,ti)),this.removeEventListener("keydown",eT(this,tr))},ti=new WeakMap,tr=new WeakMap,np.styles=nc,np.shadowRootOptions={mode:"open",delegatesFocus:!0},eS([iR()],np.prototype,"label",2),eS([iR({type:Boolean,reflect:!0})],np.prototype,"open",2),eS([iR({type:Boolean,reflect:!0})],np.prototype,"searchable",2),eS([iR({type:Boolean,reflect:!0})],np.prototype,"multiple",2),eS([iR()],np.prototype,"compareWith",2),eS([iR()],np.prototype,"searchFilter",2),eS([iR({type:Boolean,attribute:"sync-popover-width"})],np.prototype,"syncPopoverWidth",2),eS([iR({type:Number,attribute:"max-height"})],np.prototype,"maxHeight",2),eS([iR()],np.prototype,"size",2),eS([iR({type:Boolean,attribute:"hide-label"})],np.prototype,"hideLabel",2),eS([iR()],np.prototype,"disableMobileStyles",2),eS([iU("#trigger")],np.prototype,"_elTriggerBtn",2),eS([iB("#listbox")],np.prototype,"_elListbox",2),eS([iU("#searchinput")],np.prototype,"_elSearchInput",2),eS([function(t={attributes:!0,childList:!0,subtree:!1,characterData:!0}){return(e,s,i)=>{let r;let o=e.connectedCallback,n=e.disconnectedCallback;e.connectedCallback=function(){o?.call(this),(r=new MutationObserver((t,e)=>{i.value?.call(this)})).observe(this,t)},e.disconnectedCallback=function(){n?.call(this),r.disconnect()}}}({attributes:!0,childList:!0,subtree:!0,characterData:!0})],np.prototype,"_handleLightDOMChange",1),eS([i6("value")],np.prototype,"_handleValueChange",1),eS([i6("open")],np.prototype,"_onOpenChange",1),np=eS([iJ("gds-dropdown")],np);var nu=class extends iW{constructor(){super(...arguments),eM(this,tu),eM(this,tf),eM(this,tv),eM(this,tb),eM(this,tw),this.value=0,this.length=2,this.min=0,this.max=Number.MAX_SAFE_INTEGER,this.displayValue=eW(this,tv,tm).call(this,this.value,this.length),eM(this,to,""),eM(this,tn,()=>{let t=parseInt(this.value.toString());Number.isNaN(t)&&(t=2===this.length?this.min:new Date().getFullYear()-1),this.value=eW(this,tb,t_).call(this,t+1),eW(this,tf,ty).call(this)}),eM(this,ta,()=>{let t=parseInt(this.value.toString());Number.isNaN(t)&&(t=2===this.length?this.max:new Date().getFullYear()+1),this.value=eW(this,tb,t_).call(this,t-1),eW(this,tf,ty).call(this)}),eM(this,tl,t=>{t.stopPropagation(),t.preventDefault(),this.focus()}),eM(this,th,()=>{eW(this,tw,t$).call(this)}),eM(this,td,()=>{""!==eT(this,to)&&(eW(this,tw,t$).call(this),this.value=eW(this,tb,t_).call(this,parseInt(this.value.toString())),eW(this,tf,ty).call(this))}),eM(this,tc,t=>{t.stopPropagation(),t.preventDefault(),t.deltaY>0?eT(this,ta).call(this):eT(this,tn).call(this)}),eM(this,tp,t=>{let e=!1;if("ArrowUp"===t.key)eT(this,tn).call(this),e=!0;else if("ArrowDown"===t.key)eT(this,ta).call(this),e=!0;else{let s=parseInt(t.key);isNaN(s)||(eT(this,to).length<this.length&&(eF(this,to,eT(this,to)+s.toString()),this.value=parseInt(eT(this,to))),eT(this,to).length===this.length&&(this.value=eW(this,tb,t_).call(this,this.value),eW(this,tw,t$).call(this),eW(this,tu,tg).call(this),eW(this,tf,ty).call(this)),e=!0)}e&&(t.preventDefault(),t.stopPropagation())})}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.setAttribute("role","spinbutton"),this.setAttribute("tabindex","0"),this.addEventListener("wheel",eT(this,tc)),this.addEventListener("keydown",eT(this,tp)),this.addEventListener("blur",eT(this,td)),this.addEventListener("focus",eT(this,th)),this.addEventListener("click",eT(this,tl)),this.addEventListener("mousedown",eT(this,tl))}focus(t){super.focus(t),eT(this,th).call(this)}render(){return i1`${this.displayValue}`}_refreshDisplayValue(){this.displayValue=eW(this,tv,tm).call(this,this.value,this.length),this.setAttribute("aria-valuetext",this.value.toString())}};to=new WeakMap,tn=new WeakMap,ta=new WeakMap,tl=new WeakMap,th=new WeakMap,td=new WeakMap,tc=new WeakMap,tp=new WeakMap,tu=new WeakSet,tg=function(){let t=this.nextElementSibling;for(;t;){if(t instanceof nu){t.focus();break}t=t.nextElementSibling}},tf=new WeakSet,ty=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value.toString()}}))},tv=new WeakSet,tm=function(t,e){return String(t).padStart(e,"0")},tb=new WeakSet,t_=function(t){return Math.max(this.min,Math.min(this.max,t))},tw=new WeakSet,t$=function(){eF(this,to,"")},nu.formAssociated=!0,eS([iR({type:Number})],nu.prototype,"value",2),eS([iR({type:Number})],nu.prototype,"length",2),eS([iR({type:Number,attribute:"aria-valuemin"})],nu.prototype,"min",2),eS([iR({type:Number,attribute:"aria-valuemax"})],nu.prototype,"max",2),eS([iz()],nu.prototype,"displayValue",2),eS([i6("value")],nu.prototype,"_refreshDisplayValue",1),nu=eS([iJ("gds-date-part-spinner")],nu);var ng=class extends oG{};ng._regularSVG='<path d="M3.75 9.75H20.25M7.75 4.75V2.75M16.25 4.75V2.75M3.75 4.75H20.25V20.25H3.75V4.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',ng._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 2C8.16421 2 8.5 2.33579 8.5 2.75V4H15.5V2.75C15.5 2.33579 15.8358 2 16.25 2C16.6642 2 17 2.33579 17 2.75V4H20.25C20.6642 4 21 4.33579 21 4.75V20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25V4.75C3 4.33579 3.33579 4 3.75 4H7V2.75C7 2.33579 7.33579 2 7.75 2ZM4.5 10.5V19.5H19.5V10.5H4.5Z" fill="currentColor"/>',ng._name="calendar",ng=eS([iJ("gds-icon-calendar")],ng);var nf=class extends oG{};nf._regularSVG='<path d="M15 20L7 12L15 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',nf._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5303 3.46967C15.8232 3.76256 15.8232 4.23744 15.5303 4.53033L8.06066 12L15.5303 19.4697C15.8232 19.7626 15.8232 20.2374 15.5303 20.5303C15.2374 20.8232 14.7626 20.8232 14.4697 20.5303L6.46967 12.5303C6.32902 12.3897 6.25 12.1989 6.25 12C6.25 11.8011 6.32902 11.6103 6.46967 11.4697L14.4697 3.46967C14.7626 3.17678 15.2374 3.17678 15.5303 3.46967Z" fill="currentColor"/>',nf._name="chevron left",nf=eS([iJ("gds-icon-chevron-left")],nf);var ny=class extends oG{};ny._regularSVG='<path d="M9 4L17 12L9 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',ny._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M8.46967 3.46967C8.76256 3.17678 9.23744 3.17678 9.53033 3.46967L17.5303 11.4697C17.671 11.6103 17.75 11.8011 17.75 12C17.75 12.1989 17.671 12.3897 17.5303 12.5303L9.53033 20.5303C9.23744 20.8232 8.76256 20.8232 8.46967 20.5303C8.17678 20.2374 8.17678 19.7626 8.46967 19.4697L15.9393 12L8.46967 4.53033C8.17678 4.23744 8.17678 3.76256 8.46967 3.46967Z" fill="currentColor"/>',ny._name="chevron right",ny=eS([iJ("gds-icon-chevron-right")],ny);var nv=sR`
  @layer base, reset, transitional-styles;
  @layer base {
    label {
      display: block;
    }
  }
`,nm=class extends rb{constructor(){super(...arguments),eM(this,tk),eM(this,tE),eM(this,tC),eM(this,tM),eM(this,tD),eM(this,tL),eM(this,tP),eM(this,tZ),eM(this,t1),eM(this,t5),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.open=!1,this.label="",this.showWeekNumbers=!1,this.size="medium",this.hideLabel=!1,this.disabledWeekends=!1,this._focusedMonth=new Date().getMonth(),this._focusedYear=new Date().getFullYear(),this._dateFormatLayout=eW(this,tZ,tJ).call(this,"y-m-d"),eM(this,tx,void 0),eM(this,tR,t=>{this._elTrigger.then(e=>{t.relatedTarget?.parentElement!==t.target&&document.getSelection()?.removeAllRanges()})}),eM(this,tz,t=>{this._elTrigger.then(t=>{document.getSelection()?.removeAllRanges();let e=new Range;e.setStart(t.firstChild,0),e.setEnd(t.lastChild,4),document.getSelection()?.addRange(e)})}),eM(this,tH,t=>{this._elField.then(e=>{t.currentTarget===e&&(t.preventDefault(),t.clipboardData?.setData("text/plain",this.displayValue))})}),eM(this,tU,t=>{this._elField.then(e=>{if(t.currentTarget!==e)return;t.preventDefault();let s=t.clipboardData?.getData("text/plain");if(!s)return;let i=new Date("-"),r="Invalid Date",o=s.split(this._dateFormatLayout.delimiter);if(3===o.length){let t=this._dateFormatLayout.layout,e=parseInt(o[t.findIndex(t=>"y"===t.token)]),s=parseInt(o[t.findIndex(t=>"m"===t.token)])-1,r=parseInt(o[t.findIndex(t=>"d"===t.token)]);isNaN(e)||isNaN(s)||isNaN(r)||(i=new Date(`${e}-${s+1}-${r}`))}(i.toString()!==r||(i=new Date(s)).toString()!==r)&&(this.value=i,eW(this,tL,tN).call(this))})}),eM(this,tB,t=>{this._elSpinners[0]?.focus()}),eM(this,tI,t=>{t.stopPropagation(),this.value=t.detail,this.open=!1,eW(this,tL,tN).call(this)}),eM(this,tV,t=>{t.stopPropagation(),this._focusedMonth=t.target?.value}),eM(this,tj,t=>{t.stopPropagation(),this._focusedYear=t.target?.value}),eM(this,tY,t=>{this._focusedMonth++,this._focusedMonth>11&&(this._focusedMonth=0,this._focusedYear++)}),eM(this,tq,t=>{this._focusedMonth--,this._focusedMonth<0&&(this._focusedMonth=11,this._focusedYear--)}),eM(this,tG,async()=>{this._focusedMonth=(await this._elCalendar).focusedMonth,this._focusedYear=(await this._elCalendar).focusedYear,this.value=(await this._elCalendar).focusedDate,this.requestUpdate(),eW(this,tP,tO).call(this)}),eM(this,tK,async t=>{if(t.target===t.currentTarget){if(this.open=t.detail.open,"close"===t.detail.reason){let t=(await this._elCalendar).value;no(t||new Date(0),eT(this,tx)||new Date(0))||(this.value=t,eW(this,tL,tN).call(this)),this.value&&(this._focusedMonth=this.value.getMonth(),this._focusedYear=this.value.getFullYear())}"cancel"===t.detail.reason&&(this.value=eT(this,tx))}}),eM(this,tX,t=>{let e=Array.from(this._elSpinners).findIndex(e=>e===t.target);if("ArrowRight"===t.key){let t=this._elSpinners[e+1];t&&t.focus()}if("ArrowLeft"===t.key){let t=this._elSpinners[e-1];t&&t.focus()}}),eM(this,tQ,(t,e)=>{eT(this,t0)[e]=t;let s=new Date;s.setFullYear(parseInt(eT(this,t0).year)),s.setMonth(parseInt(eT(this,t0).month)-1),s.setDate(parseInt(eT(this,t0).day)),"Invalid Date"!==s.toString()&&(this.value=s,eW(this,tL,tN).call(this))}),eM(this,t0,{year:"yyyy",month:"mm",day:"dd"})}get type(){return"gds-datepicker"}get dateformat(){return this._dateFormatLayout.layout.map(t=>t.token).join(this._dateFormatLayout.delimiter)}set dateformat(t){this._dateFormatLayout=eW(this,tZ,tJ).call(this,t)}async getFocusedDate(){return this.open?this._elCalendar.then(t=>t.focusedDate):void 0}get displayValue(){return this._elInput.innerText.replace(/\s+/g,"")}async test_getDateCell(t){return this._elCalendar.then(e=>e.getDateCell(t))}connectedCallback(){super.connectedCallback(),i5.instance.apply(this,"gds-datepicker")}render(){return i1`${iI(this.label&&!this.hideLabel,()=>i1`<label for="spinner-0" id="label">${this.label}</label>`)}

      <div class="form-info"><slot name="sub-label"></slot></div>

      <div
        class=${iq({field:!0,small:"small"===this.size})}
        id="field"
        @click=${eT(this,tB)}
        @copy=${eT(this,tH)}
        @paste=${eT(this,tU)}
      >
        <div
          class=${iq({input:!0,"is-placeholder":!this.value})}
          @focusout=${eT(this,tR)}
        >
          ${function*(t,e){let s="function"==typeof e;if(void 0!==t){let i=-1;for(let r of t)i>-1&&(yield s?e(i):e),i++,yield r}}(function*(t,e){if(void 0!==t){let s=0;for(let i of t)yield e(i,s++)}}(this._dateFormatLayout.layout,(t,e)=>i1`<gds-date-part-spinner
                  id="spinner-${e}"
                  .length=${"y"===t.token?4:2}
                  .value=${eT(this,t0)[t.name]}
                  aria-valuemin=${eW(this,tM,tF).call(this,t.name)}
                  aria-valuemax=${eW(this,tD,tW).call(this,t.name)}
                  aria-label=${eW(this,tC,tT).call(this,t.name)}
                  aria-describedby="label"
                  @keydown=${eT(this,tX)}
                  @change=${e=>eT(this,tQ).call(this,e.detail.value,t.name)}
                  @focus=${eT(this,tz)}
                  @touchend=${t=>{this.open=!0,t.preventDefault()}}
                ></gds-date-part-spinner>`),i1`<span>${this._dateFormatLayout.delimiter}</span>`)}
        </div>
        <button
          id="calendar-button"
          aria-label="${rD("Open calendar modal")}"
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
        @gds-ui-state=${eT(this,tK)}
        label=${this.label}
        id="calendar-popover"
        .placement=${"bottom-end"}
        .calcMinWidth=${()=>this.showWeekNumbers?"350px":"305px"}
        .useModalInMobileView=${!0}
        @focusin=${async t=>{t.target?.id!=="calendar-popover"||this._elCalendar.then(t=>t.focus())}}
      >
        <div class="header">
          <button
            @click=${eT(this,tq)}
            aria-label=${rD("Previous month")}
          >
            <gds-icon-chevron-left></gds-icon-chevron-left>
          </button>
          <gds-dropdown
            .value=${this._focusedMonth.toString()}
            @change=${eT(this,tV)}
            .maxHeight=${300}
            label="${rD("Month")}"
            style="width:120px"
            size="small"
            hide-label
          >
            <gds-option value="0">${rD("January")}</gds-option>
            <gds-option value="1">${rD("February")}</gds-option>
            <gds-option value="2">${rD("March")}</gds-option>
            <gds-option value="3">${rD("April")}</gds-option>
            <gds-option value="4">${rD("May")}</gds-option>
            <gds-option value="5">${rD("June")}</gds-option>
            <gds-option value="6">${rD("July")}</gds-option>
            <gds-option value="7">${rD("August")}</gds-option>
            <gds-option value="8">${rD("September")}</gds-option>
            <gds-option value="9">${rD("October")}</gds-option>
            <gds-option value="10">${rD("November")}</gds-option>
            <gds-option value="11">${rD("December")}</gds-option>
          </gds-dropdown>
          <gds-dropdown
            .value=${this._focusedYear.toString()}
            @change=${eT(this,tj)}
            .maxHeight=${300}
            label="${rD("Year")}"
            size="small"
            hide-label
          >
            ${o6(eT(this,t1,t2),t=>t,t=>i1`<gds-option value=${t}>${t}</gds-option>`)}
          </gds-dropdown>
          <button
            @click=${eT(this,tY)}
            aria-label=${rD("Next month")}
          >
            <gds-icon-chevron-right></gds-icon-chevron-right>
          </button>
        </div>

        <gds-calendar
          id="calendar"
          @change=${eT(this,tI)}
          @gds-date-focused=${eT(this,tG)}
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
            @click=${t=>{t.stopPropagation(),this.value=void 0,this.open=!1,eW(this,tL,tN).call(this)}}
          >
            ${rD("Clear")}
          </gds-button>
          ${o5(eW(this,tk,tA).call(this),iv)}
          <gds-button
            rank="tertiary"
            size="small"
            @click=${t=>{t.stopPropagation(),eW(this,tE,tS).call(this,new Date)}}
          >
            ${rD("Today")}
          </gds-button>
        </div>
      </gds-popover> `}_handleValueChange(){if(!this.value){eF(this,t0,{year:"yyyy",month:"mm",day:"dd"});return}let t=this.value;this._focusedMonth=t.getMonth(),this._focusedYear=t.getFullYear();let e=t.getFullYear().toString(),s=(t.getMonth()+1).toString().padStart(2,"0"),i=t.getDate().toString().padStart(2,"0");eF(this,t0,{year:e,month:s,day:i})}_handleOpenChange(){this.open&&(eF(this,tx,this.value),this._elCalendar.then(t=>t.focus()))}};tx=new WeakMap,tk=new WeakSet,tA=async function(){let t;let e=await this.getFocusedDate(),s="";return e&&e>this.max?(s=rD("Last available date"),t=t=>{t.stopPropagation(),eW(this,tE,tS).call(this,this.max)}):e&&e<this.min&&(s=rD("First available date"),t=t=>{t.stopPropagation(),eW(this,tE,tS).call(this,this.min)}),i1`${iI(s.length>0,()=>i1`<gds-button rank="tertiary" size="small" @click=${t}>
          ${s}
        </gds-button>`,()=>iv)}`},tE=new WeakSet,tS=function(t){let e=new Date(t);this._elCalendar.then(t=>t.focusedDate=e).then(eT(this,tG))},tC=new WeakSet,tT=function(t){return({year:rD("Year"),month:rD("Month"),day:rD("Day")})[t]},tM=new WeakSet,tF=function(t){return({year:1900,month:1,day:1})[t]},tD=new WeakSet,tW=function(t){return({year:9999,month:12,day:31})[t]},tL=new WeakSet,tN=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value}}))},tP=new WeakSet,tO=function(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value}}))},tR=new WeakMap,tz=new WeakMap,tH=new WeakMap,tU=new WeakMap,tB=new WeakMap,tI=new WeakMap,tV=new WeakMap,tj=new WeakMap,tY=new WeakMap,tq=new WeakMap,tG=new WeakMap,tK=new WeakMap,tX=new WeakMap,tZ=new WeakSet,tJ=function(t){let e=t.replace(/[a-z0-9]/gi,"")[0],s=t.split(e),i=s.findIndex(t=>"y"===t),r=s.findIndex(t=>"m"===t),o=s.findIndex(t=>"d"===t);if(-1===i||-1===r||-1===o)throw Error("Invalid date format for <gds-datepicker>");return{delimiter:e,layout:[i,r,o].sort((t,e)=>t-e).map(t=>s[t]).map(t=>({token:t,name:"y"===t?"year":"m"===t?"month":"day"}))}},tQ=new WeakMap,t0=new WeakMap,t1=new WeakSet,t2=function(){let t=this.min.getFullYear(),e=this.max.getFullYear(),s=eT(this,t5,t3),i=this.value?.getFullYear();return{*[Symbol.iterator](){s&&(yield i);for(let s=t;s<=e;s++)yield s}}},t5=new WeakSet,t3=function(){return!!this.value&&(this.value.getFullYear()<this.min.getFullYear()||this.value.getFullYear()>this.max.getFullYear())},nm.styles=[nv],nm.shadowRootOptions={mode:"open",delegatesFocus:!0},eS([iR({converter:nn})],nm.prototype,"value",2),eS([iR({converter:nn})],nm.prototype,"min",2),eS([iR({converter:nn})],nm.prototype,"max",2),eS([iR({type:Boolean})],nm.prototype,"open",2),eS([iR()],nm.prototype,"label",2),eS([iR({type:Boolean,attribute:"show-week-numbers"})],nm.prototype,"showWeekNumbers",2),eS([iR()],nm.prototype,"size",2),eS([iR({type:Boolean,attribute:"hide-label"})],nm.prototype,"hideLabel",2),eS([iR()],nm.prototype,"dateformat",1),eS([iR({type:Boolean,attribute:"disabled-weekends"})],nm.prototype,"disabledWeekends",2),eS([iR({converter:{fromAttribute:t=>t.split(",").map(t=>new Date(t.trim())),toAttribute:t=>JSON.stringify(t.map(t=>t.toISOString()))},attribute:"disabled-dates"})],nm.prototype,"disabledDates",2),eS([iB("#calendar-button")],nm.prototype,"test_calendarButton",2),eS([iz()],nm.prototype,"_focusedMonth",2),eS([iz()],nm.prototype,"_focusedYear",2),eS([iz()],nm.prototype,"_dateFormatLayout",2),eS([iB("#calendar")],nm.prototype,"_elCalendar",2),eS([iB("#calendar-button")],nm.prototype,"_elTrigger",2),eS([iB("#field")],nm.prototype,"_elField",2),eS([(e,s)=>iH(e,s,{get(){return(this.renderRoot??(t??=document.createDocumentFragment())).querySelectorAll("[role=spinbutton]")}})],nm.prototype,"_elSpinners",2),eS([iU(".input")],nm.prototype,"_elInput",2),eS([i6("value")],nm.prototype,"_handleValueChange",1),eS([i6("open")],nm.prototype,"_handleOpenChange",1),nm=eS([iJ("gds-datepicker")],nm);var nb={0:"0px","2xs":"320px",xs:"425px",s:"768px",m:"1024px",l:"1280px",xl:"1440px","2xl":"2560px","3xl":"3840px","4xl":"4320px","5xl":"6016px","6xl":"7680px"},n_=/^([<|>]=?)?([0-9a-z]+)/,nw=["{","}",";",","],n$=[" ","/n"];function nx(t){return(e,s)=>{let i=t?.selector??String(":host"),r=t?.property??String(s),o=t?.valueTemplate??(t=>`var(--gds-space-${t})`),n=t?.styleTemplate;iR({attribute:t?.attribute})(e,s),i6(s)(e,s,{value:function(t,e){let a=function(t){let e;let s=[],i="bp",r=!1;for(let o of t){if(!nw.includes(o)){if("val"===i&&e)"}"!==o&&e.values.push(o);else{if(e&&r){e.breakpoint+=`,${o}`,r=!1;continue}e?(i="val",e.values.push(e.breakpoint),e.values.push(o),e.breakpoint="-"):(e={breakpoint:o,values:[]},s.push(e))}continue}if(","===o){r=!0;continue}if("{"===o){i="val";continue}if("}"===o||";"===o){i="bp",e=void 0;continue}}return s.map(t=>(0===t.values.length&&(t.values.push(t.breakpoint),t.breakpoint="-"),t))}(function(t){let e=[],s="";for(let i=0;i<t.length;i++){let r=t[i];if(n$.includes(r)||(s+=r),nw.includes(r)){e.push(s.slice(0,-1)),e.push(r),s="";continue}if(n$.includes(r)||i===t.length-1){e.push(s),s="";continue}}return e.filter(t=>""!==t)}(e)),l=function(t,e,s,i=t=>t,r=(t,e)=>`${t}: ${e.join(" ")};`){let o="";for(let n of s){let s=("-"===n.breakpoint?[{condition:">=",value:"0"}]:n.breakpoint.split(",").map(t=>{let e=t.trim().match(n_);if(!e)throw Error(`Invalid breakpoint specifier: ${t}`);return{condition:e[1],value:e[2]}})).map(t=>`(${t.condition?.includes("<")?"max-width":"min-width"}: ${nb[t.value]??t.value})`).join(" and ");o+=`@media ${s} {${t}{${r(e,n.values.map(i))}}}`}return o}(i,r,a,o,n);this[`__${String(s)}_ast`]=a,this._dynamicStylesController.inject(`sep_${String(s)}`,sO(l))}})}}var nk=sR`
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
`,nA=class extends i2{render(){return i1`<slot></slot>`}};nA.styles=[rf,nk],eS([nx({property:"--_c",valueTemplate:t=>t})],nA.prototype,"columns",2),eS([nx({styleTemplate:(t,e)=>{let s=e[0],i=e[1]||s;return`--_gap-column: ${s}; --_gap-row: ${i};`}})],nA.prototype,"gap",2),eS([nx()],nA.prototype,"padding",2),eS([nx({attribute:"auto-columns",property:"--_col-width",valueTemplate:t=>`${t}px`})],nA.prototype,"autoColumns",2),nA=eS([iJ("gds-grid")],nA);var nE=sR`
  :host {
    box-sizing: border-box;
  }
`,nS=class extends i2{constructor(){super(...arguments),this.display="block"}render(){return i1`<slot></slot>`}};nS.styles=[rf,nE],eS([nx({valueTemplate:t=>t})],nS.prototype,"display",2),eS([nx({valueTemplate:t=>{let[e,s]=t.split("/");return s?`color-mix(in srgb, var(--gds-sys-color-${e}) ${100*parseFloat(s)}%, transparent 0%)`:`var(--gds-sys-color-${e})`}})],nS.prototype,"color",2),eS([nx({valueTemplate:t=>{let[e,s]=t.split("/");return s?`color-mix(in srgb, var(--gds-sys-color-${e}) ${100*parseFloat(s)}%, transparent 0%)`:`var(--gds-sys-color-${e})`}})],nS.prototype,"background",2),eS([nx({valueTemplate:t=>t})],nS.prototype,"opacity",2),eS([nx()],nS.prototype,"padding",2),eS([nx()],nS.prototype,"margin",2),eS([nx({valueTemplate:t=>t})],nS.prototype,"position",2),eS([nx({valueTemplate:t=>t})],nS.prototype,"inset",2),eS([nx({valueTemplate:t=>t})],nS.prototype,"overflow",2),eS([nx({property:"grid-column",valueTemplate:t=>`${t}`})],nS.prototype,"column",2),eS([nx({property:"grid-row",valueTemplate:t=>`${t}`})],nS.prototype,"row",2),eS([nx({valueTemplate:t=>t})],nS.prototype,"height",2),eS([nx({valueTemplate:t=>t})],nS.prototype,"width",2),eS([nx({property:"z-index",valueTemplate:t=>t})],nS.prototype,"stack",2),nS=eS([iJ("gds-container")],nS);var nC=sR`
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
`,nT=class extends nS{render(){return i1`<slot></slot>`}};nT.styles=[rf,nC],eS([nx({property:"box-shadow",valueTemplate:t=>`var(--gds-shadow-${t})`})],nT.prototype,"shadow",2),eS([nx({valueTemplate:t=>{let[e,s]=t.split("/");return`var(--gds-space-${e}) solid ${s?`var(--gds-sys-color-${s})`:"currentColor"}`},styleTemplate:(t,e)=>{let s=e[0],i=e.length>1?e[1]:s,r=e.length>2?e[2]:s,o=e.length>3?e[3]:s;return`border-top: ${s}; border-right: ${i}; border-bottom: ${r}; border-left: ${o};`}})],nT.prototype,"border",2),eS([nx({property:"border-radius",valueTemplate:t=>`var(--gds-space-${t})`})],nT.prototype,"radius",2),eS([nx({property:"backdrop-filter",valueTemplate:t=>`blur(${t})`})],nT.prototype,"filter",2),eS([nx({property:"mask-image",valueTemplate:t=>`linear-gradient(to ${t}, currentColor 40%, transparent)`})],nT.prototype,"mask",2),nT=eS([iJ("gds-card")],nT);var nM=sR`
  :host {
    box-sizing: border-box;
  }
`,nF=class extends nS{connectedCallback(){super.connectedCallback(),this.display="flex"}render(){return i1`<slot></slot>`}};nF.styles=[rf,nM],eS([nx({styleTemplate:(t,e)=>{let s=e[0],i=e[1]||s;return`gap: ${s} ${i};`}})],nF.prototype,"gap",2),eS([nx({property:"align-items",valueTemplate:t=>t})],nF.prototype,"align",2),eS([nx({property:"justify-content",valueTemplate:t=>t})],nF.prototype,"justify",2),eS([nx({property:"flex-direction",valueTemplate:t=>t})],nF.prototype,"direction",2),nF=eS([iJ("gds-flex")],nF);var nD=sR`
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
`,nW=class extends i2{render(){return i1`<figure><img src="${this.src}" alt="${this.alt}" /></figure>`}};nW.styles=[rf,nD],eS([nx({property:"aspect-ratio",selector:"figure",valueTemplate:t=>t})],nW.prototype,"ratio",2),eS([nx({property:"object-position",selector:"img",valueTemplate:t=>t})],nW.prototype,"position",2),eS([nx({property:"inset",selector:"figure",valueTemplate:t=>t})],nW.prototype,"inset",2),eS([nx({property:"width",valueTemplate:t=>t})],nW.prototype,"width",2),eS([nx({property:"height",valueTemplate:t=>t})],nW.prototype,"height",2),eS([nx({property:"opacity",selector:"figure",valueTemplate:t=>t})],nW.prototype,"opacity",2),eS([nx({property:"object-fit",selector:"img",valueTemplate:t=>t})],nW.prototype,"fit",2),eS([iR()],nW.prototype,"src",2),eS([iR()],nW.prototype,"alt",2),eS([nx({property:"border-radius",selector:"figure",valueTemplate:t=>`var(--gds-space-${t})`})],nW.prototype,"radius",2),nW=eS([iJ("gds-img")],nW);var nL=sR`
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
`,nN=class extends i2{applyVideoSettings(){this.videoElement&&(this.videoElement.src=this.src||"",this.videoElement.poster=this.poster||"",this.videoElement.muted=this.muted||!1,this.videoElement.autoplay=this.autoplay||!1,this.videoElement.loop=this.loop||!1,this.videoElement.playsInline=this.playsinline||!1)}render(){return i1`<figure><video></video></figure>`}firstUpdated(){this.applyVideoSettings()}};nN.styles=[rf,nL],eS([nx({property:"aspect-ratio",selector:"figure",valueTemplate:t=>t})],nN.prototype,"ratio",2),eS([nx({property:"object-position",selector:"video",valueTemplate:t=>t})],nN.prototype,"position",2),eS([nx({property:"inset",selector:"figure",valueTemplate:t=>t})],nN.prototype,"inset",2),eS([nx({property:"width",valueTemplate:t=>t})],nN.prototype,"width",2),eS([nx({property:"height",valueTemplate:t=>t})],nN.prototype,"height",2),eS([nx({property:"opacity",selector:"figure",valueTemplate:t=>t})],nN.prototype,"opacity",2),eS([nx({property:"object-fit",selector:"video",valueTemplate:t=>t})],nN.prototype,"fit",2),eS([nx({property:"pointer-events",selector:"video",valueTemplate:t=>t})],nN.prototype,"events",2),eS([nx({property:"border-radius",selector:"figure",valueTemplate:t=>`var(--gds-sys-radii-${t})`})],nN.prototype,"radius",2),eS([iR()],nN.prototype,"src",2),eS([iR()],nN.prototype,"poster",2),eS([iR({type:Boolean})],nN.prototype,"muted",2),eS([iR({type:Boolean})],nN.prototype,"playsinline",2),eS([iR({type:Boolean})],nN.prototype,"autoplay",2),eS([iR({type:Boolean})],nN.prototype,"loop",2),eS([iU("video")],nN.prototype,"videoElement",2),nN=eS([iJ("gds-video")],nN);var nP=sR`
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
`,nO=class extends i2{constructor(){super(...arguments),this.tag="p"}createTag(){let t=document.createElement(this.tag);return t.appendChild(document.createElement("slot")),t}render(){return i1`${this.createTag()}`}};nO.styles=[rf,nP],eS([iR({type:String})],nO.prototype,"tag",2),eS([nx({valueTemplate:t=>`${t}`,styleTemplate:(t,e)=>{let s=e[0];return`font-size: var(--gds-text-size-${s}); line-height: var(--gds-text-line-height-${s});`}})],nO.prototype,"size",2),eS([nx()],nO.prototype,"margin",2),eS([nx({property:"text-wrap",valueTemplate:t=>t})],nO.prototype,"wrap",2),eS([nx({property:"text-transform",valueTemplate:t=>t})],nO.prototype,"transform",2),eS([nx({property:"max-width",valueTemplate:t=>`${t}ch`})],nO.prototype,"length",2),eS([nx({property:"min-width",valueTemplate:t=>`${t}ch`})],nO.prototype,"min",2),eS([nx({property:"text-align",valueTemplate:t=>t})],nO.prototype,"align",2),eS([nx({property:"--_lines",valueTemplate:t=>t})],nO.prototype,"lines",2),eS([nx({property:"color",valueTemplate:t=>{let[e,s]=t.split("/");return s?`color-mix(in srgb, var(--gds-sys-color-${e}) ${100*parseFloat(s)}%, transparent 0%)`:`var(--gds-sys-color-${e})`}})],nO.prototype,"color",2),nO=eS([iJ("gds-text")],nO);var nR=sR`
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
`,nz=class extends i2{render(){return i1`<hr />`}};nz.styles=[rf,nR],eS([nx({property:"color",valueTemplate:t=>{let[e,s]=t.split("/");return s?`color-mix(in srgb, var(--gds-sys-color-${e}) ${100*parseFloat(s)}%, transparent 0%)`:`var(--gds-sys-color-${e})`}})],nz.prototype,"color",2),eS([nx({property:"--_size",selector:"hr",valueTemplate:t=>`var(--gds-space-${t})`})],nz.prototype,"size",2),eS([nx({property:"opacity",selector:"hr",valueTemplate:t=>t})],nz.prototype,"opacity",2),nz=eS([iJ("gds-divider")],nz);var nH=class extends i2{render(){return i1`<div></div>`}};nH.styles=[rf],eS([nx({property:"height",selector:"div",valueTemplate:t=>`var(--gds-space-${t})`})],nH.prototype,"size",2),nH=eS([iJ("gds-spacer")],nH);var nU=class extends i2{connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}render(){return i1`<slot></slot>`}};nU=eS([iJ("gds-list-item")],nU);var nB=class extends i2{constructor(){super(...arguments),this.label=""}connectedCallback(){super.connectedCallback(),rl(this),i5.instance.apply(this,"gds-grouped-list")}render(){return i1`${iI(this.label,()=>i1`<div class="gds-list-heading" aria-hidden="true" id="label">
            ${this.label}
          </div>`)}
      <div role="list" aria-labelledby="label">
        <slot gds-allow="gds-list-item"></slot>
      </div>`}};function nI(){return(t,e,s)=>{let i=t.connectedCallback,r=t.disconnectedCallback;t.connectedCallback=function(){i?.call(this),this.__resizeObservers=this.__resizeObservers||{},this.__resizeObserver_tids=this.__resizeObserver_tids||{},this.__resizeObservers[e]=new ResizeObserver(()=>{this.__resizeObserver_tids[e]&&clearTimeout(this.__resizeObserver_tids[e]),this.__resizeObserver_tids[e]=setTimeout(()=>{s.value?.call(this)},20)}),this.__resizeObservers[e].observe(this)},t.disconnectedCallback=function(){r?.call(this),this.__resizeObservers[e].disconnect()}}}eS([iR()],nB.prototype,"label",2),nB=eS([iJ("gds-grouped-list")],nB);var nV=`:host {
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

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
}

@media (pointer: fine) {
  button:hover {
    background-color: color-mix(
      in srgb,
      var(--gds-sys-color-state-layers-state-black-dim1),
      transparent
    );

    &:disabled {
      background-color: transparent;
    }
  }
}

button:focus-visible {
  outline: 2px solid #000;
  outline-offset: -2px;
}
`,nj=class extends i2{constructor(){super(...arguments),this.selected=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),i5.instance.apply(this,"gds-segmented"),this.setAttribute("role","listitem")}render(){return i1`<button
      aria-current=${String(this.selected)}
      ?disabled="${this.disabled}"
    >
      <slot></slot>
    </button>`}};nj.styles=[...rf,sO(nV)],eS([iR({type:Boolean,reflect:!0})],nj.prototype,"selected",2),eS([iR()],nj.prototype,"value",2),eS([iR({type:Boolean,reflect:!0})],nj.prototype,"disabled",2),nj=eS([iJ("gds-segment")],nj);var nY=`:host {
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
`,nq={small:36,medium:44},nG=t=>t?0:4,nK=class extends i2{constructor(){super(...arguments),eM(this,ed),this.segMinWidth=100,this.size="medium",eM(this,t6,void 0),this._showPrevButton=!1,this._showNextButton=!1,eM(this,t7,0),eM(this,t4,0),eM(this,t8,0),eM(this,t9,0),eM(this,et,0),eM(this,ee,0),eM(this,es,0),eM(this,ei,!1),eM(this,er,t=>{eF(this,ee,t.clientX),eF(this,es,eT(this,t9)),eF(this,ei,!0)}),eM(this,eo,t=>{if(!eT(this,ei))return;t.preventDefault();let e=t.clientX-eT(this,ee);if(!(5>Math.abs(e)))try{this._elSegments.hasPointerCapture(t.pointerId)||this._elSegments.setPointerCapture(t.pointerId),eF(this,t9,eT(this,es)+e),eT(this,eh).call(this)}catch{}}),eM(this,en,t=>{if(eT(this,ei)){eF(this,ei,!1);try{this._elSegments.releasePointerCapture(t.pointerId),eT(this,ea).call(this)}catch{}}}),eM(this,ea,()=>{eF(this,t7,Math.round(-eT(this,t9)/eT(this,t4))),eT(this,el).call(this)}),eM(this,el,(t=!1)=>{let e=()=>{let t=this.segments.length,e=this._elTrack.offsetWidth;if(e/t>this.segMinWidth)return{count:t,segmentWidth:(e-nG(this._isUsingTransitionalStyles)*(t-1))/t};let s=Math.floor((this.offsetWidth-2*nq[this.size])/this.segMinWidth),i=(e-nG(this._isUsingTransitionalStyles)*(s-1))/s;return{count:s,segmentWidth:i}},{count:s}=e();t&&(eT(this,et)>=eT(this,t7)+s&&eF(this,t7,eT(this,et)-s+1),eT(this,et)<eT(this,t7)&&eF(this,t7,eT(this,et)));let i=this.segments.length-s,r=eT(this,t7)>=i,o=0>=eT(this,t7);r&&eF(this,t7,i),o&&eF(this,t7,0),eT(this,eg).call(this,s),this.updateComplete.then(()=>{let{segmentWidth:t,count:s}=e();this.segments.forEach(e=>{e.style.width=t+"px"}),eF(this,t9,-eT(this,t7)*t-nG(this._isUsingTransitionalStyles)*eT(this,t7)),eT(this,eh).call(this),eF(this,t4,t),eF(this,t8,t),eT(this,ef).call(this)})}),eM(this,eh,()=>{window.requestAnimationFrame(()=>{this._elSegments.style.transform=`translateX(${eT(this,t9)}px)`})}),eM(this,ep,()=>{eD(this,t7)._--,eT(this,el).call(this)}),eM(this,eu,()=>{eD(this,t7)._++,eT(this,el).call(this)}),eM(this,eg,t=>{this._showPrevButton=eT(this,t7)>0,this._showNextButton=eT(this,t7)<this.segments.length-t}),eM(this,ef,()=>{let t=this.segments.find(t=>t.selected);if(t){let e=this.segments.indexOf(t),s=e*eT(this,t8)+nG(this._isUsingTransitionalStyles)*e;this._elIndicator.style.transform=`translateX(${s}px)`,this._elIndicator.style.width=`${eT(this,t8)}px`}else this._elIndicator.style.transform="translateX(-100%)",this._elIndicator.style.width="0px"}),eM(this,ey,t=>{let e=this.segments.find(e=>e===t.target||e.contains(t.target));e&&(this.segments.forEach(t=>t.selected=!1),e.selected=!0,eF(this,t6,e.value),eT(this,ef).call(this),this.dispatchEvent(new CustomEvent("change",{detail:{segment:e},bubbles:!0,composed:!0})))}),eM(this,ev,()=>{eT(this,t6)&&this.updateComplete.then(()=>{let t=this.segments.find(t=>t.value===eT(this,t6));t&&(this.segments.forEach(t=>t.selected=!1),t.selected=!0,eF(this,et,this.segments.indexOf(t)),eT(this,el).call(this,!0))})})}get value(){return eT(this,t6)}set value(t){eF(this,t6,t),eT(this,ev).call(this)}get segments(){return this._elSlot?this._elSlot.assignedElements():[]}connectedCallback(){super.connectedCallback(),i5.instance.apply(this,"gds-segmented-control"),this.addEventListener("focusin",t=>{t.target instanceof nj&&(eF(this,et,this.segments.indexOf(t.target)),eT(this,el).call(this,!0))})}render(){return i1`${iI(this._showPrevButton,()=>i1`<button
            id="btn-prev"
            @click=${eT(this,ep)}
            aria-label=${rD("Scroll right")}
          >
            <gds-icon-chevron-left />
          </button>`)}
      <div
        id="track"
        @scroll=${()=>{this._elTrack.scrollLeft=0}}
      >
        <div
          id="segments"
          @pointerdown=${eT(this,er)}
          @pointermove=${eT(this,eo)}
          @touchmove=${eT(this,eo)}
          @pointerup=${eT(this,en)}
          @pointercancel=${eT(this,en)}
          role="list"
        >
          <slot
            gds-allow="gds-segment"
            @click=${eT(this,ey)}
            @slotchange=${eW(this,ed,ec)}
            role="none"
          ></slot>
          <div id="indicator" role="none"></div>
        </div>
      </div>
      ${iI(this._showNextButton,()=>i1`<button
            id="btn-next"
            @click=${eT(this,eu)}
            aria-label=${rD("Scroll right")}
          >
            <gds-icon-chevron-right />
          </button>`)}`}_recalculateMinWidth(){this.updateComplete.then(()=>eT(this,el).call(this))}};t6=new WeakMap,t7=new WeakMap,t4=new WeakMap,t8=new WeakMap,t9=new WeakMap,et=new WeakMap,ee=new WeakMap,es=new WeakMap,ei=new WeakMap,er=new WeakMap,eo=new WeakMap,en=new WeakMap,ea=new WeakMap,el=new WeakMap,eh=new WeakMap,ed=new WeakSet,ec=function(){let t=this.segments.find(t=>t.selected)?.value;t&&eF(this,t6,t),eT(this,el).call(this)},ep=new WeakMap,eu=new WeakMap,eg=new WeakMap,ef=new WeakMap,ey=new WeakMap,ev=new WeakMap,nK.styles=[rf,sO(nY)],eS([iR({type:Number,attribute:"seg-min-width"})],nK.prototype,"segMinWidth",2),eS([iR({reflect:!0})],nK.prototype,"size",2),eS([iR()],nK.prototype,"value",1),eS([iU("slot")],nK.prototype,"_elSlot",2),eS([iU("#indicator")],nK.prototype,"_elIndicator",2),eS([iU("#track")],nK.prototype,"_elTrack",2),eS([iU("#segments")],nK.prototype,"_elSegments",2),eS([iz()],nK.prototype,"_showPrevButton",2),eS([iz()],nK.prototype,"_showNextButton",2),eS([nI(),i6("segMinWidth")],nK.prototype,"_recalculateMinWidth",1),nK=eS([iJ("gds-segmented-control")],nK);var nX=class extends i2{constructor(){super(...arguments),this.colorScheme="light"}connectedCallback(){super.connectedCallback(),i5.instance.apply(this,"gds-theme")}render(){return i1`<slot></slot>`}};nX.styles=sR`
    :host {
      display: contents;
    }
  `,eS([iR({reflect:!0,attribute:"color-scheme"})],nX.prototype,"colorScheme",2),nX=eS([iJ("gds-theme")],nX);var nZ=class extends oG{};nZ._regularSVG='<path d="M2.75 15.0938L9 20.25L21.25 3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',nZ._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M21.7426 2.99454C22.2979 3.40464 22.4157 4.18729 22.0056 4.74263L10.0056 20.9926C9.80433 21.2652 9.50107 21.4443 9.16524 21.4891C8.82942 21.5339 8.4898 21.4404 8.22417 21.2301L2.22417 16.4801C1.6829 16.0516 1.59149 15.2655 2.01999 14.7242C2.4485 14.1829 3.23466 14.0915 3.77593 14.52L8.76241 18.4677L19.9945 3.25753C20.4046 2.70218 21.1873 2.58444 21.7426 2.99454Z" fill="currentColor"/>',nZ._name="checkmark",nZ=eS([iJ("gds-icon-checkmark")],nZ);var nJ=sR`
  @layer base, reset, transitional-styles;
  @layer base {
    .btn-p {
      padding: 0 0.75rem;
    }
    .icon {
      width: 1rem;
    }
  }
`,nQ=class extends i2{constructor(){super(...arguments),this.selected=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),i5.instance.apply(this,"gds-filter-chip"),this._button.then(t=>{i5.instance.apply(t,"gds-button")})}render(){let t={"btn-p":!this.selected};return i1`<gds-button
      class="btn"
      size="small"
      .rank=${this.selected?"primary":"secondary"}
      variant=${this._isUsingTransitionalStyles?"ghost":"default"}
      gds-role="option"
      gds-aria-selected=${this.selected}
    >
      <span class=${iq(t)}><slot></slot></span>
      <gds-icon-checkmark
        slot="trail"
        style="display: ${this.selected?"contents":"none"}"
        width="16"
        height="16"
        class="icon"
      ></gds-icon-checkmark>
    </gds-button>`}};nQ.styles=[nJ],eS([iR({reflect:!0,type:Boolean})],nQ.prototype,"selected",2),eS([iR()],nQ.prototype,"value",2),eS([iB(function(t){return iZ.get(t)??t}("gds-button"))],nQ.prototype,"_button",2),nQ=eS([iJ("gds-filter-chip")],nQ);var n0=sR`
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
`,n1=class extends rb{constructor(){super(...arguments),eM(this,ew),eM(this,ex),this.multiple=!1,this.label="",this.rowCollapse=!1,this._collapsed=!1,eM(this,em,t=>{let e=this.chips.find(e=>e===t.target||e.contains(t.target));e&&(this.multiple&&Array.isArray(this.value)?e.selected?this.value=this.value.filter(t=>t!==e.value):this.value=[...this.value,e.value]:this.value=e.value,this.dispatchEvent(new CustomEvent("change",{detail:{clickedChip:e,value:this.value},bubbles:!0,composed:!0})))}),eM(this,eb,3),eM(this,e_,0)}get chips(){return this._elSlot?this._elSlot.assignedElements():[]}render(){let t={collapse:this._collapsed};return i1`<div
      class="chips ${iq(t)}"
      role="listbox"
      aria-label=${this.label}
      aria-multiselectable=${this.multiple}
    >
      <slot
        gds-allow="gds-filter-chip"
        @click=${eT(this,em)}
        @slotchange=${eW(this,ex,ek)}
        role="none"
      ></slot>
    </div>`}_handleResize(){if(!this.rowCollapse)return;let t=eW(this,ew,e$).call(this),e=this.offsetHeight,s=this.offsetWidth;e>=t*eT(this,eb)&&(this._collapsed=!0,eF(this,e_,s)),s>eT(this,e_)&&(this._collapsed=!1)}_updateSelectedFromValue(){this.value&&(this.multiple&&!Array.isArray(this.value)&&(this.value=[this.value]),!this.multiple&&Array.isArray(this.value)&&(this.value=this.value[0]),this.updateComplete.then(()=>{this.chips.forEach(t=>{t.selected=this.multiple?this.value.includes(t.value):this.value===t.value})}))}};em=new WeakMap,eb=new WeakMap,e_=new WeakMap,ew=new WeakSet,e$=function(){return this.chips[0]?.offsetHeight||0},ex=new WeakSet,ek=function(){let t=this.chips.find(t=>t.selected)?.value;t&&(this.value=t)},n1.styles=[n0],eS([iR({converter:{fromAttribute:t=>t.split(","),toAttribute:t=>Array.isArray(t)?t.join(","):t}})],n1.prototype,"value",2),eS([iR({type:Boolean})],n1.prototype,"multiple",2),eS([iR()],n1.prototype,"label",2),eS([iR({type:Boolean,attribute:"row-collapse"})],n1.prototype,"rowCollapse",2),eS([iz()],n1.prototype,"_collapsed",2),eS([iU("slot")],n1.prototype,"_elSlot",2),eS([nI()],n1.prototype,"_handleResize",1),eS([i6("value")],n1.prototype,"_updateSelectedFromValue",1),n1=eS([iJ("gds-filter-chips")],n1)})();/*! Bundled license information:

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