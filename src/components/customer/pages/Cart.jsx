import React from 'react';
import './cart.css';
import burger from '../../../assets/burger.jpg';
import orangecicle from '../../../assets/orangecircle.png';
import chips from '../../../assets/chips.jpeg';

export default function Cart({ user, setUser, setLogin, login }) {
  return (
    <div>
      {/* Your cart content goes here */}
      {/* For example, you can use the previous menu items */}
      <div>
        <div id="mocart1">
        <div id="mocart">
          <img src={burger} alt=""/>
         </div>
          <span>Mango Masai</span>      
          <span>Ksh 1260</span>
          <br />
          <span>no salt</span>
          <br />
          <button onClick={() => console.log('30 min')}>
          30 min
        </button>
        </div>
        <div id="mocart2">
        <div id="mocart">
          <img src={chips} alt=""/>
         </div>
          <span>Chips</span>         
          <span>Ksh 1260</span>
          <br />
          <span>no salt</span>
          <br />
          <button onClick={() => console.log('20 min')}>
          20 min
        </button>
        </div>
        <div>Subtotal: Ksh 1960</div>
        <div>Service Fee: Ksh 150</div>
        <div>Total: Ksh 2110</div>
        <button onClick={() => console.log('Proceed to Checkout')}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}