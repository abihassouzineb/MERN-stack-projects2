import React, { useEffect, useState } from "react";
import { FaHeart, FaHeartBroken } from "react-icons/fa";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

export default function Favorites() {
  const [hadiths, setHadiths] = useState([]);
  const [ayahs, setAyahs] = useState([]);
  const [loading, setLoading] = useState(true);
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

  const getFavorites = async () => {
    try {
      setLoading(true);

      // Get Hadiths
      const hadithsData = localStorage.getItem("favoriteHadiths");
      if (hadithsData) {
        setHadiths(JSON.parse(hadithsData));
      }

      // Get Ayahs
      const ayahsData = localStorage.getItem("favoriteAyahs");
      if (ayahsData) {
        setAyahs(JSON.parse(ayahsData));
      }
    } catch (error) {
      console.error("Error loading favorites:", error);
      showSnackbar("error", "Failed to load favorites");
    } finally {
      setLoading(false);
    }
  };

  const removeFavorite = (type, index) => {
    try {
      if (type === "hadith") {
        const updatedHadiths = [...hadiths];
        updatedHadiths.splice(index, 1);
        setHadiths(updatedHadiths);
        localStorage.setItem("favoriteHadiths", JSON.stringify(updatedHadiths));
        showSnackbar("success", "Hadith removed from favorites");
      } else {
        const updatedAyahs = [...ayahs];
        updatedAyahs.splice(index, 1);
        setAyahs(updatedAyahs);
        localStorage.setItem("favoriteAyahs", JSON.stringify(updatedAyahs));
        showSnackbar("success", "Ayah removed from favorites");
      }
    } catch (error) {
      console.error("Error removing favorite:", error);
      showSnackbar("error", "Failed to remove favorite");
    }
  };

  useEffect(() => {
    getFavorites();
  }, [getFavorites]);

  return (
    <section className="flex flex-col justify-center items-center py-10 gap-y-10 px-4 sm:px-10 lg:px-20 min-h-screen">
      <h1 className="text-3xl sm:text-4xl font-medium text-center border-b-4 border-green-500 pb-2 px-6">
        Your Favorite Hadiths and Ayahs
      </h1>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
        </div>
      ) : (
        <section className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Favorite Hadiths */}
          <div className="bg-white bg-opacity-10 rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-green-400 border-b-2 border-green-500 pb-2 mb-4 flex items-center gap-2">
              <FaHeart className="text-red-500" />
              Favorite Hadiths
              <span className="text-sm text-gray-400 ml-auto">
                {hadiths.length} items
              </span>
            </h2>
            <div className="space-y-4">
              {hadiths.length > 0 ? (
                hadiths.map((hadith, index) => (
                  <div
                    key={`hadith-${index}`}
                    className="bg-gray-800 bg-opacity-50 p-4 rounded-lg relative group"
                  >
                    <p className="text-gray-200">{hadith.hadith}</p>
                    <p className="text-sm text-green-400 mt-2">{hadith.book}</p>
                    <button
                      onClick={() => removeFavorite("hadith", index)}
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-red-500 hover:text-red-400"
                      aria-label="Remove from favorites"
                    >
                      <FaHeartBroken />
                    </button>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-400">
                  <FaHeartBroken className="mx-auto text-4xl mb-2" />
                  <p>You have no favorite hadiths yet</p>
                </div>
              )}
            </div>
          </div>

          {/* Favorite Ayahs */}
          <div className="bg-white bg-opacity-10 rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-green-400 border-b-2 border-green-500 pb-2 mb-4 flex items-center gap-2">
              <FaHeart className="text-red-500" />
              Favorite Ayahs
              <span className="text-sm text-gray-400 ml-auto">
                {ayahs.length} items
              </span>
            </h2>
            <div className="space-y-4">
              {ayahs.length > 0 ? (
                ayahs.map((ayah, index) => (
                  <div
                    key={`ayah-${index}`}
                    className="bg-gray-800 bg-opacity-50 p-4 rounded-lg relative group"
                  >
                    <p className="text-gray-200 text-right text-xl font-arabic mb-2">
                      {ayah.text}
                    </p>
                    <p className="text-sm text-green-400">
                      Surah {ayah.surahName} ({ayah.surahNumber}:
                      {ayah.ayahNumber})
                    </p>
                    <button
                      onClick={() => removeFavorite("ayah", index)}
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-red-500 hover:text-red-400"
                      aria-label="Remove from favorites"
                    >
                      <FaHeartBroken />
                    </button>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-400">
                  <FaHeartBroken className="mx-auto text-4xl mb-2" />
                  <p>You have no favorite ayahs yet</p>
                </div>
              )}
            </div>
          </div>
        </section>
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
