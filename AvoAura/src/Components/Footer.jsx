import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className='grid sm:grid-cols-4 bg-[#9eae7b] p-10 gap-16'>
        <div>
            <h1 className='text-3xl'>AvoAura</h1>
            <p className='mt-6 text-xl'>Deva Essentials Pvt. Ltd.</p>
            <p className='mt-6'>212, Hubtown Solaris, 2nd Floor, Andheri (E),
Mumbai-400069.
Customer Care: +91 9320412495
www.avoca.store</p>
        </div>
        <div>
            <h1 className='text-3xl'>Quick Links</h1>
            <p className='mt-6 text-lg'>Shipping Policy</p>
            <p className='text-lg'>Refund Policy</p>
            <p className='text-lg'>Privacy Policy</p>
            <p className='text-lg'>Terms of Service</p>
            <p className='text-lg'>Contact Us</p>

        </div>
        <div>
            <h1 className='text-3xl '>Let's Connect</h1>
            <div className='flex items-center justify-start gap-2 mt-6'>
            <FaFacebook size={20} />
            <FaInstagram size={20}  />


            </div>
        </div>
        <div>
            <h1 className='text-3xl'>Subscribe</h1>
            <p className='mt-6 text-lg'>Subscribe for store updates and discounts.</p>
            <div className='border-2 border-black px-2 py-2 mt-3 flex items-center justify-between gap-36'>
                <p>Email</p>
                <FaArrowRightLong />
            </div>
        </div>

      
    </div>
  )
}

export default Footer
