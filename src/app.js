const { Calculator } = require("./calculator.js");
const {CalculatorButtonMapper} = require("./calculator_button.js");


class CalculatorController {
  constructor(calculator) {
    this.calculator = calculator;
  }

  createButtonContainer(){
    const fstRow = [7, 8, 9, '/'];
    const sndRow = [4, 5, 6, '*'];
    const thdRow = [1, 2, 3, '-'];
    const lastRow = ['C', 0, '=', '+'];
  
    const buttons = [fstRow, sndRow, thdRow, lastRow];
    buttons.map(row => this.createButtonRow(row));
    controller.displayContent();
  }
  
 createButtonRow(rowContent){
    const buttonContainer = document.querySelector('.button-container');
    const buttonRow = document.createElement('div');
    buttonRow.classList.add('button-row');
    buttonContainer.appendChild(buttonRow);
  
    rowContent.map(content => this.createButton(content, buttonRow));
  }
  
  createButton(content, buttonRow){
    const button = document.createElement('button');
    button.classList.add('button');
    buttonRow.appendChild(button);

    const buttonObject = new CalculatorButtonMapper(content).value()
    button.innerHTML = buttonObject.textContent();  
    button.addEventListener('click', () => {
        this.calculator.clickOn(buttonObject);
        this.displayContent();
      }      
    )
  }
  
  displayContent(){
    const displayContent = this.calculator.displayContent();
    const displayScreen = document.querySelector('.screen-display');
    displayScreen.innerHTML = displayContent;
  }
}


const calculator = new Calculator();
const controller = new CalculatorController(calculator)

controller.createButtonContainer();


