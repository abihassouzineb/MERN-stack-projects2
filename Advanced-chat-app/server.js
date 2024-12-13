const express = require("express");
const path = require("path");
const http = require("http");
const SocketIOServer = require("socket.io");

const app = express();

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Set up server
const server = http.createServer(app);
const io = SocketIOServer(server);

const users = {};
// Set up socket.io
io.on("connection", (socket) => {
  
  console.log("New client connected");

  socket.on("alert-new-user", (name) => {
    console.log(`New user ${name} has joined the chat`);
  })

  // Listen for new user
  socket.on("new-user", (name) => {
    users[socket.id] = name;
    socket.broadcast.emit("user-connected", name);
    console.log(`${name} has connected.`);
  });

  // Listen for chat messages
  socket.on("send-chat-message", (message) => {
    io.emit("chat-message", { message: message, name: users[socket.id] });
    console.log(`${users[socket.id]}: ${message}`);
  });

  // Listen for user disconnection
  socket.on("disconnect", () => {
    io.emit("user-disconnected", socket.name);
    console.log(`${socket.name} has disconnected.`);
  });
});

// Running the server
const PORT = process.env.PORT || 3000; // Default to 3000 if not set
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
