import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa"; // Import icons from react-icons
import { FiMail } from "react-icons/fi"; // Import Mail icon
import { FaPhoneAlt } from "react-icons/fa"; // Import Phone icon
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact Me</h2>
      <div className="contact-info">
        <div className="contact-address">
          <p className="address-text">Address: Nagaram, Hyderabad, 500083</p>
        </div>
        <div className="contact-details">
          <div className="contact-item">
            <FaPhoneAlt size={24} className="icon" />
            <p className="contact-text">+91 7842742746</p>
          </div>
          <div className="contact-item">
            <FiMail size={24} className="icon" />
            <p className="contact-text">ritheeshreddykumbham@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/ritheesh-reddy-kumbham"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://www.instagram.com/your_instagram_handle" 
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaInstagram size={30} />
          </a>
        </div>
    </section>
  );
};

export default Contact;
