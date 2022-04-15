// example

let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);  // true
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);  // false


//---------------

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line, //done
let result = lastRegex.test(caboose);  // true