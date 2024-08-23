import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { Fade } from 'react-reveal'

const Modal = ({ isModalOpen, handleClose, data }) => {

  return (

<div className=' m-auto w-5/6 sm:block hidden'>
        
        {
            isModalOpen && (
                <div className="fixed top-0 left-0 mt-20 w-full h-full flex items-center justify-center z-50 text-black/50">
                    <Fade left delay={100}>
                    <div className="bg-white relative shadow-2xl m-20 p-10 overflow-hidden">
                    <span onClick={() => handleClose()} className='absolute top-0 right-0 p-6 cursor-pointer'>
                    <FaTimes className='text-2xl' />
                    </span>
                    <div className="flex">
                        <div className="relative">
                            <div className="h-[255px] justify-center">
                                <img className='h-full w-auto object-cover' src={data.img} alt="" />
                            </div>
                        </div>
                        
                        <div className="mt-10 font-semibold ">
                            <p className='pb-3'><span className='text-[#060620e8] mr-2 '>Name:</span> {data.name}</p>
                            <span><span className='text-[#060620e8] mr-3'>Price:</span> ${data.price}</span>
                            <p className='pt-6'>{data.description}</p>
                        </div>
                    </div>
                </div>
                    </Fade>

            </div>
            )
        }

    </div>

  )
}

export default Modal