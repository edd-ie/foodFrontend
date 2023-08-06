import React, { useEffect, useState } from 'react';
import './food.css';
import NavC from '../../utility/NavC';

export default function Cart({ user, setUser, setLogin, login }) {
  const [ids, setIds] = useState([1]);
  const [food, setFood] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [showTime, setShowTime] = useState(false);
  const [selectedFoodIndex, setSelectedFoodIndex] = useState(null);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const allFoods = await Promise.all(ids.map(id =>
          fetch(`https://backendfood-co7z.onrender.com/foods/1${id}`)
            .then(response => response.json())
        ));
        setFood(allFoods);

        const initialQuantities = allFoods.reduce((acc, element) => {
          acc[element.id] = 1; // Set initial quantity to 1 for each food item
          return acc;
        }, {});
        setQuantities(initialQuantities);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchFoods();
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

  const elements = food.map((element, index) => (
    <div className="gCart-container">
    <div className="gOrderMain" key={element.category + index}>
      <img src={element.picture} alt={element.name} />
      <div className="food-details">
        <h2>{element.name}</h2>
        <p className="price">
          Ksh {element.price}
        </p>
        <p className="ingredients">{element.ingredients}</p>
        <p className="category">{element.category}</p>

        <div id="gIcon">
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

        <button onClick={() => toggleShowTime(index)}>
          {selectedFoodIndex === index && showTime ? 'Hide Time' : 'Show Time'}
        </button>
        {selectedFoodIndex === index && showTime && (
          <p className="preparation-time">
            Preparation Time: 20mins{element.preparationTime}
          </p>
        )}
        <button className="add-to-cart-button">Add to Cart</button>
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
