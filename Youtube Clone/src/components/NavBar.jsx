import { FaBars, FaMicrophone, FaPlus, FaBell, FaUser } from "react-icons/fa";
import { SocialIcon } from "react-social-icons";
import SearchIcon from "@mui/icons-material/Search";
import { useContext } from "react";
import { YoutubeCloneContext } from "../context/YoutubeCloneContext";

export default function NavBar() {
  const { toggleSidebar, isOpen } = useContext(YoutubeCloneContext);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-white shadow-md z-50 h-16 flex items-center justify-between ${
        isOpen ? "pl-[195px] pr-4" : "px-6"
      }`}
    >
      {/* Left: Sidebar Toggle and Logo */}
      <div className="flex items-center gap-4">
        <FaBars
          className="text-2xl cursor-pointer p-2 size-11 ml-12 hover:bg-gray-200 rounded-2xl"
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
        />
        <SocialIcon
          url="https://www.youtube.com/"
          className="w-8 h-8"
          target="_blank"
          aria-label="YouTube Logo"
        />
      </div>

      {/* Center: Search Bar */}
      <div className="flex items-center gap-3">
        <div className="relative flex-grow max-w-xl">
          <input
            type="text"
            className="w-full rounded-full focus:outline-none focus:ring focus:ring-gray-300 pr-12 pl-4 placeholder-gray-500 border border-gray-300 shadow-sm py-2"
            placeholder="Search"
          />
          <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer hover:text-gray-600" />
        </div>
        <FaMicrophone
          className="text-xl p-2 size-9 bg-gray-200 rounded-full hover:bg-gray-300 cursor-pointer"
          aria-label="Voice Search"
        />
      </div>

      {/* Right: Other Buttons */}
      <div className="flex items-center gap-4">
        <button
          className="flex items-center gap-2 px-3 py-2 bg-gray-200 rounded-full hover:bg-gray-300"
          aria-label="Create"
        >
          <FaPlus className="text-lg" />
          <span className="text-sm">Create</span>
        </button>
        <FaBell
          className="text-xl p-2 bg-gray-200 size-9 rounded-full hover:bg-gray-300 cursor-pointer"
          aria-label="Notifications"
        />
        <FaUser
          className="text-xl p-2 bg-gray-200 rounded-full size-9 hover:bg-gray-300 cursor-pointer"
          aria-label="User Profile"
        />
      </div>
    </nav>
  );
}
