// Card.js
import React from 'react';

const Card = ({ title, count, totalValue, purchasesLastMonth, deadline, query, review }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="card-content">
        {count && <p className="count">Count: {count}</p>}
        {totalValue && <p className="total-value">Total Value: ₹{totalValue}</p>}
        {purchasesLastMonth && <p>Purchases Last Month: {purchasesLastMonth}</p>}
        {deadline && <p>Deadline: {deadline}</p>}
        {query && <p>Query: {query}</p>}
        {review && <p>Review: {review}</p>}
      </div>
    </div>
  );
}

export default Card;
