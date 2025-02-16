import React from 'react';

function ContactPage() {
  return (
    <div className="contact-page">
      <h2>Get In Touch</h2>
      <p style={{textAlign: 'center', fontSize: '1.1em', color: '#777', marginBottom: '70px', letterSpacing: '0.04em'}}>We value your feedback and are here to provide exceptional customer service. Please reach out to us with any questions, inquiries, or feedback using the form below.</p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" required placeholder="Your Full Name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" required placeholder="YourEmail@example.com" />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" placeholder="Subject of your inquiry" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="7" required placeholder="Write your message here"></textarea>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
      <address>
        Alternatively, you can reach us directly at:<br/><br/>
        August Culture Limited<br/>
        Customer Relations Department<br/>
        123 Fashion Avenue, Suite 400<br/>
        New York, NY 10001<br/>
        <br/>
        Email: <a href="mailto:care@augustculture.com">care@augustculture.com</a><br/>
        Phone: <a href="tel:+12125550123">+1 212-555-0123</a>
      </address>
    </div>
  );
}

export default ContactPage;
