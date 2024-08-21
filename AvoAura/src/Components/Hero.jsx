import React from 'react'

const Hero = () => {
  return (
    <div className='grid sm:grid-cols-2 sm:h-[600px] '>
        <div className='bg-[#173A2B] pt-5 px-12 text-[#a7ba7e]   '>
          <img src="https://www.avoca.store/cdn/shop/files/favicon-light.png?v=1714136149&width=50" alt="" /> 
          <h1 className='text-4xl sm:text-5xl max-w-[540px] mt-5'>Premium Avocado Oil from the sun - kissed farms of Mexico</h1>
          <p className='mt-5 text-lg text-[#e0f1bb] sm:text-xl'>We've embarked on a journey inspired by nature's richness and the incredible benefits of avocado oil. Our brand is a celebration of purity, flavor, and well-being.</p> 

          <button className='mt-9 border-2 px-5 py-2 rounded-full border-[#e0f1bb] hover:bg-[#6f863d] hover:scale-110 transition-transform mb-8 '>Buy Now</button>
        </div>
        <div className='bg-yellow-500'>
            <img className='w-full h-full' src="https://media.istockphoto.com/id/1303865529/photo/avocado-oil-on-rustic-wooden-table.jpg?s=612x612&w=0&k=20&c=AUS9cvK0eFZZs3RXHIklPeMFfsTNVzkwHBJHNv5CgPs=" alt="" />
        </div>
      
    </div>
  )
}

export default Hero
