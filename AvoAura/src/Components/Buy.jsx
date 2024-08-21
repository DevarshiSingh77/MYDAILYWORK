import React from 'react'

const Buy = () => {
  return (
    <div className='grid sm:grid-cols-2 bg-[#f7f5e2] p-10 gap-20 '>
        <div>
            <img className='bg-cover bg-center hover:scale-105 hover:rounded-lg transition-transform' src="https://png.pngtree.com/background/20230425/original/pngtree-healthy-avocado-and-olive-oil-with-a-black-wooden-table-picture-image_2472185.jpg" alt="" />
        </div>
        <div className='max-w-[450px]'>
            <h1 className='text-5xl text-[#af9951] tracking-tight font-semibold'>Avoaura Premium Avocado Oil</h1>
            <h2 className='text-[#173A2B] font-bold text-3xl mt-8' style={{fontFamily: 'cursive'}}>Rs. 1,500</h2>
            <p className='text-[#8b9b69] border-b-2 border-black  '>Tax included. Shipping calculated at checkout.</p>
            <h1 className='text-xl text-[#173A2B] mt-6 font-semibold'>Description</h1>
            <p className='text-[#8b9b69] text-lg mt-6'>AvoAura oil is a versatile and healthy oil extracted from Hass avocados. It has a mild, slightly nutty flavor that complements various dishes without overpowering them. Rich in monounsaturated fats and antioxidants, avocado oil is also praised for its potential health benefits, including promoting heart health and aiding in nutrient absorption.</p>
            <h1 className='text-xl text-[#173A2B] mt-6 font-semibold'>For</h1>
            <p className='text-[#8b9b69] text-lg mt-6 '>With a high smoke point, it's ideal for cooking methods like frying, roasting, and grilling.</p>
            <p className='mt-5 border-b-2 border-black'></p>
            <p className='text-[#8b9b69] mt-3'>Quantity</p>
            <div className='border border-black flex items-center justify-evenly max-w-[100px] mt-2'>
                <p>-</p>
                <p>0</p>
                <p>+</p>
            </div>
            <p className='mt-5 border-b-2 border-black'></p>
            <p className='text-[#8b9b69] mt-3'>Size</p>
            <div className='flex gap-5 items-center justify-evenly max-w-[150px] mt-2 ml-2'>
                <button className='border border-black px-3 py-2 text-[#8b9b69] hover:scale-105 transition-transform rounded-md hover:bg-[#173A2B]'>500ml</button>
               < button className='border border-black px-3 py-2 text-[#8b9b69] hover:scale-105 transition-transform rounded-md hover:bg-[#173A2B]'>200ml</button>
                
                
                
            </div>
            <h1 className='border border-black mt-6 px-44 py-2 '>Add to Cart</h1>
        </div>
      
    </div>
  )
}

export default Buy
