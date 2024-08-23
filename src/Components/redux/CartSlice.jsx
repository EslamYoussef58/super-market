import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const cartSlice = createSlice ({
    name: "cart",
    initialState: {
        data: localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : [],
        totalItems: 0,
        totalAmounts: 0,
        deliveryCharge: 5,
    },
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.data.findIndex(
              (item) => item.id === action.payload.id
            );
            if (itemIndex >= 0) {
              state.data[itemIndex].cartQuantity += 1;
              toast.info(
                `increased ${state.data[itemIndex].name} cart quantity`,
                {
                  position: "bottom-left",
                }
              );
            } else {
              const tempProduct = { ...action.payload, cartQuantity: 1 };
              state.data.push(tempProduct);
              toast.success(`${action.payload.name} added to cart`, {
                position: "bottom-left",
              });
            }
            localStorage.setItem("data", JSON.stringify(state.data));
          },

        updateQuantity: (state, action) =>  {
            const { id, quantity } = action.payload
            const itemToUpdate = state.data.find((item) => item.id === id)

            if(itemToUpdate) {
                const validQuantity = Math.max(quantity || 1, 1)
                itemToUpdate.quantity = validQuantity
                itemToUpdate.totalPrice = itemToUpdate.price * quantity
            }
        },
        removeFromCart(state, action) {
            const nextCartItems = state.data.filter(
              (cartItem) => cartItem.id !== action.payload.id
            );
            state.data = nextCartItems;
            localStorage.setItem("data", JSON.stringify(state.data));

          },
        getCartTotal(state) {
            state.totalAmounts = state.data.reduce((cartTotal, cartItem) => {
                return (cartTotal += cartItem.totalPrice)
            }, 0)
            state.totalItems = state.data.length
        },
        clearCart(state, action) {
          state.data = [];
          localStorage.setItem("data", JSON.stringify(state.data));
        },
        
    }
})

export const { addToCart, updateQuantity, removeFromCart, getCartTotal, clearCart } = cartSlice.actions
export default cartSlice.reducer