import React, { useContext, useState } from "react";
import { BooksStoreAppContext } from "../context/BooksStoreApp";

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);

  const { signup, login } = useContext(BooksStoreAppContext);

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSignup = (event) => {
    event.preventDefault();
    const username = event.target.signUpUsername.value;
    const password = event.target.signUpPassword.value;
    signup({ username, password });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const username = event.target.loginUsername.value;
    const password = event.target.loginPassword.value;
    login({ username, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isSignUp ? "Sign Up" : "Log In"}
        </h2>

        {isSignUp ? (
          <form onSubmit={handleSignup}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="signUpUsername"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="signUpUsername"
                type="text"
                placeholder="Username"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="signUpPassword"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="signUpPassword"
                type="password"
                placeholder="******************"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="loginUsername"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="loginUsername"
                type="text"
                placeholder="Username"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="loginPassword"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="loginPassword"
                type="password"
                placeholder="******************"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Log In
              </button>
            </div>
          </form>
        )}

        <div className="mt-4 text-center">
          <button
            className="text-blue-500 hover:text-blue-700"
            onClick={handleToggle}
          >
            {isSignUp
              ? "Already have an account? Log In"
              : "Don't have an account? Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
}
