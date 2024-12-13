import React, { useEffect, useState } from "react";
import { useGetUserId } from "../hooks/useGetUserId";
import axios from "axios";

const SavedRecipes = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [error, setError] = useState(null);

  const userId = useGetUserId();

  useEffect(() => {
    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recipes/savedRecipes/${userId}`
        );
        console.log(response.data.savedRecipes);
        setSavedRecipes(response.data.savedRecipes);
      } catch (error) {
        console.error(error.response.data);
        setError(error.response.data);
      }
    };

    fetchSavedRecipes();
  }, [userId]);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Saved Recipes</h1>
      {error && <p className="text-red-500 text-center mb-4">{error.message}</p>}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {savedRecipes.map((recipe) => (
          <li key={recipe._id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={recipe.imageUrl || "https://via.placeholder.com/150"}
              alt={recipe.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{recipe.name}</h2>
              <p className="text-gray-600 mb-2">{recipe.instructions || "No instructions"}</p>
              <p className="text-gray-500">{recipe.cookingTime || "N/A"} minutes</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedRecipes;
