---
title: Configuration
---

Here is an overview over all possible react-chatbot-kit configuration options:

## initialMessages

- type: array
- function: The initialmessages that the chatbot trigger when it mounts.
- required: yes

### Example

```js
const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`)],
};
```

## botName

- type: string
- function: Sets the name of the chatbot in the header of the bot.
- required: no

### Example

```js
const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`)],
  botName: 'ExampleBot',
};
```

## customStyles

- type: object
- function: Allows you to override some of the default styles of the chatbot through the config
- required: no

### Example

```js
const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`)],
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
};
```

## state

- type: object
- function: Allows you to set properties to inject into the internal chatbot state
- required: no

### Example

```js
const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`)],
  state: {
    myCustomProperty: 'Bikershorts',
  },
};
```

## customComponents

- type: object
- function: Allows you to replace some of the stock components from react-chatbot-kit with your own components
- required: no

### Example

```js
const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`)],
 customComponents: {
     // Replaces the default header
    header: () => <div style={{ backgroundColor: 'red', padding: "5px", borderRadius: "3px" }}>This is the header</div>
    // Replaces the default bot avatar
    botAvatar: (props) => <MyAvatar {...props} />,
    // Replaces the default bot chat message container
    botChatMessage: (props) => <MyCustomChatMessage {...props} />,
    // Replaces the default user icon
    userAvatar: (props) => <MyCustomAvatar {...props} />,
    // Replaces the default user chat message
    userChatMessage: (props) => <MyCustomUserChatMessage {...props} />
  },
};
```

## Widgets

- type: object
- function: Allows you to specify custom react components that you can render into the chat window with a chatbot response
- required: no

### Example

```js
const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`)],
  widgets: [
    {
      // defines the name you will use to reference to this widget in "createChatBotMessage".
      widgetName: 'singleFlight',
      // Function that will be called internally to resolve the widget
      widgetFunc: (props) => <SingleFlight {...props} />,
      // Any props you want the widget to receive on render
      props: {},
      // Any piece of state defined in the state object that you want to pass down to this widget
      mapStateToProps: ['selectedFlightId', 'selectedFlight'],
    },
  ],
};
```
