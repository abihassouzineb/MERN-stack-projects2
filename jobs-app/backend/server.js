const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./routes/job_routes');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Connect to MongoDB
const db = "mongodb+srv://jobs_db:d34nOEBPTVubU7yF@cluster1.y8zaf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get("/", (req, res) => {
      res.json({ message: "Welcome to the Jobs API" });
});

app.use('/jobs', routes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})