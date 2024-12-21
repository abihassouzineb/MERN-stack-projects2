const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
  quantity: { type: Number, default: 1 },
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
