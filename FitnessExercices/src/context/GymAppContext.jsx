/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import axios from "axios";

const GymAppContext = createContext();

function GymAppContextProvider({ children }) {
  const [exercises, setExercises] = useState([]);

  // Fetch exercises
  const fetchExercises = async () => {
    const options = {
      method: "GET",
      url: "https://gym-fit.p.rapidapi.com/v1/exercises/search",
      params: {
        offset: "0",
      },
      headers: {
        "x-rapidapi-key": "2d523ddc6cmsh6c0871f466a80c1p1b5c7cjsn93274b49ba8b",
        "x-rapidapi-host": "gym-fit.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setExercises(response.data.results);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const [bodyParts, setBodyParts] = useState([]);

  const fetchBodyParts = async () => {
    const options = {
      method: "GET",
      url: "https://gym-fit.p.rapidapi.com/v1/muscles/search",
      params: { offset: "0" },
      headers: {
        "x-rapidapi-key": "2d523ddc6cmsh6c0871f466a80c1p1b5c7cjsn93274b49ba8b",
        "x-rapidapi-host": "gym-fit.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setBodyParts(response.data.results);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const [filteredExercises, setFilteredExercises] = useState([]);

  // function to filter exercices by body part
  const filterExercisesByBodyPart = (bodyPart) => {
    const filteredExercises = exercises.filter((exercise) => {
      return exercise.bodyPart.includes(bodyPart);
    });

    setFilteredExercises(filteredExercises);
  };

  const filterBySearchTerm = (searchTerm) => {
    const filteredExercises = exercises.filter((exercise) => {
      return exercise.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setFilteredExercises(filteredExercises);
  };

  const [exercise, setExercise] = useState([]);

  const FetchExerciseById = async (id) => {
    const options = {
      method: "GET",
      url: `https://gym-fit.p.rapidapi.com/v1/exercises/${id}`,
      headers: {
        "x-rapidapi-key": "2d523ddc6cmsh6c0871f466a80c1p1b5c7cjsn93274b49ba8b",
        "x-rapidapi-host": "gym-fit.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setExercise(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect to fetch data on mount
  useEffect(() => {
    fetchExercises();
    fetchBodyParts();
  }, []);

  const value = {
    exercises,
    bodyParts,
    filterExercisesByBodyPart,
    filteredExercises,
    filterBySearchTerm,
    FetchExerciseById,
    exercise,
  };

  return (
    <GymAppContext.Provider value={value}>{children}</GymAppContext.Provider>
  );
}

export { GymAppContext, GymAppContextProvider };
