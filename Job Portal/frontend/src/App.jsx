import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import ApplyJob from "./pages/ApplyJob";
import Footer from "./components/Footer";
import AppliedJobs from "./pages/AppliedJobs";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apply-job/:jobId" element={<ApplyJob />} />
          <Route path="/appliedJobs" element={<AppliedJobs />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<h1>Page Not found</h1>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
