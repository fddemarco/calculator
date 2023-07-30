class Formula{
  constructor(firstArgument = 0){
    this.firstArgument = firstArgument;
    this.operator = undefined;
    this.secondArgument = undefined;
  }

  clickOn(button){
    this.state = this.state.clickOn(button);
  }
  extendFirstArgument(number){
    this.firstArgument = this.addDigit(this.firstArgument, number);
  }
  extendOperator(operator){
    this.operator = operator;
  }
  extendSecondArgument(number){
    if(!this.secondArgument) this.secondArgument = 0;
    this.secondArgument = this.addDigit(this.secondArgument, number);
  }
  addDigit(tens, ones){
    return tens * 10 + ones;
  }
  evaluate(){
    const operation = this.operator.operation();
    return operation(this.firstArgument, this.secondArgument);
  }
  displayContent(){
    let content = `${this.firstArgument}`;
    if (this.operator !== undefined){
      content = content.concat(` ${this.operator.textContent()} `);
    }
    if (this.secondArgument !== undefined){
      content = content.concat(`${this.secondArgument}`);
    }
    return  content;
  }
}


module.exports = {
  Formula
}