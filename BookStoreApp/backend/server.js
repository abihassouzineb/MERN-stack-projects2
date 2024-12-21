const express = require("express");
const cors = require("cors");
const BookRoutes = require("./routes/BookRoutes");
const CartRoutes = require("./routes/CartRoutes");
const UserRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/book", BookRoutes);
app.use("/book", CartRoutes);
app.use("/user", UserRoutes);

const db =
  "mongodb+srv://saadabihassou50:vdcvvjUun5d3CvL4@booksdb.kqj4y.mongodb.net/";

mongoose.connect(db).then(() => {
  console.log("connected to mongodb...");
});

app.get("/", (req, res) => {
  res.json({ message: "Hello to the Book Store App!" });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
