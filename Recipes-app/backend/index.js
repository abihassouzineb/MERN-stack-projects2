import express from "express";
import bcrypt from "bcrypt";
import cors from "cors";
import mongoose from "mongoose";
import morgan from "morgan";

import router from "./routes/users.js";
import { recipesRoutes } from "./routes/recipes.js";

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", router);
app.use("/recipes", recipesRoutes);

mongoose.connect(
  "mongodb+srv://saadabihassou50:dNlY2mIpyE9bs3Bz@recipe-app-db.vae8r.mongodb.net/?retryWrites=true&w=majority&appName=recipe-app-db"
);

app.get("/", (req, res) => {
  res.json({ message: "Hello from backend" });
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
