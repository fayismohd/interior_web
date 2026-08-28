import React from "react";
import "./WhyChooseUs.css";
import sofaCurvy from "../../assets/service_interior.png"; // reusing high quality interior asset

const features = [
  {
    id: 1,
    title: "Custom-First Approach",
    desc: "Every project designed around your exact requirement, not a fixed template",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
        <path d="M9 11l2 2 4-4" fill="none" stroke="currentColor" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Import-Export Backed Quality",
    desc: "Access to a wide range of quality materials through our sourcing network",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 12a9 9 0 0 0 9 9m0 0a9 9 0 0 0 9-9m-9 9v-4m0 0a6 6 0 0 0 6-6m-6 6a6 6 0 0 1-6-6m6 0V3m0 0a9 9 0 0 1 9 9" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "All-in-One Service",
    desc: "Design, manufacturing, and installation handled by one trusted team",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v20M2 12h20" />
        <path d="M4.22 4.22l11.56 11.56M19.78 4.22L8.22 15.78" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Expert Craftsmanship",
    desc: "Attention to detail across furniture, gypsum, wallpaper, and curtain works",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 4l7 7m-7-7l-7 7m7-7v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Fujairah-Based, UAE-Wide",
    desc: "Reliable local presence with ability to serve projects across the Emirates",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
      </svg>
    ),
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="why-section section-padding">
      <div className="container why-container">

        {/* Header and Stamp Row */}
        <div className="why-header">
          <div className="why-title-area">
            <div className="why-tag">
              <img src="/images/logo.svg" alt="" className="section-tag-logo" />
              <span className="tag-label">WHY CHOOSE US</span>
            </div>
            <h2 className="why-heading">
              Why Clients <br />
              Choose <span className="serif-italic">Fashion Furniture</span>
            </h2>
          </div>

          {/* Rotating Text Stamp Stamp */}
          <div className="why-stamp">
            <svg viewBox="0 0 100 100" width="120" height="120" className="stamp-svg">
              <path
                id="textPathCircle"
                d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                fill="none"
              />
              <text fill="var(--text-primary)" fontSize="8.5" fontWeight="700" letterSpacing="1.8">
                <textPath href="#textPathCircle" startOffset="0%">
                  SIMPLY LOREM IPSUM • SIMPLY LOREM IPSUM •
                </textPath>
              </text>
              {/* Brand Logo in the Center */}
              <image
                href="/images/logo.svg"
                x="33"
                y="33"
                width="34"
                height="34"
              />
            </svg>
          </div>
        </div>

        {/* Content Grid */}
        <div className="why-grid">
          {/* Left: Curved Image */}
          <div className="why-image-col">
            <div className="why-image-wrapper">
              <img src={sofaCurvy} alt="Elegant curvy modern couch" className="why-image" />
            </div>
          </div>

          {/* Right: Feature List */}
          <div className="why-features-col">
            <div className="features-list">
              {features.map((feat) => (
                <div key={feat.id} className="feature-item">
                  <div className="feature-icon-wrapper">
                    {feat.icon}
                  </div>
                  <div className="feature-text">
                    <h3 className="feature-title">{feat.title}</h3>
                    <p className="feature-desc">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
