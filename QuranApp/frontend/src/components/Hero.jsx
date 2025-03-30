import React from "react";
import hero_img from "../assets/istockphoto-1147281423-612x612.jpg";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <header className="flex flex-row justify-between items-center mx-28 my-16 gap-x-24">
      <div className="flex flex-col gap-y-5 w-1/2 justify-center items-start">
        <h1 className="text-5xl font-semibold leading-[1.2]">
          Discover the Beauty of the Quran & Hadith
        </h1>
        <p className="text-gray-400 text-md">
          Explore the timeless wisdom of the Quran and authentic Hadith
          collections with ease. Listen, read, and reflect—all in one place.
        </p>

        <button
          className="px-5 py-2 outline-white outline-2 outline-offset-4 hover:ring-2 hover:ring-green-500 hover:ring-offset-4 hover:ring-offset-gray-900 hover:shadow-lg hover:shadow-green-500 hover:outline-none duration-300 rounded-full bg-green-500 text-white"
          onClick={() => navigate("/quran")}
        >
          Get Started
        </button>
      </div>

      {/* hero image */}
      <div>
        <img
          src={hero_img}
          alt="hero image"
          className="size-full rounded-2xl ring-2 ring-green-500 ring-offset-4 ring-offset-gray-900 shadow-xl shadow-green-500 "
        />
      </div>
    </header>
  );
}
