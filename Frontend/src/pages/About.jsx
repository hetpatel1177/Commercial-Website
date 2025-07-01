import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets';
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/> 
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600' >
          <p className='text-justify'>lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          <p className='text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima facilis harum soluta maiores magnam excepturi quibusdam quasi quod cupiditate blanditiis unde maxime aut, voluptatem odio itaque ipsum aspernatur cumque expedita?</p>
          <b className='text-gray-800'>Our Mission</b>
          <p className='text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni recusandae, a, laudantium voluptates, ipsum ab commodi sunt itaque quas modi fugit fugiat repudiandae esse aliquid repellat natus omnis quam deserunt.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>
        <div className='border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
          <b>Convenience:</b>
          <p className='text-gray-600'>lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>
        <div className='border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
          <b>Exceptional Customer Services:</b>
          <p className='text-gray-600'>lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About