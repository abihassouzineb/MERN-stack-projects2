const express = require("express");
const router = express.Router();
const Book = require("../models/Book");
const Cart = require("../models/Cart");
const cors = require("cors");
const bodyParser = require("body-parser");

// Middleware
router.use(cors());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// Get all books
router.get("/books", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new book
router.post("/books", async (req, res) => {
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    description: req.body.description,
    coverImage: req.file ? req.file.filename : null,
    price: req.body.price,
    genre: req.body.genre,
    publicationYear: req.body.publicationYear,
  });
  try {
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Add a book to the cart
router.post("/cart", async (req, res) => {
  try {
    const { bookId, quantity } = req.body;
    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    let cartItem = await Cart.findOne({ bookId });
    if (cartItem) {
      cartItem.quantity += quantity;
    } else {
      cartItem = new Cart({ bookId, quantity });
    }
    await cartItem.save();
    res.status(200).json(cartItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all cart items
router.get("/cart", async (req, res) => {
  // will return the cart items information based on the bookId and quantity
  try {
    const cartItems = await Cart.find({}).populate("bookId");
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a book from the cart
router.delete("/cart/:id", async (req, res) => {
  try {
    const cartItem = await Cart.findByIdAndDelete(req.params.id);
    if (!cartItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }
    res.status(200).json({ message: "Cart item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update the quantity of a book in the cart
router.put("/cart/:id", async (req, res) => {
  try {
    const cartItem = await Cart.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!cartItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }
    res.status(200).json(cartItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
