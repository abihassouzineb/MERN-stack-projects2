const mongoose = require("mongoose");

// Define the product schema
const productSchema = new mongoose.Schema({
  id: Number,
  name: String,
  category: String,
  image: String,
  new_price: Number,
  old_price: Number,
  description: String,
  //   setting the date
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the product model
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
