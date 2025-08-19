import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { ParticleEffect } from './ParticleEffect';
import { motion } from 'framer-motion';

const ParticleBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden">
      <Canvas className="absolute inset-0">
        <ParticleEffect />
      </Canvas>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <motion.h1
          className="text-6xl font-bold mb-4 animate__animated animate__fadeIn"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Welcome to GlamCS
        </motion.h1>
        <motion.p
          className="text-2xl max-w-xl mb-8 animate__animated animate__fadeIn"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5 } }}
        >
          Discover our luxurious line of cosmetics designed to elevate your beauty routine. 
          Experience elegance with every product, crafted just for you.
        </motion.p>
        <motion.button
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Shop Now
        </motion.button>
      </div>
    </div>
  );
};

export default ParticleBackground;