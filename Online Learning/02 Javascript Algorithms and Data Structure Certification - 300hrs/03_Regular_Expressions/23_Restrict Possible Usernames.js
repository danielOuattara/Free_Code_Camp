
let username = "JackOfAllTrades";

// let userCheck = /^([a-z]{2})|^[a-z][a-z]+\d*$/i; // Change this line
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]+\d\d+$/i; // Change this line
let result = userCheck.test(username);




//  /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;

// /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;