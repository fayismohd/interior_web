import Navbar from "../sections/Navbar/Navbar";
import Footer from "../sections/Footer/Footer";
import ContactSection from "../sections/ContactSection/ContactSection";
import Breadcrumb from "../sections/Breadcrumb/Breadcrumb";
import "./ContactUsPage.css";
import aboutHero from "../assets/Breadcrumb.webp";

const ContactUsPage = () => {
  return (
    <div className="app-wrapper">
      <Navbar />

      <Breadcrumb
        title={"Contact Us"}
        description="Learn more about our company, our values, and what we do."
        buttonText="Learn More"
        buttonHref="#about"
        backgroundImage={aboutHero}
      />

      <ContactSection />

      <div className="contact-page-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.168846220182!2d56.00815188198214!3d25.298530620007323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5bbe61a7d131d%3A0x4a143d874a8e75e1!2sFashion%20Furniture%20LLC!5e0!3m2!1sen!2sin!4v1786857271644!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Fashion Furniture LLC Location"
        ></iframe>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUsPage;