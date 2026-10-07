var V_=Object.defineProperty;var j_=(t,e,n)=>e in t?V_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Oe=(t,e,n)=>j_(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function X_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var I0={exports:{}},Ec={},L0={exports:{}},it={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yo=Symbol.for("react.element"),$_=Symbol.for("react.portal"),Y_=Symbol.for("react.fragment"),q_=Symbol.for("react.strict_mode"),K_=Symbol.for("react.profiler"),Z_=Symbol.for("react.provider"),J_=Symbol.for("react.context"),Q_=Symbol.for("react.forward_ref"),ev=Symbol.for("react.suspense"),tv=Symbol.for("react.memo"),nv=Symbol.for("react.lazy"),up=Symbol.iterator;function iv(t){return t===null||typeof t!="object"?null:(t=up&&t[up]||t["@@iterator"],typeof t=="function"?t:null)}var U0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O0=Object.assign,F0={};function aa(t,e,n){this.props=t,this.context=e,this.refs=F0,this.updater=n||U0}aa.prototype.isReactComponent={};aa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};aa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function k0(){}k0.prototype=aa.prototype;function zf(t,e,n){this.props=t,this.context=e,this.refs=F0,this.updater=n||U0}var Bf=zf.prototype=new k0;Bf.constructor=zf;O0(Bf,aa.prototype);Bf.isPureReactComponent=!0;var dp=Array.isArray,z0=Object.prototype.hasOwnProperty,Hf={current:null},B0={key:!0,ref:!0,__self:!0,__source:!0};function H0(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)z0.call(e,i)&&!B0.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var c=Array(o),u=0;u<o;u++)c[u]=arguments[u+2];r.children=c}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:yo,type:t,key:s,ref:a,props:r,_owner:Hf.current}}function rv(t,e){return{$$typeof:yo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Gf(t){return typeof t=="object"&&t!==null&&t.$$typeof===yo}function sv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var fp=/\/+/g;function $c(t,e){return typeof t=="object"&&t!==null&&t.key!=null?sv(""+t.key):e.toString(36)}function El(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case yo:case $_:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+$c(a,0):i,dp(r)?(n="",t!=null&&(n=t.replace(fp,"$&/")+"/"),El(r,e,n,"",function(u){return u})):r!=null&&(Gf(r)&&(r=rv(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(fp,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",dp(t))for(var o=0;o<t.length;o++){s=t[o];var c=i+$c(s,o);a+=El(s,e,n,c,r)}else if(c=iv(t),typeof c=="function")for(t=c.call(t),o=0;!(s=t.next()).done;)s=s.value,c=i+$c(s,o++),a+=El(s,e,n,c,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Io(t,e,n){if(t==null)return t;var i=[],r=0;return El(t,i,"","",function(s){return e.call(n,s,r++)}),i}function av(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var yn={current:null},bl={transition:null},ov={ReactCurrentDispatcher:yn,ReactCurrentBatchConfig:bl,ReactCurrentOwner:Hf};function G0(){throw Error("act(...) is not supported in production builds of React.")}it.Children={map:Io,forEach:function(t,e,n){Io(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Io(t,function(){e++}),e},toArray:function(t){return Io(t,function(e){return e})||[]},only:function(t){if(!Gf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};it.Component=aa;it.Fragment=Y_;it.Profiler=K_;it.PureComponent=zf;it.StrictMode=q_;it.Suspense=ev;it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ov;it.act=G0;it.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=O0({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Hf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(c in e)z0.call(e,c)&&!B0.hasOwnProperty(c)&&(i[c]=e[c]===void 0&&o!==void 0?o[c]:e[c])}var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){o=Array(c);for(var u=0;u<c;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:yo,type:t.type,key:r,ref:s,props:i,_owner:a}};it.createContext=function(t){return t={$$typeof:J_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Z_,_context:t},t.Consumer=t};it.createElement=H0;it.createFactory=function(t){var e=H0.bind(null,t);return e.type=t,e};it.createRef=function(){return{current:null}};it.forwardRef=function(t){return{$$typeof:Q_,render:t}};it.isValidElement=Gf;it.lazy=function(t){return{$$typeof:nv,_payload:{_status:-1,_result:t},_init:av}};it.memo=function(t,e){return{$$typeof:tv,type:t,compare:e===void 0?null:e}};it.startTransition=function(t){var e=bl.transition;bl.transition={};try{t()}finally{bl.transition=e}};it.unstable_act=G0;it.useCallback=function(t,e){return yn.current.useCallback(t,e)};it.useContext=function(t){return yn.current.useContext(t)};it.useDebugValue=function(){};it.useDeferredValue=function(t){return yn.current.useDeferredValue(t)};it.useEffect=function(t,e){return yn.current.useEffect(t,e)};it.useId=function(){return yn.current.useId()};it.useImperativeHandle=function(t,e,n){return yn.current.useImperativeHandle(t,e,n)};it.useInsertionEffect=function(t,e){return yn.current.useInsertionEffect(t,e)};it.useLayoutEffect=function(t,e){return yn.current.useLayoutEffect(t,e)};it.useMemo=function(t,e){return yn.current.useMemo(t,e)};it.useReducer=function(t,e,n){return yn.current.useReducer(t,e,n)};it.useRef=function(t){return yn.current.useRef(t)};it.useState=function(t){return yn.current.useState(t)};it.useSyncExternalStore=function(t,e,n){return yn.current.useSyncExternalStore(t,e,n)};it.useTransition=function(){return yn.current.useTransition()};it.version="18.3.1";L0.exports=it;var oe=L0.exports;const W0=X_(oe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lv=oe,cv=Symbol.for("react.element"),uv=Symbol.for("react.fragment"),dv=Object.prototype.hasOwnProperty,fv=lv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hv={key:!0,ref:!0,__self:!0,__source:!0};function V0(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)dv.call(e,i)&&!hv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:cv,type:t,key:s,ref:a,props:r,_owner:fv.current}}Ec.Fragment=uv;Ec.jsx=V0;Ec.jsxs=V0;I0.exports=Ec;var l=I0.exports,Qu={},j0={exports:{}},Fn={},X0={exports:{}},$0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,U){var X=O.length;O.push(U);e:for(;0<X;){var K=X-1>>>1,le=O[K];if(0<r(le,U))O[K]=U,O[X]=le,X=K;else break e}}function n(O){return O.length===0?null:O[0]}function i(O){if(O.length===0)return null;var U=O[0],X=O.pop();if(X!==U){O[0]=X;e:for(var K=0,le=O.length,ue=le>>>1;K<ue;){var we=2*(K+1)-1,Fe=O[we],ke=we+1,Z=O[ke];if(0>r(Fe,X))ke<le&&0>r(Z,Fe)?(O[K]=Z,O[ke]=X,K=ke):(O[K]=Fe,O[we]=X,K=we);else if(ke<le&&0>r(Z,X))O[K]=Z,O[ke]=X,K=ke;else break e}}return U}function r(O,U){var X=O.sortIndex-U.sortIndex;return X!==0?X:O.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var c=[],u=[],p=1,h=null,f=3,m=!1,_=!1,M=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(O){for(var U=n(u);U!==null;){if(U.callback===null)i(u);else if(U.startTime<=O)i(u),U.sortIndex=U.expirationTime,e(c,U);else break;U=n(u)}}function S(O){if(M=!1,E(O),!_)if(n(c)!==null)_=!0,Q(b);else{var U=n(u);U!==null&&k(S,U.startTime-O)}}function b(O,U){_=!1,M&&(M=!1,d(y),y=-1),m=!0;var X=f;try{for(E(U),h=n(c);h!==null&&(!(h.expirationTime>U)||O&&!N());){var K=h.callback;if(typeof K=="function"){h.callback=null,f=h.priorityLevel;var le=K(h.expirationTime<=U);U=t.unstable_now(),typeof le=="function"?h.callback=le:h===n(c)&&i(c),E(U)}else i(c);h=n(c)}if(h!==null)var ue=!0;else{var we=n(u);we!==null&&k(S,we.startTime-U),ue=!1}return ue}finally{h=null,f=X,m=!1}}var T=!1,C=null,y=-1,A=5,P=-1;function N(){return!(t.unstable_now()-P<A)}function I(){if(C!==null){var O=t.unstable_now();P=O;var U=!0;try{U=C(!0,O)}finally{U?F():(T=!1,C=null)}}else T=!1}var F;if(typeof x=="function")F=function(){x(I)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,V=D.port2;D.port1.onmessage=I,F=function(){V.postMessage(null)}}else F=function(){g(I,0)};function Q(O){C=O,T||(T=!0,F())}function k(O,U){y=g(function(){O(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,Q(b))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(O){switch(f){case 1:case 2:case 3:var U=3;break;default:U=f}var X=f;f=U;try{return O()}finally{f=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,U){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var X=f;f=O;try{return U()}finally{f=X}},t.unstable_scheduleCallback=function(O,U,X){var K=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?K+X:K):X=K,O){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=X+le,O={id:p++,callback:U,priorityLevel:O,startTime:X,expirationTime:le,sortIndex:-1},X>K?(O.sortIndex=X,e(u,O),n(c)===null&&O===n(u)&&(M?(d(y),y=-1):M=!0,k(S,X-K))):(O.sortIndex=le,e(c,O),_||m||(_=!0,Q(b))),O},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(O){var U=f;return function(){var X=f;f=U;try{return O.apply(this,arguments)}finally{f=X}}}})($0);X0.exports=$0;var pv=X0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mv=oe,On=pv;function ce(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Y0=new Set,qa={};function es(t,e){Ks(t,e),Ks(t+"Capture",e)}function Ks(t,e){for(qa[t]=e,t=0;t<e.length;t++)Y0.add(e[t])}var Gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ed=Object.prototype.hasOwnProperty,gv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hp={},pp={};function xv(t){return ed.call(pp,t)?!0:ed.call(hp,t)?!1:gv.test(t)?pp[t]=!0:(hp[t]=!0,!1)}function _v(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function vv(t,e,n,i){if(e===null||typeof e>"u"||_v(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Sn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var tn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){tn[t]=new Sn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];tn[e]=new Sn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){tn[t]=new Sn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){tn[t]=new Sn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){tn[t]=new Sn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){tn[t]=new Sn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){tn[t]=new Sn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){tn[t]=new Sn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){tn[t]=new Sn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Wf=/[\-:]([a-z])/g;function Vf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Wf,Vf);tn[e]=new Sn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Wf,Vf);tn[e]=new Sn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Wf,Vf);tn[e]=new Sn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){tn[t]=new Sn(t,1,!1,t.toLowerCase(),null,!1,!1)});tn.xlinkHref=new Sn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){tn[t]=new Sn(t,1,!1,t.toLowerCase(),null,!0,!0)});function jf(t,e,n,i){var r=tn.hasOwnProperty(e)?tn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(vv(e,n,r,i)&&(n=null),i||r===null?xv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var $i=mv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Lo=Symbol.for("react.element"),Ts=Symbol.for("react.portal"),As=Symbol.for("react.fragment"),Xf=Symbol.for("react.strict_mode"),td=Symbol.for("react.profiler"),q0=Symbol.for("react.provider"),K0=Symbol.for("react.context"),$f=Symbol.for("react.forward_ref"),nd=Symbol.for("react.suspense"),id=Symbol.for("react.suspense_list"),Yf=Symbol.for("react.memo"),rr=Symbol.for("react.lazy"),Z0=Symbol.for("react.offscreen"),mp=Symbol.iterator;function ma(t){return t===null||typeof t!="object"?null:(t=mp&&t[mp]||t["@@iterator"],typeof t=="function"?t:null)}var Nt=Object.assign,Yc;function Na(t){if(Yc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Yc=e&&e[1]||""}return`
`+Yc+t}var qc=!1;function Kc(t,e){if(!t||qc)return"";qc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var c=`
`+r[a].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=a&&0<=o);break}}}finally{qc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Na(t):""}function yv(t){switch(t.tag){case 5:return Na(t.type);case 16:return Na("Lazy");case 13:return Na("Suspense");case 19:return Na("SuspenseList");case 0:case 2:case 15:return t=Kc(t.type,!1),t;case 11:return t=Kc(t.type.render,!1),t;case 1:return t=Kc(t.type,!0),t;default:return""}}function rd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case As:return"Fragment";case Ts:return"Portal";case td:return"Profiler";case Xf:return"StrictMode";case nd:return"Suspense";case id:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case K0:return(t.displayName||"Context")+".Consumer";case q0:return(t._context.displayName||"Context")+".Provider";case $f:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Yf:return e=t.displayName||null,e!==null?e:rd(t.type)||"Memo";case rr:e=t._payload,t=t._init;try{return rd(t(e))}catch{}}return null}function Sv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return rd(e);case 8:return e===Xf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function yr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function J0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Mv(t){var e=J0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Uo(t){t._valueTracker||(t._valueTracker=Mv(t))}function Q0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=J0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Wl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function sd(t,e){var n=e.checked;return Nt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function gp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=yr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function eg(t,e){e=e.checked,e!=null&&jf(t,"checked",e,!1)}function ad(t,e){eg(t,e);var n=yr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?od(t,e.type,n):e.hasOwnProperty("defaultValue")&&od(t,e.type,yr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function xp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function od(t,e,n){(e!=="number"||Wl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Da=Array.isArray;function Hs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+yr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function ld(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ce(91));return Nt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function _p(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ce(92));if(Da(n)){if(1<n.length)throw Error(ce(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:yr(n)}}function tg(t,e){var n=yr(e.value),i=yr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function vp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ng(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ng(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Oo,ig=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Oo=Oo||document.createElement("div"),Oo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Oo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ka(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Fa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ev=["Webkit","ms","Moz","O"];Object.keys(Fa).forEach(function(t){Ev.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Fa[e]=Fa[t]})});function rg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Fa.hasOwnProperty(t)&&Fa[t]?(""+e).trim():e+"px"}function sg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=rg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var bv=Nt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ud(t,e){if(e){if(bv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ce(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ce(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ce(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ce(62))}}function dd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fd=null;function qf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var hd=null,Gs=null,Ws=null;function yp(t){if(t=Eo(t)){if(typeof hd!="function")throw Error(ce(280));var e=t.stateNode;e&&(e=Cc(e),hd(t.stateNode,t.type,e))}}function ag(t){Gs?Ws?Ws.push(t):Ws=[t]:Gs=t}function og(){if(Gs){var t=Gs,e=Ws;if(Ws=Gs=null,yp(t),e)for(t=0;t<e.length;t++)yp(e[t])}}function lg(t,e){return t(e)}function cg(){}var Zc=!1;function ug(t,e,n){if(Zc)return t(e,n);Zc=!0;try{return lg(t,e,n)}finally{Zc=!1,(Gs!==null||Ws!==null)&&(cg(),og())}}function Za(t,e){var n=t.stateNode;if(n===null)return null;var i=Cc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ce(231,e,typeof n));return n}var pd=!1;if(Gi)try{var ga={};Object.defineProperty(ga,"passive",{get:function(){pd=!0}}),window.addEventListener("test",ga,ga),window.removeEventListener("test",ga,ga)}catch{pd=!1}function wv(t,e,n,i,r,s,a,o,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(p){this.onError(p)}}var ka=!1,Vl=null,jl=!1,md=null,Tv={onError:function(t){ka=!0,Vl=t}};function Av(t,e,n,i,r,s,a,o,c){ka=!1,Vl=null,wv.apply(Tv,arguments)}function Cv(t,e,n,i,r,s,a,o,c){if(Av.apply(this,arguments),ka){if(ka){var u=Vl;ka=!1,Vl=null}else throw Error(ce(198));jl||(jl=!0,md=u)}}function ts(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function dg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Sp(t){if(ts(t)!==t)throw Error(ce(188))}function Rv(t){var e=t.alternate;if(!e){if(e=ts(t),e===null)throw Error(ce(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Sp(r),t;if(s===i)return Sp(r),e;s=s.sibling}throw Error(ce(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ce(189))}}if(n.alternate!==i)throw Error(ce(190))}if(n.tag!==3)throw Error(ce(188));return n.stateNode.current===n?t:e}function fg(t){return t=Rv(t),t!==null?hg(t):null}function hg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=hg(t);if(e!==null)return e;t=t.sibling}return null}var pg=On.unstable_scheduleCallback,Mp=On.unstable_cancelCallback,Pv=On.unstable_shouldYield,Nv=On.unstable_requestPaint,kt=On.unstable_now,Dv=On.unstable_getCurrentPriorityLevel,Kf=On.unstable_ImmediatePriority,mg=On.unstable_UserBlockingPriority,Xl=On.unstable_NormalPriority,Iv=On.unstable_LowPriority,gg=On.unstable_IdlePriority,bc=null,vi=null;function Lv(t){if(vi&&typeof vi.onCommitFiberRoot=="function")try{vi.onCommitFiberRoot(bc,t,void 0,(t.current.flags&128)===128)}catch{}}var ai=Math.clz32?Math.clz32:Fv,Uv=Math.log,Ov=Math.LN2;function Fv(t){return t>>>=0,t===0?32:31-(Uv(t)/Ov|0)|0}var Fo=64,ko=4194304;function Ia(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function $l(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Ia(o):(s&=a,s!==0&&(i=Ia(s)))}else a=n&~r,a!==0?i=Ia(a):s!==0&&(i=Ia(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ai(e),r=1<<n,i|=t[n],e&=~r;return i}function kv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-ai(s),o=1<<a,c=r[a];c===-1?(!(o&n)||o&i)&&(r[a]=kv(o,e)):c<=e&&(t.expiredLanes|=o),s&=~o}}function gd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function xg(){var t=Fo;return Fo<<=1,!(Fo&4194240)&&(Fo=64),t}function Jc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function So(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ai(e),t[e]=n}function Bv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ai(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Zf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ai(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var _t=0;function _g(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var vg,Jf,yg,Sg,Mg,xd=!1,zo=[],fr=null,hr=null,pr=null,Ja=new Map,Qa=new Map,ar=[],Hv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ep(t,e){switch(t){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":hr=null;break;case"mouseover":case"mouseout":pr=null;break;case"pointerover":case"pointerout":Ja.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qa.delete(e.pointerId)}}function xa(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Eo(e),e!==null&&Jf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Gv(t,e,n,i,r){switch(e){case"focusin":return fr=xa(fr,t,e,n,i,r),!0;case"dragenter":return hr=xa(hr,t,e,n,i,r),!0;case"mouseover":return pr=xa(pr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ja.set(s,xa(Ja.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Qa.set(s,xa(Qa.get(s)||null,t,e,n,i,r)),!0}return!1}function Eg(t){var e=Fr(t.target);if(e!==null){var n=ts(e);if(n!==null){if(e=n.tag,e===13){if(e=dg(n),e!==null){t.blockedOn=e,Mg(t.priority,function(){yg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function wl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=_d(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);fd=i,n.target.dispatchEvent(i),fd=null}else return e=Eo(n),e!==null&&Jf(e),t.blockedOn=n,!1;e.shift()}return!0}function bp(t,e,n){wl(t)&&n.delete(e)}function Wv(){xd=!1,fr!==null&&wl(fr)&&(fr=null),hr!==null&&wl(hr)&&(hr=null),pr!==null&&wl(pr)&&(pr=null),Ja.forEach(bp),Qa.forEach(bp)}function _a(t,e){t.blockedOn===e&&(t.blockedOn=null,xd||(xd=!0,On.unstable_scheduleCallback(On.unstable_NormalPriority,Wv)))}function eo(t){function e(r){return _a(r,t)}if(0<zo.length){_a(zo[0],t);for(var n=1;n<zo.length;n++){var i=zo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(fr!==null&&_a(fr,t),hr!==null&&_a(hr,t),pr!==null&&_a(pr,t),Ja.forEach(e),Qa.forEach(e),n=0;n<ar.length;n++)i=ar[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ar.length&&(n=ar[0],n.blockedOn===null);)Eg(n),n.blockedOn===null&&ar.shift()}var Vs=$i.ReactCurrentBatchConfig,Yl=!0;function Vv(t,e,n,i){var r=_t,s=Vs.transition;Vs.transition=null;try{_t=1,Qf(t,e,n,i)}finally{_t=r,Vs.transition=s}}function jv(t,e,n,i){var r=_t,s=Vs.transition;Vs.transition=null;try{_t=4,Qf(t,e,n,i)}finally{_t=r,Vs.transition=s}}function Qf(t,e,n,i){if(Yl){var r=_d(t,e,n,i);if(r===null)lu(t,e,i,ql,n),Ep(t,i);else if(Gv(r,t,e,n,i))i.stopPropagation();else if(Ep(t,i),e&4&&-1<Hv.indexOf(t)){for(;r!==null;){var s=Eo(r);if(s!==null&&vg(s),s=_d(t,e,n,i),s===null&&lu(t,e,i,ql,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else lu(t,e,i,null,n)}}var ql=null;function _d(t,e,n,i){if(ql=null,t=qf(i),t=Fr(t),t!==null)if(e=ts(t),e===null)t=null;else if(n=e.tag,n===13){if(t=dg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ql=t,null}function bg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Dv()){case Kf:return 1;case mg:return 4;case Xl:case Iv:return 16;case gg:return 536870912;default:return 16}default:return 16}}var cr=null,eh=null,Tl=null;function wg(){if(Tl)return Tl;var t,e=eh,n=e.length,i,r="value"in cr?cr.value:cr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Tl=r.slice(t,1<i?1-i:void 0)}function Al(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Bo(){return!0}function wp(){return!1}function kn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Bo:wp,this.isPropagationStopped=wp,this}return Nt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Bo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Bo)},persist:function(){},isPersistent:Bo}),e}var oa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},th=kn(oa),Mo=Nt({},oa,{view:0,detail:0}),Xv=kn(Mo),Qc,eu,va,wc=Nt({},Mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==va&&(va&&t.type==="mousemove"?(Qc=t.screenX-va.screenX,eu=t.screenY-va.screenY):eu=Qc=0,va=t),Qc)},movementY:function(t){return"movementY"in t?t.movementY:eu}}),Tp=kn(wc),$v=Nt({},wc,{dataTransfer:0}),Yv=kn($v),qv=Nt({},Mo,{relatedTarget:0}),tu=kn(qv),Kv=Nt({},oa,{animationName:0,elapsedTime:0,pseudoElement:0}),Zv=kn(Kv),Jv=Nt({},oa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Qv=kn(Jv),ey=Nt({},oa,{data:0}),Ap=kn(ey),ty={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ny={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ry(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=iy[t])?!!e[t]:!1}function nh(){return ry}var sy=Nt({},Mo,{key:function(t){if(t.key){var e=ty[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Al(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ny[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nh,charCode:function(t){return t.type==="keypress"?Al(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Al(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ay=kn(sy),oy=Nt({},wc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cp=kn(oy),ly=Nt({},Mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nh}),cy=kn(ly),uy=Nt({},oa,{propertyName:0,elapsedTime:0,pseudoElement:0}),dy=kn(uy),fy=Nt({},wc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),hy=kn(fy),py=[9,13,27,32],ih=Gi&&"CompositionEvent"in window,za=null;Gi&&"documentMode"in document&&(za=document.documentMode);var my=Gi&&"TextEvent"in window&&!za,Tg=Gi&&(!ih||za&&8<za&&11>=za),Rp=" ",Pp=!1;function Ag(t,e){switch(t){case"keyup":return py.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Cs=!1;function gy(t,e){switch(t){case"compositionend":return Cg(e);case"keypress":return e.which!==32?null:(Pp=!0,Rp);case"textInput":return t=e.data,t===Rp&&Pp?null:t;default:return null}}function xy(t,e){if(Cs)return t==="compositionend"||!ih&&Ag(t,e)?(t=wg(),Tl=eh=cr=null,Cs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Tg&&e.locale!=="ko"?null:e.data;default:return null}}var _y={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Np(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!_y[t.type]:e==="textarea"}function Rg(t,e,n,i){ag(i),e=Kl(e,"onChange"),0<e.length&&(n=new th("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ba=null,to=null;function vy(t){Bg(t,0)}function Tc(t){var e=Ns(t);if(Q0(e))return t}function yy(t,e){if(t==="change")return e}var Pg=!1;if(Gi){var nu;if(Gi){var iu="oninput"in document;if(!iu){var Dp=document.createElement("div");Dp.setAttribute("oninput","return;"),iu=typeof Dp.oninput=="function"}nu=iu}else nu=!1;Pg=nu&&(!document.documentMode||9<document.documentMode)}function Ip(){Ba&&(Ba.detachEvent("onpropertychange",Ng),to=Ba=null)}function Ng(t){if(t.propertyName==="value"&&Tc(to)){var e=[];Rg(e,to,t,qf(t)),ug(vy,e)}}function Sy(t,e,n){t==="focusin"?(Ip(),Ba=e,to=n,Ba.attachEvent("onpropertychange",Ng)):t==="focusout"&&Ip()}function My(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Tc(to)}function Ey(t,e){if(t==="click")return Tc(e)}function by(t,e){if(t==="input"||t==="change")return Tc(e)}function wy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ci=typeof Object.is=="function"?Object.is:wy;function no(t,e){if(ci(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ed.call(e,r)||!ci(t[r],e[r]))return!1}return!0}function Lp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Up(t,e){var n=Lp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Lp(n)}}function Dg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Dg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ig(){for(var t=window,e=Wl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Wl(t.document)}return e}function rh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ty(t){var e=Ig(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Dg(n.ownerDocument.documentElement,n)){if(i!==null&&rh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Up(n,s);var a=Up(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ay=Gi&&"documentMode"in document&&11>=document.documentMode,Rs=null,vd=null,Ha=null,yd=!1;function Op(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yd||Rs==null||Rs!==Wl(i)||(i=Rs,"selectionStart"in i&&rh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ha&&no(Ha,i)||(Ha=i,i=Kl(vd,"onSelect"),0<i.length&&(e=new th("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Rs)))}function Ho(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ps={animationend:Ho("Animation","AnimationEnd"),animationiteration:Ho("Animation","AnimationIteration"),animationstart:Ho("Animation","AnimationStart"),transitionend:Ho("Transition","TransitionEnd")},ru={},Lg={};Gi&&(Lg=document.createElement("div").style,"AnimationEvent"in window||(delete Ps.animationend.animation,delete Ps.animationiteration.animation,delete Ps.animationstart.animation),"TransitionEvent"in window||delete Ps.transitionend.transition);function Ac(t){if(ru[t])return ru[t];if(!Ps[t])return t;var e=Ps[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Lg)return ru[t]=e[n];return t}var Ug=Ac("animationend"),Og=Ac("animationiteration"),Fg=Ac("animationstart"),kg=Ac("transitionend"),zg=new Map,Fp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function br(t,e){zg.set(t,e),es(e,[t])}for(var su=0;su<Fp.length;su++){var au=Fp[su],Cy=au.toLowerCase(),Ry=au[0].toUpperCase()+au.slice(1);br(Cy,"on"+Ry)}br(Ug,"onAnimationEnd");br(Og,"onAnimationIteration");br(Fg,"onAnimationStart");br("dblclick","onDoubleClick");br("focusin","onFocus");br("focusout","onBlur");br(kg,"onTransitionEnd");Ks("onMouseEnter",["mouseout","mouseover"]);Ks("onMouseLeave",["mouseout","mouseover"]);Ks("onPointerEnter",["pointerout","pointerover"]);Ks("onPointerLeave",["pointerout","pointerover"]);es("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));es("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));es("onBeforeInput",["compositionend","keypress","textInput","paste"]);es("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));es("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));es("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var La="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Py=new Set("cancel close invalid load scroll toggle".split(" ").concat(La));function kp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Cv(i,e,void 0,t),t.currentTarget=null}function Bg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],c=o.instance,u=o.currentTarget;if(o=o.listener,c!==s&&r.isPropagationStopped())break e;kp(r,o,u),s=c}else for(a=0;a<i.length;a++){if(o=i[a],c=o.instance,u=o.currentTarget,o=o.listener,c!==s&&r.isPropagationStopped())break e;kp(r,o,u),s=c}}}if(jl)throw t=md,jl=!1,md=null,t}function Et(t,e){var n=e[wd];n===void 0&&(n=e[wd]=new Set);var i=t+"__bubble";n.has(i)||(Hg(e,t,2,!1),n.add(i))}function ou(t,e,n){var i=0;e&&(i|=4),Hg(n,t,i,e)}var Go="_reactListening"+Math.random().toString(36).slice(2);function io(t){if(!t[Go]){t[Go]=!0,Y0.forEach(function(n){n!=="selectionchange"&&(Py.has(n)||ou(n,!1,t),ou(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Go]||(e[Go]=!0,ou("selectionchange",!1,e))}}function Hg(t,e,n,i){switch(bg(e)){case 1:var r=Vv;break;case 4:r=jv;break;default:r=Qf}n=r.bind(null,e,n,t),r=void 0,!pd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function lu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Fr(o),a===null)return;if(c=a.tag,c===5||c===6){i=s=a;continue e}o=o.parentNode}}i=i.return}ug(function(){var u=s,p=qf(n),h=[];e:{var f=zg.get(t);if(f!==void 0){var m=th,_=t;switch(t){case"keypress":if(Al(n)===0)break e;case"keydown":case"keyup":m=ay;break;case"focusin":_="focus",m=tu;break;case"focusout":_="blur",m=tu;break;case"beforeblur":case"afterblur":m=tu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Tp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Yv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=cy;break;case Ug:case Og:case Fg:m=Zv;break;case kg:m=dy;break;case"scroll":m=Xv;break;case"wheel":m=hy;break;case"copy":case"cut":case"paste":m=Qv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Cp}var M=(e&4)!==0,g=!M&&t==="scroll",d=M?f!==null?f+"Capture":null:f;M=[];for(var x=u,E;x!==null;){E=x;var S=E.stateNode;if(E.tag===5&&S!==null&&(E=S,d!==null&&(S=Za(x,d),S!=null&&M.push(ro(x,S,E)))),g)break;x=x.return}0<M.length&&(f=new m(f,_,null,n,p),h.push({event:f,listeners:M}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==fd&&(_=n.relatedTarget||n.fromElement)&&(Fr(_)||_[Wi]))break e;if((m||f)&&(f=p.window===p?p:(f=p.ownerDocument)?f.defaultView||f.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=u,_=_?Fr(_):null,_!==null&&(g=ts(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=u),m!==_)){if(M=Tp,S="onMouseLeave",d="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(M=Cp,S="onPointerLeave",d="onPointerEnter",x="pointer"),g=m==null?f:Ns(m),E=_==null?f:Ns(_),f=new M(S,x+"leave",m,n,p),f.target=g,f.relatedTarget=E,S=null,Fr(p)===u&&(M=new M(d,x+"enter",_,n,p),M.target=E,M.relatedTarget=g,S=M),g=S,m&&_)t:{for(M=m,d=_,x=0,E=M;E;E=us(E))x++;for(E=0,S=d;S;S=us(S))E++;for(;0<x-E;)M=us(M),x--;for(;0<E-x;)d=us(d),E--;for(;x--;){if(M===d||d!==null&&M===d.alternate)break t;M=us(M),d=us(d)}M=null}else M=null;m!==null&&zp(h,f,m,M,!1),_!==null&&g!==null&&zp(h,g,_,M,!0)}}e:{if(f=u?Ns(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var b=yy;else if(Np(f))if(Pg)b=by;else{b=My;var T=Sy}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(b=Ey);if(b&&(b=b(t,u))){Rg(h,b,n,p);break e}T&&T(t,f,u),t==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&od(f,"number",f.value)}switch(T=u?Ns(u):window,t){case"focusin":(Np(T)||T.contentEditable==="true")&&(Rs=T,vd=u,Ha=null);break;case"focusout":Ha=vd=Rs=null;break;case"mousedown":yd=!0;break;case"contextmenu":case"mouseup":case"dragend":yd=!1,Op(h,n,p);break;case"selectionchange":if(Ay)break;case"keydown":case"keyup":Op(h,n,p)}var C;if(ih)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Cs?Ag(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Tg&&n.locale!=="ko"&&(Cs||y!=="onCompositionStart"?y==="onCompositionEnd"&&Cs&&(C=wg()):(cr=p,eh="value"in cr?cr.value:cr.textContent,Cs=!0)),T=Kl(u,y),0<T.length&&(y=new Ap(y,t,null,n,p),h.push({event:y,listeners:T}),C?y.data=C:(C=Cg(n),C!==null&&(y.data=C)))),(C=my?gy(t,n):xy(t,n))&&(u=Kl(u,"onBeforeInput"),0<u.length&&(p=new Ap("onBeforeInput","beforeinput",null,n,p),h.push({event:p,listeners:u}),p.data=C))}Bg(h,e)})}function ro(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Kl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Za(t,n),s!=null&&i.unshift(ro(t,s,r)),s=Za(t,e),s!=null&&i.push(ro(t,s,r))),t=t.return}return i}function us(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function zp(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,c=o.alternate,u=o.stateNode;if(c!==null&&c===i)break;o.tag===5&&u!==null&&(o=u,r?(c=Za(n,s),c!=null&&a.unshift(ro(n,c,o))):r||(c=Za(n,s),c!=null&&a.push(ro(n,c,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var Ny=/\r\n?/g,Dy=/\u0000|\uFFFD/g;function Bp(t){return(typeof t=="string"?t:""+t).replace(Ny,`
`).replace(Dy,"")}function Wo(t,e,n){if(e=Bp(e),Bp(t)!==e&&n)throw Error(ce(425))}function Zl(){}var Sd=null,Md=null;function Ed(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var bd=typeof setTimeout=="function"?setTimeout:void 0,Iy=typeof clearTimeout=="function"?clearTimeout:void 0,Hp=typeof Promise=="function"?Promise:void 0,Ly=typeof queueMicrotask=="function"?queueMicrotask:typeof Hp<"u"?function(t){return Hp.resolve(null).then(t).catch(Uy)}:bd;function Uy(t){setTimeout(function(){throw t})}function cu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),eo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);eo(e)}function mr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Gp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var la=Math.random().toString(36).slice(2),gi="__reactFiber$"+la,so="__reactProps$"+la,Wi="__reactContainer$"+la,wd="__reactEvents$"+la,Oy="__reactListeners$"+la,Fy="__reactHandles$"+la;function Fr(t){var e=t[gi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Wi]||n[gi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Gp(t);t!==null;){if(n=t[gi])return n;t=Gp(t)}return e}t=n,n=t.parentNode}return null}function Eo(t){return t=t[gi]||t[Wi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ns(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ce(33))}function Cc(t){return t[so]||null}var Td=[],Ds=-1;function wr(t){return{current:t}}function bt(t){0>Ds||(t.current=Td[Ds],Td[Ds]=null,Ds--)}function St(t,e){Ds++,Td[Ds]=t.current,t.current=e}var Sr={},dn=wr(Sr),wn=wr(!1),Xr=Sr;function Zs(t,e){var n=t.type.contextTypes;if(!n)return Sr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Tn(t){return t=t.childContextTypes,t!=null}function Jl(){bt(wn),bt(dn)}function Wp(t,e,n){if(dn.current!==Sr)throw Error(ce(168));St(dn,e),St(wn,n)}function Gg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ce(108,Sv(t)||"Unknown",r));return Nt({},n,i)}function Ql(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Sr,Xr=dn.current,St(dn,t),St(wn,wn.current),!0}function Vp(t,e,n){var i=t.stateNode;if(!i)throw Error(ce(169));n?(t=Gg(t,e,Xr),i.__reactInternalMemoizedMergedChildContext=t,bt(wn),bt(dn),St(dn,t)):bt(wn),St(wn,n)}var Ii=null,Rc=!1,uu=!1;function Wg(t){Ii===null?Ii=[t]:Ii.push(t)}function ky(t){Rc=!0,Wg(t)}function Tr(){if(!uu&&Ii!==null){uu=!0;var t=0,e=_t;try{var n=Ii;for(_t=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ii=null,Rc=!1}catch(r){throw Ii!==null&&(Ii=Ii.slice(t+1)),pg(Kf,Tr),r}finally{_t=e,uu=!1}}return null}var Is=[],Ls=0,ec=null,tc=0,Wn=[],Vn=0,$r=null,Oi=1,Fi="";function Lr(t,e){Is[Ls++]=tc,Is[Ls++]=ec,ec=t,tc=e}function Vg(t,e,n){Wn[Vn++]=Oi,Wn[Vn++]=Fi,Wn[Vn++]=$r,$r=t;var i=Oi;t=Fi;var r=32-ai(i)-1;i&=~(1<<r),n+=1;var s=32-ai(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Oi=1<<32-ai(e)+r|n<<r|i,Fi=s+t}else Oi=1<<s|n<<r|i,Fi=t}function sh(t){t.return!==null&&(Lr(t,1),Vg(t,1,0))}function ah(t){for(;t===ec;)ec=Is[--Ls],Is[Ls]=null,tc=Is[--Ls],Is[Ls]=null;for(;t===$r;)$r=Wn[--Vn],Wn[Vn]=null,Fi=Wn[--Vn],Wn[Vn]=null,Oi=Wn[--Vn],Wn[Vn]=null}var Un=null,Ln=null,Tt=!1,ii=null;function jg(t,e){var n=jn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function jp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Un=t,Ln=mr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Un=t,Ln=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=$r!==null?{id:Oi,overflow:Fi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=jn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Un=t,Ln=null,!0):!1;default:return!1}}function Ad(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Cd(t){if(Tt){var e=Ln;if(e){var n=e;if(!jp(t,e)){if(Ad(t))throw Error(ce(418));e=mr(n.nextSibling);var i=Un;e&&jp(t,e)?jg(i,n):(t.flags=t.flags&-4097|2,Tt=!1,Un=t)}}else{if(Ad(t))throw Error(ce(418));t.flags=t.flags&-4097|2,Tt=!1,Un=t}}}function Xp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Un=t}function Vo(t){if(t!==Un)return!1;if(!Tt)return Xp(t),Tt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ed(t.type,t.memoizedProps)),e&&(e=Ln)){if(Ad(t))throw Xg(),Error(ce(418));for(;e;)jg(t,e),e=mr(e.nextSibling)}if(Xp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ce(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ln=mr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ln=null}}else Ln=Un?mr(t.stateNode.nextSibling):null;return!0}function Xg(){for(var t=Ln;t;)t=mr(t.nextSibling)}function Js(){Ln=Un=null,Tt=!1}function oh(t){ii===null?ii=[t]:ii.push(t)}var zy=$i.ReactCurrentBatchConfig;function ya(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ce(309));var i=n.stateNode}if(!i)throw Error(ce(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ce(284));if(!n._owner)throw Error(ce(290,t))}return t}function jo(t,e){throw t=Object.prototype.toString.call(e),Error(ce(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function $p(t){var e=t._init;return e(t._payload)}function $g(t){function e(d,x){if(t){var E=d.deletions;E===null?(d.deletions=[x],d.flags|=16):E.push(x)}}function n(d,x){if(!t)return null;for(;x!==null;)e(d,x),x=x.sibling;return null}function i(d,x){for(d=new Map;x!==null;)x.key!==null?d.set(x.key,x):d.set(x.index,x),x=x.sibling;return d}function r(d,x){return d=vr(d,x),d.index=0,d.sibling=null,d}function s(d,x,E){return d.index=E,t?(E=d.alternate,E!==null?(E=E.index,E<x?(d.flags|=2,x):E):(d.flags|=2,x)):(d.flags|=1048576,x)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,x,E,S){return x===null||x.tag!==6?(x=xu(E,d.mode,S),x.return=d,x):(x=r(x,E),x.return=d,x)}function c(d,x,E,S){var b=E.type;return b===As?p(d,x,E.props.children,S,E.key):x!==null&&(x.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===rr&&$p(b)===x.type)?(S=r(x,E.props),S.ref=ya(d,x,E),S.return=d,S):(S=Ll(E.type,E.key,E.props,null,d.mode,S),S.ref=ya(d,x,E),S.return=d,S)}function u(d,x,E,S){return x===null||x.tag!==4||x.stateNode.containerInfo!==E.containerInfo||x.stateNode.implementation!==E.implementation?(x=_u(E,d.mode,S),x.return=d,x):(x=r(x,E.children||[]),x.return=d,x)}function p(d,x,E,S,b){return x===null||x.tag!==7?(x=Vr(E,d.mode,S,b),x.return=d,x):(x=r(x,E),x.return=d,x)}function h(d,x,E){if(typeof x=="string"&&x!==""||typeof x=="number")return x=xu(""+x,d.mode,E),x.return=d,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Lo:return E=Ll(x.type,x.key,x.props,null,d.mode,E),E.ref=ya(d,null,x),E.return=d,E;case Ts:return x=_u(x,d.mode,E),x.return=d,x;case rr:var S=x._init;return h(d,S(x._payload),E)}if(Da(x)||ma(x))return x=Vr(x,d.mode,E,null),x.return=d,x;jo(d,x)}return null}function f(d,x,E,S){var b=x!==null?x.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return b!==null?null:o(d,x,""+E,S);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Lo:return E.key===b?c(d,x,E,S):null;case Ts:return E.key===b?u(d,x,E,S):null;case rr:return b=E._init,f(d,x,b(E._payload),S)}if(Da(E)||ma(E))return b!==null?null:p(d,x,E,S,null);jo(d,E)}return null}function m(d,x,E,S,b){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(E)||null,o(x,d,""+S,b);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Lo:return d=d.get(S.key===null?E:S.key)||null,c(x,d,S,b);case Ts:return d=d.get(S.key===null?E:S.key)||null,u(x,d,S,b);case rr:var T=S._init;return m(d,x,E,T(S._payload),b)}if(Da(S)||ma(S))return d=d.get(E)||null,p(x,d,S,b,null);jo(x,S)}return null}function _(d,x,E,S){for(var b=null,T=null,C=x,y=x=0,A=null;C!==null&&y<E.length;y++){C.index>y?(A=C,C=null):A=C.sibling;var P=f(d,C,E[y],S);if(P===null){C===null&&(C=A);break}t&&C&&P.alternate===null&&e(d,C),x=s(P,x,y),T===null?b=P:T.sibling=P,T=P,C=A}if(y===E.length)return n(d,C),Tt&&Lr(d,y),b;if(C===null){for(;y<E.length;y++)C=h(d,E[y],S),C!==null&&(x=s(C,x,y),T===null?b=C:T.sibling=C,T=C);return Tt&&Lr(d,y),b}for(C=i(d,C);y<E.length;y++)A=m(C,d,y,E[y],S),A!==null&&(t&&A.alternate!==null&&C.delete(A.key===null?y:A.key),x=s(A,x,y),T===null?b=A:T.sibling=A,T=A);return t&&C.forEach(function(N){return e(d,N)}),Tt&&Lr(d,y),b}function M(d,x,E,S){var b=ma(E);if(typeof b!="function")throw Error(ce(150));if(E=b.call(E),E==null)throw Error(ce(151));for(var T=b=null,C=x,y=x=0,A=null,P=E.next();C!==null&&!P.done;y++,P=E.next()){C.index>y?(A=C,C=null):A=C.sibling;var N=f(d,C,P.value,S);if(N===null){C===null&&(C=A);break}t&&C&&N.alternate===null&&e(d,C),x=s(N,x,y),T===null?b=N:T.sibling=N,T=N,C=A}if(P.done)return n(d,C),Tt&&Lr(d,y),b;if(C===null){for(;!P.done;y++,P=E.next())P=h(d,P.value,S),P!==null&&(x=s(P,x,y),T===null?b=P:T.sibling=P,T=P);return Tt&&Lr(d,y),b}for(C=i(d,C);!P.done;y++,P=E.next())P=m(C,d,y,P.value,S),P!==null&&(t&&P.alternate!==null&&C.delete(P.key===null?y:P.key),x=s(P,x,y),T===null?b=P:T.sibling=P,T=P);return t&&C.forEach(function(I){return e(d,I)}),Tt&&Lr(d,y),b}function g(d,x,E,S){if(typeof E=="object"&&E!==null&&E.type===As&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case Lo:e:{for(var b=E.key,T=x;T!==null;){if(T.key===b){if(b=E.type,b===As){if(T.tag===7){n(d,T.sibling),x=r(T,E.props.children),x.return=d,d=x;break e}}else if(T.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===rr&&$p(b)===T.type){n(d,T.sibling),x=r(T,E.props),x.ref=ya(d,T,E),x.return=d,d=x;break e}n(d,T);break}else e(d,T);T=T.sibling}E.type===As?(x=Vr(E.props.children,d.mode,S,E.key),x.return=d,d=x):(S=Ll(E.type,E.key,E.props,null,d.mode,S),S.ref=ya(d,x,E),S.return=d,d=S)}return a(d);case Ts:e:{for(T=E.key;x!==null;){if(x.key===T)if(x.tag===4&&x.stateNode.containerInfo===E.containerInfo&&x.stateNode.implementation===E.implementation){n(d,x.sibling),x=r(x,E.children||[]),x.return=d,d=x;break e}else{n(d,x);break}else e(d,x);x=x.sibling}x=_u(E,d.mode,S),x.return=d,d=x}return a(d);case rr:return T=E._init,g(d,x,T(E._payload),S)}if(Da(E))return _(d,x,E,S);if(ma(E))return M(d,x,E,S);jo(d,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,x!==null&&x.tag===6?(n(d,x.sibling),x=r(x,E),x.return=d,d=x):(n(d,x),x=xu(E,d.mode,S),x.return=d,d=x),a(d)):n(d,x)}return g}var Qs=$g(!0),Yg=$g(!1),nc=wr(null),ic=null,Us=null,lh=null;function ch(){lh=Us=ic=null}function uh(t){var e=nc.current;bt(nc),t._currentValue=e}function Rd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function js(t,e){ic=t,lh=Us=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(bn=!0),t.firstContext=null)}function $n(t){var e=t._currentValue;if(lh!==t)if(t={context:t,memoizedValue:e,next:null},Us===null){if(ic===null)throw Error(ce(308));Us=t,ic.dependencies={lanes:0,firstContext:t}}else Us=Us.next=t;return e}var kr=null;function dh(t){kr===null?kr=[t]:kr.push(t)}function qg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,dh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Vi(t,i)}function Vi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var sr=!1;function fh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function zi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function gr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,ct&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Vi(t,n)}return r=i.interleaved,r===null?(e.next=e,dh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Vi(t,n)}function Cl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Zf(t,n)}}function Yp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function rc(t,e,n,i){var r=t.updateQueue;sr=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var c=o,u=c.next;c.next=null,a===null?s=u:a.next=u,a=c;var p=t.alternate;p!==null&&(p=p.updateQueue,o=p.lastBaseUpdate,o!==a&&(o===null?p.firstBaseUpdate=u:o.next=u,p.lastBaseUpdate=c))}if(s!==null){var h=r.baseState;a=0,p=u=c=null,o=s;do{var f=o.lane,m=o.eventTime;if((i&f)===f){p!==null&&(p=p.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,M=o;switch(f=e,m=n,M.tag){case 1:if(_=M.payload,typeof _=="function"){h=_.call(m,h,f);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=M.payload,f=typeof _=="function"?_.call(m,h,f):_,f==null)break e;h=Nt({},h,f);break e;case 2:sr=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else m={eventTime:m,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},p===null?(u=p=m,c=h):p=p.next=m,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(p===null&&(c=h),r.baseState=c,r.firstBaseUpdate=u,r.lastBaseUpdate=p,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);qr|=a,t.lanes=a,t.memoizedState=h}}function qp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ce(191,r));r.call(i)}}}var bo={},yi=wr(bo),ao=wr(bo),oo=wr(bo);function zr(t){if(t===bo)throw Error(ce(174));return t}function hh(t,e){switch(St(oo,e),St(ao,t),St(yi,bo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:cd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=cd(e,t)}bt(yi),St(yi,e)}function ea(){bt(yi),bt(ao),bt(oo)}function Zg(t){zr(oo.current);var e=zr(yi.current),n=cd(e,t.type);e!==n&&(St(ao,t),St(yi,n))}function ph(t){ao.current===t&&(bt(yi),bt(ao))}var Ct=wr(0);function sc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var du=[];function mh(){for(var t=0;t<du.length;t++)du[t]._workInProgressVersionPrimary=null;du.length=0}var Rl=$i.ReactCurrentDispatcher,fu=$i.ReactCurrentBatchConfig,Yr=0,Pt=null,Wt=null,Yt=null,ac=!1,Ga=!1,lo=0,By=0;function sn(){throw Error(ce(321))}function gh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ci(t[n],e[n]))return!1;return!0}function xh(t,e,n,i,r,s){if(Yr=s,Pt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Rl.current=t===null||t.memoizedState===null?Vy:jy,t=n(i,r),Ga){s=0;do{if(Ga=!1,lo=0,25<=s)throw Error(ce(301));s+=1,Yt=Wt=null,e.updateQueue=null,Rl.current=Xy,t=n(i,r)}while(Ga)}if(Rl.current=oc,e=Wt!==null&&Wt.next!==null,Yr=0,Yt=Wt=Pt=null,ac=!1,e)throw Error(ce(300));return t}function _h(){var t=lo!==0;return lo=0,t}function pi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Yt===null?Pt.memoizedState=Yt=t:Yt=Yt.next=t,Yt}function Yn(){if(Wt===null){var t=Pt.alternate;t=t!==null?t.memoizedState:null}else t=Wt.next;var e=Yt===null?Pt.memoizedState:Yt.next;if(e!==null)Yt=e,Wt=t;else{if(t===null)throw Error(ce(310));Wt=t,t={memoizedState:Wt.memoizedState,baseState:Wt.baseState,baseQueue:Wt.baseQueue,queue:Wt.queue,next:null},Yt===null?Pt.memoizedState=Yt=t:Yt=Yt.next=t}return Yt}function co(t,e){return typeof e=="function"?e(t):e}function hu(t){var e=Yn(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=Wt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,c=null,u=s;do{var p=u.lane;if((Yr&p)===p)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(o=c=h,a=i):c=c.next=h,Pt.lanes|=p,qr|=p}u=u.next}while(u!==null&&u!==s);c===null?a=i:c.next=o,ci(i,e.memoizedState)||(bn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=c,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Pt.lanes|=s,qr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function pu(t){var e=Yn(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);ci(s,e.memoizedState)||(bn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Jg(){}function Qg(t,e){var n=Pt,i=Yn(),r=e(),s=!ci(i.memoizedState,r);if(s&&(i.memoizedState=r,bn=!0),i=i.queue,vh(nx.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Yt!==null&&Yt.memoizedState.tag&1){if(n.flags|=2048,uo(9,tx.bind(null,n,i,r,e),void 0,null),qt===null)throw Error(ce(349));Yr&30||ex(n,e,r)}return r}function ex(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Pt.updateQueue,e===null?(e={lastEffect:null,stores:null},Pt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function tx(t,e,n,i){e.value=n,e.getSnapshot=i,ix(e)&&rx(t)}function nx(t,e,n){return n(function(){ix(e)&&rx(t)})}function ix(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ci(t,n)}catch{return!0}}function rx(t){var e=Vi(t,1);e!==null&&oi(e,t,1,-1)}function Kp(t){var e=pi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:co,lastRenderedState:t},e.queue=t,t=t.dispatch=Wy.bind(null,Pt,t),[e.memoizedState,t]}function uo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Pt.updateQueue,e===null?(e={lastEffect:null,stores:null},Pt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function sx(){return Yn().memoizedState}function Pl(t,e,n,i){var r=pi();Pt.flags|=t,r.memoizedState=uo(1|e,n,void 0,i===void 0?null:i)}function Pc(t,e,n,i){var r=Yn();i=i===void 0?null:i;var s=void 0;if(Wt!==null){var a=Wt.memoizedState;if(s=a.destroy,i!==null&&gh(i,a.deps)){r.memoizedState=uo(e,n,s,i);return}}Pt.flags|=t,r.memoizedState=uo(1|e,n,s,i)}function Zp(t,e){return Pl(8390656,8,t,e)}function vh(t,e){return Pc(2048,8,t,e)}function ax(t,e){return Pc(4,2,t,e)}function ox(t,e){return Pc(4,4,t,e)}function lx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function cx(t,e,n){return n=n!=null?n.concat([t]):null,Pc(4,4,lx.bind(null,e,t),n)}function yh(){}function ux(t,e){var n=Yn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&gh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function dx(t,e){var n=Yn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&gh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function fx(t,e,n){return Yr&21?(ci(n,e)||(n=xg(),Pt.lanes|=n,qr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,bn=!0),t.memoizedState=n)}function Hy(t,e){var n=_t;_t=n!==0&&4>n?n:4,t(!0);var i=fu.transition;fu.transition={};try{t(!1),e()}finally{_t=n,fu.transition=i}}function hx(){return Yn().memoizedState}function Gy(t,e,n){var i=_r(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},px(t))mx(e,n);else if(n=qg(t,e,n,i),n!==null){var r=_n();oi(n,t,i,r),gx(n,e,i)}}function Wy(t,e,n){var i=_r(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(px(t))mx(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,ci(o,a)){var c=e.interleaved;c===null?(r.next=r,dh(e)):(r.next=c.next,c.next=r),e.interleaved=r;return}}catch{}finally{}n=qg(t,e,r,i),n!==null&&(r=_n(),oi(n,t,i,r),gx(n,e,i))}}function px(t){var e=t.alternate;return t===Pt||e!==null&&e===Pt}function mx(t,e){Ga=ac=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function gx(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Zf(t,n)}}var oc={readContext:$n,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useInsertionEffect:sn,useLayoutEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useMutableSource:sn,useSyncExternalStore:sn,useId:sn,unstable_isNewReconciler:!1},Vy={readContext:$n,useCallback:function(t,e){return pi().memoizedState=[t,e===void 0?null:e],t},useContext:$n,useEffect:Zp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Pl(4194308,4,lx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Pl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Pl(4,2,t,e)},useMemo:function(t,e){var n=pi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=pi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Gy.bind(null,Pt,t),[i.memoizedState,t]},useRef:function(t){var e=pi();return t={current:t},e.memoizedState=t},useState:Kp,useDebugValue:yh,useDeferredValue:function(t){return pi().memoizedState=t},useTransition:function(){var t=Kp(!1),e=t[0];return t=Hy.bind(null,t[1]),pi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Pt,r=pi();if(Tt){if(n===void 0)throw Error(ce(407));n=n()}else{if(n=e(),qt===null)throw Error(ce(349));Yr&30||ex(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Zp(nx.bind(null,i,s,t),[t]),i.flags|=2048,uo(9,tx.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=pi(),e=qt.identifierPrefix;if(Tt){var n=Fi,i=Oi;n=(i&~(1<<32-ai(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=lo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=By++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},jy={readContext:$n,useCallback:ux,useContext:$n,useEffect:vh,useImperativeHandle:cx,useInsertionEffect:ax,useLayoutEffect:ox,useMemo:dx,useReducer:hu,useRef:sx,useState:function(){return hu(co)},useDebugValue:yh,useDeferredValue:function(t){var e=Yn();return fx(e,Wt.memoizedState,t)},useTransition:function(){var t=hu(co)[0],e=Yn().memoizedState;return[t,e]},useMutableSource:Jg,useSyncExternalStore:Qg,useId:hx,unstable_isNewReconciler:!1},Xy={readContext:$n,useCallback:ux,useContext:$n,useEffect:vh,useImperativeHandle:cx,useInsertionEffect:ax,useLayoutEffect:ox,useMemo:dx,useReducer:pu,useRef:sx,useState:function(){return pu(co)},useDebugValue:yh,useDeferredValue:function(t){var e=Yn();return Wt===null?e.memoizedState=t:fx(e,Wt.memoizedState,t)},useTransition:function(){var t=pu(co)[0],e=Yn().memoizedState;return[t,e]},useMutableSource:Jg,useSyncExternalStore:Qg,useId:hx,unstable_isNewReconciler:!1};function ti(t,e){if(t&&t.defaultProps){e=Nt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Pd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Nt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Nc={isMounted:function(t){return(t=t._reactInternals)?ts(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=_n(),r=_r(t),s=zi(i,r);s.payload=e,n!=null&&(s.callback=n),e=gr(t,s,r),e!==null&&(oi(e,t,r,i),Cl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=_n(),r=_r(t),s=zi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=gr(t,s,r),e!==null&&(oi(e,t,r,i),Cl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=_n(),i=_r(t),r=zi(n,i);r.tag=2,e!=null&&(r.callback=e),e=gr(t,r,i),e!==null&&(oi(e,t,i,n),Cl(e,t,i))}};function Jp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!no(n,i)||!no(r,s):!0}function xx(t,e,n){var i=!1,r=Sr,s=e.contextType;return typeof s=="object"&&s!==null?s=$n(s):(r=Tn(e)?Xr:dn.current,i=e.contextTypes,s=(i=i!=null)?Zs(t,r):Sr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Nc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Qp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Nc.enqueueReplaceState(e,e.state,null)}function Nd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},fh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=$n(s):(s=Tn(e)?Xr:dn.current,r.context=Zs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Pd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Nc.enqueueReplaceState(r,r.state,null),rc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ta(t,e){try{var n="",i=e;do n+=yv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function mu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Dd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var $y=typeof WeakMap=="function"?WeakMap:Map;function _x(t,e,n){n=zi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){cc||(cc=!0,Gd=i),Dd(t,e)},n}function vx(t,e,n){n=zi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Dd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Dd(t,e),typeof i!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function em(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new $y;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=oS.bind(null,t,e,n),e.then(t,t))}function tm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function nm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=zi(-1,1),e.tag=2,gr(n,e,1))),n.lanes|=1),t)}var Yy=$i.ReactCurrentOwner,bn=!1;function gn(t,e,n,i){e.child=t===null?Yg(e,null,n,i):Qs(e,t.child,n,i)}function im(t,e,n,i,r){n=n.render;var s=e.ref;return js(e,r),i=xh(t,e,n,i,s,r),n=_h(),t!==null&&!bn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ji(t,e,r)):(Tt&&n&&sh(e),e.flags|=1,gn(t,e,i,r),e.child)}function rm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Ch(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,yx(t,e,s,i,r)):(t=Ll(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:no,n(a,i)&&t.ref===e.ref)return ji(t,e,r)}return e.flags|=1,t=vr(s,i),t.ref=e.ref,t.return=e,e.child=t}function yx(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(no(s,i)&&t.ref===e.ref)if(bn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(bn=!0);else return e.lanes=t.lanes,ji(t,e,r)}return Id(t,e,n,i,r)}function Sx(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},St(Fs,Nn),Nn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,St(Fs,Nn),Nn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,St(Fs,Nn),Nn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,St(Fs,Nn),Nn|=i;return gn(t,e,r,n),e.child}function Mx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Id(t,e,n,i,r){var s=Tn(n)?Xr:dn.current;return s=Zs(e,s),js(e,r),n=xh(t,e,n,i,s,r),i=_h(),t!==null&&!bn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ji(t,e,r)):(Tt&&i&&sh(e),e.flags|=1,gn(t,e,n,r),e.child)}function sm(t,e,n,i,r){if(Tn(n)){var s=!0;Ql(e)}else s=!1;if(js(e,r),e.stateNode===null)Nl(t,e),xx(e,n,i),Nd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=$n(u):(u=Tn(n)?Xr:dn.current,u=Zs(e,u));var p=n.getDerivedStateFromProps,h=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||c!==u)&&Qp(e,a,i,u),sr=!1;var f=e.memoizedState;a.state=f,rc(e,i,a,r),c=e.memoizedState,o!==i||f!==c||wn.current||sr?(typeof p=="function"&&(Pd(e,n,p,i),c=e.memoizedState),(o=sr||Jp(e,n,o,i,f,c,u))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),a.props=i,a.state=c,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Kg(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:ti(e.type,o),a.props=u,h=e.pendingProps,f=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=$n(c):(c=Tn(n)?Xr:dn.current,c=Zs(e,c));var m=n.getDerivedStateFromProps;(p=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||f!==c)&&Qp(e,a,i,c),sr=!1,f=e.memoizedState,a.state=f,rc(e,i,a,r);var _=e.memoizedState;o!==h||f!==_||wn.current||sr?(typeof m=="function"&&(Pd(e,n,m,i),_=e.memoizedState),(u=sr||Jp(e,n,u,i,f,_,c)||!1)?(p||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,c)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=c,i=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Ld(t,e,n,i,s,r)}function Ld(t,e,n,i,r,s){Mx(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Vp(e,n,!1),ji(t,e,s);i=e.stateNode,Yy.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Qs(e,t.child,null,s),e.child=Qs(e,null,o,s)):gn(t,e,o,s),e.memoizedState=i.state,r&&Vp(e,n,!0),e.child}function Ex(t){var e=t.stateNode;e.pendingContext?Wp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Wp(t,e.context,!1),hh(t,e.containerInfo)}function am(t,e,n,i,r){return Js(),oh(r),e.flags|=256,gn(t,e,n,i),e.child}var Ud={dehydrated:null,treeContext:null,retryLane:0};function Od(t){return{baseLanes:t,cachePool:null,transitions:null}}function bx(t,e,n){var i=e.pendingProps,r=Ct.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),St(Ct,r&1),t===null)return Cd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Lc(a,i,0,null),t=Vr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Od(n),e.memoizedState=Ud,t):Sh(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return qy(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var c={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=c,e.deletions=null):(i=vr(r,c),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=vr(o,s):(s=Vr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Od(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Ud,i}return s=t.child,t=s.sibling,i=vr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Sh(t,e){return e=Lc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Xo(t,e,n,i){return i!==null&&oh(i),Qs(e,t.child,null,n),t=Sh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function qy(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=mu(Error(ce(422))),Xo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Lc({mode:"visible",children:i.children},r,0,null),s=Vr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Qs(e,t.child,null,a),e.child.memoizedState=Od(a),e.memoizedState=Ud,s);if(!(e.mode&1))return Xo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ce(419)),i=mu(s,i,void 0),Xo(t,e,a,i)}if(o=(a&t.childLanes)!==0,bn||o){if(i=qt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Vi(t,r),oi(i,t,r,-1))}return Ah(),i=mu(Error(ce(421))),Xo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=lS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Ln=mr(r.nextSibling),Un=e,Tt=!0,ii=null,t!==null&&(Wn[Vn++]=Oi,Wn[Vn++]=Fi,Wn[Vn++]=$r,Oi=t.id,Fi=t.overflow,$r=e),e=Sh(e,i.children),e.flags|=4096,e)}function om(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Rd(t.return,e,n)}function gu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function wx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(gn(t,e,i.children,n),i=Ct.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&om(t,n,e);else if(t.tag===19)om(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(St(Ct,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&sc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),gu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&sc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}gu(e,!0,n,null,s);break;case"together":gu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Nl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ji(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),qr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ce(153));if(e.child!==null){for(t=e.child,n=vr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=vr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ky(t,e,n){switch(e.tag){case 3:Ex(e),Js();break;case 5:Zg(e);break;case 1:Tn(e.type)&&Ql(e);break;case 4:hh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;St(nc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(St(Ct,Ct.current&1),e.flags|=128,null):n&e.child.childLanes?bx(t,e,n):(St(Ct,Ct.current&1),t=ji(t,e,n),t!==null?t.sibling:null);St(Ct,Ct.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return wx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),St(Ct,Ct.current),i)break;return null;case 22:case 23:return e.lanes=0,Sx(t,e,n)}return ji(t,e,n)}var Tx,Fd,Ax,Cx;Tx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fd=function(){};Ax=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,zr(yi.current);var s=null;switch(n){case"input":r=sd(t,r),i=sd(t,i),s=[];break;case"select":r=Nt({},r,{value:void 0}),i=Nt({},i,{value:void 0}),s=[];break;case"textarea":r=ld(t,r),i=ld(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Zl)}ud(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(qa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var c=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&c!==o&&(c!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&o[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(qa.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Et("scroll",t),s||o===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Cx=function(t,e,n,i){n!==i&&(e.flags|=4)};function Sa(t,e){if(!Tt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function an(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Zy(t,e,n){var i=e.pendingProps;switch(ah(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(e),null;case 1:return Tn(e.type)&&Jl(),an(e),null;case 3:return i=e.stateNode,ea(),bt(wn),bt(dn),mh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Vo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ii!==null&&(jd(ii),ii=null))),Fd(t,e),an(e),null;case 5:ph(e);var r=zr(oo.current);if(n=e.type,t!==null&&e.stateNode!=null)Ax(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ce(166));return an(e),null}if(t=zr(yi.current),Vo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[gi]=e,i[so]=s,t=(e.mode&1)!==0,n){case"dialog":Et("cancel",i),Et("close",i);break;case"iframe":case"object":case"embed":Et("load",i);break;case"video":case"audio":for(r=0;r<La.length;r++)Et(La[r],i);break;case"source":Et("error",i);break;case"img":case"image":case"link":Et("error",i),Et("load",i);break;case"details":Et("toggle",i);break;case"input":gp(i,s),Et("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Et("invalid",i);break;case"textarea":_p(i,s),Et("invalid",i)}ud(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Wo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Wo(i.textContent,o,t),r=["children",""+o]):qa.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&Et("scroll",i)}switch(n){case"input":Uo(i),xp(i,s,!0);break;case"textarea":Uo(i),vp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Zl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ng(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[gi]=e,t[so]=i,Tx(t,e,!1,!1),e.stateNode=t;e:{switch(a=dd(n,i),n){case"dialog":Et("cancel",t),Et("close",t),r=i;break;case"iframe":case"object":case"embed":Et("load",t),r=i;break;case"video":case"audio":for(r=0;r<La.length;r++)Et(La[r],t);r=i;break;case"source":Et("error",t),r=i;break;case"img":case"image":case"link":Et("error",t),Et("load",t),r=i;break;case"details":Et("toggle",t),r=i;break;case"input":gp(t,i),r=sd(t,i),Et("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Nt({},i,{value:void 0}),Et("invalid",t);break;case"textarea":_p(t,i),r=ld(t,i),Et("invalid",t);break;default:r=i}ud(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var c=o[s];s==="style"?sg(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&ig(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ka(t,c):typeof c=="number"&&Ka(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(qa.hasOwnProperty(s)?c!=null&&s==="onScroll"&&Et("scroll",t):c!=null&&jf(t,s,c,a))}switch(n){case"input":Uo(t),xp(t,i,!1);break;case"textarea":Uo(t),vp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+yr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Hs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Hs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Zl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return an(e),null;case 6:if(t&&e.stateNode!=null)Cx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ce(166));if(n=zr(oo.current),zr(yi.current),Vo(e)){if(i=e.stateNode,n=e.memoizedProps,i[gi]=e,(s=i.nodeValue!==n)&&(t=Un,t!==null))switch(t.tag){case 3:Wo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Wo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[gi]=e,e.stateNode=i}return an(e),null;case 13:if(bt(Ct),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Tt&&Ln!==null&&e.mode&1&&!(e.flags&128))Xg(),Js(),e.flags|=98560,s=!1;else if(s=Vo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ce(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ce(317));s[gi]=e}else Js(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;an(e),s=!1}else ii!==null&&(jd(ii),ii=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Ct.current&1?Vt===0&&(Vt=3):Ah())),e.updateQueue!==null&&(e.flags|=4),an(e),null);case 4:return ea(),Fd(t,e),t===null&&io(e.stateNode.containerInfo),an(e),null;case 10:return uh(e.type._context),an(e),null;case 17:return Tn(e.type)&&Jl(),an(e),null;case 19:if(bt(Ct),s=e.memoizedState,s===null)return an(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Sa(s,!1);else{if(Vt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=sc(t),a!==null){for(e.flags|=128,Sa(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return St(Ct,Ct.current&1|2),e.child}t=t.sibling}s.tail!==null&&kt()>na&&(e.flags|=128,i=!0,Sa(s,!1),e.lanes=4194304)}else{if(!i)if(t=sc(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Sa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!Tt)return an(e),null}else 2*kt()-s.renderingStartTime>na&&n!==1073741824&&(e.flags|=128,i=!0,Sa(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=kt(),e.sibling=null,n=Ct.current,St(Ct,i?n&1|2:n&1),e):(an(e),null);case 22:case 23:return Th(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Nn&1073741824&&(an(e),e.subtreeFlags&6&&(e.flags|=8192)):an(e),null;case 24:return null;case 25:return null}throw Error(ce(156,e.tag))}function Jy(t,e){switch(ah(e),e.tag){case 1:return Tn(e.type)&&Jl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ea(),bt(wn),bt(dn),mh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ph(e),null;case 13:if(bt(Ct),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ce(340));Js()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return bt(Ct),null;case 4:return ea(),null;case 10:return uh(e.type._context),null;case 22:case 23:return Th(),null;case 24:return null;default:return null}}var $o=!1,cn=!1,Qy=typeof WeakSet=="function"?WeakSet:Set,Re=null;function Os(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){It(t,e,i)}else n.current=null}function kd(t,e,n){try{n()}catch(i){It(t,e,i)}}var lm=!1;function eS(t,e){if(Sd=Yl,t=Ig(),rh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,c=-1,u=0,p=0,h=t,f=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(c=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(m=h.firstChild)!==null;)f=h,h=m;for(;;){if(h===t)break t;if(f===n&&++u===r&&(o=a),f===s&&++p===i&&(c=a),(m=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=m}n=o===-1||c===-1?null:{start:o,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Md={focusedElem:t,selectionRange:n},Yl=!1,Re=e;Re!==null;)if(e=Re,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Re=t;else for(;Re!==null;){e=Re;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var M=_.memoizedProps,g=_.memoizedState,d=e.stateNode,x=d.getSnapshotBeforeUpdate(e.elementType===e.type?M:ti(e.type,M),g);d.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var E=e.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ce(163))}}catch(S){It(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Re=t;break}Re=e.return}return _=lm,lm=!1,_}function Wa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&kd(e,n,s)}r=r.next}while(r!==i)}}function Dc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function zd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Rx(t){var e=t.alternate;e!==null&&(t.alternate=null,Rx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[gi],delete e[so],delete e[wd],delete e[Oy],delete e[Fy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Px(t){return t.tag===5||t.tag===3||t.tag===4}function cm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Px(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Zl));else if(i!==4&&(t=t.child,t!==null))for(Bd(t,e,n),t=t.sibling;t!==null;)Bd(t,e,n),t=t.sibling}function Hd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Hd(t,e,n),t=t.sibling;t!==null;)Hd(t,e,n),t=t.sibling}var Jt=null,ni=!1;function Ji(t,e,n){for(n=n.child;n!==null;)Nx(t,e,n),n=n.sibling}function Nx(t,e,n){if(vi&&typeof vi.onCommitFiberUnmount=="function")try{vi.onCommitFiberUnmount(bc,n)}catch{}switch(n.tag){case 5:cn||Os(n,e);case 6:var i=Jt,r=ni;Jt=null,Ji(t,e,n),Jt=i,ni=r,Jt!==null&&(ni?(t=Jt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Jt.removeChild(n.stateNode));break;case 18:Jt!==null&&(ni?(t=Jt,n=n.stateNode,t.nodeType===8?cu(t.parentNode,n):t.nodeType===1&&cu(t,n),eo(t)):cu(Jt,n.stateNode));break;case 4:i=Jt,r=ni,Jt=n.stateNode.containerInfo,ni=!0,Ji(t,e,n),Jt=i,ni=r;break;case 0:case 11:case 14:case 15:if(!cn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&kd(n,e,a),r=r.next}while(r!==i)}Ji(t,e,n);break;case 1:if(!cn&&(Os(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){It(n,e,o)}Ji(t,e,n);break;case 21:Ji(t,e,n);break;case 22:n.mode&1?(cn=(i=cn)||n.memoizedState!==null,Ji(t,e,n),cn=i):Ji(t,e,n);break;default:Ji(t,e,n)}}function um(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Qy),e.forEach(function(i){var r=cS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Kn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Jt=o.stateNode,ni=!1;break e;case 3:Jt=o.stateNode.containerInfo,ni=!0;break e;case 4:Jt=o.stateNode.containerInfo,ni=!0;break e}o=o.return}if(Jt===null)throw Error(ce(160));Nx(s,a,r),Jt=null,ni=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(u){It(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Dx(e,t),e=e.sibling}function Dx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Kn(e,t),di(t),i&4){try{Wa(3,t,t.return),Dc(3,t)}catch(M){It(t,t.return,M)}try{Wa(5,t,t.return)}catch(M){It(t,t.return,M)}}break;case 1:Kn(e,t),di(t),i&512&&n!==null&&Os(n,n.return);break;case 5:if(Kn(e,t),di(t),i&512&&n!==null&&Os(n,n.return),t.flags&32){var r=t.stateNode;try{Ka(r,"")}catch(M){It(t,t.return,M)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&eg(r,s),dd(o,a);var u=dd(o,s);for(a=0;a<c.length;a+=2){var p=c[a],h=c[a+1];p==="style"?sg(r,h):p==="dangerouslySetInnerHTML"?ig(r,h):p==="children"?Ka(r,h):jf(r,p,h,u)}switch(o){case"input":ad(r,s);break;case"textarea":tg(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Hs(r,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?Hs(r,!!s.multiple,s.defaultValue,!0):Hs(r,!!s.multiple,s.multiple?[]:"",!1))}r[so]=s}catch(M){It(t,t.return,M)}}break;case 6:if(Kn(e,t),di(t),i&4){if(t.stateNode===null)throw Error(ce(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(M){It(t,t.return,M)}}break;case 3:if(Kn(e,t),di(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{eo(e.containerInfo)}catch(M){It(t,t.return,M)}break;case 4:Kn(e,t),di(t);break;case 13:Kn(e,t),di(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(bh=kt())),i&4&&um(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(cn=(u=cn)||p,Kn(e,t),cn=u):Kn(e,t),di(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!p&&t.mode&1)for(Re=t,p=t.child;p!==null;){for(h=Re=p;Re!==null;){switch(f=Re,m=f.child,f.tag){case 0:case 11:case 14:case 15:Wa(4,f,f.return);break;case 1:Os(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(M){It(i,n,M)}}break;case 5:Os(f,f.return);break;case 22:if(f.memoizedState!==null){fm(h);continue}}m!==null?(m.return=f,Re=m):fm(h)}p=p.sibling}e:for(p=null,h=t;;){if(h.tag===5){if(p===null){p=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,c=h.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=rg("display",a))}catch(M){It(t,t.return,M)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(M){It(t,t.return,M)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Kn(e,t),di(t),i&4&&um(t);break;case 21:break;default:Kn(e,t),di(t)}}function di(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Px(n)){var i=n;break e}n=n.return}throw Error(ce(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ka(r,""),i.flags&=-33);var s=cm(t);Hd(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=cm(t);Bd(t,o,a);break;default:throw Error(ce(161))}}catch(c){It(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function tS(t,e,n){Re=t,Ix(t)}function Ix(t,e,n){for(var i=(t.mode&1)!==0;Re!==null;){var r=Re,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||$o;if(!a){var o=r.alternate,c=o!==null&&o.memoizedState!==null||cn;o=$o;var u=cn;if($o=a,(cn=c)&&!u)for(Re=r;Re!==null;)a=Re,c=a.child,a.tag===22&&a.memoizedState!==null?hm(r):c!==null?(c.return=a,Re=c):hm(r);for(;s!==null;)Re=s,Ix(s),s=s.sibling;Re=r,$o=o,cn=u}dm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Re=s):dm(t)}}function dm(t){for(;Re!==null;){var e=Re;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:cn||Dc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!cn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ti(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&qp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}qp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&eo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ce(163))}cn||e.flags&512&&zd(e)}catch(f){It(e,e.return,f)}}if(e===t){Re=null;break}if(n=e.sibling,n!==null){n.return=e.return,Re=n;break}Re=e.return}}function fm(t){for(;Re!==null;){var e=Re;if(e===t){Re=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Re=n;break}Re=e.return}}function hm(t){for(;Re!==null;){var e=Re;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Dc(4,e)}catch(c){It(e,n,c)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(c){It(e,r,c)}}var s=e.return;try{zd(e)}catch(c){It(e,s,c)}break;case 5:var a=e.return;try{zd(e)}catch(c){It(e,a,c)}}}catch(c){It(e,e.return,c)}if(e===t){Re=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Re=o;break}Re=e.return}}var nS=Math.ceil,lc=$i.ReactCurrentDispatcher,Mh=$i.ReactCurrentOwner,Xn=$i.ReactCurrentBatchConfig,ct=0,qt=null,Bt=null,en=0,Nn=0,Fs=wr(0),Vt=0,fo=null,qr=0,Ic=0,Eh=0,Va=null,En=null,bh=0,na=1/0,Di=null,cc=!1,Gd=null,xr=null,Yo=!1,ur=null,uc=0,ja=0,Wd=null,Dl=-1,Il=0;function _n(){return ct&6?kt():Dl!==-1?Dl:Dl=kt()}function _r(t){return t.mode&1?ct&2&&en!==0?en&-en:zy.transition!==null?(Il===0&&(Il=xg()),Il):(t=_t,t!==0||(t=window.event,t=t===void 0?16:bg(t.type)),t):1}function oi(t,e,n,i){if(50<ja)throw ja=0,Wd=null,Error(ce(185));So(t,n,i),(!(ct&2)||t!==qt)&&(t===qt&&(!(ct&2)&&(Ic|=n),Vt===4&&or(t,en)),An(t,i),n===1&&ct===0&&!(e.mode&1)&&(na=kt()+500,Rc&&Tr()))}function An(t,e){var n=t.callbackNode;zv(t,e);var i=$l(t,t===qt?en:0);if(i===0)n!==null&&Mp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Mp(n),e===1)t.tag===0?ky(pm.bind(null,t)):Wg(pm.bind(null,t)),Ly(function(){!(ct&6)&&Tr()}),n=null;else{switch(_g(i)){case 1:n=Kf;break;case 4:n=mg;break;case 16:n=Xl;break;case 536870912:n=gg;break;default:n=Xl}n=Hx(n,Lx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Lx(t,e){if(Dl=-1,Il=0,ct&6)throw Error(ce(327));var n=t.callbackNode;if(Xs()&&t.callbackNode!==n)return null;var i=$l(t,t===qt?en:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=dc(t,i);else{e=i;var r=ct;ct|=2;var s=Ox();(qt!==t||en!==e)&&(Di=null,na=kt()+500,Wr(t,e));do try{sS();break}catch(o){Ux(t,o)}while(!0);ch(),lc.current=s,ct=r,Bt!==null?e=0:(qt=null,en=0,e=Vt)}if(e!==0){if(e===2&&(r=gd(t),r!==0&&(i=r,e=Vd(t,r))),e===1)throw n=fo,Wr(t,0),or(t,i),An(t,kt()),n;if(e===6)or(t,i);else{if(r=t.current.alternate,!(i&30)&&!iS(r)&&(e=dc(t,i),e===2&&(s=gd(t),s!==0&&(i=s,e=Vd(t,s))),e===1))throw n=fo,Wr(t,0),or(t,i),An(t,kt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ce(345));case 2:Ur(t,En,Di);break;case 3:if(or(t,i),(i&130023424)===i&&(e=bh+500-kt(),10<e)){if($l(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){_n(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=bd(Ur.bind(null,t,En,Di),e);break}Ur(t,En,Di);break;case 4:if(or(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-ai(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=kt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*nS(i/1960))-i,10<i){t.timeoutHandle=bd(Ur.bind(null,t,En,Di),i);break}Ur(t,En,Di);break;case 5:Ur(t,En,Di);break;default:throw Error(ce(329))}}}return An(t,kt()),t.callbackNode===n?Lx.bind(null,t):null}function Vd(t,e){var n=Va;return t.current.memoizedState.isDehydrated&&(Wr(t,e).flags|=256),t=dc(t,e),t!==2&&(e=En,En=n,e!==null&&jd(e)),t}function jd(t){En===null?En=t:En.push.apply(En,t)}function iS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ci(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function or(t,e){for(e&=~Eh,e&=~Ic,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ai(e),i=1<<n;t[n]=-1,e&=~i}}function pm(t){if(ct&6)throw Error(ce(327));Xs();var e=$l(t,0);if(!(e&1))return An(t,kt()),null;var n=dc(t,e);if(t.tag!==0&&n===2){var i=gd(t);i!==0&&(e=i,n=Vd(t,i))}if(n===1)throw n=fo,Wr(t,0),or(t,e),An(t,kt()),n;if(n===6)throw Error(ce(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ur(t,En,Di),An(t,kt()),null}function wh(t,e){var n=ct;ct|=1;try{return t(e)}finally{ct=n,ct===0&&(na=kt()+500,Rc&&Tr())}}function Kr(t){ur!==null&&ur.tag===0&&!(ct&6)&&Xs();var e=ct;ct|=1;var n=Xn.transition,i=_t;try{if(Xn.transition=null,_t=1,t)return t()}finally{_t=i,Xn.transition=n,ct=e,!(ct&6)&&Tr()}}function Th(){Nn=Fs.current,bt(Fs)}function Wr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Iy(n)),Bt!==null)for(n=Bt.return;n!==null;){var i=n;switch(ah(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Jl();break;case 3:ea(),bt(wn),bt(dn),mh();break;case 5:ph(i);break;case 4:ea();break;case 13:bt(Ct);break;case 19:bt(Ct);break;case 10:uh(i.type._context);break;case 22:case 23:Th()}n=n.return}if(qt=t,Bt=t=vr(t.current,null),en=Nn=e,Vt=0,fo=null,Eh=Ic=qr=0,En=Va=null,kr!==null){for(e=0;e<kr.length;e++)if(n=kr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}kr=null}return t}function Ux(t,e){do{var n=Bt;try{if(ch(),Rl.current=oc,ac){for(var i=Pt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ac=!1}if(Yr=0,Yt=Wt=Pt=null,Ga=!1,lo=0,Mh.current=null,n===null||n.return===null){Vt=1,fo=e,Bt=null;break}e:{var s=t,a=n.return,o=n,c=e;if(e=en,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,p=o,h=p.tag;if(!(p.mode&1)&&(h===0||h===11||h===15)){var f=p.alternate;f?(p.updateQueue=f.updateQueue,p.memoizedState=f.memoizedState,p.lanes=f.lanes):(p.updateQueue=null,p.memoizedState=null)}var m=tm(a);if(m!==null){m.flags&=-257,nm(m,a,o,s,e),m.mode&1&&em(s,u,e),e=m,c=u;var _=e.updateQueue;if(_===null){var M=new Set;M.add(c),e.updateQueue=M}else _.add(c);break e}else{if(!(e&1)){em(s,u,e),Ah();break e}c=Error(ce(426))}}else if(Tt&&o.mode&1){var g=tm(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),nm(g,a,o,s,e),oh(ta(c,o));break e}}s=c=ta(c,o),Vt!==4&&(Vt=2),Va===null?Va=[s]:Va.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=_x(s,c,e);Yp(s,d);break e;case 1:o=c;var x=s.type,E=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(xr===null||!xr.has(E)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=vx(s,o,e);Yp(s,S);break e}}s=s.return}while(s!==null)}kx(n)}catch(b){e=b,Bt===n&&n!==null&&(Bt=n=n.return);continue}break}while(!0)}function Ox(){var t=lc.current;return lc.current=oc,t===null?oc:t}function Ah(){(Vt===0||Vt===3||Vt===2)&&(Vt=4),qt===null||!(qr&268435455)&&!(Ic&268435455)||or(qt,en)}function dc(t,e){var n=ct;ct|=2;var i=Ox();(qt!==t||en!==e)&&(Di=null,Wr(t,e));do try{rS();break}catch(r){Ux(t,r)}while(!0);if(ch(),ct=n,lc.current=i,Bt!==null)throw Error(ce(261));return qt=null,en=0,Vt}function rS(){for(;Bt!==null;)Fx(Bt)}function sS(){for(;Bt!==null&&!Pv();)Fx(Bt)}function Fx(t){var e=Bx(t.alternate,t,Nn);t.memoizedProps=t.pendingProps,e===null?kx(t):Bt=e,Mh.current=null}function kx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Jy(n,e),n!==null){n.flags&=32767,Bt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Vt=6,Bt=null;return}}else if(n=Zy(n,e,Nn),n!==null){Bt=n;return}if(e=e.sibling,e!==null){Bt=e;return}Bt=e=t}while(e!==null);Vt===0&&(Vt=5)}function Ur(t,e,n){var i=_t,r=Xn.transition;try{Xn.transition=null,_t=1,aS(t,e,n,i)}finally{Xn.transition=r,_t=i}return null}function aS(t,e,n,i){do Xs();while(ur!==null);if(ct&6)throw Error(ce(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ce(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Bv(t,s),t===qt&&(Bt=qt=null,en=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Yo||(Yo=!0,Hx(Xl,function(){return Xs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Xn.transition,Xn.transition=null;var a=_t;_t=1;var o=ct;ct|=4,Mh.current=null,eS(t,n),Dx(n,t),Ty(Md),Yl=!!Sd,Md=Sd=null,t.current=n,tS(n),Nv(),ct=o,_t=a,Xn.transition=s}else t.current=n;if(Yo&&(Yo=!1,ur=t,uc=r),s=t.pendingLanes,s===0&&(xr=null),Lv(n.stateNode),An(t,kt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(cc)throw cc=!1,t=Gd,Gd=null,t;return uc&1&&t.tag!==0&&Xs(),s=t.pendingLanes,s&1?t===Wd?ja++:(ja=0,Wd=t):ja=0,Tr(),null}function Xs(){if(ur!==null){var t=_g(uc),e=Xn.transition,n=_t;try{if(Xn.transition=null,_t=16>t?16:t,ur===null)var i=!1;else{if(t=ur,ur=null,uc=0,ct&6)throw Error(ce(331));var r=ct;for(ct|=4,Re=t.current;Re!==null;){var s=Re,a=s.child;if(Re.flags&16){var o=s.deletions;if(o!==null){for(var c=0;c<o.length;c++){var u=o[c];for(Re=u;Re!==null;){var p=Re;switch(p.tag){case 0:case 11:case 15:Wa(8,p,s)}var h=p.child;if(h!==null)h.return=p,Re=h;else for(;Re!==null;){p=Re;var f=p.sibling,m=p.return;if(Rx(p),p===u){Re=null;break}if(f!==null){f.return=m,Re=f;break}Re=m}}}var _=s.alternate;if(_!==null){var M=_.child;if(M!==null){_.child=null;do{var g=M.sibling;M.sibling=null,M=g}while(M!==null)}}Re=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Re=a;else e:for(;Re!==null;){if(s=Re,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Wa(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Re=d;break e}Re=s.return}}var x=t.current;for(Re=x;Re!==null;){a=Re;var E=a.child;if(a.subtreeFlags&2064&&E!==null)E.return=a,Re=E;else e:for(a=x;Re!==null;){if(o=Re,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Dc(9,o)}}catch(b){It(o,o.return,b)}if(o===a){Re=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,Re=S;break e}Re=o.return}}if(ct=r,Tr(),vi&&typeof vi.onPostCommitFiberRoot=="function")try{vi.onPostCommitFiberRoot(bc,t)}catch{}i=!0}return i}finally{_t=n,Xn.transition=e}}return!1}function mm(t,e,n){e=ta(n,e),e=_x(t,e,1),t=gr(t,e,1),e=_n(),t!==null&&(So(t,1,e),An(t,e))}function It(t,e,n){if(t.tag===3)mm(t,t,n);else for(;e!==null;){if(e.tag===3){mm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(xr===null||!xr.has(i))){t=ta(n,t),t=vx(e,t,1),e=gr(e,t,1),t=_n(),e!==null&&(So(e,1,t),An(e,t));break}}e=e.return}}function oS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=_n(),t.pingedLanes|=t.suspendedLanes&n,qt===t&&(en&n)===n&&(Vt===4||Vt===3&&(en&130023424)===en&&500>kt()-bh?Wr(t,0):Eh|=n),An(t,e)}function zx(t,e){e===0&&(t.mode&1?(e=ko,ko<<=1,!(ko&130023424)&&(ko=4194304)):e=1);var n=_n();t=Vi(t,e),t!==null&&(So(t,e,n),An(t,n))}function lS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),zx(t,n)}function cS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ce(314))}i!==null&&i.delete(e),zx(t,n)}var Bx;Bx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||wn.current)bn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return bn=!1,Ky(t,e,n);bn=!!(t.flags&131072)}else bn=!1,Tt&&e.flags&1048576&&Vg(e,tc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Nl(t,e),t=e.pendingProps;var r=Zs(e,dn.current);js(e,n),r=xh(null,e,i,t,r,n);var s=_h();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Tn(i)?(s=!0,Ql(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,fh(e),r.updater=Nc,e.stateNode=r,r._reactInternals=e,Nd(e,i,t,n),e=Ld(null,e,i,!0,s,n)):(e.tag=0,Tt&&s&&sh(e),gn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Nl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=dS(i),t=ti(i,t),r){case 0:e=Id(null,e,i,t,n);break e;case 1:e=sm(null,e,i,t,n);break e;case 11:e=im(null,e,i,t,n);break e;case 14:e=rm(null,e,i,ti(i.type,t),n);break e}throw Error(ce(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),Id(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),sm(t,e,i,r,n);case 3:e:{if(Ex(e),t===null)throw Error(ce(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Kg(t,e),rc(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ta(Error(ce(423)),e),e=am(t,e,i,n,r);break e}else if(i!==r){r=ta(Error(ce(424)),e),e=am(t,e,i,n,r);break e}else for(Ln=mr(e.stateNode.containerInfo.firstChild),Un=e,Tt=!0,ii=null,n=Yg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Js(),i===r){e=ji(t,e,n);break e}gn(t,e,i,n)}e=e.child}return e;case 5:return Zg(e),t===null&&Cd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Ed(i,r)?a=null:s!==null&&Ed(i,s)&&(e.flags|=32),Mx(t,e),gn(t,e,a,n),e.child;case 6:return t===null&&Cd(e),null;case 13:return bx(t,e,n);case 4:return hh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Qs(e,null,i,n):gn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),im(t,e,i,r,n);case 7:return gn(t,e,e.pendingProps,n),e.child;case 8:return gn(t,e,e.pendingProps.children,n),e.child;case 12:return gn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,St(nc,i._currentValue),i._currentValue=a,s!==null)if(ci(s.value,a)){if(s.children===r.children&&!wn.current){e=ji(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var c=o.firstContext;c!==null;){if(c.context===i){if(s.tag===1){c=zi(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?c.next=c:(c.next=p.next,p.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Rd(s.return,n,e),o.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ce(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Rd(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}gn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,js(e,n),r=$n(r),i=i(r),e.flags|=1,gn(t,e,i,n),e.child;case 14:return i=e.type,r=ti(i,e.pendingProps),r=ti(i.type,r),rm(t,e,i,r,n);case 15:return yx(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),Nl(t,e),e.tag=1,Tn(i)?(t=!0,Ql(e)):t=!1,js(e,n),xx(e,i,r),Nd(e,i,r,n),Ld(null,e,i,!0,t,n);case 19:return wx(t,e,n);case 22:return Sx(t,e,n)}throw Error(ce(156,e.tag))};function Hx(t,e){return pg(t,e)}function uS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,e,n,i){return new uS(t,e,n,i)}function Ch(t){return t=t.prototype,!(!t||!t.isReactComponent)}function dS(t){if(typeof t=="function")return Ch(t)?1:0;if(t!=null){if(t=t.$$typeof,t===$f)return 11;if(t===Yf)return 14}return 2}function vr(t,e){var n=t.alternate;return n===null?(n=jn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ll(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Ch(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case As:return Vr(n.children,r,s,e);case Xf:a=8,r|=8;break;case td:return t=jn(12,n,e,r|2),t.elementType=td,t.lanes=s,t;case nd:return t=jn(13,n,e,r),t.elementType=nd,t.lanes=s,t;case id:return t=jn(19,n,e,r),t.elementType=id,t.lanes=s,t;case Z0:return Lc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case q0:a=10;break e;case K0:a=9;break e;case $f:a=11;break e;case Yf:a=14;break e;case rr:a=16,i=null;break e}throw Error(ce(130,t==null?t:typeof t,""))}return e=jn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Vr(t,e,n,i){return t=jn(7,t,i,e),t.lanes=n,t}function Lc(t,e,n,i){return t=jn(22,t,i,e),t.elementType=Z0,t.lanes=n,t.stateNode={isHidden:!1},t}function xu(t,e,n){return t=jn(6,t,null,e),t.lanes=n,t}function _u(t,e,n){return e=jn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function fS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jc(0),this.expirationTimes=Jc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Rh(t,e,n,i,r,s,a,o,c){return t=new fS(t,e,n,o,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=jn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fh(s),t}function hS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ts,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Gx(t){if(!t)return Sr;t=t._reactInternals;e:{if(ts(t)!==t||t.tag!==1)throw Error(ce(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Tn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ce(171))}if(t.tag===1){var n=t.type;if(Tn(n))return Gg(t,n,e)}return e}function Wx(t,e,n,i,r,s,a,o,c){return t=Rh(n,i,!0,t,r,s,a,o,c),t.context=Gx(null),n=t.current,i=_n(),r=_r(n),s=zi(i,r),s.callback=e??null,gr(n,s,r),t.current.lanes=r,So(t,r,i),An(t,i),t}function Uc(t,e,n,i){var r=e.current,s=_n(),a=_r(r);return n=Gx(n),e.context===null?e.context=n:e.pendingContext=n,e=zi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=gr(r,e,a),t!==null&&(oi(t,r,a,s),Cl(t,r,a)),a}function fc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function gm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ph(t,e){gm(t,e),(t=t.alternate)&&gm(t,e)}function pS(){return null}var Vx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Nh(t){this._internalRoot=t}Oc.prototype.render=Nh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ce(409));Uc(t,e,null,null)};Oc.prototype.unmount=Nh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Kr(function(){Uc(null,t,null,null)}),e[Wi]=null}};function Oc(t){this._internalRoot=t}Oc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Sg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ar.length&&e!==0&&e<ar[n].priority;n++);ar.splice(n,0,t),n===0&&Eg(t)}};function Dh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Fc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function xm(){}function mS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=fc(a);s.call(u)}}var a=Wx(e,i,t,0,null,!1,!1,"",xm);return t._reactRootContainer=a,t[Wi]=a.current,io(t.nodeType===8?t.parentNode:t),Kr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=fc(c);o.call(u)}}var c=Rh(t,0,!1,null,null,!1,!1,"",xm);return t._reactRootContainer=c,t[Wi]=c.current,io(t.nodeType===8?t.parentNode:t),Kr(function(){Uc(e,c,n,i)}),c}function kc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var c=fc(a);o.call(c)}}Uc(e,a,t,r)}else a=mS(n,e,t,r,i);return fc(a)}vg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ia(e.pendingLanes);n!==0&&(Zf(e,n|1),An(e,kt()),!(ct&6)&&(na=kt()+500,Tr()))}break;case 13:Kr(function(){var i=Vi(t,1);if(i!==null){var r=_n();oi(i,t,1,r)}}),Ph(t,1)}};Jf=function(t){if(t.tag===13){var e=Vi(t,134217728);if(e!==null){var n=_n();oi(e,t,134217728,n)}Ph(t,134217728)}};yg=function(t){if(t.tag===13){var e=_r(t),n=Vi(t,e);if(n!==null){var i=_n();oi(n,t,e,i)}Ph(t,e)}};Sg=function(){return _t};Mg=function(t,e){var n=_t;try{return _t=t,e()}finally{_t=n}};hd=function(t,e,n){switch(e){case"input":if(ad(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Cc(i);if(!r)throw Error(ce(90));Q0(i),ad(i,r)}}}break;case"textarea":tg(t,n);break;case"select":e=n.value,e!=null&&Hs(t,!!n.multiple,e,!1)}};lg=wh;cg=Kr;var gS={usingClientEntryPoint:!1,Events:[Eo,Ns,Cc,ag,og,wh]},Ma={findFiberByHostInstance:Fr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xS={bundleType:Ma.bundleType,version:Ma.version,rendererPackageName:Ma.rendererPackageName,rendererConfig:Ma.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$i.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=fg(t),t===null?null:t.stateNode},findFiberByHostInstance:Ma.findFiberByHostInstance||pS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qo.isDisabled&&qo.supportsFiber)try{bc=qo.inject(xS),vi=qo}catch{}}Fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gS;Fn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dh(e))throw Error(ce(200));return hS(t,e,null,n)};Fn.createRoot=function(t,e){if(!Dh(t))throw Error(ce(299));var n=!1,i="",r=Vx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Rh(t,1,!1,null,null,n,!1,i,r),t[Wi]=e.current,io(t.nodeType===8?t.parentNode:t),new Nh(e)};Fn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ce(188)):(t=Object.keys(t).join(","),Error(ce(268,t)));return t=fg(e),t=t===null?null:t.stateNode,t};Fn.flushSync=function(t){return Kr(t)};Fn.hydrate=function(t,e,n){if(!Fc(e))throw Error(ce(200));return kc(null,t,e,!0,n)};Fn.hydrateRoot=function(t,e,n){if(!Dh(t))throw Error(ce(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Vx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Wx(e,null,t,1,n??null,r,!1,s,a),t[Wi]=e.current,io(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Oc(e)};Fn.render=function(t,e,n){if(!Fc(e))throw Error(ce(200));return kc(null,t,e,!1,n)};Fn.unmountComponentAtNode=function(t){if(!Fc(t))throw Error(ce(40));return t._reactRootContainer?(Kr(function(){kc(null,null,t,!1,function(){t._reactRootContainer=null,t[Wi]=null})}),!0):!1};Fn.unstable_batchedUpdates=wh;Fn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Fc(n))throw Error(ce(200));if(t==null||t._reactInternals===void 0)throw Error(ce(38));return kc(t,e,n,!1,i)};Fn.version="18.3.1-next-f1338f8080-20240426";function jx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jx)}catch(t){console.error(t)}}jx(),j0.exports=Fn;var _S=j0.exports,_m=_S;Qu.createRoot=_m.createRoot,Qu.hydrateRoot=_m.hydrateRoot;const Dt={WIFI:{DEFAULT_IP:"192.168.4.1",DEFAULT_PORT:80,WEBSOCKET_PORT:81,DEFAULT_HOSTNAME:"agriguard.local",AP_SSID:"AgriGuard-Robot",AP_PASSWORD:"agri12345password",CONNECT_TIMEOUT_MS:3e3,HEARTBEAT_INTERVAL_MS:1e3,WATCHDOG_TIMEOUT_MS:1500},BLE:{DEVICE_NAME:"AgriGuard-Robot",DEVICE_NAME_PREFIX:"AgriGuard",SERVICE_UUID:"12345678-1234-1234-1234-123456789abc",COMMAND_CHARACTERISTIC_UUID:"12345678-1234-1234-1234-123456789ab1",TELEMETRY_CHARACTERISTIC_UUID:"12345678-1234-1234-1234-123456789ab2",STATUS_CHARACTERISTIC_UUID:"12345678-1234-1234-1234-123456789ab3",RECONNECT_DELAY_MS:2e3},NPK_MODBUS:{SLAVE_ID:1,BAUD_RATE:9600,PARITY:"None (8N1)",STOP_BITS:1,START_REGISTER:30,REGISTER_COUNT:3,UNIT:"mg/kg"},SAFETY:{WATCHDOG_TIMEOUT_MS:1500,MAX_SPRAY_DURATION_MS:6e3,MIN_OBSTACLE_STOP_CM:25,WARNING_OBSTACLE_CM:60}};function ks(){return{mode:"REAL_HARDWARE",hardware_mode:"REAL_HARDWARE",data_source:"ESP32_PHYSICAL",esp32_connected:!1,operating_mode:"ROBOT: DISCONNECTED",robot_status:"ROBOT: DISCONNECTED",timestamp_ms:Date.now(),active_zone_id:"ZONE-R1C1",camera_status:{connected:!1,fps:0,device_index:0,resolution:"1280x720"},esp32_ping_ms:null,battery_voltage:void 0,battery_percentage:void 0,movement:"STOP",ultrasonic:{left:null,center:null,right:null,distance_cm:null,obstacle_detected:!1,obstacle_ahead:!1,obstacle_status:"OFFLINE",robot_status:"ROBOT: DISCONNECTED",status:"OFFLINE",valid:!1},soil_moisture:null,soil_moisture_status:"OFFLINE",dht22:{temperature:null,humidity:null,valid:!1},npk:{n:null,p:null,k:null,nitrogen_mg_kg:null,phosphorus_mg_kg:null,potassium_mg_kg:null,valid:!1,status:"OFFLINE"},mpu6050:{accel_x:null,accel_y:null,accel_z:null,gyro_x:null,gyro_y:null,gyro_z:null,pitch_deg:null,roll_deg:null,tilt_status:"OFFLINE",valid:!1},pump:{state:"OFF",relay:"OFF",spray_status:"OFFLINE"},relay:{state:"OFF"},actuators:{motor_state:"DISCONNECTED",motor_speed:0,pump_active:!1,valve_open:!1,flow_rate_ml_s:0,total_volume_ml:0},safety:{emergency_stop:!1,obstacle_detected:!1,watchdog_tripped:!1,hardware_errors:["Physical robot offline"]}}}class vS{constructor(e,n){Oe(this,"name","Wi-Fi");Oe(this,"_state","DISCONNECTED");Oe(this,"_ip",Dt.WIFI.DEFAULT_IP);Oe(this,"_port",Dt.WIFI.DEFAULT_PORT);Oe(this,"_pingMs",null);Oe(this,"_message","Disconnected");Oe(this,"_reconnectTimer",null);Oe(this,"_heartbeatTimer",null);Oe(this,"_ws",null);Oe(this,"_onTelemetry");Oe(this,"_onStatusChange");this._onTelemetry=e,this._onStatusChange=n}setEndpoint(e,n=80){this._ip=e.trim(),this._port=n}isConnected(){return this._state==="CONNECTED"}getStatus(){return{state:this._state,transport:"Wi-Fi",mode:"REAL_HARDWARE",ip:this._ip,port:this._port,deviceName:Dt.WIFI.AP_SSID,pingMs:this._pingMs,message:this._message}}_updateState(e,n,i){this._state=e,this._message=n,i!==void 0&&(this._pingMs=i),this._onStatusChange(this.getStatus())}async connect(e){e!=null&&e.ip&&(this._ip=e.ip.trim()),e!=null&&e.port&&(this._port=e.port),this._updateState("CONNECTING",`Connecting to ESP32 at ${this._ip}:${this._port}…`,null);try{const n=await fetch("/api/robot/connect",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ip:this._ip,port:this._port})}),i=await n.json();return n.ok&&i.is_connected?(this._pingMs=i.ping_ms||5,this._updateState("CONNECTED",`Connected to ESP32 at ${this._ip}:${this._port} (${this._pingMs}ms)`,this._pingMs),this._startHeartbeat(),this._connectWebSocket(),!0):await this._probeDirect()?(this._updateState("CONNECTED",`Connected directly to ESP32 at ${this._ip}:${this._port}`,this._pingMs),this._startHeartbeat(),this._connectWebSocket(),!0):(this._updateState("DISCONNECTED",i.message||`ESP32 unreachable at ${this._ip}:${this._port}. Connect to "${Dt.WIFI.AP_SSID}" Wi-Fi.`),!1)}catch(n){return this._updateState("DISCONNECTED",`Connection error: ${n.message||"ESP32 unreachable"}`),!1}}async _probeDirect(){try{const e=new AbortController,n=setTimeout(()=>e.abort(),2e3),i=performance.now(),r=await fetch(`http://${this._ip}:${this._port}/api/status`,{signal:e.signal,mode:"cors"});if(clearTimeout(n),r.ok)return this._pingMs=Math.round(performance.now()-i),!0}catch{}return!1}async disconnect(){if(this._stopHeartbeat(),this._stopReconnect(),this._ws){try{this._ws.close()}catch{}this._ws=null}try{await fetch("/api/robot/disconnect",{method:"POST"})}catch{}this._updateState("DISCONNECTED","Wi-Fi transport disconnected. Safe stop engaged.",null)}async reconnect(){return this._updateState("RECONNECTING",`Reconnecting to ${this._ip}:${this._port}…`,null),await new Promise(e=>setTimeout(e,600)),await this.connect()}_startHeartbeat(){this._stopHeartbeat(),this._heartbeatTimer=setInterval(async()=>{if(this._state==="CONNECTED")try{if(!(await fetch("/api/robot/heartbeat",{method:"POST"})).ok)throw new Error("Heartbeat lost")}catch{this._handleConnectionLost()}},Dt.WIFI.HEARTBEAT_INTERVAL_MS)}_stopHeartbeat(){this._heartbeatTimer&&(clearInterval(this._heartbeatTimer),this._heartbeatTimer=null)}_stopReconnect(){this._reconnectTimer&&(clearTimeout(this._reconnectTimer),this._reconnectTimer=null)}_handleConnectionLost(){this._stopHeartbeat(),this._updateState("RECONNECTING","Connection lost to ESP32. Reconnecting…",null),this._reconnectTimer=setTimeout(async()=>{await this.connect()||(this._updateState("DISCONNECTED","ESP32 Wi-Fi disconnected. Actuators safely stopped.",null),this._onTelemetry(ks()))},2e3)}_connectWebSocket(){const n=`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}/ws/telemetry`;try{this._ws&&this._ws.close();const i=new WebSocket(n);this._ws=i,i.onmessage=r=>{try{const s=JSON.parse(r.data);if(s.type==="field_observation"){window.dispatchEvent(new CustomEvent("field_observation",{detail:s.observation}));return}if(s.type==="treatment_applied"){window.dispatchEvent(new CustomEvent("treatment_applied",{detail:s}));return}this._onTelemetry(s)}catch{}},i.onclose=()=>{this._state==="CONNECTED"&&this._handleConnectionLost()}}catch{}}async sendCommand(e){const n=e.command||e.direction||"";return n==="STOP"||e.type==="stop"?await fetch("/api/robot/stop",{method:"POST"}).then(i=>i.json()):n==="EMERGENCY_STOP"||e.type==="emergency_stop"||e.type==="estop"?await fetch("/api/robot/estop",{method:"POST"}).then(i=>i.json()):await fetch("/api/robot/command",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(i=>i.json())}}class Ih{constructor(e,n){Oe(this,"name","Bluetooth");Oe(this,"_state","DISCONNECTED");Oe(this,"_device",null);Oe(this,"_server",null);Oe(this,"_cmdChar",null);Oe(this,"_telemetryChar",null);Oe(this,"_statusChar",null);Oe(this,"_message","Disconnected");Oe(this,"_onTelemetry");Oe(this,"_onStatusChange");this._onTelemetry=e,this._onStatusChange=n}static isSupported(){return typeof navigator<"u"&&"bluetooth"in navigator}isConnected(){var e;return this._state==="CONNECTED"&&!!((e=this._server)!=null&&e.connected)}getStatus(){var e;return{state:this._state,transport:"Bluetooth",mode:"REAL_HARDWARE",deviceName:((e=this._device)==null?void 0:e.name)||Dt.BLE.DEVICE_NAME_PREFIX,message:this._message}}_updateState(e,n){this._state=e,this._message=n,this._onStatusChange(this.getStatus())}async connect(){if(!Ih.isSupported())return this._updateState("ERROR","Web Bluetooth is not supported in this browser. Please use Chrome, Edge, or Opera over HTTPS/localhost."),!1;this._updateState("CONNECTING",'Opening Bluetooth device chooser… Select "AgriGuard-Robot"');try{const n=await navigator.bluetooth.requestDevice({filters:[{namePrefix:Dt.BLE.DEVICE_NAME_PREFIX}],optionalServices:[Dt.BLE.SERVICE_UUID]});this._device=n,this._updateState("CONNECTING",`Connecting to GATT server on ${n.name||"AgriGuard-Robot"}…`);const i=await n.gatt.connect();this._server=i;const r=await i.getPrimaryService(Dt.BLE.SERVICE_UUID);this._cmdChar=await r.getCharacteristic(Dt.BLE.COMMAND_CHARACTERISTIC_UUID),this._telemetryChar=await r.getCharacteristic(Dt.BLE.TELEMETRY_CHARACTERISTIC_UUID);try{this._statusChar=await r.getCharacteristic(Dt.BLE.STATUS_CHARACTERISTIC_UUID),await this._statusChar.startNotifications(),this._statusChar.addEventListener("characteristicvaluechanged",s=>{try{const a=new TextDecoder().decode(s.target.value);console.log("[BLE STATUS]",a)}catch{}})}catch{}return await this._telemetryChar.startNotifications(),this._telemetryChar.addEventListener("characteristicvaluechanged",s=>{try{const a=new TextDecoder().decode(s.target.value),o=JSON.parse(a);o.esp32_connected=!0,o.mode="REAL_HARDWARE",o.data_source="ESP32_BLE",this._onTelemetry(o),fetch("/api/robot/telemetry_ingest",{method:"POST",headers:{"Content-Type":"application/json"},body:a}).catch(()=>{})}catch(a){console.warn("[BLE] Telemetry parse error:",a)}}),n.addEventListener("gattserverdisconnected",()=>{this._handleGattDisconnected()}),this._updateState("CONNECTED",`Connected to ${n.name||"AgriGuard-Robot"} via Web Bluetooth! Real hardware live.`),!0}catch(e){return e.name==="NotFoundError"?this._updateState("DISCONNECTED","Bluetooth device pairing was cancelled by user."):e.name==="SecurityError"?this._updateState("ERROR","Web Bluetooth requires a secure context (HTTPS or http://localhost)."):this._updateState("ERROR",e.message||"Bluetooth connection failed."),!1}}_handleGattDisconnected(){this._server=null,this._cmdChar=null,this._telemetryChar=null,this._statusChar=null,this._updateState("DISCONNECTED","Bluetooth GATT disconnected. Robot stopped safely."),this._onTelemetry(ks())}async disconnect(){var e,n;if((n=(e=this._device)==null?void 0:e.gatt)!=null&&n.connected)try{await this.sendCommand({type:"robot_command",command:"STOP"}),this._device.gatt.disconnect()}catch{}this._handleGattDisconnected()}async reconnect(){if(this._device)try{this._updateState("RECONNECTING",`Reconnecting to ${this._device.name}…`);const e=await this._device.gatt.connect();return this._server=e,this._updateState("CONNECTED",`Reconnected to ${this._device.name} via Bluetooth.`),!0}catch{return await this.connect()}return await this.connect()}async sendCommand(e){if(!this.isConnected()||!this._cmdChar)throw new Error("Bluetooth is not connected. Command rejected.");const n=JSON.stringify(e),i=new TextEncoder().encode(n);return await this._cmdChar.writeValue(i),{ok:!0,accepted:!0,executed:!0,source:"bluetooth_gatt"}}}class yS{constructor(){Oe(this,"_mode","REAL_HARDWARE");Oe(this,"_activeTransport");Oe(this,"_wifiTransport");Oe(this,"_bleTransport");Oe(this,"_telemetrySubscribers",new Set);Oe(this,"_statusSubscribers",new Set);Oe(this,"_currentStatus");this._wifiTransport=new vS(e=>this._broadcastTelemetry(e),e=>this._broadcastStatus(e)),this._bleTransport=new Ih(e=>this._broadcastTelemetry(e),e=>this._broadcastStatus(e)),this._activeTransport=this._wifiTransport,this._currentStatus=this._wifiTransport.getStatus(),fetch("/api/robot/mode").then(e=>e.json()).then(e=>{e.mode&&(this._mode=e.mode.toUpperCase(),this._currentStatus.mode=this._mode,this._broadcastStatus(this._currentStatus))}).catch(()=>{})}getMode(){return this._mode}setMode(e){if(this._mode=e,this._currentStatus.mode=e,fetch("/api/robot/mode",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:e})}).catch(()=>{}),e==="SIMULATION")this._broadcastStatus({state:"CONNECTED",transport:"None",mode:"SIMULATION",message:"SIMULATION MODE ACTIVE (Safe test sandbox)"});else{const n=this._activeTransport.getStatus();this._broadcastStatus(n),this._activeTransport.isConnected()||this._broadcastTelemetry(ks())}}getStatus(){return this._mode==="SIMULATION"?{state:"CONNECTED",transport:"None",mode:"SIMULATION",message:"SIMULATION MODE ACTIVE"}:this._activeTransport.getStatus()}isConnected(){return this._mode==="SIMULATION"?!0:this._activeTransport.isConnected()}getTransport(){return this._activeTransport.name.includes("Bluetooth")?"Bluetooth":"Wi-Fi"}getDisconnectedTelemetry(){return ks()}async connect(e="wifi",n){return this.setMode("REAL_HARDWARE"),e==="bluetooth"?(this._wifiTransport.isConnected()&&await this._wifiTransport.disconnect(),this._activeTransport=this._bleTransport,await this._bleTransport.connect()):(this._bleTransport.isConnected()&&await this._bleTransport.disconnect(),this._activeTransport=this._wifiTransport,await this._wifiTransport.connect(n))}async disconnect(){await this._activeTransport.disconnect(),this._mode==="REAL_HARDWARE"&&this._broadcastTelemetry(ks())}async reconnect(){return await this._activeTransport.reconnect()}async sendCommand(e){if(this._mode==="REAL_HARDWARE"&&!this._activeTransport.isConnected())throw new Error("Action blocked: Physical ESP32 robot is DISCONNECTED.");if(this._mode==="SIMULATION"){const n=e.command||e.direction||"";return n==="STOP"||e.type==="stop"?await fetch("/api/robot/stop",{method:"POST"}).then(i=>i.json()):n==="EMERGENCY_STOP"||e.type==="emergency_stop"?await fetch("/api/robot/estop",{method:"POST"}).then(i=>i.json()):await fetch("/api/robot/command",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(i=>i.json())}return await this._activeTransport.sendCommand(e)}subscribeTelemetry(e){return this._telemetrySubscribers.add(e),()=>{this._telemetrySubscribers.delete(e)}}subscribeStatus(e){return this._statusSubscribers.add(e),e(this.getStatus()),()=>{this._statusSubscribers.delete(e)}}_broadcastTelemetry(e){this._mode==="REAL_HARDWARE"&&!this._activeTransport.isConnected()&&(e=ks()),this._telemetrySubscribers.forEach(n=>{try{n(e)}catch{}})}_broadcastStatus(e){this._currentStatus=e,this._statusSubscribers.forEach(n=>{try{n(e)}catch{}})}}const xn=new yS;function SS(){const[t,e]=oe.useState(null),[n,i]=oe.useState(!1),[r,s]=oe.useState(xn.getStatus()),a=oe.useRef(null),o=oe.useRef(null);return oe.useEffect(()=>{let c=!1;const u=xn.subscribeStatus(f=>{c||s(f)}),p=xn.subscribeTelemetry(f=>{c||e(f)});function h(){const f=window.location.protocol==="https:"?"wss:":"ws:",m=window.location.host,_=`${f}//${m}/ws/telemetry`;try{const M=new WebSocket(_);a.current=M,M.onopen=()=>{c||i(!0)},M.onmessage=g=>{if(!c)try{const d=JSON.parse(g.data);if(d.type==="field_observation"){window.dispatchEvent(new CustomEvent("field_observation",{detail:d.observation}));return}if(d.type==="treatment_applied"){window.dispatchEvent(new CustomEvent("treatment_applied",{detail:d}));return}const x=d;if(xn.getTransport()==="Bluetooth"&&xn.isConnected())return;if(xn.getMode()==="REAL_HARDWARE"&&!x.esp32_connected){e(xn.getDisconnectedTelemetry());return}e(x)}catch(d){console.error("Failed to parse telemetry message:",d)}},M.onclose=()=>{c||(i(!1),o.current=window.setTimeout(h,1500))},M.onerror=()=>{M.readyState===WebSocket.OPEN&&M.close()}}catch{c||(o.current=window.setTimeout(h,2e3))}}return h(),()=>{c=!0,u(),p(),o.current&&clearTimeout(o.current),a.current&&a.current.close()}},[]),{telemetry:t,wsConnected:n,connectionStatus:r}}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var MS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ze=(t,e)=>{const n=oe.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:o="",children:c,...u},p)=>oe.createElement("svg",{ref:p,...MS,width:r,height:r,stroke:i,strokeWidth:a?Number(s)*24/Number(r):s,className:["lucide",`lucide-${ES(t)}`,o].join(" "),...u},[...e.map(([h,f])=>oe.createElement(h,f)),...Array.isArray(c)?c:[c]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc=ze("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=ze("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ho=ze("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=ze("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=ze("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=ze("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=ze("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bS=ze("BatteryCharging",[["path",{d:"M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2",key:"1sdynx"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1",key:"1gkd3k"}],["path",{d:"m11 7-3 5h4l-3 5",key:"b4a64w"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=ze("Bluetooth",[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17",key:"1q5490"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wS=ze("Boxes",[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=ze("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=ze("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS=ze("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=ze("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS=ze("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=ze("Compass",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76",key:"m9r19z"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=ze("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ul=ze("Crosshair",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=ze("Disc",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=ze("Droplet",[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zc=ze("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=ze("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS=ze("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DS=ze("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IS=ze("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LS=ze("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=ze("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const US=ze("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=ze("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OS=ze("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FS=ze("Map",[["polygon",{points:"3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21",key:"ok2ie8"}],["line",{x1:"9",x2:"9",y1:"3",y2:"18",key:"w34qz5"}],["line",{x1:"15",x2:"15",y1:"6",y2:"21",key:"volv9a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kS=ze("Move",[["polyline",{points:"5 9 2 12 5 15",key:"1r5uj5"}],["polyline",{points:"9 5 12 2 15 5",key:"5v383o"}],["polyline",{points:"15 19 12 22 9 19",key:"g7qi8m"}],["polyline",{points:"19 9 22 12 19 15",key:"tpp73q"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS=ze("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS=ze("PlugZap",[["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m18 3-4 4h6l-4 4",key:"16psg9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=ze("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ia=ze("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Br=ze("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS=ze("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=ze("Scan",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=ze("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WS=ze("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=ze("Sliders",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=ze("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS=ze("Stethoscope",[["path",{d:"M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3",key:"1jd90r"}],["path",{d:"M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4",key:"126ukv"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jS=ze("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=ze("Thermometer",[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=ze("Unplug",[["path",{d:"m19 5 3-3",key:"yk6iyv"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z",key:"1snsnr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=ze("VideoOff",[["path",{d:"M10.66 6H14a2 2 0 0 1 2 2v2.34l1 1L22 8v8",key:"ubwiq0"}],["path",{d:"M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2l10 10Z",key:"1l10zd"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS=ze("Video",[["path",{d:"m22 8-6 4 6 4V8Z",key:"50v9me"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2",key:"1rqjg6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jr=ze("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e_=ze("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t_=ze("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),$S=({telemetry:t,wsConnected:e,activeTab:n,setActiveTab:i,onEmergencyStop:r})=>{var m,_;const s=(t==null?void 0:t.esp32_connected)??!1,a=((m=t==null?void 0:t.camera_status)==null?void 0:m.connected)??!1,o=((_=t==null?void 0:t.safety)==null?void 0:_.emergency_stop)??!1,c=(t==null?void 0:t.active_zone_id)??"ZONE-R1C1",u=t==null?void 0:t.battery_voltage,p=t==null?void 0:t.battery_percentage,h=t==null?void 0:t.esp32_ping_ms,f=[{id:"dashboard",label:"Dashboard",icon:US},{id:"remote",label:"Field Remote",icon:NS},{id:"heatmap",label:"Field Heatmap",icon:FS},{id:"diagnostics",label:"Hardware Diagnostics",icon:VS}];return l.jsxs("div",{className:"glass-panel sidebar-header-panel",style:{padding:"1rem",display:"flex",flexDirection:"column",gap:"0.85rem",borderRadius:"16px",border:"1px solid var(--border-subtle)",boxShadow:"var(--shadow-glass)"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[l.jsx("div",{style:{width:"42px",height:"42px",borderRadius:"12px",background:"linear-gradient(135deg, var(--emerald-500), #065f46)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 0 20px var(--emerald-glow)",flexShrink:0},children:l.jsx(Yx,{size:24,color:"#fff"})}),l.jsxs("div",{style:{minWidth:0},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.45rem"},children:[l.jsx("h1",{style:{fontSize:"1.25rem",fontWeight:800,letterSpacing:"-0.02em",color:"#fff",margin:0},children:"AgriGuard"}),(t==null?void 0:t.hardware_mode)==="SIMULATION"||(t==null?void 0:t.mode)==="SIMULATION"?l.jsx("span",{className:"status-pill",style:{background:"rgba(56, 189, 248, 0.15)",color:"var(--sky-400)",border:"1px solid rgba(56, 189, 248, 0.35)",fontSize:"0.62rem",padding:"0.15rem 0.45rem",fontWeight:700},children:"● MODE: SIMULATION"}):s?l.jsx("span",{className:"status-pill status-online",style:{fontSize:"0.62rem",padding:"0.15rem 0.45rem",fontWeight:700},children:"● ROBOT: CONNECTED"}):l.jsx("span",{className:"status-pill",style:{background:"rgba(244, 63, 94, 0.15)",color:"var(--rose-400)",border:"1px solid rgba(244, 63, 94, 0.35)",fontSize:"0.62rem",padding:"0.15rem 0.45rem",fontWeight:700},children:"● ROBOT: DISCONNECTED"})]}),l.jsx("p",{style:{fontSize:"0.70rem",color:"var(--emerald-400)",fontWeight:600,margin:"2px 0 0 0",lineHeight:1.25},children:"Remote-controlled from the field site over a local Wi-Fi network"})]})]}),l.jsxs("button",{onClick:r,className:"btn btn-danger",style:{width:"100%",padding:"0.55rem 0.85rem",fontSize:"0.82rem",fontWeight:800,letterSpacing:"0.04em",display:"flex",alignItems:"center",justifyContent:"center",gap:"0.5rem",boxShadow:"0 0 16px rgba(244, 63, 94, 0.35)",borderRadius:"10px"},title:"Immediately trips motor PWM to 0, closes solenoid valve, and stops pump",children:[l.jsx($d,{size:16}),l.jsx("span",{children:"EMERGENCY STOP"})]}),o&&l.jsxs("div",{style:{padding:"0.5rem 0.75rem",borderRadius:"8px",background:"rgba(244, 63, 94, 0.2)",border:"1px solid var(--rose-500)",color:"#fff",display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.75rem"},children:[l.jsx($d,{size:16,color:"var(--rose-500)",style:{flexShrink:0}}),l.jsxs("span",{children:[l.jsx("strong",{children:"E-STOP ACTIVE:"})," Interlock tripped. Actuators disabled."]})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.35rem"},children:[l.jsx("div",{style:{fontSize:"0.68rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--text-dim)",marginBottom:"0.1rem"},children:"Navigation Console"}),l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.3rem",background:"rgba(0,0,0,0.3)",padding:"5px",borderRadius:"12px"},children:f.map(M=>{const g=n===M.id,d=M.icon;return l.jsxs("button",{onClick:()=>i(M.id),className:`btn ${g?"btn-primary":"btn-outline"}`,style:{width:"100%",justifyContent:"space-between",padding:"0.5rem 0.75rem",fontSize:"0.80rem",borderRadius:"8px",border:g?"1px solid rgba(16, 185, 129, 0.4)":"1px solid transparent",background:g?"var(--emerald-500)":"transparent",color:g?"#05080f":"var(--text-main)",fontWeight:g?700:500},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.55rem"},children:[l.jsx(d,{size:14}),l.jsx("span",{children:M.label})]}),g&&l.jsx("span",{style:{fontSize:"0.65rem",fontWeight:800},children:"ACTIVE"})]},M.id)})})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.35rem"},children:[l.jsxs("div",{style:{fontSize:"0.68rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--text-dim)",marginBottom:"0.1rem",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[l.jsx("span",{children:"System Telemetry"}),l.jsx("span",{className:"mono",style:{color:"var(--emerald-400)"},children:c})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"0.4rem"},children:[l.jsxs("div",{className:`status-pill ${e?"status-online":"status-offline"}`,style:{fontSize:"0.66rem",padding:"0.3rem 0.5rem",justifyContent:"center"},children:[l.jsx(ia,{size:11}),l.jsxs("span",{children:["Telemetry: ",e?"LIVE":"OFF"]})]}),l.jsxs("div",{className:`status-pill ${s?"status-online":"status-offline"}`,style:{fontSize:"0.66rem",padding:"0.3rem 0.5rem",justifyContent:"center"},children:[l.jsx(jr,{size:11}),l.jsxs("span",{children:["Wi-Fi: ",s?"CONNECTED":"OFF"]})]}),l.jsxs("div",{className:`status-pill ${s?"status-online":(t==null?void 0:t.hardware_mode)==="REAL_HARDWARE"?"status-offline":"status-warning"}`,style:{fontSize:"0.66rem",padding:"0.3rem 0.5rem",justifyContent:"center"},children:[l.jsx(ia,{size:11}),l.jsxs("span",{children:["Robot: ",s?`CONNECTED ${h?`(${h}ms)`:""}`:(t==null?void 0:t.hardware_mode)==="REAL_HARDWARE"?"DISCONNECTED":"SIMULATION"]})]}),l.jsxs("div",{className:`status-pill ${a?"status-online":"status-offline"}`,style:{fontSize:"0.66rem",padding:"0.3rem 0.5rem",justifyContent:"center"},children:[l.jsx(Xx,{size:11}),l.jsxs("span",{children:["Cam: ",a?"ONLINE":"OFF"]})]})]}),l.jsxs("div",{style:{display:"flex",gap:"0.4rem",marginTop:"0.2rem"},children:[l.jsxs("div",{className:"status-pill",style:{flex:1,background:"rgba(255,255,255,0.05)",color:"var(--text-main)",border:"1px solid var(--border-subtle)",fontSize:"0.66rem",padding:"0.3rem 0.5rem",justifyContent:"center"},children:[l.jsx("span",{style:{color:"var(--text-muted)"},children:"Zone:"}),l.jsx("span",{className:"mono",style:{fontWeight:600},children:c})]}),u&&l.jsxs("div",{className:"status-pill",style:{flex:1,background:"rgba(56, 189, 248, 0.15)",color:"var(--sky-400)",border:"1px solid rgba(56, 189, 248, 0.3)",fontSize:"0.66rem",padding:"0.3rem 0.5rem",justifyContent:"center"},children:[l.jsx(bS,{size:11}),l.jsxs("span",{children:[u.toFixed(1),"V (",p??0,"%)"]})]})]})]})]})},Zt="";async function YS(){const t=await fetch(`${Zt}/api/diagnostics`);if(!t.ok)throw new Error(`Diagnostics fetch failed with status ${t.status}`);return t.json()}async function qS(){const t=await fetch(`${Zt}/api/zones`);return t.ok?(await t.json()).zones||[]:[]}async function KS(t){return(await fetch(`${Zt}/api/zones/select`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({zone_id:t})})).ok}async function ZS(t,e=130,n=0){return(await fetch(`${Zt}/api/robot/move`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({direction:t,speed:e,duration_ms:n})})).json()}async function JS(){return(await fetch(`${Zt}/api/robot/stop`,{method:"POST"})).json()}async function QS(){return(await fetch(`${Zt}/api/robot/estop`,{method:"POST"})).json()}async function e1(t){const e=await fetch(`${Zt}/api/ai/scan`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t?{image_base64:t}:{})});if(!e.ok){const n=await e.json().catch(()=>({detail:"Camera or scan failure"}));throw new Error(n.detail||"Failed to capture frame or run AI inference")}return e.json()}async function t1(){try{return await(await fetch(`${Zt}/api/camera/release`,{method:"POST"})).json()}catch{return{ok:!1}}}async function Ea(){try{return await(await fetch(`${Zt}/api/camera/reclaim`,{method:"POST"})).json()}catch{return{ok:!1}}}async function n1(t,e,n="Field Operator"){const i=await fetch(`${Zt}/api/treatment/approve`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({decision_id:t,approved:e,operator_name:n})});if(!i.ok){const r=await i.json().catch(()=>({detail:"Spray approval rejected"}));throw new Error(r.detail||"Approval request failed")}return i.json()}async function i1(t){const e=await fetch(`${Zt}/api/reinspection/${t}`);return e.ok?e.json():null}async function r1(t){const e=await fetch(`${Zt}/api/camera/power`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:t})});if(!e.ok)throw new Error("Failed to toggle camera power");return e.json()}async function s1(){const t=await fetch(`${Zt}/api/field/heatmap`);if(!t.ok)throw new Error(`Failed to fetch field heatmap data: status ${t.status}`);return t.json()}async function a1(t,e,n){const i=await fetch(`${Zt}/api/robot/position`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({x:t,y:e,zone_id:n})});if(!i.ok)throw new Error(`Failed to update robot position: status ${i.status}`);return i.json()}async function o1(){const t=await fetch(`${Zt}/api/network/status`);if(!t.ok)throw new Error(`Failed to fetch network status: ${t.status}`);return t.json()}async function l1(t,e=80){const n=await fetch(`${Zt}/api/network/config`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({esp32_ip:t,esp32_port:e})});if(!n.ok)throw new Error(`Failed to update network config: ${n.status}`);return n.json()}async function c1(){try{const t=await fetch(`${Zt}/api/robot/mode`);return t.ok?await t.json():{mode:"REAL_HARDWARE",is_connected:!1,ping_ms:null}}catch{return{mode:"REAL_HARDWARE",is_connected:!1,ping_ms:null}}}async function u1(t){const e=await fetch(`${Zt}/api/robot/mode`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:t})});if(!e.ok)throw new Error(`Failed to set hardware mode: ${e.status}`);return e.json()}const Mm=W0.memo(({cameraStatus:t,lastDetection:e,isScanning:n,onTriggerScan:i,onCameraToggled:r,activeZoneId:s,telemetry:a,onMove:o,onStop:c})=>{var Mt;const u=oe.useRef(null),p=oe.useRef(null),h=oe.useRef(null),f=oe.useRef(!1),m=oe.useRef({frames:0,lastTime:performance.now()}),[_,M]=oe.useState("direct"),[g,d]=oe.useState(!1),[x,E]=oe.useState(null),[S,b]=oe.useState(!1),[T,C]=oe.useState(!0),[y,A]=oe.useState(!1),[P,N]=oe.useState(!1),[I,F]=oe.useState(0),[D,V]=oe.useState(0),[Q,k]=oe.useState(""),[O,U]=oe.useState(0),[X,K]=oe.useState(0),[le,ue]=oe.useState("640x480"),[we,Fe]=oe.useState(!0),[ke,Z]=oe.useState(Date.now()),ee=we&&(t==null?void 0:t.enabled)!==!1&&(t==null?void 0:t.status)!=="OFF",me=ee&&(_==="direct"||_==="fallback"||((t==null?void 0:t.connected)??!1)),Ue=oe.useCallback((ne,Pe)=>{m.current.frames++;const L=ne-m.current.lastTime;if(L>=1e3){const Ze=Math.round(m.current.frames*1e3/L);if(F(Ze),m.current.frames=0,m.current.lastTime=ne,u.current&&typeof u.current.getVideoPlaybackQuality=="function"){const $e=u.current.getVideoPlaybackQuality();$e&&typeof $e.droppedVideoFrames=="number"&&V($e.droppedVideoFrames)}}u.current&&"requestVideoFrameCallback"in u.current&&u.current.requestVideoFrameCallback(Ue)},[]),_e=oe.useCallback(async()=>{var ne,Pe;if(!f.current){if(f.current=!0,d(!1),E(null),p.current&&(p.current.getTracks().forEach(L=>L.stop()),p.current=null),!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){console.warn("getUserMedia not supported in this browser, falling back to MJPEG stream."),await Ea().catch(()=>{}),Z(Date.now()),M("fallback"),f.current=!1;return}try{await t1().catch(()=>{});const L=[{video:{width:{ideal:1280},height:{ideal:720},frameRate:{ideal:120,min:60}},audio:!1},{video:{width:{ideal:640},height:{ideal:480},frameRate:{ideal:120}},audio:!1},{video:{width:{ideal:640},height:{ideal:480},frameRate:{ideal:90}},audio:!1},{video:{width:{ideal:1280},height:{ideal:720},frameRate:{ideal:60}},audio:!1},{video:{width:{ideal:640},height:{ideal:480},frameRate:{ideal:60}},audio:!1},{video:{width:{ideal:1280},height:{ideal:720},frameRate:{ideal:30}},audio:!1},{video:!0,audio:!1}];let Ze=null,$e=null;for(const v of L)try{if(Ze=await navigator.mediaDevices.getUserMedia(v),Ze)break}catch(W){$e=W}if(!Ze)throw $e||new Error("Failed to acquire camera media stream");p.current=Ze;const R=Ze.getVideoTracks()[0];if(R){const v=typeof R.getCapabilities=="function"?R.getCapabilities():{},W=R.getSettings();console.log("[AgriGuard Camera] Hardware Capabilities:",v),console.log("[AgriGuard Camera] Initial Negotiated Settings:",W);let q=30;v.frameRate&&v.frameRate.max&&(q=Math.round(v.frameRate.max));const te=[120,90,60,30];for(const se of te)if(q>=se||!v.frameRate)try{await R.applyConstraints({frameRate:{ideal:se}});break}catch(Me){console.warn(`applyConstraints(${se} FPS) notice:`,Me)}const ae=R.getSettings(),fe=ae.width||W.width||640,H=ae.height||W.height||480;ue(`${fe}x${H}`);const Y=v.frameRate?`${v.frameRate.max} FPS max (${((ne=v.width)==null?void 0:ne.max)||fe}x${((Pe=v.height)==null?void 0:Pe.max)||H})`:"UVC Hardware (30-60 FPS)";k(Y),R.onended=()=>{console.warn("[AgriGuard Camera] Video track ended. Reconnecting..."),M("error"),E("Camera disconnected from optical bus.")}}u.current&&(u.current.srcObject=Ze,u.current.autoplay=!0,u.current.playsInline=!0,u.current.muted=!0,u.current.play().catch(v=>console.warn("Video auto-playback notice:",v)),m.current={frames:0,lastTime:performance.now()},"requestVideoFrameCallback"in u.current&&u.current.requestVideoFrameCallback(Ue)),M("direct"),E(null)}catch(L){console.warn("Direct getUserMedia acquisition notice, falling back to backend MJPEG stream:",L.name,L.message),L.name==="NotAllowedError"?E("Browser camera permission denied. Displaying backend hardware stream."):L.name==="NotFoundError"?E("No physical USB camera device detected."):L.name==="NotReadableError"&&E("Camera is currently busy. Displaying backend hardware stream."),await Ea().catch(()=>{}),Z(Date.now()),M("fallback")}finally{f.current=!1}}},[Ue]),Be=oe.useCallback(()=>{p.current&&(p.current.getTracks().forEach(ne=>ne.stop()),p.current=null),u.current&&(u.current.srcObject=null),M("off")},[]);oe.useEffect(()=>(ee?_e():Be(),()=>{p.current&&(p.current.getTracks().forEach(ne=>ne.stop()),p.current=null)}),[ee,_e,Be]),oe.useEffect(()=>{u.current&&p.current&&u.current.srcObject!==p.current&&(u.current.srcObject=p.current,u.current.play().catch(ne=>console.warn("Video auto-playback notice:",ne)))},[_,ee]);const ut=oe.useCallback(()=>{const ne=u.current;if(!ne||ne.readyState<2||ne.videoWidth===0)return null;h.current||(h.current=document.createElement("canvas"));const Pe=h.current,L=Math.min(ne.videoWidth,640),Ze=Math.min(ne.videoHeight,480);(Pe.width!==L||Pe.height!==Ze)&&(Pe.width=L,Pe.height=Ze);const $e=Pe.getContext("2d",{alpha:!1});return $e?($e.drawImage(ne,0,0,L,Ze),Pe.toDataURL("image/jpeg",.8)):null},[]),Xe=oe.useCallback(()=>{const ne=performance.now();let Pe;if(_==="direct"){const Ze=ut();Ze&&(Pe=Ze)}i(Pe);const L=Math.round(performance.now()-ne);K(L)},[_,ut,i]);oe.useEffect(()=>{if(!P||!ee||n)return;const ne=setInterval(()=>{if(!n&&_==="direct"){const Pe=performance.now(),L=ut();if(L){i(L);const Ze=Math.round(performance.now()-Pe);K(Ze),U(2.5)}}},400);return()=>clearInterval(ne)},[P,ee,n,_,ut,i]);const qe=async()=>{b(!0);try{const ne=!ee;Fe(ne),ne||Be();const Pe=await r1(ne);ne&&(await Ea().catch(()=>{}),Z(Date.now()),await _e()),r&&r(Pe)}catch(ne){console.error("Failed to toggle camera power:",ne)}finally{b(!1)}},tt=async()=>{d(!1),E(null),await Ea().catch(()=>{}),Z(Date.now()),await _e()},He=ne=>{o&&o(ne,130,400)},st=()=>{c&&c()},pt=s||(a==null?void 0:a.active_zone_id)||"ZONE-R1C1";return l.jsxs("div",{className:"glass-panel",style:{padding:"1.25rem",height:"100%",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.75rem",flexWrap:"wrap",gap:"0.5rem"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[l.jsx(Xx,{size:20,color:ee?"var(--emerald-400)":"var(--text-muted)"}),l.jsxs("div",{children:[l.jsx("h2",{style:{fontSize:"1.1rem",fontWeight:700,letterSpacing:"-0.01em"},children:"Real USB Optical Cockpit"}),l.jsxs("div",{style:{fontSize:"0.72rem",color:"var(--text-muted)",display:"flex",alignItems:"center",gap:"0.4rem"},children:[l.jsx("span",{children:"Primary Field Viewport"}),me&&l.jsxs(l.Fragment,{children:[l.jsx("span",{children:"•"}),l.jsxs("span",{style:{color:"var(--emerald-400)",display:"inline-flex",alignItems:"center",gap:"2px"},children:[l.jsx(t_,{size:11})," ",_==="direct"?"Hardware Direct (<15ms)":"Zero-Lag Stream"]})]})]})]})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[l.jsx("span",{className:`status-pill ${ee?me?"status-online":"status-offline":"status-warning"}`,children:ee?me?`${_==="direct"?"DIRECT VIDEO":"STREAM"} • LIVE`:"DISCONNECTED":"STANDBY"}),l.jsx("button",{onClick:()=>A(!y),className:"btn btn-outline",style:{padding:"0.35rem 0.6rem",fontSize:"0.75rem",opacity:y?1:.6},title:"Toggle Performance HUD",children:l.jsx(DS,{size:13})}),me&&l.jsx("button",{onClick:()=>C(!T),className:"btn btn-outline",style:{padding:"0.35rem 0.6rem",fontSize:"0.75rem",opacity:T?1:.6},title:"Toggle target reticle",children:l.jsx(Ul,{size:13})}),me&&l.jsx("button",{onClick:tt,className:"btn btn-outline",style:{padding:"0.35rem 0.6rem",fontSize:"0.75rem"},title:"Refresh video connection",children:l.jsx(Br,{size:13})}),l.jsx("button",{onClick:qe,disabled:S,className:`btn ${ee?"btn-outline":"btn-primary"}`,style:{padding:"0.35rem 0.75rem",fontSize:"0.8rem",borderColor:ee?"rgba(244, 63, 94, 0.4)":void 0,color:ee?"var(--rose-500)":void 0},title:ee?"Turn physical camera OFF":"Turn physical camera ON",children:S?l.jsx(Br,{size:14,className:"animate-spin"}):ee?l.jsxs(l.Fragment,{children:[l.jsx(Sm,{size:14}),l.jsx("span",{children:"Turn OFF"})]}):l.jsxs(l.Fragment,{children:[l.jsx(XS,{size:14}),l.jsx("span",{children:"Turn ON"})]})})]})]}),l.jsxs("div",{style:{position:"relative",width:"100%",aspectRatio:"16/9",backgroundColor:"#05080f",borderRadius:"var(--radius-md)",overflow:"hidden",border:"1px solid var(--border-subtle)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"inset 0 0 40px rgba(0,0,0,0.8)"},children:[l.jsx("video",{ref:u,autoPlay:!0,playsInline:!0,muted:!0,style:{width:"100%",height:"100%",objectFit:"contain",backgroundColor:"#000",display:ee&&_==="direct"?"block":"none"}}),ee&&_==="fallback"&&l.jsx("img",{src:`/api/camera/stream?t=${ke}`,alt:"Live Physical USB Camera Stream",style:{width:"100%",height:"100%",objectFit:"contain",backgroundColor:"#000"},onError:()=>{console.warn("Fallback stream reconnecting, reclaiming camera..."),Ea().catch(()=>{})}}),!ee&&l.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"#05080f",zIndex:4,textAlign:"center",padding:"2rem",color:"var(--text-muted)"},children:[l.jsx("div",{style:{width:"56px",height:"56px",borderRadius:"50%",background:"rgba(255, 255, 255, 0.05)",border:"1px solid var(--border-subtle)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 1rem auto"},children:l.jsx(Sm,{size:28,color:"var(--text-muted)"})}),l.jsx("h3",{style:{fontSize:"1rem",color:"#fff",marginBottom:"0.25rem"},children:"Camera Standby Mode"}),l.jsx("p",{style:{fontSize:"0.8rem",maxWidth:"320px",margin:"0 auto 1.25rem auto"},children:"Optical hardware bus is in low-power standby. Click below to engage direct hardware video capture."}),l.jsxs("button",{onClick:qe,disabled:S,className:"btn btn-primary",style:{padding:"0.5rem 1.25rem",fontSize:"0.85rem"},children:[l.jsx(HS,{size:14}),l.jsx("span",{children:"Power ON Camera"})]})]}),ee&&_==="error"&&!me&&l.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"#05080f",zIndex:4,textAlign:"center",padding:"2rem",color:"var(--text-muted)"},children:[l.jsx(Xd,{size:44,color:"var(--rose-500)",style:{margin:"0 auto 0.75rem auto"}}),l.jsx("h3",{style:{fontSize:"1rem",color:"#fff",marginBottom:"0.25rem"},children:"CAMERA: DISCONNECTED"}),l.jsx("p",{style:{fontSize:"0.8rem",maxWidth:"340px",margin:"0 auto 1rem auto"},children:x||"Physical USB camera stream interrupted. Check connection and click retry."}),l.jsxs("button",{onClick:tt,className:"btn btn-outline",style:{padding:"0.4rem 1rem",fontSize:"0.8rem"},children:[l.jsx(Br,{size:13}),l.jsx("span",{children:"Retry Stream"})]})]}),ee&&me&&l.jsxs(l.Fragment,{children:[T&&l.jsx("div",{className:"camera-reticle"}),l.jsxs("div",{style:{position:"absolute",top:"10px",left:"10px",background:"rgba(10, 15, 24, 0.75)",backdropFilter:"blur(8px)",padding:"4px 10px",borderRadius:"6px",fontSize:"0.72rem",color:"#34d399",fontFamily:"JetBrains Mono, monospace",border:"1px solid rgba(16, 185, 129, 0.3)",display:"flex",alignItems:"center",gap:"6px",zIndex:3},children:[l.jsx("span",{className:"pulse-indicator green",style:{width:"6px",height:"6px"}}),l.jsxs("span",{children:["LIVE • ",I," FPS"]}),l.jsx("span",{style:{color:"var(--text-dim)"},children:"|"}),l.jsx("span",{style:{color:"var(--sky-400)"},children:le})]}),y&&l.jsxs("div",{style:{position:"absolute",bottom:"10px",left:"10px",background:"rgba(10, 15, 24, 0.92)",backdropFilter:"blur(10px)",padding:"8px 14px",borderRadius:"8px",fontSize:"0.70rem",fontFamily:"JetBrains Mono, monospace",border:"1px solid rgba(56, 189, 248, 0.35)",color:"#e2e8f0",display:"flex",flexDirection:"column",gap:"3px",zIndex:4,boxShadow:"0 8px 24px rgba(0,0,0,0.6)"},children:[l.jsxs("div",{style:{fontWeight:700,color:"var(--sky-400)",marginBottom:"2px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[l.jsx("span",{children:"CAMERA PERFORMANCE HUD"}),l.jsx("span",{style:{color:_==="direct"?"#34d399":"#f59e0b",fontSize:"0.65rem"},children:_==="direct"?"DIRECT HTML5":"HTTP STREAM"})]}),l.jsxs("div",{children:["Requested FPS: ",l.jsx("strong",{style:{color:"#fff"},children:"120"})]}),l.jsxs("div",{children:["Actual FPS: ",l.jsx("strong",{style:{color:I>=60?"#34d399":"#38bdf8"},children:I})]}),l.jsxs("div",{children:["Resolution: ",l.jsx("strong",{style:{color:"#fff"},children:le})]}),l.jsxs("div",{children:["AI FPS: ",l.jsx("strong",{style:{color:"#fff"},children:P?`${O.toFixed(1)}`:"0 (On-Demand)"})]}),l.jsxs("div",{children:["Inference Time: ",l.jsxs("strong",{style:{color:"#fff"},children:[X," ms"]})]}),l.jsxs("div",{children:["Dropped Frames: ",l.jsx("strong",{style:{color:D>0?"#f87171":"#34d399"},children:D})]}),Q&&l.jsxs("div",{style:{marginTop:"2px",color:"var(--text-muted)",fontSize:"0.62rem",borderTop:"1px solid rgba(255,255,255,0.08)",paddingTop:"2px"},children:["Hardware Limits: ",Q]})]}),l.jsxs("div",{style:{position:"absolute",top:"10px",right:"10px",background:"rgba(10, 15, 24, 0.75)",backdropFilter:"blur(8px)",padding:"4px 10px",borderRadius:"6px",fontSize:"0.72rem",color:"#f8fafc",fontFamily:"JetBrains Mono, monospace",border:"1px solid var(--border-subtle)",display:"flex",alignItems:"center",gap:"6px",zIndex:3},children:[l.jsxs("span",{children:["📍 ",pt]}),(a==null?void 0:a.robot_location)&&l.jsxs("span",{style:{color:"var(--text-muted)"},children:["(X:",a.robot_location.x,", Y:",a.robot_location.y,")"]})]}),e!=null&&e.visual_annotations&&e.visual_annotations.length>0?e.visual_annotations.map((ne,Pe)=>{var te,ae;const L=((te=e.frame_dimensions)==null?void 0:te.width)||1280,Ze=((ae=e.frame_dimensions)==null?void 0:ae.height)||720,$e=ne.bbox[0]/L*100,R=ne.bbox[1]/Ze*100,v=(ne.bbox[2]-ne.bbox[0])/L*100,W=(ne.bbox[3]-ne.bbox[1])/Ze*100,q=ne.color||(ne.is_target?"#10b981":"#ef4444");return l.jsx("div",{style:{position:"absolute",border:`2px solid ${q}`,backgroundColor:`${q}22`,left:`${$e}%`,top:`${R}%`,width:`${v}%`,height:`${W}%`,pointerEvents:"none",transition:"all 0.2s ease-out",boxShadow:`0 0 10px ${q}66`,zIndex:3},children:l.jsx("span",{style:{position:"absolute",top:"-22px",left:"0",background:q,color:"#fff",fontSize:"0.68rem",fontWeight:700,padding:"1px 6px",borderRadius:"3px",whiteSpace:"nowrap",boxShadow:"0 2px 5px rgba(0,0,0,0.4)"},children:ne.label})},`ann-${Pe}`)}):e!=null&&e.bounding_box?l.jsx("div",{style:{position:"absolute",border:"2px solid #10b981",backgroundColor:"rgba(16, 185, 129, 0.15)",left:`${e.bounding_box.x/1280*100}%`,top:`${e.bounding_box.y/720*100}%`,width:`${e.bounding_box.w/1280*100}%`,height:`${e.bounding_box.h/720*100}%`,pointerEvents:"none",transition:"all 0.2s ease-out",boxShadow:"0 0 12px rgba(16, 185, 129, 0.4)",zIndex:3},children:l.jsxs("span",{style:{position:"absolute",top:"-20px",left:"0",background:"#10b981",color:"#fff",fontSize:"0.7rem",fontWeight:700,padding:"1px 6px",borderRadius:"3px",whiteSpace:"nowrap"},children:[e.disease," (",Math.round(e.confidence*100),"%)"]})}):null,e&&l.jsx("div",{style:{position:"absolute",top:"12px",left:"50%",transform:"translateX(-50%)",backgroundColor:e.status==="HUMAN_DETECTED"?"rgba(239, 68, 68, 0.9)":e.status==="DISEASE_RESULT"||e.status==="HEALTHY"?"rgba(16, 185, 129, 0.9)":"rgba(30, 41, 59, 0.88)",border:`1px solid ${e.status==="HUMAN_DETECTED"?"#ef4444":e.status==="DISEASE_RESULT"||e.status==="HEALTHY"?"#10b981":"rgba(245, 158, 11, 0.6)"}`,color:"#fff",padding:"4px 14px",borderRadius:"20px",fontSize:"0.72rem",fontWeight:700,zIndex:10,backdropFilter:"blur(4px)",boxShadow:"0 4px 12px rgba(0,0,0,0.5)",pointerEvents:"none",letterSpacing:"0.02em",whiteSpace:"nowrap"},children:e.status==="HUMAN_DETECTED"?"⚠️ [PERSON DETECTED] Disease analysis: DISABLED":e.status==="NO_VALID_LEAF"?"🌿 [NO VALID LEAF] Disease analysis: IDLE":e.status==="UNSUPPORTED_CROP"?"🚫 [UNSUPPORTED PLANT] Disease analysis: DISABLED":e.status==="LOW_QUALITY"?"🔍 [LOW QUALITY ROI] Move camera closer":e.status==="DISEASE_RESULT"||e.status==="HEALTHY"?"🌱 [SUPPORTED LEAF] Disease analysis: ACTIVE":e.display_name})]})]}),o&&l.jsxs("div",{className:"quick-drive-bar",children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem"},children:[l.jsx("span",{style:{fontSize:"0.75rem",fontWeight:600,color:"var(--text-muted)",textTransform:"uppercase"},children:"Cockpit Drive:"}),l.jsxs("button",{onClick:()=>He("left"),className:"quick-drive-btn",title:"Steer Left",children:[l.jsx(Uh,{size:13}),l.jsx("span",{children:"Left"})]}),l.jsxs("button",{onClick:()=>He("forward"),className:"quick-drive-btn",title:"Move Forward",children:[l.jsx(Fh,{size:13}),l.jsx("span",{children:"Fwd"})]}),l.jsxs("button",{onClick:()=>He("backward"),className:"quick-drive-btn",title:"Move Backward",children:[l.jsx(Lh,{size:13}),l.jsx("span",{children:"Back"})]}),l.jsxs("button",{onClick:()=>He("right"),className:"quick-drive-btn",title:"Steer Right",children:[l.jsx(Oh,{size:13}),l.jsx("span",{children:"Right"})]}),l.jsxs("button",{onClick:st,className:"quick-drive-btn btn-stop",title:"Halt Motors",children:[l.jsx(zh,{size:13}),l.jsx("span",{children:"Stop"})]})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[l.jsxs("button",{onClick:()=>N(!P),className:"btn btn-outline",style:{padding:"0.3rem 0.65rem",fontSize:"0.72rem",borderColor:P?"var(--emerald-500)":void 0,color:P?"var(--emerald-400)":"var(--text-muted)"},title:"Toggle automatic 2.5 FPS foliage pathology monitoring",children:[l.jsx(Jx,{size:12}),l.jsxs("span",{children:["Auto-Scan: ",P?"2.5 FPS ON":"OFF"]})]}),l.jsx("div",{style:{fontSize:"0.72rem",color:"var(--text-dim)",fontFamily:"JetBrains Mono, monospace"},children:(Mt=a==null?void 0:a.actuators)!=null&&Mt.motor_state?`MOTORS: ${a.actuators.motor_state}`:"READY"})]})]}),l.jsxs("div",{style:{marginTop:"0.85rem",display:"flex",gap:"0.75rem",justifyContent:"space-between",alignItems:"center"},children:[l.jsx("div",{style:{fontSize:"0.82rem",color:"var(--text-muted)"},children:ee?e?l.jsxs("span",{children:["Last Scan: ",l.jsx("strong",{style:{color:"#fff"},children:e.display_name})," ",l.jsxs("span",{style:{color:"var(--text-dim)"},children:["(",(e.confidence*100).toFixed(0),"% conf)"]})]}):l.jsx("span",{children:"Live optical feed synchronized • Ready for pathology scan"}):l.jsx("span",{style:{color:"var(--amber-400)"},children:"Camera offline (Standby mode)"})}),l.jsx("button",{onClick:Xe,disabled:!ee||n,className:"btn btn-primary",style:{padding:"0.65rem 1.4rem",whiteSpace:"nowrap"},title:ee?void 0:"Turn ON camera to perform scan",children:n?l.jsxs(l.Fragment,{children:[l.jsx(Br,{size:16,className:"animate-spin"}),l.jsx("span",{children:"Analyzing Foliage..."})]}):l.jsxs(l.Fragment,{children:[l.jsx(Zx,{size:16}),l.jsx("span",{children:"Capture & AI Scan"})]})})]})]})}),Em=({telemetry:t})=>{var Q,k,O,U,X,K,le,ue,we,Fe,ke,Z,ee,me,Ue,_e,Be,ut,Xe,qe,tt,He,st,pt,Mt,ne,Pe,L,Ze,$e,R,v,W,q,te,ae,fe;const[e,n]=oe.useState(!1),i=(t==null?void 0:t.mode)==="REAL_HARDWARE"||(t==null?void 0:t.hardware_mode)==="REAL_HARDWARE",r=!!(t!=null&&t.esp32_connected),s=!i,a=i&&!r,o=t==null?void 0:t.ultrasonic;let c="--",u="--",p="--",h="OFFLINE",f="ROBOT: DISCONNECTED",m=!1;if(s){const H=(o==null?void 0:o.left)??((o==null?void 0:o.distance_cm)!=null?Math.round(o.distance_cm*1.05*10)/10:72),Y=(o==null?void 0:o.center)??(o==null?void 0:o.distance_cm)??48,se=(o==null?void 0:o.right)??((o==null?void 0:o.distance_cm)!=null?Math.round(o.distance_cm*1.15*10)/10:86),Me=Math.min(H,Y,se);Me<25?h="OBSTACLE":Me<=60?h="WARNING":h="SAFE",m=Y<25,f=m?"OBSTACLE AHEAD":h,c=`${H.toFixed(1)} cm`,u=`${Y.toFixed(1)} cm`,p=`${se.toFixed(1)} cm`}else if(r){const H=o==null?void 0:o.left,Y=(o==null?void 0:o.center)??(o==null?void 0:o.distance_cm),se=o==null?void 0:o.right;H!=null&&(c=`${Number(H).toFixed(1)} cm`),Y!=null&&(u=`${Number(Y).toFixed(1)} cm`),se!=null&&(p=`${Number(se).toFixed(1)} cm`);const Me=Y!=null?Number(Y):999,pe=H!=null?Number(H):999,he=se!=null?Number(se):999,Ee=Math.min(Me,pe,he);Ee<25?h="OBSTACLE":Ee<=60?h="WARNING":h="SAFE",m=Me<25,f=m?"OBSTACLE AHEAD":h}let _="--",M="OFFLINE";if(s){let H=42;typeof(t==null?void 0:t.soil_moisture)=="number"?H=t.soil_moisture:((Q=t==null?void 0:t.soil_moisture)==null?void 0:Q.moisture_pct)!=null?H=t.soil_moisture.moisture_pct:((k=t==null?void 0:t.soil_moisture)==null?void 0:k.percentage)!=null&&(H=t.soil_moisture.percentage),H>=70?M="WET":H>=40?M="NORMAL":M="DRY",_=`${H.toFixed(1)}%`}else if(r){let H=t==null?void 0:t.soil_moisture,Y=null;typeof H=="number"?Y=H:(H==null?void 0:H.moisture_pct)!=null?Y=H.moisture_pct:(H==null?void 0:H.percentage)!=null&&(Y=H.percentage),Y!=null&&(_=`${Number(Y).toFixed(1)}%`,Y>=70?M="WET":Y>=40?M="NORMAL":M="DRY")}let g="--",d="--",x="OFFLINE";if(s){const H=((O=t==null?void 0:t.dht22)==null?void 0:O.temperature)??((U=t==null?void 0:t.environment)==null?void 0:U.temperature_c)??29.4,Y=((X=t==null?void 0:t.dht22)==null?void 0:X.humidity)??((K=t==null?void 0:t.environment)==null?void 0:K.humidity_pct)??74;g=`${H.toFixed(1)} °C`,d=`${Y.toFixed(1)} %`,x="ACTIVE"}else if(r){const H=((le=t==null?void 0:t.dht22)==null?void 0:le.temperature)??((ue=t==null?void 0:t.environment)==null?void 0:ue.temperature_c),Y=((we=t==null?void 0:t.dht22)==null?void 0:we.humidity)??((Fe=t==null?void 0:t.environment)==null?void 0:Fe.humidity_pct);H!=null&&(g=`${Number(H).toFixed(1)} °C`),Y!=null&&(d=`${Number(Y).toFixed(1)} %`),H!=null&&Y!=null&&(x="ACTIVE")}let E="--",S="--",b="--",T="--",C="--",y="--",A="--",P="OFFLINE";if(s){const H=((ke=t==null?void 0:t.mpu6050)==null?void 0:ke.accel_x)??((Z=t==null?void 0:t.imu)==null?void 0:Z.ax)??.03,Y=((ee=t==null?void 0:t.mpu6050)==null?void 0:ee.accel_y)??((me=t==null?void 0:t.imu)==null?void 0:me.ay)??.12,se=((Ue=t==null?void 0:t.mpu6050)==null?void 0:Ue.accel_z)??((_e=t==null?void 0:t.imu)==null?void 0:_e.az)??.98,Me=((Be=t==null?void 0:t.mpu6050)==null?void 0:Be.gyro_x)??((ut=t==null?void 0:t.imu)==null?void 0:ut.gx)??1.2,pe=((Xe=t==null?void 0:t.mpu6050)==null?void 0:Xe.gyro_y)??((qe=t==null?void 0:t.imu)==null?void 0:qe.gy)??-.8,he=((tt=t==null?void 0:t.mpu6050)==null?void 0:tt.gyro_z)??((He=t==null?void 0:t.imu)==null?void 0:He.gz)??.5,Ee=((st=t==null?void 0:t.mpu6050)==null?void 0:st.pitch_deg)??((pt=t==null?void 0:t.imu)==null?void 0:pt.pitch_deg)??1.2,Le=((Mt=t==null?void 0:t.mpu6050)==null?void 0:Mt.roll_deg)??((ne=t==null?void 0:t.imu)==null?void 0:ne.roll_deg)??-.8;E=`${H.toFixed(3)}g`,S=`${Y.toFixed(3)}g`,b=`${se.toFixed(3)}g`,T=`${Me.toFixed(1)}°/s`,C=`${pe.toFixed(1)}°/s`,y=`${he.toFixed(1)}°/s`,A=`Pitch ${Ee.toFixed(1)}° | Roll ${Le.toFixed(1)}°`,P=((Pe=t==null?void 0:t.mpu6050)==null?void 0:Pe.tilt_status)??(Math.abs(Ee)<5&&Math.abs(Le)<5?"LEVEL":"TILTED")}else if(r){const H=t==null?void 0:t.mpu6050,Y=t==null?void 0:t.imu,se=(H==null?void 0:H.accel_x)??(Y==null?void 0:Y.ax),Me=(H==null?void 0:H.accel_y)??(Y==null?void 0:Y.ay),pe=(H==null?void 0:H.accel_z)??(Y==null?void 0:Y.az),he=(H==null?void 0:H.gyro_x)??(Y==null?void 0:Y.gx),Ee=(H==null?void 0:H.gyro_y)??(Y==null?void 0:Y.gy),Le=(H==null?void 0:H.gyro_z)??(Y==null?void 0:Y.gz),Ge=(H==null?void 0:H.pitch_deg)??(Y==null?void 0:Y.pitch_deg),B=(H==null?void 0:H.roll_deg)??(Y==null?void 0:Y.roll_deg);se!=null&&(E=`${Number(se).toFixed(3)}g`),Me!=null&&(S=`${Number(Me).toFixed(3)}g`),pe!=null&&(b=`${Number(pe).toFixed(3)}g`),he!=null&&(T=`${Number(he).toFixed(1)}°/s`),Ee!=null&&(C=`${Number(Ee).toFixed(1)}°/s`),Le!=null&&(y=`${Number(Le).toFixed(1)}°/s`),Ge!=null&&B!=null&&(A=`Pitch ${Number(Ge).toFixed(1)}° | Roll ${Number(B).toFixed(1)}°`,P=(H==null?void 0:H.tilt_status)??(Math.abs(Number(Ge))<5&&Math.abs(Number(B))<5?"LEVEL":"TILTED"))}let N="OFF",I="OFF",F=a?"OFFLINE":"READY";const D=((L=t==null?void 0:t.pump)==null?void 0:L.state)==="ON"||((Ze=t==null?void 0:t.actuators)==null?void 0:Ze.pump_active)===!0;s?(N=(($e=t==null?void 0:t.pump)==null?void 0:$e.state)??((R=t==null?void 0:t.actuators)!=null&&R.pump_active?"ON":"OFF"),I=((v=t==null?void 0:t.pump)==null?void 0:v.relay)??N,F=((W=t==null?void 0:t.pump)==null?void 0:W.spray_status)??(D?"ACTIVE":"READY")):r&&(N=((q=t==null?void 0:t.pump)==null?void 0:q.state)??((te=t==null?void 0:t.actuators)!=null&&te.pump_active?"ON":"OFF"),I=((ae=t==null?void 0:t.pump)==null?void 0:ae.relay)??N,F=((fe=t==null?void 0:t.pump)==null?void 0:fe.spray_status)??(D?"ACTIVE":"READY"));const V=async H=>{try{n(!0),await fetch("/api/simulation/pump",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({state:H?"ON":"OFF",active:H})})}catch(Y){console.error("Failed to toggle simulated pump:",Y)}finally{n(!1)}};return l.jsxs("div",{className:"glass-panel",style:{padding:"1.25rem"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem",flexWrap:"wrap",gap:"0.5rem"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[l.jsx(kh,{size:18,color:"var(--sky-400)"}),l.jsx("h2",{style:{fontSize:"1.05rem",fontWeight:700,margin:0},children:"Robot Sensor Status"})]}),l.jsx("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:s?l.jsxs(l.Fragment,{children:[l.jsx("span",{className:"status-pill",style:{background:"rgba(56, 189, 248, 0.15)",color:"var(--sky-400)",border:"1px solid rgba(56, 189, 248, 0.3)",fontSize:"0.68rem",fontWeight:700,letterSpacing:"0.04em"},children:"● HARDWARE MODE: SIMULATION"}),l.jsx("span",{className:"status-pill status-warning",style:{fontSize:"0.68rem",fontWeight:700},children:"DATA SOURCE: SIMULATION"})]}):l.jsx("span",{className:`status-pill ${r?"status-online":"status-offline"}`,style:{fontSize:"0.68rem",fontWeight:700},children:r?"● REAL HARDWARE: CONNECTED":"● ROBOT: DISCONNECTED"})})]}),a&&l.jsxs("div",{style:{marginBottom:"1rem",padding:"0.65rem 0.9rem",background:"rgba(244, 63, 94, 0.1)",border:"1px solid rgba(244, 63, 94, 0.3)",borderRadius:"8px",display:"flex",alignItems:"center",gap:"0.6rem",fontSize:"0.75rem",color:"var(--rose-400)"},children:[l.jsx(ho,{size:16,color:"var(--rose-400)",style:{flexShrink:0}}),l.jsxs("span",{children:[l.jsx("strong",{children:"ROBOT: DISCONNECTED"})," — Physical ESP32 hardware is offline. No fake sensor data is generated."]})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"1rem"},children:[l.jsxs("div",{style:{background:"rgba(0,0,0,0.35)",padding:"0.85rem 1rem",borderRadius:"var(--radius-sm)",border:m?"1px solid var(--rose-500)":"1px solid var(--border-subtle)",display:"flex",flexDirection:"column",justifyContent:"space-between",transition:"border-color 0.2s ease"},children:[l.jsxs("div",{children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.45rem"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.35rem",fontSize:"0.72rem",color:"var(--text-muted)",fontWeight:700},children:[l.jsx(kS,{size:13,color:"var(--sky-400)"}),l.jsx("span",{children:"ULTRASONIC PROXIMITY"})]}),l.jsx("span",{className:`status-pill ${h==="SAFE"?"status-online":h==="WARNING"?"status-warning":"status-offline"}`,style:{fontSize:"0.62rem",padding:"0.15rem 0.45rem",fontWeight:800},children:f})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"0.5rem",marginTop:"0.35rem"},children:[l.jsxs("div",{style:{background:"rgba(255,255,255,0.03)",padding:"0.45rem 0.6rem",borderRadius:"6px"},children:[l.jsx("div",{style:{fontSize:"0.65rem",color:"var(--text-muted)",marginBottom:"0.15rem"},children:"Left Sensor"}),l.jsx("div",{className:"mono",style:{fontWeight:800,fontSize:"1.05rem",color:"#fff"},children:c})]}),l.jsxs("div",{style:{background:m?"rgba(244, 63, 94, 0.2)":"rgba(255,255,255,0.03)",padding:"0.45rem 0.6rem",borderRadius:"6px",border:m?"1px solid var(--rose-500)":"1px solid transparent"},children:[l.jsx("div",{style:{fontSize:"0.65rem",color:m?"var(--rose-500)":"var(--text-muted)",fontWeight:m?700:400,marginBottom:"0.15rem"},children:"Center Sensor"}),l.jsx("div",{className:"mono",style:{fontWeight:800,fontSize:"1.05rem",color:m?"var(--rose-500)":"var(--amber-400)"},children:u})]}),l.jsxs("div",{style:{background:"rgba(255,255,255,0.03)",padding:"0.45rem 0.6rem",borderRadius:"6px"},children:[l.jsx("div",{style:{fontSize:"0.65rem",color:"var(--text-muted)",marginBottom:"0.15rem"},children:"Right Sensor"}),l.jsx("div",{className:"mono",style:{fontWeight:800,fontSize:"1.05rem",color:"#fff"},children:p})]})]})]}),l.jsxs("div",{style:{marginTop:"0.55rem",paddingTop:"0.4rem",borderTop:"1px solid var(--border-subtle)",display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"0.68rem"},children:[l.jsx("span",{style:{color:"var(--text-dim)"},children:"Obstacle Status:"}),l.jsxs("strong",{style:{color:h==="SAFE"?"var(--emerald-400)":h==="WARNING"?"var(--amber-400)":"var(--rose-500)"},children:[h," ",m?"(OBSTACLE AHEAD)":""]})]})]}),l.jsxs("div",{style:{background:"rgba(0,0,0,0.35)",padding:"0.85rem",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-subtle)",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[l.jsxs("div",{children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.4rem"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.35rem",fontSize:"0.72rem",color:"var(--text-muted)",fontWeight:700},children:[l.jsx(qx,{size:13,color:"var(--sky-400)"}),l.jsx("span",{children:"SOIL MOISTURE"})]}),l.jsx("span",{className:"status-pill",style:{fontSize:"0.62rem",padding:"0.15rem 0.45rem",fontWeight:800,background:M==="NORMAL"?"rgba(16, 185, 129, 0.2)":M==="WET"?"rgba(56, 189, 248, 0.2)":M==="DRY"?"rgba(245, 158, 11, 0.2)":"rgba(244, 63, 94, 0.2)",color:M==="NORMAL"?"var(--emerald-400)":M==="WET"?"var(--sky-400)":M==="DRY"?"var(--amber-400)":"var(--rose-400)",border:`1px solid ${M==="NORMAL"?"rgba(16, 185, 129, 0.35)":M==="WET"?"rgba(56, 189, 248, 0.35)":M==="DRY"?"rgba(245, 158, 11, 0.35)":"rgba(244, 63, 94, 0.35)"}`},children:M})]}),l.jsx("div",{style:{display:"flex",alignItems:"baseline",gap:"0.35rem",margin:"0.35rem 0 0.15rem 0"},children:l.jsx("div",{className:"mono",style:{fontSize:"1.65rem",fontWeight:800,color:"var(--sky-400)",lineHeight:1},children:_})}),l.jsx("div",{style:{fontSize:"0.68rem",color:"var(--text-dim)"},children:"Range: 0–100% (Capacitive sensor)"})]}),l.jsxs("div",{style:{marginTop:"0.65rem",paddingTop:"0.45rem",borderTop:"1px solid var(--border-subtle)",display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"0.68rem"},children:[l.jsx("span",{style:{color:"var(--text-dim)"},children:"Condition:"}),l.jsx("strong",{style:{color:M==="NORMAL"?"var(--emerald-400)":M==="WET"?"var(--sky-400)":M==="DRY"?"var(--amber-400)":"var(--rose-400)"},children:M})]})]}),l.jsxs("div",{style:{background:"rgba(0,0,0,0.35)",padding:"0.85rem",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-subtle)",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[l.jsxs("div",{children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.5rem"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.35rem",fontSize:"0.72rem",color:"var(--text-muted)",fontWeight:700},children:[l.jsx(Qx,{size:13,color:"var(--amber-400)"}),l.jsx("span",{children:"DHT22"})]}),l.jsx("span",{className:`status-pill ${x==="ACTIVE"?"status-online":"status-offline"}`,style:{fontSize:"0.62rem",padding:"0.15rem 0.45rem",fontWeight:800},children:x})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.35rem",marginTop:"0.2rem"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[l.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:"Temperature:"}),l.jsx("span",{className:"mono",style:{fontSize:"1.1rem",fontWeight:800,color:"var(--amber-400)"},children:g})]}),l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[l.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:"Humidity:"}),l.jsx("span",{className:"mono",style:{fontSize:"1.1rem",fontWeight:800,color:"var(--emerald-400)"},children:d})]})]})]}),l.jsxs("div",{style:{marginTop:"0.65rem",paddingTop:"0.45rem",borderTop:"1px solid var(--border-subtle)",display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"0.68rem"},children:[l.jsx("span",{style:{color:"var(--text-dim)"},children:"Sensor Model:"}),l.jsx("span",{style:{color:"var(--text-muted)",fontWeight:600},children:"DHT22 Microclimate"})]})]}),l.jsxs("div",{style:{background:"rgba(0,0,0,0.35)",padding:"0.85rem",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-subtle)",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[l.jsxs("div",{children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.4rem"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.35rem",fontSize:"0.72rem",color:"var(--text-muted)",fontWeight:700},children:[l.jsx(RS,{size:13,color:"var(--emerald-400)"}),l.jsx("span",{children:"MPU6050"})]}),l.jsx("span",{className:`status-pill ${P!=="OFFLINE"?"status-online":"status-offline"}`,style:{fontSize:"0.62rem",padding:"0.15rem 0.45rem",fontWeight:800},children:P})]}),l.jsx("div",{style:{fontSize:"0.68rem",color:"var(--text-dim)",fontWeight:700,marginBottom:"0.15rem"},children:"ACCELEROMETER"}),l.jsxs("div",{style:{display:"flex",gap:"0.4rem",fontSize:"0.72rem",marginBottom:"0.4rem"},children:[l.jsxs("span",{className:"mono",style:{color:"#fff"},children:["X: ",E]}),l.jsxs("span",{className:"mono",style:{color:"#fff"},children:["Y: ",S]}),l.jsxs("span",{className:"mono",style:{color:"var(--sky-400)",fontWeight:700},children:["Z: ",b]})]}),l.jsx("div",{style:{fontSize:"0.68rem",color:"var(--text-dim)",fontWeight:700,marginBottom:"0.15rem"},children:"GYROSCOPE"}),l.jsxs("div",{style:{display:"flex",gap:"0.4rem",fontSize:"0.72rem"},children:[l.jsxs("span",{className:"mono",style:{color:"#fff"},children:["X: ",T]}),l.jsxs("span",{className:"mono",style:{color:"#fff"},children:["Y: ",C]}),l.jsxs("span",{className:"mono",style:{color:"#fff"},children:["Z: ",y]})]})]}),l.jsxs("div",{style:{marginTop:"0.65rem",paddingTop:"0.45rem",borderTop:"1px solid var(--border-subtle)",display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"0.68rem"},children:[l.jsx("span",{style:{color:"var(--text-dim)"},children:"Tilt / Angle:"}),l.jsx("span",{className:"mono",style:{color:"var(--emerald-400)",fontWeight:700},children:A})]})]}),l.jsxs("div",{style:{background:"rgba(0,0,0,0.35)",padding:"0.85rem",borderRadius:"var(--radius-sm)",border:D?"1px solid rgba(16, 185, 129, 0.5)":"1px solid var(--border-subtle)",display:"flex",flexDirection:"column",justifyContent:"space-between",transition:"border-color 0.2s ease"},children:[l.jsxs("div",{children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.45rem"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.35rem",fontSize:"0.72rem",color:"var(--text-muted)",fontWeight:700},children:[l.jsx(zc,{size:13,color:"var(--amber-400)"}),l.jsx("span",{children:"SPRAY SYSTEM"})]}),l.jsx("span",{className:`status-pill ${D?"status-online":"status-offline"}`,style:{fontSize:"0.62rem",padding:"0.15rem 0.45rem",fontWeight:800},children:F})]}),l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"0.78rem",marginBottom:"0.35rem"},children:[l.jsx("span",{style:{color:"var(--text-muted)"},children:"Pump:"}),l.jsx("strong",{style:{color:D?"var(--emerald-400)":"var(--text-dim)",fontWeight:800},children:N})]}),l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"0.78rem",marginBottom:"0.6rem"},children:[l.jsx("span",{style:{color:"var(--text-muted)"},children:"Relay:"}),l.jsx("strong",{style:{color:D?"var(--emerald-400)":"var(--text-dim)",fontWeight:800},children:I})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.4rem",marginTop:"0.3rem"},children:[l.jsx("button",{type:"button",disabled:e||D||a,onClick:()=>V(!0),className:"btn",style:{padding:"0.4rem 0.5rem",fontSize:"0.72rem",fontWeight:800,background:D?"rgba(16, 185, 129, 0.4)":"rgba(16, 185, 129, 0.15)",color:"#fff",border:D?"1px solid var(--emerald-400)":"1px solid rgba(16, 185, 129, 0.3)",borderRadius:"6px",cursor:D||a?"default":"pointer",opacity:D||a?.6:.85},children:"PUMP ON"}),l.jsx("button",{type:"button",disabled:e||!D||a,onClick:()=>V(!1),className:"btn",style:{padding:"0.4rem 0.5rem",fontSize:"0.72rem",fontWeight:800,background:D?"rgba(244, 63, 94, 0.15)":"rgba(255, 255, 255, 0.15)",color:D?"var(--rose-500)":"#fff",border:D?"1px solid rgba(244, 63, 94, 0.3)":"1px solid rgba(255, 255, 255, 0.3)",borderRadius:"6px",cursor:!D||a?"default":"pointer",opacity:!D||a?.6:.85},children:"PUMP OFF"})]})]}),l.jsxs("div",{style:{marginTop:"0.65rem",paddingTop:"0.45rem",borderTop:"1px solid var(--border-subtle)",fontSize:"0.65rem",color:"var(--text-dim)"},children:["SPRAY STATUS: ",l.jsx("strong",{style:{color:D?"var(--emerald-400)":"var(--text-muted)"},children:F})," (",s?"Simulation mode":"Real hardware",")"]})]})]}),s&&l.jsxs("div",{style:{marginTop:"0.85rem",padding:"0.4rem 0.75rem",background:"rgba(56, 189, 248, 0.06)",borderRadius:"var(--radius-sm)",border:"1px solid rgba(56, 189, 248, 0.2)",display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:"0.68rem",color:"var(--text-muted)"},children:[l.jsxs("span",{children:[l.jsx("strong",{style:{color:"var(--sky-400)"},children:"SIMULATED DATA:"})," Sensor telemetry is dynamically generated by the Simulation Telemetry Provider. No real liquid is actuated."]}),l.jsx("span",{className:"mono",style:{color:"var(--text-dim)"},children:"Target: 6.6 Hz continuous telemetry"})]})]})},bm=({telemetry:t,onMove:e,onStop:n,onEmergencyStop:i,onSprayApprove:r})=>{var ke,Z,ee,me,Ue,_e,Be,ut,Xe,qe,tt,He,st,pt,Mt;const[s,a]=oe.useState(130),[o,c]=oe.useState(null),[u,p]=oe.useState(null),[h,f]=oe.useState(!1),[m,_]=oe.useState("192.168.4.1"),[M,g]=oe.useState(null),[d,x]=oe.useState(!1),[E,S]=oe.useState(""),[b,T]=oe.useState("REAL_HARDWARE"),C=oe.useRef(null),y=oe.useRef(0),A=oe.useRef(null);oe.useEffect(()=>{c1().then(ne=>{ne&&ne.mode&&T(ne.mode)}).catch(()=>{})},[]);const P=(t==null?void 0:t.esp32_connected)??!1,N=((ke=t==null?void 0:t.safety)==null?void 0:ke.emergency_stop)??!1,I=((Z=t==null?void 0:t.ultrasonic)==null?void 0:Z.obstacle_detected)??!1,F=((ee=t==null?void 0:t.ultrasonic)==null?void 0:ee.distance_cm)??null,D=((me=t==null?void 0:t.actuators)==null?void 0:me.motor_state)??"STOPPED",V=((Ue=t==null?void 0:t.actuators)==null?void 0:Ue.pump_active)??!1,Q=((_e=t==null?void 0:t.actuators)==null?void 0:_e.valve_open)??!1,k=((Be=t==null?void 0:t.actuators)==null?void 0:Be.flow_rate_ml_s)??0,O=oe.useCallback(async()=>{A.current&&(clearTimeout(A.current),A.current=null),c(null),C.current=null;try{await n()}catch(ne){console.error("Stop command error:",ne)}},[n]),U=oe.useCallback(async(ne,Pe=0)=>{if(!N){if(b==="REAL_HARDWARE"&&!P){console.warn("Real hardware is selected but ESP32 is offline. Motion command blocked.");return}if(ne==="stop"){await O();return}c(ne),C.current=ne;try{await e(ne,s,Pe)}catch(L){console.error("Movement command error:",L)}}},[N,s,e,O]),X=oe.useCallback(ne=>{if(["INPUT","TEXTAREA"].includes(ne.target.tagName)||N)return;let Pe=null;if(ne.key==="ArrowUp"||ne.key==="w"||ne.key==="W")Pe="forward";else if(ne.key==="ArrowDown"||ne.key==="s"||ne.key==="S")Pe="backward";else if(ne.key==="ArrowLeft"||ne.key==="a"||ne.key==="A")Pe="left";else if(ne.key==="ArrowRight"||ne.key==="d"||ne.key==="D")Pe="right";else if(ne.key===" "||ne.code==="Space"){ne.preventDefault(),O();return}Pe&&C.current!==Pe&&(ne.preventDefault(),U(Pe))},[N,U,O]),K=oe.useCallback(ne=>{if(["INPUT","TEXTAREA"].includes(ne.target.tagName))return;["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","w","W","s","S","a","A","d","D"].includes(ne.key)&&(ne.preventDefault(),O())},[O]);oe.useEffect(()=>(window.addEventListener("keydown",X),window.addEventListener("keyup",K),()=>{window.removeEventListener("keydown",X),window.removeEventListener("keyup",K)}),[X,K]);const le=async ne=>{N||(y.current=Date.now(),await U(ne))},ue=async ne=>{Date.now()-y.current<220&&ne&&ne!=="stop"?(A.current&&clearTimeout(A.current),A.current=setTimeout(()=>{C.current===ne&&O()},450)):await O()},we=async(ne,Pe=250)=>{if(!N){c(ne),C.current=ne;try{await e(ne,Math.min(s,140),Pe),setTimeout(()=>{C.current===ne&&(c(null),C.current=null)},Pe)}catch(L){console.error("Nudge command error:",L)}}},Fe=async()=>{try{if((await l1(m)).ok){f(!1);const Pe=await o1();p(Pe)}}catch{alert("Failed to update ESP32 IP address.")}};return l.jsxs("div",{className:"glass-panel",style:{padding:"1.25rem"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"0.5rem",marginBottom:"1rem"},children:[l.jsxs("div",{children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[l.jsx(Jx,{size:20,color:"var(--emerald-400)"}),l.jsx("h2",{style:{fontSize:"1.15rem",fontWeight:800,margin:0},children:"Field Remote Controller"}),l.jsx("span",{className:"status-pill status-online",style:{fontSize:"0.65rem"},children:"4WD CHASSIS"})]}),l.jsxs("p",{style:{fontSize:"0.75rem",color:"var(--text-muted)",margin:"2px 0 0 0"},children:[l.jsx("strong",{children:"Operating Mode:"})," Remote-controlled from the field site over a local Wi-Fi network."]})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[l.jsx("button",{onClick:async()=>{const ne=b==="REAL_HARDWARE"?"SIMULATION":"REAL_HARDWARE";try{await u1(ne),T(ne)}catch(Pe){console.error("Mode switch error:",Pe)}},className:"btn btn-outline",style:{padding:"0.25rem 0.5rem",fontSize:"0.7rem",borderColor:b==="REAL_HARDWARE"?"var(--emerald-500)":"var(--amber-500)",color:b==="REAL_HARDWARE"?"var(--emerald-400)":"var(--amber-400)"},title:"Toggle between Real ESP32 Hardware and Simulation Sandbox",children:l.jsx("span",{children:b==="REAL_HARDWARE"?"REAL HARDWARE":"SIMULATION"})}),l.jsxs("button",{onClick:()=>f(!0),className:"btn btn-outline",style:{padding:"0.25rem 0.5rem",fontSize:"0.72rem"},title:"Configure Local Field Wi-Fi (Option A / Option B)",children:[l.jsx(jr,{size:13,color:"var(--emerald-400)"}),l.jsx("span",{children:"Wi-Fi Setup"})]}),l.jsxs("div",{className:`status-pill ${b==="REAL_HARDWARE"?P?"status-online":"status-offline":"status-warning"}`,style:{fontSize:"0.7rem"},children:[l.jsx(ia,{size:12,className:d?"animate-pulse":""}),l.jsx("span",{children:b==="REAL_HARDWARE"?P?`CONNECTED ${M?`(${M}ms)`:""}`:"ROBOT OFFLINE":"SIMULATED ROBOT"})]})]})]}),l.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"10px",alignItems:"center",padding:"0.4rem 0.75rem",background:"rgba(0, 0, 0, 0.25)",borderRadius:"8px",border:"1px solid var(--border-subtle)",marginBottom:"1rem",fontSize:"0.72rem"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px",color:"var(--text-muted)"},children:[l.jsx(jr,{size:12,color:"var(--emerald-400)"}),l.jsx("span",{children:"Wi-Fi:"}),l.jsx("strong",{className:"mono",style:{color:"#fff"},children:m||"192.168.4.1"})]}),l.jsx("div",{style:{width:"1px",height:"14px",background:"var(--border-subtle)"}}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[l.jsxs("span",{children:["NPK:"," ",l.jsx("strong",{style:{color:(ut=t==null?void 0:t.npk)!=null&&ut.valid?"var(--emerald-400)":"var(--text-dim)"},children:(Xe=t==null?void 0:t.npk)!=null&&Xe.valid?"ONLINE":"OFFLINE"})]}),l.jsxs("span",{children:["Soil:"," ",l.jsx("strong",{style:{color:(typeof(t==null?void 0:t.soil_moisture)=="number"?t.soil_moisture:(qe=t==null?void 0:t.soil_moisture)==null?void 0:qe.moisture_pct)!=null?"var(--emerald-400)":"var(--text-dim)"},children:(typeof(t==null?void 0:t.soil_moisture)=="number"?t.soil_moisture:(tt=t==null?void 0:t.soil_moisture)==null?void 0:tt.moisture_pct)!=null?"ONLINE":"OFFLINE"})]}),l.jsxs("span",{children:["IMU:"," ",l.jsx("strong",{style:{color:((He=t==null?void 0:t.imu)==null?void 0:He.pitch_deg)!==null&&((st=t==null?void 0:t.imu)==null?void 0:st.valid)!==!1?"var(--emerald-400)":"var(--text-dim)"},children:((pt=t==null?void 0:t.imu)==null?void 0:pt.pitch_deg)!==null&&((Mt=t==null?void 0:t.imu)==null?void 0:Mt.valid)!==!1?"ONLINE":"OFFLINE"})]})]}),l.jsx("div",{style:{width:"1px",height:"14px",background:"var(--border-subtle)"}}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[l.jsxs("span",{children:["Pump:"," ",l.jsx("strong",{style:{color:V?"var(--amber-400)":"var(--text-dim)"},children:V?"ON":"OFF"})]}),l.jsxs("span",{children:["Valve:"," ",l.jsx("strong",{style:{color:Q?"var(--amber-400)":"var(--text-dim)"},children:Q?"OPEN":"CLOSED"})]})]})]}),N&&l.jsxs("div",{style:{marginBottom:"1rem",padding:"0.75rem 1rem",borderRadius:"8px",background:"rgba(239, 68, 68, 0.2)",border:"1px solid var(--rose-500)",color:"#fff",fontSize:"0.8rem",display:"flex",alignItems:"center",gap:"0.75rem"},children:[l.jsx($d,{size:20,color:"var(--rose-500)"}),l.jsxs("div",{children:[l.jsx("strong",{children:"PHYSICAL EMERGENCY STOP ENGAGED:"}),l.jsx("div",{style:{fontSize:"0.72rem",color:"rgba(255,255,255,0.8)"},children:"Hardware safety switch is tripped. All motor PWM and chemical pump actuation are hardware locked."})]})]}),I&&!N&&l.jsxs("div",{style:{marginBottom:"1rem",padding:"0.6rem 0.85rem",borderRadius:"8px",background:"rgba(245, 158, 11, 0.15)",border:"1px solid var(--amber-400)",color:"#fff",fontSize:"0.78rem",display:"flex",alignItems:"center",gap:"0.6rem"},children:[l.jsx(ho,{size:18,color:"var(--amber-400)"}),l.jsxs("div",{children:[l.jsxs("strong",{children:["Obstacle Detected (",F?`${F.toFixed(1)} cm`:"< 25 cm","):"]}),l.jsx("span",{style:{fontSize:"0.72rem",color:"rgba(255,255,255,0.8)",marginLeft:"4px"},children:"Forward motion proximity limit reached. Steer clear or reverse."})]})]}),l.jsxs("div",{style:{background:"rgba(0,0,0,0.3)",borderRadius:"var(--radius-md)",border:"1px solid var(--border-subtle)",padding:"1.25rem",marginBottom:"1rem",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",width:"100%",maxWidth:"320px",marginBottom:"0.85rem",fontSize:"0.75rem",color:"var(--text-muted)"},children:[l.jsxs("span",{children:["Active State:"," ",l.jsx("strong",{className:"mono",style:{color:o||D!=="STOPPED"?"var(--emerald-400)":"#fff",textShadow:o?"0 0 10px rgba(16, 185, 129, 0.5)":"none"},children:o?o.toUpperCase():D})]}),l.jsxs("span",{children:["Watchdog: ",l.jsx("strong",{className:"mono",style:{color:"var(--sky-400)"},children:"1500ms Active"})]})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 80px)",gridTemplateRows:"repeat(3, 80px)",gap:"12px",touchAction:"manipulation",userSelect:"none",WebkitUserSelect:"none"},children:[l.jsx("div",{}),l.jsxs("button",{onPointerDown:()=>le("forward"),onPointerUp:()=>ue("forward"),onPointerLeave:()=>ue(),onPointerCancel:()=>ue(),onClick:ne=>{ne.preventDefault(),C.current||we("forward",450)},disabled:N,style:{background:o==="forward"?"var(--emerald-500)":"rgba(255, 255, 255, 0.08)",color:o==="forward"?"#000":"#fff",border:`2px solid ${o==="forward"?"var(--emerald-400)":"rgba(255, 255, 255, 0.15)"}`,borderRadius:"16px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:N?"not-allowed":"pointer",transition:"all 0.15s ease",boxShadow:o==="forward"?"0 0 20px var(--emerald-glow)":"none",touchAction:"none"},title:"Drive Forward (Click or Hold W / Up Arrow)",children:[l.jsx(Fh,{size:30}),l.jsx("span",{style:{fontSize:"0.7rem",fontWeight:800,marginTop:"2px"},children:"FWD"})]}),l.jsx("div",{}),l.jsxs("button",{onPointerDown:()=>le("left"),onPointerUp:()=>ue("left"),onPointerLeave:()=>ue(),onPointerCancel:()=>ue(),onClick:ne=>{ne.preventDefault(),C.current||we("left",450)},disabled:N,style:{background:o==="left"?"var(--emerald-500)":"rgba(255, 255, 255, 0.08)",color:o==="left"?"#000":"#fff",border:`2px solid ${o==="left"?"var(--emerald-400)":"rgba(255, 255, 255, 0.15)"}`,borderRadius:"16px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:N?"not-allowed":"pointer",transition:"all 0.15s ease",boxShadow:o==="left"?"0 0 20px var(--emerald-glow)":"none",touchAction:"none"},title:"Turn Left (Click or Hold A / Left Arrow)",children:[l.jsx(Uh,{size:30}),l.jsx("span",{style:{fontSize:"0.7rem",fontWeight:800,marginTop:"2px"},children:"LEFT"})]}),l.jsxs("button",{onClick:ne=>{ne.preventDefault(),O()},disabled:N,style:{background:"linear-gradient(135deg, rgba(239, 68, 68, 0.4) 0%, rgba(185, 28, 28, 0.6) 100%)",color:"#fff",border:"2px solid var(--rose-500)",borderRadius:"16px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:N?"not-allowed":"pointer",transition:"all 0.15s ease",boxShadow:"0 0 15px rgba(239, 68, 68, 0.4)"},title:"Instant Stop (Click or Spacebar)",children:[l.jsx(zh,{size:26,color:"#fff"}),l.jsx("span",{style:{fontSize:"0.75rem",fontWeight:900,marginTop:"2px",letterSpacing:"0.05em"},children:"STOP"})]}),l.jsxs("button",{onPointerDown:()=>le("right"),onPointerUp:()=>ue("right"),onPointerLeave:()=>ue(),onPointerCancel:()=>ue(),onClick:ne=>{ne.preventDefault(),C.current||we("right",450)},disabled:N,style:{background:o==="right"?"var(--emerald-500)":"rgba(255, 255, 255, 0.08)",color:o==="right"?"#000":"#fff",border:`2px solid ${o==="right"?"var(--emerald-400)":"rgba(255, 255, 255, 0.15)"}`,borderRadius:"16px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:N?"not-allowed":"pointer",transition:"all 0.15s ease",boxShadow:o==="right"?"0 0 20px var(--emerald-glow)":"none",touchAction:"none"},title:"Turn Right (Click or Hold D / Right Arrow)",children:[l.jsx(Oh,{size:30}),l.jsx("span",{style:{fontSize:"0.7rem",fontWeight:800,marginTop:"2px"},children:"RIGHT"})]}),l.jsx("div",{}),l.jsxs("button",{onPointerDown:()=>le("backward"),onPointerUp:()=>ue("backward"),onPointerLeave:()=>ue(),onPointerCancel:()=>ue(),onClick:ne=>{ne.preventDefault(),C.current||we("backward",450)},disabled:N,style:{background:o==="backward"?"var(--emerald-500)":"rgba(255, 255, 255, 0.08)",color:o==="backward"?"#000":"#fff",border:`2px solid ${o==="backward"?"var(--emerald-400)":"rgba(255, 255, 255, 0.15)"}`,borderRadius:"16px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:N?"not-allowed":"pointer",transition:"all 0.15s ease",boxShadow:o==="backward"?"0 0 20px var(--emerald-glow)":"none",touchAction:"none"},title:"Drive Backward (Click or Hold S / Down Arrow)",children:[l.jsx(Lh,{size:30}),l.jsx("span",{style:{fontSize:"0.7rem",fontWeight:800,marginTop:"2px"},children:"REV"})]}),l.jsx("div",{})]}),l.jsxs("div",{style:{marginTop:"0.85rem",fontSize:"0.68rem",color:"var(--text-dim)",textAlign:"center"},children:["Keyboard controls: ",l.jsx("span",{className:"mono",children:"W / A / S / D"})," or ",l.jsx("span",{className:"mono",children:"Arrow Keys"})," • ",l.jsx("span",{className:"mono",children:"Space"})," for STOP"]})]}),l.jsxs("div",{style:{background:"rgba(0,0,0,0.25)",padding:"0.85rem",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-subtle)",marginBottom:"1rem"},children:[l.jsx("div",{style:{fontSize:"0.75rem",fontWeight:700,color:"var(--text-muted)",marginBottom:"0.5rem"},children:"Fine Pulse Maneuvering (250ms Precision Nudge):"}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"6px"},children:[l.jsx("button",{onClick:()=>we("forward",250),disabled:N,className:"btn btn-outline",style:{padding:"0.4rem 0.2rem",fontSize:"0.7rem"},children:"Nudge FWD"}),l.jsx("button",{onClick:()=>we("backward",250),disabled:N,className:"btn btn-outline",style:{padding:"0.4rem 0.2rem",fontSize:"0.7rem"},children:"Nudge REV"}),l.jsx("button",{onClick:()=>we("left",250),disabled:N,className:"btn btn-outline",style:{padding:"0.4rem 0.2rem",fontSize:"0.7rem"},children:"Nudge LEFT"}),l.jsx("button",{onClick:()=>we("right",250),disabled:N,className:"btn btn-outline",style:{padding:"0.4rem 0.2rem",fontSize:"0.7rem"},children:"Nudge RIGHT"})]})]}),l.jsxs("div",{style:{background:"rgba(0,0,0,0.25)",padding:"0.85rem 1rem",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-subtle)",marginBottom:"1rem"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.5rem"},children:[l.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)",fontWeight:600},children:"Motor Drive Speed (PWM):"}),l.jsxs("span",{className:"mono",style:{fontSize:"0.85rem",fontWeight:800,color:"var(--emerald-400)"},children:[s," / 255 PWM"]})]}),l.jsx("input",{type:"range",min:"80",max:"255",value:s,onChange:ne=>a(Number(ne.target.value)),disabled:!P||N,style:{width:"100%",accentColor:"var(--emerald-500)",cursor:"pointer"}}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"6px",marginTop:"0.5rem"},children:[l.jsx("button",{onClick:()=>a(90),className:"btn btn-outline",style:{padding:"0.25rem",fontSize:"0.65rem",background:s===90?"rgba(16, 185, 129, 0.2)":"transparent"},children:"Creep (90)"}),l.jsx("button",{onClick:()=>a(130),className:"btn btn-outline",style:{padding:"0.25rem",fontSize:"0.65rem",background:s===130?"rgba(16, 185, 129, 0.2)":"transparent"},children:"Scout (130)"}),l.jsx("button",{onClick:()=>a(180),className:"btn btn-outline",style:{padding:"0.25rem",fontSize:"0.65rem",background:s===180?"rgba(16, 185, 129, 0.2)":"transparent"},children:"Transit (180)"}),l.jsx("button",{onClick:()=>a(255),className:"btn btn-outline",style:{padding:"0.25rem",fontSize:"0.65rem",background:s===255?"rgba(16, 185, 129, 0.2)":"transparent"},children:"Max (255)"})]})]}),l.jsxs("div",{style:{background:"rgba(0,0,0,0.3)",padding:"0.85rem 1rem",borderRadius:"var(--radius-sm)",border:"1px solid rgba(245, 158, 11, 0.3)",position:"relative"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.4rem"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem"},children:[l.jsx(zc,{size:16,color:"var(--amber-400)"}),l.jsx("span",{style:{fontSize:"0.8rem",fontWeight:800,color:"#fff"},children:"Precision Spray Actuation (Protected)"})]}),l.jsx("span",{style:{fontSize:"0.65rem",padding:"2px 6px",borderRadius:"4px",background:V?"rgba(16, 185, 129, 0.25)":"rgba(255, 255, 255, 0.08)",color:V?"var(--emerald-400)":"var(--text-dim)",fontWeight:700},children:V?"ACTUATING":"LOCKED"})]}),l.jsx("p",{style:{fontSize:"0.72rem",color:"var(--text-muted)",margin:"0 0 0.5rem 0"},children:"Chemical spray requires formal AI diagnosis and on-site farmer approval. Spray buttons cannot be triggered in driving mode without verified prescription."}),l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"0.7rem",color:"var(--text-dim)",paddingTop:"0.4rem",borderTop:"1px solid var(--border-subtle)"},children:[l.jsxs("span",{children:["Pump State: ",l.jsx("strong",{style:{color:V?"var(--emerald-400)":"#fff"},children:V?"ACTIVE":"OFF"})]}),l.jsxs("span",{children:["Solenoid Valve: ",l.jsx("strong",{style:{color:Q?"var(--emerald-400)":"#fff"},children:Q?"OPEN":"CLOSED"})]}),l.jsxs("span",{children:["Flow Rate: ",l.jsxs("strong",{className:"mono",style:{color:k>0?"var(--emerald-400)":"#fff"},children:[k.toFixed(1)," mL/s"]})]})]})]}),h&&l.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.85)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999,padding:"1rem"},children:l.jsxs("div",{className:"glass-panel",style:{maxWidth:"520px",width:"100%",padding:"1.5rem",background:"var(--bg-secondary)",border:"1px solid var(--border-active)"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[l.jsx(jr,{size:20,color:"var(--emerald-400)"}),l.jsx("h3",{style:{fontSize:"1.1rem",fontWeight:800,margin:0},children:"Field-Site Local Wi-Fi Setup"})]}),l.jsx("button",{onClick:()=>f(!1),className:"btn btn-outline",style:{padding:"0.2rem 0.5rem",fontSize:"0.75rem"},children:"✕"})]}),l.jsxs("div",{style:{fontSize:"0.8rem",color:"var(--text-muted)",marginBottom:"1rem"},children:["AgriGuard operates ",l.jsx("strong",{children:"without internet connectivity"})," over a local wireless network in the field."]}),l.jsxs("div",{style:{padding:"0.85rem",borderRadius:"8px",background:"rgba(16, 185, 129, 0.08)",border:"1px solid rgba(16, 185, 129, 0.25)",marginBottom:"0.75rem"},children:[l.jsx("div",{style:{fontWeight:700,color:"var(--emerald-400)",fontSize:"0.82rem",marginBottom:"4px"},children:"Option A: Connect to Robot Wi-Fi Hotspot (Direct SoftAP)"}),l.jsxs("div",{style:{fontSize:"0.75rem",color:"#fff"},children:[l.jsxs("div",{children:["Network SSID: ",l.jsx("strong",{className:"mono",style:{color:"var(--emerald-400)"},children:"AgriGuard-Robot"})]}),l.jsxs("div",{children:["Password: ",l.jsx("strong",{className:"mono",children:"agri12345"})]}),l.jsxs("div",{children:["Default ESP32 IP: ",l.jsx("strong",{className:"mono",children:"192.168.4.1"})]})]})]}),l.jsxs("div",{style:{padding:"0.85rem",borderRadius:"8px",background:"rgba(56, 189, 248, 0.08)",border:"1px solid rgba(56, 189, 248, 0.25)",marginBottom:"1rem"},children:[l.jsx("div",{style:{fontWeight:700,color:"var(--sky-400)",fontSize:"0.82rem",marginBottom:"4px"},children:"Option B: Local Field Router / Phone Mobile Hotspot"}),l.jsxs("div",{style:{fontSize:"0.75rem",color:"#fff"},children:[l.jsxs("div",{children:["Laptop LAN IP: ",l.jsx("strong",{className:"mono",style:{color:"var(--sky-400)"},children:(u==null?void 0:u.laptop_lan_ip)??"192.168.1.x"})]}),l.jsxs("div",{children:["Smartphone Dashboard URL: ",l.jsx("strong",{className:"mono",style:{color:"#fff"},children:(u==null?void 0:u.dashboard_mobile_url)??"http://192.168.1.x:8000"})]})]})]}),l.jsxs("div",{style:{marginBottom:"1rem"},children:[l.jsx("label",{style:{display:"block",fontSize:"0.75rem",fontWeight:600,color:"var(--text-muted)",marginBottom:"4px"},children:"Target ESP32 IP Address:"}),l.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[l.jsx("input",{type:"text",value:m,onChange:ne=>_(ne.target.value),placeholder:"192.168.4.1",className:"mono",style:{flex:1,background:"rgba(0,0,0,0.4)",border:"1px solid var(--border-subtle)",borderRadius:"6px",padding:"0.45rem 0.75rem",color:"#fff",fontSize:"0.85rem"}}),l.jsx("button",{onClick:Fe,className:"btn btn-primary",style:{padding:"0.45rem 1rem",fontSize:"0.8rem"},children:"Save & Connect"})]})]}),l.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:l.jsx("button",{onClick:()=>f(!1),className:"btn btn-outline",style:{padding:"0.45rem 1.25rem",fontSize:"0.8rem"},children:"Close"})})]})})]})},d1=({activeZoneId:t,onZoneSelected:e})=>{var V,Q;const[n,i]=oe.useState(null),[r,s]=oe.useState([]),[a,o]=oe.useState(null),[c,u]=oe.useState(null),[p,h]=oe.useState(!1),[f,m]=oe.useState("severity"),[_,M]=oe.useState(""),g=oe.useCallback(async(k=!1)=>{k&&h(!0);try{const[O,U]=await Promise.all([s1().catch(()=>null),qS().catch(()=>[])]);O&&(i(O),M(new Date().toLocaleTimeString())),U&&U.length>0&&s(U)}catch(O){console.error("Failed to load field heatmap:",O)}finally{k&&h(!1)}},[]);oe.useEffect(()=>{g(!0)},[g]),oe.useEffect(()=>{const k=X=>{const K=X.detail;i(le=>{if(!le)return le;const ue=le.observations.filter(we=>we.id!==K.id);return{...le,observations:[K,...ue]}}),M(new Date().toLocaleTimeString())},O=()=>{g(!1)};window.addEventListener("field_observation",k),window.addEventListener("treatment_applied",O);const U=window.setInterval(()=>{g(!1)},4e3);return()=>{window.removeEventListener("field_observation",k),window.removeEventListener("treatment_applied",O),window.clearInterval(U)}},[g]);const d=oe.useCallback(async k=>{try{const O=await i1(k);u(O)}catch{u(null)}},[]);oe.useEffect(()=>{if(t&&!a){const k=t.match(/R(\d+)C(\d+)/);k&&o({y:parseInt(k[1]),x:parseInt(k[2])})}},[t,a]);const x=((V=n==null?void 0:n.field)==null?void 0:V.width)??6,E=((Q=n==null?void 0:n.field)==null?void 0:Q.height)??4,S=(n==null?void 0:n.observations)??[],b=(n==null?void 0:n.current_robot_position)??{x:1,y:1,zone_id:"ZONE-R1C1",mode:"Prototype Estimated Position"},T=(k,O)=>S.find(U=>U.x===k&&U.y===O),C=async(k,O)=>{o({x:k,y:O});const U=`ZONE-R${O}C${k}`;e(U),await KS(U),d(U)},y=async(k,O)=>{try{const U=`ZONE-R${O}C${k}`;await a1(k,O,U),e(U),await g(!1)}catch(U){console.error("Failed to update robot position:",U)}},A=k=>{const O=(k||"").toLowerCase().trim();return O==="severe"||O==="high"?{bg:"rgba(239, 68, 68, 0.25)",border:"#ef4444",text:"#fca5a5",glow:"rgba(239, 68, 68, 0.4)"}:O==="moderate"?{bg:"rgba(249, 115, 22, 0.25)",border:"#f97316",text:"#fdba74",glow:"rgba(249, 115, 22, 0.4)"}:O==="mild"||O==="low"?{bg:"rgba(234, 179, 8, 0.25)",border:"#eab308",text:"#fde047",glow:"rgba(234, 179, 8, 0.4)"}:{bg:"rgba(16, 185, 129, 0.22)",border:"#10b981",text:"#86efac",glow:"rgba(16, 185, 129, 0.35)"}},P=k=>k>=80?{bg:"rgba(16, 185, 129, 0.25)",border:"#10b981",text:"#86efac",glow:"rgba(16, 185, 129, 0.35)"}:k>=60?{bg:"rgba(234, 179, 8, 0.25)",border:"#eab308",text:"#fde047",glow:"rgba(234, 179, 8, 0.4)"}:k>=40?{bg:"rgba(249, 115, 22, 0.25)",border:"#f97316",text:"#fdba74",glow:"rgba(249, 115, 22, 0.4)"}:{bg:"rgba(239, 68, 68, 0.25)",border:"#ef4444",text:"#fca5a5",glow:"rgba(239, 68, 68, 0.4)"},N=a||{x:b.x,y:b.y},I=T(N.x,N.y),F=`ZONE-R${N.y}C${N.x}`;r.find(k=>k.zone_id===F);const D=k=>String.fromCharCode(64+k);return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.25rem"},children:[l.jsxs("div",{className:"glass-panel",style:{padding:"1.25rem 1.5rem"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"1rem"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[l.jsx("div",{style:{width:40,height:40,borderRadius:"10px",background:"rgba(16, 185, 129, 0.15)",display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid rgba(16, 185, 129, 0.3)"},children:l.jsx(OS,{size:22,color:"var(--emerald-400)"})}),l.jsxs("div",{children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[l.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:800,letterSpacing:"-0.02em",margin:0},children:"Real Field Pathology Heatmap"}),l.jsx("span",{className:"status-pill status-online",style:{fontSize:"0.7rem",padding:"0.15rem 0.5rem"},children:"REAL DATA"})]}),l.jsxs("p",{style:{fontSize:"0.8rem",color:"var(--text-muted)",margin:"2px 0 0 0"},children:["Agricultural grid representation (",x," × ",E," Plots, 1.5m bed resolution)"]})]})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem",flexWrap:"wrap"},children:[l.jsxs("div",{style:{display:"flex",background:"rgba(0,0,0,0.3)",borderRadius:"8px",padding:"2px",border:"1px solid var(--border-subtle)"},children:[l.jsxs("button",{onClick:()=>m("severity"),style:{background:f==="severity"?"var(--emerald-500)":"transparent",color:f==="severity"?"#000":"var(--text-muted)",border:"none",borderRadius:"6px",padding:"0.35rem 0.75rem",fontSize:"0.75rem",fontWeight:700,cursor:"pointer",display:"flex",alignItems:"center",gap:"4px",transition:"all 0.2s"},children:[l.jsx(Kx,{size:13}),l.jsx("span",{children:"Severity Map"})]}),l.jsxs("button",{onClick:()=>m("health"),style:{background:f==="health"?"var(--emerald-500)":"transparent",color:f==="health"?"#000":"var(--text-muted)",border:"none",borderRadius:"6px",padding:"0.35rem 0.75rem",fontSize:"0.75rem",fontWeight:700,cursor:"pointer",display:"flex",alignItems:"center",gap:"4px",transition:"all 0.2s"},children:[l.jsx(hc,{size:13}),l.jsx("span",{children:"Health Score (0-100)"})]})]}),l.jsxs("button",{onClick:()=>g(!0),disabled:p,className:"btn btn-outline",style:{padding:"0.4rem 0.8rem",fontSize:"0.75rem"},title:"Refresh heatmap from database",children:[l.jsx(Br,{size:13,className:p?"animate-spin":""}),l.jsx("span",{children:p?"Syncing...":"Refresh"})]})]})]}),l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"1rem",paddingTop:"0.75rem",borderTop:"1px solid var(--border-subtle)",fontSize:"0.75rem",color:"var(--text-muted)",flexWrap:"wrap",gap:"0.5rem"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1.25rem",flexWrap:"wrap"},children:[l.jsx("span",{style:{fontWeight:600,color:"#fff"},children:"Color Scale:"}),l.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"5px"},children:[l.jsx("span",{style:{width:12,height:12,borderRadius:"3px",background:"#10b981",display:"inline-block"}}),"Healthy ",f==="health"?"(80-100)":""]}),l.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"5px"},children:[l.jsx("span",{style:{width:12,height:12,borderRadius:"3px",background:"#eab308",display:"inline-block"}}),"Mild / Low Stress ",f==="health"?"(60-79)":""]}),l.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"5px"},children:[l.jsx("span",{style:{width:12,height:12,borderRadius:"3px",background:"#f97316",display:"inline-block"}}),"Moderate Pathogen ",f==="health"?"(40-59)":""]}),l.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"5px"},children:[l.jsx("span",{style:{width:12,height:12,borderRadius:"3px",background:"#ef4444",display:"inline-block"}}),"High / Severe Disease ",f==="health"?"(<40)":""]})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[l.jsx(CS,{size:12,color:"var(--text-dim)"}),l.jsxs("span",{className:"mono",style:{fontSize:"0.7rem"},children:["Last synced: ",_||"Just now"]})]})]})]}),l.jsxs("div",{className:"glass-panel",style:{padding:"0.85rem 1.25rem",background:"linear-gradient(90deg, rgba(16, 185, 129, 0.08) 0%, rgba(14, 165, 233, 0.05) 100%)",border:"1px solid rgba(16, 185, 129, 0.25)",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"0.75rem"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:32,height:32,borderRadius:"50%",background:"rgba(16, 185, 129, 0.2)",border:"2px solid var(--emerald-400)",animation:"pulse 2s infinite"},children:l.jsx(Ul,{size:16,color:"var(--emerald-400)"})}),l.jsxs("div",{children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[l.jsx("span",{style:{fontSize:"0.8rem",fontWeight:700,color:"#fff"},children:"CURRENT ROBOT LOCATION:"}),l.jsx("span",{className:"status-pill status-warning",style:{fontSize:"0.68rem",padding:"0.1rem 0.45rem"},children:b.mode})]}),l.jsxs("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)",marginTop:"2px"},children:["Grid Plot: ",l.jsxs("strong",{className:"mono",style:{color:"var(--emerald-400)"},children:["Bed ",D(b.y),b.x]})," (",b.zone_id,") • Coordinate: ",l.jsxs("strong",{className:"mono",style:{color:"#fff"},children:["X: ",b.x,", Y: ",b.y]}),b.latitude!==null&&b.longitude!==null&&b.latitude!==void 0&&l.jsxs("span",{children:[" • GPS: ",l.jsxs("span",{className:"mono",children:[b.latitude.toFixed(6),", ",b.longitude.toFixed(6)]})]})]})]})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[l.jsx("span",{style:{fontSize:"0.72rem",color:"var(--text-dim)"},children:"Total Observations Recorded:"}),l.jsx("span",{className:"mono",style:{fontSize:"0.85rem",fontWeight:800,background:"rgba(255,255,255,0.08)",padding:"0.2rem 0.6rem",borderRadius:"6px",color:"#fff"},children:S.length})]})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"minmax(320px, 1.8fr) minmax(300px, 1.2fr)",gap:"1.25rem",alignItems:"start"},children:[l.jsxs("div",{className:"glass-panel",style:{padding:"1.5rem",overflow:"hidden"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[l.jsx(zS,{size:16,color:"var(--emerald-400)"}),l.jsx("span",{style:{fontSize:"0.85rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em"},children:"Field Coordinates Map (Top-Down View)"})]}),l.jsx("span",{style:{fontSize:"0.72rem",color:"var(--text-dim)"},children:"Click any cell to inspect or target"})]}),S.length===0&&l.jsxs("div",{style:{padding:"1rem",borderRadius:"8px",background:"rgba(234, 179, 8, 0.1)",border:"1px solid rgba(234, 179, 8, 0.3)",marginBottom:"1rem",display:"flex",alignItems:"center",gap:"0.75rem"},children:[l.jsx(Xd,{size:20,color:"var(--amber-400)"}),l.jsxs("div",{style:{fontSize:"0.8rem",color:"#fff"},children:[l.jsx("strong",{children:"No field observations recorded yet."}),l.jsx("p",{style:{margin:"2px 0 0 0",color:"var(--text-muted)",fontSize:"0.75rem"},children:"Execute a camera AI scan using the Crop Diagnostics tab to capture real crop pathology observations."})]})]}),l.jsxs("div",{style:{background:"radial-gradient(ellipse at center, rgba(16, 185, 129, 0.05) 0%, rgba(10, 15, 24, 0.8) 100%)",border:"2px solid rgba(16, 185, 129, 0.25)",borderRadius:"var(--radius-md)",padding:"16px",position:"relative"},children:[l.jsxs("div",{style:{display:"grid",gridTemplateColumns:`40px repeat(${x}, 1fr)`,gap:"8px",marginBottom:"8px",textAlign:"center",fontSize:"0.7rem",color:"var(--text-dim)",fontWeight:700},children:[l.jsx("div",{}),Array.from({length:x}).map((k,O)=>l.jsxs("div",{className:"mono",children:["X=",O+1]},`col-${O}`))]}),l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:Array.from({length:E}).map((k,O)=>{const U=E-O,X=D(U);return l.jsxs("div",{style:{display:"grid",gridTemplateColumns:`40px repeat(${x}, 1fr)`,gap:"8px",alignItems:"center"},children:[l.jsxs("div",{className:"mono",style:{textAlign:"center",fontSize:"0.75rem",fontWeight:700,color:"var(--text-muted)"},children:["Bed ",X,l.jsxs("div",{style:{fontSize:"0.62rem",color:"var(--text-dim)"},children:["Y=",U]})]}),Array.from({length:x}).map((K,le)=>{const ue=le+1,we=T(ue,U),Fe=b.x===ue&&b.y===U,ke=N.x===ue&&N.y===U;let Z;return we?Z=f==="severity"?A(we.severity):P(we.health_score):Z={bg:"rgba(255, 255, 255, 0.03)",border:"rgba(255, 255, 255, 0.08)",text:"var(--text-dim)",glow:"none"},l.jsxs("button",{onClick:()=>C(ue,U),style:{aspectRatio:"1.2",minHeight:"75px",background:Z.bg,border:ke?"2px solid #34d399":Fe?"2px dashed var(--sky-400)":`1px solid ${Z.border}`,borderRadius:"8px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",padding:"6px",cursor:"pointer",color:"#fff",position:"relative",transition:"all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",boxShadow:ke?"0 0 16px rgba(16, 185, 129, 0.45)":Fe?"0 0 12px rgba(56, 189, 248, 0.35)":"none"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",width:"100%",alignItems:"center"},children:[l.jsxs("span",{className:"mono",style:{fontSize:"0.65rem",fontWeight:700,opacity:.85},children:[X,ue]}),Fe&&l.jsxs("span",{style:{fontSize:"0.58rem",fontWeight:800,background:"var(--sky-500)",color:"#000",padding:"1px 4px",borderRadius:"3px",display:"flex",alignItems:"center",gap:"2px"},children:[l.jsx(Ul,{size:9})," ROBOT"]})]}),we?l.jsxs("div",{style:{textAlign:"center",margin:"auto 0"},children:[l.jsx("div",{style:{fontSize:"0.72rem",fontWeight:800,color:Z.text,textTransform:"capitalize",lineHeight:1.1},children:we.disease.replace(/_/g," ")}),l.jsx("div",{className:"mono",style:{fontSize:"0.65rem",marginTop:"2px",color:"#fff"},children:f==="severity"?l.jsxs("span",{children:[Math.round(we.confidence*100),"% conf"]}):l.jsxs("span",{style:{fontWeight:700},children:["Score: ",we.health_score]})})]}):l.jsx("div",{style:{textAlign:"center",margin:"auto 0",fontSize:"0.62rem",color:"var(--text-dim)"},children:"Uninspected"}),we&&l.jsx("div",{style:{fontSize:"0.58rem",padding:"1px 5px",borderRadius:"4px",background:we.treatment_status==="TREATED"?"rgba(16, 185, 129, 0.4)":we.treatment_status==="PENDING_APPROVAL"?"rgba(245, 158, 11, 0.4)":"rgba(255, 255, 255, 0.1)",color:we.treatment_status==="TREATED"?"var(--emerald-400)":we.treatment_status==="PENDING_APPROVAL"?"var(--amber-400)":"var(--text-muted)",fontWeight:700},children:we.treatment_status.replace(/_/g," ")})]},`cell-${ue}-${U}`)})]},`row-${U}`)})}),l.jsxs("div",{style:{position:"absolute",bottom:8,right:12,display:"flex",alignItems:"center",gap:"4px",fontSize:"0.65rem",color:"var(--text-dim)",opacity:.6},children:[l.jsx(kh,{size:14}),l.jsx("span",{children:"N ↑ / Row 4"})]})]})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[l.jsxs("div",{className:"glass-panel",style:{padding:"1.25rem"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[l.jsx(PS,{size:18,color:"var(--emerald-400)"}),l.jsxs("h3",{style:{fontSize:"1rem",fontWeight:800},children:["Plot Inspector: ",l.jsxs("span",{className:"mono",style:{color:"var(--emerald-400)"},children:["Bed ",D(N.y),N.x]})]})]}),l.jsx("span",{className:"mono",style:{fontSize:"0.72rem",color:"var(--text-dim)"},children:F})]}),l.jsx("div",{style:{display:"flex",gap:"0.5rem",marginBottom:"1rem"},children:l.jsxs("button",{onClick:()=>y(N.x,N.y),className:"btn btn-outline",style:{flex:1,padding:"0.35rem 0.6rem",fontSize:"0.72rem"},title:"Update robot location tracker to this plot",children:[l.jsx(Ul,{size:13}),l.jsx("span",{children:"Move Target Here"})]})}),I?l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.85rem"},children:[l.jsxs("div",{style:{padding:"1rem",borderRadius:"var(--radius-sm)",background:I.severity==="severe"?"rgba(239, 68, 68, 0.15)":I.severity==="moderate"?"rgba(249, 115, 22, 0.15)":"rgba(16, 185, 129, 0.15)",border:`1px solid ${A(I.severity).border}`},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[l.jsxs("div",{children:[l.jsx("span",{style:{fontSize:"0.68rem",fontWeight:700,color:"var(--text-muted)",textTransform:"uppercase"},children:"Crop Pathology Diagnosis"}),l.jsx("h4",{style:{fontSize:"1.15rem",fontWeight:800,textTransform:"capitalize",color:"#fff",margin:"2px 0 0 0"},children:I.disease.replace(/_/g," ")})]}),l.jsx("span",{className:"status-pill",style:{fontSize:"0.7rem",background:A(I.severity).bg,color:A(I.severity).text,border:`1px solid ${A(I.severity).border}`},children:I.severity.toUpperCase()})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"8px",marginTop:"0.85rem",paddingTop:"0.85rem",borderTop:"1px solid rgba(255,255,255,0.08)",fontSize:"0.78rem"},children:[l.jsxs("div",{children:[l.jsx("span",{style:{color:"var(--text-muted)"},children:"Confidence:"}),l.jsxs("div",{className:"mono",style:{fontWeight:800,color:"#fff",fontSize:"0.9rem"},children:[(I.confidence*100).toFixed(1),"%"]})]}),l.jsxs("div",{children:[l.jsx("span",{style:{color:"var(--text-muted)"},children:"Health Score:"}),l.jsxs("div",{className:"mono",style:{fontWeight:800,color:"var(--emerald-400)",fontSize:"0.9rem"},children:[I.health_score," / 100"]})]})]})]}),l.jsxs("div",{style:{padding:"0.85rem",borderRadius:"var(--radius-sm)",background:"rgba(0,0,0,0.25)",border:"1px solid var(--border-subtle)",display:"flex",flexDirection:"column",gap:"0.5rem",fontSize:"0.78rem"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[l.jsx("span",{style:{color:"var(--text-muted)"},children:"Treatment State:"}),l.jsx("span",{style:{fontWeight:700,color:I.treatment_status==="TREATED"?"var(--emerald-400)":I.treatment_status==="PENDING_APPROVAL"?"var(--amber-400)":"#fff"},children:I.treatment_status.replace(/_/g," ")})]}),I.prescribed_treatment&&l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[l.jsx("span",{style:{color:"var(--text-muted)"},children:"Prescribed Formula:"}),l.jsx("span",{style:{fontWeight:700,color:"#fff"},children:I.prescribed_treatment})]}),l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[l.jsx("span",{style:{color:"var(--text-muted)"},children:"Crop Target:"}),l.jsx("span",{style:{fontWeight:700,color:"#fff",textTransform:"capitalize"},children:I.crop})]}),l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[l.jsx("span",{style:{color:"var(--text-muted)"},children:"Grid Coordinates:"}),l.jsxs("span",{className:"mono",style:{color:"#fff"},children:["X: ",I.x,", Y: ",I.y]})]}),l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[l.jsx("span",{style:{color:"var(--text-muted)"},children:"Recorded Timestamp:"}),l.jsx("span",{className:"mono",style:{color:"var(--text-dim)",fontSize:"0.72rem"},children:I.timestamp})]})]})]}):l.jsxs("div",{style:{padding:"1.5rem",textAlign:"center",background:"rgba(255,255,255,0.02)",borderRadius:"var(--radius-sm)",border:"1px dashed var(--border-subtle)",color:"var(--text-muted)",fontSize:"0.8rem"},children:[l.jsx(Xd,{size:28,color:"var(--text-dim)",style:{margin:"0 auto 0.5rem auto"}}),l.jsx("p",{style:{color:"#fff",fontWeight:700,margin:"0 0 4px 0"},children:"Uninspected Field Cell"}),l.jsxs("p",{style:{margin:0,fontSize:"0.75rem",color:"var(--text-dim)"},children:["Drive the robot to Bed ",D(N.y),N.x," (X: ",N.x,", Y: ",N.y,") and trigger an AI scan to record pathology data."]})]})]}),l.jsxs("div",{className:"glass-panel",style:{padding:"1.25rem"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.75rem"},children:[l.jsx(IS,{size:16,color:"var(--emerald-400)"}),l.jsx("h4",{style:{fontSize:"0.9rem",fontWeight:700},children:"Agronomic Progression Analysis"})]}),c?l.jsxs("div",{style:{padding:"0.85rem",borderRadius:"8px",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border-subtle)",fontSize:"0.78rem"},children:[l.jsx("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.4rem"},children:l.jsxs("span",{className:"status-pill",style:{fontSize:"0.7rem",background:c.verdict==="Improved"?"rgba(16, 185, 129, 0.2)":"rgba(245, 158, 11, 0.2)",color:c.verdict==="Improved"?"var(--emerald-400)":"var(--amber-400)"},children:["VERDICT: ",c.verdict??"Single baseline"]})}),l.jsx("p",{style:{margin:0,color:"var(--text-muted)",fontSize:"0.75rem"},children:c.reason??"First baseline observation established for this zone."})]}):l.jsx("p",{style:{fontSize:"0.75rem",color:"var(--text-dim)",margin:0},children:I?"Baseline observation active. Run follow-up scan after treatment to evaluate disease remission.":"Select an inspected plot to view comparative analysis."})]})]})]}),S.length>0&&l.jsxs("div",{className:"glass-panel",style:{padding:"1.25rem 1.5rem"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[l.jsx(hc,{size:16,color:"var(--emerald-400)"}),l.jsxs("h4",{style:{fontSize:"0.95rem",fontWeight:700},children:["Chronological Field Observations Log (",S.length," Recorded)"]})]}),l.jsx("span",{style:{fontSize:"0.72rem",color:"var(--text-dim)"},children:"Real database records from data/agriguard_real.db"})]}),l.jsx("div",{style:{overflowX:"auto"},children:l.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"0.75rem",textAlign:"left"},children:[l.jsx("thead",{children:l.jsxs("tr",{style:{borderBottom:"1px solid var(--border-subtle)",color:"var(--text-muted)"},children:[l.jsx("th",{style:{padding:"8px 12px"},children:"ID"}),l.jsx("th",{style:{padding:"8px 12px"},children:"Plot / Zone"}),l.jsx("th",{style:{padding:"8px 12px"},children:"Grid (X, Y)"}),l.jsx("th",{style:{padding:"8px 12px"},children:"Disease Detection"}),l.jsx("th",{style:{padding:"8px 12px"},children:"Confidence"}),l.jsx("th",{style:{padding:"8px 12px"},children:"Severity"}),l.jsx("th",{style:{padding:"8px 12px"},children:"Health Score"}),l.jsx("th",{style:{padding:"8px 12px"},children:"Treatment Status"}),l.jsx("th",{style:{padding:"8px 12px"},children:"Timestamp"})]})}),l.jsx("tbody",{children:S.slice(0,10).map(k=>{const O=N.x===k.x&&N.y===k.y,U=A(k.severity);return l.jsxs("tr",{onClick:()=>C(k.x,k.y),style:{borderBottom:"1px solid rgba(255,255,255,0.04)",cursor:"pointer",background:O?"rgba(16, 185, 129, 0.08)":"transparent",transition:"background 0.2s"},children:[l.jsxs("td",{className:"mono",style:{padding:"8px 12px",color:"var(--text-dim)"},children:["#",k.id]}),l.jsxs("td",{className:"mono",style:{padding:"8px 12px",fontWeight:700,color:"var(--emerald-400)"},children:["Bed ",D(k.y),k.x]}),l.jsxs("td",{className:"mono",style:{padding:"8px 12px"},children:["(",k.x,", ",k.y,")"]}),l.jsx("td",{style:{padding:"8px 12px",fontWeight:700,textTransform:"capitalize"},children:k.disease.replace(/_/g," ")}),l.jsxs("td",{className:"mono",style:{padding:"8px 12px"},children:[(k.confidence*100).toFixed(1),"%"]}),l.jsx("td",{style:{padding:"8px 12px"},children:l.jsx("span",{style:{padding:"2px 6px",borderRadius:"4px",background:U.bg,color:U.text,fontWeight:700,fontSize:"0.68rem",textTransform:"uppercase"},children:k.severity})}),l.jsx("td",{className:"mono",style:{padding:"8px 12px",fontWeight:700,color:"#fff"},children:k.health_score}),l.jsx("td",{style:{padding:"8px 12px"},children:l.jsx("span",{style:{fontSize:"0.68rem",fontWeight:700,color:k.treatment_status==="TREATED"?"var(--emerald-400)":"var(--amber-400)"},children:k.treatment_status.replace(/_/g," ")})}),l.jsx("td",{className:"mono",style:{padding:"8px 12px",color:"var(--text-dim)"},children:k.timestamp})]},k.id)})})]})})]})]})},f1=()=>{const[t,e]=oe.useState(null),[n,i]=oe.useState(!1),[r,s]=oe.useState(""),a=async()=>{i(!0);try{const c=await YS();e(c),s(new Date().toLocaleTimeString())}catch(c){console.error("Diagnostics query failed:",c)}finally{i(!1)}};oe.useEffect(()=>{a();const c=setInterval(a,3e3);return()=>clearInterval(c)},[]);const o=(c,u)=>{const p=u.includes(c.toUpperCase());return l.jsxs("span",{className:`status-pill ${p?"status-online":"status-offline"}`,style:{fontSize:"0.85rem"},children:[p?l.jsx($x,{size:14}):l.jsx(e_,{size:14}),l.jsx("span",{children:c})]})};return l.jsxs("div",{className:"glass-panel animate-fade-in",style:{padding:"1.75rem"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1.5rem",flexWrap:"wrap",gap:"1rem"},children:[l.jsxs("div",{children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[l.jsx(Yx,{size:22,color:"var(--emerald-400)"}),l.jsx("h2",{style:{fontSize:"1.35rem",fontWeight:800},children:"Physical Hardware Diagnostic Suite"})]}),l.jsx("p",{style:{fontSize:"0.85rem",color:"var(--text-muted)",marginTop:"0.25rem"},children:"Section 27 Real Hardware Verification Matrix — Direct live polling of physical buses and interfaces."})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[l.jsxs("span",{style:{fontSize:"0.8rem",color:"var(--text-muted)"},children:["Last Polled: ",l.jsx("strong",{style:{color:"#fff"},children:r||"Waiting..."})]}),l.jsxs("button",{onClick:a,disabled:n,className:"btn btn-primary",style:{padding:"0.5rem 1rem",fontSize:"0.85rem"},children:[l.jsx(Br,{size:14,className:n?"animate-spin":""}),l.jsx("span",{children:"Poll Hardware"})]})]})]}),l.jsx("div",{style:{overflowX:"auto",marginBottom:"2rem"},children:l.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",textAlign:"left"},children:[l.jsx("thead",{children:l.jsxs("tr",{style:{borderBottom:"1px solid var(--border-subtle)",color:"var(--text-muted)",fontSize:"0.8rem"},children:[l.jsx("th",{style:{padding:"0.75rem 1rem"},children:"SUBSYSTEM / INTERFACE"}),l.jsx("th",{style:{padding:"0.75rem 1rem"},children:"PHYSICAL BUS / PROTOCOL"}),l.jsx("th",{style:{padding:"0.75rem 1rem"},children:"PIN / PORT"}),l.jsx("th",{style:{padding:"0.75rem 1rem"},children:"LIVE STATUS"})]})}),l.jsxs("tbody",{style:{fontSize:"0.9rem"},children:[l.jsxs("tr",{style:{borderBottom:"1px solid rgba(255,255,255,0.04)"},children:[l.jsx("td",{style:{padding:"0.85rem 1rem",fontWeight:600},children:"ESP32 Main Controller"}),l.jsx("td",{style:{padding:"0.85rem 1rem",color:"var(--text-muted)"},children:"Wi-Fi 802.11 b/g/n HTTP/WS"}),l.jsx("td",{style:{padding:"0.85rem 1rem",fontFamily:"JetBrains Mono, monospace"},children:"192.168.4.1:80"}),l.jsx("td",{style:{padding:"0.85rem 1rem"},children:t?o(t.esp32,["CONNECTED"]):l.jsx("span",{className:"text-muted",children:"Querying..."})})]}),l.jsxs("tr",{style:{borderBottom:"1px solid rgba(255,255,255,0.04)"},children:[l.jsx("td",{style:{padding:"0.85rem 1rem",fontWeight:600},children:"External USB Camera"}),l.jsx("td",{style:{padding:"0.85rem 1rem",color:"var(--text-muted)"},children:"USB 2.0 / V4L2 / DShow"}),l.jsx("td",{style:{padding:"0.85rem 1rem",fontFamily:"JetBrains Mono, monospace"},children:"Video Dev Index 0"}),l.jsx("td",{style:{padding:"0.85rem 1rem"},children:t?o(t.camera,["CONNECTED"]):l.jsx("span",{className:"text-muted",children:"Querying..."})})]}),l.jsxs("tr",{style:{borderBottom:"1px solid rgba(255,255,255,0.04)"},children:[l.jsx("td",{style:{padding:"0.85rem 1rem",fontWeight:600},children:"RS485 NPK Soil Probe"}),l.jsx("td",{style:{padding:"0.85rem 1rem",color:"var(--text-muted)"},children:"Modbus RTU over RS485"}),l.jsx("td",{style:{padding:"0.85rem 1rem",fontFamily:"JetBrains Mono, monospace"},children:"GPIO 16(RX) / 17(TX)"}),l.jsx("td",{style:{padding:"0.85rem 1rem"},children:t?o(t.npk,["CONNECTED"]):l.jsx("span",{className:"text-muted",children:"Querying..."})})]}),l.jsxs("tr",{style:{borderBottom:"1px solid rgba(255,255,255,0.04)"},children:[l.jsx("td",{style:{padding:"0.85rem 1rem",fontWeight:600},children:"Capacitive Soil Moisture"}),l.jsx("td",{style:{padding:"0.85rem 1rem",color:"var(--text-muted)"},children:"Analog 12-bit ADC"}),l.jsx("td",{style:{padding:"0.85rem 1rem",fontFamily:"JetBrains Mono, monospace"},children:"GPIO 34 (ADC1_CH6)"}),l.jsx("td",{style:{padding:"0.85rem 1rem"},children:t?o(t.soil_moisture,["OK"]):l.jsx("span",{className:"text-muted",children:"Querying..."})})]}),l.jsxs("tr",{style:{borderBottom:"1px solid rgba(255,255,255,0.04)"},children:[l.jsx("td",{style:{padding:"0.85rem 1rem",fontWeight:600},children:"Microclimate DHT22"}),l.jsx("td",{style:{padding:"0.85rem 1rem",color:"var(--text-muted)"},children:"Single-Wire Digital Bus"}),l.jsx("td",{style:{padding:"0.85rem 1rem",fontFamily:"JetBrains Mono, monospace"},children:"GPIO 4"}),l.jsx("td",{style:{padding:"0.85rem 1rem"},children:t?o(t.temperature,["OK"]):l.jsx("span",{className:"text-muted",children:"Querying..."})})]}),l.jsxs("tr",{style:{borderBottom:"1px solid rgba(255,255,255,0.04)"},children:[l.jsx("td",{style:{padding:"0.85rem 1rem",fontWeight:600},children:"HC-SR04 Ultrasonic Distance"}),l.jsx("td",{style:{padding:"0.85rem 1rem",color:"var(--text-muted)"},children:"GPIO Pulse Timing"}),l.jsx("td",{style:{padding:"0.85rem 1rem",fontFamily:"JetBrains Mono, monospace"},children:"Trig: GPIO 5 / Echo: GPIO 18"}),l.jsx("td",{style:{padding:"0.85rem 1rem"},children:t?o(t.ultrasonic,["OK"]):l.jsx("span",{className:"text-muted",children:"Querying..."})})]}),l.jsxs("tr",{style:{borderBottom:"1px solid rgba(255,255,255,0.04)"},children:[l.jsx("td",{style:{padding:"0.85rem 1rem",fontWeight:600},children:"MPU6050 6-DOF IMU"}),l.jsx("td",{style:{padding:"0.85rem 1rem",color:"var(--text-muted)"},children:"I2C Bus (Addr: 0x68)"}),l.jsx("td",{style:{padding:"0.85rem 1rem",fontFamily:"JetBrains Mono, monospace"},children:"SDA: GPIO 21 / SCL: GPIO 22"}),l.jsx("td",{style:{padding:"0.85rem 1rem"},children:t?o(t.imu,["OK"]):l.jsx("span",{className:"text-muted",children:"Querying..."})})]}),l.jsxs("tr",{style:{borderBottom:"1px solid rgba(255,255,255,0.04)"},children:[l.jsx("td",{style:{padding:"0.85rem 1rem",fontWeight:600},children:"12V Diaphragm Spray Pump"}),l.jsx("td",{style:{padding:"0.85rem 1rem",color:"var(--text-muted)"},children:"MOSFET Gate Driver"}),l.jsx("td",{style:{padding:"0.85rem 1rem",fontFamily:"JetBrains Mono, monospace"},children:"GPIO 25"}),l.jsx("td",{style:{padding:"0.85rem 1rem"},children:t?o(t.pump,["ON","OFF"]):l.jsx("span",{className:"text-muted",children:"Querying..."})})]}),l.jsxs("tr",{style:{borderBottom:"1px solid rgba(255,255,255,0.04)"},children:[l.jsx("td",{style:{padding:"0.85rem 1rem",fontWeight:600},children:"12V Solenoid Shutoff Valve"}),l.jsx("td",{style:{padding:"0.85rem 1rem",color:"var(--text-muted)"},children:"MOSFET Gate Driver"}),l.jsx("td",{style:{padding:"0.85rem 1rem",fontFamily:"JetBrains Mono, monospace"},children:"GPIO 26"}),l.jsx("td",{style:{padding:"0.85rem 1rem"},children:t?o(t.valve,["OPEN","CLOSED"]):l.jsx("span",{className:"text-muted",children:"Querying..."})})]}),l.jsxs("tr",{children:[l.jsx("td",{style:{padding:"0.85rem 1rem",fontWeight:600},children:"YF-S401 Liquid Flow Sensor"}),l.jsx("td",{style:{padding:"0.85rem 1rem",color:"var(--text-muted)"},children:"Hardware Pulse Interrupt"}),l.jsx("td",{style:{padding:"0.85rem 1rem",fontFamily:"JetBrains Mono, monospace"},children:"GPIO 27"}),l.jsx("td",{style:{padding:"0.85rem 1rem"},children:t?l.jsx("span",{className:`status-pill ${t.flow!=="NO FLOW"?"status-online":"status-warning"}`,children:t.flow}):l.jsx("span",{className:"text-muted",children:"Querying..."})})]})]})]})}),l.jsxs("div",{style:{background:"rgba(0,0,0,0.3)",padding:"1rem",borderRadius:"var(--radius-md)",border:"1px solid var(--border-subtle)"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"},children:[l.jsx(jS,{size:16,color:"var(--sky-400)"}),l.jsx("h3",{style:{fontSize:"0.9rem",fontWeight:700,color:"#fff"},children:"Physical Payload Inspector (JSON)"})]}),l.jsx("pre",{className:"mono",style:{fontSize:"0.75rem",color:"var(--emerald-400)",overflowX:"auto",maxHeight:"220px"},children:t!=null&&t.raw_telemetry?JSON.stringify(t.raw_telemetry,null,2):"// No physical telemetry packet received"})]})]})},h1=()=>l.jsxs("div",{className:"sidebar-hero-card",children:[l.jsx("div",{className:"sidebar-hero-scanline"}),l.jsx("div",{style:{position:"absolute",top:"-40px",right:"-40px",width:"160px",height:"160px",background:"radial-gradient(circle, rgba(16, 185, 129, 0.22) 0%, transparent 70%)",borderRadius:"50%",pointerEvents:"none",zIndex:0}}),l.jsxs("div",{style:{position:"relative",zIndex:2,display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"0.65rem"},children:[l.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"6px",padding:"0.22rem 0.65rem",borderRadius:"999px",background:"rgba(16, 185, 129, 0.12)",border:"1px solid rgba(16, 185, 129, 0.35)",boxShadow:"0 0 12px rgba(16, 185, 129, 0.15)"},children:[l.jsx("span",{className:"pulse-indicator green",style:{width:"6px",height:"6px"}}),l.jsx("span",{style:{fontSize:"0.66rem",fontWeight:800,letterSpacing:"0.08em",color:"var(--emerald-400)",textTransform:"uppercase",fontFamily:"JetBrains Mono, monospace"},children:"LIVE FIELD MONITORING"})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px",fontSize:"0.65rem",color:"var(--text-dim)",fontFamily:"JetBrains Mono, monospace"},children:[l.jsx(ia,{size:11,color:"var(--emerald-400)"}),l.jsx("span",{children:"v2.0 4WD"})]})]}),l.jsxs("div",{style:{position:"relative",zIndex:2,width:"100%",height:"115px",borderRadius:"12px",background:"radial-gradient(ellipse at 50% 65%, rgba(16, 185, 129, 0.12) 0%, rgba(6, 12, 20, 0.6) 80%)",border:"1px solid rgba(255, 255, 255, 0.05)",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"0.85rem"},children:[l.jsx("div",{className:"laser-sweep-beam"}),l.jsxs("svg",{viewBox:"0 0 280 120",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:"92%",height:"92%",filter:"drop-shadow(0 4px 14px rgba(0,0,0,0.6))"},children:[l.jsx("path",{d:"M40 95 L240 95",stroke:"rgba(16, 185, 129, 0.2)",strokeWidth:"1",strokeDasharray:"3 3"}),l.jsx("path",{d:"M60 105 L220 105",stroke:"rgba(16, 185, 129, 0.15)",strokeWidth:"1",strokeDasharray:"4 4"}),l.jsx("path",{d:"M80 85 L200 85",stroke:"rgba(16, 185, 129, 0.12)",strokeWidth:"1",strokeDasharray:"2 2"}),l.jsx("polygon",{points:"140,38 75,98 205,98",fill:"url(#scanBeamGrad)",opacity:"0.35"}),l.jsx("line",{x1:"75",y1:"98",x2:"205",y2:"98",stroke:"var(--emerald-400)",strokeWidth:"1.5",strokeOpacity:"0.8"}),l.jsx("circle",{cx:"140",cy:"98",r:"16",stroke:"var(--emerald-400)",strokeWidth:"1",strokeDasharray:"3 2",opacity:"0.6"}),l.jsx("circle",{cx:"140",cy:"98",r:"3",fill:"var(--emerald-400)"}),l.jsx("rect",{x:"52",y:"60",width:"18",height:"38",rx:"4",fill:"#0d1520",stroke:"rgba(255,255,255,0.15)",strokeWidth:"1.5"}),l.jsx("line",{x1:"52",y1:"70",x2:"70",y2:"70",stroke:"#1f2937",strokeWidth:"1.5"}),l.jsx("line",{x1:"52",y1:"80",x2:"70",y2:"80",stroke:"#1f2937",strokeWidth:"1.5"}),l.jsx("line",{x1:"52",y1:"90",x2:"70",y2:"90",stroke:"#1f2937",strokeWidth:"1.5"}),l.jsx("rect",{x:"80",y:"66",width:"18",height:"38",rx:"4",fill:"#0f1c2c",stroke:"rgba(16, 185, 129, 0.4)",strokeWidth:"1.5"}),l.jsx("line",{x1:"80",y1:"76",x2:"98",y2:"76",stroke:"var(--emerald-500)",strokeWidth:"1.5",strokeOpacity:"0.6"}),l.jsx("line",{x1:"80",y1:"86",x2:"98",y2:"86",stroke:"var(--emerald-500)",strokeWidth:"1.5",strokeOpacity:"0.6"}),l.jsx("line",{x1:"80",y1:"96",x2:"98",y2:"96",stroke:"var(--emerald-500)",strokeWidth:"1.5",strokeOpacity:"0.6"}),l.jsx("rect",{x:"210",y:"60",width:"18",height:"38",rx:"4",fill:"#0d1520",stroke:"rgba(255,255,255,0.15)",strokeWidth:"1.5"}),l.jsx("line",{x1:"210",y1:"70",x2:"228",y2:"70",stroke:"#1f2937",strokeWidth:"1.5"}),l.jsx("line",{x1:"210",y1:"80",x2:"228",y2:"80",stroke:"#1f2937",strokeWidth:"1.5"}),l.jsx("line",{x1:"210",y1:"90",x2:"228",y2:"90",stroke:"#1f2937",strokeWidth:"1.5"}),l.jsx("rect",{x:"182",y:"66",width:"18",height:"38",rx:"4",fill:"#0f1c2c",stroke:"rgba(16, 185, 129, 0.4)",strokeWidth:"1.5"}),l.jsx("line",{x1:"182",y1:"76",x2:"200",y2:"76",stroke:"var(--emerald-500)",strokeWidth:"1.5",strokeOpacity:"0.6"}),l.jsx("line",{x1:"182",y1:"86",x2:"200",y2:"86",stroke:"var(--emerald-500)",strokeWidth:"1.5",strokeOpacity:"0.6"}),l.jsx("line",{x1:"182",y1:"96",x2:"200",y2:"96",stroke:"var(--emerald-500)",strokeWidth:"1.5",strokeOpacity:"0.6"}),l.jsx("polygon",{points:"76,68 94,48 186,48 204,68 196,82 84,82",fill:"url(#chassisGrad)",stroke:"rgba(255, 255, 255, 0.2)",strokeWidth:"1.5"}),l.jsx("path",{d:"M96 52 L184 52",stroke:"var(--emerald-400)",strokeWidth:"2",strokeLinecap:"round"}),l.jsx("circle",{cx:"106",cy:"64",r:"2.5",fill:"var(--sky-400)"}),l.jsx("circle",{cx:"174",cy:"64",r:"2.5",fill:"var(--sky-400)"}),l.jsx("line",{x1:"68",y1:"62",x2:"94",y2:"62",stroke:"#64748b",strokeWidth:"2.5",strokeLinecap:"round"}),l.jsx("line",{x1:"186",y1:"62",x2:"212",y2:"62",stroke:"#64748b",strokeWidth:"2.5",strokeLinecap:"round"}),l.jsx("rect",{x:"64",y:"60",width:"5",height:"7",rx:"1.5",fill:"var(--emerald-400)"}),l.jsx("rect",{x:"211",y:"60",width:"5",height:"7",rx:"1.5",fill:"var(--emerald-400)"}),l.jsx("circle",{cx:"66",cy:"74",r:"1.5",fill:"var(--sky-400)",opacity:"0.8"}),l.jsx("circle",{cx:"64",cy:"80",r:"1.2",fill:"var(--emerald-400)",opacity:"0.7"}),l.jsx("circle",{cx:"213",cy:"74",r:"1.5",fill:"var(--sky-400)",opacity:"0.8"}),l.jsx("circle",{cx:"215",cy:"80",r:"1.2",fill:"var(--emerald-400)",opacity:"0.7"}),l.jsx("rect",{x:"130",y:"32",width:"20",height:"18",rx:"3",fill:"#132338",stroke:"rgba(16, 185, 129, 0.5)",strokeWidth:"1.2"}),l.jsx("circle",{cx:"140",cy:"38",r:"6",fill:"#040b14",stroke:"var(--emerald-400)",strokeWidth:"1.5"}),l.jsx("circle",{cx:"140",cy:"38",r:"3",fill:"var(--emerald-400)"}),l.jsx("circle",{cx:"142",cy:"36",r:"1",fill:"#fff"}),l.jsx("ellipse",{cx:"140",cy:"27",rx:"9",ry:"3.5",fill:"#1f2937",stroke:"var(--sky-400)",strokeWidth:"1.2"}),l.jsx("circle",{cx:"140",cy:"26",r:"2",fill:"var(--sky-400)"}),l.jsxs("defs",{children:[l.jsxs("linearGradient",{id:"chassisGrad",x1:"140",y1:"48",x2:"140",y2:"82",gradientUnits:"userSpaceOnUse",children:[l.jsx("stop",{offset:"0%",stopColor:"#1e293b"}),l.jsx("stop",{offset:"50%",stopColor:"#0f172a"}),l.jsx("stop",{offset:"100%",stopColor:"#09101c"})]}),l.jsxs("linearGradient",{id:"scanBeamGrad",x1:"140",y1:"38",x2:"140",y2:"98",gradientUnits:"userSpaceOnUse",children:[l.jsx("stop",{offset:"0%",stopColor:"#10b981",stopOpacity:"0.8"}),l.jsx("stop",{offset:"60%",stopColor:"#10b981",stopOpacity:"0.15"}),l.jsx("stop",{offset:"100%",stopColor:"#10b981",stopOpacity:"0.0"})]})]})]})]}),l.jsxs("div",{style:{position:"relative",zIndex:2,marginBottom:"0.85rem"},children:[l.jsxs("h2",{style:{fontSize:"1.08rem",fontWeight:800,lineHeight:1.25,color:"#fff",letterSpacing:"-0.02em",margin:"0 0 0.25rem 0"},children:["AI-Powered"," ",l.jsx("span",{style:{background:"linear-gradient(135deg, #34d399 0%, #10b981 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"Precision Farming"})]}),l.jsxs("p",{style:{fontSize:"0.74rem",fontWeight:600,color:"var(--emerald-400)",letterSpacing:"0.04em",margin:0,display:"flex",alignItems:"center",gap:"4px"},children:[l.jsx("span",{children:"Detect"}),l.jsx("span",{style:{color:"var(--text-dim)"},children:"•"}),l.jsx("span",{children:"Diagnose"}),l.jsx("span",{style:{color:"var(--text-dim)"},children:"•"}),l.jsx("span",{children:"Treat"}),l.jsx("span",{style:{color:"var(--text-dim)"},children:"•"}),l.jsx("span",{children:"Monitor"})]})]}),l.jsxs("div",{style:{position:"relative",zIndex:2,display:"flex",flexDirection:"column",gap:"0.4rem"},children:[l.jsxs("div",{className:"hero-feature-pill",children:[l.jsx("div",{style:{width:"22px",height:"22px",borderRadius:"6px",background:"rgba(16, 185, 129, 0.2)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:l.jsx(Zx,{size:13,color:"var(--emerald-400)"})}),l.jsxs("div",{style:{flex:1,minWidth:0},children:[l.jsx("div",{style:{fontSize:"0.75rem",fontWeight:700,color:"#f8fafc"},children:"AI Disease Detection"}),l.jsx("div",{style:{fontSize:"0.64rem",color:"var(--text-muted)"},children:"Real-time Foliage Pathology"})]}),l.jsx("span",{className:"feature-status-dot green"})]}),l.jsxs("div",{className:"hero-feature-pill",children:[l.jsx("div",{style:{width:"22px",height:"22px",borderRadius:"6px",background:"rgba(56, 189, 248, 0.2)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:l.jsx(hc,{size:13,color:"var(--sky-400)"})}),l.jsxs("div",{style:{flex:1,minWidth:0},children:[l.jsx("div",{style:{fontSize:"0.75rem",fontWeight:700,color:"#f8fafc"},children:"NPK Soil Intelligence"}),l.jsx("div",{style:{fontSize:"0.64rem",color:"var(--text-muted)"},children:"RS485 Probe & Moisture Sync"})]}),l.jsx("span",{className:"feature-status-dot sky"})]}),l.jsxs("div",{className:"hero-feature-pill",children:[l.jsx("div",{style:{width:"22px",height:"22px",borderRadius:"6px",background:"rgba(245, 158, 11, 0.2)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:l.jsx(zc,{size:13,color:"var(--amber-400)"})}),l.jsxs("div",{style:{flex:1,minWidth:0},children:[l.jsx("div",{style:{fontSize:"0.75rem",fontWeight:700,color:"#f8fafc"},children:"Precision Spraying"}),l.jsx("div",{style:{fontSize:"0.64rem",color:"var(--text-muted)"},children:"Targeted Chemical Dose Delivery"})]}),l.jsx("span",{className:"feature-status-dot amber"})]})]})]}),p1=({telemetry:t,onConnectionChange:e})=>{const[n,i]=oe.useState("wifi"),[r,s]=oe.useState(xn.getStatus()),[a,o]=oe.useState(xn.getMode()),[c,u]=oe.useState(Dt.WIFI.DEFAULT_IP),[p,h]=oe.useState(String(Dt.WIFI.DEFAULT_PORT)),[f,m]=oe.useState(!1),[_,M]=oe.useState(""),g=typeof navigator<"u"&&"bluetooth"in navigator,d=typeof window<"u"?window.isSecureContext:!0,[x,E]=oe.useState(!0);oe.useEffect(()=>{const F=xn.subscribeStatus(D=>{s(D),o(D.mode),D.message&&M(D.message)});return()=>F()},[]);const S=r.state==="CONNECTED"&&a==="REAL_HARDWARE",b=r.state==="CONNECTING"||f,T=r.state==="RECONNECTING",C=F=>{xn.setMode(F),o(F),M(F==="SIMULATION"?"Switched to SIMULATION mode (Safe test sandbox, no hardware required).":"Switched to REAL HARDWARE mode. Connect your physical ESP32 to begin."),e==null||e()},y=async()=>{const F=c.trim(),D=parseInt(p,10)||80;if(!F){M("Please enter a valid ESP32 IP address or hostname (e.g., 192.168.4.1).");return}m(!0),M(`Verifying ESP32 at ${F}:${D}…`);try{await xn.connect("wifi",{ip:F,port:D})||M(`Could not reach ESP32 at ${F}:${D}. Connect PC Wi-Fi to "${Dt.WIFI.AP_SSID}".`),e==null||e()}catch(V){M(V.message||"Wi-Fi connection error.")}finally{m(!1)}},A=async()=>{m(!0);try{await xn.disconnect(),M("ESP32 disconnected. Actuators safely stopped."),e==null||e()}catch(F){M(F.message||"Disconnect error.")}finally{m(!1)}},P=async()=>{m(!0),M(`Reconnecting to ESP32 at ${c}…`);try{await xn.reconnect()||M(`Reconnect attempt failed for ${c}. Verify ESP32 power and Wi-Fi connection.`),e==null||e()}catch(F){M(F.message||"Reconnect error.")}finally{m(!1)}},N=async()=>{if(!g){M("Web Bluetooth is not supported in this browser. Please use Chrome, Edge, or Opera on desktop/Android.");return}if(!d){M("Web Bluetooth requires a secure context (HTTPS or http://localhost).");return}m(!0),M('Opening Bluetooth pairing window… select "AgriGuard-Robot"');try{await xn.connect("bluetooth")&&M("Connected to AgriGuard ESP32 via Web Bluetooth! Real hardware telemetry live."),e==null||e()}catch(F){F.name==="NotFoundError"?M("Bluetooth device chooser was cancelled by user."):M(F.message||"Web Bluetooth connection failed.")}finally{m(!1)}};let I="DISCONNECTED";return r.transport==="Wi-Fi"&&(r.state==="CONNECTED"?I="CONNECTED":r.state==="RECONNECTING"?I="RECONNECTING":I="DISCONNECTED"),l.jsxs("div",{className:"glass-panel",style:{padding:"1.25rem",width:"100%",boxSizing:"border-box"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem",flexWrap:"wrap",gap:"0.75rem"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.65rem"},children:[l.jsx("div",{style:{width:"38px",height:"38px",borderRadius:"10px",background:S?"rgba(16, 185, 129, 0.15)":"rgba(56, 189, 248, 0.15)",border:`1px solid ${S?"rgba(16, 185, 129, 0.35)":"rgba(56, 189, 248, 0.35)"}`,display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(BS,{size:20,color:S?"var(--emerald-400)":"var(--sky-400)"})}),l.jsxs("div",{children:[l.jsx("h2",{style:{fontSize:"1.05rem",fontWeight:700,margin:0,display:"flex",alignItems:"center",gap:"0.5rem"},children:"Robot Hardware Connectivity"}),l.jsx("p",{style:{fontSize:"0.75rem",color:"var(--text-muted)",margin:"0.15rem 0 0 0"},children:"Primary: Wi-Fi (SoftAP / LAN) · Optional: Web Bluetooth BLE · Safe Watchdog Interlock"})]})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",background:"rgba(0,0,0,0.3)",padding:"4px",borderRadius:"10px",border:"1px solid var(--border-subtle)"},children:[l.jsx("button",{type:"button",onClick:()=>C("SIMULATION"),style:{padding:"0.35rem 0.8rem",borderRadius:"7px",border:"none",background:a==="SIMULATION"?"var(--sky-500)":"transparent",color:a==="SIMULATION"?"#05080f":"var(--text-muted)",fontSize:"0.74rem",fontWeight:800,cursor:"pointer",transition:"all 0.15s ease"},children:"SIMULATION"}),l.jsx("button",{type:"button",onClick:()=>C("REAL_HARDWARE"),style:{padding:"0.35rem 0.8rem",borderRadius:"7px",border:"none",background:a==="REAL_HARDWARE"?"var(--emerald-500)":"transparent",color:a==="REAL_HARDWARE"?"#05080f":"var(--text-muted)",fontSize:"0.74rem",fontWeight:800,cursor:"pointer",transition:"all 0.15s ease"},children:"REAL HARDWARE"})]})]}),l.jsxs("div",{style:{padding:"0.65rem 0.9rem",borderRadius:"8px",marginBottom:"1rem",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"0.5rem",background:a==="SIMULATION"?"rgba(56, 189, 248, 0.08)":S?"rgba(16, 185, 129, 0.12)":"rgba(244, 63, 94, 0.12)",border:`1px solid ${a==="SIMULATION"?"rgba(56, 189, 248, 0.3)":S?"rgba(16, 185, 129, 0.4)":"rgba(244, 63, 94, 0.4)"}`},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.55rem"},children:[a==="SIMULATION"?l.jsx(ia,{size:16,color:"var(--sky-400)"}):S?l.jsx($x,{size:16,color:"var(--emerald-400)"}):l.jsx(e_,{size:16,color:"var(--rose-400)"}),l.jsxs("div",{children:[l.jsx("div",{style:{fontSize:"0.82rem",fontWeight:800,color:a==="SIMULATION"?"var(--sky-400)":S?"var(--emerald-400)":"var(--rose-400)"},children:a==="SIMULATION"?"MODE: SIMULATION (Safe Test Sandbox)":S?`ROBOT: CONNECTED via ${r.transport}`:"ROBOT: DISCONNECTED"}),l.jsx("div",{style:{fontSize:"0.72rem",color:"var(--text-muted)"},children:a==="SIMULATION"?"Dynamic physics model active. No physical actuators or liquid pressurized.":S?`Hardware: ${r.deviceName||Dt.BLE.DEVICE_NAME} · Ping: ${r.pingMs!=null?`${r.pingMs}ms`:"<10ms"}`:"Physical ESP32 unreachable. Telemetry values set to offline; fake numbers blocked."})]})]}),l.jsx("span",{style:{fontSize:"0.7rem",padding:"0.2rem 0.6rem",borderRadius:"6px",fontWeight:700,background:"rgba(0,0,0,0.3)",color:a==="SIMULATION"?"var(--sky-400)":S?"var(--emerald-400)":"var(--rose-400)"},children:a==="SIMULATION"?"SIMULATION":S?"LIVE ESP32":"HARDWARE OFFLINE"})]}),l.jsxs("div",{style:{display:"flex",gap:"0.5rem",marginBottom:"1rem",background:"rgba(0, 0, 0, 0.25)",padding:"0.3rem",borderRadius:"10px",border:"1px solid var(--border-subtle)",maxWidth:"380px"},children:[l.jsxs("button",{type:"button",onClick:()=>i("wifi"),style:{flex:1,padding:"0.45rem 0.75rem",borderRadius:"7px",border:"none",background:n==="wifi"?"var(--emerald-500)":"transparent",color:n==="wifi"?"#05080f":"var(--text-muted)",fontWeight:700,fontSize:"0.78rem",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"0.45rem",transition:"all 0.15s ease"},children:[l.jsx(jr,{size:14}),"Wi-Fi (Primary)"]}),l.jsxs("button",{type:"button",onClick:()=>i("bluetooth"),style:{flex:1,padding:"0.45rem 0.75rem",borderRadius:"7px",border:"none",background:n==="bluetooth"?"var(--emerald-500)":"transparent",color:n==="bluetooth"?"#05080f":"var(--text-muted)",fontWeight:700,fontSize:"0.78rem",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"0.45rem",transition:"all 0.15s ease"},children:[l.jsx(vu,{size:14}),"Bluetooth BLE (Optional)"]})]}),n==="wifi"&&l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.85rem"},children:l.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.02)",border:"1px solid rgba(255, 255, 255, 0.08)",borderRadius:"10px",padding:"0.85rem"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.75rem",flexWrap:"wrap",gap:"0.5rem"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem"},children:[l.jsx(jr,{size:16,color:"var(--emerald-400)"}),l.jsx("span",{style:{fontSize:"0.85rem",fontWeight:700,color:"#fff"},children:"Wi-Fi Connection"})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem"},children:[l.jsx("span",{style:{fontSize:"0.72rem",color:"var(--text-muted)"},children:"Status:"}),l.jsx("span",{style:{fontSize:"0.72rem",fontWeight:800,padding:"0.2rem 0.6rem",borderRadius:"6px",background:I==="CONNECTED"?"rgba(16, 185, 129, 0.2)":I==="RECONNECTING"?"rgba(234, 179, 8, 0.2)":"rgba(244, 63, 94, 0.2)",color:I==="CONNECTED"?"var(--emerald-400)":I==="RECONNECTING"?"var(--amber-400)":"var(--rose-400)",border:`1px solid ${I==="CONNECTED"?"rgba(16, 185, 129, 0.4)":I==="RECONNECTING"?"rgba(234, 179, 8, 0.4)":"rgba(244, 63, 94, 0.4)"}`},children:I})]})]}),l.jsxs("div",{style:{display:"flex",gap:"0.75rem",alignItems:"flex-end",flexWrap:"wrap",marginBottom:"0.75rem"},children:[l.jsxs("div",{style:{flex:"2 1 200px"},children:[l.jsx("label",{style:{fontSize:"0.72rem",color:"var(--text-dim)",fontWeight:600,display:"block",marginBottom:"0.3rem"},children:"Robot IP / Hostname"}),l.jsx("input",{type:"text",value:c,onChange:F=>u(F.target.value),placeholder:"192.168.4.1 or agriguard.local",style:{width:"100%",background:"rgba(255, 255, 255, 0.05)",border:"1px solid rgba(255, 255, 255, 0.15)",borderRadius:"8px",color:"#fff",padding:"0.55rem 0.75rem",fontSize:"0.85rem",fontFamily:"monospace",outline:"none",boxSizing:"border-box"}})]}),l.jsxs("div",{style:{flex:"1 1 90px",maxWidth:"120px"},children:[l.jsx("label",{style:{fontSize:"0.72rem",color:"var(--text-dim)",fontWeight:600,display:"block",marginBottom:"0.3rem"},children:"Port"}),l.jsx("input",{type:"number",value:p,onChange:F=>h(F.target.value),min:1,max:65535,style:{width:"100%",background:"rgba(255, 255, 255, 0.05)",border:"1px solid rgba(255, 255, 255, 0.15)",borderRadius:"8px",color:"#fff",padding:"0.55rem 0.75rem",fontSize:"0.85rem",fontFamily:"monospace",outline:"none",boxSizing:"border-box"}})]}),l.jsxs("div",{style:{display:"flex",gap:"0.45rem",flexWrap:"wrap"},children:[l.jsxs("button",{type:"button",onClick:y,disabled:b,className:"btn btn-primary",style:{height:"38px",padding:"0 1rem",fontSize:"0.78rem",fontWeight:700,display:"flex",alignItems:"center",gap:"0.4rem",cursor:"pointer"},children:[b?l.jsx(vm,{size:13,style:{animation:"spin 1s linear infinite"}}):l.jsx(jr,{size:13}),"CONNECT"]}),l.jsxs("button",{type:"button",onClick:A,disabled:b||r.state!=="CONNECTED",className:"btn btn-outline",style:{height:"38px",padding:"0 0.85rem",fontSize:"0.78rem",fontWeight:700,display:"flex",alignItems:"center",gap:"0.35rem",color:"var(--rose-400)",borderColor:"rgba(244, 63, 94, 0.35)",cursor:r.state==="CONNECTED"?"pointer":"default",opacity:r.state==="CONNECTED"?1:.5},children:[l.jsx(ym,{size:13}),"DISCONNECT"]}),l.jsxs("button",{type:"button",onClick:P,disabled:b,className:"btn btn-outline",style:{height:"38px",padding:"0 0.85rem",fontSize:"0.78rem",fontWeight:700,display:"flex",alignItems:"center",gap:"0.35rem",color:"var(--sky-400)",borderColor:"rgba(56, 189, 248, 0.35)",cursor:"pointer"},children:[l.jsx(Br,{size:13,className:T?"spin":""}),"RECONNECT"]})]})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem",flexWrap:"wrap"},children:[l.jsx("span",{style:{fontSize:"0.7rem",color:"var(--text-dim)",fontWeight:600},children:"Discovery Presets:"}),[{label:"SoftAP Default (192.168.4.1)",ip:Dt.WIFI.DEFAULT_IP},{label:"mDNS (agriguard.local)",ip:Dt.WIFI.DEFAULT_HOSTNAME},{label:"LAN Hotspot (192.168.1.100)",ip:"192.168.1.100"}].map(F=>l.jsx("button",{type:"button",onClick:()=>u(F.ip),style:{padding:"0.2rem 0.55rem",borderRadius:"6px",background:"rgba(255, 255, 255, 0.05)",border:"1px solid rgba(255, 255, 255, 0.1)",color:"var(--text-muted)",fontSize:"0.68rem",cursor:"pointer",fontWeight:600},children:F.label},F.label))]})]})}),n==="bluetooth"&&l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.85rem"},children:l.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.02)",border:"1px solid rgba(255, 255, 255, 0.08)",borderRadius:"10px",padding:"0.85rem",display:"flex",flexDirection:"column",gap:"0.75rem"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"0.5rem"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.45rem"},children:[l.jsx(vu,{size:16,color:"var(--emerald-400)"}),l.jsx("span",{style:{fontSize:"0.85rem",fontWeight:700,color:"#fff"},children:"Web Bluetooth (BLE GATT)"})]}),l.jsx("span",{style:{fontSize:"0.7rem",fontWeight:700,padding:"0.15rem 0.5rem",borderRadius:"6px",background:r.transport==="Bluetooth"&&r.state==="CONNECTED"?"rgba(16, 185, 129, 0.2)":"rgba(255, 255, 255, 0.05)",color:r.transport==="Bluetooth"&&r.state==="CONNECTED"?"var(--emerald-400)":"var(--text-muted)"},children:r.transport==="Bluetooth"&&r.state==="CONNECTED"?"CONNECTED":"DISCONNECTED"})]}),!g&&l.jsxs("div",{style:{padding:"0.6rem 0.8rem",borderRadius:"8px",background:"rgba(245, 158, 11, 0.1)",border:"1px solid rgba(245, 158, 11, 0.3)",color:"var(--amber-400)",fontSize:"0.74rem",display:"flex",alignItems:"center",gap:"0.5rem"},children:[l.jsx(ho,{size:15,color:"var(--amber-400)",style:{flexShrink:0}}),l.jsx("span",{children:"Bluetooth not supported in this browser. Please use Chrome, Edge, or Opera on desktop or Android."})]}),!d&&g&&l.jsxs("div",{style:{padding:"0.6rem 0.8rem",borderRadius:"8px",background:"rgba(244, 63, 94, 0.1)",border:"1px solid rgba(244, 63, 94, 0.3)",color:"var(--rose-400)",fontSize:"0.74rem",display:"flex",alignItems:"center",gap:"0.5rem"},children:[l.jsx(ho,{size:15,color:"var(--rose-400)",style:{flexShrink:0}}),l.jsx("span",{children:"Web Bluetooth requires a secure context (HTTPS or http://localhost)."})]}),l.jsxs("p",{style:{fontSize:"0.74rem",color:"var(--text-muted)",margin:0},children:["Connect directly via GATT service ",l.jsxs("code",{style:{color:"var(--emerald-400)",fontSize:"0.7rem"},children:[Dt.BLE.SERVICE_UUID.slice(0,18),"…"]}),". User permission dialog will open upon clicking below."]}),l.jsxs("div",{style:{display:"flex",gap:"0.5rem",alignItems:"center",flexWrap:"wrap"},children:[l.jsxs("button",{type:"button",onClick:N,disabled:!g||b,className:"btn btn-primary",style:{height:"38px",padding:"0 1.25rem",fontSize:"0.78rem",fontWeight:800,display:"flex",alignItems:"center",gap:"0.45rem",cursor:g?"pointer":"not-allowed",opacity:g?1:.6},children:[b?l.jsx(vm,{size:13,style:{animation:"spin 1s linear infinite"}}):l.jsx(vu,{size:14}),"CONNECT BLUETOOTH"]}),r.transport==="Bluetooth"&&r.state==="CONNECTED"&&l.jsxs("button",{type:"button",onClick:A,className:"btn btn-outline",style:{height:"38px",padding:"0 0.85rem",fontSize:"0.78rem",fontWeight:700,color:"var(--rose-400)",borderColor:"rgba(244, 63, 94, 0.35)",cursor:"pointer"},children:[l.jsx(ym,{size:13}),"DISCONNECT BLE"]})]})]})}),_&&l.jsxs("div",{style:{marginTop:"0.85rem",padding:"0.55rem 0.85rem",borderRadius:"8px",background:S?"rgba(16, 185, 129, 0.1)":"rgba(56, 189, 248, 0.08)",border:`1px solid ${S?"rgba(16, 185, 129, 0.3)":"rgba(56, 189, 248, 0.2)"}`,color:S?"var(--emerald-400)":"var(--text-main)",fontSize:"0.75rem",fontWeight:600,display:"flex",alignItems:"center",gap:"0.5rem"},children:[l.jsx(LS,{size:14,color:"var(--sky-400)",style:{flexShrink:0}}),l.jsx("span",{children:_})]}),l.jsxs("div",{style:{marginTop:"1rem",background:"rgba(0, 0, 0, 0.25)",border:"1px solid var(--border-subtle)",borderRadius:"10px",overflow:"hidden"},children:[l.jsxs("button",{type:"button",onClick:()=>E(!x),style:{width:"100%",padding:"0.65rem 0.9rem",background:"transparent",border:"none",display:"flex",alignItems:"center",justifyContent:"space-between",color:"var(--text-muted)",cursor:"pointer",fontSize:"0.75rem",fontWeight:700},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.45rem"},children:[l.jsx(WS,{size:14,color:"var(--emerald-400)"}),l.jsx("span",{children:"Official 8-Step Robot Startup Procedure"})]}),x?l.jsx(AS,{size:14}):l.jsx(TS,{size:14})]}),x&&l.jsx("div",{style:{padding:"0.5rem 0.9rem 0.85rem 0.9rem",borderTop:"1px solid rgba(255, 255, 255, 0.05)"},children:l.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"0.5rem",fontSize:"0.72rem",color:"var(--text-secondary)"},children:[{step:"Step 1",title:"Power on robot",desc:"Engage master 12V LiPo battery switch and ensure physical E-Stop is released."},{step:"Step 2",title:"ESP32 starts Wi-Fi/BLE",desc:`AP SSID "${Dt.WIFI.AP_SSID}" broadcast begins within 2 seconds.`},{step:"Step 3",title:"Connect to robot Wi-Fi",desc:`Connect laptop to "${Dt.WIFI.AP_SSID}" (Pass: ${Dt.WIFI.AP_PASSWORD}).`},{step:"Step 4",title:"Open AgriGuard",desc:"Open AgriGuard dashboard in browser (http://localhost:8000 or IP)."},{step:"Step 5",title:"Select REAL HARDWARE",desc:'Click "REAL HARDWARE" mode toggle button above.'},{step:"Step 6",title:"Connect Wi-Fi or BLE",desc:'Click "CONNECT" for 192.168.4.1 or "CONNECT BLUETOOTH".'},{step:"Step 7",title:"Verify sensor telemetry",desc:"Confirm Ultrasonic (L/C/R), Soil Moisture, DHT22, and MPU6050 are live."},{step:"Step 8",title:"Test STOP",desc:"Verify emergency STOP button safely halts all actuators."}].map(F=>l.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.02)",padding:"0.45rem 0.6rem",borderRadius:"6px",border:"1px solid rgba(255, 255, 255, 0.04)"},children:[l.jsxs("div",{style:{color:"var(--emerald-400)",fontWeight:800,fontSize:"0.68rem",marginBottom:"0.1rem"},children:[F.step,": ",F.title]}),l.jsx("div",{style:{fontSize:"0.68rem",color:"var(--text-muted)"},children:F.desc})]},F.step))})})]})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bh="186",$s={ROTATE:0,DOLLY:1,PAN:2},zs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},m1=0,wm=1,g1=2,Ol=1,n_=2,Ua=3,Zr=0,Cn=1,Ui=2,Bi=0,Xa=1,Yd=2,Tm=3,Am=4,x1=5,bs=100,_1=101,v1=102,y1=103,S1=104,M1=200,E1=201,b1=202,w1=203,i_=204,r_=205,T1=206,A1=207,C1=208,R1=209,P1=210,N1=211,D1=212,I1=213,L1=214,qd=0,Kd=1,Zd=2,po=3,Jd=4,Qd=5,ef=6,tf=7,s_=0,U1=1,O1=2,Si=0,a_=1,o_=2,l_=3,c_=4,u_=5,d_=6,f_=7,h_=300,Jr=301,ra=302,yu=303,Su=304,Bc=306,nf=1e3,ki=1001,rf=1002,Qt=1003,F1=1004,Ko=1005,un=1006,Mu=1007,Hr=1008,In=1009,p_=1010,m_=1011,mo=1012,Hh=1013,Ei=1014,xi=1015,bi=1016,Gh=1017,Wh=1018,go=1020,g_=35902,x_=35899,__=1021,v_=1022,si=1023,Xi=1026,Gr=1027,y_=1028,Vh=1029,Qr=1030,jh=1031,Xh=1033,Fl=33776,kl=33777,zl=33778,Bl=33779,sf=35840,af=35841,of=35842,lf=35843,cf=36196,uf=37492,df=37496,ff=37488,hf=37489,pc=37490,pf=37491,mf=37808,gf=37809,xf=37810,_f=37811,vf=37812,yf=37813,Sf=37814,Mf=37815,Ef=37816,bf=37817,wf=37818,Tf=37819,Af=37820,Cf=37821,Rf=36492,Pf=36494,Nf=36495,Df=36283,If=36284,mc=36285,Lf=36286,k1=3200,Uf=0,z1=1,lr="",Gn="srgb",gc="srgb-linear",xc="linear",gt="srgb",Eu=7680,B1=519,H1=512,G1=513,W1=514,$h=515,V1=516,j1=517,Yh=518,X1=519,$1=35044,Cm="300 es",_i=2e3,xo=2001;function Y1(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function _c(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function q1(){const t=_c("canvas");return t.style.display="block",t}const Rm={};function Pm(...t){const e="THREE."+t.shift();console.log(e,...t)}function S_(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ve(...t){t=S_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function dt(...t){t=S_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Ys(...t){const e=t.join(" ");e in Rm||(Rm[e]=!0,Ve(...t))}function K1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Z1={[qd]:Kd,[Zd]:ef,[Jd]:tf,[po]:Qd,[Kd]:qd,[ef]:Zd,[tf]:Jd,[Qd]:po};class Ar{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Nm=1234567;const $a=Math.PI/180,_o=180/Math.PI;function ca(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(on[t&255]+on[t>>8&255]+on[t>>16&255]+on[t>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[n&63|128]+on[n>>8&255]+"-"+on[n>>16&255]+on[n>>24&255]+on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]).toLowerCase()}function nt(t,e,n){return Math.max(e,Math.min(n,t))}function qh(t,e){return(t%e+e)%e}function J1(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function Q1(t,e,n){return t!==e?(n-t)/(e-t):0}function Ya(t,e,n){return(1-n)*t+n*e}function eM(t,e,n,i){return Ya(t,e,1-Math.exp(-n*i))}function tM(t,e=1){return e-Math.abs(qh(t,e*2)-e)}function nM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function iM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function rM(t,e){return t+Math.floor(Math.random()*(e-t+1))}function sM(t,e){return t+Math.random()*(e-t)}function aM(t){return t*(.5-Math.random())}function oM(t){t!==void 0&&(Nm=t);let e=Nm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lM(t){return t*$a}function cM(t){return t*_o}function uM(t){return t>0&&Number.isInteger(t)&&2**Math.round(Math.log2(t))===t}function dM(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function fM(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function hM(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),c=a(n/2),u=s((e+i)/2),p=a((e+i)/2),h=s((e-i)/2),f=a((e-i)/2),m=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":t.set(o*p,c*h,c*f,o*u);break;case"YZY":t.set(c*f,o*p,c*h,o*u);break;case"ZXZ":t.set(c*h,c*f,o*p,o*u);break;case"XZX":t.set(o*p,c*_,c*m,o*u);break;case"YXY":t.set(c*m,o*p,c*_,o*u);break;case"ZYZ":t.set(c*_,c*m,o*p,o*u);break;default:Ve("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ws(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function pn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ei={DEG2RAD:$a,RAD2DEG:_o,generateUUID:ca,clamp:nt,euclideanModulo:qh,mapLinear:J1,inverseLerp:Q1,lerp:Ya,damp:eM,pingpong:tM,smoothstep:nM,smootherstep:iM,randInt:rM,randFloat:sM,randFloatSpread:aM,seededRandom:oM,degToRad:lM,radToDeg:cM,isPowerOfTwo:uM,ceilPowerOfTwo:dM,floorPowerOfTwo:fM,setQuaternionFromProperEuler:hM,normalize:pn,denormalize:ws},rp=class rp{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};rp.prototype.isVector2=!0;let je=rp;class Mr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let c=i[r+0],u=i[r+1],p=i[r+2],h=i[r+3],f=s[a+0],m=s[a+1],_=s[a+2],M=s[a+3];if(h!==M||c!==f||u!==m||p!==_){let g=c*f+u*m+p*_+h*M;g<0&&(f=-f,m=-m,_=-_,M=-M,g=-g);let d=1-o;if(g<.9995){const x=Math.acos(g),E=Math.sin(x);d=Math.sin(d*x)/E,o=Math.sin(o*x)/E,c=c*d+f*o,u=u*d+m*o,p=p*d+_*o,h=h*d+M*o}else{c=c*d+f*o,u=u*d+m*o,p=p*d+_*o,h=h*d+M*o;const x=1/Math.sqrt(c*c+u*u+p*p+h*h);c*=x,u*=x,p*=x,h*=x}}e[n]=c,e[n+1]=u,e[n+2]=p,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],c=i[r+1],u=i[r+2],p=i[r+3],h=s[a],f=s[a+1],m=s[a+2],_=s[a+3];return e[n]=o*_+p*h+c*m-u*f,e[n+1]=c*_+p*f+u*h-o*m,e[n+2]=u*_+p*m+o*f-c*h,e[n+3]=p*_-o*h-c*f-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,u=o(i/2),p=o(r/2),h=o(s/2),f=c(i/2),m=c(r/2),_=c(s/2);switch(a){case"XYZ":this._x=f*p*h+u*m*_,this._y=u*m*h-f*p*_,this._z=u*p*_+f*m*h,this._w=u*p*h-f*m*_;break;case"YXZ":this._x=f*p*h+u*m*_,this._y=u*m*h-f*p*_,this._z=u*p*_-f*m*h,this._w=u*p*h+f*m*_;break;case"ZXY":this._x=f*p*h-u*m*_,this._y=u*m*h+f*p*_,this._z=u*p*_+f*m*h,this._w=u*p*h-f*m*_;break;case"ZYX":this._x=f*p*h-u*m*_,this._y=u*m*h+f*p*_,this._z=u*p*_-f*m*h,this._w=u*p*h+f*m*_;break;case"YZX":this._x=f*p*h+u*m*_,this._y=u*m*h+f*p*_,this._z=u*p*_-f*m*h,this._w=u*p*h-f*m*_;break;case"XZY":this._x=f*p*h-u*m*_,this._y=u*m*h-f*p*_,this._z=u*p*_+f*m*h,this._w=u*p*h+f*m*_;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],c=n[9],u=n[2],p=n[6],h=n[10],f=i+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(p-c)*m,this._y=(s-u)*m,this._z=(a-r)*m}else if(i>o&&i>h){const m=2*Math.sqrt(1+i-o-h);this._w=(p-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+u)/m}else if(o>h){const m=2*Math.sqrt(1+o-i-h);this._w=(s-u)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+p)/m}else{const m=2*Math.sqrt(1+h-i-o);this._w=(a-r)/m,this._x=(s+u)/m,this._y=(c+p)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,c=n._y,u=n._z,p=n._w;return this._x=i*p+a*o+r*u-s*c,this._y=r*p+a*c+s*o-i*u,this._z=s*p+a*u+i*c-r*o,this._w=a*p-i*o-r*c-s*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-n;if(o<.9995){const u=Math.acos(o),p=Math.sin(u);c=Math.sin(c*u)/p,n=Math.sin(n*u)/p,this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this._onChangeCallback()}else this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const sp=class sp{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Dm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Dm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,u=2*(a*r-o*i),p=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+c*u+a*h-o*p,this.y=i+c*p+o*u-s*h,this.z=r+c*h+s*p-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this.z=nt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this.z=nt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,c=n.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return bu.copy(this).projectOnVector(e),this.sub(bu)}reflect(e){return this.sub(bu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};sp.prototype.isVector3=!0;let $=sp;const bu=new $,Dm=new Mr,ap=class ap{constructor(e,n,i,r,s,a,o,c,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,u)}set(e,n,i,r,s,a,o,c,u){const p=this.elements;return p[0]=e,p[1]=r,p[2]=o,p[3]=n,p[4]=s,p[5]=c,p[6]=i,p[7]=a,p[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],c=i[6],u=i[1],p=i[4],h=i[7],f=i[2],m=i[5],_=i[8],M=r[0],g=r[3],d=r[6],x=r[1],E=r[4],S=r[7],b=r[2],T=r[5],C=r[8];return s[0]=a*M+o*x+c*b,s[3]=a*g+o*E+c*T,s[6]=a*d+o*S+c*C,s[1]=u*M+p*x+h*b,s[4]=u*g+p*E+h*T,s[7]=u*d+p*S+h*C,s[2]=f*M+m*x+_*b,s[5]=f*g+m*E+_*T,s[8]=f*d+m*S+_*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],p=e[8];return n*a*p-n*o*u-i*s*p+i*o*c+r*s*u-r*a*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],p=e[8],h=p*a-o*u,f=o*c-p*s,m=u*s-a*c,_=n*h+i*f+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return e[0]=h*M,e[1]=(r*u-p*i)*M,e[2]=(o*i-r*a)*M,e[3]=f*M,e[4]=(p*n-r*c)*M,e[5]=(r*s-o*n)*M,e[6]=m*M,e[7]=(i*c-u*n)*M,e[8]=(a*n-i*s)*M,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const c=Math.cos(s),u=Math.sin(s);return this.set(i*c,i*u,-i*(c*a+u*o)+a+e,-r*u,r*c,-r*(-u*a+c*o)+o+n,0,0,1),this}scale(e,n){return Ys("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(wu.makeScale(e,n)),this}rotate(e){return Ys("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(wu.makeRotation(-e)),this}translate(e,n){return Ys("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(wu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ap.prototype.isMatrix3=!0;let Ke=ap;const wu=new Ke,Im=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lm=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pM(){const t={enabled:!0,workingColorSpace:gc,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===gt&&(r.r=Hi(r.r),r.g=Hi(r.g),r.b=Hi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===gt&&(r.r=qs(r.r),r.g=qs(r.g),r.b=qs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===lr?xc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ys("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ys("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[gc]:{primaries:e,whitePoint:i,transfer:xc,toXYZ:Im,fromXYZ:Lm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Gn},outputColorSpaceConfig:{drawingBufferColorSpace:Gn}},[Gn]:{primaries:e,whitePoint:i,transfer:gt,toXYZ:Im,fromXYZ:Lm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Gn}}}),t}const rt=pM();function Hi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function qs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ds;class mM{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ds===void 0&&(ds=_c("canvas")),ds.width=e.width,ds.height=e.height;const r=ds.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ds}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=_c("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Hi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Hi(n[i]/255)*255):n[i]=Hi(n[i]);return{data:n,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gM=0;class Kh{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=ca(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Tu(r[a].image)):s.push(Tu(r[a]))}else s=Tu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Tu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?mM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}let xM=0;const Au=new $;class vn extends Ar{constructor(e=vn.DEFAULT_IMAGE,n=vn.DEFAULT_MAPPING,i=ki,r=ki,s=un,a=Hr,o=si,c=In,u=vn.DEFAULT_ANISOTROPY,p=lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=ca(),this.name="",this.source=new Kh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Au).x}get height(){return this.source.getSize(Au).y}get depth(){return this.source.getSize(Au).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ve(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ve(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==h_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nf:e.x=e.x-Math.floor(e.x);break;case ki:e.x=e.x<0?0:1;break;case rf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nf:e.y=e.y-Math.floor(e.y);break;case ki:e.y=e.y<0?0:1;break;case rf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=h_;vn.DEFAULT_ANISOTROPY=1;const op=class op{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,u=c[0],p=c[4],h=c[8],f=c[1],m=c[5],_=c[9],M=c[2],g=c[6],d=c[10];if(Math.abs(p-f)<.01&&Math.abs(h-M)<.01&&Math.abs(_-g)<.01){if(Math.abs(p+f)<.1&&Math.abs(h+M)<.1&&Math.abs(_+g)<.1&&Math.abs(u+m+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(u+1)/2,S=(m+1)/2,b=(d+1)/2,T=(p+f)/4,C=(h+M)/4,y=(_+g)/4;return E>S&&E>b?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=T/i,s=C/i):S>b?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=y/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=C/s,r=y/s),this.set(i,r,s,n),this}let x=Math.sqrt((g-_)*(g-_)+(h-M)*(h-M)+(f-p)*(f-p));return Math.abs(x)<.001&&(x=1),this.x=(g-_)/x,this.y=(h-M)/x,this.z=(f-p)/x,this.w=Math.acos((u+m+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this.z=nt(this.z,e.z,n.z),this.w=nt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this.z=nt(this.z,e,n),this.w=nt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};op.prototype.isVector4=!0;let Rt=op;class _M extends Ar{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Rt(0,0,e,n),this.scissorTest=!1,this.viewport=new Rt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new vn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Kh(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class li extends _M{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class M_ extends vn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vM extends vn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Mc=class Mc{constructor(e,n,i,r,s,a,o,c,u,p,h,f,m,_,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,u,p,h,f,m,_,M,g)}set(e,n,i,r,s,a,o,c,u,p,h,f,m,_,M,g){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=c,d[2]=u,d[6]=p,d[10]=h,d[14]=f,d[3]=m,d[7]=_,d[11]=M,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/fs.setFromMatrixColumn(e,0).length(),s=1/fs.setFromMatrixColumn(e,1).length(),a=1/fs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),u=Math.sin(r),p=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*p,m=a*h,_=o*p,M=o*h;n[0]=c*p,n[4]=-c*h,n[8]=u,n[1]=m+_*u,n[5]=f-M*u,n[9]=-o*c,n[2]=M-f*u,n[6]=_+m*u,n[10]=a*c}else if(e.order==="YXZ"){const f=c*p,m=c*h,_=u*p,M=u*h;n[0]=f+M*o,n[4]=_*o-m,n[8]=a*u,n[1]=a*h,n[5]=a*p,n[9]=-o,n[2]=m*o-_,n[6]=M+f*o,n[10]=a*c}else if(e.order==="ZXY"){const f=c*p,m=c*h,_=u*p,M=u*h;n[0]=f-M*o,n[4]=-a*h,n[8]=_+m*o,n[1]=m+_*o,n[5]=a*p,n[9]=M-f*o,n[2]=-a*u,n[6]=o,n[10]=a*c}else if(e.order==="ZYX"){const f=a*p,m=a*h,_=o*p,M=o*h;n[0]=c*p,n[4]=_*u-m,n[8]=f*u+M,n[1]=c*h,n[5]=M*u+f,n[9]=m*u-_,n[2]=-u,n[6]=o*c,n[10]=a*c}else if(e.order==="YZX"){const f=a*c,m=a*u,_=o*c,M=o*u;n[0]=c*p,n[4]=M-f*h,n[8]=_*h+m,n[1]=h,n[5]=a*p,n[9]=-o*p,n[2]=-u*p,n[6]=m*h+_,n[10]=f-M*h}else if(e.order==="XZY"){const f=a*c,m=a*u,_=o*c,M=o*u;n[0]=c*p,n[4]=-h,n[8]=u*p,n[1]=f*h+M,n[5]=a*p,n[9]=m*h-_,n[2]=_*h-m,n[6]=o*p,n[10]=M*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yM,e,SM)}lookAt(e,n,i){const r=this.elements;return Rn.subVectors(e,n),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Qi.crossVectors(i,Rn),Qi.lengthSq()===0&&(Math.abs(i.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Qi.crossVectors(i,Rn)),Qi.normalize(),Zo.crossVectors(Rn,Qi),r[0]=Qi.x,r[4]=Zo.x,r[8]=Rn.x,r[1]=Qi.y,r[5]=Zo.y,r[9]=Rn.y,r[2]=Qi.z,r[6]=Zo.z,r[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],c=i[8],u=i[12],p=i[1],h=i[5],f=i[9],m=i[13],_=i[2],M=i[6],g=i[10],d=i[14],x=i[3],E=i[7],S=i[11],b=i[15],T=r[0],C=r[4],y=r[8],A=r[12],P=r[1],N=r[5],I=r[9],F=r[13],D=r[2],V=r[6],Q=r[10],k=r[14],O=r[3],U=r[7],X=r[11],K=r[15];return s[0]=a*T+o*P+c*D+u*O,s[4]=a*C+o*N+c*V+u*U,s[8]=a*y+o*I+c*Q+u*X,s[12]=a*A+o*F+c*k+u*K,s[1]=p*T+h*P+f*D+m*O,s[5]=p*C+h*N+f*V+m*U,s[9]=p*y+h*I+f*Q+m*X,s[13]=p*A+h*F+f*k+m*K,s[2]=_*T+M*P+g*D+d*O,s[6]=_*C+M*N+g*V+d*U,s[10]=_*y+M*I+g*Q+d*X,s[14]=_*A+M*F+g*k+d*K,s[3]=x*T+E*P+S*D+b*O,s[7]=x*C+E*N+S*V+b*U,s[11]=x*y+E*I+S*Q+b*X,s[15]=x*A+E*F+S*k+b*K,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],u=e[13],p=e[2],h=e[6],f=e[10],m=e[14],_=e[3],M=e[7],g=e[11],d=e[15],x=c*m-u*f,E=o*m-u*h,S=o*f-c*h,b=a*m-u*p,T=a*f-c*p,C=a*h-o*p;return n*(M*x-g*E+d*S)-i*(_*x-g*b+d*T)+r*(_*E-M*b+d*C)-s*(_*S-M*T+g*C)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],u=e[6],p=e[10];return n*(a*p-o*u)-i*(s*p-o*c)+r*(s*u-a*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],p=e[8],h=e[9],f=e[10],m=e[11],_=e[12],M=e[13],g=e[14],d=e[15],x=n*o-i*a,E=n*c-r*a,S=n*u-s*a,b=i*c-r*o,T=i*u-s*o,C=r*u-s*c,y=p*M-h*_,A=p*g-f*_,P=p*d-m*_,N=h*g-f*M,I=h*d-m*M,F=f*d-m*g,D=x*F-E*I+S*N+b*P-T*A+C*y;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/D;return e[0]=(o*F-c*I+u*N)*V,e[1]=(r*I-i*F-s*N)*V,e[2]=(M*C-g*T+d*b)*V,e[3]=(f*T-h*C-m*b)*V,e[4]=(c*P-a*F-u*A)*V,e[5]=(n*F-r*P+s*A)*V,e[6]=(g*S-_*C-d*E)*V,e[7]=(p*C-f*S+m*E)*V,e[8]=(a*I-o*P+u*y)*V,e[9]=(i*P-n*I-s*y)*V,e[10]=(_*T-M*S+d*x)*V,e[11]=(h*S-p*T-m*x)*V,e[12]=(o*A-a*N-c*y)*V,e[13]=(n*N-i*A+r*y)*V,e[14]=(M*E-_*b-g*x)*V,e[15]=(p*b-h*E+f*x)*V,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,c=e.z,u=s*a,p=s*o;return this.set(u*a+i,u*o-r*c,u*c+r*o,0,u*o+r*c,p*o+i,p*c-r*a,0,u*c-r*o,p*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,c=n._w,u=s+s,p=a+a,h=o+o,f=s*u,m=s*p,_=s*h,M=a*p,g=a*h,d=o*h,x=c*u,E=c*p,S=c*h,b=i.x,T=i.y,C=i.z;return r[0]=(1-(M+d))*b,r[1]=(m+S)*b,r[2]=(_-E)*b,r[3]=0,r[4]=(m-S)*T,r[5]=(1-(f+d))*T,r[6]=(g+x)*T,r[7]=0,r[8]=(_+E)*C,r[9]=(g-x)*C,r[10]=(1-(f+M))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=fs.set(r[0],r[1],r[2]).length();const o=fs.set(r[4],r[5],r[6]).length(),c=fs.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Zn.copy(this);const u=1/a,p=1/o,h=1/c;return Zn.elements[0]*=u,Zn.elements[1]*=u,Zn.elements[2]*=u,Zn.elements[4]*=p,Zn.elements[5]*=p,Zn.elements[6]*=p,Zn.elements[8]*=h,Zn.elements[9]*=h,Zn.elements[10]*=h,n.setFromRotationMatrix(Zn),i.x=a,i.y=o,i.z=c,this}makePerspective(e,n,i,r,s,a,o=_i,c=!1){const u=this.elements,p=2*s/(n-e),h=2*s/(i-r),f=(n+e)/(n-e),m=(i+r)/(i-r);let _,M;if(c)_=s/(a-s),M=a*s/(a-s);else if(o===_i)_=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(o===xo)_=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=p,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=h,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=_,u[14]=M,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=_i,c=!1){const u=this.elements,p=2/(n-e),h=2/(i-r),f=-(n+e)/(n-e),m=-(i+r)/(i-r);let _,M;if(c)_=1/(a-s),M=a/(a-s);else if(o===_i)_=-2/(a-s),M=-(a+s)/(a-s);else if(o===xo)_=-1/(a-s),M=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=p,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=h,u[9]=0,u[13]=m,u[2]=0,u[6]=0,u[10]=_,u[14]=M,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Mc.prototype.isMatrix4=!0;let At=Mc;const fs=new $,Zn=new At,yM=new $(0,0,0),SM=new $(1,1,1),Qi=new $,Zo=new $,Rn=new $,Um=new At,Om=new Mr;class Er{constructor(e=0,n=0,i=0,r=Er.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],u=r[5],p=r[9],h=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-p,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(nt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-nt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(nt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-p,m),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Um.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Um,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Om.setFromEuler(this),this.setFromQuaternion(Om,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Er.DEFAULT_ORDER="XYZ";class E_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let MM=0;const Fm=new $,hs=new Mr,Ai=new At,Jo=new $,ba=new $,EM=new $,bM=new Mr,km=new $(1,0,0),zm=new $(0,1,0),Bm=new $(0,0,1),Hm={type:"added"},wM={type:"removed"},ps={type:"childadded",child:null},Cu={type:"childremoved",child:null};class Kt extends Ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:MM++}),this.uuid=ca(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kt.DEFAULT_UP.clone();const e=new $,n=new Er,i=new Mr,r=new $(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new At},normalMatrix:{value:new Ke}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=Kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new E_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return hs.setFromAxisAngle(e,n),this.quaternion.multiply(hs),this}rotateOnWorldAxis(e,n){return hs.setFromAxisAngle(e,n),this.quaternion.premultiply(hs),this}rotateX(e){return this.rotateOnAxis(km,e)}rotateY(e){return this.rotateOnAxis(zm,e)}rotateZ(e){return this.rotateOnAxis(Bm,e)}translateOnAxis(e,n){return Fm.copy(e).applyQuaternion(this.quaternion),this.position.add(Fm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(km,e)}translateY(e){return this.translateOnAxis(zm,e)}translateZ(e){return this.translateOnAxis(Bm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Jo.copy(e):Jo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(ba,Jo,this.up):Ai.lookAt(Jo,ba,this.up),this.quaternion.setFromRotationMatrix(Ai),r&&(Ai.extractRotation(r.matrixWorld),hs.setFromRotationMatrix(Ai),this.quaternion.premultiply(hs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hm),ps.child=e,this.dispatchEvent(ps),ps.child=null):dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(wM),Cu.child=e,this.dispatchEvent(Cu),Cu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hm),ps.child=e,this.dispatchEvent(ps),ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,e,EM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,bM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,p=c.length;u<p;u++){const h=c[u];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(n){const o=a(e.geometries),c=a(e.materials),u=a(e.textures),p=a(e.images),h=a(e.shapes),f=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),p.length>0&&(i.images=p),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const c=[];for(const u in o){const p=o[u];delete p.metadata,c.push(p)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Kt.DEFAULT_UP=new $(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class dr extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const TM={type:"move"};class Ru{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const M of e.hand.values()){const g=n.getJointPose(M,i),d=this._getHandJoint(u,M);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const p=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=p.position.distanceTo(h.position),m=.02,_=.005;u.inputState.pinching&&f>m+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=m-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(TM)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new dr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const b_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},er={h:0,s:0,l:0},Qo={h:0,s:0,l:0};function Pu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class et{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=rt.workingColorSpace){return this.r=e,this.g=n,this.b=i,rt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=rt.workingColorSpace){if(e=qh(e,1),n=nt(n,0,1),i=nt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Pu(a,s,e+1/3),this.g=Pu(a,s,e),this.b=Pu(a,s,e-1/3)}return rt.colorSpaceToWorking(this,r),this}setStyle(e,n=Gn){function i(s){s!==void 0&&parseFloat(s)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ve("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Gn){const i=b_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gn){return rt.workingToColorSpace(ln.copy(this),e),Math.round(nt(ln.r*255,0,255))*65536+Math.round(nt(ln.g*255,0,255))*256+Math.round(nt(ln.b*255,0,255))}getHexString(e=Gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=rt.workingColorSpace){rt.workingToColorSpace(ln.copy(this),n);const i=ln.r,r=ln.g,s=ln.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,u;const p=(o+a)/2;if(o===a)c=0,u=0;else{const h=a-o;switch(u=p<=.5?h/(a+o):h/(2-a-o),a){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=u,e.l=p,e}getRGB(e,n=rt.workingColorSpace){return rt.workingToColorSpace(ln.copy(this),n),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=Gn){rt.workingToColorSpace(ln.copy(this),e);const n=ln.r,i=ln.g,r=ln.b;return e!==Gn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(er),this.setHSL(er.h+e,er.s+n,er.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(er),e.getHSL(Qo);const i=Ya(er.h,Qo.h,n),r=Ya(er.s,Qo.s,n),s=Ya(er.l,Qo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new et;et.NAMES=b_;class AM extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Er,this.environmentIntensity=1,this.environmentRotation=new Er,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Jn=new $,Ci=new $,Nu=new $,Ri=new $,ms=new $,gs=new $,Gm=new $,Du=new $,Iu=new $,Lu=new $,Uu=new Rt,Ou=new Rt,Fu=new Rt;class ri{constructor(e=new $,n=new $,i=new $){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Jn.subVectors(e,n),r.cross(Jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Jn.subVectors(r,n),Ci.subVectors(i,n),Nu.subVectors(e,n);const a=Jn.dot(Jn),o=Jn.dot(Ci),c=Jn.dot(Nu),u=Ci.dot(Ci),p=Ci.dot(Nu),h=a*u-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,m=(u*c-o*p)*f,_=(a*p-o*c)*f;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,n,i,r,s,a,o,c){return this.getBarycoord(e,n,i,r,Ri)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ri.x),c.addScaledVector(a,Ri.y),c.addScaledVector(o,Ri.z),c)}static getInterpolatedAttribute(e,n,i,r,s,a){return Uu.setScalar(0),Ou.setScalar(0),Fu.setScalar(0),Uu.fromBufferAttribute(e,n),Ou.fromBufferAttribute(e,i),Fu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Uu,s.x),a.addScaledVector(Ou,s.y),a.addScaledVector(Fu,s.z),a}static isFrontFacing(e,n,i,r){return Jn.subVectors(i,n),Ci.subVectors(e,n),Jn.cross(Ci).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),Jn.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ri.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ri.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;ms.subVectors(r,i),gs.subVectors(s,i),Du.subVectors(e,i);const c=ms.dot(Du),u=gs.dot(Du);if(c<=0&&u<=0)return n.copy(i);Iu.subVectors(e,r);const p=ms.dot(Iu),h=gs.dot(Iu);if(p>=0&&h<=p)return n.copy(r);const f=c*h-p*u;if(f<=0&&c>=0&&p<=0)return a=c/(c-p),n.copy(i).addScaledVector(ms,a);Lu.subVectors(e,s);const m=ms.dot(Lu),_=gs.dot(Lu);if(_>=0&&m<=_)return n.copy(s);const M=m*u-c*_;if(M<=0&&u>=0&&_<=0)return o=u/(u-_),n.copy(i).addScaledVector(gs,o);const g=p*_-m*h;if(g<=0&&h-p>=0&&m-_>=0)return Gm.subVectors(s,r),o=(h-p)/(h-p+(m-_)),n.copy(r).addScaledVector(Gm,o);const d=1/(g+M+f);return a=M*d,o=f*d,n.copy(i).addScaledVector(ms,a).addScaledVector(gs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class wo{constructor(e=new $(1/0,1/0,1/0),n=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Qn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Qn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Qn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Qn):Qn.fromBufferAttribute(s,a),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),el.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),el.copy(i.boundingBox)),el.applyMatrix4(e.matrixWorld),this.union(el)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wa),tl.subVectors(this.max,wa),xs.subVectors(e.a,wa),_s.subVectors(e.b,wa),vs.subVectors(e.c,wa),tr.subVectors(_s,xs),nr.subVectors(vs,_s),Rr.subVectors(xs,vs);let n=[0,-tr.z,tr.y,0,-nr.z,nr.y,0,-Rr.z,Rr.y,tr.z,0,-tr.x,nr.z,0,-nr.x,Rr.z,0,-Rr.x,-tr.y,tr.x,0,-nr.y,nr.x,0,-Rr.y,Rr.x,0];return!ku(n,xs,_s,vs,tl)||(n=[1,0,0,0,1,0,0,0,1],!ku(n,xs,_s,vs,tl))?!1:(nl.crossVectors(tr,nr),n=[nl.x,nl.y,nl.z],ku(n,xs,_s,vs,tl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Pi=[new $,new $,new $,new $,new $,new $,new $,new $],Qn=new $,el=new wo,xs=new $,_s=new $,vs=new $,tr=new $,nr=new $,Rr=new $,wa=new $,tl=new $,nl=new $,Pr=new $;function ku(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Pr.fromArray(t,s);const o=r.x*Math.abs(Pr.x)+r.y*Math.abs(Pr.y)+r.z*Math.abs(Pr.z),c=e.dot(Pr),u=n.dot(Pr),p=i.dot(Pr);if(Math.max(-Math.max(c,u,p),Math.min(c,u,p))>o)return!1}return!0}const zt=new $,il=new je;let CM=0;class Mi extends Ar{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:CM++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=$1,this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)il.fromBufferAttribute(this,n),il.applyMatrix3(e),this.setXY(n,il.x,il.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyMatrix3(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyMatrix4(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyNormalMatrix(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.transformDirection(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ws(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=pn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ws(n,this.array)),n}setX(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ws(n,this.array)),n}setY(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ws(n,this.array)),n}setZ(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ws(n,this.array)),n}setW(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array),r=pn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array),r=pn(r,this.array),s=pn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class w_ extends Mi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class T_ extends Mi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Lt extends Mi{constructor(e,n,i){super(new Float32Array(e),n,i)}}const RM=new wo,Ta=new $,zu=new $;class To{constructor(e=new $,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):RM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ta.subVectors(e,this.center);const n=Ta.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ta,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ta.copy(e.center).add(zu)),this.expandByPoint(Ta.copy(e.center).sub(zu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let PM=0;const Hn=new At,Bu=new Kt,ys=new $,Pn=new wo,Aa=new wo,$t=new $;class nn extends Ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:PM++}),this.uuid=ca(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Y1(e)?T_:w_)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,n,i){return Hn.makeTranslation(e,n,i),this.applyMatrix4(Hn),this}scale(e,n,i){return Hn.makeScale(e,n,i),this.applyMatrix4(Hn),this}lookAt(e){return Bu.lookAt(e),Bu.updateMatrix(),this.applyMatrix4(Bu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Lt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new To);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Aa.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(Pn.min,Aa.min),Pn.expandByPoint($t),$t.addVectors(Pn.max,Aa.max),Pn.expandByPoint($t)):(Pn.expandByPoint(Aa.min),Pn.expandByPoint(Aa.max))}Pn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)$t.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared($t));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],c=this.morphTargetsRelative;for(let u=0,p=o.count;u<p;u++)$t.fromBufferAttribute(o,u),c&&(ys.fromBufferAttribute(e,u),$t.add(ys)),r=Math.max(r,i.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Mi(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let y=0;y<i.count;y++)o[y]=new $,c[y]=new $;const u=new $,p=new $,h=new $,f=new je,m=new je,_=new je,M=new $,g=new $;function d(y,A,P){u.fromBufferAttribute(i,y),p.fromBufferAttribute(i,A),h.fromBufferAttribute(i,P),f.fromBufferAttribute(s,y),m.fromBufferAttribute(s,A),_.fromBufferAttribute(s,P),p.sub(u),h.sub(u),m.sub(f),_.sub(f);const N=1/(m.x*_.y-_.x*m.y);isFinite(N)&&(M.copy(p).multiplyScalar(_.y).addScaledVector(h,-m.y).multiplyScalar(N),g.copy(h).multiplyScalar(m.x).addScaledVector(p,-_.x).multiplyScalar(N),o[y].add(M),o[A].add(M),o[P].add(M),c[y].add(g),c[A].add(g),c[P].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let y=0,A=x.length;y<A;++y){const P=x[y],N=P.start,I=P.count;for(let F=N,D=N+I;F<D;F+=3)d(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const E=new $,S=new $,b=new $,T=new $;function C(y){b.fromBufferAttribute(r,y),T.copy(b);const A=o[y];E.copy(A),E.sub(b.multiplyScalar(b.dot(A))).normalize(),S.crossVectors(T,A);const N=S.dot(c[y])<0?-1:1;a.setXYZW(y,E.x,E.y,E.z,N)}for(let y=0,A=x.length;y<A;++y){const P=x[y],N=P.start,I=P.count;for(let F=N,D=N+I;F<D;F+=3)C(e.getX(F+0)),C(e.getX(F+1)),C(e.getX(F+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Mi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new $,s=new $,a=new $,o=new $,c=new $,u=new $,p=new $,h=new $;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),M=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,M),a.fromBufferAttribute(n,g),p.subVectors(a,s),h.subVectors(r,s),p.cross(h),o.fromBufferAttribute(i,_),c.fromBufferAttribute(i,M),u.fromBufferAttribute(i,g),o.add(p),c.add(p),u.add(p),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(M,c.x,c.y,c.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),p.subVectors(a,s),h.subVectors(r,s),p.cross(h),i.setXYZ(f+0,p.x,p.y,p.z),i.setXYZ(f+1,p.x,p.y,p.z),i.setXYZ(f+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)$t.fromBufferAttribute(e,n),$t.normalize(),e.setXYZ(n,$t.x,$t.y,$t.z)}toNonIndexed(){function e(o,c){const u=o.array,p=o.itemSize,h=o.normalized,f=new u.constructor(c.length*p);let m=0,_=0;for(let M=0,g=c.length;M<g;M++){o.isInterleavedBufferAttribute?m=c[M]*o.data.stride+o.offset:m=c[M]*p;for(let d=0;d<p;d++)f[_++]=u[m++]}return new Mi(f,p,h)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new nn,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],u=e(c,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const c=[],u=s[o];for(let p=0,h=u.length;p<h;p++){const f=u[p],m=e(f,i);c.push(m)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const u=i[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],p=[];for(let h=0,f=u.length;h<f;h++){const m=u[h];p.push(m.toJSON(e.data))}p.length>0&&(r[c]=p,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const p=r[u];this.setAttribute(u,p.clone(n))}const s=e.morphAttributes;for(const u in s){const p=[],h=s[u];for(let f=0,m=h.length;f<m;f++)p.push(h[f].clone(n));this.morphAttributes[u]=p}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,p=a.length;u<p;u++){const h=a[u];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hu=new $,NM=new $,DM=new Ke;class Li{constructor(e=new $(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Hu.subVectors(i,n).cross(NM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Hu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||DM.getNormalMatrix(e),r=this.coplanarPoint(Hu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let IM=0;class ns extends Ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:IM++}),this.uuid=ca(),this.name="",this.type="Material",this.blending=Xa,this.side=Zr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=i_,this.blendDst=r_,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=B1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Eu,this.stencilZFail=Eu,this.stencilZPass=Eu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ve(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ve(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new et().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Li().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new je().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new je().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ni=new $,Gu=new $,rl=new $,sl=new $;class Hc{constructor(e=new $,n=new $(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ni.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,n),Ni.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Gu.copy(e).add(n).multiplyScalar(.5),rl.copy(n).sub(e).normalize(),sl.copy(this.origin).sub(Gu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(rl),o=sl.dot(this.direction),c=-sl.dot(rl),u=sl.lengthSq(),p=Math.abs(1-a*a);let h,f,m,_;if(p>0)if(h=a*c-o,f=a*o-c,_=s*p,h>=0)if(f>=-_)if(f<=_){const M=1/p;h*=M,f*=M,m=h*(h+a*f+2*o)+f*(a*h+f+2*c)+u}else f=s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*c)+u;else f=-s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*c)+u;else f<=-_?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-c),s),m=-h*h+f*(f+2*c)+u):f<=_?(h=0,f=Math.min(Math.max(-s,-c),s),m=f*(f+2*c)+u):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-c),s),m=-h*h+f*(f+2*c)+u);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*c)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Gu).addScaledVector(rl,f),m}intersectSphere(e,n){if(e.radius<0)return null;Ni.subVectors(e.center,this.origin);const i=Ni.dot(this.direction),r=Ni.dot(Ni)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,c;const u=1/this.direction.x,p=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),p>=0?(s=(e.min.y-f.y)*p,a=(e.max.y-f.y)*p):(s=(e.max.y-f.y)*p,a=(e.min.y-f.y)*p),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,n,i,r,s){const a=this.origin,o=this.direction,c=o.x,u=o.y,p=o.z,h=e.x-a.x,f=e.y-a.y,m=e.z-a.z,_=n.x-a.x,M=n.y-a.y,g=n.z-a.z,d=i.x-a.x,x=i.y-a.y,E=i.z-a.z,S=Math.abs(c),b=Math.abs(u),T=Math.abs(p);let C,y,A,P,N,I,F,D,V,Q,k,O;if(S>=b&&S>=T?(A=c,I=h,V=_,O=d,c>=0?(C=u,y=p,P=f,N=m,F=M,D=g,Q=x,k=E):(C=p,y=u,P=m,N=f,F=g,D=M,Q=E,k=x)):b>=T?(A=u,I=f,V=M,O=x,u>=0?(C=p,y=c,P=m,N=h,F=g,D=_,Q=E,k=d):(C=c,y=p,P=h,N=m,F=_,D=g,Q=d,k=E)):(A=p,I=m,V=g,O=E,p>=0?(C=c,y=u,P=h,N=f,F=_,D=M,Q=d,k=x):(C=u,y=c,P=f,N=h,F=M,D=_,Q=x,k=d)),A===0)return null;const U=C/A,X=y/A,K=1/A,le=P-U*I,ue=N-X*I,we=F-U*V,Fe=D-X*V,ke=Q-U*O,Z=k-X*O,ee=ke*Fe-Z*we,me=le*Z-ue*ke,Ue=we*ue-Fe*le;if(r){if(ee<0||me<0||Ue<0)return null}else if((ee<0||me<0||Ue<0)&&(ee>0||me>0||Ue>0))return null;const _e=ee+me+Ue;if(_e===0)return null;const Be=K*(ee*I+me*V+Ue*O);return(_e>0?Be<0:Be>0)?null:this.at(Be/_e,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Or extends ns{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Er,this.combine=s_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wm=new At,Nr=new Hc,al=new To,Vm=new $,ol=new $,ll=new $,cl=new $,Wu=new $,ul=new $,jm=new $,dl=new $;class We extends Kt{constructor(e=new nn,n=new Or){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ul.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const p=o[c],h=s[c];p!==0&&(Wu.fromBufferAttribute(h,e),a?ul.addScaledVector(Wu,p):ul.addScaledVector(Wu.sub(n),p))}n.add(ul)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),al.copy(i.boundingSphere),al.applyMatrix4(s),Nr.copy(e.ray).recast(e.near),!(al.containsPoint(Nr.origin)===!1&&(Nr.intersectSphere(al,Vm)===null||Nr.origin.distanceToSquared(Vm)>(e.far-e.near)**2))&&(Wm.copy(s).invert(),Nr.copy(e.ray).applyMatrix4(Wm),!(i.boundingBox!==null&&Nr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Nr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,u=s.attributes.uv,p=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,M=f.length;_<M;_++){const g=f[_],d=a[g.materialIndex],x=Math.max(g.start,m.start),E=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let S=x,b=E;S<b;S+=3){const T=o.getX(S),C=o.getX(S+1),y=o.getX(S+2);r=fl(this,d,e,i,u,p,h,T,C,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let g=_,d=M;g<d;g+=3){const x=o.getX(g),E=o.getX(g+1),S=o.getX(g+2);r=fl(this,a,e,i,u,p,h,x,E,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,M=f.length;_<M;_++){const g=f[_],d=a[g.materialIndex],x=Math.max(g.start,m.start),E=Math.min(c.count,Math.min(g.start+g.count,m.start+m.count));for(let S=x,b=E;S<b;S+=3){const T=S,C=S+1,y=S+2;r=fl(this,d,e,i,u,p,h,T,C,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),M=Math.min(c.count,m.start+m.count);for(let g=_,d=M;g<d;g+=3){const x=g,E=g+1,S=g+2;r=fl(this,a,e,i,u,p,h,x,E,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function LM(t,e,n,i,r,s,a,o){let c;if(e.side===Cn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===Zr,o),c===null)return null;dl.copy(o),dl.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(dl);return u<n.near||u>n.far?null:{distance:u,point:dl.clone(),object:t}}function fl(t,e,n,i,r,s,a,o,c,u){t.getVertexPosition(o,ol),t.getVertexPosition(c,ll),t.getVertexPosition(u,cl);const p=LM(t,e,n,i,ol,ll,cl,jm);if(p){const h=new $;ri.getBarycoord(jm,ol,ll,cl,h),r&&(p.uv=ri.getInterpolatedAttribute(r,o,c,u,h,new je)),s&&(p.uv1=ri.getInterpolatedAttribute(s,o,c,u,h,new je)),a&&(p.normal=ri.getInterpolatedAttribute(a,o,c,u,h,new $),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const f={a:o,b:c,c:u,normal:new $,materialIndex:0};ri.getNormal(ol,ll,cl,f.normal),p.face=f,p.barycoord=h}return p}class UM extends vn{constructor(e=null,n=1,i=1,r,s,a,o,c,u=Qt,p=Qt,h,f){super(null,a,o,c,u,p,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Dr=new To,OM=new je(.5,.5),hl=new $;class Zh{constructor(e=new Li,n=new Li,i=new Li,r=new Li,s=new Li,a=new Li){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=_i,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],u=s[3],p=s[4],h=s[5],f=s[6],m=s[7],_=s[8],M=s[9],g=s[10],d=s[11],x=s[12],E=s[13],S=s[14],b=s[15];if(r[0].setComponents(u-a,m-p,d-_,b-x).normalize(),r[1].setComponents(u+a,m+p,d+_,b+x).normalize(),r[2].setComponents(u+o,m+h,d+M,b+E).normalize(),r[3].setComponents(u-o,m-h,d-M,b-E).normalize(),i)r[4].setComponents(c,f,g,S).normalize(),r[5].setComponents(u-c,m-f,d-g,b-S).normalize();else if(r[4].setComponents(u-c,m-f,d-g,b-S).normalize(),n===_i)r[5].setComponents(u+c,m+f,d+g,b+S).normalize();else if(n===xo)r[5].setComponents(c,f,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Dr)}intersectsSprite(e){Dr.center.set(0,0,0);const n=OM.distanceTo(e.center);return Dr.radius=.7071067811865476+n,Dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Dr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(hl.x=r.normal.x>0?e.max.x:e.min.x,hl.y=r.normal.y>0?e.max.y:e.min.y,hl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(hl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Jh extends ns{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const vc=new $,yc=new $,Xm=new At,Ca=new Hc,pl=new To,Vu=new $,$m=new $;class A_ extends Kt{constructor(e=new nn,n=new Jh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)vc.fromBufferAttribute(n,r-1),yc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=vc.distanceTo(yc);e.setAttribute("lineDistance",new Lt(i,1))}else Ve("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pl.copy(i.boundingSphere),pl.applyMatrix4(r),pl.radius+=s,e.ray.intersectsSphere(pl)===!1)return;Xm.copy(r).invert(),Ca.copy(e.ray).applyMatrix4(Xm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=this.isLineSegments?2:1,p=i.index,f=i.attributes.position;if(p!==null){const m=Math.max(0,a.start),_=Math.min(p.count,a.start+a.count);for(let M=m,g=_-1;M<g;M+=u){const d=p.getX(M),x=p.getX(M+1),E=ml(this,e,Ca,c,d,x,M);E&&n.push(E)}if(this.isLineLoop){const M=p.getX(_-1),g=p.getX(m),d=ml(this,e,Ca,c,M,g,_-1);d&&n.push(d)}}else{const m=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let M=m,g=_-1;M<g;M+=u){const d=ml(this,e,Ca,c,M,M+1,M);d&&n.push(d)}if(this.isLineLoop){const M=ml(this,e,Ca,c,_-1,m,_-1);M&&n.push(M)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ml(t,e,n,i,r,s,a){const o=t.geometry.attributes.position;if(vc.fromBufferAttribute(o,r),yc.fromBufferAttribute(o,s),n.distanceSqToSegment(vc,yc,Vu,$m)>i)return;Vu.applyMatrix4(t.matrixWorld);const u=e.ray.origin.distanceTo(Vu);if(!(u<e.near||u>e.far))return{distance:u,point:$m.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}const Ym=new $,qm=new $;class FM extends A_{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Ym.fromBufferAttribute(n,r),qm.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Ym.distanceTo(qm);e.setAttribute("lineDistance",new Lt(i,1))}else Ve("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class C_ extends ns{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Km=new At,Of=new Hc,gl=new To,xl=new $;class kM extends Kt{constructor(e=new nn,n=new C_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),gl.copy(i.boundingSphere),gl.applyMatrix4(r),gl.radius+=s,e.ray.intersectsSphere(gl)===!1)return;Km.copy(r).invert(),Of.copy(e.ray).applyMatrix4(Km);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=i.index,h=i.attributes.position;if(u!==null){const f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let _=f,M=m;_<M;_++){const g=u.getX(_);xl.fromBufferAttribute(h,g),Zm(xl,g,c,r,e,n,this)}}else{const f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let _=f,M=m;_<M;_++)xl.fromBufferAttribute(h,_),Zm(xl,_,c,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Zm(t,e,n,i,r,s,a){const o=Of.distanceSqToPoint(t);if(o<n){const c=new $;Of.closestPointToPoint(t,c),c.applyMatrix4(i);const u=r.ray.origin.distanceTo(c);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class R_ extends vn{constructor(e=[],n=Jr,i,r,s,a,o,c,u,p){super(e,n,i,r,s,a,o,c,u,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vo extends vn{constructor(e,n,i=Ei,r,s,a,o=Qt,c=Qt,u,p=Xi,h=1){if(p!==Xi&&p!==Gr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:h};super(f,r,s,a,o,c,p,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class zM extends vo{constructor(e,n=Ei,i=Jr,r,s,a=Qt,o=Qt,c,u=Xi){const p={width:e,height:e,depth:1},h=[p,p,p,p,p,p];super(e,e,n,i,r,s,a,o,c,u),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class P_ extends vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ft extends nn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],u=[],p=[],h=[];let f=0,m=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Lt(u,3)),this.setAttribute("normal",new Lt(p,3)),this.setAttribute("uv",new Lt(h,2));function _(M,g,d,x,E,S,b,T,C,y,A){const P=S/C,N=b/y,I=S/2,F=b/2,D=T/2,V=C+1,Q=y+1;let k=0,O=0;const U=new $;for(let X=0;X<Q;X++){const K=X*N-F;for(let le=0;le<V;le++){const ue=le*P-I;U[M]=ue*x,U[g]=K*E,U[d]=D,u.push(U.x,U.y,U.z),U[M]=0,U[g]=0,U[d]=T>0?1:-1,p.push(U.x,U.y,U.z),h.push(le/C),h.push(1-X/y),k+=1}}for(let X=0;X<y;X++)for(let K=0;K<C;K++){const le=f+K+V*X,ue=f+K+V*(X+1),we=f+(K+1)+V*(X+1),Fe=f+(K+1)+V*X;c.push(le,ue,Fe),c.push(ue,we,Fe),O+=6}o.addGroup(m,O,A),m+=O,f+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ft(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Qh extends nn{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],a=[],o=[],c=[],u=new $,p=new je;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=n;h++,f+=3){const m=i+h/n*r;u.x=e*Math.cos(m),u.y=e*Math.sin(m),a.push(u.x,u.y,u.z),o.push(0,0,1),p.x=(a[f]/e+1)/2,p.y=(a[f+1]/e+1)/2,c.push(p.x,p.y)}for(let h=1;h<=n;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Lt(a,3)),this.setAttribute("normal",new Lt(o,3)),this.setAttribute("uv",new Lt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Gt extends nn{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const u=this;r=Math.floor(r),s=Math.floor(s);const p=[],h=[],f=[],m=[];let _=0;const M=[],g=i/2;let d=0;x(),a===!1&&(e>0&&E(!0),n>0&&E(!1)),this.setIndex(p),this.setAttribute("position",new Lt(h,3)),this.setAttribute("normal",new Lt(f,3)),this.setAttribute("uv",new Lt(m,2));function x(){const S=new $,b=new $;let T=0;const C=(n-e)/i;for(let y=0;y<=s;y++){const A=[],P=y/s,N=P*(n-e)+e;for(let I=0;I<=r;I++){const F=I/r,D=F*c+o,V=Math.sin(D),Q=Math.cos(D);b.x=N*V,b.y=-P*i+g,b.z=N*Q,h.push(b.x,b.y,b.z),S.set(V,C,Q).normalize(),f.push(S.x,S.y,S.z),m.push(F,1-P),A.push(_++)}M.push(A)}for(let y=0;y<r;y++)for(let A=0;A<s;A++){const P=M[A][y],N=M[A+1][y],I=M[A+1][y+1],F=M[A][y+1];(e>0||A!==0)&&(p.push(P,N,F),T+=3),(n>0||A!==s-1)&&(p.push(N,I,F),T+=3)}u.addGroup(d,T,0),d+=T}function E(S){const b=_,T=new je,C=new $;let y=0;const A=S===!0?e:n,P=S===!0?1:-1;for(let I=1;I<=r;I++)h.push(0,g*P,0),f.push(0,P,0),m.push(.5,.5),_++;const N=_;for(let I=0;I<=r;I++){const D=I/r*c+o,V=Math.cos(D),Q=Math.sin(D);C.x=A*Q,C.y=g*P,C.z=A*V,h.push(C.x,C.y,C.z),f.push(0,P,0),T.x=V*.5+.5,T.y=Q*.5*P+.5,m.push(T.x,T.y),_++}for(let I=0;I<r;I++){const F=b+I,D=N+I;S===!0?p.push(D,D+1,F):p.push(D+1,D,F),y+=3}u.addGroup(d,y,S===!0?1:2),d+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Sc extends Gt{constructor(e=1,n=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,n,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Sc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ao extends nn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),c=Math.floor(r),u=o+1,p=c+1,h=e/o,f=n/c,m=[],_=[],M=[],g=[];for(let d=0;d<p;d++){const x=d*f-a;for(let E=0;E<u;E++){const S=E*h-s;_.push(S,-x,0),M.push(0,0,1),g.push(E/o),g.push(1-d/c)}}for(let d=0;d<c;d++)for(let x=0;x<o;x++){const E=x+u*d,S=x+u*(d+1),b=x+1+u*(d+1),T=x+1+u*d;m.push(E,S,T),m.push(S,b,T)}this.setIndex(m),this.setAttribute("position",new Lt(_,3)),this.setAttribute("normal",new Lt(M,3)),this.setAttribute("uv",new Lt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ao(e.width,e.height,e.widthSegments,e.heightSegments)}}class ep extends nn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let u=0;const p=[],h=new $,f=new $,m=[],_=[],M=[],g=[];for(let d=0;d<=i;d++){const x=[],E=d/i,S=a+E*o,b=e*Math.cos(S),T=Math.sqrt(e*e-b*b);let C=0;d===0&&a===0?C=.5/n:d===i&&c===Math.PI&&(C=-.5/n);for(let y=0;y<=n;y++){const A=y/n,P=r+A*s;h.x=-T*Math.cos(P),h.y=b,h.z=T*Math.sin(P),_.push(h.x,h.y,h.z),f.copy(h).normalize(),M.push(f.x,f.y,f.z),g.push(A+C,1-E),x.push(u++)}p.push(x)}for(let d=0;d<i;d++)for(let x=0;x<n;x++){const E=p[d][x+1],S=p[d][x],b=p[d+1][x],T=p[d+1][x+1];(d!==0||a>0)&&m.push(E,S,T),(d!==i-1||c<Math.PI)&&m.push(S,b,T)}this.setIndex(m),this.setAttribute("position",new Lt(_,3)),this.setAttribute("normal",new Lt(M,3)),this.setAttribute("uv",new Lt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ep(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function sa(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(Jm(r))r.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Jm(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function mn(t){const e={};for(let n=0;n<t.length;n++){const i=sa(t[n]);for(const r in i)e[r]=i[r]}return e}function Jm(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function BM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function N_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const HM={clone:sa,merge:mn};var GM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,WM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wi extends ns{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=GM,this.fragmentShader=WM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sa(e.uniforms),this.uniformsGroups=BM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new et().setHex(r.value);break;case"v2":this.uniforms[i].value=new je().fromArray(r.value);break;case"v3":this.uniforms[i].value=new $().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Rt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ke().fromArray(r.value);break;case"m4":this.uniforms[i].value=new At().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class VM extends wi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ot extends ns{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uf,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Er,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qm extends Ot{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new et(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new et(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new et(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class jM extends ns{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=k1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class XM extends ns{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class tp extends Kt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const ju=new At,e0=new $,t0=new $;class D_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zh,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;e0.setFromMatrixPosition(e.matrixWorld),n.position.copy(e0),t0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(t0),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,r){ju.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(ju,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,c=r?r.x/s.x:0,u=r?r.y/s.y:0;e.coordinateSystem===xo||e.reversedDepth?n.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+u,0,0,1,0,0,0,0,1):n.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+u,0,0,.5,.5,0,0,0,1),n.multiply(ju)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const _l=new $,vl=new Mr,fi=new $;class I_ extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=_i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(_l,vl,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_l,vl,fi.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(_l,vl,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_l,vl,fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ir=new $,n0=new je,i0=new je;class Dn extends I_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=_o*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($a*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _o*2*Math.atan(Math.tan($a*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ir.x,ir.y).multiplyScalar(-e/ir.z),ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ir.x,ir.y).multiplyScalar(-e/ir.z)}getViewSize(e,n){return this.getViewBounds(e,n0,i0),n.subVectors(i0,n0)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan($a*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,n-=a.offsetY*i/u,r*=a.width/c,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class $M extends D_{constructor(){super(new Dn(90,1,.5,500)),this.isPointLightShadow=!0}}class YM extends tp{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new $M}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class np extends I_{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=p*this.view.offsetY,c=o-p*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class qM extends D_{constructor(){super(new np(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class r0 extends tp{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.shadow=new qM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class KM extends tp{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ss=-90,Ms=1;class ZM extends Kt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Dn(Ss,Ms,e,n);r.layers=this.layers,this.add(r);const s=new Dn(Ss,Ms,e,n);s.layers=this.layers,this.add(s);const a=new Dn(Ss,Ms,e,n);a.layers=this.layers,this.add(a);const o=new Dn(Ss,Ms,e,n);o.layers=this.layers,this.add(o);const c=new Dn(Ss,Ms,e,n);c.layers=this.layers,this.add(c);const u=new Dn(Ss,Ms,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,c]=n;for(const u of n)this.remove(u);if(e===_i)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===xo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,u,p]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),e.setRenderTarget(h,f,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class JM extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class s0{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=nt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(nt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const lp=class lp{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};lp.prototype.isMatrix2=!0;let a0=lp;class L_ extends FM{constructor(e=10,n=10,i=4473924,r=8947848){i=new et(i),r=new et(r);const s=n/2,a=e/n,o=e/2,c=[],u=[];for(let f=0,m=0,_=-o;f<=n;f++,_+=a){c.push(-o,0,_,o,0,_),c.push(_,0,-o,_,0,o);const M=f===s?i:r;M.toArray(u,m),m+=3,M.toArray(u,m),m+=3,M.toArray(u,m),m+=3,M.toArray(u,m),m+=3}const p=new nn;p.setAttribute("position",new Lt(c,3)),p.setAttribute("color",new Lt(u,3));const h=new Jh({vertexColors:!0,toneMapped:!1});super(p,h),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class QM extends Ar{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function o0(t,e,n,i){const r=eE(i);switch(n){case __:return t*e;case y_:return t*e/r.components*r.byteLength;case Vh:return t*e/r.components*r.byteLength;case Qr:return t*e*2/r.components*r.byteLength;case jh:return t*e*2/r.components*r.byteLength;case v_:return t*e*3/r.components*r.byteLength;case si:return t*e*4/r.components*r.byteLength;case Xh:return t*e*4/r.components*r.byteLength;case Fl:case kl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case zl:case Bl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case af:case lf:return Math.max(t,16)*Math.max(e,8)/4;case sf:case of:return Math.max(t,8)*Math.max(e,8)/2;case cf:case uf:case ff:case hf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case df:case pc:case pf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case mf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case gf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case xf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case _f:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case vf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case yf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Sf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Mf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Ef:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case bf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case wf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Tf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Af:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Cf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Rf:case Pf:case Nf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Df:case If:return Math.ceil(t/4)*Math.ceil(e/4)*8;case mc:case Lf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function eE(t){switch(t){case In:case p_:return{byteLength:1,components:1};case mo:case m_:case bi:return{byteLength:2,components:1};case Gh:case Wh:return{byteLength:2,components:4};case Ei:case Hh:case xi:return{byteLength:4,components:1};case g_:case x_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bh}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function U_(){let t=null,e=!1,n=null,i=null;function r(s,a){i=t.requestAnimationFrame(r),n(s,a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function tE(t){const e=new WeakMap;function n(o,c){const u=o.array,p=o.usage,h=u.byteLength,f=t.createBuffer();t.bindBuffer(c,f),t.bufferData(c,u,p),o.onUploadCallback();let m;if(u instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)m=t.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=t.SHORT;else if(u instanceof Uint32Array)m=t.UNSIGNED_INT;else if(u instanceof Int32Array)m=t.INT;else if(u instanceof Int8Array)m=t.BYTE;else if(u instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,c,u){const p=c.array,h=c.updateRanges;if(t.bindBuffer(u,o),h.length===0)t.bufferSubData(u,0,p);else{h.sort((m,_)=>m.start-_.start);let f=0;for(let m=1;m<h.length;m++){const _=h[f],M=h[m];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++f,h[f]=M)}h.length=f+1;for(let m=0,_=h.length;m<_;m++){const M=h[m];t.bufferSubData(u,M.start*p.BYTES_PER_ELEMENT,p,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(t.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const p=e.get(o);(!p||p.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,n(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,c),u.version=o.version}}return{get:r,remove:s,update:a}}var nE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,iE=`#ifdef USE_ALPHAHASH
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
#endif`,rE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,oE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lE=`#ifdef USE_AOMAP
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
#endif`,cE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uE=`#ifdef USE_BATCHING
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
#endif`,dE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mE=`#ifdef USE_IRIDESCENCE
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
#endif`,gE=`#ifdef USE_BUMPMAP
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
#endif`,xE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_E=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,SE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ME=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,EE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,bE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,wE=`#define PI 3.141592653589793
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
} // validated`,TE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,AE=`vec3 transformedNormal = objectNormal;
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
#endif`,CE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,RE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,PE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,NE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,DE="gl_FragColor = linearToOutputTexel( gl_FragColor );",IE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,LE=`#ifdef USE_ENVMAP
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
#endif`,UE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,OE=`#ifdef USE_ENVMAP
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
#endif`,FE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kE=`#ifdef USE_ENVMAP
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
#endif`,zE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,BE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,HE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,GE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,WE=`#ifdef USE_GRADIENTMAP
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
}`,VE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,XE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$E=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,YE=`#ifdef USE_ENVMAP
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
#endif`,qE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,KE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ZE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,JE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,QE=`PhysicalMaterial material;
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
#endif`,eb=`uniform sampler2D dfgLUT;
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
}`,tb=`
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
#endif`,nb=`#if defined( RE_IndirectDiffuse )
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
#endif`,ib=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rb=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,sb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ab=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ob=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ub=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,db=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fb=`#if defined( USE_POINTS_UV )
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
#endif`,hb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_b=`#ifdef USE_MORPHTARGETS
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
#endif`,vb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Sb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,wb=`#ifdef USE_NORMALMAP
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
#endif`,Tb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ab=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Db=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ib=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ub=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ob=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hb=`float getShadowMask() {
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
}`,Gb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wb=`#ifdef USE_SKINNING
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
#endif`,Vb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jb=`#ifdef USE_SKINNING
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
#endif`,Xb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$b=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kb=`#ifdef USE_TRANSMISSION
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
#endif`,Zb=`#ifdef USE_TRANSMISSION
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
#endif`,Jb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ew=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iw=`uniform sampler2D t2D;
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
}`,rw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,aw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ow=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lw=`#include <common>
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
}`,cw=`#if DEPTH_PACKING == 3200
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
}`,uw=`#define DISTANCE
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
}`,dw=`#define DISTANCE
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
}`,fw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pw=`uniform float scale;
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
}`,mw=`uniform vec3 diffuse;
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
}`,gw=`#include <common>
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
}`,xw=`uniform vec3 diffuse;
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
}`,_w=`#define LAMBERT
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
}`,vw=`#define LAMBERT
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
}`,yw=`#define MATCAP
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
}`,Sw=`#define MATCAP
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
}`,Mw=`#define NORMAL
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
}`,Ew=`#define NORMAL
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
}`,bw=`#define PHONG
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
}`,ww=`#define PHONG
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
}`,Tw=`#define STANDARD
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
}`,Aw=`#define STANDARD
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
}`,Cw=`#define TOON
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
}`,Rw=`#define TOON
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
}`,Pw=`uniform float size;
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
}`,Nw=`uniform vec3 diffuse;
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
}`,Dw=`#include <common>
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
}`,Iw=`uniform vec3 color;
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
}`,Lw=`uniform float rotation;
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
}`,Uw=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:nE,alphahash_pars_fragment:iE,alphamap_fragment:rE,alphamap_pars_fragment:sE,alphatest_fragment:aE,alphatest_pars_fragment:oE,aomap_fragment:lE,aomap_pars_fragment:cE,batching_pars_vertex:uE,batching_vertex:dE,begin_vertex:fE,beginnormal_vertex:hE,bsdfs:pE,iridescence_fragment:mE,bumpmap_pars_fragment:gE,clipping_planes_fragment:xE,clipping_planes_pars_fragment:_E,clipping_planes_pars_vertex:vE,clipping_planes_vertex:yE,color_fragment:SE,color_pars_fragment:ME,color_pars_vertex:EE,color_vertex:bE,common:wE,cube_uv_reflection_fragment:TE,defaultnormal_vertex:AE,displacementmap_pars_vertex:CE,displacementmap_vertex:RE,emissivemap_fragment:PE,emissivemap_pars_fragment:NE,colorspace_fragment:DE,colorspace_pars_fragment:IE,envmap_fragment:LE,envmap_common_pars_fragment:UE,envmap_pars_fragment:OE,envmap_pars_vertex:FE,envmap_physical_pars_fragment:YE,envmap_vertex:kE,fog_vertex:zE,fog_pars_vertex:BE,fog_fragment:HE,fog_pars_fragment:GE,gradientmap_pars_fragment:WE,lightmap_pars_fragment:VE,lights_lambert_fragment:jE,lights_lambert_pars_fragment:XE,lights_pars_begin:$E,lights_toon_fragment:qE,lights_toon_pars_fragment:KE,lights_phong_fragment:ZE,lights_phong_pars_fragment:JE,lights_physical_fragment:QE,lights_physical_pars_fragment:eb,lights_fragment_begin:tb,lights_fragment_maps:nb,lights_fragment_end:ib,lightprobes_pars_fragment:rb,logdepthbuf_fragment:sb,logdepthbuf_pars_fragment:ab,logdepthbuf_pars_vertex:ob,logdepthbuf_vertex:lb,map_fragment:cb,map_pars_fragment:ub,map_particle_fragment:db,map_particle_pars_fragment:fb,metalnessmap_fragment:hb,metalnessmap_pars_fragment:pb,morphinstance_vertex:mb,morphcolor_vertex:gb,morphnormal_vertex:xb,morphtarget_pars_vertex:_b,morphtarget_vertex:vb,normal_fragment_begin:yb,normal_fragment_maps:Sb,normal_pars_fragment:Mb,normal_pars_vertex:Eb,normal_vertex:bb,normalmap_pars_fragment:wb,clearcoat_normal_fragment_begin:Tb,clearcoat_normal_fragment_maps:Ab,clearcoat_pars_fragment:Cb,iridescence_pars_fragment:Rb,opaque_fragment:Pb,packing:Nb,premultiplied_alpha_fragment:Db,project_vertex:Ib,dithering_fragment:Lb,dithering_pars_fragment:Ub,roughnessmap_fragment:Ob,roughnessmap_pars_fragment:Fb,shadowmap_pars_fragment:kb,shadowmap_pars_vertex:zb,shadowmap_vertex:Bb,shadowmask_pars_fragment:Hb,skinbase_vertex:Gb,skinning_pars_vertex:Wb,skinning_vertex:Vb,skinnormal_vertex:jb,specularmap_fragment:Xb,specularmap_pars_fragment:$b,tonemapping_fragment:Yb,tonemapping_pars_fragment:qb,transmission_fragment:Kb,transmission_pars_fragment:Zb,uv_pars_fragment:Jb,uv_pars_vertex:Qb,uv_vertex:ew,worldpos_vertex:tw,background_vert:nw,background_frag:iw,backgroundCube_vert:rw,backgroundCube_frag:sw,cube_vert:aw,cube_frag:ow,depth_vert:lw,depth_frag:cw,distance_vert:uw,distance_frag:dw,equirect_vert:fw,equirect_frag:hw,linedashed_vert:pw,linedashed_frag:mw,meshbasic_vert:gw,meshbasic_frag:xw,meshlambert_vert:_w,meshlambert_frag:vw,meshmatcap_vert:yw,meshmatcap_frag:Sw,meshnormal_vert:Mw,meshnormal_frag:Ew,meshphong_vert:bw,meshphong_frag:ww,meshphysical_vert:Tw,meshphysical_frag:Aw,meshtoon_vert:Cw,meshtoon_frag:Rw,points_vert:Pw,points_frag:Nw,shadow_vert:Dw,shadow_frag:Iw,sprite_vert:Lw,sprite_frag:Uw},Se={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},mi={basic:{uniforms:mn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:mn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new et(0)},envMapIntensity:{value:1}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:mn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:mn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:mn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new et(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:mn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:mn([Se.points,Se.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:mn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:mn([Se.common,Se.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:mn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:mn([Se.sprite,Se.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:mn([Se.common,Se.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:mn([Se.lights,Se.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};mi.physical={uniforms:mn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const yl={r:0,b:0,g:0},Ow=new At,O_=new Ke;O_.set(-1,0,0,0,1,0,0,0,1);function Fw(t,e,n,i,r,s){const a=new et(0);let o=r===!0?0:1,c,u,p=null,h=0,f=null;function m(x){let E=x.isScene===!0?x.background:null;if(E&&E.isTexture){const S=x.backgroundBlurriness>0;E=e.get(E,S)}return E}function _(x){let E=!1;const S=m(x);S===null?g(a,o):S&&S.isColor&&(g(S,1),E=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function M(x,E){const S=m(E);S&&(S.isCubeTexture||S.mapping===Bc)?(u===void 0&&(u=new We(new Ft(1,1,1),new wi({name:"BackgroundCubeMaterial",uniforms:sa(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ow.makeRotationFromEuler(E.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(O_),u.material.toneMapped=rt.getTransfer(S.colorSpace)!==gt,(p!==S||h!==S.version||f!==t.toneMapping)&&(u.material.needsUpdate=!0,p=S,h=S.version,f=t.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new We(new Ao(2,2),new wi({name:"BackgroundMaterial",uniforms:sa(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:Zr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=rt.getTransfer(S.colorSpace)!==gt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(p!==S||h!==S.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,p=S,h=S.version,f=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function g(x,E){x.getRGB(yl,N_(t)),n.buffers.color.setClear(yl.r,yl.g,yl.b,E,s)}function d(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,E=1){a.set(x),o=E,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,g(a,o)},render:_,addToRenderList:M,dispose:d}}function kw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(N,I,F,D,V){let Q=!1;const k=h(N,D,F,I);s!==k&&(s=k,u(s.object)),Q=m(N,D,F,V),Q&&_(N,D,F,V),V!==null&&e.update(V,t.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,S(N,I,F,D),V!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function c(){return t.createVertexArray()}function u(N){return t.bindVertexArray(N)}function p(N){return t.deleteVertexArray(N)}function h(N,I,F,D){const V=D.wireframe===!0;let Q=i[I.id];Q===void 0&&(Q={},i[I.id]=Q);const k=N.isInstancedMesh===!0?N.id:0;let O=Q[k];O===void 0&&(O={},Q[k]=O);let U=O[F.id];U===void 0&&(U={},O[F.id]=U);let X=U[V];return X===void 0&&(X=f(c()),U[V]=X),X}function f(N){const I=[],F=[],D=[];for(let V=0;V<n;V++)I[V]=0,F[V]=0,D[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:F,attributeDivisors:D,object:N,attributes:{},index:null}}function m(N,I,F,D){const V=s.attributes,Q=I.attributes;let k=0;const O=F.getAttributes();for(const U in O)if(O[U].location>=0){const K=V[U];let le=Q[U];if(le===void 0&&(U==="instanceMatrix"&&N.instanceMatrix&&(le=N.instanceMatrix),U==="instanceColor"&&N.instanceColor&&(le=N.instanceColor)),K===void 0||K.attribute!==le||le&&K.data!==le.data)return!0;k++}return s.attributesNum!==k||s.index!==D}function _(N,I,F,D){const V={},Q=I.attributes;let k=0;const O=F.getAttributes();for(const U in O)if(O[U].location>=0){let K=Q[U];K===void 0&&(U==="instanceMatrix"&&N.instanceMatrix&&(K=N.instanceMatrix),U==="instanceColor"&&N.instanceColor&&(K=N.instanceColor));const le={};le.attribute=K,K&&K.data&&(le.data=K.data),V[U]=le,k++}s.attributes=V,s.attributesNum=k,s.index=D}function M(){const N=s.newAttributes;for(let I=0,F=N.length;I<F;I++)N[I]=0}function g(N){d(N,0)}function d(N,I){const F=s.newAttributes,D=s.enabledAttributes,V=s.attributeDivisors;F[N]=1,D[N]===0&&(t.enableVertexAttribArray(N),D[N]=1),V[N]!==I&&(t.vertexAttribDivisor(N,I),V[N]=I)}function x(){const N=s.newAttributes,I=s.enabledAttributes;for(let F=0,D=I.length;F<D;F++)I[F]!==N[F]&&(t.disableVertexAttribArray(F),I[F]=0)}function E(N,I,F,D,V,Q,k){k===!0?t.vertexAttribIPointer(N,I,F,V,Q):t.vertexAttribPointer(N,I,F,D,V,Q)}function S(N,I,F,D){M();const V=D.attributes,Q=F.getAttributes(),k=I.defaultAttributeValues;for(const O in Q){const U=Q[O];if(U.location>=0){let X=V[O];if(X===void 0&&(O==="instanceMatrix"&&N.instanceMatrix&&(X=N.instanceMatrix),O==="instanceColor"&&N.instanceColor&&(X=N.instanceColor)),X!==void 0){const K=X.normalized,le=X.itemSize,ue=e.get(X);if(ue===void 0)continue;const we=ue.buffer,Fe=ue.type,ke=ue.bytesPerElement,Z=Fe===t.INT||Fe===t.UNSIGNED_INT||X.gpuType===Hh;if(X.isInterleavedBufferAttribute){const ee=X.data,me=ee.stride,Ue=X.offset;if(ee.isInstancedInterleavedBuffer){for(let _e=0;_e<U.locationSize;_e++)d(U.location+_e,ee.meshPerAttribute);N.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let _e=0;_e<U.locationSize;_e++)g(U.location+_e);t.bindBuffer(t.ARRAY_BUFFER,we);for(let _e=0;_e<U.locationSize;_e++)E(U.location+_e,le/U.locationSize,Fe,K,me*ke,(Ue+le/U.locationSize*_e)*ke,Z)}else{if(X.isInstancedBufferAttribute){for(let ee=0;ee<U.locationSize;ee++)d(U.location+ee,X.meshPerAttribute);N.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ee=0;ee<U.locationSize;ee++)g(U.location+ee);t.bindBuffer(t.ARRAY_BUFFER,we);for(let ee=0;ee<U.locationSize;ee++)E(U.location+ee,le/U.locationSize,Fe,K,le*ke,le/U.locationSize*ee*ke,Z)}}else if(k!==void 0){const K=k[O];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(U.location,K);break;case 3:t.vertexAttrib3fv(U.location,K);break;case 4:t.vertexAttrib4fv(U.location,K);break;default:t.vertexAttrib1fv(U.location,K)}}}}x()}function b(){A();for(const N in i){const I=i[N];for(const F in I){const D=I[F];for(const V in D){const Q=D[V];for(const k in Q)p(Q[k].object),delete Q[k];delete D[V]}}delete i[N]}}function T(N){if(i[N.id]===void 0)return;const I=i[N.id];for(const F in I){const D=I[F];for(const V in D){const Q=D[V];for(const k in Q)p(Q[k].object),delete Q[k];delete D[V]}}delete i[N.id]}function C(N){for(const I in i){const F=i[I];for(const D in F){const V=F[D];if(V[N.id]===void 0)continue;const Q=V[N.id];for(const k in Q)p(Q[k].object),delete Q[k];delete V[N.id]}}}function y(N){for(const I in i){const F=i[I],D=N.isInstancedMesh===!0?N.id:0,V=F[D];if(V!==void 0){for(const Q in V){const k=V[Q];for(const O in k)p(k[O].object),delete k[O];delete V[Q]}delete F[D],Object.keys(F).length===0&&delete i[I]}}}function A(){P(),a=!0,s!==r&&(s=r,u(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:A,resetDefaultState:P,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:C,initAttributes:M,enableAttribute:g,disableUnusedAttributes:x}}function zw(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function a(c,u,p){p!==0&&(t.drawArraysInstanced(i,c,u,p),n.update(u,i,p))}function o(c,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,p);let f=0;for(let m=0;m<p;m++)f+=u[m];n.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Bw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==si&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const y=C===bi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==In&&C!==xi&&!y&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function c(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const p=c(u);p!==u&&(Ve("WebGLRenderer:",u,"not supported, using",p,"instead."),u=p);const h=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&f===!1&&Ve("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),E=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:x,maxVaryings:E,maxFragmentUniforms:S,maxSamples:b,samples:T}}function Hw(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Li,o=new Ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||r;return r=f,i=h.length,m},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=p(h,f,0)},this.setState=function(h,f,m){const _=h.clippingPlanes,M=h.clipIntersection,g=h.clipShadows,d=t.get(h);if(!r||_===null||_.length===0||s&&!g)s?p(null):u();else{const x=s?0:i,E=x*4;let S=d.clippingState||null;c.value=S,S=p(_,f,E,m);for(let b=0;b!==E;++b)S[b]=n[b];d.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=x}};function u(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(h,f,m,_){const M=h!==null?h.length:0;let g=null;if(M!==0){if(g=c.value,_!==!0||g===null){const d=m+M*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<d)&&(g=new Float32Array(d));for(let E=0,S=m;E!==M;++E,S+=4)a.copy(h[E]).applyMatrix4(x,o),a.normal.toArray(g,S),g[S+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,g}}const Bs=4,Gw=6,Ww=20,Vw=256,Ra=new np,l0=new et;let Xu=null,$u=0,Yu=0,qu=!1;const jw=new $,Ir=new $;class c0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=jw}=s;Xu=this._renderer.getRenderTarget(),$u=this._renderer.getActiveCubeFace(),Yu=this._renderer.getActiveMipmapLevel(),qu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=f0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=d0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Xu,$u,Yu),this._renderer.xr.enabled=qu,e.scissorTest=!1,Es(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Jr||e.mapping===ra?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xu=this._renderer.getRenderTarget(),$u=this._renderer.getActiveCubeFace(),Yu=this._renderer.getActiveMipmapLevel(),qu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:un,minFilter:un,generateMipmaps:!1,type:bi,format:si,colorSpace:gc,depthBuffer:!1},r=u0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=u0(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Xw(s)),this._blurMaterial=Yw(s,e,n),this._ggxMaterial=$w(s,e,n)}return r}_compileMaterial(e){const n=new We(new nn,e);this._renderer.compile(n,Ra)}_sceneToCubeUV(e,n,i,r,s){const c=new Dn(90,1,n,i),u=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,m=h.toneMapping;h.getClearColor(l0),h.toneMapping=Si,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new We(new Ft,new Or({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,g=M.material;let d=!1;const x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,d=!0):(g.color.copy(l0),d=!0);for(let E=0;E<6;E++){const S=E%3;S===0?(c.up.set(0,u[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+p[E],s.y,s.z)):S===1?(c.up.set(0,0,u[E]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+p[E],s.z)):(c.up.set(0,u[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+p[E]));const b=this._cubeSize;Es(r,S*b,E>2?b:0,b,b),h.setRenderTarget(r),d&&h.render(M,c),h.render(e,c)}h.toneMapping=m,h.autoClear=f,e.background=x}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Jr||e.mapping===ra;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=f0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=d0());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Es(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(a,Ra)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,u=i/(this._lodMeshes.length-1),p=n/(this._lodMeshes.length-1),h=Math.sqrt(u*u-p*p),f=u*1.25,m=h*f,{_lodMax:_}=this,M=this._sizeLods[i],g=3*M*(i>_-Bs?i-_+Bs:0),d=4*(this._cubeSize-M);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=_-n,Es(s,g,d,3*M,2*M),r.setRenderTarget(s),r.render(o,Ra),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=_-i,Es(e,g,d,3*M,2*M),r.setRenderTarget(e),r.render(o,Ra)}_blur(e,n,i,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,n,i,a),this._blurPass(s,e,i,i,a)}_blurPass(e,n,i,r,s){const a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[r];c.material=o;const u=o.uniforms;u.envMap.value=e.texture,u.sigma.value=s,u.mipInt.value=this._lodMax-i;const p=this._sizeLods[r],h=3*p*(r>this._lodMax-Bs?r-this._lodMax+Bs:0),f=4*(this._cubeSize-p);Es(n,h,f,3*p,2*p),a.setRenderTarget(n),a.render(c,Ra)}}function Xw(t){const e=[],n=[];let i=t;const r=t-Bs+1+Gw;for(let s=0;s<r;s++){const a=Math.pow(2,i);e.push(a);const o=1/(a-2),c=-o,u=1+o,p=[c,c,u,c,u,u,c,c,u,u,c,u],h=6,f=6,m=3,_=new Float32Array(m*f*h),M=new Float32Array(m*f*h);for(let d=0;d<h;d++){const x=d%3*2/3-1,E=d>2?0:-1,S=[x,E,0,x+2/3,E,0,x+2/3,E+1,0,x,E,0,x+2/3,E+1,0,x,E+1,0];_.set(S,m*f*d);for(let b=0;b<f;b++){const T=p[b*2]*2-1,C=p[b*2+1]*2-1;d===0?Ir.set(1,C,T):d===1?Ir.set(-T,1,-C):d===2?Ir.set(-T,C,1):d===3?Ir.set(-1,C,-T):d===4?Ir.set(-T,-1,C):Ir.set(T,C,-1),Ir.toArray(M,(d*f+b)*m)}}const g=new nn;g.setAttribute("position",new Mi(_,m)),g.setAttribute("outputDirection",new Mi(M,m)),n.push(new We(g,null)),i>Bs&&i--}return{lodMeshes:n,sizeLods:e}}function u0(t,e,n){const i=new li(t,e,n);return i.texture.mapping=Bc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Es(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function $w(t,e,n){return new wi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Vw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Yw(t,e,n){return new wi({name:"SphericalGaussianBlur",defines:{SAMPLES:Ww,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function d0(){return new wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function f0(){return new wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Gc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class F_ extends li{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new R_(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ft(5,5,5),s=new wi({name:"CubemapFromEquirect",uniforms:sa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Cn,blending:Bi});s.uniforms.tEquirect.value=n;const a=new We(r,s),o=n.minFilter;return n.minFilter===Hr&&(n.minFilter=un),new ZM(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function qw(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,m=!1){return f==null?null:m?a(f):s(f)}function s(f){if(f&&f.isTexture){const m=f.mapping;if(m===yu||m===Su)if(e.has(f)){const _=e.get(f).texture;return o(_,f.mapping)}else{const _=f.image;if(_&&_.height>0){const M=new F_(_.height);return M.fromEquirectangularTexture(t,f),e.set(f,M),f.addEventListener("dispose",u),o(M.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const m=f.mapping,_=m===yu||m===Su,M=m===Jr||m===ra;if(_||M){let g=n.get(f);const d=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return i===null&&(i=new c0(t)),g=_?i.fromEquirectangular(f,g):i.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,n.set(f,g),g.texture;if(g!==void 0)return g.texture;{const x=f.image;return _&&x&&x.height>0||M&&x&&c(x)?(i===null&&(i=new c0(t)),g=_?i.fromEquirectangular(f):i.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,n.set(f,g),f.addEventListener("dispose",p),g.texture):null}}}return f}function o(f,m){return m===yu?f.mapping=Jr:m===Su&&(f.mapping=ra),f}function c(f){let m=0;const _=6;for(let M=0;M<_;M++)f[M]!==void 0&&m++;return m===_}function u(f){const m=f.target;m.removeEventListener("dispose",u);const _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function p(f){const m=f.target;m.removeEventListener("dispose",p);const _=n.get(m);_!==void 0&&(n.delete(m),_.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function Kw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ys("WebGLRenderer: "+i+" extension not supported."),r}}}function Zw(t,e,n,i){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function c(h){const f=h.attributes;for(const m in f)e.update(f[m],t.ARRAY_BUFFER)}function u(h){const f=[],m=h.index,_=h.attributes.position;let M=0;if(_===void 0)return;if(m!==null){const x=m.array;M=m.version;for(let E=0,S=x.length;E<S;E+=3){const b=x[E+0],T=x[E+1],C=x[E+2];f.push(b,T,T,C,C,b)}}else{const x=_.array;M=_.version;for(let E=0,S=x.length/3-1;E<S;E+=3){const b=E+0,T=E+1,C=E+2;f.push(b,T,T,C,C,b)}}const g=new(_.count>=65535?T_:w_)(f,1);g.version=M;const d=s.get(h);d&&e.remove(d),s.set(h,g)}function p(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&u(h)}else u(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:p}}function Jw(t,e,n){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function c(h,f){t.drawElements(i,f,s,h*a),n.update(f,i,1)}function u(h,f,m){m!==0&&(t.drawElementsInstanced(i,f,s,h*a,m),n.update(f,i,m))}function p(h,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,h,0,m);let M=0;for(let g=0;g<m;g++)M+=f[g];n.update(M,i,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=p}function Qw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:dt("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function eT(t,e,n){const i=new WeakMap,r=new Rt;function s(a,o,c){const u=a.morphTargetInfluences,p=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=p!==void 0?p.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let P=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",P)};var m=P;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let S=0;_===!0&&(S=1),M===!0&&(S=2),g===!0&&(S=3);let b=o.attributes.position.count*S,T=1;b>e.maxTextureSize&&(T=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const C=new Float32Array(b*T*4*h),y=new M_(C,b,T,h);y.type=xi,y.needsUpdate=!0;const A=S*4;for(let N=0;N<h;N++){const I=d[N],F=x[N],D=E[N],V=b*T*4*N;for(let Q=0;Q<I.count;Q++){const k=Q*A;_===!0&&(r.fromBufferAttribute(I,Q),C[V+k+0]=r.x,C[V+k+1]=r.y,C[V+k+2]=r.z,C[V+k+3]=0),M===!0&&(r.fromBufferAttribute(F,Q),C[V+k+4]=r.x,C[V+k+5]=r.y,C[V+k+6]=r.z,C[V+k+7]=0),g===!0&&(r.fromBufferAttribute(D,Q),C[V+k+8]=r.x,C[V+k+9]=r.y,C[V+k+10]=r.z,C[V+k+11]=D.itemSize===4?r.w:1)}}f={count:h,texture:y,size:new je(b,T)},i.set(o,f),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let g=0;g<u.length;g++)_+=u[g];const M=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(t,"morphTargetBaseInfluence",M),c.getUniforms().setValue(t,"morphTargetInfluences",u)}c.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function tT(t,e,n,i,r){let s=new WeakMap;function a(u){const p=r.render.frame,h=u.geometry,f=e.get(u,h);if(s.get(f)!==p&&(e.update(f),s.set(f,p)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),s.get(u)!==p&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,p))),u.isSkinnedMesh){const m=u.skeleton;s.get(m)!==p&&(m.update(),s.set(m,p))}return f}function o(){s=new WeakMap}function c(u){const p=u.target;p.removeEventListener("dispose",c),i.releaseStatesOfObject(p),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:a,dispose:o}}const nT={[a_]:"LINEAR_TONE_MAPPING",[o_]:"REINHARD_TONE_MAPPING",[l_]:"CINEON_TONE_MAPPING",[c_]:"ACES_FILMIC_TONE_MAPPING",[d_]:"AGX_TONE_MAPPING",[f_]:"NEUTRAL_TONE_MAPPING",[u_]:"CUSTOM_TONE_MAPPING"};function iT(t,e,n,i,r,s){const a=new li(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const u=new nn;u.setAttribute("position",new Lt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Lt([0,2,0,0,2,0],2));const p=new VM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new We(u,p),f=new np(-1,1,1,-1,0,1);let m=null,_=null,M=!1,g,d=null,x=[],E=!1;this.setSize=function(S,b){a.setSize(S,b),o!==null&&o.setSize(S,b),c!==null&&c.setSize(S,b);for(let T=0;T<x.length;T++){const C=x[T];C.setSize&&C.setSize(S,b)}},this.setEffects=function(S){x=S,E=x.length>0&&x[0].isRenderPass===!0;const b=a.width,T=a.height;x.length>0&&o===null&&(o=new li(b,T,{type:bi,depthBuffer:!1,stencilBuffer:!1}),c=new li(b,T,{type:bi,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<x.length;C++){const y=x[C];y.setSize&&y.setSize(b,T)}},this.begin=function(S,b){if(M||S.toneMapping===Si&&x.length===0)return!1;if(d=b,b!==null){const T=b.width,C=b.height;(a.width!==T||a.height!==C)&&this.setSize(T,C)}return E===!1&&S.setRenderTarget(a),g=S.toneMapping,S.toneMapping=Si,!0},this.hasRenderPass=function(){return E},this.end=function(S,b){S.toneMapping=g,M=!0;let T=a,C=o;for(let y=0;y<x.length;y++){const A=x[y];A.enabled!==!1&&(A.render(S,C,T,b),A.needsSwap!==!1&&(T=C,C=C===o?c:o))}if(m!==S.outputColorSpace||_!==S.toneMapping){m=S.outputColorSpace,_=S.toneMapping,p.defines={},rt.getTransfer(m)===gt&&(p.defines.SRGB_TRANSFER="");const y=nT[_];y&&(p.defines[y]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=T.texture,S.setRenderTarget(d),S.render(h,f),d=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),u.dispose(),p.dispose()}}const k_=new vn,Ff=new vo(1,1),z_=new M_,B_=new vM,H_=new R_,h0=[],p0=[],m0=new Float32Array(16),g0=new Float32Array(9),x0=new Float32Array(4);function ua(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=h0[r];if(s===void 0&&(s=new Float32Array(r),h0[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function jt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Xt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Wc(t,e){let n=p0[e];n===void 0&&(n=new Int32Array(e),p0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function rT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function sT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;t.uniform2fv(this.addr,e),Xt(n,e)}}function aT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(jt(n,e))return;t.uniform3fv(this.addr,e),Xt(n,e)}}function oT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;t.uniform4fv(this.addr,e),Xt(n,e)}}function lT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(jt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Xt(n,e)}else{if(jt(n,i))return;x0.set(i),t.uniformMatrix2fv(this.addr,!1,x0),Xt(n,i)}}function cT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(jt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Xt(n,e)}else{if(jt(n,i))return;g0.set(i),t.uniformMatrix3fv(this.addr,!1,g0),Xt(n,i)}}function uT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(jt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Xt(n,e)}else{if(jt(n,i))return;m0.set(i),t.uniformMatrix4fv(this.addr,!1,m0),Xt(n,i)}}function dT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function fT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;t.uniform2iv(this.addr,e),Xt(n,e)}}function hT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(jt(n,e))return;t.uniform3iv(this.addr,e),Xt(n,e)}}function pT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;t.uniform4iv(this.addr,e),Xt(n,e)}}function mT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function gT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;t.uniform2uiv(this.addr,e),Xt(n,e)}}function xT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(jt(n,e))return;t.uniform3uiv(this.addr,e),Xt(n,e)}}function _T(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;t.uniform4uiv(this.addr,e),Xt(n,e)}}function vT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Ff.compareFunction=n.isReversedDepthBuffer()?Yh:$h,s=Ff):s=k_,n.setTexture2D(e||s,r)}function yT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||B_,r)}function ST(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||H_,r)}function MT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||z_,r)}function ET(t){switch(t){case 5126:return rT;case 35664:return sT;case 35665:return aT;case 35666:return oT;case 35674:return lT;case 35675:return cT;case 35676:return uT;case 5124:case 35670:return dT;case 35667:case 35671:return fT;case 35668:case 35672:return hT;case 35669:case 35673:return pT;case 5125:return mT;case 36294:return gT;case 36295:return xT;case 36296:return _T;case 35678:case 36198:case 36298:case 36306:case 35682:return vT;case 35679:case 36299:case 36307:return yT;case 35680:case 36300:case 36308:case 36293:return ST;case 36289:case 36303:case 36311:case 36292:return MT}}function bT(t,e){t.uniform1fv(this.addr,e)}function wT(t,e){const n=ua(e,this.size,2);t.uniform2fv(this.addr,n)}function TT(t,e){const n=ua(e,this.size,3);t.uniform3fv(this.addr,n)}function AT(t,e){const n=ua(e,this.size,4);t.uniform4fv(this.addr,n)}function CT(t,e){const n=ua(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function RT(t,e){const n=ua(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function PT(t,e){const n=ua(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function NT(t,e){t.uniform1iv(this.addr,e)}function DT(t,e){t.uniform2iv(this.addr,e)}function IT(t,e){t.uniform3iv(this.addr,e)}function LT(t,e){t.uniform4iv(this.addr,e)}function UT(t,e){t.uniform1uiv(this.addr,e)}function OT(t,e){t.uniform2uiv(this.addr,e)}function FT(t,e){t.uniform3uiv(this.addr,e)}function kT(t,e){t.uniform4uiv(this.addr,e)}function zT(t,e,n){const i=this.cache,r=e.length,s=Wc(n,r);jt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=Ff:a=k_;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function BT(t,e,n){const i=this.cache,r=e.length,s=Wc(n,r);jt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||B_,s[a])}function HT(t,e,n){const i=this.cache,r=e.length,s=Wc(n,r);jt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||H_,s[a])}function GT(t,e,n){const i=this.cache,r=e.length,s=Wc(n,r);jt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||z_,s[a])}function WT(t){switch(t){case 5126:return bT;case 35664:return wT;case 35665:return TT;case 35666:return AT;case 35674:return CT;case 35675:return RT;case 35676:return PT;case 5124:case 35670:return NT;case 35667:case 35671:return DT;case 35668:case 35672:return IT;case 35669:case 35673:return LT;case 5125:return UT;case 36294:return OT;case 36295:return FT;case 36296:return kT;case 35678:case 36198:case 36298:case 36306:case 35682:return zT;case 35679:case 36299:case 36307:return BT;case 35680:case 36300:case 36308:case 36293:return HT;case 36289:case 36303:case 36311:case 36292:return GT}}class VT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=ET(n.type)}}class jT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=WT(n.type)}}class XT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Ku=/(\w+)(\])?(\[|\.)?/g;function _0(t,e){t.seq.push(e),t.map[e.id]=e}function $T(t,e,n){const i=t.name,r=i.length;for(Ku.lastIndex=0;;){const s=Ku.exec(i),a=Ku.lastIndex;let o=s[1];const c=s[2]==="]",u=s[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===r){_0(n,u===void 0?new VT(o,t,e):new jT(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new XT(o),_0(n,h)),n=h}}}class Hl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),c=e.getUniformLocation(n,o.name);$T(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function v0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const YT=37297;let qT=0;function KT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const y0=new Ke;function ZT(t){rt._getMatrix(y0,rt.workingColorSpace,t);const e=`mat3( ${y0.elements.map(n=>n.toFixed(4))} )`;switch(rt.getTransfer(t)){case xc:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function S0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+KT(t.getShaderSource(e),o)}else return s}function JT(t,e){const n=ZT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const QT={[a_]:"Linear",[o_]:"Reinhard",[l_]:"Cineon",[c_]:"ACESFilmic",[d_]:"AgX",[f_]:"Neutral",[u_]:"Custom"};function e2(t,e){const n=QT[e];return n===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Sl=new $;function t2(){rt.getLuminanceCoefficients(Sl);const t=Sl.x.toFixed(4),e=Sl.y.toFixed(4),n=Sl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function n2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oa).join(`
`)}function i2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function r2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Oa(t){return t!==""}function M0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function E0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const s2=/^[ \t]*#include +<([\w\d./]+)>/gm;function kf(t){return t.replace(s2,o2)}const a2=new Map;function o2(t,e){let n=Qe[e];if(n===void 0){const i=a2.get(e);if(i!==void 0)n=Qe[i],Ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return kf(n)}const l2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function b0(t){return t.replace(l2,c2)}function c2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function w0(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const u2={[Ol]:"SHADOWMAP_TYPE_PCF",[Ua]:"SHADOWMAP_TYPE_VSM"};function d2(t){return u2[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const f2={[Jr]:"ENVMAP_TYPE_CUBE",[ra]:"ENVMAP_TYPE_CUBE",[Bc]:"ENVMAP_TYPE_CUBE_UV"};function h2(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":f2[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const p2={[ra]:"ENVMAP_MODE_REFRACTION"};function m2(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":p2[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const g2={[s_]:"ENVMAP_BLENDING_MULTIPLY",[U1]:"ENVMAP_BLENDING_MIX",[O1]:"ENVMAP_BLENDING_ADD"};function x2(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":g2[t.combine]||"ENVMAP_BLENDING_NONE"}function _2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function v2(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const c=d2(n),u=h2(n),p=m2(n),h=x2(n),f=_2(n),m=n2(n),_=i2(s),M=r.createProgram();let g,d,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Oa).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Oa).join(`
`),d.length>0&&(d+=`
`)):(g=[w0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oa).join(`
`),d=[w0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+p:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Si?"#define TONE_MAPPING":"",n.toneMapping!==Si?Qe.tonemapping_pars_fragment:"",n.toneMapping!==Si?e2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,JT("linearToOutputTexel",n.outputColorSpace),t2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Oa).join(`
`)),a=kf(a),a=M0(a,n),a=E0(a,n),o=kf(o),o=M0(o,n),o=E0(o,n),a=b0(a),o=b0(o),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",n.glslVersion===Cm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Cm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const E=x+g+a,S=x+d+o,b=v0(r,r.VERTEX_SHADER,E),T=v0(r,r.FRAGMENT_SHADER,S);r.attachShader(M,b),r.attachShader(M,T),n.index0AttributeName!==void 0?r.bindAttribLocation(M,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function C(N){if(t.debug.checkShaderErrors){const I=r.getProgramInfoLog(M)||"",F=r.getShaderInfoLog(b)||"",D=r.getShaderInfoLog(T)||"",V=I.trim(),Q=F.trim(),k=D.trim();let O=!0,U=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(O=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,M,b,T);else{const X=S0(r,b,"vertex"),K=S0(r,T,"fragment");dt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+V+`
`+X+`
`+K)}else V!==""?Ve("WebGLProgram: Program Info Log:",V):(Q===""||k==="")&&(U=!1);U&&(N.diagnostics={runnable:O,programLog:V,vertexShader:{log:Q,prefix:g},fragmentShader:{log:k,prefix:d}})}r.deleteShader(b),r.deleteShader(T),y=new Hl(r,M),A=r2(r,M)}let y;this.getUniforms=function(){return y===void 0&&C(this),y};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(M,YT)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=qT++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=b,this.fragmentShader=T,this}let y2=0;class S2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new M2(e),n.set(e,i)),i}}class M2{constructor(e){this.id=y2++,this.code=e,this.usedTimes=0}}function E2(t){return t===Qr||t===pc||t===mc}function b2(t,e,n,i,r,s){const a=new E_,o=new S2,c=new Set,u=[],p=new Map,h=i.logarithmicDepthBuffer;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function M(y,A,P,N,I,F){const D=N.fog,V=I.geometry,Q=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?N.environment:null,k=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,O=e.get(y.envMap||Q,k),U=O&&O.mapping===Bc?O.image.height:null,X=m[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&Ve("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const K=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,le=K!==void 0?K.length:0;let ue=0;V.morphAttributes.position!==void 0&&(ue=1),V.morphAttributes.normal!==void 0&&(ue=2),V.morphAttributes.color!==void 0&&(ue=3);let we,Fe,ke,Z;if(X){const ft=mi[X];we=ft.vertexShader,Fe=ft.fragmentShader}else{we=y.vertexShader,Fe=y.fragmentShader;const ft=o.getVertexShaderStage(y),at=o.getFragmentShaderStage(y);o.update(y,ft,at),ke=ft.id,Z=at.id}const ee=t.getRenderTarget(),me=t.state.buffers.depth.getReversed(),Ue=I.isInstancedMesh===!0,_e=I.isBatchedMesh===!0,Be=!!y.map,ut=!!y.matcap,Xe=!!O,qe=!!y.aoMap,tt=!!y.lightMap,He=!!y.bumpMap&&y.wireframe===!1,st=!!y.normalMap,pt=!!y.displacementMap,Mt=!!y.emissiveMap,ne=!!y.metalnessMap,Pe=!!y.roughnessMap,L=y.anisotropy>0,Ze=y.clearcoat>0,$e=y.dispersion>0,R=y.retroreflectivity>0,v=y.iridescence>0,W=y.sheen>0,q=y.transmission>0,te=L&&!!y.anisotropyMap,ae=Ze&&!!y.clearcoatMap,fe=Ze&&!!y.clearcoatNormalMap,H=Ze&&!!y.clearcoatRoughnessMap,Y=v&&!!y.iridescenceMap,se=v&&!!y.iridescenceThicknessMap,Me=W&&!!y.sheenColorMap,pe=W&&!!y.sheenRoughnessMap,he=!!y.specularMap,Ee=!!y.specularColorMap,Le=!!y.specularIntensityMap,Ge=q&&!!y.transmissionMap,B=q&&!!y.thicknessMap,xe=!!y.gradientMap,ie=!!y.alphaMap,ve=y.alphaTest>0,ye=!!y.alphaHash,re=!!y.extensions;let Ie=Si;y.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Ie=t.toneMapping);const Ce={shaderID:X,shaderType:y.type,shaderName:y.name,vertexShader:we,fragmentShader:Fe,defines:y.defines,customVertexShaderID:ke,customFragmentShaderID:Z,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:_e,batchingColor:_e&&I._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&I.instanceColor!==null,instancingMorph:Ue&&I.morphTexture!==null,outputColorSpace:ee===null?t.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:rt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Be,matcap:ut,envMap:Xe,envMapMode:Xe&&O.mapping,envMapCubeUVHeight:U,aoMap:qe,lightMap:tt,bumpMap:He,normalMap:st,displacementMap:pt,emissiveMap:Mt,normalMapObjectSpace:st&&y.normalMapType===z1,normalMapTangentSpace:st&&y.normalMapType===Uf,packedNormalMap:st&&y.normalMapType===Uf&&E2(y.normalMap.format),metalnessMap:ne,roughnessMap:Pe,anisotropy:L,anisotropyMap:te,clearcoat:Ze,clearcoatMap:ae,clearcoatNormalMap:fe,clearcoatRoughnessMap:H,dispersion:$e,retroreflection:R,iridescence:v,iridescenceMap:Y,iridescenceThicknessMap:se,sheen:W,sheenColorMap:Me,sheenRoughnessMap:pe,specularMap:he,specularColorMap:Ee,specularIntensityMap:Le,transmission:q,transmissionMap:Ge,thicknessMap:B,gradientMap:xe,opaque:y.transparent===!1&&y.blending===Xa&&y.alphaToCoverage===!1,alphaMap:ie,alphaTest:ve,alphaHash:ye,combine:y.combine,mapUv:Be&&_(y.map.channel),aoMapUv:qe&&_(y.aoMap.channel),lightMapUv:tt&&_(y.lightMap.channel),bumpMapUv:He&&_(y.bumpMap.channel),normalMapUv:st&&_(y.normalMap.channel),displacementMapUv:pt&&_(y.displacementMap.channel),emissiveMapUv:Mt&&_(y.emissiveMap.channel),metalnessMapUv:ne&&_(y.metalnessMap.channel),roughnessMapUv:Pe&&_(y.roughnessMap.channel),anisotropyMapUv:te&&_(y.anisotropyMap.channel),clearcoatMapUv:ae&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:fe&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:se&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:pe&&_(y.sheenRoughnessMap.channel),specularMapUv:he&&_(y.specularMap.channel),specularColorMapUv:Ee&&_(y.specularColorMap.channel),specularIntensityMapUv:Le&&_(y.specularIntensityMap.channel),transmissionMapUv:Ge&&_(y.transmissionMap.channel),thicknessMapUv:B&&_(y.thicknessMap.channel),alphaMapUv:ie&&_(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(st||L),vertexNormals:!!V.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!V.attributes.uv&&(Be||ie),fog:!!D,useFog:y.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||V.attributes.normal===void 0&&st===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:me,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:ue,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ie,decodeVideoTexture:Be&&y.map.isVideoTexture===!0&&rt.getTransfer(y.map.colorSpace)===gt,decodeVideoTextureEmissive:Mt&&y.emissiveMap.isVideoTexture===!0&&rt.getTransfer(y.emissiveMap.colorSpace)===gt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ui,flipSided:y.side===Cn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:re&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&y.extensions.multiDraw===!0||_e)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ce.vertexUv1s=c.has(1),Ce.vertexUv2s=c.has(2),Ce.vertexUv3s=c.has(3),c.clear(),Ce}function g(y){const A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)A.push(P),A.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(d(A,y),x(A,y),A.push(t.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function d(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numSunLights),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numSunLightShadows),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function x(y,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function E(y){const A=m[y.type];let P;if(A){const N=mi[A];P=HM.clone(N.uniforms)}else P=y.uniforms;return P}function S(y,A){let P=p.get(A);return P!==void 0?++P.usedTimes:(P=new v2(t,A,y,r),u.push(P),p.set(A,P)),P}function b(y){if(--y.usedTimes===0){const A=u.indexOf(y);u[A]=u[u.length-1],u.pop(),p.delete(y.cacheKey),y.destroy()}}function T(y){o.remove(y)}function C(){o.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:E,acquireProgram:S,releaseProgram:b,releaseShaderCache:T,programs:u,dispose:C}}function w2(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,c){t.get(a)[o]=c}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function T2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function T0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function A0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f){let m=0;return f.isInstancedMesh&&(m+=2),f.isSkinnedMesh&&(m+=1),m}function o(f,m,_,M,g,d){let x=t[e];return x===void 0?(x={id:f.id,object:f,geometry:m,material:_,materialVariant:a(f),groupOrder:M,renderOrder:f.renderOrder,z:g,group:d},t[e]=x):(x.id=f.id,x.object=f,x.geometry=m,x.material=_,x.materialVariant=a(f),x.groupOrder=M,x.renderOrder=f.renderOrder,x.z=g,x.group=d),e++,x}function c(f,m,_,M,g,d,x){x.reversedDepth===!0&&(g=-g);const E=o(f,m,_,M,g,d);_.transmission>0?i.push(E):_.transparent===!0?r.push(E):n.push(E)}function u(f,m,_,M,g,d){const x=o(f,m,_,M,g,d);_.transmission>0?i.unshift(x):_.transparent===!0?r.unshift(x):n.unshift(x)}function p(f,m){n.length>1&&n.sort(f||T2),i.length>1&&i.sort(m||T0),r.length>1&&r.sort(m||T0)}function h(){for(let f=e,m=t.length;f<m;f++){const _=t[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:c,unshift:u,finish:h,sort:p}}function A2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new A0,t.set(i,[a])):r>=s.length?(a=new A0,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function C2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new $,color:new et};break;case"SpotLight":n={position:new $,direction:new $,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new $,color:new et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new $,skyColor:new et,groundColor:new et};break;case"RectAreaLight":n={color:new et,position:new $,halfWidth:new $,halfHeight:new $};break}return t[e.id]=n,n}}}function R2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let P2=0;function N2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function D2(t){const e=new C2,n=R2(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new $);const r=new $,s=new At,a=new At;function o(u){let p=0,h=0,f=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let m=0,_=0,M=0,g=0,d=0,x=0,E=0,S=0,b=0,T=0,C=0,y=0,A=0,P=0;u.sort(N2);for(let I=0,F=u.length;I<F;I++){const D=u[I],V=D.color,Q=D.intensity,k=D.distance;let O=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Qr?O=D.shadow.map.texture:O=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)p+=V.r*Q,h+=V.g*Q,f+=V.b*Q;else if(D.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(D.sh.coefficients[U],Q);P++}else if(D.isSunLight){const U=e.get(D);if(U.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const X=D.shadow,K=n.get(D);K.shadowIntensity=X.intensity,K.shadowBias=X.bias,K.shadowNormalBias=X.normalBias,K.shadowRadius=X.radius,K.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),i.sunShadow[_]=K,i.sunShadowMap[_]=O;const le=X.getViewportCount();for(let ue=0;ue<le;ue++)i.sunShadowMatrix[M+ue]=X.getMatrix(ue),i.sunShadowCascade[M+ue]=X._cascadeData[ue];M+=le,_++}i.sun[m]=U,m++}else if(D.isDirectionalLight){const U=e.get(D);if(U.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const X=D.shadow,K=n.get(D);K.shadowIntensity=X.intensity,K.shadowBias=X.bias,K.shadowNormalBias=X.normalBias,K.shadowRadius=X.radius,K.shadowMapSize=X.mapSize,i.directionalShadow[g]=K,i.directionalShadowMap[g]=O,i.directionalShadowMatrix[g]=D.shadow.matrix,b++}i.directional[g]=U,g++}else if(D.isSpotLight){const U=e.get(D);U.position.setFromMatrixPosition(D.matrixWorld),U.color.copy(V).multiplyScalar(Q),U.distance=k,U.coneCos=Math.cos(D.angle),U.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),U.decay=D.decay,i.spot[x]=U;const X=D.shadow;if(D.map&&(i.spotLightMap[y]=D.map,y++,X.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[x]=X.matrix,D.castShadow){const K=n.get(D);K.shadowIntensity=X.intensity,K.shadowBias=X.bias,K.shadowNormalBias=X.normalBias,K.shadowRadius=X.radius,K.shadowMapSize=X.mapSize,i.spotShadow[x]=K,i.spotShadowMap[x]=O,C++}x++}else if(D.isRectAreaLight){const U=e.get(D);U.color.copy(V).multiplyScalar(Q),U.halfWidth.set(D.width*.5,0,0),U.halfHeight.set(0,D.height*.5,0),i.rectArea[E]=U,E++}else if(D.isPointLight){const U=e.get(D);if(U.color.copy(D.color).multiplyScalar(D.intensity),U.distance=D.distance,U.decay=D.decay,D.castShadow){const X=D.shadow,K=n.get(D);K.shadowIntensity=X.intensity,K.shadowBias=X.bias,K.shadowNormalBias=X.normalBias,K.shadowRadius=X.radius,K.shadowMapSize=X.mapSize,K.shadowCameraNear=X.camera.near,K.shadowCameraFar=X.camera.far,i.pointShadow[d]=K,i.pointShadowMap[d]=O,i.pointShadowMatrix[d]=D.shadow.matrix,T++}i.point[d]=U,d++}else if(D.isHemisphereLight){const U=e.get(D);U.skyColor.copy(D.color).multiplyScalar(Q),U.groundColor.copy(D.groundColor).multiplyScalar(Q),i.hemi[S]=U,S++}}E>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=h,i.ambient[2]=f;const N=i.hash;(N.sunLength!==m||N.directionalLength!==g||N.pointLength!==d||N.spotLength!==x||N.rectAreaLength!==E||N.hemiLength!==S||N.numSunShadows!==_||N.numDirectionalShadows!==b||N.numPointShadows!==T||N.numSpotShadows!==C||N.numSpotMaps!==y||N.numLightProbes!==P)&&(i.sun.length=m,i.directional.length=g,i.spot.length=x,i.rectArea.length=E,i.point.length=d,i.hemi.length=S,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+y-A,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=P,N.sunLength=m,N.directionalLength=g,N.pointLength=d,N.spotLength=x,N.rectAreaLength=E,N.hemiLength=S,N.numSunShadows=_,N.numDirectionalShadows=b,N.numPointShadows=T,N.numSpotShadows=C,N.numSpotMaps=y,N.numLightProbes=P,i.version=P2++)}function c(u,p){let h=0,f=0,m=0,_=0,M=0,g=0;const d=p.matrixWorldInverse;for(let x=0,E=u.length;x<E;x++){const S=u[x];if(S.isSunLight){const b=i.sun[h];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(d),h++}else if(S.isDirectionalLight){const b=i.directional[f];b.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(d),f++}else if(S.isSpotLight){const b=i.spot[_];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(d),b.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(d),_++}else if(S.isRectAreaLight){const b=i.rectArea[M];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(d),a.identity(),s.copy(S.matrixWorld),s.premultiply(d),a.extractRotation(s),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),M++}else if(S.isPointLight){const b=i.point[m];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(d),m++}else if(S.isHemisphereLight){const b=i.hemi[g];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(d),g++}}}return{setup:o,setupView:c,state:i}}function C0(t){const e=new D2(t),n=[],i=[],r=[];function s(f){h.camera=f,n.length=0,i.length=0,r.length=0}function a(f){n.push(f)}function o(f){i.push(f)}function c(f){r.push(f)}function u(){e.setup(n)}function p(f){e.setupView(n,f)}const h={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:u,setupLightsView:p,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function I2(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new C0(t),e.set(r,[o])):s>=a.length?(o=new C0(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const L2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,U2=`uniform sampler2D shadow_pass;
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
}`,O2=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],F2=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],R0=new At,Pa=new $,Zu=new $;function k2(t,e,n){let i=new Zh;const r=new je,s=new je,a=new Rt,o=new jM,c=new XM,u={},p=n.maxTextureSize,h={[Zr]:Cn,[Cn]:Zr,[Ui]:Ui},f=new wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:L2,fragmentShader:U2}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new nn;_.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new We(_,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ol;let d=this.type;this.render=function(T,C,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===n_&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ol);const A=t.getRenderTarget(),P=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),I=t.state;I.setBlending(Bi),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const F=d!==this.type;F&&C.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(V=>V.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,V=T.length;D<V;D++){const Q=T[D],k=Q.shadow;if(k===void 0){Ve("WebGLShadowMap:",Q,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const O=k.getFrameExtents();r.multiply(O),s.copy(k.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(s.x=Math.floor(p/O.x),r.x=s.x*O.x,k.mapSize.x=s.x),r.y>p&&(s.y=Math.floor(p/O.y),r.y=s.y*O.y,k.mapSize.y=s.y));const U=t.state.buffers.depth.getReversed();if(k.camera._reversedDepth=U,k.map===null||F===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Ua){if(Q.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new li(r.x,r.y,{format:Qr,type:bi,minFilter:un,magFilter:un,generateMipmaps:!1}),k.map.texture.name=Q.name+".shadowMap",k.map.depthTexture=new vo(r.x,r.y,xi),k.map.depthTexture.name=Q.name+".shadowMapDepth",k.map.depthTexture.format=Xi,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Qt,k.map.depthTexture.magFilter=Qt}else Q.isPointLight?(k.map=new F_(r.x),k.map.depthTexture=new zM(r.x,Ei)):(k.map=new li(r.x,r.y),k.map.depthTexture=new vo(r.x,r.y,Ei)),k.map.depthTexture.name=Q.name+".shadowMap",k.map.depthTexture.format=Xi,this.type===Ol?(k.map.depthTexture.compareFunction=U?Yh:$h,k.map.depthTexture.minFilter=un,k.map.depthTexture.magFilter=un):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Qt,k.map.depthTexture.magFilter=Qt);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==r.x||k.map.height!==r.y)&&k.map.setSize(r.x,r.y);const X=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();Q.isPointLight!==!0&&k.updateMatrices(Q,y);for(let K=0;K<X;K++){const le=k.getCamera(K);if(Q.isPointLight){const ue=k.camera,we=k.matrix,Fe=Q.distance||ue.far;Fe!==ue.far&&(ue.far=Fe,ue.updateProjectionMatrix()),Pa.setFromMatrixPosition(Q.matrixWorld),ue.position.copy(Pa),Zu.copy(ue.position),Zu.add(O2[K]),ue.up.copy(F2[K]),ue.lookAt(Zu),ue.updateMatrixWorld(),we.makeTranslation(-Pa.x,-Pa.y,-Pa.z),R0.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),k._frustum.setFromProjectionMatrix(R0,ue.coordinateSystem,ue.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)t.setRenderTarget(k.map,K),t.clear();else{K===0&&(t.setRenderTarget(k.map),t.clear());const ue=k.getViewport(K);a.set(s.x*ue.x,s.y*ue.y,s.x*ue.z,s.y*ue.w),I.viewport(a)}i=k.getFrustum(K),S(C,y,le,Q,this.type)}k.isPointLightShadow!==!0&&this.type===Ua&&x(k,y),k.needsUpdate=!1}d=this.type,g.needsUpdate=!1,t.setRenderTarget(A,P,N)};function x(T,C){const y=e.update(M);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null?T.mapPass=new li(r.x,r.y,{format:Qr,type:bi}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(C,null,y,f,M,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value.set(T.map.width,T.map.height),m.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(C,null,y,m,M,null)}function E(T,C,y,A){let P=null;const N=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)P=N;else if(P=y.isPointLight===!0?c:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const I=P.uuid,F=C.uuid;let D=u[I];D===void 0&&(D={},u[I]=D);let V=D[F];V===void 0&&(V=P.clone(),D[F]=V,C.addEventListener("dispose",b)),P=V}if(P.visible=C.visible,P.wireframe=C.wireframe,A===Ua?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:h[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,y.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const I=t.properties.get(P);I.light=y}return P}function S(T,C,y,A,P){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===Ua)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);const F=e.update(T),D=T.material;if(Array.isArray(D)){const V=F.groups;for(let Q=0,k=V.length;Q<k;Q++){const O=V[Q],U=D[O.materialIndex];if(U&&U.visible){const X=E(T,U,A,P);T.onBeforeShadow(t,T,C,y,F,X,O),t.renderBufferDirect(y,null,F,X,T,O),T.onAfterShadow(t,T,C,y,F,X,O)}}}else if(D.visible){const V=E(T,D,A,P);T.onBeforeShadow(t,T,C,y,F,V,null),t.renderBufferDirect(y,null,F,V,T,null),T.onAfterShadow(t,T,C,y,F,V,null)}}const I=T.children;for(let F=0,D=I.length;F<D;F++)S(I[F],C,y,A,P)}function b(T){T.target.removeEventListener("dispose",b);for(const y in u){const A=u[y],P=T.target.uuid;P in A&&(A[P].dispose(),delete A[P])}}}function z2(t,e){function n(){let B=!1;const xe=new Rt;let ie=null;const ve=new Rt(0,0,0,0);return{setMask:function(ye){ie!==ye&&!B&&(t.colorMask(ye,ye,ye,ye),ie=ye)},setLocked:function(ye){B=ye},setClear:function(ye,re,Ie,Ce,ft){ft===!0&&(ye*=Ce,re*=Ce,Ie*=Ce),xe.set(ye,re,Ie,Ce),ve.equals(xe)===!1&&(t.clearColor(ye,re,Ie,Ce),ve.copy(xe))},reset:function(){B=!1,ie=null,ve.set(-1,0,0,0)}}}function i(){let B=!1,xe=!1,ie=null,ve=null,ye=null;return{setReversed:function(re){if(xe!==re){const Ie=e.get("EXT_clip_control");re?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),xe=re;const Ce=ye;ye=null,this.setClear(Ce)}},getReversed:function(){return xe},setTest:function(re){re?ee(t.DEPTH_TEST):me(t.DEPTH_TEST)},setMask:function(re){ie!==re&&!B&&(t.depthMask(re),ie=re)},setFunc:function(re){if(xe&&(re=Z1[re]),ve!==re){switch(re){case qd:t.depthFunc(t.NEVER);break;case Kd:t.depthFunc(t.ALWAYS);break;case Zd:t.depthFunc(t.LESS);break;case po:t.depthFunc(t.LEQUAL);break;case Jd:t.depthFunc(t.EQUAL);break;case Qd:t.depthFunc(t.GEQUAL);break;case ef:t.depthFunc(t.GREATER);break;case tf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ve=re}},setLocked:function(re){B=re},setClear:function(re){ye!==re&&(ye=re,xe&&(re=1-re),t.clearDepth(re))},reset:function(){B=!1,ie=null,ve=null,ye=null,xe=!1}}}function r(){let B=!1,xe=null,ie=null,ve=null,ye=null,re=null,Ie=null,Ce=null,ft=null;return{setTest:function(at){B||(at?ee(t.STENCIL_TEST):me(t.STENCIL_TEST))},setMask:function(at){xe!==at&&!B&&(t.stencilMask(at),xe=at)},setFunc:function(at,fn,zn){(ie!==at||ve!==fn||ye!==zn)&&(t.stencilFunc(at,fn,zn),ie=at,ve=fn,ye=zn)},setOp:function(at,fn,zn){(re!==at||Ie!==fn||Ce!==zn)&&(t.stencilOp(at,fn,zn),re=at,Ie=fn,Ce=zn)},setLocked:function(at){B=at},setClear:function(at){ft!==at&&(t.clearStencil(at),ft=at)},reset:function(){B=!1,xe=null,ie=null,ve=null,ye=null,re=null,Ie=null,Ce=null,ft=null}}}const s=new n,a=new i,o=new r,c=new WeakMap,u=new WeakMap;let p={},h={},f={},m=new WeakMap,_=[],M=null,g=!1,d=null,x=null,E=null,S=null,b=null,T=null,C=null,y=new et(0,0,0),A=0,P=!1,N=null,I=null,F=null,D=null,V=null;const Q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,O=0;const U=t.getParameter(t.VERSION);U.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(U)[1]),k=O>=1):U.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),k=O>=2);let X=null,K={};const le=t.getParameter(t.SCISSOR_BOX),ue=t.getParameter(t.VIEWPORT),we=new Rt().fromArray(le),Fe=new Rt().fromArray(ue);function ke(B,xe,ie,ve){const ye=new Uint8Array(4),re=t.createTexture();t.bindTexture(B,re),t.texParameteri(B,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(B,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ie=0;Ie<ie;Ie++)B===t.TEXTURE_3D||B===t.TEXTURE_2D_ARRAY?t.texImage3D(xe,0,t.RGBA,1,1,ve,0,t.RGBA,t.UNSIGNED_BYTE,ye):t.texImage2D(xe+Ie,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ye);return re}const Z={};Z[t.TEXTURE_2D]=ke(t.TEXTURE_2D,t.TEXTURE_2D,1),Z[t.TEXTURE_CUBE_MAP]=ke(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[t.TEXTURE_2D_ARRAY]=ke(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Z[t.TEXTURE_3D]=ke(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(t.DEPTH_TEST),a.setFunc(po),He(!1),st(wm),ee(t.CULL_FACE),qe(Bi);function ee(B){p[B]!==!0&&(t.enable(B),p[B]=!0)}function me(B){p[B]!==!1&&(t.disable(B),p[B]=!1)}function Ue(B,xe){return f[B]!==xe?(t.bindFramebuffer(B,xe),f[B]=xe,B===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=xe),B===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=xe),!0):!1}function _e(B,xe){let ie=_,ve=!1;if(B){ie=m.get(xe),ie===void 0&&(ie=[],m.set(xe,ie));const ye=B.textures;if(ie.length!==ye.length||ie[0]!==t.COLOR_ATTACHMENT0){for(let re=0,Ie=ye.length;re<Ie;re++)ie[re]=t.COLOR_ATTACHMENT0+re;ie.length=ye.length,ve=!0}}else ie[0]!==t.BACK&&(ie[0]=t.BACK,ve=!0);ve&&t.drawBuffers(ie)}function Be(B){return M!==B?(t.useProgram(B),M=B,!0):!1}const ut={[bs]:t.FUNC_ADD,[_1]:t.FUNC_SUBTRACT,[v1]:t.FUNC_REVERSE_SUBTRACT};ut[y1]=t.MIN,ut[S1]=t.MAX;const Xe={[M1]:t.ZERO,[E1]:t.ONE,[b1]:t.SRC_COLOR,[i_]:t.SRC_ALPHA,[P1]:t.SRC_ALPHA_SATURATE,[C1]:t.DST_COLOR,[T1]:t.DST_ALPHA,[w1]:t.ONE_MINUS_SRC_COLOR,[r_]:t.ONE_MINUS_SRC_ALPHA,[R1]:t.ONE_MINUS_DST_COLOR,[A1]:t.ONE_MINUS_DST_ALPHA,[N1]:t.CONSTANT_COLOR,[D1]:t.ONE_MINUS_CONSTANT_COLOR,[I1]:t.CONSTANT_ALPHA,[L1]:t.ONE_MINUS_CONSTANT_ALPHA};function qe(B,xe,ie,ve,ye,re,Ie,Ce,ft,at){if(B===Bi){g===!0&&(me(t.BLEND),g=!1);return}if(g===!1&&(ee(t.BLEND),g=!0),B!==x1){if(B!==d||at!==P){if((x!==bs||b!==bs)&&(t.blendEquation(t.FUNC_ADD),x=bs,b=bs),at)switch(B){case Xa:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Yd:t.blendFunc(t.ONE,t.ONE);break;case Tm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Am:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:dt("WebGLState: Invalid blending: ",B);break}else switch(B){case Xa:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Yd:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Tm:dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Am:dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:dt("WebGLState: Invalid blending: ",B);break}E=null,S=null,T=null,C=null,y.set(0,0,0),A=0,d=B,P=at}return}ye=ye||xe,re=re||ie,Ie=Ie||ve,(xe!==x||ye!==b)&&(t.blendEquationSeparate(ut[xe],ut[ye]),x=xe,b=ye),(ie!==E||ve!==S||re!==T||Ie!==C)&&(t.blendFuncSeparate(Xe[ie],Xe[ve],Xe[re],Xe[Ie]),E=ie,S=ve,T=re,C=Ie),(Ce.equals(y)===!1||ft!==A)&&(t.blendColor(Ce.r,Ce.g,Ce.b,ft),y.copy(Ce),A=ft),d=B,P=!1}function tt(B,xe){B.side===Ui?me(t.CULL_FACE):ee(t.CULL_FACE);let ie=B.side===Cn;xe&&(ie=!ie),He(ie),B.blending===Xa&&B.transparent===!1?qe(Bi):qe(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),s.setMask(B.colorWrite);const ve=B.stencilWrite;o.setTest(ve),ve&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Mt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ee(t.SAMPLE_ALPHA_TO_COVERAGE):me(t.SAMPLE_ALPHA_TO_COVERAGE)}function He(B){N!==B&&(B?t.frontFace(t.CW):t.frontFace(t.CCW),N=B)}function st(B){B!==m1?(ee(t.CULL_FACE),B!==I&&(B===wm?t.cullFace(t.BACK):B===g1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):me(t.CULL_FACE),I=B}function pt(B){B!==F&&(k&&t.lineWidth(B),F=B)}function Mt(B,xe,ie){B?(ee(t.POLYGON_OFFSET_FILL),(D!==xe||V!==ie)&&(D=xe,V=ie,a.getReversed()&&(xe=-xe),t.polygonOffset(xe,ie))):me(t.POLYGON_OFFSET_FILL)}function ne(B){B?ee(t.SCISSOR_TEST):me(t.SCISSOR_TEST)}function Pe(B){B===void 0&&(B=t.TEXTURE0+Q-1),X!==B&&(t.activeTexture(B),X=B)}function L(B,xe,ie){ie===void 0&&(X===null?ie=t.TEXTURE0+Q-1:ie=X);let ve=K[ie];ve===void 0&&(ve={type:void 0,texture:void 0},K[ie]=ve),(ve.type!==B||ve.texture!==xe)&&(X!==ie&&(t.activeTexture(ie),X=ie),t.bindTexture(B,xe||Z[B]),ve.type=B,ve.texture=xe)}function Ze(){const B=K[X];B!==void 0&&B.type!==void 0&&(t.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function $e(){try{t.compressedTexImage2D(...arguments)}catch(B){dt("WebGLState:",B)}}function R(){try{t.compressedTexImage3D(...arguments)}catch(B){dt("WebGLState:",B)}}function v(){try{t.texSubImage2D(...arguments)}catch(B){dt("WebGLState:",B)}}function W(){try{t.texSubImage3D(...arguments)}catch(B){dt("WebGLState:",B)}}function q(){try{t.compressedTexSubImage2D(...arguments)}catch(B){dt("WebGLState:",B)}}function te(){try{t.compressedTexSubImage3D(...arguments)}catch(B){dt("WebGLState:",B)}}function ae(){try{t.texStorage2D(...arguments)}catch(B){dt("WebGLState:",B)}}function fe(){try{t.texStorage3D(...arguments)}catch(B){dt("WebGLState:",B)}}function H(){try{t.texImage2D(...arguments)}catch(B){dt("WebGLState:",B)}}function Y(){try{t.texImage3D(...arguments)}catch(B){dt("WebGLState:",B)}}function se(B){return h[B]!==void 0?h[B]:t.getParameter(B)}function Me(B,xe){h[B]!==xe&&(t.pixelStorei(B,xe),h[B]=xe)}function pe(B){we.equals(B)===!1&&(t.scissor(B.x,B.y,B.z,B.w),we.copy(B))}function he(B){Fe.equals(B)===!1&&(t.viewport(B.x,B.y,B.z,B.w),Fe.copy(B))}function Ee(B,xe){let ie=u.get(xe);ie===void 0&&(ie=new WeakMap,u.set(xe,ie));let ve=ie.get(B);ve===void 0&&(ve=t.getUniformBlockIndex(xe,B.name),ie.set(B,ve))}function Le(B,xe){const ve=u.get(xe).get(B);c.get(xe)!==ve&&(t.uniformBlockBinding(xe,ve,B.__bindingPointIndex),c.set(xe,ve))}function Ge(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),p={},h={},X=null,K={},f={},m=new WeakMap,_=[],M=null,g=!1,d=null,x=null,E=null,S=null,b=null,T=null,C=null,y=new et(0,0,0),A=0,P=!1,N=null,I=null,F=null,D=null,V=null,we.set(0,0,t.canvas.width,t.canvas.height),Fe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ee,disable:me,bindFramebuffer:Ue,drawBuffers:_e,useProgram:Be,setBlending:qe,setMaterial:tt,setFlipSided:He,setCullFace:st,setLineWidth:pt,setPolygonOffset:Mt,setScissorTest:ne,activeTexture:Pe,bindTexture:L,unbindTexture:Ze,compressedTexImage2D:$e,compressedTexImage3D:R,texImage2D:H,texImage3D:Y,pixelStorei:Me,getParameter:se,updateUBOMapping:Ee,uniformBlockBinding:Le,texStorage2D:ae,texStorage3D:fe,texSubImage2D:v,texSubImage3D:W,compressedTexSubImage2D:q,compressedTexSubImage3D:te,scissor:pe,viewport:he,reset:Ge}}function B2(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new je,p=new WeakMap,h=new Set;let f;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(R,v){return _?new OffscreenCanvas(R,v):_c("canvas")}function g(R,v,W){let q=1;const te=$e(R);if((te.width>W||te.height>W)&&(q=W/Math.max(te.width,te.height)),q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ae=Math.floor(q*te.width),fe=Math.floor(q*te.height);f===void 0&&(f=M(ae,fe));const H=v?M(ae,fe):f;return H.width=ae,H.height=fe,H.getContext("2d").drawImage(R,0,0,ae,fe),Ve("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+ae+"x"+fe+")."),H}else return"data"in R&&Ve("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),R;return R}function d(R){return R.generateMipmaps}function x(R){t.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(R,v,W,q,te,ae=!1){if(R!==null){if(t[R]!==void 0)return t[R];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let fe;q&&(fe=e.get("EXT_texture_norm16"),fe||Ve("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let H=v;if(v===t.RED&&(W===t.FLOAT&&(H=t.R32F),W===t.HALF_FLOAT&&(H=t.R16F),W===t.UNSIGNED_BYTE&&(H=t.R8),W===t.UNSIGNED_SHORT&&fe&&(H=fe.R16_EXT),W===t.SHORT&&fe&&(H=fe.R16_SNORM_EXT)),v===t.RED_INTEGER&&(W===t.UNSIGNED_BYTE&&(H=t.R8UI),W===t.UNSIGNED_SHORT&&(H=t.R16UI),W===t.UNSIGNED_INT&&(H=t.R32UI),W===t.BYTE&&(H=t.R8I),W===t.SHORT&&(H=t.R16I),W===t.INT&&(H=t.R32I)),v===t.RG&&(W===t.FLOAT&&(H=t.RG32F),W===t.HALF_FLOAT&&(H=t.RG16F),W===t.UNSIGNED_BYTE&&(H=t.RG8),W===t.UNSIGNED_SHORT&&fe&&(H=fe.RG16_EXT),W===t.SHORT&&fe&&(H=fe.RG16_SNORM_EXT)),v===t.RG_INTEGER&&(W===t.UNSIGNED_BYTE&&(H=t.RG8UI),W===t.UNSIGNED_SHORT&&(H=t.RG16UI),W===t.UNSIGNED_INT&&(H=t.RG32UI),W===t.BYTE&&(H=t.RG8I),W===t.SHORT&&(H=t.RG16I),W===t.INT&&(H=t.RG32I)),v===t.RGB_INTEGER&&(W===t.UNSIGNED_BYTE&&(H=t.RGB8UI),W===t.UNSIGNED_SHORT&&(H=t.RGB16UI),W===t.UNSIGNED_INT&&(H=t.RGB32UI),W===t.BYTE&&(H=t.RGB8I),W===t.SHORT&&(H=t.RGB16I),W===t.INT&&(H=t.RGB32I)),v===t.RGBA_INTEGER&&(W===t.UNSIGNED_BYTE&&(H=t.RGBA8UI),W===t.UNSIGNED_SHORT&&(H=t.RGBA16UI),W===t.UNSIGNED_INT&&(H=t.RGBA32UI),W===t.BYTE&&(H=t.RGBA8I),W===t.SHORT&&(H=t.RGBA16I),W===t.INT&&(H=t.RGBA32I)),v===t.RGB&&(W===t.UNSIGNED_SHORT&&fe&&(H=fe.RGB16_EXT),W===t.SHORT&&fe&&(H=fe.RGB16_SNORM_EXT),W===t.UNSIGNED_INT_5_9_9_9_REV&&(H=t.RGB9_E5),W===t.UNSIGNED_INT_10F_11F_11F_REV&&(H=t.R11F_G11F_B10F)),v===t.RGBA){const Y=ae?xc:rt.getTransfer(te);W===t.FLOAT&&(H=t.RGBA32F),W===t.HALF_FLOAT&&(H=t.RGBA16F),W===t.UNSIGNED_BYTE&&(H=Y===gt?t.SRGB8_ALPHA8:t.RGBA8),W===t.UNSIGNED_SHORT&&fe&&(H=fe.RGBA16_EXT),W===t.SHORT&&fe&&(H=fe.RGBA16_SNORM_EXT),W===t.UNSIGNED_SHORT_4_4_4_4&&(H=t.RGBA4),W===t.UNSIGNED_SHORT_5_5_5_1&&(H=t.RGB5_A1)}return(H===t.R16F||H===t.R32F||H===t.RG16F||H===t.RG32F||H===t.RGBA16F||H===t.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function b(R,v){let W;return R?v===null||v===Ei||v===go?W=t.DEPTH24_STENCIL8:v===xi?W=t.DEPTH32F_STENCIL8:v===mo&&(W=t.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ei||v===go?W=t.DEPTH_COMPONENT24:v===xi?W=t.DEPTH_COMPONENT32F:v===mo&&(W=t.DEPTH_COMPONENT16),W}function T(R,v){return d(R)===!0||R.isFramebufferTexture&&R.minFilter!==Qt&&R.minFilter!==un?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function C(R){const v=R.target;v.removeEventListener("dispose",C),A(v),v.isVideoTexture&&p.delete(v),v.isHTMLTexture&&h.delete(v)}function y(R){const v=R.target;v.removeEventListener("dispose",y),N(v)}function A(R){const v=i.get(R);if(v.__webglInit===void 0)return;const W=R.source,q=m.get(W);if(q){const te=q[v.__cacheKey];te.usedTimes--,te.usedTimes===0&&P(R),Object.keys(q).length===0&&m.delete(W)}i.remove(R)}function P(R){const v=i.get(R);t.deleteTexture(v.__webglTexture);const W=R.source,q=m.get(W);delete q[v.__cacheKey],a.memory.textures--}function N(R){const v=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(v.__webglFramebuffer[q]))for(let te=0;te<v.__webglFramebuffer[q].length;te++)t.deleteFramebuffer(v.__webglFramebuffer[q][te]);else t.deleteFramebuffer(v.__webglFramebuffer[q]);v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer[q])}else{if(Array.isArray(v.__webglFramebuffer))for(let q=0;q<v.__webglFramebuffer.length;q++)t.deleteFramebuffer(v.__webglFramebuffer[q]);else t.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&t.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let q=0;q<v.__webglColorRenderbuffer.length;q++)v.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(v.__webglColorRenderbuffer[q]);v.__webglDepthRenderbuffer&&t.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const W=R.textures;for(let q=0,te=W.length;q<te;q++){const ae=i.get(W[q]);ae.__webglTexture&&(t.deleteTexture(ae.__webglTexture),a.memory.textures--),i.remove(W[q])}i.remove(R)}let I=0;function F(){I=0}function D(){return I}function V(R){I=R}function Q(){const R=I;return R>=r.maxTextures&&Ve("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+r.maxTextures),I+=1,R}function k(R){const v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function O(R,v){const W=i.get(R);if(R.isVideoTexture&&L(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&W.__version!==R.version){const q=R.image;if(q===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{me(W,R,v);return}}else R.isExternalTexture&&(W.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,W.__webglTexture,t.TEXTURE0+v)}function U(R,v){const W=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){me(W,R,v);return}else R.isExternalTexture&&(W.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,W.__webglTexture,t.TEXTURE0+v)}function X(R,v){const W=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){me(W,R,v);return}n.bindTexture(t.TEXTURE_3D,W.__webglTexture,t.TEXTURE0+v)}function K(R,v){const W=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&W.__version!==R.version){Ue(W,R,v);return}n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture,t.TEXTURE0+v)}const le={[nf]:t.REPEAT,[ki]:t.CLAMP_TO_EDGE,[rf]:t.MIRRORED_REPEAT},ue={[Qt]:t.NEAREST,[F1]:t.NEAREST_MIPMAP_NEAREST,[Ko]:t.NEAREST_MIPMAP_LINEAR,[un]:t.LINEAR,[Mu]:t.LINEAR_MIPMAP_NEAREST,[Hr]:t.LINEAR_MIPMAP_LINEAR},we={[H1]:t.NEVER,[X1]:t.ALWAYS,[G1]:t.LESS,[$h]:t.LEQUAL,[W1]:t.EQUAL,[Yh]:t.GEQUAL,[V1]:t.GREATER,[j1]:t.NOTEQUAL};function Fe(R,v){if(v.type===xi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===un||v.magFilter===Mu||v.magFilter===Ko||v.magFilter===Hr||v.minFilter===un||v.minFilter===Mu||v.minFilter===Ko||v.minFilter===Hr)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,le[v.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,le[v.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,le[v.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,ue[v.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,ue[v.minFilter]),v.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,we[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Qt||v.minFilter!==Ko&&v.minFilter!==Hr||v.type===xi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function ke(R,v){let W=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",C));const q=v.source;let te=m.get(q);te===void 0&&(te={},m.set(q,te));const ae=k(v);if(ae!==R.__cacheKey){te[ae]===void 0&&(te[ae]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,W=!0),te[ae].usedTimes++;const fe=te[R.__cacheKey];fe!==void 0&&(te[R.__cacheKey].usedTimes--,fe.usedTimes===0&&P(v)),R.__cacheKey=ae,R.__webglTexture=te[ae].texture}return W}function Z(R,v,W){return Math.floor(Math.floor(R/W)/v)}function ee(R,v,W,q){const ae=R.updateRanges;if(ae.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,v.width,v.height,W,q,v.data);else{ae.sort((Me,pe)=>Me.start-pe.start);let fe=0;for(let Me=1;Me<ae.length;Me++){const pe=ae[fe],he=ae[Me],Ee=pe.start+pe.count,Le=Z(he.start,v.width,4),Ge=Z(pe.start,v.width,4);he.start<=Ee+1&&Le===Ge&&Z(he.start+he.count-1,v.width,4)===Le?pe.count=Math.max(pe.count,he.start+he.count-pe.start):(++fe,ae[fe]=he)}ae.length=fe+1;const H=n.getParameter(t.UNPACK_ROW_LENGTH),Y=n.getParameter(t.UNPACK_SKIP_PIXELS),se=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,v.width);for(let Me=0,pe=ae.length;Me<pe;Me++){const he=ae[Me],Ee=Math.floor(he.start/4),Le=Math.ceil(he.count/4),Ge=Ee%v.width,B=Math.floor(Ee/v.width),xe=Le,ie=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Ge),n.pixelStorei(t.UNPACK_SKIP_ROWS,B),n.texSubImage2D(t.TEXTURE_2D,0,Ge,B,xe,ie,W,q,v.data)}R.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,H),n.pixelStorei(t.UNPACK_SKIP_PIXELS,Y),n.pixelStorei(t.UNPACK_SKIP_ROWS,se)}}function me(R,v,W){let q=t.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),v.isData3DTexture&&(q=t.TEXTURE_3D);const te=ke(R,v),ae=v.source;n.bindTexture(q,R.__webglTexture,t.TEXTURE0+W);const fe=i.get(ae);if(ae.version!==fe.__version||te===!0){if(n.activeTexture(t.TEXTURE0+W),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const ie=rt.getPrimaries(rt.workingColorSpace),ve=v.colorSpace===lr?null:rt.getPrimaries(v.colorSpace),ye=v.colorSpace===lr||ie===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye)}n.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment);let Y=g(v.image,!1,r.maxTextureSize);Y=Ze(v,Y);const se=s.convert(v.format,v.colorSpace),Me=s.convert(v.type);let pe=S(v.internalFormat,se,Me,v.normalized,v.colorSpace,v.isVideoTexture);Fe(q,v);let he;const Ee=v.mipmaps,Le=v.isVideoTexture!==!0,Ge=fe.__version===void 0||te===!0,B=ae.dataReady,xe=T(v,Y);if(v.isDepthTexture)pe=b(v.format===Gr,v.type),Ge&&(Le?n.texStorage2D(t.TEXTURE_2D,1,pe,Y.width,Y.height):n.texImage2D(t.TEXTURE_2D,0,pe,Y.width,Y.height,0,se,Me,null));else if(v.isDataTexture)if(Ee.length>0){Le&&Ge&&n.texStorage2D(t.TEXTURE_2D,xe,pe,Ee[0].width,Ee[0].height);for(let ie=0,ve=Ee.length;ie<ve;ie++)he=Ee[ie],Le?B&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,he.width,he.height,se,Me,he.data):n.texImage2D(t.TEXTURE_2D,ie,pe,he.width,he.height,0,se,Me,he.data);v.generateMipmaps=!1}else Le?(Ge&&n.texStorage2D(t.TEXTURE_2D,xe,pe,Y.width,Y.height),B&&ee(v,Y,se,Me)):n.texImage2D(t.TEXTURE_2D,0,pe,Y.width,Y.height,0,se,Me,Y.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Le&&Ge&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,pe,Ee[0].width,Ee[0].height,Y.depth);for(let ie=0,ve=Ee.length;ie<ve;ie++)if(he=Ee[ie],v.format!==si)if(se!==null)if(Le){if(B)if(v.layerUpdates.size>0){const ye=o0(he.width,he.height,v.format,v.type);for(const re of v.layerUpdates){const Ie=he.data.subarray(re*ye/he.data.BYTES_PER_ELEMENT,(re+1)*ye/he.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,re,he.width,he.height,1,se,Ie)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,he.width,he.height,Y.depth,se,he.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ie,pe,he.width,he.height,Y.depth,0,he.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?B&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,he.width,he.height,Y.depth,se,Me,he.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ie,pe,he.width,he.height,Y.depth,0,se,Me,he.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Le&&Ge&&n.texStorage2D(t.TEXTURE_2D,xe,pe,Ee[0].width,Ee[0].height);for(let ie=0,ve=Ee.length;ie<ve;ie++)he=Ee[ie],v.format!==si?se!==null?Le?B&&n.compressedTexSubImage2D(t.TEXTURE_2D,ie,0,0,he.width,he.height,se,he.data):n.compressedTexImage2D(t.TEXTURE_2D,ie,pe,he.width,he.height,0,he.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?B&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,he.width,he.height,se,Me,he.data):n.texImage2D(t.TEXTURE_2D,ie,pe,he.width,he.height,0,se,Me,he.data)}else if(v.isDataArrayTexture)if(Le){if(Ge&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,pe,Y.width,Y.height,Y.depth),B)if(v.layerUpdates.size>0){const ie=o0(Y.width,Y.height,v.format,v.type);for(const ve of v.layerUpdates){const ye=Y.data.subarray(ve*ie/Y.data.BYTES_PER_ELEMENT,(ve+1)*ie/Y.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ve,Y.width,Y.height,1,se,Me,ye)}v.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,se,Me,Y.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,pe,Y.width,Y.height,Y.depth,0,se,Me,Y.data);else if(v.isData3DTexture)Le?(Ge&&n.texStorage3D(t.TEXTURE_3D,xe,pe,Y.width,Y.height,Y.depth),B&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,se,Me,Y.data)):n.texImage3D(t.TEXTURE_3D,0,pe,Y.width,Y.height,Y.depth,0,se,Me,Y.data);else if(v.isFramebufferTexture){if(Ge)if(Le)n.texStorage2D(t.TEXTURE_2D,xe,pe,Y.width,Y.height);else{let ie=Y.width,ve=Y.height;for(let ye=0;ye<xe;ye++)n.texImage2D(t.TEXTURE_2D,ye,pe,ie,ve,0,se,Me,null),ie>>=1,ve>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in t){const ie=t.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),Y.parentNode!==ie){ie.appendChild(Y),h.add(v),ie.onpaint=ve=>{const ye=ve.changedElements;for(const re of h)ye.includes(re.image)&&(re.needsUpdate=!0)},ie.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,Y);else{const ye=t.RGBA,re=t.RGBA,Ie=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,ye,re,Ie,Y)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ee.length>0){if(Le&&Ge){const ie=$e(Ee[0]);n.texStorage2D(t.TEXTURE_2D,xe,pe,ie.width,ie.height)}for(let ie=0,ve=Ee.length;ie<ve;ie++)he=Ee[ie],Le?B&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,se,Me,he):n.texImage2D(t.TEXTURE_2D,ie,pe,se,Me,he);v.generateMipmaps=!1}else if(Le){if(Ge){const ie=$e(Y);n.texStorage2D(t.TEXTURE_2D,xe,pe,ie.width,ie.height)}B&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,se,Me,Y)}else n.texImage2D(t.TEXTURE_2D,0,pe,se,Me,Y);d(v)&&x(q),fe.__version=ae.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function Ue(R,v,W){if(v.image.length!==6)return;const q=ke(R,v),te=v.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+W);const ae=i.get(te);if(te.version!==ae.__version||q===!0){n.activeTexture(t.TEXTURE0+W);const fe=rt.getPrimaries(rt.workingColorSpace),H=v.colorSpace===lr?null:rt.getPrimaries(v.colorSpace),Y=v.colorSpace===lr||fe===H?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);const se=v.isCompressedTexture||v.image[0].isCompressedTexture,Me=v.image[0]&&v.image[0].isDataTexture,pe=[];for(let re=0;re<6;re++)!se&&!Me?pe[re]=g(v.image[re],!0,r.maxCubemapSize):pe[re]=Me?v.image[re].image:v.image[re],pe[re]=Ze(v,pe[re]);const he=pe[0],Ee=s.convert(v.format,v.colorSpace),Le=s.convert(v.type),Ge=S(v.internalFormat,Ee,Le,v.normalized,v.colorSpace),B=v.isVideoTexture!==!0,xe=ae.__version===void 0||q===!0,ie=te.dataReady;let ve=T(v,he);Fe(t.TEXTURE_CUBE_MAP,v);let ye;if(se){B&&xe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ve,Ge,he.width,he.height);for(let re=0;re<6;re++){ye=pe[re].mipmaps;for(let Ie=0;Ie<ye.length;Ie++){const Ce=ye[Ie];v.format!==si?Ee!==null?B?ie&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie,0,0,Ce.width,Ce.height,Ee,Ce.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie,Ge,Ce.width,Ce.height,0,Ce.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie,0,0,Ce.width,Ce.height,Ee,Le,Ce.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie,Ge,Ce.width,Ce.height,0,Ee,Le,Ce.data)}}}else{if(ye=v.mipmaps,B&&xe){ye.length>0&&ve++;const re=$e(pe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ve,Ge,re.width,re.height)}for(let re=0;re<6;re++)if(Me){B?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,pe[re].width,pe[re].height,Ee,Le,pe[re].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ge,pe[re].width,pe[re].height,0,Ee,Le,pe[re].data);for(let Ie=0;Ie<ye.length;Ie++){const ft=ye[Ie].image[re].image;B?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie+1,0,0,ft.width,ft.height,Ee,Le,ft.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie+1,Ge,ft.width,ft.height,0,Ee,Le,ft.data)}}else{B?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ee,Le,pe[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ge,Ee,Le,pe[re]);for(let Ie=0;Ie<ye.length;Ie++){const Ce=ye[Ie];B?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie+1,0,0,Ee,Le,Ce.image[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie+1,Ge,Ee,Le,Ce.image[re])}}}d(v)&&x(t.TEXTURE_CUBE_MAP),ae.__version=te.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function _e(R,v,W,q,te,ae){const fe=s.convert(W.format,W.colorSpace),H=s.convert(W.type),Y=S(W.internalFormat,fe,H,W.normalized,W.colorSpace),se=i.get(v),Me=i.get(W);if(Me.__renderTarget=v,!se.__hasExternalTextures){const pe=Math.max(1,v.width>>ae),he=Math.max(1,v.height>>ae);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,ae,Y,pe,he,v.depth,0,fe,H,null):n.texImage2D(te,ae,Y,pe,he,0,fe,H,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Pe(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,te,Me.__webglTexture,0,ne(v)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,te,Me.__webglTexture,ae),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Be(R,v,W){if(t.bindRenderbuffer(t.RENDERBUFFER,R),v.depthBuffer){const q=v.depthTexture,te=q&&q.isDepthTexture?q.type:null,ae=b(v.stencilBuffer,te),fe=v.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Pe(v)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ne(v),ae,v.width,v.height):W?t.renderbufferStorageMultisample(t.RENDERBUFFER,ne(v),ae,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,ae,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,fe,t.RENDERBUFFER,R)}else{const q=v.textures;for(let te=0;te<q.length;te++){const ae=q[te],fe=s.convert(ae.format,ae.colorSpace),H=s.convert(ae.type),Y=S(ae.internalFormat,fe,H,ae.normalized,ae.colorSpace);Pe(v)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ne(v),Y,v.width,v.height):W?t.renderbufferStorageMultisample(t.RENDERBUFFER,ne(v),Y,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,Y,v.width,v.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ut(R,v,W){const q=v.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const te=i.get(v.depthTexture);if(te.__renderTarget=v,(!te.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),q){if(te.__webglInit===void 0&&(te.__webglInit=!0,v.depthTexture.addEventListener("dispose",C)),te.__webglTexture===void 0){te.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),Fe(t.TEXTURE_CUBE_MAP,v.depthTexture);const se=s.convert(v.depthTexture.format),Me=s.convert(v.depthTexture.type);let pe;v.depthTexture.format===Xi?pe=t.DEPTH_COMPONENT24:v.depthTexture.format===Gr&&(pe=t.DEPTH24_STENCIL8);for(let he=0;he<6;he++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,pe,v.width,v.height,0,se,Me,null)}}else O(v.depthTexture,0);const ae=te.__webglTexture,fe=ne(v),H=q?t.TEXTURE_CUBE_MAP_POSITIVE_X+W:t.TEXTURE_2D,Y=v.depthTexture.format===Gr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(v.depthTexture.format===Xi)Pe(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,H,ae,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,Y,H,ae,0);else if(v.depthTexture.format===Gr)Pe(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,H,ae,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,Y,H,ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Xe(R){const v=i.get(R),W=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){const q=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),q){const te=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,q.removeEventListener("dispose",te)};q.addEventListener("dispose",te),v.__depthDisposeCallback=te}v.__boundDepthTexture=q}if(R.depthTexture&&!v.__autoAllocateDepthBuffer)if(W)for(let q=0;q<6;q++)ut(v.__webglFramebuffer[q],R,q);else{const q=R.texture.mipmaps;q&&q.length>0?ut(v.__webglFramebuffer[0],R,0):ut(v.__webglFramebuffer,R,0)}else if(W){v.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[q]),v.__webglDepthbuffer[q]===void 0)v.__webglDepthbuffer[q]=t.createRenderbuffer(),Be(v.__webglDepthbuffer[q],R,!1);else{const te=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=v.__webglDepthbuffer[q];t.bindRenderbuffer(t.RENDERBUFFER,ae),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,ae)}}else{const q=R.texture.mipmaps;if(q&&q.length>0?n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=t.createRenderbuffer(),Be(v.__webglDepthbuffer,R,!1);else{const te=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=v.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ae),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,ae)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function qe(R,v,W){const q=i.get(R);v!==void 0&&_e(q.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),W!==void 0&&Xe(R)}function tt(R){const v=R.texture,W=i.get(R),q=i.get(v);R.addEventListener("dispose",y);const te=R.textures,ae=R.isWebGLCubeRenderTarget===!0,fe=te.length>1;if(fe||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=v.version,a.memory.textures++),ae){W.__webglFramebuffer=[];for(let H=0;H<6;H++)if(v.mipmaps&&v.mipmaps.length>0){W.__webglFramebuffer[H]=[];for(let Y=0;Y<v.mipmaps.length;Y++)W.__webglFramebuffer[H][Y]=t.createFramebuffer()}else W.__webglFramebuffer[H]=t.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){W.__webglFramebuffer=[];for(let H=0;H<v.mipmaps.length;H++)W.__webglFramebuffer[H]=t.createFramebuffer()}else W.__webglFramebuffer=t.createFramebuffer();if(fe)for(let H=0,Y=te.length;H<Y;H++){const se=i.get(te[H]);se.__webglTexture===void 0&&(se.__webglTexture=t.createTexture(),a.memory.textures++)}if(R.samples>0&&Pe(R)===!1){W.__webglMultisampledFramebuffer=t.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let H=0;H<te.length;H++){const Y=te[H];W.__webglColorRenderbuffer[H]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,W.__webglColorRenderbuffer[H]);const se=s.convert(Y.format,Y.colorSpace),Me=s.convert(Y.type),pe=S(Y.internalFormat,se,Me,Y.normalized,Y.colorSpace,R.isXRRenderTarget===!0),he=ne(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,he,pe,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+H,t.RENDERBUFFER,W.__webglColorRenderbuffer[H])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(W.__webglDepthRenderbuffer=t.createRenderbuffer(),Be(W.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ae){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),Fe(t.TEXTURE_CUBE_MAP,v);for(let H=0;H<6;H++)if(v.mipmaps&&v.mipmaps.length>0)for(let Y=0;Y<v.mipmaps.length;Y++)_e(W.__webglFramebuffer[H][Y],R,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+H,Y);else _e(W.__webglFramebuffer[H],R,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0);d(v)&&x(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(fe){for(let H=0,Y=te.length;H<Y;H++){const se=te[H],Me=i.get(se);let pe=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(pe,Me.__webglTexture),Fe(pe,se),_e(W.__webglFramebuffer,R,se,t.COLOR_ATTACHMENT0+H,pe,0),d(se)&&x(pe)}n.unbindTexture()}else{let H=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(H=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(H,q.__webglTexture),Fe(H,v),v.mipmaps&&v.mipmaps.length>0)for(let Y=0;Y<v.mipmaps.length;Y++)_e(W.__webglFramebuffer[Y],R,v,t.COLOR_ATTACHMENT0,H,Y);else _e(W.__webglFramebuffer,R,v,t.COLOR_ATTACHMENT0,H,0);d(v)&&x(H),n.unbindTexture()}R.depthBuffer&&Xe(R)}function He(R){const v=R.textures;for(let W=0,q=v.length;W<q;W++){const te=v[W];if(d(te)){const ae=E(R),fe=i.get(te).__webglTexture;n.bindTexture(ae,fe),x(ae),n.unbindTexture()}}}const st=[],pt=[];function Mt(R){if(R.samples>0){if(Pe(R)===!1){const v=R.textures,W=R.width,q=R.height;let te=t.COLOR_BUFFER_BIT;const ae=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=i.get(R),H=v.length>1;if(H)for(let se=0;se<v.length;se++)n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+se,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+se,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);const Y=R.texture.mipmaps;Y&&Y.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let se=0;se<v.length;se++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),H){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,fe.__webglColorRenderbuffer[se]);const Me=i.get(v[se]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Me,0)}t.blitFramebuffer(0,0,W,q,0,0,W,q,te,t.NEAREST),c===!0&&(st.length=0,pt.length=0,st.push(t.COLOR_ATTACHMENT0+se),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(st.push(ae),pt.push(ae),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,pt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,st))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),H)for(let se=0;se<v.length;se++){n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+se,t.RENDERBUFFER,fe.__webglColorRenderbuffer[se]);const Me=i.get(v[se]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+se,t.TEXTURE_2D,Me,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&c){const v=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[v])}}}function ne(R){return Math.min(r.maxSamples,R.samples)}function Pe(R){const v=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function L(R){const v=a.render.frame;p.get(R)!==v&&(p.set(R,v),R.update())}function Ze(R,v){const W=R.colorSpace,q=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||W!==gc&&W!==lr&&(rt.getTransfer(W)===gt?(q!==si||te!==In)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):dt("WebGLTextures: Unsupported texture color space:",W)),v}function $e(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=Q,this.resetTextureUnits=F,this.getTextureUnits=D,this.setTextureUnits=V,this.setTexture2D=O,this.setTexture2DArray=U,this.setTexture3D=X,this.setTextureCube=K,this.rebindTextures=qe,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Pe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function H2(t,e){function n(i,r=lr){let s;const a=rt.getTransfer(r);if(i===In)return t.UNSIGNED_BYTE;if(i===Gh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Wh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===g_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===x_)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===p_)return t.BYTE;if(i===m_)return t.SHORT;if(i===mo)return t.UNSIGNED_SHORT;if(i===Hh)return t.INT;if(i===Ei)return t.UNSIGNED_INT;if(i===xi)return t.FLOAT;if(i===bi)return t.HALF_FLOAT;if(i===__)return t.ALPHA;if(i===v_)return t.RGB;if(i===si)return t.RGBA;if(i===Xi)return t.DEPTH_COMPONENT;if(i===Gr)return t.DEPTH_STENCIL;if(i===y_)return t.RED;if(i===Vh)return t.RED_INTEGER;if(i===Qr)return t.RG;if(i===jh)return t.RG_INTEGER;if(i===Xh)return t.RGBA_INTEGER;if(i===Fl||i===kl||i===zl||i===Bl)if(a===gt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Fl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===kl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===zl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Bl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Fl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===kl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===zl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Bl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===sf||i===af||i===of||i===lf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===sf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===af)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===of)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===lf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===cf||i===uf||i===df||i===ff||i===hf||i===pc||i===pf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===cf||i===uf)return a===gt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===df)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===ff)return s.COMPRESSED_R11_EAC;if(i===hf)return s.COMPRESSED_SIGNED_R11_EAC;if(i===pc)return s.COMPRESSED_RG11_EAC;if(i===pf)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===mf||i===gf||i===xf||i===_f||i===vf||i===yf||i===Sf||i===Mf||i===Ef||i===bf||i===wf||i===Tf||i===Af||i===Cf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===mf)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===gf)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===xf)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===_f)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===vf)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===yf)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Sf)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Mf)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ef)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bf)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===wf)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Tf)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Af)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Cf)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Rf||i===Pf||i===Nf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Rf)return a===gt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Pf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Nf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Df||i===If||i===mc||i===Lf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Df)return s.COMPRESSED_RED_RGTC1_EXT;if(i===If)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===mc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Lf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===go?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const G2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,W2=`
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

}`;class V2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new P_(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new wi({vertexShader:G2,fragmentShader:W2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new We(new Ao(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class j2 extends Ar{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,u=null,p=null,h=null,f=null,m=null,_=null;const M=typeof XRWebGLBinding<"u",g=new V2,d={},x=n.getContextAttributes();let E=null,S=null;const b=[],T=[],C=new je;let y=null,A=null;const P=new Dn;P.viewport=new Rt;const N=new Dn;N.viewport=new Rt;const I=[P,N],F=new JM;let D=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ee=b[Z];return ee===void 0&&(ee=new Ru,b[Z]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Z){let ee=b[Z];return ee===void 0&&(ee=new Ru,b[Z]=ee),ee.getGripSpace()},this.getHand=function(Z){let ee=b[Z];return ee===void 0&&(ee=new Ru,b[Z]=ee),ee.getHandSpace()};function Q(Z){const ee=T.indexOf(Z.inputSource);if(ee===-1)return;const me=b[ee];me!==void 0&&(me.update(Z.inputSource,Z.frame,u||a),me.dispatchEvent({type:Z.type,data:Z.inputSource}))}function k(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",O);for(let Z=0;Z<b.length;Z++){const ee=T[Z];ee!==null&&(T[Z]=null,b[Z].disconnect(ee))}D=null,V=null,g.reset();for(const Z in d)delete d[Z];if(e.setRenderTarget(E),m=null,f=null,h=null,r=null,S=null,ke.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(C.width,C.height,!1),A!==null){const Z=A.camera;Z.fov=A.fov,Z.zoom=A.zoom,Z.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(Z){u=Z},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h===null&&M&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",k),r.addEventListener("inputsourceschange",O),x.xrCompatible!==!0&&await n.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(C),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Ue=null,_e=null;x.depth&&(_e=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,me=x.stencil?Gr:Xi,Ue=x.stencil?go:Ei);const Be={colorFormat:n.RGBA8,depthFormat:_e,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(Be),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new li(f.textureWidth,f.textureHeight,{format:si,type:In,depthTexture:new vo(f.textureWidth,f.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const me={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,me),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new li(m.framebufferWidth,m.framebufferHeight,{format:si,type:In,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(o),ke.setContext(r),ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function O(Z){for(let ee=0;ee<Z.removed.length;ee++){const me=Z.removed[ee],Ue=T.indexOf(me);Ue>=0&&(T[Ue]=null,b[Ue].disconnect(me))}for(let ee=0;ee<Z.added.length;ee++){const me=Z.added[ee];let Ue=T.indexOf(me);if(Ue===-1){for(let Be=0;Be<b.length;Be++)if(Be>=T.length){T.push(me),Ue=Be;break}else if(T[Be]===null){T[Be]=me,Ue=Be;break}if(Ue===-1)break}const _e=b[Ue];_e&&_e.connect(me)}}const U=new $,X=new $;function K(Z,ee,me){U.setFromMatrixPosition(ee.matrixWorld),X.setFromMatrixPosition(me.matrixWorld);const Ue=U.distanceTo(X),_e=ee.projectionMatrix.elements,Be=me.projectionMatrix.elements,ut=_e[14]/(_e[10]-1),Xe=_e[14]/(_e[10]+1),qe=(_e[9]+1)/_e[5],tt=(_e[9]-1)/_e[5],He=(_e[8]-1)/_e[0],st=(Be[8]+1)/Be[0],pt=ut*He,Mt=ut*st,ne=Ue/(-He+st),Pe=ne*-He;if(ee.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Pe),Z.translateZ(ne),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),_e[10]===-1)Z.projectionMatrix.copy(ee.projectionMatrix),Z.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const L=ut+ne,Ze=Xe+ne,$e=pt-Pe,R=Mt+(Ue-Pe),v=qe*Xe/Ze*L,W=tt*Xe/Ze*L;Z.projectionMatrix.makePerspective($e,R,v,W,L,Ze),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function le(Z,ee){ee===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ee.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let ee=Z.near,me=Z.far;g.texture!==null&&(g.depthNear>0&&(ee=g.depthNear),g.depthFar>0&&(me=g.depthFar)),F.near=N.near=P.near=ee,F.far=N.far=P.far=me,(D!==F.near||V!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),D=F.near,V=F.far),F.layers.mask=Z.layers.mask|6,P.layers.mask=F.layers.mask&-5,N.layers.mask=F.layers.mask&-3;const Ue=Z.parent,_e=F.cameras;le(F,Ue);for(let Be=0;Be<_e.length;Be++)le(_e[Be],Ue);_e.length===2?K(F,P,N):F.projectionMatrix.copy(P.projectionMatrix),A===null&&Z.isPerspectiveCamera&&(A={camera:Z,fov:Z.fov,zoom:Z.zoom}),ue(Z,F,Ue)};function ue(Z,ee,me){me===null?Z.matrix.copy(ee.matrixWorld):(Z.matrix.copy(me.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ee.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ee.projectionMatrix),Z.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=_o*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(Z){c=Z,f!==null&&(f.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(Z){return d[Z]};let we=null;function Fe(Z,ee){if(p=ee.getViewerPose(u||a),_=ee,p!==null){const me=p.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let Ue=!1;me.length!==F.cameras.length&&(F.cameras.length=0,Ue=!0);for(let Xe=0;Xe<me.length;Xe++){const qe=me[Xe];let tt=null;if(m!==null)tt=m.getViewport(qe);else{const st=h.getViewSubImage(f,qe);tt=st.viewport,Xe===0&&(e.setRenderTargetTextures(S,st.colorTexture,st.depthStencilTexture),e.setRenderTarget(S))}let He=I[Xe];He===void 0&&(He=new Dn,He.layers.enable(Xe),He.viewport=new Rt,I[Xe]=He),He.matrix.fromArray(qe.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(qe.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(tt.x,tt.y,tt.width,tt.height),Xe===0&&(F.matrix.copy(He.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ue===!0&&F.cameras.push(He)}const _e=r.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){h=i.getBinding();const Xe=h.getDepthInformation(me[0]);Xe&&Xe.isValid&&Xe.texture&&g.init(Xe,r.renderState)}if(_e&&_e.includes("camera-access")&&M){e.state.unbindTexture(),h=i.getBinding();for(let Xe=0;Xe<me.length;Xe++){const qe=me[Xe].camera;if(qe){let tt=d[qe];tt||(tt=new P_,d[qe]=tt);const He=h.getCameraImage(qe);tt.sourceTexture=He}}}}for(let me=0;me<b.length;me++){const Ue=T[me],_e=b[me];Ue!==null&&_e!==void 0&&_e.update(Ue,ee,u||a)}we&&we(Z,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),_=null}const ke=new U_;ke.setAnimationLoop(Fe),this.setAnimationLoop=function(Z){we=Z},this.dispose=function(){}}}const X2=new At,G_=new Ke;G_.set(-1,0,0,0,1,0,0,0,1);function $2(t,e){function n(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,N_(t)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,x,E,S){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(g,d):d.isMeshLambertMaterial?(s(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(g,d),h(g,d)):d.isMeshPhongMaterial?(s(g,d),p(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(g,d),f(g,d),d.isMeshPhysicalMaterial&&m(g,d,S)):d.isMeshMatcapMaterial?(s(g,d),_(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),M(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?c(g,d,x,E):d.isSpriteMaterial?u(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,n(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Cn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,n(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Cn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,n(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,n(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const x=e.get(d),E=x.envMap,S=x.envMapRotation;E&&(g.envMap.value=E,g.envMapRotation.value.setFromMatrix4(X2.makeRotationFromEuler(S)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(G_),g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function c(g,d,x,E){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*x,g.scale.value=E*.5,d.map&&(g.map.value=d.map,n(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function p(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function h(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function f(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function m(g,d,x){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Cn&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.retroreflectivity>0&&(g.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,d){d.matcap&&(g.matcap.value=d.matcap)}function M(g,d){const x=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Y2(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,b){const T=b.program;i.uniformBlockBinding(S,T)}function u(S,b){let T=r[S.id];T===void 0&&(g(S),T=p(S),r[S.id]=T,S.addEventListener("dispose",x));const C=b.program;i.updateUBOMapping(S,C);const y=e.render.frame;s[S.id]!==y&&(f(S),s[S.id]=y)}function p(S){const b=h();S.__bindingPointIndex=b;const T=t.createBuffer(),C=S.__size,y=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,C,y),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,b,T),T}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const b=r[S.id],T=S.uniforms,C=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,b);for(let y=0,A=T.length;y<A;y++){const P=T[y];if(Array.isArray(P))for(let N=0,I=P.length;N<I;N++)m(P[N],y,N,C);else m(P,y,0,C)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(S,b,T,C){if(M(S,b,T,C)===!0){const y=S.__offset,A=S.value;if(Array.isArray(A)){let P=0;for(let N=0;N<A.length;N++){const I=A[N],F=d(I);_(I,S.__data,P),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(P+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(A,S.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,y,S.__data)}}function _(S,b,T){typeof S=="number"||typeof S=="boolean"?b[0]=S:S.isMatrix3?(b[0]=S.elements[0],b[1]=S.elements[1],b[2]=S.elements[2],b[3]=0,b[4]=S.elements[3],b[5]=S.elements[4],b[6]=S.elements[5],b[7]=0,b[8]=S.elements[6],b[9]=S.elements[7],b[10]=S.elements[8],b[11]=0):ArrayBuffer.isView(S)?b.set(new S.constructor(S.buffer,S.byteOffset,b.length)):S.toArray(b,T)}function M(S,b,T,C){const y=S.value,A=b+"_"+T;if(C[A]===void 0)return typeof y=="number"||typeof y=="boolean"?C[A]=y:ArrayBuffer.isView(y)?C[A]=y.slice():C[A]=y.clone(),!0;{const P=C[A];if(typeof y=="number"||typeof y=="boolean"){if(P!==y)return C[A]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(P.equals(y)===!1)return P.copy(y),!0}}return!1}function g(S){const b=S.uniforms;let T=0;const C=16;for(let A=0,P=b.length;A<P;A++){const N=Array.isArray(b[A])?b[A]:[b[A]];for(let I=0,F=N.length;I<F;I++){const D=N[I],V=Array.isArray(D.value)?D.value:[D.value];for(let Q=0,k=V.length;Q<k;Q++){const O=V[Q],U=d(O),X=T%C,K=X%U.boundary,le=X+K;T+=K,le!==0&&C-le<U.storage&&(T+=C-le),D.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=T,T+=U.storage}}}const y=T%C;return y>0&&(T+=C-y),S.__size=T,S.__cache={},this}function d(S){const b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(b.boundary=16,b.storage=S.byteLength):Ve("WebGLRenderer: Unsupported uniform value type.",S),b}function x(S){const b=S.target;b.removeEventListener("dispose",x);const T=a.indexOf(b.__bindingPointIndex);a.splice(T,1),t.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function E(){for(const S in r)t.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:c,update:u,dispose:E}}const q2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let hi=null;function K2(){return hi===null&&(hi=new UM(q2,16,16,Qr,bi),hi.name="DFG_LUT",hi.minFilter=un,hi.magFilter=un,hi.wrapS=ki,hi.wrapT=ki,hi.generateMipmaps=!1,hi.needsUpdate=!0),hi}class Z2{constructor(e={}){const{canvas:n=q1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:m=In}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const M=m,g=new Set([Xh,jh,Vh]),d=new Set([In,Ei,mo,go,Gh,Wh]),x=new Uint32Array(4),E=new Int32Array(4),S=new $;let b=null,T=null;const C=[],y=[];let A=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let N=!1,I=null,F=null,D=null,V=null;this._outputColorSpace=Gn;let Q=0,k=0,O=null,U=-1,X=null;const K=new Rt,le=new Rt;let ue=null;const we=new et(0);let Fe=0,ke=n.width,Z=n.height,ee=1,me=null,Ue=null;const _e=new Rt(0,0,ke,Z),Be=new Rt(0,0,ke,Z);let ut=!1;const Xe=new Zh;let qe=!1,tt=!1;const He=new At,st=new $,pt=new Rt,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ne=!1;function Pe(){return O===null?ee:1}let L=i;function Ze(w,z){return n.getContext(w,z)}let $e,R,v,W,q,te,ae,fe,H,Y,se,Me,pe,he,Ee,Le,Ge,B,xe,ie,ve,ye,re;try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:p,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Bh}`),n.addEventListener("webglcontextlost",ft,!1),n.addEventListener("webglcontextrestored",at,!1),n.addEventListener("webglcontextcreationerror",fn,!1),L===null){const z="webgl2";if(L=Ze(z,w),L===null)throw Ze(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ie()}catch(w){throw n.removeEventListener("webglcontextlost",ft,!1),n.removeEventListener("webglcontextrestored",at,!1),n.removeEventListener("webglcontextcreationerror",fn,!1),dt("WebGLRenderer: "+w.message),w}function Ie(){$e=new Kw(L),$e.init(),ve=new H2(L,$e),R=new Bw(L,$e,e,ve),v=new z2(L,$e),R.reversedDepthBuffer&&f&&v.buffers.depth.setReversed(!0),F=L.createFramebuffer(),D=L.createFramebuffer(),V=L.createFramebuffer(),W=new Qw(L),q=new w2,te=new B2(L,$e,v,q,R,ve,W),ae=new qw(P),fe=new tE(L),ye=new kw(L,fe),H=new Zw(L,fe,W,ye),Y=new tT(L,H,fe,ye,W),B=new eT(L,R,te),Ee=new Hw(q),se=new b2(P,ae,$e,R,ye,Ee),Me=new $2(P,q),pe=new A2,he=new I2($e),Ge=new Fw(P,ae,v,Y,_,c),Le=new k2(P,Y,R),re=new Y2(L,W,R,v),xe=new zw(L,$e,W),ie=new Jw(L,$e,W),W.programs=se.programs,P.capabilities=R,P.extensions=$e,P.properties=q,P.renderLists=pe,P.shadowMap=Le,P.state=v,P.info=W}M!==In&&(A=new iT(M,n.width,n.height,o,r,s));const Ce=new j2(P,L);this.xr=Ce,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=$e.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=$e.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(w){w!==void 0&&(ee=w,this.setSize(ke,Z,!1))},this.getSize=function(w){return w.set(ke,Z)},this.setSize=function(w,z,J=!0){if(Ce.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}ke=w,Z=z,n.width=Math.floor(w*ee),n.height=Math.floor(z*ee),J===!0&&(n.style.width=w+"px",n.style.height=z+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,w,z)},this.getDrawingBufferSize=function(w){return w.set(ke*ee,Z*ee).floor()},this.setDrawingBufferSize=function(w,z,J){ke=w,Z=z,ee=J,n.width=Math.floor(w*J),n.height=Math.floor(z*J),this.setViewport(0,0,w,z)},this.setEffects=function(w){if(M===In){dt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let z=0;z<w.length;z++)if(w[z].isOutputPass===!0){Ve("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(K)},this.getViewport=function(w){return w.copy(_e)},this.setViewport=function(w,z,J,G){w.isVector4?_e.set(w.x,w.y,w.z,w.w):_e.set(w,z,J,G),v.viewport(K.copy(_e).multiplyScalar(ee).round())},this.getScissor=function(w){return w.copy(Be)},this.setScissor=function(w,z,J,G){w.isVector4?Be.set(w.x,w.y,w.z,w.w):Be.set(w,z,J,G),v.scissor(le.copy(Be).multiplyScalar(ee).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(w){v.setScissorTest(ut=w)},this.setOpaqueSort=function(w){me=w},this.setTransparentSort=function(w){Ue=w},this.getClearColor=function(w){return w.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor(...arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha(...arguments)},this.clear=function(w=!0,z=!0,J=!0){let G=0;if(w){let j=!1;if(O!==null){const de=O.texture.format;j=g.has(de)}if(j){const de=O.texture.type,be=d.has(de),ge=Ge.getClearColor(),Te=Ge.getClearAlpha(),Ne=ge.r,Ye=ge.g,Je=ge.b;be?(x[0]=Ne,x[1]=Ye,x[2]=Je,x[3]=Te,L.clearBufferuiv(L.COLOR,0,x)):(E[0]=Ne,E[1]=Ye,E[2]=Je,E[3]=Te,L.clearBufferiv(L.COLOR,0,E))}else G|=L.COLOR_BUFFER_BIT}z&&(G|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),I=w},this.dispose=function(){n.removeEventListener("webglcontextlost",ft,!1),n.removeEventListener("webglcontextrestored",at,!1),n.removeEventListener("webglcontextcreationerror",fn,!1),Ge.dispose(),pe.dispose(),he.dispose(),q.dispose(),ae.dispose(),Y.dispose(),ye.dispose(),re.dispose(),se.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",rs),Ce.removeEventListener("sessionend",Po),qn.stop()};function ft(w){w.preventDefault(),Pm("WebGLRenderer: Context Lost."),N=!0}function at(){Pm("WebGLRenderer: Context Restored."),N=!1;const w=W.autoReset,z=Le.enabled,J=Le.autoUpdate,G=Le.needsUpdate,j=Le.type;Ie(),W.autoReset=w,Le.enabled=z,Le.autoUpdate=J,Le.needsUpdate=G,Le.type=j}function fn(w){dt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function zn(w){const z=w.target;z.removeEventListener("dispose",zn),Vc(z)}function Vc(w){Co(w),q.remove(w)}function Co(w){const z=q.get(w).programs;z!==void 0&&(z.forEach(function(J){se.releaseProgram(J)}),w.isShaderMaterial&&se.releaseShaderCache(w))}this.renderBufferDirect=function(w,z,J,G,j,de){z===null&&(z=Mt);const be=j.isMesh&&j.matrixWorld.determinantAffine()<0,ge=ha(w,z,J,G,j);v.setMaterial(G,be);let Te=J.index,Ne=1;if(G.wireframe===!0){if(Te=H.getWireframeAttribute(J),Te===void 0)return;Ne=2}const Ye=J.drawRange,Je=J.attributes.position;let De=Ye.start*Ne,ot=(Ye.start+Ye.count)*Ne;de!==null&&(De=Math.max(De,de.start*Ne),ot=Math.min(ot,(de.start+de.count)*Ne)),Te!==null?(De=Math.max(De,0),ot=Math.min(ot,Te.count)):Je!=null&&(De=Math.max(De,0),ot=Math.min(ot,Je.count));const wt=ot-De;if(wt<0||wt===1/0)return;ye.setup(j,G,ge,J,Te);let mt,ht=xe;if(Te!==null&&(mt=fe.get(Te),ht=ie,ht.setIndex(mt)),j.isMesh)G.wireframe===!0?(v.setLineWidth(G.wireframeLinewidth*Pe()),ht.setMode(L.LINES)):ht.setMode(L.TRIANGLES);else if(j.isLine){let rn=G.linewidth;rn===void 0&&(rn=1),v.setLineWidth(rn*Pe()),j.isLineSegments?ht.setMode(L.LINES):j.isLineLoop?ht.setMode(L.LINE_LOOP):ht.setMode(L.LINE_STRIP)}else j.isPoints?ht.setMode(L.POINTS):j.isSprite&&ht.setMode(L.TRIANGLES);if(j.isBatchedMesh)if($e.get("WEBGL_multi_draw"))ht.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const rn=j._multiDrawStarts,Ae=j._multiDrawCounts,hn=j._multiDrawCount,lt=Te?fe.get(Te).bytesPerElement:1,Bn=q.get(G).currentProgram.getUniforms();for(let ui=0;ui<hn;ui++)Bn.setValue(L,"_gl_DrawID",ui),ht.render(rn[ui]/lt,Ae[ui])}else if(j.isInstancedMesh)ht.renderInstances(De,wt,j.count);else if(J.isInstancedBufferGeometry){const rn=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ae=Math.min(J.instanceCount,rn);ht.renderInstances(De,wt,Ae)}else ht.render(De,wt)};function Ro(w,z,J,G){I!==null&&w.isNodeMaterial&&I.setObject(G,w),qe===!0&&Ee.setState(w,J,!1),w.transparent===!0&&w.side===Ui&&w.forceSinglePass===!1?(w.side=Cn,w.needsUpdate=!0,Ti(w,z,G),w.side=Zr,w.needsUpdate=!0,Ti(w,z,G),w.side=Ui):Ti(w,z,G)}this.compile=function(w,z,J=null){J===null&&(J=w),I!==null&&I.renderStart(w,z,J),T=he.get(J),T.init(z),y.push(T),J.traverseVisible(function(j){j.isLight&&j.layers.test(z.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),w!==J&&w.traverseVisible(function(j){j.isLight&&j.layers.test(z.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),T.setupLights(),I!==null&&I.updateLights(T.state.lightsArray),tt=this.localClippingEnabled,qe=Ee.init(this.clippingPlanes,tt),qe===!0&&Ee.setGlobalState(this.clippingPlanes,z),I!==null&&Le.render(T.state.shadowsArray,J,z);const G=new Set;return w.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const de=j.material;if(de)if(Array.isArray(de))for(let be=0;be<de.length;be++){const ge=de[be];Ro(ge,J,z,j),G.add(ge)}else Ro(de,J,z,j),G.add(de)}),T=y.pop(),I!==null&&I.renderEnd(),G},this.compileAsync=function(w,z,J=null){const G=this.compile(w,z,J);return new Promise(j=>{function de(){if(G.forEach(function(be){const Te=q.get(be).currentProgram;(Te===void 0||Te.isReady())&&G.delete(be)}),G.size===0){j(w);return}setTimeout(de,10)}$e.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let is=null;function jc(w){is&&is(w)}function rs(){qn.stop()}function Po(){qn.start()}const qn=new U_;qn.setAnimationLoop(jc),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(w){is=w,Ce.setAnimationLoop(w),w===null?qn.stop():qn.start()},Ce.addEventListener("sessionstart",rs),Ce.addEventListener("sessionend",Po),this.render=function(w,z){if(z!==void 0&&z.isCamera!==!0){dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;I!==null&&I.renderStart(w,z);const J=Ce.enabled===!0&&Ce.isPresenting===!0,G=A!==null&&(O===null||J)&&A.begin(P,O);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(z),z=Ce.getCamera()),w.isScene===!0&&w.onBeforeRender(P,w,z,O),T=he.get(w,y.length),T.init(z),T.state.textureUnits=te.getTextureUnits(),y.push(T),He.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Xe.setFromProjectionMatrix(He,_i,z.reversedDepth),tt=this.localClippingEnabled,qe=Ee.init(this.clippingPlanes,tt),b=pe.get(w,C.length),b.init(),C.push(b),Ce.enabled===!0&&Ce.isPresenting===!0){const be=P.xr.getDepthSensingMesh();be!==null&&da(be,z,-1/0,P.sortObjects)}da(w,z,0,P.sortObjects),b.finish(),I!==null&&I.updateLights(T.state.lightsArray),P.sortObjects===!0&&b.sort(me,Ue),ne=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,ne&&Ge.addToRenderList(b,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),qe===!0&&Ee.beginShadows();const j=T.state.shadowsArray;if(Le.render(j,w,z),qe===!0&&Ee.endShadows(),(G&&A.hasRenderPass())===!1){const be=b.opaque,ge=b.transmissive;if(T.setupLights(),z.isArrayCamera){const Te=z.cameras;if(ge.length>0)for(let Ne=0,Ye=Te.length;Ne<Ye;Ne++){const Je=Te[Ne];ss(be,ge,w,Je)}ne&&Ge.render(w);for(let Ne=0,Ye=Te.length;Ne<Ye;Ne++){const Je=Te[Ne];No(b,w,Je,Je.viewport)}}else ge.length>0&&ss(be,ge,w,z),ne&&Ge.render(w),No(b,w,z)}O!==null&&k===0&&(te.updateMultisampleRenderTarget(O),te.updateRenderTargetMipmap(O)),G&&A.end(P),w.isScene===!0&&w.onAfterRender(P,w,z),ye.resetDefaultState(),U=-1,X=null,y.pop(),y.length>0?(T=y[y.length-1],te.setTextureUnits(T.state.textureUnits),qe===!0&&Ee.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?b=C[C.length-1]:b=null,I!==null&&I.renderEnd()};function da(w,z,J,G){if(w.visible===!1)return;if(w.layers.test(z.layers)){if(w.isGroup)J=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(z);else if(w.isLightProbeGrid)T.pushLightProbeGrid(w);else if(w.isLight)T.pushLight(w),w.castShadow&&T.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(Xe)){G&&pt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(He);const be=Y.update(w),ge=w.material;ge.visible&&b.push(w,be,ge,J,pt.z,null,z)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(Xe))){const be=Y.update(w),ge=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),pt.copy(w.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),pt.copy(be.boundingSphere.center)),pt.applyMatrix4(w.matrixWorld).applyMatrix4(He)),Array.isArray(ge)){const Te=be.groups;for(let Ne=0,Ye=Te.length;Ne<Ye;Ne++){const Je=Te[Ne],De=ge[Je.materialIndex];De&&De.visible&&b.push(w,be,De,J,pt.z,Je,z)}}else ge.visible&&b.push(w,be,ge,J,pt.z,null,z)}}const de=w.children;for(let be=0,ge=de.length;be<ge;be++)da(de[be],z,J,G)}function No(w,z,J,G){const{opaque:j,transmissive:de,transparent:be}=w;T.setupLightsView(J),qe===!0&&Ee.setGlobalState(P.clippingPlanes,J),G&&v.viewport(K.copy(G)),j.length>0&&Yi(j,z,J),de.length>0&&Yi(de,z,J),be.length>0&&Yi(be,z,J),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function ss(w,z,J,G){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[G.id]===void 0){const De=$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[G.id]=new li(1,1,{generateMipmaps:!0,type:De?bi:In,minFilter:Hr,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:rt.workingColorSpace})}const de=T.state.transmissionRenderTarget[G.id],be=G.viewport||K;de.setSize(be.z*P.transmissionResolutionScale,be.w*P.transmissionResolutionScale);const ge=P.getRenderTarget(),Te=P.getActiveCubeFace(),Ne=P.getActiveMipmapLevel();P.setRenderTarget(de),P.getClearColor(we),Fe=P.getClearAlpha(),Fe<1&&P.setClearColor(16777215,.5),P.clear(),ne&&Ge.render(J);const Ye=P.toneMapping;P.toneMapping=Si;const Je=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),T.setupLightsView(G),qe===!0&&Ee.setGlobalState(P.clippingPlanes,G),Yi(w,J,G),te.updateMultisampleRenderTarget(de),te.updateRenderTargetMipmap(de),$e.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let ot=0,wt=z.length;ot<wt;ot++){const mt=z[ot],{object:ht,geometry:rn,material:Ae,group:hn}=mt;if(Ae.side===Ui&&ht.layers.test(G.layers)){const lt=Ae.side;Ae.side=Cn,Ae.needsUpdate=!0,as(ht,J,G,rn,Ae,hn),Ae.side=lt,Ae.needsUpdate=!0,De=!0}}De===!0&&(te.updateMultisampleRenderTarget(de),te.updateRenderTargetMipmap(de))}P.setRenderTarget(ge,Te,Ne),P.setClearColor(we,Fe),Je!==void 0&&(G.viewport=Je),P.toneMapping=Ye}function Yi(w,z,J){const G=z.isScene===!0?z.overrideMaterial:null;for(let j=0,de=w.length;j<de;j++){const be=w[j],{object:ge,geometry:Te,group:Ne}=be;let Ye=be.material;Ye.allowOverride===!0&&G!==null&&(Ye=G),ge.layers.test(J.layers)&&as(ge,z,J,Te,Ye,Ne)}}function as(w,z,J,G,j,de){I!==null&&j.isNodeMaterial&&I.setObject(w,j),w.onBeforeRender(P,z,J,G,j,de),w.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),j.onBeforeRender(P,z,J,G,w,de),j.transparent===!0&&j.side===Ui&&j.forceSinglePass===!1?(j.side=Cn,j.needsUpdate=!0,P.renderBufferDirect(J,z,G,j,w,de),j.side=Zr,j.needsUpdate=!0,P.renderBufferDirect(J,z,G,j,w,de),j.side=Ui):P.renderBufferDirect(J,z,G,j,w,de),w.onAfterRender(P,z,J,G,j,de)}function Ti(w,z,J){z.isScene!==!0&&(z=Mt);const G=q.get(w),j=T.state.lights,de=T.state.shadowsArray,be=j.state.version,ge=se.getParameters(w,j.state,de,z,J,T.state.lightProbeGridArray),Te=se.getProgramCacheKey(ge);let Ne=G.programs;G.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?z.environment:null,G.fog=z.fog;const Ye=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;G.envMap=ae.get(w.envMap||G.environment,Ye),G.envMapRotation=G.environment!==null&&w.envMap===null?z.environmentRotation:w.envMapRotation,Ne===void 0&&(w.addEventListener("dispose",zn),Ne=new Map,G.programs=Ne);let Je=Ne.get(Te);if(Je!==void 0){if(G.currentProgram===Je&&G.lightsStateVersion===be)return os(w,ge),Je}else ge.uniforms=se.getUniforms(w),I!==null&&w.isNodeMaterial&&I.build(w,J,ge),w.onBeforeCompile(ge,P),Je=se.acquireProgram(ge,Te),Ne.set(Te,Je),G.uniforms=ge.uniforms;const De=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(De.clippingPlanes=Ee.uniform),os(w,ge),G.needsLights=Xc(w),G.lightsStateVersion=be,G.needsLights&&(De.ambientLightColor.value=j.state.ambient,De.lightProbe.value=j.state.probe,De.sunLights.value=j.state.sun,De.sunLightShadows.value=j.state.sunShadow,De.directionalLights.value=j.state.directional,De.directionalLightShadows.value=j.state.directionalShadow,De.spotLights.value=j.state.spot,De.spotLightShadows.value=j.state.spotShadow,De.rectAreaLights.value=j.state.rectArea,De.ltc_1.value=j.state.rectAreaLTC1,De.ltc_2.value=j.state.rectAreaLTC2,De.pointLights.value=j.state.point,De.pointLightShadows.value=j.state.pointShadow,De.hemisphereLights.value=j.state.hemi,De.sunShadowMatrix.value=j.state.sunShadowMatrix,De.sunShadowCascade.value=j.state.sunShadowCascade,De.directionalShadowMatrix.value=j.state.directionalShadowMatrix,De.spotLightMatrix.value=j.state.spotLightMatrix,De.spotLightMap.value=j.state.spotLightMap,De.pointShadowMatrix.value=j.state.pointShadowMatrix),G.lightProbeGrid=T.state.lightProbeGridArray.length>0,G.currentProgram=Je,G.uniformsList=null,Je}function Cr(w){if(w.uniformsList===null){const z=w.currentProgram.getUniforms();w.uniformsList=Hl.seqWithValue(z.seq,w.uniforms)}return w.uniformsList}function os(w,z){const J=q.get(w);J.outputColorSpace=z.outputColorSpace,J.batching=z.batching,J.batchingColor=z.batchingColor,J.instancing=z.instancing,J.instancingColor=z.instancingColor,J.instancingMorph=z.instancingMorph,J.skinning=z.skinning,J.morphTargets=z.morphTargets,J.morphNormals=z.morphNormals,J.morphColors=z.morphColors,J.morphTargetsCount=z.morphTargetsCount,J.numClippingPlanes=z.numClippingPlanes,J.numIntersection=z.numClipIntersection,J.vertexAlphas=z.vertexAlphas,J.vertexTangents=z.vertexTangents,J.toneMapping=z.toneMapping}function fa(w,z){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;S.setFromMatrixPosition(z.matrixWorld);for(let J=0,G=w.length;J<G;J++){const j=w[J];if(j.texture!==null&&j.boundingBox.containsPoint(S))return j}return null}function ha(w,z,J,G,j){z.isScene!==!0&&(z=Mt),te.resetTextureUnits();const de=z.fog,be=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?z.environment:null,ge=O===null?P.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:rt.workingColorSpace,Te=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ne=ae.get(G.envMap||be,Te),Ye=G.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Je=!!J.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),De=!!J.morphAttributes.position,ot=!!J.morphAttributes.normal,wt=!!J.morphAttributes.color;let mt=Si;G.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(mt=P.toneMapping);const ht=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,rn=ht!==void 0?ht.length:0,Ae=q.get(G),hn=T.state.lights;if(qe===!0&&(tt===!0||w!==X)){const yt=w===X&&G.id===U;Ee.setState(G,w,yt)}let lt=!1;G.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==hn.state.version||Ae.outputColorSpace!==ge||j.isBatchedMesh&&Ae.batching===!1||!j.isBatchedMesh&&Ae.batching===!0||j.isBatchedMesh&&Ae.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&Ae.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&Ae.instancing===!1||!j.isInstancedMesh&&Ae.instancing===!0||j.isSkinnedMesh&&Ae.skinning===!1||!j.isSkinnedMesh&&Ae.skinning===!0||j.isInstancedMesh&&Ae.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ae.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ae.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ae.instancingMorph===!1&&j.morphTexture!==null||Ae.envMap!==Ne||G.fog===!0&&Ae.fog!==de||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==Ee.numPlanes||Ae.numIntersection!==Ee.numIntersection)||Ae.vertexAlphas!==Ye||Ae.vertexTangents!==Je||Ae.morphTargets!==De||Ae.morphNormals!==ot||Ae.morphColors!==wt||Ae.toneMapping!==mt||Ae.morphTargetsCount!==rn||!!Ae.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(lt=!0):(lt=!0,Ae.__version=G.version);let Bn=Ae.currentProgram;lt===!0&&(Bn=Ti(G,z,j),I&&G.isNodeMaterial&&I.onUpdateProgram(G,Bn,Ae));let ui=!1,qi=!1,ls=!1;const vt=Bn.getUniforms(),Ut=Ae.uniforms;if(v.useProgram(Bn.program)&&(ui=!0,qi=!0,ls=!0),G.id!==U&&(U=G.id,qi=!0),Ae.needsLights){const yt=fa(T.state.lightProbeGridArray,j);Ae.lightProbeGrid!==yt&&(Ae.lightProbeGrid=yt,qi=!0)}if(ui||X!==w){v.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),vt.setValue(L,"projectionMatrix",w.projectionMatrix),vt.setValue(L,"viewMatrix",w.matrixWorldInverse);const Zi=vt.map.cameraPosition;Zi!==void 0&&Zi.setValue(L,st.setFromMatrixPosition(w.matrixWorld)),R.logarithmicDepthBuffer&&vt.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&vt.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),X!==w&&(X=w,qi=!0,ls=!0)}if(Ae.needsLights&&(hn.state.sunShadowMap.length>0&&vt.setValue(L,"sunShadowMap",hn.state.sunShadowMap,te),hn.state.directionalShadowMap.length>0&&vt.setValue(L,"directionalShadowMap",hn.state.directionalShadowMap,te),hn.state.spotShadowMap.length>0&&vt.setValue(L,"spotShadowMap",hn.state.spotShadowMap,te),hn.state.pointShadowMap.length>0&&vt.setValue(L,"pointShadowMap",hn.state.pointShadowMap,te)),j.isSkinnedMesh){vt.setOptional(L,j,"bindMatrix"),vt.setOptional(L,j,"bindMatrixInverse");const yt=j.skeleton;yt&&(yt.boneTexture===null&&yt.computeBoneTexture(),vt.setValue(L,"boneTexture",yt.boneTexture,te))}j.isBatchedMesh&&(vt.setOptional(L,j,"batchingTexture"),vt.setValue(L,"batchingTexture",j._matricesTexture,te),vt.setOptional(L,j,"batchingIdTexture"),vt.setValue(L,"batchingIdTexture",j._indirectTexture,te),vt.setOptional(L,j,"batchingColorTexture"),j._colorsTexture!==null&&vt.setValue(L,"batchingColorTexture",j._colorsTexture,te));const Ki=J.morphAttributes;if((Ki.position!==void 0||Ki.normal!==void 0||Ki.color!==void 0)&&B.update(j,J,Bn),(qi||Ae.receiveShadow!==j.receiveShadow)&&(Ae.receiveShadow=j.receiveShadow,vt.setValue(L,"receiveShadow",j.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&z.environment!==null&&(Ut.envMapIntensity.value=z.environmentIntensity),Ut.dfgLUT!==void 0&&(Ut.dfgLUT.value=K2()),qi){if(vt.setValue(L,"toneMappingExposure",P.toneMappingExposure),Ae.needsLights&&pa(Ut,ls),de&&G.fog===!0&&Me.refreshFogUniforms(Ut,de),Me.refreshMaterialUniforms(Ut,G,ee,Z,T.state.transmissionRenderTarget[w.id]),Ae.needsLights&&Ae.lightProbeGrid){const yt=Ae.lightProbeGrid;Ut.probesSH.value=yt.texture,Ut.probesMin.value.copy(yt.boundingBox.min),Ut.probesMax.value.copy(yt.boundingBox.max),Ut.probesResolution.value.copy(yt.resolution)}Hl.upload(L,Cr(Ae),Ut,te)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Hl.upload(L,Cr(Ae),Ut,te),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&vt.setValue(L,"center",j.center),vt.setValue(L,"modelViewMatrix",j.modelViewMatrix),vt.setValue(L,"normalMatrix",j.normalMatrix),vt.setValue(L,"modelMatrix",j.matrixWorld),G.uniformsGroups!==void 0){const yt=G.uniformsGroups;for(let Zi=0,cs=yt.length;Zi<cs;Zi++){const cp=yt[Zi];re.update(cp,Bn),re.bind(cp,Bn)}}return Bn}function pa(w,z){w.ambientLightColor.needsUpdate=z,w.lightProbe.needsUpdate=z,w.sunLights.needsUpdate=z,w.sunLightShadows.needsUpdate=z,w.directionalLights.needsUpdate=z,w.directionalLightShadows.needsUpdate=z,w.pointLights.needsUpdate=z,w.pointLightShadows.needsUpdate=z,w.spotLights.needsUpdate=z,w.spotLightShadows.needsUpdate=z,w.rectAreaLights.needsUpdate=z,w.hemisphereLights.needsUpdate=z}function Xc(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(w,z,J){const G=q.get(w);G.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),q.get(w.texture).__webglTexture=z,q.get(w.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:J,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,z){const J=q.get(w);J.__webglFramebuffer=z,J.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(w,z=0,J=0){O=w,Q=z,k=J;let G=null,j=!1,de=!1;if(w){const ge=q.get(w);if(ge.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(L.FRAMEBUFFER,ge.__webglFramebuffer),K.copy(w.viewport),le.copy(w.scissor),ue=w.scissorTest,v.viewport(K),v.scissor(le),v.setScissorTest(ue),U=-1;return}else if(ge.__webglFramebuffer===void 0)te.setupRenderTarget(w);else if(ge.__hasExternalTextures)te.rebindTextures(w,q.get(w.texture).__webglTexture,q.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ye=w.depthTexture;if(ge.__boundDepthTexture!==Ye){if(Ye!==null&&q.has(Ye)&&(w.width!==Ye.image.width||w.height!==Ye.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");te.setupDepthRenderbuffer(w)}}const Te=w.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(de=!0);const Ne=q.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ne[z])?G=Ne[z][J]:G=Ne[z],j=!0):w.samples>0&&te.useMultisampledRTT(w)===!1?G=q.get(w).__webglMultisampledFramebuffer:Array.isArray(Ne)?G=Ne[J]:G=Ne,K.copy(w.viewport),le.copy(w.scissor),ue=w.scissorTest}else K.copy(_e).multiplyScalar(ee).floor(),le.copy(Be).multiplyScalar(ee).floor(),ue=ut;if(J!==0&&(G=F),v.bindFramebuffer(L.FRAMEBUFFER,G)&&v.drawBuffers(w,G),v.viewport(K),v.scissor(le),v.setScissorTest(ue),j){const ge=q.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+z,ge.__webglTexture,J)}else if(de){const ge=z;for(let Te=0;Te<w.textures.length;Te++){const Ne=q.get(w.textures[Te]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Te,Ne.__webglTexture,J,ge)}}else if(w!==null&&J!==0){const ge=q.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ge.__webglTexture,J)}U=-1};function Do(w){const z=q.get(w);return(z.__readFormat!==w.format||z.__readType!==w.type)&&(z.__readFormat=w.format,z.__readType=w.type,z.__formatReadable=R.textureFormatReadable(w.format),z.__typeReadable=R.textureTypeReadable(w.type)),z}this.readRenderTargetPixels=function(w,z,J,G,j,de,be,ge=0){if(!(w&&w.isWebGLRenderTarget)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&be!==void 0&&(Te=Te[be]),Te){v.bindFramebuffer(L.FRAMEBUFFER,Te);try{const Ne=w.textures[ge],Ye=Ne.format,Je=Ne.type;w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ge);const De=Do(Ne);if(De.__formatReadable===!1){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(De.__typeReadable===!1){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=w.width-G&&J>=0&&J<=w.height-j&&L.readPixels(z,J,G,j,ve.convert(Ye),ve.convert(Je),de)}finally{const Ne=O!==null?q.get(O).__webglFramebuffer:null;v.bindFramebuffer(L.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(w,z,J,G,j,de,be,ge=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&be!==void 0&&(Te=Te[be]),Te)if(z>=0&&z<=w.width-G&&J>=0&&J<=w.height-j){v.bindFramebuffer(L.FRAMEBUFFER,Te);const Ne=w.textures[ge],Ye=Ne.format,Je=Ne.type;w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ge);const De=Do(Ne);if(De.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(De.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ot=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ot),L.bufferData(L.PIXEL_PACK_BUFFER,de.byteLength,L.STREAM_READ),L.readPixels(z,J,G,j,ve.convert(Ye),ve.convert(Je),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);const wt=O!==null?q.get(O).__webglFramebuffer:null;v.bindFramebuffer(L.FRAMEBUFFER,wt);const mt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await K1(L,mt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ot),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,de),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(ot),L.deleteSync(mt),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,z=null,J=0){const G=Math.pow(2,-J),j=Math.floor(w.image.width*G),de=Math.floor(w.image.height*G),be=z!==null?z.x:0,ge=z!==null?z.y:0;te.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,J,0,0,be,ge,j,de),v.unbindTexture()},this.copyTextureToTexture=function(w,z,J=null,G=null,j=0,de=0){let be,ge,Te,Ne,Ye,Je,De,ot,wt;const mt=w.isCompressedTexture?w.mipmaps[de]:w.image;if(J!==null)be=J.max.x-J.min.x,ge=J.max.y-J.min.y,Te=J.isBox3?J.max.z-J.min.z:1,Ne=J.min.x,Ye=J.min.y,Je=J.isBox3?J.min.z:0;else{const Ut=Math.pow(2,-j);be=Math.floor(mt.width*Ut),ge=Math.floor(mt.height*Ut),w.isDataArrayTexture?Te=mt.depth:w.isData3DTexture?Te=Math.floor(mt.depth*Ut):Te=1,Ne=0,Ye=0,Je=0}G!==null?(De=G.x,ot=G.y,wt=G.z):(De=0,ot=0,wt=0);const ht=ve.convert(z.format),rn=ve.convert(z.type);let Ae;z.isData3DTexture?(te.setTexture3D(z,0),Ae=L.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(te.setTexture2DArray(z,0),Ae=L.TEXTURE_2D_ARRAY):(te.setTexture2D(z,0),Ae=L.TEXTURE_2D),v.activeTexture(L.TEXTURE0),v.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,z.flipY),v.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),v.pixelStorei(L.UNPACK_ALIGNMENT,z.unpackAlignment);const hn=v.getParameter(L.UNPACK_ROW_LENGTH),lt=v.getParameter(L.UNPACK_IMAGE_HEIGHT),Bn=v.getParameter(L.UNPACK_SKIP_PIXELS),ui=v.getParameter(L.UNPACK_SKIP_ROWS),qi=v.getParameter(L.UNPACK_SKIP_IMAGES);v.pixelStorei(L.UNPACK_ROW_LENGTH,mt.width),v.pixelStorei(L.UNPACK_IMAGE_HEIGHT,mt.height),v.pixelStorei(L.UNPACK_SKIP_PIXELS,Ne),v.pixelStorei(L.UNPACK_SKIP_ROWS,Ye),v.pixelStorei(L.UNPACK_SKIP_IMAGES,Je);const ls=w.isDataArrayTexture||w.isData3DTexture,vt=z.isDataArrayTexture||z.isData3DTexture;if(w.isDepthTexture){const Ut=q.get(w),Ki=q.get(z),yt=q.get(Ut.__renderTarget),Zi=q.get(Ki.__renderTarget);v.bindFramebuffer(L.READ_FRAMEBUFFER,yt.__webglFramebuffer),v.bindFramebuffer(L.DRAW_FRAMEBUFFER,Zi.__webglFramebuffer);for(let cs=0;cs<Te;cs++)ls&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,q.get(w).__webglTexture,j,Je+cs),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,q.get(z).__webglTexture,de,wt+cs)),L.blitFramebuffer(Ne,Ye,be,ge,De,ot,be,ge,L.DEPTH_BUFFER_BIT,L.NEAREST);v.bindFramebuffer(L.READ_FRAMEBUFFER,null),v.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(j!==0||w.isRenderTargetTexture||q.has(w)){const Ut=q.get(w),Ki=q.get(z);v.bindFramebuffer(L.READ_FRAMEBUFFER,D),v.bindFramebuffer(L.DRAW_FRAMEBUFFER,V);for(let yt=0;yt<Te;yt++)ls?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ut.__webglTexture,j,Je+yt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ut.__webglTexture,j),vt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ki.__webglTexture,de,wt+yt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ki.__webglTexture,de),j!==0?L.blitFramebuffer(Ne,Ye,be,ge,De,ot,be,ge,L.COLOR_BUFFER_BIT,L.NEAREST):vt?L.copyTexSubImage3D(Ae,de,De,ot,wt+yt,Ne,Ye,be,ge):L.copyTexSubImage2D(Ae,de,De,ot,Ne,Ye,be,ge);v.bindFramebuffer(L.READ_FRAMEBUFFER,null),v.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else vt?w.isDataTexture||w.isData3DTexture?L.texSubImage3D(Ae,de,De,ot,wt,be,ge,Te,ht,rn,mt.data):z.isCompressedArrayTexture?L.compressedTexSubImage3D(Ae,de,De,ot,wt,be,ge,Te,ht,mt.data):L.texSubImage3D(Ae,de,De,ot,wt,be,ge,Te,ht,rn,mt):w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,de,De,ot,be,ge,ht,rn,mt.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,de,De,ot,mt.width,mt.height,ht,mt.data):L.texSubImage2D(L.TEXTURE_2D,de,De,ot,be,ge,ht,rn,mt);v.pixelStorei(L.UNPACK_ROW_LENGTH,hn),v.pixelStorei(L.UNPACK_IMAGE_HEIGHT,lt),v.pixelStorei(L.UNPACK_SKIP_PIXELS,Bn),v.pixelStorei(L.UNPACK_SKIP_ROWS,ui),v.pixelStorei(L.UNPACK_SKIP_IMAGES,qi),de===0&&z.generateMipmaps&&L.generateMipmap(Ae),v.unbindTexture()},this.initRenderTarget=function(w){q.get(w).__webglFramebuffer===void 0&&te.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?te.setTextureCube(w,0):w.isData3DTexture?te.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?te.setTexture2DArray(w,0):te.setTexture2D(w,0),v.unbindTexture()},this.resetState=function(){Q=0,k=0,O=null,v.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),n.unpackColorSpace=rt._getUnpackColorSpace()}}const P0={type:"change"},ip={type:"start"},W_={type:"end"},Ml=new Hc,N0=new Li,J2=Math.cos(70*ei.DEG2RAD),Ht=new $,Mn=2*Math.PI,xt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ju=1e-6;class Q2 extends QM{constructor(e,n=null){super(e,n),this.state=xt.NONE,this.target=new $,this.cursor=new $,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:$s.ROTATE,MIDDLE:$s.DOLLY,RIGHT:$s.PAN},this.touches={ONE:zs.ROTATE,TWO:zs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new $,this._lastQuaternion=new Mr,this._lastTargetPosition=new $,this._quat=new Mr().setFromUnitVectors(e.up,new $(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new s0,this._sphericalDelta=new s0,this._scale=1,this._panOffset=new $,this._rotateStart=new je,this._rotateEnd=new je,this._rotateDelta=new je,this._panStart=new je,this._panEnd=new je,this._panDelta=new je,this._dollyStart=new je,this._dollyEnd=new je,this._dollyDelta=new je,this._dollyDirection=new $,this._mouse=new je,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=tA.bind(this),this._onPointerDown=eA.bind(this),this._onPointerUp=nA.bind(this),this._onContextMenu=cA.bind(this),this._onMouseWheel=sA.bind(this),this._onKeyDown=aA.bind(this),this._onTouchStart=oA.bind(this),this._onTouchMove=lA.bind(this),this._onMouseDown=iA.bind(this),this._onMouseMove=rA.bind(this),this._interceptControlDown=uA.bind(this),this._interceptControlUp=dA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=xt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(P0),this.update(),this.state=xt.NONE}pan(e,n){this._pan(e,n),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const n=this.object.position;Ht.copy(n).sub(this.target),Ht.applyQuaternion(this._quat),this._spherical.setFromVector3(Ht),this.autoRotate&&this.state===xt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Mn:i>Math.PI&&(i-=Mn),r<-Math.PI?r+=Mn:r>Math.PI&&(r-=Mn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Ht.setFromSpherical(this._spherical),Ht.applyQuaternion(this._quatInverse),n.copy(this.target).add(Ht),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Ht.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const o=new $(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const u=new $(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(o),this.object.updateMatrixWorld(),a=Ht.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ml.origin.copy(this.object.position),Ml.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ml.direction))<J2?this.object.lookAt(this.target):(N0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ml.intersectPlane(N0,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Ju||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ju||this._lastTargetPosition.distanceToSquared(this.target)>Ju?(this.dispatchEvent(P0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Mn/60*this.autoRotateSpeed*e:Mn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Ht.setFromMatrixColumn(n,0),Ht.multiplyScalar(-e),this._panOffset.add(Ht)}_panUp(e,n){this.screenSpacePanning===!0?Ht.setFromMatrixColumn(n,1):(Ht.setFromMatrixColumn(n,0),Ht.crossVectors(this.object.up,Ht)),Ht.multiplyScalar(e),this._panOffset.add(Ht)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Ht.copy(r).sub(this.target);let s=Ht.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Mn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Mn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Mn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Mn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+n.x)*.5,o=(e.pageY+n.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new je,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function eA(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function tA(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function nA(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(W_),this.state=xt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function iA(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case $s.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=xt.DOLLY;break;case $s.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=xt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=xt.ROTATE}break;case $s.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=xt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=xt.PAN}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(ip)}function rA(t){switch(this.state){case xt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case xt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case xt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function sA(t){this.enabled===!1||this.enableZoom===!1||this.state!==xt.NONE||(t.preventDefault(),this.dispatchEvent(ip),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(W_))}function aA(t){this.enabled!==!1&&this._handleKeyDown(t)}function oA(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case zs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=xt.TOUCH_ROTATE;break;case zs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=xt.TOUCH_PAN;break;default:this.state=xt.NONE}break;case 2:switch(this.touches.TWO){case zs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=xt.TOUCH_DOLLY_PAN;break;case zs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=xt.TOUCH_DOLLY_ROTATE;break;default:this.state=xt.NONE}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(ip)}function lA(t){switch(this._trackPointer(t),this.state){case xt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case xt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case xt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case xt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=xt.NONE}}function cA(t){this.enabled!==!1&&t.preventDefault()}function uA(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function dA(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function fA(){const t=new dr;t.name="AgriGuardRobotRoot";const e=new dr;e.name="ChassisTiltingGroup",t.add(e);const n=new Ot({color:1976635,roughness:.5,metalness:.8}),i=new Ot({color:9741240,roughness:.35,metalness:.9}),r=new Ot({color:1096065,roughness:.4,metalness:.6}),s=new Ot({color:1579035,roughness:.9,metalness:.1}),a=new Ot({color:4674921,roughness:.3,metalness:.85}),o=new Ot({color:16096779,roughness:.4,metalness:.3}),c=2.4,u=3.8,p=.35,h=.85,f=new Ft(c,p,u),m=new We(f,n);m.position.set(0,h,0),m.castShadow=!0,m.receiveShadow=!0,e.add(m);const _=new Ft(.06,.2,u*.85),M=new We(_,r);M.position.set(-c/2-.03,h,0),e.add(M);const g=new We(_,r);g.position.set(c/2+.03,h,0),e.add(g);const d=new Gt(.07,.07,c+.4,16),x=new We(d,i);x.rotation.z=Math.PI/2,x.position.set(0,h,u/2+.25),x.castShadow=!0,e.add(x);const E=x.clone();E.position.set(0,h,-u/2-.25),e.add(E);const S=new Ft(1.6,.4,2),b=new Ot({color:593174,roughness:.7,metalness:.2}),T=new We(S,b);T.position.set(0,h-.35,-.2),e.add(T);const C=new Gt(.05,.05,.12,12),y=new We(C,new Or({color:15680580}));y.position.set(.4,h-.12,-.2),e.add(y);const A=new We(C,new Or({color:3900150}));A.position.set(-.4,h-.12,-.2),e.add(A);function P(){const G=new dr,j=.65,de=.48,be=new Gt(j,j,de,24),ge=new We(be,s);ge.rotation.z=Math.PI/2,ge.castShadow=!0,G.add(ge);const Te=12,Ne=new Ft(de*.95,.06,.14);for(let wt=0;wt<Te;wt++){const mt=wt/Te*Math.PI*2,ht=new We(Ne,s);ht.position.set(0,Math.cos(mt)*(j+.02),Math.sin(mt)*(j+.02)),ht.rotation.x=-mt,G.add(ht)}const Ye=new Gt(j*.6,j*.6,de+.04,16),Je=new We(Ye,a);Je.rotation.z=Math.PI/2,G.add(Je);const De=new Gt(.18,.18,de+.08,12),ot=new We(De,o);return ot.rotation.z=Math.PI/2,G.add(ot),G}const N=1.48,I=1.35,F=.65,D=P();D.name="Wheel_FL",D.position.set(-N,F,I),t.add(D);const V=P();V.name="Wheel_FR",V.position.set(N,F,I),t.add(V);const Q=P();Q.name="Wheel_RL",Q.position.set(-N,F,-I),t.add(Q);const k=P();k.name="Wheel_RR",k.position.set(N,F,-I),t.add(k);const O=new Gt(.08,.08,.35,12),U=(G,j)=>{const de=new We(O,n);de.rotation.z=Math.PI/2,de.position.set(G,h,j),e.add(de)};U(-1.25,I),U(1.25,I),U(-1.25,-I),U(1.25,-I);const X=1.5,K=new Gt(.05,.05,X,12);[[-1,1.4],[1,1.4],[-1,-1.4],[1,-1.4]].forEach(([G,j])=>{const de=new We(K,i);de.position.set(G,h+X/2,j),de.castShadow=!0,e.add(de)});const ue=new Gt(.045,.045,2.8,12),we=new We(ue,i);we.position.set(-1,h+X,0),we.rotation.x=Math.PI/2,e.add(we);const Fe=we.clone();Fe.position.set(1,h+X,0),e.add(Fe);const ke=new Gt(.045,.045,2,12),Z=new We(ke,i);Z.position.set(0,h+X,1.4),Z.rotation.z=Math.PI/2,e.add(Z);const ee=Z.clone();ee.position.set(0,h+X,-1.4),e.add(ee);const me=2.2,Ue=3,_e=new Ft(me,.06,Ue),Be=new We(_e,i);Be.position.set(0,h+X+.06,0),e.add(Be);const ut=new Ft(me-.12,.02,Ue-.12),Xe=new Ot({color:988970,emissive:165063,emissiveIntensity:.12,roughness:.15,metalness:.9}),qe=new We(ut,Xe);qe.position.set(0,h+X+.1,0),e.add(qe);const tt=new L_(2.5,8,3718648,1981066);tt.position.set(0,h+X+.115,0),tt.scale.set(.8,1,1.15),e.add(tt);const He=new Ft(1.3,.45,1.4),st=new Ot({color:1976635,roughness:.6,metalness:.3}),pt=new We(He,st);pt.position.set(0,h+.38,.2),e.add(pt);const Mt=new Ft(1.34,.05,1.44),ne=new Qm({color:165063,transparent:!0,opacity:.45,roughness:.2,transmission:.6}),Pe=new We(Mt,ne);Pe.position.set(0,h+.62,.2),e.add(Pe);const L=new ep(.04,12,12),Ze=new Or({color:3718648}),$e=new We(L,Ze);$e.position.set(.35,h+.66,.4),e.add($e);const R=new Ft(.35,.22,.35),v=new We(R,i);v.position.set(-.3,h+.5,.2),e.add(v);const W=.55,q=.85,te=new Gt(W,W,q,20),ae=new Qm({color:16317180,transparent:!0,opacity:.55,roughness:.15,transmission:.8}),fe=new We(te,ae);fe.position.set(0,h+.65,-.95),fe.castShadow=!0,e.add(fe);const H=new Gt(W*.95,W*.95,q*.65,16),Y=new Ot({color:440020,transparent:!0,opacity:.75,roughness:.1}),se=new We(H,Y);se.position.set(0,h+.5,-.95),e.add(se);const Me=new Gt(.2,.2,.1,16),pe=new We(Me,new Ot({color:593174}));pe.position.set(0,h+1.12,-.95),e.add(pe);const he=new Gt(.18,.18,.45,16),Ee=new We(he,n);Ee.position.set(.65,h+.25,-1.5),Ee.rotation.x=Math.PI/2,e.add(Ee);const Le=new Ft(.35,.25,.22),Ge=new We(Le,new Ot({color:3359061}));Ge.position.set(.65,h+.25,-1.2),e.add(Ge);const B=new Ft(.25,.2,.25),xe=new We(B,new Ot({color:1920728}));xe.position.set(-.65,h+.25,-1.4),e.add(xe);const ie=new Sc(.08,.18,12),ve=new Ot({color:14251782,metalness:.9,roughness:.2}),ye=new We(ie,ve);ye.rotation.x=Math.PI,ye.position.set(0,h-.25,-1.75),e.add(ye);const re=240,Ie=new nn,Ce=new Float32Array(re*3),ft=new Float32Array(re*3);for(let G=0;G<re;G++){Ce[G*3+0]=0,Ce[G*3+1]=h-.35,Ce[G*3+2]=-1.75;const j=.45;ft[G*3+0]=(Math.random()-.5)*j,ft[G*3+1]=-1.8-Math.random()*1.5,ft[G*3+2]=(Math.random()-.5)*j-.2}Ie.setAttribute("position",new Mi(Ce,3));const at=new C_({color:3718648,size:.08,transparent:!0,opacity:0,blending:Yd,depthWrite:!1}),fn=new kM(Ie,at);fn.visible=!1,e.add(fn);const zn={particleSystem:fn,particleGeometry:Ie,particleMaterial:at,positions:Ce,velocities:ft,count:re},Vc=new Gt(.04,.04,.9,12),Co=new We(Vc,i);Co.position.set(0,h+.7,1.6),e.add(Co);const Ro=new Ft(.24,.08,.16),is=new We(Ro,n);is.position.set(0,h+1.15,1.6),e.add(is);const jc=new Ft(.36,.26,.24),rs=new We(jc,n);rs.position.set(0,h+1.25,1.65),rs.rotation.x=.25,e.add(rs);const Po=new Gt(.1,.1,.16,16),qn=new We(Po,new Ot({color:988970,metalness:.95}));qn.rotation.x=Math.PI/2+.25,qn.position.set(0,h+1.23,1.78),e.add(qn);const da=new Qh(.075,16),No=new Or({color:3718648}),ss=new We(da,No);ss.position.set(0,h+1.215,1.865),ss.rotation.x=-.25,e.add(ss);function Yi(){const G=new dr,j=new Ft(.45,.2,.04),de=new Ot({color:2450411,roughness:.5}),be=new We(j,de);G.add(be);const ge=new Gt(.075,.075,.12,16),Te=new Ot({color:14870768,metalness:.9,roughness:.2}),Ne=new We(ge,Te);Ne.rotation.x=Math.PI/2,Ne.position.set(-.12,0,.07),G.add(Ne);const Ye=new We(ge,Te);return Ye.rotation.x=Math.PI/2,Ye.position.set(.12,0,.07),G.add(Ye),G}const as=Yi();as.position.set(0,h+.12,u/2+.28),e.add(as);const Ti=Yi();Ti.position.set(-.95,h+.12,u/2+.22),Ti.rotation.y=.48,e.add(Ti);const Cr=Yi();Cr.position.set(.95,h+.12,u/2+.22),Cr.rotation.y=-.48,e.add(Cr);function os(){const G=new Sc(.65,2.5,16,1,!0);G.translate(0,-1.25,0),G.rotateX(-Math.PI/2);const j=new Or({color:1096065,wireframe:!0,transparent:!0,opacity:.45,depthWrite:!1});return{mesh:new We(G,j),mat:j}}const fa=os();Ti.add(fa.mesh);const ha=os();as.add(ha.mesh);const pa=os();Cr.add(pa.mesh);const Xc={leftMesh:fa.mesh,centerMesh:ha.mesh,rightMesh:pa.mesh,leftMaterial:fa.mat,centerMaterial:ha.mat,rightMaterial:pa.mat},Do=new Ft(.04,.6,.12),w=new We(Do,new Ot({color:593174}));w.position.set(-c/2-.15,h-.15,.5),e.add(w);const z=new Ft(.14,.2,.08),J=new We(z,new Ot({color:16317180,roughness:.8}));return J.position.set(c/2+.08,h+.6,-.4),e.add(J),{rootGroup:t,chassisGroup:e,wheels:{frontLeft:D,frontRight:V,rearLeft:Q,rearRight:k},ultrasonicCones:Xc,sprayParticles:zn,statusLedMaterial:Ze,sprayNozzleMesh:ye,tankLiquidMesh:se}}const hA=[{id:"chassis",label:"Chassis & Frame",color:"#10b981",description:"4WD Aluminum & Composite Frame"},{id:"camera",label:"RGB Camera Mount",color:"#38bdf8",description:"External Crop Pathology Inspection"},{id:"ultrasonic",label:"Ultrasonic Sensors",color:"#f59e0b",description:"Left, Center, Right Proximity Ranging"},{id:"sprayer",label:"Precision Spray",color:"#06b6d4",description:"Pump, Solenoid Valve & Atomizing Nozzle"},{id:"power",label:"Solar & Battery",color:"#818cf8",description:"Photovoltaic Array & 12V LiPo Pack"},{id:"sensors",label:"Agronomic Sensors",color:"#ec4899",description:"NPK RS485, Soil Moisture, DHT22 & MPU6050"}],Gl={OBSTACLE_CM:25,WARNING_CM:60,MAX_ULTRASONIC_RANGE_CM:250};class pA{constructor(e){Oe(this,"container");Oe(this,"scene");Oe(this,"camera");Oe(this,"renderer");Oe(this,"controls");Oe(this,"robot");Oe(this,"animFrameId",null);Oe(this,"isDestroyed",!1);Oe(this,"groundGrid");Oe(this,"fieldPlane");Oe(this,"lastTime",performance.now());Oe(this,"wheelSpeed",0);Oe(this,"wheelAngle",0);Oe(this,"targetWheelSpeed",0);Oe(this,"targetTurnDiff",0);Oe(this,"gridOffset",0);Oe(this,"targetPitch",0);Oe(this,"targetRoll",0);Oe(this,"isPumpActive",!1);Oe(this,"isRobotConnected",!1);Oe(this,"currentMovement","STOP");Oe(this,"leftDist",72);Oe(this,"centerDist",48);Oe(this,"rightDist",86);Oe(this,"targetCamPos",new $(5.2,4,5.2));Oe(this,"targetControlsTarget",new $(0,.9,0));Oe(this,"isTransitioningCam",!1);this.container=e,this.scene=new AM,this.scene.background=null;const n=e.clientWidth||600,i=e.clientHeight||420;this.camera=new Dn(45,n/i,.1,100),this.camera.position.copy(this.targetCamPos),this.renderer=new Z2({antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setSize(n,i),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=n_,e.appendChild(this.renderer.domElement),this.controls=new Q2(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.06,this.controls.minDistance=2.5,this.controls.maxDistance=20,this.controls.maxPolarAngle=Math.PI/2+.05,this.controls.target.copy(this.targetControlsTarget),this.controls.update(),this.setupLighting(),this.setupGround(),this.robot=fA(),this.scene.add(this.robot.rootGroup),this.animate=this.animate.bind(this),this.animFrameId=requestAnimationFrame(this.animate)}setupLighting(){const e=new KM(16777215,.85);this.scene.add(e);const n=new r0(16777215,1.2);n.position.set(6,12,8),n.castShadow=!0,n.shadow.mapSize.width=1024,n.shadow.mapSize.height=1024,n.shadow.camera.near=.5,n.shadow.camera.far=30,n.shadow.camera.left=-6,n.shadow.camera.right=6,n.shadow.camera.top=6,n.shadow.camera.bottom=-6,n.shadow.bias=-5e-4,this.scene.add(n);const i=new r0(1096065,.6);i.position.set(-6,3,-6),this.scene.add(i);const r=new YM(165063,.4,4);r.position.set(0,.4,0),this.scene.add(r)}setupGround(){const e=new Ao(30,30),n=new Ot({color:461588,roughness:.9,metalness:.1});this.fieldPlane=new We(e,n),this.fieldPlane.rotation.x=-Math.PI/2,this.fieldPlane.position.y=0,this.fieldPlane.receiveShadow=!0,this.scene.add(this.fieldPlane),this.groundGrid=new L_(24,24,1096065,1976635),this.groundGrid.position.y=.005,this.scene.add(this.groundGrid);const i=new Jh({color:3359061});for(let r=-6;r<=6;r+=3){const s=[new $(r,.01,-12),new $(r,.01,12)],a=new nn().setFromPoints(s),o=new A_(a,i);this.scene.add(o)}}updateTelemetry(e){var o,c,u;if(!e){this.isRobotConnected=!1,this.currentMovement="STOP",this.targetWheelSpeed=0,this.targetTurnDiff=0,this.targetPitch=0,this.targetRoll=0,this.isPumpActive=!1;return}const n=e.mode==="SIMULATION"||e.hardware_mode==="SIMULATION";this.isRobotConnected=n?!0:!!e.esp32_connected;const i=(e.movement||((o=e.actuators)==null?void 0:o.motor_state)||"STOP").toUpperCase();this.currentMovement=i,!this.isRobotConnected||i==="STOP"||i==="STOPPED"?(this.targetWheelSpeed=0,this.targetTurnDiff=0):i==="FORWARD"||i==="MOVING_FORWARD"?(this.targetWheelSpeed=7,this.targetTurnDiff=0):i==="BACKWARD"||i==="MOVING_BACKWARD"?(this.targetWheelSpeed=-7,this.targetTurnDiff=0):i==="LEFT"||i==="TURNING_LEFT"?(this.targetWheelSpeed=4,this.targetTurnDiff=-1):(i==="RIGHT"||i==="TURNING_RIGHT")&&(this.targetWheelSpeed=4,this.targetTurnDiff=1);const r=e.ultrasonic;this.isRobotConnected&&r?(this.leftDist=r.left!=null?Number(r.left):r.distance_cm!=null?r.distance_cm*1.1:70,this.centerDist=r.center!=null?Number(r.center):r.distance_cm!=null?r.distance_cm:50,this.rightDist=r.right!=null?Number(r.right):r.distance_cm!=null?r.distance_cm*1.2:80):(this.leftDist=999,this.centerDist=999,this.rightDist=999);const s=e.mpu6050||e.imu;if(this.isRobotConnected&&s){const p=s.pitch_deg!=null?Number(s.pitch_deg):0,h=s.roll_deg!=null?Number(s.roll_deg):0;this.targetPitch=ei.degToRad(ei.clamp(p,-20,20)),this.targetRoll=ei.degToRad(ei.clamp(h,-20,20))}else this.targetPitch=0,this.targetRoll=0;const a=((c=e.pump)==null?void 0:c.state)||((u=e.actuators)!=null&&u.pump_active?"ON":"OFF");this.isPumpActive=this.isRobotConnected&&a==="ON"}setView(e){switch(this.isTransitioningCam=!0,e){case"isometric":this.targetCamPos.set(5.2,4,5.2),this.targetControlsTarget.set(0,.9,0);break;case"front":this.targetCamPos.set(0,1.4,6.2),this.targetControlsTarget.set(0,.9,0);break;case"top":this.targetCamPos.set(0,8.5,.01),this.targetControlsTarget.set(0,0,0);break;case"side":this.targetCamPos.set(6.8,1.4,0),this.targetControlsTarget.set(0,.9,0);break}}animate(e){if(this.isDestroyed)return;this.animFrameId=requestAnimationFrame(this.animate);const n=Math.min((e-this.lastTime)/1e3,.1);if(this.lastTime=e,this.isTransitioningCam&&(this.camera.position.lerp(this.targetCamPos,.08),this.controls.target.lerp(this.targetControlsTarget,.08),this.camera.position.distanceTo(this.targetCamPos)<.05&&(this.isTransitioningCam=!1)),this.controls.update(),this.wheelSpeed=ei.lerp(this.wheelSpeed,this.targetWheelSpeed,.1),Math.abs(this.wheelSpeed)>.01){const s=this.wheelSpeed*n,{frontLeft:a,frontRight:o,rearLeft:c,rearRight:u}=this.robot.wheels;this.targetTurnDiff===0?(a.rotation.x+=s,o.rotation.x+=s,c.rotation.x+=s,u.rotation.x+=s,this.gridOffset=(this.gridOffset-s*.1)%1,this.groundGrid.position.z=this.gridOffset):this.targetTurnDiff<0?(a.rotation.x-=s*.7,c.rotation.x-=s*.7,o.rotation.x+=s*.7,u.rotation.x+=s*.7):(a.rotation.x+=s*.7,c.rotation.x+=s*.7,o.rotation.x-=s*.7,u.rotation.x-=s*.7)}const i=this.robot.chassisGroup;i.rotation.x=ei.lerp(i.rotation.x,this.targetPitch,.07),i.rotation.z=ei.lerp(i.rotation.z,-this.targetRoll,.07),this.updateUltrasonicCone(this.robot.ultrasonicCones.leftMesh,this.robot.ultrasonicCones.leftMaterial,this.leftDist,e),this.updateUltrasonicCone(this.robot.ultrasonicCones.centerMesh,this.robot.ultrasonicCones.centerMaterial,this.centerDist,e),this.updateUltrasonicCone(this.robot.ultrasonicCones.rightMesh,this.robot.ultrasonicCones.rightMaterial,this.rightDist,e);const r=this.robot.sprayParticles;if(this.isPumpActive){r.particleSystem.visible=!0,r.particleMaterial.opacity=ei.lerp(r.particleMaterial.opacity,.75,.1);const s=r.positions,a=r.velocities,o=r.count,c=.55,u=-1.75;for(let p=0;p<o;p++)if(s[p*3+0]+=a[p*3+0]*n,s[p*3+1]+=a[p*3+1]*n,s[p*3+2]+=a[p*3+2]*n,s[p*3+1]<.05){s[p*3+0]=(Math.random()-.5)*.15,s[p*3+1]=c,s[p*3+2]=u;const h=.65;a[p*3+0]=(Math.random()-.5)*h,a[p*3+1]=-2.2-Math.random()*1.5,a[p*3+2]=-.3-(Math.random()-.5)*h}r.particleGeometry.attributes.position.needsUpdate=!0}else r.particleMaterial.opacity>.01?r.particleMaterial.opacity=ei.lerp(r.particleMaterial.opacity,0,.15):r.particleSystem.visible=!1;if(this.isRobotConnected){const s=.5+.5*Math.sin(e*.006);this.robot.statusLedMaterial.color.setRGB(.2*s,.7*s,1*s)}else{const s=Math.sin(e*.003)>0?.9:.2;this.robot.statusLedMaterial.color.setRGB(s,.1,.1)}this.renderer.render(this.scene,this.camera)}updateUltrasonicCone(e,n,i,r){if(!this.isRobotConnected||i>Gl.MAX_ULTRASONIC_RANGE_CM){e.visible=!1;return}e.visible=!0;const s=ei.clamp(i/100,.25,2.4);if(e.scale.set(1,1,s),i<Gl.OBSTACLE_CM){const a=.6+.4*Math.sin(r*.015);n.color.setHex(16007006),n.opacity=.8*a}else i<=Gl.WARNING_CM?(n.color.setHex(16096779),n.opacity=.5):(n.color.setHex(1096065),n.opacity=.35)}resize(){if(!this.container||this.isDestroyed)return;const e=this.container.clientWidth,n=this.container.clientHeight;e===0||n===0||(this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,n))}destroy(){this.isDestroyed=!0,this.animFrameId!==null&&(cancelAnimationFrame(this.animFrameId),this.animFrameId=null),this.controls.dispose(),this.scene.traverse(e=>{if(e.isMesh){const n=e;n.geometry&&n.geometry.dispose(),n.material&&(Array.isArray(n.material)?n.material.forEach(i=>i.dispose()):n.material.dispose())}}),this.renderer.dispose(),this.renderer.domElement&&this.renderer.domElement.parentNode&&this.renderer.domElement.parentNode.removeChild(this.renderer.domElement)}}const D0=({telemetry:t})=>{var F,D,V,Q,k,O,U,X;const e=oe.useRef(null),n=oe.useRef(null),[i,r]=oe.useState("isometric"),[s,a]=oe.useState(!0);oe.useEffect(()=>{if(!e.current)return;const K=new pA(e.current);n.current=K;const le=()=>{K.resize()};return window.addEventListener("resize",le),K.updateTelemetry(t),()=>{window.removeEventListener("resize",le),K.destroy(),n.current=null}},[]),oe.useEffect(()=>{n.current&&n.current.updateTelemetry(t)},[t]);const o=K=>{r(K),n.current&&n.current.setView(K)},c=(t==null?void 0:t.mode)==="SIMULATION"||(t==null?void 0:t.hardware_mode)==="SIMULATION",u=c?!0:!!(t!=null&&t.esp32_connected),p=((t==null?void 0:t.movement)||((F=t==null?void 0:t.actuators)==null?void 0:F.motor_state)||"STOP").toUpperCase(),h=t==null?void 0:t.ultrasonic,f=(h==null?void 0:h.center)!=null?Number(h.center):(h==null?void 0:h.distance_cm)!=null?h.distance_cm:u?50:null,m=(h==null?void 0:h.left)!=null?Number(h.left):u?70:null,_=(h==null?void 0:h.right)!=null?Number(h.right):u?80:null,M=f!=null?Math.min(f,m??999,_??999):999,g=u&&M<Gl.OBSTACLE_CM,d=((D=t==null?void 0:t.pump)==null?void 0:D.state)||((V=t==null?void 0:t.actuators)!=null&&V.pump_active?"ON":"OFF"),x=u&&d==="ON",E=(t==null?void 0:t.mpu6050)||(t==null?void 0:t.imu),S=(E==null?void 0:E.pitch_deg)!=null?Number(E.pitch_deg).toFixed(1):u?"0.0":"--",b=(E==null?void 0:E.roll_deg)!=null?Number(E.roll_deg).toFixed(1):u?"0.0":"--",T=(t==null?void 0:t.soil_moisture)!=null?typeof t.soil_moisture=="number"?t.soil_moisture.toFixed(1):((Q=t.soil_moisture.moisture_pct)==null?void 0:Q.toFixed(1))??"--":"--",C=((k=t==null?void 0:t.dht22)==null?void 0:k.temperature)??((O=t==null?void 0:t.environment)==null?void 0:O.temperature_c),y=((U=t==null?void 0:t.dht22)==null?void 0:U.humidity)??((X=t==null?void 0:t.environment)==null?void 0:X.humidity_pct),A=t==null?void 0:t.npk,P=(A==null?void 0:A.n)??(A==null?void 0:A.nitrogen_mg_kg),N=(A==null?void 0:A.p)??(A==null?void 0:A.phosphorus_mg_kg),I=(A==null?void 0:A.k)??(A==null?void 0:A.potassium_mg_kg);return l.jsxs("div",{className:"glass-panel",style:{padding:"1.25rem",width:"100%",boxSizing:"border-box"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.85rem",flexWrap:"wrap",gap:"0.75rem"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.65rem"},children:[l.jsx("div",{style:{width:"38px",height:"38px",borderRadius:"10px",background:"linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(6, 182, 212, 0.2))",border:"1px solid rgba(16, 185, 129, 0.4)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 0 15px rgba(16, 185, 129, 0.2)"},children:l.jsx(wS,{size:20,color:"var(--emerald-400)"})}),l.jsxs("div",{children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[l.jsx("h2",{style:{fontSize:"1.05rem",fontWeight:800,margin:0,color:"#fff",letterSpacing:"-0.01em"},children:"AGRI GUARD DIGITAL TWIN"}),c?l.jsx("span",{className:"status-pill",style:{background:"rgba(56, 189, 248, 0.15)",color:"var(--sky-400)",border:"1px solid rgba(56, 189, 248, 0.35)",fontSize:"0.64rem",padding:"0.15rem 0.45rem",fontWeight:800},children:"SIMULATION DATA"}):u?l.jsx("span",{className:"status-pill status-online",style:{fontSize:"0.64rem",padding:"0.15rem 0.45rem",fontWeight:800},children:"REAL HARDWARE LIVE"}):l.jsx("span",{className:"status-pill status-offline",style:{fontSize:"0.64rem",padding:"0.15rem 0.45rem",fontWeight:800},children:"DIGITAL TWIN OFFLINE"})]}),l.jsx("p",{style:{fontSize:"0.74rem",color:"var(--text-muted)",margin:"0.15rem 0 0 0"},children:"Live 3D Engineering Representation & Kinematic Twin of the Physical Prototype"})]})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem",flexWrap:"wrap"},children:[l.jsx("span",{style:{fontSize:"0.7rem",color:"var(--text-dim)",fontWeight:600,marginRight:"0.2rem"},children:"View:"}),["isometric","front","top","side"].map(K=>l.jsx("button",{type:"button",onClick:()=>o(K),className:"btn",style:{padding:"0.25rem 0.65rem",fontSize:"0.7rem",fontWeight:i===K?800:600,borderRadius:"6px",background:i===K?"var(--emerald-500)":"rgba(255, 255, 255, 0.05)",color:i===K?"#05080f":"var(--text-muted)",border:i===K?"1px solid var(--emerald-400)":"1px solid rgba(255, 255, 255, 0.1)",textTransform:"capitalize",cursor:"pointer",transition:"all 0.15s ease"},children:K},K)),l.jsxs("button",{type:"button",onClick:()=>o("isometric"),title:"Reset to default camera orientation",className:"btn btn-outline",style:{padding:"0.25rem 0.5rem",fontSize:"0.7rem",borderRadius:"6px",display:"flex",alignItems:"center",gap:"0.3rem",color:"var(--text-muted)"},children:[l.jsx(GS,{size:12}),"Reset"]})]})]}),l.jsxs("div",{style:{position:"relative",width:"100%",height:"460px",borderRadius:"12px",overflow:"hidden",background:"radial-gradient(ellipse at center, rgba(15, 23, 42, 0.8) 0%, rgba(5, 8, 15, 0.95) 100%)",border:"1px solid var(--border-subtle)",boxShadow:"inset 0 0 40px rgba(0, 0, 0, 0.6)"},children:[l.jsx("div",{ref:e,style:{width:"100%",height:"100%",cursor:"grab"}}),l.jsxs("div",{style:{position:"absolute",top:"12px",left:"12px",display:"flex",flexDirection:"column",gap:"6px",pointerEvents:"none"},children:[l.jsxs("div",{style:{background:"rgba(15, 23, 42, 0.85)",backdropFilter:"blur(8px)",border:"1px solid rgba(255, 255, 255, 0.12)",borderRadius:"8px",padding:"6px 10px",display:"flex",alignItems:"center",gap:"8px",boxShadow:"0 4px 12px rgba(0,0,0,0.4)"},children:[l.jsxs("div",{style:{width:"24px",height:"24px",borderRadius:"6px",background:p!=="STOP"?"rgba(16, 185, 129, 0.25)":"rgba(255, 255, 255, 0.08)",display:"flex",alignItems:"center",justifyContent:"center",color:p!=="STOP"?"var(--emerald-400)":"var(--text-muted)"},children:[p==="FORWARD"&&l.jsx(Fh,{size:15}),p==="BACKWARD"&&l.jsx(Lh,{size:15}),p==="LEFT"&&l.jsx(Uh,{size:15}),p==="RIGHT"&&l.jsx(Oh,{size:15}),p==="STOP"&&l.jsx(zh,{size:13})]}),l.jsxs("div",{children:[l.jsx("div",{style:{fontSize:"0.62rem",color:"var(--text-dim)",fontWeight:700,textTransform:"uppercase"},children:"Mobility State"}),l.jsx("div",{style:{fontSize:"0.78rem",fontWeight:800,color:p!=="STOP"?"var(--emerald-400)":"#fff"},children:p})]})]}),l.jsxs("div",{style:{background:x?"rgba(6, 182, 212, 0.2)":"rgba(15, 23, 42, 0.85)",backdropFilter:"blur(8px)",border:`1px solid ${x?"rgba(6, 182, 212, 0.5)":"rgba(255, 255, 255, 0.12)"}`,borderRadius:"8px",padding:"6px 10px",display:"flex",alignItems:"center",gap:"8px",boxShadow:x?"0 0 15px rgba(6, 182, 212, 0.3)":"0 4px 12px rgba(0,0,0,0.4)"},children:[l.jsx(zc,{size:16,color:x?"var(--cyan-400)":"var(--text-dim)",className:x?"pulse":""}),l.jsxs("div",{children:[l.jsx("div",{style:{fontSize:"0.62rem",color:"var(--text-dim)",fontWeight:700,textTransform:"uppercase"},children:"Spray Nozzle"}),l.jsx("div",{style:{fontSize:"0.76rem",fontWeight:800,color:x?"var(--cyan-400)":"var(--text-muted)"},children:x?"SPRAY ACTIVE (Atomizing)":"SPRAY READY (Idle)"})]})]})]}),l.jsxs("div",{style:{position:"absolute",top:"12px",right:"12px",display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"6px",pointerEvents:"none"},children:[g&&l.jsxs("div",{style:{background:"rgba(244, 63, 94, 0.25)",backdropFilter:"blur(8px)",border:"1px solid var(--rose-500)",borderRadius:"8px",padding:"6px 10px",display:"flex",alignItems:"center",gap:"6px",color:"#fff",fontSize:"0.74rem",fontWeight:800,boxShadow:"0 0 18px rgba(244, 63, 94, 0.4)"},children:[l.jsx(ho,{size:15,color:"var(--rose-400)"}),l.jsxs("span",{children:["OBSTACLE DETECTED (",M.toFixed(0)," cm)"]})]}),l.jsxs("div",{style:{background:"rgba(15, 23, 42, 0.85)",backdropFilter:"blur(8px)",border:"1px solid rgba(255, 255, 255, 0.12)",borderRadius:"8px",padding:"6px 10px",display:"flex",gap:"12px"},children:[l.jsxs("div",{style:{textAlign:"center"},children:[l.jsx("div",{style:{fontSize:"0.60rem",color:"var(--text-dim)",fontWeight:700},children:"LEFT"}),l.jsx("div",{className:"mono",style:{fontSize:"0.75rem",fontWeight:800,color:"#fff"},children:m!=null?`${m.toFixed(0)}cm`:"--"})]}),l.jsxs("div",{style:{textAlign:"center",borderLeft:"1px solid rgba(255,255,255,0.1)",paddingLeft:"8px"},children:[l.jsx("div",{style:{fontSize:"0.60rem",color:g?"var(--rose-400)":"var(--text-dim)",fontWeight:800},children:"CENTER"}),l.jsx("div",{className:"mono",style:{fontSize:"0.75rem",fontWeight:800,color:g?"var(--rose-400)":"var(--amber-400)"},children:f!=null?`${f.toFixed(0)}cm`:"--"})]}),l.jsxs("div",{style:{textAlign:"center",borderLeft:"1px solid rgba(255,255,255,0.1)",paddingLeft:"8px"},children:[l.jsx("div",{style:{fontSize:"0.60rem",color:"var(--text-dim)",fontWeight:700},children:"RIGHT"}),l.jsx("div",{className:"mono",style:{fontSize:"0.75rem",fontWeight:800,color:"#fff"},children:_!=null?`${_.toFixed(0)}cm`:"--"})]})]})]}),l.jsxs("div",{style:{position:"absolute",bottom:"12px",left:"12px",display:"flex",gap:"8px",pointerEvents:"none"},children:[l.jsxs("div",{style:{background:"rgba(15, 23, 42, 0.85)",backdropFilter:"blur(8px)",border:"1px solid rgba(255, 255, 255, 0.12)",borderRadius:"8px",padding:"5px 9px",display:"flex",alignItems:"center",gap:"6px",fontSize:"0.72rem"},children:[l.jsx(kh,{size:14,color:"var(--emerald-400)"}),l.jsx("span",{style:{color:"var(--text-dim)"},children:"IMU Tilt:"}),l.jsxs("span",{className:"mono",style:{color:"#fff",fontWeight:700},children:["P: ",S,"° | R: ",b,"°"]})]}),(t==null?void 0:t.battery_voltage)&&l.jsxs("div",{style:{background:"rgba(15, 23, 42, 0.85)",backdropFilter:"blur(8px)",border:"1px solid rgba(255, 255, 255, 0.12)",borderRadius:"8px",padding:"5px 9px",display:"flex",alignItems:"center",gap:"6px",fontSize:"0.72rem"},children:[l.jsx(t_,{size:14,color:"var(--sky-400)"}),l.jsxs("span",{className:"mono",style:{color:"var(--sky-400)",fontWeight:800},children:[t.battery_voltage.toFixed(1),"V"]})]})]}),l.jsxs("div",{style:{position:"absolute",bottom:"12px",right:"12px",display:"flex",gap:"8px",pointerEvents:"none"},children:[l.jsxs("div",{style:{background:"rgba(15, 23, 42, 0.85)",backdropFilter:"blur(8px)",border:"1px solid rgba(255, 255, 255, 0.12)",borderRadius:"8px",padding:"5px 9px",display:"flex",alignItems:"center",gap:"5px",fontSize:"0.72rem"},children:[l.jsx(qx,{size:13,color:"var(--sky-400)"}),l.jsx("span",{style:{color:"var(--text-dim)"},children:"Soil:"}),l.jsxs("span",{className:"mono",style:{color:"#fff",fontWeight:700},children:[T,"%"]})]}),C!=null&&l.jsxs("div",{style:{background:"rgba(15, 23, 42, 0.85)",backdropFilter:"blur(8px)",border:"1px solid rgba(255, 255, 255, 0.12)",borderRadius:"8px",padding:"5px 9px",display:"flex",alignItems:"center",gap:"5px",fontSize:"0.72rem"},children:[l.jsx(Qx,{size:13,color:"var(--amber-400)"}),l.jsxs("span",{className:"mono",style:{color:"#fff",fontWeight:700},children:[Number(C).toFixed(1),"°C · ",y!=null?`${Number(y).toFixed(0)}%`:""]})]}),P!=null&&l.jsxs("div",{style:{background:"rgba(15, 23, 42, 0.85)",backdropFilter:"blur(8px)",border:"1px solid rgba(255, 255, 255, 0.12)",borderRadius:"8px",padding:"5px 9px",display:"flex",alignItems:"center",gap:"5px",fontSize:"0.72rem"},children:[l.jsx(hc,{size:13,color:"var(--pink-400)"}),l.jsxs("span",{className:"mono",style:{color:"#fff",fontWeight:700},children:["NPK: ",P,"-",N,"-",I]})]})]}),!u&&l.jsxs("div",{style:{position:"absolute",inset:0,background:"rgba(5, 8, 15, 0.75)",backdropFilter:"blur(4px)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"8px"},children:[l.jsx(ia,{size:28,color:"var(--rose-400)"}),l.jsx("div",{style:{fontSize:"0.95rem",fontWeight:800,color:"var(--rose-400)"},children:"DIGITAL TWIN OFFLINE"}),l.jsx("p",{style:{fontSize:"0.75rem",color:"var(--text-muted)",margin:0,maxWidth:"320px",textAlign:"center"},children:"Physical robot communication is disconnected. Reconnect via Wi-Fi or Bluetooth in the Connectivity Panel to resume live kinematic streaming."})]})]}),l.jsxs("div",{style:{marginTop:"0.75rem",padding:"0.55rem 0.85rem",background:"rgba(0, 0, 0, 0.25)",borderRadius:"8px",border:"1px solid var(--border-subtle)",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"0.6rem"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.45rem",fontSize:"0.72rem",color:"var(--text-dim)",fontWeight:700},children:[l.jsx(Kx,{size:14,color:"var(--emerald-400)"}),l.jsx("span",{children:"PROTOTYPE SUBSYSTEMS:"})]}),l.jsx("div",{style:{display:"flex",alignItems:"center",gap:"0.85rem",flexWrap:"wrap"},children:hA.map(K=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.35rem",fontSize:"0.70rem"},title:K.description,children:[l.jsx("span",{style:{width:"8px",height:"8px",borderRadius:"50%",background:K.color,boxShadow:`0 0 6px ${K.color}`}}),l.jsx("span",{style:{color:"var(--text-secondary)",fontWeight:600},children:K.label})]},K.id))})]})]})},mA=()=>{const{telemetry:t,wsConnected:e}=SS(),[n,i]=oe.useState("dashboard"),[r,s]=oe.useState("ZONE-R1C1"),[a,o]=oe.useState(null),[c,u]=oe.useState(null),[p,h]=oe.useState(!1),[f,m]=oe.useState(null),_=async E=>{h(!0),m(null);try{const S=await e1(E);o(S.detection),u(S.decision),m(`Analysis complete: ${S.detection.display_name} (${(S.detection.confidence*100).toFixed(0)}%)`)}catch(S){m(`Scan error: ${S.message||"Camera capture failed"}`)}finally{h(!1)}},M=async(E,S,b)=>{const T=await n1(E,S,b);return c&&u({...c,approved:S,status:S?"FARMER_APPROVED_EXECUTED":"REJECTED_BY_FARMER"}),T},g=async(E,S,b=0)=>await ZS(E,S,b),d=async()=>await JS(),x=async()=>await QS();return l.jsx("div",{style:{maxWidth:"1780px",margin:"0 auto",padding:"1rem"},children:l.jsxs("div",{className:"dashboard-with-sidebar",children:[l.jsxs("aside",{className:"dashboard-sidebar",children:[l.jsx($S,{telemetry:t,wsConnected:e,activeTab:n,setActiveTab:i,onEmergencyStop:x}),l.jsx(h1,{})]}),l.jsxs("main",{className:"dashboard-main-content",children:[n==="dashboard"&&l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.25rem"},children:[f&&l.jsx("div",{style:{padding:"0.65rem 1rem",borderRadius:"8px",background:f.includes("error")?"rgba(244, 63, 94, 0.15)":"rgba(16, 185, 129, 0.15)",border:`1px solid ${f.includes("error")?"var(--rose-500)":"var(--emerald-500)"}`,color:"#fff",fontSize:"0.85rem"},children:f}),l.jsx(p1,{telemetry:t}),l.jsx(D0,{telemetry:t}),l.jsx("section",{style:{width:"100%"},children:l.jsx(Em,{telemetry:t})})]}),n==="remote"&&l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem",width:"100%"},children:[l.jsxs("div",{className:"remote-cockpit-layout",children:[l.jsx("div",{className:"remote-cockpit-camera",children:l.jsx(Mm,{cameraStatus:t==null?void 0:t.camera_status,lastDetection:a,isScanning:p,onTriggerScan:_,activeZoneId:(t==null?void 0:t.active_zone_id)??r,telemetry:t,onMove:g,onStop:d})}),l.jsx("div",{className:"remote-cockpit-controls",children:l.jsx(bm,{telemetry:t,onMove:g,onStop:d,onEmergencyStop:x,onSprayApprove:M})})]}),l.jsx(D0,{telemetry:t}),l.jsx(Em,{telemetry:t})]}),n==="diagnostics"&&l.jsx(f1,{}),n==="heatmap"&&l.jsxs("div",{className:"field-map-cockpit-layout",children:[l.jsx("div",{className:"field-map-primary-column",children:l.jsx(d1,{activeZoneId:(t==null?void 0:t.active_zone_id)??r,onZoneSelected:E=>s(E)})}),l.jsxs("div",{className:"field-map-side-column",children:[l.jsx(Mm,{cameraStatus:t==null?void 0:t.camera_status,lastDetection:a,isScanning:p,onTriggerScan:_,activeZoneId:(t==null?void 0:t.active_zone_id)??r,telemetry:t,onMove:g,onStop:d}),l.jsx(bm,{telemetry:t,onMove:g,onStop:d,onEmergencyStop:x,onSprayApprove:M})]})]})]})]})})};Qu.createRoot(document.getElementById("root")).render(l.jsx(W0.StrictMode,{children:l.jsx(mA,{})}));
