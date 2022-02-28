import { createSlice } from "@reduxjs/toolkit";

const initialState = [
];

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addToOrder: (state, action) => {
      //Checks the state to see if the item being added already exists to prevent duplicates in the shopping cart
      if (state.some((el) => el.name === action.payload.name)) {
        window.alert("This item is already in your cart");
      } else {
        //If no duplicate is found add the item to the order state
        return [...state, action.payload];
      }
    },
    deleteItem: (state, action) => {
      //Filters the state to remove the item
      return state.filter((el) => el.name !== action.payload);
    },
    increaseQuantity: (state, action) => {
      state.filter((el) =>
      //Increases the item's quantity by matching the item name in the array to the item that is being clicked on
        el.name === action.payload ? (el.quantity += 1) : ""
      );
    },
    decreaseQuantity: (state, action) => {
       //Checks if the item's quantity is more than 0, if so reduce the quantity by 1
   state.filter(el => el.name === action.payload ? (el.quantity > 0 ? el.quantity -= 1 : '') : '')
    },
    clearOrder: (state) => {
      //Clears out the order array completely 
      window.alert("Your cart is now empty")
    return state = [];
    }
  },
});

export const { addToOrder, deleteItem, increaseQuantity, decreaseQuantity, clearOrder } = orderSlice.actions;

export default orderSlice.reducer;
