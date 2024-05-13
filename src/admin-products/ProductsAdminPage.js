import React, { useState, useEffect } from 'react';
import { jwtDecode } from "jwt-decode";
import { useCookies } from 'react-cookie';
import "./ProductsAdminPage.css";
import fetchVarietiesData from '../fetchVarietiesData';
import { useNavigate } from 'react-router-dom';
import VarietyCardList from './VarietyCardList';

const ProductsAdminPage = () => {
  const [varietyData, setVarietyData] = useState([]);
  const [recentPurchases, setRecentPurchases] = useState([]);
  const [deliveredPurchases, setDeliveredPurchases] = useState([]);
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['accessToken']);
  function getUserType(){
    try {
        const token = cookies.accessToken;
        if (!token) {
            navigate("/login");
        };
        
        const decodedToken = jwtDecode(token);
        const userType = decodedToken.usertype;
        console.log(decodedToken);
        return userType;
      } catch (error) {
        console.error('Error getting user Type from token:', error);
        return null;
      }
  }
  const usertype = getUserType();
  //console.log(usertype);
  if(usertype !== "admin")
  {
    navigate("/login");
  }
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchVarietiesData();
        setVarietyData(data);
      } catch (error) {
        console.error('Error fetching variety data:', error);
      }
    };

    fetchData();
  }, []);

  const handleUpdateProduct = (updatedProducts) => {
    setVarietyData(updatedProducts);
  };

  const handleAddProduct = async (newProduct) => {
    try {
      // Send a POST request to add the new product
      const response = await fetch('http://localhost:5000/add-product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });

      if (!response.ok) {
        throw new Error('Failed to add product');
      }

      // Update the local state with the new product
      setVarietyData([...varietyData, newProduct]);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const handleMarkAsDelivered = (index) => {
    // Remove the purchase from recent purchases and add it to delivered purchases
    const updatedRecentPurchases = recentPurchases.filter((purchase, i) => i !== index);
    const deliveredPurchase = recentPurchases[index];
    setRecentPurchases(updatedRecentPurchases);
    setDeliveredPurchases([...deliveredPurchases, deliveredPurchase]);
  };

  return (
    <div className="admin-page">
      <h1>Admin Panel</h1>
      <div className="admin-container">
        <VarietyCardList />
      </div>
    </div>
  );
}

export default ProductsAdminPage;
