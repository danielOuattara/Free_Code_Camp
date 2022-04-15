
function Animal() {};

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};

/*
When an object inherits its prototype from another object, 
it also inherits the supertype's constructor property. */

function Bird() { };

Bird.prototype = Object.create(Animal.prototype);

let duck = new Bird();
console.log(duck.constructor) //[Function: Animal]
duck.eat() // nom nom nom 


/* 
But duck and all instances of Bird should show that 
they were constructed by Bird and not Animal. To do so, 
you can manually set the constructor property of Bird 
to the Bird object: 
*/

Bird.prototype.constructor = Bird;
console.log(duck.constructor)  // [Function: Bird]


//----------------------------------------------------------------------



function Animal() { };
function Bird() { };
function Dog() { };

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line

Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let newDuck = new Bird();
let newBeagle = new Dog();


