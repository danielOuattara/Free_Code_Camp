

//eg
let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);


//
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/gi; // Change this line
let result = sample.match(countWhiteSpace);