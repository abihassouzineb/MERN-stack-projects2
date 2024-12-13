// routes/toDoRoutes.js
const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Route to get all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.render('index', { tasks });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route to add a new task
router.post('/add', async (req, res) => {
  const { description } = req.body;
  try {
    const task = new Task({ description });
    await task.save();
    res.redirect('/');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route to delete a task
router.post('/delete/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route to mark task as complete
router.post('/complete/:id', async (req, res) => {
  try {
    await Task.findByIdAndUpdate(req.params.id, { completed: true });
    res.redirect('/');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
