"use strict";(self.webpackChunkdata_derp=self.webpackChunkdata_derp||[]).push([[4968],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(a),m=n,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return a?r.createElement(g,c(c({ref:t},p),{},{components:a})):r.createElement(g,c({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var s=2;s<i;s++)c[s]=a[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2921:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=a(3117),n=a(102),i=(a(7294),a(3905)),c=["components"],o={sidebar_position:6},l="Data Milky Way: A Brief History (Part 4) - Architecture Reference",s={unversionedId:"data-engineering-the-good-parts/data-milky-way-brief-history-part-4-arch-ref",id:"data-engineering-the-good-parts/data-milky-way-brief-history-part-4-arch-ref",title:"Data Milky Way: A Brief History (Part 4) - Architecture Reference",description:"Typical Data Pipeline",source:"@site/docs/data-engineering-the-good-parts/data-milky-way-brief-history-part-4-arch-ref.mdx",sourceDirName:"data-engineering-the-good-parts",slug:"/data-engineering-the-good-parts/data-milky-way-brief-history-part-4-arch-ref",permalink:"/docs/data-engineering-the-good-parts/data-milky-way-brief-history-part-4-arch-ref",editUrl:"https://github.com/data-derp/data-derp.github.io/tree/master/docs/docs/data-engineering-the-good-parts/data-milky-way-brief-history-part-4-arch-ref.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Data Milky Way: Brief History (Part 3)",permalink:"/docs/data-engineering-the-good-parts/data-milky-way-brief-history-part-3-data-processing"},next:{title:"Data Formats",permalink:"/docs/data-engineering-the-good-parts/data-formats"}},p=[{value:"Typical Data Pipeline",id:"typical-data-pipeline",children:[],level:2},{value:"Multi-Cloud/Cloud Agnostic Example Architecture",id:"multi-cloudcloud-agnostic-example-architecture",children:[],level:2},{value:"AWS Overview",id:"aws-overview",children:[],level:2},{value:"Batch Processing on Azure",id:"batch-processing-on-azure",children:[],level:2},{value:"Batch &amp; Streaming (Lambda Architecture) on Azure",id:"batch--streaming-lambda-architecture-on-azure",children:[],level:2},{value:"Lambda vs. Kappa Architecture",id:"lambda-vs-kappa-architecture",children:[],level:2}],u={toc:p};function d(e){var t=e.components,o=(0,n.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"data-milky-way-a-brief-history-part-4---architecture-reference"},"Data Milky Way: A Brief History (Part 4) - Architecture Reference"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("figure",{class:"video-container"},(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Mzz4o2xDVzw",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))),(0,i.kt)("h2",{id:"typical-data-pipeline"},"Typical Data Pipeline"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"typical-data-pipeline.png",src:a(6989).Z}))),(0,i.kt)("h2",{id:"multi-cloudcloud-agnostic-example-architecture"},"Multi-Cloud/Cloud Agnostic Example Architecture"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"multi-cloud-cloud-agnostic-architecture.png",src:a(1).Z}))),(0,i.kt)("h2",{id:"aws-overview"},"AWS Overview"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"aws-overview.png",src:a(4401).Z})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/wellarchitected/latest/analytics-lens/reference-architecture.html"},"Reference Architecture"))),(0,i.kt)("h2",{id:"batch-processing-on-azure"},"Batch Processing on Azure"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"batch-processing-on-azure-1.png",src:a(6831).Z}),"\n",(0,i.kt)("img",{alt:"batch-processing-on-azure-2.png",src:a(526).Z})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/architecture/solution-ideas/articles/ingest-etl-stream-with-adb"},"Reference"))),(0,i.kt)("h2",{id:"batch--streaming-lambda-architecture-on-azure"},"Batch & Streaming (Lambda Architecture) on Azure"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"batch-streaming-azure-lambda.png",src:a(752).Z})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/architecture/example-scenario/dataplate2e/data-platform-end-to-end"},"Reference"))),(0,i.kt)("h2",{id:"lambda-vs-kappa-architecture"},"Lambda vs. Kappa Architecture"),(0,i.kt)("p",null,"Read about the ",(0,i.kt)("a",{parentName:"p",href:"https://luminousmen.com/post/modern-big-data-architectures-lambda-kappa"},"differences")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Lambda")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the two layers (speed layer & batch layer) resemble"),(0,i.kt)("li",{parentName:"ul"},"the two legs of the \u03bb symbol")),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"lambda.png",src:a(43).Z}))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Kappa"),"\nthe left stem of the \ud835\udeb1 (kappa symbol) signifies\nunified input data store and processing logic"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"kappa.png",src:a(4804).Z}))))}d.isMDXComponent=!0},4401:function(e,t,a){t.Z=a.p+"assets/images/aws-overview-24c77ff961410fd04ad0958cea9f5c7a.png"},6831:function(e,t,a){t.Z=a.p+"assets/images/batch-processing-on-azure-1-013aad6bbfcfc320cd10c73c8803b235.png"},526:function(e,t,a){t.Z=a.p+"assets/images/batch-processing-on-azure-2-65c715fdc77e7c89c36bad8b3deca504.png"},752:function(e,t,a){t.Z=a.p+"assets/images/batch-streaming-azure-lambda-2ae9ca4a2ab5811b43ff2811576ccaf3.png"},4804:function(e,t,a){t.Z=a.p+"assets/images/kappa-4965dcbd5987554830e077cea1ceac1b.png"},43:function(e,t,a){t.Z=a.p+"assets/images/lambda-44cc93cab966934a57d7181ec1619b94.png"},1:function(e,t,a){t.Z=a.p+"assets/images/multi-cloud-cloud-agnostic-architecture-aaab5999d9165be05c24576ecc39c4ad.png"},6989:function(e,t,a){t.Z=a.p+"assets/images/typical-data-pipeline-b2ce97ec3c25bcdc5bf36b8a5a5fbda0.png"}}]);