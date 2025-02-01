import { useUser } from "@clerk/clerk-react";
import { Typography } from "@mui/material";
import { useState } from "react";

export default function RetirementCalculator() {
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(65);
  const [currentSavings, setCurrentSavings] = useState(10000);
  const [annualContribution, setAnnualContribution] = useState(5000);
  const [rateOfReturn, setRateOfReturn] = useState(7);
  const [retirementSavings, setRetirementSavings] = useState("");

  const calculateRetirement = () => {
    const yearsUntilRetirement = retirementAge - currentAge;
    const r = rateOfReturn / 100;

    // Future value of current savings
    const futureValueOfSavings =
      currentSavings * Math.pow(1 + r, yearsUntilRetirement);

    // Future value of annual contributions
    const futureValueOfContributions =
      annualContribution * ((Math.pow(1 + r, yearsUntilRetirement) - 1) / r);

    // Total retirement savings
    const totalSavings = futureValueOfSavings + futureValueOfContributions;
    setRetirementSavings(totalSavings.toFixed(2));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateRetirement();
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
    <section className="flex flex-col h-full py-10 overflow-hidden justify-center items-center bg-gradient-to-br from-purple-500 to-indigo-600">
      <div className="bg-white rounded-lg shadow-2xl p-8 w-96 transform transition-all hover:scale-105">
        <h1 className="text-3xl border-b-2 border-pink-500 pb-1 font-bold text-center text-gray-800 mb-6">
          Retirement Calculator
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="currentAge"
              className="block text-sm font-medium text-gray-700"
            >
              Current Age:
            </label>
            <input
              type="number"
              id="currentAge"
              value={currentAge}
              onChange={(e) => setCurrentAge(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              placeholder="Enter current age"
              required
            />
          </div>

          <div>
            <label
              htmlFor="retirementAge"
              className="block text-sm font-medium text-gray-700"
            >
              Retirement Age:
            </label>
            <input
              type="number"
              id="retirementAge"
              value={retirementAge}
              onChange={(e) => setRetirementAge(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              placeholder="Enter retirement age"
              required
            />
          </div>

          <div>
            <label
              htmlFor="currentSavings"
              className="block text-sm font-medium text-gray-700"
            >
              Current Savings ($):
            </label>
            <input
              type="number"
              id="currentSavings"
              value={currentSavings}
              onChange={(e) => setCurrentSavings(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              placeholder="Enter current savings"
              required
            />
          </div>

          <div>
            <label
              htmlFor="annualContribution"
              className="block text-sm font-medium text-gray-700"
            >
              Annual Contribution ($):
            </label>
            <input
              type="number"
              id="annualContribution"
              value={annualContribution}
              onChange={(e) => setAnnualContribution(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              placeholder="Enter annual contribution"
              required
            />
          </div>

          <div>
            <label
              htmlFor="rateOfReturn"
              className="block text-sm font-medium text-gray-700"
            >
              Expected Rate of Return (%):
            </label>
            <input
              type="number"
              id="rateOfReturn"
              value={rateOfReturn}
              onChange={(e) => setRateOfReturn(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              placeholder="Enter expected rate of return"
              step="0.1"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all"
          >
            Calculate Retirement Savings
          </button>
        </form>

        {retirementSavings && (
          <div className="mt-6 text-center">
            <p className="text-xl font-semibold text-gray-800">
              Retirement Savings Goal:{" "}
              <span className="text-purple-600 font-bold">
                ${retirementSavings}
              </span>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
