import React from 'react';
import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-1.jpg';
import ava02 from '../../assets/images/ava-2.jpg';
import ava03 from '../../assets/images/ava-3.jpg';

const Testimonials = () => {

    const settings= {
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

  return (
   <Slider {...settings}>
      <div className='testimonial py-4 px-3'>
        <p>
        Thank you for an amazing holiday.
        A beautiful resort at a price that met our needs.
        Communication is key and any changes 
        that had been made were always communicated efficiently and effectively. 
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>Divyansh Verma</h6>
                <p>Customer</p>
            </div>
        </div>
      </div>
      <div className='testimonial py-4 px-3'>
        <p>
        The Holiday you guys organised for us went like clockwork.
        We'll definately seek you out for our next holiday.
        A job well done  
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>Saundarya Sharma</h6>
                <p>Customer</p>
            </div>
        </div>
      </div>
      <div className='testimonial py-4 px-3'>
        <p>
        Maddison was incredibly responsive and helpful to deal with. I do not normally use travel agents but the 
        experience with Maddison and TravelOnline has made me consider using them in the future, well done!  
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>Karanveer Mehra</h6>
                <p>Customer</p>
            </div>
        </div>
      </div>
      <div className='testimonial py-4 px-3'>
        <p>
        Thank you for an amazing holiday.
        A beautiful resort at a price that met our needs.
        Communication is key and any changes 
        that had been made were always communicated efficiently and effectively. 
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>Divyansh Verma</h6>
                <p>Customer</p>
            </div>
        </div>
      </div>
      <div className='testimonial py-4 px-3'>
        <p>
        The Holiday you guys organised for us went like clockwork.
        We'll definately seek you out for our next holiday.
        A job well done  
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>Saundarya Sharma</h6>
                <p>Customer</p>
            </div>
        </div>
      </div>
      <div className='testimonial py-4 px-3'>
        <p>
        Maddison was incredibly responsive and helpful to deal with. I do not normally use travel agents but the 
        experience with Maddison and TravelOnline has made me consider using them in the future, well done!  
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>Karanveer Mehra</h6>
                <p>Customer</p>
            </div>
        </div>
      </div>
  </Slider>
  );
};

export default Testimonials;
