// numbers is an array of numbers. Multiply all
// numbers contained in array by multiplier
function multiply(numbers, multiplier){
  return numbers.map(item => item*multiplier);
}

// is an array of positive and negative numbers
// make them all absolute numbers
function absolute(numbers){
 return numbers.map(number => Math.abs(number));
}

// names is an array of name of nameObjects
// {
//   firstName: 'Alan',
//   lastName: 'Sugar'
// }
// concatenate first and last names and return
// resulting array of names
function concatNames(names){
  return names.map(item => `${item.firstName} ${item.lastName}`);
}

// things is an array of numbers and strings. Convert
// numbers in array to strings. For example 5 to "5"
function numbersToStrings(things){
 return things.map(item => item.toString());
}

// strings is an array of strings. sort them by length
function sortByLength(strings){
  const newArr = [...strings];
  newArr.sort((a,b) => a.length - b.length);
  return newArr;
}

// numbers is an array of numbers. Get last two numbers
// from numbers
function lastTwo(numbers){
  const newNumArr = Array.from(numbers);
  return newNumArr.splice(-2);
}

// cars is an array of car objects which look like
// this
// {
//   make: "Vauxhall",
//   model: "Astra",
//   year: 1992
// }
// increment the years by one year for all cars
function incrementYear(cars){
  return cars.map(item => Object.assign({},item,{year: item.year+1}));
}

// sales is an object where the key is
// the salespersons name and the value
// is an array containing that person's sales
// as integers. Calculate that each person's
// total sales.
// {
//   Mary: [57, 12, 31, 4],
//   Dave: [43, 2, 12]
// }
function totalSales(sales){
  const newSales = Object.assign({}, sales);
  Object.keys(newSales).forEach(function(key) {
     newSales[key] = newSales[key].reduce((acc, current)=> acc + current);
  });
  return newSales;
}

// stuff is an object with string keys and
// string values. All keys and values are unique
// Swap keys and values around, so that keys
// become values and values become keys.
// {
//   key1: 'value1',
//   key2: 'value2'
// }
function swapKeysAndValues(stuff){
  const myStuff = {};
  Object.keys(stuff).forEach(key => {
    myStuff[stuff[key]] = key;
  });
  return myStuff;
}

// dates is an array of dates in string format
// 'yyyy-mm-dd' convert dates to date object.
// For example, '2018-02-12' is 12th Feb 2018

// Hint: this function has a bug that needs fixing
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
function parseDates(dates){

  return dates.map(date => {
    const dateParts = date.split('-'); 
    const year = parseInt(dateParts[0], 10);
    const month = parseInt(dateParts[1], 10);
    const day = parseInt(dateParts[2], 10);
    return new Date(year, month, day);
  })
}

// Stretch goal

// write a function called stats which should accept 2 parameters
// 1. A prices array which contains an array of prices
// [8, 9, 10, 4]
// 2. An array of arrays where the inner array contains
// start and end indexes for which we want to calculate
// stats. The second index should always be greater or equal
// to first
// [ [0, 7], [1, 4], [3, 10] ]

// The function should output an array of objects which
// contain statistics calculated for each a set of prices
// as indicated by the corresponding array of indexes.

// [{
//   count: 10,
//   total: 57,
//   min: 4,
//   max: 9,
//   mean: "5.70" <- mean should be have 2 decimal places
//   variance: "3.63", <- variance should be have 2 decimal places
//   stdDeviation: "1.84" <- standard deviation should be have 2 decimal places
// }]

// Implement a solution using multiple pure functions

// Write a unit test for each function
function mean(arr) {
  return arr.reduce((a,b)=>a+b)/arr.length;
} 

function variance (arr) {
  const avg = mean(arr);
  return mean(arr.map(item => (item-avg)**2));
}

function stats (prices,indices) {
  const copyPrices = [...prices];
  const result = [];
  indices.forEach(index => {
    const smallPrices = copyPrices.slice(index[0],index[1]+1);
    const resultObj = {};
    resultObj.count = smallPrices.length;
    resultObj.total = smallPrices.reduce((a,b)=>a+b);
    resultObj.min = Math.min(...smallPrices);
    resultObj.max = Math.max(...smallPrices);
    resultObj.mean = mean(smallPrices).toFixed(2);
    resultObj.variance = (variance(smallPrices)).toFixed(2);
    resultObj.stdDeviation = (variance(smallPrices)**0.5).toFixed(2);
    result.push(resultObj);    
  });
  console.log(result);  
  return result;
}

module.exports = {
  multiply,
  absolute,
  concatNames, 
  numbersToStrings,
  sortByLength, 
  lastTwo,
  incrementYear, 
  totalSales,
  swapKeysAndValues, 
  parseDates,
  stats
};