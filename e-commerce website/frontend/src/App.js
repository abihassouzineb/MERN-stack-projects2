/* eslint-disable react/jsx-pascal-case */
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Cart from "./pages/cart";
import Product from "./pages/Product.jsx";
import Shop from "./pages/Shop.jsx";
import ShopCategory from "./pages/ShopCtegory.jsx";
import NavBar from "./components/NavBar.jsx";
import Login_signUp from "./pages/Login_signUp";
import Footer from "./components/Footer";
import kid_banner from "./components/Ecommerce_Assets (1)/Assets/Frontend_Assets/banner_kids.png"
import women_banner from "./components/Ecommerce_Assets (1)/Assets/Frontend_Assets/banner_women.png"
import men_banner from "./components/Ecommerce_Assets (1)/Assets/Frontend_Assets/banner_mens.png"

function App() {
  return (
    <>
      <NavBar />
      
      <Routes>
        <Route path="/shop" element={<Shop />} />
        <Route path="/" element={<Shop />} />
        <Route path="/men" element={<ShopCategory banner={men_banner} category="men" />} />
        <Route path="/women" element={<ShopCategory banner={women_banner} category="women" />} />
        <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login_signUp />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;