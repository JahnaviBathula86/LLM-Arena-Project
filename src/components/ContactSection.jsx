import React, { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); // "success" | "error" | ""

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Simulate async submission
    if (form.name && form.email && form.message) {
      setTimeout(() => setStatus("success"), 700);
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Us</h2>
      <p className="contact-intro">We'd love to hear from you! Reach out for support, feedback, or just to say hello.</p>
      <div className="contact-content">
        <div className="contact-info">
          <p>
            <span role="img" aria-label="Email" className="contact-icon">📧</span>
            <a href="mailto:support@llmarena.com">support@llmarena.com</a>
          </p>
          <p>
            <span role="img" aria-label="Phone" className="contact-icon">📞</span>
            <a href="tel:+1234567890">+1 234-567-890</a>
          </p>
          <div className="contact-socials">
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <span className="contact-icon">🐦</span>
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <span className="contact-icon">💼</span>
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            required
          />
          <button type="submit">Send Message</button>
          {status === "success" && (
            <p className="contact-success">Thank you! We’ll get back to you soon.</p>
          )}
          {status === "error" && (
            <p className="contact-error">Please fill out all fields.</p>
          )}
        </form>
      </div>
    </section>
  );
}