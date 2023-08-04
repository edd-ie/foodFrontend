import React, { useState, useEffect } from 'react';
import './restaurant.css';
import NavC from '../../utility/NavC';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faSearch, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import PICHA from '../../../assets/PICHA.jpg';

export default function Restaurant({ user, setUser, setLogin, login }) {
  const [restaurants, setRestaurants] = useState([]);
  const currentLocation = 
  "New York City, NY";

  useEffect(() => {
    fetch('https://backendfood-co7z.onrender.com/restaurants')
      .then((r) => r.json())
      .then((data) => {
        setRestaurants(data);
      });
  }, []);

  const handleLikeRestaurant = (restaurantId) => {
    // Implement your logic for liking/unliking a restaurant here
    // For example, you can update the liked property of the restaurant object in the state
  };

  const elements = restaurants.map((restaurant) => {
    return (
      <div className="chweResDisp" key={restaurant.id}>
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
            <div className="chweFilterComp">Classy</div>
            <div className="chweFilterComp">Romantic</div>
            <div className="chweFilterComp">Urban</div>
            <div className="chweFilterComp">Cafe/Bistro</div>
          </div>
          <div className="chweSideFilter">
            <div className="chweFilterCompHeader">Cuisine</div>
            <div className="chweFilterComp">Swahili</div>
            <div className="chweFilterComp">Chinese</div>
            <div className="chweFilterComp">Fast Food</div>
            <div className="chweFilterComp">Italian</div>
            <div className="chweFilterComp">Indian</div>
            <div className="chweFilterComp">Other</div>
          </div>
          <div className="chweSideFilter">
            <div className="chweFilterComp">Price Range</div>
            <div className="chweFilterComp">$</div>
            <div className="chweFilterComp">$$</div>
            <div className="chweFilterComp">$$$</div>
          </div>
        </div>

        <div className="chweMainContent">
          <div id="gImage" style={{ position: 'relative', marginBottom: '20px' }}>
            <img id='PICHA' src={PICHA} alt="PICHA" />
            <h3 id='mHRes'>Order your best food anytime</h3>

            {/* Overlay for search */}
            {/* <div id="gButton">
              <div className="gLocation">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <input id="gButton1" type="text" value={currentLocation} />
              </div>
              <div className="gSearch">
                <input id="gButton2" type="text" placeholder="Search restaurant, cuisine, dishes" />
                <button id="gButton3">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </div> */}
            <div id="mSearch">
              <input id="mButton1" type="text" value="Ngong Road, NRB 📍" />
              <input id="mButton2" type="text" placeholder="Search for a restaurant" />
              <input id="mButton3" type='submit' value='search' />
            </div>
          </div>
          <div className="chweDisplayRes">{elements}</div>
        </div>
      </div>
      <div className="chweFooterRes">
        <div className="chweFootPart" />
        <div className="chweFootPart" />
        <div className="chweFootPart" />
      </div>
    </div>
  );
}
