import { useUser } from "@clerk/clerk-react";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Quran() {
  const { isSignedIn } = useUser();

  const handleNavigation = (path) => {
    if (!isSignedIn) {
      toast.warn("Please sign in to access this feature", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    window.location.replace(path);
  };

  return (
    <section className="flex flex-col justify-center items-center py-12 px-4 sm:px-8 lg:px-20">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <h1 className="text-3xl sm:text-4xl border-b-4 border-green-500 pb-3 px-6 text-center">
        Here, you can read the Quran In Arabic
      </h1>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-14 mt-12 w-full max-w-6xl">
        {/* reading a specific surah */}
        <div className="flex flex-row justify-between items-center ring-4 ring-green-500 ring-offset-4 sm:ring-offset-8 ring-offset-gray-900 shadow-lg shadow-green-500/50 py-4 px-6 sm:py-5 sm:px-8 rounded-2xl hover:-translate-y-1 hover:shadow-xl hover:shadow-green-500/70 transition-all duration-300">
          <div className="flex flex-col gap-y-2 sm:gap-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold border-b-2 border-l-2 border-green-500 pb-1 pl-2">
              Reading a specific surah
            </h2>
            <p className="text-gray-300 text-sm sm:text-base">
              Read a specific surah in Arabic, in Uthmanic script.
            </p>
          </div>

          <FaArrowRight
            className="text-2xl sm:text-3xl cursor-pointer text-green-500 bg-white rounded-full hover:bg-green-500 p-1 sm:p-2 hover:text-gray-300 transition-colors duration-200"
            onClick={() => handleNavigation("/quran/whole")}
          />
        </div>

        {/* reading a specific ayah */}
        <div className="flex flex-row justify-between items-center ring-4 ring-green-500 ring-offset-4 sm:ring-offset-8 ring-offset-gray-900 shadow-lg shadow-green-500/50 py-4 px-6 sm:py-5 sm:px-8 rounded-2xl hover:-translate-y-1 hover:shadow-xl hover:shadow-green-500/70 transition-all duration-300">
          <div className="flex flex-col gap-y-2 sm:gap-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold border-b-2 border-l-2 border-green-500 pb-1 pl-2">
              Reading a specific ayah
            </h2>
            <p className="text-gray-300 text-sm sm:text-base">
              Read a specific ayah in Arabic, in Uthmanic script.
            </p>
          </div>

          <FaArrowRight
            className="text-2xl sm:text-3xl cursor-pointer text-green-500 bg-white rounded-full hover:bg-green-500 p-1 sm:p-2 hover:text-gray-300 transition-colors duration-200"
            onClick={() => handleNavigation("/quran/ayah")}
          />
        </div>

        {/* reading a specific Tafsir */}
        <div className="flex flex-row justify-between items-center ring-4 ring-green-500 ring-offset-4 sm:ring-offset-8 ring-offset-gray-900 shadow-lg shadow-green-500/50 py-4 px-6 sm:py-5 sm:px-8 rounded-2xl hover:-translate-y-1 hover:shadow-xl hover:shadow-green-500/70 transition-all duration-300 md:col-span-2">
          <div className="flex flex-col gap-y-2 sm:gap-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold border-b-2 border-l-2 border-green-500 pb-1 pl-2">
              Reading a specific Tafsir
            </h2>
            <p className="text-gray-300 text-sm sm:text-base">
              Read a specific Tafsir in Arabic, in Uthmanic script.
            </p>
          </div>

          <FaArrowRight
            className="text-2xl sm:text-3xl cursor-pointer text-green-500 bg-white rounded-full hover:bg-green-500 p-1 sm:p-2 hover:text-gray-300 transition-colors duration-200"
            onClick={() => handleNavigation("/quran/tafsir")}
          />
        </div>
      </section>
    </section>
  );
}
