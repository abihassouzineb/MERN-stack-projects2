import React from "react";
import logo from "../assets/transparent-quran-book-white-icon-701751695035221zrtzo6i0ah.png";
import {
  FaFacebook,
  FaGithub,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 px-4 sm:px-8 lg:px-20 border-t border-gray-700">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-4">
              <img
                src={logo}
                alt="IslamicoPedia logo"
                className="w-16 h-16 rounded-full border-2 border-green-500"
              />
              <h2 className="text-2xl font-bold ml-3">
                <span className="text-white">Islamico</span>
                <span className="text-green-500">pedia</span>
              </h2>
            </div>
            <p className="text-gray-400 text-center md:text-left mb-4">
              Your comprehensive digital resource for Quran, Hadith, and Islamic
              knowledge.
            </p>
            <div className="flex space-x-4 justify-center items-center">
              
              <a
                href="#"
                className="text-gray-400 hover:text-green-500 transition-colors"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-500 transition-colors"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-500 transition-colors"
              >
                <FaYoutube className="text-xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-500 transition-colors"
              >
                <FaGithub className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4 text-green-400 border-b border-green-500 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/quran"
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  Quran
                </a>
              </li>
              <li>
                <a
                  href="/hadith"
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  Hadith
                </a>
              </li>
              <li>
                <a
                  href="/favorites"
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  Favorites
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4 text-green-400 border-b border-green-500 pb-2">
              Contact Us
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-green-500" />
                <span>123 Islamic Street, Knowledge City</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-green-500" />
                <a
                  href="mailto:contact@islamicopedia.com"
                  className="hover:text-green-500 transition-colors"
                >
                  contact@islamicopedia.com
                </a>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="mr-2 text-green-500" />
                <a
                  href="tel:+1234567890"
                  className="hover:text-green-500 transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4 text-green-400 border-b border-green-500 pb-2">
              Newsletter
            </h3>
            <p className="text-gray-400 mb-4 text-center md:text-left">
              Subscribe to get updates on new features and content.
            </p>
            <div className="flex w-full">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
              />
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-r-lg transition-colors">
                <MdEmail className="text-xl" />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} IslamicoPedia. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="/privacy"
              className="text-gray-400 hover:text-green-500 text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-gray-400 hover:text-green-500 text-sm transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="/cookies"
              className="text-gray-400 hover:text-green-500 text-sm transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
