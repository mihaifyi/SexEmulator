(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{7544:function(t,e,n){t.exports=n(66381)},66381:function(t,e,n){"use strict";var r=n(809),a=n(2553),o=n(62012),i=n(9807),u=n(27690),c=n(99828),s=n(38561);function f(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u(this,n)}}var p=n(62426);e.default=void 0;var d=p(n(67294)),l=n(13937);function y(t){return h.apply(this,arguments)}function h(){return(h=s(r.mark((function t(e){var n,a,o;return r.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.Component,a=e.ctx,t.next=3,(0,l.loadGetInitialProps)(n,a);case 3:return o=t.sent,t.abrupt("return",{pageProps:o});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}l.AppInitialProps,l.NextWebVitalsMetric;var m=function(t){i(n,t);var e=f(n);function n(){return a(this,n),e.apply(this,arguments)}return o(n,[{key:"componentDidCatch",value:function(t,e){throw t}},{key:"render",value:function(){var t=this.props,e=t.router,n=t.Component,r=t.pageProps,a=t.__N_SSG,o=t.__N_SSP;return d.default.createElement(n,Object.assign({},r,a||o?{}:{url:v(e)}))}}]),n}(d.default.Component);function v(t){var e=t.pathname,n=t.asPath,r=t.query;return{get query(){return r},get pathname(){return e},get asPath(){return n},back:function(){t.back()},push:function(e,n){return t.push(e,n)},pushTo:function(e,n){var r=n?e:"",a=n||e;return t.push(r,a)},replace:function(e,n){return t.replace(e,n)},replaceTo:function(e,n){var r=n?e:"",a=n||e;return t.replace(r,a)}}}e.default=m,m.origGetInitialProps=y,m.getInitialProps=y},84416:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){return!e||"object"!==i(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.r(e),n.d(e,{default:function(){return m}});var s=n(67294),f=n(7544),p=n(1785),d=n.n(p),l=s.createElement;function y(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u(this,n)}}var h={gtmId:"GTM-WQMMT6W",dataLayer:{optimizeContainerId:"GTM-W3GR4GQ",UA_ID:"UA-118335291-14"}},m=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}(c,t);var e,n,i,u=y(c);function c(){return r(this,c),u.apply(this,arguments)}return e=c,(n=[{key:"componentDidMount",value:function(){d().initialize(h)}},{key:"render",value:function(){var t=this.props,e=t.Component,n=t.pageProps;return l(e,n)}}])&&a(e.prototype,n),i&&a(e,i),c}(f.default)},81780:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(84416)}])},56421:function(t,e,n){"use strict";var r,a=n(96425),o=(r=a)&&r.__esModule?r:{default:r};var i={tags:function(t){var e=t.id,n=t.events,r=t.dataLayer,a=t.dataLayerName,i=t.preview,u="&gtm_auth="+t.auth,c="&gtm_preview="+i;return e||(0,o.default)("GTM Id is required"),{iframe:'\n      <iframe src="https://www.googletagmanager.com/ns.html?id='+e+u+c+'&gtm_cookies_win=x"\n        height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>',script:"\n      (function(w,d,s,l,i){w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', "+JSON.stringify(n).slice(1,-1)+"});\n        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';\n        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'"+u+c+"&gtm_cookies_win=x';\n        f.parentNode.insertBefore(j,f);\n      })(window,document,'script','"+a+"','"+e+"');",dataLayerVar:this.dataLayer(r,a)}},dataLayer:function(t,e){return"\n      window."+e+" = window."+e+" || [];\n      window."+e+".push("+JSON.stringify(t)+")"}};t.exports=i},58676:function(t,e,n){"use strict";var r,a=n(56421),o=(r=a)&&r.__esModule?r:{default:r};var i={dataScript:function(t){var e=document.createElement("script");return e.innerHTML=t,e},gtm:function(t){var e=o.default.tags(t);return{noScript:function(){var t=document.createElement("noscript");return t.innerHTML=e.iframe,t},script:function(){var t=document.createElement("script");return t.innerHTML=e.script,t},dataScript:this.dataScript(e.dataLayerVar)}},initialize:function(t){var e=t.gtmId,n=t.events,r=void 0===n?{}:n,a=t.dataLayer,o=t.dataLayerName,i=void 0===o?"dataLayer":o,u=t.auth,c=void 0===u?"":u,s=t.preview,f=void 0===s?"":s,p=this.gtm({id:e,events:r,dataLayer:a||void 0,dataLayerName:i,auth:c,preview:f});a&&document.head.appendChild(p.dataScript),document.head.insertBefore(p.script(),document.head.childNodes[0]),document.body.insertBefore(p.noScript(),document.body.childNodes[0])},dataLayer:function(t){var e=t.dataLayer,n=t.dataLayerName,r=void 0===n?"dataLayer":n;if(window[r])return window[r].push(e);var a=o.default.dataLayer(e,r),i=this.dataScript(a);document.head.insertBefore(i,document.head.childNodes[0])}};t.exports=i},1785:function(t,e,n){"use strict";var r,a=n(58676),o=(r=a)&&r.__esModule?r:{default:r};t.exports=o.default},96425:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=function(t){console.warn("[react-gtm]",t)}}},function(t){var e=function(e){return t(t.s=e)};t.O(0,[774,179],(function(){return e(81780),e(72441)}));var n=t.O();_N_E=n}]);