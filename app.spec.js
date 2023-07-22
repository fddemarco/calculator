const Calculator = require('./app.js');

describe('Calculator operations', () => {
  test('Sum operation', () => {
    expect(new Calculator('5', '5', '+').calc()).toEqual(10);
  });
});
