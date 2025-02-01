import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ExerciseDetails from "./pages/ExerciseDetails";

function App() {
  return (
    <Box width={400} sx={{ width: { xl: "1488px" } }}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercises/:id" element={<ExerciseDetails />} />
        </Routes>
        <Footer />
      </Router>
    </Box>
  );
}

export default App;
