/* 
Falsy Bouncer
---------------

Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
Hint: Try converting each value to a Boolean.

*/


// function bouncer(arr) {
//   /*
//     arr.filter( item => {
//         !Boolean(item) ?  arr.splice(arr.indexOf(item), 6): null
//     });
//   */
//  let output = [];
//  arr.forEach( item => {
//     Boolean(item) ?  output.push(item): null
//  });
//   // console.table(output);
//   return output;
// }

// console.log(bouncer([7, "ate", "", false, 9]));


//-------------------------------------------------
// function bouncer(arr) {
//   return arr.filter(item => {
//     return Boolean(item);
//   });
// }

// console.log(bouncer([7, "ate", "", false, 9]));


//-------------------------------
// function bouncer(arr) {
//   return arr.filter(item =>  Boolean(item));
// }

// console.log(bouncer([7, "ate", "", false, 9]));


//-------------------------------------------------
function bouncer(arr) {
  return arr.filter(Boolean);
}

// console.log(bouncer([7, "ate", true, false, 9]));
console.log(bouncer([false, false, true, false, 9]));