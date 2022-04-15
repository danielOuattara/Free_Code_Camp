/* Notice in the example below that the describe 
method is shared by Bird and Dog: */

function Bird(name) {
    this.name = name;
}

Bird.prototype = {
    constructor: Bird,
    describe: function () {
        console.log("My name is " + this.name);
    }
};
//--------------------------------------

function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    constructor: Dog,
    describe: function () {
        console.log("My name is " + this.name);
    }
};


/* The describe method is repeated in two places. The code can be edited 
to follow the DRY principle by creating a supertype (or parent) called Animal */

function Animal() {};

Animal.prototype = {
    constructor: Animal,
    describe() {
        console.log(`My name is ${this.name}`)
    }
}

/* Since Animal includes the describe method, you can remove it from Bird and Dog: */

Bird.prototype = {
    constructor: Bird
};

Dog.prototype = {
    constructor: Dog
};


//----------------------------------------------------------------------------------------------------


function Cat(name) {
    this.name = name;
  }
  
  Cat.prototype = {
    constructor: Cat,
  };
  
  function Bear(name) {
    this.name = name;
  }
  
  Bear.prototype = {
    constructor: Bear,
  };
  
  function Animal() { }
  
  Animal.prototype = {
    constructor: Animal,
    eat: function() {
      console.log("nom nom nom");
    }
  
  };