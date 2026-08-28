import DualButton from "../../components/DualButton/DualButton";
import "./Breadcrumb.css";

const Breadcrumb = ({
  title,
  description,
  buttonText = "Explore All Products",
  buttonHref = "#services",
  backgroundImage,
}) => {
  return (
    <section
      className="breadcrumb-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-overlay"></div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-left">
            <h1 className="hero-title">{title}</h1>
          </div>

          <div className="hero-right">
            <p className="hero-description">{description}</p>

            <div className="hero-cta">
              <DualButton
                text={buttonText}
                variant="white"
                href={buttonHref}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;