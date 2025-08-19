import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  logoSrc: string;
}

const Header: React.FC<HeaderProps> = ({ logoSrc }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <motion.div
          className="text-2xl font-bold text-orange-500"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          <img src={logoSrc} alt="GlamCS Logo" className="h-10" />
        </motion.div>
        <nav className="hidden md:flex space-x-6">
          <motion.a
            href="#home"
            className="text-gray-800 hover:text-orange-500 transition duration-200"
            whileHover={{ scale: 1.05 }}
          >
            Home
          </motion.a>
          <motion.a
            href="#products"
            className="text-gray-800 hover:text-orange-500 transition duration-200"
            whileHover={{ scale: 1.05 }}
          >
            Products
          </motion.a>
          <motion.a
            href="#about"
            className="text-gray-800 hover:text-orange-500 transition duration-200"
            whileHover={{ scale: 1.05 }}
          >
            About Us
          </motion.a>
          <motion.a
            href="#contact"
            className="text-gray-800 hover:text-orange-500 transition duration-200"
            whileHover={{ scale: 1.05 }}
          >
            Contact
          </motion.a>
        </nav>
        <button
          className="md:hidden text-orange-500 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? '✖' : '☰'}
        </button>
      </div>
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white rounded-lg shadow-lg p-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <motion.a
            href="#home"
            className="block text-gray-800 hover:text-orange-500 transition duration-200 py-2"
            whileHover={{ scale: 1.05 }}
          >
            Home
          </motion.a>
          <motion.a
            href="#products"
            className="block text-gray-800 hover:text-orange-500 transition duration-200 py-2"
            whileHover={{ scale: 1.05 }}
          >
            Products
          </motion.a>
          <motion.a
            href="#about"
            className="block text-gray-800 hover:text-orange-500 transition duration-200 py-2"
            whileHover={{ scale: 1.05 }}
          >
            About Us
          </motion.a>
          <motion.a
            href="#contact"
            className="block text-gray-800 hover:text-orange-500 transition duration-200 py-2"
            whileHover={{ scale: 1.05 }}
          >
            Contact
          </motion.a>
        </motion.div>
      )}
    </header>
  );
};

export default Header;