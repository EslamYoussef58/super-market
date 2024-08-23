import React from "react";
import Logo from "../../public/assets/img/221.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="mt-8 m-auto w-5/6 ">
      <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-10 py-14">
        <div>
          <img src={Logo} alt="" />
          <p>
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem passages and more recently with desktop publishing
            software like including.
          </p>
        </div>
        <div className="flex  items-center ">
          <ul className="pt-2">
            <p className="text-xl pb-2 font-medium">Quick Links</p>
            <li className="pb-2">My Account</li>
            <li className="pb-2">Shopping Cart</li>
            <li className="pb-2">Wishlist</li>

          </ul>
        </div>
        <div className="flex items-center  ">
          <ul className="pt-2">
            <p className="text-xl pb-2 font-medium">Contact</p>
            <li className="pb-2 flex items-center "><FaLocationDot className="pr-2 text-2xl text-[#ff7300]" /> Egypt Cairo , Nasr City </li>
            <li className="pb-2 flex items-center"><FaPhoneAlt className="pr-2 text-2xl text-[#ff7300]" /> +014 234 435 11</li>
            <li className="pb-2 flex items-center"><IoMdMail className="pr-2 text-2xl text-[#ff7300]"/> market@help.com</li>
          </ul>
        </div>
        <div className="flex items-center  ">
            <div className="pt-2">
              <h2 className="text-xl pb-2 font-medium">Newsletter</h2>
              <p className="pb-2">You will be notified when somthing new will be appear.</p>
              <input className="pb-2 rounded border border-[#ff7300] p-2 outline-none" type="text" placeholder="Email Address *" />
            </div>
        </div>
      </div>
      <div className=" md:flex flex-wrap items-center justify-around bg-[#060620e8] rounded p-4 text-white mb-4">
        <p>© 2024. All Rights Reserved.</p>
        <div >
        <span className="pr-4">Term and Service</span>
        <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
