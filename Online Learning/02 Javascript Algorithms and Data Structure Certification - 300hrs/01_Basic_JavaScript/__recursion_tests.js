function countDown(number) {
  if(number < 0) {
    console.log("countDown Terminated !")
    return [];
  } else {
    const numbersArray = countDown(number - 1);
    numbersArray.push(number)
    console.log(numbArray);

  }

}


countDown(5);