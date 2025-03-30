import React from "react";
import {About_img} from "../assets/assets"; // Assuming this is the path to your image

export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <img
              src={About_img}
              alt="Team working on Quranic and Hadith studies"
              className="rounded-xl shadow-2xl border-4 border-green-500 transform hover:scale-[101%] transition-transform duration-300"
            />
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold text-green-400 border-b-2 border-green-500 pb-3 inline-block">
              About Our Platform
            </h1>

            <p className="text-lg leading-relaxed">
              Welcome to{" "}
              <span className="text-green-400 font-semibold">Islamicopedia</span>,
              a comprehensive digital platform dedicated to making Islamic
              knowledge accessible to everyone. Our mission is to provide
              authentic Quranic verses and Hadiths with accurate translations
              and contextual information.
            </p>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-green-300 border-b-2 border-green-500 mr-24">
                Our Features
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>
                    Search and explore thousands of Quranic verses with multiple
                    translations
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>
                    Access authentic Hadith collections from major books
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>
                    Save your favorite verses and hadiths for later study
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Listen to beautiful Quranic recitations</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-green-300 border-b-2 border-green-500 mr-24">
                Our Team
              </h2>
              <p className="text-lg leading-relaxed">
                We are a group of Islamic scholars, developers, and designers
                committed to creating authentic digital Islamic resources. Our
                team includes Arabic linguists, Quran memorizers (Huffaz), and
                Hadith specialists who verify all content.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 bg-gray-800 bg-opacity-50 p-8 rounded-xl border-l-4 border-green-500">
          <h2 className="text-3xl font-bold text-center mb-6 text-green-400 border-b-4 border-green-500 pb-1 mx-48">
            Our Mission
          </h2>
          <p className="text-xl text-center italic">
            "To bridge the gap between technology and authentic Islamic
            knowledge, making the Quran and Sunnah accessible to Muslims
            worldwide in an easy, accurate, and beautiful manner."
          </p>
        </div>
      </div>
    </section>
  );
}
