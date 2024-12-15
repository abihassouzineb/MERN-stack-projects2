import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import Auth from "./pages/Auth";
import NavBar from "./components/NavBar";
import { FinancialRecordProvider } from "./context/FinancialRecordForm ";

function App() {
  return (
    <>
      <FinancialRecordProvider>
        <NavBar />
        <Router>
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </Router>
      </FinancialRecordProvider>
    </>
  );
}

export default App;
