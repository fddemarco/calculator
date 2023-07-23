/*import {test, describe, expect} from '@jest/globals';*/
const {Calculator} = require('../src/calculator.js');
const {
  CalculatorButtonNumber,
  CalculatorButtonOperator,
  CalculatorButtonFunction
} =  require('../src/calculator_button.js');


describe('Calculator operations', () => {
  test('Click On Number', () => {
    const calculator = new Calculator();
    const button = new CalculatorButtonOperator('+');
    calculator.clickOn(button);

    const isButtonClicked = calculator.clickedOn().includes(button) &&
                            calculator.clickedOn().length == 1;
    expect(isButtonClicked).toBe(true);
  });
});
