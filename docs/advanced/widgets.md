---
title: Widgets
---

Widgets are custom components that you can render with chatbot messages.

In order to use widgets, you need to register them in the config. Here you will define the following properties:

- widgetName: defines the name of the widget
- widgetFunc: define a function that returns the component. The function must take props and spread it into the component.
- mapStateToProps: Defines which state properties you defined in config should be injected into the widget component. Use if you want to control state access.
  -props: optional array of props you want to pass to your component.

```js
import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';

import Overview from './widgets/Overview/Overview';
import MessageParserDocs from './widgets/docs/MessageParserDocs/MessageParserDocs';
import ActionProviderDocs from './widgets/docs/ActionProviderDocs/ActionProviderDocs';
import Config from './widgets/docs/Config/Config';
import WidgetDocs from './widgets/docs/WidgetDocs/WidgetDocs';
import { createCustomMessage } from 'react-chatbot-kit';
import CustomMessage from './CustomMessage';

const botName = 'DocsBot';

const config = {
  botName: botName,
  lang: 'no',
  initialMessages: [
    createChatBotMessage(
      `Hi I'm ${botName}. I’m here to help you explain how I work.`
    ),
    createChatBotMessage(
      "Here's a quick overview over what I need to function. ask me about the different parts to dive deeper.",
      {
        withAvatar: false,
        delay: 500,
        widget: 'overview',
      }
    ),
  ],
  state: {
    gist: '',
    infoBox: '',
  },
  widgets: [
    {
      widgetName: 'overview',
      widgetFunc: (props) => <Overview {...props} />,
      mapStateToProps: ['gist'],
    },
    {
      widgetName: 'messageParser',
      widgetFunc: (props) => <MessageParserDocs {...props} />,
      mapStateToProps: ['gist', 'infoBox'],
    },
    {
      widgetName: 'actionProviderDocs',
      widgetFunc: (props) => <ActionProviderDocs {...props} />,
      mapStateToProps: ['gist', 'infoBox'],
    },
    {
      widgetName: 'config',
      widgetFunc: (props) => <Config {...props} />,
      mapStateToProps: ['gist', 'infoBox'],
    },
    {
      widgetName: 'widget',
      widgetFunc: (props) => <WidgetDocs {...props} />,
      mapStateToProps: ['gist', 'infoBox'],
    },
  ],
};

export default config;
```

When the widget component is rendered it will receive the following props:

- actionProvider: the actionprovider class you have defined, so you can trigger other actions from your custom components.
- setState: setState function that can manipulate the top level chatbot state.
- scrollIntoView: helper function to scroll content into view when doing asynchronous calls, use in combination with useEffect when updating to state to ensure that the chat window is scrolled to bottom.
- state: Any piece of state you defined in the mapStateToProps section of the config. The name of the prop will be the same as the property name defined in "mapStateToProps".
- props: any piece of props you defined in the props section of the config.
