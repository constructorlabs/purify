const functions = require("/Users/phoebedg/workspace/week-3/day-4/purify/src/index.js");

test("Multiply", function() {
  const input = [3, 2];
  const inputCopy = [3, 2];
  const result = functions.multiply(input, 2);
  const expected = [6, 4];
  expect(result).toEqual(expected);
  expect(input).toEqual(inputCopy);
});

test("Absolute", function() {
  const input = [3, 7, -1, -12, 6, -7];
  const inputCopy = [3, 7, -1, -12, 6, -7];
  const result = functions.absolute(input);
  const expected = [3, 7, 1, 12, 6, 7];
  expect(result).toEqual(expected);
  expect(input).toEqual(inputCopy);
});

test("ConcatNames", function() {
  const input = [
    {
      firstName: "Alan",
      lastName: "Sugar"
    }
  ];
  const inputCopy = [
    {
      firstName: "Alan",
      lastName: "Sugar"
    }
  ];
  const result = functions.concatNames(input);
  const expected = ["Alan Sugar"];
  expect(result).toEqual(expected);
  expect(input).toEqual(inputCopy);
});

test("numbersToStrings", function() {
  const input = [2, "hi", 4, "hello"];
  const inputCopy = [2, "hi", 4, "hello"];
  const result = functions.numbersToStrings(input);
  const expected = ["2", "hi", "4", "hello"];
  expect(result).toEqual(expected);
  expect(input).toEqual(inputCopy);
});

test("sortByLength", function() {
  const input = ["moon", "hello", "car"];
  const inputCopy = ["moon", "hello", "car"];
  const result = functions.sortByLength(input);
  const expected = ["car", "moon", "hello"];
  expect(result).toEqual(expected);
  expect(input).toEqual(inputCopy);
});

test("lastTwo", function() {
  const input = [1, 2, 7];
  const inputCopy = [1, 2, 7];
  const result = functions.lastTwo(input);
  const expected = [2, 7];
  expect(result).toEqual(expected);
  expect(input).toEqual(inputCopy);
});

test("incrementYear", function() {
  const input = [
    {
      make: "Vauxhall",
      model: "Astra",
      year: 1992
    }
  ];
  const inputCopy = [
    {
      make: "Vauxhall",
      model: "Astra",
      year: 1992
    }
  ];
  const expected = [
    {
      make: "Vauxhall",
      model: "Astra",
      year: 1993
    }
  ];
  const result = functions.incrementYear(input);

  expect(result).toEqual(expected);
  expect(input).toEqual(inputCopy);
});

test("totalSales", function() {
  const input = {
    Mary: [57, 12, 31, 4],
    Dave: [43, 2, 12]
  };
  const inputCopy = {
    Mary: [57, 12, 31, 4],
    Dave: [43, 2, 12]
  };
  const result = functions.totalSales(input);
  const expected = {
    Mary: 104,
    Dave: 57
  };
  expect(result).toEqual(expected);
  expect(input).toEqual(inputCopy);
});

test("swapKeysAndValues", function() {
  const input = {
    a: "b",
    c: "d"
  };
  const inputCopy = {
    a: "b",
    c: "d"
  };
  const result = functions.swapKeysAndValues(input);
  const expected = {
    b: "a",
    d: "c"
  };
  expect(result).toEqual(expected);
  expect(input).toEqual(inputCopy);
});

test.only("parseDates", function() {
  const input = ["2018-02-12", "1993-06-05", "1955-08-12"];
  const inputCopy = ["2018-02-12", "1993-06-05", "1955-08-12"];
  const result = functions.parseDates(input);
  const expected = [new Date("2018-02-12")];
  expect(result).toEqual(expected);
  expect(input).toEqual(inputCopy);
});
