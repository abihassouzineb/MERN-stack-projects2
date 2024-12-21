import React, { useContext } from "react";
import { BooksStoreAppContext } from "../context/BooksStoreApp";
import { FaCartPlus, FaTimes } from "react-icons/fa";

export default function Cart() {
  const { cart, books, addToCart, removeFromCart, TotalAmount, isLoggedIn } =
    useContext(BooksStoreAppContext);

  const getBookDetails = (bookId) => {
    return books.find((book) => book._id === bookId);
  };

  if (!isLoggedIn) {
    return (
      <div className="p-6 bg-gray-100 min-h-screen">
        <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
        <div className="text-xl text-gray-600">
          Please log in to access your cart.
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
      {cart.length === 0 ? (
        <div className="text-xl text-gray-600">Your cart is empty.</div>
      ) : (
        cart.map((item) => {
          const book = getBookDetails(item.bookId);
          if (!book) {
            return (
              <div
                key={item.bookId}
                className="flex items-center mb-4 p-4 bg-white shadow-md rounded-lg"
              >
                <p>Book details not found for item: {item.bookId}</p>
              </div>
            );
          }
          return (
            <div
              key={item.bookId}
              className="flex items-center mb-4 p-4 bg-white shadow-md rounded-lg relative"
            >
              <FaTimes
                className="absolute top-2 right-2 text-red-500 cursor-pointer"
                onClick={() => removeFromCart(item.bookId)}
              />
              <img
                src={book.imageUrl}
                alt={book.title}
                className="w-24 h-32 object-cover mr-6 rounded"
              />
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
                <p className="text-gray-600 mb-1">Quantity: {item.quantity}</p>
                <p className="text-gray-600 mb-1">Price: ${book.newPrice}</p>
                <p className="text-gray-800 font-bold">
                  Total: ${(book.newPrice * item.quantity).toFixed(2)}
                </p>
              </div>
              <button
                onClick={() => addToCart(book._id)}
                className="flex items-center bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500"
              >
                <FaCartPlus className="mr-2" /> Add one more
              </button>
            </div>
          );
        })
      )}

      <div className="mt-6 p-4 bg-white shadow-md rounded-lg">
        <h3 className="text-2xl font-semibold text-center">
          Total Amount: ${TotalAmount.toFixed(2)}
        </h3>
      </div>
    </div>
  );
}
