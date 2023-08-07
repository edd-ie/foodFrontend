import React, { useState } from "react";
import './contact.css';

export default function Contact({ user }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can implement the logic to send the form data to the server here
    console.log(formData);
  };

  return (
    <div className="contactPage">
      <div className="contactFormContainer">
        <h2>Contact Form</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
