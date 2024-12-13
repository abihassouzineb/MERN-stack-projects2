import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProducts, updateProduct } from '../api';

const EditProduct = () => {
  const { id } = useParams(); // Get the product ID from the route parameters
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await getProducts(id); // Fetch product by ID
        setName(product.name); // Set the product name
        setPrice(product.price); // Set the product price
      } catch (err) {
        setError('Failed to load product details.'); // Set the error message
      } finally {
        setLoading(false); // Set loading to false
      }
    };

    fetchProduct(); // Call the fetchProduct function
  }, [id] // Pass the product ID as a dependency
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedProduct = { name, price: parseFloat(price) }; // Create the updated product object with name and price, and convert price to a number

    try {
      await updateProduct(id, updatedProduct); // Update product
      navigate('/products'); // Redirect to products list after updating
    } catch (err) {
      alert('Failed to update product');
    }
  };

  if (loading) {
    return <p className="text-center text-2xl font-bold text-gray-500">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-2xl font-bold text-red-500">{error}</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Edit Product</h1>

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
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
