// src/ContactUs.js
import React from 'react';

const ContactUs = () => {
  return (
    <div className="page contact-us">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Reach out for inquiries, support, or scheduling a demo.</p>
      <form className="contact-form premium">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit" className="cta-button">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
