/* 
A common pattern in JavaScript is to execute a function 
as soon as it is declared: 
*/

(function () {   // Immediately Invoked Function Expression (IIFE)
    console.log("Chirp, chirp !")
})();

/* 
This is an anonymous function expression that executes 
right away, and outputs Chirp, chirp! immediately. 
*/

//-----------------------------------------------------------------------
function makeNest() {  // before
    console.log("A cozy nest is ready");
  }
  
makeNest();

(function() {  // after
    console.log("A cozy nest is ready");
  })()
  
  