import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const BooksStoreAppContext = createContext();

function BooksStoreAppContextProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);
  const [cartTotalQuantity, setCartTotalQuantity] = useState(0);
  const [TotalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const CalculateTotal = () => {
      const total = cart.reduce((acc, item) => {
        const book = books.find((b) => b._id === item.bookId);
        return acc + (book ? book.newPrice * item.quantity : 0);
      }, 0);
      setTotalAmount(total);
      console.log(total);
    };
    CalculateTotal();
  }, [cart, books]);

  useEffect(() => {
    const calculateTotalQuantity = () => {
      const totalQuantity = cart.reduce((acc, item) => {
        const book = books.find((b) => b._id === item.bookId);
        return acc + (book ? item.quantity : 0);
      }, 0);

      setCartTotalQuantity(totalQuantity);
    };
    calculateTotalQuantity();
  }, [cart, books]);

  const GetBooks = async () => {
    try {
      const response = await axios.get("http://localhost:3001/book");
      setBooks(response.data.books || []); // handle missing books data
      console.log(response.data.books);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError("Failed to load books");
      setLoading(false);
    }
  };

  const loadCartFromLocalStorage = () => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  };

  const saveCartToLocalStorage = (updatedCart) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const addToCart = async (bookId) => {
    try {
      // Check if the book is already in the cart
      const existingItem = cart.find((item) => item.bookId === bookId);

      let updatedCart;
      if (existingItem) {
        // Update quantity of the existing item
        updatedCart = cart.map((item) =>
          item.bookId === bookId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new item to the cart
        const newItem = { bookId, quantity: 1 };
        updatedCart = [...cart, newItem];
      }
      setCart(updatedCart);
      saveCartToLocalStorage(updatedCart);
    } catch (err) {
      console.error("Error adding to cart:", err);
    }
  };

  const GetCart = async () => {
    try {
      const response = await axios.get("http://localhost:3001/book/get-cart");
      setCart(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const removeFromCart = async (bookId) => {
    try {
      // decreasing the quantity of the book in the cart
      const updatedCart = cart.map((item) =>
        item.bookId === bookId ? { ...item, quantity: item.quantity - 1 } : item
      );

      setCart(updatedCart);
    } catch (error) {
      console.error(error);
    }
  };

  const signup = async (user) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/user/signup",
        user
      );

      if (response.status === 200) {
        console.log("Signup successful");
      }

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = async (user) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/user/login",
        user
      );

      if (response.status === 200) {
        setIsLoggedIn(true);
        console.log("Login successful");
        console.log(response.data);
      }

      localStorage.setItem("token", response.data.token);

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    try {
      localStorage.removeItem("token");
      setIsLoggedIn(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadCartFromLocalStorage();
    GetBooks();
  }, []);

  return (
    <BooksStoreAppContext.Provider
      value={{
        books,
        loading,
        error,
        addToCart,
        cart,
        GetCart,
        cartTotalQuantity,
        removeFromCart,
        TotalAmount,
        signup,
        login,
        logout,
        isLoggedIn,
      }}
    >
      {children}
    </BooksStoreAppContext.Provider>
  );
}

export { BooksStoreAppContext, BooksStoreAppContextProvider };
