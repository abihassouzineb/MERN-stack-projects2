/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { BookStoreContext, Book } from "../context/BookStoreContext";
import { FaShoppingCart } from "react-icons/fa";

// Removed the redefinition of Book interface

export default function Header() {
  const { books, getBooks, addBookToCart } = useContext(BookStoreContext);

  const [loading, setLoading] = useState(true);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      getBooks();
      setLoading(false);
    };

    fetchBooks();
  }, []);

  useEffect(() => {
    const filterBooks = () => {
      let filtered = books;

      if (selectedCategory !== "All Categories") {
        filtered = filtered.filter((book) => book.genre === selectedCategory);
      }

      if (maxPrice) {
        filtered = filtered.filter((book) => book.price <= maxPrice);
      }

      setFilteredBooks(filtered);
    };

    filterBooks();
  }, [books, selectedCategory, maxPrice]);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(event.target.value ? parseFloat(event.target.value) : undefined);
  };

  const handleAddToCart = async (bookId: string) => {
    await addBookToCart({ bookId, quantity: 1 });
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value.toLowerCase();
    const filtered = books.filter((book) =>
      book.title.toLowerCase().includes(searchQuery)
    );
    setFilteredBooks(filtered);
  };

  if (loading) {
    return (
      <section className="flex justify-center items-center h-screen bg-gradient-to-r from-slate-900 to-slate-700">
        <div className="relative">
          <div className="w-20 h-20 border-lime-200 border-2 rounded-full"></div>
          <div className="w-20 h-20 border-lime-700 border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
        </div>
      </section>
    );
  }

  if (books.length === 0) {
    return (
      <section className="flex flex-col justify-center items-center bg-gradient-to-r from-gray-800 to-gray-600 text-white min-h-screen py-10">
        <h1 className="text-4xl font-semibold border-b-4 border-blue-500 pb-2">
          No books found
        </h1>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-r from-gray-800 to-gray-600 text-white min-h-screen pb-6 pt-40">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full px-12 mb-12">
        <h1 className="text-4xl font-semibold border-b-4 border-blue-500 pb-2">
          Search for Books
        </h1>
        <input
          onChange={handleSearch}
          type="search"
          placeholder="Search for books"
          className="mt-4 md:mt-0 h-12 px-6 w-full md:w-auto text-black bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>

      {/* Filter and Sort Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full px-12 mb-12 gap-6">
        {/* Sort by Price */}
        <div className="flex items-center gap-4">
          <label htmlFor="sort-price" className="text-lg font-medium text-blue-400">
            Max Price:
          </label>
          <input
            id="sort-price"
            type="number"
            placeholder="Max price"
            value={maxPrice || ""}
            onChange={handlePriceChange}
            className="h-10 px-4 text-black bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        {/* Filter by Category */}
        <div className="flex items-center gap-4">
          <label htmlFor="filter-category" className="text-lg font-medium text-blue-400">
            Category:
          </label>
          <select
            id="filter-category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="h-10 px-4 text-black bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            <option value="All Categories">All Categories</option>
            <option value="Fiction">Fiction</option>
            <option value="non-fiction">Non-fiction</option>
            <option value="science">Science</option>
            <option value="history">History</option>
            <option value="biography">Biography</option>
            <option value="fantasy">Fantasy</option>
          </select>
        </div>
      </div>

      {/* Books List */}
      <div className="px-12">
        <h1 className="text-4xl font-semibold border-b-4 border-blue-500 pb-2">All Books</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {filteredBooks.map((book) => (
            <div
              key={book._id}
              className="bg-white text-black p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
            >
              <img
                src={book.coverImage}
                alt={book.title}
                className="w-32 h-32 object-cover mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold text-center mb-2">{book.title}</h2>
              <p className="text-gray-700 text-center mb-2">Author: {book.author}</p>
              <p className="text-gray-700 text-center mb-2">Category: {book.genre}</p>
              <p className="text-gray-700 text-center mb-2">Price: ${book.price}</p>
              <p className="text-gray-700 text-center mb-2">Published: {book.publicationYear}</p>
              <button
                onClick={() => book._id && handleAddToCart(book._id)}
                className="bg-green-400 text-white px-4 py-2 rounded-lg w-full font-semibold hover:bg-green-500 transition"
              >
                <FaShoppingCart className="inline-block mr-2" /> Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
