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
import SaveDialogueSection from "./components/pagesections/SaveDialogueSection/SaveDialogueSection";
import TutorialSection from "./components/pagesections/TutorialSection/TutorialSection";
import Menu from "./components/Menu/Menu";

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
        <Menu />
        <Logo style={{ paddingTop: "40px", height: "150px", width: "150px" }} />
        <h1 className="app-header">React-chatbot-kit</h1>
        <div className="app-npm-install">npm install react-chatbot-kit</div>
        <div className="app-chatbot-container">
          <ConditionallyRender
            ifTrue={showChatbot}
            show={
              <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
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

          <h2 className="app-header">Quickstart</h2>
          <p className="app-paragraph">
            To get started quickly, check out the following gist to get a
            scaffold for each part you need to provide to the chatbot.
          </p>
          <a
            href="https://gist.github.com/FredrikOseberg/c1e8ec83ade6e89ca84882e33caf599c"
            className="app-quickstart-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to gist
          </a>
        </div>
      </GradientBackground>
      <ConfigSection />
      <MessageParserSection />
      <ActionProviderSection />
      <WidgetSection />
      <SaveDialogueSection />
      <TutorialSection />
      <ExamplesSection />
    </div>
  );
}

export default App;
