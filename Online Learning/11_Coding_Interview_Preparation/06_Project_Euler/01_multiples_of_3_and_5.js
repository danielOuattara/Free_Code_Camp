/*
 Problem 1: Multiples of 3 and 5Passed
----------------------------------------
If we list all the natural numbers below 10 that are multiples of 3 or 5, 
we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below the provided parameter 
value number.
*/

//---------------------------------------- MY Solution
function multiplesOf3and5(number) {
  let result = 0;

  for (let i = 3; i < number; i++) {
    if(i % 5 === 0  && i % 3 === 0){
      result += i;
    } else if(i % 5 === 0) {
      result += i;

    } else if(i % 3 === 0) {
      result += i;

    }
  }

  return result;
}

// -------------- Another Solution

function multiplesOf3and5(number) {
  let sum = 0,
    i = 3;
  while (i < number) {
    if (i % 3 == 0 || i % 5 == 0) sum += i;
    i++;
  }
  return sum;
}
multiplesOf3and5(1000);