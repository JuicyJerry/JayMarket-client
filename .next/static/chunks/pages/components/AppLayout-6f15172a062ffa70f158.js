_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{KZe9:function(e,t,n){"use strict";n.r(t);n("q1tI");var r=n("17x9"),c=n.n(r),o=n("YFqc"),i=n.n(o),s=n("nKUr"),a=function(){return Object(s.jsxs)("header",{children:[Object(s.jsx)("div",{id:"userButton",children:Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)(i.a,{href:"/login",children:Object(s.jsx)("input",{type:"button",value:"\ub85c\uadf8\uc778"})})}),Object(s.jsx)("li",{children:"|"}),Object(s.jsx)("li",{children:Object(s.jsx)(i.a,{href:"/signup",children:Object(s.jsx)("input",{type:"button",value:"\ud68c\uc6d0\uac00\uc785"})})})]})}),Object(s.jsx)("div",{id:"mainLogo",children:Object(s.jsx)("img",{src:"./img/logo.png"})}),Object(s.jsx)("nav",{id:"nav",children:Object(s.jsxs)("ul",{children:[Object(s.jsxs)("li",{children:[Object(s.jsx)("img",{src:"./img/menu.svg"}),Object(s.jsx)("input",{type:"button",value:"\uc804\uccb4 \uce74\ud14c\uace0\ub9ac"}),Object(s.jsx)("input",{type:"button",value:"\uc54c\ub730 \uc1fc\ud551"})]}),Object(s.jsx)("li",{children:Object(s.jsx)("input",{type:"text",placeholder:"\uc6d0\ud558\uc2dc\ub294 \uac80\uc0c9\uc5b4\ub97c \uc785\ub825\ud558\uc138\uc694."})}),Object(s.jsxs)("li",{children:[Object(s.jsx)("img",{src:"./img/search.svg"}),Object(s.jsx)("img",{src:"./img/location.svg"}),Object(s.jsx)(i.a,{href:"/cart",children:Object(s.jsx)("img",{src:"./img/cart.svg"})})]})]})})]})};a.PropTypes={children:c.a.node.isRequired},t.default=a},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),c=n("284h");t.__esModule=!0,t.default=void 0;var o,i=c(n("q1tI")),s=n("elyg"),a=n("nOHt"),u=new Map,l=window.IntersectionObserver,f={};var p=function(e,t){var n=o||(l?o=new l((function(e){e.forEach((function(e){if(u.has(e.target)){var t=u.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),u.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),u.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}u.delete(e)}):function(){}};function d(e,t,n,r){(0,s.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),f[t+"%"+n]=!0)}var j=function(e){var t=!1!==e.prefetch,n=i.default.useState(),c=r(n,2),o=c[0],u=c[1],j=(0,a.useRouter)(),h=j&&j.pathname||"/",b=i.default.useMemo((function(){var t=(0,s.resolveHref)(h,e.href,!0),n=r(t,2),c=n[0],o=n[1];return{href:c,as:e.as?(0,s.resolveHref)(h,e.as):o||c}}),[h,e.href,e.as]),v=b.href,g=b.as;i.default.useEffect((function(){if(t&&l&&o&&o.tagName&&(0,s.isLocalURL)(v)&&!f[v+"%"+g])return p(o,(function(){d(j,v,g)}))}),[t,o,v,g,j]);var x=e.children,O=e.replace,y=e.shallow,m=e.scroll;"string"===typeof x&&(x=i.default.createElement("a",null,x));var w=i.Children.only(x),_={ref:function(e){e&&u(e),w&&"object"===typeof w&&w.ref&&("function"===typeof w.ref?w.ref(e):"object"===typeof w.ref&&(w.ref.current=e))},onClick:function(e){w.props&&"function"===typeof w.props.onClick&&w.props.onClick(e),e.defaultPrevented||function(e,t,n,r,c,o,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[c?"replace":"push"](n,r,{shallow:o}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,j,v,g,O,y,m)}};return t&&(_.onMouseEnter=function(e){(0,s.isLocalURL)(v)&&(w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(e),d(j,v,g,{priority:!0}))}),(e.passHref||"a"===w.type&&!("href"in w.props))&&(_.href=(0,s.addBasePath)((0,s.addLocale)(g,j&&j.locale,j&&j.defaultLocale))),i.default.cloneElement(w,_)};t.default=j},s8Dw:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/AppLayout",function(){return n("KZe9")}])}},[["s8Dw",0,1,2]]]);