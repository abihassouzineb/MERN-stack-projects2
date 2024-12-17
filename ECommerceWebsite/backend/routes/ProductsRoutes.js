const express = require("express");
const router = express.Router();
const Product = require("../model/Product");
const mongoose = require("mongoose");

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();

    res.json(products);
  } catch (error) {
    res.json({ error: error.message });
  }
});

module.exports = router;