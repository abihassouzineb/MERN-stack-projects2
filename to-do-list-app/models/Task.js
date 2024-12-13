// models/Task.js
const mongoose = require('mongoose');

// Define the Task schema
const taskSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});

// Create the Task model
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
