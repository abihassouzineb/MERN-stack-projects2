const mongoose = require("mongoose");

// Define a ticket schema
const ticketSchema = new mongoose.Schema({
      title: String,
      description: String,
      category: String,
      priority: Number,
      progress: Number,
      status: String,
      createdAt: Date,
}, { timestamps: true });

// Create a ticket model
const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;