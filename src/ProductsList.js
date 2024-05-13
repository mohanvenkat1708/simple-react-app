import React, { useEffect, useState } from 'react';
import "./ProductsList.css";
import VarietyCard from "./VarietyCard"; // Component for variety card
import fetchVarietiesData from './fetchVarietiesData';

export default function ProductsPage() {
  const [varieties, setVarieties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchVarietiesData();
      setVarieties(data);
    };

    fetchData();
  }, []);

  

  return (
    <div className="products-page">
      <h2 className="page-title">Our Products</h2>
      <div className="varieties">
        {varieties.map(variety => ( // Use the fetched varieties data
          <VarietyCard
            key={variety.id}
            variety={variety.id}
            imageSrc={variety.image}
            offer={variety.offer}
            price={`${variety.price}/kg`}
            discountedPrice={variety.reducedPrice}
          />
        ))}
      </div>
      <div className="free-delivery">
        <p>Free delivery on purchases worth ₹500 or more</p>
      </div>
    </div>
  );
}
