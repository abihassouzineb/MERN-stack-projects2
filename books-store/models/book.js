// models/Book.js
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
      title: String,
      authors: [String],
      description: String,
      imageUrl: String,
      moreInfoUrl: String,

      isFavourite: {
            type: Boolean,
            default: false
      }
});

module.exports = mongoose.model('Book', bookSchema);
