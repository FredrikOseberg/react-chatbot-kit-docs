---
title: Chatbot properties
---

The chatbot takes the following properties:

```js
<Chatbot
  actionProvider={actionProvider}
  messageParser={messageParser}
  config={config}
  headerText='Chatbot'
  placeholderText='Input placeholder'
  messageHistory={loadMessages()}
  saveMessages={saveMessages}
  validator={validateInput}
  runInitialMessagesWithHistory
  disableScrollToBottom
/>
```

## actionProvider

- type: class
- required: yes

The actionprovider is a class that implements the actionProvider interface. It's job is to update the state of the chatbot and create actions to update the UI.

It receives the following parameters on initialization:

```js
const actionProv = new actionProvider(
  createChatBotMessage,
  setState,
  createClientMessage,
  stateRef.current,
  createCustomMessage,
  rest
);
```

- createChatbotMessage: function
- setState: function
- createClientMessage: function
- stateRef: object
- createCustomMessage: function
- rest parameters: array

```js
class ActionProvider {
  // The action provider receives createChatBotMessage which you can use to define the bots response, and
  // the setState function that allows for manipulating the bots internal state.
  constructor(
    createChatBotMessage,
    setStateFunc,
    createClientMessage,
    stateRef,
    createCustomMessage,
    ...rest
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
    this.createCustomMessage = createCustomMessage;
  }

  handleMessageParser = () => {
    const messages = this.createChatBotMessage(
      'The message parser controls how the bot reads input and decides which action to invoke.',
      { widget: 'messageParser', withAvatar: true }
    );

    this.addMessageToBotState(messages);
  };

  handleDefault = () => {
    const message = this.createChatBotMessage('How can I help?', {
      withAvatar: true,
    });

    this.addMessageToBotState(message);
  };

  addMessageToBotState = (messages) => {
    if (Array.isArray(messages)) {
      this.setState((state) => ({
        ...state,
        messages: [...state.messages, ...messages],
      }));
    } else {
      this.setState((state) => ({
        ...state,
        messages: [...state.messages, messages],
      }));
    }
  };
}

export default ActionProvider;
```

## messageParser

- type: Class
- required: yes

The messageparser receives the user input and decides which action to invoke from the action provider. It receives the action provider as the first argument, and a reference to the state as the second argument on initialization.

```js
class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    // State represents the chatbot state and is passed
    // in at initalization. You can use it to read chatbot state
    // inside the messageParser
    this.state = state;
  }

  parse = (message) => {
    const lowerCase = message.toLowerCase();

    if (
      lowerCase.includes('messageparser') ||
      lowerCase.includes('parse') ||
      lowerCase.includes('parser') ||
      lowerCase.includes('message parser')
    ) {
      return this.actionProvider.handleMessageParser();
    }
    return this.actionProvider.handleDefault();
  };
}

export default MessageParser;
```

## config

- type: object
- required: yes

The config allows you to configure the chatbot as you'd like, register widgets, custom messages and change out components and colors:

```js
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import SingleFlight from './components/SingleFlight/SingleFlight'

const botName = "Somebot";

const config = {
  // Defines the chatbot name
  botName: botName,
  // Defines an array of initial messages that will be displayed on first render
  initialMessages: [
    createChatBotMessage(`Hi I'm ${botName}`),
    createChatBotMessage(
      "First things first, which airport are you looking for information from?",
      {
        widget: "airportSelector",
        delay: 500,
      }
    ),
  ],
  // Defines an object that will be injected into the chatbot state, you can use this state in widgets for example
  state: {
    airports: [],
    flightType: "",
    selectedFlightId: "",
    selectedFlight: null,
  },
  // Defines an object of custom components that will replace the stock chatbot components.
  customComponents: {
     // Replaces the default header
    header: () => <div style={{ backgroundColor: 'red', padding: "5px", borderRadius: "3px" }}>This is the header</div>
    // Replaces the default bot avatar
    botAvatar: (props) => <FlightBotAvatar {...props} />,
    // Replaces the default bot chat message container
    botChatMessage: (props) => <CustomChatMessage {...props} />,
    // Replaces the default user icon
    userAvatar: (props) => <MyUserAvatar {...props} />,
    // Replaces the default user chat message
    userChatMessage: (props) => <MyUserChatMessage {...props} />
  },
  // Register your own set of components as custom message types
  customMessages: {
      "custom": (props) => <MyCustomMessage {...props} />
  },
  // Defines an object of custom styles if you want to override styles
  customStyles: {
    // Overrides the chatbot message styles
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    // Overrides the chat button styles
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  }
  // Defines an array of widgets that you want to render with a chatbot message
  widgets: [
    {
      // defines the name you will use to reference to this widget in "createChatBotMessage".
      widgetName: "singleFlight",
      // Function that will be called internally to resolve the widget
      widgetFunc: (props) => <SingleFlight {...props} />,
      // Any props you want the widget to receive on render
      props: {},
      // Any piece of state defined in the state object that you want to pass down to this widget
      mapStateToProps: [
        "selectedFlightId",
        "selectedFlight",
      ],
    },
  ],
};

export default config;
```

## headerText

- type: string
- required: no

A string that defines what should be the headerText, will replace the default headerText.

## placeholderText

- type: string
- required: no

A string that defines the input field placeholder text.

## saveMessages

- type: function
- signature: `js (messages, HTMLText) => void`
- required: no

A function that returns the messages and the HTMLText to be saved to to any storage location.

## messageHistory

- type: []Message | string
- required: no

An array of messages or a string that will be displayed as the message history. If the element is a string it will be inserted as raw HTML into the chatbot inner container.

## validator

- type: function
- required: no

A function that will be called on every message to validate the message. If the function returns false the message will not be sent to the messageParser.

## runInitialMessagesWithHistory

- type: boolean
- required: no

If you return a HTML string as message history but still want to provide interactivity and begin the chatbot with initial messages defined in config after the HTML is inserted, you can set this flag to true.

## disableScrollToBottom

- type: boolean
- required: no

A flag to turn off automatic scrolling of the message window to the bottom.
