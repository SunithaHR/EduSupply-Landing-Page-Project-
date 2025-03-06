import React from "react";
import "../styles/products.css";
import Stationary from '../assets/stationary.jpg';
import Backpack from '../assets/backpack.jpg';
import Tech from '../assets/tech.jpg';

const products = [
  { 
    id: 1, 
    title: "Stationery", 
    img: Stationary, 
    description: "Find high-quality notebooks, pens, and essential school supplies." 
  },
  { 
    id: 2, 
    title: "Backpacks", 
    img: Backpack, 
    description: "Durable and stylish backpacks for all age groups." 
  },
  { 
    id: 3, 
    title: "Tech Gadgets", 
    img: Tech, 
    description: "Smart tools like tablets and calculators for enhanced learning." 
  }
];

const Products = () => {
  return (
    <section id="products" className="products">
      <div className="products-background">
        <h2>Explore Our Fun Learning Supplies!</h2>
        <p className="products-subtext">
          We offer a wide range of high-quality school essentials to make learning fun and efficient.
        </p>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img src={product.img} alt={product.title} className="product-image"/>
              </div>
              <h3>{product.title}</h3>
              <p className="product-description">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
