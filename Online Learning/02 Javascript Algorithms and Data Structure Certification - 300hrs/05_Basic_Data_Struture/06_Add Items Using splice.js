
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;
const itesToAdd = [2,3,4];

const elementToAdd = new Set([1, 2, 3])

numbers.splice(startIndex, amountToDelete, elementToAdd);
console.log(numbers);  //  [ 10, 11, 12, 13, 14, 15 ].


function htmlColorNames(arr) {
    // Only change code below this line
    arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond')
    // Only change code above this line
    return arr;
  }
  
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));