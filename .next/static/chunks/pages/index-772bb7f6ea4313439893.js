_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"3yNV":function(e,r){throw new Error("Module build failed: Error: Final loader (./node_modules/next/dist/build/webpack/loaders/error-loader.js) didn't return a Buffer or String\n    at runLoaders (/home/juicyjerry/Desktop/Desktop/Toy Projects/e-commerce/JayMarket_client/node_modules/webpack/lib/NormalModule.js:333:18)\n    at /home/juicyjerry/Desktop/Desktop/Toy Projects/e-commerce/JayMarket_client/node_modules/loader-runner/lib/LoaderRunner.js:373:3\n    at iterateNormalLoaders (/home/juicyjerry/Desktop/Desktop/Toy Projects/e-commerce/JayMarket_client/node_modules/loader-runner/lib/LoaderRunner.js:214:10)\n    at iterateNormalLoaders (/home/juicyjerry/Desktop/Desktop/Toy Projects/e-commerce/JayMarket_client/node_modules/loader-runner/lib/LoaderRunner.js:221:10)\n    at /home/juicyjerry/Desktop/Desktop/Toy Projects/e-commerce/JayMarket_client/node_modules/loader-runner/lib/LoaderRunner.js:236:3\n    at runSyncOrAsync (/home/juicyjerry/Desktop/Desktop/Toy Projects/e-commerce/JayMarket_client/node_modules/loader-runner/lib/LoaderRunner.js:124:12)\n    at iterateNormalLoaders (/home/juicyjerry/Desktop/Desktop/Toy Projects/e-commerce/JayMarket_client/node_modules/loader-runner/lib/LoaderRunner.js:232:2)\n    at Array.<anonymous> (/home/juicyjerry/Desktop/Desktop/Toy Projects/e-commerce/JayMarket_client/node_modules/loader-runner/lib/LoaderRunner.js:205:4)\n    at Storage.finished (/home/juicyjerry/Desktop/Desktop/Toy Projects/e-commerce/JayMarket_client/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:55:16)\n    at provider (/home/juicyjerry/Desktop/Desktop/Toy Projects/e-commerce/JayMarket_client/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:91:9)")},KZe9:function(e,r,t){"use strict";t.r(r);t("q1tI");var n=t("17x9"),o=t.n(n),c=t("YFqc"),a=t.n(c),s=t("3yNV"),i=t("nKUr"),l=function(){return Object(i.jsxs)("header",{children:[Object(i.jsx)("div",{id:"userButton",children:Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:Object(i.jsx)(a.a,{href:"/login",children:Object(i.jsx)("input",{type:"button",value:"\ub85c\uadf8\uc778"})})}),Object(i.jsx)("li",{children:"|"}),Object(i.jsx)("li",{children:Object(i.jsx)(a.a,{href:"/signup",children:Object(i.jsx)("input",{type:"button",value:"\ud68c\uc6d0\uac00\uc785"})})})]})}),Object(i.jsx)("div",{id:"mainLogo",children:Object(i.jsx)("img",{src:s.logo,alt:"logo"})}),Object(i.jsx)("nav",{id:"nav",children:Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{children:[Object(i.jsx)("img",{src:s.menu,alt:"menu"}),Object(i.jsx)("input",{type:"button",value:"\uc804\uccb4 \uce74\ud14c\uace0\ub9ac"}),Object(i.jsx)("input",{type:"button",value:"\uc54c\ub730 \uc1fc\ud551"})]}),Object(i.jsx)("li",{children:Object(i.jsx)("input",{type:"text",placeholder:"\uc6d0\ud558\uc2dc\ub294 \uac80\uc0c9\uc5b4\ub97c \uc785\ub825\ud558\uc138\uc694."})}),Object(i.jsxs)("li",{children:[Object(i.jsx)("img",{src:s.search,alt:"search"}),Object(i.jsx)("img",{src:s.location,alt:"location"}),Object(i.jsx)(a.a,{href:"/cart",children:Object(i.jsx)("img",{src:s.cart,alt:"cart"})})]})]})})]})};l.PropTypes={children:o.a.node.isRequired},r.default=l},RNiq:function(e,r,t){"use strict";t.r(r);t("q1tI");var n=t("KZe9"),o=t("nKUr");r.default=function(){return Object(o.jsxs)(n.default,{children:[Object(o.jsx)("div",{children:"Hello, JayMarket!"}),";"]})}},YFqc:function(e,r,t){e.exports=t("cTJO")},cTJO:function(e,r,t){"use strict";var n=t("J4zp"),o=t("284h");r.__esModule=!0,r.default=void 0;var c,a=o(t("q1tI")),s=t("elyg"),i=t("nOHt"),l=new Map,u=window.IntersectionObserver,d={};var j=function(e,r){var t=c||(u?c=new u((function(e){e.forEach((function(e){if(l.has(e.target)){var r=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(c.unobserve(e.target),l.delete(e.target),r())}}))}),{rootMargin:"200px"}):void 0);return t?(t.observe(e),l.set(e,r),function(){try{t.unobserve(e)}catch(r){console.error(r)}l.delete(e)}):function(){}};function f(e,r,t,n){(0,s.isLocalURL)(r)&&(e.prefetch(r,t,n).catch((function(e){0})),d[r+"%"+t]=!0)}var p=function(e){var r=!1!==e.prefetch,t=a.default.useState(),o=n(t,2),c=o[0],l=o[1],p=(0,i.useRouter)(),y=p&&p.pathname||"/",h=a.default.useMemo((function(){var r=(0,s.resolveHref)(y,e.href,!0),t=n(r,2),o=t[0],c=t[1];return{href:o,as:e.as?(0,s.resolveHref)(y,e.as):c||o}}),[y,e.href,e.as]),m=h.href,b=h.as;a.default.useEffect((function(){if(r&&u&&c&&c.tagName&&(0,s.isLocalURL)(m)&&!d[m+"%"+b])return j(c,(function(){f(p,m,b)}))}),[r,c,m,b,p]);var v=e.children,k=e.replace,_=e.shallow,x=e.scroll;"string"===typeof v&&(v=a.default.createElement("a",null,v));var O=a.Children.only(v),g={ref:function(e){e&&l(e),O&&"object"===typeof O&&O.ref&&("function"===typeof O.ref?O.ref(e):"object"===typeof O.ref&&(O.ref.current=e))},onClick:function(e){O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,r,t,n,o,c,a){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(t))&&(e.preventDefault(),null==a&&(a=n.indexOf("#")<0),r[o?"replace":"push"](t,n,{shallow:c}).then((function(e){e&&a&&(window.scrollTo(0,0),document.body.focus())})))}(e,p,m,b,k,_,x)}};return r&&(g.onMouseEnter=function(e){(0,s.isLocalURL)(m)&&(O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),f(p,m,b,{priority:!0}))}),(e.passHref||"a"===O.type&&!("href"in O.props))&&(g.href=(0,s.addBasePath)((0,s.addLocale)(b,p&&p.locale,p&&p.defaultLocale))),a.default.cloneElement(O,g)};r.default=p},vlRD:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("RNiq")}])}},[["vlRD",0,2,1]]]);