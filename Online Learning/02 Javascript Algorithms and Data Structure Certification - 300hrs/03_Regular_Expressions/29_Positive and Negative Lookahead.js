let quit = "qu";
let noquit = "qt";

let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;

console.log(quit.match(quRegex))
console.log(quit.match(qRegex));

console.log(noquit.match(quRegex))
console.log(noquit.match(qRegex));


console.log('-----------------------------');

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;

console.log(checkPass.test(password));



let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\w*\d{2,})/; // Change this line
let result = pwRegex.test(sampleWord);