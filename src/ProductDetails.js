// ProductDetails.js
import React from 'react';

const ProductDetails = (props) => {

    const {name, rating, price, reducedPrice, discount, about}=props;
    
    const getStarClass = (index) => {

      const integerRating= Math.floor(rating);
      return index < integerRating ? 'star yellow' : 'star';
  };

  return (
    <div className="product-details">
      <h2>{name}</h2>
      <div className="star-rating">
                {[...Array(5)].map((_, index) => (
                    <span key={index} className={getStarClass(index)}>
                        &#9733;
                    </span>
                ))}</div>
      <p>{rating} out of 5 stars</p>
      <p>Price: ₹{price}</p>
      <p>Reduced Price: ₹{reducedPrice}</p>
      <p>Discount: {discount}%</p>
      <hr />
      <p>{about}</p>
    </div>
  );
}

export default ProductDetails;
