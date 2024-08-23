import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="mt-20 m-auto w-5/6 ">
      <h1 className="text-center text-2xl font-semibold">
        You can contact us via email
      </h1>
      <p className="text-center text-lg mt-4 font-semibold">
        An unforgettable experience awaits you. Write to us for more information
      </p>
      <div className="bg-[#f5eeee] p-10 mt-4">
        <div className="flex-wrap md:flex items-center justify-between">
          <div className="flex items-center pb-2 md:pb-0 ">
            <FaLocationDot className="mr-3 text-2xl text-[#ff7300]" />
            <div className="text-lg font-semibold">
              <span>Address : </span>
              <p>Egypt Cairo , Nasr City</p>
            </div>
          </div>
          <div className="flex items-center pb-2 md:pb-0 ">
          <MdEmail  className="mr-3 text-2xl text-[#ff7300]"/>
          <div className="text-lg font-semibold">
            <span>Email :</span>
            <p>market@help.com</p>
          </div>
          </div>
          <div className="flex items-center  pb-2 md:pb-0">
          <FaPhoneAlt className="mr-3 text-2xl text-[#ff7300]"/>
          <div className="text-lg font-semibold">
            <span>Phone :</span>
            <p>+014 234 435 11</p>
          </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="">
        <div className="  flex items-center gap-4  sm:gap-8">
          <input className="border  border-[#c0bcbc] rounded py-2 px-4 w-full md:w-[600px] outline-[#ff7300]" type="text" placeholder="Your Name" />
          <input className="border border-[#c0bcbc] rounded py-2 px-4 w-full md:w-[600px] outline-[#ff7300]" type="text" placeholder="Your Email" />
        </div>
        <div className="mt-10">
            <select className="border border-[#c0bcbc] rounded py-2 px-4 w-full outline-[#ff7300]">
              <option >Message type</option>
              <option>inquiry</option>
              <option>complaint</option>
            </select>
            <textarea className="mt-10 border border-[#c0bcbc] rounded w-full h-[200px] py-4 px-4 outline-none " placeholder="Your Message"></textarea>
          </div>
          <button className="border text-2xl bg-[#ff7300] text-white py-2 px-8 mt-4 rounded hover:bg-[#ff841f]">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
