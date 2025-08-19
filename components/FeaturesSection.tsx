import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: 'Luxurious Formulations',
    description: 'Experience our high-quality cosmetics with luxurious formulations that enhance your natural beauty.',
    icon: <i className="fas fa-gem text-orange-500"></i>,
  },
  {
    title: 'Cruelty-Free & Vegan',
    description: 'All our products are cruelty-free and vegan, ensuring you can indulge in beauty without compromise.',
    icon: <i className="fas fa-leaf text-orange-500"></i>,
  },
  {
    title: 'Elegant Packaging',
    description: 'Our products come in elegantly designed packaging that reflects the luxury of GlamCS.',
    icon: <i className="fas fa-box text-orange-500"></i>,
  },
  {
    title: 'Personalized Consultations',
    description: 'Get personalized beauty consultations to find the perfect products tailored just for you.',
    icon: <i className="fas fa-user-circle text-orange-500"></i>,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-600 mb-8">Discover GlamCS Features</h2>
        <p className="text-lg text-gray-700 mb-12">Unveil the elegance of beauty with our exclusive features at GlamCS.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-orange-600">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;