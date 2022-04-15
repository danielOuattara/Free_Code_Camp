
/* 
If you want to find either Penguin or Pumpkin in a string, 
you can use the following Regular Expression:*/

/P(engu|umpk)in/g 

let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);  // true




let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin\s(D\.)?|Eleanor)\sRoosevelt/; // Change this line
let result = myRegex.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works