/* Write Concise Object Literal Declarations 
Using Object Property Shorthand */

const getMousePosition = (x, y) => ({
  x: x,
  y: y
});


const getMousePosition = (x, y) => ({ x, y });


const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {
    name,
    age,
    gender
  };
  // Only change code above this line
};