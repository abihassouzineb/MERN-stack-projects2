import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContext";

export default function NavBar() {
  const { isLoggedIn } = useContext(ProductsContext);

  return (
    <nav className="flex flex-row justify-between items-center px-12 py-5 bg-black text-white">
      <h1 className="font-bold text-2xl">ECommercia</h1>

      <ul className="flex gap-x-6 text-lg">
        <li className="hover:ring-2 hover:ring-blue-500 hover:rounded-full  px-5 py-2 duration-300 hover:ring-offset-black cursor-pointer border-b-2 pb-2 ">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:ring-2 hover:ring-blue-500 hover:rounded-full  px-5 py-2 duration-300 hover:ring-offset-black cursor-pointer border-b-2 pb-2 ">
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          {isLoggedIn ? (
            <button className="hover:ring-2 hover:ring-blue-500 hover:rounded-full  px-5 py-2 duration-300 hover:ring-offset-black cursor-pointer border-b-2 pb-2 bg-blue-500">
              <Link to="/login" onClick={() => localStorage.removeItem("user")}>
                Logout
              </Link>
            </button>
          ) : (
            <button className="hover:ring-2 hover:ring-blue-500 hover:rounded-full  px-5 py-2 duration-300 hover:ring-offset-black cursor-pointer border-b-2 pb-2 ">
              <Link to="/login">Login/SignUp</Link>
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
}
