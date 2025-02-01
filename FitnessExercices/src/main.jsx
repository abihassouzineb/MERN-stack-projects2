import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GymAppContextProvider } from "./context/GymAppContext.jsx";
import { ClerkProvider } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

console.log(PUBLISHABLE_KEY);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <GymAppContextProvider>
        <App />
      </GymAppContextProvider>
    </ClerkProvider>
  </StrictMode>
);
