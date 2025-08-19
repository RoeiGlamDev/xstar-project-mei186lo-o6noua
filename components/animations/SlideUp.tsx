import React from 'react';
import { motion } from 'framer-motion';

interface SlideUpProps {
  children: React.ReactNode;
  duration?: number;
}

const SlideUp: React.FC<SlideUpProps> = ({ children, duration = 0.5 }) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      transition={{ duration }}
      className="bg-white shadow-lg rounded-lg overflow-hidden p-6 mb-4"
    >
      {children}
    </motion.div>
  );
};

export default SlideUp;