// DeliveredPurchases.js
import React from 'react';

const DeliveredPurchases = ({ deliveredPurchases }) => {
  return (
    <div className="admin-section">
      <h3>Delivered Purchases</h3>
      <ul>
        {deliveredPurchases.map((purchase, index) => (
          <li key={index}>{purchase}</li>
        ))}
      </ul>
    </div>
  );
}

export default DeliveredPurchases;
