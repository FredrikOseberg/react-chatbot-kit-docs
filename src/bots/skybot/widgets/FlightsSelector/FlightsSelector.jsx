import React from "react";

import "./FlightsSelector.css";

const FlightsSelector = (props) => {
  const { setState, actionProvider } = props;

  const setType = async (type) => {
    setState((state) => ({
      ...state,
      flightType: type,
    }));

    actionProvider.handleFlightTypeChoice(type);
  };

  return (
    <div>
      <h1 className="flight-selector-header">Arrival or departure?</h1>
      <div className="flight-selector-button-container">
        <button
          className="flights-selector-button"
          onClick={() => setType("arrival")}
        >
          Arrival
        </button>
        <button
          className="flights-selector-button"
          onClick={() => setType("departure")}
        >
          Departure
        </button>
      </div>
    </div>
  );
};

export default FlightsSelector;
