const express = require('express');
const cors = require('cors');
const connectDB = require('./database/db');
const routes = require('./routes/server-routes');
const dotenv = require('dotenv').config();
const path = require('path');

const port = process.env.PORT || 3000;
const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Set up EJS as the view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
 
// Routes
app.use('/', routes);


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
