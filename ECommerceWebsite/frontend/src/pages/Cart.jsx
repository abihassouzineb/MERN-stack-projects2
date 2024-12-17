import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

export default function Cart() {
  const { cart, total, isLoggedIn, RemoveFromCart } = useContext(ProductsContext);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h1>
      {!isLoggedIn ? (
        <div className="text-center text-red-500">
          Please log in to view your cart.
        </div>
      ) : (
        <>
          {cart.length === 0 ? (
            <div className="text-center text-gray-700">Your cart is empty.</div>
          ) : (
            <div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {cart.map((item) => (
                  <li
                    key={item._id}
                    className="bg-white ring-2 ring-blue-500 py-3 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 relative"
                  >
                    <button
                      className="absolute top-0 right-0 bg-red-500 text-white px-2 m-3 rounded-full cursor-pointer"
                      onClick={() => RemoveFromCart(item._id)}
                    >
                      X
                    </button>
                    <img
                      className="w-full h-48 my-6 object-cover transition-opacity duration-300 hover:opacity-75"
                      src={item.imageUrl}
                      alt={item.name}
                    />
                    <div className="p-4">
                      <h2 className="text-xl font-semibold">{item.name}</h2>
                      <p className="text-gray-700">${item.price}</p>
                      <p className="text-gray-500">Quantity: {item.quantity}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="text-right">
                <p className="text-2xl font-bold">Total: ${total}</p>
                <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 mt-4">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
