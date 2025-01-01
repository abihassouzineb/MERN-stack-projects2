
// importing hotel icon
import { FaHotel } from "react-icons/fa";
// importing profile icon
import { FaUser } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="flex flex-row justify-between items-center px-20 shadow-md shadow-blue-200 bg-[#e2e8f0] py-4">
      <div className="flex flex-row justify-center items-center gap-x-4">
        <FaHotel className="text-4xl text-blue-500" />
        <p className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-pink-500 to-indigo-500 text-3xl">
          SaadEstate
        </p>
      </div>

      <div className="flex flex-row justify-center items-center gap-x-4">
        <a
          href="/"
          className="hover:bg-gradient-to-r from-blue-500 via-pink-200 to-indigo-500 px-5 hover:ring-2 ring-blue-500 ring-offset-4 ring-offset-gray-200 py-2 rounded-full duration-300"
        >
          Home
        </a>
        <a
          href="/about"
          className="hover:bg-gradient-to-r from-blue-500 via-pink-200 to-indigo-500 px-5 hover:ring-2 ring-blue-500 ring-offset-4 ring-offset-gray-200 py-2 rounded-full duration-300"
        >
          About
        </a>

        <a
          href="/profile"
          className="hover:bg-gradient-to-r from-blue-500 via-pink-200 to-indigo-500 p-2 hover:ring-1 ring-blue-500 ring-offset-4 ring-offset-gray-200  rounded-full duration-300"
        >
          <FaUser className="text-2xl" />
        </a>
        
      </div>
    </nav>
  );
};

export default NavBar;
