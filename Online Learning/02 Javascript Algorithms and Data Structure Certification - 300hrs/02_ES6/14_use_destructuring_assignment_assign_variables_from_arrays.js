// array

numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// array spread
numbersValue = [...numbers];

//array destructuring
const[a, b, , , , , , , , c ] = [...numbers];

console.log(numbers);
console.log(numbersValue);
console.log(b)
console.log(c)

// -------------------------------
// object

const distances = {
    paris: 20,
    londres: 13,
    gao: 345
}

// spread on objects
const autres = {...distances};

console.log("distances = ", distances);
console.log("autres = " , autres);

// destructuring on objects
// const { paris, londres, gao} = distances;
// console.log(paris); // 20
// // destructuring on objects

const { paris: france, londres: angleterre, gao: mali} = distances;
console.log(france); // 20
