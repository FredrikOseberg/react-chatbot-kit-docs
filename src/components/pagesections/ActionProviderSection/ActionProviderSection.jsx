import React from "react";
import Gist from "react-gist";

import DocsContainer from "../../DocsContainer/DocsContainer";

import { ReactComponent as BoltIcon } from "../../../assets/icons/bolt.svg";

import "./ActionProviderSection.css";

const ActionProviderSection = () => {
  return (
    <div className="app-actionprovider-section">
      <div className="app-actionprovider-section-gist-container">
        <Gist id="9c994790c6dd76f3d1d9dffac59ef2bb" />
      </div>

      <div className="app-actionprovider-section-docs-container">
        <div className="app-actionprovider-section-docs-inner-container">
          <DocsContainer
            title="ActionProvider"
            icon={<BoltIcon className="app-actionprovider-section-icon" />}
          >
            <p>
              The actionprovider controls what kind of action that the chatbot
              is going to perform. The actionprovider is given the
              createChatBotMessage and createClientMessage functions in the
              constructor, which you can use to create a new responses.
            </p>
          </DocsContainer>

          <DocsContainer title="createChatBotMessage">
            <p>
              The createChatBotMessage constructs a chatBotMessage that you can
              insert into the chatbots state. It defines the chat message
              response, and defines whether or not you want to render any custom
              components (widgets) with the response.
              <Gist id="2f0855a6fe8908bddc9f03db31d5caa4" />
            </p>
          </DocsContainer>

          <DocsContainer title="createClientMessage">
            <p>
              The createClientMessage is a function you can use inside the
              actionprovider in order to simulate a user message. It takes only
              a message parameter as input.
              <Gist id="c99040d422b9786c244d7c15b24d3672" />
            </p>
          </DocsContainer>

          <a
            href="https://gist.github.com/FredrikOseberg/9c994790c6dd76f3d1d9dffac59ef2bb#file-actionprovider-js"
            target="_blank"
            rel="noopener noreferrer"
            className="app-gists-link"
          >
            Go to gist
          </a>
        </div>
      </div>
    </div>
  );
};

export default ActionProviderSection;
