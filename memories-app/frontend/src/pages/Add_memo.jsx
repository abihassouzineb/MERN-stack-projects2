import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addMemory } from "../api"; // Ensure this API function is defined to handle adding memories

export default function Add_memo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!title || !description) {
      setError("Title and description are required.");
      return;
    }

    try {
      await addMemory({ title, description });
      window.location.reload();
    } catch (err) {
      setError(err.message || "Failed to add memory");
    }
  };

  return (
    <div className="App flex flex-col h-screen items-center justify-center">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8 border-b-2 border-blue-400 pb-2">
        Add Memory
      </h1>
      
      {error && <p className="text-red-500 text-center">{error}</p>}
      
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <div>
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        
        <div>
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="4"
          />
        </div>
        
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Add Memory
        </button>
      </form>
    </div>
  );
}
