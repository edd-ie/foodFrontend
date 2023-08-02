import React, { useState} from 'react';
import './cart.css';
import burger from '../../../assets/burger.jpg';
import orangecicle from '../../../assets/orangecircle.png';
import chips from '../../../assets/chips.jpeg';
import NavC from '../../utility/NavC';

export default function Cart({ user, setUser, setLogin, login }) {
    const [subtotal, setSubtotal] = useState(0);
    const serviceFee = 150; //  Define the service fee
  const total = subtotal + serviceFee; // Calculate the total


  const handleClickBurger = () => {
    setSubtotal((prevSubtotal) => prevSubtotal + 1260);
    // Here you can add more logic or update the state as needed.
  };

  const handleClickChips = () => {
    setSubtotal((prevSubtotal) => prevSubtotal + 700);
    // Here you can add more logic or update the state as needed.
  };
  return (
    <div>
      <NavC/>
        <div class="mocart1">
        <img class="img_def" src={burger} alt=""/>
        <div className='mocontent'>
            <p>Mango Masai <br /> Ksh 1260</p>
            <p>no salt</p>
            <button onClick={handleClickBurger}>
            30 min
            </button>
        </div>
        
        </div>
        <div class="mocart2">
            <img class="img_def2" src={chips} alt=""/>
            <div class ="modis">
                <p>Chips <br /> Ksh 700</p>
                <p>no salt</p>
                <button className='motymbutton' onClick={handleClickChips}>
                20 min
                </button>
            </div>
            
        </div>
            <div className='mocon1'>Subtotal: Ksh {subtotal}</div>
            <div className='mocon2'>Service Fee: {serviceFee}</div>
            <div className='mocon3'>Total: Ksh {total}</div>
            <button className='mocon4' type='submit' onClick={() => console.log('Proceed to Checkout')}>
            Proceed to Checkout
            </button>

        
        
    </div>

  );
}
