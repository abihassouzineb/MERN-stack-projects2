// pages/AuthPage.tsx

import React from "react";
import { SignIn, SignUp, SignUpButton, SignInButton } from "@clerk/clerk-react";

const AuthPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Sign In or Sign Up</h1>
      <SignIn path="/auth/sign-in" routing="path" signUpUrl="/auth/sign-up" />
      <SignUp path="/auth/sign-up" routing="path" signInUrl="/auth/sign-in" />
      {/* adding sign-up and sign-in buttons */}
      <SignInButton mode="modal">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Sign In
        </button>
      </SignInButton>
      <SignUpButton mode="modal">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Sign Up
        </button>
      </SignUpButton>
    </div>
  );
};

export default AuthPage;
