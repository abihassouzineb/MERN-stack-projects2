const mongoose = require("mongoose");

// Define the user schema
const userSchema = new mongoose.Schema({
      name: String,
      email: String,
      password: String,
      cartData: {
            type: Array,
            default: [],
            required: false
      },
      date: {
            type: Date,
            default: Date.now
      }
})

// Create the user model
const User = mongoose.model("User", userSchema);

module.exports = User;