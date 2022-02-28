import './App.css';
import { Header } from './features/header/Header';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { Home } from './features/home/Home';
import { Footer } from './features/footer/Footer';
import { About } from './features/about/About';
import { useMediaQuery } from './hooks/useMediaQuery';
import { Cart } from './features/cart/Cart';
import { useState } from 'react';
import { Order } from './features/order/Order';

function App() {

  //Sets state to determine layout based on screen-size

const isDesktop= useMediaQuery('(min-width: 960px)')

//Sets state for menu visibility

const [menu, setMenu] = useState(false);

//Sets states for all menu item quantity counters

const [donut, setDonut] = useState(0);

const [name, setName] = useState('');

const [number, setNumber] = useState('');


  return (
    <HashRouter>
    <div className="App">
    <Header isDesktop={isDesktop} menu={menu} setMenu={setMenu} />
 <Routes>
   <Route path="/" element={<Home isDesktop={isDesktop} />} />
    <Route path="/about" element={<About isDesktop={isDesktop} />} />
    <Route path="/cart" element={<Cart isDesktop={isDesktop} name={name} setName={setName} number={number} setNumber={setNumber} />} />
    <Route path="/order" element={<Order isDesktop={isDesktop}  />} />
</Routes> 
<Footer />
    </div>
    </HashRouter>
  );
}

export default App;
