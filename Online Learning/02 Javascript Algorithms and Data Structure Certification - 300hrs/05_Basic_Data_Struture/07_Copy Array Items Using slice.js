let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'] //  ['rain', 'snow', 'sleet', 'hail', 'clear']
let todaysWeather = weatherConditions.slice(1, 3);  // ['snow', 'sleet']


function forecast(arr) {
    // Only change code below this line
    return arr.slice(2,4);
  }
  // Only change code above this line
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));  //  [ 'warm', 'sunny' ]