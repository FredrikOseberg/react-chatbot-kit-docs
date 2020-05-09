import React from "react";

import { ReactComponent as FlightIcon } from "../icons/plane-alt.svg";

const FlightBotAvatar = () => {
  return (
    <div className="chat-bot-avatar">
      <div className="chat-bot-avatar-container">
        <FlightIcon className="chat-bot-avatar-icon" />
      </div>
    </div>
  );
};

export default FlightBotAvatar;
