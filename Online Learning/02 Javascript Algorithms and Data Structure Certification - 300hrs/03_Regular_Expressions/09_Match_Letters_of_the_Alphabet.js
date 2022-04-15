
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex);
batStr.match(bgRegex);
matStr.match(bgRegex);


// let quoteSample = "The quick brown fox jumps over the lazy dog.";
let quoteSample = "TheQuickBrownFoxJumpsOverTheLazyDog.";
let alphabetRegex = /[A-Z][a-z]+/g; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line

console.log(result)
console.log(result.join(' '))

console.log('ThisIsTheStringToSplit'.split(/(?=[A-Z])/));