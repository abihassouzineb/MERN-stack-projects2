const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { log } = require('console');
const routes = require('./routes/memory_routes');

const app = express();

// Connect to MongoDB
const db = "mongodb+srv://memories_db:bQSiI5Nixd06reE8@cluster1.y8zaf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1"

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => console.log('MongoDB connected'))
      .catch(err => console.log(err));

// Middleware
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes

app.get("/", (req, res) => {
      res.json({ message: "Welcome to the memories app!" })
});

app.use("/api/memories", routes);

app.listen(3000, () => {
      log("Running on port 3000")
})