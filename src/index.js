// numbers is an array of numbers. Multiply all
// numbers contained in array by multiplier
function multiply(numbers, multiplier) {
  numbersClone = [...numbers];
  for (var i = 0; i < numbersClone.length; i++) {
    numbersClone[i] = numbersClone[i] * multiplier;
  }

  return numbersClone;
}

exports.multiply = multiply;

// is an array of positive and negative numbers
// make them all absolute numbers
function absolute(numbers) {
  numbersCopy = numbers.map(function(el) {
    if (el < 0) {
      return el * -1;
    } else {
      return el;
    }
  });
  return numbersCopy;
}

exports.absolute = absolute;

// names is an array of name of nameObjects
// {
//   firstName: 'Alan',
//   lastName: 'Sugar'
// }
// concatenate first and last names and return
// resulting array of names
function concatNames(names) {
  const namesCopy = [...names];
  for (var i = 0; i < namesCopy.length; i++) {
    namesCopy[i] = `${namesCopy[i].firstName} ${namesCopy[i].lastName}`;
  }
  return namesCopy;
}

exports.concatNames = concatNames;

// things is an array of numbers and strings. Convert
// numbers in array to strings. For example 5 to "5"
function numbersToStrings(things) {
  const thingsCopy = [...things];
  for (var i = 0; i < thingsCopy.length; i++) {
    thingsCopy[i] =
      typeof thingsCopy[i] === "number" ? thingsCopy[i] + "" : thingsCopy[i];
  }
  return thingsCopy;
}

exports.numbersToStrings = numbersToStrings;

// strings is an array of strings. sort them by length
function sortByLength(strings) {
  const stringsCopy = [...strings];
  stringsCopy.sort(function(a, b) {
    return a.length - b.length;
  });
  return stringsCopy;
}
exports.sortByLength = sortByLength;
// numbers is an array of numbers. Get last two numbers
// from numbers
function lastTwo(numbers) {
  const lastCopy = [...numbers];
  return lastCopy.splice(-2);
}
exports.lastTwo = lastTwo;
// cars is an array of car objects which look like
// this
// {
//   make: "Vauxhall",
//   model: "Astra",
//   year: 1992
// }
// increment the years by one year for all cars
function incrementYear(cars) {
  return cars.map(function(car) {
    const newCar = Object.assign({}, car);
    newCar.year++;
    return newCar;
  });
  // const carsCopy = [...cars];
  // const carsCopy = JSON.parse(JSON.stringify(cars));
  // for (var i = 0; i < carsCopy.length; i++) {
  //   carsCopy[i].year++;
  // }
  // return carsCopy;
}
exports.incrementYear = incrementYear;
// sales is an object where the key is
// the salespersons name and the value
// is an array containing that person's sales
// as integers. Calculate each person's
// total sales.
// {
//   Mary: [57, 12, 31, 4],
//   Dave: [43, 2, 12]
// }
function totalSales(sales) {
  const newSales = Object.assign({}, sales);
  Object.keys(sales).forEach(function(key) {
    let total = 0;
    for (var i = 0; i < newSales[key].length; i++) {
      total = total + newSales[key][i];
    }

    newSales[key] = total;
    return newSales;
  });
  return newSales;
}

exports.totalSales = totalSales;
// stuff is an object with string keys and
// string values. All keys and values are unique
// Swap keys and values around, so that keys
// become values and values become keys.
// {
//   a: 'b',
//   c: 'd'
// }
function swapKeysAndValues(stuff) {
  const newStuff = Object.assign({}, stuff);
  Object.keys(stuff).forEach(function(key) {
    const value = newStuff[key];
    newStuff[value] = key;
    delete newStuff[key];
  });

  return newStuff;
}

exports.swapKeysAndValues = swapKeysAndValues;
// dates is an array of dates in string format
// 'yyyy-mm-dd' convert dates to date object.
// For example, '2018-02-12' is 12th Feb 2018

// Hint: this function has a bug that needs fixing
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
function parseDates(dates) {
  const newDates = [...dates];
  for (var i = 0; i < newDates.length; i++) {
    var dateParts = newDates[i].split("-");

    var year = parseInt(dateParts[0]);
    var month = parseInt(dateParts[1]);
    var date = parseInt(dateParts[2]);

    newDates[i] = new Date(date, month, year);
  }
  return newDates;
}

exports.parseDates = parseDates;

// Stretch goal

// write a function stats it should accept 2 parameters
// 1. A prices array which contains and array of prices
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
