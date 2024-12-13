import React, { useState } from 'react';
import { addProduct } from '../api';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook to handle navigation

const AddProduct = () => {
  const [name, setName] = useState(''); // Initialize name and price state variables
  const [price, setPrice] = useState('');

  const navigate = useNavigate(); // Initialize the useNavigate hook, for navigation, to redirect the user to the ViewProducts page after adding a new product

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    const product = { name, price: parseFloat(price) }; // Create the product object with name and price, and convert price to a number

    try {
      await addProduct(product);
      navigate('/products'); // Redirect to ViewProducts after adding
    } catch (err) {
      console.error(err);
      alert('Failed to add product');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Add New Product</h1>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full space-y-6">
        {/* Product Name Input */}
        <div>
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Product Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter product name"
            value={name}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* Product Price Input */}
        <div>
          <label htmlFor="price" className="block text-gray-700 font-semibold mb-2">Product Price ($)</label>
          <input
            type="number"
            id="price"
            placeholder="Enter product price"
            value={price}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-bold text-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
