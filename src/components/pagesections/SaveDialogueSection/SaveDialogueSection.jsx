import React from "react";
import Gist from "react-gist";

import DocsContainer from "../../DocsContainer/DocsContainer";

import "./SaveDialogueSection.css";

const SaveDialogueSection = () => {
  return (
    <div className="app-actionprovider-section">
      <div className="app-actionprovider-section-gist-container">
        <Gist id="8b3cfadeb1980bdb7b52cd4138d64542" />
      </div>

      <div className="app-actionprovider-section-docs-container">
        <div className="app-actionprovider-section-docs-inner-container">
          <DocsContainer title="Save Dialogue">
            <p>
              You can save dialogue in the chatbot by providing two props to the
              chatbot:
              <ul className="app-widget-section-docs-list">
                <li className="app-widget-section-docs-listitem">
                  messageHistory - an array of saved messages
                </li>
                <li className="app-widget-section-docs-listitem">
                  saveMessages - a function that receives messages and is run on
                  unmount
                </li>
              </ul>
            </p>
          </DocsContainer>

          <a
            href="https://gist.github.com/FredrikOseberg/8b3cfadeb1980bdb7b52cd4138d64542"
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

export default SaveDialogueSection;
