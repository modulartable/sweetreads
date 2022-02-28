import { createSlice } from "@reduxjs/toolkit";


const initialState = [
  {
    name: "Donut",
    price: 1.50,
    quantity: 1,
  },
  {
    name: "Scone",
    price: 2,
    quantity: 1,
  },
  {
    name: "Cupcake",
    price: 0.75,
    quantity: 1,
  },
  {
    name: "Bear Claw",
    price: 3,
    quantity: 1,
  },
  {
    name: "Croissant",
    price: 1,
    quantity: 1,
  },
  {
    name: "Muffin",
    price: 0.75,
    quantity: 1,
  },
  {
    name: "Coffee Cake",
    price: 2,
    quantity: 1,
  },
  {
    name: "Danish",
    price: 3,
    quantity: 1,
  },
];



export const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    increment: (state, action) => {
        //Filters the state to find the correct item then increase it's quantity property by 1
      state.filter((el) =>
        el.name === action.payload ? (el.quantity += 1) : ""
      );
    },
    decrement: (state, action) => {
      //Checks if the item's quantity is more than 0, if so reduce the quantity by 1
      state.filter((el) =>
        el.name === action.payload
          ? el.quantity > 0
            ? (el.quantity -= 1)
            : ""
          : ""
      );
    },
    resetQuantity: (state, action) => {
      //Filters the state to find the right item and then resets the item's quantity to 1
      state.filter((el) =>
        el.name === action.payload
          ? el.quantity = 1
          : ""
      );
    }
  },
});

export const { increment, decrement, resetQuantity } = itemSlice.actions;

export default itemSlice.reducer;

