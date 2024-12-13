import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { FaTimes } from "react-icons/fa";

function CartItems() {
  const { all_product, cart, removeFromCart } = useContext(ShopContext);

  // Calculate subtotal
  const subtotal = all_product.reduce((total, item) => {
    const quantity = cart[item.id] || 0;
    return total + item.new_price * quantity;
  }, 0);

  const shippingFee = subtotal > 0 ? 2 : 0; // Example shipping fee logic
  const total = subtotal + shippingFee;

  return (
    <div className="flex flex-col h-screen items-center px-4 bg-gray-100">
      {/* Header Row */}
      <header className="flex flex-row justify-between w-full max-w-4xl py-4 border-b border-gray-400 text-gray-700 font-bold text-lg">
        <p className="w-1/6 text-center">Products</p>
        <p className="w-1/4 text-center">Title</p>
        <p className="w-1/6 text-center">Price</p>
        <p className="w-1/6 text-center">Quantity</p>
        <p className="w-1/6 text-center">Total</p>
        <p className="w-1/6 text-center">Remove</p>
      </header>

      {/* Product List */}
      <div className="flex flex-col w-full max-w-4xl mt-4 space-y-4">
        {all_product.map((item) => {
          const quantity = cart[item.id] || 0;

          if (quantity === 0) return null; // Skip items not in the cart

          return (
            <article
              key={item.id}
              className="flex flex-row justify-between items-center w-full py-4 bg-white shadow-2xl rounded-md border border-gray-300"
            >
              {/* Product Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 pl-4 mx-6 object-contain rounded-md"
              />

              {/* Product Details */}
              <p className="w-1/4 text-center font-medium text-gray-800 truncate">
                {item.name}
              </p>
              <p className="w-1/6 text-center text-gray-700">
                ${item.new_price}
              </p>

              {/* Quantity */}
              <p className="w-1/6 text-center text-gray-700 border border-gray-400">{quantity}</p>

              {/* Total Price */}
              <p className="w-1/6 text-center text-gray-700">
                ${item.new_price * quantity}
              </p>

              {/* Remove Button */}
              <button
                className="w-1/6 flex justify-center items-center text-red-500 hover:text-red-700"
                aria-label={`Remove ${item.name}`}
                onClick={() => removeFromCart(item.id)}
              >
                <FaTimes />
              </button>
            </article>
          );
        })}
      </div>

      {/* Total Cart Section */}
      <div className="flex flex-col w-full max-w-4xl mt-8 bg-white shadow-lg rounded-lg p-6 space-y-4">
        <div className="flex justify-between text-gray-700 text-lg">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-700 text-lg">
          <span>Shipping Fee:</span>
          <span>${shippingFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-gray-800 text-xl border-t pt-4">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <button className="w-full py-2 mt-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartItems;
