import { useParams, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../sections/Navbar/Navbar";
import Footer from "../sections/Footer/Footer";
import Breadcrumb from "../sections/Breadcrumb/Breadcrumb";
import "./ServiceDetailPage.css";
import heroImage from "../assets/Breadcrumb.webp";

const ServiceDetailPage = () => {
  const { serviceSlug } = useParams();
  const location = useLocation();
  const apiService = location.state?.service;
  const [allServices, setAllServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch all services to show related services
    const fetchAllServices = async () => {
      try {
        const response = await fetch("https://furniture.webyzen.com/wp-json/wp/v2/service");
        if (response.ok) {
          const data = await response.json();
          setAllServices(data);
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllServices();
  }, []);

  // Use API data from location state
  const service = apiService;

  if (!service) {
    return (
      <div className="app-wrapper">
        <Navbar />
        <div className="service-not-found">
          <h2>Service not found</h2>
          <p>The service you're looking for doesn't exist.</p>
          <Link to="/services">Back to Services</Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Extract first paragraph as short description
  const shortDesc = service.desc || "Service Details";

  // Get related services from API data
  const relatedServices = allServices
    .filter(s => s.id !== service.id)
    .slice(0, 3);

  return (
    <div className="app-wrapper">
      <Breadcrumb
        title={service.title}
        description={shortDesc}
        buttonText="Contact Us"
        buttonHref="/contact"
        backgroundImage={heroImage}
      />
      <Navbar />

      <main className="service-detail-page">
        <div className="container">
          {/* Hero Section */}
          <section className="service-hero">
            <div className="service-hero-content">
              <div className="service-number-badge">{service.num}</div>
              <h1 className="service-title">{service.title}</h1>
              <p className="service-short-desc">{shortDesc}</p>
            </div>
            <div className="service-hero-image">
              <img src={service.image} alt={service.title} onError={(e) => e.target.style.display = 'none'} />
            </div>
          </section>

          {/* Full API Content Section */}
          <section className="service-description">
            <div 
              className="service-content-from-api"
              dangerouslySetInnerHTML={{ __html: service.content }}
            />
          </section>

          {/* Call to Action */}
          <section className="service-cta">
            <h2>Ready to Get Started?</h2>
            <p>Contact our team to discuss your {service.title.toLowerCase()} needs</p>
            <a href="/contact" className="cta-primary-button">Get a Quote</a>
          </section>

          {/* Related Services */}
          {!loading && relatedServices.length > 0 && (
            <section className="related-services">
              <h2>Other Services</h2>
              <div className="related-services-grid">
                {relatedServices.map((relatedService) => (
                  <Link
                    key={relatedService.id}
                    to={`/services/${relatedService.slug}`}
                    className="related-service-card"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <div className="related-card-image">
                      <img 
                        src={relatedService.image} 
                        alt={relatedService.title}
                        onError={(e) => e.target.style.background = '#e8e4df'}
                      />
                    </div>
                    <div className="related-card-content">
                      <h3>{relatedService.title?.rendered || relatedService.title}</h3>
                      <p>{relatedService.desc || relatedService.content?.rendered?.replace(/<[^>]*>/g, "").substring(0, 100) + "..."}</p>
                      <span className="view-link">View Details →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetailPage;
