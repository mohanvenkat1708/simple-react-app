// PriceCalculator.js
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
const PriceCalculator = ({ productId, price, user_id }) => {
  const [quantity, setQuantity] = useState(1);
  const [cookies, setCookie] = useCookies(['accessToken']);
  const navigate = useNavigate();
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const calculatePrice = () => {
    return quantity * price;
  };

  const handleAddToCart = () => {
    // Make a POST request to add the product to the cart
    fetch('http://localhost:5000/add-to-cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${cookies.accessToken}`,
      },
      body: JSON.stringify({
        user_id,
        productId,
        quantity,
        price,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log('Item added to cart successfully');
          navigate('/cart');
          // Optionally, you can redirect to the cart page or show a notification
        } else {
          console.error('Failed to add item to cart:', data.error);
        }
      })
      .catch((error) => {
        console.error('Error adding item to cart:', error);
      });
  };

  return (
    <div className="price-calculator">
      <h2>Price Calculator</h2>
      <p>Quantity:</p>
      <input type="number" value={quantity} onChange={handleQuantityChange} />
      <p>Total Price: ₹{calculatePrice()}</p>
      <button disabled={calculatePrice() <= 0} onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default PriceCalculator;
