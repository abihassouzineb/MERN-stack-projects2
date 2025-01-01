import { useState, useRef, useContext, useEffect } from "react";
import profile_img from "../assets/téléchargement.png";
import RecentOffers from "../components/RecentOffers";
import { LoginContext } from "../context/LoginContext";
import { motion } from 'framer-motion';

const Profile = () => {
  const [profileImage, setProfileImage] = useState(profile_img);
  const fileInputRef = useRef(null);

  const { user, setUser } = useContext(LoginContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false); // State to toggle between login and signup
  const [show, setShow] = useState(false); // State to toggle listings display

  // Load user and show state from local storage on component mount
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedShow = JSON.parse(localStorage.getItem("show"));

    if (storedUser) {
      setUser(storedUser);
    }

    if (storedShow) {
      setShow(storedShow);
    }
  }, [setUser]);

  // Save user and show state to local storage when they change
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("show", JSON.stringify(show));
  }, [user, show]);

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { username, password };

    const endpoint = isLogin ? "login" : "signup";

    fetch(`http://localhost:3000/auth/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Login successful") {
          setUser({ username }); // Set user context if login is successful
          setShow(true); // Only show listings and enable buttons after successful login
        }
        console.log(data);
      })
      .catch((error) => console.error("Error:", error));
  };

  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleImageClick = () => fileInputRef.current.click();

  return (
    <div className="flex flex-col items-center py-10 h-full bg-gray-100">
      <motion.h1 
        className="text-3xl font-bold mb-6 text-center text-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Profile
      </motion.h1>
      
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <img
          src={profileImage}
          alt="Profile"
          onClick={handleImageClick}
          className="w-40 h-40 rounded-full mb-4 object-cover border-4 border-gray-300 cursor-pointer"
        />
        <input
          type="file"
          onChange={handleChange}
          accept="image/*"
          ref={fileInputRef}
          className="hidden"
        />

        <motion.form
          action=""
          onSubmit={handleSubmit}
          className="flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
            className="mb-4 px-4 py-2 rounded-md bg-white ring-1 ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            autoComplete="true"
            className="mb-4 px-4 py-2 rounded-md bg-white ring-1 ring-blue-500"
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 via-pink-200 to-indigo-500 px-5 py-2 rounded-md hover:ring-2 hover:ring-blue-400 hover:ring-offset-4 ring-offset-gray-200 ring ring-blue-200 my-7 duration-300 hover:skew-y-6"
          >
            {isLogin ? "Login" : "Signup"}
          </button>
        </motion.form>

        <motion.button
          className="text-blue-500 underline mt-4"
          onClick={() => setIsLogin(!isLogin)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          {isLogin ? "Don't have an account? Signup" : "Already have an account? Login"}
        </motion.button>
      </motion.div>

      {user && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-6 flex flex-col items-center"
        >
          <button className="bg-gradient-to-r from-blue-500 via-pink-200 to-indigo-500 px-5 py-2 rounded-md hover:ring-2 hover:ring-blue-400 hover:ring-offset-4 ring-offset-gray-200 ring ring-blue-200 my-7 duration-300 hover:skew-y-6">
            <a href="/create">Create Listing</a>
          </button>
          <button
            className="bg-gradient-to-r from-blue-500 via-pink-200 to-indigo-500 px-5 py-2 rounded-md hover:ring-2 hover:ring-blue-400 hover:ring-offset-4 ring-offset-gray-200 ring ring-blue-200 my-7 duration-300 hover:skew-y-6"
            onClick={() => setShow(!show)}
          >
            {show ? "Hide" : "Show"} Listings
          </button>
        </motion.div>
      )}

      {show && <RecentOffers />}
    </div>
  );
};

export default Profile;
