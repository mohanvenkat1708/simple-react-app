import React, { useState } from "react";
import { useCookies } from 'react-cookie'; // Importing the useCookies hook
import "./LoginForm.css";
import { useNavigate } from "react-router-dom";
import login from "./img/login.jpg";

export default function LoginForm() {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const [cookies, setCookie] = useCookies(['accessToken']); // Using the useCookies hook to access cookies

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/login', {  
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials: 'include',
      });
      console.log(JSON.stringify(formData))
      if (response.ok) {
        const data = await response.json();
        // Redirect or handle successful login
        setCookie('accessToken', data.accessToken);
        alert('Logged successfully');
        console.log('Login successful');
        console.log("data stored in the cookie: "+cookies.accessToken);
        navigate('/');
      } else {
        // Handle login failure
        const errorMessage = await response.text();
        alert(`Error: ${errorMessage}`);
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Internal server error');
    }
    // Reset form fields
    setFormData({ email: '', password: '' });
  };

  return (
    <div className="login-form-wrapper">
      <div className="login-form-container">
        <img src={login} alt="Login Image"/>
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Login</button>
          <p>Don't have an account? <a href="/signup">Sign up</a></p>
        </form>
      </div>
    </div>
  );
}
