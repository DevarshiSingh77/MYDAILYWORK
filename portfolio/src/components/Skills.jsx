
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React.js', level: 'Advanced' },
  { name: 'Tailwind CSS', level: 'Advanced' },
  { name: 'JavaScript', level: 'Intermediate' },
  { name: 'HTML & CSS', level: 'Advanced' },
  { name: 'C/C++', level: 'Intermediate' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center mb-10"
        >
          My Skills
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="bg-gray-700 p-6 rounded-lg text-center"
            >
              <h3 className="text-2xl font-semibold">{skill.name}</h3>
              <p className="mt-2 text-gray-400">{skill.level}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
