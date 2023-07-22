const Calculator = require('./app.js');

describe('Calculator operations', () => {
  test('Sum operation', () => {
    expect(new Calculator('5', '5', '+').calc()).toEqual(10);
  });
  test('Subtraction operation', () => {
    expect(new Calculator('5', '5', '-').calc()).toEqual(0);
  });
  test('Multiplication operation', () => {
    expect(new Calculator('5', '5', '*').calc()).toEqual(25);
  });
});
