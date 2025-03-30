import hero_img from "../assets/Nextjs-blog-assets/Assets/blogs.jpg";
import { FaArrowDown, FaArrowLeft } from "react-icons/fa";

export default function Hero() {
  return (
    <header
      id="home"
      className="flex mt-[85px] border-t-4 border-black flex-col md:flex-row justify-center items-center py-14 px-8 md:px-16 gap-10 md:gap-x-36 text-white"
    >
      <div className="text-center md:text-left relative">
        {/* arrows */}
        <div className="absolute top-[-7px] left-[64%] transform -translate-x-1/2 -translate-y-1/2 flex flex-row gap-10">
          <FaArrowDown className="animate-bounce text-lg" />
          <FaArrowDown className="animate-bounce text-lg" />
        </div>
        <h1 className="text-4xl font-bold border-b-2 pb-2">
          Welcome to <span className="text-yellow-300">Blogger</span>
        </h1>
        <p className="text-lg mt-4 leading-relaxed">
          Discover insightful stories, expert opinions, and the latest trends.
          Join our community of passionate writers and readers, and explore a
          world of knowledge with{" "}
          <span className="text-yellow-300 font-semibold relative">
            Blogger!{" "}
            <FaArrowLeft className="absolute top-1/2 left-[130%] text-white transform -translate-y-1/2 -translate-x-1/2 text-lg" />
          </span>
        </p>
        {/* /* From Uiverse.io by shivam_7937 */ }
        <div class="relative inline-flex items-center justify-center gap-4 group mt-6">
          <div class="absolute inset-0 duration-1000 opacity-60 transitiona-all bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
          <a
            role="button"
            class="group relative inline-flex items-center justify-center text-base rounded-xl bg-gray-900 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
            title="payment"
            href="#"
          >
            Explore Our Blogs 
            <svg
              aria-hidden="true"
              viewBox="0 0 10 10"
              height="10"
              width="10"
              fill="none"
              class=" ml-2 -mr-1 stroke-white stroke-2"
            >
              <path
                d="M0 5h7"
                class="transition opacity-0 group-hover:opacity-100"
              ></path>
              <path
                d="M1 1l4 4-4 4"
                class="transition group-hover:translate-x-[3px]"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <img
        src={hero_img}
        alt="A collection of blog articles"
        className="w-full md:w-1/2 rounded-lg shadow-lg"
      />
    </header>
  );
}
