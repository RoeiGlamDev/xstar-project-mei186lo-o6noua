import React from 'react';
import { motion } from 'framer-motion';

interface PricingOption {
  title: string;
  price: string;
  description: string;
  features: string[];
}

const pricingOptions: PricingOption[] = [
  {
    title: 'Premium Glam Package',
    price: '$99.99',
    description: 'Indulge in our luxurious premium glam package that includes a full face makeover and personalized beauty consultation.',
    features: [
      'Full Face Makeover',
      'Personalized Beauty Consultation',
      'Luxury Skincare Sample',
      'GlamCS Gift Bag'
    ]
  },
  {
    title: 'Basic Glam Package',
    price: '$59.99',
    description: 'Experience a beautiful transformation with our basic glam package, perfect for any occasion.',
    features: [
      'Express Makeup Application',
      'Basic Skincare Prep',
      'GlamCS Lip Gloss Sample'
    ]
  },
  {
    title: 'Event Glam Package',
    price: '$149.99',
    description: 'Get ready for your special event with our tailored event glam package, which includes custom looks and long-lasting products.',
    features: [
      'Custom Makeup Look',
      'Touch-up Kit for the Event',
      'GlamCS Exclusive Eyeshadow Palette'
    ]
  }
];

const FAQ = [
  {
    question: 'What type of makeup products do you use?',
    answer: 'At GlamCS, we only use high-end, cruelty-free cosmetics to ensure the best results and safety for our clients.'
  },
  {
    question: 'How can I book an appointment?',
    answer: 'You can easily book an appointment through our website or by contacting us directly via our contact page.'
  },
  {
    question: 'Do you offer group discounts?',
    answer: 'Yes, we offer special group rates for parties and events. Please reach out for more details.'
  }
];

const PricingPage: React.FC = () => {
  return (
    <div className="bg-white text-orange-600 p-8">
      <motion.h1 
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        GlamCS Pricing Plans
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricingOptions.map((option, index) => (
          <motion.div 
            key={index} 
            className="p-5 border-2 border-orange-600 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-semibold mb-2">{option.title}</h2>
            <p className="text-xl font-bold">{option.price}</p>
            <p className="mb-4">{option.description}</p>
            <ul className="list-disc list-inside mb-4">
              {option.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-500 transition-colors duration-300">
              Book Now
            </button>
          </motion.div>
        ))}
      </div>
      <motion.h2 
        className="text-3xl font-bold text-center mt-12 mb-6"
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        Frequently Asked Questions
      </motion.h2>
      <div className="bg-orange-50 p-6 rounded-lg shadow-md">
        {FAQ.map((item, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-semibold">{item.question}</h3>
            <p className="text-gray-700">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;