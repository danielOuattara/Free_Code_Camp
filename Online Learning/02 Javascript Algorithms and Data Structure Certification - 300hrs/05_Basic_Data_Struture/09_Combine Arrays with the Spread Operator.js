
let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];
let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander']; //  ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander'].

function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun']// Change this line
    return sentence;
  }
  
  console.log(spreadOut());  // ['learning', 'to', 'code', 'is', 'fun'].