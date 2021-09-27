"use strict";(self.webpackChunkrck_docs=self.webpackChunkrck_docs||[]).push([[746],{3905:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var l=n.createContext({}),u=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=u(t.components);return n.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),f=u(r),d=o,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(m,i(i({ref:e},s),{},{components:r})):n.createElement(m,i({ref:e},s))}));function d(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9463:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i={title:"Migration Guide",slug:"/"},c="React-chatbot-kit 2.0 is here!",l={unversionedId:"migrations-guide",id:"migrations-guide",isDocsHomePage:!1,title:"Migration Guide",description:"Finally a new version of react-chatbot-kit is ready. The 2.0 version brings:",source:"@site/docs/migrations-guide.md",sourceDirName:".",slug:"/",permalink:"/react-chatbot-kit-docs/docs/",tags:[],version:"current",frontMatter:{title:"Migration Guide",slug:"/"},sidebar:"defaultSidebar",previous:{title:"Getting Started",permalink:"/react-chatbot-kit-docs/docs/getting-started"},next:{title:"Thank you!",permalink:"/react-chatbot-kit-docs/docs/thank-you"}},u=[{value:"Migrating",id:"migrating",children:[]}],s={toc:u};function p(t){var e=t.components,r=(0,o.Z)(t,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"react-chatbot-kit-20-is-here"},"React-chatbot-kit 2.0 is here!"),(0,a.kt)("p",null,"Finally a new version of react-chatbot-kit is ready. The 2.0 version brings:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"External CSS stylesheet for greater CSS customization"),(0,a.kt)("li",{parentName:"ul"},"Custom messages"),(0,a.kt)("li",{parentName:"ul"},"Typescript support"),(0,a.kt)("li",{parentName:"ul"},"NextJS support"),(0,a.kt)("li",{parentName:"ul"},"Code quality improvements, fixes and refactoring")),(0,a.kt)("h2",{id:"migrating"},"Migrating"),(0,a.kt)("p",null,"Most of the features added to react-chatbot-kit are backwards compatible. The only thing that is not backwards compatible is the external CSS stylesheet. If you are an on an earlier version of react-chatbot-kit simply add the following to your import:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import Chatbot from 'react-chatbot-kit';\nimport 'react-chatbot-kit/build/main.css';\n")),(0,a.kt)("p",null,"And that's it! Not to painful."),(0,a.kt)("p",null,"Now you're ready to enjoy the new chatbot features."))}p.isMDXComponent=!0}}]);