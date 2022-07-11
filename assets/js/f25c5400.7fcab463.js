"use strict";(self.webpackChunkdata_derp=self.webpackChunkdata_derp||[]).push([[4968],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return d}});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},A=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),A=p(a),d=i,m=A["".concat(l,".").concat(d)]||A[d]||u[d]||n;return a?r.createElement(m,c(c({ref:t},s),{},{components:a})):r.createElement(m,c({ref:t},s))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,c=new Array(n);c[0]=A;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var p=2;p<n;p++)c[p]=a[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}A.displayName="MDXCreateElement"},2921:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return A}});var r=a(3117),i=a(102),n=(a(7294),a(3905)),c=["components"],o={sidebar_position:6},l="Data Milky Way: A Brief History (Part 4) - Architecture Reference",p={unversionedId:"data-engineering-the-good-parts/data-milky-way-brief-history-part-4-arch-ref",id:"data-engineering-the-good-parts/data-milky-way-brief-history-part-4-arch-ref",title:"Data Milky Way: A Brief History (Part 4) - Architecture Reference",description:"Typical Data Pipeline",source:"@site/docs/data-engineering-the-good-parts/data-milky-way-brief-history-part-4-arch-ref.mdx",sourceDirName:"data-engineering-the-good-parts",slug:"/data-engineering-the-good-parts/data-milky-way-brief-history-part-4-arch-ref",permalink:"/docs/data-engineering-the-good-parts/data-milky-way-brief-history-part-4-arch-ref",editUrl:"https://github.com/data-derp/data-derp.github.io/tree/master/docs/docs/data-engineering-the-good-parts/data-milky-way-brief-history-part-4-arch-ref.mdx",tags:[],version:"current",lastUpdatedBy:"Kelsey Mok",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Data Milky Way: Brief History (Part 3) - Data Processing",permalink:"/docs/data-engineering-the-good-parts/data-milky-way-brief-history-part-3-data-processing"},next:{title:"Data Formats",permalink:"/docs/data-engineering-the-good-parts/data-formats"}},s=[{value:"Typical Data Pipeline",id:"typical-data-pipeline",children:[],level:2},{value:"Multi-Cloud/Cloud Agnostic Example Architecture",id:"multi-cloudcloud-agnostic-example-architecture",children:[],level:2},{value:"AWS Overview",id:"aws-overview",children:[],level:2},{value:"Batch Processing on Azure",id:"batch-processing-on-azure",children:[],level:2},{value:"Batch &amp; Streaming (Lambda Architecture) on Azure",id:"batch--streaming-lambda-architecture-on-azure",children:[],level:2},{value:"Lambda vs. Kappa Architecture",id:"lambda-vs-kappa-architecture",children:[],level:2}],u={toc:s};function A(e){var t=e.components,o=(0,i.Z)(e,c);return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"data-milky-way-a-brief-history-part-4---architecture-reference"},"Data Milky Way: A Brief History (Part 4) - Architecture Reference"),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("figure",{class:"video-container"},(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Mzz4o2xDVzw",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))),(0,n.kt)("h2",{id:"typical-data-pipeline"},"Typical Data Pipeline"),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"typical-data-pipeline.png",src:a(6989).Z}))),(0,n.kt)("h2",{id:"multi-cloudcloud-agnostic-example-architecture"},"Multi-Cloud/Cloud Agnostic Example Architecture"),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"multi-cloud-cloud-agnostic-architecture.png",src:a(1).Z}))),(0,n.kt)("h2",{id:"aws-overview"},"AWS Overview"),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"aws-overview.png",src:a(9598).Z})),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/architecture/field-notes-how-to-build-an-aws-glue-workflow-using-the-aws-cloud-development-kit/"},"Reference Architecture"))),(0,n.kt)("h2",{id:"batch-processing-on-azure"},"Batch Processing on Azure"),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"batch-processing-on-azure.png",src:a(6192).Z})),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/architecture/solution-ideas/articles/ingest-etl-stream-with-adb"},"Reference"))),(0,n.kt)("h2",{id:"batch--streaming-lambda-architecture-on-azure"},"Batch & Streaming (Lambda Architecture) on Azure"),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"batch-streaming-azure-lambda.png",src:a(752).Z})),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/architecture/example-scenario/dataplate2e/data-platform-end-to-end"},"Reference"))),(0,n.kt)("h2",{id:"lambda-vs-kappa-architecture"},"Lambda vs. Kappa Architecture"),(0,n.kt)("p",null,"Read about the ",(0,n.kt)("a",{parentName:"p",href:"https://luminousmen.com/post/modern-big-data-architectures-lambda-kappa"},"differences")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Lambda")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the two layers (speed layer & batch layer) resemble"),(0,n.kt)("li",{parentName:"ul"},"the two legs of the \u03bb symbol")),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"lambda.png",src:a(43).Z}))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kappa"),"\nthe left stem of the \ud835\udeb1 (kappa symbol) signifies\nunified input data store and processing logic"),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kappa.png",src:a(4804).Z}))))}A.isMDXComponent=!0},9598:function(e,t){t.Z="data:image/jpeg;base64,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"},6192:function(e,t,a){t.Z=a.p+"assets/images/batch-processing-on-azure-fcc0e7ccec79a25820d3782a858145f9.png"},752:function(e,t,a){t.Z=a.p+"assets/images/batch-streaming-azure-lambda-954f3ce2e50074290e9b507f4ff79563.png"},4804:function(e,t,a){t.Z=a.p+"assets/images/kappa-4965dcbd5987554830e077cea1ceac1b.png"},43:function(e,t,a){t.Z=a.p+"assets/images/lambda-44cc93cab966934a57d7181ec1619b94.png"},1:function(e,t,a){t.Z=a.p+"assets/images/multi-cloud-cloud-agnostic-architecture-aaab5999d9165be05c24576ecc39c4ad.png"},6989:function(e,t,a){t.Z=a.p+"assets/images/typical-data-pipeline-b2ce97ec3c25bcdc5bf36b8a5a5fbda0.png"}}]);