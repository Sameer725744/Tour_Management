import React, { useEffect, useState } from 'react';
import CommonSection from '../shared/CommonSection';
import Subtitle from '../shared/Subtitle';

import "../styles/tour.css";
import tourData from '../assets/data/tours';
import TourCard from './../shared/TourCard';
import SearchBar from './../shared/SearchBar';
import Newsletter from './../shared/Newsletter';
import { Container } from 'reactstrap';
import { Row } from 'reactstrap';
import { Col } from 'reactstrap';
import Carousel from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Tour = () => {
  const [page, setPage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // pageCount removed - now using totalPages directly
  }, [page]);

  // Filter tours based on category and search
  const filteredTours = tourData.filter(tour => {
    const matchesCategory = selectedCategory === 'all' || 
                           (selectedCategory === 'featured' && tour.featured) ||
                           (selectedCategory === 'adventure' && tour.distance > 400) ||
                           (selectedCategory === 'budget' && tour.price < 100);
    
    const matchesSearch = tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tour.city.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  // Calculate pagination based on filtered results
  const itemsPerPage = 4;
  const totalPages = Math.ceil(filteredTours.length / itemsPerPage);
  const startIndex = page * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTours = filteredTours.slice(startIndex, endIndex);

  // Reset to page 0 when filters change
  useEffect(() => {
    setPage(0);
  }, [selectedCategory, searchTerm]);

  // Carousel settings
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    fade: true,
    pauseOnHover: false,
  };

  // Featured tours for carousel
  const featuredTours = tourData.filter(tour => tour.featured).slice(0, 5);

  return (
   <>
    <CommonSection title={"Explore Amazing Tours"} />
    
    {/* Hero Carousel Section */}
    <section className="tour-carousel-section">
      <Container>
        <Row>
          <Col lg="12">
            <div className="carousel-container">
              <Carousel {...carouselSettings}>
                {featuredTours.map((tour) => (
                  <div key={tour.id} className="carousel-slide">
                    <div className="carousel-content">
                      <div className="carousel-overlay"></div>
                      <img src={tour.photo} alt={tour.title} className="carousel-image" />
                      <div className="carousel-text">
                        <h2>{tour.title}</h2>
                        <p><i className="ri-map-pin-line"></i> {tour.city}</p>
                        <div className="carousel-price">
                          <span className="price-label">Starting from</span>
                          <span className="price-amount">${tour.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    {/* Search & Filter Section */}
    <section className="search-filter-section">
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-4">
            <Subtitle text="Find Your Perfect Tour" />
            <h2 className="filter-section-title">Discover Extraordinary Destinations</h2>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col lg="8" md="8">
            <SearchBar onSearch={setSearchTerm} />
          </Col>
          <Col lg="4" md="4">
            <div className="category-filter">
              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="category-select"
              >
                <option value="all">All Tours</option>
                <option value="featured">Featured Tours</option>
                <option value="adventure">Adventure Tours</option>
                <option value="budget">Budget Friendly</option>
              </select>
            </div>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col lg="12">
            <div className="tour-count">
              <span className="count-badge">{filteredTours.length}</span>
              <span className="count-text">tours found</span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    {/* Tours Grid Section */}
    <section className='tours-grid-section'>
      <Container>
        <Row>
          {currentTours?.length > 0 ? (
            currentTours.map((tour) => (
              <Col lg='3' md="4" sm="6" key={tour.id}>
                <div className="tour-card-wrapper">
                  <TourCard tour={tour} />
                </div>
              </Col>
            ))
          ) : (
            <Col lg="12">
              <div className="no-results">
                <div className="no-results-icon">🔍</div>
                <h3>No tours found</h3>
                <p>Try adjusting your search or filter criteria</p>
              </div>
            </Col>
          )}
        </Row>

        {/* Enhanced Pagination */}
        {totalPages > 1 && (
          <Row>
            <Col lg='12'>
              <div className="pagination-wrapper">
                <div className="pagination d-flex align-items-center justify-content-center gap-3">
                  {[...Array(totalPages).keys()].map(number => (
                    <span 
                      key={number} 
                      onClick={() => setPage(number)}
                      className={page === number ? "active_page" : ""}
                    >
                      {number + 1}
                    </span>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </section>

    {/* Features Banner */}
    <section className="features-banner">
      <Container>
        <Row>
          <Col lg="3" md="6">
            <div className="feature-item">
              <div className="feature-icon-box">🌍</div>
              <h4>Best Destinations</h4>
              <p>Handpicked locations</p>
            </div>
          </Col>
          <Col lg="3" md="6">
            <div className="feature-item">
              <div className="feature-icon-box">💰</div>
              <h4>Best Price Guarantee</h4>
              <p>Competitive pricing</p>
            </div>
          </Col>
          <Col lg="3" md="6">
            <div className="feature-item">
              <div className="feature-icon-box">⭐</div>
              <h4>Top Rated Tours</h4>
              <p>Quality experiences</p>
            </div>
          </Col>
          <Col lg="3" md="6">
            <div className="feature-item">
              <div className="feature-icon-box">🛡️</div>
              <h4>Secure Booking</h4>
              <p>Safe transactions</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <Newsletter />
   </>
  );
};

export default Tour;
