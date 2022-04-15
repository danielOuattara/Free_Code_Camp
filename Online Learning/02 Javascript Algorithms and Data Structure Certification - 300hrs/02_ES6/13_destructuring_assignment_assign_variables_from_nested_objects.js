
const users = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com',
    work: {
      plumber: 4,
      builder: 7,
    }
  },
  janeDoe: { 
    age: 24,
    email: 'janeDoe@freeCodeCamp.com',
    work: {
      physicist: 13,
      teacher: 9,
    }
  }
};

// const { johnDoe: { age, email, work: { plumber, builder} }} = users;
const { janeDoe: { age, email, work: { physicist : pharmacien, teacher: maitresse} }} = users;

console.log( age)
console.log( pharmacien);


const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};
  
const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;
