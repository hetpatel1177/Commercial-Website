import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import axios from 'axios'

const Orders = () => {
  const { currency, backendUrl, token } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]) 
  const loadOrderData = async () =>{
    try {
      if(!token){
        return null
      }
      const response = await axios.post(backendUrl+'/api/order/userorders',{},{headers:{token}})
      if(response.data.success){
        let allOrdersItem = []
        response.data.orders.map((order)=>{
          order.items.map((item)=>{
            item['status']= order.status
            item['payment']=order.payment
            item['paymentMethod']=order.paymentMethod
            item['date'] = order.date
            allOrdersItem.push(item)
          })
        })
        setOrderData(allOrdersItem.reverse());
        
      }
      
    } catch (error) {
      
    }
  }
  useEffect(()=>{
    loadOrderData()
  },[token])
  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>
      <div>
        {
          orderData.map((item, index) => (
            <div
              key={index}
              className='py-6 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-6'
            >
              <div className='flex items-start gap-5 text-sm sm:text-base'>
                <img className='w-20 sm:w-24 object-cover' src={item.image[0]} alt={item.name} />
                <div className='flex flex-col gap-2'>
                  <p className='font-semibold text-gray-800'>{item.name}</p>
                  <div className='flex flex-wrap gap-3 text-base mt-1 text-gray-700'>
                    <p >{currency}{item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Size: {item.size}</p>
                  </div>
                  <p className='text-gray-500 text-sm'>
                    Date: <span className='text-gray-400'>{new Date(item.date).toDateString()}</span>
                  </p>
                  <p className='text-gray-500 text-sm'>
                    Payment: <span className='text-gray-400'>{item.paymentMethod}</span>
                  </p>
                </div>
              </div>

              <div className='flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10'>
                <div className='flex items-center gap-2'>
                  <span className='w-2 h-2 rounded-full bg-green-500'></span>
                  <p className='text-sm'>{item.status}</p>
                </div>
                <button onClick={loadOrderData} className='border border-gray-500 px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-100 transition'>
                  Track Order
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Orders;
