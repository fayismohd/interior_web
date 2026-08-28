import React from "react";
import DualButton from "../../components/DualButton/DualButton";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="contact" className="footer-section">
      <div className="container footer-container">
        
        {/* Footer Top Header Row */}
        <div className="footer-header-cta">
          <h2 className="footer-cta-title">
            Let's Design <span className="gold-text">Your</span> <br />
            Space <span className="serif-italic">Together</span>
          </h2>
          <div className="footer-cta-btn">
            <DualButton text="Get A Quote" variant="gold" href="/contact" />
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Footer Main Content Grid */}
        <div className="footer-top">
          
          {/* Brand Info Column */}
          <div className="footer-brand-col">
            <a href="#" className="footer-logo">
              <img src="/images/logo.svg" alt="Fashion Furniture Logo" className="footer-logo-img" />
              <span className="footer-logo-text">FASHION FURNITURE</span>
            </a>
            <p className="footer-summary">
              Fashion Furniture LLC — Importers & Exporters of Fine Furniture. Custom interiors, expert craftsmanship, and personalized design solutions for homes and offices across the UAE.
            </p>
          </div>

          {/* Company Links Column */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/#portfolio">Gallery</a></li>
              <li><a href="/#testimonials">Testimonials</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Detailed Services Subgrid Column */}
          <div className="footer-services-col">
            <h4 className="footer-col-title">Our Services</h4>
            <ul className="footer-services-list">
              <li><a href="/services/sofa">Custom Sofas</a></li>
              <li><a href="/services/bed">Custom Beds</a></li>
              <li><a href="/services/curtain">Curtain Solutions</a></li>
              <li><a href="/services/interior">Interior Design</a></li>
              <li><a href="/services/lighting">Gypsum & Wallpaper</a></li>
              <li><a href="/services">Home Decor Design</a></li>
              <li><a href="/services">Office Furniture</a></li>
              <li><a href="/services">Wardrobes</a></li>
              <li><a href="/services">Curtain Automation</a></li>
              <li><a href="/services">Wall Partitions</a></li>
            </ul>
          </div>

          {/* Detailed Contact Us Column */}
          <div className="footer-contact-col">
            <h4 className="footer-col-title">Contact Info</h4>
            <div className="footer-contact-list">
              
              {/* Call */}
              <div className="contact-row-item">
                <div className="contact-icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="contact-row-text">
                  <span className="contact-label">Mobile</span>
                  <div className="contact-val-stack">
                    <a href="tel:+971506800250" className="contact-val">+971 506800250</a>
                    <a href="tel:+971502864215" className="contact-val">0502864215</a>
                    <a href="tel:+971568724468" className="contact-val">0568724468</a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="contact-row-item">
                <div className="contact-icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="contact-row-text">
                  <span className="contact-label">Email</span>
                  <a href="mailto:fashionfuj@gmail.com" className="contact-val">fashionfuj@gmail.com</a>
                </div>
              </div>

              {/* Instagram */}
              <div className="contact-row-item">
                <div className="contact-icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
                <div className="contact-row-text">
                  <span className="contact-label">Instagram</span>
                  <a
                    href="https://www.instagram.com/fashion_furniture_llc?utm_source=qr&igsh=ODE2dzBjcm5zYnp1"
                    className="contact-val"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @fashion_furniture_llc
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="contact-row-item">
                <div className="contact-icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="contact-row-text">
                  <span className="contact-label">Address</span>
                  <span className="contact-val">P.O. Box 40225, Thoban, Fujairah, UAE</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        <hr className="footer-divider" />

        {/* Footer Bottom copyright */}
        <div className="footer-bottom">
          <p className="copyright-text">
            Copyright &copy; {new Date().getFullYear()} Fashion Furniture L.L.C
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
