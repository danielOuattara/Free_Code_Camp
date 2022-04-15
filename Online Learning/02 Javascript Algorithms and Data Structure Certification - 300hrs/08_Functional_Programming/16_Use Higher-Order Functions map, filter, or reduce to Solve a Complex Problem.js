/* 
Now that you have worked through a few challenges using higher-order functions 
like map(), filter(), and reduce(), you now get to apply them to solve a more 
complex challenge.

Complete the code for the squareList function using any combination of map(), 
filter(), and reduce(). The function should return a new array containing the 
squares of only the positive integers (decimal numbers are not integers) when 
an array of real numbers is passed to it. An example of an array of real numbers 
is [-3, 4.8, 5, 3, -3.2].

Note: Your function should not use any kind of for or while loops or the forEach() 
function.
 */

//-----------------------------------------------------------------------------------

// MDN Example

// const numbers = [-5, 6, 2, 0, ];
// const doubledPositiveNumbers = numbers.reduce((previousValue, currentValue) => {
//     if (currentValue > 0) {
//         const doubled = currentValue * 2;
//         previousValue.push(doubled);
//     }
//     return previousValue;
// }, []);

//-----------------------------------------------------------------------------------

// console.log(doubledPositiveNumbers); // [12, 4]


/* const squareList = arr => {
    let result= []
    arr.reduce((previous, current) => {
    if(current > 0 && Number.isInteger(current)) {
        const squarred = current * current
        result.push(squarred)
    }
}, [])
return result
};

const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]) 
console.log(squaredIntegers); */

//-----------------------------------------------------------------------------------

const squareList = arr => {
    return arr.reduce((previous, current) => {
      if(current > 0 && Number.isInteger(current)) {
        const squarred = current * current
        previous.push(squarred)
    }
    return previous
}, [])
};

const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]) 
console.log(squaredIntegers);

//-----------------------------------------------------------------------------------