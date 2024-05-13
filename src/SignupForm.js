import React, { useState } from "react";
import "./SignupForm.css";
import signupImage from "./img/signup.jpg";
import { useNavigate } from "react-router-dom";
export default function SignupForm() {
  const navigate= useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    userType: "", 
    userName: "",
    phoneNumber: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('User created successfully');
        // Optionally, redirect the user to login page after successful signup
        // history.push('/login');
      } else {
        const errorMessage = await response.text();
        alert(`Error: ${errorMessage}`);
      }
    } catch (error) {
      console.error('Error signing up:', error);
      alert('Internal server error');
    }
    setFormData({ email: "",
    password: "",
    userType: "", 
    userName: "",
    phoneNumber: "" });

    navigate("/login")
  };

  return (
    <div className="signup-form-wrapper">
      <div className="signup-form-container">
        <img src={signupImage} alt="Signup Image" />
        <form onSubmit={handleSubmit} className="signup-form">
          <h2>Sign Up</h2>

          <div className="form-group">
            <label htmlFor="userName">User Name</label>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              required
            />
          </div>
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
          <div className="form-group">
            <label>User Type</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="userType"
                  value="retail"
                  checked={formData.userType === "retail"}
                  onChange={handleChange}
                  required
                />
                Retail Customer
              </label>
              <label>
                <input
                  type="radio"
                  name="userType"
                  value="wholesale"
                  checked={formData.userType === "wholesale"}
                  onChange={handleChange}
                  required
                />
                Wholesale Customer
              </label>
              {/* <label>
                <input
                  type="radio"
                  name="userType"
                  value="admin"
                  checked={formData.userType === "admin"}
                  onChange={handleChange}
                  required
                />
                Admin
              </label> */}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Sign Up</button>
          <p>Already have an account? <a href="/login">Login</a></p>
        </form>
      </div>
    </div>
  );
}
