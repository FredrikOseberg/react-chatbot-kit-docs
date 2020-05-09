import React, { useState, useEffect } from "react";

import { ReactComponent as DepartureFlight } from "../../icons/plane-departure.svg";
import { ReactComponent as ArrivalFlight } from "../../icons/plane-arrival.svg";
import { ReactComponent as Arrows } from "../../icons/arrows-h.svg";

import { getFlightsData } from "../../data/data";

import "./SingleFlight.css";
import { ConditionallyRender } from "react-util-kit";

const SingleFlight = ({
  selectedFlightId,
  selectedAirport,
  scrollIntoView,
}) => {
  const [selectedFlight, setSelectedFlight] = useState(null);

  const { iata } = selectedAirport;

  useEffect(() => {
    const getFlight = (arr) =>
      arr.filter((flight) => flight.FlightId === selectedFlightId)[0];

    const getFlights = async () => {
      let newFlights = await getFlightsData(iata, "departure");
      let selectedFlight = getFlight(newFlights);

      if (selectedFlight) return setSelectedFlight(selectedFlight);

      newFlights = await getFlightsData(iata, "arrival");
      selectedFlight = getFlight(newFlights);

      if (selectedFlight) return setSelectedFlight(selectedFlight);
      setSelectedFlight("notfound");
    };
    getFlights();
  }, [iata, selectedFlightId]);

  useEffect(() => scrollIntoView());

  if (selectedFlight === "notfound") {
    return (
      <div className="single-flight-container">
        Could not find any flights for that flightid. Please try another.
      </div>
    );
  }

  if (!selectedFlight) return null;
  const departure = selectedFlight.IsDeparture;

  return (
    <div className="single-flight-container">
      <div className="single-flight-header">
        <div className="single-flight-icon-container">
          <ConditionallyRender
            ifTrue={departure}
            show={<DepartureFlight className="single-flight-icon" />}
            elseShow={<ArrivalFlight className="single-flight-icon" />}
          />
        </div>
        <h2 className="single-flight-heading">{selectedFlight.FlightId}</h2>
        <h3 className="single-flight-airline-heading">
          {selectedFlight.AirlineName}
        </h3>
      </div>

      <div className="single-flight-body">
        <div className="single-flight-transport-container">
          <span>From {selectedFlight.FromAirportName}</span>
          <Arrows className="single-flight-transport-icon" />
          <span>To {selectedFlight.ToAirportName}</span>
        </div>
        <div className="single-flight-time-container">
          <span>Today </span>
          <span>{selectedFlight.ScheduledTime}</span>
        </div>
      </div>

      <ConditionallyRender
        ifTrue={selectedFlight.Gate}
        show={
          <div className="single-flight-status">
            <div className="single-flight-gate-container">
              <div className="single-flight-gate-header">Gate</div>
              <div>{selectedFlight.Gate}</div>
            </div>
            <div className="single-flight-status-container">
              <div className="single-flight-status-header">Status</div>
              <div>
                {selectedFlight.GateOrBeltStatus || selectedFlight.Status}
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default SingleFlight;
