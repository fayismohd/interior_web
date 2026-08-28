import DualButton from "../../components/DualButton/DualButton";
import "./CustomDesign.css";

// Import local furniture images
import heroLivingRoom from "../../assets/Frame 2147229536.png";
import serviceBed from "../../assets/service_bed.png";
import serviceCurtain from "../../assets/service_curtain.png";
import serviceInterior from "../../assets/service_interior.png";
import customBlueSofa from "../../assets/custom_design_blue_sofa.png";
import customYellowRoom from "../../assets/custom_design_yellow_room.png";
import customDining from "../../assets/custom_design_dining.png";
import customChairs from "../../assets/custom_design_chairs.png";

const arcImages = [
  {
    id: 1,
    url: customBlueSofa,
    alt: "Modern blue sofa corner",
    className: "arc-img-1",
  },
  {
    id: 2,
    url: serviceCurtain,
    alt: "Curtain design",
    className: "arc-img-2",
  },
  {
    id: 3,
    url: heroLivingRoom,
    alt: "Living room design",
    className: "arc-img-3",
  },
  {
    id: 4,
    url: serviceBed,
    alt: "Bedroom design",
    className: "arc-img-4",
  },
  {
    id: 5,
    url: serviceInterior,
    alt: "Kitchen interior design",
    className: "arc-img-5",
  },
  {
    id: 6,
    url: customYellowRoom,
    alt: "Yellow study room design",
    className: "arc-img-6",
  },
  {
    id: 7,
    url: customDining,
    alt: "Dining area design",
    className: "arc-img-7",
  },
  {
    id: 8,
    url: customChairs,
    alt: "Sleek office chairs",
    className: "arc-img-8",
  },
];

const CustomDesign = () => {
  return (
    <section className="custom-design-section section-padding">
      <div className="container">
        
        {/* Floating Arc Container */}
        <div className="custom-design-top">
          <div className="arc-wrapper">
            {arcImages.map((img) => (
              <div key={img.id} className={`arc-image-card ${img.className}`}>
                <img src={img.url} alt={img.alt} />
              </div>
            ))}
          </div>

          {/* Central Call to Action Content */}
          <div className="custom-design-cta">
            <h2 className="custom-design-heading">
              Custom Design <br />
              Built Around <span className="serif-italic">Your Requirement</span>
            </h2>
            <p className="custom-design-subtext">
              Every client's requirement is different, so every design should be too. We don't work off fixed catalogues.
            </p>
            <div className="custom-design-btn">
              <DualButton text="Get Free Consultation" variant="gold" href="/contact" />
            </div>
          </div>
        </div>

        {/* Bottom Three-Column Metrics */}
        <div className="custom-design-bottom">
          <div className="metric-column">
            <h3 className="metric-title">Design Consultation</h3>
            <p className="metric-desc">
              We start by understanding your space, lifestyle, and vision to create tailored solutions
            </p>
          </div>
          
          <div className="metric-column">
            <h3 className="metric-title">Expert Manufacturing</h3>
            <p className="metric-desc">
              Your furniture and materials are crafted with precision and built to the exact specifications
            </p>
          </div>
          
          <div className="metric-column">
            <h3 className="metric-title">Professional Installation</h3>
            <p className="metric-desc">
              We ensure flawless on-site installation and final styling, ready exactly as designed
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CustomDesign;
