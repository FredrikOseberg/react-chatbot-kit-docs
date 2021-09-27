---
title: Getting Started
---

## Step 1: Install react-chatbot-kit

```shell
npm install react-chatbot-kit
```

## Step 2: Import the dependencies

Import the following dependencies into the app:

```shell
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
```

## Step 3: Create the necessary files

The chatbot requires three dependencies in order to function. Create a directory in your project to keep the files related to the chatbot and create the following three files:

```
config.js
ActionProvider.js
MessageParser.js
```

Inside of config.js, put the following content:

```js
import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  initialMessages: [createChatBotMessage(`Hello world`)],
};

export default config;
```

Inside of ActionProvider.js, put the following content:

```js
class ActionProvider {
  constructor(createChatbotMessage, setStateFunc, createClientMessage) {
    this.createChatbotMessage = createChatbotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }
}

export default ActionProvider;
```

Inside of MessageParser.js, put the following content:

```js
class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    console.log(message);
  }
}
```

## Step 4: Initialize the chatbot

In the component you want to display the Chatbot, initalize the Chatbot in the following way:

```js
import config from '../bot/config.js';
import MessageParser from '../bot/Messageparser.js';
import ActionProvider from '../bot/ActionProvider.js';

const MyComponent = () => {
  return (
    <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};
```

## That's it!

Congratulations! You should now have the Chatbot up and running in your project.
