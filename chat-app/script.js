// Establish a connection to the Socket.IO server running at localhost:3000
const socket = io("http://localhost:3000");

// Get references to the HTML elements where messages will be displayed,
// the form for sending messages, and the input field for typing messages
const messageContainer = document.getElementById("message-container");
const messageForm = document.getElementById("send-container");
const messageInput = document.getElementById("message-input");

// Prompt the user for their name when they join the chat
const name = prompt("What is your name?");

// Display a message in the chat that the user has joined
appendMessage("You joined");

// Notify the server that a new user has joined the chat, sending the user's name
socket.emit("new-user", name);

// Listen for 'chat-message' events from the server and append the message to the chat
socket.on("chat-message", (data) => {
  console.log(data); // Log the incoming message data to the console (for debugging)
  appendMessage(`${data.name}: ${data.message}`); // Display the message in the chat
});

// Listen for 'user-connected' events from the server and append a message that a user has connected
socket.on("user-connected", (name) => {
  appendMessage(`${name} connected`); // Display that a new user has joined the chat
});

// Listen for 'user-disconnected' events from the server and append a message that a user has disconnected
socket.on("user-disconnected", (name) => {
  appendMessage(`${name} disconnected`); // Display that the user has left the chat
});

// When the user submits the message form (sends a message)
messageForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent the form from submitting in the traditional way (page reload)
  const message = messageInput.value; // Get the message typed in the input field
  appendMessage(`You: ${message}`); // Display the user's own message in the chat
  socket.emit("send-chat-message", message); // Send the message to the server
  messageInput.value = ""; // Clear the input field after sending the message
});

// Function to append a message to the chat container
function appendMessage(message) {
      const messageElement = document.createElement("div"); // Create a new div element to hold the message
      
      messageElement.classList.add("border-b-2", "border-blue-400", "p-2"); // Add a border to the div

  messageElement.innerText = message; // Set the text content of the div to the message
  messageContainer.append(messageElement); // Add the new message div to the message container
}
