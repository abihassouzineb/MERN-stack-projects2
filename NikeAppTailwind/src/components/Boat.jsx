import React from 'react'
import boat from "../assets/boat.png"

import { motion as Motion } from "framer-motion";

export default function Boat() {
  return (
    <section className="flex flex-col justify-center items-center mt-20 px-6 gap-y-10 relative">
      <Motion.div className="flex flex-row justify-between items-center mx-6 w-full md:w-5/6">
        <Motion.h1
          className="capitalize text-4xl flex flex-col md:text-5xl font-bold gap-y-2"
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <span>guide you to the </span>{" "}
          <span className="text-teal-500">the adventure</span>
        </Motion.h1>

        <Motion.p
          className="text-md text-gray-600 xl:max-w-[520px]"
          initial={{ x: "100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Only with the hilink application you will no longer get lost and get
          lost again, because we already support offline maps when there is no
          internet connection in the field. Invite your friends, relatives and
          friends to have fun in the wilderness through the valley and reach the
          top of the mountain
        </Motion.p>
      </Motion.div>
      <Motion.img
      initial={{ x: "100%", opacity: 0, y: "10%" }} 
      whileInView={{ x: 0, opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
        src={boat}
        alt="boat"
        className="w-full md:w-3/4 rounded-[3em] shadow-xl shadow-teal-400"
      />

      <div className="flex text-black flex-col bg-white rounded-3xl p-5 justify-center items-start gap-y-4 absolute top-1/2 translate-y-[-50%] left-1/2 translate-x-[-210%]">
        <div className="flex flex-col gap-y-1">
          <p className="text-sm text-gray-600 underline underline-offset-4">
            Destination
          </p>
          <h1 className="font-semibold">North Atlas - Morocco</h1>
        </div>

        <div className="flex flex-col gap-y-1">
          <p className="text-sm text-gray-600 underline underline-offset-4">
            Start Track
          </p>
          <h1 className="font-semibold">11:00 am</h1>
        </div>
      </div>
    </section>
  );
}
