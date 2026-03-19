import React from 'react';
import { Card, CardBody } from 'reactstrap';
import {Link} from "react-router-dom";
import calculatorAvgRating from '../styles/utils/avgRating';

import './tour-card.css';


const TourCard = ({tour}) => {
    const {id, title, city, photo, price, featured, reviews} =tour;

    const {totalRating, avgRating} = calculatorAvgRating (reviews);

  return (
    <div className='tour_card'>
        <Card>
            <div className='tour_img'>
                <img src={photo} alt="tour-img" />
                { featured && <span>Featured</span>}
            </div>


        </Card>

        <CardBody>
            <div className='card_top d-flex align-items-center
            justify-content-between'>
                <span className='tour_location
                 d-flex align-items-center gap-1'>
                <i className="ri-map-pin-line"></i> 
                {city}
                </span>
                <span className='tour_rating d-flex align-items-center gap-1'>
                <i className="ri-star-fill"></i>
                 {avgRating === 0 ? null:
                 avgRating}
                {totalRating === 0 ? "Not rated" : <span>({reviews?.length || 0})</span>}
                
                </span>
            </div>

            <h5 className="tour_title">
              <Link to={`/tour/${id}`}>{title}</Link></h5>

            <div className="card_bottom d-flex align-items-center 
            justify-content-between mt-3">
                <h5>₹{price}<span>/per person</span></h5>

                <button className="btn booking_btn">
                    <Link to={`/tour/${id}`}>Book Now</Link>
                </button>
            </div>
        </CardBody>
    </div>
  )
}

export default TourCard;
