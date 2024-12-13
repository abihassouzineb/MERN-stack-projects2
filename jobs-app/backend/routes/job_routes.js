// Import required modules
const express = require("express");
const router = express.Router(); // Create a new router object for handling routes
const Job = require("../models/job"); // Import the Job model (assuming it's a Mongoose model)
const mongoose = require("mongoose"); // Import Mongoose for MongoDB interactions

// GET request to retrieve all job entries
router.get("/", (req, res) => {
  // Use Mongoose's find() method to retrieve all jobs from the database
  Job.find()
    .then((result) => {
      res.json(result); // Return the list of jobs as JSON
    })
    .catch((err) => {
      res.status(500).json({ error: err }); // Handle errors with a 500 status code
    });
});

// POST request to create a new job entry
router.post("/", (req, res) => {
  // Create a new job object using the Job model and the request body data
  const job = new Job({
    _id: new mongoose.Types.ObjectId(), // Generate a new MongoDB ObjectId
    title: req.body.title, // Job title from the request body
    description: req.body.description, // Job description from the request body
  });

  // Save the new job entry to the database
  job
    .save()
    .then((result) => {
      res.status(201).json({
        // Respond with a 201 status (created)
        message: "Handling POST requests to /jobs",
        createdJob: result, // Return the created job object
      });
    })
    .catch((err) => {
      res.status(500).json({ error: err }); // Handle errors with a 500 status code
    });
});

// PUT request to update a job entry by ID
router.put("/:id", (req, res) => {
  const id = req.params.id;

  // Use findByIdAndUpdate for simpler syntax
  Job.findByIdAndUpdate(id, req.body, { new: true }) // new: true returns the updated document
    .then((updatedJob) => {
      if (!updatedJob) {
        return res.status(404).json({ message: "Job not found" });
      }
      res.status(200).json({
        message: "Job updated",
        updatedJob,
      });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

// DELETE request to remove a job entry by ID
router.delete("/:id", (req, res) => {
  const id = req.params.id;

  // Use findByIdAndDelete for simpler syntax
  Job.findByIdAndDelete(id)
    .then((deletedJob) => {
      if (!deletedJob) {
        return res.status(404).json({ message: "Job not found" });
      }
      res.status(200).json({
        message: "Job deleted",
        deletedJob,
      });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

// Export the router module to use in other parts of the application
module.exports = router;
