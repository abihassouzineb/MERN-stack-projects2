const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Book = require('./models/Book');
const fetch = require('node-fetch');
const env = require('dotenv').config();

const app = express();

// Connect to MongoDB
const db = "mongodb+srv://books-store:Dn3du4UgOvyruQGz@cluster1.y8zaf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Set up view engine and static files
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: false }));

// Function to fetch books from the Google Books API based on a query
const getBooks = async (query) => {
  const searchQuery = query || 'programming';  // Default search if no query is provided
  const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchQuery)}`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data.items || []; // Return books array, or empty array if no results
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
};

// Route for the homepage
app.get('/', async (req, res) => {
  const searchQuery = req.query.q; // Get search query from URL parameter
  const books = await getBooks(searchQuery);
  res.render('index', { books });
});

// Route for adding a new book
app.get('/add-book', (req, res) => {
  res.render('add-book');
});

// Route for adding a new book (POST)
app.post('/add-book', async (req, res) => {
  const { title, authors, description, imageUrl, moreInfoUrl } = req.body;
  const book = new Book({ title, authors, description, imageUrl, moreInfoUrl, isFavourite: false });
  await book.save();
  res.redirect('/');
});

// Route for favorites
app.get('/favourite', async (req, res) => {
  const books = await Book.find({ isFavourite: true });
  res.render('favorites', { books });
});

// Route for toggling favorite status
app.post('/add-favourite', async (req, res) => {
  const { bookId } = req.body;
  const book = await Book.findById(bookId);

  if (book) {
    book.isFavourite = !book.isFavourite; // Toggle favorite status
    await book.save();
  }

  res.redirect('/'); // Redirect back to the homepage
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
