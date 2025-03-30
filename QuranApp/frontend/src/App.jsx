import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import GetAyah from "./pages/GetAyah"

import "./App.css";
import Footer from "./components/Footer";
import Quran from "./pages/Quran";
import Hadith from "./pages/Hadith";
import WholeQuran from "./pages/WholeQuran";
import GetTafsir from "./pages/GetTafsir";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quran" element={<Quran />} />
          <Route path="/quran/whole" element={<WholeQuran />} />
          <Route path="/quran/ayah" element={<GetAyah />} />
          <Route path="/quran/tafsir" element={<GetTafsir />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/about" element={<About />} />
          <Route path="/hadith" element={<Hadith />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
