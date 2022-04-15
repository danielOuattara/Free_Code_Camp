
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;

huRegex.test(humStr);  //  ture
huRegex.test(hugStr);  // ture



let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);