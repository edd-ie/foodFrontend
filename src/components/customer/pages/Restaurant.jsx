import React, { useState, useEffect } from 'react';
import './restaurant.css';
import NavC from '../../utility/NavC';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faSearch, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import PICHA from '../../../assets/PICHA.jpg';
import { useNavigate } from 'react-router-dom';

export default function Restaurant({ user, setUser, setLogin, login }) {
  const [restaurants, setRestaurants] = useState([]);
  console.log("file: Restaurant.jsx:10 -> Restaurant -> restaurants:", restaurants);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const currentLocation = 
  "New York City, NY";

  useEffect(() => {
    fetch('https://backendfood-co7z.onrender.com/restaurants')
      .then((r) => r.json())
      .then((data) => {
        setRestaurants(data);
        setFilteredRestaurants(data);
      });
  }, []);

  const handleLikeRestaurant = (restaurantId) => {
    // Implement your logic for liking/unliking a restaurant here
    // For example, you can update the liked property of the restaurant object in the state
  };

  function filterA(ambience){
    if (ambience !== 'all'){
      let filter = restaurants.filter(restaurant => 
      restaurant.ambience == ambience)
      setFilteredRestaurants(filter)
    }
    else if(ambience == 'other'){
      let filter = restaurants.filter(restaurant => 
     { 
      if(
        restaurant.ambience !== 'classy' ||
        restaurant.ambience !== 'urban' ||
        restaurant.ambience !== 'romantic' ||
        restaurant.ambience !== 'Fine Dining' ||
        restaurant.ambience !== 'Cafe/Bistro'
      ){
        return restaurant
      }
     }
      )
      setFilteredRestaurants(filter)
    }
    else{
      setFilteredRestaurants(restaurants)
    }
  }
  function filterB(cuisine){
    if (cuisine !== 'all'){
      let filter = restaurants.filter(restaurant => 
      restaurant.cuisine == cuisine)
      setFilteredRestaurants(filter)
    }
    else{
      setFilteredRestaurants(restaurants)
    }
  }
  function filterC(price){
    if (price !== 'all'){
      let filter = restaurants.filter(restaurant => 
      restaurant.price_range == price)
      setFilteredRestaurants(filter)
    }
    else{
      setFilteredRestaurants(restaurants)
    }
  }

  const nav = useNavigate()

  function move(id){
    localStorage.getItem('restaurantId')?localStorage.removeItem('restaurantId'):null
    localStorage.setItem('restaurantId', id)
    nav('/customer/menu')
  }

  const elements = filteredRestaurants.map((restaurant) => {
    return (
      <div className="chweResDisp" key={restaurant.id} onClick={()=>move(restaurant.id)}>
        <div
          className="chweResDispTop"
          style={{ background: `url(${restaurant.picture})`, backgroundSize: 'cover' }}
        />
        <div className="chweResDipBot">
          <div className="chweDispLeft">
            <div className="chweDispTags">{restaurant.name}</div>
            <div className="chweDispTags">Ratings: {restaurant.ratings || 'N/A'}</div>
            <div className="chweDispTags">Distance: {restaurant.latitude} kms</div>
          </div>
          <div className="chweDispRight">
            <FontAwesomeIcon
              icon={faHeart}
              className={`chweHeart ${restaurant.liked ? 'liked' : ''}`}
              onClick={() => handleLikeRestaurant(restaurant.id)}
            />
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="chweResMain">
      <NavC />
      <div className="chweBodyRes">
        <div className="chweSidBarRes">
          <div className="chweSideFilter">
            <div className="chweFilterCompHeader">Ambience</div>
            <div className="chweFilterComp" onClick={()=>filterA('all')}>All</div>
            <div className="chweFilterComp" onClick={()=>filterA('urban')}>Urban</div>
            <div className="chweFilterComp" onClick={()=>filterA('cultural')}>cultural</div>
            <div className="chweFilterComp" onClick={()=>filterA('luxury')}>luxury</div>
            <div className="chweFilterComp" onClick={()=>filterA('romantic')}>Romantic</div>
            <div className="chweFilterComp" onClick={()=>filterA('classy')}>Classy</div>
            <div className="chweFilterComp" onClick={()=>filterA('cafe/bistro')}>Cafe/Bistro</div>
            <div className="chweFilterComp" onClick={()=>filterA('Fine Dining')}>Fine Dining</div>
            <div className="chweFilterComp" onClick={()=>filterA('other')}>Other</div>
          </div>
          <div className="chweSideFilter">
            <div className="chweFilterCompHeader">Cuisine</div>
            <div className="chweFilterComp" onClick={()=>filterB('all')}>All</div>
            <div className="chweFilterComp" onClick={()=>filterB('swahili')}>Swahili</div>
            <div className="chweFilterComp" onClick={()=>filterB('chinese')}>Chinese</div>
            <div className="chweFilterComp" onClick={()=>filterB('fastFood')}>Fast Food</div>
            <div className="chweFilterComp" onClick={()=>filterB('Italian')}>Italian</div>
            <div className="chweFilterComp" onClick={()=>filterB('Indian')}>Indian</div>
            <div className="chweFilterComp" onClick={()=>filterB('other')}>Other</div>
          </div>
          <div className="chweSideFilter">
            <div className="chweFilterCompHeader">Price Range</div>
            <div className="chweFilterComp" onClick={()=>filterC('all')}>All</div>
            <div className="chweFilterComp" onClick={()=>filterC('$')}>Affordable</div>
            <div className="chweFilterComp" onClick={()=>filterC('$$')}>Mid range</div>
            <div className="chweFilterComp" onClick={()=>filterC('$$$')}>High</div>
          </div>
        </div>

        <div className="chweMainContent">
          <div id="g-Image" style={{ position: 'relative', marginBottom: '20px' }}>
            {/* <img id='imageBanner' src={PICHA} alt="PICHA" /> */}
            <h3 id='mHRes'>Order your best food anytime</h3>
            <div id="mSearch">
              <input id="mButton1" type="text" value="Ngong Road, NRB 📍" />
              <input id="mButton2" type="text" placeholder="Search for a restaurant" />
              <input id="mButton3" type='submit' value='search' />
            </div>
          </div>
          <div className="chweDisplayRes">{elements}</div>
        </div>
      </div>
      {/* <div className="chweFooterRes">
        <div className="chweFootPart" />
        <div className="chweFootPart" />
        <div className="chweFootPart" />
      </div> */}
    </div>
  );
}
