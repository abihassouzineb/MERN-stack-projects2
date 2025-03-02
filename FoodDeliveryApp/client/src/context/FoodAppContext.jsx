/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import axios from "axios";

const FoodAppContext = createContext();

const FoodAppContextProvider = ({ children }) => {
  // const [sideBarOpen, setSideBarOpen] = useState(false);

  const [recipes, setRecipes] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/recipes");
      setRecipes(response.data.recipes);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchRestaurants = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/restaurants");
      setRestaurants(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  // const toggleSideBar = () => {
  //     setSideBarOpen(!sideBarOpen);
  // }

  const value = {
    // sideBarOpen,
    // toggleSideBar,
    recipes,
    restaurants,
    fetchRestaurants,
  };

  return (
    <FoodAppContext.Provider value={value}>{children}</FoodAppContext.Provider>
  );
};

export { FoodAppContext, FoodAppContextProvider };
