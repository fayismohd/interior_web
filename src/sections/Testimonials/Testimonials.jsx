import React from "react";
import "./Testimonials.css";

const testimonialsData = [
  {
    id: 1,
    quote: "Fashion Furniture transformed our home with their custom sofa design. The attention to detail and quality craftsmanship exceeded our expectations. We couldn't be happier with the result!",
    name: "Ahmed Al Naqbi",
    title: "Homeowner, Fujairah",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
  },
  {
    id: 2,
    quote: "Their interior design consultation was exactly what our office needed. From concept to completion, they delivered a professional, functional space that our team loves working in.",
    name: "Fatima Al Mansoori",
    title: "Office Manager, Dubai",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
  },
  {
    id: 3,
    quote: "The custom wardrobe design perfectly fits our bedroom space. Fashion Furniture's team was professional, punctual, and delivered exactly as promised. Highly recommended!",
    name: "Mohammed bin Saleh",
    title: "Client, Ajman",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=150",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section section-padding">
      <div className="container">
        
        {/* Header Row */}
        <div className="testimonials-header">
          <div className="testimonials-title-area">
            <div className="testimonials-tag">
              <img src="/images/logo.svg" alt="" className="section-tag-logo" />
              <span className="tag-label">TESTIMONIALS</span>
            </div>
            
            <h2 className="testimonials-heading">
              What Our <br />
              Clients <span className="serif-italic">Say</span>
            </h2>
          </div>

          {/* Google Rating Badge */}
          <div className="google-rating-badge">
            <svg viewBox="0 0 24 24" width="40" height="40" className="google-icon">
              <path
                d="M21.35 11.1h-9.17v2.73h6.51c-.33 1.56-1.56 2.95-3.24 3.5v2.9h5.21c3.04-2.8 4.79-6.93 4.79-11.83a12.3 12.3 0 0 0-.1-1.3z"
                fill="#4285F4"
              />
              <path
                d="M12.18 21a9.06 9.06 0 0 0 6.27-2.3l-5.21-2.9a5.78 5.78 0 0 1-8.54-4.83H1.4v3.08A11.13 11.13 0 0 0 12.18 21z"
                fill="#34A853"
              />
              <path
                d="M4.7 10.97a5.4 5.4 0 0 1 0-3.54V4.35H1.4a11.13 11.13 0 0 0 0 9.7l3.3-3.08z"
                fill="#FBBC05"
              />
              <path
                d="M12.18 4.67c1.7 0 3.22.58 4.42 1.73l3.3-3.3A11.08 11.08 0 0 0 1.4 4.35l3.3 3.08a5.78 5.78 0 0 1 7.48-2.76z"
                fill="#EA4335"
              />
            </svg>
            <div className="google-rating-text">
              <span className="rating-title">Google Rating</span>
              <div className="stars-row">
                <span className="rating-score">4.9</span>
                <div className="stars">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i} className="star-gold">{star}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonialsData.map((test) => (
            <div key={test.id} className="testimonial-card">
              <div className="quote-mark">“</div>
              <p className="testimonial-text">{test.quote}</p>
              
              <div className="testimonial-user">
                <img src={test.avatar} alt={test.name} className="user-avatar" />
                <div className="user-info">
                  <h4 className="user-name">{test.name}</h4>
                  <p className="user-title">{test.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
