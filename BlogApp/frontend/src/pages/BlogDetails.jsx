import { useParams } from "react-router-dom";
import { blog_data } from "../assets/Nextjs-blog-assets/Assets/assets";
import { useEffect } from "react";

export default function BlogDetails() {
  const { blog_id } = useParams();

  const blog = blog_data.find((blog) => blog.id === Number(blog_id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(blog);
  if (!blog) {
    return <p>Blog not found</p>;
  }

  return (
    <section className="flex mt-40 flex-col items-center justify-center my-16 gap-y-16">
      <div className="flex flex-col items-center justify-center gap-y-4">
        <h1 className="text-4xl font-semibold border-b-4 border-orange-600 px-10 pb-2 mb-5">{blog.title}</h1>
        <div className="flex flex-col items-center justify-center gap-y-4">
          <img src={blog.author_img} alt="author" className="w-20 h-20 rounded-full border-2 border-orange-600" />
          <p className="text-gray-800 text-lg px-3 font-semibold border-b-2 border-orange-600 pb-1">{blog.author}</p>
        </div>
      </div>

      {/* image */}
      <div className="flex flex-col items-center justify-center gap-y-4">
        <img src={blog.image} alt="blog" className="w-4/5 border-4 border-orange-600 rounded-lg" />
      </div>

      {/* content */}
      <div className="flex flex-col items-center justify-center gap-y-4">
        <p className="text-gray-800">{blog.description}</p>
      </div>
    </section>
  );
}
