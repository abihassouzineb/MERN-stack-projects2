import { Link } from "react-router-dom";
import { assets } from "../assets/Nextjs-blog-assets/Assets/assets";
import NavButton from "./NavButton";

export default function NavBar() {
  return (
    <nav className="flex fixed bg-gradient-to-r from-orange-400 via-orange-500 to-orange-300 w-full top-0 z-50 justify-between items-center px-6 sm:px-10 md:px-20 py-4 shadow-md">
      <Link to="/">
        <img src={assets.logo} alt="logo" className="h-auto" />
      </Link>
      <NavButton />
    </nav>
  );
}
