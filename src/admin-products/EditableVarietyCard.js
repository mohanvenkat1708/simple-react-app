import React, { useState } from 'react';
import "./EditableVarietyCard.css"; // Import the CSS file

const EditableVarietyCard = ({ variety, onUpdateVariety }) => {
  const [editable, setEditable] = useState(false);
  const [updatedVariety, setUpdatedVariety] = useState(variety);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedVariety({ ...updatedVariety, [name]: value });
  };

  const handleUpdate = () => {
    onUpdateVariety(updatedVariety);
    setEditable(false);
  };

  return (
    <div className="variety-card">
      <div className="variety-card-header">
        {editable ? (
          <input
            type="text"
            name="name"
            value={updatedVariety.name}
            onChange={handleChange}
          />
        ) : (
          <p>{updatedVariety.name}</p>
        )}
        <button className="edit-button" onClick={() => setEditable(!editable)}>
          {editable ? "View" : "Edit"}
        </button>
      </div>
      <div className="variety-card-body">
        {editable ? (
          <div>
            <label htmlFor="price">Price</label>
            <input
              type="number"
              name="price"
              value={updatedVariety.price}
              onChange={handleChange}
            />
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={updatedVariety.quantity}
              onChange={handleChange}
            />
            <label htmlFor="discount">Discount</label>
            <input
              type="number"
              name="discount"
              value={updatedVariety.discount}
              onChange={handleChange}
            />
            <button onClick={handleUpdate}>Update</button>
          </div>
        ) : (
          <div>
            <p>Price: {variety.price}</p>
            <p>Quantity: {variety.quantity}</p>
            <p>Discount: {variety.discount}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditableVarietyCard;
