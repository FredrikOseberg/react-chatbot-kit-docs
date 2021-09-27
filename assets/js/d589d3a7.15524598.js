"use strict";(self.webpackChunkrck_docs=self.webpackChunkrck_docs||[]).push([[162],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=a,f=d["".concat(c,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9390:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i={title:"Getting Started"},s=void 0,c={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Step 1: Install react-chatbot-kit",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/react-chatbot-kit-docs/docs/getting-started",tags:[],version:"current",frontMatter:{title:"Getting Started"},sidebar:"docs",previous:{title:"Migration Guide",permalink:"/react-chatbot-kit-docs/docs/"},next:{title:"Create your first response",permalink:"/react-chatbot-kit-docs/docs/create-a-response"}},l=[{value:"Step 1: Install react-chatbot-kit",id:"step-1-install-react-chatbot-kit",children:[]},{value:"Step 2: Import the dependencies",id:"step-2-import-the-dependencies",children:[]},{value:"Step 3: Create the necessary files",id:"step-3-create-the-necessary-files",children:[]},{value:"Step 4: Initialize the chatbot",id:"step-4-initialize-the-chatbot",children:[]},{value:"That&#39;s it!",id:"thats-it",children:[]}],p={toc:l};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"step-1-install-react-chatbot-kit"},"Step 1: Install react-chatbot-kit"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install react-chatbot-kit\n")),(0,o.kt)("h2",{id:"step-2-import-the-dependencies"},"Step 2: Import the dependencies"),(0,o.kt)("p",null,"Import the following dependencies into the app:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"import Chatbot from 'react-chatbot-kit'\nimport 'react-chatbot-kit/build/main.css'\n")),(0,o.kt)("h2",{id:"step-3-create-the-necessary-files"},"Step 3: Create the necessary files"),(0,o.kt)("p",null,"The chatbot requires three dependencies in order to function. Create a directory in your project to keep the files related to the chatbot and create the following three files:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"config.js\nActionProvider.js\nMessageParser.js\n")),(0,o.kt)("p",null,"Inside of config.js, put the following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { createChatBotMessage } from 'react-chatbot-kit';\n\nconst config = {\n  initialMessages: [createChatBotMessage(`Hello world`)],\n};\n\nexport default config;\n")),(0,o.kt)("p",null,"Inside of ActionProvider.js, put the following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"class ActionProvider {\n  constructor(createChatbotMessage, setStateFunc, createClientMessage) {\n    this.createChatbotMessage = createChatbotMessage;\n    this.setState = setStateFunc;\n    this.createClientMessage = createClientMessage;\n  }\n}\n\nexport default ActionProvider;\n")),(0,o.kt)("p",null,"Inside of MessageParser.js, put the following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"class MessageParser {\n  constructor(actionProvider, state) {\n    this.actionProvider = actionProvider;\n    this.state = state;\n  }\n\n  parse(message) {\n    console.log(message);\n  }\n}\n")),(0,o.kt)("h2",{id:"step-4-initialize-the-chatbot"},"Step 4: Initialize the chatbot"),(0,o.kt)("p",null,"In the component you want to display the Chatbot, initalize the Chatbot in the following way:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import config from '../bot/config.js';\nimport MessageParser from '../bot/Messageparser.js';\nimport ActionProvider from '../bot/ActionProvider.js';\n\nconst MyComponent = () => {\n  return (\n    <div>\n      <Chatbot\n        config={config}\n        messageParser={MessageParser}\n        actionProvider={ActionProvider}\n      />\n    </div>\n  );\n};\n")),(0,o.kt)("h2",{id:"thats-it"},"That's it!"),(0,o.kt)("p",null,"Congratulations! You should now have the Chatbot up and running in your project."))}u.isMDXComponent=!0}}]);