document.addEventListener("DOMContentLoaded", () => {
  const joinBtn = document.getElementById("join-btn");
  const username = document.getElementById("username");
  const messages = document.querySelector("#messages");
  const sendBtn = document.querySelector("#send-btn");
  const messageInput = document.querySelector("#message-input");
  const chatScreen = document.querySelector('#chat-screen');

  const socket = io("http://localhost:3000");


  socket.on("chat-message", (data) => {
    console.log(data);
    const message = document.createElement("div");
    
    message.classList.add("message");
    message.innerText = `${data.name}: ${data.message}`;
    messages.appendChild(message);
  });

  if (joinBtn) {
    joinBtn.addEventListener("click", () => {
      const name = username.value;

      if (name) {
        console.log(`Username: ${name}`);
        socket.emit("new-user", name);
      } else {
        console.error("Username cannot be empty.");
      }
    });
  } else {
    console.error("join-btn not found");
  }

  if (sendBtn) {
    sendBtn.addEventListener("click", () => {
      const message = messageInput.value;
      if (message) {
        console.log(`Message: ${message}`);
        socket.emit("send-chat-message", message);
        messageInput.value = "";
      } else {
        console.error("Message cannot be empty.");
      }
    });
  } else {
    console.error("send-btn not found");
  }

  socket.on("user-connected", (name) => {
    console.log(name);
    const message = document.createElement("div");
    message.classList.add("message");
    message.innerText = `${name} connected`;
    messages.appendChild(message);
  });

  socket.on("user-disconnected", (name) => {
    console.log(name);
    const message = document.createElement("div");
    message.classList.add("message");
    message.innerText = `${name} disconnected`;
    messages.appendChild(message);
  });
});
