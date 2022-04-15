function Bird(name, color) {
    this.name = name; //own property
    this.color = color; //own property
}

Bird.prototype.numLegs = 2; // prototype property
Bird.prototype.eyes = 2;
Bird.prototype.wings = 2;


let duck = new Bird("Donald", ["red", "green", "purple"]);
console.log("duck : ",duck);
console.log(duck.name);
console.log(duck.numLegs);

let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
    console.log("property in duck : ", property)
    if (duck.hasOwnProperty(property)) {
        ownProps.push(property);
    } else {
        prototypeProps.push(property)
    }
}

console.log('ownPropos = ', ownProps);
console.log('prototypeProps = ', prototypeProps);


//--------------------------------------------------------------


function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps2 = [];
let prototypeProps2 = [];


console.log("-----------------------------------");

// Only change code below this line
for (let prop in beagle) {
    if (beagle.hasOwnProperty(prop)) {
        ownProps2.push(prop)

    } else {
        prototypeProps2.push(prop)
    }
}

console.log('ownPropos2 = ', ownProps2);
console.log('prototypeProps2 = ', prototypeProps2);

