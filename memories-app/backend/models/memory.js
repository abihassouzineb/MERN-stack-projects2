const mongoose = require("mongoose");

const memory_schema = mongoose.Schema({
      title: String,
      description: String,
      image: String,
      date: {
            type: Date,
            default: Date.now
      }

}, { timestamps: true });

module.exports = mongoose.model("Memory", memory_schema)