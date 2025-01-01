/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { FaBriefcase, FaMapMarkerAlt, FaMoneyBillWave } from "react-icons/fa";
import ApplyButton from "../components/ApplyButton";

export default function ApplyJob() {
  const { jobId } = useParams();
  const [jobData, setJobData] = useState(null);
  const { jobs, AddJobToAppliedJobs } = useContext(AppContext);

  const fetchJobData = async () => {
    const job = jobs.find((job) => job._id === jobId);
    setJobData(job);
    console.log(job);
  };

  useEffect(() => {
    fetchJobData();
  }, [jobId, jobs]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      {jobData ? (
        <div className="w-full max-w-6xl p-6">
          <div className="p-10 bg-white shadow-lg rounded-lg flex flex-col sm:flex-row justify-between items-center border-2 border-blue-500">
            <img
              src={jobData.companyId.image}
              alt={`${jobData.companyId.name} logo`}
              className="bg-white p-4 w-24 rounded-sm"
            />
            <div className="mt-4 sm:mt-0 sm:ml-8 flex-1">
              <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
                <h1 className="text-3xl font-medium text-gray-800 mb-4 sm:mb-0">
                  {jobData.title}
                </h1>
                <button
                  onClick={AddJobToAppliedJobs(jobData._id)}
                  className="bg-blue-500 text-white font-semibold rounded px-5 py-2 hover:bg-blue-600 transition duration-200"
                >
                  Apply Now
                </button>
              </div>

              <ul className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-6">
                <li className="flex items-center gap-2">
                  <FaBriefcase className="text-blue-500" />
                  <p className="text-gray-700">{jobData.level}</p>
                </li>
                <li className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-blue-500" />
                  <p className="text-gray-700">{jobData.location}</p>
                </li>
                <li className="flex items-center gap-2">
                  <FaMoneyBillWave className="text-blue-500" />
                  <p className="text-gray-700">{jobData.salary}</p>
                </li>
              </ul>
              <p className="text-gray-600 mt-4">Posted 2 months ago</p>
            </div>
          </div>

          <section className="mt-10 flex xl:flow-row lg:flex-col gap-10">
            <div className="lg:w-3/5">
              <h2 className="text-2xl font-medium text-gray-800 mt-8">
                Job Description
              </h2>
              <p
                className="text-gray-600 mt-2"
                dangerouslySetInnerHTML={{ __html: jobData.description }}
              ></p>
            </div>

            <div className="lg:w-full">
              <h2 className="text-2xl font-medium border-b-2 border-blue-400 pb-2 text-gray-800 mt-8">
                Other Jobs from {jobData.companyId.name}
              </h2>

              <div className="mt-4 grid grid-cols-2 gap-4">
                {jobs
                  .filter(
                    (job) =>
                      job.companyId._id === jobData.companyId._id &&
                      job._id !== jobData._id
                  )
                  .slice(0, 4)
                  .map((job) => (
                    <div
                      key={job._id}
                      className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl"
                    >
                      <img
                        src={job.companyId.image}
                        alt="Company Logo"
                        className="w-20 mx-auto mb-4"
                      />
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {job.title}
                      </h3>
                      <div className="flex justify-between my-5">
                        <p className="bg-blue-100 border border-blue-300 rounded px-4 py-1.5">
                          {job.location}
                        </p>
                        <p className="bg-red-100 border border-red-300 rounded px-4 py-1.5">
                          {job.level}
                        </p>
                      </div>
                      <p
                        className="text-gray-700 mb-4"
                        dangerouslySetInnerHTML={{
                          __html: job.description.slice(0, 200),
                        }}
                      ></p>

                      <ApplyButton jobId={job._id} />
                    </div>
                  ))}
              </div>
            </div>
          </section>
        </div>
      ) : (
        <p className="text-gray-700">Loading...</p>
      )}
    </div>
  );
}
