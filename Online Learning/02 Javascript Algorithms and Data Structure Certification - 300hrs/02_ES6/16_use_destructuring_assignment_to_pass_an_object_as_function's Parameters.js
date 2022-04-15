// Use Destructuring Assignment to Pass an Object
// as a Function's Parameters


const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;

}


const profileUpdate2 = ({ name, age, nationality, location }) => {

}


const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};


const half = ({max, min}) => (max + min) / 2.0; 

console.log(half(stats));