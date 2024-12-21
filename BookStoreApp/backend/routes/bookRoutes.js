const express = require("express");
const Book = require("../models/book");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const books = await Book.find();

    res.json({ books, count: books.length });
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
