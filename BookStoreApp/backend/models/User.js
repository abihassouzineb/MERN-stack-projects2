const mongoose = require("mongoose");

const UserShema = new mongoose.Schema({
      username: { type: String, required: true },
      password: { type: String, required: true },       
})

const User = mongoose.model("User", UserShema);

module.exports = User;