import React, { useState, useEffect } from "react";
import "../styles/testimonials.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.jpg";

const testimonials = [
  {
    text: "Great quality products! Highly recommend.",
    name: "Emma Johnson",
    image: user1,
  },
  {
    text: "EduSupply made my school shopping so easy.",
    name: "Michael Smith",
    image: user2,
  },
  {
    text: "Affordable and durable items for students.",
    name: "Sophia Martinez",
    image: user3,
  }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 4000);
    return () => clearInterval(interval);
  }, [index]);

  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-carousel">
        <button className="carousel-btn left" onClick={prevTestimonial}>
          <FaChevronLeft />
        </button>
        <div className="testimonial-card fade-in">
          <img src={testimonials[index].image} alt={testimonials[index].name} className="testimonial-image" />
          <p className="testimonial-text">"{testimonials[index].text}"</p>
          <h4 className="testimonial-name">- {testimonials[index].name}</h4>
        </div>
        <button className="carousel-btn right" onClick={nextTestimonial}>
          <FaChevronRight />
        </button>
      </div>
      <div className="carousel-dots">
        {testimonials.map((_, i) => (
          <span key={i} className={`dot ${i === index ? "active" : ""}`} onClick={() => setIndex(i)}></span>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
