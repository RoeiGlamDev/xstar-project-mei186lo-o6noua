import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const team: TeamMember[] = [
  {
    name: 'Sophia Chen',
    role: 'Founder & CEO',
    image: '/images/sophia.jpg',
  },
  {
    name: 'Liam Johnson',
    role: 'Head of Product Development',
    image: '/images/liam.jpg',
  },
  {
    name: 'Olivia Martinez',
    role: 'Marketing Director',
    image: '/images/olivia.jpg',
  },
];

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center text-orange-600 mb-8"
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          About GlamCS
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-700 text-center mb-12"
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At GlamCS, we believe that beauty is an experience. Founded by a passionate team of cosmetics enthusiasts, 
          we aim to revolutionize the beauty industry with innovative and luxurious products that enhance your natural 
          beauty. Our story began with a vision to create high-end cosmetics that not only look good but also feel 
          good. We are dedicated to using the finest ingredients and sustainable practices to bring you the best in 
          beauty.
        </motion.p>
        <motion.h3 
          className="text-2xl font-semibold text-orange-600 text-center mb-4"
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Our Mission
        </motion.h3>
        <motion.p 
          className="text-lg text-gray-700 text-center mb-12"
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Our mission at GlamCS is to empower individuals to express their unique beauty. We strive to create 
          cosmetics that not only elevate your look but also inspire confidence. We are committed to inclusivity, 
          sustainability, and innovation, ensuring that every product we offer embodies our values and meets the 
          highest standards of quality.
        </motion.p>
        <motion.h3 
          className="text-2xl font-semibold text-orange-600 text-center mb-4"
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Meet Our Team
        </motion.h3>
        <div className="flex flex-wrap justify-center">
          {team.map((member, index) => (
            <motion.div 
              key={index} 
              className="bg-white shadow-lg rounded-lg overflow-hidden m-4 w-64 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img src={member.image} alt={member.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h4 className="text-xl font-bold text-orange-600">{member.name}</h4>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;