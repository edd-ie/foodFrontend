import React from 'react';
import './cart.css';

export default function Cart({ user, setUser, setLogin, login }) {
  return (
    <div>
      {/* Your cart content goes here */}
      {/* For example, you can use the previous menu items */}
      <div>
        <div>
          <span>Mango Masai</span>
          <span>Ksh 1260</span>
        </div>
        <div>
          <span>Chips</span>
          <span>Ksh 700</span>
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