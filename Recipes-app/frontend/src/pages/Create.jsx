import { useState } from "react";
import { motion } from "framer-motion";

const Create = () => {
  const [data, setData] = useState({
    title: "",
    description: "",
    location: "",
    price: 0,
    image: null, // change to null
    Beds: 0,
    Baths: 0,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setData({
      ...data,
      [name]: name === "image" ? files[0] : value, // handle file input
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }

    fetch("http://localhost:3000/add", {
      method: "POST",
      body: formData, // send FormData
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="flex flex-col justify-center items-center mt-24 gap-y-5">
      <motion.p
        className="text-3xl font-bold border-b-4 border-blue-500 pb-2 px-7 text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Create Listing
      </motion.p>

      <motion.form
        action=""
        className="flex flex-col ring-2 ring-blue-500 rounded-lg p-8 w-3/4 md:w-1/2 xl:w-1/3"
        method="POST"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <label htmlFor="title" className="font-medium text-gray-700 mb-2">Title</label>
        <input
          className="ring-1 ring-blue-500 px-4 py-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          id="title"
          value={data.title}
          onChange={handleChange}
          name="title"
          placeholder="Enter Title"
        />

        <label htmlFor="description" className="font-medium text-gray-700 mb-2">Description</label>
        <input
          className="ring-1 ring-blue-500 px-4 py-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          id="description"
          name="description"
          value={data.description}
          onChange={handleChange}
          placeholder="Enter Description"
        />

        <label htmlFor="location" className="font-medium text-gray-700 mb-2">Location</label>
        <input
          className="ring-1 ring-blue-500 px-4 py-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          id="location"
          name="location"
          value={data.location}
          onChange={handleChange}
          placeholder="Enter Location"
        />

        <label htmlFor="price" className="font-medium text-gray-700 mb-2">Price</label>
        <input
          className="ring-1 ring-blue-500 px-4 py-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="number"
          id="price"
          name="price"
          value={data.price}
          onChange={handleChange}
          placeholder="Enter Price"
        />

        <label htmlFor="beds" className="font-medium text-gray-700 mb-2">Beds</label>
        <input
          className="ring-1 ring-blue-500 px-4 py-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="number"
          id="beds"
          name="beds"
          value={data.Beds}
          onChange={handleChange}
          placeholder="Enter Beds"
        />

        <label htmlFor="baths" className="font-medium text-gray-700 mb-2">Baths</label>
        <input
          className="ring-1 ring-blue-500 px-4 py-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="number"
          id="baths"
          name="baths"
          value={data.Baths}
          onChange={handleChange}
          placeholder="Enter Baths"
        />

        <label htmlFor="image" className="font-medium text-gray-700 mb-2">Image</label>
        <input
          className="ring-1 ring-blue-500 px-4 py-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="file"
          id="image"
          name="image"
          onChange={handleChange}
        />

        <motion.button
          type="submit"
          className="bg-gradient-to-r from-blue-500 via-pink-200 to-indigo-500 px-6 py-3 rounded-md mt-4 text-black font-semibold hover:ring-2 hover:ring-blue-400 hover:ring-offset-4 ring-offset-gray-200 ring"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Submit
        </motion.button>
      </motion.form>
    </div>
  );
};

export default Create;
