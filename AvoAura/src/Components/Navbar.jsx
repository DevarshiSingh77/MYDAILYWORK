import React, { useState } from 'react'
import { LiaOpencart } from "react-icons/lia";
import { FaBarsStaggered } from "react-icons/fa6";

const Navbar = () => {
    const [isMenu,setMenu]=useState(false);
    const toggleMenu=() => {
        setMenu(!isMenu);

    };
  return (
    <div className='bg-[#173A2B] p-8 text-[#a7ba7e] '>
    <div className='  flex items-center justify-between '>
        <div className='flex gap-10'>
            <h1 className='text-4xl font-semibold tracking-light  '>AVOAURA</h1>
            <button className='text-xl hidden sm:block    '>Buy Now</button>
        </div>
        <button className='mr-5 hidden sm:block  '>
        <LiaOpencart size={40} />

        </button>
        <button className='sm:hidden' onClick={toggleMenu}>
        <FaBarsStaggered size={30} />

        </button>
        </div>
        {isMenu && (
            <div className='sm:hidden flex flex-col space-y-10 mt-4 relative  '>
                <button className='text-xl  absolute '>Buy Now</button>
                <button className=' '>
        <LiaOpencart size={40} />

        </button>


            </div>
            
            
    
           
        )}
        
      
    </div>
  )
}

export default Navbar
