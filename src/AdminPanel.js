// AdminPanel.js
import React from 'react';
import Navbar from './Navbar';
import './AdminPanel.css'; // Import CSS for styling
import "./Navbar.css"
import Dashboard from './Dashboard';

const AdminPanel = () => {
  return (
    <div className="admin-panel">
      <Navbar />
      <div className="main-content">
        <h1>Dashboard</h1>
        <Dashboard/>
        {/* Add other components and sections here */}
      </div>
    </div>
  );
}

export default AdminPanel;
