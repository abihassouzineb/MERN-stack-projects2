const express = require("express");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const port = 3000;

// MongoDB connection string
const db = "mongodb+srv://users:AX60F8XsqYoBOjnb@cluster1.y8zaf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

// Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

// User Schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Create User model
const User = mongoose.model("User", userSchema);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes to render EJS pages
app.get("/sign-up", (req, res) => {
  res.render("sign_up");
});

app.get("/login", (req, res) => {
  res.render("login_page");
});

// 404 error handler
// app.get("*", (req, res) => {
//   res.status(404).render("404");
// })


// Route to handle user registration
app.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user already exists
    const findUser = await User.findOne({ email });
    if (findUser) {
      return res.status(400).send("User already exists!");
    }

    // Hash password and save the new user to the database
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    res.status(201).send("Registered successfully!");
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// Route to handle user login
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const findUser = await User.findOne({ email });
    if (!findUser) {
      return res.status(400).send("Wrong email or password!");
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, findUser.password);
    if (passwordMatch) {
      res.status(200).send("Logged in successfully!");
    } else {
      res.status(400).send("Wrong email or password!");
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

app.get("/all_users", async (req, res) => {
  const all_users = await User.find();
  res.json({ users: all_users, number_of_users: User.length + 1 })
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
