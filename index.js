// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); // ['Antonia', 'Nuru']
  
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); // ['Amari', 'Mo']
  
 
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  
  console.log(selectingDrivers[0](['Antonia', 'Nuru', 'Amari', 'Mo'])); // ['Antonia', 'Nuru']
  console.log(selectingDrivers[1](['Antonia', 'Nuru', 'Amari', 'Mo'])); // ['Amari', 'Mo']
  
  function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
  
  const fareDoubler = createFareMultiplier(2);
  console.log(fareDoubler(10)); 
  
  const fareTripler = createFareMultiplier(3);
  console.log(fareTripler(10)); 
  
  function selectDifferentDrivers(drivers, callback) {
    return callback(drivers);
  }
  
  