import React from "react";
import Gist from "react-gist";

import DocsContainer from "../../DocsContainer/DocsContainer";

import { ReactComponent as CogsIcon } from "../../../assets/icons/cogs.svg";

import "./ConfigSection.css";

const ConfigSection = () => {
  return (
    <div className="app-config-section">
      <div className="app-config-section-gist-container">
        <Gist id="af04e2e30407671412af08fa3c429409" />
      </div>

      <div className="app-config-section-docs-container">
        <div className="app-config-section-docs-inner-container">
          <DocsContainer
            title="Configuration"
            icon={<CogsIcon className="app-config-section-icon" />}
          >
            <p>
              The configuration controls all configurable elements of the
              chatbot. The minimum config you can use in order to get the
              chatbot to work is a config that includes the "initialMessages"
              property. It instructs the chatbot what messages to display on
              render.
            </p>
          </DocsContainer>

          <DocsContainer title="Properties">
            <ul className="app-config-section-docs-list">
              <li className="app-config-section-docs-listitem">
                botName - defines the name of the bot
              </li>
              <li className="app-config-section-docs-listitem">
                customStyles - object defining custom styles for different
                elements. See gist for details.
              </li>
              <li className="app-config-section-docs-listitem">
                initialMessages - defines an array of initial messages from the
                bot. Required property.
              </li>
              <li className="app-config-section-docs-listitem">
                state - defines state you want to place into the chatbot
                component.
              </li>
              <li className="app-config-section-docs-listitem">
                customComponents - you can define your own components and swap
                out the components that come with react-chatbot-kit by replacing
                them here. For example if you want your own custom chatmessage
                component for the bot.
              </li>
              <li className="app-config-section-docs-listitem">
                widgets - here you can define a list of widgets that you want to
                be able to render with a chatbot response. See the widget
                documentation for more information.
              </li>
            </ul>
          </DocsContainer>
          <a
            href="https://gist.github.com/FredrikOseberg/87795296efb67fe76fa05fc839d22e25"
            target="_blank"
            rel="noopener noreferrer"
            className="app-gists-link"
          >
            View all configurable properties
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConfigSection;
