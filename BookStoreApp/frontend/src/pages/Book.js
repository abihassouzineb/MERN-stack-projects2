import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BooksStoreAppContext } from "../context/BooksStoreApp";
import { FaCartPlus } from "react-icons/fa";

export default function Book() {
  const { id } = useParams();
  const { books, addToCart } = useContext(BooksStoreAppContext);
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookDetails = () => {
      const bookDetails = books.find((b) => b._id === id);
      setBook(bookDetails);
    };
    fetchBookDetails();
  }, [id, books]);

  if (!book) {
    return (
      <div className="text-center text-2xl bg-green-400 border-2 border-green-600 font-bold px-6 ml-[580px] mt-60 w-fit py-3">
        Loading...
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">{book.title}</h1>
      <img
        src={book.imageUrl}
        alt={book.title}
        className="w-64 h-96 object-cover mb-6"
      />
      <p className="text-xl text-gray-800">Old Price: ${book.oldPrice}</p>
      <p className="text-xl text-gray-800">New Price: ${book.newPrice}</p>
      <p className="text-lg text-gray-600 mt-4">{book.description}</p>

      <button
        onClick={() => addToCart(book._id)}
        className="px-5 py-2 bg-yellow-400  rounded hover:bg-yellow-500 transition-colors flex items-center justify-center"
      >
        <FaCartPlus className="mr-2" /> Add to Cart
      </button>
    </div>
  );
}
