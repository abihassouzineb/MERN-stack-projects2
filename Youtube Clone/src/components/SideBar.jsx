import { useContext } from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { YoutubeCloneContext } from "../context/YoutubeCloneContext";

// Menu items
const menuItems = [
  {
    to: "/",
    icon: <FaHome className="w-6 h-6" />,
    label: "Home",
  },
  {
    to: "/shorts",
    icon: (
      <img
        className="w-6 h-6"
        src="https://img.icons8.com/color/48/youtube-shorts.png"
        alt="YouTube Shorts"
      />
    ),
    label: "Shorts",
  },
  {
    to: "/subscriptions",
    icon: (
      <img
        className="w-6 h-6"
        src="https://img.icons8.com/material-outlined/24/subscription.png"
        alt="Subscriptions"
      />
    ),
    label: "Subscriptions",
  },
];

export default function SideBar() {
  const { isOpen } = useContext(YoutubeCloneContext);

  return (
    <aside
      className={`fixed top-0 left-0 bg-white z-50 ${
        isOpen ? "w-60" : "w-16"
      } h-screen flex flex-col gap-4 pt-20 p-3 border-r border-gray-300 transition-all duration-300`}
    >
      {menuItems.map(({ to, icon, label }, index) => (
        <Link
          key={index}
          to={to}
          className="flex items-center gap-4 px-2 py-3 rounded-lg hover:bg-gray-300 transition-colors"
          aria-label={label}
        >
          {icon}
          {/* Label is hidden when the sidebar is closed */}
          <p className={`${isOpen ? "block" : "hidden"}`}>{label}</p>
        </Link>
      ))}
    </aside>
  );
}
