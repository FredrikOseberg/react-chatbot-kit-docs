---
title: Create your first response
---

<!-- @format -->

The chatbot should now be operational, but supplying a message through the input field will not
trigger a response. This needs to be configured by you through the ActionProvider and the MessageParser.

## Step 1: Setting up a parser rule

Every message that the user sends is passed through the MessageParser's parse function. Inside of this function you can provide a ruleset that decides which action to trigger. Open up MessageParser.js and add the following in the parse function:

```js
// in MessageParser.jsx

import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes('hello')) {
      console.log('hi');
    }
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

For now, we'll put a console log in the ruleset.

## Step 2: Add an action

Now that we have a ruleset, we need to create an action to trigger. Open up ActionProvider.js and add the following method:

```js
// in ActionProvider.jsx
import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
```

Inside if handleHello, we are creating a new chatbotMessage and inserting it into state using the setState function. These functions are passed to the ActionProvider upon initialization of the chatbot and can manipulate the internal chatbot state. Furthermore we are passing the action we created down to the MessageParser component by altering the render function.

## Step 3: Trigger the action in the messageparser

Now that we have created our action, we can trigger it inside our ruleset in the MessageParser:

```js
// in MessageParser.js
import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes('hello')) {
      actions.handleHello();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
```

## Step 4: Test your response

In the browser, open up the page where you have your Chatbot displayed and try to type "hello chatbot" into the inputfield. You should receive a response from the Chatbot with the text: 'Hello, nice to meet you.'

## Nice job

Great, you have now created your first chatbot response.
