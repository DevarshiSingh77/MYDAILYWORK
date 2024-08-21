// src/components/Education.jsx
import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    institution: 'Thapar University',
    degree: 'Bachelor of Science in Electronics and Computer Engineering',
    date: 'Expected Graduation: 2026',
    description: 'Currently pursuing a degree in Electronics and Computer Engineering. Focused on gaining a deep understanding of electronics, computer systems, and software development. Demonstrated strong academic performance by securing second position in the first year.',
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center mb-10"
        >
          Education
        </motion.h2>
        <div className="grid md:grid-cols-1 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="bg-gray-700 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold">{edu.institution}</h3>
              <p className="text-xl mt-2">{edu.degree}</p>
              <p className="mt-2 text-gray-400">{edu.date}</p>
              <p className="mt-4 text-gray-300">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
