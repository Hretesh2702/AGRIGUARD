var ty=Object.defineProperty;var ny=(t,e,n)=>e in t?ty(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ze=(t,e,n)=>ny(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function iy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Dg={exports:{}},Yc={},Lg={exports:{}},at={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lo=Symbol.for("react.element"),ry=Symbol.for("react.portal"),sy=Symbol.for("react.fragment"),ay=Symbol.for("react.strict_mode"),oy=Symbol.for("react.profiler"),ly=Symbol.for("react.provider"),cy=Symbol.for("react.context"),uy=Symbol.for("react.forward_ref"),dy=Symbol.for("react.suspense"),hy=Symbol.for("react.memo"),fy=Symbol.for("react.lazy"),lm=Symbol.iterator;function py(t){return t===null||typeof t!="object"?null:(t=lm&&t[lm]||t["@@iterator"],typeof t=="function"?t:null)}var Ig={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ug=Object.assign,Og={};function ga(t,e,n){this.props=t,this.context=e,this.refs=Og,this.updater=n||Ig}ga.prototype.isReactComponent={};ga.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ga.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Fg(){}Fg.prototype=ga.prototype;function Tf(t,e,n){this.props=t,this.context=e,this.refs=Og,this.updater=n||Ig}var Af=Tf.prototype=new Fg;Af.constructor=Tf;Ug(Af,ga.prototype);Af.isPureReactComponent=!0;var cm=Array.isArray,kg=Object.prototype.hasOwnProperty,Cf={current:null},zg={key:!0,ref:!0,__self:!0,__source:!0};function Bg(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)kg.call(e,i)&&!zg.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Lo,type:t,key:s,ref:a,props:r,_owner:Cf.current}}function my(t,e){return{$$typeof:Lo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Rf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Lo}function gy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var um=/\/+/g;function Nu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?gy(""+t.key):e.toString(36)}function $l(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Lo:case ry:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Nu(a,0):i,cm(r)?(n="",t!=null&&(n=t.replace(um,"$&/")+"/"),$l(r,e,n,"",function(c){return c})):r!=null&&(Rf(r)&&(r=my(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(um,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",cm(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Nu(s,o);a+=$l(s,e,n,l,r)}else if(l=py(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Nu(s,o++),a+=$l(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function rl(t,e,n){if(t==null)return t;var i=[],r=0;return $l(t,i,"","",function(s){return e.call(n,s,r++)}),i}function vy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Sn={current:null},ql={transition:null},xy={ReactCurrentDispatcher:Sn,ReactCurrentBatchConfig:ql,ReactCurrentOwner:Cf};function Hg(){throw Error("act(...) is not supported in production builds of React.")}at.Children={map:rl,forEach:function(t,e,n){rl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return rl(t,function(){e++}),e},toArray:function(t){return rl(t,function(e){return e})||[]},only:function(t){if(!Rf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};at.Component=ga;at.Fragment=sy;at.Profiler=oy;at.PureComponent=Tf;at.StrictMode=ay;at.Suspense=dy;at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xy;at.act=Hg;at.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Ug({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Cf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)kg.call(e,l)&&!zg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Lo,type:t.type,key:r,ref:s,props:i,_owner:a}};at.createContext=function(t){return t={$$typeof:cy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ly,_context:t},t.Consumer=t};at.createElement=Bg;at.createFactory=function(t){var e=Bg.bind(null,t);return e.type=t,e};at.createRef=function(){return{current:null}};at.forwardRef=function(t){return{$$typeof:uy,render:t}};at.isValidElement=Rf;at.lazy=function(t){return{$$typeof:fy,_payload:{_status:-1,_result:t},_init:vy}};at.memo=function(t,e){return{$$typeof:hy,type:t,compare:e===void 0?null:e}};at.startTransition=function(t){var e=ql.transition;ql.transition={};try{t()}finally{ql.transition=e}};at.unstable_act=Hg;at.useCallback=function(t,e){return Sn.current.useCallback(t,e)};at.useContext=function(t){return Sn.current.useContext(t)};at.useDebugValue=function(){};at.useDeferredValue=function(t){return Sn.current.useDeferredValue(t)};at.useEffect=function(t,e){return Sn.current.useEffect(t,e)};at.useId=function(){return Sn.current.useId()};at.useImperativeHandle=function(t,e,n){return Sn.current.useImperativeHandle(t,e,n)};at.useInsertionEffect=function(t,e){return Sn.current.useInsertionEffect(t,e)};at.useLayoutEffect=function(t,e){return Sn.current.useLayoutEffect(t,e)};at.useMemo=function(t,e){return Sn.current.useMemo(t,e)};at.useReducer=function(t,e,n){return Sn.current.useReducer(t,e,n)};at.useRef=function(t){return Sn.current.useRef(t)};at.useState=function(t){return Sn.current.useState(t)};at.useSyncExternalStore=function(t,e,n){return Sn.current.useSyncExternalStore(t,e,n)};at.useTransition=function(){return Sn.current.useTransition()};at.version="18.3.1";Lg.exports=at;var ae=Lg.exports;const Pf=iy(ae);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _y=ae,yy=Symbol.for("react.element"),Sy=Symbol.for("react.fragment"),My=Object.prototype.hasOwnProperty,Ey=_y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wy={key:!0,ref:!0,__self:!0,__source:!0};function Gg(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)My.call(e,i)&&!wy.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:yy,type:t,key:s,ref:a,props:r,_owner:Ey.current}}Yc.Fragment=Sy;Yc.jsx=Gg;Yc.jsxs=Gg;Dg.exports=Yc;var u=Dg.exports,Hd={},Vg={exports:{}},Vn={},Wg={exports:{}},jg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(H,B){var W=H.length;H.push(B);e:for(;0<W;){var Z=W-1>>>1,re=H[Z];if(0<r(re,B))H[Z]=B,H[W]=re,W=Z;else break e}}function n(H){return H.length===0?null:H[0]}function i(H){if(H.length===0)return null;var B=H[0],W=H.pop();if(W!==B){H[0]=W;e:for(var Z=0,re=H.length,de=re>>>1;Z<de;){var Be=2*(Z+1)-1,Ce=H[Be],Ve=Be+1,J=H[Ve];if(0>r(Ce,W))Ve<re&&0>r(J,Ce)?(H[Z]=J,H[Ve]=W,Z=Ve):(H[Z]=Ce,H[Be]=W,Z=Be);else if(Ve<re&&0>r(J,W))H[Z]=J,H[Ve]=W,Z=Ve;else break e}}return B}function r(H,B){var W=H.sortIndex-B.sortIndex;return W!==0?W:H.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],f=1,p=null,d=3,m=!1,g=!1,S=!1,v=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(H){for(var B=n(c);B!==null;){if(B.callback===null)i(c);else if(B.startTime<=H)i(c),B.sortIndex=B.expirationTime,e(l,B);else break;B=n(c)}}function M(H){if(S=!1,E(H),!g)if(n(l)!==null)g=!0,Q(b);else{var B=n(c);B!==null&&q(M,B.startTime-H)}}function b(H,B){g=!1,S&&(S=!1,h(x),x=-1),m=!0;var W=d;try{for(E(B),p=n(l);p!==null&&(!(p.expirationTime>B)||H&&!L());){var Z=p.callback;if(typeof Z=="function"){p.callback=null,d=p.priorityLevel;var re=Z(p.expirationTime<=B);B=t.unstable_now(),typeof re=="function"?p.callback=re:p===n(l)&&i(l),E(B)}else i(l);p=n(l)}if(p!==null)var de=!0;else{var Be=n(c);Be!==null&&q(M,Be.startTime-B),de=!1}return de}finally{p=null,d=W,m=!1}}var T=!1,C=null,x=-1,A=5,P=-1;function L(){return!(t.unstable_now()-P<A)}function O(){if(C!==null){var H=t.unstable_now();P=H;var B=!0;try{B=C(!0,H)}finally{B?U():(T=!1,C=null)}}else T=!1}var U;if(typeof _=="function")U=function(){_(O)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,V=I.port2;I.port1.onmessage=O,U=function(){V.postMessage(null)}}else U=function(){v(O,0)};function Q(H){C=H,T||(T=!0,U())}function q(H,B){x=v(function(){H(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(H){H.callback=null},t.unstable_continueExecution=function(){g||m||(g=!0,Q(b))},t.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<H?Math.floor(1e3/H):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(H){switch(d){case 1:case 2:case 3:var B=3;break;default:B=d}var W=d;d=B;try{return H()}finally{d=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(H,B){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var W=d;d=H;try{return B()}finally{d=W}},t.unstable_scheduleCallback=function(H,B,W){var Z=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?Z+W:Z):W=Z,H){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=W+re,H={id:f++,callback:B,priorityLevel:H,startTime:W,expirationTime:re,sortIndex:-1},W>Z?(H.sortIndex=W,e(c,H),n(l)===null&&H===n(c)&&(S?(h(x),x=-1):S=!0,q(M,W-Z))):(H.sortIndex=re,e(l,H),g||m||(g=!0,Q(b))),H},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(H){var B=d;return function(){var W=d;d=B;try{return H.apply(this,arguments)}finally{d=W}}}})(jg);Wg.exports=jg;var by=Wg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ty=ae,Gn=by;function ce(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xg=new Set,co={};function ms(t,e){oa(t,e),oa(t+"Capture",e)}function oa(t,e){for(co[t]=e,t=0;t<e.length;t++)Xg.add(e[t])}var nr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gd=Object.prototype.hasOwnProperty,Ay=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dm={},hm={};function Cy(t){return Gd.call(hm,t)?!0:Gd.call(dm,t)?!1:Ay.test(t)?hm[t]=!0:(dm[t]=!0,!1)}function Ry(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Py(t,e,n,i){if(e===null||typeof e>"u"||Ry(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Mn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var on={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){on[t]=new Mn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];on[e]=new Mn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){on[t]=new Mn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){on[t]=new Mn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){on[t]=new Mn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){on[t]=new Mn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){on[t]=new Mn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){on[t]=new Mn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){on[t]=new Mn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Nf=/[\-:]([a-z])/g;function Df(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Nf,Df);on[e]=new Mn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Nf,Df);on[e]=new Mn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Nf,Df);on[e]=new Mn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){on[t]=new Mn(t,1,!1,t.toLowerCase(),null,!1,!1)});on.xlinkHref=new Mn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){on[t]=new Mn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Lf(t,e,n,i){var r=on.hasOwnProperty(e)?on[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Py(e,n,r,i)&&(n=null),i||r===null?Cy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var or=Ty.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sl=Symbol.for("react.element"),Fs=Symbol.for("react.portal"),ks=Symbol.for("react.fragment"),If=Symbol.for("react.strict_mode"),Vd=Symbol.for("react.profiler"),Yg=Symbol.for("react.provider"),$g=Symbol.for("react.context"),Uf=Symbol.for("react.forward_ref"),Wd=Symbol.for("react.suspense"),jd=Symbol.for("react.suspense_list"),Of=Symbol.for("react.memo"),xr=Symbol.for("react.lazy"),qg=Symbol.for("react.offscreen"),fm=Symbol.iterator;function Ca(t){return t===null||typeof t!="object"?null:(t=fm&&t[fm]||t["@@iterator"],typeof t=="function"?t:null)}var kt=Object.assign,Du;function Va(t){if(Du===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Du=e&&e[1]||""}return`
`+Du+t}var Lu=!1;function Iu(t,e){if(!t||Lu)return"";Lu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Lu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Va(t):""}function Ny(t){switch(t.tag){case 5:return Va(t.type);case 16:return Va("Lazy");case 13:return Va("Suspense");case 19:return Va("SuspenseList");case 0:case 2:case 15:return t=Iu(t.type,!1),t;case 11:return t=Iu(t.type.render,!1),t;case 1:return t=Iu(t.type,!0),t;default:return""}}function Xd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ks:return"Fragment";case Fs:return"Portal";case Vd:return"Profiler";case If:return"StrictMode";case Wd:return"Suspense";case jd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case $g:return(t.displayName||"Context")+".Consumer";case Yg:return(t._context.displayName||"Context")+".Provider";case Uf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Of:return e=t.displayName||null,e!==null?e:Xd(t.type)||"Memo";case xr:e=t._payload,t=t._init;try{return Xd(t(e))}catch{}}return null}function Dy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xd(e);case 8:return e===If?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ir(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Kg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ly(t){var e=Kg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function al(t){t._valueTracker||(t._valueTracker=Ly(t))}function Zg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Kg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function fc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Yd(t,e){var n=e.checked;return kt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function pm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ir(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Jg(t,e){e=e.checked,e!=null&&Lf(t,"checked",e,!1)}function $d(t,e){Jg(t,e);var n=Ir(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?qd(t,e.type,n):e.hasOwnProperty("defaultValue")&&qd(t,e.type,Ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function mm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function qd(t,e,n){(e!=="number"||fc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Wa=Array.isArray;function Js(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ir(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Kd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ce(91));return kt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function gm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ce(92));if(Wa(n)){if(1<n.length)throw Error(ce(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ir(n)}}function Qg(t,e){var n=Ir(e.value),i=Ir(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function vm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ev(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ev(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ol,tv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ol=ol||document.createElement("div"),ol.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ol.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function uo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var qa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Iy=["Webkit","ms","Moz","O"];Object.keys(qa).forEach(function(t){Iy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),qa[e]=qa[t]})});function nv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||qa.hasOwnProperty(t)&&qa[t]?(""+e).trim():e+"px"}function iv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=nv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Uy=kt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Jd(t,e){if(e){if(Uy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ce(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ce(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ce(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ce(62))}}function Qd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var eh=null;function Ff(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var th=null,Qs=null,ea=null;function xm(t){if(t=Oo(t)){if(typeof th!="function")throw Error(ce(280));var e=t.stateNode;e&&(e=Jc(e),th(t.stateNode,t.type,e))}}function rv(t){Qs?ea?ea.push(t):ea=[t]:Qs=t}function sv(){if(Qs){var t=Qs,e=ea;if(ea=Qs=null,xm(t),e)for(t=0;t<e.length;t++)xm(e[t])}}function av(t,e){return t(e)}function ov(){}var Uu=!1;function lv(t,e,n){if(Uu)return t(e,n);Uu=!0;try{return av(t,e,n)}finally{Uu=!1,(Qs!==null||ea!==null)&&(ov(),sv())}}function ho(t,e){var n=t.stateNode;if(n===null)return null;var i=Jc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ce(231,e,typeof n));return n}var nh=!1;if(nr)try{var Ra={};Object.defineProperty(Ra,"passive",{get:function(){nh=!0}}),window.addEventListener("test",Ra,Ra),window.removeEventListener("test",Ra,Ra)}catch{nh=!1}function Oy(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Ka=!1,pc=null,mc=!1,ih=null,Fy={onError:function(t){Ka=!0,pc=t}};function ky(t,e,n,i,r,s,a,o,l){Ka=!1,pc=null,Oy.apply(Fy,arguments)}function zy(t,e,n,i,r,s,a,o,l){if(ky.apply(this,arguments),Ka){if(Ka){var c=pc;Ka=!1,pc=null}else throw Error(ce(198));mc||(mc=!0,ih=c)}}function gs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function cv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _m(t){if(gs(t)!==t)throw Error(ce(188))}function By(t){var e=t.alternate;if(!e){if(e=gs(t),e===null)throw Error(ce(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return _m(r),t;if(s===i)return _m(r),e;s=s.sibling}throw Error(ce(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ce(189))}}if(n.alternate!==i)throw Error(ce(190))}if(n.tag!==3)throw Error(ce(188));return n.stateNode.current===n?t:e}function uv(t){return t=By(t),t!==null?dv(t):null}function dv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=dv(t);if(e!==null)return e;t=t.sibling}return null}var hv=Gn.unstable_scheduleCallback,ym=Gn.unstable_cancelCallback,Hy=Gn.unstable_shouldYield,Gy=Gn.unstable_requestPaint,Ht=Gn.unstable_now,Vy=Gn.unstable_getCurrentPriorityLevel,kf=Gn.unstable_ImmediatePriority,fv=Gn.unstable_UserBlockingPriority,gc=Gn.unstable_NormalPriority,Wy=Gn.unstable_LowPriority,pv=Gn.unstable_IdlePriority,$c=null,Di=null;function jy(t){if(Di&&typeof Di.onCommitFiberRoot=="function")try{Di.onCommitFiberRoot($c,t,void 0,(t.current.flags&128)===128)}catch{}}var mi=Math.clz32?Math.clz32:$y,Xy=Math.log,Yy=Math.LN2;function $y(t){return t>>>=0,t===0?32:31-(Xy(t)/Yy|0)|0}var ll=64,cl=4194304;function ja(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function vc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=ja(o):(s&=a,s!==0&&(i=ja(s)))}else a=n&~r,a!==0?i=ja(a):s!==0&&(i=ja(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-mi(e),r=1<<n,i|=t[n],e&=~r;return i}function qy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ky(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-mi(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=qy(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function rh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function mv(){var t=ll;return ll<<=1,!(ll&4194240)&&(ll=64),t}function Ou(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Io(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-mi(e),t[e]=n}function Zy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-mi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function zf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-mi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var wt=0;function gv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var vv,Bf,xv,_v,yv,sh=!1,ul=[],br=null,Tr=null,Ar=null,fo=new Map,po=new Map,yr=[],Jy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sm(t,e){switch(t){case"focusin":case"focusout":br=null;break;case"dragenter":case"dragleave":Tr=null;break;case"mouseover":case"mouseout":Ar=null;break;case"pointerover":case"pointerout":fo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":po.delete(e.pointerId)}}function Pa(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Oo(e),e!==null&&Bf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Qy(t,e,n,i,r){switch(e){case"focusin":return br=Pa(br,t,e,n,i,r),!0;case"dragenter":return Tr=Pa(Tr,t,e,n,i,r),!0;case"mouseover":return Ar=Pa(Ar,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return fo.set(s,Pa(fo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,po.set(s,Pa(po.get(s)||null,t,e,n,i,r)),!0}return!1}function Sv(t){var e=Jr(t.target);if(e!==null){var n=gs(e);if(n!==null){if(e=n.tag,e===13){if(e=cv(n),e!==null){t.blockedOn=e,yv(t.priority,function(){xv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Kl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ah(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);eh=i,n.target.dispatchEvent(i),eh=null}else return e=Oo(n),e!==null&&Bf(e),t.blockedOn=n,!1;e.shift()}return!0}function Mm(t,e,n){Kl(t)&&n.delete(e)}function eS(){sh=!1,br!==null&&Kl(br)&&(br=null),Tr!==null&&Kl(Tr)&&(Tr=null),Ar!==null&&Kl(Ar)&&(Ar=null),fo.forEach(Mm),po.forEach(Mm)}function Na(t,e){t.blockedOn===e&&(t.blockedOn=null,sh||(sh=!0,Gn.unstable_scheduleCallback(Gn.unstable_NormalPriority,eS)))}function mo(t){function e(r){return Na(r,t)}if(0<ul.length){Na(ul[0],t);for(var n=1;n<ul.length;n++){var i=ul[n];i.blockedOn===t&&(i.blockedOn=null)}}for(br!==null&&Na(br,t),Tr!==null&&Na(Tr,t),Ar!==null&&Na(Ar,t),fo.forEach(e),po.forEach(e),n=0;n<yr.length;n++)i=yr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<yr.length&&(n=yr[0],n.blockedOn===null);)Sv(n),n.blockedOn===null&&yr.shift()}var ta=or.ReactCurrentBatchConfig,xc=!0;function tS(t,e,n,i){var r=wt,s=ta.transition;ta.transition=null;try{wt=1,Hf(t,e,n,i)}finally{wt=r,ta.transition=s}}function nS(t,e,n,i){var r=wt,s=ta.transition;ta.transition=null;try{wt=4,Hf(t,e,n,i)}finally{wt=r,ta.transition=s}}function Hf(t,e,n,i){if(xc){var r=ah(t,e,n,i);if(r===null)Xu(t,e,i,_c,n),Sm(t,i);else if(Qy(r,t,e,n,i))i.stopPropagation();else if(Sm(t,i),e&4&&-1<Jy.indexOf(t)){for(;r!==null;){var s=Oo(r);if(s!==null&&vv(s),s=ah(t,e,n,i),s===null&&Xu(t,e,i,_c,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Xu(t,e,i,null,n)}}var _c=null;function ah(t,e,n,i){if(_c=null,t=Ff(i),t=Jr(t),t!==null)if(e=gs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=cv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return _c=t,null}function Mv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vy()){case kf:return 1;case fv:return 4;case gc:case Wy:return 16;case pv:return 536870912;default:return 16}default:return 16}}var Er=null,Gf=null,Zl=null;function Ev(){if(Zl)return Zl;var t,e=Gf,n=e.length,i,r="value"in Er?Er.value:Er.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Zl=r.slice(t,1<i?1-i:void 0)}function Jl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function dl(){return!0}function Em(){return!1}function Wn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?dl:Em,this.isPropagationStopped=Em,this}return kt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=dl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=dl)},persist:function(){},isPersistent:dl}),e}var va={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vf=Wn(va),Uo=kt({},va,{view:0,detail:0}),iS=Wn(Uo),Fu,ku,Da,qc=kt({},Uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Da&&(Da&&t.type==="mousemove"?(Fu=t.screenX-Da.screenX,ku=t.screenY-Da.screenY):ku=Fu=0,Da=t),Fu)},movementY:function(t){return"movementY"in t?t.movementY:ku}}),wm=Wn(qc),rS=kt({},qc,{dataTransfer:0}),sS=Wn(rS),aS=kt({},Uo,{relatedTarget:0}),zu=Wn(aS),oS=kt({},va,{animationName:0,elapsedTime:0,pseudoElement:0}),lS=Wn(oS),cS=kt({},va,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),uS=Wn(cS),dS=kt({},va,{data:0}),bm=Wn(dS),hS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=pS[t])?!!e[t]:!1}function Wf(){return mS}var gS=kt({},Uo,{key:function(t){if(t.key){var e=hS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Jl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?fS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wf,charCode:function(t){return t.type==="keypress"?Jl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Jl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),vS=Wn(gS),xS=kt({},qc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tm=Wn(xS),_S=kt({},Uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wf}),yS=Wn(_S),SS=kt({},va,{propertyName:0,elapsedTime:0,pseudoElement:0}),MS=Wn(SS),ES=kt({},qc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),wS=Wn(ES),bS=[9,13,27,32],jf=nr&&"CompositionEvent"in window,Za=null;nr&&"documentMode"in document&&(Za=document.documentMode);var TS=nr&&"TextEvent"in window&&!Za,wv=nr&&(!jf||Za&&8<Za&&11>=Za),Am=" ",Cm=!1;function bv(t,e){switch(t){case"keyup":return bS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var zs=!1;function AS(t,e){switch(t){case"compositionend":return Tv(e);case"keypress":return e.which!==32?null:(Cm=!0,Am);case"textInput":return t=e.data,t===Am&&Cm?null:t;default:return null}}function CS(t,e){if(zs)return t==="compositionend"||!jf&&bv(t,e)?(t=Ev(),Zl=Gf=Er=null,zs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return wv&&e.locale!=="ko"?null:e.data;default:return null}}var RS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!RS[t.type]:e==="textarea"}function Av(t,e,n,i){rv(i),e=yc(e,"onChange"),0<e.length&&(n=new Vf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ja=null,go=null;function PS(t){kv(t,0)}function Kc(t){var e=Gs(t);if(Zg(e))return t}function NS(t,e){if(t==="change")return e}var Cv=!1;if(nr){var Bu;if(nr){var Hu="oninput"in document;if(!Hu){var Pm=document.createElement("div");Pm.setAttribute("oninput","return;"),Hu=typeof Pm.oninput=="function"}Bu=Hu}else Bu=!1;Cv=Bu&&(!document.documentMode||9<document.documentMode)}function Nm(){Ja&&(Ja.detachEvent("onpropertychange",Rv),go=Ja=null)}function Rv(t){if(t.propertyName==="value"&&Kc(go)){var e=[];Av(e,go,t,Ff(t)),lv(PS,e)}}function DS(t,e,n){t==="focusin"?(Nm(),Ja=e,go=n,Ja.attachEvent("onpropertychange",Rv)):t==="focusout"&&Nm()}function LS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Kc(go)}function IS(t,e){if(t==="click")return Kc(e)}function US(t,e){if(t==="input"||t==="change")return Kc(e)}function OS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var xi=typeof Object.is=="function"?Object.is:OS;function vo(t,e){if(xi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Gd.call(e,r)||!xi(t[r],e[r]))return!1}return!0}function Dm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Lm(t,e){var n=Dm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Dm(n)}}function Pv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Pv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Nv(){for(var t=window,e=fc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=fc(t.document)}return e}function Xf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function FS(t){var e=Nv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Pv(n.ownerDocument.documentElement,n)){if(i!==null&&Xf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Lm(n,s);var a=Lm(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var kS=nr&&"documentMode"in document&&11>=document.documentMode,Bs=null,oh=null,Qa=null,lh=!1;function Im(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;lh||Bs==null||Bs!==fc(i)||(i=Bs,"selectionStart"in i&&Xf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Qa&&vo(Qa,i)||(Qa=i,i=yc(oh,"onSelect"),0<i.length&&(e=new Vf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Bs)))}function hl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Hs={animationend:hl("Animation","AnimationEnd"),animationiteration:hl("Animation","AnimationIteration"),animationstart:hl("Animation","AnimationStart"),transitionend:hl("Transition","TransitionEnd")},Gu={},Dv={};nr&&(Dv=document.createElement("div").style,"AnimationEvent"in window||(delete Hs.animationend.animation,delete Hs.animationiteration.animation,delete Hs.animationstart.animation),"TransitionEvent"in window||delete Hs.transitionend.transition);function Zc(t){if(Gu[t])return Gu[t];if(!Hs[t])return t;var e=Hs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Dv)return Gu[t]=e[n];return t}var Lv=Zc("animationend"),Iv=Zc("animationiteration"),Uv=Zc("animationstart"),Ov=Zc("transitionend"),Fv=new Map,Um="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kr(t,e){Fv.set(t,e),ms(e,[t])}for(var Vu=0;Vu<Um.length;Vu++){var Wu=Um[Vu],zS=Wu.toLowerCase(),BS=Wu[0].toUpperCase()+Wu.slice(1);kr(zS,"on"+BS)}kr(Lv,"onAnimationEnd");kr(Iv,"onAnimationIteration");kr(Uv,"onAnimationStart");kr("dblclick","onDoubleClick");kr("focusin","onFocus");kr("focusout","onBlur");kr(Ov,"onTransitionEnd");oa("onMouseEnter",["mouseout","mouseover"]);oa("onMouseLeave",["mouseout","mouseover"]);oa("onPointerEnter",["pointerout","pointerover"]);oa("onPointerLeave",["pointerout","pointerover"]);ms("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ms("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ms("onBeforeInput",["compositionend","keypress","textInput","paste"]);ms("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ms("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ms("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),HS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xa));function Om(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,zy(i,e,void 0,t),t.currentTarget=null}function kv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Om(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Om(r,o,c),s=l}}}if(mc)throw t=ih,mc=!1,ih=null,t}function Pt(t,e){var n=e[fh];n===void 0&&(n=e[fh]=new Set);var i=t+"__bubble";n.has(i)||(zv(e,t,2,!1),n.add(i))}function ju(t,e,n){var i=0;e&&(i|=4),zv(n,t,i,e)}var fl="_reactListening"+Math.random().toString(36).slice(2);function xo(t){if(!t[fl]){t[fl]=!0,Xg.forEach(function(n){n!=="selectionchange"&&(HS.has(n)||ju(n,!1,t),ju(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[fl]||(e[fl]=!0,ju("selectionchange",!1,e))}}function zv(t,e,n,i){switch(Mv(e)){case 1:var r=tS;break;case 4:r=nS;break;default:r=Hf}n=r.bind(null,e,n,t),r=void 0,!nh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Xu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Jr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}lv(function(){var c=s,f=Ff(n),p=[];e:{var d=Fv.get(t);if(d!==void 0){var m=Vf,g=t;switch(t){case"keypress":if(Jl(n)===0)break e;case"keydown":case"keyup":m=vS;break;case"focusin":g="focus",m=zu;break;case"focusout":g="blur",m=zu;break;case"beforeblur":case"afterblur":m=zu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=wm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=sS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=yS;break;case Lv:case Iv:case Uv:m=lS;break;case Ov:m=MS;break;case"scroll":m=iS;break;case"wheel":m=wS;break;case"copy":case"cut":case"paste":m=uS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Tm}var S=(e&4)!==0,v=!S&&t==="scroll",h=S?d!==null?d+"Capture":null:d;S=[];for(var _=c,E;_!==null;){E=_;var M=E.stateNode;if(E.tag===5&&M!==null&&(E=M,h!==null&&(M=ho(_,h),M!=null&&S.push(_o(_,M,E)))),v)break;_=_.return}0<S.length&&(d=new m(d,g,null,n,f),p.push({event:d,listeners:S}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==eh&&(g=n.relatedTarget||n.fromElement)&&(Jr(g)||g[ir]))break e;if((m||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,m?(g=n.relatedTarget||n.toElement,m=c,g=g?Jr(g):null,g!==null&&(v=gs(g),g!==v||g.tag!==5&&g.tag!==6)&&(g=null)):(m=null,g=c),m!==g)){if(S=wm,M="onMouseLeave",h="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(S=Tm,M="onPointerLeave",h="onPointerEnter",_="pointer"),v=m==null?d:Gs(m),E=g==null?d:Gs(g),d=new S(M,_+"leave",m,n,f),d.target=v,d.relatedTarget=E,M=null,Jr(f)===c&&(S=new S(h,_+"enter",g,n,f),S.target=E,S.relatedTarget=v,M=S),v=M,m&&g)t:{for(S=m,h=g,_=0,E=S;E;E=ys(E))_++;for(E=0,M=h;M;M=ys(M))E++;for(;0<_-E;)S=ys(S),_--;for(;0<E-_;)h=ys(h),E--;for(;_--;){if(S===h||h!==null&&S===h.alternate)break t;S=ys(S),h=ys(h)}S=null}else S=null;m!==null&&Fm(p,d,m,S,!1),g!==null&&v!==null&&Fm(p,v,g,S,!0)}}e:{if(d=c?Gs(c):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var b=NS;else if(Rm(d))if(Cv)b=US;else{b=LS;var T=DS}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(b=IS);if(b&&(b=b(t,c))){Av(p,b,n,f);break e}T&&T(t,d,c),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&qd(d,"number",d.value)}switch(T=c?Gs(c):window,t){case"focusin":(Rm(T)||T.contentEditable==="true")&&(Bs=T,oh=c,Qa=null);break;case"focusout":Qa=oh=Bs=null;break;case"mousedown":lh=!0;break;case"contextmenu":case"mouseup":case"dragend":lh=!1,Im(p,n,f);break;case"selectionchange":if(kS)break;case"keydown":case"keyup":Im(p,n,f)}var C;if(jf)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else zs?bv(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(wv&&n.locale!=="ko"&&(zs||x!=="onCompositionStart"?x==="onCompositionEnd"&&zs&&(C=Ev()):(Er=f,Gf="value"in Er?Er.value:Er.textContent,zs=!0)),T=yc(c,x),0<T.length&&(x=new bm(x,t,null,n,f),p.push({event:x,listeners:T}),C?x.data=C:(C=Tv(n),C!==null&&(x.data=C)))),(C=TS?AS(t,n):CS(t,n))&&(c=yc(c,"onBeforeInput"),0<c.length&&(f=new bm("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:c}),f.data=C))}kv(p,e)})}function _o(t,e,n){return{instance:t,listener:e,currentTarget:n}}function yc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ho(t,n),s!=null&&i.unshift(_o(t,s,r)),s=ho(t,e),s!=null&&i.push(_o(t,s,r))),t=t.return}return i}function ys(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Fm(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=ho(n,s),l!=null&&a.unshift(_o(n,l,o))):r||(l=ho(n,s),l!=null&&a.push(_o(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var GS=/\r\n?/g,VS=/\u0000|\uFFFD/g;function km(t){return(typeof t=="string"?t:""+t).replace(GS,`
`).replace(VS,"")}function pl(t,e,n){if(e=km(e),km(t)!==e&&n)throw Error(ce(425))}function Sc(){}var ch=null,uh=null;function dh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var hh=typeof setTimeout=="function"?setTimeout:void 0,WS=typeof clearTimeout=="function"?clearTimeout:void 0,zm=typeof Promise=="function"?Promise:void 0,jS=typeof queueMicrotask=="function"?queueMicrotask:typeof zm<"u"?function(t){return zm.resolve(null).then(t).catch(XS)}:hh;function XS(t){setTimeout(function(){throw t})}function Yu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),mo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);mo(e)}function Cr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Bm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var xa=Math.random().toString(36).slice(2),Ci="__reactFiber$"+xa,yo="__reactProps$"+xa,ir="__reactContainer$"+xa,fh="__reactEvents$"+xa,YS="__reactListeners$"+xa,$S="__reactHandles$"+xa;function Jr(t){var e=t[Ci];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ir]||n[Ci]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Bm(t);t!==null;){if(n=t[Ci])return n;t=Bm(t)}return e}t=n,n=t.parentNode}return null}function Oo(t){return t=t[Ci]||t[ir],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Gs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ce(33))}function Jc(t){return t[yo]||null}var ph=[],Vs=-1;function zr(t){return{current:t}}function Nt(t){0>Vs||(t.current=ph[Vs],ph[Vs]=null,Vs--)}function At(t,e){Vs++,ph[Vs]=t.current,t.current=e}var Ur={},pn=zr(Ur),Nn=zr(!1),as=Ur;function la(t,e){var n=t.type.contextTypes;if(!n)return Ur;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Dn(t){return t=t.childContextTypes,t!=null}function Mc(){Nt(Nn),Nt(pn)}function Hm(t,e,n){if(pn.current!==Ur)throw Error(ce(168));At(pn,e),At(Nn,n)}function Bv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ce(108,Dy(t)||"Unknown",r));return kt({},n,i)}function Ec(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ur,as=pn.current,At(pn,t),At(Nn,Nn.current),!0}function Gm(t,e,n){var i=t.stateNode;if(!i)throw Error(ce(169));n?(t=Bv(t,e,as),i.__reactInternalMemoizedMergedChildContext=t,Nt(Nn),Nt(pn),At(pn,t)):Nt(Nn),At(Nn,n)}var Yi=null,Qc=!1,$u=!1;function Hv(t){Yi===null?Yi=[t]:Yi.push(t)}function qS(t){Qc=!0,Hv(t)}function Br(){if(!$u&&Yi!==null){$u=!0;var t=0,e=wt;try{var n=Yi;for(wt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Yi=null,Qc=!1}catch(r){throw Yi!==null&&(Yi=Yi.slice(t+1)),hv(kf,Br),r}finally{wt=e,$u=!1}}return null}var Ws=[],js=0,wc=null,bc=0,Jn=[],Qn=0,os=null,Ki=1,Zi="";function qr(t,e){Ws[js++]=bc,Ws[js++]=wc,wc=t,bc=e}function Gv(t,e,n){Jn[Qn++]=Ki,Jn[Qn++]=Zi,Jn[Qn++]=os,os=t;var i=Ki;t=Zi;var r=32-mi(i)-1;i&=~(1<<r),n+=1;var s=32-mi(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Ki=1<<32-mi(e)+r|n<<r|i,Zi=s+t}else Ki=1<<s|n<<r|i,Zi=t}function Yf(t){t.return!==null&&(qr(t,1),Gv(t,1,0))}function $f(t){for(;t===wc;)wc=Ws[--js],Ws[js]=null,bc=Ws[--js],Ws[js]=null;for(;t===os;)os=Jn[--Qn],Jn[Qn]=null,Zi=Jn[--Qn],Jn[Qn]=null,Ki=Jn[--Qn],Jn[Qn]=null}var Hn=null,Bn=null,Lt=!1,hi=null;function Vv(t,e){var n=ei(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Vm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Hn=t,Bn=Cr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Hn=t,Bn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=os!==null?{id:Ki,overflow:Zi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ei(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Hn=t,Bn=null,!0):!1;default:return!1}}function mh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function gh(t){if(Lt){var e=Bn;if(e){var n=e;if(!Vm(t,e)){if(mh(t))throw Error(ce(418));e=Cr(n.nextSibling);var i=Hn;e&&Vm(t,e)?Vv(i,n):(t.flags=t.flags&-4097|2,Lt=!1,Hn=t)}}else{if(mh(t))throw Error(ce(418));t.flags=t.flags&-4097|2,Lt=!1,Hn=t}}}function Wm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Hn=t}function ml(t){if(t!==Hn)return!1;if(!Lt)return Wm(t),Lt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!dh(t.type,t.memoizedProps)),e&&(e=Bn)){if(mh(t))throw Wv(),Error(ce(418));for(;e;)Vv(t,e),e=Cr(e.nextSibling)}if(Wm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ce(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Bn=Cr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Bn=null}}else Bn=Hn?Cr(t.stateNode.nextSibling):null;return!0}function Wv(){for(var t=Bn;t;)t=Cr(t.nextSibling)}function ca(){Bn=Hn=null,Lt=!1}function qf(t){hi===null?hi=[t]:hi.push(t)}var KS=or.ReactCurrentBatchConfig;function La(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ce(309));var i=n.stateNode}if(!i)throw Error(ce(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ce(284));if(!n._owner)throw Error(ce(290,t))}return t}function gl(t,e){throw t=Object.prototype.toString.call(e),Error(ce(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function jm(t){var e=t._init;return e(t._payload)}function jv(t){function e(h,_){if(t){var E=h.deletions;E===null?(h.deletions=[_],h.flags|=16):E.push(_)}}function n(h,_){if(!t)return null;for(;_!==null;)e(h,_),_=_.sibling;return null}function i(h,_){for(h=new Map;_!==null;)_.key!==null?h.set(_.key,_):h.set(_.index,_),_=_.sibling;return h}function r(h,_){return h=Dr(h,_),h.index=0,h.sibling=null,h}function s(h,_,E){return h.index=E,t?(E=h.alternate,E!==null?(E=E.index,E<_?(h.flags|=2,_):E):(h.flags|=2,_)):(h.flags|=1048576,_)}function a(h){return t&&h.alternate===null&&(h.flags|=2),h}function o(h,_,E,M){return _===null||_.tag!==6?(_=td(E,h.mode,M),_.return=h,_):(_=r(_,E),_.return=h,_)}function l(h,_,E,M){var b=E.type;return b===ks?f(h,_,E.props.children,M,E.key):_!==null&&(_.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===xr&&jm(b)===_.type)?(M=r(_,E.props),M.ref=La(h,_,E),M.return=h,M):(M=sc(E.type,E.key,E.props,null,h.mode,M),M.ref=La(h,_,E),M.return=h,M)}function c(h,_,E,M){return _===null||_.tag!==4||_.stateNode.containerInfo!==E.containerInfo||_.stateNode.implementation!==E.implementation?(_=nd(E,h.mode,M),_.return=h,_):(_=r(_,E.children||[]),_.return=h,_)}function f(h,_,E,M,b){return _===null||_.tag!==7?(_=ss(E,h.mode,M,b),_.return=h,_):(_=r(_,E),_.return=h,_)}function p(h,_,E){if(typeof _=="string"&&_!==""||typeof _=="number")return _=td(""+_,h.mode,E),_.return=h,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case sl:return E=sc(_.type,_.key,_.props,null,h.mode,E),E.ref=La(h,null,_),E.return=h,E;case Fs:return _=nd(_,h.mode,E),_.return=h,_;case xr:var M=_._init;return p(h,M(_._payload),E)}if(Wa(_)||Ca(_))return _=ss(_,h.mode,E,null),_.return=h,_;gl(h,_)}return null}function d(h,_,E,M){var b=_!==null?_.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return b!==null?null:o(h,_,""+E,M);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case sl:return E.key===b?l(h,_,E,M):null;case Fs:return E.key===b?c(h,_,E,M):null;case xr:return b=E._init,d(h,_,b(E._payload),M)}if(Wa(E)||Ca(E))return b!==null?null:f(h,_,E,M,null);gl(h,E)}return null}function m(h,_,E,M,b){if(typeof M=="string"&&M!==""||typeof M=="number")return h=h.get(E)||null,o(_,h,""+M,b);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case sl:return h=h.get(M.key===null?E:M.key)||null,l(_,h,M,b);case Fs:return h=h.get(M.key===null?E:M.key)||null,c(_,h,M,b);case xr:var T=M._init;return m(h,_,E,T(M._payload),b)}if(Wa(M)||Ca(M))return h=h.get(E)||null,f(_,h,M,b,null);gl(_,M)}return null}function g(h,_,E,M){for(var b=null,T=null,C=_,x=_=0,A=null;C!==null&&x<E.length;x++){C.index>x?(A=C,C=null):A=C.sibling;var P=d(h,C,E[x],M);if(P===null){C===null&&(C=A);break}t&&C&&P.alternate===null&&e(h,C),_=s(P,_,x),T===null?b=P:T.sibling=P,T=P,C=A}if(x===E.length)return n(h,C),Lt&&qr(h,x),b;if(C===null){for(;x<E.length;x++)C=p(h,E[x],M),C!==null&&(_=s(C,_,x),T===null?b=C:T.sibling=C,T=C);return Lt&&qr(h,x),b}for(C=i(h,C);x<E.length;x++)A=m(C,h,x,E[x],M),A!==null&&(t&&A.alternate!==null&&C.delete(A.key===null?x:A.key),_=s(A,_,x),T===null?b=A:T.sibling=A,T=A);return t&&C.forEach(function(L){return e(h,L)}),Lt&&qr(h,x),b}function S(h,_,E,M){var b=Ca(E);if(typeof b!="function")throw Error(ce(150));if(E=b.call(E),E==null)throw Error(ce(151));for(var T=b=null,C=_,x=_=0,A=null,P=E.next();C!==null&&!P.done;x++,P=E.next()){C.index>x?(A=C,C=null):A=C.sibling;var L=d(h,C,P.value,M);if(L===null){C===null&&(C=A);break}t&&C&&L.alternate===null&&e(h,C),_=s(L,_,x),T===null?b=L:T.sibling=L,T=L,C=A}if(P.done)return n(h,C),Lt&&qr(h,x),b;if(C===null){for(;!P.done;x++,P=E.next())P=p(h,P.value,M),P!==null&&(_=s(P,_,x),T===null?b=P:T.sibling=P,T=P);return Lt&&qr(h,x),b}for(C=i(h,C);!P.done;x++,P=E.next())P=m(C,h,x,P.value,M),P!==null&&(t&&P.alternate!==null&&C.delete(P.key===null?x:P.key),_=s(P,_,x),T===null?b=P:T.sibling=P,T=P);return t&&C.forEach(function(O){return e(h,O)}),Lt&&qr(h,x),b}function v(h,_,E,M){if(typeof E=="object"&&E!==null&&E.type===ks&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case sl:e:{for(var b=E.key,T=_;T!==null;){if(T.key===b){if(b=E.type,b===ks){if(T.tag===7){n(h,T.sibling),_=r(T,E.props.children),_.return=h,h=_;break e}}else if(T.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===xr&&jm(b)===T.type){n(h,T.sibling),_=r(T,E.props),_.ref=La(h,T,E),_.return=h,h=_;break e}n(h,T);break}else e(h,T);T=T.sibling}E.type===ks?(_=ss(E.props.children,h.mode,M,E.key),_.return=h,h=_):(M=sc(E.type,E.key,E.props,null,h.mode,M),M.ref=La(h,_,E),M.return=h,h=M)}return a(h);case Fs:e:{for(T=E.key;_!==null;){if(_.key===T)if(_.tag===4&&_.stateNode.containerInfo===E.containerInfo&&_.stateNode.implementation===E.implementation){n(h,_.sibling),_=r(_,E.children||[]),_.return=h,h=_;break e}else{n(h,_);break}else e(h,_);_=_.sibling}_=nd(E,h.mode,M),_.return=h,h=_}return a(h);case xr:return T=E._init,v(h,_,T(E._payload),M)}if(Wa(E))return g(h,_,E,M);if(Ca(E))return S(h,_,E,M);gl(h,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,_!==null&&_.tag===6?(n(h,_.sibling),_=r(_,E),_.return=h,h=_):(n(h,_),_=td(E,h.mode,M),_.return=h,h=_),a(h)):n(h,_)}return v}var ua=jv(!0),Xv=jv(!1),Tc=zr(null),Ac=null,Xs=null,Kf=null;function Zf(){Kf=Xs=Ac=null}function Jf(t){var e=Tc.current;Nt(Tc),t._currentValue=e}function vh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function na(t,e){Ac=t,Kf=Xs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Pn=!0),t.firstContext=null)}function ni(t){var e=t._currentValue;if(Kf!==t)if(t={context:t,memoizedValue:e,next:null},Xs===null){if(Ac===null)throw Error(ce(308));Xs=t,Ac.dependencies={lanes:0,firstContext:t}}else Xs=Xs.next=t;return e}var Qr=null;function Qf(t){Qr===null?Qr=[t]:Qr.push(t)}function Yv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Qf(e)):(n.next=r.next,r.next=n),e.interleaved=n,rr(t,i)}function rr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var _r=!1;function ep(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $v(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Qi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Rr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,ht&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,rr(t,n)}return r=i.interleaved,r===null?(e.next=e,Qf(i)):(e.next=r.next,r.next=e),i.interleaved=e,rr(t,n)}function Ql(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,zf(t,n)}}function Xm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Cc(t,e,n,i){var r=t.updateQueue;_r=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(s!==null){var p=r.baseState;a=0,f=c=l=null,o=s;do{var d=o.lane,m=o.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var g=t,S=o;switch(d=e,m=n,S.tag){case 1:if(g=S.payload,typeof g=="function"){p=g.call(m,p,d);break e}p=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=S.payload,d=typeof g=="function"?g.call(m,p,d):g,d==null)break e;p=kt({},p,d);break e;case 2:_r=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else m={eventTime:m,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=m,l=p):f=f.next=m,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=p),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);cs|=a,t.lanes=a,t.memoizedState=p}}function Ym(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ce(191,r));r.call(i)}}}var Fo={},Li=zr(Fo),So=zr(Fo),Mo=zr(Fo);function es(t){if(t===Fo)throw Error(ce(174));return t}function tp(t,e){switch(At(Mo,e),At(So,t),At(Li,Fo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Zd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Zd(e,t)}Nt(Li),At(Li,e)}function da(){Nt(Li),Nt(So),Nt(Mo)}function qv(t){es(Mo.current);var e=es(Li.current),n=Zd(e,t.type);e!==n&&(At(So,t),At(Li,n))}function np(t){So.current===t&&(Nt(Li),Nt(So))}var Ut=zr(0);function Rc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var qu=[];function ip(){for(var t=0;t<qu.length;t++)qu[t]._workInProgressVersionPrimary=null;qu.length=0}var ec=or.ReactCurrentDispatcher,Ku=or.ReactCurrentBatchConfig,ls=0,Ft=null,Xt=null,Qt=null,Pc=!1,eo=!1,Eo=0,ZS=0;function ln(){throw Error(ce(321))}function rp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!xi(t[n],e[n]))return!1;return!0}function sp(t,e,n,i,r,s){if(ls=s,Ft=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ec.current=t===null||t.memoizedState===null?t1:n1,t=n(i,r),eo){s=0;do{if(eo=!1,Eo=0,25<=s)throw Error(ce(301));s+=1,Qt=Xt=null,e.updateQueue=null,ec.current=i1,t=n(i,r)}while(eo)}if(ec.current=Nc,e=Xt!==null&&Xt.next!==null,ls=0,Qt=Xt=Ft=null,Pc=!1,e)throw Error(ce(300));return t}function ap(){var t=Eo!==0;return Eo=0,t}function Ti(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qt===null?Ft.memoizedState=Qt=t:Qt=Qt.next=t,Qt}function ii(){if(Xt===null){var t=Ft.alternate;t=t!==null?t.memoizedState:null}else t=Xt.next;var e=Qt===null?Ft.memoizedState:Qt.next;if(e!==null)Qt=e,Xt=t;else{if(t===null)throw Error(ce(310));Xt=t,t={memoizedState:Xt.memoizedState,baseState:Xt.baseState,baseQueue:Xt.baseQueue,queue:Xt.queue,next:null},Qt===null?Ft.memoizedState=Qt=t:Qt=Qt.next=t}return Qt}function wo(t,e){return typeof e=="function"?e(t):e}function Zu(t){var e=ii(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=Xt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var f=c.lane;if((ls&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=p,a=i):l=l.next=p,Ft.lanes|=f,cs|=f}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,xi(i,e.memoizedState)||(Pn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Ft.lanes|=s,cs|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ju(t){var e=ii(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);xi(s,e.memoizedState)||(Pn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Kv(){}function Zv(t,e){var n=Ft,i=ii(),r=e(),s=!xi(i.memoizedState,r);if(s&&(i.memoizedState=r,Pn=!0),i=i.queue,op(ex.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Qt!==null&&Qt.memoizedState.tag&1){if(n.flags|=2048,bo(9,Qv.bind(null,n,i,r,e),void 0,null),en===null)throw Error(ce(349));ls&30||Jv(n,e,r)}return r}function Jv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ft.updateQueue,e===null?(e={lastEffect:null,stores:null},Ft.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Qv(t,e,n,i){e.value=n,e.getSnapshot=i,tx(e)&&nx(t)}function ex(t,e,n){return n(function(){tx(e)&&nx(t)})}function tx(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!xi(t,n)}catch{return!0}}function nx(t){var e=rr(t,1);e!==null&&gi(e,t,1,-1)}function $m(t){var e=Ti();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wo,lastRenderedState:t},e.queue=t,t=t.dispatch=e1.bind(null,Ft,t),[e.memoizedState,t]}function bo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Ft.updateQueue,e===null?(e={lastEffect:null,stores:null},Ft.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function ix(){return ii().memoizedState}function tc(t,e,n,i){var r=Ti();Ft.flags|=t,r.memoizedState=bo(1|e,n,void 0,i===void 0?null:i)}function eu(t,e,n,i){var r=ii();i=i===void 0?null:i;var s=void 0;if(Xt!==null){var a=Xt.memoizedState;if(s=a.destroy,i!==null&&rp(i,a.deps)){r.memoizedState=bo(e,n,s,i);return}}Ft.flags|=t,r.memoizedState=bo(1|e,n,s,i)}function qm(t,e){return tc(8390656,8,t,e)}function op(t,e){return eu(2048,8,t,e)}function rx(t,e){return eu(4,2,t,e)}function sx(t,e){return eu(4,4,t,e)}function ax(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ox(t,e,n){return n=n!=null?n.concat([t]):null,eu(4,4,ax.bind(null,e,t),n)}function lp(){}function lx(t,e){var n=ii();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&rp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function cx(t,e){var n=ii();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&rp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function ux(t,e,n){return ls&21?(xi(n,e)||(n=mv(),Ft.lanes|=n,cs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Pn=!0),t.memoizedState=n)}function JS(t,e){var n=wt;wt=n!==0&&4>n?n:4,t(!0);var i=Ku.transition;Ku.transition={};try{t(!1),e()}finally{wt=n,Ku.transition=i}}function dx(){return ii().memoizedState}function QS(t,e,n){var i=Nr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},hx(t))fx(e,n);else if(n=Yv(t,e,n,i),n!==null){var r=_n();gi(n,t,i,r),px(n,e,i)}}function e1(t,e,n){var i=Nr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(hx(t))fx(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,xi(o,a)){var l=e.interleaved;l===null?(r.next=r,Qf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Yv(t,e,r,i),n!==null&&(r=_n(),gi(n,t,i,r),px(n,e,i))}}function hx(t){var e=t.alternate;return t===Ft||e!==null&&e===Ft}function fx(t,e){eo=Pc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function px(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,zf(t,n)}}var Nc={readContext:ni,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useInsertionEffect:ln,useLayoutEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useMutableSource:ln,useSyncExternalStore:ln,useId:ln,unstable_isNewReconciler:!1},t1={readContext:ni,useCallback:function(t,e){return Ti().memoizedState=[t,e===void 0?null:e],t},useContext:ni,useEffect:qm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,tc(4194308,4,ax.bind(null,e,t),n)},useLayoutEffect:function(t,e){return tc(4194308,4,t,e)},useInsertionEffect:function(t,e){return tc(4,2,t,e)},useMemo:function(t,e){var n=Ti();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Ti();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=QS.bind(null,Ft,t),[i.memoizedState,t]},useRef:function(t){var e=Ti();return t={current:t},e.memoizedState=t},useState:$m,useDebugValue:lp,useDeferredValue:function(t){return Ti().memoizedState=t},useTransition:function(){var t=$m(!1),e=t[0];return t=JS.bind(null,t[1]),Ti().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Ft,r=Ti();if(Lt){if(n===void 0)throw Error(ce(407));n=n()}else{if(n=e(),en===null)throw Error(ce(349));ls&30||Jv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,qm(ex.bind(null,i,s,t),[t]),i.flags|=2048,bo(9,Qv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Ti(),e=en.identifierPrefix;if(Lt){var n=Zi,i=Ki;n=(i&~(1<<32-mi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Eo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ZS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},n1={readContext:ni,useCallback:lx,useContext:ni,useEffect:op,useImperativeHandle:ox,useInsertionEffect:rx,useLayoutEffect:sx,useMemo:cx,useReducer:Zu,useRef:ix,useState:function(){return Zu(wo)},useDebugValue:lp,useDeferredValue:function(t){var e=ii();return ux(e,Xt.memoizedState,t)},useTransition:function(){var t=Zu(wo)[0],e=ii().memoizedState;return[t,e]},useMutableSource:Kv,useSyncExternalStore:Zv,useId:dx,unstable_isNewReconciler:!1},i1={readContext:ni,useCallback:lx,useContext:ni,useEffect:op,useImperativeHandle:ox,useInsertionEffect:rx,useLayoutEffect:sx,useMemo:cx,useReducer:Ju,useRef:ix,useState:function(){return Ju(wo)},useDebugValue:lp,useDeferredValue:function(t){var e=ii();return Xt===null?e.memoizedState=t:ux(e,Xt.memoizedState,t)},useTransition:function(){var t=Ju(wo)[0],e=ii().memoizedState;return[t,e]},useMutableSource:Kv,useSyncExternalStore:Zv,useId:dx,unstable_isNewReconciler:!1};function ui(t,e){if(t&&t.defaultProps){e=kt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function xh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:kt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var tu={isMounted:function(t){return(t=t._reactInternals)?gs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=_n(),r=Nr(t),s=Qi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Rr(t,s,r),e!==null&&(gi(e,t,r,i),Ql(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=_n(),r=Nr(t),s=Qi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Rr(t,s,r),e!==null&&(gi(e,t,r,i),Ql(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=_n(),i=Nr(t),r=Qi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Rr(t,r,i),e!==null&&(gi(e,t,i,n),Ql(e,t,i))}};function Km(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!vo(n,i)||!vo(r,s):!0}function mx(t,e,n){var i=!1,r=Ur,s=e.contextType;return typeof s=="object"&&s!==null?s=ni(s):(r=Dn(e)?as:pn.current,i=e.contextTypes,s=(i=i!=null)?la(t,r):Ur),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=tu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Zm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&tu.enqueueReplaceState(e,e.state,null)}function _h(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},ep(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ni(s):(s=Dn(e)?as:pn.current,r.context=la(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(xh(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&tu.enqueueReplaceState(r,r.state,null),Cc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ha(t,e){try{var n="",i=e;do n+=Ny(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Qu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function yh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var r1=typeof WeakMap=="function"?WeakMap:Map;function gx(t,e,n){n=Qi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Lc||(Lc=!0,Ph=i),yh(t,e)},n}function vx(t,e,n){n=Qi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){yh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){yh(t,e),typeof i!="function"&&(Pr===null?Pr=new Set([this]):Pr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Jm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new r1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=x1.bind(null,t,e,n),e.then(t,t))}function Qm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function e0(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Qi(-1,1),e.tag=2,Rr(n,e,1))),n.lanes|=1),t)}var s1=or.ReactCurrentOwner,Pn=!1;function vn(t,e,n,i){e.child=t===null?Xv(e,null,n,i):ua(e,t.child,n,i)}function t0(t,e,n,i,r){n=n.render;var s=e.ref;return na(e,r),i=sp(t,e,n,i,s,r),n=ap(),t!==null&&!Pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,sr(t,e,r)):(Lt&&n&&Yf(e),e.flags|=1,vn(t,e,i,r),e.child)}function n0(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!gp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,xx(t,e,s,i,r)):(t=sc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:vo,n(a,i)&&t.ref===e.ref)return sr(t,e,r)}return e.flags|=1,t=Dr(s,i),t.ref=e.ref,t.return=e,e.child=t}function xx(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(vo(s,i)&&t.ref===e.ref)if(Pn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Pn=!0);else return e.lanes=t.lanes,sr(t,e,r)}return Sh(t,e,n,i,r)}function _x(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},At($s,Fn),Fn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,At($s,Fn),Fn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,At($s,Fn),Fn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,At($s,Fn),Fn|=i;return vn(t,e,r,n),e.child}function yx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Sh(t,e,n,i,r){var s=Dn(n)?as:pn.current;return s=la(e,s),na(e,r),n=sp(t,e,n,i,s,r),i=ap(),t!==null&&!Pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,sr(t,e,r)):(Lt&&i&&Yf(e),e.flags|=1,vn(t,e,n,r),e.child)}function i0(t,e,n,i,r){if(Dn(n)){var s=!0;Ec(e)}else s=!1;if(na(e,r),e.stateNode===null)nc(t,e),mx(e,n,i),_h(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=ni(c):(c=Dn(n)?as:pn.current,c=la(e,c));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Zm(e,a,i,c),_r=!1;var d=e.memoizedState;a.state=d,Cc(e,i,a,r),l=e.memoizedState,o!==i||d!==l||Nn.current||_r?(typeof f=="function"&&(xh(e,n,f,i),l=e.memoizedState),(o=_r||Km(e,n,o,i,d,l,c))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,$v(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:ui(e.type,o),a.props=c,p=e.pendingProps,d=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=ni(l):(l=Dn(n)?as:pn.current,l=la(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==p||d!==l)&&Zm(e,a,i,l),_r=!1,d=e.memoizedState,a.state=d,Cc(e,i,a,r);var g=e.memoizedState;o!==p||d!==g||Nn.current||_r?(typeof m=="function"&&(xh(e,n,m,i),g=e.memoizedState),(c=_r||Km(e,n,c,i,d,g,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,g,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,g,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),a.props=i,a.state=g,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Mh(t,e,n,i,s,r)}function Mh(t,e,n,i,r,s){yx(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Gm(e,n,!1),sr(t,e,s);i=e.stateNode,s1.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=ua(e,t.child,null,s),e.child=ua(e,null,o,s)):vn(t,e,o,s),e.memoizedState=i.state,r&&Gm(e,n,!0),e.child}function Sx(t){var e=t.stateNode;e.pendingContext?Hm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Hm(t,e.context,!1),tp(t,e.containerInfo)}function r0(t,e,n,i,r){return ca(),qf(r),e.flags|=256,vn(t,e,n,i),e.child}var Eh={dehydrated:null,treeContext:null,retryLane:0};function wh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Mx(t,e,n){var i=e.pendingProps,r=Ut.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),At(Ut,r&1),t===null)return gh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=ru(a,i,0,null),t=ss(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=wh(n),e.memoizedState=Eh,t):cp(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return a1(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Dr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Dr(o,s):(s=ss(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?wh(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Eh,i}return s=t.child,t=s.sibling,i=Dr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function cp(t,e){return e=ru({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function vl(t,e,n,i){return i!==null&&qf(i),ua(e,t.child,null,n),t=cp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function a1(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Qu(Error(ce(422))),vl(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ru({mode:"visible",children:i.children},r,0,null),s=ss(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ua(e,t.child,null,a),e.child.memoizedState=wh(a),e.memoizedState=Eh,s);if(!(e.mode&1))return vl(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ce(419)),i=Qu(s,i,void 0),vl(t,e,a,i)}if(o=(a&t.childLanes)!==0,Pn||o){if(i=en,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,rr(t,r),gi(i,t,r,-1))}return mp(),i=Qu(Error(ce(421))),vl(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=_1.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Bn=Cr(r.nextSibling),Hn=e,Lt=!0,hi=null,t!==null&&(Jn[Qn++]=Ki,Jn[Qn++]=Zi,Jn[Qn++]=os,Ki=t.id,Zi=t.overflow,os=e),e=cp(e,i.children),e.flags|=4096,e)}function s0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),vh(t.return,e,n)}function ed(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Ex(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(vn(t,e,i.children,n),i=Ut.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&s0(t,n,e);else if(t.tag===19)s0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(At(Ut,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Rc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),ed(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Rc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}ed(e,!0,n,null,s);break;case"together":ed(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function nc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function sr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),cs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ce(153));if(e.child!==null){for(t=e.child,n=Dr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Dr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function o1(t,e,n){switch(e.tag){case 3:Sx(e),ca();break;case 5:qv(e);break;case 1:Dn(e.type)&&Ec(e);break;case 4:tp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;At(Tc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(At(Ut,Ut.current&1),e.flags|=128,null):n&e.child.childLanes?Mx(t,e,n):(At(Ut,Ut.current&1),t=sr(t,e,n),t!==null?t.sibling:null);At(Ut,Ut.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Ex(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),At(Ut,Ut.current),i)break;return null;case 22:case 23:return e.lanes=0,_x(t,e,n)}return sr(t,e,n)}var wx,bh,bx,Tx;wx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bh=function(){};bx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,es(Li.current);var s=null;switch(n){case"input":r=Yd(t,r),i=Yd(t,i),s=[];break;case"select":r=kt({},r,{value:void 0}),i=kt({},i,{value:void 0}),s=[];break;case"textarea":r=Kd(t,r),i=Kd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Sc)}Jd(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(co.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(co.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Pt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Tx=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ia(t,e){if(!Lt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function cn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function l1(t,e,n){var i=e.pendingProps;switch($f(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cn(e),null;case 1:return Dn(e.type)&&Mc(),cn(e),null;case 3:return i=e.stateNode,da(),Nt(Nn),Nt(pn),ip(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ml(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,hi!==null&&(Lh(hi),hi=null))),bh(t,e),cn(e),null;case 5:np(e);var r=es(Mo.current);if(n=e.type,t!==null&&e.stateNode!=null)bx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ce(166));return cn(e),null}if(t=es(Li.current),ml(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Ci]=e,i[yo]=s,t=(e.mode&1)!==0,n){case"dialog":Pt("cancel",i),Pt("close",i);break;case"iframe":case"object":case"embed":Pt("load",i);break;case"video":case"audio":for(r=0;r<Xa.length;r++)Pt(Xa[r],i);break;case"source":Pt("error",i);break;case"img":case"image":case"link":Pt("error",i),Pt("load",i);break;case"details":Pt("toggle",i);break;case"input":pm(i,s),Pt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Pt("invalid",i);break;case"textarea":gm(i,s),Pt("invalid",i)}Jd(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&pl(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&pl(i.textContent,o,t),r=["children",""+o]):co.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&Pt("scroll",i)}switch(n){case"input":al(i),mm(i,s,!0);break;case"textarea":al(i),vm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Sc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ev(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Ci]=e,t[yo]=i,wx(t,e,!1,!1),e.stateNode=t;e:{switch(a=Qd(n,i),n){case"dialog":Pt("cancel",t),Pt("close",t),r=i;break;case"iframe":case"object":case"embed":Pt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Xa.length;r++)Pt(Xa[r],t);r=i;break;case"source":Pt("error",t),r=i;break;case"img":case"image":case"link":Pt("error",t),Pt("load",t),r=i;break;case"details":Pt("toggle",t),r=i;break;case"input":pm(t,i),r=Yd(t,i),Pt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=kt({},i,{value:void 0}),Pt("invalid",t);break;case"textarea":gm(t,i),r=Kd(t,i),Pt("invalid",t);break;default:r=i}Jd(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?iv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&tv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&uo(t,l):typeof l=="number"&&uo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(co.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Pt("scroll",t):l!=null&&Lf(t,s,l,a))}switch(n){case"input":al(t),mm(t,i,!1);break;case"textarea":al(t),vm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ir(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Js(t,!!i.multiple,s,!1):i.defaultValue!=null&&Js(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Sc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return cn(e),null;case 6:if(t&&e.stateNode!=null)Tx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ce(166));if(n=es(Mo.current),es(Li.current),ml(e)){if(i=e.stateNode,n=e.memoizedProps,i[Ci]=e,(s=i.nodeValue!==n)&&(t=Hn,t!==null))switch(t.tag){case 3:pl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&pl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ci]=e,e.stateNode=i}return cn(e),null;case 13:if(Nt(Ut),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Lt&&Bn!==null&&e.mode&1&&!(e.flags&128))Wv(),ca(),e.flags|=98560,s=!1;else if(s=ml(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ce(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ce(317));s[Ci]=e}else ca(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;cn(e),s=!1}else hi!==null&&(Lh(hi),hi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Ut.current&1?Yt===0&&(Yt=3):mp())),e.updateQueue!==null&&(e.flags|=4),cn(e),null);case 4:return da(),bh(t,e),t===null&&xo(e.stateNode.containerInfo),cn(e),null;case 10:return Jf(e.type._context),cn(e),null;case 17:return Dn(e.type)&&Mc(),cn(e),null;case 19:if(Nt(Ut),s=e.memoizedState,s===null)return cn(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Ia(s,!1);else{if(Yt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Rc(t),a!==null){for(e.flags|=128,Ia(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return At(Ut,Ut.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ht()>fa&&(e.flags|=128,i=!0,Ia(s,!1),e.lanes=4194304)}else{if(!i)if(t=Rc(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ia(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!Lt)return cn(e),null}else 2*Ht()-s.renderingStartTime>fa&&n!==1073741824&&(e.flags|=128,i=!0,Ia(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ht(),e.sibling=null,n=Ut.current,At(Ut,i?n&1|2:n&1),e):(cn(e),null);case 22:case 23:return pp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Fn&1073741824&&(cn(e),e.subtreeFlags&6&&(e.flags|=8192)):cn(e),null;case 24:return null;case 25:return null}throw Error(ce(156,e.tag))}function c1(t,e){switch($f(e),e.tag){case 1:return Dn(e.type)&&Mc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return da(),Nt(Nn),Nt(pn),ip(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return np(e),null;case 13:if(Nt(Ut),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ce(340));ca()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Nt(Ut),null;case 4:return da(),null;case 10:return Jf(e.type._context),null;case 22:case 23:return pp(),null;case 24:return null;default:return null}}var xl=!1,hn=!1,u1=typeof WeakSet=="function"?WeakSet:Set,Re=null;function Ys(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Bt(t,e,i)}else n.current=null}function Th(t,e,n){try{n()}catch(i){Bt(t,e,i)}}var a0=!1;function d1(t,e){if(ch=xc,t=Nv(),Xf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,f=0,p=t,d=null;t:for(;;){for(var m;p!==n||r!==0&&p.nodeType!==3||(o=a+r),p!==s||i!==0&&p.nodeType!==3||(l=a+i),p.nodeType===3&&(a+=p.nodeValue.length),(m=p.firstChild)!==null;)d=p,p=m;for(;;){if(p===t)break t;if(d===n&&++c===r&&(o=a),d===s&&++f===i&&(l=a),(m=p.nextSibling)!==null)break;p=d,d=p.parentNode}p=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(uh={focusedElem:t,selectionRange:n},xc=!1,Re=e;Re!==null;)if(e=Re,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Re=t;else for(;Re!==null;){e=Re;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var S=g.memoizedProps,v=g.memoizedState,h=e.stateNode,_=h.getSnapshotBeforeUpdate(e.elementType===e.type?S:ui(e.type,S),v);h.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var E=e.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ce(163))}}catch(M){Bt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Re=t;break}Re=e.return}return g=a0,a0=!1,g}function to(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Th(e,n,s)}r=r.next}while(r!==i)}}function nu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Ah(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ax(t){var e=t.alternate;e!==null&&(t.alternate=null,Ax(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ci],delete e[yo],delete e[fh],delete e[YS],delete e[$S])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Cx(t){return t.tag===5||t.tag===3||t.tag===4}function o0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Cx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ch(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Sc));else if(i!==4&&(t=t.child,t!==null))for(Ch(t,e,n),t=t.sibling;t!==null;)Ch(t,e,n),t=t.sibling}function Rh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Rh(t,e,n),t=t.sibling;t!==null;)Rh(t,e,n),t=t.sibling}var rn=null,di=!1;function hr(t,e,n){for(n=n.child;n!==null;)Rx(t,e,n),n=n.sibling}function Rx(t,e,n){if(Di&&typeof Di.onCommitFiberUnmount=="function")try{Di.onCommitFiberUnmount($c,n)}catch{}switch(n.tag){case 5:hn||Ys(n,e);case 6:var i=rn,r=di;rn=null,hr(t,e,n),rn=i,di=r,rn!==null&&(di?(t=rn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):rn.removeChild(n.stateNode));break;case 18:rn!==null&&(di?(t=rn,n=n.stateNode,t.nodeType===8?Yu(t.parentNode,n):t.nodeType===1&&Yu(t,n),mo(t)):Yu(rn,n.stateNode));break;case 4:i=rn,r=di,rn=n.stateNode.containerInfo,di=!0,hr(t,e,n),rn=i,di=r;break;case 0:case 11:case 14:case 15:if(!hn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Th(n,e,a),r=r.next}while(r!==i)}hr(t,e,n);break;case 1:if(!hn&&(Ys(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Bt(n,e,o)}hr(t,e,n);break;case 21:hr(t,e,n);break;case 22:n.mode&1?(hn=(i=hn)||n.memoizedState!==null,hr(t,e,n),hn=i):hr(t,e,n);break;default:hr(t,e,n)}}function l0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new u1),e.forEach(function(i){var r=y1.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function si(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:rn=o.stateNode,di=!1;break e;case 3:rn=o.stateNode.containerInfo,di=!0;break e;case 4:rn=o.stateNode.containerInfo,di=!0;break e}o=o.return}if(rn===null)throw Error(ce(160));Rx(s,a,r),rn=null,di=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Bt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Px(e,t),e=e.sibling}function Px(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(si(e,t),Ei(t),i&4){try{to(3,t,t.return),nu(3,t)}catch(S){Bt(t,t.return,S)}try{to(5,t,t.return)}catch(S){Bt(t,t.return,S)}}break;case 1:si(e,t),Ei(t),i&512&&n!==null&&Ys(n,n.return);break;case 5:if(si(e,t),Ei(t),i&512&&n!==null&&Ys(n,n.return),t.flags&32){var r=t.stateNode;try{uo(r,"")}catch(S){Bt(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Jg(r,s),Qd(o,a);var c=Qd(o,s);for(a=0;a<l.length;a+=2){var f=l[a],p=l[a+1];f==="style"?iv(r,p):f==="dangerouslySetInnerHTML"?tv(r,p):f==="children"?uo(r,p):Lf(r,f,p,c)}switch(o){case"input":$d(r,s);break;case"textarea":Qg(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Js(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?Js(r,!!s.multiple,s.defaultValue,!0):Js(r,!!s.multiple,s.multiple?[]:"",!1))}r[yo]=s}catch(S){Bt(t,t.return,S)}}break;case 6:if(si(e,t),Ei(t),i&4){if(t.stateNode===null)throw Error(ce(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){Bt(t,t.return,S)}}break;case 3:if(si(e,t),Ei(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{mo(e.containerInfo)}catch(S){Bt(t,t.return,S)}break;case 4:si(e,t),Ei(t);break;case 13:si(e,t),Ei(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(hp=Ht())),i&4&&l0(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(hn=(c=hn)||f,si(e,t),hn=c):si(e,t),Ei(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Re=t,f=t.child;f!==null;){for(p=Re=f;Re!==null;){switch(d=Re,m=d.child,d.tag){case 0:case 11:case 14:case 15:to(4,d,d.return);break;case 1:Ys(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(S){Bt(i,n,S)}}break;case 5:Ys(d,d.return);break;case 22:if(d.memoizedState!==null){u0(p);continue}}m!==null?(m.return=d,Re=m):u0(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{r=p.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=p.stateNode,l=p.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=nv("display",a))}catch(S){Bt(t,t.return,S)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(S){Bt(t,t.return,S)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:si(e,t),Ei(t),i&4&&l0(t);break;case 21:break;default:si(e,t),Ei(t)}}function Ei(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Cx(n)){var i=n;break e}n=n.return}throw Error(ce(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(uo(r,""),i.flags&=-33);var s=o0(t);Rh(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=o0(t);Ch(t,o,a);break;default:throw Error(ce(161))}}catch(l){Bt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function h1(t,e,n){Re=t,Nx(t)}function Nx(t,e,n){for(var i=(t.mode&1)!==0;Re!==null;){var r=Re,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||xl;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||hn;o=xl;var c=hn;if(xl=a,(hn=l)&&!c)for(Re=r;Re!==null;)a=Re,l=a.child,a.tag===22&&a.memoizedState!==null?d0(r):l!==null?(l.return=a,Re=l):d0(r);for(;s!==null;)Re=s,Nx(s),s=s.sibling;Re=r,xl=o,hn=c}c0(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Re=s):c0(t)}}function c0(t){for(;Re!==null;){var e=Re;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:hn||nu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!hn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ui(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ym(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ym(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&mo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ce(163))}hn||e.flags&512&&Ah(e)}catch(d){Bt(e,e.return,d)}}if(e===t){Re=null;break}if(n=e.sibling,n!==null){n.return=e.return,Re=n;break}Re=e.return}}function u0(t){for(;Re!==null;){var e=Re;if(e===t){Re=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Re=n;break}Re=e.return}}function d0(t){for(;Re!==null;){var e=Re;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{nu(4,e)}catch(l){Bt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Bt(e,r,l)}}var s=e.return;try{Ah(e)}catch(l){Bt(e,s,l)}break;case 5:var a=e.return;try{Ah(e)}catch(l){Bt(e,a,l)}}}catch(l){Bt(e,e.return,l)}if(e===t){Re=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Re=o;break}Re=e.return}}var f1=Math.ceil,Dc=or.ReactCurrentDispatcher,up=or.ReactCurrentOwner,ti=or.ReactCurrentBatchConfig,ht=0,en=null,Vt=null,an=0,Fn=0,$s=zr(0),Yt=0,To=null,cs=0,iu=0,dp=0,no=null,Rn=null,hp=0,fa=1/0,Xi=null,Lc=!1,Ph=null,Pr=null,_l=!1,wr=null,Ic=0,io=0,Nh=null,ic=-1,rc=0;function _n(){return ht&6?Ht():ic!==-1?ic:ic=Ht()}function Nr(t){return t.mode&1?ht&2&&an!==0?an&-an:KS.transition!==null?(rc===0&&(rc=mv()),rc):(t=wt,t!==0||(t=window.event,t=t===void 0?16:Mv(t.type)),t):1}function gi(t,e,n,i){if(50<io)throw io=0,Nh=null,Error(ce(185));Io(t,n,i),(!(ht&2)||t!==en)&&(t===en&&(!(ht&2)&&(iu|=n),Yt===4&&Sr(t,an)),Ln(t,i),n===1&&ht===0&&!(e.mode&1)&&(fa=Ht()+500,Qc&&Br()))}function Ln(t,e){var n=t.callbackNode;Ky(t,e);var i=vc(t,t===en?an:0);if(i===0)n!==null&&ym(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&ym(n),e===1)t.tag===0?qS(h0.bind(null,t)):Hv(h0.bind(null,t)),jS(function(){!(ht&6)&&Br()}),n=null;else{switch(gv(i)){case 1:n=kf;break;case 4:n=fv;break;case 16:n=gc;break;case 536870912:n=pv;break;default:n=gc}n=zx(n,Dx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Dx(t,e){if(ic=-1,rc=0,ht&6)throw Error(ce(327));var n=t.callbackNode;if(ia()&&t.callbackNode!==n)return null;var i=vc(t,t===en?an:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Uc(t,i);else{e=i;var r=ht;ht|=2;var s=Ix();(en!==t||an!==e)&&(Xi=null,fa=Ht()+500,rs(t,e));do try{g1();break}catch(o){Lx(t,o)}while(!0);Zf(),Dc.current=s,ht=r,Vt!==null?e=0:(en=null,an=0,e=Yt)}if(e!==0){if(e===2&&(r=rh(t),r!==0&&(i=r,e=Dh(t,r))),e===1)throw n=To,rs(t,0),Sr(t,i),Ln(t,Ht()),n;if(e===6)Sr(t,i);else{if(r=t.current.alternate,!(i&30)&&!p1(r)&&(e=Uc(t,i),e===2&&(s=rh(t),s!==0&&(i=s,e=Dh(t,s))),e===1))throw n=To,rs(t,0),Sr(t,i),Ln(t,Ht()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ce(345));case 2:Kr(t,Rn,Xi);break;case 3:if(Sr(t,i),(i&130023424)===i&&(e=hp+500-Ht(),10<e)){if(vc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){_n(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=hh(Kr.bind(null,t,Rn,Xi),e);break}Kr(t,Rn,Xi);break;case 4:if(Sr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-mi(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Ht()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*f1(i/1960))-i,10<i){t.timeoutHandle=hh(Kr.bind(null,t,Rn,Xi),i);break}Kr(t,Rn,Xi);break;case 5:Kr(t,Rn,Xi);break;default:throw Error(ce(329))}}}return Ln(t,Ht()),t.callbackNode===n?Dx.bind(null,t):null}function Dh(t,e){var n=no;return t.current.memoizedState.isDehydrated&&(rs(t,e).flags|=256),t=Uc(t,e),t!==2&&(e=Rn,Rn=n,e!==null&&Lh(e)),t}function Lh(t){Rn===null?Rn=t:Rn.push.apply(Rn,t)}function p1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!xi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Sr(t,e){for(e&=~dp,e&=~iu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-mi(e),i=1<<n;t[n]=-1,e&=~i}}function h0(t){if(ht&6)throw Error(ce(327));ia();var e=vc(t,0);if(!(e&1))return Ln(t,Ht()),null;var n=Uc(t,e);if(t.tag!==0&&n===2){var i=rh(t);i!==0&&(e=i,n=Dh(t,i))}if(n===1)throw n=To,rs(t,0),Sr(t,e),Ln(t,Ht()),n;if(n===6)throw Error(ce(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Kr(t,Rn,Xi),Ln(t,Ht()),null}function fp(t,e){var n=ht;ht|=1;try{return t(e)}finally{ht=n,ht===0&&(fa=Ht()+500,Qc&&Br())}}function us(t){wr!==null&&wr.tag===0&&!(ht&6)&&ia();var e=ht;ht|=1;var n=ti.transition,i=wt;try{if(ti.transition=null,wt=1,t)return t()}finally{wt=i,ti.transition=n,ht=e,!(ht&6)&&Br()}}function pp(){Fn=$s.current,Nt($s)}function rs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,WS(n)),Vt!==null)for(n=Vt.return;n!==null;){var i=n;switch($f(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Mc();break;case 3:da(),Nt(Nn),Nt(pn),ip();break;case 5:np(i);break;case 4:da();break;case 13:Nt(Ut);break;case 19:Nt(Ut);break;case 10:Jf(i.type._context);break;case 22:case 23:pp()}n=n.return}if(en=t,Vt=t=Dr(t.current,null),an=Fn=e,Yt=0,To=null,dp=iu=cs=0,Rn=no=null,Qr!==null){for(e=0;e<Qr.length;e++)if(n=Qr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Qr=null}return t}function Lx(t,e){do{var n=Vt;try{if(Zf(),ec.current=Nc,Pc){for(var i=Ft.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Pc=!1}if(ls=0,Qt=Xt=Ft=null,eo=!1,Eo=0,up.current=null,n===null||n.return===null){Yt=1,To=e,Vt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=an,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=o,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=Qm(a);if(m!==null){m.flags&=-257,e0(m,a,o,s,e),m.mode&1&&Jm(s,c,e),e=m,l=c;var g=e.updateQueue;if(g===null){var S=new Set;S.add(l),e.updateQueue=S}else g.add(l);break e}else{if(!(e&1)){Jm(s,c,e),mp();break e}l=Error(ce(426))}}else if(Lt&&o.mode&1){var v=Qm(a);if(v!==null){!(v.flags&65536)&&(v.flags|=256),e0(v,a,o,s,e),qf(ha(l,o));break e}}s=l=ha(l,o),Yt!==4&&(Yt=2),no===null?no=[s]:no.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=gx(s,l,e);Xm(s,h);break e;case 1:o=l;var _=s.type,E=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(Pr===null||!Pr.has(E)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=vx(s,o,e);Xm(s,M);break e}}s=s.return}while(s!==null)}Ox(n)}catch(b){e=b,Vt===n&&n!==null&&(Vt=n=n.return);continue}break}while(!0)}function Ix(){var t=Dc.current;return Dc.current=Nc,t===null?Nc:t}function mp(){(Yt===0||Yt===3||Yt===2)&&(Yt=4),en===null||!(cs&268435455)&&!(iu&268435455)||Sr(en,an)}function Uc(t,e){var n=ht;ht|=2;var i=Ix();(en!==t||an!==e)&&(Xi=null,rs(t,e));do try{m1();break}catch(r){Lx(t,r)}while(!0);if(Zf(),ht=n,Dc.current=i,Vt!==null)throw Error(ce(261));return en=null,an=0,Yt}function m1(){for(;Vt!==null;)Ux(Vt)}function g1(){for(;Vt!==null&&!Hy();)Ux(Vt)}function Ux(t){var e=kx(t.alternate,t,Fn);t.memoizedProps=t.pendingProps,e===null?Ox(t):Vt=e,up.current=null}function Ox(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=c1(n,e),n!==null){n.flags&=32767,Vt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Yt=6,Vt=null;return}}else if(n=l1(n,e,Fn),n!==null){Vt=n;return}if(e=e.sibling,e!==null){Vt=e;return}Vt=e=t}while(e!==null);Yt===0&&(Yt=5)}function Kr(t,e,n){var i=wt,r=ti.transition;try{ti.transition=null,wt=1,v1(t,e,n,i)}finally{ti.transition=r,wt=i}return null}function v1(t,e,n,i){do ia();while(wr!==null);if(ht&6)throw Error(ce(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ce(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Zy(t,s),t===en&&(Vt=en=null,an=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_l||(_l=!0,zx(gc,function(){return ia(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ti.transition,ti.transition=null;var a=wt;wt=1;var o=ht;ht|=4,up.current=null,d1(t,n),Px(n,t),FS(uh),xc=!!ch,uh=ch=null,t.current=n,h1(n),Gy(),ht=o,wt=a,ti.transition=s}else t.current=n;if(_l&&(_l=!1,wr=t,Ic=r),s=t.pendingLanes,s===0&&(Pr=null),jy(n.stateNode),Ln(t,Ht()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Lc)throw Lc=!1,t=Ph,Ph=null,t;return Ic&1&&t.tag!==0&&ia(),s=t.pendingLanes,s&1?t===Nh?io++:(io=0,Nh=t):io=0,Br(),null}function ia(){if(wr!==null){var t=gv(Ic),e=ti.transition,n=wt;try{if(ti.transition=null,wt=16>t?16:t,wr===null)var i=!1;else{if(t=wr,wr=null,Ic=0,ht&6)throw Error(ce(331));var r=ht;for(ht|=4,Re=t.current;Re!==null;){var s=Re,a=s.child;if(Re.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Re=c;Re!==null;){var f=Re;switch(f.tag){case 0:case 11:case 15:to(8,f,s)}var p=f.child;if(p!==null)p.return=f,Re=p;else for(;Re!==null;){f=Re;var d=f.sibling,m=f.return;if(Ax(f),f===c){Re=null;break}if(d!==null){d.return=m,Re=d;break}Re=m}}}var g=s.alternate;if(g!==null){var S=g.child;if(S!==null){g.child=null;do{var v=S.sibling;S.sibling=null,S=v}while(S!==null)}}Re=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Re=a;else e:for(;Re!==null;){if(s=Re,s.flags&2048)switch(s.tag){case 0:case 11:case 15:to(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Re=h;break e}Re=s.return}}var _=t.current;for(Re=_;Re!==null;){a=Re;var E=a.child;if(a.subtreeFlags&2064&&E!==null)E.return=a,Re=E;else e:for(a=_;Re!==null;){if(o=Re,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:nu(9,o)}}catch(b){Bt(o,o.return,b)}if(o===a){Re=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,Re=M;break e}Re=o.return}}if(ht=r,Br(),Di&&typeof Di.onPostCommitFiberRoot=="function")try{Di.onPostCommitFiberRoot($c,t)}catch{}i=!0}return i}finally{wt=n,ti.transition=e}}return!1}function f0(t,e,n){e=ha(n,e),e=gx(t,e,1),t=Rr(t,e,1),e=_n(),t!==null&&(Io(t,1,e),Ln(t,e))}function Bt(t,e,n){if(t.tag===3)f0(t,t,n);else for(;e!==null;){if(e.tag===3){f0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Pr===null||!Pr.has(i))){t=ha(n,t),t=vx(e,t,1),e=Rr(e,t,1),t=_n(),e!==null&&(Io(e,1,t),Ln(e,t));break}}e=e.return}}function x1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=_n(),t.pingedLanes|=t.suspendedLanes&n,en===t&&(an&n)===n&&(Yt===4||Yt===3&&(an&130023424)===an&&500>Ht()-hp?rs(t,0):dp|=n),Ln(t,e)}function Fx(t,e){e===0&&(t.mode&1?(e=cl,cl<<=1,!(cl&130023424)&&(cl=4194304)):e=1);var n=_n();t=rr(t,e),t!==null&&(Io(t,e,n),Ln(t,n))}function _1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Fx(t,n)}function y1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ce(314))}i!==null&&i.delete(e),Fx(t,n)}var kx;kx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Nn.current)Pn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Pn=!1,o1(t,e,n);Pn=!!(t.flags&131072)}else Pn=!1,Lt&&e.flags&1048576&&Gv(e,bc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;nc(t,e),t=e.pendingProps;var r=la(e,pn.current);na(e,n),r=sp(null,e,i,t,r,n);var s=ap();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Dn(i)?(s=!0,Ec(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,ep(e),r.updater=tu,e.stateNode=r,r._reactInternals=e,_h(e,i,t,n),e=Mh(null,e,i,!0,s,n)):(e.tag=0,Lt&&s&&Yf(e),vn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(nc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=M1(i),t=ui(i,t),r){case 0:e=Sh(null,e,i,t,n);break e;case 1:e=i0(null,e,i,t,n);break e;case 11:e=t0(null,e,i,t,n);break e;case 14:e=n0(null,e,i,ui(i.type,t),n);break e}throw Error(ce(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ui(i,r),Sh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ui(i,r),i0(t,e,i,r,n);case 3:e:{if(Sx(e),t===null)throw Error(ce(387));i=e.pendingProps,s=e.memoizedState,r=s.element,$v(t,e),Cc(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ha(Error(ce(423)),e),e=r0(t,e,i,n,r);break e}else if(i!==r){r=ha(Error(ce(424)),e),e=r0(t,e,i,n,r);break e}else for(Bn=Cr(e.stateNode.containerInfo.firstChild),Hn=e,Lt=!0,hi=null,n=Xv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ca(),i===r){e=sr(t,e,n);break e}vn(t,e,i,n)}e=e.child}return e;case 5:return qv(e),t===null&&gh(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,dh(i,r)?a=null:s!==null&&dh(i,s)&&(e.flags|=32),yx(t,e),vn(t,e,a,n),e.child;case 6:return t===null&&gh(e),null;case 13:return Mx(t,e,n);case 4:return tp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ua(e,null,i,n):vn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ui(i,r),t0(t,e,i,r,n);case 7:return vn(t,e,e.pendingProps,n),e.child;case 8:return vn(t,e,e.pendingProps.children,n),e.child;case 12:return vn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,At(Tc,i._currentValue),i._currentValue=a,s!==null)if(xi(s.value,a)){if(s.children===r.children&&!Nn.current){e=sr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Qi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),vh(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ce(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),vh(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}vn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,na(e,n),r=ni(r),i=i(r),e.flags|=1,vn(t,e,i,n),e.child;case 14:return i=e.type,r=ui(i,e.pendingProps),r=ui(i.type,r),n0(t,e,i,r,n);case 15:return xx(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ui(i,r),nc(t,e),e.tag=1,Dn(i)?(t=!0,Ec(e)):t=!1,na(e,n),mx(e,i,r),_h(e,i,r,n),Mh(null,e,i,!0,t,n);case 19:return Ex(t,e,n);case 22:return _x(t,e,n)}throw Error(ce(156,e.tag))};function zx(t,e){return hv(t,e)}function S1(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(t,e,n,i){return new S1(t,e,n,i)}function gp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function M1(t){if(typeof t=="function")return gp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Uf)return 11;if(t===Of)return 14}return 2}function Dr(t,e){var n=t.alternate;return n===null?(n=ei(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function sc(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")gp(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case ks:return ss(n.children,r,s,e);case If:a=8,r|=8;break;case Vd:return t=ei(12,n,e,r|2),t.elementType=Vd,t.lanes=s,t;case Wd:return t=ei(13,n,e,r),t.elementType=Wd,t.lanes=s,t;case jd:return t=ei(19,n,e,r),t.elementType=jd,t.lanes=s,t;case qg:return ru(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Yg:a=10;break e;case $g:a=9;break e;case Uf:a=11;break e;case Of:a=14;break e;case xr:a=16,i=null;break e}throw Error(ce(130,t==null?t:typeof t,""))}return e=ei(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function ss(t,e,n,i){return t=ei(7,t,i,e),t.lanes=n,t}function ru(t,e,n,i){return t=ei(22,t,i,e),t.elementType=qg,t.lanes=n,t.stateNode={isHidden:!1},t}function td(t,e,n){return t=ei(6,t,null,e),t.lanes=n,t}function nd(t,e,n){return e=ei(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function E1(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ou(0),this.expirationTimes=Ou(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ou(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function vp(t,e,n,i,r,s,a,o,l){return t=new E1(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ei(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ep(s),t}function w1(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Bx(t){if(!t)return Ur;t=t._reactInternals;e:{if(gs(t)!==t||t.tag!==1)throw Error(ce(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Dn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ce(171))}if(t.tag===1){var n=t.type;if(Dn(n))return Bv(t,n,e)}return e}function Hx(t,e,n,i,r,s,a,o,l){return t=vp(n,i,!0,t,r,s,a,o,l),t.context=Bx(null),n=t.current,i=_n(),r=Nr(n),s=Qi(i,r),s.callback=e??null,Rr(n,s,r),t.current.lanes=r,Io(t,r,i),Ln(t,i),t}function su(t,e,n,i){var r=e.current,s=_n(),a=Nr(r);return n=Bx(n),e.context===null?e.context=n:e.pendingContext=n,e=Qi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Rr(r,e,a),t!==null&&(gi(t,r,a,s),Ql(t,r,a)),a}function Oc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function p0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function xp(t,e){p0(t,e),(t=t.alternate)&&p0(t,e)}function b1(){return null}var Gx=typeof reportError=="function"?reportError:function(t){console.error(t)};function _p(t){this._internalRoot=t}au.prototype.render=_p.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ce(409));su(t,e,null,null)};au.prototype.unmount=_p.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;us(function(){su(null,t,null,null)}),e[ir]=null}};function au(t){this._internalRoot=t}au.prototype.unstable_scheduleHydration=function(t){if(t){var e=_v();t={blockedOn:null,target:t,priority:e};for(var n=0;n<yr.length&&e!==0&&e<yr[n].priority;n++);yr.splice(n,0,t),n===0&&Sv(t)}};function yp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ou(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function m0(){}function T1(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Oc(a);s.call(c)}}var a=Hx(e,i,t,0,null,!1,!1,"",m0);return t._reactRootContainer=a,t[ir]=a.current,xo(t.nodeType===8?t.parentNode:t),us(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Oc(l);o.call(c)}}var l=vp(t,0,!1,null,null,!1,!1,"",m0);return t._reactRootContainer=l,t[ir]=l.current,xo(t.nodeType===8?t.parentNode:t),us(function(){su(e,l,n,i)}),l}function lu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Oc(a);o.call(l)}}su(e,a,t,r)}else a=T1(n,e,t,r,i);return Oc(a)}vv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ja(e.pendingLanes);n!==0&&(zf(e,n|1),Ln(e,Ht()),!(ht&6)&&(fa=Ht()+500,Br()))}break;case 13:us(function(){var i=rr(t,1);if(i!==null){var r=_n();gi(i,t,1,r)}}),xp(t,1)}};Bf=function(t){if(t.tag===13){var e=rr(t,134217728);if(e!==null){var n=_n();gi(e,t,134217728,n)}xp(t,134217728)}};xv=function(t){if(t.tag===13){var e=Nr(t),n=rr(t,e);if(n!==null){var i=_n();gi(n,t,e,i)}xp(t,e)}};_v=function(){return wt};yv=function(t,e){var n=wt;try{return wt=t,e()}finally{wt=n}};th=function(t,e,n){switch(e){case"input":if($d(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Jc(i);if(!r)throw Error(ce(90));Zg(i),$d(i,r)}}}break;case"textarea":Qg(t,n);break;case"select":e=n.value,e!=null&&Js(t,!!n.multiple,e,!1)}};av=fp;ov=us;var A1={usingClientEntryPoint:!1,Events:[Oo,Gs,Jc,rv,sv,fp]},Ua={findFiberByHostInstance:Jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},C1={bundleType:Ua.bundleType,version:Ua.version,rendererPackageName:Ua.rendererPackageName,rendererConfig:Ua.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:or.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=uv(t),t===null?null:t.stateNode},findFiberByHostInstance:Ua.findFiberByHostInstance||b1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yl.isDisabled&&yl.supportsFiber)try{$c=yl.inject(C1),Di=yl}catch{}}Vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A1;Vn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yp(e))throw Error(ce(200));return w1(t,e,null,n)};Vn.createRoot=function(t,e){if(!yp(t))throw Error(ce(299));var n=!1,i="",r=Gx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=vp(t,1,!1,null,null,n,!1,i,r),t[ir]=e.current,xo(t.nodeType===8?t.parentNode:t),new _p(e)};Vn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ce(188)):(t=Object.keys(t).join(","),Error(ce(268,t)));return t=uv(e),t=t===null?null:t.stateNode,t};Vn.flushSync=function(t){return us(t)};Vn.hydrate=function(t,e,n){if(!ou(e))throw Error(ce(200));return lu(null,t,e,!0,n)};Vn.hydrateRoot=function(t,e,n){if(!yp(t))throw Error(ce(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Gx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Hx(e,null,t,1,n??null,r,!1,s,a),t[ir]=e.current,xo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new au(e)};Vn.render=function(t,e,n){if(!ou(e))throw Error(ce(200));return lu(null,t,e,!1,n)};Vn.unmountComponentAtNode=function(t){if(!ou(t))throw Error(ce(40));return t._reactRootContainer?(us(function(){lu(null,null,t,!1,function(){t._reactRootContainer=null,t[ir]=null})}),!0):!1};Vn.unstable_batchedUpdates=fp;Vn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!ou(n))throw Error(ce(200));if(t==null||t._reactInternals===void 0)throw Error(ce(38));return lu(t,e,n,!1,i)};Vn.version="18.3.1-next-f1338f8080-20240426";function Vx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vx)}catch(t){console.error(t)}}Vx(),Vg.exports=Vn;var R1=Vg.exports,g0=R1;Hd.createRoot=g0.createRoot,Hd.hydrateRoot=g0.hydrateRoot;const zt={WIFI:{DEFAULT_IP:"192.168.4.1",DEFAULT_PORT:80,WEBSOCKET_PORT:81,DEFAULT_HOSTNAME:"agriguard.local",AP_SSID:"AgriGuard-Robot",AP_PASSWORD:"agri12345password",CONNECT_TIMEOUT_MS:3e3,HEARTBEAT_INTERVAL_MS:1e3,WATCHDOG_TIMEOUT_MS:1500},BLE:{DEVICE_NAME:"AgriGuard-Robot",DEVICE_NAME_PREFIX:"AgriGuard",SERVICE_UUID:"12345678-1234-1234-1234-123456789abc",COMMAND_CHARACTERISTIC_UUID:"12345678-1234-1234-1234-123456789ab1",TELEMETRY_CHARACTERISTIC_UUID:"12345678-1234-1234-1234-123456789ab2",STATUS_CHARACTERISTIC_UUID:"12345678-1234-1234-1234-123456789ab3",RECONNECT_DELAY_MS:2e3},NPK_MODBUS:{SLAVE_ID:1,BAUD_RATE:9600,PARITY:"None (8N1)",STOP_BITS:1,START_REGISTER:30,REGISTER_COUNT:3,UNIT:"mg/kg"},SAFETY:{WATCHDOG_TIMEOUT_MS:1500,MAX_SPRAY_DURATION_MS:6e3,MIN_OBSTACLE_STOP_CM:25,WARNING_OBSTACLE_CM:60}};function qs(){return{mode:"REAL_HARDWARE",hardware_mode:"REAL_HARDWARE",data_source:"ESP32_PHYSICAL",esp32_connected:!1,operating_mode:"ROBOT: DISCONNECTED",robot_status:"ROBOT: DISCONNECTED",timestamp_ms:Date.now(),active_zone_id:"ZONE-R1C1",camera_status:{connected:!1,fps:0,device_index:0,resolution:"1280x720"},esp32_ping_ms:null,battery_voltage:void 0,battery_percentage:void 0,movement:"STOP",ultrasonic:{left:null,center:null,right:null,distance_cm:null,obstacle_detected:!1,obstacle_ahead:!1,obstacle_status:"OFFLINE",robot_status:"ROBOT: DISCONNECTED",status:"OFFLINE",valid:!1},soil_moisture:null,soil_moisture_status:"OFFLINE",dht22:{temperature:null,humidity:null,valid:!1},npk:{n:null,p:null,k:null,nitrogen_mg_kg:null,phosphorus_mg_kg:null,potassium_mg_kg:null,valid:!1,status:"OFFLINE"},mpu6050:{accel_x:null,accel_y:null,accel_z:null,gyro_x:null,gyro_y:null,gyro_z:null,pitch_deg:null,roll_deg:null,tilt_status:"OFFLINE",valid:!1},pump:{state:"OFF",relay:"OFF",spray_status:"OFFLINE"},relay:{state:"OFF"},actuators:{motor_state:"DISCONNECTED",motor_speed:0,pump_active:!1,valve_open:!1,flow_rate_ml_s:0,total_volume_ml:0},safety:{emergency_stop:!1,obstacle_detected:!1,watchdog_tripped:!1,hardware_errors:["Physical robot offline"]}}}class P1{constructor(e,n){ze(this,"name","Wi-Fi");ze(this,"_state","DISCONNECTED");ze(this,"_ip",zt.WIFI.DEFAULT_IP);ze(this,"_port",zt.WIFI.DEFAULT_PORT);ze(this,"_pingMs",null);ze(this,"_message","Disconnected");ze(this,"_reconnectTimer",null);ze(this,"_heartbeatTimer",null);ze(this,"_ws",null);ze(this,"_onTelemetry");ze(this,"_onStatusChange");this._onTelemetry=e,this._onStatusChange=n}setEndpoint(e,n=80){this._ip=e.trim(),this._port=n}isConnected(){return this._state==="CONNECTED"}getStatus(){return{state:this._state,transport:"Wi-Fi",mode:"REAL_HARDWARE",ip:this._ip,port:this._port,deviceName:zt.WIFI.AP_SSID,pingMs:this._pingMs,message:this._message}}_updateState(e,n,i){this._state=e,this._message=n,i!==void 0&&(this._pingMs=i),this._onStatusChange(this.getStatus())}async connect(e){e!=null&&e.ip&&(this._ip=e.ip.trim()),e!=null&&e.port&&(this._port=e.port),this._updateState("CONNECTING",`Connecting to ESP32 at ${this._ip}:${this._port}…`,null);try{const n=await fetch("/api/robot/connect",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ip:this._ip,port:this._port})}),i=await n.json();return n.ok&&i.is_connected?(this._pingMs=i.ping_ms||5,this._updateState("CONNECTED",`Connected to ESP32 at ${this._ip}:${this._port} (${this._pingMs}ms)`,this._pingMs),this._startHeartbeat(),this._connectWebSocket(),!0):await this._probeDirect()?(this._updateState("CONNECTED",`Connected directly to ESP32 at ${this._ip}:${this._port}`,this._pingMs),this._startHeartbeat(),this._connectWebSocket(),!0):(this._updateState("DISCONNECTED",i.message||`ESP32 unreachable at ${this._ip}:${this._port}. Connect to "${zt.WIFI.AP_SSID}" Wi-Fi.`),!1)}catch(n){return this._updateState("DISCONNECTED",`Connection error: ${n.message||"ESP32 unreachable"}`),!1}}async _probeDirect(){try{const e=new AbortController,n=setTimeout(()=>e.abort(),2e3),i=performance.now(),r=await fetch(`http://${this._ip}:${this._port}/api/status`,{signal:e.signal,mode:"cors"});if(clearTimeout(n),r.ok)return this._pingMs=Math.round(performance.now()-i),!0}catch{}return!1}async disconnect(){if(this._stopHeartbeat(),this._stopReconnect(),this._ws){try{this._ws.close()}catch{}this._ws=null}try{await fetch("/api/robot/disconnect",{method:"POST"})}catch{}this._updateState("DISCONNECTED","Wi-Fi transport disconnected. Safe stop engaged.",null)}async reconnect(){return this._updateState("RECONNECTING",`Reconnecting to ${this._ip}:${this._port}…`,null),await new Promise(e=>setTimeout(e,600)),await this.connect()}_startHeartbeat(){this._stopHeartbeat(),this._heartbeatTimer=setInterval(async()=>{if(this._state==="CONNECTED")try{if(!(await fetch("/api/robot/heartbeat",{method:"POST"})).ok)throw new Error("Heartbeat lost")}catch{this._handleConnectionLost()}},zt.WIFI.HEARTBEAT_INTERVAL_MS)}_stopHeartbeat(){this._heartbeatTimer&&(clearInterval(this._heartbeatTimer),this._heartbeatTimer=null)}_stopReconnect(){this._reconnectTimer&&(clearTimeout(this._reconnectTimer),this._reconnectTimer=null)}_handleConnectionLost(){this._stopHeartbeat(),this._updateState("RECONNECTING","Connection lost to ESP32. Reconnecting…",null),this._reconnectTimer=setTimeout(async()=>{await this.connect()||(this._updateState("DISCONNECTED","ESP32 Wi-Fi disconnected. Actuators safely stopped.",null),this._onTelemetry(qs()))},2e3)}_connectWebSocket(){const n=`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}/ws/telemetry`;try{this._ws&&this._ws.close();const i=new WebSocket(n);this._ws=i,i.onmessage=r=>{try{const s=JSON.parse(r.data);if(s.type==="field_observation"){window.dispatchEvent(new CustomEvent("field_observation",{detail:s.observation}));return}if(s.type==="treatment_applied"){window.dispatchEvent(new CustomEvent("treatment_applied",{detail:s}));return}this._onTelemetry(s)}catch{}},i.onclose=()=>{this._state==="CONNECTED"&&this._handleConnectionLost()}}catch{}}async sendCommand(e){const n=e.command||e.direction||"";return n==="STOP"||e.type==="stop"?await fetch("/api/robot/stop",{method:"POST"}).then(i=>i.json()):n==="EMERGENCY_STOP"||e.type==="emergency_stop"||e.type==="estop"?await fetch("/api/robot/estop",{method:"POST"}).then(i=>i.json()):await fetch("/api/robot/command",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(i=>i.json())}}class Sp{constructor(e,n){ze(this,"name","Bluetooth");ze(this,"_state","DISCONNECTED");ze(this,"_device",null);ze(this,"_server",null);ze(this,"_cmdChar",null);ze(this,"_telemetryChar",null);ze(this,"_statusChar",null);ze(this,"_message","Disconnected");ze(this,"_onTelemetry");ze(this,"_onStatusChange");this._onTelemetry=e,this._onStatusChange=n}static isSupported(){return typeof navigator<"u"&&"bluetooth"in navigator}isConnected(){var e;return this._state==="CONNECTED"&&!!((e=this._server)!=null&&e.connected)}getStatus(){var e;return{state:this._state,transport:"Bluetooth",mode:"REAL_HARDWARE",deviceName:((e=this._device)==null?void 0:e.name)||zt.BLE.DEVICE_NAME_PREFIX,message:this._message}}_updateState(e,n){this._state=e,this._message=n,this._onStatusChange(this.getStatus())}async connect(){if(!Sp.isSupported())return this._updateState("ERROR","Web Bluetooth is not supported in this browser. Please use Chrome, Edge, or Opera over HTTPS/localhost."),!1;this._updateState("CONNECTING",'Opening Bluetooth device chooser… Select "AgriGuard-Robot"');try{const n=await navigator.bluetooth.requestDevice({filters:[{namePrefix:zt.BLE.DEVICE_NAME_PREFIX}],optionalServices:[zt.BLE.SERVICE_UUID]});this._device=n,this._updateState("CONNECTING",`Connecting to GATT server on ${n.name||"AgriGuard-Robot"}…`);const i=await n.gatt.connect();this._server=i;const r=await i.getPrimaryService(zt.BLE.SERVICE_UUID);this._cmdChar=await r.getCharacteristic(zt.BLE.COMMAND_CHARACTERISTIC_UUID),this._telemetryChar=await r.getCharacteristic(zt.BLE.TELEMETRY_CHARACTERISTIC_UUID);try{this._statusChar=await r.getCharacteristic(zt.BLE.STATUS_CHARACTERISTIC_UUID),await this._statusChar.startNotifications(),this._statusChar.addEventListener("characteristicvaluechanged",s=>{try{const a=new TextDecoder().decode(s.target.value);console.log("[BLE STATUS]",a)}catch{}})}catch{}return await this._telemetryChar.startNotifications(),this._telemetryChar.addEventListener("characteristicvaluechanged",s=>{try{const a=new TextDecoder().decode(s.target.value),o=JSON.parse(a);o.esp32_connected=!0,o.mode="REAL_HARDWARE",o.data_source="ESP32_BLE",this._onTelemetry(o),fetch("/api/robot/telemetry_ingest",{method:"POST",headers:{"Content-Type":"application/json"},body:a}).catch(()=>{})}catch(a){console.warn("[BLE] Telemetry parse error:",a)}}),n.addEventListener("gattserverdisconnected",()=>{this._handleGattDisconnected()}),this._updateState("CONNECTED",`Connected to ${n.name||"AgriGuard-Robot"} via Web Bluetooth! Real hardware live.`),!0}catch(e){return e.name==="NotFoundError"?this._updateState("DISCONNECTED","Bluetooth device pairing was cancelled by user."):e.name==="SecurityError"?this._updateState("ERROR","Web Bluetooth requires a secure context (HTTPS or http://localhost)."):this._updateState("ERROR",e.message||"Bluetooth connection failed."),!1}}_handleGattDisconnected(){this._server=null,this._cmdChar=null,this._telemetryChar=null,this._statusChar=null,this._updateState("DISCONNECTED","Bluetooth GATT disconnected. Robot stopped safely."),this._onTelemetry(qs())}async disconnect(){var e,n;if((n=(e=this._device)==null?void 0:e.gatt)!=null&&n.connected)try{await this.sendCommand({type:"robot_command",command:"STOP"}),this._device.gatt.disconnect()}catch{}this._handleGattDisconnected()}async reconnect(){if(this._device)try{this._updateState("RECONNECTING",`Reconnecting to ${this._device.name}…`);const e=await this._device.gatt.connect();return this._server=e,this._updateState("CONNECTED",`Reconnected to ${this._device.name} via Bluetooth.`),!0}catch{return await this.connect()}return await this.connect()}async sendCommand(e){if(!this.isConnected()||!this._cmdChar)throw new Error("Bluetooth is not connected. Command rejected.");const n=JSON.stringify(e),i=new TextEncoder().encode(n);return await this._cmdChar.writeValue(i),{ok:!0,accepted:!0,executed:!0,source:"bluetooth_gatt"}}}class N1{constructor(){ze(this,"_mode","REAL_HARDWARE");ze(this,"_activeTransport");ze(this,"_wifiTransport");ze(this,"_bleTransport");ze(this,"_telemetrySubscribers",new Set);ze(this,"_statusSubscribers",new Set);ze(this,"_currentStatus");this._wifiTransport=new P1(e=>this._broadcastTelemetry(e),e=>this._broadcastStatus(e)),this._bleTransport=new Sp(e=>this._broadcastTelemetry(e),e=>this._broadcastStatus(e)),this._activeTransport=this._wifiTransport,this._currentStatus=this._wifiTransport.getStatus(),fetch("/api/robot/mode").then(e=>e.json()).then(e=>{e.mode&&(this._mode=e.mode.toUpperCase(),this._currentStatus.mode=this._mode,this._broadcastStatus(this._currentStatus))}).catch(()=>{})}getMode(){return this._mode}setMode(e){if(this._mode=e,this._currentStatus.mode=e,fetch("/api/robot/mode",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:e})}).catch(()=>{}),e==="SIMULATION")this._broadcastStatus({state:"CONNECTED",transport:"None",mode:"SIMULATION",message:"SIMULATION MODE ACTIVE (Safe test sandbox)"});else{const n=this._activeTransport.getStatus();this._broadcastStatus(n),this._activeTransport.isConnected()||this._broadcastTelemetry(qs())}}getStatus(){return this._mode==="SIMULATION"?{state:"CONNECTED",transport:"None",mode:"SIMULATION",message:"SIMULATION MODE ACTIVE"}:this._activeTransport.getStatus()}isConnected(){return this._mode==="SIMULATION"?!0:this._activeTransport.isConnected()}getTransport(){return this._activeTransport.name.includes("Bluetooth")?"Bluetooth":"Wi-Fi"}getDisconnectedTelemetry(){return qs()}async connect(e="wifi",n){return this.setMode("REAL_HARDWARE"),e==="bluetooth"?(this._wifiTransport.isConnected()&&await this._wifiTransport.disconnect(),this._activeTransport=this._bleTransport,await this._bleTransport.connect()):(this._bleTransport.isConnected()&&await this._bleTransport.disconnect(),this._activeTransport=this._wifiTransport,await this._wifiTransport.connect(n))}async disconnect(){await this._activeTransport.disconnect(),this._mode==="REAL_HARDWARE"&&this._broadcastTelemetry(qs())}async reconnect(){return await this._activeTransport.reconnect()}async sendCommand(e){if(this._mode==="REAL_HARDWARE"&&!this._activeTransport.isConnected())throw new Error("Action blocked: Physical ESP32 robot is DISCONNECTED.");if(this._mode==="SIMULATION"){const n=e.command||e.direction||"";return n==="STOP"||e.type==="stop"?await fetch("/api/robot/stop",{method:"POST"}).then(i=>i.json()):n==="EMERGENCY_STOP"||e.type==="emergency_stop"?await fetch("/api/robot/estop",{method:"POST"}).then(i=>i.json()):await fetch("/api/robot/command",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(i=>i.json())}return await this._activeTransport.sendCommand(e)}subscribeTelemetry(e){return this._telemetrySubscribers.add(e),()=>{this._telemetrySubscribers.delete(e)}}subscribeStatus(e){return this._statusSubscribers.add(e),e(this.getStatus()),()=>{this._statusSubscribers.delete(e)}}_broadcastTelemetry(e){this._mode==="REAL_HARDWARE"&&!this._activeTransport.isConnected()&&(e=qs()),this._telemetrySubscribers.forEach(n=>{try{n(e)}catch{}})}_broadcastStatus(e){this._currentStatus=e,this._statusSubscribers.forEach(n=>{try{n(e)}catch{}})}}const xn=new N1;function D1(){const[t,e]=ae.useState(null),[n,i]=ae.useState(!1),[r,s]=ae.useState(xn.getStatus()),a=ae.useRef(null),o=ae.useRef(null);return ae.useEffect(()=>{let l=!1;const c=xn.subscribeStatus(d=>{l||s(d)}),f=xn.subscribeTelemetry(d=>{l||e(d)});function p(){const d=window.location.protocol==="https:"?"wss:":"ws:",m=window.location.host,g=`${d}//${m}/ws/telemetry`;try{const S=new WebSocket(g);a.current=S,S.onopen=()=>{l||i(!0)},S.onmessage=v=>{if(!l)try{const h=JSON.parse(v.data);if(h.type==="field_observation"){window.dispatchEvent(new CustomEvent("field_observation",{detail:h.observation}));return}if(h.type==="treatment_applied"){window.dispatchEvent(new CustomEvent("treatment_applied",{detail:h}));return}const _=h;if(xn.getTransport()==="Bluetooth"&&xn.isConnected())return;if(xn.getMode()==="REAL_HARDWARE"&&!_.esp32_connected){e(xn.getDisconnectedTelemetry());return}e(_)}catch(h){console.error("Failed to parse telemetry message:",h)}},S.onclose=()=>{l||(i(!1),o.current=window.setTimeout(p,1500))},S.onerror=()=>{S.readyState===WebSocket.OPEN&&S.close()}}catch{l||(o.current=window.setTimeout(p,2e3))}}return p(),()=>{l=!0,c(),f(),o.current&&clearTimeout(o.current),a.current&&a.current.close()}},[]),{telemetry:t,wsConnected:n,connectionStatus:r}}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var L1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),He=(t,e)=>{const n=ae.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:o="",children:l,...c},f)=>ae.createElement("svg",{ref:f,...L1,width:r,height:r,stroke:i,strokeWidth:a?Number(s)*24/Number(r):s,className:["lucide",`lucide-${I1(t)}`,o].join(" "),...c},[...e.map(([p,d])=>ae.createElement(p,d)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cu=He("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=He("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds=He("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=He("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ep=He("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp=He("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=He("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=He("BatteryMedium",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13",key:"1wd6dw"}],["line",{x1:"10",x2:"10",y1:"11",y2:"13",key:"haxvl5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id=He("Bluetooth",[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17",key:"1q5490"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=He("Boxes",[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=He("Bug",[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",key:"xs1cw7"}],["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4",key:"k3fwyw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=He("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=He("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=He("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=He("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=He("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ap=He("Compass",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76",key:"m9r19z"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=He("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=He("Crosshair",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=He("Disc",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=He("Droplet",[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ko=He("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=He("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=He("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=He("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=He("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=He("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=He("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=He("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=He("Map",[["polygon",{points:"3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21",key:"ok2ie8"}],["line",{x1:"9",x2:"9",y1:"3",y2:"18",key:"w34qz5"}],["line",{x1:"15",x2:"15",y1:"6",y2:"21",key:"volv9a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1=He("Move",[["polyline",{points:"5 9 2 12 5 15",key:"1r5uj5"}],["polyline",{points:"9 5 12 2 15 5",key:"5v383o"}],["polyline",{points:"15 19 12 22 9 19",key:"g7qi8m"}],["polyline",{points:"19 9 22 12 19 15",key:"tpp73q"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=He("PlugZap",[["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m18 3-4 4h6l-4 4",key:"16psg9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=He("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uu=He("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ts=He("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=He("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=He("Scan",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eM=He("ScrollText",[["path",{d:"M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4",key:"13a6an"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M15 8h-5",key:"1khuty"}],["path",{d:"M15 12h-5",key:"r7krc0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tM=He("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const du=He("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=He("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=He("Sliders",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nM=He("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rp=He("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iM=He("Stethoscope",[["path",{d:"M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3",key:"1jd90r"}],["path",{d:"M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4",key:"126ukv"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rM=He("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=He("Thermometer",[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=He("Unplug",[["path",{d:"m19 5 3-3",key:"yk6iyv"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z",key:"1snsnr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=He("VideoOff",[["path",{d:"M10.66 6H14a2 2 0 0 1 2 2v2.34l1 1L22 8v8",key:"ubwiq0"}],["path",{d:"M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2l10 10Z",key:"1l10zd"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sM=He("Video",[["path",{d:"m22 8-6 4 6 4V8Z",key:"50v9me"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2",key:"1rqjg6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lr=He("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=He("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=He("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function aM(t=160){const[e,n]=ae.useState(null),i=ae.useRef([]),r=ae.useRef(null),s=ae.useRef(0);ae.useEffect(()=>{const o=l=>{i.current.push(l);const c=l-1e3;for(;i.current.length>0&&i.current[0]<c;)i.current.shift();if(l-s.current>=700){s.current=l;const f=i.current.length;n(f)}r.current=requestAnimationFrame(o)};return r.current=requestAnimationFrame(o),()=>{r.current!==null&&cancelAnimationFrame(r.current)}},[]);const a=e===null?"critical":e>=t*.85?"healthy":e>=t*.5?"degraded":"critical";return{fps:e,status:a}}const oM=({pageTitle:t,pageSection:e,telemetry:n,wsConnected:i,onEmergencyStop:r})=>{var h,_,E;const{fps:s,status:a}=aM(160),o=(n==null?void 0:n.esp32_connected)??!1,l=((h=n==null?void 0:n.camera_status)==null?void 0:h.connected)??!1,c=((_=n==null?void 0:n.camera_status)==null?void 0:_.fps)??null,f=((E=n==null?void 0:n.safety)==null?void 0:E.emergency_stop)??!1,p=(n==null?void 0:n.battery_percentage)??null,d=(n==null?void 0:n.esp32_ping_ms)??null,m=(n==null?void 0:n.hardware_mode)==="SIMULATION"||(n==null?void 0:n.mode)==="SIMULATION",g=c===null?"critical":c>=100?"healthy":c>=60?"degraded":"critical";let S="disconnected",v="Disconnected";return m?(S="simulation",v="Simulation"):o&&(S="connected",v=d?`Robot · ${d}ms`:"Robot · Connected"),u.jsxs("div",{className:"topbar",children:[u.jsxs("div",{className:"topbar-breadcrumb",children:[u.jsx("span",{children:"Greenovators"}),u.jsx(v0,{size:13,className:"topbar-breadcrumb-sep"}),e&&u.jsxs(u.Fragment,{children:[u.jsx("span",{children:e}),u.jsx(v0,{size:13,className:"topbar-breadcrumb-sep"})]}),u.jsx("span",{className:"topbar-breadcrumb-current",children:t})]}),u.jsx("div",{className:"topbar-spacer"}),u.jsxs("div",{className:"topbar-fps-group",children:[u.jsxs("div",{className:`fps-badge ${a}`,children:[u.jsx("span",{className:"fps-dot"}),u.jsxs("span",{children:["SYS ",s!==null?`${s} FPS`:"-- FPS"]})]}),u.jsxs("div",{className:`fps-badge ${g}`,children:[u.jsx("span",{className:"fps-dot"}),u.jsx(Tp,{size:11}),u.jsxs("span",{children:["CAM ",c!==null?`${c} FPS`:l?"…":"-- FPS"]})]})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[u.jsxs("div",{className:`topbar-chip ${S}`,children:[u.jsx(uu,{size:11}),u.jsx("span",{children:v})]}),u.jsxs("div",{className:`topbar-chip ${i?"connected":"disconnected"}`,children:[u.jsx(Lr,{size:11}),u.jsx("span",{children:i?"Live":"Offline"})]}),p!==null&&u.jsxs("div",{className:"topbar-chip connected",children:[u.jsx(O1,{size:11}),u.jsxs("span",{children:[p,"%"]})]})]}),u.jsxs("button",{id:"topbar-emergency-stop",onClick:r,className:"estop-btn",title:"Immediately stops all motors, closes solenoid valve, halts pump",style:f?{background:"#991B1B",boxShadow:"0 0 0 2px #FCA5A5"}:{},children:[u.jsx(du,{size:13}),f?"E-STOP ACTIVE":"EMERGENCY STOP"]})]})},lM=[{id:"dashboard",label:"Dashboard",icon:X1,section:"MAIN"},{id:"heatmap",label:"Field Monitor",icon:$1},{id:"remote",label:"Robot Control",icon:V1},{id:"sensors",label:"Sensors",icon:cu,section:"HARDWARE"},{id:"devices",label:"Device Health",icon:Cp},{id:"diagnostics",label:"Hardware Diagnostics",icon:iM,section:"SYSTEM"},{id:"logs",label:"System Logs",icon:eM}],cM=({activeTab:t,setActiveTab:e,telemetry:n,wsConnected:i})=>{var f,p;const r=(n==null?void 0:n.esp32_connected)??!1,s=(n==null?void 0:n.hardware_mode)==="SIMULATION"||(n==null?void 0:n.mode)==="SIMULATION",a=((f=n==null?void 0:n.camera_status)==null?void 0:f.connected)??!1,o=(n==null?void 0:n.esp32_ping_ms)??null,l=s?"warning":r?"online":"offline",c=s?"Simulation":r?o?`${o}ms`:"Connected":"Disconnected";return u.jsxs("div",{className:"sidebar",children:[u.jsxs("div",{className:"sidebar-brand",children:[u.jsx("div",{className:"sidebar-brand-icon",children:u.jsx(Y1,{size:18,color:"#FFFFFF"})}),u.jsxs("div",{className:"sidebar-brand-text",children:[u.jsx("span",{className:"sidebar-brand-name",children:"AgriGuard"}),u.jsx("span",{className:"sidebar-brand-sub",children:"Greenovators · v2.0"})]})]}),u.jsx("nav",{className:"sidebar-nav",children:lM.map(d=>{const m=d.icon,g=t===d.id;return u.jsxs(Pf.Fragment,{children:[d.section&&u.jsx("div",{className:"sidebar-section-label",children:d.section}),u.jsxs("button",{id:`nav-${d.id}`,className:`nav-item ${g?"active":""}`,onClick:()=>e(d.id),children:[u.jsx("span",{className:"nav-item-icon",children:u.jsx(m,{size:15})}),d.label]})]},d.id)})}),u.jsx("div",{className:"sidebar-footer",children:u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:[u.jsxs("div",{className:"sidebar-status-pill",children:[u.jsx("span",{className:`sidebar-status-dot ${l} ${l==="online"?"pulse":""}`}),u.jsx("span",{className:"sidebar-status-label",children:"Robot"}),u.jsx("span",{className:"sidebar-status-value",children:c})]}),u.jsxs("div",{className:"sidebar-status-pill",children:[u.jsx("span",{className:`sidebar-status-dot ${i?"online pulse":"offline"}`}),u.jsx("span",{className:"sidebar-status-label",children:"Telemetry"}),u.jsx("span",{className:"sidebar-status-value",children:i?"Live":"Offline"})]}),u.jsxs("div",{className:"sidebar-status-pill",children:[u.jsx("span",{className:`sidebar-status-dot ${a?"online":"offline"}`}),u.jsx("span",{className:"sidebar-status-label",children:"Camera"}),u.jsx("span",{className:"sidebar-status-value",children:a?`${((p=n==null?void 0:n.camera_status)==null?void 0:p.fps)??"?"} FPS`:"Offline"})]})]})})]})},jn="";async function Kx(){const t=await fetch(`${jn}/api/diagnostics`);if(!t.ok)throw new Error(`Diagnostics fetch failed with status ${t.status}`);return t.json()}async function uM(t,e=130,n=0){return(await fetch(`${jn}/api/robot/move`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({direction:t,speed:e,duration_ms:n})})).json()}async function dM(){return(await fetch(`${jn}/api/robot/stop`,{method:"POST"})).json()}async function hM(){return(await fetch(`${jn}/api/robot/estop`,{method:"POST"})).json()}async function fM(t){const e=await fetch(`${jn}/api/ai/scan`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t?{image_base64:t}:{})});if(!e.ok){const n=await e.json().catch(()=>({detail:"Camera or scan failure"}));throw new Error(n.detail||"Failed to capture frame or run AI inference")}return e.json()}async function pM(){try{return await(await fetch(`${jn}/api/camera/release`,{method:"POST"})).json()}catch{return{ok:!1}}}async function Ss(){try{return await(await fetch(`${jn}/api/camera/reclaim`,{method:"POST"})).json()}catch{return{ok:!1}}}async function mM(t,e,n="Field Operator"){const i=await fetch(`${jn}/api/treatment/approve`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({decision_id:t,approved:e,operator_name:n})});if(!i.ok){const r=await i.json().catch(()=>({detail:"Spray approval rejected"}));throw new Error(r.detail||"Approval request failed")}return i.json()}async function gM(t){const e=await fetch(`${jn}/api/camera/power`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:t})});if(!e.ok)throw new Error("Failed to toggle camera power");return e.json()}async function vM(){const t=await fetch(`${jn}/api/network/status`);if(!t.ok)throw new Error(`Failed to fetch network status: ${t.status}`);return t.json()}async function xM(t,e=80){const n=await fetch(`${jn}/api/network/config`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({esp32_ip:t,esp32_port:e})});if(!n.ok)throw new Error(`Failed to update network config: ${n.status}`);return n.json()}async function _M(){try{const t=await fetch(`${jn}/api/robot/mode`);return t.ok?await t.json():{mode:"REAL_HARDWARE",is_connected:!1,ping_ms:null}}catch{return{mode:"REAL_HARDWARE",is_connected:!1,ping_ms:null}}}async function yM(t){const e=await fetch(`${jn}/api/robot/mode`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:t})});if(!e.ok)throw new Error(`Failed to set hardware mode: ${e.status}`);return e.json()}const S0=Pf.memo(({cameraStatus:t,lastDetection:e,isScanning:n,onTriggerScan:i,onCameraToggled:r,activeZoneId:s,telemetry:a,onMove:o,onStop:l})=>{var $e;const c=ae.useRef(null),f=ae.useRef(null),p=ae.useRef(null),d=ae.useRef(!1),m=ae.useRef({frames:0,lastTime:performance.now()}),[g,S]=ae.useState("direct"),[v,h]=ae.useState(!1),[_,E]=ae.useState(null),[M,b]=ae.useState(!1),[T,C]=ae.useState(!0),[x,A]=ae.useState(!1),[P,L]=ae.useState(!1),[O,U]=ae.useState("system"),[I,V]=ae.useState(0),[Q,q]=ae.useState(0),[H,B]=ae.useState(""),[W,Z]=ae.useState(0),[re,de]=ae.useState(0),[Be,Ce]=ae.useState("640x480"),[Ve,J]=ae.useState(!0),[ne,ve]=ae.useState(Date.now()),xe=Ve&&(t==null?void 0:t.enabled)!==!1&&(t==null?void 0:t.status)!=="OFF",pe=xe&&(g==="direct"||g==="fallback"||((t==null?void 0:t.connected)??!1)),Ie=ae.useCallback((N,Ke)=>{m.current.frames++;const Ge=N-m.current.lastTime;if(Ge>=1e3){const R=Math.round(m.current.frames*1e3/Ge);if(V(R),m.current.frames=0,m.current.lastTime=N,c.current&&typeof c.current.getVideoPlaybackQuality=="function"){const y=c.current.getVideoPlaybackQuality();y&&typeof y.droppedVideoFrames=="number"&&q(y.droppedVideoFrames)}}c.current&&"requestVideoFrameCallback"in c.current&&c.current.requestVideoFrameCallback(Ie)},[]),Qe=ae.useCallback(async()=>{if(!d.current){if(d.current=!0,h(!1),E(null),f.current&&(f.current.getTracks().forEach(N=>N.stop()),f.current=null),O==="usb"){console.log("USB Camera selected. Reclaiming backend capture lock and using fallback stream."),await Ss().catch(()=>{}),ve(Date.now()),S("fallback"),d.current=!1;return}if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){console.warn("getUserMedia not supported in this browser, falling back to MJPEG stream."),await Ss().catch(()=>{}),ve(Date.now()),S("fallback"),d.current=!1;return}try{await pM().catch(()=>{});const N=[{video:{width:{ideal:1280},height:{ideal:720}},audio:!1},{video:{width:{ideal:640},height:{ideal:480}},audio:!1},{video:!0,audio:!1}];let Ke=null,Ge=null;for(const y of N)try{if(Ke=await navigator.mediaDevices.getUserMedia(y),Ke)break}catch(G){Ge=G}if(!Ke)throw Ge||new Error("Failed to acquire camera media stream");f.current=Ke;const R=Ke.getVideoTracks()[0];if(R){const y=R.getSettings();Ce(`${y.width||640}x${y.height||480}`),B(`Webcam (${y.width||640}x${y.height||480})`),R.onended=()=>{console.warn("[AgriGuard Camera] Video track ended. Reconnecting..."),S("error"),E("System Camera disconnected.")}}c.current&&(c.current.srcObject=Ke,c.current.autoplay=!0,c.current.playsInline=!0,c.current.muted=!0,c.current.play().catch(y=>console.warn("Video auto-playback notice:",y)),m.current={frames:0,lastTime:performance.now()},"requestVideoFrameCallback"in c.current&&c.current.requestVideoFrameCallback(Ie)),S("direct"),E(null)}catch(N){console.warn("Direct getUserMedia acquisition notice, falling back to backend MJPEG stream:",N.name,N.message),N.name==="NotAllowedError"?E("Browser camera permission denied. Displaying backend hardware stream."):N.name==="NotFoundError"?E("No physical USB camera device detected."):N.name==="NotReadableError"&&E("Camera is currently busy. Displaying backend hardware stream."),await Ss().catch(()=>{}),ve(Date.now()),S("fallback")}finally{d.current=!1}}},[Ie,O]),ke=ae.useCallback(()=>{f.current&&(f.current.getTracks().forEach(N=>N.stop()),f.current=null),c.current&&(c.current.srcObject=null),S("off")},[]);ae.useEffect(()=>{if(xe){const N=setTimeout(()=>{Qe()},100);return()=>clearTimeout(N)}else ke();return()=>{f.current&&(f.current.getTracks().forEach(N=>N.stop()),f.current=null)}},[xe,O,Qe,ke]),ae.useEffect(()=>{c.current&&f.current&&c.current.srcObject!==f.current&&(c.current.srcObject=f.current,c.current.play().catch(N=>console.warn("Video auto-playback notice:",N)))},[g,xe]);const qe=ae.useCallback(()=>{const N=c.current;if(!N||N.readyState<2||N.videoWidth===0)return null;p.current||(p.current=document.createElement("canvas"));const Ke=p.current,Ge=Math.min(N.videoWidth,640),R=Math.min(N.videoHeight,480);(Ke.width!==Ge||Ke.height!==R)&&(Ke.width=Ge,Ke.height=R);const y=Ke.getContext("2d",{alpha:!1});return y?(y.drawImage(N,0,0,Ge,R),Ke.toDataURL("image/jpeg",.8)):null},[]),ot=ae.useCallback(()=>{const N=performance.now();let Ke;if(g==="direct"){const R=qe();R&&(Ke=R)}i(Ke);const Ge=Math.round(performance.now()-N);de(Ge)},[g,qe,i]);ae.useEffect(()=>{if(!P||!xe||n)return;const N=setInterval(()=>{if(!n&&g==="direct"){const Ke=performance.now(),Ge=qe();if(Ge){i(Ge);const R=Math.round(performance.now()-Ke);de(R),Z(2.5)}}},400);return()=>clearInterval(N)},[P,xe,n,g,qe,i]);const Xe=async()=>{b(!0);try{const N=!xe;J(N),N||ke();const Ke=await gM(N);N&&(await Ss().catch(()=>{}),ve(Date.now()),await Qe()),r&&r(Ke)}catch(N){console.error("Failed to toggle camera power:",N)}finally{b(!1)}},rt=async()=>{h(!1),E(null),await Ss().catch(()=>{}),ve(Date.now()),await Qe()},ft=N=>{o&&o(N,130,400)},Ct=()=>{l&&l()},le=s||(a==null?void 0:a.active_zone_id)||"ZONE-R1C1";return u.jsxs("div",{className:"card",style:{padding:"1.25rem",height:"100%",display:"flex",flexDirection:"column"},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.75rem",flexWrap:"wrap",gap:"0.5rem"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[u.jsx(Tp,{size:20,color:xe?"var(--emerald-400)":"var(--text-muted)"}),u.jsxs("div",{children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[u.jsx("h2",{style:{fontSize:"1.1rem",fontWeight:700,letterSpacing:"-0.01em",margin:0,color:"var(--text-primary)"},children:"Field Monitor Camera"}),u.jsxs("select",{className:"input",value:O,style:{padding:"0.15rem 0.5rem",fontSize:"0.75rem",height:"auto",minHeight:"24px"},onChange:N=>{ke(),U(N.target.value)},children:[u.jsx("option",{value:"system",children:"System Camera"}),u.jsx("option",{value:"usb",children:"USB Camera"})]})]}),u.jsxs("div",{style:{fontSize:"0.72rem",color:"var(--text-muted)",display:"flex",alignItems:"center",gap:"0.4rem",marginTop:"4px"},children:[u.jsx("span",{children:"Primary Field Viewport"}),pe&&u.jsxs(u.Fragment,{children:[u.jsx("span",{children:"•"}),u.jsxs("span",{style:{color:"var(--green-500)",display:"inline-flex",alignItems:"center",gap:"2px"},children:[u.jsx(qx,{size:11})," ",g==="direct"?"Hardware Direct (<15ms)":"Zero-Lag Stream"]})]})]})]})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[u.jsx("span",{className:`status-pill ${xe?pe?"status-online":"status-offline":"status-warning"}`,children:xe?pe?`${g==="direct"?"DIRECT VIDEO":"STREAM"} • LIVE`:"DISCONNECTED":"STANDBY"}),u.jsx("button",{onClick:()=>A(!x),className:"btn btn-outline",style:{padding:"0.35rem 0.6rem",fontSize:"0.75rem",opacity:x?1:.6},title:"Toggle Performance HUD",children:u.jsx(W1,{size:13})}),pe&&u.jsx("button",{onClick:()=>C(!T),className:"btn btn-outline",style:{padding:"0.35rem 0.6rem",fontSize:"0.75rem",opacity:T?1:.6},title:"Toggle target reticle",children:u.jsx(H1,{size:13})}),pe&&u.jsx("button",{onClick:rt,className:"btn btn-outline",style:{padding:"0.35rem 0.6rem",fontSize:"0.75rem"},title:"Refresh video connection",children:u.jsx(ts,{size:13})}),u.jsx("button",{onClick:Xe,disabled:M,className:`btn ${xe?"btn-outline":"btn-primary"}`,style:{padding:"0.35rem 0.75rem",fontSize:"0.8rem",borderColor:xe?"rgba(244, 63, 94, 0.4)":void 0,color:xe?"var(--rose-500)":void 0},title:xe?"Turn physical camera OFF":"Turn physical camera ON",children:M?u.jsx(ts,{size:14,className:"animate-spin"}):xe?u.jsxs(u.Fragment,{children:[u.jsx(y0,{size:14}),u.jsx("span",{children:"Turn OFF"})]}):u.jsxs(u.Fragment,{children:[u.jsx(sM,{size:14}),u.jsx("span",{children:"Turn ON"})]})})]})]}),u.jsxs("div",{style:{position:"relative",width:"100%",aspectRatio:"16/9",backgroundColor:"#05080f",borderRadius:"var(--radius-md)",overflow:"hidden",border:"1px solid var(--border-subtle)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"inset 0 0 40px rgba(0,0,0,0.8)"},children:[u.jsx("video",{ref:c,autoPlay:!0,playsInline:!0,muted:!0,style:{width:"100%",height:"100%",objectFit:"contain",backgroundColor:"#000",display:xe&&g==="direct"?"block":"none"}}),xe&&g==="fallback"&&u.jsx("img",{src:`/api/camera/stream?t=${ne}`,alt:"Live Physical USB Camera Stream",style:{width:"100%",height:"100%",objectFit:"contain",backgroundColor:"#000"},onError:()=>{console.warn("Fallback stream reconnecting, reclaiming camera..."),Ss().catch(()=>{})}}),!xe&&u.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"#05080f",zIndex:4,textAlign:"center",padding:"2rem",color:"var(--text-muted)"},children:[u.jsx("div",{style:{width:"56px",height:"56px",borderRadius:"50%",background:"rgba(255, 255, 255, 0.05)",border:"1px solid var(--border-subtle)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 1rem auto"},children:u.jsx(y0,{size:28,color:"var(--text-muted)"})}),u.jsx("h3",{style:{fontSize:"1rem",color:"#fff",marginBottom:"0.25rem"},children:"Camera Standby Mode"}),u.jsx("p",{style:{fontSize:"0.8rem",maxWidth:"320px",margin:"0 auto 1.25rem auto"},children:"Optical hardware bus is in low-power standby. Click below to engage direct hardware video capture."}),u.jsxs("button",{onClick:Xe,disabled:M,className:"btn btn-primary",style:{padding:"0.5rem 1.25rem",fontSize:"0.85rem"},children:[u.jsx(Z1,{size:14}),u.jsx("span",{children:"Power ON Camera"})]})]}),xe&&g==="error"&&!pe&&u.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"#05080f",zIndex:4,textAlign:"center",padding:"2rem",color:"var(--text-muted)"},children:[u.jsx(U1,{size:44,color:"var(--rose-500)",style:{margin:"0 auto 0.75rem auto"}}),u.jsx("h3",{style:{fontSize:"1rem",color:"#fff",marginBottom:"0.25rem"},children:"CAMERA: DISCONNECTED"}),u.jsx("p",{style:{fontSize:"0.8rem",maxWidth:"340px",margin:"0 auto 1rem auto"},children:_||"Physical USB camera stream interrupted. Check connection and click retry."}),u.jsxs("button",{onClick:rt,className:"btn btn-outline",style:{padding:"0.4rem 1rem",fontSize:"0.8rem"},children:[u.jsx(ts,{size:13}),u.jsx("span",{children:"Retry Stream"})]})]}),xe&&pe&&u.jsxs(u.Fragment,{children:[T&&u.jsx("div",{className:"camera-reticle"}),u.jsxs("div",{style:{position:"absolute",top:"10px",left:"10px",background:"rgba(10, 15, 24, 0.75)",backdropFilter:"blur(8px)",padding:"4px 10px",borderRadius:"6px",fontSize:"0.72rem",color:"#34d399",fontFamily:"JetBrains Mono, monospace",border:"1px solid rgba(16, 185, 129, 0.3)",display:"flex",alignItems:"center",gap:"6px",zIndex:3},children:[u.jsx("span",{className:"pulse-indicator green",style:{width:"6px",height:"6px"}}),u.jsxs("span",{children:["LIVE • ",I," FPS"]}),u.jsx("span",{style:{color:"var(--text-dim)"},children:"|"}),u.jsx("span",{style:{color:"var(--sky-400)"},children:Be})]}),x&&u.jsxs("div",{style:{position:"absolute",bottom:"10px",left:"10px",background:"rgba(10, 15, 24, 0.92)",backdropFilter:"blur(10px)",padding:"8px 14px",borderRadius:"8px",fontSize:"0.70rem",fontFamily:"JetBrains Mono, monospace",border:"1px solid rgba(56, 189, 248, 0.35)",color:"#e2e8f0",display:"flex",flexDirection:"column",gap:"3px",zIndex:4,boxShadow:"0 8px 24px rgba(0,0,0,0.6)"},children:[u.jsxs("div",{style:{fontWeight:700,color:"var(--sky-400)",marginBottom:"2px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[u.jsx("span",{children:"CAMERA PERFORMANCE HUD"}),u.jsx("span",{style:{color:g==="direct"?"#34d399":"#f59e0b",fontSize:"0.65rem"},children:g==="direct"?"DIRECT HTML5":"HTTP STREAM"})]}),u.jsxs("div",{children:["Requested FPS: ",u.jsx("strong",{style:{color:"#fff"},children:"120"})]}),u.jsxs("div",{children:["Actual FPS: ",u.jsx("strong",{style:{color:I>=60?"#34d399":"#38bdf8"},children:I})]}),u.jsxs("div",{children:["Resolution: ",u.jsx("strong",{style:{color:"#fff"},children:Be})]}),u.jsxs("div",{children:["AI FPS: ",u.jsx("strong",{style:{color:"#fff"},children:P?`${W.toFixed(1)}`:"0 (On-Demand)"})]}),u.jsxs("div",{children:["Inference Time: ",u.jsxs("strong",{style:{color:"#fff"},children:[re," ms"]})]}),u.jsxs("div",{children:["Dropped Frames: ",u.jsx("strong",{style:{color:Q>0?"#f87171":"#34d399"},children:Q})]}),H&&u.jsxs("div",{style:{marginTop:"2px",color:"var(--text-muted)",fontSize:"0.62rem",borderTop:"1px solid rgba(255,255,255,0.08)",paddingTop:"2px"},children:["Hardware Limits: ",H]})]}),u.jsxs("div",{style:{position:"absolute",top:"10px",right:"10px",background:"rgba(10, 15, 24, 0.75)",backdropFilter:"blur(8px)",padding:"4px 10px",borderRadius:"6px",fontSize:"0.72rem",color:"#f8fafc",fontFamily:"JetBrains Mono, monospace",border:"1px solid var(--border-subtle)",display:"flex",alignItems:"center",gap:"6px",zIndex:3},children:[u.jsxs("span",{children:["📍 ",le]}),(a==null?void 0:a.robot_location)&&u.jsxs("span",{style:{color:"var(--text-muted)"},children:["(X:",a.robot_location.x,", Y:",a.robot_location.y,")"]})]}),e!=null&&e.visual_annotations&&e.visual_annotations.length>0?e.visual_annotations.map((N,Ke)=>{var fe,z;const Ge=((fe=e.frame_dimensions)==null?void 0:fe.width)||1280,R=((z=e.frame_dimensions)==null?void 0:z.height)||720,y=N.bbox[0]/Ge*100,G=N.bbox[1]/R*100,X=(N.bbox[2]-N.bbox[0])/Ge*100,ee=(N.bbox[3]-N.bbox[1])/R*100,oe=N.color||(N.is_target?"#10b981":"#ef4444");return u.jsx("div",{style:{position:"absolute",border:`2px solid ${oe}`,backgroundColor:`${oe}22`,left:`${y}%`,top:`${G}%`,width:`${X}%`,height:`${ee}%`,pointerEvents:"none",transition:"all 0.2s ease-out",boxShadow:`0 0 10px ${oe}66`,zIndex:3},children:u.jsx("span",{style:{position:"absolute",top:"-22px",left:"0",background:oe,color:"#fff",fontSize:"0.68rem",fontWeight:700,padding:"1px 6px",borderRadius:"3px",whiteSpace:"nowrap",boxShadow:"0 2px 5px rgba(0,0,0,0.4)"},children:N.label})},`ann-${Ke}`)}):e!=null&&e.bounding_box?u.jsx("div",{style:{position:"absolute",border:"2px solid #10b981",backgroundColor:"rgba(16, 185, 129, 0.15)",left:`${e.bounding_box.x/1280*100}%`,top:`${e.bounding_box.y/720*100}%`,width:`${e.bounding_box.w/1280*100}%`,height:`${e.bounding_box.h/720*100}%`,pointerEvents:"none",transition:"all 0.2s ease-out",boxShadow:"0 0 12px rgba(16, 185, 129, 0.4)",zIndex:3},children:u.jsxs("span",{style:{position:"absolute",top:"-20px",left:"0",background:"#10b981",color:"#fff",fontSize:"0.7rem",fontWeight:700,padding:"1px 6px",borderRadius:"3px",whiteSpace:"nowrap"},children:[e.disease," (",Math.round(e.confidence*100),"%)"]})}):null,e&&u.jsx("div",{style:{position:"absolute",top:"12px",left:"50%",transform:"translateX(-50%)",backgroundColor:e.status==="HUMAN_DETECTED"?"rgba(239, 68, 68, 0.9)":e.status==="DISEASE_RESULT"||e.status==="HEALTHY"?"rgba(16, 185, 129, 0.9)":"rgba(30, 41, 59, 0.88)",border:`1px solid ${e.status==="HUMAN_DETECTED"?"#ef4444":e.status==="DISEASE_RESULT"||e.status==="HEALTHY"?"#10b981":"rgba(245, 158, 11, 0.6)"}`,color:"#fff",padding:"4px 14px",borderRadius:"20px",fontSize:"0.72rem",fontWeight:700,zIndex:10,backdropFilter:"blur(4px)",boxShadow:"0 4px 12px rgba(0,0,0,0.5)",pointerEvents:"none",letterSpacing:"0.02em",whiteSpace:"nowrap"},children:e.status==="HUMAN_DETECTED"?"⚠️ [PERSON DETECTED] Disease analysis: DISABLED":e.status==="NO_VALID_LEAF"?"🌿 [NO VALID LEAF] Disease analysis: IDLE":e.status==="UNSUPPORTED_CROP"?"🚫 [UNSUPPORTED PLANT] Disease analysis: DISABLED":e.status==="LOW_QUALITY"?"🔍 [LOW QUALITY ROI] Move camera closer":e.status==="DISEASE_RESULT"||e.status==="HEALTHY"?"🌱 [SUPPORTED LEAF] Disease analysis: ACTIVE":e.display_name})]})]}),o&&u.jsxs("div",{className:"quick-drive-bar",children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem"},children:[u.jsx("span",{style:{fontSize:"0.75rem",fontWeight:600,color:"var(--text-muted)",textTransform:"uppercase"},children:"Cockpit Drive:"}),u.jsxs("button",{onClick:()=>ft("left"),className:"quick-drive-btn",title:"Steer Left",children:[u.jsx(Ep,{size:13}),u.jsx("span",{children:"Left"})]}),u.jsxs("button",{onClick:()=>ft("forward"),className:"quick-drive-btn",title:"Move Forward",children:[u.jsx(bp,{size:13}),u.jsx("span",{children:"Fwd"})]}),u.jsxs("button",{onClick:()=>ft("backward"),className:"quick-drive-btn",title:"Move Backward",children:[u.jsx(Mp,{size:13}),u.jsx("span",{children:"Back"})]}),u.jsxs("button",{onClick:()=>ft("right"),className:"quick-drive-btn",title:"Steer Right",children:[u.jsx(wp,{size:13}),u.jsx("span",{children:"Right"})]}),u.jsxs("button",{onClick:Ct,className:"quick-drive-btn btn-stop",title:"Halt Motors",children:[u.jsx(Rp,{size:13}),u.jsx("span",{children:"Stop"})]})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[u.jsxs("button",{onClick:()=>L(!P),className:"btn btn-outline",style:{padding:"0.3rem 0.65rem",fontSize:"0.72rem",borderColor:P?"var(--emerald-500)":void 0,color:P?"var(--emerald-400)":"var(--text-muted)"},title:"Toggle automatic 2.5 FPS foliage pathology monitoring",children:[u.jsx(Yx,{size:12}),u.jsxs("span",{children:["Auto-Scan: ",P?"2.5 FPS ON":"OFF"]})]}),u.jsx("div",{style:{fontSize:"0.72rem",color:"var(--text-dim)",fontFamily:"JetBrains Mono, monospace"},children:($e=a==null?void 0:a.actuators)!=null&&$e.motor_state?`MOTORS: ${a.actuators.motor_state}`:"READY"})]})]}),u.jsxs("div",{style:{marginTop:"0.85rem",display:"flex",gap:"0.75rem",justifyContent:"space-between",alignItems:"center"},children:[u.jsx("div",{style:{fontSize:"0.82rem",color:"var(--text-muted)"},children:xe?e?u.jsxs("span",{children:["Last Scan: ",u.jsx("strong",{style:{color:"#fff"},children:e.display_name})," ",u.jsxs("span",{style:{color:"var(--text-dim)"},children:["(",(e.confidence*100).toFixed(0),"% conf)"]})]}):u.jsx("span",{children:"Live optical feed synchronized • Ready for pathology scan"}):u.jsx("span",{style:{color:"var(--amber-400)"},children:"Camera offline (Standby mode)"})}),u.jsx("button",{onClick:ot,disabled:!xe||n,className:"btn btn-primary",style:{padding:"0.65rem 1.4rem",whiteSpace:"nowrap"},title:xe?void 0:"Turn ON camera to perform scan",children:n?u.jsxs(u.Fragment,{children:[u.jsx(ts,{size:16,className:"animate-spin"}),u.jsx("span",{children:"Analyzing Foliage..."})]}):u.jsxs(u.Fragment,{children:[u.jsx(Q1,{size:16}),u.jsx("span",{children:"Capture & AI Scan"})]})})]})]})}),M0=({telemetry:t})=>{var Q,q,H,B,W,Z,re,de,Be,Ce,Ve,J,ne,ve,xe,pe,Ie,Qe,ke,qe,ot,Xe,rt,ft,Ct,le,$e,N,Ke,Ge,R,y,G,X,ee,oe,fe;const[e,n]=ae.useState(!1),i=(t==null?void 0:t.mode)==="REAL_HARDWARE"||(t==null?void 0:t.hardware_mode)==="REAL_HARDWARE",r=!!(t!=null&&t.esp32_connected),s=!i,a=i&&!r,o=t==null?void 0:t.ultrasonic;let l="--",c="--",f="--",p="OFFLINE",d="ROBOT: DISCONNECTED",m=!1;if(s){const z=(o==null?void 0:o.left)??((o==null?void 0:o.distance_cm)!=null?Math.round(o.distance_cm*1.05*10)/10:72),j=(o==null?void 0:o.center)??(o==null?void 0:o.distance_cm)??48,ue=(o==null?void 0:o.right)??((o==null?void 0:o.distance_cm)!=null?Math.round(o.distance_cm*1.15*10)/10:86),we=Math.min(z,j,ue);we<25?p="OBSTACLE":we<=60?p="WARNING":p="SAFE",m=j<25,d=m?"OBSTACLE AHEAD":p,l=`${z.toFixed(1)} cm`,c=`${j.toFixed(1)} cm`,f=`${ue.toFixed(1)} cm`}else if(r){const z=o==null?void 0:o.left,j=(o==null?void 0:o.center)??(o==null?void 0:o.distance_cm),ue=o==null?void 0:o.right;z!=null&&(l=`${Number(z).toFixed(1)} cm`),j!=null&&(c=`${Number(j).toFixed(1)} cm`),ue!=null&&(f=`${Number(ue).toFixed(1)} cm`);const we=j!=null?Number(j):999,te=z!=null?Number(z):999,he=ue!=null?Number(ue):999,Te=Math.min(we,te,he);Te<25?p="OBSTACLE":Te<=60?p="WARNING":p="SAFE",m=we<25,d=m?"OBSTACLE AHEAD":p}let g="--",S="OFFLINE";if(s){let z=42;typeof(t==null?void 0:t.soil_moisture)=="number"?z=t.soil_moisture:((Q=t==null?void 0:t.soil_moisture)==null?void 0:Q.moisture_pct)!=null?z=t.soil_moisture.moisture_pct:((q=t==null?void 0:t.soil_moisture)==null?void 0:q.percentage)!=null&&(z=t.soil_moisture.percentage),z>=70?S="WET":z>=40?S="NORMAL":S="DRY",g=`${z.toFixed(1)}%`}else if(r){let z=t==null?void 0:t.soil_moisture,j=null;typeof z=="number"?j=z:(z==null?void 0:z.moisture_pct)!=null?j=z.moisture_pct:(z==null?void 0:z.percentage)!=null&&(j=z.percentage),j!=null&&(g=`${Number(j).toFixed(1)}%`,j>=70?S="WET":j>=40?S="NORMAL":S="DRY")}let v="--",h="--",_="OFFLINE";if(s){const z=((H=t==null?void 0:t.dht22)==null?void 0:H.temperature)??((B=t==null?void 0:t.environment)==null?void 0:B.temperature_c)??29.4,j=((W=t==null?void 0:t.dht22)==null?void 0:W.humidity)??((Z=t==null?void 0:t.environment)==null?void 0:Z.humidity_pct)??74;v=`${z.toFixed(1)} °C`,h=`${j.toFixed(1)} %`,_="ACTIVE"}else if(r){const z=((re=t==null?void 0:t.dht22)==null?void 0:re.temperature)??((de=t==null?void 0:t.environment)==null?void 0:de.temperature_c),j=((Be=t==null?void 0:t.dht22)==null?void 0:Be.humidity)??((Ce=t==null?void 0:t.environment)==null?void 0:Ce.humidity_pct);z!=null&&(v=`${Number(z).toFixed(1)} °C`),j!=null&&(h=`${Number(j).toFixed(1)} %`),z!=null&&j!=null&&(_="ACTIVE")}let E="--",M="--",b="--",T="--",C="--",x="--",A="--",P="OFFLINE";if(s){const z=((Ve=t==null?void 0:t.mpu6050)==null?void 0:Ve.accel_x)??((J=t==null?void 0:t.imu)==null?void 0:J.ax)??.03,j=((ne=t==null?void 0:t.mpu6050)==null?void 0:ne.accel_y)??((ve=t==null?void 0:t.imu)==null?void 0:ve.ay)??.12,ue=((xe=t==null?void 0:t.mpu6050)==null?void 0:xe.accel_z)??((pe=t==null?void 0:t.imu)==null?void 0:pe.az)??.98,we=((Ie=t==null?void 0:t.mpu6050)==null?void 0:Ie.gyro_x)??((Qe=t==null?void 0:t.imu)==null?void 0:Qe.gx)??1.2,te=((ke=t==null?void 0:t.mpu6050)==null?void 0:ke.gyro_y)??((qe=t==null?void 0:t.imu)==null?void 0:qe.gy)??-.8,he=((ot=t==null?void 0:t.mpu6050)==null?void 0:ot.gyro_z)??((Xe=t==null?void 0:t.imu)==null?void 0:Xe.gz)??.5,Te=((rt=t==null?void 0:t.mpu6050)==null?void 0:rt.pitch_deg)??((ft=t==null?void 0:t.imu)==null?void 0:ft.pitch_deg)??1.2,Oe=((Ct=t==null?void 0:t.mpu6050)==null?void 0:Ct.roll_deg)??((le=t==null?void 0:t.imu)==null?void 0:le.roll_deg)??-.8;E=`${z.toFixed(3)}g`,M=`${j.toFixed(3)}g`,b=`${ue.toFixed(3)}g`,T=`${we.toFixed(1)}°/s`,C=`${te.toFixed(1)}°/s`,x=`${he.toFixed(1)}°/s`,A=`Pitch ${Te.toFixed(1)}° | Roll ${Oe.toFixed(1)}°`,P=(($e=t==null?void 0:t.mpu6050)==null?void 0:$e.tilt_status)??(Math.abs(Te)<5&&Math.abs(Oe)<5?"LEVEL":"TILTED")}else if(r){const z=t==null?void 0:t.mpu6050,j=t==null?void 0:t.imu,ue=(z==null?void 0:z.accel_x)??(j==null?void 0:j.ax),we=(z==null?void 0:z.accel_y)??(j==null?void 0:j.ay),te=(z==null?void 0:z.accel_z)??(j==null?void 0:j.az),he=(z==null?void 0:z.gyro_x)??(j==null?void 0:j.gx),Te=(z==null?void 0:z.gyro_y)??(j==null?void 0:j.gy),Oe=(z==null?void 0:z.gyro_z)??(j==null?void 0:j.gz),Ye=(z==null?void 0:z.pitch_deg)??(j==null?void 0:j.pitch_deg),k=(z==null?void 0:z.roll_deg)??(j==null?void 0:j.roll_deg);ue!=null&&(E=`${Number(ue).toFixed(3)}g`),we!=null&&(M=`${Number(we).toFixed(3)}g`),te!=null&&(b=`${Number(te).toFixed(3)}g`),he!=null&&(T=`${Number(he).toFixed(1)}°/s`),Te!=null&&(C=`${Number(Te).toFixed(1)}°/s`),Oe!=null&&(x=`${Number(Oe).toFixed(1)}°/s`),Ye!=null&&k!=null&&(A=`Pitch ${Number(Ye).toFixed(1)}° | Roll ${Number(k).toFixed(1)}°`,P=(z==null?void 0:z.tilt_status)??(Math.abs(Number(Ye))<5&&Math.abs(Number(k))<5?"LEVEL":"TILTED"))}let L="OFF",O="OFF",U=a?"OFFLINE":"READY";const I=((N=t==null?void 0:t.pump)==null?void 0:N.state)==="ON"||((Ke=t==null?void 0:t.actuators)==null?void 0:Ke.pump_active)===!0;s?(L=((Ge=t==null?void 0:t.pump)==null?void 0:Ge.state)??((R=t==null?void 0:t.actuators)!=null&&R.pump_active?"ON":"OFF"),O=((y=t==null?void 0:t.pump)==null?void 0:y.relay)??L,U=((G=t==null?void 0:t.pump)==null?void 0:G.spray_status)??(I?"ACTIVE":"READY")):r&&(L=((X=t==null?void 0:t.pump)==null?void 0:X.state)??((ee=t==null?void 0:t.actuators)!=null&&ee.pump_active?"ON":"OFF"),O=((oe=t==null?void 0:t.pump)==null?void 0:oe.relay)??L,U=((fe=t==null?void 0:t.pump)==null?void 0:fe.spray_status)??(I?"ACTIVE":"READY"));const V=async z=>{try{n(!0),await fetch("/api/simulation/pump",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({state:z?"ON":"OFF",active:z})})}catch(j){console.error("Failed to toggle simulated pump:",j)}finally{n(!1)}};return u.jsxs("div",{className:"glass-panel",style:{padding:"1.25rem"},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem",flexWrap:"wrap",gap:"0.5rem"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[u.jsx(Ap,{size:18,color:"var(--sky-400)"}),u.jsx("h2",{style:{fontSize:"1.05rem",fontWeight:700,margin:0},children:"Robot Sensor Status"})]}),u.jsx("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:s?u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"status-pill",style:{background:"rgba(56, 189, 248, 0.15)",color:"var(--sky-400)",border:"1px solid rgba(56, 189, 248, 0.3)",fontSize:"0.68rem",fontWeight:700,letterSpacing:"0.04em"},children:"● HARDWARE MODE: SIMULATION"}),u.jsx("span",{className:"status-pill status-warning",style:{fontSize:"0.68rem",fontWeight:700},children:"DATA SOURCE: SIMULATION"})]}):u.jsx("span",{className:`status-pill ${r?"status-online":"status-offline"}`,style:{fontSize:"0.68rem",fontWeight:700},children:r?"● REAL HARDWARE: CONNECTED":"● ROBOT: DISCONNECTED"})})]}),a&&u.jsxs("div",{style:{marginBottom:"1rem",padding:"0.65rem 0.9rem",background:"rgba(244, 63, 94, 0.1)",border:"1px solid rgba(244, 63, 94, 0.3)",borderRadius:"8px",display:"flex",alignItems:"center",gap:"0.6rem",fontSize:"0.75rem",color:"var(--rose-400)"},children:[u.jsx(ds,{size:16,color:"var(--rose-400)",style:{flexShrink:0}}),u.jsxs("span",{children:[u.jsx("strong",{children:"ROBOT: DISCONNECTED"})," — Physical ESP32 hardware is offline. No fake sensor data is generated."]})]}),u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"1rem"},children:[u.jsxs("div",{style:{background:"rgba(0,0,0,0.35)",padding:"0.85rem 1rem",borderRadius:"var(--radius-sm)",border:m?"1px solid var(--rose-500)":"1px solid var(--border-subtle)",display:"flex",flexDirection:"column",justifyContent:"space-between",transition:"border-color 0.2s ease"},children:[u.jsxs("div",{children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.45rem"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.35rem",fontSize:"0.72rem",color:"var(--text-muted)",fontWeight:700},children:[u.jsx(q1,{size:13,color:"var(--sky-400)"}),u.jsx("span",{children:"ULTRASONIC PROXIMITY"})]}),u.jsx("span",{className:`status-pill ${p==="SAFE"?"status-online":p==="WARNING"?"status-warning":"status-offline"}`,style:{fontSize:"0.62rem",padding:"0.15rem 0.45rem",fontWeight:800},children:d})]}),u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"0.5rem",marginTop:"0.35rem"},children:[u.jsxs("div",{style:{background:"rgba(255,255,255,0.03)",padding:"0.45rem 0.6rem",borderRadius:"6px"},children:[u.jsx("div",{style:{fontSize:"0.65rem",color:"var(--text-muted)",marginBottom:"0.15rem"},children:"Left Sensor"}),u.jsx("div",{className:"mono",style:{fontWeight:800,fontSize:"1.05rem",color:"#fff"},children:l})]}),u.jsxs("div",{style:{background:m?"rgba(244, 63, 94, 0.2)":"rgba(255,255,255,0.03)",padding:"0.45rem 0.6rem",borderRadius:"6px",border:m?"1px solid var(--rose-500)":"1px solid transparent"},children:[u.jsx("div",{style:{fontSize:"0.65rem",color:m?"var(--rose-500)":"var(--text-muted)",fontWeight:m?700:400,marginBottom:"0.15rem"},children:"Center Sensor"}),u.jsx("div",{className:"mono",style:{fontWeight:800,fontSize:"1.05rem",color:m?"var(--rose-500)":"var(--amber-400)"},children:c})]}),u.jsxs("div",{style:{background:"rgba(255,255,255,0.03)",padding:"0.45rem 0.6rem",borderRadius:"6px"},children:[u.jsx("div",{style:{fontSize:"0.65rem",color:"var(--text-muted)",marginBottom:"0.15rem"},children:"Right Sensor"}),u.jsx("div",{className:"mono",style:{fontWeight:800,fontSize:"1.05rem",color:"#fff"},children:f})]})]})]}),u.jsxs("div",{style:{marginTop:"0.55rem",paddingTop:"0.4rem",borderTop:"1px solid var(--border-subtle)",display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"0.68rem"},children:[u.jsx("span",{style:{color:"var(--text-dim)"},children:"Obstacle Status:"}),u.jsxs("strong",{style:{color:p==="SAFE"?"var(--emerald-400)":p==="WARNING"?"var(--amber-400)":"var(--rose-500)"},children:[p," ",m?"(OBSTACLE AHEAD)":""]})]})]}),u.jsxs("div",{style:{background:"rgba(0,0,0,0.35)",padding:"0.85rem",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-subtle)",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[u.jsxs("div",{children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.4rem"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.35rem",fontSize:"0.72rem",color:"var(--text-muted)",fontWeight:700},children:[u.jsx(jx,{size:13,color:"var(--sky-400)"}),u.jsx("span",{children:"SOIL MOISTURE"})]}),u.jsx("span",{className:"status-pill",style:{fontSize:"0.62rem",padding:"0.15rem 0.45rem",fontWeight:800,background:S==="NORMAL"?"rgba(16, 185, 129, 0.2)":S==="WET"?"rgba(56, 189, 248, 0.2)":S==="DRY"?"rgba(245, 158, 11, 0.2)":"rgba(244, 63, 94, 0.2)",color:S==="NORMAL"?"var(--emerald-400)":S==="WET"?"var(--sky-400)":S==="DRY"?"var(--amber-400)":"var(--rose-400)",border:`1px solid ${S==="NORMAL"?"rgba(16, 185, 129, 0.35)":S==="WET"?"rgba(56, 189, 248, 0.35)":S==="DRY"?"rgba(245, 158, 11, 0.35)":"rgba(244, 63, 94, 0.35)"}`},children:S})]}),u.jsx("div",{style:{display:"flex",alignItems:"baseline",gap:"0.35rem",margin:"0.35rem 0 0.15rem 0"},children:u.jsx("div",{className:"mono",style:{fontSize:"1.65rem",fontWeight:800,color:"var(--sky-400)",lineHeight:1},children:g})}),u.jsx("div",{style:{fontSize:"0.68rem",color:"var(--text-dim)"},children:"Range: 0–100% (Capacitive sensor)"})]}),u.jsxs("div",{style:{marginTop:"0.65rem",paddingTop:"0.45rem",borderTop:"1px solid var(--border-subtle)",display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"0.68rem"},children:[u.jsx("span",{style:{color:"var(--text-dim)"},children:"Condition:"}),u.jsx("strong",{style:{color:S==="NORMAL"?"var(--emerald-400)":S==="WET"?"var(--sky-400)":S==="DRY"?"var(--amber-400)":"var(--rose-400)"},children:S})]})]}),u.jsxs("div",{style:{background:"rgba(0,0,0,0.35)",padding:"0.85rem",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-subtle)",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[u.jsxs("div",{children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.5rem"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.35rem",fontSize:"0.72rem",color:"var(--text-muted)",fontWeight:700},children:[u.jsx(Pp,{size:13,color:"var(--amber-400)"}),u.jsx("span",{children:"DHT22"})]}),u.jsx("span",{className:`status-pill ${_==="ACTIVE"?"status-online":"status-offline"}`,style:{fontSize:"0.62rem",padding:"0.15rem 0.45rem",fontWeight:800},children:_})]}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.35rem",marginTop:"0.2rem"},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[u.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:"Temperature:"}),u.jsx("span",{className:"mono",style:{fontSize:"1.1rem",fontWeight:800,color:"var(--amber-400)"},children:v})]}),u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[u.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:"Humidity:"}),u.jsx("span",{className:"mono",style:{fontSize:"1.1rem",fontWeight:800,color:"var(--emerald-400)"},children:h})]})]})]}),u.jsxs("div",{style:{marginTop:"0.65rem",paddingTop:"0.45rem",borderTop:"1px solid var(--border-subtle)",display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"0.68rem"},children:[u.jsx("span",{style:{color:"var(--text-dim)"},children:"Sensor Model:"}),u.jsx("span",{style:{color:"var(--text-muted)",fontWeight:600},children:"DHT22 Microclimate"})]})]}),u.jsxs("div",{style:{background:"rgba(0,0,0,0.35)",padding:"0.85rem",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-subtle)",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[u.jsxs("div",{children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.4rem"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.35rem",fontSize:"0.72rem",color:"var(--text-muted)",fontWeight:700},children:[u.jsx(G1,{size:13,color:"var(--emerald-400)"}),u.jsx("span",{children:"MPU6050"})]}),u.jsx("span",{className:`status-pill ${P!=="OFFLINE"?"status-online":"status-offline"}`,style:{fontSize:"0.62rem",padding:"0.15rem 0.45rem",fontWeight:800},children:P})]}),u.jsx("div",{style:{fontSize:"0.68rem",color:"var(--text-dim)",fontWeight:700,marginBottom:"0.15rem"},children:"ACCELEROMETER"}),u.jsxs("div",{style:{display:"flex",gap:"0.4rem",fontSize:"0.72rem",marginBottom:"0.4rem"},children:[u.jsxs("span",{className:"mono",style:{color:"#fff"},children:["X: ",E]}),u.jsxs("span",{className:"mono",style:{color:"#fff"},children:["Y: ",M]}),u.jsxs("span",{className:"mono",style:{color:"var(--sky-400)",fontWeight:700},children:["Z: ",b]})]}),u.jsx("div",{style:{fontSize:"0.68rem",color:"var(--text-dim)",fontWeight:700,marginBottom:"0.15rem"},children:"GYROSCOPE"}),u.jsxs("div",{style:{display:"flex",gap:"0.4rem",fontSize:"0.72rem"},children:[u.jsxs("span",{className:"mono",style:{color:"#fff"},children:["X: ",T]}),u.jsxs("span",{className:"mono",style:{color:"#fff"},children:["Y: ",C]}),u.jsxs("span",{className:"mono",style:{color:"#fff"},children:["Z: ",x]})]})]}),u.jsxs("div",{style:{marginTop:"0.65rem",paddingTop:"0.45rem",borderTop:"1px solid var(--border-subtle)",display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"0.68rem"},children:[u.jsx("span",{style:{color:"var(--text-dim)"},children:"Tilt / Angle:"}),u.jsx("span",{className:"mono",style:{color:"var(--emerald-400)",fontWeight:700},children:A})]})]}),u.jsxs("div",{style:{background:"rgba(0,0,0,0.35)",padding:"0.85rem",borderRadius:"var(--radius-sm)",border:I?"1px solid rgba(16, 185, 129, 0.5)":"1px solid var(--border-subtle)",display:"flex",flexDirection:"column",justifyContent:"space-between",transition:"border-color 0.2s ease"},children:[u.jsxs("div",{children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.45rem"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.35rem",fontSize:"0.72rem",color:"var(--text-muted)",fontWeight:700},children:[u.jsx(ko,{size:13,color:"var(--amber-400)"}),u.jsx("span",{children:"SPRAY SYSTEM"})]}),u.jsx("span",{className:`status-pill ${I?"status-online":"status-offline"}`,style:{fontSize:"0.62rem",padding:"0.15rem 0.45rem",fontWeight:800},children:U})]}),u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"0.78rem",marginBottom:"0.35rem"},children:[u.jsx("span",{style:{color:"var(--text-muted)"},children:"Pump:"}),u.jsx("strong",{style:{color:I?"var(--emerald-400)":"var(--text-dim)",fontWeight:800},children:L})]}),u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"0.78rem",marginBottom:"0.6rem"},children:[u.jsx("span",{style:{color:"var(--text-muted)"},children:"Relay:"}),u.jsx("strong",{style:{color:I?"var(--emerald-400)":"var(--text-dim)",fontWeight:800},children:O})]}),u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.4rem",marginTop:"0.3rem"},children:[u.jsx("button",{type:"button",disabled:e||I||a,onClick:()=>V(!0),className:"btn",style:{padding:"0.4rem 0.5rem",fontSize:"0.72rem",fontWeight:800,background:I?"rgba(16, 185, 129, 0.4)":"rgba(16, 185, 129, 0.15)",color:"#fff",border:I?"1px solid var(--emerald-400)":"1px solid rgba(16, 185, 129, 0.3)",borderRadius:"6px",cursor:I||a?"default":"pointer",opacity:I||a?.6:.85},children:"PUMP ON"}),u.jsx("button",{type:"button",disabled:e||!I||a,onClick:()=>V(!1),className:"btn",style:{padding:"0.4rem 0.5rem",fontSize:"0.72rem",fontWeight:800,background:I?"rgba(244, 63, 94, 0.15)":"rgba(255, 255, 255, 0.15)",color:I?"var(--rose-500)":"#fff",border:I?"1px solid rgba(244, 63, 94, 0.3)":"1px solid rgba(255, 255, 255, 0.3)",borderRadius:"6px",cursor:!I||a?"default":"pointer",opacity:!I||a?.6:.85},children:"PUMP OFF"})]})]}),u.jsxs("div",{style:{marginTop:"0.65rem",paddingTop:"0.45rem",borderTop:"1px solid var(--border-subtle)",fontSize:"0.65rem",color:"var(--text-dim)"},children:["SPRAY STATUS: ",u.jsx("strong",{style:{color:I?"var(--emerald-400)":"var(--text-muted)"},children:U})," (",s?"Simulation mode":"Real hardware",")"]})]})]}),s&&u.jsxs("div",{style:{marginTop:"0.85rem",padding:"0.4rem 0.75rem",background:"rgba(56, 189, 248, 0.06)",borderRadius:"var(--radius-sm)",border:"1px solid rgba(56, 189, 248, 0.2)",display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:"0.68rem",color:"var(--text-muted)"},children:[u.jsxs("span",{children:[u.jsx("strong",{style:{color:"var(--sky-400)"},children:"SIMULATED DATA:"})," Sensor telemetry is dynamically generated by the Simulation Telemetry Provider. No real liquid is actuated."]}),u.jsx("span",{className:"mono",style:{color:"var(--text-dim)"},children:"Target: 6.6 Hz continuous telemetry"})]})]})},SM=({telemetry:t,onMove:e,onStop:n,onEmergencyStop:i,onSprayApprove:r})=>{var Ve,J,ne,ve,xe,pe,Ie,Qe,ke,qe,ot,Xe,rt,ft,Ct;const[s,a]=ae.useState(130),[o,l]=ae.useState(null),[c,f]=ae.useState(null),[p,d]=ae.useState(!1),[m,g]=ae.useState("192.168.4.1"),[S,v]=ae.useState(null),[h,_]=ae.useState(!1),[E,M]=ae.useState(""),[b,T]=ae.useState("REAL_HARDWARE"),C=ae.useRef(null),x=ae.useRef(0),A=ae.useRef(null);ae.useEffect(()=>{_M().then(le=>{le&&le.mode&&T(le.mode)}).catch(()=>{})},[]);const P=(t==null?void 0:t.esp32_connected)??!1,L=((Ve=t==null?void 0:t.safety)==null?void 0:Ve.emergency_stop)??!1,O=((J=t==null?void 0:t.ultrasonic)==null?void 0:J.obstacle_detected)??!1,U=((ne=t==null?void 0:t.ultrasonic)==null?void 0:ne.distance_cm)??null,I=((ve=t==null?void 0:t.actuators)==null?void 0:ve.motor_state)??"STOPPED",V=((xe=t==null?void 0:t.actuators)==null?void 0:xe.pump_active)??!1,Q=((pe=t==null?void 0:t.actuators)==null?void 0:pe.valve_open)??!1,q=((Ie=t==null?void 0:t.actuators)==null?void 0:Ie.flow_rate_ml_s)??0,H=ae.useCallback(async()=>{A.current&&(clearTimeout(A.current),A.current=null),l(null),C.current=null;try{await n()}catch(le){console.error("Stop command error:",le)}},[n]),B=ae.useCallback(async(le,$e=0)=>{if(!L){if(b==="REAL_HARDWARE"&&!P){console.warn("Real hardware is selected but ESP32 is offline. Motion command blocked.");return}if(le==="stop"){await H();return}l(le),C.current=le;try{await e(le,s,$e)}catch(N){console.error("Movement command error:",N)}}},[L,s,e,H]),W=ae.useCallback(le=>{if(["INPUT","TEXTAREA"].includes(le.target.tagName)||L)return;let $e=null;if(le.key==="ArrowUp"||le.key==="w"||le.key==="W")$e="forward";else if(le.key==="ArrowDown"||le.key==="s"||le.key==="S")$e="backward";else if(le.key==="ArrowLeft"||le.key==="a"||le.key==="A")$e="left";else if(le.key==="ArrowRight"||le.key==="d"||le.key==="D")$e="right";else if(le.key===" "||le.code==="Space"){le.preventDefault(),H();return}$e&&C.current!==$e&&(le.preventDefault(),B($e))},[L,B,H]),Z=ae.useCallback(le=>{if(["INPUT","TEXTAREA"].includes(le.target.tagName))return;["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","w","W","s","S","a","A","d","D"].includes(le.key)&&(le.preventDefault(),H())},[H]);ae.useEffect(()=>(window.addEventListener("keydown",W),window.addEventListener("keyup",Z),()=>{window.removeEventListener("keydown",W),window.removeEventListener("keyup",Z)}),[W,Z]);const re=async le=>{L||(x.current=Date.now(),await B(le))},de=async le=>{Date.now()-x.current<220&&le&&le!=="stop"?(A.current&&clearTimeout(A.current),A.current=setTimeout(()=>{C.current===le&&H()},450)):await H()},Be=async(le,$e=250)=>{if(!L){l(le),C.current=le;try{await e(le,Math.min(s,140),$e),setTimeout(()=>{C.current===le&&(l(null),C.current=null)},$e)}catch(N){console.error("Nudge command error:",N)}}},Ce=async()=>{try{if((await xM(m)).ok){d(!1);const $e=await vM();f($e)}}catch{alert("Failed to update ESP32 IP address.")}};return u.jsxs("div",{className:"glass-panel",style:{padding:"1.25rem"},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"0.5rem",marginBottom:"1rem"},children:[u.jsxs("div",{children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[u.jsx(Yx,{size:20,color:"var(--emerald-400)"}),u.jsx("h2",{style:{fontSize:"1.15rem",fontWeight:800,margin:0},children:"Field Remote Controller"}),u.jsx("span",{className:"status-pill status-online",style:{fontSize:"0.65rem"},children:"4WD CHASSIS"})]}),u.jsxs("p",{style:{fontSize:"0.75rem",color:"var(--text-muted)",margin:"2px 0 0 0"},children:[u.jsx("strong",{children:"Operating Mode:"})," Remote-controlled from the field site over a local Wi-Fi network."]})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[u.jsx("button",{onClick:async()=>{const le=b==="REAL_HARDWARE"?"SIMULATION":"REAL_HARDWARE";try{await yM(le),T(le)}catch($e){console.error("Mode switch error:",$e)}},className:"btn btn-outline",style:{padding:"0.25rem 0.5rem",fontSize:"0.7rem",borderColor:b==="REAL_HARDWARE"?"var(--emerald-500)":"var(--amber-500)",color:b==="REAL_HARDWARE"?"var(--emerald-400)":"var(--amber-400)"},title:"Toggle between Real ESP32 Hardware and Simulation Sandbox",children:u.jsx("span",{children:b==="REAL_HARDWARE"?"REAL HARDWARE":"SIMULATION"})}),u.jsxs("button",{onClick:()=>d(!0),className:"btn btn-outline",style:{padding:"0.25rem 0.5rem",fontSize:"0.72rem"},title:"Configure Local Field Wi-Fi (Option A / Option B)",children:[u.jsx(Lr,{size:13,color:"var(--emerald-400)"}),u.jsx("span",{children:"Wi-Fi Setup"})]}),u.jsxs("div",{className:`status-pill ${b==="REAL_HARDWARE"?P?"status-online":"status-offline":"status-warning"}`,style:{fontSize:"0.7rem"},children:[u.jsx(uu,{size:12,className:h?"animate-pulse":""}),u.jsx("span",{children:b==="REAL_HARDWARE"?P?`CONNECTED ${S?`(${S}ms)`:""}`:"ROBOT OFFLINE":"SIMULATED ROBOT"})]})]})]}),u.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"10px",alignItems:"center",padding:"0.4rem 0.75rem",background:"rgba(0, 0, 0, 0.25)",borderRadius:"8px",border:"1px solid var(--border-subtle)",marginBottom:"1rem",fontSize:"0.72rem"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px",color:"var(--text-muted)"},children:[u.jsx(Lr,{size:12,color:"var(--emerald-400)"}),u.jsx("span",{children:"Wi-Fi:"}),u.jsx("strong",{className:"mono",style:{color:"#fff"},children:m||"192.168.4.1"})]}),u.jsx("div",{style:{width:"1px",height:"14px",background:"var(--border-subtle)"}}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[u.jsxs("span",{children:["NPK:"," ",u.jsx("strong",{style:{color:(Qe=t==null?void 0:t.npk)!=null&&Qe.valid?"var(--emerald-400)":"var(--text-dim)"},children:(ke=t==null?void 0:t.npk)!=null&&ke.valid?"ONLINE":"OFFLINE"})]}),u.jsxs("span",{children:["Soil:"," ",u.jsx("strong",{style:{color:(typeof(t==null?void 0:t.soil_moisture)=="number"?t.soil_moisture:(qe=t==null?void 0:t.soil_moisture)==null?void 0:qe.moisture_pct)!=null?"var(--emerald-400)":"var(--text-dim)"},children:(typeof(t==null?void 0:t.soil_moisture)=="number"?t.soil_moisture:(ot=t==null?void 0:t.soil_moisture)==null?void 0:ot.moisture_pct)!=null?"ONLINE":"OFFLINE"})]}),u.jsxs("span",{children:["IMU:"," ",u.jsx("strong",{style:{color:((Xe=t==null?void 0:t.imu)==null?void 0:Xe.pitch_deg)!==null&&((rt=t==null?void 0:t.imu)==null?void 0:rt.valid)!==!1?"var(--emerald-400)":"var(--text-dim)"},children:((ft=t==null?void 0:t.imu)==null?void 0:ft.pitch_deg)!==null&&((Ct=t==null?void 0:t.imu)==null?void 0:Ct.valid)!==!1?"ONLINE":"OFFLINE"})]})]}),u.jsx("div",{style:{width:"1px",height:"14px",background:"var(--border-subtle)"}}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[u.jsxs("span",{children:["Pump:"," ",u.jsx("strong",{style:{color:V?"var(--amber-400)":"var(--text-dim)"},children:V?"ON":"OFF"})]}),u.jsxs("span",{children:["Valve:"," ",u.jsx("strong",{style:{color:Q?"var(--amber-400)":"var(--text-dim)"},children:Q?"OPEN":"CLOSED"})]})]})]}),L&&u.jsxs("div",{style:{marginBottom:"1rem",padding:"0.75rem 1rem",borderRadius:"8px",background:"rgba(239, 68, 68, 0.2)",border:"1px solid var(--rose-500)",color:"#fff",fontSize:"0.8rem",display:"flex",alignItems:"center",gap:"0.75rem"},children:[u.jsx(du,{size:20,color:"var(--rose-500)"}),u.jsxs("div",{children:[u.jsx("strong",{children:"PHYSICAL EMERGENCY STOP ENGAGED:"}),u.jsx("div",{style:{fontSize:"0.72rem",color:"rgba(255,255,255,0.8)"},children:"Hardware safety switch is tripped. All motor PWM and chemical pump actuation are hardware locked."})]})]}),O&&!L&&u.jsxs("div",{style:{marginBottom:"1rem",padding:"0.6rem 0.85rem",borderRadius:"8px",background:"rgba(245, 158, 11, 0.15)",border:"1px solid var(--amber-400)",color:"#fff",fontSize:"0.78rem",display:"flex",alignItems:"center",gap:"0.6rem"},children:[u.jsx(ds,{size:18,color:"var(--amber-400)"}),u.jsxs("div",{children:[u.jsxs("strong",{children:["Obstacle Detected (",U?`${U.toFixed(1)} cm`:"< 25 cm","):"]}),u.jsx("span",{style:{fontSize:"0.72rem",color:"rgba(255,255,255,0.8)",marginLeft:"4px"},children:"Forward motion proximity limit reached. Steer clear or reverse."})]})]}),u.jsxs("div",{style:{background:"rgba(0,0,0,0.3)",borderRadius:"var(--radius-md)",border:"1px solid var(--border-subtle)",padding:"1.25rem",marginBottom:"1rem",display:"flex",flexDirection:"column",alignItems:"center"},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",width:"100%",maxWidth:"320px",marginBottom:"0.85rem",fontSize:"0.75rem",color:"var(--text-muted)"},children:[u.jsxs("span",{children:["Active State:"," ",u.jsx("strong",{className:"mono",style:{color:o||I!=="STOPPED"?"var(--emerald-400)":"#fff",textShadow:o?"0 0 10px rgba(16, 185, 129, 0.5)":"none"},children:o?o.toUpperCase():I})]}),u.jsxs("span",{children:["Watchdog: ",u.jsx("strong",{className:"mono",style:{color:"var(--sky-400)"},children:"1500ms Active"})]})]}),u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 80px)",gridTemplateRows:"repeat(3, 80px)",gap:"12px",touchAction:"manipulation",userSelect:"none",WebkitUserSelect:"none"},children:[u.jsx("div",{}),u.jsxs("button",{onPointerDown:()=>re("forward"),onPointerUp:()=>de("forward"),onPointerLeave:()=>de(),onPointerCancel:()=>de(),onClick:le=>{le.preventDefault(),C.current||Be("forward",450)},disabled:L,style:{background:o==="forward"?"var(--emerald-500)":"rgba(255, 255, 255, 0.08)",color:o==="forward"?"#000":"#fff",border:`2px solid ${o==="forward"?"var(--emerald-400)":"rgba(255, 255, 255, 0.15)"}`,borderRadius:"16px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:L?"not-allowed":"pointer",transition:"all 0.15s ease",boxShadow:o==="forward"?"0 0 20px var(--emerald-glow)":"none",touchAction:"none"},title:"Drive Forward (Click or Hold W / Up Arrow)",children:[u.jsx(bp,{size:30}),u.jsx("span",{style:{fontSize:"0.7rem",fontWeight:800,marginTop:"2px"},children:"FWD"})]}),u.jsx("div",{}),u.jsxs("button",{onPointerDown:()=>re("left"),onPointerUp:()=>de("left"),onPointerLeave:()=>de(),onPointerCancel:()=>de(),onClick:le=>{le.preventDefault(),C.current||Be("left",450)},disabled:L,style:{background:o==="left"?"var(--emerald-500)":"rgba(255, 255, 255, 0.08)",color:o==="left"?"#000":"#fff",border:`2px solid ${o==="left"?"var(--emerald-400)":"rgba(255, 255, 255, 0.15)"}`,borderRadius:"16px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:L?"not-allowed":"pointer",transition:"all 0.15s ease",boxShadow:o==="left"?"0 0 20px var(--emerald-glow)":"none",touchAction:"none"},title:"Turn Left (Click or Hold A / Left Arrow)",children:[u.jsx(Ep,{size:30}),u.jsx("span",{style:{fontSize:"0.7rem",fontWeight:800,marginTop:"2px"},children:"LEFT"})]}),u.jsxs("button",{onClick:le=>{le.preventDefault(),H()},disabled:L,style:{background:"linear-gradient(135deg, rgba(239, 68, 68, 0.4) 0%, rgba(185, 28, 28, 0.6) 100%)",color:"#fff",border:"2px solid var(--rose-500)",borderRadius:"16px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:L?"not-allowed":"pointer",transition:"all 0.15s ease",boxShadow:"0 0 15px rgba(239, 68, 68, 0.4)"},title:"Instant Stop (Click or Spacebar)",children:[u.jsx(Rp,{size:26,color:"#fff"}),u.jsx("span",{style:{fontSize:"0.75rem",fontWeight:900,marginTop:"2px",letterSpacing:"0.05em"},children:"STOP"})]}),u.jsxs("button",{onPointerDown:()=>re("right"),onPointerUp:()=>de("right"),onPointerLeave:()=>de(),onPointerCancel:()=>de(),onClick:le=>{le.preventDefault(),C.current||Be("right",450)},disabled:L,style:{background:o==="right"?"var(--emerald-500)":"rgba(255, 255, 255, 0.08)",color:o==="right"?"#000":"#fff",border:`2px solid ${o==="right"?"var(--emerald-400)":"rgba(255, 255, 255, 0.15)"}`,borderRadius:"16px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:L?"not-allowed":"pointer",transition:"all 0.15s ease",boxShadow:o==="right"?"0 0 20px var(--emerald-glow)":"none",touchAction:"none"},title:"Turn Right (Click or Hold D / Right Arrow)",children:[u.jsx(wp,{size:30}),u.jsx("span",{style:{fontSize:"0.7rem",fontWeight:800,marginTop:"2px"},children:"RIGHT"})]}),u.jsx("div",{}),u.jsxs("button",{onPointerDown:()=>re("backward"),onPointerUp:()=>de("backward"),onPointerLeave:()=>de(),onPointerCancel:()=>de(),onClick:le=>{le.preventDefault(),C.current||Be("backward",450)},disabled:L,style:{background:o==="backward"?"var(--emerald-500)":"rgba(255, 255, 255, 0.08)",color:o==="backward"?"#000":"#fff",border:`2px solid ${o==="backward"?"var(--emerald-400)":"rgba(255, 255, 255, 0.15)"}`,borderRadius:"16px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:L?"not-allowed":"pointer",transition:"all 0.15s ease",boxShadow:o==="backward"?"0 0 20px var(--emerald-glow)":"none",touchAction:"none"},title:"Drive Backward (Click or Hold S / Down Arrow)",children:[u.jsx(Mp,{size:30}),u.jsx("span",{style:{fontSize:"0.7rem",fontWeight:800,marginTop:"2px"},children:"REV"})]}),u.jsx("div",{})]}),u.jsxs("div",{style:{marginTop:"0.85rem",fontSize:"0.68rem",color:"var(--text-dim)",textAlign:"center"},children:["Keyboard controls: ",u.jsx("span",{className:"mono",children:"W / A / S / D"})," or ",u.jsx("span",{className:"mono",children:"Arrow Keys"})," • ",u.jsx("span",{className:"mono",children:"Space"})," for STOP"]})]}),u.jsxs("div",{style:{background:"rgba(0,0,0,0.25)",padding:"0.85rem",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-subtle)",marginBottom:"1rem"},children:[u.jsx("div",{style:{fontSize:"0.75rem",fontWeight:700,color:"var(--text-muted)",marginBottom:"0.5rem"},children:"Fine Pulse Maneuvering (250ms Precision Nudge):"}),u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"6px"},children:[u.jsx("button",{onClick:()=>Be("forward",250),disabled:L,className:"btn btn-outline",style:{padding:"0.4rem 0.2rem",fontSize:"0.7rem"},children:"Nudge FWD"}),u.jsx("button",{onClick:()=>Be("backward",250),disabled:L,className:"btn btn-outline",style:{padding:"0.4rem 0.2rem",fontSize:"0.7rem"},children:"Nudge REV"}),u.jsx("button",{onClick:()=>Be("left",250),disabled:L,className:"btn btn-outline",style:{padding:"0.4rem 0.2rem",fontSize:"0.7rem"},children:"Nudge LEFT"}),u.jsx("button",{onClick:()=>Be("right",250),disabled:L,className:"btn btn-outline",style:{padding:"0.4rem 0.2rem",fontSize:"0.7rem"},children:"Nudge RIGHT"})]})]}),u.jsxs("div",{style:{background:"rgba(0,0,0,0.25)",padding:"0.85rem 1rem",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-subtle)",marginBottom:"1rem"},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.5rem"},children:[u.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)",fontWeight:600},children:"Motor Drive Speed (PWM):"}),u.jsxs("span",{className:"mono",style:{fontSize:"0.85rem",fontWeight:800,color:"var(--emerald-400)"},children:[s," / 255 PWM"]})]}),u.jsx("input",{type:"range",min:"80",max:"255",value:s,onChange:le=>a(Number(le.target.value)),disabled:!P||L,style:{width:"100%",accentColor:"var(--emerald-500)",cursor:"pointer"}}),u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"6px",marginTop:"0.5rem"},children:[u.jsx("button",{onClick:()=>a(90),className:"btn btn-outline",style:{padding:"0.25rem",fontSize:"0.65rem",background:s===90?"rgba(16, 185, 129, 0.2)":"transparent"},children:"Creep (90)"}),u.jsx("button",{onClick:()=>a(130),className:"btn btn-outline",style:{padding:"0.25rem",fontSize:"0.65rem",background:s===130?"rgba(16, 185, 129, 0.2)":"transparent"},children:"Scout (130)"}),u.jsx("button",{onClick:()=>a(180),className:"btn btn-outline",style:{padding:"0.25rem",fontSize:"0.65rem",background:s===180?"rgba(16, 185, 129, 0.2)":"transparent"},children:"Transit (180)"}),u.jsx("button",{onClick:()=>a(255),className:"btn btn-outline",style:{padding:"0.25rem",fontSize:"0.65rem",background:s===255?"rgba(16, 185, 129, 0.2)":"transparent"},children:"Max (255)"})]})]}),u.jsxs("div",{style:{background:"rgba(0,0,0,0.3)",padding:"0.85rem 1rem",borderRadius:"var(--radius-sm)",border:"1px solid rgba(245, 158, 11, 0.3)",position:"relative"},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.4rem"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem"},children:[u.jsx(ko,{size:16,color:"var(--amber-400)"}),u.jsx("span",{style:{fontSize:"0.8rem",fontWeight:800,color:"#fff"},children:"Precision Spray Actuation (Protected)"})]}),u.jsx("span",{style:{fontSize:"0.65rem",padding:"2px 6px",borderRadius:"4px",background:V?"rgba(16, 185, 129, 0.25)":"rgba(255, 255, 255, 0.08)",color:V?"var(--emerald-400)":"var(--text-dim)",fontWeight:700},children:V?"ACTUATING":"LOCKED"})]}),u.jsx("p",{style:{fontSize:"0.72rem",color:"var(--text-muted)",margin:"0 0 0.5rem 0"},children:"Chemical spray requires formal AI diagnosis and on-site farmer approval. Spray buttons cannot be triggered in driving mode without verified prescription."}),u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"0.7rem",color:"var(--text-dim)",paddingTop:"0.4rem",borderTop:"1px solid var(--border-subtle)"},children:[u.jsxs("span",{children:["Pump State: ",u.jsx("strong",{style:{color:V?"var(--emerald-400)":"#fff"},children:V?"ACTIVE":"OFF"})]}),u.jsxs("span",{children:["Solenoid Valve: ",u.jsx("strong",{style:{color:Q?"var(--emerald-400)":"#fff"},children:Q?"OPEN":"CLOSED"})]}),u.jsxs("span",{children:["Flow Rate: ",u.jsxs("strong",{className:"mono",style:{color:q>0?"var(--emerald-400)":"#fff"},children:[q.toFixed(1)," mL/s"]})]})]})]}),p&&u.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.85)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999,padding:"1rem"},children:u.jsxs("div",{className:"glass-panel",style:{maxWidth:"520px",width:"100%",padding:"1.5rem",background:"var(--bg-secondary)",border:"1px solid var(--border-active)"},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[u.jsx(Lr,{size:20,color:"var(--emerald-400)"}),u.jsx("h3",{style:{fontSize:"1.1rem",fontWeight:800,margin:0},children:"Field-Site Local Wi-Fi Setup"})]}),u.jsx("button",{onClick:()=>d(!1),className:"btn btn-outline",style:{padding:"0.2rem 0.5rem",fontSize:"0.75rem"},children:"✕"})]}),u.jsxs("div",{style:{fontSize:"0.8rem",color:"var(--text-muted)",marginBottom:"1rem"},children:["AgriGuard operates ",u.jsx("strong",{children:"without internet connectivity"})," over a local wireless network in the field."]}),u.jsxs("div",{style:{padding:"0.85rem",borderRadius:"8px",background:"rgba(16, 185, 129, 0.08)",border:"1px solid rgba(16, 185, 129, 0.25)",marginBottom:"0.75rem"},children:[u.jsx("div",{style:{fontWeight:700,color:"var(--emerald-400)",fontSize:"0.82rem",marginBottom:"4px"},children:"Option A: Connect to Robot Wi-Fi Hotspot (Direct SoftAP)"}),u.jsxs("div",{style:{fontSize:"0.75rem",color:"#fff"},children:[u.jsxs("div",{children:["Network SSID: ",u.jsx("strong",{className:"mono",style:{color:"var(--emerald-400)"},children:"AgriGuard-Robot"})]}),u.jsxs("div",{children:["Password: ",u.jsx("strong",{className:"mono",children:"agri12345"})]}),u.jsxs("div",{children:["Default ESP32 IP: ",u.jsx("strong",{className:"mono",children:"192.168.4.1"})]})]})]}),u.jsxs("div",{style:{padding:"0.85rem",borderRadius:"8px",background:"rgba(56, 189, 248, 0.08)",border:"1px solid rgba(56, 189, 248, 0.25)",marginBottom:"1rem"},children:[u.jsx("div",{style:{fontWeight:700,color:"var(--sky-400)",fontSize:"0.82rem",marginBottom:"4px"},children:"Option B: Local Field Router / Phone Mobile Hotspot"}),u.jsxs("div",{style:{fontSize:"0.75rem",color:"#fff"},children:[u.jsxs("div",{children:["Laptop LAN IP: ",u.jsx("strong",{className:"mono",style:{color:"var(--sky-400)"},children:(c==null?void 0:c.laptop_lan_ip)??"192.168.1.x"})]}),u.jsxs("div",{children:["Smartphone Dashboard URL: ",u.jsx("strong",{className:"mono",style:{color:"#fff"},children:(c==null?void 0:c.dashboard_mobile_url)??"http://192.168.1.x:8000"})]})]})]}),u.jsxs("div",{style:{marginBottom:"1rem"},children:[u.jsx("label",{style:{display:"block",fontSize:"0.75rem",fontWeight:600,color:"var(--text-muted)",marginBottom:"4px"},children:"Target ESP32 IP Address:"}),u.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[u.jsx("input",{type:"text",value:m,onChange:le=>g(le.target.value),placeholder:"192.168.4.1",className:"mono",style:{flex:1,background:"rgba(0,0,0,0.4)",border:"1px solid var(--border-subtle)",borderRadius:"6px",padding:"0.45rem 0.75rem",color:"#fff",fontSize:"0.85rem"}}),u.jsx("button",{onClick:Ce,className:"btn btn-primary",style:{padding:"0.45rem 1rem",fontSize:"0.8rem"},children:"Save & Connect"})]})]}),u.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:u.jsx("button",{onClick:()=>d(!1),className:"btn btn-outline",style:{padding:"0.45rem 1.25rem",fontSize:"0.8rem"},children:"Close"})})]})})]})},MM=()=>{const[t,e]=ae.useState(null),[n,i]=ae.useState(!1),[r,s]=ae.useState(""),a=async()=>{i(!0);try{const l=await Kx();e(l),s(new Date().toLocaleTimeString())}catch(l){console.error("Diagnostics query failed:",l)}finally{i(!1)}};ae.useEffect(()=>{a();const l=setInterval(a,3e3);return()=>clearInterval(l)},[]);const o=(l,c)=>{const f=c.includes(l.toUpperCase());return u.jsxs("span",{className:`status-pill ${f?"status-online":"status-offline"}`,style:{fontSize:"0.85rem"},children:[f?u.jsx(Wx,{size:14}):u.jsx($x,{size:14}),u.jsx("span",{children:l})]})};return u.jsxs("div",{className:"card animate-fade-in",children:[u.jsxs("div",{className:"card-header",children:[u.jsxs("div",{className:"card-title",children:[u.jsx("div",{className:"card-icon",children:u.jsx(Cp,{size:14})}),"Physical Hardware Diagnostic Suite"]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[u.jsxs("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:["Last polled: ",u.jsx("strong",{style:{color:"var(--text-primary)"},children:r||"Waiting…"})]}),u.jsxs("button",{id:"btn-poll-hardware",onClick:a,disabled:n,className:"btn btn-primary",style:{padding:"5px 12px",fontSize:"0.78rem"},children:[u.jsx(ts,{size:13,style:{animation:n?"spin 1s linear infinite":"none"}}),"Poll Hardware"]})]})]}),u.jsx("p",{style:{fontSize:"0.78rem",color:"var(--text-muted)",padding:"10px 18px",borderBottom:"1px solid var(--border)"},children:"Real hardware verification matrix — live polling of physical buses and interfaces."}),u.jsxs("div",{className:"card-body",style:{padding:0},children:[u.jsx("div",{style:{overflowX:"auto",marginBottom:"1.5rem"},children:u.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",textAlign:"left"},children:[u.jsx("thead",{children:u.jsxs("tr",{style:{borderBottom:"1px solid var(--border)",color:"var(--text-muted)",fontSize:"0.75rem",background:"var(--bg-subtle)"},children:[u.jsx("th",{style:{padding:"0.75rem 1rem"},children:"SUBSYSTEM / INTERFACE"}),u.jsx("th",{style:{padding:"0.75rem 1rem"},children:"PHYSICAL BUS / PROTOCOL"}),u.jsx("th",{style:{padding:"0.75rem 1rem"},children:"PIN / PORT"}),u.jsx("th",{style:{padding:"0.75rem 1rem"},children:"LIVE STATUS"})]})}),u.jsxs("tbody",{style:{fontSize:"0.9rem"},children:[u.jsxs("tr",{style:{borderBottom:"1px solid var(--border)"},children:[u.jsx("td",{style:{padding:"0.85rem 1rem",fontWeight:600},children:"ESP32 Main Controller"}),u.jsx("td",{style:{padding:"0.85rem 1rem",color:"var(--text-muted)"},children:"Wi-Fi 802.11 b/g/n HTTP/WS"}),u.jsx("td",{style:{padding:"0.85rem 1rem",fontFamily:"monospace",fontSize:"0.78rem"},children:"192.168.4.1:80"}),u.jsx("td",{style:{padding:"0.85rem 1rem"},children:t?o(t.esp32,["CONNECTED"]):u.jsx("span",{style:{color:"var(--text-muted)",fontSize:"0.78rem"},children:"Querying..."})})]}),u.jsxs("tr",{style:{borderBottom:"1px solid var(--border)"},children:[u.jsx("td",{style:{padding:"0.85rem 1rem",fontWeight:600},children:"External USB Camera"}),u.jsx("td",{style:{padding:"0.85rem 1rem",color:"var(--text-muted)"},children:"USB 2.0 / V4L2 / DShow"}),u.jsx("td",{style:{padding:"0.85rem 1rem",fontFamily:"monospace",fontSize:"0.78rem"},children:"Video Dev Index 0"}),u.jsx("td",{style:{padding:"0.85rem 1rem"},children:t?o(t.camera,["CONNECTED"]):u.jsx("span",{style:{color:"var(--text-muted)",fontSize:"0.78rem"},children:"Querying..."})})]}),u.jsxs("tr",{style:{borderBottom:"1px solid var(--border)"},children:[u.jsx("td",{style:{padding:"0.85rem 1rem",fontWeight:600},children:"RS485 NPK Soil Probe"}),u.jsx("td",{style:{padding:"0.85rem 1rem",color:"var(--text-muted)"},children:"Modbus RTU over RS485"}),u.jsx("td",{style:{padding:"0.85rem 1rem",fontFamily:"monospace",fontSize:"0.78rem"},children:"GPIO 16(RX) / 17(TX)"}),u.jsx("td",{style:{padding:"0.85rem 1rem"},children:t?o(t.npk,["CONNECTED"]):u.jsx("span",{style:{color:"var(--text-muted)",fontSize:"0.78rem"},children:"Querying..."})})]}),u.jsxs("tr",{style:{borderBottom:"1px solid var(--border)"},children:[u.jsx("td",{style:{padding:"0.85rem 1rem",fontWeight:600},children:"Capacitive Soil Moisture"}),u.jsx("td",{style:{padding:"0.85rem 1rem",color:"var(--text-muted)"},children:"Analog 12-bit ADC"}),u.jsx("td",{style:{padding:"0.85rem 1rem",fontFamily:"monospace",fontSize:"0.78rem"},children:"GPIO 34 (ADC1_CH6)"}),u.jsx("td",{style:{padding:"0.85rem 1rem"},children:t?o(t.soil_moisture,["OK"]):u.jsx("span",{style:{color:"var(--text-muted)",fontSize:"0.78rem"},children:"Querying..."})})]}),u.jsxs("tr",{style:{borderBottom:"1px solid var(--border)"},children:[u.jsx("td",{style:{padding:"0.85rem 1rem",fontWeight:600},children:"Microclimate DHT22"}),u.jsx("td",{style:{padding:"0.85rem 1rem",color:"var(--text-muted)"},children:"Single-Wire Digital Bus"}),u.jsx("td",{style:{padding:"0.85rem 1rem",fontFamily:"monospace",fontSize:"0.78rem"},children:"GPIO 4"}),u.jsx("td",{style:{padding:"0.85rem 1rem"},children:t?o(t.temperature,["OK"]):u.jsx("span",{style:{color:"var(--text-muted)",fontSize:"0.78rem"},children:"Querying..."})})]}),u.jsxs("tr",{style:{borderBottom:"1px solid var(--border)"},children:[u.jsx("td",{style:{padding:"0.85rem 1rem",fontWeight:600},children:"HC-SR04 Ultrasonic Distance"}),u.jsx("td",{style:{padding:"0.85rem 1rem",color:"var(--text-muted)"},children:"GPIO Pulse Timing"}),u.jsx("td",{style:{padding:"0.85rem 1rem",fontFamily:"monospace",fontSize:"0.78rem"},children:"Trig: GPIO 5 / Echo: GPIO 18"}),u.jsx("td",{style:{padding:"0.85rem 1rem"},children:t?o(t.ultrasonic,["OK"]):u.jsx("span",{style:{color:"var(--text-muted)",fontSize:"0.78rem"},children:"Querying..."})})]}),u.jsxs("tr",{style:{borderBottom:"1px solid var(--border)"},children:[u.jsx("td",{style:{padding:"0.85rem 1rem",fontWeight:600},children:"MPU6050 6-DOF IMU"}),u.jsx("td",{style:{padding:"0.85rem 1rem",color:"var(--text-muted)"},children:"I2C Bus (Addr: 0x68)"}),u.jsx("td",{style:{padding:"0.85rem 1rem",fontFamily:"monospace",fontSize:"0.78rem"},children:"SDA: GPIO 21 / SCL: GPIO 22"}),u.jsx("td",{style:{padding:"0.85rem 1rem"},children:t?o(t.imu,["OK"]):u.jsx("span",{style:{color:"var(--text-muted)",fontSize:"0.78rem"},children:"Querying..."})})]}),u.jsxs("tr",{style:{borderBottom:"1px solid var(--border)"},children:[u.jsx("td",{style:{padding:"0.85rem 1rem",fontWeight:600},children:"12V Diaphragm Spray Pump"}),u.jsx("td",{style:{padding:"0.85rem 1rem",color:"var(--text-muted)"},children:"MOSFET Gate Driver"}),u.jsx("td",{style:{padding:"0.85rem 1rem",fontFamily:"monospace",fontSize:"0.78rem"},children:"GPIO 25"}),u.jsx("td",{style:{padding:"0.85rem 1rem"},children:t?o(t.pump,["ON","OFF"]):u.jsx("span",{style:{color:"var(--text-muted)",fontSize:"0.78rem"},children:"Querying..."})})]}),u.jsxs("tr",{style:{borderBottom:"1px solid var(--border)"},children:[u.jsx("td",{style:{padding:"0.85rem 1rem",fontWeight:600},children:"12V Solenoid Shutoff Valve"}),u.jsx("td",{style:{padding:"0.85rem 1rem",color:"var(--text-muted)"},children:"MOSFET Gate Driver"}),u.jsx("td",{style:{padding:"0.85rem 1rem",fontFamily:"monospace",fontSize:"0.78rem"},children:"GPIO 26"}),u.jsx("td",{style:{padding:"0.85rem 1rem"},children:t?o(t.valve,["OPEN","CLOSED"]):u.jsx("span",{style:{color:"var(--text-muted)",fontSize:"0.78rem"},children:"Querying..."})})]}),u.jsxs("tr",{children:[u.jsx("td",{style:{padding:"0.85rem 1rem",fontWeight:600},children:"YF-S401 Liquid Flow Sensor"}),u.jsx("td",{style:{padding:"0.85rem 1rem",color:"var(--text-muted)"},children:"Hardware Pulse Interrupt"}),u.jsx("td",{style:{padding:"0.85rem 1rem",fontFamily:"monospace",fontSize:"0.78rem"},children:"GPIO 27"}),u.jsx("td",{style:{padding:"0.85rem 1rem"},children:t?u.jsx("span",{className:`status-pill ${t.flow!=="NO FLOW"?"status-online":"status-warning"}`,children:t.flow}):u.jsx("span",{style:{color:"var(--text-muted)",fontSize:"0.78rem"},children:"Querying..."})})]})]})]})}),u.jsxs("div",{style:{background:"var(--bg-subtle)",padding:"1rem 1.25rem",margin:"0 0 0 0",borderTop:"1px solid var(--border)"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"},children:[u.jsx(rM,{size:16,color:"var(--green-700)"}),u.jsx("h3",{style:{fontSize:"0.85rem",fontWeight:700,color:"var(--text-primary)"},children:"Physical Payload Inspector (JSON)"})]}),u.jsx("pre",{className:"mono",style:{fontSize:"0.72rem",color:"var(--text-secondary)",overflowX:"auto",maxHeight:"200px",whiteSpace:"pre-wrap",wordBreak:"break-word",margin:0},children:t!=null&&t.raw_telemetry?JSON.stringify(t.raw_telemetry,null,2):"// No physical telemetry packet received"})]})]})]})},EM=({telemetry:t})=>{var d,m,g,S,v,h;const e=(t==null?void 0:t.hardware_mode)==="SIMULATION"||(t==null?void 0:t.mode)==="SIMULATION",n=!!(t!=null&&t.esp32_connected),i=t==null?void 0:t.ultrasonic,r=e?(i==null?void 0:i.left)??72:i==null?void 0:i.left,s=e?(i==null?void 0:i.center)??48:i==null?void 0:i.center,a=e?(i==null?void 0:i.right)??86:i==null?void 0:i.right,o=((d=t==null?void 0:t.dht22)==null?void 0:d.temperature)??((m=t==null?void 0:t.environment)==null?void 0:m.temperature_c)??null,l=((g=t==null?void 0:t.dht22)==null?void 0:g.humidity)??((S=t==null?void 0:t.environment)==null?void 0:S.humidity_pct)??null;let c=null;if(e)c=typeof(t==null?void 0:t.soil_moisture)=="number"?t.soil_moisture:42;else if(n){const _=t==null?void 0:t.soil_moisture;typeof _=="number"?c=_:(_==null?void 0:_.moisture_pct)!=null?c=_.moisture_pct:(_==null?void 0:_.percentage)!=null&&(c=_.percentage)}const f=((v=t==null?void 0:t.imu)==null?void 0:v.pitch_deg)??null,p=((h=t==null?void 0:t.imu)==null?void 0:h.roll_deg)??null;return u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[u.jsxs("div",{className:"card",children:[u.jsx("div",{className:"card-header",children:u.jsxs("div",{className:"card-title",children:[u.jsx("div",{className:"card-icon",children:u.jsx(cu,{size:14})}),"Distance (Ultrasonic)"]})}),u.jsx("div",{className:"card-body",children:u.jsxs("div",{className:"grid-3",children:[u.jsxs("div",{className:"stat-card",style:{boxShadow:"none"},children:[u.jsx("div",{className:"stat-label",children:"Left Ultrasonic"}),u.jsx("div",{className:"stat-value",children:r!=null?`${Number(r).toFixed(1)} cm`:"--"}),u.jsx("div",{className:"stat-meta",children:r!=null&&r<30?"Warning: Close":"Clear"})]}),u.jsxs("div",{className:"stat-card",style:{boxShadow:"none"},children:[u.jsx("div",{className:"stat-label",children:"Front Ultrasonic"}),u.jsx("div",{className:"stat-value",children:s!=null?`${Number(s).toFixed(1)} cm`:"--"}),u.jsx("div",{className:"stat-meta",children:s!=null&&s<30?"Warning: Close":"Clear"})]}),u.jsxs("div",{className:"stat-card",style:{boxShadow:"none"},children:[u.jsx("div",{className:"stat-label",children:"Right Ultrasonic"}),u.jsx("div",{className:"stat-value",children:a!=null?`${Number(a).toFixed(1)} cm`:"--"}),u.jsx("div",{className:"stat-meta",children:a!=null&&a<30?"Warning: Close":"Clear"})]})]})})]}),u.jsxs("div",{className:"grid-2",children:[u.jsxs("div",{className:"card",children:[u.jsx("div",{className:"card-header",children:u.jsxs("div",{className:"card-title",children:[u.jsx("div",{className:"card-icon",children:u.jsx(Pp,{size:14})}),"Environment"]})}),u.jsx("div",{className:"card-body",children:u.jsxs("div",{className:"grid-2",children:[u.jsxs("div",{className:"stat-card",style:{boxShadow:"none"},children:[u.jsx("div",{className:"stat-label",children:"Temperature"}),u.jsx("div",{className:"stat-value",children:o!=null?`${o.toFixed(1)}°C`:"--"}),u.jsx("div",{className:"stat-meta",children:"DHT22"})]}),u.jsxs("div",{className:"stat-card",style:{boxShadow:"none"},children:[u.jsx("div",{className:"stat-label",children:"Humidity"}),u.jsx("div",{className:"stat-value",children:l!=null?`${l.toFixed(0)}%`:"--"}),u.jsx("div",{className:"stat-meta",children:"DHT22"})]})]})})]}),u.jsxs("div",{className:"card",children:[u.jsx("div",{className:"card-header",children:u.jsxs("div",{className:"card-title",children:[u.jsx("div",{className:"card-icon",children:u.jsx(ko,{size:14})}),"Soil"]})}),u.jsx("div",{className:"card-body",children:u.jsxs("div",{className:"stat-card",style:{boxShadow:"none"},children:[u.jsx("div",{className:"stat-label",children:"Soil Moisture"}),u.jsx("div",{className:"stat-value",children:c!=null?`${c.toFixed(1)}%`:"--"}),u.jsx("div",{className:"stat-meta",children:c==null?"Offline":c>=70?"WET":c>=40?"NORMAL":"DRY"})]})})]})]}),u.jsxs("div",{className:"card",children:[u.jsx("div",{className:"card-header",children:u.jsxs("div",{className:"card-title",children:[u.jsx("div",{className:"card-icon",children:u.jsx(Ap,{size:14})}),"Motion (IMU MPU6500)"]})}),u.jsx("div",{className:"card-body",children:u.jsxs("div",{className:"grid-2",children:[u.jsxs("div",{className:"stat-card",style:{boxShadow:"none"},children:[u.jsx("div",{className:"stat-label",children:"Pitch"}),u.jsx("div",{className:"stat-value",children:f!=null?`${f.toFixed(1)}°`:"--"})]}),u.jsxs("div",{className:"stat-card",style:{boxShadow:"none"},children:[u.jsx("div",{className:"stat-label",children:"Roll"}),u.jsx("div",{className:"stat-value",children:p!=null?`${p.toFixed(1)}°`:"--"})]})]})})]})]})},wM=()=>{const[t,e]=ae.useState(null),[n,i]=ae.useState(!1),[r,s]=ae.useState(""),a=async()=>{i(!0);try{const c=await Kx();e(c),s(new Date().toLocaleTimeString())}catch(c){console.error("Diagnostics query failed:",c)}finally{i(!1)}};ae.useEffect(()=>{a();const c=setInterval(a,5e3);return()=>clearInterval(c)},[]);const o=(c,f)=>f.includes(c==null?void 0:c.toUpperCase()),l=({name:c,icon:f,isConnected:p,details:d})=>u.jsxs("div",{className:"card",style:{padding:"16px",display:"flex",alignItems:"flex-start",gap:"14px",cursor:"pointer"},children:[u.jsx("div",{style:{width:40,height:40,borderRadius:"8px",background:p?"var(--green-50)":"var(--danger-bg)",display:"flex",alignItems:"center",justifyContent:"center",color:p?"var(--green-700)":"var(--danger-dark)",flexShrink:0},children:u.jsx(f,{size:20})}),u.jsxs("div",{style:{flex:1,minWidth:0},children:[u.jsx("div",{style:{fontSize:"0.9rem",fontWeight:600,color:"var(--text-primary)",marginBottom:"4px"},children:c}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"0.75rem",fontWeight:600,color:p?"var(--green-600)":"var(--danger)"},children:[u.jsx("span",{style:{width:6,height:6,borderRadius:"50%",background:"currentColor"}}),p?"Connected":"Offline"]}),u.jsx("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)",marginTop:"8px"},children:d})]})]});return u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[u.jsxs("div",{children:[u.jsx("h2",{style:{fontSize:"1.2rem",fontWeight:700,color:"var(--text-primary)"},children:"Device Health"}),u.jsx("p",{style:{fontSize:"0.85rem",color:"var(--text-muted)",marginTop:"4px"},children:"Hardware connection and operational status."})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[u.jsxs("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:["Last polled: ",u.jsx("strong",{style:{color:"var(--text-primary)"},children:r||"Waiting…"})]}),u.jsxs("button",{onClick:a,disabled:n,className:"btn btn-primary",style:{padding:"6px 14px",fontSize:"0.8rem"},children:[u.jsx(ts,{size:14,style:{animation:n?"spin 1s linear infinite":"none"}}),"Refresh"]})]})]}),u.jsxs("div",{className:"grid-3",children:[u.jsx(l,{name:"Arduino Mega",icon:Cp,isConnected:!0,details:"Core movement & sensor polling controller. USB Serial."}),u.jsx(l,{name:"ESP32 WiFi module",icon:Lr,isConnected:t?o(t.esp32,["CONNECTED"]):!1,details:"Telemetry bridge. IP: 192.168.4.1"}),u.jsx(l,{name:"Vision Camera",icon:Tp,isConnected:t?o(t.camera,["CONNECTED"]):!1,details:"USB 2.0 Web Camera (Dev Index 0)"}),u.jsx(l,{name:"Ultrasonic Sensors",icon:cu,isConnected:t?o(t.ultrasonic,["OK"]):!1,details:"HC-SR04 Arrays (3x). GPIO Pulse Timing."}),u.jsx(l,{name:"Soil Probe",icon:ko,isConnected:t?o(t.npk,["CONNECTED"]):!1,details:"RS485 Modbus RTU NPK Probe"}),u.jsx(l,{name:"Environment (DHT22)",icon:nM,isConnected:t?o(t.temperature,["OK"]):!1,details:"Single-Wire Digital Microclimate Bus"})]})]})},bM=[{id:"1",timestamp:new Date(Date.now()-12e3).toISOString(),component:"ESP32_BRIDGE",severity:"INFO",message:"WebSocket connection established on port 8000"},{id:"2",timestamp:new Date(Date.now()-11500).toISOString(),component:"CAMERA_SERVICE",severity:"INFO",message:"Physical camera powered ON and hardware resource claimed"},{id:"3",timestamp:new Date(Date.now()-1e4).toISOString(),component:"ROBOT_CONTROL",severity:"INFO",message:"Mode switched to REAL_HARDWARE"},{id:"4",timestamp:new Date(Date.now()-8e3).toISOString(),component:"AI_INFERENCE",severity:"DEBUG",message:"Model loaded: ag_model_v2_1.pt in 1.2s"},{id:"5",timestamp:new Date(Date.now()-3e3).toISOString(),component:"SENSOR_POLL",severity:"WARNING",message:"NPK sensor response delayed (timeout 500ms)"}],TM=()=>{const[t,e]=ae.useState(bM),[n,i]=ae.useState(""),[r,s]=ae.useState("ALL");ae.useEffect(()=>{const c=setInterval(()=>{const f={id:Math.random().toString(36).substr(2,9),timestamp:new Date().toISOString(),component:"SYSTEM",severity:"INFO",message:"Heartbeat OK"};e(p=>[f,...p].slice(0,100))},15e3);return()=>clearInterval(c)},[]);const a=t.filter(c=>!(r!=="ALL"&&c.severity!==r||n&&!c.message.toLowerCase().includes(n.toLowerCase())&&!c.component.toLowerCase().includes(n.toLowerCase()))),o=c=>{switch(c){case"INFO":return"var(--info)";case"WARNING":return"var(--warning)";case"ERROR":return"var(--danger)";case"DEBUG":return"var(--text-muted)";default:return"var(--text-primary)"}},l=c=>{switch(c){case"INFO":return u.jsx(Ih,{size:14});case"WARNING":return u.jsx(ds,{size:14});case"ERROR":return u.jsx(du,{size:14});case"DEBUG":return u.jsx(k1,{size:14});default:return u.jsx(Ih,{size:14})}};return u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",height:"100%"},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"16px"},children:[u.jsxs("div",{children:[u.jsx("h2",{style:{fontSize:"1.2rem",fontWeight:700,color:"var(--text-primary)"},children:"System Logs"}),u.jsx("p",{style:{fontSize:"0.85rem",color:"var(--text-muted)",marginTop:"4px"},children:"Real-time event stream and diagnostic logs."})]}),u.jsxs("div",{style:{display:"flex",gap:"12px"},children:[u.jsxs("div",{style:{position:"relative"},children:[u.jsx(tM,{size:14,style:{position:"absolute",left:10,top:"50%",transform:"translateY(-50%)",color:"var(--text-muted)"}}),u.jsx("input",{type:"text",className:"input",placeholder:"Search logs...",value:n,onChange:c=>i(c.target.value),style:{paddingLeft:"32px",width:"220px"}})]}),u.jsxs("select",{className:"input",value:r,onChange:c=>s(c.target.value),style:{width:"120px"},children:[u.jsx("option",{value:"ALL",children:"All Levels"}),u.jsx("option",{value:"INFO",children:"INFO"}),u.jsx("option",{value:"WARNING",children:"WARNING"}),u.jsx("option",{value:"ERROR",children:"ERROR"}),u.jsx("option",{value:"DEBUG",children:"DEBUG"})]})]})]}),u.jsx("div",{className:"card",style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:u.jsx("div",{style:{overflowX:"auto",flex:1},children:u.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",textAlign:"left",minWidth:"700px"},children:[u.jsx("thead",{style:{position:"sticky",top:0,background:"var(--bg-subtle)",borderBottom:"1px solid var(--border)"},children:u.jsxs("tr",{children:[u.jsx("th",{style:{padding:"10px 16px",fontSize:"0.75rem",color:"var(--text-muted)",fontWeight:600,width:"180px"},children:"TIMESTAMP"}),u.jsx("th",{style:{padding:"10px 16px",fontSize:"0.75rem",color:"var(--text-muted)",fontWeight:600,width:"120px"},children:"SEVERITY"}),u.jsx("th",{style:{padding:"10px 16px",fontSize:"0.75rem",color:"var(--text-muted)",fontWeight:600,width:"180px"},children:"COMPONENT"}),u.jsx("th",{style:{padding:"10px 16px",fontSize:"0.75rem",color:"var(--text-muted)",fontWeight:600},children:"MESSAGE"})]})}),u.jsxs("tbody",{children:[a.map(c=>u.jsxs("tr",{style:{borderBottom:"1px solid var(--border)",fontSize:"0.8rem"},children:[u.jsx("td",{style:{padding:"10px 16px",color:"var(--text-secondary)",fontFamily:"monospace"},children:new Date(c.timestamp).toLocaleTimeString()}),u.jsx("td",{style:{padding:"10px 16px"},children:u.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"6px",color:o(c.severity),background:"var(--bg-subtle)",padding:"2px 8px",borderRadius:"4px",fontWeight:600,fontSize:"0.7rem"},children:[l(c.severity),c.severity]})}),u.jsx("td",{style:{padding:"10px 16px",color:"var(--text-secondary)",fontWeight:500},children:c.component}),u.jsx("td",{style:{padding:"10px 16px",color:"var(--text-primary)"},children:c.message})]},c.id)),a.length===0&&u.jsx("tr",{children:u.jsx("td",{colSpan:4,style:{padding:"30px",textAlign:"center",color:"var(--text-muted)"},children:"No logs found matching your filters."})})]})]})})})]})},AM=({telemetry:t,onConnectionChange:e})=>{const[n,i]=ae.useState("wifi"),[r,s]=ae.useState(xn.getStatus()),[a,o]=ae.useState(xn.getMode()),[l,c]=ae.useState(zt.WIFI.DEFAULT_IP),[f,p]=ae.useState(String(zt.WIFI.DEFAULT_PORT)),[d,m]=ae.useState(!1),[g,S]=ae.useState(""),v=typeof navigator<"u"&&"bluetooth"in navigator,h=typeof window<"u"?window.isSecureContext:!0,[_,E]=ae.useState(!0);ae.useEffect(()=>{const U=xn.subscribeStatus(I=>{s(I),o(I.mode),I.message&&S(I.message)});return()=>U()},[]);const M=r.state==="CONNECTED"&&a==="REAL_HARDWARE",b=r.state==="CONNECTING"||d,T=r.state==="RECONNECTING",C=U=>{xn.setMode(U),o(U),S(U==="SIMULATION"?"Switched to SIMULATION mode (Safe test sandbox, no hardware required).":"Switched to REAL HARDWARE mode. Connect your physical ESP32 to begin."),e==null||e()},x=async()=>{const U=l.trim(),I=parseInt(f,10)||80;if(!U){S("Please enter a valid ESP32 IP address or hostname (e.g., 192.168.4.1).");return}m(!0),S(`Verifying ESP32 at ${U}:${I}…`);try{await xn.connect("wifi",{ip:U,port:I})||S(`Could not reach ESP32 at ${U}:${I}. Connect PC Wi-Fi to "${zt.WIFI.AP_SSID}".`),e==null||e()}catch(V){S(V.message||"Wi-Fi connection error.")}finally{m(!1)}},A=async()=>{m(!0);try{await xn.disconnect(),S("ESP32 disconnected. Actuators safely stopped."),e==null||e()}catch(U){S(U.message||"Disconnect error.")}finally{m(!1)}},P=async()=>{m(!0),S(`Reconnecting to ESP32 at ${l}…`);try{await xn.reconnect()||S(`Reconnect attempt failed for ${l}. Verify ESP32 power and Wi-Fi connection.`),e==null||e()}catch(U){S(U.message||"Reconnect error.")}finally{m(!1)}},L=async()=>{if(!v){S("Web Bluetooth is not supported in this browser. Please use Chrome, Edge, or Opera on desktop/Android.");return}if(!h){S("Web Bluetooth requires a secure context (HTTPS or http://localhost).");return}m(!0),S('Opening Bluetooth pairing window… select "AgriGuard-Robot"');try{await xn.connect("bluetooth")&&S("Connected to AgriGuard ESP32 via Web Bluetooth! Real hardware telemetry live."),e==null||e()}catch(U){U.name==="NotFoundError"?S("Bluetooth device chooser was cancelled by user."):S(U.message||"Web Bluetooth connection failed.")}finally{m(!1)}};let O="DISCONNECTED";return r.transport==="Wi-Fi"&&(r.state==="CONNECTED"?O="CONNECTED":r.state==="RECONNECTING"?O="RECONNECTING":O="DISCONNECTED"),u.jsxs("div",{className:"glass-panel",style:{padding:"1.25rem",width:"100%",boxSizing:"border-box"},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem",flexWrap:"wrap",gap:"0.75rem"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.65rem"},children:[u.jsx("div",{style:{width:"38px",height:"38px",borderRadius:"10px",background:M?"rgba(16, 185, 129, 0.15)":"rgba(56, 189, 248, 0.15)",border:`1px solid ${M?"rgba(16, 185, 129, 0.35)":"rgba(56, 189, 248, 0.35)"}`,display:"flex",alignItems:"center",justifyContent:"center"},children:u.jsx(K1,{size:20,color:M?"var(--emerald-400)":"var(--sky-400)"})}),u.jsxs("div",{children:[u.jsx("h2",{style:{fontSize:"1.05rem",fontWeight:700,margin:0,display:"flex",alignItems:"center",gap:"0.5rem"},children:"Robot Hardware Connectivity"}),u.jsx("p",{style:{fontSize:"0.75rem",color:"var(--text-muted)",margin:"0.15rem 0 0 0"},children:"Primary: Wi-Fi (SoftAP / LAN) · Optional: Web Bluetooth BLE · Safe Watchdog Interlock"})]})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",background:"rgba(0,0,0,0.3)",padding:"4px",borderRadius:"10px",border:"1px solid var(--border-subtle)"},children:[u.jsx("button",{type:"button",onClick:()=>C("SIMULATION"),style:{padding:"0.35rem 0.8rem",borderRadius:"7px",border:"none",background:a==="SIMULATION"?"var(--sky-500)":"transparent",color:a==="SIMULATION"?"#05080f":"var(--text-muted)",fontSize:"0.74rem",fontWeight:800,cursor:"pointer",transition:"all 0.15s ease"},children:"SIMULATION"}),u.jsx("button",{type:"button",onClick:()=>C("REAL_HARDWARE"),style:{padding:"0.35rem 0.8rem",borderRadius:"7px",border:"none",background:a==="REAL_HARDWARE"?"var(--emerald-500)":"transparent",color:a==="REAL_HARDWARE"?"#05080f":"var(--text-muted)",fontSize:"0.74rem",fontWeight:800,cursor:"pointer",transition:"all 0.15s ease"},children:"REAL HARDWARE"})]})]}),u.jsxs("div",{style:{padding:"0.65rem 0.9rem",borderRadius:"8px",marginBottom:"1rem",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"0.5rem",background:a==="SIMULATION"?"rgba(56, 189, 248, 0.08)":M?"rgba(16, 185, 129, 0.12)":"rgba(244, 63, 94, 0.12)",border:`1px solid ${a==="SIMULATION"?"rgba(56, 189, 248, 0.3)":M?"rgba(16, 185, 129, 0.4)":"rgba(244, 63, 94, 0.4)"}`},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.55rem"},children:[a==="SIMULATION"?u.jsx(uu,{size:16,color:"var(--sky-400)"}):M?u.jsx(Wx,{size:16,color:"var(--emerald-400)"}):u.jsx($x,{size:16,color:"var(--rose-400)"}),u.jsxs("div",{children:[u.jsx("div",{style:{fontSize:"0.82rem",fontWeight:800,color:a==="SIMULATION"?"var(--sky-400)":M?"var(--emerald-400)":"var(--rose-400)"},children:a==="SIMULATION"?"MODE: SIMULATION (Safe Test Sandbox)":M?`ROBOT: CONNECTED via ${r.transport}`:"ROBOT: DISCONNECTED"}),u.jsx("div",{style:{fontSize:"0.72rem",color:"var(--text-muted)"},children:a==="SIMULATION"?"Dynamic physics model active. No physical actuators or liquid pressurized.":M?`Hardware: ${r.deviceName||zt.BLE.DEVICE_NAME} · Ping: ${r.pingMs!=null?`${r.pingMs}ms`:"<10ms"}`:"Physical ESP32 unreachable. Telemetry values set to offline; fake numbers blocked."})]})]}),u.jsx("span",{style:{fontSize:"0.7rem",padding:"0.2rem 0.6rem",borderRadius:"6px",fontWeight:700,background:"rgba(0,0,0,0.3)",color:a==="SIMULATION"?"var(--sky-400)":M?"var(--emerald-400)":"var(--rose-400)"},children:a==="SIMULATION"?"SIMULATION":M?"LIVE ESP32":"HARDWARE OFFLINE"})]}),u.jsxs("div",{style:{display:"flex",gap:"0.5rem",marginBottom:"1rem",background:"rgba(0, 0, 0, 0.25)",padding:"0.3rem",borderRadius:"10px",border:"1px solid var(--border-subtle)",maxWidth:"380px"},children:[u.jsxs("button",{type:"button",onClick:()=>i("wifi"),style:{flex:1,padding:"0.45rem 0.75rem",borderRadius:"7px",border:"none",background:n==="wifi"?"var(--emerald-500)":"transparent",color:n==="wifi"?"#05080f":"var(--text-muted)",fontWeight:700,fontSize:"0.78rem",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"0.45rem",transition:"all 0.15s ease"},children:[u.jsx(Lr,{size:14}),"Wi-Fi (Primary)"]}),u.jsxs("button",{type:"button",onClick:()=>i("bluetooth"),style:{flex:1,padding:"0.45rem 0.75rem",borderRadius:"7px",border:"none",background:n==="bluetooth"?"var(--emerald-500)":"transparent",color:n==="bluetooth"?"#05080f":"var(--text-muted)",fontWeight:700,fontSize:"0.78rem",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"0.45rem",transition:"all 0.15s ease"},children:[u.jsx(id,{size:14}),"Bluetooth BLE (Optional)"]})]}),n==="wifi"&&u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.85rem"},children:u.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.02)",border:"1px solid rgba(255, 255, 255, 0.08)",borderRadius:"10px",padding:"0.85rem"},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.75rem",flexWrap:"wrap",gap:"0.5rem"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem"},children:[u.jsx(Lr,{size:16,color:"var(--emerald-400)"}),u.jsx("span",{style:{fontSize:"0.85rem",fontWeight:700,color:"#fff"},children:"Wi-Fi Connection"})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem"},children:[u.jsx("span",{style:{fontSize:"0.72rem",color:"var(--text-muted)"},children:"Status:"}),u.jsx("span",{style:{fontSize:"0.72rem",fontWeight:800,padding:"0.2rem 0.6rem",borderRadius:"6px",background:O==="CONNECTED"?"rgba(16, 185, 129, 0.2)":O==="RECONNECTING"?"rgba(234, 179, 8, 0.2)":"rgba(244, 63, 94, 0.2)",color:O==="CONNECTED"?"var(--emerald-400)":O==="RECONNECTING"?"var(--amber-400)":"var(--rose-400)",border:`1px solid ${O==="CONNECTED"?"rgba(16, 185, 129, 0.4)":O==="RECONNECTING"?"rgba(234, 179, 8, 0.4)":"rgba(244, 63, 94, 0.4)"}`},children:O})]})]}),u.jsxs("div",{style:{display:"flex",gap:"0.75rem",alignItems:"flex-end",flexWrap:"wrap",marginBottom:"0.75rem"},children:[u.jsxs("div",{style:{flex:"2 1 200px"},children:[u.jsx("label",{style:{fontSize:"0.72rem",color:"var(--text-dim)",fontWeight:600,display:"block",marginBottom:"0.3rem"},children:"Robot IP / Hostname"}),u.jsx("input",{type:"text",value:l,onChange:U=>c(U.target.value),placeholder:"192.168.4.1 or agriguard.local",style:{width:"100%",background:"rgba(255, 255, 255, 0.05)",border:"1px solid rgba(255, 255, 255, 0.15)",borderRadius:"8px",color:"#fff",padding:"0.55rem 0.75rem",fontSize:"0.85rem",fontFamily:"monospace",outline:"none",boxSizing:"border-box"}})]}),u.jsxs("div",{style:{flex:"1 1 90px",maxWidth:"120px"},children:[u.jsx("label",{style:{fontSize:"0.72rem",color:"var(--text-dim)",fontWeight:600,display:"block",marginBottom:"0.3rem"},children:"Port"}),u.jsx("input",{type:"number",value:f,onChange:U=>p(U.target.value),min:1,max:65535,style:{width:"100%",background:"rgba(255, 255, 255, 0.05)",border:"1px solid rgba(255, 255, 255, 0.15)",borderRadius:"8px",color:"#fff",padding:"0.55rem 0.75rem",fontSize:"0.85rem",fontFamily:"monospace",outline:"none",boxSizing:"border-box"}})]}),u.jsxs("div",{style:{display:"flex",gap:"0.45rem",flexWrap:"wrap"},children:[u.jsxs("button",{type:"button",onClick:x,disabled:b,className:"btn btn-primary",style:{height:"38px",padding:"0 1rem",fontSize:"0.78rem",fontWeight:700,display:"flex",alignItems:"center",gap:"0.4rem",cursor:"pointer"},children:[b?u.jsx(x0,{size:13,style:{animation:"spin 1s linear infinite"}}):u.jsx(Lr,{size:13}),"CONNECT"]}),u.jsxs("button",{type:"button",onClick:A,disabled:b||r.state!=="CONNECTED",className:"btn btn-outline",style:{height:"38px",padding:"0 0.85rem",fontSize:"0.78rem",fontWeight:700,display:"flex",alignItems:"center",gap:"0.35rem",color:"var(--rose-400)",borderColor:"rgba(244, 63, 94, 0.35)",cursor:r.state==="CONNECTED"?"pointer":"default",opacity:r.state==="CONNECTED"?1:.5},children:[u.jsx(_0,{size:13}),"DISCONNECT"]}),u.jsxs("button",{type:"button",onClick:P,disabled:b,className:"btn btn-outline",style:{height:"38px",padding:"0 0.85rem",fontSize:"0.78rem",fontWeight:700,display:"flex",alignItems:"center",gap:"0.35rem",color:"var(--sky-400)",borderColor:"rgba(56, 189, 248, 0.35)",cursor:"pointer"},children:[u.jsx(ts,{size:13,className:T?"spin":""}),"RECONNECT"]})]})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem",flexWrap:"wrap"},children:[u.jsx("span",{style:{fontSize:"0.7rem",color:"var(--text-dim)",fontWeight:600},children:"Discovery Presets:"}),[{label:"SoftAP Default (192.168.4.1)",ip:zt.WIFI.DEFAULT_IP},{label:"mDNS (agriguard.local)",ip:zt.WIFI.DEFAULT_HOSTNAME},{label:"LAN Hotspot (192.168.1.100)",ip:"192.168.1.100"}].map(U=>u.jsx("button",{type:"button",onClick:()=>c(U.ip),style:{padding:"0.2rem 0.55rem",borderRadius:"6px",background:"rgba(255, 255, 255, 0.05)",border:"1px solid rgba(255, 255, 255, 0.1)",color:"var(--text-muted)",fontSize:"0.68rem",cursor:"pointer",fontWeight:600},children:U.label},U.label))]})]})}),n==="bluetooth"&&u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.85rem"},children:u.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.02)",border:"1px solid rgba(255, 255, 255, 0.08)",borderRadius:"10px",padding:"0.85rem",display:"flex",flexDirection:"column",gap:"0.75rem"},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"0.5rem"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.45rem"},children:[u.jsx(id,{size:16,color:"var(--emerald-400)"}),u.jsx("span",{style:{fontSize:"0.85rem",fontWeight:700,color:"#fff"},children:"Web Bluetooth (BLE GATT)"})]}),u.jsx("span",{style:{fontSize:"0.7rem",fontWeight:700,padding:"0.15rem 0.5rem",borderRadius:"6px",background:r.transport==="Bluetooth"&&r.state==="CONNECTED"?"rgba(16, 185, 129, 0.2)":"rgba(255, 255, 255, 0.05)",color:r.transport==="Bluetooth"&&r.state==="CONNECTED"?"var(--emerald-400)":"var(--text-muted)"},children:r.transport==="Bluetooth"&&r.state==="CONNECTED"?"CONNECTED":"DISCONNECTED"})]}),!v&&u.jsxs("div",{style:{padding:"0.6rem 0.8rem",borderRadius:"8px",background:"rgba(245, 158, 11, 0.1)",border:"1px solid rgba(245, 158, 11, 0.3)",color:"var(--amber-400)",fontSize:"0.74rem",display:"flex",alignItems:"center",gap:"0.5rem"},children:[u.jsx(ds,{size:15,color:"var(--amber-400)",style:{flexShrink:0}}),u.jsx("span",{children:"Bluetooth not supported in this browser. Please use Chrome, Edge, or Opera on desktop or Android."})]}),!h&&v&&u.jsxs("div",{style:{padding:"0.6rem 0.8rem",borderRadius:"8px",background:"rgba(244, 63, 94, 0.1)",border:"1px solid rgba(244, 63, 94, 0.3)",color:"var(--rose-400)",fontSize:"0.74rem",display:"flex",alignItems:"center",gap:"0.5rem"},children:[u.jsx(ds,{size:15,color:"var(--rose-400)",style:{flexShrink:0}}),u.jsx("span",{children:"Web Bluetooth requires a secure context (HTTPS or http://localhost)."})]}),u.jsxs("p",{style:{fontSize:"0.74rem",color:"var(--text-muted)",margin:0},children:["Connect directly via GATT service ",u.jsxs("code",{style:{color:"var(--emerald-400)",fontSize:"0.7rem"},children:[zt.BLE.SERVICE_UUID.slice(0,18),"…"]}),". User permission dialog will open upon clicking below."]}),u.jsxs("div",{style:{display:"flex",gap:"0.5rem",alignItems:"center",flexWrap:"wrap"},children:[u.jsxs("button",{type:"button",onClick:L,disabled:!v||b,className:"btn btn-primary",style:{height:"38px",padding:"0 1.25rem",fontSize:"0.78rem",fontWeight:800,display:"flex",alignItems:"center",gap:"0.45rem",cursor:v?"pointer":"not-allowed",opacity:v?1:.6},children:[b?u.jsx(x0,{size:13,style:{animation:"spin 1s linear infinite"}}):u.jsx(id,{size:14}),"CONNECT BLUETOOTH"]}),r.transport==="Bluetooth"&&r.state==="CONNECTED"&&u.jsxs("button",{type:"button",onClick:A,className:"btn btn-outline",style:{height:"38px",padding:"0 0.85rem",fontSize:"0.78rem",fontWeight:700,color:"var(--rose-400)",borderColor:"rgba(244, 63, 94, 0.35)",cursor:"pointer"},children:[u.jsx(_0,{size:13}),"DISCONNECT BLE"]})]})]})}),g&&u.jsxs("div",{style:{marginTop:"0.85rem",padding:"0.55rem 0.85rem",borderRadius:"8px",background:M?"rgba(16, 185, 129, 0.1)":"rgba(56, 189, 248, 0.08)",border:`1px solid ${M?"rgba(16, 185, 129, 0.3)":"rgba(56, 189, 248, 0.2)"}`,color:M?"var(--emerald-400)":"var(--text-main)",fontSize:"0.75rem",fontWeight:600,display:"flex",alignItems:"center",gap:"0.5rem"},children:[u.jsx(Ih,{size:14,color:"var(--sky-400)",style:{flexShrink:0}}),u.jsx("span",{children:g})]}),u.jsxs("div",{style:{marginTop:"1rem",background:"rgba(0, 0, 0, 0.25)",border:"1px solid var(--border-subtle)",borderRadius:"10px",overflow:"hidden"},children:[u.jsxs("button",{type:"button",onClick:()=>E(!_),style:{width:"100%",padding:"0.65rem 0.9rem",background:"transparent",border:"none",display:"flex",alignItems:"center",justifyContent:"space-between",color:"var(--text-muted)",cursor:"pointer",fontSize:"0.75rem",fontWeight:700},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.45rem"},children:[u.jsx(Xx,{size:14,color:"var(--emerald-400)"}),u.jsx("span",{children:"Official 8-Step Robot Startup Procedure"})]}),_?u.jsx(B1,{size:14}):u.jsx(z1,{size:14})]}),_&&u.jsx("div",{style:{padding:"0.5rem 0.9rem 0.85rem 0.9rem",borderTop:"1px solid rgba(255, 255, 255, 0.05)"},children:u.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"0.5rem",fontSize:"0.72rem",color:"var(--text-secondary)"},children:[{step:"Step 1",title:"Power on robot",desc:"Engage master 12V LiPo battery switch and ensure physical E-Stop is released."},{step:"Step 2",title:"ESP32 starts Wi-Fi/BLE",desc:`AP SSID "${zt.WIFI.AP_SSID}" broadcast begins within 2 seconds.`},{step:"Step 3",title:"Connect to robot Wi-Fi",desc:`Connect laptop to "${zt.WIFI.AP_SSID}" (Pass: ${zt.WIFI.AP_PASSWORD}).`},{step:"Step 4",title:"Open AgriGuard",desc:"Open AgriGuard dashboard in browser (http://localhost:8000 or IP)."},{step:"Step 5",title:"Select REAL HARDWARE",desc:'Click "REAL HARDWARE" mode toggle button above.'},{step:"Step 6",title:"Connect Wi-Fi or BLE",desc:'Click "CONNECT" for 192.168.4.1 or "CONNECT BLUETOOTH".'},{step:"Step 7",title:"Verify sensor telemetry",desc:"Confirm Ultrasonic (L/C/R), Soil Moisture, DHT22, and MPU6050 are live."},{step:"Step 8",title:"Test STOP",desc:"Verify emergency STOP button safely halts all actuators."}].map(U=>u.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.02)",padding:"0.45rem 0.6rem",borderRadius:"6px",border:"1px solid rgba(255, 255, 255, 0.04)"},children:[u.jsxs("div",{style:{color:"var(--emerald-400)",fontWeight:800,fontSize:"0.68rem",marginBottom:"0.1rem"},children:[U.step,": ",U.title]}),u.jsx("div",{style:{fontSize:"0.68rem",color:"var(--text-muted)"},children:U.desc})]},U.step))})})]})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Np="186",ra={ROTATE:0,DOLLY:1,PAN:2},Ks={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},CM=0,E0=1,RM=2,ac=1,Zx=2,Ya=3,hs=0,In=1,Ri=2,er=0,ro=1,Uh=2,w0=3,b0=4,PM=5,Us=100,NM=101,DM=102,LM=103,IM=104,UM=200,OM=201,FM=202,kM=203,Jx=204,Qx=205,zM=206,BM=207,HM=208,GM=209,VM=210,WM=211,jM=212,XM=213,YM=214,Oh=0,Fh=1,kh=2,Ao=3,zh=4,Bh=5,Hh=6,Gh=7,e_=0,$M=1,qM=2,Ii=0,t_=1,n_=2,i_=3,r_=4,s_=5,a_=6,o_=7,l_=300,fs=301,pa=302,rd=303,sd=304,hu=306,Vh=1e3,Ji=1001,Wh=1002,sn=1003,KM=1004,Sl=1005,fn=1006,ad=1007,ns=1008,zn=1009,c_=1010,u_=1011,Co=1012,Dp=1013,Oi=1014,Pi=1015,Fi=1016,Lp=1017,Ip=1018,Ro=1020,d_=35902,h_=35899,f_=1021,p_=1022,pi=1023,ar=1026,is=1027,m_=1028,Up=1029,ps=1030,Op=1031,Fp=1033,oc=33776,lc=33777,cc=33778,uc=33779,jh=35840,Xh=35841,Yh=35842,$h=35843,qh=36196,Kh=37492,Zh=37496,Jh=37488,Qh=37489,Fc=37490,ef=37491,tf=37808,nf=37809,rf=37810,sf=37811,af=37812,of=37813,lf=37814,cf=37815,uf=37816,df=37817,hf=37818,ff=37819,pf=37820,mf=37821,gf=36492,vf=36494,xf=36495,_f=36283,yf=36284,kc=36285,Sf=36286,ZM=3200,Mf=0,JM=1,Mr="",Zn="srgb",zc="srgb-linear",Bc="linear",Mt="srgb",od=7680,QM=519,eE=512,tE=513,nE=514,kp=515,iE=516,rE=517,zp=518,sE=519,aE=35044,T0="300 es",Ni=2e3,Po=2001;function oE(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Hc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function lE(){const t=Hc("canvas");return t.style.display="block",t}const A0={};function C0(...t){const e="THREE."+t.shift();console.log(e,...t)}function g_(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function je(...t){t=g_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function vt(...t){t=g_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function sa(...t){const e=t.join(" ");e in A0||(A0[e]=!0,je(...t))}function cE(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const uE={[Oh]:Fh,[kh]:Hh,[zh]:Gh,[Ao]:Bh,[Fh]:Oh,[Hh]:kh,[Gh]:zh,[Bh]:Ao};class Hr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let R0=1234567;const so=Math.PI/180,No=180/Math.PI;function _a(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(un[t&255]+un[t>>8&255]+un[t>>16&255]+un[t>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[n&63|128]+un[n>>8&255]+"-"+un[n>>16&255]+un[n>>24&255]+un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]).toLowerCase()}function et(t,e,n){return Math.max(e,Math.min(n,t))}function Bp(t,e){return(t%e+e)%e}function dE(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function hE(t,e,n){return t!==e?(n-t)/(e-t):0}function ao(t,e,n){return(1-n)*t+n*e}function fE(t,e,n,i){return ao(t,e,1-Math.exp(-n*i))}function pE(t,e=1){return e-Math.abs(Bp(t,e*2)-e)}function mE(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function gE(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function vE(t,e){return t+Math.floor(Math.random()*(e-t+1))}function xE(t,e){return t+Math.random()*(e-t)}function _E(t){return t*(.5-Math.random())}function yE(t){t!==void 0&&(R0=t);let e=R0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function SE(t){return t*so}function ME(t){return t*No}function EE(t){return t>0&&Number.isInteger(t)&&2**Math.round(Math.log2(t))===t}function wE(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function bE(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function TE(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),f=a((e+i)/2),p=s((e-i)/2),d=a((e-i)/2),m=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":t.set(o*f,l*p,l*d,o*c);break;case"YZY":t.set(l*d,o*f,l*p,o*c);break;case"ZXZ":t.set(l*p,l*d,o*f,o*c);break;case"XZX":t.set(o*f,l*g,l*m,o*c);break;case"YXY":t.set(l*m,o*f,l*g,o*c);break;case"ZYZ":t.set(l*g,l*m,o*f,o*c);break;default:je("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Os(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function mn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ci={DEG2RAD:so,RAD2DEG:No,generateUUID:_a,clamp:et,euclideanModulo:Bp,mapLinear:dE,inverseLerp:hE,lerp:ao,damp:fE,pingpong:pE,smoothstep:mE,smootherstep:gE,randInt:vE,randFloat:xE,randFloatSpread:_E,seededRandom:yE,degToRad:SE,radToDeg:ME,isPowerOfTwo:EE,ceilPowerOfTwo:wE,floorPowerOfTwo:bE,setQuaternionFromProperEuler:TE,normalize:mn,denormalize:Os},Zp=class Zp{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Zp.prototype.isVector2=!0;let Pe=Zp;class Or{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],f=i[r+2],p=i[r+3],d=s[a+0],m=s[a+1],g=s[a+2],S=s[a+3];if(p!==S||l!==d||c!==m||f!==g){let v=l*d+c*m+f*g+p*S;v<0&&(d=-d,m=-m,g=-g,S=-S,v=-v);let h=1-o;if(v<.9995){const _=Math.acos(v),E=Math.sin(_);h=Math.sin(h*_)/E,o=Math.sin(o*_)/E,l=l*h+d*o,c=c*h+m*o,f=f*h+g*o,p=p*h+S*o}else{l=l*h+d*o,c=c*h+m*o,f=f*h+g*o,p=p*h+S*o;const _=1/Math.sqrt(l*l+c*c+f*f+p*p);l*=_,c*=_,f*=_,p*=_}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],f=i[r+3],p=s[a],d=s[a+1],m=s[a+2],g=s[a+3];return e[n]=o*g+f*p+l*m-c*d,e[n+1]=l*g+f*d+c*p-o*m,e[n+2]=c*g+f*m+o*d-l*p,e[n+3]=f*g-o*p-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(r/2),p=o(s/2),d=l(i/2),m=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=d*f*p+c*m*g,this._y=c*m*p-d*f*g,this._z=c*f*g+d*m*p,this._w=c*f*p-d*m*g;break;case"YXZ":this._x=d*f*p+c*m*g,this._y=c*m*p-d*f*g,this._z=c*f*g-d*m*p,this._w=c*f*p+d*m*g;break;case"ZXY":this._x=d*f*p-c*m*g,this._y=c*m*p+d*f*g,this._z=c*f*g+d*m*p,this._w=c*f*p-d*m*g;break;case"ZYX":this._x=d*f*p-c*m*g,this._y=c*m*p+d*f*g,this._z=c*f*g-d*m*p,this._w=c*f*p+d*m*g;break;case"YZX":this._x=d*f*p+c*m*g,this._y=c*m*p+d*f*g,this._z=c*f*g-d*m*p,this._w=c*f*p-d*m*g;break;case"XZY":this._x=d*f*p-c*m*g,this._y=c*m*p-d*f*g,this._z=c*f*g+d*m*p,this._w=c*f*p+d*m*g;break;default:je("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],f=n[6],p=n[10],d=i+o+p;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>p){const m=2*Math.sqrt(1+i-o-p);this._w=(f-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>p){const m=2*Math.sqrt(1+o-i-p);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+p-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+a*o+r*c-s*l,this._y=r*f+a*l+s*o-i*c,this._z=s*f+a*c+i*l-r*o,this._w=a*f-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Jp=class Jp{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(P0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(P0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),f=2*(o*n-s*r),p=2*(s*i-a*n);return this.x=n+l*c+a*p-o*f,this.y=i+l*f+o*c-s*p,this.z=r+l*p+s*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this.z=et(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this.z=et(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ld.copy(this).projectOnVector(e),this.sub(ld)}reflect(e){return this.sub(ld.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Jp.prototype.isVector3=!0;let D=Jp;const ld=new D,P0=new Or,Qp=class Qp{constructor(e,n,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],f=i[4],p=i[7],d=i[2],m=i[5],g=i[8],S=r[0],v=r[3],h=r[6],_=r[1],E=r[4],M=r[7],b=r[2],T=r[5],C=r[8];return s[0]=a*S+o*_+l*b,s[3]=a*v+o*E+l*T,s[6]=a*h+o*M+l*C,s[1]=c*S+f*_+p*b,s[4]=c*v+f*E+p*T,s[7]=c*h+f*M+p*C,s[2]=d*S+m*_+g*b,s[5]=d*v+m*E+g*T,s[8]=d*h+m*M+g*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return n*a*f-n*o*c-i*s*f+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],p=f*a-o*c,d=o*l-f*s,m=c*s-a*l,g=n*p+i*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/g;return e[0]=p*S,e[1]=(r*c-f*i)*S,e[2]=(o*i-r*a)*S,e[3]=d*S,e[4]=(f*n-r*l)*S,e[5]=(r*s-o*n)*S,e[6]=m*S,e[7]=(i*l-c*n)*S,e[8]=(a*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return sa("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(cd.makeScale(e,n)),this}rotate(e){return sa("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(cd.makeRotation(-e)),this}translate(e,n){return sa("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(cd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Qp.prototype.isMatrix3=!0;let Ze=Qp;const cd=new Ze,N0=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),D0=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function AE(){const t={enabled:!0,workingColorSpace:zc,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Mt&&(r.r=tr(r.r),r.g=tr(r.g),r.b=tr(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Mt&&(r.r=aa(r.r),r.g=aa(r.g),r.b=aa(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Mr?Bc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return sa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return sa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[zc]:{primaries:e,whitePoint:i,transfer:Bc,toXYZ:N0,fromXYZ:D0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Zn},outputColorSpaceConfig:{drawingBufferColorSpace:Zn}},[Zn]:{primaries:e,whitePoint:i,transfer:Mt,toXYZ:N0,fromXYZ:D0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Zn}}}),t}const ct=AE();function tr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function aa(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ms;class CE{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ms===void 0&&(Ms=Hc("canvas")),Ms.width=e.width,Ms.height=e.height;const r=Ms.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ms}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Hc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=tr(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(tr(n[i]/255)*255):n[i]=tr(n[i]);return{data:n,width:e.width,height:e.height}}else return je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let RE=0;class Hp{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:RE++}),this.uuid=_a(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ud(r[a].image)):s.push(ud(r[a]))}else s=ud(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function ud(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?CE.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(je("Texture: Unable to serialize Texture."),{})}let PE=0;const dd=new D;class yn extends Hr{constructor(e=yn.DEFAULT_IMAGE,n=yn.DEFAULT_MAPPING,i=Ji,r=Ji,s=fn,a=ns,o=pi,l=zn,c=yn.DEFAULT_ANISOTROPY,f=Mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:PE++}),this.uuid=_a(),this.name="",this.source=new Hp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(dd).x}get height(){return this.source.getSize(dd).y}get depth(){return this.source.getSize(dd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){je(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){je(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==l_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vh:e.x=e.x-Math.floor(e.x);break;case Ji:e.x=e.x<0?0:1;break;case Wh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vh:e.y=e.y-Math.floor(e.y);break;case Ji:e.y=e.y<0?0:1;break;case Wh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=l_;yn.DEFAULT_ANISOTROPY=1;const em=class em{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],p=l[8],d=l[1],m=l[5],g=l[9],S=l[2],v=l[6],h=l[10];if(Math.abs(f-d)<.01&&Math.abs(p-S)<.01&&Math.abs(g-v)<.01){if(Math.abs(f+d)<.1&&Math.abs(p+S)<.1&&Math.abs(g+v)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(c+1)/2,M=(m+1)/2,b=(h+1)/2,T=(f+d)/4,C=(p+S)/4,x=(g+v)/4;return E>M&&E>b?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=T/i,s=C/i):M>b?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=T/r,s=x/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=C/s,r=x/s),this.set(i,r,s,n),this}let _=Math.sqrt((v-g)*(v-g)+(p-S)*(p-S)+(d-f)*(d-f));return Math.abs(_)<.001&&(_=1),this.x=(v-g)/_,this.y=(p-S)/_,this.z=(d-f)/_,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this.z=et(this.z,e.z,n.z),this.w=et(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this.z=et(this.z,e,n),this.w=et(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};em.prototype.isVector4=!0;let Ot=em;class NE extends Hr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Ot(0,0,e,n),this.scissorTest=!1,this.viewport=new Ot(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new yn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Hp(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vi extends NE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class v_ extends yn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class DE extends yn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Xc=class Xc{constructor(e,n,i,r,s,a,o,l,c,f,p,d,m,g,S,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,f,p,d,m,g,S,v)}set(e,n,i,r,s,a,o,l,c,f,p,d,m,g,S,v){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=f,h[10]=p,h[14]=d,h[3]=m,h[7]=g,h[11]=S,h[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Es.setFromMatrixColumn(e,0).length(),s=1/Es.setFromMatrixColumn(e,1).length(),a=1/Es.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const d=a*f,m=a*p,g=o*f,S=o*p;n[0]=l*f,n[4]=-l*p,n[8]=c,n[1]=m+g*c,n[5]=d-S*c,n[9]=-o*l,n[2]=S-d*c,n[6]=g+m*c,n[10]=a*l}else if(e.order==="YXZ"){const d=l*f,m=l*p,g=c*f,S=c*p;n[0]=d+S*o,n[4]=g*o-m,n[8]=a*c,n[1]=a*p,n[5]=a*f,n[9]=-o,n[2]=m*o-g,n[6]=S+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*f,m=l*p,g=c*f,S=c*p;n[0]=d-S*o,n[4]=-a*p,n[8]=g+m*o,n[1]=m+g*o,n[5]=a*f,n[9]=S-d*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*f,m=a*p,g=o*f,S=o*p;n[0]=l*f,n[4]=g*c-m,n[8]=d*c+S,n[1]=l*p,n[5]=S*c+d,n[9]=m*c-g,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,g=o*l,S=o*c;n[0]=l*f,n[4]=S-d*p,n[8]=g*p+m,n[1]=p,n[5]=a*f,n[9]=-o*f,n[2]=-c*f,n[6]=m*p+g,n[10]=d-S*p}else if(e.order==="XZY"){const d=a*l,m=a*c,g=o*l,S=o*c;n[0]=l*f,n[4]=-p,n[8]=c*f,n[1]=d*p+S,n[5]=a*f,n[9]=m*p-g,n[2]=g*p-m,n[6]=o*f,n[10]=S*p+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(LE,e,IE)}lookAt(e,n,i){const r=this.elements;return Un.subVectors(e,n),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),fr.crossVectors(i,Un),fr.lengthSq()===0&&(Math.abs(i.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),fr.crossVectors(i,Un)),fr.normalize(),Ml.crossVectors(Un,fr),r[0]=fr.x,r[4]=Ml.x,r[8]=Un.x,r[1]=fr.y,r[5]=Ml.y,r[9]=Un.y,r[2]=fr.z,r[6]=Ml.z,r[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],f=i[1],p=i[5],d=i[9],m=i[13],g=i[2],S=i[6],v=i[10],h=i[14],_=i[3],E=i[7],M=i[11],b=i[15],T=r[0],C=r[4],x=r[8],A=r[12],P=r[1],L=r[5],O=r[9],U=r[13],I=r[2],V=r[6],Q=r[10],q=r[14],H=r[3],B=r[7],W=r[11],Z=r[15];return s[0]=a*T+o*P+l*I+c*H,s[4]=a*C+o*L+l*V+c*B,s[8]=a*x+o*O+l*Q+c*W,s[12]=a*A+o*U+l*q+c*Z,s[1]=f*T+p*P+d*I+m*H,s[5]=f*C+p*L+d*V+m*B,s[9]=f*x+p*O+d*Q+m*W,s[13]=f*A+p*U+d*q+m*Z,s[2]=g*T+S*P+v*I+h*H,s[6]=g*C+S*L+v*V+h*B,s[10]=g*x+S*O+v*Q+h*W,s[14]=g*A+S*U+v*q+h*Z,s[3]=_*T+E*P+M*I+b*H,s[7]=_*C+E*L+M*V+b*B,s[11]=_*x+E*O+M*Q+b*W,s[15]=_*A+E*U+M*q+b*Z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],p=e[6],d=e[10],m=e[14],g=e[3],S=e[7],v=e[11],h=e[15],_=l*m-c*d,E=o*m-c*p,M=o*d-l*p,b=a*m-c*f,T=a*d-l*f,C=a*p-o*f;return n*(S*_-v*E+h*M)-i*(g*_-v*b+h*T)+r*(g*E-S*b+h*C)-s*(g*M-S*T+v*C)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],f=e[10];return n*(a*f-o*c)-i*(s*f-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],p=e[9],d=e[10],m=e[11],g=e[12],S=e[13],v=e[14],h=e[15],_=n*o-i*a,E=n*l-r*a,M=n*c-s*a,b=i*l-r*o,T=i*c-s*o,C=r*c-s*l,x=f*S-p*g,A=f*v-d*g,P=f*h-m*g,L=p*v-d*S,O=p*h-m*S,U=d*h-m*v,I=_*U-E*O+M*L+b*P-T*A+C*x;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/I;return e[0]=(o*U-l*O+c*L)*V,e[1]=(r*O-i*U-s*L)*V,e[2]=(S*C-v*T+h*b)*V,e[3]=(d*T-p*C-m*b)*V,e[4]=(l*P-a*U-c*A)*V,e[5]=(n*U-r*P+s*A)*V,e[6]=(v*M-g*C-h*E)*V,e[7]=(f*C-d*M+m*E)*V,e[8]=(a*O-o*P+c*x)*V,e[9]=(i*P-n*O-s*x)*V,e[10]=(g*T-S*M+h*_)*V,e[11]=(p*M-f*T-m*_)*V,e[12]=(o*A-a*L-l*x)*V,e[13]=(n*L-i*A+r*x)*V,e[14]=(S*E-g*b-v*_)*V,e[15]=(f*b-p*E+d*_)*V,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,f=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,f*o+i,f*l-r*a,0,c*l-r*o,f*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,f=a+a,p=o+o,d=s*c,m=s*f,g=s*p,S=a*f,v=a*p,h=o*p,_=l*c,E=l*f,M=l*p,b=i.x,T=i.y,C=i.z;return r[0]=(1-(S+h))*b,r[1]=(m+M)*b,r[2]=(g-E)*b,r[3]=0,r[4]=(m-M)*T,r[5]=(1-(d+h))*T,r[6]=(v+_)*T,r[7]=0,r[8]=(g+E)*C,r[9]=(v-_)*C,r[10]=(1-(d+S))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=Es.set(r[0],r[1],r[2]).length();const o=Es.set(r[4],r[5],r[6]).length(),l=Es.set(r[8],r[9],r[10]).length();s<0&&(a=-a),ai.copy(this);const c=1/a,f=1/o,p=1/l;return ai.elements[0]*=c,ai.elements[1]*=c,ai.elements[2]*=c,ai.elements[4]*=f,ai.elements[5]*=f,ai.elements[6]*=f,ai.elements[8]*=p,ai.elements[9]*=p,ai.elements[10]*=p,n.setFromRotationMatrix(ai),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=Ni,l=!1){const c=this.elements,f=2*s/(n-e),p=2*s/(i-r),d=(n+e)/(n-e),m=(i+r)/(i-r);let g,S;if(l)g=s/(a-s),S=a*s/(a-s);else if(o===Ni)g=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===Po)g=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=p,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Ni,l=!1){const c=this.elements,f=2/(n-e),p=2/(i-r),d=-(n+e)/(n-e),m=-(i+r)/(i-r);let g,S;if(l)g=1/(a-s),S=a/(a-s);else if(o===Ni)g=-2/(a-s),S=-(a+s)/(a-s);else if(o===Po)g=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=p,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Xc.prototype.isMatrix4=!0;let Dt=Xc;const Es=new D,ai=new Dt,LE=new D(0,0,0),IE=new D(1,1,1),fr=new D,Ml=new D,Un=new D,L0=new Dt,I0=new Or;class Fr{constructor(e=0,n=0,i=0,r=Fr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],f=r[9],p=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-et(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:je("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return L0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(L0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return I0.setFromEuler(this),this.setFromQuaternion(I0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fr.DEFAULT_ORDER="XYZ";class x_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let UE=0;const U0=new D,ws=new Or,Hi=new Dt,El=new D,Oa=new D,OE=new D,FE=new Or,O0=new D(1,0,0),F0=new D(0,1,0),k0=new D(0,0,1),z0={type:"added"},kE={type:"removed"},bs={type:"childadded",child:null},hd={type:"childremoved",child:null};class tn extends Hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:UE++}),this.uuid=_a(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const e=new D,n=new Fr,i=new Or,r=new D(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Dt},normalMatrix:{value:new Ze}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new x_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ws.setFromAxisAngle(e,n),this.quaternion.multiply(ws),this}rotateOnWorldAxis(e,n){return ws.setFromAxisAngle(e,n),this.quaternion.premultiply(ws),this}rotateX(e){return this.rotateOnAxis(O0,e)}rotateY(e){return this.rotateOnAxis(F0,e)}rotateZ(e){return this.rotateOnAxis(k0,e)}translateOnAxis(e,n){return U0.copy(e).applyQuaternion(this.quaternion),this.position.add(U0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(O0,e)}translateY(e){return this.translateOnAxis(F0,e)}translateZ(e){return this.translateOnAxis(k0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?El.copy(e):El.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hi.lookAt(Oa,El,this.up):Hi.lookAt(El,Oa,this.up),this.quaternion.setFromRotationMatrix(Hi),r&&(Hi.extractRotation(r.matrixWorld),ws.setFromRotationMatrix(Hi),this.quaternion.premultiply(ws.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(vt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(z0),bs.child=e,this.dispatchEvent(bs),bs.child=null):vt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(kE),hd.child=e,this.dispatchEvent(hd),hd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(z0),bs.child=e,this.dispatchEvent(bs),bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oa,e,OE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oa,FE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),p=a(e.shapes),d=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),p.length>0&&(i.shapes=p),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}tn.DEFAULT_UP=new D(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class qi extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zE={type:"move"};class fd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const v=n.getJointPose(S,i),h=this._getHandJoint(c,S);v!==null&&(h.matrix.fromArray(v.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=v.radius),h.visible=v!==null}const f=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],d=f.position.distanceTo(p.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zE)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new qi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const __={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pr={h:0,s:0,l:0},wl={h:0,s:0,l:0};function pd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class nt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=ct.workingColorSpace){return this.r=e,this.g=n,this.b=i,ct.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=ct.workingColorSpace){if(e=Bp(e,1),n=et(n,0,1),i=et(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=pd(a,s,e+1/3),this.g=pd(a,s,e),this.b=pd(a,s,e-1/3)}return ct.colorSpaceToWorking(this,r),this}setStyle(e,n=Zn){function i(s){s!==void 0&&parseFloat(s)<1&&je("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:je("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Zn){const i=__[e.toLowerCase()];return i!==void 0?this.setHex(i,n):je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}copyLinearToSRGB(e){return this.r=aa(e.r),this.g=aa(e.g),this.b=aa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zn){return ct.workingToColorSpace(dn.copy(this),e),Math.round(et(dn.r*255,0,255))*65536+Math.round(et(dn.g*255,0,255))*256+Math.round(et(dn.b*255,0,255))}getHexString(e=Zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ct.workingColorSpace){ct.workingToColorSpace(dn.copy(this),n);const i=dn.r,r=dn.g,s=dn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const p=a-o;switch(c=f<=.5?p/(a+o):p/(2-a-o),a){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=ct.workingColorSpace){return ct.workingToColorSpace(dn.copy(this),n),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=Zn){ct.workingToColorSpace(dn.copy(this),e);const n=dn.r,i=dn.g,r=dn.b;return e!==Zn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(pr),this.setHSL(pr.h+e,pr.s+n,pr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(pr),e.getHSL(wl);const i=ao(pr.h,wl.h,n),r=ao(pr.s,wl.s,n),s=ao(pr.l,wl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new nt;nt.NAMES=__;class BE extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fr,this.environmentIntensity=1,this.environmentRotation=new Fr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const oi=new D,Gi=new D,md=new D,Vi=new D,Ts=new D,As=new D,B0=new D,gd=new D,vd=new D,xd=new D,_d=new Ot,yd=new Ot,Sd=new Ot;class fi{constructor(e=new D,n=new D,i=new D){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),oi.subVectors(e,n),r.cross(oi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){oi.subVectors(r,n),Gi.subVectors(i,n),md.subVectors(e,n);const a=oi.dot(oi),o=oi.dot(Gi),l=oi.dot(md),c=Gi.dot(Gi),f=Gi.dot(md),p=a*c-o*o;if(p===0)return s.set(0,0,0),null;const d=1/p,m=(c*l-o*f)*d,g=(a*f-o*l)*d;return s.set(1-m-g,g,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Vi.x),l.addScaledVector(a,Vi.y),l.addScaledVector(o,Vi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return _d.setScalar(0),yd.setScalar(0),Sd.setScalar(0),_d.fromBufferAttribute(e,n),yd.fromBufferAttribute(e,i),Sd.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(_d,s.x),a.addScaledVector(yd,s.y),a.addScaledVector(Sd,s.z),a}static isFrontFacing(e,n,i,r){return oi.subVectors(i,n),Gi.subVectors(e,n),oi.cross(Gi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Gi.subVectors(this.a,this.b),oi.cross(Gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return fi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return fi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Ts.subVectors(r,i),As.subVectors(s,i),gd.subVectors(e,i);const l=Ts.dot(gd),c=As.dot(gd);if(l<=0&&c<=0)return n.copy(i);vd.subVectors(e,r);const f=Ts.dot(vd),p=As.dot(vd);if(f>=0&&p<=f)return n.copy(r);const d=l*p-f*c;if(d<=0&&l>=0&&f<=0)return a=l/(l-f),n.copy(i).addScaledVector(Ts,a);xd.subVectors(e,s);const m=Ts.dot(xd),g=As.dot(xd);if(g>=0&&m<=g)return n.copy(s);const S=m*c-l*g;if(S<=0&&c>=0&&g<=0)return o=c/(c-g),n.copy(i).addScaledVector(As,o);const v=f*g-m*p;if(v<=0&&p-f>=0&&m-g>=0)return B0.subVectors(s,r),o=(p-f)/(p-f+(m-g)),n.copy(r).addScaledVector(B0,o);const h=1/(v+S+d);return a=S*h,o=d*h,n.copy(i).addScaledVector(Ts,a).addScaledVector(As,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class zo{constructor(e=new D(1/0,1/0,1/0),n=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(li.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(li.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=li.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,li):li.fromBufferAttribute(s,a),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),bl.copy(i.boundingBox)),bl.applyMatrix4(e.matrixWorld),this.union(bl)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fa),Tl.subVectors(this.max,Fa),Cs.subVectors(e.a,Fa),Rs.subVectors(e.b,Fa),Ps.subVectors(e.c,Fa),mr.subVectors(Rs,Cs),gr.subVectors(Ps,Rs),Wr.subVectors(Cs,Ps);let n=[0,-mr.z,mr.y,0,-gr.z,gr.y,0,-Wr.z,Wr.y,mr.z,0,-mr.x,gr.z,0,-gr.x,Wr.z,0,-Wr.x,-mr.y,mr.x,0,-gr.y,gr.x,0,-Wr.y,Wr.x,0];return!Md(n,Cs,Rs,Ps,Tl)||(n=[1,0,0,0,1,0,0,0,1],!Md(n,Cs,Rs,Ps,Tl))?!1:(Al.crossVectors(mr,gr),n=[Al.x,Al.y,Al.z],Md(n,Cs,Rs,Ps,Tl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Wi=[new D,new D,new D,new D,new D,new D,new D,new D],li=new D,bl=new zo,Cs=new D,Rs=new D,Ps=new D,mr=new D,gr=new D,Wr=new D,Fa=new D,Tl=new D,Al=new D,jr=new D;function Md(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){jr.fromArray(t,s);const o=r.x*Math.abs(jr.x)+r.y*Math.abs(jr.y)+r.z*Math.abs(jr.z),l=e.dot(jr),c=n.dot(jr),f=i.dot(jr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const Gt=new D,Cl=new Pe;let HE=0;class Ui extends Hr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:HE++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=aE,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Cl.fromBufferAttribute(this,n),Cl.applyMatrix3(e),this.setXY(n,Cl.x,Cl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Gt.fromBufferAttribute(this,n),Gt.applyMatrix3(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Gt.fromBufferAttribute(this,n),Gt.applyMatrix4(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Gt.fromBufferAttribute(this,n),Gt.applyNormalMatrix(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Gt.fromBufferAttribute(this,n),Gt.transformDirection(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Os(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=mn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Os(n,this.array)),n}setX(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Os(n,this.array)),n}setY(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Os(n,this.array)),n}setZ(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Os(n,this.array)),n}setW(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=mn(n,this.array),i=mn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=mn(n,this.array),i=mn(i,this.array),r=mn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=mn(n,this.array),i=mn(i,this.array),r=mn(r,this.array),s=mn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class y_ extends Ui{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class S_ extends Ui{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class bt extends Ui{constructor(e,n,i){super(new Float32Array(e),n,i)}}const GE=new zo,ka=new D,Ed=new D;class Bo{constructor(e=new D,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):GE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ka.subVectors(e,this.center);const n=ka.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ka,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ed.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ka.copy(e.center).add(Ed)),this.expandByPoint(ka.copy(e.center).sub(Ed))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let VE=0;const Kn=new Dt,wd=new tn,Ns=new D,On=new zo,za=new zo,Jt=new D;class Kt extends Hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:VE++}),this.uuid=_a(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(oE(e)?S_:y_)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,n,i){return Kn.makeTranslation(e,n,i),this.applyMatrix4(Kn),this}scale(e,n,i){return Kn.makeScale(e,n,i),this.applyMatrix4(Kn),this}lookAt(e){return wd.lookAt(e),wd.updateMatrix(),this.applyMatrix4(wd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new bt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){vt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];On.setFromBufferAttribute(s),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&vt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){vt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(On.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];za.setFromBufferAttribute(o),this.morphTargetsRelative?(Jt.addVectors(On.min,za.min),On.expandByPoint(Jt),Jt.addVectors(On.max,za.max),On.expandByPoint(Jt)):(On.expandByPoint(za.min),On.expandByPoint(za.max))}On.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Jt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Jt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)Jt.fromBufferAttribute(o,c),l&&(Ns.fromBufferAttribute(e,c),Jt.add(Ns)),r=Math.max(r,i.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&vt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){vt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Ui(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new D,l[x]=new D;const c=new D,f=new D,p=new D,d=new Pe,m=new Pe,g=new Pe,S=new D,v=new D;function h(x,A,P){c.fromBufferAttribute(i,x),f.fromBufferAttribute(i,A),p.fromBufferAttribute(i,P),d.fromBufferAttribute(s,x),m.fromBufferAttribute(s,A),g.fromBufferAttribute(s,P),f.sub(c),p.sub(c),m.sub(d),g.sub(d);const L=1/(m.x*g.y-g.x*m.y);isFinite(L)&&(S.copy(f).multiplyScalar(g.y).addScaledVector(p,-m.y).multiplyScalar(L),v.copy(p).multiplyScalar(m.x).addScaledVector(f,-g.x).multiplyScalar(L),o[x].add(S),o[A].add(S),o[P].add(S),l[x].add(v),l[A].add(v),l[P].add(v))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let x=0,A=_.length;x<A;++x){const P=_[x],L=P.start,O=P.count;for(let U=L,I=L+O;U<I;U+=3)h(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const E=new D,M=new D,b=new D,T=new D;function C(x){b.fromBufferAttribute(r,x),T.copy(b);const A=o[x];E.copy(A),E.sub(b.multiplyScalar(b.dot(A))).normalize(),M.crossVectors(T,A);const L=M.dot(l[x])<0?-1:1;a.setXYZW(x,E.x,E.y,E.z,L)}for(let x=0,A=_.length;x<A;++x){const P=_[x],L=P.start,O=P.count;for(let U=L,I=L+O;U<I;U+=3)C(e.getX(U+0)),C(e.getX(U+1)),C(e.getX(U+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Ui(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new D,s=new D,a=new D,o=new D,l=new D,c=new D,f=new D,p=new D;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),S=e.getX(d+1),v=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,S),a.fromBufferAttribute(n,v),f.subVectors(a,s),p.subVectors(r,s),f.cross(p),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,v),o.add(f),l.add(f),c.add(f),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),f.subVectors(a,s),p.subVectors(r,s),f.cross(p),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Jt.fromBufferAttribute(e,n),Jt.normalize(),e.setXYZ(n,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,p=o.normalized,d=new c.constructor(l.length*f);let m=0,g=0;for(let S=0,v=l.length;S<v;S++){o.isInterleavedBufferAttribute?m=l[S]*o.data.stride+o.offset:m=l[S]*f;for(let h=0;h<f;h++)d[g++]=c[m++]}return new Ui(d,f,p)}if(this.index===null)return je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Kt,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,p=c.length;f<p;f++){const d=c[f],m=e(d,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let p=0,d=c.length;p<d;p++){const m=c[p];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],p=s[c];for(let d=0,m=p.length;d<m;d++)f.push(p[d].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bd=new D,WE=new D,jE=new Ze;class $i{constructor(e=new D(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=bd.subVectors(i,n).cross(WE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(bd),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||jE.getNormalMatrix(e),r=this.coplanarPoint(bd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let XE=0;class vs extends Hr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:XE++}),this.uuid=_a(),this.name="",this.type="Material",this.blending=ro,this.side=hs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jx,this.blendDst=Qx,this.blendEquation=Us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=Ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=QM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=od,this.stencilZFail=od,this.stencilZPass=od,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){je(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){je(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new nt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new $i().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Pe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Pe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ji=new D,Td=new D,Rl=new D,Pl=new D;class fu{constructor(e=new D,n=new D(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ji)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ji.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ji.copy(this.origin).addScaledVector(this.direction,n),ji.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Td.copy(e).add(n).multiplyScalar(.5),Rl.copy(n).sub(e).normalize(),Pl.copy(this.origin).sub(Td);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Rl),o=Pl.dot(this.direction),l=-Pl.dot(Rl),c=Pl.lengthSq(),f=Math.abs(1-a*a);let p,d,m,g;if(f>0)if(p=a*l-o,d=a*o-l,g=s*f,p>=0)if(d>=-g)if(d<=g){const S=1/f;p*=S,d*=S,m=p*(p+a*d+2*o)+d*(a*p+d+2*l)+c}else d=s,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*l)+c;else d=-s,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*l)+c;else d<=-g?(p=Math.max(0,-(-a*s+o)),d=p>0?-s:Math.min(Math.max(-s,-l),s),m=-p*p+d*(d+2*l)+c):d<=g?(p=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(p=Math.max(0,-(a*s+o)),d=p>0?s:Math.min(Math.max(-s,-l),s),m=-p*p+d*(d+2*l)+c);else d=a>0?-s:s,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Td).addScaledVector(Rl,d),m}intersectSphere(e,n){if(e.radius<0)return null;ji.subVectors(e.center,this.origin);const i=ji.dot(this.direction),r=ji.dot(ji)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),f>=0?(s=(e.min.y-d.y)*f,a=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,a=(e.min.y-d.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-d.z)*p,l=(e.max.z-d.z)*p):(o=(e.max.z-d.z)*p,l=(e.min.z-d.z)*p),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ji)!==null}intersectTriangle(e,n,i,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,f=o.z,p=e.x-a.x,d=e.y-a.y,m=e.z-a.z,g=n.x-a.x,S=n.y-a.y,v=n.z-a.z,h=i.x-a.x,_=i.y-a.y,E=i.z-a.z,M=Math.abs(l),b=Math.abs(c),T=Math.abs(f);let C,x,A,P,L,O,U,I,V,Q,q,H;if(M>=b&&M>=T?(A=l,O=p,V=g,H=h,l>=0?(C=c,x=f,P=d,L=m,U=S,I=v,Q=_,q=E):(C=f,x=c,P=m,L=d,U=v,I=S,Q=E,q=_)):b>=T?(A=c,O=d,V=S,H=_,c>=0?(C=f,x=l,P=m,L=p,U=v,I=g,Q=E,q=h):(C=l,x=f,P=p,L=m,U=g,I=v,Q=h,q=E)):(A=f,O=m,V=v,H=E,f>=0?(C=l,x=c,P=p,L=d,U=g,I=S,Q=h,q=_):(C=c,x=l,P=d,L=p,U=S,I=g,Q=_,q=h)),A===0)return null;const B=C/A,W=x/A,Z=1/A,re=P-B*O,de=L-W*O,Be=U-B*V,Ce=I-W*V,Ve=Q-B*H,J=q-W*H,ne=Ve*Ce-J*Be,ve=re*J-de*Ve,xe=Be*de-Ce*re;if(r){if(ne<0||ve<0||xe<0)return null}else if((ne<0||ve<0||xe<0)&&(ne>0||ve>0||xe>0))return null;const pe=ne+ve+xe;if(pe===0)return null;const Ie=Z*(ne*O+ve*V+xe*H);return(pe>0?Ie<0:Ie>0)?null:this.at(Ie/pe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zr extends vs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fr,this.combine=e_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const H0=new Dt,Xr=new fu,Nl=new Bo,G0=new D,Dl=new D,Ll=new D,Il=new D,Ad=new D,Ul=new D,V0=new D,Ol=new D;class _e extends tn{constructor(e=new Kt,n=new Zr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ul.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],p=s[l];f!==0&&(Ad.fromBufferAttribute(p,e),a?Ul.addScaledVector(Ad,f):Ul.addScaledVector(Ad.sub(n),f))}n.add(Ul)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Nl.copy(i.boundingSphere),Nl.applyMatrix4(s),Xr.copy(e.ray).recast(e.near),!(Nl.containsPoint(Xr.origin)===!1&&(Xr.intersectSphere(Nl,G0)===null||Xr.origin.distanceToSquared(G0)>(e.far-e.near)**2))&&(H0.copy(s).invert(),Xr.copy(e.ray).applyMatrix4(H0),!(i.boundingBox!==null&&Xr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Xr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,p=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,S=d.length;g<S;g++){const v=d[g],h=a[v.materialIndex],_=Math.max(v.start,m.start),E=Math.min(o.count,Math.min(v.start+v.count,m.start+m.count));for(let M=_,b=E;M<b;M+=3){const T=o.getX(M),C=o.getX(M+1),x=o.getX(M+2);r=Fl(this,h,e,i,c,f,p,T,C,x),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const g=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let v=g,h=S;v<h;v+=3){const _=o.getX(v),E=o.getX(v+1),M=o.getX(v+2);r=Fl(this,a,e,i,c,f,p,_,E,M),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,S=d.length;g<S;g++){const v=d[g],h=a[v.materialIndex],_=Math.max(v.start,m.start),E=Math.min(l.count,Math.min(v.start+v.count,m.start+m.count));for(let M=_,b=E;M<b;M+=3){const T=M,C=M+1,x=M+2;r=Fl(this,h,e,i,c,f,p,T,C,x),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const g=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let v=g,h=S;v<h;v+=3){const _=v,E=v+1,M=v+2;r=Fl(this,a,e,i,c,f,p,_,E,M),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}}}function YE(t,e,n,i,r,s,a,o){let l;if(e.side===In?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===hs,o),l===null)return null;Ol.copy(o),Ol.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ol);return c<n.near||c>n.far?null:{distance:c,point:Ol.clone(),object:t}}function Fl(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Dl),t.getVertexPosition(l,Ll),t.getVertexPosition(c,Il);const f=YE(t,e,n,i,Dl,Ll,Il,V0);if(f){const p=new D;fi.getBarycoord(V0,Dl,Ll,Il,p),r&&(f.uv=fi.getInterpolatedAttribute(r,o,l,c,p,new Pe)),s&&(f.uv1=fi.getInterpolatedAttribute(s,o,l,c,p,new Pe)),a&&(f.normal=fi.getInterpolatedAttribute(a,o,l,c,p,new D),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new D,materialIndex:0};fi.getNormal(Dl,Ll,Il,d.normal),f.face=d,f.barycoord=p}return f}class $E extends yn{constructor(e=null,n=1,i=1,r,s,a,o,l,c=sn,f=sn,p,d){super(null,a,o,l,c,f,r,s,p,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yr=new Bo,qE=new Pe(.5,.5),kl=new D;class Gp{constructor(e=new $i,n=new $i,i=new $i,r=new $i,s=new $i,a=new $i){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ni,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],f=s[4],p=s[5],d=s[6],m=s[7],g=s[8],S=s[9],v=s[10],h=s[11],_=s[12],E=s[13],M=s[14],b=s[15];if(r[0].setComponents(c-a,m-f,h-g,b-_).normalize(),r[1].setComponents(c+a,m+f,h+g,b+_).normalize(),r[2].setComponents(c+o,m+p,h+S,b+E).normalize(),r[3].setComponents(c-o,m-p,h-S,b-E).normalize(),i)r[4].setComponents(l,d,v,M).normalize(),r[5].setComponents(c-l,m-d,h-v,b-M).normalize();else if(r[4].setComponents(c-l,m-d,h-v,b-M).normalize(),n===Ni)r[5].setComponents(c+l,m+d,h+v,b+M).normalize();else if(n===Po)r[5].setComponents(l,d,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yr)}intersectsSprite(e){Yr.center.set(0,0,0);const n=qE.distanceTo(e.center);return Yr.radius=.7071067811865476+n,Yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(kl.x=r.normal.x>0?e.max.x:e.min.x,kl.y=r.normal.y>0?e.max.y:e.min.y,kl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(kl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vp extends vs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Gc=new D,Vc=new D,W0=new Dt,Ba=new fu,zl=new Bo,Cd=new D,j0=new D;class M_ extends tn{constructor(e=new Kt,n=new Vp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Gc.fromBufferAttribute(n,r-1),Vc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Gc.distanceTo(Vc);e.setAttribute("lineDistance",new bt(i,1))}else je("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zl.copy(i.boundingSphere),zl.applyMatrix4(r),zl.radius+=s,e.ray.intersectsSphere(zl)===!1)return;W0.copy(r).invert(),Ba.copy(e.ray).applyMatrix4(W0);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,f=i.index,d=i.attributes.position;if(f!==null){const m=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let S=m,v=g-1;S<v;S+=c){const h=f.getX(S),_=f.getX(S+1),E=Bl(this,e,Ba,l,h,_,S);E&&n.push(E)}if(this.isLineLoop){const S=f.getX(g-1),v=f.getX(m),h=Bl(this,e,Ba,l,S,v,g-1);h&&n.push(h)}}else{const m=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let S=m,v=g-1;S<v;S+=c){const h=Bl(this,e,Ba,l,S,S+1,S);h&&n.push(h)}if(this.isLineLoop){const S=Bl(this,e,Ba,l,g-1,m,g-1);S&&n.push(S)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Bl(t,e,n,i,r,s,a){const o=t.geometry.attributes.position;if(Gc.fromBufferAttribute(o,r),Vc.fromBufferAttribute(o,s),n.distanceSqToSegment(Gc,Vc,Cd,j0)>i)return;Cd.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(Cd);if(!(c<e.near||c>e.far))return{distance:c,point:j0.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}const X0=new D,Y0=new D;class KE extends M_{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)X0.fromBufferAttribute(n,r),Y0.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+X0.distanceTo(Y0);e.setAttribute("lineDistance",new bt(i,1))}else je("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class E_ extends vs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const $0=new Dt,Ef=new fu,Hl=new Bo,Gl=new D;class ZE extends tn{constructor(e=new Kt,n=new E_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Hl.copy(i.boundingSphere),Hl.applyMatrix4(r),Hl.radius+=s,e.ray.intersectsSphere(Hl)===!1)return;$0.copy(r).invert(),Ef.copy(e.ray).applyMatrix4($0);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,p=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=d,S=m;g<S;g++){const v=c.getX(g);Gl.fromBufferAttribute(p,v),q0(Gl,v,l,r,e,n,this)}}else{const d=Math.max(0,a.start),m=Math.min(p.count,a.start+a.count);for(let g=d,S=m;g<S;g++)Gl.fromBufferAttribute(p,g),q0(Gl,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function q0(t,e,n,i,r,s,a){const o=Ef.distanceSqToPoint(t);if(o<n){const l=new D;Ef.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class w_ extends yn{constructor(e=[],n=fs,i,r,s,a,o,l,c,f){super(e,n,i,r,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Do extends yn{constructor(e,n,i=Oi,r,s,a,o=sn,l=sn,c,f=ar,p=1){if(f!==ar&&f!==is)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:p};super(d,r,s,a,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Hp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class JE extends Do{constructor(e,n=Oi,i=fs,r,s,a=sn,o=sn,l,c=ar){const f={width:e,height:e,depth:1},p=[f,f,f,f,f,f];super(e,e,n,i,r,s,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class b_ extends yn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class st extends Kt{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],p=[];let d=0,m=0;g("z","y","x",-1,-1,i,n,e,a,s,0),g("z","y","x",1,-1,i,n,-e,a,s,1),g("x","z","y",1,1,e,i,n,r,a,2),g("x","z","y",1,-1,e,i,-n,r,a,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new bt(c,3)),this.setAttribute("normal",new bt(f,3)),this.setAttribute("uv",new bt(p,2));function g(S,v,h,_,E,M,b,T,C,x,A){const P=M/C,L=b/x,O=M/2,U=b/2,I=T/2,V=C+1,Q=x+1;let q=0,H=0;const B=new D;for(let W=0;W<Q;W++){const Z=W*L-U;for(let re=0;re<V;re++){const de=re*P-O;B[S]=de*_,B[v]=Z*E,B[h]=I,c.push(B.x,B.y,B.z),B[S]=0,B[v]=0,B[h]=T>0?1:-1,f.push(B.x,B.y,B.z),p.push(re/C),p.push(1-W/x),q+=1}}for(let W=0;W<x;W++)for(let Z=0;Z<C;Z++){const re=d+Z+V*W,de=d+Z+V*(W+1),Be=d+(Z+1)+V*(W+1),Ce=d+(Z+1)+V*W;l.push(re,de,Ce),l.push(de,Be,Ce),H+=6}o.addGroup(m,H,A),m+=H,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new st(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Wp extends Kt{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],a=[],o=[],l=[],c=new D,f=new Pe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let p=0,d=3;p<=n;p++,d+=3){const m=i+p/n*r;c.x=e*Math.cos(m),c.y=e*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),f.x=(a[d]/e+1)/2,f.y=(a[d+1]/e+1)/2,l.push(f.x,f.y)}for(let p=1;p<=n;p++)s.push(p,p+1,0);this.setIndex(s),this.setAttribute("position",new bt(a,3)),this.setAttribute("normal",new bt(o,3)),this.setAttribute("uv",new bt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wp(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class jt extends Kt{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],p=[],d=[],m=[];let g=0;const S=[],v=i/2;let h=0;_(),a===!1&&(e>0&&E(!0),n>0&&E(!1)),this.setIndex(f),this.setAttribute("position",new bt(p,3)),this.setAttribute("normal",new bt(d,3)),this.setAttribute("uv",new bt(m,2));function _(){const M=new D,b=new D;let T=0;const C=(n-e)/i;for(let x=0;x<=s;x++){const A=[],P=x/s,L=P*(n-e)+e;for(let O=0;O<=r;O++){const U=O/r,I=U*l+o,V=Math.sin(I),Q=Math.cos(I);b.x=L*V,b.y=-P*i+v,b.z=L*Q,p.push(b.x,b.y,b.z),M.set(V,C,Q).normalize(),d.push(M.x,M.y,M.z),m.push(U,1-P),A.push(g++)}S.push(A)}for(let x=0;x<r;x++)for(let A=0;A<s;A++){const P=S[A][x],L=S[A+1][x],O=S[A+1][x+1],U=S[A][x+1];(e>0||A!==0)&&(f.push(P,L,U),T+=3),(n>0||A!==s-1)&&(f.push(L,O,U),T+=3)}c.addGroup(h,T,0),h+=T}function E(M){const b=g,T=new Pe,C=new D;let x=0;const A=M===!0?e:n,P=M===!0?1:-1;for(let O=1;O<=r;O++)p.push(0,v*P,0),d.push(0,P,0),m.push(.5,.5),g++;const L=g;for(let O=0;O<=r;O++){const I=O/r*l+o,V=Math.cos(I),Q=Math.sin(I);C.x=A*Q,C.y=v*P,C.z=A*V,p.push(C.x,C.y,C.z),d.push(0,P,0),T.x=V*.5+.5,T.y=Q*.5*P+.5,m.push(T.x,T.y),g++}for(let O=0;O<r;O++){const U=b+O,I=L+O;M===!0?f.push(I,I+1,U):f.push(I+1,I,U),x+=3}c.addGroup(h,x,M===!0?1:2),h+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wc extends jt{constructor(e=1,n=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,n,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Wc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class lr{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){je("Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let r=0;const s=i.length;let a;n?a=n:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);const f=i[r],d=i[r+1]-f,m=(a-f)/d;return(r+m)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=n||(a.isVector2?new Pe:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new D,r=[],s=[],a=[],o=new D,l=new Dt;for(let m=0;m<=e;m++){const g=m/e;r[m]=this.getTangentAt(g,new D)}s[0]=new D,a[0]=new D;let c=Number.MAX_VALUE;const f=Math.abs(r[0].x),p=Math.abs(r[0].y),d=Math.abs(r[0].z);f<=c&&(c=f,i.set(1,0,0)),p<=c&&(c=p,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(r[m-1],r[m]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(et(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(o,g))}a[m].crossVectors(r[m],s[m])}if(n===!0){let m=Math.acos(et(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(m=-m);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],m*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class T_ extends lr{constructor(e=0,n=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,n=new Pe){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const f=Math.cos(this.aRotation),p=Math.sin(this.aRotation),d=l-this.aX,m=c-this.aY;l=d*f-m*p+this.aX,c=d*p+m*f+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class QE extends T_{constructor(e,n,i,r,s,a){super(e,n,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function jp(){let t=0,e=0,n=0,i=0;function r(s,a,o,l){t=s,e=o,n=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,f,p){let d=(a-s)/c-(o-s)/(c+f)+(o-a)/f,m=(o-a)/f-(l-a)/(f+p)+(l-o)/p;d*=f,m*=f,r(a,o,d,m)},calc:function(s){const a=s*s,o=a*s;return t+e*s+n*a+i*o}}}const K0=new D,Z0=new D,Rd=new jp,Pd=new jp,Nd=new jp;class A_ extends lr{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new D){const i=n,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,f;this.closed||o>0?c=r[(o-1)%s]:(Z0.subVectors(r[0],r[1]).add(r[0]),c=Z0);const p=r[o%s],d=r[(o+1)%s];if(this.closed||o+2<s?f=r[(o+2)%s]:(K0.subVectors(r[s-1],r[s-2]).add(r[s-1]),f=K0),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(p),m),S=Math.pow(p.distanceToSquared(d),m),v=Math.pow(d.distanceToSquared(f),m);S<1e-4&&(S=1),g<1e-4&&(g=S),v<1e-4&&(v=S),Rd.initNonuniformCatmullRom(c.x,p.x,d.x,f.x,g,S,v),Pd.initNonuniformCatmullRom(c.y,p.y,d.y,f.y,g,S,v),Nd.initNonuniformCatmullRom(c.z,p.z,d.z,f.z,g,S,v)}else this.curveType==="catmullrom"&&(Rd.initCatmullRom(c.x,p.x,d.x,f.x,this.tension),Pd.initCatmullRom(c.y,p.y,d.y,f.y,this.tension),Nd.initCatmullRom(c.z,p.z,d.z,f.z,this.tension));return i.set(Rd.calc(l),Pd.calc(l),Nd.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new D().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function J0(t,e,n,i,r){const s=(i-e)*.5,a=(r-n)*.5,o=t*t,l=t*o;return(2*n-2*i+s+a)*l+(-3*n+3*i-2*s-a)*o+s*t+n}function ew(t,e){const n=1-t;return n*n*e}function tw(t,e){return 2*(1-t)*t*e}function nw(t,e){return t*t*e}function oo(t,e,n,i){return ew(t,e)+tw(t,n)+nw(t,i)}function iw(t,e){const n=1-t;return n*n*n*e}function rw(t,e){const n=1-t;return 3*n*n*t*e}function sw(t,e){return 3*(1-t)*t*t*e}function aw(t,e){return t*t*t*e}function lo(t,e,n,i,r){return iw(t,e)+rw(t,n)+sw(t,i)+aw(t,r)}class ow extends lr{constructor(e=new Pe,n=new Pe,i=new Pe,r=new Pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new Pe){const i=n,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(lo(e,r.x,s.x,a.x,o.x),lo(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class lw extends lr{constructor(e=new D,n=new D,i=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new D){const i=n,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(lo(e,r.x,s.x,a.x,o.x),lo(e,r.y,s.y,a.y,o.y),lo(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class cw extends lr{constructor(e=new Pe,n=new Pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Pe){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Pe){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class uw extends lr{constructor(e=new D,n=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new D){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new D){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class dw extends lr{constructor(e=new Pe,n=new Pe,i=new Pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Pe){const i=n,r=this.v0,s=this.v1,a=this.v2;return i.set(oo(e,r.x,s.x,a.x),oo(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class C_ extends lr{constructor(e=new D,n=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new D){const i=n,r=this.v0,s=this.v1,a=this.v2;return i.set(oo(e,r.x,s.x,a.x),oo(e,r.y,s.y,a.y),oo(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hw extends lr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Pe){const i=n,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],f=r[a>r.length-2?r.length-1:a+1],p=r[a>r.length-3?r.length-1:a+2];return i.set(J0(o,l.x,c.x,f.x,p.x),J0(o,l.y,c.y,f.y,p.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new Pe().fromArray(r))}return this}}var fw=Object.freeze({__proto__:null,ArcCurve:QE,CatmullRomCurve3:A_,CubicBezierCurve:ow,CubicBezierCurve3:lw,EllipseCurve:T_,LineCurve:cw,LineCurve3:uw,QuadraticBezierCurve:dw,QuadraticBezierCurve3:C_,SplineCurve:hw});class Ho extends Kt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,f=l+1,p=e/o,d=n/l,m=[],g=[],S=[],v=[];for(let h=0;h<f;h++){const _=h*d-a;for(let E=0;E<c;E++){const M=E*p-s;g.push(M,-_,0),S.push(0,0,1),v.push(E/o),v.push(1-h/l)}}for(let h=0;h<l;h++)for(let _=0;_<o;_++){const E=_+c*h,M=_+c*(h+1),b=_+1+c*(h+1),T=_+1+c*h;m.push(E,M,T),m.push(M,b,T)}this.setIndex(m),this.setAttribute("position",new bt(g,3)),this.setAttribute("normal",new bt(S,3)),this.setAttribute("uv",new bt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ho(e.width,e.height,e.widthSegments,e.heightSegments)}}class jc extends Kt{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const f=[],p=new D,d=new D,m=[],g=[],S=[],v=[];for(let h=0;h<=i;h++){const _=[],E=h/i,M=a+E*o,b=e*Math.cos(M),T=Math.sqrt(e*e-b*b);let C=0;h===0&&a===0?C=.5/n:h===i&&l===Math.PI&&(C=-.5/n);for(let x=0;x<=n;x++){const A=x/n,P=r+A*s;p.x=-T*Math.cos(P),p.y=b,p.z=T*Math.sin(P),g.push(p.x,p.y,p.z),d.copy(p).normalize(),S.push(d.x,d.y,d.z),v.push(A+C,1-E),_.push(c++)}f.push(_)}for(let h=0;h<i;h++)for(let _=0;_<n;_++){const E=f[h][_+1],M=f[h][_],b=f[h+1][_],T=f[h+1][_+1];(h!==0||a>0)&&m.push(E,M,T),(h!==i-1||l<Math.PI)&&m.push(M,b,T)}this.setIndex(m),this.setAttribute("position",new bt(g,3)),this.setAttribute("normal",new bt(S,3)),this.setAttribute("uv",new bt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Xp extends Kt{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);const l=[],c=[],f=[],p=[],d=new D,m=new D,g=new D;for(let S=0;S<=i;S++){const v=a+S/i*o;for(let h=0;h<=r;h++){const _=h/r*s;m.x=(e+n*Math.cos(v))*Math.cos(_),m.y=(e+n*Math.cos(v))*Math.sin(_),m.z=n*Math.sin(v),c.push(m.x,m.y,m.z),d.x=e*Math.cos(_),d.y=e*Math.sin(_),g.subVectors(m,d).normalize(),f.push(g.x,g.y,g.z),p.push(h/r),p.push(S/i)}}for(let S=1;S<=i;S++)for(let v=1;v<=r;v++){const h=(r+1)*S+v-1,_=(r+1)*(S-1)+v-1,E=(r+1)*(S-1)+v,M=(r+1)*S+v;l.push(h,_,M),l.push(_,E,M)}this.setIndex(l),this.setAttribute("position",new bt(c,3)),this.setAttribute("normal",new bt(f,3)),this.setAttribute("uv",new bt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xp(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class Yp extends Kt{constructor(e=new C_(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const a=e.computeFrenetFrames(n,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new D,l=new D,c=new Pe;let f=new D;const p=[],d=[],m=[],g=[];S(),this.setIndex(g),this.setAttribute("position",new bt(p,3)),this.setAttribute("normal",new bt(d,3)),this.setAttribute("uv",new bt(m,2));function S(){for(let E=0;E<n;E++)v(E);v(s===!1?n:0),_(),h()}function v(E){f=e.getPointAt(E/n,f);const M=a.normals[E],b=a.binormals[E];for(let T=0;T<=r;T++){const C=T/r*Math.PI*2,x=Math.sin(C),A=-Math.cos(C);l.x=A*M.x+x*b.x,l.y=A*M.y+x*b.y,l.z=A*M.z+x*b.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=f.x+i*l.x,o.y=f.y+i*l.y,o.z=f.z+i*l.z,p.push(o.x,o.y,o.z)}}function h(){for(let E=1;E<=n;E++)for(let M=1;M<=r;M++){const b=(r+1)*(E-1)+(M-1),T=(r+1)*E+(M-1),C=(r+1)*E+M,x=(r+1)*(E-1)+M;g.push(b,T,x),g.push(T,C,x)}}function _(){for(let E=0;E<=n;E++)for(let M=0;M<=r;M++)c.x=E/n,c.y=M/r,m.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Yp(new fw[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function ma(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(Q0(r))r.isRenderTargetTexture?(je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Q0(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function gn(t){const e={};for(let n=0;n<t.length;n++){const i=ma(t[n]);for(const r in i)e[r]=i[r]}return e}function Q0(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function pw(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function R_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const mw={clone:ma,merge:gn};var gw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ki extends vs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gw,this.fragmentShader=vw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ma(e.uniforms),this.uniformsGroups=pw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new nt().setHex(r.value);break;case"v2":this.uniforms[i].value=new Pe().fromArray(r.value);break;case"v3":this.uniforms[i].value=new D().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Ot().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ze().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Dt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class xw extends ki{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class xt extends vs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mf,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _w extends xt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new nt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new nt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new nt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class yw extends vs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ZM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Sw extends vs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class $p extends tn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Dd=new Dt,eg=new D,tg=new D;class P_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.mapType=zn,this.map=null,this.mapPass=null,this.matrix=new Dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gp,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;eg.setFromMatrixPosition(e.matrixWorld),n.position.copy(eg),tg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(tg),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,r){Dd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Dd,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===Po||e.reversedDepth?n.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):n.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),n.multiply(Dd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Vl=new D,Wl=new Or,wi=new D;class N_ extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=Ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Vl,Wl,wi),wi.x===1&&wi.y===1&&wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vl,Wl,wi.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Vl,Wl,wi),wi.x===1&&wi.y===1&&wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vl,Wl,wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const vr=new D,ng=new Pe,ig=new Pe;class kn extends N_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=No*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(so*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return No*2*Math.atan(Math.tan(so*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vr.x,vr.y).multiplyScalar(-e/vr.z),vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vr.x,vr.y).multiplyScalar(-e/vr.z)}getViewSize(e,n){return this.getViewBounds(e,ng,ig),n.subVectors(ig,ng)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(so*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Mw extends P_{constructor(){super(new kn(90,1,.5,500)),this.isPointLightShadow=!0}}class Ew extends $p{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Mw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class qp extends N_{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class ww extends P_{constructor(){super(new qp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ld extends $p{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new ww}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class bw extends $p{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ds=-90,Ls=1;class Tw extends tn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new kn(Ds,Ls,e,n);r.layers=this.layers,this.add(r);const s=new kn(Ds,Ls,e,n);s.layers=this.layers,this.add(s);const a=new kn(Ds,Ls,e,n);a.layers=this.layers,this.add(a);const o=new kn(Ds,Ls,e,n);o.layers=this.layers,this.add(o);const l=new kn(Ds,Ls,e,n);l.layers=this.layers,this.add(l);const c=new kn(Ds,Ls,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===Ni)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Po)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,f]=this.children,p=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(p,d,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Aw extends kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class rg{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=et(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(et(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const tm=class tm{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};tm.prototype.isMatrix2=!0;let sg=tm;class D_ extends KE{constructor(e=10,n=10,i=4473924,r=8947848){i=new nt(i),r=new nt(r);const s=n/2,a=e/n,o=e/2,l=[],c=[];for(let d=0,m=0,g=-o;d<=n;d++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const S=d===s?i:r;S.toArray(c,m),m+=3,S.toArray(c,m),m+=3,S.toArray(c,m),m+=3,S.toArray(c,m),m+=3}const f=new Kt;f.setAttribute("position",new bt(l,3)),f.setAttribute("color",new bt(c,3));const p=new Vp({vertexColors:!0,toneMapped:!1});super(f,p),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class Cw extends Hr{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function ag(t,e,n,i){const r=Rw(i);switch(n){case f_:return t*e;case m_:return t*e/r.components*r.byteLength;case Up:return t*e/r.components*r.byteLength;case ps:return t*e*2/r.components*r.byteLength;case Op:return t*e*2/r.components*r.byteLength;case p_:return t*e*3/r.components*r.byteLength;case pi:return t*e*4/r.components*r.byteLength;case Fp:return t*e*4/r.components*r.byteLength;case oc:case lc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case cc:case uc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Xh:case $h:return Math.max(t,16)*Math.max(e,8)/4;case jh:case Yh:return Math.max(t,8)*Math.max(e,8)/2;case qh:case Kh:case Jh:case Qh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Zh:case Fc:case ef:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case tf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case nf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case rf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case sf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case af:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case of:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case lf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case cf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case uf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case df:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case hf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case ff:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case pf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case mf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case gf:case vf:case xf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case _f:case yf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case kc:case Sf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Rw(t){switch(t){case zn:case c_:return{byteLength:1,components:1};case Co:case u_:case Fi:return{byteLength:2,components:1};case Lp:case Ip:return{byteLength:2,components:4};case Oi:case Dp:case Pi:return{byteLength:4,components:1};case d_:case h_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Np}}));typeof window<"u"&&(window.__THREE__?je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Np);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function L_(){let t=null,e=!1,n=null,i=null;function r(s,a){i=t.requestAnimationFrame(r),n(s,a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Pw(t){const e=new WeakMap;function n(o,l){const c=o.array,f=o.usage,p=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,f),o.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){const f=l.array,p=l.updateRanges;if(t.bindBuffer(c,o),p.length===0)t.bufferSubData(c,0,f);else{p.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<p.length;m++){const g=p[d],S=p[m];S.start<=g.start+g.count+1?g.count=Math.max(g.count,S.start+S.count-g.start):(++d,p[d]=S)}p.length=d+1;for(let m=0,g=p.length;m<g;m++){const S=p[m];t.bufferSubData(c,S.start*f.BYTES_PER_ELEMENT,f,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Nw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dw=`#ifdef USE_ALPHAHASH
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
#endif`,Lw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Iw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ow=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fw=`#ifdef USE_AOMAP
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
#endif`,kw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zw=`#ifdef USE_BATCHING
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
#endif`,Bw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ww=`#ifdef USE_IRIDESCENCE
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
#endif`,jw=`#ifdef USE_BUMPMAP
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
#endif`,Xw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$w=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Zw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Jw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Qw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,eb=`#define PI 3.141592653589793
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
} // validated`,tb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nb=`vec3 transformedNormal = objectNormal;
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
#endif`,ib=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ab=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ob="gl_FragColor = linearToOutputTexel( gl_FragColor );",lb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cb=`#ifdef USE_ENVMAP
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
#endif`,ub=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,db=`#ifdef USE_ENVMAP
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
#endif`,hb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fb=`#ifdef USE_ENVMAP
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
#endif`,pb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xb=`#ifdef USE_GRADIENTMAP
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
}`,_b=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Eb=`#ifdef USE_ENVMAP
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
#endif`,wb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ab=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cb=`PhysicalMaterial material;
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
#endif`,Rb=`uniform sampler2D dfgLUT;
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
}`,Pb=`
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
#endif`,Nb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Db=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lb=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Ib=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ub=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ob=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hb=`#if defined( USE_POINTS_UV )
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
#endif`,Gb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yb=`#ifdef USE_MORPHTARGETS
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
#endif`,$b=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Kb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,eT=`#ifdef USE_NORMALMAP
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
#endif`,tT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,oT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gT=`float getShadowMask() {
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
}`,vT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xT=`#ifdef USE_SKINNING
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
#endif`,_T=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yT=`#ifdef USE_SKINNING
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
#endif`,ST=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,MT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ET=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bT=`#ifdef USE_TRANSMISSION
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
#endif`,TT=`#ifdef USE_TRANSMISSION
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
#endif`,AT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const NT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,DT=`uniform sampler2D t2D;
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
}`,LT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,UT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FT=`#include <common>
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
}`,kT=`#if DEPTH_PACKING == 3200
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
}`,zT=`#define DISTANCE
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
}`,BT=`#define DISTANCE
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
}`,HT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,GT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VT=`uniform float scale;
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
}`,WT=`uniform vec3 diffuse;
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
}`,jT=`#include <common>
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
}`,XT=`uniform vec3 diffuse;
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
}`,YT=`#define LAMBERT
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
}`,$T=`#define LAMBERT
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
}`,qT=`#define MATCAP
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
}`,KT=`#define MATCAP
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
}`,ZT=`#define NORMAL
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
}`,JT=`#define NORMAL
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
}`,QT=`#define PHONG
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
}`,e2=`#define PHONG
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
}`,t2=`#define STANDARD
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
}`,n2=`#define STANDARD
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
}`,i2=`#define TOON
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
}`,r2=`#define TOON
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
}`,s2=`uniform float size;
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
}`,a2=`uniform vec3 diffuse;
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
}`,o2=`#include <common>
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
}`,l2=`uniform vec3 color;
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
}`,c2=`uniform float rotation;
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
}`,u2=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:Nw,alphahash_pars_fragment:Dw,alphamap_fragment:Lw,alphamap_pars_fragment:Iw,alphatest_fragment:Uw,alphatest_pars_fragment:Ow,aomap_fragment:Fw,aomap_pars_fragment:kw,batching_pars_vertex:zw,batching_vertex:Bw,begin_vertex:Hw,beginnormal_vertex:Gw,bsdfs:Vw,iridescence_fragment:Ww,bumpmap_pars_fragment:jw,clipping_planes_fragment:Xw,clipping_planes_pars_fragment:Yw,clipping_planes_pars_vertex:$w,clipping_planes_vertex:qw,color_fragment:Kw,color_pars_fragment:Zw,color_pars_vertex:Jw,color_vertex:Qw,common:eb,cube_uv_reflection_fragment:tb,defaultnormal_vertex:nb,displacementmap_pars_vertex:ib,displacementmap_vertex:rb,emissivemap_fragment:sb,emissivemap_pars_fragment:ab,colorspace_fragment:ob,colorspace_pars_fragment:lb,envmap_fragment:cb,envmap_common_pars_fragment:ub,envmap_pars_fragment:db,envmap_pars_vertex:hb,envmap_physical_pars_fragment:Eb,envmap_vertex:fb,fog_vertex:pb,fog_pars_vertex:mb,fog_fragment:gb,fog_pars_fragment:vb,gradientmap_pars_fragment:xb,lightmap_pars_fragment:_b,lights_lambert_fragment:yb,lights_lambert_pars_fragment:Sb,lights_pars_begin:Mb,lights_toon_fragment:wb,lights_toon_pars_fragment:bb,lights_phong_fragment:Tb,lights_phong_pars_fragment:Ab,lights_physical_fragment:Cb,lights_physical_pars_fragment:Rb,lights_fragment_begin:Pb,lights_fragment_maps:Nb,lights_fragment_end:Db,lightprobes_pars_fragment:Lb,logdepthbuf_fragment:Ib,logdepthbuf_pars_fragment:Ub,logdepthbuf_pars_vertex:Ob,logdepthbuf_vertex:Fb,map_fragment:kb,map_pars_fragment:zb,map_particle_fragment:Bb,map_particle_pars_fragment:Hb,metalnessmap_fragment:Gb,metalnessmap_pars_fragment:Vb,morphinstance_vertex:Wb,morphcolor_vertex:jb,morphnormal_vertex:Xb,morphtarget_pars_vertex:Yb,morphtarget_vertex:$b,normal_fragment_begin:qb,normal_fragment_maps:Kb,normal_pars_fragment:Zb,normal_pars_vertex:Jb,normal_vertex:Qb,normalmap_pars_fragment:eT,clearcoat_normal_fragment_begin:tT,clearcoat_normal_fragment_maps:nT,clearcoat_pars_fragment:iT,iridescence_pars_fragment:rT,opaque_fragment:sT,packing:aT,premultiplied_alpha_fragment:oT,project_vertex:lT,dithering_fragment:cT,dithering_pars_fragment:uT,roughnessmap_fragment:dT,roughnessmap_pars_fragment:hT,shadowmap_pars_fragment:fT,shadowmap_pars_vertex:pT,shadowmap_vertex:mT,shadowmask_pars_fragment:gT,skinbase_vertex:vT,skinning_pars_vertex:xT,skinning_vertex:_T,skinnormal_vertex:yT,specularmap_fragment:ST,specularmap_pars_fragment:MT,tonemapping_fragment:ET,tonemapping_pars_fragment:wT,transmission_fragment:bT,transmission_pars_fragment:TT,uv_pars_fragment:AT,uv_pars_vertex:CT,uv_vertex:RT,worldpos_vertex:PT,background_vert:NT,background_frag:DT,backgroundCube_vert:LT,backgroundCube_frag:IT,cube_vert:UT,cube_frag:OT,depth_vert:FT,depth_frag:kT,distance_vert:zT,distance_frag:BT,equirect_vert:HT,equirect_frag:GT,linedashed_vert:VT,linedashed_frag:WT,meshbasic_vert:jT,meshbasic_frag:XT,meshlambert_vert:YT,meshlambert_frag:$T,meshmatcap_vert:qT,meshmatcap_frag:KT,meshnormal_vert:ZT,meshnormal_frag:JT,meshphong_vert:QT,meshphong_frag:e2,meshphysical_vert:t2,meshphysical_frag:n2,meshtoon_vert:i2,meshtoon_frag:r2,points_vert:s2,points_frag:a2,shadow_vert:o2,shadow_frag:l2,sprite_vert:c2,sprite_frag:u2},Ee={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Ai={basic:{uniforms:gn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:gn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new nt(0)},envMapIntensity:{value:1}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:gn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:gn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:gn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new nt(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:gn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:gn([Ee.points,Ee.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:gn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:gn([Ee.common,Ee.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:gn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:gn([Ee.sprite,Ee.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:gn([Ee.common,Ee.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:gn([Ee.lights,Ee.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};Ai.physical={uniforms:gn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const jl={r:0,b:0,g:0},d2=new Dt,I_=new Ze;I_.set(-1,0,0,0,1,0,0,0,1);function h2(t,e,n,i,r,s){const a=new nt(0);let o=r===!0?0:1,l,c,f=null,p=0,d=null;function m(_){let E=_.isScene===!0?_.background:null;if(E&&E.isTexture){const M=_.backgroundBlurriness>0;E=e.get(E,M)}return E}function g(_){let E=!1;const M=m(_);M===null?v(a,o):M&&M.isColor&&(v(M,1),E=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function S(_,E){const M=m(E);M&&(M.isCubeTexture||M.mapping===hu)?(c===void 0&&(c=new _e(new st(1,1,1),new ki({name:"BackgroundCubeMaterial",uniforms:ma(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(d2.makeRotationFromEuler(E.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(I_),c.material.toneMapped=ct.getTransfer(M.colorSpace)!==Mt,(f!==M||p!==M.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,f=M,p=M.version,d=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new _e(new Ho(2,2),new ki({name:"BackgroundMaterial",uniforms:ma(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:hs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=ct.getTransfer(M.colorSpace)!==Mt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||p!==M.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,f=M,p=M.version,d=t.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function v(_,E){_.getRGB(jl,R_(t)),n.buffers.color.setClear(jl.r,jl.g,jl.b,E,s)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,E=1){a.set(_),o=E,v(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,v(a,o)},render:g,addToRenderList:S,dispose:h}}function f2(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(L,O,U,I,V){let Q=!1;const q=p(L,I,U,O);s!==q&&(s=q,c(s.object)),Q=m(L,I,U,V),Q&&g(L,I,U,V),V!==null&&e.update(V,t.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,M(L,O,U,I),V!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return t.createVertexArray()}function c(L){return t.bindVertexArray(L)}function f(L){return t.deleteVertexArray(L)}function p(L,O,U,I){const V=I.wireframe===!0;let Q=i[O.id];Q===void 0&&(Q={},i[O.id]=Q);const q=L.isInstancedMesh===!0?L.id:0;let H=Q[q];H===void 0&&(H={},Q[q]=H);let B=H[U.id];B===void 0&&(B={},H[U.id]=B);let W=B[V];return W===void 0&&(W=d(l()),B[V]=W),W}function d(L){const O=[],U=[],I=[];for(let V=0;V<n;V++)O[V]=0,U[V]=0,I[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:U,attributeDivisors:I,object:L,attributes:{},index:null}}function m(L,O,U,I){const V=s.attributes,Q=O.attributes;let q=0;const H=U.getAttributes();for(const B in H)if(H[B].location>=0){const Z=V[B];let re=Q[B];if(re===void 0&&(B==="instanceMatrix"&&L.instanceMatrix&&(re=L.instanceMatrix),B==="instanceColor"&&L.instanceColor&&(re=L.instanceColor)),Z===void 0||Z.attribute!==re||re&&Z.data!==re.data)return!0;q++}return s.attributesNum!==q||s.index!==I}function g(L,O,U,I){const V={},Q=O.attributes;let q=0;const H=U.getAttributes();for(const B in H)if(H[B].location>=0){let Z=Q[B];Z===void 0&&(B==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),B==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor));const re={};re.attribute=Z,Z&&Z.data&&(re.data=Z.data),V[B]=re,q++}s.attributes=V,s.attributesNum=q,s.index=I}function S(){const L=s.newAttributes;for(let O=0,U=L.length;O<U;O++)L[O]=0}function v(L){h(L,0)}function h(L,O){const U=s.newAttributes,I=s.enabledAttributes,V=s.attributeDivisors;U[L]=1,I[L]===0&&(t.enableVertexAttribArray(L),I[L]=1),V[L]!==O&&(t.vertexAttribDivisor(L,O),V[L]=O)}function _(){const L=s.newAttributes,O=s.enabledAttributes;for(let U=0,I=O.length;U<I;U++)O[U]!==L[U]&&(t.disableVertexAttribArray(U),O[U]=0)}function E(L,O,U,I,V,Q,q){q===!0?t.vertexAttribIPointer(L,O,U,V,Q):t.vertexAttribPointer(L,O,U,I,V,Q)}function M(L,O,U,I){S();const V=I.attributes,Q=U.getAttributes(),q=O.defaultAttributeValues;for(const H in Q){const B=Q[H];if(B.location>=0){let W=V[H];if(W===void 0&&(H==="instanceMatrix"&&L.instanceMatrix&&(W=L.instanceMatrix),H==="instanceColor"&&L.instanceColor&&(W=L.instanceColor)),W!==void 0){const Z=W.normalized,re=W.itemSize,de=e.get(W);if(de===void 0)continue;const Be=de.buffer,Ce=de.type,Ve=de.bytesPerElement,J=Ce===t.INT||Ce===t.UNSIGNED_INT||W.gpuType===Dp;if(W.isInterleavedBufferAttribute){const ne=W.data,ve=ne.stride,xe=W.offset;if(ne.isInstancedInterleavedBuffer){for(let pe=0;pe<B.locationSize;pe++)h(B.location+pe,ne.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let pe=0;pe<B.locationSize;pe++)v(B.location+pe);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let pe=0;pe<B.locationSize;pe++)E(B.location+pe,re/B.locationSize,Ce,Z,ve*Ve,(xe+re/B.locationSize*pe)*Ve,J)}else{if(W.isInstancedBufferAttribute){for(let ne=0;ne<B.locationSize;ne++)h(B.location+ne,W.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ne=0;ne<B.locationSize;ne++)v(B.location+ne);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let ne=0;ne<B.locationSize;ne++)E(B.location+ne,re/B.locationSize,Ce,Z,re*Ve,re/B.locationSize*ne*Ve,J)}}else if(q!==void 0){const Z=q[H];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(B.location,Z);break;case 3:t.vertexAttrib3fv(B.location,Z);break;case 4:t.vertexAttrib4fv(B.location,Z);break;default:t.vertexAttrib1fv(B.location,Z)}}}}_()}function b(){A();for(const L in i){const O=i[L];for(const U in O){const I=O[U];for(const V in I){const Q=I[V];for(const q in Q)f(Q[q].object),delete Q[q];delete I[V]}}delete i[L]}}function T(L){if(i[L.id]===void 0)return;const O=i[L.id];for(const U in O){const I=O[U];for(const V in I){const Q=I[V];for(const q in Q)f(Q[q].object),delete Q[q];delete I[V]}}delete i[L.id]}function C(L){for(const O in i){const U=i[O];for(const I in U){const V=U[I];if(V[L.id]===void 0)continue;const Q=V[L.id];for(const q in Q)f(Q[q].object),delete Q[q];delete V[L.id]}}}function x(L){for(const O in i){const U=i[O],I=L.isInstancedMesh===!0?L.id:0,V=U[I];if(V!==void 0){for(const Q in V){const q=V[Q];for(const H in q)f(q[H].object),delete q[H];delete V[Q]}delete U[I],Object.keys(U).length===0&&delete i[O]}}}function A(){P(),a=!0,s!==r&&(s=r,c(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:A,resetDefaultState:P,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:S,enableAttribute:v,disableUnusedAttributes:_}}function p2(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,f){f!==0&&(t.drawArraysInstanced(i,l,c,f),n.update(c,i,f))}function o(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let d=0;for(let m=0;m<f;m++)d+=c[m];n.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function m2(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==pi&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const x=C===Fi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==zn&&C!==Pi&&!x&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(je("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const p=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),E=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:v,maxAttributes:h,maxVertexUniforms:_,maxVaryings:E,maxFragmentUniforms:M,maxSamples:b,samples:T}}function g2(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new $i,o=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){const m=p.length!==0||d||i!==0||r;return r=d,i=p.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,d){n=f(p,d,0)},this.setState=function(p,d,m){const g=p.clippingPlanes,S=p.clipIntersection,v=p.clipShadows,h=t.get(p);if(!r||g===null||g.length===0||s&&!v)s?f(null):c();else{const _=s?0:i,E=_*4;let M=h.clippingState||null;l.value=M,M=f(g,d,E,m);for(let b=0;b!==E;++b)M[b]=n[b];h.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(p,d,m,g){const S=p!==null?p.length:0;let v=null;if(S!==0){if(v=l.value,g!==!0||v===null){const h=m+S*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(v===null||v.length<h)&&(v=new Float32Array(h));for(let E=0,M=m;E!==S;++E,M+=4)a.copy(p[E]).applyMatrix4(_,o),a.normal.toArray(v,M),v[M+3]=a.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,v}}const Zs=4,v2=6,x2=20,_2=256,Ha=new qp,og=new nt;let Id=null,Ud=0,Od=0,Fd=!1;const y2=new D,$r=new D;class lg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=y2}=s;Id=this._renderer.getRenderTarget(),Ud=this._renderer.getActiveCubeFace(),Od=this._renderer.getActiveMipmapLevel(),Fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ug(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Id,Ud,Od),this._renderer.xr.enabled=Fd,e.scissorTest=!1,Is(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===fs||e.mapping===pa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Id=this._renderer.getRenderTarget(),Ud=this._renderer.getActiveCubeFace(),Od=this._renderer.getActiveMipmapLevel(),Fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Fi,format:pi,colorSpace:zc,depthBuffer:!1},r=cg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cg(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=S2(s)),this._blurMaterial=E2(s,e,n),this._ggxMaterial=M2(s,e,n)}return r}_compileMaterial(e){const n=new _e(new Kt,e);this._renderer.compile(n,Ha)}_sceneToCubeUV(e,n,i,r,s){const l=new kn(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,d=p.autoClear,m=p.toneMapping;p.getClearColor(og),p.toneMapping=Ii,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _e(new st,new Zr({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,v=S.material;let h=!1;const _=e.background;_?_.isColor&&(v.color.copy(_),e.background=null,h=!0):(v.color.copy(og),h=!0);for(let E=0;E<6;E++){const M=E%3;M===0?(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[E],s.y,s.z)):M===1?(l.up.set(0,0,c[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[E],s.z)):(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[E]));const b=this._cubeSize;Is(r,M*b,E>2?b:0,b,b),p.setRenderTarget(r),h&&p.render(S,l),p.render(e,l)}p.toneMapping=m,p.autoClear=d,e.background=_}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===fs||e.mapping===pa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=dg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ug());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Is(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Ha)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),p=Math.sqrt(c*c-f*f),d=c*1.25,m=p*d,{_lodMax:g}=this,S=this._sizeLods[i],v=3*S*(i>g-Zs?i-g+Zs:0),h=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=g-n,Is(s,v,h,3*S,2*S),r.setRenderTarget(s),r.render(o,Ha),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,Is(e,v,h,3*S,2*S),r.setRenderTarget(e),r.render(o,Ha)}_blur(e,n,i,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,n,i,a),this._blurPass(s,e,i,i,a)}_blurPass(e,n,i,r,s){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[r];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;const f=this._sizeLods[r],p=3*f*(r>this._lodMax-Zs?r-this._lodMax+Zs:0),d=4*(this._cubeSize-f);Is(n,p,d,3*f,2*f),a.setRenderTarget(n),a.render(l,Ha)}}function S2(t){const e=[],n=[];let i=t;const r=t-Zs+1+v2;for(let s=0;s<r;s++){const a=Math.pow(2,i);e.push(a);const o=1/(a-2),l=-o,c=1+o,f=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,d=6,m=3,g=new Float32Array(m*d*p),S=new Float32Array(m*d*p);for(let h=0;h<p;h++){const _=h%3*2/3-1,E=h>2?0:-1,M=[_,E,0,_+2/3,E,0,_+2/3,E+1,0,_,E,0,_+2/3,E+1,0,_,E+1,0];g.set(M,m*d*h);for(let b=0;b<d;b++){const T=f[b*2]*2-1,C=f[b*2+1]*2-1;h===0?$r.set(1,C,T):h===1?$r.set(-T,1,-C):h===2?$r.set(-T,C,1):h===3?$r.set(-1,C,-T):h===4?$r.set(-T,-1,C):$r.set(T,C,-1),$r.toArray(S,(h*d+b)*m)}}const v=new Kt;v.setAttribute("position",new Ui(g,m)),v.setAttribute("outputDirection",new Ui(S,m)),n.push(new _e(v,null)),i>Zs&&i--}return{lodMeshes:n,sizeLods:e}}function cg(t,e,n){const i=new vi(t,e,n);return i.texture.mapping=hu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Is(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function M2(t,e,n){return new ki({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:_2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pu(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function E2(t,e,n){return new ki({name:"SphericalGaussianBlur",defines:{SAMPLES:x2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:pu(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function ug(){return new ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pu(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function dg(){return new ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function pu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class U_ extends vi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new w_(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new st(5,5,5),s=new ki({name:"CubemapFromEquirect",uniforms:ma(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:In,blending:er});s.uniforms.tEquirect.value=n;const a=new _e(r,s),o=n.minFilter;return n.minFilter===ns&&(n.minFilter=fn),new Tw(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function w2(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,m=!1){return d==null?null:m?a(d):s(d)}function s(d){if(d&&d.isTexture){const m=d.mapping;if(m===rd||m===sd)if(e.has(d)){const g=e.get(d).texture;return o(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const S=new U_(g.height);return S.fromEquirectangularTexture(t,d),e.set(d,S),d.addEventListener("dispose",c),o(S.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const m=d.mapping,g=m===rd||m===sd,S=m===fs||m===pa;if(g||S){let v=n.get(d);const h=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==h)return i===null&&(i=new lg(t)),v=g?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,n.set(d,v),v.texture;if(v!==void 0)return v.texture;{const _=d.image;return g&&_&&_.height>0||S&&_&&l(_)?(i===null&&(i=new lg(t)),v=g?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,n.set(d,v),d.addEventListener("dispose",f),v.texture):null}}}return d}function o(d,m){return m===rd?d.mapping=fs:m===sd&&(d.mapping=pa),d}function l(d){let m=0;const g=6;for(let S=0;S<g;S++)d[S]!==void 0&&m++;return m===g}function c(d){const m=d.target;m.removeEventListener("dispose",c);const g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}function f(d){const m=d.target;m.removeEventListener("dispose",f);const g=n.get(m);g!==void 0&&(n.delete(m),g.dispose())}function p(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function b2(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&sa("WebGLRenderer: "+i+" extension not supported."),r}}}function T2(t,e,n,i){const r={},s=new WeakMap;function a(p){const d=p.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(p,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function l(p){const d=p.attributes;for(const m in d)e.update(d[m],t.ARRAY_BUFFER)}function c(p){const d=[],m=p.index,g=p.attributes.position;let S=0;if(g===void 0)return;if(m!==null){const _=m.array;S=m.version;for(let E=0,M=_.length;E<M;E+=3){const b=_[E+0],T=_[E+1],C=_[E+2];d.push(b,T,T,C,C,b)}}else{const _=g.array;S=g.version;for(let E=0,M=_.length/3-1;E<M;E+=3){const b=E+0,T=E+1,C=E+2;d.push(b,T,T,C,C,b)}}const v=new(g.count>=65535?S_:y_)(d,1);v.version=S;const h=s.get(p);h&&e.remove(h),s.set(p,v)}function f(p){const d=s.get(p);if(d){const m=p.index;m!==null&&d.version<m.version&&c(p)}else c(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:f}}function A2(t,e,n){let i;function r(p){i=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function l(p,d){t.drawElements(i,d,s,p*a),n.update(d,i,1)}function c(p,d,m){m!==0&&(t.drawElementsInstanced(i,d,s,p*a,m),n.update(d,i,m))}function f(p,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,p,0,m);let S=0;for(let v=0;v<m;v++)S+=d[v];n.update(S,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function C2(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:vt("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function R2(t,e,n){const i=new WeakMap,r=new Ot;function s(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=f!==void 0?f.length:0;let d=i.get(o);if(d===void 0||d.count!==p){let P=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",P)};var m=P;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),S===!0&&(M=2),v===!0&&(M=3);let b=o.attributes.position.count*M,T=1;b>e.maxTextureSize&&(T=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const C=new Float32Array(b*T*4*p),x=new v_(C,b,T,p);x.type=Pi,x.needsUpdate=!0;const A=M*4;for(let L=0;L<p;L++){const O=h[L],U=_[L],I=E[L],V=b*T*4*L;for(let Q=0;Q<O.count;Q++){const q=Q*A;g===!0&&(r.fromBufferAttribute(O,Q),C[V+q+0]=r.x,C[V+q+1]=r.y,C[V+q+2]=r.z,C[V+q+3]=0),S===!0&&(r.fromBufferAttribute(U,Q),C[V+q+4]=r.x,C[V+q+5]=r.y,C[V+q+6]=r.z,C[V+q+7]=0),v===!0&&(r.fromBufferAttribute(I,Q),C[V+q+8]=r.x,C[V+q+9]=r.y,C[V+q+10]=r.z,C[V+q+11]=I.itemSize===4?r.w:1)}}d={count:p,texture:x,size:new Pe(b,T)},i.set(o,d),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let g=0;for(let v=0;v<c.length;v++)g+=c[v];const S=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",S),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function P2(t,e,n,i,r){let s=new WeakMap;function a(c){const f=r.render.frame,p=c.geometry,d=e.get(c,p);if(s.get(d)!==f&&(e.update(d),s.set(d,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==f&&(m.update(),s.set(m,f))}return d}function o(){s=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:a,dispose:o}}const N2={[t_]:"LINEAR_TONE_MAPPING",[n_]:"REINHARD_TONE_MAPPING",[i_]:"CINEON_TONE_MAPPING",[r_]:"ACES_FILMIC_TONE_MAPPING",[a_]:"AGX_TONE_MAPPING",[o_]:"NEUTRAL_TONE_MAPPING",[s_]:"CUSTOM_TONE_MAPPING"};function D2(t,e,n,i,r,s){const a=new vi(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Kt;c.setAttribute("position",new bt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new bt([0,2,0,0,2,0],2));const f=new xw({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new _e(c,f),d=new qp(-1,1,1,-1,0,1);let m=null,g=null,S=!1,v,h=null,_=[],E=!1;this.setSize=function(M,b){a.setSize(M,b),o!==null&&o.setSize(M,b),l!==null&&l.setSize(M,b);for(let T=0;T<_.length;T++){const C=_[T];C.setSize&&C.setSize(M,b)}},this.setEffects=function(M){_=M,E=_.length>0&&_[0].isRenderPass===!0;const b=a.width,T=a.height;_.length>0&&o===null&&(o=new vi(b,T,{type:Fi,depthBuffer:!1,stencilBuffer:!1}),l=new vi(b,T,{type:Fi,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<_.length;C++){const x=_[C];x.setSize&&x.setSize(b,T)}},this.begin=function(M,b){if(S||M.toneMapping===Ii&&_.length===0)return!1;if(h=b,b!==null){const T=b.width,C=b.height;(a.width!==T||a.height!==C)&&this.setSize(T,C)}return E===!1&&M.setRenderTarget(a),v=M.toneMapping,M.toneMapping=Ii,!0},this.hasRenderPass=function(){return E},this.end=function(M,b){M.toneMapping=v,S=!0;let T=a,C=o;for(let x=0;x<_.length;x++){const A=_[x];A.enabled!==!1&&(A.render(M,C,T,b),A.needsSwap!==!1&&(T=C,C=C===o?l:o))}if(m!==M.outputColorSpace||g!==M.toneMapping){m=M.outputColorSpace,g=M.toneMapping,f.defines={},ct.getTransfer(m)===Mt&&(f.defines.SRGB_TRANSFER="");const x=N2[g];x&&(f.defines[x]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=T.texture,M.setRenderTarget(h),M.render(p,d),h=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),f.dispose()}}const O_=new yn,wf=new Do(1,1),F_=new v_,k_=new DE,z_=new w_,hg=[],fg=[],pg=new Float32Array(16),mg=new Float32Array(9),gg=new Float32Array(4);function ya(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=hg[r];if(s===void 0&&(s=new Float32Array(r),hg[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function $t(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function qt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function mu(t,e){let n=fg[e];n===void 0&&(n=new Int32Array(e),fg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function L2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function I2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;t.uniform2fv(this.addr,e),qt(n,e)}}function U2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if($t(n,e))return;t.uniform3fv(this.addr,e),qt(n,e)}}function O2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;t.uniform4fv(this.addr,e),qt(n,e)}}function F2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if($t(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),qt(n,e)}else{if($t(n,i))return;gg.set(i),t.uniformMatrix2fv(this.addr,!1,gg),qt(n,i)}}function k2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if($t(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),qt(n,e)}else{if($t(n,i))return;mg.set(i),t.uniformMatrix3fv(this.addr,!1,mg),qt(n,i)}}function z2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if($t(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),qt(n,e)}else{if($t(n,i))return;pg.set(i),t.uniformMatrix4fv(this.addr,!1,pg),qt(n,i)}}function B2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function H2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;t.uniform2iv(this.addr,e),qt(n,e)}}function G2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;t.uniform3iv(this.addr,e),qt(n,e)}}function V2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;t.uniform4iv(this.addr,e),qt(n,e)}}function W2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function j2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;t.uniform2uiv(this.addr,e),qt(n,e)}}function X2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;t.uniform3uiv(this.addr,e),qt(n,e)}}function Y2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;t.uniform4uiv(this.addr,e),qt(n,e)}}function $2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(wf.compareFunction=n.isReversedDepthBuffer()?zp:kp,s=wf):s=O_,n.setTexture2D(e||s,r)}function q2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||k_,r)}function K2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||z_,r)}function Z2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||F_,r)}function J2(t){switch(t){case 5126:return L2;case 35664:return I2;case 35665:return U2;case 35666:return O2;case 35674:return F2;case 35675:return k2;case 35676:return z2;case 5124:case 35670:return B2;case 35667:case 35671:return H2;case 35668:case 35672:return G2;case 35669:case 35673:return V2;case 5125:return W2;case 36294:return j2;case 36295:return X2;case 36296:return Y2;case 35678:case 36198:case 36298:case 36306:case 35682:return $2;case 35679:case 36299:case 36307:return q2;case 35680:case 36300:case 36308:case 36293:return K2;case 36289:case 36303:case 36311:case 36292:return Z2}}function Q2(t,e){t.uniform1fv(this.addr,e)}function eA(t,e){const n=ya(e,this.size,2);t.uniform2fv(this.addr,n)}function tA(t,e){const n=ya(e,this.size,3);t.uniform3fv(this.addr,n)}function nA(t,e){const n=ya(e,this.size,4);t.uniform4fv(this.addr,n)}function iA(t,e){const n=ya(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function rA(t,e){const n=ya(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function sA(t,e){const n=ya(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function aA(t,e){t.uniform1iv(this.addr,e)}function oA(t,e){t.uniform2iv(this.addr,e)}function lA(t,e){t.uniform3iv(this.addr,e)}function cA(t,e){t.uniform4iv(this.addr,e)}function uA(t,e){t.uniform1uiv(this.addr,e)}function dA(t,e){t.uniform2uiv(this.addr,e)}function hA(t,e){t.uniform3uiv(this.addr,e)}function fA(t,e){t.uniform4uiv(this.addr,e)}function pA(t,e,n){const i=this.cache,r=e.length,s=mu(n,r);$t(i,s)||(t.uniform1iv(this.addr,s),qt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=wf:a=O_;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function mA(t,e,n){const i=this.cache,r=e.length,s=mu(n,r);$t(i,s)||(t.uniform1iv(this.addr,s),qt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||k_,s[a])}function gA(t,e,n){const i=this.cache,r=e.length,s=mu(n,r);$t(i,s)||(t.uniform1iv(this.addr,s),qt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||z_,s[a])}function vA(t,e,n){const i=this.cache,r=e.length,s=mu(n,r);$t(i,s)||(t.uniform1iv(this.addr,s),qt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||F_,s[a])}function xA(t){switch(t){case 5126:return Q2;case 35664:return eA;case 35665:return tA;case 35666:return nA;case 35674:return iA;case 35675:return rA;case 35676:return sA;case 5124:case 35670:return aA;case 35667:case 35671:return oA;case 35668:case 35672:return lA;case 35669:case 35673:return cA;case 5125:return uA;case 36294:return dA;case 36295:return hA;case 36296:return fA;case 35678:case 36198:case 36298:case 36306:case 35682:return pA;case 35679:case 36299:case 36307:return mA;case 35680:case 36300:case 36308:case 36293:return gA;case 36289:case 36303:case 36311:case 36292:return vA}}class _A{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=J2(n.type)}}class yA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=xA(n.type)}}class SA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const kd=/(\w+)(\])?(\[|\.)?/g;function vg(t,e){t.seq.push(e),t.map[e.id]=e}function MA(t,e,n){const i=t.name,r=i.length;for(kd.lastIndex=0;;){const s=kd.exec(i),a=kd.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){vg(n,c===void 0?new _A(o,t,e):new yA(o,t,e));break}else{let p=n.map[o];p===void 0&&(p=new SA(o),vg(n,p)),n=p}}}class dc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);MA(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function xg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const EA=37297;let wA=0;function bA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const _g=new Ze;function TA(t){ct._getMatrix(_g,ct.workingColorSpace,t);const e=`mat3( ${_g.elements.map(n=>n.toFixed(4))} )`;switch(ct.getTransfer(t)){case Bc:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return je("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function yg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+bA(t.getShaderSource(e),o)}else return s}function AA(t,e){const n=TA(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const CA={[t_]:"Linear",[n_]:"Reinhard",[i_]:"Cineon",[r_]:"ACESFilmic",[a_]:"AgX",[o_]:"Neutral",[s_]:"Custom"};function RA(t,e){const n=CA[e];return n===void 0?(je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Xl=new D;function PA(){ct.getLuminanceCoefficients(Xl);const t=Xl.x.toFixed(4),e=Xl.y.toFixed(4),n=Xl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function NA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($a).join(`
`)}function DA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function LA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function $a(t){return t!==""}function Sg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const IA=/^[ \t]*#include +<([\w\d./]+)>/gm;function bf(t){return t.replace(IA,OA)}const UA=new Map;function OA(t,e){let n=tt[e];if(n===void 0){const i=UA.get(e);if(i!==void 0)n=tt[i],je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return bf(n)}const FA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eg(t){return t.replace(FA,kA)}function kA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function wg(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const zA={[ac]:"SHADOWMAP_TYPE_PCF",[Ya]:"SHADOWMAP_TYPE_VSM"};function BA(t){return zA[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const HA={[fs]:"ENVMAP_TYPE_CUBE",[pa]:"ENVMAP_TYPE_CUBE",[hu]:"ENVMAP_TYPE_CUBE_UV"};function GA(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":HA[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const VA={[pa]:"ENVMAP_MODE_REFRACTION"};function WA(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":VA[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const jA={[e_]:"ENVMAP_BLENDING_MULTIPLY",[$M]:"ENVMAP_BLENDING_MIX",[qM]:"ENVMAP_BLENDING_ADD"};function XA(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":jA[t.combine]||"ENVMAP_BLENDING_NONE"}function YA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function $A(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=BA(n),c=GA(n),f=WA(n),p=XA(n),d=YA(n),m=NA(n),g=DA(s),S=r.createProgram();let v,h,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter($a).join(`
`),v.length>0&&(v+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter($a).join(`
`),h.length>0&&(h+=`
`)):(v=[wg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($a).join(`
`),h=[wg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ii?"#define TONE_MAPPING":"",n.toneMapping!==Ii?tt.tonemapping_pars_fragment:"",n.toneMapping!==Ii?RA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,AA("linearToOutputTexel",n.outputColorSpace),PA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter($a).join(`
`)),a=bf(a),a=Sg(a,n),a=Mg(a,n),o=bf(o),o=Sg(o,n),o=Mg(o,n),a=Eg(a),o=Eg(o),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,v=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,h=["#define varying in",n.glslVersion===T0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===T0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const E=_+v+a,M=_+h+o,b=xg(r,r.VERTEX_SHADER,E),T=xg(r,r.FRAGMENT_SHADER,M);r.attachShader(S,b),r.attachShader(S,T),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function C(L){if(t.debug.checkShaderErrors){const O=r.getProgramInfoLog(S)||"",U=r.getShaderInfoLog(b)||"",I=r.getShaderInfoLog(T)||"",V=O.trim(),Q=U.trim(),q=I.trim();let H=!0,B=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(H=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,S,b,T);else{const W=yg(r,b,"vertex"),Z=yg(r,T,"fragment");vt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+V+`
`+W+`
`+Z)}else V!==""?je("WebGLProgram: Program Info Log:",V):(Q===""||q==="")&&(B=!1);B&&(L.diagnostics={runnable:H,programLog:V,vertexShader:{log:Q,prefix:v},fragmentShader:{log:q,prefix:h}})}r.deleteShader(b),r.deleteShader(T),x=new dc(r,S),A=LA(r,S)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(S,EA)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=wA++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=b,this.fragmentShader=T,this}let qA=0;class KA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new ZA(e),n.set(e,i)),i}}class ZA{constructor(e){this.id=qA++,this.code=e,this.usedTimes=0}}function JA(t){return t===ps||t===Fc||t===kc}function QA(t,e,n,i,r,s){const a=new x_,o=new KA,l=new Set,c=[],f=new Map,p=i.logarithmicDepthBuffer;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function S(x,A,P,L,O,U){const I=L.fog,V=O.geometry,Q=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,H=e.get(x.envMap||Q,q),B=H&&H.mapping===hu?H.image.height:null,W=m[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&je("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const Z=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,re=Z!==void 0?Z.length:0;let de=0;V.morphAttributes.position!==void 0&&(de=1),V.morphAttributes.normal!==void 0&&(de=2),V.morphAttributes.color!==void 0&&(de=3);let Be,Ce,Ve,J;if(W){const St=Ai[W];Be=St.vertexShader,Ce=St.fragmentShader}else{Be=x.vertexShader,Ce=x.fragmentShader;const St=o.getVertexShaderStage(x),pt=o.getFragmentShaderStage(x);o.update(x,St,pt),Ve=St.id,J=pt.id}const ne=t.getRenderTarget(),ve=t.state.buffers.depth.getReversed(),xe=O.isInstancedMesh===!0,pe=O.isBatchedMesh===!0,Ie=!!x.map,Qe=!!x.matcap,ke=!!H,qe=!!x.aoMap,ot=!!x.lightMap,Xe=!!x.bumpMap&&x.wireframe===!1,rt=!!x.normalMap,ft=!!x.displacementMap,Ct=!!x.emissiveMap,le=!!x.metalnessMap,$e=!!x.roughnessMap,N=x.anisotropy>0,Ke=x.clearcoat>0,Ge=x.dispersion>0,R=x.retroreflectivity>0,y=x.iridescence>0,G=x.sheen>0,X=x.transmission>0,ee=N&&!!x.anisotropyMap,oe=Ke&&!!x.clearcoatMap,fe=Ke&&!!x.clearcoatNormalMap,z=Ke&&!!x.clearcoatRoughnessMap,j=y&&!!x.iridescenceMap,ue=y&&!!x.iridescenceThicknessMap,we=G&&!!x.sheenColorMap,te=G&&!!x.sheenRoughnessMap,he=!!x.specularMap,Te=!!x.specularColorMap,Oe=!!x.specularIntensityMap,Ye=X&&!!x.transmissionMap,k=X&&!!x.thicknessMap,me=!!x.gradientMap,ie=!!x.alphaMap,ge=x.alphaTest>0,Se=!!x.alphaHash,se=!!x.extensions;let Fe=Ii;x.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Fe=t.toneMapping);const Le={shaderID:W,shaderType:x.type,shaderName:x.name,vertexShader:Be,fragmentShader:Ce,defines:x.defines,customVertexShaderID:Ve,customFragmentShaderID:J,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:pe,batchingColor:pe&&O._colorsTexture!==null,instancing:xe,instancingColor:xe&&O.instanceColor!==null,instancingMorph:xe&&O.morphTexture!==null,outputColorSpace:ne===null?t.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:ct.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ie,matcap:Qe,envMap:ke,envMapMode:ke&&H.mapping,envMapCubeUVHeight:B,aoMap:qe,lightMap:ot,bumpMap:Xe,normalMap:rt,displacementMap:ft,emissiveMap:Ct,normalMapObjectSpace:rt&&x.normalMapType===JM,normalMapTangentSpace:rt&&x.normalMapType===Mf,packedNormalMap:rt&&x.normalMapType===Mf&&JA(x.normalMap.format),metalnessMap:le,roughnessMap:$e,anisotropy:N,anisotropyMap:ee,clearcoat:Ke,clearcoatMap:oe,clearcoatNormalMap:fe,clearcoatRoughnessMap:z,dispersion:Ge,retroreflection:R,iridescence:y,iridescenceMap:j,iridescenceThicknessMap:ue,sheen:G,sheenColorMap:we,sheenRoughnessMap:te,specularMap:he,specularColorMap:Te,specularIntensityMap:Oe,transmission:X,transmissionMap:Ye,thicknessMap:k,gradientMap:me,opaque:x.transparent===!1&&x.blending===ro&&x.alphaToCoverage===!1,alphaMap:ie,alphaTest:ge,alphaHash:Se,combine:x.combine,mapUv:Ie&&g(x.map.channel),aoMapUv:qe&&g(x.aoMap.channel),lightMapUv:ot&&g(x.lightMap.channel),bumpMapUv:Xe&&g(x.bumpMap.channel),normalMapUv:rt&&g(x.normalMap.channel),displacementMapUv:ft&&g(x.displacementMap.channel),emissiveMapUv:Ct&&g(x.emissiveMap.channel),metalnessMapUv:le&&g(x.metalnessMap.channel),roughnessMapUv:$e&&g(x.roughnessMap.channel),anisotropyMapUv:ee&&g(x.anisotropyMap.channel),clearcoatMapUv:oe&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:fe&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:we&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:te&&g(x.sheenRoughnessMap.channel),specularMapUv:he&&g(x.specularMap.channel),specularColorMapUv:Te&&g(x.specularColorMap.channel),specularIntensityMapUv:Oe&&g(x.specularIntensityMap.channel),transmissionMapUv:Ye&&g(x.transmissionMap.channel),thicknessMapUv:k&&g(x.thicknessMap.channel),alphaMapUv:ie&&g(x.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(rt||N),vertexNormals:!!V.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!V.attributes.uv&&(Ie||ie),fog:!!I,useFog:x.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||V.attributes.normal===void 0&&rt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ve,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:de,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Ie&&x.map.isVideoTexture===!0&&ct.getTransfer(x.map.colorSpace)===Mt,decodeVideoTextureEmissive:Ct&&x.emissiveMap.isVideoTexture===!0&&ct.getTransfer(x.emissiveMap.colorSpace)===Mt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ri,flipSided:x.side===In,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:se&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&x.extensions.multiDraw===!0||pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Le.vertexUv1s=l.has(1),Le.vertexUv2s=l.has(2),Le.vertexUv3s=l.has(3),l.clear(),Le}function v(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)A.push(P),A.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(h(A,x),_(A,x),A.push(t.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function h(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numSunLights),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numSunLightShadows),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function _(x,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function E(x){const A=m[x.type];let P;if(A){const L=Ai[A];P=mw.clone(L.uniforms)}else P=x.uniforms;return P}function M(x,A){let P=f.get(A);return P!==void 0?++P.usedTimes:(P=new $A(t,A,x,r),c.push(P),f.set(A,P)),P}function b(x){if(--x.usedTimes===0){const A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),f.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function C(){o.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:E,acquireProgram:M,releaseProgram:b,releaseShaderCache:T,programs:c,dispose:C}}function eC(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function tC(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function bg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Tg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function o(d,m,g,S,v,h){let _=t[e];return _===void 0?(_={id:d.id,object:d,geometry:m,material:g,materialVariant:a(d),groupOrder:S,renderOrder:d.renderOrder,z:v,group:h},t[e]=_):(_.id=d.id,_.object=d,_.geometry=m,_.material=g,_.materialVariant=a(d),_.groupOrder=S,_.renderOrder=d.renderOrder,_.z=v,_.group=h),e++,_}function l(d,m,g,S,v,h,_){_.reversedDepth===!0&&(v=-v);const E=o(d,m,g,S,v,h);g.transmission>0?i.push(E):g.transparent===!0?r.push(E):n.push(E)}function c(d,m,g,S,v,h){const _=o(d,m,g,S,v,h);g.transmission>0?i.unshift(_):g.transparent===!0?r.unshift(_):n.unshift(_)}function f(d,m){n.length>1&&n.sort(d||tC),i.length>1&&i.sort(m||bg),r.length>1&&r.sort(m||bg)}function p(){for(let d=e,m=t.length;d<m;d++){const g=t[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:p,sort:f}}function nC(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Tg,t.set(i,[a])):r>=s.length?(a=new Tg,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function iC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new D,color:new nt};break;case"SpotLight":n={position:new D,direction:new D,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new D,color:new nt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new D,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":n={color:new nt,position:new D,halfWidth:new D,halfHeight:new D};break}return t[e.id]=n,n}}}function rC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let sC=0;function aC(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function oC(t){const e=new iC,n=rC(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const r=new D,s=new Dt,a=new Dt;function o(c){let f=0,p=0,d=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let m=0,g=0,S=0,v=0,h=0,_=0,E=0,M=0,b=0,T=0,C=0,x=0,A=0,P=0;c.sort(aC);for(let O=0,U=c.length;O<U;O++){const I=c[O],V=I.color,Q=I.intensity,q=I.distance;let H=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===ps?H=I.shadow.map.texture:H=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)f+=V.r*Q,p+=V.g*Q,d+=V.b*Q;else if(I.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(I.sh.coefficients[B],Q);P++}else if(I.isSunLight){const B=e.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const W=I.shadow,Z=n.get(I);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize.copy(W.mapSize).multiply(W.getFrameExtents()),i.sunShadow[g]=Z,i.sunShadowMap[g]=H;const re=W.getViewportCount();for(let de=0;de<re;de++)i.sunShadowMatrix[S+de]=W.getMatrix(de),i.sunShadowCascade[S+de]=W._cascadeData[de];S+=re,g++}i.sun[m]=B,m++}else if(I.isDirectionalLight){const B=e.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const W=I.shadow,Z=n.get(I);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,i.directionalShadow[v]=Z,i.directionalShadowMap[v]=H,i.directionalShadowMatrix[v]=I.shadow.matrix,b++}i.directional[v]=B,v++}else if(I.isSpotLight){const B=e.get(I);B.position.setFromMatrixPosition(I.matrixWorld),B.color.copy(V).multiplyScalar(Q),B.distance=q,B.coneCos=Math.cos(I.angle),B.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),B.decay=I.decay,i.spot[_]=B;const W=I.shadow;if(I.map&&(i.spotLightMap[x]=I.map,x++,W.updateMatrices(I),I.castShadow&&A++),i.spotLightMatrix[_]=W.matrix,I.castShadow){const Z=n.get(I);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,i.spotShadow[_]=Z,i.spotShadowMap[_]=H,C++}_++}else if(I.isRectAreaLight){const B=e.get(I);B.color.copy(V).multiplyScalar(Q),B.halfWidth.set(I.width*.5,0,0),B.halfHeight.set(0,I.height*.5,0),i.rectArea[E]=B,E++}else if(I.isPointLight){const B=e.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),B.distance=I.distance,B.decay=I.decay,I.castShadow){const W=I.shadow,Z=n.get(I);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,Z.shadowCameraNear=W.camera.near,Z.shadowCameraFar=W.camera.far,i.pointShadow[h]=Z,i.pointShadowMap[h]=H,i.pointShadowMatrix[h]=I.shadow.matrix,T++}i.point[h]=B,h++}else if(I.isHemisphereLight){const B=e.get(I);B.skyColor.copy(I.color).multiplyScalar(Q),B.groundColor.copy(I.groundColor).multiplyScalar(Q),i.hemi[M]=B,M++}}E>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=d;const L=i.hash;(L.sunLength!==m||L.directionalLength!==v||L.pointLength!==h||L.spotLength!==_||L.rectAreaLength!==E||L.hemiLength!==M||L.numSunShadows!==g||L.numDirectionalShadows!==b||L.numPointShadows!==T||L.numSpotShadows!==C||L.numSpotMaps!==x||L.numLightProbes!==P)&&(i.sun.length=m,i.directional.length=v,i.spot.length=_,i.rectArea.length=E,i.point.length=h,i.hemi.length=M,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=S,i.sunShadowCascade.length=S,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+x-A,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=P,L.sunLength=m,L.directionalLength=v,L.pointLength=h,L.spotLength=_,L.rectAreaLength=E,L.hemiLength=M,L.numSunShadows=g,L.numDirectionalShadows=b,L.numPointShadows=T,L.numSpotShadows=C,L.numSpotMaps=x,L.numLightProbes=P,i.version=sC++)}function l(c,f){let p=0,d=0,m=0,g=0,S=0,v=0;const h=f.matrixWorldInverse;for(let _=0,E=c.length;_<E;_++){const M=c[_];if(M.isSunLight){const b=i.sun[p];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(h),p++}else if(M.isDirectionalLight){const b=i.directional[d];b.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(h),d++}else if(M.isSpotLight){const b=i.spot[g];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(h),b.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(h),g++}else if(M.isRectAreaLight){const b=i.rectArea[S];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(h),a.identity(),s.copy(M.matrixWorld),s.premultiply(h),a.extractRotation(s),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),S++}else if(M.isPointLight){const b=i.point[m];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(h),m++}else if(M.isHemisphereLight){const b=i.hemi[v];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(h),v++}}}return{setup:o,setupView:l,state:i}}function Ag(t){const e=new oC(t),n=[],i=[],r=[];function s(d){p.camera=d,n.length=0,i.length=0,r.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function l(d){r.push(d)}function c(){e.setup(n)}function f(d){e.setupView(n,d)}const p={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:c,setupLightsView:f,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function lC(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Ag(t),e.set(r,[o])):s>=a.length?(o=new Ag(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const cC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uC=`uniform sampler2D shadow_pass;
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
}`,dC=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],hC=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Cg=new Dt,Ga=new D,zd=new D;function fC(t,e,n){let i=new Gp;const r=new Pe,s=new Pe,a=new Ot,o=new yw,l=new Sw,c={},f=n.maxTextureSize,p={[hs]:In,[In]:hs,[Ri]:Ri},d=new ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:cC,fragmentShader:uC}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Kt;g.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new _e(g,d),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ac;let h=this.type;this.render=function(T,C,x){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||T.length===0)return;this.type===Zx&&(je("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ac);const A=t.getRenderTarget(),P=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),O=t.state;O.setBlending(er),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const U=h!==this.type;U&&C.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(V=>V.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,V=T.length;I<V;I++){const Q=T[I],q=Q.shadow;if(q===void 0){je("WebGLShadowMap:",Q,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const H=q.getFrameExtents();r.multiply(H),s.copy(q.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/H.x),r.x=s.x*H.x,q.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/H.y),r.y=s.y*H.y,q.mapSize.y=s.y));const B=t.state.buffers.depth.getReversed();if(q.camera._reversedDepth=B,q.map===null||U===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Ya){if(Q.isPointLight){je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new vi(r.x,r.y,{format:ps,type:Fi,minFilter:fn,magFilter:fn,generateMipmaps:!1}),q.map.texture.name=Q.name+".shadowMap",q.map.depthTexture=new Do(r.x,r.y,Pi),q.map.depthTexture.name=Q.name+".shadowMapDepth",q.map.depthTexture.format=ar,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=sn,q.map.depthTexture.magFilter=sn}else Q.isPointLight?(q.map=new U_(r.x),q.map.depthTexture=new JE(r.x,Oi)):(q.map=new vi(r.x,r.y),q.map.depthTexture=new Do(r.x,r.y,Oi)),q.map.depthTexture.name=Q.name+".shadowMap",q.map.depthTexture.format=ar,this.type===ac?(q.map.depthTexture.compareFunction=B?zp:kp,q.map.depthTexture.minFilter=fn,q.map.depthTexture.magFilter=fn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=sn,q.map.depthTexture.magFilter=sn);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==r.x||q.map.height!==r.y)&&q.map.setSize(r.x,r.y);const W=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();Q.isPointLight!==!0&&q.updateMatrices(Q,x);for(let Z=0;Z<W;Z++){const re=q.getCamera(Z);if(Q.isPointLight){const de=q.camera,Be=q.matrix,Ce=Q.distance||de.far;Ce!==de.far&&(de.far=Ce,de.updateProjectionMatrix()),Ga.setFromMatrixPosition(Q.matrixWorld),de.position.copy(Ga),zd.copy(de.position),zd.add(dC[Z]),de.up.copy(hC[Z]),de.lookAt(zd),de.updateMatrixWorld(),Be.makeTranslation(-Ga.x,-Ga.y,-Ga.z),Cg.multiplyMatrices(de.projectionMatrix,de.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Cg,de.coordinateSystem,de.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)t.setRenderTarget(q.map,Z),t.clear();else{Z===0&&(t.setRenderTarget(q.map),t.clear());const de=q.getViewport(Z);a.set(s.x*de.x,s.y*de.y,s.x*de.z,s.y*de.w),O.viewport(a)}i=q.getFrustum(Z),M(C,x,re,Q,this.type)}q.isPointLightShadow!==!0&&this.type===Ya&&_(q,x),q.needsUpdate=!1}h=this.type,v.needsUpdate=!1,t.setRenderTarget(A,P,L)};function _(T,C){const x=e.update(S);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null?T.mapPass=new vi(r.x,r.y,{format:ps,type:Fi}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(C,null,x,d,S,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value.set(T.map.width,T.map.height),m.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(C,null,x,m,S,null)}function E(T,C,x,A){let P=null;const L=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)P=L;else if(P=x.isPointLight===!0?l:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const O=P.uuid,U=C.uuid;let I=c[O];I===void 0&&(I={},c[O]=I);let V=I[U];V===void 0&&(V=P.clone(),I[U]=V,C.addEventListener("dispose",b)),P=V}if(P.visible=C.visible,P.wireframe=C.wireframe,A===Ya?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:p[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const O=t.properties.get(P);O.light=x}return P}function M(T,C,x,A,P){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===Ya)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);const U=e.update(T),I=T.material;if(Array.isArray(I)){const V=U.groups;for(let Q=0,q=V.length;Q<q;Q++){const H=V[Q],B=I[H.materialIndex];if(B&&B.visible){const W=E(T,B,A,P);T.onBeforeShadow(t,T,C,x,U,W,H),t.renderBufferDirect(x,null,U,W,T,H),T.onAfterShadow(t,T,C,x,U,W,H)}}}else if(I.visible){const V=E(T,I,A,P);T.onBeforeShadow(t,T,C,x,U,V,null),t.renderBufferDirect(x,null,U,V,T,null),T.onAfterShadow(t,T,C,x,U,V,null)}}const O=T.children;for(let U=0,I=O.length;U<I;U++)M(O[U],C,x,A,P)}function b(T){T.target.removeEventListener("dispose",b);for(const x in c){const A=c[x],P=T.target.uuid;P in A&&(A[P].dispose(),delete A[P])}}}function pC(t,e){function n(){let k=!1;const me=new Ot;let ie=null;const ge=new Ot(0,0,0,0);return{setMask:function(Se){ie!==Se&&!k&&(t.colorMask(Se,Se,Se,Se),ie=Se)},setLocked:function(Se){k=Se},setClear:function(Se,se,Fe,Le,St){St===!0&&(Se*=Le,se*=Le,Fe*=Le),me.set(Se,se,Fe,Le),ge.equals(me)===!1&&(t.clearColor(Se,se,Fe,Le),ge.copy(me))},reset:function(){k=!1,ie=null,ge.set(-1,0,0,0)}}}function i(){let k=!1,me=!1,ie=null,ge=null,Se=null;return{setReversed:function(se){if(me!==se){const Fe=e.get("EXT_clip_control");se?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),me=se;const Le=Se;Se=null,this.setClear(Le)}},getReversed:function(){return me},setTest:function(se){se?ne(t.DEPTH_TEST):ve(t.DEPTH_TEST)},setMask:function(se){ie!==se&&!k&&(t.depthMask(se),ie=se)},setFunc:function(se){if(me&&(se=uE[se]),ge!==se){switch(se){case Oh:t.depthFunc(t.NEVER);break;case Fh:t.depthFunc(t.ALWAYS);break;case kh:t.depthFunc(t.LESS);break;case Ao:t.depthFunc(t.LEQUAL);break;case zh:t.depthFunc(t.EQUAL);break;case Bh:t.depthFunc(t.GEQUAL);break;case Hh:t.depthFunc(t.GREATER);break;case Gh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ge=se}},setLocked:function(se){k=se},setClear:function(se){Se!==se&&(Se=se,me&&(se=1-se),t.clearDepth(se))},reset:function(){k=!1,ie=null,ge=null,Se=null,me=!1}}}function r(){let k=!1,me=null,ie=null,ge=null,Se=null,se=null,Fe=null,Le=null,St=null;return{setTest:function(pt){k||(pt?ne(t.STENCIL_TEST):ve(t.STENCIL_TEST))},setMask:function(pt){me!==pt&&!k&&(t.stencilMask(pt),me=pt)},setFunc:function(pt,En,Xn){(ie!==pt||ge!==En||Se!==Xn)&&(t.stencilFunc(pt,En,Xn),ie=pt,ge=En,Se=Xn)},setOp:function(pt,En,Xn){(se!==pt||Fe!==En||Le!==Xn)&&(t.stencilOp(pt,En,Xn),se=pt,Fe=En,Le=Xn)},setLocked:function(pt){k=pt},setClear:function(pt){St!==pt&&(t.clearStencil(pt),St=pt)},reset:function(){k=!1,me=null,ie=null,ge=null,Se=null,se=null,Fe=null,Le=null,St=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let f={},p={},d={},m=new WeakMap,g=[],S=null,v=!1,h=null,_=null,E=null,M=null,b=null,T=null,C=null,x=new nt(0,0,0),A=0,P=!1,L=null,O=null,U=null,I=null,V=null;const Q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,H=0;const B=t.getParameter(t.VERSION);B.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(B)[1]),q=H>=1):B.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),q=H>=2);let W=null,Z={};const re=t.getParameter(t.SCISSOR_BOX),de=t.getParameter(t.VIEWPORT),Be=new Ot().fromArray(re),Ce=new Ot().fromArray(de);function Ve(k,me,ie,ge){const Se=new Uint8Array(4),se=t.createTexture();t.bindTexture(k,se),t.texParameteri(k,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(k,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Fe=0;Fe<ie;Fe++)k===t.TEXTURE_3D||k===t.TEXTURE_2D_ARRAY?t.texImage3D(me,0,t.RGBA,1,1,ge,0,t.RGBA,t.UNSIGNED_BYTE,Se):t.texImage2D(me+Fe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Se);return se}const J={};J[t.TEXTURE_2D]=Ve(t.TEXTURE_2D,t.TEXTURE_2D,1),J[t.TEXTURE_CUBE_MAP]=Ve(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[t.TEXTURE_2D_ARRAY]=Ve(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),J[t.TEXTURE_3D]=Ve(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(t.DEPTH_TEST),a.setFunc(Ao),Xe(!1),rt(E0),ne(t.CULL_FACE),qe(er);function ne(k){f[k]!==!0&&(t.enable(k),f[k]=!0)}function ve(k){f[k]!==!1&&(t.disable(k),f[k]=!1)}function xe(k,me){return d[k]!==me?(t.bindFramebuffer(k,me),d[k]=me,k===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=me),k===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=me),!0):!1}function pe(k,me){let ie=g,ge=!1;if(k){ie=m.get(me),ie===void 0&&(ie=[],m.set(me,ie));const Se=k.textures;if(ie.length!==Se.length||ie[0]!==t.COLOR_ATTACHMENT0){for(let se=0,Fe=Se.length;se<Fe;se++)ie[se]=t.COLOR_ATTACHMENT0+se;ie.length=Se.length,ge=!0}}else ie[0]!==t.BACK&&(ie[0]=t.BACK,ge=!0);ge&&t.drawBuffers(ie)}function Ie(k){return S!==k?(t.useProgram(k),S=k,!0):!1}const Qe={[Us]:t.FUNC_ADD,[NM]:t.FUNC_SUBTRACT,[DM]:t.FUNC_REVERSE_SUBTRACT};Qe[LM]=t.MIN,Qe[IM]=t.MAX;const ke={[UM]:t.ZERO,[OM]:t.ONE,[FM]:t.SRC_COLOR,[Jx]:t.SRC_ALPHA,[VM]:t.SRC_ALPHA_SATURATE,[HM]:t.DST_COLOR,[zM]:t.DST_ALPHA,[kM]:t.ONE_MINUS_SRC_COLOR,[Qx]:t.ONE_MINUS_SRC_ALPHA,[GM]:t.ONE_MINUS_DST_COLOR,[BM]:t.ONE_MINUS_DST_ALPHA,[WM]:t.CONSTANT_COLOR,[jM]:t.ONE_MINUS_CONSTANT_COLOR,[XM]:t.CONSTANT_ALPHA,[YM]:t.ONE_MINUS_CONSTANT_ALPHA};function qe(k,me,ie,ge,Se,se,Fe,Le,St,pt){if(k===er){v===!0&&(ve(t.BLEND),v=!1);return}if(v===!1&&(ne(t.BLEND),v=!0),k!==PM){if(k!==h||pt!==P){if((_!==Us||b!==Us)&&(t.blendEquation(t.FUNC_ADD),_=Us,b=Us),pt)switch(k){case ro:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Uh:t.blendFunc(t.ONE,t.ONE);break;case w0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case b0:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:vt("WebGLState: Invalid blending: ",k);break}else switch(k){case ro:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Uh:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case w0:vt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case b0:vt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:vt("WebGLState: Invalid blending: ",k);break}E=null,M=null,T=null,C=null,x.set(0,0,0),A=0,h=k,P=pt}return}Se=Se||me,se=se||ie,Fe=Fe||ge,(me!==_||Se!==b)&&(t.blendEquationSeparate(Qe[me],Qe[Se]),_=me,b=Se),(ie!==E||ge!==M||se!==T||Fe!==C)&&(t.blendFuncSeparate(ke[ie],ke[ge],ke[se],ke[Fe]),E=ie,M=ge,T=se,C=Fe),(Le.equals(x)===!1||St!==A)&&(t.blendColor(Le.r,Le.g,Le.b,St),x.copy(Le),A=St),h=k,P=!1}function ot(k,me){k.side===Ri?ve(t.CULL_FACE):ne(t.CULL_FACE);let ie=k.side===In;me&&(ie=!ie),Xe(ie),k.blending===ro&&k.transparent===!1?qe(er):qe(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),s.setMask(k.colorWrite);const ge=k.stencilWrite;o.setTest(ge),ge&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ct(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ne(t.SAMPLE_ALPHA_TO_COVERAGE):ve(t.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(k){L!==k&&(k?t.frontFace(t.CW):t.frontFace(t.CCW),L=k)}function rt(k){k!==CM?(ne(t.CULL_FACE),k!==O&&(k===E0?t.cullFace(t.BACK):k===RM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ve(t.CULL_FACE),O=k}function ft(k){k!==U&&(q&&t.lineWidth(k),U=k)}function Ct(k,me,ie){k?(ne(t.POLYGON_OFFSET_FILL),(I!==me||V!==ie)&&(I=me,V=ie,a.getReversed()&&(me=-me),t.polygonOffset(me,ie))):ve(t.POLYGON_OFFSET_FILL)}function le(k){k?ne(t.SCISSOR_TEST):ve(t.SCISSOR_TEST)}function $e(k){k===void 0&&(k=t.TEXTURE0+Q-1),W!==k&&(t.activeTexture(k),W=k)}function N(k,me,ie){ie===void 0&&(W===null?ie=t.TEXTURE0+Q-1:ie=W);let ge=Z[ie];ge===void 0&&(ge={type:void 0,texture:void 0},Z[ie]=ge),(ge.type!==k||ge.texture!==me)&&(W!==ie&&(t.activeTexture(ie),W=ie),t.bindTexture(k,me||J[k]),ge.type=k,ge.texture=me)}function Ke(){const k=Z[W];k!==void 0&&k.type!==void 0&&(t.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Ge(){try{t.compressedTexImage2D(...arguments)}catch(k){vt("WebGLState:",k)}}function R(){try{t.compressedTexImage3D(...arguments)}catch(k){vt("WebGLState:",k)}}function y(){try{t.texSubImage2D(...arguments)}catch(k){vt("WebGLState:",k)}}function G(){try{t.texSubImage3D(...arguments)}catch(k){vt("WebGLState:",k)}}function X(){try{t.compressedTexSubImage2D(...arguments)}catch(k){vt("WebGLState:",k)}}function ee(){try{t.compressedTexSubImage3D(...arguments)}catch(k){vt("WebGLState:",k)}}function oe(){try{t.texStorage2D(...arguments)}catch(k){vt("WebGLState:",k)}}function fe(){try{t.texStorage3D(...arguments)}catch(k){vt("WebGLState:",k)}}function z(){try{t.texImage2D(...arguments)}catch(k){vt("WebGLState:",k)}}function j(){try{t.texImage3D(...arguments)}catch(k){vt("WebGLState:",k)}}function ue(k){return p[k]!==void 0?p[k]:t.getParameter(k)}function we(k,me){p[k]!==me&&(t.pixelStorei(k,me),p[k]=me)}function te(k){Be.equals(k)===!1&&(t.scissor(k.x,k.y,k.z,k.w),Be.copy(k))}function he(k){Ce.equals(k)===!1&&(t.viewport(k.x,k.y,k.z,k.w),Ce.copy(k))}function Te(k,me){let ie=c.get(me);ie===void 0&&(ie=new WeakMap,c.set(me,ie));let ge=ie.get(k);ge===void 0&&(ge=t.getUniformBlockIndex(me,k.name),ie.set(k,ge))}function Oe(k,me){const ge=c.get(me).get(k);l.get(me)!==ge&&(t.uniformBlockBinding(me,ge,k.__bindingPointIndex),l.set(me,ge))}function Ye(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),f={},p={},W=null,Z={},d={},m=new WeakMap,g=[],S=null,v=!1,h=null,_=null,E=null,M=null,b=null,T=null,C=null,x=new nt(0,0,0),A=0,P=!1,L=null,O=null,U=null,I=null,V=null,Be.set(0,0,t.canvas.width,t.canvas.height),Ce.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ne,disable:ve,bindFramebuffer:xe,drawBuffers:pe,useProgram:Ie,setBlending:qe,setMaterial:ot,setFlipSided:Xe,setCullFace:rt,setLineWidth:ft,setPolygonOffset:Ct,setScissorTest:le,activeTexture:$e,bindTexture:N,unbindTexture:Ke,compressedTexImage2D:Ge,compressedTexImage3D:R,texImage2D:z,texImage3D:j,pixelStorei:we,getParameter:ue,updateUBOMapping:Te,uniformBlockBinding:Oe,texStorage2D:oe,texStorage3D:fe,texSubImage2D:y,texSubImage3D:G,compressedTexSubImage2D:X,compressedTexSubImage3D:ee,scissor:te,viewport:he,reset:Ye}}function mC(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pe,f=new WeakMap,p=new Set;let d;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(R,y){return g?new OffscreenCanvas(R,y):Hc("canvas")}function v(R,y,G){let X=1;const ee=Ge(R);if((ee.width>G||ee.height>G)&&(X=G/Math.max(ee.width,ee.height)),X<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const oe=Math.floor(X*ee.width),fe=Math.floor(X*ee.height);d===void 0&&(d=S(oe,fe));const z=y?S(oe,fe):d;return z.width=oe,z.height=fe,z.getContext("2d").drawImage(R,0,0,oe,fe),je("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+oe+"x"+fe+")."),z}else return"data"in R&&je("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),R;return R}function h(R){return R.generateMipmaps}function _(R){t.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function M(R,y,G,X,ee,oe=!1){if(R!==null){if(t[R]!==void 0)return t[R];je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let fe;X&&(fe=e.get("EXT_texture_norm16"),fe||je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let z=y;if(y===t.RED&&(G===t.FLOAT&&(z=t.R32F),G===t.HALF_FLOAT&&(z=t.R16F),G===t.UNSIGNED_BYTE&&(z=t.R8),G===t.UNSIGNED_SHORT&&fe&&(z=fe.R16_EXT),G===t.SHORT&&fe&&(z=fe.R16_SNORM_EXT)),y===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(z=t.R8UI),G===t.UNSIGNED_SHORT&&(z=t.R16UI),G===t.UNSIGNED_INT&&(z=t.R32UI),G===t.BYTE&&(z=t.R8I),G===t.SHORT&&(z=t.R16I),G===t.INT&&(z=t.R32I)),y===t.RG&&(G===t.FLOAT&&(z=t.RG32F),G===t.HALF_FLOAT&&(z=t.RG16F),G===t.UNSIGNED_BYTE&&(z=t.RG8),G===t.UNSIGNED_SHORT&&fe&&(z=fe.RG16_EXT),G===t.SHORT&&fe&&(z=fe.RG16_SNORM_EXT)),y===t.RG_INTEGER&&(G===t.UNSIGNED_BYTE&&(z=t.RG8UI),G===t.UNSIGNED_SHORT&&(z=t.RG16UI),G===t.UNSIGNED_INT&&(z=t.RG32UI),G===t.BYTE&&(z=t.RG8I),G===t.SHORT&&(z=t.RG16I),G===t.INT&&(z=t.RG32I)),y===t.RGB_INTEGER&&(G===t.UNSIGNED_BYTE&&(z=t.RGB8UI),G===t.UNSIGNED_SHORT&&(z=t.RGB16UI),G===t.UNSIGNED_INT&&(z=t.RGB32UI),G===t.BYTE&&(z=t.RGB8I),G===t.SHORT&&(z=t.RGB16I),G===t.INT&&(z=t.RGB32I)),y===t.RGBA_INTEGER&&(G===t.UNSIGNED_BYTE&&(z=t.RGBA8UI),G===t.UNSIGNED_SHORT&&(z=t.RGBA16UI),G===t.UNSIGNED_INT&&(z=t.RGBA32UI),G===t.BYTE&&(z=t.RGBA8I),G===t.SHORT&&(z=t.RGBA16I),G===t.INT&&(z=t.RGBA32I)),y===t.RGB&&(G===t.UNSIGNED_SHORT&&fe&&(z=fe.RGB16_EXT),G===t.SHORT&&fe&&(z=fe.RGB16_SNORM_EXT),G===t.UNSIGNED_INT_5_9_9_9_REV&&(z=t.RGB9_E5),G===t.UNSIGNED_INT_10F_11F_11F_REV&&(z=t.R11F_G11F_B10F)),y===t.RGBA){const j=oe?Bc:ct.getTransfer(ee);G===t.FLOAT&&(z=t.RGBA32F),G===t.HALF_FLOAT&&(z=t.RGBA16F),G===t.UNSIGNED_BYTE&&(z=j===Mt?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT&&fe&&(z=fe.RGBA16_EXT),G===t.SHORT&&fe&&(z=fe.RGBA16_SNORM_EXT),G===t.UNSIGNED_SHORT_4_4_4_4&&(z=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(z=t.RGB5_A1)}return(z===t.R16F||z===t.R32F||z===t.RG16F||z===t.RG32F||z===t.RGBA16F||z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),z}function b(R,y){let G;return R?y===null||y===Oi||y===Ro?G=t.DEPTH24_STENCIL8:y===Pi?G=t.DEPTH32F_STENCIL8:y===Co&&(G=t.DEPTH24_STENCIL8,je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Oi||y===Ro?G=t.DEPTH_COMPONENT24:y===Pi?G=t.DEPTH_COMPONENT32F:y===Co&&(G=t.DEPTH_COMPONENT16),G}function T(R,y){return h(R)===!0||R.isFramebufferTexture&&R.minFilter!==sn&&R.minFilter!==fn?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function C(R){const y=R.target;y.removeEventListener("dispose",C),A(y),y.isVideoTexture&&f.delete(y),y.isHTMLTexture&&p.delete(y)}function x(R){const y=R.target;y.removeEventListener("dispose",x),L(y)}function A(R){const y=i.get(R);if(y.__webglInit===void 0)return;const G=R.source,X=m.get(G);if(X){const ee=X[y.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&P(R),Object.keys(X).length===0&&m.delete(G)}i.remove(R)}function P(R){const y=i.get(R);t.deleteTexture(y.__webglTexture);const G=R.source,X=m.get(G);delete X[y.__cacheKey],a.memory.textures--}function L(R){const y=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(y.__webglFramebuffer[X]))for(let ee=0;ee<y.__webglFramebuffer[X].length;ee++)t.deleteFramebuffer(y.__webglFramebuffer[X][ee]);else t.deleteFramebuffer(y.__webglFramebuffer[X]);y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer[X])}else{if(Array.isArray(y.__webglFramebuffer))for(let X=0;X<y.__webglFramebuffer.length;X++)t.deleteFramebuffer(y.__webglFramebuffer[X]);else t.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let X=0;X<y.__webglColorRenderbuffer.length;X++)y.__webglColorRenderbuffer[X]&&t.deleteRenderbuffer(y.__webglColorRenderbuffer[X]);y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const G=R.textures;for(let X=0,ee=G.length;X<ee;X++){const oe=i.get(G[X]);oe.__webglTexture&&(t.deleteTexture(oe.__webglTexture),a.memory.textures--),i.remove(G[X])}i.remove(R)}let O=0;function U(){O=0}function I(){return O}function V(R){O=R}function Q(){const R=O;return R>=r.maxTextures&&je("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+r.maxTextures),O+=1,R}function q(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function H(R,y){const G=i.get(R);if(R.isVideoTexture&&N(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&G.__version!==R.version){const X=R.image;if(X===null)je("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)je("WebGLRenderer: Texture marked for update but image is incomplete");else{ve(G,R,y);return}}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+y)}function B(R,y){const G=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){ve(G,R,y);return}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+y)}function W(R,y){const G=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){ve(G,R,y);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+y)}function Z(R,y){const G=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&G.__version!==R.version){xe(G,R,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+y)}const re={[Vh]:t.REPEAT,[Ji]:t.CLAMP_TO_EDGE,[Wh]:t.MIRRORED_REPEAT},de={[sn]:t.NEAREST,[KM]:t.NEAREST_MIPMAP_NEAREST,[Sl]:t.NEAREST_MIPMAP_LINEAR,[fn]:t.LINEAR,[ad]:t.LINEAR_MIPMAP_NEAREST,[ns]:t.LINEAR_MIPMAP_LINEAR},Be={[eE]:t.NEVER,[sE]:t.ALWAYS,[tE]:t.LESS,[kp]:t.LEQUAL,[nE]:t.EQUAL,[zp]:t.GEQUAL,[iE]:t.GREATER,[rE]:t.NOTEQUAL};function Ce(R,y){if(y.type===Pi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===fn||y.magFilter===ad||y.magFilter===Sl||y.magFilter===ns||y.minFilter===fn||y.minFilter===ad||y.minFilter===Sl||y.minFilter===ns)&&je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,re[y.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,re[y.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,re[y.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,de[y.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,de[y.minFilter]),y.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Be[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===sn||y.minFilter!==Sl&&y.minFilter!==ns||y.type===Pi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Ve(R,y){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",C));const X=y.source;let ee=m.get(X);ee===void 0&&(ee={},m.set(X,ee));const oe=q(y);if(oe!==R.__cacheKey){ee[oe]===void 0&&(ee[oe]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,G=!0),ee[oe].usedTimes++;const fe=ee[R.__cacheKey];fe!==void 0&&(ee[R.__cacheKey].usedTimes--,fe.usedTimes===0&&P(y)),R.__cacheKey=oe,R.__webglTexture=ee[oe].texture}return G}function J(R,y,G){return Math.floor(Math.floor(R/G)/y)}function ne(R,y,G,X){const oe=R.updateRanges;if(oe.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,y.width,y.height,G,X,y.data);else{oe.sort((we,te)=>we.start-te.start);let fe=0;for(let we=1;we<oe.length;we++){const te=oe[fe],he=oe[we],Te=te.start+te.count,Oe=J(he.start,y.width,4),Ye=J(te.start,y.width,4);he.start<=Te+1&&Oe===Ye&&J(he.start+he.count-1,y.width,4)===Oe?te.count=Math.max(te.count,he.start+he.count-te.start):(++fe,oe[fe]=he)}oe.length=fe+1;const z=n.getParameter(t.UNPACK_ROW_LENGTH),j=n.getParameter(t.UNPACK_SKIP_PIXELS),ue=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,y.width);for(let we=0,te=oe.length;we<te;we++){const he=oe[we],Te=Math.floor(he.start/4),Oe=Math.ceil(he.count/4),Ye=Te%y.width,k=Math.floor(Te/y.width),me=Oe,ie=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Ye),n.pixelStorei(t.UNPACK_SKIP_ROWS,k),n.texSubImage2D(t.TEXTURE_2D,0,Ye,k,me,ie,G,X,y.data)}R.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,z),n.pixelStorei(t.UNPACK_SKIP_PIXELS,j),n.pixelStorei(t.UNPACK_SKIP_ROWS,ue)}}function ve(R,y,G){let X=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(X=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(X=t.TEXTURE_3D);const ee=Ve(R,y),oe=y.source;n.bindTexture(X,R.__webglTexture,t.TEXTURE0+G);const fe=i.get(oe);if(oe.version!==fe.__version||ee===!0){if(n.activeTexture(t.TEXTURE0+G),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const ie=ct.getPrimaries(ct.workingColorSpace),ge=y.colorSpace===Mr?null:ct.getPrimaries(y.colorSpace),Se=y.colorSpace===Mr||ie===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se)}n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment);let j=v(y.image,!1,r.maxTextureSize);j=Ke(y,j);const ue=s.convert(y.format,y.colorSpace),we=s.convert(y.type);let te=M(y.internalFormat,ue,we,y.normalized,y.colorSpace,y.isVideoTexture);Ce(X,y);let he;const Te=y.mipmaps,Oe=y.isVideoTexture!==!0,Ye=fe.__version===void 0||ee===!0,k=oe.dataReady,me=T(y,j);if(y.isDepthTexture)te=b(y.format===is,y.type),Ye&&(Oe?n.texStorage2D(t.TEXTURE_2D,1,te,j.width,j.height):n.texImage2D(t.TEXTURE_2D,0,te,j.width,j.height,0,ue,we,null));else if(y.isDataTexture)if(Te.length>0){Oe&&Ye&&n.texStorage2D(t.TEXTURE_2D,me,te,Te[0].width,Te[0].height);for(let ie=0,ge=Te.length;ie<ge;ie++)he=Te[ie],Oe?k&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,he.width,he.height,ue,we,he.data):n.texImage2D(t.TEXTURE_2D,ie,te,he.width,he.height,0,ue,we,he.data);y.generateMipmaps=!1}else Oe?(Ye&&n.texStorage2D(t.TEXTURE_2D,me,te,j.width,j.height),k&&ne(y,j,ue,we)):n.texImage2D(t.TEXTURE_2D,0,te,j.width,j.height,0,ue,we,j.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Oe&&Ye&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,te,Te[0].width,Te[0].height,j.depth);for(let ie=0,ge=Te.length;ie<ge;ie++)if(he=Te[ie],y.format!==pi)if(ue!==null)if(Oe){if(k)if(y.layerUpdates.size>0){const Se=ag(he.width,he.height,y.format,y.type);for(const se of y.layerUpdates){const Fe=he.data.subarray(se*Se/he.data.BYTES_PER_ELEMENT,(se+1)*Se/he.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,se,he.width,he.height,1,ue,Fe)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,he.width,he.height,j.depth,ue,he.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ie,te,he.width,he.height,j.depth,0,he.data,0,0);else je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?k&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,he.width,he.height,j.depth,ue,we,he.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ie,te,he.width,he.height,j.depth,0,ue,we,he.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Oe&&Ye&&n.texStorage2D(t.TEXTURE_2D,me,te,Te[0].width,Te[0].height);for(let ie=0,ge=Te.length;ie<ge;ie++)he=Te[ie],y.format!==pi?ue!==null?Oe?k&&n.compressedTexSubImage2D(t.TEXTURE_2D,ie,0,0,he.width,he.height,ue,he.data):n.compressedTexImage2D(t.TEXTURE_2D,ie,te,he.width,he.height,0,he.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?k&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,he.width,he.height,ue,we,he.data):n.texImage2D(t.TEXTURE_2D,ie,te,he.width,he.height,0,ue,we,he.data)}else if(y.isDataArrayTexture)if(Oe){if(Ye&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,te,j.width,j.height,j.depth),k)if(y.layerUpdates.size>0){const ie=ag(j.width,j.height,y.format,y.type);for(const ge of y.layerUpdates){const Se=j.data.subarray(ge*ie/j.data.BYTES_PER_ELEMENT,(ge+1)*ie/j.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ge,j.width,j.height,1,ue,we,Se)}y.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ue,we,j.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,te,j.width,j.height,j.depth,0,ue,we,j.data);else if(y.isData3DTexture)Oe?(Ye&&n.texStorage3D(t.TEXTURE_3D,me,te,j.width,j.height,j.depth),k&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ue,we,j.data)):n.texImage3D(t.TEXTURE_3D,0,te,j.width,j.height,j.depth,0,ue,we,j.data);else if(y.isFramebufferTexture){if(Ye)if(Oe)n.texStorage2D(t.TEXTURE_2D,me,te,j.width,j.height);else{let ie=j.width,ge=j.height;for(let Se=0;Se<me;Se++)n.texImage2D(t.TEXTURE_2D,Se,te,ie,ge,0,ue,we,null),ie>>=1,ge>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in t){const ie=t.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),j.parentNode!==ie){ie.appendChild(j),p.add(y),ie.onpaint=ge=>{const Se=ge.changedElements;for(const se of p)Se.includes(se.image)&&(se.needsUpdate=!0)},ie.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,j);else{const Se=t.RGBA,se=t.RGBA,Fe=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Se,se,Fe,j)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Te.length>0){if(Oe&&Ye){const ie=Ge(Te[0]);n.texStorage2D(t.TEXTURE_2D,me,te,ie.width,ie.height)}for(let ie=0,ge=Te.length;ie<ge;ie++)he=Te[ie],Oe?k&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,ue,we,he):n.texImage2D(t.TEXTURE_2D,ie,te,ue,we,he);y.generateMipmaps=!1}else if(Oe){if(Ye){const ie=Ge(j);n.texStorage2D(t.TEXTURE_2D,me,te,ie.width,ie.height)}k&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue,we,j)}else n.texImage2D(t.TEXTURE_2D,0,te,ue,we,j);h(y)&&_(X),fe.__version=oe.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function xe(R,y,G){if(y.image.length!==6)return;const X=Ve(R,y),ee=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+G);const oe=i.get(ee);if(ee.version!==oe.__version||X===!0){n.activeTexture(t.TEXTURE0+G);const fe=ct.getPrimaries(ct.workingColorSpace),z=y.colorSpace===Mr?null:ct.getPrimaries(y.colorSpace),j=y.colorSpace===Mr||fe===z?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);const ue=y.isCompressedTexture||y.image[0].isCompressedTexture,we=y.image[0]&&y.image[0].isDataTexture,te=[];for(let se=0;se<6;se++)!ue&&!we?te[se]=v(y.image[se],!0,r.maxCubemapSize):te[se]=we?y.image[se].image:y.image[se],te[se]=Ke(y,te[se]);const he=te[0],Te=s.convert(y.format,y.colorSpace),Oe=s.convert(y.type),Ye=M(y.internalFormat,Te,Oe,y.normalized,y.colorSpace),k=y.isVideoTexture!==!0,me=oe.__version===void 0||X===!0,ie=ee.dataReady;let ge=T(y,he);Ce(t.TEXTURE_CUBE_MAP,y);let Se;if(ue){k&&me&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ge,Ye,he.width,he.height);for(let se=0;se<6;se++){Se=te[se].mipmaps;for(let Fe=0;Fe<Se.length;Fe++){const Le=Se[Fe];y.format!==pi?Te!==null?k?ie&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe,0,0,Le.width,Le.height,Te,Le.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe,Ye,Le.width,Le.height,0,Le.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe,0,0,Le.width,Le.height,Te,Oe,Le.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe,Ye,Le.width,Le.height,0,Te,Oe,Le.data)}}}else{if(Se=y.mipmaps,k&&me){Se.length>0&&ge++;const se=Ge(te[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ge,Ye,se.width,se.height)}for(let se=0;se<6;se++)if(we){k?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,te[se].width,te[se].height,Te,Oe,te[se].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ye,te[se].width,te[se].height,0,Te,Oe,te[se].data);for(let Fe=0;Fe<Se.length;Fe++){const St=Se[Fe].image[se].image;k?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe+1,0,0,St.width,St.height,Te,Oe,St.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe+1,Ye,St.width,St.height,0,Te,Oe,St.data)}}else{k?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Te,Oe,te[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ye,Te,Oe,te[se]);for(let Fe=0;Fe<Se.length;Fe++){const Le=Se[Fe];k?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe+1,0,0,Te,Oe,Le.image[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe+1,Ye,Te,Oe,Le.image[se])}}}h(y)&&_(t.TEXTURE_CUBE_MAP),oe.__version=ee.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function pe(R,y,G,X,ee,oe){const fe=s.convert(G.format,G.colorSpace),z=s.convert(G.type),j=M(G.internalFormat,fe,z,G.normalized,G.colorSpace),ue=i.get(y),we=i.get(G);if(we.__renderTarget=y,!ue.__hasExternalTextures){const te=Math.max(1,y.width>>oe),he=Math.max(1,y.height>>oe);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,oe,j,te,he,y.depth,0,fe,z,null):n.texImage2D(ee,oe,j,te,he,0,fe,z,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),$e(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,X,ee,we.__webglTexture,0,le(y)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,X,ee,we.__webglTexture,oe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ie(R,y,G){if(t.bindRenderbuffer(t.RENDERBUFFER,R),y.depthBuffer){const X=y.depthTexture,ee=X&&X.isDepthTexture?X.type:null,oe=b(y.stencilBuffer,ee),fe=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;$e(y)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le(y),oe,y.width,y.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,le(y),oe,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,oe,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,fe,t.RENDERBUFFER,R)}else{const X=y.textures;for(let ee=0;ee<X.length;ee++){const oe=X[ee],fe=s.convert(oe.format,oe.colorSpace),z=s.convert(oe.type),j=M(oe.internalFormat,fe,z,oe.normalized,oe.colorSpace);$e(y)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le(y),j,y.width,y.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,le(y),j,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,j,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Qe(R,y,G){const X=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ee=i.get(y.depthTexture);if(ee.__renderTarget=y,(!ee.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),X){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,y.depthTexture.addEventListener("dispose",C)),ee.__webglTexture===void 0){ee.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),Ce(t.TEXTURE_CUBE_MAP,y.depthTexture);const ue=s.convert(y.depthTexture.format),we=s.convert(y.depthTexture.type);let te;y.depthTexture.format===ar?te=t.DEPTH_COMPONENT24:y.depthTexture.format===is&&(te=t.DEPTH24_STENCIL8);for(let he=0;he<6;he++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,te,y.width,y.height,0,ue,we,null)}}else H(y.depthTexture,0);const oe=ee.__webglTexture,fe=le(y),z=X?t.TEXTURE_CUBE_MAP_POSITIVE_X+G:t.TEXTURE_2D,j=y.depthTexture.format===is?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(y.depthTexture.format===ar)$e(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,j,z,oe,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,j,z,oe,0);else if(y.depthTexture.format===is)$e(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,j,z,oe,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,j,z,oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ke(R){const y=i.get(R),G=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const X=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),X){const ee=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,X.removeEventListener("dispose",ee)};X.addEventListener("dispose",ee),y.__depthDisposeCallback=ee}y.__boundDepthTexture=X}if(R.depthTexture&&!y.__autoAllocateDepthBuffer)if(G)for(let X=0;X<6;X++)Qe(y.__webglFramebuffer[X],R,X);else{const X=R.texture.mipmaps;X&&X.length>0?Qe(y.__webglFramebuffer[0],R,0):Qe(y.__webglFramebuffer,R,0)}else if(G){y.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[X]),y.__webglDepthbuffer[X]===void 0)y.__webglDepthbuffer[X]=t.createRenderbuffer(),Ie(y.__webglDepthbuffer[X],R,!1);else{const ee=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=y.__webglDepthbuffer[X];t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,oe)}}else{const X=R.texture.mipmaps;if(X&&X.length>0?n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=t.createRenderbuffer(),Ie(y.__webglDepthbuffer,R,!1);else{const ee=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=y.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,oe)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function qe(R,y,G){const X=i.get(R);y!==void 0&&pe(X.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&ke(R)}function ot(R){const y=R.texture,G=i.get(R),X=i.get(y);R.addEventListener("dispose",x);const ee=R.textures,oe=R.isWebGLCubeRenderTarget===!0,fe=ee.length>1;if(fe||(X.__webglTexture===void 0&&(X.__webglTexture=t.createTexture()),X.__version=y.version,a.memory.textures++),oe){G.__webglFramebuffer=[];for(let z=0;z<6;z++)if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer[z]=[];for(let j=0;j<y.mipmaps.length;j++)G.__webglFramebuffer[z][j]=t.createFramebuffer()}else G.__webglFramebuffer[z]=t.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer=[];for(let z=0;z<y.mipmaps.length;z++)G.__webglFramebuffer[z]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(fe)for(let z=0,j=ee.length;z<j;z++){const ue=i.get(ee[z]);ue.__webglTexture===void 0&&(ue.__webglTexture=t.createTexture(),a.memory.textures++)}if(R.samples>0&&$e(R)===!1){G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let z=0;z<ee.length;z++){const j=ee[z];G.__webglColorRenderbuffer[z]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[z]);const ue=s.convert(j.format,j.colorSpace),we=s.convert(j.type),te=M(j.internalFormat,ue,we,j.normalized,j.colorSpace,R.isXRRenderTarget===!0),he=le(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,he,te,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+z,t.RENDERBUFFER,G.__webglColorRenderbuffer[z])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),Ie(G.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(oe){n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture),Ce(t.TEXTURE_CUBE_MAP,y);for(let z=0;z<6;z++)if(y.mipmaps&&y.mipmaps.length>0)for(let j=0;j<y.mipmaps.length;j++)pe(G.__webglFramebuffer[z][j],R,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+z,j);else pe(G.__webglFramebuffer[z],R,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0);h(y)&&_(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(fe){for(let z=0,j=ee.length;z<j;z++){const ue=ee[z],we=i.get(ue);let te=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(te=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(te,we.__webglTexture),Ce(te,ue),pe(G.__webglFramebuffer,R,ue,t.COLOR_ATTACHMENT0+z,te,0),h(ue)&&_(te)}n.unbindTexture()}else{let z=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(z=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(z,X.__webglTexture),Ce(z,y),y.mipmaps&&y.mipmaps.length>0)for(let j=0;j<y.mipmaps.length;j++)pe(G.__webglFramebuffer[j],R,y,t.COLOR_ATTACHMENT0,z,j);else pe(G.__webglFramebuffer,R,y,t.COLOR_ATTACHMENT0,z,0);h(y)&&_(z),n.unbindTexture()}R.depthBuffer&&ke(R)}function Xe(R){const y=R.textures;for(let G=0,X=y.length;G<X;G++){const ee=y[G];if(h(ee)){const oe=E(R),fe=i.get(ee).__webglTexture;n.bindTexture(oe,fe),_(oe),n.unbindTexture()}}}const rt=[],ft=[];function Ct(R){if(R.samples>0){if($e(R)===!1){const y=R.textures,G=R.width,X=R.height;let ee=t.COLOR_BUFFER_BIT;const oe=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=i.get(R),z=y.length>1;if(z)for(let ue=0;ue<y.length;ue++)n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);const j=R.texture.mipmaps;j&&j.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let ue=0;ue<y.length;ue++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),z){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,fe.__webglColorRenderbuffer[ue]);const we=i.get(y[ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,we,0)}t.blitFramebuffer(0,0,G,X,0,0,G,X,ee,t.NEAREST),l===!0&&(rt.length=0,ft.length=0,rt.push(t.COLOR_ATTACHMENT0+ue),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(rt.push(oe),ft.push(oe),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ft)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,rt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),z)for(let ue=0;ue<y.length;ue++){n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,fe.__webglColorRenderbuffer[ue]);const we=i.get(y[ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,we,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){const y=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[y])}}}function le(R){return Math.min(r.maxSamples,R.samples)}function $e(R){const y=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function N(R){const y=a.render.frame;f.get(R)!==y&&(f.set(R,y),R.update())}function Ke(R,y){const G=R.colorSpace,X=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==zc&&G!==Mr&&(ct.getTransfer(G)===Mt?(X!==pi||ee!==zn)&&je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):vt("WebGLTextures: Unsupported texture color space:",G)),y}function Ge(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Q,this.resetTextureUnits=U,this.getTextureUnits=I,this.setTextureUnits=V,this.setTexture2D=H,this.setTexture2DArray=B,this.setTexture3D=W,this.setTextureCube=Z,this.rebindTextures=qe,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=$e,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function gC(t,e){function n(i,r=Mr){let s;const a=ct.getTransfer(r);if(i===zn)return t.UNSIGNED_BYTE;if(i===Lp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Ip)return t.UNSIGNED_SHORT_5_5_5_1;if(i===d_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===h_)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===c_)return t.BYTE;if(i===u_)return t.SHORT;if(i===Co)return t.UNSIGNED_SHORT;if(i===Dp)return t.INT;if(i===Oi)return t.UNSIGNED_INT;if(i===Pi)return t.FLOAT;if(i===Fi)return t.HALF_FLOAT;if(i===f_)return t.ALPHA;if(i===p_)return t.RGB;if(i===pi)return t.RGBA;if(i===ar)return t.DEPTH_COMPONENT;if(i===is)return t.DEPTH_STENCIL;if(i===m_)return t.RED;if(i===Up)return t.RED_INTEGER;if(i===ps)return t.RG;if(i===Op)return t.RG_INTEGER;if(i===Fp)return t.RGBA_INTEGER;if(i===oc||i===lc||i===cc||i===uc)if(a===Mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===oc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===lc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===cc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===uc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===oc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===lc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===cc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===uc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===jh||i===Xh||i===Yh||i===$h)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===jh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Xh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Yh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$h)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===qh||i===Kh||i===Zh||i===Jh||i===Qh||i===Fc||i===ef)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===qh||i===Kh)return a===Mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Zh)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Jh)return s.COMPRESSED_R11_EAC;if(i===Qh)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Fc)return s.COMPRESSED_RG11_EAC;if(i===ef)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===tf||i===nf||i===rf||i===sf||i===af||i===of||i===lf||i===cf||i===uf||i===df||i===hf||i===ff||i===pf||i===mf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===tf)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===nf)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===rf)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===sf)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===af)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===of)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===lf)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===cf)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===uf)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===df)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===hf)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ff)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===pf)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===mf)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===gf||i===vf||i===xf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===gf)return a===Mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===vf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===xf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===_f||i===yf||i===kc||i===Sf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===_f)return s.COMPRESSED_RED_RGTC1_EXT;if(i===yf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===kc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Sf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ro?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const vC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xC=`
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

}`;class _C{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new b_(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ki({vertexShader:vC,fragmentShader:xC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new _e(new Ho(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yC extends Hr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,p=null,d=null,m=null,g=null;const S=typeof XRWebGLBinding<"u",v=new _C,h={},_=n.getContextAttributes();let E=null,M=null;const b=[],T=[],C=new Pe;let x=null,A=null;const P=new kn;P.viewport=new Ot;const L=new kn;L.viewport=new Ot;const O=[P,L],U=new Aw;let I=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ne=b[J];return ne===void 0&&(ne=new fd,b[J]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(J){let ne=b[J];return ne===void 0&&(ne=new fd,b[J]=ne),ne.getGripSpace()},this.getHand=function(J){let ne=b[J];return ne===void 0&&(ne=new fd,b[J]=ne),ne.getHandSpace()};function Q(J){const ne=T.indexOf(J.inputSource);if(ne===-1)return;const ve=b[ne];ve!==void 0&&(ve.update(J.inputSource,J.frame,c||a),ve.dispatchEvent({type:J.type,data:J.inputSource}))}function q(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",H);for(let J=0;J<b.length;J++){const ne=T[J];ne!==null&&(T[J]=null,b[J].disconnect(ne))}I=null,V=null,v.reset();for(const J in h)delete h[J];if(e.setRenderTarget(E),m=null,d=null,p=null,r=null,M=null,Ve.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(C.width,C.height,!1),A!==null){const J=A.camera;J.fov=A.fov,J.zoom=A.zoom,J.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return p===null&&S&&(p=new XRWebGLBinding(r,n)),p},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",q),r.addEventListener("inputsourceschange",H),_.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(C),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,xe=null,pe=null;_.depth&&(pe=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ve=_.stencil?is:ar,xe=_.stencil?Ro:Oi);const Ie={colorFormat:n.RGBA8,depthFormat:pe,scaleFactor:s};p=this.getBinding(),d=p.createProjectionLayer(Ie),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new vi(d.textureWidth,d.textureHeight,{format:pi,type:zn,depthTexture:new Do(d.textureWidth,d.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const ve={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,ve),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new vi(m.framebufferWidth,m.framebufferHeight,{format:pi,type:zn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ve.setContext(r),Ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function H(J){for(let ne=0;ne<J.removed.length;ne++){const ve=J.removed[ne],xe=T.indexOf(ve);xe>=0&&(T[xe]=null,b[xe].disconnect(ve))}for(let ne=0;ne<J.added.length;ne++){const ve=J.added[ne];let xe=T.indexOf(ve);if(xe===-1){for(let Ie=0;Ie<b.length;Ie++)if(Ie>=T.length){T.push(ve),xe=Ie;break}else if(T[Ie]===null){T[Ie]=ve,xe=Ie;break}if(xe===-1)break}const pe=b[xe];pe&&pe.connect(ve)}}const B=new D,W=new D;function Z(J,ne,ve){B.setFromMatrixPosition(ne.matrixWorld),W.setFromMatrixPosition(ve.matrixWorld);const xe=B.distanceTo(W),pe=ne.projectionMatrix.elements,Ie=ve.projectionMatrix.elements,Qe=pe[14]/(pe[10]-1),ke=pe[14]/(pe[10]+1),qe=(pe[9]+1)/pe[5],ot=(pe[9]-1)/pe[5],Xe=(pe[8]-1)/pe[0],rt=(Ie[8]+1)/Ie[0],ft=Qe*Xe,Ct=Qe*rt,le=xe/(-Xe+rt),$e=le*-Xe;if(ne.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX($e),J.translateZ(le),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),pe[10]===-1)J.projectionMatrix.copy(ne.projectionMatrix),J.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const N=Qe+le,Ke=ke+le,Ge=ft-$e,R=Ct+(xe-$e),y=qe*ke/Ke*N,G=ot*ke/Ke*N;J.projectionMatrix.makePerspective(Ge,R,y,G,N,Ke),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function re(J,ne){ne===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ne.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let ne=J.near,ve=J.far;v.texture!==null&&(v.depthNear>0&&(ne=v.depthNear),v.depthFar>0&&(ve=v.depthFar)),U.near=L.near=P.near=ne,U.far=L.far=P.far=ve,(I!==U.near||V!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),I=U.near,V=U.far),U.layers.mask=J.layers.mask|6,P.layers.mask=U.layers.mask&-5,L.layers.mask=U.layers.mask&-3;const xe=J.parent,pe=U.cameras;re(U,xe);for(let Ie=0;Ie<pe.length;Ie++)re(pe[Ie],xe);pe.length===2?Z(U,P,L):U.projectionMatrix.copy(P.projectionMatrix),A===null&&J.isPerspectiveCamera&&(A={camera:J,fov:J.fov,zoom:J.zoom}),de(J,U,xe)};function de(J,ne,ve){ve===null?J.matrix.copy(ne.matrixWorld):(J.matrix.copy(ve.matrixWorld),J.matrix.invert(),J.matrix.multiply(ne.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ne.projectionMatrix),J.projectionMatrixInverse.copy(ne.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=No*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(U)},this.getCameraTexture=function(J){return h[J]};let Be=null;function Ce(J,ne){if(f=ne.getViewerPose(c||a),g=ne,f!==null){const ve=f.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let xe=!1;ve.length!==U.cameras.length&&(U.cameras.length=0,xe=!0);for(let ke=0;ke<ve.length;ke++){const qe=ve[ke];let ot=null;if(m!==null)ot=m.getViewport(qe);else{const rt=p.getViewSubImage(d,qe);ot=rt.viewport,ke===0&&(e.setRenderTargetTextures(M,rt.colorTexture,rt.depthStencilTexture),e.setRenderTarget(M))}let Xe=O[ke];Xe===void 0&&(Xe=new kn,Xe.layers.enable(ke),Xe.viewport=new Ot,O[ke]=Xe),Xe.matrix.fromArray(qe.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(qe.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(ot.x,ot.y,ot.width,ot.height),ke===0&&(U.matrix.copy(Xe.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),xe===!0&&U.cameras.push(Xe)}const pe=r.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){p=i.getBinding();const ke=p.getDepthInformation(ve[0]);ke&&ke.isValid&&ke.texture&&v.init(ke,r.renderState)}if(pe&&pe.includes("camera-access")&&S){e.state.unbindTexture(),p=i.getBinding();for(let ke=0;ke<ve.length;ke++){const qe=ve[ke].camera;if(qe){let ot=h[qe];ot||(ot=new b_,h[qe]=ot);const Xe=p.getCameraImage(qe);ot.sourceTexture=Xe}}}}for(let ve=0;ve<b.length;ve++){const xe=T[ve],pe=b[ve];xe!==null&&pe!==void 0&&pe.update(xe,ne,c||a)}Be&&Be(J,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}const Ve=new L_;Ve.setAnimationLoop(Ce),this.setAnimationLoop=function(J){Be=J},this.dispose=function(){}}}const SC=new Dt,B_=new Ze;B_.set(-1,0,0,0,1,0,0,0,1);function MC(t,e){function n(v,h){v.matrixAutoUpdate===!0&&v.updateMatrix(),h.value.copy(v.matrix)}function i(v,h){h.color.getRGB(v.fogColor.value,R_(t)),h.isFog?(v.fogNear.value=h.near,v.fogFar.value=h.far):h.isFogExp2&&(v.fogDensity.value=h.density)}function r(v,h,_,E,M){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(v,h):h.isMeshLambertMaterial?(s(v,h),h.envMap&&(v.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(v,h),p(v,h)):h.isMeshPhongMaterial?(s(v,h),f(v,h),h.envMap&&(v.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(v,h),d(v,h),h.isMeshPhysicalMaterial&&m(v,h,M)):h.isMeshMatcapMaterial?(s(v,h),g(v,h)):h.isMeshDepthMaterial?s(v,h):h.isMeshDistanceMaterial?(s(v,h),S(v,h)):h.isMeshNormalMaterial?s(v,h):h.isLineBasicMaterial?(a(v,h),h.isLineDashedMaterial&&o(v,h)):h.isPointsMaterial?l(v,h,_,E):h.isSpriteMaterial?c(v,h):h.isShadowMaterial?(v.color.value.copy(h.color),v.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(v,h){v.opacity.value=h.opacity,h.color&&v.diffuse.value.copy(h.color),h.emissive&&v.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(v.map.value=h.map,n(h.map,v.mapTransform)),h.alphaMap&&(v.alphaMap.value=h.alphaMap,n(h.alphaMap,v.alphaMapTransform)),h.bumpMap&&(v.bumpMap.value=h.bumpMap,n(h.bumpMap,v.bumpMapTransform),v.bumpScale.value=h.bumpScale,h.side===In&&(v.bumpScale.value*=-1)),h.normalMap&&(v.normalMap.value=h.normalMap,n(h.normalMap,v.normalMapTransform),v.normalScale.value.copy(h.normalScale),h.side===In&&v.normalScale.value.negate()),h.displacementMap&&(v.displacementMap.value=h.displacementMap,n(h.displacementMap,v.displacementMapTransform),v.displacementScale.value=h.displacementScale,v.displacementBias.value=h.displacementBias),h.emissiveMap&&(v.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,v.emissiveMapTransform)),h.specularMap&&(v.specularMap.value=h.specularMap,n(h.specularMap,v.specularMapTransform)),h.alphaTest>0&&(v.alphaTest.value=h.alphaTest);const _=e.get(h),E=_.envMap,M=_.envMapRotation;E&&(v.envMap.value=E,v.envMapRotation.value.setFromMatrix4(SC.makeRotationFromEuler(M)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(B_),v.reflectivity.value=h.reflectivity,v.ior.value=h.ior,v.refractionRatio.value=h.refractionRatio),h.lightMap&&(v.lightMap.value=h.lightMap,v.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,v.lightMapTransform)),h.aoMap&&(v.aoMap.value=h.aoMap,v.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,v.aoMapTransform))}function a(v,h){v.diffuse.value.copy(h.color),v.opacity.value=h.opacity,h.map&&(v.map.value=h.map,n(h.map,v.mapTransform))}function o(v,h){v.dashSize.value=h.dashSize,v.totalSize.value=h.dashSize+h.gapSize,v.scale.value=h.scale}function l(v,h,_,E){v.diffuse.value.copy(h.color),v.opacity.value=h.opacity,v.size.value=h.size*_,v.scale.value=E*.5,h.map&&(v.map.value=h.map,n(h.map,v.uvTransform)),h.alphaMap&&(v.alphaMap.value=h.alphaMap,n(h.alphaMap,v.alphaMapTransform)),h.alphaTest>0&&(v.alphaTest.value=h.alphaTest)}function c(v,h){v.diffuse.value.copy(h.color),v.opacity.value=h.opacity,v.rotation.value=h.rotation,h.map&&(v.map.value=h.map,n(h.map,v.mapTransform)),h.alphaMap&&(v.alphaMap.value=h.alphaMap,n(h.alphaMap,v.alphaMapTransform)),h.alphaTest>0&&(v.alphaTest.value=h.alphaTest)}function f(v,h){v.specular.value.copy(h.specular),v.shininess.value=Math.max(h.shininess,1e-4)}function p(v,h){h.gradientMap&&(v.gradientMap.value=h.gradientMap)}function d(v,h){v.metalness.value=h.metalness,h.metalnessMap&&(v.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,v.metalnessMapTransform)),v.roughness.value=h.roughness,h.roughnessMap&&(v.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,v.roughnessMapTransform)),h.envMap&&(v.envMapIntensity.value=h.envMapIntensity)}function m(v,h,_){v.ior.value=h.ior,h.sheen>0&&(v.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),v.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(v.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,v.sheenColorMapTransform)),h.sheenRoughnessMap&&(v.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,v.sheenRoughnessMapTransform))),h.clearcoat>0&&(v.clearcoat.value=h.clearcoat,v.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(v.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,v.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(v.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===In&&v.clearcoatNormalScale.value.negate())),h.dispersion>0&&(v.dispersion.value=h.dispersion),h.retroreflectivity>0&&(v.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(v.iridescence.value=h.iridescence,v.iridescenceIOR.value=h.iridescenceIOR,v.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(v.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,v.iridescenceMapTransform)),h.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),h.transmission>0&&(v.transmission.value=h.transmission,v.transmissionSamplerMap.value=_.texture,v.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(v.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,v.transmissionMapTransform)),v.thickness.value=h.thickness,h.thicknessMap&&(v.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=h.attenuationDistance,v.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(v.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(v.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=h.specularIntensity,v.specularColor.value.copy(h.specularColor),h.specularColorMap&&(v.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,v.specularColorMapTransform)),h.specularIntensityMap&&(v.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,v.specularIntensityMapTransform))}function g(v,h){h.matcap&&(v.matcap.value=h.matcap)}function S(v,h){const _=e.get(h).light;v.referencePosition.value.setFromMatrixPosition(_.matrixWorld),v.nearDistance.value=_.shadow.camera.near,v.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function EC(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,b){const T=b.program;i.uniformBlockBinding(M,T)}function c(M,b){let T=r[M.id];T===void 0&&(v(M),T=f(M),r[M.id]=T,M.addEventListener("dispose",_));const C=b.program;i.updateUBOMapping(M,C);const x=e.render.frame;s[M.id]!==x&&(d(M),s[M.id]=x)}function f(M){const b=p();M.__bindingPointIndex=b;const T=t.createBuffer(),C=M.__size,x=M.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,C,x),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,b,T),T}function p(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return vt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const b=r[M.id],T=M.uniforms,C=M.__cache;t.bindBuffer(t.UNIFORM_BUFFER,b);for(let x=0,A=T.length;x<A;x++){const P=T[x];if(Array.isArray(P))for(let L=0,O=P.length;L<O;L++)m(P[L],x,L,C);else m(P,x,0,C)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(M,b,T,C){if(S(M,b,T,C)===!0){const x=M.__offset,A=M.value;if(Array.isArray(A)){let P=0;for(let L=0;L<A.length;L++){const O=A[L],U=h(O);g(O,M.__data,P),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(P+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,M.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,x,M.__data)}}function g(M,b,T){typeof M=="number"||typeof M=="boolean"?b[0]=M:M.isMatrix3?(b[0]=M.elements[0],b[1]=M.elements[1],b[2]=M.elements[2],b[3]=0,b[4]=M.elements[3],b[5]=M.elements[4],b[6]=M.elements[5],b[7]=0,b[8]=M.elements[6],b[9]=M.elements[7],b[10]=M.elements[8],b[11]=0):ArrayBuffer.isView(M)?b.set(new M.constructor(M.buffer,M.byteOffset,b.length)):M.toArray(b,T)}function S(M,b,T,C){const x=M.value,A=b+"_"+T;if(C[A]===void 0)return typeof x=="number"||typeof x=="boolean"?C[A]=x:ArrayBuffer.isView(x)?C[A]=x.slice():C[A]=x.clone(),!0;{const P=C[A];if(typeof x=="number"||typeof x=="boolean"){if(P!==x)return C[A]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(P.equals(x)===!1)return P.copy(x),!0}}return!1}function v(M){const b=M.uniforms;let T=0;const C=16;for(let A=0,P=b.length;A<P;A++){const L=Array.isArray(b[A])?b[A]:[b[A]];for(let O=0,U=L.length;O<U;O++){const I=L[O],V=Array.isArray(I.value)?I.value:[I.value];for(let Q=0,q=V.length;Q<q;Q++){const H=V[Q],B=h(H),W=T%C,Z=W%B.boundary,re=W+Z;T+=Z,re!==0&&C-re<B.storage&&(T+=C-re),I.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=T,T+=B.storage}}}const x=T%C;return x>0&&(T+=C-x),M.__size=T,M.__cache={},this}function h(M){const b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(b.boundary=16,b.storage=M.byteLength):je("WebGLRenderer: Unsupported uniform value type.",M),b}function _(M){const b=M.target;b.removeEventListener("dispose",_);const T=a.indexOf(b.__bindingPointIndex);a.splice(T,1),t.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function E(){for(const M in r)t.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:l,update:c,dispose:E}}const wC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let bi=null;function bC(){return bi===null&&(bi=new $E(wC,16,16,ps,Fi),bi.name="DFG_LUT",bi.minFilter=fn,bi.magFilter=fn,bi.wrapS=Ji,bi.wrapT=Ji,bi.generateMipmaps=!1,bi.needsUpdate=!0),bi}class TC{constructor(e={}){const{canvas:n=lE(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:m=zn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const S=m,v=new Set([Fp,Op,Up]),h=new Set([zn,Oi,Co,Ro,Lp,Ip]),_=new Uint32Array(4),E=new Int32Array(4),M=new D;let b=null,T=null;const C=[],x=[];let A=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let L=!1,O=null,U=null,I=null,V=null;this._outputColorSpace=Zn;let Q=0,q=0,H=null,B=-1,W=null;const Z=new Ot,re=new Ot;let de=null;const Be=new nt(0);let Ce=0,Ve=n.width,J=n.height,ne=1,ve=null,xe=null;const pe=new Ot(0,0,Ve,J),Ie=new Ot(0,0,Ve,J);let Qe=!1;const ke=new Gp;let qe=!1,ot=!1;const Xe=new Dt,rt=new D,ft=new Ot,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let le=!1;function $e(){return H===null?ne:1}let N=i;function Ke(w,F){return n.getContext(w,F)}let Ge,R,y,G,X,ee,oe,fe,z,j,ue,we,te,he,Te,Oe,Ye,k,me,ie,ge,Se,se;try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Np}`),n.addEventListener("webglcontextlost",St,!1),n.addEventListener("webglcontextrestored",pt,!1),n.addEventListener("webglcontextcreationerror",En,!1),N===null){const F="webgl2";if(N=Ke(F,w),N===null)throw Ke(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Fe()}catch(w){throw n.removeEventListener("webglcontextlost",St,!1),n.removeEventListener("webglcontextrestored",pt,!1),n.removeEventListener("webglcontextcreationerror",En,!1),vt("WebGLRenderer: "+w.message),w}function Fe(){Ge=new b2(N),Ge.init(),ge=new gC(N,Ge),R=new m2(N,Ge,e,ge),y=new pC(N,Ge),R.reversedDepthBuffer&&d&&y.buffers.depth.setReversed(!0),U=N.createFramebuffer(),I=N.createFramebuffer(),V=N.createFramebuffer(),G=new C2(N),X=new eC,ee=new mC(N,Ge,y,X,R,ge,G),oe=new w2(P),fe=new Pw(N),Se=new f2(N,fe),z=new T2(N,fe,G,Se),j=new P2(N,z,fe,Se,G),k=new R2(N,R,ee),Te=new g2(X),ue=new QA(P,oe,Ge,R,Se,Te),we=new MC(P,X),te=new nC,he=new lC(Ge),Ye=new h2(P,oe,y,j,g,l),Oe=new fC(P,j,R),se=new EC(N,G,R,y),me=new p2(N,Ge,G),ie=new A2(N,Ge,G),G.programs=ue.programs,P.capabilities=R,P.extensions=Ge,P.properties=X,P.renderLists=te,P.shadowMap=Oe,P.state=y,P.info=G}S!==zn&&(A=new D2(S,n.width,n.height,o,r,s));const Le=new yC(P,N);this.xr=Le,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const w=Ge.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ge.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(w){w!==void 0&&(ne=w,this.setSize(Ve,J,!1))},this.getSize=function(w){return w.set(Ve,J)},this.setSize=function(w,F,K=!0){if(Le.isPresenting){je("WebGLRenderer: Can't change size while VR device is presenting.");return}Ve=w,J=F,n.width=Math.floor(w*ne),n.height=Math.floor(F*ne),K===!0&&(n.style.width=w+"px",n.style.height=F+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(Ve*ne,J*ne).floor()},this.setDrawingBufferSize=function(w,F,K){Ve=w,J=F,ne=K,n.width=Math.floor(w*K),n.height=Math.floor(F*K),this.setViewport(0,0,w,F)},this.setEffects=function(w){if(S===zn){vt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let F=0;F<w.length;F++)if(w[F].isOutputPass===!0){je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(Z)},this.getViewport=function(w){return w.copy(pe)},this.setViewport=function(w,F,K,$){w.isVector4?pe.set(w.x,w.y,w.z,w.w):pe.set(w,F,K,$),y.viewport(Z.copy(pe).multiplyScalar(ne).round())},this.getScissor=function(w){return w.copy(Ie)},this.setScissor=function(w,F,K,$){w.isVector4?Ie.set(w.x,w.y,w.z,w.w):Ie.set(w,F,K,$),y.scissor(re.copy(Ie).multiplyScalar(ne).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(w){y.setScissorTest(Qe=w)},this.setOpaqueSort=function(w){ve=w},this.setTransparentSort=function(w){xe=w},this.getClearColor=function(w){return w.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor(...arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha(...arguments)},this.clear=function(w=!0,F=!0,K=!0){let $=0;if(w){let Y=!1;if(H!==null){const Me=H.texture.format;Y=v.has(Me)}if(Y){const Me=H.texture.type,Ae=h.has(Me),ye=Ye.getClearColor(),Ne=Ye.getClearAlpha(),Ue=ye.r,Je=ye.g,it=ye.b;Ae?(_[0]=Ue,_[1]=Je,_[2]=it,_[3]=Ne,N.clearBufferuiv(N.COLOR,0,_)):(E[0]=Ue,E[1]=Je,E[2]=it,E[3]=Ne,N.clearBufferiv(N.COLOR,0,E))}else $|=N.COLOR_BUFFER_BIT}F&&($|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&($|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&N.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),O=w},this.dispose=function(){n.removeEventListener("webglcontextlost",St,!1),n.removeEventListener("webglcontextrestored",pt,!1),n.removeEventListener("webglcontextcreationerror",En,!1),Ye.dispose(),te.dispose(),he.dispose(),X.dispose(),oe.dispose(),j.dispose(),Se.dispose(),se.dispose(),ue.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",Sa),Le.removeEventListener("sessionend",Wo),_i.stop()};function St(w){w.preventDefault(),C0("WebGLRenderer: Context Lost."),L=!0}function pt(){C0("WebGLRenderer: Context Restored."),L=!1;const w=G.autoReset,F=Oe.enabled,K=Oe.autoUpdate,$=Oe.needsUpdate,Y=Oe.type;Fe(),G.autoReset=w,Oe.enabled=F,Oe.autoUpdate=K,Oe.needsUpdate=$,Oe.type=Y}function En(w){vt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Xn(w){const F=w.target;F.removeEventListener("dispose",Xn),Go(F)}function Go(w){Vo(w),X.remove(w)}function Vo(w){const F=X.get(w).programs;F!==void 0&&(F.forEach(function(K){ue.releaseProgram(K)}),w.isShaderMaterial&&ue.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,K,$,Y,Me){F===null&&(F=Ct);const Ae=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,ye=vu(w,F,K,$,Y);y.setMaterial($,Ae);let Ne=K.index,Ue=1;if($.wireframe===!0){if(Ne=z.getWireframeAttribute(K),Ne===void 0)return;Ue=2}const Je=K.drawRange,it=K.attributes.position;let De=Je.start*Ue,mt=(Je.start+Je.count)*Ue;Me!==null&&(De=Math.max(De,Me.start*Ue),mt=Math.min(mt,(Me.start+Me.count)*Ue)),Ne!==null?(De=Math.max(De,0),mt=Math.min(mt,Ne.count)):it!=null&&(De=Math.max(De,0),mt=Math.min(mt,it.count));const It=mt-De;if(It<0||It===1/0)return;Se.setup(Y,$,ye,K,Ne);let Tt,_t=me;if(Ne!==null&&(Tt=fe.get(Ne),_t=ie,_t.setIndex(Tt)),Y.isMesh)$.wireframe===!0?(y.setLineWidth($.wireframeLinewidth*$e()),_t.setMode(N.LINES)):_t.setMode(N.TRIANGLES);else if(Y.isLine){let Zt=$.linewidth;Zt===void 0&&(Zt=1),y.setLineWidth(Zt*$e()),Y.isLineSegments?_t.setMode(N.LINES):Y.isLineLoop?_t.setMode(N.LINE_LOOP):_t.setMode(N.LINE_STRIP)}else Y.isPoints?_t.setMode(N.POINTS):Y.isSprite&&_t.setMode(N.TRIANGLES);if(Y.isBatchedMesh)if(Ge.get("WEBGL_multi_draw"))_t.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Zt=Y._multiDrawStarts,be=Y._multiDrawCounts,nn=Y._multiDrawCount,lt=Ne?fe.get(Ne).bytesPerElement:1,wn=X.get($).currentProgram.getUniforms();for(let bn=0;bn<nn;bn++)wn.setValue(N,"_gl_DrawID",bn),_t.render(Zt[bn]/lt,be[bn])}else if(Y.isInstancedMesh)_t.renderInstances(De,It,Y.count);else if(K.isInstancedBufferGeometry){const Zt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,be=Math.min(K.instanceCount,Zt);_t.renderInstances(De,It,be)}else _t.render(De,It)};function cr(w,F,K,$){O!==null&&w.isNodeMaterial&&O.setObject($,w),qe===!0&&Te.setState(w,K,!1),w.transparent===!0&&w.side===Ri&&w.forceSinglePass===!1?(w.side=In,w.needsUpdate=!0,Vr(w,F,$),w.side=hs,w.needsUpdate=!0,Vr(w,F,$),w.side=Ri):Vr(w,F,$)}this.compile=function(w,F,K=null){K===null&&(K=w),O!==null&&O.renderStart(w,F,K),T=he.get(K),T.init(F),x.push(T),K.traverseVisible(function(Y){Y.isLight&&Y.layers.test(F.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),w!==K&&w.traverseVisible(function(Y){Y.isLight&&Y.layers.test(F.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),T.setupLights(),O!==null&&O.updateLights(T.state.lightsArray),ot=this.localClippingEnabled,qe=Te.init(this.clippingPlanes,ot),qe===!0&&Te.setGlobalState(this.clippingPlanes,F),O!==null&&Oe.render(T.state.shadowsArray,K,F);const $=new Set;return w.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Me=Y.material;if(Me)if(Array.isArray(Me))for(let Ae=0;Ae<Me.length;Ae++){const ye=Me[Ae];cr(ye,K,F,Y),$.add(ye)}else cr(Me,K,F,Y),$.add(Me)}),T=x.pop(),O!==null&&O.renderEnd(),$},this.compileAsync=function(w,F,K=null){const $=this.compile(w,F,K);return new Promise(Y=>{function Me(){if($.forEach(function(Ae){const Ne=X.get(Ae).currentProgram;(Ne===void 0||Ne.isReady())&&$.delete(Ae)}),$.size===0){Y(w);return}setTimeout(Me,10)}Ge.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let ur=null;function gu(w){ur&&ur(w)}function Sa(){_i.stop()}function Wo(){_i.start()}const _i=new L_;_i.setAnimationLoop(gu),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(w){ur=w,Le.setAnimationLoop(w),w===null?_i.stop():_i.start()},Le.addEventListener("sessionstart",Sa),Le.addEventListener("sessionend",Wo),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){vt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;O!==null&&O.renderStart(w,F);const K=Le.enabled===!0&&Le.isPresenting===!0,$=A!==null&&(H===null||K)&&A.begin(P,H);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(F),F=Le.getCamera()),w.isScene===!0&&w.onBeforeRender(P,w,F,H),T=he.get(w,x.length),T.init(F),T.state.textureUnits=ee.getTextureUnits(),x.push(T),Xe.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ke.setFromProjectionMatrix(Xe,Ni,F.reversedDepth),ot=this.localClippingEnabled,qe=Te.init(this.clippingPlanes,ot),b=te.get(w,C.length),b.init(),C.push(b),Le.enabled===!0&&Le.isPresenting===!0){const Ae=P.xr.getDepthSensingMesh();Ae!==null&&Ma(Ae,F,-1/0,P.sortObjects)}Ma(w,F,0,P.sortObjects),b.finish(),O!==null&&O.updateLights(T.state.lightsArray),P.sortObjects===!0&&b.sort(ve,xe),le=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,le&&Ye.addToRenderList(b,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),qe===!0&&Te.beginShadows();const Y=T.state.shadowsArray;if(Oe.render(Y,w,F),qe===!0&&Te.endShadows(),($&&A.hasRenderPass())===!1){const Ae=b.opaque,ye=b.transmissive;if(T.setupLights(),F.isArrayCamera){const Ne=F.cameras;if(ye.length>0)for(let Ue=0,Je=Ne.length;Ue<Je;Ue++){const it=Ne[Ue];jo(Ae,ye,w,it)}le&&Ye.render(w);for(let Ue=0,Je=Ne.length;Ue<Je;Ue++){const it=Ne[Ue];Ea(b,w,it,it.viewport)}}else ye.length>0&&jo(Ae,ye,w,F),le&&Ye.render(w),Ea(b,w,F)}H!==null&&q===0&&(ee.updateMultisampleRenderTarget(H),ee.updateRenderTargetMipmap(H)),$&&A.end(P),w.isScene===!0&&w.onAfterRender(P,w,F),Se.resetDefaultState(),B=-1,W=null,x.pop(),x.length>0?(T=x[x.length-1],ee.setTextureUnits(T.state.textureUnits),qe===!0&&Te.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?b=C[C.length-1]:b=null,O!==null&&O.renderEnd()};function Ma(w,F,K,$){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)K=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLightProbeGrid)T.pushLightProbeGrid(w);else if(w.isLight)T.pushLight(w),w.castShadow&&T.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(ke)){$&&ft.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Xe);const Ae=j.update(w),ye=w.material;ye.visible&&b.push(w,Ae,ye,K,ft.z,null,F)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(ke))){const Ae=j.update(w),ye=w.material;if($&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ft.copy(w.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),ft.copy(Ae.boundingSphere.center)),ft.applyMatrix4(w.matrixWorld).applyMatrix4(Xe)),Array.isArray(ye)){const Ne=Ae.groups;for(let Ue=0,Je=Ne.length;Ue<Je;Ue++){const it=Ne[Ue],De=ye[it.materialIndex];De&&De.visible&&b.push(w,Ae,De,K,ft.z,it,F)}}else ye.visible&&b.push(w,Ae,ye,K,ft.z,null,F)}}const Me=w.children;for(let Ae=0,ye=Me.length;Ae<ye;Ae++)Ma(Me[Ae],F,K,$)}function Ea(w,F,K,$){const{opaque:Y,transmissive:Me,transparent:Ae}=w;T.setupLightsView(K),qe===!0&&Te.setGlobalState(P.clippingPlanes,K),$&&y.viewport(Z.copy($)),Y.length>0&&Gr(Y,F,K),Me.length>0&&Gr(Me,F,K),Ae.length>0&&Gr(Ae,F,K),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function jo(w,F,K,$){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[$.id]===void 0){const De=Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[$.id]=new vi(1,1,{generateMipmaps:!0,type:De?Fi:zn,minFilter:ns,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ct.workingColorSpace})}const Me=T.state.transmissionRenderTarget[$.id],Ae=$.viewport||Z;Me.setSize(Ae.z*P.transmissionResolutionScale,Ae.w*P.transmissionResolutionScale);const ye=P.getRenderTarget(),Ne=P.getActiveCubeFace(),Ue=P.getActiveMipmapLevel();P.setRenderTarget(Me),P.getClearColor(Be),Ce=P.getClearAlpha(),Ce<1&&P.setClearColor(16777215,.5),P.clear(),le&&Ye.render(K);const Je=P.toneMapping;P.toneMapping=Ii;const it=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),T.setupLightsView($),qe===!0&&Te.setGlobalState(P.clippingPlanes,$),Gr(w,K,$),ee.updateMultisampleRenderTarget(Me),ee.updateRenderTargetMipmap(Me),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let mt=0,It=F.length;mt<It;mt++){const Tt=F[mt],{object:_t,geometry:Zt,material:be,group:nn}=Tt;if(be.side===Ri&&_t.layers.test($.layers)){const lt=be.side;be.side=In,be.needsUpdate=!0,wa(_t,K,$,Zt,be,nn),be.side=lt,be.needsUpdate=!0,De=!0}}De===!0&&(ee.updateMultisampleRenderTarget(Me),ee.updateRenderTargetMipmap(Me))}P.setRenderTarget(ye,Ne,Ue),P.setClearColor(Be,Ce),it!==void 0&&($.viewport=it),P.toneMapping=Je}function Gr(w,F,K){const $=F.isScene===!0?F.overrideMaterial:null;for(let Y=0,Me=w.length;Y<Me;Y++){const Ae=w[Y],{object:ye,geometry:Ne,group:Ue}=Ae;let Je=Ae.material;Je.allowOverride===!0&&$!==null&&(Je=$),ye.layers.test(K.layers)&&wa(ye,F,K,Ne,Je,Ue)}}function wa(w,F,K,$,Y,Me){O!==null&&Y.isNodeMaterial&&O.setObject(w,Y),w.onBeforeRender(P,F,K,$,Y,Me),w.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Y.onBeforeRender(P,F,K,$,w,Me),Y.transparent===!0&&Y.side===Ri&&Y.forceSinglePass===!1?(Y.side=In,Y.needsUpdate=!0,P.renderBufferDirect(K,F,$,Y,w,Me),Y.side=hs,Y.needsUpdate=!0,P.renderBufferDirect(K,F,$,Y,w,Me),Y.side=Ri):P.renderBufferDirect(K,F,$,Y,w,Me),w.onAfterRender(P,F,K,$,Y,Me)}function Vr(w,F,K){F.isScene!==!0&&(F=Ct);const $=X.get(w),Y=T.state.lights,Me=T.state.shadowsArray,Ae=Y.state.version,ye=ue.getParameters(w,Y.state,Me,F,K,T.state.lightProbeGridArray),Ne=ue.getProgramCacheKey(ye);let Ue=$.programs;$.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?F.environment:null,$.fog=F.fog;const Je=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;$.envMap=oe.get(w.envMap||$.environment,Je),$.envMapRotation=$.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Ue===void 0&&(w.addEventListener("dispose",Xn),Ue=new Map,$.programs=Ue);let it=Ue.get(Ne);if(it!==void 0){if($.currentProgram===it&&$.lightsStateVersion===Ae)return xs(w,ye),it}else ye.uniforms=ue.getUniforms(w),O!==null&&w.isNodeMaterial&&O.build(w,K,ye),w.onBeforeCompile(ye,P),it=ue.acquireProgram(ye,Ne),Ue.set(Ne,it),$.uniforms=ye.uniforms;const De=$.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(De.clippingPlanes=Te.uniform),xs(w,ye),$.needsLights=xu(w),$.lightsStateVersion=Ae,$.needsLights&&(De.ambientLightColor.value=Y.state.ambient,De.lightProbe.value=Y.state.probe,De.sunLights.value=Y.state.sun,De.sunLightShadows.value=Y.state.sunShadow,De.directionalLights.value=Y.state.directional,De.directionalLightShadows.value=Y.state.directionalShadow,De.spotLights.value=Y.state.spot,De.spotLightShadows.value=Y.state.spotShadow,De.rectAreaLights.value=Y.state.rectArea,De.ltc_1.value=Y.state.rectAreaLTC1,De.ltc_2.value=Y.state.rectAreaLTC2,De.pointLights.value=Y.state.point,De.pointLightShadows.value=Y.state.pointShadow,De.hemisphereLights.value=Y.state.hemi,De.sunShadowMatrix.value=Y.state.sunShadowMatrix,De.sunShadowCascade.value=Y.state.sunShadowCascade,De.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,De.spotLightMatrix.value=Y.state.spotLightMatrix,De.spotLightMap.value=Y.state.spotLightMap,De.pointShadowMatrix.value=Y.state.pointShadowMatrix),$.lightProbeGrid=T.state.lightProbeGridArray.length>0,$.currentProgram=it,$.uniformsList=null,it}function ba(w){if(w.uniformsList===null){const F=w.currentProgram.getUniforms();w.uniformsList=dc.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function xs(w,F){const K=X.get(w);K.outputColorSpace=F.outputColorSpace,K.batching=F.batching,K.batchingColor=F.batchingColor,K.instancing=F.instancing,K.instancingColor=F.instancingColor,K.instancingMorph=F.instancingMorph,K.skinning=F.skinning,K.morphTargets=F.morphTargets,K.morphNormals=F.morphNormals,K.morphColors=F.morphColors,K.morphTargetsCount=F.morphTargetsCount,K.numClippingPlanes=F.numClippingPlanes,K.numIntersection=F.numClipIntersection,K.vertexAlphas=F.vertexAlphas,K.vertexTangents=F.vertexTangents,K.toneMapping=F.toneMapping}function Xo(w,F){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;M.setFromMatrixPosition(F.matrixWorld);for(let K=0,$=w.length;K<$;K++){const Y=w[K];if(Y.texture!==null&&Y.boundingBox.containsPoint(M))return Y}return null}function vu(w,F,K,$,Y){F.isScene!==!0&&(F=Ct),ee.resetTextureUnits();const Me=F.fog,Ae=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?F.environment:null,ye=H===null?P.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:ct.workingColorSpace,Ne=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Ue=oe.get($.envMap||Ae,Ne),Je=$.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,it=!!K.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),De=!!K.morphAttributes.position,mt=!!K.morphAttributes.normal,It=!!K.morphAttributes.color;let Tt=Ii;$.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Tt=P.toneMapping);const _t=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Zt=_t!==void 0?_t.length:0,be=X.get($),nn=T.state.lights;if(qe===!0&&(ot===!0||w!==W)){const yt=w===W&&$.id===B;Te.setState($,w,yt)}let lt=!1;$.version===be.__version?(be.needsLights&&be.lightsStateVersion!==nn.state.version||be.outputColorSpace!==ye||Y.isBatchedMesh&&be.batching===!1||!Y.isBatchedMesh&&be.batching===!0||Y.isBatchedMesh&&be.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&be.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&be.instancing===!1||!Y.isInstancedMesh&&be.instancing===!0||Y.isSkinnedMesh&&be.skinning===!1||!Y.isSkinnedMesh&&be.skinning===!0||Y.isInstancedMesh&&be.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&be.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&be.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&be.instancingMorph===!1&&Y.morphTexture!==null||be.envMap!==Ue||$.fog===!0&&be.fog!==Me||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==Te.numPlanes||be.numIntersection!==Te.numIntersection)||be.vertexAlphas!==Je||be.vertexTangents!==it||be.morphTargets!==De||be.morphNormals!==mt||be.morphColors!==It||be.toneMapping!==Tt||be.morphTargetsCount!==Zt||!!be.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(lt=!0):(lt=!0,be.__version=$.version);let wn=be.currentProgram;lt===!0&&(wn=Vr($,F,Y),O&&$.isNodeMaterial&&O.onUpdateProgram($,wn,be));let bn=!1,Yn=!1,yi=!1;const gt=wn.getUniforms(),Rt=be.uniforms;if(y.useProgram(wn.program)&&(bn=!0,Yn=!0,yi=!0),$.id!==B&&(B=$.id,Yn=!0),be.needsLights){const yt=Xo(T.state.lightProbeGridArray,Y);be.lightProbeGrid!==yt&&(be.lightProbeGrid=yt,Yn=!0)}if(bn||W!==w){y.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),gt.setValue(N,"projectionMatrix",w.projectionMatrix),gt.setValue(N,"viewMatrix",w.matrixWorldInverse);const qn=gt.map.cameraPosition;qn!==void 0&&qn.setValue(N,rt.setFromMatrixPosition(w.matrixWorld)),R.logarithmicDepthBuffer&&gt.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&gt.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),W!==w&&(W=w,Yn=!0,yi=!0)}if(be.needsLights&&(nn.state.sunShadowMap.length>0&&gt.setValue(N,"sunShadowMap",nn.state.sunShadowMap,ee),nn.state.directionalShadowMap.length>0&&gt.setValue(N,"directionalShadowMap",nn.state.directionalShadowMap,ee),nn.state.spotShadowMap.length>0&&gt.setValue(N,"spotShadowMap",nn.state.spotShadowMap,ee),nn.state.pointShadowMap.length>0&&gt.setValue(N,"pointShadowMap",nn.state.pointShadowMap,ee)),Y.isSkinnedMesh){gt.setOptional(N,Y,"bindMatrix"),gt.setOptional(N,Y,"bindMatrixInverse");const yt=Y.skeleton;yt&&(yt.boneTexture===null&&yt.computeBoneTexture(),gt.setValue(N,"boneTexture",yt.boneTexture,ee))}Y.isBatchedMesh&&(gt.setOptional(N,Y,"batchingTexture"),gt.setValue(N,"batchingTexture",Y._matricesTexture,ee),gt.setOptional(N,Y,"batchingIdTexture"),gt.setValue(N,"batchingIdTexture",Y._indirectTexture,ee),gt.setOptional(N,Y,"batchingColorTexture"),Y._colorsTexture!==null&&gt.setValue(N,"batchingColorTexture",Y._colorsTexture,ee));const $n=K.morphAttributes;if(($n.position!==void 0||$n.normal!==void 0||$n.color!==void 0)&&k.update(Y,K,wn),(Yn||be.receiveShadow!==Y.receiveShadow)&&(be.receiveShadow=Y.receiveShadow,gt.setValue(N,"receiveShadow",Y.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&F.environment!==null&&(Rt.envMapIntensity.value=F.environmentIntensity),Rt.dfgLUT!==void 0&&(Rt.dfgLUT.value=bC()),Yn){if(gt.setValue(N,"toneMappingExposure",P.toneMappingExposure),be.needsLights&&Yo(Rt,yi),Me&&$.fog===!0&&we.refreshFogUniforms(Rt,Me),we.refreshMaterialUniforms(Rt,$,ne,J,T.state.transmissionRenderTarget[w.id]),be.needsLights&&be.lightProbeGrid){const yt=be.lightProbeGrid;Rt.probesSH.value=yt.texture,Rt.probesMin.value.copy(yt.boundingBox.min),Rt.probesMax.value.copy(yt.boundingBox.max),Rt.probesResolution.value.copy(yt.resolution)}dc.upload(N,ba(be),Rt,ee)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(dc.upload(N,ba(be),Rt,ee),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&gt.setValue(N,"center",Y.center),gt.setValue(N,"modelViewMatrix",Y.modelViewMatrix),gt.setValue(N,"normalMatrix",Y.normalMatrix),gt.setValue(N,"modelMatrix",Y.matrixWorld),$.uniformsGroups!==void 0){const yt=$.uniformsGroups;for(let qn=0,Si=yt.length;qn<Si;qn++){const _s=yt[qn];se.update(_s,wn),se.bind(_s,wn)}}return wn}function Yo(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.sunLights.needsUpdate=F,w.sunLightShadows.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function xu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(w,F,K){const $=X.get(w);$.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),X.get(w.texture).__webglTexture=F,X.get(w.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:K,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,F){const K=X.get(w);K.__webglFramebuffer=F,K.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,K=0){H=w,Q=F,q=K;let $=null,Y=!1,Me=!1;if(w){const ye=X.get(w);if(ye.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(N.FRAMEBUFFER,ye.__webglFramebuffer),Z.copy(w.viewport),re.copy(w.scissor),de=w.scissorTest,y.viewport(Z),y.scissor(re),y.setScissorTest(de),B=-1;return}else if(ye.__webglFramebuffer===void 0)ee.setupRenderTarget(w);else if(ye.__hasExternalTextures)ee.rebindTextures(w,X.get(w.texture).__webglTexture,X.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Je=w.depthTexture;if(ye.__boundDepthTexture!==Je){if(Je!==null&&X.has(Je)&&(w.width!==Je.image.width||w.height!==Je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ee.setupDepthRenderbuffer(w)}}const Ne=w.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Me=!0);const Ue=X.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ue[F])?$=Ue[F][K]:$=Ue[F],Y=!0):w.samples>0&&ee.useMultisampledRTT(w)===!1?$=X.get(w).__webglMultisampledFramebuffer:Array.isArray(Ue)?$=Ue[K]:$=Ue,Z.copy(w.viewport),re.copy(w.scissor),de=w.scissorTest}else Z.copy(pe).multiplyScalar(ne).floor(),re.copy(Ie).multiplyScalar(ne).floor(),de=Qe;if(K!==0&&($=U),y.bindFramebuffer(N.FRAMEBUFFER,$)&&y.drawBuffers(w,$),y.viewport(Z),y.scissor(re),y.setScissorTest(de),Y){const ye=X.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+F,ye.__webglTexture,K)}else if(Me){const ye=F;for(let Ne=0;Ne<w.textures.length;Ne++){const Ue=X.get(w.textures[Ne]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Ne,Ue.__webglTexture,K,ye)}}else if(w!==null&&K!==0){const ye=X.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ye.__webglTexture,K)}B=-1};function Ta(w){const F=X.get(w);return(F.__readFormat!==w.format||F.__readType!==w.type)&&(F.__readFormat=w.format,F.__readType=w.type,F.__formatReadable=R.textureFormatReadable(w.format),F.__typeReadable=R.textureTypeReadable(w.type)),F}this.readRenderTargetPixels=function(w,F,K,$,Y,Me,Ae,ye=0){if(!(w&&w.isWebGLRenderTarget)){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=X.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ne=Ne[Ae]),Ne){y.bindFramebuffer(N.FRAMEBUFFER,Ne);try{const Ue=w.textures[ye],Je=Ue.format,it=Ue.type;w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ye);const De=Ta(Ue);if(De.__formatReadable===!1){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(De.__typeReadable===!1){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-$&&K>=0&&K<=w.height-Y&&N.readPixels(F,K,$,Y,ge.convert(Je),ge.convert(it),Me)}finally{const Ue=H!==null?X.get(H).__webglFramebuffer:null;y.bindFramebuffer(N.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(w,F,K,$,Y,Me,Ae,ye=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=X.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ne=Ne[Ae]),Ne)if(F>=0&&F<=w.width-$&&K>=0&&K<=w.height-Y){y.bindFramebuffer(N.FRAMEBUFFER,Ne);const Ue=w.textures[ye],Je=Ue.format,it=Ue.type;w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ye);const De=Ta(Ue);if(De.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(De.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const mt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,mt),N.bufferData(N.PIXEL_PACK_BUFFER,Me.byteLength,N.STREAM_READ),N.readPixels(F,K,$,Y,ge.convert(Je),ge.convert(it),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);const It=H!==null?X.get(H).__webglFramebuffer:null;y.bindFramebuffer(N.FRAMEBUFFER,It);const Tt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await cE(N,Tt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,mt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Me),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(mt),N.deleteSync(Tt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,F=null,K=0){const $=Math.pow(2,-K),Y=Math.floor(w.image.width*$),Me=Math.floor(w.image.height*$),Ae=F!==null?F.x:0,ye=F!==null?F.y:0;ee.setTexture2D(w,0),N.copyTexSubImage2D(N.TEXTURE_2D,K,0,0,Ae,ye,Y,Me),y.unbindTexture()},this.copyTextureToTexture=function(w,F,K=null,$=null,Y=0,Me=0){let Ae,ye,Ne,Ue,Je,it,De,mt,It;const Tt=w.isCompressedTexture?w.mipmaps[Me]:w.image;if(K!==null)Ae=K.max.x-K.min.x,ye=K.max.y-K.min.y,Ne=K.isBox3?K.max.z-K.min.z:1,Ue=K.min.x,Je=K.min.y,it=K.isBox3?K.min.z:0;else{const Rt=Math.pow(2,-Y);Ae=Math.floor(Tt.width*Rt),ye=Math.floor(Tt.height*Rt),w.isDataArrayTexture?Ne=Tt.depth:w.isData3DTexture?Ne=Math.floor(Tt.depth*Rt):Ne=1,Ue=0,Je=0,it=0}$!==null?(De=$.x,mt=$.y,It=$.z):(De=0,mt=0,It=0);const _t=ge.convert(F.format),Zt=ge.convert(F.type);let be;F.isData3DTexture?(ee.setTexture3D(F,0),be=N.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(ee.setTexture2DArray(F,0),be=N.TEXTURE_2D_ARRAY):(ee.setTexture2D(F,0),be=N.TEXTURE_2D),y.activeTexture(N.TEXTURE0),y.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),y.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),y.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);const nn=y.getParameter(N.UNPACK_ROW_LENGTH),lt=y.getParameter(N.UNPACK_IMAGE_HEIGHT),wn=y.getParameter(N.UNPACK_SKIP_PIXELS),bn=y.getParameter(N.UNPACK_SKIP_ROWS),Yn=y.getParameter(N.UNPACK_SKIP_IMAGES);y.pixelStorei(N.UNPACK_ROW_LENGTH,Tt.width),y.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Tt.height),y.pixelStorei(N.UNPACK_SKIP_PIXELS,Ue),y.pixelStorei(N.UNPACK_SKIP_ROWS,Je),y.pixelStorei(N.UNPACK_SKIP_IMAGES,it);const yi=w.isDataArrayTexture||w.isData3DTexture,gt=F.isDataArrayTexture||F.isData3DTexture;if(w.isDepthTexture){const Rt=X.get(w),$n=X.get(F),yt=X.get(Rt.__renderTarget),qn=X.get($n.__renderTarget);y.bindFramebuffer(N.READ_FRAMEBUFFER,yt.__webglFramebuffer),y.bindFramebuffer(N.DRAW_FRAMEBUFFER,qn.__webglFramebuffer);for(let Si=0;Si<Ne;Si++)yi&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,X.get(w).__webglTexture,Y,it+Si),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,X.get(F).__webglTexture,Me,It+Si)),N.blitFramebuffer(Ue,Je,Ae,ye,De,mt,Ae,ye,N.DEPTH_BUFFER_BIT,N.NEAREST);y.bindFramebuffer(N.READ_FRAMEBUFFER,null),y.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(Y!==0||w.isRenderTargetTexture||X.has(w)){const Rt=X.get(w),$n=X.get(F);y.bindFramebuffer(N.READ_FRAMEBUFFER,I),y.bindFramebuffer(N.DRAW_FRAMEBUFFER,V);for(let yt=0;yt<Ne;yt++)yi?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Rt.__webglTexture,Y,it+yt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Rt.__webglTexture,Y),gt?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,$n.__webglTexture,Me,It+yt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,$n.__webglTexture,Me),Y!==0?N.blitFramebuffer(Ue,Je,Ae,ye,De,mt,Ae,ye,N.COLOR_BUFFER_BIT,N.NEAREST):gt?N.copyTexSubImage3D(be,Me,De,mt,It+yt,Ue,Je,Ae,ye):N.copyTexSubImage2D(be,Me,De,mt,Ue,Je,Ae,ye);y.bindFramebuffer(N.READ_FRAMEBUFFER,null),y.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else gt?w.isDataTexture||w.isData3DTexture?N.texSubImage3D(be,Me,De,mt,It,Ae,ye,Ne,_t,Zt,Tt.data):F.isCompressedArrayTexture?N.compressedTexSubImage3D(be,Me,De,mt,It,Ae,ye,Ne,_t,Tt.data):N.texSubImage3D(be,Me,De,mt,It,Ae,ye,Ne,_t,Zt,Tt):w.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Me,De,mt,Ae,ye,_t,Zt,Tt.data):w.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Me,De,mt,Tt.width,Tt.height,_t,Tt.data):N.texSubImage2D(N.TEXTURE_2D,Me,De,mt,Ae,ye,_t,Zt,Tt);y.pixelStorei(N.UNPACK_ROW_LENGTH,nn),y.pixelStorei(N.UNPACK_IMAGE_HEIGHT,lt),y.pixelStorei(N.UNPACK_SKIP_PIXELS,wn),y.pixelStorei(N.UNPACK_SKIP_ROWS,bn),y.pixelStorei(N.UNPACK_SKIP_IMAGES,Yn),Me===0&&F.generateMipmaps&&N.generateMipmap(be),y.unbindTexture()},this.initRenderTarget=function(w){X.get(w).__webglFramebuffer===void 0&&ee.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ee.setTextureCube(w,0):w.isData3DTexture?ee.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ee.setTexture2DArray(w,0):ee.setTexture2D(w,0),y.unbindTexture()},this.resetState=function(){Q=0,q=0,H=null,y.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),n.unpackColorSpace=ct._getUnpackColorSpace()}}const Rg={type:"change"},Kp={type:"start"},H_={type:"end"},Yl=new fu,Pg=new $i,AC=Math.cos(70*ci.DEG2RAD),Wt=new D,Cn=2*Math.PI,Et={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Bd=1e-6;class CC extends Cw{constructor(e,n=null){super(e,n),this.state=Et.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ra.ROTATE,MIDDLE:ra.DOLLY,RIGHT:ra.PAN},this.touches={ONE:Ks.ROTATE,TWO:Ks.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Or,this._lastTargetPosition=new D,this._quat=new Or().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new rg,this._sphericalDelta=new rg,this._scale=1,this._panOffset=new D,this._rotateStart=new Pe,this._rotateEnd=new Pe,this._rotateDelta=new Pe,this._panStart=new Pe,this._panEnd=new Pe,this._panDelta=new Pe,this._dollyStart=new Pe,this._dollyEnd=new Pe,this._dollyDelta=new Pe,this._dollyDirection=new D,this._mouse=new Pe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=PC.bind(this),this._onPointerDown=RC.bind(this),this._onPointerUp=NC.bind(this),this._onContextMenu=kC.bind(this),this._onMouseWheel=IC.bind(this),this._onKeyDown=UC.bind(this),this._onTouchStart=OC.bind(this),this._onTouchMove=FC.bind(this),this._onMouseDown=DC.bind(this),this._onMouseMove=LC.bind(this),this._interceptControlDown=zC.bind(this),this._interceptControlUp=BC.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Et.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Rg),this.update(),this.state=Et.NONE}pan(e,n){this._pan(e,n),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const n=this.object.position;Wt.copy(n).sub(this.target),Wt.applyQuaternion(this._quat),this._spherical.setFromVector3(Wt),this.autoRotate&&this.state===Et.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Cn:i>Math.PI&&(i-=Cn),r<-Math.PI?r+=Cn:r>Math.PI&&(r-=Cn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Wt.setFromSpherical(this._spherical),Wt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Wt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Wt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Wt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Yl.origin.copy(this.object.position),Yl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Yl.direction))<AC?this.object.lookAt(this.target):(Pg.setFromNormalAndCoplanarPoint(this.object.up,this.target),Yl.intersectPlane(Pg,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Bd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Bd||this._lastTargetPosition.distanceToSquared(this.target)>Bd?(this.dispatchEvent(Rg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Cn/60*this.autoRotateSpeed*e:Cn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Wt.setFromMatrixColumn(n,0),Wt.multiplyScalar(-e),this._panOffset.add(Wt)}_panUp(e,n){this.screenSpacePanning===!0?Wt.setFromMatrixColumn(n,1):(Wt.setFromMatrixColumn(n,0),Wt.crossVectors(this.object.up,Wt)),Wt.multiplyScalar(e),this._panOffset.add(Wt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Wt.copy(r).sub(this.target);let s=Wt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Cn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Cn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Cn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Cn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+n.x)*.5,o=(e.pageY+n.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Pe,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function RC(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function PC(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function NC(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(H_),this.state=Et.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function DC(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ra.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=Et.DOLLY;break;case ra.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Et.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Et.ROTATE}break;case ra.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Et.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Et.PAN}break;default:this.state=Et.NONE}this.state!==Et.NONE&&this.dispatchEvent(Kp)}function LC(t){switch(this.state){case Et.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case Et.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case Et.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function IC(t){this.enabled===!1||this.enableZoom===!1||this.state!==Et.NONE||(t.preventDefault(),this.dispatchEvent(Kp),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(H_))}function UC(t){this.enabled!==!1&&this._handleKeyDown(t)}function OC(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Ks.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=Et.TOUCH_ROTATE;break;case Ks.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=Et.TOUCH_PAN;break;default:this.state=Et.NONE}break;case 2:switch(this.touches.TWO){case Ks.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=Et.TOUCH_DOLLY_PAN;break;case Ks.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=Et.TOUCH_DOLLY_ROTATE;break;default:this.state=Et.NONE}break;default:this.state=Et.NONE}this.state!==Et.NONE&&this.dispatchEvent(Kp)}function FC(t){switch(this._trackPointer(t),this.state){case Et.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case Et.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case Et.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case Et.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=Et.NONE}}function kC(t){this.enabled!==!1&&t.preventDefault()}function zC(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function BC(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function HC(){const t=new qi;t.name="AgriGuardPhysicalPrototypeRoot";const e=new qi;e.name="ChassisTiltingGroup",t.add(e);const n=new xt({color:16317180,roughness:.38,metalness:.04}),i=new xt({color:14870768,roughness:.42,metalness:.06}),r=new xt({color:16777215,roughness:.85,metalness:.02,side:Ri}),s=new xt({color:592139,roughness:.85,metalness:.1}),a=new xt({color:15857145,roughness:.65,metalness:.02}),o=new xt({color:1579035,roughness:.5,metalness:.3}),l=new xt({color:165063,roughness:.45,metalness:.3}),c=new xt({color:14427686,roughness:.5,metalness:.2}),f=new xt({color:2450411,roughness:.5,metalness:.2}),p=new xt({color:9741240,roughness:.3,metalness:.9}),d=new xt({color:14870768,roughness:.15,metalness:.95}),m=new xt({color:14251782,roughness:.35,metalness:.85}),g=new xt({color:1120295,roughness:.4,metalness:.85}),S=new xt({color:1483594,roughness:.6,metalness:.1}),v=new xt({color:1920728,roughness:.4,metalness:.1}),h=new xt({color:988970,roughness:.75,metalness:.1}),_=new xt({color:11817737,roughness:.9,metalness:.05}),E=new xt({color:593174,emissive:223649,emissiveIntensity:.08,roughness:.15,metalness:.92}),M=new xt({color:1579035,roughness:.9,metalness:.05}),b=new xt({color:4674921,roughness:.4,metalness:.6});function T(We=.045,dt=!0){const ut=new qi,Tn=new Xp(We,.007,8,16),An=new _e(Tn,s);ut.add(An);const ri=new st(.02,.016,.02),zi=new _e(ri,s);if(zi.position.set(We,0,0),ut.add(zi),dt){const Mi=new st(.09,.005,.01),Bi=new _e(Mi,s);Bi.position.set(We+.045,.01,0),Bi.rotation.z=.2,ut.add(Bi)}return ut}function C(We,dt,ut=.007){const Tn=new A_(We),An=new Yp(Tn,20,ut,8,!1),ri=new xt({color:dt,roughness:.6,metalness:.1});return new _e(An,ri)}const x=1.05,A=1.35,P=.35,L=2.45,O=L-P,U=.032,I=[[-x,A],[x,A],[-x,-A],[x,-A]],V=new jt(U,U,O,16);I.forEach(([We,dt])=>{const ut=new _e(V,n);ut.position.set(We,P+O/2,dt),ut.castShadow=!0,e.add(ut);const Tn=new jt(U*1.05,U*1.05,.03,16),An=new _e(Tn,i);An.position.set(We,L,dt),e.add(An),[.65,1.05,1.45,2.2].forEach(zi=>{const Mi=T(U*1.15,!0);Mi.rotation.x=Math.PI/2,Mi.position.set(We,zi,dt),e.add(Mi)})});const Q=new jc(U*1.35,12,12);I.forEach(([We,dt])=>{const ut=new _e(Q,i);ut.position.set(We,P,dt),e.add(ut)});const q=A*2,H=new jt(U,U,q,16),B=new _e(H,n);B.rotation.x=Math.PI/2,B.position.set(-x,P+.05,0),e.add(B);const W=new _e(H,n);W.rotation.x=Math.PI/2,W.position.set(x,P+.05,0),e.add(W);const Z=x*2,re=new jt(U,U,Z,16),de=new _e(re,n);de.rotation.z=Math.PI/2,de.position.set(0,P+.05,-A),e.add(de);const Be=new _e(re,n);Be.rotation.z=Math.PI/2,Be.position.set(0,P+.05,A),e.add(Be);const Ce=1.45,Ve=new jt(U,U,A*2,16),J=new _e(Ve,n);J.rotation.x=Math.PI/2,J.position.set(-x,Ce-.03,0),e.add(J);const ne=new _e(Ve,n);ne.rotation.x=Math.PI/2,ne.position.set(x,Ce-.03,0),e.add(ne);const ve=new jt(U,U,x*2,16),xe=new _e(ve,n);xe.rotation.z=Math.PI/2,xe.position.set(0,Ce-.03,A),e.add(xe);const pe=new _e(ve,n);pe.rotation.z=Math.PI/2,pe.position.set(0,Ce-.03,-A),e.add(pe);const Ie=2,Qe=2.6,ke=.85,qe=.02,ot=new st(Ie,qe,Qe),Xe=new _e(ot,r);Xe.position.set(0,Ce,0),Xe.receiveShadow=!0,e.add(Xe);const rt=Ce+ke/2,ft=new st(qe,ke,Qe),Ct=new _e(ft,r);Ct.position.set(-Ie/2,rt,0),e.add(Ct);const le=new _e(ft,r);le.position.set(Ie/2,rt,0),e.add(le);const $e=new st(Ie,ke,qe),N=new _e($e,r);N.position.set(0,rt,Qe/2),e.add(N);const Ke=new _e($e,r);Ke.position.set(0,rt,-Qe/2),e.add(Ke),[[-Ie/2,Qe/2],[Ie/2,Qe/2],[-Ie/2,-Qe/2],[Ie/2,-Qe/2]].forEach(([We,dt])=>{[Ce+.15,Ce+ke-.1].forEach(ut=>{const Tn=T(.065,!0);Tn.position.set(We,ut,dt),Tn.rotation.y=Math.atan2(dt,We),e.add(Tn)})});const R=1.35,y=.85,G=Ce+ke+.02,X=-Qe/2+y/2,ee=new st(R+.06,.04,y+.06),oe=new _e(ee,_);oe.position.set(0,G,X),e.add(oe);const fe=new st(R,.015,y),z=new _e(fe,E);z.position.set(0,G+.025,X),e.add(z);const j=new D_(1.2,6,3718648,1981066);j.position.set(0,G+.035,X),j.scale.set(.9,1,.6),e.add(j);const ue=C([new D(.2,G+.01,X),new D(.25,G-.2,X+.15),new D(.15,Ce+.1,-.4),new D(-.05,Ce+.02,-.1)],15680580);e.add(ue);const we=C([new D(.23,G+.01,X),new D(.28,G-.2,X+.15),new D(.18,Ce+.1,-.4),new D(-.08,Ce+.02,-.1)],1579035);e.add(we);const te=Ce+.015,he=.55,Te=.82,Oe=new st(he,.025,Te),Ye=new _e(Oe,a);Ye.position.set(-.35,te+.012,.05),e.add(Ye);const k=new st(.015,.002,Te*.92),me=new _e(k,new Zr({color:15680580}));me.position.set(-.35-he/2+.02,te+.026,.05),e.add(me);const ie=new _e(k,new Zr({color:3900150}));ie.position.set(-.35+he/2-.02,te+.026,.05),e.add(ie);const ge=.22,Se=.38,se=new st(ge,.02,Se),Fe=new _e(se,o);Fe.position.set(-.35,te+.038,-.12),e.add(Fe);const Le=new st(ge*.85,.004,.06),St=new _e(Le,m);St.position.set(-.35,te+.05,-.12-Se/2+.035),e.add(St);const pt=new st(.06,.025,.05),En=new _e(pt,d);En.position.set(-.35,te+.048,-.12+Se/2-.02),e.add(En);const Xn=new jc(.018,10,10),Go=new Zr({color:3718648}),Vo=new _e(Xn,Go);Vo.position.set(-.31,te+.052,-.12),e.add(Vo);const cr=.48,ur=.72,gu=new st(cr,.025,ur),Sa=new _e(gu,l);Sa.position.set(.12,te+.015,.22),e.add(Sa);const Wo=new st(.09,.08,.1),_i=new _e(Wo,d);_i.position.set(.12-cr/2+.06,te+.06,.22-ur/2+.06),e.add(_i);const Ma=new jt(.04,.04,.1,12),Ea=new _e(Ma,h);Ea.position.set(.12+cr/2-.06,te+.05,.22-ur/2+.06),e.add(Ea);const jo=new st(.18,.02,.18),Gr=new _e(jo,new xt({color:1120295}));Gr.position.set(.12,te+.035,.22),e.add(Gr);const wa=new st(.03,.05,ur*.85),Vr=new _e(wa,h);Vr.position.set(.12-cr/2+.025,te+.045,.22),e.add(Vr);const ba=new _e(wa,h);ba.position.set(.12+cr/2-.025,te+.045,.22),e.add(ba);const xs=.45,Xo=.45,vu=new st(xs,.025,Xo),Yo=new _e(vu,c);Yo.position.set(.42,te+.015,-.42),e.add(Yo);const xu=new st(.24,.18,.14),Ta=new _e(xu,g);Ta.position.set(.42,te+.11,-.42),e.add(Ta);for(let We=-.09;We<=.09;We+=.045){const dt=new st(.012,.06,.16),ut=new _e(dt,g);ut.position.set(.42+We,te+.21,-.42),e.add(ut)}const w=new st(.08,.09,.14),F=new _e(w,S);F.position.set(.42-xs/2+.05,te+.06,-.42),e.add(F);const K=new _e(w,S);K.position.set(.42+xs/2-.05,te+.06,-.42),e.add(K);const $=new st(.16,.09,.08),Y=new _e($,S);Y.position.set(.42,te+.06,-.42+Xo/2-.05),e.add(Y);const Me=.24,Ae=.38,ye=new st(Me,.02,Ae),Ne=new _e(ye,f);Ne.position.set(-.16,te+.015,.55),e.add(Ne);const Ue=new st(.18,.15,.22),Je=new _e(Ue,v);Je.position.set(-.16,te+.09,.55-.04),e.add(Je);const it=new st(.16,.08,.08),De=new _e(it,S);De.position.set(-.16,te+.06,.55+.13),e.add(De);const mt=new st(.48,.16,.55),It=new _e(mt,h);It.position.set(.62,te+.08,.72),e.add(It);for(let We=-.15;We<=.15;We+=.1){const dt=new jt(.042,.042,.48,12),ut=new _e(dt,new xt({color:3359061,metalness:.3}));ut.rotation.x=Math.PI/2,ut.position.set(.62+We,te+.14,.72),e.add(ut)}const Tt=new st(.12,.018,.28),_t=new _e(Tt,f);_t.position.set(-.62,te+.015,.35),e.add(_t);const Zt=new st(.15,.018,.15),be=new _e(Zt,f);be.position.set(-.6,te+.015,-.35),e.add(be);const nn=new st(.12,.07,.16),lt=new _e(nn,h);lt.position.set(.25,te+.04,.65),e.add(lt);const wn=new st(.07,.04,.09),bn=new _e(wn,new xt({color:15680580}));bn.position.set(.25,te+.08,.65),bn.rotation.x=.3,e.add(bn),e.add(C([new D(.55,te+.12,.65),new D(.52,te+.05,.2),new D(.48,te+.04,-.1),new D(.42,te+.07,-.37)],15680580)),e.add(C([new D(.58,te+.12,.65),new D(.55,te+.05,.2),new D(.45,te+.04,-.1),new D(.4,te+.07,-.37)],1579035)),e.add(C([new D(.22,te+.05,0),new D(.28,te+.08,-.15),new D(.35,te+.06,-.35)],16436245)),e.add(C([new D(.2,te+.05,-.02),new D(.26,te+.08,-.17),new D(.37,te+.06,-.37)],1096065)),e.add(C([new D(-.3,te+.04,-.05),new D(-.25,te+.07,.2),new D(-.16,te+.04,.42)],16347926)),e.add(C([new D(-.55,te+.03,-.35),new D(-.48,te+.06,-.25),new D(-.35,te+.03,-.15)],3718648));function Yn(){const We=new qi,dt=new st(.38,.18,.03),ut=new _e(dt,f);We.add(ut);const Tn=new jt(.068,.068,.11,16),An=new _e(Tn,d);An.rotation.x=Math.PI/2,An.position.set(-.1,0,.065),We.add(An);const ri=new _e(Tn,d);ri.rotation.x=Math.PI/2,ri.position.set(.1,0,.065),We.add(ri);const zi=new Wp(.065,12),Mi=new Zr({color:9741240}),Bi=new _e(zi,Mi);Bi.position.set(-.1,0,.122),We.add(Bi);const il=new _e(zi,Mi);return il.position.set(.1,0,.122),We.add(il),We}function yi(){const We=new Wc(.65,2.5,16,1,!0);We.translate(0,-1.25,0),We.rotateX(-Math.PI/2);const dt=new Zr({color:1096065,wireframe:!0,transparent:!0,opacity:.45,depthWrite:!1});return{mesh:new _e(We,dt),mat:dt}}const gt=Yn();gt.position.set(x,.95,A+.04),e.add(gt);const Rt=T(U*1.35,!0);Rt.position.set(x,1.02,A),Rt.rotation.x=Math.PI/2,e.add(Rt);const $n=T(U*1.35,!0);$n.position.set(x,.88,A),$n.rotation.x=Math.PI/2,e.add($n);const yt=yi();gt.add(yt.mesh);const qn=Yn();qn.position.set(0,Ce-.08,Qe/2+.02),e.add(qn);const Si=yi();qn.add(Si.mesh);const _s=Yn();_s.position.set(-x,.95,A+.04),e.add(_s);const _u=yi();_s.add(_u.mesh);const G_={leftMesh:_u.mesh,centerMesh:Si.mesh,rightMesh:yt.mesh,leftMaterial:_u.mat,centerMaterial:Si.mat,rightMaterial:yt.mat},V_=new st(.16,.22,.08),nm=new _e(V_,new xt({color:3718648,roughness:.6}));nm.position.set(Ie/2+.05,Ce+ke*.45,.6),e.add(nm);const yu=T(.09,!0);yu.position.set(Ie/2+.05,Ce+ke*.45,.6),yu.rotation.y=Math.PI/2,e.add(yu),e.add(C([new D(Ie/2+.05,Ce+ke*.45+.12,.6),new D(Ie/2-.02,Ce+ke+.02,.55),new D(0,Ce+.08,.2),new D(-.35,te+.03,.05)],3718648));const $o=.85,dr=-.35,qo=.22,Ko=.65,W_=new jt(qo,qo,Ko,18),j_=new _w({color:16317180,transparent:!0,opacity:.45,roughness:.15,transmission:.85}),im=new _e(W_,j_);im.position.set(.18,$o,dr),e.add(im);const X_=new jt(qo*.92,qo*.92,Ko*.65,16),Y_=new xt({color:440020,transparent:!0,opacity:.75,roughness:.1}),Su=new _e(X_,Y_);Su.position.set(.18,$o-.1,dr),e.add(Su);const $_=new jt(.08,.08,.06,16),rm=new _e($_,new xt({color:2450411}));rm.position.set(.18,$o+Ko/2+.03,dr),e.add(rm);const q_=C([new D(.18,$o+Ko/2+.03,dr),new D(.1,.65,dr),new D(0,.52,dr)],14742270,.012);e.add(q_);const K_=new Wc(.05,.12,12),Z_=new xt({color:14251782,roughness:.25,metalness:.9}),Zo=new _e(K_,Z_);Zo.rotation.x=Math.PI,Zo.position.set(0,.45,dr),e.add(Zo);const Jo=260,Mu=new Kt,Aa=new Float32Array(Jo*3),Qo=new Float32Array(Jo*3);for(let We=0;We<Jo;We++){Aa[We*3+0]=0,Aa[We*3+1]=.42,Aa[We*3+2]=dr;const dt=.45;Qo[We*3+0]=(Math.random()-.5)*dt,Qo[We*3+1]=-1.8-Math.random()*1.5,Qo[We*3+2]=(Math.random()-.5)*dt}Mu.setAttribute("position",new Ui(Aa,3));const sm=new E_({color:3718648,size:.075,transparent:!0,opacity:0,blending:Uh,depthWrite:!1}),Eu=new ZE(Mu,sm);Eu.visible=!1,e.add(Eu);const J_={particleSystem:Eu,particleGeometry:Mu,particleMaterial:sm,positions:Aa,velocities:Qo,count:Jo};function el(){const We=new qi,dt=.35,ut=.22,Tn=new jt(dt,dt,ut,20),An=new _e(Tn,M);An.rotation.z=Math.PI/2,An.castShadow=!0,We.add(An);const ri=10,zi=new st(ut*.92,.035,.08);for(let Cu=0;Cu<ri;Cu++){const Ru=Cu/ri*Math.PI*2,Pu=new _e(zi,M);Pu.position.set(0,Math.cos(Ru)*(dt+.015),Math.sin(Ru)*(dt+.015)),Pu.rotation.x=-Ru,We.add(Pu)}const Mi=new jt(dt*.55,dt*.55,ut+.02,16),Bi=new _e(Mi,b);Bi.rotation.z=Math.PI/2,We.add(Bi);const il=new jt(.08,.08,ut+.05,8),om=new _e(il,p);return om.rotation.z=Math.PI/2,We.add(om),We}const tl=x+.22,wu=el();wu.position.set(-tl,P,A),t.add(wu);const bu=el();bu.position.set(tl,P,A),t.add(bu);const Tu=el();Tu.position.set(-tl,P,-A),t.add(Tu);const Au=el();Au.position.set(tl,P,-A),t.add(Au);const Q_=new jt(.025,.025,.22,12),nl=(We,dt)=>{const ut=new _e(Q_,p);ut.rotation.z=Math.PI/2,ut.position.set(We,P,dt),e.add(ut)};nl(-x-.11,A),nl(x+.11,A),nl(-x-.11,-A),nl(x+.11,-A);const ey=new st(.03,.35,.08),am=new _e(ey,new xt({color:1579035,roughness:.7}));return am.position.set(-x-.06,.38,.2),e.add(am),e.add(C([new D(-x-.06,.55,.2),new D(-x,.9,.2),new D(-x,Ce+.1,.2),new D(-.35,te+.03,.1)],1579035,.008)),{rootGroup:t,chassisGroup:e,wheels:{frontLeft:wu,frontRight:bu,rearLeft:Tu,rearRight:Au},ultrasonicCones:G_,sprayParticles:J_,statusLedMaterial:Go,sprayNozzleMesh:Zo,tankLiquidMesh:Su}}const GC=[{id:"pvc_frame",label:"PVC Straddle Chassis",color:"#f8fafc",description:"High-clearance white PVC tubular frame with elbows and T-couplings"},{id:"hopper_bed",label:"Foam-Board Tray",color:"#94a3b8",description:"White sunpack open electronics deck secured with black zip-ties"},{id:"esp32_arduino",label:"ESP32 & Arduino",color:"#38bdf8",description:"ESP32 on breadboard + Arduino Mega/Uno mainboard"},{id:"l298n_driver",label:"L298N Motor Driver",color:"#ef4444",description:"Dual H-bridge driver with black extruded finned heatsink"},{id:"relay_spray",label:"Relay & Spray Bottle",color:"#2563eb",description:"5V Songle relay switching mini pump with clear reservoir bottle"},{id:"ultrasonic",label:"HC-SR04 Ultrasonics",color:"#f59e0b",description:"Mounted on front PVC leg & under-chassis with black zip-ties"},{id:"sensors_imu",label:"DHT & MPU-6050",color:"#10b981",description:"Wall-mounted DHT sensor & 6-axis gyro/accelerometer"},{id:"solar_battery",label:"Solar & Battery",color:"#b45309",description:"Rear bracket photovoltaic panel & 4-cell power pack"}],hc={OBSTACLE_CM:25,WARNING_CM:60,MAX_ULTRASONIC_RANGE_CM:250};class VC{constructor(e){ze(this,"container");ze(this,"scene");ze(this,"camera");ze(this,"renderer");ze(this,"controls");ze(this,"robot");ze(this,"animFrameId",null);ze(this,"isDestroyed",!1);ze(this,"groundGrid");ze(this,"fieldPlane");ze(this,"lastTime",performance.now());ze(this,"wheelSpeed",0);ze(this,"wheelAngle",0);ze(this,"targetWheelSpeed",0);ze(this,"targetTurnDiff",0);ze(this,"gridOffset",0);ze(this,"targetPitch",0);ze(this,"targetRoll",0);ze(this,"isPumpActive",!1);ze(this,"isRobotConnected",!1);ze(this,"currentMovement","STOP");ze(this,"leftDist",72);ze(this,"centerDist",48);ze(this,"rightDist",86);ze(this,"targetCamPos",new D(4.6,3.8,4.6));ze(this,"targetControlsTarget",new D(0,1.35,0));ze(this,"isTransitioningCam",!1);this.container=e,this.scene=new BE,this.scene.background=null;const n=e.clientWidth||600,i=e.clientHeight||420;this.camera=new kn(45,n/i,.1,100),this.camera.position.copy(this.targetCamPos),this.renderer=new TC({antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setSize(n,i),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Zx,e.appendChild(this.renderer.domElement),this.controls=new CC(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.06,this.controls.minDistance=2.5,this.controls.maxDistance=20,this.controls.maxPolarAngle=Math.PI/2+.05,this.controls.target.copy(this.targetControlsTarget),this.controls.update(),this.setupLighting(),this.setupGround(),this.robot=HC(),this.scene.add(this.robot.rootGroup),this.animate=this.animate.bind(this),this.animFrameId=requestAnimationFrame(this.animate)}setupLighting(){const e=new bw(16777215,.85);this.scene.add(e);const n=new Ld(16777215,1.2);n.position.set(6,12,8),n.castShadow=!0,n.shadow.mapSize.width=1024,n.shadow.mapSize.height=1024,n.shadow.camera.near=.5,n.shadow.camera.far=30,n.shadow.camera.left=-6,n.shadow.camera.right=6,n.shadow.camera.top=6,n.shadow.camera.bottom=-6,n.shadow.bias=-5e-4,this.scene.add(n);const i=new Ld(16777215,.95);i.position.set(0,5,0),this.scene.add(i);const r=new Ld(1096065,.6);r.position.set(-6,3,-6),this.scene.add(r);const s=new Ew(165063,.4,4);s.position.set(0,.4,0),this.scene.add(s)}setupGround(){const e=new Ho(30,30),n=new xt({color:461588,roughness:.9,metalness:.1});this.fieldPlane=new _e(e,n),this.fieldPlane.rotation.x=-Math.PI/2,this.fieldPlane.position.y=0,this.fieldPlane.receiveShadow=!0,this.scene.add(this.fieldPlane),this.groundGrid=new D_(24,24,1096065,1976635),this.groundGrid.position.y=.005,this.scene.add(this.groundGrid);const i=new Vp({color:3359061});for(let r=-6;r<=6;r+=3){const s=[new D(r,.01,-12),new D(r,.01,12)],a=new Kt().setFromPoints(s),o=new M_(a,i);this.scene.add(o)}}updateTelemetry(e){var o,l,c;if(!e){this.isRobotConnected=!1,this.currentMovement="STOP",this.targetWheelSpeed=0,this.targetTurnDiff=0,this.targetPitch=0,this.targetRoll=0,this.isPumpActive=!1;return}const n=e.mode==="SIMULATION"||e.hardware_mode==="SIMULATION";this.isRobotConnected=n?!0:!!e.esp32_connected;const i=(e.movement||((o=e.actuators)==null?void 0:o.motor_state)||"STOP").toUpperCase();this.currentMovement=i,!this.isRobotConnected||i==="STOP"||i==="STOPPED"?(this.targetWheelSpeed=0,this.targetTurnDiff=0):i==="FORWARD"||i==="MOVING_FORWARD"?(this.targetWheelSpeed=7,this.targetTurnDiff=0):i==="BACKWARD"||i==="MOVING_BACKWARD"?(this.targetWheelSpeed=-7,this.targetTurnDiff=0):i==="LEFT"||i==="TURNING_LEFT"?(this.targetWheelSpeed=4,this.targetTurnDiff=-1):(i==="RIGHT"||i==="TURNING_RIGHT")&&(this.targetWheelSpeed=4,this.targetTurnDiff=1);const r=e.ultrasonic;this.isRobotConnected&&r?(this.leftDist=r.left!=null?Number(r.left):r.distance_cm!=null?r.distance_cm*1.1:70,this.centerDist=r.center!=null?Number(r.center):r.distance_cm!=null?r.distance_cm:50,this.rightDist=r.right!=null?Number(r.right):r.distance_cm!=null?r.distance_cm*1.2:80):(this.leftDist=999,this.centerDist=999,this.rightDist=999);const s=e.mpu6050||e.imu;if(this.isRobotConnected&&s){const f=s.pitch_deg!=null?Number(s.pitch_deg):0,p=s.roll_deg!=null?Number(s.roll_deg):0;this.targetPitch=ci.degToRad(ci.clamp(f,-20,20)),this.targetRoll=ci.degToRad(ci.clamp(p,-20,20))}else this.targetPitch=0,this.targetRoll=0;const a=((l=e.pump)==null?void 0:l.state)||((c=e.actuators)!=null&&c.pump_active?"ON":"OFF");this.isPumpActive=this.isRobotConnected&&a==="ON"}setView(e){switch(this.isTransitioningCam=!0,e){case"isometric":this.targetCamPos.set(4.6,3.8,4.6),this.targetControlsTarget.set(0,1.35,0);break;case"front":this.targetCamPos.set(0,1.35,4.8),this.targetControlsTarget.set(0,1.25,0);break;case"top":this.targetCamPos.set(0,4.8,.05),this.targetControlsTarget.set(0,1.45,0);break;case"side":this.targetCamPos.set(5,1.35,0),this.targetControlsTarget.set(0,1.25,0);break}}animate(e){if(this.isDestroyed)return;this.animFrameId=requestAnimationFrame(this.animate);const n=Math.min((e-this.lastTime)/1e3,.1);if(this.lastTime=e,this.isTransitioningCam&&(this.camera.position.lerp(this.targetCamPos,.08),this.controls.target.lerp(this.targetControlsTarget,.08),this.camera.position.distanceTo(this.targetCamPos)<.05&&(this.isTransitioningCam=!1)),this.controls.update(),this.wheelSpeed=ci.lerp(this.wheelSpeed,this.targetWheelSpeed,.1),Math.abs(this.wheelSpeed)>.01){const s=this.wheelSpeed*n,{frontLeft:a,frontRight:o,rearLeft:l,rearRight:c}=this.robot.wheels;this.targetTurnDiff===0?(a.rotation.x+=s,o.rotation.x+=s,l.rotation.x+=s,c.rotation.x+=s,this.gridOffset=(this.gridOffset-s*.1)%1,this.groundGrid.position.z=this.gridOffset):this.targetTurnDiff<0?(a.rotation.x-=s*.7,l.rotation.x-=s*.7,o.rotation.x+=s*.7,c.rotation.x+=s*.7):(a.rotation.x+=s*.7,l.rotation.x+=s*.7,o.rotation.x-=s*.7,c.rotation.x-=s*.7)}const i=this.robot.chassisGroup;i.rotation.x=ci.lerp(i.rotation.x,this.targetPitch,.07),i.rotation.z=ci.lerp(i.rotation.z,-this.targetRoll,.07),this.updateUltrasonicCone(this.robot.ultrasonicCones.leftMesh,this.robot.ultrasonicCones.leftMaterial,this.leftDist,e),this.updateUltrasonicCone(this.robot.ultrasonicCones.centerMesh,this.robot.ultrasonicCones.centerMaterial,this.centerDist,e),this.updateUltrasonicCone(this.robot.ultrasonicCones.rightMesh,this.robot.ultrasonicCones.rightMaterial,this.rightDist,e);const r=this.robot.sprayParticles;if(this.isPumpActive){r.particleSystem.visible=!0,r.particleMaterial.opacity=ci.lerp(r.particleMaterial.opacity,.75,.1);const s=r.positions,a=r.velocities,o=r.count,l=.45,c=-.35;for(let f=0;f<o;f++)if(s[f*3+0]+=a[f*3+0]*n,s[f*3+1]+=a[f*3+1]*n,s[f*3+2]+=a[f*3+2]*n,s[f*3+1]<.05){s[f*3+0]=(Math.random()-.5)*.12,s[f*3+1]=l,s[f*3+2]=c;const p=.5;a[f*3+0]=(Math.random()-.5)*p,a[f*3+1]=-1.8-Math.random()*1.5,a[f*3+2]=(Math.random()-.5)*p}r.particleGeometry.attributes.position.needsUpdate=!0}else r.particleMaterial.opacity>.01?r.particleMaterial.opacity=ci.lerp(r.particleMaterial.opacity,0,.15):r.particleSystem.visible=!1;if(this.isRobotConnected){const s=.5+.5*Math.sin(e*.006);this.robot.statusLedMaterial.color.setRGB(.2*s,.7*s,1*s)}else{const s=Math.sin(e*.003)>0?.9:.2;this.robot.statusLedMaterial.color.setRGB(s,.1,.1)}this.renderer.render(this.scene,this.camera)}updateUltrasonicCone(e,n,i,r){if(!this.isRobotConnected||i>hc.MAX_ULTRASONIC_RANGE_CM){e.visible=!1;return}e.visible=!0;const s=ci.clamp(i/100,.25,2.4);if(e.scale.set(1,1,s),i<hc.OBSTACLE_CM){const a=.6+.4*Math.sin(r*.015);n.color.setHex(16007006),n.opacity=.8*a}else i<=hc.WARNING_CM?(n.color.setHex(16096779),n.opacity=.5):(n.color.setHex(1096065),n.opacity=.35)}resize(){if(!this.container||this.isDestroyed)return;const e=this.container.clientWidth,n=this.container.clientHeight;e===0||n===0||(this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,n))}destroy(){this.isDestroyed=!0,this.animFrameId!==null&&(cancelAnimationFrame(this.animFrameId),this.animFrameId=null),this.controls.dispose(),this.scene.traverse(e=>{if(e.isMesh){const n=e;n.geometry&&n.geometry.dispose(),n.material&&(Array.isArray(n.material)?n.material.forEach(i=>i.dispose()):n.material.dispose())}}),this.renderer.dispose(),this.renderer.domElement&&this.renderer.domElement.parentNode&&this.renderer.domElement.parentNode.removeChild(this.renderer.domElement)}}const Ng=({telemetry:t})=>{var I,V,Q,q,H,B,W,Z;const e=ae.useRef(null),n=ae.useRef(null),i=new URLSearchParams(window.location.search).get("view")||"isometric",[r,s]=ae.useState(i),[a,o]=ae.useState(!0);ae.useEffect(()=>{if(!e.current)return;const re=new VC(e.current);n.current=re,i!=="isometric"&&re.setView(i);const de=()=>{re.resize()};return window.addEventListener("resize",de),re.updateTelemetry(t),()=>{window.removeEventListener("resize",de),re.destroy(),n.current=null}},[]),ae.useEffect(()=>{n.current&&n.current.updateTelemetry(t)},[t]);const l=re=>{s(re),n.current&&n.current.setView(re)},c=(t==null?void 0:t.mode)==="SIMULATION"||(t==null?void 0:t.hardware_mode)==="SIMULATION",f=c?!0:!!(t!=null&&t.esp32_connected),p=((t==null?void 0:t.movement)||((I=t==null?void 0:t.actuators)==null?void 0:I.motor_state)||"STOP").toUpperCase(),d=t==null?void 0:t.ultrasonic,m=(d==null?void 0:d.center)!=null?Number(d.center):(d==null?void 0:d.distance_cm)!=null?d.distance_cm:f?50:null,g=(d==null?void 0:d.left)!=null?Number(d.left):f?70:null,S=(d==null?void 0:d.right)!=null?Number(d.right):f?80:null,v=m!=null?Math.min(m,g??999,S??999):999,h=f&&v<hc.OBSTACLE_CM,_=((V=t==null?void 0:t.pump)==null?void 0:V.state)||((Q=t==null?void 0:t.actuators)!=null&&Q.pump_active?"ON":"OFF"),E=f&&_==="ON",M=(t==null?void 0:t.mpu6050)||(t==null?void 0:t.imu),b=(M==null?void 0:M.pitch_deg)!=null?Number(M.pitch_deg).toFixed(1):f?"0.0":"--",T=(M==null?void 0:M.roll_deg)!=null?Number(M.roll_deg).toFixed(1):f?"0.0":"--",C=(t==null?void 0:t.soil_moisture)!=null?typeof t.soil_moisture=="number"?t.soil_moisture.toFixed(1):((q=t.soil_moisture.moisture_pct)==null?void 0:q.toFixed(1))??"--":"--",x=((H=t==null?void 0:t.dht22)==null?void 0:H.temperature)??((B=t==null?void 0:t.environment)==null?void 0:B.temperature_c),A=((W=t==null?void 0:t.dht22)==null?void 0:W.humidity)??((Z=t==null?void 0:t.environment)==null?void 0:Z.humidity_pct),P=t==null?void 0:t.npk,L=(P==null?void 0:P.n)??(P==null?void 0:P.nitrogen_mg_kg),O=(P==null?void 0:P.p)??(P==null?void 0:P.phosphorus_mg_kg),U=(P==null?void 0:P.k)??(P==null?void 0:P.potassium_mg_kg);return u.jsxs("div",{className:"glass-panel",style:{padding:"1.25rem",width:"100%",boxSizing:"border-box"},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.85rem",flexWrap:"wrap",gap:"0.75rem"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.65rem"},children:[u.jsx("div",{style:{width:"38px",height:"38px",borderRadius:"10px",background:"linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(6, 182, 212, 0.2))",border:"1px solid rgba(16, 185, 129, 0.4)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 0 15px rgba(16, 185, 129, 0.2)"},children:u.jsx(F1,{size:20,color:"var(--emerald-400)"})}),u.jsxs("div",{children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[u.jsx("h2",{style:{fontSize:"1.05rem",fontWeight:800,margin:0,color:"#fff",letterSpacing:"-0.01em"},children:"AGRI GUARD DIGITAL TWIN"}),c?u.jsx("span",{className:"status-pill",style:{background:"rgba(56, 189, 248, 0.15)",color:"var(--sky-400)",border:"1px solid rgba(56, 189, 248, 0.35)",fontSize:"0.64rem",padding:"0.15rem 0.45rem",fontWeight:800},children:"SIMULATION DATA"}):f?u.jsx("span",{className:"status-pill status-online",style:{fontSize:"0.64rem",padding:"0.15rem 0.45rem",fontWeight:800},children:"REAL HARDWARE LIVE"}):u.jsx("span",{className:"status-pill status-offline",style:{fontSize:"0.64rem",padding:"0.15rem 0.45rem",fontWeight:800},children:"DIGITAL TWIN OFFLINE"})]}),u.jsx("p",{style:{fontSize:"0.74rem",color:"var(--text-muted)",margin:"0.15rem 0 0 0"},children:"Live 3D Engineering Representation & Kinematic Twin of the Physical Prototype"})]})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem",flexWrap:"wrap"},children:[u.jsx("span",{style:{fontSize:"0.7rem",color:"var(--text-dim)",fontWeight:600,marginRight:"0.2rem"},children:"View:"}),[{id:"isometric",label:"Isometric"},{id:"top",label:"Top (Deck)"},{id:"front",label:"Front (Gantry)"},{id:"side",label:"Side (Profile)"}].map(({id:re,label:de})=>u.jsx("button",{type:"button",onClick:()=>l(re),className:"btn",style:{padding:"0.25rem 0.65rem",fontSize:"0.7rem",fontWeight:r===re?800:600,borderRadius:"6px",background:r===re?"var(--emerald-500)":"rgba(255, 255, 255, 0.05)",color:r===re?"#05080f":"var(--text-muted)",border:r===re?"1px solid var(--emerald-400)":"1px solid rgba(255, 255, 255, 0.1)",cursor:"pointer",transition:"all 0.15s ease"},children:de},re)),u.jsxs("button",{type:"button",onClick:()=>l("isometric"),title:"Reset to default camera orientation",className:"btn btn-outline",style:{padding:"0.25rem 0.5rem",fontSize:"0.7rem",borderRadius:"6px",display:"flex",alignItems:"center",gap:"0.3rem",color:"var(--text-muted)"},children:[u.jsx(J1,{size:12}),"Reset"]})]})]}),u.jsxs("div",{style:{position:"relative",width:"100%",height:"460px",borderRadius:"12px",overflow:"hidden",background:"radial-gradient(ellipse at center, rgba(15, 23, 42, 0.8) 0%, rgba(5, 8, 15, 0.95) 100%)",border:"1px solid var(--border-subtle)",boxShadow:"inset 0 0 40px rgba(0, 0, 0, 0.6)"},children:[u.jsx("div",{ref:e,style:{width:"100%",height:"100%",cursor:"grab"}}),u.jsxs("div",{style:{position:"absolute",top:"12px",left:"12px",display:"flex",flexDirection:"column",gap:"6px",pointerEvents:"none"},children:[u.jsxs("div",{style:{background:"rgba(15, 23, 42, 0.85)",backdropFilter:"blur(8px)",border:"1px solid rgba(255, 255, 255, 0.12)",borderRadius:"8px",padding:"6px 10px",display:"flex",alignItems:"center",gap:"8px",boxShadow:"0 4px 12px rgba(0,0,0,0.4)"},children:[u.jsxs("div",{style:{width:"24px",height:"24px",borderRadius:"6px",background:p!=="STOP"?"rgba(16, 185, 129, 0.25)":"rgba(255, 255, 255, 0.08)",display:"flex",alignItems:"center",justifyContent:"center",color:p!=="STOP"?"var(--emerald-400)":"var(--text-muted)"},children:[p==="FORWARD"&&u.jsx(bp,{size:15}),p==="BACKWARD"&&u.jsx(Mp,{size:15}),p==="LEFT"&&u.jsx(Ep,{size:15}),p==="RIGHT"&&u.jsx(wp,{size:15}),p==="STOP"&&u.jsx(Rp,{size:13})]}),u.jsxs("div",{children:[u.jsx("div",{style:{fontSize:"0.62rem",color:"var(--text-dim)",fontWeight:700,textTransform:"uppercase"},children:"Mobility State"}),u.jsx("div",{style:{fontSize:"0.78rem",fontWeight:800,color:p!=="STOP"?"var(--emerald-400)":"#fff"},children:p})]})]}),u.jsxs("div",{style:{background:E?"rgba(6, 182, 212, 0.2)":"rgba(15, 23, 42, 0.85)",backdropFilter:"blur(8px)",border:`1px solid ${E?"rgba(6, 182, 212, 0.5)":"rgba(255, 255, 255, 0.12)"}`,borderRadius:"8px",padding:"6px 10px",display:"flex",alignItems:"center",gap:"8px",boxShadow:E?"0 0 15px rgba(6, 182, 212, 0.3)":"0 4px 12px rgba(0,0,0,0.4)"},children:[u.jsx(ko,{size:16,color:E?"var(--cyan-400)":"var(--text-dim)",className:E?"pulse":""}),u.jsxs("div",{children:[u.jsx("div",{style:{fontSize:"0.62rem",color:"var(--text-dim)",fontWeight:700,textTransform:"uppercase"},children:"Spray Nozzle"}),u.jsx("div",{style:{fontSize:"0.76rem",fontWeight:800,color:E?"var(--cyan-400)":"var(--text-muted)"},children:E?"SPRAY ACTIVE (Atomizing)":"SPRAY READY (Idle)"})]})]})]}),u.jsxs("div",{style:{position:"absolute",top:"12px",right:"12px",display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"6px",pointerEvents:"none"},children:[h&&u.jsxs("div",{style:{background:"rgba(244, 63, 94, 0.25)",backdropFilter:"blur(8px)",border:"1px solid var(--rose-500)",borderRadius:"8px",padding:"6px 10px",display:"flex",alignItems:"center",gap:"6px",color:"#fff",fontSize:"0.74rem",fontWeight:800,boxShadow:"0 0 18px rgba(244, 63, 94, 0.4)"},children:[u.jsx(ds,{size:15,color:"var(--rose-400)"}),u.jsxs("span",{children:["OBSTACLE DETECTED (",v.toFixed(0)," cm)"]})]}),u.jsxs("div",{style:{background:"rgba(15, 23, 42, 0.85)",backdropFilter:"blur(8px)",border:"1px solid rgba(255, 255, 255, 0.12)",borderRadius:"8px",padding:"6px 10px",display:"flex",gap:"12px"},children:[u.jsxs("div",{style:{textAlign:"center"},children:[u.jsx("div",{style:{fontSize:"0.60rem",color:"var(--text-dim)",fontWeight:700},children:"LEFT"}),u.jsx("div",{className:"mono",style:{fontSize:"0.75rem",fontWeight:800,color:"#fff"},children:g!=null?`${g.toFixed(0)}cm`:"--"})]}),u.jsxs("div",{style:{textAlign:"center",borderLeft:"1px solid rgba(255,255,255,0.1)",paddingLeft:"8px"},children:[u.jsx("div",{style:{fontSize:"0.60rem",color:h?"var(--rose-400)":"var(--text-dim)",fontWeight:800},children:"CENTER"}),u.jsx("div",{className:"mono",style:{fontSize:"0.75rem",fontWeight:800,color:h?"var(--rose-400)":"var(--amber-400)"},children:m!=null?`${m.toFixed(0)}cm`:"--"})]}),u.jsxs("div",{style:{textAlign:"center",borderLeft:"1px solid rgba(255,255,255,0.1)",paddingLeft:"8px"},children:[u.jsx("div",{style:{fontSize:"0.60rem",color:"var(--text-dim)",fontWeight:700},children:"RIGHT"}),u.jsx("div",{className:"mono",style:{fontSize:"0.75rem",fontWeight:800,color:"#fff"},children:S!=null?`${S.toFixed(0)}cm`:"--"})]})]})]}),u.jsxs("div",{style:{position:"absolute",bottom:"12px",left:"12px",display:"flex",gap:"8px",pointerEvents:"none"},children:[u.jsxs("div",{style:{background:"rgba(15, 23, 42, 0.85)",backdropFilter:"blur(8px)",border:"1px solid rgba(255, 255, 255, 0.12)",borderRadius:"8px",padding:"5px 9px",display:"flex",alignItems:"center",gap:"6px",fontSize:"0.72rem"},children:[u.jsx(Ap,{size:14,color:"var(--emerald-400)"}),u.jsx("span",{style:{color:"var(--text-dim)"},children:"IMU Tilt:"}),u.jsxs("span",{className:"mono",style:{color:"#fff",fontWeight:700},children:["P: ",b,"° | R: ",T,"°"]})]}),(t==null?void 0:t.battery_voltage)&&u.jsxs("div",{style:{background:"rgba(15, 23, 42, 0.85)",backdropFilter:"blur(8px)",border:"1px solid rgba(255, 255, 255, 0.12)",borderRadius:"8px",padding:"5px 9px",display:"flex",alignItems:"center",gap:"6px",fontSize:"0.72rem"},children:[u.jsx(qx,{size:14,color:"var(--sky-400)"}),u.jsxs("span",{className:"mono",style:{color:"var(--sky-400)",fontWeight:800},children:[t.battery_voltage.toFixed(1),"V"]})]})]}),u.jsxs("div",{style:{position:"absolute",bottom:"12px",right:"12px",display:"flex",gap:"8px",pointerEvents:"none"},children:[u.jsxs("div",{style:{background:"rgba(15, 23, 42, 0.85)",backdropFilter:"blur(8px)",border:"1px solid rgba(255, 255, 255, 0.12)",borderRadius:"8px",padding:"5px 9px",display:"flex",alignItems:"center",gap:"5px",fontSize:"0.72rem"},children:[u.jsx(jx,{size:13,color:"var(--sky-400)"}),u.jsx("span",{style:{color:"var(--text-dim)"},children:"Soil:"}),u.jsxs("span",{className:"mono",style:{color:"#fff",fontWeight:700},children:[C,"%"]})]}),x!=null&&u.jsxs("div",{style:{background:"rgba(15, 23, 42, 0.85)",backdropFilter:"blur(8px)",border:"1px solid rgba(255, 255, 255, 0.12)",borderRadius:"8px",padding:"5px 9px",display:"flex",alignItems:"center",gap:"5px",fontSize:"0.72rem"},children:[u.jsx(Pp,{size:13,color:"var(--amber-400)"}),u.jsxs("span",{className:"mono",style:{color:"#fff",fontWeight:700},children:[Number(x).toFixed(1),"°C · ",A!=null?`${Number(A).toFixed(0)}%`:""]})]}),L!=null&&u.jsxs("div",{style:{background:"rgba(15, 23, 42, 0.85)",backdropFilter:"blur(8px)",border:"1px solid rgba(255, 255, 255, 0.12)",borderRadius:"8px",padding:"5px 9px",display:"flex",alignItems:"center",gap:"5px",fontSize:"0.72rem"},children:[u.jsx(cu,{size:13,color:"var(--pink-400)"}),u.jsxs("span",{className:"mono",style:{color:"#fff",fontWeight:700},children:["NPK: ",L,"-",O,"-",U]})]})]}),!f&&u.jsxs("div",{style:{position:"absolute",inset:0,background:"rgba(5, 8, 15, 0.75)",backdropFilter:"blur(4px)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"8px"},children:[u.jsx(uu,{size:28,color:"var(--rose-400)"}),u.jsx("div",{style:{fontSize:"0.95rem",fontWeight:800,color:"var(--rose-400)"},children:"DIGITAL TWIN OFFLINE"}),u.jsx("p",{style:{fontSize:"0.75rem",color:"var(--text-muted)",margin:0,maxWidth:"320px",textAlign:"center"},children:"Physical robot communication is disconnected. Reconnect via Wi-Fi or Bluetooth in the Connectivity Panel to resume live kinematic streaming."})]})]}),u.jsxs("div",{style:{marginTop:"0.75rem",padding:"0.55rem 0.85rem",background:"rgba(0, 0, 0, 0.25)",borderRadius:"8px",border:"1px solid var(--border-subtle)",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"0.6rem"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.45rem",fontSize:"0.72rem",color:"var(--text-dim)",fontWeight:700},children:[u.jsx(j1,{size:14,color:"var(--emerald-400)"}),u.jsx("span",{children:"PROTOTYPE SUBSYSTEMS:"})]}),u.jsx("div",{style:{display:"flex",alignItems:"center",gap:"0.85rem",flexWrap:"wrap"},children:GC.map(re=>u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.35rem",fontSize:"0.70rem"},title:re.description,children:[u.jsx("span",{style:{width:"8px",height:"8px",borderRadius:"50%",background:re.color,boxShadow:`0 0 6px ${re.color}`}}),u.jsx("span",{style:{color:"var(--text-secondary)",fontWeight:600},children:re.label})]},re.id))})]})]})},WC={dashboard:{title:"Dashboard",section:"Overview"},heatmap:{title:"Field Monitor",section:"Field Operations"},remote:{title:"Robot Control",section:"Field Operations"},sensors:{title:"Sensors",section:"Hardware"},devices:{title:"Device Health",section:"Hardware"},diagnostics:{title:"Hardware Diagnostics",section:"System"},logs:{title:"System Logs",section:"System"}},jC=()=>{var U,I,V,Q,q,H;const{telemetry:t,wsConnected:e}=D1(),[n,i]=ae.useState("dashboard"),[r,s]=ae.useState("ZONE-R1C1"),[a,o]=ae.useState(null),[l,c]=ae.useState(null),[f,p]=ae.useState(!1),[d,m]=ae.useState(null),g=async B=>{p(!0),m(null);try{const W=await fM(B);o(W.detection),c(W.decision),m(`Analysis complete: ${W.detection.display_name} (${(W.detection.confidence*100).toFixed(0)}%)`)}catch(W){m(`Scan error: ${W.message||"Camera capture failed"}`)}finally{p(!1)}},S=async(B,W,Z)=>{const re=await mM(B,W,Z);return l&&c({...l,approved:W,status:W?"FARMER_APPROVED_EXECUTED":"REJECTED_BY_FARMER"}),re},v=async(B,W,Z=0)=>uM(B,W,Z),h=async()=>dM(),_=async()=>hM(),{title:E,section:M}=WC[n],b=(t==null?void 0:t.esp32_connected)??!1,T=(t==null?void 0:t.hardware_mode)==="SIMULATION"||(t==null?void 0:t.mode)==="SIMULATION",C=((U=t==null?void 0:t.safety)==null?void 0:U.emergency_stop)??!1,x=(t==null?void 0:t.battery_percentage)??null,A=typeof(t==null?void 0:t.soil_moisture)=="number"?t.soil_moisture:((I=t==null?void 0:t.soil_moisture)==null?void 0:I.moisture_pct)??null,P=((V=t==null?void 0:t.dht22)==null?void 0:V.temperature)??((Q=t==null?void 0:t.environment)==null?void 0:Q.temperature_c)??null,L=((q=t==null?void 0:t.dht22)==null?void 0:q.humidity)??((H=t==null?void 0:t.environment)==null?void 0:H.humidity_pct)??null,O=T?"Simulation":b?"Connected":"Disconnected";return u.jsxs("div",{className:"app-shell",children:[u.jsx(cM,{activeTab:n,setActiveTab:i,telemetry:t,wsConnected:e}),u.jsxs("div",{className:"main-area",children:[u.jsx(oM,{pageTitle:E,pageSection:M,telemetry:t,wsConnected:e,onEmergencyStop:_}),u.jsxs("div",{className:"page-content",children:[d&&u.jsxs("div",{className:`notification-banner ${d.includes("error")?"error":"success"}`,children:[d.includes("error")?u.jsx(ds,{size:15}):u.jsx(Xx,{size:15}),u.jsx("span",{children:d}),u.jsx("button",{onClick:()=>m(null),className:"btn btn-ghost",style:{marginLeft:"auto",padding:"2px 6px",fontSize:"0.75rem"},children:"✕"})]}),C&&u.jsxs("div",{className:"estop-banner",children:[u.jsx(du,{size:18}),u.jsxs("div",{children:[u.jsx("strong",{children:"EMERGENCY STOP ACTIVE"}),u.jsx("div",{style:{fontSize:"0.76rem",fontWeight:500,opacity:.85,marginTop:"2px"},children:"All motor PWM and chemical pump actuation are hardware locked. Clear the interlock to resume."})]})]}),n==="dashboard"&&u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"18px"},children:[u.jsxs("div",{className:"grid-4",children:[u.jsxs("div",{className:"stat-card",children:[u.jsx("div",{className:"stat-label",children:"Robot Status"}),u.jsx("div",{className:"stat-value",style:{fontSize:"1.15rem",color:T?"var(--info)":b?"var(--green-700)":"var(--danger)"},children:O}),u.jsx("div",{className:"stat-meta",children:T?"Safe test sandbox":b?"4WD chassis active":"Waiting for ESP32"})]}),u.jsxs("div",{className:"stat-card",children:[u.jsx("div",{className:"stat-label",children:"AI System"}),u.jsx("div",{className:"stat-value",style:{fontSize:"1.15rem",color:"var(--green-700)"},children:"Ready"}),u.jsx("div",{className:"stat-meta",children:a?`Last: ${a.display_name}`:"Awaiting scan"})]}),u.jsxs("div",{className:"stat-card",children:[u.jsx("div",{className:"stat-label",children:"Soil Moisture"}),u.jsx("div",{className:"stat-value",children:A!==null?`${A.toFixed(0)}%`:"--"}),u.jsx("div",{className:"stat-meta",children:A===null?"Sensor offline":A>=70?"WET — reduce irrigation":A>=40?"NORMAL — optimal range":"DRY — irrigation recommended"})]}),u.jsxs("div",{className:"stat-card",children:[u.jsx("div",{className:"stat-label",children:"Battery"}),u.jsx("div",{className:"stat-value",style:{color:x!==null&&x<20?"var(--danger)":x!==null&&x<50?"var(--warning)":"var(--text-primary)"},children:x!==null?`${x}%`:"--"}),u.jsx("div",{className:"stat-meta",children:x!==null?x<20?"Low — charge soon":x<50?"Moderate":"Healthy":"Not reported"})]})]}),(P!==null||L!==null)&&u.jsx("div",{className:"card",style:{padding:"12px 20px"},children:u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"24px",flexWrap:"wrap"},children:[u.jsx("span",{style:{fontSize:"0.75rem",fontWeight:700,color:"var(--text-muted)",textTransform:"uppercase",letterSpacing:"0.06em"},children:"Environment"}),P!==null&&u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[u.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:"Temperature"}),u.jsxs("span",{style:{fontSize:"0.9rem",fontWeight:700,color:"var(--text-primary)"},children:[P.toFixed(1),"°C"]})]}),L!==null&&u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[u.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:"Humidity"}),u.jsxs("span",{style:{fontSize:"0.9rem",fontWeight:700,color:"var(--text-primary)"},children:[L.toFixed(0),"%"]})]}),(t==null?void 0:t.active_zone_id)&&u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[u.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:"Active Zone"}),u.jsx("span",{style:{fontSize:"0.82rem",fontWeight:700,color:"var(--green-700)",fontFamily:"monospace"},children:t.active_zone_id})]})]})}),u.jsx(AM,{telemetry:t}),u.jsx(Ng,{telemetry:t}),u.jsx(M0,{telemetry:t})]}),n==="remote"&&u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[u.jsxs("div",{className:"remote-cockpit-layout",children:[u.jsx("div",{className:"remote-cockpit-camera",children:u.jsx(S0,{cameraStatus:t==null?void 0:t.camera_status,lastDetection:a,isScanning:f,onTriggerScan:g,activeZoneId:(t==null?void 0:t.active_zone_id)??r,telemetry:t,onMove:v,onStop:h})}),u.jsx("div",{className:"remote-cockpit-controls",children:u.jsx(SM,{telemetry:t,onMove:v,onStop:h,onEmergencyStop:_,onSprayApprove:S})})]}),u.jsx(Ng,{telemetry:t}),u.jsx(M0,{telemetry:t})]}),n==="diagnostics"&&u.jsx(MM,{}),n==="sensors"&&u.jsx(EM,{telemetry:t}),n==="devices"&&u.jsx(wM,{}),n==="logs"&&u.jsx(TM,{}),n==="heatmap"&&u.jsx("div",{className:"animate-fade-in",style:{display:"flex",flexDirection:"column",gap:"16px"},children:u.jsx(S0,{cameraStatus:t==null?void 0:t.camera_status,lastDetection:a,isScanning:f,onTriggerScan:g,activeZoneId:(t==null?void 0:t.active_zone_id)??r,telemetry:t,onMove:v,onStop:h})})]})]})]})};Hd.createRoot(document.getElementById("root")).render(u.jsx(Pf.StrictMode,{children:u.jsx(jC,{})}));
