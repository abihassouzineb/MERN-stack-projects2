import { useEffect, useState } from "react";

function ListProduct() {
  const [products, setProducts] = useState([]);

  const GetProducts = async () => {
    try {
      const response = await fetch("http://localhost:3001/allProducts");
      const data = await response.json();
      setProducts(data.products);
      console.log(data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await fetch(`http://localhost:3001/deleteProduct/${id}`, {
        method: "DELETE",
      });
      GetProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  useEffect(() => {
    GetProducts();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={`http://localhost:3001/${product.image}`}
              alt={product.name}
              className="w-full h-fit object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
            <p className="text-gray-600 mt-2">
              <span className="font-medium">Category:</span> {product.category}
            </p>
            <div className="mt-4 flex justify-between items-center">
              <p className="text-gray-800 font-bold">
                ${product.naw_price}{" "}
                <span className="text-gray-500 line-through">${product.old_price}</span>
              </p>

              <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-lg" onClick={() => deleteProduct(product._id)}>
                Delete
              </button>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListProduct;
