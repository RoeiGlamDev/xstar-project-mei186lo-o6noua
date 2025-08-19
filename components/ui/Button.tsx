import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  children: React.ReactNode;
}

const buttonVariants = {
  primary: 'bg-orange-500 text-white hover:bg-orange-600',
  secondary: 'bg-white text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white',
};

const Button: React.FC<ButtonProps> = ({ variant = 'primary', onClick, children }) => {
  return (
    <motion.button
      className={transition-all duration-300 ease-in-out rounded-lg py-2 px-4 font-semibold focus:outline-none focus:ring-2 focus:ring-orange-300 ${buttonVariants[variant]}}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={GlamCS button - ${children}}
    >
      {children}
    </motion.button>
  );
};

export default Button;