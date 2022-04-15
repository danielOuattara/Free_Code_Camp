let swan = new Bird();
swan.name = "Carlos";
swan.color = "white";

// manually tedious task, better insert parameter in function constructor

function Bird(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
}

let cardinal = new Bird("Bruce", "red");
console.log("cardinal : ",  cardinal)

//-----------------------------------------------------------------------

function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4
}

let terrier = new Dog("Bobby", "brown");
console.log("terrier : ", terrier);