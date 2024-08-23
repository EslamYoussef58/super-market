import React from 'react'
import { FaBloggerB, FaShopify } from 'react-icons/fa'
import { IoHome } from 'react-icons/io5'
import { MdPermContactCalendar } from 'react-icons/md'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <div className='w-11/12 block lg:hidden  m-auto  py-[5px] rounded-md  bg-[#060620e8] z-50 fixed bottom-0 left-[50%] transform -translate-x-[50%] h-[70px]  '>
        <div className="my-4 mx-6 ">
            <div className="text-3xl flex items-center justify-between ">
            <Link className='text-[#ff7300] hover:scale-110 transition duration-300  ease-in-out' to='/'>
            <IoHome />
            </Link>
            <Link className='text-[#ff7300]' to='/shop'>
            <FaShopify />
            </Link>
            <Link className='text-[#ff7300]' to='/blog'>
            <FaBloggerB />
            </Link>
            <Link className='text-[#ff7300]' to='/contact'>
            <MdPermContactCalendar />
            </Link>
            </div>
        </div>
    </div>
  )
}
