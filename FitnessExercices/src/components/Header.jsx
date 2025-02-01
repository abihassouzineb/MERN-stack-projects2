import { useState, useEffect } from "react";
import { banner, banner2 } from "../assets/all";
import $ from "jquery";

export default function Header() {
  const [bannerImg, setBannerImg] = useState(banner);

  useEffect(() => {
    const interval = setInterval(() => {
      const bannerElement = $("#banner");

      // Hide the current banner with animation
      bannerElement.fadeOut(500, () => {
        // Toggle the banner image after fade-out completes
        setBannerImg((prev) => (prev === banner ? banner2 : banner));

        // Show the new banner with animation
        bannerElement.fadeIn(500);
      });
    }, 5000); // Change banner every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <header className="flex flex-col md:flex-row items-center justify-between w-full px-8 md:px-20 py-16 bg-gray-50 h-[80vh]">
      {/* Text Content */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-4xl font-bold text-gray-800">Fitness Club</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Your ultimate destination for fitness and wellness. Join us to achieve
          your health goals!
        </p>
        <p className="text-md text-gray-500">
          We offer a variety of classes, personal training, and state-of-the-art
          equipment to help you stay fit and healthy.
        </p>

        <button className="cssbuttons-io">
          <span>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
                fill="currentColor"
              ></path>
            </svg>
            Join Now
          </span>
        </button>
      </div>

      {/* Banner Image */}
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-10">
        <img
          id="banner"
          src={bannerImg}
          alt="Fitness Club Banner"
          className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg object-cover"
        />
      </div>
    </header>
  );
}
