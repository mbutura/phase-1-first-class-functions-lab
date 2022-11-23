// Code your solution in this file!
const returnFirstTwoDrivers = function(arr){
    return arr.slice(0,2);
}

const returnLastTwoDrivers = function(arr){
    return arr.slice(-2);
}

selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

console.log(typeof selectingDrivers)

const createFareMultiplier = function(num){
    return function(fare){return num*fare};
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arr, cb){
    return cb(arr)
}