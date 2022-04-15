
const mongoose = require('mongoose');


const connectionParameters = {
  useNewUrlParser: true, 
  useUnifiedTopology: true
}

const connectToDB = (url) => { 
     return mongoose.connect(url, connectionParameters);
 }

module.exports = connectToDB;

