"use strict";(self.webpackChunkdata_derp=self.webpackChunkdata_derp||[]).push([[3313],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1244:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),i=["components"],s={sidebar_position:3},l="ETL vs ELT",c={unversionedId:"data-transformation/etl-vs-elt",id:"data-transformation/etl-vs-elt",title:"ETL vs ELT",description:"Let's Be Pragmatic",source:"@site/docs/data-transformation/etl-vs-elt.md",sourceDirName:"data-transformation",slug:"/data-transformation/etl-vs-elt",permalink:"/docs/data-transformation/etl-vs-elt",editUrl:"https://github.com/data-derp/data-derp.github.io/tree/master/docs/docs/data-transformation/etl-vs-elt.md",tags:[],version:"current",lastUpdatedBy:"Kelsey Mok",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/data-transformation/overview"},next:{title:"SQL: A Quick Review",permalink:"/docs/data-transformation/sql-quick-review"}},u=[{value:"Let&#39;s Be Pragmatic",id:"lets-be-pragmatic",children:[],level:2}],p={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"etl-vs-elt"},"ETL vs ELT"),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("figure",{class:"video-container"},(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/IqXqe7ZbcM8",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))),(0,o.kt)("h2",{id:"lets-be-pragmatic"},"Let's Be Pragmatic"),(0,o.kt)("p",null,"Rather than obsessing over this ETL vs ELT cage fight, just try to take away the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sometimes you may want to optimize/reshape your data sooner (because you know that\u2019s how everyone wants to use it)"),(0,o.kt)("li",{parentName:"ul"},"Other times, you want to leave the schema flexible (and just let the user\u2019s queries/views do the work) to avoid having to maintain lots of tables/views/jobs")))}d.isMDXComponent=!0}}]);