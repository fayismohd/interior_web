import React, { useState } from "react";
import "./ContactSection.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.firstName}! Your message has been sent successfully.`);
    setFormData({ firstName: "", lastName: "", email: "", message: "" });
  };

  return (
    <section
      id="contact-form-section"
      className="contact-section"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&q=80&w=1400')",
      }}
    >
      <div className="contact-bg-overlay"></div>
      
      <div className="container contact-container">
        <div className="contact-grid">
          
          {/* Left Column: Get In Touch */}
          <div className="contact-info-col">
            <div className="contact-tag">
              <img src="/images/logo.svg" alt="" className="section-tag-logo" />
              <span className="tag-label">CONTACT US</span>
            </div>

            <h2 className="contact-heading">
             Let's Bring Your Vision <span className="serif-italic">to life</span>
            </h2>

            <p className="contact-subheading">
           Whether it's a single custom piece or a complete interior makeover, our team is ready to listen, design, and deliver exactly what you have in mind.
            </p>

            <div className="contact-details">
              <h4 className="details-title">Get In Touch With</h4>
              
              <div className="detail-item">
                <div className="detail-icon-circle">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="detail-text-stack">
                  <a href="tel:+971506800250" className="detail-text">+971 506800250</a>
                  <a href="tel:+971502864215" className="detail-text">0502864215</a>
                  <a href="tel:+971568724468" className="detail-text">0568724468</a>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon-circle">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <a href="mailto:fashionfuj@gmail.com" className="detail-text">fashionfuj@gmail.com</a>
              </div>

              <div className="detail-item">
                <div className="detail-icon-circle">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <a
                  href="https://www.instagram.com/fashion_furniture_llc?utm_source=qr&igsh=ODE2dzBjcm5zYnp1"
                  className="detail-text"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @fashion_furniture_llc
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-col">
            <form onSubmit={handleSubmit} className="contact-form-card">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">Full Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Write here.."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-form-btn">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
