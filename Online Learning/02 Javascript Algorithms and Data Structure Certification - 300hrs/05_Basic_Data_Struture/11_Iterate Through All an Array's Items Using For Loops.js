 
//---------------------------------------------------------------------------
//  function greaterThanTen(arr) {
//      let newArr =  [];
//      let i = 0;
//      for (i ; i <arr.length; i++) {
//          if (arr[i] > 10) {
//              newArr.push(arr[i])
//          }
//      }
//      return newArr
//  }

//  console.log(greaterThanTen([2, 12, 8, 14, 80, 0, 1]));
 
//---------------------------------------------------------------------------
//  const greaterThanTen = (arr) => {
//      let newArr = [];
//      let i = 0;
//      for (i ; i <arr.length; i++) {
//         (arr[i] > 10) ? newArr.push(arr[i]) : null;
//      }
//      return newArr
//  }

//  console.log(greaterThanTen([2, 12, 8, 14, 80, 0, 1]));

//---------------------------------------------------------------------------
//  const greaterThanTen = (arr) => {
//      let newArr = []
//      arr.forEach(item => {
//         return item > 10 ? newArr.push(item) : null;
//      })
//      return newArr;
//  }

// //  console.log(greaterThanTen([2, 12, 8, 14, 80, 0, 1]));

//---------------------------------------------------------------------------
//  function filteredArray(arr, elem) {  // OK
//     let newArr = [];
//     // Only change code below this line
//     for (let i = 0; i < arr.length; i++) {
//       if(arr[i].indexOf(elem) === -1) {
//          newArr.push(arr[i]);
//       }
//     }
//     // Only change code above this line
//     return newArr;
//   }
  
//   console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
  
// //---------------------------------------------------------------------------

// function filteredArray(arr, elem) {  // OK
//     return arr.filter(item => item.indexOf(elem) === -1)
//  }

// const filteredArray = (arr, elem) => arr.filter( item => item.indexOf(elem) === -1 )  // OK

// console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 9]], 3));

  

//=====================================================================================

// function filteredArray(arr, elem) { // this function is expected to remove the elem in the sub arraies
//     // Only change code below this line
//     let newArray = [];
//     for (let i = 0; i < arr.length; i++) {
//       if(arr[i].indexOf(elem) >= 0) {
//          arr[i].splice(arr[i].indexOf(elem), 1)
//          newArray.push(arr[i])
//       }
//     }
//     // Only change code above this line
//     return newArray;
// }
              
// function filteredArray(arr, elem) { // this function is expected to remove the elem item in the sub arraies, /// OK
//     // Only change code below this line
//     return arr.map(subarray => {
//         return subarray.filter( item => item !== elem)
//     })
//     // Only change code above this line
// }
              
// console.log(filteredArray([[3, 2, 3], [1, 6, 7], [3, 13, 26], [19, 3, 9]], 3));

  //---------------------------------------------------------------------------
  
// function filteredArray(subarray, elem) {  /// test : OK
//     return subarray.filter( item => item !== elem)
// }
// console.log(filteredArray([3, 2, 3], 3));



// function filteredArray(arr, elem) {  // OK 
//     return arr.map(subarray =>  {
//         return subarray.filter( item => item !== elem)
//     }
// )}

// function filteredArray(arr, elem) {  // OK 
//     return arr.map(subarray => subarray.filter( item => item !== elem) 
// )}

const filteredArray = (arr, elem) => arr.map(subarray => subarray.filter( item => item !== elem) ) // OK !



    
console.log(filteredArray([[3, 2, 3], [1, 6, 7], [3, 13, 26], [19, 3, 9]], 3));
