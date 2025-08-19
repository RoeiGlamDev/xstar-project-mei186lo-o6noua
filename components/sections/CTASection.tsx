import React from 'react';
import { motion } from 'framer-motion';

interface CTASectionProps {
    title: string;
    subtitle: string;
    buttonText: string;
    buttonLink: string;
}

const CTASection: React.FC<CTASectionProps> = ({
    title = "Elevate Your Beauty Routine",
    subtitle = "Discover the luxury of GlamCS cosmetics. Where elegance meets performance.",
    buttonText = "Shop Now",
    buttonLink = "/shop"
}) => {
    return (
        <section className="flex flex-col items-center justify-center bg-white py-16 px-4">
            <motion.h2
                className="text-4xl font-bold text-orange-600 mb-4 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {title}
            </motion.h2>
            <motion.p
                className="text-lg text-gray-700 mb-8 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {subtitle}
            </motion.p>
            <motion.a
                href={buttonLink}
                className="bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {buttonText}
            </motion.a>
        </section>
    );
};

export default CTASection;