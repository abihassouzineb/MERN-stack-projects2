/* eslint-disable no-unused-vars */
import axios from "axios";
import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  return (
    <div className="flex justify-around p-8 bg-gray-100 min-h-screen">
      <Login />
      <Register />
    </div>
  );
};

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [, setCookie] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/auth/login", {
        username,
        password,
      });
      setCookie("access_token", response.data.token);
      console.log(response.data);
      window.localStorage.setItem("userId", response.data.userID);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-1/2 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="login-username">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="login-username"
            placeholder="Username"
            className="w-full p-2 border border-gray-300 rounded"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="login-password">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="login-password"
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

const Register = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:3001/auth/register", {
        username,
        password,
      });
      alert("User registered successfully, please login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-1/2 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <Form
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        label="Register"
        onSubmit={handleRegister}
      />
    </div>
  );
};

const Form = ({
  username,
  setUsername,
  password,
  setPassword,
  label,
  onSubmit,
}) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor={`${label.toLowerCase()}-username`}>
            Username
          </label>
          <input
            type="text"
            name="username"
            id={`${label.toLowerCase()}-username`}
            placeholder="Username"
            className="w-full p-2 border border-gray-300 rounded"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor={`${label.toLowerCase()}-password`}>
            Password
          </label>
          <input
            type="password"
            name="password"
            id={`${label.toLowerCase()}-password`}
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          {label}
        </button>
      </form>
    </div>
  );
};

export default Auth;
