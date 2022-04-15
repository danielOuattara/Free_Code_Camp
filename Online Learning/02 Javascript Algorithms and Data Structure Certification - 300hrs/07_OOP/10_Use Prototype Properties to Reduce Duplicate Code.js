function Bird(name) {
    this.name = name;
}

const pulu_pulu = new Bird("pulu_pulu");
console.log(pulu_pulu);
console.log(pulu_pulu.numLegs);


Bird.prototype.numLegs = 2;

const pili_pili = new Bird("pili_pili");
console.log(pili_pili);
console.log(pili_pili.numLegs);

//-------------------------------------------------------------
function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

// Only change code above this line
let beagle = new Dog("Snoopy");
console.log(beagle)
console.log(beagle.numLegs)