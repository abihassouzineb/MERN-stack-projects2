import footer_img from "./Ecommerce_Assets (1)/Assets/Frontend_Assets/logo.png"
// importing social media icons
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
      return (
            <footer className="flex mx-12 mt-11 flex-row justify-between items-center px-32 py-6 border-t border-x border-gray-500 rounded-t-full">
                  <img src={footer_img} alt="" />
                  <p className="text-xl font-semibold">Copyright &copy; {new Date().getFullYear()}</p>
                  <div className="flex text-2xl flex-row space-x-4">
                        <FaFacebook />
                        <FaTwitter />
                        <FaInstagram />
                  </div>
            </footer>
      )
}