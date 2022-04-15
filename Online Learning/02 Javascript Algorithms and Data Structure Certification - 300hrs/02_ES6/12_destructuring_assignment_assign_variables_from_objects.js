
const user = { name: 'John Doe', age: 34 };

//------

const { name: userName, age: userAge } = user;

//-------

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
const { today: highToday, tomorrow: highTomorrow  } = HIGH_TEMPERATURES;
