/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductsContext = createContext();

export default function ProductsContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const GetProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3001/products");
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const AddToCart = (product) => {
    try {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const existingProduct = cart.find((item) => item._id === product._id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        cart.push({ ...product, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(cart));

      // Update cart state and total amount
      setCart(cart);
      const totalAmount = cart.reduce(
        (acc, product) => acc + product.price * product.quantity,
        0
      );
      setTotal(totalAmount);
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  const GetAddedProducts = () => {
    try {
      const productsToCart = localStorage.getItem("cart");

      if (productsToCart) {
        const parsedProducts = JSON.parse(productsToCart);
        setCart(parsedProducts);
        const totalAmount = parsedProducts.reduce(
          (acc, product) => acc + product.price * product.quantity,
          0
        );
        setTotal(totalAmount);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const RemoveFromCart = (_id) => {
    try {
      const productsToRemove = localStorage.getItem("cart");

      if (productsToRemove) {
        const parsedProducts = JSON.parse(productsToRemove);
        const updatedProducts = parsedProducts
          .map((product) => {
            if (product._id === _id) {
              if (product.quantity > 1) {
                product.quantity -= 1;
              } else {
                return null; // Mark for removal
              }
            }
            return product;
          })
          .filter((product) => product !== null); // Remove marked products

        localStorage.setItem("cart", JSON.stringify(updatedProducts));
        setCart(updatedProducts);
        const totalAmount = updatedProducts.reduce(
          (acc, product) => acc + product.price * product.quantity,
          0
        );
        setTotal(totalAmount);
      }
    } catch (error) {
      console.error("Error removing product from cart:", error);
    }
  };

  useEffect(() => {
    GetAddedProducts();
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    GetProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        loading,
        error,
        isLoggedIn,
        AddToCart,
        cart,
        total,
        RemoveFromCart,
        
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export { ProductsContextProvider };
