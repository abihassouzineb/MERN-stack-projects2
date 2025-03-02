const express = require("express");
const router = express.Router();
const axios = require("axios");
const cors = require("cors");

router.use(cors());

router.get("/recipes", async (req, res) => {
    try {
        const response = await axios.get(
          "https://api.spoonacular.com/recipes/random?number=6",
          {
            params: {
              apiKey: "aa6a4742828f4ac9a4390c421bd22f23",
            },
          }
        );
        res.json(response.data);
    } catch (error) {
        console.log(error);
    }
});

router.get("/restaurants", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.spoonacular.com/food/restaurants/search?cuisine=italian&lat=37.7786357&lng=-122.3918135&budget=100",
      {
        params: {
          apiKey: "aa6a4742828f4ac9a4390c421bd22f23",
        },
      }
    );
    res.json(response.data.restaurants.slice(0, 4));
  } catch (error) {
    res.json(error);
  }
})

module.exports = router;

// https://api.spoonacular.com/recipes/random?number=6