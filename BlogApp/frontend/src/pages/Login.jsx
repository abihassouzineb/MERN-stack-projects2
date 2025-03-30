import { useState } from "react";
import { toast , Toaster} from "react-hot-toast";

export default function Login() {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  // Show toast notification
  const showToast = (type, message) => {
    if (type === "success") toast.success(message);
    else toast.error(message);
  };

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = isSignup ? "/signup" : "/login";
    try {
      const response = await fetch(`http://localhost:5000${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) {
        showToast("error", data.message);
        return;
      }

      showToast("success", data.message);
      if (!isSignup) localStorage.setItem("user", formData.email);
    } catch {
      showToast("error", "Something went wrong. Try again.");
    }
  };

  return (
    <section className="flex flex-col mt-40 items-center justify-center gap-y-10 my-10 px-10">
      {/* toast container */}
      <Toaster position="top-center" reverseOrder={false} />
      <h1 className="text-3xl border-b-2 border-orange-600 pb-2 font-semibold">
        {isSignup ? "Create an Account" : "Login to access all our blogs"}
      </h1>
      <form
        className="bg-white shadow-lg p-8 rounded-lg w-96 flex flex-col gap-y-4"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-3 border rounded-lg w-full"
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
          className="p-3 border rounded-lg w-full"
        />
        <button
          type="submit"
          className="bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700"
        >
          {isSignup ? "Sign Up" : "Login"}
        </button>
      </form>
      <button className="text-blue-500" onClick={() => setIsSignup(!isSignup)}>
        {isSignup
          ? "Already have an account? Login"
          : "Don't have an account? Sign up"}
      </button>
    </section>
  );
}
