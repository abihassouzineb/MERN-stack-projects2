import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// importing pages
import Home from "./pages/Home";
import AddJob from "./pages/Add_job";
import ViewJobs from "./pages/View_jobs";
import EditJob from "./pages/Edit_job";

// importing react router dom
import { Routes, Route, Link } from "react-router-dom";
import './App.css'

function App() {

  return (
    <div className="flex flex-col w-full h-screen items-center  bg-gray-100">
      
      <nav className="flex w-full justify-between items-center bg-gradient-to-r from-blue-600 to-violet-600 text-white flex-row p-6 space-x-4">
        <Link to="/add-job">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-red-400">Add Job</button>
        </Link>

        <Link to="/" >
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-red-400">Home</button>
        </Link>

        <Link to="/get-jobs">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-red-400">View Jobs</button>
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-job" element={<AddJob />} />
        <Route path="/get-jobs" element={<ViewJobs />} />
        <Route path="/edit-job/:id" element={<EditJob />} />
      </Routes>

    </div>
  )
}

export default App
