import React from 'react';
import './cart.css';
import burger from '../../../assets/burger.jpg';
import orangecicle from '../../../assets/orangecircle.png';
import chips from '../../../assets/chips.jpeg';

export default function Cart({ user, setUser, setLogin, login }) {
  return (
    <div>
        <div class="mocart1">
        <img class="img_def" src={burger} alt=""/>
        <div className='mocontent'>
            <p>Mango Masai <br /> Ksh 1260</p>
            <p>no salt</p>
            <button onClick={() => console.log('30 min')}>
            30 min
            </button>
        </div>
        
        </div>
        <div class="mocart2">
            <img class="img_def2" src={chips} alt=""/>
            <div class ="modis">
                <p>Mango Masai <br /> Ksh 1260</p>
                <p>no salt</p>
                <button className='motymbutton' onClick={() => console.log('30 min')}>
                30 min
                </button>
            </div>
            
        </div>
            <div className='mocon1'>Subtotal: Ksh 1960</div>
            <div className='mocon2'>Service Fee: Ksh 150</div>
            <div className='mocon3'>Total: Ksh 2110</div>
            <button className='mocon4' onClick={() => console.log('Proceed to Checkout')}>
            Proceed to Checkout
            </button>

        
        
    </div>

  );
}


{/* <img class="img_def" src={burger} alt=""/>
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
</button> */}