const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(cors()); // Allow frontend requests

// Path to users.json
const usersFilePath = path.join(__dirname, "users.json");

// Utility function to read users.json
const readUsers = () => {
  try {
    const data = fs.readFileSync(usersFilePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    return []; // Return empty array if file doesn't exist or is empty
  }
};

// Utility function to write users.json
const writeUsers = (users) => {
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2), "utf8");
};

// 🚀 **User Signup**
app.post("/signup", async (req, res) => {
  try {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  let users = readUsers();
  if (users.some((user) => user.email === email)) {
    return res.status(400).json({ error: "User already exists" });
  }

  const newUser = { email, password };
  users.push(newUser);
  writeUsers(users);

  res.json({ message: "Signup successful! You can now log in." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// 🔑 **User Login**
app.post("/login", (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    let users = readUsers();
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    res.json({ message: "Login successful!", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// 🏃 **Start the Server**
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
