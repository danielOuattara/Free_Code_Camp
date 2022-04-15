/* 
A constructor function that inherits its prototype object 
from a supertype constructor function can still have its 
own methods in addition to inherited methods. 
*/

function Animal() {};

Animal.prototype.eat = function () {
    console.log("nom nom nom !");
};

function Bird() {};

Bird.prototype = Object.create(Animal.prototype);

console.log(Bird.prototype) // Animal{}
console.log(Bird.constructor) // [Function: Function]

console.log('------------------------------');


Bird.prototype.constructor = Bird;

console.log(Bird.prototype) // Animal { constructor: [Function: Bird] }
console.log(Bird.constructor) // [Function: Function]


/*
In addition to what is inherited from Animal, you want to add behavior 
that is unique to Bird objects. Here, Bird will get a 'fly()' function. 
Functions are added to Bird's prototype the same way as any constructor 
function: 
*/

Bird.prototype.fly = function () {
    console.log("flap flap flap !");
}

/* Now instances of Bird will have both eat() and fly() methods: */

let duck = new Bird();
duck.eat() // nom nom nom !
duck.fly() // flap flap flap !

//-------------------------------------------------------------

function Animal() {};

Animal.prototype.eat = function () {
    console.log("nom nom nom");
};

function Dog() {};
// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
    console.log("Woof!");
}

// Only change code above this line

let beagle = new Dog();
beagle.eat()
beagle.bark()