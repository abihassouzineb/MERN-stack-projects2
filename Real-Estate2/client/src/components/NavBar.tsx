import logo from "../assets/téléchargement.png";
import { NavLink } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";

export default function NavBar() {
  return (
    <nav className="flex flex-row justify-between border-b-2 border-blue-500 items-center px-24">
      <img src={logo} alt="logo" className="w-24 h-24" />

      <ul className="flex flex-row gap-7">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-500 border-b-2 border-blue-500" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/listings"
            className={({ isActive }) =>
              isActive ? "text-blue-500 border-b-2 border-blue-500" : ""
            }
          >
            Listings
          </NavLink>
        </li>

        {useUser().isSignedIn && (
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? "text-blue-500 border-b-2 border-blue-500" : ""
              }
            >
              Profile
            </NavLink>
          </li>
        )}

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-500 border-b-2 border-blue-500" : ""
            }
          >
            About
          </NavLink>
        </li>
      </ul>

      <div className="flex flex-row gap-7">
        <SignedIn>
          <button className="border-2 border-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 duration-300 cursor-pointer">
            <SignOutButton />
          </button>
        </SignedIn>
        <SignedOut>
          <button className="border-2 hover:text-white hover:cursor-pointer border-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 duration-300 cursor-pointer">
            <SignInButton>Sign In</SignInButton>
          </button>
        </SignedOut>
      </div>
    </nav>
  );
}
