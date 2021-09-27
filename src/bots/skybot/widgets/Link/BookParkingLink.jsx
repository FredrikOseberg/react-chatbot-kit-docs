import React from "react";

import Link from "./Link";

const BookParkingLink = ({ selectedAirport }) => {
  const getUrl = () => {
    return `https://avinor.no/en/airport/${selectedAirport.nameCompact}-airport/parking/`;
  };

  return <Link url={getUrl()} title={"book parking on Avinor.no"} />;
};

export default BookParkingLink;
