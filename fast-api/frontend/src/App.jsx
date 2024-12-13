import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import AddStudent from "./components/AddStudent";

export default function App() {
  return (
    <div className="bg-gray-800 h-screen text-white">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-student" element={<AddStudent />} />
      </Routes>
    </div>
  );
}
