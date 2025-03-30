import pattern from "../assets/pattern.png";
import phones from "../assets/phones.png";

import { motion as Motion } from "framer-motion";

export default function GetApp() {
  return (
    <Motion.section
      initial={{ opacity: 0, y: "-10%", x: "-100%"  }}
      whileInView={{ opacity: 1, y: 0,  x: 0 }}
      transition={{ duration: 1, delay: 0.3, ease: "easeInOut", staggerChildren: 0.2 }}
      className="flex flex-row justify-center overflow-hidden items-center px-10 h-[350px] mx-24 mt-10"
      style={{
        backgroundImage: `url(${pattern})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        // border radius forthe image
        borderRadius: "2em",
      }}
    >
      <div className="flex flex-col justify-center items-start gap-y-6">
        <p className="text-[2.5rem] font-semibold text-white flex flex-row gap-2">
          Get For{" "}
          <p className="text-teal-500 underline underline-offset-8 animate-bounce">
            Free
          </p>{" "}
          Now
        </p>
        <p className="text-md text-white">
          Available on Google Play and App Store, On Android and IOS
        </p>

        <div className="flex flex-row gap-4">
          <button className="w-1/4">
            <img
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              alt="google play"
            />
          </button>

          <button className="w-full">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="app store"
            />
          </button>
        </div>
      </div>

      <img src={phones} alt="phones" className="w-1/3" />
    </Motion.section>
  );
}
