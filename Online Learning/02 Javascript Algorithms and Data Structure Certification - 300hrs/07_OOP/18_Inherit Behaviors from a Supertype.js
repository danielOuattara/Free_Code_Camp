function Animal() {};

Animal.prototype.eat = function () {
    console.log("nom nom nom");
};

//let animal = new Animal(); // create an instance of Animal, disadvantages way !!

let animal = Object.create(Animal.prototype);  // better way !

/* 
Object.create(obj) creates a new object, and sets (obj) 
as the new object's prototype. 

Recall that the prototype is like the "recipe" for creating an object. 
By setting the 'prototype of animal' to be the 'prototype of Animal', 
you are effectively giving the animal instance the same "recipe" as any 
other instance of Animal. */

animal.eat(); // nom nom nom
console.log(animal instanceof Animal); // true

// Only change code below this line

let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line


console.log(duck) // Animal{}