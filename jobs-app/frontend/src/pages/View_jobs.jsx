import { getJobs, deleteJob } from "../api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import bottom arrow icon
import { IoIosArrowDown } from "react-icons/io";
// importing trash icon and edit icon
import { FaTrash, FaEdit } from "react-icons/fa";

export const ViewJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data = await getJobs();
        setJobs(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteJob(id);
      setJobs(jobs.filter((job) => job._id !== id)); // Update the UI after delete
    } catch (err) {
      setError(err); // Handle any errors
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-3 border-b-2 border-red-300 mx-[500px] text-gray-700 text-center">Jobs</h1>
      <IoIosArrowDown className="text-4xl text-gray-500 mx-auto mb-6" />
      {loading && <div className="text-center">Loading...</div>}
      { jobs.length === 0 && <div className="text-center text-2xl mt-40 text-gray-500">No jobs found.</div>}
      {error && <div className="text-center text-red-500">{error.message}</div>}
      {jobs && (
        <ul className="space-y-6">
          {jobs.map((job) => (
            <li
              key={job._id}
              className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
            >
              <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
              <p className="text-gray-700 mb-4">{job.description}</p>
              <div className="flex justify-between items-center">
                <Link
                  to={`/edit-job/${job._id}`}
                  className="text-blue-600 rounded-lg px-5 py-3 bg-blue-200 hover:bg-blue-300 duration-300 hover:text-blue-700 font-medium"
                >
                  <FaEdit />
                </Link>
                <button
                  onClick={() => handleDelete(job._id)}
                  className="bg-red-500 text-white px-5 py-3 rounded-lg hover:bg-red-600"
                >
                  <FaTrash />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ViewJobs;
