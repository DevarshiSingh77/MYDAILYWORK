import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  useEffect(() => {
    gsap.to('.header-container', {
      scrollTrigger: {
        trigger: '.header-container',
        start: 'top top',
        end: '+=100', // Adjust the scroll distance as needed
        scrub: true,
        onEnter: () => gsap.to('.header-container', { opacity: 0, display: 'none' }),
        onLeaveBack: () => gsap.to('.header-container', { opacity: 1, display: 'flex' }),
      },
    });
  }, []);

  return (
    <div className='header-container w-full bg-[#9EAE7B] p-6 flex items-center overflow-hidden justify-between gap-5'>
      <motion.h1
        className='w-[1900px] whitespace-nowrap'
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
      >
        "Exciting Update! We now deliver our premium avocado oil products to every corner of India!"
      </motion.h1>
      <motion.h1
        className='w-[1900px] whitespace-nowrap'
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
      >
        "Exciting Update! We now deliver our premium avocado oil products to every corner of India!"
      </motion.h1>
      <motion.h1
        className='w-[1900px] whitespace-nowrap'
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
      >
        "Exciting Update! We now deliver our premium avocado oil products to every corner of India!"
      </motion.h1>
    </div>
  );
};

export default Header;
