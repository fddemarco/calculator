const {Formula} = require('../src/formula.js');
class Calculator {
  constructor() {
    this.state = new FirstArgumentState(new Formula());
  }

  clickOn(button){
    this.state = this.state.clickOn(button);
  }

  displayContent(){
    return this.state.displayContent();
  }
}

class State{
  constructor(formula){
    this.formula = formula;
  }
  clickOn(button){
    return button.clickOn(this);
  }
  clearState(){
    const formula = new Formula();
    return new FirstArgumentState(formula); 
  }
  evaluate(){
    return this;
  }
  displayContent(){
    return this.formula.displayContent();
  }
}

class FirstArgumentState extends State{
  clickOnNumber(button){
    this.formula.extendFirstArgument(button);
    return this;
  }
  clickOnOperator(operator){
    return new OperatorState(this.formula, operator);
  }
  debug(){
    return 'FirstState'
  }
}

class OperatorState extends State{
  constructor(formula, operator){
    super(formula);
    this.formula.extendOperator(operator);
  }
  clickOnNumber(number){
    return new SecondArgumentState(this.formula, number);
  } 
  clickOnOperator(operator){
    this.formula.extendOperator(operator);
    return this;
  }
  
  debug(){
    return 'OpState'
  }
}

class SecondArgumentState extends State{
  constructor(formula, number){
    super(formula);
    this.formula.extendSecondArgument(number);
  }
  clickOnNumber(number){
    this.formula.extendSecondArgument(number);
    return this;
  } 
  clickOnOperator(_){
    return this;
  }
  evaluate(){   
    const result = this.formula.evaluate();
    return new FirstArgumentState(new Formula(result));
  }
  
  debug(){
    return 'SndState'
  }
}

module.exports = {Calculator};