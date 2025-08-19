import React from 'react';
import { motion } from 'framer-motion';

interface PricingTier {
  name: string;
  price: string;
  features: string[];
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Glam Essentials',
    price: '$29/month',
    features: [
      'Access to basic cosmetics tutorials',
      'Monthly beauty tips newsletter',
      'Exclusive members-only discounts'
    ],
  },
  {
    name: 'Glam Pro',
    price: '$59/month',
    features: [
      'All Glam Essentials features',
      'Advanced makeup application tutorials',
      'Personalized beauty consultations',
      'Early access to new product launches'
    ],
  },
  {
    name: 'Glam Luxe',
    price: '$99/month',
    features: [
      'All Glam Pro features',
      'One-on-one makeup sessions with experts',
      'VIP event invitations',
      'Luxury product samples delivered monthly'
    ],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-500 mb-8">Choose Your GlamCS Experience</h2>
        <div className="flex flex-wrap justify-center">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 m-4 transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold text-orange-500 mb-4">{tier.name}</h3>
              <p className="text-xl font-bold text-gray-800 mb-4">{tier.price}</p>
              <ul className="list-disc list-inside mb-6">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-600">{feature}</li>
                ))}
              </ul>
              <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition-colors">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;