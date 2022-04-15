
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LogSchema = Schema(
  {
    _id: String,
    username: String,
    count: Number,
    log: {
      type: Array,
      description: String,
      duration: {
        type: Number,
        default: 0,
      },
      date: {
        type: Date,
        default: Date.now
      },
    }
  }
);


module.exports = mongoose.model("Log", LogSchema);
