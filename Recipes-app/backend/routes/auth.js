const express = require("express");
const router = express.Router();

// Array to store users
const users = [];

// Signup route
router.post("/signup", (req, res) => {
  const { username, password } = req.body;
  const userExists = users.find((u) => u.username === username);

  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  users.push({ username, password });
  res.status(201).json({ message: "User created successfully" });
});

// Login route
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    res.status(200).json({ message: "Login successful" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

module.exports = router;
