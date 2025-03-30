import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaHeart, FaBook, FaLanguage, FaSearch } from "react-icons/fa";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

export default function Hadith() {
  const [selectedBook, setSelectedBook] = useState("");
  const [hadithNumber, setHadithNumber] = useState("");
  const [language, setLanguage] = useState("ara");
  const [HadithBooks, setHadithBooks] = useState([]);
  const [hadith, setHadith] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const showSnackbar = (severity, message) => {
    setSnackbarSeverity(severity);
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") return;
    setSnackbarOpen(false);
  };

  // Load favorite hadiths from localStorage
  const [favoriteHadiths, setFavoriteHadiths] = useState(() => {
    const storedFavorites = localStorage.getItem("favoriteHadiths");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  const addToFavorites = (hadithToAdd) => {
    // Check if hadith is already in favorites
    const isAlreadyFavorite = favoriteHadiths.some(
      (fav) =>
        fav.book === hadithToAdd.book &&
        fav.hadith === hadithToAdd.hadith &&
        fav.number === hadithToAdd.number
    );

    if (isAlreadyFavorite) {
      showSnackbar("warning", "This hadith is already in your favorites");
      return;
    }

    const updatedFavorites = [...favoriteHadiths, hadithToAdd];
    setFavoriteHadiths(updatedFavorites);
    localStorage.setItem("favoriteHadiths", JSON.stringify(updatedFavorites));
    showSnackbar("success", "Added to favorites");
  };

  useEffect(() => {
    const fetchHadithBooks = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:3000/hadith/books");
        setHadithBooks(response.data.books);
        setError("");
      } catch {
        setError("Failed to fetch Hadith books. Please try again later.");
        showSnackbar("error", "Failed to load Hadith books");
      } finally {
        setLoading(false);
      }
    };
    fetchHadithBooks();
  }, []);

  const getHadith = async () => {
    if (!selectedBook || !hadithNumber) {
      setError("Please select a book and enter a Hadith number.");
      return;
    }
    try {
      setLoading(true);
      setError("");
      const response = await axios.get(
        `http://localhost:3000/hadith/${language}-${selectedBook}/${hadithNumber}`
      );
      // Add the hadith number to the response data
      setHadith({
        ...response.data,
        number: hadithNumber, // Store the hadith number for reference
      });
    } catch {
      setError(
        "Failed to fetch Hadith. Please check your inputs and try again."
      );
      showSnackbar("error", "Failed to fetch Hadith");
      setHadith(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col justify-center items-center py-12 px-4 sm:px-8 lg:px-20 min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-center border-b-4 border-green-500 pb-3 px-6 mb-12">
          <FaBook className="inline mr-3 text-green-500" />
          Hadith Explorer
        </h1>

        {loading && (
          <div className="text-center py-4 text-green-400">Loading...</div>
        )}

        {error && (
          <div className="mb-6 p-3 bg-red-500/20 border border-red-500 rounded-lg text-red-200 text-center">
            {error}
          </div>
        )}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            getHadith();
          }}
          className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-700 shadow-lg mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Book Selection */}
            <div className="flex flex-col gap-y-2">
              <label className="text-lg font-semibold flex items-center gap-2 text-green-400">
                <FaBook />
                Select Book
              </label>
              <select
                className="bg-gray-700 border border-gray-600 text-white rounded-lg py-2 px-4 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                required
                onChange={(e) => setSelectedBook(e.target.value)}
                value={selectedBook}
                disabled={loading}
              >
                <option value="">Choose Hadith Book</option>
                {HadithBooks.map((book) => (
                  <option key={book} value={book}>
                    {book}
                  </option>
                ))}
              </select>
            </div>

            {/* Language Selection */}
            <div className="flex flex-col gap-y-2">
              <label className="text-lg font-semibold flex items-center gap-2 text-green-400">
                <FaLanguage />
                Language
              </label>
              <select
                className="bg-gray-700 border border-gray-600 text-white rounded-lg py-2 px-4 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                required
                onChange={(e) => setLanguage(e.target.value)}
                value={language}
                disabled={loading}
              >
                <option value="ara">Arabic</option>
                <option value="eng">English</option>
                <option value="urd">Urdu</option>
                <option value="ben">Bengali</option>
                <option value="rus">Russian</option>
                <option value="ind">Indonesian</option>
                <option value="tur">Turkish</option>
              </select>
            </div>

            {/* Hadith Number Input */}
            <div className="flex flex-col gap-y-2">
              <label className="text-lg font-semibold flex items-center gap-2 text-green-400">
                <FaSearch />
                Hadith Number
              </label>
              <input
                type="number"
                className="bg-gray-700 border border-gray-600 text-white rounded-lg py-2 px-4 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                required
                onChange={(e) => setHadithNumber(e.target.value)}
                value={hadithNumber}
                disabled={loading}
                min="1"
              />
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button
              type="submit"
              disabled={loading || !selectedBook || !hadithNumber}
              className={`flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 ${
                loading || !selectedBook || !hadithNumber
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              <FaSearch />
              {loading ? "Loading..." : "Search Hadith"}
            </button>
          </div>
        </form>

        {/* Hadith Display */}
        {hadith && (
          <div className="bg-gray-800 bg-opacity-70 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-700 shadow-lg">
            <div className="mb-6 border-b border-green-500 pb-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-green-400">
                {hadith.book} (Hadith #{hadith.number})
              </h2>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-6">{hadith.hadith}</p>

              <div className="flex justify-end">
                <button
                  onClick={() => addToFavorites(hadith)}
                  className="flex items-center gap-2 bg-green-600/20 hover:bg-green-600/30 text-green-400 py-2 px-4 rounded-lg border border-green-500 transition-colors"
                  aria-label="Add to favorites"
                >
                  <FaHeart />
                  <span>Save to Favorites</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </section>
  );
}
