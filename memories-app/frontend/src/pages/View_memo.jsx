import { getMemories, deleteMemory } from "../api";
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { FaTrash, FaEdit } from "react-icons/fa";

function View_memories() {
  const [memories, setMemories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMemories = async () => {
      try {
        const data = await getMemories();
        setMemories(data.data);
      } catch (error) {
        setError(error.message || "Failed to fetch memories");
      } finally {
        setLoading(false);
      }
    };
    fetchMemories();
  }, []);

  const handleDelete = async (_id) => {
    try {
      await deleteMemory(_id);
      setMemories(memories.filter((memory) => memory._id !== _id));
      navigate("/view-and-add");
    } catch (error) {
      setError(error.message || "Failed to delete memory");
    }
  };

  return (
    <div className="App flex flex-col h-screen items-center justify-center">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8 border-b-2 border-red-400 pb-2">
        View Memories
      </h1>

      {/* Display loading message */}
      {loading && <p className="text-center text-2xl font-bold text-gray-500">Loading...</p>}

      {/* Display error message */}
      {error && <p className="text-center text-2xl font-bold text-red-500">{error}</p>}

      {/* Display memories in a responsive grid */}
      {memories.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4 w-full max-w-6xl">
          {memories.map((memory) => (
            <div
              key={memory._id}
              className="bg-white shadow-lg border border-gray-300 hover:shadow-2xl transition-transform transform duration-300 hover:scale-105 rounded-lg p-6 space-y-4"
            >
              {/* Memory title and description */}
              <div className="flex flex-col space-y-2">
                <h2 className="text-lg font-bold text-gray-800">{memory.title}</h2>
                <p className="text-gray-600">{memory.description}</p>
              </div>

              {/* Action buttons */}
              <div className="flex justify-end space-x-4">
                <Link
                  to={`/edit-memory/${memory._id}`}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                >
                  <FaEdit />
                </Link>
                <button
                  onClick={() => handleDelete(memory._id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default View_memories;
