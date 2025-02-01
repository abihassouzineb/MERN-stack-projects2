import { FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa'


export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white  w-screen p-4 text-center flex flex-row justify-between items-center">
      <p className="flex flex-row justify-center items-center gap-4">
        &copy; {new Date().getFullYear()}
        <p className="text-2xl font-bold">
          <span className="bg-pink-500 px-2 rounded-md py-1 mr-1">Math</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-red-400">
            Ematica
          </span>
        </p>
        . All rights reserved.
      </p>
      <div className="flex flex-row justify-center items-center gap-4">
        <a
          href="https://github.com/Ematica"
          className="text-white hover:text-gray-300"
        >
          <FaGithub className="text-2xl" />
        </a>

        {/* Add more social media links */}
        <a href="#" className="text-white hover:text-gray-300">
          <FaTwitter className="text-2xl" />
        </a>

        <a href="#" className="text-white hover:text-gray-300">
          <FaFacebook className="text-2xl" />
        </a>


      </div>
    </footer>
  );
}
