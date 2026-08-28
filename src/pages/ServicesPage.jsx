import Navbar from "../sections/Navbar/Navbar";
import Footer from "../sections/Footer/Footer";
import Breadcrumb from "../sections/Breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";
import "./ServicesPage.css";
import aboutHero from "../assets/Breadcrumb.webp";

const servicesData = [
  {
    id: 1,
    slug: "sofa",
    num: "01",
    title: "Custom Sofas",
    shortDesc: "Handcrafted sofas built to your exact specifications",
    image: "/images/service_sofa.png"
  },
  {
    id: 2,
    slug: "bed",
    num: "02",
    title: "Custom Beds",
    shortDesc: "Bespoke bed designs with custom headboards and storage",
    image: "/images/service_bed.png"
  },
  {
    id: 3,
    slug: "curtain",
    num: "03",
    title: "Curtain Solutions",
    shortDesc: "Horizontal, vertical, and motorized curtain systems",
    image: "/images/service_curtain.png"
  },
  {
    id: 4,
    slug: "interior",
    num: "04",
    title: "Interior Design",
    shortDesc: "Complete design solutions for homes and offices",
    image: "/images/service_interior.png"
  },
  {
    id: 5,
    slug: "lighting",
    num: "05",
    title: "Gypsum & Wallpaper",
    shortDesc: "Ceiling solutions, partitions, and premium wallpaper",
    image: "/images/service_interior.png"
  },
];

const ServicesPage = () => {
  return (
    <div className="app-wrapper">
      <Breadcrumb
        title={"Our Services"}
        description="Explore our comprehensive range of interior design and furniture solutions tailored to your needs."
        buttonText="Contact Us"
        buttonHref="/contact"
        backgroundImage={aboutHero}
      />
      <Navbar />
      
      <section className="services-listing-section section-padding">
        <div className="container">
          <div className="services-listing-header">
            <div className="services-tag">
              <img src="/images/logo.svg" alt="" className="section-tag-logo" />
              <span className="tag-label">OUR SERVICES</span>
            </div>
            
            <h2 className="services-heading">
              Our Complete <span className="serif-italic">Service Range</span>
            </h2>
            
            <p className="services-subtitle">
              Click on any service below to learn more about what we offer
            </p>
          </div>

          {/* Services Grid */}
          <div className="services-grid">
            {servicesData.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="service-listing-card"
              >
                <div className="service-card-image">
                  <img src={service.image} alt={service.title} />
                  <span className="service-number">{service.num}</span>
                </div>

                <div className="service-card-content">
                  <h3>{service.title}</h3>
                  <p>{service.shortDesc}</p>
                  <span className="service-link-arrow">View Details →</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Call to Action */}
          <div className="services-listing-cta">
            <h3>Need Custom Solutions?</h3>
            <p>Let's discuss your project and create the perfect design plan for you</p>
            <Link to="/contact" className="cta-button">Schedule Consultation</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
