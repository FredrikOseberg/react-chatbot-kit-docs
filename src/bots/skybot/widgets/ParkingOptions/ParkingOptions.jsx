import React from "react";

import Options from "../Options/Options";

const ParkingOptions = props => {
  const options = [
    {
      name: "Book parking",
      handler: props.actionProvider.handleBookParking,
      id: 1
    },
    {
      name: "Manage booking",
      handler: props.actionProvider.handleManageParking,
      id: 2
    }
  ];
  return <Options options={options} title="Parking options" {...props} />;
};

export default ParkingOptions;
