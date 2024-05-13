// Dashboard.js
import React from 'react';
import Card from './Card';
import "./Card.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Card title="Products" count={150} totalValue={2000} purchasesLastMonth={50} />
      <Card title="Yet to Deliver" count={10} totalValue={500} deadline="2024-05-31" />
      <Card title="Recent Query" query="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      <Card title="Recent Review" review="Great products! Fast delivery and excellent customer service." />
    </div>
  );
}

export default Dashboard;
