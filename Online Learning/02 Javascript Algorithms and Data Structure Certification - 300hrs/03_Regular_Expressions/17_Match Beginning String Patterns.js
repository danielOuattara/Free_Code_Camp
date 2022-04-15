// example

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);  //true
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);  //false


//---------------
let rickyAndCal = "Cal and Ricky both like racing.";
let rickyAndCal2 = "Ricky and Cal both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);  // true
let result2 = calRegex.test(rickyAndCal2);  // fasle
console.log(rickyAndCal.match(calRegex))