function Bird() {
    this.name = "Albert";
    this.color = "blue";
    this.numLegs = 2;
}

let blueBird = new Bird();

// NOTE: this inside the constructor always refers to the object being created.

console.log(blueBird.name);
console.log(blueBird.color);
console.log(blueBird.numLegs);


function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
}
// Only change code below this line

const hound = new Dog()
console.log(hound)