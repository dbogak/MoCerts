!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("lodash")):"function"==typeof define&&define.amd?define(["lodash"],t):"object"==typeof exports?exports.tweenEngine=t(require("lodash")):e.tweenEngine=t(e.lodash)}(this,(function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=124)}({0:function(t,n){t.exports=e},124:function(e,t,n){"use strict";var r=n(9),o=n(125);e.exports={create:function(e,t){var n=o.create(e,t);return{factory:r.create(),engine:n}}}},125:function(e,t,n){"use strict";var r=n(0),o=n(5);e.exports={create:function(e,t){var n=["ease","duration","delay","to","from","repeat","yoyo","repeatDelay","easeParams","stagger","transformOrigin","clearProps","paused","overwrite","autoClear","parseTransform","fireUpdateCommand","data","elementClearParams","perspective","transformPerspective","immediateRender","callbacks","force3D","transformStyle"],a=["delay","repeat","yoyo","repeatDelay","stagger","paused","align","tweens","autoClear","data","elementClearParams","callbacks"];function i(e,t,o){return r.isArray(e)||(e=e instanceof window.NodeList?r.toArray(e):[e]),f(t=v(t=t||{},[o,n])),(t.from&&t.to?u:t.from?l:c)(e,t)}function s(e,n){return f(e=v(e||{},[n,a])),new t(e)}function l(t,n){var o,a,i,l=n.duration,c=n.stagger,u=n.delay,f=r.defaults(n,n.from);return f.data=f.data||{},delete f.from,delete f.duration,delete f.stagger,void 0!==c?(i=f.data,f.data={},delete f.delay,o=e.staggerFrom(t,l,f,c),a=s({data:i,delay:u}).add(o)):o=e.from(t,l,f),a||o}function c(t,n){var o,a,i,l=n.duration,c=n.stagger,u=n.delay,f=r.defaults(n,n.to||{});return f.data=f.data||{},delete f.to,delete f.duration,delete f.stagger,void 0!==c?(i=f.data,f.data={},delete f.delay,o=e.staggerTo(t,l,f,c),a=s({data:i,delay:u}).add(o)):o=e.to(t,l,f),a||o}function u(t,n){var o,a,i,l,c=n.duration,u=n.stagger,f=n.delay,d=n.from;return(o=n.to).data=o.data||{},delete n.to,delete n.from,delete n.duration,delete n.stagger,delete o.duration,delete o.stagger,o=r.merge(o,n),void 0!==u?(l=o.data,o.data={},delete o.delay,a=e.staggerFromTo(t,c,d,o,u),i=s({data:l,delay:f}).add(a)):a=e.fromTo(t,c,d,o),i||a}function f(e){return e.data=e.data||{},e.callbacks&&(e.data.callbacks={},e.callbacks.onComplete&&(e.data.callbacks.onComplete=e.callbacks.onComplete,e.onComplete=d,e.onCompleteParams=["{self}"]),e.callbacks.onReverseComplete&&(e.data.callbacks.onReverseComplete=e.callbacks.onReverseComplete,e.onReverseComplete=p,e.onReverseCompleteParams=["{self}"]),e.callbacks.onStart&&(e.data.callbacks.onStart=e.callbacks.onStart,e.onStart=g,e.onStartParams=["{self}"]),e.callbacks.onUpdate&&(e.data.callbacks.onUpdate=e.callbacks.onUpdate,e.onUpdate=m,e.onUpdateParams=["{self}"]),e.callbacks.onInterrupt&&(e.data.callbacks.onInterrupt=e.callbacks.onInterrupt)),delete e.callbacks,e}function d(e){y(e,"onComplete")}function p(e){y(e,"onReverseComplete")}function g(e){y(e,"onStart")}function m(e){y(e,"onUpdate")}function y(e,t){r.isFunction(r.get(e,"data.callbacks."+t))&&e.data.callbacks[t](e)}function v(e,t){var n=r.union.apply(r,t);return r.forEach(e,(function(e,o,a){"to"===o||"from"===o?v(a[o],t):r.includes(n,o)||delete a[o]})),e}return{timeline:s,tween:i,set:function(e,t){return(t=t?r.cloneDeep(t):{}).duration=0,t.delay=0,t.to=t.to||{},i(e,t,r.keys(t))},kill:function(e,t){e.paused()||(e.pause(),function(e){y(e,"onInterrupt")}(e)),r.isNumber(t)&&e.progress(t,!0),e.kill(),e.clear&&e.clear()},addTickerEvent:function(t){e.ticker.addEventListener("tick",t)},removeTickerEvent:function(t){e.ticker.removeEventListener("tick",t)},isTweening:function(t){return e.isTweening(t)},getTweensOf:function(t,n){return e.getTweensOf(t,n)},getElementRect:o.getElementRect,getContentRect:o.getContentRect,getBoundingRect:o.getBoundingRect,getBoundingContentRect:o.getBoundingContentRect,delayedCall:function(t,n,r,o){return e.delayedCall(t,n,r,o)},animateTimeScale:function(t,n,o,a,i,s){var l={timeScale:o},c={timeScale:a,easing:i||"Linear.easeNone"};return s&&r.assign(c,s),0===o&&t.paused()&&t.play(),e.fromTo(t,n,l,c)},adjustLagSmoothing:function(t,n){"function"==typeof e.lagSmoothing&&e.lagSmoothing(t,n)},useRAF:function(t){e.ticker&&"function"==typeof e.ticker.useRAF&&e.ticker.useRAF(t)}}}}},5:function(e,t,n){"use strict";function r(e){var t=window.getComputedStyle(e);return{top:parseFloat(t.getPropertyValue("border-top-width")),left:parseFloat(t.getPropertyValue("border-left-width"))}}var o=function(e,t){return Array.from(e.children).filter((function(e){return e.tagName.toLowerCase()===t}))};function a(e,t){for(var n=e.offsetTop,o=e.offsetLeft,a=e.offsetWidth,i=e.offsetHeight;e.offsetParent;){var s=r(e=e.offsetParent);if(n+=s.top,o+=s.left,t&&e===t)break;n+=e.offsetTop,o+=e.offsetLeft}return{top:n,left:o,width:a,height:i,bottom:n+i,right:o+a}}function i(e,t,n,r){return r=r||a(e,t),(n=n||o(e,"div")).forEach((function(e){var n=a(e,t);n.width>0&&n.height>0&&(n.left<r.left&&(r.left=n.left),n.right>r.right&&(r.right=n.right),n.top<r.top&&(r.top=n.top),n.bottom>r.bottom&&(r.bottom=n.bottom));var s=o(e,"div");s.length&&function(e){return"visible"===window.getComputedStyle(e).getPropertyValue("overflow")}(e)&&i(e,t,s,r)})),r.width=r.right-r.left,r.height=r.bottom-r.top,r}e.exports={getElementRect:a,getBoundingRect:function(e,t,n){n=n||"undefined"!=typeof window&&window;var r=a(e,t);if(n){var o=n.scrollY||n.scrollTop||0,i=n.scrollX||n.scrollLeft||0;r.top-=o,r.bottom-=o,r.left-=i,r.right-=i}return r},getContentRect:i,getBoundingContentRect:function(e,t,n){n=n||"undefined"!=typeof window&&window;var r=i(e,t);if(n){var o=n.pageYOffset||n.scrollTop||0,a=n.pageXOffset||n.scrollLeft||0;r.top-=o,r.bottom-=o,r.left-=a,r.right-=a}return r}}},9:function(e,t,n){"use strict";var r=function(){var e;return(e=console).error.apply(e,arguments)};e.exports={create:function(){var e={animations:{},transitions:{},properties:{}};function t(t){this.timeline=e.animations.BaseSequence(t?Object.assign({},t):{})}return t.prototype.add=function(e,t,n){return t=void 0===t?"+=0":t,n=n||"normal",this.timeline.add(e,t,n),this},t.prototype.get=function(){return this.timeline},t.prototype.event=function(e,t){for(var n,r=arguments.length,o=new Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return(n=this.timeline).eventCallback.apply(n,[e,t].concat(o)),this},t.prototype.play=function(){return this.timeline.play(),this},t.prototype.reverse=function(){return this.timeline.reverse(),this},t.prototype.pause=function(){return this.timeline.pause(),this},t.prototype.seek=function(e){return this.timeline.totalProgress(e),this},t.prototype.clear=function(){return this.timeline.clear(),this},{animate:function(t,n,o,a,i){var s=e.animations[t];return s?s(n,o,a,i?Object.assign({},i):{}):(r("Warning:",t,"is not a registered animation. skipping."),null)},transition:function(t,n,o,a,i,s){var l=e.transitions[t];return l?l(n,o,a,i,s?Object.assign({},s):{}):(r("Warning:",t,"is not a registered transition. skipping."),null)},sequence:function(e){return new t(e)},registerAnimation:function(t,n,o){e.transitions[t]&&r("Warning: there is already a transition with the name",t),e.animations[t]=n,e.properties[t]=o||{}},registerTransition:function(t,n,o){e.animations[t]&&r("Warning: there is already an animation with the name",t),e.transitions[t]=n,e.properties[t]=o},getProperties:function(t){return e.properties[t]||{}},getAllProperties:function(){return e.properties},getAnimationsDefs:function(){return e.animations},getTransitionsDefs:function(){return e.transitions},resetRegistrations:function(){e.animations={},e.transitions={},e.properties={}}}}}}})}));
//# sourceMappingURL=tweenEngine.js.map