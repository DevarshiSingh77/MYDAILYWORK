import React from 'react';
import { motion } from 'framer-motion';
import myPhoto from '../assets/Resumephoto.png'; 

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-300 text-gray-900">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        
      
        <motion.div
          className="w-full md:w-1/3 mb-8 md:mb-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={myPhoto}
            alt="My Photo"
            className="rounded-full w-full h-auto"
          />
        </motion.div>

       
        <div className="w-full md:w-2/3">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg mb-4">
            I'm a frontend developer with a passion for creating dynamic and engaging user experiences using React and Tailwind CSS. My journey in web development has been driven by curiosity and a constant desire to learn and grow. Whether it's building responsive layouts, optimizing performance, or implementing interactive features, I'm always up for a challenge.
          </p>
          <p className="text-lg mb-4">
            I've honed my skills in modern JavaScript frameworks and libraries, particularly React, to develop efficient, scalable, and maintainable code. My expertise extends to utilizing Tailwind CSS to create visually appealing, responsive designs that work seamlessly across devices.
          </p>
          <p className="text-lg mb-4">
            In addition to my technical skills, I bring strong problem-solving abilities and a keen eye for detail to every project. I thrive in collaborative environments where I can contribute to team success while continuously expanding my knowledge base.
          </p>
          <p className="text-lg mb-4">
            Outside of work, I enjoy exploring the latest trends in technology and contributing to open-source projects. I believe in the power of continuous learning and am always looking for new opportunities to grow both personally and professionally.
          </p>
          <p className="text-lg">
            Let's build something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
