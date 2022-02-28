import React from 'react'
import { Item }from '../item/Item';
import './Order.css'
import { useSelector } from "react-redux";



const Order = (props) => {


  //Assign the media query prop as a variable for cleaner code
  const isDesktop = props.isDesktop;

  //Select the state from the item slice
const state = useSelector(state => state.item)


  return (
    //Checks if the device is a desktop or not and assigns the correct class accordingly for proper styling
    <div className={isDesktop ? "orderContainer" : "orderMobile"}>
    
  {

//Maps the inventory state into item component cards with a quantity counter, price, and a add to cart button
  
state.map((el, index) =>
 <div key={index} className='items'><Item key={index} name={el.name} price={el.price} quantity={el.quantity} /></div>
  )
  }
    </div>
  );
};

export { Order };