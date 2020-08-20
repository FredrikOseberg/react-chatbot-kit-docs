import React from "react";
import { Chatbot } from "react-chatbot-kit";

import GithubLink from "./GithubLink";

import docsbotConfig from "../../../bots/docsbot/config";
import docsbotMessageParser from "../../../bots/docsbot/MessageParser";
import docsbotActionProvider from "../../../bots/docsbot/ActionProvider";

import skybotConfig from "../../../bots/skybot/config";
import skybotMessageParser from "../../../bots/skybot/MessageParser";
import skybotActionProvider from "../../../bots/skybot/ActionProvider";

import "./ExamplesSection.css";

const ExamplesSection = () => {
  return (
    <div className="app-examples-section" id="examples">
      <div className="app-examples-docsbot">
        <div className="app-examples-docsbot-container">
          <div className="app-examples-docsbot-description">
            <h1>Docsbot</h1>
            <p>
              DocsBot is your friendly neighbourhood bot who is not only built
              with this package, but is eager to help you understand how it all
              fits together.
            </p>

            <GithubLink linkText="View source code" link="https://github.com" />
          </div>
          <div className="app-examples-docsbot">
            <div className="app-examples-docsbot-bot-container">
              <Chatbot
                config={docsbotConfig}
                messageParser={docsbotMessageParser}
                actionProvider={docsbotActionProvider}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="app-examples-skybot">
        <div className="app-examples-skybot-container">
          <div className="app-examples-skybot">
            <div className="app-examples-skybot-bot-container">
              <Chatbot
                config={skybotConfig}
                messageParser={skybotMessageParser}
                actionProvider={skybotActionProvider}
              />
            </div>
          </div>

          <div className="app-examples-skybot-description">
            <h1>Skybot</h1>
            <p>
              Skybot is the bot that sparked the idea for this package. It was
              originally built as a proof of concept and exploration of cloud
              services, but quickly morphed into this package.
            </p>
            <GithubLink
              linkText="View source code"
              link="https://github.com/FredrikOseberg/react-chatbot-kit-docs/tree/master/src/bots/skybot"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamplesSection;
