/* object inherits its prototype directly from the constructor function that created it. 
   For example, here the Bird constructor creates the duck object:  */

function Bird(name) {
    this.name = name;
}

let duck = new Bird("Donald");

/* duck inherits its prototype from the Bird constructor
function. You can show this relationship with the isPrototypeOf method: */

console.log(Bird.prototype.isPrototypeOf(duck)); // true 
console.log(Bird.toString());
/*

function Bird(name) {
    this.name = name;
}*/

//----------------------------------------------------------------------------

function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");

// Only change code below this line
console.log("Dog.prototype.isPrototypeOf(beagle) : ", Dog.prototype.isPrototypeOf(beagle));