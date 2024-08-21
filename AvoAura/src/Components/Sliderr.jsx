import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sliderr = () => {
  const settings={
    dots:false,
    infinite:true,
    speed:500,
    slidesToShow:1,
    slidesToScroll:1,
    autoplay:true,
    autoplaySpeed:2000,
    
  };
    
  return (
    <div className='grid sm:grid-cols-2 h-[700px] w-full bg-[#173A2B] '>
        <div className='slider-container p-10  mt-10  ' >
          <Slider {...settings} className='bg-[#e3dfc5] p-20 m-auto'>
            <div>
              <img src="https://www.shutterstock.com/image-photo/fresh-ripe-avocados-glass-bottle-600nw-2417442585.jpg" alt="" />
            </div>
            <div>
              <img src="https://media.istockphoto.com/id/1085380290/photo/avocado-and-avocado-oil-on-a-wooden-background.jpg?s=612x612&w=0&k=20&c=duBwX5u6aYp2QyVdK52Ne6NXW6mzk2qGjTGrtyPSvTA=" alt="" />
            </div>
            <div>
              <img src="https://media.istockphoto.com/id/1385668737/photo/avocado-oil.jpg?s=612x612&w=0&k=20&c=U6OubNGI-eXzL4nS1wxayWfRG858F_L7eTVRLe0fnJQ=" alt="" />
            </div>

          </Slider>
        </div>
        <div className=' bg-[#173A2B] p-10   '>
            <div className='bg-[#e3dfc5] z-10  p-10 rounded-xl m-auto mt-48 pb-20 hover:scale-110 transition-transform'>
                <h1 className='text-5xl text-[#af9951]'>Elevate your Nutrition</h1>
                <p className='text-xl mt-9'>Your nutrition deserves nothing but the best. Enjoy the pure, guilt-free goodness of Avoca in your daily cooking—versatile, nourishing, and always exceptional.</p>
            </div>

        

        </div>
      
    </div>
  )
}

export default Sliderr
