import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import SideBar from "./components/SideBar.jsx";
import VideoDetails from "./pages/VideoDetails.jsx";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos/:videoId" element={<VideoDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
