
const User = require('./../models/user.js');
 

exports.addUser = async (req, res) => {
  try {
    console.log('Hello');

    if (!req.body.username) {
      throw new Error('Path \`username\` is required.');
    }

    let user = await User.findOne({ username: req.body.username });
    if (user) {
      return res.status(200).json({"username":user.username, "_id":user._id});
    }

    user = new User({ username: req.body.username });
    await user.save();
    return res.status(201).json({"username":user.username, "_id":user._id});

  } catch (err) {
    return res.status(400).send(err.message)
  }
}


//---------------------------------------------------------------------------
exports.getAllUsers = async (req, res) => {
  try {
    let users = await User.find({});
    let usersData = users.map(user => {
      return { username: user.username, _id: user._id};
    })
    res.status(200).json(usersData);
  } catch(err) {
    res.status(400).send(err.message)
  }
}


//-----------------------------------------------------------------------------

exports.addExercise = async (req, res) => {
  console.log(req.url)
  try {

    if(!req.body._id) {
      throw new Error('not found');
    }

    req.body._id = req.params._id;

    if(!req.params._id) {
      throw new Error('not found');
    }

    if(!req.body.description) {
      throw new Error('Path \`description\` is required.');
    }
    if(!req.body.duration) {
      throw new Error('Path \`description\` is required.');
    }
  } catch (err) {
    return res.status(400).send(`${err.message}`);
  }
}