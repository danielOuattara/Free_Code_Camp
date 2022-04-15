function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");


//-----------------------------------------------

let ownProps = [];

for (let property in duck) {
    if (duck.hasOwnProperty(property)) {
        ownProps.push(property);
    }
}

console.log(ownProps);


//--------------------------------------------------------------------

function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let canary2 = new Bird("Tweety");
let ownProps2 = [];
// Only change code below this line
for (let props in canary2) {
    if (canary2.hasOwnProperty(props)) ownProps2.push(props);
}
// console.log(ownProps2);