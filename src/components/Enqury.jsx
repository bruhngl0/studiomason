import React, { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoCallOutline, IoHomeOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import "../styles/enquiry.scss"

import Footer from "./Footer";

const Enquiry = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    };

    try {
      const response = await fetch(
        "https://cors-anywhere.herokuapp.com/https://script.google.com/macros/s/AKfycbw7Hga4JsZOyL_3QvZW1Ci-6tGiJMPFsKdeK53c-0AwYRbY45Mh8tqZLUg-I9wM1IIV/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      if (result.success) {
        alert("Form submitted successfully!");
        event.target.reset(); // Reset the form after successful submission
      } else {
        alert("Failed to submit the form.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("An error occurred. Please try again.");
    }
  };


  return (
    <div className="enquiry">
      <div className="container">
        <div className="enquiry-top">
        <div className="contact-info">
            <h3>CONTACT INFO</h3>
            <p>Email: info@studiomason.in</p>
            <p>Phone: +919980547044 </p>
            <p>KSSIDC Industrial Estate, 74, Bommasandra,</p>
            <p>Bengaluru, Karnataka 560099</p>
          </div>

          <div className="contact-form">
            <h3>CONTACT US</h3>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="Email" required />
              <textarea
                name="message"
                placeholder="Message"
                required
              ></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>


        <div className="google-map">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.505108151897!2d77.68501447592263!3d12.810603318385848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c39d357cfe7%3A0xcf94599f5bc54299!2sRM6Q%2B729%20KSSIDC%20Industrial%20Estate%2C%20Bommasandra%20Industrial%20Area%2C%20Bommasandra%2C%20Karnataka%20560099!5e0!3m2!1sen!2sin!4v1736496516180!5m2!1sen!2sin"
            width="100%"
            height="450"
 
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>

        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Enquiry;
