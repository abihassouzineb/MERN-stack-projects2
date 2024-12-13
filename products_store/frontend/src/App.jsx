import React from "react";
import { Link, Route, Routes } from "react-router-dom";
// importing pages
import AddProduct from "./pages/AddProduct";
import ViewProducts from "./pages/ViewProducts";
import EditProduct from "./pages/EditProduct";

// importing components
import Navbar from "./components/NavBar";
import "./App.css";

const App = () => {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center bg-gray-100">
      
      {/* Header */}
      <Navbar />
      {/* Main Section */}
      <main className="flex flex-col w-full max-w-lg p-6 space-y-8 items-center">
        {/* Welcome Banner */}
        <div className="text-center py-4 px-6 bg-white rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800">
            Welcome to the Product Store!
          </h2>
          <p className="text-gray-600 mt-2">Manage your products efficiently</p>
        </div>

        {/* Routes */}
        <Routes>
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/products" element={<ViewProducts />} />
          <Route path="/edit-product/:id" element={<EditProduct />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="w-full text-center p-4 mt-auto bg-gray-200 text-gray-600 text-sm">
        © {new Date().getFullYear()} Products Store. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
