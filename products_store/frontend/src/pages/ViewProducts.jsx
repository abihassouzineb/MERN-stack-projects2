import React, { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../api";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const ViewProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data.data);
      } catch (err) {
        setError("No products available.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading)
    return (
      <p className="text-center text-2xl font-bold text-gray-500">Loading...</p>
    );
  if (error)
    return (
      <p className="text-center text-2xl font-bold text-gray-500">{error}</p>
    );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="flex justify-between flex-col items-center">
        <p className="text-center text-2xl mb-4 border-b-2 border-gray-500 font-bold text-gray-500">
          Products
        </p>
        <IoIosArrowDown className="mx-4 text-2xl text-gray-500" />
      </h1>

      {products.length === 0 ? (
        <p className="text-center text-2xl font-bold text-gray-500">
          No products available.
        </p>
      ) : (
        <ul>
          {products.map((product) => (
            <li
              key={product._id}
              className="my-2 flex justify-between items-center rounded-lg bg-gray-100 p-4 border border-gray-500"
            >
              <div>
                <span className="text-lg font-semibold">{product.name}</span> - ${product.price}
                <p className="text-sm text-gray-600 mt-1 font-semibold mr-6">Created at: {new Date(product.createdAt).toLocaleDateString()}</p>
              </div>
              <div className="flex items-center space-x-4">
                {/* Delete Button */}
                <button
                  onClick={async () => {
                    if (window.confirm("Are you sure you want to delete this product?")) {
                      await deleteProduct(product._id);
                      setProducts(products.filter((p) => p._id !== product._id));
                    }
                  }}
                  className="bg-red-500 hover:bg-red-700 duration-300 text-white font-bold py-2 px-4 rounded"
                >
                  Delete
                </button>
                {/* Edit Button */}
                <Link to={`/edit-product/${product._id}`}>
                  <button className="bg-blue-500 hover:bg-blue-700 duration-300 text-white font-bold py-2 px-4 rounded">
                    Edit
                  </button>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ViewProducts;
