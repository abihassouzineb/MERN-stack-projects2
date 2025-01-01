import { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { motion } from 'framer-motion';

const RecentOffers = () => {
  const [estates, setEstates] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000")
      .then((res) => res.json())
      .then((data) => setEstates(data.estates));
  }, []);

  return (
    <div className="my-10 flex flex-col justify-center items-center gap-y-6">
      <motion.p 
        className="text-3xl font-bold border-b-4 border-blue-500 pb-2 px-7 text-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Recent Offers
      </motion.p>
      <motion.div 
        className="flex flex-wrap justify-center items-center gap-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {estates.map((estate) => (
          <motion.div
            key={estate._id}
            className="flex flex-col gap-y-2 shadow-lg w-[300px] md:w-[400px] bg-white rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: estates.indexOf(estate) * 0.1 }}
          >
            <img
              src={`http://localhost:3000/images/${estate.image}`}
              alt={estate.title}
              className="w-full h-48 object-cover"
            />
            <div className="flex flex-col gap-y-2 p-4">
              <p className="font-bold text-gray-700">{estate.title}</p>
              <div className="flex flex-row items-center gap-x-2 text-gray-500">
                <FaMapMarkerAlt />
                <p>{estate.location}</p>
              </div>
              <p className="text-sm font-light text-gray-600">{estate.description}</p>
              <p className="text-lg text-blue-600 font-semibold">${estate.price} / month</p>
              <div className="flex flex-row gap-x-5 items-center text-gray-500">
                <p>{estate.Beds} {estate.Beds === 1 ? "Bed" : "Beds"}</p> 
                <p>{estate.Baths} {estate.Baths === 1 ? "Bath" : "Baths"}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default RecentOffers;
