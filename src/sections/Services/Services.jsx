import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const Services = () => {
  const sliderRef = useRef(null);

  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(
          "https://furniture.webyzen.com/wp-json/wp/v2/service?_embed"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch services");
        }

        const data = await response.json();

        const transformedServices = data.map((service, index) => {
          // Extract plain text from HTML
          const plainDesc =
            service.content?.rendered
              ?.replace(/<[^>]*>/g, "")
              .trim() || "";

          // Featured image
          const featuredImageUrl =
            service._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";

          return {
            id: service.id,
            slug: service.slug || `service-${index}`,
            num: String(index + 1).padStart(2, "0"),
            title: service.title?.rendered || "Service",
            desc: plainDesc,
            htmlContent: service.content?.rendered || "",
            image: featuredImageUrl,
          };
        });

        setServicesData(transformedServices);
      } catch (error) {
        console.error("Error fetching services:", error);
        setServicesData([]);
      }
    };

    fetchServices();
  }, []);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -350,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 350,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="services" className="services-section section-padding">
      <div className="container">
        {/* Header Row */}
        <div className="services-header">
          <div className="services-title-area">
            <div className="services-tag">
              <img
                src="/images/logo.svg"
                alt=""
                className="section-tag-logo"
              />

              <span className="tag-label">OUR SERVICES</span>
            </div>

            <h2 className="services-heading">
              What We <span className="asterisk">*</span>
              <br />
              Do <span className="serif-italic">Services</span>
            </h2>
          </div>

          {/* Slider controls */}
          <div className="services-controls">
            <button
              className="ctrl-btn prev"
              onClick={scrollLeft}
              aria-label="Previous service"
            >
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </button>

            <button
              className="ctrl-btn next"
              onClick={scrollRight}
              aria-label="Next service"
            >
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Slider */}
        <div className="services-slider-container" ref={sliderRef}>
          <div className="services-track">
            {servicesData.map((service) => (
              <div key={service.id} className="service-card">
                <div className="card-top">
                  <span className="card-number">
                    {service.num}
                  </span>

                  <h3 className="card-title">
                    {service.title}
                  </h3>

                  <p className="card-desc">
                    {service.desc}
                  </p>
                </div>

                <div className="card-image-container">
                  {service.image && (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="card-img"
                    />
                  )}

                  <Link
                    to={`/services/${service.slug}`}
                    state={{ service }}
                    className="card-arrow-btn"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;