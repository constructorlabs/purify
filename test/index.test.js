const functions = require('../src/index');

// test('Test', function(){
// 	const expected = 1;
// 	const result = functions.x(1);
// 	expect(result).toBe(expected);
// });

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

let incrementYearInput= [
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
})







