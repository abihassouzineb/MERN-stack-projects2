/* eslint-disable react/prop-types */
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const ApplyButton = ({ jobId }) => {
  const navigate = useNavigate();

  const {user} = useUser();

  const handleClick = () => {
    if (jobId && user) {
      console.log(`Navigating to job with id: ${jobId}`);
      navigate(`/apply-job/${jobId}`);
    } else {
      console.log("User not logged in");
      window.alert("Please login to apply for the job");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white bg-gray-800 rounded-md group"
    >
      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-orange-600 rounded-full group-hover:w-56 group-hover:h-56" />
      <span className="absolute bottom-0 left-0 h-full -ml-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-auto h-full opacity-100 object-stretch"
          viewBox="0 0 487 487"
        >
          <path
            fillOpacity=".1"
            fillRule="nonzero"
            fill="#FFF"
            d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
          />
        </svg>
      </span>
      <span className="relative text-base font-semibold">Apply Now</span>
    </button>
  );
};

export default ApplyButton;
