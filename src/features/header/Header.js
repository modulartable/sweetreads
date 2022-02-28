import React from 'react';
import logo from "../../sweetreadslogov1.png"
import "./Header.css"
import { Link } from 'react-router-dom';
import cart from "../../shopping-cart.png";
import bakery from '../../pexels-bakery.jpg';
import mobilebakery from '../../pexels-bakery-mobile.jpg';
import hamburger from '../../menu.png';
import { useSelector } from 'react-redux';

const Header = (props) => {

  //Set props as variables for easier-to-read code
const isDesktop = props.isDesktop;

const menu = props.menu;

const setMenu = props.setMenu;

const state = useSelector(state => state.order);

  return ( 
  <header>
    <div className={isDesktop ? "headerContainer" : "headerMobile"}>



<img className='hero' src={isDesktop ? bakery : mobilebakery} alt="A bakery shelf with pasteries" />

<img className={isDesktop ? "logo" : "logoMobile"} src={logo} alt="Sweet Reads' logo" />



{
//Sets the nav bar as a dropdown menu if the device is not a desktop
isDesktop ?
    <nav className='nav-bar'>
  <Link alt="Home" className='nav-links' to="/">Home</Link>
  <Link alt="About" className='nav-links' to="/about">About</Link>
 <Link alt="Order" className='nav-links' to="/order">Order</Link>
  <Link alt="Shopping Cart" className='nav-links' to="/cart"><img className="cart" src={cart} alt="Shopping cart" /><p className={isDesktop ? 'orderNum' : "mobileNum"}>{state.length}</p></Link>
    </nav>
    :
    <nav className='nav-mobile'>
      <img alt="Menu" src={hamburger} id="menu" onClick={() => {menu ? setMenu(false) : setMenu (true)}} />

      { 
      menu ? 
      <div className='dropdown'>
     
     <div className='dropChild'><Link alt="Home" className='nav-links' to="/">Home</Link></div>
     <div className='dropChild'><Link alt="About" className='nav-links' to="/about">About</Link></div>
     <div className='dropChild'><Link alt="Order" className='nav-links' to="/order">Order</Link></div>
     <div className='dropChild'><Link alt="Shopping Cart" className='nav-links' to="/cart"><img className="cart" src={cart} alt="Shopping cart"/><p className={isDesktop ? 'orderNum' : "mobileNum"}>{state.length}</p></Link></div>
      
      </div>
    :
    '' 
    }
    
    </nav>
}

      </div>
  </header>
)
};

export { Header };
