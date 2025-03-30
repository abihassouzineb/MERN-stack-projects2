import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaSearch, FaBook, FaLanguage, FaInfoCircle } from "react-icons/fa";
// import { RotatingLines } from "react-loader-spinner";

export default function GetTafsir() {
  const [selectedSurah, setSelectedSurah] = useState("");
  const [ayahNumber, setAyahNumber] = useState("");
  const [language, setLanguage] = useState("english");
  const [surahs, setSurahs] = useState([]);
  const [tafsir, setTafsir] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [maxAyahs, setMaxAyahs] = useState(0);

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
          numberOfAyahs: surah.numberOfAyahs,
        }));
        setSurahs(mappedSurahs);
      } catch (error) {
        console.error("Error fetching Surahs:", error);
        setError("Failed to fetch Surahs. Please try again later.");
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

  const gettingSelectedTafsir = async () => {
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
    setError("");
    setTafsir(null);

    try {
      const response = await axios.get(
        `http://localhost:3000/tafsir/${selectedSurah}/${ayahNumber}?language=${language}`
      );
      setTafsir({
        text: response.data.text,
        // surahName: response.data.surah.englishName,
        // surahNumber: response.data.surah.number,
        ayahNumber: ayahNumber,
        author: response.data.tafseer_name || "Unknown Scholar",
      });
    } catch (error) {
      console.error("Error fetching Tafsir:", error);
      setError(
        "Failed to fetch Tafsir. Please check your inputs and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col justify-center items-center py-12 px-4 sm:px-8 lg:px-20 min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-center border-b-4 border-green-500 pb-3 px-6 mb-12">
          <FaBook className="inline mr-3 text-green-500" />
          Quranic Tafsir Explorer
        </h1>

        {/* Input Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            gettingSelectedTafsir();
          }}
          className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-700 shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Surah Selection */}
            <div className="flex flex-col gap-y-2">
              <label className="text-lg font-semibold flex items-center gap-2 text-green-400">
                <FaBook />
                Select Surah
              </label>
              <select
                className="bg-gray-700 border border-gray-600 text-white rounded-lg py-2 px-4 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                value={selectedSurah}
                onChange={(e) => setSelectedSurah(e.target.value)}
                required
                disabled={loading}
              >
                <option value="">Choose Surah</option>
                {surahs.map((surah) => (
                  <option key={surah.number} value={surah.number}>
                    {surah.number}. {surah.name} ({surah.arabicName})
                  </option>
                ))}
              </select>
            </div>

            {/* Ayah Number Input */}
            <div className="flex flex-col gap-y-2">
              <label className="text-lg font-semibold flex items-center gap-2 text-green-400">
                <FaInfoCircle />
                Ayah Number {selectedSurah && `(1-${maxAyahs})`}
              </label>
              <input
                type="number"
                min="1"
                max={maxAyahs}
                className="bg-gray-700 border border-gray-600 text-white rounded-lg py-2 px-4 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder={`Enter (1-${maxAyahs})`}
                value={ayahNumber}
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  if (value > maxAyahs) {
                    setError(`This Surah only has ${maxAyahs} Ayahs`);
                  } else {
                    setError("");
                  }
                  setAyahNumber(e.target.value);
                }}
                disabled={!selectedSurah || loading}
                required
              />
            </div>

            {/* Language Selection */}
            <div className="flex flex-col gap-y-2">
              <label className="text-lg font-semibold flex items-center gap-2 text-green-400">
                <FaLanguage />
                Language
              </label>
              <select
                className="bg-gray-700 border border-gray-600 text-white rounded-lg py-2 px-4 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                disabled={loading}
              >
                <option value="arabic">Arabic</option>
                <option value="english">English</option>
              </select>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-3 bg-red-500/20 border border-red-500 rounded-lg text-red-200">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading || !selectedSurah || !ayahNumber}
              className={`flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 ${
                loading || !selectedSurah || !ayahNumber
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              
                <>
                  <FaSearch />
                  Get Tafsir
                </>
              
            </button>
          </div>
        </form>

        {/* Tafsir Result */}
        {tafsir && (
          <div className="mt-10 bg-gray-800 bg-opacity-70 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-700 shadow-lg">
            <div className="mb-6 border-b border-green-500 pb-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-green-400">
                Tafsir of Surah {tafsir.surahName} ({tafsir.surahNumber}:
                {tafsir.ayahNumber})
              </h2>
              <p className="text-gray-400 mt-1">By {tafsir.author}</p>
            </div>

            <div className="prose prose-invert max-w-none">
              {tafsir.text.split("\n").map((paragraph, i) => (
                <p key={i} className="mb-4 text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
