import { useState } from "react";
import { FaHome, FaCalculator, FaLine, FaEquals } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";

export default function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const { user } = useUser();

  return (
    <nav className="flex justify-between items-center py-3 px-12 bg-gray-800 text-white">
      <p className="text-2xl font-bold">
        <span className="bg-pink-500 px-2 rounded-md py-1 mr-1">Math</span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-red-400">
          Ematica
        </span>
      </p>

      {/* Main navigation items */}
      <ul className="flex flex-row gap-6">
        <Link to="/">
          <li className="flex flex-col justify-center items-center gap-2 hover:scale-105 transition-transform duration-200">
            <FaHome className="text-xl hover:text-pink-400 transition-colors duration-200" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-red-400 hover:from-pink-500 hover:to-red-500 transition-all duration-200">
              Home
            </span>
          </li>
        </Link>
        <Link to="/equations">
          <li className="flex flex-col justify-center items-center gap-2 hover:scale-105 transition-transform duration-200">
            <FaEquals className="text-xl hover:text-pink-400 transition-colors duration-200" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-red-400 hover:from-pink-500 hover:to-red-500 transition-all duration-200">
              Equations Solver
            </span>
          </li>
        </Link>
        <Link to="/graphing">
          <li className="flex flex-col justify-center items-center gap-2 hover:scale-105 transition-transform duration-200">
            <FaLine className="text-xl hover:text-pink-400 transition-colors duration-200" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-red-400 hover:from-pink-500 hover:to-red-500 transition-all duration-200">
              Graphing
            </span>
          </li>
        </Link>
        <li className="relative flex flex-col justify-center items-center gap-2">
          <div
            className="flex flex-col justify-center items-center gap-2 cursor-pointer hover:scale-105 transition-transform duration-200"
            onClick={toggleDropdown}
          >
            <FaCalculator className="text-xl hover:text-pink-400 transition-colors duration-200" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-red-400 hover:from-pink-500 hover:to-red-500 transition-all duration-200">
              Calculators
            </span>
          </div>
          {isDropdownOpen && (
            <ul className="absolute top-12 bg-gray-700 rounded-lg shadow-lg z-50 p-2">
              <Link to="/calculators/bmi">
                <li className="p-2 hover:bg-gray-600 hover:text-pink-400 rounded-md transition-colors duration-200">
                  Bmi Calculator
                </li>
              </Link>
              <Link to="/calculators/mortgage">
                <li className="p-2 hover:bg-gray-600 hover:text-pink-400 rounded-md transition-colors duration-200">
                  Mortgage Calculator
                </li>
              </Link>
              <Link to="/calculators/retirement">
              <li className="p-2 hover:bg-gray-600 hover:text-pink-400 rounded-md transition-colors duration-200">
                Retirement Calculator
              </li>
              </Link>
            </ul>
          )}
        </li>
      </ul>

      {/* Clerk authentication */}
      {user ? (
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      ) : (
        <SignedOut>
          <SignInButton afterSignInUrl="/">
            <button className="bg-pink-500 px-2 rounded-md py-1 hover:bg-pink-600 transition-colors duration-200">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>
      )}
    </nav>
  );
}
