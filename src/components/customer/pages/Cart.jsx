import React, { useEffect, useState } from 'react';
import './cart.css';
import NavC from '../../utility/NavC';

export default function Cart({ user, setUser, setLogin, login }) {
  const [ids, setIds] = useState([1, 4, 6, 2]);
  const [food, setFood] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [showTime, setShowTime] = useState(false);
  const [selectedFoodIndex, setSelectedFoodIndex] = useState(null);

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

    fetchFoods();
  }, []);

  useEffect(() => {
    const deletedFoodIds = JSON.parse(localStorage.getItem('deletedFoodIds')) || [];
    setFood(prevFood => prevFood.filter(item => !deletedFoodIds.includes(item.id)));
  }, []);

  const toggleShowTime = (index) => {
    setShowTime(!showTime);
    setSelectedFoodIndex(index);
  };

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

  const handleRemoveClick = async (foodId) => {
    try {
      await fetch(`https://backendfood-co7z.onrender.com/foods/${foodId}`, {
        method: 'DELETE',
      });

      setFood(prevFood => prevFood.filter(item => item.id !== foodId));
      const deletedFoodIds = JSON.parse(localStorage.getItem('deletedFoodIds')) || [];
      localStorage.setItem('deletedFoodIds', JSON.stringify([...deletedFoodIds, foodId]));
    } catch (error) {
      console.error('Error deleting food item:', error);
    }
  };

  const elements = food.map((element, index) => (
    <div className="nCart-container">

    <div className="nOrderMain" key={element.category + index}>

      <img src={element.picture} alt={element.name} />

      <div className="nFood-details">
        <h2>{element.name}</h2>
        <p className="price">
          Ksh 
          <span className="material-symbols-sharp">radio_button_checked</span>
          {element.price}
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
    <div>
      <NavC />
      {elements}
    </div>
  );
}
