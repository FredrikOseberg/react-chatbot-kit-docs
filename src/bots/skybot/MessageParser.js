class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    if (this.containsFlightId(message)) {
      const id = this.containsFlightId(message);
      return this.actionProvider.handleFlightIdMatch(id);
    }

    if (
      message.includes("options") ||
      message.includes("help") ||
      message.includes("do for me")
    ) {
      return this.actionProvider.handleOptions({ withAvatar: true });
    }

    if (
      message.includes("talk") ||
      message.includes("speak") ||
      message.includes("real person") ||
      message.includes("person") ||
      message.includes("contact")
    ) {
      return this.actionProvider.handleContactInfo();
    }

    if (message.includes("parking") || message.includes("parkering")) {
      return this.actionProvider.handleParkingOptions();
    }

    if (message.includes("flights") || message.includes("flight")) {
      return this.actionProvider.handleFlightsChoice();
    }

    if (message.includes("airport")) {
      return this.actionProvider.handleAirport();
    }

    return this.actionProvider.handleOptions({ withAvatar: true });
  }

  containsFlightId = (message) => {
    const regexp = /[A-Z]{2,}[0-9]{2,}/gim;
    return message.match(regexp);
  };
}

export default MessageParser;
