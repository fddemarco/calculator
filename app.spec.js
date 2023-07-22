const {Calculator, InvalidOperatorError}  = require('./app.js');

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
  test('Division operation', () => {
    expect(new Calculator('5', '5', '/').calc()).toEqual(1);
  });
  test('Invalid operator error', () => {
    expect(() => new Calculator('5', '5', 'invalid operator')).toThrow(InvalidOperatorError);
  });

});
