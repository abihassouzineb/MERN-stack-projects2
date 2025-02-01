import React, { createContext, useState, ReactNode } from "react";
import axios from "axios";

export type Book = {
  _id: string | null | undefined;
  coverImage: string | undefined;
  publicationYear: ReactNode;
  genre: string;
  id: string;
  title: string;
  author: string;
  price: number;
  // Add other book properties as needed
  cartItems: CartData[];
};

type CartData = {
  bookId: string;
  quantity: number;
};

type BookStoreContextType = {
  books: Book[];
  getBooks: () => void;
  addBookToCart: (data: CartData) => void;
  getCart: () => void;
  cartItems: CartData[];
  RemoveBookFromCart: (bookId: string) => void;
  UpdateBookQuantity: (bookId: string, quantity: number) => void;
};

export const BookStoreContext = createContext<BookStoreContextType>({
  books: [],
  getBooks: async () => { },
  addBookToCart: async () => { },
  getCart: async () => { },
  cartItems: [],
  RemoveBookFromCart: async () => { },
  UpdateBookQuantity: async () => { },
});

const BookStoreProvider = ({ children }: { children: ReactNode }) => {
  const [books, setBooks] = useState<Book[]>([]);

  // Fetch books from the server
  const getBooks = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/books");
      setBooks(response.data);
      console.log("Books fetched:", response.data);
    } catch (error) {
      console.error("Error fetching books:", error.response?.data || error.message);
    }
  };

  // Add a book to the cart
  const addBookToCart = async (data: CartData) => {
    try {
      const response = await axios.post("http://localhost:3000/api/cart", data);
      console.log("Book added to cart:", response.data);
    } catch (error) {
      console.error("Error adding book to cart:", error.response?.data || error.message);
    }
  };

  const [cartItems, setCartItems] = useState<CartData[]>([]);
  // Fetch cart details
  const getCart = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/cart");
      console.log("Cart fetched:", response.data);
      setCartItems(response.data);
    } catch (error) {
      console.error("Error fetching cart:", error.response?.data || error.message);
    }
  };

  const RemoveBookFromCart = async (bookId: string) => {
    try {
      const response = await axios.delete(`http://localhost:3000/api/cart/${bookId}`);
      console.log("Book removed from cart:", response.data);
      getCart();
    } catch (error) {
      console.error("Error removing book from cart:", error.response?.data || error.message);
    }
  };

  const UpdateBookQuantity = async (bookId: string, quantity: number) => {
    try {
      const response = await axios.put(`http://localhost:3000/api/cart/${bookId}`, { quantity });
      console.log("Book quantity updated:", response.data);
      getCart();
    } catch (error) {
      console.error("Error updating book quantity:", error.response?.data || error.message);
    }
  };

  return (
    <BookStoreContext.Provider value={{ books, getBooks, addBookToCart, getCart, cartItems, RemoveBookFromCart, UpdateBookQuantity }}>
      {children}
    </BookStoreContext.Provider>
  );
};

export default BookStoreProvider;
