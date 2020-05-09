import React from "react";
import Options from "../Options/Options";

const GeneralOptions = (props) => {
  const options = [
    {
      name: "messageparser",
      handler: props.actionProvider.handleMessageParserDocs,
      id: 1,
    },
    {
      name: "config",
      handler: props.actionProvider.handleConfigDocs,
      id: 2,
    },
    {
      name: "actionprovider",
      handler: props.actionProvider.handleActionProviderDocs,
      id: 3,
    },
    {
      name: "widgets",
      handler: props.actionProvider.handleWidgetDocs,
      id: 5,
    },
  ];

  return <Options options={options} />;
};

export default GeneralOptions;
