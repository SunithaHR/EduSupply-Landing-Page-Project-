// components/ProductCard.js
import React from "react";
import "../styles/ProductGrid.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductCard;