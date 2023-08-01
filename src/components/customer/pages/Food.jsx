import React, { useState, useEffect } from 'react';
import './food.css'; // Assuming 'food.css' is in the same directory as this component

const Food = () => {
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [foodDetails, setFoodDetails] = useState(null);

  const handleMinusClick = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handlePlusClick = () => {
    setQuantity(quantity + 1);
  };

  const handleVegetarianChange = (event) => {
    // Toggle the vegetarian state based on the checkbox value
    setFoodDetails({ ...foodDetails, vegetarian: event.target.value === "yes" });
  };

  useEffect(() => {
    const fetchFoodDetails = async () => {
      try {
        const response = await fetch('https://backendfood-co7z.onrender.com/foods/1');
        if (!response.ok) {
          throw new Error(`Failed to fetch food details. Status: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();

        // Convert the 'ingredients' string into an array
        data.ingredients = data.ingredients.split(',').map((ingredient) => ingredient.trim());

        setFoodDetails(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching food details:', error);
        setLoading(false);
      }
    };

    // Call the fetchFoodDetails function when the component mounts
    fetchFoodDetails();
  }, []);

  const renderFoodDetails = () => {
    if (loading) {
      return <div>Loading...</div>;
    } else if (foodDetails) {
      return (
        <div className="food-details-container">
          <div className="food-image-container">
            <img src={foodDetails.picture} alt={foodDetails.name} />
          </div>
          <div className="food-info-container">
            <div className="food-name">{foodDetails.name}</div>
            <div className="food-price">${foodDetails.price}</div>
            <div className="food-ingredients">
              {foodDetails.ingredients.map((ingredient, index) => (
                <span key={index}>{ingredient}</span>
              ))}
            </div>
            <div className="food-category">Category: {foodDetails.category}</div>
            <textarea className="specific-instructions" placeholder="Enter specific instructions..." />
            <div className="vegetarian-checkbox">
              <label htmlFor="vegetarian-yes">Vegetarian</label>
              <input
                type="radio"
                id="vegetarian-yes"
                name="vegetarian"
                value="yes"
                checked={foodDetails.vegetarian === true}
                onChange={handleVegetarianChange}
              />
              <label htmlFor="vegetarian-no">Non-Vegetarian</label>
              <input
                type="radio"
                id="vegetarian-no"
                name="vegetarian"
                value="no"
                checked={foodDetails.vegetarian === false}
                onChange={handleVegetarianChange}
              />
            </div>
            <div className="quantity-controls">
              <button className="minus-button" onClick={handleMinusClick}>
                -
              </button>
              <span className="quantity">{quantity}</span>
              <button className="plus-button" onClick={handlePlusClick}>
                +
              </button>
            </div>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        </div>
      );
    } else {
      return <div>Error fetching food details</div>;
    }
  };

  return renderFoodDetails();
};

export default Food;
