import React from 'react';
import '../styles/tour-details.css';
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import tourData from '../assets/data/tours';
import calculatorAvgRating from '../styles/utils/avgRating';
import avatar from '../assets/images/avatar.jpg';

const TourDetails = () => {

    const {id} = useParams()
    
    // this is an static data later we will call our API and load our data from database

    const tour = tourData.find((tour) => tour.id === id);

    if (!tour) {
      return (
        <section>
          <Container>
            <Row>
              <Col lg="12">
                <h5>Tour not found.</h5>
              </Col>
            </Row>
          </Container>
        </section>
      );
    }

    // destructure properties from our object
    const { photo, title, desc, price, address, reviews, city, maxGroupSize } = tour;

  const {totalRating, avgRating} = calculatorAvgRating(reviews)

  return (
   <>
    <section>
      <Container>
        <Row>
          <Col lg='8'>
            <div className='tour_content'>
              <img src={photo} alt="" />

              <div className='tour_info'>
                <h2>{title}</h2>

                <div className='d-flex 
                align-items-center gap-5'>
                
                <span className="tour_rating d-flex align-items-center gap-1">
                  <i className="ri-star-fill" style={{ color: "var(--secondary-color)" }}></i>
                  {avgRating === "" ? null : avgRating}
                  {totalRating === 0 ? "Not rated" : <span>({reviews?.length || 0})</span>}
                </span>

                <span>
                  <i className="ri-map-pin-user-fill"></i> {address}
                </span>
                </div>

                <div className="tour_extra-details">
                  <span>
                    <i className="ri-map-pin-2-line"></i>
                    {city}
                  </span>
                  <span>
                    <i className="ri-money-rupee-circle-line"></i>
                    {price} / per person
                  </span>
                  <span>
                    <i className="ri-group-line"></i>
                    {maxGroupSize}
                  </span>
                </div>
                <h5>Description</h5>
                <p>{desc}</p>
              </div>

               {/* ==================tour reviews section start=============== */}
               <div className="tour_reviews mt-4">
                 <h4>Reviews ({reviews?.length} reviews)</h4>

                 <Form>
                  <div className='d-flex align-items-center gap-3 mb-4 
                  rating_group'>
                     <span>
                      1<i className="ri-star-fill"></i>
                     </span>
                     <span>
                      2<i className="ri-star-fill"></i>
                     </span>
                     <span>
                      3<i className="ri-star-fill"></i>
                     </span>
                     <span>
                      4<i className="ri-star-fill"></i>
                     </span>
                     <span>
                      5<i className="ri-star-fill"></i>
                     </span>
                  </div>

                  <div className="review_input">
                    <input type="text" placeholder="Share your thoughts" />
                    <button className="btn primary_btn text-white" type="submit">
                      Submit
                    </button>

                  </div>
                 </Form>

                 <ListGroup className="user_reviews">
                  {
                    reviews?.map((review ,index)=>(
                      <div key={index} className='review_item'>
                        <img src={avatar} alt="" />

                        <div className="w-100">
                          <div className='d-flex align-items-center
                          justify-content-between'>
                            <div>
                              <h5>Rahul</h5>
                              <p>{ Date.now()}</p>
                            </div>

                          </div>
                        </div>
                      </div>
                    ))
                  }
                 </ListGroup> 
               </div> 
               {/* ==================tour reviews section end  =============== */}


            </div>
          </Col>
        </Row>
      </Container>
    </section>
   </>
  );
};

export default TourDetails;
