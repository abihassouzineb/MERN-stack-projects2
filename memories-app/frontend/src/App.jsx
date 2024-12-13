import './App.css';
import { Routes, Route } from 'react-router-dom';
import View_memories from './pages/View_memo';
import Add_memo from './pages/Add_memo';
import Edit_memo from './pages/Edit_memo';

// importing the memory icon
import { FaMemory } from 'react-icons/fa';

function App() {
  return (
    <div>
      <nav className="flex mt-4 rounded-xl justify-center items-center bg-gradient-to-r from-blue-600 text-3xl mx-10  to-violet-600 text-white flex-row p-6 space-x-4">
        <p>Memories</p>
        <FaMemory />
      </nav>

      <Routes>
        <Route path="/all-memo" element={<View_memories />} />
        <Route path="/add-memo" element={<Add_memo />} />
        <Route path="/edit-memory/:id" element={<Edit_memo />} />
        
        {/* New route to show both components side by side */}
        <Route
          path="/view-and-add"
          element={
            <div className="flex flex-row h-screen justify-between w-full">
              {/* Left side: View memories */}
              <div className="w-full flex flex-col justify-center items-center text-center p-4">
                <View_memories />
              </div>

              {/* Right side: Add memo */}
              <div className="w-[40%] border-l border-red-500 p-4">
                <Add_memo />
              </div>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
