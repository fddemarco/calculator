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
    const button = new CalculatorButtonNumber(1);
    calculator.clickOn(button);

    const isButtonClicked = calculator.clickedOn().includes(button) &&
                            calculator.clickedOn().length == 1;
    expect(isButtonClicked).toBe(true);
  });
  
  test('Displays single digit', () => {
    const calculator = new Calculator();
    const button = new CalculatorButtonNumber(1);
    calculator.clickOn(button);
    expect(calculator.displayContent()).toEqual('1');
  });

  
  test('Displays two digits', () => {
    const calculator = new Calculator();
    const button1 = new CalculatorButtonNumber(1);
    calculator.clickOn(button1);

    
    const button2 = new CalculatorButtonNumber(1);
    calculator.clickOn(button2);
    expect(calculator.displayContent()).toEqual('11');
  });

  test('Displays operators and numbers spaced between', () => {
    const calculator = new Calculator();
    const button1 = new CalculatorButtonNumber(1);
    calculator.clickOn(button1);

    
    const button2 = new CalculatorButtonOperator('+');
    calculator.clickOn(button2);
    expect(calculator.displayContent()).toEqual(`1 ${button2.textContent()} `);
  });

  test('Displays operators and numbers spaced between', () => {
    const calculator = new Calculator();
    const number1 = new CalculatorButtonNumber(1);
    calculator.clickOn(number1);

    
    const operator = new CalculatorButtonOperator('+');
    calculator.clickOn(operator);

    const number2 = new CalculatorButtonNumber(1);
    calculator.clickOn(number2);
    expect(calculator.displayContent()).toEqual(`1 ${operator.textContent()} 1`);
  });
});
