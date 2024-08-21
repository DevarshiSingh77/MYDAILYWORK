import React, { useState } from 'react'
import { IoIosArrowDropdown } from "react-icons/io";

const Faqs = () => {
    const [ope,setOpe]=useState(false);
    const handleSubmi= () =>{
        setOpe(!ope);
    }
    const [open,setOpen]=useState(false);
    const handleSubmit= () =>{
        setOpen(!open);
    }
    const [op,setOp]=useState(false);
    const handleSubm= () =>{
        setOp(!op);
    }
    const [o,setO]=useState(false);
    const handleSub= () =>{
        setO(!o);
    }
  return (
    <div className='bg-[#e4dfc5] p-10'>
        <h1 className='text-5xl text-[#beb18e]'>Frequently Asked Questions</h1>
        <p className='border-t-2 border-black mt-8'></p>
       <div className='mt-7 flex items-center justify-end gap-[1220px]'>
       <p className=''>What is avocado oil? </p>
       <button onClick={handleSubmi}>
       <IoIosArrowDropdown />

       </button>
       </div>
       {ope && (
        <div className='mt-4'>
          <p className='text-[#4A5D23]'>
            Avocado oil is an edible/cooking oil extracted from the pulp of avocados. It is known for its mild flavour and high smoke point. Our product is Keto friendly, gluten free and plant based.
          </p>
        </div>
      )}
       <p className='border-t-2 border-black mt-8'></p>
       <div className='mt-7 flex items-center justify-end gap-[1080px]'>
       <p className=''>What is the smoke point of avocado oil?  </p>
       <button onClick={handleSubmit}>
       <IoIosArrowDropdown />

       </button>
       </div>
       {open && (
        <div className='mt-4'>
          <p className='text-[#4A5D23]'>
          Avocado oil has a high smoke point, typically around 375°F to 400°F (190°C to 204°C), making it suitable for various cooking methods, including frying and sauteing, grilling.
          </p>
        </div>
      )}
       <p className='border-t-2 border-black mt-8'></p>
       <div className='mt-7 flex items-center justify-end gap-[1205px]'>
       <p className=''>Is avocado oil healthy? </p>
       <button onClick={handleSubm}>
       <IoIosArrowDropdown />

       </button>
       </div>
       {op && (
        <div className='mt-4'>
          <p className='text-[#4A5D23]'>
          Yes, avocado oil is considered a healthy cooking oil. It is rich in monounsaturated fats, which are heart-healthy fats. It also contains vitamins E and K. It's a source of healthy fats and fits well into these diets. These fats are known for reducing blood pressure, improving cholesterol, and assisting in nutrient absorption.
          </p>
        </div>
      )}
       <p className='border-t-2 border-black mt-8'></p>
       <div className='mt-7 flex items-center justify-end gap-[1010px]'>
       <p className=''>What are the health benefits of using avocado oil? </p>
       <button onClick={handleSub}>
       <IoIosArrowDropdown />

       </button>
       </div>
       {o && (
        <div className='mt-4'>
          <p className='text-[#4A5D23]'>
           
Yes, avocado oil is considered a healthy cooking oil. It is rich in monounsaturated fats, which are heart-healthy fats. It also contains vitamins E and K. These fats are known for reducing blood pressure, improving cholesterol, and assisting in nutrient absorption
          </p>
        </div>
      )}
    </div>
  )
}

export default Faqs
