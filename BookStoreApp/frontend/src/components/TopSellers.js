import React, { useContext } from "react";
import { FaCartPlus } from "react-icons/fa"; // Cart icon
import { BooksStoreAppContext } from "../context/BooksStoreApp";
import { useNavigate } from "react-router-dom";
export default function TopSellers() {
  const { books, addToCart } = useContext(BooksStoreAppContext);

  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Top Sellers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {books.slice(0, 3).map((book) => (
          <div onClick={() => navigate(`/book/${book._id}`)}
            key={book.title}
            className="bg-white p-4 rounded-lg cursor-pointer shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 duration-300"
          >
            <img
              src={book.imageUrl}
              alt={book.title}
              className="w-full h-64 object-cover mb-4 rounded"
            />
            <div className="font-semibold text-lg mb-2">{book.title}</div>
            <p className="text-gray-500 line-through mb-2">${book.oldPrice}</p>
            <p className="text-xl text-green-600 mb-4">${book.newPrice}</p>
            <button
              onClick={() => addToCart(book._id)}
              className="w-full py-2 bg-yellow-400  rounded hover:bg-yellow-500 transition-colors flex items-center justify-center"
            >
              <FaCartPlus className="mr-2" /> Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
