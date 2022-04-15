
// Handle a Fulfilled Promise with then



// const makeServerRequest = new Promise((resolve, reject) => {
//   let responseFromServer = true;    
//   if(responseFromServer) {
//     resolve("We got the data");
//     makeServerRequest.then(result => {
//       console.log(result);
//     })
//   } else {  
//     reject("Data not received");
//   }
// });


//----------------------------------------------------------------------


// const makeServerRequest = new Promise((resolve, reject) => { // OK
//   let responseFromServer = true;
//   if (responseFromServer) {
//     resolve("We got the data");
//   } else {
//     reject("Data not received");
//   }
// });
// makeServerRequest.then(result => console.log(result))

//--------------------------------------------------------------------------

const executor = (resolve, reject) => {  // OK
  let responseFromServer = true;  
  if(responseFromServer) {
    resolve("We got the data");
    makeServerRequest.then(result => {
      console.log(result);
    })
  } else {  
    reject("Data not received");
  }
};

const makeServerRequest = new Promise( executor);
makeServerRequest.then(result => console.log(result))
makeServerRequest.catch(error => console.log(error))

//----------------------------------------------------------------------------

// const makeServerRequest = new Promise((resolve, reject) => { // OK
//   let responseFromServer = false;
//   if (responseFromServer) {
//     resolve("We got the data");
//   } else {
//     reject("Data not received");
//   }
// })
// .then(result => console.log(result))
// .catch(error => console.log(error))