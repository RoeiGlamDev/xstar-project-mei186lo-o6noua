import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  photo: string;
  review: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sophia Martinez',
    photo: '/images/sophia.jpg',
    review: 'GlamCS transformed my makeup routine! The quality is unparalleled, and I love the vibrant colors. My skin feels amazing!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Olivia Johnson',
    photo: '/images/olivia.jpg',
    review: 'I was skeptical at first, but GlamCS products exceeded my expectations. The packaging is so chic, and the products work wonders!',
    rating: 4,
  },
  {
    id: 3,
    name: 'Isabella Brown',
    photo: '/images/isabella.jpg',
    review: 'Absolutely in love with GlamCS! The lipsticks are so creamy and the colors are just divine. I get compliments all the time!',
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-orange-500 mb-6">What Our Customers Say</h2>
        <div className="flex flex-wrap justify-center">
          {testimonials.map(({ id, name, photo, review, rating }) => (
            <motion.div
              key={id}
              className="bg-orange-100 rounded-lg p-6 m-4 shadow-lg transform transition-transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <img src={photo} alt={name} className="w-16 h-16 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-orange-600">{name}</h3>
              <p className="text-gray-700 mb-4">{review}</p>
              <div className="flex justify-center">
                {Array.from({ length: rating }, (_, index) => (
                  <svg key={index} className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 15.27L16.18 20 14.54 12.97 20 8.24l-8.19-.69L10 0 8.19 7.55 0 8.24l5.46 4.73L3.82 20z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;