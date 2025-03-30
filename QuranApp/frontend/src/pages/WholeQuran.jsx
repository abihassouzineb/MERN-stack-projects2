import React, { useEffect, useState } from "react";
import axios from "axios";

export default function WholeQuran() {
  const [surahs, setSurahs] = useState([]);
  const [selectedSurah, setSelectedSurah] = useState("");
  const [surahContent, setSurahContent] = useState("");
  const [surahName, setSurahName] = useState("");
  const [language, setLanguage] = useState("arabic");

  // Fetch all Surahs
  useEffect(() => {
    const gettingSurahs = async () => {
      try {
        const response = await axios.get("http://localhost:3000/surahs");
        const mappedSurahs = response.data.data.map((surah) => ({
          number: surah.number,
          name: surah.englishName,
        }));
        setSurahs(mappedSurahs);
      } catch (error) {
        console.error("Error fetching Surahs:", error);
      }
    };

    gettingSurahs();
  }, []);

  // Get a specific Surah by number and language
  const getSpecificSurahByNumber = async (e) => {
    e.preventDefault();
    if (!selectedSurah) return;

    try {
      const endpoint =
        language === "english"
          ? `http://localhost:3000/surah/${selectedSurah}/en.asad`
          : `http://localhost:3000/surah/${selectedSurah}`;

      const response = await axios.get(endpoint);
      setSurahContent(response.data.surah);
      console.log(response.data.nameInEnglish);
      if (response.data.nameInEnglish) {
        setSurahName(response.data.nameInEnglish);
      } else {
      setSurahName(response.data.name);
      }
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching Surah:", error);
      setSurahContent("Failed to fetch the Surah. Please try again.");
    }
  };

  return (
    <section className="flex flex-col justify-center items-center py-[84px] gap-y-10 px-4 sm:px-10 lg:px-20">
      <h1 className="text-4xl border-b-4 border-green-500 pb-2 px-5 font-semibold">
        The Whole Quran
      </h1>

      {/* Form for selecting Surah */}
      <form
        className="flex flex-col justify-center gap-y-10 items-center"
        onSubmit={getSpecificSurahByNumber}
      >
        <div className="flex flex-row gap-x-24">
          {/* Choose a Surah */}
          <div className="flex flex-col gap-y-4">
            <label
              htmlFor="surah"
              className="text-2xl font-semibold border-b-2 border-x-2 px-3 border-green-500 pb-1"
            >
              Choose a Surah
            </label>
            <select
              name="surah"
              id="surah"
              className="text-green-500 border-2 border-green-500 py-2 px-4 rounded-lg"
              onChange={(e) => setSelectedSurah(e.target.value)}
            >
              <option value="">Select Surah</option>
              {surahs.map((surah) => (
                <option key={surah.number} value={surah.number} className="p-2">
                  {surah.number}. {surah.name}
                </option>
              ))}
            </select>
          </div>

          {/* Choose a Language */}
          <div className="flex flex-col gap-y-4">
            <label
              htmlFor="language"
              className="text-2xl font-semibold border-b-2 border-x-2 px-3 border-green-500 pb-1"
            >
              Choose a Language
            </label>
            <select
              name="language"
              id="language"
              className="text-green-500 border-2 border-green-500 py-2 px-4 rounded-lg"
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="arabic">Arabic</option>
              <option value="english">English</option>
            </select>
          </div>
        </div>

        {/* Button to Fetch Surah */}
        <button
          className="text-xl w-32 h-12 rounded bg-emerald-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000 ring-1 ring-green-500 ring-offset-4 shadow-lg shadow-green-500 hover:-translate-y-1 hover:shadow-2xl ring-offset-gray-900 hover:ring-gray-900 hover:duration-300"
          type="submit"
        >
          Get Surah
        </button>
      </form>

      {/* Display the Selected Surah */}
      {surahContent && (
        <div
          className="bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-2xl"
          id="surahContent"
        >
          <h2 className="text-3xl text-center font-semibold border-b-2 border-green-500 text-black pb-2 mb-4">
            {surahName}
          </h2>
          <p className="text-lg leading-relaxed text-gray-800 whitespace-pre-wrap">
            {surahContent}
          </p>
        </div>
      )}
    </section>
  );
}
