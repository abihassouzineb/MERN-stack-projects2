import { useUser } from "@clerk/clerk-react";
import { Typography } from "@mui/material";
import { useState } from "react";

export default function MortgageCalculator() {
  const [loanAmount, setLoanAmount] = useState(300000);
  const [interestRate, setInterestRate] = useState(4.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState("");

  const calculateMortgage = () => {
    const principal = parseFloat(loanAmount);
    const monthlyInterestRate = parseFloat(interestRate) / 100 / 12;
    const numberOfPayments = parseFloat(loanTerm) * 12;

    const numerator =
      monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments);
    const denominator = Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1;

    const monthlyPayment = (principal * (numerator / denominator)).toFixed(2);
    setMonthlyPayment(monthlyPayment);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateMortgage();
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
    <section className="flex flex-col h-screen  overflow-hidden justify-center items-center bg-gradient-to-br from-green-500 to-blue-600">
      <div className="bg-white rounded-lg shadow-2xl p-8 w-96 transform transition-all hover:scale-105">
        <h1 className="text-3xl border-b-2 border-pink-500 pb-1 leading-snug font-bold text-center text-gray-800 mb-6">
          Mortgage Calculator
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="loanAmount"
              className="block text-sm font-medium text-gray-700"
            >
              Loan Amount ($):
            </label>
            <input
              type="number"
              id="loanAmount"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter loan amount"
              required
            />
          </div>

          <div>
            <label
              htmlFor="interestRate"
              className="block text-sm font-medium text-gray-700"
            >
              Interest Rate (%):
            </label>
            <input
              type="number"
              id="interestRate"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter interest rate"
              step="0.01"
              required
            />
          </div>

          <div>
            <label
              htmlFor="loanTerm"
              className="block text-sm font-medium text-gray-700"
            >
              Loan Term (years):
            </label>
            <input
              type="number"
              id="loanTerm"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter loan term"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
          >
            Calculate Mortgage
          </button>
        </form>

        {monthlyPayment && (
          <div className="mt-6 text-center">
            <p className="text-xl font-semibold text-gray-800">
              Monthly Payment:{" "}
              <span className="text-blue-600 font-bold">${monthlyPayment}</span>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
