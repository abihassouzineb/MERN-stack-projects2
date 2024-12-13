import { updateJob } from "../api";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const EditJob = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const data = await getJob(id);
        setTitle(data.title);
        setDescription(data.description);
      } catch (err) {
        console.log(err);
      }
    };
    fetchJob();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const job = { title, description };
    await updateJob(id, job);
    navigate("/get-jobs");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Edit Job</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div className="flex items-center">
          <label htmlFor="title" className="w-1/3 text-gray-700">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex-1 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="description" className="w-1/3 text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="flex-1 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1 h-24"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:offset-2 focus:ring-blue-500"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditJob;