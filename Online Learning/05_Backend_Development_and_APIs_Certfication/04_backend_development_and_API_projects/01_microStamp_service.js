// server.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
const cors = require('cors');
app.use(cors({
  optionsSuccessStatus: 200
})); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({
    greeting: 'hello API'
  });
});

app.get("/api", (req, res) => {
  res.json({
    utc: Date(),
    unix: Date.now()
  });
});


app.get("/api/:date?", (req, res) => {
  const dateString = req.params.date;
  const validation = /\d{5,}/

  if (validation.test(dateString)) {
    const dateInteger = parseInt(dateString);
    res.json({
      utc: new Date(dateInteger).toUTCString(),
      unix: dateInteger
    });

  } else {

    let dateObject = new Date(dateString);
    if (dateObject.toString() === "Invalid Date") {
      res.json({
        error: "Invalid Date"
      });
    } else {
      res.json({
        utc: dateObject.valueOf(),
        unix: dateObject.toUTCString()
      });
    }
  }
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
