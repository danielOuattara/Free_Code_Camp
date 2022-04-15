function Bird(name) {
    this.name = name;
}

Bird.prototype.numLegs = 2; // manually tedious

Bird.prototype.eat = function () { // manually tedious
    console.log("nom nom nom");
}

Bird.prototype.describe = function () { // manually tedious
    console.log("My name is " + this.name);
}

// Better way :  set the prototype to a new object that already contains the properties.

Bird.prototype = {
    numLegs: 2,
    eat: function () {
        console.log("nom nom nom");
    },
    describe: function () {
        console.log("My name is " + this.name);
    }
};