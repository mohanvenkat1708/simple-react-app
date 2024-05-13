import React, { useState, useEffect } from 'react';

const Reviews = ({ productId }) => {
  const [reviewData, setReviewData] = useState({
    userName: '',
    rating: '',
    reviewContent: ''
  });
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    try {
      const response = await fetch(`http://localhost:5000/product/${productId}/reviews`);
      if (!response.ok) {
        throw new Error('Failed to fetch reviews');
      }
      const data = await response.json();
      setReviews(data.reviews);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [productId]); // Fetch reviews whenever productId changes

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    
    // If the input is for the rating field, ensure it's within the range of 0 to 5
    if (name === "rating") {
      // Convert the value to a number
      const rating = parseFloat(value);
  
      // Check if the value is within the range of 0 to 5
      if (rating >= 0 && rating <= 5) {
        // If it's within the range, update the state
        setReviewData({ ...reviewData, [name]: value });
      } else {
        // If it's outside the range, do not update the state
        // You can also provide feedback to the user here, e.g., display an error message
        console.error("Rating must be between 0 and 5");
      }
    } else {
      // For other fields, update the state directly
      setReviewData({ ...reviewData, [name]: value });
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/submit-review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userName: reviewData.userName,
          rating: reviewData.rating,
          reviewContent: reviewData.reviewContent,
          productId: productId
        })
      });
      const updateResponse = await fetch('http://localhost:5000/calculate-update-averages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!updateResponse.ok) {
      throw new Error('Failed to update averages');
    }

      if (!response.ok) {
        throw new Error('Failed to submit review');
      }

      // Refresh reviews after submission
      fetchReviews();

      // Clear input fields after submission
      setReviewData({
        userName: '',
        rating: '',
        reviewContent: ''
      });
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <div className="reviews">
      <h2>Customer Reviews</h2>
      <div className="review">
        {/* Iterate through existing reviews and display them */}
        {reviews.map((review, index) => (
          <div key={index}>
            <p><strong>{review.userName}</strong></p>
            <p>Rating: {review.rating}</p>
            <p>{review.reviewContent}</p>
          </div>
        ))}
      </div>
      <form className="write-review" onSubmit={handleSubmit}>
        <h2>Write Review</h2>
        <input
          type="text"
          name="userName"
          value={reviewData.userName}
          onChange={handleInputChange}
          placeholder="Your Name"
        />
        <input
          type="number"
          name="rating"
          value={reviewData.rating}
          onChange={handleInputChange}
          placeholder="Rating"
          min="1"
          max="5"
        />
        <textarea
          name="reviewContent"
          value={reviewData.reviewContent}
          onChange={handleInputChange}
          placeholder="Write your review here"
        />
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default Reviews;
