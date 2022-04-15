// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];



// function lookUpProfile(name, prop) {
//   // Only change code below this line

//   for (let i = 0; i < contacts.length; i++ ) {
       
//     if( contacts[i]["firstName"] === name && contacts[i][prop]) {
//         return contacts[i][prop];
//     } 
        
//     if( contacts[i]["firstName"] == name && contacts[i][prop] === undefined ) {
//         return "No such property";
//     }

//     if( contacts[i]["firstName"] !== name ) {
//         return "No such contact";    
//     }
//   }


//   // Only change code above this line
// }

// ----------------------------------------------------------------


// function lookUpProfile(name, prop) {
//   // Only change code below this line

//     for (let i = 0; i < contacts.length; i++ ) {
//         if( contacts[i].firstName === name) {
//             if( contacts[i][prop] !== undefined) {
//                 return contacts[i][prop];
//             } else {
//                 return "No such property";
//             }
//         }
//     }
//     return "No such contact";
// }

// -----------------------------------------------------------------

function lookUpProfile(name, prop) {
  for (let x = 0; x < contacts.length; x++) {
    if (contacts[x].firstName === name) {
        if (contacts[x].hasOwnProperty(prop)) {
            return contacts[x][prop];
        } else {
            return "No such property";
        }
    }
  }
  return "No such contact";
}


//----------------------------------------------------------------------


//-----------------------------------------------------------------

//  console.log(lookUpProfile("Kristian", "lastName"));

//  console.log(contacts[3]["lastName"]);
console.log(lookUpProfile("Sherlock", "likes"));
// console.log(lookUpProfile("Harry", "likes"));
// console.log(lookUpProfile("Bob", "number"));
// console.log(lookUpProfile("Bob", "potato"));
// console.log(lookUpProfile("Akira", "address"));