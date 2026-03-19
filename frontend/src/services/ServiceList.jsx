import React from 'react';
import ServiceCard from './ServiceCard';
import {Col} from "reactstrap";

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData =[
    {
        imgUrl:weatherImg,
        title:"Calculate Weater",
        desc:"Check temperature, humidity, wind speed, and forecasts for any location worldwide.",
    },
    {
        imgUrl:guideImg,
        title:"Best Tour Guide",
        desc:"Plan your perfect trip with personalized recommendations and real-time assistance.",
    },
    {
        imgUrl:customizationImg,
        title:"Customization",
        desc:"Customize your trip with tailored destinations, activities, stays, routes, and guides!",
    },
];

const ServiceList = () => {
  return ( 
   <>
     {servicesData.map((item,index) =>(
    <Col lg="3" key={index}>
        <ServiceCard item ={item} />
    </Col>
     ))}
  </>
 ); 
};

export default ServiceList;
