const express = require('express');
const router = express.Router();
const Memory = require('../models/memory');
const mongoose = require('mongoose');

router.get("/", async (req, res) => {
      try {
            const memories = await Memory.find();
            if (memories.length === 0) {
                  return res.status(404).json({ message: "No memories found" });
            }
            res.status(200).json({ success: true, data: memories, number_of_memories: memories.length });
      } catch (err) {
            res.status(500).json({ message: err.message });
      }
});

router.post("/", async (req, res) => {
      try {
            const memory = req.body;
            const newMemory = new Memory(memory);
            await newMemory.save();
            res.status(201).json({ success: true, data: newMemory });
      } catch (error) {
            res.send({ message: error.message })
      }
})

// Update memory
router.put('/:id', async (req, res) => {
  try {
    const { title, description } = req.body; // Image will be in Base64
    const memory = await Memory.findByIdAndUpdate(
      req.params.id,
      { title, description, image }, // Save the Base64 string
      { new: true }
    );

    if (!memory) {
      return res.status(404).json({ message: "Memory not found" });
    }

    res.json(memory);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error" });
  }
});

router.delete("/:id", async (req, res) => {
      try {
            const { id } = req.params;
            const deleted_memory = await Memory.findByIdAndDelete(id);
            if (!deleted_memory) {
                  return res.status(404).json({ message: "Memory not found" });
            }
            res.status(200).json({ success: true, data: deleted_memory });
      } catch (error) {
            res.status(404).json({ message: error.message })
      }
})

module.exports = router