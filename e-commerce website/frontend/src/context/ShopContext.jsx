import React, { createContext } from "react";
import all_product from "../components/Ecommerce_Assets (1)/Assets/Frontend_Assets/all_product";

export const ShopContext = createContext(null);

// Initialize cart with default quantities of 0 for all products
const getDefaultCart = () => {
  const cart = {};
  for (let i = 0; i < all_product.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopProvider = ({ children }) => {
  const [cart, setCart] = React.useState(getDefaultCart());

  // Add an item to the cart
  const addToCart = (itemId) => {
    setCart((prev) => {
      const updatedCart = { ...prev, [itemId]: prev[itemId] + 1 };
      console.log("Cart after adding item:", updatedCart);
      return updatedCart;
    });
  };

  // Remove an item from the cart
  const removeFromCart = (itemId) => {
    setCart((prev) => {
      const updatedCart = { ...prev, [itemId]: Math.max(prev[itemId] - 1, 0) };
      console.log("Cart after removing item:", updatedCart);
      return updatedCart;
    });
  };

  const GetTotalCartItems = () => {
    let total = 0;
    for (const item in cart) {
      total += cart[item];
    }
    return total;
  };

  const contextValue = {
    all_product,
    cart,
    addToCart,
    removeFromCart,
    GetTotalCartItems,
  };



  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};
