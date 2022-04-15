
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);
console.log(maximus)

//--------------------------------------------------
const arr2 = [6, 89, 3, 45];
const maximus2 = Math.max(...arr);
console.log(maximus2)

//--------------------------------------------------

const arr3 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr4;

arr4 = [...arr3];  // Change this line

console.log(arr4);