// components/ProductGrid.js
import React from "react";
import ProductCard from "./ProductCard";
import "../styles/ProductGrid.css";

const products = [
  { id: 1, title: "Stationery", image: "stationery.jpg", description: "Explore our range of pens, notebooks, and more." },
  { id: 2, title: "Backpacks", image: "backpacks.jpg", description: "Durable and stylish backpacks for all ages." },
  { id: 3, title: "Tech Gadgets", image: "tech.jpg", description: "Essential gadgets for modern learning." },
];

const ProductGrid = () => {
  return (
    <section className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default ProductGrid;