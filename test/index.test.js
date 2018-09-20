const functions = require('../src/index.js');

test('multiply', function() {
    const input = [1,2,3,4];
    const mult = 2;
    const expectedInput = [1,2,3,4];
    const expectedOutput = [2,4,6,8];
    const output = functions.multiply(input,mult);
    expect(output).toEqual(expectedOutput);
    expect(input).toEqual(expectedInput);
});

test('multiply2', function() {
    const input = [4,5,-1,2];
    const mult = 3;
    const expectedInput = [4,5,-1,2];
    const expectedOutput = [12,15,-3,6];
    const output = functions.multiply(input,mult);
    expect(output).toEqual(expectedOutput);
    expect(input).toEqual(expectedInput);
});

test('absolute', function(){
    const input = [2,-1,5,-3,6,-7]; 
    const expectedInput = [2, -1, 5, -3, 6, -7];
    const expectedOutput = [2,1,5,3,6,7];
    const output = functions.absolute(input); 

    expect(output).toEqual(expectedOutput); 
    expect(input).toEqual(expectedInput);
});

test('absolute2', function(){
    const input = [-5,2,10,-0.5,0,-99]; 
    const expectedInput = [-5,2,10,-0.5,0,-99]; 
    const expectedOutput = [5,2,10,0.5,0,99]; 
    const output = functions.absolute(input); 

    expect(output).toEqual(expectedOutput); 
    expect(input).toEqual(expectedInput);
});

test('concatNames', function() {
    const input = [{firstName: 'John',lastName: 'Doe'},{firstName: 'Yetkin',lastName: 'Ergun'}];
    const expectedInput = [{firstName: 'John',lastName: 'Doe'},{firstName: 'Yetkin',lastName: 'Ergun'}];
    const expectedOutput = ['John Doe', 'Yetkin Ergun'];
    const output = functions.concatNames(input);

    expect(output).toEqual(expectedOutput); 
    expect(input).toEqual(expectedInput);
});

test('concatNames2', function() {
    const input = [{firstName: 'Tony',lastName: 'Stark'},{firstName: 'Black',lastName: 'Widow'}];
    const expectedInput = [{firstName: 'Tony',lastName: 'Stark'},{firstName: 'Black',lastName: 'Widow'}];
    const expectedOutput = ['Tony Stark', 'Black Widow'];
    const output = functions.concatNames(input);

    expect(output).toEqual(expectedOutput); 
    expect(input).toEqual(expectedInput);
});

test('numbersToStrings', function(){
    const input = [9, '5', 11, '4']; 
    const expectedInput = [9, '5', 11, '4'];
    const expectedOutput = ['9', '5', '11', '4']; 
    const output = functions.numbersToStrings(input); 

    expect(output).toEqual(expectedOutput); 
    expect(input).toEqual(expectedInput);
});

test('numbersToStrings2', function(){
    const input = [1, 2, 4, "12"]; 
    const expectedInput = [1, 2, 4, "12"]; 
    const expectedOutput = ['1', '2', '4', '12']; 
    const output = functions.numbersToStrings(input); 

    expect(output).toEqual(expectedOutput); 
    expect(input).toEqual(expectedInput);
});

test('sortByLength', function(){
    const input = ['a','aaa','aaaaaaa','']; 
    const expectedInput = ['a','aaa','aaaaaaa','']; 
    const expectedOutput = ['','a','aaa','aaaaaaa']; 
    const output = functions.sortByLength(input); 

    expect(output).toEqual(expectedOutput); 
    expect(input).toEqual(expectedInput);
});

test('sortByLength2', function(){
    const input = ['hi','there','a','']; 
    const expectedInput = ['hi','there','a','']; 
    const expectedOutput = ['','a','hi','there']; 
    const output = functions.sortByLength(input); 

    expect(output).toEqual(expectedOutput); 
    expect(input).toEqual(expectedInput);
});

test('last two', function(){
    const input = [2,3,6,9,3,3,8]; 
    const expectedInput = [2,3,6,9,3,3,8];
    const expectedOutput = [3,8];
    const output = functions.lastTwo(input); 

    expect(output).toEqual(expectedOutput); 
    expect(input).toEqual(expectedInput);
});

test('last two2', function(){
    const input = [5,3,1]; 
    const expectedInput = [5,3,1];
    const expectedOutput = [3,1];
    const output = functions.lastTwo(input); 

    expect(output).toEqual(expectedOutput); 
    expect(input).toEqual(expectedInput);
});

test('increment year', function(){
    const input = [ {make: "Vauxhall",model: "Astra",year: 1992},
                    {make: "BMW",model: "X5",year: 2015}]; 
    const expectedInput = [ {make: "Vauxhall",model: "Astra",year: 1992},
    {make: "BMW",model: "X5",year: 2015}]; 
    const expectedOutput = [ {make: "Vauxhall",model: "Astra",year: 1993},
    {make: "BMW",model: "X5",year: 2016}]; 
    const output = functions.incrementYear(input); 

    expect(output).toEqual(expectedOutput); 
    expect(input).toEqual(expectedInput);
});

test('increment year2', function(){
    const input = [ {make: "VW",model: "Golf",year: 2016},
                    {make: "Audi",model: "A3",year: 2011}]; 
    const expectedInput = [ {make: "VW",model: "Golf",year: 2016},
    {make: "Audi",model: "A3",year: 2011}]; 
    const expectedOutput = [ {make: "VW",model: "Golf",year: 2017},
    {make: "Audi",model: "A3",year: 2012}]; 
    const output = functions.incrementYear(input); 

    expect(output).toEqual(expectedOutput); 
    expect(input).toEqual(expectedInput);
});

test('total sales', function(){
    const input = {Mary: [22, 43, 66],
                    Dave: [12, 11, 91]}; 
    const expectedInput = {Mary: [22, 43, 66],
        Dave: [12, 11, 91]}; 
    const expectedOutput = {Mary: 131,
        Dave: 114};
    const output = functions.totalSales(input); 

    expect(output).toEqual(expectedOutput); 
    expect(input).toEqual(expectedInput);
});

test('total sales2', function(){
    const input = {Yetkin: [1,2,3],
                    Luke: [9,8,7]}; 
    const expectedInput = {Yetkin: [1,2,3],
        Luke: [9,8,7]}; 
    const expectedOutput = {Yetkin: 6,
        Luke: 24}; 
    const output = functions.totalSales(input); 

    expect(output).toEqual(expectedOutput); 
    expect(input).toEqual(expectedInput);
});

test('swap keys and values', function() {
    const input = {a:'b', c: 'd'};
    const expectedInput = {a:'b', c: 'd'};
    const expectedOutput = {b:'a', d: 'c'};
    const output = functions.swapKeysAndValues(input);

    expect(output).toEqual(expectedOutput); 
    expect(input).toEqual(expectedInput);
});

test('swap keys and values2', function() {
    const input = {key1:'value1', key2: 'value2'};
    const expectedInput = {key1:'value1', key2: 'value2'};
    const expectedOutput = {value1:'key1', value2: 'key2'};
    const output = functions.swapKeysAndValues(input);

    expect(output).toEqual(expectedOutput); 
    expect(input).toEqual(expectedInput);
});

test('parse dates', function(){
    const date1 =new Date(2018,2,12); 
    const date2 = new Date(2017,3,11);
    const date3 = new Date(2019,1,7);

    const input = ['2018-02-12', '2017-03-11', '2019-01-07'];
    const expectedInput = ['2018-02-12', '2017-03-11', '2019-01-07'];
    const expectedOutput = [date1, date2, date3];
    const output = functions.parseDates(input);

    expect(output).toEqual(expectedOutput); 
    expect(input).toEqual(expectedInput);
});

test('parse dates 2', function(){
    const date1 =new Date(2010,12,5); 
    const date2 = new Date(1998,8,30);
    const date3 = new Date(2000,3,21);

    const input = ['2010-12-05', '1998-08-30', '2000-03-21'];
    const expectedInput = ['2010-12-05', '1998-08-30', '2000-03-21'];
    const expectedOutput = [date1, date2, date3];
    const output = functions.parseDates(input);

    expect(output).toEqual(expectedOutput); 
    expect(input).toEqual(expectedInput);
});

test('stats', function() {
    const input1 = [1,2,3,4,5,6,7,8,9,0];
    const input2 = [[1,3]];
    const expectedInput1 = [1,2,3,4,5,6,7,8,9,0];
    const expectedInput2 = [[1,3]];
    const expectedOutput = [
       {count: 3,
        total: 9,
        min: 2,
        max: 4,
        mean: '3.00',
        variance: '0.67',
        stdDeviation: '0.82'}];
    const output = functions.stats(input1,input2);

    expect(output).toEqual(expectedOutput); 
    expect(input1).toEqual(expectedInput1);
    expect(input2).toEqual(expectedInput2);
});