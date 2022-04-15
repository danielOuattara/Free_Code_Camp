let duck = {
    name: "Aflac",
    numLegs: 2,
    sayName: function () {
        return "The name of this duck is " + duck.name + ".";
    },
    sayName : () => {
        return "The name of this duck is " + duck.name + ".";
    },
    sayName() {
        return "The name of this duck is " + duck.name + ".";
    }
};
duck.sayName();


let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs() {
        return 'This dog has 4 legs.'
    }
};

console.log(dog.sayLegs());