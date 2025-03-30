import React from "react";
import phone from "../assets/phone.png";
import map from "../assets/map.svg";
import tech from "../assets/tech.svg";
import location from "../assets/location.svg";
import calendar from "../assets/calendar.svg";
import feature_bg from "../assets/feature-bg.png";

import { motion as Motion } from "framer-motion";

export default function Features2() {
  return (
    <section
      className="flex flex-col justify-center items-center px-6 pt-10 mt-10"
      style={{
        backgroundImage: `url(${feature_bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Motion.h1
        initial={{ x: "-100%" }}
        whileInView={{ x: 0 }}
        className="text-[2.5rem] font-bold border-b-[3px] border-teal-500 pb-1 px-5"
      >
        Our Features
      </Motion.h1>

      <div className="flex flex-row justify-between items-center mx-6 gap-x-24 w-full md:w-5/6">
        <Motion.img
          src={phone}
          alt="phone"
          className="w-full md:w-[30%] rotate-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Feature Cards */}
        <div className="grid grid-cols-2 gap-10">
          {/* First Card */}
          <Motion.div
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col gap-2 justify-center items-start"
          >
            <img src={map} alt="map" className="bg-teal-600 rounded-full p-3" />
            <p className="text-xl border-b-2 border-teal-500 pb-1 font-semibold">
              Real Maps Can Be Offline
            </p>
            <p className="text-md text-gray-600">
              Access detailed maps anytime, even without an internet connection,
              so you never lose your way during adventures.
            </p>
          </Motion.div>

          {/* Second Card */}
          <Motion.div
            className="flex flex-col gap-2 justify-center items-start"
            initial={{ x: "100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img
              src={calendar}
              alt="calendar"
              className="bg-teal-600 rounded-full p-3"
            />
            <p className="text-xl border-b-2 border-teal-500 pb-1 font-semibold">
              Plan Your Trips with Ease
            </p>
            <p className="text-md text-gray-600">
              Our intuitive scheduling feature helps you organize your journeys,
              ensuring a smooth and hassle-free experience.
            </p>
          </Motion.div>

          {/* Third Card */}
          <Motion.div
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col gap-2 justify-center items-start"
          >
            <img
              src={tech}
              alt="tech"
              className="bg-teal-600 rounded-full p-3"
            />
            <p className="text-xl border-b-2 border-teal-500 pb-1 font-semibold">
              Advanced Navigation Technology
            </p>
            <p className="text-md text-gray-600">
              Cutting-edge GPS integration offers real-time route optimization
              and tracking for ultimate convenience.
            </p>
          </Motion.div>

          {/* Fourth Card */}
          <Motion.div
            className="flex flex-col gap-2 justify-center items-start"
            initial={{ x: "100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img
              src={location}
              alt="location"
              className="bg-teal-600 rounded-full p-3"
            />
            <p className="text-xl border-b-2 border-teal-500 pb-1 font-semibold">
              Discover Hidden Destinations
            </p>
            <p className="text-md text-gray-600">
              Uncover secret spots and lesser-known trails curated by our
              community of explorers and adventurers.
            </p>
          </Motion.div>
        </div>
      </div>
    </section>
  );
}
