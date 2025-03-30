import { useState } from "react";
import { blog_data } from "../assets/Nextjs-blog-assets/Assets/assets";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const categories = [
    "ALL",
    ...new Set(blog_data.map((blog) => blog.category)),
  ];

  const filteredBlogs =
    selectedCategory === "ALL"
      ? blog_data
      : blog_data.filter((blog) => blog.category === selectedCategory);

  return (
    <section className="flex flex-col items-center justify-center gap-y-10 my-10 px-10">
      {/* Heading */}
      <div className="flex flex-col items-center justify-center gap-y-4">
        <h1 className="text-5xl border-b-2 border-orange-600 pb-1 font-semibold">
          Latest Blogs
        </h1>
        <p className="text-gray-700">
          Check out our latest, free, and famous blogs
        </p>
      </div>

      {/* Category Filter Buttons */}
      <div className="flex flex-row items-center justify-center gap-x-6">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === category ? "bg-orange-700" : "bg-orange-600"
            } text-white`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Display Filtered Blogs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredBlogs.map((blog) => (
          <div
            className="flex flex-col items-center justify-center gap-y-2 pb-5 border-2 hover:-translate-y-1 border-black transition-all duration-300 ease-in-out 
                         hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover border-b-2 border-black"
            />
            <p className="text-white bg-black mt-2 px-4 py-1 self-start ml-5">
              {blog.category}
            </p>
            <h1 className="text-xl font-medium ml-5">{blog.title}</h1>

            {/* read more */}
            <button className="flex flex-row justify-center items-center gap-x-2 self-start mt-2 ml-4">
              <Link to={`/blogs/${blog.id}`} key={blog.id}>
                <span className="font-semibold">Read More</span>
              </Link>
              <FaArrowRight className="hover:translate-x-1 transition-all duration-300" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
