const calculator = require('./calculator');

test('10 + 10 = 20', () => {

    expect(calculator.add(10, 10)).toBe(20);

});

test('250 - 180 = 70', () => {

    expect(calculator.substract(250, 180)).toBe(70);

});

test('400 / 16 = 25', () => {

    expect(calculator.divide(400, 16)).toBe(25);

});

test('777 * 10.009009009 = 7777', () => {

    expect(Math.ceil(calculator.multiply(777, 10.009009009))).toBe(7777);

});