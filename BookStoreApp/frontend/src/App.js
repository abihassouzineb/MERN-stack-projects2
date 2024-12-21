import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Book from "./pages/Book";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />

          {/* route to display book details based on id */}
          <Route path="/book/:id" element={<Book />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
