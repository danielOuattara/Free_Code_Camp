
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "username is required"]
    }
  }
);

module.exports = mongoose.model("User", UserSchema);