!function(){"use strict";var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};(function n(e,t){return e(t={exports:{}},t.exports),t.exports})(function(x){!function(e,a){var n,c,t=e.html5||{},o=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,i=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,r="_html5shiv",l=0,s={};function h(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function m(){var e=p.elements;return"string"==typeof e?e.split(" "):e}function y(e){var t=s[e[r]];return t||(t={},l++,e[r]=l,s[l]=t),t}function u(e,t,n){return t||(t=a),c?t.createElement(e):(n||(n=y(t)),!(r=n.cache[e]?n.cache[e].cloneNode():i.test(e)?(n.cache[e]=n.createElem(e)).cloneNode():n.createElem(e)).canHaveChildren||o.test(e)||r.tagUrn?r:n.frag.appendChild(r));var r}function f(e){e||(e=a);var t=y(e);return!p.shivCSS||n||t.hasCSS||(t.hasCSS=!!h(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),c||function r(t,n){n.cache||(n.cache={},n.createElem=t.createElement,n.createFrag=t.createDocumentFragment,n.frag=n.createFrag()),t.createElement=function(e){return p.shivMethods?u(e,t,n):n.createElem(e)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-:]+/g,function(e){return n.createElem(e),n.frag.createElement(e),'c("'+e+'")'})+");return n}")(p,n.frag)}(e,t),e}!function(){try{var e=a.createElement("a");e.innerHTML="<xyz></xyz>",n="hidden"in e,c=1==e.childNodes.length||function(){a.createElement("a");var e=a.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(t){c=n=!0}}();var p={elements:t.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:"3.7.3",shivCSS:!1!==t.shivCSS,supportsUnknownElements:c,shivMethods:!1!==t.shivMethods,type:"default",shivDocument:f,createElement:u,createDocumentFragment:function S(e,t){if(e||(e=a),c)return e.createDocumentFragment();for(var n=(t=t||y(e)).frag.cloneNode(),r=0,o=m(),i=o.length;r<i;r++)n.createElement(o[r]);return n},addElements:function T(e,t){var n=p.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),p.elements=n+" "+e,f(t)}};e.html5=p,f(a);var d,v=/^$|\b(?:all|print)\b/,g="html5shiv",E=!(c||(d=a.documentElement,"undefined"==typeof a.namespaces||"undefined"==typeof a.parentWindow||"undefined"==typeof d.applyElement||"undefined"==typeof d.removeNode||"undefined"==typeof e.attachEvent));function b(e){for(var t,n=e.attributes,r=n.length,o=e.ownerDocument.createElement(g+":"+e.nodeName);r--;)(t=n[r]).specified&&o.setAttribute(t.nodeName,t.nodeValue);return o.style.cssText=e.style.cssText,o}function w(u){var f,p,e=y(u),t=u.namespaces,n=u.parentWindow;if(!E||u.printShived)return u;function d(){clearTimeout(e._removeSheetTimer),f&&f.removeNode(!0),f=null}return"undefined"==typeof t[g]&&t.add(g),n.attachEvent("onbeforeprint",function(){d();for(var e,t,n,r=u.styleSheets,o=[],i=r.length,a=Array(i);i--;)a[i]=r[i];for(;n=a.pop();)if(!n.disabled&&v.test(n.media)){try{t=(e=n.imports).length}catch(c){t=0}for(i=0;i<t;i++)a.push(e[i]);try{o.push(n.cssText)}catch(c){}}o=function l(e){for(var t,n=e.split("{"),r=n.length,o=RegExp("(^|[\\s,>+~])("+m().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),i="$1"+g+"\\:$2";r--;)(t=n[r]=n[r].split("}"))[t.length-1]=t[t.length-1].replace(o,i),n[r]=t.join("}");return n.join("{")}(o.reverse().join("")),p=function s(e){for(var t,n=e.getElementsByTagName("*"),r=n.length,o=RegExp("^(?:"+m().join("|")+")$","i"),i=[];r--;)t=n[r],o.test(t.nodeName)&&i.push(t.applyElement(b(t)));return i}(u),f=h(u,o)}),n.attachEvent("onafterprint",function(){!function n(e){for(var t=e.length;t--;)e[t].removeNode()}(p),clearTimeout(e._removeSheetTimer),e._removeSheetTimer=setTimeout(d,500)}),u.printShived=!0,u}p.type+=" print",(p.shivPrint=w)(a),x.exports&&(x.exports=p)}("undefined"!=typeof window?window:e,document)});Array.prototype.forEach||(Array.prototype.forEach=function(e){if(null==this||"function"!=typeof e)throw new TypeError;for(var t=Object(this),n=t.length>>>0,r=2<=arguments.length?arguments[1]:void 0,o=0;o<n;o++)o in t&&e.call(r,t[o],o,t)}),Function.prototype.bind||(Function.prototype.bind=function(e){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var t=Array.prototype.slice.call(arguments,1),n=this,r=function(){},o=function(){return n.apply(this instanceof r?this:e,t.concat(Array.prototype.slice.call(arguments)))};return r.prototype=this.prototype,o.prototype=new r,o})}();
//# sourceMappingURL=head-ie8.js.map