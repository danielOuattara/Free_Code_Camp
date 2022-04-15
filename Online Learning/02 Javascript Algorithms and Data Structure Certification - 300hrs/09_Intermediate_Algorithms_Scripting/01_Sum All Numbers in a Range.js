/* 
We'll pass you an array of two numbers. Return the sum of those two numbers 
plus the sum of all the numbers between them. The lowest number will not 
always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers 
between 1 and 4 (both inclusive) is 10.
 */

function sumAll(arr) {
    let sum = 0;
    if (arr[0] < arr[1]) {
        for (let i = arr[0]; i <= arr[1]; i++) {
            sum += i;
        }
    } else {
        for (let i = arr[1]; i <= arr[0]; i++) {
            sum += i;
        }
    }
    return sum;
}

// console.log(sumAll([1, 4]));


//-----------------------------------------------------------


function sumAll(arr) {
    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1]);
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
}

// sumAll([1, 4]);

//-------------------------------------------------------

function sumAll(arr) {
    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1]);
    let sum = (max + min) * (max - min + 1) / 2;
    return sum
}

console.log(sumAll([1, 4]));

//---------------------------------------------------------

function sumAll(arr) {
    let sumBetween = 0;
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
        sumBetween += i;
    }
    return sumBetween;
}

sumAll([1, 4]);