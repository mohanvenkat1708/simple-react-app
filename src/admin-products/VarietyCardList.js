import React, { useState, useEffect } from 'react';
import EditableVarietyCard from './EditableVarietyCard';
import AddProducts from './AddProducts';
import fetchVarietiesData from '../fetchVarietiesData';
import "./VarietyCardList.css";

const VarietyCardList = () => {
  const [varieties, setVarieties] = useState([]);
  const [showAddProducts, setShowAddProducts] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchVarietiesData();
      setVarieties(data);
    };

    fetchData();
  }, []);

  const toggleAddProducts = () => {
    setShowAddProducts(!showAddProducts);
  };

  const handleUpdateVariety = (updatedVariety) => {
    // Update the product in the backend
    fetch('http://localhost:5000/update-products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([updatedVariety]),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          // If update successful, update the state with the new product data
          setVarieties(prevVarieties => {
            return prevVarieties.map(variety => {
              if (variety.id === updatedVariety.id) {
                return updatedVariety;
              }
              return variety;
            });
          });
        } else {
          // Handle error if update fails
          console.error('Error updating product:', data.error);
        }
      })
      .catch(error => {
        console.error('Error updating product:', error);
      });
  };

  const handleAddProduct = (newProduct) => {
    // Add the new product in the backend...
    fetch('http://localhost:5000/add-product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([newProduct]),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          // If addition successful, update the state with the new product data
          setVarieties(prevVarieties => [...prevVarieties, newProduct]);
          toggleAddProducts(); // Hide the add product form
        } else {
          // Handle error if addition fails
          console.error('Error adding product:', data.error);
        }
      })
      .catch(error => {
        console.error('Error adding product:', error);
      });
  };

  
  
  return (
    <div className="variety-card-list">
      {!showAddProducts && (
        <>
          {varieties.map(variety => (
            <EditableVarietyCard
              key={variety.id}
              variety={variety}
              onUpdateVariety={handleUpdateVariety}
            />
          ))}
          <button className="add-button" onClick={toggleAddProducts}>
            Add New Product
          </button>
        </>
      )}
      {showAddProducts && <AddProducts toggleAddProducts={toggleAddProducts} onAddProduct={handleAddProduct}/>}
    </div>
  );
};

export default VarietyCardList;
