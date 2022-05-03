"use strict";(self.webpackChunkdata_derp=self.webpackChunkdata_derp||[]).push([[8621],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=o,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||n;return a?r.createElement(g,i(i({ref:t},d),{},{components:a})):r.createElement(g,i({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<n;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9640:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var r=a(3117),o=a(102),n=(a(7294),a(3905)),i=["components"],l={sidebar_position:21},s="Quiz",p={unversionedId:"data-engineering-the-good-parts/quiz",id:"data-engineering-the-good-parts/quiz",title:"Quiz",description:"What are some key differences between OLAP and OLTP systems?",source:"@site/docs/data-engineering-the-good-parts/quiz.mdx",sourceDirName:"data-engineering-the-good-parts",slug:"/data-engineering-the-good-parts/quiz",permalink:"/docs/data-engineering-the-good-parts/quiz",editUrl:"https://github.com/data-derp/data-derp.github.io/tree/master/docs/docs/data-engineering-the-good-parts/quiz.mdx",tags:[],version:"current",sidebarPosition:21,frontMatter:{sidebar_position:21},sidebar:"tutorialSidebar",previous:{title:"Look into the Past: Hadoop Ecosystem",permalink:"/docs/data-engineering-the-good-parts/look-into-the-past"},next:{title:"Exercise: Gentle Introduction to Spark",permalink:"/docs/data-engineering-the-good-parts/exercise-gentle-introduction-to-spark"}},d=[{value:"What are some key differences between OLAP and OLTP systems?",id:"what-are-some-key-differences-between-olap-and-oltp-systems",children:[],level:2},{value:"Why did people start moving from traditional databases and data warehouses to HDFS for Big Data Analytics in the mid 2000s?",id:"why-did-people-start-moving-from-traditional-databases-and-data-warehouses-to-hdfs-for-big-data-analytics-in-the-mid-2000s",children:[],level:2},{value:"Name some object storage offerings from the 3 major cloud providers",id:"name-some-object-storage-offerings-from-the-3-major-cloud-providers",children:[],level:2},{value:"Assign either the word OLTP or OLAP to the following technologies",id:"assign-either-the-word-oltp-or-olap-to-the-following-technologies",children:[],level:2}],u={toc:d};function c(e){var t=e.components,l=(0,o.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"quiz"},"Quiz"),(0,n.kt)("h2",{id:"what-are-some-key-differences-between-olap-and-oltp-systems"},"What are some key differences between OLAP and OLTP systems?"),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"olap-oltp.png",src:a(7896).Z}))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"OLTP")),(0,n.kt)("p",{parentName:"blockquote"},"Frequent updates, transactional behaviour/requirements"),(0,n.kt)("p",{parentName:"blockquote"},"Query priorities:"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"low-latency, up-to-date, consistent data for standard business operations"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"OLAP")),(0,n.kt)("p",{parentName:"blockquote"},"Oriented towards analysis, modelling, reporting, business intelligence"),(0,n.kt)("p",{parentName:"blockquote"},"Query Priorities:"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"asking big questions against big data, supporting flexible queries/analyses"),(0,n.kt)("li",{parentName:"ul"},"efficiently processing millions of rows and returning thousands/millions of rows"))),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("figure",{class:"video-container"},(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/-v3PhEtOuxw",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))),(0,n.kt)("h2",{id:"why-did-people-start-moving-from-traditional-databases-and-data-warehouses-to-hdfs-for-big-data-analytics-in-the-mid-2000s"},"Why did people start moving from traditional databases and data warehouses to HDFS for Big Data Analytics in the mid 2000s?"),(0,n.kt)("p",null,"And subsequently, why did people move from HDFS to Object Storage for Big Data Analytics?"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Why did people start moving from traditional databases and data warehouses to the Hadoop Ecosystem for Big Data Analytics in the mid 2000s?"),"\nTraditional relational databases and data warehouses relied on vertical scaling which required expensive/specialized hardware and was hard to plan for\nHDFS and MapReduce allowed for horizontal scalability with cheap commodity hardware")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Subsequently, why are people moving away from the Hadoop Ecosystem for Big Data Analytics?"),"\nCloud-based Object Storage is super scalable and cheap, far more than HDFS (which is only often used in on-prem environments these days). It was also great for storing all sorts of file formats (unstructured text, images, video, etc.)\nMost modern cloud-based Data Lakes are built-on Object Storage technologies.\nModern query engines such as Apache Spark, Presto, Dremio, etc. can efficiently scan data laying on object stores. To summarize:\nobject storage + (on-demand) query engines = fully decoupled storage and compute\n(great for scalability, elasticity, cost)")),(0,n.kt)("h2",{id:"name-some-object-storage-offerings-from-the-3-major-cloud-providers"},"Name some object storage offerings from the 3 major cloud providers"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"AWS")),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"Amazon S3 (general purpose)"),(0,n.kt)("li",{parentName:"ul"},"Amazon S3 Glacier (for archiving)"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Microsoft Azure")),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"Azure Blob Storage (general purpose)"),(0,n.kt)("li",{parentName:"ul"},"Azure Data Lake Storage Gen2 (has a file systems hierarchy, great for large structured and semi-structured datasets)"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"GCP")),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"Google Cloud Storage or GCS (general purpose)"))),(0,n.kt)("h2",{id:"assign-either-the-word-oltp-or-olap-to-the-following-technologies"},"Assign either the word OLTP or OLAP to the following technologies"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Operational Databases: ",(0,n.kt)("inlineCode",{parentName:"li"},"???")),(0,n.kt)("li",{parentName:"ul"},"MongoDB or Cassandra: ",(0,n.kt)("inlineCode",{parentName:"li"},"???")),(0,n.kt)("li",{parentName:"ul"},"Data Warehouses (e.g. Oracle, Snowflake, Redshift): ",(0,n.kt)("inlineCode",{parentName:"li"},"???")),(0,n.kt)("li",{parentName:"ul"},"Apache Spark: ",(0,n.kt)("inlineCode",{parentName:"li"},"???")),(0,n.kt)("li",{parentName:"ul"},"Presto/Athena: ",(0,n.kt)("inlineCode",{parentName:"li"},"???"))),(0,n.kt)("blockquote",null,(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"Operational Databases: ",(0,n.kt)("inlineCode",{parentName:"li"},"OLTP")),(0,n.kt)("li",{parentName:"ul"},"MongoDB or Cassandra: ",(0,n.kt)("inlineCode",{parentName:"li"},"Depends (you\u2019ll find use-cases online for either)")),(0,n.kt)("li",{parentName:"ul"},"Data Warehouses (e.g. Oracle, Snowflake, Redshift): ",(0,n.kt)("inlineCode",{parentName:"li"},"OLAP")),(0,n.kt)("li",{parentName:"ul"},"Apache Spark: ",(0,n.kt)("inlineCode",{parentName:"li"},"OLAP")),(0,n.kt)("li",{parentName:"ul"},"Presto/Athena: ",(0,n.kt)("inlineCode",{parentName:"li"},"OLAP")))),(0,n.kt)("p",null,"`"))}c.isMDXComponent=!0},7896:function(e,t,a){t.Z=a.p+"assets/images/olap-oltp-92e4d74cee4cfbca1a500c4c8752d25a.png"}}]);