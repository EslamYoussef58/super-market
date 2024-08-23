import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Vegetables_img } from './data/Data';
import { Link } from 'react-router-dom';


const Vegetables = () => {
  return (
    <div className='mt-10 m-auto w-5/6'>
        <h2 className='text-center text-3xl text-[#060620e8] font-semibold'>Vegetables</h2>
        <div className="mt-10 img pb-4">
            <Swiper
                 slidesPerView={4}
                 spaceBetween={10}
                 
                 autoplay={{
                   delay: 2500,
                   disableOnInteraction: false,
                 }}
                 pagination={{
                   clickable: true,
                 }}
                 breakpoints={{
                   350: {
                     slidesPerView: 2,
                     spaceBetween: 20,
                   },
                   668: {
                     slidesPerView: 3,
                       spaceBetween: 40,
                   },
                   1024: {
                     slidesPerView: 5,
                     spaceBetween: 50,
                   }
                   
                 }}
                //  navigation={true}
                 modules={[Autoplay,  Navigation]}
                 className="mySwiper"
            >
                {
                    Vegetables_img.map((item, index) => (
                        <SwiperSlide key={index}>
                                <Link to='/shop'>
                                <img className='mx-auto w-full hover:scale-105 transition-all duration-300 rounded-sm bg-contain' src={item.img} alt="" />
                                </Link>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    </div>
  )
}

export default Vegetables