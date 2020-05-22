import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import AirportSelector from "./widgets/AirportSelector/AirportSelector";
import FlightsSelector from "./widgets/FlightsSelector/FlightsSelector";
import FlightList from "./widgets/FlightList/FlightList";
import SingleFlight from "./widgets/SingleFlight/SingleFlight";
import GeneralOptions from "./widgets/GeneralOptions/GeneralOptions";
import ParkingOptions from "./widgets/ParkingOptions/ParkingOptions";
import BookParkingLink from "./widgets/Link/BookParkingLink";
import ManageParkingLink from "./widgets/Link/ManageParkingLink";
import LostBaggageLink from "./widgets/Link/LostBaggageLink";
import FlightBotAvatar from "./domainComponents/FlightBotAvatar";

const botName = "Skybot";

const config = {
  botName: botName,
  lang: "en",
  initialMessages: [
    createChatBotMessage(`Hi I'm ${botName}.`),
    createChatBotMessage(
      "First things first, which airport are you looking for information from?",
      {
        widget: "airportSelector",
        delay: 500,
      }
    ),
  ],
  state: {
    airports: [],
    selectedAirport: { iata: "OSL", nameCompact: "Oslo" },
    flightType: "",
    selectedFlightId: "",
    selectedFlight: null,
  },
  customComponents: {
    botAvatar: (props) => <FlightBotAvatar {...props} />,
  },
  widgets: [
    {
      widgetName: "airportSelector",
      widgetFunc: (props) => <AirportSelector {...props} />,
      mapStateToProps: ["messages", "selectedAirport", "airports"],
      props: [],
    },
    {
      widgetName: "options",
      widgetFunc: (props) => <GeneralOptions {...props} />,
      props: [],
      mapStateToProps: [],
    },
    {
      widgetName: "flightSelector",
      widgetFunc: (props) => <FlightsSelector {...props} />,
      props: [],
      mapStateToProps: ["selectedAirport"],
    },
    {
      widgetName: "flightList",
      widgetFunc: (props) => <FlightList {...props} />,
      props: [],
      mapStateToProps: ["flightType", "selectedAirport"],
    },
    {
      widgetName: "singleFlight",
      widgetFunc: (props) => <SingleFlight {...props} />,
      props: [],
      mapStateToProps: [
        "selectedFlightId",
        "selectedAirport",
        "selectedFlight",
      ],
    },
    {
      widgetName: "parkingOptions",
      widgetFunc: (props) => <ParkingOptions {...props} />,
      props: [],
      mapStateToProps: [],
    },
    {
      widgetName: "bookParkingLink",
      widgetFunc: (props) => <BookParkingLink {...props} />,
      props: [],
      mapStateToProps: ["selectedAirport"],
    },
    {
      widgetName: "manageParkingLink",
      widgetFunc: (props) => <ManageParkingLink {...props} />,
      props: [],
      mapStateToProps: ["selectedAirport"],
    },
    {
      widgetName: "lostLuggageLink",
      widgetFunc: (props) => <LostBaggageLink {...props} />,
    },
  ],
};

export default config;
