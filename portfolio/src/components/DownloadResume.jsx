import React from 'react';
import { motion } from 'framer-motion';

const DownloadResume = () => {
  return (
    <section className="bg-gray-100 text-gray-900 py-20">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-6"
        >
          Interested in my work?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-lg mb-8"
        >
          You can download my resume to learn more about my experience and skills.
        </motion.p>
        <motion.a
          href="/resume.pdf" 
          download="Devarshi_Singh_Resume.pdf" 
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Download Resume
        </motion.a>
      </div>
    </section>
  );
};

export default DownloadResume;
