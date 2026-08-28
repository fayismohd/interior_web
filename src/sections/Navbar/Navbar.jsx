import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section based on scroll position (only on home page)
      if (location.pathname === "/") {
        const sections = [
          { id: "home", offset: 0 },
          { id: "about", offset: document.getElementById("about")?.offsetTop || 0 },
          { id: "services", offset: document.getElementById("services")?.offsetTop || 0 },
          { id: "projects", offset: document.getElementById("projects")?.offsetTop || 0 },
          { id: "careers", offset: document.getElementById("careers")?.offsetTop || 0 },
          { id: "contact", offset: document.getElementById("contact")?.offsetTop || 0 },
        ];

        const scrollPosition = window.scrollY + 100;

        for (let i = sections.length - 1; i >= 0; i--) {
          if (scrollPosition >= sections[i].offset) {
            setActiveLink(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Update active link based on current route
  useEffect(() => {
    if (location.pathname === "/") {
      setActiveLink("home");
    } else if (location.pathname === "/about") {
      setActiveLink("about");
    }
  }, [location.pathname]);

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = (id) => {
    setActiveLink(id);
    setMobileMenuOpen(false);
  };

  const handleSectionLink = (sectionId) => {
    if (location.pathname !== "/") {
      // If not on home page, navigate to home first
      window.location.href = `/#${sectionId}`;
    } else {
      // If on home page, scroll to section
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    handleLinkClick(sectionId);
  };

  return (
    <header className={`navbar-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img src="/images/logo.svg" alt="Fashion Furniture Logo" className="logo-img" />
        </Link>

        {/* Nav links + CTA grouped to the right */}
        <div className="navbar-right">
          <nav className="navbar-nav">
            <Link to="/" className={`nav-link ${activeLink === "home" ? "active" : ""}`} onClick={() => handleLinkClick("home")}>Home</Link>
            <Link to="/about" className={`nav-link ${activeLink === "about" ? "active" : ""}`} onClick={() => handleLinkClick("about")}>About Us</Link>
            <Link to="/services" className={`nav-link ${activeLink === "services" ? "active" : ""}`} onClick={() => handleLinkClick("services")}>
              Services
            </Link>
            <Link to="/contact" className={`nav-link ${activeLink === "contact" ? "active" : ""}`} onClick={() => handleLinkClick("contact")}>Contact Us</Link>
          </nav>

          {/* CTA Button */}
          <div className="navbar-actions">
            <Link to="/contact" className="quote-btn">Get A Quote</Link>
            <button
              className={`mobile-menu-toggle ${mobileMenuOpen ? "open" : ""}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay Backdrop */}
      <div 
        className={`mobile-backdrop ${mobileMenuOpen ? "open" : ""}`} 
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-drawer-header">
          <img src="/images/logo.svg" alt="Fashion Furniture Logo" className="mobile-logo-img" />
          <button 
            className="mobile-drawer-close" 
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <nav className="mobile-nav">
          <Link to="/" className={`mobile-link ${activeLink === "home" ? "active" : ""}`} onClick={() => handleLinkClick("home")}>Home</Link>
          <Link to="/about" className={`mobile-link ${activeLink === "about" ? "active" : ""}`} onClick={() => handleLinkClick("about")}>About Us</Link>
          <Link to="/services" className={`mobile-link ${activeLink === "services" ? "active" : ""}`} onClick={() => handleLinkClick("services")}>Services</Link>
          <Link to="/contact" className={`mobile-link ${activeLink === "contact" ? "active" : ""}`} onClick={() => handleLinkClick("contact")}>Contact Us</Link>
          <Link to="/contact" className="mobile-quote-btn" onClick={() => setMobileMenuOpen(false)}>Get A Quote</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
