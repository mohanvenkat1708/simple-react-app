// Navbar.js
import React from 'react';
import './Navbar.css'; // Import CSS for styling

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="brand">Admin Panel</div>
      <ul className="nav-links">
        <li><a href="#dashboard">Dashboard</a></li>
        <li><a href="/admin/products">Products</a></li>
        <li><a href="#orders">Orders</a></li>
        <li><a href="#customers">Customers</a></li>
        <li><a href="#analytics">Analytics</a></li>
        <li><a href="#settings">Settings</a></li>
      </ul>
    </div>
  );
}

export default Navbar;
