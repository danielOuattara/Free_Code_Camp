/* 
Make a function that looks through an array of objects (first argument) 
and returns an array of all objects that have matching name and value 
pairs (second argument). Each name and value pair of the source object 
has to be present in the object from the collection if it is to be included 
in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, 
{ first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
and the second argument is { last: "Capulet" }, then you must return the third 
object from the array (the first argument), because it contains the name and 
its value, that was passed on as the second argument. */

//----------------------------------------------------------------------------------


function whatIsInAName(collection, source) {  // OK!
    const sourceKeys = Object.keys(source);
    return collection.filter(item => {
        for (let i = 0; i < sourceKeys.length; i++) {
            if (!item.hasOwnProperty(sourceKeys[i]) || item[sourceKeys[i]] !== source[sourceKeys[i]]) {
                return false
            } 
        }
        return true
    })

}
// whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
// whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }))

//----------------------------------------------------------------------------------------------------

// function whatIsInAName(collection, source) {  ???
//     const arr = [];
//     collection.filter((item, index) => {
//         for (let i = 0; i < Object.keys(source).length; i++) {
//             console.log('------------------------------')
//             console.log("object index = ", index)
//             console.log(Object.keys(source)[i], ",", Object.values(source)[i]);
//             if (item.hasOwnProperty(Object.keys(source)[i]) && item[Object.keys(source)[i]] === Object.values(source)[i]) {
//                 console.log("OK", Object.keys(source)[i])
//             } else {
//                 console.log("No")
//             }
//         }
//     })
//     console.log(arr)
//     console.log(source.prototype.hasOwnProperty("apple"))
//     return arr;
// }
// //   whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
// //   whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })
// whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })

//--------------------------------------------------------------------------------------------

// function whatIsInAName(collection, source) {  ???
//     const arr = [];

//     for (let i = 0; i < Object.keys(source).length; i++) {
//         console.log('------------------------------')
//         console.log(Object.keys(source)[i], ",", Object.values(source)[i]);
//         // collection.map(item =>  {            
//         //     if( item.hasOwnProperty(Object.keys(source)[i]) && item[Object.keys(source)[i]] === Object.values(source)[i] ) {
//         //         console.log("OK", Object.keys(source)[i])
//         //     } else {
//         //         console.log("No")
//         //     }
//         // })
//     }
//     console.log(arr)
//     return arr;
// } 
//   whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
//   whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })

// whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })

//----------------------------------------------------------------------------------------------------

// function whatIsInAName(collection, source) {  ???
//     const arr = [];

//     collection.map((item, index) =>  {            
//         for (let i = 0; i < Object.keys(source).length; i++) {
//             console.log('------------------------------')
//             console.log("object index = ", index)
//             console.log(Object.keys(source)[i], ",", Object.values(source)[i]);
//             if( item.hasOwnProperty(Object.keys(source)[i]) && item[Object.keys(source)[i]] === Object.values(source)[i] ) {
//                 console.log("OK", Object.keys(source)[i])
//                 arr.push(item)
//             } else {
//                 console.log("No")
//             }
//         }
//     })
//     console.log(arr)
//     return arr;
// } 
// //   whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
// //   whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })

// whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })

//----------------------------------------------------------------------------------------------------


// function whatIsInAName(collection, source) {  ???
//     const arr = [];


//     collection.filter((item, index) => {
//         for (let i = 0; i < Object.keys(source).length; i++) {
//             console.log('------------------------------')
//             console.log("object index = ", index)
//             console.log(Object.keys(source)[i], ",", Object.values(source)[i]);
//             if (item.hasOwnProperty(Object.keys(source)[i]) && item[Object.keys(source)[i]] === Object.values(source)[i]) {
//                 console.log("OK", Object.keys(source)[i])
//             } else {
//                 console.log("No")
//             }
//         }
//     })
//     console.log(arr)

//     console.log(source.prototype.hasOwnProperty("apple"))
//     return arr;
// }
// //   whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
// //   whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })

// whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })



//-------------------------------------------------------------------------------

// function whatIsInAName(collection, source) {  // OK!
//     var sourceKeys = Object.keys(source);

//     // filter the collection
//     return collection.filter(function (obj) {
//         return sourceKeys.map(function (key) {
//                 return obj.hasOwnProperty(key) && obj[key] === source[key];
//             })
//             .reduce(function (a, b) {
//                 return a && b;
//             });
//     });
// }
// console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }))


//----------------------------------------------------------------------------------

// function whatIsInAName(collection, source) { // OK!
//     const sourceKeys = Object.keys(source);
//     return collection.filter(function(obj) {
//         return sourceKeys.every(function(key) {
//             return obj.hasOwnProperty(key) && obj[key] === source[key];
//         });
//     });
// }

// console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }))

//-----------------------------------------------------------------------------------

// function whatIsInAName(collection, source) {  // OK!
//     const sourceKeys = Object.keys(source);
//     return collection.filter( item => {
//         for (let i = 0; i < sourceKeys.length; i++) {
//             if (!item.hasOwnProperty(sourceKeys[i]) || item[sourceKeys[i]] !== source[sourceKeys[i]]) {
//                 return false;
//             }
//         }
//         return true;
//     });
// }

// console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }))

//-------------------------------------------------------------------------------------