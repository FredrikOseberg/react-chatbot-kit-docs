import React from "react";
import ChatBot from "react-chatbot-kit";

import GradientBackground from "./components/GradientBackground/GradientBackground";
import { ReactComponent as Logo } from "./assets/icons/logo.svg";

import config from "./configs/chatbotConfig";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";

import "./App.css";

function App() {
  return (
    <div className="App">
      <GradientBackground>
        <Logo style={{ paddingTop: "40px", height: "150px", width: "150px" }} />
        <h1>React-chatbot-kit</h1>
        <div className="app-chatbot-container">
          <ChatBot
            config={config}
            MessageParser={MessageParser}
            ActionProvider={ActionProvider}
          />
        </div>
      </GradientBackground>
    </div>
  );
}

export default App;
