import React from 'react'

import banner_img from '../../public/assets/img/breadcumb-bg.jpg'

const Banner = () => {
  return (
    <div className='mt-20 m-auto w-5/6'>
        <div className="overflow-hidden">
                <img className='w-full rounded-xl' src={banner_img} alt="" />
            </div>
        </div>

  )
}

export default Banner