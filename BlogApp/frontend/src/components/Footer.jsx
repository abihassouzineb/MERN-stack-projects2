import { assets } from "../assets/Nextjs-blog-assets/Assets/assets";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <hr className="h-1 bg-black border-0 mx-10 sm:mx-20 dark:bg-gray-700" />
      <footer className="flex flex-col md:flex-row justify-between items-start px-10 sm:px-20 py-6 gap-y-8">
        {/* Logo & Description */}
        <div className="flex flex-col items-start gap-y-5 max-w-md">
          <img src={assets.logo} alt="logo" className="w-24" />
          <p className="text-gray-700 dark:text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            dignissimos eligendi reprehenderit? Dolorem quidem dolore blanditiis
            maxime sapiente ducimus id non nulla. Possimus, consequuntur minima
            odit labore nisi quod autem.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center gap-y-5">
          <h1 className="text-2xl font-semibold border-b-4 px-3 border-black pb-2 dark:text-white">
            Quick Links
          </h1>
          <ul className="flex flex-col items-center gap-y-2 mt-2">
            {["Home", "Blogs", "About", "Contact"].map((link) => (
              <li
                key={link}
                className="text-gray-700 hover:underline hover:underline-offset-4 dark:text-gray-300 hover:text-orange-600 transition"
              >
                <Link to={`/${link.toLowerCase()}`}>{link}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center gap-y-5">
          <h1 className="text-2xl font-semibold border-b-4 border-black pb-2 px-3 dark:text-white">
            Social Media
          </h1>
          <ul className="flex flex-row items-center gap-x-4 mt-2">
            {[FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGithub].map(
              (Icon, index) => (
                <li
                  key={index}
                  className="text-2xl text-gray-700 dark:text-gray-300 hover:text-orange-600  cursor-pointer"
                >
                  <Icon />
                </li>
              )
            )}
          </ul>
        </div>
      </footer>
    </>
  );
}
