import { createSlice } from "@reduxjs/toolkit";
import productList from "../database/products";

const initialState = {
    items: productList,
    cartItem: localStorage.getItem("cartItem") ? JSON.parse(localStorage.getItem("cartItem")) : [],
    totalPrice: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const itemIndex = state.cartItem.findIndex(item => item.id === action.payload.id)
            if (itemIndex >= 0) {
                state.cartItem[itemIndex].cartQuantity += 1
            } else {
                const tempProduct = {...action.payload, cartQuantity: 1};
                state.cartItem.push(tempProduct);
            }

            localStorage.setItem("cartItem", JSON.stringify(state.cartItem))
        },
        decreaseItem: (state, action) => {
            const itemIndex = state.cartItem.findIndex(item => item.id === action.payload.id)
            const quantity = state.cartItem[itemIndex].cartQuantity
            if (quantity > 1) {
                state.cartItem[itemIndex].cartQuantity -= 1
            } else if (quantity === 1){
                const updatedItem = state.cartItem.filter(item => item.id != action.payload.id)
                state.cartItem = updatedItem
                
            }    
            localStorage.setItem("cartItem", JSON.stringify(state.cartItem))     
        },
        checkedOut: (state, action) => {
            state.cartItem = []
            localStorage.setItem("cartItem", JSON.stringify(state.cartItem))    
        }
        
    
    }
})

export default cartSlice.reducer;
export const { addItem, decreaseItem, checkedOut } = cartSlice.actions;