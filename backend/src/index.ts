import express, { Express } from "express";
import mongoose from "mongoose";
import { FinancialRecordRouter } from "./routes/FinancialRecord";
import cors from "cors";

const app: Express = express();

app.use(cors())

app.use(express.json())

// Connect to MongoDB
const db =
  "mongodb+srv://SaadAbihassou:a_password@expensesdb.r9tvd.mongodb.net/";

mongoose
  .connect(db)
  .then(() => {
    console.log("Connected to MongoDB...");
  })

  .catch((err) => {
    console.error("Error connecting to MongoDB: ", err);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/financialRecords", FinancialRecordRouter)

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});