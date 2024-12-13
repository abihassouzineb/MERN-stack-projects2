// Set up a Socket.IO server on port 3000 with CORS enabled for any origin
const io = require('socket.io')(3000, {
      cors: {
            origin: '*' // Allow connections from any origin (useful for development)
      }
})

// Object to keep track of connected users
const users = {}

// Listen for new connections to the server
io.on('connection', socket => {

      // When a new user joins (event 'new-user'), store their name and notify others
      socket.on('new-user', name => {
            users[socket.id] = name // Associate the user's name with their unique socket ID
            socket.broadcast.emit('user-connected', name) // Notify all other users that a new user has connected
      })

      // When a user sends a chat message, broadcast it to all other users
      socket.on('send-chat-message', message => {
            socket.broadcast.emit('chat-message', { message: message, name: users[socket.id] }) // Broadcast the message along with the sender's name
      })

      // When a user disconnects, notify all other users and remove them from the user list
      socket.on('disconnect', () => {
            socket.broadcast.emit('user-disconnected', users[socket.id]) // Notify other users that this user has disconnected
            delete users[socket.id] // Remove the user from the users object
      })
})
