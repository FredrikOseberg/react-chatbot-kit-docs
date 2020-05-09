import React from "react";

import Options from "../Options/Options";

const GeneralOptions = props => {
  const options = [
    {
      name: "flights",
      handler: props.actionProvider.handleFlightsChoice,
      id: 1
    },
    { name: "baggage", handler: props.actionProvider.handleLostLuggage, id: 2 },
    {
      name: "parking",
      handler: props.actionProvider.handleParkingOptions,
      id: 3
    },
    {
      name: "switch airport",
      handler: props.actionProvider.handleAirport,
      id: 5
    }
  ];
  return <Options options={options} title="Options" {...props} />;
};

export default GeneralOptions;
