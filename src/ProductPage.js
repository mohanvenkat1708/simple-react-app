// ProductPage.js
import React from 'react';
import './ProductPage.css';
import ProductImage from './ProductImage';
import ProductDetails from './ProductDetails';
import PriceCalculator from './PriceCalculator';
import Reviews from './Reviews';


const ProductPage = ({ product, user_id }) => {
  return (
    <div className="product-page">
      <div className="product-info">
        <ProductImage image={product.image} />
        <ProductDetails
          name={product.name}
          rating={product.rating}
          price={product.price}
          reducedPrice={product.reducedPrice}
          discount={product.discount}
          about={product.about}
        />
        <PriceCalculator
          productId={product.id}
          price={product.reducedPrice}
          user_id={user_id}
        />
      </div>
      <Reviews productId={product.id} />
    </div>
  );
};

export default ProductPage;
