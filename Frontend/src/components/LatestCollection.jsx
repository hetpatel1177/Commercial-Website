import React, { useState, useContext, useEffect } from 'react';
import Title from './Title';
import Productitem from './Productitem';

import { ShopContext } from '../context/ShopContext'

const LatestCollection = () => {
    const {products} = useContext(ShopContext)
    const[latestproducts, setLatestProducts] = useState([]);
    useEffect(() => {
      setLatestProducts(products.slice(0,10));
    },[products])
  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut earum quae provident sit distinctio ducimus nam eveniet maxime. Sapiente quae magni autem placeat ex ducimus quos illum quidem iure minus!</p>
      </div>
      {/* {rendering products} */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
        latestproducts.map((item,index) => (
          <Productitem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
        ))}
      </div>
    </div>
  )
}

export default LatestCollection