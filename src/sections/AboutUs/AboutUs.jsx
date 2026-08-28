import React from "react";
import DualButton from "../../components/DualButton/DualButton";
import "./AboutUs.css";
import familyImg from "../../assets/about_family_sofa.png";

const AboutUs = () => {
  return (
    <section id="about" className="about-section section-padding">
      <div className="container about-container">
        <div className="about-content">
          
          {/* Left Column: Text Content */}
          <div className="about-text-col">
            <div className="about-tag">
              <img src="/images/logo.svg" alt="" className="section-tag-logo" />
              <span className="tag-label">WHO WE ARE</span>
            </div>
            
            <h2 className="about-heading">
              Who We <br />
              Are <span className="serif-italic">Fashion Furniture</span>
            </h2>
            
            <p className="about-description">
              Fashion Furniture LLC is a Fujairah-based interior design and furniture company specializing in custom-designed living and workspaces. As importers and exporters of quality furniture, we bring together international sourcing with local craftsmanship to deliver interiors that are both elegant and functional.
            </p>
            <p className="about-description">
              Every project starts with one thing: your requirement. Whether it's a single statement sofa, a full home makeover, or a corporate office fit-out, our team designs each piece and every space around your taste, your budget, and how you actually live or work.
            </p>
            
            <div className="about-cta">
              <DualButton text="Learn More" variant="gold" href="#services" />
            </div>
            
            {/* Stats Row */}
            <div className="about-stats-row">
              <div className="stat-item">
                <h3 className="stat-number">
                  100<span className="gold-plus">+</span>
                </h3>
                <p className="stat-label">Projects Completed</p>
              </div>
              
              <div className="stat-item">
                <h3 className="stat-number">
                  500<span className="gold-plus">+</span>
                </h3>
                <p className="stat-label">Happy Clients</p>
              </div>
              
              <div className="stat-item">
                <h3 className="stat-number">
                  15<span className="gold-plus">+</span>
                </h3>
                <p className="stat-label">Years of Experience</p>
              </div>
            </div>
          </div>
          
          {/* Right Column: Image */}
          <div className="about-img-col">
            <div className="about-img-wrapper">
              <img src={familyImg} alt="Family enjoying their luxury living room sofa" className="about-image" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
