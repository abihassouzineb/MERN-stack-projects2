import { useUser } from "@clerk/clerk-react";
import { Typography } from "@mui/material";
import { number } from "mathjs";
import { useState } from "react";

export default function BMI() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState("");

  const fetchBmi = async () => {
    const response = await fetch(
      `http://localhost:3000/bmi/${height}/${weight}`
    );
    const data = await response.json();
    setBmi(data.bmi);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchBmi();
  };

  const { user } = useUser();

  if (!user) {
    return (
      <section className="flex flex-col h-screen overflow-hidden justify-center items-center">
        <Typography variant="h6" component="h2" gutterBottom>
          Please sign in to access this page.
        </Typography>
      </section>
    );
  }

  return (
    <section className="flex flex-col h-screen overflow-hidden justify-center items-center bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="bg-white rounded-lg shadow-2xl p-8 w-96 transform transition-all hover:scale-105">
        <h1 className="text-3xl font-bold text-center border-b-2 border-pink-500 pb-1 text-gray-800 mb-6">
          BMI Calculator
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="height"
              className="block text-sm font-medium text-gray-700"
            >
              Height (m):
            </label>
            <input
              type="number"
              id="height"
              name="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter height in meters"
              step="0.01"
              min="0"
              required
            />
          </div>

          <div>
            <label
              htmlFor="weight"
              className="block text-sm font-medium text-gray-700"
            >
              Weight (kg):
            </label>
            <input
              type="number"
              id="weight"
              name="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter weight in kilograms"
              step="0.1"
              min="0"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
          >
            Calculate BMI
          </button>
        </form>

        {bmi && (
          <div className="mt-6 text-center">
            <p className="text-xl font-semibold text-gray-800">
              Your BMI: <span className="text-blue-600 font-bold">{number(bmi).toFixed(2)}</span>
            </p>
            <p className="text-sm text-gray-600 mt-2">
              {bmi < 18.5
                ? "Underweight"
                : bmi >= 18.5 && bmi < 24.9
                ? "Normal weight"
                : bmi >= 25 && bmi < 29.9
                ? "Overweight"
                : "Obesity"}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
