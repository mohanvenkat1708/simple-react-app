import React, { useState, useEffect } from "react";

export default function VarietyCard({ variety, imageSrc, discountOffer, price, discountedPrice }) {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const image = await import(`./img/${imageSrc}`);
        setImageUrl(image.default);
      } catch (error) {
        console.error("Error loading image:", error);
      }
    };

    fetchImage();
  }, [imageSrc]);

  return (
    <div className="variety-card">
      {imageUrl && <img src={imageUrl} alt={variety} className="variety-image" />}
      <div className="variety-details">
        <h3>Variety {variety}</h3>
        <p className="offer">{discountOffer}</p>
        <div className="prices">
          <p className="original-price">MRP: <span className="strikethrough">{price}</span></p>
          <p className="discounted-price">₹{discountedPrice}/kg</p>
        </div>
        <a href={`/products/${variety}`} className="add-to-cart-btn">Buy Now</a>
      </div>
    </div>
  );
}
