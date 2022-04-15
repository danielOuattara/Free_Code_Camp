function rangeOfNumbers(startNum, endNum) {

    if(startNum === endNum) {
      return [startNum];
    }

    if(startNum > endNum) {
      return [];
    } else {

      const rangeArray = rangeOfNumbers(endNum-1)
      rangeArray.push(endNum);
      return rangeArray;
    }
};
console.log(rangeOfNumbers(1, 5));
// console.log(rangeOfNumbers(10, 9));

// console.log(rangeOfNumbers(4, 4));

//

function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum) {
    return []
  }

  if (startNum === endNum) {
    return [endNum]

  } else {

    const countArray = rangeOfNumbers(startNum, endNum - 1);
    countArray.push(endNum);
    return countArray;
  }
};
//console.log(rangeOfNumbers( 6, 9))