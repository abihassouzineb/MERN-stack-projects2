import { motion } from 'framer-motion';
import hero from '../assets/téléchargement.jpg';
import RecentOffers from '../components/RecentOffers';

const Home = () => {
  return (
    <div className="flex flex-col bg-gray-100 justify-center items-center min-h-screen">
      <motion.div 
        className="flex flex-col justify-center items-start mt-24 self-start px-8 md:px-24 gap-y-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-4xl md:text-6xl leading-tight font-bold text-gray-800">
          Find your next perfect <br /> place with ease
        </p>
        <p className="text-sm text-gray-500 mt-4">
          Sahand Estate will help you find your home fast, easy, and comfortable.{" "}
          <br />
          Our expert support is always available.
        </p>

        <a href="/search">
          <motion.button 
            className="bg-gradient-to-r my-3 ring ring-offset-0 ring-blue-200 from-blue-500 via-pink-200 to-indigo-500 px-5 py-2 rounded-full hover:skew-y-6 duration-300 hover:ring-2 hover:ring-blue-500 hover:ring-offset-4 ring-offset-gray-200 hover:shadow-2xl hover:-translate-y-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let&apos;s Start Now
          </motion.button>
        </a>
      </motion.div>

      <motion.img 
        src={hero} 
        alt="Hero" 
        className="w-full my-10 h-[60%] md:h-[80%] object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <RecentOffers />
    </div>
  );
};

export default Home;
