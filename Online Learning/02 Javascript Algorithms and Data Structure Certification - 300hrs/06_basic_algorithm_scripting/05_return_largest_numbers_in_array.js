console.log(
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])
  );
  
// -------------------------------------------------------
function largestOfFour(arr) {
  let result= [];
  arr.forEach(item => {
    result.push( Math.max.apply(null, item));
  });
  return result;
}

// -------------------------------------------------------
// Procedural approach

function largestOfFour(arr) {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    results[i] = largestNumber;
  }

  return results;
}
// -------------------------------------------------------

// Declarative approach

function largestOfFour(arr) {
  return arr.map(function(group) {
    return group.reduce(function(prev, current) {
      return current > prev ? current : prev;
    });
  });
}

// -------------------------------------------------------
// (Declarative approach)

function largestOfFour(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
}

// -------------------------------------------------------
//(Recursive approach)

function largestOfFour(arr, finalArr = []) {
  return !arr.length ? finalArr : largestOfFour(arr.slice(1), finalArr.concat(Math.max(...arr[0])))
}

//---------------------------------------------------------------

function largestOfFour(arr) {
  return arr.map(item => Math.max.apply(null, item))
}
