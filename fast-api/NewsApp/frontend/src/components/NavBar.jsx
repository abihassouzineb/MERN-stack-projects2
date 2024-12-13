/* eslint-disable react/prop-types */
import { FaNewspaper } from "react-icons/fa";

const NavBar = ({ onCategoryChange }) => {
  const handleCategoryClick = (category) => {
    onCategoryChange(category.toLowerCase());
  };

  return (
    <nav className="flex justify-between pt-5 items-center border-b border-green-400 pb-5 fixed top-0 left-0 right-0 px-6 z-50 backdrop-blur bg-opacity-75 bg-gray-800">
      <FaNewspaper className="text-4xl text-red-500" />

      <ul className="flex gap-x-4 font-semibold">
        <li className="px-5 py-2 rounded-full hover:bg-gradient-to-r from-green-300 to-green-500 duration-300 hover:border-none hover:ring-2 cursor-pointer hover:ring-green-400 hover:ring-offset-4 hover:ring-offset-gray-700">
          <a href="/">Home</a>
        </li>
        <li
          className="px-5 py-2 rounded-full hover:bg-gradient-to-r from-green-300 to-green-500 duration-300 hover:border-none hover:ring-2 cursor-pointer hover:ring-green-400 hover:ring-offset-4 hover:ring-offset-gray-700"
          onClick={() => handleCategoryClick('Sport')}
        >
          Sport
        </li>
        <li
          className="px-5 py-2 rounded-full hover:bg-gradient-to-r from-green-300 to-green-500 duration-300 hover:border-none hover:ring-2 cursor-pointer hover:ring-green-400 hover:ring-offset-4 hover:ring-offset-gray-700"
          onClick={() => handleCategoryClick('Business')}
        >
          Business
        </li>
        <li
          className="px-5 py-2 rounded-full hover:bg-gradient-to-r from-green-300 to-green-500 duration-300 hover:border-none hover:ring-2 cursor-pointer hover:ring-green-400 hover:ring-offset-4 hover:ring-offset-gray-700"
          onClick={() => handleCategoryClick('Innovation')}
        >
          Innovation
        </li>
        <li
          className="px-5 py-2 rounded-full hover:bg-gradient-to-r from-green-300 to-green-500 duration-300 hover:border-none hover:ring-2 cursor-pointer hover:ring-green-400 hover:ring-offset-4 hover:ring-offset-gray-700"
          onClick={() => handleCategoryClick('Culture')}
        >
          Culture
        </li>
        <li
          className="px-5 py-2 rounded-full hover:bg-gradient-to-r from-green-300 to-green-500 duration-300 hover:border-none hover:ring-2 cursor-pointer hover:ring-green-400 hover:ring-offset-4 hover:ring-offset-gray-700"
          onClick={() => handleCategoryClick('Art')}
        >
          Art
        </li>
      </ul>

      <div className="flex gap-x-7 font-semibold">
        <button className="bg-green-400 hover:border-none hover:ring-2 cursor-pointer hover:ring-green-400 hover:ring-offset-4 hover:ring-offset-gray-700 px-5 py-2 duration-300">
          Login
        </button>
        <button className="hover:bg-green-400 hover:border-none hover:ring-2 cursor-pointer hover:ring-green-400 hover:ring-offset-4 hover:ring-offset-gray-700 px-5 py-2 duration-300">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
