import React, { useState } from "react";
import { featureProducts } from "./data/Data";
import { Link } from "react-router-dom";
import { FaEye, FaHeart } from "react-icons/fa";
import img_cart from "../../public/assets/img/cart.gif";
import { useDispatch } from "react-redux";
import { addToCart, getCartTotal } from '../Components/redux/CartSlice'
import Modal from "./Modal";
import { Fade } from "react-reveal";
 
const FeatureProducts = () => {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const dispatch = useDispatch()
   const [qty, setQty] = useState(1)

   const handleOpen = (productId) => {
    setIsModalOpen(productId)
   }
   const handleClose = () => {
    setIsModalOpen(null)
   }

   const handleAddToCart = (product) => {
    let totalPrice = qty * product.price
    const tempProduct = {
      ...product,
      quantity: qty,
      totalPrice
    }
    dispatch(addToCart(tempProduct))
    dispatch(getCartTotal())
   }

  return (
    <div className="mt-12 m-auto w-5/6">
      <h2 className="text-center text-3xl text-[#060620e8] font-semibold ">
        Our Products
      </h2>
      <Fade right delay={100}>
      <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-6 mt-6 overflow-hidden">
        {featureProducts.map((item, index) => (
          <div className="border rounded relative" key={index}>
            <Link to="/shop">
              <img className="hover:opacity-5" src={item.img} alt="" />
              <img
                className="absolute top-0 bottom-0 -z-10 transition-opacity ease-out "
                src={item.img2}
                alt=""
              />
              <span className="bg-[#ff7300] text-white py-1 px-3 text-lg font-medium">
            ${item.price}
            </span>
            </Link>
            <div className="flex items-center  relative border-t-2 p">

              <p className="p-4  text-lg font-medium ">{item.name}</p>

              <FaEye onClick={() => handleOpen(item.id)} className="absolute right-20 text-2xl sm:block hidden cursor-pointer hover:text-[#ff7300]"/>
                <img  onClick={() => handleAddToCart(item)}
                  className="w-[40px] h-[40px] absolute cursor-pointer right-0 top-2 mr-4"
                  src={img_cart}
                  alt=""
                  />
                  </div>
            </div>

        ))}
      </div>
      </Fade>
        <Modal data={featureProducts.find((item) => item.id === isModalOpen)} isModalOpen={isModalOpen} handleClose={handleClose} />
    </div>
  );
};

export default FeatureProducts;
