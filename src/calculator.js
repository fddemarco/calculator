class Calculator {
  constructor() {
    this.input = [];
  }

  clickOn(button){
    this.input.push(button);
  }

  clickedOn(){
    return this.input;
  }
}

module.exports = {Calculator};