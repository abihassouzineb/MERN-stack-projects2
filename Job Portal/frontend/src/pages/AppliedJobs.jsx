import { motion } from "framer-motion";
import { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { AppContext } from "../context/AppContext";

export default function AppliedJobs() {
  const { RemoveFromLocalStorage } = useContext(AppContext);

  // fetching jobs from the local storage
  const appliedJobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];

  return (
    <div className="min-h-screen overflow-auto bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Applied Jobs</h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* Applied Jobs */}
        {appliedJobs.length>0 ? appliedJobs.map((job) => (
          <motion.div
            key={job._id}
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            <img src={job.companyId.image} className="mb-2" alt="" />
            <h1 className="text-2xl font-semibold mb-2">{job.title}</h1>
            <p className="text-gray-700 mb-1">{job.company}</p>
            <p className="text-gray-500 mb-1">{job.location}</p>
            <p className="text-gray-700">${job.salary}</p>
            <FaTimes onClick={RemoveFromLocalStorage(job._id)} />
          </motion.div>
        )) : (
          <p className="text-center text-2xl">No Jobs Applied Yet</p>
        )}
      </div>
    </div>
  );
}
