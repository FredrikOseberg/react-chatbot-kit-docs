import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Overview from "../components/widgets/Overview/Overview";
import MessageParserDocs from "../components/widgets/docs/MessageParserDocs/MessageParserDocs";
import ActionProviderDocs from "../components/widgets/docs/ActionProviderDocs/ActionProviderDocs";
import Config from "../components/widgets/docs/Config/Config";
import WidgetDocs from "../components/widgets/docs/WidgetDocs/WidgetDocs";

const botName = "DocsBot";

const config = {
  botName: botName,
  lang: "no",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  initialMessages: [
    createChatBotMessage(
      `Hi I'm ${botName}. I’m here to help you explain how I work.`
    ),
    createChatBotMessage(
      "Here's a quick overview over what I need to function. ask me about the different parts to dive deeper.",
      {
        withAvatar: false,
        delay: 500,
        widget: "overview",
      }
    ),
  ],
  state: {
    gist: "",
    infoBox: "",
  },
  customComponents: {},
  widgets: [
    {
      widgetName: "overview",
      widgetFunc: (props) => <Overview {...props} />,
      mapStateToProps: ["gist"],
    },
    {
      widgetName: "messageParser",
      widgetFunc: (props) => <MessageParserDocs {...props} />,
      mapStateToProps: ["gist", "infoBox"],
    },
    {
      widgetName: "actionProviderDocs",
      widgetFunc: (props) => <ActionProviderDocs {...props} />,
      mapStateToProps: ["gist", "infoBox"],
    },
    {
      widgetName: "config",
      widgetFunc: (props) => <Config {...props} />,
      mapStateToProps: ["gist", "infoBox"],
    },
    {
      widgetName: "widget",
      widgetFunc: (props) => <WidgetDocs {...props} />,
      mapStateToProps: ["gist", "infoBox"],
    },
  ],
};

export default config;
