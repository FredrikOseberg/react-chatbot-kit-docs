---
title: Configure your bot
---

The chatbot has a lot of configuration options. Let's explore some of them:

```js
// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'ExcitementBot';

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
};

export default config;
```

Here we are providing our bot with a name and overriding some of the built in styling to get another look and feel.

In order to see all possible configuration options. [Follow this link](/docs/advanced/configuration)
