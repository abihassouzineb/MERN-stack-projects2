const express = require("express");
const Cart = require("../models/Cart");

const router = express.Router();

router.get("/get-cart", async (req, res) => {
  try {
    const cartItems = await Cart.find();
    res.json(cartItems);
  } catch (error) {
    res.json(error);
  }
});

router.post("/add-to-cart", async (req, res) => {
  const { bookId, quantity } = req.body;

  const newCartItem = new Cart({ bookId, quantity });
  try {
    await newCartItem.save();
    res.status(201).json({ message: "Added to cart successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete("/remove-from-cart/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Cart.findByIdAndDelete(id);
    res.status(200).json({ message: "Removed from cart successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
