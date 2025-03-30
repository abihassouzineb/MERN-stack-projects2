/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

const ForeverAppContext = createContext();

function ForeverAppProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    // using the localStorage
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      const cartItemsArray = JSON.parse(cartItems);
      // if the item is already in the cart, increment the quantity
      const existingItem = cartItemsArray.find(
        (cartItem) => cartItem._id === item._id
      );
      if (existingItem) {
        existingItem.quantity += 1;
        setCart(cartItemsArray);
        localStorage.setItem("cartItems", JSON.stringify(cartItemsArray));
      } else {
        // if the item is not in the cart, add it
        setCart([...cartItemsArray, item]);
        localStorage.setItem(
          "cartItems",
          JSON.stringify([...cartItemsArray, item])
        );
      }
    } else {
      setCart([item]);
      localStorage.setItem("cartItems", JSON.stringify([item]));
    }
  };

  const GetCart = () => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCart(JSON.parse(cartItems));
    }
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item._id !== id);
    setCart(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  useEffect(() => {
    GetCart();
  }, []);

  const value = {
    addToCart,
    cart,
    GetCart,
    removeFromCart,
  };

  return (
    <ForeverAppContext.Provider value={value}>
      {children}
    </ForeverAppContext.Provider>
  );
}

export { ForeverAppContext, ForeverAppProvider };
