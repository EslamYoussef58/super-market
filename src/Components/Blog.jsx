import React from "react";
import img1 from "../../public/assets/img/blog-1.jpg";
import img_2 from "../../public/assets/img/banner-9.png";
import { Fade } from "react-reveal";

const Blog = () => {
  return (
    <div className="mt-20 m-auto w-5/6">
      <div className="flex-wrap md:flex ">
        <Fade left delay={100}>
          <div className="mx-10">
            <div className=" cursor-pointer rounded hover:bg-[#000]">
              <div className="hover:opacity-50 ">
                <img className="rounded" src={img1} alt="" />
              </div>
            </div>
          </div>
        </Fade>

        <Fade right delay={100}>
          <div className="w-full md:w-1/2 md:p-[80px] p-[40px]">
            <h1 className="text-2xl font-semibold text-[#ff7300]">
              Fresh vegetables package.
            </h1>
            <p className="mt-6 text-lg text-[#7E7C7C]">
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem passages and more recently with desktop
              publishing software like including.
            </p>
          </div>
        </Fade>
      </div>
      <div className="flex-wrap md:flex">
        <Fade right depay={1500}>
          <div className="w-full md:w-1/2 md:p-[80px] p-[40px]">
            <h1 className="text-2xl font-semibold text-[#ff7300]">
              why customers buy from us.
            </h1>
            <p className="mt-6 text-lg text-[#7E7C7C]">
              distracted by the readable content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of, as opposed to using
              'Content here, content here', making it look like readable
            </p>
            <div className="mt-4">
              <h3 className="text-[#000] font-semibold">Customer Name</h3>
              <div className="flex gap-4 mt-4 ml-2">
                <div className="w-1 h-1 rounded-full bg-[#ff7300]"></div>
                <div className="w-1 h-1 rounded-full bg-[#ff7300]"></div>
                <div className="w-1 h-1 rounded-full bg-[#ff7300]"></div>
              </div>
            </div>
          </div>
        </Fade>
        <Fade top delay={100}>
          <div className=" cursor-pointer rounded mt-8 ">
            <div className="w-[251px] sm:w-[451px] ">
              <img className="rounded h-[170px] sm:h-[300px]" src={img_2} alt="" />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Blog;
