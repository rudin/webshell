(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{152:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return s}));var a=n(0),i=n(150);const r=({reference:e,member:t,type:n})=>a.createElement("span",{className:"api-symbol "+n},e,t?"."+t:""),s=({reference:e,type:t,overrideUrl:n,member:r})=>{const s=r?"#"+r.toLowerCase():"",o="interface"===t?`/docs/api/interfaces/${e.toLowerCase()}${s}`:"class"===t?`/docs/api/classes/${e.toLowerCase()}${s}`:"enum"===t?`/docs/api/enums/${e.toLowerCase()}${s}`:"type"===t||"alias"===t?`/docs/api/types/${e.toLowerCase()}${s}`:"function"===t?`/docs/api/functions/${e.toLowerCase()}${s}`:"variable"===t?`/docs/api/variables/${e.toLowerCase()}${s}`:null;if(null===o)throw new TypeError(`APIReference: ${t} must be one of 'interface', 'class', 'type', 'alias', 'function' or 'variable'.`);return a.createElement("a",{className:"api-ref api-symbol "+t,href:Object(i.a)(n||o)},e,r?"."+r:"")}},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return o}));var a=n(0),i=n.n(a);const r={webview:"https://github.com/react-native-community/react-native-webview",scrollview:"https://reactnative.dev/docs/scrollview",linking:"https://reactnative.dev/docs/linking",__dev__:"https://reactnative.dev/docs/javascript-environment.html"},s=({name:e,type:t})=>{const n=r[e&&e.toLowerCase()],a=n?e:"MISSING REFERENCE FOR "+e;return i.a.createElement("a",{className:"api-ref api-symbol "+t,href:n},a)},o=()=>i.a.createElement(s,{name:"WebView",type:"class"})},156:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return m})),n.d(t,"b",(function(){return p}));var a=n(0),i=n(157),r=n(150),s=n(163),o=n(164);function c(e){const[t,n]=a.useState({content:"",error:!1});return a.useEffect(()=>{let t=!1;return async function(){try{const a=await fetch(e);if(a.ok){const e=await a.text();!t&&n({error:!1,content:e})}else!t&&n({error:!0,content:""})}catch(a){console.info(a),!t&&n({error:!0,content:""})}}(),()=>{t=!0}},[e]),t}const l=({children:e})=>a.createElement("div",{className:"margin-vert--md mdxCodeBlock__-node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-"},e),b=({lang:e,lines:t,title:n,content:r})=>a.createElement(i.a,{className:"language-"+e,metastring:`${t?`{${t}}`:""} ${n?`title="${n}"`:""}`,title:n},r),d=({source:e,lang:t,lines:n,title:i})=>{const s=Object(r.a)("/snippets/"+e),o=c(s),d=i||e;return o.error?a.createElement("div",{className:"admonition admonition-warning alert alert--danger"},s," snippet could not be loaded"):a.createElement(l,null,a.createElement(b,{lang:t,content:o.content,lines:n,title:d}))},m=({packages:e,dev:t=!1})=>a.createElement(s.a,{defaultValue:"yarn",groupId:"package-manager",values:[{label:"yarn",value:"yarn"},{label:"npm",value:"npm"}]},a.createElement(o.a,{value:"yarn"},a.createElement(b,{lang:"sh",content:`yarn add ${t?"--dev ":""}${e.split(/\s+/).join(" \\\n         ")}`})),a.createElement(o.a,{value:"npm"},a.createElement(b,{lang:"sh",content:`npm install --save ${t?"--only=dev ":""}${e.split(/\s+/).join(" \\\n    ")}`}))),p=({sourceBase:e,titleBase:t,jsx:n=!1,lines:i=null})=>{const d=Object(r.a)(`/snippets/${e}.${n?"tsx":"ts"}`),m=Object(r.a)(`/snippets/${e}.${n?"jsx":"js"}`),p=c(d),u=c(m),h=t||e;return p.error?a.createElement("div",{className:"admonition admonition-warning alert alert--danger"},d," snippet could not be loaded"):u.error?a.createElement("div",{className:"admonition admonition-warning alert alert--danger"},m," snippet could not be loaded"):a.createElement(l,null,a.createElement(s.a,{defaultValue:"ts",groupId:"javascript-source",values:[{label:"Typescript",value:"ts"},{label:"JavaScript",value:"js"}]},a.createElement(o.a,{value:"ts"},a.createElement(b,{lang:n?"tsx":"ts",content:p.content,lines:i,title:`${h}.${n?"tsx":"ts"}`})),a.createElement(o.a,{value:"js"},a.createElement(b,{lang:n?"jsx":"js",content:u.content,lines:i,title:`${h}.${n?"jsx":"js"}`}))))}},159:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0);const i=()=>a.createElement("span",{className:"webshell"},"webshell")},160:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(0);const i={hoc:"Higher Order Component",dom:"Document Object Model"},r={hoc:"https://reactjs.org/docs/higher-order-components.html",viewport:"https://developer.mozilla.org/en-US/docs/Glossary/Viewport",hooks:"https://reactjs.org/docs/hooks-overview.html",dom:"https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction","messaging system":"https://github.com/react-native-community/react-native-webview/blob/master/docs/Guide.md#communicating-between-js-and-native"},s=({id:e,title:t})=>{const n=r[e&&e.toLowerCase()],s=i[e&&e.toLowerCase()],o=void 0===n?`MISSING REFERENCE '${e}'`:t||e,c=e=>s?a.createElement("abbr",e):a.createElement("span",e);return a.createElement("strong",null,a.createElement(c,{title:s||void 0},a.createElement("a",{className:"term",title:s||null,href:n},o)))}},167:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),i=n(152);const r=e=>a.createElement("div",{className:"card api-box shadow--lt",style:{textAlign:"center"}},a.createElement("div",{className:"card__header api-box__title"},"~ API Reference ~"),a.createElement(i.a,e))},172:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),i=n(156);const r=()=>a.createElement(i.a,{lang:"jsx",content:"const Webshell = makeWebshell(\n  WebView,\n  new HandleLinkPressFeature()\n);\n\nconst onLinkPress = (target) => {\n  Linking.openURL(target.uri);\n};\n\nexport default function AugmentedWebView(\n  webViewProps\n) {\n  return (\n    <Webshell\n      onDOMLinkPress={onLinkPress}\n      {...webViewProps}\n    />\n  );\n}\n"})},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return m})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return j}));var a=n(2),i=n(6),r=(n(0),n(148)),s=n(159),o=n(160),c=n(155),l=n(152),b=n(167),d=n(156),m=(n(172),{id:"getting-started",title:"Getting Started"}),p={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"import {",source:"@site/docs/getting-started.mdx",slug:"/getting-started",permalink:"/webshell/docs/getting-started",editUrl:"https://github.com/formidable-webview/webshell/tree/master/apps/website/docs/docs/getting-started.mdx",version:"current",lastUpdatedBy:"Jules Sam. Randolph",lastUpdatedAt:1607092288,sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/webshell/docs/"},next:{title:"Glossary",permalink:"/webshell/docs/glossary"}},u=[{value:"Install",id:"install",children:[]},{value:"How does it work?",id:"how-does-it-work",children:[]},{value:"What is a (Web) Feature?",id:"what-is-a-web-feature",children:[{value:"Definition",id:"definition",children:[]},{value:"Learn More about Web Features",id:"learn-more-about-web-features",children:[]}]},{value:"What is a Shell?",id:"what-is-a-shell",children:[]},{value:"Minimal Example",id:"minimal-example",children:[]}],h={rightToc:u};function j(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"install"},"Install"),Object(r.b)(d.c,{packages:"@formidable-webview/webshell",mdxType:"InstallPackageSnippet"}),Object(r.b)("h2",{id:"how-does-it-work"},"How does it work?"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"@formidable-webview/webshell")," exports ",Object(r.b)(l.a,{reference:"makeWebshell",type:"function",mdxType:"APIReference"}),", a ",Object(r.b)(o.a,{id:"HOC",mdxType:"Term"})," which\ncreates augmented ",Object(r.b)(c.b,{mdxType:"WebView"})," components.\nThis component (from now on, we'll call that ",Object(r.b)("em",{parentName:"p"},"a shell component"),"), is very similar to the underlying ",Object(r.b)(c.b,{mdxType:"WebView"})," it is decorating, but\nwill have additional props and eventually, behave slightly differently, depending on the injected Web features passed to ",Object(r.b)(l.b,{reference:"makeWebshell",type:"function",mdxType:"APISymbolFormat"}),".\nMoreover, these features form an abstraction layer over ",Object(r.b)(c.b,{mdxType:"WebView"}),"'s ",Object(r.b)(o.a,{id:"messaging system",mdxType:"Term"}),",\nthus the \u201cshell\u201d in ",Object(r.b)(s.a,{mdxType:"Webshell"}),". This layer makes it very easy to implement bidirectional communication flows between Web and Native."),Object(r.b)("h2",{id:"what-is-a-web-feature"},"What is a (Web) Feature?"),Object(r.b)("h3",{id:"definition"},"Definition"),Object(r.b)("p",null,"In the context of ",Object(r.b)(s.a,{mdxType:"Webshell"}),", a Web feature is like a plugin. It encapsulates\nbehaviors injectable into ",Object(r.b)(c.b,{mdxType:"WebView"}),". More precisely, a feature can do the\nfollowing things:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Alter the content of the ",Object(r.b)(o.a,{id:"DOM",mdxType:"Term"}),";"),Object(r.b)("li",{parentName:"ul"},"Inject behaviors through scripts in the Web environment;"),Object(r.b)("li",{parentName:"ul"},"Handle messages sent from Web environment with ",Object(r.b)("em",{parentName:"li"},"shell handler")," props."),Object(r.b)("li",{parentName:"ul"},"Handle messages sent from native code with ",Object(r.b)("em",{parentName:"li"},"web handler")," functions.")),Object(r.b)("p",null,"Features with shell handlers will augment the ",Object(r.b)(c.b,{mdxType:"WebView"})," with message\nhandler props, for example ",Object(r.b)("inlineCode",{parentName:"p"},"onDOMLinkPress"),". Here are examples of handler features you\ncan instantiate in a shell:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Intercept click events on anchors and optionally prevent navigation (",Object(r.b)(l.a,{reference:"HandleLinkPressFeature",type:"variable",mdxType:"APIReference"}),");"),Object(r.b)("li",{parentName:"ul"},"Get notified when the page content size changes (",Object(r.b)(l.a,{reference:"HandleHTMLDimensionsFeature",type:"variable",mdxType:"APIReference"}),");")),Object(r.b)("h3",{id:"learn-more-about-web-features"},"Learn More about Web Features"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/api#variables"}),"Read the complete list of features exposed by this library"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/implementing-features"}),"Discover how to implement a feature"),".")),Object(r.b)("h2",{id:"what-is-a-shell"},"What is a Shell?"),Object(r.b)("p",null,"This library exposes one landmark function, ",Object(r.b)(l.a,{reference:"makeWebshell",type:"function",mdxType:"APIReference"}),", a ",Object(r.b)(o.a,{id:"HOC",mdxType:"Term"}),"\nwhich ",Object(r.b)("strong",{parentName:"p"},"augments")," a ",Object(r.b)(c.b,{mdxType:"WebView"})," passed as first argument with features passed\nas remaining arguments."),Object(r.b)(b.a,{reference:"makeWebshell",type:"function",mdxType:"APIBox"}),Object(r.b)("p",null,"Features are classes customizable during instantiation, where you can pass an\nobject of options to their constructor. Sometimes, a feature options object\nmight not have required fields, and you can skip the constructor argument if\nyou are OK with the defaults."),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If you are developing functional components, you\ncan use the hook variant instead: ",Object(r.b)(l.a,{reference:"useWebshell",type:"function",mdxType:"APIReference"})))),Object(r.b)("p",null,"In the bellow snippet,\nwe are creating a component which augments ",Object(r.b)(c.b,{mdxType:"WebView"})," with the two features\npreviously mentioned, but of course any number of features could be instantiated!"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const Webshell = makeWebshell(\n  WebView,\n  new HandleLinkPressFeature({ preventDefault: true }),\n  new HandleHTMLDimensionsFeature({ forceImplementation: 'mutation' })\n);\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"We will use the word ",Object(r.b)("em",{parentName:"p"},"shell")," as an alias to instances of ",Object(r.b)(l.a,{reference:"WebshellComponent",type:"alias",mdxType:"APIReference"})," produced\nby ",Object(r.b)(l.a,{reference:"makeWebshell",type:"function",mdxType:"APIReference"})," function."))),Object(r.b)("p",null,"The injected features will add two props to the shell, which already supports all ",Object(r.b)(c.b,{mdxType:"WebView"})," props:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"onDOMLinkPress")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"onDOMHTMLDimensions"))),Object(r.b)("p",null,"Now it's time to try out this code in a complete example."),Object(r.b)("h2",{id:"minimal-example"},"Minimal Example"),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"This example is shown for didactic purposes. If you need an autoheight ",Object(r.b)(c.b,{mdxType:"WebView"}),"\n, ",Object(r.b)("a",{href:"/docs/autoheight"},"read the guide dedicated to ",Object(r.b)(l.b,{reference:"useAutoheight",type:"function",mdxType:"APISymbolFormat"})," hook")," which is considerably more robust."))),Object(r.b)("p",null,"The below example will benefit from two features to implement the following behaviors:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Open external links in the system browser, thanks to ",Object(r.b)(l.a,{reference:"HandleLinkPressFeature",type:"variable",mdxType:"APIReference"}),";"),Object(r.b)("li",{parentName:"ul"},"Automatically adjust ",Object(r.b)(o.a,{id:"viewport",mdxType:"Term"})," height with content height, thanks to ",Object(r.b)(l.a,{reference:"HandleHTMLDimensionsFeature",type:"variable",mdxType:"APIReference"}),".")),Object(r.b)(d.b,{jsx:!0,sourceBase:"basic",titleBase:"NaiveAutoheightWebView",mdxType:"DualCodeSource"}),Object(r.b)("p",null,"As you can see, each feature has added one event handler prop to the shell,\n",Object(r.b)("inlineCode",{parentName:"p"},"onDOMLinkPress")," and ",Object(r.b)("inlineCode",{parentName:"p"},"onDOMHTMLDimensions"),". When the ",Object(r.b)(o.a,{id:"DOM",mdxType:"Term"})," is\nloaded, the two feature scripts are executed and register handlers to communicate with the shell:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"onDOMLinkPress")," is invoked when the user clicks on anchors. The above implementation opens links to system browser thanks to React Native ",Object(r.b)(c.a,{name:"Linking",type:"variable",mdxType:"ReactReference"})," API."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"onDOMHTMLDimensions")," is invoked when the page content size changes. The above implementation stores this size in a local state and injects it to the shell ",Object(r.b)("inlineCode",{parentName:"li"},"style")," prop. We have just created a naive Autoheight ",Object(r.b)(c.b,{mdxType:"WebView"}),"!")),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"This example is shown for didactic purposes. If you need an autoheight ",Object(r.b)(c.b,{mdxType:"WebView"}),"\n, ",Object(r.b)("a",{href:"/docs/autoheight"},"read the guide dedicated to ",Object(r.b)(l.b,{reference:"useAutoheight",type:"function",mdxType:"APISymbolFormat"})," hook")," which is considerably more robust."))))}j.isMDXComponent=!0}}]);