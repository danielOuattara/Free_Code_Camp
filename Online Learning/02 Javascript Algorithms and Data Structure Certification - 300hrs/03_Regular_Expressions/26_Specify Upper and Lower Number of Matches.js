//eg:

let A4 = "aaaah";  // true
let A2 = "aah";  // false
let multipleA = /a{3,5}h/;
multipleA.test(A4);
multipleA.test(A2);


let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // Change this line
let result = ohRegex.test(ohStr);

// /Oh{3,6}\sno/
// /Oh{3, 6}\sno/  // No space between arguments