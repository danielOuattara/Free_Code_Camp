/* 
A common pattern while working with arrays is when you want to remove 
items and keep the rest of the array. JavaScript offers the 'splice' 
method for this, which takes arguments for the index of where to start 
removing items, then the number of items to remove. If the second 
argument is not provided, the default is to remove items through the end. 

However, the splice method mutates the original array it is called on. 
Here's an example: */

const cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
cities.splice(3, 1);
console.log(cities);  // ["Chicago", "Delhi", "Islamabad", "Berlin"]

/*
Here splice returns the string London and deletes it from the cities array.

As we saw in the last challenge, the slice method does not mutate the original 
array, but returns a new one which can be saved into a variable. Recall that 
the slice method takes two arguments for the indices to begin and end the slice 
(the end is non-inclusive), and returns those items in a new array. Using the 
slice method instead of splice helps to avoid any array-mutating side effects.


//----------------------------------------------------------------------------------

Rewrite the function nonMutatingSplice by using slice instead of splice. 
It should limit the provided cities array to a length of 3, and return 
a new array with only the first three items.

Do not mutate the original array provided to the function.
*/

function nonMutatingSplice(cities) {  // OK!
    // Only change code below this line
    return cities.slice(0,3);
  
    // Only change code above this line
  }
  
  const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
  console.log(nonMutatingSplice(inputCities));