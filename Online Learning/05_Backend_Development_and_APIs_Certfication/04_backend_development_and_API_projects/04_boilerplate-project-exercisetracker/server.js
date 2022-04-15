require('dotenv').config();
const express = require('express');
const cors = require('cors');
const userRoute = require('./routes/userRoute');
const connectToDB = require('./database/connect.js');

const app = express();


const port = process.env.PORT || 4000;

connectToDB(process.env.MONGO_URI)
.then(() => {
  console.log('Connection to MongoDB:  Success !');
  app.listen(port, () => {
      console.log(`Server is running on PORT ${port}`)
  })
})
.catch((err) => console.log(err.message));



app.use(cors());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.use('/api/users', userRoute);