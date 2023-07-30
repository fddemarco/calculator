class CalculatorButtonMapper{
  constructor(content){
    this.content = content;
  }

  value(){
    if (Number.isInteger(this.content) && 
        0 <= this.content && 
        this.content <= 9) {
          return new CalculatorButtonNumber(this.content);
        }
    if (['+', '-', '/', '*'].includes(this.content)) return new CalculatorButtonOperator(this.content);
    if (['=', 'C'].includes(this.content)) return new CalculatorButtonFunction(this.content);
  }
}

class CalculatorButton{
  constructor(content){
    this.content = `${content}`;
  }
  textContent(){
    return this.content;
  }

  displayContent(){
    return this.textContent();
  }
}

class CalculatorButtonOperator extends CalculatorButton{
  textContent(){
    if (this.content == '+') return '&plus;';
    if (this.content == '-') return '&minus;';
    if (this.content == '/') return '&divide;';
    if (this.content == '*') return '&times;';
  }

  operation(){
    if (this.content == '+') return (x, y) => x + y;
    if (this.content == '-') return (x, y) => x - y;
    if (this.content == '/') return (x, y) => x / y;
    if (this.content == '*') return (x, y) => x * y;
  }

  displayContent(){
    return ` ${this.textContent()} `;
  }
  clickOn(formulaState){
    return formulaState.clickOnOperator(this);
  }
}


class CalculatorButtonNumber extends CalculatorButton{
  clickOn(formulaState){
    return formulaState.clickOnNumber(+this.content);
  }
}

class CalculatorButtonFunction extends CalculatorButton{
  textContent(){
    if (this.content == '=') return '&equals;';
    if (this.content == 'C') return 'C';
  }
  clickOn(formulaState){
    if (this.content == '=') return formulaState.evaluate();
    if (this.content == 'C') return formulaState.clearState();
  }
}

module.exports = {
  CalculatorButtonMapper, 
  CalculatorButtonFunction, 
  CalculatorButtonOperator, 
  CalculatorButtonNumber,
}