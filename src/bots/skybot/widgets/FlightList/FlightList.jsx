import React, { useState, useEffect } from "react";
import { ConditionallyRender } from "react-util-kit";

import { ReactComponent as DepartureFlight } from "../../icons/plane-departure.svg";
import { ReactComponent as ArrivalFlight } from "../../icons/plane-arrival.svg";

import { getFlightsData } from "../../data/data";

import "./FlightList.css";

const FlightList = ({ flightType, selectedAirport, scrollIntoView }) => {
  const [flights, setFlights] = useState([]);
  const [type, setType] = useState("");

  useEffect(() => {
    const getFlights = async () => {
      const flights = await getFlightsData(selectedAirport.iata, flightType);

      const filteredFlights = flights.filter((item) => item.Status === null);

      setFlights(filteredFlights);
      setType(flightType);
    };
    getFlights();
  }, []);

  useEffect(() => {
    scrollIntoView();
  });

  const flightSlice = flights.slice(0, 5);
  const departure = type === "departure";

  return (
    <div className="flight-list-container">
      <div className="flight-header-container">
        <div className="flight-id-header">FligthId</div>
        <div className="flight-airport-header">
          <ConditionallyRender
            ifTrue={departure}
            show={<span>To</span>}
            elseShow={<span>From</span>}
          />
        </div>
        <div className="flight-time-header">At</div>
        <div className="flight-time-gate">Gate</div>
      </div>
      <ul className="flight-list">
        {flightSlice.map((flight) => {
          return (
            <li className="flight-list-item" key={flight.FlightId}>
              <ConditionallyRender
                ifTrue={departure}
                show={
                  <div className="flight-list-icon-container">
                    <DepartureFlight className="flightlist-icon" />
                  </div>
                }
                elseShow={
                  <div className="flight-list-icon-container-arrival">
                    <ArrivalFlight className="flightlist-icon" />
                  </div>
                }
              />

              <div className="flight-id">{flight.FlightId}</div>
              <div className="flight-airport">{flight.AirportToOrFrom}</div>
              <div className="flight-time">{flight.ScheduledTime}</div>
              <div className="flight-gate">{flight.Gate}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FlightList;
