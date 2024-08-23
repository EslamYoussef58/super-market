import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='mt-20 m-auto w-1/2'>
        <p className=' border-b-4 border-stone-900 font-semibold tracking-wider w-fit m-auto p-2 b flex items-center justify-center text-2xl '>Create Account</p>
        <div className="flex flex-col items-center mt-10 gap-6">
            <input className='py-3 px-5 w-[500px] max-w-full tracking-wider mx-auto border border-[#c0c0c0] outline-none ' type="text" placeholder='First Name' />
            <input className='py-3 px-5 w-[500px] max-w-full tracking-wider mx-auto border border-[#c0c0c0] outline-none ' type="email" placeholder='Email' />
            <input className='py-3 px-5 w-[500px] max-w-full  tracking-wider mx-auto border border-[#c0c0c0] outline-none ' type="password" placeholder='Password' />
            <input className='py-3 px-5 w-[500px] max-w-full tracking-wider mx-auto border border-[#c0c0c0] outline-none ' type="password" placeholder='Confirm Password' />
            <input className='py-3 px-5 w-[500px] max-w-full tracking-wider mx-auto border border-[#c0c0c0] outline-none ' type="number" placeholder='Phone' />
        <Link className='py-3 px-5 w-[500px] flex items-center justify-center text-xl tracking-wider bg-[#ff7300] text-white max-w-full mx-auto border border-[#c0c0c0] outline-none '>Create</Link>
        <Link to='/login' className='  tracking-wide text-[14px]  underline underline-offset-2 uppercase'>return to <span className='font-[600]'>Login</span></Link>
        </div>
    </div>
  )
}

export default Register