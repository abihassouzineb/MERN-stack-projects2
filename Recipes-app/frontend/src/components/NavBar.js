import React from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userId");
    navigate("/auth");
  };

  return (
    <div className="bg-gray-900 p-4 flex justify-between items-center shadow-md">
      <div className="text-white text-xl font-bold">Recipe App</div>
      <div className="flex space-x-4">
        <Link
          to="/"
          className="text-white bg-blue-400 hover:bg-blue-500 px-3 py-2 rounded font-medium transition duration-300"
        >
          Home
        </Link>
        {!cookies.access_token ? (
          <Link
            to="/auth"
            className="text-white bg-blue-400 hover:bg-blue-500 px-3 py-2 rounded font-medium transition duration-300"
          >
            Login / Register
          </Link>
        ) : (
          <button
            onClick={logout}
            className="text-white bg-gray-600 hover:bg-gray-700 hover:text-gray-300 px-3 py-2 rounded transition duration-300"
          >
            Logout
          </button>
        )}
        <Link
          to="/create-recipe"
          className="text-white bg-blue-400 hover:bg-blue-500 px-3 py-2 rounded font-medium transition duration-300"
        >
          Create Recipe
        </Link>
        <Link
          to="/saved-recipes"
          className="text-white bg-blue-400 hover:bg-blue-500 px-3 py-2 rounded font-medium transition duration-300"
        >
          Saved Recipes
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
