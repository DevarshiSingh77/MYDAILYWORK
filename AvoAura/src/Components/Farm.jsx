import React from 'react'
import { FaLocationArrow } from "react-icons/fa";
const Farm = () => {
  return (
    <div className='grid p-9 sm:grid-cols-2 bg-[#173A2B]  h-[850px] w-full   '>
      <div className='bg-[#e3dfc5] p-20 '>
        <h1 className='text-4xl text-[#af9951]'>From the Heart of Avocado Farms</h1>
        <p className='mt-5 text-lg'>At AVOAURA, we take pride in bringing you the purest and most nutrient-rich avocado oil, sourced directly from the sun-kissed farms of Michoacán, Mexico. Our journey begins in these lush, fertile lands, where every avocado is carefully nurtured to perfection.</p>
        <p className='mt-5 text-lg'>Nestled in the heart of Mexico, Michoacán is renowned for its ideal climate and rich soil, making it the perfect environment for growing the highest quality avocados. Our avocados are handpicked by skilled farmers who have perfected their craft over generations.</p>
        <p className='mt-5 text-lg'>We believe in maintaining the natural goodness of avocados. Our avocados are meticulously sorted and never over-processed. This ensures that the oil extracted is 100% pure, unrefined, and retains its vibrant emerald green color, packed with essential nutrients and flavors.

</p>

     <div className='mt-10 flex items-center justify-center border-2 border-black px-3 py-2 rounded-full absolute gap-2 hover:scale-110 transition-transform cursor-pointer hover:bg-[#9EAE7B]'>
        <button className=''>Explore More</button>
       <button><FaLocationArrow /></button> 

     </div>


      </div>
      <div className='relative'  >
        <img className='hover:rounded-xl hover:scale-105 transition-transform absolute h-full bg-cover bg-center' src="https://www.agric.wa.gov.au/sites/gateway/files/Avocado%20-%20young%20orchard.JPG" alt="" />
      </div>
    </div>
  )
}

export default Farm
