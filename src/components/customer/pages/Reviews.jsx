import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './review.css';

export default function Review({ user, resId }) {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [newReview, setNewReview] = useState('');

  useEffect(() => {
    // Fetch reviews
    fetch(`https://backendfood-co7z.onrender.com/restaurant/reviews/${resId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error fetching reviews: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => setReviews(data))
      .catch((error) => {
        console.error(error.message);
        setError('Error fetching reviews. Please try again later.');
      });
  }, [resId]);

  // Function to handle adding a new review
  const handleAddReview = (event) => {
    event.preventDefault();
    const newReviewData = {
      comment: newReview,
      restaurant_id: resId,
      customer_id: user.id,
      like: 0,
      dislike: 0,
      rating: 0,
      customer: user,
    };

    // Assuming you have an API endpoint for adding reviews
    fetch('https://backendfood-co7z.onrender.com/add-review', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newReviewData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the new review
        setReviews([...reviews, data]);
        // Clear the newReview input field
        setNewReview('');
      })
      .catch((error) => {
        console.error('Error adding review:', error);
      });
  };

  // Display an error message if there's an error
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="reviews-page">
      <h1>Restaurant Reviews</h1>
      {/* Form for adding a new review */}
      <form onSubmit={handleAddReview}>
        <textarea
          rows="4"
          cols="50"
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="Write your review here..."
          required
        />
        <button type="submit">Submit Review</button>
      </form>

      {/* Render reviews */}
      <div className="reviews-container">
        {reviews.map((review) => (
          <div key={review.id} className="review">
            <div className="user-info">
              <img src={review.customer.picture} alt={review.customer.username} />
              <span>{review.customer.username}</span>
            </div>
            <div className="review-message">{review.comment}</div>
            <div className="action-buttons">
              <button>Helpful</button>
              <button>Report</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Render the Review component directly here
const user = { id: 1, username: 'John Doe', picture: 'profile.jpg' };
const resId = 1;

ReactDOM.render(
  <Review user={user} resId={resId} />,
  document.getElementById('root')
);
