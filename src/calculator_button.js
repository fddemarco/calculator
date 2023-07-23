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
}

class CalculatorButtonOperator extends CalculatorButton{
  textContent(){
    if (this.content == '+') return '&plus;'
    if (this.content == '-') return '&minus;'
    if (this.content == '/') return '&divide;'
    if (this.content == '*') return '&times;'
  }
}


class CalculatorButtonNumber extends CalculatorButton{

}

class CalculatorButtonFunction extends CalculatorButton{
  textContent(){
    if (this.content == '=') return '&equals;'
    if (this.content == 'C') return 'C';
  }
}

module.exports = {
  CalculatorButtonMapper, 
  CalculatorButtonFunction, 
  CalculatorButtonOperator, 
  CalculatorButtonNumber}