// ProductImage.js
import { useState, useEffect } from 'react';
import React from 'react';

const ProductImage = (props) => {
  
  const [imageUrl, setImageUrl] = useState(null);
    const image= props.image;
    useEffect(() => {
      import(`./img/${props.image}`).then((image) => {
        setImageUrl(image.default);
      });
    }, [props.image]);

  return (
    <div className="product-image">
      
      <img src={imageUrl} alt="Product" />
    </div>
  );
}

export default ProductImage;
