import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import "./SlideComponent.css";
import slide from "./images_nav/slide1234.jpg";
import slide1 from "./images_nav/slide12.jpg";
import slide2 from "./images_nav/slide129.jpg";
import CollapsibleExample from "./Navbar";

const CustomCarousel = () => {
  return (
    <>
      <CollapsibleExample />
      <Carousel className="custom-carousel">
        <Carousel.Item>
          <img className="d-block w-100" src={slide1} alt="First slide" />
          <Carousel.Caption className="custom-caption">
            <h3  className="third">
              Welcome to Sk Engineering- Your Trusted Roofing Steel Provider
            </h3>
            <p >
              At Sk Engineering, we understand the importance of quality roofing
              materials for your projects. As a leading provider of roofing
              steel solutions, we are dedicated to delivering products that
              exceed industry standards and meet the unique needs of our
              customers.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide2} alt="Second slide" />
          <Carousel.Caption className="custom-caption">
            <h3  className="second">About us</h3>
            <p>
              At Sk Engineering, we are dedicated to revolutionizing the roofing
              industry with our commitment to quality, innovation, and customer
              satisfaction. As a trusted leader in providing premium steel
              roofing solutions, we strive to exceed the expectations of our
              clients and partners at every turn.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide} alt="Third slide" />
          <Carousel.Caption className="custom-caption">
            <h3 className="first">Our Mission</h3>
            <p className="para">
              Our mission at Sk Engineering is to deliver superior roofing steel
              products that enhance the durability, aesthetics, and value of
              every structure they protect. We aim to empower builders,
              contractors, and homeowners with the confidence to construct
              resilient, long-lasting roofs that withstand the test of time and
              weather.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CustomCarousel;
