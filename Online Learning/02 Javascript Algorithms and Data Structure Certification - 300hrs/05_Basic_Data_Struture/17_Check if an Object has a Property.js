let users = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19,
        online: true
    }
};


// function isEveryoneHere(userObj) {  // OK!
//     // Only change code below this line
//     return ['Alan', 'Jeff', 'Sarah', 'Ryan'].every(person => userObj.hasOwnProperty(person))
//     // Only change code above this line
// }
// console.log(isEveryoneHere(users));


// function isEveryoneHere(userObj) {  // OK!
//     // Only change code below this line
//     return ['Alan', 'Jeff', 'Sarah', 'Ryan'].every(person =>  person in userObj)
//     // Only change code above this line
// }
// console.log(isEveryoneHere(users));


// function isEveryoneHere(userObj, arr) {  // OK!
//     // Only change code below this line
//     return arr.every(person => userObj.hasOwnProperty(person))
//     // Only change code above this line
// }


// function isEveryoneHere(userObj, arr) {  // OK!
//     return arr.every(person => person in userObj)
// }


// const isEveryoneHere = (userObj, arr) => {// OK!
//     return arr.every(person => {
//         return userObj.hasOwnProperty(person);
//     })
// }


// const isEveryoneHere = (userObj, arr) => {// OK!
//     return arr.every(person => {
//         return person in userObj;
//     })
// }


// const isEveryoneHere = (userObj, arr) => {  // OK!
//     return arr.every(person => userObj.hasOwnProperty(person))
// }


// const isEveryoneHere = (userObj, arr) => {  // OK!
//     return arr.every(person =>  person in userObj)
// }


// const isEveryoneHere = (userObj, arr) => arr.every(person => userObj.hasOwnProperty(person))  // OK!

const isEveryoneHere = (userObj, arr) => arr.every(person => person in userObj)  // OK!


list = ['Alan', 'Jeff', 'Sarah', 'Ryan']
console.log(isEveryoneHere(users, list));


const person = {
    fname:" John",
    lname:" Doe",
    age: 25
  };
  
  for (let x in person) {
    console.log(x)
  }