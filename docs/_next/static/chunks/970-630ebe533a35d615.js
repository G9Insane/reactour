"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[970],{6277:function(e,t,n){t.Z=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(o&&(o+=" "),o+=r);else for(n in t)t[n]&&(o&&(o+=" "),o+=n)}return o}(e))&&(r&&(r+=" "),r+=t);return r}},4970:function(e,t,n){n.d(t,{tC:function(){return e4},DY:function(){return e5}});var r,o,i,a,u,c,l=n(8165),s=n(2784),d=n(8241),f=n(1370),p=n(6277);let v="undefined"!=typeof window?s.useLayoutEffect:()=>{},m=new Map;function h(...e){let t={...e[0]};for(let n=1;n<e.length;n++){let r=e[n];for(let o in r){let i=t[o],a=r[o];"function"==typeof i&&"function"==typeof a&&"o"===o[0]&&"n"===o[1]&&o.charCodeAt(2)>=65&&90>=o.charCodeAt(2)?t[o]=function(...e){return(...t)=>{for(let n of e)"function"==typeof n&&n(...t)}}(i,a):("className"===o||"UNSAFE_className"===o)&&"string"==typeof i&&"string"==typeof a?t[o]=(0,p.Z)(i,a):"id"===o&&i&&a?t.id=function(e,t){if(e===t)return e;let n=m.get(e);if(n)return n(t),t;let r=m.get(t);return r?(r(e),e):t}(i,a):t[o]=void 0!==a?a:i}}return t}function b(e){if(function(){if(null==g){g=!1;try{document.createElement("div").focus({get preventScroll(){return g=!0,!0}})}catch(e){}}return g}())e.focus({preventScroll:!0});else{let t=function(e){for(var t=e.parentNode,n=[],r=document.scrollingElement||document.documentElement;t instanceof HTMLElement&&t!==r;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;return r instanceof HTMLElement&&n.push({element:r,scrollTop:r.scrollTop,scrollLeft:r.scrollLeft}),n}(e);e.focus(),function(e){for(let{element:t,scrollTop:n,scrollLeft:r}of e)t.scrollTop=n,t.scrollLeft=r}(t)}}let g=null,y=new Map,E=new Set;function w(){if("undefined"==typeof window)return;let e=e=>{let n=y.get(e.target);n||(n=new Set,y.set(e.target,n),e.target.addEventListener("transitioncancel",t)),n.add(e.propertyName)},t=e=>{let n=y.get(e.target);if(n&&(n.delete(e.propertyName),0===n.size&&(e.target.removeEventListener("transitioncancel",t),y.delete(e.target)),0===y.size)){for(let r of E)r();E.clear()}};document.body.addEventListener("transitionrun",e),document.body.addEventListener("transitionend",t)}"undefined"!=typeof document&&("loading"!==document.readyState?w():document.addEventListener("DOMContentLoaded",w)),"undefined"!=typeof window&&window.visualViewport,new WeakMap;class C{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(e,t){this.nativeEvent=t,this.target=t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget,this.bubbles=t.bubbles,this.cancelable=t.cancelable,this.defaultPrevented=t.defaultPrevented,this.eventPhase=t.eventPhase,this.isTrusted=t.isTrusted,this.timeStamp=t.timeStamp,this.type=e}}function x(e){let t=(0,s.useRef)({isFocused:!1,onBlur:e,observer:null});return t.current.onBlur=e,v(()=>{let e=t.current;return()=>{e.observer&&(e.observer.disconnect(),e.observer=null)}},[]),(0,s.useCallback)(e=>{if(e.target instanceof HTMLButtonElement||e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLSelectElement){t.current.isFocused=!0;let n=e.target,r=e=>{var r,o;t.current.isFocused=!1,n.disabled&&(null===(o=(r=t.current).onBlur)||void 0===o||o.call(r,new C("blur",e))),t.current.observer&&(t.current.observer.disconnect(),t.current.observer=null)};n.addEventListener("focusout",r,{once:!0}),t.current.observer=new MutationObserver(()=>{t.current.isFocused&&n.disabled&&(t.current.observer.disconnect(),n.dispatchEvent(new FocusEvent("blur")),n.dispatchEvent(new FocusEvent("focusout",{bubbles:!0})))}),t.current.observer.observe(n,{attributes:!0,attributeFilter:["disabled"]})}},[])}let L=s.createContext(null);L.displayName="PressResponderContext";let k=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function S(e){let{isDisabled:t,onFocus:n,onBlur:r,onFocusChange:o}=e,i=(0,s.useCallback)(e=>{if(e.target===e.currentTarget)return r&&r(e),o&&o(!1),!0},[r,o]),a=x(i),u=(0,s.useCallback)(e=>{e.target===e.currentTarget&&(n&&n(e),o&&o(!0),a(e))},[o,n,a]);return{focusProps:{onFocus:!t&&(n||o||r)?u:void 0,onBlur:!t&&(r||o)?i:null}}}let N=null,P=new Set,F=!1,M=!1,R=!1,T={Tab:!0,Escape:!0};function D(e,t){for(let n of P)n(e,t)}function O(e){var t;M=!0,e.metaKey||!("undefined"!=typeof window&&null!=window.navigator&&/^Mac/i.test((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.platform)||window.navigator.platform))&&e.altKey||e.ctrlKey||"Control"===e.key||"Shift"===e.key||"Meta"===e.key||(N="keyboard",D("keyboard",e))}function W(e){N="pointer",("mousedown"===e.type||"pointerdown"===e.type)&&(M=!0,D("pointer",e))}function I(e){(0!==e.mozInputSource||!e.isTrusted)&&(0!==e.detail||e.pointerType)||(M=!0,N="virtual")}function A(e){e.target!==window&&e.target!==document&&(M||R||(N="virtual",D("virtual",e)),M=!1,R=!1)}function B(){M=!1,R=!0}function K(){if("undefined"==typeof window||F)return;let e=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(){M=!0,e.apply(this,arguments)},document.addEventListener("keydown",O,!0),document.addEventListener("keyup",O,!0),document.addEventListener("click",I,!0),window.addEventListener("focus",A,!0),window.addEventListener("blur",B,!1),"undefined"!=typeof PointerEvent?(document.addEventListener("pointerdown",W,!0),document.addEventListener("pointermove",W,!0),document.addEventListener("pointerup",W,!0)):(document.addEventListener("mousedown",W,!0),document.addEventListener("mousemove",W,!0),document.addEventListener("mouseup",W,!0)),F=!0}function Z(){return"pointer"!==N}function j(e){if(!e)return;let t=!0;return n=>{e({...n,preventDefault(){n.preventDefault()},isDefaultPrevented:()=>n.isDefaultPrevented(),stopPropagation(){console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")},continuePropagation(){t=!1}}),t&&n.stopPropagation()}}function H(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}"undefined"!=typeof document&&("loading"!==document.readyState?K():document.addEventListener("DOMContentLoaded",K));var z={};function Y(e){if("virtual"===N){var t;let n=document.activeElement;t=()=>{document.activeElement===n&&document.contains(e)&&b(e)},requestAnimationFrame(()=>{0===y.size?t():E.add(t)})}else b(e)}H(z,"FocusScope",()=>U),H(z,"useFocusManager",()=>$),H(z,"getFocusableTreeWalker",()=>ei),H(z,"createFocusManager",()=>ea),H({},"focusSafely",()=>Y);let V=s.createContext(null),_=null,X=new Map;function U(e){let t,n,{children:r,contain:o,restoreFocus:i,autoFocus:a}=e,u=(0,s.useRef)(),c=(0,s.useRef)(),l=(0,s.useRef)([]),d=(0,s.useContext)(V),f=null==d?void 0:d.scopeRef;return v(()=>{let e=u.current.nextSibling,t=[];for(;e&&e!==c.current;)t.push(e),e=e.nextSibling;l.current=t},[r,f]),v(()=>(X.set(l,f),()=>{(l===_||en(l,_))&&(!f||X.has(f))&&(_=f),X.delete(l)}),[l,f]),t=(0,s.useRef)(),n=(0,s.useRef)(null),v(()=>{let e=l.current;if(!o)return;let r=e=>{if("Tab"!==e.key||e.altKey||e.ctrlKey||e.metaKey||l!==_)return;let t=document.activeElement,n=l.current;if(!ee(t,n))return;let r=ei(Q(n),{tabbable:!0},n);r.currentNode=t;let o=e.shiftKey?r.previousNode():r.nextNode();o||(r.currentNode=e.shiftKey?n[n.length-1].nextElementSibling:n[0].previousElementSibling,o=e.shiftKey?r.previousNode():r.nextNode()),e.preventDefault(),o&&er(o,!0)},i=e=>{!_||en(_,l)?(_=l,t.current=e.target):l!==_||et(e.target,l)?l===_&&(t.current=e.target):t.current?t.current.focus():_&&eo(_.current)},a=e=>{n.current=requestAnimationFrame(()=>{l!==_||et(document.activeElement,l)||(_=l,t.current=e.target,t.current.focus())})};return document.addEventListener("keydown",r,!1),document.addEventListener("focusin",i,!1),e.forEach(e=>e.addEventListener("focusin",i,!1)),e.forEach(e=>e.addEventListener("focusout",a,!1)),()=>{document.removeEventListener("keydown",r,!1),document.removeEventListener("focusin",i,!1),e.forEach(e=>e.removeEventListener("focusin",i,!1)),e.forEach(e=>e.removeEventListener("focusout",a,!1))}},[l,o]),(0,s.useEffect)(()=>()=>cancelAnimationFrame(n.current),[n]),function(e,t,n){let r=(0,s.useRef)("undefined"!=typeof document?document.activeElement:null);v(()=>{let o=r.current;if(!t)return;let i=t=>{if("Tab"!==t.key||t.altKey||t.ctrlKey||t.metaKey)return;let n=document.activeElement;if(!ee(n,e.current))return;let r=ei(document.body,{tabbable:!0});r.currentNode=n;let i=t.shiftKey?r.previousNode():r.nextNode();if(document.body.contains(o)&&o!==document.body||(o=null),(!i||!ee(i,e.current))&&o){r.currentNode=o;do i=t.shiftKey?r.previousNode():r.nextNode();while(ee(i,e.current));t.preventDefault(),t.stopPropagation(),i?er(i,!0):function(e){for(let t of X.keys())if(ee(e,t.current))return!0;return!1}(o)?er(o,!0):n.blur()}};return n||document.addEventListener("keydown",i,!0),()=>{n||document.removeEventListener("keydown",i,!0),t&&o&&ee(document.activeElement,e.current)&&requestAnimationFrame(()=>{document.body.contains(o)&&er(o)})}},[e,t,n])}(l,i,o),function(e,t){let n=s.useRef(t);(0,s.useEffect)(()=>{n.current&&(_=e,ee(document.activeElement,_.current)||eo(e.current)),n.current=!1},[])}(l,a),s.createElement(V.Provider,{value:{scopeRef:l,focusManager:{focusNext(e={}){let t=l.current,{from:n,tabbable:r,wrap:o}=e,i=n||document.activeElement,a=t[0].previousElementSibling,u=ei(Q(t),{tabbable:r},t);u.currentNode=ee(i,t)?i:a;let c=u.nextNode();return!c&&o&&(u.currentNode=a,c=u.nextNode()),c&&er(c,!0),c},focusPrevious(e={}){let t=l.current,{from:n,tabbable:r,wrap:o}=e,i=n||document.activeElement,a=t[t.length-1].nextElementSibling,u=ei(Q(t),{tabbable:r},t);u.currentNode=ee(i,t)?i:a;let c=u.previousNode();return!c&&o&&(u.currentNode=a,c=u.previousNode()),c&&er(c,!0),c},focusFirst(e={}){let t=l.current,{tabbable:n}=e,r=ei(Q(t),{tabbable:n},t);r.currentNode=t[0].previousElementSibling;let o=r.nextNode();return o&&er(o,!0),o},focusLast(e={}){let t=l.current,{tabbable:n}=e,r=ei(Q(t),{tabbable:n},t);r.currentNode=t[t.length-1].nextElementSibling;let o=r.previousNode();return o&&er(o,!0),o}}}},s.createElement("span",{"data-focus-scope-start":!0,hidden:!0,ref:u}),r,s.createElement("span",{"data-focus-scope-end":!0,hidden:!0,ref:c}))}function $(){var e;return null===(e=(0,s.useContext)(V))||void 0===e?void 0:e.focusManager}let q=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"],G=q.join(":not([hidden]),")+",[tabindex]:not([disabled]):not([hidden])";q.push('[tabindex]:not([tabindex="-1"]):not([disabled])');let J=q.join(':not([hidden]):not([tabindex="-1"]),');function Q(e){return e[0].parentElement}function ee(e,t){return t.some(t=>t.contains(e))}function et(e,t){for(let n of X.keys())if((n===t||en(t,n))&&ee(e,n.current))return!0;return!1}function en(e,t){let n=X.get(t);return!!n&&(n===e||en(e,n))}function er(e,t=!1){if(null==e||t){if(null!=e)try{e.focus()}catch(n){}}else try{Y(e)}catch(r){}}function eo(e){let t=e[0].previousElementSibling,n=ei(Q(e),{tabbable:!0},e);n.currentNode=t,er(n.nextNode())}function ei(e,t,n){let r=(null==t?void 0:t.tabbable)?J:G,o=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode(e){var o;return(null==t?void 0:null===(o=t.from)||void 0===o?void 0:o.contains(e))?NodeFilter.FILTER_REJECT:e.matches(r)&&function e(t,n){return"#comment"!==t.nodeName&&function(e){if(!(e instanceof HTMLElement)&&!(e instanceof SVGElement))return!1;let{display:t,visibility:n}=e.style,r="none"!==t&&"hidden"!==n&&"collapse"!==n;if(r){let{getComputedStyle:o}=e.ownerDocument.defaultView,{display:i,visibility:a}=o(e);r="none"!==i&&"hidden"!==a&&"collapse"!==a}return r}(t)&&!t.hasAttribute("hidden")&&("DETAILS"!==t.nodeName||!n||"SUMMARY"===n.nodeName||t.hasAttribute("open"))&&(!t.parentElement||e(t.parentElement,t))}(e)&&(!n||ee(e,n))?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});return(null==t?void 0:t.from)&&(o.currentNode=t.from),o}function ea(e){return{focusNext(t={}){let n=e.current,{from:r,tabbable:o,wrap:i}=t,a=r||document.activeElement,u=ei(n,{tabbable:o});n.contains(a)&&(u.currentNode=a);let c=u.nextNode();return!c&&i&&(u.currentNode=n,c=u.nextNode()),c&&er(c,!0),c},focusPrevious(t={}){let n=e.current,{from:r,tabbable:o,wrap:i}=t,a=r||document.activeElement,u=ei(n,{tabbable:o});if(n.contains(a))u.currentNode=a;else{let c=eu(u);return c&&er(c,!0),c}let l=u.previousNode();return!l&&i&&(u.currentNode=n,l=eu(u)),l&&er(l,!0),l},focusFirst(t={}){let n=e.current,{tabbable:r}=t,o=ei(n,{tabbable:r}).nextNode();return o&&er(o,!0),o},focusLast(t={}){let n=e.current,{tabbable:r}=t,o=eu(ei(n,{tabbable:r}));return o&&er(o,!0),o}}}function eu(e){let t,n;do(n=e.lastChild())&&(t=n);while(n);return t}function ec(e={}){var t,n;let{autoFocus:r=!1,isTextInput:o,within:i}=e,a=(0,s.useRef)({isFocused:!1,isFocusVisible:r||Z()}).current,[u,c]=(0,s.useState)(!1),[l,d]=(0,s.useState)(()=>a.isFocused&&a.isFocusVisible),f=()=>d(a.isFocused&&a.isFocusVisible),p=e=>{a.isFocused=e,c(e),f()};t=e=>{a.isFocusVisible=e,f()},n={isTextInput:o},K(),(0,s.useEffect)(()=>{let e=(e,r)=>{(!((null==n?void 0:n.isTextInput)&&"keyboard"===e&&r instanceof KeyboardEvent)||T[r.key])&&t(Z())};return P.add(e),()=>{P.delete(e)}},[]);let{focusProps:v}=S({isDisabled:i,onFocusChange:p}),{focusWithinProps:m}=function(e){let{isDisabled:t,onBlurWithin:n,onFocusWithin:r,onFocusWithinChange:o}=e,i=(0,s.useRef)({isFocusWithin:!1}),a=(0,s.useCallback)(e=>{i.current.isFocusWithin&&!e.currentTarget.contains(e.relatedTarget)&&(i.current.isFocusWithin=!1,n&&n(e),o&&o(!1))},[n,o,i]),u=x(a),c=(0,s.useCallback)(e=>{i.current.isFocusWithin||(r&&r(e),o&&o(!0),i.current.isFocusWithin=!0,u(e))},[r,o,u]);return t?{focusWithinProps:{onFocus:null,onBlur:null}}:{focusWithinProps:{onFocus:c,onBlur:a}}}({isDisabled:!i,onFocusWithinChange:p});return{isFocused:u,isFocusVisible:a.isFocused&&l,focusProps:i?m:v}}function el(e){let{children:t,focusClass:n,focusRingClass:r}=e,{isFocused:o,isFocusVisible:i,focusProps:a}=ec(e),u=s.Children.only(t);return s.cloneElement(u,h(u.props,{...a,className:(0,p.Z)({[n||""]:o,[r||""]:i})}))}H({},"FocusRing",()=>el),H({},"useFocusRing",()=>ec);var es={};H(es,"FocusableProvider",()=>ef),H(es,"useFocusable",()=>ep);let ed=s.createContext(null),ef=s.forwardRef(function(e,t){let{children:n,...r}=e,o={...r,ref:t};return s.createElement(ed.Provider,{value:o},n)});function ep(e,t){let{focusProps:n}=S(e),{keyboardProps:r}={keyboardProps:e.isDisabled?{}:{onKeyDown:j(e.onKeyDown),onKeyUp:j(e.onKeyUp)}},o=h(n,r),i=function(e){var t,n;let r=(0,s.useContext)(ed)||{};v(()=>{if(t&&t.ref&&n)return t.ref.current=n.current,()=>{t.ref.current=null}},[t=r,n=e]);let{ref:o,...i}=r;return i}(t),a=e.isDisabled?{}:i,u=(0,s.useRef)(e.autoFocus);return(0,s.useEffect)(()=>{u.current&&t.current&&t.current.focus(),u.current=!1},[]),{focusableProps:h({...o,tabIndex:e.excludeFromTabOrder&&!e.isDisabled?-1:void 0},a)}}var ev=function(){return(ev=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function em(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}var eh="right-scroll-bar-position",eb="width-before-scroll-bar",eg=(void 0===r&&(r={}),(void 0===o&&(o=function(e){return e}),i=[],a=!1,u={read:function(){if(a)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return i.length?i[i.length-1]:null},useMedium:function(e){var t=o(e,a);return i.push(t),function(){i=i.filter(function(e){return e!==t})}},assignSyncMedium:function(e){for(a=!0;i.length;){var t=i;i=[],t.forEach(e)}i={push:function(t){return e(t)},filter:function(){return i}}},assignMedium:function(e){a=!0;var t=[];if(i.length){var n=i;i=[],n.forEach(e),t=i}var r=function(){var n=t;t=[],n.forEach(e)},o=function(){return Promise.resolve().then(r)};o(),i={push:function(e){t.push(e),o()},filter:function(e){return t=t.filter(e),i}}}}).options=ev({async:!0,ssr:!1},r),u),ey=function(){},eE=s.forwardRef(function(e,t){var n,r,o,i=s.useRef(null),a=s.useState({onScrollCapture:ey,onWheelCapture:ey,onTouchMoveCapture:ey}),u=a[0],c=a[1],l=e.forwardProps,d=e.children,f=e.className,p=e.removeScrollBar,v=e.enabled,m=e.shards,h=e.sideCar,b=e.noIsolation,g=e.inert,y=e.allowPinchZoom,E=e.as,w=em(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),C=(n=[i,t],r=function(e){return n.forEach(function(t){var n;return"function"==typeof(n=t)?n(e):n&&(n.current=e),n})},(o=(0,s.useState)(function(){return{value:null,callback:r,facade:{get current(){return o.value},set current(value){var e=o.value;e!==value&&(o.value=value,o.callback(value,e))}}}})[0]).callback=r,o.facade),x=ev(ev({},w),u);return s.createElement(s.Fragment,null,v&&s.createElement(h,{sideCar:eg,removeScrollBar:p,shards:m,noIsolation:b,inert:g,setCallbacks:c,allowPinchZoom:!!y,lockRef:i}),l?s.cloneElement(s.Children.only(d),ev(ev({},x),{ref:C})):s.createElement(void 0===E?"div":E,ev({},x,{className:f,ref:C}),d))});eE.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},eE.classNames={fullWidth:eb,zeroRight:eh};var ew=function(e){var t=e.sideCar,n=em(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return s.createElement(r,ev({},n))};ew.isSideCarExport=!0;var eC=function(){var e=0,t=null;return{add:function(r){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=c||n.nc;return t&&e.setAttribute("nonce",t),e}())){var o,i;(o=t).styleSheet?o.styleSheet.cssText=r:o.appendChild(document.createTextNode(r)),i=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(i)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},ex=function(){var e=eC();return function(t,n){s.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},eL=function(){var e=ex();return function(t){return e(t.styles,t.dynamic),null}},ek={left:0,top:0,right:0,gap:0},eS=function(e){return parseInt(e||"",10)||0},eN=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[eS(n),eS(r),eS(o)]},eP=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return ek;var t=eN(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},eF=eL(),eM=function(e,t,n,r){var o=e.left,i=e.top,a=e.right,u=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(u,"px ").concat(r,";\n  }\n  body {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(i,"px;\n    padding-right: ").concat(a,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(u,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(u,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(eh," {\n    right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(eb," {\n    margin-right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(eh," .").concat(eh," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(eb," .").concat(eb," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(u,"px;\n  }\n")},eR=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r,i=s.useMemo(function(){return eP(o)},[o]);return s.createElement(eF,{styles:eM(i,!t,o,n?"":"!important")})},eT=!1;if("undefined"!=typeof window)try{var eD=Object.defineProperty({},"passive",{get:function(){return eT=!0,!0}});window.addEventListener("test",eD,eD),window.removeEventListener("test",eD,eD)}catch(eO){eT=!1}var eW=!!eT&&{passive:!1},eI=function(e){var t=window.getComputedStyle(e);return"hidden"!==t.overflowY&&!(t.overflowY===t.overflowX&&"visible"===t.overflowY)},eA=function(e){var t=window.getComputedStyle(e);return"hidden"!==t.overflowX&&!(t.overflowY===t.overflowX&&"visible"===t.overflowX)},eB=function(e,t){var n=t;do{if("undefined"!=typeof ShadowRoot&&n instanceof ShadowRoot&&(n=n.host),eK(e,n)){var r=eZ(e,n);if(r[1]>r[2])return!0}n=n.parentNode}while(n&&n!==document.body);return!1},eK=function(e,t){return"v"===e?eI(t):eA(t)},eZ=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},ej=function(e,t,n,r,o){var i,a=(i=window.getComputedStyle(t).direction,"h"===e&&"rtl"===i?-1:1),u=a*r,c=n.target,l=t.contains(c),s=!1,d=u>0,f=0,p=0;do{var v=eZ(e,c),m=v[0],h=v[1]-v[2]-a*m;(m||h)&&eK(e,c)&&(f+=h,p+=m),c=c.parentNode}while(!l&&c!==document.body||l&&(t.contains(c)||t===c));return d&&(o&&0===f||!o&&u>f)?s=!0:!d&&(o&&0===p||!o&&-u>p)&&(s=!0),s},eH=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},ez=function(e){return[e.deltaX,e.deltaY]},eY=function(e){return e&&"current"in e?e.current:e},eV=0,e_=[],eX=(eg.useMedium(function(e){var t=s.useRef([]),n=s.useRef([0,0]),r=s.useRef(),o=s.useState(eV++)[0],i=s.useState(function(){return eL()})[0],a=s.useRef(e);s.useEffect(function(){a.current=e},[e]),s.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(function(e,t,n){if(n||2==arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))})([e.lockRef.current],(e.shards||[]).map(eY),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var u=s.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!a.current.allowPinchZoom;var o,i=eH(e),u=n.current,c="deltaX"in e?e.deltaX:u[0]-i[0],l="deltaY"in e?e.deltaY:u[1]-i[1],s=e.target,d=Math.abs(c)>Math.abs(l)?"h":"v";if("touches"in e&&"h"===d&&"range"===s.type)return!1;var f=eB(d,s);if(!f)return!0;if(f?o=d:(o="v"===d?"h":"v",f=eB(d,s)),!f)return!1;if(!r.current&&"changedTouches"in e&&(c||l)&&(r.current=o),!o)return!0;var p=r.current||o;return ej(p,t,e,"h"===p?c:l,!0)},[]),c=s.useCallback(function(e){if(e_.length&&e_[e_.length-1]===i){var n="deltaY"in e?ez(e):eH(e),r=t.current.filter(function(t){var r;return t.name===e.type&&t.target===e.target&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.preventDefault();return}if(!r){var o=(a.current.shards||[]).map(eY).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?u(e,o[0]):!a.current.noIsolation)&&e.preventDefault()}}},[]),l=s.useCallback(function(e,n,r,o){var i={name:e,delta:n,target:r,should:o};t.current.push(i),setTimeout(function(){t.current=t.current.filter(function(e){return e!==i})},1)},[]),d=s.useCallback(function(e){n.current=eH(e),r.current=void 0},[]),f=s.useCallback(function(t){l(t.type,ez(t),t.target,u(t,e.lockRef.current))},[]),p=s.useCallback(function(t){l(t.type,eH(t),t.target,u(t,e.lockRef.current))},[]);s.useEffect(function(){return e_.push(i),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:p}),document.addEventListener("wheel",c,eW),document.addEventListener("touchmove",c,eW),document.addEventListener("touchstart",d,eW),function(){e_=e_.filter(function(e){return e!==i}),document.removeEventListener("wheel",c,eW),document.removeEventListener("touchmove",c,eW),document.removeEventListener("touchstart",d,eW)}},[]);var v=e.removeScrollBar,m=e.inert;return s.createElement(s.Fragment,null,m?s.createElement(i,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,v?s.createElement(eR,{gapMode:"margin"}):null)}),ew),eU=s.forwardRef(function(e,t){return s.createElement(eE,ev({},e,{ref:t,sideCar:eX}))});eU.classNames=eE.classNames;var e$=n(8316);function eq(){return(eq=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function eG(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var eJ={overlay:function(){return{position:"fixed",top:0,right:0,bottom:0,left:0,backgroundColor:"rgba(42, 38, 33, 0.5)"}},constraints:function(){return{position:"absolute",top:"10vh",right:"10vh",bottom:"10vh",left:"10vh"}},contentOuter:function(){return{position:"fixed",left:"50%",top:"50%",transform:"translate(-50%, -50%)",overflow:"auto",background:"#fcf7f6",borderWidth:1,borderStyle:"solid",borderColor:"rgba(0, 0, 0, 0.2)",borderRadius:24,boxShadow:"0 10px 60px rgba(0, 0, 0, 0.15)"}},contentInner:function(){return{overflow:"auto",maxHeight:"60vh",margin:"83px 152px 68px"}},closeButton:function(){return{width:"16px",height:"16px",border:0,outline:0,background:"none",padding:0,color:"#56595f",cursor:"pointer",position:"absolute",top:"38px",left:"38px",transition:"color 0.3s","&: hover":{color:"var(--accent)"}}}};function eQ(e){return function(t,n){var r=eJ[t](n),o=e[t];return o?o(r,n):r}}var e0=function(e){var t=e.children,n=e.id,r=void 0===n?"portaaal":n,o=e.elem,i=void 0===o?"modaaal":o,a=e.skipMotion,u=e.style,c=(0,s.useState)(!1)[1],l=(0,s.useRef)(null);(0,s.useLayoutEffect)(function(){return null===l.current&&(l.current=document.createElement(i),l.current.setAttribute("id",r)),document.body.appendChild(l.current),c(!0),function(){l.current&&(c(!1),document.body.removeChild(l.current))}},[i,r]);var p=void 0!==a&&a?s.createElement(s.Fragment,null,t):s.createElement(d.M,null,s.createElement(f.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},style:void 0===u?{}:u},t));return l.current?(0,e$.createPortal)(p,l.current):null},e1=function(){return s.createElement("svg",{viewBox:"0 0 13 13"},s.createElement("path",{fillRule:"evenodd",fill:"currentColor",d:"M7.935 6.176l4.093-4.06a1.234 1.234 0 000-1.756 1.26 1.26 0 00-1.772 0l-4.03 3.997L2.195.36a1.26 1.26 0 00-1.772 0 1.234 1.234 0 000 1.756l4.094 4.06-4.094 4.06a1.236 1.236 0 000 1.757 1.26 1.26 0 001.772 0l4.031-3.998 4.03 3.998c.245.242.565.363.886.363.321 0 .641-.121.886-.363a1.236 1.236 0 000-1.757l-4.093-4.06z"}))},e2=["type","focusRef","skipMotion","drag","dragConstraints","enabledScroll","motionProps","styles","onClick"],e3=function(e){var t=e.modals,n=void 0===t?{}:t,r=e.modal,o=e.openModal,i=e.closeModal,a=e.isDisabled,u=e.setDisabled,c=e.skipMotion,d=e.drag,f=e.dragConstraints,p=e.enabledScroll,v=e.motionProps,m=e.styles,h=e.portalStyle,b=e.className,g=(0,s.useRef)(null),y=r?"string"==typeof r?{type:r}:r:{type:null},E=y.type,w=y.focusRef,C=y.skipMotion,x=y.drag,L=y.dragConstraints,k=y.enabledScroll,S=y.motionProps,N=y.styles,P=y.onClick,F=eq({openModal:o,closeModal:i,isDisabled:a,setDisabled:u,focusRef:w},eG(y,e2)),M=eq({},void 0===m?eJ:m,N),R=eQ(M);function T(){P?P():i()}return r?(0,l.tZ)(e0,{skipMotion:c||C,style:h},(0,l.tZ)(U,{autoFocus:!0,restoreFocus:!0},(0,l.tZ)(eU,{enabled:!p||!k},(0,l.tZ)("div",{onClick:T,css:R("overlay",{})},(0,l.tZ)("div",{ref:g,css:R("constraints",{})})),(0,l.tZ)(e6,{skipMotion:c||C,drag:void 0!==x?x:void 0===d||d,dragConstraints:f||L,constraintsRef:g,styles:M,motionProps:v||S,className:b},(0,l.tZ)("button",{css:R("closeButton",{}),onClick:T},(0,l.tZ)(e1,null)),(0,s.isValidElement)(r)?r:(0,l.tZ)("div",{css:R("contentInner",{})},E&&void 0!==n[E]?(0,s.createElement)(n[E],F):null))))):null},e6=function(e){var t=e.skipMotion,n=e.children,r=e.dragConstraints,o=e.constraintsRef,i=e.drag,a=e.styles,u=e.className,c=e.motionProps,s=eQ(a);return t?(0,l.tZ)("div",{css:s("contentOuter",{}),className:u},n):(0,l.tZ)(d.M,null,(0,l.tZ)(f.E.div,Object.assign({css:s("contentOuter",{}),dragConstraints:void 0===r?!!o&&o:r,drag:i,className:u},void 0===c?{animate:{translateY:"-50%"},initial:{translateX:"-50%",translateY:"-43%"}}:c),n))},e7=["children","defaultModal","modals","styles","portalStyle","onCloseModal"],e4=s.createContext({modal:null,openModal:function(){},closeModal:function(){},setDisabled:function(){},isDisabled:!1}),e5=function(e){var t,n,r,o,i=e.children,a=e.defaultModal,u=e.modals,c=e.styles,l=e.portalStyle,d=e.onCloseModal,f=eG(e,e7),p=(0,s.useState)(!1),v=p[0],m=p[1],h=(void 0===(t=v)&&(t=!1),r=(n=(0,s.useState)(!1))[0],o=n[1],(0,s.useEffect)(function(){var e=function(e){27!==e.keyCode||t||(e.preventDefault(),o(!1))};return r&&document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}},[r,t]),[r,o]),b=h[0],g=h[1];function y(){v||(d&&"function"==typeof d&&d(b),g(null))}return(0,s.useEffect)(function(){a?g(a):g(null)},[g,a]),s.createElement(e4.Provider,{value:{modal:b,openModal:g,closeModal:y,setDisabled:m,isDisabled:v}},s.createElement(e3,Object.assign({modals:u,modal:b,closeModal:y,openModal:g,isDisabled:v,setDisabled:m,styles:void 0===c?eJ:c,portalStyle:l},f)),i)}},8241:function(e,t,n){n.d(t,{M:function(){return h}});var r=n(2784),o=n(8387),i=n(3617);function a(){let e=(0,r.useRef)(!1);return(0,i.L)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}var u=n(7967),c=n(3105);class l extends r.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let n=this.props.sizeRef.current;n.height=t.offsetHeight||0,n.width=t.offsetWidth||0,n.top=t.offsetTop,n.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function s({children:e,isPresent:t}){let n=(0,r.useId)(),o=(0,r.useRef)(null),i=(0,r.useRef)({width:0,height:0,top:0,left:0});return(0,r.useInsertionEffect)(()=>{let{width:e,height:r,top:a,left:u}=i.current;if(t||!o.current||!e||!r)return;o.current.dataset.motionPopId=n;let c=document.createElement("style");return document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${r}px !important;
            top: ${a}px !important;
            left: ${u}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[t]),r.createElement(l,{isPresent:t,childRef:o,sizeRef:i},r.cloneElement(e,{ref:o}))}let d=({children:e,initial:t,isPresent:n,onExitComplete:o,custom:i,presenceAffectsLayout:a,mode:l})=>{let d=(0,c.h)(f),p=(0,r.useId)(),v=(0,r.useMemo)(()=>({id:p,initial:t,isPresent:n,custom:i,onExitComplete:e=>{for(let t of(d.set(e,!0),d.values()))if(!t)return;o&&o()},register:e=>(d.set(e,!1),()=>d.delete(e))}),a?void 0:[n]);return(0,r.useMemo)(()=>{d.forEach((e,t)=>d.set(t,!1))},[n]),r.useEffect(()=>{n||d.size||!o||o()},[n]),"popLayout"===l&&(e=r.createElement(s,{isPresent:n},e)),r.createElement(u.O.Provider,{value:v},e)};function f(){return new Map}var p=n(3422),v=n(6073);let m=e=>e.key||"",h=({children:e,custom:t,initial:n=!0,onExitComplete:u,exitBeforeEnter:c,presenceAffectsLayout:l=!0,mode:s="sync"})=>{c&&(s="wait");let[f]=function(){let e=a(),[t,n]=(0,r.useState)(0),i=(0,r.useCallback)(()=>{e.current&&n(t+1)},[t]),u=(0,r.useCallback)(()=>o.Z_.postRender(i),[i]);return[u,t]}(),h=(0,r.useContext)(p.p).forceRender;h&&(f=h);let b=a(),g=function(e){let t=[];return r.Children.forEach(e,e=>{(0,r.isValidElement)(e)&&t.push(e)}),t}(e),y=g,E=new Set,w=(0,r.useRef)(y),C=(0,r.useRef)(new Map).current,x=(0,r.useRef)(!0);if((0,i.L)(()=>{x.current=!1,function(e,t){e.forEach(e=>{let n=m(e);t.set(n,e)})}(g,C),w.current=y}),(0,v.z)(()=>{x.current=!0,C.clear(),E.clear()}),x.current)return r.createElement(r.Fragment,null,y.map(e=>r.createElement(d,{key:m(e),isPresent:!0,initial:!!n&&void 0,presenceAffectsLayout:l,mode:s},e)));y=[...y];let L=w.current.map(m),k=g.map(m),S=L.length;for(let N=0;N<S;N++){let P=L[N];-1===k.indexOf(P)&&E.add(P)}return"wait"===s&&E.size&&(y=[]),E.forEach(e=>{if(-1!==k.indexOf(e))return;let n=C.get(e);if(!n)return;let o=L.indexOf(e),i=()=>{C.delete(e),E.delete(e);let t=w.current.findIndex(t=>t.key===e);if(w.current.splice(t,1),!E.size){if(w.current=g,!1===b.current)return;f(),u&&u()}};y.splice(o,0,r.createElement(d,{key:m(n),isPresent:!1,onExitComplete:i,custom:t,presenceAffectsLayout:l,mode:s},n))}),y=y.map(e=>{let t=e.key;return E.has(t)?e:r.createElement(d,{key:m(e),isPresent:!0,presenceAffectsLayout:l,mode:s},e)}),r.createElement(r.Fragment,null,E.size?y:y.map(e=>(0,r.cloneElement)(e)))}}}]);