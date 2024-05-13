// RecentPurchases.js
import React from 'react';

const RecentPurchases = ({ recentPurchases, onMarkAsDelivered }) => {
  const handleMarkAsDelivered = (index) => {
    onMarkAsDelivered(index);
  };

  return (
    <div className="admin-section">
      <h3>Recent Purchases</h3>
      <ul>
        {recentPurchases.map((purchase, index) => (
          <li key={index}>
            {purchase}
            <button onClick={() => handleMarkAsDelivered(index)}>Mark as Delivered</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentPurchases;
