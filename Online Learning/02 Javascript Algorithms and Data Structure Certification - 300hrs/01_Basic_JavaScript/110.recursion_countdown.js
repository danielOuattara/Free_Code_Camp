function countup(n) {  // countdown from 1 to n 
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));


// -------------------------------------------------------------------------

// Only change code below this line
function countdown(n){
  if(n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1)
    countArray.unshift(n);
    return countArray;
  }
}
// Only change code above this line


