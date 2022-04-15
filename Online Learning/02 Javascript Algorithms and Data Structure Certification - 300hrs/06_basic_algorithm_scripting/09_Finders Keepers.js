function findElement(arr, func) {
    let num = 0;
    (arr.some( item =>  console.log(func(item))))
    return num;
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);


//------------------------------------------------------------------
  function findElement(arr, func) {
    let firstIndexOfTrue = arr.map( item => func(item)).indexOf(true);
    return arr[firstIndexOfTrue]
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);


//--------------------------------------------------------------------
  function findElement(arr, func) {
    return arr[arr.map( item => func(item)).indexOf(true)]
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);


//--------------------------------------------------------------------
  function findElement(arr, func) {
    return arr.find( item => func(item))
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);