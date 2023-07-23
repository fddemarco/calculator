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

  displayContent(){
    let output = '';
    for (let button of this.input){
      output += `${button.displayContent()}`;
    }
    return output;
  }
}

module.exports = {Calculator};