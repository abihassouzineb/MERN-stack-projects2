import { useContext } from "react";
import { assets } from "../assets/forever-assets/assets/frontend_assets/assets";
import { NavLink } from "react-router-dom";
import { ForeverAppContext } from "../context/ForeverAppContext";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
} from "@clerk/clerk-react"

export default function NavBar() {
  const activeLinkStyles = "border-b-2 text-[#374151] border-black"; // Customize colors and thickness as needed

  const { cart } = useContext(ForeverAppContext);

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <nav className="flex items-center justify-between py-6 px-12">
      <img src={assets.logo} alt="logo" className="w-36" />

      <ul className="flex text-[14px] font-medium items-center gap-10">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeLinkStyles : "")}
        >
          <li>HOME</li>
        </NavLink>

        <NavLink
          to="/collections"
          className={({ isActive }) => (isActive ? activeLinkStyles : "")}
        >
          <li>COLLECTIONS</li>
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? activeLinkStyles : "")}
        >
          <li>ABOUT</li>
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? activeLinkStyles : "")}
        >
          <li>CONTACT</li>
        </NavLink>
      </ul>

      <ul className="flex items-center gap-6">
        <NavLink
          to="/cart"
          className={({ isActive }) => (isActive ? activeLinkStyles : "")}
        >
          <li className="relative">
            <img src={assets.cart_icon} alt="cart" className="w-6" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#374151] text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </li>
        </NavLink>

        <NavLink
          to="/portfolio"
          className={({ isActive }) => (isActive ? activeLinkStyles : "")}
        >
          <li className="flex items-center">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </li>
        </NavLink>
      </ul>
    </nav>
  );
}
