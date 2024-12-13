/* eslint-disable no-restricted-globals */
import { useContext } from "react";
import logo from "./Ecommerce_Assets (1)/Assets/Admin_Assets/nav-logo.svg";
import cart_icon from "./Ecommerce_Assets (1)/Assets/Frontend_Assets/cart_icon.png"
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
function NavBar() {
  const { GetTotalCartItems } = useContext(ShopContext);
  return (
    <nav className="flex items-center justify-between px-10 py-2 border-b-2 border-orange-400">
      <div>
        <img src={logo} alt="logo" />
      </div>

      <ul className="flex font-medium justify-center items-center flex-row space-x-5">
        {/* if the li element is clicked, a bottom border will be added */}
        <li className="cursor-pointer active:border-b-2 active:border-orange-400">
          <Link to="/shop">Shop</Link>
        </li>
        <li className="cursor-pointer  active:border-b-2 active:border-orange-400">
          <Link to="/men">Men</Link>
        </li>
        <li className="cursor-pointer  active:border-b-2 active:border-orange-400">
          <Link to="/women">Women</Link>
        </li>
        <li className="cursor-pointer  active:border-b-2 active:border-orange-400">
          <Link to="/kids">Kids</Link>
        </li>
      </ul>

      <div className="flex relative space-x-5">
        <button className="text-orange-400 border border-orange-400 px-7 py-2 rounded-full font-semibold">
          {localStorage.getItem("password") ? <Link to="/login">Logout</Link> : <Link to="/login">Login</Link>}
        </button>

        <Link to="/cart">
          <img src={cart_icon} alt="cart" />
        </Link>

        <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs font-medium size-4 flex items-center justify-center">
          {GetTotalCartItems()}
        </span>
      </div>
    </nav>
  );
}

export default NavBar;
