import React, { useState, useEffect } from "react";
import { ConditionallyRender } from "react-util-kit";

import "./AirportSelector.css";

const AirportSelector = ({ selectedAirport, setState, actionProvider }) => {
  const [displaySelector, toggleDisplaySelector] = useState(true);
  const [airports, setAirports] = useState([]);

  const airportOptions = [
    {
      iata: "OSL",
      nameCompact: "Oslo",
    },
    {
      iata: "BOO",
      nameCompact: "Bodo",
    },
    {
      iata: "BGO",
      nameCompact: "Bergen",
    },
    {
      iata: "KRS",
      nameCompact: "Kristiansand",
    },
    {
      iata: "SVG",
      nameCompact: "Stavanger",
    },
    {
      iata: "TOS",
      nameCompact: "Tromso",
    },
    {
      iata: "TRD",
      nameCompact: "Trondheim",
    },
    {
      iata: "AES",
      nameCompact: "Alesund",
    },
  ];

  useEffect(() => {
    setAirports(airportOptions);
  }, []);

  const handleSubmit = (e) => {
    setState((state) => ({
      ...state,
      selectedAirport: airports.find(
        (airport) => airport.iata === e.target.value
      ),
    }));
  };

  const handleConfirm = () => {
    actionProvider.handleOptions();
    toggleDisplaySelector((prevState) => !prevState);
  };

  if (!airports) return null;

  const createAirportOptions = () => {
    return airports.map((item) => {
      return (
        <option key={item.iata} value={item.iata}>
          {item.nameCompact}
        </option>
      );
    });
  };

  return (
    <div className="airport-selector-container">
      <ConditionallyRender
        ifTrue={displaySelector}
        show={
          <>
            {" "}
            <h2 className="airport-selector-heading">Airport</h2>
            <select
              className="airport-selector"
              value={selectedAirport.iata}
              onChange={handleSubmit}
            >
              {createAirportOptions()}
            </select>
            <button className="airport-button-confirm" onClick={handleConfirm}>
              Confirm
            </button>
          </>
        }
        elseShow={
          <>
            <h2 className="airport-selector-heading">Airport</h2>
            <p>
              Great! You have chosen this airport: {selectedAirport.nameCompact}
            </p>
          </>
        }
      />
    </div>
  );
};

export default AirportSelector;
