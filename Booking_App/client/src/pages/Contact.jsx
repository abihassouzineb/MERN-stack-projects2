import { assets } from "../assets/forever-assets/assets/frontend_assets/assets";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center mt-6 mb-14 gap-x-10 px-6">
      <img
        src={assets.contact_img}
        alt="contact"
        className="w-full md:w-[43%] rounded-lg shadow-lg"
      />

      <div className="w-full md:w-[50%] flex flex-col gap-y-6 items-start md:items-center">
        <h1 className="text-4xl flex gap-x-2 mb-6 text-left md:text-center">
          <span className="text-[#374151] font-semibold">CONTACT</span>
          <span className="font-light">US</span>
          <span className="text-gray-400">-------</span>
        </h1>

        <p className="text-[#374151] text-2xl border-b-2 pb-1 border-black px-5 font-semibold">Our Store</p>

        <div className="flex flex-col gap-y-2 text-[#374151] text-lg">
          <p className="border-b border-l pl-2">Morocco, Settat, 2221</p>
          <p className="border-b border-l pl-2">+212 6 11 22 33 44</p>
          <p className="border-b border-l pl-2">9h0Q5@example.com</p>
        </div>

        <div className="flex flex-col gap-y-2">
          <p className="text-[#374151] border-b-2 pb-1 border-black text-xl font-semibold">Follow Us</p>
          <div className="flex gap-x-5 text-xl items-center text-gray-600">
            <FaFacebook className="hover:text-blue-500 cursor-pointer size-7" />
            <FaTwitter className="hover:text-blue-400 cursor-pointer size-7" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer size-7" />
            <FaLinkedin className="hover:text-blue-700 cursor-pointer size-7" />
          </div>
        </div>
      </div>
    </section>
  );
}
