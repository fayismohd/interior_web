import Navbar from "../sections/Navbar/Navbar";
import Hero from "../sections/Hero/Hero";
import AboutUs from "../sections/AboutUs/AboutUs";
import Services from "../sections/Services/Services";
import WhyChooseUs from "../sections/WhyChooseUs/WhyChooseUs";
import CustomDesign from "../sections/CustomDesign/CustomDesign";
import Testimonials from "../sections/Testimonials/Testimonials";
import ContactSection from "../sections/ContactSection/ContactSection";
import PartnershipBanner from "../sections/PartnershipBanner/PartnershipBanner";
import Footer from "../sections/Footer/Footer";

function HomePage() {
  return (
    <div className="app-wrapper">
      {/* Navigation Overlay */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Us (Who We Are) */}
        <AboutUs />

        {/* Our Services Carousel */}
        <Services />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Custom Design Arc & Metrics */}
        <CustomDesign />

        {/* Customer Testimonials Reviews */}
        <Testimonials />

        {/* Contact Form Section with Backdrop */}
        <ContactSection />

        {/* B2B Partnership Call-to-Action Banner */}
        <PartnershipBanner />
      </main>

      {/* Footer Detailed Links & Branding */}
      <Footer />
    </div>
  );
}

export default HomePage;
