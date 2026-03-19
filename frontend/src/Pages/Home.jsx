import React from "react";
import '../styles/home.css';
import { Container,Row,Col } from "reactstrap";
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import experieneImg from '../assets/images/experience.png';

import Subtitle from './../shared/Subtitle';

import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImgesGallery from "../components/Image-gallery/MasonryImgesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";

const Home = () => {
  return (
  <>
  {/* ============= hero section start ======== */}
  <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className="hero_content">
              <div className="hero_subtitle d-flex align-items-center ">
                <Subtitle subtitle={'जाने से पहले जान लें...'}/>
                <img src={worldImg} alt="" />
              </div>
              <h1>
              
              यात्रा यादें बनाने का <span className="highlight">द्वार </span> खोलती है
                </h1>
                <p>
                अयोध्या,उत्तर प्रदेश के सरयू नदी के किनारे बसा एक ऐतिहासिक और धार्मिक शहर है. 
                यह भगवान राम की जन्मस्थली है और हिंदुओं के लिए एक प्रमुख तीर्थस्थल है.
                अयोध्या को मोक्षदायिनी भी कहा जाता है.<br/>
               <center> <b>"होइहि सोइ जो राम रचि राखा । को करि तर्क बढ़ावै साखा ॥<br/>
                अस कहि लगे जपन हरिनामा । गईं सती जहँ प्रभु सुखधामा ॥"</b></center>
                    
                </p>
          </div>
        </Col>

        <Col lg='2'>
          <div className="hero_img-box">
            <img src={heroImg} alt="" />
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero_img-box mt-4">
            <video src={heroVideo} alt="" controls/>
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero_img-box mt-5">
            <img src={heroImg02} alt=""/>
          </div>
        </Col>

        <SearchBar/>

      </Row>
    </Container>
  </section>
    {/* ============= hero section start ======== */}
  <section>
    <Container>
      <Row>
        <Col lg='3'>
        <h5 className="services_subtitle">What are serve</h5>
        <h2 className="services_title">We offer our best services</h2>
        </Col>
        <ServiceList/>
      </Row>
    </Container>
  </section>



  {/*===================== featured tour section start=================== */}
  <section>
    <Container>
      <Row>
        <Col lg='12' className={"mb-5"}>
          <Subtitle subtitle={'Explore'}/>
          <h2 className="featured_tour-title">Our featured tours</h2>
        </Col>
        <FeaturedTourList />
      </Row>
    </Container>
  </section>
   {/*===================== featured tour section end=================== */}
   
   {/*===================== experience section start =================== */}
   <section>
    <Container>
      <Row>
        <Col lg='6'>
        <div className="experience_content">
          <Subtitle subtitle={'Experience'}/>

          <h2>With our all experience <br/> we will serve you </h2>
          <p>What should I keep in mind while visiting Ayodhya Ram Mandir?
             <br/>
             What is special about Ayodhya?
          </p>
        </div>

        <div className="counter_wrapper d-flex align-items-center gap-5
        ">
          <div className="counter_box">
            <span>12k+</span>
            <h6>Successful trip</h6>
          </div>
          <div className="counter_box">
            <span>2k+</span>
            <h6>Regular clients</h6>
          </div>
          <div className="counter_box">
            <span>15</span>
            <h6> Years experience</h6>
          </div>
        </div>
        </Col>
        <Col lg='6'>
        <div className="experience_img">
          <img src={experieneImg} alt="" />
        </div>
        </Col>
      </Row>
    </Container>
   </section>
   {/*===================== experience section end   =================== */}

   {/*===================== gallery section start  =================== */}
   <section>
    <Container>
      <Row>
        <Col lg='12'>
        <Subtitle subtitle={'Gallery'}/>
        <h2 className="gallery_title">
          Visit our customers tour gallery</h2>
        </Col>
        <Col lg='12'>
         <MasonryImgesGallery/>
        </Col>
      </Row>
    </Container>
   </section>
   {/*===================== gallery section  end   =================== */}

   {/*===================== testimonial section start  =================== */}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Fans Love'} />
            <h2 className="tetimonial_title">What our fans say about us</h2>
          </Col>
          <Col lg='12'>
          <Testimonials />
          </Col>
        </Row>
      </Container>
    </section>
   {/*===================== testimonial section end    =================== */}
   <Newsletter />
   </>
  );
};

export default Home;
