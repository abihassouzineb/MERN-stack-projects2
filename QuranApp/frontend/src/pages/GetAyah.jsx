import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaHeart } from "react-icons/fa";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

export default function GetAyah() {
  const [surahs, setSurahs] = useState([]);
  const [selectedSurah, setSelectedSurah] = useState("");
  const [language, setLanguage] = useState("arabic");
  const [ayah, setAyah] = useState(null);
  const [ayahNumber, setAyahNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [maxAyahs, setMaxAyahs] = useState(0);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const showSnackbar = (severity, message) => {
    setSnackbarSeverity(severity);
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const [favoriteAyahs, setFavoriteAyahs] = useState(() => {
    const storedFavorites = localStorage.getItem("favoriteAyahs");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  const addToFavorites = () => {
    if (!ayah) return;

    // Check if already favorited
    const isAlreadyFavorited = favoriteAyahs.some(
      (fav) => fav.surahNumber === ayah.surahNumber && fav.text === ayah.text
    );

    if (isAlreadyFavorited) {
      showSnackbar("info", "This Ayah is already in your favorites");
      return;
    }

    const updatedFavorites = [...favoriteAyahs, ayah];
    setFavoriteAyahs(updatedFavorites);
    localStorage.setItem("favoriteAyahs", JSON.stringify(updatedFavorites));
    showSnackbar("success", "Added to favorites");
  };

  // Fetch all Surahs
  useEffect(() => {
    const gettingSurahs = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:3000/surahs");
        const mappedSurahs = response.data.data.map((surah) => ({
          number: surah.number,
          name: surah.englishName,
          arabicName: surah.name,
          revelationType: surah.revelationType,
          numberOfAyahs: surah.numberOfAyahs,
        }));
        setSurahs(mappedSurahs);
      } catch (error) {
        console.error("Error fetching Surahs:", error);
        setError("Failed to load Surahs. Please try again later.");
        showSnackbar("error", "Failed to load Surahs");
      } finally {
        setLoading(false);
      }
    };

    gettingSurahs();
  }, []);

  // Update max ayahs when surah changes
  useEffect(() => {
    if (selectedSurah) {
      const selected = surahs.find((s) => s.number === parseInt(selectedSurah));
      if (selected) {
        setMaxAyahs(selected.numberOfAyahs);
        setAyahNumber(""); // Reset ayah number when surah changes
      }
    }
  }, [selectedSurah, surahs]);

  const gettingSelectedAyah = async () => {
    if (!selectedSurah) {
      setError("Please select a Surah");
      return;
    }
    if (!ayahNumber) {
      setError("Please enter an Ayah number");
      return;
    }
    if (parseInt(ayahNumber) > maxAyahs) {
      setError(`This Surah only has ${maxAyahs} Ayahs`);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `http://localhost:3000/quran2/${selectedSurah}:${ayahNumber}`
      );

      setAyah({
        text: response.data.data.text,
        surahName: response.data.data.surah.englishName,
        surahNumber: response.data.data.surah.number,
        revelationType: response.data.data.surah.revelationType,
        audio: response.data.data.audio,
        ayahNumber: ayahNumber,
      });
    } catch (error) {
      console.error("Error fetching Ayah:", error);
      setError("Failed to load Ayah. Please check your inputs.");
      showSnackbar("error", "Failed to load Ayah");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col justify-center items-center py-12 px-4 sm:px-20">
      <h1 className="text-3xl sm:text-4xl border-b-4 border-green-500 pb-3 px-6 text-center">
        Get a Specific Ayah from the Quran
      </h1>

      {/* Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          gettingSelectedAyah();
        }}
        className="flex flex-col justify-center items-center gap-y-6 mt-10 w-full max-w-4xl"
      >
        <div className="flex flex-col sm:flex-row justify-between gap-6 w-full">
          {/* Surah Selection */}
          <div className="flex flex-col gap-y-2 w-full">
            <label className="text-xl sm:text-2xl font-semibold border-b-2 border-x-2 px-3 border-green-500 pb-1">
              Choose a Surah
            </label>
            <select
              className="text-green-500 border-2 border-green-500 py-2 px-4 rounded-lg w-full"
              value={selectedSurah}
              onChange={(e) => setSelectedSurah(e.target.value)}
              required
              disabled={loading}
            >
              <option value="">Select Surah</option>
              {surahs.map((surah) => (
                <option key={surah.number} value={surah.number}>
                  {surah.number}. {surah.name} ({surah.arabicName}) -{" "}
                  {surah.numberOfAyahs} Ayahs
                </option>
              ))}
            </select>
          </div>

          {/* Language Selection */}
          <div className="flex flex-col gap-y-2 w-full">
            <label className="text-xl sm:text-2xl font-semibold border-b-2 border-x-2 px-3 border-green-500 pb-1">
              Choose a Language
            </label>
            <select
              className="text-green-500 border-2 border-green-500 py-2 px-4 rounded-lg w-full"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              disabled={loading}
            >
              <option value="arabic">Arabic</option>
              <option value="english">English</option>
            </select>
          </div>
        </div>

        {/* Ayah Number Input */}
        <div className="flex flex-col gap-y-2 w-full">
          <label className="text-xl sm:text-2xl font-semibold border-b-2 border-x-2 px-3 border-green-500 pb-1">
            Enter Ayah Number {selectedSurah && `(1-${maxAyahs})`}
          </label>
          <input
            type="number"
            min="1"
            max={maxAyahs}
            className="text-green-500 border-2 border-green-500 py-2 px-4 rounded-lg w-full"
            placeholder={`Enter Ayah number (1-${maxAyahs})`}
            value={ayahNumber}
            onChange={(e) => {
              const value = parseInt(e.target.value);
              if (value > maxAyahs) {
                setError(`This Surah only has ${maxAyahs} Ayahs`);
              } else {
                setError(null);
              }
              setAyahNumber(e.target.value);
            }}
            disabled={!selectedSurah || loading}
          />
        </div>

        {/* Error Message */}
        {error && (
          <div className="text-red-500 text-lg w-full text-center">{error}</div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading || !selectedSurah || !ayahNumber}
          className={`bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 duration-300 text-lg ${
            loading || !selectedSurah || !ayahNumber
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
        >
          {loading ? "Loading..." : "Get Ayah"}
        </button>
      </form>

      {/* Ayah Details Display */}
      {ayah && (
        <div className="flex flex-col justify-center items-center gap-y-6 mt-10 w-full max-w-4xl border-2 border-green-500 rounded-xl p-6 bg-white shadow-lg">
          <div className="w-full text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-green-700">
              Surah {ayah.surahName} ({ayah.surahNumber}:{ayah.ayahNumber})
            </h2>
            <p className="text-sm text-gray-500 mt-1">{ayah.revelationType}</p>
          </div>

          <div className="w-full text-center">
            <p className="text-2xl sm:text-3xl text-green-600 py-4 px-6 bg-gray-50 rounded-lg leading-relaxed">
              {ayah.text}
            </p>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <button
              onClick={addToFavorites}
              className="flex items-center gap-2 bg-green-100 text-green-700 py-2 px-4 rounded-lg hover:bg-green-200 transition-colors"
              aria-label="Add to favorites"
            >
              <FaHeart className="text-xl" />
              <span>Favorite</span>
            </button>

            {ayah.audio && (
              <audio controls className="ml-4">
                <source src={ayah.audio} type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>
            )}
          </div>
        </div>
      )}

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
