const axios = require("axios");

// Replace with your Spoonacular API key
const API_KEY = "YOUR_SPOONACULAR_API_KEY";

// Function to search for recipes
async function searchRecipes(query) {
  try {
    const response = await axios.get(
      "https://api.spoonacular.com/recipes/complexSearch",
      {
        params: {
          apiKey: "aa6a4742828f4ac9a4390c421bd22f23",
          query: query, // Search query (e.g., "pasta")
          number: 5, // Number of results to return
        },
      }
    );

    // Return the fetched recipes
    return response.data.results;
  } catch (error) {
    console.error("Error fetching recipes:", error.message);
    return [];
  }
}

// Example usage
(async () => {
  const query = "pasta"; // Search for pasta recipes
  const recipes = await searchRecipes(query);

  if (recipes.length > 0) {
    console.log(`Found ${recipes.length} recipes for "${query}":`);
    recipes.forEach((recipe, index) => {
      console.log(`${index + 1}. ${recipe.title}`);
      console.log(`   Image: ${recipe.image}`);
      console.log(`   ID: ${recipe.id}`);
    });
  } else {
    console.log(`No recipes found for "${query}".`);
  }
})();
