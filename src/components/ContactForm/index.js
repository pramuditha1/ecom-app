import React from "react";
import "./index.scss";

const ContactForm = () => {
  return (
    <div className="heroContainer">
      <form className="contact-form">
        <div className="grid-item">
          <label>Name</label>
        </div>

        <div className="grid-item">
          <input type="text" name="name" placeholder="Enter your name" />
        </div>

        <div className="grid-item">
          <label>e-mail</label>
        </div>
        <div className="grid-item">
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
          />
        </div>

        <div className="grid-item">
          <label>Mobile no</label>
        </div>

        <div className="grid-item">
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            pattern="[0-9]{10}"
            placeholder="Enter your mobile number"
            required
          />
        </div>

        <div className="grid-item">
          <label>inquiry</label>
        </div>

        <div className="grid-item">
          <input
            type="text"
            id="inquiry"
            name="inquiry"
            placeholder="Enter your inquiry..."
            required
          />
        </div>

        <div className="grid-item"></div>

        <div className="grid-item">
          <button>Clear</button>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
