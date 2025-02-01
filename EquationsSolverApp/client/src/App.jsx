import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Equations from "./pages/Equations.jsx";
import NavBar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import Graphing from "./pages/Graphing.jsx";
import BMI from "./pages/Calculators/BMI.jsx";
import MortgageCalculator from "./pages/Calculators/Mortgage.jsx";
import RetirementCalculator from "./pages/Calculators/Retirement.jsx";

function App() {
  return (
    <div className="App relative overflow-x-hidden">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/equations" element={<Equations />} />
          <Route path="/graphing" element={<Graphing />} />
          <Route path="/calculators/bmi" element={<BMI />} />
          <Route
            path="/calculators/mortgage"
            element={<MortgageCalculator />}
          />
          <Route
            path="/calculators/retirement"
            element={<RetirementCalculator />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
