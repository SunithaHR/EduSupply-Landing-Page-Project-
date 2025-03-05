// components/TestimonialSlider.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/TestimonialSlider.css";

const testimonials = [
  { id: 1, name: "John Doe", comment: "Great products and fast delivery!" },
  { id: 2, name: "Jane Smith", comment: "Highly recommend EduSupply for school supplies." },
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <section className="testimonial-slider">
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial">
            <h3>{testimonial.name}</h3>
            <p>{testimonial.comment}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default TestimonialSlider;