import React from 'react'
import img from '../../public/assets/img/page-404.png'

const NotFoundPage = () => {
  return (
    <div className='mt-20 m-auto w-5/6'>
        <div className="text-center">
            <h2 className='text-3xl font-semibold'>Not Found Page</h2>
            <div className="flex items-center justify-center mt-5">
                <img src={img} alt="" />
            </div>
        </div>
    </div>
  )
}

export default NotFoundPage
