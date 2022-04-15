
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];
fruits.indexOf('dates');    // -1 : don't exist
fruits.indexOf('oranges');  // 2
fruits.indexOf('pears');    // 4


// function quickCheck(arr, elem) {
//     // Only change code below this line
//     if( arr.indexOf(elem) === -1) { return false; }
//     // Only change code above this line
//     return true;
//   }
  
const quickCheck = (arr, elem) => {
    return arr.indexOf(elem) === -1 ? false : true 
}
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));  // false




  console.log(filteredArray([["amy", "beth", "sam"], ["dave", "sean", "peter"]], "peter"))