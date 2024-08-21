import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Hero = () => {
  const controls = useAnimation();
  
  
  const name = "Hi, I'm Devarshi Singh".split("");

  
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  useEffect(() => {
    
    controls.start('visible');
  }, [controls]);

  return (
    <section className="bg-gray-900 text-white h-screen flex flex-col justify-center items-center">
      <motion.div
        variants={container}
        initial="hidden"
        animate={controls}
        className="text-5xl font-bold mb-4 flex space-x-1"
      >
        {name.map((char, index) => (
          <motion.span key={index} variants={child}>
            {char}
          </motion.span>
        ))}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl font-semibold mb-4"
      >
        Frontend Developer | React & Tailwind Enthusiast
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-lg mb-8 text-gray-300"
      >
        Crafting beautiful and performant web experiences.
      </motion.p>
      <motion.a
        href="#projects"
        className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        View My Work
      </motion.a>
    </section>
  );
};

export default Hero;
