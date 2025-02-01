import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { BookStoreContext } from "../context/BookStoreContext";
import { Link } from "react-router-dom";

export default function NavBar() {
  const { cartItems } = useContext(BookStoreContext);

  return (
    <nav className="flex border-b-2 border-blue-500  text-white py-4 fixed top-0 left-0 right-0 px-28 justify-between items-center bg-gradient-to-r from-slate-900 to-slate-700">
      <p className="text-3xl font-bold flex flex-row">
        <span>Book</span>
        {/* the first letter of the word "Zone" should be rotated 45 degrees */}
        <span className="rotate-45 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-600">
          Z
        </span>
        <span className="text-red-500">one</span>
      </p>

      <ul className="flex gap-8 list-none">
        <Link to="/">
          <li>
            <button className="hover:bg-gradient-to-r ring-1 hover:ring-0 from-blue-500 to-purple-500 text-white font-semibold rounded p-0.5">
              <span className="flex w-full bg-gray-900 text-white rounded px-5 py-1.5">
                Home
              </span>
            </button>
          </li>
        </Link>

        <Link to="/cart">
          <li className="relative">
            <button className="hover:bg-gradient-to-r ring-1 hover:ring-0 from-blue-500 to-purple-500 text-white font-semibold rounded p-0.5">
              <span className="flex w-full bg-gray-900 text-white rounded px-6 py-2.5">
                {/* cart icon */}
                <FaShoppingCart />
              </span>
            </button>
            <span className="absolute top-[-2px] right-[-3px] bg-red-500 text-white rounded-full size-4 pb-[0.4px] pr-[5px] font-medium px-1 flex items-center justify-center">
              {cartItems.length}
            </span>
          </li>
        </Link>
        <Link to="/About">
          <li>
            <button className="hover:bg-gradient-to-r ring-1 hover:ring-0 from-blue-500 to-purple-500 text-white font-semibold rounded p-0.5">
              <span className="flex w-full bg-gray-900 text-white rounded px-5 py-1.5">
                About
              </span>
            </button>
          </li>
        </Link>
      </ul>
    </nav>
  );
}
