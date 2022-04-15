
/* this refers to the object that the method is associated with. */

let duck = {
    name: "Aflac",
    numLegs: 2,
    sayName: function () {
        return "The name of this duck is " + duck.name + ".";  // not good !
    }
};


let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function () {
        return "This dog has " + this.numLegs + " legs.";  // good !
    }
};

dog.sayLegs();