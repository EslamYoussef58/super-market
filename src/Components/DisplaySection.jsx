import React from "react";
import banner from "../../public/assets/img/slider-2.png";




const DisplaySection = () => {
  return (
    <div className="m-auto mt-4 w-5/6">
      <div className="flex ">
          <div className="relative mb-4 overflow-hidden rounded-3xl">
            <img src={banner} alt="" />
            <p className="absolute rounded-3xl rounded-s-none p-3 text-white bg-[#ff7300] bottom-0 text-sm md:text-xl capitalize"> Fresh Vegetables</p>
          </div>
      </div>
    </div>
  );
};

export default DisplaySection;
