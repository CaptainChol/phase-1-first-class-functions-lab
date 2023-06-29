const returnFirstTwoDrivers = (drivers) => {
return drivers.slice(0, 2);
}

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers ];

function createFareMultiplier(integer){
    return function(fare){
        return fare * integer;
    };
}

const fareDoubler = createFareMultiplier(2);

const fare = 20;

const doubledFare = fareDoubler(fare);

console.log(doubledFare); // 40

const fareTripler = createFareMultiplier(3);
const tripledFare = fareTripler(fare);

console.log(tripledFare); // 60

function selectDifferentDrivers(drivers, functionToUse) {
    if (functionToUse === returnFirstTwoDrivers) {
      return drivers.slice(0, 2);
    } else if (functionToUse === returnLastTwoDrivers) {
      return drivers.slice(-2);
    } else {
      throw new Error("Invalid functionToUse argument");
    }
  }