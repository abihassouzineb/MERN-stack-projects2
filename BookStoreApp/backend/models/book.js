const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  oldPrice: { type: Number, required: true },
  newPrice: { type: Number, required: true },
  imageUrl: { type: String, required: true },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;