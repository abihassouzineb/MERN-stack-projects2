import React from "react";

import { motion as Motion } from "framer-motion";

export default function Footer() {
  return (
    <>
      <footer className="flex flex-row md:px-24 px-8 py-10 mt-14 justify-between items-baseline">
        <Motion.div className="flex flex-col gap-y-4 justify-center items-start" initial={{ x: "-100%", opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}>
          <h1 className="text-2xl font-bold">
            <span>Hi</span>
            <span className="text-teal-500">link.</span>
          </h1>
          <p className="text-[#374151] text-sm max-w-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
        </Motion.div>

        <Motion.div initial={{ y: "-100%", opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} className="flex flex-col gap-y-4 justify-center items-start">
          <p className="font-medium text-teal-500 text-xl mb-5 border-b-2 border-teal-500 pb-1">
            Company
          </p>
          <div className="flex flex-col gap-y-2">
            <p className="text-[#374151] text-sm">About Us</p>
            <p className="text-[#374151] text-sm">Contact Us</p>
            <p className="text-[#374151] text-sm">Privacy Policy</p>
            <p className="text-[#374151] text-sm">Terms & Conditions</p>
          </div>
        </Motion.div>

        <Motion.div initial={{ x: "100%", opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} className="flex flex-col gap-y-4 justify-center items-start">
          <p className="font-medium text-teal-500 border-b-2 pb-1 text-xl mb-5 border-teal-500">
            GET IN TOUCH
          </p>
          <div className="flex flex-col gap-y-2">
            <p className="text-[#374151] text-sm">Morocco.Settat.2221</p>
            <p className="text-[#374151] text-sm">LoremIpsum@gmail.com</p>
            <p className="text-[#374151] text-sm">+100 000 0000</p>
          </div>
        </Motion.div>
      </footer>

      <p className="text-center my-5 text-teal-700 text-md">
        <hr className="mx-32 text-teal-500 mb-5 px-5" />
        <p>
          Copyright {new Date().getFullYear()} @ Saad.dev - All Right Reserved.
        </p>
      </p>
    </>
  );
}
