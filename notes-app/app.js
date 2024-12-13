// Import required modules
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const morgan = require("morgan");
const Note = require("./models/Note"); // Assuming Note model is defined in a separate file
const bodyParser = require("body-parser");

// Create express app
const app = express();

// Define port number
const port = 3000;

// MongoDB connection string
const db = "mongodb+srv://notes-app:PyTvTYGE0j8yJZYx@cluster1.y8zaf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

// Connect to MongoDB database
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

// Middleware setup
app.use(morgan("dev")); // Logs HTTP requests in development mode
app.use(bodyParser.urlencoded({ extended: false })); // Parses incoming form data (urlencoded)
app.use(express.static(path.join(__dirname, "public"))); // Serves static files from the public directory

// Set EJS as the template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // Set the path to the EJS template files

// Routes
// Get all notes and render the index page
app.get("/", async (req, res) => {
  try {
    const notes = await Note.find(); // Fetch all notes from the database
    res.render("index", { notes }); // Render the index template with notes data
  } catch (err) {
    res.status(500).json({ error: err.message }); // Handle errors with JSON response
  }
});

// Add a new note
app.post("/add", async (req, res) => {
  const { title, content } = req.body; // Extract title and content from request body
  try {
    const note = new Note({ title, content }); // Create a new Note object
    await note.save(); // Save the note to the database
    res.redirect("/"); // Redirect to the main page after successful save
  } catch (err) {
    res.status(500).json({ error: err.message }); // Handle errors with JSON response
  }
});

// Delete a note by ID
app.post("/delete/:id", async (req, res) => {
  const { id } = req.params; // Extract the note ID from the URL parameter
  try {
    await Note.findByIdAndDelete(id); // Find and delete the note by ID
    res.redirect("/"); // Redirect to the main page after successful deletion
  } catch (err) {
    res.status(500).json({ error: err.message }); // Handle errors with JSON response
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});