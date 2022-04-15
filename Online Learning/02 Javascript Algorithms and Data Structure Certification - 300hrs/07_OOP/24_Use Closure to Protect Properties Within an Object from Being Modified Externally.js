/* 
In the previous challenge, bird had a public property name. 
It is considered public because it can be accessed and changed 
outside of bird's definition. 

The simplest way to make this property private is by creating 
a variable within the constructor function. 
This changes the scope of that variable to be within the constructor 
function versus available globally. This way, the variable can only 
be accessed and changed by methods also within the constructor function.
 */


function Bird() {
    let hatchedEgg = 10;
    this.getHatchedEggCount = function () {
        return hatchedEgg;
    };
}

let ducky = new Bird();

/* 
Here 'getHatchedEggCount' is a privileged method, because it has access to 
the private variable 'hatchedEgg'. This is possible because 'hatchedEgg' is 
declared in the same context as 'getHatchedEggCount'. 
In JavaScript, a function always has access to the context in which it was 
created: his is called closure. */


//-----------------------------------------------------------------------------

/* Change how weight is declared in the Bird function so it is a private variable. 
Then, create a method getWeight that returns the value of weight 15.
 */
function Bird() {  // before
    this.weight = 15;  
}


function Bird() {  // after
    let weight = 15;
    this.getWeight = function () {
        return weight;
    }
}