import React from "react";
import { FaBook, FaHeadphones, FaBookOpen } from "react-icons/fa";

const features = [
  {
    icon: <FaBook />,
    title: "Read the Quran",
    description: "Browse the entire Quran with Tafseer and translations.",
  },
  {
    icon: <FaHeadphones />,
    title: "Listen to Recitations",
    description: "Enjoy beautiful audio recitations from renowned Qaris.",
  },
  {
    icon: <FaBookOpen />,
    title: "Hadith Collections",
    description: "Explore authentic Hadiths from Bukhari, Muslim, and more.",
  },
];

export default function Features() {
  return (
    <section className="flex flex-col justify-center items-center py-10 gap-y-10 px-4 sm:px-10 lg:px-20">
      <h1 className="text-4xl border-b-4 border-green-500 pb-2 px-5 font-semibold">
        Our Features
      </h1>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-y-5 bg-white text-black p-5 rounded-3xl ring-4 ring-green-500 ring-offset-8 ring-offset-gray-900 shadow-xl shadow-green-500"
          >
            <div className="text-4xl text-green-600">{feature.icon}</div>
            <h2 className="text-2xl font-semibold border-b-2 border-x-2 shadow-md shadow-green-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-500 duration-300 cursor-pointer border-green-500 px-3">{feature.title}</h2>
            <p className="text-center text-gray-600">{feature.description}</p>
          </div>
        ))}
      </section>
    </section>
  );
}
