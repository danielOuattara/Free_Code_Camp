// function confirmEnding1(str, target) {
//   let index = target.length;
//   return str.substr(str.length - index, index) === target;
// }

// confirmEnding1("Bastian", "n");

// // ---------------------------------------------------------------------------

// //(Declarative approach)

// function confirmEnding2(str, target) {
//   return str.slice(str.length - target.length) === target;
// }

// confirmEnding2("He has to give me a new name", "name");

// // ---------------------------------------------------------------------------

// //(using Regular Expression) 
// function confirmEnding3(str, target) {
//   let re = new RegExp(target + "$", "i");
//   return re.test(str);
// }

// console.log(confirmEnding3("Bastian", "n"));
// // ---------------------------------------------------------------------------


// function confirmEnding4(str, target) {
//   return str.slice(-target.length) === target
// }

// confirmEnding4("Bastian", "n");


// ---------------------------------------------------------------------------
const confirmEnding5 = (str, target) => new RegExp(target + "$", "i").test(str);

console.log(confirmEnding5("Bastian", "n"));
// ---------------------------------------------------------------------------

