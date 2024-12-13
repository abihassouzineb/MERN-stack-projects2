import express from "express";
import mongoose from "mongoose";
import RecipesModel from "../models/RecipeModel.js";
import UserModel from "../models/UserModel.js";

const router = express.Router();

// Get all recipes
router.get("/", async (req, res) => {
  try {
    const result = await RecipesModel.find({});
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: "Internal server error", error: err });
  }
});

// create a recipe
router.post("/", async (req, res) => {
  try {
    const recipe = await RecipesModel.create(req.body);
    res.status(201).json({ message: "Recipe created successfully", recipe });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", error: err });
  }
});

// Save a Recipe
router.post("/savedRecipes/:userID/:recipeID", async (req, res) => {
  const { userID, recipeID } = req.params;

  console.log(userID, recipeID);

  if (!recipeID || !userID) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const recipe = await RecipesModel.findById(recipeID);
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    const user = await UserModel.findById(userID);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.savedRecipes.includes(recipeID)) {
      return res.status(400).json({ message: "Recipe already saved" });
    }

    user.savedRecipes.push(recipeID);
    await user.save();
    res.status(200).json({ savedRecipes: user.savedRecipes });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", error: err });
  }
});

// Get saved recipes
router.get("/savedRecipes/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    // console.log(user.savedRecipes);
    // explanation : we are using $in operator to find all the recipes that are saved by the user
    const savedRecipes = await RecipesModel.find({
      _id: { $in: user.savedRecipes },
    });
    res.status(200).json({ savedRecipes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export { router as recipesRoutes };
