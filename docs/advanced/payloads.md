---
title: Payloads
---

When adding chatbot messages, sometimes you may want to pass a payload from the call site that does not go through state. One drawback of going through state is that every component that subscribes to the same state will update once that state changes. If you want your components to act receive and use static data, you may want to send this data as a payload when setting the message. The payload object can added to any message object.

```jsx
const message = createChatbotMessage('hello', {
  payload: { age: 18, name: 'Christina' },
});

const customMessage = createCustomMessage('hello', {
  payload: { weather: 'sunny', activity: 'football' },
});
```
