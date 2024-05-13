// EditProducts.js
import React, { useState } from 'react';
import axios from 'axios';

const EditProducts = ({ products }) => {
  const [editedProducts, setEditedProducts] = useState(products);

  const handlePriceChange = (productId, newPrice) => {
    const updatedProducts = editedProducts.map(product => {
      if (product.id === productId) {
        return { ...product, price: newPrice };
      }
      return product;
    });
    setEditedProducts(updatedProducts);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    const updatedProducts = editedProducts.map(product => {
      if (product.id === productId) {
        return { ...product, quantity: newQuantity };
      }
      return product;
    });
    setEditedProducts(updatedProducts);
  };

  const handleUpdate = () => {
    axios.put('http://localhost:5000/update-products', editedProducts)
      .then(response => {
        console.log(response.data);
        // Handle success if needed
      })
      .catch(error => {
        console.error('Error updating products:', error);
        // Handle error if needed
      });
  };

  return (
    <div className="admin-section">
      <h3>Edit Products</h3>
      <ul>
        {editedProducts.map(product => (
          <li key={product.id}>
            {product.name}: 
            <input
              type="number"
              value={product.price}
              onChange={(e) => handlePriceChange(product.id, e.target.value)}
            />
            <input
              type="number"
              value={product.quantity}
              onChange={(e) => handleQuantityChange(product.id, e.target.value)}
              placeholder='Quantity'
            />
            
          </li>
        ))}
      </ul>
      <button onClick={handleUpdate}>Update Products</button>
    </div>
  );
}

export default EditProducts;
