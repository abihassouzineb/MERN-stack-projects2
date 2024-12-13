const express = require('express');
const router = express.Router();
const Ticket = require('../models/ticket-model');

router.get('/', async (req, res) => {
  const tickets = await Ticket.find();
  res.render('View_tickets', { tickets });
});

router.post('/create', async (req, res) => {
  const { title, description, category, priority, progress, status } = req.body;
  const newTicket = new Ticket({ title, description, category, priority, progress, status });
  await newTicket.save();
  res.redirect('/');
});

router.get('/edit/:id', async (req, res) => {
  const ticket = await Ticket.findById(req.params.id);
  res.render('Edit_ticket', { ticket });
});

router.post('/edit/:id', async (req, res) => {
  const { title, description, category, priority, progress, status } = req.body;
  await Ticket.findByIdAndUpdate(req.params.id, { title, description, category, priority, progress, status });
  setTimeout(() => {
    res.redirect('/');
  }, 1000);
});

router.delete('/delete/:id', async (req, res) => {
  await Ticket.findByIdAndDelete(req.params.id);
  res.redirect('/');
});

module.exports = router;