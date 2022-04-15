function Bird(name) {
  this.name = name;
}

Bird.prototype.numLegs = 2; // prototype property


function Dog() {
  this.name = "Rupert";
  this.color = "brown";
}

Dog.prototype.numLegs = 2; // prototype property


let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor); // [ Function: Bird]
console.log(beagle.constructor); // [ Function: Dog]


console.log(duck.constructor === Bird); // true
console.log(duck.constructor === Dog); // false
console.log(beagle.constructor === Bird); // false
console.log(beagle.constructor === Dog); // true



function joinBirdFraternity(candidate) {
  if (candidate.constructor === Bird) {
    return true;
  } else {
    return false;
  }
}

console.log(joinBirdFraternity(duck)) // true
console.log(joinBirdFraternity(beagle)) // false


function joinBirdFraternity(candidate) {
  return candidate.constructor === Bird
}

