console.log(
    findLongestWordLength("The quick brown fox jumped over the lazy dog")
);

// -----------------------------------------------------------------

function findLongestWordLength(str) {
  let arrLength = [];
  str.split(" ").forEach(item => {
    arrLength.push(item.length)
  })
  return Math.max.apply(null, arrLength);
}

//--------------------------------------------------------------------

function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map(word => word.length));
}
//--------------------------------------------------------------------

function findLongestWordLength(str) {
  return Math.max.apply(null, str.split(" ").map(word => word.length));
}

// --------------------------------------------------------------------

function findLongestWordLength(s) {
  return s.split(' ').reduce(function(longest, word) {
      return Math.max(longest, word.length)
    }, 0);
}