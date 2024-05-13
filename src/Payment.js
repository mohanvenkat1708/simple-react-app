// Payment.js

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Payment() {
  
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const totalCost = queryParams.get('cost') || '';
  const [amount, setAmount] = useState(totalCost);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSubmit = () => {
    //e.preventDefault();
    if (amount === "") {
      alert("Please enter amount");
    } else {
      var options = {
        key: "rzp_test_0d13gQPPt3P1NL",
        key_secret: "xSB4fIjFsmquAopgaxfvtyKb",
        amount: totalCost * 100,
        currency: "INR",
        name: "Supreme Food Products",
        description: "For testing purpose",
        handler: function (response) {
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name: "Mohanraj",
          email: "mohanrajvs.21it@gmail.com",
          contact: "9361431001"
        },
        notes: {
          address: "Razorpay Corporate office"
        },
        theme: {
          color: "#3399cc"
        }
      };
      var razorpay = new window.Razorpay(options); // Create a new instance of Razorpay
      razorpay.open();
    }
  }

  return (
    <div className="App">
      {/* <h2>Razorpay Payment Integration Using React</h2>
      <br />
      
      <p>Total Cost: {totalCost}</p>
      <input type="text" placeholder='Enter Amount' value={amount} onChange={(e) => setAmount(e.target.value)} />
      <br /><br />
      <button onClick={handleSubmit}>Submit</button> */}
      {handleSubmit()}
    </div>
  );
}

export default Payment;
