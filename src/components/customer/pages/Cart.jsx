import React, { useEffect, useState } from 'react';
import './cart.css';
import NavC from '../../utility/NavC';

export default function Cart({ user, setUser, setLogin, login, cart, setCart }) {
  let myArrayString = localStorage.getItem("cartList");
  let list = JSON.parse(myArrayString);
    
  const [ids, setIds] = useState(list);
  const [food, setFood] = useState([]);
  const [quantities, setQuantities] = useState({});
  console.log("file: Cart.jsx:9 -> Cart -> quantities:", quantities);
  const [showTime, setShowTime] = useState(false);
  const [selectedFoodIndex, setSelectedFoodIndex] = useState(null);
  const [items, setItems] = useState([]);
  const [cost, setCost] = useState(0);
  console.log("file: Cart.jsx:13 -> Cart -> items:", items);

  useEffect(() => {
    let myArrayString = localStorage.getItem("cartList");
    let list = JSON.parse(myArrayString);
    setIds(list);
  },[5])

  useEffect(() => {
    let data = []
    let totalCost = 0


    for (let x of food){
      console.log(x.name, quantities[x.id], quantities[x.id] * x.price)
      data.push({
        id: x.id,
        name: x.name,
        quantities: quantities[x.id],
        totalPrice: quantities[x.id] * x.price
      })
      totalCost += (x.price * quantities[x.id])
    }
    setCost(totalCost)
    console.log(data)
    setItems(data);
  },[quantities])

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const allFoods = await Promise.all(ids.map(id =>
          fetch(`https://backendfood-co7z.onrender.com/foods/${id}`)
            .then(response => response.json())
        ));
        setFood(allFoods);

        const initialQuantities = allFoods.reduce((acc, element) => {
          acc[element.id] = 1; 
          return acc;
        }, {});
        setQuantities(initialQuantities);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    ids? fetchFoods(): null;

  }, []);

  useEffect(() => {
    const deletedFoodIds = JSON.parse(localStorage.getItem('deletedFoodIds')) || [];
    setFood(prevFood => prevFood.filter(item => !deletedFoodIds.includes(item.id)));
  }, []);



  const handleQuantityChange = (foodId, action) => {
    setQuantities(prevQuantities => {
      const newQuantities = { ...prevQuantities };
      if (action === 'add') {
        newQuantities[foodId] = (newQuantities[foodId] || 0) + 1;
      } else if (action === 'subtract' && newQuantities[foodId] > 1) {
        newQuantities[foodId] -= 1;
      }
      return newQuantities;
    });
  };

  const handleRemoveClick = (foodId) => {
    let myArrayString = localStorage.getItem("cartList");
    let list = JSON.parse(myArrayString);
    let newList = list.filter(x=> x!=foodId)

    let myArray = JSON.stringify(newList);
    localStorage.setItem("cartList", myArray);

    let newIds = ids.filter(id => id !== foodId);
    setIds(newIds);
    let foods = food.filter(item => item.id !== foodId);
    setFood(foods);
    let item = items.filter(item => item.id !== foodId);
    setItems(item);
  };

  const viewItems = items.map((x, i)=>{
    return(
      <tr className='tabRow'>
        <td className='tabRow1'>{x.name}</td>
        <td className='tabRow2'>{x.quantities}</td>
        <td className='tabRow2'>{x.totalPrice}</td>
        <td className='tabRow3'>
          <button onClick={() => handleRemoveClick(x.id)}>remove</button>
        </td>
      </tr>
    )
  }
  )

  const elements = food.map((element, index) => (
    <div className="nCart-container">
    <div className="nOrderMain" key={element.category + index}>
      <img className='nCartImg' src={element.picture} alt={element.name} />
      <div className="nFood-details">
        <h2>{element.name}</h2>
        <p className="price">Price :
           <span>{element.price} Ksh</span>
        </p>
        <p className="category">{element.category}</p>
      <div className="bottom">
       <div className="nIcon">
          <span
            className="material-symbols-sharp"
            onClick={() => handleQuantityChange(element.id, 'subtract')}
          >
            remove
          </span>
          {quantities[element.id]}
          <span
            className="material-symbols-sharp"
            onClick={() => handleQuantityChange(element.id, 'add')}
          >
            add
          </span>
        </div>
        
        <div className="nRemove" onClick={() => handleRemoveClick(element.id)}>
        <span class="material-symbols-sharp">delete</span>Remove
        </div>
        
        </div>
      </div>
    </div>
    </div>
  ));

  return (
    <div id='eCartMain'>
      <NavC />
      <div className="eCartContainer">
        <div className="eCartCheckout">
          <div className="eCartSummary">
              <div className="sumTop">
                <h1>Receipt</h1>
              </div>
              <div className="sumMid">
                <table className="sumTable"> 
                  <thead  className="sumTabH">
                    <th>
                      <td >Food</td>
                      <td >Quantity</td>
                      <td >Price</td>
                      <td >Remove</td>
                    </th>
                  </thead>
                  <tbody>
                    {viewItems}
                  </tbody>
                </table>
                <h1>Total: {cost}</h1>
              </div>
              <div className="sumBot">
                <div className="cartCheckOut">Checkout</div>
              </div>
          </div>
        </div>
        <div className="cartHousing">
          {elements}
        </div>
      </div>
    </div>
  );
}
