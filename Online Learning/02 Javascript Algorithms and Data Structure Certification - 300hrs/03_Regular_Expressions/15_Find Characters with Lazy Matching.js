

let boat = "Titanic";
let regex = /t[a-z]*i/ig
let result = boat.match(regex)

console.log(result)

let regex_2 = /t[a-z]*?i/ig
result = boat.match(regex_2)
console.log(result)

let text = "<h1>Winter is coming</h1>";
let myRegex_3 = /<.*?>/; // Change this line
result = text.match(myRegex_3);
console.log(result)