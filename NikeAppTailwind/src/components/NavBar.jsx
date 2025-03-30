import { motion as Motion } from "framer-motion";

export default function NavBar() {
  return (
    <Motion.nav
      initial={{ x: "-100%" }}
      whileInView={{ x: 0 }}
      className="flex flex-row justify-between items-center border-b-2 border-teal-400 py-5 px-8 md:px-24"
    >
      {/* Logo */}
      <h1 className="text-2xl font-bold">
        <span>Hi</span>
        <span className="text-teal-500">link.</span>
      </h1>

      {/* Navigation Links with Hover Effects */}
      <ul className="hidden md:flex flex-row gap-7 font-medium">
        {["Home", "How Hilink work?", "Pricing", "Services", "Contact Us"].map(
          (item, index) => (
            <li
              key={index}
              className="text-gray-700 hover:text-teal-500 hover:underline underline-offset-4 decoration-2 decoration-teal-500 transition duration-300 cursor-pointer"
            >
              {item}
            </li>
          )
        )}
      </ul>

      {/* Login Button */}
      <button className="px-5 py-2 bg-black text-white rounded-full hover:bg-teal-500 transition duration-300">
        Login
      </button>
    </Motion.nav>
  );
}
