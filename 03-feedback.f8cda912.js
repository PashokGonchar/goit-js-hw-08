!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",a=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,v=l||d||Function("return this")(),s=Object.prototype.toString,m=Math.max,b=Math.min,g=function(){return v.Date.now()};function p(e,t,n){var r,a,i,u,f,c,l=0,d=!1,v=!1,s=!0;if("function"!=typeof e)throw new TypeError(o);function p(t){var n=r,o=a;return r=a=void 0,l=t,u=e.apply(o,n)}function j(e){return l=e,f=setTimeout(h,t),d?p(e):u}function x(e){var n=e-c;return void 0===c||n>=t||n<0||v&&e-l>=i}function h(){var e=g();if(x(e))return k(e);f=setTimeout(h,function(e){var n=t-(e-c);return v?b(n,i-(e-l)):n}(e))}function k(e){return f=void 0,s&&r?p(e):(r=a=void 0,u)}function w(){var e=g(),n=x(e);if(r=arguments,a=this,c=e,n){if(void 0===f)return j(c);if(v)return f=setTimeout(h,t),p(c)}return void 0===f&&(f=setTimeout(h,t)),u}return t=S(t)||0,y(n)&&(d=!!n.leading,i=(v="maxWait"in n)?m(S(n.maxWait)||0,t):i,s="trailing"in n?!!n.trailing:s),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=a=f=void 0},w.flush=function(){return void 0===f?u:k(g())},w}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var o=u.test(t);return o||f.test(t)?c(t.slice(2),o?2:8):i.test(t)?NaN:+t}t=function(e,t,n){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),p(e,t,{leading:r,maxWait:t,trailing:a})};var j,x,h=document.querySelector(".feedback-form"),k=document.querySelector(".feedback-form textarea"),w=document.querySelector(".feedback-form input");(j=localStorage.getItem("feedback-form-state-textarea"))&&(k.value=j),(x=localStorage.getItem("feedback-form-state-email"))&&(w.value=x);var T={};h.addEventListener("input",(function(e){T[e.target.name]=e.target.value})),h.addEventListener("submit",(function(e){e.preventDefault(),""===k.value||""===w.value?alert("Всі поля повинні бути заповнені!!!"):(console.log(T),localStorage.removeItem("feedback-form-state-textarea"),localStorage.removeItem("feedback-form-state-email"),e.target.reset());return!1})),k.addEventListener("input",e(t)((function(e){var t=e.target.value;localStorage.setItem("feedback-form-state-textarea",t)}),500)),w.addEventListener("input",e(t)((function(e){var t=e.target.value;localStorage.setItem("feedback-form-state-email",t)}),500))}();
//# sourceMappingURL=03-feedback.f8cda912.js.map
