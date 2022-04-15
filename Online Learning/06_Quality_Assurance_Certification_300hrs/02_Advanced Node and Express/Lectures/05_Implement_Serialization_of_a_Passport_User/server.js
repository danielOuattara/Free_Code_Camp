'use strict';
require('dotenv').config();
const express = require('express');
const myDB = require('./connection');
const fccTesting = require('./freeCodeCamp/fcctesting.js');
const session = require('express-session');
const passport = require('passport');
const ObjectID = require('mongodb').ObjectId;

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views/pug');

fccTesting(app); /*For FCC testing purposes*/

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: {secure: false}
}));

app.use(passport.initialize());
app.use(passport.session());


myDB( async client => {
  const myDatabase = await client.db('freecodecamp-qa-advanced-node-express').collection('users');
  console.log("Connected to Atlas MongoDB Database: freecodecamp-qa-advanced-node-express");
  passport.serializeUser((user, done) => {
    done(null, user._id)
  })
  
  passport.deserializeUser((id, done) => {
    myDatabase.findOne({_id: new ObjectID(id)}, (err, doc) => {
      if(err) console.log(err);
      done(null, doc); 
    });
  });

  app.route('/').get((req, res) => {
    res.render('index', { title: "Hello", message:"Connected to Database"});
  });
})
.then(() => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
  });
})
.catch(e => {
  app.route('/').get((req, res) => {
    res.render('pug', { title: e, message: 'Unable to login' });
  });
});


app.use('/public', express.static(process.cwd() + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended: true }));


