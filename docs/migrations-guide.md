---
title: Migration Guide
slug: /
---

# React-chatbot-kit 2.0 is here!

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
