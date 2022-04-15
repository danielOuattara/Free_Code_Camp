let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
let result_1 = testStr.match(ourRegex);
console.log(result_1) // [ 'Repeat', index: 0, input: 'Repeat, Repeat, Repeat', groups: undefined]

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
let result_2 = twinkleStar.match(starRegex); // Change this line

console.log(result_2) // ->  [ 'Twinkle', 'twinkle' ]