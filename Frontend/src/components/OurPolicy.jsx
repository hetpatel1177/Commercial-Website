import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-gray-700'>
        <div >
            <img src={assets.exchange_icon} alt="" className='w-12 m-auto mb-5' />
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className='text-gray-400'>We offer Hassle free exchange policy</p>
        </div>
        <div >
            <img src={assets.quality_icon} alt="" className='w-12 m-auto mb-5' />
            <p className='font-semibold'>7 Day Return Policy</p>
            <p className='text-gray-400'>We provide 7 days free return policy</p>
        </div>
        <div >
            <img src={assets.support_img} alt="" className='w-12 m-auto mb-5' />
            <p className='font-semibold'>Best Customer Support</p>
            <p className='text-gray-400'>We Provide 24/7 Customer Support</p>
        </div>
    </div>
  )
}

export default OurPolicy