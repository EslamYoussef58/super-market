import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../public/assets/img/221.png'
import { BiHeart, BiUser } from 'react-icons/bi'
import { BsCart } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'
import { useSelector } from 'react-redux'
import { Sidebar } from './Sidebar'

const Header = () => {
  
  const [menu, setMenu] = useState(false)
  const { totalItems } = useSelector((item) => item.cart)

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <div className={`m-auto mt-6  w-5/6 ${sticky ? "header sticky bg-white top-0 py-6 md:py-1 z-50" : ""}`}>
      <div className="flex items-center justify-between">
        <Link to='/'>
        <img src={Logo} alt="" className='md:w-48 w-28'/>
        </Link>
        <ul className="hidden items-center gap-10 text-xl font-medium lg:flex">
          <Link to='/' className="hover:text-[#ff7300] ">Home</Link>
          <Link to='/shop' className="hover:text-[#ff7300]">Shop</Link>
          <Link to='/blog' className="hover:text-[#ff7300]">Blog</Link>
          <Link to='/contact' className="hover:text-[#ff7300]">Contact</Link>
        </ul>
        <div className='flex items-center gap-[15px] '>
          <div className="bg-[#060620e8] w-[35px] h-[35px] grid rounded-full  content-center justify-center cursor-pointer text-[#ff7300] hover:bg-[#2b2b5ee8] hover:scale-110 transition duration-300  ease-in-out">
            <BiHeart className='text-xl ' />
          </div>
          <Link to='/cart' className="bg-[#060620e8] w-[35px] h-[35px] relative rounded-full grid content-center justify-center cursor-pointer text-[#ff7300] hover:bg-[#2b2b5ee8] hover:scale-110 transition duration-300  ease-in-out ">
            <BsCart className='text-xl md:text-xl font-semibold' />
            <span className='absolute -top-5 bg-[#ff7300] text-center w-[24px] h-[24px] rounded-full text-white right-0'>{totalItems}</span>
          </Link>
          <Link to='/login' className=" bg-[#060620e8] w-[35px] h-[35px]  rounded-full grid content-center justify-center cursor-pointer text-[#ff7300] hover:bg-[#2b2b5ee8] hover:scale-110 transition duration-300  ease-in-out">
            <BiUser className='text-xl' />
          </Link>
        </div>
        </div>
        <Sidebar />
    </div>
  )
}

export default Header


