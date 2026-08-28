import Navbar from "../sections/Navbar/Navbar";
import Footer from "../sections/Footer/Footer";
import AboutUs from "../sections/AboutUs/AboutUs";
import Breadcrumb from "../sections/Breadcrumb/Breadcrumb";
import "./AboutUsPage.css";
import aboutHero from "../assets/Breadcrumb.webp";


const AboutUsPage = () => {
  return (
    <div className="app-wrapper">

        <Breadcrumb
        title={"About Us"}
        description="Learn more about our company, our values, and what we do."
        buttonText="Learn More"
        buttonHref="#about"
        backgroundImage={aboutHero}
      />
      <Navbar />
      
      <AboutUs />

      <Footer />
    </div>
  );
};

export default AboutUsPage;
