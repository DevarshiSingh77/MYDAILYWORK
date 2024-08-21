
import React from 'react';
import { motion } from 'framer-motion';
import ochiImage from '../assets/ochi.png';
import avoauraImage from '../assets/AvoAura.png';

const projects = [
  {
    title: 'Ochi Website',
    description: 'A fully responsive and visually captivating website built with React.js and Tailwind CSS. This project showcases a modern design with a focus on interactive user experiences. Key features include smooth transitions and animations, a dynamic hover effect that adds a touch of elegance, and a clean, intuitive layout that enhances usability. The website adapts seamlessly to various screen sizes, ensuring an optimal experience across devices. Designed to demonstrate advanced frontend skills, this project emphasizes creativity and technical proficiency, offering a glimpse into how engaging web interfaces can be achieved through thoughtful design and development.',
    imageUrl: ochiImage, // Replace with the actual path to your Ochi project image
  },
  {
    title: 'Avoaura - Avocado Oil Products Store',
    description: 'Avoaura is a sophisticated and aesthetically pleasing landing page designed for a store specializing in avocado oil products. Built with React.js and Tailwind CSS, this project is a perfect blend of modern web design and organic branding. The site features a rich, earthy color palette that reflects the natural essence of the brand, complemented by sleek animations that guide the user through the product offerings seamlessly. The layout is both user-friendly and visually striking, with sections dedicated to showcasing the benefits of avocado oil, customer testimonials, and a straightforward call-to-action to drive sales. Every element is crafted to provide a cohesive, immersive shopping experience that aligns with the brand’s commitment to quality and natural ingredients.',
    imageUrl: avoauraImage, // Replace with the actual path to your Avoaura project image
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center mb-10"
        >
          My Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-5 rounded-lg"
            >
              <img src={project.imageUrl} alt={project.title} className="w-full h-96 rounded-md py-8" />
              <h3 className="text-2xl font-semibold mt-4">{project.title}</h3>
              <p className="mt-2 text-lg">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
