const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const FoodRoutes = require("./routes/FoodRoutes");

const app = express();

app.use("/api", FoodRoutes);

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json("Hello to the food app server");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});