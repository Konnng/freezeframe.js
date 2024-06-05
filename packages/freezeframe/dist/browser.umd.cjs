(function(l){typeof define=="function"&&define.amd?define(l):l()})(function(){"use strict";var bt=Object.defineProperty;var Zt=(l,f,g)=>f in l?bt(l,f,{enumerable:!0,configurable:!0,writable:!0,value:g}):l[f]=g;var B=(l,f,g)=>(Zt(l,typeof f!="symbol"?f+"":f,g),g),O=(l,f,g)=>{if(!f.has(l))throw TypeError("Cannot "+g)};var Y=(l,f,g)=>(O(l,f,"read from private field"),g?g.call(l):f.get(l)),x=(l,f,g)=>{if(f.has(l))throw TypeError("Cannot add the same private member more than once");f instanceof WeakSet?f.add(l):f.set(l,g)},F=(l,f,g,A)=>(O(l,f,"write to private field"),A?A.call(l,g):f.set(l,g),g);var P,W,L;var l=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function f(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var g={exports:{}},A={exports:{}},N;function D(){return N||(N=1,function(r){(function(t,e){r.exports?r.exports=e():t.EvEmitter=e()})(typeof window<"u"?window:l,function(){function t(){}var e=t.prototype;return e.on=function(n,i){if(!(!n||!i)){var s=this._events=this._events||{},a=s[n]=s[n]||[];return a.indexOf(i)==-1&&a.push(i),this}},e.once=function(n,i){if(!(!n||!i)){this.on(n,i);var s=this._onceEvents=this._onceEvents||{},a=s[n]=s[n]||{};return a[i]=!0,this}},e.off=function(n,i){var s=this._events&&this._events[n];if(!(!s||!s.length)){var a=s.indexOf(i);return a!=-1&&s.splice(a,1),this}},e.emitEvent=function(n,i){var s=this._events&&this._events[n];if(!(!s||!s.length)){s=s.slice(0),i=i||[];for(var a=this._onceEvents&&this._onceEvents[n],d=0;d<s.length;d++){var p=s[d],u=a&&a[p];u&&(this.off(n,p),delete a[p]),p.apply(this,i)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t})}(A)),A.exports}/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */(function(r){(function(t,e){r.exports?r.exports=e(t,D()):t.imagesLoaded=e(t,t.EvEmitter)})(typeof window<"u"?window:l,function(e,n){var i=e.jQuery,s=e.console;function a(o,c){for(var m in c)o[m]=c[m];return o}var d=Array.prototype.slice;function p(o){if(Array.isArray(o))return o;var c=typeof o=="object"&&typeof o.length=="number";return c?d.call(o):[o]}function u(o,c,m){if(!(this instanceof u))return new u(o,c,m);var h=o;if(typeof o=="string"&&(h=document.querySelectorAll(o)),!h){s.error("Bad element for imagesLoaded "+(h||o));return}this.elements=p(h),this.options=a({},this.options),typeof c=="function"?m=c:a(this.options,c),m&&this.on("always",m),this.getImages(),i&&(this.jqDeferred=new i.Deferred),setTimeout(this.check.bind(this))}u.prototype=Object.create(n.prototype),u.prototype.options={},u.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},u.prototype.addElementImages=function(o){o.nodeName=="IMG"&&this.addImage(o),this.options.background===!0&&this.addElementBackgroundImages(o);var c=o.nodeType;if(!(!c||!j[c])){for(var m=o.querySelectorAll("img"),h=0;h<m.length;h++){var T=m[h];this.addImage(T)}if(typeof this.options.background=="string"){var U=o.querySelectorAll(this.options.background);for(h=0;h<U.length;h++){var yt=U[h];this.addElementBackgroundImages(yt)}}}};var j={1:!0,9:!0,11:!0};u.prototype.addElementBackgroundImages=function(o){var c=getComputedStyle(o);if(c)for(var m=/url\((['"])?(.*?)\1\)/gi,h=m.exec(c.backgroundImage);h!==null;){var T=h&&h[2];T&&this.addBackground(T,o),h=m.exec(c.backgroundImage)}},u.prototype.addImage=function(o){var c=new v(o);this.images.push(c)},u.prototype.addBackground=function(o,c){var m=new G(o,c);this.images.push(m)},u.prototype.check=function(){var o=this;if(this.progressedCount=0,this.hasAnyBroken=!1,!this.images.length){this.complete();return}function c(m,h,T){setTimeout(function(){o.progress(m,h,T)})}this.images.forEach(function(m){m.once("progress",c),m.check()})},u.prototype.progress=function(o,c,m){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!o.isLoaded,this.emitEvent("progress",[this,o,c]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,o),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&s&&s.log("progress: "+m,o,c)},u.prototype.complete=function(){var o=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(o,[this]),this.emitEvent("always",[this]),this.jqDeferred){var c=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[c](this)}};function v(o){this.img=o}v.prototype=Object.create(n.prototype),v.prototype.check=function(){var o=this.getIsImageComplete();if(o){this.confirm(this.img.naturalWidth!==0,"naturalWidth");return}this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src},v.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},v.prototype.confirm=function(o,c){this.isLoaded=o,this.emitEvent("progress",[this,this.img,c])},v.prototype.handleEvent=function(o){var c="on"+o.type;this[c]&&this[c](o)},v.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},v.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},v.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)};function G(o,c){this.url=o,this.element=c,this.img=new Image}return G.prototype=Object.create(v.prototype),G.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var o=this.getIsImageComplete();o&&(this.confirm(this.img.naturalWidth!==0,"naturalWidth"),this.unbindEvents())},G.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},G.prototype.confirm=function(o,c){this.isLoaded=o,this.emitEvent("progress",[this,this.element,c])},u.makeJQueryPlugin=function(o){o=o||e.jQuery,o&&(i=o,i.fn.imagesLoaded=function(c,m){var h=new u(this,c,m);return h.jqDeferred.promise(i(this))})},u.makeJQueryPlugin(),u})})(g);var _=g.exports;const Q=f(_);var Z=(r=>(r.START="start",r.STOP="stop",r.TOGGLE="toggle",r))(Z||{});const K=(...r)=>(...t)=>r.reduceRight((e,n)=>(...i)=>e(n(...i,...t)))(),C=r=>`✨Freezeframe: ${r}✨`,M=(r,...t)=>{console.error(C(r),...t)},q=(r,...t)=>{console.warn(C(r),...t)},$=()=>"ontouchstart"in window||"onmsgesturechange"in window,tt=r=>r.split(".").pop().toLowerCase().substring(0,3),et=r=>tt(r)==="gif",nt=r=>typeof r=="string"?document.querySelectorAll(r):r,it=(r,t,e)=>{const n=r instanceof Element?[r]:r;return Array.from(n).reduce((i,s)=>{if(s instanceof HTMLImageElement)i.push(s),et(s.src)||e.warnings&&q("Image does not appear to be a gif",s);else{const a=s.querySelectorAll("img");a.length?i=i.concat(Array.from(a)):M("Invalid element",s)}return i},[])},rt=r=>[...new Set(r)],V=r=>{const t=window.document.createElement("div");t.innerHTML=r;const e=t.childNodes;return e.length>1?e:e[0]},st=(r,t)=>{r.parentNode.insertBefore(t,r),t.appendChild(r)};var ot=function(){function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}}(),at=ct(["",""],["",""]);function ct(r,t){return Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(t)}}))}function lt(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}var y=function(){function r(){for(var t=this,e=arguments.length,n=Array(e),i=0;i<e;i++)n[i]=arguments[i];return lt(this,r),this.tag=function(s){for(var a=arguments.length,d=Array(a>1?a-1:0),p=1;p<a;p++)d[p-1]=arguments[p];return typeof s=="function"?t.interimTag.bind(t,s):typeof s=="string"?t.transformEndResult(s):(s=s.map(t.transformString.bind(t)),t.transformEndResult(s.reduce(t.processSubstitutions.bind(t,d))))},n.length>0&&Array.isArray(n[0])&&(n=n[0]),this.transformers=n.map(function(s){return typeof s=="function"?s():s}),this.tag}return ot(r,[{key:"interimTag",value:function(e,n){for(var i=arguments.length,s=Array(i>2?i-2:0),a=2;a<i;a++)s[a-2]=arguments[a];return this.tag(at,e.apply(void 0,[n].concat(s)))}},{key:"processSubstitutions",value:function(e,n,i){var s=this.transformSubstitution(e.shift(),n);return"".concat(n,s,i)}},{key:"transformString",value:function(e){var n=function(s,a){return a.onString?a.onString(s):s};return this.transformers.reduce(n,e)}},{key:"transformSubstitution",value:function(e,n){var i=function(a,d){return d.onSubstitution?d.onSubstitution(a,n):a};return this.transformers.reduce(i,e)}},{key:"transformEndResult",value:function(e){var n=function(s,a){return a.onEndResult?a.onEndResult(s):s};return this.transformers.reduce(n,e)}}]),r}(),b=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return{onEndResult:function(n){if(t==="")return n.trim();if(t=t.toLowerCase(),t==="start"||t==="left")return n.replace(/^\s*/,"");if(t==="end"||t==="right")return n.replace(/\s*$/,"");throw new Error("Side not supported: "+t)}}};function ut(r){if(Array.isArray(r)){for(var t=0,e=Array(r.length);t<r.length;t++)e[t]=r[t];return e}else return Array.from(r)}var E=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"initial";return{onEndResult:function(n){if(t==="initial"){var i=n.match(/^[^\S\n]*(?=\S)/gm),s=i&&Math.min.apply(Math,ut(i.map(function(d){return d.length})));if(s){var a=new RegExp("^.{"+s+"}","gm");return n.replace(a,"")}return n}if(t==="all")return n.replace(/^[^\S\n]+/gm,"");throw new Error("Unknown type: "+t)}}},w=function(t,e){return{onEndResult:function(i){if(t==null||e==null)throw new Error("replaceResultTransformer requires at least 2 arguments.");return i.replace(t,e)}}},R=function(t,e){return{onSubstitution:function(i,s){if(t==null||e==null)throw new Error("replaceSubstitutionTransformer requires at least 2 arguments.");return i==null?i:i.toString().replace(t,e)}}},mt={separator:"",conjunction:"",serial:!1},S=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:mt;return{onSubstitution:function(n,i){if(Array.isArray(n)){var s=n.length,a=t.separator,d=t.conjunction,p=t.serial,u=i.match(/(\n?[^\S\n]+)$/);if(u?n=n.join(a+u[1]):n=n.join(a+" "),d&&s>1){var j=n.lastIndexOf(a);n=n.slice(0,j)+(p?a:"")+" "+d+n.slice(j+1)}}return n}}},H=function(t){return{onSubstitution:function(n,i){return typeof n=="string"&&n.includes(t)&&(n=n.split(t)),n}}},X=function(t){return t!=null&&!Number.isNaN(t)&&typeof t!="boolean"},ft=function(){return{onSubstitution:function(e){return Array.isArray(e)?e.filter(X):X(e)?e:""}}};new y(S({separator:","}),E,b),new y(S({separator:",",conjunction:"and"}),E,b),new y(S({separator:",",conjunction:"or"}),E,b);var J=new y(H(`
`),ft,S,E,b);new y(H(`
`),S,E,b,R(/&/g,"&amp;"),R(/</g,"&lt;"),R(/>/g,"&gt;"),R(/"/g,"&quot;"),R(/'/g,"&#x27;"),R(/`/g,"&#x60;")),new y(w(/(?:\n(?:\s*))+/g," "),b),new y(w(/(?:\n\s*)/g,""),b),new y(S({separator:","}),w(/(?:\s+)/g," "),b),new y(S({separator:",",conjunction:"or"}),w(/(?:\s+)/g," "),b),new y(S({separator:",",conjunction:"and"}),w(/(?:\s+)/g," "),b),new y(S,E,b),new y(S,w(/(?:\s+)/g," "),b),new y(E,b),new y(E("all"),b);const I={SELECTOR:".freezeframe",CONTAINER:"ff-container",LOADING_ICON:"ff-loading-icon",IMAGE:"ff-image",CANVAS:"ff-canvas",READY:"ff-ready",INACTIVE:"ff-inactive",ACTIVE:"ff-active",CANVAS_READY:"ff-canvas-ready",RESPONSIVE:"ff-responsive",OVERLAY:"ff-overlay"},k={selector:I.SELECTOR,responsive:!0,trigger:"hover",overlay:!1,warnings:!0},z="ff-styles",ht='.ff-container{display:inline-block;position:relative}.ff-container .ff-image{z-index:0;vertical-align:top;opacity:0}.ff-container .ff-canvas{display:inline-block;position:absolute;top:0;left:0;pointer-events:none;z-index:1;vertical-align:top;opacity:0}.ff-container .ff-canvas.ff-canvas-ready{-webkit-transition:opacity .3s;-moz-transition:opacity .3s;transition:opacity .3s;opacity:1}.ff-container.ff-active .ff-image{opacity:1}.ff-container.ff-active .ff-canvas.ff-canvas-ready{-webkit-transition:none;-moz-transition:none;transition:none;opacity:0}.ff-container.ff-active .ff-overlay{display:none}.ff-container.ff-inactive .ff-canvas.ff-canvas-ready{-webkit-transition:opacity .3s;-moz-transition:opacity .3s;transition:opacity .3s;opacity:1}.ff-container.ff-inactive .ff-image{-webkit-transition:opacity .3s;-moz-transition:opacity .3s;transition:opacity .3s;-webkit-transition-delay:.17s;-moz-transition-delay:.17s;transition-delay:.17s;opacity:0}.ff-container.ff-responsive,.ff-container.ff-responsive .ff-image,.ff-container.ff-responsive .ff-canvas{width:100%}.ff-container.ff-loading-icon:before{content:"";position:absolute;background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHdpZHRoPSc1MHB4JyBoZWlnaHQ9JzUwcHgnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIiBjbGFzcz0idWlsLXNwaW4iPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJub25lIiBjbGFzcz0iYmsiPjwvcmVjdD48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MCA1MCkiPjxnIHRyYW5zZm9ybT0icm90YXRlKDApIHRyYW5zbGF0ZSgzNCAwKSI+PGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjgiIGZpbGw9IiNmZmZmZmYiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwLjEiIGJlZ2luPSIwcyIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiBmcm9tPSIxLjUiIHRvPSIxIiBiZWdpbj0iMHMiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+PC9jaXJjbGU+PC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDQ1KSB0cmFuc2xhdGUoMzQgMCkiPjxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSI4IiBmaWxsPSIjZmZmZmZmIj48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBmcm9tPSIxIiB0bz0iMC4xIiBiZWdpbj0iMC4xMnMiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJzY2FsZSIgZnJvbT0iMS41IiB0bz0iMSIgYmVnaW49IjAuMTJzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPjwvY2lyY2xlPjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSg5MCkgdHJhbnNsYXRlKDM0IDApIj48Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iOCIgZmlsbD0iI2ZmZmZmZiI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89IjAuMSIgYmVnaW49IjAuMjVzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGZyb209IjEuNSIgdG89IjEiIGJlZ2luPSIwLjI1cyIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT48L2NpcmNsZT48L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMTM1KSB0cmFuc2xhdGUoMzQgMCkiPjxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSI4IiBmaWxsPSIjZmZmZmZmIj48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBmcm9tPSIxIiB0bz0iMC4xIiBiZWdpbj0iMC4zN3MiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJzY2FsZSIgZnJvbT0iMS41IiB0bz0iMSIgYmVnaW49IjAuMzdzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPjwvY2lyY2xlPjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSgxODApIHRyYW5zbGF0ZSgzNCAwKSI+PGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjgiIGZpbGw9IiNmZmZmZmYiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwLjEiIGJlZ2luPSIwLjVzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGZyb209IjEuNSIgdG89IjEiIGJlZ2luPSIwLjVzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPjwvY2lyY2xlPjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSgyMjUpIHRyYW5zbGF0ZSgzNCAwKSI+PGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjgiIGZpbGw9IiNmZmZmZmYiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwLjEiIGJlZ2luPSIwLjYycyIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiBmcm9tPSIxLjUiIHRvPSIxIiBiZWdpbj0iMC42MnMiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+PC9jaXJjbGU+PC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDI3MCkgdHJhbnNsYXRlKDM0IDApIj48Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iOCIgZmlsbD0iI2ZmZmZmZiI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89IjAuMSIgYmVnaW49IjAuNzVzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGZyb209IjEuNSIgdG89IjEiIGJlZ2luPSIwLjc1cyIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT48L2NpcmNsZT48L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMzE1KSB0cmFuc2xhdGUoMzQgMCkiPjxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSI4IiBmaWxsPSIjZmZmZmZmIj48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBmcm9tPSIxIiB0bz0iMC4xIiBiZWdpbj0iMC44N3MiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJzY2FsZSIgZnJvbT0iMS41IiB0bz0iMSIgYmVnaW49IjAuODdzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPjwvY2lyY2xlPjwvZz48L2c+PC9zdmc+);background-position:center center;background-repeat:no-repeat;height:46px;width:46px;z-index:3;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.ff-container .ff-overlay{background-image:url(data:image/png;base64,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);background-repeat:no-repeat;max-width:94px;max-height:94px;position:absolute;left:0%;right:0%;top:0%;bottom:0%;margin:auto;background-size:contain;background-position:center;pointer-events:none;z-index:100}',dt=()=>J(`
    <style id="${z}">
      ${ht.toString()}
    </style>
  `),gt=()=>J`
    <div class="${I.CONTAINER} ${I.LOADING_ICON}">
    </div>
  `,It=()=>J`
    <canvas class="${I.CANVAS}" width="0" height="0">
    </canvas>
  `,pt=()=>J`
    <div class="${I.OVERLAY}">
    </div>
  `;class vt{constructor(t=I.SELECTOR,e){B(this,"options");B(this,"items",new Map);B(this,"$images",[]);x(this,P,void 0);x(this,W,void 0);B(this,"_eventListeners",{...Object.values(Z).reduce((t,e)=>(t[e]=[],t),{})});x(this,L,[]);typeof t=="string"||t instanceof Element||t instanceof HTMLCollection||t instanceof NodeList?(this.options={...k,...e},F(this,P,t)):typeof t=="object"&&!e?(this.options={...k,...t},F(this,P,this.options.selector)):M("Invalid Freezeframe.js configuration:",...[t,e].filter(n=>n!==void 0)),this._init(Y(this,P))}get _stylesInjected(){return!!document.querySelector(`style#${z}`)}_init(t){this._injectStylesheet(),F(this,W,$()),this._capture(t),this._load(this.$images)}_capture(t){this.$images=K(nt,it,rt)(t,this.options)}_load(t){Q(t).on("progress",(e,{img:n})=>{this._setup(n)})}async _setup(t){const e=this._wrap(t);this.items.set(t,e),await this._process(e),this._attach(e)}_wrap(t){const e=V(gt()),n=V(It());return this.options.responsive&&e.classList.add(I.RESPONSIVE),this.options.overlay&&e.appendChild(V(pt())),t.classList.add(I.IMAGE),e.appendChild(n),st(t,e),{$container:e,$canvas:n,$image:t}}_process(t){return new Promise(e=>{const{$canvas:n,$image:i,$container:s}=t,a=devicePixelRatio,{width:d,height:p}=i.getClientRects()[0],u=Math.ceil(d*a),j=Math.ceil(p*a),v=new Image,G=n.getContext("2d");G.clearRect(0,0,u,j),v.onerror=function(){this.src!==i.src&&(this.src=i.src)},v.onload=()=>{G.drawImage(v,0,0,u,j),n.classList.add(I.CANVAS_READY)},v.setAttribute("width",d.toString()),v.setAttribute("height",p.toString()),v.src=i.dataset.poster||i.src,n.style.setProperty("width",`${d}px`),n.style.setProperty("height",`${p}px`),n.setAttribute("width",u.toString()),n.setAttribute("height",j.toString()),n.addEventListener("transitionend",()=>{this._ready(s),e(t)},{once:!0})})}_ready(t){t.classList.add(I.READY),t.classList.add(I.INACTIVE),t.classList.remove(I.LOADING_ICON)}_attach(t){const{$image:e}=t;if(!Y(this,W)&&this.options.trigger==="hover"){const n=()=>{this._toggleOn(t),this._emit(Z.START,t,!0),this._emit(Z.TOGGLE,t,!0)},i=()=>{this._toggleOff(t),this._emit(Z.START,t,!1),this._emit(Z.TOGGLE,t,!1)};this._addEventListener(e,"mouseleave",i),this._addEventListener(e,"mouseenter",n)}if(Y(this,W)||this.options.trigger==="click"){const n=()=>{this._toggle(t)};this._addEventListener(e,"click",n)}}_addEventListener(t,e,n){Y(this,L).push({$image:t,event:e,listener:n}),t.addEventListener(e,n)}_removeEventListener(t,e,n){t.removeEventListener(e,n)}_injectStylesheet(){this._stylesInjected||document.head.appendChild(V(dt()))}_emit(t,e,n){this._eventListeners[t].forEach(i=>{i(Array.isArray(e)&&e.length===1?e[0]:e,n)})}_toggleOn(t){const{$container:e,$image:n}=t;e.classList.contains(I.READY)&&(n.setAttribute("src",n.src),e.classList.remove(I.INACTIVE),e.classList.add(I.ACTIVE))}_toggleOff(t){const{$container:e}=t;e.classList.contains(I.READY)&&(e.classList.add(I.INACTIVE),e.classList.remove(I.ACTIVE))}_toggle(t){const{$container:e}=t,n=e.classList.contains(I.ACTIVE);return n?this._toggleOff(t):this._toggleOn(t),!n}start(){return this.items.forEach(t=>{this._toggleOn(t)}),this._emit(Z.START,[...this.items.values()],!0),this._emit(Z.TOGGLE,[...this.items.values()],!0),this}stop(){return this.items.forEach(t=>{this._toggleOff(t)}),this._emit(Z.STOP,[...this.items.values()],!1),this._emit(Z.TOGGLE,[...this.items.values()],!1),this}get(t){return[...this.items.values()][t]}toggle(){return this.items.forEach(t=>{const e=this._toggle(t);e?this._emit(Z.START,[...this.items.values()],!1):this._emit(Z.STOP,[...this.items.values()],!1),this._emit(Z.TOGGLE,[...this.items.values()],e)}),this}on(t,e){return this._eventListeners[t].push(e),this}reset(t){if(t){const e=this.items.get(t);this._process(e)}else this.items.forEach(e=>this._process(e))}destroy(){Y(this,L).forEach(({$image:t,event:e,listener:n})=>{this._removeEventListener(t,e,n)})}}P=new WeakMap,W=new WeakMap,L=new WeakMap,window.Freezeframe=vt});
