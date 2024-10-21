"use strict";(()=>{var e,t,s,o,r,i,n,l,a,d,c,h,p,g,u,f,b,y,v,m,x,w,k,_,$,S,E,C,A,T,M,z,D,F,W,L,O,N,P,R,H,B,V,U,j,I,Y,q,G,Z,X,K,J,Q,ee,et,es,eo,er,ei,en,el,ea,ed,ec,eh,ep,eg,eu,ef,eb,ey,ev,em,ex,ew,ek,e_,e$,eS,eE,eC,eA,eT,eM,ez,eD,eF,eW,eL,eO,eN,eP,eR,eH,eB,eV,eU,ej,eI,eY,eq,eG,eZ,eX,eK,eJ,eQ,e0,e1,e2,e3,e5,e7,e6,e4,e8,e9,te,tt,ts,to,tr,ti,tn,tl,ta,td,tc,th,tp,tg,tu,tf,tb,ty,tv,tm,tx,tw,tk,t_,t$,tS,tE,tC,tA,tT,tM,tz,tD,tF,tW,tL,tO,tN,tP,tR,tH,tB,tV,tU,tj,tI,tY,tq,tG,tZ,tX,tK,tJ,tQ,t0,t1,t2,t3,t5,t7,t6,t4,t8,t9,se,st,ss,so,sr,si,sn,sl,sa,sd,sc,sh,sp,sg,su,sf,sb,sy,sv,sm,sx,sw,sk,s_,s$,sS,sE,sC,sA,sT,sM,sz,sD,sF,sW,sL,sO,sN,sP,sR,sH,sB,sV,sU,sj,sI,sY,sq,sG,sZ,sX,sK,sJ,sQ,s0,s1,s2,s3,s5,s7,s6,s4=Object.defineProperty,s8=Object.getOwnPropertyDescriptor,s9=(e,t,s,o)=>{for(var r,i=o>1?void 0:o?s8(t,s):t,n=e.length-1;n>=0;n--)(r=e[n])&&(i=(o?r(t,s,i):r(i))||i);return o&&i&&s4(t,s,i),i},oe=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)},ot=(e,t,s)=>(oe(e,t,"read from private field"),s?s.call(e):t.get(e)),os=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},oo=(e,t,s,o)=>(oe(e,t,"write to private field"),o?o.call(e,s):t.set(e,s),s),or=(e,t,s,o)=>({set _(value){oo(e,t,value,s)},get _(){return ot(e,t,o)}}),oi=(e,t,s)=>(oe(e,t,"access private method"),s),on=e=>(t,s)=>{void 0!==s?s.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},ol=globalThis,oa=ol.ShadowRoot&&(void 0===ol.ShadyCSS||ol.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,od=Symbol(),oc=new WeakMap,oh=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==od)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(oa&&void 0===e){let s=void 0!==t&&1===t.length;s&&(e=oc.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&oc.set(t,e))}return e}toString(){return this.cssText}},op=e=>new oh("string"==typeof e?e:e+"",void 0,od),og=(e,t)=>{if(oa)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let s of t){let t=document.createElement("style"),o=ol.litNonce;void 0!==o&&t.setAttribute("nonce",o),t.textContent=s.cssText,e.appendChild(t)}},ou=oa?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let s of e.cssRules)t+=s.cssText;return op(t)})(e):e,{is:of,defineProperty:ob,getOwnPropertyDescriptor:oy,getOwnPropertyNames:ov,getOwnPropertySymbols:om,getPrototypeOf:ox}=Object,ow=globalThis,ok=ow.trustedTypes,o_=ok?ok.emptyScript:"",o$=ow.reactiveElementPolyfillSupport,oS=(e,t)=>e,oE={toAttribute(e,t){switch(t){case Boolean:e=e?o_:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=null!==e;break;case Number:s=null===e?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch(e){s=null}}return s}},oC=(e,t)=>!of(e,t),oA={attribute:!0,type:String,converter:oE,reflect:!1,hasChanged:oC};Symbol.metadata??=Symbol("metadata"),ow.litPropertyMetadata??=new WeakMap;var oT=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=oA){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let s=Symbol(),o=this.getPropertyDescriptor(e,s,t);void 0!==o&&ob(this.prototype,e,o)}}static getPropertyDescriptor(e,t,s){let{get:o,set:r}=oy(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return o?.call(this)},set(t){let i=o?.call(this);r.call(this,t),this.requestUpdate(e,i,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??oA}static _$Ei(){if(this.hasOwnProperty(oS("elementProperties")))return;let e=ox(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(oS("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(oS("properties"))){let e=this.properties;for(let t of[...ov(e),...om(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,s]of t)this.elementProperties.set(e,s)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let s=this._$Eu(e,t);void 0!==s&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let s of new Set(e.flat(1/0).reverse()))t.unshift(ou(s));else void 0!==e&&t.push(ou(e));return t}static _$Eu(e,t){let s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return og(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EC(e,t){let s=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,s);if(void 0!==o&&!0===s.reflect){let r=(void 0!==s.converter?.toAttribute?s.converter:oE).toAttribute(t,s.type);this._$Em=e,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(e,t){let s=this.constructor,o=s._$Eh.get(e);if(void 0!==o&&this._$Em!==o){let e=s.getPropertyOptions(o),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:oE;this._$Em=o,this[o]=r.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,s){if(void 0!==e){if(!((s??=this.constructor.getPropertyOptions(e)).hasChanged??oC)(this[e],t))return;this.P(e,t,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,s){this._$AL.has(e)||this._$AL.set(e,t),!0===s.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,s]of e)!0!==s.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],s)}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(e){}firstUpdated(e){}};oT.elementStyles=[],oT.shadowRootOptions={mode:"open"},oT[oS("elementProperties")]=new Map,oT[oS("finalized")]=new Map,o$?.({ReactiveElement:oT}),(ow.reactiveElementVersions??=[]).push("2.0.4");var oM={attribute:!0,type:String,converter:oE,reflect:!1,hasChanged:oC},oz=(e=oM,t,s)=>{let{kind:o,metadata:r}=s,i=globalThis.litPropertyMetadata.get(r);if(void 0===i&&globalThis.litPropertyMetadata.set(r,i=new Map),i.set(s.name,e),"accessor"===o){let{name:o}=s;return{set(s){let r=t.get.call(this);t.set.call(this,s),this.requestUpdate(o,r,e)},init(t){return void 0!==t&&this.P(o,void 0,e),t}}}if("setter"===o){let{name:o}=s;return function(s){let r=this[o];t.call(this,s),this.requestUpdate(o,r,e)}}throw Error("Unsupported decorator location: "+o)};function oD(e){return(t,s)=>"object"==typeof s?oz(e,t,s):((e,t,s)=>{let o=t.hasOwnProperty(s);return t.constructor.createProperty(s,o?{...e,wrapped:!0}:e),o?Object.getOwnPropertyDescriptor(t,s):void 0})(e,t,s)}function oF(e){return oD({...e,state:!0,attribute:!1})}var oW=(e,t,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,s),s);function oL(e,t){return(s,o,r)=>{let i=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}="object"==typeof o?s:r??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return oW(s,o,{get(){let s=e.call(this);return void 0===s&&(null!==(s=i(this))||this.hasUpdated)&&t.call(this,s),s}})}return oW(s,o,{get(){return i(this)}})}}function oO(e){return(t,s)=>oW(t,s,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(e)??null}})}function oN(e,t,s){return e?t(e):s?.(e)}var oP=globalThis,oR=oP.trustedTypes,oH=oR?oR.createPolicy("lit-html",{createHTML:e=>e}):void 0,oB="$lit$",oV=`lit$${Math.random().toFixed(9).slice(2)}$`,oU="?"+oV,oj=`<${oU}>`,oI=document,oY=()=>oI.createComment(""),oq=e=>null===e||"object"!=typeof e&&"function"!=typeof e,oG=Array.isArray,oZ=e=>oG(e)||"function"==typeof e?.[Symbol.iterator],oX="[ 	\n\f\r]",oK=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,oJ=/-->/g,oQ=/>/g,o0=RegExp(`>|${oX}(?:([^\\s"'>=/]+)(${oX}*=${oX}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),o1=/'/g,o2=/"/g,o3=/^(?:script|style|textarea|title)$/i,o5=e=>(t,...s)=>({_$litType$:e,strings:t,values:s}),o7=o5(1),o6=o5(2),o4=o5(3),o8=Symbol.for("lit-noChange"),o9=Symbol.for("lit-nothing"),re=new WeakMap,rt=oI.createTreeWalker(oI,129);function rs(e,t){if(!oG(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==oH?oH.createHTML(t):t}var ro=(e,t)=>{let s=e.length-1,o=[],r,i=2===t?"<svg>":3===t?"<math>":"",n=oK;for(let t=0;t<s;t++){let s=e[t],l,a,d=-1,c=0;for(;c<s.length&&(n.lastIndex=c,null!==(a=n.exec(s)));)c=n.lastIndex,n===oK?"!--"===a[1]?n=oJ:void 0!==a[1]?n=oQ:void 0!==a[2]?(o3.test(a[2])&&(r=RegExp("</"+a[2],"g")),n=o0):void 0!==a[3]&&(n=o0):n===o0?">"===a[0]?(n=r??oK,d=-1):void 0===a[1]?d=-2:(d=n.lastIndex-a[2].length,l=a[1],n=void 0===a[3]?o0:'"'===a[3]?o2:o1):n===o2||n===o1?n=o0:n===oJ||n===oQ?n=oK:(n=o0,r=void 0);let h=n===o0&&e[t+1].startsWith("/>")?" ":"";i+=n===oK?s+oj:d>=0?(o.push(l),s.slice(0,d)+oB+s.slice(d)+oV+h):s+oV+(-2===d?t:h)}return[rs(e,i+(e[s]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]},rr=class e{constructor({strings:t,_$litType$:s},o){let r;this.parts=[];let i=0,n=0,l=t.length-1,a=this.parts,[d,c]=ro(t,s);if(this.el=e.createElement(d,o),rt.currentNode=this.el.content,2===s||3===s){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=rt.nextNode())&&a.length<l;){if(1===r.nodeType){if(r.hasAttributes())for(let e of r.getAttributeNames())if(e.endsWith(oB)){let t=c[n++],s=r.getAttribute(e).split(oV),o=/([.?@])?(.*)/.exec(t);a.push({type:1,index:i,name:o[2],strings:s,ctor:"."===o[1]?rd:"?"===o[1]?rc:"@"===o[1]?rh:ra}),r.removeAttribute(e)}else e.startsWith(oV)&&(a.push({type:6,index:i}),r.removeAttribute(e));if(o3.test(r.tagName)){let e=r.textContent.split(oV),t=e.length-1;if(t>0){r.textContent=oR?oR.emptyScript:"";for(let s=0;s<t;s++)r.append(e[s],oY()),rt.nextNode(),a.push({type:2,index:++i});r.append(e[t],oY())}}}else if(8===r.nodeType){if(r.data===oU)a.push({type:2,index:i});else{let e=-1;for(;-1!==(e=r.data.indexOf(oV,e+1));)a.push({type:7,index:i}),e+=oV.length-1}}i++}}static createElement(e,t){let s=oI.createElement("template");return s.innerHTML=e,s}};function ri(e,t,s=e,o){if(t===o8)return t;let r=void 0!==o?s.o?.[o]:s.l,i=oq(t)?void 0:t._$litDirective$;return r?.constructor!==i&&(r?._$AO?.(!1),void 0===i?r=void 0:(r=new i(e))._$AT(e,s,o),void 0!==o?(s.o??=[])[o]=r:s.l=r),void 0!==r&&(t=ri(e,r._$AS(e,t.values),r,o)),t}var rn=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:s}=this._$AD,o=(e?.creationScope??oI).importNode(t,!0);rt.currentNode=o;let r=rt.nextNode(),i=0,n=0,l=s[0];for(;void 0!==l;){if(i===l.index){let t;2===l.type?t=new rl(r,r.nextSibling,this,e):1===l.type?t=new l.ctor(r,l.name,l.strings,this,e):6===l.type&&(t=new rp(r,this,e)),this._$AV.push(t),l=s[++n]}i!==l?.index&&(r=rt.nextNode(),i++)}return rt.currentNode=oI,o}p(e){let t=0;for(let s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}},rl=class e{get _$AU(){return this._$AM?._$AU??this.v}constructor(e,t,s,o){this.type=2,this._$AH=o9,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=o,this.v=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){oq(e=ri(this,e,t))?e===o9||null==e||""===e?(this._$AH!==o9&&this._$AR(),this._$AH=o9):e!==this._$AH&&e!==o8&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):oZ(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==o9&&oq(this._$AH)?this._$AA.nextSibling.data=e:this.T(oI.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:s}=e,o="number"==typeof s?this._$AC(e):(void 0===s.el&&(s.el=rr.createElement(rs(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===o)this._$AH.p(t);else{let e=new rn(o,this),s=e.u(this.options);e.p(t),this.T(s),this._$AH=e}}_$AC(e){let t=re.get(e.strings);return void 0===t&&re.set(e.strings,t=new rr(e)),t}k(t){oG(this._$AH)||(this._$AH=[],this._$AR());let s=this._$AH,o,r=0;for(let i of t)r===s.length?s.push(o=new e(this.O(oY()),this.O(oY()),this,this.options)):o=s[r],o._$AI(i),r++;r<s.length&&(this._$AR(o&&o._$AB.nextSibling,r),s.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this.v=e,this._$AP?.(e))}},ra=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,o,r){this.type=1,this._$AH=o9,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=o9}_$AI(e,t=this,s,o){let r=this.strings,i=!1;if(void 0===r)(i=!oq(e=ri(this,e,t,0))||e!==this._$AH&&e!==o8)&&(this._$AH=e);else{let o,n;let l=e;for(e=r[0],o=0;o<r.length-1;o++)(n=ri(this,l[s+o],t,o))===o8&&(n=this._$AH[o]),i||=!oq(n)||n!==this._$AH[o],n===o9?e=o9:e!==o9&&(e+=(n??"")+r[o+1]),this._$AH[o]=n}i&&!o&&this.j(e)}j(e){e===o9?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},rd=class extends ra{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===o9?void 0:e}},rc=class extends ra{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==o9)}},rh=class extends ra{constructor(e,t,s,o,r){super(e,t,s,o,r),this.type=5}_$AI(e,t=this){if((e=ri(this,e,t,0)??o9)===o8)return;let s=this._$AH,o=e===o9&&s!==o9||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==o9&&(s===o9||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},rp=class{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){ri(this,e)}},rg=oP.litHtmlPolyfillSupport;rg?.(rr,rl),(oP.litHtmlVersions??=[]).push("3.2.0");var ru=(e,t,s)=>{let o=s?.renderBefore??t,r=o._$litPart$;if(void 0===r){let e=s?.renderBefore??null;o._$litPart$=r=new rl(t.insertBefore(oY(),e),e,void 0,s??{})}return r._$AI(e),r},rf={ATTRIBUTE:1,CHILD:2,ELEMENT:6},rb=e=>(...t)=>({_$litDirective$:e,values:t}),ry=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this.t=e,this._$AM=t,this.i=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},rv=rb(class extends ry{constructor(e){if(super(e),e.type!==rf.ATTRIBUTE||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){for(let s in this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[s]&&!this.nt?.has(s)&&this.st.add(s);return this.render(t)}let s=e.element.classList;for(let e of this.st)e in t||(s.remove(e),this.st.delete(e));for(let e in t){let o=!!t[e];o===this.st.has(e)||this.nt?.has(e)||(o?(s.add(e),this.st.add(e)):(s.remove(e),this.st.delete(e)))}return o8}}),rm=class{constructor(e){this.#e=!rx(),this.#t=[],this.#s=new Map,this.#o=new Map,this.host=e,this.host.addController(this)}#e;#t;#s;#o;hostConnected(){this.host.shadowRoot&&0===this.#t.length&&(this.#t=[...this.host.shadowRoot.adoptedStyleSheets||[]])}inject(e,t){let s=Array.isArray(t)?t.map(e=>e.toString()).join(""):t.toString();this.#e?this.#r(e,s):this.#i(e,s)}clearAll(){this.#e?(this.#o.forEach(e=>e.remove()),this.host.shadowRoot?.querySelectorAll("style").forEach(e=>e.innerHTML=""),this.#o.clear()):this.host.shadowRoot&&(this.host.shadowRoot.adoptedStyleSheets=[],this.#s.clear(),this.#t=[])}#r(e,t){let s=this.#o.get(e);s||(s=document.createElement("style"),this.#o.set(e,s)),s.textContent=t,this.host.shadowRoot?.appendChild(s)}#i(e,t){if(!this.host.shadowRoot)return;let s=this.#s.get(e);s||(s=new CSSStyleSheet,this.#s.set(e,s)),s.replaceSync(t),this.host.shadowRoot.adoptedStyleSheets=[...this.#t,...Array.from(this.#s.values())]}};function rx(){try{return new CSSStyleSheet,!0}catch{return!1}}var rw=globalThis,rk=rw.ShadowRoot&&(void 0===rw.ShadyCSS||rw.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r_=Symbol(),r$=new WeakMap,rS=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==r_)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(rk&&void 0===e){let s=void 0!==t&&1===t.length;s&&(e=r$.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&r$.set(t,e))}return e}toString(){return this.cssText}},rE=e=>new rS("string"==typeof e?e:e+"",void 0,r_),rC=(e,...t)=>new rS(1===e.length?e[0]:t.reduce((t,s,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[o+1],e[0]),e,r_),rA=(e,t)=>{if(rk)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let s of t){let t=document.createElement("style"),o=rw.litNonce;void 0!==o&&t.setAttribute("nonce",o),t.textContent=s.cssText,e.appendChild(t)}},rT=rk?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let s of e.cssRules)t+=s.cssText;return rE(t)})(e):e,{is:rM,defineProperty:rz,getOwnPropertyDescriptor:rD,getOwnPropertyNames:rF,getOwnPropertySymbols:rW,getPrototypeOf:rL}=Object,rO=globalThis,rN=rO.trustedTypes,rP=rN?rN.emptyScript:"",rR=rO.reactiveElementPolyfillSupport,rH=(e,t)=>e,rB={toAttribute(e,t){switch(t){case Boolean:e=e?rP:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=null!==e;break;case Number:s=null===e?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch(e){s=null}}return s}},rV=(e,t)=>!rM(e,t),rU={attribute:!0,type:String,converter:rB,reflect:!1,hasChanged:rV};Symbol.metadata??=Symbol("metadata"),rO.litPropertyMetadata??=new WeakMap;var rj=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=rU){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let s=Symbol(),o=this.getPropertyDescriptor(e,s,t);void 0!==o&&rz(this.prototype,e,o)}}static getPropertyDescriptor(e,t,s){let{get:o,set:r}=rD(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return o?.call(this)},set(t){let i=o?.call(this);r.call(this,t),this.requestUpdate(e,i,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??rU}static _$Ei(){if(this.hasOwnProperty(rH("elementProperties")))return;let e=rL(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(rH("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(rH("properties"))){let e=this.properties;for(let t of[...rF(e),...rW(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,s]of t)this.elementProperties.set(e,s)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let s=this._$Eu(e,t);void 0!==s&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let s of new Set(e.flat(1/0).reverse()))t.unshift(rT(s));else void 0!==e&&t.push(rT(e));return t}static _$Eu(e,t){let s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return rA(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EC(e,t){let s=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,s);if(void 0!==o&&!0===s.reflect){let r=(void 0!==s.converter?.toAttribute?s.converter:rB).toAttribute(t,s.type);this._$Em=e,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(e,t){let s=this.constructor,o=s._$Eh.get(e);if(void 0!==o&&this._$Em!==o){let e=s.getPropertyOptions(o),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:rB;this._$Em=o,this[o]=r.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,s){if(void 0!==e){if(!((s??=this.constructor.getPropertyOptions(e)).hasChanged??rV)(this[e],t))return;this.P(e,t,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,s){this._$AL.has(e)||this._$AL.set(e,t),!0===s.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,s]of e)!0!==s.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],s)}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(e){}firstUpdated(e){}};rj.elementStyles=[],rj.shadowRootOptions={mode:"open"},rj[rH("elementProperties")]=new Map,rj[rH("finalized")]=new Map,rR?.({ReactiveElement:rj}),(rO.reactiveElementVersions??=[]).push("2.0.4");var rI=class extends rj{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this.o=ru(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.o?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.o?.setConnected(!1)}render(){return o8}};rI._$litElement$=!0,rI.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:rI});var rY=globalThis.litElementPolyfillSupport;rY?.({LitElement:rI}),(globalThis.litElementVersions??=[]).push("4.1.0");var rq="-gdsvsuffix",rG=new Map,rZ=e=>{if(globalThis.GDS_DISABLE_VERSIONED_ELEMENTS)return rG.set(e,e),on(e);let t=e+rq;return(rG.set(e,t),customElements.get(t))?e=>!1:on(t)},rX=new WeakMap,rK=e=>e.map(e=>{for(let[t,s]of rG.entries())e=e.replace(RegExp(`${t}(?![-a-z])`,"mg"),s);return e}),rJ=function(e){return(t,...s)=>{if(globalThis.GDS_DISABLE_VERSIONED_ELEMENTS)return e(t,...s);let[o,...r]=function(e,...t){let s=rX.get(e);return s||((s=rK(e)).raw=rK(e.raw),rX.set(e,s)),[s,...t]}(t,...s);return e(o,...r)}}(o7);!function(e){!function(t){var s="object"==typeof global?global:"object"==typeof self?self:"object"==typeof this?this:Function("return this;")(),o=r(e);function r(e,t){return function(s,o){"function"!=typeof e[s]&&Object.defineProperty(e,s,{configurable:!0,writable:!0,value:o}),t&&t(s,o)}}void 0===s.Reflect?s.Reflect=e:o=r(s.Reflect,o),t(o)}(function(e){var t=Object.prototype.hasOwnProperty,s="function"==typeof Symbol,o=s&&void 0!==Symbol.toPrimitive?Symbol.toPrimitive:"@@toPrimitive",r=s&&void 0!==Symbol.iterator?Symbol.iterator:"@@iterator",i="function"==typeof Object.create,n=({__proto__:[]})instanceof Array,l=!i&&!n,a={create:i?function(){return T(Object.create(null))}:n?function(){return T({__proto__:null})}:function(){return T({})},has:l?function(e,s){return t.call(e,s)}:function(e,t){return t in e},get:l?function(e,s){return t.call(e,s)?e[s]:void 0}:function(e,t){return e[t]}},d=Object.getPrototypeOf(Function),c="object"==typeof process&&process.env&&"true"===process.env.REFLECT_METADATA_USE_MAP_POLYFILL,h=c||"function"!=typeof Map||"function"!=typeof Map.prototype.entries?function(){var e={},t=[],s=function(){function e(e,t,s){this._index=0,this._keys=e,this._values=t,this._selector=s}return e.prototype["@@iterator"]=function(){return this},e.prototype[r]=function(){return this},e.prototype.next=function(){var e=this._index;if(e>=0&&e<this._keys.length){var s=this._selector(this._keys[e],this._values[e]);return e+1>=this._keys.length?(this._index=-1,this._keys=t,this._values=t):this._index++,{value:s,done:!1}}return{value:void 0,done:!0}},e.prototype.throw=function(e){throw this._index>=0&&(this._index=-1,this._keys=t,this._values=t),e},e.prototype.return=function(e){return this._index>=0&&(this._index=-1,this._keys=t,this._values=t),{value:e,done:!0}},e}();return function(){function t(){this._keys=[],this._values=[],this._cacheKey=e,this._cacheIndex=-2}return Object.defineProperty(t.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),t.prototype.has=function(e){return this._find(e,!1)>=0},t.prototype.get=function(e){var t=this._find(e,!1);return t>=0?this._values[t]:void 0},t.prototype.set=function(e,t){var s=this._find(e,!0);return this._values[s]=t,this},t.prototype.delete=function(t){var s=this._find(t,!1);if(s>=0){for(var o=this._keys.length,r=s+1;r<o;r++)this._keys[r-1]=this._keys[r],this._values[r-1]=this._values[r];return this._keys.length--,this._values.length--,t===this._cacheKey&&(this._cacheKey=e,this._cacheIndex=-2),!0}return!1},t.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=e,this._cacheIndex=-2},t.prototype.keys=function(){return new s(this._keys,this._values,o)},t.prototype.values=function(){return new s(this._keys,this._values,i)},t.prototype.entries=function(){return new s(this._keys,this._values,n)},t.prototype["@@iterator"]=function(){return this.entries()},t.prototype[r]=function(){return this.entries()},t.prototype._find=function(e,t){return this._cacheKey!==e&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=e)),this._cacheIndex<0&&t&&(this._cacheIndex=this._keys.length,this._keys.push(e),this._values.push(void 0)),this._cacheIndex},t}();function o(e,t){return e}function i(e,t){return t}function n(e,t){return[e,t]}}():Map,p=c||"function"!=typeof Set||"function"!=typeof Set.prototype.entries?function(){function e(){this._map=new h}return Object.defineProperty(e.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),e.prototype.has=function(e){return this._map.has(e)},e.prototype.add=function(e){return this._map.set(e,e),this},e.prototype.delete=function(e){return this._map.delete(e)},e.prototype.clear=function(){this._map.clear()},e.prototype.keys=function(){return this._map.keys()},e.prototype.values=function(){return this._map.values()},e.prototype.entries=function(){return this._map.entries()},e.prototype["@@iterator"]=function(){return this.keys()},e.prototype[r]=function(){return this.keys()},e}():Set,g=new(c||"function"!=typeof WeakMap?function(){var e=a.create(),s=o();return function(){function e(){this._key=o()}return e.prototype.has=function(e){var t=r(e,!1);return void 0!==t&&a.has(t,this._key)},e.prototype.get=function(e){var t=r(e,!1);return void 0!==t?a.get(t,this._key):void 0},e.prototype.set=function(e,t){return r(e,!0)[this._key]=t,this},e.prototype.delete=function(e){var t=r(e,!1);return void 0!==t&&delete t[this._key]},e.prototype.clear=function(){this._key=o()},e}();function o(){var t;do t="@@WeakMap@@"+function(){var e="function"==typeof Uint8Array?"undefined"!=typeof crypto?crypto.getRandomValues(new Uint8Array(16)):"undefined"!=typeof msCrypto?msCrypto.getRandomValues(new Uint8Array(16)):i(new Uint8Array(16),16):i(Array(16),16);e[6]=79&e[6]|64,e[8]=191&e[8]|128;for(var t="",s=0;s<16;++s){var o=e[s];(4===s||6===s||8===s)&&(t+="-"),o<16&&(t+="0"),t+=o.toString(16).toLowerCase()}return t}();while(a.has(e,t));return e[t]=!0,t}function r(e,o){if(!t.call(e,s)){if(!o)return;Object.defineProperty(e,s,{value:a.create()})}return e[s]}function i(e,t){for(var s=0;s<t;++s)e[s]=255*Math.random()|0;return e}}():WeakMap);function u(e,t,s){var o=g.get(e);if(x(o)){if(!s)return;o=new h,g.set(e,o)}var r=o.get(t);if(x(r)){if(!s)return;r=new h,o.set(t,r)}return r}function f(e,t,s){var o=u(t,s,!1);return!x(o)&&!!o.has(e)}function b(e,t,s){var o=u(t,s,!1);if(!x(o))return o.get(e)}function y(e,t,s,o){u(s,o,!0).set(e,t)}function v(e,t){var s=[],o=u(e,t,!1);if(x(o))return s;for(var i=function(e){var t=C(e,r);if(!S(t))throw TypeError();var s=t.call(e);if(!k(s))throw TypeError();return s}(o.keys()),n=0;;){var l=function(e){var t=e.next();return!t.done&&t}(i);if(!l)return s.length=n,s;var a=l.value;try{s[n]=a}catch(e){try{!function(e){var t=e.return;t&&t.call(e)}(i)}finally{throw e}}n++}}function m(e){if(null===e)return 1;switch(typeof e){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return null===e?1:6;default:return 6}}function x(e){return void 0===e}function w(e){return null===e}function k(e){return"object"==typeof e?null!==e:"function"==typeof e}function _(e){var t=function(e,t){switch(m(e)){case 0:case 1:case 2:case 3:case 4:case 5:return e}var s="string",r=C(e,o);if(void 0!==r){var i=r.call(e,s);if(k(i))throw TypeError();return i}return function(e,t){if("string"===t){var s=e.toString;if(S(s)){var o=s.call(e);if(!k(o))return o}var r=e.valueOf;if(S(r)){var o=r.call(e);if(!k(o))return o}}else{var r=e.valueOf;if(S(r)){var o=r.call(e);if(!k(o))return o}var i=e.toString;if(S(i)){var o=i.call(e);if(!k(o))return o}}throw TypeError()}(e,s)}(e,0);return"symbol"==typeof t?t:""+t}function $(e){return Array.isArray?Array.isArray(e):e instanceof Object?e instanceof Array:"[object Array]"===Object.prototype.toString.call(e)}function S(e){return"function"==typeof e}function E(e){return"function"==typeof e}function C(e,t){var s=e[t];if(null!=s){if(!S(s))throw TypeError();return s}}function A(e){var t=Object.getPrototypeOf(e);if("function"!=typeof e||e===d||t!==d)return t;var s=e.prototype,o=s&&Object.getPrototypeOf(s);if(null==o||o===Object.prototype)return t;var r=o.constructor;return"function"!=typeof r||r===e?t:r}function T(e){return e.__=void 0,delete e.__,e}e("decorate",function(e,t,s,o){if(x(s)){if(!$(e)||!E(t))throw TypeError();return function(e,t){for(var s=e.length-1;s>=0;--s){var o=(0,e[s])(t);if(!x(o)&&!w(o)){if(!E(o))throw TypeError();t=o}}return t}(e,t)}if(!$(e)||!k(t)||!k(o)&&!x(o)&&!w(o))throw TypeError();return w(o)&&(o=void 0),function(e,t,s,o){for(var r=e.length-1;r>=0;--r){var i=(0,e[r])(t,s,o);if(!x(i)&&!w(i)){if(!k(i))throw TypeError();o=i}}return o}(e,t,s=_(s),o)}),e("metadata",function(e,t){return function(s,o){if(!k(s)||!x(o)&&!function(e){switch(m(e)){case 3:case 4:return!0;default:return!1}}(o))throw TypeError();y(e,t,s,o)}}),e("defineMetadata",function(e,t,s,o){if(!k(s))throw TypeError();return x(o)||(o=_(o)),y(e,t,s,o)}),e("hasMetadata",function(e,t,s){if(!k(t))throw TypeError();return x(s)||(s=_(s)),function e(t,s,o){if(f(t,s,o))return!0;var r=A(s);return!w(r)&&e(t,r,o)}(e,t,s)}),e("hasOwnMetadata",function(e,t,s){if(!k(t))throw TypeError();return x(s)||(s=_(s)),f(e,t,s)}),e("getMetadata",function(e,t,s){if(!k(t))throw TypeError();return x(s)||(s=_(s)),function e(t,s,o){if(f(t,s,o))return b(t,s,o);var r=A(s);if(!w(r))return e(t,r,o)}(e,t,s)}),e("getOwnMetadata",function(e,t,s){if(!k(t))throw TypeError();return x(s)||(s=_(s)),b(e,t,s)}),e("getMetadataKeys",function(e,t){if(!k(e))throw TypeError();return x(t)||(t=_(t)),function e(t,s){var o=v(t,s),r=A(t);if(null===r)return o;var i=e(r,s);if(i.length<=0)return o;if(o.length<=0)return i;for(var n=new p,l=[],a=0;a<o.length;a++){var d=o[a],c=n.has(d);c||(n.add(d),l.push(d))}for(var h=0;h<i.length;h++){var d=i[h],c=n.has(d);c||(n.add(d),l.push(d))}return l}(e,t)}),e("getOwnMetadataKeys",function(e,t){if(!k(e))throw TypeError();return x(t)||(t=_(t)),v(e,t)}),e("deleteMetadata",function(e,t,s){if(!k(t))throw TypeError();x(s)||(s=_(s));var o=u(t,s,!1);if(x(o)||!o.delete(e))return!1;if(o.size>0)return!0;var r=g.get(t);return r.delete(s),r.size>0||(g.delete(t),!0)})})}(o||(o={}));var rQ=class extends rI{constructor(){super(),this.gdsElementName="",this._isUsingTransitionalStyles=!1,this._dynamicStylesController=new rm(this)}connectedCallback(){var e;super.connectedCallback(),this.gdsElementName=(e=this.tagName.toLowerCase(),[...rG.entries()].find(([,t])=>t===e)?.[0]||this.gdsElementName),this.setAttribute("gds-element",this.gdsElementName)}};s9([oF()],rQ.prototype,"_isUsingTransitionalStyles",2);var r0=class e{static get instance(){return globalThis.__gdsTransitionalStyles?.[rq]||(globalThis.__gdsTransitionalStyles={...globalThis.__gdsTransitionalStyles,[rq]:new e}),globalThis.__gdsTransitionalStyles[rq]}#n=new Map;#l=new Map;#e=!rx();apply(e,t){if(!e.shadowRoot)return;let s=this.#n.get(t);s&&(this.#l.set(t,e),this.applyToElement(t,s))}applyToElement(e,t){let s=this.#l.get(e);s&&s.shadowRoot&&(s._dynamicStylesController.clearAll(),s._dynamicStylesController.inject("t-styles",rE(t)),s._isUsingTransitionalStyles=!0)}register(e,t){let s=t;this.#e&&(s=`@layer reset {
        *:not(style, [gds-element]) {
          all: revert;
        }
      }
      ${t}`),this.#n.set(e,s),this.applyToElement(e,s)}},r1=rC`
  @layer base, reset;

  @layer base {
    :host(:not(:last-child)) {
      border-bottom: 1px solid var(--gds-sys-color-border-stroke-variant2);
    }

    :host div {
      display: flex;
      align-items: center;
      user-select: none;
      padding-inline: var(--gds-space-m);
      padding-block: var(--gds-space-m);
      cursor: pointer;
      font-size: var(--gds-text-size-label-input-large);
      font-weight: var(--gds-text-weight-regular);
      line-height: var(--gds-text-line-height-label-input-large);
      gap: 1ch;
      max-width: 100%;
      box-sizing: border-box;
    }

    :host([highlighted]) div {
      background-color: var(--gds-sys-color-container-container-shade1);
      color: var(--gds-sys-color-content-content-inverse);
    }

    :host(:hover:not([highlighted])) div {
      background-color: var(--gds-sys-color-container-container-dim1);
    }

    :host(:focus-visible) {
      outline: auto;
      outline-offset: -6px;
      outline-color: currentColor;
      outline-width: 2px;
    }

    :host([aria-hidden='true']) div {
      display: none;
    }

    .checkbox {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 1lh;
      width: auto;
      box-sizing: border-box;
      position: relative;
      aspect-ratio: 1/1;
      border-radius: var(--gds-space-2xs);
      border: var(--gds-space-3xs) solid currentColor;
      padding: var(--gds-space-3xs);

      &.checked {
        background-color: currentColor;

        gds-icon-checkmark {
          &::part(icon) {
            color: var(--gds-sys-color-base-white);
            stroke-width: var(--gds-space-2xs);
          }
        }
      }
    }
  }
`;function r2(e,t){let s={waitUntilFirstUpdate:!1,...t};return(t,o,r)=>{let{update:i}=t,n=Array.isArray(e)?e:[e];t.update=function(e){n.forEach(t=>{if(e.has(t)){let o=e.get(t),i=this[t];o!==i&&(!s.waitUntilFirstUpdate||this.hasUpdated)&&r.value?.call(this,o,i)}}),i.call(this,e)}}}var r3=e=>{class t extends e{constructor(){super(...arguments),this.onblur=e=>{this.setAttribute("tabindex","-1"),this.dispatchEvent(new FocusEvent("gds-blur",{bubbles:!0,composed:!0,relatedTarget:e.relatedTarget}))},this.onfocus=e=>{this.dispatchEvent(new FocusEvent("gds-focus",{bubbles:!0,composed:!0,relatedTarget:e.relatedTarget}))}}focus(e){this.setAttribute("tabindex","0"),super.focus(e)}}return t},r5=`/**
 * Do not edit directly
 * Generated on Mon, 21 Oct 2024 17:20:56 GMT
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
  --gds-color-level-l1-background-primary: #ffffff;
  --gds-color-level-l1-background-tertiary: #1b1b1b;
  --gds-color-level-l1-background-secondary: #eeeeee;
  --gds-color-level-l1-content-positive: #35723d;
  --gds-color-level-l1-content-negative: #a63e2a;
  --gds-color-level-l1-content-primary: #1b1b1b;
  --gds-color-level-l1-content-secondary: #5e5e5e;
  --gds-color-level-l1-content-tertiary: #ffffff;
  --gds-color-level-l2-background-primary: #f3f3f3;
  --gds-color-level-l2-background-secondary: #ffffff;
  --gds-color-level-l2-background-tertiary: #242424;
  --gds-color-level-l2-background-positive: #ecf6ed;
  --gds-color-level-l2-background-negative: #fcecea;
  --gds-color-level-l2-background-notice: #eaf0f7;
  --gds-color-level-l2-background-warning: #fcecbc;
  --gds-color-level-l2-background-information: #e2e2e2;
  --gds-color-level-l2-background-copper-01: #f2efeb;
  --gds-color-level-l2-background-copper-02: #332a18;
  --gds-color-level-l2-background-purple-01: #f3eff7;
  --gds-color-level-l2-background-purple-02: #372b40;
  --gds-color-level-l2-background-green-01: #ecf6ed;
  --gds-color-level-l2-background-green-02: #1d3f22;
  --gds-color-level-l2-background-blue-01: #eaf0f7;
  --gds-color-level-l2-background-blue-02: #152c41;
  --gds-color-level-l2-content-primary: #1b1b1b;
  --gds-color-level-l2-content-secondary: #5e5e5e;
  --gds-color-level-l2-content-tertiary: #ffffff;
  --gds-color-level-l2-content-positive: #35723d;
  --gds-color-level-l2-content-negative: #a63e2a;
  --gds-color-level-l2-content-warning: #65581e;
  --gds-color-level-l2-content-notice: #005fac;
  --gds-color-level-l2-content-infomation: #1b1b1b;
  --gds-color-level-l2-content-copper-01: #1b1b1b;
  --gds-color-level-l2-content-copper-02: #ffffff;
  --gds-color-level-l2-content-purple-01: #1b1b1b;
  --gds-color-level-l2-content-purple-02: #ffffff;
  --gds-color-level-l2-content-green-01: #1b1b1b;
  --gds-color-level-l2-content-green-02: #ffffff;
  --gds-color-level-l2-content-blue-01: #1b1b1b;
  --gds-color-level-l2-content-blue-02: #ffffff;
  --gds-color-level-l2-border-primary: #d7d7d7;
  --gds-color-level-l2-border-secondary: #6f6f6f;
  --gds-color-level-l2-border-tertiary: #f9f9f9;
  --gds-color-level-l2-border-quarternary: #1b1b1b;
  --gds-color-level-l2-border-inversed: #ffffff;
  --gds-color-level-l3-background-primary: #1b1b1b;
  --gds-color-level-l3-background-secondary: #e2e2e2;
  --gds-color-level-l3-background-tertiary: #d7d7d7;
  --gds-color-level-l3-background-quarternary: #ffffff;
  --gds-color-level-l3-background-positive: #35723d;
  --gds-color-level-l3-background-positive-secondary: #d7edd9;
  --gds-color-level-l3-background-positive-badge: #d7edd9;
  --gds-color-level-l3-background-negative: #a63e2a;
  --gds-color-level-l3-background-negative-secondary: #fcecea;
  --gds-color-level-l3-background-negative-badge: #f8d6d3;
  --gds-color-level-l3-background-notice: #005fac;
  --gds-color-level-l3-background-notice-secondary: #d3dfef;
  --gds-color-level-l3-background-notice-badge: #d3dfef;
  --gds-color-level-l3-background-warning: #65581e;
  --gds-color-level-l3-background-warning-secondary: #fadf7b;
  --gds-color-level-l3-background-warning-badge: #fadf7b;
  --gds-color-level-l3-background-information: #1b1b1b;
  --gds-color-level-l3-background-information-secondary: #d7d7d7;
  --gds-color-level-l3-background-information-badge: #d7d7d7;
  --gds-color-level-l3-background-buy: #2e6290;
  --gds-color-level-l3-background-copper-01: #e4ded5;
  --gds-color-level-l3-background-copper-02: #42361f;
  --gds-color-level-l3-background-purple-01: #e7deee;
  --gds-color-level-l3-background-purple-02: #473752;
  --gds-color-level-l3-background-green-01: #d7edd9;
  --gds-color-level-l3-background-green-02: #25512b;
  --gds-color-level-l3-background-blue-01: #d3dfef;
  --gds-color-level-l3-background-blue-02: #1a3853;
  --gds-color-level-l3-background-disabled: #f9f9f9;
  --gds-color-level-l3-background-disabled-secondary: #f3f3f3;
  --gds-color-level-l3-content-primary: #ffffff;
  --gds-color-level-l3-content-secondary: #5e5e5e;
  --gds-color-level-l3-content-tertiary: #1b1b1b;
  --gds-color-level-l3-content-notice: #005fac;
  --gds-color-level-l3-content-warning: #65581e;
  --gds-color-level-l3-content-information: #1b1b1b;
  --gds-color-level-l3-content-buy: #ffffff;
  --gds-color-level-l3-content-copper-01: #1b1b1b;
  --gds-color-level-l3-content-copper-02: #ffffff;
  --gds-color-level-l3-content-purple-01: #1b1b1b;
  --gds-color-level-l3-content-purple-02: #ffffff;
  --gds-color-level-l3-content-green-01: #1b1b1b;
  --gds-color-level-l3-content-green-02: #ffffff;
  --gds-color-level-l3-content-blue-01: #1b1b1b;
  --gds-color-level-l3-content-blue-02: #ffffff;
  --gds-color-level-l3-content-disabled: #ababab;
  --gds-color-level-l3-content-positive: #35723d;
  --gds-color-level-l3-content-negative: #a63e2a;
  --gds-color-level-l3-border-primary: #1b1b1b;
  --gds-color-level-l3-border-secondary: #6f6f6f;
  --gds-color-level-l3-border-tertiary: #d7d7d7;
  --gds-color-level-l3-border-negative: #a63e2a;
  --gds-color-level-l3-states-dark-hover: #ffffff NaN%;
  --gds-color-level-l3-states-dark-pressed: #ffffff NaN%;
  --gds-color-level-l3-states-light-hover: #1b1b1b NaN%;
  --gds-color-level-l3-states-light-pressed: #1b1b1b NaN%;
  --gds-color-level-l3-states-positive-hover: #35723d NaN%;
  --gds-color-level-l3-states-positive-pressed: #35723d NaN%;
  --gds-color-level-l3-states-negative-hover: #a63e2a NaN%;
  --gds-color-level-l3-states-negative-pressed: #a63e2a NaN%;
}
`,r7=`/**
 * Do not edit directly
 * Generated on Mon, 21 Oct 2024 17:20:56 GMT
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
`,r6=`/**
 * Do not edit directly
 * Generated on Mon, 21 Oct 2024 17:20:56 GMT
 */

:host {
  --gds-text-weight-bold: 700;
  --gds-text-weight-medium: 500;
  --gds-text-weight-book: 450;
  --gds-text-weight-regular: 400;
  --gds-text-weight-light: 300;
  --gds-text-size-preamble-xs: 16px;
  --gds-text-size-preamble-s: 18px;
  --gds-text-size-preamble-m: 20px;
  --gds-text-size-preamble-l: 24px;
  --gds-text-size-preamble-xl: 28px;
  --gds-text-size-preamble-2xl: 32px;
  --gds-text-size-display-s: 32px;
  --gds-text-size-display-m: 36px;
  --gds-text-size-display-l: 48px;
  --gds-text-size-display-xl: 64px;
  --gds-text-size-display-2xl: 82px;
  --gds-text-size-body-s: 14px;
  --gds-text-size-body-m: 16px;
  --gds-text-size-body-l: 20px;
  --gds-text-size-detail-xs: 12px;
  --gds-text-size-detail-s: 14px;
  --gds-text-size-detail-m: 16px;
  --gds-text-size-heading-2xl: 14px;
  --gds-text-size-heading-xs: 16px;
  --gds-text-size-heading-s: 20px;
  --gds-text-size-heading-m: 24px;
  --gds-text-size-heading-l: 28px;
  --gds-text-size-heading-xl: 32px;
  --gds-text-line-height-preamble-xs: 24px;
  --gds-text-line-height-preamble-s: 26px;
  --gds-text-line-height-preamble-m: 28px;
  --gds-text-line-height-preamble-l: 32px;
  --gds-text-line-height-preamble-xl: 36px;
  --gds-text-line-height-preamble-2xl: 40px;
  --gds-text-line-height-display-s: 40px;
  --gds-text-line-height-display-m: 44px;
  --gds-text-line-height-display-l: 56px;
  --gds-text-line-height-display-xl: 72px;
  --gds-text-line-height-display-2xl: 90px;
  --gds-text-line-height-body-s: 20px;
  --gds-text-line-height-body-m: 24px;
  --gds-text-line-height-body-l: 26px;
  --gds-text-line-height-detail-xs: 16px;
  --gds-text-line-height-detail-s: 18px;
  --gds-text-line-height-detail-m: 20px;
  --gds-text-line-height-heading-2xs: 20px;
  --gds-text-line-height-heading-xs: 24px;
  --gds-text-line-height-heading-s: 28px;
  --gds-text-line-height-heading-m: 32px;
  --gds-text-line-height-heading-l: 40px;
  --gds-text-line-height-heading-xl: 44px;
}
`,r4=`/**
 * Do not edit directly
 * Generated on Mon, 21 Oct 2024 17:20:56 GMT
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
`,r8=`/**
 * Do not edit directly
 * Generated on Mon, 21 Oct 2024 17:20:56 GMT
 */

:host {
--gds-shadow-xs: 0px 0px 1px 0px rgba(0, 0, 0, 0.1), 0px 0px 1px 0px rgba(0, 0, 0, 0.1);
--gds-shadow-s: 0px 1px 3px 0px rgba(0, 0, 0, 0.1), 0px 1px 2px 0px rgba(0, 0, 0, 0.06);
--gds-shadow-m: 0px 4px 8px -2px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.06);
--gds-shadow-l: 0px 12px 16px -4px rgba(0, 0, 0, 0.08), 0px 4px 6px -2px rgba(0, 0, 0, 0.03);
--gds-shadow-xl: 0px 20px 24px -4px rgba(0, 0, 0, 0.08), 0px 8px 8px -4px rgba(0, 0, 0, 0.03);
}
`,r9=`/**
 * Do not edit directly
 * Generated on Mon, 21 Oct 2024 17:20:56 GMT
 */

color-scheme: light;
  --gds-color-l1-background-primary: #ffffff;
  --gds-color-l1-background-tertiary: #1b1b1b;
  --gds-color-l1-background-secondary: #eeeeee;
  --gds-color-l1-content-positive: #35723d;
  --gds-color-l1-content-negative: #a63e2a;
  --gds-color-l1-content-primary: #1b1b1b;
  --gds-color-l1-content-secondary: #5e5e5e;
  --gds-color-l1-content-tertiary: #ffffff;
  --gds-color-l2-background-primary: #f3f3f3;
  --gds-color-l2-background-secondary: #ffffff;
  --gds-color-l2-background-tertiary: #242424;
  --gds-color-l2-background-positive: #ecf6ed;
  --gds-color-l2-background-negative: #fcecea;
  --gds-color-l2-background-notice: #eaf0f7;
  --gds-color-l2-background-warning: #fcecbc;
  --gds-color-l2-background-information: #e2e2e2;
  --gds-color-l2-background-copper-01: #f2efeb;
  --gds-color-l2-background-copper-02: #332a18;
  --gds-color-l2-background-purple-01: #f3eff7;
  --gds-color-l2-background-purple-02: #372b40;
  --gds-color-l2-background-green-01: #ecf6ed;
  --gds-color-l2-background-green-02: #1d3f22;
  --gds-color-l2-background-blue-01: #eaf0f7;
  --gds-color-l2-background-blue-02: #152c41;
  --gds-color-l2-content-primary: #1b1b1b;
  --gds-color-l2-content-secondary: #5e5e5e;
  --gds-color-l2-content-tertiary: #ffffff;
  --gds-color-l2-content-positive: #35723d;
  --gds-color-l2-content-negative: #a63e2a;
  --gds-color-l2-content-warning: #65581e;
  --gds-color-l2-content-notice: #005fac;
  --gds-color-l2-content-infomation: #1b1b1b;
  --gds-color-l2-content-copper-01: #1b1b1b;
  --gds-color-l2-content-copper-02: #ffffff;
  --gds-color-l2-content-purple-01: #1b1b1b;
  --gds-color-l2-content-purple-02: #ffffff;
  --gds-color-l2-content-green-01: #1b1b1b;
  --gds-color-l2-content-green-02: #ffffff;
  --gds-color-l2-content-blue-01: #1b1b1b;
  --gds-color-l2-content-blue-02: #ffffff;
  --gds-color-l2-border-primary: #d7d7d7;
  --gds-color-l2-border-secondary: #6f6f6f;
  --gds-color-l2-border-tertiary: #f9f9f9;
  --gds-color-l2-border-quarternary: #1b1b1b;
  --gds-color-l2-border-inversed: #ffffff;
  --gds-color-l3-background-primary: #1b1b1b;
  --gds-color-l3-background-secondary: #e2e2e2;
  --gds-color-l3-background-tertiary: #d7d7d7;
  --gds-color-l3-background-quarternary: #ffffff;
  --gds-color-l3-background-positive: #35723d;
  --gds-color-l3-background-positive-secondary: #d7edd9;
  --gds-color-l3-background-positive-badge: #d7edd9;
  --gds-color-l3-background-negative: #a63e2a;
  --gds-color-l3-background-negative-secondary: #fcecea;
  --gds-color-l3-background-negative-badge: #f8d6d3;
  --gds-color-l3-background-notice: #005fac;
  --gds-color-l3-background-notice-secondary: #d3dfef;
  --gds-color-l3-background-notice-badge: #d3dfef;
  --gds-color-l3-background-warning: #65581e;
  --gds-color-l3-background-warning-secondary: #fadf7b;
  --gds-color-l3-background-warning-badge: #fadf7b;
  --gds-color-l3-background-information: #1b1b1b;
  --gds-color-l3-background-information-secondary: #d7d7d7;
  --gds-color-l3-background-information-badge: #d7d7d7;
  --gds-color-l3-background-buy: #2e6290;
  --gds-color-l3-background-copper-01: #e4ded5;
  --gds-color-l3-background-copper-02: #42361f;
  --gds-color-l3-background-purple-01: #e7deee;
  --gds-color-l3-background-purple-02: #473752;
  --gds-color-l3-background-green-01: #d7edd9;
  --gds-color-l3-background-green-02: #25512b;
  --gds-color-l3-background-blue-01: #d3dfef;
  --gds-color-l3-background-blue-02: #1a3853;
  --gds-color-l3-background-disabled: #f9f9f9;
  --gds-color-l3-background-disabled-secondary: #f3f3f3;
  --gds-color-l3-content-primary: #ffffff;
  --gds-color-l3-content-secondary: #5e5e5e;
  --gds-color-l3-content-tertiary: #1b1b1b;
  --gds-color-l3-content-notice: #005fac;
  --gds-color-l3-content-warning: #65581e;
  --gds-color-l3-content-information: #1b1b1b;
  --gds-color-l3-content-buy: #ffffff;
  --gds-color-l3-content-copper-01: #1b1b1b;
  --gds-color-l3-content-copper-02: #ffffff;
  --gds-color-l3-content-purple-01: #1b1b1b;
  --gds-color-l3-content-purple-02: #ffffff;
  --gds-color-l3-content-green-01: #1b1b1b;
  --gds-color-l3-content-green-02: #ffffff;
  --gds-color-l3-content-blue-01: #1b1b1b;
  --gds-color-l3-content-blue-02: #ffffff;
  --gds-color-l3-content-disabled: #ababab;
  --gds-color-l3-content-positive: #35723d;
  --gds-color-l3-content-negative: #a63e2a;
  --gds-color-l3-border-primary: #1b1b1b;
  --gds-color-l3-border-secondary: #6f6f6f;
  --gds-color-l3-border-tertiary: #d7d7d7;
  --gds-color-l3-border-negative: #a63e2a;
  --gds-color-l3-states-dark-hover: #ffffff 10%;
  --gds-color-l3-states-dark-pressed: #ffffff 20%;
  --gds-color-l3-states-light-hover: #1b1b1b 10%;
  --gds-color-l3-states-light-pressed: #1b1b1b 20%;
  --gds-color-l3-states-positive-hover: #35723d 10%;
  --gds-color-l3-states-positive-pressed: #35723d 20%;
  --gds-color-l3-states-negative-hover: #a63e2a 10%;
  --gds-color-l3-states-negative-pressed: #a63e2a 20%;
`,ie=`/**
 * Do not edit directly
 * Generated on Mon, 21 Oct 2024 17:20:56 GMT
 */

color-scheme: dark;
  --gds-color-l1-background-primary: #0e0e0e;
  --gds-color-l1-background-tertiary: #d7d7d7;
  --gds-color-l1-background-secondary: #131313;
  --gds-color-l1-content-positive: #54b561;
  --gds-color-l1-content-negative: #a63e2a;
  --gds-color-l1-content-primary: #d7d7d7;
  --gds-color-l1-content-secondary: #ababab;
  --gds-color-l1-content-tertiary: #1b1b1b;
  --gds-color-l2-background-primary: #242424;
  --gds-color-l2-background-secondary: #242424;
  --gds-color-l2-background-tertiary: #d7d7d7;
  --gds-color-l2-background-positive: #1d3f22;
  --gds-color-l2-background-negative: #4a1c13;
  --gds-color-l2-background-notice: #152c41;
  --gds-color-l2-background-warning: #4c3212;
  --gds-color-l2-background-information: #353535;
  --gds-color-l2-background-copper-01: #f2efeb;
  --gds-color-l2-background-copper-02: #332a18;
  --gds-color-l2-background-purple-01: #f3eff7;
  --gds-color-l2-background-purple-02: #372b40;
  --gds-color-l2-background-green-01: #ecf6ed;
  --gds-color-l2-background-green-02: #1d3f22;
  --gds-color-l2-background-blue-01: #eaf0f7;
  --gds-color-l2-background-blue-02: #152c41;
  --gds-color-l2-content-primary: #d7d7d7;
  --gds-color-l2-content-secondary: #ababab;
  --gds-color-l2-content-tertiary: #1b1b1b;
  --gds-color-l2-content-positive: #54b561;
  --gds-color-l2-content-negative: #ee8375;
  --gds-color-l2-content-warning: #f3b274;
  --gds-color-l2-content-notice: #78a3d5;
  --gds-color-l2-content-infomation: #d7d7d7;
  --gds-color-l2-content-copper-01: #1b1b1b;
  --gds-color-l2-content-copper-02: #ffffff;
  --gds-color-l2-content-purple-01: #1b1b1b;
  --gds-color-l2-content-purple-02: #ffffff;
  --gds-color-l2-content-green-01: #1b1b1b;
  --gds-color-l2-content-green-02: #ffffff;
  --gds-color-l2-content-blue-01: #1b1b1b;
  --gds-color-l2-content-blue-02: #ffffff;
  --gds-color-l2-border-primary: #353535;
  --gds-color-l2-border-secondary: #5e5e5e;
  --gds-color-l2-border-tertiary: #2c2c2c;
  --gds-color-l2-border-quarternary: #d7d7d7;
  --gds-color-l2-border-inversed: #1b1b1b;
  --gds-color-l3-background-primary: #d7d7d7;
  --gds-color-l3-background-secondary: #353535;
  --gds-color-l3-background-tertiary: #424242;
  --gds-color-l3-background-quarternary: #0e0e0e;
  --gds-color-l3-background-positive: #54b561;
  --gds-color-l3-background-positive-secondary: #25512b;
  --gds-color-l3-background-positive-badge: #306938;
  --gds-color-l3-background-negative: #c04831;
  --gds-color-l3-background-negative-secondary: #602418;
  --gds-color-l3-background-negative-badge: #4A1C13;
  --gds-color-l3-background-notice: #78a3d5;
  --gds-color-l3-background-notice-secondary: #1A3853;
  --gds-color-l3-background-notice-badge: #214769;
  --gds-color-l3-background-warning: #f3b274;
  --gds-color-l3-background-warning-secondary: #624017;
  --gds-color-l3-background-warning-badge: #744C1B;
  --gds-color-l3-background-information: #d7d7d7;
  --gds-color-l3-background-information-secondary: #424242;
  --gds-color-l3-background-information-badge: #616161;
  --gds-color-l3-background-buy: #3571a6;
  --gds-color-l3-background-copper-01: #e4ded5;
  --gds-color-l3-background-copper-02: #42361f;
  --gds-color-l3-background-purple-01: #e7deee;
  --gds-color-l3-background-purple-02: #473752;
  --gds-color-l3-background-green-01: #d7edd9;
  --gds-color-l3-background-green-02: #25512b;
  --gds-color-l3-background-blue-01: #d3dfef;
  --gds-color-l3-background-blue-02: #1a3853;
  --gds-color-l3-background-disabled: #181818;
  --gds-color-l3-background-disabled-secondary: #1b1b1b;
  --gds-color-l3-content-primary: #1b1b1b;
  --gds-color-l3-content-secondary: #ababab;
  --gds-color-l3-content-tertiary: #d7d7d7;
  --gds-color-l3-content-notice: #78a3d5;
  --gds-color-l3-content-warning: #f3b274;
  --gds-color-l3-content-information: #d7d7d7;
  --gds-color-l3-content-buy: #ffffff;
  --gds-color-l3-content-copper-01: #1b1b1b;
  --gds-color-l3-content-copper-02: #ffffff;
  --gds-color-l3-content-purple-01: #1b1b1b;
  --gds-color-l3-content-purple-02: #ffffff;
  --gds-color-l3-content-green-01: #1b1b1b;
  --gds-color-l3-content-green-02: #ffffff;
  --gds-color-l3-content-blue-01: #1b1b1b;
  --gds-color-l3-content-blue-02: #ffffff;
  --gds-color-l3-content-disabled: #5e5e5e;
  --gds-color-l3-content-positive: #54b561;
  --gds-color-l3-content-negative: #ee8375;
  --gds-color-l3-border-primary: #d7d7d7;
  --gds-color-l3-border-secondary: #ababab;
  --gds-color-l3-border-tertiary: #1b1b1b;
  --gds-color-l3-border-negative: #ee8375;
  --gds-color-l3-states-dark-hover: #ffffff 10%;
  --gds-color-l3-states-dark-pressed: #ffffff 20%;
  --gds-color-l3-states-light-hover: #d7d7d7 10%;
  --gds-color-l3-states-light-pressed: #d7d7d7 20%;
  --gds-color-l3-states-positive-hover: #54b561 10%;
  --gds-color-l3-states-positive-pressed: #54b561 20%;
  --gds-color-l3-states-negative-hover: #ee8375 10%;
  --gds-color-l3-states-negative-pressed: #ee8375 20%;
`,it=[rE(`/**
 * Do not edit directly
 * Generated on Mon, 21 Oct 2024 17:20:56 GMT
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
`),rE(r5),rE(r7),rE(r6),rE(r4),rE(r8)],is=new CSSStyleSheet;is.replaceSync(`:root { ${r9} }`),document.adoptedStyleSheets=[...document.adoptedStyleSheets||[],is];var io=class extends ry{constructor(e){if(super(e),this.it=o9,e.type!==rf.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===o9||null==e)return this._t=void 0,this.it=e;if(e===o8)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};io.directiveName="unsafeHTML",io.resultType=1;var ir=rb(io),ii=rC`
  @layer icon;

  @layer icon {
    :host {
      display: contents;
    }
  }
`,il=class extends rQ{constructor(){super(...arguments),this.solid=!1,this.box=!1,this.label=""}static{this.styles=[ii]}render(){let e="brand-seb"===this.constructor._name,t=e?"55":void 0!==this.width?this.width.toString():void 0,s=e?"24":void 0!==this.height?this.height.toString():"1lh",o=e?"0 0 55 24":this.box||"0 0 24 24",r=`<svg
      ${t?`width="${t}"`:""}
      height="${s}"
      viewBox="${o}"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ${this.label?`aria-label="${this.label}"`:`aria-label="${this.constructor._name}"`}
      role="graphics-symbol"
      part="icon" 
    >
      ${this.solid?this.constructor._solidSVG:this.constructor._regularSVG}
    </svg>`;return this.stroke&&(r=r.replace(/<(path|rect|circle|ellipse|line|polyline|polygon)/g,`<$1 stroke-width="${this.stroke}"`)),o7`${ir(r)}`}};s9([oD({type:Number})],il.prototype,"width",2),s9([oD({type:Number})],il.prototype,"height",2),s9([oD({type:Boolean})],il.prototype,"solid",2),s9([oD({type:Number})],il.prototype,"stroke",2),s9([oD({type:String})],il.prototype,"box",2),s9([oD({type:String})],il.prototype,"label",2);var ia=class extends il{};ia._regularSVG='<path d="M2.75 15.0938L9 20.25L21.25 3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',ia._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M21.7426 2.99454C22.2979 3.40464 22.4157 4.18729 22.0056 4.74263L10.0056 20.9926C9.80433 21.2652 9.50107 21.4443 9.16524 21.4891C8.82942 21.5339 8.4898 21.4404 8.22417 21.2301L2.22417 16.4801C1.6829 16.0516 1.59149 15.2655 2.01999 14.7242C2.4485 14.1829 3.23466 14.0915 3.77593 14.52L8.76241 18.4677L19.9945 3.25753C20.4046 2.70218 21.1873 2.58444 21.7426 2.99454Z" fill="currentColor"/>',ia._name="checkmark",ia=s9([rZ("gds-icon-checkmark")],ia);var id=class extends r3(rQ){constructor(){super(),os(this,i),os(this,r,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",oi(this,i,n)),this.addEventListener("keydown",e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),oi(this,i,n).call(this,e))})}get hidden(){return ot(this,r)}set hidden(e){this.isPlaceholder||(oo(this,r,"true"===e||!0===e),this.setAttribute("aria-hidden",e.toString()))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.isPlaceholder&&(oo(this,r,!0),this.setAttribute("aria-hidden","true")),this.updateComplete.then(()=>r0.instance.apply(this,"gds-option"))}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?(oo(this,r,!0),this.setAttribute("aria-hidden","true")):(oo(this,r,!1),this.setAttribute("aria-hidden","false"))}render(){let e=this.parentElement?.multiple,t=rJ`
      <span class="checkbox ${rv({checked:this.selected})}">
        ${this.selected?rJ`<gds-icon-checkmark stroke="4"></gds-icon-checkmark>`:""}
      </span>
    `;return e||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),rJ`<div>${oN(e,()=>t)} <slot></slot></div>`}};r=new WeakMap,i=new WeakSet,n=function(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}}))},id.styles=[it,r1],s9([oD()],id.prototype,"value",2),s9([oD({attribute:"aria-hidden",reflect:!0})],id.prototype,"hidden",1),s9([oD({attribute:"aria-selected",reflect:!0})],id.prototype,"selected",2),s9([oD({type:Boolean,reflect:!0})],id.prototype,"isPlaceholder",2),s9([r2("isplaceholder")],id.prototype,"_handlePlaceholderStatusChange",1),id=s9([rZ("gds-option")],id);var ic=rC`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      cursor: pointer;
      color: var(--gds-sys-color-primary-text);
      background-color: var(--gds-sys-color-container-container-dim1);
      font-size: var(--gds-text-size-label-input-medium);
      line-height: var(--gds-text-line-height-label-input-medium);
      padding-inline: var(--gds-space-m);
      padding-block: var(--gds-space-xs);
    }
  }
`,ih=class extends rQ{connectedCallback(){super.connectedCallback(),this.setAttribute("inert","true"),this.updateComplete.then(()=>r0.instance.apply(this,"gds-menu-heading"))}render(){return o7`<slot></slot>`}};ih.styles=ic,ih=s9([rZ("gds-menu-heading")],ih);var ip=class extends r3(rQ){constructor(){super(...arguments),os(this,l,()=>{this.dispatchEvent(new CustomEvent("gds-menu-item-click",{bubbles:!0,composed:!0}))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem"),this.addEventListener("keydown",e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),this.click())}),this.addEventListener("click",ot(this,l)),r0.instance.apply(this,"gds-option")}render(){return rJ`<div><slot></slot></div>`}};l=new WeakMap,ip.styles=[r1],ip=s9([rZ("gds-menu-item")],ip);var ig=Symbol.for(""),iu=e=>{if(e?.r===ig)return e?._$litStatic$},ib=e=>({_$litStatic$:e,r:ig}),iy=(e,...t)=>({_$litStatic$:t.reduce((t,s,o)=>t+(e=>{if(void 0!==e._$litStatic$)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(s)+e[o+1],e[0]),r:ig}),iv=new Map,im=e=>(t,...s)=>{let o,r;let i=s.length,n=[],l=[],a,d=0,c=!1;for(;d<i;){for(a=t[d];d<i&&void 0!==(o=iu(r=s[d]));)a+=o+t[++d],c=!0;d!==i&&l.push(r),n.push(a),d++}if(d===i&&n.push(t[i]),c){let e=n.join("$$lit$$");void 0===(t=iv.get(e))&&(n.raw=n,iv.set(e,t=n)),s=l}return e(t,...s)},ix=im(o7);im(o6),im(o4);var iw=e=>e??o9;function ik(e){e.updateComplete.then(()=>{let t=e.shadowRoot?.querySelectorAll("slot[gds-allow]");if(!t)return;for(let t of Array.from(e.childNodes))t.nodeType===Node.TEXT_NODE&&t.textContent?.trim()===""&&t.parentNode?.removeChild(t);let s=e=>{let t=[...e.getAttribute("gds-allow")?.split(" ")||[],"slot"];for(let s of Array.from(e.assignedNodes()))t.includes(s.nodeName.toLowerCase())||s.parentNode?.removeChild(s)};t.forEach(e=>{s(e),e.addEventListener("slotchange",()=>s(e))})})}var i_=rb(class extends ry{constructor(e){if(super(e),e.type!==rf.ELEMENT)throw Error("The `forwardAttributes` directive must be used in element bindings")}render(e){return o9}update(e,[t]){let s=e.element;Array.from((e.options?.host).attributes).forEach(e=>{t(e)&&s.setAttribute(e.name.replace("gds-",""),e.value)})}}),i$=`:host {
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
}`,iS=class extends rI{constructor(){super(...arguments),this.onmousedown=e=>{let t=e.target.getBoundingClientRect(),s=this._rippleEl;s&&(s.classList.remove("gds-ripple-effect"),this.style.setProperty("--gds-ripple-top",`${e.clientY-t.top}px`),this.style.setProperty("--gds-ripple-left",`${e.clientX-t.left}px`),setTimeout(()=>{s.classList.add("gds-ripple-effect")},20))}}render(){return o7`<div></div>`}};iS.styles=[it,rE(i$)],s9([oL("div")],iS.prototype,"_rippleEl",2),iS=s9([rZ("gds-ripple")],iS);var iE=`@layer tokens, core, a11y, ranks, sizes, variants, disabled;

@layer a11y {
  @media (prefers-reduced-motion: reduce) {
    .button {
      transition: none;
    }
  }
}

@layer core {
  :host {
    display: inline-block;
  }

  .button {
    --_block-size: var(--gds-space-3xl);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border: none;
    cursor: pointer;
    block-size: var(--_block-size);
    background-color: var(--gds-color-l3-background-primary);
    color: var(--gds-color-l3-content-primary);
    border-radius: var(--gds-space-max);
    font-family: inherit;
    font-size: var(--gds-text-size-detail-m);
    line-height: var(--gds-text-line-height-detail-m);
    font-weight: var(--gds-text-weight-regular);
    gap: var(--gds-space-s);
    outline-color: transparent;
    outline-offset: var(--gds-space-3xs);
    outline-style: solid;
    outline-width: var(--gds-space-3xs);
    padding-block: var(--gds-space-s);
    padding-inline: var(--gds-space-l);
    position: relative;
    text-decoration: none;
    transition-property: color, border-color;
    transition: all 0.4s;

    &:focus {
      outline-color: color-mix(in srgb, currentcolor, #000 100%);

      &:not(:focus-visible) {
        outline-color: transparent;
      }
    }

    &:hover {
      background-color: color-mix(
        in srgb,
        var(--gds-color-l3-background-primary),
        var(--gds-color-l3-states-dark-hover)
      );
    }

    &:active {
      background-color: color-mix(
        in srgb,
        var(--gds-color-l3-background-primary),
        var(--gds-color-l3-states-dark-pressed)
      );
    }

    &:not(.circle) slot:not([name]) {
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 20ch;
    }
  }
}

/* High specificity */
.button.circle {
  aspect-ratio: 1/1;
  padding: 0;
}

.button:disabled {
  pointer-events: none;
  background-color: var(--gds-color-l3-background-disabled);
  color: var(--gds-color-l3-content-disabled);
}

@layer ranks {
  :host([rank*='secondary']) .button {
    background-color: var(--gds-color-l3-background-secondary);
    color: var(--gds-color-l3-content-secondary);

    &:hover {
      background-color: color-mix(
        in srgb,
        var(--gds-color-l3-background-secondary),
        var(--gds-color-l3-states-light-hover)
      );
    }

    &:active {
      background-color: color-mix(
        in srgb,
        var(--gds-color-l3-background-secondary),
        var(--gds-color-l3-states-light-pressed)
      );
    }
  }

  :host([rank*='tertiary']) .button {
    background-color: transparent;
    color: var(--gds-color-l3-content-tertiary);

    &:hover {
      background-color: color-mix(
        in srgb,
        transparent,
        var(--gds-color-l3-states-light-hover)
      );
    }

    &:active {
      background-color: color-mix(
        in srgb,
        transparent,
        var(--gds-color-l3-states-light-pressed)
      );
    }
  }
}

@layer sizes {
  :host([size='xs']) .button {
    --_block-size: var(--gds-space-l);
    font-size: var(--gds-text-size-detail-s);
    line-height: var(--gds-text-line-height-detail-s);
    padding-inline: var(--gds-space-m);
  }

  :host([size='small']) .button {
    --_block-size: var(--gds-space-xl);
    font-size: var(--gds-text-size-detail-s);
    line-height: var(--gds-text-line-height-detail-s);
    padding-inline: var(--gds-space-m);
  }

  :host([size='medium']) .button {
    --_block-size: var(--gds-space-2xl);
    font-size: var(--gds-text-size-detail-m);
    line-height: var(--gds-text-line-height-detail-m);
  }
}

@layer variants {
  .positive {
    background-color: var(--gds-color-l3-background-positive);

    &:hover {
      background-color: color-mix(
        in srgb,
        var(--gds-color-l3-background-positive),
        var(--gds-color-l3-states-dark-hover)
      );
    }

    &:active {
      background-color: color-mix(
        in srgb,
        var(--gds-color-l3-background-positive),
        var(--gds-color-l3-states-dark-pressed)
      );
    }

    &.secondary {
      background-color: var(--gds-color-l3-background-positive-secondary);
      color: var(--gds-color-l3-content-positive);

      &:hover {
        background-color: color-mix(
          in srgb,
          var(--gds-color-l3-background-positive-secondary),
          var(--gds-color-l3-states-positive-hover)
        );
      }

      &:active {
        background-color: color-mix(
          in srgb,
          var(--gds-color-l3-background-positive-secondary),
          var(--gds-color-l3-states-positive-pressed)
        );
      }
    }

    &.tertiary {
      background-color: transparent;
      color: var(--gds-color-l3-content-positive);

      &:hover {
        background-color: color-mix(
          in srgb,
          transparent,
          var(--gds-color-l3-states-positive-hover)
        );
      }

      &:active {
        background-color: color-mix(
          in srgb,
          transparent,
          var(--gds-color-l3-states-positive-pressed)
        );
      }
    }
  }

  .negative {
    background-color: var(--gds-color-l3-background-negative);

    &:hover {
      background-color: color-mix(
        in srgb,
        var(--gds-color-l3-background-negative),
        var(--gds-color-l3-states-dark-hover)
      );
    }

    &:active {
      background-color: color-mix(
        in srgb,
        var(--gds-color-l3-background-negative),
        var(--gds-color-l3-states-dark-pressed)
      );
    }

    &.secondary {
      background-color: var(--gds-color-l3-background-negative-secondary);
      color: var(--gds-color-l3-content-negative);

      &:hover {
        background-color: color-mix(
          in srgb,
          var(--gds-color-l3-background-negative-secondary),
          var(--gds-color-l3-states-negative-hover)
        );
      }

      &:active {
        background-color: color-mix(
          in srgb,
          var(--gds-color-l3-background-negative-secondary),
          var(--gds-color-l3-states-negative-pressed)
        );
      }
    }

    &.tertiary {
      background-color: transparent;
      color: var(--gds-color-l3-content-negative);

      &:hover {
        background-color: color-mix(
          in srgb,
          transparent,
          var(--gds-color-l3-states-negative-hover)
        );
      }

      &:active {
        background-color: color-mix(
          in srgb,
          transparent,
          var(--gds-color-l3-states-negative-pressed)
        );
      }
    }
  }
}
`,iC=new WeakMap,iA="lit-localize-status",iT=(e,...t)=>({strTag:!0,strings:e,values:t}),iM=e=>"string"!=typeof e&&"strTag"in e,iz=(e,t,s)=>{let o=e[0];for(let r=1;r<e.length;r++)o+=t[s?s[r-1]:r-1]+e[r];return o},iD=e=>iM(e)?iz(e.strings,e.values):e,iF=class{constructor(e){this.__litLocalizeEventHandler=e=>{"ready"===e.detail.status&&this.host.requestUpdate()},this.host=e}hostConnected(){window.addEventListener(iA,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(iA,this.__litLocalizeEventHandler)}},iW=e=>e.addController(new iF(e)),iL=class{constructor(){this.settled=!1,this.promise=new Promise((e,t)=>{this._resolve=e,this._reject=t})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}},iO=[];for(let e=0;e<256;e++)iO[e]=(e>>4&15).toString(16)+(15&e).toString(16);new iL().resolve();var iN=class extends rQ{constructor(){super(),this.required=!1,this.label="",this.name="";try{this.#a=this.attachInternals()}catch(e){this.#a={form:this.closest("form"),setFormValue:e=>{this.value=e},setValidity:(e,t)=>{this.invalid=e.customError},validationMessage:"",validity:{badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},willValidate:!0,checkValidity:()=>!0,reportValidity:()=>!0}}}#a;static{this.formAssociated=!0}set invalid(e){let t=this.invalid;this.#a.setValidity({...this.#a.validity,customError:e,valid:!e},this.validationMessage||iD("Error message."),this._getValidityAnchor()||void 0),this.requestUpdate("invalid",t),this.#a.checkValidity()}get invalid(){return!this.#a.validity.valid}get form(){return this.#a.form}get validity(){return this.#a.validity}get validationMessage(){return this.#a.validationMessage}get willValidate(){return this.#a.willValidate}checkValidity(){if(!this._getValidityAnchor()||!this.validator)return!0;let e=this.invalid,t=this.validator.validate(this)||[{...this.validity,valid:!0},""];return this.#a.setValidity(t[0],t[1],this._getValidityAnchor()),this.requestUpdate("invalid",e),this.#a.checkValidity()}reportValidity(){return this.#a.reportValidity()}__handleValueChange(){this.#a.setFormValue(this.value),this.checkValidity()}formResetCallback(){this.value=void 0}formAssociatedCallback(e){e.addEventListener("submit",this._handleFormSubmit.bind(this))}_handleFormSubmit(e){this.checkValidity(),this.validity.valid||e.preventDefault()}focus(e){this._getValidityAnchor().focus(e)}};s9([oD({attribute:!1})],iN.prototype,"validator",2),s9([oD({type:Boolean})],iN.prototype,"required",2),s9([oD({type:Boolean,reflect:!0,attribute:"aria-invalid",converter:{fromAttribute:Boolean,toAttribute:e=>e?.toString()}})],iN.prototype,"invalid",1),s9([oD()],iN.prototype,"label",2),s9([oD()],iN.prototype,"value",2),s9([oD({reflect:!0})],iN.prototype,"name",2),s9([r2("value")],iN.prototype,"__handleValueChange",1);var iP=(e,...t)=>{let s=iC.get(e);return s||((s=e.map(e=>e.replace(/\n[\s]+</gm,"<"))).raw=e.raw,iC.set(e,s)),rJ(s,...t)},iR=class extends iN{constructor(){super(),os(this,d),os(this,h),this.disabled=!1,this.rank="primary",this.variant="neutral",this.size="medium",this.label="",this.href="",os(this,a,!1),os(this,g,()=>{let e=this._mainSlot?.assignedNodes()??[];oo(this,a,1===e.length&&e.some(e=>e.nodeName.toLowerCase().startsWith("gds-icon"))),this.requestUpdate()}),os(this,u,e=>{this.dispatchEvent(new CustomEvent("gds-click",{bubbles:!0,composed:!0,detail:e})),this.form&&!ot(this,d,c)&&("submit"===this.type?this.form.requestSubmit():"reset"===this.type&&this.form.reset())}),ik(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),r0.instance.apply(this,"gds-button")}render(){let e={button:!0,circle:ot(this,a),icon:ot(this,a),small:"small"===this.size,large:"large"===this.size,positive:"positive"===this.variant,negative:"negative"===this.variant,primary:"primary"===this.rank,secondary:"secondary"===this.rank,tertiary:"tertiary"===this.rank},t=ot(this,d,c)?iy`a`:iy`button`;return ix`
      <${t}
        class=${rv(e)}
        type="${iw(ot(this,d,c)?void 0:this.type)}"
        ?disabled="${this.disabled}"
        aria-label=${this.label||o9}
        href=${iw(ot(this,d,c)?this.href:void 0)}
        target=${iw(ot(this,d,c)?this.target:void 0)}
        rel=${iw(ot(this,d,c)?this.rel||ot(this,h,p):void 0)}
        download=${iw(ot(this,d,c)?this.download:void 0)}
        part="_button"
        @click="${ot(this,u)}"
        ${i_(e=>e.name.startsWith("gds-aria")||"gds-role"===e.name)}
      >
        <slot name="lead"></slot>
        <slot @slotchange=${ot(this,g)}></slot>
        <slot name="trail"></slot>
        ${oN(!this._isUsingTransitionalStyles,()=>iP`<gds-ripple part="_ripple"></gds-ripple>`)}
        </${t}>
        `}_getValidityAnchor(){return this._button}};a=new WeakMap,d=new WeakSet,c=function(){return this.href.length>0},h=new WeakSet,p=function(){return"_blank"===this.target?"noreferrer noopener":void 0},g=new WeakMap,u=new WeakMap,iR.styles=[it,rE(iE)],iR.shadowRootOptions={mode:"open",delegatesFocus:!0},s9([oD({type:Boolean,reflect:!0})],iR.prototype,"disabled",2),s9([oD({reflect:!0})],iR.prototype,"type",2),s9([oD({reflect:!0})],iR.prototype,"rank",2),s9([oD({reflect:!0})],iR.prototype,"variant",2),s9([oD({reflect:!0})],iR.prototype,"size",2),s9([oD()],iR.prototype,"label",2),s9([oD()],iR.prototype,"href",2),s9([oD()],iR.prototype,"target",2),s9([oD()],iR.prototype,"rel",2),s9([oD()],iR.prototype,"download",2),s9([oL("slot:not([name])")],iR.prototype,"_mainSlot",2),s9([oL(".button")],iR.prototype,"_button",2),iR=s9([rZ("gds-button")],iR);var iH=rC`
  @layer badge, shell, tokens, a11y, variants, types;

  @layer badge {
    :host {
      display: contents;
    }

    slot[name='lead']::slotted(*) {
      line-height: var(--gds-space-m);
    }

    :host([notification]) slot[name='trail']::slotted(*) {
      line-height: var(--gds-space-s);
    }

    :host([notification]) slot[name='lead']::slotted(*) {
      line-height: var(--gds-space-s);
    }
  }
`,iB=class extends rQ{constructor(){super(),os(this,f),os(this,y),os(this,m),os(this,w),this.variant="information",this.size="default",this.disabled=!1,this.notification=!1,this.mainSlotOccupied=!1}render(){let e=this.disabled?"disabled":this.notification?this.variant:this.variant+"-badge",t=this.disabled?"disabled":this.notification?"primary":this.variant,s="small"===this.size||this.notification?"2xs":"xs",o=this.mainSlotOccupied?"small"===this.size||this.notification?"m":"l":"xs",r=this.mainSlotOccupied?"l":"xs";return rJ`<gds-flex
      level="3"
      background=${e}
      color=${t}
      gap="${this.notification?"":"2xs"}"
      align-items="center"
      justify-content="flex-start"
      padding-inline="${s}"
      border-radius="${this.notification?"max":"2xs"}"
      block-size="${o}"
      width="max-content"
      inline-size="${r}"
      font-size="${"small"===this.size||this.notification?"detail-xs":"detail-s"}"
      pointer-events=${this.disabled?"none":"auto"}
      user-select="${this.disabled?"none":"auto"}"
    >
      ${oi(this,f,b).call(this)} ${oi(this,y,v).call(this)}
      ${oi(this,w,k).call(this)}
    </gds-flex>`}};f=new WeakSet,b=function(){if("small"!==this.size||!this.notification)return rJ`<slot name="lead"></slot>`},y=new WeakSet,v=function(){return rJ`<slot @slotchange=${oi(this,m,x)}></slot>`},m=new WeakSet,x=function(e){let t=e.target.assignedNodes({flatten:!0});this.mainSlotOccupied=t.length>0&&t.some(e=>e.nodeType===Node.ELEMENT_NODE||e.nodeType===Node.TEXT_NODE&&e.textContent?.trim()!=="")},w=new WeakSet,k=function(){return rJ`<slot name="trail"></slot>`},iB.styles=[it,iH],s9([oD()],iB.prototype,"variant",2),s9([oD({type:String})],iB.prototype,"size",2),s9([oD({attribute:"disabled",type:Boolean,reflect:!0})],iB.prototype,"disabled",2),s9([oD({attribute:"notification",type:Boolean,reflect:!0})],iB.prototype,"notification",2),s9([oF()],iB.prototype,"mainSlotOccupied",2),iB=s9([rZ("gds-badge")],iB);var iV=`@layer tokens, a11y, core, variants, sizes, sets, disabled;

@layer tokens {
  :host {
    --_gap: 4px;

    --_padding-inline: var(--gds-space-m);
    --_padding-block: var(--gds-space-xs);

    --_color-bg: transparent;
    --_color-text: var(--gds-sys-color-primary-text);
    --_color-border: transparent;

    --_color-outline-alpha: 60%;
    --_color-outline: var(--gds-sys-color-border-stroke);

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
`,iU=class extends rQ{constructor(){super(),os(this,_),os(this,S),this.disabled=!1,this.label="",this.href="",this.compact=!1,this.selected=!1,ik(this)}render(){let e={button:!0,selected:this.selected,compact:this.compact},t=ot(this,_,$)?iy`a`:iy`button`;return ix`
      <${t}
        class="${rv(e)}"
        ?disabled="${this.disabled}"
        aria-label="${this.label}"
        href=${iw(ot(this,_,$)?this.href:void 0)}
        target=${iw(ot(this,_,$)?this.target:void 0)}
        rel=${iw(ot(this,_,$)?this.rel||ot(this,S,E):void 0)}
        download=${iw(ot(this,_,$)?this.download:void 0)}
      >
        <slot name="lead"></slot>
        <slot part="main-slot"></slot>
        <slot name="trail"></slot>
      </${t}>
    `}};_=new WeakSet,$=function(){return this.href.length>0},S=new WeakSet,E=function(){return"_blank"===this.target?"noreferrer noopener":void 0},iU.styles=[it,rE(iV)],iU.shadowRootOptions={mode:"open",delegatesFocus:!0},s9([oD({type:Boolean,reflect:!0})],iU.prototype,"disabled",2),s9([oD()],iU.prototype,"label",2),s9([oD()],iU.prototype,"href",2),s9([oD()],iU.prototype,"target",2),s9([oD()],iU.prototype,"rel",2),s9([oD()],iU.prototype,"download",2),s9([oD({type:Boolean,reflect:!0})],iU.prototype,"compact",2),s9([oD({type:Boolean,reflect:!0})],iU.prototype,"selected",2),iU=s9([rZ("gds-menu-button")],iU);var ij=rC`
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
`,{I:iI}={M:oB,P:oV,A:oU,C:1,L:ro,R:rn,D:oZ,V:ri,I:rl,H:ra,N:rc,U:rh,B:rd,F:rp},iY=e=>null===e||"object"!=typeof e&&"function"!=typeof e,iq=e=>void 0===e.strings,iG=()=>document.createComment(""),iZ=(e,t,s)=>{let o=e._$AA.parentNode,r=void 0===t?e._$AB:t._$AA;if(void 0===s)s=new iI(o.insertBefore(iG(),r),o.insertBefore(iG(),r),e,e.options);else{let t=s._$AB.nextSibling,i=s._$AM,n=i!==e;if(n){let t;s._$AQ?.(e),s._$AM=e,void 0!==s._$AP&&(t=e._$AU)!==i._$AU&&s._$AP(t)}if(t!==r||n){let e=s._$AA;for(;e!==t;){let t=e.nextSibling;o.insertBefore(e,r),e=t}}}return s},iX=(e,t,s=e)=>(e._$AI(t,s),e),iK={},iJ=(e,t=iK)=>e._$AH=t,iQ=e=>e._$AH,i0=e=>{e._$AP?.(!1,!0);let t=e._$AA,s=e._$AB.nextSibling;for(;t!==s;){let e=t.nextSibling;t.remove(),t=e}},i1=(e,t)=>{let s=e._$AN;if(void 0===s)return!1;for(let e of s)e._$AO?.(t,!1),i1(e,t);return!0},i2=e=>{let t,s;do{if(void 0===(t=e._$AM))break;(s=t._$AN).delete(e),e=t}while(0===s?.size)},i3=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(void 0===s)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),i6(t)}};function i5(e){void 0!==this._$AN?(i2(this),this._$AM=e,i3(this)):this._$AM=e}function i7(e,t=!1,s=0){let o=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size){if(t){if(Array.isArray(o))for(let e=s;e<o.length;e++)i1(o[e],!1),i2(o[e]);else null!=o&&(i1(o,!1),i2(o))}else i1(this,e)}}var i6=e=>{e.type==rf.CHILD&&(e._$AP??=i7,e._$AQ??=i5)},i4=class extends ry{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,s){super._$AT(e,t,s),i3(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(i1(this,e),i2(this))}setValue(e){if(iq(this.t))this.t._$AI(e,this);else{let t=[...this.t._$AH];t[this.i]=e,this.t._$AI(t,this,0)}}disconnected(){}reconnected(){}},i8=()=>new i9,i9=class{},ne=new WeakMap,nt=rb(class extends i4{render(e){return o9}update(e,[t]){let s=t!==this.Y;return s&&void 0!==this.Y&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.Y=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),o9}rt(e){if(this.isConnected||(e=void 0),"function"==typeof this.Y){let t=this.ht??globalThis,s=ne.get(t);void 0===s&&(s=new WeakMap,ne.set(t,s)),void 0!==s.get(this.Y)&&this.Y.call(this.ht,void 0),s.set(this.Y,e),void 0!==e&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){return"function"==typeof this.Y?ne.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),ns=class{constructor(e){this.#d=e=>{let t=e.target;if(!this.host.navigableItems.includes(t))return;let s=!1;if("ArrowDown"===e.key){let e=this.host.navigableItems.indexOf(t)+1,o=this.host.navigableItems[e];o?.focus(),s=!0}else if("ArrowUp"===e.key){let e=this.host.navigableItems.indexOf(t)-1,o=this.host.navigableItems[e];o?.focus(),s=!0}else if("Home"===e.key)this.host.navigableItems[0]?.focus(),s=!0;else if("End"===e.key)this.host.navigableItems[this.host.navigableItems.length-1]?.focus(),s=!0;else{let t=e.key.toLowerCase();if(1!==t.length)return;if(t>="a"&&t<="z"||t>="0"&&t<="9"){let e=this.host.navigableItems.find(e=>{let s=e.textContent?.trim().toLowerCase();return s?.startsWith(t)});e?.focus(),s=!0}}s&&(e.preventDefault(),e.stopPropagation())},(this.host=e).addController(this)}hostConnected(){this.host.addEventListener("keydown",this.#d)}hostDisconnected(){this.host.removeEventListener("keydown",this.#d)}#d};function no(e){let t=e;for(;t.assignedElements().length>0&&"SLOT"===t.assignedElements()[0].nodeName;)t=t.assignedElements()[0];return t}var nr=class extends rQ{constructor(){super(),os(this,C,i8()),new ns(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),r0.instance.apply(this,"gds-listbox")}get navigableItems(){return ot(this,C).value&&no(ot(this,C).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&"gds-menu-item"===e.gdsElementName)||[]}focus(){this.navigableItems[0]?.focus()}render(){return rJ`<slot ${nt(ot(this,C))}></slot>`}};C=new WeakMap,nr=s9([rZ("gds-menu")],nr);var ni=["top","right","bottom","left"],nn=Math.min,nl=Math.max,na=Math.round,nd=Math.floor,nc=e=>({x:e,y:e}),nh={left:"right",right:"left",bottom:"top",top:"bottom"},np={start:"end",end:"start"};function ng(e,t){return"function"==typeof e?e(t):e}function nu(e){return e.split("-")[0]}function nf(e){return e.split("-")[1]}function nb(e){return"x"===e?"y":"x"}function ny(e){return"y"===e?"height":"width"}function nv(e){return["top","bottom"].includes(nu(e))?"y":"x"}function nm(e){return e.replace(/start|end/g,e=>np[e])}function nx(e){return e.replace(/left|right|bottom|top/g,e=>nh[e])}function nw(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function nk(e){let{x:t,y:s,width:o,height:r}=e;return{width:o,height:r,top:s,left:t,right:t+o,bottom:s+r,x:t,y:s}}function n_(e,t,s){let o,{reference:r,floating:i}=e,n=nv(t),l=nb(nv(t)),a=ny(l),d=nu(t),c="y"===n,h=r.x+r.width/2-i.width/2,p=r.y+r.height/2-i.height/2,g=r[a]/2-i[a]/2;switch(d){case"top":o={x:h,y:r.y-i.height};break;case"bottom":o={x:h,y:r.y+r.height};break;case"right":o={x:r.x+r.width,y:p};break;case"left":o={x:r.x-i.width,y:p};break;default:o={x:r.x,y:r.y}}switch(nf(t)){case"start":o[l]-=g*(s&&c?-1:1);break;case"end":o[l]+=g*(s&&c?-1:1)}return o}var n$=async(e,t,s)=>{let{placement:o="bottom",strategy:r="absolute",middleware:i=[],platform:n}=s,l=i.filter(Boolean),a=await (null==n.isRTL?void 0:n.isRTL(t)),d=await n.getElementRects({reference:e,floating:t,strategy:r}),{x:c,y:h}=n_(d,o,a),p=o,g={},u=0;for(let s=0;s<l.length;s++){let{name:i,fn:f}=l[s],{x:b,y:y,data:v,reset:m}=await f({x:c,y:h,initialPlacement:o,placement:p,strategy:r,middlewareData:g,rects:d,platform:n,elements:{reference:e,floating:t}});c=null!=b?b:c,h=null!=y?y:h,g={...g,[i]:{...g[i],...v}},m&&u<=50&&(u++,"object"==typeof m&&(m.placement&&(p=m.placement),m.rects&&(d=!0===m.rects?await n.getElementRects({reference:e,floating:t,strategy:r}):m.rects),{x:c,y:h}=n_(d,p,a)),s=-1)}return{x:c,y:h,placement:p,strategy:r,middlewareData:g}};async function nS(e,t){var s;void 0===t&&(t={});let{x:o,y:r,platform:i,rects:n,elements:l,strategy:a}=e,{boundary:d="clippingAncestors",rootBoundary:c="viewport",elementContext:h="floating",altBoundary:p=!1,padding:g=0}=ng(t,e),u=nw(g),f=l[p?"floating"===h?"reference":"floating":h],b=nk(await i.getClippingRect({element:null==(s=await (null==i.isElement?void 0:i.isElement(f)))||s?f:f.contextElement||await (null==i.getDocumentElement?void 0:i.getDocumentElement(l.floating)),boundary:d,rootBoundary:c,strategy:a})),y="floating"===h?{x:o,y:r,width:n.floating.width,height:n.floating.height}:n.reference,v=await (null==i.getOffsetParent?void 0:i.getOffsetParent(l.floating)),m=await (null==i.isElement?void 0:i.isElement(v))&&await (null==i.getScale?void 0:i.getScale(v))||{x:1,y:1},x=nk(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:y,offsetParent:v,strategy:a}):y);return{top:(b.top-x.top+u.top)/m.y,bottom:(x.bottom-b.bottom+u.bottom)/m.y,left:(b.left-x.left+u.left)/m.x,right:(x.right-b.right+u.right)/m.x}}function nE(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function nC(e){return ni.some(t=>e[t]>=0)}async function nA(e,t){let{placement:s,platform:o,elements:r}=e,i=await (null==o.isRTL?void 0:o.isRTL(r.floating)),n=nu(s),l=nf(s),a="y"===nv(s),d=["left","top"].includes(n)?-1:1,c=i&&a?-1:1,h=ng(t,e),{mainAxis:p,crossAxis:g,alignmentAxis:u}="number"==typeof h?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...h};return l&&"number"==typeof u&&(g="end"===l?-1*u:u),a?{x:g*c,y:p*d}:{x:p*d,y:g*c}}function nT(e){return nD(e)?(e.nodeName||"").toLowerCase():"#document"}function nM(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function nz(e){var t;return null==(t=(nD(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function nD(e){return e instanceof Node||e instanceof nM(e).Node}function nF(e){return e instanceof Element||e instanceof nM(e).Element}function nW(e){return e instanceof HTMLElement||e instanceof nM(e).HTMLElement}function nL(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof nM(e).ShadowRoot)}function nO(e){let{overflow:t,overflowX:s,overflowY:o,display:r}=nB(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+s)&&!["inline","contents"].includes(r)}function nN(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch(e){return!1}})}function nP(e){let t=nR(),s=nF(e)?nB(e):e;return"none"!==s.transform||"none"!==s.perspective||!!s.containerType&&"normal"!==s.containerType||!t&&!!s.backdropFilter&&"none"!==s.backdropFilter||!t&&!!s.filter&&"none"!==s.filter||["transform","perspective","filter"].some(e=>(s.willChange||"").includes(e))||["paint","layout","strict","content"].some(e=>(s.contain||"").includes(e))}function nR(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function nH(e){return["html","body","#document"].includes(nT(e))}function nB(e){return nM(e).getComputedStyle(e)}function nV(e){return nF(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function nU(e){if("html"===nT(e))return e;let t=e.assignedSlot||e.parentNode||nL(e)&&e.host||nz(e);return nL(t)?t.host:t}function nj(e,t,s){var o;void 0===t&&(t=[]),void 0===s&&(s=!0);let r=function e(t){let s=nU(t);return nH(s)?t.ownerDocument?t.ownerDocument.body:t.body:nW(s)&&nO(s)?s:e(s)}(e),i=r===(null==(o=e.ownerDocument)?void 0:o.body),n=nM(r);if(i){let e=nI(n);return t.concat(n,n.visualViewport||[],nO(r)?r:[],e&&s?nj(e):[])}return t.concat(r,nj(r,[],s))}function nI(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function nY(e){let t=nB(e),s=parseFloat(t.width)||0,o=parseFloat(t.height)||0,r=nW(e),i=r?e.offsetWidth:s,n=r?e.offsetHeight:o,l=na(s)!==i||na(o)!==n;return l&&(s=i,o=n),{width:s,height:o,$:l}}function nq(e){return nF(e)?e:e.contextElement}function nG(e){let t=nq(e);if(!nW(t))return nc(1);let s=t.getBoundingClientRect(),{width:o,height:r,$:i}=nY(t),n=(i?na(s.width):s.width)/o,l=(i?na(s.height):s.height)/r;return n&&Number.isFinite(n)||(n=1),l&&Number.isFinite(l)||(l=1),{x:n,y:l}}var nZ=nc(0);function nX(e){let t=nM(e);return nR()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:nZ}function nK(e,t,s,o){var r;void 0===t&&(t=!1),void 0===s&&(s=!1);let i=e.getBoundingClientRect(),n=nq(e),l=nc(1);t&&(o?nF(o)&&(l=nG(o)):l=nG(e));let a=(void 0===(r=s)&&(r=!1),o&&(!r||o===nM(n))&&r)?nX(n):nc(0),d=(i.left+a.x)/l.x,c=(i.top+a.y)/l.y,h=i.width/l.x,p=i.height/l.y;if(n){let e=nM(n),t=o&&nF(o)?nM(o):o,s=e,r=nI(s);for(;r&&o&&t!==s;){let e=nG(r),t=r.getBoundingClientRect(),o=nB(r),i=t.left+(r.clientLeft+parseFloat(o.paddingLeft))*e.x,n=t.top+(r.clientTop+parseFloat(o.paddingTop))*e.y;d*=e.x,c*=e.y,h*=e.x,p*=e.y,d+=i,c+=n,r=nI(s=nM(r))}}return nk({width:h,height:p,x:d,y:c})}function nJ(e){return nK(nz(e)).left+nV(e).scrollLeft}function nQ(e,t,s){let o;if("viewport"===t)o=function(e,t){let s=nM(e),o=nz(e),r=s.visualViewport,i=o.clientWidth,n=o.clientHeight,l=0,a=0;if(r){i=r.width,n=r.height;let e=nR();(!e||e&&"fixed"===t)&&(l=r.offsetLeft,a=r.offsetTop)}return{width:i,height:n,x:l,y:a}}(e,s);else if("document"===t)o=function(e){let t=nz(e),s=nV(e),o=e.ownerDocument.body,r=nl(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),i=nl(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight),n=-s.scrollLeft+nJ(e),l=-s.scrollTop;return"rtl"===nB(o).direction&&(n+=nl(t.clientWidth,o.clientWidth)-r),{width:r,height:i,x:n,y:l}}(nz(e));else if(nF(t))o=function(e,t){let s=nK(e,!0,"fixed"===t),o=s.top+e.clientTop,r=s.left+e.clientLeft,i=nW(e)?nG(e):nc(1),n=e.clientWidth*i.x;return{width:n,height:e.clientHeight*i.y,x:r*i.x,y:o*i.y}}(t,s);else{let s=nX(e);o={...t,x:t.x-s.x,y:t.y-s.y}}return nk(o)}function n0(e){return"static"===nB(e).position}function n1(e,t){return nW(e)&&"fixed"!==nB(e).position?t?t(e):e.offsetParent:null}function n2(e,t){let s=nM(e);if(nN(e))return s;if(!nW(e)){let t=nU(e);for(;t&&!nH(t);){if(nF(t)&&!n0(t))return t;t=nU(t)}return s}let o=n1(e,t);for(;o&&["table","td","th"].includes(nT(o))&&n0(o);)o=n1(o,t);return o&&nH(o)&&n0(o)&&!nP(o)?s:o||function(e){let t=nU(e);for(;nW(t)&&!nH(t);){if(nP(t))return t;if(nN(t))break;t=nU(t)}return null}(e)||s}var n3=async function(e){let t=this.getOffsetParent||n2,s=this.getDimensions,o=await s(e.floating);return{reference:function(e,t,s){let o=nW(t),r=nz(t),i="fixed"===s,n=nK(e,!0,i,t),l={scrollLeft:0,scrollTop:0},a=nc(0);if(o||!o&&!i){if(("body"!==nT(t)||nO(r))&&(l=nV(t)),o){let e=nK(t,!0,i,t);a.x=e.x+t.clientLeft,a.y=e.y+t.clientTop}else r&&(a.x=nJ(r))}return{x:n.left+l.scrollLeft-a.x,y:n.top+l.scrollTop-a.y,width:n.width,height:n.height}}(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}},n5={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:s,offsetParent:o,strategy:r}=e,i="fixed"===r,n=nz(o),l=!!t&&nN(t.floating);if(o===n||l&&i)return s;let a={scrollLeft:0,scrollTop:0},d=nc(1),c=nc(0),h=nW(o);if((h||!h&&!i)&&(("body"!==nT(o)||nO(n))&&(a=nV(o)),nW(o))){let e=nK(o);d=nG(o),c.x=e.x+o.clientLeft,c.y=e.y+o.clientTop}return{width:s.width*d.x,height:s.height*d.y,x:s.x*d.x-a.scrollLeft*d.x+c.x,y:s.y*d.y-a.scrollTop*d.y+c.y}},getDocumentElement:nz,getClippingRect:function(e){let{element:t,boundary:s,rootBoundary:o,strategy:r}=e,i=[..."clippingAncestors"===s?nN(t)?[]:function(e,t){let s=t.get(e);if(s)return s;let o=nj(e,[],!1).filter(e=>nF(e)&&"body"!==nT(e)),r=null,i="fixed"===nB(e).position,n=i?nU(e):e;for(;nF(n)&&!nH(n);){let t=nB(n),s=nP(n);s||"fixed"!==t.position||(r=null),(i?!s&&!r:!s&&"static"===t.position&&!!r&&["absolute","fixed"].includes(r.position)||nO(n)&&!s&&function e(t,s){let o=nU(t);return!(o===s||!nF(o)||nH(o))&&("fixed"===nB(o).position||e(o,s))}(e,n))?o=o.filter(e=>e!==n):r=t,n=nU(n)}return t.set(e,o),o}(t,this._c):[].concat(s),o],n=i[0],l=i.reduce((e,s)=>{let o=nQ(t,s,r);return e.top=nl(o.top,e.top),e.right=nn(o.right,e.right),e.bottom=nn(o.bottom,e.bottom),e.left=nl(o.left,e.left),e},nQ(t,n,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},getOffsetParent:n2,getElementRects:n3,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){let{width:t,height:s}=nY(e);return{width:t,height:s}},getScale:nG,isElement:nF,isRTL:function(e){return"rtl"===nB(e).direction}};function n7(e,t,s,o){let r;void 0===o&&(o={});let{ancestorScroll:i=!0,ancestorResize:n=!0,elementResize:l="function"==typeof ResizeObserver,layoutShift:a="function"==typeof IntersectionObserver,animationFrame:d=!1}=o,c=nq(e),h=i||n?[...c?nj(c):[],...nj(t)]:[];h.forEach(e=>{i&&e.addEventListener("scroll",s,{passive:!0}),n&&e.addEventListener("resize",s)});let p=c&&a?function(e,t){let s,o=null,r=nz(e);function i(){var e;clearTimeout(s),null==(e=o)||e.disconnect(),o=null}return!function n(l,a){void 0===l&&(l=!1),void 0===a&&(a=1),i();let{left:d,top:c,width:h,height:p}=e.getBoundingClientRect();if(l||t(),!h||!p)return;let g=nd(c),u=nd(r.clientWidth-(d+h)),f={rootMargin:-g+"px "+-u+"px "+-nd(r.clientHeight-(c+p))+"px "+-nd(d)+"px",threshold:nl(0,nn(1,a))||1},b=!0;function y(e){let t=e[0].intersectionRatio;if(t!==a){if(!b)return n();t?n(!1,t):s=setTimeout(()=>{n(!1,1e-7)},1e3)}b=!1}try{o=new IntersectionObserver(y,{...f,root:r.ownerDocument})}catch(e){o=new IntersectionObserver(y,f)}o.observe(e)}(!0),i}(c,s):null,g=-1,u=null;l&&(u=new ResizeObserver(e=>{let[o]=e;o&&o.target===c&&u&&(u.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var e;null==(e=u)||e.observe(t)})),s()}),c&&!d&&u.observe(c),u.observe(t));let f=d?nK(e):null;return d&&function t(){let o=nK(e);f&&(o.x!==f.x||o.y!==f.y||o.width!==f.width||o.height!==f.height)&&s(),f=o,r=requestAnimationFrame(t)}(),s(),()=>{var e;h.forEach(e=>{i&&e.removeEventListener("scroll",s),n&&e.removeEventListener("resize",s)}),null==p||p(),null==(e=u)||e.disconnect(),u=null,d&&cancelAnimationFrame(r)}}var n6=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var s,o;let{x:r,y:i,placement:n,middlewareData:l}=t,a=await nA(t,e);return n===(null==(s=l.offset)?void 0:s.placement)&&null!=(o=l.arrow)&&o.alignmentOffset?{}:{x:r+a.x,y:i+a.y,data:{...a,placement:n}}}}},n4=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var s,o,r,i,n;let{placement:l,middlewareData:a,rects:d,initialPlacement:c,platform:h,elements:p}=t,{mainAxis:g=!0,crossAxis:u=!0,fallbackPlacements:f,fallbackStrategy:b="bestFit",fallbackAxisSideDirection:y="none",flipAlignment:v=!0,...m}=ng(e,t);if(null!=(s=a.arrow)&&s.alignmentOffset)return{};let x=nu(l),w=nv(c),k=nu(c)===c,_=await (null==h.isRTL?void 0:h.isRTL(p.floating)),$=f||(k||!v?[nx(c)]:function(e){let t=nx(e);return[nm(e),t,nm(t)]}(c)),S="none"!==y;!f&&S&&$.push(...function(e,t,s,o){let r=nf(e),i=function(e,t,s){let o=["left","right"],r=["right","left"];switch(e){case"top":case"bottom":if(s)return t?r:o;return t?o:r;case"left":case"right":return t?["top","bottom"]:["bottom","top"];default:return[]}}(nu(e),"start"===s,o);return r&&(i=i.map(e=>e+"-"+r),t&&(i=i.concat(i.map(nm)))),i}(c,v,y,_));let E=[c,...$],C=await nS(t,m),A=[],T=(null==(o=a.flip)?void 0:o.overflows)||[];if(g&&A.push(C[x]),u){let e=function(e,t,s){void 0===s&&(s=!1);let o=nf(e),r=nb(nv(e)),i=ny(r),n="x"===r?o===(s?"end":"start")?"right":"left":"start"===o?"bottom":"top";return t.reference[i]>t.floating[i]&&(n=nx(n)),[n,nx(n)]}(l,d,_);A.push(C[e[0]],C[e[1]])}if(T=[...T,{placement:l,overflows:A}],!A.every(e=>e<=0)){let e=((null==(r=a.flip)?void 0:r.index)||0)+1,t=E[e];if(t)return{data:{index:e,overflows:T},reset:{placement:t}};let s=null==(i=T.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:i.placement;if(!s)switch(b){case"bestFit":{let e=null==(n=T.filter(e=>{if(S){let t=nv(e.placement);return t===w||"y"===t}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:n[0];e&&(s=e);break}case"initialPlacement":s=c}if(l!==s)return{reset:{placement:s}}}return{}}}},n8=e=>({name:"arrow",options:e,async fn(t){let{x:s,y:o,placement:r,rects:i,platform:n,elements:l,middlewareData:a}=t,{element:d,padding:c=0}=ng(e,t)||{};if(null==d)return{};let h=nw(c),p={x:s,y:o},g=nb(nv(r)),u=ny(g),f=await n.getDimensions(d),b="y"===g,y=b?"clientHeight":"clientWidth",v=i.reference[u]+i.reference[g]-p[g]-i.floating[u],m=p[g]-i.reference[g],x=await (null==n.getOffsetParent?void 0:n.getOffsetParent(d)),w=x?x[y]:0;w&&await (null==n.isElement?void 0:n.isElement(x))||(w=l.floating[y]||i.floating[u]);let k=w/2-f[u]/2-1,_=nn(h[b?"top":"left"],k),$=nn(h[b?"bottom":"right"],k),S=w-f[u]-$,E=w/2-f[u]/2+(v/2-m/2),C=nl(_,nn(E,S)),A=!a.arrow&&null!=nf(r)&&E!==C&&i.reference[u]/2-(E<_?_:$)-f[u]/2<0,T=A?E<_?E-_:E-S:0;return{[g]:p[g]+T,data:{[g]:C,centerOffset:E-C-T,...A&&{alignmentOffset:T}},reset:A}}}),n9=(e,t,s)=>{let o=new Map,r={platform:n5,...s},i={...r.platform,_c:o};return n$(e,t,{...r,platform:i})},le=class extends il{};le._regularSVG='<path d="M7.75 7.75L16.25 16.25M16.25 7.75L7.75 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',le._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7.11612 7.11612C7.60427 6.62796 8.39573 6.62796 8.88388 7.11612L12 10.2322L15.1161 7.11612C15.6043 6.62796 16.3957 6.62796 16.8839 7.11612C17.372 7.60427 17.372 8.39573 16.8839 8.88388L13.7678 12L16.8839 15.1161C17.372 15.6043 17.372 16.3957 16.8839 16.8839C16.3957 17.372 15.6043 17.372 15.1161 16.8839L12 13.7678L8.88388 16.8839C8.39573 17.372 7.60427 17.372 7.11612 16.8839C6.62796 16.3957 6.62796 15.6043 7.11612 15.1161L10.2322 12L7.11612 8.88388C6.62796 8.39573 6.62796 7.60427 7.11612 7.11612Z" fill="currentColor"/>',le._name="cross-small",le=s9([rZ("gds-icon-cross-small")],le);var lt=rC`
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
      display: flex;
      flex-direction: column;
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
`,ls=class extends rQ{constructor(){super(...arguments),os(this,A),os(this,O),os(this,P),os(this,H),os(this,V),this.open=!1,this.popupRole="dialog",this.label=void 0,this.placement="bottom-start",this.disableMobileStyles=!1,this.calcMinWidth=e=>`${e.offsetWidth}px`,this.calcMaxWidth=e=>"auto",this.calcMinHeight=e=>"auto",this.calcMaxHeight=e=>"500px",this.nonmodal=!1,this.floatingUIMiddleware=[n6(8),n4()],this._trigger=void 0,this._anchor=void 0,this._isVirtKbVisible=!1,os(this,M,void 0),os(this,z,!1),os(this,D,void 0),os(this,F,()=>{this.open=!1,ot(this,W).call(this,"cancel")}),os(this,W,e=>{this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:this.open,reason:e},bubbles:!1,composed:!1}))}),os(this,L,e=>{e.stopPropagation(),e.preventDefault(),this.open=!1,ot(this,W).call(this,"close"),setTimeout(()=>this._trigger?.focus(),250)}),os(this,j,e=>{("ArrowDown"===e.key||"ArrowUp"===e.key)&&(e.preventDefault(),this.open=!0,ot(this,W).call(this,"show")),"Escape"===e.key&&this.open&&ot(this,F).call(this)}),os(this,I,e=>{e.preventDefault(),this.open=!this.open,ot(this,W).call(this,this.open?"show":"close")}),os(this,Y,()=>{let e=this._elDefaultSlot?.assignedElements()[0];this.updateComplete.then(()=>{e?.focus()})}),os(this,q,e=>{let t=this._elDialog;if((e.clientX>0||e.clientY>0)&&t&&this.open){let s=t.getBoundingClientRect();s.top<=e.clientY&&e.clientY<=s.top+s.height&&s.left<=e.clientX&&e.clientX<=s.left+s.width||(this.open=!1,ot(this,W).call(this,"close"))}})}_handleTriggerRefChanged(){this.triggerRef?.then(e=>{e&&(this._trigger=e)})}_handleAnchorRefChanged(){this.anchorRef?.then(e=>{e&&(this._anchor=e)})}_handleTriggerChanged(){oi(this,O,N).call(this),oi(this,H,B).call(this)}_handleAnchorChanged(){oi(this,V,U).call(this)}connectedCallback(){super.connectedCallback(),r0.instance.apply(this,"gds-popover"),oi(this,O,N).call(this),this._handleOpenChange(),this.addEventListener("keydown",e=>{"Escape"===e.key&&this.open&&(ot(this,F).call(this),e.stopPropagation(),e.preventDefault())}),this.addEventListener("focusin",e=>{let t=e.target;"INPUT"===t.tagName||"TEXTAREA"===t.tagName?this._isVirtKbVisible=!0:this._isVirtKbVisible=!1}),this.addEventListener("blurin",e=>{this._isVirtKbVisible=!1})}disconnectedCallback(){super.disconnectedCallback(),oi(this,P,R).call(this)}render(){return rJ`<slot
        name="trigger"
        @slotchange=${oi(this,A,T)}
      ></slot>
      <div ?hidden="${!this.open}">
        <dialog
          class="${rv({"v-kb-visible":this._isVirtKbVisible,"use-modal-in-mobile":!this.disableMobileStyles,"has-backdrop":!!(this.backdrop&&"true"===this.backdrop)})}"
          aria-hidden="${String(!this.open)}"
          @close=${()=>this.open&&ot(this,F).call(this)}
        >
          <header>
            <h2>${this.label}</h2>
            <gds-button
              @click=${ot(this,L)}
              class="close"
              label="${iD("Close")}"
              size="small"
              rank="tertiary"
            >
              <gds-icon-cross-small></icon-cross-small>
            </gds-button>
          </header>
          <slot></slot>
        </dialog>
      </div>`}_handleOpenChange(){this.updateComplete.then(()=>{this._trigger?.setAttribute("aria-expanded",String(this.open)),this.open?(this.nonmodal?this._elDialog?.setAttribute("open","true"):this._elDialog?.showModal(),ot(this,Y).call(this),requestAnimationFrame(()=>{ot(this,D)&&(ot(this,D).show=!0)}),setTimeout(()=>ot(this,Y).call(this),250),setTimeout(()=>this._elDialog?.addEventListener("click",ot(this,q)),0)):(this._elDialog?.close(),this._elDialog?.removeEventListener("click",ot(this,q)),ot(this,D)&&(ot(this,D).show=!1))})}_handleBackdropChange(){let e=this.parentElement?.getRootNode();this.backdrop&&e&&oo(this,D,e.querySelector(this.backdrop))}_handleMobileLayout(e){var t;oo(this,z,e),e&&!this.disableMobileStyles?(null==(t=ot(this,M))||t.call(this),this._elDialog?.style.removeProperty("left"),this._elDialog?.style.removeProperty("top"),this._elDialog?.style.removeProperty("minWidth"),this.updateComplete.then(()=>{this.open&&this._elDialog?.showModal()})):this.updateComplete.then(()=>{oi(this,V,U).call(this)})}};A=new WeakSet,T=function(){this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]&&(this._trigger=this._elTriggerSlot.assignedElements()[0],this._anchor=this._elTriggerSlot.assignedElements()[0])},M=new WeakMap,z=new WeakMap,D=new WeakMap,F=new WeakMap,W=new WeakMap,L=new WeakMap,O=new WeakSet,N=function(){this._trigger?.addEventListener("keydown",ot(this,j)),this._trigger?.addEventListener("click",ot(this,I))},P=new WeakSet,R=function(){var e;this._trigger?.removeEventListener("keydown",ot(this,j)),this._trigger?.removeEventListener("click",ot(this,I)),null==(e=ot(this,M))||e.call(this)},H=new WeakSet,B=function(){if(this._trigger){this._trigger?.setAttribute("aria-expanded",String(this.open)),this._trigger.nodeName.startsWith("GDS-")||["A","BUTTON","INPUT","TEXTAREA"].includes(this._trigger.nodeName)||(this._trigger.setAttribute("tabindex","0"),this._trigger.setAttribute("role","button"));let e=this._trigger.nodeName.startsWith("GDS-")?"gds-aria-haspopup":"aria-haspopup";null===this._trigger.getAttribute(e)&&this._trigger.setAttribute(e,this.popupRole)}},V=new WeakSet,U=function(){if(!this._anchor||!this._elDialog)return;let e=this._anchor,t=this._elDialog;!e||!t||ot(this,z)&&!this.disableMobileStyles||(ot(this,M)&&ot(this,M).call(this),oo(this,M,n7(e,t,()=>{Object.assign(t.style,{minWidth:this.calcMinWidth(e),maxWidth:this.calcMaxWidth(e),minHeight:this.calcMinHeight(e),maxHeight:this.calcMaxHeight(e)}),n9(e,t,{placement:this.placement,middleware:this.floatingUIMiddleware,strategy:"fixed"}).then(({x:e,y:s})=>Object.assign(t.style,{left:`${e}px`,top:`${s}px`}))})))},j=new WeakMap,I=new WeakMap,Y=new WeakMap,q=new WeakMap,ls.styles=rE(lt),s9([oD({type:Boolean,reflect:!0})],ls.prototype,"open",2),s9([oD({attribute:"popup-role"})],ls.prototype,"popupRole",2),s9([oD({attribute:!1})],ls.prototype,"triggerRef",2),s9([oD({attribute:!1})],ls.prototype,"anchorRef",2),s9([oD()],ls.prototype,"label",2),s9([oD()],ls.prototype,"placement",2),s9([oD({type:Boolean})],ls.prototype,"disableMobileStyles",2),s9([oD({attribute:!1})],ls.prototype,"calcMinWidth",2),s9([oD({attribute:!1})],ls.prototype,"calcMaxWidth",2),s9([oD({attribute:!1})],ls.prototype,"calcMinHeight",2),s9([oD({attribute:!1})],ls.prototype,"calcMaxHeight",2),s9([oD({type:Boolean})],ls.prototype,"nonmodal",2),s9([oD()],ls.prototype,"backdrop",2),s9([oD({attribute:!1})],ls.prototype,"floatingUIMiddleware",2),s9([oF()],ls.prototype,"_trigger",2),s9([oF()],ls.prototype,"_anchor",2),s9([oF()],ls.prototype,"_isVirtKbVisible",2),s9([oL("slot:not([name])")],ls.prototype,"_elDefaultSlot",2),s9([oL('slot[name="trigger"]')],ls.prototype,"_elTriggerSlot",2),s9([oL("dialog")],ls.prototype,"_elDialog",2),s9([r2("triggerRef")],ls.prototype,"_handleTriggerRefChanged",1),s9([r2("anchorRef")],ls.prototype,"_handleAnchorRefChanged",1),s9([r2("_trigger")],ls.prototype,"_handleTriggerChanged",1),s9([r2("_anchor")],ls.prototype,"_handleAnchorChanged",1),s9([r2("open")],ls.prototype,"_handleOpenChange",1),s9([r2("backdrop")],ls.prototype,"_handleBackdropChange",1),s9([(e="(max-width: 576px)",(t,s,o)=>{let r=window.matchMedia(e),i=t.connectedCallback,n=t.disconnectedCallback;t.connectedCallback=function(){i?.call(this);let e=e=>{o.value?.call(this,e.matches)};r.addEventListener("change",e),this.disconnectedCallback=function(){n?.call(this),r.removeEventListener("change",e)},o.value?.call(this,r.matches)}})],ls.prototype,"_handleMobileLayout",1),ls=s9([rZ("gds-popover")],ls);var lo=class extends rQ{constructor(){super(...arguments),this.show=!1}render(){return rJ``}};lo.styles=rC`
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
  `,s9([oD({type:Boolean,reflect:!0})],lo.prototype,"show",2),lo=s9([rZ("gds-backdrop")],lo);var lr=class extends rQ{constructor(){super(),os(this,G),this.open=!1,this.buttonLabel=iD("Open context menu"),this.showLabel=!1,this.label="",this.placement="bottom-start",ik(this)}connectedCallback(){super.connectedCallback(),r0.instance.apply(this,"gds-context-menu"),this.addEventListener("keydown",e=>{this.open&&"Tab"==e.key&&(e.preventDefault(),this.open=!1,this.elTriggerBtn.then(e=>e.focus()))})}render(){return rJ`<button
        id="trigger"
        class="icon border-0 small ${rv({highlighted:this.open})}"
        aria-label=${this.buttonLabel??this.label}
        aria-haspopup="menu"
        aria-controls="menu"
        aria-expanded=${this.open}
      >
        <slot name="trigger">
          ${this.showLabel?this.buttonLabel??this.label:o9}
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
          @gds-menu-item-click=${oi(this,G,Z)}
        >
          <slot allow="gds-menu-item gds-menu-heading"></slot>
        </gds-menu>
      </gds-popover>`}};G=new WeakSet,Z=function(){this.open=!1},lr.styles=[ij],lr.shadowRootOptions={mode:"open",delegatesFocus:!0},s9([oD({type:Boolean,reflect:!0})],lr.prototype,"open",2),s9([oD({attribute:"button-label"})],lr.prototype,"buttonLabel",2),s9([oD({attribute:"show-label",type:Boolean})],lr.prototype,"showLabel",2),s9([oD()],lr.prototype,"label",2),s9([oD()],lr.prototype,"placement",2),s9([oO("#trigger")],lr.prototype,"elTriggerBtn",2),lr=s9([rZ("gds-context-menu")],lr);var li=rC`
  #body {
    visibility: hidden;
    position: absolute;
    z-index: 1060;
    box-sizing: border-box;
    padding: 1rem;
    width: 20rem;
    border-radius: 0.25rem;
    background-color: #222;
    color: #fff;
    opacity: 0;
    transition: opacity 0.3s;
  }

  #arrow {
    box-sizing: border-box;
    z-index: -1;
    position: absolute;
    height: 1rem;
    width: 1rem;
    background-color: #222;
    transform: rotate(45deg);
  }

  .arrow-top,
  .arrow-top-start,
  .arrow-top-end {
    bottom: -0.5rem;
  }

  .arrow-bottom,
  .arrow-bottom-start,
  .arrow-bottom-end {
    top: -0.5rem;
  }

  .arrow-left,
  .arrow-left-start,
  .arrow-left-end {
    right: -0.5rem;
  }

  .arrow-right,
  .arrow-right-start,
  .arrow-right-end {
    left: -0.5rem;
  }
`,ln=class extends rQ{constructor(){super(...arguments),os(this,Q),os(this,et),os(this,eo),os(this,ei),os(this,el),os(this,ed),os(this,eh),os(this,eg),this.placement="bottom",this.overlappedBy=[],this.target=[],this.label="Coachmark",this.computeVisibility=(e,t,s)=>s,this.targetElement=void 0,this._isVisible=!1,this._preventClose=!1,os(this,X,i8()),os(this,K,i8()),os(this,J,void 0)}connectedCallback(){super.connectedCallback(),document.addEventListener("click",()=>{setTimeout(()=>{oi(this,eg,eu).call(this),oi(this,Q,ee).call(this)},400)}),document.addEventListener("keydown",e=>{"Escape"===e.key&&this._isVisible&&oi(this,Q,ee).call(this)})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",oi(this,Q,ee)),document.removeEventListener("keydown",e=>{"Escape"===e.key&&this._isVisible&&oi(this,Q,ee).call(this)})}firstUpdated(){this.target.length>0&&(this.targetElement=oi(this,et,es).call(this,this.target),oi(this,eg,eu).call(this))}setPreventClose(e){this._preventClose=e}render(){return rJ`${oN(this.target.length>0,()=>rJ`
        <div
          role="dialog"
          id="body"
          aria-label=${this.label}
          ${nt(ot(this,X))}
        >
          <slot></slot>
          <div id="arrow" ${nt(ot(this,K))}></div>
        </div>
      `,()=>rJ``)}`}};X=new WeakMap,K=new WeakMap,J=new WeakMap,Q=new WeakSet,ee=function(){var e;this._isVisible&&(this._isVisible=!1,ot(this,X).value?.remove(),null==(e=ot(this,J))||e.call(this),this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:this._isVisible,reason:"closed"},bubbles:!1,composed:!1})))},et=new WeakSet,es=function(e){let t,s=!1;for(let o of e){if("shadowRoot"===o){s=!0;continue}t?s&&t.shadowRoot?(t=t.shadowRoot.querySelector(o),s=!1):t=t.querySelector(o):t=document.querySelector(o)}return t},eo=new WeakSet,er=function(e,t){if(e==t)return;let s=e.getBoundingClientRect(),o=t.getBoundingClientRect();return s.top<o.bottom&&s.bottom>o.top&&s.left<o.right&&s.right>o.left},ei=new WeakSet,en=function(e){if(!e)return!1;for(let t of e){let e=document.querySelector(t);if(e&&"hidden"!==getComputedStyle(e).visibility&&oi(this,eo,er).call(this,this.targetElement,e))return!0}return!1},el=new WeakSet,ea=function(e){let t=e.getBoundingClientRect(),s=window.innerHeight||document.documentElement.clientHeight,o=window.innerWidth||document.documentElement.clientWidth;return t.top+t.height<0||t.top>s||t.left+t.width<0||t.left>o},ed=new WeakSet,ec=async function(e,t,s){var o,r;return n9(e,t,{placement:this.placement,middleware:[n6(()=>({mainAxis:16,alignmentAxis:16})),{name:"detectOverflow",fn:async e=>({data:await nS(e,{boundary:document.body,rootBoundary:"document",altBoundary:!0,padding:{top:167,left:20}})})},{name:"shift",options:o={padding:16},async fn(e){let{x:t,y:s,placement:r}=e,{mainAxis:i=!0,crossAxis:n=!1,limiter:l={fn:e=>{let{x:t,y:s}=e;return{x:t,y:s}}},...a}=ng(o,e),d={x:t,y:s},c=await nS(e,a),h=nv(nu(r)),p=nb(h),g=d[p],u=d[h];if(i){let e="y"===p?"top":"left",t="y"===p?"bottom":"right",s=g+c[e],o=g-c[t];g=nl(s,nn(g,o))}if(n){let e="y"===h?"top":"left",t="y"===h?"bottom":"right",s=u+c[e],o=u-c[t];u=nl(s,nn(u,o))}let f=l.fn({...e,[p]:g,[h]:u});return{...f,data:{x:f.x-t,y:f.y-s}}}},n4(),(void 0===r&&(r={}),{name:"hide",options:r,async fn(e){let{rects:t}=e,{strategy:s="referenceHidden",...o}=ng(r,e);switch(s){case"referenceHidden":{let s=nE(await nS(e,{...o,elementContext:"reference"}),t.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:nC(s)}}}case"escaped":{let s=nE(await nS(e,{...o,altBoundary:!0}),t.floating);return{data:{escapedOffsets:s,escaped:nC(s)}}}default:return{}}}}),n8({padding:16,element:s})]})},eh=new WeakSet,ep=function(){if(!this.targetElement)return!1;let e=oi(this,el,ea).call(this,this.targetElement),t=this.targetElement.checkVisibility(),s=0!==this.overlappedBy.length&&oi(this,ei,en).call(this,this.overlappedBy);return this.computeVisibility(this,this.targetElement,!s&&!e&&t)},eg=new WeakSet,eu=async function(){let e=this.targetElement,t=ot(this,X).value,s=ot(this,K).value;if(e&&t&&s)try{oo(this,J,n7(e,t,()=>{oi(this,ed,ec).call(this,e,t,s).then(({x:e,y:o,middlewareData:r,placement:i})=>{if(oi(this,eh,ep).call(this)){if(this._isVisible=!0,Object.assign(t.style,{visibility:"visible",opacity:1,left:`${e}px`,top:`${o}px`}),r.arrow){let{x:e,y:t}=r.arrow;s.removeAttribute("class"),s.classList.add("arrow-"+i),Object.assign(s.style,{left:null!=e?`${e}px`:"",top:null!=t?`${t}px`:""})}}else this._isVisible=!1,Object.assign(t.style,{visibility:"hidden",opacity:0})})}))}catch(e){console.warn("failed to render tooltips")}},ln.styles=li,s9([oD()],ln.prototype,"placement",2),s9([oD({attribute:!1})],ln.prototype,"overlappedBy",2),s9([oD({attribute:!1})],ln.prototype,"target",2),s9([oD()],ln.prototype,"label",2),s9([oD({attribute:!1})],ln.prototype,"computeVisibility",2),s9([oF()],ln.prototype,"_isVisible",2),s9([oF()],ln.prototype,"_preventClose",2),ln=s9([rZ("gds-coachmark")],ln);var ll=class{constructor(e){this.Y=e}disconnect(){this.Y=void 0}reconnect(e){this.Y=e}deref(){return this.Y}},la=class{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??=new Promise(e=>this.q=e)}resume(){this.q?.(),this.Z=this.q=void 0}},ld=e=>!iY(e)&&"function"==typeof e.then,lc=rb(class extends i4{constructor(){super(...arguments),this.wt=1073741823,this.bt=[],this.K=new ll(this),this.X=new la}render(...e){return e.find(e=>!ld(e))??o8}update(e,t){let s=this.bt,o=s.length;this.bt=t;let r=this.K,i=this.X;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this.wt);e++){let n=t[e];if(!ld(n))return this.wt=e,n;e<o&&n===s[e]||(this.wt=1073741823,o=0,Promise.resolve(n).then(async e=>{for(;i.get();)await i.get();let t=r.deref();if(void 0!==t){let s=t.bt.indexOf(n);s>-1&&s<t.wt&&(t.wt=s,t.setValue(e))}}))}return o8}disconnected(){this.K.disconnect(),this.X.pause()}reconnected(){this.K.reconnect(this),this.X.resume()}}),lh=(e,t,s)=>{let o=new Map;for(let r=t;r<=s;r++)o.set(e[r],r);return o},lp=rb(class extends ry{constructor(e){if(super(e),e.type!==rf.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,s){let o;void 0===s?s=t:void 0!==t&&(o=t);let r=[],i=[],n=0;for(let t of e)r[n]=o?o(t,n):n,i[n]=s(t,n),n++;return{values:i,keys:r}}render(e,t,s){return this.dt(e,t,s).values}update(e,[t,s,o]){let r=iQ(e),{values:i,keys:n}=this.dt(t,s,o);if(!Array.isArray(r))return this.ut=n,i;let l=this.ut??=[],a=[],d,c,h=0,p=r.length-1,g=0,u=i.length-1;for(;h<=p&&g<=u;)if(null===r[h])h++;else if(null===r[p])p--;else if(l[h]===n[g])a[g]=iX(r[h],i[g]),h++,g++;else if(l[p]===n[u])a[u]=iX(r[p],i[u]),p--,u--;else if(l[h]===n[u])a[u]=iX(r[h],i[u]),iZ(e,a[u+1],r[h]),h++,u--;else if(l[p]===n[g])a[g]=iX(r[p],i[g]),iZ(e,r[h],r[p]),p--,g++;else if(void 0===d&&(d=lh(n,g,u),c=lh(l,h,p)),d.has(l[h])){if(d.has(l[p])){let t=c.get(n[g]),s=void 0!==t?r[t]:null;if(null===s){let t=iZ(e,r[h]);iX(t,i[g]),a[g]=t}else a[g]=iX(s,i[g]),iZ(e,r[h],s),r[t]=null;g++}else i0(r[p]),p--}else i0(r[h]),h++;for(;g<=u;){let t=iZ(e,a[u+1]);iX(t,i[g]),a[g++]=t}for(;h<=p;){let e=r[h++];null!==e&&i0(e)}return this.ut=n,iJ(e,a),o8}});function lg(e){return(lg="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function lu(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function lf(e,t){if(t.length<e)throw TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function lb(e){lf(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===lg(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):(("string"==typeof e||"[object String]"===t)&&"undefined"!=typeof console&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(Error().stack)),new Date(NaN))}function ly(e,t){lf(2,arguments);var s=lb(e),o=lu(t);return isNaN(o)?new Date(NaN):(o&&s.setDate(s.getDate()+o),s)}function lv(e,t){lf(2,arguments);var s=lb(e),o=lu(t);if(isNaN(o))return new Date(NaN);if(!o)return s;var r=s.getDate(),i=new Date(s.getTime());return(i.setMonth(s.getMonth()+o+1,0),r>=i.getDate())?i:(s.setFullYear(i.getFullYear(),i.getMonth(),r),s)}var lm={};function lx(e,t){lf(1,arguments);var s,o,r,i,n,l,a,d,c=lu(null!==(s=null!==(o=null!==(r=null!==(i=null==t?void 0:t.weekStartsOn)&&void 0!==i?i:null==t?void 0:null===(n=t.locale)||void 0===n?void 0:null===(l=n.options)||void 0===l?void 0:l.weekStartsOn)&&void 0!==r?r:lm.weekStartsOn)&&void 0!==o?o:null===(a=lm.locale)||void 0===a?void 0:null===(d=a.options)||void 0===d?void 0:d.weekStartsOn)&&void 0!==s?s:0);if(!(c>=0&&c<=6))throw RangeError("weekStartsOn must be between 0 and 6 inclusively");var h=lb(e),p=h.getDay();return h.setDate(h.getDate()-((p<c?7:0)+p-c)),h.setHours(0,0,0,0),h}function lw(e){lf(1,arguments);var t=lb(e);return t.setHours(0,0,0,0),t}function lk(e,t){lf(2,arguments);var s=lw(e),o=lw(t);return s.getTime()===o.getTime()}var l_={fromAttribute:e=>new Date(e),toAttribute:e=>e.toISOString()},l$=rC`
  @layer base, reset;

  @layer base {
    :host {
      display: flex;
      justify-content: center;
    }

    :host table {
      border-spacing: var(--gds-space-2xs);
      flex-grow: 1;
      width: 100%;
      padding: 1ch;
    }

    thead {
      box-shadow: 0 var(--gds-space-4xs) 0 0 var(--gds-color-l2-border-primary);
      th {
        height: var(--gds-space-2xl);
        width: var(--gds-space-2xl);
        background: var(--gds-sys-color-container-container-bright);
        box-sizing: border-box;
        text-align: center;
        font-weight: normal;
      }
    }

    tbody {
      td {
        position: relative;
        height: var(--gds-space-3xl);
        width: var(--gds-space-3xl);
        box-sizing: border-box;
        text-align: center;
        user-select: none;
        border-width: var(--gds-space-3xs);
        border-style: solid;
        border-color: transparent;
        border-radius: var(--gds-space-2xs);
        transition: all 0.2s;
        outline-style: solid;
        outline-color: transparent;
        outline-width: 0px;
        outline-offset: var(--gds-space-3xs);

        &:not(.disabled):hover,
        &[aria-selected='true'] {
          background: var(--gds-sys-color-base800);
          cursor: pointer;
          color: var(--gds-sys-color-base-white);
        }

        &.today {
          border-color: var(--gds-sys-color-base800);
        }

        &.disabled {
          background-color: var(--gds-sys-color-base100);
          color: var(--gds-sys-color-base500);
          cursor: not-allowed;
        }

        &:active:not(.disabled) {
          scale: 0.96;
        }

        &:focus-visible {
          outline-color: color-mix(in srgb, currentColor, transparent 50%);
        }
      }

      .indicator-dot {
        display: flex;
        position: absolute;
        width: var(--gds-space-2xs);
        height: var(--gds-space-2xs);
        border-radius: var(--gds-space-max);
        background-color: var(--_color, currentColor);
        inset: var(--gds-space-2xs) var(--gds-space-2xs) auto auto;
      }
    }
  }
`,lS=class extends rQ{constructor(){super(...arguments),os(this,ef),os(this,ey),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.focusedDate=new Date,this.disabledWeekends=!1,this.showWeekNumbers=!1,this.hideExtraneousDays=!1,this.hideDayNames=!1,this.dateLabelTemplate=e=>e.toDateString()}get focusedMonth(){return this.focusedDate.getMonth()}set focusedMonth(e){let t=function(e){lf(1,arguments);var t=lb(e),s=t.getMonth();return t.setFullYear(t.getFullYear(),s+1,0),t.setHours(0,0,0,0),t}(new Date(this.focusedYear,e,1)),s=new Date(this.focusedDate);s.setDate(Math.min(this.focusedDate.getDate(),t.getDate())),s.setMonth(e),s.setHours(12,0,0,0),this.focusedDate=s}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(e){this.focusedDate=new Date(this.focusedDate.setFullYear(e))}getDateCell(e){return this.shadowRoot?.querySelector(`#dateCell-${e}`)}connectedCallback(){super.connectedCallback(),r0.instance.apply(this,"gds-calendar"),this.addEventListener("keydown",oi(this,ey,ev))}focus(){super.focus(),this._elFocusedCell?.focus()}render(){let e=new Date;return o7`<table role="grid" aria-label="${iw(this.label)}">
      ${oN(!this.hideDayNames,()=>o7`<thead role="rowgroup">
            <tr role="row">
              ${oN(this.showWeekNumbers,()=>o7`<th></th>`)}
              <th>${iD("Mon")}</th>
              <th>${iD("Tue")}</th>
              <th>${iD("Wed")}</th>
              <th>${iD("Thu")}</th>
              <th>${iD("Fri")}</th>
              <th>${iD("Sat")}</th>
              <th>${iD("Sun")}</th>
            </tr>
          </thead>`)}
      <tbody role="rowgroup">
        ${function(e,t){let s=function(e,t){lf(1,arguments);var s=e||{},o=lb(s.start),r=lb(s.end),i=r.getTime();if(!(o.getTime()<=i))throw RangeError("Invalid interval");var n=lx(o,t),l=lx(r,t);n.setHours(15),l.setHours(15),i=l.getTime();for(var a=[],d=n;d.getTime()<=i;)d.setHours(0),a.push(lb(d)),(d=function(e,t){return lf(2,arguments),ly(e,7*lu(t))}(d,1)).setHours(15);return a}({start:function(e){lf(1,arguments);var t=lb(e);return t.setDate(1),t.setHours(0,0,0,0),t}(e),end:function(e){lf(1,arguments);var t=lb(e),s=t.getMonth();return t.setFullYear(t.getFullYear(),s+1,0),t.setHours(23,59,59,999),t}(e)},{weekStartsOn:1});for(;s.length<6;)s.push(ly(s[s.length-1],7));return o7`${t(s.map(e=>({days:function(e,t){lf(1,arguments);var s,o=e||{},r=lb(o.start),i=lb(o.end).getTime();if(!(r.getTime()<=i))throw RangeError("Invalid interval");var n=[];r.setHours(0,0,0,0);var l=Number(null!==(s=null==t?void 0:t.step)&&void 0!==s?s:1);if(l<1||isNaN(l))throw RangeError("`options.step` must be a number greater than 1");for(;r.getTime()<=i;)n.push(lb(r)),r.setDate(r.getDate()+l),r.setHours(0,0,0,0);return n}({start:e,end:ly(e,6)})})))}`}(this.focusedDate,t=>o7`
            ${t.map(t=>o7`
                <tr role="row">
                  ${oN(this.showWeekNumbers,()=>o7`<td class="week-number" scope="row">
                        ${(function(e,t){lf(1,arguments);var s=lb(e);return Math.round((lx(s,t).getTime()-(function(e,t){lf(1,arguments);var s,o,r,i,n,l,a,d,c=lu(null!==(s=null!==(o=null!==(r=null!==(i=null==t?void 0:t.firstWeekContainsDate)&&void 0!==i?i:null==t?void 0:null===(n=t.locale)||void 0===n?void 0:null===(l=n.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==r?r:lm.firstWeekContainsDate)&&void 0!==o?o:null===(a=lm.locale)||void 0===a?void 0:null===(d=a.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==s?s:1),h=function(e,t){lf(1,arguments);var s,o,r,i,n,l,a,d,c=lb(e),h=c.getFullYear(),p=lu(null!==(s=null!==(o=null!==(r=null!==(i=null==t?void 0:t.firstWeekContainsDate)&&void 0!==i?i:null==t?void 0:null===(n=t.locale)||void 0===n?void 0:null===(l=n.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==r?r:lm.firstWeekContainsDate)&&void 0!==o?o:null===(a=lm.locale)||void 0===a?void 0:null===(d=a.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==s?s:1);if(!(p>=1&&p<=7))throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var g=new Date(0);g.setFullYear(h+1,0,p),g.setHours(0,0,0,0);var u=lx(g,t),f=new Date(0);f.setFullYear(h,0,p),f.setHours(0,0,0,0);var b=lx(f,t);return c.getTime()>=u.getTime()?h+1:c.getTime()>=b.getTime()?h:h-1}(e,t),p=new Date(0);return p.setFullYear(h,0,c),p.setHours(0,0,0,0),lx(p,t)})(s,t).getTime())/6048e5)+1})(t.days[0])}
                      </td>`)}
                  ${t.days.map(t=>{let s=this.customizedDates&&this.customizedDates.find(e=>lk(e.date,t)),o={color:"currentColor",disabled:!!(this.disabledDates&&this.disabledDates.some(e=>lk(e,t))),...s},r=!function(e,t){lf(2,arguments);var s=lb(e),o=lb(t);return s.getFullYear()===o.getFullYear()&&s.getMonth()===o.getMonth()}(this.focusedDate,t),i=(t<this.min||t>this.max)&&!lk(t,this.min)&&!lk(t,this.max),n=0===t.getDay()||6===t.getDay(),l=o.disabled||r||i||this.disabledWeekends&&n;return this.hideExtraneousDays&&r?o7`<td inert></td>`:o7`
                          <td
                            role="${iw(l?void 0:"gridcell")}"
                            class="${rv({"custom-date":!!s,disabled:!!l,today:lk(e,t)})}"
                            ?disabled=${l}
                            tabindex="${lk(this.focusedDate,t)?0:-1}"
                            aria-selected="${this.value&&lk(this.value,t)?"true":"false"}"
                            aria-label="${this.dateLabelTemplate(t)}"
                            @click=${()=>l?null:oi(this,ef,eb).call(this,t)}
                            id="dateCell-${t.getDate()}"
                          >
                            <span
                              class="number"
                              style="--_color: ${o?o?.color:""}"
                              >${t.getDate()}</span
                            >

                            ${oN(o.indicator,()=>o7`<span
                                  class="indicator-${o?.indicator}"
                                  style="--_color: ${o?.color}"
                                ></span>`)}
                          </td>
                        `})}
                </tr>
              `)}
          `)}
      </tbody>
    </table>`}_valueChanged(){this.value&&(this.focusedDate=this.value)}};ef=new WeakSet,eb=function(e){let t=function(e,t){lf(2,arguments);var s=lb(e),o=lu(t);return s.setHours(o),s}(e,12);this.value=t,this.dispatchEvent(new CustomEvent("change",{detail:t,bubbles:!1,composed:!1}))},ey=new WeakSet,ev=function(e){let t=!1,s=new Date(this.focusedDate);"ArrowLeft"===e.key?(s=ly(this.focusedDate,-1),t=!0):"ArrowRight"===e.key?(s=ly(this.focusedDate,1),t=!0):"ArrowUp"===e.key?(s=ly(this.focusedDate,-7),t=!0):"ArrowDown"===e.key?(s=ly(this.focusedDate,7),t=!0):"Enter"===e.key||" "===e.key?(this._elFocusedCell?.hasAttribute("disabled")||oi(this,ef,eb).call(this,this.focusedDate),t=!0):"Home"===e.key?(s=new Date(this.focusedYear,this.focusedMonth,1),t=!0):"End"===e.key?(s=new Date(this.focusedYear,this.focusedMonth+1,0),t=!0):"PageUp"===e.key?(s=function(e,t){return lf(2,arguments),lv(e,-lu(t))}(this.focusedDate,1),t=!0):"PageDown"===e.key&&(s=lv(this.focusedDate,1),t=!0),s.getFullYear()>=this.min.getFullYear()&&s.getFullYear()<=this.max.getFullYear()&&this.dispatchEvent(new CustomEvent("gds-date-focused",{detail:s,bubbles:!1,composed:!1,cancelable:!0}))&&(this.focusedDate=s),t&&(e.preventDefault(),e.stopPropagation(),this.updateComplete.then(()=>{this._elFocusedCell?.focus()}))},lS.styles=[it,l$],lS.shadowRootOptions={mode:"open",delegatesFocus:!0},s9([oD()],lS.prototype,"value",2),s9([oD({type:Date})],lS.prototype,"min",2),s9([oD({type:Date})],lS.prototype,"max",2),s9([oD()],lS.prototype,"focusedDate",2),s9([oD({type:Boolean,attribute:"disabled-weekends"})],lS.prototype,"disabledWeekends",2),s9([oD({type:Array,attribute:"disabled-dates"})],lS.prototype,"disabledDates",2),s9([oD({type:Number})],lS.prototype,"focusedMonth",1),s9([oD({type:Number})],lS.prototype,"focusedYear",1),s9([oD({type:Boolean})],lS.prototype,"showWeekNumbers",2),s9([oD({type:Boolean})],lS.prototype,"hideExtraneousDays",2),s9([oD({type:Boolean})],lS.prototype,"hideDayNames",2),s9([oD({attribute:!1})],lS.prototype,"customizedDates",2),s9([oD()],lS.prototype,"label",2),s9([oD({attribute:!1})],lS.prototype,"dateLabelTemplate",2),s9([oL('td[tabindex="0"]')],lS.prototype,"_elFocusedCell",2),s9([r2("value")],lS.prototype,"_valueChanged",1),lS=s9([rZ("gds-calendar")],lS);var lE=class extends il{};lE._regularSVG='<path d="M20 9L12 17L4 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',lE._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M3.46967 8.46967C3.76256 8.17678 4.23744 8.17678 4.53033 8.46967L12 15.9393L19.4697 8.46967C19.7626 8.17678 20.2374 8.17678 20.5303 8.46967C20.8232 8.76256 20.8232 9.23744 20.5303 9.53033L12.5303 17.5303C12.3897 17.671 12.1989 17.75 12 17.75C11.8011 17.75 11.6103 17.671 11.4697 17.5303L3.46967 9.53033C3.17678 9.23744 3.17678 8.76256 3.46967 8.46967Z" fill="currentColor"/>',lE._name="chevron-bottom",lE=s9([rZ("gds-icon-chevron-bottom")],lE);var lC=rC`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      overflow: auto;
    }
  }
`,lA=class extends rQ{constructor(){super(),this.multiple=!1,this.compareWith=(e,t)=>e===t,os(this,em,i8()),os(this,ex,e=>{let t=e.target;this.multiple?t.selected=!t.selected:(t.selected=!0,Array.from(this.options).forEach(e=>{e!==t&&(e.selected=!1)})),this.ariaActiveDescendantElement=t,this.dispatchEvent(new CustomEvent("change",{bubbles:!1,composed:!1}))}),new ns(this)}get navigableItems(){return this.visibleOptionElements}get options(){return ot(this,em).value&&no(ot(this,em).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&"gds-option"===e.gdsElementName)||[]}get visibleOptionElements(){return this.options.filter(e=>!e.hidden)}get visibleSelectedOptionElements(){return this.options.filter(e=>e.selected&&!e.hidden)}get selection(){return this.options.filter(e=>e.selected)}set selection(e){this.options.forEach(t=>{t.selected=e.some(e=>this.compareWith(e,t.value))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),r0.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",ot(this,ex))}focus(){(this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])?.focus()}render(){return rJ`<slot ${nt(ot(this,em))}></slot>`}_rerenderOptions(){this.options.forEach(e=>{e.requestUpdate()})}};em=new WeakMap,ex=new WeakMap,lA.styles=lC,s9([oD({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:e=>e.toString()}})],lA.prototype,"multiple",2),s9([oD()],lA.prototype,"compareWith",2),s9([r2("multiple")],lA.prototype,"_rerenderOptions",1),lA=s9([rZ("gds-listbox")],lA);var lT=rC`
  @layer base, reset;

  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      color: var(--gds-sys-color-base800);
      font-family: inherit;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--gds-space-m);
      height: var(--gds-space-3xl);
      border: var(--gds-space-4xs) solid #6f6f6f;
      border-radius: var(--gds-space-xs);
      padding-inline: var(--gds-space-m);
      cursor: pointer;
      box-sizing: border-box;
      font-size: var(--gds-space-m);
      font-family: inherit;

      // TODO: Update colors to use tokens
      border-color: #6f6f6f;
      color: #1b1b1b;
      background-color: #e2e2e2;

      &.small {
        height: var(--gds-space-xl);
        padding: var(--gds-space-s);
        padding-right: var(--gds-space-xs);
        font-size: calc(var(--gds-space-s) + 2px);

        .icon {
          width: var(--gds-space-l);
          height: var(--gds-space-l);
        }
      }

      &:hover {
        background-color: #cecece;
      }

      .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        height: var(--gds-space-xl);
        width: var(--gds-space-xl);
      }

      &[aria-expanded='true'] ::part(icon) {
        transform: scaleY(-1);
      }
    }

    slot[name='trigger'] > span {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    label {
      font-size: var(--gds-text-size-detail-m);
      line-height: var(--gds-text-line-height-detail-m);
      font-weight: var(--gds-text-weight-book);
      padding-block: var(--gds-space-2xs);
      font-family: inherit;
    }

    input[type='text'] {
      border-radius: var(--gds-space-xs);
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      font-size: inherit;
      line-height: inherit;
      border: none;
      outline: none;
      color: var(--gds-sys-color-base800);
      border-bottom: 1px solid var(--gds-sys-color-base400);
      width: 100%;
      padding: var(--gds-space-m);
      font-weight: var(--gds-text-weight-book);
      flex: 1;
      box-sizing: border-box;
      font-family: inherit;

      &:focus {
        border-color: var(--gds-sys-color-base800);
      }

      &::placeholder {
        color: currrentColor;
        font-family: inherit;
        font-weight: var(--gds-text-weight-book);
        color: var(--gds-sys-color-base800);
      }
    }
  }
`,lM=class extends iN{constructor(){super(),os(this,eC),os(this,eT),os(this,ez),this.label="",this.open=!1,this.searchable=!1,this.multiple=!1,this.compareWith=(e,t)=>e===t,this.searchFilter=(e,t)=>t.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.disableMobileStyles=!1,os(this,ew,void 0),os(this,ek,e=>{let t=e.getBoundingClientRect(),s=window.innerHeight-t.bottom,o=t.top,r=Math.min(o,this.maxHeight);return s>o&&(r=Math.min(s,this.maxHeight)),`${r-16}px`}),os(this,e_,e=>{let t=this._elSearchInput,s=Array.from(ot(this,ew));s.forEach(e=>e.hidden=!1),t.value&&s.filter(e=>!this.searchFilter(t.value,e)).forEach(e=>e.hidden=!0)}),os(this,e$,e=>{this._elListbox?.then(t=>{if("ArrowDown"===e.key||"Tab"===e.key){e.preventDefault(),t.focus();return}})}),os(this,eS,e=>{if("Tab"===e.key&&this.searchable){e.preventDefault(),this._elSearchInput?.focus();return}}),os(this,eE,e=>{let t=this._elTriggerBtn;t&&(t.ariaActiveDescendantElement=e.target)}),os(this,eF,e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&(this.open=!1)}),os(this,eW,e=>{"Tab"!==e.key||this.searchable||(e.preventDefault(),this.open=!1,this._elTriggerBtn?.focus())}),ik(this),iW(this),oo(this,ew,this.getElementsByTagName(function(e){return rG.get(e)??e}("gds-option")))}get type(){return"gds-dropdown"}get options(){return Array.from(ot(this,ew)).filter(e=>!e.hasAttribute("isplaceholder"))}get placeholder(){return Array.from(ot(this,ew)).find(e=>e.hasAttribute("isplaceholder"))}get displayValue(){return(Array.isArray(this.value)?this.value.length>2?iD(iT`${this.value.length} selected`):this.value.reduce((e,t)=>e+this.options.find(e=>e.value===t)?.innerHTML+", ","").slice(0,-2):this.options.find(e=>e.selected)?.innerHTML)||this.placeholder?.innerHTML||""}connectedCallback(){super.connectedCallback(),r0.instance.apply(this,"gds-dropdown"),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleValueChange()})}render(){return rJ`
      ${oN(this.label&&!this.hideLabel,()=>rJ`<label for="trigger">${this.label}</label>`)}

      <span class="form-info"><slot name="sub-label"></slot></span>

      <gds-popover
        .label=${this.label}
        .open=${this.open}
        .calcMaxWidth=${e=>this.syncPopoverWidth?`${e.offsetWidth}px`:"auto"}
        .calcMaxHeight=${ot(this,ek)}
        .disableMobileStyles=${this.disableMobileStyles}
        @gds-ui-state=${e=>this.open=e.detail.open}
      >
        <button
          id="trigger"
          name="trigger"
          aria-haspopup="listbox"
          slot="trigger"
          role="combobox"
          aria-owns="listbox"
          aria-controls="listbox"
          aria-expanded="${this.open}"
          aria-label="${this.label}"
          part="trigger"
          class=${rv({small:"small"===this.size})}
        >
          <slot name="trigger">
            <span>${ir(this.displayValue)}</span>
          </slot>
          <div class="icon">
            <gds-icon-chevron-bottom></gds-icon-chevron-bottom>
          </div>
        </button>
        ${oN(this.searchable,()=>rJ`<input
              id="searchinput"
              type="text"
              aria-label="${iD("Filter available options")}"
              placeholder="${iD("Search")}"
              @keydown=${ot(this,e$)}
              @keyup=${ot(this,e_)}
            />`)}
        <gds-listbox
          id="listbox"
          .multiple="${iw(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${oi(this,eC,eA)}"
          @gds-focus="${ot(this,eE)}"
          @keydown=${ot(this,eS)}
        >
          <slot gds-allow="gds-option gds-menu-heading"></slot>
        </gds-listbox>
      </gds-popover>

      <span class="form-info"
        ><slot name="message">${this.validationMessage}</slot></span
      >
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){if(this.requestUpdate(),this.multiple){this._handleValueChange();return}void 0===this.value?this.placeholder?this.value=this.placeholder.value:this.value=this.options[0]?.value:this.placeholder||void 0!==this.options.find(e=>this.compareWith(e.value,this.value))||(this.options[0]&&(this.options[0].selected=!0),this.value=this.options[0]?.value)}_handleValueChange(){this._elListbox.then(e=>{e&&(Array.isArray(this.value)?e.selection=this.value:e.selection=[this.value])})}_onOpenChange(){let e=this.open;Array.from(ot(this,ew)).forEach(t=>t.hidden=!e),e?oi(this,eT,eM).call(this):(oi(this,ez,eD).call(this),this._elSearchInput&&(this._elSearchInput.value="")),this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:e},bubbles:!0,composed:!0}))}};ew=new WeakMap,ek=new WeakMap,e_=new WeakMap,e$=new WeakMap,eS=new WeakMap,eE=new WeakMap,eC=new WeakSet,eA=function(){this._elListbox.then(e=>{this.multiple?this.value=e.selection.map(e=>e.value):(this.value=e.selection[0]?.value,this.open=!1,setTimeout(()=>this._elTriggerBtn?.focus(),0)),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))})},eT=new WeakSet,eM=function(){this.addEventListener("blur",ot(this,eF)),this.addEventListener("gds-blur",ot(this,eF)),this.addEventListener("keydown",ot(this,eW))},ez=new WeakSet,eD=function(){this.removeEventListener("blur",ot(this,eF)),this.removeEventListener("gds-blur",ot(this,eF)),this.removeEventListener("keydown",ot(this,eW))},eF=new WeakMap,eW=new WeakMap,lM.styles=[it,lT],lM.shadowRootOptions={mode:"open",delegatesFocus:!0},s9([oD()],lM.prototype,"label",2),s9([oD({type:Boolean,reflect:!0})],lM.prototype,"open",2),s9([oD({type:Boolean,reflect:!0})],lM.prototype,"searchable",2),s9([oD({type:Boolean,reflect:!0})],lM.prototype,"multiple",2),s9([oD()],lM.prototype,"compareWith",2),s9([oD()],lM.prototype,"searchFilter",2),s9([oD({type:Boolean,attribute:"sync-popover-width"})],lM.prototype,"syncPopoverWidth",2),s9([oD({type:Number,attribute:"max-height"})],lM.prototype,"maxHeight",2),s9([oD()],lM.prototype,"size",2),s9([oD({type:Boolean,attribute:"hide-label"})],lM.prototype,"hideLabel",2),s9([oD()],lM.prototype,"disableMobileStyles",2),s9([oL("#trigger")],lM.prototype,"_elTriggerBtn",2),s9([oO("#listbox")],lM.prototype,"_elListbox",2),s9([oL("#searchinput")],lM.prototype,"_elSearchInput",2),s9([function(e={attributes:!0,childList:!0,subtree:!1,characterData:!0}){return(t,s,o)=>{let r;let i=t.connectedCallback,n=t.disconnectedCallback;t.connectedCallback=function(){i?.call(this),(r=new MutationObserver((e,t)=>{o.value?.call(this)})).observe(this,e)},t.disconnectedCallback=function(){n?.call(this),r.disconnect()}}}({attributes:!0,childList:!0,subtree:!0,characterData:!0})],lM.prototype,"_handleLightDOMChange",1),s9([r2("value")],lM.prototype,"_handleValueChange",1),s9([r2("open")],lM.prototype,"_onOpenChange",1),lM=s9([rZ("gds-dropdown")],lM);var lz=class extends rI{constructor(){super(...arguments),os(this,eU),os(this,eI),os(this,eq),os(this,eZ),os(this,eK),this.value=0,this.length=2,this.min=0,this.max=Number.MAX_SAFE_INTEGER,this.displayValue=oi(this,eq,eG).call(this,this.value,this.length),os(this,eL,""),os(this,eO,()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=2===this.length?this.min:new Date().getFullYear()-1),this.value=oi(this,eZ,eX).call(this,e+1),oi(this,eI,eY).call(this)}),os(this,eN,()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=2===this.length?this.max:new Date().getFullYear()+1),this.value=oi(this,eZ,eX).call(this,e-1),oi(this,eI,eY).call(this)}),os(this,eP,e=>{e.stopPropagation(),e.preventDefault(),this.focus()}),os(this,eR,()=>{oi(this,eK,eJ).call(this)}),os(this,eH,()=>{""!==ot(this,eL)&&(oi(this,eK,eJ).call(this),this.value=oi(this,eZ,eX).call(this,parseInt(this.value.toString())),oi(this,eI,eY).call(this))}),os(this,eB,e=>{e.stopPropagation(),e.preventDefault(),e.deltaY>0?ot(this,eN).call(this):ot(this,eO).call(this)}),os(this,eV,e=>{let t=!1;if("ArrowUp"===e.key)ot(this,eO).call(this),t=!0;else if("ArrowDown"===e.key)ot(this,eN).call(this),t=!0;else{let s=parseInt(e.key);isNaN(s)||(ot(this,eL).length<this.length&&(oo(this,eL,ot(this,eL)+s.toString()),this.value=parseInt(ot(this,eL))),ot(this,eL).length===this.length&&(this.value=oi(this,eZ,eX).call(this,this.value),oi(this,eK,eJ).call(this),oi(this,eU,ej).call(this),oi(this,eI,eY).call(this)),t=!0)}t&&(e.preventDefault(),e.stopPropagation())})}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.setAttribute("role","spinbutton"),this.setAttribute("tabindex","0"),this.addEventListener("wheel",ot(this,eB)),this.addEventListener("keydown",ot(this,eV)),this.addEventListener("blur",ot(this,eH)),this.addEventListener("focus",ot(this,eR)),this.addEventListener("click",ot(this,eP)),this.addEventListener("mousedown",ot(this,eP))}focus(e){super.focus(e),ot(this,eR).call(this)}render(){return rJ`${this.displayValue}`}_refreshDisplayValue(){this.displayValue=oi(this,eq,eG).call(this,this.value,this.length),this.setAttribute("aria-valuetext",this.value.toString())}};eL=new WeakMap,eO=new WeakMap,eN=new WeakMap,eP=new WeakMap,eR=new WeakMap,eH=new WeakMap,eB=new WeakMap,eV=new WeakMap,eU=new WeakSet,ej=function(){let e=this.nextElementSibling;for(;e;){if(e instanceof lz){e.focus();break}e=e.nextElementSibling}},eI=new WeakSet,eY=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value.toString()}}))},eq=new WeakSet,eG=function(e,t){return String(e).padStart(t,"0")},eZ=new WeakSet,eX=function(e){return Math.max(this.min,Math.min(this.max,e))},eK=new WeakSet,eJ=function(){oo(this,eL,"")},lz.formAssociated=!0,s9([oD({type:Number})],lz.prototype,"value",2),s9([oD({type:Number})],lz.prototype,"length",2),s9([oD({type:Number,attribute:"aria-valuemin"})],lz.prototype,"min",2),s9([oD({type:Number,attribute:"aria-valuemax"})],lz.prototype,"max",2),s9([oF()],lz.prototype,"displayValue",2),s9([r2("value")],lz.prototype,"_refreshDisplayValue",1),lz=s9([rZ("gds-date-part-spinner")],lz);var lD=class extends il{};lD._regularSVG='<path d="M3.75 9.75H20.25M7.75 4.75V2.75M16.25 4.75V2.75M3.75 4.75H20.25V20.25H3.75V4.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',lD._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 2C8.16421 2 8.5 2.33579 8.5 2.75V4H15.5V2.75C15.5 2.33579 15.8358 2 16.25 2C16.6642 2 17 2.33579 17 2.75V4H20.25C20.6642 4 21 4.33579 21 4.75V20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25V4.75C3 4.33579 3.33579 4 3.75 4H7V2.75C7 2.33579 7.33579 2 7.75 2ZM4.5 10.5V19.5H19.5V10.5H4.5Z" fill="currentColor"/>',lD._name="calendar",lD=s9([rZ("gds-icon-calendar")],lD);var lF=class extends il{};lF._regularSVG='<path d="M15 20L7 12L15 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',lF._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5303 3.46967C15.8232 3.76256 15.8232 4.23744 15.5303 4.53033L8.06066 12L15.5303 19.4697C15.8232 19.7626 15.8232 20.2374 15.5303 20.5303C15.2374 20.8232 14.7626 20.8232 14.4697 20.5303L6.46967 12.5303C6.32902 12.3897 6.25 12.1989 6.25 12C6.25 11.8011 6.32902 11.6103 6.46967 11.4697L14.4697 3.46967C14.7626 3.17678 15.2374 3.17678 15.5303 3.46967Z" fill="currentColor"/>',lF._name="chevron-left",lF=s9([rZ("gds-icon-chevron-left")],lF);var lW=class extends il{};lW._regularSVG='<path d="M9 4L17 12L9 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',lW._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M8.46967 3.46967C8.76256 3.17678 9.23744 3.17678 9.53033 3.46967L17.5303 11.4697C17.671 11.6103 17.75 11.8011 17.75 12C17.75 12.1989 17.671 12.3897 17.5303 12.5303L9.53033 20.5303C9.23744 20.8232 8.76256 20.8232 8.46967 20.5303C8.17678 20.2374 8.17678 19.7626 8.46967 19.4697L15.9393 12L8.46967 4.53033C8.17678 4.23744 8.17678 3.76256 8.46967 3.46967Z" fill="currentColor"/>',lW._name="chevron-right",lW=s9([rZ("gds-icon-chevron-right")],lW);var lL=rC`
  @layer base, reset;

  @layer base {
    :host {
      font-family: inherit;
      display: flex;
      flex-direction: column;
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding-inline: var(--gds-space-s);
      padding-block-start: var(--gds-space-m);
      gap: var(--gds-space-xs);
      box-sizing: border-box;
    }

    .header gds-dropdown.month {
      min-width: 140px;
      flex: 1;
    }

    .header gds-dropdown.year {
      width: 110px;
    }

    .footer {
      display: flex;
      justify-content: space-between;
      padding-inline: var(--gds-space-s);
      padding-block-end: var(--gds-space-s);
    }

    label {
      font-size: var(--gds-text-size-detail-m);
      line-height: var(--gds-text-line-height-detail-m);
      font-weight: var(--gds-text-weight-book);
      font-family: inherit;
    }

    .form-info {
      font-size: var(--gds-text-size-detail-s);
      line-height: var(--gds-text-line-height-detail-s);
      font-weight: var(--gds-text-weight-regular);
    }

    .field {
      display: flex;
      justify-content: space-between;
      gap: var(--gds-space-2xs);
      padding: var(--gds-space-2xs);
      border-radius: var(--gds-space-xs);
      font-size: var(--gds-text-size-detail-m);
      line-height: var(--gds-text-line-height-detail-m);
      font-weight: var(--gds-text-weight-regular);
      font-family: inherit;
      overflow: hidden;
      margin-block: var(--gds-space-xs);
      max-width: 100%;
      cursor: pointer;
      color: currentColor;
      height: var(--gds-space-3xl);
      box-sizing: border-box;
      border-width: var(--gds-space-4xs);
      border-style: solid;

      // TODO: Update colors with tokens
      border-color: #6f6f6f;
      color: #1b1b1b;
      background-color: #e2e2e2;

      &:hover {
        background-color: #cecece;
      }

      .input {
        display: flex;
        align-items: center;
        flex-direction: row;
        max-width: max-content;
        text-transform: uppercase;
        flex: 1;
        font-variant-numeric: tabular-nums;

        &:focus-within span {
          opacity: 0;
        }

        .spinner {
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          height: 100%;
          outline-color: currentcolor;
          outline-offset: -4px;
          outline-width: var(--gds-space-3xs);
          box-sizing: border-box;
          border-radius: var(--gds-space-xs);
          padding-inline: 1ch;

          &:focus-visible {
            outline-style: solid;
          }
        }
      }

      button {
        appearance: none;
        background: transparent;
        border: 0;
        box-sizing: border-box;
        color: currentColor;
        cursor: pointer;
        aspect-ratio: 1;
        margin: 0;
        padding: 0;
        outline-color: inherit;
        outline-offset: -4px;
        border-radius: var(--gds-space-xs);
        padding-top: var(--gds-space-3xs);
        font-family: inherit;

        &:focus-visible,
        &:hover {
          outline: var(--gds-space-3xs) solid currentcolor;
        }
      }

      &.small {
        height: var(--gds-space-xl);
        font-size: var(--gds-text-size-detail-s);
        padding: 0;

        button {
          outline-offset: -4px;
          border-radius: var(--gds-space-xs);
          padding-top: 3px;
        }
      }
    }
  }
`,lO=class extends iN{constructor(){super(...arguments),os(this,e0),os(this,e2),os(this,e5),os(this,e6),os(this,e8),os(this,te),os(this,ts),os(this,ty),os(this,tw),os(this,t_),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.open=!1,this.label="",this.showWeekNumbers=!1,this.size="medium",this.hideLabel=!1,this.disabledWeekends=!1,this._focusedMonth=new Date().getMonth(),this._focusedYear=new Date().getFullYear(),this._dateFormatLayout=oi(this,ty,tv).call(this,"y-m-d"),os(this,eQ,void 0),os(this,tr,e=>{this._elTrigger.then(t=>{e.relatedTarget?.parentElement!==e.target&&document.getSelection()?.removeAllRanges()})}),os(this,ti,e=>{this._elTrigger.then(e=>{document.getSelection()?.removeAllRanges();let t=new Range;t.setStart(e.firstChild,0),t.setEnd(e.lastChild,4),document.getSelection()?.addRange(t)})}),os(this,tn,e=>{this._elField.then(t=>{e.currentTarget===t&&(e.preventDefault(),e.clipboardData?.setData("text/plain",this.displayValue))})}),os(this,tl,e=>{this._elField.then(t=>{if(e.currentTarget!==t)return;e.preventDefault();let s=e.clipboardData?.getData("text/plain");if(!s)return;let o=new Date("-"),r="Invalid Date",i=s.split(this._dateFormatLayout.delimiter);if(3===i.length){let e=this._dateFormatLayout.layout,t=parseInt(i[e.findIndex(e=>"y"===e.token)]),s=parseInt(i[e.findIndex(e=>"m"===e.token)])-1,r=parseInt(i[e.findIndex(e=>"d"===e.token)]);isNaN(t)||isNaN(s)||isNaN(r)||(o=new Date(`${t}-${s+1}-${r}`))}(o.toString()!==r||(o=new Date(s)).toString()!==r)&&(this.value=o,oi(this,te,tt).call(this))})}),os(this,ta,e=>{this._elSpinners[0]?.focus()}),os(this,td,e=>{e.stopPropagation(),this.value=e.detail,this.open=!1,oi(this,te,tt).call(this)}),os(this,tc,e=>{e.stopPropagation(),this._focusedMonth=e.target?.value}),os(this,th,e=>{e.stopPropagation(),this._focusedYear=e.target?.value}),os(this,tp,e=>{this._focusedMonth++,this._focusedMonth>11&&(this._focusedMonth=0,this._focusedYear++)}),os(this,tg,e=>{this._focusedMonth--,this._focusedMonth<0&&(this._focusedMonth=11,this._focusedYear--)}),os(this,tu,async()=>{this._focusedMonth=(await this._elCalendar).focusedMonth,this._focusedYear=(await this._elCalendar).focusedYear,this.value=(await this._elCalendar).focusedDate,this.requestUpdate(),oi(this,ts,to).call(this)}),os(this,tf,async e=>{if(e.target===e.currentTarget){if(this.open=e.detail.open,"close"===e.detail.reason){let e=(await this._elCalendar).value;lk(e||new Date(0),ot(this,eQ)||new Date(0))||(this.value=e,oi(this,te,tt).call(this)),this.value&&(this._focusedMonth=this.value.getMonth(),this._focusedYear=this.value.getFullYear())}"cancel"===e.detail.reason&&(this.value=ot(this,eQ))}}),os(this,tb,e=>{let t=Array.from(this._elSpinners).findIndex(t=>t===e.target);if("ArrowRight"===e.key){let e=this._elSpinners[t+1];e&&e.focus()}if("ArrowLeft"===e.key){let e=this._elSpinners[t-1];e&&e.focus()}}),os(this,tm,(e,t)=>{ot(this,tx)[t]=e;let s=new Date;s.setFullYear(parseInt(ot(this,tx).year)),s.setMonth(parseInt(ot(this,tx).month)-1),s.setDate(parseInt(ot(this,tx).day)),s.setHours(12,0,0,0),"Invalid Date"!==s.toString()&&(this.value=s,oi(this,te,tt).call(this))}),os(this,tx,{year:"yyyy",month:"mm",day:"dd"})}get type(){return"gds-datepicker"}get dateformat(){return this._dateFormatLayout.layout.map(e=>e.token).join(this._dateFormatLayout.delimiter)}set dateformat(e){this._dateFormatLayout=oi(this,ty,tv).call(this,e)}async getFocusedDate(){return this.open?this._elCalendar.then(e=>e.focusedDate):void 0}get displayValue(){return this._elInput.innerText.replace(/\s+/g,"")}async test_getDateCell(e){return this._elCalendar.then(t=>t.getDateCell(e))}connectedCallback(){super.connectedCallback(),r0.instance.apply(this,"gds-datepicker")}render(){return rJ`${oN(this.label&&!this.hideLabel,()=>rJ`<label for="spinner-0" id="label">${this.label}</label>`)}

      <div class="form-info"><slot name="sub-label"></slot></div>

      <div
        class=${rv({field:!0,small:"small"===this.size})}
        id="field"
        @click=${ot(this,ta)}
        @copy=${ot(this,tn)}
        @paste=${ot(this,tl)}
      >
        <div
          class=${rv({input:!0,"is-placeholder":!this.value})}
          @focusout=${ot(this,tr)}
        >
          ${function*(e,t){let s="function"==typeof t;if(void 0!==e){let o=-1;for(let r of e)o>-1&&(yield s?t(o):t),o++,yield r}}(function*(e,t){if(void 0!==e){let s=0;for(let o of e)yield t(o,s++)}}(this._dateFormatLayout.layout,(e,t)=>rJ`<gds-date-part-spinner
                  id="spinner-${t}"
                  class="spinner"
                  .length=${"y"===e.token?4:2}
                  .value=${ot(this,tx)[e.name]}
                  aria-valuemin=${oi(this,e6,e4).call(this,e.name)}
                  aria-valuemax=${oi(this,e8,e9).call(this,e.name)}
                  aria-label=${oi(this,e5,e7).call(this,e.name)}
                  aria-describedby="label"
                  @keydown=${ot(this,tb)}
                  @change=${t=>ot(this,tm).call(this,t.detail.value,e.name)}
                  @focus=${ot(this,ti)}
                  @touchend=${e=>{this.open=!0,e.preventDefault()}}
                ></gds-date-part-spinner>`),rJ`<span>${this._dateFormatLayout.delimiter}</span>`)}
        </div>
        <button
          id="calendar-button"
          aria-label="${iD("Open calendar modal")}"
          aria-haspopup="menu"
          aria-expanded=${this.open}
          aria-controls="calendar-popover"
          aria-describedby="label"
          size=${this.size}
        >
          <gds-icon-calendar></gds-icon-calendar>
        </button>
      </div>

      <div class="form-info">
        <slot name="message">${this.validationMessage}</slot>
      </div>

      <gds-popover
        .triggerRef=${this._elTrigger}
        .anchorRef=${this._elField}
        .open=${this.open}
        @gds-ui-state=${ot(this,tf)}
        label=${this.label}
        id="calendar-popover"
        .placement=${"bottom-end"}
        .calcMinWidth=${()=>this.showWeekNumbers?"350px":"305px"}
        .useModalInMobileView=${!0}
        @focusin=${async e=>{e.target?.id!=="calendar-popover"||this._elCalendar.then(e=>e.focus())}}
      >
        <div class="header">
          <gds-button
            @click=${ot(this,tg)}
            aria-label=${iD("Previous month")}
            rank="tertiary"
            size="small"
          >
            <gds-icon-chevron-left></gds-icon-chevron-left>
          </gds-button>
          <gds-dropdown
            .value=${this._focusedMonth.toString()}
            @change=${ot(this,tc)}
            .maxHeight=${300}
            label="${iD("Month")}"
            size="small"
            class="month"
            hide-label
          >
            <gds-option value="0">${iD("January")}</gds-option>
            <gds-option value="1">${iD("February")}</gds-option>
            <gds-option value="2">${iD("March")}</gds-option>
            <gds-option value="3">${iD("April")}</gds-option>
            <gds-option value="4">${iD("May")}</gds-option>
            <gds-option value="5">${iD("June")}</gds-option>
            <gds-option value="6">${iD("July")}</gds-option>
            <gds-option value="7">${iD("August")}</gds-option>
            <gds-option value="8">${iD("September")}</gds-option>
            <gds-option value="9">${iD("October")}</gds-option>
            <gds-option value="10">${iD("November")}</gds-option>
            <gds-option value="11">${iD("December")}</gds-option>
          </gds-dropdown>
          <gds-dropdown
            .value=${this._focusedYear.toString()}
            @change=${ot(this,th)}
            .maxHeight=${300}
            label="${iD("Year")}"
            size="small"
            class="year"
            hide-label
          >
            ${lp(ot(this,tw,tk),e=>e,e=>rJ`<gds-option value=${e}>${e}</gds-option>`)}
          </gds-dropdown>
          <gds-button
            @click=${ot(this,tp)}
            aria-label=${iD("Next month")}
            rank="tertiary"
            size="small"
          >
            <gds-icon-chevron-right></gds-icon-chevron-right>
          </gds-button>
        </div>

        <gds-calendar
          id="calendar"
          @change=${ot(this,td)}
          @gds-date-focused=${ot(this,tu)}
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
            @click=${e=>{e.stopPropagation(),this.value=void 0,this.open=!1,oi(this,te,tt).call(this)}}
          >
            ${iD("Clear")}
          </gds-button>
          ${lc(oi(this,e0,e1).call(this),o9)}
          <gds-button
            rank="tertiary"
            size="small"
            @click=${e=>{e.stopPropagation(),oi(this,e2,e3).call(this,new Date)}}
          >
            ${iD("Today")}
          </gds-button>
        </div>
      </gds-popover> `}_getValidityAnchor(){return this._elSpinners[0]}_handleValueChange(){if(!this.value){oo(this,tx,{year:"yyyy",month:"mm",day:"dd"});return}let e=this.value;this._focusedMonth=e.getMonth(),this._focusedYear=e.getFullYear();let t=e.getFullYear().toString(),s=(e.getMonth()+1).toString().padStart(2,"0"),o=e.getDate().toString().padStart(2,"0");oo(this,tx,{year:t,month:s,day:o})}_handleOpenChange(){this.open&&(oo(this,eQ,this.value),this._elCalendar.then(e=>e.focus()))}};eQ=new WeakMap,e0=new WeakSet,e1=async function(){let e;let t=await this.getFocusedDate(),s="";return t&&t>this.max?(s=iD("Last available date"),e=e=>{e.stopPropagation(),oi(this,e2,e3).call(this,this.max)}):t&&t<this.min&&(s=iD("First available date"),e=e=>{e.stopPropagation(),oi(this,e2,e3).call(this,this.min)}),rJ`${oN(s.length>0,()=>rJ`<gds-button rank="tertiary" size="small" @click=${e}>
          ${s}
        </gds-button>`,()=>o9)}`},e2=new WeakSet,e3=function(e){let t=new Date(e);this._elCalendar.then(e=>e.focusedDate=t).then(ot(this,tu))},e5=new WeakSet,e7=function(e){return({year:iD("Year"),month:iD("Month"),day:iD("Day")})[e]},e6=new WeakSet,e4=function(e){return({year:1900,month:1,day:1})[e]},e8=new WeakSet,e9=function(e){return({year:9999,month:12,day:31})[e]},te=new WeakSet,tt=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value}}))},ts=new WeakSet,to=function(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value}}))},tr=new WeakMap,ti=new WeakMap,tn=new WeakMap,tl=new WeakMap,ta=new WeakMap,td=new WeakMap,tc=new WeakMap,th=new WeakMap,tp=new WeakMap,tg=new WeakMap,tu=new WeakMap,tf=new WeakMap,tb=new WeakMap,ty=new WeakSet,tv=function(e){let t=e.replace(/[a-z0-9]/gi,"")[0],s=e.split(t),o=s.findIndex(e=>"y"===e),r=s.findIndex(e=>"m"===e),i=s.findIndex(e=>"d"===e);if(-1===o||-1===r||-1===i)throw Error("Invalid date format for <gds-datepicker>");return{delimiter:t,layout:[o,r,i].sort((e,t)=>e-t).map(e=>s[e]).map(e=>({token:e,name:"y"===e?"year":"m"===e?"month":"day"}))}},tm=new WeakMap,tx=new WeakMap,tw=new WeakSet,tk=function(){let e=this.min.getFullYear(),t=this.max.getFullYear(),s=ot(this,t_,t$),o=this.value?.getFullYear();return{*[Symbol.iterator](){s&&(yield o);for(let s=e;s<=t;s++)yield s}}},t_=new WeakSet,t$=function(){return!!this.value&&(this.value.getFullYear()<this.min.getFullYear()||this.value.getFullYear()>this.max.getFullYear())},lO.styles=[it,lL],lO.shadowRootOptions={mode:"open",delegatesFocus:!0},s9([oD({converter:l_})],lO.prototype,"value",2),s9([oD({converter:l_})],lO.prototype,"min",2),s9([oD({converter:l_})],lO.prototype,"max",2),s9([oD({type:Boolean})],lO.prototype,"open",2),s9([oD()],lO.prototype,"label",2),s9([oD({type:Boolean,attribute:"show-week-numbers"})],lO.prototype,"showWeekNumbers",2),s9([oD()],lO.prototype,"size",2),s9([oD({type:Boolean,attribute:"hide-label"})],lO.prototype,"hideLabel",2),s9([oD()],lO.prototype,"dateformat",1),s9([oD({type:Boolean,attribute:"disabled-weekends"})],lO.prototype,"disabledWeekends",2),s9([oD({converter:{fromAttribute:e=>e.split(",").map(e=>new Date(e.trim())),toAttribute:e=>JSON.stringify(e.map(e=>e.toISOString()))},attribute:"disabled-dates"})],lO.prototype,"disabledDates",2),s9([oO("#calendar-button")],lO.prototype,"test_calendarButton",2),s9([oF()],lO.prototype,"_focusedMonth",2),s9([oF()],lO.prototype,"_focusedYear",2),s9([oF()],lO.prototype,"_dateFormatLayout",2),s9([oO("#calendar")],lO.prototype,"_elCalendar",2),s9([oO("#calendar-button")],lO.prototype,"_elTrigger",2),s9([oO("#field")],lO.prototype,"_elField",2),s9([(t="[role=spinbutton]",(e,o)=>oW(e,o,{get(){return(this.renderRoot??(s??=document.createDocumentFragment())).querySelectorAll(t)}}))],lO.prototype,"_elSpinners",2),s9([oL(".input")],lO.prototype,"_elInput",2),s9([r2("value")],lO.prototype,"_handleValueChange",1),s9([r2("open")],lO.prototype,"_handleOpenChange",1),lO=s9([rZ("gds-datepicker")],lO);var lN={0:"0px","2xs":"320px",xs:"425px",s:"768px",m:"1024px",l:"1280px",xl:"1440px","2xl":"2560px","3xl":"3840px","4xl":"4320px","5xl":"6016px","6xl":"7680px"},lP=/^([<|>]=?)?([0-9a-z]+)/,lR=["{","}",";",":",","],lH=[" ","/n"];function lB(e){return(t,s)=>{let o=e?.selector??String(":host"),r=e?.property??String(s),i=e?.valueTemplate??(e=>`var(--gds-space-${e}, 0)`),n=e?.styleTemplate;oD({attribute:e?.attribute})(t,s),r2(s)(t,s,{value:function(e,t){let l=function(e){let t=[],s={breakpoint:"-",values:[]},o=()=>({sel:"",values:[]}),r=o();for(let i of e){if(!lR.includes(i)){r.values.push(i);continue}if("{"===i&&(s={breakpoint:r.values.join(","),values:[]},r=o()),";"===i&&(0===t.length&&t.push(s),r.values.length>0&&(s.values.push(r),r=o())),":"===i){let e=r.values.pop()??"";r.sel=e}s&&"}"===i&&(s.values.push(r),r=o(),t.push(s))}return r.values.length>0&&s.values.push(r),0===t.length&&t.push(s),t}(function(e){let t=[],s="";for(let o=0;o<e.length;o++){let r=e[o];if(lH.includes(r)||(s+=r),lR.includes(r)){t.push(s.slice(0,-1)),t.push(r),s="";continue}if(lH.includes(r)||o===e.length-1){t.push(s),s="";continue}}return t.filter(e=>""!==e)}(t)),a=function(e,t,s,o=e=>e,r=(e,t)=>`${e}: ${t.join(" ")};`){let i="";for(let n of s){let s=("-"===n.breakpoint?[{condition:">=",value:"0"}]:n.breakpoint.split(",").map(e=>{let t=e.trim().match(lP);if(!t)throw Error(`Invalid breakpoint specifier: ${e}`);return{condition:t[1],value:t[2]}})).map(e=>`(${e.condition?.includes("<")?"max-width":"min-width"}: ${lN[e.value]??e.value})`).join(" and ");i+=`@media ${s} {${n.values.map(s=>{let i=e;s.sel.length>0&&(i=":host"===e?`:host(:${s.sel})`:`${e}:${s.sel}`);let n=r(t,s.values.map(o));return"hover"===s.sel?`@media (hover: hover) {${i}{${n}}}`:`${i}{${n}}`}).join("")}}`}return i}(o,r,l,i.bind(this),n?.bind(this));this[`__${String(s)}_ast`]=l,this._dynamicStylesController.inject(`sep_${String(s)}`,rE(a))}})}}var lV=rC`
  :host {
    box-sizing: border-box;
  }
`,lU=class extends rQ{constructor(){super(...arguments),this.display="block",this.level="2"}render(){return rJ`<slot></slot>`}};lU.styles=[it,lV],s9([lB({valueTemplate:e=>e})],lU.prototype,"display",2),s9([oD()],lU.prototype,"level",2),s9([lB({valueTemplate:e=>e})],lU.prototype,"place-items",2),s9([lB({valueTemplate:e=>e})],lU.prototype,"place-content",2),s9([lB({valueTemplate:function(e){let t,s,[o,r]=e.split("/");return(e=>{let t=e.trim();return t.startsWith("#")||t.startsWith("rgb(")||t.startsWith("rgba(")||t.startsWith("hsl(")||t.startsWith("hsla(")})(o)?r?`color-mix(in srgb, ${o} ${100*parseFloat(r)}%, transparent 0%)`:o:(t=this.level,s=o,`var(--gds-color-l${t}-content-${s})`)}})],lU.prototype,"color",2),s9([lB({valueTemplate:function(e){let t,s,[o,r]=e.split("/");return(e=>{let t=e.trim();return t.startsWith("#")||t.startsWith("rgb(")||t.startsWith("rgba(")||t.startsWith("hsl(")||t.startsWith("hsla(")})(o)?r?`color-mix(in srgb, ${o} ${100*parseFloat(r)}%, transparent 0%)`:o:(t=this.level,s=o,`var(--gds-color-l${t}-background-${s})`)}})],lU.prototype,"background",2),s9([lB({valueTemplate:function(e){let t;let[s,o]=e.split("/");return`var(--gds-space-${s}) solid ${o?(e=>{let t=e.trim();return t.startsWith("#")||t.startsWith("rgb(")||t.startsWith("rgba(")||t.startsWith("hsl(")||t.startsWith("hsla(")})(o)?o:(t=this.level,`var(--gds-color-l${t}-border-${o})`):"currentColor"}`},styleTemplate:(e,t)=>{let s=t[0],o=t.length>1?t[1]:s,r=t.length>2?t[2]:s,i=t.length>3?t[3]:s;return`
        border-top: ${s}; 
        border-right: ${o}; 
        border-bottom: ${r}; 
        border-left: ${i};
      `}})],lU.prototype,"border",2),s9([lB({valueTemplate:function(e){let t;let[s]=e.split("/");return s?(e=>{let t=e.trim();return t.startsWith("#")||t.startsWith("rgb(")||t.startsWith("rgba(")||t.startsWith("hsl(")||t.startsWith("hsla(")})(s)?s:(t=this.level,`var(--gds-color-l${t}-border-${s})`):"currentColor"},styleTemplate:(e,t)=>{let s=t[0],o=t.length>1?t[1]:s,r=t.length>2?t[2]:s,i=t.length>3?t[3]:s;return`
        border-top-color: ${s}; 
        border-right-color: ${o}; 
        border-bottom-color: ${r}; 
        border-left-color: ${i};
      `}})],lU.prototype,"border-color",2),s9([lB({styleTemplate:(e,t)=>{let s=t[0],o=t.length>1?t[1]:s,r=t.length>2?t[2]:s,i=t.length>3?t[3]:s;return`
        border-top-width: ${s}; 
        border-right-width: ${o}; 
        border-bottom-width: ${r}; 
        border-left-width: ${i};
        border-style: solid;
      `}})],lU.prototype,"border-width",2),s9([lB({valueTemplate:e=>`var(--gds-space-${e})`})],lU.prototype,"border-radius",2),s9([lB({valueTemplate:e=>e})],lU.prototype,"opacity",2),s9([lB()],lU.prototype,"padding",2),s9([lB()],lU.prototype,"padding-inline",2),s9([lB()],lU.prototype,"padding-block",2),s9([lB({valueTemplate:e=>"auto"===e?"auto":`var(--gds-space-${e})`,styleTemplate:(e,t)=>{let s=e=>"auto"===e?"auto":`${e}`,o=s(t[0]),r=t.length>1?s(t[1]):o,i=t.length>2?s(t[2]):o,n=t.length>3?s(t[3]):r;return`margin: ${o} ${r} ${i} ${n};`}})],lU.prototype,"margin",2),s9([lB({valueTemplate:e=>e})],lU.prototype,"position",2),s9([lB({valueTemplate:e=>e})],lU.prototype,"inset",2),s9([lB({valueTemplate:e=>e})],lU.prototype,"overflow",2),s9([lB({valueTemplate:e=>`${e}`})],lU.prototype,"grid-column",2),s9([lB({valueTemplate:e=>`${e}`})],lU.prototype,"grid-row",2),s9([lB({valueTemplate:e=>e})],lU.prototype,"height",2),s9([lB({valueTemplate:e=>e})],lU.prototype,"max-height",2),s9([lB({valueTemplate:e=>e})],lU.prototype,"min-height",2),s9([lB()],lU.prototype,"block-size",2),s9([lB()],lU.prototype,"min-block-size",2),s9([lB({valueTemplate:e=>e})],lU.prototype,"width",2),s9([lB({valueTemplate:e=>e})],lU.prototype,"max-width",2),s9([lB({valueTemplate:e=>e})],lU.prototype,"min-width",2),s9([lB()],lU.prototype,"inline-size",2),s9([lB({valueTemplate:e=>e})],lU.prototype,"cursor",2),s9([lB({valueTemplate:e=>e})],lU.prototype,"pointer-events",2),s9([lB({valueTemplate:e=>e})],lU.prototype,"user-select",2),s9([lB({valueTemplate:e=>e})],lU.prototype,"z-index",2),s9([lB({valueTemplate:e=>e})],lU.prototype,"transform",2),s9([lB({valueTemplate:e=>e})],lU.prototype,"transform-style",2),s9([lB({valueTemplate:e=>e})],lU.prototype,"transition",2),s9([lB({valueTemplate:e=>e})],lU.prototype,"transition-behavior",2),s9([lB({valueTemplate:e=>e})],lU.prototype,"animation",2),s9([lB({valueTemplate:e=>`${e}`,styleTemplate:(e,t)=>{let s=t[0];return`font-size: var(--gds-text-size-${s});line-height: var(--gds-text-line-height-${s});`}})],lU.prototype,"font-size",2),s9([lB({property:"font-weight",valueTemplate:e=>`var(--gds-text-weight-${e})`})],lU.prototype,"font-weight",2),lU=s9([rZ("gds-container")],lU);var lj=rC`
  :host {
    --_c: 12;
    --_grid-col: repeat(var(--_c), 1fr);
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
`,lI=class extends lU{constructor(){super(),this.display="grid",this.width="100%"}render(){return rJ`<slot></slot>`}};lI.styles=[it,lj],s9([lB({property:"--_c",valueTemplate:e=>e})],lI.prototype,"columns",2),s9([lB({styleTemplate:(e,t)=>{let s=t[0],o=t[1]||s;return`--_gap-column: ${s}; --_gap-row: ${o};`}})],lI.prototype,"gap",2),s9([lB({property:"--_col-width",valueTemplate:e=>`${e}px`})],lI.prototype,"auto-columns",2),lI=s9([rZ("gds-grid")],lI);var lY=class extends lU{render(){return rJ`<slot></slot>`}};lY.styles=[it],s9([lB({property:"box-shadow",valueTemplate:e=>`var(--gds-shadow-${e})`})],lY.prototype,"shadow",2),lY=s9([rZ("gds-card")],lY);var lq=rC`
  :host {
    box-sizing: border-box;
  }
`,lG=class extends lU{connectedCallback(){super.connectedCallback(),this.display="flex"}render(){return rJ`<slot></slot>`}};lG.styles=[it,lq],s9([lB({styleTemplate:(e,t)=>{let s=t[0],o=t[1]||s;return`gap: ${s} ${o};`}})],lG.prototype,"gap",2),s9([lB({valueTemplate:e=>e})],lG.prototype,"flex",2),s9([lB({valueTemplate:e=>e})],lG.prototype,"align-self",2),s9([lB({valueTemplate:e=>e})],lG.prototype,"align-items",2),s9([lB({valueTemplate:e=>e})],lG.prototype,"align-content",2),s9([lB({valueTemplate:e=>e})],lG.prototype,"justify-content",2),s9([lB({valueTemplate:e=>e})],lG.prototype,"place-content",2),s9([lB({valueTemplate:e=>e})],lG.prototype,"justify-items",2),s9([lB({valueTemplate:e=>e})],lG.prototype,"justify-self",2),s9([lB({property:"flex-direction",valueTemplate:e=>e})],lG.prototype,"flex-direction",2),lG=s9([rZ("gds-flex")],lG);var lZ=rC`
  :host {
    isolation: isolate;
  }

  [part='mask'] {
    position: absolute;
    inset: 0;
    z-index: -1;
    pointer-events: none;
  }

  [part='content'] {
    z-index: 1;
    position: absolute;
    inset: 0;
  }
`,lX=class extends lG{constructor(){super(),this["mask-size"]="cover",this["mask-repeat"]="no-repeat",this["mask-position"]="center",this.position="relative",this.inset="0"}render(){return ix`<div part="mask"></div>
      <div part="content"><slot></slot></div>`}};lX.styles=[it,lZ],s9([lB({selector:'[part="mask"]',valueTemplate:e=>{let[t]=e.split("/");return`linear-gradient(to ${t}, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 100%)`}})],lX.prototype,"mask-image",2),s9([lB({valueTemplate:e=>e,selector:'[part="mask"]'})],lX.prototype,"mask-size",2),s9([lB({valueTemplate:e=>e,selector:'[part="mask"]'})],lX.prototype,"mask-repeat",2),s9([lB({valueTemplate:e=>e,selector:'[part="mask"]'})],lX.prototype,"mask-position",2),s9([lB({selector:'[part="mask"]',valueTemplate:function(e){let[t,s]=e.split("/");return s?`color-mix(in srgb, var(--gds-color-${"l"+this.level}-background-${t}) ${100*parseFloat(s)}%, transparent 0%)`:`var(--gds-color-${"l"+this.level}-background-${t})`}})],lX.prototype,"background-color",2),s9([lB({valueTemplate:e=>e,selector:'[part="mask"]'})],lX.prototype,"backdrop-filter",2),lX=s9([rZ("gds-mask")],lX);var lK=rC`
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
`,lJ=class extends rQ{render(){return rJ`<figure><img src="${this.src}" alt="${this.alt}" /></figure>`}};lJ.styles=[it,lK],s9([lB({property:"aspect-ratio",selector:"figure",valueTemplate:e=>e})],lJ.prototype,"aspect-ratio",2),s9([lB({property:"object-position",selector:"img",valueTemplate:e=>e})],lJ.prototype,"position",2),s9([lB({property:"inset",selector:"figure",valueTemplate:e=>e})],lJ.prototype,"inset",2),s9([lB({property:"width",valueTemplate:e=>e})],lJ.prototype,"width",2),s9([lB({property:"height",valueTemplate:e=>e})],lJ.prototype,"height",2),s9([lB({property:"opacity",selector:"figure",valueTemplate:e=>e})],lJ.prototype,"opacity",2),s9([lB({property:"object-fit",selector:"img",valueTemplate:e=>e})],lJ.prototype,"object-fit",2),s9([oD()],lJ.prototype,"src",2),s9([oD()],lJ.prototype,"alt",2),s9([lB({property:"border-radius",selector:"figure",valueTemplate:e=>`var(--gds-space-${e})`})],lJ.prototype,"border-radius",2),lJ=s9([rZ("gds-img")],lJ);var lQ=rC`
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
`,l0=class extends rQ{applyVideoSettings(){this.videoElement&&(this.videoElement.src=this.src||"",this.videoElement.poster=this.poster||"",this.videoElement.muted=this.muted||!1,this.videoElement.autoplay=this.autoplay||!1,this.videoElement.loop=this.loop||!1,this.videoElement.playsInline=this.playsinline||!1)}render(){return rJ`<figure><video></video></figure>`}firstUpdated(){this.applyVideoSettings()}};l0.styles=[it,lQ],s9([lB({property:"aspect-ratio",selector:"figure",valueTemplate:e=>e})],l0.prototype,"aspect-ratio",2),s9([lB({property:"object-position",selector:"video",valueTemplate:e=>e})],l0.prototype,"object-position",2),s9([lB({property:"inset",selector:"figure",valueTemplate:e=>e})],l0.prototype,"inset",2),s9([lB({property:"width",valueTemplate:e=>e})],l0.prototype,"width",2),s9([lB({property:"height",valueTemplate:e=>e})],l0.prototype,"height",2),s9([lB({property:"opacity",selector:"figure",valueTemplate:e=>e})],l0.prototype,"opacity",2),s9([lB({property:"object-fit",selector:"video",valueTemplate:e=>e})],l0.prototype,"object-fit",2),s9([lB({property:"pointer-events",selector:"video",valueTemplate:e=>e})],l0.prototype,"pointer-events",2),s9([lB({property:"border-radius",selector:"figure",valueTemplate:e=>`var(--gds-space-${e})`})],l0.prototype,"border-radius",2),s9([oD()],l0.prototype,"src",2),s9([oD()],l0.prototype,"poster",2),s9([oD({type:Boolean})],l0.prototype,"muted",2),s9([oD({type:Boolean})],l0.prototype,"playsinline",2),s9([oD({type:Boolean})],l0.prototype,"autoplay",2),s9([oD({type:Boolean})],l0.prototype,"loop",2),s9([oL("video")],l0.prototype,"videoElement",2),l0=s9([rZ("gds-video")],l0);var l1=rC`
  :host {
    display: contents;
  }

  * {
    margin: unset;
    font-weight: inherit;
    font-size: inherit;
    line-height: inherit;
    text-wrap: inherit;
  }

  h1.no-size-set {
    font-size: var(--gds-text-size-heading-xl);
    line-height: var(--gds-text-line-height-heading-xl);
    font-weight: var(--gds-text-weight-regular);
  }

  h2.no-size-set {
    font-size: var(--gds-text-size-heading-l);
    line-height: var(--gds-text-line-height-heading-l);
    font-weight: var(--gds-text-weight-regular);
  }

  h3.no-size-set {
    font-size: var(--gds-text-size-heading-m);
    line-height: var(--gds-text-line-height-heading-m);
    font-weight: var(--gds-text-weight-regular);
  }

  h4.no-size-set {
    font-size: var(--gds-text-size-heading-s);
    line-height: var(--gds-text-line-height-heading-s);
    font-weight: var(--gds-text-weight-regular);
  }

  h5.no-size-set {
    font-size: var(--gds-text-size-heading-xs);
    line-height: var(--gds-text-line-height-heading-xs);
    font-weight: var(--gds-text-weight-regular);
  }

  h6.no-size-set {
    font-size: var(--gds-text-size-heading-2xs);
    line-height: var(--gds-text-line-height-heading-2xs);
    font-weight: var(--gds-text-weight-regular);
  }

  p.no-size-set,
  span.no-size-set,
  em.no-size-set,
  strong.no-size-set,
  mark.no-size-set {
    font-size: var(--gds-text-size-body-m);
    line-height: var(--gds-text-line-height-body-m);
  }

  small.no-size-set {
    font-size: var(--gds-text-size-detail-xs);
    line-height: var(--gds-text-line-height-detail-xs);
  }

  strong.no-weight-set {
    font-weight: var(--gds-text-weight-book);
  }

  .lines-set {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: var(--_lines);
  }
`,l2=class extends rQ{constructor(){super(...arguments),this.level="2",this.tag="span"}render(){let e=ib(encodeURI(this.tag)),t={"no-size-set":!this["font-size"],"no-weight-set":!this["font-weight"],"lines-set":!!this.lines};return ix`<${e} tag class=${rv(t)}><slot></slot></${e}>`}};l2.styles=[it,l1],s9([oD()],l2.prototype,"level",2),s9([oD({type:String})],l2.prototype,"tag",2),s9([lB({valueTemplate:e=>`${e}`,selector:"[tag]",styleTemplate:(e,t)=>{let s=t[0];return`font-size: var(--gds-text-size-${s});line-height: var(--gds-text-line-height-${s});`}})],l2.prototype,"font-size",2),s9([lB({property:"font-weight",selector:"[tag]",valueTemplate:e=>`var(--gds-text-weight-${e})`})],l2.prototype,"font-weight",2),s9([lB({property:"margin",selector:"[tag]",valueTemplate:e=>e})],l2.prototype,"margin",2),s9([lB({selector:"[tag]",valueTemplate:e=>e})],l2.prototype,"isolation",2),s9([lB({property:"text-wrap",selector:"[tag]",valueTemplate:e=>e})],l2.prototype,"text-wrap",2),s9([lB({property:"text-transform",selector:"[tag]",valueTemplate:e=>e})],l2.prototype,"text-transform",2),s9([lB({property:"max-width",selector:"[tag]",valueTemplate:e=>`${e}ch`})],l2.prototype,"max-width",2),s9([lB({property:"min-width",selector:"[tag]",valueTemplate:e=>`${e}ch`})],l2.prototype,"min-width",2),s9([lB({property:"text-align",selector:"[tag]",valueTemplate:e=>e})],l2.prototype,"text-align",2),s9([lB({property:"--_lines",selector:"[tag]",valueTemplate:e=>e})],l2.prototype,"lines",2),s9([lB({property:"color",selector:"[tag]",valueTemplate:function(e){let[t,s]=e.split("/");return s?`color-mix(in srgb, var(--gds-color-${"l"+this.level}-content-${t}) ${100*parseFloat(s)}%, transparent 0%)`:`var(--gds-color-${"l"+this.level}-content-${t})`}})],l2.prototype,"color",2),l2=s9([rZ("gds-text")],l2);var l3=rC`
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
`,l5=class extends rQ{render(){return rJ`<hr />`}};l5.styles=[it,l3],s9([lB({property:"color",valueTemplate:e=>{let[t,s]=e.split("/");return s?`color-mix(in srgb, var(--gds-sys-color-${t}) ${100*parseFloat(s)}%, transparent 0%)`:`var(--gds-sys-color-${t})`}})],l5.prototype,"color",2),s9([lB({property:"--_size",selector:"hr",valueTemplate:e=>`var(--gds-space-${e})`})],l5.prototype,"size",2),s9([lB({property:"opacity",selector:"hr",valueTemplate:e=>e})],l5.prototype,"opacity",2),l5=s9([rZ("gds-divider")],l5);var l7=class extends rQ{render(){return rJ`<div></div>`}};l7.styles=[it],s9([lB({property:"height",selector:"div",valueTemplate:e=>`var(--gds-space-${e})`})],l7.prototype,"size",2),l7=s9([rZ("gds-spacer")],l7);var l6=class extends rQ{connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}render(){return rJ`<slot></slot>`}};l6=s9([rZ("gds-list-item")],l6);var l4=class extends rQ{constructor(){super(...arguments),this.label=""}connectedCallback(){super.connectedCallback(),ik(this),r0.instance.apply(this,"gds-grouped-list")}render(){return rJ`${oN(this.label,()=>rJ`<div class="gds-list-heading" aria-hidden="true" id="label">
            ${this.label}
          </div>`)}
      <div role="list" aria-labelledby="label">
        <slot gds-allow="gds-list-item"></slot>
      </div>`}};function l8(){return(e,t,s)=>{let o=e.connectedCallback,r=e.disconnectedCallback;e.connectedCallback=function(){o?.call(this),this.__resizeObservers=this.__resizeObservers||{},this.__resizeObserver_tids=this.__resizeObserver_tids||{},this.__resizeObservers[t]=new ResizeObserver(()=>{this.__resizeObserver_tids[t]&&clearTimeout(this.__resizeObserver_tids[t]),this.__resizeObserver_tids[t]=setTimeout(()=>{s.value?.call(this)},20)}),this.__resizeObservers[t].observe(this)},e.disconnectedCallback=function(){r?.call(this),this.__resizeObservers[t].disconnect()}}}s9([oD()],l4.prototype,"label",2),l4=s9([rZ("gds-grouped-list")],l4);var l9=`:host {
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
`,ae=class extends rQ{constructor(){super(...arguments),this.selected=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),r0.instance.apply(this,"gds-segmented"),this.setAttribute("role","listitem")}render(){return rJ`<button
      aria-current=${String(this.selected)}
      ?disabled="${this.disabled}"
    >
      <slot></slot>
    </button>`}};ae.styles=[...it,rE(l9)],s9([oD({type:Boolean,reflect:!0})],ae.prototype,"selected",2),s9([oD()],ae.prototype,"value",2),s9([oD({type:Boolean,reflect:!0})],ae.prototype,"disabled",2),ae=s9([rZ("gds-segment")],ae);var at=`:host {
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
`,as={small:36,medium:44},ao=e=>e?0:4,ar=class extends rQ{constructor(){super(...arguments),os(this,tH),this.segMinWidth=100,this.size="medium",os(this,tS,void 0),this._showPrevButton=!1,this._showNextButton=!1,os(this,tE,0),os(this,tC,0),os(this,tA,0),os(this,tT,0),os(this,tM,0),os(this,tz,0),os(this,tD,0),os(this,tF,!1),os(this,tW,e=>{oo(this,tz,e.clientX),oo(this,tD,ot(this,tT)),oo(this,tF,!0)}),os(this,tL,e=>{if(!ot(this,tF))return;e.preventDefault();let t=e.clientX-ot(this,tz);if(!(5>Math.abs(t)))try{this._elSegments.hasPointerCapture(e.pointerId)||this._elSegments.setPointerCapture(e.pointerId),oo(this,tT,ot(this,tD)+t),ot(this,tR).call(this)}catch{}}),os(this,tO,e=>{if(ot(this,tF)){oo(this,tF,!1);try{this._elSegments.releasePointerCapture(e.pointerId),ot(this,tN).call(this)}catch{}}}),os(this,tN,()=>{oo(this,tE,Math.round(-ot(this,tT)/ot(this,tC))),ot(this,tP).call(this)}),os(this,tP,(e=!1)=>{let t=()=>{let e=this.segments.length,t=this._elTrack.offsetWidth;if(t/e>this.segMinWidth)return{count:e,segmentWidth:(t-ao(this._isUsingTransitionalStyles)*(e-1))/e};let s=Math.floor((this.offsetWidth-2*as[this.size])/this.segMinWidth),o=(t-ao(this._isUsingTransitionalStyles)*(s-1))/s;return{count:s,segmentWidth:o}},{count:s}=t();e&&(ot(this,tM)>=ot(this,tE)+s&&oo(this,tE,ot(this,tM)-s+1),ot(this,tM)<ot(this,tE)&&oo(this,tE,ot(this,tM)));let o=this.segments.length-s,r=ot(this,tE)>=o,i=0>=ot(this,tE);r&&oo(this,tE,o),i&&oo(this,tE,0),ot(this,tj).call(this,s),this.updateComplete.then(()=>{let{segmentWidth:e,count:s}=t();this.segments.forEach(t=>{t.style.width=e+"px"}),oo(this,tT,-ot(this,tE)*e-ao(this._isUsingTransitionalStyles)*ot(this,tE)),ot(this,tR).call(this),oo(this,tC,e),oo(this,tA,e),ot(this,tI).call(this)})}),os(this,tR,()=>{window.requestAnimationFrame(()=>{this._elSegments.style.transform=`translateX(${ot(this,tT)}px)`})}),os(this,tV,()=>{or(this,tE)._--,ot(this,tP).call(this)}),os(this,tU,()=>{or(this,tE)._++,ot(this,tP).call(this)}),os(this,tj,e=>{this._showPrevButton=ot(this,tE)>0,this._showNextButton=ot(this,tE)<this.segments.length-e}),os(this,tI,()=>{let e=this.segments.find(e=>e.selected);if(e){let t=this.segments.indexOf(e),s=t*ot(this,tA)+ao(this._isUsingTransitionalStyles)*t;this._elIndicator.style.transform=`translateX(${s}px)`,this._elIndicator.style.width=`${ot(this,tA)}px`}else this._elIndicator.style.transform="translateX(-100%)",this._elIndicator.style.width="0px"}),os(this,tY,e=>{let t=this.segments.find(t=>t===e.target||t.contains(e.target));t&&(this.segments.forEach(e=>e.selected=!1),t.selected=!0,oo(this,tS,t.value),ot(this,tI).call(this),this.dispatchEvent(new CustomEvent("change",{detail:{segment:t},bubbles:!0,composed:!0})))}),os(this,tq,()=>{ot(this,tS)&&this.updateComplete.then(()=>{let e=this.segments.find(e=>e.value===ot(this,tS));e&&(this.segments.forEach(e=>e.selected=!1),e.selected=!0,oo(this,tM,this.segments.indexOf(e)),ot(this,tP).call(this,!0))})})}get value(){return ot(this,tS)}set value(e){oo(this,tS,e),ot(this,tq).call(this)}get segments(){return this._elSlot?this._elSlot.assignedElements():[]}connectedCallback(){super.connectedCallback(),r0.instance.apply(this,"gds-segmented-control"),this.addEventListener("focusin",e=>{e.target instanceof ae&&(oo(this,tM,this.segments.indexOf(e.target)),ot(this,tP).call(this,!0))})}render(){return rJ`${oN(this._showPrevButton,()=>rJ`<button
            id="btn-prev"
            @click=${ot(this,tV)}
            aria-label=${iD("Scroll right")}
          >
            <gds-icon-chevron-left />
          </button>`)}
      <div
        id="track"
        @scroll=${()=>{this._elTrack.scrollLeft=0}}
      >
        <div
          id="segments"
          @pointerdown=${ot(this,tW)}
          @pointermove=${ot(this,tL)}
          @touchmove=${ot(this,tL)}
          @pointerup=${ot(this,tO)}
          @pointercancel=${ot(this,tO)}
          role="list"
        >
          <slot
            gds-allow="gds-segment"
            @click=${ot(this,tY)}
            @slotchange=${oi(this,tH,tB)}
            role="none"
          ></slot>
          <div id="indicator" role="none"></div>
        </div>
      </div>
      ${oN(this._showNextButton,()=>rJ`<button
            id="btn-next"
            @click=${ot(this,tU)}
            aria-label=${iD("Scroll right")}
          >
            <gds-icon-chevron-right />
          </button>`)}`}_recalculateMinWidth(){this.updateComplete.then(()=>ot(this,tP).call(this))}};tS=new WeakMap,tE=new WeakMap,tC=new WeakMap,tA=new WeakMap,tT=new WeakMap,tM=new WeakMap,tz=new WeakMap,tD=new WeakMap,tF=new WeakMap,tW=new WeakMap,tL=new WeakMap,tO=new WeakMap,tN=new WeakMap,tP=new WeakMap,tR=new WeakMap,tH=new WeakSet,tB=function(){let e=this.segments.find(e=>e.selected)?.value;e&&oo(this,tS,e),ot(this,tP).call(this)},tV=new WeakMap,tU=new WeakMap,tj=new WeakMap,tI=new WeakMap,tY=new WeakMap,tq=new WeakMap,ar.styles=[it,rE(at)],s9([oD({type:Number,attribute:"seg-min-width"})],ar.prototype,"segMinWidth",2),s9([oD({reflect:!0})],ar.prototype,"size",2),s9([oD()],ar.prototype,"value",1),s9([oL("slot")],ar.prototype,"_elSlot",2),s9([oL("#indicator")],ar.prototype,"_elIndicator",2),s9([oL("#track")],ar.prototype,"_elTrack",2),s9([oL("#segments")],ar.prototype,"_elSegments",2),s9([oF()],ar.prototype,"_showPrevButton",2),s9([oF()],ar.prototype,"_showNextButton",2),s9([l8(),r2("segMinWidth")],ar.prototype,"_recalculateMinWidth",1),ar=s9([rZ("gds-segmented-control")],ar);var ai=class extends rQ{constructor(){super(...arguments),this.colorScheme="light"}connectedCallback(){super.connectedCallback(),r0.instance.apply(this,"gds-theme"),this._dynamicStylesController.inject("tokens",rE(`:host {${ie}}`))}render(){return rJ`<slot></slot>`}_onColorSchemeChange(){"dark"===this.colorScheme?this._dynamicStylesController.inject("tokens",rE(`:host { ${ie}}`)):this._dynamicStylesController.inject("tokens",rE(`:host { ${r9}}`))}};ai.styles=rC`
    :host {
      display: contents;
    }
  `,s9([oD({reflect:!0,attribute:"color-scheme"})],ai.prototype,"colorScheme",2),s9([r2("colorScheme")],ai.prototype,"_onColorSchemeChange",1),ai=s9([rZ("gds-theme")],ai);var an=rC`
  @layer base, reset, transitional-styles;
  @layer base {
    .btn-p {
      padding: 0 0.75rem;
    }
    .icon {
      width: 1rem;
    }
  }
`,al=class extends rQ{constructor(){super(...arguments),this.selected=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),r0.instance.apply(this,"gds-filter-chip"),this._button.then(e=>{r0.instance.apply(e,"gds-button")})}render(){let e={"btn-p":!this.selected};return rJ`<gds-button
      class="btn"
      size="small"
      .rank=${this.selected?"primary":"secondary"}
      variant=${this._isUsingTransitionalStyles?"ghost":"default"}
      gds-role="option"
      gds-aria-selected=${this.selected}
    >
      <span class=${rv(e)}><slot></slot></span>
      <gds-icon-checkmark
        slot="trail"
        style="display: ${this.selected?"contents":"none"}"
        width="16"
        height="16"
        class="icon"
      ></gds-icon-checkmark>
    </gds-button>`}};al.styles=[an],s9([oD({reflect:!0,type:Boolean})],al.prototype,"selected",2),s9([oD()],al.prototype,"value",2),s9([oO(function(e){return rG.get(e)??e}("gds-button"))],al.prototype,"_button",2),al=s9([rZ("gds-filter-chip")],al);var aa=rC`
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
`,ad=class extends iN{constructor(){super(...arguments),os(this,tK),os(this,tQ),this.multiple=!1,this.label="",this.rowCollapse=!1,this._collapsed=!1,os(this,tG,e=>{let t=this.chips.find(t=>t===e.target||t.contains(e.target));t&&(this.multiple&&Array.isArray(this.value)?t.selected?this.value=this.value.filter(e=>e!==t.value):this.value=[...this.value,t.value]:this.value=t.value,this.dispatchEvent(new CustomEvent("change",{detail:{clickedChip:t,value:this.value},bubbles:!0,composed:!0})))}),os(this,tZ,3),os(this,tX,0)}get chips(){return this._elSlot?this._elSlot.assignedElements():[]}render(){let e={collapse:this._collapsed};return rJ`<div
      class="chips ${rv(e)}"
      role="listbox"
      aria-label=${this.label}
      aria-multiselectable=${this.multiple}
    >
      <slot
        gds-allow="gds-filter-chip"
        @click=${ot(this,tG)}
        @slotchange=${oi(this,tQ,t0)}
        role="none"
      ></slot>
    </div>`}_getValidityAnchor(){return this}_handleResize(){if(!this.rowCollapse)return;let e=oi(this,tK,tJ).call(this),t=this.offsetHeight,s=this.offsetWidth;t>=e*ot(this,tZ)&&(this._collapsed=!0,oo(this,tX,s)),s>ot(this,tX)&&(this._collapsed=!1)}_updateSelectedFromValue(){this.value&&(this.multiple&&!Array.isArray(this.value)&&(this.value=[this.value]),!this.multiple&&Array.isArray(this.value)&&(this.value=this.value[0]),this.updateComplete.then(()=>{this.chips.forEach(e=>{e.selected=this.multiple?this.value.includes(e.value):this.value===e.value})}))}};tG=new WeakMap,tZ=new WeakMap,tX=new WeakMap,tK=new WeakSet,tJ=function(){return this.chips[0]?.offsetHeight||0},tQ=new WeakSet,t0=function(){let e=this.chips.find(e=>e.selected)?.value;e&&(this.value=e)},ad.styles=[aa],s9([oD({converter:{fromAttribute:e=>e.split(","),toAttribute:e=>Array.isArray(e)?e.join(","):e}})],ad.prototype,"value",2),s9([oD({type:Boolean})],ad.prototype,"multiple",2),s9([oD()],ad.prototype,"label",2),s9([oD({type:Boolean,attribute:"row-collapse"})],ad.prototype,"rowCollapse",2),s9([oF()],ad.prototype,"_collapsed",2),s9([oL("slot")],ad.prototype,"_elSlot",2),s9([l8()],ad.prototype,"_handleResize",1),s9([r2("value")],ad.prototype,"_updateSelectedFromValue",1),ad=s9([rZ("gds-filter-chips")],ad);var ac=class extends il{};ac._regularSVG='<path d="M12 2.75L12.6457 2.36845C12.5108 2.1401 12.2652 2 12 2C11.7348 2 11.4892 2.1401 11.3543 2.36845L12 2.75ZM2.25 19.25L1.60431 18.8685C1.4673 19.1003 1.46512 19.3878 1.59859 19.6217C1.73207 19.8556 1.9807 20 2.25 20V19.25ZM21.75 19.25V20C22.0193 20 22.2679 19.8556 22.4014 19.6217C22.5349 19.3878 22.5327 19.1003 22.3957 18.8685L21.75 19.25ZM12.75 9.75C12.75 9.33579 12.4142 9 12 9C11.5858 9 11.25 9.33579 11.25 9.75H12.75ZM11.25 13.25C11.25 13.6642 11.5858 14 12 14C12.4142 14 12.75 13.6642 12.75 13.25H11.25ZM11.25 15.75C11.25 16.1642 11.5858 16.5 12 16.5C12.4142 16.5 12.75 16.1642 12.75 15.75H11.25ZM12.75 15.74C12.75 15.3258 12.4142 14.99 12 14.99C11.5858 14.99 11.25 15.3258 11.25 15.74H12.75ZM11.3543 2.36845L1.60431 18.8685L2.89569 19.6315L12.6457 3.13155L11.3543 2.36845ZM2.25 20H21.75V18.5H2.25V20ZM22.3957 18.8685L12.6457 2.36845L11.3543 3.13155L21.1043 19.6315L22.3957 18.8685ZM11.25 9.75V13.25H12.75V9.75H11.25ZM11.5 15.75C11.5 15.4739 11.7239 15.25 12 15.25V16.75C12.5523 16.75 13 16.3023 13 15.75H11.5ZM12 15.25C12.2761 15.25 12.5 15.4739 12.5 15.75H11C11 16.3023 11.4477 16.75 12 16.75V15.25ZM12.5 15.75C12.5 16.0261 12.2761 16.25 12 16.25V14.75C11.4477 14.75 11 15.1977 11 15.75H12.5ZM12 16.25C11.7239 16.25 11.5 16.0261 11.5 15.75H13C13 15.1977 12.5523 14.75 12 14.75V16.25ZM12.75 15.75V15.74H11.25V15.75H12.75Z" fill="currentColor"/>',ac._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C12.2652 2 12.5108 2.1401 12.6457 2.36845L22.3957 18.8685C22.5327 19.1003 22.5349 19.3878 22.4014 19.6217C22.2679 19.8556 22.0193 20 21.75 20H2.25C1.9807 20 1.73207 19.8556 1.59859 19.6217C1.46512 19.3878 1.4673 19.1003 1.60431 18.8685L11.3543 2.36845C11.4892 2.1401 11.7348 2 12 2ZM12 9C12.4142 9 12.75 9.33579 12.75 9.75V13.25C12.75 13.6642 12.4142 14 12 14C11.5858 14 11.25 13.6642 11.25 13.25V9.75C11.25 9.33579 11.5858 9 12 9ZM13 15.75C13 16.3023 12.5523 16.75 12 16.75C11.4477 16.75 11 16.3023 11 15.75C11 15.1977 11.4477 14.75 12 14.75C12.5523 14.75 13 15.1977 13 15.75Z" fill="currentColor"/>',ac._name="triangle-exclamation",ac=s9([rZ("gds-icon-triangle-exclamation")],ac);var ah=class extends rQ{connectedCallback(){super.connectedCallback(),this.form=this.closest("form")||void 0,this.form&&(this.formObserver=new MutationObserver(()=>{this.requestUpdate()}),this.formObserver.observe(this.form,{attributes:!0,subtree:!0}))}disconnectedCallback(){super.disconnectedCallback(),this.formObserver?.disconnect()}render(){let e=Array.from(this.form?.elements||[]).filter(e=>e.invalid);return oN(e.length>0,()=>rJ`<gds-card level="3" border="4xs/negative" border-radius="2xs" padding="m" color="error-text">
          <gds-flex gap="s" level=="3" color="negative">
            <gds-container>
              <gds-icon-triangle-exclamation></gds-icon-triangle-exclamation>
            </gds-container>
            <gds-container >
            ${iD(iT`There are ${e.length} errors to correct before you can continue:`)}
            <ul>
              ${e.map(e=>rJ`<li><a href @click=${t=>{t.preventDefault(),e.focus()}}>${e.label}</li>`)}
            </ul>
          </gds-container>
        <gds-flex>
      </gds-card>`)}};ah.styles=rC`
    :host {
      font-weight: 500;
    }
    ul {
      list-style-type: none;
      margin: 1rem 0 0;
      padding: 0;
    }
    li {
      margin: 0.5rem 0;
    }
    a {
      color: var(--gds-sys-color-primary-text);
      font-weight: 500;
    }
  `,ah=s9([rZ("gds-form-summary")],ah);var ap=(e,t,s)=>{for(let s of t)if(s[0]===e)return(0,s[1])();return s?.()},ag=rC`
  @layer tokens, a11y, base, simplified;

  @layer tokens {
    :host {
      --_transition: all 368ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  @layer a11y {
    @media (prefers-reduced-motion: reduce) {
      :host {
        --_transition: none;
      }
    }

    @media (prefers-reduced-transparency: reduce) {
      :host {
        --_transparency: 1;
      }
    }
  }

  @layer base {
    * {
      box-sizing: border-box;
    }

    :host {
      width: 100%;
      contain: layout;
      isolation: isolate;
    }

    :host([size='small']) input {
      font-size: var(--gds-text-size-detail-s);
      line-height: var(--gds-text-line-height-detail-s);
    }

    .field {
      transition: var(--_transition);
      position: relative;
      outline: 2px solid transparent;
      outline-offset: 2px;

      &:has(input:focus-visible) {
        border-color: var(--gds-color-l3-border-primary);
        outline-color: currentColor;
      }

      &.invalid:has(input:focus-visible) {
        border-color: var(--gds-color-l3-border-negative);
      }
    }

    @media (hover: hover) {
      .field {
        &:hover {
          background: color-mix(
            in srgb,
            var(--gds-color-l3-background-secondary),
            var(--gds-color-l3-states-light-hover)
          );
        }

        &.invalid:hover {
          background: color-mix(
            in srgb,
            var(--gds-color-l3-background-negative-secondary),
            var(--gds-color-l3-states-negative-hover)
          );
        }
      }
    }

    input {
      appearance: none;
      background-color: transparent;
      border: 0;
      box-sizing: border-box;
      font-family: inherit;
      margin: unset;
      outline: none;
      overflow: hidden;
      padding: unset;
      transition: var(--_transition);
      width: 100%;
      font-size: var(--gds-text-size-detail-m);
      line-height: var(--gds-text-line-height-detail-m);
    }

    :host([size='small']) slot[name='lead']::slotted(*) {
      line-height: 18px;
    }

    :host([size='small']) slot[name='lead']::slotted(*) {
      min-width: var(--gds-space-m);
      max-width: var(--gds-space-m);
      display: flex;
    }

    slot[name='lead']::slotted(*) {
      min-width: var(--gds-space-l);
      display: flex;
    }

    .extended-supporting-text {
      opacity: 1;
      translate: 0;
      transition: var(--_transition);

      @starting-style {
        opacity: 0;
        translate: 0 2px;
      }
    }
  }

  @layer simplified {
    // ...
  }
`,au=class extends il{};au._regularSVG='<path d="M10.75 11H12L12 16.25M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.375 8C11.375 8.34518 11.6548 8.625 12 8.625C12.3452 8.625 12.625 8.34518 12.625 8C12.625 7.65482 12.3452 7.375 12 7.375C11.6548 7.375 11.375 7.65482 11.375 8Z" fill="currentColor" stroke="currentColor" stroke-width="0.25"/>',au._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM10 11C10 10.5858 10.3358 10.25 10.75 10.25H12C12.4142 10.25 12.75 10.5858 12.75 11L12.75 16.25C12.75 16.6642 12.4142 17 12 17C11.5858 17 11.25 16.6642 11.25 16.25L11.25 11.75H10.75C10.3358 11.75 10 11.4142 10 11ZM12 7.25C11.5858 7.25 11.25 7.58579 11.25 8C11.25 8.41421 11.5858 8.75 12 8.75C12.4142 8.75 12.75 8.41421 12.75 8C12.75 7.58579 12.4142 7.25 12 7.25Z" fill="currentColor"/>',au._name="circle-info",au=s9([rZ("gds-icon-circle-info")],au);var af=class extends iN{constructor(){super(),os(this,t1),os(this,t3),os(this,st),os(this,so),os(this,si),os(this,sl),os(this,sd),os(this,sh),os(this,sg),os(this,sf),os(this,sy),os(this,sm),this.value="",this.label="",this.supportingText="",this.showExtendedSupportingText=!1,this.disabled=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.size="large",this.trailSlotOccupied=!1,os(this,t7,e=>["type","placeholder","required"].includes(e.name)),os(this,t6,e=>{let t=e.target;this.value=t.value}),os(this,t4,e=>{let t=e.target;this.value=t.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),os(this,t8,()=>{this.elInputAsync.then(e=>e.focus())}),os(this,t9,()=>{this.value=""}),os(this,se,()=>{this.showExtendedSupportingText=!this.showExtendedSupportingText,this.dispatchEvent(new CustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText}))}),ik(this)}connectedCallback(){super.connectedCallback(),this._setAutoHeight()}disconnectedCallback(){super.disconnectedCallback()}render(){return rJ`${ap(this.variant,[["default",()=>oi(this,t1,t2).call(this)],["floating-label",()=>oi(this,t3,t5).call(this)]])}`}_getValidityAnchor(){return this.elInput}_setAutoHeight(){this.elInputAsync.then(e=>{let t=(e.value.split("\n").length||1).toString();e?.style.setProperty("--_lines",t.toString())})}};t1=new WeakSet,t2=function(){return rJ`
      <gds-flex
        level="3"
        flex-direction="column"
        width="100%"
        gap="xs"
        user-select="${this.disabled?"none":"auto"}"
        pointer-events="${this.disabled?"none":"auto"}"
        color="${this.disabled?"disabled":this.invalid?"negative":"tertiary"}"
      >
        <gds-flex
          class="head"
          align-items="center"
          justify-content="space-between"
          padding="3xs 0 0 0"
        >
          <gds-flex flex-direction="column">
            <gds-text
              font-weight="book"
              font-size="${"small"===this.size?"detail-s":"detail-m"}"
            >
              <label for="input"> ${this.label} </label>
            </gds-text>
            ${oN(this.supportingText,()=>oi(this,sd,sc).call(this))}
          </gds-flex>
          ${lc(oi(this,sm,sx).call(this),o9)}
        </gds-flex>

        ${oi(this,sh,sp).call(this)}

        <gds-flex
          level="3"
          position="relative"
          align-items="center"
          justify-content="center"
          gap="${"small"===this.size?"2xs":"xs"}"
          padding="${"small"===this.size?"xs s":this.trailSlotOccupied?"xs m":"xs xs xs m"}"
          min-block-size="${"small"===this.size?"xl":"3xl"}"
          block-size="${"small"===this.size?"xl":"3xl"}"
          border-radius="xs"
          .background=${this.disabled?"disabled":this.invalid?"negative-secondary":"secondary"}
          .border=${this.disabled?"":this.invalid?"4xs/negative":"4xs/secondary"}
          class="field ${this.invalid?"invalid":""}"
          @click=${ot(this,t8)}
          cursor="text"
        >
          ${oi(this,st,ss).call(this)} ${oi(this,sl,sa).call(this)}
          <gds-flex gap="xs" align-items="center">
            ${oi(this,sg,su).call(this)} ${oi(this,so,sr).call(this)}
          </gds-flex>
        </gds-flex>

        <gds-flex
          class="foot"
          align-items="flex-start"
          justify-content="space-between"
          aria-live="polite"
          gap="xl"
        >
          ${oN(this.invalid,()=>rJ`
              <gds-flex
                align-items="flex-start"
                gap="${"small"===this.size?"2xs":"xs"}"
                margin="2xs 0 0 0"
              >
                <gds-flex min-width="18px">
                  <gds-icon-triangle-exclamation
                    width="${"small"===this.size?"16":"18"}"
                    height="${"small"===this.size?"16":"18"}"
                    solid
                  >
                  </gds-icon-triangle-exclamation>
                </gds-flex>
                <gds-text
                  tag="span"
                  font-size="${"small"===this.size?"detail-xs":"detail-s"}"
                  font-weight="book"
                  class="error-text"
                >
                  ${this.validationMessage}
                </gds-text>
              </gds-flex>
            `)}
          <gds-flex
            margin="0 0 0 auto"
            min-width="4ch"
            justify-content="flex-end"
          >
            ${oN(ot(this,sf,sb),()=>oi(this,sy,sv).call(this))}
          </gds-flex>
        </gds-flex>
      </gds-flex>
    `},t3=new WeakSet,t5=function(){return o9},t7=new WeakMap,t6=new WeakMap,t4=new WeakMap,t8=new WeakMap,t9=new WeakMap,se=new WeakMap,st=new WeakSet,ss=function(){return rJ` <slot name="lead"></slot> `},so=new WeakSet,sr=function(){return rJ`
      <slot
        name="trail"
        gds-allow="gds-badge"
        @slotchange=${oi(this,si,sn)}
      ></slot>
    `},si=new WeakSet,sn=function(e){let t=e.target.assignedNodes({flatten:!0});this.trailSlotOccupied=t.length>0&&t.some(e=>e.nodeType===Node.ELEMENT_NODE||e.nodeType===Node.TEXT_NODE&&e.textContent?.trim()!=="")},sl=new WeakSet,sa=function(){return rJ`
      <input
        @input=${ot(this,t6)}
        @change=${ot(this,t4)}
        style="${this.invalid?"color: var(--gds-color-l3-content-negative);":this.disabled?"color: currentColor;pointer-events:none;":null}"
        .value=${this.value}
        id="input"
        ?disabled=${this.disabled}
        aria-describedby="supporting-text"
        placeholder=" "
        ${i_(ot(this,t7))}
      />
    `},sd=new WeakSet,sc=function(){return rJ`
      <gds-text
        level="3"
        font-size="${"small"===this.size?"detail-s":"detail-m"}"
        .color="${this.disabled?"disabled":this.invalid?"negative":"tertiary"}"
        class="supporting-text"
        id="supporting-text"
      >
        ${this.supportingText}
      </gds-text>
    `},sh=new WeakSet,sp=function(){return rJ`
      <gds-card
        level="3"
        class="extended-supporting-text"
        padding="s m"
        border-radius="xs"
        background="secondary"
        color="tertiary"
        display="${this.showExtendedSupportingText?"block":"none"}"
      >
        <gds-text font-size="body-s">
          <slot
            name="extended-supporting-text"
            @slotchange=${()=>this.requestUpdate()}
          ></slot>
        </gds-text>
      </gds-card>
    `},sg=new WeakSet,su=function(){return this.clearable&&this.value.length>0?rJ`
        <gds-button
          size="${"small"===this.size?"xs":"small"}"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${iD("Clear input")}"
          @click=${ot(this,t9)}
        >
          <gds-icon-cross-small />
        </gds-button>
      `:o9},sf=new WeakSet,sb=function(){return this.maxlength<Number.MAX_SAFE_INTEGER},sy=new WeakSet,sv=function(){let e;let t=this.maxlength-this.value.length;return e=t<0?"negative":t<20?"warning":"positive",rJ`<gds-badge variant="${e}">${t}</gds-badge>`},sm=new WeakSet,sx=async function(){return this.elExtendedSupportingTextSlot.then(e=>e&&e.assignedElements().length>0?rJ`
          <gds-button
            size="small"
            rank="tertiary"
            label="${iD("Show extended supporting text")}"
            @click=${ot(this,se)}
          >
            <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
          </gds-button>
        `:o9)},af.styles=[it,ag],s9([oD()],af.prototype,"value",2),s9([oD()],af.prototype,"label",2),s9([oD({attribute:"supporting-text"})],af.prototype,"supportingText",2),s9([oD({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],af.prototype,"showExtendedSupportingText",2),s9([oD({attribute:"disabled",type:Boolean,reflect:!0})],af.prototype,"disabled",2),s9([oD({type:Boolean})],af.prototype,"clearable",2),s9([oD({type:Number})],af.prototype,"maxlength",2),s9([oD({type:String})],af.prototype,"variant",2),s9([oD({type:String})],af.prototype,"size",2),s9([oO("input")],af.prototype,"elInputAsync",2),s9([oL("input")],af.prototype,"elInput",2),s9([oO('slot[name="extended-supporting-text"]')],af.prototype,"elExtendedSupportingTextSlot",2),s9([oF()],af.prototype,"trailSlotOccupied",2),s9([r2("value")],af.prototype,"_setAutoHeight",1),af=s9([rZ("gds-input")],af);var ab=rC`
  @layer tokens, a11y, base, simplified;

  @layer tokens {
    :host {
      --_transition: all 368ms cubic-bezier(0.4, 0, 0.2, 1), height 0s;
    }
  }

  @layer a11y {
    @media (prefers-reduced-motion: reduce) {
      :host {
        --_transition: none;
      }
    }

    @media (prefers-reduced-transparency: reduce) {
      :host {
        --_transparency: 1;
      }
    }
  }

  @layer base {
    * {
      box-sizing: border-box;
    }

    :host {
      width: 100%;
      contain: layout;
      isolation: isolate;
    }

    :host([size='small']) textarea {
      font-size: var(--gds-text-size-detail-s);
      line-height: var(--gds-text-line-height-detail-s);
    }

    .field {
      transition: var(--_transition);
      position: relative;
      outline: 2px solid transparent;
      outline-offset: 2px;

      &:has(textarea:focus-visible) {
        border-color: var(--gds-color-l3-border-primary);
        outline-color: currentColor;
      }

      &.invalid:has(textarea:focus-visible) {
        border-color: var(--gds-color-l3-border-negative);
      }
    }

    @media (hover: hover) {
      .field {
        &:hover {
          background: color-mix(
            in srgb,
            var(--gds-color-l3-background-secondary),
            var(--gds-color-l3-states-light-hover)
          );
        }

        &.invalid:hover {
          background: color-mix(
            in srgb,
            var(--gds-color-l3-background-negative-secondary),
            var(--gds-color-l3-states-negative-hover)
          );
        }
      }
    }

    textarea {
      appearance: none;
      background-color: transparent;
      border: 0;
      box-sizing: border-box;
      font-family: inherit;
      font-size: var(--gds-text-size-detail-m);
      height: calc(1lh * var(--_lines));
      line-height: var(--gds-text-line-height-detail-m);
      margin: unset;
      min-height: calc(1lh * 4);
      outline: none;
      overflow: hidden;
      padding: unset;
      resize: none;
      transition:
        var(--_transition),
        resize 0s;

      width: 100%;
    }

    :host([size='small']) slot[name='lead']::slotted(*) {
      width: var(--gds-space-m);
    }

    slot[name='lead']::slotted(*) {
      min-width: var(--gds-space-l);
      display: flex;
    }

    .extended-supporting-text {
      opacity: 1;
      translate: 0;
      transition: var(--_transition);

      @starting-style {
        opacity: 0;
        translate: 0 2px;
      }
    }

    .resize-handle {
      &:hover,
      &:active {
        &::before {
          width: 22px;
          opacity: 1;
          height: 1px;
        }
      }
      &::before {
        content: '';
        position: absolute;
        background: currentColor;
        inset: 0;
        margin-inline: auto;
        height: 0px;
        width: 12px;
        opacity: 0;
        border-radius: 100px;
        transition: var(--_transition);
      }
    }
  }

  @layer simplified {
    // ...
  }
`,ay=class extends iN{constructor(){super(),os(this,sw),os(this,s_),os(this,sz),os(this,sF),os(this,sL),os(this,sN),os(this,sR),os(this,sB),os(this,sU),os(this,sI),os(this,sq),os(this,sZ),os(this,sK),os(this,sQ),os(this,s1),os(this,s3),os(this,s7),this.value="",this.label="",this.rows=4,this.lines=4,this.isDragging=!1,this.lastMouseY=0,this.supportingText="",this.showExtendedSupportingText=!1,this.disabled=!1,this.clearable=!1,this.resize="",this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.trailSlotOccupied=!1,os(this,sS,e=>["type","placeholder","required"].includes(e.name)),os(this,sE,e=>{let t=e.target;this.value=t.value}),os(this,sC,e=>{let t=e.target;this.value=t.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),os(this,sA,()=>{this.elTextareaAsync.then(e=>e.focus())}),os(this,sT,()=>{this.value=""}),os(this,sM,()=>{this.showExtendedSupportingText=!this.showExtendedSupportingText,this.dispatchEvent(new CustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText}))}),ik(this),this.lines=0,this.resize="auto"}connectedCallback(){super.connectedCallback(),this._setAutoHeight(),oi(this,sL,sO).call(this)}disconnectedCallback(){super.disconnectedCallback(),oi(this,sL,sO).call(this)}render(){return rJ`${ap(this.variant,[["default",()=>oi(this,sw,sk).call(this)],["floating-label",()=>oi(this,s_,s$).call(this)]])}`}_getValidityAnchor(){return this.elTextarea}_setAutoHeight(){this.elTextareaAsync.then(e=>{let t=(e.value.split("\n").length||1).toString();e?.style.setProperty("--_lines",t.toString())})}};sw=new WeakSet,sk=function(){return rJ`
      <gds-flex
        flex-direction="column"
        width="100%"
        gap="xs"
        level="3"
        user-select="${this.disabled?"none":"auto"}"
        pointer-events="${this.disabled?"none":"auto"}"
        color="${this.disabled?"disabled":this.invalid?"negative":"tertiary"}"
      >
        <gds-flex
          class="head"
          align-items="center"
          justify-content="space-between"
          padding="3xs 0 0 0"
        >
          <gds-flex flex-direction="column">
            <gds-text font-weight="book" font-size="detail-m">
              <label for="input"> ${this.label} </label>
            </gds-text>
            ${oN(this.supportingText,()=>oi(this,sZ,sX).call(this))}
          </gds-flex>
          ${lc(oi(this,s7,s6).call(this),o9)}
        </gds-flex>

        ${oi(this,sK,sJ).call(this)}

        <gds-flex
          position="relative"
          align-items="flex-start"
          justify-content="center"
          gap="xs"
          level="3"
          padding=${this.trailSlotOccupied?"s m s m":"s s s m"}
          border-radius="xs"
          .background=${this.disabled?"disabled":this.invalid?"negative-secondary":"secondary"}
          .border=${this.disabled?"":this.invalid?"4xs/negative":"4xs/secondary"}
          class="field ${this.invalid?"invalid":""}"
          @click=${ot(this,sA)}
          cursor="text"
        >
          ${oi(this,sz,sD).call(this)} ${oi(this,sq,sG).call(this)}

          <gds-flex gap="xs" align-items="center" block-size="l">
            ${oi(this,sQ,s0).call(this)} ${oi(this,sF,sW).call(this)}
          </gds-flex>
          ${oN("auto"===this.resize,()=>oi(this,sU,sj).call(this),()=>o9)}
        </gds-flex>

        <gds-flex
          class="foot"
          align-items="flex-start"
          justify-content="space-between"
          aria-live="polite"
          gap="xl"
        >
          ${oN(this.invalid,()=>rJ`
              <gds-flex align-items="flex-start" gap="xs" margin="2xs 0 0 0">
                <gds-flex min-width="18px">
                  <gds-icon-triangle-exclamation width="18" height="18" solid>
                  </gds-icon-triangle-exclamation>
                </gds-flex>
                <gds-text
                  tag="span"
                  font-size="detail-s"
                  font-weight="book"
                  class="error-text"
                >
                  ${this.validationMessage}
                </gds-text>
              </gds-flex>
            `)}
          <gds-flex
            margin="0 0 0 auto"
            min-width="4ch"
            justify-content="flex-end"
          >
            ${oN(ot(this,s1,s2),()=>oi(this,s3,s5).call(this))}
          </gds-flex>
        </gds-flex>
      </gds-flex>
    `},s_=new WeakSet,s$=function(){return o9},sS=new WeakMap,sE=new WeakMap,sC=new WeakMap,sA=new WeakMap,sT=new WeakMap,sM=new WeakMap,sz=new WeakSet,sD=function(){return rJ` <slot name="lead"></slot> `},sF=new WeakSet,sW=function(){return rJ`
      <slot
        name="trail"
        gds-allow="gds-badge"
        @slotchange=${oi(this,sI,sY)}
      ></slot>
    `},sL=new WeakSet,sO=function(){let e=this.querySelector(".resize-handle");e&&e.addEventListener("mousedown",oi(this,sN,sP).bind(this))},sN=new WeakSet,sP=function(e){e.preventDefault(),this.isDragging=!0,this.lastMouseY=e.clientY,document.addEventListener("mousemove",oi(this,sR,sH).bind(this)),document.addEventListener("mouseup",oi(this,sB,sV).bind(this))},sR=new WeakSet,sH=function(e){if(!this.isDragging)return;let t=e.clientY-this.lastMouseY;Math.abs(t)>=20&&(t>0?this.lines+=1:this.lines=Math.max(1,this.lines-1),this.elTextareaAsync.then(e=>{e?.style.setProperty("--_lines",this.lines.toString())}),this.lastMouseY=e.clientY)},sB=new WeakSet,sV=function(){this.isDragging=!1,document.removeEventListener("mousemove",oi(this,sR,sH).bind(this)),document.removeEventListener("mouseup",oi(this,sB,sV).bind(this))},sU=new WeakSet,sj=function(){return rJ`
      <gds-container
        class="resize-handle"
        position="absolute"
        inset="auto auto -10px 0"
        width="100%"
        height="20px"
        cursor="row-resize"
        z-index="2"
        @mousedown=${oi(this,sN,sP)}
      ></gds-container>
    `},sI=new WeakSet,sY=function(e){let t=e.target.assignedNodes({flatten:!0});this.trailSlotOccupied=t.length>0&&t.some(e=>e.nodeType===Node.ELEMENT_NODE||e.nodeType===Node.TEXT_NODE&&e.textContent?.trim()!=="")},sq=new WeakSet,sG=function(){return rJ`
      <textarea
        @input=${ot(this,sE)}
        @change=${ot(this,sC)}
        .value=${this.value}
        id="input"
        style="${this.invalid?"color: var(--gds-color-l3-content-negative);":this.disabled?"color: currentColor;pointer-events:none;":null}"
        aria-describedby="supporting-text"
        placeholder=" "
        ${i_(ot(this,sS))}
      ></textarea>
    `},sZ=new WeakSet,sX=function(){return rJ`
      <gds-text
        level="3"
        font-size="detail-m"
        .color="${this.disabled?"disabled":this.invalid?"negative":"tertiary"}"
        class="supporting-text"
        id="supporting-text"
      >
        ${this.supportingText}
      </gds-text>
    `},sK=new WeakSet,sJ=function(){return rJ`
      <gds-card
        level="3"
        display="${this.showExtendedSupportingText?"block":"none"}"
        class="extended-supporting-text"
        padding="s m"
        border-radius="xs"
        background="secondary"
        color="tertiary"
      >
        <gds-text
          font-size="body-s"
          display="${this.showExtendedSupportingText?"block":"none"}"
        >
          <slot
            name="extended-supporting-text"
            @slotchange=${()=>this.requestUpdate()}
          ></slot>
        </gds-text>
      </gds-card>
    `},sQ=new WeakSet,s0=function(){return this.clearable&&this.value.length>0?rJ`
        <gds-button
          size="small"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${iD("Clear input")}"
          @click=${ot(this,sT)}
        >
          <gds-icon-cross-small />
        </gds-button>
      `:o9},s1=new WeakSet,s2=function(){return this.maxlength<Number.MAX_SAFE_INTEGER},s3=new WeakSet,s5=function(){let e;let t=this.maxlength-this.value.length;return e=t<0?"negative":t<20?"warning":"positive",rJ`<gds-badge variant="${e}">${t}</gds-badge>`},s7=new WeakSet,s6=async function(){return this.elExtendedSupportingTextSlot.then(e=>e&&e.assignedElements().length>0?rJ`
          <gds-button
            size="small"
            rank="tertiary"
            label="${iD("Show extended supporting text")}"
            @click=${ot(this,sM)}
          >
            <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
          </gds-button>
        `:o9)},ay.styles=[it,ab],s9([oD()],ay.prototype,"value",2),s9([oD()],ay.prototype,"label",2),s9([lB({valueTemplate:e=>e,selector:"textarea",styleTemplate:(e,t)=>{let s=t[0];return`min-height: calc(1lh * ${s});`}})],ay.prototype,"rows",2),s9([oF()],ay.prototype,"lines",2),s9([oD({attribute:"supporting-text"})],ay.prototype,"supportingText",2),s9([oD({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],ay.prototype,"showExtendedSupportingText",2),s9([oD({attribute:"disabled",type:Boolean,reflect:!0})],ay.prototype,"disabled",2),s9([oD({type:Boolean})],ay.prototype,"clearable",2),s9([oD()],ay.prototype,"resize",2),s9([oD({type:Number})],ay.prototype,"maxlength",2),s9([oD({type:String})],ay.prototype,"variant",2),s9([oO("textarea")],ay.prototype,"elTextareaAsync",2),s9([oL("textarea")],ay.prototype,"elTextarea",2),s9([oO('slot[name="extended-supporting-text"]')],ay.prototype,"elExtendedSupportingTextSlot",2),s9([oF()],ay.prototype,"trailSlotOccupied",2),s9([r2("value")],ay.prototype,"_setAutoHeight",1),ay=s9([rZ("gds-textarea")],ay)})();