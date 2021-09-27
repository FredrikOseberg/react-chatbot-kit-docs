class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleContactInfo = () => {
    const message = this.createChatBotMessage(
      "If you need to speak to a real person, you can call 67 03 00 00.",
      {
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      }
    );

    this.addMessageToState(message);
  };
  handleManageParking = () => {
    const message = this.createChatBotMessage(
      "Here's a link to Avinors manage parking pages.",
      {
        widget: "manageParkingLink",
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      }
    );

    this.addMessageToState(message);
  };

  handleLostLuggage = () => {
    const message = this.createChatBotMessage(
      "Here's a link to Avinors lost luggage pages.",
      {
        widget: "lostLuggageLink",
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      }
    );

    this.addMessageToState(message);
  };

  handleBookParking = () => {
    const message = this.createChatBotMessage(
      "Here's a link to Avinors book parking pages.",
      {
        widget: "bookParkingLink",
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      }
    );

    this.addMessageToState(message);
  };

  handleAirport = () => {
    const message = this.createChatBotMessage(
      "Do you need to switch airport?",
      {
        widget: "airportSelector",
        loading: true,
        terminateLoading: true,
      }
    );

    this.addMessageToState(message);
  };

  handleOptions = (options) => {
    const message = this.createChatBotMessage(
      "How can I help you? Below are some possible options.",
      {
        widget: "options",
        loading: true,
        terminateLoading: true,
        ...options,
      }
    );

    this.addMessageToState(message);
  };

  handleFlightsChoice = () => {
    const message = this.createChatBotMessage(
      "Awesome. I just need a little more information",
      {
        widget: "flightSelector",
        withAvatar: true,
        loading: true,
        terminateLoading: true,
      }
    );
    this.addMessageToState(message);
  };

  handleFlightTypeChoice = (type) => {
    const message = this.createChatBotMessage(
      `Thanks. I'll retrieve the next 5 ${type} flights from your chosen airport. If you are searching for a specific flight, try typing in the flightID? (example: SK1423)`,
      {
        loading: true,
        terminateLoading: true,
        withAvatar: true,
        widget: "flightList",
      }
    );

    this.addMessageToState(message);
  };

  handleFlightIdMatch = (flightId) => {
    const message = this.createChatBotMessage(
      `Here's what I found for this flight.`,
      {
        loading: true,
        terminateLoading: true,
        withAvatar: true,
        widget: "singleFlight",
      }
    );

    this.setState((state) => ({
      ...state,
      selectedFlightId: flightId[0],
      messages: [...state.messages, message],
    }));
  };

  handleFlightNotFound = () => {
    const message = this.createChatBotMessage(
      `Sorry, couldn't find anything for that flight.`,
      {
        loading: true,
        terminateLoading: true,
      }
    );

    this.addMessageToState(message);
  };

  handleParkingOptions = () => {
    const message = this.createChatBotMessage(
      `How can I help you with parking?`,
      {
        loading: true,
        terminateLoading: true,
        withAvatar: true,
        widget: "parkingOptions",
      }
    );

    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, message],
    }));
  };
}

export default ActionProvider;
