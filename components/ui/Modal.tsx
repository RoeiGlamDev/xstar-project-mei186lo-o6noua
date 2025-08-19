import React from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 backdrop-blur-sm z-50">
      <motion.div
        className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all max-w-lg w-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold text-orange-600 mb-4">{title}</h2>
          <p className="text-gray-700 mb-4">{content}</p>
          <button
            className="mt-4 px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-500 transition duration-300 focus:outline-none"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;