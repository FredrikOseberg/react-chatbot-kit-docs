const baseURL = "https://atsl2nsysg.execute-api.eu-north-1.amazonaws.com";
const environment = "dev";

export const getFlightsData = async (iata, direction) => {
  let data = await fetch(
    `${baseURL}/${environment}/flights?iata=${iata}&direction=${direction}`
  );
  data = await data.json();
  return data.flights.Flights;
};
