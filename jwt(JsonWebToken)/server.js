import express from "express"; // Import the Express framework
import jwt from "jsonwebtoken"; // Import the jsonwebtoken library for handling JWTs
import dotenv from "dotenv"; // Import dotenv to load environment variables

// Load environment variables from a .env file
dotenv.config();

// Ensure REFRESH_TOKEN_SECRET is set in the environment
if (!process.env.REFRESH_TOKEN_SECRET) {
  throw new Error(
    "REFRESH_TOKEN_SECRET is not defined in environment variables"
  );
}

// Ensure ACCESS_TOKEN_SECRET is set in the environment
if (!process.env.ACCESS_TOKEN_SECRET) {
  throw new Error(
    "ACCESS_TOKEN_SECRET is not defined in environment variables"
  );
}

const app = express(); // Initialize an Express application

app.use(express.json()); // Middleware to parse JSON bodies in requests

// Sample posts array with some predefined posts
const posts = [
  { username: "Kyle", title: "Post 1" },
  { username: "Jim", title: "Post 2" },
  { username: "Jane", title: "Post 3" },
  { username: "Joe", title: "Post 4" },
  { username: "John", title: "Post 5" },
  { username: "Jill", title: "Post 6" },
  { username: "Jack", title: "Post 7" },
  { username: "Jenny", title: "Post 8" },
];

let refreshTokens = []; // Array to store refresh tokens : used to refresh access tokens

// Root route to retrieve all posts (for testing purposes)
app.get("/", (req, res) => {
  res.json(posts); // Respond with the list of all posts
});

// Route to retrieve posts filtered by the authenticated user's name
app.get("/posts", authenticateToken, (req, res) => {
  // Filter posts to include only those matching the authenticated user's name
  res.json(posts.filter((post) => post.username === req.user.name));
});

// Login route to authenticate the user and generate a JWT token
app.post("/login", (req, res) => {
  const user = { name: req.body.name }; // Get username from request body

  const accessToken = generateAccessToken(user); // Generate an access token using the ACCESS_TOKEN_SECRET

  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET); // Generate a refresh token using the REFRESH_TOKEN_SECRET

  refreshTokens.push(refreshToken); // Add the generated refresh token to the refreshTokens array

  res.json({ accessToken, refreshToken, expiresIn: "30s" }); // Respond with the generated access and refresh tokens
});

// Route to handle refresh tokens
app.post("/token", (req, res) => {
  const refreshToken = req.body.token; // Get the refresh token from the request body

  if (!refreshToken) return res.sendStatus(401); // If no refresh token is provided, send 401 Unauthorized status

  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403); // If the provided refresh token is not in the refreshTokens array, send 403 Forbidden status

  // Verify the refresh token and generate a new access token if valid
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // Send 403 if the token is invalid
    const accessToken = generateAccessToken({ name: user.name }); // Generate a new access token
    res.json({ accessToken }); // Respond with the new access token
  });
});


// Middleware function to authenticate the JWT token in requests
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"]; // Get the Authorization header
  const token = authHeader && authHeader.split(" ")[1]; // Extract token from 'Bearer <token>'

  if (!token) {
    console.log("Token not found in request");
    return res.sendStatus(401); // Send 401 if no token is provided
  }

  // Verify the token using the ACCESS_TOKEN_SECRET
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      console.log("Token verification failed:", err.message);
      return res.sendStatus(403); // Send 403 Forbidden if verification fails
    }
    req.user = user; // Set the verified user in the request object
    next(); // Move to the next middleware or route handler
  });
}

// Helper function to generate an access token with a 30-second expiry
function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "30s", // Access token expires in 30 seconds for demonstration
  });
}

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
