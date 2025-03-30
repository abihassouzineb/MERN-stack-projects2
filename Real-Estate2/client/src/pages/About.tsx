import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center px-10 py-10 gap-10 bg-gray-100">
      {/* Text Section */}
      <motion.div
        className="md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-blue-600 mb-4 border-b-2 border-blue-500 pb-2">About Us</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to our real estate platform, where finding your dream home is
          made simple and hassle-free. We connect buyers, sellers, and renters
          with the best properties tailored to their needs. Our mission is to
          provide a seamless experience with reliable listings, detailed
          insights, and expert guidance.
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <img
          src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Real estate"
          className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </motion.div>
    </section>
  );
}
