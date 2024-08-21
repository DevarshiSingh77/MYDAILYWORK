import { motion } from 'framer-motion';
import React from 'react';

const Landpage = () => {
  return (
    <div className='relative grid sm:grid-cols-3 sm:h-[800px] h-[700px]'>
      {/* Conditionally render the order of elements based on screen size */}
      <div className='grid sm:col-span-1 bg-[url("https://img.freepik.com/premium-photo/avocado-wallpapers-fresh-avocado-wallpapers-wallpaper-cave-this-week-avocado-wallpapers-fresh-avocado-wallpapers-wallpaper-cave-this-week_906921-46.jpg")] bg-cover bg-center h-full overflow-hidden sm:order-1 order-2'>
        {/* Left background section */}
      </div>
      <div className='grid relative sm:col-span-2 bg-[url("https://images.unsplash.com/photo-1512203847871-1125bd2c903a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover bg-center h-full sm:order-2 order-1'>
        <div className='absolute top-[20%] left-1/2 transform -translate-x-1/2'>
          <h1 className='text-4xl text-[#A89F91] font-bold'>Farm to Table</h1>
          <p className='max-w-[380px] sm:text-xl mt-2 text-[#4A5D23]'>The avocados are grown in Michoacán and bottled in India.</p>
          <p className='max-w-[380px] sm:text-xl mt-4 text-[#4A5D23]'>We only source 100% pure and unrefined avocado oil. The avocados are hand sorted, never over-processed, to give you the purest emerald green oil.</p>
          <p className='max-w-[380px] sm:text-xl mt-4 text-[#4A5D23]'>We deliver products that have maximum nutritional value and minimal environmental impact.</p>
        </div>
      </div>
      <motion.img
        className='absolute top-1/2 left-1/2 transform -translate-x-[110%] -translate-y-1/2 z-10 '
        src="https://img.freepik.com/free-photo/food-condiment-with-spices-seasonings_23-2151011117.jpg"
        alt=""
      />
    </div>
  );
}

export default Landpage;
