import React, { useState } from 'react'
import { fruits } from './data/Data'
import { Link } from 'react-router-dom'
import { GoPlusCircle } from 'react-icons/go'
import { useDispatch } from 'react-redux'
import { addToCart, getCartTotal } from './redux/CartSlice'

const NewFruits = () => {

  const dispatch = useDispatch()
  const [qty, setQty] = useState(1)

  const handleAddToCart = (product) => {
    let totalPrice = qty * product.price
    const tempProduct = {
      ...product,
      quantity: qty,
      totalPrice
    }
    dispatch(addToCart(tempProduct))
    dispatch(getCartTotal())
  } 


  return (
    <div className='mt-20 m-auto w-5/6 '>
        <h2 className='text-center text-3xl text-[#060620e8] font-semibold '>New fresh fruits</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 sm:grid-cols-2 mt-20">
            {
                fruits.map((item, index) => (
                    <div className="relative transform  overflow-hidden bg-[#F7F7F7] transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl mt-4 mb-4  lg:mt-0" key={index}>
                    <Link >
                    <img className=' object-cover ' src={item.img} alt="" />
                    </Link>
                    <div className=' mb-4 flex items-center justify-around'>
                    <p className='font-medium text-xl mb-2 '>{item.name}</p>
                    
                    <GoPlusCircle onClick={() => handleAddToCart(item)} className='text-4xl transition-all hover:-translate-y-2 duration-300 bg-[#ff7300] text-white rounded-full cursor-pointer'/>
                    </div>
                    <div className="text-center pb-4">
                    <span className='mr-4 font-semibold text-lg '>{item.price}</span>
                    <span className='text-lg '><del>{item.oldPrice}</del></span>
                    </div>
                    </div>
                    
                ))
            }
        </div>
    </div>
  )
}

export default NewFruits
