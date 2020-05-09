import React from "react";

import Link from "./Link";

const ManageParkingLink = ({ selectedAirport }) => {
  const getUrl = () => {
    return `https://avinor.no/en/ManageBooking/${selectedAirport.iata}`;
  };

  return <Link url={getUrl()} title={"manage parking on Avinor.no"} />;
};

export default ManageParkingLink;
