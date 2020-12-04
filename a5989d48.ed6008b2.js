(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),b=(n(0),n(148)),l={id:"makewebshell",title:"Function: makeWebshell",sidebar_label:"makeWebshell",hide_title:!0},c={unversionedId:"api/functions/makewebshell",id:"api/functions/makewebshell",isDocsHomePage:!1,title:"Function: makeWebshell",description:"Function: makeWebshell",source:"@site/docs/api/functions/makewebshell.md",slug:"/api/functions/makewebshell",permalink:"/webshell/docs/api/functions/makewebshell",editUrl:"https://github.com/formidable-webview/webshell/tree/master/apps/website/docs/docs/api/functions/makewebshell.md",version:"current",sidebar_label:"makeWebshell",sidebar:"someSidebar",previous:{title:"Variable: HandleVisualViewportFeature",permalink:"/webshell/docs/api/variables/handlevisualviewportfeature"},next:{title:"Function: useAutoheight",permalink:"/webshell/docs/api/functions/useautoheight"}},i=[],o={rightToc:i};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"function-makewebshell"},"Function: makeWebshell"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"makeWebshell"),"<","C, F>(",Object(b.b)("inlineCode",{parentName:"p"},"WebView"),": C, ...",Object(b.b)("inlineCode",{parentName:"p"},"features"),": F): ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/webshell/docs/api/types/webshellcomponent"}),"WebshellComponent"),"<","C, F>"),Object(b.b)("p",null,"Creates a React component which decorates ",Object(b.b)("inlineCode",{parentName:"p"},"WebView")," component with additional\ncapabilities such as:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"handling messages from the Web environment;"),Object(b.b)("li",{parentName:"ul"},"sending messages to the Web environment, see ",Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"/webshell/docs/api/interfaces/webhandle"}),"WebHandle"),";"),Object(b.b)("li",{parentName:"ul"},"running script in the Web environment.")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"example"))," "),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import {\n  makeWebshell,\n  HandleHashChangeFeature,\n  HandleVisualViewportFeature\n} from '@formidable-webview/webshell';\n\nconst features = [\n  new HandleHashChangeFeature(),\n  new HandleVisualViewportFeature()\n]\n\nconst Webshell = makeWebshell(\n  WebView,\n  ...features\n);\n")),Object(b.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"C")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ComponentType","<","any>"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The type of the ",Object(b.b)("inlineCode",{parentName:"td"},"WebView")," component.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"F")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"/webshell/docs/api/classes/feature"}),"Feature"),"<","{}, {}, {}>[]"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The type for a collection of features to inject.")))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"WebView")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"C"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A ",Object(b.b)("inlineCode",{parentName:"td"},"WebView")," component, typically exported from ",Object(b.b)("inlineCode",{parentName:"td"},"react-native-webview"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"...features")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"F"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Features to inject in the ",Object(b.b)("inlineCode",{parentName:"td"},"WebView"),".")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/webshell/docs/api/types/webshellcomponent"}),"WebshellComponent"),"<","C, F>"))}p.isMDXComponent=!0},148:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),s=p(n),u=a,O=s["".concat(l,".").concat(u)]||s[u]||m[u]||b;return n?r.a.createElement(O,c(c({ref:t},o),{},{components:n})):r.a.createElement(O,c({ref:t},o))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,l=new Array(b);l[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var o=2;o<b;o++)l[o]=n[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);