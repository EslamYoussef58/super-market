import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'

const Navbar = () => {
  return (
    <div className='m-auto mt-4 w-5/6 flex items-center justify-center '>
              <div className="w-[100%]  h-[41px] flex   bg-[#ff7300] text-white rounded-[20.5px]  items-center pl-[16px] ">
          <BiSearchAlt className='w-[28px] h-[28px] mr-[8px]' />
          <input className=' w-full px-4  rounded-[20.5px] placeholder:text-white bg-transparent outline-none ' type="text" placeholder='Search Products'  />
        </div>
      </div>
  )
}

export default Navbar


