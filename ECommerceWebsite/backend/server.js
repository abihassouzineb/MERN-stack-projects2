const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const ProductRouter = require("./routes/ProductsRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/products", ProductRouter);

// 64gr3gkWoGLxNafX
const db =
  "mongodb+srv://saadabihassou50:64gr3gkWoGLxNafX@ecommercedb.dqj0x.mongodb.net/";

mongoose.connect(db).then(() => {
  console.log("connected to MongoDB...");
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
