import { useContext, useState } from "react";
import { assets, jobsData } from "../assets/Job-Portal-Assets/assets/assets";
import ApplyButton from "./ApplyButton";
import { AppContext } from "../context/AppContext";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";

export default function Jobs() {
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5;
  const { isSearched, searchFilter, setIsSearched } = useContext(AppContext);

  const filteredJobs = isSearched
    ? jobsData.filter((job) =>
        job.title.toLowerCase().includes(searchFilter.title.toLowerCase())
      )
    : jobsData;

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const currentJobs = filteredJobs.slice(
    (currentPage - 1) * jobsPerPage,
    currentPage * jobsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div className="px-6 py-10">
        <div className="text-center flex justify-between items-center mx-6 mb-10">
          <p>Current Search</p>
          {isSearched && (
            <p className="bg-blue-100 border border-blue-300 rounded px-4 py-1.5 inline-block">
              {searchFilter.title}
              <FaTimes
                onClick={() => setIsSearched(false)}
                className="inline mb-1 text-red-500 ml-2 cursor-pointer"
              />
            </p>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentJobs.map((job) => (
            <div key={job.id} className="bg-white p-6 rounded-lg shadow-md">
              <img src={assets.microsoft_logo} alt="img" className="size-24" />
              <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
              <div className="flex justify-between my-5 px-6 w-full">
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
        <div className="flex justify-center items-center mt-10 space-x-4">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <FaArrowLeft />
          </button>
          <span className="text-lg font-bold">
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </>
  );
}
