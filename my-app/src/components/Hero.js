//Hero.js

import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-text">
        <h1>Quality School Supplies at Your Fingertips</h1>
        <p>Get the best deals on stationery, backpacks, and more.</p>
        <a href="#products" className="btn">Shop Now</a>
      </div>
    </section>
  );
};

export default Hero;
