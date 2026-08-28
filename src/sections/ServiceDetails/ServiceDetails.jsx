import React, { useState } from "react";
import "./ServiceDetails.css";
import sofaImg from "../../assets/service_sofa.png";
import bedImg from "../../assets/service_bed.png";
import curtainImg from "../../assets/service_curtain.png";
import interiorImg from "../../assets/service_interior.png";

const servicesDetailData = [
  {
    id: 1,
    num: "01",
    title: "Sofa Design & Customization",
    shortDesc: "Premium sofa solutions for your space",
    fullDesc: "We offer bespoke sofa design and customization services tailored to your specific needs. From modern minimalist designs to classic comfort, our expert team works with high-quality materials and craftsmanship.",
    features: [
      "Custom dimensions and shapes",
      "Premium fabric selection",
      "Modular and sectional options",
      "Durable frame construction",
      "Extended warranty options"
    ],
    price: "Starting from $2,000",
    image: sofaImg,
  },
  {
    id: 2,
    num: "02",
    title: "Bed & Bedroom Furniture",
    shortDesc: "Luxurious and comfortable bedroom solutions",
    fullDesc: "Transform your bedroom with our premium bed and bedroom furniture collection. We specialize in creating spaces that combine comfort, style, and functionality for restful sleep and elegant design.",
    features: [
      "Custom bed sizes and styles",
      "Orthopedic mattress recommendations",
      "Storage solutions",
      "Matching bedroom sets",
      "Headboard customization"
    ],
    price: "Starting from $3,000",
    image: bedImg,
  },
  {
    id: 3,
    num: "03",
    title: "Curtain & Window Treatments",
    shortDesc: "Elegant window solutions with style",
    fullDesc: "Enhance your interiors with our curated curtain and window treatment solutions. From sheer elegance to blackout functionality, we provide options that suit any aesthetic and practical requirement.",
    features: [
      "Custom fabric selection",
      "Motorized blind options",
      "Blackout and thermal options",
      "Professional installation",
      "Maintenance guidance"
    ],
    price: "Starting from $500",
    image: curtainImg,
  },
  {
    id: 4,
    num: "04",
    title: "Interior Design Consultation",
    shortDesc: "Professional design expertise for your space",
    fullDesc: "Our interior design consultants provide comprehensive design solutions for residential and commercial spaces. We ensure cohesive aesthetics, functional layouts, and timeless appeal.",
    features: [
      "Space planning and layout",
      "Color and material consultation",
      "Lighting design",
      "Budget-friendly recommendations",
      "3D visualization and mockups"
    ],
    price: "Consultation fee: $200/hour",
    image: interiorImg,
  },
  {
    id: 5,
    num: "05",
    title: "Lighting Design & Installation",
    shortDesc: "Ambient and functional lighting solutions",
    fullDesc: "Discover how proper lighting can transform your space. We design and install lighting solutions that enhance ambiance, improve functionality, and create the perfect atmosphere.",
    features: [
      "LED lighting options",
      "Smart lighting systems",
      "Accent and ambient lighting",
      "Energy-efficient solutions",
      "Professional installation"
    ],
    price: "Starting from $1,500",
    image: sofaImg,
  },
];

const ServiceDetails = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="service-details-section section-padding">
      <div className="container">
        <div className="service-details-header">
          <div className="service-details-tag">
            <img src="/images/logo.svg" alt="" className="section-tag-logo" />
            <span className="tag-label">SERVICE DETAILS</span>
          </div>
          
          <h2 className="service-details-heading">
            Our Comprehensive <span className="serif-italic">Service Offerings</span>
          </h2>
          
          <p className="service-details-subtitle">
            Explore our full range of services designed to transform your space into something extraordinary
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-details-grid">
          {servicesDetailData.map((service) => (
            <div key={service.id} className={`service-detail-card ${expandedId === service.id ? "expanded" : ""}`}>
              <div className="detail-card-image">
                <img src={service.image} alt={service.title} />
                <span className="service-number">{service.num}</span>
              </div>

              <div className="detail-card-content">
                <h3 className="detail-card-title">{service.title}</h3>
                <p className="detail-card-short-desc">{service.shortDesc}</p>

                {expandedId === service.id && (
                  <div className="expanded-content">
                    <p className="detail-card-full-desc">{service.fullDesc}</p>
                    
                    <div className="features-section">
                      <h4>Key Features:</h4>
                      <ul className="features-list">
                        {service.features.map((feature, index) => (
                          <li key={index}>
                            <span className="feature-icon">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="price-section">
                      <p className="service-price">{service.price}</p>
                      <a href="/contact" className="cta-button">Get a Quote</a>
                    </div>
                  </div>
                )}

                <button 
                  className="expand-toggle-btn"
                  onClick={() => toggleExpand(service.id)}
                  aria-expanded={expandedId === service.id}
                >
                  <span>{expandedId === service.id ? "Show Less" : "Learn More"}</span>
                  <svg 
                    viewBox="0 0 24 24" 
                    width="20" 
                    height="20" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    className={expandedId === service.id ? "rotated" : ""}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="service-details-cta">
          <h3>Ready to Transform Your Space?</h3>
          <p>Contact our team to discuss your project and get a personalized quote</p>
          <a href="/contact" className="primary-cta-button">Schedule Consultation</a>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
