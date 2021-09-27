---
title: Custom messages
---

In case you you need to customize the messages you want to display in the bot, you can create react components that you can render at will by defining the component and registering it in the config:

## Create the custom message

```js
import React from 'react';

const CustomMessage = () => {
  return (
    <img
      src='https://i.pinimg.com/originals/cf/da/fa/cfdafa4dc6aab40eae1c5315c02b9339.jpg'
      style={{ width: '100%' }}
    />
  );
};

export default CustomMessage;
```

## Register the custom message

```js
// in the config
import React from 'react';
import {
  createChatBotMessage,
  createCustomMessage,
} from 'react-chatbot-kit';
import CustomMessage from './CustomMessage';

const botName = 'DocsBot';

const config = {
  botName: botName,
  lang: 'no',
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
  initialMessages: [
    createChatBotMessage(
      `Hi I'm ${botName}. I’m here to help you explain how I work.`
    ),
    createChatBotMessage(
      "Here's a quick overview over what I need to function. ask me about the different parts to dive deeper.",
      {
        withAvatar: false,
        delay: 500,
      }
    ),
    createCustomMessage('Test', 'custom'),
  ],
  state: {
    gist: '',
    infoBox: '',
  },
  customComponents: {},
  customMessages: {
    custom: (props) => <CustomMessage {...props} />,
  },
  widgets: [],
};

export default config;
```

This allows you ultimate flexibility and creating custom messages that you can render at will by invoking the createCustomMessage function. The custom messages can also take widgets just like regular chatbot messages can.

You also have access to the createCustomMessage function inside of the action provider which means you can use it to respond to user input as well.

The custom messages receive the following properties when they are invoked:

- setState: the chatbot setState function. Used to access all chatbot state if necessary.
- state: The actual state object
- scrollIntoView: a function that scrolls the message container to the bottom.
- actionProvider: the actionProvider class in order to invoke actions if necessary.
