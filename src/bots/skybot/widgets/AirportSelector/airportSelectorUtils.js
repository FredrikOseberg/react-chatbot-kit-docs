export const getReducedAirportObject = result => {
  const reducedResult = result.reduce((acc, item) => {
    const newItem = { iata: item.iata, nameCompact: item.nameCompact };
    acc.push(newItem);
    return acc;
  }, []);

  return reducedResult;
};
