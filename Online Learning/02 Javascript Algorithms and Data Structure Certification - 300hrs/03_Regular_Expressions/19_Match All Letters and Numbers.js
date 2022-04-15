// example

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);  // true
shortHand.test(numbers); // true
longHand.test(varNames); // true
shortHand.test(varNames); // true
 

//


let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegex = /\w/g; // Change this line, Done  -- > 31
let result = quoteSample.match(alphabetRegex).length;

console.log(result)

let quoteSample2 = "The five boxing wizards jump quickly.";
let alphabetRegex2 = /\w+/g; // Change this line, Done  -->  6
let result2 = quoteSample2.match(alphabetRegex2).length;
console.log(result2)