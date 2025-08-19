import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => (
  <section className="flex items-center justify-center h-screen bg-white">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-center"
    >
      <h1 className="text-6xl font-bold text-orange-500">Welcome to GlamCS</h1>
      <p className="mt-4 text-lg text-gray-700">Elevate your beauty with our luxurious cosmetics.</p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-full shadow-lg transition duration-300"
      >
        Shop Now
      </motion.button>
    </motion.div>
  </section>
);

const Features: React.FC = () => (
  <section className="py-20 bg-orange-100">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold text-orange-500">Our Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-lg shadow-lg transition duration-300"
        >
          <h3 className="text-2xl font-semibold">Premium Quality</h3>
          <p className="mt-2 text-gray-600">Experience the finest ingredients for your skin.</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-lg shadow-lg transition duration-300"
        >
          <h3 className="text-2xl font-semibold">Vibrant Colors</h3>
          <p className="mt-2 text-gray-600">Our palette is designed to enhance your natural beauty.</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-lg shadow-lg transition duration-300"
        >
          <h3 className="text-2xl font-semibold">Eco-Friendly</h3>
          <p className="mt-2 text-gray-600">Sustainable practices for a better planet.</p>
        </motion.div>
      </div>
    </div>
  </section>
);

const LuxuryDesign: React.FC = () => (
  <section className="py-20">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold text-orange-500">Experience Luxury</h2>
      <p className="mt-4 text-lg text-gray-700">Transform your beauty routine with GlamCS.</p>
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mt-10"
      >
        <img src="/images/luxury-cosmetics.jpg" alt="Luxury Cosmetics" className="mx-auto rounded-lg shadow-lg" />
      </motion.div>
    </div>
  </section>
);

const GlamCS: React.FC = () => {
  return (
    <div>
      <Hero />
      <Features />
      <LuxuryDesign />
    </div>
  );
};

export default GlamCS;