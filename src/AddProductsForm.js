import React, { useState } from 'react';

const AddProductsForm = ({ onAddProduct }) => {
  const [productData, setProductData] = useState({
    name: '',
    price: '',
    quantity: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all fields are filled
    if (!productData.name || !productData.price || !productData.quantity) {
      alert('Please fill in all fields');
      return;
    }
    // Pass the new product data to the parent component
    onAddProduct(productData);
    // Reset the form
    setProductData({ name: '', price: '', quantity: '' });
  };

  return (
    <div className="add-products-form">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Product Name:
          <input type="text" name="name" value={productData.name} onChange={handleChange} />
        </label>
        <label>
          Price:
          <input type="number" name="price" value={productData.price} onChange={handleChange} />
        </label>
        <label>
          Quantity:
          <input type="number" name="quantity" value={productData.quantity} onChange={handleChange} />
        </label>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProductsForm;
