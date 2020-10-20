function Util() {
  function calculateTotalDistributedPassengers(distributedPassengers) {
    let totalDistributedPassengers = 0;
    let value;
    for (value in distributedPassengers) {
      totalDistributedPassengers += distributedPassengers[value];
    }
    return totalDistributedPassengers;
  }

  function calculateTotalNumberOfPassengers(passengersArray) {
    let totalNumberOfPassengers = 0;
    let passengers;
    for (passengers of passengersArray) {
      totalNumberOfPassengers += passengers;
    }
    return totalNumberOfPassengers;
  }

  function checkInput(input) {
    if (input != true) {
      throw Error("Incorrect Input Entered: It must be a valid number");
    }
    return checkInput;
  }

  function calculateTotalDistance(distancesArray) {
  //using .filter() o select only positive numbers then use .reduce() to sum values of distancesArray
     let totalDistances = distancesArray.filter(item => item > 0).reduce((acc, curV) => { return acc + curV;}, 0);

     return totalDistances;
  }

  function calculateBonusPoints(distTravelledByBusinessSeatsArray, distTravelledByEconomySeatsArray, businessBonus, economyBonus) {
    let businessPoints = calculateTotalDistance(distTravelledByBusinessSeatsArray) * (businessBonus/100);

    let economyPoints = calculateTotalDistance(distTravelledByEconomySeatsArray) * (economyBonus/100);

    return totalBonus = businessPoints + economyPoints; 
  }

return { calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers, checkInput, calculateTotalDistance, calculateBonusPoints };

  };

module.exports = Util();
