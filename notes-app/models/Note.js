const mongoose = require('mongoose');

// Define the Note schema
const noteSchema = new mongoose.Schema({
      title: {
            type: String,
            required: true
      },
      content: {
            type: String,
            required: true
      }
});

// Create the Note model
const Note = mongoose.model('Note', noteSchema);

module.exports = Note;