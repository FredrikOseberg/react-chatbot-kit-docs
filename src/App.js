import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import { ConditionallyRender } from "react-util-kit";
import Gist from "react-gist";

import GradientBackground from "./components/GradientBackground/GradientBackground";
import ConfigSection from "./components/pagesections/ConfigSection/ConfigSection";
import MessageParserSection from "./components/pagesections/MessageParserSection/MessageParserSection";
import ActionProviderSection from "./components/pagesections/ActionProviderSection/ActionProviderSection";
import WidgetSection from "./components/pagesections/WidgetSection/WidgetSection";
import ExamplesSection from "./components/pagesections/ExamplesSection/ExamplesSection";

import { ReactComponent as Logo } from "./assets/icons/logo.svg";
import { ReactComponent as ButtonIcon } from "./assets/icons/robot.svg";

import config from "./bots/docsbot/config";
import MessageParser from "./bots/docsbot/MessageParser";
import ActionProvider from "./bots/docsbot/ActionProvider";

import "./App.css";

function App() {
  const [showChatbot, toggleChatbot] = useState(true);

  return (
    <div className="App">
      <GradientBackground>
        <Logo style={{ paddingTop: "40px", height: "150px", width: "150px" }} />
        <h1 className="app-header">React-chatbot-kit</h1>
        <div className="app-chatbot-container">
          <ConditionallyRender
            ifTrue={showChatbot}
            show={
              <Chatbot
                config={config}
                MessageParser={MessageParser}
                ActionProvider={ActionProvider}
              />
            }
          />
        </div>

        <button
          className="app-chatbot-button"
          onClick={() => toggleChatbot((prev) => !prev)}
        >
          <ButtonIcon className="app-chatbot-button-icon" />
        </button>

        <div className="app-overview">
          <h2 className="app-header">Overview</h2>
          <p className="app-paragraph">
            The chatbot works by importing it and giving it a messageparser, a
            config and an actionprovider. Scroll on to view more information
            about each part. Or ask the bot.
          </p>
          <div className="app-overview-gist-container">
            <Gist id="21ad31cad1298ead0115719cce8587f0" />
          </div>
        </div>
      </GradientBackground>
      <ConfigSection />
      <MessageParserSection />
      <ActionProviderSection />
      <WidgetSection />
      <ExamplesSection />
    </div>
  );
}

export default App;
