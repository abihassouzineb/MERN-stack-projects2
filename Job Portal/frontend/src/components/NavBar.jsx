import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const { openSignIn } = useClerk();
  const { user } = useUser();

  return (
    <nav className="flex justify-between items-center py-4 px-20 bg-white text-gray-800 shadow-md">
      <Link to="/">
        <p className="text-2xl font-bold">
          <span className="mr-2">Insider</span>
          <span>Jobs</span>
        </p>
      </Link>

      {user ? (
        <ul className="flex gap-x-5 justify-center items-center">
          <Link to="/portfolio">
            <li className="hover:text-gray-600 cursor-pointer mr-4 border-b-2 border-blue-500">Portfolio</li>
          </Link>
          <Link to="/appliedJobs">
            <li className="hover:text-gray-600 cursor-pointer">Applied Jobs</li>
          </Link>
          <p>|</p>
          <li className="hover:text-gray-600 cursor-pointer">
            Hi, {user.firstName}
          </li>
          <li className="mt-1">
            <UserButton />
          </li>
        </ul>
      ) : (
        <button
          onClick={openSignIn}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign In
        </button>
      )}
    </nav>
  );
}
