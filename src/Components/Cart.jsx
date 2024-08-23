import React, { useEffect } from "react";
import { PiMinus, PiPlus } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { BsTrash3 } from "react-icons/bs";

import { Link } from "react-router-dom";
import {
  clearCart,
  getCartTotal,
  removeFromCart,
  updateQuantity,
} from "../Components/redux/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const {
    data: cartProducts,
    totalAmounts,
    deliveryCharge,
  } = useSelector((state) => state.cart);

  const cartSelector = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cartSelector]);

  const removeItemFromCart = (itemId) => {
    dispatch(removeFromCart({ id: itemId }));
    dispatch(getCartTotal());
  };

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  const increaseQuantity = (itemId, currentQuantity) => {
    dispatch(updateQuantity({ id: itemId, quantity: currentQuantity + 1 }));
    dispatch(getCartTotal());
  };

  const decreaseQuantity = (itemId, currentQuantity) => {
    dispatch(updateQuantity({ id: itemId, quantity: currentQuantity - 1 }));
  };

  const emptyCartMsg = (
    <h4 className="container text-3xl text-center p-4">Your Cart is Empty</h4>
  );

  return (
    <>
      <div className="w-11/12 md:w-2/3 m-auto mt-20">
        <div className="">
          {cartProducts.length === 0 ? (
            emptyCartMsg
          ) : (
            <>
              <h2 className="text-center text-2xl font-semibold">
                Shopping cart
              </h2>
              <div>
                <div className="mt-20 grid grid-cols-5  border-b py-4 px-4 ">
                  <h3 className="text-[12px] md:text-sm font-semibold uppercase">
                    Product
                  </h3>
                  <h3 className="text-[12px] md:text-sm font-semibold uppercase">
                    Price
                  </h3>
                  <h3 className="text-[12px] md:text-sm font-semibold uppercase">
                    Quantity
                  </h3>
                  <h3 className="text-[12px] md:text-sm font-semibold uppercase">
                    Total
                  </h3>
                  <h3 className="text-[12px] md:text-sm font-semibold uppercase">
                    action
                  </h3>
                </div>
                <div className="w-full">
                  {cartProducts.map((item, index) => (
                    <div
                      className="grid grid-cols-5 py-4 border-b gap-"
                      key={index}
                    >
                      <div className="">
                        <img
                          className="w-[100px] h-[100px]"
                          src={item.img}
                          alt=""
                        />
                      </div>
                      <div className="flex items-center font-semibold ">
                        <span>${item.price}</span>
                      </div>
                      <div className="flex items-center  cursor-pointer ">
                        <button
                          onClick={() =>
                            decreaseQuantity(item.id, item.quantity)
                          }
                          className="text-sm border px-2 rounded hover:bg-[#3c4242] hover:text-white"
                        >
                          -
                        </button>
                        <div className="px-2 md:px-4  font-semibold">{item.quantity}</div>
                        <button
                          onClick={() =>
                            increaseQuantity(item.id, item.quantity)
                          }
                          className="text-sm border px-2 rounded hover:bg-[#3c4242] hover:text-white"
                        >
                          +
                        </button>
                      </div>
                      <div className="flex items-center font-semibold">${(item.price * item.quantity).toFixed(2)}</div>
                      <div className="text-center text-red-500 flex items-center">
                        <button onClick={() => removeItemFromCart(item.id)}>
                          <BsTrash3 />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <div className="text-center">
                    <button onClick={() => handleClearCart()} className="rounded-md text-red-800 tracking-wide font-normal text-xl">
                      Clear Cart
                    </button>
                  </div>
                  <div className="flex justify-around items-center border-y py-4  mt-10">
                    <span className="text-xl font-medium">Subtotal</span>
                    <span className="text-xl font-medium">${totalAmounts.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
