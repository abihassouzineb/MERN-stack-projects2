import React from "react";
import logo from "../assets/transparent-quran-book-white-icon-701751695035221zrtzo6i0ah.png";
import { NavLink } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
  SignUpButton,
} from "@clerk/clerk-react";

export default function NavBar() {
  return (
    <nav className="flex flex-row justify-between items-center py-4 px-4 sm:px-10 lg:px-20 bg-gray-800 text-white">
      {/* Logo and Brand Name */}
      <ul className="flex flex-row gap-x-4 items-center">
        <li>
          <img
            src={logo}
            alt="logo"
            className="size-12 sm:size-16 rounded-full border-2 border-white"
          />
        </li>
        <li className="text-xl sm:text-2xl font-bold text-white hover:text-gray-300 transition-colors duration-200">
          <span>Islamico</span>
          <span className="text-green-500">pedia</span>
        </li>
      </ul>

      {/* Navigation Links */}
      <ul className="hidden md:flex flex-row gap-x-6 items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `hover:text-green-400 transition-colors duration-200 ${
              isActive ? "border-b-2 border-green-500 pb-1 text-green-400" : ""
            }`
          }
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            `hover:text-green-400 transition-colors duration-200 ${
              isActive ? "border-b-2 border-green-500 pb-1 text-green-400" : ""
            }`
          }
        >
          <li>Favorites</li>
        </NavLink>
        <NavLink
          to="/hadith"
          className={({ isActive }) =>
            `hover:text-green-400 transition-colors duration-200 ${
              isActive ? "border-b-2 border-green-500 pb-1 text-green-400" : ""
            }`
          }
        >
          <li>Hadith</li>
        </NavLink>
        <NavLink
          to="/quran"
          className={({ isActive }) =>
            `hover:text-green-400 transition-colors duration-200 ${
              isActive ? "border-b-2 border-green-500 pb-1 text-green-400" : ""
            }`
          }
        >
          <li>Quran</li>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `hover:text-green-400 transition-colors duration-200 ${
              isActive ? "border-b-2 border-green-500 pb-1 text-green-400" : ""
            }`
          }
        >
          <li>About</li>
        </NavLink>
      </ul>

      {/* Authentication Buttons */}
      <div className="flex items-center gap-x-3 sm:gap-x-5">
        <SignedIn>
          <div className="flex items-center gap-x-4">
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  userButtonAvatarBox: "h-8 w-8 sm:h-10 sm:w-10",
                  userButtonPopoverCard: "bg-gray-800 border border-gray-700",
                },
              }}
            />
          </div>
        </SignedIn>

        <SignedOut>
          <div className="flex gap-x-3">
            <SignInButton mode="modal">
              <button className="px-3 py-1 sm:px-4 sm:py-2 bg-transparent border border-green-500 text-green-500 rounded-md hover:bg-green-500 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                Sign In
              </button>
            </SignInButton>

            <SignUpButton mode="modal">
              <button className="px-3 py-1 sm:px-4 sm:py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-200 text-sm sm:text-base">
                Sign Up
              </button>
            </SignUpButton>
          </div>
        </SignedOut>
      </div>
    </nav>
  );
}
