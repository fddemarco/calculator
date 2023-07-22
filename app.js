class NotImplementedError extends Error {
  constructor(message) {
    this.message = 'Should be implemented in a subclass';
    this.name = 'NotImplementedError';
  }
  logError() {
    console.error(`[${this.name}] ${this.message}`);
  }
}

class Calculator {
  constructor(x, y, op) {
    this.x = +x;
    this.y = +y;
    this.op = this.stringToOperator(op);
  }

  calc() {
    return this.op.apply();
  }

  stringToOperator(op){
    let operatorConstructor = undefined;
    if (op == '+') operatorConstructor = SumOperator;
    else if (op == '-') operatorConstructor = SubtractionOperator;
    else if (op == '*') operatorConstructor = MultiplicationOperator;
    else if (op == '/') operatorConstructor = DivisionOperator;
    else throw new Error('Invalid operator!');

    return new operatorConstructor(this.x, this.y)
  }
}

class Operator {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  apply(){
    throw new NotImplementedError();
  }
}

class SumOperator extends Operator {
  apply(){
    return this.x + this.y;
  }
}

class SubtractionOperator extends Operator {
  apply(){
    return this.x - this.y;
  }
}

class MultiplicationOperator extends Operator {
  apply(){
    return this.x * this.y;
  }
}

class DivisionOperator extends Operator {
  apply(){
    return this.x / this.y;
  }
}

module.exports = Calculator;