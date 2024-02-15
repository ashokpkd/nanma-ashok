import React from 'react'
import bannerImage from '../../../../assets/images/iphone.png'
import { FaApple } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5"
const HomeBanner = () => {
  return (
      <div className='w-[80vw] bg-black text-white flex flex-col-reverse sm:flex-row mt-5 '>
          <div className='sm:w-[50%] flex flex-col ml-10 mb-10 gap-3 sm:ml-16 sm:mt-12'>
              <div className='flex items-center gap-1 text-xs'><FaApple size={40}/><p>iPhone 14 Series</p> </div>
              <div className='flex text-2xl font-bold'><p>Up to 10%<br/>off Voucher</p></div>
              <div className='flex items-center gap-2'><p className=' border-b-2'>Shop Now</p><IoArrowForward size={20}/></div>
          </div>
          <div className=' mt-5 sm:w-[50%] sm:mt-5'><img src={bannerImage} alt="banner" /></div>
    </div>
  )
}

export default HomeBanner