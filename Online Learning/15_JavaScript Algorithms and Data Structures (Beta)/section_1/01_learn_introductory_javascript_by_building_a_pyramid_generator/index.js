/* 
JavaScript is a powerful scripting language that you 
can use to make web pages interactive. It's one of 
the core technologies of the web, along with HTML and 
CSS. All modern browsers support JavaScript.

In this practice project, you'll learn fundamental 
programming concepts in JavaScript by coding your own 
Pyramid Generator. You'll learn how to work with arrays, 
strings, functions, loops, if/else statements, and more.

*/

const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
  return (
    " ".repeat(rowCount - rowNumber) +
    character.repeat(2 * rowNumber - 1) +
    " ".repeat(rowCount - rowNumber)
  );
}

// THIS

// for (let i = 1; i <= count; i++) {
//   rows.push(padRow(i, count));
// }

// OR

// while (rows.length < count) {
//   rows.push(padRow(rows.length + 1, count));
// }

// OR

// for (let i = count; i > 0; i--) {
//   rows.push(padRow(i, count));
// }

// OR

for (let i = 1; i <= count; i++) {
  rows.unshift(padRow(i, count));
}

for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

let result = "";

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);
