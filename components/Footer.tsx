import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  links: { name: string; url: string }[];
  socialMedia: { platform: string; url: string }[];
}

const Footer: React.FC<FooterProps> = ({ links, socialMedia }) => {
  return (
    <footer className="bg-white text-orange-500 p-6">
      <motion.div 
        className="container mx-auto"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4">GlamCS</h2>
        <p className="mb-4">Elevate your beauty routine with GlamCS, where luxury meets innovation in cosmetics.</p>
        
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Links</h3>
          <ul className="list-none">
            {links.map((link, index) => (
              <li key={index} className="mb-2">
                <motion.a 
                  href={link.url} 
                  className="text-orange-500 hover:text-orange-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  {link.name}
                </motion.a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold">Connect with Us</h3>
          <ul className="flex space-x-4">
            {socialMedia.map((media, index) => (
              <li key={index}>
                <motion.a 
                  href={media.url} 
                  className="text-orange-500 hover:text-orange-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  {media.platform}
                </motion.a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 border-t border-orange-200 pt-4">
          <p className="text-sm">© 2023 GlamCS. All rights reserved.</p>
          <p className="text-sm">Luxury cosmetics for the modern beauty enthusiast.</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;