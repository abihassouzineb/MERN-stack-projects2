import React from "react";
import { Link } from "react-router-dom";

const Nav_bar = () => {
  return (
    <header className="w-full flex flex-row items-center justify-between px-8 p-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center text-3xl font-extrabold shadow-lg">
      <h1>Product Store</h1>

      <div className="flex flex-row space-x-4">
        <Link
          to="/add-product"
          className="px-4 py-2 bg-blue-500 text-lg text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
        >
          Add Product
        </Link>
      </div>
    </header>
  );
};

export default Nav_bar;
