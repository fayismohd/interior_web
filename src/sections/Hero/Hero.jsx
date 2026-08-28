import DualButton from "../../components/DualButton/DualButton";
import "./Hero.css";
import heroImg from "../../assets/Frame 2147229536.png";

const Hero = () => {
  return (
    <section className="hero-section" style={{ backgroundImage: `url(${heroImg})` }}>
      <div className="hero-overlay"></div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-left">
            <h1 className="hero-title">
              Fashion Furniture <br />
              Custom Interiors <br />
              <span className="serif-italic">Designed Around You</span>
            </h1>
          </div>
          
          <div className="hero-right">
            <p className="hero-description">
              From bespoke sofas and wardrobes to complete interior transformations, we design and build spaces that reflect who you are. Based in Fujairah, UAE, trusted across the Emirates for craftsmanship, precision, and personalized design.
            </p>
            <div className="hero-cta">
              <DualButton text="Get Free Consultation" variant="white" href="/contact" />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
