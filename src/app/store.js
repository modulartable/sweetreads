import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import orderReducer from "../features/order/orderSlice";
import itemReducer from "../features/item/itemSlice";

//Sets middleware for the entire application's state to be stored in local storage

const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
    localStorage.setItem("applicationState", JSON.stringify(store.getState()));
  return result;
};

//A function to rehydrate the application's state by checking local storage
export const rehydrateStore = () => {
  if (localStorage.getItem('applicationState') !== null) {
    return JSON.parse(localStorage.getItem('applicationState'));
  } 
    return undefined;
  
};


export const store = configureStore({
  reducer: {
    order: orderReducer,
    item: itemReducer,
  },
  //The store will load with the rehydrated state stored in local storage
  preloadedState: rehydrateStore(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});
