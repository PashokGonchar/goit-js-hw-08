!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),m=Object.prototype.toString,v=Math.max,b=Math.min,g=function(){return s.Date.now()};function p(e,t,n){var r,i,a,f,u,c,l=0,d=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function p(t){var n=r,o=i;return r=i=void 0,l=t,f=e.apply(o,n)}function j(e){return l=e,u=setTimeout(T,t),d?p(e):f}function x(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=a}function T(){var e=g();if(x(e))return h(e);u=setTimeout(T,function(e){var n=t-(e-c);return s?b(n,a-(e-l)):n}(e))}function h(e){return u=void 0,m&&r?p(e):(r=i=void 0,f)}function k(){var e=g(),n=x(e);if(r=arguments,i=this,c=e,n){if(void 0===u)return j(c);if(s)return u=setTimeout(T,t),p(c)}return void 0===u&&(u=setTimeout(T,t)),f}return t=S(t)||0,y(n)&&(d=!!n.leading,a=(s="maxWait"in n)?v(S(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),k.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=c=i=u=void 0},k.flush=function(){return void 0===u?f:h(g())},k}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=f.test(t);return o||u.test(t)?c(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};var j,x,T=document.querySelector(".feedback-form"),h=document.querySelector(".feedback-form textarea"),k=document.querySelector(".feedback-form input");(j=localStorage.getItem("feedback-form-state-textarea"))&&(h.value=j),(x=localStorage.getItem("feedback-form-state-email"))&&(k.value=x),T.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state-textarea"),localStorage.removeItem("feedback-form-state-email")})),h.addEventListener("input",e(t)((function(e){var t=e.target.value;localStorage.setItem("feedback-form-state-textarea",t)}),500)),k.addEventListener("input",e(t)((function(e){var t=e.target.value;localStorage.setItem("feedback-form-state-email",t)}),500))}();
//# sourceMappingURL=03-feedback.dc96d77d.js.map
