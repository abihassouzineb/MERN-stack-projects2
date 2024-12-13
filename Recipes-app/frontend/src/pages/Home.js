import React, { useEffect, useState } from "react";
import { useGetUserId } from "../hooks/useGetUserId";
import axios from "axios";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [, setSavedRecipes] = useState([]);

  const userID = useGetUserId();

  console.log(userID);

  const saveRecipe = async (recipeID) => {
    try {
      const response = await axios.post(
        `http://localhost:3001/recipes/savedRecipes/${userID}/${recipeID}`
      );
      setSavedRecipes(response.data.savedRecipes);
      console.log(response.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/recipes")
      .then((response) => {
        setRecipes(response.data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center border-b-4 pb-2 border-blue-500">
        Recipes
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <div
            key={recipe._id}
            className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
          >
            <img
              src={recipe.imageUrl || "https://via.placeholder.com/150"}
              alt={recipe.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{recipe.name}</h2>
            <p className="text-gray-600 mb-2">{recipe.description || "No description"}</p>
            <div className="w-full">
              <p className="text-gray-600 font-semibold">Ingredients:</p>
              <ul className="list-disc list-inside">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-gray-600">
                    {ingredient}
                  </li>
                ))}
                {recipe.ingredients.length === 0 && (
                  <li className="text-gray-600">No ingredients</li>
                )}
              </ul>
            </div>
            <button
              onClick={() => saveRecipe(recipe._id)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4"
            >
              Save
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
