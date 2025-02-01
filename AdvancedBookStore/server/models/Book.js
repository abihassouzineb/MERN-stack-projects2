const mongoose = require('mongoose');

// Define the schema for the Book model
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    coverImage: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    publicationYear: {
        type: Number,
        required: true,
    },
});

// Create the Book model
const Book = mongoose.model('Book', bookSchema);

module.exports = Book;