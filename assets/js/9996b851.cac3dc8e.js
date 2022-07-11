"use strict";(self.webpackChunkrck_docs=self.webpackChunkrck_docs||[]).push([[733],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},l=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=p(n),m=r,f=l["".concat(c,".").concat(m)]||l[m]||u[m]||i;return n?o.createElement(f,a(a({ref:t},d),{},{components:n})):o.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=l;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}l.displayName="MDXCreateElement"},9810:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a={title:"Widgets"},s=void 0,c={unversionedId:"advanced/widgets",id:"advanced/widgets",isDocsHomePage:!1,title:"Widgets",description:"Widgets are custom components that you can render with chatbot messages.",source:"@site/docs/advanced/widgets.md",sourceDirName:"advanced",slug:"/advanced/widgets",permalink:"/react-chatbot-kit-docs/docs/advanced/widgets",tags:[],version:"current",frontMatter:{title:"Widgets"},sidebar:"docs",previous:{title:"Custom messages",permalink:"/react-chatbot-kit-docs/docs/advanced/custom-messages"},next:{title:"Further resources",permalink:"/react-chatbot-kit-docs/docs/advanced/example-repositories"}},p=[],d={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Widgets are custom components that you can render with chatbot messages."),(0,i.kt)("p",null,"In order to use widgets, you need to register them in the config. Here you will define the following properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"widgetName: defines the name of the widget"),(0,i.kt)("li",{parentName:"ul"},"widgetFunc: define a function that returns the component. The function must take props and spread it into the component."),(0,i.kt)("li",{parentName:"ul"},"mapStateToProps: Defines which state properties you defined in config should be injected into the widget component. Use if you want to control state access.\n-props: optional array of props you want to pass to your component.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { createChatBotMessage } from 'react-chatbot-kit';\n\nimport Overview from './widgets/Overview/Overview';\nimport MessageParserDocs from './widgets/docs/MessageParserDocs/MessageParserDocs';\nimport ActionProviderDocs from './widgets/docs/ActionProviderDocs/ActionProviderDocs';\nimport Config from './widgets/docs/Config/Config';\nimport WidgetDocs from './widgets/docs/WidgetDocs/WidgetDocs';\nimport { createCustomMessage } from 'react-chatbot-kit';\nimport CustomMessage from './CustomMessage';\n\nconst botName = 'DocsBot';\n\nconst config = {\n  botName: botName,\n  lang: 'no',\n  initialMessages: [\n    createChatBotMessage(\n      `Hi I'm ${botName}. I\u2019m here to help you explain how I work.`\n    ),\n    createChatBotMessage(\n      \"Here's a quick overview over what I need to function. ask me about the different parts to dive deeper.\",\n      {\n        withAvatar: false,\n        delay: 500,\n        widget: 'overview',\n      }\n    ),\n  ],\n  state: {\n    gist: '',\n    infoBox: '',\n  },\n  widgets: [\n    {\n      widgetName: 'overview',\n      widgetFunc: (props) => <Overview {...props} />,\n      mapStateToProps: ['gist'],\n    },\n    {\n      widgetName: 'messageParser',\n      widgetFunc: (props) => <MessageParserDocs {...props} />,\n      mapStateToProps: ['gist', 'infoBox'],\n    },\n    {\n      widgetName: 'actionProviderDocs',\n      widgetFunc: (props) => <ActionProviderDocs {...props} />,\n      mapStateToProps: ['gist', 'infoBox'],\n    },\n    {\n      widgetName: 'config',\n      widgetFunc: (props) => <Config {...props} />,\n      mapStateToProps: ['gist', 'infoBox'],\n    },\n    {\n      widgetName: 'widget',\n      widgetFunc: (props) => <WidgetDocs {...props} />,\n      mapStateToProps: ['gist', 'infoBox'],\n    },\n  ],\n};\n\nexport default config;\n")),(0,i.kt)("p",null,"When the widget component is rendered it will receive the following props:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"actionProvider: the actionprovider class you have defined, so you can trigger other actions from your custom components."),(0,i.kt)("li",{parentName:"ul"},"setState: setState function that can manipulate the top level chatbot state."),(0,i.kt)("li",{parentName:"ul"},"scrollIntoView: helper function to scroll content into view when doing asynchronous calls, use in combination with useEffect when updating to state to ensure that the chat window is scrolled to bottom."),(0,i.kt)("li",{parentName:"ul"},'state: Any piece of state you defined in the mapStateToProps section of the config. The name of the prop will be the same as the property name defined in "mapStateToProps".'),(0,i.kt)("li",{parentName:"ul"},"props: any piece of props you defined in the props section of the config.")))}u.isMDXComponent=!0}}]);