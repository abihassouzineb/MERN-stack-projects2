const express = require("express");
const env = require("dotenv");
const cors = require("cors");
const multer = require("multer");
const model = require("./model/EstateModel");
const path = require("path");
const db = require("./database/db");

env.config();

const app = express();

app.use(express.json());
app.use(cors());

const storage = multer.diskStorage({
  // the folder where the uploaded files will be saved
  // callback cb should be called with cb(null, 'images')
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  // create a unique filename by appending the current time to the original file extension
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// create a Multer instance with the configured storage
const upload = multer({
  storage: storage,
});

// adding the image folder to the server
app.use("/images", express.static(path.join(__dirname, "images")));

app.get("/", async (req, res) => {
  const estates = await model.find();

  res.json({
    estates,
    "Number of estates": estates.length,
  });
});

app.post("/add", upload.single("image"), async (req, res) => {
  const { title, description, location, price, Beds, Baths } = req.body;
  const image = req.file.filename;

  const estate = new model({
    title,
    description,
    location,
    price,
    image,
    Beds,
    Baths,
  });

  await estate.save();

  res.json({
    message: "Estate added successfully",
  });
});

app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await model.findByIdAndDelete(id);
  res.json({
    message: "Estate deleted successfully",
  });
});

app.put("/:id", upload.single("image"), async (req, res) => {
  const { id } = req.params;
  const { title, description, location, price } = req.body;
  const image = req.file.filename;

  await model.findByIdAndUpdate(id, {
    title,
    description,
    location,
    price,
    image,
    Beds,
    Baths,
  });

  res.json({
    message: "Estate updated successfully",
  });
});

// adding the user login signup routes
app.use("/auth", require("./routes/auth"));

// Error handling middleware
app.use((err, req, res, next) => {
  if (err) {
    res.status(500).json({ error: err.message });
  } else {
    next();
  }
});

app.listen(process.env.PORT, () => {
  db();
  console.log(`server is running on port ${process.env.PORT}`);
});
