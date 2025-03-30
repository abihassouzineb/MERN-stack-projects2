import React from "react";
import feature from "../assets/img-1.png";
import { FaMap } from "react-icons/fa";
import { motion as Motion } from "framer-motion";

export default function Features() {
  return (
    <section className="flex flex-col justify-center items-center mt-14 px-6 relative">
      {/* Feature Image */}
      <Motion.img
        src={feature}
        alt="feature"
        className="w-full md:w-[60%] rounded-lg shadow-xl shadow-teal-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      <div className="absolute top-10 translate-x-[-200px] flex flex-row gap-3 justify-center items-center">
        <FaMap className="text-teal-500 text-[40px] rounded-xl bg-white p-2" />
        <h1 className="text-xl font-bold text-teal-300 underline underline-offset-8">
          North Atlas - Morocco
        </h1>
      </div>

      {/* Feature Text Section */}
      <Motion.div
        initial={{ x: "100%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex z-50 flex-col justify-center items-start bg-teal-500 p-8 md:p-8 rounded-lg max-w-lg -mt-28 ml-[600px] shadow-lg text-white"
      >
        <h1 className="ml-5 font-medium text-4xl md:text-5xl leading-snug">
          Feeling Lost And <br /> Not Knowing The Way?
        </h1>

        {/* Description */}
        <p className="ml-5 mt-4 text-lg md:text-xl font-light leading-relaxed">
          No worries! We guide you through every step of the journey, ensuring
          you always find the right path. Let's explore the world together!
        </p>
      </Motion.div>
    </section>
  );
}
