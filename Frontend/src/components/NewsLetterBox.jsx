import React from 'react'

const NewsLetterBox = () => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
    }
  return (
    <div className='text-center'>
        <p className='text-medium text-2xl text-gray-800'>Subscribe Now and Get 20% OFF</p>
        <p className='text-gray-400 mt-3'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam pariatur excepturi</p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 my-6 mx-auto border pl-3'>
            <input className='w-full sm:flex-1 outline-none'type="email" placeholder='Enter Your Email' required />
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetterBox