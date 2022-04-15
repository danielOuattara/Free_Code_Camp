
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american);  // true
rainbowRegex.test(british);   // true



let americanfavWord = "favorite";
let britishFavWord = "favourite"
let favRegex = /favou?rite/; // Change this line

let result = favRegex.test(americanfavWord);  // true
let result2 = favRegex.test(britishFavWord);  // true