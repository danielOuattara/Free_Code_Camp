function countOnline(usersObj) {
  // Only change code below this line
  let result = 0;
  for (let user in usersObj) {
    (usersObj[user]["online"]) ? result++ : null
  }
  return result;

  // Only change code above this line
}

function countOnline2(usersObj) {
  // Only change code below this line
  let numberOfUserOnline = 0;
  for (let user in usersObj) {
    usersObj[user].online == true ? numberOfUserOnline++ : null
  }
  return numberOfUserOnline

  // Only change code above this line
}


//==========================================================================

console.log(
  countOnline2({
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  })
);

console.log(
  countOnline({
    Alan: {
      online: true
    },
    Jeff: {
      online: false
    },
    Sarah: {
      online: true
    }
  })
);

console.log(
  countOnline({
    Alan: {
      online: false
    },
    Jeff: {
      online: false
    },
    Sarah: {
      online: false
    }
  })
);