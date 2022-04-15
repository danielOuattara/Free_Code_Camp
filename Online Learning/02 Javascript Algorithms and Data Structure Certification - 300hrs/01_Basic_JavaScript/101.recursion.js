  
  // ----------------- using for loop 
  
  function multiply(arr, n) {
    var product = 1;
    for (var i = 0; i < n; i++) {
        product *= arr[i];
    }
    return product;
  }

/* 
However, notice that :: multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. 
That means you can rewrite multiply in terms of itself and never need to use a loop. */

// -------------------- using recursion

function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }

  
//----------------------using recursion

function sum(arr, n) {
  // Only change code below this line
    if (n <= 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
  // Only change code above this line
}


