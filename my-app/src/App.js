import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <Testimonials />
      <Contact/>
      <Footer />
    </>
  );
};

export default App;
