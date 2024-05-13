import React from 'react';

const CartEntry = ({ product, onRemove }) => {
  return (
    <div className="cart-entry">
      <span>Product: {product.product_id} - Quantity: {product.quantity} - Price: {product.price * product.quantity}</span>
      <button onClick={() => onRemove(product.id)}>Remove</button>
    </div>
  );
}

export default CartEntry;