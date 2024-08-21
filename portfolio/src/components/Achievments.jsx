
import React from 'react';
import { motion } from 'framer-motion';

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center mb-10"
        >
          Achievements
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
          >
            <h3 className="text-2xl font-semibold">Second Position in First Year</h3>
            <p className="mt-4 text-gray-300">
              Achieved second position in my first year, showcasing strong academic performance and dedication to my studies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
          >
            <h3 className="text-2xl font-semibold">University Scholarship Recipient</h3>
            <p className="mt-4 text-gray-300">
              Awarded a scholarship from my university, recognizing my academic excellence and commitment to achieving high standards in my studies.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
