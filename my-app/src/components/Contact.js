import React from "react";
import "../styles/contact.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-left">
          <h2>Contact Us</h2>
          <p>Have questions? Reach out to us, and we’ll be happy to assist you!</p>
          
          <div className="contact-info">
            <div className="info-item">
              <FaEnvelope className="icon" />
              <span>Email:</span>
              <a href="mailto:support@edusupply.com">support@edusupply.com</a>
            </div>
            <div className="info-item">
              <FaPhoneAlt className="icon" />
              <span>Phone:</span>
              <p>+91 9567825678</p>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="icon" />
              <span>Location:</span>
              <p>#123 Education Lane, Bangalore</p>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <form className="contact-form">
            <h3>Send a Message</h3>
            <div className="input-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="input-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="input-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
