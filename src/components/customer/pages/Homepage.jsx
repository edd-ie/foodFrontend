import React from 'react';
import './homepage.css';
import PICHA from '../../../assets/PICHA.jpg';
import logo from '../../../assets/logo1.png';
import burger from '../../../assets/burger.jpg';
import NavC from '../../utility/NavC';


export default function Homepage({ user, setUser, setLogin, login }) {
  // Mock user's current location
  const currentLocation = "Ngong Road, NRB 📍";
  const restaurants = [
    {
        id: 1,
        name: "Restaurant A",
        image: "burger.jpg",
        rating: 4.5,
        estimatedDistance: "30 kms",
        liked: false,
      },
      {
        id: 2,
        name: "Restaurant B",
        image: "burger.jpg",
        rating: 4.2,
        estimatedDistance: "20 kms",
        liked: true,
      },

      {
        id: 2,
        name: "Restaurant B",
        image: "burger.jpg",
        rating: 4.2,
        estimatedDistance: "20 kms",
        liked: true,
      }
];

  const display = restaurants.map((res, index)=>{
    return(<div className="gTopHome">
      <div className="gTopComp" key={index+res.name}>
        <img className='gHomePic' src={burger} alt="" />
      </div>
      <div className="gBottomComp">
        <div className="gBotLeft">
          <h2>{res.name}</h2>
          <p>Rating: <span>{res.rating}</span></p>
          <p>Distance: <span>{res.estimatedDistance}</span></p>
        </div>
         <div className="gBotRight" style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
          <span className="material-symbols-sharp"  style={{color:'white'}}>
          favorite
          </span>
         </div>
      </div>
    </div>)
  })

const handleLikeRestaurant = (restaurantId) => {
    // Implement your logic for liking/unliking a restaurant here
    // For example, you can update the liked property of the restaurant object in the state
  };

  return (
    <div id='gHomeContainer'>
      <NavC/>
      <div className="gHomeContent">
        <div className="gHomeBanner">
          <div id="eSearch">
            <input id="eButton1" type="text" value={currentLocation} />
            <input id="eButton2" type="text" placeholder="Search for a restaurant" />
            <input id="eButton3" type='submit' value='search' />
          </div>
        </div>
        <div className="gHomeMain">
          <div className="gHomePart">
            <h1 id="gH1" style={{textAlign:'center'}}>Featured Restaurants</h1>
            <div className="gHomeTags">
              {display}
            </div>
          </div>
          <div className="gHomePart">
            <h1 id="gH1" style={{textAlign:'center'}}>Featured Foods</h1>
            <div className="gHomeTags">
              {display}
            </div>
          </div>
        </div>
        <div className="gHomeFooter"></div>
      </div>

    </div>
  );
}


// {/* Header */}
//       {/* <header id="gHeader">
      
//         <nav>
//           <img id='gLogo' src={logo} alt="logo" />
//           <ul>
//             <li>
//               <a href="#tracking">Tracking</a>
//             </li>
//             <li>
//               <a href="#restaurants">Restaurants</a>
//             </li>
//             <li>
//               <a href="#foodhistory">Food History</a>
//             </li>
//             <li>
//             <div id="gRestaurantDiscount">Login</div>
//             </li>

//           </ul>
//         </nav>
//       </header> */}
//       <NavC/>

//       {/* Image with Customizable Text and Search Box */}
//       <div id="gImage" style={{ position: 'relative' }}>
//         <img id='PICHA' src={PICHA} alt="PICHA" />
//         <h2>Order your best food anytime</h2>

//         {/* Overlay for search */}
//         <div id="gButton">
//           <input id="gButton1" type="text" value={currentLocation} />
//           <input id="gButton2" type="text" placeholder="Search restaurant,cuisines,dishes" />
//           <button id="gButton3">Search</button>
//         </div>
//       </div>

//       {/* Content */}
   
//       <div className="gContentHome">
//         <div className="gBody">
//         <div id="gH1">
//           <h1>Featured Restaurants</h1>
//         </div>
//           <div id="gRest">
      
//           {restaurants.map((restaurant) => (
//           <div id="gRestaurantCard" key={restaurant.id}>

            
//             <div id="gRestaurantImage">
//               <img src={burger} alt={restaurant.name} />
//             </div>
//             <div id="gRestaurantName">
//               <h3>{restaurant.name}</h3>
//             </div>
//             <div id="gRestaurantRating">Rating: {restaurant.rating}</div>
//             <div id="gRestaurantTime">Estimated Distance: {restaurant.estimatedDistance}</div>
//             <button onClick={() => handleLikeRestaurant(restaurant.id)}>
//             {restaurant.liked ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>}
//             </button>
//         </div>
//         ))}
//         </div>
      
        
//       </div>

//       <div className="gBody">
//         <div id="gH1">
//           <h1>Best Selling Foods</h1>
//         </div>
//           <div id="gRest">
      
//           {restaurants.map((restaurant) => (
//           <div id="gRestaurantCard" key={restaurant.id}>

            
//             <div id="gRestaurantImage">
//               <img src={burger} alt={restaurant.name} />
              
//             </div>
//             <div id="gRestaurantName">
//               <h3>{restaurant.name}</h3>
//             </div>
//             <div id="gRestaurantRating">Rating: {restaurant.rating}</div>
//             <div id="gRestaurantTime">Estimated Distance: {restaurant.estimatedDistance}</div>
//             <button onClick={() => handleLikeRestaurant(restaurant.id)}>
//             {restaurant.liked ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>}
//             </button>
//         </div>
//         ))}
//         </div>
      
        
//       </div>

//       <div id="gFooter">
//           <div id="gfooterLogo">
//             <img src={logo} alt="logo" />
//           </div>
//           <div id="gfooterContent">
//             <p>Contact us at: FoodChapchap@FoodChapchap.com</p>
//             <p>123 Street, New York City, NY 10001</p>
//           </div>
//           <div id="gfooterYear">
//             <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
//           </div>
//         </div>

//       </div>

  
      