"use strict";(self.webpackChunkrck_docs=self.webpackChunkrck_docs||[]).push([[223],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),h=s,g=p["".concat(l,".").concat(h)]||p[h]||d[h]||r;return a?n.createElement(g,o(o({ref:t},u),{},{components:a})):n.createElement(g,o({ref:t},u))}));function h(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,o=new Array(r);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},9890:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var n=a(7462),s=a(3366),r=(a(7294),a(3905)),o={title:"Chatbot properties"},i=void 0,l={unversionedId:"advanced/chatbot-props",id:"advanced/chatbot-props",isDocsHomePage:!1,title:"Chatbot properties",description:"The chatbot takes the following properties:",source:"@site/docs/advanced/chatbot-props.md",sourceDirName:"advanced",slug:"/advanced/chatbot-props",permalink:"/react-chatbot-kit-docs/docs/advanced/chatbot-props",tags:[],version:"current",frontMatter:{title:"Chatbot properties"},sidebar:"defaultSidebar",next:{title:"Configuration",permalink:"/react-chatbot-kit-docs/docs/advanced/configuration"}},c=[{value:"actionProvider",id:"actionprovider",children:[]},{value:"messageParser",id:"messageparser",children:[]},{value:"config",id:"config",children:[]},{value:"headerText",id:"headertext",children:[]},{value:"placeholderText",id:"placeholdertext",children:[]},{value:"saveMessages",id:"savemessages",children:[]},{value:"messageHistory",id:"messagehistory",children:[]},{value:"validator",id:"validator",children:[]},{value:"runInitialMessagesWithHistory",id:"runinitialmessageswithhistory",children:[]},{value:"disableScrollToBottom",id:"disablescrolltobottom",children:[]}],u={toc:c};function d(e){var t=e.components,a=(0,s.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The chatbot takes the following properties:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"<Chatbot\n  actionProvider={actionProvider}\n  messageParser={messageParser}\n  config={config}\n  headerText='Chatbot'\n  placeholderText='Input placeholder'\n  messageHistory={loadMessages()}\n  saveMessages={saveMessages}\n  validator={validateInput}\n  runInitialMessagesWithHistory\n  disableScrollToBottom\n/>\n")),(0,r.kt)("h2",{id:"actionprovider"},"actionProvider"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: class"),(0,r.kt)("li",{parentName:"ul"},"required: yes")),(0,r.kt)("p",null,"The actionprovider is a class that implements the actionProvider interface. It's job is to update the state of the chatbot and create actions to update the UI."),(0,r.kt)("p",null,"It receives the following parameters on initialization:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const actionProv = new actionProvider(\n  createChatBotMessage,\n  setState,\n  createClientMessage,\n  stateRef.current,\n  createCustomMessage,\n  rest\n);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"createChatbotMessage: function"),(0,r.kt)("li",{parentName:"ul"},"setState: function"),(0,r.kt)("li",{parentName:"ul"},"createClientMessage: function"),(0,r.kt)("li",{parentName:"ul"},"stateRef: object"),(0,r.kt)("li",{parentName:"ul"},"createCustomMessage: function"),(0,r.kt)("li",{parentName:"ul"},"rest parameters: array")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"class ActionProvider {\n  // The action provider receives createChatBotMessage which you can use to define the bots response, and\n  // the setState function that allows for manipulating the bots internal state.\n  constructor(\n    createChatBotMessage,\n    setStateFunc,\n    createClientMessage,\n    stateRef,\n    createCustomMessage,\n    ...rest\n  ) {\n    this.createChatBotMessage = createChatBotMessage;\n    this.setState = setStateFunc;\n    this.createClientMessage = createClientMessage;\n    this.stateRef = stateRef;\n    this.createCustomMessage = createCustomMessage;\n  }\n\n  handleMessageParser = () => {\n    const messages = this.createChatBotMessage(\n      'The message parser controls how the bot reads input and decides which action to invoke.',\n      { widget: 'messageParser', withAvatar: true }\n    );\n\n    this.addMessageToBotState(messages);\n  };\n\n  handleDefault = () => {\n    const message = this.createChatBotMessage('How can I help?', {\n      withAvatar: true,\n    });\n\n    this.addMessageToBotState(message);\n  };\n\n  addMessageToBotState = (messages) => {\n    if (Array.isArray(messages)) {\n      this.setState((state) => ({\n        ...state,\n        messages: [...state.messages, ...messages],\n      }));\n    } else {\n      this.setState((state) => ({\n        ...state,\n        messages: [...state.messages, messages],\n      }));\n    }\n  };\n}\n\nexport default ActionProvider;\n")),(0,r.kt)("h2",{id:"messageparser"},"messageParser"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: Class"),(0,r.kt)("li",{parentName:"ul"},"required: yes")),(0,r.kt)("p",null,"The messageparser receives the user input and decides which action to invoke from the action provider. It receives the action provider as the first argument, and a reference to the state as the second argument on initialization."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"class MessageParser {\n  constructor(actionProvider, state) {\n    this.actionProvider = actionProvider;\n    // State represents the chatbot state and is passed\n    // in at initalization. You can use it to read chatbot state\n    // inside the messageParser\n    this.state = state;\n  }\n\n  parse = (message) => {\n    const lowerCase = message.toLowerCase();\n\n    if (\n      lowerCase.includes('messageparser') ||\n      lowerCase.includes('parse') ||\n      lowerCase.includes('parser') ||\n      lowerCase.includes('message parser')\n    ) {\n      return this.actionProvider.handleMessageParser();\n    }\n    return this.actionProvider.handleDefault();\n  };\n}\n\nexport default MessageParser;\n")),(0,r.kt)("h2",{id:"config"},"config"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: object"),(0,r.kt)("li",{parentName:"ul"},"required: yes")),(0,r.kt)("p",null,"The config allows you to configure the chatbot as you'd like, register widgets, custom messages and change out components and colors:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import React from "react";\nimport { createChatBotMessage } from "react-chatbot-kit";\n\nimport SingleFlight from \'./components/SingleFlight/SingleFlight\'\n\nconst botName = "Somebot";\n\nconst config = {\n  // Defines the chatbot name\n  botName: botName,\n  // Defines an array of initial messages that will be displayed on first render\n  initialMessages: [\n    createChatBotMessage(`Hi I\'m ${botName}`),\n    createChatBotMessage(\n      "First things first, which airport are you looking for information from?",\n      {\n        widget: "airportSelector",\n        delay: 500,\n      }\n    ),\n  ],\n  // Defines an object that will be injected into the chatbot state, you can use this state in widgets for example\n  state: {\n    airports: [],\n    flightType: "",\n    selectedFlightId: "",\n    selectedFlight: null,\n  },\n  // Defines an object of custom components that will replace the stock chatbot components.\n  customComponents: {\n     // Replaces the default header\n    header: () => <div style={{ backgroundColor: \'red\', padding: "5px", borderRadius: "3px" }}>This is the header</div>\n    // Replaces the default bot avatar\n    botAvatar: (props) => <FlightBotAvatar {...props} />,\n    // Replaces the default bot chat message container\n    botChatMessage: (props) => <CustomChatMessage {...props} />,\n    // Replaces the default user icon\n    userAvatar: (props) => <MyUserAvatar {...props} />,\n    // Replaces the default user chat message\n    userChatMessage: (props) => <MyUserChatMessage {...props} />\n  },\n  // Register your own set of components as custom message types\n  customMessages: {\n      "custom": (props) => <MyCustomMessage {...props} />\n  },\n  // Defines an object of custom styles if you want to override styles\n  customStyles: {\n    // Overrides the chatbot message styles\n    botMessageBox: {\n      backgroundColor: "#376B7E",\n    },\n    // Overrides the chat button styles\n    chatButton: {\n      backgroundColor: "#5ccc9d",\n    },\n  }\n  // Defines an array of widgets that you want to render with a chatbot message\n  widgets: [\n    {\n      // defines the name you will use to reference to this widget in "createChatBotMessage".\n      widgetName: "singleFlight",\n      // Function that will be called internally to resolve the widget\n      widgetFunc: (props) => <SingleFlight {...props} />,\n      // Any props you want the widget to receive on render\n      props: {},\n      // Any piece of state defined in the state object that you want to pass down to this widget\n      mapStateToProps: [\n        "selectedFlightId",\n        "selectedFlight",\n      ],\n    },\n  ],\n};\n\nexport default config;\n')),(0,r.kt)("h2",{id:"headertext"},"headerText"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: string"),(0,r.kt)("li",{parentName:"ul"},"required: no")),(0,r.kt)("p",null,"A string that defines what should be the headerText, will replace the default headerText."),(0,r.kt)("h2",{id:"placeholdertext"},"placeholderText"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: string"),(0,r.kt)("li",{parentName:"ul"},"required: no")),(0,r.kt)("p",null,"A string that defines the input field placeholder text."),(0,r.kt)("h2",{id:"savemessages"},"saveMessages"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: function"),(0,r.kt)("li",{parentName:"ul"},"signature: ",(0,r.kt)("inlineCode",{parentName:"li"},"js (messages, HTMLText) => void")),(0,r.kt)("li",{parentName:"ul"},"required: no")),(0,r.kt)("p",null,"A function that returns the messages and the HTMLText to be saved to to any storage location."),(0,r.kt)("h2",{id:"messagehistory"},"messageHistory"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: []Message | string"),(0,r.kt)("li",{parentName:"ul"},"required: no")),(0,r.kt)("p",null,"An array of messages or a string that will be displayed as the message history. If the element is a string it will be inserted as raw HTML into the chatbot inner container."),(0,r.kt)("h2",{id:"validator"},"validator"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: function"),(0,r.kt)("li",{parentName:"ul"},"required: no")),(0,r.kt)("p",null,"A function that will be called on every message to validate the message. If the function returns false the message will not be sent to the messageParser."),(0,r.kt)("h2",{id:"runinitialmessageswithhistory"},"runInitialMessagesWithHistory"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: boolean"),(0,r.kt)("li",{parentName:"ul"},"required: no")),(0,r.kt)("p",null,"If you return a HTML string as message history but still want to provide interactivity and begin the chatbot with initial messages defined in config after the HTML is inserted, you can set this flag to true."),(0,r.kt)("h2",{id:"disablescrolltobottom"},"disableScrollToBottom"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: boolean"),(0,r.kt)("li",{parentName:"ul"},"required: no")),(0,r.kt)("p",null,"A flag to turn off automatic scrolling of the message window to the bottom."))}d.isMDXComponent=!0}}]);