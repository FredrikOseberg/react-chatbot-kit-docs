import React from "react";
import Gist from "react-gist";

import DocsContainer from "../../DocsContainer/DocsContainer";

import { ReactComponent as MessagesIcon } from "../../../assets/icons/comment-alt-dots.svg";

import "./MessageParserSection.css";

const MessageParserSection = () => {
  return (
    <div className="app-messageparser-section">
      <div className="app-messageparser-section-docs-container">
        <div className="app-messageparser-section-docs-inner-container">
          <DocsContainer
            title="MessageParser"
            icon={<MessagesIcon className="app-messageparser-section-icon" />}
          >
            <p>
              The message parser controls what happens when the user sends a
              message.
            </p>
            <p>
              You have to implement this yourself. The beauty of this is that
              you can make the message parsing as complex or as simple as you'd
              like.
            </p>
            <p>
              The only method that the message parser needs to implement is the
              "parse" method. This method is called inside the chatbot when it
              receives a message from the user.
            </p>
            <p>
              The final piece of the puzzle is the actionprovider. We'll take a
              look at that next. It will handle bot actions. It will come as no
              surprise then, that the actionprovider is given to the
              messageparser, so that the messageparser can invoke the correct
              actions after the message is parsed.
            </p>
          </DocsContainer>
          <a
            href="https://gist.github.com/FredrikOseberg/161bbcc7220ded5de7a1fce834d7fe99#file-messageparser-js"
            target="_blank"
            rel="noopener noreferrer"
            className="app-gists-link-dark"
          >
            Go to gist
          </a>
        </div>
      </div>

      <div className="app-messageparser-section-gist-container">
        <Gist id="161bbcc7220ded5de7a1fce834d7fe99" />
      </div>
    </div>
  );
};

export default MessageParserSection;
