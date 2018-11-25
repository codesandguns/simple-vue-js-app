const mongoose = require("mongoose");

let UserSchema = mongoose.Schema({
  email: String,
  password: String
});

function getUserModel() {
  return mongoose.model("user", UserSchema, "user");
}
module.exports = { getUserModel };
