import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import plus from "../../plus.png";
import minus from "../../minus-sign.png";
import { dollarizer } from "../item/Item";
import {
  decreaseQuantity,
  increaseQuantity,
  clearOrder,
  deleteItem,
} from "../order/orderSlice";
import deleteBtn from "../../delete.png";

const Cart = (props) => {
  //Select the state from the order slice
  const state = useSelector((state) => state.order);

  //Add useDispatch to a variable for easier-to-read code
  const dispatch = useDispatch();

  //A blank array that all of the order items are mapped to for total calculation
  let totals = [];

  //A function to add up the total of all the items in the totals array
  const totalizer = (total, num) => {
    return total + num;
  };

  //A function to check if the name and number field are filled out correctly
  const contactCheck = () => {
    if (name !== "" && number !== "") {
      setName("");
      setNumber("");
      window.alert("Your order was submitted");
      dispatch(clearOrder());
    } else {
      window.alert("Please enter your name and phone number!");
    }
  };

  //Assign props to variables for easier-to-read code
  const name = props.name;

  const setName = props.setName;

  const number = props.number;

  const setNumber = props.setNumber;

  const isDesktop = props.isDesktop;

  return (
    <div>
      <div className="cartHeader">
        <h2>Review Order</h2>
      </div>
      <div className={ isDesktop ? "cartContainer" : "cartMobile"}>
        {
          //Checks the length of the order array and displays a no items message if 0
          state.length === 0 ? (
            <div>
              <h3>There are no items in your cart...</h3>
            </div>
          ) : (
            state.map((el) => (
              <div className="cartItems">
                <div className="itemName">{el.name}</div>
                <div>
                  <img
                    id="deleteBtn"
                    src={deleteBtn}
                    alt="Delete item"
                    onClick={() => {
                      dispatch(deleteItem(el.name));
                    }}
                  />
                </div>
                <div>{dollarizer.format(el.price)}</div>
                <div className="countContainer">
                  <div style={{ padding: "5px" }}>
                    <img
                      src={minus}
                      alt="Decrease quantity"
                      onClick={() => {
                        dispatch(decreaseQuantity(el.name));
                      }}
                    />
                  </div>
                  <div style={{ padding: "5px" }}>
                    <p>{el.quantity}</p>
                  </div>
                  <div style={{ padding: "5px" }}>
                    <img
                      src={plus}
                      alt="Increase quantity"
                      onClick={() => {
                        dispatch(increaseQuantity(el.name));
                      }}
                    />
                  </div>
                </div>
              </div>
            ))
          )
        }
      </div>
      {state.length > 0 ? (
        <div>
          <div className="totalContainer">
            <div>
              <h3 className="totalHeader">Total:</h3>
            </div>
            <div style={{ display: "none" }}>
              {
                //This div is hidden since it only contains JS
                //code to map the current order state to the totals array, which allows the total below to be displayed correctly
                state.map((el) => {
                  let itemPrice = el.price * el.quantity;
                  return totals.push(itemPrice);
                })
              }
            </div>
            <div style={{ textAlign: "center" }}>
              <h3>
                {
                  //Uses USD format to display the total of all items in the cart.
                  //Runs the totals array through the totalizer function
                  dollarizer.format(totals.reduce(totalizer))
                }
              </h3>
            </div>
          </div>
          <div className="contactContainer">
            <div style={{ padding: "5px" }}>
              <input
                className="contactFields"
                placeholder="Name"
                type="text"
                alt="Enter your name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
            </div>
            <div style={{ padding: "5px" }}>
              <input
                className="contactFields"
                placeholder="Phone number"
                type="number"
                alt="Enter your number"
                value={number}
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
                required
              />
            </div>
            <div style={{ padding: "5px" }}>
              <button
                className="buttons"
                onClick={() => {
                  contactCheck();
                }}
              >
                Submit
              </button>
            </div>
            <div style={{ padding: "5px" }}>
              <button
                id="clearAll"
                onClick={() => {
                  dispatch(clearOrder());
                }}
              >
                Empty Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export { Cart };
