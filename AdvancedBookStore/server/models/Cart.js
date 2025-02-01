const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Book", required: true },
  quantity: { type: Number, required: true },
});

module.exports = mongoose.model("Cart", cartSchema);
