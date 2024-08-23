import React from 'react'
import { partner } from './data/Data'

const Partner = () => {
  return (
    <div className="mt-4 m-auto w-5/6 bg-[#060620e8] rounded-lg">
        <div className="grid grid-cols-5 m-auto ">
            {
                partner.map((item, index) => (
                    <div className="flex items-center justify-center my-2 " key={index}>
                        <img className='' src={item.img} alt="" />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Partner