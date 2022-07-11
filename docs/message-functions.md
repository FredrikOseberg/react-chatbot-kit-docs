---
title: Creating messages
---

<!-- @format -->

# Message options

The package comes with builtin functions for generating messages. These functions are used to create messages that are either (a) a chatbot response, (b) a user message or (c) a custom message defined by the developer.

## Chatbot messages

Chatbot messages are messages that will be displayed as a response from the chatbot and is typically used as a reaction to user input:

```js
import { createChatBotMessage } from 'react-chatbot-kit';

const message = createChatBotMessage('Hello world!');

const messageWithProperties = createChatBotMessage('Hello world!', {
  widget: 'my-widget',
  payload: {}, // any value I want to send to the given widget or message
  delay: 1000,
});
```

## User messages

User messages are used to force a user response.

```js
import { createClientMessage } from 'react-chatbot-kit';

const message = createClientMessage('Hello world!');
```

## Custom messages

Custom messages are used to render messages defined by the developer.

```js
import { createCustomMessage } from 'react-chatbot-kit';
// 1st. argument is the text value, 2nd. argument is the name of the registered custom message.
const message = createCustomMessage('value to input', 'custom');
```
