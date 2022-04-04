import React from 'react';

const ContactForm = () => {
  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name"></input>
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email"></input>
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5"></textarea>
        </div>
        <button type="submit"></button>
      </form>
    </section>
  );
};

export default ContactForm;
