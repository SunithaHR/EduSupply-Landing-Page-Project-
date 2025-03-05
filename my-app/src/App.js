// App.js
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import TestimonialSlider from "./components/TestimonialSlider";
import Footer from "./components/Footer";
import "./styles/global.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <ProductGrid />
      <TestimonialSlider />
      <Footer />
    </div>
  );
};

export default App;