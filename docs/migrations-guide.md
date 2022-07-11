---
title: Migration Guide
slug: /
---

<!-- @format -->

# react-chatbot-kit 2.1.0

> React chatbot kit is now being updated to use react components for the ActionProvider and MessageParser. In the next major version the support for old class components will be removed.

New version brings:

- Ability to write ActionProvider and MessageParser in react
- Payloads for custom components and widgets

The reason for this update is that the old class components are not compatible with new react ecosystem capabilities, like hooks, and the new components are more powerful and easier to use.

# react-chatbot-kit 2.0.0

Finally a new version of react-chatbot-kit is ready. The 2.0 version brings:

- External CSS stylesheet for greater CSS customization
- Custom messages
- Typescript support
- NextJS support
- Code quality improvements, fixes and refactoring

## Migrating

Most of the features added to react-chatbot-kit are backwards compatible. The only thing that is not backwards compatible is the external CSS stylesheet. If you are an on an earlier version of react-chatbot-kit simply add the following to your import:

```js
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
```

And that's it! Not to painful.

Now you're ready to enjoy the new chatbot features.
