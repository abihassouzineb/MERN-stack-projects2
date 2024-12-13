import { updateMemory, getMemories } from "../api";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Edit_memo() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [memory, setMemory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMemory = async () => {
      try {
        const data = await getMemories(id);
        setMemory(data);
      } catch (error) {
        setError("Failed to fetch memory data");
      } finally {
        setLoading(false);
      }
    };
    fetchMemory();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    try {
      await updateMemory(id, { title, description });
      navigate("/view-and-add");
    } catch (error) {
      setError("Failed to update memory");
    }
  };

  if (loading) {
    return <div className="text-center text-2xl font-bold text-gray-500">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-2xl font-bold text-red-500">{error}</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-blue-400 pb-2">Edit Memory</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md space-y-6"
      >
        <div className="flex flex-col">
          <label htmlFor="title" className="text-lg font-bold text-gray-700">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={memory.title}
            className="border border-gray-300 rounded-lg p-2 mt-2 focus:ring focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description" className="text-lg font-bold text-gray-700">Description</label>
          <textarea
            id="description"
            name="description"
            defaultValue={memory.description}
            className="border border-gray-300 rounded-lg p-2 mt-2 h-32 resize-none focus:ring focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Save
        </button>
      </form>
    </div>
  );
}
