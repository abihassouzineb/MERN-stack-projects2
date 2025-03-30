const express = require("express");
const fs = require("fs");
const cors =require('cors')
const app = express();

app.use(express.json());
app.use(cors())

const PORT = 3000;

// Load real estate data
const loadProperties = () => {
  const data = fs.readFileSync("real_estate.json");
  return JSON.parse(data);
};

// Get all properties
app.get("/properties", (req, res) => {
  const properties = loadProperties();
  res.json(properties);
});

// Get property by ID
app.get("/properties/:id", (req, res) => {
  const properties = loadProperties();
  const property = properties.find((p) => p.id === parseInt(req.params.id));
  if (!property) {
    return res.status(404).json({ message: "Property not found" });
  }
  res.json(property);
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
