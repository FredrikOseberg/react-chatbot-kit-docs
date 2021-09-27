---
title: Create your first widget
---

Widgets are custom components that make this package extremely flexible. Since widgets are just
plain react components, only your imagination limits what you can build. In this guide we'll go ahead and implement our first widget.

## Step 1: Creating your first widget

We start by creating a regular react component:

```js
// new file called DogPicture.jsx
import React, { useEffect, useState } from 'react';

const DogPicture = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((data) => {
        setImageUrl(data.message);
      });
  }, []);

  return (
    <div>
      <img src={imageUrl} alt='a dog' />
    </div>
  );
};

export default DogPicture;
```

## Step 2: Register your widget in the configuration

Once we have completed our widget, we now need to register it in the config file:

```js
import DogPicture from '../components/DogPicture/DogPicture.jsx"

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`)],
  widgets: [
    {
      widgetName: 'dogPicture',
      widgetFunc: (props) => <DogPicture {...props} />,
    },
  ],
};
```

## Step 3: Create a new action in the ActionProvider

After the registration, we can now use the widget when we create a new chatbot message in the actionprovider by specifying the "widget" key in the options object given as the second argument to createChatbotMessage.

```js
class ActionProvider {
  constructor(createChatbotMessage, setStateFunc, createClientMessage) {
    this.createChatbotMessage = createChatbotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  handleDog() {
    const message = this.createChatbotMessage(
      "Here's a nice dog picture for you!",
      {
        widget: 'dogPicture',
      }
    );

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }
}

export default ActionProvider;
```

## Step 4: Trigger the action by adding a MessageParser rulesets

Finally, we need to create a rule that will trigger our new action and widget:

```js
// in MessageParser.js
class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    if (message.includes('hello')) {
      this.actionProvider.handleHello();
    }

    if (message.includes('dog')) {
      this.actionProvider.handleDog();
    }
  }
}
```

## Step 5: Test your new widget

Now you're ready to test your new widget. Start your project and navigate to the page where your chatbot is initialized. Try inputing any message including the word "dog" in the input field and see what the response is.

## That's it!

Nice job, you now know how to create and utilize widgets, which provides an extremely flexible way of creating different interactions for your chatbot.
