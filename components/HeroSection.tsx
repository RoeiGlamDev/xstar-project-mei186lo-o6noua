import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-gradient-to-r from-orange-500 to-white">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="w-full h-full bg-cover bg-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            backgroundImage: 'url("/path/to/your/hero-image.jpg")', // Add your background image here
          }}
        />
      </div>
      <div className="relative z-10 text-center text-white p-5">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to <span className="text-orange-500">GlamCS</span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Elevate your beauty with our luxurious range of cosmetics, crafted to inspire confidence and elegance.
        </motion.p>
        <div className="flex justify-center space-x-4">
          <motion.button
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Shop Now
          </motion.button>
          <motion.button
            className="bg-white text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Explore Our Collection
          </motion.button>
        </div>
        <div className="mt-10">
          <motion.p
            className="text-sm font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Trusted by beauty enthusiasts and professionals alike.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;