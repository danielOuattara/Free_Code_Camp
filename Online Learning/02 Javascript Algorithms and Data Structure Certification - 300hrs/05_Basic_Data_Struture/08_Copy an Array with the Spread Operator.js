
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];


function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
    newArr.push([...arr]);
    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));  // [ [ true, false, true ], [ true, false, true ] ]