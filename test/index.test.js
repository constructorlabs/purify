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

const multiplyInput = [1, 2, 3, 4];

test('Multiply with array input', function() {
	const expected = [2, 4, 6, 8];
	const result = functions.multiply(multiplyInput, 2);
	expect(result).toEqual(expected);
});

test('Multiply did not change input array', function() {
	const expected = [1, 2, 3, 4];
	expect(expected).toEqual(multiplyInput);
});

