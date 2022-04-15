
const express = require('express');
const router = express.Router();
const {addUser, getAllUsers, addExercise} = require('./../controllers/userController');



router.post("/", addUser); 
router.get("/", getAllUsers); 
router.post("/:_id/exercises", addExercise);



module.exports = router;



