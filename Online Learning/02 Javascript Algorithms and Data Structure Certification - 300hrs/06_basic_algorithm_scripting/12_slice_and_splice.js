// function frankenSplice(arr1, arr2, n) {
//   let output = arr2.slice();
//   arr1.slice().reverse().forEach(item => {
//     output.splice(n, 0, item)
//   });
//   return output;
// }


// console.log(frankenSplice([1, 2, 3], [4, 5], 1));
// console.log(frankenSplice([1, 2], ["a", "b"], 1));
// console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
// console.log(frankenSplice([1, 2, 3, 4], [], 0));

/* 
You are given two arrays and an index.
Copy each element of the first array into the second array, in order.
Begin inserting elements at index n of the second array.
Return the resulting array. The input arrays should remain the same after the function runs.
*/

// Other solution:


// function frankenSplice(arr1, arr2, n) {
//   let output = arr2.slice();
//   output.splice(n, 0, ...arr1);
//   return output;
// }

// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

function frankenSplice(arr1, arr2, n) {
  let res = arr2.slice();
  res.splice(n, 0, ...arr1);
  return res;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1))
