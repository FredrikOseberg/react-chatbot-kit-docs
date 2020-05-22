import React from "react";

import { ReactComponent as FlightIcon } from "../icons/plane-alt.svg";

const FlightBotAvatar = () => {
  return (
    <div className="react-chatbot-kit-chat-bot-avatar">
      <div className="react-chatbot-kit-chat-bot-avatar-container">
        <FlightIcon className="react-chatbot-kit-chat-bot-avatar-icon" />
      </div>
    </div>
  );
};

export default FlightBotAvatar;
