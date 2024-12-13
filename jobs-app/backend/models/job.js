const mongoose = require('mongoose');

// Define the Job schema
const jobSchema = new mongoose.Schema({
      title: { type: String, required: true },
      description: { type: String, required: true }
}, { timestamps: true });

// Export the Job model
module.exports = mongoose.model('Job', jobSchema)