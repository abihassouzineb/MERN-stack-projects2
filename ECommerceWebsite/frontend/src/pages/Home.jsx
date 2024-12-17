import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

const Home = () => {
  const { products, cart, AddToCart, RemoveFromCart } =
    useContext(ProductsContext);

  const getProductQuantity = (productId) => {
    const productInCart = cart.find((item) => item._id === productId);
    return productInCart ? productInCart.quantity : 0;
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white ring-2 ring-blue-500 py-3 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <img
              className="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-75"
              src={product.imageUrl}
              alt={product.name}
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-700">${product.price}</p>
              <p className="text-gray-500">
                Quantity in cart: {getProductQuantity(product._id)}
              </p>
              <button
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 mt-4"
                onClick={() => AddToCart(product)}
              >
                Add to Cart
              </button>
              {getProductQuantity(product._id) > 0 && (
                <button
                  className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 mt-4 ml-2"
                  onClick={() => RemoveFromCart(product._id)}
                >
                  Remove from Cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
