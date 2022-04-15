/* There is one crucial side effect of manually setting the prototype 
to a new object : it erases the constructor property! 

This property can be used to check which constructor function created the instance, 
but since the property has been overwritten, it now gives false results: */


function Bird(name) {
    this.name = name;
}

Bird.prototype = { // manually setting the prototpye to a new object
    numLegs: 2,
    eat: function () {
        console.log("nom nom nom");
    },
    describe: function () {
        console.log("My name is " + this.name);
    }
};

let duck = new Bird("duck");
console.log(duck);

console.log(duck.constructor === Bird) // false
console.log(duck.constructor === Object) // true
console.log(duck instanceof Bird) // true


/* To fix this, whenever a prototype is manually set to a new object, 
remember to define the constructor property: 
*/

Bird.prototype = {
    constructor: Bird,
    numLegs: 2,
    eat: function () {
        console.log("nom nom nom");
    },
    describe: function () {
        console.log("My name is " + this.name);
    }
};

let oiseau = new Bird("oiseau");
console.log(oiseau);


console.log(oiseau.constructor === Bird) // true
console.log(oiseau.constructor === Object) // false
console.log(oiseau instanceof Bird) // true

//----------------------------------------------------------------------------

function Dog(name) {
    this.name = name;
}

// Only change code below this line
Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat: function () {
        console.log("nom nom nom");
    },
    describe: function () {
        console.log("My name is " + this.name);
    }
};