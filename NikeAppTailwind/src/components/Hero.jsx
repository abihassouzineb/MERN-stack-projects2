import { Rating } from "@mui/material";
import { FaQuestion, FaDownload } from "react-icons/fa";
import Hero_img from "../assets/hero.png";
import {motion as Motion} from "framer-motion"

export default function Hero() {
  return (
    <header className="flex flex-wrap justify-between items-center mx-6 md:mx-16">
      <Motion.div
        className="flex flex-col justify-center items-start gap-y-6 max-w-xl"
        initial={{ x: "-100%" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl font-bold text-gray-900 leading-tight">
          Putuk Truno <br /> Camp Area
        </h1>

        <p className="text-md text-gray-600">
          We want to be on each of your journeys seeking the satisfaction of
          seeing the incorruptible beauty of nature. We can help you on an
          adventure around the world in just one app.
        </p>

        <div className="flex flex-row gap-4 items-center font-medium">
          <Rating
            name="half-rating-read"
            defaultValue={4.5}
            precision={0.5}
            readOnly
          />
          <span className="text-gray-700">198k (Good Reviews)</span>
        </div>

        <div className="flex flex-row gap-4">
          <button className="px-5 py-2 flex flex-row gap-2 justify-center items-center bg-teal-500 text-white rounded-full font-medium shadow-md hover:bg-teal-600 transition duration-300">
            <FaDownload />
            <span>Download</span>
          </button>
          <button className="px-5 py-2 flex flex-row gap-2 justify-center items-center border-2 border-teal-500 text-black hover:bg-teal-500 hover:text-white transition duration-300 rounded-full shadow-md">
            <FaQuestion className="text-teal-500 " />
            <span className="font-medium">Learn More</span>
          </button>
        </div>
      </Motion.div>

      <Motion.img
        src={Hero_img}
        alt="Hero"
        className="w-full md:w-1/2 h-auto border border-teal-300 md:mt-8 shadow-2xl shadow-teal-300 rounded-lg"
        initial={{ x: "100%" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
      />
    </header>
  );
}
