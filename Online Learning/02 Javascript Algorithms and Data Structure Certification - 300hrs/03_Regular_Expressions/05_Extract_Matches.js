
"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);


//------------------------------------------


let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /woding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line
console.log(result)