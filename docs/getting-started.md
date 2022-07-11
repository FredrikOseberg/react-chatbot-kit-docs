---
title: Getting Started
---

<!-- @format -->

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
ActionProvider.jsx
MessageParser.jsx
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
import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {},
        });
      })}
    </div>
  );
};

export default ActionProvider;
```

Inside of MessageParser.js, put the following content:

```js
import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    console.log(message);
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;
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
