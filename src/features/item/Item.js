import React from "react";
import "./Item.css";
import { useDispatch } from "react-redux";
import { addToOrder } from "../../features/order/orderSlice";
import minus from "../../minus-sign.png";
import plus from "../../plus.png"
import { increment, decrement, resetQuantity } from "./itemSlice";

//A formatter to format item prices to USD
const dollarizer = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
});

const Item = (props) => {

  //Declare useDispatch as a variable for cleaner reading
  const dispatch = useDispatch();

  
  return (
    <div className="itemContainer">
      <div className="itemName">
        {props.name}
      </div>

      <div className="countContainer">
      <div style={{ padding: '5px' }}><img src={minus} alt="Decrease quantity" onClick={() => {
        dispatch(decrement(props.name))
      }}  /></div>
      <div style={{ padding: '5px' }}><p>{props.quantity}</p></div>
      <div style={{ padding: '5px' }}><img src={plus} alt="Increase quantity" onClick={() => {
        dispatch(increment(props.name))
      }} /></div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <p>Select a {props.name} at our shop!</p>
        <p>{dollarizer.format(props.price)}</p>
      </div>


      <div>
        <button
          alt="Add item to cart"
          className="buttons"
          onClick={() => {
           dispatch(addToOrder({
            name: props.name,
            price: props.price, 
            quantity: props.quantity
           })) && dispatch(resetQuantity(props.name))
          }}
        >
          Add Item
        </button>
      </div>
    </div>
  );
};

export { Item, dollarizer };
