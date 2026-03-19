import React from "react";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../shared/CommonSection";
import Subtitle from "../shared/Subtitle";
import "./about.css";

const About = () => {
  return (
    <>
      <CommonSection title="About Us" />
      
      {/* Hero Section */}
      <section className="about-hero">
        <Container>
          <Row className="align-items-center">
            <Col lg="6" md="6">
              <div className="about-hero-content">
                <Subtitle text="Welcome to TourVista" />
                <h2 className="hero-title">Your Gateway to Unforgettable Adventures</h2>
                <p className="hero-description">
                  Discover the world's most breathtaking destinations with our curated collection of tours. 
                  We believe that travel isn't just about visiting places—it's about experiencing them deeply, 
                  connecting with local cultures, and creating memories that last a lifetime.
                </p>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="about-hero-image">
                <img src={require("../assets/images/tour.jpg")} alt="Travel adventure" className="img-fluid" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <Subtitle text="Why Choose Us" />
              <h2 className="section-title">Experience Travel Like Never Before</h2>
            </Col>
          </Row>

          <Row>
            <Col lg="4" md="6">
              <div className="feature-card">
                <div className="feature-icon">🌍</div>
                <h3>Curated Destinations</h3>
                <p>
                  Handpicked tours to the world's most stunning locations. From ancient historical sites 
                  to pristine natural wonders, we've carefully selected experiences that showcase 
                  the beauty and diversity of our planet.
                </p>
              </div>
            </Col>

            <Col lg="4" md="6">
              <div className="feature-card">
                <div className="feature-icon">⭐</div>
                <h3>Expert Guidance</h3>
                <p>
                  Our team of travel experts brings decades of combined experience. We provide insider 
                  knowledge, local insights, and personalized recommendations to ensure your journey 
                  exceeds all expectations.
                </p>
              </div>
            </Col>

            <Col lg="4" md="6">
              <div className="feature-card">
                <div className="feature-icon">🛡️</div>
                <h3>Trusted & Secure</h3>
                <p>
                  Your safety and satisfaction are our priorities. With secure booking, transparent 
                  pricing, and 24/7 support, you can focus on what matters—enjoying every moment 
                  of your adventure.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <Container>
          <Row className="text-center">
            <Col lg="3" md="6">
              <div className="stat-card">
                <h3 className="stat-number">500+</h3>
                <p className="stat-label">Tours Available</p>
              </div>
            </Col>
            <Col lg="3" md="6">
              <div className="stat-card">
                <h3 className="stat-number">50K+</h3>
                <p className="stat-label">Happy Travelers</p>
              </div>
            </Col>
            <Col lg="3" md="6">
              <div className="stat-card">
                <h3 className="stat-number">100+</h3>
                <p className="stat-label">Destinations</p>
              </div>
            </Col>
            <Col lg="3" md="6">
              <div className="stat-card">
                <h3 className="stat-number">4.9★</h3>
                <p className="stat-label">Average Rating</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <Container>
          <Row className="align-items-center">
            <Col lg="6" md="6">
              <div className="mission-image">
                <img src={require("../assets/images/tour.jpg")} alt="Our mission" className="img-fluid rounded" />
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="mission-content">
                <Subtitle text="Our Mission" />
                <h2 className="mission-title">Crafting Journeys, Creating Memories</h2>
                <p className="mission-text">
                  At TourVista, we're more than just a booking platform—we're your travel companions. 
                  Our mission is to make extraordinary travel experiences accessible to everyone, 
                  while promoting sustainable tourism that benefits local communities.
                </p>
                <p className="mission-text">
                  Whether you're seeking adrenaline-pumping adventures, peaceful retreats, cultural 
                  immersions, or family vacations, we're here to turn your travel dreams into reality. 
                  Every tour is designed with care, attention to detail, and a passion for exploration.
                </p>
                <div className="mission-signature">
                  <p><strong>Join us and discover the world differently.</strong></p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="cta-title">Ready for Your Next Adventure?</h2>
              <p className="cta-subtitle">
                Explore our collection of tours and find the perfect experience for you
              </p>
              <button className="primary__btn cta-button">
                <a href="/tours">Browse Tours</a>
              </button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
