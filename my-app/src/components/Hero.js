// components/Hero.js
import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Your One-Stop Shop for School Supplies</h1>
        <p>High-quality products for students and educators.</p>
        <button className="cta-button">Shop Now</button>
      </div>
    </section>
  );
};

export default Hero;