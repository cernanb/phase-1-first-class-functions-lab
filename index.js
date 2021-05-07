// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
  //   const driver1 = drivers[0];
  //   const driver2 = drivers[1];
  //   return [driver1, driver2];
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function (drivers) {
  //   const last = drivers.pop();
  //   const nextToLast = drivers.pop();
  //   return [nextToLast, last];
  return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplier) {
  return function (fare) {
    return fare * multiplier;
  };
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (drivers, functionToCall) => {
  return functionToCall(drivers);
};
