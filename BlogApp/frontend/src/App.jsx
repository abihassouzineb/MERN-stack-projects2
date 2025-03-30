import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import Login from "./pages/Login"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import BlogDetails from "./pages/BlogDetails"
import CustomCursor from "./components/CustomCursor"

function App() {


  return (
    <div className="bg-orange-50">
      <CustomCursor />
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blogs/:blog_id" element={<BlogDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
