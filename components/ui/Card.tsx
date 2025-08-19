import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
    title: string;
    description: string;
    price: string;
    imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, price, imageUrl }) => {
    return (
        <motion.div 
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
        >
            <div className="relative">
                <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-orange-500 bg-opacity-30 backdrop-blur-md"></div>
            </div>
            <div className="p-6">
                <h2 className="text-xl font-bold text-orange-600">{title}</h2>
                <p className="text-gray-700 my-2">{description}</p>
                <span className="text-lg font-semibold text-orange-600">{price}</span>
            </div>
        </motion.div>
    );
};

export default Card;