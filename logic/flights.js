function Flights() {
  function calculateNumberOfFlights(passengers, capacity) {
    let numOfFlights;

    //Checking for a positive interger value for passengers and capacity provided

    if (Number.isSafeInteger(Number(passengers)) === false || passengers < 0) {
      throw new Error(
        "The number of passengers must be a positive interger value **"
      );
    } else if (Number.isSafeInteger(Number(capacity)) === false || capacity < 0) {
      throw new Error(
        "The capacity of the flight must be a positive interger value"
      );
    } else {
      if (passengers % capacity == 0) {
        return (numOfFlights = passengers / capacity);
      } else {
        return (numOfFlights = Math.floor(passengers / capacity + 1));
      }
    }
  }

  function checkAircraftRevision(distLimit, distances) {
    let totalDistance = distances.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;}, 0);

    if (totalDistance <= distLimit / 2) {
      return "The revision needs to be done within the next 3 months";
    } else if (totalDistance > distLimit / 2 && totalDistance <= 0.75 * distLimit) {
      return "The revision needs to be done within the next 2 months";
    } else if (totalDistance > 0.75 * distLimit && totalDistance <= distLimit) {
        return "The revision needs to be done within the next month";
    } else if (totalDistance > distLimit) {
        throw new Error;
    }
  }
  return { calculateNumberOfFlights, checkAircraftRevision };
}

module.exports = Flights();
