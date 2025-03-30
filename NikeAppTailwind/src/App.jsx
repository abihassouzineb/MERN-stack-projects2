import "./App.css";
import Boat from "./components/Boat";
import Features from "./components/Features";
import Features2 from "./components/Features2";
import Footer from "./components/Footer";
import GetApp from "./components/GetApp";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

function App() {
  return (
    <main className="bg-gray-100 flex flex-col justify-center min-h-screen pb-10 overflow-hidden">
      <NavBar />
      <Hero />
      <Features />
      <Boat />
      <Features2 />
      <GetApp />
      <Footer />
    </main>
  );
}

export default App;
