const mongoose = require("mongoose");

// Define the Product schema
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    
  },
  { timestamps: true } // Add createdAt and updatedAt timestamps, e.g. 2022-01-01T00:00:00.000Z
);

// Create the Product model
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
