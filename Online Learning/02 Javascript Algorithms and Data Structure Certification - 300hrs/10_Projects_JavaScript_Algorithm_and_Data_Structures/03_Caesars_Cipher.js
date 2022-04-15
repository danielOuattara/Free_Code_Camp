/* 

One of the simplest and most widely known ciphers is a Caesar cipher, 
also known as a shift cipher. In a shift cipher the meanings of the 
letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters 
are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character 
(i.e. spaces, punctuation), but do pass them on.
*/



//-------------------------------------------------
/* This funtion rotates alphabet array to number-times 
   *  It requires an array and a number, representating the number of time
   *  the alphbet is shifted
   */
function alphabetRotator (alphabetArray, number) {
    return alphabetArray.map((item, index, arr) => {
      index = index + number;
      if(index >= 26) {
        index = index % 26;
      }
      return arr[index];
  })
}

//-------------------------------------------------
  /* This function creates an object relation between 2 arrays: the natural alphabet 
   * and the rotated one out from 'alphabetRotator' function
   */
function relationMapper(arr1, arr2) {
    let relationMapper = {};
    for (let i = 0; i < arr1.length; i++) {
        relationMapper[arr1[i]] = arr2[i]
    }
    return relationMapper;
}


//--------------------------------------------------
function rot13(str) {
  let alphabetArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  let alphabetRoot13 = alphabetRotator(alphabetArray, 13);
  let relationMap = relationMapper(alphabetRoot13, alphabetArray);
  let endOfString= '';

  if((/\.|\?|!/).test(str[str.length-1])) {  // if str ends with: ? ! .
    endOfString = str[str.length-1];
    str = str.slice(0, str.length-1);
  }
  str = str.split(' ').join('-');
  let output = ''
  for (let i = 0; i <  str.length; i++) {
     output += relationMap[str[i]]
  }
  output = (output + endOfString).split('undefined').join(' ')
  return output;
}

console.log(rot13("SERR PBQR PNZC"))





