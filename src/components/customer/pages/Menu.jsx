import React, { useState, useEffect } from 'react';
import './menu.css';
import NavC from "../../utility/NavC";
import logo from '../../../assets/logo.svg';
import directions from '../../../assets/directions.png';
import truck from '../../../assets/truck.jpg';
import chipo from '../../../assets/chipo.jpg';
import drinks from '../../../assets/drinks.jpg';
import fast from '../../../assets/fast.jpg';
import offers from '../../../assets/offers.jpg';
import burger from '../../../assets/burger.jpg';
//import {FaFavoriteBorderOutlinedIcon} from 'react-icons'

export default function Menu({ user, setUser, setLogin, login }) {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
   
    fetch('https://backendfood-co7z.onrender.com/restaurant/menu/1')
      .then((response) => response.json())
      .then((data) => setMenuItems(data))
      .catch((error) => console.error('Error fetching menu items:', error));
  }, []);

  const handleAddToCart = () => {
    
  };

  return (
    <div id="nMenuContainer">
      <header id="nHeader">
        <NavC />
      </header>

      <div id="nPhoros">
        <div id="nPhoto">
          <img src={truck} alt="truck" />
        </div>

        <div id="nPhoto1">
        <img src={directions} alt="directions" />
        </div>
        <div id="nMama">
        Mama Rock Kitchen
        </div>
        <div id="nOpen">
        Open Until 11:00pm
        </div>
        <div id="nRating">
        <span class="material-symbols-sharp">star</span>4.5
        </div>
        <div id="nBurger">
        <span class="material-symbols-sharp">fiber_manual_record</span>Burgers
        </div>
        <div id="nBugers">
        <span class="material-symbols-sharp">attach_money</span>Burgers
        </div>

      </div>



      <section id="nFoods">
        <div id="nFoodItem">
          <img src={chipo} alt="chipo" />
          <p>Chips</p>
        </div>
        <div id="nFoodItem">
          <img src={fast} alt="fast" />
          <p>Fast foods</p>
        </div>
        <div id="nFoodItem">
          <img src={drinks} alt="drinks" />
          <p>Drinks</p>
        </div>
        <div id="nFoodItem">
          <img src={burger} alt="burger" />
          <p>Burger</p>
        </div>
        <div id="nFoodItem">
          <img src={offers} alt="offers" />
          <p>Offers</p>
        </div>
        </section>
     
        <section id="nMenu">
        
        {menuItems.map((menu) => (
          <div key={menu.id} id="nMenuCard">
            <div id="nMenuImage">
              <img src={burger} alt="burger" />
            </div>
            <h3>{menu.name}</h3>
            <p>Price: ${menu.price}</p>
            {/*<FaFavoriteBorderOutlinedIcon id="icons"/>*/}
            <button onClick={handleAddToCart}>Add to Cart</button>
          </div>
        ))}
      </section>

      <footer id="gFooter">
      <div id="gfooterLogo">
        <img src={logo} alt="logo" />
      </div>
      <div id="gfooterContent">
        <p>Contact us at: FoodChapchap@FoodChapchap.com</p>
        <p>123 Street, New York City, NY 10001</p>
      </div>
      <div id="gfooterYear">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </footer>
    </div>
  );
}
