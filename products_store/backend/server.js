const express = require('express');
const path = require('path');
const morgan = require('morgan');
const connectDB = require('./config/db');
const routes = require('./routes/product_routes');
const cors = require('cors');

const app = express();

// Enable CORS : Cross-Origin Resource Sharing : explanation : the CORS policy is a security feature of the HTTP protocol that restricts cross-origin HTTP requests, wich can be used to mitigate attacks like cross-site scripting (XSS) and clickjacking.
app.use(cors());

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the Products Store API" });
});




app.use('/products', routes);

// Start the server only after successful DB connection
connectDB()
    .then(() => {
        app.listen(3000, () => {
            console.log('Server started on port 3000');
        });
    })
    .catch(err => {
        console.error('Failed to connect to database', err);
        process.exit(1);  // Exit the process on DB connection failure
    });
