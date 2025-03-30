import logo from "../assets/téléchargement.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Logo & App Name */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="App Logo" className="w-12 h-12 object-contain" />
          <h2 className="text-2xl font-semibold">RealEstateHub</h2>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 mt-4 md:mt-0">
          <a href="/" className="hover:text-blue-400 transition">
            Home
          </a>
          <a href="/listings" className="hover:text-blue-400 transition">
            Listings
          </a>
          <a href="/about" className="hover:text-blue-400 transition">
            About
          </a>
          <a href="/about" className="hover:text-blue-400 transition">
            About
          </a>
        </nav>

        {/* Social Media Icons */}
        <div className="flex gap-5 mt-4 md:mt-0">
          <a href="#" className="hover:text-blue-400 transition">
            <i className="fab fa-facebook text-xl"></i>
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            <i className="fab fa-twitter text-xl"></i>
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            <i className="fab fa-instagram text-xl"></i>
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} RealEstateHub. All rights reserved.
      </div>
    </footer>
  );
}
