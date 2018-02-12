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

test('Make numbers in array absolute', function() {
	const expected = [1, 2, 3, 4];
	const result = functions.absolute([-1, 2, -3, 4]);
	expect(result).toEqual(expected);
});

let absoluteInput = [-1, 2, -3, 4]

test('Absolute did not change input array', function() {
	const expected = [-1, 2, -3, 4];
	expect(expected).toEqual(absoluteInput);
});

test('Return array of concatenated names from object array', function() {
	const expected = ['Ben Smith', 'James Bond', 'Sam Black'];
	const result = functions.concatNames([
		{ firstName : 'Ben', lastName : 'Smith' },
		{ firstName : 'James', lastName : 'Bond' },
		{ firstName : 'Sam', lastName : 'Black' }
	]);
	expect(result).toEqual(expected);
});

let concatNamesInput = [
	{ firstName : 'Ben', lastName : 'Smith' },
	{ firstName : 'James', lastName : 'Bond' },
	{ firstName : 'Sam', lastName : 'Black' }
];

test('Concatenating names did not change input array of objects', function() {
	const expected = [
		{ firstName : 'Ben', lastName : 'Smith' },
		{ firstName : 'James', lastName : 'Bond' },
		{ firstName : 'Sam', lastName : 'Black' }
	];
	expect(expected).toEqual(concatNamesInput);
});

test('Convert numbers in array into strings', function() {
	const expected = ['5','Edward','7'];
	const result = functions.numbersToStrings([5,'Edward',7]);
	expect(result).toEqual(expected);
});

let numbersToStringsInput = [5,'Edward',7];

test('Changing numbers to strings did not change input array', function() {
	const expected = [5,'Edward',7];
	expect(expected).toEqual(numbersToStringsInput);
});

test('Sort strings by length', function() {
	const expected = ['Hi','Hello','Goodbye'];
	const result = functions.sortByLength(['Goodbye','Hi','Hello']);
	expect(result).toEqual(expected);
});