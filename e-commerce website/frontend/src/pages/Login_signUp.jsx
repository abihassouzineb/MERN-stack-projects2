import React, { useState } from "react";

function LoginSignUp() {
  const [state, setState] = useState("login");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const endpoint = state === "login" ? "http://localhost:3001/login" : "http://localhost:3001/addUser";
    const requestType = state === "login" ? "Login" : "Signup";

    try {
      console.log(`${requestType} function called`);

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();
      console.log(responseData);

      if (state) {
        localStorage.setItem("password", JSON.stringify(formData.password));
      }
    } catch (error) {
      console.error(`Error during ${requestType}:`, error);
    }
  };

  return (
    <div className="h-screen bg-red-200 flex justify-center items-center">
      <form
        className="flex flex-col space-y-6 bg-white p-10 w-1/3"
        onSubmit={(e) => e.preventDefault()}
      >
        <p className="text-2xl font-semibold">
          {state === "login" ? "Login" : "Sign Up"}
        </p>

        {/* Email input field (always visible) */}
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          className="border border-gray-400 px-5 py-3"
          placeholder="Email"
          required
        />

        {/* Password input field */}
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={formData.password}
          className="border border-gray-400 px-5 py-3"
          placeholder="Password"
          required
        />

        {/* Submit button */}
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-red-500 text-white py-2 px-4 my-5"
        >
          {state === "login" ? "Login" : "Sign Up"}
        </button>

        {/* Toggle Login/Sign Up */}
        <button
          type="button"
          className="bg-red-500 self-start text-white py-2 px-6 rounded-full"
          onClick={() => setState(state === "login" ? "signup" : "login")}
        >
          {state === "login" ? "Sign Up" : "Login"}
        </button>
      </form>
    </div>
  );
}

export default LoginSignUp;
