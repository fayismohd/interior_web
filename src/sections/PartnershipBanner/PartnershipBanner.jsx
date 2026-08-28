import React from "react";
import DualButton from "../../components/DualButton/DualButton";
import "./PartnershipBanner.css";

const PartnershipBanner = () => {
  return (
    <section className="partnership-section">
      <div className="container">
        <div className="partnership-card">
          {/* Left Gradient text segment */}
          <div className="partnership-info">
            <h2 className="partnership-title">
             Every Great Space Starts with a
              <span className="serif-italic" style={{ color: "#fff" }}>Conversation.</span>
            </h2>
            <div className="partnership-cta">
              <DualButton text="Contact Us" variant="white" href="#contact-form-section" />
            </div>
          </div>
          
          {/* Right Image segment */}
          <div className="partnership-image-col">
            <img 
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=600" 
              alt="Corporate partners shaking hands" 
              className="partnership-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipBanner;
