// TotalCount.js
import React from 'react';
import trolley from "./img/trolley.png"
const TotalCount = ({ count }) => {
  return (
    <div className='cart-header'>
    <h1>Your Amazing Cart🪄</h1>
    <div className="total-count">
        
        <img src={trolley} alt="trolley" />
      {count} Products Selected
    </div>
    </div>
    
  );
}

export default TotalCount;
