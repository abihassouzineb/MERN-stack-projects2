const express = require("express");
const env = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const productModel = require("./model");
const userModel = require("./user_model");
const bcrypt = require("bcrypt");
const cors = require("cors");
env.config();
const app = express();

app.use(express.json());
app.use(cors());

// database connection
const db =
  "mongodb+srv://e-commerce:4J8qPxNGY0HeSHrf@cluster1.y8zaf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
  });

app.get("/", (req, res) => {
  res.redirect("/allProducts");
});

app.post("/addProduct", (req, res) => {
  const product = new productModel(req.body);
  product
    .save()
    .then(() => {
      res.status(200).json({
        success: true,
        message: "Product added successfully",
      });
      console.log(product);
    })
    .catch((err) => {
      res.status(400).json({
        success: false,
        message: err.message,
      });
    });
});

// deleting product
app.delete("/deleteProduct/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await productModel.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

// getting all products
app.get("/allProducts", (req, res) => {
  productModel
    .find()
    .then((products) => {
      res.status(200).json({
        success: true,
        products: products,
      });
      console.log(products);
    })
    .catch((err) => {
      res.status(400).json({
        success: false,
        message: err.message,
      });
    });
});

// Image Storage
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({
  storage: storage,
});

// creating endpoint to upload image
app.use("/images", express.static("upload/images"));
app.post("/upload", upload.single("image"), (req, res) => {
  res.status(200).json({
    success: true,
    image: `images/${req.file.filename}`,
  });
});

// creating endpoint to add user
app.post("/addUser", async (req, res) => {
  let cart = [];
  for (let i = 0; i < 300; i++) {
    cart[i] = 0;
  }
  const user = new userModel({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    cartData: cart,
  });

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(user.password, salt);
  user.password = hashedPassword;

  user
    .save()
    .then(() => {
      res.status(200).json({
        success: true,
        message: "User added successfully",
      });
    })
    .catch((err) => {
      res.status(400).json({
        success: false,
        message: "User already exists",
      });
    });
});

// creating endpoint to login user
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (!user) {
    return res.status(400).json({
      success: false,
      message: "Invalid email or password",
    });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({
      success: false,
      message: "Invalid email or password",
    });
  }
  res.status(200).json({
    success: true,
    message: "User logged in successfully",
    user: user,
  });
});

// creating endpoint to get all users
app.get("/allUsers", async (req, res) => {
  const users = await userModel.find();
  res.status(200).json({
    success: true,
    users: users,
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
