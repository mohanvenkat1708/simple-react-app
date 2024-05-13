import React, { useState, useEffect } from 'react';
import { jwtDecode } from "jwt-decode";
import { useCookies } from 'react-cookie';
//import { redirect } from 'react-router-dom';
import './Orders.css';
import { useNavigate } from 'react-router-dom';
const Orders = () => {
  const [orderedItems, setOrderedItems] = useState([]);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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
    
    const fetchOrderedItems = async () => {
      try {
        const response = await fetch('http://localhost:5000/orders', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ user_id: 123 }) // Replace 123 with the actual user ID
        });

        if (!response.ok) {
          throw new Error('Failed to fetch ordered items');
        }

        const data = await response.json();
        setOrderedItems(data.orderedItems);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchOrderedItems();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="orders-container">
      <h1>Ordered Items</h1>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Product ID</th>
            <th>Quantity</th>
            <th>Total Cost</th>
            <th>Order Time</th>
            {console.log(orderedItems)}
          </tr>
        </thead>
        <tbody className='ordered-items-table-body'>
          {orderedItems.map(item => (
            <tr key={item.order_item_id}>
              <td>{item.order_id}</td>
              <td>{item.product_id}</td>
              <td>{item.quantity}</td>
              <td>₹{item.product_total_cost}</td>
              <td>{new Date(item.order_time).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
