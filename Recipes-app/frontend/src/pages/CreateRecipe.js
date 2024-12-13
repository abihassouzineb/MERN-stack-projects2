import axios from "axios";
import React from "react";
import { useGetUserId } from "../hooks/useGetUserId";

/**
 * Component that renders a form to create a new recipe.
 *
 * The form contains fields for the recipe name, ingredients, instructions, image URL, cooking time, and user owner.
 *
 * When the form is submitted, the component sends a POST request to the server to create a new recipe.
 *
 * @returns {JSX.Element} The form component.
 */
const CreateRecipe = () => {
  const userID = useGetUserId();
  const [recipe, setRecipe] = React.useState({
    name: "",
    ingredients: [],
    instructions: "",
    imageUrl: "",
    cookingTime: 0,
    userOwner: userID, // Added userOwner field
  });

  const handleChange = (event) => {
    setRecipe({
      ...recipe,
      [event.target.name]: event.target.value,
    });
  };

  const handleIngredientChange = (event, index) => {
    const ingredients = [...recipe.ingredients];
    ingredients[index] = event.target.value;
    setRecipe({
      ...recipe,
      ingredients,
    });
  };

  const addIngredient = (event) => {
    event.preventDefault();
    setRecipe({
      ...recipe,
      ingredients: [...recipe.ingredients, ""],
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3001/recipes", { ...recipe });
      alert("Recipe created successfully");
      console.log(recipe);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-5 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-5 text-center">Create Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Recipe Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Recipe Name"
            value={recipe.name}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Ingredients
          </label>
          {recipe.ingredients.map((ingredient, index) => (
            <input
              key={index}
              type="text"
              placeholder="Ingredient"
              value={ingredient}
              onChange={(event) => handleIngredientChange(event, index)}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md mb-2"
            />
          ))}
          <button
            onClick={addIngredient}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Add Ingredient
          </button>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Instructions
          </label>
          <textarea
            name="instructions"
            placeholder="Instructions"
            value={recipe.instructions}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            value={recipe.imageUrl}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Cooking Time (minutes)
          </label>
          <input
            type="number"
            name="cookingTime"
            placeholder="Cooking Time (minutes)"
            value={recipe.cookingTime}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 w-full"
        >
          Create Recipe
        </button>
      </form>
    </div>
  );
};

export default CreateRecipe;
