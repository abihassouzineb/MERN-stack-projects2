import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BooksStoreAppContextProvider } from "./context/BooksStoreApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BooksStoreAppContextProvider>
      <App />
    </BooksStoreAppContextProvider>
  </React.StrictMode>
);
