// 3fybSMkfjP90jf8E

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const env = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
env.config();
const BookRoutes = require("./routes/BookRoutes");

const db =
  "mongodb+srv://saadabihassou50:3fybSMkfjP90jf8E@booksdbadvanced.hd52d.mongodb.net/";

// setup the express app
const app = express();

// connect to the database
mongoose
  .connect(db)
  .then(() => console.log("Connected to the database"))
  .catch((error) => console.log(error));

// configure middleware
app.use(morgan("dev")); // log requests to the console
app.use("/api", BookRoutes);
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use(express.json()); // parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // parse URL-encoded request bodies

// define a simple route
app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

// start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
