
const user = { name: 'John Doe', age: 34 };

//------------- ES5
// const name = user.name;
// const age = user.age;

// ------------ ES6
const { name, age } = user;


// -------------------------------------

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const {today, tomorrow } = HIGH_TEMPERATURES;
