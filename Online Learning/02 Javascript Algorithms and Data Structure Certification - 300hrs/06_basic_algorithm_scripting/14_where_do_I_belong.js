// function getIndexToIns(arr, num) {

//   // function to sort arr
//   arr.sort((a,b) => {
//     return a - b
//   })

//   // function to output the "positon" of num
//   for( let i = 0; i < arr.length; i++) {
// /*     if(num < arr[0]){
//       return 0;

//     } else */ if( arr[arr.length-1] <= num) {
//       return arr.length;
  
//     } else if( arr[i] >= num) {
//       return i;

//     } else if( arr.length === 0 ) {
//       return parseInt("0");
//     }
//   }
// }

// console.log(getIndexToIns([], 5));


function getIndexToIns(arr, num) {

  // function to sort arr
  arr.sort((a,b) => {
    return a - b
  })

  for( let i = 0; i < arr.length; i++) {
        if( arr[i] >= num) {
            return i;
        }
    }
    return arr.length;
}

console.log(getIndexToIns([], 5));


//-------------------------------------------------

function getIndexToIns(arr, num) {
  return arr.filter(val => num > val).length;
}

// -------------------------------------------------

function getIndexToIns(arr, num) {
  // sort and find right index
  let index = arr
    .sort((curr, next) => curr - next)
    .findIndex(currNum => num <= currNum);
  // Returns index or total length of arr
  return index === -1 ? arr.length : index;
}


// --------------------------------------------------

function getIndexToIns(arr, num) {
  return arr
    .concat(num)
    .sort((a, b) => a - b)
    .indexOf(num);
}

getIndexToIns([1, 3, 4], 2);

//-------------------------------------------------------------------

function getIndexToIns(arr, num) {
  let numIndex = arr.sort((a, b) => a - b).findIndex( val => num <= val)
  return numIndex === -1 ? arr.length : numIndex
}

console.log(getIndexToIns([5, 3, 20, 3], 5));