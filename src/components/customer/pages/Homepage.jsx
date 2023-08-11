import React, { useEffect } from 'react';
import './homepage.css';
import PICHA from '../../../assets/PICHA.jpg';
import logo from '../../../assets/logo1.png';
import burger from '../../../assets/burger.jpg';
import NavC from '../../utility/NavC';
import { useNavigate } from 'react-router-dom';


export default function Homepage({ user, setUser, setLogin, login }) {
  const [shops, setShops] = React.useState([])

  useEffect(() => {
    fetch('https://backendfood-co7z.onrender.com/restaurants')
    .then(res => res.json())
    .then(data => setShops(data))
  },[])
  
  
  // Mock user's current location
  const currentLocation = "Ngong Road, NRB 📍";
  const restaurants = [
    {
        id: 1,
        name: "Orient",
        image: "burger.jpg",
        rating: 4.5,
        estimatedDistance: "cultural",
        liked: false,
      },
      {
        id: 2,
        name: "Bougie",
        image: "burger.jpg",
        rating: 4.2,
        estimatedDistance: "luxury",
        liked: true,
      },

      {
        id: 3,
        name: "WaySub",
        image: "burger.jpg",
        rating: 4.2,
        estimatedDistance: "urban",
        liked: true,
      }
];
  const food = [
    {
        id: 1,
        name: "Scotch Eggs",
        image: "burger.jpg",
        rating: 3.3,
        estimatedDistance: "Burgers",
        liked: false,
      },
      {
        id: 2,
        name: "Salmon Nigiri",
        image: "burger.jpg",
        rating: 4.2,
        estimatedDistance: "Fries",
        liked: true,
      },

      {
        id: 3,
        name: "Peking Duck",
        image: "burger.jpg",
        rating: 4.2,
        estimatedDistance: "Sides",
        liked: true,
      }
];
const nav = useNavigate()
function move(id){
  localStorage.getItem('restaurantId')?localStorage.removeItem('restaurantId'):null
  localStorage.setItem('restaurantId', id)
  nav('/customer/menu')
}
function move2(id){
  localStorage.getItem('foodId')?localStorage.removeItem('restaurantId'):null
  localStorage.setItem('foodId', id)
  nav('/customer/food')
}

  const display = restaurants.map((res, index)=>{
    return(<div className="gTopHome" onClick={()=>move(res.id)}>
      <div className="gTopComp" key={index+res.name}>
        <img className='gHomePic' src={burger} alt="" />
      </div>
      <div className="gBottomComp">
        <div className="gBotLeft">
          <h2>{res.name}</h2>
          <p>Rating: <span>{res.rating}</span></p>
          <p>Ambience: <span>{res.estimatedDistance}</span></p>
        </div>
         {/* <div className="gBotRight" style={{display:'flex', flexDirection:'column', alignItems:'right', justifyContent:'center'}}>
          <span className="material-symbols-sharp"  style={{color:'white', fontSize:'40px'}}>
          favorite
          </span>
         </div> */}
      </div>
    </div>)
  })
  const foods = food.map((res, index)=>{
    return(<div className="gTopHome" onClick={()=>move2(res.id)}>
      <div className="gTopComp" key={index+res.name}>
        <img className='gHomePic' src={burger} alt="" />
      </div>
      <div className="gBottomComp">
        <div className="gBotLeft">
          <h2>{res.name}</h2>
          <p>Rating: <span>{res.rating}</span></p>
          <p>Category: <span>{res.estimatedDistance}</span></p>
        </div>
      </div>
    </div>)
  })

const handleLikeRestaurant = (restaurantId) => {
    // Implement your logic for liking/unliking a restaurant here
    // For example, you can update the liked property of the restaurant object in the state
  };

  const [dataset, setDataset] = React.useState([]);
  const [disp, setDisp] = React.useState(false);

  function search(value){
    console.log(value)
    let search = shops.filter((shop)=>{
      return shop.name.toLowerCase().includes(value.toLowerCase())
    })
    console.log(search)  
    setDataset(search)
  }

  const results = dataset.map((e, i)=>{
    return(
      <div className="rSearch" key={i+e.name+'search'} onClick={()=>move(e.id)}>
        <div className="sideSearch" key={1+e.name+'result'}>{e.name}</div>
        <div className="sideSearch" key={2+e.name+'result'}>{e.ambience}</div>
        <div className="sideSearch" key={3+e.name+'result'}>{e.cuisine}</div>
      </div>
    )
  })

  return (
    <div id='gHomeContainer'>
      <NavC/>
      <div className="gHomeContent" >
        <div className="gHomeBanner">
          <div id="eSearch">
            <input id="eButton1" type="text" value={currentLocation} />
            <input onClick={()=>setDisp(true)} id="eButton2" type="text" placeholder="Search for a restaurant" onChange={(e)=>search(e.target.value)} />
            <input id="eButton3" type='submit' value='search' />
          </div>
          {disp && <div className="HomeSearch">
              {results}
            </div>}
        </div>
        <div className="gHomeMain" onClick={()=>setDisp(false)}>
          <div className="gHomePart" onClick={()=>setDisp(false)}>
            <h1 id="gH1" style={{textAlign:'center'}}>Featured Restaurants</h1>
            <div className="gHomeTags">
              {display}
            </div>
          </div>
          <div className="gHomePart">
            <h1 id="gH1" style={{textAlign:'center'}}>Featured Foods</h1>
            <div className="gHomeTags">
              {foods}
            </div>
          </div>
        </div>
        <div className="gHomeFooter">
          <div className="footContent">
            <img src={logo} alt="logo" />
          </div>
          <div className="footContent">
            <p>© 2023 FoodChapChap. All rights reserved.</p>
          </div>
          <div className="footContent">
            <h3>Contact</h3>
            <a href="https://github.com/edd-ie">edd-ie</a>
            <a href="https://github.com/Nkathaglow">NkathaGlow</a>
            <a href="https://github.com/elizabethkerubo02">Lizzie</a>
            <a href="https://github.com/markchweya">Chweya</a>
            <a href="https://github.com/mohasalanka">Mohasalanka</a>
          </div>
        </div>
      </div>

    </div>
  );
}