import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { featureProducts } from "./data/Data";
import img_cart from "../../public/assets/img/cart.gif";

import { useDispatch } from "react-redux";
import { addToCart, getCartTotal } from '../Components/redux/CartSlice'



const Shop = () => {

    const dispatch = useDispatch()
    const [qty, setQty] = useState(1)
    const [searchTerm, setSearchTerm] = useState(" ")
    const [sorting, setSorting] = useState(" ")
    const [sortedProduct, setSortedProduct] = useState(featureProducts)


    // Sort Product
  const handleChange = (e) => {
    const selectValue = e.target.value
    setSorting(selectValue)
    const tempArray = featureProducts
    if(selectValue === 'low') {
      tempArray.sort((a,b) => a.price - b.price)
    }else {
      tempArray.sort((a,b) => b.price - a.price)
    }
    setSortedProduct(tempArray)
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
    <div className="mt-20 m-auto w-5/6 ">
      <div className="flex-wrap items-center  justify-between sm:flex">
        <div className="flex relative mb-6  sm:mb-0 items-center">
          <input value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}
            className="border px-10  py-1 rounded outline-none w-[300px] border-[#060620e8]"
            type="text"
            placeholder="Search By Name"
          />
          <IoSearchSharp className="absolute left-[270px] text-xl" />
        </div>
        <div className="border w-48  rounded-sm border-[#060620e8] ">
          <select value={sorting} onChange={handleChange} className=" py-1 px-2 cursor-pointer outline-none w-full">
            <option>Default</option>

            <option  value="high">High Price</option>
            <option value="low">Low Price</option>
          </select>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-6 mt-6 overflow-hidden">
        {sortedProduct.filter((item) => {
            return searchTerm.toLowerCase() === "" ? item : item.name.toLowerCase().includes(searchTerm)
        }).map((item, index) => (
          <div className="border rounded relative" key={index}>

              <img className="hover:opacity-5" src={item.img} alt="" />
              <img
                className="absolute top-0 bottom-0 -z-10 transition-opacity ease-out "
                src={item.img2}
                alt=""
              />
              <span className="bg-[#ff7300] text-white py-1 px-3 text-lg font-semibold">
            ${item.price}
            </span>

            <div className="flex items-center  relative border-t-2 p">

              <p className="p-4  text-lg font-medium ">{item.name}</p>
                <img  onClick={() => handleAddToCart(item)}
                  className="w-[40px] h-[40px] absolute cursor-pointer right-0 top-2 mr-4"
                  src={img_cart}
                  alt=""
                  />
                  </div>
            </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Shop;
