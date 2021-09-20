const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = drivers => drivers.slice(0, 2);
const returnLastTwoDrivers = drivers => drivers.slice(-2);
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
// const selectDifferentDrivers = (arrayOfDrivers, action) => {}
const selectDifferentDrivers = (arrayOfDrivers, action) => action(arrayOfDrivers);




const createFareMultiplier = multiplier => fare => multiplier * fare;
const fareDoubler = fare => fare * 2;
const fareTripler = fare => fare * 3;



