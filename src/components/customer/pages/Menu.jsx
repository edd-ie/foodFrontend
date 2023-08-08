import React, { useState, useEffect, useMemo } from 'react';
import './menu.css';
import NavC from "../../utility/NavC";

import {
  useLoadScript,
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api'



export default function Menu({ user, setUser, setLogin, login }) {
  const [menuItems, setMenuItems] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [restaurant, setRestaurant] = useState([])
  console.log("file: Menu.jsx:21 -> Menu -> restaurant:", restaurant);

  const googleAPi = 'AIzaSyB9S_inJIdpDV4MOXLAO62T1wTDX3YSpmA'

  const libraries = ['places'];

const { isLoaded } = useLoadScript({
  googleMapsApiKey: googleAPi,
  libraries: libraries,
});


  useEffect(() => {
    fetch('https://backendfood-co7z.onrender.com/restaurant/menu/1')
      .then((response) => response.json())
      .then((data) => {
        setFiltered(data);
        setMenuItems(data)
      })
      .catch((error) => console.error('Error fetching menu items:', error));

    fetch('https://backendfood-co7z.onrender.com/restaurants/1')
      .then((response) => response.json())
      .then((data) => {
        setRestaurant([data])
      })
  }, []);

  function filter(category){
    if(category === 'all'){
      setFiltered([])
      setFiltered(menuItems)
    }
    else if(category === 'other'){
      let dataset = menuItems.filter((e)=>
        e.category == null
      )
      setFiltered(dataset)
    }
    else if(category === 'allergen'){
      let dataset = menuItems.filter((e)=> !e.allergen)
      setFiltered(dataset)
    }
    else if(category === 'vegetarian'){
      setFiltered([])
      let dataset = menuItems.filter((e)=> e.vegetarian)
      setFiltered(dataset)
    }
    else{
      setFiltered([])
      let dataset = menuItems.filter((e)=>e.category === category)
      setFiltered(dataset)
    }
  }

  const elements = filtered.map((e, i)=>{
    return(
    <div className="menuContainer">
      <div className="menuPicDiv" key={i+e.name}
        style={{background: `url(${e.picture})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      >
      </div>
      <div className="menuCont" key={"menu"+e.price+i}>
        <h1 key={"menu0"+e.price+i+2}>{e.name}</h1>
        <p key={"menu1"+e.price+i+2}>{e.ingredients}</p>
        <p key={"menu2"+e.price+i+3}>Vegetarian: {e.vegetarian ? 'Yes' : 'No'}</p>
        <p key={"menu3"+e.price+i+4}>Allergen: {e.allergen ? 'Yes' : 'No'}</p>
        <p key={"menu4"+e.price+i+5}>Price: {e.price}</p>
        <div className="botMenu">
          <button>view</button>
          <button>Add to cart</button>
        </div>
      </div>
    </div>)
  })

  const showRestaurant = restaurant.map((e, i)=>{
    return(
      <div key={i+e.name} className="eResMenu">
        <div className="eResBanner"
          style={{ background: `url(${e.picture})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '85%',
        }}
        ></div>
        <div key={i+e.name+1} className="eResDetails">
          <p key={i+e.name+2}>Name: {e.name}</p>
          <p key={i+e.name+3}>Ratings: {e.ratings}</p>
          <p key={i+e.name+4}>Ambience: {e.ambience}</p>
        </div>
      </div>
    )
  })

  return (
    <div className='menu'>
      <NavC/>
      <div className='bodyMenu'>
        <div className="menuBanner">
          <div className="banner1">
            {showRestaurant}
          </div>
          <div className="map">
            {!isLoaded && <div>Loading...</div>}
            {isLoaded && 
              <Map>
                <Marker position={{ lat: -1.299825, lng: 36.787446 }} />
              </Map>
            }
          </div>
        </div>
        <div className='filter'>
          <div className="choice" onClick={()=>filter('all')}>all</div>
          <div className="choice" onClick={()=>filter('Fries')}>Fries</div>
          <div className="choice" onClick={()=>filter('allergen')}>Non-Allergen</div>
          <div className="choice" onClick={()=>filter('vegetarian')}>vegetarian</div>
          <div className="choice" onClick={()=>filter('Sides')}>Sides</div>
          <div className="choice" onClick={()=>filter('Main')}>Main</div>
          <div className="choice" onClick={()=>filter('Desserts')}>Desserts</div>
          <div className="choice" onClick={()=>filter('Burgers')}>Burgers</div>
          <div className="choice" onClick={()=>filter('other')}>others</div>
        </div>
        <div className="menuContent">
          {elements}
        </div>
      </div>
    </div>
  );
}


// function Map(){

//   let lat = 0
//   let lng = 0

//   navigator.geolocation.getCurrentPosition((position)=> {
//     lat = position.coords.latitude
//     lng = position.coords.longitude
//     console.log(lat, lng)
//   })

//   console.log(lat, lng)

  
//   const center = useMemo(() => ({ lat: -1.299825, lng: 36.787446 }), [])

  

//   return(
//     <div>
//       {/* <div className="places-container">
//         <PlacesAutocomplete setSelected={setSelected} />
//       </div> */}

//       <GoogleMap
//         zoom={16}
//         center={center}
//         mapContainerClassName="mapDisp"
//       >
//         <Marker position={{ lat: -1.299825, lng: 36.787446 }} />
//       </GoogleMap>
//     </div>
//   )

// }

function Map() {

  let lat = 0
  let lng = 0

  const [center, setCenter] = useState({ lat: -1.299825, lng: 36.787446 })

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      lat = position.coords.latitude
      lng = position.coords.longitude
      setCenter({ lat, lng })
    })
  }, [])

  console.log(lat, lng)

  

  return(
    <div>
      {/* <div className="places-container">
        <PlacesAutocomplete setSelected={setSelected} />
      </div> */}

      <GoogleMap
        zoom={16}
        center={center}
        mapContainerClassName="mapDisp"
      >
        
      </GoogleMap>
    </div>
  )

}