import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NewsletterSectionProps {
  title: string;
  description: string;
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({ title, description }) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Handle email submission logic here
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="bg-white py-10 px-5">
      <div className="max-w-screen-lg mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold text-orange-500 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {description}
        </motion.p>
        
        {isSubscribed ? (
          <motion.div
            className="bg-orange-100 text-orange-600 p-4 rounded-lg mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p>Thank you for subscribing to GlamCS! Stay tuned for our latest updates and exclusive offers.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="border border-gray-300 rounded-lg py-2 px-4 mb-4 md:mb-0 md:mr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
              aria-label="Email Address"
            />
            <motion.button
              type="submit"
              className="bg-orange-500 text-white rounded-lg py-2 px-6 transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </form>
        )}
      </div>
    </section>
  );
};

export default NewsletterSection;