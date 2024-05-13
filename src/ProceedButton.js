// ProceedButton.js
import React from 'react';

const ProceedButton = ({ onClick }) => {
  return (
    <button className="proceed-button" onClick={onClick}>Proceed to Payment</button>
  );
}

export default ProceedButton;
