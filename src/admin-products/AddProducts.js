import React, { useState } from 'react';
import "./AddProducts.css";

const AddProducts = ({ onAddProduct }) => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    quantity: '',
    description: '',
    discount: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAdd = () => {
    onAddProduct(newProduct); // Invoke the onAddProduct function with the new product data
    // Reset the form fields after adding the product
    setNewProduct({
      name: '',
      price: '',
      quantity: '',
      description: '',
      discount: ''
    });
  };

  return (
    <div className="admin-section add-products-section">
      <h2>Add Products</h2>
      <form className="add-products-form">
        <label htmlFor="name">Product Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={newProduct.name}
          placeholder="Product Name"
          onChange={handleChange}
        />
        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          name="price"
          value={newProduct.price}
          placeholder="Price"
          onChange={handleChange}
        />
        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={newProduct.quantity}
          placeholder="Quantity"
          onChange={handleChange}
        />
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={newProduct.description}
          placeholder="Description"
          onChange={handleChange}
        />
        <label htmlFor="discount">Discount</label>
        <input
          type="number"
          id="discount"
          name="discount"
          value={newProduct.discount}
          placeholder="Discount"
          onChange={handleChange}
        />
        <button type="button" onClick={handleAdd}>Add Product</button>
      </form>
    </div>
  );
}

export default AddProducts;
