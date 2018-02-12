const functions = require('../src/index');

/*
test('Multiply with direct input', function() {
	const expected = [2, 4, 6, 8];
	const result = functions.multiply([1, 2, 3, 4], 2);
	expect(result).toEqual(expected);
});

let multiplyInput = [1, 2, 3, 4];

test('Multiply with array input', function() {
	const expected = [2, 4, 6, 8];
	const result = functions.multiply(multiplyInput, 2);
	expect(result).toEqual(expected);
});

test('Multiply did not change input array', function() {
	const expected = [1, 2, 3, 4];
	expect(expected).toEqual(multiplyInput);
});

let absoluteInput = [-1, 2, -3, 4]

test('Make numbers in array absolute', function() {
	const expected = [1, 2, 3, 4];
	const result = functions.absolute(absoluteInput);
	expect(result).toEqual(expected);
});

test('Absolute did not change input array', function() {
	const expected = [-1, 2, -3, 4];
	expect(expected).toEqual(absoluteInput);
});

let concatNamesInput = [
	{ firstName : 'Ben', lastName : 'Smith' },
	{ firstName : 'James', lastName : 'Bond' },
	{ firstName : 'Sam', lastName : 'Black' }
];

test('Return array of concatenated names from object array', function() {
	const expected = ['Ben Smith', 'James Bond', 'Sam Black'];
	const result = functions.concatNames(concatNamesInput);
	expect(result).toEqual(expected);
});

test('Concatenating names did not change input array of objects', function() {
	const expected = [
		{ firstName : 'Ben', lastName : 'Smith' },
		{ firstName : 'James', lastName : 'Bond' },
		{ firstName : 'Sam', lastName : 'Black' }
	];
	expect(expected).toEqual(concatNamesInput);
});

let numbersToStringsInput = [5,'Edward',7];

test('Convert numbers in array into strings', function() {
	const expected = ['5','Edward','7'];
	const result = functions.numbersToStrings(numbersToStringsInput);
	expect(result).toEqual(expected);
});

test('Changing numbers to strings did not change input array', function() {
	const expected = [5,'Edward',7];
	expect(expected).toEqual(numbersToStringsInput);
});

let sortByLengthInput = ['Goodbye','Hi','Hello'];

test('Sort strings by length', function() {
	const expected = ['Hi','Hello','Goodbye'];
	const result = functions.sortByLength(sortByLengthInput);
	expect(result).toEqual(expected);
});

test('Sorting strings by length did not change input array', function() {
	const expected = ['Goodbye','Hi','Hello'];

	expect(expected).toEqual(sortByLengthInput);
});

let lastTwoInput = [5,6,7,8,9];

test('Get last two numbers from array', function() {
	const expected = [8,9];
	const result = functions.lastTwo(lastTwoInput);
	expect(result).toEqual(expected);
});

test('Getting last two numbers from array did not change input array', function () {
	const expected = [5,6,7,8,9];
	expect(expected).toEqual(lastTwoInput);
});

let incrementYearInput = [
	{
		make: "Vauxhall",
		model: "Astra",
		year: 1992
	},
	{
		make: "Ford",
		model: "Mondeo",
		year: 1999
	},
	{
		make: "Toyota",
		model: "Camry",
		year: 2016
	},
];

test('Increment car object year by one year', function() {
	const expected =  [
		{
			make: "Vauxhall",
			model: "Astra",
			year: 1993
		},
		{
			make: "Ford",
			model: "Mondeo",
			year: 2000
		},
		{
			make: "Toyota",
			model: "Camry",
			year: 2017
		},
	];
	const result = functions.incrementYear(incrementYearInput);
	expect(result).toEqual(expected);
});

test('Incrementing car years did not change input array', function() {
	const expected = [
		{
			make: "Vauxhall",
			model: "Astra",
			year: 1992
		},
		{
			make: "Ford",
			model: "Mondeo",
			year: 1999
		},
		{
			make: "Toyota",
			model: "Camry",
			year: 2016
		},
	];

	expect(expected).toEqual(incrementYearInput);
});

let totalSalesInput = {
	Mary : [57, 12, 31, 4],
	Dave : [43, 2, 12]
};

test('Produce total sales for each salesperson', function() {
	const expected = {
		Mary : 104,
		Dave : 57
	};
	const result = functions.totalSales(totalSalesInput);
	expect(result).toEqual(expected);
});

test('Totalizing sales did not change input object', function() {
	const expected = {
		Mary : [57, 12, 31, 4],
		Dave : [43, 2, 12]
	};

	expect(expected).toEqual(totalSalesInput);
});

let swapKeysAndValuesInput = {
	a : 'b',
	c : 'd',
	e : 'f'
};

test('Swap keys and values from an object', function() {
	const expected = {
		b : 'a',
		d : 'c',
		f : 'e'
	};
	const result = functions.swapKeysAndValues(swapKeysAndValuesInput);
	expect(result).toEqual(expected);
});

test('Getting swapped keys and values from object did not change input object', function() {
	const expected = {
		a : 'b',
		c : 'd',
		e : 'f'
	};
	expect(expected).toEqual(swapKeysAndValuesInput);
});

let parseDateInput = ['1980-05-29', '1985-01-02'];

test('Create Date objects from array of strings', function() {
	let date1 = new Date('May 29, 1980');
	let date2 = new Date('January 2, 1985');

	const expected = [date1, date2];
	const result = functions.parseDates(parseDateInput);
	expect(result).toEqual(expected);
});

test('Creating Date objects from array did not change input array', function() {
	const expected = ['1980-05-29', '1985-01-02'];
	expect(expected).toEqual(parseDateInput);
});

*/

const prices = [8, 25, 10, 14, 5, 16, 12, 3, 7, 4, 21, 11, 2, 6, 18];
const range1 = [3, 5];
const range2 = [10, 11];
const range3 = [1, 12];

const ranges = [range1, range2, range3];

test('Extract ranges', function() {
	const expected = [21, 11];
	const result = functions.extractRange(prices, range2);
	expect(result).toEqual(expected);
});

const arrayInputForMulti = [1.2, 3.4, 5.6];

test('Sum of array', function() {
	const expected = 10.2;
	const result = functions.sumArray(arrayInputForMulti);
	expect(result).toBe(expected);
})

test('Mean of array to 2 decimal places', function() {
	const expected = 3.40;
	const result = functions.meanArray(arrayInputForMulti);
	expect(result).toBe(expected);
});

test('Variance', function() {
	const expected = 3.23;
	const result = functions.variance(arrayInputForMulti);
	expect(result).toBe(expected);
})

test('Standard deviation', function() {
	const expected = 1.80;
	const result = functions.stdDeviation(arrayInputForMulti);
	expect(result).toBe(expected);
})

const statisticsOutputWanted = [
	{
		count: 3,
		total: 35,
		min: 5,
		max: 16,
		mean: 11.67,
		variance: 22.89,
		stdDeviation: 4.78
	},
	{
		count: 2,
		total: 32,
		min: 11,
		max: 21,
		mean: 16,
		variance: 25,
		stdDeviation: 5
	},
	{
		count: 12,
		total: 130,
		min: 2,
		max: 25,
		mean: 10.83,
		variance: 48.14,
		stdDeviation: 6.94
	}
];

test('Price array statistics', function() {
	const result = functions.priceArrayStatistics(prices, ranges);
	expect(result).toEqual(statisticsOutputWanted);
});
