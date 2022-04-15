// // Use getters and setters to Control Access to an Object

class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);

// ------------------------------------------------

class Thermostat {
  constructor(fahrenheit) {
    this._fahrenheit = fahrenheit;
  }

  get temperature() { // to Celcius
    return (this._fahrenheit - 32) * 5 / 9;
  }

  set temperature(celcius) { // to Fahrenheit
    this._fahrenheit = celcius * 9.0 / 5 + 32;
  }

}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp)
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp)