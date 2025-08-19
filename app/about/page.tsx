import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Turner',
    role: 'Founder & CEO',
    image: '/images/sophia.jpg',
  },
  {
    name: 'Liam Johnson',
    role: 'Head of Product Development',
    image: '/images/liam.jpg',
  },
  {
    name: 'Emma Williams',
    role: 'Marketing Director',
    image: '/images/emma.jpg',
  },
];

const companyHistory = 
  GlamCS was founded in 2020 with a mission to revolutionize the cosmetics industry. 
  Our commitment to quality and innovation has set us apart, making GlamCS a trusted name 
  among beauty enthusiasts. We believe in empowering individuals to express their beauty 
  through high-quality products that are both luxurious and effective.
;

const values = [
  'Innovation: We continuously push the boundaries of cosmetics technology.',
  'Quality: Our products are formulated with the finest ingredients.',
  'Inclusivity: We celebrate beauty in all its forms, ensuring everyone feels represented.',
];

const About: React.FC = () => {
  return (
    <div className="bg-white text-orange-600 p-8">
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Welcome to GlamCS
      </motion.h1>

      <motion.p
        className="text-lg mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {companyHistory}
      </motion.p>

      <motion.h2
        className="text-3xl font-semibold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Our Values
      </motion.h2>
      <ul className="list-disc list-inside mb-6">
        {values.map((value, index) => (
          <motion.li
            key={index}
            className="text-lg mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
          >
            {value}
          </motion.li>
        ))}
      </ul>

      <motion.h2
        className="text-3xl font-semibold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        Meet Our Team
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="bg-orange-100 p-4 rounded-lg shadow-lg transform transition-transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
          >
            <img src={member.image} alt={member.name} className="w-full h-40 object-cover rounded-lg mb-2" />
            <h3 className="text-xl font-bold">{member.name}</h3>
            <p className="text-md text-orange-600">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;