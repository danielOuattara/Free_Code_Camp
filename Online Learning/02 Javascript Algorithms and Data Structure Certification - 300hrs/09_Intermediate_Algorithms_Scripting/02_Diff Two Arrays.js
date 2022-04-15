/* 
Compare two arrays and return a new array with any items only found 
in one of the two given arrays, but not both. In other words, return 
the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.
 */

// function diffArray(arr1, arr2) {  ??
//     const newArr = [];
//     return [...arr1, ...arr2].forEach((item, index, arr) =>  {
//         newArr.push(arr.indexOf(item) === arr.lastIndexOf(item))
//     })
//     if(newArr.includes(true)) {
//         return 
//     }
//     console.log(newArr)
//     return newArr.filter(Boolean)
//   }

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); 

//-------------------------------------------------------------------

// function diffArray(arr1, arr2, newArr=[]) {  // OK!
//     [...arr1, ...arr2].forEach((item, index, arr) =>  {
//         arr.indexOf(item) === arr.lastIndexOf(item) ? newArr.push(arr[index]) : null
//     })
//     return newArr;
// }

// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); 

//-------------------------------------------------------------------

// function diffArray(arr1, arr2) {   // OK!
//     return [...arr1, ...arr2].reduce((newArr, current, index, arr) => {
//         return (arr.indexOf(current) === arr.lastIndexOf(current)) ? newArr.concat(arr[index]) : newArr
//     }, [])
// }

// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));


// const plantCategories = plantList.reduce( (categories, plant) => {   // OK!
//     return (categories.includes(plant.category) ? categories: categories.concat(plant.category))
// }, []);

// console.log(plantCategories)

//--------------------------------------------------------------------------------

// const plantCategories = plantList.reduce( (categories, plant) => {
//     return (categories.includes(plant.category) ? categories: categories.concat(plant.category))
// }, []);

// console.log(plantCategories)


// const plantCategories = [...new Set(plantList.map(item => item.category))]
// console.log(plantCategories)


// const plantCategories = new Set(plantList.map(item => item.category))
// console.log('------------------------')
// console.log(plantCategories)
// console.log('------------------------')
// console.log(...new Set(plantList.map(item => item.category)))
// console.log('------------------------')
// console.log([...new Set(plantList.map(item => item.category))])

//----------------------------------------------------------------------------------------

// function diffArray(arr1, arr2) {   // OK!
//     var newArr = [];
//     function onlyInFirst(first, second) {
//         // Looping through an array to find elements that don't exist in another array
//         for (var i = 0; i < first.length; i++) {
//             if (second.indexOf(first[i]) === -1) {
//                 // Pushing the elements unique to first to newArr
//                 newArr.push(first[i]);
//             }
//         }
//     }

//     onlyInFirst(arr1, arr2);
//     onlyInFirst(arr2, arr1);

//     return newArr;
// }

// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));


//----------------------------------------------------------------------------------------------

// function diffArray(arr1, arr2) {  // OK!
//     return arr1
//     .concat(arr2)
//     .filter(item => !arr1.includes(item) || !arr2.includes(item));
// }

// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

//----------------------------------------------------------------------------------------------

// function diffArray(arr1, arr2) {  // OK!
//     return [...arr1, ...arr2].filter(item => !arr1.includes(item) || !arr2.includes(item));
// }

// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

//----------------------------------------------------------------------------------------------

// function diffArray(arr1, arr2) {  // OK!
//     function diff(a, b) {
//         return a.filter(item => b.indexOf(item) === -1);
//     }
//     return [...diff(arr1, arr2), ...diff(arr2, arr1)];
// }

// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

//----------------------------------------------------------------------------------------------

function diffArray(arr1, arr2) {  // OK!
    function diff(a, b) {
        return a.filter(item => !b.includes(item));
    }
    return [...diff(arr1, arr2), ...diff(arr2, arr1)];
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
