import { Link } from "react-router-dom";
import { Logo } from "../assets/all";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [textColor, setTextColor] = useState("text-black");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setTextColor("text-white");
      } else {
        setTextColor("text-black");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex flex-row items-center justify-between fixed top-0 left-0 w-full z-10 px-8 md:px-28 py-4 backdrop-blur-lg bg-opacity-90 ${textColor}`}
    >
      {/* Logo Section */}
      <div className="flex-shrink-0">
        <img src={Logo} alt="Logo" className="h-10 w-auto" />
      </div>

      {/* Navigation Links */}
      <ul className="flex flex-row gap-6">
        <li>
          <Link
            to="/"
            className="font-medium text-base border-b-2 border-orange-500 hover:text-orange-500 transition pb-1"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/exercises"
            className="font-medium text-base border-b-2 border-orange-500 hover:text-orange-500 transition pb-1"
          >
            Exercises
          </Link>
        </li>
      </ul>
    </nav>
  );
}
