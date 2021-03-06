
const bodyParser = require('body-parser');

const mySecret = process.env['MESSAGE_STYLE'];
const express = require('express');
const app = express();

/* NEW */
app.use(bodyParser.urlencoded({extended: false}));

console.log("Hello World Again !");

app.use("/public", express.static(__dirname + "/public"));

app.use(logger = (req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`)
  next();
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

app.get('/:word/echo', (req, res) => {
  res.json({echo: req.params.word})
});

app.get('/now', (req, res, next) => {
  req.time = new Date().toString();
  next();
  },
  (req, res) => {
    res.json({time: req.time})
  }
);

app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({ "message": "HELLO JSON" })
  } else {
    res.json({ "message": "Hello json" })
  }
});

app.get('/name', (req, res)=> {
  const { first: firstName, last: lastName} = req.query;
  res.json({name: `${firstName} ${lastName}`})
});



module.exports = app;
