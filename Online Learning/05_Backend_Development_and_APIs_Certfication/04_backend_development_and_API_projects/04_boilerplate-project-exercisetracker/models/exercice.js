

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = Schema(
  {
    _id: String,
    username: String,
    date: { type: Date, default: Date.now },
    duration: { type: Number, default: 0 },
    description: String,
  }
);

module.exports = mongoose.model("Exercise", ExerciseSchema);
