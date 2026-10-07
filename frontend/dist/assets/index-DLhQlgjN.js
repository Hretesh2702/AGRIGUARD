var q_=Object.defineProperty;var K_=(t,e,n)=>e in t?q_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ze=(t,e,n)=>K_(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Z_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Sg={exports:{}},Yc={},Mg={exports:{}},at={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ia=Symbol.for("react.element"),J_=Symbol.for("react.portal"),Q_=Symbol.for("react.fragment"),ey=Symbol.for("react.strict_mode"),ty=Symbol.for("react.profiler"),ny=Symbol.for("react.provider"),iy=Symbol.for("react.context"),ry=Symbol.for("react.forward_ref"),sy=Symbol.for("react.suspense"),oy=Symbol.for("react.memo"),ay=Symbol.for("react.lazy"),tm=Symbol.iterator;function ly(t){return t===null||typeof t!="object"?null:(t=tm&&t[tm]||t["@@iterator"],typeof t=="function"?t:null)}var Eg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},wg=Object.assign,bg={};function mo(t,e,n){this.props=t,this.context=e,this.refs=bg,this.updater=n||Eg}mo.prototype.isReactComponent={};mo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};mo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Tg(){}Tg.prototype=mo.prototype;function wf(t,e,n){this.props=t,this.context=e,this.refs=bg,this.updater=n||Eg}var bf=wf.prototype=new Tg;bf.constructor=wf;wg(bf,mo.prototype);bf.isPureReactComponent=!0;var nm=Array.isArray,Ag=Object.prototype.hasOwnProperty,Tf={current:null},Cg={key:!0,ref:!0,__self:!0,__source:!0};function Rg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ag.call(e,i)&&!Cg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ia,type:t,key:s,ref:o,props:r,_owner:Tf.current}}function cy(t,e){return{$$typeof:Ia,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Af(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ia}function uy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var im=/\/+/g;function Ru(t,e){return typeof t=="object"&&t!==null&&t.key!=null?uy(""+t.key):e.toString(36)}function $l(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ia:case J_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Ru(o,0):i,nm(r)?(n="",t!=null&&(n=t.replace(im,"$&/")+"/"),$l(r,e,n,"",function(c){return c})):r!=null&&(Af(r)&&(r=cy(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(im,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",nm(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Ru(s,a);o+=$l(s,e,n,l,r)}else if(l=ly(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Ru(s,a++),o+=$l(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function rl(t,e,n){if(t==null)return t;var i=[],r=0;return $l(t,i,"","",function(s){return e.call(n,s,r++)}),i}function dy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Sn={current:null},ql={transition:null},hy={ReactCurrentDispatcher:Sn,ReactCurrentBatchConfig:ql,ReactCurrentOwner:Tf};function Pg(){throw Error("act(...) is not supported in production builds of React.")}at.Children={map:rl,forEach:function(t,e,n){rl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return rl(t,function(){e++}),e},toArray:function(t){return rl(t,function(e){return e})||[]},only:function(t){if(!Af(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};at.Component=mo;at.Fragment=Q_;at.Profiler=ty;at.PureComponent=wf;at.StrictMode=ey;at.Suspense=sy;at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hy;at.act=Pg;at.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=wg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Tf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Ag.call(e,l)&&!Cg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ia,type:t.type,key:r,ref:s,props:i,_owner:o}};at.createContext=function(t){return t={$$typeof:iy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ny,_context:t},t.Consumer=t};at.createElement=Rg;at.createFactory=function(t){var e=Rg.bind(null,t);return e.type=t,e};at.createRef=function(){return{current:null}};at.forwardRef=function(t){return{$$typeof:ry,render:t}};at.isValidElement=Af;at.lazy=function(t){return{$$typeof:ay,_payload:{_status:-1,_result:t},_init:dy}};at.memo=function(t,e){return{$$typeof:oy,type:t,compare:e===void 0?null:e}};at.startTransition=function(t){var e=ql.transition;ql.transition={};try{t()}finally{ql.transition=e}};at.unstable_act=Pg;at.useCallback=function(t,e){return Sn.current.useCallback(t,e)};at.useContext=function(t){return Sn.current.useContext(t)};at.useDebugValue=function(){};at.useDeferredValue=function(t){return Sn.current.useDeferredValue(t)};at.useEffect=function(t,e){return Sn.current.useEffect(t,e)};at.useId=function(){return Sn.current.useId()};at.useImperativeHandle=function(t,e,n){return Sn.current.useImperativeHandle(t,e,n)};at.useInsertionEffect=function(t,e){return Sn.current.useInsertionEffect(t,e)};at.useLayoutEffect=function(t,e){return Sn.current.useLayoutEffect(t,e)};at.useMemo=function(t,e){return Sn.current.useMemo(t,e)};at.useReducer=function(t,e,n){return Sn.current.useReducer(t,e,n)};at.useRef=function(t){return Sn.current.useRef(t)};at.useState=function(t){return Sn.current.useState(t)};at.useSyncExternalStore=function(t,e,n){return Sn.current.useSyncExternalStore(t,e,n)};at.useTransition=function(){return Sn.current.useTransition()};at.version="18.3.1";Mg.exports=at;var fe=Mg.exports;const Ng=Z_(fe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fy=fe,py=Symbol.for("react.element"),my=Symbol.for("react.fragment"),gy=Object.prototype.hasOwnProperty,xy=fy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vy={key:!0,ref:!0,__self:!0,__source:!0};function Dg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)gy.call(e,i)&&!vy.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:py,type:t,key:s,ref:o,props:r,_owner:xy.current}}Yc.Fragment=my;Yc.jsx=Dg;Yc.jsxs=Dg;Sg.exports=Yc;var u=Sg.exports,zd={},Lg={exports:{}},Vn={},Ig={exports:{}},Ug={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(G,H){var X=G.length;G.push(H);e:for(;0<X;){var Q=X-1>>>1,se=G[Q];if(0<r(se,H))G[Q]=H,G[X]=se,X=Q;else break e}}function n(G){return G.length===0?null:G[0]}function i(G){if(G.length===0)return null;var H=G[0],X=G.pop();if(X!==H){G[0]=X;e:for(var Q=0,se=G.length,ue=se>>>1;Q<ue;){var He=2*(Q+1)-1,Ae=G[He],Ve=He+1,Z=G[Ve];if(0>r(Ae,X))Ve<se&&0>r(Z,Ae)?(G[Q]=Z,G[Ve]=X,Q=Ve):(G[Q]=Ae,G[He]=X,Q=He);else if(Ve<se&&0>r(Z,X))G[Q]=Z,G[Ve]=X,Q=Ve;else break e}}return H}function r(G,H){var X=G.sortIndex-H.sortIndex;return X!==0?X:G.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,p=null,d=3,m=!1,g=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(G){for(var H=n(c);H!==null;){if(H.callback===null)i(c);else if(H.startTime<=G)i(c),H.sortIndex=H.expirationTime,e(l,H);else break;H=n(c)}}function S(G){if(M=!1,E(G),!g)if(n(l)!==null)g=!0,ee(b);else{var H=n(c);H!==null&&q(S,H.startTime-G)}}function b(G,H){g=!1,M&&(M=!1,h(v),v=-1),m=!0;var X=d;try{for(E(H),p=n(l);p!==null&&(!(p.expirationTime>H)||G&&!D());){var Q=p.callback;if(typeof Q=="function"){p.callback=null,d=p.priorityLevel;var se=Q(p.expirationTime<=H);H=t.unstable_now(),typeof se=="function"?p.callback=se:p===n(l)&&i(l),E(H)}else i(l);p=n(l)}if(p!==null)var ue=!0;else{var He=n(c);He!==null&&q(S,He.startTime-H),ue=!1}return ue}finally{p=null,d=X,m=!1}}var T=!1,C=null,v=-1,A=5,R=-1;function D(){return!(t.unstable_now()-R<A)}function O(){if(C!==null){var G=t.unstable_now();R=G;var H=!0;try{H=C(!0,G)}finally{H?U():(T=!1,C=null)}}else T=!1}var U;if(typeof _=="function")U=function(){_(O)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,V=L.port2;L.port1.onmessage=O,U=function(){V.postMessage(null)}}else U=function(){x(O,0)};function ee(G){C=G,T||(T=!0,U())}function q(G,H){v=x(function(){G(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(G){G.callback=null},t.unstable_continueExecution=function(){g||m||(g=!0,ee(b))},t.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<G?Math.floor(1e3/G):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(G){switch(d){case 1:case 2:case 3:var H=3;break;default:H=d}var X=d;d=H;try{return G()}finally{d=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(G,H){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var X=d;d=G;try{return H()}finally{d=X}},t.unstable_scheduleCallback=function(G,H,X){var Q=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?Q+X:Q):X=Q,G){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=X+se,G={id:f++,callback:H,priorityLevel:G,startTime:X,expirationTime:se,sortIndex:-1},X>Q?(G.sortIndex=X,e(c,G),n(l)===null&&G===n(c)&&(M?(h(v),v=-1):M=!0,q(S,X-Q))):(G.sortIndex=se,e(l,G),g||m||(g=!0,ee(b))),G},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(G){var H=d;return function(){var X=d;d=H;try{return G.apply(this,arguments)}finally{d=X}}}})(Ug);Ig.exports=Ug;var _y=Ig.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yy=fe,Gn=_y;function ce(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Og=new Set,ua={};function hs(t,e){ro(t,e),ro(t+"Capture",e)}function ro(t,e){for(ua[t]=e,t=0;t<e.length;t++)Og.add(e[t])}var tr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bd=Object.prototype.hasOwnProperty,Sy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rm={},sm={};function My(t){return Bd.call(sm,t)?!0:Bd.call(rm,t)?!1:Sy.test(t)?sm[t]=!0:(rm[t]=!0,!1)}function Ey(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function wy(t,e,n,i){if(e===null||typeof e>"u"||Ey(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Mn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var an={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){an[t]=new Mn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];an[e]=new Mn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){an[t]=new Mn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){an[t]=new Mn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){an[t]=new Mn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){an[t]=new Mn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){an[t]=new Mn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){an[t]=new Mn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){an[t]=new Mn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Cf=/[\-:]([a-z])/g;function Rf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Cf,Rf);an[e]=new Mn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Cf,Rf);an[e]=new Mn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Cf,Rf);an[e]=new Mn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){an[t]=new Mn(t,1,!1,t.toLowerCase(),null,!1,!1)});an.xlinkHref=new Mn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){an[t]=new Mn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Pf(t,e,n,i){var r=an.hasOwnProperty(e)?an[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(wy(e,n,r,i)&&(n=null),i||r===null?My(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var or=yy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sl=Symbol.for("react.element"),Ls=Symbol.for("react.portal"),Is=Symbol.for("react.fragment"),Nf=Symbol.for("react.strict_mode"),Hd=Symbol.for("react.profiler"),Fg=Symbol.for("react.provider"),kg=Symbol.for("react.context"),Df=Symbol.for("react.forward_ref"),Gd=Symbol.for("react.suspense"),Vd=Symbol.for("react.suspense_list"),Lf=Symbol.for("react.memo"),xr=Symbol.for("react.lazy"),zg=Symbol.for("react.offscreen"),om=Symbol.iterator;function Ao(t){return t===null||typeof t!="object"?null:(t=om&&t[om]||t["@@iterator"],typeof t=="function"?t:null)}var kt=Object.assign,Pu;function Vo(t){if(Pu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Pu=e&&e[1]||""}return`
`+Pu+t}var Nu=!1;function Du(t,e){if(!t||Nu)return"";Nu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Nu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Vo(t):""}function by(t){switch(t.tag){case 5:return Vo(t.type);case 16:return Vo("Lazy");case 13:return Vo("Suspense");case 19:return Vo("SuspenseList");case 0:case 2:case 15:return t=Du(t.type,!1),t;case 11:return t=Du(t.type.render,!1),t;case 1:return t=Du(t.type,!0),t;default:return""}}function Wd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Is:return"Fragment";case Ls:return"Portal";case Hd:return"Profiler";case Nf:return"StrictMode";case Gd:return"Suspense";case Vd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case kg:return(t.displayName||"Context")+".Consumer";case Fg:return(t._context.displayName||"Context")+".Provider";case Df:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Lf:return e=t.displayName||null,e!==null?e:Wd(t.type)||"Memo";case xr:e=t._payload,t=t._init;try{return Wd(t(e))}catch{}}return null}function Ty(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wd(e);case 8:return e===Nf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Dr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Bg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ay(t){var e=Bg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ol(t){t._valueTracker||(t._valueTracker=Ay(t))}function Hg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Bg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function fc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function jd(t,e){var n=e.checked;return kt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function am(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Dr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Gg(t,e){e=e.checked,e!=null&&Pf(t,"checked",e,!1)}function Xd(t,e){Gg(t,e);var n=Dr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Yd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Yd(t,e.type,Dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function lm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Yd(t,e,n){(e!=="number"||fc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Wo=Array.isArray;function qs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Dr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function $d(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ce(91));return kt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function cm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ce(92));if(Wo(n)){if(1<n.length)throw Error(ce(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Dr(n)}}function Vg(t,e){var n=Dr(e.value),i=Dr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function um(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Wg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Wg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var al,jg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(al=al||document.createElement("div"),al.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=al.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function da(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ko={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Cy=["Webkit","ms","Moz","O"];Object.keys(Ko).forEach(function(t){Cy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ko[e]=Ko[t]})});function Xg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ko.hasOwnProperty(t)&&Ko[t]?(""+e).trim():e+"px"}function Yg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Xg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Ry=kt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Kd(t,e){if(e){if(Ry[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ce(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ce(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ce(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ce(62))}}function Zd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jd=null;function If(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qd=null,Ks=null,Zs=null;function dm(t){if(t=Fa(t)){if(typeof Qd!="function")throw Error(ce(280));var e=t.stateNode;e&&(e=Jc(e),Qd(t.stateNode,t.type,e))}}function $g(t){Ks?Zs?Zs.push(t):Zs=[t]:Ks=t}function qg(){if(Ks){var t=Ks,e=Zs;if(Zs=Ks=null,dm(t),e)for(t=0;t<e.length;t++)dm(e[t])}}function Kg(t,e){return t(e)}function Zg(){}var Lu=!1;function Jg(t,e,n){if(Lu)return t(e,n);Lu=!0;try{return Kg(t,e,n)}finally{Lu=!1,(Ks!==null||Zs!==null)&&(Zg(),qg())}}function ha(t,e){var n=t.stateNode;if(n===null)return null;var i=Jc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ce(231,e,typeof n));return n}var eh=!1;if(tr)try{var Co={};Object.defineProperty(Co,"passive",{get:function(){eh=!0}}),window.addEventListener("test",Co,Co),window.removeEventListener("test",Co,Co)}catch{eh=!1}function Py(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Zo=!1,pc=null,mc=!1,th=null,Ny={onError:function(t){Zo=!0,pc=t}};function Dy(t,e,n,i,r,s,o,a,l){Zo=!1,pc=null,Py.apply(Ny,arguments)}function Ly(t,e,n,i,r,s,o,a,l){if(Dy.apply(this,arguments),Zo){if(Zo){var c=pc;Zo=!1,pc=null}else throw Error(ce(198));mc||(mc=!0,th=c)}}function fs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Qg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function hm(t){if(fs(t)!==t)throw Error(ce(188))}function Iy(t){var e=t.alternate;if(!e){if(e=fs(t),e===null)throw Error(ce(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return hm(r),t;if(s===i)return hm(r),e;s=s.sibling}throw Error(ce(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ce(189))}}if(n.alternate!==i)throw Error(ce(190))}if(n.tag!==3)throw Error(ce(188));return n.stateNode.current===n?t:e}function ex(t){return t=Iy(t),t!==null?tx(t):null}function tx(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=tx(t);if(e!==null)return e;t=t.sibling}return null}var nx=Gn.unstable_scheduleCallback,fm=Gn.unstable_cancelCallback,Uy=Gn.unstable_shouldYield,Oy=Gn.unstable_requestPaint,Ht=Gn.unstable_now,Fy=Gn.unstable_getCurrentPriorityLevel,Uf=Gn.unstable_ImmediatePriority,ix=Gn.unstable_UserBlockingPriority,gc=Gn.unstable_NormalPriority,ky=Gn.unstable_LowPriority,rx=Gn.unstable_IdlePriority,$c=null,Ni=null;function zy(t){if(Ni&&typeof Ni.onCommitFiberRoot=="function")try{Ni.onCommitFiberRoot($c,t,void 0,(t.current.flags&128)===128)}catch{}}var mi=Math.clz32?Math.clz32:Gy,By=Math.log,Hy=Math.LN2;function Gy(t){return t>>>=0,t===0?32:31-(By(t)/Hy|0)|0}var ll=64,cl=4194304;function jo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function xc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=jo(a):(s&=o,s!==0&&(i=jo(s)))}else o=n&~r,o!==0?i=jo(o):s!==0&&(i=jo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-mi(e),r=1<<n,i|=t[n],e&=~r;return i}function Vy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wy(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-mi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Vy(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function nh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function sx(){var t=ll;return ll<<=1,!(ll&4194240)&&(ll=64),t}function Iu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ua(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-mi(e),t[e]=n}function jy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-mi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Of(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-mi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var wt=0;function ox(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ax,Ff,lx,cx,ux,ih=!1,ul=[],wr=null,br=null,Tr=null,fa=new Map,pa=new Map,_r=[],Xy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pm(t,e){switch(t){case"focusin":case"focusout":wr=null;break;case"dragenter":case"dragleave":br=null;break;case"mouseover":case"mouseout":Tr=null;break;case"pointerover":case"pointerout":fa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":pa.delete(e.pointerId)}}function Ro(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Fa(e),e!==null&&Ff(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Yy(t,e,n,i,r){switch(e){case"focusin":return wr=Ro(wr,t,e,n,i,r),!0;case"dragenter":return br=Ro(br,t,e,n,i,r),!0;case"mouseover":return Tr=Ro(Tr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return fa.set(s,Ro(fa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,pa.set(s,Ro(pa.get(s)||null,t,e,n,i,r)),!0}return!1}function dx(t){var e=Kr(t.target);if(e!==null){var n=fs(e);if(n!==null){if(e=n.tag,e===13){if(e=Qg(n),e!==null){t.blockedOn=e,ux(t.priority,function(){lx(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Kl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=rh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Jd=i,n.target.dispatchEvent(i),Jd=null}else return e=Fa(n),e!==null&&Ff(e),t.blockedOn=n,!1;e.shift()}return!0}function mm(t,e,n){Kl(t)&&n.delete(e)}function $y(){ih=!1,wr!==null&&Kl(wr)&&(wr=null),br!==null&&Kl(br)&&(br=null),Tr!==null&&Kl(Tr)&&(Tr=null),fa.forEach(mm),pa.forEach(mm)}function Po(t,e){t.blockedOn===e&&(t.blockedOn=null,ih||(ih=!0,Gn.unstable_scheduleCallback(Gn.unstable_NormalPriority,$y)))}function ma(t){function e(r){return Po(r,t)}if(0<ul.length){Po(ul[0],t);for(var n=1;n<ul.length;n++){var i=ul[n];i.blockedOn===t&&(i.blockedOn=null)}}for(wr!==null&&Po(wr,t),br!==null&&Po(br,t),Tr!==null&&Po(Tr,t),fa.forEach(e),pa.forEach(e),n=0;n<_r.length;n++)i=_r[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<_r.length&&(n=_r[0],n.blockedOn===null);)dx(n),n.blockedOn===null&&_r.shift()}var Js=or.ReactCurrentBatchConfig,vc=!0;function qy(t,e,n,i){var r=wt,s=Js.transition;Js.transition=null;try{wt=1,kf(t,e,n,i)}finally{wt=r,Js.transition=s}}function Ky(t,e,n,i){var r=wt,s=Js.transition;Js.transition=null;try{wt=4,kf(t,e,n,i)}finally{wt=r,Js.transition=s}}function kf(t,e,n,i){if(vc){var r=rh(t,e,n,i);if(r===null)Wu(t,e,i,_c,n),pm(t,i);else if(Yy(r,t,e,n,i))i.stopPropagation();else if(pm(t,i),e&4&&-1<Xy.indexOf(t)){for(;r!==null;){var s=Fa(r);if(s!==null&&ax(s),s=rh(t,e,n,i),s===null&&Wu(t,e,i,_c,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Wu(t,e,i,null,n)}}var _c=null;function rh(t,e,n,i){if(_c=null,t=If(i),t=Kr(t),t!==null)if(e=fs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Qg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return _c=t,null}function hx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fy()){case Uf:return 1;case ix:return 4;case gc:case ky:return 16;case rx:return 536870912;default:return 16}default:return 16}}var Mr=null,zf=null,Zl=null;function fx(){if(Zl)return Zl;var t,e=zf,n=e.length,i,r="value"in Mr?Mr.value:Mr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Zl=r.slice(t,1<i?1-i:void 0)}function Jl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function dl(){return!0}function gm(){return!1}function Wn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?dl:gm,this.isPropagationStopped=gm,this}return kt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=dl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=dl)},persist:function(){},isPersistent:dl}),e}var go={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bf=Wn(go),Oa=kt({},go,{view:0,detail:0}),Zy=Wn(Oa),Uu,Ou,No,qc=kt({},Oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==No&&(No&&t.type==="mousemove"?(Uu=t.screenX-No.screenX,Ou=t.screenY-No.screenY):Ou=Uu=0,No=t),Uu)},movementY:function(t){return"movementY"in t?t.movementY:Ou}}),xm=Wn(qc),Jy=kt({},qc,{dataTransfer:0}),Qy=Wn(Jy),eS=kt({},Oa,{relatedTarget:0}),Fu=Wn(eS),tS=kt({},go,{animationName:0,elapsedTime:0,pseudoElement:0}),nS=Wn(tS),iS=kt({},go,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),rS=Wn(iS),sS=kt({},go,{data:0}),vm=Wn(sS),oS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},aS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=lS[t])?!!e[t]:!1}function Hf(){return cS}var uS=kt({},Oa,{key:function(t){if(t.key){var e=oS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Jl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?aS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hf,charCode:function(t){return t.type==="keypress"?Jl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Jl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),dS=Wn(uS),hS=kt({},qc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_m=Wn(hS),fS=kt({},Oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hf}),pS=Wn(fS),mS=kt({},go,{propertyName:0,elapsedTime:0,pseudoElement:0}),gS=Wn(mS),xS=kt({},qc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),vS=Wn(xS),_S=[9,13,27,32],Gf=tr&&"CompositionEvent"in window,Jo=null;tr&&"documentMode"in document&&(Jo=document.documentMode);var yS=tr&&"TextEvent"in window&&!Jo,px=tr&&(!Gf||Jo&&8<Jo&&11>=Jo),ym=" ",Sm=!1;function mx(t,e){switch(t){case"keyup":return _S.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Us=!1;function SS(t,e){switch(t){case"compositionend":return gx(e);case"keypress":return e.which!==32?null:(Sm=!0,ym);case"textInput":return t=e.data,t===ym&&Sm?null:t;default:return null}}function MS(t,e){if(Us)return t==="compositionend"||!Gf&&mx(t,e)?(t=fx(),Zl=zf=Mr=null,Us=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return px&&e.locale!=="ko"?null:e.data;default:return null}}var ES={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ES[t.type]:e==="textarea"}function xx(t,e,n,i){$g(i),e=yc(e,"onChange"),0<e.length&&(n=new Bf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Qo=null,ga=null;function wS(t){Cx(t,0)}function Kc(t){var e=ks(t);if(Hg(e))return t}function bS(t,e){if(t==="change")return e}var vx=!1;if(tr){var ku;if(tr){var zu="oninput"in document;if(!zu){var Em=document.createElement("div");Em.setAttribute("oninput","return;"),zu=typeof Em.oninput=="function"}ku=zu}else ku=!1;vx=ku&&(!document.documentMode||9<document.documentMode)}function wm(){Qo&&(Qo.detachEvent("onpropertychange",_x),ga=Qo=null)}function _x(t){if(t.propertyName==="value"&&Kc(ga)){var e=[];xx(e,ga,t,If(t)),Jg(wS,e)}}function TS(t,e,n){t==="focusin"?(wm(),Qo=e,ga=n,Qo.attachEvent("onpropertychange",_x)):t==="focusout"&&wm()}function AS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Kc(ga)}function CS(t,e){if(t==="click")return Kc(e)}function RS(t,e){if(t==="input"||t==="change")return Kc(e)}function PS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var vi=typeof Object.is=="function"?Object.is:PS;function xa(t,e){if(vi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Bd.call(e,r)||!vi(t[r],e[r]))return!1}return!0}function bm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Tm(t,e){var n=bm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bm(n)}}function yx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?yx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Sx(){for(var t=window,e=fc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=fc(t.document)}return e}function Vf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function NS(t){var e=Sx(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&yx(n.ownerDocument.documentElement,n)){if(i!==null&&Vf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Tm(n,s);var o=Tm(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var DS=tr&&"documentMode"in document&&11>=document.documentMode,Os=null,sh=null,ea=null,oh=!1;function Am(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;oh||Os==null||Os!==fc(i)||(i=Os,"selectionStart"in i&&Vf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ea&&xa(ea,i)||(ea=i,i=yc(sh,"onSelect"),0<i.length&&(e=new Bf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Os)))}function hl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Fs={animationend:hl("Animation","AnimationEnd"),animationiteration:hl("Animation","AnimationIteration"),animationstart:hl("Animation","AnimationStart"),transitionend:hl("Transition","TransitionEnd")},Bu={},Mx={};tr&&(Mx=document.createElement("div").style,"AnimationEvent"in window||(delete Fs.animationend.animation,delete Fs.animationiteration.animation,delete Fs.animationstart.animation),"TransitionEvent"in window||delete Fs.transitionend.transition);function Zc(t){if(Bu[t])return Bu[t];if(!Fs[t])return t;var e=Fs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Mx)return Bu[t]=e[n];return t}var Ex=Zc("animationend"),wx=Zc("animationiteration"),bx=Zc("animationstart"),Tx=Zc("transitionend"),Ax=new Map,Cm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Or(t,e){Ax.set(t,e),hs(e,[t])}for(var Hu=0;Hu<Cm.length;Hu++){var Gu=Cm[Hu],LS=Gu.toLowerCase(),IS=Gu[0].toUpperCase()+Gu.slice(1);Or(LS,"on"+IS)}Or(Ex,"onAnimationEnd");Or(wx,"onAnimationIteration");Or(bx,"onAnimationStart");Or("dblclick","onDoubleClick");Or("focusin","onFocus");Or("focusout","onBlur");Or(Tx,"onTransitionEnd");ro("onMouseEnter",["mouseout","mouseover"]);ro("onMouseLeave",["mouseout","mouseover"]);ro("onPointerEnter",["pointerout","pointerover"]);ro("onPointerLeave",["pointerout","pointerover"]);hs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hs("onBeforeInput",["compositionend","keypress","textInput","paste"]);hs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),US=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xo));function Rm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Ly(i,e,void 0,t),t.currentTarget=null}function Cx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Rm(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Rm(r,a,c),s=l}}}if(mc)throw t=th,mc=!1,th=null,t}function Pt(t,e){var n=e[dh];n===void 0&&(n=e[dh]=new Set);var i=t+"__bubble";n.has(i)||(Rx(e,t,2,!1),n.add(i))}function Vu(t,e,n){var i=0;e&&(i|=4),Rx(n,t,i,e)}var fl="_reactListening"+Math.random().toString(36).slice(2);function va(t){if(!t[fl]){t[fl]=!0,Og.forEach(function(n){n!=="selectionchange"&&(US.has(n)||Vu(n,!1,t),Vu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[fl]||(e[fl]=!0,Vu("selectionchange",!1,e))}}function Rx(t,e,n,i){switch(hx(e)){case 1:var r=qy;break;case 4:r=Ky;break;default:r=kf}n=r.bind(null,e,n,t),r=void 0,!eh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Wu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Kr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Jg(function(){var c=s,f=If(n),p=[];e:{var d=Ax.get(t);if(d!==void 0){var m=Bf,g=t;switch(t){case"keypress":if(Jl(n)===0)break e;case"keydown":case"keyup":m=dS;break;case"focusin":g="focus",m=Fu;break;case"focusout":g="blur",m=Fu;break;case"beforeblur":case"afterblur":m=Fu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=xm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Qy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=pS;break;case Ex:case wx:case bx:m=nS;break;case Tx:m=gS;break;case"scroll":m=Zy;break;case"wheel":m=vS;break;case"copy":case"cut":case"paste":m=rS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=_m}var M=(e&4)!==0,x=!M&&t==="scroll",h=M?d!==null?d+"Capture":null:d;M=[];for(var _=c,E;_!==null;){E=_;var S=E.stateNode;if(E.tag===5&&S!==null&&(E=S,h!==null&&(S=ha(_,h),S!=null&&M.push(_a(_,S,E)))),x)break;_=_.return}0<M.length&&(d=new m(d,g,null,n,f),p.push({event:d,listeners:M}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==Jd&&(g=n.relatedTarget||n.fromElement)&&(Kr(g)||g[nr]))break e;if((m||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,m?(g=n.relatedTarget||n.toElement,m=c,g=g?Kr(g):null,g!==null&&(x=fs(g),g!==x||g.tag!==5&&g.tag!==6)&&(g=null)):(m=null,g=c),m!==g)){if(M=xm,S="onMouseLeave",h="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(M=_m,S="onPointerLeave",h="onPointerEnter",_="pointer"),x=m==null?d:ks(m),E=g==null?d:ks(g),d=new M(S,_+"leave",m,n,f),d.target=x,d.relatedTarget=E,S=null,Kr(f)===c&&(M=new M(h,_+"enter",g,n,f),M.target=E,M.relatedTarget=x,S=M),x=S,m&&g)t:{for(M=m,h=g,_=0,E=M;E;E=xs(E))_++;for(E=0,S=h;S;S=xs(S))E++;for(;0<_-E;)M=xs(M),_--;for(;0<E-_;)h=xs(h),E--;for(;_--;){if(M===h||h!==null&&M===h.alternate)break t;M=xs(M),h=xs(h)}M=null}else M=null;m!==null&&Pm(p,d,m,M,!1),g!==null&&x!==null&&Pm(p,x,g,M,!0)}}e:{if(d=c?ks(c):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var b=bS;else if(Mm(d))if(vx)b=RS;else{b=AS;var T=TS}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(b=CS);if(b&&(b=b(t,c))){xx(p,b,n,f);break e}T&&T(t,d,c),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&Yd(d,"number",d.value)}switch(T=c?ks(c):window,t){case"focusin":(Mm(T)||T.contentEditable==="true")&&(Os=T,sh=c,ea=null);break;case"focusout":ea=sh=Os=null;break;case"mousedown":oh=!0;break;case"contextmenu":case"mouseup":case"dragend":oh=!1,Am(p,n,f);break;case"selectionchange":if(DS)break;case"keydown":case"keyup":Am(p,n,f)}var C;if(Gf)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Us?mx(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(px&&n.locale!=="ko"&&(Us||v!=="onCompositionStart"?v==="onCompositionEnd"&&Us&&(C=fx()):(Mr=f,zf="value"in Mr?Mr.value:Mr.textContent,Us=!0)),T=yc(c,v),0<T.length&&(v=new vm(v,t,null,n,f),p.push({event:v,listeners:T}),C?v.data=C:(C=gx(n),C!==null&&(v.data=C)))),(C=yS?SS(t,n):MS(t,n))&&(c=yc(c,"onBeforeInput"),0<c.length&&(f=new vm("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:c}),f.data=C))}Cx(p,e)})}function _a(t,e,n){return{instance:t,listener:e,currentTarget:n}}function yc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ha(t,n),s!=null&&i.unshift(_a(t,s,r)),s=ha(t,e),s!=null&&i.push(_a(t,s,r))),t=t.return}return i}function xs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Pm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ha(n,s),l!=null&&o.unshift(_a(n,l,a))):r||(l=ha(n,s),l!=null&&o.push(_a(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var OS=/\r\n?/g,FS=/\u0000|\uFFFD/g;function Nm(t){return(typeof t=="string"?t:""+t).replace(OS,`
`).replace(FS,"")}function pl(t,e,n){if(e=Nm(e),Nm(t)!==e&&n)throw Error(ce(425))}function Sc(){}var ah=null,lh=null;function ch(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var uh=typeof setTimeout=="function"?setTimeout:void 0,kS=typeof clearTimeout=="function"?clearTimeout:void 0,Dm=typeof Promise=="function"?Promise:void 0,zS=typeof queueMicrotask=="function"?queueMicrotask:typeof Dm<"u"?function(t){return Dm.resolve(null).then(t).catch(BS)}:uh;function BS(t){setTimeout(function(){throw t})}function ju(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ma(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ma(e)}function Ar(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Lm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var xo=Math.random().toString(36).slice(2),Ai="__reactFiber$"+xo,ya="__reactProps$"+xo,nr="__reactContainer$"+xo,dh="__reactEvents$"+xo,HS="__reactListeners$"+xo,GS="__reactHandles$"+xo;function Kr(t){var e=t[Ai];if(e)return e;for(var n=t.parentNode;n;){if(e=n[nr]||n[Ai]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Lm(t);t!==null;){if(n=t[Ai])return n;t=Lm(t)}return e}t=n,n=t.parentNode}return null}function Fa(t){return t=t[Ai]||t[nr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ks(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ce(33))}function Jc(t){return t[ya]||null}var hh=[],zs=-1;function Fr(t){return{current:t}}function Nt(t){0>zs||(t.current=hh[zs],hh[zs]=null,zs--)}function Ct(t,e){zs++,hh[zs]=t.current,t.current=e}var Lr={},pn=Fr(Lr),Nn=Fr(!1),rs=Lr;function so(t,e){var n=t.type.contextTypes;if(!n)return Lr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Dn(t){return t=t.childContextTypes,t!=null}function Mc(){Nt(Nn),Nt(pn)}function Im(t,e,n){if(pn.current!==Lr)throw Error(ce(168));Ct(pn,e),Ct(Nn,n)}function Px(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ce(108,Ty(t)||"Unknown",r));return kt({},n,i)}function Ec(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Lr,rs=pn.current,Ct(pn,t),Ct(Nn,Nn.current),!0}function Um(t,e,n){var i=t.stateNode;if(!i)throw Error(ce(169));n?(t=Px(t,e,rs),i.__reactInternalMemoizedMergedChildContext=t,Nt(Nn),Nt(pn),Ct(pn,t)):Nt(Nn),Ct(Nn,n)}var Xi=null,Qc=!1,Xu=!1;function Nx(t){Xi===null?Xi=[t]:Xi.push(t)}function VS(t){Qc=!0,Nx(t)}function kr(){if(!Xu&&Xi!==null){Xu=!0;var t=0,e=wt;try{var n=Xi;for(wt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Xi=null,Qc=!1}catch(r){throw Xi!==null&&(Xi=Xi.slice(t+1)),nx(Uf,kr),r}finally{wt=e,Xu=!1}}return null}var Bs=[],Hs=0,wc=null,bc=0,Jn=[],Qn=0,ss=null,qi=1,Ki="";function Yr(t,e){Bs[Hs++]=bc,Bs[Hs++]=wc,wc=t,bc=e}function Dx(t,e,n){Jn[Qn++]=qi,Jn[Qn++]=Ki,Jn[Qn++]=ss,ss=t;var i=qi;t=Ki;var r=32-mi(i)-1;i&=~(1<<r),n+=1;var s=32-mi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,qi=1<<32-mi(e)+r|n<<r|i,Ki=s+t}else qi=1<<s|n<<r|i,Ki=t}function Wf(t){t.return!==null&&(Yr(t,1),Dx(t,1,0))}function jf(t){for(;t===wc;)wc=Bs[--Hs],Bs[Hs]=null,bc=Bs[--Hs],Bs[Hs]=null;for(;t===ss;)ss=Jn[--Qn],Jn[Qn]=null,Ki=Jn[--Qn],Jn[Qn]=null,qi=Jn[--Qn],Jn[Qn]=null}var Hn=null,Bn=null,Lt=!1,hi=null;function Lx(t,e){var n=ei(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Om(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Hn=t,Bn=Ar(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Hn=t,Bn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ss!==null?{id:qi,overflow:Ki}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ei(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Hn=t,Bn=null,!0):!1;default:return!1}}function fh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ph(t){if(Lt){var e=Bn;if(e){var n=e;if(!Om(t,e)){if(fh(t))throw Error(ce(418));e=Ar(n.nextSibling);var i=Hn;e&&Om(t,e)?Lx(i,n):(t.flags=t.flags&-4097|2,Lt=!1,Hn=t)}}else{if(fh(t))throw Error(ce(418));t.flags=t.flags&-4097|2,Lt=!1,Hn=t}}}function Fm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Hn=t}function ml(t){if(t!==Hn)return!1;if(!Lt)return Fm(t),Lt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ch(t.type,t.memoizedProps)),e&&(e=Bn)){if(fh(t))throw Ix(),Error(ce(418));for(;e;)Lx(t,e),e=Ar(e.nextSibling)}if(Fm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ce(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Bn=Ar(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Bn=null}}else Bn=Hn?Ar(t.stateNode.nextSibling):null;return!0}function Ix(){for(var t=Bn;t;)t=Ar(t.nextSibling)}function oo(){Bn=Hn=null,Lt=!1}function Xf(t){hi===null?hi=[t]:hi.push(t)}var WS=or.ReactCurrentBatchConfig;function Do(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ce(309));var i=n.stateNode}if(!i)throw Error(ce(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ce(284));if(!n._owner)throw Error(ce(290,t))}return t}function gl(t,e){throw t=Object.prototype.toString.call(e),Error(ce(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function km(t){var e=t._init;return e(t._payload)}function Ux(t){function e(h,_){if(t){var E=h.deletions;E===null?(h.deletions=[_],h.flags|=16):E.push(_)}}function n(h,_){if(!t)return null;for(;_!==null;)e(h,_),_=_.sibling;return null}function i(h,_){for(h=new Map;_!==null;)_.key!==null?h.set(_.key,_):h.set(_.index,_),_=_.sibling;return h}function r(h,_){return h=Nr(h,_),h.index=0,h.sibling=null,h}function s(h,_,E){return h.index=E,t?(E=h.alternate,E!==null?(E=E.index,E<_?(h.flags|=2,_):E):(h.flags|=2,_)):(h.flags|=1048576,_)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,_,E,S){return _===null||_.tag!==6?(_=Qu(E,h.mode,S),_.return=h,_):(_=r(_,E),_.return=h,_)}function l(h,_,E,S){var b=E.type;return b===Is?f(h,_,E.props.children,S,E.key):_!==null&&(_.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===xr&&km(b)===_.type)?(S=r(_,E.props),S.ref=Do(h,_,E),S.return=h,S):(S=sc(E.type,E.key,E.props,null,h.mode,S),S.ref=Do(h,_,E),S.return=h,S)}function c(h,_,E,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==E.containerInfo||_.stateNode.implementation!==E.implementation?(_=ed(E,h.mode,S),_.return=h,_):(_=r(_,E.children||[]),_.return=h,_)}function f(h,_,E,S,b){return _===null||_.tag!==7?(_=ns(E,h.mode,S,b),_.return=h,_):(_=r(_,E),_.return=h,_)}function p(h,_,E){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Qu(""+_,h.mode,E),_.return=h,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case sl:return E=sc(_.type,_.key,_.props,null,h.mode,E),E.ref=Do(h,null,_),E.return=h,E;case Ls:return _=ed(_,h.mode,E),_.return=h,_;case xr:var S=_._init;return p(h,S(_._payload),E)}if(Wo(_)||Ao(_))return _=ns(_,h.mode,E,null),_.return=h,_;gl(h,_)}return null}function d(h,_,E,S){var b=_!==null?_.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return b!==null?null:a(h,_,""+E,S);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case sl:return E.key===b?l(h,_,E,S):null;case Ls:return E.key===b?c(h,_,E,S):null;case xr:return b=E._init,d(h,_,b(E._payload),S)}if(Wo(E)||Ao(E))return b!==null?null:f(h,_,E,S,null);gl(h,E)}return null}function m(h,_,E,S,b){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(E)||null,a(_,h,""+S,b);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case sl:return h=h.get(S.key===null?E:S.key)||null,l(_,h,S,b);case Ls:return h=h.get(S.key===null?E:S.key)||null,c(_,h,S,b);case xr:var T=S._init;return m(h,_,E,T(S._payload),b)}if(Wo(S)||Ao(S))return h=h.get(E)||null,f(_,h,S,b,null);gl(_,S)}return null}function g(h,_,E,S){for(var b=null,T=null,C=_,v=_=0,A=null;C!==null&&v<E.length;v++){C.index>v?(A=C,C=null):A=C.sibling;var R=d(h,C,E[v],S);if(R===null){C===null&&(C=A);break}t&&C&&R.alternate===null&&e(h,C),_=s(R,_,v),T===null?b=R:T.sibling=R,T=R,C=A}if(v===E.length)return n(h,C),Lt&&Yr(h,v),b;if(C===null){for(;v<E.length;v++)C=p(h,E[v],S),C!==null&&(_=s(C,_,v),T===null?b=C:T.sibling=C,T=C);return Lt&&Yr(h,v),b}for(C=i(h,C);v<E.length;v++)A=m(C,h,v,E[v],S),A!==null&&(t&&A.alternate!==null&&C.delete(A.key===null?v:A.key),_=s(A,_,v),T===null?b=A:T.sibling=A,T=A);return t&&C.forEach(function(D){return e(h,D)}),Lt&&Yr(h,v),b}function M(h,_,E,S){var b=Ao(E);if(typeof b!="function")throw Error(ce(150));if(E=b.call(E),E==null)throw Error(ce(151));for(var T=b=null,C=_,v=_=0,A=null,R=E.next();C!==null&&!R.done;v++,R=E.next()){C.index>v?(A=C,C=null):A=C.sibling;var D=d(h,C,R.value,S);if(D===null){C===null&&(C=A);break}t&&C&&D.alternate===null&&e(h,C),_=s(D,_,v),T===null?b=D:T.sibling=D,T=D,C=A}if(R.done)return n(h,C),Lt&&Yr(h,v),b;if(C===null){for(;!R.done;v++,R=E.next())R=p(h,R.value,S),R!==null&&(_=s(R,_,v),T===null?b=R:T.sibling=R,T=R);return Lt&&Yr(h,v),b}for(C=i(h,C);!R.done;v++,R=E.next())R=m(C,h,v,R.value,S),R!==null&&(t&&R.alternate!==null&&C.delete(R.key===null?v:R.key),_=s(R,_,v),T===null?b=R:T.sibling=R,T=R);return t&&C.forEach(function(O){return e(h,O)}),Lt&&Yr(h,v),b}function x(h,_,E,S){if(typeof E=="object"&&E!==null&&E.type===Is&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case sl:e:{for(var b=E.key,T=_;T!==null;){if(T.key===b){if(b=E.type,b===Is){if(T.tag===7){n(h,T.sibling),_=r(T,E.props.children),_.return=h,h=_;break e}}else if(T.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===xr&&km(b)===T.type){n(h,T.sibling),_=r(T,E.props),_.ref=Do(h,T,E),_.return=h,h=_;break e}n(h,T);break}else e(h,T);T=T.sibling}E.type===Is?(_=ns(E.props.children,h.mode,S,E.key),_.return=h,h=_):(S=sc(E.type,E.key,E.props,null,h.mode,S),S.ref=Do(h,_,E),S.return=h,h=S)}return o(h);case Ls:e:{for(T=E.key;_!==null;){if(_.key===T)if(_.tag===4&&_.stateNode.containerInfo===E.containerInfo&&_.stateNode.implementation===E.implementation){n(h,_.sibling),_=r(_,E.children||[]),_.return=h,h=_;break e}else{n(h,_);break}else e(h,_);_=_.sibling}_=ed(E,h.mode,S),_.return=h,h=_}return o(h);case xr:return T=E._init,x(h,_,T(E._payload),S)}if(Wo(E))return g(h,_,E,S);if(Ao(E))return M(h,_,E,S);gl(h,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,_!==null&&_.tag===6?(n(h,_.sibling),_=r(_,E),_.return=h,h=_):(n(h,_),_=Qu(E,h.mode,S),_.return=h,h=_),o(h)):n(h,_)}return x}var ao=Ux(!0),Ox=Ux(!1),Tc=Fr(null),Ac=null,Gs=null,Yf=null;function $f(){Yf=Gs=Ac=null}function qf(t){var e=Tc.current;Nt(Tc),t._currentValue=e}function mh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Qs(t,e){Ac=t,Yf=Gs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Pn=!0),t.firstContext=null)}function ni(t){var e=t._currentValue;if(Yf!==t)if(t={context:t,memoizedValue:e,next:null},Gs===null){if(Ac===null)throw Error(ce(308));Gs=t,Ac.dependencies={lanes:0,firstContext:t}}else Gs=Gs.next=t;return e}var Zr=null;function Kf(t){Zr===null?Zr=[t]:Zr.push(t)}function Fx(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Kf(e)):(n.next=r.next,r.next=n),e.interleaved=n,ir(t,i)}function ir(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var vr=!1;function Zf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kx(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ji(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Cr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,ft&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ir(t,n)}return r=i.interleaved,r===null?(e.next=e,Kf(i)):(e.next=r.next,r.next=e),i.interleaved=e,ir(t,n)}function Ql(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Of(t,n)}}function zm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Cc(t,e,n,i){var r=t.updateQueue;vr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var p=r.baseState;o=0,f=c=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,M=a;switch(d=e,m=n,M.tag){case 1:if(g=M.payload,typeof g=="function"){p=g.call(m,p,d);break e}p=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=M.payload,d=typeof g=="function"?g.call(m,p,d):g,d==null)break e;p=kt({},p,d);break e;case 2:vr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=m,l=p):f=f.next=m,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=p),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);as|=o,t.lanes=o,t.memoizedState=p}}function Bm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ce(191,r));r.call(i)}}}var ka={},Di=Fr(ka),Sa=Fr(ka),Ma=Fr(ka);function Jr(t){if(t===ka)throw Error(ce(174));return t}function Jf(t,e){switch(Ct(Ma,e),Ct(Sa,t),Ct(Di,ka),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:qd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=qd(e,t)}Nt(Di),Ct(Di,e)}function lo(){Nt(Di),Nt(Sa),Nt(Ma)}function zx(t){Jr(Ma.current);var e=Jr(Di.current),n=qd(e,t.type);e!==n&&(Ct(Sa,t),Ct(Di,n))}function Qf(t){Sa.current===t&&(Nt(Di),Nt(Sa))}var Ut=Fr(0);function Rc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Yu=[];function ep(){for(var t=0;t<Yu.length;t++)Yu[t]._workInProgressVersionPrimary=null;Yu.length=0}var ec=or.ReactCurrentDispatcher,$u=or.ReactCurrentBatchConfig,os=0,Ft=null,Xt=null,Qt=null,Pc=!1,ta=!1,Ea=0,jS=0;function ln(){throw Error(ce(321))}function tp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!vi(t[n],e[n]))return!1;return!0}function np(t,e,n,i,r,s){if(os=s,Ft=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ec.current=t===null||t.memoizedState===null?qS:KS,t=n(i,r),ta){s=0;do{if(ta=!1,Ea=0,25<=s)throw Error(ce(301));s+=1,Qt=Xt=null,e.updateQueue=null,ec.current=ZS,t=n(i,r)}while(ta)}if(ec.current=Nc,e=Xt!==null&&Xt.next!==null,os=0,Qt=Xt=Ft=null,Pc=!1,e)throw Error(ce(300));return t}function ip(){var t=Ea!==0;return Ea=0,t}function bi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qt===null?Ft.memoizedState=Qt=t:Qt=Qt.next=t,Qt}function ii(){if(Xt===null){var t=Ft.alternate;t=t!==null?t.memoizedState:null}else t=Xt.next;var e=Qt===null?Ft.memoizedState:Qt.next;if(e!==null)Qt=e,Xt=t;else{if(t===null)throw Error(ce(310));Xt=t,t={memoizedState:Xt.memoizedState,baseState:Xt.baseState,baseQueue:Xt.baseQueue,queue:Xt.queue,next:null},Qt===null?Ft.memoizedState=Qt=t:Qt=Qt.next=t}return Qt}function wa(t,e){return typeof e=="function"?e(t):e}function qu(t){var e=ii(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=Xt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((os&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=p,o=i):l=l.next=p,Ft.lanes|=f,as|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,vi(i,e.memoizedState)||(Pn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Ft.lanes|=s,as|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ku(t){var e=ii(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);vi(s,e.memoizedState)||(Pn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Bx(){}function Hx(t,e){var n=Ft,i=ii(),r=e(),s=!vi(i.memoizedState,r);if(s&&(i.memoizedState=r,Pn=!0),i=i.queue,rp(Wx.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Qt!==null&&Qt.memoizedState.tag&1){if(n.flags|=2048,ba(9,Vx.bind(null,n,i,r,e),void 0,null),en===null)throw Error(ce(349));os&30||Gx(n,e,r)}return r}function Gx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ft.updateQueue,e===null?(e={lastEffect:null,stores:null},Ft.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Vx(t,e,n,i){e.value=n,e.getSnapshot=i,jx(e)&&Xx(t)}function Wx(t,e,n){return n(function(){jx(e)&&Xx(t)})}function jx(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!vi(t,n)}catch{return!0}}function Xx(t){var e=ir(t,1);e!==null&&gi(e,t,1,-1)}function Hm(t){var e=bi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:t},e.queue=t,t=t.dispatch=$S.bind(null,Ft,t),[e.memoizedState,t]}function ba(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Ft.updateQueue,e===null?(e={lastEffect:null,stores:null},Ft.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Yx(){return ii().memoizedState}function tc(t,e,n,i){var r=bi();Ft.flags|=t,r.memoizedState=ba(1|e,n,void 0,i===void 0?null:i)}function eu(t,e,n,i){var r=ii();i=i===void 0?null:i;var s=void 0;if(Xt!==null){var o=Xt.memoizedState;if(s=o.destroy,i!==null&&tp(i,o.deps)){r.memoizedState=ba(e,n,s,i);return}}Ft.flags|=t,r.memoizedState=ba(1|e,n,s,i)}function Gm(t,e){return tc(8390656,8,t,e)}function rp(t,e){return eu(2048,8,t,e)}function $x(t,e){return eu(4,2,t,e)}function qx(t,e){return eu(4,4,t,e)}function Kx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Zx(t,e,n){return n=n!=null?n.concat([t]):null,eu(4,4,Kx.bind(null,e,t),n)}function sp(){}function Jx(t,e){var n=ii();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&tp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Qx(t,e){var n=ii();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&tp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function ev(t,e,n){return os&21?(vi(n,e)||(n=sx(),Ft.lanes|=n,as|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Pn=!0),t.memoizedState=n)}function XS(t,e){var n=wt;wt=n!==0&&4>n?n:4,t(!0);var i=$u.transition;$u.transition={};try{t(!1),e()}finally{wt=n,$u.transition=i}}function tv(){return ii().memoizedState}function YS(t,e,n){var i=Pr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},nv(t))iv(e,n);else if(n=Fx(t,e,n,i),n!==null){var r=_n();gi(n,t,i,r),rv(n,e,i)}}function $S(t,e,n){var i=Pr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(nv(t))iv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,vi(a,o)){var l=e.interleaved;l===null?(r.next=r,Kf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Fx(t,e,r,i),n!==null&&(r=_n(),gi(n,t,i,r),rv(n,e,i))}}function nv(t){var e=t.alternate;return t===Ft||e!==null&&e===Ft}function iv(t,e){ta=Pc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function rv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Of(t,n)}}var Nc={readContext:ni,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useInsertionEffect:ln,useLayoutEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useMutableSource:ln,useSyncExternalStore:ln,useId:ln,unstable_isNewReconciler:!1},qS={readContext:ni,useCallback:function(t,e){return bi().memoizedState=[t,e===void 0?null:e],t},useContext:ni,useEffect:Gm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,tc(4194308,4,Kx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return tc(4194308,4,t,e)},useInsertionEffect:function(t,e){return tc(4,2,t,e)},useMemo:function(t,e){var n=bi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=bi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=YS.bind(null,Ft,t),[i.memoizedState,t]},useRef:function(t){var e=bi();return t={current:t},e.memoizedState=t},useState:Hm,useDebugValue:sp,useDeferredValue:function(t){return bi().memoizedState=t},useTransition:function(){var t=Hm(!1),e=t[0];return t=XS.bind(null,t[1]),bi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Ft,r=bi();if(Lt){if(n===void 0)throw Error(ce(407));n=n()}else{if(n=e(),en===null)throw Error(ce(349));os&30||Gx(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Gm(Wx.bind(null,i,s,t),[t]),i.flags|=2048,ba(9,Vx.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=bi(),e=en.identifierPrefix;if(Lt){var n=Ki,i=qi;n=(i&~(1<<32-mi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ea++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=jS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},KS={readContext:ni,useCallback:Jx,useContext:ni,useEffect:rp,useImperativeHandle:Zx,useInsertionEffect:$x,useLayoutEffect:qx,useMemo:Qx,useReducer:qu,useRef:Yx,useState:function(){return qu(wa)},useDebugValue:sp,useDeferredValue:function(t){var e=ii();return ev(e,Xt.memoizedState,t)},useTransition:function(){var t=qu(wa)[0],e=ii().memoizedState;return[t,e]},useMutableSource:Bx,useSyncExternalStore:Hx,useId:tv,unstable_isNewReconciler:!1},ZS={readContext:ni,useCallback:Jx,useContext:ni,useEffect:rp,useImperativeHandle:Zx,useInsertionEffect:$x,useLayoutEffect:qx,useMemo:Qx,useReducer:Ku,useRef:Yx,useState:function(){return Ku(wa)},useDebugValue:sp,useDeferredValue:function(t){var e=ii();return Xt===null?e.memoizedState=t:ev(e,Xt.memoizedState,t)},useTransition:function(){var t=Ku(wa)[0],e=ii().memoizedState;return[t,e]},useMutableSource:Bx,useSyncExternalStore:Hx,useId:tv,unstable_isNewReconciler:!1};function ui(t,e){if(t&&t.defaultProps){e=kt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function gh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:kt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var tu={isMounted:function(t){return(t=t._reactInternals)?fs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=_n(),r=Pr(t),s=Ji(i,r);s.payload=e,n!=null&&(s.callback=n),e=Cr(t,s,r),e!==null&&(gi(e,t,r,i),Ql(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=_n(),r=Pr(t),s=Ji(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Cr(t,s,r),e!==null&&(gi(e,t,r,i),Ql(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=_n(),i=Pr(t),r=Ji(n,i);r.tag=2,e!=null&&(r.callback=e),e=Cr(t,r,i),e!==null&&(gi(e,t,i,n),Ql(e,t,i))}};function Vm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!xa(n,i)||!xa(r,s):!0}function sv(t,e,n){var i=!1,r=Lr,s=e.contextType;return typeof s=="object"&&s!==null?s=ni(s):(r=Dn(e)?rs:pn.current,i=e.contextTypes,s=(i=i!=null)?so(t,r):Lr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=tu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Wm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&tu.enqueueReplaceState(e,e.state,null)}function xh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Zf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ni(s):(s=Dn(e)?rs:pn.current,r.context=so(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(gh(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&tu.enqueueReplaceState(r,r.state,null),Cc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function co(t,e){try{var n="",i=e;do n+=by(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Zu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function vh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var JS=typeof WeakMap=="function"?WeakMap:Map;function ov(t,e,n){n=Ji(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Lc||(Lc=!0,Ch=i),vh(t,e)},n}function av(t,e,n){n=Ji(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){vh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){vh(t,e),typeof i!="function"&&(Rr===null?Rr=new Set([this]):Rr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function jm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new JS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=h1.bind(null,t,e,n),e.then(t,t))}function Xm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ym(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ji(-1,1),e.tag=2,Cr(n,e,1))),n.lanes|=1),t)}var QS=or.ReactCurrentOwner,Pn=!1;function xn(t,e,n,i){e.child=t===null?Ox(e,null,n,i):ao(e,t.child,n,i)}function $m(t,e,n,i,r){n=n.render;var s=e.ref;return Qs(e,r),i=np(t,e,n,i,s,r),n=ip(),t!==null&&!Pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,rr(t,e,r)):(Lt&&n&&Wf(e),e.flags|=1,xn(t,e,i,r),e.child)}function qm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!fp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,lv(t,e,s,i,r)):(t=sc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:xa,n(o,i)&&t.ref===e.ref)return rr(t,e,r)}return e.flags|=1,t=Nr(s,i),t.ref=e.ref,t.return=e,e.child=t}function lv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(xa(s,i)&&t.ref===e.ref)if(Pn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Pn=!0);else return e.lanes=t.lanes,rr(t,e,r)}return _h(t,e,n,i,r)}function cv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ct(Ws,Fn),Fn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ct(Ws,Fn),Fn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Ct(Ws,Fn),Fn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Ct(Ws,Fn),Fn|=i;return xn(t,e,r,n),e.child}function uv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function _h(t,e,n,i,r){var s=Dn(n)?rs:pn.current;return s=so(e,s),Qs(e,r),n=np(t,e,n,i,s,r),i=ip(),t!==null&&!Pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,rr(t,e,r)):(Lt&&i&&Wf(e),e.flags|=1,xn(t,e,n,r),e.child)}function Km(t,e,n,i,r){if(Dn(n)){var s=!0;Ec(e)}else s=!1;if(Qs(e,r),e.stateNode===null)nc(t,e),sv(e,n,i),xh(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=ni(c):(c=Dn(n)?rs:pn.current,c=so(e,c));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Wm(e,o,i,c),vr=!1;var d=e.memoizedState;o.state=d,Cc(e,i,o,r),l=e.memoizedState,a!==i||d!==l||Nn.current||vr?(typeof f=="function"&&(gh(e,n,f,i),l=e.memoizedState),(a=vr||Vm(e,n,a,i,d,l,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,kx(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ui(e.type,a),o.props=c,p=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ni(l):(l=Dn(n)?rs:pn.current,l=so(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||d!==l)&&Wm(e,o,i,l),vr=!1,d=e.memoizedState,o.state=d,Cc(e,i,o,r);var g=e.memoizedState;a!==p||d!==g||Nn.current||vr?(typeof m=="function"&&(gh(e,n,m,i),g=e.memoizedState),(c=vr||Vm(e,n,c,i,d,g,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return yh(t,e,n,i,s,r)}function yh(t,e,n,i,r,s){uv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Um(e,n,!1),rr(t,e,s);i=e.stateNode,QS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=ao(e,t.child,null,s),e.child=ao(e,null,a,s)):xn(t,e,a,s),e.memoizedState=i.state,r&&Um(e,n,!0),e.child}function dv(t){var e=t.stateNode;e.pendingContext?Im(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Im(t,e.context,!1),Jf(t,e.containerInfo)}function Zm(t,e,n,i,r){return oo(),Xf(r),e.flags|=256,xn(t,e,n,i),e.child}var Sh={dehydrated:null,treeContext:null,retryLane:0};function Mh(t){return{baseLanes:t,cachePool:null,transitions:null}}function hv(t,e,n){var i=e.pendingProps,r=Ut.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Ct(Ut,r&1),t===null)return ph(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ru(o,i,0,null),t=ns(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Mh(n),e.memoizedState=Sh,t):op(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return e1(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Nr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Nr(a,s):(s=ns(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Mh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Sh,i}return s=t.child,t=s.sibling,i=Nr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function op(t,e){return e=ru({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function xl(t,e,n,i){return i!==null&&Xf(i),ao(e,t.child,null,n),t=op(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function e1(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Zu(Error(ce(422))),xl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ru({mode:"visible",children:i.children},r,0,null),s=ns(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ao(e,t.child,null,o),e.child.memoizedState=Mh(o),e.memoizedState=Sh,s);if(!(e.mode&1))return xl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ce(419)),i=Zu(s,i,void 0),xl(t,e,o,i)}if(a=(o&t.childLanes)!==0,Pn||a){if(i=en,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ir(t,r),gi(i,t,r,-1))}return hp(),i=Zu(Error(ce(421))),xl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=f1.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Bn=Ar(r.nextSibling),Hn=e,Lt=!0,hi=null,t!==null&&(Jn[Qn++]=qi,Jn[Qn++]=Ki,Jn[Qn++]=ss,qi=t.id,Ki=t.overflow,ss=e),e=op(e,i.children),e.flags|=4096,e)}function Jm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),mh(t.return,e,n)}function Ju(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function fv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(xn(t,e,i.children,n),i=Ut.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Jm(t,n,e);else if(t.tag===19)Jm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Ct(Ut,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Rc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Ju(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Rc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Ju(e,!0,n,null,s);break;case"together":Ju(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function nc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function rr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),as|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ce(153));if(e.child!==null){for(t=e.child,n=Nr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Nr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function t1(t,e,n){switch(e.tag){case 3:dv(e),oo();break;case 5:zx(e);break;case 1:Dn(e.type)&&Ec(e);break;case 4:Jf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ct(Tc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ct(Ut,Ut.current&1),e.flags|=128,null):n&e.child.childLanes?hv(t,e,n):(Ct(Ut,Ut.current&1),t=rr(t,e,n),t!==null?t.sibling:null);Ct(Ut,Ut.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return fv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ct(Ut,Ut.current),i)break;return null;case 22:case 23:return e.lanes=0,cv(t,e,n)}return rr(t,e,n)}var pv,Eh,mv,gv;pv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Eh=function(){};mv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Jr(Di.current);var s=null;switch(n){case"input":r=jd(t,r),i=jd(t,i),s=[];break;case"select":r=kt({},r,{value:void 0}),i=kt({},i,{value:void 0}),s=[];break;case"textarea":r=$d(t,r),i=$d(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Sc)}Kd(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ua.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ua.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Pt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};gv=function(t,e,n,i){n!==i&&(e.flags|=4)};function Lo(t,e){if(!Lt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function cn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function n1(t,e,n){var i=e.pendingProps;switch(jf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cn(e),null;case 1:return Dn(e.type)&&Mc(),cn(e),null;case 3:return i=e.stateNode,lo(),Nt(Nn),Nt(pn),ep(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ml(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,hi!==null&&(Nh(hi),hi=null))),Eh(t,e),cn(e),null;case 5:Qf(e);var r=Jr(Ma.current);if(n=e.type,t!==null&&e.stateNode!=null)mv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ce(166));return cn(e),null}if(t=Jr(Di.current),ml(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Ai]=e,i[ya]=s,t=(e.mode&1)!==0,n){case"dialog":Pt("cancel",i),Pt("close",i);break;case"iframe":case"object":case"embed":Pt("load",i);break;case"video":case"audio":for(r=0;r<Xo.length;r++)Pt(Xo[r],i);break;case"source":Pt("error",i);break;case"img":case"image":case"link":Pt("error",i),Pt("load",i);break;case"details":Pt("toggle",i);break;case"input":am(i,s),Pt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Pt("invalid",i);break;case"textarea":cm(i,s),Pt("invalid",i)}Kd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&pl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&pl(i.textContent,a,t),r=["children",""+a]):ua.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Pt("scroll",i)}switch(n){case"input":ol(i),lm(i,s,!0);break;case"textarea":ol(i),um(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Sc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Wg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Ai]=e,t[ya]=i,pv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Zd(n,i),n){case"dialog":Pt("cancel",t),Pt("close",t),r=i;break;case"iframe":case"object":case"embed":Pt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Xo.length;r++)Pt(Xo[r],t);r=i;break;case"source":Pt("error",t),r=i;break;case"img":case"image":case"link":Pt("error",t),Pt("load",t),r=i;break;case"details":Pt("toggle",t),r=i;break;case"input":am(t,i),r=jd(t,i),Pt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=kt({},i,{value:void 0}),Pt("invalid",t);break;case"textarea":cm(t,i),r=$d(t,i),Pt("invalid",t);break;default:r=i}Kd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Yg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&jg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&da(t,l):typeof l=="number"&&da(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ua.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Pt("scroll",t):l!=null&&Pf(t,s,l,o))}switch(n){case"input":ol(t),lm(t,i,!1);break;case"textarea":ol(t),um(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Dr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?qs(t,!!i.multiple,s,!1):i.defaultValue!=null&&qs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Sc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return cn(e),null;case 6:if(t&&e.stateNode!=null)gv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ce(166));if(n=Jr(Ma.current),Jr(Di.current),ml(e)){if(i=e.stateNode,n=e.memoizedProps,i[Ai]=e,(s=i.nodeValue!==n)&&(t=Hn,t!==null))switch(t.tag){case 3:pl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&pl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ai]=e,e.stateNode=i}return cn(e),null;case 13:if(Nt(Ut),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Lt&&Bn!==null&&e.mode&1&&!(e.flags&128))Ix(),oo(),e.flags|=98560,s=!1;else if(s=ml(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ce(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ce(317));s[Ai]=e}else oo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;cn(e),s=!1}else hi!==null&&(Nh(hi),hi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Ut.current&1?Yt===0&&(Yt=3):hp())),e.updateQueue!==null&&(e.flags|=4),cn(e),null);case 4:return lo(),Eh(t,e),t===null&&va(e.stateNode.containerInfo),cn(e),null;case 10:return qf(e.type._context),cn(e),null;case 17:return Dn(e.type)&&Mc(),cn(e),null;case 19:if(Nt(Ut),s=e.memoizedState,s===null)return cn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Lo(s,!1);else{if(Yt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Rc(t),o!==null){for(e.flags|=128,Lo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ct(Ut,Ut.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ht()>uo&&(e.flags|=128,i=!0,Lo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Rc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Lo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Lt)return cn(e),null}else 2*Ht()-s.renderingStartTime>uo&&n!==1073741824&&(e.flags|=128,i=!0,Lo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ht(),e.sibling=null,n=Ut.current,Ct(Ut,i?n&1|2:n&1),e):(cn(e),null);case 22:case 23:return dp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Fn&1073741824&&(cn(e),e.subtreeFlags&6&&(e.flags|=8192)):cn(e),null;case 24:return null;case 25:return null}throw Error(ce(156,e.tag))}function i1(t,e){switch(jf(e),e.tag){case 1:return Dn(e.type)&&Mc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return lo(),Nt(Nn),Nt(pn),ep(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Qf(e),null;case 13:if(Nt(Ut),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ce(340));oo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Nt(Ut),null;case 4:return lo(),null;case 10:return qf(e.type._context),null;case 22:case 23:return dp(),null;case 24:return null;default:return null}}var vl=!1,hn=!1,r1=typeof WeakSet=="function"?WeakSet:Set,Ce=null;function Vs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Bt(t,e,i)}else n.current=null}function wh(t,e,n){try{n()}catch(i){Bt(t,e,i)}}var Qm=!1;function s1(t,e){if(ah=vc,t=Sx(),Vf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,p=t,d=null;t:for(;;){for(var m;p!==n||r!==0&&p.nodeType!==3||(a=o+r),p!==s||i!==0&&p.nodeType!==3||(l=o+i),p.nodeType===3&&(o+=p.nodeValue.length),(m=p.firstChild)!==null;)d=p,p=m;for(;;){if(p===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++f===i&&(l=o),(m=p.nextSibling)!==null)break;p=d,d=p.parentNode}p=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(lh={focusedElem:t,selectionRange:n},vc=!1,Ce=e;Ce!==null;)if(e=Ce,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ce=t;else for(;Ce!==null;){e=Ce;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var M=g.memoizedProps,x=g.memoizedState,h=e.stateNode,_=h.getSnapshotBeforeUpdate(e.elementType===e.type?M:ui(e.type,M),x);h.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var E=e.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ce(163))}}catch(S){Bt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Ce=t;break}Ce=e.return}return g=Qm,Qm=!1,g}function na(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&wh(e,n,s)}r=r.next}while(r!==i)}}function nu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function bh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function xv(t){var e=t.alternate;e!==null&&(t.alternate=null,xv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ai],delete e[ya],delete e[dh],delete e[HS],delete e[GS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function vv(t){return t.tag===5||t.tag===3||t.tag===4}function e0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||vv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Th(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Sc));else if(i!==4&&(t=t.child,t!==null))for(Th(t,e,n),t=t.sibling;t!==null;)Th(t,e,n),t=t.sibling}function Ah(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Ah(t,e,n),t=t.sibling;t!==null;)Ah(t,e,n),t=t.sibling}var rn=null,di=!1;function dr(t,e,n){for(n=n.child;n!==null;)_v(t,e,n),n=n.sibling}function _v(t,e,n){if(Ni&&typeof Ni.onCommitFiberUnmount=="function")try{Ni.onCommitFiberUnmount($c,n)}catch{}switch(n.tag){case 5:hn||Vs(n,e);case 6:var i=rn,r=di;rn=null,dr(t,e,n),rn=i,di=r,rn!==null&&(di?(t=rn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):rn.removeChild(n.stateNode));break;case 18:rn!==null&&(di?(t=rn,n=n.stateNode,t.nodeType===8?ju(t.parentNode,n):t.nodeType===1&&ju(t,n),ma(t)):ju(rn,n.stateNode));break;case 4:i=rn,r=di,rn=n.stateNode.containerInfo,di=!0,dr(t,e,n),rn=i,di=r;break;case 0:case 11:case 14:case 15:if(!hn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&wh(n,e,o),r=r.next}while(r!==i)}dr(t,e,n);break;case 1:if(!hn&&(Vs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Bt(n,e,a)}dr(t,e,n);break;case 21:dr(t,e,n);break;case 22:n.mode&1?(hn=(i=hn)||n.memoizedState!==null,dr(t,e,n),hn=i):dr(t,e,n);break;default:dr(t,e,n)}}function t0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new r1),e.forEach(function(i){var r=p1.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function oi(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:rn=a.stateNode,di=!1;break e;case 3:rn=a.stateNode.containerInfo,di=!0;break e;case 4:rn=a.stateNode.containerInfo,di=!0;break e}a=a.return}if(rn===null)throw Error(ce(160));_v(s,o,r),rn=null,di=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Bt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)yv(e,t),e=e.sibling}function yv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(oi(e,t),Mi(t),i&4){try{na(3,t,t.return),nu(3,t)}catch(M){Bt(t,t.return,M)}try{na(5,t,t.return)}catch(M){Bt(t,t.return,M)}}break;case 1:oi(e,t),Mi(t),i&512&&n!==null&&Vs(n,n.return);break;case 5:if(oi(e,t),Mi(t),i&512&&n!==null&&Vs(n,n.return),t.flags&32){var r=t.stateNode;try{da(r,"")}catch(M){Bt(t,t.return,M)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Gg(r,s),Zd(a,o);var c=Zd(a,s);for(o=0;o<l.length;o+=2){var f=l[o],p=l[o+1];f==="style"?Yg(r,p):f==="dangerouslySetInnerHTML"?jg(r,p):f==="children"?da(r,p):Pf(r,f,p,c)}switch(a){case"input":Xd(r,s);break;case"textarea":Vg(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?qs(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?qs(r,!!s.multiple,s.defaultValue,!0):qs(r,!!s.multiple,s.multiple?[]:"",!1))}r[ya]=s}catch(M){Bt(t,t.return,M)}}break;case 6:if(oi(e,t),Mi(t),i&4){if(t.stateNode===null)throw Error(ce(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(M){Bt(t,t.return,M)}}break;case 3:if(oi(e,t),Mi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ma(e.containerInfo)}catch(M){Bt(t,t.return,M)}break;case 4:oi(e,t),Mi(t);break;case 13:oi(e,t),Mi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(cp=Ht())),i&4&&t0(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(hn=(c=hn)||f,oi(e,t),hn=c):oi(e,t),Mi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Ce=t,f=t.child;f!==null;){for(p=Ce=f;Ce!==null;){switch(d=Ce,m=d.child,d.tag){case 0:case 11:case 14:case 15:na(4,d,d.return);break;case 1:Vs(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(M){Bt(i,n,M)}}break;case 5:Vs(d,d.return);break;case 22:if(d.memoizedState!==null){i0(p);continue}}m!==null?(m.return=d,Ce=m):i0(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{r=p.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,l=p.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Xg("display",o))}catch(M){Bt(t,t.return,M)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(M){Bt(t,t.return,M)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:oi(e,t),Mi(t),i&4&&t0(t);break;case 21:break;default:oi(e,t),Mi(t)}}function Mi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(vv(n)){var i=n;break e}n=n.return}throw Error(ce(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(da(r,""),i.flags&=-33);var s=e0(t);Ah(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=e0(t);Th(t,a,o);break;default:throw Error(ce(161))}}catch(l){Bt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function o1(t,e,n){Ce=t,Sv(t)}function Sv(t,e,n){for(var i=(t.mode&1)!==0;Ce!==null;){var r=Ce,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||vl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||hn;a=vl;var c=hn;if(vl=o,(hn=l)&&!c)for(Ce=r;Ce!==null;)o=Ce,l=o.child,o.tag===22&&o.memoizedState!==null?r0(r):l!==null?(l.return=o,Ce=l):r0(r);for(;s!==null;)Ce=s,Sv(s),s=s.sibling;Ce=r,vl=a,hn=c}n0(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ce=s):n0(t)}}function n0(t){for(;Ce!==null;){var e=Ce;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:hn||nu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!hn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ui(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Bm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Bm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&ma(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ce(163))}hn||e.flags&512&&bh(e)}catch(d){Bt(e,e.return,d)}}if(e===t){Ce=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ce=n;break}Ce=e.return}}function i0(t){for(;Ce!==null;){var e=Ce;if(e===t){Ce=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ce=n;break}Ce=e.return}}function r0(t){for(;Ce!==null;){var e=Ce;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{nu(4,e)}catch(l){Bt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Bt(e,r,l)}}var s=e.return;try{bh(e)}catch(l){Bt(e,s,l)}break;case 5:var o=e.return;try{bh(e)}catch(l){Bt(e,o,l)}}}catch(l){Bt(e,e.return,l)}if(e===t){Ce=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ce=a;break}Ce=e.return}}var a1=Math.ceil,Dc=or.ReactCurrentDispatcher,ap=or.ReactCurrentOwner,ti=or.ReactCurrentBatchConfig,ft=0,en=null,Vt=null,on=0,Fn=0,Ws=Fr(0),Yt=0,Ta=null,as=0,iu=0,lp=0,ia=null,Rn=null,cp=0,uo=1/0,ji=null,Lc=!1,Ch=null,Rr=null,_l=!1,Er=null,Ic=0,ra=0,Rh=null,ic=-1,rc=0;function _n(){return ft&6?Ht():ic!==-1?ic:ic=Ht()}function Pr(t){return t.mode&1?ft&2&&on!==0?on&-on:WS.transition!==null?(rc===0&&(rc=sx()),rc):(t=wt,t!==0||(t=window.event,t=t===void 0?16:hx(t.type)),t):1}function gi(t,e,n,i){if(50<ra)throw ra=0,Rh=null,Error(ce(185));Ua(t,n,i),(!(ft&2)||t!==en)&&(t===en&&(!(ft&2)&&(iu|=n),Yt===4&&yr(t,on)),Ln(t,i),n===1&&ft===0&&!(e.mode&1)&&(uo=Ht()+500,Qc&&kr()))}function Ln(t,e){var n=t.callbackNode;Wy(t,e);var i=xc(t,t===en?on:0);if(i===0)n!==null&&fm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&fm(n),e===1)t.tag===0?VS(s0.bind(null,t)):Nx(s0.bind(null,t)),zS(function(){!(ft&6)&&kr()}),n=null;else{switch(ox(i)){case 1:n=Uf;break;case 4:n=ix;break;case 16:n=gc;break;case 536870912:n=rx;break;default:n=gc}n=Rv(n,Mv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Mv(t,e){if(ic=-1,rc=0,ft&6)throw Error(ce(327));var n=t.callbackNode;if(eo()&&t.callbackNode!==n)return null;var i=xc(t,t===en?on:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Uc(t,i);else{e=i;var r=ft;ft|=2;var s=wv();(en!==t||on!==e)&&(ji=null,uo=Ht()+500,ts(t,e));do try{u1();break}catch(a){Ev(t,a)}while(!0);$f(),Dc.current=s,ft=r,Vt!==null?e=0:(en=null,on=0,e=Yt)}if(e!==0){if(e===2&&(r=nh(t),r!==0&&(i=r,e=Ph(t,r))),e===1)throw n=Ta,ts(t,0),yr(t,i),Ln(t,Ht()),n;if(e===6)yr(t,i);else{if(r=t.current.alternate,!(i&30)&&!l1(r)&&(e=Uc(t,i),e===2&&(s=nh(t),s!==0&&(i=s,e=Ph(t,s))),e===1))throw n=Ta,ts(t,0),yr(t,i),Ln(t,Ht()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ce(345));case 2:$r(t,Rn,ji);break;case 3:if(yr(t,i),(i&130023424)===i&&(e=cp+500-Ht(),10<e)){if(xc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){_n(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=uh($r.bind(null,t,Rn,ji),e);break}$r(t,Rn,ji);break;case 4:if(yr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-mi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Ht()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*a1(i/1960))-i,10<i){t.timeoutHandle=uh($r.bind(null,t,Rn,ji),i);break}$r(t,Rn,ji);break;case 5:$r(t,Rn,ji);break;default:throw Error(ce(329))}}}return Ln(t,Ht()),t.callbackNode===n?Mv.bind(null,t):null}function Ph(t,e){var n=ia;return t.current.memoizedState.isDehydrated&&(ts(t,e).flags|=256),t=Uc(t,e),t!==2&&(e=Rn,Rn=n,e!==null&&Nh(e)),t}function Nh(t){Rn===null?Rn=t:Rn.push.apply(Rn,t)}function l1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!vi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function yr(t,e){for(e&=~lp,e&=~iu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-mi(e),i=1<<n;t[n]=-1,e&=~i}}function s0(t){if(ft&6)throw Error(ce(327));eo();var e=xc(t,0);if(!(e&1))return Ln(t,Ht()),null;var n=Uc(t,e);if(t.tag!==0&&n===2){var i=nh(t);i!==0&&(e=i,n=Ph(t,i))}if(n===1)throw n=Ta,ts(t,0),yr(t,e),Ln(t,Ht()),n;if(n===6)throw Error(ce(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,$r(t,Rn,ji),Ln(t,Ht()),null}function up(t,e){var n=ft;ft|=1;try{return t(e)}finally{ft=n,ft===0&&(uo=Ht()+500,Qc&&kr())}}function ls(t){Er!==null&&Er.tag===0&&!(ft&6)&&eo();var e=ft;ft|=1;var n=ti.transition,i=wt;try{if(ti.transition=null,wt=1,t)return t()}finally{wt=i,ti.transition=n,ft=e,!(ft&6)&&kr()}}function dp(){Fn=Ws.current,Nt(Ws)}function ts(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,kS(n)),Vt!==null)for(n=Vt.return;n!==null;){var i=n;switch(jf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Mc();break;case 3:lo(),Nt(Nn),Nt(pn),ep();break;case 5:Qf(i);break;case 4:lo();break;case 13:Nt(Ut);break;case 19:Nt(Ut);break;case 10:qf(i.type._context);break;case 22:case 23:dp()}n=n.return}if(en=t,Vt=t=Nr(t.current,null),on=Fn=e,Yt=0,Ta=null,lp=iu=as=0,Rn=ia=null,Zr!==null){for(e=0;e<Zr.length;e++)if(n=Zr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Zr=null}return t}function Ev(t,e){do{var n=Vt;try{if($f(),ec.current=Nc,Pc){for(var i=Ft.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Pc=!1}if(os=0,Qt=Xt=Ft=null,ta=!1,Ea=0,ap.current=null,n===null||n.return===null){Yt=1,Ta=e,Vt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=on,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=Xm(o);if(m!==null){m.flags&=-257,Ym(m,o,a,s,e),m.mode&1&&jm(s,c,e),e=m,l=c;var g=e.updateQueue;if(g===null){var M=new Set;M.add(l),e.updateQueue=M}else g.add(l);break e}else{if(!(e&1)){jm(s,c,e),hp();break e}l=Error(ce(426))}}else if(Lt&&a.mode&1){var x=Xm(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Ym(x,o,a,s,e),Xf(co(l,a));break e}}s=l=co(l,a),Yt!==4&&(Yt=2),ia===null?ia=[s]:ia.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=ov(s,l,e);zm(s,h);break e;case 1:a=l;var _=s.type,E=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(Rr===null||!Rr.has(E)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=av(s,a,e);zm(s,S);break e}}s=s.return}while(s!==null)}Tv(n)}catch(b){e=b,Vt===n&&n!==null&&(Vt=n=n.return);continue}break}while(!0)}function wv(){var t=Dc.current;return Dc.current=Nc,t===null?Nc:t}function hp(){(Yt===0||Yt===3||Yt===2)&&(Yt=4),en===null||!(as&268435455)&&!(iu&268435455)||yr(en,on)}function Uc(t,e){var n=ft;ft|=2;var i=wv();(en!==t||on!==e)&&(ji=null,ts(t,e));do try{c1();break}catch(r){Ev(t,r)}while(!0);if($f(),ft=n,Dc.current=i,Vt!==null)throw Error(ce(261));return en=null,on=0,Yt}function c1(){for(;Vt!==null;)bv(Vt)}function u1(){for(;Vt!==null&&!Uy();)bv(Vt)}function bv(t){var e=Cv(t.alternate,t,Fn);t.memoizedProps=t.pendingProps,e===null?Tv(t):Vt=e,ap.current=null}function Tv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=i1(n,e),n!==null){n.flags&=32767,Vt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Yt=6,Vt=null;return}}else if(n=n1(n,e,Fn),n!==null){Vt=n;return}if(e=e.sibling,e!==null){Vt=e;return}Vt=e=t}while(e!==null);Yt===0&&(Yt=5)}function $r(t,e,n){var i=wt,r=ti.transition;try{ti.transition=null,wt=1,d1(t,e,n,i)}finally{ti.transition=r,wt=i}return null}function d1(t,e,n,i){do eo();while(Er!==null);if(ft&6)throw Error(ce(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ce(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(jy(t,s),t===en&&(Vt=en=null,on=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_l||(_l=!0,Rv(gc,function(){return eo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ti.transition,ti.transition=null;var o=wt;wt=1;var a=ft;ft|=4,ap.current=null,s1(t,n),yv(n,t),NS(lh),vc=!!ah,lh=ah=null,t.current=n,o1(n),Oy(),ft=a,wt=o,ti.transition=s}else t.current=n;if(_l&&(_l=!1,Er=t,Ic=r),s=t.pendingLanes,s===0&&(Rr=null),zy(n.stateNode),Ln(t,Ht()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Lc)throw Lc=!1,t=Ch,Ch=null,t;return Ic&1&&t.tag!==0&&eo(),s=t.pendingLanes,s&1?t===Rh?ra++:(ra=0,Rh=t):ra=0,kr(),null}function eo(){if(Er!==null){var t=ox(Ic),e=ti.transition,n=wt;try{if(ti.transition=null,wt=16>t?16:t,Er===null)var i=!1;else{if(t=Er,Er=null,Ic=0,ft&6)throw Error(ce(331));var r=ft;for(ft|=4,Ce=t.current;Ce!==null;){var s=Ce,o=s.child;if(Ce.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ce=c;Ce!==null;){var f=Ce;switch(f.tag){case 0:case 11:case 15:na(8,f,s)}var p=f.child;if(p!==null)p.return=f,Ce=p;else for(;Ce!==null;){f=Ce;var d=f.sibling,m=f.return;if(xv(f),f===c){Ce=null;break}if(d!==null){d.return=m,Ce=d;break}Ce=m}}}var g=s.alternate;if(g!==null){var M=g.child;if(M!==null){g.child=null;do{var x=M.sibling;M.sibling=null,M=x}while(M!==null)}}Ce=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ce=o;else e:for(;Ce!==null;){if(s=Ce,s.flags&2048)switch(s.tag){case 0:case 11:case 15:na(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Ce=h;break e}Ce=s.return}}var _=t.current;for(Ce=_;Ce!==null;){o=Ce;var E=o.child;if(o.subtreeFlags&2064&&E!==null)E.return=o,Ce=E;else e:for(o=_;Ce!==null;){if(a=Ce,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:nu(9,a)}}catch(b){Bt(a,a.return,b)}if(a===o){Ce=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Ce=S;break e}Ce=a.return}}if(ft=r,kr(),Ni&&typeof Ni.onPostCommitFiberRoot=="function")try{Ni.onPostCommitFiberRoot($c,t)}catch{}i=!0}return i}finally{wt=n,ti.transition=e}}return!1}function o0(t,e,n){e=co(n,e),e=ov(t,e,1),t=Cr(t,e,1),e=_n(),t!==null&&(Ua(t,1,e),Ln(t,e))}function Bt(t,e,n){if(t.tag===3)o0(t,t,n);else for(;e!==null;){if(e.tag===3){o0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Rr===null||!Rr.has(i))){t=co(n,t),t=av(e,t,1),e=Cr(e,t,1),t=_n(),e!==null&&(Ua(e,1,t),Ln(e,t));break}}e=e.return}}function h1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=_n(),t.pingedLanes|=t.suspendedLanes&n,en===t&&(on&n)===n&&(Yt===4||Yt===3&&(on&130023424)===on&&500>Ht()-cp?ts(t,0):lp|=n),Ln(t,e)}function Av(t,e){e===0&&(t.mode&1?(e=cl,cl<<=1,!(cl&130023424)&&(cl=4194304)):e=1);var n=_n();t=ir(t,e),t!==null&&(Ua(t,e,n),Ln(t,n))}function f1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Av(t,n)}function p1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ce(314))}i!==null&&i.delete(e),Av(t,n)}var Cv;Cv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Nn.current)Pn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Pn=!1,t1(t,e,n);Pn=!!(t.flags&131072)}else Pn=!1,Lt&&e.flags&1048576&&Dx(e,bc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;nc(t,e),t=e.pendingProps;var r=so(e,pn.current);Qs(e,n),r=np(null,e,i,t,r,n);var s=ip();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Dn(i)?(s=!0,Ec(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Zf(e),r.updater=tu,e.stateNode=r,r._reactInternals=e,xh(e,i,t,n),e=yh(null,e,i,!0,s,n)):(e.tag=0,Lt&&s&&Wf(e),xn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(nc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=g1(i),t=ui(i,t),r){case 0:e=_h(null,e,i,t,n);break e;case 1:e=Km(null,e,i,t,n);break e;case 11:e=$m(null,e,i,t,n);break e;case 14:e=qm(null,e,i,ui(i.type,t),n);break e}throw Error(ce(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ui(i,r),_h(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ui(i,r),Km(t,e,i,r,n);case 3:e:{if(dv(e),t===null)throw Error(ce(387));i=e.pendingProps,s=e.memoizedState,r=s.element,kx(t,e),Cc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=co(Error(ce(423)),e),e=Zm(t,e,i,n,r);break e}else if(i!==r){r=co(Error(ce(424)),e),e=Zm(t,e,i,n,r);break e}else for(Bn=Ar(e.stateNode.containerInfo.firstChild),Hn=e,Lt=!0,hi=null,n=Ox(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(oo(),i===r){e=rr(t,e,n);break e}xn(t,e,i,n)}e=e.child}return e;case 5:return zx(e),t===null&&ph(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,ch(i,r)?o=null:s!==null&&ch(i,s)&&(e.flags|=32),uv(t,e),xn(t,e,o,n),e.child;case 6:return t===null&&ph(e),null;case 13:return hv(t,e,n);case 4:return Jf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ao(e,null,i,n):xn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ui(i,r),$m(t,e,i,r,n);case 7:return xn(t,e,e.pendingProps,n),e.child;case 8:return xn(t,e,e.pendingProps.children,n),e.child;case 12:return xn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Ct(Tc,i._currentValue),i._currentValue=o,s!==null)if(vi(s.value,o)){if(s.children===r.children&&!Nn.current){e=rr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ji(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),mh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ce(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),mh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}xn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Qs(e,n),r=ni(r),i=i(r),e.flags|=1,xn(t,e,i,n),e.child;case 14:return i=e.type,r=ui(i,e.pendingProps),r=ui(i.type,r),qm(t,e,i,r,n);case 15:return lv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ui(i,r),nc(t,e),e.tag=1,Dn(i)?(t=!0,Ec(e)):t=!1,Qs(e,n),sv(e,i,r),xh(e,i,r,n),yh(null,e,i,!0,t,n);case 19:return fv(t,e,n);case 22:return cv(t,e,n)}throw Error(ce(156,e.tag))};function Rv(t,e){return nx(t,e)}function m1(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(t,e,n,i){return new m1(t,e,n,i)}function fp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function g1(t){if(typeof t=="function")return fp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Df)return 11;if(t===Lf)return 14}return 2}function Nr(t,e){var n=t.alternate;return n===null?(n=ei(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function sc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")fp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Is:return ns(n.children,r,s,e);case Nf:o=8,r|=8;break;case Hd:return t=ei(12,n,e,r|2),t.elementType=Hd,t.lanes=s,t;case Gd:return t=ei(13,n,e,r),t.elementType=Gd,t.lanes=s,t;case Vd:return t=ei(19,n,e,r),t.elementType=Vd,t.lanes=s,t;case zg:return ru(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Fg:o=10;break e;case kg:o=9;break e;case Df:o=11;break e;case Lf:o=14;break e;case xr:o=16,i=null;break e}throw Error(ce(130,t==null?t:typeof t,""))}return e=ei(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function ns(t,e,n,i){return t=ei(7,t,i,e),t.lanes=n,t}function ru(t,e,n,i){return t=ei(22,t,i,e),t.elementType=zg,t.lanes=n,t.stateNode={isHidden:!1},t}function Qu(t,e,n){return t=ei(6,t,null,e),t.lanes=n,t}function ed(t,e,n){return e=ei(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function x1(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Iu(0),this.expirationTimes=Iu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Iu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function pp(t,e,n,i,r,s,o,a,l){return t=new x1(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ei(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zf(s),t}function v1(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ls,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Pv(t){if(!t)return Lr;t=t._reactInternals;e:{if(fs(t)!==t||t.tag!==1)throw Error(ce(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Dn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ce(171))}if(t.tag===1){var n=t.type;if(Dn(n))return Px(t,n,e)}return e}function Nv(t,e,n,i,r,s,o,a,l){return t=pp(n,i,!0,t,r,s,o,a,l),t.context=Pv(null),n=t.current,i=_n(),r=Pr(n),s=Ji(i,r),s.callback=e??null,Cr(n,s,r),t.current.lanes=r,Ua(t,r,i),Ln(t,i),t}function su(t,e,n,i){var r=e.current,s=_n(),o=Pr(r);return n=Pv(n),e.context===null?e.context=n:e.pendingContext=n,e=Ji(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Cr(r,e,o),t!==null&&(gi(t,r,o,s),Ql(t,r,o)),o}function Oc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function a0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function mp(t,e){a0(t,e),(t=t.alternate)&&a0(t,e)}function _1(){return null}var Dv=typeof reportError=="function"?reportError:function(t){console.error(t)};function gp(t){this._internalRoot=t}ou.prototype.render=gp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ce(409));su(t,e,null,null)};ou.prototype.unmount=gp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ls(function(){su(null,t,null,null)}),e[nr]=null}};function ou(t){this._internalRoot=t}ou.prototype.unstable_scheduleHydration=function(t){if(t){var e=cx();t={blockedOn:null,target:t,priority:e};for(var n=0;n<_r.length&&e!==0&&e<_r[n].priority;n++);_r.splice(n,0,t),n===0&&dx(t)}};function xp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function au(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function l0(){}function y1(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Oc(o);s.call(c)}}var o=Nv(e,i,t,0,null,!1,!1,"",l0);return t._reactRootContainer=o,t[nr]=o.current,va(t.nodeType===8?t.parentNode:t),ls(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Oc(l);a.call(c)}}var l=pp(t,0,!1,null,null,!1,!1,"",l0);return t._reactRootContainer=l,t[nr]=l.current,va(t.nodeType===8?t.parentNode:t),ls(function(){su(e,l,n,i)}),l}function lu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Oc(o);a.call(l)}}su(e,o,t,r)}else o=y1(n,e,t,r,i);return Oc(o)}ax=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=jo(e.pendingLanes);n!==0&&(Of(e,n|1),Ln(e,Ht()),!(ft&6)&&(uo=Ht()+500,kr()))}break;case 13:ls(function(){var i=ir(t,1);if(i!==null){var r=_n();gi(i,t,1,r)}}),mp(t,1)}};Ff=function(t){if(t.tag===13){var e=ir(t,134217728);if(e!==null){var n=_n();gi(e,t,134217728,n)}mp(t,134217728)}};lx=function(t){if(t.tag===13){var e=Pr(t),n=ir(t,e);if(n!==null){var i=_n();gi(n,t,e,i)}mp(t,e)}};cx=function(){return wt};ux=function(t,e){var n=wt;try{return wt=t,e()}finally{wt=n}};Qd=function(t,e,n){switch(e){case"input":if(Xd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Jc(i);if(!r)throw Error(ce(90));Hg(i),Xd(i,r)}}}break;case"textarea":Vg(t,n);break;case"select":e=n.value,e!=null&&qs(t,!!n.multiple,e,!1)}};Kg=up;Zg=ls;var S1={usingClientEntryPoint:!1,Events:[Fa,ks,Jc,$g,qg,up]},Io={findFiberByHostInstance:Kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},M1={bundleType:Io.bundleType,version:Io.version,rendererPackageName:Io.rendererPackageName,rendererConfig:Io.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:or.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ex(t),t===null?null:t.stateNode},findFiberByHostInstance:Io.findFiberByHostInstance||_1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yl.isDisabled&&yl.supportsFiber)try{$c=yl.inject(M1),Ni=yl}catch{}}Vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=S1;Vn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xp(e))throw Error(ce(200));return v1(t,e,null,n)};Vn.createRoot=function(t,e){if(!xp(t))throw Error(ce(299));var n=!1,i="",r=Dv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=pp(t,1,!1,null,null,n,!1,i,r),t[nr]=e.current,va(t.nodeType===8?t.parentNode:t),new gp(e)};Vn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ce(188)):(t=Object.keys(t).join(","),Error(ce(268,t)));return t=ex(e),t=t===null?null:t.stateNode,t};Vn.flushSync=function(t){return ls(t)};Vn.hydrate=function(t,e,n){if(!au(e))throw Error(ce(200));return lu(null,t,e,!0,n)};Vn.hydrateRoot=function(t,e,n){if(!xp(t))throw Error(ce(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Dv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Nv(e,null,t,1,n??null,r,!1,s,o),t[nr]=e.current,va(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new ou(e)};Vn.render=function(t,e,n){if(!au(e))throw Error(ce(200));return lu(null,t,e,!1,n)};Vn.unmountComponentAtNode=function(t){if(!au(t))throw Error(ce(40));return t._reactRootContainer?(ls(function(){lu(null,null,t,!1,function(){t._reactRootContainer=null,t[nr]=null})}),!0):!1};Vn.unstable_batchedUpdates=up;Vn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!au(n))throw Error(ce(200));if(t==null||t._reactInternals===void 0)throw Error(ce(38));return lu(t,e,n,!1,i)};Vn.version="18.3.1-next-f1338f8080-20240426";function Lv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lv)}catch(t){console.error(t)}}Lv(),Lg.exports=Vn;var E1=Lg.exports,c0=E1;zd.createRoot=c0.createRoot,zd.hydrateRoot=c0.hydrateRoot;const zt={WIFI:{DEFAULT_IP:"192.168.4.1",DEFAULT_PORT:80,WEBSOCKET_PORT:81,DEFAULT_HOSTNAME:"agriguard.local",AP_SSID:"AgriGuard-Robot",AP_PASSWORD:"agri12345password",CONNECT_TIMEOUT_MS:3e3,HEARTBEAT_INTERVAL_MS:1e3,WATCHDOG_TIMEOUT_MS:1500},BLE:{DEVICE_NAME:"AgriGuard-Robot",DEVICE_NAME_PREFIX:"AgriGuard",SERVICE_UUID:"12345678-1234-1234-1234-123456789abc",COMMAND_CHARACTERISTIC_UUID:"12345678-1234-1234-1234-123456789ab1",TELEMETRY_CHARACTERISTIC_UUID:"12345678-1234-1234-1234-123456789ab2",STATUS_CHARACTERISTIC_UUID:"12345678-1234-1234-1234-123456789ab3",RECONNECT_DELAY_MS:2e3},NPK_MODBUS:{SLAVE_ID:1,BAUD_RATE:9600,PARITY:"None (8N1)",STOP_BITS:1,START_REGISTER:30,REGISTER_COUNT:3,UNIT:"mg/kg"},SAFETY:{WATCHDOG_TIMEOUT_MS:1500,MAX_SPRAY_DURATION_MS:6e3,MIN_OBSTACLE_STOP_CM:25,WARNING_OBSTACLE_CM:60}};function js(){return{mode:"REAL_HARDWARE",hardware_mode:"REAL_HARDWARE",data_source:"ESP32_PHYSICAL",esp32_connected:!1,operating_mode:"ROBOT: DISCONNECTED",robot_status:"ROBOT: DISCONNECTED",timestamp_ms:Date.now(),active_zone_id:"ZONE-R1C1",camera_status:{connected:!1,fps:0,device_index:0,resolution:"1280x720"},esp32_ping_ms:null,battery_voltage:void 0,battery_percentage:void 0,movement:"STOP",ultrasonic:{left:null,center:null,right:null,distance_cm:null,obstacle_detected:!1,obstacle_ahead:!1,obstacle_status:"OFFLINE",robot_status:"ROBOT: DISCONNECTED",status:"OFFLINE",valid:!1},soil_moisture:null,soil_moisture_status:"OFFLINE",dht22:{temperature:null,humidity:null,valid:!1},npk:{n:null,p:null,k:null,nitrogen_mg_kg:null,phosphorus_mg_kg:null,potassium_mg_kg:null,valid:!1,status:"OFFLINE"},mpu6050:{accel_x:null,accel_y:null,accel_z:null,gyro_x:null,gyro_y:null,gyro_z:null,pitch_deg:null,roll_deg:null,tilt_status:"OFFLINE",valid:!1},pump:{state:"OFF",relay:"OFF",spray_status:"OFFLINE"},relay:{state:"OFF"},actuators:{motor_state:"DISCONNECTED",motor_speed:0,pump_active:!1,valve_open:!1,flow_rate_ml_s:0,total_volume_ml:0},safety:{emergency_stop:!1,obstacle_detected:!1,watchdog_tripped:!1,hardware_errors:["Physical robot offline"]}}}class w1{constructor(e,n){ze(this,"name","Wi-Fi");ze(this,"_state","DISCONNECTED");ze(this,"_ip",zt.WIFI.DEFAULT_IP);ze(this,"_port",zt.WIFI.DEFAULT_PORT);ze(this,"_pingMs",null);ze(this,"_message","Disconnected");ze(this,"_reconnectTimer",null);ze(this,"_heartbeatTimer",null);ze(this,"_ws",null);ze(this,"_onTelemetry");ze(this,"_onStatusChange");this._onTelemetry=e,this._onStatusChange=n}setEndpoint(e,n=80){this._ip=e.trim(),this._port=n}isConnected(){return this._state==="CONNECTED"}getStatus(){return{state:this._state,transport:"Wi-Fi",mode:"REAL_HARDWARE",ip:this._ip,port:this._port,deviceName:zt.WIFI.AP_SSID,pingMs:this._pingMs,message:this._message}}_updateState(e,n,i){this._state=e,this._message=n,i!==void 0&&(this._pingMs=i),this._onStatusChange(this.getStatus())}async connect(e){e!=null&&e.ip&&(this._ip=e.ip.trim()),e!=null&&e.port&&(this._port=e.port),this._updateState("CONNECTING",`Connecting to ESP32 at ${this._ip}:${this._port}…`,null);try{const n=await fetch("/api/robot/connect",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ip:this._ip,port:this._port})}),i=await n.json();return n.ok&&i.is_connected?(this._pingMs=i.ping_ms||5,this._updateState("CONNECTED",`Connected to ESP32 at ${this._ip}:${this._port} (${this._pingMs}ms)`,this._pingMs),this._startHeartbeat(),this._connectWebSocket(),!0):await this._probeDirect()?(this._updateState("CONNECTED",`Connected directly to ESP32 at ${this._ip}:${this._port}`,this._pingMs),this._startHeartbeat(),this._connectWebSocket(),!0):(this._updateState("DISCONNECTED",i.message||`ESP32 unreachable at ${this._ip}:${this._port}. Connect to "${zt.WIFI.AP_SSID}" Wi-Fi.`),!1)}catch(n){return this._updateState("DISCONNECTED",`Connection error: ${n.message||"ESP32 unreachable"}`),!1}}async _probeDirect(){try{const e=new AbortController,n=setTimeout(()=>e.abort(),2e3),i=performance.now(),r=await fetch(`http://${this._ip}:${this._port}/api/status`,{signal:e.signal,mode:"cors"});if(clearTimeout(n),r.ok)return this._pingMs=Math.round(performance.now()-i),!0}catch{}return!1}async disconnect(){if(this._stopHeartbeat(),this._stopReconnect(),this._ws){try{this._ws.close()}catch{}this._ws=null}try{await fetch("/api/robot/disconnect",{method:"POST"})}catch{}this._updateState("DISCONNECTED","Wi-Fi transport disconnected. Safe stop engaged.",null)}async reconnect(){return this._updateState("RECONNECTING",`Reconnecting to ${this._ip}:${this._port}…`,null),await new Promise(e=>setTimeout(e,600)),await this.connect()}_startHeartbeat(){this._stopHeartbeat(),this._heartbeatTimer=setInterval(async()=>{if(this._state==="CONNECTED")try{if(!(await fetch("/api/robot/heartbeat",{method:"POST"})).ok)throw new Error("Heartbeat lost")}catch{this._handleConnectionLost()}},zt.WIFI.HEARTBEAT_INTERVAL_MS)}_stopHeartbeat(){this._heartbeatTimer&&(clearInterval(this._heartbeatTimer),this._heartbeatTimer=null)}_stopReconnect(){this._reconnectTimer&&(clearTimeout(this._reconnectTimer),this._reconnectTimer=null)}_handleConnectionLost(){this._stopHeartbeat(),this._updateState("RECONNECTING","Connection lost to ESP32. Reconnecting…",null),this._reconnectTimer=setTimeout(async()=>{await this.connect()||(this._updateState("DISCONNECTED","ESP32 Wi-Fi disconnected. Actuators safely stopped.",null),this._onTelemetry(js()))},2e3)}_connectWebSocket(){const n=`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}/ws/telemetry`;try{this._ws&&this._ws.close();const i=new WebSocket(n);this._ws=i,i.onmessage=r=>{try{const s=JSON.parse(r.data);if(s.type==="field_observation"){window.dispatchEvent(new CustomEvent("field_observation",{detail:s.observation}));return}if(s.type==="treatment_applied"){window.dispatchEvent(new CustomEvent("treatment_applied",{detail:s}));return}this._onTelemetry(s)}catch{}},i.onclose=()=>{this._state==="CONNECTED"&&this._handleConnectionLost()}}catch{}}async sendCommand(e){const n=e.command||e.direction||"";return n==="STOP"||e.type==="stop"?await fetch("/api/robot/stop",{method:"POST"}).then(i=>i.json()):n==="EMERGENCY_STOP"||e.type==="emergency_stop"||e.type==="estop"?await fetch("/api/robot/estop",{method:"POST"}).then(i=>i.json()):await fetch("/api/robot/command",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(i=>i.json())}}class vp{constructor(e,n){ze(this,"name","Bluetooth");ze(this,"_state","DISCONNECTED");ze(this,"_device",null);ze(this,"_server",null);ze(this,"_cmdChar",null);ze(this,"_telemetryChar",null);ze(this,"_statusChar",null);ze(this,"_message","Disconnected");ze(this,"_onTelemetry");ze(this,"_onStatusChange");this._onTelemetry=e,this._onStatusChange=n}static isSupported(){return typeof navigator<"u"&&"bluetooth"in navigator}isConnected(){var e;return this._state==="CONNECTED"&&!!((e=this._server)!=null&&e.connected)}getStatus(){var e;return{state:this._state,transport:"Bluetooth",mode:"REAL_HARDWARE",deviceName:((e=this._device)==null?void 0:e.name)||zt.BLE.DEVICE_NAME_PREFIX,message:this._message}}_updateState(e,n){this._state=e,this._message=n,this._onStatusChange(this.getStatus())}async connect(){if(!vp.isSupported())return this._updateState("ERROR","Web Bluetooth is not supported in this browser. Please use Chrome, Edge, or Opera over HTTPS/localhost."),!1;this._updateState("CONNECTING",'Opening Bluetooth device chooser… Select "AgriGuard-Robot"');try{const n=await navigator.bluetooth.requestDevice({filters:[{namePrefix:zt.BLE.DEVICE_NAME_PREFIX}],optionalServices:[zt.BLE.SERVICE_UUID]});this._device=n,this._updateState("CONNECTING",`Connecting to GATT server on ${n.name||"AgriGuard-Robot"}…`);const i=await n.gatt.connect();this._server=i;const r=await i.getPrimaryService(zt.BLE.SERVICE_UUID);this._cmdChar=await r.getCharacteristic(zt.BLE.COMMAND_CHARACTERISTIC_UUID),this._telemetryChar=await r.getCharacteristic(zt.BLE.TELEMETRY_CHARACTERISTIC_UUID);try{this._statusChar=await r.getCharacteristic(zt.BLE.STATUS_CHARACTERISTIC_UUID),await this._statusChar.startNotifications(),this._statusChar.addEventListener("characteristicvaluechanged",s=>{try{const o=new TextDecoder().decode(s.target.value);console.log("[BLE STATUS]",o)}catch{}})}catch{}return await this._telemetryChar.startNotifications(),this._telemetryChar.addEventListener("characteristicvaluechanged",s=>{try{const o=new TextDecoder().decode(s.target.value),a=JSON.parse(o);a.esp32_connected=!0,a.mode="REAL_HARDWARE",a.data_source="ESP32_BLE",this._onTelemetry(a),fetch("/api/robot/telemetry_ingest",{method:"POST",headers:{"Content-Type":"application/json"},body:o}).catch(()=>{})}catch(o){console.warn("[BLE] Telemetry parse error:",o)}}),n.addEventListener("gattserverdisconnected",()=>{this._handleGattDisconnected()}),this._updateState("CONNECTED",`Connected to ${n.name||"AgriGuard-Robot"} via Web Bluetooth! Real hardware live.`),!0}catch(e){return e.name==="NotFoundError"?this._updateState("DISCONNECTED","Bluetooth device pairing was cancelled by user."):e.name==="SecurityError"?this._updateState("ERROR","Web Bluetooth requires a secure context (HTTPS or http://localhost)."):this._updateState("ERROR",e.message||"Bluetooth connection failed."),!1}}_handleGattDisconnected(){this._server=null,this._cmdChar=null,this._telemetryChar=null,this._statusChar=null,this._updateState("DISCONNECTED","Bluetooth GATT disconnected. Robot stopped safely."),this._onTelemetry(js())}async disconnect(){var e,n;if((n=(e=this._device)==null?void 0:e.gatt)!=null&&n.connected)try{await this.sendCommand({type:"robot_command",command:"STOP"}),this._device.gatt.disconnect()}catch{}this._handleGattDisconnected()}async reconnect(){if(this._device)try{this._updateState("RECONNECTING",`Reconnecting to ${this._device.name}…`);const e=await this._device.gatt.connect();return this._server=e,this._updateState("CONNECTED",`Reconnected to ${this._device.name} via Bluetooth.`),!0}catch{return await this.connect()}return await this.connect()}async sendCommand(e){if(!this.isConnected()||!this._cmdChar)throw new Error("Bluetooth is not connected. Command rejected.");const n=JSON.stringify(e),i=new TextEncoder().encode(n);return await this._cmdChar.writeValue(i),{ok:!0,accepted:!0,executed:!0,source:"bluetooth_gatt"}}}class b1{constructor(){ze(this,"_mode","REAL_HARDWARE");ze(this,"_activeTransport");ze(this,"_wifiTransport");ze(this,"_bleTransport");ze(this,"_telemetrySubscribers",new Set);ze(this,"_statusSubscribers",new Set);ze(this,"_currentStatus");this._wifiTransport=new w1(e=>this._broadcastTelemetry(e),e=>this._broadcastStatus(e)),this._bleTransport=new vp(e=>this._broadcastTelemetry(e),e=>this._broadcastStatus(e)),this._activeTransport=this._wifiTransport,this._currentStatus=this._wifiTransport.getStatus(),fetch("/api/robot/mode").then(e=>e.json()).then(e=>{e.mode&&(this._mode=e.mode.toUpperCase(),this._currentStatus.mode=this._mode,this._broadcastStatus(this._currentStatus))}).catch(()=>{})}getMode(){return this._mode}setMode(e){if(this._mode=e,this._currentStatus.mode=e,fetch("/api/robot/mode",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:e})}).catch(()=>{}),e==="SIMULATION")this._broadcastStatus({state:"CONNECTED",transport:"None",mode:"SIMULATION",message:"SIMULATION MODE ACTIVE (Safe test sandbox)"});else{const n=this._activeTransport.getStatus();this._broadcastStatus(n),this._activeTransport.isConnected()||this._broadcastTelemetry(js())}}getStatus(){return this._mode==="SIMULATION"?{state:"CONNECTED",transport:"None",mode:"SIMULATION",message:"SIMULATION MODE ACTIVE"}:this._activeTransport.getStatus()}isConnected(){return this._mode==="SIMULATION"?!0:this._activeTransport.isConnected()}getTransport(){return this._activeTransport.name.includes("Bluetooth")?"Bluetooth":"Wi-Fi"}getDisconnectedTelemetry(){return js()}async connect(e="wifi",n){return this.setMode("REAL_HARDWARE"),e==="bluetooth"?(this._wifiTransport.isConnected()&&await this._wifiTransport.disconnect(),this._activeTransport=this._bleTransport,await this._bleTransport.connect()):(this._bleTransport.isConnected()&&await this._bleTransport.disconnect(),this._activeTransport=this._wifiTransport,await this._wifiTransport.connect(n))}async disconnect(){await this._activeTransport.disconnect(),this._mode==="REAL_HARDWARE"&&this._broadcastTelemetry(js())}async reconnect(){return await this._activeTransport.reconnect()}async sendCommand(e){if(this._mode==="REAL_HARDWARE"&&!this._activeTransport.isConnected())throw new Error("Action blocked: Physical ESP32 robot is DISCONNECTED.");if(this._mode==="SIMULATION"){const n=e.command||e.direction||"";return n==="STOP"||e.type==="stop"?await fetch("/api/robot/stop",{method:"POST"}).then(i=>i.json()):n==="EMERGENCY_STOP"||e.type==="emergency_stop"?await fetch("/api/robot/estop",{method:"POST"}).then(i=>i.json()):await fetch("/api/robot/command",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(i=>i.json())}return await this._activeTransport.sendCommand(e)}subscribeTelemetry(e){return this._telemetrySubscribers.add(e),()=>{this._telemetrySubscribers.delete(e)}}subscribeStatus(e){return this._statusSubscribers.add(e),e(this.getStatus()),()=>{this._statusSubscribers.delete(e)}}_broadcastTelemetry(e){this._mode==="REAL_HARDWARE"&&!this._activeTransport.isConnected()&&(e=js()),this._telemetrySubscribers.forEach(n=>{try{n(e)}catch{}})}_broadcastStatus(e){this._currentStatus=e,this._statusSubscribers.forEach(n=>{try{n(e)}catch{}})}}const vn=new b1;function T1(){const[t,e]=fe.useState(null),[n,i]=fe.useState(!1),[r,s]=fe.useState(vn.getStatus()),o=fe.useRef(null),a=fe.useRef(null);return fe.useEffect(()=>{let l=!1;const c=vn.subscribeStatus(d=>{l||s(d)}),f=vn.subscribeTelemetry(d=>{l||e(d)});function p(){const d=window.location.protocol==="https:"?"wss:":"ws:",m=window.location.host,g=`${d}//${m}/ws/telemetry`;try{const M=new WebSocket(g);o.current=M,M.onopen=()=>{l||i(!0)},M.onmessage=x=>{if(!l)try{const h=JSON.parse(x.data);if(h.type==="field_observation"){window.dispatchEvent(new CustomEvent("field_observation",{detail:h.observation}));return}if(h.type==="treatment_applied"){window.dispatchEvent(new CustomEvent("treatment_applied",{detail:h}));return}const _=h;if(vn.getTransport()==="Bluetooth"&&vn.isConnected())return;if(vn.getMode()==="REAL_HARDWARE"&&!_.esp32_connected){e(vn.getDisconnectedTelemetry());return}e(_)}catch(h){console.error("Failed to parse telemetry message:",h)}},M.onclose=()=>{l||(i(!1),a.current=window.setTimeout(p,1500))},M.onerror=()=>{M.readyState===WebSocket.OPEN&&M.close()}}catch{l||(a.current=window.setTimeout(p,2e3))}}return p(),()=>{l=!0,c(),f(),a.current&&clearTimeout(a.current),o.current&&o.current.close()}},[]),{telemetry:t,wsConnected:n,connectionStatus:r}}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var A1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Ye=(t,e)=>{const n=fe.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...c},f)=>fe.createElement("svg",{ref:f,...A1,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:["lucide",`lucide-${C1(t)}`,a].join(" "),...c},[...e.map(([p,d])=>fe.createElement(p,d)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=Ye("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=Ye("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aa=Ye("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=Ye("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=Ye("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp=Ye("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=Ye("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1=Ye("BatteryCharging",[["path",{d:"M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2",key:"1sdynx"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1",key:"1gkd3k"}],["path",{d:"m11 7-3 5h4l-3 5",key:"b4a64w"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td=Ye("Bluetooth",[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17",key:"1q5490"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=Ye("Boxes",[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=Ye("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=Ye("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=Ye("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=Ye("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=Ye("Compass",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76",key:"m9r19z"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=Ye("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1=Ye("Crosshair",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=Ye("Disc",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=Ye("Droplet",[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cu=Ye("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=Ye("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=Ye("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=Ye("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=Ye("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=Ye("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=Ye("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=Ye("Move",[["polyline",{points:"5 9 2 12 5 15",key:"1r5uj5"}],["polyline",{points:"9 5 12 2 15 5",key:"5v383o"}],["polyline",{points:"15 19 12 22 9 19",key:"g7qi8m"}],["polyline",{points:"19 9 22 12 19 15",key:"tpp73q"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=Ye("PlugZap",[["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m18 3-4 4h6l-4 4",key:"16psg9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=Ye("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ho=Ye("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xs=Ye("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=Ye("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=Ye("Scan",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=Ye("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=Ye("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=Ye("Sliders",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ep=Ye("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=Ye("Stethoscope",[["path",{d:"M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3",key:"1jd90r"}],["path",{d:"M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4",key:"126ukv"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=Ye("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=Ye("Thermometer",[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=Ye("Unplug",[["path",{d:"m19 5 3-3",key:"yk6iyv"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z",key:"1snsnr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=Ye("VideoOff",[["path",{d:"M10.66 6H14a2 2 0 0 1 2 2v2.34l1 1L22 8v8",key:"ubwiq0"}],["path",{d:"M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2l10 10Z",key:"1l10zd"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=Ye("Video",[["path",{d:"m22 8-6 4 6 4V8Z",key:"50v9me"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2",key:"1rqjg6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const is=Ye("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=Ye("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=Ye("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),q1=({telemetry:t,wsConnected:e,activeTab:n,setActiveTab:i,onEmergencyStop:r})=>{var m,g;const s=(t==null?void 0:t.esp32_connected)??!1,o=((m=t==null?void 0:t.camera_status)==null?void 0:m.connected)??!1,a=((g=t==null?void 0:t.safety)==null?void 0:g.emergency_stop)??!1,l=(t==null?void 0:t.active_zone_id)??"ZONE-R1C1",c=t==null?void 0:t.battery_voltage,f=t==null?void 0:t.battery_percentage,p=t==null?void 0:t.esp32_ping_ms,d=[{id:"dashboard",label:"Dashboard",icon:B1},{id:"remote",label:"Field Remote",icon:O1},{id:"diagnostics",label:"Hardware Diagnostics",icon:X1}];return u.jsxs("div",{className:"glass-panel sidebar-header-panel",style:{padding:"1rem",display:"flex",flexDirection:"column",gap:"0.85rem",borderRadius:"16px",border:"1px solid var(--border-subtle)",boxShadow:"var(--shadow-glass)"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[u.jsx("div",{style:{width:"42px",height:"42px",borderRadius:"12px",background:"linear-gradient(135deg, var(--emerald-500), #065f46)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 0 20px var(--emerald-glow)",flexShrink:0},children:u.jsx(kv,{size:24,color:"#fff"})}),u.jsxs("div",{style:{minWidth:0},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.45rem"},children:[u.jsx("h1",{style:{fontSize:"1.25rem",fontWeight:800,letterSpacing:"-0.02em",color:"#fff",margin:0},children:"AgriGuard"}),(t==null?void 0:t.hardware_mode)==="SIMULATION"||(t==null?void 0:t.mode)==="SIMULATION"?u.jsx("span",{className:"status-pill",style:{background:"rgba(56, 189, 248, 0.15)",color:"var(--sky-400)",border:"1px solid rgba(56, 189, 248, 0.35)",fontSize:"0.62rem",padding:"0.15rem 0.45rem",fontWeight:700},children:"● MODE: SIMULATION"}):s?u.jsx("span",{className:"status-pill status-online",style:{fontSize:"0.62rem",padding:"0.15rem 0.45rem",fontWeight:700},children:"● ROBOT: CONNECTED"}):u.jsx("span",{className:"status-pill",style:{background:"rgba(244, 63, 94, 0.15)",color:"var(--rose-400)",border:"1px solid rgba(244, 63, 94, 0.35)",fontSize:"0.62rem",padding:"0.15rem 0.45rem",fontWeight:700},children:"● ROBOT: DISCONNECTED"})]}),u.jsx("p",{style:{fontSize:"0.70rem",color:"var(--emerald-400)",fontWeight:600,margin:"2px 0 0 0",lineHeight:1.25},children:"Remote-controlled from the field site over a local Wi-Fi network"})]})]}),u.jsxs("button",{onClick:r,className:"btn btn-danger",style:{width:"100%",padding:"0.55rem 0.85rem",fontSize:"0.82rem",fontWeight:800,letterSpacing:"0.04em",display:"flex",alignItems:"center",justifyContent:"center",gap:"0.5rem",boxShadow:"0 0 16px rgba(244, 63, 94, 0.35)",borderRadius:"10px"},title:"Immediately trips motor PWM to 0, closes solenoid valve, and stops pump",children:[u.jsx(Dh,{size:16}),u.jsx("span",{children:"EMERGENCY STOP"})]}),a&&u.jsxs("div",{style:{padding:"0.5rem 0.75rem",borderRadius:"8px",background:"rgba(244, 63, 94, 0.2)",border:"1px solid var(--rose-500)",color:"#fff",display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.75rem"},children:[u.jsx(Dh,{size:16,color:"var(--rose-500)",style:{flexShrink:0}}),u.jsxs("span",{children:[u.jsx("strong",{children:"E-STOP ACTIVE:"})," Interlock tripped. Actuators disabled."]})]}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.35rem"},children:[u.jsx("div",{style:{fontSize:"0.68rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--text-dim)",marginBottom:"0.1rem"},children:"Navigation Console"}),u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.3rem",background:"rgba(0,0,0,0.3)",padding:"5px",borderRadius:"12px"},children:d.map(M=>{const x=n===M.id,h=M.icon;return u.jsxs("button",{onClick:()=>i(M.id),className:`btn ${x?"btn-primary":"btn-outline"}`,style:{width:"100%",justifyContent:"space-between",padding:"0.5rem 0.75rem",fontSize:"0.80rem",borderRadius:"8px",border:x?"1px solid rgba(16, 185, 129, 0.4)":"1px solid transparent",background:x?"var(--emerald-500)":"transparent",color:x?"#05080f":"var(--text-main)",fontWeight:x?700:500},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.55rem"},children:[u.jsx(h,{size:14}),u.jsx("span",{children:M.label})]}),x&&u.jsx("span",{style:{fontSize:"0.65rem",fontWeight:800},children:"ACTIVE"})]},M.id)})})]}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.35rem"},children:[u.jsxs("div",{style:{fontSize:"0.68rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--text-dim)",marginBottom:"0.1rem",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[u.jsx("span",{children:"System Telemetry"}),u.jsx("span",{className:"mono",style:{color:"var(--emerald-400)"},children:l})]}),u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"0.4rem"},children:[u.jsxs("div",{className:`status-pill ${e?"status-online":"status-offline"}`,style:{fontSize:"0.66rem",padding:"0.3rem 0.5rem",justifyContent:"center"},children:[u.jsx(ho,{size:11}),u.jsxs("span",{children:["Telemetry: ",e?"LIVE":"OFF"]})]}),u.jsxs("div",{className:`status-pill ${s?"status-online":"status-offline"}`,style:{fontSize:"0.66rem",padding:"0.3rem 0.5rem",justifyContent:"center"},children:[u.jsx(is,{size:11}),u.jsxs("span",{children:["Wi-Fi: ",s?"CONNECTED":"OFF"]})]}),u.jsxs("div",{className:`status-pill ${s?"status-online":(t==null?void 0:t.hardware_mode)==="REAL_HARDWARE"?"status-offline":"status-warning"}`,style:{fontSize:"0.66rem",padding:"0.3rem 0.5rem",justifyContent:"center"},children:[u.jsx(ho,{size:11}),u.jsxs("span",{children:["Robot: ",s?`CONNECTED ${p?`(${p}ms)`:""}`:(t==null?void 0:t.hardware_mode)==="REAL_HARDWARE"?"DISCONNECTED":"SIMULATION"]})]}),u.jsxs("div",{className:`status-pill ${o?"status-online":"status-offline"}`,style:{fontSize:"0.66rem",padding:"0.3rem 0.5rem",justifyContent:"center"},children:[u.jsx(Uv,{size:11}),u.jsxs("span",{children:["Cam: ",o?"ONLINE":"OFF"]})]})]}),u.jsxs("div",{style:{display:"flex",gap:"0.4rem",marginTop:"0.2rem"},children:[u.jsxs("div",{className:"status-pill",style:{flex:1,background:"rgba(255,255,255,0.05)",color:"var(--text-main)",border:"1px solid var(--border-subtle)",fontSize:"0.66rem",padding:"0.3rem 0.5rem",justifyContent:"center"},children:[u.jsx("span",{style:{color:"var(--text-muted)"},children:"Zone:"}),u.jsx("span",{className:"mono",style:{fontWeight:600},children:l})]}),c&&u.jsxs("div",{className:"status-pill",style:{flex:1,background:"rgba(56, 189, 248, 0.15)",color:"var(--sky-400)",border:"1px solid rgba(56, 189, 248, 0.3)",fontSize:"0.66rem",padding:"0.3rem 0.5rem",justifyContent:"center"},children:[u.jsx(P1,{size:11}),u.jsxs("span",{children:[c.toFixed(1),"V (",f??0,"%)"]})]})]})]})]})},jn="";async function K1(){const t=await fetch(`${jn}/api/diagnostics`);if(!t.ok)throw new Error(`Diagnostics fetch failed with status ${t.status}`);return t.json()}async function Z1(t,e=130,n=0){return(await fetch(`${jn}/api/robot/move`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({direction:t,speed:e,duration_ms:n})})).json()}async function J1(){return(await fetch(`${jn}/api/robot/stop`,{method:"POST"})).json()}async function Q1(){return(await fetch(`${jn}/api/robot/estop`,{method:"POST"})).json()}async function eM(t){const e=await fetch(`${jn}/api/ai/scan`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t?{image_base64:t}:{})});if(!e.ok){const n=await e.json().catch(()=>({detail:"Camera or scan failure"}));throw new Error(n.detail||"Failed to capture frame or run AI inference")}return e.json()}async function tM(){try{return await(await fetch(`${jn}/api/camera/release`,{method:"POST"})).json()}catch{return{ok:!1}}}async function Uo(){try{return await(await fetch(`${jn}/api/camera/reclaim`,{method:"POST"})).json()}catch{return{ok:!1}}}async function nM(t,e,n="Field Operator"){const i=await fetch(`${jn}/api/treatment/approve`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({decision_id:t,approved:e,operator_name:n})});if(!i.ok){const r=await i.json().catch(()=>({detail:"Spray approval rejected"}));throw new Error(r.detail||"Approval request failed")}return i.json()}async function iM(t){const e=await fetch(`${jn}/api/camera/power`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:t})});if(!e.ok)throw new Error("Failed to toggle camera power");return e.json()}async function rM(){const t=await fetch(`${jn}/api/network/status`);if(!t.ok)throw new Error(`Failed to fetch network status: ${t.status}`);return t.json()}async function sM(t,e=80){const n=await fetch(`${jn}/api/network/config`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({esp32_ip:t,esp32_port:e})});if(!n.ok)throw new Error(`Failed to update network config: ${n.status}`);return n.json()}async function oM(){try{const t=await fetch(`${jn}/api/robot/mode`);return t.ok?await t.json():{mode:"REAL_HARDWARE",is_connected:!1,ping_ms:null}}catch{return{mode:"REAL_HARDWARE",is_connected:!1,ping_ms:null}}}async function aM(t){const e=await fetch(`${jn}/api/robot/mode`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:t})});if(!e.ok)throw new Error(`Failed to set hardware mode: ${e.status}`);return e.json()}const lM=Ng.memo(({cameraStatus:t,lastDetection:e,isScanning:n,onTriggerScan:i,onCameraToggled:r,activeZoneId:s,telemetry:o,onMove:a,onStop:l})=>{var At;const c=fe.useRef(null),f=fe.useRef(null),p=fe.useRef(null),d=fe.useRef(!1),m=fe.useRef({frames:0,lastTime:performance.now()}),[g,M]=fe.useState("direct"),[x,h]=fe.useState(!1),[_,E]=fe.useState(null),[S,b]=fe.useState(!1),[T,C]=fe.useState(!0),[v,A]=fe.useState(!1),[R,D]=fe.useState(!1),[O,U]=fe.useState(0),[L,V]=fe.useState(0),[ee,q]=fe.useState(""),[G,H]=fe.useState(0),[X,Q]=fe.useState(0),[se,ue]=fe.useState("640x480"),[He,Ae]=fe.useState(!0),[Ve,Z]=fe.useState(Date.now()),J=He&&(t==null?void 0:t.enabled)!==!1&&(t==null?void 0:t.status)!=="OFF",pe=J&&(g==="direct"||g==="fallback"||((t==null?void 0:t.connected)??!1)),ke=fe.useCallback((ne,Pe)=>{m.current.frames++;const I=ne-m.current.lastTime;if(I>=1e3){const Ze=Math.round(m.current.frames*1e3/I);if(U(Ze),m.current.frames=0,m.current.lastTime=ne,c.current&&typeof c.current.getVideoPlaybackQuality=="function"){const qe=c.current.getVideoPlaybackQuality();qe&&typeof qe.droppedVideoFrames=="number"&&V(qe.droppedVideoFrames)}}c.current&&"requestVideoFrameCallback"in c.current&&c.current.requestVideoFrameCallback(ke)},[]),me=fe.useCallback(async()=>{var ne,Pe;if(!d.current){if(d.current=!0,h(!1),E(null),f.current&&(f.current.getTracks().forEach(I=>I.stop()),f.current=null),!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){console.warn("getUserMedia not supported in this browser, falling back to MJPEG stream."),await Uo().catch(()=>{}),Z(Date.now()),M("fallback"),d.current=!1;return}try{await tM().catch(()=>{});const I=[{video:{width:{ideal:1280},height:{ideal:720},frameRate:{ideal:120,min:60}},audio:!1},{video:{width:{ideal:640},height:{ideal:480},frameRate:{ideal:120}},audio:!1},{video:{width:{ideal:640},height:{ideal:480},frameRate:{ideal:90}},audio:!1},{video:{width:{ideal:1280},height:{ideal:720},frameRate:{ideal:60}},audio:!1},{video:{width:{ideal:640},height:{ideal:480},frameRate:{ideal:60}},audio:!1},{video:{width:{ideal:1280},height:{ideal:720},frameRate:{ideal:30}},audio:!1},{video:!0,audio:!1}];let Ze=null,qe=null;for(const y of I)try{if(Ze=await navigator.mediaDevices.getUserMedia(y),Ze)break}catch(B){qe=B}if(!Ze)throw qe||new Error("Failed to acquire camera media stream");f.current=Ze;const P=Ze.getVideoTracks()[0];if(P){const y=typeof P.getCapabilities=="function"?P.getCapabilities():{},B=P.getSettings();console.log("[AgriGuard Camera] Hardware Capabilities:",y),console.log("[AgriGuard Camera] Initial Negotiated Settings:",B);let j=30;y.frameRate&&y.frameRate.max&&(j=Math.round(y.frameRate.max));const te=[120,90,60,30];for(const le of te)if(j>=le||!y.frameRate)try{await P.applyConstraints({frameRate:{ideal:le}});break}catch(Ee){console.warn(`applyConstraints(${le} FPS) notice:`,Ee)}const ae=P.getSettings(),he=ae.width||B.width||640,z=ae.height||B.height||480;ue(`${he}x${z}`);const W=y.frameRate?`${y.frameRate.max} FPS max (${((ne=y.width)==null?void 0:ne.max)||he}x${((Pe=y.height)==null?void 0:Pe.max)||z})`:"UVC Hardware (30-60 FPS)";q(W),P.onended=()=>{console.warn("[AgriGuard Camera] Video track ended. Reconnecting..."),M("error"),E("Camera disconnected from optical bus.")}}c.current&&(c.current.srcObject=Ze,c.current.autoplay=!0,c.current.playsInline=!0,c.current.muted=!0,c.current.play().catch(y=>console.warn("Video auto-playback notice:",y)),m.current={frames:0,lastTime:performance.now()},"requestVideoFrameCallback"in c.current&&c.current.requestVideoFrameCallback(ke)),M("direct"),E(null)}catch(I){console.warn("Direct getUserMedia acquisition notice, falling back to backend MJPEG stream:",I.name,I.message),I.name==="NotAllowedError"?E("Browser camera permission denied. Displaying backend hardware stream."):I.name==="NotFoundError"?E("No physical USB camera device detected."):I.name==="NotReadableError"&&E("Camera is currently busy. Displaying backend hardware stream."),await Uo().catch(()=>{}),Z(Date.now()),M("fallback")}finally{d.current=!1}}},[ke]),Ie=fe.useCallback(()=>{f.current&&(f.current.getTracks().forEach(ne=>ne.stop()),f.current=null),c.current&&(c.current.srcObject=null),M("off")},[]);fe.useEffect(()=>(J?me():Ie(),()=>{f.current&&(f.current.getTracks().forEach(ne=>ne.stop()),f.current=null)}),[J,me,Ie]),fe.useEffect(()=>{c.current&&f.current&&c.current.srcObject!==f.current&&(c.current.srcObject=f.current,c.current.play().catch(ne=>console.warn("Video auto-playback notice:",ne)))},[g,J]);const Qe=fe.useCallback(()=>{const ne=c.current;if(!ne||ne.readyState<2||ne.videoWidth===0)return null;p.current||(p.current=document.createElement("canvas"));const Pe=p.current,I=Math.min(ne.videoWidth,640),Ze=Math.min(ne.videoHeight,480);(Pe.width!==I||Pe.height!==Ze)&&(Pe.width=I,Pe.height=Ze);const qe=Pe.getContext("2d",{alpha:!1});return qe?(qe.drawImage(ne,0,0,I,Ze),Pe.toDataURL("image/jpeg",.8)):null},[]),Be=fe.useCallback(()=>{const ne=performance.now();let Pe;if(g==="direct"){const Ze=Qe();Ze&&(Pe=Ze)}i(Pe);const I=Math.round(performance.now()-ne);Q(I)},[g,Qe,i]);fe.useEffect(()=>{if(!R||!J||n)return;const ne=setInterval(()=>{if(!n&&g==="direct"){const Pe=performance.now(),I=Qe();if(I){i(I);const Ze=Math.round(performance.now()-Pe);Q(Ze),H(2.5)}}},400);return()=>clearInterval(ne)},[R,J,n,g,Qe,i]);const $e=async()=>{b(!0);try{const ne=!J;Ae(ne),ne||Ie();const Pe=await iM(ne);ne&&(await Uo().catch(()=>{}),Z(Date.now()),await me()),r&&r(Pe)}catch(ne){console.error("Failed to toggle camera power:",ne)}finally{b(!1)}},st=async()=>{h(!1),E(null),await Uo().catch(()=>{}),Z(Date.now()),await me()},Ge=ne=>{a&&a(ne,130,400)},ot=()=>{l&&l()},yt=s||(o==null?void 0:o.active_zone_id)||"ZONE-R1C1";return u.jsxs("div",{className:"glass-panel",style:{padding:"1.25rem",height:"100%",display:"flex",flexDirection:"column"},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.75rem",flexWrap:"wrap",gap:"0.5rem"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[u.jsx(Uv,{size:20,color:J?"var(--emerald-400)":"var(--text-muted)"}),u.jsxs("div",{children:[u.jsx("h2",{style:{fontSize:"1.1rem",fontWeight:700,letterSpacing:"-0.01em"},children:"Real USB Optical Cockpit"}),u.jsxs("div",{style:{fontSize:"0.72rem",color:"var(--text-muted)",display:"flex",alignItems:"center",gap:"0.4rem"},children:[u.jsx("span",{children:"Primary Field Viewport"}),pe&&u.jsxs(u.Fragment,{children:[u.jsx("span",{children:"•"}),u.jsxs("span",{style:{color:"var(--emerald-400)",display:"inline-flex",alignItems:"center",gap:"2px"},children:[u.jsx(Wv,{size:11})," ",g==="direct"?"Hardware Direct (<15ms)":"Zero-Lag Stream"]})]})]})]})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[u.jsx("span",{className:`status-pill ${J?pe?"status-online":"status-offline":"status-warning"}`,children:J?pe?`${g==="direct"?"DIRECT VIDEO":"STREAM"} • LIVE`:"DISCONNECTED":"STANDBY"}),u.jsx("button",{onClick:()=>A(!v),className:"btn btn-outline",style:{padding:"0.35rem 0.6rem",fontSize:"0.75rem",opacity:v?1:.6},title:"Toggle Performance HUD",children:u.jsx(F1,{size:13})}),pe&&u.jsx("button",{onClick:()=>C(!T),className:"btn btn-outline",style:{padding:"0.35rem 0.6rem",fontSize:"0.75rem",opacity:T?1:.6},title:"Toggle target reticle",children:u.jsx(I1,{size:13})}),pe&&u.jsx("button",{onClick:st,className:"btn btn-outline",style:{padding:"0.35rem 0.6rem",fontSize:"0.75rem"},title:"Refresh video connection",children:u.jsx(Xs,{size:13})}),u.jsx("button",{onClick:$e,disabled:S,className:`btn ${J?"btn-outline":"btn-primary"}`,style:{padding:"0.35rem 0.75rem",fontSize:"0.8rem",borderColor:J?"rgba(244, 63, 94, 0.4)":void 0,color:J?"var(--rose-500)":void 0},title:J?"Turn physical camera OFF":"Turn physical camera ON",children:S?u.jsx(Xs,{size:14,className:"animate-spin"}):J?u.jsxs(u.Fragment,{children:[u.jsx(h0,{size:14}),u.jsx("span",{children:"Turn OFF"})]}):u.jsxs(u.Fragment,{children:[u.jsx($1,{size:14}),u.jsx("span",{children:"Turn ON"})]})})]})]}),u.jsxs("div",{style:{position:"relative",width:"100%",aspectRatio:"16/9",backgroundColor:"#05080f",borderRadius:"var(--radius-md)",overflow:"hidden",border:"1px solid var(--border-subtle)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"inset 0 0 40px rgba(0,0,0,0.8)"},children:[u.jsx("video",{ref:c,autoPlay:!0,playsInline:!0,muted:!0,style:{width:"100%",height:"100%",objectFit:"contain",backgroundColor:"#000",display:J&&g==="direct"?"block":"none"}}),J&&g==="fallback"&&u.jsx("img",{src:`/api/camera/stream?t=${Ve}`,alt:"Live Physical USB Camera Stream",style:{width:"100%",height:"100%",objectFit:"contain",backgroundColor:"#000"},onError:()=>{console.warn("Fallback stream reconnecting, reclaiming camera..."),Uo().catch(()=>{})}}),!J&&u.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"#05080f",zIndex:4,textAlign:"center",padding:"2rem",color:"var(--text-muted)"},children:[u.jsx("div",{style:{width:"56px",height:"56px",borderRadius:"50%",background:"rgba(255, 255, 255, 0.05)",border:"1px solid var(--border-subtle)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 1rem auto"},children:u.jsx(h0,{size:28,color:"var(--text-muted)"})}),u.jsx("h3",{style:{fontSize:"1rem",color:"#fff",marginBottom:"0.25rem"},children:"Camera Standby Mode"}),u.jsx("p",{style:{fontSize:"0.8rem",maxWidth:"320px",margin:"0 auto 1.25rem auto"},children:"Optical hardware bus is in low-power standby. Click below to engage direct hardware video capture."}),u.jsxs("button",{onClick:$e,disabled:S,className:"btn btn-primary",style:{padding:"0.5rem 1.25rem",fontSize:"0.85rem"},children:[u.jsx(V1,{size:14}),u.jsx("span",{children:"Power ON Camera"})]})]}),J&&g==="error"&&!pe&&u.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"#05080f",zIndex:4,textAlign:"center",padding:"2rem",color:"var(--text-muted)"},children:[u.jsx(R1,{size:44,color:"var(--rose-500)",style:{margin:"0 auto 0.75rem auto"}}),u.jsx("h3",{style:{fontSize:"1rem",color:"#fff",marginBottom:"0.25rem"},children:"CAMERA: DISCONNECTED"}),u.jsx("p",{style:{fontSize:"0.8rem",maxWidth:"340px",margin:"0 auto 1rem auto"},children:_||"Physical USB camera stream interrupted. Check connection and click retry."}),u.jsxs("button",{onClick:st,className:"btn btn-outline",style:{padding:"0.4rem 1rem",fontSize:"0.8rem"},children:[u.jsx(Xs,{size:13}),u.jsx("span",{children:"Retry Stream"})]})]}),J&&pe&&u.jsxs(u.Fragment,{children:[T&&u.jsx("div",{className:"camera-reticle"}),u.jsxs("div",{style:{position:"absolute",top:"10px",left:"10px",background:"rgba(10, 15, 24, 0.75)",backdropFilter:"blur(8px)",padding:"4px 10px",borderRadius:"6px",fontSize:"0.72rem",color:"#34d399",fontFamily:"JetBrains Mono, monospace",border:"1px solid rgba(16, 185, 129, 0.3)",display:"flex",alignItems:"center",gap:"6px",zIndex:3},children:[u.jsx("span",{className:"pulse-indicator green",style:{width:"6px",height:"6px"}}),u.jsxs("span",{children:["LIVE • ",O," FPS"]}),u.jsx("span",{style:{color:"var(--text-dim)"},children:"|"}),u.jsx("span",{style:{color:"var(--sky-400)"},children:se})]}),v&&u.jsxs("div",{style:{position:"absolute",bottom:"10px",left:"10px",background:"rgba(10, 15, 24, 0.92)",backdropFilter:"blur(10px)",padding:"8px 14px",borderRadius:"8px",fontSize:"0.70rem",fontFamily:"JetBrains Mono, monospace",border:"1px solid rgba(56, 189, 248, 0.35)",color:"#e2e8f0",display:"flex",flexDirection:"column",gap:"3px",zIndex:4,boxShadow:"0 8px 24px rgba(0,0,0,0.6)"},children:[u.jsxs("div",{style:{fontWeight:700,color:"var(--sky-400)",marginBottom:"2px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[u.jsx("span",{children:"CAMERA PERFORMANCE HUD"}),u.jsx("span",{style:{color:g==="direct"?"#34d399":"#f59e0b",fontSize:"0.65rem"},children:g==="direct"?"DIRECT HTML5":"HTTP STREAM"})]}),u.jsxs("div",{children:["Requested FPS: ",u.jsx("strong",{style:{color:"#fff"},children:"120"})]}),u.jsxs("div",{children:["Actual FPS: ",u.jsx("strong",{style:{color:O>=60?"#34d399":"#38bdf8"},children:O})]}),u.jsxs("div",{children:["Resolution: ",u.jsx("strong",{style:{color:"#fff"},children:se})]}),u.jsxs("div",{children:["AI FPS: ",u.jsx("strong",{style:{color:"#fff"},children:R?`${G.toFixed(1)}`:"0 (On-Demand)"})]}),u.jsxs("div",{children:["Inference Time: ",u.jsxs("strong",{style:{color:"#fff"},children:[X," ms"]})]}),u.jsxs("div",{children:["Dropped Frames: ",u.jsx("strong",{style:{color:L>0?"#f87171":"#34d399"},children:L})]}),ee&&u.jsxs("div",{style:{marginTop:"2px",color:"var(--text-muted)",fontSize:"0.62rem",borderTop:"1px solid rgba(255,255,255,0.08)",paddingTop:"2px"},children:["Hardware Limits: ",ee]})]}),u.jsxs("div",{style:{position:"absolute",top:"10px",right:"10px",background:"rgba(10, 15, 24, 0.75)",backdropFilter:"blur(8px)",padding:"4px 10px",borderRadius:"6px",fontSize:"0.72rem",color:"#f8fafc",fontFamily:"JetBrains Mono, monospace",border:"1px solid var(--border-subtle)",display:"flex",alignItems:"center",gap:"6px",zIndex:3},children:[u.jsxs("span",{children:["📍 ",yt]}),(o==null?void 0:o.robot_location)&&u.jsxs("span",{style:{color:"var(--text-muted)"},children:["(X:",o.robot_location.x,", Y:",o.robot_location.y,")"]})]}),e!=null&&e.visual_annotations&&e.visual_annotations.length>0?e.visual_annotations.map((ne,Pe)=>{var te,ae;const I=((te=e.frame_dimensions)==null?void 0:te.width)||1280,Ze=((ae=e.frame_dimensions)==null?void 0:ae.height)||720,qe=ne.bbox[0]/I*100,P=ne.bbox[1]/Ze*100,y=(ne.bbox[2]-ne.bbox[0])/I*100,B=(ne.bbox[3]-ne.bbox[1])/Ze*100,j=ne.color||(ne.is_target?"#10b981":"#ef4444");return u.jsx("div",{style:{position:"absolute",border:`2px solid ${j}`,backgroundColor:`${j}22`,left:`${qe}%`,top:`${P}%`,width:`${y}%`,height:`${B}%`,pointerEvents:"none",transition:"all 0.2s ease-out",boxShadow:`0 0 10px ${j}66`,zIndex:3},children:u.jsx("span",{style:{position:"absolute",top:"-22px",left:"0",background:j,color:"#fff",fontSize:"0.68rem",fontWeight:700,padding:"1px 6px",borderRadius:"3px",whiteSpace:"nowrap",boxShadow:"0 2px 5px rgba(0,0,0,0.4)"},children:ne.label})},`ann-${Pe}`)}):e!=null&&e.bounding_box?u.jsx("div",{style:{position:"absolute",border:"2px solid #10b981",backgroundColor:"rgba(16, 185, 129, 0.15)",left:`${e.bounding_box.x/1280*100}%`,top:`${e.bounding_box.y/720*100}%`,width:`${e.bounding_box.w/1280*100}%`,height:`${e.bounding_box.h/720*100}%`,pointerEvents:"none",transition:"all 0.2s ease-out",boxShadow:"0 0 12px rgba(16, 185, 129, 0.4)",zIndex:3},children:u.jsxs("span",{style:{position:"absolute",top:"-20px",left:"0",background:"#10b981",color:"#fff",fontSize:"0.7rem",fontWeight:700,padding:"1px 6px",borderRadius:"3px",whiteSpace:"nowrap"},children:[e.disease," (",Math.round(e.confidence*100),"%)"]})}):null,e&&u.jsx("div",{style:{position:"absolute",top:"12px",left:"50%",transform:"translateX(-50%)",backgroundColor:e.status==="HUMAN_DETECTED"?"rgba(239, 68, 68, 0.9)":e.status==="DISEASE_RESULT"||e.status==="HEALTHY"?"rgba(16, 185, 129, 0.9)":"rgba(30, 41, 59, 0.88)",border:`1px solid ${e.status==="HUMAN_DETECTED"?"#ef4444":e.status==="DISEASE_RESULT"||e.status==="HEALTHY"?"#10b981":"rgba(245, 158, 11, 0.6)"}`,color:"#fff",padding:"4px 14px",borderRadius:"20px",fontSize:"0.72rem",fontWeight:700,zIndex:10,backdropFilter:"blur(4px)",boxShadow:"0 4px 12px rgba(0,0,0,0.5)",pointerEvents:"none",letterSpacing:"0.02em",whiteSpace:"nowrap"},children:e.status==="HUMAN_DETECTED"?"⚠️ [PERSON DETECTED] Disease analysis: DISABLED":e.status==="NO_VALID_LEAF"?"🌿 [NO VALID LEAF] Disease analysis: IDLE":e.status==="UNSUPPORTED_CROP"?"🚫 [UNSUPPORTED PLANT] Disease analysis: DISABLED":e.status==="LOW_QUALITY"?"🔍 [LOW QUALITY ROI] Move camera closer":e.status==="DISEASE_RESULT"||e.status==="HEALTHY"?"🌱 [SUPPORTED LEAF] Disease analysis: ACTIVE":e.display_name})]})]}),a&&u.jsxs("div",{className:"quick-drive-bar",children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem"},children:[u.jsx("span",{style:{fontSize:"0.75rem",fontWeight:600,color:"var(--text-muted)",textTransform:"uppercase"},children:"Cockpit Drive:"}),u.jsxs("button",{onClick:()=>Ge("left"),className:"quick-drive-btn",title:"Steer Left",children:[u.jsx(yp,{size:13}),u.jsx("span",{children:"Left"})]}),u.jsxs("button",{onClick:()=>Ge("forward"),className:"quick-drive-btn",title:"Move Forward",children:[u.jsx(Mp,{size:13}),u.jsx("span",{children:"Fwd"})]}),u.jsxs("button",{onClick:()=>Ge("backward"),className:"quick-drive-btn",title:"Move Backward",children:[u.jsx(_p,{size:13}),u.jsx("span",{children:"Back"})]}),u.jsxs("button",{onClick:()=>Ge("right"),className:"quick-drive-btn",title:"Steer Right",children:[u.jsx(Sp,{size:13}),u.jsx("span",{children:"Right"})]}),u.jsxs("button",{onClick:ot,className:"quick-drive-btn btn-stop",title:"Halt Motors",children:[u.jsx(Ep,{size:13}),u.jsx("span",{children:"Stop"})]})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[u.jsxs("button",{onClick:()=>D(!R),className:"btn btn-outline",style:{padding:"0.3rem 0.65rem",fontSize:"0.72rem",borderColor:R?"var(--emerald-500)":void 0,color:R?"var(--emerald-400)":"var(--text-muted)"},title:"Toggle automatic 2.5 FPS foliage pathology monitoring",children:[u.jsx(Hv,{size:12}),u.jsxs("span",{children:["Auto-Scan: ",R?"2.5 FPS ON":"OFF"]})]}),u.jsx("div",{style:{fontSize:"0.72rem",color:"var(--text-dim)",fontFamily:"JetBrains Mono, monospace"},children:(At=o==null?void 0:o.actuators)!=null&&At.motor_state?`MOTORS: ${o.actuators.motor_state}`:"READY"})]})]}),u.jsxs("div",{style:{marginTop:"0.85rem",display:"flex",gap:"0.75rem",justifyContent:"space-between",alignItems:"center"},children:[u.jsx("div",{style:{fontSize:"0.82rem",color:"var(--text-muted)"},children:J?e?u.jsxs("span",{children:["Last Scan: ",u.jsx("strong",{style:{color:"#fff"},children:e.display_name})," ",u.jsxs("span",{style:{color:"var(--text-dim)"},children:["(",(e.confidence*100).toFixed(0),"% conf)"]})]}):u.jsx("span",{children:"Live optical feed synchronized • Ready for pathology scan"}):u.jsx("span",{style:{color:"var(--amber-400)"},children:"Camera offline (Standby mode)"})}),u.jsx("button",{onClick:Be,disabled:!J||n,className:"btn btn-primary",style:{padding:"0.65rem 1.4rem",whiteSpace:"nowrap"},title:J?void 0:"Turn ON camera to perform scan",children:n?u.jsxs(u.Fragment,{children:[u.jsx(Xs,{size:16,className:"animate-spin"}),u.jsx("span",{children:"Analyzing Foliage..."})]}):u.jsxs(u.Fragment,{children:[u.jsx(Bv,{size:16}),u.jsx("span",{children:"Capture & AI Scan"})]})})]})]})}),cM=({telemetry:t})=>{var ee,q,G,H,X,Q,se,ue,He,Ae,Ve,Z,J,pe,ke,me,Ie,Qe,Be,$e,st,Ge,ot,yt,At,ne,Pe,I,Ze,qe,P,y,B,j,te,ae,he;const[e,n]=fe.useState(!1),i=(t==null?void 0:t.mode)==="REAL_HARDWARE"||(t==null?void 0:t.hardware_mode)==="REAL_HARDWARE",r=!!(t!=null&&t.esp32_connected),s=!i,o=i&&!r,a=t==null?void 0:t.ultrasonic;let l="--",c="--",f="--",p="OFFLINE",d="ROBOT: DISCONNECTED",m=!1;if(s){const z=(a==null?void 0:a.left)??((a==null?void 0:a.distance_cm)!=null?Math.round(a.distance_cm*1.05*10)/10:72),W=(a==null?void 0:a.center)??(a==null?void 0:a.distance_cm)??48,le=(a==null?void 0:a.right)??((a==null?void 0:a.distance_cm)!=null?Math.round(a.distance_cm*1.15*10)/10:86),Ee=Math.min(z,W,le);Ee<25?p="OBSTACLE":Ee<=60?p="WARNING":p="SAFE",m=W<25,d=m?"OBSTACLE AHEAD":p,l=`${z.toFixed(1)} cm`,c=`${W.toFixed(1)} cm`,f=`${le.toFixed(1)} cm`}else if(r){const z=a==null?void 0:a.left,W=(a==null?void 0:a.center)??(a==null?void 0:a.distance_cm),le=a==null?void 0:a.right;z!=null&&(l=`${Number(z).toFixed(1)} cm`),W!=null&&(c=`${Number(W).toFixed(1)} cm`),le!=null&&(f=`${Number(le).toFixed(1)} cm`);const Ee=W!=null?Number(W):999,ie=z!=null?Number(z):999,de=le!=null?Number(le):999,be=Math.min(Ee,ie,de);be<25?p="OBSTACLE":be<=60?p="WARNING":p="SAFE",m=Ee<25,d=m?"OBSTACLE AHEAD":p}let g="--",M="OFFLINE";if(s){let z=42;typeof(t==null?void 0:t.soil_moisture)=="number"?z=t.soil_moisture:((ee=t==null?void 0:t.soil_moisture)==null?void 0:ee.moisture_pct)!=null?z=t.soil_moisture.moisture_pct:((q=t==null?void 0:t.soil_moisture)==null?void 0:q.percentage)!=null&&(z=t.soil_moisture.percentage),z>=70?M="WET":z>=40?M="NORMAL":M="DRY",g=`${z.toFixed(1)}%`}else if(r){let z=t==null?void 0:t.soil_moisture,W=null;typeof z=="number"?W=z:(z==null?void 0:z.moisture_pct)!=null?W=z.moisture_pct:(z==null?void 0:z.percentage)!=null&&(W=z.percentage),W!=null&&(g=`${Number(W).toFixed(1)}%`,W>=70?M="WET":W>=40?M="NORMAL":M="DRY")}let x="--",h="--",_="OFFLINE";if(s){const z=((G=t==null?void 0:t.dht22)==null?void 0:G.temperature)??((H=t==null?void 0:t.environment)==null?void 0:H.temperature_c)??29.4,W=((X=t==null?void 0:t.dht22)==null?void 0:X.humidity)??((Q=t==null?void 0:t.environment)==null?void 0:Q.humidity_pct)??74;x=`${z.toFixed(1)} °C`,h=`${W.toFixed(1)} %`,_="ACTIVE"}else if(r){const z=((se=t==null?void 0:t.dht22)==null?void 0:se.temperature)??((ue=t==null?void 0:t.environment)==null?void 0:ue.temperature_c),W=((He=t==null?void 0:t.dht22)==null?void 0:He.humidity)??((Ae=t==null?void 0:t.environment)==null?void 0:Ae.humidity_pct);z!=null&&(x=`${Number(z).toFixed(1)} °C`),W!=null&&(h=`${Number(W).toFixed(1)} %`),z!=null&&W!=null&&(_="ACTIVE")}let E="--",S="--",b="--",T="--",C="--",v="--",A="--",R="OFFLINE";if(s){const z=((Ve=t==null?void 0:t.mpu6050)==null?void 0:Ve.accel_x)??((Z=t==null?void 0:t.imu)==null?void 0:Z.ax)??.03,W=((J=t==null?void 0:t.mpu6050)==null?void 0:J.accel_y)??((pe=t==null?void 0:t.imu)==null?void 0:pe.ay)??.12,le=((ke=t==null?void 0:t.mpu6050)==null?void 0:ke.accel_z)??((me=t==null?void 0:t.imu)==null?void 0:me.az)??.98,Ee=((Ie=t==null?void 0:t.mpu6050)==null?void 0:Ie.gyro_x)??((Qe=t==null?void 0:t.imu)==null?void 0:Qe.gx)??1.2,ie=((Be=t==null?void 0:t.mpu6050)==null?void 0:Be.gyro_y)??(($e=t==null?void 0:t.imu)==null?void 0:$e.gy)??-.8,de=((st=t==null?void 0:t.mpu6050)==null?void 0:st.gyro_z)??((Ge=t==null?void 0:t.imu)==null?void 0:Ge.gz)??.5,be=((ot=t==null?void 0:t.mpu6050)==null?void 0:ot.pitch_deg)??((yt=t==null?void 0:t.imu)==null?void 0:yt.pitch_deg)??1.2,Oe=((At=t==null?void 0:t.mpu6050)==null?void 0:At.roll_deg)??((ne=t==null?void 0:t.imu)==null?void 0:ne.roll_deg)??-.8;E=`${z.toFixed(3)}g`,S=`${W.toFixed(3)}g`,b=`${le.toFixed(3)}g`,T=`${Ee.toFixed(1)}°/s`,C=`${ie.toFixed(1)}°/s`,v=`${de.toFixed(1)}°/s`,A=`Pitch ${be.toFixed(1)}° | Roll ${Oe.toFixed(1)}°`,R=((Pe=t==null?void 0:t.mpu6050)==null?void 0:Pe.tilt_status)??(Math.abs(be)<5&&Math.abs(Oe)<5?"LEVEL":"TILTED")}else if(r){const z=t==null?void 0:t.mpu6050,W=t==null?void 0:t.imu,le=(z==null?void 0:z.accel_x)??(W==null?void 0:W.ax),Ee=(z==null?void 0:z.accel_y)??(W==null?void 0:W.ay),ie=(z==null?void 0:z.accel_z)??(W==null?void 0:W.az),de=(z==null?void 0:z.gyro_x)??(W==null?void 0:W.gx),be=(z==null?void 0:z.gyro_y)??(W==null?void 0:W.gy),Oe=(z==null?void 0:z.gyro_z)??(W==null?void 0:W.gz),Xe=(z==null?void 0:z.pitch_deg)??(W==null?void 0:W.pitch_deg),k=(z==null?void 0:z.roll_deg)??(W==null?void 0:W.roll_deg);le!=null&&(E=`${Number(le).toFixed(3)}g`),Ee!=null&&(S=`${Number(Ee).toFixed(3)}g`),ie!=null&&(b=`${Number(ie).toFixed(3)}g`),de!=null&&(T=`${Number(de).toFixed(1)}°/s`),be!=null&&(C=`${Number(be).toFixed(1)}°/s`),Oe!=null&&(v=`${Number(Oe).toFixed(1)}°/s`),Xe!=null&&k!=null&&(A=`Pitch ${Number(Xe).toFixed(1)}° | Roll ${Number(k).toFixed(1)}°`,R=(z==null?void 0:z.tilt_status)??(Math.abs(Number(Xe))<5&&Math.abs(Number(k))<5?"LEVEL":"TILTED"))}let D="OFF",O="OFF",U=o?"OFFLINE":"READY";const L=((I=t==null?void 0:t.pump)==null?void 0:I.state)==="ON"||((Ze=t==null?void 0:t.actuators)==null?void 0:Ze.pump_active)===!0;s?(D=((qe=t==null?void 0:t.pump)==null?void 0:qe.state)??((P=t==null?void 0:t.actuators)!=null&&P.pump_active?"ON":"OFF"),O=((y=t==null?void 0:t.pump)==null?void 0:y.relay)??D,U=((B=t==null?void 0:t.pump)==null?void 0:B.spray_status)??(L?"ACTIVE":"READY")):r&&(D=((j=t==null?void 0:t.pump)==null?void 0:j.state)??((te=t==null?void 0:t.actuators)!=null&&te.pump_active?"ON":"OFF"),O=((ae=t==null?void 0:t.pump)==null?void 0:ae.relay)??D,U=((he=t==null?void 0:t.pump)==null?void 0:he.spray_status)??(L?"ACTIVE":"READY"));const V=async z=>{try{n(!0),await fetch("/api/simulation/pump",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({state:z?"ON":"OFF",active:z})})}catch(W){console.error("Failed to toggle simulated pump:",W)}finally{n(!1)}};return u.jsxs("div",{className:"glass-panel",style:{padding:"1.25rem"},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem",flexWrap:"wrap",gap:"0.5rem"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[u.jsx(Fv,{size:18,color:"var(--sky-400)"}),u.jsx("h2",{style:{fontSize:"1.05rem",fontWeight:700,margin:0},children:"Robot Sensor Status"})]}),u.jsx("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:s?u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"status-pill",style:{background:"rgba(56, 189, 248, 0.15)",color:"var(--sky-400)",border:"1px solid rgba(56, 189, 248, 0.3)",fontSize:"0.68rem",fontWeight:700,letterSpacing:"0.04em"},children:"● HARDWARE MODE: SIMULATION"}),u.jsx("span",{className:"status-pill status-warning",style:{fontSize:"0.68rem",fontWeight:700},children:"DATA SOURCE: SIMULATION"})]}):u.jsx("span",{className:`status-pill ${r?"status-online":"status-offline"}`,style:{fontSize:"0.68rem",fontWeight:700},children:r?"● REAL HARDWARE: CONNECTED":"● ROBOT: DISCONNECTED"})})]}),o&&u.jsxs("div",{style:{marginBottom:"1rem",padding:"0.65rem 0.9rem",background:"rgba(244, 63, 94, 0.1)",border:"1px solid rgba(244, 63, 94, 0.3)",borderRadius:"8px",display:"flex",alignItems:"center",gap:"0.6rem",fontSize:"0.75rem",color:"var(--rose-400)"},children:[u.jsx(Aa,{size:16,color:"var(--rose-400)",style:{flexShrink:0}}),u.jsxs("span",{children:[u.jsx("strong",{children:"ROBOT: DISCONNECTED"})," — Physical ESP32 hardware is offline. No fake sensor data is generated."]})]}),u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"1rem"},children:[u.jsxs("div",{style:{background:"rgba(0,0,0,0.35)",padding:"0.85rem 1rem",borderRadius:"var(--radius-sm)",border:m?"1px solid var(--rose-500)":"1px solid var(--border-subtle)",display:"flex",flexDirection:"column",justifyContent:"space-between",transition:"border-color 0.2s ease"},children:[u.jsxs("div",{children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.45rem"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.35rem",fontSize:"0.72rem",color:"var(--text-muted)",fontWeight:700},children:[u.jsx(H1,{size:13,color:"var(--sky-400)"}),u.jsx("span",{children:"ULTRASONIC PROXIMITY"})]}),u.jsx("span",{className:`status-pill ${p==="SAFE"?"status-online":p==="WARNING"?"status-warning":"status-offline"}`,style:{fontSize:"0.62rem",padding:"0.15rem 0.45rem",fontWeight:800},children:d})]}),u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"0.5rem",marginTop:"0.35rem"},children:[u.jsxs("div",{style:{background:"rgba(255,255,255,0.03)",padding:"0.45rem 0.6rem",borderRadius:"6px"},children:[u.jsx("div",{style:{fontSize:"0.65rem",color:"var(--text-muted)",marginBottom:"0.15rem"},children:"Left Sensor"}),u.jsx("div",{className:"mono",style:{fontWeight:800,fontSize:"1.05rem",color:"#fff"},children:l})]}),u.jsxs("div",{style:{background:m?"rgba(244, 63, 94, 0.2)":"rgba(255,255,255,0.03)",padding:"0.45rem 0.6rem",borderRadius:"6px",border:m?"1px solid var(--rose-500)":"1px solid transparent"},children:[u.jsx("div",{style:{fontSize:"0.65rem",color:m?"var(--rose-500)":"var(--text-muted)",fontWeight:m?700:400,marginBottom:"0.15rem"},children:"Center Sensor"}),u.jsx("div",{className:"mono",style:{fontWeight:800,fontSize:"1.05rem",color:m?"var(--rose-500)":"var(--amber-400)"},children:c})]}),u.jsxs("div",{style:{background:"rgba(255,255,255,0.03)",padding:"0.45rem 0.6rem",borderRadius:"6px"},children:[u.jsx("div",{style:{fontSize:"0.65rem",color:"var(--text-muted)",marginBottom:"0.15rem"},children:"Right Sensor"}),u.jsx("div",{className:"mono",style:{fontWeight:800,fontSize:"1.05rem",color:"#fff"},children:f})]})]})]}),u.jsxs("div",{style:{marginTop:"0.55rem",paddingTop:"0.4rem",borderTop:"1px solid var(--border-subtle)",display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"0.68rem"},children:[u.jsx("span",{style:{color:"var(--text-dim)"},children:"Obstacle Status:"}),u.jsxs("strong",{style:{color:p==="SAFE"?"var(--emerald-400)":p==="WARNING"?"var(--amber-400)":"var(--rose-500)"},children:[p," ",m?"(OBSTACLE AHEAD)":""]})]})]}),u.jsxs("div",{style:{background:"rgba(0,0,0,0.35)",padding:"0.85rem",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-subtle)",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[u.jsxs("div",{children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.4rem"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.35rem",fontSize:"0.72rem",color:"var(--text-muted)",fontWeight:700},children:[u.jsx(zv,{size:13,color:"var(--sky-400)"}),u.jsx("span",{children:"SOIL MOISTURE"})]}),u.jsx("span",{className:"status-pill",style:{fontSize:"0.62rem",padding:"0.15rem 0.45rem",fontWeight:800,background:M==="NORMAL"?"rgba(16, 185, 129, 0.2)":M==="WET"?"rgba(56, 189, 248, 0.2)":M==="DRY"?"rgba(245, 158, 11, 0.2)":"rgba(244, 63, 94, 0.2)",color:M==="NORMAL"?"var(--emerald-400)":M==="WET"?"var(--sky-400)":M==="DRY"?"var(--amber-400)":"var(--rose-400)",border:`1px solid ${M==="NORMAL"?"rgba(16, 185, 129, 0.35)":M==="WET"?"rgba(56, 189, 248, 0.35)":M==="DRY"?"rgba(245, 158, 11, 0.35)":"rgba(244, 63, 94, 0.35)"}`},children:M})]}),u.jsx("div",{style:{display:"flex",alignItems:"baseline",gap:"0.35rem",margin:"0.35rem 0 0.15rem 0"},children:u.jsx("div",{className:"mono",style:{fontSize:"1.65rem",fontWeight:800,color:"var(--sky-400)",lineHeight:1},children:g})}),u.jsx("div",{style:{fontSize:"0.68rem",color:"var(--text-dim)"},children:"Range: 0–100% (Capacitive sensor)"})]}),u.jsxs("div",{style:{marginTop:"0.65rem",paddingTop:"0.45rem",borderTop:"1px solid var(--border-subtle)",display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"0.68rem"},children:[u.jsx("span",{style:{color:"var(--text-dim)"},children:"Condition:"}),u.jsx("strong",{style:{color:M==="NORMAL"?"var(--emerald-400)":M==="WET"?"var(--sky-400)":M==="DRY"?"var(--amber-400)":"var(--rose-400)"},children:M})]})]}),u.jsxs("div",{style:{background:"rgba(0,0,0,0.35)",padding:"0.85rem",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-subtle)",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[u.jsxs("div",{children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.5rem"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.35rem",fontSize:"0.72rem",color:"var(--text-muted)",fontWeight:700},children:[u.jsx(Gv,{size:13,color:"var(--amber-400)"}),u.jsx("span",{children:"DHT22"})]}),u.jsx("span",{className:`status-pill ${_==="ACTIVE"?"status-online":"status-offline"}`,style:{fontSize:"0.62rem",padding:"0.15rem 0.45rem",fontWeight:800},children:_})]}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.35rem",marginTop:"0.2rem"},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[u.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:"Temperature:"}),u.jsx("span",{className:"mono",style:{fontSize:"1.1rem",fontWeight:800,color:"var(--amber-400)"},children:x})]}),u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[u.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:"Humidity:"}),u.jsx("span",{className:"mono",style:{fontSize:"1.1rem",fontWeight:800,color:"var(--emerald-400)"},children:h})]})]})]}),u.jsxs("div",{style:{marginTop:"0.65rem",paddingTop:"0.45rem",borderTop:"1px solid var(--border-subtle)",display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"0.68rem"},children:[u.jsx("span",{style:{color:"var(--text-dim)"},children:"Sensor Model:"}),u.jsx("span",{style:{color:"var(--text-muted)",fontWeight:600},children:"DHT22 Microclimate"})]})]}),u.jsxs("div",{style:{background:"rgba(0,0,0,0.35)",padding:"0.85rem",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-subtle)",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[u.jsxs("div",{children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.4rem"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.35rem",fontSize:"0.72rem",color:"var(--text-muted)",fontWeight:700},children:[u.jsx(U1,{size:13,color:"var(--emerald-400)"}),u.jsx("span",{children:"MPU6050"})]}),u.jsx("span",{className:`status-pill ${R!=="OFFLINE"?"status-online":"status-offline"}`,style:{fontSize:"0.62rem",padding:"0.15rem 0.45rem",fontWeight:800},children:R})]}),u.jsx("div",{style:{fontSize:"0.68rem",color:"var(--text-dim)",fontWeight:700,marginBottom:"0.15rem"},children:"ACCELEROMETER"}),u.jsxs("div",{style:{display:"flex",gap:"0.4rem",fontSize:"0.72rem",marginBottom:"0.4rem"},children:[u.jsxs("span",{className:"mono",style:{color:"#fff"},children:["X: ",E]}),u.jsxs("span",{className:"mono",style:{color:"#fff"},children:["Y: ",S]}),u.jsxs("span",{className:"mono",style:{color:"var(--sky-400)",fontWeight:700},children:["Z: ",b]})]}),u.jsx("div",{style:{fontSize:"0.68rem",color:"var(--text-dim)",fontWeight:700,marginBottom:"0.15rem"},children:"GYROSCOPE"}),u.jsxs("div",{style:{display:"flex",gap:"0.4rem",fontSize:"0.72rem"},children:[u.jsxs("span",{className:"mono",style:{color:"#fff"},children:["X: ",T]}),u.jsxs("span",{className:"mono",style:{color:"#fff"},children:["Y: ",C]}),u.jsxs("span",{className:"mono",style:{color:"#fff"},children:["Z: ",v]})]})]}),u.jsxs("div",{style:{marginTop:"0.65rem",paddingTop:"0.45rem",borderTop:"1px solid var(--border-subtle)",display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"0.68rem"},children:[u.jsx("span",{style:{color:"var(--text-dim)"},children:"Tilt / Angle:"}),u.jsx("span",{className:"mono",style:{color:"var(--emerald-400)",fontWeight:700},children:A})]})]}),u.jsxs("div",{style:{background:"rgba(0,0,0,0.35)",padding:"0.85rem",borderRadius:"var(--radius-sm)",border:L?"1px solid rgba(16, 185, 129, 0.5)":"1px solid var(--border-subtle)",display:"flex",flexDirection:"column",justifyContent:"space-between",transition:"border-color 0.2s ease"},children:[u.jsxs("div",{children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.45rem"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.35rem",fontSize:"0.72rem",color:"var(--text-muted)",fontWeight:700},children:[u.jsx(cu,{size:13,color:"var(--amber-400)"}),u.jsx("span",{children:"SPRAY SYSTEM"})]}),u.jsx("span",{className:`status-pill ${L?"status-online":"status-offline"}`,style:{fontSize:"0.62rem",padding:"0.15rem 0.45rem",fontWeight:800},children:U})]}),u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"0.78rem",marginBottom:"0.35rem"},children:[u.jsx("span",{style:{color:"var(--text-muted)"},children:"Pump:"}),u.jsx("strong",{style:{color:L?"var(--emerald-400)":"var(--text-dim)",fontWeight:800},children:D})]}),u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"0.78rem",marginBottom:"0.6rem"},children:[u.jsx("span",{style:{color:"var(--text-muted)"},children:"Relay:"}),u.jsx("strong",{style:{color:L?"var(--emerald-400)":"var(--text-dim)",fontWeight:800},children:O})]}),u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.4rem",marginTop:"0.3rem"},children:[u.jsx("button",{type:"button",disabled:e||L||o,onClick:()=>V(!0),className:"btn",style:{padding:"0.4rem 0.5rem",fontSize:"0.72rem",fontWeight:800,background:L?"rgba(16, 185, 129, 0.4)":"rgba(16, 185, 129, 0.15)",color:"#fff",border:L?"1px solid var(--emerald-400)":"1px solid rgba(16, 185, 129, 0.3)",borderRadius:"6px",cursor:L||o?"default":"pointer",opacity:L||o?.6:.85},children:"PUMP ON"}),u.jsx("button",{type:"button",disabled:e||!L||o,onClick:()=>V(!1),className:"btn",style:{padding:"0.4rem 0.5rem",fontSize:"0.72rem",fontWeight:800,background:L?"rgba(244, 63, 94, 0.15)":"rgba(255, 255, 255, 0.15)",color:L?"var(--rose-500)":"#fff",border:L?"1px solid rgba(244, 63, 94, 0.3)":"1px solid rgba(255, 255, 255, 0.3)",borderRadius:"6px",cursor:!L||o?"default":"pointer",opacity:!L||o?.6:.85},children:"PUMP OFF"})]})]}),u.jsxs("div",{style:{marginTop:"0.65rem",paddingTop:"0.45rem",borderTop:"1px solid var(--border-subtle)",fontSize:"0.65rem",color:"var(--text-dim)"},children:["SPRAY STATUS: ",u.jsx("strong",{style:{color:L?"var(--emerald-400)":"var(--text-muted)"},children:U})," (",s?"Simulation mode":"Real hardware",")"]})]})]}),s&&u.jsxs("div",{style:{marginTop:"0.85rem",padding:"0.4rem 0.75rem",background:"rgba(56, 189, 248, 0.06)",borderRadius:"var(--radius-sm)",border:"1px solid rgba(56, 189, 248, 0.2)",display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:"0.68rem",color:"var(--text-muted)"},children:[u.jsxs("span",{children:[u.jsx("strong",{style:{color:"var(--sky-400)"},children:"SIMULATED DATA:"})," Sensor telemetry is dynamically generated by the Simulation Telemetry Provider. No real liquid is actuated."]}),u.jsx("span",{className:"mono",style:{color:"var(--text-dim)"},children:"Target: 6.6 Hz continuous telemetry"})]})]})},uM=({telemetry:t,onMove:e,onStop:n,onEmergencyStop:i,onSprayApprove:r})=>{var Ve,Z,J,pe,ke,me,Ie,Qe,Be,$e,st,Ge,ot,yt,At;const[s,o]=fe.useState(130),[a,l]=fe.useState(null),[c,f]=fe.useState(null),[p,d]=fe.useState(!1),[m,g]=fe.useState("192.168.4.1"),[M,x]=fe.useState(null),[h,_]=fe.useState(!1),[E,S]=fe.useState(""),[b,T]=fe.useState("REAL_HARDWARE"),C=fe.useRef(null),v=fe.useRef(0),A=fe.useRef(null);fe.useEffect(()=>{oM().then(ne=>{ne&&ne.mode&&T(ne.mode)}).catch(()=>{})},[]);const R=(t==null?void 0:t.esp32_connected)??!1,D=((Ve=t==null?void 0:t.safety)==null?void 0:Ve.emergency_stop)??!1,O=((Z=t==null?void 0:t.ultrasonic)==null?void 0:Z.obstacle_detected)??!1,U=((J=t==null?void 0:t.ultrasonic)==null?void 0:J.distance_cm)??null,L=((pe=t==null?void 0:t.actuators)==null?void 0:pe.motor_state)??"STOPPED",V=((ke=t==null?void 0:t.actuators)==null?void 0:ke.pump_active)??!1,ee=((me=t==null?void 0:t.actuators)==null?void 0:me.valve_open)??!1,q=((Ie=t==null?void 0:t.actuators)==null?void 0:Ie.flow_rate_ml_s)??0,G=fe.useCallback(async()=>{A.current&&(clearTimeout(A.current),A.current=null),l(null),C.current=null;try{await n()}catch(ne){console.error("Stop command error:",ne)}},[n]),H=fe.useCallback(async(ne,Pe=0)=>{if(!D){if(b==="REAL_HARDWARE"&&!R){console.warn("Real hardware is selected but ESP32 is offline. Motion command blocked.");return}if(ne==="stop"){await G();return}l(ne),C.current=ne;try{await e(ne,s,Pe)}catch(I){console.error("Movement command error:",I)}}},[D,s,e,G]),X=fe.useCallback(ne=>{if(["INPUT","TEXTAREA"].includes(ne.target.tagName)||D)return;let Pe=null;if(ne.key==="ArrowUp"||ne.key==="w"||ne.key==="W")Pe="forward";else if(ne.key==="ArrowDown"||ne.key==="s"||ne.key==="S")Pe="backward";else if(ne.key==="ArrowLeft"||ne.key==="a"||ne.key==="A")Pe="left";else if(ne.key==="ArrowRight"||ne.key==="d"||ne.key==="D")Pe="right";else if(ne.key===" "||ne.code==="Space"){ne.preventDefault(),G();return}Pe&&C.current!==Pe&&(ne.preventDefault(),H(Pe))},[D,H,G]),Q=fe.useCallback(ne=>{if(["INPUT","TEXTAREA"].includes(ne.target.tagName))return;["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","w","W","s","S","a","A","d","D"].includes(ne.key)&&(ne.preventDefault(),G())},[G]);fe.useEffect(()=>(window.addEventListener("keydown",X),window.addEventListener("keyup",Q),()=>{window.removeEventListener("keydown",X),window.removeEventListener("keyup",Q)}),[X,Q]);const se=async ne=>{D||(v.current=Date.now(),await H(ne))},ue=async ne=>{Date.now()-v.current<220&&ne&&ne!=="stop"?(A.current&&clearTimeout(A.current),A.current=setTimeout(()=>{C.current===ne&&G()},450)):await G()},He=async(ne,Pe=250)=>{if(!D){l(ne),C.current=ne;try{await e(ne,Math.min(s,140),Pe),setTimeout(()=>{C.current===ne&&(l(null),C.current=null)},Pe)}catch(I){console.error("Nudge command error:",I)}}},Ae=async()=>{try{if((await sM(m)).ok){d(!1);const Pe=await rM();f(Pe)}}catch{alert("Failed to update ESP32 IP address.")}};return u.jsxs("div",{className:"glass-panel",style:{padding:"1.25rem"},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"0.5rem",marginBottom:"1rem"},children:[u.jsxs("div",{children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[u.jsx(Hv,{size:20,color:"var(--emerald-400)"}),u.jsx("h2",{style:{fontSize:"1.15rem",fontWeight:800,margin:0},children:"Field Remote Controller"}),u.jsx("span",{className:"status-pill status-online",style:{fontSize:"0.65rem"},children:"4WD CHASSIS"})]}),u.jsxs("p",{style:{fontSize:"0.75rem",color:"var(--text-muted)",margin:"2px 0 0 0"},children:[u.jsx("strong",{children:"Operating Mode:"})," Remote-controlled from the field site over a local Wi-Fi network."]})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[u.jsx("button",{onClick:async()=>{const ne=b==="REAL_HARDWARE"?"SIMULATION":"REAL_HARDWARE";try{await aM(ne),T(ne)}catch(Pe){console.error("Mode switch error:",Pe)}},className:"btn btn-outline",style:{padding:"0.25rem 0.5rem",fontSize:"0.7rem",borderColor:b==="REAL_HARDWARE"?"var(--emerald-500)":"var(--amber-500)",color:b==="REAL_HARDWARE"?"var(--emerald-400)":"var(--amber-400)"},title:"Toggle between Real ESP32 Hardware and Simulation Sandbox",children:u.jsx("span",{children:b==="REAL_HARDWARE"?"REAL HARDWARE":"SIMULATION"})}),u.jsxs("button",{onClick:()=>d(!0),className:"btn btn-outline",style:{padding:"0.25rem 0.5rem",fontSize:"0.72rem"},title:"Configure Local Field Wi-Fi (Option A / Option B)",children:[u.jsx(is,{size:13,color:"var(--emerald-400)"}),u.jsx("span",{children:"Wi-Fi Setup"})]}),u.jsxs("div",{className:`status-pill ${b==="REAL_HARDWARE"?R?"status-online":"status-offline":"status-warning"}`,style:{fontSize:"0.7rem"},children:[u.jsx(ho,{size:12,className:h?"animate-pulse":""}),u.jsx("span",{children:b==="REAL_HARDWARE"?R?`CONNECTED ${M?`(${M}ms)`:""}`:"ROBOT OFFLINE":"SIMULATED ROBOT"})]})]})]}),u.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"10px",alignItems:"center",padding:"0.4rem 0.75rem",background:"rgba(0, 0, 0, 0.25)",borderRadius:"8px",border:"1px solid var(--border-subtle)",marginBottom:"1rem",fontSize:"0.72rem"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px",color:"var(--text-muted)"},children:[u.jsx(is,{size:12,color:"var(--emerald-400)"}),u.jsx("span",{children:"Wi-Fi:"}),u.jsx("strong",{className:"mono",style:{color:"#fff"},children:m||"192.168.4.1"})]}),u.jsx("div",{style:{width:"1px",height:"14px",background:"var(--border-subtle)"}}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[u.jsxs("span",{children:["NPK:"," ",u.jsx("strong",{style:{color:(Qe=t==null?void 0:t.npk)!=null&&Qe.valid?"var(--emerald-400)":"var(--text-dim)"},children:(Be=t==null?void 0:t.npk)!=null&&Be.valid?"ONLINE":"OFFLINE"})]}),u.jsxs("span",{children:["Soil:"," ",u.jsx("strong",{style:{color:(typeof(t==null?void 0:t.soil_moisture)=="number"?t.soil_moisture:($e=t==null?void 0:t.soil_moisture)==null?void 0:$e.moisture_pct)!=null?"var(--emerald-400)":"var(--text-dim)"},children:(typeof(t==null?void 0:t.soil_moisture)=="number"?t.soil_moisture:(st=t==null?void 0:t.soil_moisture)==null?void 0:st.moisture_pct)!=null?"ONLINE":"OFFLINE"})]}),u.jsxs("span",{children:["IMU:"," ",u.jsx("strong",{style:{color:((Ge=t==null?void 0:t.imu)==null?void 0:Ge.pitch_deg)!==null&&((ot=t==null?void 0:t.imu)==null?void 0:ot.valid)!==!1?"var(--emerald-400)":"var(--text-dim)"},children:((yt=t==null?void 0:t.imu)==null?void 0:yt.pitch_deg)!==null&&((At=t==null?void 0:t.imu)==null?void 0:At.valid)!==!1?"ONLINE":"OFFLINE"})]})]}),u.jsx("div",{style:{width:"1px",height:"14px",background:"var(--border-subtle)"}}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[u.jsxs("span",{children:["Pump:"," ",u.jsx("strong",{style:{color:V?"var(--amber-400)":"var(--text-dim)"},children:V?"ON":"OFF"})]}),u.jsxs("span",{children:["Valve:"," ",u.jsx("strong",{style:{color:ee?"var(--amber-400)":"var(--text-dim)"},children:ee?"OPEN":"CLOSED"})]})]})]}),D&&u.jsxs("div",{style:{marginBottom:"1rem",padding:"0.75rem 1rem",borderRadius:"8px",background:"rgba(239, 68, 68, 0.2)",border:"1px solid var(--rose-500)",color:"#fff",fontSize:"0.8rem",display:"flex",alignItems:"center",gap:"0.75rem"},children:[u.jsx(Dh,{size:20,color:"var(--rose-500)"}),u.jsxs("div",{children:[u.jsx("strong",{children:"PHYSICAL EMERGENCY STOP ENGAGED:"}),u.jsx("div",{style:{fontSize:"0.72rem",color:"rgba(255,255,255,0.8)"},children:"Hardware safety switch is tripped. All motor PWM and chemical pump actuation are hardware locked."})]})]}),O&&!D&&u.jsxs("div",{style:{marginBottom:"1rem",padding:"0.6rem 0.85rem",borderRadius:"8px",background:"rgba(245, 158, 11, 0.15)",border:"1px solid var(--amber-400)",color:"#fff",fontSize:"0.78rem",display:"flex",alignItems:"center",gap:"0.6rem"},children:[u.jsx(Aa,{size:18,color:"var(--amber-400)"}),u.jsxs("div",{children:[u.jsxs("strong",{children:["Obstacle Detected (",U?`${U.toFixed(1)} cm`:"< 25 cm","):"]}),u.jsx("span",{style:{fontSize:"0.72rem",color:"rgba(255,255,255,0.8)",marginLeft:"4px"},children:"Forward motion proximity limit reached. Steer clear or reverse."})]})]}),u.jsxs("div",{style:{background:"rgba(0,0,0,0.3)",borderRadius:"var(--radius-md)",border:"1px solid var(--border-subtle)",padding:"1.25rem",marginBottom:"1rem",display:"flex",flexDirection:"column",alignItems:"center"},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",width:"100%",maxWidth:"320px",marginBottom:"0.85rem",fontSize:"0.75rem",color:"var(--text-muted)"},children:[u.jsxs("span",{children:["Active State:"," ",u.jsx("strong",{className:"mono",style:{color:a||L!=="STOPPED"?"var(--emerald-400)":"#fff",textShadow:a?"0 0 10px rgba(16, 185, 129, 0.5)":"none"},children:a?a.toUpperCase():L})]}),u.jsxs("span",{children:["Watchdog: ",u.jsx("strong",{className:"mono",style:{color:"var(--sky-400)"},children:"1500ms Active"})]})]}),u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 80px)",gridTemplateRows:"repeat(3, 80px)",gap:"12px",touchAction:"manipulation",userSelect:"none",WebkitUserSelect:"none"},children:[u.jsx("div",{}),u.jsxs("button",{onPointerDown:()=>se("forward"),onPointerUp:()=>ue("forward"),onPointerLeave:()=>ue(),onPointerCancel:()=>ue(),onClick:ne=>{ne.preventDefault(),C.current||He("forward",450)},disabled:D,style:{background:a==="forward"?"var(--emerald-500)":"rgba(255, 255, 255, 0.08)",color:a==="forward"?"#000":"#fff",border:`2px solid ${a==="forward"?"var(--emerald-400)":"rgba(255, 255, 255, 0.15)"}`,borderRadius:"16px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:D?"not-allowed":"pointer",transition:"all 0.15s ease",boxShadow:a==="forward"?"0 0 20px var(--emerald-glow)":"none",touchAction:"none"},title:"Drive Forward (Click or Hold W / Up Arrow)",children:[u.jsx(Mp,{size:30}),u.jsx("span",{style:{fontSize:"0.7rem",fontWeight:800,marginTop:"2px"},children:"FWD"})]}),u.jsx("div",{}),u.jsxs("button",{onPointerDown:()=>se("left"),onPointerUp:()=>ue("left"),onPointerLeave:()=>ue(),onPointerCancel:()=>ue(),onClick:ne=>{ne.preventDefault(),C.current||He("left",450)},disabled:D,style:{background:a==="left"?"var(--emerald-500)":"rgba(255, 255, 255, 0.08)",color:a==="left"?"#000":"#fff",border:`2px solid ${a==="left"?"var(--emerald-400)":"rgba(255, 255, 255, 0.15)"}`,borderRadius:"16px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:D?"not-allowed":"pointer",transition:"all 0.15s ease",boxShadow:a==="left"?"0 0 20px var(--emerald-glow)":"none",touchAction:"none"},title:"Turn Left (Click or Hold A / Left Arrow)",children:[u.jsx(yp,{size:30}),u.jsx("span",{style:{fontSize:"0.7rem",fontWeight:800,marginTop:"2px"},children:"LEFT"})]}),u.jsxs("button",{onClick:ne=>{ne.preventDefault(),G()},disabled:D,style:{background:"linear-gradient(135deg, rgba(239, 68, 68, 0.4) 0%, rgba(185, 28, 28, 0.6) 100%)",color:"#fff",border:"2px solid var(--rose-500)",borderRadius:"16px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:D?"not-allowed":"pointer",transition:"all 0.15s ease",boxShadow:"0 0 15px rgba(239, 68, 68, 0.4)"},title:"Instant Stop (Click or Spacebar)",children:[u.jsx(Ep,{size:26,color:"#fff"}),u.jsx("span",{style:{fontSize:"0.75rem",fontWeight:900,marginTop:"2px",letterSpacing:"0.05em"},children:"STOP"})]}),u.jsxs("button",{onPointerDown:()=>se("right"),onPointerUp:()=>ue("right"),onPointerLeave:()=>ue(),onPointerCancel:()=>ue(),onClick:ne=>{ne.preventDefault(),C.current||He("right",450)},disabled:D,style:{background:a==="right"?"var(--emerald-500)":"rgba(255, 255, 255, 0.08)",color:a==="right"?"#000":"#fff",border:`2px solid ${a==="right"?"var(--emerald-400)":"rgba(255, 255, 255, 0.15)"}`,borderRadius:"16px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:D?"not-allowed":"pointer",transition:"all 0.15s ease",boxShadow:a==="right"?"0 0 20px var(--emerald-glow)":"none",touchAction:"none"},title:"Turn Right (Click or Hold D / Right Arrow)",children:[u.jsx(Sp,{size:30}),u.jsx("span",{style:{fontSize:"0.7rem",fontWeight:800,marginTop:"2px"},children:"RIGHT"})]}),u.jsx("div",{}),u.jsxs("button",{onPointerDown:()=>se("backward"),onPointerUp:()=>ue("backward"),onPointerLeave:()=>ue(),onPointerCancel:()=>ue(),onClick:ne=>{ne.preventDefault(),C.current||He("backward",450)},disabled:D,style:{background:a==="backward"?"var(--emerald-500)":"rgba(255, 255, 255, 0.08)",color:a==="backward"?"#000":"#fff",border:`2px solid ${a==="backward"?"var(--emerald-400)":"rgba(255, 255, 255, 0.15)"}`,borderRadius:"16px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:D?"not-allowed":"pointer",transition:"all 0.15s ease",boxShadow:a==="backward"?"0 0 20px var(--emerald-glow)":"none",touchAction:"none"},title:"Drive Backward (Click or Hold S / Down Arrow)",children:[u.jsx(_p,{size:30}),u.jsx("span",{style:{fontSize:"0.7rem",fontWeight:800,marginTop:"2px"},children:"REV"})]}),u.jsx("div",{})]}),u.jsxs("div",{style:{marginTop:"0.85rem",fontSize:"0.68rem",color:"var(--text-dim)",textAlign:"center"},children:["Keyboard controls: ",u.jsx("span",{className:"mono",children:"W / A / S / D"})," or ",u.jsx("span",{className:"mono",children:"Arrow Keys"})," • ",u.jsx("span",{className:"mono",children:"Space"})," for STOP"]})]}),u.jsxs("div",{style:{background:"rgba(0,0,0,0.25)",padding:"0.85rem",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-subtle)",marginBottom:"1rem"},children:[u.jsx("div",{style:{fontSize:"0.75rem",fontWeight:700,color:"var(--text-muted)",marginBottom:"0.5rem"},children:"Fine Pulse Maneuvering (250ms Precision Nudge):"}),u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"6px"},children:[u.jsx("button",{onClick:()=>He("forward",250),disabled:D,className:"btn btn-outline",style:{padding:"0.4rem 0.2rem",fontSize:"0.7rem"},children:"Nudge FWD"}),u.jsx("button",{onClick:()=>He("backward",250),disabled:D,className:"btn btn-outline",style:{padding:"0.4rem 0.2rem",fontSize:"0.7rem"},children:"Nudge REV"}),u.jsx("button",{onClick:()=>He("left",250),disabled:D,className:"btn btn-outline",style:{padding:"0.4rem 0.2rem",fontSize:"0.7rem"},children:"Nudge LEFT"}),u.jsx("button",{onClick:()=>He("right",250),disabled:D,className:"btn btn-outline",style:{padding:"0.4rem 0.2rem",fontSize:"0.7rem"},children:"Nudge RIGHT"})]})]}),u.jsxs("div",{style:{background:"rgba(0,0,0,0.25)",padding:"0.85rem 1rem",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-subtle)",marginBottom:"1rem"},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.5rem"},children:[u.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)",fontWeight:600},children:"Motor Drive Speed (PWM):"}),u.jsxs("span",{className:"mono",style:{fontSize:"0.85rem",fontWeight:800,color:"var(--emerald-400)"},children:[s," / 255 PWM"]})]}),u.jsx("input",{type:"range",min:"80",max:"255",value:s,onChange:ne=>o(Number(ne.target.value)),disabled:!R||D,style:{width:"100%",accentColor:"var(--emerald-500)",cursor:"pointer"}}),u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"6px",marginTop:"0.5rem"},children:[u.jsx("button",{onClick:()=>o(90),className:"btn btn-outline",style:{padding:"0.25rem",fontSize:"0.65rem",background:s===90?"rgba(16, 185, 129, 0.2)":"transparent"},children:"Creep (90)"}),u.jsx("button",{onClick:()=>o(130),className:"btn btn-outline",style:{padding:"0.25rem",fontSize:"0.65rem",background:s===130?"rgba(16, 185, 129, 0.2)":"transparent"},children:"Scout (130)"}),u.jsx("button",{onClick:()=>o(180),className:"btn btn-outline",style:{padding:"0.25rem",fontSize:"0.65rem",background:s===180?"rgba(16, 185, 129, 0.2)":"transparent"},children:"Transit (180)"}),u.jsx("button",{onClick:()=>o(255),className:"btn btn-outline",style:{padding:"0.25rem",fontSize:"0.65rem",background:s===255?"rgba(16, 185, 129, 0.2)":"transparent"},children:"Max (255)"})]})]}),u.jsxs("div",{style:{background:"rgba(0,0,0,0.3)",padding:"0.85rem 1rem",borderRadius:"var(--radius-sm)",border:"1px solid rgba(245, 158, 11, 0.3)",position:"relative"},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.4rem"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem"},children:[u.jsx(cu,{size:16,color:"var(--amber-400)"}),u.jsx("span",{style:{fontSize:"0.8rem",fontWeight:800,color:"#fff"},children:"Precision Spray Actuation (Protected)"})]}),u.jsx("span",{style:{fontSize:"0.65rem",padding:"2px 6px",borderRadius:"4px",background:V?"rgba(16, 185, 129, 0.25)":"rgba(255, 255, 255, 0.08)",color:V?"var(--emerald-400)":"var(--text-dim)",fontWeight:700},children:V?"ACTUATING":"LOCKED"})]}),u.jsx("p",{style:{fontSize:"0.72rem",color:"var(--text-muted)",margin:"0 0 0.5rem 0"},children:"Chemical spray requires formal AI diagnosis and on-site farmer approval. Spray buttons cannot be triggered in driving mode without verified prescription."}),u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"0.7rem",color:"var(--text-dim)",paddingTop:"0.4rem",borderTop:"1px solid var(--border-subtle)"},children:[u.jsxs("span",{children:["Pump State: ",u.jsx("strong",{style:{color:V?"var(--emerald-400)":"#fff"},children:V?"ACTIVE":"OFF"})]}),u.jsxs("span",{children:["Solenoid Valve: ",u.jsx("strong",{style:{color:ee?"var(--emerald-400)":"#fff"},children:ee?"OPEN":"CLOSED"})]}),u.jsxs("span",{children:["Flow Rate: ",u.jsxs("strong",{className:"mono",style:{color:q>0?"var(--emerald-400)":"#fff"},children:[q.toFixed(1)," mL/s"]})]})]})]}),p&&u.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.85)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999,padding:"1rem"},children:u.jsxs("div",{className:"glass-panel",style:{maxWidth:"520px",width:"100%",padding:"1.5rem",background:"var(--bg-secondary)",border:"1px solid var(--border-active)"},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[u.jsx(is,{size:20,color:"var(--emerald-400)"}),u.jsx("h3",{style:{fontSize:"1.1rem",fontWeight:800,margin:0},children:"Field-Site Local Wi-Fi Setup"})]}),u.jsx("button",{onClick:()=>d(!1),className:"btn btn-outline",style:{padding:"0.2rem 0.5rem",fontSize:"0.75rem"},children:"✕"})]}),u.jsxs("div",{style:{fontSize:"0.8rem",color:"var(--text-muted)",marginBottom:"1rem"},children:["AgriGuard operates ",u.jsx("strong",{children:"without internet connectivity"})," over a local wireless network in the field."]}),u.jsxs("div",{style:{padding:"0.85rem",borderRadius:"8px",background:"rgba(16, 185, 129, 0.08)",border:"1px solid rgba(16, 185, 129, 0.25)",marginBottom:"0.75rem"},children:[u.jsx("div",{style:{fontWeight:700,color:"var(--emerald-400)",fontSize:"0.82rem",marginBottom:"4px"},children:"Option A: Connect to Robot Wi-Fi Hotspot (Direct SoftAP)"}),u.jsxs("div",{style:{fontSize:"0.75rem",color:"#fff"},children:[u.jsxs("div",{children:["Network SSID: ",u.jsx("strong",{className:"mono",style:{color:"var(--emerald-400)"},children:"AgriGuard-Robot"})]}),u.jsxs("div",{children:["Password: ",u.jsx("strong",{className:"mono",children:"agri12345"})]}),u.jsxs("div",{children:["Default ESP32 IP: ",u.jsx("strong",{className:"mono",children:"192.168.4.1"})]})]})]}),u.jsxs("div",{style:{padding:"0.85rem",borderRadius:"8px",background:"rgba(56, 189, 248, 0.08)",border:"1px solid rgba(56, 189, 248, 0.25)",marginBottom:"1rem"},children:[u.jsx("div",{style:{fontWeight:700,color:"var(--sky-400)",fontSize:"0.82rem",marginBottom:"4px"},children:"Option B: Local Field Router / Phone Mobile Hotspot"}),u.jsxs("div",{style:{fontSize:"0.75rem",color:"#fff"},children:[u.jsxs("div",{children:["Laptop LAN IP: ",u.jsx("strong",{className:"mono",style:{color:"var(--sky-400)"},children:(c==null?void 0:c.laptop_lan_ip)??"192.168.1.x"})]}),u.jsxs("div",{children:["Smartphone Dashboard URL: ",u.jsx("strong",{className:"mono",style:{color:"#fff"},children:(c==null?void 0:c.dashboard_mobile_url)??"http://192.168.1.x:8000"})]})]})]}),u.jsxs("div",{style:{marginBottom:"1rem"},children:[u.jsx("label",{style:{display:"block",fontSize:"0.75rem",fontWeight:600,color:"var(--text-muted)",marginBottom:"4px"},children:"Target ESP32 IP Address:"}),u.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[u.jsx("input",{type:"text",value:m,onChange:ne=>g(ne.target.value),placeholder:"192.168.4.1",className:"mono",style:{flex:1,background:"rgba(0,0,0,0.4)",border:"1px solid var(--border-subtle)",borderRadius:"6px",padding:"0.45rem 0.75rem",color:"#fff",fontSize:"0.85rem"}}),u.jsx("button",{onClick:Ae,className:"btn btn-primary",style:{padding:"0.45rem 1rem",fontSize:"0.8rem"},children:"Save & Connect"})]})]}),u.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:u.jsx("button",{onClick:()=>d(!1),className:"btn btn-outline",style:{padding:"0.45rem 1.25rem",fontSize:"0.8rem"},children:"Close"})})]})})]})},dM=()=>{const[t,e]=fe.useState(null),[n,i]=fe.useState(!1),[r,s]=fe.useState(""),o=async()=>{i(!0);try{const l=await K1();e(l),s(new Date().toLocaleTimeString())}catch(l){console.error("Diagnostics query failed:",l)}finally{i(!1)}};fe.useEffect(()=>{o();const l=setInterval(o,3e3);return()=>clearInterval(l)},[]);const a=(l,c)=>{const f=c.includes(l.toUpperCase());return u.jsxs("span",{className:`status-pill ${f?"status-online":"status-offline"}`,style:{fontSize:"0.85rem"},children:[f?u.jsx(Ov,{size:14}):u.jsx(Vv,{size:14}),u.jsx("span",{children:l})]})};return u.jsxs("div",{className:"glass-panel animate-fade-in",style:{padding:"1.75rem"},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1.5rem",flexWrap:"wrap",gap:"1rem"},children:[u.jsxs("div",{children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[u.jsx(kv,{size:22,color:"var(--emerald-400)"}),u.jsx("h2",{style:{fontSize:"1.35rem",fontWeight:800},children:"Physical Hardware Diagnostic Suite"})]}),u.jsx("p",{style:{fontSize:"0.85rem",color:"var(--text-muted)",marginTop:"0.25rem"},children:"Section 27 Real Hardware Verification Matrix — Direct live polling of physical buses and interfaces."})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[u.jsxs("span",{style:{fontSize:"0.8rem",color:"var(--text-muted)"},children:["Last Polled: ",u.jsx("strong",{style:{color:"#fff"},children:r||"Waiting..."})]}),u.jsxs("button",{onClick:o,disabled:n,className:"btn btn-primary",style:{padding:"0.5rem 1rem",fontSize:"0.85rem"},children:[u.jsx(Xs,{size:14,className:n?"animate-spin":""}),u.jsx("span",{children:"Poll Hardware"})]})]})]}),u.jsx("div",{style:{overflowX:"auto",marginBottom:"2rem"},children:u.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",textAlign:"left"},children:[u.jsx("thead",{children:u.jsxs("tr",{style:{borderBottom:"1px solid var(--border-subtle)",color:"var(--text-muted)",fontSize:"0.8rem"},children:[u.jsx("th",{style:{padding:"0.75rem 1rem"},children:"SUBSYSTEM / INTERFACE"}),u.jsx("th",{style:{padding:"0.75rem 1rem"},children:"PHYSICAL BUS / PROTOCOL"}),u.jsx("th",{style:{padding:"0.75rem 1rem"},children:"PIN / PORT"}),u.jsx("th",{style:{padding:"0.75rem 1rem"},children:"LIVE STATUS"})]})}),u.jsxs("tbody",{style:{fontSize:"0.9rem"},children:[u.jsxs("tr",{style:{borderBottom:"1px solid rgba(255,255,255,0.04)"},children:[u.jsx("td",{style:{padding:"0.85rem 1rem",fontWeight:600},children:"ESP32 Main Controller"}),u.jsx("td",{style:{padding:"0.85rem 1rem",color:"var(--text-muted)"},children:"Wi-Fi 802.11 b/g/n HTTP/WS"}),u.jsx("td",{style:{padding:"0.85rem 1rem",fontFamily:"JetBrains Mono, monospace"},children:"192.168.4.1:80"}),u.jsx("td",{style:{padding:"0.85rem 1rem"},children:t?a(t.esp32,["CONNECTED"]):u.jsx("span",{className:"text-muted",children:"Querying..."})})]}),u.jsxs("tr",{style:{borderBottom:"1px solid rgba(255,255,255,0.04)"},children:[u.jsx("td",{style:{padding:"0.85rem 1rem",fontWeight:600},children:"External USB Camera"}),u.jsx("td",{style:{padding:"0.85rem 1rem",color:"var(--text-muted)"},children:"USB 2.0 / V4L2 / DShow"}),u.jsx("td",{style:{padding:"0.85rem 1rem",fontFamily:"JetBrains Mono, monospace"},children:"Video Dev Index 0"}),u.jsx("td",{style:{padding:"0.85rem 1rem"},children:t?a(t.camera,["CONNECTED"]):u.jsx("span",{className:"text-muted",children:"Querying..."})})]}),u.jsxs("tr",{style:{borderBottom:"1px solid rgba(255,255,255,0.04)"},children:[u.jsx("td",{style:{padding:"0.85rem 1rem",fontWeight:600},children:"RS485 NPK Soil Probe"}),u.jsx("td",{style:{padding:"0.85rem 1rem",color:"var(--text-muted)"},children:"Modbus RTU over RS485"}),u.jsx("td",{style:{padding:"0.85rem 1rem",fontFamily:"JetBrains Mono, monospace"},children:"GPIO 16(RX) / 17(TX)"}),u.jsx("td",{style:{padding:"0.85rem 1rem"},children:t?a(t.npk,["CONNECTED"]):u.jsx("span",{className:"text-muted",children:"Querying..."})})]}),u.jsxs("tr",{style:{borderBottom:"1px solid rgba(255,255,255,0.04)"},children:[u.jsx("td",{style:{padding:"0.85rem 1rem",fontWeight:600},children:"Capacitive Soil Moisture"}),u.jsx("td",{style:{padding:"0.85rem 1rem",color:"var(--text-muted)"},children:"Analog 12-bit ADC"}),u.jsx("td",{style:{padding:"0.85rem 1rem",fontFamily:"JetBrains Mono, monospace"},children:"GPIO 34 (ADC1_CH6)"}),u.jsx("td",{style:{padding:"0.85rem 1rem"},children:t?a(t.soil_moisture,["OK"]):u.jsx("span",{className:"text-muted",children:"Querying..."})})]}),u.jsxs("tr",{style:{borderBottom:"1px solid rgba(255,255,255,0.04)"},children:[u.jsx("td",{style:{padding:"0.85rem 1rem",fontWeight:600},children:"Microclimate DHT22"}),u.jsx("td",{style:{padding:"0.85rem 1rem",color:"var(--text-muted)"},children:"Single-Wire Digital Bus"}),u.jsx("td",{style:{padding:"0.85rem 1rem",fontFamily:"JetBrains Mono, monospace"},children:"GPIO 4"}),u.jsx("td",{style:{padding:"0.85rem 1rem"},children:t?a(t.temperature,["OK"]):u.jsx("span",{className:"text-muted",children:"Querying..."})})]}),u.jsxs("tr",{style:{borderBottom:"1px solid rgba(255,255,255,0.04)"},children:[u.jsx("td",{style:{padding:"0.85rem 1rem",fontWeight:600},children:"HC-SR04 Ultrasonic Distance"}),u.jsx("td",{style:{padding:"0.85rem 1rem",color:"var(--text-muted)"},children:"GPIO Pulse Timing"}),u.jsx("td",{style:{padding:"0.85rem 1rem",fontFamily:"JetBrains Mono, monospace"},children:"Trig: GPIO 5 / Echo: GPIO 18"}),u.jsx("td",{style:{padding:"0.85rem 1rem"},children:t?a(t.ultrasonic,["OK"]):u.jsx("span",{className:"text-muted",children:"Querying..."})})]}),u.jsxs("tr",{style:{borderBottom:"1px solid rgba(255,255,255,0.04)"},children:[u.jsx("td",{style:{padding:"0.85rem 1rem",fontWeight:600},children:"MPU6050 6-DOF IMU"}),u.jsx("td",{style:{padding:"0.85rem 1rem",color:"var(--text-muted)"},children:"I2C Bus (Addr: 0x68)"}),u.jsx("td",{style:{padding:"0.85rem 1rem",fontFamily:"JetBrains Mono, monospace"},children:"SDA: GPIO 21 / SCL: GPIO 22"}),u.jsx("td",{style:{padding:"0.85rem 1rem"},children:t?a(t.imu,["OK"]):u.jsx("span",{className:"text-muted",children:"Querying..."})})]}),u.jsxs("tr",{style:{borderBottom:"1px solid rgba(255,255,255,0.04)"},children:[u.jsx("td",{style:{padding:"0.85rem 1rem",fontWeight:600},children:"12V Diaphragm Spray Pump"}),u.jsx("td",{style:{padding:"0.85rem 1rem",color:"var(--text-muted)"},children:"MOSFET Gate Driver"}),u.jsx("td",{style:{padding:"0.85rem 1rem",fontFamily:"JetBrains Mono, monospace"},children:"GPIO 25"}),u.jsx("td",{style:{padding:"0.85rem 1rem"},children:t?a(t.pump,["ON","OFF"]):u.jsx("span",{className:"text-muted",children:"Querying..."})})]}),u.jsxs("tr",{style:{borderBottom:"1px solid rgba(255,255,255,0.04)"},children:[u.jsx("td",{style:{padding:"0.85rem 1rem",fontWeight:600},children:"12V Solenoid Shutoff Valve"}),u.jsx("td",{style:{padding:"0.85rem 1rem",color:"var(--text-muted)"},children:"MOSFET Gate Driver"}),u.jsx("td",{style:{padding:"0.85rem 1rem",fontFamily:"JetBrains Mono, monospace"},children:"GPIO 26"}),u.jsx("td",{style:{padding:"0.85rem 1rem"},children:t?a(t.valve,["OPEN","CLOSED"]):u.jsx("span",{className:"text-muted",children:"Querying..."})})]}),u.jsxs("tr",{children:[u.jsx("td",{style:{padding:"0.85rem 1rem",fontWeight:600},children:"YF-S401 Liquid Flow Sensor"}),u.jsx("td",{style:{padding:"0.85rem 1rem",color:"var(--text-muted)"},children:"Hardware Pulse Interrupt"}),u.jsx("td",{style:{padding:"0.85rem 1rem",fontFamily:"JetBrains Mono, monospace"},children:"GPIO 27"}),u.jsx("td",{style:{padding:"0.85rem 1rem"},children:t?u.jsx("span",{className:`status-pill ${t.flow!=="NO FLOW"?"status-online":"status-warning"}`,children:t.flow}):u.jsx("span",{className:"text-muted",children:"Querying..."})})]})]})]})}),u.jsxs("div",{style:{background:"rgba(0,0,0,0.3)",padding:"1rem",borderRadius:"var(--radius-md)",border:"1px solid var(--border-subtle)"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"},children:[u.jsx(Y1,{size:16,color:"var(--sky-400)"}),u.jsx("h3",{style:{fontSize:"0.9rem",fontWeight:700,color:"#fff"},children:"Physical Payload Inspector (JSON)"})]}),u.jsx("pre",{className:"mono",style:{fontSize:"0.75rem",color:"var(--emerald-400)",overflowX:"auto",maxHeight:"220px"},children:t!=null&&t.raw_telemetry?JSON.stringify(t.raw_telemetry,null,2):"// No physical telemetry packet received"})]})]})},hM=()=>u.jsxs("div",{className:"sidebar-hero-card",children:[u.jsx("div",{className:"sidebar-hero-scanline"}),u.jsx("div",{style:{position:"absolute",top:"-40px",right:"-40px",width:"160px",height:"160px",background:"radial-gradient(circle, rgba(16, 185, 129, 0.22) 0%, transparent 70%)",borderRadius:"50%",pointerEvents:"none",zIndex:0}}),u.jsxs("div",{style:{position:"relative",zIndex:2,display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"0.65rem"},children:[u.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"6px",padding:"0.22rem 0.65rem",borderRadius:"999px",background:"rgba(16, 185, 129, 0.12)",border:"1px solid rgba(16, 185, 129, 0.35)",boxShadow:"0 0 12px rgba(16, 185, 129, 0.15)"},children:[u.jsx("span",{className:"pulse-indicator green",style:{width:"6px",height:"6px"}}),u.jsx("span",{style:{fontSize:"0.66rem",fontWeight:800,letterSpacing:"0.08em",color:"var(--emerald-400)",textTransform:"uppercase",fontFamily:"JetBrains Mono, monospace"},children:"LIVE FIELD MONITORING"})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px",fontSize:"0.65rem",color:"var(--text-dim)",fontFamily:"JetBrains Mono, monospace"},children:[u.jsx(ho,{size:11,color:"var(--emerald-400)"}),u.jsx("span",{children:"v2.0 4WD"})]})]}),u.jsxs("div",{style:{position:"relative",zIndex:2,width:"100%",height:"115px",borderRadius:"12px",background:"radial-gradient(ellipse at 50% 65%, rgba(16, 185, 129, 0.12) 0%, rgba(6, 12, 20, 0.6) 80%)",border:"1px solid rgba(255, 255, 255, 0.05)",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"0.85rem"},children:[u.jsx("div",{className:"laser-sweep-beam"}),u.jsxs("svg",{viewBox:"0 0 280 120",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:"92%",height:"92%",filter:"drop-shadow(0 4px 14px rgba(0,0,0,0.6))"},children:[u.jsx("path",{d:"M40 95 L240 95",stroke:"rgba(16, 185, 129, 0.2)",strokeWidth:"1",strokeDasharray:"3 3"}),u.jsx("path",{d:"M60 105 L220 105",stroke:"rgba(16, 185, 129, 0.15)",strokeWidth:"1",strokeDasharray:"4 4"}),u.jsx("path",{d:"M80 85 L200 85",stroke:"rgba(16, 185, 129, 0.12)",strokeWidth:"1",strokeDasharray:"2 2"}),u.jsx("polygon",{points:"140,38 75,98 205,98",fill:"url(#scanBeamGrad)",opacity:"0.35"}),u.jsx("line",{x1:"75",y1:"98",x2:"205",y2:"98",stroke:"var(--emerald-400)",strokeWidth:"1.5",strokeOpacity:"0.8"}),u.jsx("circle",{cx:"140",cy:"98",r:"16",stroke:"var(--emerald-400)",strokeWidth:"1",strokeDasharray:"3 2",opacity:"0.6"}),u.jsx("circle",{cx:"140",cy:"98",r:"3",fill:"var(--emerald-400)"}),u.jsx("rect",{x:"52",y:"60",width:"18",height:"38",rx:"4",fill:"#0d1520",stroke:"rgba(255,255,255,0.15)",strokeWidth:"1.5"}),u.jsx("line",{x1:"52",y1:"70",x2:"70",y2:"70",stroke:"#1f2937",strokeWidth:"1.5"}),u.jsx("line",{x1:"52",y1:"80",x2:"70",y2:"80",stroke:"#1f2937",strokeWidth:"1.5"}),u.jsx("line",{x1:"52",y1:"90",x2:"70",y2:"90",stroke:"#1f2937",strokeWidth:"1.5"}),u.jsx("rect",{x:"80",y:"66",width:"18",height:"38",rx:"4",fill:"#0f1c2c",stroke:"rgba(16, 185, 129, 0.4)",strokeWidth:"1.5"}),u.jsx("line",{x1:"80",y1:"76",x2:"98",y2:"76",stroke:"var(--emerald-500)",strokeWidth:"1.5",strokeOpacity:"0.6"}),u.jsx("line",{x1:"80",y1:"86",x2:"98",y2:"86",stroke:"var(--emerald-500)",strokeWidth:"1.5",strokeOpacity:"0.6"}),u.jsx("line",{x1:"80",y1:"96",x2:"98",y2:"96",stroke:"var(--emerald-500)",strokeWidth:"1.5",strokeOpacity:"0.6"}),u.jsx("rect",{x:"210",y:"60",width:"18",height:"38",rx:"4",fill:"#0d1520",stroke:"rgba(255,255,255,0.15)",strokeWidth:"1.5"}),u.jsx("line",{x1:"210",y1:"70",x2:"228",y2:"70",stroke:"#1f2937",strokeWidth:"1.5"}),u.jsx("line",{x1:"210",y1:"80",x2:"228",y2:"80",stroke:"#1f2937",strokeWidth:"1.5"}),u.jsx("line",{x1:"210",y1:"90",x2:"228",y2:"90",stroke:"#1f2937",strokeWidth:"1.5"}),u.jsx("rect",{x:"182",y:"66",width:"18",height:"38",rx:"4",fill:"#0f1c2c",stroke:"rgba(16, 185, 129, 0.4)",strokeWidth:"1.5"}),u.jsx("line",{x1:"182",y1:"76",x2:"200",y2:"76",stroke:"var(--emerald-500)",strokeWidth:"1.5",strokeOpacity:"0.6"}),u.jsx("line",{x1:"182",y1:"86",x2:"200",y2:"86",stroke:"var(--emerald-500)",strokeWidth:"1.5",strokeOpacity:"0.6"}),u.jsx("line",{x1:"182",y1:"96",x2:"200",y2:"96",stroke:"var(--emerald-500)",strokeWidth:"1.5",strokeOpacity:"0.6"}),u.jsx("polygon",{points:"76,68 94,48 186,48 204,68 196,82 84,82",fill:"url(#chassisGrad)",stroke:"rgba(255, 255, 255, 0.2)",strokeWidth:"1.5"}),u.jsx("path",{d:"M96 52 L184 52",stroke:"var(--emerald-400)",strokeWidth:"2",strokeLinecap:"round"}),u.jsx("circle",{cx:"106",cy:"64",r:"2.5",fill:"var(--sky-400)"}),u.jsx("circle",{cx:"174",cy:"64",r:"2.5",fill:"var(--sky-400)"}),u.jsx("line",{x1:"68",y1:"62",x2:"94",y2:"62",stroke:"#64748b",strokeWidth:"2.5",strokeLinecap:"round"}),u.jsx("line",{x1:"186",y1:"62",x2:"212",y2:"62",stroke:"#64748b",strokeWidth:"2.5",strokeLinecap:"round"}),u.jsx("rect",{x:"64",y:"60",width:"5",height:"7",rx:"1.5",fill:"var(--emerald-400)"}),u.jsx("rect",{x:"211",y:"60",width:"5",height:"7",rx:"1.5",fill:"var(--emerald-400)"}),u.jsx("circle",{cx:"66",cy:"74",r:"1.5",fill:"var(--sky-400)",opacity:"0.8"}),u.jsx("circle",{cx:"64",cy:"80",r:"1.2",fill:"var(--emerald-400)",opacity:"0.7"}),u.jsx("circle",{cx:"213",cy:"74",r:"1.5",fill:"var(--sky-400)",opacity:"0.8"}),u.jsx("circle",{cx:"215",cy:"80",r:"1.2",fill:"var(--emerald-400)",opacity:"0.7"}),u.jsx("rect",{x:"130",y:"32",width:"20",height:"18",rx:"3",fill:"#132338",stroke:"rgba(16, 185, 129, 0.5)",strokeWidth:"1.2"}),u.jsx("circle",{cx:"140",cy:"38",r:"6",fill:"#040b14",stroke:"var(--emerald-400)",strokeWidth:"1.5"}),u.jsx("circle",{cx:"140",cy:"38",r:"3",fill:"var(--emerald-400)"}),u.jsx("circle",{cx:"142",cy:"36",r:"1",fill:"#fff"}),u.jsx("ellipse",{cx:"140",cy:"27",rx:"9",ry:"3.5",fill:"#1f2937",stroke:"var(--sky-400)",strokeWidth:"1.2"}),u.jsx("circle",{cx:"140",cy:"26",r:"2",fill:"var(--sky-400)"}),u.jsxs("defs",{children:[u.jsxs("linearGradient",{id:"chassisGrad",x1:"140",y1:"48",x2:"140",y2:"82",gradientUnits:"userSpaceOnUse",children:[u.jsx("stop",{offset:"0%",stopColor:"#1e293b"}),u.jsx("stop",{offset:"50%",stopColor:"#0f172a"}),u.jsx("stop",{offset:"100%",stopColor:"#09101c"})]}),u.jsxs("linearGradient",{id:"scanBeamGrad",x1:"140",y1:"38",x2:"140",y2:"98",gradientUnits:"userSpaceOnUse",children:[u.jsx("stop",{offset:"0%",stopColor:"#10b981",stopOpacity:"0.8"}),u.jsx("stop",{offset:"60%",stopColor:"#10b981",stopOpacity:"0.15"}),u.jsx("stop",{offset:"100%",stopColor:"#10b981",stopOpacity:"0.0"})]})]})]})]}),u.jsxs("div",{style:{position:"relative",zIndex:2,marginBottom:"0.85rem"},children:[u.jsxs("h2",{style:{fontSize:"1.08rem",fontWeight:800,lineHeight:1.25,color:"#fff",letterSpacing:"-0.02em",margin:"0 0 0.25rem 0"},children:["AI-Powered"," ",u.jsx("span",{style:{background:"linear-gradient(135deg, #34d399 0%, #10b981 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"Precision Farming"})]}),u.jsxs("p",{style:{fontSize:"0.74rem",fontWeight:600,color:"var(--emerald-400)",letterSpacing:"0.04em",margin:0,display:"flex",alignItems:"center",gap:"4px"},children:[u.jsx("span",{children:"Detect"}),u.jsx("span",{style:{color:"var(--text-dim)"},children:"•"}),u.jsx("span",{children:"Diagnose"}),u.jsx("span",{style:{color:"var(--text-dim)"},children:"•"}),u.jsx("span",{children:"Treat"}),u.jsx("span",{style:{color:"var(--text-dim)"},children:"•"}),u.jsx("span",{children:"Monitor"})]})]}),u.jsxs("div",{style:{position:"relative",zIndex:2,display:"flex",flexDirection:"column",gap:"0.4rem"},children:[u.jsxs("div",{className:"hero-feature-pill",children:[u.jsx("div",{style:{width:"22px",height:"22px",borderRadius:"6px",background:"rgba(16, 185, 129, 0.2)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:u.jsx(Bv,{size:13,color:"var(--emerald-400)"})}),u.jsxs("div",{style:{flex:1,minWidth:0},children:[u.jsx("div",{style:{fontSize:"0.75rem",fontWeight:700,color:"#f8fafc"},children:"AI Disease Detection"}),u.jsx("div",{style:{fontSize:"0.64rem",color:"var(--text-muted)"},children:"Real-time Foliage Pathology"})]}),u.jsx("span",{className:"feature-status-dot green"})]}),u.jsxs("div",{className:"hero-feature-pill",children:[u.jsx("div",{style:{width:"22px",height:"22px",borderRadius:"6px",background:"rgba(56, 189, 248, 0.2)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:u.jsx(Iv,{size:13,color:"var(--sky-400)"})}),u.jsxs("div",{style:{flex:1,minWidth:0},children:[u.jsx("div",{style:{fontSize:"0.75rem",fontWeight:700,color:"#f8fafc"},children:"NPK Soil Intelligence"}),u.jsx("div",{style:{fontSize:"0.64rem",color:"var(--text-muted)"},children:"RS485 Probe & Moisture Sync"})]}),u.jsx("span",{className:"feature-status-dot sky"})]}),u.jsxs("div",{className:"hero-feature-pill",children:[u.jsx("div",{style:{width:"22px",height:"22px",borderRadius:"6px",background:"rgba(245, 158, 11, 0.2)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:u.jsx(cu,{size:13,color:"var(--amber-400)"})}),u.jsxs("div",{style:{flex:1,minWidth:0},children:[u.jsx("div",{style:{fontSize:"0.75rem",fontWeight:700,color:"#f8fafc"},children:"Precision Spraying"}),u.jsx("div",{style:{fontSize:"0.64rem",color:"var(--text-muted)"},children:"Targeted Chemical Dose Delivery"})]}),u.jsx("span",{className:"feature-status-dot amber"})]})]})]}),fM=({telemetry:t,onConnectionChange:e})=>{const[n,i]=fe.useState("wifi"),[r,s]=fe.useState(vn.getStatus()),[o,a]=fe.useState(vn.getMode()),[l,c]=fe.useState(zt.WIFI.DEFAULT_IP),[f,p]=fe.useState(String(zt.WIFI.DEFAULT_PORT)),[d,m]=fe.useState(!1),[g,M]=fe.useState(""),x=typeof navigator<"u"&&"bluetooth"in navigator,h=typeof window<"u"?window.isSecureContext:!0,[_,E]=fe.useState(!0);fe.useEffect(()=>{const U=vn.subscribeStatus(L=>{s(L),a(L.mode),L.message&&M(L.message)});return()=>U()},[]);const S=r.state==="CONNECTED"&&o==="REAL_HARDWARE",b=r.state==="CONNECTING"||d,T=r.state==="RECONNECTING",C=U=>{vn.setMode(U),a(U),M(U==="SIMULATION"?"Switched to SIMULATION mode (Safe test sandbox, no hardware required).":"Switched to REAL HARDWARE mode. Connect your physical ESP32 to begin."),e==null||e()},v=async()=>{const U=l.trim(),L=parseInt(f,10)||80;if(!U){M("Please enter a valid ESP32 IP address or hostname (e.g., 192.168.4.1).");return}m(!0),M(`Verifying ESP32 at ${U}:${L}…`);try{await vn.connect("wifi",{ip:U,port:L})||M(`Could not reach ESP32 at ${U}:${L}. Connect PC Wi-Fi to "${zt.WIFI.AP_SSID}".`),e==null||e()}catch(V){M(V.message||"Wi-Fi connection error.")}finally{m(!1)}},A=async()=>{m(!0);try{await vn.disconnect(),M("ESP32 disconnected. Actuators safely stopped."),e==null||e()}catch(U){M(U.message||"Disconnect error.")}finally{m(!1)}},R=async()=>{m(!0),M(`Reconnecting to ESP32 at ${l}…`);try{await vn.reconnect()||M(`Reconnect attempt failed for ${l}. Verify ESP32 power and Wi-Fi connection.`),e==null||e()}catch(U){M(U.message||"Reconnect error.")}finally{m(!1)}},D=async()=>{if(!x){M("Web Bluetooth is not supported in this browser. Please use Chrome, Edge, or Opera on desktop/Android.");return}if(!h){M("Web Bluetooth requires a secure context (HTTPS or http://localhost).");return}m(!0),M('Opening Bluetooth pairing window… select "AgriGuard-Robot"');try{await vn.connect("bluetooth")&&M("Connected to AgriGuard ESP32 via Web Bluetooth! Real hardware telemetry live."),e==null||e()}catch(U){U.name==="NotFoundError"?M("Bluetooth device chooser was cancelled by user."):M(U.message||"Web Bluetooth connection failed.")}finally{m(!1)}};let O="DISCONNECTED";return r.transport==="Wi-Fi"&&(r.state==="CONNECTED"?O="CONNECTED":r.state==="RECONNECTING"?O="RECONNECTING":O="DISCONNECTED"),u.jsxs("div",{className:"glass-panel",style:{padding:"1.25rem",width:"100%",boxSizing:"border-box"},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem",flexWrap:"wrap",gap:"0.75rem"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.65rem"},children:[u.jsx("div",{style:{width:"38px",height:"38px",borderRadius:"10px",background:S?"rgba(16, 185, 129, 0.15)":"rgba(56, 189, 248, 0.15)",border:`1px solid ${S?"rgba(16, 185, 129, 0.35)":"rgba(56, 189, 248, 0.35)"}`,display:"flex",alignItems:"center",justifyContent:"center"},children:u.jsx(G1,{size:20,color:S?"var(--emerald-400)":"var(--sky-400)"})}),u.jsxs("div",{children:[u.jsx("h2",{style:{fontSize:"1.05rem",fontWeight:700,margin:0,display:"flex",alignItems:"center",gap:"0.5rem"},children:"Robot Hardware Connectivity"}),u.jsx("p",{style:{fontSize:"0.75rem",color:"var(--text-muted)",margin:"0.15rem 0 0 0"},children:"Primary: Wi-Fi (SoftAP / LAN) · Optional: Web Bluetooth BLE · Safe Watchdog Interlock"})]})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",background:"rgba(0,0,0,0.3)",padding:"4px",borderRadius:"10px",border:"1px solid var(--border-subtle)"},children:[u.jsx("button",{type:"button",onClick:()=>C("SIMULATION"),style:{padding:"0.35rem 0.8rem",borderRadius:"7px",border:"none",background:o==="SIMULATION"?"var(--sky-500)":"transparent",color:o==="SIMULATION"?"#05080f":"var(--text-muted)",fontSize:"0.74rem",fontWeight:800,cursor:"pointer",transition:"all 0.15s ease"},children:"SIMULATION"}),u.jsx("button",{type:"button",onClick:()=>C("REAL_HARDWARE"),style:{padding:"0.35rem 0.8rem",borderRadius:"7px",border:"none",background:o==="REAL_HARDWARE"?"var(--emerald-500)":"transparent",color:o==="REAL_HARDWARE"?"#05080f":"var(--text-muted)",fontSize:"0.74rem",fontWeight:800,cursor:"pointer",transition:"all 0.15s ease"},children:"REAL HARDWARE"})]})]}),u.jsxs("div",{style:{padding:"0.65rem 0.9rem",borderRadius:"8px",marginBottom:"1rem",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"0.5rem",background:o==="SIMULATION"?"rgba(56, 189, 248, 0.08)":S?"rgba(16, 185, 129, 0.12)":"rgba(244, 63, 94, 0.12)",border:`1px solid ${o==="SIMULATION"?"rgba(56, 189, 248, 0.3)":S?"rgba(16, 185, 129, 0.4)":"rgba(244, 63, 94, 0.4)"}`},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.55rem"},children:[o==="SIMULATION"?u.jsx(ho,{size:16,color:"var(--sky-400)"}):S?u.jsx(Ov,{size:16,color:"var(--emerald-400)"}):u.jsx(Vv,{size:16,color:"var(--rose-400)"}),u.jsxs("div",{children:[u.jsx("div",{style:{fontSize:"0.82rem",fontWeight:800,color:o==="SIMULATION"?"var(--sky-400)":S?"var(--emerald-400)":"var(--rose-400)"},children:o==="SIMULATION"?"MODE: SIMULATION (Safe Test Sandbox)":S?`ROBOT: CONNECTED via ${r.transport}`:"ROBOT: DISCONNECTED"}),u.jsx("div",{style:{fontSize:"0.72rem",color:"var(--text-muted)"},children:o==="SIMULATION"?"Dynamic physics model active. No physical actuators or liquid pressurized.":S?`Hardware: ${r.deviceName||zt.BLE.DEVICE_NAME} · Ping: ${r.pingMs!=null?`${r.pingMs}ms`:"<10ms"}`:"Physical ESP32 unreachable. Telemetry values set to offline; fake numbers blocked."})]})]}),u.jsx("span",{style:{fontSize:"0.7rem",padding:"0.2rem 0.6rem",borderRadius:"6px",fontWeight:700,background:"rgba(0,0,0,0.3)",color:o==="SIMULATION"?"var(--sky-400)":S?"var(--emerald-400)":"var(--rose-400)"},children:o==="SIMULATION"?"SIMULATION":S?"LIVE ESP32":"HARDWARE OFFLINE"})]}),u.jsxs("div",{style:{display:"flex",gap:"0.5rem",marginBottom:"1rem",background:"rgba(0, 0, 0, 0.25)",padding:"0.3rem",borderRadius:"10px",border:"1px solid var(--border-subtle)",maxWidth:"380px"},children:[u.jsxs("button",{type:"button",onClick:()=>i("wifi"),style:{flex:1,padding:"0.45rem 0.75rem",borderRadius:"7px",border:"none",background:n==="wifi"?"var(--emerald-500)":"transparent",color:n==="wifi"?"#05080f":"var(--text-muted)",fontWeight:700,fontSize:"0.78rem",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"0.45rem",transition:"all 0.15s ease"},children:[u.jsx(is,{size:14}),"Wi-Fi (Primary)"]}),u.jsxs("button",{type:"button",onClick:()=>i("bluetooth"),style:{flex:1,padding:"0.45rem 0.75rem",borderRadius:"7px",border:"none",background:n==="bluetooth"?"var(--emerald-500)":"transparent",color:n==="bluetooth"?"#05080f":"var(--text-muted)",fontWeight:700,fontSize:"0.78rem",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"0.45rem",transition:"all 0.15s ease"},children:[u.jsx(td,{size:14}),"Bluetooth BLE (Optional)"]})]}),n==="wifi"&&u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.85rem"},children:u.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.02)",border:"1px solid rgba(255, 255, 255, 0.08)",borderRadius:"10px",padding:"0.85rem"},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.75rem",flexWrap:"wrap",gap:"0.5rem"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem"},children:[u.jsx(is,{size:16,color:"var(--emerald-400)"}),u.jsx("span",{style:{fontSize:"0.85rem",fontWeight:700,color:"#fff"},children:"Wi-Fi Connection"})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem"},children:[u.jsx("span",{style:{fontSize:"0.72rem",color:"var(--text-muted)"},children:"Status:"}),u.jsx("span",{style:{fontSize:"0.72rem",fontWeight:800,padding:"0.2rem 0.6rem",borderRadius:"6px",background:O==="CONNECTED"?"rgba(16, 185, 129, 0.2)":O==="RECONNECTING"?"rgba(234, 179, 8, 0.2)":"rgba(244, 63, 94, 0.2)",color:O==="CONNECTED"?"var(--emerald-400)":O==="RECONNECTING"?"var(--amber-400)":"var(--rose-400)",border:`1px solid ${O==="CONNECTED"?"rgba(16, 185, 129, 0.4)":O==="RECONNECTING"?"rgba(234, 179, 8, 0.4)":"rgba(244, 63, 94, 0.4)"}`},children:O})]})]}),u.jsxs("div",{style:{display:"flex",gap:"0.75rem",alignItems:"flex-end",flexWrap:"wrap",marginBottom:"0.75rem"},children:[u.jsxs("div",{style:{flex:"2 1 200px"},children:[u.jsx("label",{style:{fontSize:"0.72rem",color:"var(--text-dim)",fontWeight:600,display:"block",marginBottom:"0.3rem"},children:"Robot IP / Hostname"}),u.jsx("input",{type:"text",value:l,onChange:U=>c(U.target.value),placeholder:"192.168.4.1 or agriguard.local",style:{width:"100%",background:"rgba(255, 255, 255, 0.05)",border:"1px solid rgba(255, 255, 255, 0.15)",borderRadius:"8px",color:"#fff",padding:"0.55rem 0.75rem",fontSize:"0.85rem",fontFamily:"monospace",outline:"none",boxSizing:"border-box"}})]}),u.jsxs("div",{style:{flex:"1 1 90px",maxWidth:"120px"},children:[u.jsx("label",{style:{fontSize:"0.72rem",color:"var(--text-dim)",fontWeight:600,display:"block",marginBottom:"0.3rem"},children:"Port"}),u.jsx("input",{type:"number",value:f,onChange:U=>p(U.target.value),min:1,max:65535,style:{width:"100%",background:"rgba(255, 255, 255, 0.05)",border:"1px solid rgba(255, 255, 255, 0.15)",borderRadius:"8px",color:"#fff",padding:"0.55rem 0.75rem",fontSize:"0.85rem",fontFamily:"monospace",outline:"none",boxSizing:"border-box"}})]}),u.jsxs("div",{style:{display:"flex",gap:"0.45rem",flexWrap:"wrap"},children:[u.jsxs("button",{type:"button",onClick:v,disabled:b,className:"btn btn-primary",style:{height:"38px",padding:"0 1rem",fontSize:"0.78rem",fontWeight:700,display:"flex",alignItems:"center",gap:"0.4rem",cursor:"pointer"},children:[b?u.jsx(u0,{size:13,style:{animation:"spin 1s linear infinite"}}):u.jsx(is,{size:13}),"CONNECT"]}),u.jsxs("button",{type:"button",onClick:A,disabled:b||r.state!=="CONNECTED",className:"btn btn-outline",style:{height:"38px",padding:"0 0.85rem",fontSize:"0.78rem",fontWeight:700,display:"flex",alignItems:"center",gap:"0.35rem",color:"var(--rose-400)",borderColor:"rgba(244, 63, 94, 0.35)",cursor:r.state==="CONNECTED"?"pointer":"default",opacity:r.state==="CONNECTED"?1:.5},children:[u.jsx(d0,{size:13}),"DISCONNECT"]}),u.jsxs("button",{type:"button",onClick:R,disabled:b,className:"btn btn-outline",style:{height:"38px",padding:"0 0.85rem",fontSize:"0.78rem",fontWeight:700,display:"flex",alignItems:"center",gap:"0.35rem",color:"var(--sky-400)",borderColor:"rgba(56, 189, 248, 0.35)",cursor:"pointer"},children:[u.jsx(Xs,{size:13,className:T?"spin":""}),"RECONNECT"]})]})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem",flexWrap:"wrap"},children:[u.jsx("span",{style:{fontSize:"0.7rem",color:"var(--text-dim)",fontWeight:600},children:"Discovery Presets:"}),[{label:"SoftAP Default (192.168.4.1)",ip:zt.WIFI.DEFAULT_IP},{label:"mDNS (agriguard.local)",ip:zt.WIFI.DEFAULT_HOSTNAME},{label:"LAN Hotspot (192.168.1.100)",ip:"192.168.1.100"}].map(U=>u.jsx("button",{type:"button",onClick:()=>c(U.ip),style:{padding:"0.2rem 0.55rem",borderRadius:"6px",background:"rgba(255, 255, 255, 0.05)",border:"1px solid rgba(255, 255, 255, 0.1)",color:"var(--text-muted)",fontSize:"0.68rem",cursor:"pointer",fontWeight:600},children:U.label},U.label))]})]})}),n==="bluetooth"&&u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.85rem"},children:u.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.02)",border:"1px solid rgba(255, 255, 255, 0.08)",borderRadius:"10px",padding:"0.85rem",display:"flex",flexDirection:"column",gap:"0.75rem"},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"0.5rem"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.45rem"},children:[u.jsx(td,{size:16,color:"var(--emerald-400)"}),u.jsx("span",{style:{fontSize:"0.85rem",fontWeight:700,color:"#fff"},children:"Web Bluetooth (BLE GATT)"})]}),u.jsx("span",{style:{fontSize:"0.7rem",fontWeight:700,padding:"0.15rem 0.5rem",borderRadius:"6px",background:r.transport==="Bluetooth"&&r.state==="CONNECTED"?"rgba(16, 185, 129, 0.2)":"rgba(255, 255, 255, 0.05)",color:r.transport==="Bluetooth"&&r.state==="CONNECTED"?"var(--emerald-400)":"var(--text-muted)"},children:r.transport==="Bluetooth"&&r.state==="CONNECTED"?"CONNECTED":"DISCONNECTED"})]}),!x&&u.jsxs("div",{style:{padding:"0.6rem 0.8rem",borderRadius:"8px",background:"rgba(245, 158, 11, 0.1)",border:"1px solid rgba(245, 158, 11, 0.3)",color:"var(--amber-400)",fontSize:"0.74rem",display:"flex",alignItems:"center",gap:"0.5rem"},children:[u.jsx(Aa,{size:15,color:"var(--amber-400)",style:{flexShrink:0}}),u.jsx("span",{children:"Bluetooth not supported in this browser. Please use Chrome, Edge, or Opera on desktop or Android."})]}),!h&&x&&u.jsxs("div",{style:{padding:"0.6rem 0.8rem",borderRadius:"8px",background:"rgba(244, 63, 94, 0.1)",border:"1px solid rgba(244, 63, 94, 0.3)",color:"var(--rose-400)",fontSize:"0.74rem",display:"flex",alignItems:"center",gap:"0.5rem"},children:[u.jsx(Aa,{size:15,color:"var(--rose-400)",style:{flexShrink:0}}),u.jsx("span",{children:"Web Bluetooth requires a secure context (HTTPS or http://localhost)."})]}),u.jsxs("p",{style:{fontSize:"0.74rem",color:"var(--text-muted)",margin:0},children:["Connect directly via GATT service ",u.jsxs("code",{style:{color:"var(--emerald-400)",fontSize:"0.7rem"},children:[zt.BLE.SERVICE_UUID.slice(0,18),"…"]}),". User permission dialog will open upon clicking below."]}),u.jsxs("div",{style:{display:"flex",gap:"0.5rem",alignItems:"center",flexWrap:"wrap"},children:[u.jsxs("button",{type:"button",onClick:D,disabled:!x||b,className:"btn btn-primary",style:{height:"38px",padding:"0 1.25rem",fontSize:"0.78rem",fontWeight:800,display:"flex",alignItems:"center",gap:"0.45rem",cursor:x?"pointer":"not-allowed",opacity:x?1:.6},children:[b?u.jsx(u0,{size:13,style:{animation:"spin 1s linear infinite"}}):u.jsx(td,{size:14}),"CONNECT BLUETOOTH"]}),r.transport==="Bluetooth"&&r.state==="CONNECTED"&&u.jsxs("button",{type:"button",onClick:A,className:"btn btn-outline",style:{height:"38px",padding:"0 0.85rem",fontSize:"0.78rem",fontWeight:700,color:"var(--rose-400)",borderColor:"rgba(244, 63, 94, 0.35)",cursor:"pointer"},children:[u.jsx(d0,{size:13}),"DISCONNECT BLE"]})]})]})}),g&&u.jsxs("div",{style:{marginTop:"0.85rem",padding:"0.55rem 0.85rem",borderRadius:"8px",background:S?"rgba(16, 185, 129, 0.1)":"rgba(56, 189, 248, 0.08)",border:`1px solid ${S?"rgba(16, 185, 129, 0.3)":"rgba(56, 189, 248, 0.2)"}`,color:S?"var(--emerald-400)":"var(--text-main)",fontSize:"0.75rem",fontWeight:600,display:"flex",alignItems:"center",gap:"0.5rem"},children:[u.jsx(k1,{size:14,color:"var(--sky-400)",style:{flexShrink:0}}),u.jsx("span",{children:g})]}),u.jsxs("div",{style:{marginTop:"1rem",background:"rgba(0, 0, 0, 0.25)",border:"1px solid var(--border-subtle)",borderRadius:"10px",overflow:"hidden"},children:[u.jsxs("button",{type:"button",onClick:()=>E(!_),style:{width:"100%",padding:"0.65rem 0.9rem",background:"transparent",border:"none",display:"flex",alignItems:"center",justifyContent:"space-between",color:"var(--text-muted)",cursor:"pointer",fontSize:"0.75rem",fontWeight:700},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.45rem"},children:[u.jsx(j1,{size:14,color:"var(--emerald-400)"}),u.jsx("span",{children:"Official 8-Step Robot Startup Procedure"})]}),_?u.jsx(L1,{size:14}):u.jsx(D1,{size:14})]}),_&&u.jsx("div",{style:{padding:"0.5rem 0.9rem 0.85rem 0.9rem",borderTop:"1px solid rgba(255, 255, 255, 0.05)"},children:u.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"0.5rem",fontSize:"0.72rem",color:"var(--text-secondary)"},children:[{step:"Step 1",title:"Power on robot",desc:"Engage master 12V LiPo battery switch and ensure physical E-Stop is released."},{step:"Step 2",title:"ESP32 starts Wi-Fi/BLE",desc:`AP SSID "${zt.WIFI.AP_SSID}" broadcast begins within 2 seconds.`},{step:"Step 3",title:"Connect to robot Wi-Fi",desc:`Connect laptop to "${zt.WIFI.AP_SSID}" (Pass: ${zt.WIFI.AP_PASSWORD}).`},{step:"Step 4",title:"Open AgriGuard",desc:"Open AgriGuard dashboard in browser (http://localhost:8000 or IP)."},{step:"Step 5",title:"Select REAL HARDWARE",desc:'Click "REAL HARDWARE" mode toggle button above.'},{step:"Step 6",title:"Connect Wi-Fi or BLE",desc:'Click "CONNECT" for 192.168.4.1 or "CONNECT BLUETOOTH".'},{step:"Step 7",title:"Verify sensor telemetry",desc:"Confirm Ultrasonic (L/C/R), Soil Moisture, DHT22, and MPU6050 are live."},{step:"Step 8",title:"Test STOP",desc:"Verify emergency STOP button safely halts all actuators."}].map(U=>u.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.02)",padding:"0.45rem 0.6rem",borderRadius:"6px",border:"1px solid rgba(255, 255, 255, 0.04)"},children:[u.jsxs("div",{style:{color:"var(--emerald-400)",fontWeight:800,fontSize:"0.68rem",marginBottom:"0.1rem"},children:[U.step,": ",U.title]}),u.jsx("div",{style:{fontSize:"0.68rem",color:"var(--text-muted)"},children:U.desc})]},U.step))})})]})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wp="186",to={ROTATE:0,DOLLY:1,PAN:2},Ys={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pM=0,f0=1,mM=2,oc=1,jv=2,Yo=3,cs=0,In=1,Ci=2,Qi=0,sa=1,Lh=2,p0=3,m0=4,gM=5,Ns=100,xM=101,vM=102,_M=103,yM=104,SM=200,MM=201,EM=202,wM=203,Xv=204,Yv=205,bM=206,TM=207,AM=208,CM=209,RM=210,PM=211,NM=212,DM=213,LM=214,Ih=0,Uh=1,Oh=2,Ca=3,Fh=4,kh=5,zh=6,Bh=7,$v=0,IM=1,UM=2,Li=0,qv=1,Kv=2,Zv=3,Jv=4,Qv=5,e_=6,t_=7,n_=300,us=301,fo=302,nd=303,id=304,uu=306,Hh=1e3,Zi=1001,Gh=1002,sn=1003,OM=1004,Sl=1005,fn=1006,rd=1007,Qr=1008,zn=1009,i_=1010,r_=1011,Ra=1012,bp=1013,Ui=1014,Ri=1015,Oi=1016,Tp=1017,Ap=1018,Pa=1020,s_=35902,o_=35899,a_=1021,l_=1022,pi=1023,sr=1026,es=1027,c_=1028,Cp=1029,ds=1030,Rp=1031,Pp=1033,ac=33776,lc=33777,cc=33778,uc=33779,Vh=35840,Wh=35841,jh=35842,Xh=35843,Yh=36196,$h=37492,qh=37496,Kh=37488,Zh=37489,Fc=37490,Jh=37491,Qh=37808,ef=37809,tf=37810,nf=37811,rf=37812,sf=37813,of=37814,af=37815,lf=37816,cf=37817,uf=37818,df=37819,hf=37820,ff=37821,pf=36492,mf=36494,gf=36495,xf=36283,vf=36284,kc=36285,_f=36286,FM=3200,yf=0,kM=1,Sr="",Zn="srgb",zc="srgb-linear",Bc="linear",Mt="srgb",sd=7680,zM=519,BM=512,HM=513,GM=514,Np=515,VM=516,WM=517,Dp=518,jM=519,XM=35044,g0="300 es",Pi=2e3,Na=2001;function YM(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Hc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function $M(){const t=Hc("canvas");return t.style.display="block",t}const x0={};function v0(...t){const e="THREE."+t.shift();console.log(e,...t)}function u_(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function je(...t){t=u_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function gt(...t){t=u_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function no(...t){const e=t.join(" ");e in x0||(x0[e]=!0,je(...t))}function qM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const KM={[Ih]:Uh,[Oh]:zh,[Fh]:Bh,[Ca]:kh,[Uh]:Ih,[zh]:Oh,[Bh]:Fh,[kh]:Ca};class zr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _0=1234567;const oa=Math.PI/180,Da=180/Math.PI;function vo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(un[t&255]+un[t>>8&255]+un[t>>16&255]+un[t>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[n&63|128]+un[n>>8&255]+"-"+un[n>>16&255]+un[n>>24&255]+un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]).toLowerCase()}function et(t,e,n){return Math.max(e,Math.min(n,t))}function Lp(t,e){return(t%e+e)%e}function ZM(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function JM(t,e,n){return t!==e?(n-t)/(e-t):0}function aa(t,e,n){return(1-n)*t+n*e}function QM(t,e,n,i){return aa(t,e,1-Math.exp(-n*i))}function eE(t,e=1){return e-Math.abs(Lp(t,e*2)-e)}function tE(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function nE(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function iE(t,e){return t+Math.floor(Math.random()*(e-t+1))}function rE(t,e){return t+Math.random()*(e-t)}function sE(t){return t*(.5-Math.random())}function oE(t){t!==void 0&&(_0=t);let e=_0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function aE(t){return t*oa}function lE(t){return t*Da}function cE(t){return t>0&&Number.isInteger(t)&&2**Math.round(Math.log2(t))===t}function uE(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function dE(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function hE(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),f=o((e+i)/2),p=s((e-i)/2),d=o((e-i)/2),m=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":t.set(a*f,l*p,l*d,a*c);break;case"YZY":t.set(l*d,a*f,l*p,a*c);break;case"ZXZ":t.set(l*p,l*d,a*f,a*c);break;case"XZX":t.set(a*f,l*g,l*m,a*c);break;case"YXY":t.set(l*m,a*f,l*g,a*c);break;case"ZYZ":t.set(l*g,l*m,a*f,a*c);break;default:je("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ds(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function mn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const $o={DEG2RAD:oa,RAD2DEG:Da,generateUUID:vo,clamp:et,euclideanModulo:Lp,mapLinear:ZM,inverseLerp:JM,lerp:aa,damp:QM,pingpong:eE,smoothstep:tE,smootherstep:nE,randInt:iE,randFloat:rE,randFloatSpread:sE,seededRandom:oE,degToRad:aE,radToDeg:lE,isPowerOfTwo:cE,ceilPowerOfTwo:uE,floorPowerOfTwo:dE,setQuaternionFromProperEuler:hE,normalize:mn,denormalize:Ds},Wp=class Wp{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Wp.prototype.isVector2=!0;let Re=Wp;class Ir{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],p=i[r+3],d=s[o+0],m=s[o+1],g=s[o+2],M=s[o+3];if(p!==M||l!==d||c!==m||f!==g){let x=l*d+c*m+f*g+p*M;x<0&&(d=-d,m=-m,g=-g,M=-M,x=-x);let h=1-a;if(x<.9995){const _=Math.acos(x),E=Math.sin(_);h=Math.sin(h*_)/E,a=Math.sin(a*_)/E,l=l*h+d*a,c=c*h+m*a,f=f*h+g*a,p=p*h+M*a}else{l=l*h+d*a,c=c*h+m*a,f=f*h+g*a,p=p*h+M*a;const _=1/Math.sqrt(l*l+c*c+f*f+p*p);l*=_,c*=_,f*=_,p*=_}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],p=s[o],d=s[o+1],m=s[o+2],g=s[o+3];return e[n]=a*g+f*p+l*m-c*d,e[n+1]=l*g+f*d+c*p-a*m,e[n+2]=c*g+f*m+a*d-l*p,e[n+3]=f*g-a*p-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),p=a(s/2),d=l(i/2),m=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*f*p+c*m*g,this._y=c*m*p-d*f*g,this._z=c*f*g+d*m*p,this._w=c*f*p-d*m*g;break;case"YXZ":this._x=d*f*p+c*m*g,this._y=c*m*p-d*f*g,this._z=c*f*g-d*m*p,this._w=c*f*p+d*m*g;break;case"ZXY":this._x=d*f*p-c*m*g,this._y=c*m*p+d*f*g,this._z=c*f*g+d*m*p,this._w=c*f*p-d*m*g;break;case"ZYX":this._x=d*f*p-c*m*g,this._y=c*m*p+d*f*g,this._z=c*f*g-d*m*p,this._w=c*f*p+d*m*g;break;case"YZX":this._x=d*f*p+c*m*g,this._y=c*m*p+d*f*g,this._z=c*f*g-d*m*p,this._w=c*f*p-d*m*g;break;case"XZY":this._x=d*f*p-c*m*g,this._y=c*m*p-d*f*g,this._z=c*f*g+d*m*p,this._w=c*f*p+d*m*g;break;default:je("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],p=n[10],d=i+a+p;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>p){const m=2*Math.sqrt(1+i-a-p);this._w=(f-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>p){const m=2*Math.sqrt(1+a-i-p);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+p-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const jp=class jp{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(y0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(y0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),p=2*(s*i-o*n);return this.x=n+l*c+o*p-a*f,this.y=i+l*f+a*c-s*p,this.z=r+l*p+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this.z=et(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this.z=et(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return od.copy(this).projectOnVector(e),this.sub(od)}reflect(e){return this.sub(od.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};jp.prototype.isVector3=!0;let N=jp;const od=new N,y0=new Ir,Xp=class Xp{constructor(e,n,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],p=i[7],d=i[2],m=i[5],g=i[8],M=r[0],x=r[3],h=r[6],_=r[1],E=r[4],S=r[7],b=r[2],T=r[5],C=r[8];return s[0]=o*M+a*_+l*b,s[3]=o*x+a*E+l*T,s[6]=o*h+a*S+l*C,s[1]=c*M+f*_+p*b,s[4]=c*x+f*E+p*T,s[7]=c*h+f*S+p*C,s[2]=d*M+m*_+g*b,s[5]=d*x+m*E+g*T,s[8]=d*h+m*S+g*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],p=f*o-a*c,d=a*l-f*s,m=c*s-o*l,g=n*p+i*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return e[0]=p*M,e[1]=(r*c-f*i)*M,e[2]=(a*i-r*o)*M,e[3]=d*M,e[4]=(f*n-r*l)*M,e[5]=(r*s-a*n)*M,e[6]=m*M,e[7]=(i*l-c*n)*M,e[8]=(o*n-i*s)*M,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return no("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ad.makeScale(e,n)),this}rotate(e){return no("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ad.makeRotation(-e)),this}translate(e,n){return no("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ad.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Xp.prototype.isMatrix3=!0;let Ke=Xp;const ad=new Ke,S0=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),M0=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fE(){const t={enabled:!0,workingColorSpace:zc,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Mt&&(r.r=er(r.r),r.g=er(r.g),r.b=er(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Mt&&(r.r=io(r.r),r.g=io(r.g),r.b=io(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Sr?Bc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return no("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return no("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[zc]:{primaries:e,whitePoint:i,transfer:Bc,toXYZ:S0,fromXYZ:M0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Zn},outputColorSpaceConfig:{drawingBufferColorSpace:Zn}},[Zn]:{primaries:e,whitePoint:i,transfer:Mt,toXYZ:S0,fromXYZ:M0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Zn}}}),t}const ct=fE();function er(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function io(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let vs;class pE{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{vs===void 0&&(vs=Hc("canvas")),vs.width=e.width,vs.height=e.height;const r=vs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=vs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Hc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=er(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(er(n[i]/255)*255):n[i]=er(n[i]);return{data:n,width:e.width,height:e.height}}else return je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mE=0;class Ip{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:mE++}),this.uuid=vo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ld(r[o].image)):s.push(ld(r[o]))}else s=ld(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function ld(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?pE.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(je("Texture: Unable to serialize Texture."),{})}let gE=0;const cd=new N;class yn extends zr{constructor(e=yn.DEFAULT_IMAGE,n=yn.DEFAULT_MAPPING,i=Zi,r=Zi,s=fn,o=Qr,a=pi,l=zn,c=yn.DEFAULT_ANISOTROPY,f=Sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gE++}),this.uuid=vo(),this.name="",this.source=new Ip(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(cd).x}get height(){return this.source.getSize(cd).y}get depth(){return this.source.getSize(cd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){je(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){je(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==n_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hh:e.x=e.x-Math.floor(e.x);break;case Zi:e.x=e.x<0?0:1;break;case Gh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hh:e.y=e.y-Math.floor(e.y);break;case Zi:e.y=e.y<0?0:1;break;case Gh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=n_;yn.DEFAULT_ANISOTROPY=1;const Yp=class Yp{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],p=l[8],d=l[1],m=l[5],g=l[9],M=l[2],x=l[6],h=l[10];if(Math.abs(f-d)<.01&&Math.abs(p-M)<.01&&Math.abs(g-x)<.01){if(Math.abs(f+d)<.1&&Math.abs(p+M)<.1&&Math.abs(g+x)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(c+1)/2,S=(m+1)/2,b=(h+1)/2,T=(f+d)/4,C=(p+M)/4,v=(g+x)/4;return E>S&&E>b?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=T/i,s=C/i):S>b?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=v/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=C/s,r=v/s),this.set(i,r,s,n),this}let _=Math.sqrt((x-g)*(x-g)+(p-M)*(p-M)+(d-f)*(d-f));return Math.abs(_)<.001&&(_=1),this.x=(x-g)/_,this.y=(p-M)/_,this.z=(d-f)/_,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this.z=et(this.z,e.z,n.z),this.w=et(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this.z=et(this.z,e,n),this.w=et(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Yp.prototype.isVector4=!0;let Ot=Yp;class xE extends zr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Ot(0,0,e,n),this.scissorTest=!1,this.viewport=new Ot(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new yn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Ip(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xi extends xE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class d_ extends yn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vE extends yn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Xc=class Xc{constructor(e,n,i,r,s,o,a,l,c,f,p,d,m,g,M,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,p,d,m,g,M,x)}set(e,n,i,r,s,o,a,l,c,f,p,d,m,g,M,x){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=f,h[10]=p,h[14]=d,h[3]=m,h[7]=g,h[11]=M,h[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/_s.setFromMatrixColumn(e,0).length(),s=1/_s.setFromMatrixColumn(e,1).length(),o=1/_s.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const d=o*f,m=o*p,g=a*f,M=a*p;n[0]=l*f,n[4]=-l*p,n[8]=c,n[1]=m+g*c,n[5]=d-M*c,n[9]=-a*l,n[2]=M-d*c,n[6]=g+m*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*f,m=l*p,g=c*f,M=c*p;n[0]=d+M*a,n[4]=g*a-m,n[8]=o*c,n[1]=o*p,n[5]=o*f,n[9]=-a,n[2]=m*a-g,n[6]=M+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*f,m=l*p,g=c*f,M=c*p;n[0]=d-M*a,n[4]=-o*p,n[8]=g+m*a,n[1]=m+g*a,n[5]=o*f,n[9]=M-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*f,m=o*p,g=a*f,M=a*p;n[0]=l*f,n[4]=g*c-m,n[8]=d*c+M,n[1]=l*p,n[5]=M*c+d,n[9]=m*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*c,g=a*l,M=a*c;n[0]=l*f,n[4]=M-d*p,n[8]=g*p+m,n[1]=p,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=m*p+g,n[10]=d-M*p}else if(e.order==="XZY"){const d=o*l,m=o*c,g=a*l,M=a*c;n[0]=l*f,n[4]=-p,n[8]=c*f,n[1]=d*p+M,n[5]=o*f,n[9]=m*p-g,n[2]=g*p-m,n[6]=a*f,n[10]=M*p+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_E,e,yE)}lookAt(e,n,i){const r=this.elements;return Un.subVectors(e,n),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),hr.crossVectors(i,Un),hr.lengthSq()===0&&(Math.abs(i.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),hr.crossVectors(i,Un)),hr.normalize(),Ml.crossVectors(Un,hr),r[0]=hr.x,r[4]=Ml.x,r[8]=Un.x,r[1]=hr.y,r[5]=Ml.y,r[9]=Un.y,r[2]=hr.z,r[6]=Ml.z,r[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],p=i[5],d=i[9],m=i[13],g=i[2],M=i[6],x=i[10],h=i[14],_=i[3],E=i[7],S=i[11],b=i[15],T=r[0],C=r[4],v=r[8],A=r[12],R=r[1],D=r[5],O=r[9],U=r[13],L=r[2],V=r[6],ee=r[10],q=r[14],G=r[3],H=r[7],X=r[11],Q=r[15];return s[0]=o*T+a*R+l*L+c*G,s[4]=o*C+a*D+l*V+c*H,s[8]=o*v+a*O+l*ee+c*X,s[12]=o*A+a*U+l*q+c*Q,s[1]=f*T+p*R+d*L+m*G,s[5]=f*C+p*D+d*V+m*H,s[9]=f*v+p*O+d*ee+m*X,s[13]=f*A+p*U+d*q+m*Q,s[2]=g*T+M*R+x*L+h*G,s[6]=g*C+M*D+x*V+h*H,s[10]=g*v+M*O+x*ee+h*X,s[14]=g*A+M*U+x*q+h*Q,s[3]=_*T+E*R+S*L+b*G,s[7]=_*C+E*D+S*V+b*H,s[11]=_*v+E*O+S*ee+b*X,s[15]=_*A+E*U+S*q+b*Q,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],p=e[6],d=e[10],m=e[14],g=e[3],M=e[7],x=e[11],h=e[15],_=l*m-c*d,E=a*m-c*p,S=a*d-l*p,b=o*m-c*f,T=o*d-l*f,C=o*p-a*f;return n*(M*_-x*E+h*S)-i*(g*_-x*b+h*T)+r*(g*E-M*b+h*C)-s*(g*S-M*T+x*C)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],f=e[10];return n*(o*f-a*c)-i*(s*f-a*l)+r*(s*c-o*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],p=e[9],d=e[10],m=e[11],g=e[12],M=e[13],x=e[14],h=e[15],_=n*a-i*o,E=n*l-r*o,S=n*c-s*o,b=i*l-r*a,T=i*c-s*a,C=r*c-s*l,v=f*M-p*g,A=f*x-d*g,R=f*h-m*g,D=p*x-d*M,O=p*h-m*M,U=d*h-m*x,L=_*U-E*O+S*D+b*R-T*A+C*v;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/L;return e[0]=(a*U-l*O+c*D)*V,e[1]=(r*O-i*U-s*D)*V,e[2]=(M*C-x*T+h*b)*V,e[3]=(d*T-p*C-m*b)*V,e[4]=(l*R-o*U-c*A)*V,e[5]=(n*U-r*R+s*A)*V,e[6]=(x*S-g*C-h*E)*V,e[7]=(f*C-d*S+m*E)*V,e[8]=(o*O-a*R+c*v)*V,e[9]=(i*R-n*O-s*v)*V,e[10]=(g*T-M*S+h*_)*V,e[11]=(p*S-f*T-m*_)*V,e[12]=(a*A-o*D-l*v)*V,e[13]=(n*D-i*A+r*v)*V,e[14]=(M*E-g*b-x*_)*V,e[15]=(f*b-p*E+d*_)*V,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,p=a+a,d=s*c,m=s*f,g=s*p,M=o*f,x=o*p,h=a*p,_=l*c,E=l*f,S=l*p,b=i.x,T=i.y,C=i.z;return r[0]=(1-(M+h))*b,r[1]=(m+S)*b,r[2]=(g-E)*b,r[3]=0,r[4]=(m-S)*T,r[5]=(1-(d+h))*T,r[6]=(x+_)*T,r[7]=0,r[8]=(g+E)*C,r[9]=(x-_)*C,r[10]=(1-(d+M))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let o=_s.set(r[0],r[1],r[2]).length();const a=_s.set(r[4],r[5],r[6]).length(),l=_s.set(r[8],r[9],r[10]).length();s<0&&(o=-o),ai.copy(this);const c=1/o,f=1/a,p=1/l;return ai.elements[0]*=c,ai.elements[1]*=c,ai.elements[2]*=c,ai.elements[4]*=f,ai.elements[5]*=f,ai.elements[6]*=f,ai.elements[8]*=p,ai.elements[9]*=p,ai.elements[10]*=p,n.setFromRotationMatrix(ai),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=Pi,l=!1){const c=this.elements,f=2*s/(n-e),p=2*s/(i-r),d=(n+e)/(n-e),m=(i+r)/(i-r);let g,M;if(l)g=s/(o-s),M=o*s/(o-s);else if(a===Pi)g=-(o+s)/(o-s),M=-2*o*s/(o-s);else if(a===Na)g=-o/(o-s),M=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=p,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Pi,l=!1){const c=this.elements,f=2/(n-e),p=2/(i-r),d=-(n+e)/(n-e),m=-(i+r)/(i-r);let g,M;if(l)g=1/(o-s),M=o/(o-s);else if(a===Pi)g=-2/(o-s),M=-(o+s)/(o-s);else if(a===Na)g=-1/(o-s),M=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=p,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Xc.prototype.isMatrix4=!0;let Dt=Xc;const _s=new N,ai=new Dt,_E=new N(0,0,0),yE=new N(1,1,1),hr=new N,Ml=new N,Un=new N,E0=new Dt,w0=new Ir;class Ur{constructor(e=0,n=0,i=0,r=Ur.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],p=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-et(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:je("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return E0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(E0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return w0.setFromEuler(this),this.setFromQuaternion(w0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ur.DEFAULT_ORDER="XYZ";class h_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let SE=0;const b0=new N,ys=new Ir,Bi=new Dt,El=new N,Oo=new N,ME=new N,EE=new Ir,T0=new N(1,0,0),A0=new N(0,1,0),C0=new N(0,0,1),R0={type:"added"},wE={type:"removed"},Ss={type:"childadded",child:null},ud={type:"childremoved",child:null};class tn extends zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:SE++}),this.uuid=vo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const e=new N,n=new Ur,i=new Ir,r=new N(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Dt},normalMatrix:{value:new Ke}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new h_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ys.setFromAxisAngle(e,n),this.quaternion.multiply(ys),this}rotateOnWorldAxis(e,n){return ys.setFromAxisAngle(e,n),this.quaternion.premultiply(ys),this}rotateX(e){return this.rotateOnAxis(T0,e)}rotateY(e){return this.rotateOnAxis(A0,e)}rotateZ(e){return this.rotateOnAxis(C0,e)}translateOnAxis(e,n){return b0.copy(e).applyQuaternion(this.quaternion),this.position.add(b0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(T0,e)}translateY(e){return this.translateOnAxis(A0,e)}translateZ(e){return this.translateOnAxis(C0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?El.copy(e):El.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(Oo,El,this.up):Bi.lookAt(El,Oo,this.up),this.quaternion.setFromRotationMatrix(Bi),r&&(Bi.extractRotation(r.matrixWorld),ys.setFromRotationMatrix(Bi),this.quaternion.premultiply(ys.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(gt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(R0),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null):gt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(wE),ud.child=e,this.dispatchEvent(ud),ud.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(R0),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,e,ME),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,EE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),p=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),p.length>0&&(i.shapes=p),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}tn.DEFAULT_UP=new N(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class $i extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bE={type:"move"};class dd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const M of e.hand.values()){const x=n.getJointPose(M,i),h=this._getHandJoint(c,M);x!==null&&(h.matrix.fromArray(x.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=x.radius),h.visible=x!==null}const f=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],d=f.position.distanceTo(p.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new $i;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const f_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fr={h:0,s:0,l:0},wl={h:0,s:0,l:0};function hd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class nt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=ct.workingColorSpace){return this.r=e,this.g=n,this.b=i,ct.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=ct.workingColorSpace){if(e=Lp(e,1),n=et(n,0,1),i=et(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=hd(o,s,e+1/3),this.g=hd(o,s,e),this.b=hd(o,s,e-1/3)}return ct.colorSpaceToWorking(this,r),this}setStyle(e,n=Zn){function i(s){s!==void 0&&parseFloat(s)<1&&je("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:je("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Zn){const i=f_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=er(e.r),this.g=er(e.g),this.b=er(e.b),this}copyLinearToSRGB(e){return this.r=io(e.r),this.g=io(e.g),this.b=io(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zn){return ct.workingToColorSpace(dn.copy(this),e),Math.round(et(dn.r*255,0,255))*65536+Math.round(et(dn.g*255,0,255))*256+Math.round(et(dn.b*255,0,255))}getHexString(e=Zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ct.workingColorSpace){ct.workingToColorSpace(dn.copy(this),n);const i=dn.r,r=dn.g,s=dn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const p=o-a;switch(c=f<=.5?p/(o+a):p/(2-o-a),o){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=ct.workingColorSpace){return ct.workingToColorSpace(dn.copy(this),n),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=Zn){ct.workingToColorSpace(dn.copy(this),e);const n=dn.r,i=dn.g,r=dn.b;return e!==Zn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(fr),this.setHSL(fr.h+e,fr.s+n,fr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(fr),e.getHSL(wl);const i=aa(fr.h,wl.h,n),r=aa(fr.s,wl.s,n),s=aa(fr.l,wl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new nt;nt.NAMES=f_;class TE extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ur,this.environmentIntensity=1,this.environmentRotation=new Ur,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const li=new N,Hi=new N,fd=new N,Gi=new N,Ms=new N,Es=new N,P0=new N,pd=new N,md=new N,gd=new N,xd=new Ot,vd=new Ot,_d=new Ot;class fi{constructor(e=new N,n=new N,i=new N){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),li.subVectors(e,n),r.cross(li);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){li.subVectors(r,n),Hi.subVectors(i,n),fd.subVectors(e,n);const o=li.dot(li),a=li.dot(Hi),l=li.dot(fd),c=Hi.dot(Hi),f=Hi.dot(fd),p=o*c-a*a;if(p===0)return s.set(0,0,0),null;const d=1/p,m=(c*l-a*f)*d,g=(o*f-a*l)*d;return s.set(1-m-g,g,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Gi.x),l.addScaledVector(o,Gi.y),l.addScaledVector(a,Gi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return xd.setScalar(0),vd.setScalar(0),_d.setScalar(0),xd.fromBufferAttribute(e,n),vd.fromBufferAttribute(e,i),_d.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(xd,s.x),o.addScaledVector(vd,s.y),o.addScaledVector(_d,s.z),o}static isFrontFacing(e,n,i,r){return li.subVectors(i,n),Hi.subVectors(e,n),li.cross(Hi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),li.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return fi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return fi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ms.subVectors(r,i),Es.subVectors(s,i),pd.subVectors(e,i);const l=Ms.dot(pd),c=Es.dot(pd);if(l<=0&&c<=0)return n.copy(i);md.subVectors(e,r);const f=Ms.dot(md),p=Es.dot(md);if(f>=0&&p<=f)return n.copy(r);const d=l*p-f*c;if(d<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Ms,o);gd.subVectors(e,s);const m=Ms.dot(gd),g=Es.dot(gd);if(g>=0&&m<=g)return n.copy(s);const M=m*c-l*g;if(M<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Es,a);const x=f*g-m*p;if(x<=0&&p-f>=0&&m-g>=0)return P0.subVectors(s,r),a=(p-f)/(p-f+(m-g)),n.copy(r).addScaledVector(P0,a);const h=1/(x+M+d);return o=M*h,a=d*h,n.copy(i).addScaledVector(Ms,o).addScaledVector(Es,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class za{constructor(e=new N(1/0,1/0,1/0),n=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ci.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ci.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ci.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ci):ci.fromBufferAttribute(s,o),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),bl.copy(i.boundingBox)),bl.applyMatrix4(e.matrixWorld),this.union(bl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fo),Tl.subVectors(this.max,Fo),ws.subVectors(e.a,Fo),bs.subVectors(e.b,Fo),Ts.subVectors(e.c,Fo),pr.subVectors(bs,ws),mr.subVectors(Ts,bs),Gr.subVectors(ws,Ts);let n=[0,-pr.z,pr.y,0,-mr.z,mr.y,0,-Gr.z,Gr.y,pr.z,0,-pr.x,mr.z,0,-mr.x,Gr.z,0,-Gr.x,-pr.y,pr.x,0,-mr.y,mr.x,0,-Gr.y,Gr.x,0];return!yd(n,ws,bs,Ts,Tl)||(n=[1,0,0,0,1,0,0,0,1],!yd(n,ws,bs,Ts,Tl))?!1:(Al.crossVectors(pr,mr),n=[Al.x,Al.y,Al.z],yd(n,ws,bs,Ts,Tl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Vi=[new N,new N,new N,new N,new N,new N,new N,new N],ci=new N,bl=new za,ws=new N,bs=new N,Ts=new N,pr=new N,mr=new N,Gr=new N,Fo=new N,Tl=new N,Al=new N,Vr=new N;function yd(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Vr.fromArray(t,s);const a=r.x*Math.abs(Vr.x)+r.y*Math.abs(Vr.y)+r.z*Math.abs(Vr.z),l=e.dot(Vr),c=n.dot(Vr),f=i.dot(Vr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const Gt=new N,Cl=new Re;let AE=0;class Ii extends zr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:AE++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=XM,this.updateRanges=[],this.gpuType=Ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Cl.fromBufferAttribute(this,n),Cl.applyMatrix3(e),this.setXY(n,Cl.x,Cl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Gt.fromBufferAttribute(this,n),Gt.applyMatrix3(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Gt.fromBufferAttribute(this,n),Gt.applyMatrix4(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Gt.fromBufferAttribute(this,n),Gt.applyNormalMatrix(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Gt.fromBufferAttribute(this,n),Gt.transformDirection(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ds(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=mn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ds(n,this.array)),n}setX(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ds(n,this.array)),n}setY(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ds(n,this.array)),n}setZ(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ds(n,this.array)),n}setW(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=mn(n,this.array),i=mn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=mn(n,this.array),i=mn(i,this.array),r=mn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=mn(n,this.array),i=mn(i,this.array),r=mn(r,this.array),s=mn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class p_ extends Ii{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class m_ extends Ii{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class bt extends Ii{constructor(e,n,i){super(new Float32Array(e),n,i)}}const CE=new za,ko=new N,Sd=new N;class Ba{constructor(e=new N,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):CE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ko.subVectors(e,this.center);const n=ko.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ko,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ko.copy(e.center).add(Sd)),this.expandByPoint(ko.copy(e.center).sub(Sd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let RE=0;const Kn=new Dt,Md=new tn,As=new N,On=new za,zo=new za,Jt=new N;class Kt extends zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:RE++}),this.uuid=vo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(YM(e)?m_:p_)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,n,i){return Kn.makeTranslation(e,n,i),this.applyMatrix4(Kn),this}scale(e,n,i){return Kn.makeScale(e,n,i),this.applyMatrix4(Kn),this}lookAt(e){return Md.lookAt(e),Md.updateMatrix(),this.applyMatrix4(Md.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new bt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new za);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];On.setFromBufferAttribute(s),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ba);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(On.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];zo.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors(On.min,zo.min),On.expandByPoint(Jt),Jt.addVectors(On.max,zo.max),On.expandByPoint(Jt)):(On.expandByPoint(zo.min),On.expandByPoint(zo.max))}On.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Jt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Jt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Jt.fromBufferAttribute(a,c),l&&(As.fromBufferAttribute(e,c),Jt.add(As)),r=Math.max(r,i.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Ii(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let v=0;v<i.count;v++)a[v]=new N,l[v]=new N;const c=new N,f=new N,p=new N,d=new Re,m=new Re,g=new Re,M=new N,x=new N;function h(v,A,R){c.fromBufferAttribute(i,v),f.fromBufferAttribute(i,A),p.fromBufferAttribute(i,R),d.fromBufferAttribute(s,v),m.fromBufferAttribute(s,A),g.fromBufferAttribute(s,R),f.sub(c),p.sub(c),m.sub(d),g.sub(d);const D=1/(m.x*g.y-g.x*m.y);isFinite(D)&&(M.copy(f).multiplyScalar(g.y).addScaledVector(p,-m.y).multiplyScalar(D),x.copy(p).multiplyScalar(m.x).addScaledVector(f,-g.x).multiplyScalar(D),a[v].add(M),a[A].add(M),a[R].add(M),l[v].add(x),l[A].add(x),l[R].add(x))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let v=0,A=_.length;v<A;++v){const R=_[v],D=R.start,O=R.count;for(let U=D,L=D+O;U<L;U+=3)h(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const E=new N,S=new N,b=new N,T=new N;function C(v){b.fromBufferAttribute(r,v),T.copy(b);const A=a[v];E.copy(A),E.sub(b.multiplyScalar(b.dot(A))).normalize(),S.crossVectors(T,A);const D=S.dot(l[v])<0?-1:1;o.setXYZW(v,E.x,E.y,E.z,D)}for(let v=0,A=_.length;v<A;++v){const R=_[v],D=R.start,O=R.count;for(let U=D,L=D+O;U<L;U+=3)C(e.getX(U+0)),C(e.getX(U+1)),C(e.getX(U+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Ii(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,c=new N,f=new N,p=new N;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),M=e.getX(d+1),x=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,M),o.fromBufferAttribute(n,x),f.subVectors(o,s),p.subVectors(r,s),f.cross(p),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,x),a.add(f),l.add(f),c.add(f),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(x,c.x,c.y,c.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),f.subVectors(o,s),p.subVectors(r,s),f.cross(p),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Jt.fromBufferAttribute(e,n),Jt.normalize(),e.setXYZ(n,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,p=a.normalized,d=new c.constructor(l.length*f);let m=0,g=0;for(let M=0,x=l.length;M<x;M++){a.isInterleavedBufferAttribute?m=l[M]*a.data.stride+a.offset:m=l[M]*f;for(let h=0;h<f;h++)d[g++]=c[m++]}return new Ii(d,f,p)}if(this.index===null)return je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Kt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,p=c.length;f<p;f++){const d=c[f],m=e(d,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let p=0,d=c.length;p<d;p++){const m=c[p];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],p=s[c];for(let d=0,m=p.length;d<m;d++)f.push(p[d].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ed=new N,PE=new N,NE=new Ke;class Yi{constructor(e=new N(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ed.subVectors(i,n).cross(PE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Ed),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||NE.getNormalMatrix(e),r=this.coplanarPoint(Ed).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let DE=0;class ps extends zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:DE++}),this.uuid=vo(),this.name="",this.type="Material",this.blending=sa,this.side=cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xv,this.blendDst=Yv,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=Ca,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sd,this.stencilZFail=sd,this.stencilZPass=sd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){je(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){je(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new nt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Yi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Re().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Re().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Wi=new N,wd=new N,Rl=new N,Pl=new N;class du{constructor(e=new N,n=new N(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Wi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Wi.copy(this.origin).addScaledVector(this.direction,n),Wi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){wd.copy(e).add(n).multiplyScalar(.5),Rl.copy(n).sub(e).normalize(),Pl.copy(this.origin).sub(wd);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Rl),a=Pl.dot(this.direction),l=-Pl.dot(Rl),c=Pl.lengthSq(),f=Math.abs(1-o*o);let p,d,m,g;if(f>0)if(p=o*l-a,d=o*a-l,g=s*f,p>=0)if(d>=-g)if(d<=g){const M=1/f;p*=M,d*=M,m=p*(p+o*d+2*a)+d*(o*p+d+2*l)+c}else d=s,p=Math.max(0,-(o*d+a)),m=-p*p+d*(d+2*l)+c;else d=-s,p=Math.max(0,-(o*d+a)),m=-p*p+d*(d+2*l)+c;else d<=-g?(p=Math.max(0,-(-o*s+a)),d=p>0?-s:Math.min(Math.max(-s,-l),s),m=-p*p+d*(d+2*l)+c):d<=g?(p=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(p=Math.max(0,-(o*s+a)),d=p>0?s:Math.min(Math.max(-s,-l),s),m=-p*p+d*(d+2*l)+c);else d=o>0?-s:s,p=Math.max(0,-(o*d+a)),m=-p*p+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(wd).addScaledVector(Rl,d),m}intersectSphere(e,n){if(e.radius<0)return null;Wi.subVectors(e.center,this.origin);const i=Wi.dot(this.direction),r=Wi.dot(Wi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),f>=0?(s=(e.min.y-d.y)*f,o=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,o=(e.min.y-d.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(e.min.z-d.z)*p,l=(e.max.z-d.z)*p):(a=(e.max.z-d.z)*p,l=(e.min.z-d.z)*p),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Wi)!==null}intersectTriangle(e,n,i,r,s){const o=this.origin,a=this.direction,l=a.x,c=a.y,f=a.z,p=e.x-o.x,d=e.y-o.y,m=e.z-o.z,g=n.x-o.x,M=n.y-o.y,x=n.z-o.z,h=i.x-o.x,_=i.y-o.y,E=i.z-o.z,S=Math.abs(l),b=Math.abs(c),T=Math.abs(f);let C,v,A,R,D,O,U,L,V,ee,q,G;if(S>=b&&S>=T?(A=l,O=p,V=g,G=h,l>=0?(C=c,v=f,R=d,D=m,U=M,L=x,ee=_,q=E):(C=f,v=c,R=m,D=d,U=x,L=M,ee=E,q=_)):b>=T?(A=c,O=d,V=M,G=_,c>=0?(C=f,v=l,R=m,D=p,U=x,L=g,ee=E,q=h):(C=l,v=f,R=p,D=m,U=g,L=x,ee=h,q=E)):(A=f,O=m,V=x,G=E,f>=0?(C=l,v=c,R=p,D=d,U=g,L=M,ee=h,q=_):(C=c,v=l,R=d,D=p,U=M,L=g,ee=_,q=h)),A===0)return null;const H=C/A,X=v/A,Q=1/A,se=R-H*O,ue=D-X*O,He=U-H*V,Ae=L-X*V,Ve=ee-H*G,Z=q-X*G,J=Ve*Ae-Z*He,pe=se*Z-ue*Ve,ke=He*ue-Ae*se;if(r){if(J<0||pe<0||ke<0)return null}else if((J<0||pe<0||ke<0)&&(J>0||pe>0||ke>0))return null;const me=J+pe+ke;if(me===0)return null;const Ie=Q*(J*O+pe*V+ke*G);return(me>0?Ie<0:Ie>0)?null:this.at(Ie/me,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qr extends ps{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ur,this.combine=$v,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const N0=new Dt,Wr=new du,Nl=new Ba,D0=new N,Dl=new N,Ll=new N,Il=new N,bd=new N,Ul=new N,L0=new N,Ol=new N;class ve extends tn{constructor(e=new Kt,n=new qr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ul.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],p=s[l];f!==0&&(bd.fromBufferAttribute(p,e),o?Ul.addScaledVector(bd,f):Ul.addScaledVector(bd.sub(n),f))}n.add(Ul)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Nl.copy(i.boundingSphere),Nl.applyMatrix4(s),Wr.copy(e.ray).recast(e.near),!(Nl.containsPoint(Wr.origin)===!1&&(Wr.intersectSphere(Nl,D0)===null||Wr.origin.distanceToSquared(D0)>(e.far-e.near)**2))&&(N0.copy(s).invert(),Wr.copy(e.ray).applyMatrix4(N0),!(i.boundingBox!==null&&Wr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Wr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,p=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,M=d.length;g<M;g++){const x=d[g],h=o[x.materialIndex],_=Math.max(x.start,m.start),E=Math.min(a.count,Math.min(x.start+x.count,m.start+m.count));for(let S=_,b=E;S<b;S+=3){const T=a.getX(S),C=a.getX(S+1),v=a.getX(S+2);r=Fl(this,h,e,i,c,f,p,T,C,v),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const g=Math.max(0,m.start),M=Math.min(a.count,m.start+m.count);for(let x=g,h=M;x<h;x+=3){const _=a.getX(x),E=a.getX(x+1),S=a.getX(x+2);r=Fl(this,o,e,i,c,f,p,_,E,S),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,M=d.length;g<M;g++){const x=d[g],h=o[x.materialIndex],_=Math.max(x.start,m.start),E=Math.min(l.count,Math.min(x.start+x.count,m.start+m.count));for(let S=_,b=E;S<b;S+=3){const T=S,C=S+1,v=S+2;r=Fl(this,h,e,i,c,f,p,T,C,v),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const g=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let x=g,h=M;x<h;x+=3){const _=x,E=x+1,S=x+2;r=Fl(this,o,e,i,c,f,p,_,E,S),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}}}function LE(t,e,n,i,r,s,o,a){let l;if(e.side===In?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===cs,a),l===null)return null;Ol.copy(a),Ol.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ol);return c<n.near||c>n.far?null:{distance:c,point:Ol.clone(),object:t}}function Fl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Dl),t.getVertexPosition(l,Ll),t.getVertexPosition(c,Il);const f=LE(t,e,n,i,Dl,Ll,Il,L0);if(f){const p=new N;fi.getBarycoord(L0,Dl,Ll,Il,p),r&&(f.uv=fi.getInterpolatedAttribute(r,a,l,c,p,new Re)),s&&(f.uv1=fi.getInterpolatedAttribute(s,a,l,c,p,new Re)),o&&(f.normal=fi.getInterpolatedAttribute(o,a,l,c,p,new N),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new N,materialIndex:0};fi.getNormal(Dl,Ll,Il,d.normal),f.face=d,f.barycoord=p}return f}class IE extends yn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=sn,f=sn,p,d){super(null,o,a,l,c,f,r,s,p,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const jr=new Ba,UE=new Re(.5,.5),kl=new N;class Up{constructor(e=new Yi,n=new Yi,i=new Yi,r=new Yi,s=new Yi,o=new Yi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Pi,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],f=s[4],p=s[5],d=s[6],m=s[7],g=s[8],M=s[9],x=s[10],h=s[11],_=s[12],E=s[13],S=s[14],b=s[15];if(r[0].setComponents(c-o,m-f,h-g,b-_).normalize(),r[1].setComponents(c+o,m+f,h+g,b+_).normalize(),r[2].setComponents(c+a,m+p,h+M,b+E).normalize(),r[3].setComponents(c-a,m-p,h-M,b-E).normalize(),i)r[4].setComponents(l,d,x,S).normalize(),r[5].setComponents(c-l,m-d,h-x,b-S).normalize();else if(r[4].setComponents(c-l,m-d,h-x,b-S).normalize(),n===Pi)r[5].setComponents(c+l,m+d,h+x,b+S).normalize();else if(n===Na)r[5].setComponents(l,d,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jr)}intersectsSprite(e){jr.center.set(0,0,0);const n=UE.distanceTo(e.center);return jr.radius=.7071067811865476+n,jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(jr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(kl.x=r.normal.x>0?e.max.x:e.min.x,kl.y=r.normal.y>0?e.max.y:e.min.y,kl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(kl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Op extends ps{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Gc=new N,Vc=new N,I0=new Dt,Bo=new du,zl=new Ba,Td=new N,U0=new N;class g_ extends tn{constructor(e=new Kt,n=new Op){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Gc.fromBufferAttribute(n,r-1),Vc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Gc.distanceTo(Vc);e.setAttribute("lineDistance",new bt(i,1))}else je("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zl.copy(i.boundingSphere),zl.applyMatrix4(r),zl.radius+=s,e.ray.intersectsSphere(zl)===!1)return;I0.copy(r).invert(),Bo.copy(e.ray).applyMatrix4(I0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,f=i.index,d=i.attributes.position;if(f!==null){const m=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let M=m,x=g-1;M<x;M+=c){const h=f.getX(M),_=f.getX(M+1),E=Bl(this,e,Bo,l,h,_,M);E&&n.push(E)}if(this.isLineLoop){const M=f.getX(g-1),x=f.getX(m),h=Bl(this,e,Bo,l,M,x,g-1);h&&n.push(h)}}else{const m=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let M=m,x=g-1;M<x;M+=c){const h=Bl(this,e,Bo,l,M,M+1,M);h&&n.push(h)}if(this.isLineLoop){const M=Bl(this,e,Bo,l,g-1,m,g-1);M&&n.push(M)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Bl(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(Gc.fromBufferAttribute(a,r),Vc.fromBufferAttribute(a,s),n.distanceSqToSegment(Gc,Vc,Td,U0)>i)return;Td.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(Td);if(!(c<e.near||c>e.far))return{distance:c,point:U0.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}const O0=new N,F0=new N;class OE extends g_{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)O0.fromBufferAttribute(n,r),F0.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+O0.distanceTo(F0);e.setAttribute("lineDistance",new bt(i,1))}else je("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class x_ extends ps{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const k0=new Dt,Sf=new du,Hl=new Ba,Gl=new N;class FE extends tn{constructor(e=new Kt,n=new x_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Hl.copy(i.boundingSphere),Hl.applyMatrix4(r),Hl.radius+=s,e.ray.intersectsSphere(Hl)===!1)return;k0.copy(r).invert(),Sf.copy(e.ray).applyMatrix4(k0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,p=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=d,M=m;g<M;g++){const x=c.getX(g);Gl.fromBufferAttribute(p,x),z0(Gl,x,l,r,e,n,this)}}else{const d=Math.max(0,o.start),m=Math.min(p.count,o.start+o.count);for(let g=d,M=m;g<M;g++)Gl.fromBufferAttribute(p,g),z0(Gl,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function z0(t,e,n,i,r,s,o){const a=Sf.distanceSqToPoint(t);if(a<n){const l=new N;Sf.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class v_ extends yn{constructor(e=[],n=us,i,r,s,o,a,l,c,f){super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class La extends yn{constructor(e,n,i=Ui,r,s,o,a=sn,l=sn,c,f=sr,p=1){if(f!==sr&&f!==es)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:p};super(d,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ip(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class kE extends La{constructor(e,n=Ui,i=us,r,s,o=sn,a=sn,l,c=sr){const f={width:e,height:e,depth:1},p=[f,f,f,f,f,f];super(e,e,n,i,r,s,o,a,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class __ extends yn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class rt extends Kt{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],p=[];let d=0,m=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new bt(c,3)),this.setAttribute("normal",new bt(f,3)),this.setAttribute("uv",new bt(p,2));function g(M,x,h,_,E,S,b,T,C,v,A){const R=S/C,D=b/v,O=S/2,U=b/2,L=T/2,V=C+1,ee=v+1;let q=0,G=0;const H=new N;for(let X=0;X<ee;X++){const Q=X*D-U;for(let se=0;se<V;se++){const ue=se*R-O;H[M]=ue*_,H[x]=Q*E,H[h]=L,c.push(H.x,H.y,H.z),H[M]=0,H[x]=0,H[h]=T>0?1:-1,f.push(H.x,H.y,H.z),p.push(se/C),p.push(1-X/v),q+=1}}for(let X=0;X<v;X++)for(let Q=0;Q<C;Q++){const se=d+Q+V*X,ue=d+Q+V*(X+1),He=d+(Q+1)+V*(X+1),Ae=d+(Q+1)+V*X;l.push(se,ue,Ae),l.push(ue,He,Ae),G+=6}a.addGroup(m,G,A),m+=G,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Fp extends Kt{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],c=new N,f=new Re;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let p=0,d=3;p<=n;p++,d+=3){const m=i+p/n*r;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),f.x=(o[d]/e+1)/2,f.y=(o[d+1]/e+1)/2,l.push(f.x,f.y)}for(let p=1;p<=n;p++)s.push(p,p+1,0);this.setIndex(s),this.setAttribute("position",new bt(o,3)),this.setAttribute("normal",new bt(a,3)),this.setAttribute("uv",new bt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fp(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class jt extends Kt{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],p=[],d=[],m=[];let g=0;const M=[],x=i/2;let h=0;_(),o===!1&&(e>0&&E(!0),n>0&&E(!1)),this.setIndex(f),this.setAttribute("position",new bt(p,3)),this.setAttribute("normal",new bt(d,3)),this.setAttribute("uv",new bt(m,2));function _(){const S=new N,b=new N;let T=0;const C=(n-e)/i;for(let v=0;v<=s;v++){const A=[],R=v/s,D=R*(n-e)+e;for(let O=0;O<=r;O++){const U=O/r,L=U*l+a,V=Math.sin(L),ee=Math.cos(L);b.x=D*V,b.y=-R*i+x,b.z=D*ee,p.push(b.x,b.y,b.z),S.set(V,C,ee).normalize(),d.push(S.x,S.y,S.z),m.push(U,1-R),A.push(g++)}M.push(A)}for(let v=0;v<r;v++)for(let A=0;A<s;A++){const R=M[A][v],D=M[A+1][v],O=M[A+1][v+1],U=M[A][v+1];(e>0||A!==0)&&(f.push(R,D,U),T+=3),(n>0||A!==s-1)&&(f.push(D,O,U),T+=3)}c.addGroup(h,T,0),h+=T}function E(S){const b=g,T=new Re,C=new N;let v=0;const A=S===!0?e:n,R=S===!0?1:-1;for(let O=1;O<=r;O++)p.push(0,x*R,0),d.push(0,R,0),m.push(.5,.5),g++;const D=g;for(let O=0;O<=r;O++){const L=O/r*l+a,V=Math.cos(L),ee=Math.sin(L);C.x=A*ee,C.y=x*R,C.z=A*V,p.push(C.x,C.y,C.z),d.push(0,R,0),T.x=V*.5+.5,T.y=ee*.5*R+.5,m.push(T.x,T.y),g++}for(let O=0;O<r;O++){const U=b+O,L=D+O;S===!0?f.push(L,L+1,U):f.push(L+1,L,U),v+=3}c.addGroup(h,v,S===!0?1:2),h+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wc extends jt{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Wc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ar{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){je("Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const f=i[r],d=i[r+1]-f,m=(o-f)/d;return(r+m)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new Re:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new N,r=[],s=[],o=[],a=new N,l=new Dt;for(let m=0;m<=e;m++){const g=m/e;r[m]=this.getTangentAt(g,new N)}s[0]=new N,o[0]=new N;let c=Number.MAX_VALUE;const f=Math.abs(r[0].x),p=Math.abs(r[0].y),d=Math.abs(r[0].z);f<=c&&(c=f,i.set(1,0,0)),p<=c&&(c=p,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(et(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(a,g))}o[m].crossVectors(r[m],s[m])}if(n===!0){let m=Math.acos(et(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(m=-m);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],m*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class y_ extends ar{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new Re){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const f=Math.cos(this.aRotation),p=Math.sin(this.aRotation),d=l-this.aX,m=c-this.aY;l=d*f-m*p+this.aX,c=d*p+m*f+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class zE extends y_{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function kp(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,f,p){let d=(o-s)/c-(a-s)/(c+f)+(a-o)/f,m=(a-o)/f-(l-o)/(f+p)+(l-a)/p;d*=f,m*=f,r(o,a,d,m)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const B0=new N,H0=new N,Ad=new kp,Cd=new kp,Rd=new kp;class S_ extends ar{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new N){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,f;this.closed||a>0?c=r[(a-1)%s]:(H0.subVectors(r[0],r[1]).add(r[0]),c=H0);const p=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?f=r[(a+2)%s]:(B0.subVectors(r[s-1],r[s-2]).add(r[s-1]),f=B0),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(p),m),M=Math.pow(p.distanceToSquared(d),m),x=Math.pow(d.distanceToSquared(f),m);M<1e-4&&(M=1),g<1e-4&&(g=M),x<1e-4&&(x=M),Ad.initNonuniformCatmullRom(c.x,p.x,d.x,f.x,g,M,x),Cd.initNonuniformCatmullRom(c.y,p.y,d.y,f.y,g,M,x),Rd.initNonuniformCatmullRom(c.z,p.z,d.z,f.z,g,M,x)}else this.curveType==="catmullrom"&&(Ad.initCatmullRom(c.x,p.x,d.x,f.x,this.tension),Cd.initCatmullRom(c.y,p.y,d.y,f.y,this.tension),Rd.initCatmullRom(c.z,p.z,d.z,f.z,this.tension));return i.set(Ad.calc(l),Cd.calc(l),Rd.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new N().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function G0(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function BE(t,e){const n=1-t;return n*n*e}function HE(t,e){return 2*(1-t)*t*e}function GE(t,e){return t*t*e}function la(t,e,n,i){return BE(t,e)+HE(t,n)+GE(t,i)}function VE(t,e){const n=1-t;return n*n*n*e}function WE(t,e){const n=1-t;return 3*n*n*t*e}function jE(t,e){return 3*(1-t)*t*t*e}function XE(t,e){return t*t*t*e}function ca(t,e,n,i,r){return VE(t,e)+WE(t,n)+jE(t,i)+XE(t,r)}class YE extends ar{constructor(e=new Re,n=new Re,i=new Re,r=new Re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new Re){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ca(e,r.x,s.x,o.x,a.x),ca(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class $E extends ar{constructor(e=new N,n=new N,i=new N,r=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new N){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ca(e,r.x,s.x,o.x,a.x),ca(e,r.y,s.y,o.y,a.y),ca(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class qE extends ar{constructor(e=new Re,n=new Re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Re){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Re){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class KE extends ar{constructor(e=new N,n=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new N){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new N){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ZE extends ar{constructor(e=new Re,n=new Re,i=new Re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Re){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(la(e,r.x,s.x,o.x),la(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class M_ extends ar{constructor(e=new N,n=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new N){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(la(e,r.x,s.x,o.x),la(e,r.y,s.y,o.y),la(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class JE extends ar{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Re){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],f=r[o>r.length-2?r.length-1:o+1],p=r[o>r.length-3?r.length-1:o+2];return i.set(G0(a,l.x,c.x,f.x,p.x),G0(a,l.y,c.y,f.y,p.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new Re().fromArray(r))}return this}}var QE=Object.freeze({__proto__:null,ArcCurve:zE,CatmullRomCurve3:S_,CubicBezierCurve:YE,CubicBezierCurve3:$E,EllipseCurve:y_,LineCurve:qE,LineCurve3:KE,QuadraticBezierCurve:ZE,QuadraticBezierCurve3:M_,SplineCurve:JE});class Ha extends Kt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,p=e/a,d=n/l,m=[],g=[],M=[],x=[];for(let h=0;h<f;h++){const _=h*d-o;for(let E=0;E<c;E++){const S=E*p-s;g.push(S,-_,0),M.push(0,0,1),x.push(E/a),x.push(1-h/l)}}for(let h=0;h<l;h++)for(let _=0;_<a;_++){const E=_+c*h,S=_+c*(h+1),b=_+1+c*(h+1),T=_+1+c*h;m.push(E,S,T),m.push(S,b,T)}this.setIndex(m),this.setAttribute("position",new bt(g,3)),this.setAttribute("normal",new bt(M,3)),this.setAttribute("uv",new bt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ha(e.width,e.height,e.widthSegments,e.heightSegments)}}class jc extends Kt{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const f=[],p=new N,d=new N,m=[],g=[],M=[],x=[];for(let h=0;h<=i;h++){const _=[],E=h/i,S=o+E*a,b=e*Math.cos(S),T=Math.sqrt(e*e-b*b);let C=0;h===0&&o===0?C=.5/n:h===i&&l===Math.PI&&(C=-.5/n);for(let v=0;v<=n;v++){const A=v/n,R=r+A*s;p.x=-T*Math.cos(R),p.y=b,p.z=T*Math.sin(R),g.push(p.x,p.y,p.z),d.copy(p).normalize(),M.push(d.x,d.y,d.z),x.push(A+C,1-E),_.push(c++)}f.push(_)}for(let h=0;h<i;h++)for(let _=0;_<n;_++){const E=f[h][_+1],S=f[h][_],b=f[h+1][_],T=f[h+1][_+1];(h!==0||o>0)&&m.push(E,S,T),(h!==i-1||l<Math.PI)&&m.push(S,b,T)}this.setIndex(m),this.setAttribute("position",new bt(g,3)),this.setAttribute("normal",new bt(M,3)),this.setAttribute("uv",new bt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class zp extends Kt{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s,thetaStart:o,thetaLength:a},i=Math.floor(i),r=Math.floor(r);const l=[],c=[],f=[],p=[],d=new N,m=new N,g=new N;for(let M=0;M<=i;M++){const x=o+M/i*a;for(let h=0;h<=r;h++){const _=h/r*s;m.x=(e+n*Math.cos(x))*Math.cos(_),m.y=(e+n*Math.cos(x))*Math.sin(_),m.z=n*Math.sin(x),c.push(m.x,m.y,m.z),d.x=e*Math.cos(_),d.y=e*Math.sin(_),g.subVectors(m,d).normalize(),f.push(g.x,g.y,g.z),p.push(h/r),p.push(M/i)}}for(let M=1;M<=i;M++)for(let x=1;x<=r;x++){const h=(r+1)*M+x-1,_=(r+1)*(M-1)+x-1,E=(r+1)*(M-1)+x,S=(r+1)*M+x;l.push(h,_,S),l.push(_,E,S)}this.setIndex(l),this.setAttribute("position",new bt(c,3)),this.setAttribute("normal",new bt(f,3)),this.setAttribute("uv",new bt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zp(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class Bp extends Kt{constructor(e=new M_(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(n,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new N,l=new N,c=new Re;let f=new N;const p=[],d=[],m=[],g=[];M(),this.setIndex(g),this.setAttribute("position",new bt(p,3)),this.setAttribute("normal",new bt(d,3)),this.setAttribute("uv",new bt(m,2));function M(){for(let E=0;E<n;E++)x(E);x(s===!1?n:0),_(),h()}function x(E){f=e.getPointAt(E/n,f);const S=o.normals[E],b=o.binormals[E];for(let T=0;T<=r;T++){const C=T/r*Math.PI*2,v=Math.sin(C),A=-Math.cos(C);l.x=A*S.x+v*b.x,l.y=A*S.y+v*b.y,l.z=A*S.z+v*b.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=f.x+i*l.x,a.y=f.y+i*l.y,a.z=f.z+i*l.z,p.push(a.x,a.y,a.z)}}function h(){for(let E=1;E<=n;E++)for(let S=1;S<=r;S++){const b=(r+1)*(E-1)+(S-1),T=(r+1)*E+(S-1),C=(r+1)*E+S,v=(r+1)*(E-1)+S;g.push(b,T,v),g.push(T,C,v)}}function _(){for(let E=0;E<=n;E++)for(let S=0;S<=r;S++)c.x=E/n,c.y=S/r,m.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Bp(new QE[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function po(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(V0(r))r.isRenderTargetTexture?(je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(V0(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function gn(t){const e={};for(let n=0;n<t.length;n++){const i=po(t[n]);for(const r in i)e[r]=i[r]}return e}function V0(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function ew(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function E_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const tw={clone:po,merge:gn};var nw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fi extends ps{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nw,this.fragmentShader=iw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=po(e.uniforms),this.uniformsGroups=ew(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new nt().setHex(r.value);break;case"v2":this.uniforms[i].value=new Re().fromArray(r.value);break;case"v3":this.uniforms[i].value=new N().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Ot().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ke().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Dt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class rw extends Fi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class vt extends ps{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yf,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ur,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sw extends vt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new nt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new nt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new nt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ow extends ps{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=FM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class aw extends ps{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Hp extends tn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Pd=new Dt,W0=new N,j0=new N;class w_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.mapType=zn,this.map=null,this.mapPass=null,this.matrix=new Dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Up,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;W0.setFromMatrixPosition(e.matrixWorld),n.position.copy(W0),j0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(j0),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,r){Pd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Pd,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,o=r?r.z/s.x:1,a=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===Na||e.reversedDepth?n.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):n.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),n.multiply(Pd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Vl=new N,Wl=new Ir,Ei=new N;class b_ extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=Pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Vl,Wl,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vl,Wl,Ei.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Vl,Wl,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vl,Wl,Ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const gr=new N,X0=new Re,Y0=new Re;class kn extends b_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Da*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(oa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Da*2*Math.atan(Math.tan(oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){gr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gr.x,gr.y).multiplyScalar(-e/gr.z),gr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gr.x,gr.y).multiplyScalar(-e/gr.z)}getViewSize(e,n){return this.getViewBounds(e,X0,Y0),n.subVectors(Y0,X0)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(oa*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class lw extends w_{constructor(){super(new kn(90,1,.5,500)),this.isPointLightShadow=!0}}class cw extends Hp{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new lw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Gp extends b_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class uw extends w_{constructor(){super(new Gp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Nd extends Hp{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new uw}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class dw extends Hp{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Cs=-90,Rs=1;class hw extends tn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new kn(Cs,Rs,e,n);r.layers=this.layers,this.add(r);const s=new kn(Cs,Rs,e,n);s.layers=this.layers,this.add(s);const o=new kn(Cs,Rs,e,n);o.layers=this.layers,this.add(o);const a=new kn(Cs,Rs,e,n);a.layers=this.layers,this.add(a);const l=new kn(Cs,Rs,e,n);l.layers=this.layers,this.add(l);const c=new kn(Cs,Rs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Pi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Na)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,p=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(p,d,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class fw extends kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class $0{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=et(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(et(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const $p=class $p{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};$p.prototype.isMatrix2=!0;let q0=$p;class T_ extends OE{constructor(e=10,n=10,i=4473924,r=8947848){i=new nt(i),r=new nt(r);const s=n/2,o=e/n,a=e/2,l=[],c=[];for(let d=0,m=0,g=-a;d<=n;d++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const M=d===s?i:r;M.toArray(c,m),m+=3,M.toArray(c,m),m+=3,M.toArray(c,m),m+=3,M.toArray(c,m),m+=3}const f=new Kt;f.setAttribute("position",new bt(l,3)),f.setAttribute("color",new bt(c,3));const p=new Op({vertexColors:!0,toneMapped:!1});super(f,p),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class pw extends zr{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function K0(t,e,n,i){const r=mw(i);switch(n){case a_:return t*e;case c_:return t*e/r.components*r.byteLength;case Cp:return t*e/r.components*r.byteLength;case ds:return t*e*2/r.components*r.byteLength;case Rp:return t*e*2/r.components*r.byteLength;case l_:return t*e*3/r.components*r.byteLength;case pi:return t*e*4/r.components*r.byteLength;case Pp:return t*e*4/r.components*r.byteLength;case ac:case lc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case cc:case uc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Wh:case Xh:return Math.max(t,16)*Math.max(e,8)/4;case Vh:case jh:return Math.max(t,8)*Math.max(e,8)/2;case Yh:case $h:case Kh:case Zh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case qh:case Fc:case Jh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Qh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ef:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case tf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case nf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case rf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case sf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case of:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case af:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case lf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case cf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case uf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case df:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case hf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case ff:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case pf:case mf:case gf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case xf:case vf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case kc:case _f:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function mw(t){switch(t){case zn:case i_:return{byteLength:1,components:1};case Ra:case r_:case Oi:return{byteLength:2,components:1};case Tp:case Ap:return{byteLength:2,components:4};case Ui:case bp:case Ri:return{byteLength:4,components:1};case s_:case o_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wp}}));typeof window<"u"&&(window.__THREE__?je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function A_(){let t=null,e=!1,n=null,i=null;function r(s,o){i=t.requestAnimationFrame(r),n(s,o)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function gw(t){const e=new WeakMap;function n(a,l){const c=a.array,f=a.usage,p=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,f),a.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:p}}function i(a,l,c){const f=l.array,p=l.updateRanges;if(t.bindBuffer(c,a),p.length===0)t.bufferSubData(c,0,f);else{p.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<p.length;m++){const g=p[d],M=p[m];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++d,p[d]=M)}p.length=d+1;for(let m=0,g=p.length;m<g;m++){const M=p[m];t.bufferSubData(c,M.start*f.BYTES_PER_ELEMENT,f,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var xw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_w=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ew=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ww=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Tw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Aw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Pw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Nw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Dw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Lw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Iw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ow=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Fw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,kw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Bw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Hw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Gw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Vw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ww=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yw="gl_FragColor = linearToOutputTexel( gl_FragColor );",$w=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Kw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Zw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Jw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,eb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ib=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,sb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ob=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ab=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,cb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,ub=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,db=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_b=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,yb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Eb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ab=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Db=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ib=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ub=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ob=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Fb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Bb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Hb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Yb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$b=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,eT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,nT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,iT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,aT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,dT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_T=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ST=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ET=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,bT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,TT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,AT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,CT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,PT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,NT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,DT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,OT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,GT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,XT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$T=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tt={alphahash_fragment:xw,alphahash_pars_fragment:vw,alphamap_fragment:_w,alphamap_pars_fragment:yw,alphatest_fragment:Sw,alphatest_pars_fragment:Mw,aomap_fragment:Ew,aomap_pars_fragment:ww,batching_pars_vertex:bw,batching_vertex:Tw,begin_vertex:Aw,beginnormal_vertex:Cw,bsdfs:Rw,iridescence_fragment:Pw,bumpmap_pars_fragment:Nw,clipping_planes_fragment:Dw,clipping_planes_pars_fragment:Lw,clipping_planes_pars_vertex:Iw,clipping_planes_vertex:Uw,color_fragment:Ow,color_pars_fragment:Fw,color_pars_vertex:kw,color_vertex:zw,common:Bw,cube_uv_reflection_fragment:Hw,defaultnormal_vertex:Gw,displacementmap_pars_vertex:Vw,displacementmap_vertex:Ww,emissivemap_fragment:jw,emissivemap_pars_fragment:Xw,colorspace_fragment:Yw,colorspace_pars_fragment:$w,envmap_fragment:qw,envmap_common_pars_fragment:Kw,envmap_pars_fragment:Zw,envmap_pars_vertex:Jw,envmap_physical_pars_fragment:cb,envmap_vertex:Qw,fog_vertex:eb,fog_pars_vertex:tb,fog_fragment:nb,fog_pars_fragment:ib,gradientmap_pars_fragment:rb,lightmap_pars_fragment:sb,lights_lambert_fragment:ob,lights_lambert_pars_fragment:ab,lights_pars_begin:lb,lights_toon_fragment:ub,lights_toon_pars_fragment:db,lights_phong_fragment:hb,lights_phong_pars_fragment:fb,lights_physical_fragment:pb,lights_physical_pars_fragment:mb,lights_fragment_begin:gb,lights_fragment_maps:xb,lights_fragment_end:vb,lightprobes_pars_fragment:_b,logdepthbuf_fragment:yb,logdepthbuf_pars_fragment:Sb,logdepthbuf_pars_vertex:Mb,logdepthbuf_vertex:Eb,map_fragment:wb,map_pars_fragment:bb,map_particle_fragment:Tb,map_particle_pars_fragment:Ab,metalnessmap_fragment:Cb,metalnessmap_pars_fragment:Rb,morphinstance_vertex:Pb,morphcolor_vertex:Nb,morphnormal_vertex:Db,morphtarget_pars_vertex:Lb,morphtarget_vertex:Ib,normal_fragment_begin:Ub,normal_fragment_maps:Ob,normal_pars_fragment:Fb,normal_pars_vertex:kb,normal_vertex:zb,normalmap_pars_fragment:Bb,clearcoat_normal_fragment_begin:Hb,clearcoat_normal_fragment_maps:Gb,clearcoat_pars_fragment:Vb,iridescence_pars_fragment:Wb,opaque_fragment:jb,packing:Xb,premultiplied_alpha_fragment:Yb,project_vertex:$b,dithering_fragment:qb,dithering_pars_fragment:Kb,roughnessmap_fragment:Zb,roughnessmap_pars_fragment:Jb,shadowmap_pars_fragment:Qb,shadowmap_pars_vertex:eT,shadowmap_vertex:tT,shadowmask_pars_fragment:nT,skinbase_vertex:iT,skinning_pars_vertex:rT,skinning_vertex:sT,skinnormal_vertex:oT,specularmap_fragment:aT,specularmap_pars_fragment:lT,tonemapping_fragment:cT,tonemapping_pars_fragment:uT,transmission_fragment:dT,transmission_pars_fragment:hT,uv_pars_fragment:fT,uv_pars_vertex:pT,uv_vertex:mT,worldpos_vertex:gT,background_vert:xT,background_frag:vT,backgroundCube_vert:_T,backgroundCube_frag:yT,cube_vert:ST,cube_frag:MT,depth_vert:ET,depth_frag:wT,distance_vert:bT,distance_frag:TT,equirect_vert:AT,equirect_frag:CT,linedashed_vert:RT,linedashed_frag:PT,meshbasic_vert:NT,meshbasic_frag:DT,meshlambert_vert:LT,meshlambert_frag:IT,meshmatcap_vert:UT,meshmatcap_frag:OT,meshnormal_vert:FT,meshnormal_frag:kT,meshphong_vert:zT,meshphong_frag:BT,meshphysical_vert:HT,meshphysical_frag:GT,meshtoon_vert:VT,meshtoon_frag:WT,points_vert:jT,points_frag:XT,shadow_vert:YT,shadow_frag:$T,sprite_vert:qT,sprite_frag:KT},Me={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Ti={basic:{uniforms:gn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:gn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new nt(0)},envMapIntensity:{value:1}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:gn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:gn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:gn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new nt(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:gn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:gn([Me.points,Me.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:gn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:gn([Me.common,Me.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:gn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:gn([Me.sprite,Me.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:gn([Me.common,Me.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:gn([Me.lights,Me.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};Ti.physical={uniforms:gn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const jl={r:0,b:0,g:0},ZT=new Dt,C_=new Ke;C_.set(-1,0,0,0,1,0,0,0,1);function JT(t,e,n,i,r,s){const o=new nt(0);let a=r===!0?0:1,l,c,f=null,p=0,d=null;function m(_){let E=_.isScene===!0?_.background:null;if(E&&E.isTexture){const S=_.backgroundBlurriness>0;E=e.get(E,S)}return E}function g(_){let E=!1;const S=m(_);S===null?x(o,a):S&&S.isColor&&(x(S,1),E=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function M(_,E){const S=m(E);S&&(S.isCubeTexture||S.mapping===uu)?(c===void 0&&(c=new ve(new rt(1,1,1),new Fi({name:"BackgroundCubeMaterial",uniforms:po(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ZT.makeRotationFromEuler(E.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(C_),c.material.toneMapped=ct.getTransfer(S.colorSpace)!==Mt,(f!==S||p!==S.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,f=S,p=S.version,d=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new ve(new Ha(2,2),new Fi({name:"BackgroundMaterial",uniforms:po(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:cs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=ct.getTransfer(S.colorSpace)!==Mt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||p!==S.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,f=S,p=S.version,d=t.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function x(_,E){_.getRGB(jl,E_(t)),n.buffers.color.setClear(jl.r,jl.g,jl.b,E,s)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,E=1){o.set(_),a=E,x(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,x(o,a)},render:g,addToRenderList:M,dispose:h}}function QT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(D,O,U,L,V){let ee=!1;const q=p(D,L,U,O);s!==q&&(s=q,c(s.object)),ee=m(D,L,U,V),ee&&g(D,L,U,V),V!==null&&e.update(V,t.ELEMENT_ARRAY_BUFFER),(ee||o)&&(o=!1,S(D,O,U,L),V!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return t.createVertexArray()}function c(D){return t.bindVertexArray(D)}function f(D){return t.deleteVertexArray(D)}function p(D,O,U,L){const V=L.wireframe===!0;let ee=i[O.id];ee===void 0&&(ee={},i[O.id]=ee);const q=D.isInstancedMesh===!0?D.id:0;let G=ee[q];G===void 0&&(G={},ee[q]=G);let H=G[U.id];H===void 0&&(H={},G[U.id]=H);let X=H[V];return X===void 0&&(X=d(l()),H[V]=X),X}function d(D){const O=[],U=[],L=[];for(let V=0;V<n;V++)O[V]=0,U[V]=0,L[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:U,attributeDivisors:L,object:D,attributes:{},index:null}}function m(D,O,U,L){const V=s.attributes,ee=O.attributes;let q=0;const G=U.getAttributes();for(const H in G)if(G[H].location>=0){const Q=V[H];let se=ee[H];if(se===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(se=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(se=D.instanceColor)),Q===void 0||Q.attribute!==se||se&&Q.data!==se.data)return!0;q++}return s.attributesNum!==q||s.index!==L}function g(D,O,U,L){const V={},ee=O.attributes;let q=0;const G=U.getAttributes();for(const H in G)if(G[H].location>=0){let Q=ee[H];Q===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor));const se={};se.attribute=Q,Q&&Q.data&&(se.data=Q.data),V[H]=se,q++}s.attributes=V,s.attributesNum=q,s.index=L}function M(){const D=s.newAttributes;for(let O=0,U=D.length;O<U;O++)D[O]=0}function x(D){h(D,0)}function h(D,O){const U=s.newAttributes,L=s.enabledAttributes,V=s.attributeDivisors;U[D]=1,L[D]===0&&(t.enableVertexAttribArray(D),L[D]=1),V[D]!==O&&(t.vertexAttribDivisor(D,O),V[D]=O)}function _(){const D=s.newAttributes,O=s.enabledAttributes;for(let U=0,L=O.length;U<L;U++)O[U]!==D[U]&&(t.disableVertexAttribArray(U),O[U]=0)}function E(D,O,U,L,V,ee,q){q===!0?t.vertexAttribIPointer(D,O,U,V,ee):t.vertexAttribPointer(D,O,U,L,V,ee)}function S(D,O,U,L){M();const V=L.attributes,ee=U.getAttributes(),q=O.defaultAttributeValues;for(const G in ee){const H=ee[G];if(H.location>=0){let X=V[G];if(X===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(X=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(X=D.instanceColor)),X!==void 0){const Q=X.normalized,se=X.itemSize,ue=e.get(X);if(ue===void 0)continue;const He=ue.buffer,Ae=ue.type,Ve=ue.bytesPerElement,Z=Ae===t.INT||Ae===t.UNSIGNED_INT||X.gpuType===bp;if(X.isInterleavedBufferAttribute){const J=X.data,pe=J.stride,ke=X.offset;if(J.isInstancedInterleavedBuffer){for(let me=0;me<H.locationSize;me++)h(H.location+me,J.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let me=0;me<H.locationSize;me++)x(H.location+me);t.bindBuffer(t.ARRAY_BUFFER,He);for(let me=0;me<H.locationSize;me++)E(H.location+me,se/H.locationSize,Ae,Q,pe*Ve,(ke+se/H.locationSize*me)*Ve,Z)}else{if(X.isInstancedBufferAttribute){for(let J=0;J<H.locationSize;J++)h(H.location+J,X.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let J=0;J<H.locationSize;J++)x(H.location+J);t.bindBuffer(t.ARRAY_BUFFER,He);for(let J=0;J<H.locationSize;J++)E(H.location+J,se/H.locationSize,Ae,Q,se*Ve,se/H.locationSize*J*Ve,Z)}}else if(q!==void 0){const Q=q[G];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(H.location,Q);break;case 3:t.vertexAttrib3fv(H.location,Q);break;case 4:t.vertexAttrib4fv(H.location,Q);break;default:t.vertexAttrib1fv(H.location,Q)}}}}_()}function b(){A();for(const D in i){const O=i[D];for(const U in O){const L=O[U];for(const V in L){const ee=L[V];for(const q in ee)f(ee[q].object),delete ee[q];delete L[V]}}delete i[D]}}function T(D){if(i[D.id]===void 0)return;const O=i[D.id];for(const U in O){const L=O[U];for(const V in L){const ee=L[V];for(const q in ee)f(ee[q].object),delete ee[q];delete L[V]}}delete i[D.id]}function C(D){for(const O in i){const U=i[O];for(const L in U){const V=U[L];if(V[D.id]===void 0)continue;const ee=V[D.id];for(const q in ee)f(ee[q].object),delete ee[q];delete V[D.id]}}}function v(D){for(const O in i){const U=i[O],L=D.isInstancedMesh===!0?D.id:0,V=U[L];if(V!==void 0){for(const ee in V){const q=V[ee];for(const G in q)f(q[G].object),delete q[G];delete V[ee]}delete U[L],Object.keys(U).length===0&&delete i[O]}}}function A(){R(),o=!0,s!==r&&(s=r,c(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:R,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:M,enableAttribute:x,disableUnusedAttributes:_}}function e2(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,f){f!==0&&(t.drawArraysInstanced(i,l,c,f),n.update(c,i,f))}function a(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let d=0;for(let m=0;m<f;m++)d+=c[m];n.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function t2(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==pi&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const v=C===Oi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==zn&&C!==Ri&&!v&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(je("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const p=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),E=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:x,maxAttributes:h,maxVertexUniforms:_,maxVaryings:E,maxFragmentUniforms:S,maxSamples:b,samples:T}}function n2(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Yi,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){const m=p.length!==0||d||i!==0||r;return r=d,i=p.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,d){n=f(p,d,0)},this.setState=function(p,d,m){const g=p.clippingPlanes,M=p.clipIntersection,x=p.clipShadows,h=t.get(p);if(!r||g===null||g.length===0||s&&!x)s?f(null):c();else{const _=s?0:i,E=_*4;let S=h.clippingState||null;l.value=S,S=f(g,d,E,m);for(let b=0;b!==E;++b)S[b]=n[b];h.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(p,d,m,g){const M=p!==null?p.length:0;let x=null;if(M!==0){if(x=l.value,g!==!0||x===null){const h=m+M*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(x===null||x.length<h)&&(x=new Float32Array(h));for(let E=0,S=m;E!==M;++E,S+=4)o.copy(p[E]).applyMatrix4(_,a),o.normal.toArray(x,S),x[S+3]=o.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,x}}const $s=4,i2=6,r2=20,s2=256,Ho=new Gp,Z0=new nt;let Dd=null,Ld=0,Id=0,Ud=!1;const o2=new N,Xr=new N;class J0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=o2}=s;Dd=this._renderer.getRenderTarget(),Ld=this._renderer.getActiveCubeFace(),Id=this._renderer.getActiveMipmapLevel(),Ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Dd,Ld,Id),this._renderer.xr.enabled=Ud,e.scissorTest=!1,Ps(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===us||e.mapping===fo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dd=this._renderer.getRenderTarget(),Ld=this._renderer.getActiveCubeFace(),Id=this._renderer.getActiveMipmapLevel(),Ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Oi,format:pi,colorSpace:zc,depthBuffer:!1},r=Q0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Q0(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=a2(s)),this._blurMaterial=c2(s,e,n),this._ggxMaterial=l2(s,e,n)}return r}_compileMaterial(e){const n=new ve(new Kt,e);this._renderer.compile(n,Ho)}_sceneToCubeUV(e,n,i,r,s){const l=new kn(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,d=p.autoClear,m=p.toneMapping;p.getClearColor(Z0),p.toneMapping=Li,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ve(new rt,new qr({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,x=M.material;let h=!1;const _=e.background;_?_.isColor&&(x.color.copy(_),e.background=null,h=!0):(x.color.copy(Z0),h=!0);for(let E=0;E<6;E++){const S=E%3;S===0?(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[E],s.y,s.z)):S===1?(l.up.set(0,0,c[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[E],s.z)):(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[E]));const b=this._cubeSize;Ps(r,S*b,E>2?b:0,b,b),p.setRenderTarget(r),h&&p.render(M,l),p.render(e,l)}p.toneMapping=m,p.autoClear=d,e.background=_}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===us||e.mapping===fo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=tg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ps(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Ho)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),p=Math.sqrt(c*c-f*f),d=c*1.25,m=p*d,{_lodMax:g}=this,M=this._sizeLods[i],x=3*M*(i>g-$s?i-g+$s:0),h=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=g-n,Ps(s,x,h,3*M,2*M),r.setRenderTarget(s),r.render(a,Ho),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,Ps(e,x,h,3*M,2*M),r.setRenderTarget(e),r.render(a,Ho)}_blur(e,n,i,r){const s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,n,i,o),this._blurPass(s,e,i,i,o)}_blurPass(e,n,i,r,s){const o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;const c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;const f=this._sizeLods[r],p=3*f*(r>this._lodMax-$s?r-this._lodMax+$s:0),d=4*(this._cubeSize-f);Ps(n,p,d,3*f,2*f),o.setRenderTarget(n),o.render(l,Ho)}}function a2(t){const e=[],n=[];let i=t;const r=t-$s+1+i2;for(let s=0;s<r;s++){const o=Math.pow(2,i);e.push(o);const a=1/(o-2),l=-a,c=1+a,f=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,d=6,m=3,g=new Float32Array(m*d*p),M=new Float32Array(m*d*p);for(let h=0;h<p;h++){const _=h%3*2/3-1,E=h>2?0:-1,S=[_,E,0,_+2/3,E,0,_+2/3,E+1,0,_,E,0,_+2/3,E+1,0,_,E+1,0];g.set(S,m*d*h);for(let b=0;b<d;b++){const T=f[b*2]*2-1,C=f[b*2+1]*2-1;h===0?Xr.set(1,C,T):h===1?Xr.set(-T,1,-C):h===2?Xr.set(-T,C,1):h===3?Xr.set(-1,C,-T):h===4?Xr.set(-T,-1,C):Xr.set(T,C,-1),Xr.toArray(M,(h*d+b)*m)}}const x=new Kt;x.setAttribute("position",new Ii(g,m)),x.setAttribute("outputDirection",new Ii(M,m)),n.push(new ve(x,null)),i>$s&&i--}return{lodMeshes:n,sizeLods:e}}function Q0(t,e,n){const i=new xi(t,e,n);return i.texture.mapping=uu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ps(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function l2(t,e,n){return new Fi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:s2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function c2(t,e,n){return new Fi({name:"SphericalGaussianBlur",defines:{SAMPLES:r2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:hu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function eg(){return new Fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function tg(){return new Fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function hu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class R_ extends xi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new v_(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new rt(5,5,5),s=new Fi({name:"CubemapFromEquirect",uniforms:po(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:In,blending:Qi});s.uniforms.tEquirect.value=n;const o=new ve(r,s),a=n.minFilter;return n.minFilter===Qr&&(n.minFilter=fn),new hw(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function u2(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,m=!1){return d==null?null:m?o(d):s(d)}function s(d){if(d&&d.isTexture){const m=d.mapping;if(m===nd||m===id)if(e.has(d)){const g=e.get(d).texture;return a(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const M=new R_(g.height);return M.fromEquirectangularTexture(t,d),e.set(d,M),d.addEventListener("dispose",c),a(M.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const m=d.mapping,g=m===nd||m===id,M=m===us||m===fo;if(g||M){let x=n.get(d);const h=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==h)return i===null&&(i=new J0(t)),x=g?i.fromEquirectangular(d,x):i.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,n.set(d,x),x.texture;if(x!==void 0)return x.texture;{const _=d.image;return g&&_&&_.height>0||M&&_&&l(_)?(i===null&&(i=new J0(t)),x=g?i.fromEquirectangular(d):i.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,n.set(d,x),d.addEventListener("dispose",f),x.texture):null}}}return d}function a(d,m){return m===nd?d.mapping=us:m===id&&(d.mapping=fo),d}function l(d){let m=0;const g=6;for(let M=0;M<g;M++)d[M]!==void 0&&m++;return m===g}function c(d){const m=d.target;m.removeEventListener("dispose",c);const g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}function f(d){const m=d.target;m.removeEventListener("dispose",f);const g=n.get(m);g!==void 0&&(n.delete(m),g.dispose())}function p(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function d2(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&no("WebGLRenderer: "+i+" extension not supported."),r}}}function h2(t,e,n,i){const r={},s=new WeakMap;function o(p){const d=p.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(p,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(p){const d=p.attributes;for(const m in d)e.update(d[m],t.ARRAY_BUFFER)}function c(p){const d=[],m=p.index,g=p.attributes.position;let M=0;if(g===void 0)return;if(m!==null){const _=m.array;M=m.version;for(let E=0,S=_.length;E<S;E+=3){const b=_[E+0],T=_[E+1],C=_[E+2];d.push(b,T,T,C,C,b)}}else{const _=g.array;M=g.version;for(let E=0,S=_.length/3-1;E<S;E+=3){const b=E+0,T=E+1,C=E+2;d.push(b,T,T,C,C,b)}}const x=new(g.count>=65535?m_:p_)(d,1);x.version=M;const h=s.get(p);h&&e.remove(h),s.set(p,x)}function f(p){const d=s.get(p);if(d){const m=p.index;m!==null&&d.version<m.version&&c(p)}else c(p);return s.get(p)}return{get:a,update:l,getWireframeAttribute:f}}function f2(t,e,n){let i;function r(p){i=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function l(p,d){t.drawElements(i,d,s,p*o),n.update(d,i,1)}function c(p,d,m){m!==0&&(t.drawElementsInstanced(i,d,s,p*o,m),n.update(d,i,m))}function f(p,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,p,0,m);let M=0;for(let x=0;x<m;x++)M+=d[x];n.update(M,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function p2(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:gt("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function m2(t,e,n){const i=new WeakMap,r=new Ot;function s(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=f!==void 0?f.length:0;let d=i.get(a);if(d===void 0||d.count!==p){let R=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",R)};var m=R;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),M===!0&&(S=2),x===!0&&(S=3);let b=a.attributes.position.count*S,T=1;b>e.maxTextureSize&&(T=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const C=new Float32Array(b*T*4*p),v=new d_(C,b,T,p);v.type=Ri,v.needsUpdate=!0;const A=S*4;for(let D=0;D<p;D++){const O=h[D],U=_[D],L=E[D],V=b*T*4*D;for(let ee=0;ee<O.count;ee++){const q=ee*A;g===!0&&(r.fromBufferAttribute(O,ee),C[V+q+0]=r.x,C[V+q+1]=r.y,C[V+q+2]=r.z,C[V+q+3]=0),M===!0&&(r.fromBufferAttribute(U,ee),C[V+q+4]=r.x,C[V+q+5]=r.y,C[V+q+6]=r.z,C[V+q+7]=0),x===!0&&(r.fromBufferAttribute(L,ee),C[V+q+8]=r.x,C[V+q+9]=r.y,C[V+q+10]=r.z,C[V+q+11]=L.itemSize===4?r.w:1)}}d={count:p,texture:v,size:new Re(b,T)},i.set(a,d),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let x=0;x<c.length;x++)g+=c[x];const M=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",M),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function g2(t,e,n,i,r){let s=new WeakMap;function o(c){const f=r.render.frame,p=c.geometry,d=e.get(c,p);if(s.get(d)!==f&&(e.update(d),s.set(d,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==f&&(m.update(),s.set(m,f))}return d}function a(){s=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:o,dispose:a}}const x2={[qv]:"LINEAR_TONE_MAPPING",[Kv]:"REINHARD_TONE_MAPPING",[Zv]:"CINEON_TONE_MAPPING",[Jv]:"ACES_FILMIC_TONE_MAPPING",[e_]:"AGX_TONE_MAPPING",[t_]:"NEUTRAL_TONE_MAPPING",[Qv]:"CUSTOM_TONE_MAPPING"};function v2(t,e,n,i,r,s){const o=new xi(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new Kt;c.setAttribute("position",new bt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new bt([0,2,0,0,2,0],2));const f=new rw({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new ve(c,f),d=new Gp(-1,1,1,-1,0,1);let m=null,g=null,M=!1,x,h=null,_=[],E=!1;this.setSize=function(S,b){o.setSize(S,b),a!==null&&a.setSize(S,b),l!==null&&l.setSize(S,b);for(let T=0;T<_.length;T++){const C=_[T];C.setSize&&C.setSize(S,b)}},this.setEffects=function(S){_=S,E=_.length>0&&_[0].isRenderPass===!0;const b=o.width,T=o.height;_.length>0&&a===null&&(a=new xi(b,T,{type:Oi,depthBuffer:!1,stencilBuffer:!1}),l=new xi(b,T,{type:Oi,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<_.length;C++){const v=_[C];v.setSize&&v.setSize(b,T)}},this.begin=function(S,b){if(M||S.toneMapping===Li&&_.length===0)return!1;if(h=b,b!==null){const T=b.width,C=b.height;(o.width!==T||o.height!==C)&&this.setSize(T,C)}return E===!1&&S.setRenderTarget(o),x=S.toneMapping,S.toneMapping=Li,!0},this.hasRenderPass=function(){return E},this.end=function(S,b){S.toneMapping=x,M=!0;let T=o,C=a;for(let v=0;v<_.length;v++){const A=_[v];A.enabled!==!1&&(A.render(S,C,T,b),A.needsSwap!==!1&&(T=C,C=C===a?l:a))}if(m!==S.outputColorSpace||g!==S.toneMapping){m=S.outputColorSpace,g=S.toneMapping,f.defines={},ct.getTransfer(m)===Mt&&(f.defines.SRGB_TRANSFER="");const v=x2[g];v&&(f.defines[v]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=T.texture,S.setRenderTarget(h),S.render(p,d),h=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),f.dispose()}}const P_=new yn,Mf=new La(1,1),N_=new d_,D_=new vE,L_=new v_,ng=[],ig=[],rg=new Float32Array(16),sg=new Float32Array(9),og=new Float32Array(4);function _o(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=ng[r];if(s===void 0&&(s=new Float32Array(r),ng[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function $t(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function qt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function fu(t,e){let n=ig[e];n===void 0&&(n=new Int32Array(e),ig[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function _2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function y2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;t.uniform2fv(this.addr,e),qt(n,e)}}function S2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if($t(n,e))return;t.uniform3fv(this.addr,e),qt(n,e)}}function M2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;t.uniform4fv(this.addr,e),qt(n,e)}}function E2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if($t(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),qt(n,e)}else{if($t(n,i))return;og.set(i),t.uniformMatrix2fv(this.addr,!1,og),qt(n,i)}}function w2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if($t(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),qt(n,e)}else{if($t(n,i))return;sg.set(i),t.uniformMatrix3fv(this.addr,!1,sg),qt(n,i)}}function b2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if($t(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),qt(n,e)}else{if($t(n,i))return;rg.set(i),t.uniformMatrix4fv(this.addr,!1,rg),qt(n,i)}}function T2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function A2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;t.uniform2iv(this.addr,e),qt(n,e)}}function C2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;t.uniform3iv(this.addr,e),qt(n,e)}}function R2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;t.uniform4iv(this.addr,e),qt(n,e)}}function P2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function N2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;t.uniform2uiv(this.addr,e),qt(n,e)}}function D2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;t.uniform3uiv(this.addr,e),qt(n,e)}}function L2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;t.uniform4uiv(this.addr,e),qt(n,e)}}function I2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Mf.compareFunction=n.isReversedDepthBuffer()?Dp:Np,s=Mf):s=P_,n.setTexture2D(e||s,r)}function U2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||D_,r)}function O2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||L_,r)}function F2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||N_,r)}function k2(t){switch(t){case 5126:return _2;case 35664:return y2;case 35665:return S2;case 35666:return M2;case 35674:return E2;case 35675:return w2;case 35676:return b2;case 5124:case 35670:return T2;case 35667:case 35671:return A2;case 35668:case 35672:return C2;case 35669:case 35673:return R2;case 5125:return P2;case 36294:return N2;case 36295:return D2;case 36296:return L2;case 35678:case 36198:case 36298:case 36306:case 35682:return I2;case 35679:case 36299:case 36307:return U2;case 35680:case 36300:case 36308:case 36293:return O2;case 36289:case 36303:case 36311:case 36292:return F2}}function z2(t,e){t.uniform1fv(this.addr,e)}function B2(t,e){const n=_o(e,this.size,2);t.uniform2fv(this.addr,n)}function H2(t,e){const n=_o(e,this.size,3);t.uniform3fv(this.addr,n)}function G2(t,e){const n=_o(e,this.size,4);t.uniform4fv(this.addr,n)}function V2(t,e){const n=_o(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function W2(t,e){const n=_o(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function j2(t,e){const n=_o(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function X2(t,e){t.uniform1iv(this.addr,e)}function Y2(t,e){t.uniform2iv(this.addr,e)}function $2(t,e){t.uniform3iv(this.addr,e)}function q2(t,e){t.uniform4iv(this.addr,e)}function K2(t,e){t.uniform1uiv(this.addr,e)}function Z2(t,e){t.uniform2uiv(this.addr,e)}function J2(t,e){t.uniform3uiv(this.addr,e)}function Q2(t,e){t.uniform4uiv(this.addr,e)}function eA(t,e,n){const i=this.cache,r=e.length,s=fu(n,r);$t(i,s)||(t.uniform1iv(this.addr,s),qt(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=Mf:o=P_;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function tA(t,e,n){const i=this.cache,r=e.length,s=fu(n,r);$t(i,s)||(t.uniform1iv(this.addr,s),qt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||D_,s[o])}function nA(t,e,n){const i=this.cache,r=e.length,s=fu(n,r);$t(i,s)||(t.uniform1iv(this.addr,s),qt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||L_,s[o])}function iA(t,e,n){const i=this.cache,r=e.length,s=fu(n,r);$t(i,s)||(t.uniform1iv(this.addr,s),qt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||N_,s[o])}function rA(t){switch(t){case 5126:return z2;case 35664:return B2;case 35665:return H2;case 35666:return G2;case 35674:return V2;case 35675:return W2;case 35676:return j2;case 5124:case 35670:return X2;case 35667:case 35671:return Y2;case 35668:case 35672:return $2;case 35669:case 35673:return q2;case 5125:return K2;case 36294:return Z2;case 36295:return J2;case 36296:return Q2;case 35678:case 36198:case 36298:case 36306:case 35682:return eA;case 35679:case 36299:case 36307:return tA;case 35680:case 36300:case 36308:case 36293:return nA;case 36289:case 36303:case 36311:case 36292:return iA}}class sA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=k2(n.type)}}class oA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=rA(n.type)}}class aA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Od=/(\w+)(\])?(\[|\.)?/g;function ag(t,e){t.seq.push(e),t.map[e.id]=e}function lA(t,e,n){const i=t.name,r=i.length;for(Od.lastIndex=0;;){const s=Od.exec(i),o=Od.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){ag(n,c===void 0?new sA(a,t,e):new oA(a,t,e));break}else{let p=n.map[a];p===void 0&&(p=new aA(a),ag(n,p)),n=p}}}class dc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);lA(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function lg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const cA=37297;let uA=0;function dA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const cg=new Ke;function hA(t){ct._getMatrix(cg,ct.workingColorSpace,t);const e=`mat3( ${cg.elements.map(n=>n.toFixed(4))} )`;switch(ct.getTransfer(t)){case Bc:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return je("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function ug(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+dA(t.getShaderSource(e),a)}else return s}function fA(t,e){const n=hA(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const pA={[qv]:"Linear",[Kv]:"Reinhard",[Zv]:"Cineon",[Jv]:"ACESFilmic",[e_]:"AgX",[t_]:"Neutral",[Qv]:"Custom"};function mA(t,e){const n=pA[e];return n===void 0?(je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Xl=new N;function gA(){ct.getLuminanceCoefficients(Xl);const t=Xl.x.toFixed(4),e=Xl.y.toFixed(4),n=Xl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function vA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function _A(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function qo(t){return t!==""}function dg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ef(t){return t.replace(yA,MA)}const SA=new Map;function MA(t,e){let n=tt[e];if(n===void 0){const i=SA.get(e);if(i!==void 0)n=tt[i],je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ef(n)}const EA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fg(t){return t.replace(EA,wA)}function wA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function pg(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const bA={[oc]:"SHADOWMAP_TYPE_PCF",[Yo]:"SHADOWMAP_TYPE_VSM"};function TA(t){return bA[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const AA={[us]:"ENVMAP_TYPE_CUBE",[fo]:"ENVMAP_TYPE_CUBE",[uu]:"ENVMAP_TYPE_CUBE_UV"};function CA(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":AA[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const RA={[fo]:"ENVMAP_MODE_REFRACTION"};function PA(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":RA[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const NA={[$v]:"ENVMAP_BLENDING_MULTIPLY",[IM]:"ENVMAP_BLENDING_MIX",[UM]:"ENVMAP_BLENDING_ADD"};function DA(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":NA[t.combine]||"ENVMAP_BLENDING_NONE"}function LA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function IA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=TA(n),c=CA(n),f=PA(n),p=DA(n),d=LA(n),m=xA(n),g=vA(s),M=r.createProgram();let x,h,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(qo).join(`
`),x.length>0&&(x+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(qo).join(`
`),h.length>0&&(h+=`
`)):(x=[pg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),h=[pg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Li?"#define TONE_MAPPING":"",n.toneMapping!==Li?tt.tonemapping_pars_fragment:"",n.toneMapping!==Li?mA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,fA("linearToOutputTexel",n.outputColorSpace),gA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(qo).join(`
`)),o=Ef(o),o=dg(o,n),o=hg(o,n),a=Ef(a),a=dg(a,n),a=hg(a,n),o=fg(o),a=fg(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,x=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,h=["#define varying in",n.glslVersion===g0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===g0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const E=_+x+o,S=_+h+a,b=lg(r,r.VERTEX_SHADER,E),T=lg(r,r.FRAGMENT_SHADER,S);r.attachShader(M,b),r.attachShader(M,T),n.index0AttributeName!==void 0?r.bindAttribLocation(M,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function C(D){if(t.debug.checkShaderErrors){const O=r.getProgramInfoLog(M)||"",U=r.getShaderInfoLog(b)||"",L=r.getShaderInfoLog(T)||"",V=O.trim(),ee=U.trim(),q=L.trim();let G=!0,H=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(G=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,M,b,T);else{const X=ug(r,b,"vertex"),Q=ug(r,T,"fragment");gt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+V+`
`+X+`
`+Q)}else V!==""?je("WebGLProgram: Program Info Log:",V):(ee===""||q==="")&&(H=!1);H&&(D.diagnostics={runnable:G,programLog:V,vertexShader:{log:ee,prefix:x},fragmentShader:{log:q,prefix:h}})}r.deleteShader(b),r.deleteShader(T),v=new dc(r,M),A=_A(r,M)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(M,cA)),R},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=uA++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=b,this.fragmentShader=T,this}let UA=0;class OA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new FA(e),n.set(e,i)),i}}class FA{constructor(e){this.id=UA++,this.code=e,this.usedTimes=0}}function kA(t){return t===ds||t===Fc||t===kc}function zA(t,e,n,i,r,s){const o=new h_,a=new OA,l=new Set,c=[],f=new Map,p=i.logarithmicDepthBuffer;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function M(v,A,R,D,O,U){const L=D.fog,V=O.geometry,ee=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,G=e.get(v.envMap||ee,q),H=G&&G.mapping===uu?G.image.height:null,X=m[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&je("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const Q=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,se=Q!==void 0?Q.length:0;let ue=0;V.morphAttributes.position!==void 0&&(ue=1),V.morphAttributes.normal!==void 0&&(ue=2),V.morphAttributes.color!==void 0&&(ue=3);let He,Ae,Ve,Z;if(X){const St=Ti[X];He=St.vertexShader,Ae=St.fragmentShader}else{He=v.vertexShader,Ae=v.fragmentShader;const St=a.getVertexShaderStage(v),pt=a.getFragmentShaderStage(v);a.update(v,St,pt),Ve=St.id,Z=pt.id}const J=t.getRenderTarget(),pe=t.state.buffers.depth.getReversed(),ke=O.isInstancedMesh===!0,me=O.isBatchedMesh===!0,Ie=!!v.map,Qe=!!v.matcap,Be=!!G,$e=!!v.aoMap,st=!!v.lightMap,Ge=!!v.bumpMap&&v.wireframe===!1,ot=!!v.normalMap,yt=!!v.displacementMap,At=!!v.emissiveMap,ne=!!v.metalnessMap,Pe=!!v.roughnessMap,I=v.anisotropy>0,Ze=v.clearcoat>0,qe=v.dispersion>0,P=v.retroreflectivity>0,y=v.iridescence>0,B=v.sheen>0,j=v.transmission>0,te=I&&!!v.anisotropyMap,ae=Ze&&!!v.clearcoatMap,he=Ze&&!!v.clearcoatNormalMap,z=Ze&&!!v.clearcoatRoughnessMap,W=y&&!!v.iridescenceMap,le=y&&!!v.iridescenceThicknessMap,Ee=B&&!!v.sheenColorMap,ie=B&&!!v.sheenRoughnessMap,de=!!v.specularMap,be=!!v.specularColorMap,Oe=!!v.specularIntensityMap,Xe=j&&!!v.transmissionMap,k=j&&!!v.thicknessMap,ge=!!v.gradientMap,re=!!v.alphaMap,xe=v.alphaTest>0,ye=!!v.alphaHash,oe=!!v.extensions;let Fe=Li;v.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Fe=t.toneMapping);const Le={shaderID:X,shaderType:v.type,shaderName:v.name,vertexShader:He,fragmentShader:Ae,defines:v.defines,customVertexShaderID:Ve,customFragmentShaderID:Z,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:me,batchingColor:me&&O._colorsTexture!==null,instancing:ke,instancingColor:ke&&O.instanceColor!==null,instancingMorph:ke&&O.morphTexture!==null,outputColorSpace:J===null?t.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:ct.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ie,matcap:Qe,envMap:Be,envMapMode:Be&&G.mapping,envMapCubeUVHeight:H,aoMap:$e,lightMap:st,bumpMap:Ge,normalMap:ot,displacementMap:yt,emissiveMap:At,normalMapObjectSpace:ot&&v.normalMapType===kM,normalMapTangentSpace:ot&&v.normalMapType===yf,packedNormalMap:ot&&v.normalMapType===yf&&kA(v.normalMap.format),metalnessMap:ne,roughnessMap:Pe,anisotropy:I,anisotropyMap:te,clearcoat:Ze,clearcoatMap:ae,clearcoatNormalMap:he,clearcoatRoughnessMap:z,dispersion:qe,retroreflection:P,iridescence:y,iridescenceMap:W,iridescenceThicknessMap:le,sheen:B,sheenColorMap:Ee,sheenRoughnessMap:ie,specularMap:de,specularColorMap:be,specularIntensityMap:Oe,transmission:j,transmissionMap:Xe,thicknessMap:k,gradientMap:ge,opaque:v.transparent===!1&&v.blending===sa&&v.alphaToCoverage===!1,alphaMap:re,alphaTest:xe,alphaHash:ye,combine:v.combine,mapUv:Ie&&g(v.map.channel),aoMapUv:$e&&g(v.aoMap.channel),lightMapUv:st&&g(v.lightMap.channel),bumpMapUv:Ge&&g(v.bumpMap.channel),normalMapUv:ot&&g(v.normalMap.channel),displacementMapUv:yt&&g(v.displacementMap.channel),emissiveMapUv:At&&g(v.emissiveMap.channel),metalnessMapUv:ne&&g(v.metalnessMap.channel),roughnessMapUv:Pe&&g(v.roughnessMap.channel),anisotropyMapUv:te&&g(v.anisotropyMap.channel),clearcoatMapUv:ae&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:he&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:W&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:le&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:ie&&g(v.sheenRoughnessMap.channel),specularMapUv:de&&g(v.specularMap.channel),specularColorMapUv:be&&g(v.specularColorMap.channel),specularIntensityMapUv:Oe&&g(v.specularIntensityMap.channel),transmissionMapUv:Xe&&g(v.transmissionMap.channel),thicknessMapUv:k&&g(v.thicknessMap.channel),alphaMapUv:re&&g(v.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ot||I),vertexNormals:!!V.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!V.attributes.uv&&(Ie||re),fog:!!L,useFog:v.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||V.attributes.normal===void 0&&ot===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:pe,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:ue,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Ie&&v.map.isVideoTexture===!0&&ct.getTransfer(v.map.colorSpace)===Mt,decodeVideoTextureEmissive:At&&v.emissiveMap.isVideoTexture===!0&&ct.getTransfer(v.emissiveMap.colorSpace)===Mt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ci,flipSided:v.side===In,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:oe&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&v.extensions.multiDraw===!0||me)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Le.vertexUv1s=l.has(1),Le.vertexUv2s=l.has(2),Le.vertexUv3s=l.has(3),l.clear(),Le}function x(v){const A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(const R in v.defines)A.push(R),A.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(h(A,v),_(A,v),A.push(t.outputColorSpace)),A.push(v.customProgramCacheKey),A.join()}function h(v,A){v.push(A.precision),v.push(A.outputColorSpace),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.mapUv),v.push(A.alphaMapUv),v.push(A.lightMapUv),v.push(A.aoMapUv),v.push(A.bumpMapUv),v.push(A.normalMapUv),v.push(A.displacementMapUv),v.push(A.emissiveMapUv),v.push(A.metalnessMapUv),v.push(A.roughnessMapUv),v.push(A.anisotropyMapUv),v.push(A.clearcoatMapUv),v.push(A.clearcoatNormalMapUv),v.push(A.clearcoatRoughnessMapUv),v.push(A.iridescenceMapUv),v.push(A.iridescenceThicknessMapUv),v.push(A.sheenColorMapUv),v.push(A.sheenRoughnessMapUv),v.push(A.specularMapUv),v.push(A.specularColorMapUv),v.push(A.specularIntensityMapUv),v.push(A.transmissionMapUv),v.push(A.thicknessMapUv),v.push(A.combine),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numSunLights),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numSunLightShadows),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.numLightProbes),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function _(v,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.retroreflection&&o.enable(24),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function E(v){const A=m[v.type];let R;if(A){const D=Ti[A];R=tw.clone(D.uniforms)}else R=v.uniforms;return R}function S(v,A){let R=f.get(A);return R!==void 0?++R.usedTimes:(R=new IA(t,A,v,r),c.push(R),f.set(A,R)),R}function b(v){if(--v.usedTimes===0){const A=c.indexOf(v);c[A]=c[c.length-1],c.pop(),f.delete(v.cacheKey),v.destroy()}}function T(v){a.remove(v)}function C(){a.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:E,acquireProgram:S,releaseProgram:b,releaseShaderCache:T,programs:c,dispose:C}}function BA(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function HA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function mg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function gg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function a(d,m,g,M,x,h){let _=t[e];return _===void 0?(_={id:d.id,object:d,geometry:m,material:g,materialVariant:o(d),groupOrder:M,renderOrder:d.renderOrder,z:x,group:h},t[e]=_):(_.id=d.id,_.object=d,_.geometry=m,_.material=g,_.materialVariant=o(d),_.groupOrder=M,_.renderOrder=d.renderOrder,_.z=x,_.group=h),e++,_}function l(d,m,g,M,x,h,_){_.reversedDepth===!0&&(x=-x);const E=a(d,m,g,M,x,h);g.transmission>0?i.push(E):g.transparent===!0?r.push(E):n.push(E)}function c(d,m,g,M,x,h){const _=a(d,m,g,M,x,h);g.transmission>0?i.unshift(_):g.transparent===!0?r.unshift(_):n.unshift(_)}function f(d,m){n.length>1&&n.sort(d||HA),i.length>1&&i.sort(m||mg),r.length>1&&r.sort(m||mg)}function p(){for(let d=e,m=t.length;d<m;d++){const g=t[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:p,sort:f}}function GA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new gg,t.set(i,[o])):r>=s.length?(o=new gg,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function VA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new N,color:new nt};break;case"SpotLight":n={position:new N,direction:new N,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new nt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":n={color:new nt,position:new N,halfWidth:new N,halfHeight:new N};break}return t[e.id]=n,n}}}function WA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let jA=0;function XA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function YA(t){const e=new VA,n=WA(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const r=new N,s=new Dt,o=new Dt;function a(c){let f=0,p=0,d=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let m=0,g=0,M=0,x=0,h=0,_=0,E=0,S=0,b=0,T=0,C=0,v=0,A=0,R=0;c.sort(XA);for(let O=0,U=c.length;O<U;O++){const L=c[O],V=L.color,ee=L.intensity,q=L.distance;let G=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ds?G=L.shadow.map.texture:G=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)f+=V.r*ee,p+=V.g*ee,d+=V.b*ee;else if(L.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(L.sh.coefficients[H],ee);R++}else if(L.isSunLight){const H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const X=L.shadow,Q=n.get(L);Q.shadowIntensity=X.intensity,Q.shadowBias=X.bias,Q.shadowNormalBias=X.normalBias,Q.shadowRadius=X.radius,Q.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),i.sunShadow[g]=Q,i.sunShadowMap[g]=G;const se=X.getViewportCount();for(let ue=0;ue<se;ue++)i.sunShadowMatrix[M+ue]=X.getMatrix(ue),i.sunShadowCascade[M+ue]=X._cascadeData[ue];M+=se,g++}i.sun[m]=H,m++}else if(L.isDirectionalLight){const H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const X=L.shadow,Q=n.get(L);Q.shadowIntensity=X.intensity,Q.shadowBias=X.bias,Q.shadowNormalBias=X.normalBias,Q.shadowRadius=X.radius,Q.shadowMapSize=X.mapSize,i.directionalShadow[x]=Q,i.directionalShadowMap[x]=G,i.directionalShadowMatrix[x]=L.shadow.matrix,b++}i.directional[x]=H,x++}else if(L.isSpotLight){const H=e.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(V).multiplyScalar(ee),H.distance=q,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,i.spot[_]=H;const X=L.shadow;if(L.map&&(i.spotLightMap[v]=L.map,v++,X.updateMatrices(L),L.castShadow&&A++),i.spotLightMatrix[_]=X.matrix,L.castShadow){const Q=n.get(L);Q.shadowIntensity=X.intensity,Q.shadowBias=X.bias,Q.shadowNormalBias=X.normalBias,Q.shadowRadius=X.radius,Q.shadowMapSize=X.mapSize,i.spotShadow[_]=Q,i.spotShadowMap[_]=G,C++}_++}else if(L.isRectAreaLight){const H=e.get(L);H.color.copy(V).multiplyScalar(ee),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),i.rectArea[E]=H,E++}else if(L.isPointLight){const H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),H.distance=L.distance,H.decay=L.decay,L.castShadow){const X=L.shadow,Q=n.get(L);Q.shadowIntensity=X.intensity,Q.shadowBias=X.bias,Q.shadowNormalBias=X.normalBias,Q.shadowRadius=X.radius,Q.shadowMapSize=X.mapSize,Q.shadowCameraNear=X.camera.near,Q.shadowCameraFar=X.camera.far,i.pointShadow[h]=Q,i.pointShadowMap[h]=G,i.pointShadowMatrix[h]=L.shadow.matrix,T++}i.point[h]=H,h++}else if(L.isHemisphereLight){const H=e.get(L);H.skyColor.copy(L.color).multiplyScalar(ee),H.groundColor.copy(L.groundColor).multiplyScalar(ee),i.hemi[S]=H,S++}}E>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=d;const D=i.hash;(D.sunLength!==m||D.directionalLength!==x||D.pointLength!==h||D.spotLength!==_||D.rectAreaLength!==E||D.hemiLength!==S||D.numSunShadows!==g||D.numDirectionalShadows!==b||D.numPointShadows!==T||D.numSpotShadows!==C||D.numSpotMaps!==v||D.numLightProbes!==R)&&(i.sun.length=m,i.directional.length=x,i.spot.length=_,i.rectArea.length=E,i.point.length=h,i.hemi.length=S,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+v-A,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,D.sunLength=m,D.directionalLength=x,D.pointLength=h,D.spotLength=_,D.rectAreaLength=E,D.hemiLength=S,D.numSunShadows=g,D.numDirectionalShadows=b,D.numPointShadows=T,D.numSpotShadows=C,D.numSpotMaps=v,D.numLightProbes=R,i.version=jA++)}function l(c,f){let p=0,d=0,m=0,g=0,M=0,x=0;const h=f.matrixWorldInverse;for(let _=0,E=c.length;_<E;_++){const S=c[_];if(S.isSunLight){const b=i.sun[p];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(h),p++}else if(S.isDirectionalLight){const b=i.directional[d];b.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(h),d++}else if(S.isSpotLight){const b=i.spot[g];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(h),b.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(h),g++}else if(S.isRectAreaLight){const b=i.rectArea[M];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(h),o.identity(),s.copy(S.matrixWorld),s.premultiply(h),o.extractRotation(s),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),M++}else if(S.isPointLight){const b=i.point[m];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(h),m++}else if(S.isHemisphereLight){const b=i.hemi[x];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(h),x++}}}return{setup:a,setupView:l,state:i}}function xg(t){const e=new YA(t),n=[],i=[],r=[];function s(d){p.camera=d,n.length=0,i.length=0,r.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function l(d){r.push(d)}function c(){e.setup(n)}function f(d){e.setupView(n,d)}const p={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:c,setupLightsView:f,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function $A(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new xg(t),e.set(r,[a])):s>=o.length?(a=new xg(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const qA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,KA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ZA=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],JA=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],vg=new Dt,Go=new N,Fd=new N;function QA(t,e,n){let i=new Up;const r=new Re,s=new Re,o=new Ot,a=new ow,l=new aw,c={},f=n.maxTextureSize,p={[cs]:In,[In]:cs,[Ci]:Ci},d=new Fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:qA,fragmentShader:KA}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Kt;g.setAttribute("position",new Ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new ve(g,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oc;let h=this.type;this.render=function(T,C,v){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||T.length===0)return;this.type===jv&&(je("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=oc);const A=t.getRenderTarget(),R=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),O=t.state;O.setBlending(Qi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const U=h!==this.type;U&&C.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(V=>V.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,V=T.length;L<V;L++){const ee=T[L],q=ee.shadow;if(q===void 0){je("WebGLShadowMap:",ee,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const G=q.getFrameExtents();r.multiply(G),s.copy(q.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/G.x),r.x=s.x*G.x,q.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/G.y),r.y=s.y*G.y,q.mapSize.y=s.y));const H=t.state.buffers.depth.getReversed();if(q.camera._reversedDepth=H,q.map===null||U===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Yo){if(ee.isPointLight){je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new xi(r.x,r.y,{format:ds,type:Oi,minFilter:fn,magFilter:fn,generateMipmaps:!1}),q.map.texture.name=ee.name+".shadowMap",q.map.depthTexture=new La(r.x,r.y,Ri),q.map.depthTexture.name=ee.name+".shadowMapDepth",q.map.depthTexture.format=sr,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=sn,q.map.depthTexture.magFilter=sn}else ee.isPointLight?(q.map=new R_(r.x),q.map.depthTexture=new kE(r.x,Ui)):(q.map=new xi(r.x,r.y),q.map.depthTexture=new La(r.x,r.y,Ui)),q.map.depthTexture.name=ee.name+".shadowMap",q.map.depthTexture.format=sr,this.type===oc?(q.map.depthTexture.compareFunction=H?Dp:Np,q.map.depthTexture.minFilter=fn,q.map.depthTexture.magFilter=fn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=sn,q.map.depthTexture.magFilter=sn);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==r.x||q.map.height!==r.y)&&q.map.setSize(r.x,r.y);const X=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();ee.isPointLight!==!0&&q.updateMatrices(ee,v);for(let Q=0;Q<X;Q++){const se=q.getCamera(Q);if(ee.isPointLight){const ue=q.camera,He=q.matrix,Ae=ee.distance||ue.far;Ae!==ue.far&&(ue.far=Ae,ue.updateProjectionMatrix()),Go.setFromMatrixPosition(ee.matrixWorld),ue.position.copy(Go),Fd.copy(ue.position),Fd.add(ZA[Q]),ue.up.copy(JA[Q]),ue.lookAt(Fd),ue.updateMatrixWorld(),He.makeTranslation(-Go.x,-Go.y,-Go.z),vg.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),q._frustum.setFromProjectionMatrix(vg,ue.coordinateSystem,ue.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)t.setRenderTarget(q.map,Q),t.clear();else{Q===0&&(t.setRenderTarget(q.map),t.clear());const ue=q.getViewport(Q);o.set(s.x*ue.x,s.y*ue.y,s.x*ue.z,s.y*ue.w),O.viewport(o)}i=q.getFrustum(Q),S(C,v,se,ee,this.type)}q.isPointLightShadow!==!0&&this.type===Yo&&_(q,v),q.needsUpdate=!1}h=this.type,x.needsUpdate=!1,t.setRenderTarget(A,R,D)};function _(T,C){const v=e.update(M);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null?T.mapPass=new xi(r.x,r.y,{format:ds,type:Oi}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(C,null,v,d,M,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value.set(T.map.width,T.map.height),m.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(C,null,v,m,M,null)}function E(T,C,v,A){let R=null;const D=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)R=D;else if(R=v.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const O=R.uuid,U=C.uuid;let L=c[O];L===void 0&&(L={},c[O]=L);let V=L[U];V===void 0&&(V=R.clone(),L[U]=V,C.addEventListener("dispose",b)),R=V}if(R.visible=C.visible,R.wireframe=C.wireframe,A===Yo?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:p[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,v.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const O=t.properties.get(R);O.light=v}return R}function S(T,C,v,A,R){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&R===Yo)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);const U=e.update(T),L=T.material;if(Array.isArray(L)){const V=U.groups;for(let ee=0,q=V.length;ee<q;ee++){const G=V[ee],H=L[G.materialIndex];if(H&&H.visible){const X=E(T,H,A,R);T.onBeforeShadow(t,T,C,v,U,X,G),t.renderBufferDirect(v,null,U,X,T,G),T.onAfterShadow(t,T,C,v,U,X,G)}}}else if(L.visible){const V=E(T,L,A,R);T.onBeforeShadow(t,T,C,v,U,V,null),t.renderBufferDirect(v,null,U,V,T,null),T.onAfterShadow(t,T,C,v,U,V,null)}}const O=T.children;for(let U=0,L=O.length;U<L;U++)S(O[U],C,v,A,R)}function b(T){T.target.removeEventListener("dispose",b);for(const v in c){const A=c[v],R=T.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}function eC(t,e){function n(){let k=!1;const ge=new Ot;let re=null;const xe=new Ot(0,0,0,0);return{setMask:function(ye){re!==ye&&!k&&(t.colorMask(ye,ye,ye,ye),re=ye)},setLocked:function(ye){k=ye},setClear:function(ye,oe,Fe,Le,St){St===!0&&(ye*=Le,oe*=Le,Fe*=Le),ge.set(ye,oe,Fe,Le),xe.equals(ge)===!1&&(t.clearColor(ye,oe,Fe,Le),xe.copy(ge))},reset:function(){k=!1,re=null,xe.set(-1,0,0,0)}}}function i(){let k=!1,ge=!1,re=null,xe=null,ye=null;return{setReversed:function(oe){if(ge!==oe){const Fe=e.get("EXT_clip_control");oe?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),ge=oe;const Le=ye;ye=null,this.setClear(Le)}},getReversed:function(){return ge},setTest:function(oe){oe?J(t.DEPTH_TEST):pe(t.DEPTH_TEST)},setMask:function(oe){re!==oe&&!k&&(t.depthMask(oe),re=oe)},setFunc:function(oe){if(ge&&(oe=KM[oe]),xe!==oe){switch(oe){case Ih:t.depthFunc(t.NEVER);break;case Uh:t.depthFunc(t.ALWAYS);break;case Oh:t.depthFunc(t.LESS);break;case Ca:t.depthFunc(t.LEQUAL);break;case Fh:t.depthFunc(t.EQUAL);break;case kh:t.depthFunc(t.GEQUAL);break;case zh:t.depthFunc(t.GREATER);break;case Bh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}xe=oe}},setLocked:function(oe){k=oe},setClear:function(oe){ye!==oe&&(ye=oe,ge&&(oe=1-oe),t.clearDepth(oe))},reset:function(){k=!1,re=null,xe=null,ye=null,ge=!1}}}function r(){let k=!1,ge=null,re=null,xe=null,ye=null,oe=null,Fe=null,Le=null,St=null;return{setTest:function(pt){k||(pt?J(t.STENCIL_TEST):pe(t.STENCIL_TEST))},setMask:function(pt){ge!==pt&&!k&&(t.stencilMask(pt),ge=pt)},setFunc:function(pt,En,Xn){(re!==pt||xe!==En||ye!==Xn)&&(t.stencilFunc(pt,En,Xn),re=pt,xe=En,ye=Xn)},setOp:function(pt,En,Xn){(oe!==pt||Fe!==En||Le!==Xn)&&(t.stencilOp(pt,En,Xn),oe=pt,Fe=En,Le=Xn)},setLocked:function(pt){k=pt},setClear:function(pt){St!==pt&&(t.clearStencil(pt),St=pt)},reset:function(){k=!1,ge=null,re=null,xe=null,ye=null,oe=null,Fe=null,Le=null,St=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let f={},p={},d={},m=new WeakMap,g=[],M=null,x=!1,h=null,_=null,E=null,S=null,b=null,T=null,C=null,v=new nt(0,0,0),A=0,R=!1,D=null,O=null,U=null,L=null,V=null;const ee=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,G=0;const H=t.getParameter(t.VERSION);H.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(H)[1]),q=G>=1):H.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),q=G>=2);let X=null,Q={};const se=t.getParameter(t.SCISSOR_BOX),ue=t.getParameter(t.VIEWPORT),He=new Ot().fromArray(se),Ae=new Ot().fromArray(ue);function Ve(k,ge,re,xe){const ye=new Uint8Array(4),oe=t.createTexture();t.bindTexture(k,oe),t.texParameteri(k,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(k,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Fe=0;Fe<re;Fe++)k===t.TEXTURE_3D||k===t.TEXTURE_2D_ARRAY?t.texImage3D(ge,0,t.RGBA,1,1,xe,0,t.RGBA,t.UNSIGNED_BYTE,ye):t.texImage2D(ge+Fe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ye);return oe}const Z={};Z[t.TEXTURE_2D]=Ve(t.TEXTURE_2D,t.TEXTURE_2D,1),Z[t.TEXTURE_CUBE_MAP]=Ve(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[t.TEXTURE_2D_ARRAY]=Ve(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Z[t.TEXTURE_3D]=Ve(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(t.DEPTH_TEST),o.setFunc(Ca),Ge(!1),ot(f0),J(t.CULL_FACE),$e(Qi);function J(k){f[k]!==!0&&(t.enable(k),f[k]=!0)}function pe(k){f[k]!==!1&&(t.disable(k),f[k]=!1)}function ke(k,ge){return d[k]!==ge?(t.bindFramebuffer(k,ge),d[k]=ge,k===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=ge),k===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=ge),!0):!1}function me(k,ge){let re=g,xe=!1;if(k){re=m.get(ge),re===void 0&&(re=[],m.set(ge,re));const ye=k.textures;if(re.length!==ye.length||re[0]!==t.COLOR_ATTACHMENT0){for(let oe=0,Fe=ye.length;oe<Fe;oe++)re[oe]=t.COLOR_ATTACHMENT0+oe;re.length=ye.length,xe=!0}}else re[0]!==t.BACK&&(re[0]=t.BACK,xe=!0);xe&&t.drawBuffers(re)}function Ie(k){return M!==k?(t.useProgram(k),M=k,!0):!1}const Qe={[Ns]:t.FUNC_ADD,[xM]:t.FUNC_SUBTRACT,[vM]:t.FUNC_REVERSE_SUBTRACT};Qe[_M]=t.MIN,Qe[yM]=t.MAX;const Be={[SM]:t.ZERO,[MM]:t.ONE,[EM]:t.SRC_COLOR,[Xv]:t.SRC_ALPHA,[RM]:t.SRC_ALPHA_SATURATE,[AM]:t.DST_COLOR,[bM]:t.DST_ALPHA,[wM]:t.ONE_MINUS_SRC_COLOR,[Yv]:t.ONE_MINUS_SRC_ALPHA,[CM]:t.ONE_MINUS_DST_COLOR,[TM]:t.ONE_MINUS_DST_ALPHA,[PM]:t.CONSTANT_COLOR,[NM]:t.ONE_MINUS_CONSTANT_COLOR,[DM]:t.CONSTANT_ALPHA,[LM]:t.ONE_MINUS_CONSTANT_ALPHA};function $e(k,ge,re,xe,ye,oe,Fe,Le,St,pt){if(k===Qi){x===!0&&(pe(t.BLEND),x=!1);return}if(x===!1&&(J(t.BLEND),x=!0),k!==gM){if(k!==h||pt!==R){if((_!==Ns||b!==Ns)&&(t.blendEquation(t.FUNC_ADD),_=Ns,b=Ns),pt)switch(k){case sa:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Lh:t.blendFunc(t.ONE,t.ONE);break;case p0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case m0:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:gt("WebGLState: Invalid blending: ",k);break}else switch(k){case sa:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Lh:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case p0:gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case m0:gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:gt("WebGLState: Invalid blending: ",k);break}E=null,S=null,T=null,C=null,v.set(0,0,0),A=0,h=k,R=pt}return}ye=ye||ge,oe=oe||re,Fe=Fe||xe,(ge!==_||ye!==b)&&(t.blendEquationSeparate(Qe[ge],Qe[ye]),_=ge,b=ye),(re!==E||xe!==S||oe!==T||Fe!==C)&&(t.blendFuncSeparate(Be[re],Be[xe],Be[oe],Be[Fe]),E=re,S=xe,T=oe,C=Fe),(Le.equals(v)===!1||St!==A)&&(t.blendColor(Le.r,Le.g,Le.b,St),v.copy(Le),A=St),h=k,R=!1}function st(k,ge){k.side===Ci?pe(t.CULL_FACE):J(t.CULL_FACE);let re=k.side===In;ge&&(re=!re),Ge(re),k.blending===sa&&k.transparent===!1?$e(Qi):$e(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),s.setMask(k.colorWrite);const xe=k.stencilWrite;a.setTest(xe),xe&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),At(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?J(t.SAMPLE_ALPHA_TO_COVERAGE):pe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(k){D!==k&&(k?t.frontFace(t.CW):t.frontFace(t.CCW),D=k)}function ot(k){k!==pM?(J(t.CULL_FACE),k!==O&&(k===f0?t.cullFace(t.BACK):k===mM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):pe(t.CULL_FACE),O=k}function yt(k){k!==U&&(q&&t.lineWidth(k),U=k)}function At(k,ge,re){k?(J(t.POLYGON_OFFSET_FILL),(L!==ge||V!==re)&&(L=ge,V=re,o.getReversed()&&(ge=-ge),t.polygonOffset(ge,re))):pe(t.POLYGON_OFFSET_FILL)}function ne(k){k?J(t.SCISSOR_TEST):pe(t.SCISSOR_TEST)}function Pe(k){k===void 0&&(k=t.TEXTURE0+ee-1),X!==k&&(t.activeTexture(k),X=k)}function I(k,ge,re){re===void 0&&(X===null?re=t.TEXTURE0+ee-1:re=X);let xe=Q[re];xe===void 0&&(xe={type:void 0,texture:void 0},Q[re]=xe),(xe.type!==k||xe.texture!==ge)&&(X!==re&&(t.activeTexture(re),X=re),t.bindTexture(k,ge||Z[k]),xe.type=k,xe.texture=ge)}function Ze(){const k=Q[X];k!==void 0&&k.type!==void 0&&(t.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function qe(){try{t.compressedTexImage2D(...arguments)}catch(k){gt("WebGLState:",k)}}function P(){try{t.compressedTexImage3D(...arguments)}catch(k){gt("WebGLState:",k)}}function y(){try{t.texSubImage2D(...arguments)}catch(k){gt("WebGLState:",k)}}function B(){try{t.texSubImage3D(...arguments)}catch(k){gt("WebGLState:",k)}}function j(){try{t.compressedTexSubImage2D(...arguments)}catch(k){gt("WebGLState:",k)}}function te(){try{t.compressedTexSubImage3D(...arguments)}catch(k){gt("WebGLState:",k)}}function ae(){try{t.texStorage2D(...arguments)}catch(k){gt("WebGLState:",k)}}function he(){try{t.texStorage3D(...arguments)}catch(k){gt("WebGLState:",k)}}function z(){try{t.texImage2D(...arguments)}catch(k){gt("WebGLState:",k)}}function W(){try{t.texImage3D(...arguments)}catch(k){gt("WebGLState:",k)}}function le(k){return p[k]!==void 0?p[k]:t.getParameter(k)}function Ee(k,ge){p[k]!==ge&&(t.pixelStorei(k,ge),p[k]=ge)}function ie(k){He.equals(k)===!1&&(t.scissor(k.x,k.y,k.z,k.w),He.copy(k))}function de(k){Ae.equals(k)===!1&&(t.viewport(k.x,k.y,k.z,k.w),Ae.copy(k))}function be(k,ge){let re=c.get(ge);re===void 0&&(re=new WeakMap,c.set(ge,re));let xe=re.get(k);xe===void 0&&(xe=t.getUniformBlockIndex(ge,k.name),re.set(k,xe))}function Oe(k,ge){const xe=c.get(ge).get(k);l.get(ge)!==xe&&(t.uniformBlockBinding(ge,xe,k.__bindingPointIndex),l.set(ge,xe))}function Xe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),f={},p={},X=null,Q={},d={},m=new WeakMap,g=[],M=null,x=!1,h=null,_=null,E=null,S=null,b=null,T=null,C=null,v=new nt(0,0,0),A=0,R=!1,D=null,O=null,U=null,L=null,V=null,He.set(0,0,t.canvas.width,t.canvas.height),Ae.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:J,disable:pe,bindFramebuffer:ke,drawBuffers:me,useProgram:Ie,setBlending:$e,setMaterial:st,setFlipSided:Ge,setCullFace:ot,setLineWidth:yt,setPolygonOffset:At,setScissorTest:ne,activeTexture:Pe,bindTexture:I,unbindTexture:Ze,compressedTexImage2D:qe,compressedTexImage3D:P,texImage2D:z,texImage3D:W,pixelStorei:Ee,getParameter:le,updateUBOMapping:be,uniformBlockBinding:Oe,texStorage2D:ae,texStorage3D:he,texSubImage2D:y,texSubImage3D:B,compressedTexSubImage2D:j,compressedTexSubImage3D:te,scissor:ie,viewport:de,reset:Xe}}function tC(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Re,f=new WeakMap,p=new Set;let d;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(P,y){return g?new OffscreenCanvas(P,y):Hc("canvas")}function x(P,y,B){let j=1;const te=qe(P);if((te.width>B||te.height>B)&&(j=B/Math.max(te.width,te.height)),j<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ae=Math.floor(j*te.width),he=Math.floor(j*te.height);d===void 0&&(d=M(ae,he));const z=y?M(ae,he):d;return z.width=ae,z.height=he,z.getContext("2d").drawImage(P,0,0,ae,he),je("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+ae+"x"+he+")."),z}else return"data"in P&&je("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),P;return P}function h(P){return P.generateMipmaps}function _(P){t.generateMipmap(P)}function E(P){return P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?t.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(P,y,B,j,te,ae=!1){if(P!==null){if(t[P]!==void 0)return t[P];je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let he;j&&(he=e.get("EXT_texture_norm16"),he||je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let z=y;if(y===t.RED&&(B===t.FLOAT&&(z=t.R32F),B===t.HALF_FLOAT&&(z=t.R16F),B===t.UNSIGNED_BYTE&&(z=t.R8),B===t.UNSIGNED_SHORT&&he&&(z=he.R16_EXT),B===t.SHORT&&he&&(z=he.R16_SNORM_EXT)),y===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(z=t.R8UI),B===t.UNSIGNED_SHORT&&(z=t.R16UI),B===t.UNSIGNED_INT&&(z=t.R32UI),B===t.BYTE&&(z=t.R8I),B===t.SHORT&&(z=t.R16I),B===t.INT&&(z=t.R32I)),y===t.RG&&(B===t.FLOAT&&(z=t.RG32F),B===t.HALF_FLOAT&&(z=t.RG16F),B===t.UNSIGNED_BYTE&&(z=t.RG8),B===t.UNSIGNED_SHORT&&he&&(z=he.RG16_EXT),B===t.SHORT&&he&&(z=he.RG16_SNORM_EXT)),y===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(z=t.RG8UI),B===t.UNSIGNED_SHORT&&(z=t.RG16UI),B===t.UNSIGNED_INT&&(z=t.RG32UI),B===t.BYTE&&(z=t.RG8I),B===t.SHORT&&(z=t.RG16I),B===t.INT&&(z=t.RG32I)),y===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(z=t.RGB8UI),B===t.UNSIGNED_SHORT&&(z=t.RGB16UI),B===t.UNSIGNED_INT&&(z=t.RGB32UI),B===t.BYTE&&(z=t.RGB8I),B===t.SHORT&&(z=t.RGB16I),B===t.INT&&(z=t.RGB32I)),y===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(z=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(z=t.RGBA16UI),B===t.UNSIGNED_INT&&(z=t.RGBA32UI),B===t.BYTE&&(z=t.RGBA8I),B===t.SHORT&&(z=t.RGBA16I),B===t.INT&&(z=t.RGBA32I)),y===t.RGB&&(B===t.UNSIGNED_SHORT&&he&&(z=he.RGB16_EXT),B===t.SHORT&&he&&(z=he.RGB16_SNORM_EXT),B===t.UNSIGNED_INT_5_9_9_9_REV&&(z=t.RGB9_E5),B===t.UNSIGNED_INT_10F_11F_11F_REV&&(z=t.R11F_G11F_B10F)),y===t.RGBA){const W=ae?Bc:ct.getTransfer(te);B===t.FLOAT&&(z=t.RGBA32F),B===t.HALF_FLOAT&&(z=t.RGBA16F),B===t.UNSIGNED_BYTE&&(z=W===Mt?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT&&he&&(z=he.RGBA16_EXT),B===t.SHORT&&he&&(z=he.RGBA16_SNORM_EXT),B===t.UNSIGNED_SHORT_4_4_4_4&&(z=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(z=t.RGB5_A1)}return(z===t.R16F||z===t.R32F||z===t.RG16F||z===t.RG32F||z===t.RGBA16F||z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),z}function b(P,y){let B;return P?y===null||y===Ui||y===Pa?B=t.DEPTH24_STENCIL8:y===Ri?B=t.DEPTH32F_STENCIL8:y===Ra&&(B=t.DEPTH24_STENCIL8,je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ui||y===Pa?B=t.DEPTH_COMPONENT24:y===Ri?B=t.DEPTH_COMPONENT32F:y===Ra&&(B=t.DEPTH_COMPONENT16),B}function T(P,y){return h(P)===!0||P.isFramebufferTexture&&P.minFilter!==sn&&P.minFilter!==fn?Math.log2(Math.max(y.width,y.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?y.mipmaps.length:1}function C(P){const y=P.target;y.removeEventListener("dispose",C),A(y),y.isVideoTexture&&f.delete(y),y.isHTMLTexture&&p.delete(y)}function v(P){const y=P.target;y.removeEventListener("dispose",v),D(y)}function A(P){const y=i.get(P);if(y.__webglInit===void 0)return;const B=P.source,j=m.get(B);if(j){const te=j[y.__cacheKey];te.usedTimes--,te.usedTimes===0&&R(P),Object.keys(j).length===0&&m.delete(B)}i.remove(P)}function R(P){const y=i.get(P);t.deleteTexture(y.__webglTexture);const B=P.source,j=m.get(B);delete j[y.__cacheKey],o.memory.textures--}function D(P){const y=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(y.__webglFramebuffer[j]))for(let te=0;te<y.__webglFramebuffer[j].length;te++)t.deleteFramebuffer(y.__webglFramebuffer[j][te]);else t.deleteFramebuffer(y.__webglFramebuffer[j]);y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer[j])}else{if(Array.isArray(y.__webglFramebuffer))for(let j=0;j<y.__webglFramebuffer.length;j++)t.deleteFramebuffer(y.__webglFramebuffer[j]);else t.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let j=0;j<y.__webglColorRenderbuffer.length;j++)y.__webglColorRenderbuffer[j]&&t.deleteRenderbuffer(y.__webglColorRenderbuffer[j]);y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const B=P.textures;for(let j=0,te=B.length;j<te;j++){const ae=i.get(B[j]);ae.__webglTexture&&(t.deleteTexture(ae.__webglTexture),o.memory.textures--),i.remove(B[j])}i.remove(P)}let O=0;function U(){O=0}function L(){return O}function V(P){O=P}function ee(){const P=O;return P>=r.maxTextures&&je("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+r.maxTextures),O+=1,P}function q(P){const y=[];return y.push(P.wrapS),y.push(P.wrapT),y.push(P.wrapR||0),y.push(P.magFilter),y.push(P.minFilter),y.push(P.anisotropy),y.push(P.internalFormat),y.push(P.format),y.push(P.type),y.push(P.generateMipmaps),y.push(P.premultiplyAlpha),y.push(P.flipY),y.push(P.unpackAlignment),y.push(P.colorSpace),y.join()}function G(P,y){const B=i.get(P);if(P.isVideoTexture&&I(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&B.__version!==P.version){const j=P.image;if(j===null)je("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)je("WebGLRenderer: Texture marked for update but image is incomplete");else{pe(B,P,y);return}}else P.isExternalTexture&&(B.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+y)}function H(P,y){const B=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&B.__version!==P.version){pe(B,P,y);return}else P.isExternalTexture&&(B.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+y)}function X(P,y){const B=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&B.__version!==P.version){pe(B,P,y);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+y)}function Q(P,y){const B=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&B.__version!==P.version){ke(B,P,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+y)}const se={[Hh]:t.REPEAT,[Zi]:t.CLAMP_TO_EDGE,[Gh]:t.MIRRORED_REPEAT},ue={[sn]:t.NEAREST,[OM]:t.NEAREST_MIPMAP_NEAREST,[Sl]:t.NEAREST_MIPMAP_LINEAR,[fn]:t.LINEAR,[rd]:t.LINEAR_MIPMAP_NEAREST,[Qr]:t.LINEAR_MIPMAP_LINEAR},He={[BM]:t.NEVER,[jM]:t.ALWAYS,[HM]:t.LESS,[Np]:t.LEQUAL,[GM]:t.EQUAL,[Dp]:t.GEQUAL,[VM]:t.GREATER,[WM]:t.NOTEQUAL};function Ae(P,y){if(y.type===Ri&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===fn||y.magFilter===rd||y.magFilter===Sl||y.magFilter===Qr||y.minFilter===fn||y.minFilter===rd||y.minFilter===Sl||y.minFilter===Qr)&&je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,se[y.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,se[y.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,se[y.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,ue[y.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,ue[y.minFilter]),y.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,He[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===sn||y.minFilter!==Sl&&y.minFilter!==Qr||y.type===Ri&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Ve(P,y){let B=!1;P.__webglInit===void 0&&(P.__webglInit=!0,y.addEventListener("dispose",C));const j=y.source;let te=m.get(j);te===void 0&&(te={},m.set(j,te));const ae=q(y);if(ae!==P.__cacheKey){te[ae]===void 0&&(te[ae]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),te[ae].usedTimes++;const he=te[P.__cacheKey];he!==void 0&&(te[P.__cacheKey].usedTimes--,he.usedTimes===0&&R(y)),P.__cacheKey=ae,P.__webglTexture=te[ae].texture}return B}function Z(P,y,B){return Math.floor(Math.floor(P/B)/y)}function J(P,y,B,j){const ae=P.updateRanges;if(ae.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,y.width,y.height,B,j,y.data);else{ae.sort((Ee,ie)=>Ee.start-ie.start);let he=0;for(let Ee=1;Ee<ae.length;Ee++){const ie=ae[he],de=ae[Ee],be=ie.start+ie.count,Oe=Z(de.start,y.width,4),Xe=Z(ie.start,y.width,4);de.start<=be+1&&Oe===Xe&&Z(de.start+de.count-1,y.width,4)===Oe?ie.count=Math.max(ie.count,de.start+de.count-ie.start):(++he,ae[he]=de)}ae.length=he+1;const z=n.getParameter(t.UNPACK_ROW_LENGTH),W=n.getParameter(t.UNPACK_SKIP_PIXELS),le=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,y.width);for(let Ee=0,ie=ae.length;Ee<ie;Ee++){const de=ae[Ee],be=Math.floor(de.start/4),Oe=Math.ceil(de.count/4),Xe=be%y.width,k=Math.floor(be/y.width),ge=Oe,re=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Xe),n.pixelStorei(t.UNPACK_SKIP_ROWS,k),n.texSubImage2D(t.TEXTURE_2D,0,Xe,k,ge,re,B,j,y.data)}P.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,z),n.pixelStorei(t.UNPACK_SKIP_PIXELS,W),n.pixelStorei(t.UNPACK_SKIP_ROWS,le)}}function pe(P,y,B){let j=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(j=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(j=t.TEXTURE_3D);const te=Ve(P,y),ae=y.source;n.bindTexture(j,P.__webglTexture,t.TEXTURE0+B);const he=i.get(ae);if(ae.version!==he.__version||te===!0){if(n.activeTexture(t.TEXTURE0+B),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const re=ct.getPrimaries(ct.workingColorSpace),xe=y.colorSpace===Sr?null:ct.getPrimaries(y.colorSpace),ye=y.colorSpace===Sr||re===xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye)}n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment);let W=x(y.image,!1,r.maxTextureSize);W=Ze(y,W);const le=s.convert(y.format,y.colorSpace),Ee=s.convert(y.type);let ie=S(y.internalFormat,le,Ee,y.normalized,y.colorSpace,y.isVideoTexture);Ae(j,y);let de;const be=y.mipmaps,Oe=y.isVideoTexture!==!0,Xe=he.__version===void 0||te===!0,k=ae.dataReady,ge=T(y,W);if(y.isDepthTexture)ie=b(y.format===es,y.type),Xe&&(Oe?n.texStorage2D(t.TEXTURE_2D,1,ie,W.width,W.height):n.texImage2D(t.TEXTURE_2D,0,ie,W.width,W.height,0,le,Ee,null));else if(y.isDataTexture)if(be.length>0){Oe&&Xe&&n.texStorage2D(t.TEXTURE_2D,ge,ie,be[0].width,be[0].height);for(let re=0,xe=be.length;re<xe;re++)de=be[re],Oe?k&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,de.width,de.height,le,Ee,de.data):n.texImage2D(t.TEXTURE_2D,re,ie,de.width,de.height,0,le,Ee,de.data);y.generateMipmaps=!1}else Oe?(Xe&&n.texStorage2D(t.TEXTURE_2D,ge,ie,W.width,W.height),k&&J(y,W,le,Ee)):n.texImage2D(t.TEXTURE_2D,0,ie,W.width,W.height,0,le,Ee,W.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Oe&&Xe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ge,ie,be[0].width,be[0].height,W.depth);for(let re=0,xe=be.length;re<xe;re++)if(de=be[re],y.format!==pi)if(le!==null)if(Oe){if(k)if(y.layerUpdates.size>0){const ye=K0(de.width,de.height,y.format,y.type);for(const oe of y.layerUpdates){const Fe=de.data.subarray(oe*ye/de.data.BYTES_PER_ELEMENT,(oe+1)*ye/de.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,oe,de.width,de.height,1,le,Fe)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,de.width,de.height,W.depth,le,de.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,re,ie,de.width,de.height,W.depth,0,de.data,0,0);else je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?k&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,de.width,de.height,W.depth,le,Ee,de.data):n.texImage3D(t.TEXTURE_2D_ARRAY,re,ie,de.width,de.height,W.depth,0,le,Ee,de.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Oe&&Xe&&n.texStorage2D(t.TEXTURE_2D,ge,ie,be[0].width,be[0].height);for(let re=0,xe=be.length;re<xe;re++)de=be[re],y.format!==pi?le!==null?Oe?k&&n.compressedTexSubImage2D(t.TEXTURE_2D,re,0,0,de.width,de.height,le,de.data):n.compressedTexImage2D(t.TEXTURE_2D,re,ie,de.width,de.height,0,de.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?k&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,de.width,de.height,le,Ee,de.data):n.texImage2D(t.TEXTURE_2D,re,ie,de.width,de.height,0,le,Ee,de.data)}else if(y.isDataArrayTexture)if(Oe){if(Xe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ge,ie,W.width,W.height,W.depth),k)if(y.layerUpdates.size>0){const re=K0(W.width,W.height,y.format,y.type);for(const xe of y.layerUpdates){const ye=W.data.subarray(xe*re/W.data.BYTES_PER_ELEMENT,(xe+1)*re/W.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,xe,W.width,W.height,1,le,Ee,ye)}y.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,W.width,W.height,W.depth,le,Ee,W.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ie,W.width,W.height,W.depth,0,le,Ee,W.data);else if(y.isData3DTexture)Oe?(Xe&&n.texStorage3D(t.TEXTURE_3D,ge,ie,W.width,W.height,W.depth),k&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,W.width,W.height,W.depth,le,Ee,W.data)):n.texImage3D(t.TEXTURE_3D,0,ie,W.width,W.height,W.depth,0,le,Ee,W.data);else if(y.isFramebufferTexture){if(Xe)if(Oe)n.texStorage2D(t.TEXTURE_2D,ge,ie,W.width,W.height);else{let re=W.width,xe=W.height;for(let ye=0;ye<ge;ye++)n.texImage2D(t.TEXTURE_2D,ye,ie,re,xe,0,le,Ee,null),re>>=1,xe>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in t){const re=t.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),W.parentNode!==re){re.appendChild(W),p.add(y),re.onpaint=xe=>{const ye=xe.changedElements;for(const oe of p)ye.includes(oe.image)&&(oe.needsUpdate=!0)},re.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,W);else{const ye=t.RGBA,oe=t.RGBA,Fe=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,ye,oe,Fe,W)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(be.length>0){if(Oe&&Xe){const re=qe(be[0]);n.texStorage2D(t.TEXTURE_2D,ge,ie,re.width,re.height)}for(let re=0,xe=be.length;re<xe;re++)de=be[re],Oe?k&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,le,Ee,de):n.texImage2D(t.TEXTURE_2D,re,ie,le,Ee,de);y.generateMipmaps=!1}else if(Oe){if(Xe){const re=qe(W);n.texStorage2D(t.TEXTURE_2D,ge,ie,re.width,re.height)}k&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,le,Ee,W)}else n.texImage2D(t.TEXTURE_2D,0,ie,le,Ee,W);h(y)&&_(j),he.__version=ae.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function ke(P,y,B){if(y.image.length!==6)return;const j=Ve(P,y),te=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+B);const ae=i.get(te);if(te.version!==ae.__version||j===!0){n.activeTexture(t.TEXTURE0+B);const he=ct.getPrimaries(ct.workingColorSpace),z=y.colorSpace===Sr?null:ct.getPrimaries(y.colorSpace),W=y.colorSpace===Sr||he===z?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,W);const le=y.isCompressedTexture||y.image[0].isCompressedTexture,Ee=y.image[0]&&y.image[0].isDataTexture,ie=[];for(let oe=0;oe<6;oe++)!le&&!Ee?ie[oe]=x(y.image[oe],!0,r.maxCubemapSize):ie[oe]=Ee?y.image[oe].image:y.image[oe],ie[oe]=Ze(y,ie[oe]);const de=ie[0],be=s.convert(y.format,y.colorSpace),Oe=s.convert(y.type),Xe=S(y.internalFormat,be,Oe,y.normalized,y.colorSpace),k=y.isVideoTexture!==!0,ge=ae.__version===void 0||j===!0,re=te.dataReady;let xe=T(y,de);Ae(t.TEXTURE_CUBE_MAP,y);let ye;if(le){k&&ge&&n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,Xe,de.width,de.height);for(let oe=0;oe<6;oe++){ye=ie[oe].mipmaps;for(let Fe=0;Fe<ye.length;Fe++){const Le=ye[Fe];y.format!==pi?be!==null?k?re&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe,0,0,Le.width,Le.height,be,Le.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe,Xe,Le.width,Le.height,0,Le.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?re&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe,0,0,Le.width,Le.height,be,Oe,Le.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe,Xe,Le.width,Le.height,0,be,Oe,Le.data)}}}else{if(ye=y.mipmaps,k&&ge){ye.length>0&&xe++;const oe=qe(ie[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,Xe,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(Ee){k?re&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ie[oe].width,ie[oe].height,be,Oe,ie[oe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Xe,ie[oe].width,ie[oe].height,0,be,Oe,ie[oe].data);for(let Fe=0;Fe<ye.length;Fe++){const St=ye[Fe].image[oe].image;k?re&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe+1,0,0,St.width,St.height,be,Oe,St.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe+1,Xe,St.width,St.height,0,be,Oe,St.data)}}else{k?re&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,be,Oe,ie[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Xe,be,Oe,ie[oe]);for(let Fe=0;Fe<ye.length;Fe++){const Le=ye[Fe];k?re&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe+1,0,0,be,Oe,Le.image[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe+1,Xe,be,Oe,Le.image[oe])}}}h(y)&&_(t.TEXTURE_CUBE_MAP),ae.__version=te.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function me(P,y,B,j,te,ae){const he=s.convert(B.format,B.colorSpace),z=s.convert(B.type),W=S(B.internalFormat,he,z,B.normalized,B.colorSpace),le=i.get(y),Ee=i.get(B);if(Ee.__renderTarget=y,!le.__hasExternalTextures){const ie=Math.max(1,y.width>>ae),de=Math.max(1,y.height>>ae);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,ae,W,ie,de,y.depth,0,he,z,null):n.texImage2D(te,ae,W,ie,de,0,he,z,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),Pe(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,j,te,Ee.__webglTexture,0,ne(y)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,j,te,Ee.__webglTexture,ae),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ie(P,y,B){if(t.bindRenderbuffer(t.RENDERBUFFER,P),y.depthBuffer){const j=y.depthTexture,te=j&&j.isDepthTexture?j.type:null,ae=b(y.stencilBuffer,te),he=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Pe(y)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ne(y),ae,y.width,y.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,ne(y),ae,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,ae,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,he,t.RENDERBUFFER,P)}else{const j=y.textures;for(let te=0;te<j.length;te++){const ae=j[te],he=s.convert(ae.format,ae.colorSpace),z=s.convert(ae.type),W=S(ae.internalFormat,he,z,ae.normalized,ae.colorSpace);Pe(y)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ne(y),W,y.width,y.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,ne(y),W,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,W,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Qe(P,y,B){const j=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const te=i.get(y.depthTexture);if(te.__renderTarget=y,(!te.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),j){if(te.__webglInit===void 0&&(te.__webglInit=!0,y.depthTexture.addEventListener("dispose",C)),te.__webglTexture===void 0){te.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),Ae(t.TEXTURE_CUBE_MAP,y.depthTexture);const le=s.convert(y.depthTexture.format),Ee=s.convert(y.depthTexture.type);let ie;y.depthTexture.format===sr?ie=t.DEPTH_COMPONENT24:y.depthTexture.format===es&&(ie=t.DEPTH24_STENCIL8);for(let de=0;de<6;de++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ie,y.width,y.height,0,le,Ee,null)}}else G(y.depthTexture,0);const ae=te.__webglTexture,he=ne(y),z=j?t.TEXTURE_CUBE_MAP_POSITIVE_X+B:t.TEXTURE_2D,W=y.depthTexture.format===es?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(y.depthTexture.format===sr)Pe(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,W,z,ae,0,he):t.framebufferTexture2D(t.FRAMEBUFFER,W,z,ae,0);else if(y.depthTexture.format===es)Pe(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,W,z,ae,0,he):t.framebufferTexture2D(t.FRAMEBUFFER,W,z,ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Be(P){const y=i.get(P),B=P.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==P.depthTexture){const j=P.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),j){const te=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,j.removeEventListener("dispose",te)};j.addEventListener("dispose",te),y.__depthDisposeCallback=te}y.__boundDepthTexture=j}if(P.depthTexture&&!y.__autoAllocateDepthBuffer)if(B)for(let j=0;j<6;j++)Qe(y.__webglFramebuffer[j],P,j);else{const j=P.texture.mipmaps;j&&j.length>0?Qe(y.__webglFramebuffer[0],P,0):Qe(y.__webglFramebuffer,P,0)}else if(B){y.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[j]),y.__webglDepthbuffer[j]===void 0)y.__webglDepthbuffer[j]=t.createRenderbuffer(),Ie(y.__webglDepthbuffer[j],P,!1);else{const te=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=y.__webglDepthbuffer[j];t.bindRenderbuffer(t.RENDERBUFFER,ae),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,ae)}}else{const j=P.texture.mipmaps;if(j&&j.length>0?n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=t.createRenderbuffer(),Ie(y.__webglDepthbuffer,P,!1);else{const te=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=y.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ae),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,ae)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function $e(P,y,B){const j=i.get(P);y!==void 0&&me(j.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&Be(P)}function st(P){const y=P.texture,B=i.get(P),j=i.get(y);P.addEventListener("dispose",v);const te=P.textures,ae=P.isWebGLCubeRenderTarget===!0,he=te.length>1;if(he||(j.__webglTexture===void 0&&(j.__webglTexture=t.createTexture()),j.__version=y.version,o.memory.textures++),ae){B.__webglFramebuffer=[];for(let z=0;z<6;z++)if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[z]=[];for(let W=0;W<y.mipmaps.length;W++)B.__webglFramebuffer[z][W]=t.createFramebuffer()}else B.__webglFramebuffer[z]=t.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let z=0;z<y.mipmaps.length;z++)B.__webglFramebuffer[z]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(he)for(let z=0,W=te.length;z<W;z++){const le=i.get(te[z]);le.__webglTexture===void 0&&(le.__webglTexture=t.createTexture(),o.memory.textures++)}if(P.samples>0&&Pe(P)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let z=0;z<te.length;z++){const W=te[z];B.__webglColorRenderbuffer[z]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[z]);const le=s.convert(W.format,W.colorSpace),Ee=s.convert(W.type),ie=S(W.internalFormat,le,Ee,W.normalized,W.colorSpace,P.isXRRenderTarget===!0),de=ne(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,de,ie,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+z,t.RENDERBUFFER,B.__webglColorRenderbuffer[z])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),Ie(B.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ae){n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture),Ae(t.TEXTURE_CUBE_MAP,y);for(let z=0;z<6;z++)if(y.mipmaps&&y.mipmaps.length>0)for(let W=0;W<y.mipmaps.length;W++)me(B.__webglFramebuffer[z][W],P,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+z,W);else me(B.__webglFramebuffer[z],P,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0);h(y)&&_(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(he){for(let z=0,W=te.length;z<W;z++){const le=te[z],Ee=i.get(le);let ie=t.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ie=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ie,Ee.__webglTexture),Ae(ie,le),me(B.__webglFramebuffer,P,le,t.COLOR_ATTACHMENT0+z,ie,0),h(le)&&_(ie)}n.unbindTexture()}else{let z=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(z=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(z,j.__webglTexture),Ae(z,y),y.mipmaps&&y.mipmaps.length>0)for(let W=0;W<y.mipmaps.length;W++)me(B.__webglFramebuffer[W],P,y,t.COLOR_ATTACHMENT0,z,W);else me(B.__webglFramebuffer,P,y,t.COLOR_ATTACHMENT0,z,0);h(y)&&_(z),n.unbindTexture()}P.depthBuffer&&Be(P)}function Ge(P){const y=P.textures;for(let B=0,j=y.length;B<j;B++){const te=y[B];if(h(te)){const ae=E(P),he=i.get(te).__webglTexture;n.bindTexture(ae,he),_(ae),n.unbindTexture()}}}const ot=[],yt=[];function At(P){if(P.samples>0){if(Pe(P)===!1){const y=P.textures,B=P.width,j=P.height;let te=t.COLOR_BUFFER_BIT;const ae=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=i.get(P),z=y.length>1;if(z)for(let le=0;le<y.length;le++)n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);const W=P.texture.mipmaps;W&&W.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let le=0;le<y.length;le++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),z){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,he.__webglColorRenderbuffer[le]);const Ee=i.get(y[le]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ee,0)}t.blitFramebuffer(0,0,B,j,0,0,B,j,te,t.NEAREST),l===!0&&(ot.length=0,yt.length=0,ot.push(t.COLOR_ATTACHMENT0+le),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(ot.push(ae),yt.push(ae),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,yt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ot))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),z)for(let le=0;le<y.length;le++){n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,he.__webglColorRenderbuffer[le]);const Ee=i.get(y[le]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,Ee,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){const y=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[y])}}}function ne(P){return Math.min(r.maxSamples,P.samples)}function Pe(P){const y=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function I(P){const y=o.render.frame;f.get(P)!==y&&(f.set(P,y),P.update())}function Ze(P,y){const B=P.colorSpace,j=P.format,te=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||B!==zc&&B!==Sr&&(ct.getTransfer(B)===Mt?(j!==pi||te!==zn)&&je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):gt("WebGLTextures: Unsupported texture color space:",B)),y}function qe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=ee,this.resetTextureUnits=U,this.getTextureUnits=L,this.setTextureUnits=V,this.setTexture2D=G,this.setTexture2DArray=H,this.setTexture3D=X,this.setTextureCube=Q,this.rebindTextures=$e,this.setupRenderTarget=st,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Pe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function nC(t,e){function n(i,r=Sr){let s;const o=ct.getTransfer(r);if(i===zn)return t.UNSIGNED_BYTE;if(i===Tp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Ap)return t.UNSIGNED_SHORT_5_5_5_1;if(i===s_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===o_)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===i_)return t.BYTE;if(i===r_)return t.SHORT;if(i===Ra)return t.UNSIGNED_SHORT;if(i===bp)return t.INT;if(i===Ui)return t.UNSIGNED_INT;if(i===Ri)return t.FLOAT;if(i===Oi)return t.HALF_FLOAT;if(i===a_)return t.ALPHA;if(i===l_)return t.RGB;if(i===pi)return t.RGBA;if(i===sr)return t.DEPTH_COMPONENT;if(i===es)return t.DEPTH_STENCIL;if(i===c_)return t.RED;if(i===Cp)return t.RED_INTEGER;if(i===ds)return t.RG;if(i===Rp)return t.RG_INTEGER;if(i===Pp)return t.RGBA_INTEGER;if(i===ac||i===lc||i===cc||i===uc)if(o===Mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ac)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===lc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===cc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===uc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ac)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===lc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===cc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===uc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Vh||i===Wh||i===jh||i===Xh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Vh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Wh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===jh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Yh||i===$h||i===qh||i===Kh||i===Zh||i===Fc||i===Jh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Yh||i===$h)return o===Mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===qh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Kh)return s.COMPRESSED_R11_EAC;if(i===Zh)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Fc)return s.COMPRESSED_RG11_EAC;if(i===Jh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Qh||i===ef||i===tf||i===nf||i===rf||i===sf||i===of||i===af||i===lf||i===cf||i===uf||i===df||i===hf||i===ff)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Qh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ef)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===tf)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===nf)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===rf)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===sf)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===of)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===af)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===lf)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===cf)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===uf)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===df)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===hf)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ff)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===pf||i===mf||i===gf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===pf)return o===Mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===mf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===gf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===xf||i===vf||i===kc||i===_f)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===xf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===vf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===kc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===_f)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Pa?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const iC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class sC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new __(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Fi({vertexShader:iC,fragmentShader:rC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ve(new Ha(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oC extends zr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,p=null,d=null,m=null,g=null;const M=typeof XRWebGLBinding<"u",x=new sC,h={},_=n.getContextAttributes();let E=null,S=null;const b=[],T=[],C=new Re;let v=null,A=null;const R=new kn;R.viewport=new Ot;const D=new kn;D.viewport=new Ot;const O=[R,D],U=new fw;let L=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let J=b[Z];return J===void 0&&(J=new dd,b[Z]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Z){let J=b[Z];return J===void 0&&(J=new dd,b[Z]=J),J.getGripSpace()},this.getHand=function(Z){let J=b[Z];return J===void 0&&(J=new dd,b[Z]=J),J.getHandSpace()};function ee(Z){const J=T.indexOf(Z.inputSource);if(J===-1)return;const pe=b[J];pe!==void 0&&(pe.update(Z.inputSource,Z.frame,c||o),pe.dispatchEvent({type:Z.type,data:Z.inputSource}))}function q(){r.removeEventListener("select",ee),r.removeEventListener("selectstart",ee),r.removeEventListener("selectend",ee),r.removeEventListener("squeeze",ee),r.removeEventListener("squeezestart",ee),r.removeEventListener("squeezeend",ee),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",G);for(let Z=0;Z<b.length;Z++){const J=T[Z];J!==null&&(T[Z]=null,b[Z].disconnect(J))}L=null,V=null,x.reset();for(const Z in h)delete h[Z];if(e.setRenderTarget(E),m=null,d=null,p=null,r=null,S=null,Ve.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(C.width,C.height,!1),A!==null){const Z=A.camera;Z.fov=A.fov,Z.zoom=A.zoom,Z.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return p===null&&M&&(p=new XRWebGLBinding(r,n)),p},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",ee),r.addEventListener("selectstart",ee),r.addEventListener("selectend",ee),r.addEventListener("squeeze",ee),r.addEventListener("squeezestart",ee),r.addEventListener("squeezeend",ee),r.addEventListener("end",q),r.addEventListener("inputsourceschange",G),_.xrCompatible!==!0&&await n.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(C),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,ke=null,me=null;_.depth&&(me=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,pe=_.stencil?es:sr,ke=_.stencil?Pa:Ui);const Ie={colorFormat:n.RGBA8,depthFormat:me,scaleFactor:s};p=this.getBinding(),d=p.createProjectionLayer(Ie),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new xi(d.textureWidth,d.textureHeight,{format:pi,type:zn,depthTexture:new La(d.textureWidth,d.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const pe={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,pe),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new xi(m.framebufferWidth,m.framebufferHeight,{format:pi,type:zn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ve.setContext(r),Ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function G(Z){for(let J=0;J<Z.removed.length;J++){const pe=Z.removed[J],ke=T.indexOf(pe);ke>=0&&(T[ke]=null,b[ke].disconnect(pe))}for(let J=0;J<Z.added.length;J++){const pe=Z.added[J];let ke=T.indexOf(pe);if(ke===-1){for(let Ie=0;Ie<b.length;Ie++)if(Ie>=T.length){T.push(pe),ke=Ie;break}else if(T[Ie]===null){T[Ie]=pe,ke=Ie;break}if(ke===-1)break}const me=b[ke];me&&me.connect(pe)}}const H=new N,X=new N;function Q(Z,J,pe){H.setFromMatrixPosition(J.matrixWorld),X.setFromMatrixPosition(pe.matrixWorld);const ke=H.distanceTo(X),me=J.projectionMatrix.elements,Ie=pe.projectionMatrix.elements,Qe=me[14]/(me[10]-1),Be=me[14]/(me[10]+1),$e=(me[9]+1)/me[5],st=(me[9]-1)/me[5],Ge=(me[8]-1)/me[0],ot=(Ie[8]+1)/Ie[0],yt=Qe*Ge,At=Qe*ot,ne=ke/(-Ge+ot),Pe=ne*-Ge;if(J.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Pe),Z.translateZ(ne),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),me[10]===-1)Z.projectionMatrix.copy(J.projectionMatrix),Z.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const I=Qe+ne,Ze=Be+ne,qe=yt-Pe,P=At+(ke-Pe),y=$e*Be/Ze*I,B=st*Be/Ze*I;Z.projectionMatrix.makePerspective(qe,P,y,B,I,Ze),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function se(Z,J){J===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(J.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let J=Z.near,pe=Z.far;x.texture!==null&&(x.depthNear>0&&(J=x.depthNear),x.depthFar>0&&(pe=x.depthFar)),U.near=D.near=R.near=J,U.far=D.far=R.far=pe,(L!==U.near||V!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),L=U.near,V=U.far),U.layers.mask=Z.layers.mask|6,R.layers.mask=U.layers.mask&-5,D.layers.mask=U.layers.mask&-3;const ke=Z.parent,me=U.cameras;se(U,ke);for(let Ie=0;Ie<me.length;Ie++)se(me[Ie],ke);me.length===2?Q(U,R,D):U.projectionMatrix.copy(R.projectionMatrix),A===null&&Z.isPerspectiveCamera&&(A={camera:Z,fov:Z.fov,zoom:Z.zoom}),ue(Z,U,ke)};function ue(Z,J,pe){pe===null?Z.matrix.copy(J.matrixWorld):(Z.matrix.copy(pe.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(J.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(J.projectionMatrix),Z.projectionMatrixInverse.copy(J.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Da*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(U)},this.getCameraTexture=function(Z){return h[Z]};let He=null;function Ae(Z,J){if(f=J.getViewerPose(c||o),g=J,f!==null){const pe=f.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let ke=!1;pe.length!==U.cameras.length&&(U.cameras.length=0,ke=!0);for(let Be=0;Be<pe.length;Be++){const $e=pe[Be];let st=null;if(m!==null)st=m.getViewport($e);else{const ot=p.getViewSubImage(d,$e);st=ot.viewport,Be===0&&(e.setRenderTargetTextures(S,ot.colorTexture,ot.depthStencilTexture),e.setRenderTarget(S))}let Ge=O[Be];Ge===void 0&&(Ge=new kn,Ge.layers.enable(Be),Ge.viewport=new Ot,O[Be]=Ge),Ge.matrix.fromArray($e.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray($e.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(st.x,st.y,st.width,st.height),Be===0&&(U.matrix.copy(Ge.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),ke===!0&&U.cameras.push(Ge)}const me=r.enabledFeatures;if(me&&me.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){p=i.getBinding();const Be=p.getDepthInformation(pe[0]);Be&&Be.isValid&&Be.texture&&x.init(Be,r.renderState)}if(me&&me.includes("camera-access")&&M){e.state.unbindTexture(),p=i.getBinding();for(let Be=0;Be<pe.length;Be++){const $e=pe[Be].camera;if($e){let st=h[$e];st||(st=new __,h[$e]=st);const Ge=p.getCameraImage($e);st.sourceTexture=Ge}}}}for(let pe=0;pe<b.length;pe++){const ke=T[pe],me=b[pe];ke!==null&&me!==void 0&&me.update(ke,J,c||o)}He&&He(Z,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),g=null}const Ve=new A_;Ve.setAnimationLoop(Ae),this.setAnimationLoop=function(Z){He=Z},this.dispose=function(){}}}const aC=new Dt,I_=new Ke;I_.set(-1,0,0,0,1,0,0,0,1);function lC(t,e){function n(x,h){x.matrixAutoUpdate===!0&&x.updateMatrix(),h.value.copy(x.matrix)}function i(x,h){h.color.getRGB(x.fogColor.value,E_(t)),h.isFog?(x.fogNear.value=h.near,x.fogFar.value=h.far):h.isFogExp2&&(x.fogDensity.value=h.density)}function r(x,h,_,E,S){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(x,h):h.isMeshLambertMaterial?(s(x,h),h.envMap&&(x.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(x,h),p(x,h)):h.isMeshPhongMaterial?(s(x,h),f(x,h),h.envMap&&(x.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(x,h),d(x,h),h.isMeshPhysicalMaterial&&m(x,h,S)):h.isMeshMatcapMaterial?(s(x,h),g(x,h)):h.isMeshDepthMaterial?s(x,h):h.isMeshDistanceMaterial?(s(x,h),M(x,h)):h.isMeshNormalMaterial?s(x,h):h.isLineBasicMaterial?(o(x,h),h.isLineDashedMaterial&&a(x,h)):h.isPointsMaterial?l(x,h,_,E):h.isSpriteMaterial?c(x,h):h.isShadowMaterial?(x.color.value.copy(h.color),x.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(x,h){x.opacity.value=h.opacity,h.color&&x.diffuse.value.copy(h.color),h.emissive&&x.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(x.map.value=h.map,n(h.map,x.mapTransform)),h.alphaMap&&(x.alphaMap.value=h.alphaMap,n(h.alphaMap,x.alphaMapTransform)),h.bumpMap&&(x.bumpMap.value=h.bumpMap,n(h.bumpMap,x.bumpMapTransform),x.bumpScale.value=h.bumpScale,h.side===In&&(x.bumpScale.value*=-1)),h.normalMap&&(x.normalMap.value=h.normalMap,n(h.normalMap,x.normalMapTransform),x.normalScale.value.copy(h.normalScale),h.side===In&&x.normalScale.value.negate()),h.displacementMap&&(x.displacementMap.value=h.displacementMap,n(h.displacementMap,x.displacementMapTransform),x.displacementScale.value=h.displacementScale,x.displacementBias.value=h.displacementBias),h.emissiveMap&&(x.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,x.emissiveMapTransform)),h.specularMap&&(x.specularMap.value=h.specularMap,n(h.specularMap,x.specularMapTransform)),h.alphaTest>0&&(x.alphaTest.value=h.alphaTest);const _=e.get(h),E=_.envMap,S=_.envMapRotation;E&&(x.envMap.value=E,x.envMapRotation.value.setFromMatrix4(aC.makeRotationFromEuler(S)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(I_),x.reflectivity.value=h.reflectivity,x.ior.value=h.ior,x.refractionRatio.value=h.refractionRatio),h.lightMap&&(x.lightMap.value=h.lightMap,x.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,x.lightMapTransform)),h.aoMap&&(x.aoMap.value=h.aoMap,x.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,x.aoMapTransform))}function o(x,h){x.diffuse.value.copy(h.color),x.opacity.value=h.opacity,h.map&&(x.map.value=h.map,n(h.map,x.mapTransform))}function a(x,h){x.dashSize.value=h.dashSize,x.totalSize.value=h.dashSize+h.gapSize,x.scale.value=h.scale}function l(x,h,_,E){x.diffuse.value.copy(h.color),x.opacity.value=h.opacity,x.size.value=h.size*_,x.scale.value=E*.5,h.map&&(x.map.value=h.map,n(h.map,x.uvTransform)),h.alphaMap&&(x.alphaMap.value=h.alphaMap,n(h.alphaMap,x.alphaMapTransform)),h.alphaTest>0&&(x.alphaTest.value=h.alphaTest)}function c(x,h){x.diffuse.value.copy(h.color),x.opacity.value=h.opacity,x.rotation.value=h.rotation,h.map&&(x.map.value=h.map,n(h.map,x.mapTransform)),h.alphaMap&&(x.alphaMap.value=h.alphaMap,n(h.alphaMap,x.alphaMapTransform)),h.alphaTest>0&&(x.alphaTest.value=h.alphaTest)}function f(x,h){x.specular.value.copy(h.specular),x.shininess.value=Math.max(h.shininess,1e-4)}function p(x,h){h.gradientMap&&(x.gradientMap.value=h.gradientMap)}function d(x,h){x.metalness.value=h.metalness,h.metalnessMap&&(x.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,x.metalnessMapTransform)),x.roughness.value=h.roughness,h.roughnessMap&&(x.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,x.roughnessMapTransform)),h.envMap&&(x.envMapIntensity.value=h.envMapIntensity)}function m(x,h,_){x.ior.value=h.ior,h.sheen>0&&(x.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),x.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(x.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,x.sheenColorMapTransform)),h.sheenRoughnessMap&&(x.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,x.sheenRoughnessMapTransform))),h.clearcoat>0&&(x.clearcoat.value=h.clearcoat,x.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(x.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,x.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(x.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===In&&x.clearcoatNormalScale.value.negate())),h.dispersion>0&&(x.dispersion.value=h.dispersion),h.retroreflectivity>0&&(x.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(x.iridescence.value=h.iridescence,x.iridescenceIOR.value=h.iridescenceIOR,x.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(x.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,x.iridescenceMapTransform)),h.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),h.transmission>0&&(x.transmission.value=h.transmission,x.transmissionSamplerMap.value=_.texture,x.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(x.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,x.transmissionMapTransform)),x.thickness.value=h.thickness,h.thicknessMap&&(x.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=h.attenuationDistance,x.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(x.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(x.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=h.specularIntensity,x.specularColor.value.copy(h.specularColor),h.specularColorMap&&(x.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,x.specularColorMapTransform)),h.specularIntensityMap&&(x.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,h){h.matcap&&(x.matcap.value=h.matcap)}function M(x,h){const _=e.get(h).light;x.referencePosition.value.setFromMatrixPosition(_.matrixWorld),x.nearDistance.value=_.shadow.camera.near,x.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function cC(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,b){const T=b.program;i.uniformBlockBinding(S,T)}function c(S,b){let T=r[S.id];T===void 0&&(x(S),T=f(S),r[S.id]=T,S.addEventListener("dispose",_));const C=b.program;i.updateUBOMapping(S,C);const v=e.render.frame;s[S.id]!==v&&(d(S),s[S.id]=v)}function f(S){const b=p();S.__bindingPointIndex=b;const T=t.createBuffer(),C=S.__size,v=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,C,v),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,b,T),T}function p(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return gt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const b=r[S.id],T=S.uniforms,C=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,b);for(let v=0,A=T.length;v<A;v++){const R=T[v];if(Array.isArray(R))for(let D=0,O=R.length;D<O;D++)m(R[D],v,D,C);else m(R,v,0,C)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(S,b,T,C){if(M(S,b,T,C)===!0){const v=S.__offset,A=S.value;if(Array.isArray(A)){let R=0;for(let D=0;D<A.length;D++){const O=A[D],U=h(O);g(O,S.__data,R),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(R+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,S.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,v,S.__data)}}function g(S,b,T){typeof S=="number"||typeof S=="boolean"?b[0]=S:S.isMatrix3?(b[0]=S.elements[0],b[1]=S.elements[1],b[2]=S.elements[2],b[3]=0,b[4]=S.elements[3],b[5]=S.elements[4],b[6]=S.elements[5],b[7]=0,b[8]=S.elements[6],b[9]=S.elements[7],b[10]=S.elements[8],b[11]=0):ArrayBuffer.isView(S)?b.set(new S.constructor(S.buffer,S.byteOffset,b.length)):S.toArray(b,T)}function M(S,b,T,C){const v=S.value,A=b+"_"+T;if(C[A]===void 0)return typeof v=="number"||typeof v=="boolean"?C[A]=v:ArrayBuffer.isView(v)?C[A]=v.slice():C[A]=v.clone(),!0;{const R=C[A];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return C[A]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}function x(S){const b=S.uniforms;let T=0;const C=16;for(let A=0,R=b.length;A<R;A++){const D=Array.isArray(b[A])?b[A]:[b[A]];for(let O=0,U=D.length;O<U;O++){const L=D[O],V=Array.isArray(L.value)?L.value:[L.value];for(let ee=0,q=V.length;ee<q;ee++){const G=V[ee],H=h(G),X=T%C,Q=X%H.boundary,se=X+Q;T+=Q,se!==0&&C-se<H.storage&&(T+=C-se),L.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=T,T+=H.storage}}}const v=T%C;return v>0&&(T+=C-v),S.__size=T,S.__cache={},this}function h(S){const b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(b.boundary=16,b.storage=S.byteLength):je("WebGLRenderer: Unsupported uniform value type.",S),b}function _(S){const b=S.target;b.removeEventListener("dispose",_);const T=o.indexOf(b.__bindingPointIndex);o.splice(T,1),t.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function E(){for(const S in r)t.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:l,update:c,dispose:E}}const uC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let wi=null;function dC(){return wi===null&&(wi=new IE(uC,16,16,ds,Oi),wi.name="DFG_LUT",wi.minFilter=fn,wi.magFilter=fn,wi.wrapS=Zi,wi.wrapT=Zi,wi.generateMipmaps=!1,wi.needsUpdate=!0),wi}class hC{constructor(e={}){const{canvas:n=$M(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:m=zn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const M=m,x=new Set([Pp,Rp,Cp]),h=new Set([zn,Ui,Ra,Pa,Tp,Ap]),_=new Uint32Array(4),E=new Int32Array(4),S=new N;let b=null,T=null;const C=[],v=[];let A=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let D=!1,O=null,U=null,L=null,V=null;this._outputColorSpace=Zn;let ee=0,q=0,G=null,H=-1,X=null;const Q=new Ot,se=new Ot;let ue=null;const He=new nt(0);let Ae=0,Ve=n.width,Z=n.height,J=1,pe=null,ke=null;const me=new Ot(0,0,Ve,Z),Ie=new Ot(0,0,Ve,Z);let Qe=!1;const Be=new Up;let $e=!1,st=!1;const Ge=new Dt,ot=new N,yt=new Ot,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ne=!1;function Pe(){return G===null?J:1}let I=i;function Ze(w,F){return n.getContext(w,F)}let qe,P,y,B,j,te,ae,he,z,W,le,Ee,ie,de,be,Oe,Xe,k,ge,re,xe,ye,oe;try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${wp}`),n.addEventListener("webglcontextlost",St,!1),n.addEventListener("webglcontextrestored",pt,!1),n.addEventListener("webglcontextcreationerror",En,!1),I===null){const F="webgl2";if(I=Ze(F,w),I===null)throw Ze(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Fe()}catch(w){throw n.removeEventListener("webglcontextlost",St,!1),n.removeEventListener("webglcontextrestored",pt,!1),n.removeEventListener("webglcontextcreationerror",En,!1),gt("WebGLRenderer: "+w.message),w}function Fe(){qe=new d2(I),qe.init(),xe=new nC(I,qe),P=new t2(I,qe,e,xe),y=new eC(I,qe),P.reversedDepthBuffer&&d&&y.buffers.depth.setReversed(!0),U=I.createFramebuffer(),L=I.createFramebuffer(),V=I.createFramebuffer(),B=new p2(I),j=new BA,te=new tC(I,qe,y,j,P,xe,B),ae=new u2(R),he=new gw(I),ye=new QT(I,he),z=new h2(I,he,B,ye),W=new g2(I,z,he,ye,B),k=new m2(I,P,te),be=new n2(j),le=new zA(R,ae,qe,P,ye,be),Ee=new lC(R,j),ie=new GA,de=new $A(qe),Xe=new JT(R,ae,y,W,g,l),Oe=new QA(R,W,P),oe=new cC(I,B,P,y),ge=new e2(I,qe,B),re=new f2(I,qe,B),B.programs=le.programs,R.capabilities=P,R.extensions=qe,R.properties=j,R.renderLists=ie,R.shadowMap=Oe,R.state=y,R.info=B}M!==zn&&(A=new v2(M,n.width,n.height,a,r,s));const Le=new oC(R,I);this.xr=Le,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const w=qe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=qe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(w){w!==void 0&&(J=w,this.setSize(Ve,Z,!1))},this.getSize=function(w){return w.set(Ve,Z)},this.setSize=function(w,F,K=!0){if(Le.isPresenting){je("WebGLRenderer: Can't change size while VR device is presenting.");return}Ve=w,Z=F,n.width=Math.floor(w*J),n.height=Math.floor(F*J),K===!0&&(n.style.width=w+"px",n.style.height=F+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(Ve*J,Z*J).floor()},this.setDrawingBufferSize=function(w,F,K){Ve=w,Z=F,J=K,n.width=Math.floor(w*K),n.height=Math.floor(F*K),this.setViewport(0,0,w,F)},this.setEffects=function(w){if(M===zn){gt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let F=0;F<w.length;F++)if(w[F].isOutputPass===!0){je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(Q)},this.getViewport=function(w){return w.copy(me)},this.setViewport=function(w,F,K,$){w.isVector4?me.set(w.x,w.y,w.z,w.w):me.set(w,F,K,$),y.viewport(Q.copy(me).multiplyScalar(J).round())},this.getScissor=function(w){return w.copy(Ie)},this.setScissor=function(w,F,K,$){w.isVector4?Ie.set(w.x,w.y,w.z,w.w):Ie.set(w,F,K,$),y.scissor(se.copy(Ie).multiplyScalar(J).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(w){y.setScissorTest(Qe=w)},this.setOpaqueSort=function(w){pe=w},this.setTransparentSort=function(w){ke=w},this.getClearColor=function(w){return w.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(w=!0,F=!0,K=!0){let $=0;if(w){let Y=!1;if(G!==null){const Se=G.texture.format;Y=x.has(Se)}if(Y){const Se=G.texture.type,Te=h.has(Se),_e=Xe.getClearColor(),Ne=Xe.getClearAlpha(),Ue=_e.r,Je=_e.g,it=_e.b;Te?(_[0]=Ue,_[1]=Je,_[2]=it,_[3]=Ne,I.clearBufferuiv(I.COLOR,0,_)):(E[0]=Ue,E[1]=Je,E[2]=it,E[3]=Ne,I.clearBufferiv(I.COLOR,0,E))}else $|=I.COLOR_BUFFER_BIT}F&&($|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&($|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&I.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),O=w},this.dispose=function(){n.removeEventListener("webglcontextlost",St,!1),n.removeEventListener("webglcontextrestored",pt,!1),n.removeEventListener("webglcontextcreationerror",En,!1),Xe.dispose(),ie.dispose(),de.dispose(),j.dispose(),ae.dispose(),W.dispose(),ye.dispose(),oe.dispose(),le.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",yo),Le.removeEventListener("sessionend",Wa),_i.stop()};function St(w){w.preventDefault(),v0("WebGLRenderer: Context Lost."),D=!0}function pt(){v0("WebGLRenderer: Context Restored."),D=!1;const w=B.autoReset,F=Oe.enabled,K=Oe.autoUpdate,$=Oe.needsUpdate,Y=Oe.type;Fe(),B.autoReset=w,Oe.enabled=F,Oe.autoUpdate=K,Oe.needsUpdate=$,Oe.type=Y}function En(w){gt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Xn(w){const F=w.target;F.removeEventListener("dispose",Xn),Ga(F)}function Ga(w){Va(w),j.remove(w)}function Va(w){const F=j.get(w).programs;F!==void 0&&(F.forEach(function(K){le.releaseProgram(K)}),w.isShaderMaterial&&le.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,K,$,Y,Se){F===null&&(F=At);const Te=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,_e=mu(w,F,K,$,Y);y.setMaterial($,Te);let Ne=K.index,Ue=1;if($.wireframe===!0){if(Ne=z.getWireframeAttribute(K),Ne===void 0)return;Ue=2}const Je=K.drawRange,it=K.attributes.position;let De=Je.start*Ue,mt=(Je.start+Je.count)*Ue;Se!==null&&(De=Math.max(De,Se.start*Ue),mt=Math.min(mt,(Se.start+Se.count)*Ue)),Ne!==null?(De=Math.max(De,0),mt=Math.min(mt,Ne.count)):it!=null&&(De=Math.max(De,0),mt=Math.min(mt,it.count));const It=mt-De;if(It<0||It===1/0)return;ye.setup(Y,$,_e,K,Ne);let Tt,_t=ge;if(Ne!==null&&(Tt=he.get(Ne),_t=re,_t.setIndex(Tt)),Y.isMesh)$.wireframe===!0?(y.setLineWidth($.wireframeLinewidth*Pe()),_t.setMode(I.LINES)):_t.setMode(I.TRIANGLES);else if(Y.isLine){let Zt=$.linewidth;Zt===void 0&&(Zt=1),y.setLineWidth(Zt*Pe()),Y.isLineSegments?_t.setMode(I.LINES):Y.isLineLoop?_t.setMode(I.LINE_LOOP):_t.setMode(I.LINE_STRIP)}else Y.isPoints?_t.setMode(I.POINTS):Y.isSprite&&_t.setMode(I.TRIANGLES);if(Y.isBatchedMesh)if(qe.get("WEBGL_multi_draw"))_t.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Zt=Y._multiDrawStarts,we=Y._multiDrawCounts,nn=Y._multiDrawCount,lt=Ne?he.get(Ne).bytesPerElement:1,wn=j.get($).currentProgram.getUniforms();for(let bn=0;bn<nn;bn++)wn.setValue(I,"_gl_DrawID",bn),_t.render(Zt[bn]/lt,we[bn])}else if(Y.isInstancedMesh)_t.renderInstances(De,It,Y.count);else if(K.isInstancedBufferGeometry){const Zt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,we=Math.min(K.instanceCount,Zt);_t.renderInstances(De,It,we)}else _t.render(De,It)};function lr(w,F,K,$){O!==null&&w.isNodeMaterial&&O.setObject($,w),$e===!0&&be.setState(w,K,!1),w.transparent===!0&&w.side===Ci&&w.forceSinglePass===!1?(w.side=In,w.needsUpdate=!0,Hr(w,F,$),w.side=cs,w.needsUpdate=!0,Hr(w,F,$),w.side=Ci):Hr(w,F,$)}this.compile=function(w,F,K=null){K===null&&(K=w),O!==null&&O.renderStart(w,F,K),T=de.get(K),T.init(F),v.push(T),K.traverseVisible(function(Y){Y.isLight&&Y.layers.test(F.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),w!==K&&w.traverseVisible(function(Y){Y.isLight&&Y.layers.test(F.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),T.setupLights(),O!==null&&O.updateLights(T.state.lightsArray),st=this.localClippingEnabled,$e=be.init(this.clippingPlanes,st),$e===!0&&be.setGlobalState(this.clippingPlanes,F),O!==null&&Oe.render(T.state.shadowsArray,K,F);const $=new Set;return w.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Se=Y.material;if(Se)if(Array.isArray(Se))for(let Te=0;Te<Se.length;Te++){const _e=Se[Te];lr(_e,K,F,Y),$.add(_e)}else lr(Se,K,F,Y),$.add(Se)}),T=v.pop(),O!==null&&O.renderEnd(),$},this.compileAsync=function(w,F,K=null){const $=this.compile(w,F,K);return new Promise(Y=>{function Se(){if($.forEach(function(Te){const Ne=j.get(Te).currentProgram;(Ne===void 0||Ne.isReady())&&$.delete(Te)}),$.size===0){Y(w);return}setTimeout(Se,10)}qe.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let cr=null;function pu(w){cr&&cr(w)}function yo(){_i.stop()}function Wa(){_i.start()}const _i=new A_;_i.setAnimationLoop(pu),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(w){cr=w,Le.setAnimationLoop(w),w===null?_i.stop():_i.start()},Le.addEventListener("sessionstart",yo),Le.addEventListener("sessionend",Wa),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;O!==null&&O.renderStart(w,F);const K=Le.enabled===!0&&Le.isPresenting===!0,$=A!==null&&(G===null||K)&&A.begin(R,G);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(F),F=Le.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,F,G),T=de.get(w,v.length),T.init(F),T.state.textureUnits=te.getTextureUnits(),v.push(T),Ge.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Be.setFromProjectionMatrix(Ge,Pi,F.reversedDepth),st=this.localClippingEnabled,$e=be.init(this.clippingPlanes,st),b=ie.get(w,C.length),b.init(),C.push(b),Le.enabled===!0&&Le.isPresenting===!0){const Te=R.xr.getDepthSensingMesh();Te!==null&&So(Te,F,-1/0,R.sortObjects)}So(w,F,0,R.sortObjects),b.finish(),O!==null&&O.updateLights(T.state.lightsArray),R.sortObjects===!0&&b.sort(pe,ke),ne=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,ne&&Xe.addToRenderList(b,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),$e===!0&&be.beginShadows();const Y=T.state.shadowsArray;if(Oe.render(Y,w,F),$e===!0&&be.endShadows(),($&&A.hasRenderPass())===!1){const Te=b.opaque,_e=b.transmissive;if(T.setupLights(),F.isArrayCamera){const Ne=F.cameras;if(_e.length>0)for(let Ue=0,Je=Ne.length;Ue<Je;Ue++){const it=Ne[Ue];ja(Te,_e,w,it)}ne&&Xe.render(w);for(let Ue=0,Je=Ne.length;Ue<Je;Ue++){const it=Ne[Ue];Mo(b,w,it,it.viewport)}}else _e.length>0&&ja(Te,_e,w,F),ne&&Xe.render(w),Mo(b,w,F)}G!==null&&q===0&&(te.updateMultisampleRenderTarget(G),te.updateRenderTargetMipmap(G)),$&&A.end(R),w.isScene===!0&&w.onAfterRender(R,w,F),ye.resetDefaultState(),H=-1,X=null,v.pop(),v.length>0?(T=v[v.length-1],te.setTextureUnits(T.state.textureUnits),$e===!0&&be.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?b=C[C.length-1]:b=null,O!==null&&O.renderEnd()};function So(w,F,K,$){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)K=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLightProbeGrid)T.pushLightProbeGrid(w);else if(w.isLight)T.pushLight(w),w.castShadow&&T.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(Be)){$&&yt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ge);const Te=W.update(w),_e=w.material;_e.visible&&b.push(w,Te,_e,K,yt.z,null,F)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(Be))){const Te=W.update(w),_e=w.material;if($&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),yt.copy(w.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),yt.copy(Te.boundingSphere.center)),yt.applyMatrix4(w.matrixWorld).applyMatrix4(Ge)),Array.isArray(_e)){const Ne=Te.groups;for(let Ue=0,Je=Ne.length;Ue<Je;Ue++){const it=Ne[Ue],De=_e[it.materialIndex];De&&De.visible&&b.push(w,Te,De,K,yt.z,it,F)}}else _e.visible&&b.push(w,Te,_e,K,yt.z,null,F)}}const Se=w.children;for(let Te=0,_e=Se.length;Te<_e;Te++)So(Se[Te],F,K,$)}function Mo(w,F,K,$){const{opaque:Y,transmissive:Se,transparent:Te}=w;T.setupLightsView(K),$e===!0&&be.setGlobalState(R.clippingPlanes,K),$&&y.viewport(Q.copy($)),Y.length>0&&Br(Y,F,K),Se.length>0&&Br(Se,F,K),Te.length>0&&Br(Te,F,K),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function ja(w,F,K,$){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[$.id]===void 0){const De=qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[$.id]=new xi(1,1,{generateMipmaps:!0,type:De?Oi:zn,minFilter:Qr,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ct.workingColorSpace})}const Se=T.state.transmissionRenderTarget[$.id],Te=$.viewport||Q;Se.setSize(Te.z*R.transmissionResolutionScale,Te.w*R.transmissionResolutionScale);const _e=R.getRenderTarget(),Ne=R.getActiveCubeFace(),Ue=R.getActiveMipmapLevel();R.setRenderTarget(Se),R.getClearColor(He),Ae=R.getClearAlpha(),Ae<1&&R.setClearColor(16777215,.5),R.clear(),ne&&Xe.render(K);const Je=R.toneMapping;R.toneMapping=Li;const it=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),T.setupLightsView($),$e===!0&&be.setGlobalState(R.clippingPlanes,$),Br(w,K,$),te.updateMultisampleRenderTarget(Se),te.updateRenderTargetMipmap(Se),qe.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let mt=0,It=F.length;mt<It;mt++){const Tt=F[mt],{object:_t,geometry:Zt,material:we,group:nn}=Tt;if(we.side===Ci&&_t.layers.test($.layers)){const lt=we.side;we.side=In,we.needsUpdate=!0,Eo(_t,K,$,Zt,we,nn),we.side=lt,we.needsUpdate=!0,De=!0}}De===!0&&(te.updateMultisampleRenderTarget(Se),te.updateRenderTargetMipmap(Se))}R.setRenderTarget(_e,Ne,Ue),R.setClearColor(He,Ae),it!==void 0&&($.viewport=it),R.toneMapping=Je}function Br(w,F,K){const $=F.isScene===!0?F.overrideMaterial:null;for(let Y=0,Se=w.length;Y<Se;Y++){const Te=w[Y],{object:_e,geometry:Ne,group:Ue}=Te;let Je=Te.material;Je.allowOverride===!0&&$!==null&&(Je=$),_e.layers.test(K.layers)&&Eo(_e,F,K,Ne,Je,Ue)}}function Eo(w,F,K,$,Y,Se){O!==null&&Y.isNodeMaterial&&O.setObject(w,Y),w.onBeforeRender(R,F,K,$,Y,Se),w.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Y.onBeforeRender(R,F,K,$,w,Se),Y.transparent===!0&&Y.side===Ci&&Y.forceSinglePass===!1?(Y.side=In,Y.needsUpdate=!0,R.renderBufferDirect(K,F,$,Y,w,Se),Y.side=cs,Y.needsUpdate=!0,R.renderBufferDirect(K,F,$,Y,w,Se),Y.side=Ci):R.renderBufferDirect(K,F,$,Y,w,Se),w.onAfterRender(R,F,K,$,Y,Se)}function Hr(w,F,K){F.isScene!==!0&&(F=At);const $=j.get(w),Y=T.state.lights,Se=T.state.shadowsArray,Te=Y.state.version,_e=le.getParameters(w,Y.state,Se,F,K,T.state.lightProbeGridArray),Ne=le.getProgramCacheKey(_e);let Ue=$.programs;$.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?F.environment:null,$.fog=F.fog;const Je=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;$.envMap=ae.get(w.envMap||$.environment,Je),$.envMapRotation=$.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Ue===void 0&&(w.addEventListener("dispose",Xn),Ue=new Map,$.programs=Ue);let it=Ue.get(Ne);if(it!==void 0){if($.currentProgram===it&&$.lightsStateVersion===Te)return ms(w,_e),it}else _e.uniforms=le.getUniforms(w),O!==null&&w.isNodeMaterial&&O.build(w,K,_e),w.onBeforeCompile(_e,R),it=le.acquireProgram(_e,Ne),Ue.set(Ne,it),$.uniforms=_e.uniforms;const De=$.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(De.clippingPlanes=be.uniform),ms(w,_e),$.needsLights=gu(w),$.lightsStateVersion=Te,$.needsLights&&(De.ambientLightColor.value=Y.state.ambient,De.lightProbe.value=Y.state.probe,De.sunLights.value=Y.state.sun,De.sunLightShadows.value=Y.state.sunShadow,De.directionalLights.value=Y.state.directional,De.directionalLightShadows.value=Y.state.directionalShadow,De.spotLights.value=Y.state.spot,De.spotLightShadows.value=Y.state.spotShadow,De.rectAreaLights.value=Y.state.rectArea,De.ltc_1.value=Y.state.rectAreaLTC1,De.ltc_2.value=Y.state.rectAreaLTC2,De.pointLights.value=Y.state.point,De.pointLightShadows.value=Y.state.pointShadow,De.hemisphereLights.value=Y.state.hemi,De.sunShadowMatrix.value=Y.state.sunShadowMatrix,De.sunShadowCascade.value=Y.state.sunShadowCascade,De.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,De.spotLightMatrix.value=Y.state.spotLightMatrix,De.spotLightMap.value=Y.state.spotLightMap,De.pointShadowMatrix.value=Y.state.pointShadowMatrix),$.lightProbeGrid=T.state.lightProbeGridArray.length>0,$.currentProgram=it,$.uniformsList=null,it}function wo(w){if(w.uniformsList===null){const F=w.currentProgram.getUniforms();w.uniformsList=dc.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function ms(w,F){const K=j.get(w);K.outputColorSpace=F.outputColorSpace,K.batching=F.batching,K.batchingColor=F.batchingColor,K.instancing=F.instancing,K.instancingColor=F.instancingColor,K.instancingMorph=F.instancingMorph,K.skinning=F.skinning,K.morphTargets=F.morphTargets,K.morphNormals=F.morphNormals,K.morphColors=F.morphColors,K.morphTargetsCount=F.morphTargetsCount,K.numClippingPlanes=F.numClippingPlanes,K.numIntersection=F.numClipIntersection,K.vertexAlphas=F.vertexAlphas,K.vertexTangents=F.vertexTangents,K.toneMapping=F.toneMapping}function Xa(w,F){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;S.setFromMatrixPosition(F.matrixWorld);for(let K=0,$=w.length;K<$;K++){const Y=w[K];if(Y.texture!==null&&Y.boundingBox.containsPoint(S))return Y}return null}function mu(w,F,K,$,Y){F.isScene!==!0&&(F=At),te.resetTextureUnits();const Se=F.fog,Te=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?F.environment:null,_e=G===null?R.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:ct.workingColorSpace,Ne=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Ue=ae.get($.envMap||Te,Ne),Je=$.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,it=!!K.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),De=!!K.morphAttributes.position,mt=!!K.morphAttributes.normal,It=!!K.morphAttributes.color;let Tt=Li;$.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Tt=R.toneMapping);const _t=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Zt=_t!==void 0?_t.length:0,we=j.get($),nn=T.state.lights;if($e===!0&&(st===!0||w!==X)){const xt=w===X&&$.id===H;be.setState($,w,xt)}let lt=!1;$.version===we.__version?(we.needsLights&&we.lightsStateVersion!==nn.state.version||we.outputColorSpace!==_e||Y.isBatchedMesh&&we.batching===!1||!Y.isBatchedMesh&&we.batching===!0||Y.isBatchedMesh&&we.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&we.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&we.instancing===!1||!Y.isInstancedMesh&&we.instancing===!0||Y.isSkinnedMesh&&we.skinning===!1||!Y.isSkinnedMesh&&we.skinning===!0||Y.isInstancedMesh&&we.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&we.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&we.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&we.instancingMorph===!1&&Y.morphTexture!==null||we.envMap!==Ue||$.fog===!0&&we.fog!==Se||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==be.numPlanes||we.numIntersection!==be.numIntersection)||we.vertexAlphas!==Je||we.vertexTangents!==it||we.morphTargets!==De||we.morphNormals!==mt||we.morphColors!==It||we.toneMapping!==Tt||we.morphTargetsCount!==Zt||!!we.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(lt=!0):(lt=!0,we.__version=$.version);let wn=we.currentProgram;lt===!0&&(wn=Hr($,F,Y),O&&$.isNodeMaterial&&O.onUpdateProgram($,wn,we));let bn=!1,Yn=!1,yi=!1;const dt=wn.getUniforms(),Rt=we.uniforms;if(y.useProgram(wn.program)&&(bn=!0,Yn=!0,yi=!0),$.id!==H&&(H=$.id,Yn=!0),we.needsLights){const xt=Xa(T.state.lightProbeGridArray,Y);we.lightProbeGrid!==xt&&(we.lightProbeGrid=xt,Yn=!0)}if(bn||X!==w){y.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),dt.setValue(I,"projectionMatrix",w.projectionMatrix),dt.setValue(I,"viewMatrix",w.matrixWorldInverse);const qn=dt.map.cameraPosition;qn!==void 0&&qn.setValue(I,ot.setFromMatrixPosition(w.matrixWorld)),P.logarithmicDepthBuffer&&dt.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&dt.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),X!==w&&(X=w,Yn=!0,yi=!0)}if(we.needsLights&&(nn.state.sunShadowMap.length>0&&dt.setValue(I,"sunShadowMap",nn.state.sunShadowMap,te),nn.state.directionalShadowMap.length>0&&dt.setValue(I,"directionalShadowMap",nn.state.directionalShadowMap,te),nn.state.spotShadowMap.length>0&&dt.setValue(I,"spotShadowMap",nn.state.spotShadowMap,te),nn.state.pointShadowMap.length>0&&dt.setValue(I,"pointShadowMap",nn.state.pointShadowMap,te)),Y.isSkinnedMesh){dt.setOptional(I,Y,"bindMatrix"),dt.setOptional(I,Y,"bindMatrixInverse");const xt=Y.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),dt.setValue(I,"boneTexture",xt.boneTexture,te))}Y.isBatchedMesh&&(dt.setOptional(I,Y,"batchingTexture"),dt.setValue(I,"batchingTexture",Y._matricesTexture,te),dt.setOptional(I,Y,"batchingIdTexture"),dt.setValue(I,"batchingIdTexture",Y._indirectTexture,te),dt.setOptional(I,Y,"batchingColorTexture"),Y._colorsTexture!==null&&dt.setValue(I,"batchingColorTexture",Y._colorsTexture,te));const $n=K.morphAttributes;if(($n.position!==void 0||$n.normal!==void 0||$n.color!==void 0)&&k.update(Y,K,wn),(Yn||we.receiveShadow!==Y.receiveShadow)&&(we.receiveShadow=Y.receiveShadow,dt.setValue(I,"receiveShadow",Y.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&F.environment!==null&&(Rt.envMapIntensity.value=F.environmentIntensity),Rt.dfgLUT!==void 0&&(Rt.dfgLUT.value=dC()),Yn){if(dt.setValue(I,"toneMappingExposure",R.toneMappingExposure),we.needsLights&&Ya(Rt,yi),Se&&$.fog===!0&&Ee.refreshFogUniforms(Rt,Se),Ee.refreshMaterialUniforms(Rt,$,J,Z,T.state.transmissionRenderTarget[w.id]),we.needsLights&&we.lightProbeGrid){const xt=we.lightProbeGrid;Rt.probesSH.value=xt.texture,Rt.probesMin.value.copy(xt.boundingBox.min),Rt.probesMax.value.copy(xt.boundingBox.max),Rt.probesResolution.value.copy(xt.resolution)}dc.upload(I,wo(we),Rt,te)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(dc.upload(I,wo(we),Rt,te),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&dt.setValue(I,"center",Y.center),dt.setValue(I,"modelViewMatrix",Y.modelViewMatrix),dt.setValue(I,"normalMatrix",Y.normalMatrix),dt.setValue(I,"modelMatrix",Y.matrixWorld),$.uniformsGroups!==void 0){const xt=$.uniformsGroups;for(let qn=0,ri=xt.length;qn<ri;qn++){const gs=xt[qn];oe.update(gs,wn),oe.bind(gs,wn)}}return wn}function Ya(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.sunLights.needsUpdate=F,w.sunLightShadows.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function gu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return ee},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(w,F,K){const $=j.get(w);$.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),j.get(w.texture).__webglTexture=F,j.get(w.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:K,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,F){const K=j.get(w);K.__webglFramebuffer=F,K.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,K=0){G=w,ee=F,q=K;let $=null,Y=!1,Se=!1;if(w){const _e=j.get(w);if(_e.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(I.FRAMEBUFFER,_e.__webglFramebuffer),Q.copy(w.viewport),se.copy(w.scissor),ue=w.scissorTest,y.viewport(Q),y.scissor(se),y.setScissorTest(ue),H=-1;return}else if(_e.__webglFramebuffer===void 0)te.setupRenderTarget(w);else if(_e.__hasExternalTextures)te.rebindTextures(w,j.get(w.texture).__webglTexture,j.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Je=w.depthTexture;if(_e.__boundDepthTexture!==Je){if(Je!==null&&j.has(Je)&&(w.width!==Je.image.width||w.height!==Je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");te.setupDepthRenderbuffer(w)}}const Ne=w.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Se=!0);const Ue=j.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ue[F])?$=Ue[F][K]:$=Ue[F],Y=!0):w.samples>0&&te.useMultisampledRTT(w)===!1?$=j.get(w).__webglMultisampledFramebuffer:Array.isArray(Ue)?$=Ue[K]:$=Ue,Q.copy(w.viewport),se.copy(w.scissor),ue=w.scissorTest}else Q.copy(me).multiplyScalar(J).floor(),se.copy(Ie).multiplyScalar(J).floor(),ue=Qe;if(K!==0&&($=U),y.bindFramebuffer(I.FRAMEBUFFER,$)&&y.drawBuffers(w,$),y.viewport(Q),y.scissor(se),y.setScissorTest(ue),Y){const _e=j.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,_e.__webglTexture,K)}else if(Se){const _e=F;for(let Ne=0;Ne<w.textures.length;Ne++){const Ue=j.get(w.textures[Ne]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ne,Ue.__webglTexture,K,_e)}}else if(w!==null&&K!==0){const _e=j.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,_e.__webglTexture,K)}H=-1};function bo(w){const F=j.get(w);return(F.__readFormat!==w.format||F.__readType!==w.type)&&(F.__readFormat=w.format,F.__readType=w.type,F.__formatReadable=P.textureFormatReadable(w.format),F.__typeReadable=P.textureTypeReadable(w.type)),F}this.readRenderTargetPixels=function(w,F,K,$,Y,Se,Te,_e=0){if(!(w&&w.isWebGLRenderTarget)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=j.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Te!==void 0&&(Ne=Ne[Te]),Ne){y.bindFramebuffer(I.FRAMEBUFFER,Ne);try{const Ue=w.textures[_e],Je=Ue.format,it=Ue.type;w.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+_e);const De=bo(Ue);if(De.__formatReadable===!1){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(De.__typeReadable===!1){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-$&&K>=0&&K<=w.height-Y&&I.readPixels(F,K,$,Y,xe.convert(Je),xe.convert(it),Se)}finally{const Ue=G!==null?j.get(G).__webglFramebuffer:null;y.bindFramebuffer(I.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(w,F,K,$,Y,Se,Te,_e=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=j.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Te!==void 0&&(Ne=Ne[Te]),Ne)if(F>=0&&F<=w.width-$&&K>=0&&K<=w.height-Y){y.bindFramebuffer(I.FRAMEBUFFER,Ne);const Ue=w.textures[_e],Je=Ue.format,it=Ue.type;w.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+_e);const De=bo(Ue);if(De.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(De.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const mt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,mt),I.bufferData(I.PIXEL_PACK_BUFFER,Se.byteLength,I.STREAM_READ),I.readPixels(F,K,$,Y,xe.convert(Je),xe.convert(it),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);const It=G!==null?j.get(G).__webglFramebuffer:null;y.bindFramebuffer(I.FRAMEBUFFER,It);const Tt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await qM(I,Tt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,mt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Se),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(mt),I.deleteSync(Tt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,F=null,K=0){const $=Math.pow(2,-K),Y=Math.floor(w.image.width*$),Se=Math.floor(w.image.height*$),Te=F!==null?F.x:0,_e=F!==null?F.y:0;te.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,K,0,0,Te,_e,Y,Se),y.unbindTexture()},this.copyTextureToTexture=function(w,F,K=null,$=null,Y=0,Se=0){let Te,_e,Ne,Ue,Je,it,De,mt,It;const Tt=w.isCompressedTexture?w.mipmaps[Se]:w.image;if(K!==null)Te=K.max.x-K.min.x,_e=K.max.y-K.min.y,Ne=K.isBox3?K.max.z-K.min.z:1,Ue=K.min.x,Je=K.min.y,it=K.isBox3?K.min.z:0;else{const Rt=Math.pow(2,-Y);Te=Math.floor(Tt.width*Rt),_e=Math.floor(Tt.height*Rt),w.isDataArrayTexture?Ne=Tt.depth:w.isData3DTexture?Ne=Math.floor(Tt.depth*Rt):Ne=1,Ue=0,Je=0,it=0}$!==null?(De=$.x,mt=$.y,It=$.z):(De=0,mt=0,It=0);const _t=xe.convert(F.format),Zt=xe.convert(F.type);let we;F.isData3DTexture?(te.setTexture3D(F,0),we=I.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(te.setTexture2DArray(F,0),we=I.TEXTURE_2D_ARRAY):(te.setTexture2D(F,0),we=I.TEXTURE_2D),y.activeTexture(I.TEXTURE0),y.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),y.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),y.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);const nn=y.getParameter(I.UNPACK_ROW_LENGTH),lt=y.getParameter(I.UNPACK_IMAGE_HEIGHT),wn=y.getParameter(I.UNPACK_SKIP_PIXELS),bn=y.getParameter(I.UNPACK_SKIP_ROWS),Yn=y.getParameter(I.UNPACK_SKIP_IMAGES);y.pixelStorei(I.UNPACK_ROW_LENGTH,Tt.width),y.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Tt.height),y.pixelStorei(I.UNPACK_SKIP_PIXELS,Ue),y.pixelStorei(I.UNPACK_SKIP_ROWS,Je),y.pixelStorei(I.UNPACK_SKIP_IMAGES,it);const yi=w.isDataArrayTexture||w.isData3DTexture,dt=F.isDataArrayTexture||F.isData3DTexture;if(w.isDepthTexture){const Rt=j.get(w),$n=j.get(F),xt=j.get(Rt.__renderTarget),qn=j.get($n.__renderTarget);y.bindFramebuffer(I.READ_FRAMEBUFFER,xt.__webglFramebuffer),y.bindFramebuffer(I.DRAW_FRAMEBUFFER,qn.__webglFramebuffer);for(let ri=0;ri<Ne;ri++)yi&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,j.get(w).__webglTexture,Y,it+ri),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,j.get(F).__webglTexture,Se,It+ri)),I.blitFramebuffer(Ue,Je,Te,_e,De,mt,Te,_e,I.DEPTH_BUFFER_BIT,I.NEAREST);y.bindFramebuffer(I.READ_FRAMEBUFFER,null),y.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(Y!==0||w.isRenderTargetTexture||j.has(w)){const Rt=j.get(w),$n=j.get(F);y.bindFramebuffer(I.READ_FRAMEBUFFER,L),y.bindFramebuffer(I.DRAW_FRAMEBUFFER,V);for(let xt=0;xt<Ne;xt++)yi?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Rt.__webglTexture,Y,it+xt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Rt.__webglTexture,Y),dt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,$n.__webglTexture,Se,It+xt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,$n.__webglTexture,Se),Y!==0?I.blitFramebuffer(Ue,Je,Te,_e,De,mt,Te,_e,I.COLOR_BUFFER_BIT,I.NEAREST):dt?I.copyTexSubImage3D(we,Se,De,mt,It+xt,Ue,Je,Te,_e):I.copyTexSubImage2D(we,Se,De,mt,Ue,Je,Te,_e);y.bindFramebuffer(I.READ_FRAMEBUFFER,null),y.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else dt?w.isDataTexture||w.isData3DTexture?I.texSubImage3D(we,Se,De,mt,It,Te,_e,Ne,_t,Zt,Tt.data):F.isCompressedArrayTexture?I.compressedTexSubImage3D(we,Se,De,mt,It,Te,_e,Ne,_t,Tt.data):I.texSubImage3D(we,Se,De,mt,It,Te,_e,Ne,_t,Zt,Tt):w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Se,De,mt,Te,_e,_t,Zt,Tt.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Se,De,mt,Tt.width,Tt.height,_t,Tt.data):I.texSubImage2D(I.TEXTURE_2D,Se,De,mt,Te,_e,_t,Zt,Tt);y.pixelStorei(I.UNPACK_ROW_LENGTH,nn),y.pixelStorei(I.UNPACK_IMAGE_HEIGHT,lt),y.pixelStorei(I.UNPACK_SKIP_PIXELS,wn),y.pixelStorei(I.UNPACK_SKIP_ROWS,bn),y.pixelStorei(I.UNPACK_SKIP_IMAGES,Yn),Se===0&&F.generateMipmaps&&I.generateMipmap(we),y.unbindTexture()},this.initRenderTarget=function(w){j.get(w).__webglFramebuffer===void 0&&te.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?te.setTextureCube(w,0):w.isData3DTexture?te.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?te.setTexture2DArray(w,0):te.setTexture2D(w,0),y.unbindTexture()},this.resetState=function(){ee=0,q=0,G=null,y.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),n.unpackColorSpace=ct._getUnpackColorSpace()}}const _g={type:"change"},Vp={type:"start"},U_={type:"end"},Yl=new du,yg=new Yi,fC=Math.cos(70*$o.DEG2RAD),Wt=new N,Cn=2*Math.PI,Et={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},kd=1e-6;class pC extends pw{constructor(e,n=null){super(e,n),this.state=Et.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:to.ROTATE,MIDDLE:to.DOLLY,RIGHT:to.PAN},this.touches={ONE:Ys.ROTATE,TWO:Ys.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new Ir,this._lastTargetPosition=new N,this._quat=new Ir().setFromUnitVectors(e.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new $0,this._sphericalDelta=new $0,this._scale=1,this._panOffset=new N,this._rotateStart=new Re,this._rotateEnd=new Re,this._rotateDelta=new Re,this._panStart=new Re,this._panEnd=new Re,this._panDelta=new Re,this._dollyStart=new Re,this._dollyEnd=new Re,this._dollyDelta=new Re,this._dollyDirection=new N,this._mouse=new Re,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=gC.bind(this),this._onPointerDown=mC.bind(this),this._onPointerUp=xC.bind(this),this._onContextMenu=wC.bind(this),this._onMouseWheel=yC.bind(this),this._onKeyDown=SC.bind(this),this._onTouchStart=MC.bind(this),this._onTouchMove=EC.bind(this),this._onMouseDown=vC.bind(this),this._onMouseMove=_C.bind(this),this._interceptControlDown=bC.bind(this),this._interceptControlUp=TC.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Et.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(_g),this.update(),this.state=Et.NONE}pan(e,n){this._pan(e,n),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const n=this.object.position;Wt.copy(n).sub(this.target),Wt.applyQuaternion(this._quat),this._spherical.setFromVector3(Wt),this.autoRotate&&this.state===Et.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Cn:i>Math.PI&&(i-=Cn),r<-Math.PI?r+=Cn:r>Math.PI&&(r-=Cn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Wt.setFromSpherical(this._spherical),Wt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Wt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Wt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Wt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Yl.origin.copy(this.object.position),Yl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Yl.direction))<fC?this.object.lookAt(this.target):(yg.setFromNormalAndCoplanarPoint(this.object.up,this.target),Yl.intersectPlane(yg,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>kd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>kd||this._lastTargetPosition.distanceToSquared(this.target)>kd?(this.dispatchEvent(_g),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Cn/60*this.autoRotateSpeed*e:Cn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Wt.setFromMatrixColumn(n,0),Wt.multiplyScalar(-e),this._panOffset.add(Wt)}_panUp(e,n){this.screenSpacePanning===!0?Wt.setFromMatrixColumn(n,1):(Wt.setFromMatrixColumn(n,0),Wt.crossVectors(this.object.up,Wt)),Wt.multiplyScalar(e),this._panOffset.add(Wt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Wt.copy(r).sub(this.target);let s=Wt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Cn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Cn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Cn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Cn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Re,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function mC(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function gC(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function xC(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(U_),this.state=Et.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function vC(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case to.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=Et.DOLLY;break;case to.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Et.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Et.ROTATE}break;case to.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Et.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Et.PAN}break;default:this.state=Et.NONE}this.state!==Et.NONE&&this.dispatchEvent(Vp)}function _C(t){switch(this.state){case Et.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case Et.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case Et.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function yC(t){this.enabled===!1||this.enableZoom===!1||this.state!==Et.NONE||(t.preventDefault(),this.dispatchEvent(Vp),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(U_))}function SC(t){this.enabled!==!1&&this._handleKeyDown(t)}function MC(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Ys.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=Et.TOUCH_ROTATE;break;case Ys.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=Et.TOUCH_PAN;break;default:this.state=Et.NONE}break;case 2:switch(this.touches.TWO){case Ys.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=Et.TOUCH_DOLLY_PAN;break;case Ys.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=Et.TOUCH_DOLLY_ROTATE;break;default:this.state=Et.NONE}break;default:this.state=Et.NONE}this.state!==Et.NONE&&this.dispatchEvent(Vp)}function EC(t){switch(this._trackPointer(t),this.state){case Et.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case Et.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case Et.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case Et.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=Et.NONE}}function wC(t){this.enabled!==!1&&t.preventDefault()}function bC(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function TC(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function AC(){const t=new $i;t.name="AgriGuardPhysicalPrototypeRoot";const e=new $i;e.name="ChassisTiltingGroup",t.add(e);const n=new vt({color:16317180,roughness:.38,metalness:.04}),i=new vt({color:14870768,roughness:.42,metalness:.06}),r=new vt({color:16777215,roughness:.85,metalness:.02,side:Ci}),s=new vt({color:592139,roughness:.85,metalness:.1}),o=new vt({color:15857145,roughness:.65,metalness:.02}),a=new vt({color:1579035,roughness:.5,metalness:.3}),l=new vt({color:165063,roughness:.45,metalness:.3}),c=new vt({color:14427686,roughness:.5,metalness:.2}),f=new vt({color:2450411,roughness:.5,metalness:.2}),p=new vt({color:9741240,roughness:.3,metalness:.9}),d=new vt({color:14870768,roughness:.15,metalness:.95}),m=new vt({color:14251782,roughness:.35,metalness:.85}),g=new vt({color:1120295,roughness:.4,metalness:.85}),M=new vt({color:1483594,roughness:.6,metalness:.1}),x=new vt({color:1920728,roughness:.4,metalness:.1}),h=new vt({color:988970,roughness:.75,metalness:.1}),_=new vt({color:11817737,roughness:.9,metalness:.05}),E=new vt({color:593174,emissive:223649,emissiveIntensity:.08,roughness:.15,metalness:.92}),S=new vt({color:1579035,roughness:.9,metalness:.05}),b=new vt({color:4674921,roughness:.4,metalness:.6});function T(We=.045,ht=!0){const ut=new $i,Tn=new zp(We,.007,8,16),An=new ve(Tn,s);ut.add(An);const si=new rt(.02,.016,.02),ki=new ve(si,s);if(ki.position.set(We,0,0),ut.add(ki),ht){const Si=new rt(.09,.005,.01),zi=new ve(Si,s);zi.position.set(We+.045,.01,0),zi.rotation.z=.2,ut.add(zi)}return ut}function C(We,ht,ut=.007){const Tn=new S_(We),An=new Bp(Tn,20,ut,8,!1),si=new vt({color:ht,roughness:.6,metalness:.1});return new ve(An,si)}const v=1.05,A=1.35,R=.35,D=2.45,O=D-R,U=.032,L=[[-v,A],[v,A],[-v,-A],[v,-A]],V=new jt(U,U,O,16);L.forEach(([We,ht])=>{const ut=new ve(V,n);ut.position.set(We,R+O/2,ht),ut.castShadow=!0,e.add(ut);const Tn=new jt(U*1.05,U*1.05,.03,16),An=new ve(Tn,i);An.position.set(We,D,ht),e.add(An),[.65,1.05,1.45,2.2].forEach(ki=>{const Si=T(U*1.15,!0);Si.rotation.x=Math.PI/2,Si.position.set(We,ki,ht),e.add(Si)})});const ee=new jc(U*1.35,12,12);L.forEach(([We,ht])=>{const ut=new ve(ee,i);ut.position.set(We,R,ht),e.add(ut)});const q=A*2,G=new jt(U,U,q,16),H=new ve(G,n);H.rotation.x=Math.PI/2,H.position.set(-v,R+.05,0),e.add(H);const X=new ve(G,n);X.rotation.x=Math.PI/2,X.position.set(v,R+.05,0),e.add(X);const Q=v*2,se=new jt(U,U,Q,16),ue=new ve(se,n);ue.rotation.z=Math.PI/2,ue.position.set(0,R+.05,-A),e.add(ue);const He=new ve(se,n);He.rotation.z=Math.PI/2,He.position.set(0,R+.05,A),e.add(He);const Ae=1.45,Ve=new jt(U,U,A*2,16),Z=new ve(Ve,n);Z.rotation.x=Math.PI/2,Z.position.set(-v,Ae-.03,0),e.add(Z);const J=new ve(Ve,n);J.rotation.x=Math.PI/2,J.position.set(v,Ae-.03,0),e.add(J);const pe=new jt(U,U,v*2,16),ke=new ve(pe,n);ke.rotation.z=Math.PI/2,ke.position.set(0,Ae-.03,A),e.add(ke);const me=new ve(pe,n);me.rotation.z=Math.PI/2,me.position.set(0,Ae-.03,-A),e.add(me);const Ie=2,Qe=2.6,Be=.85,$e=.02,st=new rt(Ie,$e,Qe),Ge=new ve(st,r);Ge.position.set(0,Ae,0),Ge.receiveShadow=!0,e.add(Ge);const ot=Ae+Be/2,yt=new rt($e,Be,Qe),At=new ve(yt,r);At.position.set(-Ie/2,ot,0),e.add(At);const ne=new ve(yt,r);ne.position.set(Ie/2,ot,0),e.add(ne);const Pe=new rt(Ie,Be,$e),I=new ve(Pe,r);I.position.set(0,ot,Qe/2),e.add(I);const Ze=new ve(Pe,r);Ze.position.set(0,ot,-Qe/2),e.add(Ze),[[-Ie/2,Qe/2],[Ie/2,Qe/2],[-Ie/2,-Qe/2],[Ie/2,-Qe/2]].forEach(([We,ht])=>{[Ae+.15,Ae+Be-.1].forEach(ut=>{const Tn=T(.065,!0);Tn.position.set(We,ut,ht),Tn.rotation.y=Math.atan2(ht,We),e.add(Tn)})});const P=1.35,y=.85,B=Ae+Be+.02,j=-Qe/2+y/2,te=new rt(P+.06,.04,y+.06),ae=new ve(te,_);ae.position.set(0,B,j),e.add(ae);const he=new rt(P,.015,y),z=new ve(he,E);z.position.set(0,B+.025,j),e.add(z);const W=new T_(1.2,6,3718648,1981066);W.position.set(0,B+.035,j),W.scale.set(.9,1,.6),e.add(W);const le=C([new N(.2,B+.01,j),new N(.25,B-.2,j+.15),new N(.15,Ae+.1,-.4),new N(-.05,Ae+.02,-.1)],15680580);e.add(le);const Ee=C([new N(.23,B+.01,j),new N(.28,B-.2,j+.15),new N(.18,Ae+.1,-.4),new N(-.08,Ae+.02,-.1)],1579035);e.add(Ee);const ie=Ae+.015,de=.55,be=.82,Oe=new rt(de,.025,be),Xe=new ve(Oe,o);Xe.position.set(-.35,ie+.012,.05),e.add(Xe);const k=new rt(.015,.002,be*.92),ge=new ve(k,new qr({color:15680580}));ge.position.set(-.35-de/2+.02,ie+.026,.05),e.add(ge);const re=new ve(k,new qr({color:3900150}));re.position.set(-.35+de/2-.02,ie+.026,.05),e.add(re);const xe=.22,ye=.38,oe=new rt(xe,.02,ye),Fe=new ve(oe,a);Fe.position.set(-.35,ie+.038,-.12),e.add(Fe);const Le=new rt(xe*.85,.004,.06),St=new ve(Le,m);St.position.set(-.35,ie+.05,-.12-ye/2+.035),e.add(St);const pt=new rt(.06,.025,.05),En=new ve(pt,d);En.position.set(-.35,ie+.048,-.12+ye/2-.02),e.add(En);const Xn=new jc(.018,10,10),Ga=new qr({color:3718648}),Va=new ve(Xn,Ga);Va.position.set(-.31,ie+.052,-.12),e.add(Va);const lr=.48,cr=.72,pu=new rt(lr,.025,cr),yo=new ve(pu,l);yo.position.set(.12,ie+.015,.22),e.add(yo);const Wa=new rt(.09,.08,.1),_i=new ve(Wa,d);_i.position.set(.12-lr/2+.06,ie+.06,.22-cr/2+.06),e.add(_i);const So=new jt(.04,.04,.1,12),Mo=new ve(So,h);Mo.position.set(.12+lr/2-.06,ie+.05,.22-cr/2+.06),e.add(Mo);const ja=new rt(.18,.02,.18),Br=new ve(ja,new vt({color:1120295}));Br.position.set(.12,ie+.035,.22),e.add(Br);const Eo=new rt(.03,.05,cr*.85),Hr=new ve(Eo,h);Hr.position.set(.12-lr/2+.025,ie+.045,.22),e.add(Hr);const wo=new ve(Eo,h);wo.position.set(.12+lr/2-.025,ie+.045,.22),e.add(wo);const ms=.45,Xa=.45,mu=new rt(ms,.025,Xa),Ya=new ve(mu,c);Ya.position.set(.42,ie+.015,-.42),e.add(Ya);const gu=new rt(.24,.18,.14),bo=new ve(gu,g);bo.position.set(.42,ie+.11,-.42),e.add(bo);for(let We=-.09;We<=.09;We+=.045){const ht=new rt(.012,.06,.16),ut=new ve(ht,g);ut.position.set(.42+We,ie+.21,-.42),e.add(ut)}const w=new rt(.08,.09,.14),F=new ve(w,M);F.position.set(.42-ms/2+.05,ie+.06,-.42),e.add(F);const K=new ve(w,M);K.position.set(.42+ms/2-.05,ie+.06,-.42),e.add(K);const $=new rt(.16,.09,.08),Y=new ve($,M);Y.position.set(.42,ie+.06,-.42+Xa/2-.05),e.add(Y);const Se=.24,Te=.38,_e=new rt(Se,.02,Te),Ne=new ve(_e,f);Ne.position.set(-.16,ie+.015,.55),e.add(Ne);const Ue=new rt(.18,.15,.22),Je=new ve(Ue,x);Je.position.set(-.16,ie+.09,.55-.04),e.add(Je);const it=new rt(.16,.08,.08),De=new ve(it,M);De.position.set(-.16,ie+.06,.55+.13),e.add(De);const mt=new rt(.48,.16,.55),It=new ve(mt,h);It.position.set(.62,ie+.08,.72),e.add(It);for(let We=-.15;We<=.15;We+=.1){const ht=new jt(.042,.042,.48,12),ut=new ve(ht,new vt({color:3359061,metalness:.3}));ut.rotation.x=Math.PI/2,ut.position.set(.62+We,ie+.14,.72),e.add(ut)}const Tt=new rt(.12,.018,.28),_t=new ve(Tt,f);_t.position.set(-.62,ie+.015,.35),e.add(_t);const Zt=new rt(.15,.018,.15),we=new ve(Zt,f);we.position.set(-.6,ie+.015,-.35),e.add(we);const nn=new rt(.12,.07,.16),lt=new ve(nn,h);lt.position.set(.25,ie+.04,.65),e.add(lt);const wn=new rt(.07,.04,.09),bn=new ve(wn,new vt({color:15680580}));bn.position.set(.25,ie+.08,.65),bn.rotation.x=.3,e.add(bn),e.add(C([new N(.55,ie+.12,.65),new N(.52,ie+.05,.2),new N(.48,ie+.04,-.1),new N(.42,ie+.07,-.37)],15680580)),e.add(C([new N(.58,ie+.12,.65),new N(.55,ie+.05,.2),new N(.45,ie+.04,-.1),new N(.4,ie+.07,-.37)],1579035)),e.add(C([new N(.22,ie+.05,0),new N(.28,ie+.08,-.15),new N(.35,ie+.06,-.35)],16436245)),e.add(C([new N(.2,ie+.05,-.02),new N(.26,ie+.08,-.17),new N(.37,ie+.06,-.37)],1096065)),e.add(C([new N(-.3,ie+.04,-.05),new N(-.25,ie+.07,.2),new N(-.16,ie+.04,.42)],16347926)),e.add(C([new N(-.55,ie+.03,-.35),new N(-.48,ie+.06,-.25),new N(-.35,ie+.03,-.15)],3718648));function Yn(){const We=new $i,ht=new rt(.38,.18,.03),ut=new ve(ht,f);We.add(ut);const Tn=new jt(.068,.068,.11,16),An=new ve(Tn,d);An.rotation.x=Math.PI/2,An.position.set(-.1,0,.065),We.add(An);const si=new ve(Tn,d);si.rotation.x=Math.PI/2,si.position.set(.1,0,.065),We.add(si);const ki=new Fp(.065,12),Si=new qr({color:9741240}),zi=new ve(ki,Si);zi.position.set(-.1,0,.122),We.add(zi);const il=new ve(ki,Si);return il.position.set(.1,0,.122),We.add(il),We}function yi(){const We=new Wc(.65,2.5,16,1,!0);We.translate(0,-1.25,0),We.rotateX(-Math.PI/2);const ht=new qr({color:1096065,wireframe:!0,transparent:!0,opacity:.45,depthWrite:!1});return{mesh:new ve(We,ht),mat:ht}}const dt=Yn();dt.position.set(v+.03,1.1,0),dt.rotation.y=Math.PI/2,e.add(dt);const Rt=T(U*1.35,!0);Rt.position.set(v,1.1,0),Rt.rotation.y=Math.PI/2,e.add(Rt);const $n=yi();dt.add($n.mesh);const xt=Yn();xt.position.set(0,Ae-.08,Qe/2+.04),xt.rotation.y=0,e.add(xt);const qn=yi();xt.add(qn.mesh);const ri=Yn();ri.position.set(-v-.03,1.1,0),ri.rotation.y=-Math.PI/2,e.add(ri);const gs=T(U*1.35,!0);gs.position.set(-v,1.1,0),gs.rotation.y=-Math.PI/2,e.add(gs);const xu=yi();ri.add(xu.mesh);const O_={leftMesh:xu.mesh,centerMesh:qn.mesh,rightMesh:$n.mesh,leftMaterial:xu.mat,centerMaterial:qn.mat,rightMaterial:$n.mat},F_=new rt(.16,.22,.08),qp=new ve(F_,new vt({color:3718648,roughness:.6}));qp.position.set(Ie/2+.05,Ae+Be*.45,.6),e.add(qp);const vu=T(.09,!0);vu.position.set(Ie/2+.05,Ae+Be*.45,.6),vu.rotation.y=Math.PI/2,e.add(vu),e.add(C([new N(Ie/2+.05,Ae+Be*.45+.12,.6),new N(Ie/2-.02,Ae+Be+.02,.55),new N(0,Ae+.08,.2),new N(-.35,ie+.03,.05)],3718648));const $a=.85,ur=-.35,qa=.22,Ka=.65,k_=new jt(qa,qa,Ka,18),z_=new sw({color:16317180,transparent:!0,opacity:.45,roughness:.15,transmission:.85}),Kp=new ve(k_,z_);Kp.position.set(.18,$a,ur),e.add(Kp);const B_=new jt(qa*.92,qa*.92,Ka*.65,16),H_=new vt({color:440020,transparent:!0,opacity:.75,roughness:.1}),_u=new ve(B_,H_);_u.position.set(.18,$a-.1,ur),e.add(_u);const G_=new jt(.08,.08,.06,16),Zp=new ve(G_,new vt({color:2450411}));Zp.position.set(.18,$a+Ka/2+.03,ur),e.add(Zp);const V_=C([new N(.18,$a+Ka/2+.03,ur),new N(.1,.65,ur),new N(0,.52,ur)],14742270,.012);e.add(V_);const W_=new Wc(.05,.12,12),j_=new vt({color:14251782,roughness:.25,metalness:.9}),Za=new ve(W_,j_);Za.rotation.x=Math.PI,Za.position.set(0,.45,ur),e.add(Za);const Ja=260,yu=new Kt,To=new Float32Array(Ja*3),Qa=new Float32Array(Ja*3);for(let We=0;We<Ja;We++){To[We*3+0]=0,To[We*3+1]=.42,To[We*3+2]=ur;const ht=.45;Qa[We*3+0]=(Math.random()-.5)*ht,Qa[We*3+1]=-1.8-Math.random()*1.5,Qa[We*3+2]=(Math.random()-.5)*ht}yu.setAttribute("position",new Ii(To,3));const Jp=new x_({color:3718648,size:.075,transparent:!0,opacity:0,blending:Lh,depthWrite:!1}),Su=new FE(yu,Jp);Su.visible=!1,e.add(Su);const X_={particleSystem:Su,particleGeometry:yu,particleMaterial:Jp,positions:To,velocities:Qa,count:Ja};function el(){const We=new $i,ht=.35,ut=.22,Tn=new jt(ht,ht,ut,20),An=new ve(Tn,S);An.rotation.z=Math.PI/2,An.castShadow=!0,We.add(An);const si=10,ki=new rt(ut*.92,.035,.08);for(let Tu=0;Tu<si;Tu++){const Au=Tu/si*Math.PI*2,Cu=new ve(ki,S);Cu.position.set(0,Math.cos(Au)*(ht+.015),Math.sin(Au)*(ht+.015)),Cu.rotation.x=-Au,We.add(Cu)}const Si=new jt(ht*.55,ht*.55,ut+.02,16),zi=new ve(Si,b);zi.rotation.z=Math.PI/2,We.add(zi);const il=new jt(.08,.08,ut+.05,8),em=new ve(il,p);return em.rotation.z=Math.PI/2,We.add(em),We}const tl=v+.22,Mu=el();Mu.position.set(-tl,R,A),e.add(Mu);const Eu=el();Eu.position.set(tl,R,A),e.add(Eu);const wu=el();wu.position.set(-tl,R,-A),e.add(wu);const bu=el();bu.position.set(tl,R,-A),e.add(bu);const Y_=new jt(.025,.025,.22,12),nl=(We,ht)=>{const ut=new ve(Y_,p);ut.rotation.z=Math.PI/2,ut.position.set(We,R,ht),e.add(ut)};nl(-v-.11,A),nl(v+.11,A),nl(-v-.11,-A),nl(v+.11,-A);const $_=new rt(.03,.35,.08),Qp=new ve($_,new vt({color:1579035,roughness:.7}));return Qp.position.set(-v-.06,.38,.2),e.add(Qp),e.add(C([new N(-v-.06,.55,.2),new N(-v,.9,.2),new N(-v,Ae+.1,.2),new N(-.35,ie+.03,.1)],1579035,.008)),{rootGroup:t,chassisGroup:e,wheels:{frontLeft:Mu,frontRight:Eu,rearLeft:wu,rearRight:bu},ultrasonicCones:O_,sprayParticles:X_,statusLedMaterial:Ga,sprayNozzleMesh:Za,tankLiquidMesh:_u}}const CC=[{id:"pvc_frame",label:"PVC Straddle Chassis",color:"#f8fafc",description:"High-clearance white PVC tubular frame with elbows and T-couplings"},{id:"hopper_bed",label:"Foam-Board Tray",color:"#94a3b8",description:"White sunpack open electronics deck secured with black zip-ties"},{id:"esp32_arduino",label:"ESP32 & Arduino",color:"#38bdf8",description:"ESP32 on breadboard + Arduino Mega/Uno mainboard"},{id:"l298n_driver",label:"L298N Motor Driver",color:"#ef4444",description:"Dual H-bridge driver with black extruded finned heatsink"},{id:"relay_spray",label:"Relay & Spray Bottle",color:"#2563eb",description:"5V Songle relay switching mini pump with clear reservoir bottle"},{id:"ultrasonic",label:"HC-SR04 Ultrasonics",color:"#f59e0b",description:"Mounted on front PVC leg & under-chassis with black zip-ties"},{id:"sensors_imu",label:"DHT & MPU-6050",color:"#10b981",description:"Wall-mounted DHT sensor & 6-axis gyro/accelerometer"},{id:"solar_battery",label:"Solar & Battery",color:"#b45309",description:"Rear bracket photovoltaic panel & 4-cell power pack"}],hc={OBSTACLE_CM:25,WARNING_CM:60,MAX_ULTRASONIC_RANGE_CM:250};class RC{constructor(e){ze(this,"container");ze(this,"scene");ze(this,"camera");ze(this,"renderer");ze(this,"controls");ze(this,"robot");ze(this,"animFrameId",null);ze(this,"isDestroyed",!1);ze(this,"groundGrid");ze(this,"fieldPlane");ze(this,"lastTime",performance.now());ze(this,"wheelSpeed",0);ze(this,"wheelAngle",0);ze(this,"targetWheelSpeed",0);ze(this,"targetTurnDiff",0);ze(this,"gridOffset",0);ze(this,"targetPitch",0);ze(this,"targetRoll",0);ze(this,"isPumpActive",!1);ze(this,"isRobotConnected",!1);ze(this,"currentMovement","STOP");ze(this,"leftDist",72);ze(this,"centerDist",48);ze(this,"rightDist",86);ze(this,"targetCamPos",new N(4.6,3.8,4.6));ze(this,"targetControlsTarget",new N(0,1.35,0));ze(this,"isTransitioningCam",!1);this.container=e,this.scene=new TE,this.scene.background=null;const n=e.clientWidth||600,i=e.clientHeight||420;this.camera=new kn(45,n/i,.1,100),this.camera.position.copy(this.targetCamPos),this.renderer=new hC({antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setSize(n,i),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=jv,e.appendChild(this.renderer.domElement),this.controls=new pC(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.06,this.controls.minDistance=2.5,this.controls.maxDistance=20,this.controls.maxPolarAngle=Math.PI/2+.05,this.controls.target.copy(this.targetControlsTarget),this.controls.update(),this.setupLighting(),this.setupGround(),this.robot=AC(),this.scene.add(this.robot.rootGroup),this.animate=this.animate.bind(this),this.animFrameId=requestAnimationFrame(this.animate)}setupLighting(){const e=new dw(16777215,.85);this.scene.add(e);const n=new Nd(16777215,1.2);n.position.set(6,12,8),n.castShadow=!0,n.shadow.mapSize.width=1024,n.shadow.mapSize.height=1024,n.shadow.camera.near=.5,n.shadow.camera.far=30,n.shadow.camera.left=-6,n.shadow.camera.right=6,n.shadow.camera.top=6,n.shadow.camera.bottom=-6,n.shadow.bias=-5e-4,this.scene.add(n);const i=new Nd(16777215,.95);i.position.set(0,5,0),this.scene.add(i);const r=new Nd(1096065,.6);r.position.set(-6,3,-6),this.scene.add(r);const s=new cw(165063,.4,4);s.position.set(0,.4,0),this.scene.add(s)}setupGround(){const e=new Ha(30,30),n=new vt({color:461588,roughness:.9,metalness:.1});this.fieldPlane=new ve(e,n),this.fieldPlane.rotation.x=-Math.PI/2,this.fieldPlane.position.y=0,this.fieldPlane.receiveShadow=!0,this.scene.add(this.fieldPlane),this.groundGrid=new T_(24,24,1096065,1976635),this.groundGrid.position.y=.005,this.scene.add(this.groundGrid);const i=new Op({color:3359061});for(let r=-6;r<=6;r+=3){const s=[new N(r,.01,-12),new N(r,.01,12)],o=new Kt().setFromPoints(s),a=new g_(o,i);this.scene.add(a)}}updateTelemetry(e){var o,a,l;if(!e){this.isRobotConnected=!1,this.currentMovement="STOP",this.targetWheelSpeed=0,this.targetTurnDiff=0,this.targetPitch=0,this.targetRoll=0,this.isPumpActive=!1;return}const n=e.mode==="SIMULATION"||e.hardware_mode==="SIMULATION";this.isRobotConnected=n?!0:!!e.esp32_connected;const i=(e.movement||((o=e.actuators)==null?void 0:o.motor_state)||"STOP").toUpperCase();this.currentMovement=i,!this.isRobotConnected||i==="STOP"||i==="STOPPED"?(this.targetWheelSpeed=0,this.targetTurnDiff=0):i==="FORWARD"||i==="MOVING_FORWARD"?(this.targetWheelSpeed=7,this.targetTurnDiff=0):i==="BACKWARD"||i==="MOVING_BACKWARD"?(this.targetWheelSpeed=-7,this.targetTurnDiff=0):i==="LEFT"||i==="TURNING_LEFT"?(this.targetWheelSpeed=4,this.targetTurnDiff=-1):(i==="RIGHT"||i==="TURNING_RIGHT")&&(this.targetWheelSpeed=4,this.targetTurnDiff=1);const r=e.ultrasonic;this.isRobotConnected&&r?(this.leftDist=r.left!=null?Number(r.left):r.distance_cm!=null?r.distance_cm*1.1:70,this.centerDist=r.center!=null?Number(r.center):r.distance_cm!=null?r.distance_cm:50,this.rightDist=r.right!=null?Number(r.right):r.distance_cm!=null?r.distance_cm*1.2:80):(this.leftDist=999,this.centerDist=999,this.rightDist=999),this.targetPitch=0,this.targetRoll=0;const s=((a=e.pump)==null?void 0:a.state)||((l=e.actuators)!=null&&l.pump_active?"ON":"OFF");this.isPumpActive=this.isRobotConnected&&s==="ON"}setView(e){switch(this.isTransitioningCam=!0,e){case"isometric":this.targetCamPos.set(4.6,3.8,4.6),this.targetControlsTarget.set(0,1.35,0);break;case"front":this.targetCamPos.set(0,1.35,4.8),this.targetControlsTarget.set(0,1.25,0);break;case"top":this.targetCamPos.set(0,4.8,.05),this.targetControlsTarget.set(0,1.45,0);break;case"side":this.targetCamPos.set(5,1.35,0),this.targetControlsTarget.set(0,1.25,0);break}}animate(e){if(this.isDestroyed)return;this.animFrameId=requestAnimationFrame(this.animate);const n=Math.min((e-this.lastTime)/1e3,.1);if(this.lastTime=e,this.isTransitioningCam&&(this.camera.position.lerp(this.targetCamPos,.08),this.controls.target.lerp(this.targetControlsTarget,.08),this.camera.position.distanceTo(this.targetCamPos)<.05&&(this.isTransitioningCam=!1)),this.controls.update(),this.wheelSpeed=$o.lerp(this.wheelSpeed,this.targetWheelSpeed,.1),Math.abs(this.wheelSpeed)>.01){const s=this.wheelSpeed*n,{frontLeft:o,frontRight:a,rearLeft:l,rearRight:c}=this.robot.wheels;this.targetTurnDiff===0?(o.rotation.x+=s,a.rotation.x+=s,l.rotation.x+=s,c.rotation.x+=s,this.gridOffset=(this.gridOffset-s*.1)%1,this.groundGrid.position.z=this.gridOffset):this.targetTurnDiff<0?(o.rotation.x-=s*.7,l.rotation.x-=s*.7,a.rotation.x+=s*.7,c.rotation.x+=s*.7):(o.rotation.x+=s*.7,l.rotation.x+=s*.7,a.rotation.x-=s*.7,c.rotation.x-=s*.7)}const i=this.robot.chassisGroup;i.rotation.x=0,i.rotation.z=0,this.updateUltrasonicCone(this.robot.ultrasonicCones.leftMesh,this.robot.ultrasonicCones.leftMaterial,this.leftDist,e),this.updateUltrasonicCone(this.robot.ultrasonicCones.centerMesh,this.robot.ultrasonicCones.centerMaterial,this.centerDist,e),this.updateUltrasonicCone(this.robot.ultrasonicCones.rightMesh,this.robot.ultrasonicCones.rightMaterial,this.rightDist,e);const r=this.robot.sprayParticles;if(this.isPumpActive){r.particleSystem.visible=!0,r.particleMaterial.opacity=$o.lerp(r.particleMaterial.opacity,.75,.1);const s=r.positions,o=r.velocities,a=r.count,l=.45,c=-.35;for(let f=0;f<a;f++)if(s[f*3+0]+=o[f*3+0]*n,s[f*3+1]+=o[f*3+1]*n,s[f*3+2]+=o[f*3+2]*n,s[f*3+1]<.05){s[f*3+0]=(Math.random()-.5)*.12,s[f*3+1]=l,s[f*3+2]=c;const p=.5;o[f*3+0]=(Math.random()-.5)*p,o[f*3+1]=-1.8-Math.random()*1.5,o[f*3+2]=(Math.random()-.5)*p}r.particleGeometry.attributes.position.needsUpdate=!0}else r.particleMaterial.opacity>.01?r.particleMaterial.opacity=$o.lerp(r.particleMaterial.opacity,0,.15):r.particleSystem.visible=!1;if(this.isRobotConnected){const s=.5+.5*Math.sin(e*.006);this.robot.statusLedMaterial.color.setRGB(.2*s,.7*s,1*s)}else{const s=Math.sin(e*.003)>0?.9:.2;this.robot.statusLedMaterial.color.setRGB(s,.1,.1)}this.renderer.render(this.scene,this.camera)}updateUltrasonicCone(e,n,i,r){if(!this.isRobotConnected||i>hc.MAX_ULTRASONIC_RANGE_CM){e.visible=!1;return}e.visible=!0;const s=$o.clamp(i/100,.25,2.4);if(e.scale.set(1,1,s),i<hc.OBSTACLE_CM){const o=.6+.4*Math.sin(r*.015);n.color.setHex(16007006),n.opacity=.8*o}else i<=hc.WARNING_CM?(n.color.setHex(16096779),n.opacity=.5):(n.color.setHex(1096065),n.opacity=.35)}resize(){if(!this.container||this.isDestroyed)return;const e=this.container.clientWidth,n=this.container.clientHeight;e===0||n===0||(this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,n))}destroy(){this.isDestroyed=!0,this.animFrameId!==null&&(cancelAnimationFrame(this.animFrameId),this.animFrameId=null),this.controls.dispose(),this.scene.traverse(e=>{if(e.isMesh){const n=e;n.geometry&&n.geometry.dispose(),n.material&&(Array.isArray(n.material)?n.material.forEach(i=>i.dispose()):n.material.dispose())}}),this.renderer.dispose(),this.renderer.domElement&&this.renderer.domElement.parentNode&&this.renderer.domElement.parentNode.removeChild(this.renderer.domElement)}}const PC=({telemetry:t})=>{var L,V,ee,q,G,H,X,Q;const e=fe.useRef(null),n=fe.useRef(null),i=new URLSearchParams(window.location.search).get("view")||"isometric",[r,s]=fe.useState(i),[o,a]=fe.useState(!0);fe.useEffect(()=>{if(!e.current)return;const se=new RC(e.current);n.current=se,i!=="isometric"&&se.setView(i);const ue=()=>{se.resize()};return window.addEventListener("resize",ue),se.updateTelemetry(t),()=>{window.removeEventListener("resize",ue),se.destroy(),n.current=null}},[]),fe.useEffect(()=>{n.current&&n.current.updateTelemetry(t)},[t]);const l=se=>{s(se),n.current&&n.current.setView(se)},c=(t==null?void 0:t.mode)==="SIMULATION"||(t==null?void 0:t.hardware_mode)==="SIMULATION",f=c?!0:!!(t!=null&&t.esp32_connected),p=((t==null?void 0:t.movement)||((L=t==null?void 0:t.actuators)==null?void 0:L.motor_state)||"STOP").toUpperCase(),d=t==null?void 0:t.ultrasonic,m=(d==null?void 0:d.center)!=null?Number(d.center):(d==null?void 0:d.distance_cm)!=null?d.distance_cm:f?50:null,g=(d==null?void 0:d.left)!=null?Number(d.left):f?70:null,M=(d==null?void 0:d.right)!=null?Number(d.right):f?80:null,x=m!=null?Math.min(m,g??999,M??999):999,h=f&&x<hc.OBSTACLE_CM,_=((V=t==null?void 0:t.pump)==null?void 0:V.state)||((ee=t==null?void 0:t.actuators)!=null&&ee.pump_active?"ON":"OFF"),E=f&&_==="ON",S=(t==null?void 0:t.mpu6050)||(t==null?void 0:t.imu),b=(S==null?void 0:S.pitch_deg)!=null?Number(S.pitch_deg).toFixed(1):f?"0.0":"--",T=(S==null?void 0:S.roll_deg)!=null?Number(S.roll_deg).toFixed(1):f?"0.0":"--",C=(t==null?void 0:t.soil_moisture)!=null?typeof t.soil_moisture=="number"?t.soil_moisture.toFixed(1):((q=t.soil_moisture.moisture_pct)==null?void 0:q.toFixed(1))??"--":"--",v=((G=t==null?void 0:t.dht22)==null?void 0:G.temperature)??((H=t==null?void 0:t.environment)==null?void 0:H.temperature_c),A=((X=t==null?void 0:t.dht22)==null?void 0:X.humidity)??((Q=t==null?void 0:t.environment)==null?void 0:Q.humidity_pct),R=t==null?void 0:t.npk,D=(R==null?void 0:R.n)??(R==null?void 0:R.nitrogen_mg_kg),O=(R==null?void 0:R.p)??(R==null?void 0:R.phosphorus_mg_kg),U=(R==null?void 0:R.k)??(R==null?void 0:R.potassium_mg_kg);return u.jsxs("div",{className:"glass-panel",style:{padding:"1.25rem",width:"100%",boxSizing:"border-box"},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.85rem",flexWrap:"wrap",gap:"0.75rem"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.65rem"},children:[u.jsx("div",{style:{width:"38px",height:"38px",borderRadius:"10px",background:"linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(6, 182, 212, 0.2))",border:"1px solid rgba(16, 185, 129, 0.4)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 0 15px rgba(16, 185, 129, 0.2)"},children:u.jsx(N1,{size:20,color:"var(--emerald-400)"})}),u.jsxs("div",{children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[u.jsx("h2",{style:{fontSize:"1.05rem",fontWeight:800,margin:0,color:"#fff",letterSpacing:"-0.01em"},children:"AGRI GUARD DIGITAL TWIN"}),c?u.jsx("span",{className:"status-pill",style:{background:"rgba(56, 189, 248, 0.15)",color:"var(--sky-400)",border:"1px solid rgba(56, 189, 248, 0.35)",fontSize:"0.64rem",padding:"0.15rem 0.45rem",fontWeight:800},children:"SIMULATION DATA"}):f?u.jsx("span",{className:"status-pill status-online",style:{fontSize:"0.64rem",padding:"0.15rem 0.45rem",fontWeight:800},children:"REAL HARDWARE LIVE"}):u.jsx("span",{className:"status-pill status-offline",style:{fontSize:"0.64rem",padding:"0.15rem 0.45rem",fontWeight:800},children:"DIGITAL TWIN OFFLINE"})]}),u.jsx("p",{style:{fontSize:"0.74rem",color:"var(--text-muted)",margin:"0.15rem 0 0 0"},children:"Live 3D Engineering Representation & Kinematic Twin of the Physical Prototype"})]})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem",flexWrap:"wrap"},children:[u.jsx("span",{style:{fontSize:"0.7rem",color:"var(--text-dim)",fontWeight:600,marginRight:"0.2rem"},children:"View:"}),[{id:"isometric",label:"Isometric"},{id:"top",label:"Top (Deck)"},{id:"front",label:"Front (Gantry)"},{id:"side",label:"Side (Profile)"}].map(({id:se,label:ue})=>u.jsx("button",{type:"button",onClick:()=>l(se),className:"btn",style:{padding:"0.25rem 0.65rem",fontSize:"0.7rem",fontWeight:r===se?800:600,borderRadius:"6px",background:r===se?"var(--emerald-500)":"rgba(255, 255, 255, 0.05)",color:r===se?"#05080f":"var(--text-muted)",border:r===se?"1px solid var(--emerald-400)":"1px solid rgba(255, 255, 255, 0.1)",cursor:"pointer",transition:"all 0.15s ease"},children:ue},se)),u.jsxs("button",{type:"button",onClick:()=>l("isometric"),title:"Reset to default camera orientation",className:"btn btn-outline",style:{padding:"0.25rem 0.5rem",fontSize:"0.7rem",borderRadius:"6px",display:"flex",alignItems:"center",gap:"0.3rem",color:"var(--text-muted)"},children:[u.jsx(W1,{size:12}),"Reset"]})]})]}),u.jsxs("div",{style:{position:"relative",width:"100%",height:"460px",borderRadius:"12px",overflow:"hidden",background:"radial-gradient(ellipse at center, rgba(15, 23, 42, 0.8) 0%, rgba(5, 8, 15, 0.95) 100%)",border:"1px solid var(--border-subtle)",boxShadow:"inset 0 0 40px rgba(0, 0, 0, 0.6)"},children:[u.jsx("div",{ref:e,style:{width:"100%",height:"100%",cursor:"grab"}}),u.jsxs("div",{style:{position:"absolute",top:"12px",left:"12px",display:"flex",flexDirection:"column",gap:"6px",pointerEvents:"none"},children:[u.jsxs("div",{style:{background:"rgba(15, 23, 42, 0.85)",backdropFilter:"blur(8px)",border:"1px solid rgba(255, 255, 255, 0.12)",borderRadius:"8px",padding:"6px 10px",display:"flex",alignItems:"center",gap:"8px",boxShadow:"0 4px 12px rgba(0,0,0,0.4)"},children:[u.jsxs("div",{style:{width:"24px",height:"24px",borderRadius:"6px",background:p!=="STOP"?"rgba(16, 185, 129, 0.25)":"rgba(255, 255, 255, 0.08)",display:"flex",alignItems:"center",justifyContent:"center",color:p!=="STOP"?"var(--emerald-400)":"var(--text-muted)"},children:[p==="FORWARD"&&u.jsx(Mp,{size:15}),p==="BACKWARD"&&u.jsx(_p,{size:15}),p==="LEFT"&&u.jsx(yp,{size:15}),p==="RIGHT"&&u.jsx(Sp,{size:15}),p==="STOP"&&u.jsx(Ep,{size:13})]}),u.jsxs("div",{children:[u.jsx("div",{style:{fontSize:"0.62rem",color:"var(--text-dim)",fontWeight:700,textTransform:"uppercase"},children:"Mobility State"}),u.jsx("div",{style:{fontSize:"0.78rem",fontWeight:800,color:p!=="STOP"?"var(--emerald-400)":"#fff"},children:p})]})]}),u.jsxs("div",{style:{background:E?"rgba(6, 182, 212, 0.2)":"rgba(15, 23, 42, 0.85)",backdropFilter:"blur(8px)",border:`1px solid ${E?"rgba(6, 182, 212, 0.5)":"rgba(255, 255, 255, 0.12)"}`,borderRadius:"8px",padding:"6px 10px",display:"flex",alignItems:"center",gap:"8px",boxShadow:E?"0 0 15px rgba(6, 182, 212, 0.3)":"0 4px 12px rgba(0,0,0,0.4)"},children:[u.jsx(cu,{size:16,color:E?"var(--cyan-400)":"var(--text-dim)",className:E?"pulse":""}),u.jsxs("div",{children:[u.jsx("div",{style:{fontSize:"0.62rem",color:"var(--text-dim)",fontWeight:700,textTransform:"uppercase"},children:"Spray Nozzle"}),u.jsx("div",{style:{fontSize:"0.76rem",fontWeight:800,color:E?"var(--cyan-400)":"var(--text-muted)"},children:E?"SPRAY ACTIVE (Atomizing)":"SPRAY READY (Idle)"})]})]})]}),u.jsxs("div",{style:{position:"absolute",top:"12px",right:"12px",display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"6px",pointerEvents:"none"},children:[h&&u.jsxs("div",{style:{background:"rgba(244, 63, 94, 0.25)",backdropFilter:"blur(8px)",border:"1px solid var(--rose-500)",borderRadius:"8px",padding:"6px 10px",display:"flex",alignItems:"center",gap:"6px",color:"#fff",fontSize:"0.74rem",fontWeight:800,boxShadow:"0 0 18px rgba(244, 63, 94, 0.4)"},children:[u.jsx(Aa,{size:15,color:"var(--rose-400)"}),u.jsxs("span",{children:["OBSTACLE DETECTED (",x.toFixed(0)," cm)"]})]}),u.jsxs("div",{style:{background:"rgba(15, 23, 42, 0.85)",backdropFilter:"blur(8px)",border:"1px solid rgba(255, 255, 255, 0.12)",borderRadius:"8px",padding:"6px 10px",display:"flex",gap:"12px"},children:[u.jsxs("div",{style:{textAlign:"center"},children:[u.jsx("div",{style:{fontSize:"0.60rem",color:"var(--text-dim)",fontWeight:700},children:"LEFT"}),u.jsx("div",{className:"mono",style:{fontSize:"0.75rem",fontWeight:800,color:"#fff"},children:g!=null?`${g.toFixed(0)}cm`:"--"})]}),u.jsxs("div",{style:{textAlign:"center",borderLeft:"1px solid rgba(255,255,255,0.1)",paddingLeft:"8px"},children:[u.jsx("div",{style:{fontSize:"0.60rem",color:h?"var(--rose-400)":"var(--text-dim)",fontWeight:800},children:"CENTER"}),u.jsx("div",{className:"mono",style:{fontSize:"0.75rem",fontWeight:800,color:h?"var(--rose-400)":"var(--amber-400)"},children:m!=null?`${m.toFixed(0)}cm`:"--"})]}),u.jsxs("div",{style:{textAlign:"center",borderLeft:"1px solid rgba(255,255,255,0.1)",paddingLeft:"8px"},children:[u.jsx("div",{style:{fontSize:"0.60rem",color:"var(--text-dim)",fontWeight:700},children:"RIGHT"}),u.jsx("div",{className:"mono",style:{fontSize:"0.75rem",fontWeight:800,color:"#fff"},children:M!=null?`${M.toFixed(0)}cm`:"--"})]})]})]}),u.jsxs("div",{style:{position:"absolute",bottom:"12px",left:"12px",display:"flex",gap:"8px",pointerEvents:"none"},children:[u.jsxs("div",{style:{background:"rgba(15, 23, 42, 0.85)",backdropFilter:"blur(8px)",border:"1px solid rgba(255, 255, 255, 0.12)",borderRadius:"8px",padding:"5px 9px",display:"flex",alignItems:"center",gap:"6px",fontSize:"0.72rem"},children:[u.jsx(Fv,{size:14,color:"var(--emerald-400)"}),u.jsx("span",{style:{color:"var(--text-dim)"},children:"IMU Tilt:"}),u.jsxs("span",{className:"mono",style:{color:"#fff",fontWeight:700},children:["P: ",b,"° | R: ",T,"°"]})]}),(t==null?void 0:t.battery_voltage)&&u.jsxs("div",{style:{background:"rgba(15, 23, 42, 0.85)",backdropFilter:"blur(8px)",border:"1px solid rgba(255, 255, 255, 0.12)",borderRadius:"8px",padding:"5px 9px",display:"flex",alignItems:"center",gap:"6px",fontSize:"0.72rem"},children:[u.jsx(Wv,{size:14,color:"var(--sky-400)"}),u.jsxs("span",{className:"mono",style:{color:"var(--sky-400)",fontWeight:800},children:[t.battery_voltage.toFixed(1),"V"]})]})]}),u.jsxs("div",{style:{position:"absolute",bottom:"12px",right:"12px",display:"flex",gap:"8px",pointerEvents:"none"},children:[u.jsxs("div",{style:{background:"rgba(15, 23, 42, 0.85)",backdropFilter:"blur(8px)",border:"1px solid rgba(255, 255, 255, 0.12)",borderRadius:"8px",padding:"5px 9px",display:"flex",alignItems:"center",gap:"5px",fontSize:"0.72rem"},children:[u.jsx(zv,{size:13,color:"var(--sky-400)"}),u.jsx("span",{style:{color:"var(--text-dim)"},children:"Soil:"}),u.jsxs("span",{className:"mono",style:{color:"#fff",fontWeight:700},children:[C,"%"]})]}),v!=null&&u.jsxs("div",{style:{background:"rgba(15, 23, 42, 0.85)",backdropFilter:"blur(8px)",border:"1px solid rgba(255, 255, 255, 0.12)",borderRadius:"8px",padding:"5px 9px",display:"flex",alignItems:"center",gap:"5px",fontSize:"0.72rem"},children:[u.jsx(Gv,{size:13,color:"var(--amber-400)"}),u.jsxs("span",{className:"mono",style:{color:"#fff",fontWeight:700},children:[Number(v).toFixed(1),"°C · ",A!=null?`${Number(A).toFixed(0)}%`:""]})]}),D!=null&&u.jsxs("div",{style:{background:"rgba(15, 23, 42, 0.85)",backdropFilter:"blur(8px)",border:"1px solid rgba(255, 255, 255, 0.12)",borderRadius:"8px",padding:"5px 9px",display:"flex",alignItems:"center",gap:"5px",fontSize:"0.72rem"},children:[u.jsx(Iv,{size:13,color:"var(--pink-400)"}),u.jsxs("span",{className:"mono",style:{color:"#fff",fontWeight:700},children:["NPK: ",D,"-",O,"-",U]})]})]}),!f&&u.jsxs("div",{style:{position:"absolute",inset:0,background:"rgba(5, 8, 15, 0.75)",backdropFilter:"blur(4px)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"8px"},children:[u.jsx(ho,{size:28,color:"var(--rose-400)"}),u.jsx("div",{style:{fontSize:"0.95rem",fontWeight:800,color:"var(--rose-400)"},children:"DIGITAL TWIN OFFLINE"}),u.jsx("p",{style:{fontSize:"0.75rem",color:"var(--text-muted)",margin:0,maxWidth:"320px",textAlign:"center"},children:"Physical robot communication is disconnected. Reconnect via Wi-Fi or Bluetooth in the Connectivity Panel to resume live kinematic streaming."})]})]}),u.jsxs("div",{style:{marginTop:"0.75rem",padding:"0.55rem 0.85rem",background:"rgba(0, 0, 0, 0.25)",borderRadius:"8px",border:"1px solid var(--border-subtle)",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"0.6rem"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.45rem",fontSize:"0.72rem",color:"var(--text-dim)",fontWeight:700},children:[u.jsx(z1,{size:14,color:"var(--emerald-400)"}),u.jsx("span",{children:"PROTOTYPE SUBSYSTEMS:"})]}),u.jsx("div",{style:{display:"flex",alignItems:"center",gap:"0.85rem",flexWrap:"wrap"},children:CC.map(se=>u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.35rem",fontSize:"0.70rem"},title:se.description,children:[u.jsx("span",{style:{width:"8px",height:"8px",borderRadius:"50%",background:se.color,boxShadow:`0 0 6px ${se.color}`}}),u.jsx("span",{style:{color:"var(--text-secondary)",fontWeight:600},children:se.label})]},se.id))})]})]})},NC=()=>{const{telemetry:t,wsConnected:e}=T1(),[n,i]=fe.useState("dashboard"),[r,s]=fe.useState("ZONE-R1C1"),[o,a]=fe.useState(null),[l,c]=fe.useState(null),[f,p]=fe.useState(!1),[d,m]=fe.useState(null),g=async E=>{p(!0),m(null);try{const S=await eM(E);a(S.detection),c(S.decision),m(`Analysis complete: ${S.detection.display_name} (${(S.detection.confidence*100).toFixed(0)}%)`)}catch(S){m(`Scan error: ${S.message||"Camera capture failed"}`)}finally{p(!1)}},M=async(E,S,b)=>{const T=await nM(E,S,b);return l&&c({...l,approved:S,status:S?"FARMER_APPROVED_EXECUTED":"REJECTED_BY_FARMER"}),T},x=async(E,S,b=0)=>await Z1(E,S,b),h=async()=>await J1(),_=async()=>await Q1();return u.jsx("div",{style:{maxWidth:"1780px",margin:"0 auto",padding:"1rem"},children:u.jsxs("div",{className:"dashboard-with-sidebar",children:[u.jsxs("aside",{className:"dashboard-sidebar",children:[u.jsx(q1,{telemetry:t,wsConnected:e,activeTab:n,setActiveTab:i,onEmergencyStop:_}),u.jsx(hM,{})]}),u.jsxs("main",{className:"dashboard-main-content",children:[n==="dashboard"&&u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.25rem"},children:[d&&u.jsx("div",{style:{padding:"0.65rem 1rem",borderRadius:"8px",background:d.includes("error")?"rgba(244, 63, 94, 0.15)":"rgba(16, 185, 129, 0.15)",border:`1px solid ${d.includes("error")?"var(--rose-500)":"var(--emerald-500)"}`,color:"#fff",fontSize:"0.85rem"},children:d}),u.jsx(fM,{telemetry:t}),u.jsx(PC,{telemetry:t}),u.jsx("section",{style:{width:"100%"},children:u.jsx(cM,{telemetry:t})})]}),n==="remote"&&u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem",width:"100%"},children:u.jsxs("div",{className:"remote-cockpit-layout",children:[u.jsx("div",{className:"remote-cockpit-camera",children:u.jsx(lM,{cameraStatus:t==null?void 0:t.camera_status,lastDetection:o,isScanning:f,onTriggerScan:g,activeZoneId:(t==null?void 0:t.active_zone_id)??r,telemetry:t,onMove:x,onStop:h})}),u.jsx("div",{className:"remote-cockpit-controls",children:u.jsx(uM,{telemetry:t,onMove:x,onStop:h,onEmergencyStop:_,onSprayApprove:M})})]})}),n==="diagnostics"&&u.jsx(dM,{})]})]})})};zd.createRoot(document.getElementById("root")).render(u.jsx(Ng.StrictMode,{children:u.jsx(NC,{})}));
