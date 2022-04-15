//----------------------------------------------------------------------------

// function destroyer(arr) {  // OK!
//     let destroyArgs = Array.from(arguments);
//     const argsToRemove = Array.from(arguments).slice(1);
//     let output = [...destroyArgs[0]];
//     return output.filter(item => !argsToRemove.includes(item));
// }
// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

//----------------------------------------------------------------------------

// function destroyer(arr, ...argsToRemove) {  // OK!
//     let output = [...Array.from(arguments)[0]];
//     return output.filter(item => !argsToRemove.includes(item));
// }
// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

//----------------------------------------------------------------------------

function destroyer(arr) {  // OK!
    let output = [...Array.from(arguments)[0]];
    let argsToRemove = Array.from(arguments).slice(1)
    for (let i = 0; i < output.length; i++) {
        for(let j = 0; j < argsToRemove.length; j++) {
            output[i] == argsToRemove[j] ?  delete output[i] : output;
        }
    }
    return output.filter(item => item  !== null);
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

//----------------------------------------------------------------------------

















// function destroyer(arr) {
//     let args = Array.from(arguments);
//     for (let i = 1; i < args.length; i++) {
//         console.log(args[i])
//        return args[0].filter(function(item) {
//            return item !== args[i]
//        }) 
//     }
//     return args[0]
// }
// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));


// function destroyer(arr) {
//     let args = Array.from(arguments);
//     for (let i = 1; i < args.length; i++) {
//         return args[0].filter((item) => item !== args[i])
//     }
//     return args[0]

// }
// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));




// function destroyer(arr) {
//     console.log(arr)
//     let args = Array.from(arr);
//     for (let i = 1; i < args.length; i++) {
//         console.log(i)
//         // return args[0].filter(item => item !== arr[i])
//     }
// }

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));