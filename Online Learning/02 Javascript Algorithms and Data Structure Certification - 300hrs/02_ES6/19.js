/* Write Concise Declarative Functions with ES6 */

// ES5
const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};

//~ ES5 + ES6 array function
const person2 = {
  name: "Taylor",
  sayHello: () => {
    return `Hello! My name is ${this.name}.`;
  }
};


//ES6 
const person3 = {
  name: "Taylor",
  sayHello(){
    return `Hello! My name is ${this.name}.`;
  }
};



//ES6 
const person4= {
  name: "Taylor",
//   sayHello2 = () => {  // SyntaxError
//     return `Hello! My name is ${this.name}.`;
//   }
};


const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
bicycle.setGear(3);
console.log(bicycle.gear);



