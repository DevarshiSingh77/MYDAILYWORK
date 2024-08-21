
import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-4"
        >
          <p className="text-sm mb-2">
            &copy; {new Date().getFullYear()} Devarshi Singh. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://www.linkedin.com/in/devarshi-singh-ba17231a7/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-indigo-600" />
            </a>
            <a href="https://github.com/DevarshiSingh77" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl hover:text-gray-500" />
            </a>
        
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
