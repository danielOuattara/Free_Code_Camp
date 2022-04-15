Bird = function (name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

console.log("Is crow instanceof Bird ? : ", crow instanceof Bird); // true


let canary = {
  name: "Mildred",
  color: "Yellow",
  numLegs: 2
};

console.log("Is canary instanceof Bird ?", canary instanceof Bird); // false


function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line
const myHouse = new House(4)
console.log("Is myHouse instanceof House ? : ", myHouse instanceof House); // true