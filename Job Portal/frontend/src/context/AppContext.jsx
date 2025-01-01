/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import { jobsData } from "../assets/Job-Portal-Assets/assets/assets";

export const AppContext = createContext();

const AppProvider = ({children}) => {
  const [searchFilter, setSearchFilter] = useState({
    title: "",
  });

  const [isSearched, setIsSearched] = useState(false);
  const [jobs, setJobs] = useState([]);
  
  const fetchJobs = async () => {
    setJobs(jobsData);
    console.log(jobsData);
  };

  const AddJobToAppliedJobs = (jobId) => {
    const job = jobs.find((job) => job._id === jobId);
    // store the job in the local storage
    let appliedJobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];
    
    // check if the job is already applied
    if (appliedJobs.find((job) => job._id === jobId)) {
      console.log("Job already applied");
      return;
    } else {
      // add the job to the applied jobs
      appliedJobs.push(job);
      localStorage.setItem("appliedJobs", JSON.stringify(appliedJobs));
      console.log("Job added to applied jobs");
      }
    };

  const RemoveFromLocalStorage = (jobId) => {
    return () => {
      let appliedJobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];
      appliedJobs = appliedJobs.filter((job) => job._id !== jobId);
      localStorage.setItem("appliedJobs", JSON.stringify(appliedJobs));
      console.log("Job removed from applied jobs");
      window.location.reload();
    };
  }

  useEffect(() => {
    fetchJobs();
  }, []);
  
  const value = {
    searchFilter,
    setSearchFilter,
    isSearched,
    setIsSearched,
    jobs,
    AddJobToAppliedJobs,
    RemoveFromLocalStorage,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;