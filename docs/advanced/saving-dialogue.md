---
title: Saving dialogue
---

In order to save the chatbot dialogue you can choose to provide a save method and a load method to the chatbot as props:

```js
import React, { useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import config from './config';
import actionProvider from './actionProvider.js';
import messageParser from './messageParser.js';

function App() {
  const [showBot, toggleBot] = useState(false);

  const saveMessages = (messages, HTMLString) => {
    localStorage.setItem('chat_messages', JSON.stringify(messages));
  };

  const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem('chat_messages'));
    return messages;
  };

  return (
    <div className='App'>
      {showBot && (
        <Chatbot
          config={config}
          actionProvider={actionProvider}
          messageHistory={loadMessages()}
          messageParser={messageParser}
          saveMessages={saveMessages}
        />
      )}
      <button onClick={() => toggleBot((prev) => !prev)}>Bot</button>
    </div>
  );
}

export default App;
```

## Rendering static content

This will save the content of the state objects messages array and will load up the content when the chatbot is next mounted.

The saveMessages receives two inputs:

- The messages array from state
- The HTML content of the chatbot messages container

If you choose to save the HTML string and return the string from your loadMessages function, the content will be inserted as HTML instead of evaluating the array again when the chatbot loads (which may be counter intuitive if you have a lot of widget interactivity).

NOTE: Keep in mind that saving the HTML will save the state exactly as it was when the chatbot was closed, and any interactivity will be lost.
