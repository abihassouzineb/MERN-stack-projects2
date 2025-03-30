import { useUser } from "@clerk/clerk-react";
import { motion } from "framer-motion";

export default function Profile() {
  const { user } = useUser();

  if (!user) {
    return (
      <p className="text-center text-xl text-gray-600">Loading profile...</p>
    );
  }

  return (
    <motion.div
      className="max-w-lg mx-auto mt-10 p-6 bg-white/30 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Profile Image */}
      <motion.img
        src={user.imageUrl}
        alt="User Avatar"
        className="w-24 h-24 rounded-full mx-auto border-4 border-blue-500 shadow-md"
        initial={{ rotate: -10, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />

      {/* Name & Username */}
      <motion.h2
        className="mt-4 text-center text-2xl font-semibold text-gray-800"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {user.fullName || "User"}
      </motion.h2>
      <motion.p
        className="text-center text-gray-500"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        @{user.username || "NoUsername"}
      </motion.p>

      {/* Email */}
      <motion.p
        className="text-center text-gray-600 mt-2"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {user.primaryEmailAddress?.emailAddress}
      </motion.p>

      {/* Additional Info */}
      <motion.div
        className="mt-4 bg-gray-100 p-4 rounded-lg shadow-sm"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <p className="text-gray-700">
          <strong>Bio:</strong> {user.publicMetadata.bio || "No bio available"}
        </p>
        <p className="text-gray-700">
          <strong>Joined:</strong>{" "}
          {new Date(user.createdAt).toLocaleDateString()}
        </p>
      </motion.div>

      {/* Buttons */}
      <motion.div
        className="mt-6 flex justify-center gap-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <button className="px-4 py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition">
          Edit Profile
        </button>
        <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-full shadow-md hover:bg-gray-400 transition">
          Logout
        </button>
      </motion.div>
    </motion.div>
  );
}
