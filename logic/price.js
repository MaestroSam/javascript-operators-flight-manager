function Prices() {
    function calculateFinalPrice(basePrice, passengerTypeDiscount, flightTypeDiscount) {

        return finalPrice = basePrice + ((passengerTypeDiscount/100) * basePrice) + ((flightTypeDiscount/100) * (basePrice + (passengerTypeDiscount/100) * basePrice));
    }

    function calculateDefaultFinalPrice(basePrice, passengerType, flightType) {
        passengerType = passengerType.toLowerCase();
        flightType = flightType.toLowerCase();

        //Discount rates
        let regularPassenger = -5;
        let vipPassenger = 5;
        let economyFlight = -3;
        let businessFlight = 10;

        if (passengerType === "regular" && flightType === "economy") {
            return defaultFinalPrice = basePrice + ((regularPassenger/100) * basePrice) + ((economyFlight/100) * (basePrice + (regularPassenger/100) * basePrice));
        } else if (passengerType === "regular" && flightType === "business") {
            return defaultFinalPrice = basePrice + ((regularPassenger/100) * basePrice) + ((businessFlight/100) * (basePrice + (regularPassenger/100) * basePrice));
        } else if (passengerType === "vip" && flightType === "economy") {
            return defaultFinalPrice = basePrice + ((vipPassenger/100) * basePrice) + ((economyFlight/100) * (basePrice + (vipPassenger/100) * basePrice));
        } else if (passengerType === "vip" && flightType === "business") {
            return defaultFinalPrice = basePrice + ((vipPassenger/100) * basePrice) + ((businessFlight/100) * (basePrice + (vipPassenger/100) * basePrice));
        }
    };

    function calculateTotalFinalPrice(numOfSeats, passengerType, flightType, basePrice) {
        return numOfSeats * calculateDefaultFinalPrice(basePrice, passengerType, flightType);
    }

    return { calculateFinalPrice, calculateDefaultFinalPrice, calculateTotalFinalPrice };

}

module.exports = Prices();

