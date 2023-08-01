import React, { useState, useEffect } from 'react';
import './menu.css';
import logo from '../../../assets/logo.svg';
import pin from '../../../assets/pin.jpg';
import rest from '../../../assets/rest.jpg';
import chipo from '../../../assets/chipo.jpg';
import drinks from '../../../assets/drinks.jpg';
import fast from '../../../assets/fast.jpg';
import offers from '../../../assets/offers.jpg';
import burger from '../../../assets/burger.jpg';
import {FaFavoriteBorderOutlinedIcon} from 'react-icons'

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
        <nav>
          <img id="nLogo" src={logo} alt="logo" />
          <ul>
            <li>
              <a href="#tracking">Tracking</a>
            </li>
            <li>
              <a href="#restaurants">Restaurants</a>
            </li>
            <li>
              <a href="#foodhistory">Food History</a>
            </li>
            <li>
              <div id="gRestaurantDiscount">Login</div>
            </li>
          </ul>
        </nav>
      </header>

      <section id="nGps">
       <div>
        <img src={rest} alt="rest" />
        <p>Mama Rock Kitchen</p>
        <p>Open until 11:00p.m</p>
      </div>

      <div id="img2">
       <img src={pin} alt="pin" />
       <p>Burgers</p>
      </div>
       {/* Add more div elements as needed */}
      </section>

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
            <FaFavoriteBorderOutlinedIcon id="icons"/>
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
